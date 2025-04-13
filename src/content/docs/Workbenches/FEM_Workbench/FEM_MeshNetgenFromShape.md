---
title: FEM MeshNetgenFromShape
---

|                                              |
| -------------------------------------------- |
| FEM MeshNetgenFromShape                      |
| Menu location                                |
| Mesh → FEM mesh from shape by Netgen         |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

| Solvers                |
| ---------------------- |
| CalculiX, Mystran, Z88 |

## Description

For a finite element analysis, the geometry needs to be discretized into a [FEM Mesh](/FEM_Mesh "FEM Mesh"). This command uses [Netgen](https://www.ngsolve.org/) (which needs to be installed on the system) to generate the mesh. Netgen meshes are not supported by [Elmer](/FEM_SolverElmer "FEM SolverElmer").

Depending on your operating system and installation package, Netgen might be bundled with FreeCAD or not. For further information see [FEM Install](/FEM_Install#Netgen "FEM Install").

## Usage

1. Select the shape you want to analyze. For a volume, this needs to be solid or compsolid. A compsolid is necessary if your part is made from multiple materials (a compsolid can be created with the [Part BooleanFragments](/Part_BooleanFragments "Part BooleanFragments") command).
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FEM_MeshNetgenFromShape.svg) [FEM mesh from shape by Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") button.
   - Select the **Mesh → ![](/src/assets/images/FEM_MeshGmshFromShape.svg) FEM mesh from shape by Netgen** option from the menu.
3. Optionally, set the max/min element size (the default setting usually creates meshes that are too coarse) and element order (using the _Second Order_ checkbox).
4. Optionally, change the _Fineness_ to one of the predefined choices or choose _UserDefined_ and manually edit the parameters.
5. Click the Apply button to generate the mesh. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Optionally, use the Cancel button to abort meshing if using the new Netgen implementation.
6. Click the OK button to generate the mesh and close the dialogue. You can also click the Cancel button to cancel the changes or creation of the mesh object.

## Properties

- Data**Max. Size**: Maximum size of the element in mm.
- Data**Min. Size**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Minimum size of the element in mm.
- Data**Second order**: Second order elements contain more nodes per element. Usually, it is enough to use rougher mesh to obtain same solution precision as with the first order elements,
  - true (default); second order elements,
  - false; first order elements.
- Data**Fineness**: Offers predefined levels of mesh density.
- Data**Growth Rate**: Defines how much adjacent elements can differ in size.
- Data**Nb. Segs per Edge**: Defines the minimum number of mesh segments per edge.
- Data**Nb. Segs per Radius**: Defines the minimum number of mesh segments per radius.
- Data**Optimize**:
  - true (default): applies optimization algorithm to improve mesh quality
  - false

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshNetgenFromShape/en&oldid=1571145>"
