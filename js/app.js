/**
 * GUIDA ITINERIS - App principale v2.1
 * Sistema modulare per documentazione dinamica
 */

// ============================================
// CONFIGURAZIONE
// ============================================
const CONFIG = {
    contentPath: 'content/',
    imgPath: 'img/',
    newThresholdDays: 30,
    updateThresholdDays: 14
};

// ============================================
// STATO GLOBALE
// ============================================
let state = {
    menu: null,
    currentSection: null,
    contentCache: {},
    searchIndex: [],
    changelog: null,
    modalKeyHandler: null,
    searchActiveIndex: -1,       // indice risultato selezionato da tastiera
    scrollObserver: null         // IntersectionObserver per menu orizzontale
};

// ============================================
// UTILITÀ
// ============================================

/** Fetch con fallback per protocollo file:// (apertura locale) */
async function safeFetch(url) {
    // 1) Cerca nei dati pre-caricati (bundle per apertura locale file://)
    if (typeof BUNDLED_DATA !== 'undefined') {
        const match = url.match(/([^/]+)\.json$/);
        if (match && BUNDLED_DATA[match[1]]) {
            return JSON.parse(JSON.stringify(BUNDLED_DATA[match[1]]));
        }
    }

    // 2) Fetch standard (per server HTTP)
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (fetchError) {
        // 3) Fallback XMLHttpRequest
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = function () {
                try {
                    resolve(JSON.parse(xhr.responseText));
                } catch (parseError) {
                    reject(new Error(`JSON non valido: ${url}`));
                }
            };
            xhr.onerror = function () {
                reject(new Error(`Impossibile caricare: ${url}`));
            };
            xhr.send();
        });
    }
}

/** Sanitizza testo per prevenzione XSS in innerHTML */
function sanitize(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ============================================
// INIZIALIZZAZIONE
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Menu e changelog in parallelo (sono indipendenti)
        await Promise.all([loadMenu(), loadChangelog()]);
        // buildSubSectionMap (chiamata dentro loadMenu) ha già precariato la cache.
        // buildSearchIndex usa la cache senza refetch.
        buildSearchIndexFromCache();
        initSearch();
        initScrollToTop();

        // Controlla hash URL per deep-linking a sezioni/sottosezioni
        const hash = window.location.hash.slice(1);
        const target = resolveHash(hash);
        if (target) {
            await loadSection(target.sectionId);
            if (target.subId) {
                setTimeout(() => {
                    const el = document.getElementById(target.subId);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 150);
            }
        } else {
            await loadSection('home');
        }
    } catch (error) {
        console.error('Errore inizializzazione:', error);
        const article = document.getElementById('articleContent');
        if (article) {
            article.innerHTML = `
                <div style="text-align:center; padding:3rem 1rem;">
                    <h1 style="color:#ef4444; margin-bottom:1rem;">⚠️ Errore di caricamento</h1>
                    <p style="color:#64748b; margin-bottom:1.5rem;">Impossibile caricare la guida. Verifica la connessione e riprova.</p>
                    <p style="color:#ef4444; font-size:0.8rem; margin-bottom:1rem; font-family:monospace; background:#fef2f2; padding:0.5rem; border-radius:0.5rem;">${String(error)}</p>
                    <button onclick="location.reload()" style="padding:0.75rem 1.5rem; background:#2563eb; color:#fff; border:none; border-radius:0.5rem; cursor:pointer; font-size:1rem;">Ricarica pagina</button>
                </div>`;
        }
        showLoading(false);
    }
});

// Flag per evitare loop hashchange ↔ loadSection
let _ignoreNextHashChange = false;

