---
title: FEM Толщина листовой оболочки
---
|  |
| --- |
| FEM ElementGeometry2D |
| Расположение в меню |
| Model →Shell plate tickness |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| C S |
| Представлено в версии |
| - |
| См. также |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Описание

ElementGeometry2D используется для определения толщины двумерных элементов МКЭ, всех или лежащих на выбранной поверхности.

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ElementGeometry2D.svg) [Shell plate thickness](/FEM_ElementGeometry2D "FEM ElementGeometry2D") button.
   * Select the **Model → Element Geometry → ![](/images/FEM_ElementGeometry2D.svg) Shell plate thickness** option from the menu.
2. Specify the shell thickness.
3. Optionally press the Add button in the task panel and then click on the face you want to have a prescribed thickness. If the face selection is empty, all the remaining faces (whose thickness is not defined by other [FEM ElementGeometry2D](/FEM_ElementGeometry2D "FEM ElementGeometry2D") objects) will be automatically assigned.

## Ограничения

* Анализ, объединяющий элементы оболочки с твердотельными или краевыми элементами, не поддерживается в текущей версии (FreeCAD 0.18).

## Свойства

Данные**Thickness**: specifies the thickness of the 2D elements.

## Примечания

* For viewing results from CalculiX solver on the mesh expanded to the prescribed thickness, the property `Beam Shell Result Output 3D` in the [FEM SolverCalculixCxxtools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") needs to be set to `True`. To just visualize the defined thicknesses before running actual calculations, one may run a *check* type analysis with this property set to `True`.
* This feature uses the [\*SHELL SECTION card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node238.html) for shell elements and [\*SOLID SECTION card](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node239.html) for plane stress/strain elements.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementGeometry2D/ru&oldid=1544164>"