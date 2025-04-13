---
title: Draft Curva di Bézier
---
|  |
| --- |
| Draft Curva di Bézier |
| Posizione nel menu |
| Drafting → Strumenti Beziér → Curva di Bézier 2D Drafting → Curva di Bézier |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| B Z |
| Introdotto nella versione |
| 0.14 |
| Vedere anche |
| [Draft Polilinea](/Draft_Wire/it "Draft Wire/it"), [Draft Curva di Bézier cubica](/Draft_CubicBezCurve/it "Draft CubicBezCurve/it"), [Draft BSpline](/Draft_BSpline/it "Draft BSpline/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_BezCurve.svg) **Curva di Bézier** crea una [curva di Bézier](http://en.wikipedia.org/wiki/Bezier_curve) da diversi punti.

Il comando crea una singola curva di Bézier con un Dati**Degree** che è `number_of_points - 1`. Può essere trasformato in una curva di Bézier a tratti riducendo questa proprietà.

I comandi Curva di Bézier e [Curva di Bézier cubica](/Draft_CubicBezCurve/it "Draft CubicBezCurve/it") utilizzano *punti di controllo* per definire la posizione e la curvatura della spline. Il comando [BSpline](/Draft_BSpline/it "Draft BSpline/it"), invece, specifica i *punti esatti* attraverso i quali passerà la curva.

![](/images/Draft_BezCurve_Example.png)

Curva di Bézier definita da più punti di controllo

## Utilizzo

Vedere anche: [Barra di Draft](/Draft_Tray/it "Draft Tray/it"), [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_BezCurve.svg) Curva di Bézier.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Drafting → Strumenti Bézier → ![](/images/Draft_BezCurve.svg) Curva di Bézier** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **2D Drafting → ![](/images/Draft_BezCurve.svg) Curva di Bézier** dal menu.
   * Usare la scorciatoia da tastiera: B poi Z.
2. Si apre il pannello delle attività **Curva di Bézier**. Vedere [Opzioni](#Options) per maggiori informazioni.
3. Scegliere il primo punto nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
4. Scegliere altri punti nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
5. Premere Esc o il pulsante Chiudi per terminare il comando.

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 1.0).

* Per inserire manualmente le coordinate, inserire le componenti X, Y e Z e premere Enter dopo ognuna di esse. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando ha i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premere R o fare clic sulla casella di controllo **Relativo** per attivare o disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate sono relative all'ultimo punto, se disponibile, altrimenti sono relative all'origine del sistema di coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere F o fare clic sulla casella di controllo **Riempito**[Template:VersionNoteMinus/it](/index.php?title=Template:VersionNoteMinus/it&action=edit&redlink=1 "Template:VersionNoteMinus/it (page does not exist)") o **Crea Faccia**[Template:VersionNote/it](/index.php?title=Template:VersionNote/it&action=edit&redlink=1 "Template:VersionNote/it (page does not exist)") per commutare la modalità di creazione della faccia. Se la modalità Crea faccia è attiva, la curva creata avrà Dati**Make Face** impostato su `true` e avrà una faccia piena, a condizione che sia chiusa e non si autointersechi. Nota che una curva autointersecante con una faccia non verrà visualizzata correttamente, per tale curva Dati**Make Face** deve essere impostata su `false`.
* Premere N o fare clic sulla casella di controllo **Continua** per attivare o disattivare la modalità continua. Se la modalità continua è attiva, il comando verrà riavviato dopo aver utilizzato ![](/images/Draft_FinishLine.svg) Fine o ![](/images/Draft_CloseLine.svg) Chiudi, o dopo aver creato una curva chiusa eseguendo lo snap al primo punto della curva, consentendo di continuare a creare curve.
* Premere / o il pulsante ![](/images/Draft_UndoLine.svg) Annulla per annullare l'ultimo punto.
* Premere A o il pulsante ![](/images/Draft_FinishLine.svg) Fine per terminare il comando e lasciare aperta la curva.
* Premere O o il pulsante ![](/images/Draft_CloseLine.svg) Chiudi per terminare il comando e chiudere la curva. È inoltre possibile creare una curva chiusa eseguendo lo snap al primo punto della curva.
* Premere W o il pulsante ![](/images/Draft_Wipe.svg) Pulisci per eliminare i segmenti già posizionati, ma continuare a lavorare dall'ultimo punto.
* Premere U o il pulsante ![](/images/Draft_SelectPlane.svg) [Imposta il piano di lavoro](/Draft_SelectPlane "Draft SelectPlane") per regolare il piano di lavoro corrente nell'orientamento definito dal ultimo e il punto precedente.
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premere Esc o il pulsante Chiudi per terminare il comando.

## Note

* Una Curva di Bézier può essere modificata con il comando [Modifica](/Draft_Edit/it "Draft Edit/it").
* OpenCascade, e quindi FreeCAD, non supporta le curve di Bézier di gradi maggiori a 25. Questo non dovrebbe essere un problema in pratica, poiché la maggior parte degli utenti usa tipicamente curve di Bézier di gradi da 3 a 5.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Curva di Bézier è derivato da un [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Dati

Draft

* Dati**Area** (`Area`): (sola lettura) specifica l'area della faccia della curva. Il valore sarà `0.0` se Dati**Make Face** se `false` o la faccia non può essere creata.
* Dati**Closed** (`Bool`): specifica se la curva è chiusa o meno. Se la curva è inizialmente aperta questo valore è `false`, impostandolo su `true` disegnerà un segmento per chiudere la curva. Se la curva è inizialmente chiusa questo valore è `true`, impostandolo su `false` rimuoverà l'ultimo segmento e aprirà la curva.
* Dati**Continuity** (`IntegerList`): (sola lettura) specifica la continuità della curva.
* Dati**Degree** (`Integer`): specifica il grado della curva.
* Dati**Length** (`Length`): (sola lettura) specifica la lunghezza totale della curva.
* Dati**Make Face** (`Bool`): specifica se la curva crea o meno una faccia. Se è `true` viene creata una faccia, altrimenti solo il perimetro è considerato parte dell'oggetto. Questa proprietà funziona solo se Dati**Closed** è `true` e se la curva non si autointerseca.
* Dati**Points** (`VectorList`): specifica i punti di controllo della curva nel suo sistema di coordinate locale.

### Vista

Draft

* Vista**Arrow Size** (`Length`): specifica la dimensione del simbolo visualizzato alla fine della curva.
* Vista**Arrow Type** (`Enumeration`): specifica il tipo di simbolo visualizzato alla fine della curva, che può essere `Dot`, `Circle`, `Arrow`, `Tick` o `Tick-2`.
* Vista**End Arrow** (`Bool`): specifica se mostrare un simbolo alla fine della curva, in modo che possa essere utilizzato come linea di annotazione.
* Vista**Pattern** (`Enumeration`): specifica il [Campitura](/Draft_Pattern/it "Draft Pattern/it") con cui riempire la faccia della curva chiusa. Questa proprietà funziona solo se Dati**Make Face** è `true` e se Vista**Display Mode** è `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifica la dimensione della [Campitura](/Draft_Pattern/it "Draft Pattern/it").

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare una Draft Curva di Bézier usare il metodo `make_bezcurve` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeBezCurve`.

```
bezcurve = make_bezcurve(pointslist, closed=False, placement=None, face=None, support=None, degree=None)
bezcurve = make_bezcurve(Part.Wire, closed=False, placement=None, face=None, support=None, degree=None)

```

* Crea un oggetto `bezcurve` dalla data lista di punti `pointslist`.
  + Ogni punto della lista è definito dal suo `FreeCAD.Vector`, con unità in millimetri.
  + In alternativa, l'input può essere una `Part.Wire`, da cui vengono estratti i punti.
* Se `closed` è `True`, o se il primo e l'ultimo punto coincidono, la curva è chiusa.
* Se `placement` è `None` la forma viene creata nell'origine.
* Se `face` è `True` e la curva è chiusa, diventa una faccia e appare riempita.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)
p4 = App.Vector(1500, -2000, 0)

bezcurve1 = Draft.make_bezcurve([p1, p2, p3, p4], closed=True)
bezcurve2 = Draft.make_bezcurve([p4, 1.3*p2, p1, 4.1*p3], closed=True)
bezcurve3 = Draft.make_bezcurve([1.7*p3, 1.5*p4, 2.1*p2, p1], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BezCurve/it&oldid=1559155>"