// Gestione navigazione browser (avanti/indietro)
window.addEventListener('hashchange', async () => {
    if (_ignoreNextHashChange) {
        _ignoreNextHashChange = false;
        return;
    }
    const hash = window.location.hash.slice(1);
    const target = resolveHash(hash);
    if (target && target.sectionId !== state.currentSection) {
        await loadSection(target.sectionId);
        if (target.subId) {
            setTimeout(() => {
                const el = document.getElementById(target.subId);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
        }
    }
});

/** Risolve un hash URL in { sectionId, subId } usando la mappa esplicita costruita al caricamento */
function resolveHash(hash) {
    if (!hash || !state.menu) return null;

    // 1. Voce di menu principale
    const voce = state.menu.voci.find(v => v.id === hash && v.tipo !== 'separatore');
    if (voce) return { sectionId: hash, subId: null };

    // 2. Mappa esplicita subId → sectionId (costruita al caricamento, non dipende dalla cache)
    if (_subSectionMap[hash]) {
        return { sectionId: _subSectionMap[hash], subId: hash };
    }

    // 3. Fallback: cerca nelle sottosezioni già in cache
    for (const [sectionId, content] of Object.entries(state.contentCache)) {
        if (content.sottosezioni) {
            const sub = content.sottosezioni.find(s => s.id === hash);
            if (sub) return { sectionId, subId: hash };
        }
    }

    return null;
}

// ============================================
// CARICAMENTO MENU
// ============================================
// Mappa esplicita subId → sectionId, costruita al caricamento menu
// Evita il bug per cui resolveHash cercava solo nella cache (vuota al 1° click)
const _subSectionMap = {};

async function loadMenu() {
    state.menu = await safeFetch(`${CONFIG.contentPath}menu.json`);
    renderMenu();
    document.getElementById('versionBadge').textContent = `v${state.menu.versione}`;
    // Costruiamo la mappa subId→sectionId da tutti i JSON disponibili nel bundle
    await buildSubSectionMap();
}

async function buildSubSectionMap() {
    if (!state.menu) return;
    const normalVoci = state.menu.voci.filter(v => v.tipo !== 'separatore');
    await Promise.all(normalVoci.map(async (voce) => {
        try {
            const content = await safeFetch(`${CONFIG.contentPath}${voce.id}.json`);
            if (content && content.sottosezioni) {
                content.sottosezioni.forEach(sub => {
                    _subSectionMap[sub.id] = voce.id;
                });
            }
            // Precarica in cache così la navigazione successiva è istantanea
            if (!state.contentCache[voce.id]) {
                state.contentCache[voce.id] = content;
            }
        } catch (e) {
            // Sezione non trovata, ignora
        }
    }));
}

function renderMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';
    menuList.setAttribute('role', 'menu');

    state.menu.voci.forEach(voce => {
        // Separatore tra sezioni guida e sezioni extra
        if (voce.tipo === 'separatore') {
            const sep = document.createElement('li');
            sep.className = 'menu-separator';
            sep.setAttribute('role', 'presentation');
            sep.setAttribute('aria-hidden', 'true');
            sep.innerHTML = `<span class="menu-separator-label">${voce.label}</span>`;
            menuList.appendChild(sep);
            return;
        }

        const li = document.createElement('li');
        li.className = voce.tipo === 'speciale' ? 'special' : '';
        li.dataset.section = voce.id;
        li.setAttribute('role', 'menuitem');
        li.setAttribute('tabindex', '0');
        li.onclick = () => loadSection(voce.id);
        li.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                loadSection(voce.id);
            }
        };

        const iconSpan = document.createElement('span');
        iconSpan.className = 'menu-icon';
        iconSpan.textContent = voce.icona;
        iconSpan.setAttribute('aria-hidden', 'true');

        const labelSpan = document.createElement('span');
        labelSpan.className = 'menu-label';
        labelSpan.textContent = voce.label;

        li.appendChild(iconSpan);
        li.appendChild(labelSpan);

        const badge = document.createElement('span');
        badge.className = 'menu-badge';
        badge.id = `badge-${voce.id}`;
        li.appendChild(badge);

        menuList.appendChild(li);
    });
}

