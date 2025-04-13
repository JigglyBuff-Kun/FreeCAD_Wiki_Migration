---
title: Mesh FEM da forma con Netgen
---
|  |
| --- |
| Mesh FEM da forma con Netgen |
| Posizione nel menu |
| FEM → Mesh FEM da forma con Netgen |
| Ambiente |
| [FEM](/FEM_Workbench/it "FEM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it") |
|  |

## Descrizione

For a finite element analysis, the geometry needs to be discretized into a [FEM Mesh](/FEM_Mesh "FEM Mesh"). This command uses [Netgen](https://www.ngsolve.org/) (which needs to be installed on the system) to generate the mesh. Netgen meshes are not supported by [Elmer](/FEM_SolverElmer "FEM SolverElmer").

Depending on your operating system and installation package, Netgen might be bundled with FreeCAD or not. For further information see [FEM Install](/FEM_Install#Netgen "FEM Install").

## Utilizzo

1. Select the shape you want to analyze. For a volume, this needs to be solid or compsolid. A compsolid is necessary if your part is made from multiple materials (a compsolid can be created with the [Part BooleanFragments](/Part_BooleanFragments "Part BooleanFragments") command).
2. There are several ways to invoke the command:
   * Press the ![](/images/FEM_MeshNetgenFromShape.svg) [FEM mesh from shape by Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") button.
   * Select the **Mesh → ![](/images/FEM_MeshGmshFromShape.svg) FEM mesh from shape by Netgen** option from the menu.
3. Optionally, set the max/min element size (the default setting usually creates meshes that are too coarse) and element order (using the *Second Order* checkbox).
4. Optionally, change the *Fineness* to one of the predefined choices or choose *UserDefined* and manually edit the parameters.
5. Click the Apply button to generate the mesh. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Optionally, use the Cancel button to abort meshing if using the new Netgen implementation.
6. Click the OK button to generate the mesh and close the dialogue. You can also click the Cancel button to cancel the changes or creation of the mesh object.

## Properties

* Dati**Max. Size**: Maximum size of the element in mm.
* Dati**Min. Size**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Minimum size of the element in mm.
* Dati**Second order**: Second order elements contain more nodes per element. Usually, it is enough to use rougher mesh to obtain same solution precision as with the first order elements,
  + true (default); second order elements,
  + false; first order elements.
* Dati**Fineness**: Offers predefined levels of mesh density.
* Dati**Growth Rate**: Defines how much adjacent elements can differ in size.
* Dati**Nb. Segs per Edge**: Defines the minimum number of mesh segments per edge.
* Dati**Nb. Segs per Radius**: Defines the minimum number of mesh segments per radius.
* Dati**Optimize**:
  + true (default): applies optimization algorithm to improve mesh quality
  + false

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshNetgenFromShape/it&oldid=1571144>"