---
title: FEM Граничное условие скорости потока
---
|  |
| --- |
| FEM ConstraintFlowVelocity |
| Расположение в меню |
| Model → Fluid constraints → Constraint flow velocity |
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

Устанавливает скорость потока в качестве граничного условия к ребру в 2D или к грани в 3D.

![](/images/FEM_FlowVelocity_dialog.png)

The FEM flow velocity task panel

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintFlowVelocity.svg) [Flow velocity boundary condition](/FEM_ConstraintFlowVelocity "FEM ConstraintFlowVelocity") button.
   * Select the **Model → Fluid boundary conditions → ![](/images/FEM_ConstraintFlowVelocity.svg) Flow velocity boundary condition** option from the menu.
2. Press the Add button.
3. Select the target Edges or Faces.
4. Uncheck *unspecified* to activate the necessary fields for editing.
5. Set the velocity values or ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) specify a formula.

## Formulas

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

It is possible to define a velocity by specifying the velocity profile as formula. In this case the solver sets the velocities at the different positions according to the profile.

To specify for example the velocity profile

v

x
(
y
)
=
6

(

y
−
1
)

(

2
−
y
)
{\displaystyle \quad v\_{x}(y)=6\left(y-1\right)\left(2-y\right)}
![{\displaystyle \quad v_{x}(y)=6\left(y-1\right)\left(2-y\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2fe4cb7c84745bf581b03f0a56f6fa9d98b26efa)

for 

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4) (assuming that e.g. a pipe has the wall at y = 1 m and y = 2 m)

enter this to the *Formula* field:  
 `Variable Coordinate 2; Real MATC "6*(tx-1)*(2-tx)"`

This code has the following syntax:

* the prefix *Variable* specifies that the velocity is not a constant but a variable
* the variable to calculate the velocity is *Coordinate 2*, meaning y
* the velocity values are returned as *Real* (floating point value)
* *MATC* is the prefix for the Elmer solver that the following code is a formula
* *tx* is always the name of the variable in *MATC* formulas, no matter that *tx* in our case is actually *y*

That *y* will only be in the range 

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4) is set because *MATC* only evaluates the *tx* range where the result is positive. This behavior is a bit special but has the advantage that one does not need to specify the range manually.

It is also possible to use more than one variable. See as example the definition of rotations in the [displacement constraint](/FEM_ConstraintDisplacement#Rotations "FEM ConstraintDisplacement").

## Примечания

* Компоненты вектора, отмеченные как *не указана*, будут интерполированы выбранным решателем.

  :   Любой вектор, который должен быть результатом решателя, должен быть помечен как *не указана*.
* Если целевая грань или ребро не выровнены с основной декартовой системой координат, можно поставить галочку *нормаль к границе*.

  :   Если установлен флажок *нормаль к границе*, вектор нормали к выбранному ребру или грани равен X, и он будет ориентирован от области сетки.
  :   Например, если в домен должен поступать поток воздуха со скоростью 20 мм/с, то после отметки *нормаль к границе* пользователь должен будет ввести -20 мм/с в поле *скорость X*.

* For a wall with non-slip condition, set all velocity components to 0.
* For a symmetry condition, set the the flow to (0, Unspecified, Unspecified) if **Normal to boundary** is checked.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFlowVelocity/ru&oldid=1568957>"