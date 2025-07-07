document.addEventListener('DOMContentLoaded', () => {

    // --- SELEZIONE DEGLI ELEMENTI DEL DOM ---
    const allContentSections = document.querySelectorAll('.content > section');
    const menuItems = document.querySelectorAll('.menu li.grosso, .menu li.special');
    const searchInput = document.getElementById('search-input');
    const horizontalMenu = document.querySelector('.horizontal-menu');
    const horizontalMenuUl = document.querySelector('.horizontal-menu ul');
    const menuElement = document.querySelector('.menu');
    const menuToggleButton = document.querySelector('.menu-toggle');
    const scrollToTopBtn = document.getElementById("scrollToTop");
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const lightboxImage = document.getElementById("lightbox-image");
    const breadcrumbContainer = document.querySelector('.breadcrumb-container');
    const headerElement = document.querySelector('header');

    // Funzione robusta per ottenere il titolo da un elemento del menu
    function getItemTitle(item) {
        for (const node of item.childNodes) {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
                return node.nodeValue.trim();
            }
        }
        return '';
    }

    // Crea un array ordinato delle pagine per la navigazione Precedente/Successiva
    const pageOrder = Array.from(menuItems).map(item => {
        return {
            id: item.dataset.page,
            title: getItemTitle(item)
        };
    });

    // --- FUNZIONI PRINCIPALI ---

    function changeContent(pageName) {
        allContentSections.forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.getElementById(pageName);
        if (targetSection) {
            targetSection.style.display = 'block';
            updateHorizontalMenu(pageName);
            updatePageNavigation(pageName);
        }
    }
    
    function updateHorizontalMenu(pageName) {
        horizontalMenuUl.innerHTML = '';
        const section = document.getElementById(pageName);
        if (!section) return;
        const headings = section.querySelectorAll('h2');
        headings.forEach(heading => {
            if (heading.id) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `#${heading.id}`;
                a.textContent = heading.textContent;
                li.appendChild(a);
                horizontalMenuUl.appendChild(li);
            }
        });
    }
    
    function updateBreadcrumbs(pageTitle) {
        breadcrumbContainer.innerHTML = '';
        const homeLink = document.createElement('span');
        homeLink.className = 'breadcrumb-item';
        homeLink.textContent = 'Home';
        homeLink.addEventListener('click', () => document.querySelector('li[data-page="home"]').click());
        breadcrumbContainer.appendChild(homeLink);

        if (pageTitle && pageTitle.toLowerCase() !== 'home') {
            const separator = document.createElement('span');
            separator.className = 'breadcrumb-separator';
            separator.textContent = '›';
            breadcrumbContainer.appendChild(separator);
            const currentPage = document.createElement('span');
            currentPage.className = 'breadcrumb-current';
            currentPage.textContent = pageTitle;
            breadcrumbContainer.appendChild(currentPage);
        }
    }

    function updatePageNavigation(currentPageId) {
        const oldNav = document.querySelector('.page-navigation');
        if (oldNav) oldNav.remove();

        const currentIndex = pageOrder.findIndex(p => p.id === currentPageId);
        if (currentIndex === -1) return;

        const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
        const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;

        if (!prevPage && !nextPage) return;

        const navContainer = document.createElement('div');
        navContainer.className = 'page-navigation';

        if (prevPage) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'prev-btn';
            prevBtn.innerHTML = `← Precedente<span>${prevPage.title}</span>`;
            prevBtn.addEventListener('click', () => document.querySelector(`li[data-page="${prevPage.id}"]`).click());
            navContainer.appendChild(prevBtn);
        } else {
             navContainer.appendChild(document.createElement('div'));
        }

        if (nextPage) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'next-btn';
            nextBtn.innerHTML = `Successiva →<span>${nextPage.title}</span>`;
            nextBtn.addEventListener('click', () => document.querySelector(`li[data-page="${nextPage.id}"]`).click());
            navContainer.appendChild(nextBtn);
        }

        const currentSection = document.getElementById(currentPageId);
        if (currentSection) currentSection.appendChild(navContainer);
    }

    function handleMenuItemClick(item) {
        const pageName = item.dataset.page;
        const pageTitle = getItemTitle(item);
        if (!pageName) return;

        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        changeContent(pageName);
        updateBreadcrumbs(pageTitle);

        if (window.scrollY > 100) window.scrollTo({ top: 0, behavior: 'smooth' });
        searchInput.value = '';

        const allSubmenus = document.querySelectorAll('.menu ul.submenu');
        const currentSubmenu = item.querySelector('ul.submenu');
        allSubmenus.forEach(sub => {
            if (sub !== currentSubmenu) sub.style.display = 'none';
        });
        if (currentSubmenu) {
            currentSubmenu.style.display = currentSubmenu.style.display === 'block' ? 'none' : 'block';
        }

        if (menuElement.classList.contains('open')) {
            menuElement.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    }

    // --- IMPOSTAZIONE DEGLI EVENT LISTENER ---

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.closest('ul.submenu a')) {
                if (menuElement.classList.contains('open')) {
                    menuElement.classList.remove('open');
                    document.body.classList.remove('no-scroll');
                }
                return;
            }
            handleMenuItemClick(item);
        });
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleMenuItemClick(item);
            }
        });
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        breadcrumbContainer.innerHTML = '';
        const oldNav = document.querySelector('.page-navigation');
        if (oldNav) oldNav.remove();

        if (searchTerm.length > 2) {
            allContentSections.forEach(section => {
                section.style.display = section.innerText.toLowerCase().includes(searchTerm) ? 'block' : 'none';
            });
            document.querySelector('.menu li.active')?.classList.remove('active');
            horizontalMenuUl.innerHTML = `<li><a href="#">Risultati per "${searchTerm}"</a></li>`;
        } else if (searchTerm.length === 0) {
            document.querySelector('.menu li[data-page="home"]').click();
        }
    });

    document.querySelectorAll('.collapsible').forEach(header => {
        const content = header.nextElementSibling;
        if (content?.classList.contains('collapsible-content')) {
            if (header.parentElement.id !== 'home' && header.parentElement.id !== 'guida_veloce') {
                header.classList.add('collapsed');
                content.classList.add('collapsed');
            }
            header.addEventListener('click', () => {
                header.classList.toggle('collapsed');
                content.classList.toggle('collapsed');
            });
        }
    });
    
    if(menuToggleButton) {
        menuToggleButton.addEventListener('click', () => {
            menuElement.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });
    }

    if (scrollToTopBtn) {
        window.addEventListener("scroll", () => {
            scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });
        scrollToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    if (lightboxOverlay && lightboxImage) {
        document.querySelectorAll("img:not(#lightbox-image)").forEach(img => {
            img.style.cursor = "zoom-in";
            img.addEventListener('click', () => {
                lightboxImage.src = img.src;
                lightboxOverlay.style.display = "flex";
            });
        });
        lightboxOverlay.addEventListener('click', () => lightboxOverlay.style.display = "none");
    }

    // Posizionamento dinamico del menu orizzontale
    if (headerElement && horizontalMenu) {
        const setMenuTop = () => {
            const headerHeight = headerElement.offsetHeight;
            horizontalMenu.style.top = `${headerHeight}px`;
        };
        setMenuTop();
        window.addEventListener('resize', setMenuTop);
    }

    // --- INIZIALIZZAZIONE ---
    document.querySelector('.menu li[data-page="home"]').click();
});