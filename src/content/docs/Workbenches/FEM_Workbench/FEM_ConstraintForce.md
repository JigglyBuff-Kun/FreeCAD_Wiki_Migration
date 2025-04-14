---
title: FEM ConstraintForce
---

|                                                                            |
| -------------------------------------------------------------------------- |
| FEM ConstraintForce                                                        |
| Menu location                                                              |
| Model → Mechanical boundary conditions and loads → Force load              |
| Workbenches                                                                |
| [FEM](/FEM_Workbench "FEM Workbench")                                      |
| Default shortcut                                                           |
| _None_                                                                     |
| Introduced in version                                                      |
| -                                                                          |
| See also                                                                   |
| [FEM ConstraintPressure](/FEM_ConstraintPressure "FEM ConstraintPressure") |
|                                                                            |

| Solvers |
| ------- |
| All     |

## Description

Applies a force of a given value [N] to the selected geometry.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_ConstraintForce.svg) [Force load](/FEM_ConstraintForce "FEM ConstraintForce") button.
   - Select the **Model → Mechanical boundary conditions and loads → ![](/images/FEM_ConstraintForce.svg) Force load** option from the menu.
2. The Mesh object will be hidden automatically and reveal the original model. If the Mesh object is still visible, do one of the following to hide it:
   - Select the Mesh object in the [Tree view](/Tree_view "Tree view") and press spacebar.
   - Right-click on the Mesh object in the [Tree view](/Tree_view "Tree view") and select **Hide selection** from its context menu.
3. The **Analysis feature parameters** dialog in the [Task panel](/Task_panel "Task panel") has also been opened.
4. Press the Add button and select one or more of either _faces_, _edges_ or _vertices_ in the [3D view](/3D_view "3D view") to apply the force to. The selected items will appear in the list of geometrical objects.
5. Optionally press the Remove button and deselect one or more of the selected items in the [3D view](/3D_view "3D view"). The deselected items will be removed from the list of geometrical objects.
6. Specify the **Force** value in [N].
7. Optionally select a face or an edge and press the Direction button to change the force direction. In a typical case, you'll leave this field empty to apply the force in the normal direction.
8. Optionally check the **Reverse direction** checkbox to reverse the force direction.
9. Click OK to finish.

![](/images/FEM_ConstraintForce_example.JPG)

## Notes

- The defined force is applied uniformly to the selected objects. For example, if you define one force load with 200 N applied to two faces having the same area, each face will be uniformly loaded with 100 N.
- This feature uses the [\*CLOAD card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node172.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintForce/en&oldid=1568977>"
