# -*- coding: utf-8 -*-
"""
VERIFICA GUIDA ITINERIS
=======================
Controllo automatico da eseguire PRIMA di pubblicare.
Esegui:   python verifica-guida.py

Tre livelli:
  [BLOCCANTE] -> non si pubblica finche' non e' risolto
  [AVVISO]    -> va guardato, puo' essere legittimo
  [OK]        -> a posto

Le eccezioni giustificate si dichiarano in  .ai/eccezioni-verifica.txt
(una riga per eccezione: CODICE|frammento di testo)
"""
import json, io, os, re, sys, glob, subprocess

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)

bloccanti, avvisi, ok = [], [], []
def B(code, msg): bloccanti.append((code, msg))
def A(code, msg): avvisi.append((code, msg))
def O(msg): ok.append(msg)

# ---------------------------------------------------------------- eccezioni dichiarate
ECC = set()
ecc_file = os.path.join('.ai', 'eccezioni-verifica.txt')
if os.path.exists(ecc_file):
    for line in io.open(ecc_file, encoding='utf-8'):
        line = line.strip()
        if line and not line.startswith('#') and '|' in line:
            code, frag = line.split('|', 1)
            ECC.add((code.strip(), frag.strip()))

def scusato(code, frammento):
    return any(c == code and f in frammento for c, f in ECC)

# ---------------------------------------------------------------- carica i contenuti
content = {}
for f in sorted(glob.glob(os.path.join('content', '*.json'))):
    nome = os.path.basename(f)[:-5]
    try:
        content[nome] = json.loads(io.open(f, encoding='utf-8').read())
    except Exception as e:
        B('JSON', '%s non e\' un JSON valido: %s' % (f, e))
if not content:
    print('Nessun contenuto trovato. Sei nella cartella giusta?')
    sys.exit(2)
O('%d file JSON di contenuto, tutti validi' % len(content))

# Un hash già impostato non deve essere riscritto caricando la sezione:
# altrimenti Indietro percorre voci duplicate e i link profondi perdono l'ancora.
app_src = io.open('js/app.js', encoding='utf-8').read()
if app_src.count('loadSection(target.sectionId, false)') != 2:
    B('NAV', 'inizializzazione e hashchange devono conservare il deep link')
if 'if (updateHash && window.location.hash' not in app_src:
    B('NAV', 'manca il controllo che evita la riscrittura del deep link')

def testo_di(node):
    """tutto il testo pubblicato di una sezione, come stringa unica"""
    return json.dumps(node, ensure_ascii=False)

TUTTO = {k: testo_di(v) for k, v in content.items()}

# Il changelog racconta le correzioni fatte, quindi cita per forza le frasi sbagliate
# ("rimossa l'affermazione secondo cui..."). Va escluso dai controlli sul testo,
# altrimenti ogni correzione registrata diventerebbe un falso allarme.
ISTRUTTIVO = {k: t for k, t in TUTTO.items() if k != 'changelog'}

# ================================================================ 1. CONTROLLI TECNICI
# --- bundle
if not os.path.exists('genera-bundle.ps1'):
    B('SCRIPT', 'genera-bundle.ps1 manca dalla cartella principale: il bundle non e\' rigenerabile')
else:
    O('genera-bundle.ps1 presente')

if os.path.exists(os.path.join('js', 'data.js')):
    s = io.open(os.path.join('js', 'data.js'), encoding='utf-8').read()
    try:
        bundle = json.loads(s[s.index('{'):s.rindex('}') + 1])
    except Exception as e:
        bundle = None
        B('BUNDLE', 'js/data.js non e\' leggibile: %s' % e)
    if bundle is not None:
        manc = [k for k in content if k not in bundle]
        extra = [k for k in bundle if k not in content]
        if manc: B('BUNDLE', 'chiavi presenti in content/ ma NON nel bundle: %s' % ', '.join(manc))
        if extra: B('BUNDLE', 'chiavi nel bundle che non esistono piu\' in content/: %s' % ', '.join(extra))
        div = [k for k in content
               if json.dumps(content[k], sort_keys=True, ensure_ascii=False)
               != json.dumps(bundle.get(k), sort_keys=True, ensure_ascii=False)]
        if div:
            B('BUNDLE', 'il bundle e\' DIVERSO dai sorgenti per: %s -> rilancia genera-bundle.ps1' % ', '.join(div))
        elif not manc and not extra:
            O('js/data.js allineato ai sorgenti (%d sezioni)' % len(bundle))
