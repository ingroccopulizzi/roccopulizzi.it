# Sito di Rocco Pulizzi — codice

**Versione del codice:** v0.9.1 (2026-10-10) — **sito completo**: home, Chi sono, Percorso scientifico, Privacy. Prima della pubblicazione: inserire la data in `privacy.html` (cerca "[data di pubblicazione]").

## Cartelle

| Cartella / file | Cosa contiene |
|---|---|
| `index.html` | La pagina principale (home): testi e struttura. |
| `chi-sono.html` | La pagina "Chi sono". |
| `percorso-scientifico.html` | La pagina "Percorso scientifico" (pubblicazioni con link ai DOI). |
| `privacy.html` | L'informativa sulla privacy. |
| `css/style.css` | Colori, caratteri e impaginazione. I colori sono all'inizio (sezione 2). |
| `js/menu.js` | Apertura e chiusura del menu su telefono. Nessun cookie, nessun tracciamento. |
| `fonts/` | Caratteri Spectral (300, 400) e IBM Plex Sans (400, 400 corsivo, 500), licenza libera SIL OFL, testi della licenza inclusi. |
| `CNAME` | Contiene il dominio (`roccopulizzi.it`): serve a GitHub Pages. Non cancellare. |
| `.nojekyll` | File vuoto: dice a GitHub di pubblicare i file così come sono. Non cancellare. |
| `robots.txt`, `sitemap.xml` | Indicazioni per i motori di ricerca (la privacy è esclusa dall'indice). |
| `404.html` | Pagina mostrata per gli indirizzi inesistenti. |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Icona del sito (monogramma RP, come nella firma email): nella scheda del browser e sulla schermata di iPhone/iPad. Collegate in testa a ogni pagina. Non spostare né rinominare. |
| `img/` | Foto (crepuscolo, fiera, specchi, occhiali) in quattro dimensioni ciascuna, senza metadati (GPS ecc.); `neurone.svg` = disegno vettoriale del neurone (modificabile con un editor di testo o di grafica vettoriale). |

## Come cambiare un testo

1. Apri `index.html` con un editor di testo.
2. Cerca la frase da cambiare.
3. Modifica solo le parole tra `>` e `<`, senza toccare i simboli.
4. Ricorda: i testi approvati sono in `03-CONTENUTI.md` nel Project; la modifica va registrata lì.

## Regole da rispettare (dal registro del progetto)

- Nessun servizio esterno, nessun cookie, nessuno strumento di statistica (D7).
- Caratteri e immagini sempre dentro il sito (D12).
- Ogni foto: ritagliata se serve, corretta, **senza metadati** (D52).
- Mai testo sopra una foto senza verificarne la leggibilità sulla foto reale (E6).

## Verifiche fatte sulla v0.9

- Schermi provati: 390×844, 768×1024, 1024×768, 1100×800, 1280×720, 1280×800, 1440×900, 1920×1080, 2560×1440.
- Nessuno scorrimento orizzontale; caratteri caricati correttamente.
- Contrasto minimo del testo, misurato sulla foto reale: 5,7:1 (minimo richiesto 4,5:1).
- Navigazione da tastiera: "Vai al contenuto", menu apribile con Invio e chiudibile con Esc.
- Nessuna richiesta verso siti esterni, nessun cookie.
- Servizi: tre colonne da 1280 px in su, una sotto l'altra sotto; margine sinistro allineato all'apertura; righe di testo mai oltre ~75 caratteri.
- Come lavoro: quattro fasi numerate (due colonne da 1100 px in su), due blocchi trasversali, chiusura con pulsante; nessuno scorrimento orizzontale; voce del menu funzionante.
- Il metodo: mantra in grande (Spectral), due blocchi affiancati da 1100 px in su; nessuna cifra; nessuno scorrimento orizzontale.
- Chi sono (anteprima): foto in fiera intera, a destra del testo da 1100 px in su; caricamento differito; il link porta a `chi-sono.html` (pagina ancora da costruire).
- Contatti: tre recapiti come link diretti (email, telefono, WhatsApp), nessun modulo; footer con P.IVA, PEC e link alle pagine; nessuno scorrimento orizzontale.
- Chi sono: pagina completa (introduzione, linea del tempo, modo di lavorare, impegno civico, oltre il lavoro con foto, chiusura); 5 formati provati; nessuno scorrimento orizzontale; nessuna richiesta esterna.
- Percorso scientifico e Privacy: 5 formati; nessuno scorrimento; i link esterni sono solo i DOI (doi.org), l'informativa di GitHub e il sito del Garante, tutti aperti su richiesta del visitatore.
- Controllo incrociato su tutte e quattro le pagine: nessun file mancante, nessun link interno rotto, nessuna richiesta esterna al caricamento.
