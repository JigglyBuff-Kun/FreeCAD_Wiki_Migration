---
title: Referência
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Reference |
| Menu location |
| 3D/BIM → Generic 3D tools → External reference |
| Workbenches |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descrição

The **Arch Reference tool** allows you to place an object in the current document that copies its shape and colors from a [Part](/Part_Workbench "Part Workbench")-based object (including [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart")) stored in another FreeCAD file. If that FreeCAD file changes, the reference object is marked to be reloaded.

![](/images/Arch_reference_screenshot.png)

## Utilização

1. Press the ![](/images/Arch_Reference.svg) [External reference](/Arch_Reference "Arch Reference") button,
2. Press the "Choose file..." button and select an existing FreeCAD file,
3. Select one of the included Part-based objects from the drop-down list,
4. Press **OK**.

## Opções

* The reference object can be moved and rotated, the current position will be retained after reloading the object.
* If the original object gets moved in containing file, this movement will reflect in the reference object.
* By right-clicking a Reference object in the tree view, you have the options to reload the original object, or open the containing file.
* To reference several objects at once, place them inside an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart").
* When turning off the **Update Colors** view property of the Reference, it won't reload the original colors anymore, so you can safely change them.

## Propriedades

* Dados**File**: The base file this component is built upon
* Dados**Part**: The part to use from the base file
* Vista**Update Colors**: If true, the colors from the linked file will be kept updated

## Scripting

The Reference tool can by used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
reference = makeReference([filepath], [partname], [name])

```

Creates a `reference` object named `name` from the object `partname` in the file `filepath`. All arguments are optional.

Example:

```
import Arch
Arch.makeReference("/path/to/some/file.FSCtd", "myPart")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Reference/pt-br&oldid=1481123>"