else:
    B('BUNDLE', 'js/data.js non esiste')

# --- versioni
menu = content.get('menu', {})
chg = content.get('changelog', {})
v_menu = menu.get('versione')
v_chg = chg.get('modifiche', [{}])[0].get('versione')
v_html = sorted(set(re.findall(r'\?v=([0-9.]+)', io.open('index.html', encoding='utf-8').read()))) \
    if os.path.exists('index.html') else []
if not (v_menu and v_chg and len(v_html) == 1 and v_menu == v_chg == v_html[0]):
    B('VERSIONE', 'versioni non allineate: menu=%s changelog=%s index.html=%s' % (v_menu, v_chg, v_html))
else:
    O('versione allineata ovunque: v%s' % v_menu)

# --- voci di menu <-> file
ids = [v['id'] for v in menu.get('voci', []) if v.get('tipo') != 'separatore']
senza = [i for i in ids if i not in content]
if senza: B('MENU', 'voci di menu senza file JSON: %s' % ', '.join(senza))
orfani = [k for k in content if k not in ids and k != 'menu']
orfani = [k for k in orfani if not scusato('MENU', k)]
if orfani: A('MENU', 'file di contenuto fuori dal menu (non raggiungibili): %s' % ', '.join(orfani))
if not senza: O('tutte le voci di menu hanno il loro file')

# --- immagini
refs = []
def raccogli(o):
    if isinstance(o, dict):
        if o.get('tipo') == 'immagine' and o.get('src'): refs.append(o['src'])
        if o.get('tipo') == 'icona-azione' and o.get('icona'): refs.append(o['icona'])
        if o.get('tipo') == 'tools-grid':
            for t in o.get('items', []):
                if t.get('icona'): refs.append(t['icona'])
        for v in o.values(): raccogli(v)
    elif isinstance(o, list):
        for v in o: raccogli(v)
raccogli(content)
disco = set(os.listdir('img')) if os.path.isdir('img') else set()
mancanti = sorted(set(r for r in refs if r not in disco))
if mancanti: B('IMG', 'immagini referenziate ma assenti da img/: %s' % ', '.join(mancanti))
else: O('%d riferimenti a immagini, nessuno rotto' % len(refs))

# Originali con dati/identificativi di formazione: conservarli solo nell'archivio locale.
RISERVATE = {'aggiornamento-multi-3.png', 'aggiornamento-multi-4.png', 'aggiornamento-note-3.png'}
if RISERVATE.intersection(disco) or RISERVATE.intersection(refs):
    B('PRIVACY', 'immagini riservate di formazione presenti nel sito: spostarle fuori da img/')
else:
    O('originali riservati esclusi dal sito')

# Tutti i riferimenti interni devono risolvere a una sezione realmente raggiungibile.
destinazioni = set(ids)
def registra_destinazioni(n):
    for sub in n.get('sottosezioni', []) or []:
        destinazioni.add(sub['id'])
        registra_destinazioni(sub)
for sez in ids:
    if sez in content: registra_destinazioni(content[sez])
for sez in ids:
    if sez not in content: continue
    def controlla_link(n):
        if isinstance(n, dict):
            for key, value in n.items():
                if key == 'link' and isinstance(value, str) and value and not value.startswith(('http:', 'https:')):
                    if value.lstrip('#') not in destinazioni: B('ANCHOR', '%s: %s' % (sez, value))
                controlla_link(value)
        elif isinstance(n, list):
            for value in n: controlla_link(value)
        elif isinstance(n, str):
            for target in re.findall(r'href=[\"\x27]#([^\"\x27]+)', n):
                if target not in destinazioni: B('ANCHOR', '%s: #%s' % (sez, target))
    controlla_link(content[sez])
