---
title: Std Edit
---

|                                                          |
| -------------------------------------------------------- |
| Std Edit                                                 |
| Menu location                                            |
| Edit → Toggle Edit mode                                  |
| Workbenches                                              |
| All                                                      |
| Default shortcut                                         |
| _None_                                                   |
| Introduced in version                                    |
| -                                                        |
| See also                                                 |
| [Std UserEditMode](/Std_UserEditMode "Std UserEditMode") |
|                                                          |

## Description

The **Std Edit** command activates or deactivates an object's edit mode.

## Usage

1. If no object is in edit mode: select a single object.
2. Select the **Edit → ![](/images/Std_Edit.svg) Toggle Edit mode** option from the menu.
3. Either the default edit mode of the selected object is activated or the existing edit mode deactivated.

## Notes

- Some tools will be disabled (greyed-out) in the user interface while an object's edit mode is active.
- Not all object types have an edit mode.
- The functionality available in edit mode depends on the object type.
- An object's edit mode can also be activated by double-clicking it in the [Tree view](/Tree_view "Tree view"). In that case the edit mode that is used can be defined with the [Std UserEditMode](/Std_UserEditMode "Std UserEditMode") command.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To activate an object's edit mode use the `setEdit` method of the document object. This method is not available if FreeCAD is in console mode.

```
import FreeCADGui

FreeCADGui.ActiveDocument.setEdit("myObjectName",0)

```

The second argument is the EditMode. The following options are available:

```
0 = Default
1 = Transform
2 = Cutting
3 = Color

```

To deactivate an object's edit mode use the `resetEdit` method of the document object.

```
import FreeCADGui

FreeCADGui.ActiveDocument.resetEdit()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Edit/en&oldid=1496354>"
