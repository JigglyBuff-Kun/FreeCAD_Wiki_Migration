---
title: Assembly Preferences
---

The preferences for the ![](/images/Workbench_Assembly.svg) [Assembly Workbench](/Assembly_Workbench "Assembly Workbench") can be found in the [Preferences Editor](/Preferences_Editor "Preferences Editor"). In the menu select **Edit → Preferences...** and then **![](/images/Workbench_Assembly.svg) Assembly**. This group is only available if the Assembly Workbench has been loaded in the current FreeCAD session.

There is only one page: General.

![](/images/Preferences_Assembly_Page_General.png)

On this page you can specify the following:

| Name                     | Description                                                                                                                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Esc leaves edit mode** | If checked, pressing the Esc key leaves Assembly edit mode.                                                                                                                                                                                  |
| **Log dragging steps**   | If checked, the dragging steps of the solver are logged. Useful if you want to report a bug. The files are named runPreDrag.asmt and dragging.log and are located in the default directory of `std::ofstream` (on Windows it's the desktop). |
| **Ground first part**    | When you [insert](/Assembly_InsertLink "Assembly InsertLink") the first part in the assembly, you can choose to ground the part automatically. The options are: \* _Ask_ \* _Always_ \* _Never_                                              |

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_Preferences/en&oldid=1478288>"
