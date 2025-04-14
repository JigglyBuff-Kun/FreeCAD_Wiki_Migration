---
title: FEM ConstraintDisplacement
---

|                                                                                    |
| ---------------------------------------------------------------------------------- |
| FEM ConstraintDisplacement                                                         |
| Menu location                                                                      |
| Model → Mechanical boundary conditions and loads → Displacement boundary condition |
| Workbenches                                                                        |
| [FEM](/FEM_Workbench "FEM Workbench")                                              |
| Default shortcut                                                                   |
| _None_                                                                             |
| Introduced in version                                                              |
| -                                                                                  |
| See also                                                                           |
| [FEM tutorial](/FEM_tutorial "FEM tutorial")                                       |
|                                                                                    |

| Solvers         |
| --------------- |
| CalculiX, Elmer |

## Description

Creates a FEM boundary condition for a prescribed displacement of a selected object for specified degrees of freedom.

![](/images/FEM_Displacement_dialog.PNG)

The FEM displacement task panel

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ConstraintDisplacement.svg) [Displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement") button
   - Select the **Model → Mechanical boundary conditions and loads → ![](/images/FEM_ConstraintDisplacement.svg) Displacement boundary condition** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the object the boundary condition should be applied to, which can be a vertex, edge, or face (but all the selected objects have to be of the same type). To remove objects from the list, press the Remove button and click on them.
4. Check the boxes next to the degrees of freedom that you want to use. By default, they are set to zero (fixed) but any value ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): or a formula for Elmer) can be specified. Rotations make sense only for beam and shell elements.

## Formulas

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### General

For the ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer "FEM SolverElmer") it is possible to define the displacement as a formula. In this case the solver sets the displacement according to the given formula variable.

Take for example the case that we want to perform a [transient analysis](</FEM_SolverElmer_SolverSettings#Timestepping_(transient_analyses)> "FEM SolverElmer SolverSettings"). For every time step the displacement

d
{\displaystyle d}
![{\displaystyle d}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e85ff03cbe0c7341af6b982e47e9f90d235c66ab) should be increased by 6 mm:

d
(
t
)
=
0.006
⋅
t
{\displaystyle \quad d(t)=0.006\cdot t}
![{\displaystyle \quad d(t)=0.006\cdot t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7bcc928138e413f95a9a6672978e22268e4f2ba1)

enter this in the _Formula_ field:  
 `Variable "time"; Real MATC "0.006*tx"`

This code has the following syntax:

- the prefix _Variable_ specifies that the displacement is not a constant but a variable
- the variable is the current time
- the displacement values are returned as _Real_ (floating point) values
- _MATC_ is a prefix for the Elmer solver indicating that the following code is a formula
- _tx_ is always the name of the variable in _MATC_ formulas, no matter that _tx_ in our case is actually _t_

### Rotations

Elmer only uses the **Displacement \*** fields of the boundary condition. To define rotations, we need a formula.

If for example a face should be rotated according to this condition:

d

x
(
t
)
=

(

cos
⁡
(
ϕ
)
−
1
)
x
−
sin
⁡
(
ϕ
)
y

d

y
(
t
)
=

(

cos
⁡
(
ϕ
)
−
1
)
y

- sin
  ⁡
  (
  ϕ
  )
  x
  {\displaystyle \quad {\begin{aligned}d\_{x}(t)=&\left(\cos(\phi )-1\right)x-\sin(\phi )y\\d\_{y}(t)=&\left(\cos(\phi )-1\right)y+\sin(\phi )x\end{aligned}}}
  ![{\displaystyle \quad {\begin{aligned}d_{x}(t)=&\left(\cos(\phi )-1\right)x-\sin(\phi )y\d_{y}(t)=&\left(\cos(\phi )-1\right)y+\sin(\phi )x\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a56fb2507459d63a0a5373a81fa64998c216e359)

then we need to enter for **Displacement x**  
 `Variable "time, Coordinate"
Real MATC "(cos(tx(0)*pi)-1.0)*tx(1)-sin(tx(0)*pi)*tx(2)`

and for **Displacement y**  
 `Variable "time, Coordinate"
Real MATC "(cos(tx(0)*pi)-1.0)*tx(2)+sin(tx(0)*pi)*tx(1)`

This code has the following syntax:

- we have 4 variables, the time and all possible coordinates (x, y z)
- _tx_ is a vector, _tx(0)_ refers to the first variable, the time, while _tx(1)_ refers to the first coordinate _x_
- _pi_ denotes

  π
  {\displaystyle \pi }
  ![{\displaystyle \pi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/9be4ba0bb8df3af72e90a0535fabcc17431e540a) and was added so that after

  # t

  1

  s
  {\displaystyle t=1{\rm {\,s}}}
  ![{\displaystyle t=1{\rm {,s}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/af783ab669111b914a4a9d4b74e448bfbbb27b9c) a rotation of 180° is performed

## Notes

For the ![](/images/FEM_SolverCalculixCxxtools.svg) [solver CalculiX](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools"):

- This tool uses the [\*BOUNDARY card](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).
- Fixing a degree of freedom is explained at <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node164.html>
- Prescribing a displacement for a degree of freedom is explained at <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node165.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintDisplacement/en&oldid=1568847>"
