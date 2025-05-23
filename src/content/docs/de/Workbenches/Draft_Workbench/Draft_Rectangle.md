---
title: Draft Rechteck
---
|  |
| --- |
| Draft Rechteck |
| Menüeintrag |
| Zeichnen → Rechteck 2D-Entwurf → Rechteck |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| R E |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Part Würfel](/Part_Box/de "Part Box/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Rectangle.svg) **Draft Rechteck** erstellt ein Rechteck aus zwei Punkten auf der aktuellen [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").

Du kannst optional eine 45-Grad-Fase oder eine runde Verrundung zu jeder Ecke des Rechtecks hinzufügen, und du kannst das Rechteck in eine Reihe von gleich großen Reihen und Spalten unterteilen.

![](/images/Draft_Rectangle_example.jpg)

Ein durch zwei Punkte festgelegtes Rechteck

## Anwendung

Siehe auch: [Draft Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Rectangle.svg) [Rectangle](/Draft_Rectangle "Draft Rectangle") button.
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → ![](/images/Draft_Rectangle.svg) Rectangle** option from the menu.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **2D Drafting → ![](/images/Draft_Rectangle.svg) Rectangle** option from the menu.
   * Use the keyboard shortcut: R then E.
2. The **Rectangle** task panel opens. See [Options](#Options) for more information.
3. Pick the first point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
4. Pick the second point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button. This point must not be constrained to the X, Y or Z axis.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* To manually enter coordinates enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
* Press R or click the **Relative** checkbox to toggle relative mode. If relative mode is on, the coordinates of the second point are relative to the first point, else they are relative to the coordinate system origin.
* Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
* Press F or click the **Filled**1.0 and below or **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") checkbox to toggle make face mode. If make face mode is on, the created rectangle will have Daten**Make Face** set to `true` and have a filled face.
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

* Daten**Area** (`Area`): (read-only) specifies the area of the face of the rectangle. The value will be `0.0` if Daten**Make Face** if `false`.
* Daten**Chamfer Size** (`Length`): specifies the length of the chamfers at the corners of the rectangle.
* Daten**Columns** (`Integer`): specifies the number of equal-sized columns in which the rectangle is divided.
* Daten**Fillet Radius** (`Length`): specifies the radius of the fillets at the corners of the rectangle.
* Daten**Height** (`Distance`): specifies the height of the rectangle.
* Daten**Length** (`Distance`): specifies the length of the rectangle.
* Daten**Make Face** (`Bool`): specifies if the rectangle makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object.
* Daten**Rows** (`Integer`): specifies the number of equal-sized rows in which the rectangle is divided.

### View

Draft

* Ansicht**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the rectangle. This property only works if Daten**Make Face** is `true` and if Ansicht**Display Mode** is `Flat Lines`.
* Ansicht**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").
* Ansicht**Texture Image** (`File`): specifies the path of the image file to be mapped onto the face of the rectangle. Blanking this property will remove the image. The rectangle should have the same proportions as the image to avoid distortions.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft Rectangle use the `make_rectangle` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `makeRectangle` method.

```
rectangle = make_rectangle(length, height, placement=None, face=None, support=None)

```

* Creates a `rectangle` object with `length` in the X direction and `height` in the Y direction, with units in millimeters.
* If `placement` is `None` the rectangle is created at the origin and the length will be parallel to the X axis.
* If `face` is `True`, the rectangle will make a face, that is, it will appear filled.

Beispiel:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rectangle/de&oldid=1556239>"