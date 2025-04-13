---
title: TechDraw Vista di un foglio di calcolo
---
|  |
| --- |
| TechDraw Vista di un foglio di calcolo |
| Posizione nel menu |
| TechDraw → Viste da altri ambienti di lavoro → Vista di foglio di calcolo |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it"), [Foglio di calcolo](/Spreadsheet_Workbench/it "Spreadsheet Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Lo strumento **TechDraw Vista di un Foglio di calcolo** consente di posizionare la visualizzazione di un [foglio di calcolo](/Spreadsheet_Workbench/it "Spreadsheet Workbench/it") selezionato su una [Pagina](/TechDraw_Workbench/it "TechDraw Workbench/it").

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Anche lo strumento [TechDraw Vista](/TechDraw_View/it "TechDraw View/it") può creare una Vista Foglio di calcolo.

![](/images/TechDraw_Spreadsheetview.png)

Elemento Foglio di calcolo inserito nella pagina di disegno TechDraw

## Utilizzo

1. Selezionare un foglio di calcolo nella [Vista ad albero](/Tree_view/it "Tree view/it").
2. Se nel documento sono presenti più pagine di disegno: facoltativamente aggiungere la pagina desiderata alla selezione selezionandola nella [Vista ad albero](/Tree_view/it "Tree view/it").
3. Selezionare l'opzione **TechDraw → Viste da altri ambienti di lavoro → ![](/images/TechDraw_SpreadsheetView.svg) Inserisci Vista Foglio di calcolo** dal menu.
4. Se nel documento sono presenti più pagine di disegno e se nessuna pagina è visualizzata nell'[Area vista principale](/Main_view_area/it "Main view area/it") e non si ha ancora selezionato una pagina, si apre la finestra di dialogo **Scelta pagina**:
   1. Selezionare la pagina desiderata.
   2. Premere il pulsante OK.
5. Viene inserita una Vista Foglio di calcolo.
6. Regolare l'intervallo di celle della vista modificando le sue proprietà Dati**Cell Start** e Dati**Cell End**.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Una Vista Foglio di calcolo, formalmente un oggetto `TechDraw::DrawViewSpreadsheet`, ha le [proprietà](/TechDraw_View/it#Properties_Part_View "TechDraw View/it") comuni a tutti i tipi di vista. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Drawing view

* Dati (Hidden)**Symbol** (`String`): Il codice SVG che definisce questo simbolo.
* Dati (Hidden)**Testi modificabili** (`StringList`): Valori di sostituzione per le stringhe modificabili in questo simbolo. Non utilizzato.
* Dati**Owner** (`Link`): Feature a cui è collegato questo simbolo. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

Spreadsheet

* Dati**Source** (`Link`): Il foglio di calcolo da aggiungere alla pagina.
* Dati**Cell Start** (`String`): La cella in alto a sinistra dell'intervallo di celle da includere in questa visualizzazione.
* Dati**Cell End** (`String`): La cella in basso a destra dell'intervallo di celle da includere in questa visualizzazione.
* Dati**Font** (`Font`): Il nome del carattere utilizzato per i testi.
* Dati**Text Color** (`Color`): Il colore di testi e linee per i quali non è specificato alcun colore nel foglio di calcolo.
* Dati**Text Size** (`Float`): La dimensione del carattere dei testi.
* Dati**Line Width** (`Float`): La larghezza dei bordi della cella.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_SpreadsheetView/it&oldid=1503928>"