if not any(c == 'ANCHOR' for c, _ in bloccanti): O('link interni e schede con destinazioni valide')

agg = sorted(d for d in disco if d.startswith('aggiornamento'))
doppie = sorted(set(r for r in refs if refs.count(r) > 1 and r.startswith('aggiornamento')))
if doppie: A('IMG', 'immagini di aggiornamento usate piu\' volte: %s' % ', '.join(doppie))
inutilizzate = [a for a in agg if a not in refs and not scusato('IMG', a)]
if inutilizzate: A('IMG', 'immagini di aggiornamento mai usate: %s' % ', '.join(inutilizzate))
attesa = [a for a in agg if a not in refs and scusato('IMG', a)]
if attesa: O('%d immagini tenute da parte come da eccezioni dichiarate (rilascio in attesa)' % len(attesa))

senza_did = []
def cerca_did(o, sez):
    if isinstance(o, dict):
        if o.get('tipo') == 'immagine' and not (o.get('didascalia') or '').strip():
            senza_did.append('%s: %s' % (sez, o.get('src')))
        for v in o.values(): cerca_did(v, sez)
    elif isinstance(o, list):
        for v in o: cerca_did(v, sez)
for k, v in content.items(): cerca_did(v, k)
if senza_did: A('IMG', '%d immagini senza didascalia (il lettore non sa cosa guarda): %s'
                % (len(senza_did), '; '.join(senza_did[:6]) + ('; ...' if len(senza_did) > 6 else '')))

# --- tipi di blocco
SUPPORTATI = {'paragrafo', 'lista', 'lista-numerata', 'immagine', 'avviso', 'icona-azione',
              'tools-grid', 'box-nota', 'box-esempio', 'tldr', 'steps', 'links', 'cards', 'faq'}
tipi = set()
def cerca_tipi(o, dentro=False):
    if isinstance(o, dict):
        if dentro and isinstance(o.get('tipo'), str): tipi.add(o['tipo'])
        for k, v in o.items(): cerca_tipi(v, k == 'contenuto')
    elif isinstance(o, list):
        for v in o: cerca_tipi(v, dentro)
cerca_tipi(content)
non_sup = sorted(tipi - SUPPORTATI)
if non_sup: B('BLOCCHI', 'tipi di blocco che app.js ignora in silenzio: %s' % ', '.join(non_sup))
else: O('tutti i tipi di blocco sono supportati da app.js')

STILI = {'warning', 'info', 'success', 'error'}
stili_errati = []
def cerca_stili(o):
    if isinstance(o, dict):
        if o.get('tipo') == 'avviso' and o.get('stile') not in STILI:
            stili_errati.append(str(o.get('stile')))
        for v in o.values(): cerca_stili(v)
    elif isinstance(o, list):
        for v in o: cerca_stili(v)
cerca_stili(content)
if stili_errati: B('BLOCCHI', 'avvisi con stile non valido: %s' % ', '.join(set(stili_errati)))

