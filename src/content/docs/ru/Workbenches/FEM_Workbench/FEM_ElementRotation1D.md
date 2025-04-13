---
title: FEM Вращение балки
---
|  |
| --- |
| FEM ElementRotation1D |
| Расположение в меню |
| Model → Element Geometry → Beam rotation |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Описание

**ElementRotation1D** применяется для поворота профиля балки вокруг оси элементов балки.

## Применение

1. Существует несколько способов вызова команды
   * Нажмите ![](/images/FEM_ElementRotation1D.svg) FEM ElementRotation1D button.
   * Выберите в меню опцию **Model → Element Geometry → ![](/images/FEM_ElementRotation1D.svg) Beam rotation**.
2. Укажите угол, на который должен быть повернут профиль балки.

![](/images/FEM_beam_no_rotation.png)

No rotation, default orientation - local axis 1 aligned with the global Y axis (green)

![](/images/FEM_beam_rotation.png)

90 degree rotation

## Свойства

Данные**Rotation**: specifies the angle of rotation.

## Ограничения

* Currently, multiple rotations are not supported (a single rotation is applied to all beams in the model).

## Примечания

* To visualize the rotated cross-section it is necessary to set `Beam Shell Result Output 3D` in the [FEM SolverCalculixCxxtools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") to `True` and run the analysis.
* This feature uses the [\*BEAM SECTION card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node162.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementRotation1D/ru&oldid=1531329>"