---
title: FEM MeshGroup
---

|                                              |
| -------------------------------------------- |
| FEM MeshGroup                                |
| Menu location                                |
| Mesh → FEM mesh group                        |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| _None_                                       |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Description

The **FEM MeshGroup** command enables the user to create groups of Vertices, Edges, Surfaces and elements. It is useful in case of using FreeCAD as a pre-processor to export an organized and labeled mesh. The mesh is then usable by external solver codes, where mesh groups can be used more readily to set boundary conditions and attribute solver related properties. It is possible to use the FreeCAD mesh group object name or the label as the group name on export of the mesh. If the label is chosen, the user has to be mindful if special characters are used. If the mesh export format does not allow special character its fallback is to use the mesh group object name.

FEM MeshGroup therefore enables FreeCAD to be used with external solvers (or viewers such as ParaView) when they are not yet implemented with their own case-writing routine within FreeCAD.

## Usage

1. To enable the command a ![](/images/FEM_MeshGmshFromShape.svg) [FEM mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") must be provided first.
2. Select the Mesh object in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/images/FEM_MeshGroup.svg) [FEM mesh group](/FEM_MeshGroup "FEM MeshGroup") button.
   - Select the **Mesh → ![](/images/FEM_MeshGroup.svg) FEM mesh group** option from the menu.
4. Select whether the group is named or labeled
   - If **Name** is selected, the name of the MeshGroup is used when exporting the mesh.
   - If **Label** is selected, the specified label name will be used when exporting the mesh.
5. Click the Add button and select the geometrical entity (solid, face, edge or vertex). More such objects can be added but they have to be of the same type. The mesh group will consist of underlying mesh entities.
6. Click the OK button.

   : Result: You now should see a new `FEMMeshGroup` object under the `FEMMeshGMSH` object in your active analysis container.

7. Double-click on the `FEMMeshGMSH` parent object in your Model Tree and press Apply to force a mesh recalculation / relabeling.
8. Close the task.

## Notes

- After the mesh has been created, you can change the label property using the [property editor](/Property_editor "Property editor").
- After you change a property, you must reopen the Gmsh dialog again and click the Apply button (you can leave the dialog open while changing properties).
- You can create as many different mesh groups as needed.
- By default, mesh groups can only be exported to .med and .unv formats. To be able to export them to the .inp format, one needs to enable the _Export group data_ option in [INP export preferences](/Import_Export_Preferences#INP "Import Export Preferences").
  - Setting the _Which mesh elements to export_ to _Highest_ or _FEM_ ensures that lower order elements not used for analysis (e.g. shells in the case of analysis with solids) won't be exported.
  - To export node sets to this format, the Data**Groups Of Nodes** property of the [Gmsh mesh object](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape") must be set to `true`.
- To check if a group was properly exported, you can open the generated file in any text editor and search for the group's name.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshGroup/en&oldid=1569391>"
