---
title: Polígono
---
|  |
| --- |
| Draft Polygon |
| Menu location |
| Drafting → Polygon 2D Drafting → Polygon |
| Workbenches |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| P G |
| Introduced in version |
| 0.7 |
| See also |
| *None* |
|  |

## Descrição

The ![](/images/Draft_Polygon.svg) **Draft Polygon** command creates a regular polygon on the current [working plane](/Draft_SelectPlane "Draft SelectPlane") from a center and a radius. The radius can be defined by picking a point.

A Draft Polygon can be switched from inscribed to circumscribed by changing its Dados**Draw Mode** property. The corners of a Draft Polygon can be filleted (rounded) or chamfered by changing its Dados**Fillet Radius** or Dados**Chamfer Size** respectively.

![](/images/Draft_polygon_example.jpg)

Regular polygon defined by two points, center and radius

## Utilização

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Polygon.svg) [Polygon](/Draft_Polygon "Draft Polygon") button.
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → ![](/images/Draft_Polygon.svg) Polygon** option from the menu.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **2D Drafting → ![](/images/Draft_Polygon.svg) Polygon** option from the menu.
   * Use the keyboard shortcut: P then G.
2. The **Polygon** task panel opens. See [Options](#Options) for more information.
3. Adjust the desired number of **Sides**.
4. Pick the first point, the center of the polygon, in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
5. Pick the second point in the [3D view](/3D_view "3D view"), or enter a **Radius**.

## Opções

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* To manually enter the coordinates for the center enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
* Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
* Press F or click the **Filled**1.0 and below or **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") checkbox to toggle make face mode. If make face mode is on, the created polygon will have Dados**Make Face** set to `true` and have a filled face.
* Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after finishing, allowing you to continue creating polygons.
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
* Press Esc or the Close button to abort the command.

## Notas

* A Draft Polygon can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferências

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part RegularPolygon](/Part_RegularPolygon "Part RegularPolygon") instead of a Draft Polygon.

## Propriedades

See also: [Property editor](/Property_editor "Property editor").

A Draft Polygon object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Dados**Area** (`Area`): (read-only) specifies the area of the face of the polygon. The value will be `0.0` if Dados**Make Face** if `false`.
* Dados**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the polygon.
* Dados**Draw Mode** (`Enumeration`): specifies if the polygon is `inscribed` in a circle or `circumscribed` around a circle.
* Dados**Faces Number** (`Integer`): specifies the number of sides of the polygon.
* Dados**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the polygon.
* Dados**Make Face** (`Bool`): specifies if the polygon makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object.
* Dados**Radius** (`Length`): specifies the radius of the circle that defines the polygon.

### Vista

Draft

* Vista**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the polygon. This property only works if Dados**Make Face** is `true` and if Vista**Display Mode** is `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Polygon use the `make_polygon` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makePolygon` method.

```
polygon = make_polygon(nfaces, radius=1, inscribed=True, placement=None, face=None, support=None)

```

* Creates a `polygon` object with the given number of faces (`nfaces`), and based on a circle of `radius` in millimeters.
* If `inscribed` is `True`, the polygon is inscribed in the circle, otherwise it will be circumscribed.
* If `placement` is `None` the polygon is created at the origin and one of its vertices will lie on the X axis.
* If `face` is `True`, the polygon will make a face, that is, it will appear filled.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(4, radius=500)
polygon2 = Draft.make_polygon(5, radius=750)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

Polygon3 = Draft.make_polygon(6, radius=1450, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Polygon/pt-br&oldid=1556253>"