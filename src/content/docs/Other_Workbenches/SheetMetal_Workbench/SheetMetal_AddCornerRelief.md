---
title: SheetMetal AddCornerRelief
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                            |
| ---------------------------------------------------------- |
| SheetMetal AddCornerRelief                                 |
| Menu location                                              |
| SheetMetal → Add Corner Relief                             |
| Workbenches                                                |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench") |
| Default shortcut                                           |
| C R                                                        |
| Introduced in version                                      |
| -                                                          |
| See also                                                   |
| _None_                                                     |
|                                                            |

## Description

The ![](/images/SheetMetal_AddCornerRelief.svg) **SheetMetal AddCornerRelief** command adds a corner relief. A relief is usually created at corners where two bends meet, but the command can also create a relief at an open corner.

The command can only create one relief at a time.

![](/images/SheetMetal_AddCornerRelief-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-02.png)

Default corner of two bends → Corner with added corner relief

![](/images/SheetMetal_AddCornerRelief-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-04.png)

Default open corner → Open corner with added corner relief

## Usage

1. Select two edges of a corner.
2. There are several ways to invoke the command:
   - Press the ![](/images/SheetMetal_AddCornerRelief.svg) [Add Corner Relief](/SheetMetal_AddCornerRelief "SheetMetal AddCornerRelief") button.
   - Select the **SheetMetal → ![](/images/SheetMetal_AddCornerRelief.svg) Add Corner Relief** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Sheet Metal → ![](/images/SheetMetal_AddCornerRelief.svg) Add Corner Relief** option from the context menu.
   - Use the keyboard shortcut: C then R.
3. A **CornerRelief** object is created and the **Corner relief properties** [Task panel](/Task_panel "Task panel") opens (introduced in version 0.5.00).

   : A new corner relief is added at the selected corner.

4. Optionally press the Select button to reselect the edges.
   - Press the Preview button to finish the selection and display the changes.
5. Optionally re-select one of the **Relief Type** radio buttons:
   - The **Circular** radio button creates a round relief cutout.
   - The **Square** radio button creates a square relief cutout.
   - The **Sketch** radio button creates a cutout based on a sketch.
     1. Press the Sketch button to select the sketch.
     2. Optionally adjust the **X offset** and **Y offset** parameters.
6. Optionally toggle the **Relief Size** radio buttons:
   - Select **Absolute** and enter the **Relief Size** in mm.
   - Select **Relative** and enter the **Scale Factor**.
7. Optionally adjust the **K-Factor**.
8. Press the OK button to finish the command and close the Task panel.
9. Optionally adjust the parameters in the [Property editor](/Property_editor "Property editor").

### Task panel

A task panel was introduced in version 0.5.00

Double-click an existing CornerRelief object in the [Tree view](/Tree_view "Tree view") to re-open the task panel and edit the parameters.

![](/images/SheetMetal_AddCornerRelief-Task.png)

- Base Select: Links selected edges to the **base Object** property.
- The **Circular**, **Square** and **Sketch** radio buttons in combination with the **Absolute** and **Relative** radio buttons set the **Relief Sketch** property.
- If the **Sketch** radio button is selected the following options are displayed:
  1. Sketch: Links a Sketch to the **Sketch** property.
  2. **X Offset**: Sets the **XOffset** property.
  3. **Y Offset**: Sets the **YOffset** property.
- If the **Absolute** radio button is selected:

  : **Relief Size**: Sets the **Size** property.

- If the **Relative** radio button is selected:

  : **Scale Factor**: Sets the **Size Ratio** property.

- **K Factor**: Sets the **kfactor** property.

## Relief shapes

The shape of a corner relief can be altered by changing its property values:

The value of the property Data**ReliefSketch** can be chosen from a list: `Circle` (default), `Circle-Scaled`, `Square`, `Square-Scaled`, `Sketch`.

- `Circle` and `Square` use the value of the property Data**Size** to scale the relief.
- `Circle-Scaled` and `Square-Scaled` use the value of the property Data**Size Ratio** to scale the relief.
- `Sketch` activates the use of the sketch listed in the property Data**Sketch** to define the relief shape.

![](/images/SheetMetal_AddCornerRelief-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-07.png)

Circular relief (default settings) → Square relief (default settings) → Sketch based relief

## A closer look at relief sizes

To get an idea how and where the relief is placed we unfold a default corner without a relief.

![](/images/SheetMetal_AddCornerRelief-08.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-09.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-10.png)

Default corner of two bends → Corner with unfold solid → Corner in top view

The next step is to open the unfold sketch, create a circle through 3 points and add a radius dimension.  
 Now we add a corner relief, create the corresponding unfold solid and open the first unfold sketch again.  
 Adding a concentric circle of 3 mm radius reveals that we have found out how the internal circle is positioned as the new circle fits perfectly into the cut-out of the relief's unfold solid.

![](/images/SheetMetal_AddCornerRelief-11.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-12.png)

Default corner with unfold sketch → Corner with default relief and the same unfold sketch

Trying to set the property Data**Size** to a value below the determined 1,67 mm will result in an error; any value above should work fine.

Switching to Circle-Scaled and creating another unfold solid shows that 1,67 mm is the base for the property Data**Size Ratio**, too.

## Notes

- The k factor defines where within the thickness of a sheet the neutral axis is located according to the ANSI standard.
- The selection accepts more than two edges, but only the first two edges are taken into account.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal CornerRelief object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

- Data**ReliefSketch** (`Enumeration`): "Corner Relief Type". `Circle` (default), `Circle-Scaled`, `Square`, `Square-Scaled`, `Sketch`.
- Data**Size** (`Length`): "Size of Shape". Default: `3,00 mm`.
- Data**Size Ratio** (`Float`): "Size Ratio of Shape". Default: `1,50`.
- Data**base Object** (`LinkSub`): "Base Object". Links to the pair of edges defining the Corner Relief position.
- Data**kfactor** (`FloatConstraint`): "Neutral Axis Position". Default: `0,50`.

Parameters1

- Data**Sketch** (`Link`): "Corner Relief Sketch".
- Data**XOffset** (`Distance`): "Gap from side one". Default: `0,00 mm`.
- Data**YOffset** (`Distance`): "Gap from side two". Default: `0,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddCornerRelief/en&oldid=1545443>"
