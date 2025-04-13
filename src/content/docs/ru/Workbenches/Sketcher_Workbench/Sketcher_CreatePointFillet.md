---
title: Sketcher Скругление с сохранением точки пересечения
---
:::caution
This tool is obsolete, it is not available in1.0 and above. UseSketcher CreateFilletinstead.
:::

|  |
| --- |
| Скругление с сохранением точки пересечения |
| Расположение в меню |
| Sketch → Геометрия эскиза → Создать скругление с сохранением точки пересечения |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| G F P |
| Представлено в версии |
| 0.19 |
| См. также |
| [Создать скругление](/Sketcher_CreateFillet/ru "Sketcher CreateFillet/ru") |
|  |

## Описание

The ![](/images/Sketcher_CreatePointFillet.svg) [Sketcher CreatePointFillet](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet") tool creates a fillet between two non-parallel edges. If two straight edges connected by a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") are filleted, the related common point is preserved by adding a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point onto object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both edges. Constraints connected to the common point are transferred to the new point object. Apart from that this tool is identical to the [Sketcher CreateFillet](/Sketcher_CreateFillet "Sketcher CreateFillet") tool. See there for more information.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_CreatePointFillet.svg) [Corner-preserving sketch fillet](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet") button.
   * Select the **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreatePointFillet.svg) Create corner-preserving fillet** option from the menu.
   * Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_CreatePointFillet.svg) Create corner-preserving fillet** option from the context menu.
   * Use the keyboard shortcut: G then F, then P.
2. For further steps see [Sketcher CreateFillet](/Sketcher_CreateFillet#Usage "Sketcher CreateFillet").

## Notes

See [Sketcher CreateFillet](/Sketcher_CreateFillet#Notes "Sketcher CreateFillet").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreatePointFillet/ru&oldid=1458224>"