# ================================================================ 2. REGRESSIONI
# errori gia' corretti: se ricompaiono e' una regressione
REGRESSIONI = [
    ('il 90%', 'nessuna percentuale diagnostica senza dati di assistenza'),
    ('ordine di probabilità', 'ordine di controllo non equivale a probabilita misurata'),
    ('solo l\'Amministratore può sbloccare', 'permesso di sblocco non verificato'),
    ('non si toglie dal profilo commerciale', 'permesso di sblocco non verificato'),
    ('variazione è andata a buon fine su tutto il sistema', 'risultato vuoto limitato ai filtri'),
    ('non calcola i collegamenti al momento della ricerca', 'architettura corrente non verificata dalle specifiche 2020'),
    ('sincronizzato con i periodi tariffari regionali', 'motivazione del vincolo mensile non documentata'),
    ('Questa configurazione non genera corse', 'la multitratta richiede una corsa associata'),
    ('stesso codice contabile il sistema non genera comunque alcuna tariffa', 'regola assoluta non provata in presenza di eccezioni'),
    ("clicca <b>'Modifica Template Massivo'</b>", 'il comando e Aggiorna Corse Inattive del Template'),
    ("lascia 'Tutti' per applicare a tutti i tipi", 'aggiungere separatamente importi per raggruppamento'),
    ('È la via da usare quando la vidimatrice', 'la rettifica richiede causa accertata e procedura aziendale'),
    ('Il contenuto è corretto.', 'un avviso di formato non certifica i dati esportati'),
    ('km tra fermata e fermata',        'i km del template sono CUMULATIVI dal capolinea'),
    ("km tra una fermata e l'altra",    'i km del template sono CUMULATIVI dal capolinea'),
    ('prezzo pieno',                    'i titoli per invalidi sono GRATUITI (art. 30 c.3 L.R. 18/2002)'),
    ('lo sconto si applica solo al CSIA','affermazione mai provata: i titoli invalidi sono gratuiti'),
    ('codice fiscale di un Comune',     'il codice contabile non e\' un codice fiscale'),
    ('tessera 1,15',                    'sono le due tessere 1 e 15, non un importo'),
    ('tutte le corse collegate si aggiornano insieme', 'le corse NON si aggiornano da sole'),
    ('Descrizione: lasciare il campo vuoto', 'va compilata col nome della frazione'),
    ('disponibile solo per corse con frequenza', 'Attivazione automatica non e\' riservata alle scolastiche'),
    ("Non esiste un pulsante 'attiva abbonamenti'", 'il titolo va richiesto all\'Admin e poi attivato in Titoli di viaggio'),
    ("flag 'Richiede Tessera'", 'flag inesistente: contano Categoria Calcolo Sconto e Visibilita\''),
    ('di aziende diverse', 'la multitratta unisce due linee con un codice contabile in comune'),
    ('profilo Direttore', 'Statistiche linee e corse CS stanno nel menu Ordini del pannello commerciale'),
    ('<b>Tipologia:</b> mensile o settimanale', 'la colonna Tipologia vale Biglietto o Abbonamento'),
    ('per le tessere 1 e 15', 'il biglietto CS ordinario non ha categoria calcolo sconto'),
    ('Evitare Safari', 'prescrizione mai verificata'),
    ('<b>Oblitera:</b>', 'non e il tooltip della riga; eventuale pulsante interno richiede verifica della maschera'),
    ('Visualizza vidimazioni', 'il comando si chiama Dettaglio Controllo'),
    ('Aggiungi/Scala corse', 'il comando si chiama Modifica corse'),
]

# Regressioni che valgono SOLO dentro una sezione: la stessa frase altrove e' legittima
# (esempio: la Sezione Contabile e' davvero di sola consultazione, Ordini no).
REGRESSIONI_MIRATE = [
    ('ordini', 'sola consultazione', 'da Ordini si oblitera, si blocca un titolo e si scalano corse'),
    ('ordini', 'nessuna modifica operativa', 'da Ordini si oblitera, si blocca un titolo e si scalano corse'),
]
for sezione, frase, perche in REGRESSIONI_MIRATE:
    t = ISTRUTTIVO.get(sezione, '')
    if frase.lower() in t.lower() and not scusato('REGRESSIONE', frase):
        B('REGRESSIONE', '"%s" e\' ricomparso in %s -> %s' % (frase, sezione, perche))
for frase, perche in REGRESSIONI:
    colpiti = [k for k, t in ISTRUTTIVO.items() if frase.lower() in t.lower()]
    colpiti = [k for k in colpiti if not scusato('REGRESSIONE', frase)]
    if colpiti:
        B('REGRESSIONE', '"%s" e\' ricomparso in %s -> %s' % (frase, ', '.join(colpiti), perche))
if not any(c == 'REGRESSIONE' for c, _ in bloccanti):
    O('nessuna regressione: gli errori corretti in passato non sono tornati')

