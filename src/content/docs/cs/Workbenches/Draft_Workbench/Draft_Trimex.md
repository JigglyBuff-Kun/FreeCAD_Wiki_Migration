---
title: Kreslení Zakrácení/Prodloužení
---
|  |
| --- |
| Kreslení Zakrácení/Prodloužení |
| Umístění Menu |
| Kreslení → Zakrácení/Prodloužení |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| T R |
| Představen ve verzi |
| - |
| Viz také |
| [DílVysunutí](/Part_Extrude/cs "Part Extrude/cs") |
|  |

## Popis

Tento nástroj zakracuje a prodlužuje přímky a lomené čáry a vysunuje plochy.

![](/images/Draft_trimex_example.jpg)

Top: a Draft Wire extended and then trimmed.  
Bottom: a face extruded into a solid body.

## Trim or extend

### Usage

1. Vyberte drát, který chcete zakrátit nebo prodloužit nebo vyberte plochu, kterou chcete vysunout
2. Stiskněte tlačítko ![](/images/Draft_Trimex.png) Kreslení Zakrácení/Prodloužení nebo stiskněte klávesy T a potom R
3. Klikněte na bod ve 3D pohledu

### Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

* Hold down Alt to invert the default result of the command.
* Hold down Shift to restrict the operation to the current segment of a [Draft Wire](/Draft_Wire "Draft Wire").
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.

Here is an example to explain the modifier keys. The left edge or the bottom edge of the U-shaped wire was extended. All [Draft Snaps](/Draft_Snap "Draft Snap") were turned off.

![](/images/Draft_Trimex_example2.png)

* zakracování nebo prodlužování je řízeno automaticky podle pozice myši
* když posunete kurzor přes další objekt, operace zakrátit/prodloužit zachytí tento objekt nebo segment
* stisknutí klávesy SHIFT vytvoří [vazbu](/Draft_Constrain "Draft Constrain") k segmentu, který je aktuálně zakracován nebo prodlužován
* stisknutí klávesy ALT změní směr zakracování
* pokud je vybraným objektem plocha nebo je vybrána plocha z existujícího objektu, nástroj Trimex se přepne do vysunovacího módu. Stisknutí klávesy SHIFT ve vysunovacím módu uvolní vysunutí z kolmice plochy a umožní zachycení k čemukoliv.

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

## Skriptování

Není dostupné. Podívejte se na nástroj [Díl vysunutí](/Part_Extrude/cs "Part Extrude/cs").

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Trimex/cs&oldid=1352601>"