// ============================================
// CARICAMENTO SEZIONI
// ============================================
async function loadSection(sectionId) {
    showLoading(true);

    try {
        let content;
        if (state.contentCache[sectionId]) {
            content = state.contentCache[sectionId];
        } else {
            content = await safeFetch(`${CONFIG.contentPath}${sectionId}.json`);
            state.contentCache[sectionId] = content;
        }

        state.currentSection = sectionId;

        // Setta hash senza innescare l'evento hashchange
        _ignoreNextHashChange = true;
        window.location.hash = sectionId;

        // Aggiorna il titolo del tab del browser
        document.title = content.titolo
            ? `${content.titolo} — Guida ITINERIS`
            : 'Guida ITINERIS';

        renderContent(content);
        updateActiveMenuItem(sectionId);
        updateHorizontalMenu(content);
        updateMenuBadges();
        initScrollSpy(content);

        closeMobileMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
        console.error(`Errore caricamento sezione ${sectionId}:`, error);
        showToast(`Errore nel caricamento di "${sectionId}"`, 'error');
    } finally {
        showLoading(false);
    }
}

function renderContent(content) {
    const article = document.getElementById('articleContent');
    let html = '';

    const badge = getStatusBadge(content.aggiornato, content.nuovo);
    html += `<h1 class="section-title">${content.titolo}${badge ? ' ' + badge : ''}</h1>`;

    if (content.contenuto && content.contenuto.length > 0) {
        html += renderContentBlocks(content.contenuto);
    }

    if (content.sottosezioni && content.sottosezioni.length > 0) {
        content.sottosezioni.forEach(sub => {
            html += `<section id="${sub.id}" class="subsection">`;
            html += `<h2>${sub.titolo}</h2>`;
            html += renderContentBlocks(sub.contenuto);
            html += `</section>`;
        });
    }

    if (content.id === 'changelog' && content.modifiche) {
        html += renderChangelog(content);
    }

    article.innerHTML = html;

    // Gestione immagini rotte dopo il render → placeholder
    article.querySelectorAll('img').forEach(img => {
        img.onerror = function () {
            this.onerror = null;
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'img-missing';
            placeholder.innerHTML = `<span>🖼️</span><span>Immagine non disponibile</span>`;
            this.parentNode.insertBefore(placeholder, this);
        };
    });

    // Listener sicuro per le cards con data-link (Bug #4 fix)
    article.querySelectorAll('.section-card[data-link]').forEach(card => {
        const link = card.dataset.link;
        card.onclick = () => loadSection(link);
        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                loadSection(link);
            }
        };
    });
}

