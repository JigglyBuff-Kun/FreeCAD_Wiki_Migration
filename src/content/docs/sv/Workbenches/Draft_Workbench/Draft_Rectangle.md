---
title: Draft Rectangle
---
|  |
| --- |
| Draft Rectangle |
| Menyplacering |
| Draft -> Rectangle |
| Arbetsbänkar |
| [Draft](/Draft_Workbench/sv "Draft Workbench/sv"), [Arch](/Arch_Workbench/sv "Arch Workbench/sv") |
| Standard genväg |
| R E |
| Introducerad i version |
| - |
| Se även |
| [Part Box](/Part_Box/sv "Part Box/sv") |
|  |

## Description

#### Beskrivning

Detta verktyg ritar en rektangel genom att välja två motsatta punkter.

The corners of a Draft Rectangle can be filleted (rounded) or chamfered by changing its Data**Fillet Radius** or Data**Chamfer Size** respectively. It is also possible to subdivide a Draft Rectangle by changing its Data**Columns** and/or Data**Rows** property.

![](/images/Draft_Rectangle_example.jpg)

![](/images/Draft_Rectangle_example.jpg)

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

#### Bruk

* Markera punkter i ett tomt område i 3d vyn, eller på ett existerande objekt.
* Nedtryckning av CTRL kommer att [snäppa](/Draft_Snap/sv "Draft Snap/sv") din punkt till tillgängliga snäpp-punkter.
* Skriv in siffror för att manuellt mata in en koordinat.
* Nedtryckning av SKIFT medan du väljer den motsatta punkten tillåter dig att begränsa den ortogonalt i relation till det ögonblick som du tryckte på SKIFT.
* Om du trycker på ESC så avbryts funktionen.
* Rektanglar har en "Texturbild" egenskap som kan användas för att visa en bild som mappas på rektangeln. Du måste se till att ge rektangeln samma dimensioner som bilden. Om man tar bort innehållet i egenskapen så försvinner bilden från rektangeln. Detta är användbart om du behöver kalkera av en pappersritning som du har skannat in.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
* Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, the coordinates of the second point are relative to the first point, else they are relative to the coordinate system origin.
* Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
* Press F or click the **Filled**1.0 and below or **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") checkbox to toggle make face mode. If make face mode is on, the created rectangle will have Data**Make Face** set to `true` and have a filled face.
* Press N or click the **Continue** checkbox to toggle continue mode. If continue mode is on, the command will restart after finishing, allowing you to continue creating rectangles.
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
* Press Esc or the Close button to abort the command.

## Notes

* A Draft Rectangle can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Plane](/Part_Plane "Part Plane") instead of a Draft Rectangle.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Rectangle object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Data**Area** (`Area`): (read-only) specifies the area of the face of the rectangle. The value will be `0.0` if Data**Make Face** if `false`.
* Data**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the rectangle.
* Data**Columns** (`Integer`): specifies the number of equal-sized columns in which the rectangle is divided.
* Data**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the rectangle.
* Data**Height** (`Distance`): specifies the height of the rectangle.
* Data**Length** (`Distance`): specifies the length of the rectangle.
* Data**Make Face** (`Bool`): specifies if the rectangle makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object.
* Data**Rows** (`Integer`): specifies the number of equal-sized rows in which the rectangle is divided.

### View

Draft

* Vy**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the rectangle. This property only works if Data**Make Face** is `true` and if Vy**Display Mode** is `Flat Lines`.
* Vy**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").
* Vy**Texture Image** (`File`): specifies the path of the image file to be mapped onto the face of the rectangle. Blanking this property will remove the image. The rectangle should have the same proportions as the image to avoid distortions.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Rectangle use the `make_rectangle` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeRectangle` method.

```
rectangle = make_rectangle(length, height, placement=None, face=None, support=None)

```

* Creates a `rectangle` object with `length` in the X direction and `height` in the Y direction, with units in millimeters.
* If `placement` is `None` the rectangle is created at the origin and the length will be parallel to the X axis.
* If `face` is `True`, the rectangle will make a face, that is, it will appear filled.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle1 = Draft.make_rectangle(4000, 1000)
rectangle2 = Draft.make_rectangle(1000, 4000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 45))

rectangle3 = Draft.make_rectangle(3500, 250, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rectangle/sv&oldid=1556255>"