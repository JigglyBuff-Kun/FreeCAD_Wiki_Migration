---
title: Std ToggleClipPlane
---

|                                                       |
| ----------------------------------------------------- |
| Std ToggleClipPlane                                   |
| Menu location                                         |
| View → Clipping plane                                 |
| Workbenches                                           |
| All                                                   |
| Default shortcut                                      |
| _None_                                                |
| Introduced in version                                 |
| -                                                     |
| See also                                              |
| [Part SectionCut](/Part_SectionCut "Part SectionCut") |
|                                                       |

## Description

The **Std ToggleClipPlane** command temporarily hides objects and parts of objects on one side of up to three virtual planes in the active [3D view](/3D_view "3D view").

![](/images/Std_ToggleClipPlane_example.png)

A clipped hollow object

![](/images/Std_ToggleClipPlane_Dialog.png)

The Clipping dialog box

## Usage

1. Select the **View → ![](/images/Std_ToggleClipPlane.svg) Clipping plane** option from the menu.
2. The **Clipping** dialog box opens.
3. Do one of the following:
   - Check one or more of the **Clipping X** to **Clipping Z** checkboxes.
     - Optionally change the offset distance(s).
     - Optionally press the Flip button(s) to change the side of the clipping plane objects are hidden on.
   - Check the **Clipping custom direction** checkbox.
     - Optionally change the offset distance.
     - Do one of the following:
       - Press the View button to use the direction of the current view.
       - Check the **Adjust to view direction** checkbox for a direction that dynamically adepts to view changes.
       - Specify the direction by entering the X, Y and Z coordinates of a normal vector.
4. Optionally change the view to inspect the model.
5. Press the Close button to close the task panel and finish the command.

## Notes

- To clearly distinguish the interior of partially clipped objects change their View**Lighting** property to `One side`. The color of the interior side of their faces will then depend on the backlight settings: **Edit → Preferences... → Display → 3D View → Backlight color - Intensity**. See [Preferences Editor](/Preferences_Editor#3D_View "Preferences Editor").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleClipPlane/en&oldid=1451168>"
