# 📘 GUIDA ALL'AGGIORNAMENTO - ITINERIS v2.0

Questa guida spiega come aggiornare i contenuti della documentazione Itineris.

---

## 🗂️ STRUTTURA DEI FILE

```
GUIDA-V2/
├── index.html          ← NON MODIFICARE
├── css/style.css       ← NON MODIFICARE (stili)
├── js/app.js           ← NON MODIFICARE (logica)
├── content/            ← QUI SI MODIFICANO I CONTENUTI
│   ├── menu.json       ← Voci del menu
│   ├── home.json
│   ├── introduzione.json
│   ├── profilo-commerciale.json
│   ├── gestione-movimento.json
│   ├── eccezioni.json
│   ├── ordini.json
│   ├── esportazioni.json
│   ├── sezione-contabile.json
│   ├── guida-veloce.json
│   ├── app-controllo.json
│   └── changelog.json  ← Storico modifiche
└── img/                ← Screenshot e immagini
```

---

## ✏️ COME MODIFICARE I CONTENUTI

### 1. Aprire il file JSON della sezione

Usa un editor di testo (Notepad++, VS Code, o anche Blocco Note).

### 2. Struttura base di un file JSON

```json
{
  "id": "nome-sezione",
  "titolo": "Titolo della Sezione",
  "aggiornato": "2026-02-03",    ← Aggiorna questa data!
  "nuovo": false,                 ← Metti "true" per badge NUOVO
  "contenuto": [...],
  "sottosezioni": [...]
}
```

### 3. Tipi di contenuto disponibili

#### Paragrafo semplice
```json
{
  "tipo": "paragrafo",
  "testo": "Il testo del paragrafo. Puoi usare <b>grassetto</b> e <a href='url'>link</a>."
}
```

#### Lista puntata
```json
{
  "tipo": "lista",
  "items": [
    "Primo elemento",
    "Secondo elemento",
    "<b>Elemento in grassetto</b>"
  ]
}
```

#### Lista numerata
```json
{
  "tipo": "lista-numerata",
  "items": [
    "Primo passo",
    "Secondo passo"
  ]
}
```

#### Immagine/Screenshot
```json
{
  "tipo": "immagine",
  "src": "cartella/nome-immagine.png",
  "alt": "Descrizione per accessibilità",
  "didascalia": "Testo sotto l'immagine"
}
```

#### Avviso (warning, info, success, error)
```json
{
  "tipo": "avviso",
  "stile": "warning",
  "testo": "<b>Attenzione:</b> messaggio importante"
}
```

#### Box Nota
```json
{
  "tipo": "box-nota",
  "titolo": "Titolo della nota",
  "contenuto": [
    "Punto 1",
    "Punto 2"
  ]
}
```

---

## 🖼️ GESTIONE SCREENSHOT

### Convenzione nomi file

Usa nomi descrittivi in minuscolo con trattini:
- ✅ `configurazione-menu.png`
- ✅ `corse-inserimento-orario.png`
- ❌ `Immagine1.png`
- ❌ `screenshot (2).png`

### Organizzazione cartelle (opzionale)

Puoi organizzare per sezione:
```
img/
├── introduzione/
│   ├── accesso-portale.png
│   └── dashboard.png
├── profilo-commerciale/
│   ├── tariffari-lista.png
│   └── calendari-form.png
└── gestione-movimento/
    ├── corse-menu.png
    └── template-esempio.png
```

### Aggiornare uno screenshot

1. Fai il nuovo screenshot
2. Salvalo con lo STESSO NOME del precedente nella cartella `img/`
3. Aggiorna la data "aggiornato" nel JSON

---

## 🆕 SEGNARE UNA SEZIONE COME "NUOVA"

Nel file JSON della sezione:

```json
{
  "titolo": "Nome Sezione",
  "aggiornato": "2026-02-03",
  "nuovo": true,              ← Cambia da false a true
  ...
}
```

Apparirà un badge rosso "NUOVO" nel menu e nel titolo.

**Ricorda:** Dopo 30 giorni, togli il `"nuovo": true` per non confondere gli utenti.

---

## 📝 REGISTRARE LE MODIFICHE NEL CHANGELOG

Apri `content/changelog.json` e aggiungi in cima all'array "modifiche":

```json
{
  "versione": "2.1",
  "data": "2026-02-15",
  "tipo": "minor",           ← major/minor/fix
  "titolo": "Titolo breve della modifica",
  "descrizione": "Descrizione più dettagliata",
  "dettagli": [
    "Dettaglio 1",
    "Dettaglio 2"
  ],
  "sezioni_modificate": ["gestione-movimento", "corse"]
}
```

### Tipi di modifica:
- **major** (rosso): Grandi cambiamenti, nuove funzionalità importanti
- **minor** (arancione): Piccoli miglioramenti, nuove sezioni
- **fix** (blu): Correzioni, aggiornamenti contenuti

---

## ➕ AGGIUNGERE UNA NUOVA SEZIONE AL MENU

1. Crea il file JSON in `content/nuova-sezione.json`
2. Apri `content/menu.json`
3. Aggiungi la voce:

```json
{
  "id": "nuova-sezione",
  "label": "Nuova Sezione",
  "icona": "📄",
  "tipo": "normale"
}
```

### Icone disponibili (emoji):
🏠 📖 💼 🚌 ⚠️ 🧾 📤 📊 🚀 📱 🆕 ⚙️ 📋 👥 💳 🔧

---

## ⚠️ ERRORI COMUNI DA EVITARE

### 1. Virgole mancanti o in eccesso
```json
// ❌ SBAGLIATO - virgola dopo l'ultimo elemento
{
  "items": [
    "uno",
    "due",   ← virgola di troppo!
  ]
}

// ✅ CORRETTO
{
  "items": [
    "uno",
    "due"
  ]
}
```

### 2. Virgolette non chiuse
```json
// ❌ SBAGLIATO
"testo": "Questo è un testo incompleto

// ✅ CORRETTO
"testo": "Questo è un testo completo"
```

### 3. Caratteri speciali non escapati
```json
// ❌ SBAGLIATO - le virgolette interne rompono il JSON
"testo": "Clicca su "Conferma" per salvare"

// ✅ CORRETTO - usa \" per le virgolette interne
"testo": "Clicca su \"Conferma\" per salvare"
```

---

## 🧪 TESTARE LE MODIFICHE

1. Salva il file JSON modificato
2. Apri `index.html` nel browser (doppio click)
3. Naviga alla sezione modificata
4. Verifica che tutto sia visualizzato correttamente

**Se la pagina non si carica:**
- Apri la Console del browser (F12 → Console)
- Cerca errori rossi che indicano dove è il problema nel JSON

---

## 💡 SUGGERIMENTI

- **Fai backup** prima di modifiche importanti
- **Testa sempre** le modifiche prima di pubblicare
- **Aggiorna la data** "aggiornato" quando modifichi contenuti
- **Registra nel changelog** le modifiche significative
- **Usa un validatore JSON** online per verificare la sintassi:
  https://jsonlint.com/

---

## 📞 SUPPORTO

Per problemi tecnici o domande sulla struttura, contattare il team di sviluppo.
