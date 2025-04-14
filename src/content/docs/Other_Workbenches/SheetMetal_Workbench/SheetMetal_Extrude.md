---
title: SheetMetal Extrude
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                            |
| ---------------------------------------------------------- |
| SheetMetal Extrude                                         |
| Menu location                                              |
| SheetMetal → Extend Face                                   |
| Workbenches                                                |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench") |
| Default shortcut                                           |
| E                                                          |
| Introduced in version                                      |
| -                                                          |
| See also                                                   |
| _None_                                                     |
|                                                            |

## Description

The ![](/images/SheetMetal_Extrude.svg) **SheetMetal Extrude** command extends a sheet metal plate at a selected edge face.

It creates a **simple extension** along the face normal of the selected edge face:

![](/images/SheetMetal_Extrude-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-02.png)

If an outline sketch is added it creates **interlocking geometry** to close a profile:

![](/images/SheetMetal_Extrude-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-04.png)

Three profiles with outline sketches to add → three results

## Usage

### Simple Extension

1. Select one or more edge face(s) to be extended.
2. There are several ways to invoke the command:
   - Press the ![](/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude "SheetMetal Extrude") button.
   - Select the **Sheet Metal → ![](/images/SheetMetal_Extrude.svg) Extend Face** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Sheet Metal → ![](/images/SheetMetal_Extrude.svg) Extend Face** option from the context menu.
   - Use the keyboard shortcut: E.
3. An **Extend** object will be created and the **Extend properties** [Task panel](/Task_panel "Task panel") opens (introduced in version 0.5.00).

   : At each selected face a new face extension is extruded.

4. Optionally press the Select button and add or remove faces.
   - Press the Preview button to finish the selection and display the changes.
5. Set the parameters in the Task panel.
6. Press the OK button to finish the command and close the Task panel.
7. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

### Task panel

A [Task panel](/Task_panel "Task panel") was introduced in version 0.5.00

Double-click an existing Extend object in the [Tree view](/Tree_view "Tree view") to re-open the Task panel and edit the parameters.

![](/images/SheetMetal_Extrude-Task.png)

- Select: Changes the amount of faces in the **base Object** property.
- **Length**: Sets the **length** property.
- **Offset A**: Sets the **gap 1** property.
- **Offset B**: Sets the **gap 2** property.
- **Refine**: Toggles the **Refine** property.

### Interlocking Extension

: (Prepare a ![](/images/Workbench_Sketcher.svg) [sketch](/Sketcher_Workbench "Sketcher Workbench") for interlocking tabs)

1. Select the edge face to be extended.
2. Invoke the command as described above.
3. Press the OK button to finish the command and close the Task panel.
4. In the [Property editor](/Property_editor "Property editor") press the ... button of the Data**Sketch** property.
5. The Link dialog window opens.
   - Select the prepared sketch from the list
   - Press the OK button to close the dialog.
6. Set the property Data**Use Subtraction** to `true` to create cut-outs to make room for the extensions.
7. Set the property Data**Offset** to adjust the clearance around the extension.

![](/images/SheetMetal_Extrude-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-04.png)

Three profiles → position of the sketches → results without cut-outs → final results

### Notes

- A sketch can contain more than one outline.

: After inserting a sketch, at least one of its outlines must at least touch one opposite face or the tool will fail to create any extension or cut-out.

: Just one outline touching an opposite face is enough to create extension geometry from all outlines of the sketch.

- Each cut-out will have a cuboid shape, no matter what shape the corresponding outline sketch is.

- Shapes other than rectangles may behave little bit strange and even though the object can be unfolded, the result will not turn out as expected.

![](/images/SheetMetal_Extrude-07.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-08.png)

Three outline sketches and their resulting extensions: separate triangle plate with a rectangular cut-out, circle without clearance → unfold solid is split at an unexpected position

- In an extension operation it is recommended to leave the property Data**Refine** set to `true` (default).

- The extension operation with a linked sketch may fail due to coplanar issues if the face on the sketch side and the face on the opposite side are coplanar, but with opposite orientations. A small offset may help in such a case.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal Extend object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

- Data**base Object** (`LinkSub`): "Base object". Link to the planar face to be extended.
- Data**gap1** (`Distance`): "Gap from the left side". Default: `0,00 mm`.
- Data**gap2** (`Distance`): "Gap from the right side". Default: `0,00 mm`.
- Data**length** (`Length`): "Length of Wall". Default: `10,00 mm`.

Parameters Ext.

- Data**Offset** (`Distance`): "Offset for subtraction". Default: `20,00 µm`.
- Data**Refine** (`Bool`): "Use Refine". Default: `true`.
- Data**Sketch** (`Link`): "Wall Sketch".
- Data**Use Subtraction** (`Bool`): "Use Subtraction". Default: `false`

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Extrude/en&oldid=1545489>"
