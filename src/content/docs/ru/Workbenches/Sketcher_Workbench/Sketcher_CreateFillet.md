---
title: Sketcher Скругление
---
|  |
| --- |
| Скругление |
| Расположение в меню |
| Sketch → Геометрия эскиза → Создать скругление |
| Верстаки |
| [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") |
| Быстрые клавиши |
| G F F |
| Представлено в версии |
| - |
| См. также |
| [Создать скругление с сохранением точки пересечения](/Sketcher_CreatePointFillet/ru "Sketcher CreatePointFillet/ru") |
|  |

## Описание

Данный инструмент создает скругление между двумя линиями, соединенными в одной точке.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If two straight edges connected by a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") are filleted or chamfered, the corner point can optionally be preserved. The tool then adds a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both edges. Constraints connected to the corner point are transferred to the new point object.

![](/images/SketcherCreateFilletExample.png)

## Применение

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

* Выберите вершину, соединяющую две линии; или нажмите на две соединенные линии, расстояние от вершины, на котором вы нажмете, установит радиус сопряжения.
* Нажатие Esc или правой кнопки мыши закрывает функцию.

## Notes

* The construction geometry arc of a chamfer is not visible outside the sketch. It cannot be deleted without breaking the geometry of the chamfer.
* Some ([conic](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench")) curves may need to be [trimmed](/Sketcher_Trimming "Sketcher Trimming") before they can be filleted.
* The fillet radius depends on the selection method. If a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") connecting two straight edges is selected, the fillet radius is derived from the length of the shortest edge. If two edges are selected the radius is the distance from the first clicked point to the (extended) intersection of the edges.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateFillet/ru&oldid=1410016>"