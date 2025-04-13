---
title: Draft SubelementHighlight
---

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| Draft SubelementHighlight                                                                                                       |
| Menu location                                                                                                                   |
| Modification → Subelement highlight                                                                                             |
| Workbenches                                                                                                                     |
| [Draft](/Draft_Workbench "Draft Workbench")                                                                                     |
| Default shortcut                                                                                                                |
| H S                                                                                                                             |
| Introduced in version                                                                                                           |
| 0.19                                                                                                                            |
| See also                                                                                                                        |
| [Draft Move](/Draft_Move "Draft Move"), [Draft Rotate](/Draft_Rotate "Draft Rotate"), [Draft Scale](/Draft_Scale "Draft Scale") |
|                                                                                                                                 |

## Description

The ![](/src/assets/images/Draft_SubelementHighlight.svg) **Draft SubelementHighlight** command temporarily highlights selected objects, or the base objects of selected objects. It is intended to be used in conjunction with the subelement mode of the [Draft Move](/Draft_Move "Draft Move") command, the [Draft Rotate](/Draft_Rotate "Draft Rotate") command or the [Draft Scale](/Draft_Scale "Draft Scale") command. Currently subelement mode only works properly for [Draft Lines](/Draft_Line "Draft Line") and [Draft Wires](/Draft_Wire "Draft Wire").

![](/src/assets/images/Draft_SubelementHighlight_example.png)

An Arch Wall whose base, a Draft Wire, has been highlighted

## Usage

1. Optionally select one or more [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire"), or objects whose Data**Base** objects are [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire").
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Draft_SubelementHighlight.svg) [Subelement highlight](/Draft_SubelementHighlight "Draft SubelementHighlight") button.
   - Select the **Modification → ![](/src/assets/images/Draft_SubelementHighlight.svg) Subelement highlight** option from the menu.
   - Use the keyboard shortcut: H then S.
3. If you have not yet selected an object: select an object in the [3D view](/3D_view "3D view").
4. The selected objects are made visible (if required), their View**Line Color** and View**Point Color** are changed to red, and their View**Point Size** is changed to `10`.
5. It is advisable to now deselect the existing selection, for example by clicking a random point in the [3D view](/3D_view "3D view").
6. Select one or more subelements, edges or points, of the objects that have been marked in red.
7. Invoke [Draft Move](/Draft_Move "Draft Move"), [Draft Rotate](/Draft_Rotate "Draft Rotate") or [Draft Scale](/Draft_Scale "Draft Scale").
8. Toggle subelement mode in the task panel of that command by checking the **Modify subelements** checkbox.
9. Modify the selected sublements and complete the Draft modify command.
10. Press Esc to revert the temporary visual changes of the objects.

## Notes

- If objects have been highlighted with this command the temporary visual changes should be reverted before saving and reopening the file.
- Highlighted objects should not be copied if subelement mode is off. The temporary visual changes cannot be reverted for copies created in this manner.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SubelementHighlight/en&oldid=1456741>"
