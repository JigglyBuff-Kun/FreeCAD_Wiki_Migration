---
title: FEM ConstraintFlowVelocity
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| FEM ConstraintFlowVelocity                                                                                 |
| Menu location                                                                                              |
| Model → Fluid boundary conditions → Flow velocity boundary condition                                       |
| Workbenches                                                                                                |
| [FEM](/FEM_Workbench "FEM Workbench")                                                                      |
| Default shortcut                                                                                           |
| _None_                                                                                                     |
| Introduced in version                                                                                      |
| -                                                                                                          |
| See also                                                                                                   |
| [Constraint initial flow velocity](/FEM_ConstraintInitialFlowVelocity "FEM ConstraintInitialFlowVelocity") |
|                                                                                                            |

| Solvers |
| ------- |
| Elmer   |

## Description

Applies a flow velocity as boundary condition to an edge in 2D or to a face in 3D.

![](/src/assets/images/FEM_FlowVelocity_dialog.png)

The FEM flow velocity task panel

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_ConstraintFlowVelocity.svg) [Flow velocity boundary condition](/FEM_ConstraintFlowVelocity "FEM ConstraintFlowVelocity") button.
   - Select the **Model → Fluid boundary conditions → ![](/src/assets/images/FEM_ConstraintFlowVelocity.svg) Flow velocity boundary condition** option from the menu.
2. Press the Add button.
3. Select the target Edges or Faces.
4. Uncheck _unspecified_ to activate the necessary fields for editing.
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

enter this to the _Formula_ field:  
 `Variable Coordinate 2; Real MATC "6*(tx-1)*(2-tx)"`

This code has the following syntax:

- the prefix _Variable_ specifies that the velocity is not a constant but a variable
- the variable to calculate the velocity is _Coordinate 2_, meaning y
- the velocity values are returned as _Real_ (floating point value)
- _MATC_ is the prefix for the Elmer solver that the following code is a formula
- _tx_ is always the name of the variable in _MATC_ formulas, no matter that _tx_ in our case is actually _y_

That _y_ will only be in the range

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4) is set because _MATC_ only evaluates the _tx_ range where the result is positive. This behavior is a bit special but has the advantage that one does not need to specify the range manually.

It is also possible to use more than one variable. See as example the definition of rotations in the [displacement constraint](/FEM_ConstraintDisplacement#Rotations "FEM ConstraintDisplacement").

## Notes

- Any vector component that should be the result of the solver must be set as _Unspecified_.
- If the target face or edge is not aligned with the main Cartesian coordinate system, it is possible to set the option **Normal to boundary**.

  : If **Normal to boundary** is checked, the normal vector to the selected edge or face is X and it will be oriented away from the mesh domain.
  : For example, if a flow of 20 mm/s of air should enter the domain, then with **Normal to boundary** one must input -20 mm/s in the _Velocity x_ field.

- For a wall with non-slip condition, set all velocity components to 0.
- For a symmetry condition, set the the flow to (0, Unspecified, Unspecified) if **Normal to boundary** is checked.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFlowVelocity/en&oldid=1568956>"
