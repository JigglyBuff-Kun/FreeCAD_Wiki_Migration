---
title: SheetMetal AddFoldWall
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                            |
| ---------------------------------------------------------- |
| SheetMetal AddFoldWall                                     |
| Menu location                                              |
| SheetMetal → Fold a Wall                                   |
| Workbenches                                                |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench") |
| Default shortcut                                           |
| C F                                                        |
| Introduced in version                                      |
| -                                                          |
| See also                                                   |
| _None_                                                     |
|                                                            |

## Description

The ![](/images/SheetMetal_AddFoldWall.svg) **SheetMetal AddFoldWall** command folds a sheet metal plate (blank) at a chosen line.

It can be used with a pre-cut blank to

- create a perforated bend zone
- leave planar sections within the bend area and beyond e.g. tabs. (needs gaps in the bend line)

![](/images/SheetMetal_AddFoldWall-13.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddFoldWall-14.png)

Pre-cut blank and bend line with two gaps → perforated bend zone with some still planar geometry

## Usage

1. Select the face to be bent.
2. Hold down the Ctrl key (or the Command key on macOS).
3. Select the coplanar ![](/images/Workbench_Sketcher.svg) [sketch](/Sketcher_Workbench "Sketcher Workbench") (i.e. lying on the same plane) containing the **bend line (segments)** (preferably from the [tree view](/Tree_view "Tree view")).
4. Release the Ctrl key (or the Command key).
5. There are several ways to invoke the command:
   - Press the ![](/images/SheetMetal_AddFoldWall.svg) [Fold a Wall](/SheetMetal_AddFoldWall "SheetMetal AddFoldWall") button.
   - Select the **Sheet Metal → ![](/images/SheetMetal_AddFoldWall.svg) Fold a Wall** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Sheet Metal → ![](/images/SheetMetal_AddFoldWall.svg) Fold a Wall** option from the context menu.
   - Use the keyboard shortcut: C Then F.
6. A **Fold** object is created and the **Fold on sketch line properties** [Task panel](/Task_panel "Task panel") opens.
7. Optionally press the Base Object button and select a different face.
8. Optionally press the Bend Line button and select a different sketch.
9. Optionally adjust the parameters in the Task panel.
10. Press the OK button to finish the command and close the Task panel.
11. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

![](/images/SheetMetal_AddFoldWall-15.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddFoldWall-14.png)

The bend line(s) lying in the middle of the perforation → to keep the bend centred the same way the property Dati**Position** has to be set to `middle`

### Task panel

A task panel was introduced in version 0.5.00

Double-click an existing Fold object in the [Tree view](/Tree_view "Tree view") to re-open the task panel and edit the parameters.

![](/images/SheetMetal_AddFoldWall-Task.png)

- Base Object: Links a different Sketch to the **base Object** property.
- Bend Line: Links a different Sketch to the **Bend Line** property.
- **Flip Direction**: Toggles the **Invert Bend** property.
- **Unbend**: Toggles the **Unfold** property.
- **Bend Radius**: Sets the **radius** property.
- **Bend Angle**: Sets the **angle** property.

### Notes

- The bend line sketch has to be **coplanar** to the selected face.

- The bend line segments have to be **colinear** to each other.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal Fold object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

- Dati**Bend Line** (`Link`): "Bend Reference Line List". Links to the bend line objects.
- Dati**Position** (`Enumeration`): "Bend Line Position".

  : `intersection of planes` (introduced in version 0.4.12), `forward` (default), `middle`, `backward`.

- Dati**angle** (`Angle`): "Bend Angle". Default angle: `90,00°`.
- Dati**base Object** (`LinkSub`): "Base Object". Link to the planar face to be bent.
- Dati**invert** (`Bool`): "Invert Bend Direction". Default: `false`
- Dati**invertbend** (`Bool`): "Invert Solid Bend Direction". Default: `false`

  : `true` swaps the side of the line to be bent.

- Dati**kfactor** (`FloatConstraint`): "Neutral Axis Position". Default: `0,50`.
- Dati**radius** (`Length`): "Bend Radius". Default: `1,00 mm`.
- Dati**unfold** (`Bool`): "Unfold Bend". Default: `false`

## Example

![](/images/SheetMetal_AddFoldWall-01.png)

A simple clip

### Preparation

This clip is made of a blank that receives three folds and so we need four sketches prepared in advance:

: - one for the outline plus slot (blank)
: - one for the bend at the tip
: - one for the upward bend
: - one for the downward bend

Easiest way to guarantee that one face of the blank and all folding lines are coplanar is to create all sketches on the same plane - the **XY_Plane** in this case.

The folding lines could be created with other tools but hey, we have a ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench "Sketcher Workbench")!

![](/images/SheetMetal_AddFoldWall-21.png)
![](/images/SheetMetal_AddFoldWall-20.png)

Sketches on their common plane and their representation in the model tree

### Workflow

1. Create a blank

   1. Select the outline sketch
   2. Press the ![](/images/SheetMetal_AddBase.svg)[Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") button  
       or use the keyboard shortcut: C then B  
       ![](/images/SheetMetal_AddFoldWall-02.png) ![](/images/SheetMetal_AddFoldWall-03.png)

      (The blank is padded in z direction and so it has to be flipped  
       each time, to select the bottom face that is lying on the sketch plane)

2. Fold the tip
   1. Select the blank's **bottom face**
   2. Select the **sketch** named **_Tip Fold line_** (preferably from the tree view)  
      (and don't forget the control/command key )
   3. Press the ![](/images/SheetMetal_AddFoldWall.svg) [Fold a wall](/SheetMetal_AddFoldWall "SheetMetal AddFoldWall") button  
       or use the keyboard shortcut: C then F  
      ![](/images/SheetMetal_AddFoldWall-10.png) ![](/images/SheetMetal_AddFoldWall-04.png) ![](/images/SheetMetal_AddFoldWall-05.png)
   4. The fold should be 90° down and so some values in the properties window need to be set e.g.:
      - the **angle** value to 60°
      - the **invert** value to true for an upward bend
3. Create the downward fold
   1. Select the blank's **bottom face**
   2. And then the **sketch** named **_Down-Fold line_**
   3. Press the ![](/images/SheetMetal_AddFoldWall.svg) [Fold a wall](/SheetMetal_AddFoldWall "SheetMetal AddFoldWall") button  
       or use the keyboard shortcut: C then F  
      ![](/images/SheetMetal_AddFoldWall-11.png) ![](/images/SheetMetal_AddFoldWall-06.png) ![](/images/SheetMetal_AddFoldWall-07.png)
   4. Set the **angle** value to 92°
   5. If the wrong section of the part moved set the **invertbend** value to true
4. To create the upward fold
   1. select the blank's **bottom face**
   2. and then the **sketch** named **_Up-Fold line_**
   3. Press the ![](/images/SheetMetal_AddFoldWall.svg) [Fold a wall](/SheetMetal_AddFoldWall "SheetMetal AddFoldWall") button  
       or use the keyboard shortcut: C then F  
      ![](/images/SheetMetal_AddFoldWall-12.png) ![](/images/SheetMetal_AddFoldWall-08.png) ![](/images/SheetMetal_AddFoldWall-09.png)
   4. Set the **angle** value to 80°
   5. If the fold is downward set the **invert** value to true
   6. If needed set the **invertbend** value to true

Done!

Note!: In real life the upward fold must be done before the downward fold. Only the virtual world of CAD allows us to bend through solid material. This way the orientation of the static section doesn't change.  
All sketches lie on the same plane to avoid sketches attached to moveable faces.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddFoldWall/it&oldid=1545458>"
