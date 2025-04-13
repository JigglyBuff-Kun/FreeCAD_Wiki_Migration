---
title: Arch MeshToShape/ru
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch MeshToShape |
| Расположение в меню |
| Архитектура → Утилиты → Сетка в фигуру |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Arch SplitMesh](/Arch_SplitMesh/ru "Arch SplitMesh/ru"), [Удалить форму из Архитектуры](/Arch_RemoveShape/ru "Arch RemoveShape/ru") |
|  |

## Описание

Этот инструмент преобразует выбранную [сетку](/Mesh_Workbench/ru "Mesh Workbench/ru") в объект типа [Shape](/Part_Workbench/ru "Part Workbench/ru"). Обратите внимание, этот инструмент оптимизирован для объектов с плоскими поверхностями (без кривых). Соответствующий инструмент из [верстака Part](/Part_Workbench/ru "Part Workbench/ru") более подходит для объектов с кривыми поверхностями.

This tool is optimized for objects with flat faces (no curves). The corresponding tool ![](/images/Part_ShapeFromMesh.svg) [Part ShapeFromMesh](/Part_ShapeFromMesh "Part ShapeFromMesh") from the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") might be more suited for objects that contain curved surfaces.

## Использование

1. Select a mesh object.
2. Select the **Utils → ![](/images/Arch_MeshToShape.svg) Mesh to Shape** option from the menu.

## Properties

## Limitations

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

This tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
new_obj = meshToShape(obj, mark=True, fast=True, tol=0.001, flat=False, cut=True)

```

The above code snippet converts the given `obj` (a mesh), into a shape, joining coplanar facets.

* If `mark` is `True`, non-solid objects will be marked in red.
* If `fast` is `True`, it uses a faster algorithm by building a shell from the facets then removing splitter.
* `tol` is the tolerance used when converting mesh segments to wires.
* If `flat` is `True`, it will force the wires to be perfectly planar to be sure they can be converted into faces, but this might leave gaps in the final shell.
* If `cut` is `True`, holes in faces are made by subtraction.

Example:

```
import Arch, Mesh, BuildRegularGeoms

Box = FreeCAD.ActiveDocument.addObject("Mesh::Cube", "Cube")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

new_obj = Arch.meshToShape(Box)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MeshToShape/ru&oldid=1435531>"