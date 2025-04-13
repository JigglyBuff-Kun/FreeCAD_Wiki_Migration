---
title: Draft Bez Curve
---
|  |
| --- |
| Draft BezCurve |
| poziția meniului |
| Draft → BezCurve |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| B Z |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Instrumentul BezCurve creează o [Bezier Curve](http://en.wikipedia.org/wiki/Bezier_curve) (sau o curbă Bezier în bucăți) din mai multe puncte din planul curent  [work plane](/Draft_SelectPlane "Draft SelectPlane"). Este nevoie de [linewidth and color](/Draft_Linestyle "Draft Linestyle") setată anterior pe fila Activități.

Obiectul este creat ca o singură curbă Bezier de grad (număr\_de\_ puncte - 1). Aceasta poate fi modificată la o curbă Bezier în parte, de un anumit grad după crearea folosind  [editor proprietăți](/Property "Property"). Bezier Curves poate fi editat folosind  ![](/images/Draft_Edit.png) Editare proiect.

The Draft BezCurve and the [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve") commands use *control points* to define the position and curvature of the spline. The [Draft BSpline](/Draft_BSpline "Draft BSpline") command, on the other hand, specifies the *exact points* through which the curve will pass.

![](/images/Draft_BezCurve_Example.png)

Bézier curve defined by multiple points

![](/images/Draft_BezCurve_Example.png)

## Cum se folosește

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. There are several ways to invoke the command:
   * Press the ![](/images/Draft_BezCurve.svg) [Bézier curve](/Draft_BezCurve "Draft BezCurve") button.
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → Bézier tools → ![](/images/Draft_BezCurve.svg) Bézier curve** option from the menu.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **2D Drafting → ![](/images/Draft_BezCurve.svg) Bézier curve** option from the menu.
   * Use the keyboard shortcut: B then Z.
2. The **Bézier curve** task panel opens. See [Options](#Options) for more information.
3. Pick the first point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
4. Pick additional points in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
5. Press Esc or the Close button to finish the command.

## Cum se foloseşte

1. Apăsați butonul ![](/images/Draft_BezCurve.png) [Draft BezCurve](/Draft_BezCurve "Draft BezCurve") , sau apăsați  W apoi tastele I
2. Faceți clic pe un prim punct din vizualizarea 3D sau tastați un coordinate
3. Faceți clic pe un punct suplimentar în vizualizarea 3D sau tastați un coordinate
4. Apăsați F sau C sau faceți dublu clic pe ultimul punct sau faceți clic pe primul punct pentru a termina sau a închide filamentul/polilinia. Dacă filamentul este închis, acesta va fi, de asemenea, o fațetă, chiar dacă acesta apare ca o rețea wireframe.

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Apăsați tasta F sau butonul ![](/images/Draft_FinishLine.png) **Finish** pentru a finaliza funcția B spline, lăsând-o deschisă
* Press C or the ![](/images/Draft_CloseLine.png) **Close** button or click on the first point to finish the spline, but making it closed by adding a last segment between the last point and the first one.
* Press X, Y or Z after a point to constrain the next point on the given axis.
* To enter coordinates manually, simply enter the numbers, then press ENTER between each X, Y and Z component.
* Press R or click the checkbox to check/uncheck the **Relative** button. If relative mode is on, the coordinates of the next point are relative to the last one. If not, they are absolute, taken from the (0,0,0) origin point.
* Press T or click the checkbox to check/uncheck the **Continue** button. If continue mode is on, the BezCurve tool will restart after you finish or close it, allowing you to draw another one without pressing the BezCurve button again.
* Press CTRL while drawing to force [snapping](/Draft_Snap "Draft Snap") your point to the nearest snap location, independently of the distance.
* Press SHIFT while drawing to [constrain](/Draft_Constrain "Draft Constrain") your next point horizontally or vertically in relation to the last one.
* Press W or press the ![](/images/Draft_Wipe.png) **Wipe** button to remove the existing segments and start the spline from the last point.
* Press CTRL+Z or press the ![](/images/Draft_UndoLine.png) **Undo** button to undo the last point.
* Apăsați tasta ESC sau butonul **Cancel** penru a abandona comanda BezCurve .

## Notes

## Limitări

* Acest instrument nu este disponibil înainte de versiunea FreeCAD 0.14
* Proprietatea puncte nu apare încă în lista de proprietăți.
* OpenCascade nu suportă Bezier Curve cu grad> 25. Aceasta nu ar trebui să fie o problemă în practică.

## Proprietăți

See also: [Property editor](/Property_editor "Property editor").

A Draft BezCurve object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Date**Area** (`Area`): (read-only) specifies the area of the face of the curve. The value will be `0.0` if Date**Make Face** if `false` or the face cannot be created.
* Date**Closed** (`Bool`): specifies if the curve is closed or not. If the curve is initially open this value is `false`, setting it to `true` will draw a segment to close the curve. If the curve is initially closed this value is `true`, setting it to `false` will remove the last segment and make the curve open.
* Date**Continuity** (`IntegerList`): (read-only) specifies the continuity of the curve.
* Date**Degree** (`Integer`): specifies the degree of the curve.
* Date**Length** (`Length`): (read-only) specifies the total length of the curve.
* Date**Make Face** (`Bool`): specifies if the curve makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if Date**Closed** is `true` and if the curve does not self-intersect.
* Date**Points** (`VectorList`): specifies the control points of the curve in its local coordinate system.

### View

Draft

* Vizualizare**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the curve.
* Vizualizare**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the curve, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Vizualizare**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the curve, so it can be used as an annotation line.
* Vizualizare**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed curve. This property only works if Date**Make Face** is `true` and if Vizualizare**Display Mode** is `Flat Lines`.
* Vizualizare**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Scrip-Programare

Instrumentul BezCurve poate fi folosit în [macros](/Macros "Macros") și din consola Python utilizând următoarea funcție:

```
bezcurve = make_bezcurve(pointslist, closed=False, placement=None, face=None, support=None, degree=None)
bezcurve = make_bezcurve(Part.Wire, closed=False, placement=None, face=None, support=None, degree=None)

```

* Creați un obiect tip curbă Bezier din lista dată a vectorilor. În loc de o listă de puncte, puteți trece și o secțiune parțială.

Example:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BezCurve/ro&oldid=1513421>"