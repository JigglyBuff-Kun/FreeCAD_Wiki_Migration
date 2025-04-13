---
title: Draftː B-spline
---
|  |
| --- |
| Draft BSpline |
| Posizione nel menu |
| Drafting → B-spline 2D Drafting → B-spline |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| B S |
| Introdotto nella versione |
| 0.7 |
| Vedere anche |
| [Draft Polilinea](/Draft_Wire/it "Draft Wire/it"), [Draft Curva di Bezier](/Draft_BezCurve/it "Draft BezCurve/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_BSpline.svg) **BSpline** crea una [curva B-spline](http://en.wikipedia.org/wiki/B-spline) da diversi punti.

Il comando BSpline specifica i *punti esatti* attraverso i quali passerà la curva. I comandi [Curva di Bézier](/Draft_BezCurve/it "Draft BezCurve/it") e [Curva di Bézier cubica](/Draft_CubicBezCurve/it "Draft CubicBezCurve/it"), invece, utilizzano *punti di controllo* per definire la posizione e la curvatura della spline.

![](/images/Draft_bspline_example.jpg)

Spline definita da più punti

## Utilizzo

Vedere anche: [Barra di Draft](/Draft_Tray/it "Draft Tray/it"), [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_BSpline.svg) BSpline.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Drafting → ![](/images/Draft_BSpline.svg) B-spline** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **2D Drafting → ![](/images/Draft_BSpline.svg) B-spline** dal menu.
   * Usare la scorciatoia da tastiera: B poi S.
2. Si apre il pannello attività **B-spline**. Vedere [Opzioni](#Options) per maggiori informazioni.
3. Scegliere il primo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
4. Scegliere altri punti nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
5. Premere Esc o il pulsante Chiudi per terminare il comando.

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 1.0).

* Per inserire manualmente le coordinate, inserire le componenti X, Y e Z e premere Enter dopo ognuna di essei. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando ha i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premere R o fare clic sulla casella di controllo **Relativo** per attivare o disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate sono relative all'ultimo punto, se disponibile, altrimenti sono relative all'origine del sistema di coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere F o fare clic sulla casella di controllo **Riempito** per attivare o disattivare la modalità riempimento. Se la modalità riempimento è attiva, la spline creata avrà Dati**Make Face** impostato su `true` e avrà una faccia piena, a condizione che sia chiusa e non si intersechi. Si noti che una spline autointersecante con una faccia non verrà visualizzata correttamente, per tale spline Dati**Make Face** deve essere impostato su `false`.
* Premere N o fare clic sulla casella di controllo **Continua** per attivare o disattivare la modalità continua. Se la modalità continua è attiva, il comando verrà riavviato dopo aver utilizzato ![](/images/Draft_FinishLine.svg) Fine o ![](/images/Draft_CloseLine.svg) Chiudi, o dopo aver creato una spline chiusa eseguendo lo snap al primo punto della spline, consentendo di continuare a creare altre spline.
* Premere / o il pulsante ![](/images/Draft_UndoLine.svg) Annulla per annullare l'ultimo punto.
* Premere A o il pulsante ![](/images/Draft_FinishLine.svg) Fine per terminare il comando e lasciare aperta la spline.
* Premere O o il pulsante ![](/images/Draft_CloseLine.svg) Chiudi per terminare il comando e chiudere la spline. È inoltre possibile creare una spline chiusa eseguendo lo snap al primo punto della spline.
* Premere W o il pulsante ![](/images/Draft_Wipe.svg) Pulisci per eliminare i segmenti di curva già posizionati, ma continuare a lavorare dall'ultimo punto.
* Premere U o il pulsante ![](/images/Draft_SelectPlane.svg) [Imposta il piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") per regolare il piano di lavoro corrente nell'orientamento definito dal ultimo e il punto precedente.
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premi Esc o il pulsante Chiudi per terminare il comando.

## Note

* Una BSpline può essere modificata con il comando [Modifica](/Draft_Edit/it "Draft Edit/it").
* Una BSpline può essere convertita in un [Polilinea](/Draft_Wire/it "Draft Wire/it") con il comando [Convertire tra polilinea e BSpline](/Draft_WireToBSpline/it "Draft WireToBSpline/it").

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft BSpiline è derivato da un [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Dati

Draft

* Dati**Area** (`Area`): (sola lettura) specifica l'area della faccia della spline. Il valore sarà `0.0` se Dati**Make Face** se `false` o la faccia non può essere creata.
* Dati**Closed** (`Bool`): specifica se la spline è chiusa o meno. Se la spline è inizialmente aperta questo valore è `false`, impostandolo su `true` disegnerà un segmento di curva per chiudere la spline. Se la spline è inizialmente chiusa, questo valore è `true`, impostandolo su `false` si rimuoverà l'ultimo segmento di curva e si aprirà la spline.
* Dati**Make Face** (`Bool`): specifica se la spline crea o meno una faccia. Se è `true` viene creata una faccia, altrimenti solo il perimetro è considerato parte dell'oggetto. Questa proprietà funziona solo se Dati**Closed** è `true` e se la spline non si autointerseca.
* Dati**Parameterization** (`Float`): influisce sulla forma della spline.
* Dati**Points** (`VectorList`): specifica i punti della spline nel suo sistema di coordinate locale.

### Vista

Draft

* Vista**Arrow Size** (`Length`): specifica la dimensione del simbolo visualizzato alla fine della spline.
* Vista**Arrow Type** (`Enumeration`): specifica il tipo di simbolo visualizzato alla fine della spline, che può essere `Dot`, `Circle`, `Arrow`, `Tick` o `Tick-2`.
* Vista**End Arrow** (`Bool`): specifica se mostrare un simbolo alla fine della spline, in modo che possa essere utilizzato come linea di annotazione.
* Vista**Pattern** (`Enumeration`): specifica la [Campitura](/Draft_Pattern/it "Draft Pattern/it") con cui riempire la faccia della spline chiusa. Questa proprietà funziona solo se Dati**Make Face** è `true` e se Vista**Display Mode** è `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifica la dimensione della [Campitura](/Draft_Pattern/it "Draft Pattern/it").

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare una Draft BSpline utilizzare il metodo `make_bspline` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeBSpline`.

```
bspline = make_bspline(pointslist, closed=False, placement=None, face=None, support=None)
bspline = make_bspline(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Crea un oggetto `bspline` dalla lista di punti fornita da `pointslist`.
  + Ogni punto nella lista è definito dal suo `FreeCAD.Vector`, con unità in millimetri.
  + In alternativa, l'input può essere una `Part.Wire`, da cui vengono estratti i punti.
* Se `closed` è `True`, o se il primo e l'ultimo punto coincidono, la spline è chiusa.
* Se `placement` è `None` la forma viene creata nell'origine.
* Se `face` è `True` e la spline è chiusa, diventa una faccia e appare riempita.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

spline1 = Draft.make_bspline([p1, p2, p3], closed=False)
spline2 = Draft.make_bspline([p1, 2*p3, 1.3*p2], closed=False)
spline3 = Draft.make_bspline([1.3*p3, p1, -1.7*p2], closed=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BSpline/it&oldid=1556261>"