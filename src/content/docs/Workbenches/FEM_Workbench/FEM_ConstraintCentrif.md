---
title: FEM ConstraintCentrif
---

|                                                                     |
| ------------------------------------------------------------------- |
| FEM ConstraintCentrif                                               |
| Menu location                                                       |
| Model → Mechanical boundary conditions and loads → Centrifugal load |
| Workbenches                                                         |
| [FEM](/FEM_Workbench "FEM Workbench")                               |
| Default shortcut                                                    |
| _None_                                                              |
| Introduced in version                                               |
| 0.20                                                                |
| See also                                                            |
| _None_                                                              |
|                                                                     |

| Solvers  |
| -------- |
| CalculiX |

## Description

Defines a centrifugal force body load.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ConstraintCentrif.svg) [Centrifugal load](/FEM_ConstraintCentrif "FEM ConstraintCentrif") button.
   - Select the **Model → Mechanical boundary conditions and loads → ![](/images/FEM_ConstraintCentrif.svg) Centrifugal load** option from the menu.
2. Specify the rotation frequency in Hz.
3. Click on Add in **Geometry reference selector for a Solid** window and select a solid to which the load will be applied in the [3D view](/3D_view "3D view").
4. Click on Add in **Geometry reference selector for a Edge** window and select an edge about which the rotation will occur in the [3D view](/3D_view "3D view").

## Notes

- This feature uses the [\*DLOAD card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node190.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintCentrif/en&oldid=1531309>"
