---
title: Kreslení Bezierových křivek
---
|  |
| --- |
| Draft BezCurve |
| Menu location |
| Draft -> BezCurve |
| Workbenches |
| [Draft](/Draft_Workbench/cs "Draft Workbench/cs"), [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Default shortcut |
| B Z |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Popis

Nástroj Bezierova křivka vytváří [Bezierovu křivku](http://en.wikipedia.org/wiki/Bezier_curve) (nebo Bezierovu křivku po částech) z několika bodů v aktuální [pracovní rovině](/Draft_SelectPlane/cs "Draft SelectPlane/cs"). Přebírá [tloušťku čáry a barvu](/Draft_Linestyle/cs "Draft Linestyle/cs") předem nastavenou v záložce Nástroje.

The command creates a single Bézier curve with a Údaje**Degree** that is `number_of_points - 1`. It can be transformed into a piecewise Bézier curve by reducing this property.

The Draft BezCurve and the [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve") commands use *control points* to define the position and curvature of the spline. The [Draft BSpline](/Draft_BSpline "Draft BSpline") command, on the other hand, specifies the *exact points* through which the curve will pass.

![](/images/Draft_BezCurve_Example.png)

Bézier curve defined by multiple points

![](/images/Draft_BezCurve_Example.png)

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

## Použití

1. Stiskněte tlačítko ![](/images/Draft_BezCurve.png) [Bezierova křivka](/Draft_BezCurve "Draft BezCurve") nebo klávesy B potom Z
2. Klikněte na první bod ve 3D pohledu nebo zadejte jeho souřadnice
3. Klikněte na další bod ve 3D pohledu nebo zadejte jeho souřadnice
4. Stiskněte klávesu F nebo C nebo dvojklikněte na poslední bod pro ukončení nebo na počáteční bod pro uzavření křivky.

## Volby

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Stiskněte tlačítko F nebo ![](/images/Draft_FinishLine.png) **Dokončit** pro ukončení křivky bez uzavření
* Stiskněte tlačítko C nebo ![](/images/Draft_CloseLine.png) **Uzavřít** nebo klikněte na první bod pro dokončení křivky s tím, že bude uzavřena a eventuálně bude přdán poslední segment do počátečního bodu.
* Stiskněte tlačítko X, Y nebo Z po vybrání bodu a pak bude další výběr proveden v dané ose.
* Pro ruční zadání souřadnic jednoduše vložte číslo a stiskněte ENTER mezi každou z komponent X, Y a Z.
* Stiskněte tlačítko R nebo zaklikněte/odklikněte políčko **Relativně**. Je-li zapnut relativní mód souřadnice následujícího bodu bodou relativní k předchozímu bodu, jinak budou absolutní k počátku (0,0,0).
* Stiskněte tlačítko T nebo zaklikněte/odklikněte políčko **Pokračovat**. Je-li zapnut pokračovací mód, bude nástroj Bezierova křivka po ukončení nebo uzavření křivky restartován a můžete hned kreslit další bez klikání na tlačítko pro Bezierovu křivku.
* Stiskněte při kreslení tlačítko CTRL chcete-li [přichytit](/Draft_Snap "Draft Snap") Váš bod k nejbližšímu uchopovacímu místu, nezávisle na tom jak je daleko.
* Stiskněte při kreslení tlačítko SHIFT pro nastavení [vazby](/Draft_Constrain "Draft Constrain") dalšího bodu svisle nebo vodorovně v relaci k poslednímu bodu.
* Stiskněte klávesu W nebo tlačítko ![](/images/Draft_Wipe.png) **Smazat** pro smazání existujících segmentů a spuštění křivky od posledního bodu.
* Stiskněte klávesy CTRL+Z nebo tlačítko ![](/images/Draft_UndoLine.png) **Undo** pro vrácení k předchozímu bodu.
* Stiskněte klávesu ESC nebo tlačítko **Zrušit** k ukončení aktuálního příkazu pro Bezierovu křivku.

## Notes

## Omezení

* Tento nástroj je dostupný až od verze FreeCADu 0.14
* Vlastnost Body se zatím nezaobrazuje v seznamu vlastností.
* OpenCascade nepodporuje Bezierovy křivky se stupněm < 25. V praxi by to neměl být problém.

## Vlastnosti

See also: [Property editor](/Property_editor "Property editor").

A Draft BezCurve object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Údaje**Area** (`Area`): (read-only) specifies the area of the face of the curve. The value will be `0.0` if Údaje**Make Face** if `false` or the face cannot be created.
* Údaje**Closed** (`Bool`): specifies if the curve is closed or not. If the curve is initially open this value is `false`, setting it to `true` will draw a segment to close the curve. If the curve is initially closed this value is `true`, setting it to `false` will remove the last segment and make the curve open.
* Údaje**Continuity** (`IntegerList`): (read-only) specifies the continuity of the curve.
* Údaje**Degree** (`Integer`): specifies the degree of the curve.
* Údaje**Length** (`Length`): (read-only) specifies the total length of the curve.
* Údaje**Make Face** (`Bool`): specifies if the curve makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if Údaje**Closed** is `true` and if the curve does not self-intersect.
* Údaje**Points** (`VectorList`): specifies the control points of the curve in its local coordinate system.

### View

Draft

* Pohled**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the curve.
* Pohled**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the curve, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Pohled**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the curve, so it can be used as an annotation line.
* Pohled**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed curve. This property only works if Údaje**Make Face** is `true` and if Pohled**Display Mode** is `Flat Lines`.
* Pohled**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Skriptování

Nástroj Bezierova křivka může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
bezcurve = make_bezcurve(pointslist, closed=False, placement=None, face=None, support=None, degree=None)
bezcurve = make_bezcurve(Part.Wire, closed=False, placement=None, face=None, support=None, degree=None)

```

* Vytvoří objekt Bezierovy křivky podle zadaného seznamu vektorů. Místo seznamu bodů můžete také vložit díl Drát.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BezCurve/cs&oldid=1513371>"