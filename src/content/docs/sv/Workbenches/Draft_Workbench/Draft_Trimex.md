---
title: Draft Trimex
---
|  |
| --- |
| Draft Trimex |
| Menyplacering |
| Draft -> Trim/Extend |
| Arbetsbänkar |
| [Draft](/Draft_Workbench/sv "Draft Workbench/sv"), [Arch](/Arch_Workbench/sv "Arch Workbench/sv") |
| Standard genväg |
| T R |
| Introducerad i version |
| - |
| Se även |
| [Part Extrude](/Part_Extrude/sv "Part Extrude/sv") |
|  |

## Beskrivning

Detta verktyg trimmar/klipper och förlänger linjer och polylines.

![](/images/Draft_trimex_example.jpg)

Top: a Draft Wire extended and then trimmed.  
Bottom: a face extruded into a solid body.

## Trim or extend

### Usage

1. Optionally select one object. The object must be a [Draft Line](/Draft_Line "Draft Line"), a [Draft Wire](/Draft_Wire "Draft Wire"), a [Draft Arc](/Draft_Arc "Draft Arc") or a [Draft Circle](/Draft_Circle "Draft Circle") (which can only be trimmed). If the selected object is closed it must have its Data**Make Face** property set to `false`.
2. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Trimex.svg) [Trimex](/Draft_Trimex "Draft Trimex") button.
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → ![](/images/Draft_Trimex.svg) Trimex** option from the menu.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/images/Draft_Trimex.svg) Trimex** option from the menu.
   * Use the keyboard shortcut: T then R.
3. If you have not yet selected an object: select an object in the [3D view](/3D_view "3D view").
4. The **Trimex** task panel opens. See [Options](#Options) for more information.
5. Move the pointer in the [3D view](/3D_view "3D view") so that the preview matches the desired result. If required use the modifier keys as explained in the [Options](#Options).
6. Do one of the following:
   * Pick a point in the [3D view](/3D_view "3D view").
   * Enter a **Distance** or an **Angle**. The distance is a delta distance. This option does not work if modifier keys are used.
   * Move the pointer over an edge belonging to another object, and click when this edge is highlighted, to trim or extend the selected object using an intersection with the highlighted edge as the new endpoint. When trimming, the projection of the point where the cutting edge is selected onto the object to be trimmed, determines the default result. Note that [Draft Snaps](/Draft_Snap "Draft Snap") can have an undesirable impact here. In some cases it can be useful to turn them off temporarily.

### Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

* Hold down Alt to invert the default result of the command.
* Hold down Shift to restrict the operation to the current segment of a [Draft Wire](/Draft_Wire "Draft Wire").
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.

Here is an example to explain the modifier keys. The left edge or the bottom edge of the U-shaped wire was extended. All [Draft Snaps](/Draft_Snap "Draft Snap") were turned off.

![](/images/Draft_Trimex_example2.png)

* trimning eller förlängning beslutas automatiskt beroende på muspositionen
* om du flyttar musmarkören över ett annat objekt, så kommer trim/förläng operationen att snäppa till det objektet eller segmentet
* Nedtryckning av SKIFT kommer att [begränsa](/Draft_Constrain/sv "Draft Constrain/sv") dig till det segment som för närvarande trimmas eller förlängs
* Nedtryckning av ALT kommer att invertera trimningens ordning
* fasning och avrundning stöds inte ännu men är planerat

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

## Skript

There is no Python method to trim objects. To extrude objects use the `extrude` method of the Draft module.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Trimex/sv&oldid=1473160>"