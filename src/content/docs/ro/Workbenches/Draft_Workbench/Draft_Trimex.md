---
title: Draft Trimex
---
|  |
| --- |
| Draft Trimex |
| poziția meniului |
| Draft → Trim/Extend |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| T R |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Part Extrude](/Part_Extrude/ro "Part Extrude/ro") |
|  |

## Descriere

Acest instrument taie/scurtează și/sau extinde linii și polilinii, și extrudează fațete.

![](/images/Draft_trimex_example.jpg)

Top: a Draft Wire extended and then trimmed.  
Bottom: a face extruded into a solid body.

## Trim or extend

### Usage

1. Selectați filamentul/polilinia pe care doriți să-l tăiați sau extindeți sau selectați o fațetă pe care doriți să o extrudați
2. Apăsați butonul ![](/images/Draft_Trimex.png) [Draft Trimex](/Draft_Trimex "Draft Trimex") sau apăsați tatele  T apoi R
3. Faceți clic pe un punct din vizualizarea 3D

### Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

* Hold down Alt to invert the default result of the command.
* Hold down Shift to restrict the operation to the current segment of a [Draft Wire](/Draft_Wire "Draft Wire").
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.

Here is an example to explain the modifier keys. The left edge or the bottom edge of the U-shaped wire was extended. All [Draft Snaps](/Draft_Snap "Draft Snap") were turned off.

![](/images/Draft_Trimex_example2.png)

* tăierea sau extinderea este decisă automat din poziția mouse-ului
* dacă mutați cursorul mouse-ului peste un alt obiect, operația de ajustare / extindere se va apropia de acel obiect sau segment
* apăsând  SHIFT va  [constrain](/Draft_Constrain "Draft Constrain") pe segmentul în curs de curățare sau extindere
* apăsând  ALT va inversa direcția de tăiere
* Când obiectul selectat este o față sau o față este selectată dintr-un obiect existent, instrumentul trimex trece în modul extruder. În modul extrudat, apăsarea tastei  SHIFT eliberează extrudarea de pe fața normală și permite fixarea în altă parte.

## Extrude

### Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. It can be helpful to first change the [Draft working plane](/Draft_SelectPlane "Draft SelectPlane") so that it is not coplanar with the face you want to extrude.
2. Optionally select a single face or an object with a single face.
3. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Trimex.svg) [Draft Trimex](/Draft_Trimex "Draft Trimex") button.
   * Select the **Modification → ![](/images/Draft_Trimex.svg) Trimex** option from the menu.
   * Use the keyboard shortcut: T then R.
4. If you have not yet selected an object or a face: select an object with a single face in the [3D view](/3D_view "3D view").
5. The **Trimex** task panel opens. See [Options](#Options_2) for more information.
6. To define the extrusion direction and distance do one of the following:
   * Pick a point in the [3D view](/3D_view "3D view") that does no lie on the same plane as the face.
   * Make sure the pointer is on the correct side of the face in the [3D view](/3D_view "3D view") and enter a **Distance**.

### Options

The modifier key mentioned here can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences").

* Hold Shift to extrude in a direction that is not parallel to the normal of the face.

## Scripting

## Scrip-Programare

Nu este disponibil. A se vedea instrumentul [Part Extrude](/Part_Extrude "Part Extrude").

```
extrusion = extrude(obj, vector, solid=False)

```

* `obj` is the object to be extruded.
* `vector` is the extrusion direction and distance.
* If `solid` is `True` a solid is created instead of a shell.
* `extrusion` is returned with the created object.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(1500, 500)
doc.recompute()

vector = App.Vector(0, 0, 300)
solid = Draft.extrude(rectangle, vector, solid=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Trimex/ro&oldid=1352651>"