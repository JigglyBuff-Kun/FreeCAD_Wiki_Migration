---
title: Draft Polygon
---
|  |
| --- |
| Draft\_Polygon |
| Menyplacering |
| Draft -> Polygon |
| Arbetsbänkar |
| [Skiss](/Draft_Workbench/sv "Draft Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| *Ingen* |
|  |

## Description

#### Beskrivning

Detta verktyg frågar användaren efter en centrumpunkt och en radie. Du kan sedan specificera antalet sidor, och en regelbunden polygon kommer att skapas inuti den givna radiens cirkel. Antalet sidor och om polygonen är inskriven eller omskriven cirkeln kan ändras när som helst i objektets egenskaper. Den nyss skapade polygonen kommer att ha nuvarande linkefärg och -tjocklek.

Punkterna kan markeras med musen i 3D vyn eller genom att mata in koordinater med tangentbordet.

A Draft Polygon can be switched from inscribed to circumscribed by changing its Data**Draw Mode** property. The corners of a Draft Polygon can be filleted (rounded) or chamfered by changing its Data**Fillet Radius** or Data**Chamfer Size** respectively.

![](/images/Draft_polygon_example.jpg)

![](/images/Draft_polygon_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

#### Bruk

* Markera en punkt på ett tomt område i 3D vyn, eller på ett existerande objekt.
* Om du håller ned CTRL så kommer din punkt att [snäppa](/Draft_Snap/sv "Draft Snap/sv") till tillgängliga snäpp platser.
* Om du håller nedSKIFT så kommer din punkt att [begränsas](/Draft_Constrain/sv "Draft Constrain/sv") i relation till den sista punkten.
* Skriv in siffror för att mata in en koordinat manuellt
* Om du trycker ned ESC så kommer operationen att avbrytas.
* Polygonen kan visas som en yta eller som en trådmodell, genom att ändra dess visningsläge.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* To manually enter the coordinates for the center enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
* Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
* Press F or click the **Filled**1.0 and below or **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") checkbox to toggle make face mode. If make face mode is on, the created polygon will have Data**Make Face** set to `true` and have a filled face.
* Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after finishing, allowing you to continue creating polygons.
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
* Press Esc or the Close button to abort the command.

## Notes

* A Draft Polygon can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part RegularPolygon](/Part_RegularPolygon "Part RegularPolygon") instead of a Draft Polygon.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Polygon object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Data**Area** (`Area`): (read-only) specifies the area of the face of the polygon. The value will be `0.0` if Data**Make Face** if `false`.
* Data**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the polygon.
* Data**Draw Mode** (`Enumeration`): specifies if the polygon is `inscribed` in a circle or `circumscribed` around a circle.
* Data**Faces Number** (`Integer`): specifies the number of sides of the polygon.
* Data**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the polygon.
* Data**Make Face** (`Bool`): specifies if the polygon makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object.
* Data**Radius** (`Length`): specifies the radius of the circle that defines the polygon.

### View

Draft

* Vy**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the polygon. This property only works if Data**Make Face** is `true` and if Vy**Display Mode** is `Flat Lines`.
* Vy**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Polygon/sv&oldid=1556246>"