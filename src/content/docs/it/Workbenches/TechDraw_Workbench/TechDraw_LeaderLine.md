---
title: TechDraw Linea guida
---
|  |
| --- |
| TechDraw Linea guida |
| Posizione nel menu |
| TechDraw → Aggiungi linee → Linea guida |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| [Blocco di testo](/TechDraw_RichTextAnnotation/it "TechDraw RichTextAnnotation/it"), [Simbolo di saldatura](/TechDraw_WeldSymbol/it "TechDraw WeldSymbol/it") |
|  |

## Descrizione

Lo strumento **TechDraw Linea guida** aggiunge una linea a una Vista. Altri oggetti di annotazione, come un [Blocco di testo](/TechDraw_RichTextAnnotation/it "TechDraw RichTextAnnotation/it"), possono essere collegati alla linea guida per formare annotazioni complesse.

![](/images/TechDraw_LeaderLine_sample.png)

Linea guida aggiunta ad una Vista

## Creazione

1. Selezionare una vista.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_LeaderLine.svg) Aggiungi linea guida.
   * Selezionare l'opzione **TechDraw → Aggiungi linee → ![](/images/TechDraw_LeaderLine.svg) Aggiungi linea guida** dal menu.
3. Si apre un pannello delle azioni.
4. Premere il pulsante Seleziona punti.
5. Scegliere il primo punto sulla pagina per definire il punto iniziale della linea.
6. Scegliere il punto successivo sulla pagina. Tenere premuto Ctrl per eseguire l'aggancio ad angoli multipli di di 22,5°. Facoltativamente, utilizzare un doppio clic anziché un clic singolo per completare l'immissione dei punti.
7. Facoltativamente aggiungere più punti.
8. Se non si ha fatto doppio clic su un punto: premere il pulsante Salva punti.
9. Facoltativamente modificare il **Simbolo Iniziale**, **Simbolo Finale**, **Colore**, **Larghezza** e **Stile** della linea guida. Vedere [Proprietà](#Proprietà) per ulteriori informazioni.
10. Premere il pulsante OK.

## Modifica

1. Fare doppio clic su una Linea guida nella [Vista ad albero](/Tree_view/it "Tree view/it").
2. Si apre un pannello delle azioni.
3. Per modificare i punti:
   1. Premere il pulsante Modifica punti.
   2. La Linea guida è contrassegnata da nodi temporanei.
   3. Trascinare uno o più nodi in una nuova posizione.
   4. Premere il pulsante Salva modifiche.
4. Facoltativamente modificare il **Simbolo Iniziale**, **Simbolo Finale**, **Colore**, **Larghezza** e **Stile** della linea guida. Vedere [Proprietà](#Proprietà) per ulteriori informazioni.
5. Premere il pulsante OK.

## Note

* Non è possibile aggiungere o rimuovere punti da una Linea guida esistente.
* Se non sono stati specificati punti al momento della creazione, al centro della vista viene posizionata una breve linea. Non c'è modo di correggere una linea del genere, dovrebbe essere cancellata.
* Per impostazione predefinita, la **Linea guida orizzontale automatica** [preferenza](/TechDraw_Preferences/it#Annotazione "TechDraw Preferences/it") è selezionata. Ciò significa che l'ultimo segmento di linea delle nuove Linee guida viene disegnato orizzontalmente. Se è presente un solo segmento il risultato sarà una singola linea orizzontale.
* E' possibile disattivare questa funzione orizzontale automatica per Le linee guida esistenti modificando la loro proprietà Dati**Auto Horizontal**.

## Proprietà

### Dati

Base

* Dati**Start Symbol** (`Enumeration`): il simbolo all'inizio della Linea guida. Opzioni: ![](/images/Arrowfilled.svg) Freccia piena, ![](/images/Arrowopen.svg) Freccia aperta, ![](/images/Arrowtick.svg) Tratto, ![](/images/Arrowdot.svg) Punto, ![](/images/Arrowopendot.svg) Cerchio aperto, ![](/images/Arrowfork.svg) Biforcazione, ![](/images/Arrowpyramid.svg) Triangolo pieno, Nessuno.
* Dati**End Symbol** (`Enumeration`): il simbolo alla fine della linea guida. Idem.
* Dati**X** (`Distance`): la coordinata X della linea guida relativa alla Vista.
* Dati**Y** (`Distance`): la coordinata Y della linea guida relativa alla Vista.

Leader

* Dati**Leader Parent** (`Link`): la vista a cui è associata la Linea guida.
* Dati**Way Points** (`VectorList`): i punti della Linea guida.
* Dati**Scalable** (`Bool`): specifica se la Linea guida viene ridimensionata con Dati**Leader Parent**.
* Dati**Auto Horizontal** (`Bool`): specifica se l'ultimo segmento della Linea guida deve essere orizzontale.

### Vista

Base

* Vista**Keep Label** (`Bool`): non utilizzato.
* Vista**Stack Order** (`Integer`): sovrapposto o sovrapposto rispetto ad altri oggetti di disegno. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

Line Format

* Vista**Color** (`Color`): il colore della Linea guida.
* Vista**Stile linea** (`Enumeration`): lo stile della Linea guida. Opzioni: Nessuna linea, ![](/images/Continuous-line.svg) Continuo, ![](/images/Dash-line.svg) A tratti, ![](/images/Dot-line.svg) Punto, ![](/images/DashDot-line.svg) Tratto punto, ![Length](/images/DashDotDot-line.svg) Tratto punto punto.
* Vista**Line Width** (`Length`): la larghezza della Linea guida.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Linea guida può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
myPage = FreeCAD.ActiveDocument().Page
myBase = FreeCAD.ActiveDocument().View
leaderObj = FreeCAD.ActiveDocument.addObject('TechDraw::DrawLeaderLine','DrawLeaderLine')
FreeCAD.activeDocument().myPage.addView(leaderObj)
FreeCAD.activeDocument().leaderObj.LeaderParent = myBase
#first waypoint is always (0,0,0)  
#rest of waypoints are positions relative to (0,0,0)
leaderObj.WayPoints = [p0,p1,p2]
leaderObj.X = 5
leaderObj.Y = 5

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LeaderLine/it&oldid=1446108>"