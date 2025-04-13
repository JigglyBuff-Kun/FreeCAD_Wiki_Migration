---
title: SheetMetal SketchOnSheet
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| SheetMetal SketchOnSheet |
| Menu location |
| SheetMetal → Sketch On Sheet metal |
| Workbenches |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench") |
| Default shortcut |
| M S |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

The ![](/images/SheetMetal_SketchOnSheet.svg) [SheetMetal SketchOnSheet](/SheetMetal_SketchOnSheet "SheetMetal SketchOnSheet") command cuts holes along the folded walls of a sheet metal object. For the hole layout a ![](/images/Workbench_Sketcher.svg) [sketch](/Sketcher_Workbench "Sketcher Workbench") is used.

In contrast to the ![](/images/PartDesign_Pocket.svg) [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket") command, where holes are just cut along the sketch normal (local z axis), this tool acts as if it would unfold the sheet metal object, cut the holes, and refold the object.

## Usage

1. Select a **planar face**
2. Add a coplanar ![](/images/Workbench_Sketcher.svg) [sketch](/Sketcher_Workbench "Sketcher Workbench") (i.e. lying on the same plane) for the **hole layout** to the selection (preferably from the [tree view](/Tree_view "Tree view")).
3. There are several ways to invoke the command:
   * Press the ![](/images/SheetMetal_SketchOnSheet.svg) [Sketch On Sheet metal](/SheetMetal_SketchOnSheet "SheetMetal SketchOnSheet") button.
   * Select the **SheetMetal → ![](/images/SheetMetal_SketchOnSheet.svg) Sketch On Sheet metal** option from the menu.
   * Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **SheetMetal → ![](/images/SheetMetal_SketchOnSheet.svg) Sketch On Sheet metal** option from the context menu.
   * Use the keyboard shortcut: M then S.
4. A **SketchOnSheet** object will be created consisting of holes starting on the selected plane and following along the bends and walls.
5. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

## Notes

* The sketch may contain more than just one outline.
* Any outline has to touch the planar face, at least, otherwise it won't cut a hole at all.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal SketchOnSheet object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

* Dati**Sketch** (`Link`): "Sketch on Sheetmetal". Link to the hole layout/cut-out sketch.
* Dati**base Object** (`LinkSub`): "Base Object". Link to the planar face where the cut-out starts.
* Dati**kfactor** (`FloatConstraint`): "Gap from Left Side". Default: `0,50`.

## Example

![](/images/SheetMetal_SketchOnSheet-05.png)

A simple thingamajig

### Preparation

This thingamajig is made of a folded sheet metal object with holes added.   
And so one open contour sketch for the sheet metal and one sketch for the hole layout have to be prepared in advance.   
One straight line of the first sketch must be coplanar to the other sketch plane, this will result in coplanar sketch and face used in the next steps.

![](/images/SheetMetal_SketchOnSheet-01.png)

Just a contour and a hole layout

### Workflow

1. Create a folded sheet metal object
   1. Select the **contour** sketch   
       ![](/images/SheetMetal_SketchOnSheet-02.png)
   2. Press the ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") button   
       or use the keyboard shortcut: C then F   
       ![](/images/SheetMetal_SketchOnSheet-03.png)
2. Cut some holes
   1. Select the **planar face**
   2. Select the **hole layout** sketch   
       ![](/images/SheetMetal_SketchOnSheet-04.png)
   3. Press the ![](/images/SheetMetal_SketchOnSheet.svg) [Sketch On Sheet metal](/SheetMetal_SketchOnSheet "SheetMetal SketchOnSheet") button   
       or use the keyboard shortcut: M then S   
       ![](/images/SheetMetal_SketchOnSheet-05.png)   
         
       Done!
3. Some hints
   1. Check if the folded object's thickness is built to the right side.   
       ![](/images/SheetMetal_SketchOnSheet-06.png)   
         
       The yellow contour should lie on the top face of the bottom fold (as shown).   
       To reverse direction set the value of **Bend Side** property (Outside <-> Inside).
   2. **Hole shapes** not touching the used planar face won't cut holes into the folded object.   
       ![](/images/SheetMetal_SketchOnSheet-07.png)   
       The lower rectangle which is hardly touching said face does cut a hole while the upper slot shape doesn't.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_SketchOnSheet/it&oldid=1544913>"