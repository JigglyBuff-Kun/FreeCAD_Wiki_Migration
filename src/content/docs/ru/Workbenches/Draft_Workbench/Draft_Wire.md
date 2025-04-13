---
title: Draft Wire
---
|  |
| --- |
| Draft Wire |
| Расположение в меню |
| Черчение → DWire |
| Верстаки |
| [Draft](/Draft_Workbench/ru "Draft Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| W I |
| Представлено в версии |
| - |
| См. также |
| [Линия](/Draft_Line/ru "Draft Line/ru"), [B-сплайн](/Draft_BSpline/ru "Draft BSpline/ru") |
|  |

## Description

## Описание

Инструмент «ломаная» создает полилинию (последовательность строк из нескольких сегментов) в текущей [work plane](/Draft_SelectPlane "Draft SelectPlane"). Он берет [linewidth and color](/Draft_Linestyle "Draft Linestyle") , предварительно установленный на вкладке «Задачи». Инструмент Wire ведет себя как инструмент [Draft Line](/Draft_Line "Draft Line"), за исключением того, что он не останавливается после двух точек.

The corners of a Draft Wire can be filleted (rounded) or chamfered by changing its Данные**Fillet Radius** or Данные**Chamfer Size** respectively. It is also possible to subdivide the edges of a Draft Wire by changing its Данные**Subdivisions** property.

![](/images/Draft_Polyline_example.jpg)

![](/images/Draft_Polyline_example.jpg)

## Create

### Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Использование

1. Нажмите кнопку ![](/images/Draft_Wire.png) [Draft Wire](/Draft_Wire "Draft Wire") или нажмите  W, затем клавиши  I
2. Щелкните первую точку на трехмерном изображении или введите coordinate
3. Нажмите дополнительную точку на трехмерном представлении или введите coordinate
4. Нажмите  F или  C или дважды щелкните последнюю точку или щелкните по первой точке, чтобы закончить или закрыть провод. Если провод закрыт, он также будет лицом, даже если он отображается в виде каркаса.

### Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
* Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, coordinates are relative to the last point, if available, else they are relative to the coordinate system origin.
* Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
* Press F or click the **Filled**1.0 and below or **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") checkbox to toggle make face mode. If make face mode is on, the created wire will have Данные**Make Face** set to `true` and have a filled face, provided it is closed and does not self-intersect. A self-intersecting wire with a face will not display properly, for such a wire Данные**Make Face** must be set to `false`.
* Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after using ![](/images/Draft_FinishLine.svg) Finish or ![](/images/Draft_CloseLine.svg) Close, or after creating a closed wire by snapping to the first point of the wire, allowing you to continue creating wires.
* Press / or the ![](/images/Draft_UndoLine.svg) Undo button to undo the last point.
* Press A or the ![](/images/Draft_FinishLine.svg) Finish button to finish the command and leave the wire open.
* Press O or the ![](/images/Draft_CloseLine.svg) Close button to finish the command and close the wire. A closed wire can also be created by snapping to the first point of the wire.
* Press W or the ![](/images/Draft_Wipe.svg) Wipe button to delete the segments already placed, but keep working from the last point.
* Press U or the ![](/images/Draft_SelectPlane.svg) [Set WP](/Draft_SelectPlane "Draft SelectPlane") button to adjust the current working plane in the orientation of the last segment.
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
* Press Esc or the Close button to finish the command.

## Join

### Usage

1. The end points of the [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires to be joined must be exactly coincident. If required first adjust points to ensure that this is the case.
2. Select two or more [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires.
3. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire") button.
   * Select the **Drafting → ![](/images/Draft_Wire.svg) Polyline** option from the menu.
   * Use the keyboard shortcut: P then L.

## Notes

* A Draft Wire can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.
* A Draft Wire can be converted to a [Draft BSpline](/Draft_BSpline "Draft BSpline") with the [Draft WireToBSpline](/Draft_WireToBSpline "Draft WireToBSpline") command.
* [Draft Lines](/Draft_Line "Draft Line") and Draft Wires can also be joined with the [Draft Join](/Draft_Join "Draft Join") command or the [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") command.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Wire object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Данные**Area** (`Area`): (read-only) specifies the area of the face of the wire. The value will be `0.0` if Данные**Make Face** is `false` or the face cannot be created.
* Данные**Base** (`Link`)
* Данные**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the wire.
* Данные**Closed** (`Bool`): specifies if the wire is closed or not. If the wire is initially open this value is `false`, setting it to `true` will draw a line segment to close the wire. If the wire is initially closed this value is `true`, setting it to `false` will remove the last line segment and make the wire open.
* Данные**End** (`VectorDistance`): specifies the end point of the wire.
* Данные**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the wire.
* Данные**Length** (`Length`): (read-only) specifies the total length of the wire.
* Данные**Make Face** (`Bool`): specifies if the wire makes a face or not. If it is `true` a face is created, otherwise only the edges are considered part of the object. This property only works if Данные**Closed** is `true` and if the wire does not self-intersect.
* Данные**Points** (`VectorList`): specifies the points of the wire in its local coordinate system.
* Данные**Start** (`VectorDistance`): specifies the start point of the wire.
* Данные**Subdivisions** (`Integer`): specifies the number of subdivisions for each edge of the wire. If it is `1` each edge will be divided into `2` equal segments. Subdivisions are applied before chamfers and fillets.
* Данные**Tool** (`Link`)

### View

Draft

* Вид**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the wire.
* Вид**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the wire, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Вид**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the wire, so it can be used as an annotation line.
* Вид**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed wire. This property only works if Данные**Make Face** is `true` and if Вид**Display Mode** is `Flat Lines`.
* Вид**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Wire use the `make_wire` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeWire` method.

```
wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)
wire = make_wire(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Creates a `Wire` object with the given list of points, `pointslist`.
  + Each point in the list is defined by its `FreeCAD.Vector`, with units in millimeters.
  + Alternatively, the input can be a `Part.Wire`, from which points are extracted.
* If `closed` is `True`, or if the first and last points are identical, the wire is closed.
* If `placement` is `None` the shape is created at the origin.
* If `face` is `True`, and the wire is closed, the wire will make a face, that is, it will appear filled.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

wire1 = Draft.make_wire([p1, p2, p3], closed=True)
wire2 = Draft.make_wire([p1, 2*p3, 1.3*p2], closed=True)
wire3 = Draft.make_wire([1.3*p3, p1, -1.7*p2], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Wire/ru&oldid=1556215>"