# stato corsa / stato attivazione dati per sinonimi
for k, t in ISTRUTTIVO.items():
    if re.search(r"non attiva.{0,40}stessa cosa|stessa cosa.{0,40}nascost", t, re.I):
        if not scusato('STATI', k):
            B('STATI', '%s: Stato Corsa e Stato Attivazione dati per sinonimi' % k)

# ================================================================ 3. FUORI AMBITO
# contenuto da servizio clienti: non va nella guida dell'operatore
FUORI_AMBITO = [
    'Disability Card', 'certificato di invalidit', 'percentuale minima',
    'bambini di et', 'passeggino', 'museruola', 'cani guida',
    'sanzione amministrativa', 'ristampa dei biglietti', 'ristampa del biglietto',
    'mycard.cotrap.eu', 'assistenza.tecbus', 'valore del supporto tecnologico',
    'duplicato della tessera', 'duplicato della MyCard',
    'quota giornaliera', 'entro 60 minuti', 'oltre 60 minuti',
]
for frase in FUORI_AMBITO:
    for k, t in ISTRUTTIVO.items():
        if frase.lower() in t.lower() and not scusato('AMBITO', frase):
            A('AMBITO', '%s contiene "%s": e\' una regola verso il cliente, non un\'istruzione '
                        'per l\'operatore. Va in Condizioni di Trasporto / Carta dei Servizi, '
                        'non qui (vedi AGENTS.md).' % (k, frase))

# ================================================================ 4. QUALITA' DEL TESTO
# link non sicuri
for k, t in ISTRUTTIVO.items():
    for m in set(re.findall(r'http://[^"\s<>]+', t)):
        A('LINK', '%s usa un link non sicuro: %s' % (k, m))

# denominazioni ufficiali dell'interfaccia
NOMI = [
    (r'Pubblica\s*/\s*Nascondi', 'Pubblica' + chr(92) + 'Nascondi'),
    (r'Aggiorna Corse inattive del Template', 'Aggiorna Corse Inattive del Template'),
    (r'Emetti Titoli di Viaggio', 'Emetti titolo di viaggio'),
    (r'Frequenza Corsa(?![a-z])', 'Frequenze Corsa (la voce di menu e\' al plurale)'),
]
for pattern, giusto in NOMI:
    for k, t in ISTRUTTIVO.items():
        if re.search(pattern, t) and not scusato('NOMI', pattern):
            A('NOMI', '%s: la dicitura reale del pannello e\' "%s"' % (k, giusto))

# FAQ vuote o troppo brevi
for k, v in content.items():
    def cerca_faq(node, sez):
        for b in node.get('contenuto', []) or []:
            if b.get('tipo') == 'faq':
                r = re.sub(r'<[^>]+>', '', b.get('risposta', '')).strip()
                if len(r) < 40:
                    A('FAQ', '%s: risposta troppo breve a "%s"' % (sez, b.get('domanda', '')[:60]))
        for s2 in node.get('sottosezioni', []) or []:
            cerca_faq(s2, sez)
    cerca_faq(v, k)

# ================================================================ REPORT
print()
print('=' * 74)
print('VERIFICA GUIDA ITINERIS' + (' — v%s' % v_menu if v_menu else ''))
print('=' * 74)
for m in ok:
    print('  [OK]        %s' % m)
print()
if bloccanti:
    print('  %d PROBLEMA/I BLOCCANTE/I — non pubblicare:' % len(bloccanti))
    for c, m in bloccanti:
        print('  [%-12s] %s' % (c, m))
    print()
if avvisi:
    print('  %d avviso/i da guardare:' % len(avvisi))
    for c, m in avvisi:
        print('  [%-12s] %s' % (c, m))
    print()
print('-' * 74)
if bloccanti:
    print('ESITO: NON PUBBLICARE. Risolvi i %d problemi bloccanti e rilancia.' % len(bloccanti))
    sys.exit(1)
elif avvisi:
    print('ESITO: pubblicabile, ma controlla i %d avvisi qui sopra.' % len(avvisi))
    sys.exit(0)
else:
    print('ESITO: tutto a posto. La guida si puo\' pubblicare.')
    sys.exit(0)
