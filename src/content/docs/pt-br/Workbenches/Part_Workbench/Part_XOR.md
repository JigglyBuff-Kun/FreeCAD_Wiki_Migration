---
title: XOR
---

|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Part XOR                                                                                                                                                                                                                             |
| Menu location                                                                                                                                                                                                                        |
| Part → Split → Boolean XOR                                                                                                                                                                                                           |
| Workbenches                                                                                                                                                                                                                          |
| [Part](/Part_Workbench "Part Workbench")                                                                                                                                                                                             |
| Default shortcut                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                               |
| Introduced in version                                                                                                                                                                                                                |
| 0.17                                                                                                                                                                                                                                 |
| See also                                                                                                                                                                                                                             |
| [Part Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments"), [Part Slice](/Part_Slice "Part Slice"), [Part Join features](/Part_CompJoinFeatures "Part CompJoinFeatures"), [Part Boolean](/Part_Boolean "Part Boolean") |
|                                                                                                                                                                                                                                      |

## Description

The ![](/images/Part_XOR.svg) **Part XOR** command removes geometry shared by an even number of objects and leaves a void space between the involved objects. For two objects it represents a symmetric version of [Part Cut](/Part_Cut "Part Cut").

![](/images/Part_XOR-01.png) ![](/images/Button_right.svg)
![](/images/Part_XOR-02.png)

Three overlapping objects → Result object

## Usage

1. Select two or more objects. It is also possible to select a [Part Compound](/Part_Compound "Part Compound") containing two or more objects.
2. There are several ways to invoke the command:
   - Select the **Part → Split → ![](/images/Part_XOR.svg) Boolean XOR** option from the menu.
   - Press the ![](/images/Part_XOR.svg) [Boolean XOR](/Part_XOR "Part XOR") button.

## Notes

- Void spaces are hard to detect if the selected objects do not have co-planar faces. To verify the XOR result the [Std ToggleClipPlane](/Std_ToggleClipPlane "Std ToggleClipPlane") can then be used.

## Properties

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_XOR/pt-br&oldid=1466750>"
