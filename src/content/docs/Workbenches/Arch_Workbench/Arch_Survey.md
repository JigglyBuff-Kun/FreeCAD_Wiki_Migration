---
title: Arch Survey
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
| Arch Survey                                                                                                              |
| Menu location                                                                                                            |
| Utils → Survey                                                                                                           |
| Workbenches                                                                                                              |
| [BIM](/BIM_Workbench "BIM Workbench")                                                                                    |
| Default shortcut                                                                                                         |
| _None_                                                                                                                   |
| Introduced in version                                                                                                    |
| -                                                                                                                        |
| See also                                                                                                                 |
| [Macro FCInfo](/Macro_FCInfo "Macro FCInfo"), [Macro SimpleProperties](/Macro_SimpleProperties "Macro SimpleProperties") |
|                                                                                                                          |

## Description

The **Arch Survey** tool enters a special surveying mode, which allows you to quickly grab measurements and information from a model, and transfer that information to other applications. Once you are in Survey mode, clicking on different subelements of 3D objects gathers the following information (depending on what you click):

- If you click on an edge, you get its length
- If you click on a vertex, you get its height (coordinate on the Z axis)
- If you click on a face, you get its area
- If you double-click anything, therefore select the whole object, you get its volume

When such a piece of information is gathered, several things happen:

- A label is placed on top of the element you clicked, that displays the value (with "a" for area, "l" for length, "z" for height, or "v" for volume)
- The numeric value is copied to the clipboard, so you can paste it in another application
- A line is printed on the FreeCAD output window. After you exit the survey mode, those lines can be copied and pasted in another application (the values are comma-separated, making it easy to convert to spreadsheet data)
- The total length or area of the elements you clicked so far is also printed in the output window
- Each length or area is also recorded in the task dialog

![](/images/Arch_Survey_example.jpg)

_The above image shows what happens when running the survey mode._

## Usage

1. Select the **Utils → ![](/images/Arch_Survey.svg) Survey** option from the menu.
2. Click on vertices, edges, faces or double-click to select whole objects.
3. Click outside any geometry (on the background of the 3D view) to remove existing labels, print a total line in the Task dialog, and restart counting lengths and areas from zero.
4. Press Esc or the Close button to exit survey mode and remove all the labels.

## Options

- You can add a custom label to any line in the Task dialog by clicking that line, then adding a text in the description field, then press the **set description** button.
- Once you are done, before closing, you can export the contents of the Task dialog by pressing the "export CSV" button. The resulting CSV file can then be opened in any spreadsheet application such as Excel or LibreOffice Calc. The values and units will be separated in the resulting CSV file, and the totals are written as SUM() functions.

![](/images/Arch_Survey_spreadsheet.jpg)

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Survey tool doesn't have a programming interface, but gathering the same information from any selected [Part](/Part_Workbench "Part Workbench")-based object is reproduced with the following script:

```
import FreeCADGui

selection = FreeCADGui.Selection.getSelectionEx()

for obj in selection:
    for element in obj.SubObjects:
        print("Area: %f", element.Area)
        print("Length: %f", element.Length)
        print("Volume: %f", element.Volume)
        print("Center of Mass: %f", element.CenterOfMass)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Survey/en&oldid=1498631>"
