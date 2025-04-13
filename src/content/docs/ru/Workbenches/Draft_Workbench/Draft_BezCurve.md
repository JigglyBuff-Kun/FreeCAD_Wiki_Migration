---
title: Draft "Кривая Безье"
---
|  |
| --- |
| Draft BezCurve |
| Расположение в меню |
| Черчение → Кривая Безье |
| Верстаки |
| [Draft](/Draft_Workbench/ru "Draft Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| B Z |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

Средство BezCurve создает [Bezier Curve](http://en.wikipedia.org/wiki/Bezier_curve) (или кусочную кривую Безье) из нескольких точек текущей [work plane](/Draft_SelectPlane "Draft SelectPlane"). Он берет [linewidth and color](/Draft_Linestyle "Draft Linestyle") , предварительно установленный на вкладке «Задачи».

Объект создается как одна кривая Безье степени (number\_of\_points - 1). Это можно изменить на кусочную кривую Безье определенной степени после создания с помощью  [properties editor](/Property "Property"). Кривые Безье можно редактировать с помощью ![](/images/Draft_Edit.png) [Draft Edit](/Draft_Edit "Draft Edit").

The Draft BezCurve and the [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve") commands use *control points* to define the position and curvature of the spline. The [Draft BSpline](/Draft_BSpline "Draft BSpline") command, on the other hand, specifies the *exact points* through which the curve will pass.

![](/images/Draft_BezCurve_Example.png)

Bézier curve defined by multiple points

## Применение

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

## Опции

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
* Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, coordinates are relative to the last point, if available, else they are relative to the coordinate system origin.
* Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
* Press F or click the **Filled**1.0 and below or **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") checkbox to toggle make face mode. If make face mode is on, the created curve will have Данные**Make Face** set to `true` and have a filled face, provided it is closed and does not self-intersect. A self-intersecting curve with a face will not display properly, for such a curve Данные**Make Face** must be set to `false`.
* Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after using ![](/images/Draft_FinishLine.svg) Finish or ![](/images/Draft_CloseLine.svg) Close, or after creating a closed curve by snapping to the first point of the curve, allowing you to continue creating curves.
* Press / or the ![](/images/Draft_UndoLine.svg) Undo button to undo the last point.
* Press A or the ![](/images/Draft_FinishLine.svg) Finish button to finish the command and leave the curve open.
* Press O or the ![](/images/Draft_CloseLine.svg) Close button to finish the command and close the curve. A closed curve can also be created by snapping to the first point of the curve.
* Press W or the ![](/images/Draft_Wipe.svg) Wipe button to delete the segments already placed, but keep working from the last point.
* Press U or the ![](/images/Draft_SelectPlane.svg) [Set WP](/Draft_SelectPlane "Draft SelectPlane") button to adjust the current working plane in the orientation defined by the last and the previous point.
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
* Press Esc or the Close button to finish the command.

## Примечания

* A Draft BezCurve can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* OpenCascade, and therefore FreeCAD, does not support Bézier curves of degrees larger than 25. This should not be a problem in practice, as most users typically use Bézier curves of degrees 3 to 5.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

A Draft BezCurve object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Данные

Draft

* Данные**Area** (`Area`): (read-only) specifies the area of the face of the curve. The value will be `0.0` if Данные**Make Face** if `false` or the face cannot be created.
* Данные**Closed** (`Bool`): specifies if the curve is closed or not. If the curve is initially open this value is `false`, setting it to `true` will draw a segment to close the curve. If the curve is initially closed this value is `true`, setting it to `false` will remove the last segment and make the curve open.
* Данные**Continuity** (`IntegerList`): (read-only) specifies the continuity of the curve.
* Данные**Degree** (`Integer`): specifies the degree of the curve.
* Данные**Length** (`Length`): (read-only) specifies the total length of the curve.
* Данные**Make Face** (`Bool`): specifies if the curve makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if Данные**Closed** is `true` and if the curve does not self-intersect.
* Данные**Points** (`VectorList`): specifies the control points of the curve in its local coordinate system.

### Вид

Draft

* Вид**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the curve.
* Вид**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the curve, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Вид**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the curve, so it can be used as an annotation line.
* Вид**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed curve. This property only works if Данные**Make Face** is `true` and if Вид**Display Mode** is `Flat Lines`.
* Вид**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Программирование

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Line use the `make_bezcurve` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeBezCurve` method.

```
bezcurve = make_bezcurve(pointslist, closed=False, placement=None, face=None, support=None, degree=None)
bezcurve = make_bezcurve(Part.Wire, closed=False, placement=None, face=None, support=None, degree=None)

```

* Creates a `bezcurve` object with the given list of points, `pointslist`.
  + Each point in the list is defined by its `FreeCAD.Vector`, with units in millimeters.
  + Alternatively, the input can be a `Part.Wire`, from which points are extracted.
* If `closed` is `True`, or if the first and last points are identical, the curve is closed.
* If `placement` is `None` the curve is created at the origin.
* If `face` is `True`, and the curve is closed, the curve will make a face, that is, it will appear filled.

Пример:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BezCurve/ru&oldid=1556267>"