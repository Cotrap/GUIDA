/**
 * GUIDA ITINERIS - Dati pre-caricati (generato automaticamente)
 * NON MODIFICARE QUESTO FILE MANUALMENTE.
 * Per aggiornare: modificare i JSON in content/ e rieseguire genera-bundle.ps1
 * Generato il: 2026-09-09 10:36:07
 */
var BUNDLED_DATA = {
  "app-controllo": {
  "id": "app-controllo",
  "titolo": "APP Controllo",
  "aggiornato": "2026-03-17",
  "nuovo": false,
  "contenuto": [],
  "sottosezioni": [
    {
      "id": "installazione",
      "titolo": "Installazione (solo Android)",
      "aggiornato": "2026-03-17",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>File APK sempre aggiornato:</b> Il file di installazione dell'app viene aggiornato frequentemente. Per ottenere sempre la versione corretta, <b>richiedere il file .apk direttamente agli amministratori del sistema</b>. Non utilizzare file ricevuti in precedenza: potrebbero non essere aggiornati."
        },
        {
          "tipo": "paragrafo",
          "testo": "Una volta ricevuto il file .apk dagli amministratori, procedere con l'installazione sul dispositivo Android:"
        },
        {
          "tipo": "lista",
          "items": [
            "Trasferisci il file .apk ricevuto sul dispositivo Android (via email, WhatsApp o cavo USB).",
            "Apri il file dal gestore file > cartella \"Download\" (o dalla cartella in cui è stato salvato).",
            "Consenti l'installazione da fonti sconosciute se richiesto.",
            "Una volta installata, troverai l'icona dell'app \"Itineris\" nella schermata principale."
          ]
        },
        {
          "tipo": "immagine",
          "src": "app_installazione.png",
          "alt": "Installazione App",
          "didascalia": "Processo di installazione app Itineris"
        }
      ]
    },
    {
      "id": "primo-avvio",
      "titolo": "Primo Avvio",
      "aggiornato": "2026-02-24",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "lista",
          "items": [
            "Consenti l'accesso alla fotocamera, selezionando \"Ogni volta che si usa l'app\"."
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Nota:</b> La fotocamera serve per scansionare i QR code dei biglietti."
        },
        {
          "tipo": "immagine",
          "src": "accesso_fotocamera.png",
          "alt": "Permesso fotocamera",
          "didascalia": "Richiesta permesso fotocamera"
        }
      ]
    },
    {
      "id": "login",
      "titolo": "Login e Inizio Controllo",
      "aggiornato": "2026-02-24",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Apri l'app e inserisci:"
        },
        {
          "tipo": "lista",
          "items": [
            "Email nel campo \"Nome account\"",
            "Password (rispettando maiuscole/minuscole)",
            "Comune di salita (solo per verificatori)"
          ]
        },
        {
          "tipo": "immagine",
          "src": "login_app.png",
          "alt": "Schermata login app",
          "didascalia": "Schermata di login dell'app Itineris"
        }
      ]
    },
    {
      "id": "scansione",
      "titolo": "Scansione del Biglietto",
      "aggiornato": "2026-02-24",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Inquadra il QR code del biglietto con la fotocamera. L'app fornirà uno dei seguenti esiti:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Biglietto valido:</b> Verifica che tratta e orario siano corretti, poi seleziona \"SÌ\".",
            "<b>Biglietto non valido:</b> Premi \"Azioni\" e scegli la motivazione."
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Eccezione:</b> Se il biglietto è non valido per causa riconducibile all'azienda (es. corsa saltata), puoi selezionare \"Accettato a bordo\" su autorizzazione."
        },
        {
          "tipo": "immagine",
          "src": "salitacontrollo.png",
          "alt": "Schermata controllo biglietto",
          "didascalia": "Schermata di controllo e scansione biglietto"
        }
      ]
    },
    {
      "id": "fine-controllo",
      "titolo": "Fine Controllo",
      "aggiornato": "2026-02-24",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Quando tutti i biglietti sono stati controllati, tocca \"TERMINA\" e inserisci il Comune di discesa (solo per verificatori)."
        }
      ]
    },
    {
      "id": "rapportino",
      "titolo": "Invio Rapportino",
      "aggiornato": "2026-02-24",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "lista",
          "items": [
            "Vai alla Home dell'app e seleziona l'icona del rapportino.",
            "Clicca sul rapporto per aprirlo, poi seleziona l'icona con la busta per inviarlo.",
            "Conferma selezionando \"SÌ\". Il rapporto sarà inviato via email all'ufficio competente."
          ]
        },
        {
          "tipo": "immagine",
          "src": "invio_rapportino.png",
          "alt": "Invio rapportino",
          "didascalia": "Schermata di invio rapportino di fine verifica"
        }
      ]
    },
    {
      "id": "link-utili",
      "titolo": "Link Utili",
      "aggiornato": "2026-02-24",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "links",
          "items": [
            {
              "icona": "🎥",
              "titolo": "Installazione App Itineris",
              "url": "https://youtu.be/Kyo_XAA1I1Y"
            },
            {
              "icona": "🔐",
              "titolo": "Impostazione Password",
              "url": "https://youtu.be/y17vm4Jlz00"
            },
            {
              "icona": "👤",
              "titolo": "Inserimento Controllori/Autisti",
              "url": "https://youtu.be/Bq565A9pGok"
            }
          ]
        }
      ]
    }
  ]
},
  "changelog": {
  "id": "changelog",
  "titolo": "Novità e Aggiornamenti",
  "descrizione": "Storico delle modifiche apportate al sistema Itineris e alla guida",
  "modifiche": [
    {
      "versione": "2.16",
      "data": "2026-09-09",
      "tipo": "major",
      "titolo": "Procedure e diagnosi allineate",
      "descrizione": "Revisione delle procedure commerciali, delle FAQ e dei controlli per individuare problemi di configurazione.",
      "dettagli": [
        "Diagnostica per corsa assente, prezzi, abbonamenti e modifiche non propagate: controlli con azienda, date e filtri coerenti.",
        "Frequenze: verificare tipologia, giorni, date e calendario; la denominazione da sola non definisce il servizio.",
        "Template: aggiornare le sole corse interessate, distinguendo pubblicazione e stato interno; verificare quelle escluse per modifiche dirette.",
        "Tariffe: distinguere distanza, eccezioni e sconto; un risultato vuoto non certifica l’aggiornamento dell’intera rete.",
        "Ordini: separati consultazione, controlli e rettifiche; corrette le indicazioni non confermate sullo sblocco.",
        "Confermate in guida Notifica App Broadcast e Note emissione, con le rispettive precauzioni operative.",
        "Corretti riferimenti e collegamenti fra procedure e FAQ."
      ],
      "sezioni_modificate": [
        "diagnostica",
        "faq",
        "gestione-movimento",
        "eccezioni",
        "configurazione",
        "ordini",
        "cs-invalidi",
        "guida-veloce",
        "profilo-commerciale",
        "esportazioni"
      ]
    },
    {
      "versione": "2.15",
      "data": "2026-09-09",
      "tipo": "major",
      "titolo": "Le novità del rilascio: notifiche broadcast e note sui titoli gratuiti",
      "descrizione": "Le due funzioni annunciate con la mail di rilascio sono ora attive in produzione e sono state documentate: la notifica broadcast a tutti gli utenti dell'app e la nota da associare ai titoli emessi gratuitamente. Nel verificarle sono emerse alcune differenze fra la guida e il pannello, corrette qui.",
      "dettagli": [
        "Nuova sezione <b>Risolvi un problema</b>: un indice diagnostico organizzato per sintomo (la corsa non compare, il prezzo non torna, l'abbonamento non si compra, il cliente ha un problema...) con i controlli da fare nell'ordine giusto e il collegamento diretto al punto della guida che spiega come si fa",
        "Ordini → Biglietti: documentata la nuova tipologia <b>Notifica App Broadcast</b>, che manda l'avviso a tutti gli utenti che hanno installato l'app COTRAP e non solo ai propri clienti. Va concordata con l'Amministratore COTRAP",
        "Ordini → Biglietti: descritti i campi della maschera <b>Invia notifica a clienti</b>, compreso il limite di 200 caratteri del testo quando si sceglie la notifica broadcast",
        "Emetti titolo di viaggio: nuova parte <b>Note per titolo</b>. Ad ogni titolo emesso gratuitamente si può associare una nota, che resta visibile solo al commerciale. Se il titolo prevede più quantità la nota non viene duplicata, ma applicata a ciascun titolo",
        "Ordini: le note si rileggono nel <b>Dettaglio</b> del titolo, campo <b>Note emissione</b>, sia sui biglietti sia sugli abbonamenti",
        "Ordini → Abbonamenti: corretto l'elenco delle operazioni di riga. Sono <b>Inserisci Controllo</b>, <b>Dettaglio Controllo</b>, <b>Dettaglio</b>, <b>Blocca</b> e <b>Modifica corse</b>. I nomi si riferiscono alle icone di riga, non ai pulsanti interni delle maschere",
        "Ordini → Abbonamenti: completato l'elenco dei filtri con quelli realmente disponibili, dai codici contabili al numero di corse residue",
        "Ordini → Abbonamenti: nuovo riquadro sui campi del dettaglio che servono in assistenza, fra cui <b>Importo Da Tariffario</b>, <b>Km Tariffario</b> ed <b>Eccezione Tariffaria</b>, che dicono subito perché un abbonamento costa quello che costa",
        "Ordini → Biglietti: documentate le due operazioni di riga (Inserisci Controllo e Dettaglio) e i campi aggiuntivi del dettaglio, compreso Importo Non Scontato",
        "Ordini → Biglietti: segnalato che la ricerca accetta un intervallo di date di <b>massimo 40 giorni</b>, altrimenti compare un messaggio di errore e la ricerca non parte",
        "Home: aggiunta la scheda della nuova sezione Risolvi un problema"
      ],
      "sezioni_modificate": [
        "ordini",
        "emetti-titolo-viaggio",
        "diagnostica",
        "home"
      ]
    },
    {
      "versione": "2.14",
      "data": "2026-09-09",
      "tipo": "major",
      "titolo": "Revisione completa della guida, sezione per sezione",
      "descrizione": "Riletta e corretta tutta la guida confrontandola con il pannello reale e con la documentazione di sistema. Sistemate incoerenze fra quello che la guida elencava e quello che il portale mostra davvero, completati gli elenchi dei filtri e delle esportazioni, e colmati due buchi importanti: i Titoli di Viaggio mancavano dalla Guida Veloce e la sezione Ordini era descritta come di sola consultazione.",
      "dettagli": [
        "Ordini: corretta l'affermazione secondo cui la sezione sarebbe di sola consultazione. Dagli abbonamenti si inseriscono controlli, si blocca un titolo e si aggiungono o scalano corse",
        "Ordini: elencata anche Stato Controlli, che mancava fra le voci della sezione",
        "Ordini → Biglietti: completato l'elenco dei filtri con quelli realmente presenti (Data Inizio/Fine Partenza, comune e frazione di arrivo, stato pagamento, canale, vidimato a bordo, stato biglietto, tipo anomalia, con cambio, azione controllore)",
        "Ordini → Biglietti: documentato il pulsante Invia notifica ad Utenti, con i suoi campi e l'avvertenza che la comunicazione parte davvero e non si può richiamare",
        "Ordini → Abbonamenti: precisato che un abbonamento bloccato non si sblocca dal profilo commerciale",
        "Guida Veloce: aggiunto il passo mancante sull'attivazione dei Titoli di Viaggio. Pubblicare le corse fa comparire i biglietti, ma gli abbonamenti vanno richiesti e attivati a parte",
        "Guida Veloce: nel passo sulla Configurazione aggiunti gli utenti dell'app di controllo",
        "Configurazione: l'elenco delle voci dimenticava Utenti App Controlli, che pure era già documentata sotto; corretto anche il riepilogo che diceva che il consorziato gestisce una sola voce",
        "Configurazione → Tariffari: spiegato come il tariffario si lega alle proprie corse, cioè per fasce chilometriche a partire dai km del percorso",
        "Configurazione → Frequenze Corsa: aggiunta l'avvertenza che conta la Tipologia e non il nome dato alla frequenza",
        "Esportazioni: completato l'elenco dei file con Corse, PoliTemplate ed Eccezioni tariffarie Abbonamenti; spiegato che la campanella avvisa quando un'esportazione è pronta; aggiunta la nota su Excel per i file che hanno estensione .xls ma sono testo separato da tabulazioni",
        "Home: corretta la descrizione della card Ordini, aggiunte le card Emetti Titolo di Viaggio e CS Invalidi che mancavano, e spiegato che in Itineris «azienda» è un'area di lavoro, per chi ne gestisce più di una",
        "Profilo Commerciale: l'iter di creazione di una linea ora comprende la pubblicazione delle corse e i titoli di viaggio, e cita anche la voce Emetti titolo di viaggio",
        "Eccezioni tariffarie Abbonamenti: non riguardano solo i mensili, l'importo si imposta per raggruppamento tariffario",
        "Eccezioni Chilometriche: spiegato perché la data può essere solo il primo del mese e cosa indica davvero la colonna In elaborazione",
        "Controllo Tariffario Abbonamenti: riscritte le indicazioni su cosa fare quando una tratta non ha abbonamento o quando andata e ritorno hanno importi diversi",
        "Sezione Contabile: il riepilogo ora cita anche la funzione Credito",
        "FAQ: corretta la risposta che diceva che gli abbonamenti si attivano da soli. Il titolo va prima richiesto all'Amministratore COTRAP e poi attivato in Gestione Movimento → Titoli di viaggio",
        "FAQ: tolto il riferimento a un flag «Richiede Tessera» che nel pannello non esiste. Se un abbonamento richiede la MyCard si legge nella Categoria Calcolo Sconto e nel campo Visibilità del titolo (Account oppure Account_Tessera)",
        "FAQ e Gestione Movimento: la linea multitratta non riguarda aziende diverse, ma due proprie linee che hanno un codice contabile in comune. Corretti anche gli esempi",
        "FAQ: tolta l'indicazione, mai verificata, di evitare Safari",
        "FAQ: precisato che il selettore dell'azienda in alto a destra è quello del pannello commerciale",
        "FAQ: spiegata la differenza fra Statistiche linee, che conta per data di emissione, e Statistiche corse CS, che conta per data di partenza",
        "Gestione Movimento → Titoli di Viaggio: corretto l'elenco delle colonne. Raggruppamento Tariffario Urbano ed Extra Urbano sono due colonne distinte, la Tipologia vale Biglietto o Abbonamento e non mensile o settimanale, e lo Stato attivazione ha quattro valori come quello delle corse",
        "Gestione Movimento → Titoli di Viaggio: chiarito che nella configurazione i campi in alto sono in sola lettura e che i riquadri su cui interviene il consorziato sono quattro: linee e corse abilitate, linee e corse da escludere, codici contabili abilitati, codici contabili da escludere",
        "Gestione Movimento → Titoli di Viaggio: aggiunti i filtri della pagina, utili per trovare un titolo rimasto in uno stato intermedio",
        "CS Invalidi e Gestione Movimento: il biglietto CS ordinario non è legato alle tessere 1 e 15, che sono invece la categoria calcolo sconto degli abbonamenti standard",
        "Ordini: segnalate le voci Statistiche linee e Statistiche corse CS, che compaiono nel menu di alcuni profili",
        "Sezione Contabile: indicato che Statistiche linee compare anche nel menu Ordini del pannello commerciale",
        "Aggiunte le didascalie alle 14 immagini che ne erano prive, in Configurazione e Gestione Movimento: ora ogni schermata dice cosa mostra"
      ],
      "sezioni_modificate": [
        "home",
        "profilo-commerciale",
        "configurazione",
        "esportazioni",
        "ordini",
        "guida-veloce",
        "eccezioni",
        "sezione-contabile",
        "faq",
        "cs-invalidi",
        "gestione-movimento"
      ]
    },
    {
      "versione": "2.13",
      "data": "2026-09-09",
      "tipo": "minor",
      "titolo": "Spiegato perché il sistema ricalcola, i due campi dei km e il campo Sosta",
      "descrizione": "Aggiunte le spiegazioni che mancavano sul funzionamento del sistema, ricavate dalle specifiche di progetto di Itineris: perché dopo una modifica compare un contatore e servono gli stati intermedi, che differenza c'è tra Km tariffario e Km effettivi, e a cosa serve davvero il campo Sosta.",
      "dettagli": [
        "Comprendere il Sistema: nuovo riquadro che spiega perché alcune operazioni non sono immediate. Itineris tiene precalcolate tutte le combinazioni di viaggio, quindi ogni modifica a monte le fa ricostruire: da qui il contatore In elaborazione e gli stati In attivazione / In disattivazione",
        "Creazione del Template: nuovo riquadro sui due campi dei chilometri. Km tariffario è il chilometraggio da contratto ed è quello che determina il prezzo; Km effettivi è la distanza reale e serve come controllo",
        "Creazione del Template: spiegato a cosa serve il campo Sosta, cioè a costruire le coincidenze fra corse. Modificarlo o azzerarlo può far sparire collegamenti dallo shop",
        "Titoli di Viaggio: precisate le definizioni contrattuali degli abbonamenti — il 42 e il 10 sono gli abbonamenti ridotti, validi per non più di cinque giorni a settimana",
        "Configurazione: la sottosezione Frequenza Corsa è stata rinominata Frequenze Corsa, come la voce reale del menu",
        "Uniformata in tutta la guida la dicitura del pulsante Pubblica\\Nascondi, che prima era scritta con la barra al contrario",
        "Aggiunto lo script verifica-guida.py: un controllo automatico da eseguire prima di pubblicare, che blocca regressioni, contenuti fuori ambito e diciture sbagliate dei comandi"
      ],
      "sezioni_modificate": [
        "gestione-movimento",
        "configurazione",
        "faq"
      ]
    },
    {
      "versione": "2.12",
      "data": "2026-09-09",
      "tipo": "major",
      "titolo": "Correzione: i titoli per invalidi sono gratuiti. Sezione Contabile completata",
      "descrizione": "Corretta l'informazione sul costo dei titoli di viaggio per persone con disabilità: sono gratuiti ai sensi dell'art. 30 comma 3 della L.R. Puglia n. 18/2002, come previsto dalle Condizioni Generali di Trasporto COTRAP. Completata la Sezione Contabile con le funzioni Credito e Spese Abbonamenti Agenzie.",
      "dettagli": [
        "CORREZIONE PRINCIPALE — cs-invalidi.json: rimossa l'affermazione errata secondo cui il CSI sarebbe «sempre a prezzo pieno» e lo sconto si applicherebbe solo a CSIA e CSUIA. I titoli per invalidi (CSI, CSIA, CSUI, CSUIA) sono gratuiti per il cliente",
        "cs-invalidi.json: precisato il limite reale — 2 biglietti al giorno (andata e ritorno) più altri 2 per l'accompagnatore quando l'utente ne ha diritto",
        "cs-invalidi.json: aggiunto il riquadro sulla tessera MyCard richiesta (portale mycard.cotrap.eu, 10,00 €, personale e non cedibile, validità 12 mesi per le categorie art. 30 c. 3)",
        "cs-invalidi.json: riformulata la nota su chi vuole acquistare un CS ordinario a pagamento",
        "gestione-movimento.json → Titoli di Viaggio: indicata la gratuità accanto a CSI, CSIA, CSUI e CSUIA",
        "gestione-movimento.json → Titoli di Viaggio: indicata la gratuità degli abbonamenti invalidi, aggiunto l'Abb. Settimanale Invalidi/12 e chiarito che l'elenco non è esaustivo perché dipende da cosa l'Amministratore ha abilitato per l'azienda",
        "sezione-contabile.json: aggiunta la funzione Credito tra quelle dell'ambiente contabile, che prima non era citata",
        "sezione-contabile.json: nuova sottosezione Spese Abbonamenti Agenzie con la procedura completa di esportazione per anno contabile",
        "sezione-contabile.json e faq.json: rimossa l'indicazione non verificata sulla posizione del nome azienda nel profilo contabile; resta la verifica dell'utente in basso a sinistra",
        "home.json: precisato che il selettore dell'azienda in alto a destra riguarda il pannello commerciale"
      ],
      "sezioni_modificate": [
        "cs-invalidi",
        "gestione-movimento",
        "sezione-contabile",
        "faq",
        "home"
      ]
    },
    {
      "versione": "2.11",
      "data": "2026-09-08",
      "tipo": "major",
      "titolo": "Correzione dei km del template, degli stati della corsa e degli screenshot",
      "descrizione": "Revisione basata su verifiche dirette nel portale Itineris. Corretta la regola dei km del template (sono cumulativi dal capolinea, non tratta per tratta), chiarita la differenza tra Stato Corsa e Stato Attivazione, riassegnati tutti gli screenshot delle sezioni aggiunte con la v2.2 e aggiornati i riferimenti all'interfaccia.",
      "dettagli": [
        "CORREZIONE PRINCIPALE — km del template: erano descritti come «km tra fermata e fermata», in realtà sono cumulativi dal capolinea come i minuti. Aggiornati TL;DR, avvisi, box-esempio, lista errori comuni, Guida Veloce e 5 FAQ",
        "Riscritta la regola sui «km 0»: due fermate con lo stesso codice contabile mostrano lo stesso valore di km, che non va azzerato; tra fermate con lo stesso codice non nasce comunque tariffa",
        "Corretta la FAQ che consigliava di azzerare i km nel template per bloccare una sottotratta: con km cumulativi falserebbe tutte le distanze a valle",
        "Stato Corsa (Attiva/Sospesa) e Stato Attivazione (Non attiva/In attivazione/Attiva/In disattivazione) ora sono documentati come campi distinti, con i valori reali. Riscritta la FAQ che li dava per sinonimi",
        "Chiarito che «disattivare le corse» per l'aggiornamento massivo significa portare lo Stato Attivazione a «Non attiva» con l'icona Pubblica\\Nascondi",
        "Corretta la FAQ che affermava che modificando il template tutte le corse si aggiornano insieme",
        "Rimossa l'indicazione errata secondo cui Attivazione\\Disattivazione Automatica sarebbe disponibile solo per le frequenze Scolastiche",
        "Aggiunto avviso: la denominazione di una frequenza può non corrispondere alla sua tipologia (es. una frequenza chiamata «FESTIVO» può essere di tipologia Giornaliera)",
        "Screenshot: riassegnati tutti i 12 file aggiornamento-* (eccezioni chilometriche, modifica template massivo, multitratta, titoli gratuiti), che erano associati al passo sbagliato. Aggiunta l'immagine della ricerca multitratta su Portale Clienti, prima inutilizzata",
        "Titoli gratuiti: rimossa l'immagine con didascalia inventata sulla stampa PDF e aggiunta la schermata del Portale Clienti aperto con privilegi admin",
        "Aggiornata la descrizione dell'interfaccia: l'utente è in basso a sinistra, l'azienda nel selettore in alto a destra (Home, Sezione Contabile, FAQ)",
        "Aggiunti i pulsanti ASSISTENZA e la campanella delle notifiche esportazioni",
        "Linee: aggiunte le due operazioni del template finora non documentate, «Aggiorna Corse Inattive del Template» ed «Esporta», e usati i nomi reali dei comandi",
        "Corse: documentati i campi Codice turno e Note; il campo Mezzo è ora descritto come facoltativo",
        "Corretta la dicitura «tessera 1,15»: sono le due tessere 1 e 15 (Tessera Elettronica Normale), non un importo",
        "CS Invalidi: precisato che se i titoli CSI/CSIA/CSUI/CSUIA non compaiono vanno richiesti all'Amministratore, perché non sono abilitati per tutte le aziende",
        "Codici contabili: chiarito che uno stesso Comune può avere più codici, non solo per le frazioni",
        "Ripristinato lo script genera-bundle.ps1 nella cartella principale e rigenerato js/data.js, che era fermo alla v2.6 e non conteneva la sezione CS Invalidi"
      ],
      "sezioni_modificate": [
        "gestione-movimento",
        "faq",
        "eccezioni",
        "emetti-titolo-viaggio",
        "cs-invalidi",
        "guida-veloce",
        "home",
        "sezione-contabile"
      ]
    },
    {
      "versione": "2.10",
      "data": "2026-03-30",
      "tipo": "fix",
      "titolo": "Allineamento tutte le sezioni alle modifiche CS Invalidi",
      "descrizione": "Aggiornate tutte le sezioni impattate dall'introduzione dei CS Invalidi: Linee, Titoli di Viaggio, Ordini Biglietti, Statistiche Linee, Statistiche Venduto, FAQ.",
      "dettagli": [
        "gestione-movimento.json → Linee: aggiunto avviso che la Tipologia (Regionale/Provinciale vs Comunale) determina quali CS sono disponibili (CS/CSI/CSIA vs CSU/CSUI/CSUIA)",
        "gestione-movimento.json → Titoli di Viaggio: riscritta sezione con le 6 categorie CS, separazione extraurbano/urbano, rimando a sezione CS Invalidi per procedura completa CSI",
        "ordini.json → Biglietti: aggiunti 5 nuovi filtri (Titolo di viaggio, Categoria calcolo sconto, Numero tessera, Codice fiscale, FID), aggiornato dettaglio biglietto con nuovi campi",
        "sezione-contabile.json → Statistiche Linee: aggiunto info su colonna Denominazione titolo di viaggio (CS/CSI ecc.) e importo scontato, aggiornata nota su esportazione con campi leggibili",
        "sezione-contabile.json → Statistiche Venduto: aggiunto filtro Titolo di Viaggio con fattore di sconto, nota che è presente in .xls ma non in .txt",
        "faq.json: aggiunta FAQ su come trovare biglietti CSI, aggiornata FAQ ricerca biglietto cliente con riferimento a numero tessera/CF"
      ],
      "sezioni_modificate": [
        "gestione-movimento",
        "ordini",
        "sezione-contabile",
        "faq"
      ]
    },
    {
      "versione": "2.9",
      "data": "2026-03-30",
      "tipo": "major",
      "titolo": "Nuova sezione CS Invalidi (CSI, CSIA, CSUI, CSUIA)",
      "descrizione": "Aggiunta nuova sezione dedicata ai biglietti di Corsa Semplice per invalidi. Documenta le 6 categorie CS, la separazione CS/CSU per tipo linea, la procedura di configurazione e i nuovi filtri in Ordini e Statistiche.",
      "dettagli": [
        "Nuova sezione cs-invalidi.json con 4 sottosezioni: Le 6 categorie, Configurazione profilo Commerciale, Come funziona per l'utente, Nuovi filtri in Ordini e Statistiche",
        "Chiarita la separazione CS (extraurbano) vs CSU (urbano) introdotta con i CSI",
        "Documentata la procedura obbligatoria: Admin crea il titolo → Commerciale seleziona le linee → Commerciale attiva",
        "Documentato il limite di 2 biglietti CSI al giorno per utente",
        "Documentata l'opzione 'Visibilità titoli senza tessera' nella categoria calcolo sconto",
        "Documentati i nuovi filtri in Ordini → Biglietti: Titolo di viaggio, Categoria calcolo sconto, Numero tessera, Codice fiscale, FID",
        "Documentate le modifiche alle statistiche: Statistiche Linee, Corse, Venduto",
        "Aggiunta voce menu CS Invalidi con icona ♿"
      ],
      "sezioni_modificate": [
        "cs-invalidi",
        "menu"
      ]
    },
    {
      "versione": "2.8",
      "data": "2026-03-30",
      "tipo": "major",
      "titolo": "FAQ ampliate: eccezioni step-by-step, Template Massivo, Multitratta, Controllo Prezzi",
      "descrizione": "Riscritta e ampliata la sezione FAQ con procedure operative complete, nuove sezioni dedicate a Modifica Template Massivo e Linea Multitratta, guida dettagliata alla scelta tra Eccezione Chilometrica e Tariffaria, FAQ su errori comuni del browser.",
      "dettagli": [
        "faq-prezzi: riscritta completamente con 6 FAQ — procedura diagnostica completa per prezzi sbagliati, guida alla scelta Chilometrica vs Tariffaria con casi pratici e caso ibrido, step-by-step per Controllo Tariffario, Controllo Tariffario Itinerario e Controllo Tariffario Abbonamenti",
        "Nuova sezione FAQ 'Modifica Template Massivo': cos'è, procedura passo per passo, quali corse sono escluse, come risolvere corse con vecchi orari, Duplica e Inverti",
        "Nuova sezione FAQ 'Linea Multitratta': quando usarla, struttura template a 3 poli, debug abbonamento non visibile, limitazione biglietti",
        "faq-eccezioni: aggiunte procedure complete step-by-step per Eccezione Chilometrica, Eccezione Tariffaria Biglietti e Eccezione Tariffaria Abbonamenti",
        "faq-corse-problemi: aggiunte FAQ su cache browser e Admin Panel lento",
        "faq-abbonamenti: aggiunta FAQ su tessera MyCard (quando è obbligatoria, emissione gratuita)",
        "faq-contabile: aggiunta procedura completa step-by-step esportazione Dati Contabili, FAQ differenza statistiche mensili/linee/venduto, FAQ lettura statistiche con esclusioni"
      ],
      "sezioni_modificate": [
        "faq"
      ]
    },
    {
      "versione": "2.7",
      "data": "2026-03-30",
      "tipo": "fix",
      "titolo": "Fix navigazione, link Tecbus, terminologia CS, struttura manuale",
      "descrizione": "Corretti errori di navigazione nella Guida Veloce, aggiunto link Tecbus in tutti i punti dove è citato, corretta terminologia acronimo CS, aggiornata Struttura del Manuale in Introduzione, rimossi tutti i badge NUOVO scaduti.",
      "dettagli": [
        "guida-veloce.json: fix CRITICO passo 2 — rimosso 'accessibile dal menu Profilo Commerciale' (Configurazione è voce indipendente nel menu)",
        "guida-veloce.json: aggiunto link https://tecbus.eu/ nella descrizione di Tecbus al passo 3",
        "introduzione.json: aggiornata 'Struttura del Manuale' — aggiunta Configurazione come sezione separata e aggiunta sezione Emetti Titolo di Viaggio",
        "emetti-titolo-viaggio.json: corretto acronimo CS → 'Corsa Semplice (CS)' con spiegazione esplicita",
        "profilo-commerciale.json: aggiunti link cliccabili a https://tecbus.eu/ nelle tre menzioni di Tecbus",
        "gestione-movimento.json: aggiunti link cliccabili a https://tecbus.eu/ nelle menzioni TLDR di Tecbus",
        "faq.json: aggiunto link https://tecbus.eu/ e descrizione 'azienda che fornisce i dati di linea' nella risposta sui codici contabili",
        "Rimossi tutti i badge 'nuovo': true scaduti da emetti-titolo-viaggio, eccezioni, faq (sezione principale e 4 sottosezioni)"
      ],
      "sezioni_modificate": [
        "guida-veloce",
        "introduzione",
        "emetti-titolo-viaggio",
        "profilo-commerciale",
        "gestione-movimento",
        "faq",
        "eccezioni"
      ]
    },
    {
      "versione": "2.6",
      "data": "2026-03-05",
      "tipo": "miglioramento",
      "titolo": "Filosofia sistema, errori comuni, fix CRITICO Descrizione codici contabili",
      "descrizione": "Completamente riscritta la sezione 'Comprendere il Sistema' con la logica a livelli di Itineris, mappa 'dove vado per fare cosa' e lista errori comuni. Corretto istruzione CRITICA errata su Codici Contabili (Descrizione non va lasciata vuota). Rimossi ultimi riferimenti App Controllo da profilo-commerciale. Aggiunta FAQ nomi duplicati nello shop.",
      "dettagli": [
        "gestione-movimento.json: aggiunto box-nota 'La logica del sistema' con spiegazione sistema a livelli (Codici → Poli → Linee/Template → Corse)",
        "gestione-movimento.json: aggiunto box 'Dove vado per fare cosa' con mappa navigazione tra sezioni",
        "gestione-movimento.json: aggiunta lista 'Errori comuni da evitare' con 5 scenari operativi",
        "gestione-movimento.json: FIX CRITICO — campo Descrizione in Codici Contabili: da 'lasciare vuoto' a istruzione corretta (compilare con nome frazione quando ci sono più codici per stesso Comune)",
        "gestione-movimento.json: aggiunto avviso warning sui nomi duplicati nello shop COTRAP nella sezione Codici Contabili",
        "profilo-commerciale.json: rimossi tutti i riferimenti residui a 'Utenti App Controlli' (da lista Configurazione, da testo introduttivo, dalla lista-numerata)",
        "faq.json: aggiunta FAQ 'Nello shop di COTRAP appaiono più risultati con lo stesso nome di città' nella sezione Capire il sistema"
      ],
      "sezioni_modificate": [
        "gestione-movimento",
        "profilo-commerciale",
        "faq"
      ]
    },
    {
      "versione": "2.5",
      "data": "2026-03-04",
      "tipo": "fix",
      "titolo": "Fix CRITICO guida-veloce, miglioramenti eccezioni, CSS accessibilità, FAQ",
      "descrizione": "Corretti riferimenti residui all'App Controllo nella Guida Veloce. Migliorati testi su denormalizzazione, terminologia eccezioni chilometriche e FAQ. Aggiornato CSS per accessibilità e fix risposta FAQ troncata.",
      "dettagli": [
        "Fix CRITICO guida-veloce.json: rimosso riferimento a 'Utenti App Controlli' dal passo 2",
        "Fix CRITICO guida-veloce.json: rimosso avviso APP Controllo in fondo alla guida veloce, sostituito con avviso generico",
        "eccezioni.json: 'codici dei polo' → 'Codici Contabili dei Poli' (terminologia corretta)",
        "eccezioni.json: aggiunta spiegazione del perché la data inizio è solo il primo del mese (ricalcolo tariffe mensile)",
        "eccezioni.json: riformulati avvisi sulla 'denormalizzazione' con linguaggio operativo più chiaro",
        "faq.json: aggiornata risposta FAQ denormalizzazione con linguaggio più comprensibile",
        "faq.json: aggiunta FAQ 'I biglietti già acquistati prima di un'eccezione rimangono validi?'",
        "introduzione.json: rimossa sottosezione 'Contenuti' duplicata (identica ad Accesso al Portale in home), sostituita con 'Struttura del Manuale'",
        "introduzione.json: aggiornate date e testi per coerenza con il resto della guida",
        "css/style.css: font-size separatori menu 0.68rem → 0.75rem (accessibilità, soglia minima 12px)",
        "css/style.css: max-height FAQ aperta 500px → 1200px (previene troncamento risposte lunghe)"
      ],
      "sezioni_modificate": [
        "guida-veloce",
        "eccezioni",
        "faq",
        "introduzione"
      ]
    },
    {
      "versione": "2.4",
      "data": "2026-03-04",
      "tipo": "fix",
      "titolo": "Rimozione App Controllo, fix scroll menu orizzontale, FAQ ampliate",
      "descrizione": "Rimossa la sezione App Controllo dalla guida (diventerà un sito dedicato separato). Corretto bug critico sul menu orizzontale che bloccava la navigazione alle ultime sottosezioni. Aggiunte nuove FAQ e corrette inconsistenze.",
      "dettagli": [
        "Rimossa sezione APP Controllo dal menu e dalla Home (il sito dedicato sarà pubblicato separatamente)",
        "Fix bug menu orizzontale: le ultime sottosezioni ora raggiungono correttamente la posizione nel viewport",
        "Aggiunto padding dinamico al fondo del contenuto per garantire scroll corretto anche degli elementi finali",
        "Click handler menu orizzontale usa ora offset esplicito invece di scrollIntoView (più affidabile)",
        "Aggiunte FAQ: Eccezione Tariffaria vs Chilometrica, verifica stato rimborso, servizio stagionale, modifica corsa pubblicata",
        "Totale FAQ: 45 domande in 8 categorie operative",
        "Corretti riferimenti obsoleti ad 'app-controllo' in changelog e home",
        "Corretta capitalizzazione 'COTRAP' in introduzione.json"
      ],
      "sezioni_modificate": [
        "home",
        "faq",
        "menu"
      ]
    },
    {
      "versione": "2.3",
      "data": "2026-03-03",
      "tipo": "fix",
      "titolo": "Revisione accuratezza contenuti, FAQ operative, distinzione visiva menu",
      "descrizione": "Controllo incrociato di tutti i contenuti con la guida originale e i documenti di aggiornamento. Riscrittura FAQ con domande operative reali. Struttura menu migliorata.",
      "dettagli": [
        "Rimossa FAQ sui requisiti minimi (non rilevante per operativi)",
        "FAQ completamente riscritta con domande operative basate sulla guida originale",
        "Aggiunte FAQ su: corse, template, multitratta, eccezioni, titoli gratuiti, sezione contabile",
        "Aggiunto filtro Gratuito nella ricerca Abbonamenti (Ordini commerciale)",
        "Aggiunto dettaglio Esempio 5 abbonamenti stagionali studenti",
        "Aggiunto dettaglio Categoria calcolo sconto (Categoria 1 = 10% delibera Regione Puglia)",
        "Menu laterale: aggiunto separatore visivo tra GUIDA OPERATIVA e SEZIONI EXTRA",
        "Corretti step 2 e 3 Guida Veloce con terminologia corretta dalla guida",
        "Card Home aggiornate con descrizioni più accurate e complete",
        "Aggiunta card Domande e Risposte nella Home"
      ],
      "sezioni_modificate": [
        "home",
        "faq",
        "guida-veloce",
        "ordini",
        "gestione-movimento",
        "sezione-contabile"
      ]
    },
    {
      "versione": "2.2",
      "data": "2026-03-02",
      "tipo": "major",
      "titolo": "Nuove funzionalità: Titoli Gratuiti, Multitratta, Eccezioni KM, Template Massivo",
      "descrizione": "Aggiornamento della guida con 4 nuove documentazioni funzionali relative a funzionalità introdotte nel sistema Itineris.",
      "dettagli": [
        "Nuova funzione Emissione Titoli di Viaggio Gratuiti dal profilo commerciale",
        "Nuova tipologia Linea Multitratta per abbonamenti con cambio linea",
        "Nuova sottosezione Eccezioni Chilometriche per modificare distanze km tra codici contabili",
        "Nuova procedura Modifica Template Massivo per aggiornare corse in blocco",
        "Aggiunto filtro Gratuito al metodo di pagamento nelle sezioni Ordini e Contabile",
        "Aggiunto campo Emesso da Admin nel dettaglio titoli e nelle esportazioni",
        "Le statistiche ignorano i titoli emessi gratuitamente",
        "Aggiunti filtri per linee e corse multitratta",
        "Aggiunte 18 nuove immagini/screenshot dalla documentazione funzionale"
      ],
      "sezioni_modificate": [
        "profilo-commerciale",
        "gestione-movimento",
        "eccezioni",
        "ordini",
        "sezione-contabile"
      ]
    },
    {
      "versione": "2.1",
      "data": "2026-02-23",
      "tipo": "minor",
      "titolo": "Miglioramenti contenuti e correzioni tecniche",
      "descrizione": "Revisione completa dei contenuti della guida, correzione di bug JavaScript/CSS e miglioramenti all'esperienza utente.",
      "dettagli": [
        "Nuova Home page con card di navigazione rapida verso tutte le sezioni",
        "Guida Veloce espansa da 5 a 8 passaggi dettagliati",
        "Corretti path immagini errati in APP Controllo e Sezione Contabile",
        "Rimosso conflitto immagini tra Gestione Movimento e Sezione Contabile",
        "Aggiornate tutte le date di ultimo aggiornamento",
        "Corretti 13 bug in JavaScript: fetch sicuro, race condition, XSS, ricerca ricorsiva, loop navigazione",
        "Aggiunta pagina di errore con pulsante ricarica se il caricamento fallisce",
        "Migliorata accessibilità: navigazione da tastiera sulle card, aria-label",
        "Ottimizzato scroll listener con requestAnimationFrame",
        "Caricamento iniziale parallelizzato per tempi di avvio più rapidi",
        "Aggiunta meta description e favicon"
      ],
      "sezioni_modificate": [
        "home",
        "guida-veloce",
        "sezione-contabile"
      ]
    },
    {
      "versione": "2.0",
      "data": "2026-02-03",
      "tipo": "major",
      "titolo": "Nuova Guida Interattiva",
      "descrizione": "Rilascio della nuova versione della guida con ricerca, navigazione migliorata e sistema di versioning.",
      "dettagli": [
        "Aggiunta ricerca full-text",
        "Nuovo sistema di navigazione",
        "Badge per sezioni nuove/aggiornate",
        "Migliorata usabilità mobile"
      ],
      "sezioni_modificate": [
        "home",
        "introduzione"
      ]
    }
  ],
  "istruzioni_aggiornamento": {
    "titolo": "Come aggiornare questa guida",
    "passi": [
      {
        "titolo": "Per aggiungere una nuova modifica",
        "descrizione": "Aggiungi un nuovo oggetto all'array 'modifiche' all'inizio del file (le più recenti prima)"
      },
      {
        "titolo": "Per segnare una sezione come nuova",
        "descrizione": "Nel file JSON della sezione, imposta 'nuovo': true e aggiorna la data in 'aggiornato'"
      },
      {
        "titolo": "Per aggiornare contenuti",
        "descrizione": "Modifica il file JSON della sezione interessata e aggiorna la data"
      }
    ],
    "tipi_modifica": [
      {
        "tipo": "major",
        "descrizione": "Grandi cambiamenti, nuove funzionalità importanti",
        "colore": "#e74c3c"
      },
      {
        "tipo": "minor",
        "descrizione": "Piccoli miglioramenti, nuove sezioni",
        "colore": "#f39c12"
      },
      {
        "tipo": "fix",
        "descrizione": "Correzioni, aggiornamenti contenuti",
        "colore": "#3498db"
      }
    ]
  }
},
  "configurazione": {
  "id": "configurazione",
  "titolo": "Configurazione",
  "aggiornato": "2026-03-13",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "tldr",
      "items": [
        "I parametri regionali (tariffari e calendari scolastici) sono inseriti solo da <b>COTRAP</b>: il consorziato può soltanto consultarli.",
        "Le voci che il consorziato gestisce davvero sono due: <b>Frequenze Corsa</b> e <b>Utenti App Controlli</b>."
      ]
    },
    {
      "tipo": "paragrafo",
      "testo": "Dalla Home cliccare su <b>Configurazione</b> nel menu principale. I parametri regionali (tariffari, calendari scolastici) sono inseriti e aggiornati esclusivamente da COTRAP: il consorziato può <b>solo consultarli</b>. Le frequenze delle corse sono invece inserite dal consorziato stesso."
    },
    {
      "tipo": "immagine",
      "src": "Immagine04.3.png",
      "alt": "Menu Configurazione",
      "didascalia": "Accesso alla sezione Configurazione"
    },
    {
      "tipo": "paragrafo",
      "testo": "Di <b>\"Configurazione\"</b> fanno parte i seguenti punti:"
    },
    {
      "tipo": "lista",
      "items": [
        "<b>Tariffari</b> — sola consultazione",
        "<b>Calendari</b> — sola consultazione",
        "<b>Frequenze Corsa</b> — le gestisce il consorziato",
        "<b>Utenti App Controlli</b> — li gestisce il consorziato"
      ]
    },
    {
      "tipo": "immagine",
      "src": "Immagine04.3b.png",
      "alt": "Sottomenu Configurazione",
      "didascalia": "Voci del menu Configurazione"
    }
  ],
  "sottosezioni": [
    {
      "id": "tariffari",
      "titolo": "Tariffari",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Tabella delle tariffe chilometriche regionali — aggiornata da COTRAP, <b>sola lettura</b> per il consorziato.",
            "Usala per verificare i prezzi che il sistema applicera' automaticamente alle tue corse e abbonamenti."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "In questa sezione COTRAP aggiorna i tariffari chilometrici regionali. Il consorziato può solo consultarli: i dati non sono modificabili. Utile per verificare i prezzi che saranno applicati alle corse e agli abbonamenti."
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.1.png",
          "alt": "Lista Tariffari",
          "didascalia": "Elenco dei tariffari disponibili"
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.1b.png",
          "alt": "Tariffari dettaglio",
          "didascalia": "L'elenco dei tariffari regionali: denominazione, delibera di riferimento e <b>data di inizio validità</b>. Il consorziato li vede in sola lettura."
        },
        {
          "tipo": "icona-azione",
          "icona": "icona01.png",
          "testo": "Cliccando sull'icona è possibile visualizzare i tariffari km regionali, i dati non sono modificabili."
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.1c.png",
          "alt": "Dettaglio Tariffari",
          "didascalia": "Visualizzazione dettaglio tariffario chilometrico"
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Come si lega alle tue corse:</b> il tariffario è organizzato per <b>fasce chilometriche</b>. Il sistema prende i chilometri fra i due codici contabili — quelli indicati come <i>Km tariffario</i> nel percorso della corsa — individua la fascia corrispondente e ne ricava il prezzo. Per questo un errore nei km si traduce sempre in un prezzo sbagliato."
        }
      ]
    },
    {
      "id": "calendari",
      "titolo": "Calendari",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Calendari scolastici regionali — inseriti da COTRAP, <b>sola lettura</b>.",
            "Il sistema blocca automaticamente la vendita di corse <b>Scolastiche</b> nelle date di vacanza (Natale, Pasqua, estate).",
            "Utili per capire quali date il sistema gestira' automaticamente per le corse con frequenza Scolastica o Non Scolastica."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "In questa sezione COTRAP aggiorna i calendari scolastici regionali. Admin Panel Itineris usa questi calendari per gestire automaticamente la vendita in base alla frequenza delle corse: ad esempio, se una corsa ha frequenza Scolastica, il sistema non permetterà l'acquisto per date che ricadono nelle vacanze natalizie o estive. Il consorziato può solo consultare questi calendari."
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.2.png",
          "alt": "Lista Calendari",
          "didascalia": "Elenco dei calendari scolastici"
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.2b.png",
          "alt": "Calendari dettaglio",
          "didascalia": "I calendari scolastici regionali, uno per anno. Lo <b>Stato elaborazione</b> «Elaborato» indica che il calendario è stato caricato ed è utilizzabile dalle frequenze scolastiche."
        },
        {
          "tipo": "icona-azione",
          "icona": "icona01.png",
          "testo": "Cliccando sull'icona sarà possibile visionare il calendario."
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.2c.png",
          "alt": "Dettaglio Calendario",
          "didascalia": "Visualizzazione calendario scolastico"
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.2d.png",
          "alt": "Calendario dettaglio 2",
          "didascalia": "Il dettaglio di un calendario: in rosso i giorni <b>non scolastici</b>, quelli in cui le corse con frequenza Scolastica non vengono effettuate."
        }
      ]
    },
    {
      "id": "frequenza-corsa",
      "titolo": "Frequenze Corsa",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Imposta le frequenze delle tue corse: Giornaliera, Feriale, Scolastica, Non Scolastica, Festiva.",
            "Per frequenze <b>Scolastica / Non Scolastica</b> non inserire date di validita': il sistema usa automaticamente il calendario regionale COTRAP.",
            "Per Giornaliera/Feriale puoi personalizzare i giorni della settimana (es. solo lunedi'-venerdi')."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "In questa sezione saranno inserite da ciascun consorziato le frequenze relative alle proprie linee."
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.3.png",
          "alt": "Lista Frequenze",
          "didascalia": "Elenco delle frequenze corsa"
        },
        {
          "tipo": "paragrafo",
          "testo": "Cliccare su <b>\"Aggiungi\"</b> in alto a destra."
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.3b.png",
          "alt": "Form Frequenza 1",
          "didascalia": "La pagina <b>Frequenze Corsa</b>: si parte dal pulsante <b>Aggiungi</b> in alto a destra; le colonne mostrano denominazione, tipologia e periodo di validità."
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.3c.png",
          "alt": "Form Frequenza",
          "didascalia": "Maschera inserimento nuova frequenza"
        },
        {
          "tipo": "paragrafo",
          "testo": "Compilare i campi richiesti:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Denominazione:</b> nome descrittivo della frequenza (es. Giornaliera, Giornaliera estiva, Feriale lun-ven, Feriale sabato, Scolastica, Non scolastica)",
            "<b>Tipologia:</b> selezionare dal menu a tendina tra Giornaliera, Feriale, Scolastica, Non Scolastica, Festiva. Per le tipologie Feriale e Giornaliera è possibile personalizzare i giorni di validità settimanale",
            "<b>Data inizio validità / Data fine validità:</b> compilare solo se la frequenza ha un range temporale personalizzato (es. servizio estivo con date precise). Non compilare per frequenze Scolastiche o Non Scolastiche: in quel caso il sistema usa automaticamente il calendario scolastico configurato da COTRAP"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Al termine cliccare su <b>\"Conferma\"</b> in basso a destra. In caso di dubbi sulla corretta impostazione della frequenza, rivolgersi all'Amministratore COTRAP."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Denominazione e Tipologia non sono sinonimi:</b> il nome è libero. Per verificare una frequenza controlla anche <b>giorni selezionati, date di validità e calendario</b>. Un nome come «FESTIVO» non dimostra che la frequenza includa tutte le festività."
        }
      ]
    },
    {
      "id": "utenti-app-controlli",
      "titolo": "Utenti App Controlli",
      "aggiornato": "2026-03-17",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Inserisci qui autisti e controllori che useranno l'<b>app Itineris</b> per controllare i biglietti a bordo.",
            "L'inserimento in Admin Panel <b>non basta</b>: l'utente deve installare l'app Android e impostare la propria password. Solo allora diventa 'Confermato'.",
            "Il file .apk dell'app si aggiorna frequentemente: richiedere sempre la versione più recente <b>direttamente agli amministratori del sistema</b>."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Con questa funzione è possibile inserire gli autisti o i controllori che utilizzeranno l'app Itineris per il controllo dei biglietti a bordo."
        },
        {
          "tipo": "paragrafo",
          "testo": "Cliccare su <b>\"Aggiungi\"</b> per inserire un nuovo utente dell'app (autista, controllore o controllore esterno)."
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.4.png",
          "alt": "Lista Utenti App",
          "didascalia": "Elenco utenti app controllo"
        },
        {
          "tipo": "paragrafo",
          "testo": "Inserire nome, cognome, email e gli altri dati richiesti. Cliccare su <b>\"Conferma\"</b> per salvare."
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.3.4b.png",
          "alt": "Form Utente App",
          "didascalia": "Maschera inserimento nuovo utente"
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Dopo il salvataggio, la colonna <b>\"Stato\"</b> mostrerà <b>\"In attesa di conferma\"</b>. Lo stato passerà a <b>\"Confermato\"</b> solo dopo che l'utente completa l'attivazione sul proprio dispositivo (vedi sotto)."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione — secondo passaggio obbligatorio:</b> L'inserimento in Admin Panel non è sufficiente. L'utente (autista/controllore) deve installare l'app di controllo Itineris sul proprio smartphone Android e impostare la propria password. Il file .apk viene aggiornato frequentemente: richiedere sempre la versione più recente <b>direttamente agli amministratori del sistema</b>. Solo dopo questo passaggio lo stato diventa \"Confermato\" e l'utente può operare."
        }
      ]
    }
  ]
},
  "cs-invalidi": {
  "id": "cs-invalidi",
  "titolo": "CS Invalidi",
  "aggiornato": "2026-03-30",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "tldr",
      "items": [
        "Permette ai possessori di <b>tessera MyCard per invalidi</b> di ottenere i biglietti di corsa semplice previsti dall'art. 30 c. 3 della L.R. Puglia n. 18/2002, extraurbani (CSI/CSIA) o urbani (CSUI/CSUIA).",
        "<b>Sono titoli gratuiti per il cliente.</b> Il limite è di <b>2 biglietti al giorno</b> (andata e ritorno) più <b>altri 2 per l'accompagnatore</b>, quando l'utente ne ha diritto.",
        "Il profilo Admin deve creare e attivare i titoli <b>prima</b> che il commerciale possa farlo. Il commerciale deve poi selezionare le linee e attivare il titolo."
      ]
    },
    {
      "tipo": "paragrafo",
      "testo": "Con l'introduzione dei biglietti per invalidi (CSI) è stata introdotta una separazione netta tra i titoli di biglietto. Da questa versione in poi:"
    },
    {
      "tipo": "lista",
      "items": [
        "<b>CS</b> e derivati (CSI, CSIA) → riservati alle sole linee <b>extraurbane</b> (Tipologia linea: Regionale o Provinciale)",
        "<b>CSU</b> e derivati (CSUI, CSUIA) → riservati alle sole linee <b>urbane</b> (Tipologia linea: Comunale)"
      ]
    },
    {
      "tipo": "avviso",
      "stile": "info",
      "testo": "Le aziende che vendono solo CS urbani (es. linee comunali) avranno disponibili solo CSU, CSUI e CSUIA. Le aziende con entrambi i tipi di linea dovranno avere attivi entrambi i gruppi di titoli. <b>Se in Gestione Movimento → Titoli di Viaggio non compare alcun titolo CSI/CSIA/CSUI/CSUIA</b>, significa che l'Amministratore non lo ha ancora creato e abilitato per la tua azienda: va richiesto."
    }
  ],
  "sottosezioni": [
    {
      "id": "cs-invalidi-categorie",
      "titolo": "Le 6 categorie di Corsa Semplice",
      "aggiornato": "2026-03-30",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Sono ora disponibili 6 tipologie di biglietto di corsa semplice:"
        },
        {
          "tipo": "lista-numerata",
          "items": [
            "<b>CS</b> — Corsa Semplice standard, il biglietto ordinario che chiunque può acquistare — solo linee extraurbane",
            "<b>CSI</b> — Corsa Semplice Invalidi — solo linee extraurbane",
            "<b>CSIA</b> — Corsa Semplice Invalidi + Accompagnatore — solo linee extraurbane",
            "<b>CSU</b> — Corsa Semplice Urbana standard, il biglietto ordinario che chiunque può acquistare — solo linee urbane",
            "<b>CSUI</b> — Corsa Semplice Urbana Invalidi — solo linee urbane",
            "<b>CSUIA</b> — Corsa Semplice Urbana Invalidi + Accompagnatore — solo linee urbane"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Titoli gratuiti per il cliente:</b> CSI, CSIA, CSUI e CSUIA sono associati alle categorie tessera dedicate. Nella verifica di un titolo usa i campi del dettaglio e la categoria configurata; non ricavare l’importo pagato dalla sola denominazione della tessera."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Nessuna opzione 'con cambio':</b> per i CSI e CSUI non è disponibile la scelta della tratta con cambio linea."
        }
      ]
    },
    {
      "id": "cs-invalidi-configurazione",
      "titolo": "Configurazione (profilo Commerciale)",
      "aggiornato": "2026-03-30",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Prerequisito obbligatorio:</b> il titolo di viaggio CSI/CSIA/CSUI/CSUIA deve essere prima creato e attivato dal <b>profilo Admin</b> (con categoria calcolo sconto, numero massimo emissioni e aziende abilitate). Solo dopo il commerciale lo vedrà disponibile."
        },
        {
          "tipo": "paragrafo",
          "testo": "Una volta che il profilo Admin ha attivato il titolo, il profilo Commerciale può procedere. La procedura corretta è:"
        },
        {
          "tipo": "lista-numerata",
          "items": [
            "Vai in <b>Gestione Movimento → Titoli di Viaggio</b>",
            "Seleziona il titolo CSI (o CSIA, CSUI, CSUIA) tra quelli disponibili",
            "Prima di attivarlo, <b>seleziona le linee</b> su cui deve essere attivo il titolo — questa operazione va fatta prima dell'attivazione",
            "Attiva il titolo"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Effetto dell'attivazione:</b> quando si attiva il titolo, il sistema prende automaticamente tutte le corse attive valide e genera i biglietti corrispondenti nella biglietteria. Da quel momento in poi, ogni corsa che viene attivata genererà automaticamente i biglietti; ogni corsa disattivata li rimuoverà."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Effetto della disattivazione:</b> disattivare il titolo rimuove tutti i biglietti CSI/CSIA/CSUI/CSUIA dalla biglietteria per le corse correlate."
        }
      ]
    },
    {
      "id": "cs-invalidi-vendita",
      "titolo": "Come funziona la vendita per l'utente",
      "aggiornato": "2026-03-30",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "lista",
          "items": [
            "L'utente deve avere i <b>dati della tessera MyCard</b> inseriti nel proprio profilo su cotrap.it per visualizzare i biglietti invalidi",
            "Al login, la disponibilità dei titoli dipende dai dati tessera e dalle opzioni di visibilità configurate dall’Admin",
            "Se l’account vede soltanto i titoli riservati, per acquistare un CS ordinario può essere necessario uscire dall’account. Verificare anche l’opzione <b>Visibilità titoli senza tessera</b> descritta sotto",
            "<b>Limite:</b> massimo <b>2 biglietti al giorno</b> (uno per l'andata e uno per il ritorno), indipendentemente dalla tratta e dall'orario, più <b>ulteriori 2</b> per l'accompagnatore quando l'utente ha diritto all'accompagnamento"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Visibilità titoli senza tessera:</b> esiste un'opzione nella categoria calcolo sconto chiamata 'Visibilità titoli senza tessera'. Se impostata su 'Solo Corsa Semplice', gli utenti con quella tessera vedono anche i CS normali (senza agevolazione) oltre ai CSI. Questa opzione è configurata dal profilo Admin."
        }
      ]
    },
    {
      "id": "cs-invalidi-ordini",
      "titolo": "Nuovi filtri in Ordini e Statistiche",
      "aggiornato": "2026-03-30",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Con l'introduzione dei CS Invalidi sono stati aggiunti nuovi filtri e campi in diverse sezioni del pannello."
        },
        {
          "tipo": "box-nota",
          "titolo": "Ordini → Biglietti (profilo Commerciale)",
          "contenuto": [
            "Nuovi filtri disponibili: <b>Titolo di viaggio</b> (filtrato per tipologia biglietto), <b>Categoria calcolo sconto</b>, <b>Numero tessera</b>, <b>Codice fiscale</b>, <b>FID</b>",
            "Nel dettaglio del singolo biglietto sono ora visibili: numero tessera, codice fiscale, FID e fattore di sconto applicato",
            "Questi dati aggiuntivi sono presenti anche nell'esportazione Excel"
          ]
        },
        {
          "tipo": "box-nota",
          "titolo": "Statistiche",
          "contenuto": [
            "<b>Statistiche linee</b> (menu Ordini, se il profilo è abilitato a vederle): la colonna 'Denominazione titolo di viaggio' riporta ora il nome del biglietto venduto (CS, CSI, CSIA ecc.) e l'importo scontato finale. L'esportazione riporta comune, frazione, linea e corsa in forma leggibile, non più gli ID numerici",
            "<b>Statistiche corse CS</b> (menu Ordini, se il profilo è abilitato a vederle): aggiunto il filtro 'Titolo di viaggio' e la relativa colonna. Attenzione: qui il conteggio è <b>per data di partenza</b>, mentre le Statistiche linee sono per data di emissione",
            "<b>Statistiche Venduto</b> (Sezione Contabile): aggiunto il filtro 'Titolo di Viaggio' con il fattore di sconto. Presente nel file .xls, non nel file .txt",
            "<b>Statistiche Mensili e Dati Contabili:</b> nessuna modifica"
          ]
        }
      ]
    }
  ]
},
  "diagnostica": {
  "id": "diagnostica",
  "titolo": "Risolvi un problema",
  "aggiornato": "2026-09-09",
  "nuovo": true,
  "contenuto": [
    {
      "tipo": "tldr",
      "items": [
        "Parti dal <b>sintomo</b> e controlla le configurazioni collegate.",
        "Confronta sempre <b>azienda, data, tratta e titolo</b> prima di interpretare un risultato.",
        "Ogni passo rimanda alla procedura dettagliata.",
        "Prima di modificare un servizio in esercizio, verifica anche i titoli già emessi."
      ]
    },
    {
      "tipo": "paragrafo",
      "testo": "Scegli il problema dall'indice e segui i controlli. Un risultato inatteso può dipendere dai filtri, dalla configurazione o da un'elaborazione ancora in corso."
    },
    {
      "tipo": "avviso",
      "stile": "warning",
      "testo": "Prima di cambiare un valore, annota la configurazione attuale e l'esito atteso. Dopo la modifica verifica il pannello e la biglietteria. Dove compare <b>In elaborazione</b>, attendi il completamento prima di intervenire di nuovo sullo stesso oggetto."
    },
    {
      "tipo": "box-nota",
      "titolo": "Le tre domande da farsi sempre, prima di tutto",
      "contenuto": [
        "<b>Azienda e profilo sono corretti?</b> Nel pannello commerciale controlla l'azienda in alto a destra e l'utente in basso a sinistra.",
        "<b>Stai confrontando lo stesso viaggio?</b> Verifica su <a href=\"https://biglietteria.cotrap.it/\" target=\"_blank\" rel=\"noopener noreferrer\">biglietteria.cotrap.it</a> la stessa tratta e data, tenendo conto del titolo e della tessera.",
        "<b>La data che sto guardando è quella giusta?</b> Data del viaggio, data dell'ordine e periodo di validità sono cose diverse e i filtri lo sono altrettanto."
      ]
    }
  ],
  "sottosezioni": [
    {
      "id": "diag-non-compare",
      "titolo": "Una corsa o una tratta non compare sullo shop",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "La pubblicazione è un requisito: controlla anche date, frequenza, fermate, titoli ed eccezioni."
        },
        {
          "tipo": "steps",
          "items": [
            {
              "numero": 1,
              "titolo": "La corsa è pubblicata?",
              "descrizione": "In <a href=\"#corse\">Gestione Movimento → Corse</a> lo <b>Stato Attivazione</b> deve essere <b>Attiva</b>. Una corsa appena creata nasce <i>Non attiva</i>. Attenzione a non confonderlo con lo <b>Stato Corsa</b> (Attiva/Sospesa), che è un'altra cosa, e ricorda che il filtro in cima alla pagina è già impostato su Stato Corsa «Attiva»."
            },
            {
              "numero": 2,
              "titolo": "Le date della corsa comprendono il giorno cercato?",
              "descrizione": "Se compilate, <b>Data inizio corsa</b> e <b>Data fine corsa</b> delimitano il servizio, stagionale o comunque limitato nel tempo. Verifica che comprendano il giorno del viaggio cercato."
            },
            {
              "numero": 3,
              "titolo": "La frequenza è quella giusta?",
              "descrizione": "In <a href=\"#frequenza-corsa\">Configurazione → Frequenze Corsa</a> controlla <b>Tipologia, giorni selezionati, date e calendario applicabile</b>. La denominazione è libera: il nome «FESTIVO» da solo non dimostra i giorni di servizio."
            },
            {
              "numero": 4,
              "titolo": "C'è un'eccezione di movimento in corso?",
              "descrizione": "In <a href=\"#eccezioni-movimento\">Eccezioni → Eccezioni</a> controlla tipologia, oggetto e periodo: una sospensione di polo riguarda la fermata interessata, non necessariamente l'intera corsa."
            },
            {
              "numero": 5,
              "titolo": "Le fermate del percorso sono corrette?",
              "descrizione": "Confronta i <a href=\"#poli\">Poli</a> con quelli nel template e nella corsa: codici contabili, ordine, orari ed eventuali limitazioni di salita, discesa o transito. Non premere Pubblica come tentativo di diagnosi."
            },
            {
              "numero": 6,
              "titolo": "Il titolo di viaggio copre quella tratta?",
              "descrizione": "In <a href=\"#titoli-di-viaggio\">Gestione Movimento → Titoli di viaggio</a>, con <i>Visualizza Modifica</i>, guarda i quattro riquadri: linee e corse abilitate, linee e corse da escludere, codici contabili abilitati, codici contabili da escludere."
            },
            {
              "numero": 7,
              "titolo": "Il sistema ha finito di ricalcolare?",
              "descrizione": "Se hai appena salvato qualcosa, la colonna <b>In elaborazione</b> deve tornare a 0. Fino a quel momento lo shop può mostrare ancora la situazione precedente."
            },
            {
              "numero": 8,
              "titolo": "Non è la cache del browser?",
              "descrizione": "Se la pagina sembra non aggiornata, ricaricala dopo aver chiuso i moduli senza salvataggi pendenti. In una sessione anonima possono cambiare i titoli visibili: non confrontarla con un account dotato di tessera come se fossero equivalenti."
            }
          ]
        }
      ]
    },
    {
      "id": "diag-orari",
      "titolo": "Gli orari non sono quelli giusti",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "steps",
          "items": [
            {
              "numero": 1,
              "titolo": "Controlla i minuti nel template",
              "descrizione": "Nel <a href=\"#creazione-template\">template</a> i minuti si contano <b>sempre dal capolinea</b>, mai dalla fermata precedente. Se sono stati inseriti come intervalli fra una fermata e l'altra, tutti gli orari da lì in poi sono sbagliati."
            },
            {
              "numero": 2,
              "titolo": "Controlla l'orario di partenza sulla corsa",
              "descrizione": "L'orario si inserisce <b>solo sul primo polo</b> della corsa: il sistema calcola gli altri a cascata usando i minuti del template."
            },
            {
              "numero": 3,
              "titolo": "La corsa ha subito modifiche dirette?",
              "descrizione": "Se su quella singola corsa qualcuno ha cambiato km, orari di una fermata, sosta o i flag di salita/discesa, la corsa è <b>esclusa dall'aggiornamento massivo</b> e va sistemata a mano."
            },
            {
              "numero": 4,
              "titolo": "L'aggiornamento massivo è stato fatto bene?",
              "descrizione": "Le corse vanno prima portate a Stato Attivazione «Non attiva», poi si modifica il template, poi si usa <b>Aggiorna Corse Inattive del Template</b>, infine si ripubblicano. Vedi <a href=\"#creazione-template\">Creazione del Template</a>."
            }
          ]
        }
      ]
    },
    {
      "id": "diag-prezzi",
      "titolo": "Il prezzo del biglietto o dell'abbonamento è sbagliato",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Il prezzo dipende da competenza della linea, tariffario, distanza, eccezioni e titolo. Individua quale dato produce la differenza prima di correggerlo."
        },
        {
          "tipo": "steps",
          "items": [
            {
              "numero": 1,
              "titolo": "Controlla la tariffa nel pannello",
              "descrizione": "In <a href=\"#controllo-tariffario\">Eccezioni → Controllo Tariffario</a> scegli data, linea e corsa: ottieni il prezzo polo per polo, con le colonne che dicono se è intervenuta un'eccezione e quale."
            },
            {
              "numero": 2,
              "titolo": "Confronta i km del template con la polimetrica",
              "descrizione": "Nel <a href=\"#creazione-template\">template</a> km e minuti sono cumulativi dall'origine. Confronta la distanza della tratta con la polimetrica Tecbus: una differenza può cambiare la fascia tariffaria."
            },
            {
              "numero": 3,
              "titolo": "Confronta la distanza della corsa con quella tariffata",
              "descrizione": "Nella corsa sono presenti <b>Km tariffario</b> e <b>Km effettivi</b>. Confronta i valori con i km restituiti dal Controllo Tariffario; non modificare un campo per tentativi."
            },
            {
              "numero": 4,
              "titolo": "Ricorda quale template viene usato",
              "descrizione": "Per gli abbonamenti confronta tutti i percorsi attivi tra i due codici e le due direzioni: il manuale operativo indica la distanza maggiore fra i template delle corse attive. Non uniformare distanze diverse senza confrontarle con la polimetrica autorizzata."
            },
            {
              "numero": 5,
              "titolo": "Cerca un'eccezione chilometrica",
              "descrizione": "In <a href=\"#eccezioni-chilometriche\">Eccezioni → Eccezioni Chilometriche</a>: correggono la distanza fra due codici contabili, valgono nei due sensi e partono dal <b>1° del mese</b>."
            },
            {
              "numero": 6,
              "titolo": "Cerca un'eccezione tariffaria",
              "descrizione": "Controlla <a href=\"#eccezioni-tariffarie\">Eccezioni tariffarie Biglietti</a> e <a href=\"#eccezioni-tariffarie-abbonamenti\">Abbonamenti</a>: coppia di codici, ambito, importo e date. Un importo fisso può restare diverso da un tariffario aggiornato; non è necessariamente un errore."
            },
            {
              "numero": 7,
              "titolo": "Verifica la tessera e lo sconto",
              "descrizione": "Nel <a href=\"#biglietti\">dettaglio biglietto</a> confronta <b>Costo</b> e <b>Importo Non Scontato</b>. Nel <a href=\"#abbonamenti\">dettaglio abbonamento</a> leggi <b>Importo Pagato</b>, <b>Importo Da Tariffario</b>, <b>Km Tariffario</b>, <b>Eccezione Tariffaria</b>, categoria sconto ed eventuale emissione da Admin. Confronta i dati con la configurazione valida alla data di emissione."
            },
            {
              "numero": 8,
              "titolo": "Cerca eventuali vecchi importi nell'ambito interessato",
              "descrizione": "Con <a href=\"#controllo-tariffario-itinerario\">Controllo Tariffario Itinerario Biglietto</a> cerca il vecchio importo per data e collegamento. Un risultato vuoto vale <b>solo per i filtri impostati</b>: verifica anche il nuovo prezzo e ripeti per le altre tratte e date interessate."
            }
          ]
        }
      ]
    },
    {
      "id": "diag-abbonamenti",
      "titolo": "L'abbonamento non si può acquistare",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "steps",
          "items": [
            {
              "numero": 1,
              "titolo": "Il titolo di viaggio è attivo?",
              "descrizione": "In <a href=\"#titoli-di-viaggio\">Gestione Movimento → Titoli di viaggio</a> lo Stato attivazione deve essere <b>Attivo</b>. Se il titolo non è proprio in elenco, va richiesto all'Amministratore COTRAP: il consorziato non può crearlo."
            },
            {
              "numero": 2,
              "titolo": "C'è almeno una corsa pubblicata su quella tratta?",
              "descrizione": "Senza una corsa attiva che colleghi i due codici contabili non esiste alcun abbonamento da vendere."
            },
            {
              "numero": 3,
              "titolo": "La distanza tariffaria è coerente?",
              "descrizione": "Controlla i km effettivamente restituiti dal controllo tariffario e le eccezioni sulla coppia. Un'eccezione chilometrica a 0 km blocca la vendita del collegamento; non azzerare i km cumulativi del template per tentare la stessa operazione."
            },
            {
              "numero": 4,
              "titolo": "La coppia di codici contabili è esclusa?",
              "descrizione": "Nella configurazione del titolo controlla i riquadri <b>Codici contabili da escludere</b> e <b>Linee e corse da escludere</b>. L'esclusione di una coppia vale in <b>entrambi i sensi</b>."
            },
            {
              "numero": 5,
              "titolo": "Se è un abbonamento multitratta",
              "descrizione": "Il template deve avere <b>esattamente 3 poli</b>, il polo di cambio deve avere un codice contabile presente in <b>entrambe</b> le linee, e servono <b>tutte e due le direzioni</b>."
            },
            {
              "numero": 6,
              "titolo": "Serve una tessera?",
              "descrizione": "Nel titolo, la <b>Categoria Calcolo Sconto</b> dice quale tessera dà diritto all'acquisto e la <b>Visibilità</b> dice se il titolo è visibile a chiunque abbia un account (<i>Account</i>) o solo a chi ha la tessera nel profilo (<i>Account_Tessera</i>)."
            },
            {
              "numero": 7,
              "titolo": "Prova diretta",
              "descrizione": "In <a href=\"#controllo-tariffario-abbonamenti\">Controllo Tariffario Abbonamenti</a> cerca la tratta. Se non ottieni risultati, ricontrolla filtri, validità e configurazioni; se non emerge una causa, raccogli i dati per l'assistenza."
            }
          ]
        }
      ]
    },
    {
      "id": "diag-invalidi",
      "titolo": "I biglietti per invalidi non compaiono",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "I titoli per invalidi sono <b>gratuiti per il cliente</b>. Se non compaiono, il percorso è questo:"
        },
        {
          "tipo": "steps",
          "items": [
            {
              "numero": 1,
              "titolo": "Il titolo esiste per la tua azienda?",
              "descrizione": "Verifica prima azienda e filtri in <b>Gestione Movimento → Titoli di viaggio</b>. Se il titolo necessario non compare, chiedi all'Amministratore di verificarne creazione e abilitazione."
            },
            {
              "numero": 2,
              "titolo": "La famiglia è coerente con il tipo di linea?",
              "descrizione": "CS, CSI e CSIA valgono <b>solo sulle linee extraurbane</b> (Regionale o Provinciale); CSU, CSUI e CSUIA <b>solo sulle urbane</b> (Comunale). Vedi <a href=\"#cs-invalidi-categorie\">CS Invalidi</a>."
            },
            {
              "numero": 3,
              "titolo": "Le linee sono state selezionate prima dell'attivazione?",
              "descrizione": "Configura le linee su cui deve valere il titolo prima di attivarlo; verifica che la tratta non sia esclusa."
            },
            {
              "numero": 4,
              "titolo": "L'utente ha la tessera nel profilo?",
              "descrizione": "Controlla che i dati MyCard siano presenti nel profilo della biglietteria e compatibili con il titolo. La visibilità dei CS ordinari dipende anche dall'opzione Admin <b>Visibilità titoli senza tessera</b>."
            },
            {
              "numero": 5,
              "titolo": "Ha già raggiunto il limite giornaliero?",
              "descrizione": "Il limite è di <b>2 titoli al giorno</b>, più altri 2 per l'accompagnatore quando ne ha diritto, a prescindere da tratta e orario."
            },
            {
              "numero": 6,
              "titolo": "Sta cercando un viaggio con cambio?",
              "descrizione": "Per i CSI e i CSUI l'opzione <b>con cambio</b> non è disponibile: solo collegamenti diretti."
            }
          ]
        }
      ]
    },
    {
      "id": "diag-modifiche",
      "titolo": "Ho modificato qualcosa ma non cambia niente",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "steps",
          "items": [
            {
              "numero": 1,
              "titolo": "Le corse non si aggiornano da sole",
              "descrizione": "Una modifica al template <b>non</b> arriva alle corse già attive. Vanno disattivate, poi si modifica il template, poi si usa <b>Aggiorna Corse Inattive del Template</b>, poi si ripubblicano."
            },
            {
              "numero": 2,
              "titolo": "Alcune corse restano indietro",
              "descrizione": "Le corse che hanno subito una <b>modifica diretta</b> (km, poli, orari di fermata, sosta, flag di salita/discesa) sono escluse dall'aggiornamento massivo per scelta del sistema: vanno sistemate una a una."
            },
            {
              "numero": 3,
              "titolo": "Il sistema sta ancora elaborando",
              "descrizione": "Dove presente, controlla <b>In elaborazione</b> e attendi il completamento. Se resta invariato o compare un errore, annota orario e oggetto. Per un'eccezione chilometrica il comando <b>Pubblica</b> riavvia l'elaborazione: non garantisce che la causa del blocco sia risolta."
            },
            {
              "numero": 4,
              "titolo": "L'eccezione chilometrica ha la data giusta?",
              "descrizione": "La data di inizio può essere <b>solo il 1° del mese</b>: con una data diversa non viene accettata e non produce effetti."
            },
            {
              "numero": 5,
              "titolo": "La pagina è aggiornata?",
              "descrizione": "Ricarica la pagina dopo aver controllato salvataggio, date e stato dell'elaborazione. Confronta lo stesso account, titolo e viaggio."
            }
          ]
        }
      ]
    },
    {
      "id": "diag-cliente",
      "titolo": "Un cliente ha un problema con il suo titolo",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "steps",
          "items": [
            {
              "numero": 1,
              "titolo": "Trova il titolo",
              "descrizione": "In <a href=\"#biglietti\">Ordini → Biglietti</a> o <a href=\"#abbonamenti\">Abbonamenti</a> usa un identificativo del titolo e i filtri pertinenti. Il limite di <b>40 giorni</b> è previsto nella ricerca <b>Biglietti</b>; nelle altre pagine segui la validazione indicata dal pannello."
            },
            {
              "numero": 2,
              "titolo": "Guarda lo stato del pagamento",
              "descrizione": "<b>Attesa Pagamento</b> non dimostra che il cliente non abbia pagato. Registra ordine, data e stato e chiedi la riconciliazione al contabile; non emettere un duplicato per compensare una sola mancata conferma."
            },
            {
              "numero": 3,
              "titolo": "L'abbonamento risulta bloccato?",
              "descrizione": "Leggi <b>Data Blocco da Admin</b> nel dettaglio. Se serve rimuovere un blocco, chiedi all'Amministratore la procedura e l'abilitazione necessarie; non tentare operazioni sul titolo per verificarle."
            },
            {
              "numero": 4,
              "titolo": "Le corse sono finite?",
              "descrizione": "La colonna <b>Residuo corse</b> indica le corse rimaste. Confrontala con i controlli registrati. <b>Modifica corse</b> cambia il saldo: usarlo solo dopo aver accertato la rettifica necessaria secondo la procedura aziendale."
            },
            {
              "numero": 5,
              "titolo": "Il controllo a bordo non è stato registrato?",
              "descrizione": "<b>Dettaglio Controllo</b> permette di leggere i controlli presenti. <b>Inserisci Controllo</b> è invece un'operazione sul titolo: non usarla come semplice consultazione."
            },
            {
              "numero": 6,
              "titolo": "Il titolo era stato emesso gratuitamente?",
              "descrizione": "Nel dettaglio, <b>Emesso da Admin</b> e <b>Note emissione</b> dicono se il titolo è stato emesso dal profilo commerciale e con quale motivazione."
            }
          ]
        }
      ]
    },
    {
      "id": "diag-pannello",
      "titolo": "Il pannello è lento, non carica o si comporta in modo strano",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "steps",
          "items": [
            {
              "numero": 1,
              "titolo": "Ricarica senza cache",
              "descrizione": "Chiudi i moduli senza perdere modifiche da salvare, poi ricarica con <b>Ctrl+Shift+R</b>."
            },
            {
              "numero": 2,
              "titolo": "Controlla di non avere la sessione scaduta",
              "descrizione": "Controlla eventuali avvisi di disconnessione. Un elenco vuoto da solo non prova che la sessione sia scaduta."
            },
            {
              "numero": 3,
              "titolo": "Usa un browser aggiornato",
              "descrizione": "Chrome o Edge aggiornati."
            },
            {
              "numero": 4,
              "titolo": "Restringi le ricerche",
              "descrizione": "Riduci il periodo e filtra linea o titolo. In <b>Ordini → Biglietti</b> rispetta il limite di 40 giorni; non estenderlo automaticamente alle altre pagine."
            },
            {
              "numero": 5,
              "titolo": "Verifica di essere sull'azienda giusta",
              "descrizione": "Prima di concludere che «i dati sono spariti», controlla l'azienda selezionata in alto a destra e il nome utente in basso a sinistra."
            }
          ]
        }
      ]
    },
    {
      "id": "diag-assistenza",
      "titolo": "Cosa preparare prima di chiedere assistenza",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Per una verifica riproducibile prepara queste informazioni:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Azienda</b> selezionata e <b>profilo</b> usato (commerciale o contabile)",
            "<b>Data e ora</b> in cui hai visto il problema, e le date coinvolte: viaggio, ordine, validità",
            "<b>Linea, corsa, template</b> e la <b>coppia di codici contabili</b> o il <b>titolo di viaggio</b> interessato",
            "Che cosa ti aspettavi e che cosa è successo davvero",
            "<b>Dove</b> succede: Admin Panel, shop, app dei clienti o app di controllo",
            "Se ci sono già <b>titoli venduti</b> su quella corsa o tratta",
            "Uno <b>screenshot</b> della schermata, senza dati personali dei clienti che non servono"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Il pulsante <b>ASSISTENZA</b> del pannello apre il contatto dell’ufficio. Per tariffari, calendari, creazione dei titoli o dubbi sulle abilitazioni, indica anche la configurazione interessata e chiedi la verifica all’Amministratore COTRAP."
        }
      ]
    }
  ]
},
  "eccezioni": {
  "id": "eccezioni",
  "titolo": "Eccezioni",
  "aggiornato": "2026-09-09",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "immagine",
      "src": "Immagine6.0.png",
      "alt": "Menu Eccezioni",
      "didascalia": "Accesso alla sezione Eccezioni"
    },
    {
      "tipo": "paragrafo",
      "testo": "Le eccezioni gestiscono variazioni di movimento, importi dei biglietti e degli abbonamenti, oppure distanze tariffarie fra codici contabili. Gli strumenti di <b>Controllo Tariffario</b> permettono di verificare gli effetti per la data e il collegamento interessati."
    },
    {
      "tipo": "immagine",
      "src": "Immagine6.0b.png",
      "alt": "Sottomenu Eccezioni",
      "didascalia": "Opzioni disponibili nella sezione Eccezioni"
    }
  ],
  "sottosezioni": [
    {
      "id": "eccezioni-movimento",
      "titolo": "Eccezioni",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Usa questa sezione per sospendere temporaneamente corse, fermate o intere linee (es. sciopero, festività, lavori stradali).",
            "La corsa sospesa sparisce automaticamente da biglietteria.cotrap.it nel periodo indicato e torna alla scadenza senza intervento.",
            "Se non imposti la Data fine, la sospensione è indefinita — ricordati di rimuoverla quando non serve più."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine6.1.png",
          "alt": "Lista Eccezioni",
          "didascalia": "Elenco eccezioni inserite"
        },
        {
          "tipo": "paragrafo",
          "testo": "Per inserire una nuova eccezione cliccare su <b>\"Aggiungi\"</b> in alto a destra."
        },
        {
          "tipo": "immagine",
          "src": "Immagine6.1b.png",
          "alt": "Form Eccezione",
          "didascalia": "Maschera inserimento eccezione"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Denominazione:</b> titolo dell'eccezione (es. sospensione natalizia)",
            "<b>Data inizio validità - data fine validità:</b> inserire il periodo di riferimento",
            "<b>Tipologia:</b> selezionare l'elemento interessato dall'eccezione tra le opzioni disponibili (vedi dettaglio sotto)"
          ]
        },
        {
          "tipo": "box-nota",
          "titolo": "Tipologie di eccezione disponibili",
          "contenuto": [
            "<b>Polo:</b> sospende una singola fermata. Permette di inserire una fermata sostitutiva se prevista da ordinanza comunale o scelta aziendale",
            "<b>Corsa:</b> sospende una singola corsa. La corsa non sarà visibile né acquistabile sullo shop COTRAP durante il periodo di validità",
            "<b>Linea:</b> sospende tutte le corse di una linea",
            "<b>Servizio:</b> sospende l'intero servizio dell'azienda consorziata",
            "<b>Calendario:</b> varia eccezionalmente la tipologia di frequenza nel periodo impostato. Verifica i giorni effettivi di servizio rispetto al calendario e alla frequenza della corsa prima di confermare."
          ]
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Descrizione:</b> testo descrittivo dell'eccezione visibile all'utente (es. 'Sospensione per sciopero', 'Ordinanza n. 123/2026', 'Lavori stradali tratto A-B')"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Al termine della compilazione cliccare su <b>\"Conferma\"</b> in basso a destra. L'eccezione entrerà in vigore automaticamente alla data di inizio impostata e cesserà alla data di fine (o rimarrà attiva indefinitamente se la data di fine non è inserita)."
        }
      ]
    },
    {
      "id": "eccezioni-tariffarie",
      "titolo": "Eccezioni Tariffarie Biglietti",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Usa questa eccezione quando il prezzo di un <b>biglietto</b> non deve seguire il tariffario chilometrico (es. tariffa fissa, linea urbana con tariffa speciale).",
            "Si applica a una singola corsa o a tutte le linee per un periodo specifico.",
            "Inserisci Codice Contabile partenza + arrivo e l'importo esatto che comparirà sullo shop."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine6.2.png",
          "alt": "Menu Eccezioni Tariffarie",
          "didascalia": "Accesso alle eccezioni tariffarie"
        },
        {
          "tipo": "paragrafo",
          "testo": "Cliccare su <b>\"Aggiungi\"</b> in alto a destra per inserire una nuova eccezione tariffaria."
        },
        {
          "tipo": "immagine",
          "src": "Immagine6.2b.png",
          "alt": "Form Eccezione Tariffaria",
          "didascalia": "Maschera inserimento eccezione tariffaria"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Denominazione:</b> consigliamo di inserire i riferimenti della corsa se si tratta di singola variazione inserendo capolinea e orario di partenza",
            "<b>Data inizio:</b> inserire la data in cui entrerà in vigore l'eccezione",
            "<b>Linea:</b> selezionare la linea (c'è anche la possibilità di selezionare l'opzione tutte le linee, nel caso in cui tutto il servizio debba avere una tariffa fissa)",
            "<b>Corsa:</b> nel caso si selezioni una linea in particolare, c'è la possibilità di selezionare la corsa che subirà la variazione tariffaria"
          ]
        },
        {
          "tipo": "icona-azione",
          "icona": "icona11.png",
          "testo": "Cliccare sul pulsante <b>\"+\"</b> per aggiungere la selezione effettuata alla lista."
        },
        {
          "tipo": "paragrafo",
          "testo": "Dopo aver selezionato linea e corsa, è necessario inserire i <b>Codici Contabili dei Poli</b> (partenza e arrivo) nella sezione sottostante."
        },
        {
          "tipo": "immagine",
          "src": "Immagine6.2c.png",
          "alt": "Selezione Poli",
          "didascalia": "Inserimento poli per eccezione tariffaria"
        },
        {
          "tipo": "paragrafo",
          "testo": "Inserire il comune di partenza (e l'eventuale frazione) e selezionare il codice contabile del polo. Ripetere per il polo di arrivo. Indicare quindi l'importo che sarà mostrato agli utenti sullo shop COTRAP. Cliccare su <b>\"Conferma\"</b> in basso a destra per salvare."
        }
      ]
    },
    {
      "id": "eccezioni-tariffarie-abbonamenti",
      "titolo": "Eccezioni Tariffarie Abbonamenti",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Usa questa eccezione quando il prezzo di un <b>abbonamento</b> deve essere diverso da quello che il sistema ricava dai chilometri.",
            "L'importo si imposta <b>per raggruppamento tariffario</b> (mensile, settimanale…) sulla coppia di codici contabili scelta: si possono inserire più raggruppamenti nella stessa eccezione.",
            "Inserisci sempre l'<b>importo lordo</b>: lo sconto della tessera viene applicato dal sistema al momento dell'acquisto."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Cliccare su <b>\"Aggiungi\"</b> per inserire una nuova eccezione tariffaria abbonamenti."
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Denominazione:</b> inserire il nome dei comuni interessati",
            "<b>Data di inizio validità:</b> obbligatoria",
            "<b>Data di fine validità:</b> consigliato lasciare vuoto, in quanto potrebbe non essere certa la data della nuova variazione del tariffario regionale",
            "<b>Comune di partenza:</b> inserire il comune per cui si vuole attivare l'eccezione",
            "<b>Frazione:</b> inserire l'eventuale frazione",
            "<b>Codice Contabile partenza:</b> in caso di più codici contabili, scegliere quello relativo al percorso",
            "<b>Codice Contabile arrivo:</b> analogo al codice di partenza",
            "<b>Raggruppamento tariffario:</b> scegliere il raggruppamento per cui si vuole attivare l'eccezione"
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Dopo aver scelto il raggruppamento, inserire nella sezione importo a destra l'<b>importo lordo</b> della relativa fascia km. L'eventuale percentuale di sconto sarà applicata dalla tessera associata in fase di acquisto."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Dopo aver inserito l'importo per un raggruppamento tariffario, cliccare su <b>\"Aggiungi (+)\"</b>. Ripetere il passaggio per ogni raggruppamento necessario. Quando tutti i raggruppamenti sono stati inseriti, cliccare su <b>\"Conferma\"</b> in basso a destra."
        }
      ]
    },
    {
      "id": "eccezioni-chilometriche",
      "titolo": "Eccezioni Chilometriche",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Corregge i chilometri fra due codici contabili quando la distanza registrata non è quella giusta. Incide sul prezzo di <b>biglietti e abbonamenti</b> e vale in <b>entrambi i sensi</b>.",
            "La data iniziale deve essere il <b>primo del mese</b>; l’eventuale data finale deve essere l’ultimo giorno del mese.",
            "Dopo il salvataggio parte da sola una rielaborazione: la colonna <b>In elaborazione</b> mostra il conteggio. <b>Aspetta che arrivi a 0</b> prima di rimettere mano. Il tasto <b>Pubblica</b> serve solo a far ripartire un ricalcolo bloccato."
          ]
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-ecckm-2.png",
          "alt": "Maschera di creazione dell’eccezione chilometrica",
          "didascalia": "Maschera di creazione: denominazione, descrizione, azienda, date di validità, comuni/frazioni con i rispettivi codici contabili e chilometri"
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Queste eccezioni valgono sia per <b>biglietti</b> che <b>abbonamenti</b>."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Queste eccezioni valgono in ambi i sensi: una volta creata l'eccezione chilometrica per la coppia di cod. cont. A → B, tale eccezione varrà anche per la coppia B → A."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Il campo di inizio validità ammette il <b>primo del mese</b>. Il ricalcolo parte dopo la conferma: attendere il completamento indicato dal contatore."
        },
        {
          "tipo": "paragrafo",
          "testo": "Dopo aver cliccato il tasto <b>\"Conferma\"</b>, l'eccezione verrà pubblicata automaticamente. Non è necessario pubblicarla manualmente."
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-ecckm-1.png",
          "alt": "Elenco eccezioni chilometriche con la colonna In elaborazione",
          "didascalia": "Elenco delle eccezioni: la colonna <b>In elaborazione</b> mostra il contatore del ricalcolo; la freccia a destra è il tasto <b>Pubblica</b>"
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione — tasto \"Pubblica\":</b> Il sistema ricalcola automaticamente le tariffe dopo il salvataggio (processo visibile tramite il contatore). Il tasto <b>\"Pubblica\"</b> serve solo se il contatore si blocca o si verifica un errore: cliccandolo si fa ripartire il ricalcolo. Si tratta di un'operazione che può richiedere alcuni minuti."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione — modifica sequenziale:</b> Prima di modificare o eliminare un'eccezione chilometrica, attendere che il contatore raggiunga <b>0</b>. Intervenire mentre il ricalcolo è in corso può causare errori nelle tariffe."
        },
        {
          "tipo": "box-nota",
          "titolo": "Dati obbligatori per la creazione",
          "contenuto": [
            "Denominazione",
            "Data inizio validità (solo il primo di ogni mese)",
            "Chilometri: inserire il valore presente nelle tabelle tariffarie corrispondenti (il valore usato dal sistema per determinare la fascia tariffaria, non necessariamente la distanza stradale reale)",
            "Codice contabile di partenza",
            "Codice contabile di arrivo"
          ]
        },
        {
          "tipo": "box-nota",
          "titolo": "Vincoli e regole",
          "contenuto": [
            "Se si decide di usare anche una data di fine validità, essa deve obbligatoriamente essere l'ultimo giorno del mese",
            "Non è possibile creare due eccezioni chilometriche con gli stessi codici contabili di partenza e arrivo",
            "Se si modifica un'eccezione impostando gli stessi codici contabili di un'altra già esistente, il sistema restituirà errore"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Effetto sulla distanza:</b> l’eccezione chilometrica si applica anche in presenza di altre eccezioni. Per verificare il prezzo finale controllare comunque le eventuali eccezioni tariffarie e il titolo: distanza e importo sono parametri distinti."
        }
      ]
    },
    {
      "id": "controllo-tariffario",
      "titolo": "Controllo Tariffario",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Strumento di <b>sola consultazione</b>: mostra le tariffe vigenti polo per polo per una corsa in una data specifica.",
            "Utile per verificare i prezzi che vede il cliente o per controllare le tariffe dopo una variazione regionale.",
            "Seleziona data, linea, corsa e clicca Applica. Esportabile in .xls (recuperabile in Esportazioni)."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine6.3.png",
          "alt": "Menu Controllo Tariffario",
          "didascalia": "Accesso al controllo tariffario"
        },
        {
          "tipo": "paragrafo",
          "testo": "Strumento di consultazione. Permette di visualizzare le tariffe vigenti per una determinata corsa in una data specifica, ottenendo il prospetto dei prezzi polo per polo."
        },
        {
          "tipo": "immagine",
          "src": "Immagine6.3b.png",
          "alt": "Form Controllo Tariffario",
          "didascalia": "Maschera controllo tariffario"
        },
        {
          "tipo": "paragrafo",
          "testo": "Inserire la data di riferimento, selezionare la linea e la corsa, quindi cliccare su <b>\"Applica\"</b>. Verranno visualizzate le tariffe polo per polo valide in quella data per quella corsa."
        },
        {
          "tipo": "paragrafo",
          "testo": "È possibile esportare il prospetto cliccando su <b>\"Esporta\"</b>. Il file generato sarà recuperabile nella sezione <b>Esportazioni</b>."
        },
        {
          "tipo": "immagine",
          "src": "Immagine6.3c.png",
          "alt": "Risultato Controllo",
          "didascalia": "Risultato controllo tariffario"
        }
      ]
    },
    {
      "id": "controllo-tariffario-itinerario",
      "titolo": "Controllo Tariffario Itinerario Biglietto",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Verifica se una <b>variazione tariffaria e' stata applicata correttamente</b> su tutti i collegamenti tra due poli.",
            "Inserisci l'importo <b>precedente</b> alla variazione: il sistema trova le corse che usano ancora il vecchio prezzo.",
            "Un risultato vuoto riguarda soltanto data e filtri impostati. Verifica anche il nuovo prezzo e gli altri collegamenti interessati."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine29.png",
          "alt": "Menu Controllo Itinerario",
          "didascalia": "Accesso al controllo tariffario itinerario"
        },
        {
          "tipo": "paragrafo",
          "testo": "Con questa funzione di controllo è possibile verificare la correttezza delle tariffe in un determinato itinerario. Ad esempio se c'è stata una eccezione tariffaria tra due poli, con questa funzione è possibile verificare se per tutte le corse con i suddetti poli sia stato applicato la tariffa corretta."
        },
        {
          "tipo": "paragrafo",
          "testo": "Inserire la data, inserire l'importo precedente alla variazione tariffaria (per essere sicuri che non ci siano itinerari con il precedente importo), il comune di partenza e quello di arrivo (con eventuali frazioni). Cliccare quindi sul tasto applica a destra."
        },
        {
          "tipo": "box-esempio",
          "titolo": "Esempio verifica",
          "contenuto": [
            "Scegli un collegamento interessato dalla variazione e cerca il vecchio importo alla data di entrata in vigore.",
            "Se non trovi risultati, controlla anche il nuovo importo nel Controllo Tariffario. Ripeti per le date, le direzioni e le tratte coinvolte: il risultato non certifica da solo l’intera rete."
          ]
        }
      ]
    },
    {
      "id": "controllo-tariffario-abbonamenti",
      "titolo": "Controllo Tariffario Abbonamenti",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Verifica gli importi degli abbonamenti su tutte le tratte: è il controllo da fare dopo un aggiornamento del tariffario regionale.",
            "Per ottenere risultati servono titoli e corse attivi. Un risultato vuoto richiede anche il controllo di filtri, validità e collegamenti.",
            "Serve a scoprire due cose: tratte per cui non risulta alcun abbonamento, e andata e ritorno con importi diversi."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Con questa funzionalità è possibile verificare gli importi associati agli abbonamenti."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione:</b> Restituisce i risultati di ricerca solo se i <b>titoli di viaggio risultano attivi</b> e se le <b>corse dei percorsi risultano attive</b>."
        },
        {
          "tipo": "paragrafo",
          "testo": "Questo strumento è utile per verificare la correttezza degli importi. In particolare permette di:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Collegamenti senza abbonamento previsto:</b> verifica prima che il titolo sia attivo e che i chilometri fra quei due codici contabili non siano a zero. Se la tratta non deve proprio avere l'abbonamento, la si esclude dalla configurazione del titolo.",
            "<b>Andata e ritorno con importi differenti:</b> confrontare percorsi, km, tariffario ed eccezioni nelle due direzioni. Correggere solo i dati incoerenti con la polimetrica e la tariffa autorizzate, poi ripetere la verifica."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "I filtri permettono di indirizzare la ricerca in base alle esigenze. È possibile esportare i dati."
        }
      ]
    }
  ]
},
  "emetti-titolo-viaggio": {
  "id": "emetti-titolo-viaggio",
  "titolo": "Emetti Titolo di Viaggio",
  "aggiornato": "2026-09-09",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "tldr",
      "items": [
        "Permette al profilo commerciale di emettere biglietti e abbonamenti a <b>prezzo 0 euro</b> tramite il Portale Clienti con privilegi admin.",
        "L'accesso admin dura <b>15 minuti</b>: alla scadenza torna in Admin Panel e clicca di nuovo 'Emetti titolo di viaggio'.",
        "Tutti gli ordini gratuiti sono tracciati e identificabili dal campo <b>'Emesso da Admin'</b> nelle esportazioni.",
        "Ad ogni titolo emesso gratuitamente si può associare una <b>nota</b>, che resta visibile solo al commerciale in <b>Ordini → dettaglio del titolo</b>."
      ]
    },
    {
      "tipo": "paragrafo",
      "testo": "Questa funzione dà la possibilità al profilo commerciale di emettere titoli di viaggio gratuitamente, inserendo tutte le informazioni necessarie ai fini dell'emissione."
    },
    {
      "tipo": "paragrafo",
      "testo": "Si dà la possibilità di effettuare l'accesso a <b>Portale Clienti con privilegi di amministratore</b> e di effettuare emissioni di titoli di viaggio (CS e abbonamenti, urbani ed extraurbani). Questa possibilità è concessa soltanto ai profili commerciali."
    },
    {
      "tipo": "avviso",
      "stile": "info",
      "testo": "I profili commerciali effettueranno l'accesso su Portale Clienti con l'azienda di appartenenza. Nel caso di profili commerciali con più aziende collegate, l'azienda con cui si farà accesso su Portale Clienti sarà quella selezionata in quel momento su Admin Panel."
    },
    {
      "tipo": "immagine",
      "src": "aggiornamento-gratuiti-4.png",
      "alt": "Voce Emetti titolo di viaggio nel menu dell’Admin Panel",
      "didascalia": "La voce <b>Emetti titolo di viaggio</b> nel menu laterale dell’Admin Panel"
    },
    {
      "tipo": "immagine",
      "src": "aggiornamento-gratuiti-3.png",
      "alt": "Portale Clienti aperto con privilegi di amministratore",
      "didascalia": "Il Portale Clienti si apre con l’<b>azienda di appartenenza</b> in alto a sinistra e il <b>logout dal profilo amministratore</b> in alto a destra"
    },
    {
      "tipo": "lista",
      "items": [
        "Nella pagina di ricerca per biglietto o abbonamento extra urbano, <b>non sarà possibile selezionare l'azienda</b>",
        "Per i biglietti e abbonamenti urbani, le località sono filtrate per azienda",
        "Tra i risultati, vengono mostrati tutti gli abbonamenti a prescindere dalla tessera e codice fiscale, e presentano tutti <b>prezzo 0 €</b>"
      ]
    },
    {
      "tipo": "immagine",
      "src": "aggiornamento-gratuiti-2.png",
      "alt": "Risultati ricerca con prezzo zero",
      "didascalia": "I risultati mostrano prezzo 0 € per tutti i titoli"
    },
    {
      "tipo": "paragrafo",
      "testo": "Alla creazione dell'ordine, è necessario specificare tutte le informazioni del cliente a cui è indirizzato il titolo di viaggio (procedimento analogo per i CS). Nel caso degli abbonamenti che richiedono una tessera MyCard, è necessario anche inserire i dati corretti del cliente."
    },
    {
      "tipo": "immagine",
      "src": "aggiornamento-gratuiti-1.png",
      "alt": "Inserimento dei dati del cliente",
      "didascalia": "Dati del cliente e pulsante <b>EMETTI</b>: nome, cognome, telefono ed email dell’acquirente e, se il titolo lo richiede, numero tessera e codice fiscale"
    },
    {
      "tipo": "paragrafo",
      "testo": "<b>Note per titolo</b>"
    },
    {
      "tipo": "paragrafo",
      "testo": "Nella stessa schermata, sotto i dati del cliente, c'è la sezione <b>NOTE PER TITOLO</b>: per ogni titolo nel carrello è disponibile un campo <b>Nota opzionale</b>, preceduto dalla denominazione del titolo, dalla tratta e dalla data o dal periodo di validità. Serve a registrare il motivo dell'emissione ed è visibile <b>solo al profilo commerciale</b>, mai al cliente."
    },
    {
      "tipo": "immagine",
      "src": "aggiornamento-note-1.png",
      "alt": "Sezione Note per titolo nell'emissione di biglietti gratuiti",
      "didascalia": "Emissione di biglietti: un campo nota per ciascun titolo nel carrello. In alto si vedono anche i controlli su tessera e codice fiscale"
    },
    {
      "tipo": "immagine",
      "src": "aggiornamento-note-2.png",
      "alt": "Sezione Note per titolo nell'emissione di abbonamenti gratuiti",
      "didascalia": "La stessa sezione nell'emissione di un abbonamento"
    },
    {
      "tipo": "avviso",
      "stile": "warning",
      "testo": "<b>Titoli con più quantità:</b> quando un titolo prevede più quantità (per esempio per il fattore moltiplicativo della tessera invalido + accompagnatore) il campo nota <b>non viene duplicato</b>: la stessa nota viene applicata a ciascuno dei titoli emessi."
    },
    {
      "tipo": "paragrafo",
      "testo": "Le note si rileggono dal profilo commerciale in <b>Ordini → Biglietti</b> o <b>Ordini → Abbonamenti</b>, aprendo il <b>Dettaglio</b> del titolo: compaiono nel campo <b>Note emissione</b>."
    },
    {
      "tipo": "paragrafo",
      "testo": "All'emissione del titolo, verrà inviata la <b>mail di conferma al cliente</b>, e sarà possibile stampare i titoli emessi in formato PDF."
    },
    {
      "tipo": "avviso",
      "stile": "warning",
      "testo": "<b>Attenzione:</b> L'accesso a Portale Clienti con privilegi di Admin dura <b>15 minuti</b>. Una volta scaduti, quando si tenta di effettuare un'azione (ricerca, creazione ordine o pagamento) apparirà una modale che ne notifica la scadenza. A questo punto è possibile tornare su Admin Panel e cliccare nuovamente il tasto \"Emetti titolo di viaggio\" per effettuare altre emissioni."
    },
    {
      "tipo": "avviso",
      "stile": "info",
      "testo": "<b>Corsa Semplice (CS) con cambio:</b> Se si vuole emettere un biglietto per una corsa con cambio linea, è possibile emettere il titolo solo per la tratta di propria competenza."
    },
    {
      "tipo": "box-nota",
      "titolo": "Tracciamento ordini gratuiti",
      "contenuto": [
        "Gli ordini effettuati con profilo commerciale sono tracciati ed è possibile risalire all'utente admin panel che ha effettuato l'emissione",
        "Gli ordini presentano importo nullo",
        "È stato inserito un nuovo filtro \"Gratuito\" nel metodo di pagamento nelle pagine Ordini, Biglietti e Abbonamenti",
        "Nel dettaglio di ogni titolo di viaggio, è presente un campo \"Emesso da Admin\" che identifica un titolo emesso da profilo commerciale",
        "Le esportazioni biglietti, abbonamenti e ordini presentano il campo \"Emesso da Admin\"",
        "Le statistiche mensili, statistiche linee, statistiche venduto e i dati contabili ignorano le transazioni relative ai titoli emessi gratuitamente"
      ]
    }
  ],
  "sottosezioni": []
},
  "esportazioni": {
  "id": "esportazioni",
  "titolo": "Esportazioni",
  "aggiornato": "2026-03-03",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "immagine",
      "src": "Immagine20.png",
      "alt": "Menu Esportazioni",
      "didascalia": "Accesso alla sezione Esportazioni"
    },
    {
      "tipo": "paragrafo",
      "testo": "La sezione <b>Esportazioni</b> raccoglie i file generati dalle funzioni di ricerca ed estrazione del profilo utilizzato. Attendi che l’elaborazione sia completata, poi individua il file relativo alla tua richiesta."
    },
    {
      "tipo": "avviso",
      "stile": "info",
      "testo": "Scarica e conserva le estrazioni necessarie secondo le procedure aziendali. L’elenco del portale non sostituisce l’archivio aziendale."
    },
    {
      "tipo": "immagine",
      "src": "Immagine21.png",
      "alt": "Lista File Esportazioni",
      "didascalia": "Elenco file disponibili per il download"
    },
    {
      "tipo": "icona-azione",
      "icona": "icona12.png",
      "testo": "Cliccare sull'icona di download a destra. Il file sarà scaricato nella cartella <b>Download</b> del proprio PC."
    },
    {
      "tipo": "paragrafo",
      "testo": "<b>Tipi di file disponibili in questa sezione:</b>"
    },
    {
      "tipo": "lista",
      "items": [
        "<b>Biglietti (.xls):</b> da Ordini → Biglietti, con il dettaglio dei singoli titoli trovati",
        "<b>Abbonamenti (.xls):</b> da Ordini → Abbonamenti",
        "<b>Ordini (.xls):</b> da Ordini → Ordini, nel profilo contabile",
        "<b>Stati Occupazionali (.xls):</b> da Ordini → Stati occupazionali corse",
        "<b>Corse:</b> dall'icona <i>Esporta in Csv</i> nella riga di una corsa",
        "<b>PoliTemplate:</b> dall'icona <i>Esporta</i> nella riga di un template, in Gestione Movimento → Linee",
        "<b>Controllo Tariffario (.xls):</b> da Eccezioni → Controllo Tariffario",
        "<b>Eccezioni tariffarie Abbonamenti:</b> dalla relativa sezione in Eccezioni",
        "<b>Dati Contabili (.txt e .xls):</b> da Sezione Contabile → Dati Contabili, con i pulsanti Esporta ed Esporta SEP",
        "<b>Statistiche Venduto (.txt e .xls):</b> da Sezione Contabile → Statistiche Venduto"
      ]
    },
    {
      "tipo": "avviso",
      "stile": "warning",
      "testo": "<b>Nota:</b> Sia il profilo commerciale che il profilo contabile hanno la propria sezione Esportazioni separata, ciascuna contenente solo i file generati da quel profilo."
    },
    {
      "tipo": "avviso",
      "stile": "info",
      "testo": "<b>Quando l'esportazione è pronta:</b> i file non si scaricano subito, vengono preparati dal sistema. La <b>campanella</b> in alto avvisa quando un'esportazione è completata e porta direttamente qui."
    },
    {
      "tipo": "avviso",
      "stile": "warning",
      "testo": "<b>Avviso di formato in Excel:</b> alcune esportazioni, come quella delle corse verificata, hanno estensione <b>.xls</b> ma contengono testo separato da tabulazioni. Se il file proviene dall’estrazione appena richiesta, puoi importarlo come testo delimitato da tabulazioni. Verifica intestazioni e righe: non ogni errore di Excel ha questa causa."
    }
  ],
  "sottosezioni": []
},
  "faq": {
  "id": "faq",
  "titolo": "Domande e Risposte",
  "aggiornato": "2026-09-09",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "paragrafo",
      "testo": "Domande pratiche organizzate per problema, scritte come le farebbe un utente reale. Se non conosci ancora i termini tecnici del sistema, inizia dalla prima sezione."
    }
  ],
  "sottosezioni": [
    {
      "id": "faq-orientamento",
      "titolo": "Capire il sistema: concetti base",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Non conosco Itineris: com'è fatto il sistema in parole semplici?",
          "risposta": "Itineris collega <b>codici contabili → poli (fermate) → linee e template → corse</b>. Frequenze e calendari stabiliscono i giorni di servizio; titoli ed eccezioni regolano ciò che è vendibile. La pubblicazione rende disponibile l'offerta sulla biglietteria, secondo le configurazioni attive. Ordini e controlli descrivono invece i titoli già emessi. Consulta <a href=\"#comprendere-il-sistema\">Comprendere il Sistema</a>."
        },
        {
          "tipo": "faq",
          "domanda": "Qual è la sequenza completa per far comprare biglietti e abbonamenti su cotrap.it?",
          "risposta": "Segui la <a href=\"#guida-veloce\">Guida Veloce</a>: verifica tariffari e frequenze, prepara codici, poli, linea e template, crea le corse e controlla i titoli abilitati. La pubblicazione della corsa <b>non sostituisce l’attivazione del titolo</b>. Verifica infine sulla biglietteria la tratta e la data interessate."
        },
        {
          "tipo": "faq",
          "domanda": "Cos'è un 'template' e perché esiste? Non capisco la differenza con la 'corsa'.",
          "risposta": "Il <b>template</b> è il 'percorso tipo' della linea: definisce <i>dove</i> passa il bus, in che ordine, quanti km e quanti minuti separano ogni fermata dal capolinea. È come il 'modello' fisso della rotta.<br><br>La <b>corsa</b> è una singola partenza concreta: <i>quando</i> parte il bus (orario), con che frequenza (feriale, scolastica, ecc.) e quanti posti vendi online. Una stessa linea può avere molte corse diverse (es. 07:00, 09:00, 14:00) che usano tutte lo stesso template.<br><br>Perché questa separazione? Perché il percorso si descrive una volta sola e vale per tutte le corse. <b>Attenzione però:</b> le corse già create <b>non</b> si aggiornano da sole quando modifichi il template. Serve la procedura di aggiornamento massivo — vedi la sezione &quot;Modifica Template Massivo&quot;."
        },
        {
          "tipo": "faq",
          "domanda": "Cos'è un 'codice contabile' e cos'è un 'polo'? Quando uso uno, quando uso l'altro?",
          "risposta": "Il <b>codice contabile</b> identifica una località ai fini tariffari e va allineato a Tecbus. Un Comune può avere più codici. Il <b>polo</b> è la fermata fisica inserita in Poli, con coordinate e codice contabile associato: più fermate possono condividere lo stesso codice. Nei template ordini le fermate; nei controlli tariffari confronti le coppie di codici."
        },
        {
          "tipo": "faq",
          "domanda": "Cosa significa che una corsa è 'non attiva'? Che differenza c'è tra Stato Corsa e Stato Attivazione?",
          "risposta": "Sono <b>due campi diversi</b>.<br><br><b>Stato Corsa</b> (campo del form, colonna <i>Stato</i>) è lo stato interno e ha due soli valori: <b>Attiva</b> e <b>Sospesa</b>. Normalmente resta su Attiva.<br><br><b>Stato Attivazione</b> (colonna <i>Stato Attivazione</i>) è la pubblicazione verso lo shop e ha quattro valori: <b>Non attiva</b>, <b>In attivazione</b>, <b>Attiva</b>, <b>In disattivazione</b>. Solo con &quot;Attiva&quot; la corsa è visibile e acquistabile su biglietteria.cotrap.it; &quot;In attivazione&quot; e &quot;In disattivazione&quot; sono stati temporanei, il sistema sta elaborando la richiesta.<br><br>Quando si dice che una corsa è &quot;non attiva&quot; o &quot;nascosta&quot; ci si riferisce <b>sempre allo Stato Attivazione</b>. Una corsa appena creata nasce così: per pubblicarla vai in Gestione Movimento → Corse, clicca l'icona <b>Pubblica\\Nascondi</b> a destra e conferma. La stessa icona serve a nasconderla di nuovo senza eliminarla."
        },
        {
          "tipo": "faq",
          "domanda": "Nello shop di COTRAP appaiono più risultati con lo stesso nome di città: come si risolve?",
          "risposta": "Questo problema è causato dal campo <b>Descrizione</b> vuoto nei Codici Contabili. Quando un Comune ha più codici contabili (es. Bari città e Palese-Bari), il sistema li mostra entrambi nello shop. Se il campo Descrizione è vuoto su entrambi, appaiono entrambi come 'Bari', creando confusione all'utente.<br><br><b>Soluzione:</b> vai in Gestione Movimento → Codici Contabili Poli, modifica il codice della variante (nell'esempio: Palese-Bari) e inserisci nel campo <b>Descrizione</b> il nome della frazione (es. 'Palese'). Nello shop appariranno ora 'Bari' e 'Bari - Palese', chiaramente distinguibili.<br><br><b>Regola generale:</b> se per uno stesso Comune esistono più codici contabili, tutti tranne quello principale devono avere il campo Descrizione compilato con il nome della frazione."
        }
      ]
    },
    {
      "id": "faq-abbonamenti",
      "titolo": "Abbonamenti: attivazione, prezzi e problemi",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Come faccio a far sì che i passeggeri possano acquistare abbonamenti per le mie corse?",
          "risposta": "Occorrono <b>titolo attivo</b>, collegamento configurato e corse pubblicate valide. Verifica anche inclusioni/esclusioni, distanza tariffaria, periodo e requisiti della tessera. Il titolo va richiesto all’Amministratore e configurato in <a href=\"#titoli-di-viaggio\">Titoli di viaggio</a>. Usa poi <a href=\"#controllo-tariffario-abbonamenti\">Controllo Tariffario Abbonamenti</a> e la biglietteria per verificare il risultato."
        },
        {
          "tipo": "faq",
          "domanda": "Il prezzo dell'abbonamento su cotrap.it è sbagliato (troppo alto o troppo basso): perché succede e come lo correggo?",
          "risposta": "Confronta data, tratta e titolo in <a href=\"#controllo-tariffario-abbonamenti\">Controllo Tariffario Abbonamenti</a>. Controlla distanza fra i codici, percorsi attivi, tariffario, raggruppamento, eccezioni e categoria sconto. Per un titolo già acquistato parti dal <b>Dettaglio</b>: la configurazione attuale può differire da quella alla data di emissione. Segui <a href=\"#diag-prezzi\">la diagnosi dei prezzi</a> prima di correggere."
        },
        {
          "tipo": "faq",
          "domanda": "Il prezzo andata e ritorno per lo stesso abbonamento è diverso: è un errore?",
          "risposta": "Confronta A→B e B→A con gli stessi filtri e periodo. Percorsi, chilometri o eccezioni diversi possono spiegare la differenza. <b>Non uniformare i km solo per ottenere lo stesso prezzo</b>: confrontali con la polimetrica Tecbus e con la tariffa autorizzata. Correggi il dato incoerente, poi verifica entrambe le direzioni."
        },
        {
          "tipo": "faq",
          "domanda": "Per una certa tratta non compare la possibilità di acquistare un abbonamento: perché?",
          "risposta": "Controlla titolo attivo, corse pubblicate e valide, inclusioni/esclusioni, codici e distanza tariffaria, eccezioni e requisiti della tessera. Un risultato vuoto non indica da solo quale requisito manca. Il percorso completo è in <a href=\"#diag-abbonamenti\">L’abbonamento non si può acquistare</a>."
        },
        {
          "tipo": "faq",
          "domanda": "Un passeggero ha acquistato un abbonamento ma non riesce a usarlo sulle corse: cosa può essere?",
          "risposta": "In <a href=\"#abbonamenti\">Ordini → Abbonamenti</a> controlla validità, tratta, tessera, residuo e controlli registrati. Leggi anche <b>Data Blocco da Admin</b>. Confronta il titolo con la corsa effettivamente utilizzata e l’esito di bordo. Non riattivare corse né aggiungere viaggi come tentativo: individua prima la causa; per un blocco da rimuovere chiedi la procedura all’Amministratore."
        },
        {
          "tipo": "faq",
          "domanda": "Come verifico quanti abbonamenti attivi ci sono e chi li ha acquistati?",
          "risposta": "In <b>Ordini → Abbonamenti</b> imposta periodo di emissione o validità e i filtri disponibili per titolo, tessera e pagamento. Distingui la ricerca dei titoli emessi dalla verifica della loro validità. Per il singolo abbonamento apri <b>Dettaglio</b>; per il prospetto usa <b>Esporta</b> e recupera il file in Esportazioni."
        },
        {
          "tipo": "faq",
          "domanda": "Cos'è la tessera MyCard e quando è obbligatoria per un abbonamento?",
          "risposta": "La <b>MyCard</b> è una tessera personale nominativa che alcuni abbonamenti richiedono obbligatoriamente. È associata al codice fiscale del passeggero e serve a identificare il titolare.<br><br>Non tutti gli abbonamenti richiedono la MyCard: dipende da come l'Amministratore ha configurato il titolo. In <b>Gestione Movimento → Titoli di viaggio</b>, aprendo il titolo con <i>Visualizza Modifica</i>, lo si legge in due campi che il consorziato può solo consultare: la <b>Categoria Calcolo Sconto</b>, cioè la tessera che dà diritto al titolo — se è una delle voci <i>NT - Nessuna tessera</i> l'abbonamento è vendibile senza tessera — e la <b>Visibilità</b>, che vale <i>Account</i> se il titolo è visibile a chiunque abbia un account, oppure <i>Account_Tessera</i> se lo vede solo chi ha la tessera registrata nel proprio profilo.<br><br><b>Cosa succede senza tessera:</b> il passeggero non riesce a completare l'acquisto di quel tipo di abbonamento sul portale o sull'app.<br><br><b>Per emissione gratuita con MyCard:</b> quando usi 'Emetti titolo di viaggio' per emettere gratuitamente un abbonamento che richiede tessera, devi inserire il codice fiscale del cliente nel form di creazione ordine. Verifica che la tessera esista e sia attiva prima di procedere."
        },
        {
          "tipo": "faq",
          "domanda": "Come faccio a disabilitare la vendita degli abbonamenti per una specifica tratta (es. lasciare solo i biglietti di corsa semplice)?",
          "risposta": "Per disabilitare la vendita di tutti gli abbonamenti per una specifica tratta, devi operare per \"esclusione\" nella configurazione di ciascun abbonamento.<br><br><b>1.</b> Vai in Gestione Movimento → Titoli di Viaggio.<br><b>2.</b> Per ogni singolo abbonamento (es. Abb. Mensile/52, Abb. Sett/12, ecc.), clicca su <b>Visualizza/Modifica</b>.<br><b>3.</b> Nella schermata di configurazione, escludi la <b>coppia di codici contabili</b> corrispondenti ai poli della tratta (es. Taranto e Brindisi Aeroporto).<br><br><b>Attenzione:</b> l'esclusione di una coppia vale in entrambe le direzioni (A→B e B→A). Devi ripetere l'operazione per tutti i titoli di viaggio da cui vuoi escludere quella tratta. Se un campo viene lasciato vuoto, il sistema permetterà di acquistare l'abbonamento per tutti i collegamenti presenti."
        }
      ]
    },
    {
      "id": "faq-prezzi",
      "titolo": "Prezzi sbagliati: capire perché e come correggerli",
      "aggiornato": "2026-03-30",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Il prezzo di un biglietto o abbonamento su cotrap.it è sbagliato: da dove inizio?",
          "risposta": "Parti da <a href=\"#diag-prezzi\">Il prezzo è sbagliato</a>. Controlla azienda, data, coppia di codici, linea/corsa e titolo. Confronta la tariffa del pannello con la biglietteria nello stesso contesto. Km, competenza urbana/extraurbana, eccezioni e sconto possono influire: non creare subito una nuova eccezione per coprire una causa ancora sconosciuta."
        },
        {
          "tipo": "faq",
          "domanda": "Eccezione Chilometrica o Eccezione Tariffaria: come scelgo quella giusta?",
          "risposta": "L’<b>eccezione chilometrica</b> modifica la distanza della coppia, per biglietti e abbonamenti nei due sensi, con inizio al primo del mese. L’<b>eccezione tariffaria</b> imposta invece un importo: per i biglietti scegli l’ambito linea/corsa; per gli abbonamenti imposti il lordo per raggruppamento. Verifica prima polimetrica, tariffario e altre eccezioni. Se servono entrambe, concorda validità e successiva rimozione della misura temporanea e verifica l’importo finale."
        },
        {
          "tipo": "faq",
          "domanda": "Come verifico i prezzi di tutte le mie corse con il Controllo Tariffario? (procedura step-by-step)",
          "risposta": "In <b>Eccezioni → Controllo Tariffario</b> scegli <b>Data, Linea e Corsa</b> e premi <b>Applica</b>. Leggi coppie di codici, km, <b>Importo</b>, <b>Importo Eccezione</b> e denominazione/tipologia dell’eccezione. Usa <b>Esporta</b> per il prospetto. Per i prezzi degli abbonamenti usa lo specifico <a href=\"#controllo-tariffario-abbonamenti\">Controllo Tariffario Abbonamenti</a>."
        },
        {
          "tipo": "faq",
          "domanda": "Come verifico se rimangono tratte con un vecchio prezzo dopo una variazione tariffaria?",
          "risposta": "In <b>Eccezioni → Controllo Tariffario Itinerario Biglietto</b> inserisci data, vecchio importo, comuni ed eventuali frazioni, poi premi <b>Applica</b>. Se il risultato è vuoto, non sono stati trovati importi uguali <b>nell’ambito dei filtri impostati</b>. Non dimostra l’aggiornamento di tutto il sistema: controlla anche il nuovo prezzo e ripeti per le altre tratte e date interessate."
        },
        {
          "tipo": "faq",
          "domanda": "Come verifico i prezzi degli abbonamenti per una tratta specifica?",
          "risposta": "In <b>Eccezioni → Controllo Tariffario Abbonamenti</b> imposta i filtri di tratta e periodo disponibili, poi premi <b>Applica</b>. Per ottenere risultati occorrono titoli e corse attivi sul percorso. Se non compare nulla, controlla filtri, validità, inclusioni/esclusioni e distanza tariffaria prima di dedurre che il collegamento non esista."
        },
        {
          "tipo": "faq",
          "domanda": "COTRAP mi ha comunicato una variazione del tariffario regionale: cosa devo fare su Itineris?",
          "risposta": "Il tariffario regionale viene aggiornato direttamente da COTRAP su Itineris. Di norma <b>non devi fare nulla</b> per le tratte normali.<br><br>Dopo ogni aggiornamento però verifica:<br><br><b>1. Eccezioni Tariffarie esistenti</b>: se hai tratte con importo fisso impostato manualmente, controlla se sono diventate errate o obsolete con il nuovo tariffario. Se sì, modificale o eliminale.<br><b>2. Prezzi delle tratte principali</b>: usa Controllo Tariffario per verificare che i prezzi siano quelli attesi sul tuo materiale informativo (orari, sito, comunicazioni ai passeggeri).<br><b>3. Vecchi prezzi ancora in circolazione</b>: usa Controllo Tariffario Itinerario inserendo il vecchio importo — se compaiono risultati, quelle corse non sono state aggiornate."
        }
      ]
    },
    {
      "id": "faq-template-massivo",
      "titolo": "Modifica Template Massivo",
      "aggiornato": "2026-03-30",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Cos'è la Modifica Template Massivo e quando si usa?",
          "risposta": "Serve a riportare le modifiche di un template sulle corse collegate <b>non attive e senza modifiche dirette</b>. Da <b>Gestione Movimento → Linee</b> apri la linea: il comando nella riga del template si chiama <b>Aggiorna Corse Inattive del Template</b>. Segui la <a href=\"#creazione-template\">procedura completa</a>, con disattivazione e successiva ripubblicazione delle sole corse interessate."
        },
        {
          "tipo": "faq",
          "domanda": "Come funziona passo per passo la Modifica Template Massivo?",
          "risposta": "Filtra le corse per il <b>template interessato</b> e annota quali erano pubblicate. Portale a <b>Stato Attivazione: Non attiva</b>; modifica e conferma il template. Usa <b>Aggiorna Corse Inattive del Template</b>, rispondi <b>OK</b> e conferma in fondo alla linea. Verifica le corse aggiornate e quelle escluse per modifiche dirette, poi ripubblica soltanto quelle che devono essere in vendita. Controlla orari e tariffe."
        },
        {
          "tipo": "faq",
          "domanda": "Quali corse vengono escluse dall'aggiornamento massivo del template?",
          "risposta": "Sono escluse le corse modificate direttamente in km, aggiunta/rimozione di poli, orari, sosta o flag <b>Solo discesa / Solo salita / Solo transito</b>. La sola aggiunta/rimozione di un codice contabile alternativo non è una modifica diretta: il codice deve conservarsi anche dopo l’aggiornamento. Verifica separatamente le corse escluse."
        },
        {
          "tipo": "faq",
          "domanda": "Ho fatto l'aggiornamento massivo ma alcune corse mostrano ancora i vecchi orari: perché?",
          "risposta": "Verifica che le corse usino il template corretto, fossero in <b>Stato Attivazione: Non attiva</b> e non avessero modifiche dirette. Controlla che l’aggiornamento e la conferma finale siano stati completati. Una differenza attuale dal template non prova da sola la storia delle modifiche: se la causa resta incerta, raccogli corsa, template e orari attesi per l’assistenza."
        },
        {
          "tipo": "faq",
          "domanda": "Posso usare 'Duplica e Inverti' per creare il template di ritorno?",
          "risposta": "<b>Sì, è il metodo consigliato.</b> Apri il template di andata → clicca <b>'Duplica e Inverti'</b>. Il sistema crea automaticamente un nuovo template con le fermate nell'ordine inverso. Verifica dopo la creazione che i km e i minuti siano corretti per il percorso di ritorno (potrebbero differire se il percorso non è perfettamente simmetrico)."
        }
      ]
    },
    {
      "id": "faq-corse-problemi",
      "titolo": "Corse, linee e sospensioni: problemi frequenti",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Ho inserito una nuova corsa ma non compare su cotrap.it: cosa devo fare?",
          "risposta": "Controlla <b>Stato Attivazione</b>: una corsa appena creata è Non attiva. Se deve essere vendibile, verifica prima dati, frequenza, date e titolo, poi pubblicala con <b>Pubblica\\Nascondi</b>. Attendi lo stato Attiva e cerca la stessa data sulla biglietteria. Se manca ancora, segui <a href=\"#diag-non-compare\">i controlli per corsa o tratta assente</a>."
        },
        {
          "tipo": "faq",
          "domanda": "Devo sospendere una o più corse per sciopero, festività o guasto: come si fa?",
          "risposta": "Vai in <b>Eccezioni → Eccezioni → Aggiungi</b>. Compila:<br><br>• <b>Denominazione</b>: es. 'Sciopero 15 marzo' o 'Chiusura natalizia'<br>• <b>Date inizio/fine</b>: il periodo di sospensione (puoi lasciare la fine vuota se non sai quando termina)<br>• <b>Tipologia</b>: scegli 'Corsa' per una singola corsa, 'Linea' per tutte le corse della linea, 'Servizio' per sospendere l'intero servizio aziendale<br>• <b>Descrizione</b>: testo visibile ai passeggeri (es. 'Sospensione per sciopero nazionale')<br><br>Dopo il salvataggio, la corsa sparisce da cotrap.it durante quel periodo e si riattiva automaticamente alla data di fine. <b>Attenzione</b>: i biglietti già acquistati NON vengono annullati automaticamente."
        },
        {
          "tipo": "faq",
          "domanda": "Devo modificare l'orario di partenza di una corsa già attiva: la devo prima disattivare?",
          "risposta": "L’orario si gestisce in <b>Corse → Visualizza Modifica → Poli e Orari</b>. Per un servizio già pubblicato verifica prima i titoli emessi e la procedura aziendale: non assumere che una variazione aggiorni automaticamente quelli già acquistati. Per le modifiche del template segui invece la procedura di <a href=\"#creazione-template\">aggiornamento massivo</a>."
        },
        {
          "tipo": "faq",
          "domanda": "Devo aggiungere o rimuovere una fermata da una linea esistente: come si fa?",
          "risposta": "Individua il <b>template interessato</b> e tutte le corse che lo usano, senza sospendere indiscriminatamente l’intera linea. Segui <a href=\"#creazione-template\">l’aggiornamento massivo</a>: disattivazione, modifica e conferma del template, aggiornamento delle corse inattive, verifica e ripubblicazione. Le corse con modifiche dirette vanno controllate separatamente."
        },
        {
          "tipo": "faq",
          "domanda": "Ho sbagliato a inserire i km tra due fermate nel template: come li correggo?",
          "risposta": "Ricorda che il valore è la distanza <b>dal capolinea</b>: se correggi una fermata, controlla che anche quelle successive restino coerenti (i valori devono crescere lungo il percorso).<br><br>Se le corse non sono ancora attive: apri il template, correggi il km, conferma, poi usa <b>Aggiorna Corse Inattive del Template</b>.<br><br>Se le corse sono già attive (il servizio è in funzione): devi decidere se il dato sbagliato è solo nel template locale (correzione con procedura disattivazione → modifica → riattivazione) oppure se è sbagliata anche la distanza ufficiale tra i codici contabili. In questo secondo caso, crea un'<b>Eccezione Chilometrica</b> per correggere la distanza a livello contabile (effetto dal 1° del mese successivo su prezzi di biglietti e abbonamenti)."
        },
        {
          "tipo": "faq",
          "domanda": "Posso avere due corse sulla stessa linea con orari diversi ma percorso identico?",
          "risposta": "<b>Sì, è l'uso normale del sistema.</b> Una stessa linea può avere quante corse vuoi, tutte collegate allo stesso template. Per ogni corsa cambiano solo: orario di partenza, frequenza (feriale, scolastica, ecc.), occupazione massima online, e date di validità.<br><br>Esempio: linea Bari–Altamura con corse alle 07:00 (feriale), 09:00 (feriale), 13:00 (scolastica) — tutte usano lo stesso template con lo stesso percorso."
        },
        {
          "tipo": "faq",
          "domanda": "Una corsa che avevo sospeso con un'eccezione è ora finita la sospensione: devo riattivare qualcosa manualmente?",
          "risposta": "<b>No.</b> L'eccezione di movimento si disattiva automaticamente alla data di fine impostata. La corsa torna visibile sullo shop COTRAP senza nessun intervento.<br><br>Se hai lasciato la data di fine vuota (sospensione indefinita), la corsa rimane nascosta finché non vai in Eccezioni → Eccezioni e imposti una data di fine oppure elimini l'eccezione."
        },
        {
          "tipo": "faq",
          "domanda": "Ho fatto una modifica (eccezione, corsa, template) ma il sito cotrap.it non si aggiorna: cosa faccio?",
          "risposta": "Controlla prima salvataggio, date di validità, azienda e stato dell’elaborazione. Se hai modificato un template, verifica la propagazione alle corse. Solo dopo ricarica la pagina; una finestra anonima può mostrare titoli diversi da un account con tessera. Vedi <a href=\"#diag-modifiche\">Ho modificato qualcosa ma non cambia niente</a>."
        },
        {
          "tipo": "faq",
          "domanda": "Admin Panel è lento o non carica alcune pagine: come si risolve?",
          "risposta": "Problemi di caricamento su Admin Panel sono spesso legati a:<br><br><b>1. Cache del browser</b>: premi Ctrl+Shift+R per forzare il ricaricamento. Se migliora, svuota la cache del browser dalle impostazioni.<br><b>2. Sessione scaduta</b>: se la pagina si carica parzialmente o mostra elementi vuoti, esci e rientra con le credenziali.<br><b>3. Browser</b>: usare <b>Chrome o Edge aggiornati</b>. Se una pagina si comporta in modo anomalo, prima di segnalarla riprovare con uno di questi due browser aggiornati.<br><b>4. Connessione lenta</b>: alcune sezioni (es. liste ordini con molte righe) richiedono una connessione stabile. Prova a filtrare per date più ristrette per ridurre il volume di dati caricati."
        }
      ]
    },
    {
      "id": "faq-accesso",
      "titolo": "Accesso e Profili",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Quali credenziali usare per accedere?",
          "risposta": "Sono necessari <b>ID utente e password</b> forniti dall'Amministratore COTRAP. Esistono due account separati: uno per il <b>profilo commerciale</b> (gestione linee, corse, eccezioni, biglietti gratuiti) e uno per il <b>profilo contabile</b> (dati contabili, statistiche venduto, esportazioni). Non usare le stesse credenziali per entrambi."
        },
        {
          "tipo": "faq",
          "domanda": "Come faccio a sapere con quale profilo sono loggato?",
          "risposta": "In <b>basso a sinistra</b> è visibile l'<b>utente</b> con cui hai fatto accesso. Nel <b>pannello commerciale</b> l'<b>azienda</b> su cui stai operando è indicata nel pulsante in <b>alto a destra</b>. Verifica sempre entrambi prima di operare, soprattutto se il tuo profilo può accedere a più aziende."
        },
        {
          "tipo": "faq",
          "domanda": "Ho sbagliato profilo (commerciale invece di contabile o viceversa): cosa succede?",
          "risposta": "Niente di grave: le due sezioni hanno funzionalità diverse. Il <b>profilo commerciale</b> gestisce linee, corse, eccezioni e titoli di viaggio. Il <b>profilo contabile</b> accede a ordini, dati contabili e statistiche. Se sei nel profilo sbagliato, esci e accedi con le credenziali corrette."
        },
        {
          "tipo": "faq",
          "domanda": "Ho dimenticato la password: come la recupero?",
          "risposta": "Nella pagina di login clicca su <b>'Recupero password'</b> e inserisci l'email comunicata preventivamente all'Amministratore COTRAP. Se non ricordi l'email di recupero, contatta direttamente l'Amministratore."
        }
      ]
    },
    {
      "id": "faq-configurazione",
      "titolo": "Configurazione iniziale",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Posso modificare i tariffari o i calendari scolastici?",
          "risposta": "<b>No.</b> I tariffari chilometrici regionali e i calendari scolastici sono inseriti e aggiornati esclusivamente da COTRAP. Il consorziato può <b>solo consultarli</b> per impostare correttamente le proprie linee (frequenze, fasce km, ecc.)."
        },
        {
          "tipo": "faq",
          "domanda": "Devo inserire le date nella frequenza scolastica?",
          "risposta": "<b>No.</b> Scegliendo la tipologia 'Scolastica', il sistema usa automaticamente il calendario regionale caricato da COTRAP. Le date di inizio/fine vanno inserite solo per servizi con un periodo personalizzato (es. servizio estivo con date precise)."
        },
        {
          "tipo": "faq",
          "domanda": "Quante tipologie di frequenza esistono?",
          "risposta": "Le tipologie sono <b>Giornaliera, Feriale, Scolastica, Non Scolastica e Festiva</b>. Non dedurre il servizio dal nome assegnato alla frequenza: controlla anche giorni selezionati, date di validità e calendario applicabile. Una frequenza chiamata «FESTIVO» può avere tipologia Giornaliera."
        }
      ]
    },
    {
      "id": "faq-codici-poli",
      "titolo": "Codici Contabili e Poli",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Da dove recupero i codici contabili?",
          "risposta": "I codici contabili si recuperano da <b>Tecbus</b>. Vanno poi inseriti su Itineris in Gestione Movimento → Codici Contabili Poli. Ogni codice deve corrispondere a un Comune; le frazioni hanno codici distinti."
        },
        {
          "tipo": "faq",
          "domanda": "Uno stesso Comune può avere due codici contabili diversi?",
          "risposta": "Sì. Frazioni o località tariffarie diverse dello stesso Comune possono avere codici distinti. Un <b>codice alternativo</b> è invece una scelta specifica sulla corsa per un percorso/tariffa differente: non tutti i codici dello stesso Comune sono automaticamente alternativi. Verifica sempre la corrispondenza con Tecbus."
        },
        {
          "tipo": "faq",
          "domanda": "Come recupero le coordinate GPS per inserire un polo?",
          "risposta": "Le coordinate (latitudine e longitudine) si copiano da <b>Google Maps</b>. Dopo averle inserite, clicca su <b>Geolocalizza</b>: apparirà il punto sulla mappa. Se la posizione non è precisa, puoi trascinare l'indicatore nel punto esatto."
        },
        {
          "tipo": "faq",
          "domanda": "Cosa sono 'Fermata principale' e 'Primaria' in un polo?",
          "risposta": "<b>Fermata principale</b>: mette in evidenza quella fermata tra le altre dello stesso polo. <b>Primaria</b>: quando ci sono più fermate principali, indica la più importante tra queste."
        }
      ]
    },
    {
      "id": "faq-linee-template",
      "titolo": "Linee, Template e Corse",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Due fermate consecutive nel template hanno lo stesso codice contabile: cosa inserisco nei km?",
          "risposta": "Inserisci per ogni fermata i km <b>cumulativi dal capolinea</b> previsti dalla polimetrica. Due fermate con lo stesso codice possono ripetere un valore, ma il codice da solo non determina il numero da inserire. Non azzerare una fermata intermedia per bloccare una sottotratta. Verifica la distanza applicata con il Controllo Tariffario e le eventuali eccezioni."
        },
        {
          "tipo": "faq",
          "domanda": "Per bloccare la vendita di biglietti per piccole sottotratte non gestite, devo impostare i km a zero nel template o basta un'eccezione chilometrica a zero?",
          "risposta": "Per bloccare la vendita di una coppia è prevista l’<b>eccezione chilometrica a 0 km</b>, valida nei due sensi per biglietti e abbonamenti, con inizio al primo del mese. Verifica periodo e collegamenti coinvolti prima di applicarla. <b>Non azzerare i km di una fermata intermedia nel template</b>: sono cumulativi dall’origine e influenzano più tratte. Se vuoi escludere soltanto alcuni titoli, usa le esclusioni nella loro configurazione."
        },
        {
          "tipo": "faq",
          "domanda": "I km e i minuti nel template si contano dalla fermata precedente o dal capolinea?",
          "risposta": "Sempre <b>dal capolinea</b> (la prima fermata), mai dalla precedente: vale sia per i minuti sia per i km.<br><br>Dai <b>minuti</b> il sistema calcola l'orario di passaggio di ogni fermata partendo dall'orario di partenza inserito nella corsa. Dai <b>km</b> ricava la distanza tariffaria tra i codici contabili, e quindi il prezzo di biglietti e abbonamenti.<br><br>Si riconosce a colpo d'occhio: lungo il percorso i valori crescono e non tornano mai indietro (es. 0 km → 1 km → 16 km → 16 km → 21 km)."
        },
        {
          "tipo": "faq",
          "domanda": "Ho modificato un template con corse già attive: la modifica viene applicata automaticamente?",
          "risposta": "<b>No.</b> La modifica al template viene propagata alle corse <b>solo se sono disattivate</b> e tramite il pulsante <b>Aggiorna Corse Inattive del Template</b>. Le corse attive non vengono aggiornate. Procedura completa: 1) Disattivare le corse, 2) Modificare il template, 3) Conferma, 4) <b>Aggiorna Corse Inattive del Template</b>, 5) Conferma, 6) Riattivare le corse."
        },
        {
          "tipo": "faq",
          "domanda": "Quali corse sono escluse dalla modifica massiva del template?",
          "risposta": "Le corse con <b>modifiche dirette</b>: cambio km, aggiunta/rimozione polo, modifica orario, modifica sosta, flag solo discesa/salita/transito. L'aggiunta/rimozione di un codice contabile alternativo <b>non</b> è modifica diretta e non esclude la corsa dall'aggiornamento massivo."
        },
        {
          "tipo": "faq",
          "domanda": "La corsa creata non è ancora visibile su cotrap.it: perché?",
          "risposta": "La corsa non è stata <b>pubblicata</b>: dopo la creazione lo <i>Stato Attivazione</i> è &quot;Non attiva&quot;. Vai in Gestione Movimento → Corse, clicca sull'icona <b>Pubblica\\Nascondi</b> a destra della corsa e conferma. Si consiglia di inserire prima tutte le corse e poi pubblicarle insieme."
        },
        {
          "tipo": "faq",
          "domanda": "Cosa indica il campo 'Occupazione Massima' nella corsa?",
          "risposta": "Il numero massimo di biglietti vendibili <b>online</b> per quella corsa. Usarlo quando si vuole riservare posti alla vendita a bordo o in agenzia. La percentuale di occupazione in 'Stati Occupazionali' si riferisce <b>solo ai biglietti online</b>, non al venduto cartaceo."
        },
        {
          "tipo": "faq",
          "domanda": "Cos'è una linea multitratta e quando si usa?",
          "risposta": "Una linea multitratta permette di generare <b>abbonamenti fra due codici contabili che non si trovano sulla stessa linea</b>: il viaggio si compone di due tratte con un cambio a metà percorso. La spunta 'multitratta' <b>inibisce la creazione di biglietti</b>: serve solo per abbonamenti. Il template richiede 3 poli (partenza, cambio, arrivo) e il polo di cambio deve avere un codice contabile presente in entrambe le linee."
        },
        {
          "tipo": "faq",
          "domanda": "Come gestisco un servizio stagionale (es. servizio estivo)?",
          "risposta": "Compila i campi <b>Data inizio corsa</b> e <b>Data fine corsa</b> nella creazione della corsa. La corsa sarà visibile sullo shop COTRAP solo nel periodo indicato. Per servizi tutto l'anno, lascia questi campi vuoti. Per frequenze scolastiche e non, puoi usare anche <b>Attivazione/Disattivazione Automatica</b> per gestire il calendario in modo automatico."
        },
        {
          "tipo": "faq",
          "domanda": "Posso modificare una corsa già pubblicata senza disattivarla?",
          "risposta": "Per una corsa pubblicata verifica la modifica necessaria e gli effetti sui titoli già emessi prima di intervenire. La possibilità di aprire un campo non prova che sia sicuro modificarlo in esercizio. Le modifiche al template seguono la procedura di <a href=\"#creazione-template\">aggiornamento delle corse inattive</a>; le modifiche dirette alla corsa possono escluderla dagli aggiornamenti massivi successivi."
        }
      ]
    },
    {
      "id": "faq-eccezioni",
      "titolo": "Eccezioni: sospensioni e variazioni",
      "aggiornato": "2026-03-18",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Come creo un'Eccezione Chilometrica? (procedura completa)",
          "risposta": "<b>Eccezioni → Eccezioni Chilometriche → Aggiungi</b><br><br><b>1. Codice Contabile Partenza</b>: seleziona il comune/frazione di partenza dal menu<br><b>2. Codice Contabile Arrivo</b>: seleziona il comune/frazione di arrivo<br><b>3. Km</b>: inserisci la distanza corretta in km (inserisci 0 per bloccare la vendita su quella tratta)<br><b>4. Data inizio</b>: deve essere obbligatoriamente il <b>1° di un mese</b> (es. 01/04/2026). Nessuna altra data è accettata.<br><b>5. Data fine</b> (facoltativa): se inserita, deve essere l'<b>ultimo giorno del mese</b> (es. 30/04/2026). Se lasci vuota, l'eccezione è permanente.<br><b>6.</b> Clicca <b>Conferma</b><br><br>Dopo la conferma, il sistema avvia automaticamente il ricalcolo delle tariffe: vedrai un <b>contatore</b> che decresce. Attendi che raggiunga 0 prima di fare altre modifiche. Se il contatore si blocca, usa il tasto <b>Pubblica</b> per riavviare l’elaborazione.<br><br><b>Effetto:</b> vale in entrambe le direzioni (A→B e B→A). Si applica a tutti gli abbonamenti che usano quella coppia di codici contabili, su tutte le linee."
        },
        {
          "tipo": "faq",
          "domanda": "Come creo un'Eccezione Tariffaria Biglietti? (procedura completa)",
          "risposta": "<b>Eccezioni → Eccezioni Tariffarie Biglietti → Aggiungi</b><br><br><b>1. Linea</b>: seleziona la linea su cui applicare l'eccezione<br><b>2. Corsa</b> (facoltativo): se vuoi limitare l'eccezione a una singola corsa, selezionala. Se lasci vuoto, vale per tutte le corse della linea.<br><b>3. Codice Contabile Partenza e Arrivo</b>: la coppia di fermate su cui cambia il prezzo<br><b>4. Importo</b>: il nuovo prezzo in euro del biglietto<br><b>5. Data inizio</b>: da quando entra in vigore (può essere qualsiasi data, anche oggi)<br><b>6. Data fine</b> (facoltativa)<br><b>7.</b> Clicca <b>Conferma</b><br><br>L'effetto è immediato dalla data di inizio impostata. Il prezzo viene mostrato nel Controllo Tariffario selezionando la data di inizio dell'eccezione."
        },
        {
          "tipo": "faq",
          "domanda": "Come creo un'Eccezione Tariffaria Abbonamenti? (procedura completa)",
          "risposta": "In <b>Eccezioni → Eccezioni tariffarie Abbonamenti → Aggiungi</b> indica denominazione, validità e coppia di codici. Seleziona il <b>Raggruppamento tariffario</b>, inserisci l’<b>importo lordo</b> e premi <b>Aggiungi (+)</b>. Ripeti per ogni raggruppamento necessario, poi <b>Conferma</b>. Lo sconto della tessera viene applicato dopo. Verifica la tratta nel Controllo Tariffario Abbonamenti."
        },
        {
          "tipo": "faq",
          "domanda": "Quando si crea un'eccezione di movimento, la corsa sparisce da cotrap.it?",
          "risposta": "<b>Sì.</b> Durante il periodo di validità dell'eccezione, la corsa (o il polo, o la linea) non è visibile su cotrap.it. Al termine del periodo si riattiva automaticamente."
        },
        {
          "tipo": "faq",
          "domanda": "I biglietti già acquistati prima di un'eccezione di movimento rimangono validi?",
          "risposta": "L’eccezione di movimento non annulla automaticamente i titoli già emessi. Prima di sospendere il servizio verifica gli acquisti interessati e attiva la gestione prevista dall’azienda. Non dedurre dalla sospensione che siano stati effettuati rimborsi o rettifiche delle corse residue."
        },
        {
          "tipo": "faq",
          "domanda": "C'è differenza tra eccezione su 'corsa', 'linea' e 'servizio'?",
          "risposta": "<b>Polo</b>: sospende una singola fermata (con possibile fermata sostitutiva). <b>Corsa</b>: sospende una singola corsa. <b>Linea</b>: sospende tutte le corse di una linea. <b>Servizio</b>: sospende l'intero servizio aziendale. <b>Calendario</b>: cambia eccezionalmente la tipologia di frequenza di una o più corse (es. da feriale a scolastica)."
        },
        {
          "tipo": "faq",
          "domanda": "L'eccezione tariffaria su biglietti richiede una data di fine?",
          "risposta": "Non è obbligatoria. Inserirla solo se si conosce con certezza la data di termine. Per gli abbonamenti è consigliato <b>lasciare vuota</b> la data di fine, poiché la data della prossima variazione del tariffario regionale è spesso incerta."
        },
        {
          "tipo": "faq",
          "domanda": "Ho creato un'eccezione chilometrica: devo pubblicarla manualmente?",
          "risposta": "<b>No.</b> Dopo aver cliccato Conferma, il sistema ricalcola automaticamente le tariffe di tutti gli abbonamenti interessati (visibile tramite il contatore a schermo). Il tasto <b>Pubblica</b> è disponibile solo come rimedio se il contatore si blocca. Attendere che il contatore raggiunga 0 prima di apportare ulteriori modifiche."
        },
        {
          "tipo": "faq",
          "domanda": "Posso scegliere qualsiasi data di inizio per un'eccezione chilometrica?",
          "risposta": "La data iniziale deve essere il <b>primo del mese</b>; l’eventuale data finale deve essere l’<b>ultimo giorno del mese</b>. È un vincolo della funzione. Il ricalcolo parte dopo la conferma: attendi che <b>In elaborazione</b> torni a zero."
        },
        {
          "tipo": "faq",
          "domanda": "Come verifico che una variazione tariffaria sia stata applicata correttamente a tutte le corse?",
          "risposta": "In <b>Eccezioni → Controllo Tariffario Itinerario Biglietto</b> inserisci data, vecchio importo, comuni ed eventuali frazioni, poi premi <b>Applica</b>. Se il risultato è vuoto, non sono stati trovati importi uguali <b>nell’ambito dei filtri impostati</b>. Non dimostra l’aggiornamento di tutto il sistema: controlla anche il nuovo prezzo e ripeti per le altre tratte e date interessate."
        },
        {
          "tipo": "faq",
          "domanda": "Ho inserito un'eccezione chilometrica tra due codici contabili non presenti in alcuna linea/template: nell'esportazione non viene generato alcun prezzo. Perché?",
          "risposta": "L’eccezione chilometrica modifica una distanza, ma <b>non crea da sola un collegamento vendibile</b>. Servono linea, template, corse pubblicate valide e titolo abilitato per quella coppia. Verifica queste dipendenze e i filtri di ricerca: l’assenza di un prezzo non dimostra da sola un errore nell’eccezione."
        }
      ]
    },
    {
      "id": "faq-ordini-biglietti",
      "titolo": "Ordini e Biglietti",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Qual è la differenza tra 'Ordine' e 'Biglietto'?",
          "risposta": "Un <b>ordine</b> è la transazione complessiva (può contenere più biglietti, es. andata + ritorno). Ogni biglietto è identificato dal numero ordine + una lettera finale (es. 12345A, 12345B). In Biglietti si cercano i singoli titoli con filtri più dettagliati (linea, corsa, comune, ecc.)."
        },
        {
          "tipo": "faq",
          "domanda": "Un cliente dice di aver acquistato un biglietto ma non riesco a trovarlo: come cerco?",
          "risposta": "Vai in Ordini → Biglietti e usa i filtri: <b>Codice Biglietto</b> (includi la lettera finale), oppure <b>Acquirente</b> (nome, cognome o email), oppure <b>N° Ordine</b>. Se non trovi nulla, verifica anche il <b>Canale</b> (App o Portale Web) e il <b>Tipo pagamento</b> (Online, Credito o Gratuito).<br><br>Se il biglietto è un <b>CSI invalidi</b>, usa i nuovi filtri: <b>Numero tessera</b> o <b>Codice fiscale</b> del passeggero per trovarlo rapidamente."
        },
        {
          "tipo": "faq",
          "domanda": "Come trovo tutti i biglietti CSI (invalidi) venduti in un periodo?",
          "risposta": "Vai in Ordini → Biglietti e usa il filtro <b>'Titolo di viaggio'</b>: seleziona CSI (o CSIA, CSUI, CSUIA a seconda del tipo). Imposta le date e clicca Applica.<br><br>Puoi anche filtrare per <b>Categoria calcolo sconto</b> se vuoi vedere tutti i biglietti di una specifica categoria tessera, oppure per <b>Numero tessera</b> o <b>Codice fiscale</b> per trovare tutti i biglietti di un singolo utente invalido.<br><br>Esporta il risultato in .xls per avere anche numero tessera, CF, FID e fattore di sconto applicato."
        },
        {
          "tipo": "faq",
          "domanda": "Cosa significa 'Credito' come tipo di pagamento?",
          "risposta": "Il tipo pagamento <b>Credito</b> indica un biglietto acquistato tramite l'app COTRAP usando il saldo di una ricarica effettuata in precedenza dall'utente. Questa modalità è disponibile <b>solo sull'app</b>, non sul portale web."
        },
        {
          "tipo": "faq",
          "domanda": "Come blocco un abbonamento usato in modo fraudolento?",
          "risposta": "In <b>Ordini → Abbonamenti</b> individua il titolo, apri <b>Dettaglio</b> e verifica i controlli. Il comando <b>Blocca</b> modifica l’utilizzabilità del titolo: usalo solo per un caso accertato secondo la procedura aziendale. Prima di procedere chiarisci con l’Amministratore anche l’eventuale gestione dello sblocco."
        },
        {
          "tipo": "faq",
          "domanda": "Come verifico o correggo il residuo corse di un abbonamento?",
          "risposta": "Confronta <b>Residuo corse</b>, validità e controlli registrati. <b>Modifica corse</b> permette una rettifica del saldo, ma la presenza del comando non giustifica automaticamente una compensazione. Accerta la rettifica necessaria e la relativa autorizzazione aziendale; annota motivazione, saldo prima e dopo."
        },
        {
          "tipo": "faq",
          "domanda": "La percentuale di occupazione del mezzo è affidabile?",
          "risposta": "<b>È parziale.</b> Rappresenta solo i biglietti acquistati <b>online</b>. Non include il venduto cartaceo (macchinetta di bordo). Il mezzo reale può essere più pieno di quanto mostrato."
        },
        {
          "tipo": "faq",
          "domanda": "Come verifico che un rimborso sia andato a buon fine?",
          "risposta": "Cerca il biglietto o l'ordine in Ordini → Biglietti (profilo commerciale) o in Ordini (sezione contabile). Lo stato indica: <b>'Attesa Rimborso'</b> = richiesta in corso; <b>'Rimborsato'</b> = rimborso su carta di credito completato; <b>'Rimborsato Credito'</b> = accreditato come saldo sull'account utente. Se è ancora 'Attesa Rimborso', attendere i tempi bancari o contattare l'Amministratore COTRAP."
        }
      ]
    },
    {
      "id": "faq-titoli-gratuiti",
      "titolo": "Emissione Titoli Gratuiti",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Come accedo alla funzione 'Emetti titolo di viaggio'?",
          "risposta": "Disponibile <b>solo per il profilo commerciale</b> tramite il tasto <b>'Emetti titolo di viaggio'</b> su Admin Panel. Cliccandolo si apre il Portale Clienti con privilegi di amministratore, attraverso cui procedere con l'emissione."
        },
        {
          "tipo": "faq",
          "domanda": "Posso scegliere l'azienda dalla pagina di ricerca del Portale Clienti?",
          "risposta": "<b>No.</b> L'azienda è quella selezionata su Admin Panel al momento del click. Non è modificabile dalla pagina di ricerca. Se gestisci più aziende, seleziona quella corretta prima di cliccare 'Emetti titolo di viaggio'."
        },
        {
          "tipo": "faq",
          "domanda": "La sessione di emissione gratuita è scaduta a metà operazione: cosa faccio?",
          "risposta": "La sessione dura <b>15 minuti</b>. Alla scadenza appare una notifica. Torna su Admin Panel e clicca nuovamente <b>'Emetti titolo di viaggio'</b> per ottenere una nuova sessione e continuare."
        },
        {
          "tipo": "faq",
          "domanda": "I titoli gratuiti vengono notificati al cliente?",
          "risposta": "<b>Sì.</b> All'emissione viene inviata automaticamente un'<b>email di conferma</b> al cliente. È anche possibile stampare i titoli in PDF dalla schermata di conferma."
        },
        {
          "tipo": "faq",
          "domanda": "Come trovo tutti i titoli emessi gratuitamente?",
          "risposta": "Usa il filtro <b>Gratuito</b> nel metodo di pagamento, disponibile in: Ordini → Biglietti, Ordini → Abbonamenti (profilo commerciale), e nella Sezione Contabile → Ordini, Biglietti, Abbonamenti. Nel dettaglio di ogni titolo c'è il campo <b>'Emesso da Admin'</b>."
        },
        {
          "tipo": "faq",
          "domanda": "I titoli gratuiti impattano le statistiche di vendita?",
          "risposta": "<b>No.</b> Le statistiche mensili, statistiche linee, statistiche venduto e i dati contabili ignorano completamente le transazioni relative ai titoli gratuiti, per non alterare i dati di fatturato reale."
        }
      ]
    },
    {
      "id": "faq-contabile",
      "titolo": "Sezione Contabile ed Esportazioni",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Perché non vedo i miei dati nella Sezione Contabile pur essendo loggato?",
          "risposta": "Verifica di essere loggato con le <b>credenziali contabili</b> (non quelle commerciali): il nome dell'utente è indicato in basso a sinistra. Se sei nel profilo commerciale, fai logout e accedi con le credenziali della sezione contabile."
        },
        {
          "tipo": "faq",
          "domanda": "Come esporto i Dati Contabili completi per un periodo? (procedura step-by-step)",
          "risposta": "I dati contabili sono divisi per tipo di pagamento: devi fare <b>due esportazioni separate</b> per avere il quadro completo.<br><br><b>Esportazione 1 — Pagato con carta di credito (Online):</b><br>1. Sezione Contabile → Dati Contabili<br>2. Imposta <b>Data inizio</b> e <b>Data fine</b> del periodo<br>3. Tipo: <b>Online</b> → Stato: <b>Pagato</b> → Periodo: <b>Tutti</b><br>4. Clicca <b>Esporta SEP</b> (per Excel) o <b>Esporta</b> (per .txt gestionale)<br><br><b>Esportazione 2 — Pagato con credito ricaricato:</b><br>1. Stesse date<br>2. Tipo: <b>Credito</b> → Stato: <b>Pagato</b><br>3. Clicca Esporta SEP<br><br>I file vengono salvati in <b>Esportazioni</b> e sono recuperabili in qualsiasi momento.<br><br><b>Attenzione:</b> i titoli emessi gratuitamente (tipo 'Gratuito') <b>non entrano nei dati contabili</b> — il sistema li esclude automaticamente. Non è necessario filtrarli manualmente."
        },
        {
          "tipo": "faq",
          "domanda": "Perché devo fare due esportazioni separate nei Dati Contabili?",
          "risposta": "Perché i biglietti acquistati con <b>carta di credito</b> (tipo 'Online') e quelli acquistati con il <b>credito da ricariche</b> (tipo 'Credito') sono registrati separatamente nel sistema. Per avere il quadro completo del venduto devi esportare: 1) <b>Online → Pagato → Tutti</b>, poi 2) <b>Credito → Pagato</b>."
        },
        {
          "tipo": "faq",
          "domanda": "Qual è la differenza tra 'Esporta' e 'Esporta SEP' nei Dati Contabili?",
          "risposta": "<b>Esporta</b> genera un file <b>.txt</b> nel formato per i software gestionali aziendali. <b>Esporta SEP</b> genera un file <b>.xls</b> (Excel) per visualizzazione e analisi manuale. Entrambi i file sono recuperabili nella sezione Esportazioni."
        },
        {
          "tipo": "faq",
          "domanda": "Le statistiche venduto includono gli abbonamenti gratuiti emessi dal commerciale?",
          "risposta": "<b>No.</b> Statistiche mensili, statistiche linee, statistiche venduto e dati contabili ignorano tutte le transazioni relative ai titoli emessi gratuitamente dal profilo commerciale."
        },
        {
          "tipo": "faq",
          "domanda": "Come verifico che un rimborso sia andato a buon fine?",
          "risposta": "Cerca il biglietto in Ordini → Biglietti (profilo commerciale) o in Ordini (sezione contabile). Stato: <b>'Attesa Rimborso'</b> = in elaborazione; <b>'Rimborsato'</b> = rimborso su carta completato; <b>'Rimborsato Credito'</b> = accreditato come saldo sull'account utente. Se è ancora 'Attesa Rimborso' dopo alcuni giorni, contatta l'Amministratore COTRAP."
        },
        {
          "tipo": "faq",
          "domanda": "Dove trovo i file già scaricati in precedenza?",
          "risposta": "I file già generati si cercano nella sezione <b>Esportazioni</b> del profilo con cui è stata richiesta l’estrazione. Scarica e conserva quelli necessari secondo le procedure aziendali: non usare l’elenco del portale come unica copia d’archivio."
        },
        {
          "tipo": "faq",
          "domanda": "Le statistiche mostrano un incasso diverso da quello che mi aspettavo: come lo verifico?",
          "risposta": "Le statistiche su Itineris hanno alcune esclusioni da conoscere prima di confrontarle con altri dati:<br><br>• <b>Titoli gratuiti esclusi</b>: le statistiche mensili, linee e venduto non includono mai i titoli emessi gratuitamente dal profilo commerciale.<br>• <b>Solo venduto online</b>: le statistiche riguardano esclusivamente il venduto sul portale web e sull'app. Non include il venduto con macchinette di bordo Tecbus.<br>• <b>Canale</b>: le statistiche includono sia 'Online' (carta) che 'Credito' (ricariche). Se vedi differenze rispetto ai dati contabili, controlla che stai confrontando lo stesso tipo di canale.<br><br><b>Per verificare nel dettaglio:</b> usa Sezione Contabile → Statistiche Venduto, filtra per linea e periodo, poi confronta con i Dati Contabili dello stesso periodo."
        },
        {
          "tipo": "faq",
          "domanda": "Qual è la differenza tra Statistiche Mensili, Statistiche Linee e Statistiche Venduto?",
          "risposta": "<b>Statistiche Mensili</b>: il venduto aggregato mese per mese, per seguire l'andamento nel tempo.<br><br><b>Statistiche linee</b>: il venduto per singola linea, calcolato <b>per data di emissione</b> del titolo, cioè in base a quando è stato acquistato.<br><br><b>Statistiche corse CS</b>: i biglietti di corsa semplice, calcolati <b>per data di partenza</b>, cioè in base a quando si viaggia. È la differenza da tenere presente quando i due numeri non coincidono.<br><br><b>Statistiche Venduto</b>: il venduto totale del periodo, con i file da portare nel gestionale aziendale.<br><br>Statistiche linee e Statistiche corse CS compaiono nel menu <b>Ordini</b> del pannello commerciale quando il profilo è abilitato a vederle; le altre sono nella <b>Sezione Contabile</b>."
        }
      ]
    },
    {
      "id": "faq-multitratta",
      "titolo": "Linea Multitratta",
      "aggiornato": "2026-03-30",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "faq",
          "domanda": "Cos'è una linea multitratta e quando si usa?",
          "risposta": "Una linea multitratta serve per vendere <b>abbonamenti che coprono un percorso con cambio autobus</b> a metà percorso, quando i due codici contabili non si trovano sulla stessa linea. Si costruisce sulle proprie linee: nel template si indicano la <b>linea di partenza</b> e la <b>linea di cambio</b>, e il pannello propone solo le linee che hanno un codice contabile in comune.<br><br>Esempio: la linea A collega Bari ad Altamura, la linea B collega Altamura a Matera. Con la linea multitratta si vende un unico abbonamento Bari-Matera con cambio ad Altamura.<br><br><b>Limitazione importante:</b> la spunta 'multitratta' su una linea <b>inibisce completamente la creazione di biglietti</b> per quella linea. La linea multitratta serve <b>esclusivamente per gli abbonamenti con cambio</b>, non per i biglietti di corsa singola."
        },
        {
          "tipo": "faq",
          "domanda": "Come si crea una linea multitratta? (struttura del template)",
          "risposta": "Il template di una linea multitratta richiede esattamente <b>3 poli</b>:<br><br><b>Polo 1</b> = Partenza (es. Bari)<br><b>Polo 2</b> = Punto di cambio (es. Matera) — deve avere un codice contabile presente in <b>entrambe le linee</b> coinvolte<br><b>Polo 3</b> = Arrivo (es. Taranto)<br><br>Il polo di cambio è il punto critico: se il codice contabile usato come cambio non è presente anche nell'altra linea, il sistema non riesce a calcolare il prezzo combinato dell'abbonamento.<br><br>Dopo aver creato la linea con la spunta 'multitratta' e il template a 3 poli, crea la corsa normalmente e pubblicala."
        },
        {
          "tipo": "faq",
          "domanda": "Un abbonamento multitratta non compare sullo shop COTRAP: cosa verifico?",
          "risposta": "Verifica titolo abilitato, linea e template multitratta, tre poli con codice centrale comune alle due linee, entrambe le direzioni e corse pubblicate valide. Controlla inclusioni/esclusioni e distanze, poi cerca il collegamento nel <a href=\"#controllo-tariffario-abbonamenti\">Controllo Tariffario Abbonamenti</a>. Il polo centrale serve alla compatibilità tariffaria: non identifica necessariamente la fermata fisica del cambio."
        },
        {
          "tipo": "faq",
          "domanda": "Posso creare biglietti di corsa singola su una linea multitratta?",
          "risposta": "<b>No.</b> La spunta 'multitratta' su una linea disabilita completamente la creazione di biglietti per quella linea. Se hai bisogno sia di biglietti che di abbonamenti multitratta per lo stesso percorso, devi gestirli su <b>due linee separate</b>: una normale (per i biglietti) e una multitratta (solo per gli abbonamenti con cambio)."
        }
      ]
    }
  ]
},
  "gestione-movimento": {
  "id": "gestione-movimento",
  "titolo": "Gestione Movimento",
  "aggiornato": "2026-09-09",
  "nuovo": false,
  "contenuto": [],
  "sottosezioni": [
    {
      "id": "comprendere-il-sistema",
      "titolo": "Comprendere il Sistema",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Sistema a livelli: <b>Codici Contabili → Poli → Linee/Template → Corse</b>. L'ordine è obbligatorio.",
            "Prima di iniziare: recupera codici, denominazione linea, polimetriche e tariffe da <b>Tecbus</b>.",
            "Creare la corsa non basta: va <b>pubblicata</b> per apparire sullo <a href=\"https://biglietteria.cotrap.it/\" target=\"_blank\">shop COTRAP</a>."
          ]
        },
        {
          "tipo": "steps",
          "items": [
            {
              "numero": "1",
              "titolo": "Codici Contabili Poli",
              "descrizione": "I codici dei Comuni del percorso (da Tecbus). Devono esistere prima di tutto il resto."
            },
            {
              "numero": "2",
              "titolo": "Poli",
              "descrizione": "Le fermate fisiche con coordinate GPS. Ogni fermata è agganciata a un codice contabile: più fermate della stessa località condividono lo stesso codice."
            },
            {
              "numero": "3",
              "titolo": "Linee e Template",
              "descrizione": "La linea è il contenitore; il template è l'elenco ordinato delle fermate con i km e i minuti, entrambi contati dal capolinea."
            },
            {
              "numero": "4",
              "titolo": "Corse",
              "descrizione": "Ogni singola partenza: orario, frequenza, posti. Vanno pubblicate (Stato Attivazione &quot;Attiva&quot;) per apparire sullo <a href=\"https://biglietteria.cotrap.it/\" target=\"_blank\">shop COTRAP</a>."
            }
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.0.png",
          "alt": "Menu Gestione Movimento",
          "didascalia": "Accesso alla sezione Gestione Movimento"
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Dove vado per fare cosa?</b> Riferimento rapido per orientarsi tra le sezioni:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Cambiare il percorso di una linea</b> (fermate, ordine tappe) → <b>Linee</b>",
            "<b>Cambiare gli orari di partenza</b> → <b>Corse</b> (modificare la corsa o crearne una nuova)",
            "<b>Sospendere una corsa temporaneamente</b> → <b>Eccezioni → Sospensione Corsa/Fermata</b>",
            "<b>Cambiare il prezzo di un biglietto o abbonamento</b> → <b>Eccezioni → Eccezione Tariffaria</b>",
            "<b>Correggere i km tra fermate</b> (influenza il costo degli abbonamenti) → <b>Eccezioni → Eccezione Chilometrica</b>",
            "<b>Vedere gli acquisti dei clienti</b> → <b>Ordini</b>",
            "<b>Estrarre dati contabili e incassi</b> → <b>Sezione Contabile</b>"
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.0b.png",
          "alt": "Sottomenu Gestione Movimento",
          "didascalia": "Voci disponibili in Gestione Movimento"
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Errori comuni da evitare:</b>"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Corsa non visibile?</b> Controlla lo <b>Stato Attivazione</b>, distinto dallo Stato Corsa interno. Non premere più volte Pubblica\\Nascondi: verifica prima date, frequenza, titolo ed eccezioni; dopo una richiesta attendi il completamento. Vedi <a href=\"#diag-non-compare\">i controlli diagnostici</a>.",
            "<b>Nomi di città duplicati nello shop COTRAP?</b> Il campo Descrizione di uno o più Codici Contabili è vuoto o non contiene il nome della frazione. Se per uno stesso Comune esistono più codici, compilare il campo Descrizione con il nome della frazione (es. 'Palese' per Bari-Palese).",
            "<b>Orari o prezzi sbagliati nel template?</b> Sia i minuti sia i km si calcolano sempre <b>dal capolinea</b>, mai dalla fermata precedente. Es.: Fermata B = 1 km / 7 min dal capolinea, Fermata C = 16 km / 25 min dal capolinea (non 15 km e 18 min da B).",
            "<b>Modifica al template ma le corse non cambiano?</b> Le corse non si aggiornano da sole. Vanno prima portate a <i>Stato Attivazione</i> &quot;Non attiva&quot; con l'icona Pubblica\\Nascondi, poi si modifica il template e si usa <b>Aggiorna Corse Inattive del Template</b>, infine si ripubblicano. Le corse che hanno subito modifiche dirette restano escluse.",
            "<b>Eccezione chilometrica:</b> controlla la data iniziale (primo del mese), la coppia di codici e il contatore In elaborazione."
          ]
        },
        {
          "tipo": "box-nota",
          "titolo": "Perché alcune operazioni non sono immediate",
          "contenuto": [
            "Alcune operazioni avviano un’elaborazione dei collegamenti e delle tariffe: il salvataggio non coincide necessariamente con la disponibilità del risultato.",
            "Le corse possono passare per <b>In attivazione</b> e <b>In disattivazione</b>. Dove compare <b>In elaborazione</b>, attendi il completamento prima di intervenire di nuovo sullo stesso oggetto.",
            "Un contatore invariato non basta a distinguere un’attesa normale da un errore. Registra oggetto e orario e chiedi assistenza se non procede.",
            "Per le eccezioni chilometriche il comando <b>Pubblica</b> riavvia l’elaborazione. Non usarlo ripetutamente come prova."
          ]
        }
      ]
    },
    {
      "id": "mezzi",
      "titolo": "Mezzi",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Non è obbligatorio inserire i mezzi: il numero di biglietti vendibili online si imposta nel campo <b>Occupazione Massima</b> di ogni corsa.",
            "Alcune aziende li censiscono comunque (marca, modello e posti) per poterli poi selezionare nella corsa: è una scelta organizzativa, non un requisito."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Questa sezione è dedicata all'inserimento dei mezzi del parco veicoli. <b>Non è un passaggio obbligatorio</b>: il numero di posti disponibili per la vendita online si gestisce tramite il campo <b>Occupazione Massima</b> nella creazione di ogni corsa. Se i mezzi vengono censiti qui, diventano selezionabili nel campo <i>Mezzo</i> della corsa e nei relativi filtri."
        }
      ]
    },
    {
      "id": "codici-contabili",
      "titolo": "Codici Contabili Poli",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Recupera i codici da <b>Tecbus</b> — senza di essi non puoi creare poli, template o corse.",
            "Un Comune può avere <b>più codici</b>: le frazioni ne hanno uno distinto e anche zone diverse dello stesso Comune possono averne uno proprio.",
            "Se lo stesso Comune ha più codici, compila <b>Descrizione</b> con il nome della frazione — altrimenti nello shop COTRAP appaiono nomi duplicati."
          ]
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione:</b> alle frazioni dei Comuni è necessario associare un altro codice contabile. (Esempio: Bari avrà un codice contabile, Palese-Bari ne avrà un altro.)"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.2.png",
          "alt": "Lista Codici Contabili",
          "didascalia": "Elenco codici contabili poli"
        },
        {
          "tipo": "paragrafo",
          "testo": "Cliccare su \"Aggiungi\" in alto a destra"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.2b.png",
          "alt": "Form Codice Contabile",
          "didascalia": "Maschera inserimento codice contabile"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Codice:</b> inserire codice contabile",
            "<b>Descrizione:</b> inserire il nome della frazione o della località se per lo stesso Comune esistono più codici contabili (es. <i>'Palese'</i> per Bari-Palese). Se il Comune ha un solo codice contabile, lasciare vuoto.",
            "<b>Comune:</b> inserire il comune",
            "<b>Frazione:</b> scegliere tra le opzioni in caso sia necessario"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione — nomi duplicati nello shop COTRAP:</b> se nello shop appaiono più risultati con lo stesso nome di Comune (es. due volte 'Bari'), significa che il campo Descrizione di uno o più codici contabili non è stato compilato. Inserire sempre il nome della frazione nel campo Descrizione quando esistono più codici per lo stesso Comune."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Al termine di ogni inserimento cliccare su <b>\"Conferma\"</b> in basso a destra per salvare il codice contabile."
        }
      ]
    },
    {
      "id": "codici-contabili-alternativi",
      "titolo": "Codici Contabili Alternativi",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Caso eccezionale: quando uno stesso Comune ha <b>due codici contabili</b> perche' alcune corse seguono un percorso con tariffa diversa.",
            "Va comunicato all'<b>Amministratore COTRAP</b> che attivera' il codice alternativo — il consorziato non puo' farlo autonomamente.",
            "Le corse con codice alternativo devono conservarlo anche dopo modifiche massive al template."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Eccezionalmente è possibile identificare uno stesso Comune con due codici contabili differenti. Se per esempio ci sono corse con un tragitto particolare per cui cambia anche la tariffa (Esempio: Corse rapide che potrebbero costare di più) si può identificare (se esiste già su tecbus) il polo con due codici."
        }
      ]
    },
    {
      "id": "poli",
      "titolo": "Poli",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "I Poli sono le fermate fisiche del bus. Ogni polo deve avere coordinate GPS e un Codice Contabile già inserito.",
            "Riutilizza una fermata già censita quando è fisicamente la stessa. Fermate diverse nello stesso Comune possono richiedere poli distinti.",
            "Dopo l’inserimento verifica coordinate e codice contabile. La riga espone <b>Pubblica</b> e il contatore <b>In elaborazione</b>; la vendibilità della tratta dipende anche da corse e titoli."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.3.png",
          "alt": "Menu Poli",
          "didascalia": "Accesso alla gestione Poli"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.3b.png",
          "alt": "Lista Poli",
          "didascalia": "Elenco poli inseriti"
        },
        {
          "tipo": "paragrafo",
          "testo": "Cliccare su <b>\"Aggiungi\"</b> in alto a destra."
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Denominazione:</b> nome preciso della fermata (es. Piazza Garibaldi, Via Roma angolo Via Verdi)",
            "<b>Regione:</b> selezionare la regione dal menu a tendina",
            "<b>Provincia:</b> inserire la provincia",
            "<b>Comune:</b> inserire il comune",
            "<b>Frazione:</b> inserire la frazione se applicabile",
            "<b>Codice Contabile:</b> selezionare il codice contabile del polo di riferimento (inserito in precedenza)",
            "<b>Latitudine e Longitudine:</b> copiare le coordinate da Google Maps e incollarle nei rispettivi campi",
            "<b>Geolocalizza:</b> cliccare per visualizzare il punto sulla mappa. Se la posizione non è precisa, trascinare l'indicatore sul punto esatto di transito",
            "<b>Fermata principale:</b> selezionare per mettere in evidenza questa fermata tra le altre dello stesso polo",
            "<b>Primaria:</b> se ci sono più fermate principali, selezionare questa opzione per indicare la più importante tra esse",
            "<b>Descrizione:</b> aggiungere eventuali note identificative (es. zona industriale, fermata nord)"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Al termine di ogni inserimento cliccare su <b>\"Conferma\"</b>. Ripetere il procedimento per ogni fermata del polo."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.3c.png",
          "alt": "Esempio Polo",
          "didascalia": "Esempio di una fermata caricata su Itineris"
        },
        {
          "tipo": "paragrafo",
          "testo": "Una volta inserita la fermata la schermata visualizzerà la riga di riferimenti:"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.3d.png",
          "alt": "Riga Polo",
          "didascalia": "Visualizzazione polo inserito con operazioni disponibili"
        },
        {
          "tipo": "paragrafo",
          "testo": "A destra si trova la colonna <b>Operazioni</b>. Le icone disponibili per ogni fermata sono, da sinistra a destra:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Visualizza su Mappa:</b> permette di controllare la posizione della fermata",
            "<b>Visualizza Modifica:</b> apre i dati della fermata",
            "<b>Pubblica:</b> richiede la pubblicazione dei dati del polo; controllare In elaborazione e i collegamenti interessati",
            "<b>Elimina:</b> rimuove il polo; prima verificare i percorsi che lo utilizzano"
          ]
        }
      ]
    },
    {
      "id": "linee",
      "titolo": "Linee",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "La Linea è il contenitore del percorso. All'interno si crea il <b>Template</b> con fermate, km e minuti.",
            "Creare sempre sia il template di <b>andata</b> che quello di <b>ritorno</b>: usa l'icona <b>Duplica e Inverti</b>.",
            "La tipologia (<b>Regionale/Provinciale/Comunale</b>) determina come viene calcolata la tariffa."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4.png",
          "alt": "Menu Linee",
          "didascalia": "Accesso alla gestione Linee"
        },
        {
          "tipo": "paragrafo",
          "testo": "Cliccare su <b>\"Aggiungi\"</b> in alto a destra per inserire una nuova linea."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4b.png",
          "alt": "Form Linea",
          "didascalia": "Maschera inserimento nuova linea"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4c.png",
          "alt": "Schermata Linea",
          "didascalia": "Il form della linea: denominazione, codice contabile, tipologia e, in basso, il riquadro <b>Template della linea</b> dove si aggiunge il percorso con il pulsante «+»."
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Denominazione:</b> riportare denominazione della linea presente su Tecbus (es. Corato - Trani)",
            "<b>Codice Contabile:</b> inserire il codice contabile della linea presente in Tecbus",
            "<b>Tipologia:</b> competenza Regionale, Provinciale o Comunale. Per il servizio urbano (Comunale) si usa il raggruppamento tariffario urbano relativo all’affidamento del Comune, non il calcolo chilometrico extraurbano. Regionale/Provinciale utilizzano CS, CSI e CSIA; Comunale utilizza CSU, CSUI e CSUIA.",
            "<b>Descrizione:</b> inserire eventuali aspetti identificativi della linea"
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Creare il template della linea inserendo la denominazione e una descrizione opzionale. Cliccare quindi sul pulsante <b>\"+\"</b> a destra. Per ogni linea è necessario creare sia il template di andata che quello di ritorno."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4d.png",
          "alt": "Template Linea",
          "didascalia": "Creazione template andata e ritorno"
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione:</b> in questo passaggio è possibile creare direttamente il template e confermare tutto alla fine, oppure è possibile confermare in questo passaggio e poi creare il template."
        },
        {
          "tipo": "paragrafo",
          "testo": "Per ogni template sono disponibili i seguenti strumenti (colonna destra):"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4e.png",
          "alt": "Tools Linea",
          "didascalia": "Icone strumenti disponibili"
        },
        {
          "tipo": "tools-grid",
          "items": [
            {
              "icona": "icona02.png",
              "nome": "Mostra fermate su Mappa",
              "descrizione": "Una volta inserite tutte le fermate è possibile visualizzarle tutte sulla mappa"
            },
            {
              "icona": "icona03.png",
              "nome": "Esporta in GeoJSON",
              "descrizione": "Esportazione geografica del percorso, di norma usata dall'Amministratore COTRAP"
            },
            {
              "icona": "icona04.png",
              "nome": "Visualizza template",
              "descrizione": "Apre il template: l'elenco ordinato dei poli con km e minuti, base per tutte le corse di quella linea"
            },
            {
              "icona": "icona05.png",
              "nome": "Duplica",
              "descrizione": "Crea un nuovo template a partire da quello esistente, mantenendo lo stesso ordine di fermate"
            },
            {
              "icona": "icona06.png",
              "nome": "Duplica e Inverti",
              "descrizione": "Crea il template di ritorno riportando le fermate in ordine inverso"
            },
            {
              "icona": "icona07.png",
              "nome": "Modifica",
              "descrizione": "Apre il form del template per modificarne denominazione e descrizione"
            },
            {
              "icona": "icona08.png",
              "nome": "Elimina",
              "descrizione": "Elimina il template"
            }
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Altre due operazioni presenti nella riga del template:</b><br>• <b>Aggiorna Corse Inattive del Template</b> (icona con la freccia verso l'alto): propaga le modifiche del template a tutte le corse collegate che si trovano in <i>Stato Attivazione</i> &quot;Non attiva&quot;. È il pulsante usato nella procedura di aggiornamento massivo.<br>• <b>Esporta</b> (icona con la freccia verso il basso): scarica il template; il file si recupera nella sezione Esportazioni."
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>LINEE MULTITRATTA (Abbonamenti Multi-tratta)</b>"
        },
        {
          "tipo": "paragrafo",
          "testo": "Una linea <b>multitratta</b> permette di generare abbonamenti fra codici contabili non appartenenti alla stessa linea. Dopo linea e template occorre creare e attivare la corsa associata per generare gli abbonamenti. Non genera biglietti CS e le corse multitratta sono escluse dal GTFS Google."
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-multi-2.png",
          "alt": "Form della linea con la spunta Multitratta",
          "didascalia": "Spunta <b>Multitratta</b> nel form della linea: nella griglia dei template compaiono le colonne <b>Linea di partenza</b> e <b>Linea di cambio</b>"
        },
        {
          "tipo": "lista",
          "items": [
            "L'abilitazione della spunta <b>\"multitratta\"</b> abilita l'inserimento della linea di partenza e linea di cambio all'interno dei singoli template linea",
            "La linea di partenza e di cambio è filtrata in base all'altra linea selezionata, visualizzando solo quelle che hanno un codice contabile in comune",
            "È possibile selezionare una linea di partenza e una linea di cambio uguali, ma nelle liste non saranno presenti le linee multitratta",
            "La spunta \"multitratta\" <b>inibisce la creazione di biglietti</b> per le corse che hanno un template multitratta",
            "La spunta modifica anche l'inserimento dei poli nel template, <b>forzandone il numero a 3</b>: il polo di partenza, il polo di cambio e il polo di arrivo",
            "Se il codice contabile del polo di cambio non appartiene ad entrambe le linee, verrà restituito errore"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione — significato del \"polo di cambio\":</b> Il polo di cambio NON è la fermata fisica dove i passeggeri cambiano mezzo. È il polo il cui codice contabile è presente in entrambe le linee, e serve al sistema per verificare che le due linee siano compatibili per la generazione dell'abbonamento multitratta."
        },
        {
          "tipo": "box-esempio",
          "titolo": "Esempio schematico di collegamento multitratta",
          "contenuto": [
            "<b>Linea 1:</b> collega i codici A e B.",
            "<b>Linea 2:</b> collega i codici B e C.",
            "Il template multitratta contiene A → B → C: B è il codice contabile comune.",
            "Il codice centrale dimostra la compatibilità delle linee, non la posizione fisica del cambio. Codici e linee dell’esempio sono convenzionali."
          ]
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-multi-1.png",
          "alt": "Template multitratta con tre poli",
          "didascalia": "Template multitratta: esattamente <b>3 poli</b>, con quello centrale contrassegnato come <b>Cambio</b>"
        },
        {
          "tipo": "paragrafo",
          "testo": "Una volta creata una corsa e associata alla linea multitratta e al template desiderato, all'attivazione verranno denormalizzati gli abbonamenti multitratta."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "NON verranno prese in considerazione le corse che derivano da una linea multitratta per il GTFS Google."
        },
        {
          "tipo": "paragrafo",
          "testo": "Sono stati aggiunti filtri per la pagina Linee e Corse per visualizzare soltanto le linee/corse multitratta."
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-multi-6.png",
          "alt": "Ricerca abbonamento multitratta su Portale Clienti",
          "didascalia": "Su Portale Clienti la ricerca segnala che l’abbonamento è multitratta"
        },
        {
          "tipo": "paragrafo",
          "testo": "Su Portale Clienti, tali abbonamenti presenteranno l'informazione di essere multitratta al momento della ricerca, con una modale informativa. Tale informazione è presente anche nella sezione degli abbonamenti acquistati e nel PDF dell'abbonamento."
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-multi-5.png",
          "alt": "Modale informativa multitratta",
          "didascalia": "La modale informativa mostrata all’utente"
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Multitratta:</b> configurare entrambe le direzioni della coppia A→B e B→A e verificarne la disponibilità. I percorsi devono essere coerenti con le linee selezionate."
        },
        {
          "tipo": "box-nota",
          "titolo": "Vincoli per linee multitratta",
          "contenuto": [
            "Il template linea deve SEMPRE avere linea di partenza e cambio",
            "Il template linea deve SEMPRE avere 3 poli",
            "Il polo di cambio deve avere codice contabile appartenente ad entrambe le linee, altrimenti verrà restituito errore",
            "Ogni template linea deve avere linea di partenza e cambio se la linea è multitratta"
          ]
        }
      ]
    },
    {
      "id": "creazione-template",
      "titolo": "Creazione del Template",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Il template è la lista ordinata delle fermate, con i <b>km</b> e i <b>minuti</b> di ogni fermata.",
            "<b>Km e minuti si contano SEMPRE dal capolinea</b>, non dalla fermata precedente. Il capolinea non ha né km né minuti.",
            "Esempio reale: 0 km / 5 min → 1 km / 7 min → 16 km / 25 min → 16 km / 26 min. I valori crescono lungo il percorso e non tornano mai indietro."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4.1.png",
          "alt": "Template Vuoto",
          "didascalia": "Schermata template vuoto"
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione:</b> cliccare su conferma in questa sezione non significa aver confermato tutto l'inserimento."
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>1</b> Cliccare su Aggiungi"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4.1b.png",
          "alt": "Aggiungi Fermata Template",
          "didascalia": "Aggiunta fermata al template"
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>2</b> Cliccando nel riquadro, si potranno visualizzare tutti i poli e le relative fermate inserite nella funzione \"POLI\"."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4.1c.png",
          "alt": "Selezione Polo",
          "didascalia": "Selezione del polo dalla lista"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4.1d.png",
          "alt": "Polo selezionato",
          "didascalia": "Coordinate visualizzate dopo la selezione"
        },
        {
          "tipo": "paragrafo",
          "testo": "Selezionando una delle fermate indicate (che sarà la prima della vostra linea) saranno visualizzate direttamente le coordinate."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4.1e.png",
          "alt": "Fermata con coordinate",
          "didascalia": "Scelta la fermata, il sistema compila da solo <b>latitudine e longitudine</b> prese dal polo."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4.1f.png",
          "alt": "Seconda fermata",
          "didascalia": "La prima fermata inserita nel template; con <b>Aggiungi</b> si passa alla successiva."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4.1g.png",
          "alt": "Selezione seconda fermata",
          "didascalia": "Ogni fermata aggiunta porta con sé i campi <b>Km</b> e <b>Minuti</b>: sono i valori contati dal capolinea, non dalla fermata precedente."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Km del template:</b> inserire per ogni fermata la distanza cumulativa dall’origine prevista dalla polimetrica. Il codice contabile uguale non impone da solo lo stesso valore. Non azzerare una fermata intermedia per bloccare una sottotratta: controllare invece le eccezioni e la configurazione dei titoli."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>IMPORTANTE — come si inseriscono km e minuti:</b> entrambi si calcolano sempre dal <b>capolinea (prima fermata)</b>, MAI dalla fermata precedente. Dai minuti il sistema ricava automaticamente l'orario di passaggio di ogni fermata a partire dall'orario di partenza della corsa; dai km ricava la distanza tariffaria tra i codici contabili, e quindi il prezzo di biglietti e abbonamenti."
        },
        {
          "tipo": "box-nota",
          "titolo": "I due campi dei chilometri: tariffario ed effettivi",
          "contenuto": [
            "Nel <b>template</b> c’è un solo campo <b>Km</b>.",
            "Nel polo <b>dentro la corsa</b> sono presenti <b>Km tariffario</b> e <b>Km effettivi</b>.",
            "Per la diagnosi confronta questi dati con la polimetrica Tecbus e con i km restituiti dal <b>Controllo Tariffario</b>. Non cambiare un campo per tentativi."
          ]
        },
        {
          "tipo": "box-esempio",
          "titolo": "Esempio corretto di inserimento di km e minuti",
          "contenuto": [
            "<b>Fermata A — Capolinea:</b> nessun km e nessun minuto (è il punto di partenza)",
            "<b>Fermata B:</b> 0 km — 5 min (stessa località del capolinea: 0 km <i>dal capolinea</i>)",
            "<b>Fermata C:</b> 1 km — 7 min (1 km e 7 min <i>dal capolinea</i>, non dalla fermata B)",
            "<b>Fermata D:</b> 16 km — 25 min (16 km e 25 min <i>dal capolinea</i>)",
            "<b>Fermata E:</b> 16 km — 26 min (stessa località della D: i km restano 16, cambiano solo i minuti)",
            "Se la corsa parte alle 08:00 dal capolinea, il sistema calcola: B = 08:05, C = 08:07, D = 08:25, E = 08:26"
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4.1h.png",
          "alt": "Inserimento minuti",
          "didascalia": "Inserimento minuti di transito"
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Si suggerisce di aggiungere tutte le fermate e poi cliccare su conferma."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "È possibile che si debbano creare più template per una stessa linea in base alle singole specifiche (ad esempio se ad un certo orario oppure in una giornata particolare la linea prevede una variazione di percorso, si utilizzerà uno dei template creati)."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.4.1i.png",
          "alt": "Esempio Template",
          "didascalia": "Esempio di template con più varianti"
        },
        {
          "tipo": "paragrafo",
          "testo": "In questo esempio la linea Bitonto - Santo Spirito ha diversi template, specificati nella denominazione con le caratteristiche peculiari del template. Es \"no merc oppure Merc. Ecc…\""
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>A cosa serve il campo <i>Sosta</i>:</b> non è un dato decorativo. Indicando i minuti di sosta di una corsa a una fermata, si permette al sistema di costruire le <b>coincidenze</b> con le altre corse che passano di lì poco prima o poco dopo. Esempio: una corsa arriva a Bari alle 14:00 e un'altra è passata alle 13:55; con una sosta di 5 minuti il sistema può proporre al cliente il viaggio combinato con cambio a Bari. Modificarla o azzerarla può quindi far sparire dei collegamenti dallo shop."
        },
        {
          "tipo": "box-nota",
          "titolo": "Modifica di un template con corse già associate",
          "contenuto": [
            "<b>Disattivare le corse</b> che usano quel template: dalla pagina Corse, icona <b>Pubblica\\Nascondi</b> su ogni corsa (lo <i>Stato Attivazione</i> passa a &quot;Non attiva&quot;)",
            "Modificare il template e cliccare su <b>Conferma</b>",
            "Cliccare sull'icona <b>Aggiorna Corse Inattive del Template</b> nella riga del template",
            "Rispondere <b>OK</b> alla richiesta di conferma",
            "Cliccare su <b>Conferma</b> in basso a destra",
            "<b>Ripubblicare le corse</b> con la stessa icona Pubblica\\Nascondi e verificare orari e prezzi"
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>MODIFICA TEMPLATE MASSIVO</b>"
        },
        {
          "tipo": "paragrafo",
          "testo": "È possibile applicare le modifiche di un template a tutte le corse associate in un'unica operazione. Questa procedura permette di aggiornare massivamente tutte le corse che utilizzano un determinato template."
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-template-4.png",
          "alt": "Pagina Corse filtrata per Template",
          "didascalia": "Da <b>Corse</b>, filtrare per Template per individuare tutte le corse interessate"
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-template-3.png",
          "alt": "Corsa con codice contabile alternativo",
          "didascalia": "Alcune corse possono avere anche il <b>codice contabile alternativo</b>"
        },
        {
          "tipo": "lista-numerata",
          "items": [
            "<b>Disattivare le corse</b>: dalla pagina Corse, icona <b>Pubblica\\Nascondi</b> su ogni corsa interessata. L'aggiornamento massivo agisce <b>solo</b> sulle corse con <i>Stato Attivazione</i> &quot;Non attiva&quot;",
            "<b>Da Linee</b>, aprire la linea che contiene il template e aprirlo con <b>Visualizza template</b>",
            "<b>Effettuare la modifica</b> al template e confermare",
            "<b>Applicare le modifiche</b> a tutte le corse con l'icona <b>Aggiorna Corse Inattive del Template</b> nella riga del template"
          ]
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-template-2.png",
          "alt": "Linea aperta con l’elenco dei suoi template",
          "didascalia": "Da <b>Linee</b>, aprire la linea che contiene il template da modificare"
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-template-1.png",
          "alt": "Template aperto con poli, km e minuti",
          "didascalia": "Il template da modificare, con l’elenco ordinato dei poli, i km e i minuti"
        },
        {
          "tipo": "paragrafo",
          "testo": "Le modifiche vengono riportate anche a tutte le corse, comprese quelle che hanno il cod. cont. alternativo."
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-template-6.png",
          "alt": "Icona Aggiorna Corse Inattive del Template",
          "didascalia": "L’icona <b>Aggiorna Corse Inattive del Template</b> nella riga del template"
        },
        {
          "tipo": "box-nota",
          "titolo": "Regole importanti per la modifica massiva",
          "contenuto": [
            "La modifica di un template modifica solo le corse NON attive",
            "Indipendentemente dal fatto che una corsa abbia o no il cod. alternativo, deve subire la modifica del template",
            "Le corse che hanno un cod. cont. alternativo devono continuare a conservarlo, anche se il polo con cod. cont. alternativo subisce un cambio di posizione",
            "Se una corsa (attiva o no) ha subito direttamente una modifica al template, allora NON deve subire la modifica massiva del template"
          ]
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-template-5.png",
          "alt": "Parametri che costituiscono una modifica diretta",
          "didascalia": "I parametri evidenziati sono quelli che, se modificati sulla singola corsa, la escludono dall’aggiornamento massivo"
        },
        {
          "tipo": "box-nota",
          "titolo": "Cosa è considerato una modifica diretta al template",
          "contenuto": [
            "Modifica del chilometraggio di un polo",
            "Aggiunta o eliminazione di un polo",
            "Modifica dell'orario di un polo",
            "Modifica della sosta",
            "Flag: Solo discesa, Solo salita, Solo transito"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>NON</b> è considerata modifica diretta: l'aggiunta o l'eliminazione di un cod. cont. alternativo di un polo."
        }
      ]
    },
    {
      "id": "corse",
      "titolo": "Corse",
      "aggiornato": "2026-03-05",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "La corsa è una singola partenza: collega un template, ha orario, frequenza e numero di posti disponibili online.",
            "<b>Stato Corsa ≠ Stato Attivazione.</b> Lo <i>Stato Corsa</i> (Attiva / Sospesa) è interno; lo <i>Stato Attivazione</i> (Non attiva / Attiva) decide se la corsa è vendibile su biglietteria.cotrap.it e si cambia con l'icona <b>Pubblica\\Nascondi</b>.",
            "Stagionale? Compila Data inizio/fine corsa. Tutto l'anno? Lascia quei campi vuoti."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.5.png",
          "alt": "Menu Corse",
          "didascalia": "Accesso alla gestione Corse"
        },
        {
          "tipo": "paragrafo",
          "testo": "Cliccare su <b>\"Aggiungi\"</b> in alto a destra."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.5b.png",
          "alt": "Form Corsa",
          "didascalia": "Maschera inserimento nuova corsa"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Denominazione:</b> si consiglia di inserire capolinea-capolinea e orario della corsa",
            "<b>Codice Corsa:</b> Questo codice si può scegliere autonomamente. Si tratterà di un codice interno che aiuta ad identificare la corsa specifica. Si consiglia di procedere in modo progressivo inserendo il codice della linea seguito da un punto e poi il numero della corsa. Es: 100.01 (linea 100, codice corsa 01)",
            "<b>Codice turno:</b> il turno di servizio a cui la corsa appartiene (colonna <i>TRN</i> nell'elenco corse)",
            "<b>Data inizio corsa e data fine corsa:</b> sono valori da inserire solo nel caso quella corsa abbia una validità stagionale o comunque limitata nel tempo. Ad esempio un servizio estivo. In caso contrario si tratti di corse effettuate tutto l'anno lasciare vuoti questi campi",
            "<b>Fornitore:</b> Nel caso sia una linea data in subappalto. In questo modo l'utente che acquisterà il biglietto saprà che la corsa è intestata ad un determinato consorziato, ma che il servizio è effettuato da un altro",
            "<b>Linea:</b> selezionare nel menu a tendina tra quelle precedentemente caricate quella a cui fa capo la corsa che si sta creando",
            "<b>Template:</b> selezionare dal menu a tendina il template del percorso che sarà effettuato dalla corsa (creato in precedenza nella sezione Linee)",
            "<b>Mezzo:</b> facoltativo. Va valorizzato solo se l'azienda ha censito i propri mezzi; la disponibilità dei posti per la vendita online si gestisce comunque con <b>Occupazione Massima</b>",
            "<b>Occupazione Massima:</b> inserire il numero di biglietti che si vogliono rendere disponibili per la vendita online sulla corsa. Se la corsa ha anche vendita a bordo o presso agenzie di terra, si consiglia di inserire un numero inferiore rispetto alla capienza totale del mezzo, riservando così i posti rimanenti agli acquisti fisici",
            "<b>Frequenza:</b> scegliere dal menu a tendina tra le tipologie di frequenza inserite nella prima fase di progettazione",
            "<b>Stato Corsa:</b> lasciare su <b>Attiva</b>. È lo stato <b>interno</b> della corsa e ammette due valori, <b>Attiva</b> e <b>Sospesa</b>. Non va confuso con lo <b>Stato Attivazione</b>, che è la pubblicazione sullo shop (vedi sotto)",
            "<b>Note:</b> campo libero a uso interno"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione — due stati distinti della corsa, da non confondere:</b><br>• <b>Stato Corsa</b> (campo del form, colonna <i>Stato</i>): valori <b>Attiva</b> / <b>Sospesa</b>. È lo stato interno della corsa e normalmente resta su Attiva.<br>• <b>Stato Attivazione</b> (colonna <i>Stato Attivazione</i>, icona <b>Pubblica\\Nascondi</b>): valori <b>Non attiva</b>, <b>In attivazione</b>, <b>Attiva</b>, <b>In disattivazione</b>. È questo che decide se la corsa è visibile e vendibile su <a href=\"https://biglietteria.cotrap.it/\" target=\"_blank\">biglietteria.cotrap.it</a>.<br>Una corsa appena creata nasce con Stato Attivazione <b>Non attiva</b>: finché non si clicca Pubblica\\Nascondi non è acquistabile. Gli stati <i>In attivazione</i> e <i>In disattivazione</i> sono transitori: indicano che il sistema sta elaborando la richiesta.<br><b>Quando la procedura chiede di &quot;disattivare le corse&quot;</b> (ad esempio per l'aggiornamento massivo di un template) si intende sempre portare lo <b>Stato Attivazione</b> a &quot;Non attiva&quot; con l'icona Pubblica\\Nascondi."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Attivazione\\Disattivazione Automatica:</b> spunta facoltativa. Se abilitata, il sistema attiva e disattiva la corsa da solo in base al calendario, senza doverla pubblicare e nascondere a mano — tipicamente per i servizi legati al calendario scolastico. Non è riservata alle sole frequenze Scolastiche: può essere usata anche su corse giornaliere o festive. In caso di dubbio sull'effetto su una specifica corsa, verificare con l'Amministratore COTRAP."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Frequenza:</b> la denominazione è libera. Per capire i giorni di servizio controlla <b>Tipologia, giorni selezionati, date e calendario applicabile</b>, non soltanto il nome."
        },
        {
          "tipo": "paragrafo",
          "testo": "Una volta inseriti i dati iniziali automaticamente il sistema visualizzerà i poli e tutti i dati già impostati nel template"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.5c.png",
          "alt": "Corsa con template",
          "didascalia": "Visualizzazione corsa con dati del template"
        },
        {
          "tipo": "icona-azione",
          "icona": "icona07.png",
          "testo": "Cliccare sul pulsante per inserire il primo orario. <b>Attenzione:</b> inserire solo l'orario di partenza dal capolinea. Il sistema aggiornerà automaticamente a cascata tutti gli orari delle fermate successive in base ai minuti indicati nel template."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.5d.png",
          "alt": "Inserimento Orario",
          "didascalia": "Inserimento orario di partenza"
        },
        {
          "tipo": "icona-azione",
          "icona": "icona09.png",
          "testo": "Inserire l'orario (ore e minuti) e cliccare sull'icona di conferma"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.5e.png",
          "alt": "Orario inserito",
          "didascalia": "L'orario si scrive nel primo polo, in <b>Ore</b> e <b>Minuti</b>, e si conferma con la spunta a destra."
        },
        {
          "tipo": "paragrafo",
          "testo": "Di seguito si potrà vedere come in automatico il sistema avrà aggiornato gli orari"
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.5f.png",
          "alt": "Orari Calcolati",
          "didascalia": "Orari calcolati automaticamente dal sistema"
        },
        {
          "tipo": "paragrafo",
          "testo": "Cliccare su <b>\"Conferma\"</b> in basso a destra. A questo punto la corsa è stata creata ma non è ancora visibile o vendibile sullo shop COTRAP — per pubblicarla è necessario un passaggio ulteriore."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.5g.png",
          "alt": "Corsa creata",
          "didascalia": "La corsa appena creata compare in elenco con <b>Stato Attivazione «Non attiva»</b>: esiste, ma non è ancora vendibile."
        },
        {
          "tipo": "icona-azione",
          "icona": "icona10.png",
          "testo": "Per rendere la corsa visibile e vendibile su <a href=\"https://biglietteria.cotrap.it/\" target=\"_blank\">biglietteria.cotrap.it</a>, cliccare sull'icona <b>\"Pubblica\\Nascondi\"</b> nella colonna Operazioni."
        },
        {
          "tipo": "paragrafo",
          "testo": "Verifica i dati prima di confermare la pubblicazione. Attendi che lo <b>Stato Attivazione</b> diventi <b>Attiva</b>, poi controlla sulla biglietteria le tratte e le date previste."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.5h.png",
          "alt": "Conferma pubblicazione",
          "didascalia": "Richiesta conferma pubblicazione corsa"
        },
        {
          "tipo": "avviso",
          "stile": "success",
          "testo": "Si consiglia di inserire prima <b>tutte le corse</b> e solo in seguito pubblicarle tutte insieme. Dopo la pubblicazione lo stato attivazione diventerà <b>\"Attiva\"</b>."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.5i.png",
          "alt": "Corsa attiva",
          "didascalia": "Corsa con Stato Attivazione Attiva"
        }
      ]
    },
    {
      "id": "note",
      "titolo": "Note",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Permette di aggiungere comunicazioni visibili agli utenti sullo shop COTRAP nel dettaglio di corsa, polo o linea.",
            "La nota appare automaticamente nel periodo di validita' impostato e scompare alla scadenza — senza intervento manuale.",
            "Il campo <b>Denominazione</b> e' solo interno (non visibile ai clienti). Il <b>Testo</b> e' quello che compare sullo shop."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.6.png",
          "alt": "Menu Note",
          "didascalia": "Accesso alla gestione Note"
        },
        {
          "tipo": "paragrafo",
          "testo": "Questa funzionalità permette di inserire comunicazioni per i clienti che saranno visualizzate direttamente nel dettaglio della corsa, del polo o della linea sul portale <a href=\"https://www.cotrap.it\" target=\"_blank\">COTRAP</a>. La nota compare durante il periodo di validità impostato e scompare automaticamente alla scadenza."
        },
        {
          "tipo": "paragrafo",
          "testo": "Cliccare su <b>\"Aggiungi\"</b> in alto a destra per inserire una nuova nota."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.6b.png",
          "alt": "Aggiungi nota",
          "didascalia": "La pagina <b>Note</b>: si parte dal pulsante <b>Aggiungi</b> in alto a destra."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.6c.png",
          "alt": "Form Nota",
          "didascalia": "Maschera inserimento nota"
        },
        {
          "tipo": "paragrafo",
          "testo": "Inserire in <b>Denominazione</b> un titolo che identifichi chiaramente la comunicazione (visibile solo internamente, non mostrato ai clienti)."
        },
        {
          "tipo": "box-esempio",
          "titolo": "Esempio: Comunicazione processione",
          "contenuto": [
            "<b>Denominazione:</b> Processione",
            "<b>Data inizio Validità - Data Fine validità:</b> il periodo in cui tale comunicazione sarà visibile su sito",
            "<b>Tipologia:</b> scegliere tra polo, linea o corsa. Nel caso si selezioni \"corsa\", sarà necessario specificare anche la linea e la corsa nello specifico.",
            "<b>Testo:</b> la corsa potrebbe subire ritardi per la processione"
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.6d.png",
          "alt": "Nota tipologia corsa",
          "didascalia": "Il form della nota: denominazione interna, periodo di validità e tipologia. Con tipologia <b>Corsa</b> vanno indicate anche la linea e la corsa."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.6e.png",
          "alt": "Conferma nota",
          "didascalia": "Lo stesso form con il campo <b>Testo</b> compilato: è questo il messaggio che leggeranno i clienti sullo shop."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.6f.png",
          "alt": "Lista note",
          "didascalia": "La nota salvata nell'elenco, con il periodo di validità e la colonna <b>In elaborazione</b> mentre il sistema la propaga."
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.6g.png",
          "alt": "Nota su Sito",
          "didascalia": "Visualizzazione della nota sul sito COTRAP"
        }
      ]
    },
    {
      "id": "concetti-base-abbonamenti",
      "titolo": "Concetti Base: Tariffario e Raggruppamento Abbonamenti",
      "aggiornato": "2026-03-03",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Questi parametri (tariffari, raggruppamenti, categorie sconto) sono gestiti <b>solo dall'Amministratore COTRAP</b> — il consorziato puo' solo consultarli.",
            "L’importo dell’abbonamento dipende dal raggruppamento, dalla tariffa applicabile, dalle eventuali eccezioni e dalla categoria sconto.",
            "Servizio urbano + extraurbano sullo stesso Comune? Usare <b>due codici contabili polo distinti</b> e comunicarlo all'Amministratore."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Prima di procedere con la configurazione degli abbonamenti è necessario comprendere tre concetti fondamentali gestiti dall'<b>Amministratore di Sistema COTRAP</b>. Il consorziato non può modificare questi valori, ma deve conoscerli per capire come funzionano i prezzi."
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>1. Tariffario Abbonamenti</b>"
        },
        {
          "tipo": "paragrafo",
          "testo": "Nel pannello Amministrativo, nella stessa sezione Tariffari già vista nella Configurazione, viene inserito anche il tariffario specifico per gli abbonamenti. L'importo inserito è l'importo <b>lordo</b> indicato dalla delibera regionale, con una data di inizio validità impostata dall'Admin. Ad ogni aggiornamento del Tariffario Regionale, l'Amministratore aggiornerà questa sezione."
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>2. Raggruppamento Tariffario</b>"
        },
        {
          "tipo": "paragrafo",
          "testo": "I tariffari sono poi associati ai <b>Raggruppamenti Tariffari</b>, ovvero le tariffe associate alle diverse tipologie di titoli di viaggio. Esistono due tipi principali:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Raggruppamento Tariffario Extraurbano</b>: tariffa su base chilometrica regionale. La denominazione dei raggruppamenti è in linea con la dicitura 'tariffa' già identificata sulle macchinette emettitrici Tecbus.",
            "<b>Raggruppamento Tariffario Urbano</b>: la tariffa è definita in base all'affidamento del servizio con il Comune. Per attivarlo, è necessario comunicare all'Amministratore il codice contabile polo del servizio urbano."
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Servizio urbano ed extraurbano:</b> se un Comune è servito sia da servizio extraurbano che urbano, si consiglia di utilizzare <b>due codici contabili polo distinti</b>."
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>3. Categoria Calcolo di Sconto</b>"
        },
        {
          "tipo": "paragrafo",
          "testo": "La <b>Categoria Calcolo di Sconto</b>, quando prevista dal titolo, identifica la tessera e il relativo calcolo. Gli abbonamenti standard usano una categoria dedicata; il CS ordinario può non averne alcuna. La percentuale applicabile va letta nella configurazione autorizzata: non si deduce dalla sola denominazione del titolo."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Se occorre una tessera 'speciale' con un fattore di sconto diverso non presente nell'elenco standard, è necessario contattare <b>sia l'Amministratore di Sistema di Itineris che Tecbus</b>, in quanto la tessera deve essere creata su entrambi i sistemi."
        }
      ]
    },
    {
      "id": "titoli-di-viaggio",
      "titolo": "Titoli di Viaggio",
      "aggiornato": "2026-03-30",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Da qui gestisci sia i <b>biglietti CS</b> (corsa semplice, inclusi CSI invalidi) che gli <b>abbonamenti</b>. Per entrambi serve prima l'attivazione dell'Admin.",
            "Per biglietti e abbonamenti occorrono titolo abilitato dall’Admin, configurazione dei collegamenti e attivazione aziendale; la sola pubblicazione della corsa non sostituisce questi passaggi.",
            "La tipologia della linea (Regionale/Provinciale vs Comunale) determina quali CS sono disponibili: CS/CSI/CSIA per extraurbane, CSU/CSUI/CSUIA per urbane."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Da questa sezione il consorziato gestisce due tipologie di titoli di viaggio: i <b>biglietti di corsa semplice</b> (CS e varianti) e gli <b>abbonamenti</b>. Le configurazioni base (tariffari, raggruppamenti tariffari, categorie di sconto) sono gestite dall'Amministratore; il consorziato gestisce l'attivazione e la configurazione dei propri titoli."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Titoli biglietto disponibili (6 categorie CS):</b><br>• <b>CS</b> — Corsa Semplice standard, il biglietto ordinario — solo linee Regionale/Provinciale<br>• <b>CSI</b> — Corsa Semplice Invalidi (<b>gratuito</b>, art. 30 c. 3 L.R. 18/2002) — solo linee Regionale/Provinciale<br>• <b>CSIA</b> — Corsa Semplice Invalidi + Accompagnatore (<b>gratuito</b>) — solo linee Regionale/Provinciale<br>• <b>CSU</b> — Corsa Semplice Urbana standard — solo linee Comunali<br>• <b>CSUI</b> — Corsa Semplice Urbana Invalidi (<b>gratuito</b>) — solo linee Comunali<br>• <b>CSUIA</b> — Corsa Semplice Urbana Invalidi + Accompagnatore (<b>gratuito</b>) — solo linee Comunali<br><br>Per attivare CSI/CSIA/CSUI/CSUIA: il profilo Admin deve prima creare e configurare il titolo. Solo dopo appare nell'elenco del commerciale. Vedi sezione <b>CS Invalidi</b> per la procedura completa."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Calcolo degli abbonamenti extraurbani:</b> il manuale operativo indica la corsa attiva con la maggiore distanza fra i codici ricercati. Verificare anche raggruppamento, eccezioni e sconto della tessera. Se andata e ritorno differiscono, confrontare i percorsi con Tecbus prima di modificare i km."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Servizio urbano ed extraurbano:</b> se un Comune è servito sia da servizio extraurbano che urbano, utilizzare <b>due codici contabili polo distinti</b>. In questo modo il sistema applica la tariffa corretta per ogni tipo di servizio. Per attivare il servizio urbano comunicare all'Amministratore il codice contabile polo relativo."
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>Richiesta titoli di viaggio</b>"
        },
        {
          "tipo": "paragrafo",
          "testo": "Per attivare gli abbonamenti è necessario inviare formale richiesta all'<b>Amministratore COTRAP</b>, specificando gli abbonamenti standard che si desidera vendere online. Sono anche disponibili abbonamenti per Invalidi con o senza accompagnatore. Per abbonamenti dedicati (es. studenti, pendolari con tessere speciali) è necessario confrontarsi preventivamente con l'Amministratore di Sistema."
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Abb. Mensile/52:</b> abbonamento mensile 52 corse — valido dal primo all'ultimo giorno del mese",
            "<b>Abb. Mensile/42:</b> abbonamento mensile <b>ridotto</b>, 42 corse — secondo le Condizioni di Trasporto è valido <b>per non più di cinque giorni a settimana</b> (tipicamente linee con servizio dal lunedì al venerdì, es. corse operaie)",
            "<b>Abb. Sett/12:</b> abbonamento settimanale 12 corse — valido dal lunedì alla domenica della settimana sovrastampata",
            "<b>Abb. Sett/10:</b> abbonamento settimanale <b>ridotto</b>, 10 corse — come il mensile/42, valido <b>per non più di cinque giorni a settimana</b>",
            "<b>Abb. Mensile Invalidi Acc/52:</b> abbonamento mensile invalidi con accompagnatore 52 corse — <b>gratuito</b> (art. 30 c. 3 L.R. 18/2002)",
            "<b>Abb. Mensile Invalidi/52:</b> abbonamento mensile invalidi senza accompagnatore 52 corse — <b>gratuito</b> (art. 30 c. 3 L.R. 18/2002)",
            "<b>Abb. Settimanale Invalidi/12:</b> abbonamento settimanale invalidi 12 corse — <b>gratuito</b>",
            "L'elenco non è esaustivo: ogni azienda vede i titoli che l'Amministratore ha abilitato per lei (esistono ad esempio abbonamenti dedicati a studenti o versioni personali e impersonali)"
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Dopo aver richiesto l'attivazione, accedere a <b>Gestione Movimento → Titoli di Viaggio</b>. Inizialmente i titoli risulteranno nello stato <b>\"Non Attivi\"</b>."
        },
        {
          "tipo": "paragrafo",
          "testo": "La schermata mostra le seguenti colonne per ogni titolo di viaggio:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Denominazione</b> — non modificabile, la imposta l'Amministratore in base agli abbonamenti cartacei emessi dalle macchinette Tecbus",
            "<b>Raggruppamento Tariffario Urbano</b> e <b>Raggruppamento Tariffario Extra Urbano</b> — sono due colonne distinte: un titolo urbano ha valorizzata la prima, un titolo extraurbano la seconda. Nell'extraurbano compaiono le sigle del tariffario regionale: <b>AM(52c)</b> e <b>AMR(42c)</b> per i mensili, <b>AS(12c)</b> e <b>ASR(10c)</b> per i settimanali, <b>CS</b> per il biglietto",
            "<b>Tipologia</b> — <b>Biglietto</b> oppure <b>Abbonamento</b>. La durata (mensile o settimanale) si legge invece nel raggruppamento tariffario e nel campo Validità della configurazione",
            "<b>Periodo stagionalità</b> — le date, per i titoli validi solo in un periodo dell'anno (per esempio gli abbonamenti studenti legati al bonus regionale)",
            "<b>Categoria calcolo sconto</b> — la tessera che dà diritto al titolo e il relativo fattore di sconto sull'importo lordo del tariffario (es. la <b>Categoria 1</b> prevede il 10% di sconto sulla base della delibera della Regione Puglia). Le voci <i>NT - Nessuna tessera</i> indicano un titolo vendibile senza tessera; il biglietto CS ordinario di norma non ha alcuna categoria e mostra un trattino. Se occorre una tessera 'speciale' non presente nell'elenco, va contattato sia l'Amministratore di Sistema di Itineris sia Tecbus",
            "<b>Stato attivazione</b> — <b>Non Attivo</b>, <b>In Attivazione</b>, <b>Attivo</b>, <b>In Disattivazione</b>. Come per le corse, i due stati intermedi sono transitori e indicano che il sistema sta generando o togliendo i titoli",
            "<b>Operazioni</b> — <b>Nascondi</b> (attiva e disattiva il titolo) e <b>Visualizza Modifica</b> (apre la configurazione)"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione:</b> Il corretto funzionamento degli abbonamenti dipende interamente dalla corretta configurazione del titolo di viaggio. I titoli standard sono già configurati dall'Amministratore secondo la normativa regionale."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Filtri della pagina:</b> il pulsante <b>Filtri</b> permette di cercare per Raggruppamento Tariffario Urbano o Extra Urbano, <b>Stato</b> (Tutti, Non Attivo, In Attivazione, Attivo, In Disattivazione), Categoria Calcolo Sconto, <b>Riconoscimento</b> (Account oppure Account_Tessera), linea, corsa e coppia di codici contabili di partenza e arrivo. È il modo più rapido per capire se un titolo è rimasto in uno stato intermedio."
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>Configurazione titolo di viaggio</b>"
        },
        {
          "tipo": "paragrafo",
          "testo": "Il tasto <b>Visualizza Modifica</b> apre la configurazione del titolo. <b>I campi in alto sono in sola lettura</b> (Denominazione, Categoria Calcolo Sconto, Codice Contabile Tariffa, Visibilità, Numero Viaggi, Emissioni Massime Per Periodo, Tipologia, Per tariffa urbana, Validità, Stagionale): li imposta l'Amministratore. Quello su cui interviene il consorziato sta più in basso, in quattro riquadri:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Linee e corse abilitate</b> — le linee su cui il titolo deve valere e, dentro ciascuna, le singole corse",
            "<b>Linee e corse da escludere</b> — l'elenco opposto, per togliere una linea o alcune corse (riquadro <i>Corse non abilitate</i>)",
            "<b>Codici contabili abilitati</b> — le coppie di codici contabili, indicate per comune e frazione di partenza e di arrivo, per cui il titolo è vendibile",
            "<b>Codici contabili da escludere</b> — le coppie da togliere, per esempio un collegamento stagionale che non prevede abbonamento"
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Se si lasciano tutti e quattro i riquadri vuoti, il titolo vale per tutti i collegamenti presenti."
        },
        {
          "tipo": "box-nota",
          "titolo": "Esempi di configurazione abbonamenti",
          "contenuto": [
            "<b>Esempio 1:</b> Le linee 1001-1002 (andata e ritorno) risultano abilitate, ad esclusione della coppia di codici contabili polo 944-14 (collegamento estivo, non prevede abbonamento).",
            "<b>Esempio 2:</b> Nell'Abb. 42 corse sono state abilitate solo le linee da e per la zona industriale, poiché il servizio è previsto solo dal lunedì al venerdì.",
            "<b>Esempio 3:</b> Nella configurazione degli abbonamenti mensili invalidi non è stato escluso alcun collegamento.",
            "<b>Esempio 4:</b> Quando vengono escluse coppie di codici contabili, l'esclusione vale anche per la tratta inversa (es. escludendo A→B, viene escluso automaticamente anche B→A).",
            "<b>Esempio 5:</b> È possibile che l'Amministratore di sistema inserisca in fase di configurazione la stagionalità di un abbonamento (es. abbonamenti ridotti al 50% per studenti che hanno beneficiato del bonus trasporti della Regione Puglia, attivi solo nel periodo specifico previsto dall'agevolazione)."
          ]
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione:</b> L'esclusione di coppie di codici contabili vale sempre in entrambe le direzioni."
        }
      ]
    }
  ]
},
  "guida-veloce": {
  "id": "guida-veloce",
  "titolo": "Guida Veloce",
  "aggiornato": "2026-03-04",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "paragrafo",
      "testo": "Questa guida rapida riassume i passaggi fondamentali per configurare e utilizzare la piattaforma Itineris. Per istruzioni dettagliate, consulta la sezione specifica di ciascun argomento."
    },
    {
      "tipo": "steps",
      "items": [
        {
          "numero": 1,
          "titolo": "Accesso al portale",
          "descrizione": "Accedi al Portale Itineris (itinerisadminpanel.azurewebsites.net) e inserisci le credenziali (ID utente e password) fornite dal consorzio. Dopo il login visualizzerai la dashboard principale."
        },
        {
          "numero": 2,
          "titolo": "Configurazione",
          "descrizione": "Nella sezione <b>Configurazione</b> consulta i tariffari regionali e i calendari scolastici, poi inserisci le <b>frequenze</b> delle tue corse (giornaliera, feriale, scolastica…). Qui si registrano anche gli <b>utenti dell'app di controllo</b>."
        },
        {
          "numero": 3,
          "titolo": "Inserimento Codici Contabili e Poli",
          "descrizione": "Nella sezione Gestione Movimento, inserisci i codici contabili dei Comuni/frazioni (recuperati da <b>Tecbus</b>) e i poli (le fermate precise con coordinate GPS)."
        },
        {
          "numero": 4,
          "titolo": "Creazione Linee e Template",
          "descrizione": "Crea le linee con denominazione, codice e tipologia (Regionale/Provinciale/Comunale). Per ogni linea crea il template: il modello del percorso con tutte le fermate, indicando per ciascuna i km e i minuti <b>contati dal capolinea</b> (mai dalla fermata precedente). Crea anche il template di ritorno usando 'Duplica e Inverti'."
        },
        {
          "numero": 5,
          "titolo": "Creazione Corse",
          "descrizione": "Per ogni linea, crea le corse una per una: collega linea e template, inserisci l'orario di partenza dal capolinea (il sistema calcola automaticamente tutti gli altri orari), scegli la frequenza e imposta l'occupazione massima."
        },
        {
          "numero": 6,
          "titolo": "Pubblicazione delle Corse",
          "descrizione": "Dopo aver inserito tutte le corse, pubblicarle per renderle visibili sullo shop COTRAP (<a href=\"https://biglietteria.cotrap.it/\" target=\"_blank\">biglietteria.cotrap.it</a>). In Gestione Movimento → Corse, cliccare sull'icona <b>Pubblica\\Nascondi</b> a destra di ogni corsa e confermare. Si consiglia di inserire prima tutte le corse e poi pubblicarle tutte insieme. Dopo la pubblicazione lo <i>Stato Attivazione</i> diventa &quot;Attiva&quot;. Le corse non pubblicate non sono visibili né acquistabili dagli utenti."
        },
        {
          "numero": 7,
          "titolo": "Attivazione dei Titoli di Viaggio",
          "descrizione": "Verifica i <b>titoli di viaggio</b> per biglietti e abbonamenti: devono essere abilitati dall’Amministratore, configurati sulle linee e tratte previste e attivati dall’azienda. <b>Pubblicare la corsa non sostituisce l’attivazione del titolo.</b> Controlla infine tratta, data, prezzo e disponibilità sulla biglietteria."
        },
        {
          "numero": 8,
          "titolo": "Gestione Eccezioni",
          "descrizione": "Se una corsa deve essere sospesa (es. festività, guasto), utilizza la sezione Eccezioni per gestire sospensioni temporanee senza eliminare la corsa."
        },
        {
          "numero": 9,
          "titolo": "Monitoraggio Ordini e Dati Contabili",
          "descrizione": "Controlla gli ordini ricevuti nella sezione Ordini. Per i dati contabili e il venduto, accedi alla Sezione Contabile con le credenziali dedicate."
        }
      ]
    },
    {
      "tipo": "avviso",
      "stile": "success",
      "testo": "<b>Configurazione completata?</b> Consulta le sezioni della guida per approfondire ogni passaggio: ogni sezione del menu laterale corrisponde a una fase del processo."
    }
  ],
  "sottosezioni": []
},
  "home": {
  "id": "home",
  "titolo": "Home",
  "aggiornato": "2026-03-03",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "paragrafo",
      "testo": "Benvenuti nella <b>Guida Operativa ITINERIS</b>! Questo manuale supporta i Consorziati COTRAP nella gestione delle linee e corse su Itineris e nel controllo contabile del venduto."
    },
    {
      "tipo": "avviso",
      "stile": "info",
      "testo": "Utilizza il <b>menu laterale</b> per navigare tra le sezioni oppure la <b>barra di ricerca</b> in alto per trovare rapidamente un argomento."
    },
    {
      "tipo": "paragrafo",
      "testo": "<b>Sezioni principali della guida:</b>"
    },
    {
      "tipo": "cards",
      "items": [
        {
          "icona": "🔧",
          "titolo": "Risolvi un problema",
          "descrizione": "Parti dal sintomo: i controlli da fare, nell'ordine giusto, quando una corsa non compare, un prezzo non torna o un cliente ha un problema.",
          "link": "diagnostica"
        },
        {
          "icona": "💼",
          "titolo": "Profilo Commerciale",
          "descrizione": "Pre-requisiti, iter creazione linea, configurazione tariffari, calendari, frequenze, utenti app ed emissione titoli gratuiti.",
          "link": "profilo-commerciale"
        },
        {
          "icona": "🚌",
          "titolo": "Gestione Movimento",
          "descrizione": "Codici contabili, poli, linee, template, corse, note e titoli di viaggio: il cuore operativo.",
          "link": "gestione-movimento"
        },
        {
          "icona": "⚠️",
          "titolo": "Eccezioni",
          "descrizione": "Eccezioni di movimento, eccezioni tariffarie biglietti e abbonamenti, eccezioni chilometriche e controlli tariffari.",
          "link": "eccezioni"
        },
        {
          "icona": "🧾",
          "titolo": "Ordini",
          "descrizione": "Consultazione di biglietti e abbonamenti venduti, stati occupazionali delle corse, stato dei controlli a bordo e statistiche dei biglietti.",
          "link": "ordini"
        },
        {
          "icona": "📤",
          "titolo": "Esportazioni",
          "descrizione": "Download dei file generati dalle ricerche in formato xls e txt.",
          "link": "esportazioni"
        },
        {
          "icona": "📊",
          "titolo": "Sezione Contabile",
          "descrizione": "Accesso contabile separato, ordini, dati contabili, biglietti, abbonamenti e statistiche venduto.",
          "link": "sezione-contabile"
        },
        {
          "icona": "🎫",
          "titolo": "Emetti Titolo di Viaggio",
          "descrizione": "Emissione gratuita di biglietti e abbonamenti dal profilo commerciale, tramite il Portale Clienti.",
          "link": "emetti-titolo-viaggio"
        },
        {
          "icona": "♿",
          "titolo": "CS Invalidi",
          "descrizione": "I biglietti di corsa semplice per invalidi: le sei categorie, l'attivazione del titolo e i filtri dedicati.",
          "link": "cs-invalidi"
        },
        {
          "icona": "🚀",
          "titolo": "Guida Veloce",
          "descrizione": "Panoramica rapida dei passaggi fondamentali in sequenza: dal primo accesso alla pubblicazione delle corse.",
          "link": "guida-veloce"
        },
        {
          "icona": "❓",
          "titolo": "Domande e Risposte",
          "descrizione": "Risposte rapide alle domande più frequenti, organizzate per argomento.",
          "link": "faq"
        }
      ]
    },
    {
      "tipo": "avviso",
      "stile": "success",
      "testo": "<b>Primo accesso?</b> Consulta la <a href=\"#guida-veloce\">Guida Veloce</a> per una panoramica rapida dei passaggi fondamentali in ordine sequenziale."
    }
  ],
  "sottosezioni": [
    {
      "id": "accesso-portale",
      "titolo": "Accesso al Portale",
      "aggiornato": "2026-03-03",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "L'accesso al portale Itineris avviene tramite il link <a href=\"https://itinerisadminpanel.azurewebsites.net/\" target=\"_blank\" rel=\"noopener noreferrer\">Portale Itineris</a> (consigliamo di salvarlo tra i preferiti del browser). Per accedere sono necessarie le credenziali (ID utente e password) fornite dall'Amministratore COTRAP al momento della creazione dell'account. In caso di password dimenticata, è possibile recuperarla tramite il tasto <b>\"Recupero password\"</b> inserendo l'email di recupero comunicata preventivamente all'amministratore."
        },
        {
          "tipo": "immagine",
          "src": "Immagine03.png",
          "alt": "Schermata accesso ITINERIS",
          "didascalia": "Schermata di login al portale Itineris"
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione:</b> saranno forniti al consorziato due account: uno relativo alla <b>sezione commerciale</b> ed uno relativo alla <b>sezione contabile</b>. Non utilizzare le stesse credenziali per entrambi."
        },
        {
          "tipo": "paragrafo",
          "testo": "Una volta effettuato l'accesso sarà visualizzata la pagina principale. In <b>basso a sinistra</b> è sempre visibile l'<b>utente</b> con cui si è entrati, con l'icona di logout. Nel pannello commerciale l'<b>azienda</b> su cui si sta operando è indicata nel pulsante in <b>alto a destra</b>. In alto sono presenti anche il pulsante <b>ASSISTENZA</b> e la campanella delle notifiche, che segnala le esportazioni completate."
        },
        {
          "tipo": "immagine",
          "src": "Immagine03.01.png",
          "alt": "Dashboard ITINERIS",
          "didascalia": "Dashboard principale dopo il login"
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Se il tuo profilo gestisce più aziende:</b> in Itineris \"azienda\" indica un'<b>area di lavoro</b>, non necessariamente una società diversa. La stessa società può averne più di una (per esempio una sede regionale e un gruppo provinciale, oppure le linee urbane separate da quelle extraurbane). <b>Prima di operare verifica sempre quale azienda è selezionata in alto a destra</b>: linee, corse e titoli che vedi sono solo quelli di quell'area."
        }
      ]
    }
  ]
},
  "introduzione": {
  "id": "introduzione",
  "titolo": "Introduzione",
  "aggiornato": "2026-03-04",
  "nuovo": false,
  "contenuto": [],
  "sottosezioni": [
    {
      "id": "obiettivo-del-documento",
      "titolo": "Obiettivo del Documento",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Questo manuale ha lo scopo di guidare i Consorziati nella creazione di una linea che sarà poi vendibile sul portale di vendita <a href=\"https://www.cotrap.it\" target=\"_blank\">COTRAP</a> e nel conseguente controllo contabile e amministrativo del venduto."
        }
      ]
    },
    {
      "id": "sintesi-del-documento",
      "titolo": "Sintesi del Documento",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Il documento descrive le funzionalità del software Itineris, finalizzate alla gestione delle linee, corse e bigliettazione e delle interazioni con il portale di vendita <a href=\"https://www.cotrap.it\" target=\"_blank\">COTRAP</a> e l'app clienti. Sono state redatte due macro-sezioni distinte: una dedicata al <b>profilo commerciale</b> e una al <b>profilo contabile/amministrativo</b>."
        },
        {
          "tipo": "paragrafo",
          "testo": "In particolare:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Configurazione e inserimento Linee, Template e Corse</b>",
            "Gestione eccezioni tariffarie, di movimento e chilometriche",
            "Esportazione dati",
            "Controllo contabile e statistiche venduto"
          ]
        }
      ]
    },
    {
      "id": "destinatari-del-manuale",
      "titolo": "Destinatari",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Il manuale è destinato ai <b>Consorziati COTRAP</b> che devono gestire il caricamento di linee e corse sul software Itineris e controllare il venduto tramite il profilo contabile."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Sono previsti <b>due account separati</b> per ciascun consorziato: uno per il <b>profilo commerciale</b> (gestione operativa) e uno per il <b>profilo contabile</b> (reportistica e dati contabili). Le credenziali vengono fornite dall'Amministratore COTRAP."
        }
      ]
    },
    {
      "id": "struttura-del-manuale",
      "titolo": "Struttura del Manuale",
      "aggiornato": "2026-03-04",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "paragrafo",
          "testo": "Il manuale è suddiviso nelle seguenti sezioni principali, accessibili dal menu laterale:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Profilo Commerciale:</b> prerequisiti e dati del consorziato",
            "<b>Configurazione:</b> tariffari regionali, calendari scolastici, frequenze corse e utenti app controllo",
            "<b>Gestione Movimento:</b> codici contabili, poli, linee, template, corse e titoli di viaggio",
            "<b>Eccezioni:</b> sospensioni di corse/fermate, variazioni tariffarie e chilometriche",
            "<b>Ordini:</b> monitoraggio ordini, biglietti, abbonamenti e stati occupazionali",
            "<b>Esportazioni:</b> archivio centralizzato dei file generati dal portale",
            "<b>Sezione Contabile:</b> ordini, dati contabili, biglietti, abbonamenti e statistiche",
            "<b>Emetti Titolo di Viaggio:</b> emissione gratuita di biglietti e abbonamenti dal profilo commerciale"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "success",
          "testo": "<b>Primo accesso?</b> Consulta la <b>Guida Veloce</b> nel menu per una panoramica rapida dei passaggi essenziali prima di procedere con le sezioni di dettaglio."
        }
      ]
    }
  ]
},
  "menu": {
  "titolo": "GUIDA ITINERIS",
  "versione": "2.16",
  "ultimo_aggiornamento": "2026-09-09",
  "voci": [
    {
      "id": "home",
      "label": "Home",
      "icona": "🏠",
      "tipo": "normale"
    },
    {
      "id": "_sep_guida",
      "label": "GUIDA OPERATIVA",
      "tipo": "separatore"
    },
    {
      "id": "profilo-commerciale",
      "label": "Profilo Commerciale",
      "icona": "💼",
      "tipo": "normale"
    },
    {
      "id": "configurazione",
      "label": "Configurazione",
      "icona": "⚙️",
      "tipo": "normale"
    },
    {
      "id": "gestione-movimento",
      "label": "Gestione Movimento",
      "icona": "🚌",
      "tipo": "normale"
    },
    {
      "id": "eccezioni",
      "label": "Eccezioni",
      "icona": "⚠️",
      "tipo": "normale"
    },
    {
      "id": "ordini",
      "label": "Ordini",
      "icona": "🧾",
      "tipo": "normale"
    },
    {
      "id": "esportazioni",
      "label": "Esportazioni",
      "icona": "📤",
      "tipo": "normale"
    },
    {
      "id": "sezione-contabile",
      "label": "Sezione Contabile",
      "icona": "📊",
      "tipo": "normale"
    },
    {
      "id": "emetti-titolo-viaggio",
      "label": "Emetti Titolo di Viaggio",
      "icona": "🎫",
      "tipo": "normale"
    },
    {
      "id": "cs-invalidi",
      "label": "CS Invalidi",
      "icona": "♿",
      "tipo": "normale"
    },
    {
      "id": "_sep_extra",
      "label": "SEZIONI EXTRA",
      "tipo": "separatore"
    },
    {
      "id": "diagnostica",
      "label": "Risolvi un problema",
      "icona": "🔧",
      "tipo": "speciale"
    },
    {
      "id": "faq",
      "label": "Domande e Risposte",
      "icona": "❓",
      "tipo": "speciale"
    },
    {
      "id": "guida-veloce",
      "label": "Guida Veloce",
      "icona": "🚀",
      "tipo": "speciale"
    },
    {
      "id": "changelog",
      "label": "Novità",
      "icona": "🆕",
      "tipo": "speciale"
    }
  ]
},
  "ordini": {
  "id": "ordini",
  "titolo": "Ordini",
  "aggiornato": "2026-09-09",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "tldr",
      "items": [
        "Qui si <b>consulta</b> quello che è stato venduto: biglietti, abbonamenti, occupazione delle corse e controlli fatti a bordo.",
        "Cinque voci sempre presenti: <b>Biglietti</b>, <b>Abbonamenti</b>, <b>Stati occupazionali corse</b>, <b>Stato Controlli</b>, <b>Statistiche Biglietti Venduti / Controllati</b>. Alcuni profili vedono anche <b>Statistiche linee</b> e <b>Statistiche corse CS</b>.",
        "<b>Non è tutto in sola lettura:</b> sugli abbonamenti si inserisce un controllo, si consultano i controlli già registrati, si blocca il titolo e si aggiungono o scalano corse; sui biglietti si può inserire un controllo.",
        "Ogni ricerca si può esportare: il file viene preparato e si recupera in <b>Esportazioni</b>.",
        "Le ricerche accettano un intervallo di date di <b>massimo 40 giorni</b>."
      ]
    },
    {
      "tipo": "immagine",
      "src": "Immagine10.png",
      "alt": "Menu Ordini",
      "didascalia": "Accesso alla sezione Ordini"
    },
    {
      "tipo": "immagine",
      "src": "Immagine11.png",
      "alt": "Sottomenu Ordini",
      "didascalia": "Opzioni di ricerca disponibili"
    },
    {
      "tipo": "avviso",
      "stile": "info",
      "testo": "<b>Se nel tuo menu compaiono anche Statistiche linee e Statistiche corse CS:</b> sono due riepiloghi del venduto che non tutti i profili hanno abilitati. <b>Statistiche linee</b> conta i titoli <b>per data di emissione</b>, cioè in base a quando sono stati acquistati; <b>Statistiche corse CS</b> conta i biglietti di corsa semplice <b>per data di partenza</b>, cioè in base a quando si viaggia. È normale che i due numeri non coincidano: rispondono a due domande diverse. Entrambe si filtrano per linea, corsa, comune e frazione di partenza e di arrivo, tipologia di pagamento e titolo di viaggio, e si scaricano con <b>Esporta</b>."
    }
  ],
  "sottosezioni": [
    {
      "id": "biglietti",
      "titolo": "Biglietti",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Cerca biglietti per data acquisto, data viaggio, linea, corsa, codice biglietto, acquirente o <b>tessera MyCard</b>.",
            "Ordine e Biglietto sono distinti: un ordine puo' contenere piu' biglietti (es. 1234A, 1234B). Usa il <b>Codice Biglietto</b> completo per trovare un titolo specifico.",
            "Tipo pagamento <b>Gratuito</b> = titoli emessi dal profilo commerciale. Esporta il risultato in .xls da Esportazioni."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine12.png",
          "alt": "Menu Biglietti",
          "didascalia": "Accesso alla ricerca biglietti"
        },
        {
          "tipo": "paragrafo",
          "testo": "Questa sotto-funzione permette di effettuare una ricerca dettagliata dei singoli titoli di viaggio."
        },
        {
          "tipo": "immagine",
          "src": "Immagine13.png",
          "alt": "Form Ricerca Biglietti",
          "didascalia": "Maschera ricerca biglietti"
        },
        {
          "tipo": "paragrafo",
          "testo": "Inserire i parametri di ricerca desiderati e cliccare su <b>\"Applica\"</b>."
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Data Inizio Ordine / Data Fine Ordine:</b> filtra per data di acquisto del biglietto",
            "<b>Data Inizio Partenza / Data Fine Partenza:</b> filtra per la data del viaggio, indipendentemente da quando è stato acquistato",
            "<b>Azienda:</b> campo non modificabile — il sistema identifica automaticamente il consorziato loggato",
            "<b>Linea, Corsa, Comune e Frazione di partenza, Comune e Frazione di arrivo:</b> filtri per restringere la ricerca a un percorso preciso",
            "<b>Tipo di pagamento:</b> <b>Online</b> = biglietti acquistati con carta di credito dal portale web o dall'app; <b>Credito</b> = biglietti acquistati usando il saldo ricariche dell'app (funzione disponibile solo su app); <b>Gratuito</b> = titoli emessi gratuitamente da profilo commerciale",
            "<b>Acquirente:</b> ricerca per nome e cognome o indirizzo email del cliente",
            "<b>N° Ordine:</b> un ordine può contenere più biglietti (es. andata + ritorno). Ogni biglietto è identificato dal numero ordine + una lettera finale (es. 1234A, 1234B)",
            "<b>Codice Biglietto:</b> inserire il codice completo inclusa la lettera finale (es. 1234A). È il modo più preciso per trovare un singolo biglietto",
            "<b>Titolo di viaggio:</b> filtra per tipologia di biglietto (CS, CSI, CSIA, CSU, CSUI, CSUIA)",
            "<b>Categoria calcolo sconto:</b> filtra per la categoria tessera applicata al biglietto",
            "<b>Numero tessera:</b> filtra per numero tessera MyCard del passeggero — utile per trovare tutti i biglietti invalidi di un utente specifico",
            "<b>Codice fiscale:</b> filtra per codice fiscale del passeggero",
            "<b>FID:</b> identificativo univoco della tessera nel sistema",
            "<b>Stato pagamento:</b> Pagato, Attesa Pagamento, Annullato, Rimborsato e gli altri stati dell'ordine",
            "<b>Canale:</b> App o Portale Web",
            "<b>Vidimato a bordo:</b> per distinguere i titoli effettivamente convalidati",
            "<b>Stato Biglietto</b> e <b>Tipo Anomalia:</b> per isolare i titoli con problemi",
            "<b>Con Cambio:</b> per trovare i viaggi acquistati con cambio di linea",
            "<b>Azione Controllore:</b> l'esito registrato dal controllo a bordo",
            "<b>Progressivo biglietto:</b> non utilizzare — è un identificativo numerico interno non utile per le ricerche operative"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Intervallo massimo 40 giorni:</b> se le date coprono un periodo più lungo la ricerca non parte e compare il messaggio <i>«Specificare un intervallo di massimo 40gg»</i>. Per un periodo più ampio si fanno più ricerche, oppure si esporta a blocchi."
        },
        {
          "tipo": "paragrafo",
          "testo": "Nella colonna <b>Operazioni</b> di ogni riga ci sono due comandi:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Inserisci Controllo</b> — registra un controllo sul biglietto dall'account commerciale, con un commento",
            "<b>Dettaglio</b> — apre la scheda completa del titolo"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Nel dettaglio del singolo biglietto sono ora visibili anche: <b>numero tessera</b>, <b>codice fiscale</b>, <b>FID</b> e <b>fattore di sconto</b> applicato. Questi dati sono presenti anche nell'esportazione Excel."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "È possibile esportare i risultati della ricerca cliccando su <b>\"Esporta\"</b>: viene generato un file <b>.xls</b> con tutti i dettagli dei biglietti trovati, recuperabile poi nella sezione Esportazioni. Il campo <b>\"Emesso da Admin\"</b> identifica i titoli emessi gratuitamente da profilo commerciale."
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>Inviare una comunicazione agli utenti</b>"
        },
        {
          "tipo": "paragrafo",
          "testo": "Nella pagina Biglietti, accanto al pulsante <b>Filtri</b>, c'è l'icona <b>Invia notifica ad Utenti</b>. Apre la maschera <b>Invia notifica a clienti</b>, con cui si comunica direttamente con l'utenza."
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-broadcast-1.png",
          "alt": "Il pulsante di invio notifica nella pagina Biglietti",
          "didascalia": "Il pulsante <b>Invia notifica ad Utenti</b>, accanto a <b>Filtri</b>"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Oggetto</b> — il titolo della comunicazione",
            "<b>Testo del messaggio</b> — il corpo dell'avviso. Scegliendo la notifica broadcast l'etichetta del campo diventa <i>Testo del Messaggio max 200 caratteri</i>: è il limite dell'avviso che arriva sull'app",
            "<b>Url</b> — indirizzo facoltativo da collegare alla notifica",
            "<b>Tipo Notifica</b> — <b>Email</b>, <b>Notifica App</b>, <b>Notifica App Broadcast</b>, <b>Tutte Le Piattaforme</b>"
          ]
        },
        {
          "tipo": "immagine",
          "src": "aggiornamento-broadcast-2.png",
          "alt": "La maschera Invia notifica a clienti con la tendina Tipo Notifica aperta",
          "didascalia": "La maschera di invio, con le quattro tipologie del campo <b>Tipo Notifica</b>"
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Novità — Notifica App Broadcast:</b> questa tipologia manda l'avviso a <b>tutti gli utenti che hanno installato l'app COTRAP</b>, non solo ai propri clienti. È pensata per le comunicazioni a livello consortile: <b>concordala sempre con l'Amministratore COTRAP</b> prima di usarla."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Prima dell’invio:</b> verifica tipo di notifica, destinatari, oggetto e testo. Non usare l’invio come prova. Il pulsante <b>Chiudi</b> permette di uscire dalla maschera senza inviare."
        }
      ]
    },
    {
      "id": "abbonamenti",
      "titolo": "Abbonamenti",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Cerca abbonamenti per data emissione, validita', n. tessera, tipologia e metodo di pagamento.",
            "Da qui puoi: inserire un controllo manuale, rivedere i controlli registrati, bloccare un abbonamento in caso di frode, aggiungere o scalare corse.",
            "Usa il filtro <b>Gratuito</b> nel metodo di pagamento per trovare gli abbonamenti emessi dal profilo commerciale."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Con questa funzione è possibile, impostando i filtri di ricerca, verificare gli abbonamenti emessi."
        },
        {
          "tipo": "lista",
          "items": [
            "Ricerca per <b>data di emissione</b>",
            "Ricerca per <b>data di validità</b>",
            "Ricerca per <b>n. di tessera</b>",
            "Ricerca per <b>tipologia di abbonamento</b>",
            "Ricerca per <b>metodo di pagamento</b>, incluso il filtro <b>Gratuito</b> per risalire agli abbonamenti emessi da profilo commerciale"
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "È inoltre possibile verificare quante volte è stato vidimato a bordo un abbonamento, quante corse residue siano associate, e inserire un controllo amministrativo (nel caso il controllore non abbia modo di inserire il dato del controllo oppure non funzioni la macchinetta di bordo)."
        },
        {
          "tipo": "paragrafo",
          "testo": "Le <b>operazioni</b> disponibili per ogni abbonamento sono:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Inserisci Controllo</b> — operazione per registrare un controllo amministrativo; non è una semplice consultazione",
            "<b>Dettaglio Controllo</b> — quando presente, apre i controlli registrati",
            "<b>Dettaglio</b> — apre la scheda completa dell’abbonamento",
            "<b>Blocca</b> — modifica l’utilizzabilità del titolo. Usarlo per un caso accertato secondo la procedura aziendale; per l’eventuale rimozione del blocco rivolgersi all’Amministratore",
            "<b>Modifica corse</b> — permette di rettificare il saldo. Prima verificare controlli, residuo, motivazione e autorizzazione aziendale; dopo confrontare il saldo risultante"
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "<b>Cosa si legge nel dettaglio di un abbonamento</b>"
        },
        {
          "tipo": "box-nota",
          "titolo": "I campi che servono in assistenza",
          "contenuto": [
            "<b>Importo Pagato</b> e <b>Importo Da Tariffario</b>: confrontarli insieme a categoria sconto, eccezioni ed emissione da Admin. La differenza non dimostra da sola l’applicazione di uno sconto",
            "<b>Km Tariffario</b>: i chilometri con cui è stato calcolato il prezzo. Se il prezzo non torna, si controlla prima questo",
            "<b>Eccezione Tariffaria</b>: se valorizzato, identifica l’eccezione registrata per il titolo; confrontarla con la configurazione valida alla data di emissione",
            "<b>Raggruppamento Tariffario</b>, <b>Categoria Calcolo Sconto</b>, <b>Numero Corse</b>, <b>Validità</b>, <b>Urbano</b>",
            "<b>Data Blocco da Admin</b>: valorizzata solo se l'abbonamento è stato bloccato",
            "<b>Emesso Da Admin Panel</b> e <b>Note emissione</b>: dicono se il titolo è stato emesso gratuitamente dal profilo commerciale e con quale motivazione"
          ]
        }
      ]
    },
    {
      "id": "stati-occupazionali-corse",
      "titolo": "Stati Occupazionali Corse",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Monitora i posti occupati per corsa e data — <b>solo biglietti online</b>, non include il venduto fisico a bordo o in agenzia.",
            "Il mezzo reale puo' essere piu' pieno di quanto indicato: considera questo dato come occupazione online, non totale.",
            "Filtra per linea, corsa, data e clicca Applica. Esportabile in .xls."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine14.png",
          "alt": "Menu Stati Occupazionali",
          "didascalia": "Accesso agli stati occupazionali"
        },
        {
          "tipo": "paragrafo",
          "testo": "È possibile monitorare lo stato di occupazione dei mezzi in base alle corse ricercate."
        },
        {
          "tipo": "immagine",
          "src": "Immagine15.png",
          "alt": "Form Stati Occupazionali",
          "didascalia": "Maschera ricerca stati occupazionali"
        },
        {
          "tipo": "paragrafo",
          "testo": "Inserire i parametri di ricerca (linea, corsa, data) e cliccare su <b>\"Applica\"</b>."
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione:</b> la percentuale di occupazione mostrata è riferita <b>esclusivamente ai biglietti acquistati online</b> (portale web e app). Non include il venduto cartaceo (biglietti emessi a bordo o in agenzia). Il mezzo reale può quindi essere più pieno di quanto indicato."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "È possibile esportare i risultati in formato .xls cliccando su <b>\"Esporta\"</b>."
        }
      ]
    },
    {
      "id": "stato-controlli",
      "titolo": "Stato Controlli",
      "aggiornato": "2026-03-03",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Mostra i controlli effettuati a bordo tramite l'<b>app Itineris</b> su biglietti online da autisti e controllori.",
            "Utile per verificare che i controllori operino correttamente e per individuare anomalie (es. biglietti non validi accettati).",
            "Filtra per data di controllo e per singolo autista o controllore."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine16.png",
          "alt": "Menu Stato Controlli",
          "didascalia": "Accesso allo stato controlli"
        },
        {
          "tipo": "paragrafo",
          "testo": "Con questa funzione è possibile verificare i controlli effettuati a bordo sui biglietti online da parte degli autisti/controllori tramite l'app."
        },
        {
          "tipo": "immagine",
          "src": "Immagine17.png",
          "alt": "Form Stato Controlli",
          "didascalia": "Maschera ricerca stato controlli"
        },
        {
          "tipo": "paragrafo",
          "testo": "Parametri di ricerca disponibili:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Data di controllo</b>: filtra per il giorno in cui è stato effettuato il controllo a bordo",
            "<b>Utente</b>: permette di filtrare per il singolo controllore/autista specifico che ha effettuato il controllo"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Questa sezione è utile per verificare che i controllori abbiano effettivamente eseguito i controlli e per monitorare eventuali anomalie (biglietti non validi accettati a bordo)."
        }
      ]
    },
    {
      "id": "statistiche-biglietti",
      "titolo": "Statistiche Biglietti Venduti / Controllati",
      "aggiornato": "2026-03-03",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Riepilogo aggregato per corsa: biglietti venduti online, controllati a bordo e non validi al momento del controllo.",
            "Dati di sintesi per corsa — per i singoli titoli vai alla sezione <b>Biglietti</b>.",
            "Esportabile in .xls per analisi esterne."
          ]
        },
        {
          "tipo": "immagine",
          "src": "Immagine18.png",
          "alt": "Menu Statistiche",
          "didascalia": "Accesso alle statistiche biglietti"
        },
        {
          "tipo": "paragrafo",
          "testo": "Questa sotto-funzione permette di ottenere un riepilogo statistico per singola corsa su:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Biglietti venduti online</b>: quanti biglietti sono stati acquistati dal portale web o dall'app per quella corsa",
            "<b>Biglietti controllati</b>: quanti biglietti sono stati effettivamente validati a bordo dal controllore tramite l'app",
            "<b>Biglietti non validi</b>: biglietti che al momento del controllo risultavano non validi (es. già utilizzati, scaduti, errata tratta)"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Anche in questo caso è possibile esportare i dati in formato .xls per analisi esterne."
        },
        {
          "tipo": "immagine",
          "src": "Immagine19.png",
          "alt": "Form Statistiche",
          "didascalia": "Maschera statistiche biglietti"
        }
      ]
    }
  ]
},
  "profilo-commerciale": {
  "id": "profilo-commerciale",
  "titolo": "Profilo Commerciale",
  "aggiornato": "2026-03-03",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "paragrafo",
      "testo": "Il profilo commerciale gestisce l’offerta in <b>Admin Panel Itineris</b>. Configurazione, movimento, eccezioni e titoli sono collegati: un dato a monte può cambiare orari, disponibilità o prezzi. Ordini ed esportazioni permettono di controllare il risultato."
    }
  ],
  "sottosezioni": [
    {
      "id": "pre-requisiti",
      "titolo": "Pre-requisiti",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Prima di tutto: controlla i dati su <b>Tecbus</b> (polimetriche, tariffe, codici contabili) per garantire uniformita' tra vendita online e macchinette di bordo.",
            "Servono: codici contabili dei poli, codice linea, descrizione, competenza (Regionale / Provinciale / Comunale)."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "È necessario procedere con alcune azioni da fare preventivamente rispetto alla creazione di una linea su Itineris. Queste operazioni sono necessarie per garantire uniformità di dati tra Itineris e Tecbus."
        },
        {
          "tipo": "lista",
          "items": [
            "Dal sito Tecbus si verificano polimetriche attive, e tariffe per uniformare vendita online con macchinetta di bordo.",
            "Dal sito Tecbus recuperare codici contabili dei poli, codice linea, descrizione linea, competenza (regionale, provinciale ecc…)"
          ]
        }
      ]
    },
    {
      "id": "creazione-linea",
      "titolo": "Creazione Linea",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Il flusso completo per attivare una linea online: <b>Configurazione → Gestione Movimento → Eccezioni → Ordini → Esportazioni</b>.",
            "Nella prima configurazione segui l’ordine delle dipendenze; per una modifica successiva verifica anche gli elementi collegati."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Per inserire una linea vendibile su <a href=\"https://www.cotrap.it\" target=\"_blank\">COTRAP</a>, seguire in ordine le sezioni del manuale:"
        },
        {
          "tipo": "lista-numerata",
          "items": [
            "<b>Configurazione</b> — consultare i parametri regionali gestiti da COTRAP (tariffari e calendari scolastici) e inserire le <b>frequenze</b> delle proprie corse. Qui si registrano anche gli <b>utenti dell'app di controllo</b>.",
            "<b>Gestione Movimento</b> — è la sezione dove si costruisce l'esercizio: codici contabili, poli (fermate), linee con i template di percorso, corse con gli orari, note per i clienti e titoli di viaggio.",
            "<b>Pubblicare le corse</b> — una corsa creata non è ancora vendibile: va pubblicata, altrimenti non compare sullo shop.",
            "<b>Eccezioni</b> — gestire le variazioni straordinarie: sospensioni di corse o fermate, variazioni tariffarie e chilometriche, più gli strumenti di controllo delle tariffe.",
            "<b>Ordini</b> — consultare biglietti e abbonamenti venduti, l'occupazione delle corse e i controlli effettuati a bordo.",
            "<b>Esportazioni</b> — scaricare i file generati dalle ricerche fatte nelle sezioni precedenti."
          ]
        }
      ]
    }
  ]
},
  "sezione-contabile": {
  "id": "sezione-contabile",
  "titolo": "Sezione Contabile",
  "aggiornato": "2026-03-03",
  "nuovo": false,
  "contenuto": [
    {
      "tipo": "tldr",
      "items": [
        "Account separato da quello commerciale: credenziali diverse, fornite da COTRAP.",
        "Serve a consultare ordini e titoli venduti, a seguire il <b>credito</b> degli utenti e a estrarre i dati contabili da portare nel gestionale.",
        "È un ambiente di sola consultazione: qui non si modifica nulla dell'esercizio.",
        "Prima di operare controlla di essere nell'account giusto: il nome dell'utente è indicato in basso a sinistra."
      ]
    },
    {
      "tipo": "paragrafo",
      "testo": "La Sezione Contabile è accessibile tramite credenziali <b>separate</b> rispetto al profilo commerciale. Inserire nella pagina di login l'ID utente e la password dedicati all'account contabile, forniti dall'Amministratore COTRAP."
    },
    {
      "tipo": "avviso",
      "stile": "warning",
      "testo": "<b>Attenzione:</b> verificare sempre di essere nell'account corretto controllando l'indicazione dell'utente in <b>basso a sinistra</b>. Se si è accidentalmente nell'account commerciale, effettuare il logout e accedere con le credenziali contabili."
    },
    {
      "tipo": "immagine",
      "src": "Immagine1.png",
      "alt": "Dashboard Contabile",
      "didascalia": "Dashboard sezione contabile"
    },
    {
      "tipo": "paragrafo",
      "testo": "Questo ambiente serve per ricercare biglietti, ordini (che possono includere anche più biglietti), estrapolare dati contabili."
    },
    {
      "tipo": "paragrafo",
      "testo": "Le funzioni di questo ambiente sono: <b>ORDINI</b>, <b>CREDITO</b> ed <b>ESPORTAZIONI</b>."
    },
    {
      "tipo": "lista",
      "items": [
        "In <b>ORDINI</b> è possibile effettuare le ricerche relative a ordini, dati contabili, biglietti, abbonamenti, spese abbonamenti agenzie e statistiche venduto",
        "In <b>CREDITO</b> si consultano il credito residuo e i movimenti di ricarica degli utenti",
        "In <b>ESPORTAZIONI</b> si visionano e si scaricano i file generati dalle ricerche precedenti"
      ]
    },
    {
      "tipo": "immagine",
      "src": "Immagine2.png",
      "alt": "Menu Ordini Contabile",
      "didascalia": "Menu Ordini nella sezione contabile"
    },
    {
      "tipo": "immagine",
      "src": "Immagine3.png",
      "alt": "Menu Esportazioni Contabile",
      "didascalia": "Menu Esportazioni nella sezione contabile"
    }
  ],
  "sottosezioni": [
    {
      "id": "ordini-contabile",
      "titolo": "Ordini",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Cerca ordini per data, numero progressivo, tipo pagamento, stato e acquirente.",
            "Un ordine puo' contenere piu' biglietti. Usa <b>Codice Biglietto</b> per trovare un titolo specifico.",
            "Usa il filtro <b>Gratuito</b> per risalire ai titoli emessi da profilo commerciale."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Ordini ci mostra tutti gli ordini (alcuni dei quali contenenti più biglietti), acquistati dal portale web, dall'app con carta di credito e con il credito e le prenotazioni con abbonamenti."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Ricordiamo che sull'app l'utente può registrare la propria carta di credito, effettuare una ricarica sul proprio account ed utilizzare il credito per l'acquisto dei titoli di viaggio."
        },
        {
          "tipo": "paragrafo",
          "testo": "È possibile attraverso i filtri effettuare delle ricerche dedicate."
        },
        {
          "tipo": "immagine",
          "src": "Immagine4.png",
          "alt": "Lista Ordini",
          "didascalia": "Elenco ordini"
        },
        {
          "tipo": "paragrafo",
          "testo": "Fare click sul pulsante \"Filtri\""
        },
        {
          "tipo": "immagine",
          "src": "Immagine5.png",
          "alt": "Filtri Ordini",
          "didascalia": "Pannello filtri ricerca ordini"
        },
        {
          "tipo": "paragrafo",
          "testo": "Per effettuare la ricerca bisogna inserire i seguenti parametri, in base a ciò che si vuole ricercare:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Data Inizio</b>",
            "<b>Data Fine</b>",
            "<b>Prog:</b> numero dell'ordine o biglietto",
            "<b>Tipo pagamento:</b> Tutti/Online/Abbonamento/Credito/<b>Gratuito</b> (per risalire ai titoli emessi da profilo commerciale)",
            "<b>Stato Pagamento:</b> Tutte/Attesa Pagamento/Pagato/Non Emesso/Non Pagato/Annullato/Bloccato/Attesa Rimborso/Rimborsato/Rimborsato Credito",
            "<b>Canale:</b> Tutti/Non Definito (utilizzato solo per il periodo di transizione dalla versione iniziale a quella aggiornata)/App/Portale Web",
            "<b>Acquirente:</b> si può inserire il nominativo dell'utente o l'indirizzo email",
            "<b>Codice Biglietto</b>",
            "<b>N. Tessera</b> (nel caso degli abbonati)"
          ]
        },
        {
          "tipo": "icona-azione",
          "icona": "icona13.png",
          "testo": "Dopo aver inserito i parametri si deve cliccare sul tasto di ricerca"
        },
        {
          "tipo": "icona-azione",
          "icona": "icona12.png",
          "testo": "Nel caso in cui si voglia esportare la ricerca è necessario cliccare sul tasto di download. Il file scaricato potrà poi essere recuperato nella funzione \"Esportazioni\"."
        }
      ]
    },
    {
      "id": "dati-contabili",
      "titolo": "Dati Contabili",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Esegui <b>due esportazioni separate</b>: una con Tipo pagamento <b>Online</b> e una con <b>Credito</b> — sono registrate in partite contabili distinte.",
            "<b>Esporta</b> = file .txt per software gestionali aziendali. <b>Esporta SEP</b> = file .xls per analisi manuale in Excel.",
            "Entrambi i file sono poi recuperabili nella sezione Esportazioni."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Con questa sotto-funzione è possibile recuperare i dati relativi al venduto. Questi dati potranno poi essere acquisiti e trasferiti sui software di gestione aziendale. Anche in questo caso è possibile applicare i filtri per effettuare la ricerca di interesse."
        },
        {
          "tipo": "paragrafo",
          "testo": "Per effettuare la ricerca bisogna inserire i seguenti parametri:"
        },
        {
          "tipo": "lista",
          "items": [
            "<b>Data Inizio</b>",
            "<b>Data Fine</b>",
            "<b>Azienda</b> (automaticamente viene riportata l'azienda consorziata)",
            "<b>Tipo pagamento:</b> Tutti/Online/Abbonamento/Credito/<b>Gratuito</b> (per risalire ai titoli emessi da profilo commerciale)",
            "<b>Stato Pagamento:</b> Tutte/Attesa Pagamento/Pagato/Non Emesso/Non Pagato/Annullato/Bloccato/Attesa Rimborso/Rimborsato/Rimborsato Credito",
            "<b>Canale:</b> Tutti/Non Definito/App/Portale Web",
            "<b>Acquirente</b>",
            "<b>Codice Biglietto</b>",
            "<b>N. Tessera</b>"
          ]
        },
        {
          "tipo": "icona-azione",
          "icona": "icona13.png",
          "testo": "Al termine si deve sempre cliccare sul tasto di ricerca"
        },
        {
          "tipo": "avviso",
          "stile": "warning",
          "testo": "<b>Attenzione — esportazioni obbligatoriamente separate:</b> Per ottenere il quadro completo del venduto da importare nel gestionale aziendale, è necessario effettuare <b>due esportazioni distinte</b>:<br>1. <b>Tipo pagamento: Online → Stato: Pagato → Tutti</b> — include tutti i biglietti acquistati con carta di credito<br>2. <b>Tipo pagamento: Credito → Stato: Pagato</b> — include tutti i biglietti acquistati con il saldo ricariche dell'app<br>I due tipi di pagamento sono registrati in partite contabili separate e non possono essere estratti con un'unica query."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Esporta vs Esporta SEP:</b> Il tasto <b>\"Esporta\"</b> genera un file <b>.txt</b> nel formato compatibile con i software gestionali aziendali. Il tasto <b>\"Esporta SEP\"</b> genera un file <b>.xls</b> (Excel) per visualizzazione e analisi manuale. Entrambi i file sono poi recuperabili nella sezione <b>Esportazioni</b>."
        }
      ]
    },
    {
      "id": "biglietti-contabile",
      "titolo": "Biglietti",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Ricerca dettagliata dei singoli biglietti con filtri aggiuntivi: Linea, Corsa, Comune di partenza, Frazione.",
            "Filtro <b>Gratuito</b> disponibile per risalire ai titoli emessi da profilo commerciale.",
            "Il tasto Esporta restituisce un file .xls con tutti i dettagli dei biglietti trovati."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Questa sotto-funzione permette di effettuare una ricerca dettagliata dei singoli titoli di viaggio."
        },
        {
          "tipo": "paragrafo",
          "testo": "In aggiunta rispetto ai precedenti parametri di ricerca ci sono Linea, Corsa, Comune di partenza, frazione. È disponibile anche il filtro <b>\"Gratuito\"</b> nel metodo di pagamento per risalire ai titoli emessi da profilo commerciale. Il tasto esporta restituisce un file .xls con tutti i dettagli dei biglietti ricercati."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Nel dettaglio di ogni titolo di viaggio, è presente il campo <b>\"Emesso da Admin\"</b> che identifica un titolo emesso gratuitamente da profilo commerciale."
        }
      ]
    },
    {
      "id": "abbonamenti-contabile",
      "titolo": "Abbonamenti",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Ricerca dettagliata dei singoli abbonamenti con filtro <b>Gratuito</b> per i titoli emessi da profilo commerciale.",
            "Il tasto Esporta restituisce un file .xls con i dettagli degli abbonamenti ricercati.",
            "Il campo <b>Emesso da Admin</b> nel dettaglio identifica i titoli emessi gratuitamente."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Questa sotto-funzione permette di effettuare una ricerca dettagliata dei singoli abbonamenti. È disponibile il filtro <b>Gratuito</b> nel metodo di pagamento per risalire ai titoli emessi da profilo commerciale. Il tasto esporta restituisce un file .xls con i dettagli degli abbonamenti ricercati."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Nel dettaglio di ogni abbonamento, è presente il campo <b>\"Emesso da Admin\"</b> che identifica un titolo emesso gratuitamente da profilo commerciale."
        }
      ]
    },
    {
      "id": "spese-abbonamenti-agenzie",
      "titolo": "Spese Abbonamenti Agenzie",
      "aggiornato": "2026-09-09",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Estrae i dati contabili delle <b>spese per abbonamenti sostenute tramite le agenzie</b>, per un intero anno.",
            "Si sceglie l'<b>anno contabile</b> e si preme <b>Esporta</b>: il file non parte subito, si recupera in <b>Esportazioni</b>.",
            "L'ultima esportazione richiesta compare sempre in cima all'elenco."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Questa funzione estrae dal portale i dati contabili relativi alle <b>spese abbonamenti agenzie</b> per un determinato anno. Il file generato può poi essere importato nei software di gestione aziendale."
        },
        {
          "tipo": "lista-numerata",
          "items": [
            "Accedere con le credenziali del <b>profilo contabile</b> (diverse da quelle commerciali)",
            "Dal menu, aprire <b>Ordini → Spese Abbonamenti Agenzie</b>",
            "Compilare il campo <b>Anno Contabile</b> con l'anno desiderato (es. 2025) e verificare gli altri filtri",
            "Cliccare su <b>Esporta</b> e attendere l'elaborazione senza chiudere la pagina",
            "Aprire <b>Esportazioni</b>: l'ultima richiesta è in cima all'elenco",
            "Cliccare sull'icona di download a destra della riga per scaricare il file"
          ]
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Come per tutte le altre esportazioni, il file <b>non viene scaricato subito</b>: viene preparato dal sistema e reso disponibile nella sezione Esportazioni, da cui resta scaricabile anche in seguito."
        }
      ]
    },
    {
      "id": "statistiche-mensili",
      "titolo": "Statistiche Mensili",
      "aggiornato": "2026-03-03",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Riepilogo aggregato del venduto <b>per mese</b> — visione d'insieme delle entrate mensili.",
            "I titoli emessi gratuitamente da profilo commerciale sono <b>esclusi</b> per non alterare i dati reali di fatturato."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Questa sotto-funzione fornisce un riepilogo del venduto aggregato <b>per mese</b>, utile per avere una visione d'insieme delle entrate mensili dell'azienda consorziata."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Le statistiche mensili <b>ignorano le transazioni relative ai titoli emessi gratuitamente</b> da profilo commerciale, per non alterare i dati reali di fatturato."
        }
      ]
    },
    {
      "id": "statistiche-linee",
      "titolo": "Statistiche Linee",
      "aggiornato": "2026-03-30",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Riepilogo del venduto <b>per singola linea</b> — utile per analizzare le performance di ciascuna tratta.",
            "La colonna <b>'Denominazione titolo di viaggio'</b> mostra ora il tipo di biglietto venduto (CS, CSI, CSIA ecc.) e l'importo scontato finale.",
            "I titoli emessi gratuitamente da profilo commerciale sono <b>esclusi</b> dai totali."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Questa sotto-funzione fornisce un riepilogo del venduto <b>per singola linea</b>, utile per analizzare le performance di ciascuna tratta."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "La colonna <b>'Denominazione titolo di viaggio'</b> riporta ora il nome del biglietto venduto (CS, CSI, CSIA, CSU ecc.) e l'<b>importo scontato finale</b> effettivamente incassato."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Esportazione aggiornata:</b> le colonne comuneId, frazioneId, lineaId e corsaId sono state sostituite con i valori leggibili (nome comune, frazione, linea e corsa), in linea con quanto mostrato sul sito biglietteria."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Anche le statistiche linee <b>ignorano i titoli emessi gratuitamente</b> da profilo commerciale."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "<b>Dove si trova:</b> la stessa voce compare anche nel menu <b>Ordini</b> del pannello commerciale, quando il profilo è abilitato a vederla. Il conteggio è <b>per data di emissione</b> del titolo, non per data di viaggio."
        }
      ]
    },
    {
      "id": "statistiche-venduto",
      "titolo": "Statistiche Venduto",
      "aggiornato": "2026-03-30",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Venduto totale per periodo selezionato — il file scaricato si importa nel gestionale aziendale.",
            "<b>Esporta</b> = file .txt per software gestionali. <b>Esporta XLS</b> = file .xls per Excel.",
            "Nuovo filtro <b>'Titolo di Viaggio'</b>: filtra per tipo di biglietto (CS, CSI ecc.) con fattore di sconto applicato."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Questa sotto-funzione è utilizzata per verificare il <b>venduto totale</b> per l'azienda consorziata nel periodo selezionato. I file scaricati sono trasferiti al sistema di gestione amministrativo aziendale."
        },
        {
          "tipo": "paragrafo",
          "testo": "Il tasto <b>Esporta</b> restituisce un file <b>.txt</b>, il tasto <b>Esporta XLS</b> restituisce un file <b>.xls</b>."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "È stato aggiunto il filtro <b>'Titolo di Viaggio'</b> per filtrare il venduto per tipologia (CS, CSI, CSIA ecc.). La tabella mostra il fattore di sconto applicato. <b>Nota:</b> il Titolo di Viaggio e il fattore di sconto sono presenti nel file <b>.xls</b> ma <b>non</b> nel file .txt."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Le statistiche mensili, statistiche linee, statistiche venduto e i dati contabili <b>ignorano le transazioni relative ai titoli emessi gratuitamente</b> da profilo commerciale."
        }
      ]
    },
    {
      "id": "esportazioni-contabile",
      "titolo": "Esportazioni",
      "aggiornato": "2026-02-23",
      "nuovo": false,
      "contenuto": [
        {
          "tipo": "tldr",
          "items": [
            "Tutti i file generati nelle funzioni precedenti (Ordini, Dati Contabili, Biglietti, ecc.) sono recuperabili qui.",
            "Clicca sull'icona di download per scaricare il file nella cartella Download del PC.",
            "Il campo <b>Emesso da Admin</b> nelle esportazioni identifica i titoli emessi gratuitamente da profilo commerciale."
          ]
        },
        {
          "tipo": "paragrafo",
          "testo": "Tutti i file scaricati nelle precedenti funzioni sono recuperabili nella funzione ESPORTAZIONI."
        },
        {
          "tipo": "icona-azione",
          "icona": "icona12.png",
          "testo": "Tutti i file possono essere scaricati cliccando sul simbolo, i file scaricati saranno pertanto disponibili nella cartella Download del proprio PC."
        },
        {
          "tipo": "avviso",
          "stile": "info",
          "testo": "Le esportazioni biglietti, abbonamenti e ordini presentano il campo <b>\"Emesso da Admin\"</b> per identificare i titoli emessi gratuitamente da profilo commerciale."
        }
      ]
    }
  ]
}
};
