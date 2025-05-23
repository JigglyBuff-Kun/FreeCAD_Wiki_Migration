---
title: Arch Reference/hr
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Reference |
| Lokacija izbornika |
| Arch → Reference |
| Radni stolovi |
| [Arch](/Arch_Workbench "Arch Workbench") |
| Zadani prečac |
| *Egyik sem* |
| Bemutatták verzióban |
| - |
| Vidi također |
| [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") |
|  |

## Description

The **Arch Reference tool** allows you to place an object in the current document that copies its shape and colors from a [Part](/Part_Workbench "Part Workbench")-based object (including [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart")) stored in another FreeCAD file. If that FreeCAD file changes, the reference object is marked to be reloaded.

![](/images/Arch_reference_screenshot.png)

## Usage

1. Press the ![](/images/Arch_Reference.svg) [External reference](/Arch_Reference "Arch Reference") button,
2. Press the "Choose file..." button and select an existing FreeCAD file,
3. Select one of the included Part-based objects from the drop-down list,
4. Press **OK**.

## Options

* The reference object can be moved and rotated, the current position will be retained after reloading the object.
* If the original object gets moved in containing file, this movement will reflect in the reference object.
* By right-clicking a Reference object in the tree view, you have the options to reload the original object, or open the containing file.
* To reference several objects at once, place them inside an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart").
* When turning off the **Update Colors** view property of the Reference, it won't reload the original colors anymore, so you can safely change them.

## Properties

* Podaci**File**: The base file this component is built upon
* Podaci**Part**: The part to use from the base file
* Pregled**Update Colors**: If true, the colors from the linked file will be kept updated

## Scripting

The Reference tool can by used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
reference = makeReference([filepath], [partname], [name])

```

Creates a `reference` object named `name` from the object `partname` in the file `filepath`. All arguments are optional.

Primjer:

```
import Arch
Arch.makeReference("/path/to/some/file.FSCtd", "myPart")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Reference/hr&oldid=1481119>"