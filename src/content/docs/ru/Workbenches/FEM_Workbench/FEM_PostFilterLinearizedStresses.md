---
title: FEM PostFilterLinearizedStresses/ru
---
|  |
| --- |
| FEM PostCreateLinearizedStressesFilter |
| Расположение в меню |
| Results → Linearized stresses filter |
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

Creates a stress linearization plot.

To learn more about stress linearization plots, you can read [this description](https://www.graspengineering.com/what-is-stress-linearization/).

![](/images/FEM_Stress-Linearization-Plot-Example.png)

A stress linearization plot.

## Применение

1. Select a previously created [Line clip filter](/FEM_PostFilterDataAlongLine "FEM PostFilterDataAlongLine") with one of the following stress quantities plotted:
   * Von Mises,
   * Tresca,
   * Major principal,
   * Intermediate principal,
   * Minor principal,
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Stress xx component,
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Stress xy component,
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Stress xz component,
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Stress yy component,
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Stress yz component,
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Stress zz component.
2. There are several ways to invoke the command:
   * Press the ![](/images/FEM_PostFilterLinearizedStresses.svg) [Stress linearization plot](/FEM_PostFilterLinearizedStresses "FEM PostFilterLinearizedStresses") button.
   * Select the **Results → ![](/images/FEM_PostFilterLinearizedStresses.svg) Stress linearization plot** option from the menu.
3. An XY plot with linearized stress values (membrane, membrane+bending and total) along the line will be created in a separate window. The stress quantity plotted in the Line clip filter will be used for linearized stresses computation.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterLinearizedStresses/ru&oldid=1569287>"