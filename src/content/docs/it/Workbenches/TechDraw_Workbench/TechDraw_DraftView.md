---
title: TechDraw Vista di Draft
---
|  |
| --- |
| TechDraw Vista di Draft |
| Posizione nel menu |
| TechDraw → Viste da altri ambienti → Inserisci Oggetto Ambiente Draft |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it"), [Draft](/Draft_Workbench/it "Draft Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [TechDraw Vista di Arch](/TechDraw_ArchView/it "TechDraw ArchView/it") |
|  |

## Descrizione

Lo strumento **TechDraw Vista di Draft** inserisce una vista di un oggetto selezionato basato su [Part](/Part_Workbench/it "Part Workbench/it") o Gruppo in una pagina di disegno. A differenza dello strumento standard ![](/images/TechDraw_View.svg) [Vista](/TechDraw_View/it "TechDraw View/it"), le viste create con questo strumento sono gestite dallo strumento ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it") e appositamente progettate per mostrare oggetti 2D. Vedere [Note](#Note).

![](/images/TechDraw_DraftView_example.png)

Elementi di Draft, cerchi e serie, importati in una pagina di disegno TechDraw

## Utilizzo

1. Facoltativamente ruotare la [Vista 3D](/3D_view/it "3D view/it"). La direzione della telecamera nella [Vista 3D](/3D_view/it "3D view/it") determina il valore iniziale della proprietà Dati**Direction** della vista.
2. Seleziona uno o più oggetti nella [Vista 3D](/3D_view/it "3D view/it") o nella [Vista ad albero](/Tree_view/it "Tree view/it"). Verrà creata una vista separata per ciascun oggetto.
3. Se nel documento sono presenti più pagine di disegno: facoltativamente aggiungere la pagina desiderata alla selezione selezionandola nella [Vista ad albero](/Tree_view/it "Tree view/it").
4. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_DraftView.svg) Inserisci Oggetto Ambiente Draft.
   * Seleziona l'opzione **TechDraw → Viste da altri Ambienti di lavoro → ![](/images/TechDraw_DraftView.svg) Inserisci Oggetto Ambiente Draft** dal menu.
5. Se nel documento sono presenti più pagine di disegno e non si ha ancora selezionato una pagina, si apre la finestra di dialogo **Scelta pagina**:
   1. Selezionare la pagina desiderata.
   2. Premere il pulsante OK.

## Opzioni

* La creazione di una Vista di Draft di un livello (layer) gestisce in modo ricorsivo tutti gli oggetti trovati su quel livello. La vista viene aggiornata automaticamente quando i contenuti del livello cambiano.
* Non è prevista la rimozione delle linee nascoste. Ogni faccia trovata negli oggetti gestiti viene semplicemente proiettata lungo il vettore Direzione, quando le facce si sovrappongono non viene intrapresa nessuna azione specifica.
* La vista di Draft supporta anche tutti gli oggetti Draft che non sono basati su parti, come dimensioni e testi
* Colore, larghezza e tipo di linea possono essere specificati nelle proprietà. I tipi di linea possono essere perfezionati dando direttamente un valore [stroke-dasharray](https://www.w3.org/TR/SVG/painting.html#StrokeProperties), ad esempio 3,5.
* Le facce proiettate vengono riempite con il colore della faccia.

## Note

Il rendering di Vista di Draft viene eseguito all'interno dell'ambiente [Draft](/Draft_Workbench/it "Draft Workbench/it"), pertanto TechDraw ha un controllo limitato sul suo aspetto. Potrebbe essere necessario apportare modifiche all'interno di Draft per ottenere la rappresentazione desiderata.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Una Vista Draft, formalmente un oggetto `TechDraw::DrawViewDraft`, ha le [proprietà](/TechDraw_View/it#Properties_Part_View "TechDraw View/it") comuni a tutti i tipi di vista. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Draft view

* Dati**Source** (`Link`): l'oggetto Draft da visualizzare.
* Dati**Line Width** (`Float`): la larghezza delle linee, indipendentemente dalla scala.
* Dati**Font Size** (`Float`): la dimensione di tutti i testi che appaiono in questa vista (testi e dimensioni).
* Dati**Direction** (`Vector`): la direzione di proiezione da utilizzare.
* Dati**Color** (`Color`): il colore delle linee.
* Dati**Line Style** (`String`): uno stile di linea da utilizzare per questa vista. Può essere `Solid`, `Dashed`, `Dashdot`, `Dot` o un modello di linea SVG come `0.20,0.20`.
* Dati**Line Spacing** (`Float`): la spaziatura tra le righe da usare per i testi multilinea.
* Dati**Override Style** (`Bool`): Se `true`, il colore della linea, la larghezza e lo stile di questa vista sovrascriveranno quelli dell'oggetto renderizzato.

Drawing view

* Dati (Hidden)**Symbol** (`String`): Il codice SVG che definisce questo simbolo.
* Dati**Editable Texts** (`StringList`): Valori di sostituzione per le stringhe modificabili in questo simbolo.
* Dati**Owner** (`Link`): Feature a cui è collegato questo simbolo. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento New Draft può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla [console di Python](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it") tramite la seguente funzione:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewDraft','TestDraft')
dv.Source = myDraftbject
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_DraftView/it&oldid=1503913>"