---
title: Draft Downgrade
---

|                                                                                    |
| ---------------------------------------------------------------------------------- |
| Draft Downgrade                                                                    |
| Menu location                                                                      |
| Modification → Downgrade Modify → Downgrade                                        |
| Workbenches                                                                        |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                                                                   |
| D N                                                                                |
| Introduced in version                                                              |
| -                                                                                  |
| See also                                                                           |
| [Draft Upgrade](/Draft_Upgrade "Draft Upgrade"), [Part Cut](/Part_Cut "Part Cut")  |
|                                                                                    |

## Description

The ![](/images/Draft_Downgrade.svg) **Draft Downgrade** command downgrades selected objects. The result depends on the number of selected objects and their type. The command can for example deconstruct a 3D solid into separate faces and a wire into separate edges. If two face are selected a [Part Cut](/Part_Cut "Part Cut") object is created from them. Note that not all objects can be downgraded. This command is the counterpart of the [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") command.

![](/images/Draft_Downgrade_example.jpg)

Two overlapping faces are downgraded to a Part Cut object, which is downgraded to a face. That face is then downgraded to a closed wire, which is finally downgraded to separate edges.

## Usage

1. Optionally select one or more objects.
2. There are several ways to invoke the command:
   - Press the ![](/images/Draft_Downgrade.svg) [Downgrade](/Draft_Downgrade "Draft Downgrade") button.
   - [Draft](/Draft_Workbench "Draft Workbench"): Select the **Modification → ![](/images/Draft_Downgrade.svg) Downgrade** option from the menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Modify → ![](/images/Draft_Downgrade.svg) Downgrade** option from the menu.
   - Use the keyboard shortcut: D then N.
3. If you have not yet selected an object: select an object in the [3D view](/3D_view "3D view").

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To downgrade objects use the `downgrade` method of the Draft module.

```
downgrade_list = downgrade(objects, delete=False, force=None)

```

- `objects` contains the objects to be downgraded. It is either a single object or a list of objects.
- If `delete` is `True` the source objects are deleted.
- `force` forces a certain way of downgrading by calling a specific internal function. It can be: `"explode"`, `"shapify"`, `"subtr"`, `"splitFaces"`, `"cut2"`, `"getWire"`, `"splitWires"` or `"splitCompounds"`.
- `downgrade_list` is returned. It is a list containing two lists: a list of new objects and a list of objects to be deleted. If `delete` is `True` the second list is empty.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle = Draft.make_circle(1000)
rectangle = Draft.make_rectangle(2000, 800)
doc.recompute()

add_list1, delete_list1 = Draft.upgrade([circle, rectangle], delete=True)

compound = add_list1[0]
add_list2, delete_list2 = Draft.downgrade(compound, delete=False)
face = add_list2[0]
add_list3, delete_list3 = Draft.downgrade(face, delete=False)

box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 800
box.Height = 1000

add_list4, delete_list4 = Draft.downgrade(box, delete=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Downgrade/en&oldid=1474623>"
