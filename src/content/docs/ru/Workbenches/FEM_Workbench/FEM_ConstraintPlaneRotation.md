---
title: FEM Ограничить вращение плоскости
---
|  |
| --- |
| Ограничить вращение плоскости |
| Расположение в меню |
| Модель → Geometrical Constraints → Ограничить вращение плоскости |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Ограничение преобразования](/FEM_ConstraintTransform/ru "FEM ConstraintTransform/ru") |
|  |

## Описание

Создает ограничение FEM для хранения узлов на плоской поверхности в одной плоскости.

## Применение

1. Нажмите на ![](/images/FEM_ConstraintPlaneRotation.png) или выберите Model → **Механические ограничения** → ![](/images/FEM_ConstraintPlaneRotation.png) Вращение плоскости ограничения из верхнего меню.
2. Выберите в [трёхмерном виде](/3D_view/ru "3D view/ru") объект, к которому должно применяться ограничение, которое может быть гранью.

![](/images/FEM_plane_rotation_constraint_example.PNG)

Example of plane multi-point constraint use. Both simply-supported beams are subjected to the same force but the bottom one has plane MPC applied to the green segment of the top face. This forces the nodes there to stay on the same plane and changes the deformation (here scaled).

## Ограничения

1. Ограничение вращения полосы может применяться только к одной плоской грани.
2. Когда ограничение вращения плоскости применяется к той же самой грани, что и смещение / фиксированное ограничение, предпочтение смещения / фиксирования ограничено.

## Примечания

1. Ограничение использует в CalculiX карту \*MPC. Ограничения расчёта теплопередачи описаны в <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node220.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPlaneRotation/ru&oldid=1541609>"