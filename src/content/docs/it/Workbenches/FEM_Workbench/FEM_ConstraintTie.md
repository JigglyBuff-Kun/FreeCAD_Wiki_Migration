---
title: FEM Legame di vincolo
---
|  |
| --- |
| FEM ConstraintTie |
| Menu location |
| Model → Mechanical boundary conditions and loads → Tie constraint |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| [FEM Constraint pressure](/FEM_ConstraintPressure "FEM ConstraintPressure") |
|  |

| Solvers |
| --- |
| CalculiX |

## Description

Defines a tie constraint that connects the two selected surfaces in such a way that (as opposed to how contact works) they can't separate or slide on each other throughout the analysis. Thus, the surfaces remain permanently bonded all the time.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Can be also used to define cyclic symmetry.

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintTie.svg) [Tie constraint](/FEM_ConstraintTie "FEM ConstraintTie") button.
   * Select the **Model → Mechanical boundary conditions and loads → ![](/images/FEM_ConstraintTie.svg) Tie constraint** option from the menu.
2. Press the Add button in the task panel and then click on the face you want to add to tie constraint definition. Exactly two faces have to be added, one after the other. The first selected face will be the slave face while the second one will be the master face.
3. Optionally define *Tolerance* - tie constraint will be applied only to slave surface nodes separated from the master surface by a distance not larger than the one specified here.
4. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Optionally check the *Enable Adjust* box to allow the slave surface nodes to be automatically moved to lie on the master surface if they are involved in the constraint (i.e. meet the tolerance criterion).

![](/images/FEM_tie_constraint_example_no_adjust.png)

Two halves of a beam connected with tie constraint with non-default tolerance accounting for the gap.

![](/images/FEM_tie_constraint_example_adjust.png)

The same example from above with adjustment enabled - nodes are moved to close the gap.

## Cyclic symmetry

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Tie constraint can also be used to define cyclic symmetry. This allows the models exhibiting rotational periodic symmetry (repetitive circular patterns around a symmetry axis) to be analyzed using just a single representative sector. It can be particularly useful for rotors, shafts, turbines, fans, flywheels and similar parts, often in combination with [centrifugal load](/FEM_ConstraintCentrif "FEM ConstraintCentrif") (loading must also exhibit this form of symmetry).
Cyclic symmetry can be defined by selecting the two faces of the cut for tie constraint and setting the following properties:

* Dati**Cyclic Symmetry**: setting to *true* activates cyclic symmetry
* Dati**Sectors**: total number of sectors, equal to 360° divided by the angle of the representative sector (e.g. 8 for 45° sector or 6 for 60° sector)
* Dati**Connected Sectors**: number of sectors displayed in results, set it to the same number as Dati**Sectors** if you want to visualize the whole 360° part
* Dati**Symmetry Axis** - axis of cyclic symmetry - global Z axis by default, can be moved by applying the Placement transformation to the Z versor (similar to what can be done with [Part Lines](/Part_Line "Part Line") - to understand how to move the symmetry axis, it might in fact be helpful to change the Placement of Part Line which is usually needed for centrifugal load anyway).

One important limitation of this feature in FEM is that boundary conditions can't be applied to the nodes of the slave surface of cyclic symmetry (slave surface in tie constraint definition) since that would cause an overconstraint. So in some cases, it might be necessary to remove the nodes lying on the edge between the face with the boundary condition and the slave surface of cyclic symmetry from the boundary condition definition. Unfortunately, FreeCAD doesn't operate on node sets and individual nodes can't be deselected so one would have to use workarounds like adding a narrow [face partition](/FEM_Geometry_Preparation_and_Meshing#Geometry_partitioning "FEM Geometry Preparation and Meshing") as a transition between the slave surface and the surface with the boundary condition.

## Notes

* Just like [contact](/FEM_ConstraintContact "FEM ConstraintContact"), this constraint requires at least a small gap between the parts. Otherwise, the mesh will be continuous and thus there will be no need for tie constraint.
* This feature uses the [\*TIE card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node251.html).
* [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Cyclic symmetry also uses the [\*CYCLIC SYMMETRY MODEL card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node183.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTie/it&oldid=1549353>"