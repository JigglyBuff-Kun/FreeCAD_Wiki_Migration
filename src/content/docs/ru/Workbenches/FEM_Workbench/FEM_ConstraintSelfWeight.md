---
title: FEM ConstraintSelfWeight
---
|  |
| --- |
| FEM ConstraintSelfWeight |
| Расположение в меню |
| FEM → Constraint self weight |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| C,W |
| Представлено в версии |
| - |
| См. также |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Описание

Defines a gravity acceleration acting on the whole model in the prescribed direction.

0.21 and below: The acceleration has a fixed value of 9.81 m/s^2.

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintSelfWeight.svg) [Gravity load](/FEM_ConstraintSelfWeight "FEM ConstraintSelfWeight") button.
   * Select the **Model → Mechanical boundary conditions and loads → ![](/images/FEM_ConstraintSelfWeight.svg) Gravity load** option from the menu.
2. A **ConstraintSelfWeight** object is created.
3. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Optionally change its Данные**Gravity Acceleration** property.
4. Optionally change its Данные**Gravity Direction** property.

## Программирование

New object:

```
import ObjectsFem
ObjectsFem.makeConstraintSelfWeight(name)

```

Add object to the analysis named Analysis:

```
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [(object)]

```

Пример:

```
import ObjectsFem
selfweight_obj = ObjectsFem.makeConstraintSelfWeight("MySelfWeightObject")
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [selfweight_obj]

```

## Решатель CalculiX

### Limitations

* 0.21 and below: You need to modify the .inp file to edit gravity acceleration.
* Self-weight is applied to the element set Eall which includes the whole model.

### Editing CalculiX input file

The acceleration constant can be manually edited after generating the CalculiX input file.

Example of lines in the .inp file:

```
*DLOAD
Eall,GRAV,9810,0.0,0.0,-1.0

```

where 9810 is a gravity acceleration magnitude in [mm/s^2], and 0,0,-1 is the direction vector. The value can be set as a multiple of standard gravity acceleration to simulate loading of e.g. 4g.

## Решатель Z88

* Currently, not implemented in the Z88 solver.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSelfWeight/ru&oldid=1532551>"