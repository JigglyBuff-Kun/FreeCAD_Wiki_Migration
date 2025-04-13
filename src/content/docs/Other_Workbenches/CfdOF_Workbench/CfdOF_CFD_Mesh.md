---
title: CfdOF CFD Mesh
---

:::caution
This documentation is a work in progress. Please don't mark it as translatable since it will change in the next hours and days.
:::

|                                             |
| ------------------------------------------- |
| CfdOF CFD Mesh                              |
| Menu location                               |
| CfdOF → CFD Mesgh‏‎                         |
| Workbenches                                 |
| [CfdOF](/CfdOF_Workbench "CfdOF Workbench") |
| Default shortcut                            |
| _None_                                      |
| Introduced in version                       |
| -                                           |
| See also                                    |
| _None_                                      |
|                                             |

## Description

The CFD Mesh dialogue panel is used to build the mesh from the geometry.

## Usage

Once the [Analysis Container](/CfdOF_Analysis "CfdOF Analysis") has been created, the CFD Mesh dialogue panel can be added to the tree in the following ways:

1. Select the Geometry that you wish to mesh.
2. Both the ![](/src/assets/images/CfdOF_CFD_Mesh.svg) button and the **CfdOF → ![](/src/assets/images/CfdOF_CFD_Mesh.svg) CFD Mesh‏‎** menu option, become available.
3. Click on either the:
   - ![](/src/assets/images/CfdOF_CFD_Mesh.svg) button or,
   * **CfdOF → ![](/src/assets/images/CfdOF_CFD_Mesh.svg) CFD Mesh‏‎** menu option.
4. The CFD Mesh dialogue panel will open.
5. ![](/src/assets/images/CfdOF_CFD_Mesh.svg) **[Geometry Name]\_Mesh** will be created in the tree.

## Options

The dialogue panel offers the following settings:

![CfdOF CFD Mesh Dialog Panel](/src/assets/images/CfdOF_DialogCFDMesh2.png)

CfdOF CFD Mesh Dialog Panel

### Mesh Parameters

**Mesh Utility** dropdown box gives the following options:

- **cfMesh**

: [cfMesh](https://cfmesh.com/cfmesh-open-source/) is an open-source, extensible library for automatic mesh generation. cfMesh supports both 3D and 2D meshes and can generate:

    * Hex dominant 3D meshes
    * Quad dominant 2D meshes
    * Tetrahedral dominant 3D meshes
    * Polyhedral dominant 3D meshes

- **gmsh (tetrahedral)**
- **gmsh (polyhedral)**

: [Gmsh](https://gmsh.info/) is an open source 3D finite element mesh generator.

- **snappyHexMesh**

: [snappyHexMesh](https://doc.cfd.direct/openfoam/user-guide-v11/snappyhexmesh) is an automatic split hex mesher which refines and snaps to surface. It generates 3D meshes containing hexahedra and split-hexahedra from a triangulated surface geometry in Stereolithography (STL) format. snappyHexMesh is used for complex geometries.

**Base element size** input box

: The Base, or Background, Mesh is the initial mesh, without refinement. If left as 0, it will default to 2 % of bounding box characteristic length. e.g. a 10 mm square cube will have boundary box characteristics of (102 + 102 + 102)0.5 of which 2% is 0.35mm.

### snappyHexMesh parameters

The following parameters are only available when the snappyHexMesh Mesh Utility has been selected.

![CfdOF CFD Mesh Dialog Panel snappyHexMesh](/src/assets/images/CfdOF_DialogCFDMesh.png)

CfdOF CFD Mesh Dialog Panel snappyHexMesh

**Point in mesh**

: Enter a location vector inside the region to be meshed, in the form x, y, z. This is used to identify whether the geometry is to be meshed on the outside, as in the case of fluid flowing over a pipe, or the inside, as in fluid flowing through a pipe. The **Search** button will try to locate a position in the region to be meshed.

**No. of cells between levels** & **Relative edge refinement**

: The **base element size** has already been defined above. Volume or surface refinement is achieved by splitting the base cells into 4 quads for 2D or 8 hexes for 3D models. The figure below shows the base cell being split into 4 quads at the first split n=1 and then each new cell being again split into 4 quads on the second spit, n=2.

![CfdOF CFD Mesh Cell Split](/src/assets/images/CfdOF-MeshCellSplit.png)

CfdOF Mesh Cell Split

: The **Relative edge refinement** input box accepts values between 0.001 and 1. It defines the mesh size relative to the starting background mesh. The split can be calculated by 1/(2^n-1) e.g. for n=2, the relative edge refinement value is 0.5.

: To achieve a smooth transition between the split cells, ensure that there are a number of cells between consecutive refinement levels. The **No. of cells between levels** input box accepts integer values above or equal to 1 with a default value of 3.

![Mesh Cell Split with refinement level 2](/src/assets/images/CfdOF_MeshCellSplitn2.png)

Mesh Cell Split with refinement level 2

: The above example has a refinement level of n=2 giving a relative edge refinement of 0.5 with 2 cells between consecutive refinement levels.

**Edge detection**

- **Implicit** snaps to automatically detected surface geometric feature edges.
- **Explicit** snaps to manually generated feature edges.

### Meshing

**Write mesh case** button

: Clicking on the **Write mesh case** creates the mesh files with the progress being displayed in the **Status** box.

**Edit** button

: The **Edit** button opens the directory where the OpenFOAM case files are stored, including the mesh files, generated above, in the constant directory. For more information about these files and directories please visit the UNDER THE HOOD PAGE.

**Run mesher** button

: Clicking on the **Run mesher** button starts the selected mesher process, with the progress being displayed in the **Status** box.

**Stop** button

: Used to stop either the **Write mesh case** or **Run mesher** processes.

### Visualisation

**Paraview** button

: ParaView is an open-source, multi-platform data analysis and visualization application. Clicking on the **Paraview** button opens the mesher, to allow the mesh to be inspected.

**Check Mesh** button

: Clicking on the **Check Mesh** button runs the OpenFOAM checkMesh utility. This checks the validity of a mesh and outputs it’s result in the reports view area in FreeCAD. It’s possible to enlarge this box, by dragging the top of the reports panel up the screen.

**Load surface mesh** button

: Clicking on **Load surface mesh** displays the mesh on the geometry within FreeCad. It only the displays the mesh on the surface of the geometry and not the internals. For a more detailed inspection of the mesh use ParaView.
: Warning! If the message in the **Status** reads:

    :   "Triangulated representation of the surface mesh is shown - Please use Paraview for full mesh visualisation."

: The **Load surface mesh** image displayed is not fully representative of the mesh and you should view the mesh in ParaView.

**Clear** button

: The **Clear** button removes the mesh on the geometry within FreeCad.

**Status** output box

: When clicking **Write mesh case** or **Run mesher**, the progress is displayed in the **Status** output box, together with any error messages.

    * When **Write mesh case** has finished, the last message in the **Status** output box will be 'Mesh case written successfully'.
    * When **Run mesher** has finished, the last message in the **Status** output box will be 'Meshing completed'.

## Notes

Retrieved from "<http://wiki.freecad.org/index.php?title=CfdOF_CFD_Mesh&oldid=1440260>"
