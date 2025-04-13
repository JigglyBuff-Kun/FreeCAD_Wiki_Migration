---
title: Draft funcții BSpline
---
|  |
| --- |
| Funcții BSpline |
| poziția meniului |
| Draft → BSpline |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| B S |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Draft Wire](/Draft_Wire/ro "Draft Wire/ro") |
|  |

## Description

## Descriere

Instrumentul BSpline creează o curbă [B-Spline](http://en.wikipedia.org/wiki/B-spline) din mai multe puncte din actualul [work plane](/Draft_SelectPlane/ro "Draft SelectPlane/ro"). Este nevoie de [linewidth and color](/Draft_Linestyle/ro "Draft Linestyle/ro") setată anterior pe fila Activități. Instrumentul BSpline se comportă exact ca instrumentul [Draft Wire](/Draft_Wire/ro "Draft Wire/ro").

The Draft BSpline command specifies the *exact points* through which the curve will pass. The [Draft BezCurve](/Draft_BezCurve "Draft BezCurve") and the [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve") commands, on the other hand, use *control points* to define the position and curvature of the spline.

![](/images/Draft_bspline_example.jpg)

![](/images/Draft_bspline_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Cum se folosește

1. Apăsați butonul ![](/images/Draft_BSpline.png) Draft BSpline, sau apăsați tastele B apoi S
2. Click pe primul punct în vizualizarea 3D, sau tastați coordinate
3. Click ăe punctele adiționale în vizualizarea 3D, sau tastați coordinate
4. Apăsați tastele F sau C sau faceți dublu clic pe ultimul punct sau faceți clic pe primul punct pentru a termina sau închide curba spline. Dacă curba B spline este închisă, ea va fi de asemenea o fațetă, chiar dacă ea apare ca un cadru de tip wireframe.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Opțiuni

* Apăsați F or the ![](/images/Draft_FinishLine.png) **Finish** button to finish the spline, leaving it open
* Apăsați butonul C or the ![](/images/Draft_CloseLine.png) **Close** sau click pe primul punct pentru a finaliza curba Spline, dar care o închid prin adăugarea unui ultim segment între ultimul punct și primul punct.
* Apăsați tasta X, Y sau Z după un punct pentru a constrânge următorul punct de pe axa dată.
* Pentru a introduce manual coordonatele, pur și simplu introduceți numerele, apoi apăsați ENTER între fiecare componentă X, Y și Z.
* Apăsați tasta R sau click pe checkbox pentru a bifa/debifa butonul **Relative**.Dacă modul relativ este activ, coordonatele punctului următor sunt relativ la ultima. Dacă nu, ele sunt absolute, luate din punctul de origine (0,0,0).
* Apăsați tasta T sau click pe checkbox pentru a bifa/debifa butonul **Continue**. Dacă modul continuare este activat, instrumentul BSpline se va reporni după finalizarea sau închiderea acestuia, permițându-vă să desenați altul fără să apăsați din nou butonul BSpline.
* Apăsați tasta CTRL în timp ce desenați pentru a forța punctul [snapping](/Draft_Snap/ro "Draft Snap/ro") punctul dvs. către cea mai apropiată locație, independent de distanța.
* Apăsați tasta SHIFT în timp ce desenați [constrain](/Draft_Constrain/ro "Draft Constrain/ro") punct dvs următor orizontal sau vertical în relație cu ultimul .
* Apăsați tasta W sau apăsați butonul ![](/images/Draft_Wipe.png) **Wipe** pentru a șterge segmentele existente și să demarați funcția Spline de la ultimul punct.
* Apăsați combinația de taste CTRL+Z sau apăsțai butonul ![](/images/Draft_UndoLine.png) **Undo** de undo a ultimului punct.
* Apăsați tasta I sau apăsați butonul **Filled** pentru a avea funcția spline umplută cu o fațetă după ce a fost închisă.
* Apăsați tasta ESC sau tasta **Cancel** pentru a întrerupe comanda curentă BSpline.
* Planele BS, atunci când sunt în modul de afișare "Flat Lines", pot afișa un model de hașurare, prin setarea proprietății "Pattern" de mai jos.

## Notes

* A Draft BSpline can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* A Draft BSpline can be converted to a [Draft Wire](/Draft_Wire "Draft Wire") with the [Draft WireToBSpline](/Draft_WireToBSpline "Draft WireToBSpline") command.

## Proprietăți

* DATE**Closed**: Specifică dacă curba spline este închisă sau nu
* DATE**Make Face**: Umple curba spline cu o fațetă
* VEDERE**End Arrow**: Afișează un simbol tp săgeată la ultimul punct al curbei spline, astfel încât este folosit ca linie lider de adnotare
* VEDERE**Pattern**: Specificați modelul hașurii cu care se va umple filamentul
* VEDERE**Pattern Size**: Specificați mărimea modelului de hașurare

See also: [Property editor](/Property_editor "Property editor").

A Draft BSpline object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Date**Area** (`Area`): (read-only) specifies the area of the face of the spline. The value will be `0.0` if Date**Make Face** if `false` or the face cannot be created.
* Date**Closed** (`Bool`): specifies if the spline is closed or not. If the spline is initially open this value is `false`, setting it to `true` will draw a curve segment to close the spline. If the spline is initially closed this value is `true`, setting it to `false` will remove the last curve segment and make the spline open.
* Date**Make Face** (`Bool`): specifies if the spline makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if Date**Closed** is `true` and if the spline does not self-intersect.
* Date**Parameterization** (`Float`): affects the shape of the spline.
* Date**Points** (`VectorList`): specifies the points of the spline in its local coordinate system.

### View

Draft

* Vizualizare**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the spline.
* Vizualizare**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the spline, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Vizualizare**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the spline, so it can be used as an annotation line.
* Vizualizare**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed spline. This property only works if Date**Make Face** is `true` and if Vizualizare**Display Mode** is `Flat Lines`.
* Vizualizare**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Script-Programre

Unealta BSpline poate fi folosită în [macro-uri](/Macros/ro "Macros/ro") şi de la consola Python cu ajutorul funcţiei următoare:

To create a Draft BSpline use the `make_bspline` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeBSpline` method.

```
bspline = make_bspline(pointslist, closed=False, placement=None, face=None, support=None)
bspline = make_bspline(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Creează un obiect B-Spline din lista de vectori dați.
* Dacă închis este True sau primul și ultimul pucnt sunt identice, filamentul este îchis.
* Dacă face este True (și curba BSpline este închisă), Curba B spline va apărea ca fiind umplută.
* În loc de o listă de puncte, puteți să mergeți și la conturul din Part Wire.
* Returnează obiectul noi creat.

Exempluː

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BSpline/ro&oldid=1472979>"