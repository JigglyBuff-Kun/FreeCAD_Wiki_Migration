---
title: FEM ConstraintPressure
---

|                                                                    |
| ------------------------------------------------------------------ |
| FEM ConstraintPressure                                             |
| Menu location                                                      |
| Model → Mechanical boundary conditions and loads → Pressure load   |
| Workbenches                                                        |
| [FEM](/FEM_Workbench "FEM Workbench")                              |
| Default shortcut                                                   |
| _None_                                                             |
| Introduced in version                                              |
| -                                                                  |
| See also                                                           |
| [FEM Constraint force](/FEM_ConstraintForce "FEM ConstraintForce") |
|                                                                    |

| Solvers         |
| --------------- |
| CalculiX, Elmer |

## Description

Applies a pressure load to a face.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_ConstraintPressure.svg) [Pressure load](/FEM_ConstraintPressure "FEM ConstraintPressure") button.
   - Select the **Model → Mechanical boundary conditions and loads → ![](/src/assets/images/FEM_ConstraintPressure.svg) Pressure load** option from the menu.
2. Press the Add button and select face(s) in the [3D view](/3D_view "3D view"). Optionally press the Remove and click on the faces that you want to remove from the selection.
3. Edit the appropriate window to specify the pressure load in MPa.
4. Tick the box to reverse the direction if necessary.

![](/src/assets/images/FEM_Pressure_example.PNG)

Pressure load applied to a cylinder

## Notes

- Distribution of the pressure on a face is always uniform and always perpendicular to the face.

- 0.21 and below: Pressure load can be applied to shells but only when [Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") is used for meshing and group meshing is set to true. It is hardcoded as true so the user doesn't have to worry about that. However, due to a bug, pressure load may require remeshing to work on shells.
- This feature uses the [\*DLOAD card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node190.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPressure/en&oldid=1543424>"
