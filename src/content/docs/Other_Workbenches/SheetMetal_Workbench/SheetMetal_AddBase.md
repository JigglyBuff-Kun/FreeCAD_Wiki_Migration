---
title: SheetMetal AddBase
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                            |
| ---------------------------------------------------------- |
| SheetMetal AddBase                                         |
| Menu location                                              |
| SheetMetal → Make Base Wall                                |
| Workbenches                                                |
| [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench") |
| Default shortcut                                           |
| C B                                                        |
| Introduced in version                                      |
| -                                                          |
| See also                                                   |
| _None_                                                     |
|                                                            |

## Description

The ![](/images/SheetMetal_AddBase.svg) **SheetMetal AddBase** command creates a SheetMetal base object from a sketch.

From an open contour it creates a prismatic **profile**:

![](/images/SheetMetal_AddBase-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddBase-02.png)

From a closed outline it creates a base **plate** (blank):

![](/images/SheetMetal_AddBase-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddBase-04.png)

## Usage

### Profile

1. Select an \*_open contour_- ![](/images/Workbench_Sketcher.svg) [sketch](/Sketcher_Workbench "Sketcher Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") button.
   - Select the **Sheet Metal → ![](/images/SheetMetal_AddBase.svg) Make Base Wall** option from the menu.
   - Right-click in the [Tree view](/Tree_view "Tree view") or the [3D view](/3D_view "3D view") and select the **Sheet Metal → ![](/images/SheetMetal_AddBase.svg) Make Base Wall** option from the context menu.
   - Use the keyboard shortcut: C then B.
3. A **BaseBend** object is created and the **Sketched base shape properties** [Task panel](/Task_panel "Task panel") opens.

   : Corners along the contour are automatically converted into cylindrical bends.

4. Optionally press the Sketch button and select a different sketch.
5. Set the profile parameters in the task panel.
6. Press the OK button to close the task panel and finish the command.
7. Optionally adjust the profile parameters in the [Property editor](/Property_editor "Property editor").

### Plate

1. Select a \*_closed outline_- ![](/images/Workbench_Sketcher.svg) [sketch](/Sketcher_Workbench "Sketcher Workbench").
2. Invoke the command as described above.
3. A **BaseBend** object is created and the **Generate Sheet Metal base shape** [Task panel](/Task_panel "Task panel") opens.
4. Optionally press the Sketch button and select a different sketch.
5. Set the plate parameters in the task panel.
6. Press the OK button to close the task panel and finish the command.
7. Optionally adjust the plate parameters in the [Property editor](/Property_editor "Property editor").

### Task panel

A task panel was introduced in version 0.6.01

Double-click an existing BaseBend object in the [Tree view](/Tree_view "Tree view") to re-open the task panel and edit the parameters.

![](/images/SheetMetal_AddBase-Task.png)

- Sketch: Links a different Sketch to the **Bend Sketch** property.
- **Bend Plane**: Sets the **Bend Side** property.
- **Radius**: Sets the **Radius** property.
- **Thickness**: Sets the **Thickness** property.
- **Length**: Sets the **Length** property.
- **Symmetric**: Toggles the **Mid Plane** property.
- **Reverse Direction**: Toggles the **Reverse** property. (hidden if **Symmetric** is checked)

The last entered values for Radius and Thickness will be saved as default values for the following new BaseBend object.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A SheetMetal BaseBend object is derived from a [Part Feature](/Part_Feature "Part Feature") object or, if it is inside a [PartDesign Body](/PartDesign_Body "PartDesign Body"), from a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object, and inherits all its properties. It also has the following additional properties:

### Data

Parameters

- Data**Bend Side** (`Enumeration`): "Bend Plane", defines on which side of a profile curve the thickness applies. `Outside` (default), `Inside`, `Middle`. (not used for plates)
- Data**Bend Sketch** (`Link`): "Wall Sketch object". Link to the profile/outline sketch.
- Data**Length** (`Length`): Extrusion length of a profile. Default: `100,00 mm`. (not used for plates)
- Data**Mid Plane** (`Bool`): "Extrude Symmetric to Plane". The length of a profile or the thickness of a plate extends to one side of the sketch plane if `false` (default) or symmetrically to both sides if `true`.
- Data**Radius** (`Length`): Inner radius of automatically added bends. Default: `1,00 mm`. (not used for plates)
- Data**Reverse** (`Bool`): Reverses the direction of a profile extrusion or a plate thickness. Default: `false`.
- Data**Thickness** (`Length`): Wall thickness of a sheetmetal profile or plate. Default: `1,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddBase/en&oldid=1545435>"