function renderContentBlocks(blocks) {
    if (!blocks || !Array.isArray(blocks)) return '';

    return blocks.map(block => {
        switch (block.tipo) {
            case 'paragrafo':
                return `<p>${block.testo}</p>`;

            case 'lista':
                return `<ul>${block.items.map(item => `<li>${item}</li>`).join('')}</ul>`;

            case 'lista-numerata':
                return `<ol>${block.items.map(item => `<li>${item}</li>`).join('')}</ol>`;

            case 'immagine':
                return `
                    <figure class="img-container">
                        <img src="${CONFIG.imgPath}${block.src}" alt="${sanitize(block.alt)}" loading="lazy" onclick="openImageModal(this)">
                        ${block.didascalia ? `<figcaption>${block.didascalia}</figcaption>` : ''}
                    </figure>`;

            case 'avviso': {
                const iconMap = { warning: '⚠️', info: 'ℹ️', success: '✅', error: '❌' };
                return `
                    <div class="avviso avviso-${block.stile}" role="alert">
                        <span class="avviso-icon" aria-hidden="true">${iconMap[block.stile] || 'ℹ️'}</span>
                        <div class="avviso-content">${block.testo}</div>
                    </div>`;
            }

            case 'icona-azione':
                return `
                    <div class="icona-azione">
                        <img src="${CONFIG.imgPath}${block.icona}" alt="Icona" class="action-icon">
                        <p>${block.testo}</p>
                    </div>`;

            case 'tools-grid':
                return `
                    <div class="tools-grid">
                        ${block.items.map(tool => `
                            <div class="tool-item">
                                <img src="${CONFIG.imgPath}${tool.icona}" alt="${sanitize(tool.nome)}">
                                <div class="tool-info">
                                    <strong>${tool.nome}</strong>
                                    <p>${tool.descrizione}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>`;

            case 'box-nota':
            case 'box-esempio': {
                const boxClass = block.tipo === 'box-nota' ? 'box-nota' : 'box-esempio';
                let boxContent = '';
                if (Array.isArray(block.contenuto)) {
                    boxContent = `<ol>${block.contenuto.map(item => `<li>${item}</li>`).join('')}</ol>`;
                } else {
                    boxContent = `<p>${block.contenuto}</p>`;
                }
                return `
                    <div class="${boxClass}">
                        <div class="box-header">${block.titolo}</div>
                        <div class="box-content">${boxContent}</div>
                    </div>`;
            }

            case 'steps':
                return `
                    <div class="steps-container">
                        ${block.items.map(step => `
                            <div class="step-item">
                                <div class="step-number">${step.numero}</div>
                                <div class="step-content">
                                    <strong>${step.titolo}</strong>
                                    <p>${step.descrizione}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>`;

            case 'links':
                return `
                    <div class="links-container">
                        ${block.items.map(link => `
                            <a href="${sanitize(link.url)}" target="_blank" rel="noopener noreferrer" class="link-card">
                                <span class="link-icon">${link.icona}</span>
                                <span class="link-title">${link.titolo}</span>
                                <span class="link-arrow">→</span>
                            </a>
                        `).join('')}
                    </div>`;

            case 'cards':
                return `
                    <div class="section-cards">
                        ${block.items.map(card => `
                            <div class="section-card" data-link="${sanitize(card.link)}" role="button" tabindex="0" aria-label="Vai a ${sanitize(card.titolo)}">
                                <span class="section-card-icon" aria-hidden="true">${card.icona}</span>
                                <div class="section-card-body">
                                    <strong>${card.titolo}</strong>
                                    <p>${card.descrizione}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>`;

            case 'faq':
                return `
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)" role="button" tabindex="0" aria-expanded="false" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleFaq(this)}">
                            <span class="faq-icon" aria-hidden="true">❓</span>
                            <span class="faq-q-text">${block.domanda}</span>
                            <span class="faq-toggle" aria-hidden="true">▼</span>
                        </div>
                        <div class="faq-answer">
                            <p>${block.risposta}</p>
                        </div>
                    </div>`;

            default:
                return '';
        }
    }).join('');
}

// ============================================
// CHANGELOG
// ============================================
async function loadChangelog() {
    try {
        state.changelog = await safeFetch(`${CONFIG.contentPath}changelog.json`);
    } catch (error) {
        console.warn('Changelog non trovato');
    }
}

function renderChangelog(content) {
    if (!content.modifiche || content.modifiche.length === 0) {
        return '<p>Nessuna modifica registrata.</p>';
    }

    let html = '<div class="changelog-container">';

    content.modifiche.forEach(mod => {
        const typeColors = { major: '#e74c3c', minor: '#f39c12', fix: '#3498db' };
        const typeLabels = { major: 'Major', minor: 'Minor', fix: 'Fix' };

        html += `
            <div class="changelog-item">
                <div class="changelog-header">
                    <span class="changelog-version">v${sanitize(mod.versione)}</span>
                    <span class="changelog-type" style="background: ${typeColors[mod.tipo] || '#64748b'}">${typeLabels[mod.tipo] || mod.tipo}</span>
                    <span class="changelog-date">${formatDate(mod.data)}</span>
                </div>
                <h3 class="changelog-title">${mod.titolo}</h3>
                <p class="changelog-desc">${mod.descrizione}</p>
                ${mod.dettagli ? `
                    <ul class="changelog-details">
                        ${mod.dettagli.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
    });

    html += '</div>';

    if (content.istruzioni_aggiornamento) {
        html += `
            <details class="admin-instructions">
                <summary>📝 Istruzioni per aggiornare la guida</summary>
                <div class="instructions-content">
                    ${content.istruzioni_aggiornamento.passi.map(passo => `
                        <div class="instruction-step">
                            <strong>${passo.titolo}</strong>
                            <p>${passo.descrizione}</p>
                        </div>
                    `).join('')}
                </div>
            </details>
        `;
    }

    return html;
}

// ============================================
// RICERCA (con navigazione tastiera e ARIA)
// ============================================

/**
 * Costruisce l'indice di ricerca full-text usando la cache già popolata
 * da buildSubSectionMap (nessun fetch aggiuntivo).
 */
function buildSearchIndexFromCache() {
    state.searchIndex = [];
    if (!state.menu) return;

    state.menu.voci
        .filter(v => v.tipo !== 'separatore')
        .forEach(voce => {
            const content = state.contentCache[voce.id];
            if (content) {
                indexContentRecursive(content, voce, null);
            }
        });
}

/** Indicizza ricorsivamente sezione e tutte le sue sottosezioni */
function indexContentRecursive(content, menuVoce, parentTitle) {
    const textContent = extractText(content.contenuto);

    state.searchIndex.push({
        id: content.id,
        sectionId: menuVoce.id,
        titolo: content.titolo,
        parentTitle: parentTitle,
        testo: textContent,
        icona: menuVoce.icona
    });

    if (content.sottosezioni && content.sottosezioni.length > 0) {
        content.sottosezioni.forEach(sub => {
            indexContentRecursive(sub, menuVoce, content.titolo);
        });
    }
}

function extractText(blocks) {
    if (!blocks || !Array.isArray(blocks)) return '';

    return blocks.map(block => {
        if (block.testo) return block.testo;
        if (block.items) return block.items.join(' ');
        if (block.descrizione) return block.descrizione;
        return '';
    }).join(' ').replace(/<[^>]*>/g, '');
}

function initSearch() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    const clearBtn = document.getElementById('searchClear');

    // ARIA: regione live per risultati
    results.setAttribute('role', 'listbox');
    results.setAttribute('aria-label', 'Risultati ricerca');
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-controls', 'searchResults');
    input.setAttribute('aria-autocomplete', 'list');

    let debounceTimer;

    input.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value.trim();

        clearBtn.style.display = query ? 'block' : 'none';
        state.searchActiveIndex = -1;

        if (query.length < 2) {
            results.innerHTML = '';
            results.style.display = 'none';
            input.setAttribute('aria-expanded', 'false');
            return;
        }

        debounceTimer = setTimeout(() => {
            performSearch(query);
        }, 200);
    });

    // Navigazione tastiera: Frecce Su/Giù + Enter + Escape
    input.addEventListener('keydown', (e) => {
        const items = results.querySelectorAll('.search-result-item');
        if (!items.length && e.key !== 'Escape') return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                state.searchActiveIndex = Math.min(state.searchActiveIndex + 1, items.length - 1);
                updateSearchHighlight(items);
                break;
            case 'ArrowUp':
                e.preventDefault();
                state.searchActiveIndex = Math.max(state.searchActiveIndex - 1, -1);
                updateSearchHighlight(items);
                break;
            case 'Enter':
                if (state.searchActiveIndex >= 0 && items[state.searchActiveIndex]) {
                    e.preventDefault();
                    items[state.searchActiveIndex].click();
                }
                break;
            case 'Escape':
                clearSearch();
                break;
        }
    });

    // Chiudi dropdown cliccando fuori
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            results.style.display = 'none';
            input.setAttribute('aria-expanded', 'false');
        }
    });
}

/** Aggiorna l'highlight visivo nel dropdown di ricerca */
function updateSearchHighlight(items) {
    items.forEach((item, i) => {
        item.classList.toggle('search-result-active', i === state.searchActiveIndex);
        item.setAttribute('aria-selected', i === state.searchActiveIndex ? 'true' : 'false');
    });
    // Scrolla l'elemento attivo in vista
    if (state.searchActiveIndex >= 0 && items[state.searchActiveIndex]) {
        items[state.searchActiveIndex].scrollIntoView({ block: 'nearest' });
    }
}

function performSearch(query) {
    const results = document.getElementById('searchResults');
    const input = document.getElementById('searchInput');
    const queryLower = query.toLowerCase();

    const matches = state.searchIndex.filter(item => {
        return item.titolo.toLowerCase().includes(queryLower) ||
            item.testo.toLowerCase().includes(queryLower);
    }).slice(0, 10);

    state.searchActiveIndex = -1;

    if (matches.length === 0) {
        results.innerHTML = '<div class="search-no-results">Nessun risultato trovato</div>';
    } else {
        results.innerHTML = matches.map((match, i) => {
            const snippet = getSnippet(match.testo, queryLower);
            return `
                <div class="search-result-item" role="option" aria-selected="false" onclick="goToResult('${match.sectionId}', '${match.id}')">
                    <span class="result-icon" aria-hidden="true">${match.icona}</span>
                    <div class="result-content">
                        <div class="result-title">${highlightMatch(match.titolo, query)}</div>
                        ${match.parentTitle ? `<div class="result-parent">${match.parentTitle}</div>` : ''}
                        <div class="result-snippet">${highlightMatch(snippet, query)}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    results.style.display = 'block';
    input.setAttribute('aria-expanded', 'true');
}

function getSnippet(text, query, maxLength = 100) {
    const index = text.toLowerCase().indexOf(query);
    if (index === -1) return text.slice(0, maxLength) + '...';

    const start = Math.max(0, index - 30);
    const end = Math.min(text.length, index + query.length + 70);

    let snippet = text.slice(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet += '...';

    return snippet;
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function goToResult(sectionId, elementId) {
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchInput').setAttribute('aria-expanded', 'false');
    document.getElementById('searchClear').style.display = 'none';

    loadSection(sectionId).then(() => {
        // Polling con rAF: aspetta che l'elemento esista nel DOM prima di scrollare
        let attempts = 0;
        const maxAttempts = 30;
        function tryScroll() {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                element.classList.add('highlight-section');
                setTimeout(() => element.classList.remove('highlight-section'), 2000);
            } else if (attempts++ < maxAttempts) {
                requestAnimationFrame(tryScroll);
            }
        }
        requestAnimationFrame(tryScroll);
    });
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchInput').setAttribute('aria-expanded', 'false');
    document.getElementById('searchClear').style.display = 'none';
    state.searchActiveIndex = -1;
}

// ============================================
// MENU E NAVIGAZIONE
// ============================================
function updateActiveMenuItem(sectionId) {
    document.querySelectorAll('.menu li').forEach(li => {
        const isActive = li.dataset.section === sectionId;
        li.classList.toggle('active', isActive);
        li.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
}

function updateHorizontalMenu(content) {
    const menuList = document.getElementById('horizontalMenuList');
    const hMenu = document.querySelector('.horizontal-menu');
    menuList.innerHTML = '';

    if (!content.sottosezioni || content.sottosezioni.length === 0) {
        hMenu.classList.remove('visible');
        return;
    }

    hMenu.classList.add('visible');

    content.sottosezioni.forEach(sub => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${sub.id}`;
        a.textContent = sub.titolo;
        a.dataset.subsection = sub.id;
        a.onclick = (e) => {
            e.preventDefault();
            const el = document.getElementById(sub.id);
            if (!el) return;
            const hMenuEl = document.querySelector('.horizontal-menu');
            const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 60;
            const searchH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--search-height')) || 56;
            const menuH = hMenuEl ? hMenuEl.offsetHeight : 0;
            const top = el.getBoundingClientRect().top + window.scrollY - headerH - searchH - menuH - 16;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        };
        li.appendChild(a);
        menuList.appendChild(li);
    });

    // Calcola altezza dinamica del menu multi-riga
    requestAnimationFrame(() => adjustContentForMenu());
}

/** Ricalcola margin-top del contenuto in base all'altezza effettiva del menu orizzontale */
function adjustContentForMenu() {
    const hMenu = document.querySelector('.horizontal-menu');
    const content = document.querySelector('.content');
    const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 60;
    const searchH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--search-height')) || 56;

    const article = document.getElementById('articleContent');
    if (hMenu && hMenu.classList.contains('visible')) {
        const menuH = hMenu.offsetHeight;
        content.style.marginTop = (headerH + searchH + menuH) + 'px';
        // Aggiorna scroll-margin per subsection
        document.querySelectorAll('.subsection').forEach(s => {
            s.style.scrollMarginTop = (headerH + searchH + menuH + 16) + 'px';
        });
        // Padding al fondo: garantisce che anche l'ultima sottosezione possa
        // scrollare correttamente in cima alla viewport (senza il padding
        // il browser non ha spazio sufficiente per scorrere gli elementi finali)
        if (article) {
            const extraPad = Math.max(80, window.innerHeight - (headerH + searchH + menuH + 32));
            article.style.paddingBottom = extraPad + 'px';
        }
    } else {
        content.style.marginTop = '';
        document.querySelectorAll('.subsection').forEach(s => {
            s.style.scrollMarginTop = '';
        });
        if (article) article.style.paddingBottom = '';
    }
}

// Ricalcola su resize
window.addEventListener('resize', () => {
    if (document.querySelector('.horizontal-menu.visible')) {
        adjustContentForMenu();
    }
});

/** ScrollSpy: evidenzia la sottosezione visibile nel menu orizzontale */
function initScrollSpy(content) {
    // Disconnetti l'observer precedente
    if (state.scrollObserver) {
        state.scrollObserver.disconnect();
        state.scrollObserver = null;
    }

    if (!content.sottosezioni || content.sottosezioni.length === 0) return;

    // Ritardo minimo per assicurarsi che il DOM sia renderizzato
    setTimeout(() => {
        const sections = content.sottosezioni
            .map(sub => document.getElementById(sub.id))
            .filter(Boolean);

        if (sections.length === 0) return;

        state.scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    // Evidenzia il link corrispondente nel menu orizzontale
                    document.querySelectorAll('.horizontal-menu a').forEach(a => {
                        const isActive = a.dataset.subsection === id;
                        a.classList.toggle('active', isActive);
                    });
                }
            });
        }, {
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        });

        sections.forEach(section => state.scrollObserver.observe(section));
    }, 50);
}

// Badge aggiornamento nel menu laterale (disabilitati)
async function updateMenuBadges() {
    // Badge rimossi su richiesta
}

// ============================================
// UTILITÀ UI
// ============================================
function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'flex' : 'none';
    document.getElementById('articleContent').style.display = show ? 'none' : 'block';
}

function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.querySelector('.menu-overlay');
    const isOpen = menu.classList.toggle('open');
    overlay.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
}

function closeMobileMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.querySelector('.menu-overlay');
    menu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
}

function initScrollToTop() {
    const btn = document.getElementById('scrollToTop');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                btn.style.display = window.scrollY > 300 ? 'block' : 'none';
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function getStatusBadge(dateStr, isNew) {
    return ''; // Badge rimossi su richiesta
}

function isRecentlyUpdated(dateStr) {
    if (!dateStr) return false;
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    return diffDays <= CONFIG.updateThresholdDays;
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('it-IT', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// IMAGE MODAL (con scroll-lock e fade-in)
// ============================================
function openImageModal(img) {
    // Rimuovi eventuale modal precedente
    document.querySelector('.image-modal')?.remove();

    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Immagine ingrandita');

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const modalImg = document.createElement('img');
    modalImg.src = img.src;
    modalImg.alt = img.alt;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.textContent = '✕';
    closeBtn.setAttribute('aria-label', 'Chiudi immagine');
    closeBtn.onclick = () => closeImageModal(modal);

    modalContent.appendChild(modalImg);
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);

    // Chiudi cliccando fuori dall'immagine
    modal.onclick = (e) => {
        if (e.target === modal) closeImageModal(modal);
    };

    // Blocca scroll del body
    document.body.classList.add('modal-open');
    document.body.appendChild(modal);

    // Trigger fade-in dopo il prossimo frame
    requestAnimationFrame(() => {
        modal.classList.add('visible');
    });

    // Chiudi con Escape
    state.modalKeyHandler = (e) => {
        if (e.key === 'Escape') closeImageModal(modal);
    };
    document.addEventListener('keydown', state.modalKeyHandler);

    // Focus per accessibilità
    closeBtn.focus();
}

function toggleFaq(btn) {
    const item = btn.parentElement;
    const isOpen = item.classList.toggle('faq-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

function closeImageModal(modal) {
    modal.classList.remove('visible');
    document.body.classList.remove('modal-open');

    // Aspetta la transizione CSS prima di rimuovere dal DOM
    setTimeout(() => modal.remove(), 200);

    if (state.modalKeyHandler) {
        document.removeEventListener('keydown', state.modalKeyHandler);
        state.modalKeyHandler = null;
    }
}
