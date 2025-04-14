---
title: Mesh VertexCurvature
---

|                                                                |
| -------------------------------------------------------------- |
| Mesh VertexCurvature                                           |
| Menu location                                                  |
| Meshes → Curvature plot                                        |
| Workbenches                                                    |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                       |
| Default shortcut                                               |
| _None_                                                         |
| Introduced in version                                          |
| -                                                              |
| See also                                                       |
| [Mesh CurvatureInfo](/Mesh_CurvatureInfo "Mesh CurvatureInfo") |
|                                                                |

## Description

The **Mesh VertexCurvature** command creates Mesh Curvature objects for mesh objects. A curvature object displays the curvature of a mesh using different colors for the convex, flat and concave parts.

![](/images/Mesh_VertexCurvature_example.png)

Example of a Mesh Curvature object

## Usage

1. Select one or more mesh objects.
2. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_VertexCurvature.svg) [Curvature plot](/Mesh_VertexCurvature "Mesh VertexCurvature") button.
   - Select the **Meshes → ![](/images/Mesh_VertexCurvature.svg) Curvature plot** option from the menu.
   - Select the **![](/images/Mesh_VertexCurvature.svg) Curvature plot** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu.

## Properties

For a Mesh Curvature object the following properties are available in the [Property editor](/Property_editor "Property editor"). Select the **Show hidden** option from the Property editor context menu to display the hidden properties.

### Data

Base

- Data**Label** (`String`): a user editable name for the object, an arbitrary UTF8 string.
- Data**Source** (`Link`): a link to the mesh object.

#### Data hidden

Base

- Data**Curv Info** (`CurvatureList`): a list of curvature information.
- Data**Expression Engine** (`ExpressionEngine`): a list of expressions.
- Data**Label2** (`String`): a user editable description for the object, an arbitrary UTF8 string that may include newlines.
- Data**Visibility** (`Bool`): if set to `true`, the object appears in the [3D view](/3D_view "3D view").

### View

Base

- View**Display Mode** (`Enumeration`): `Absolute curvature` (default), `Mean curvature`, `Gaussian curvature`, `Maximum curvature`, `Minimum curvature`.
- View**On Top When Selected** (`Enumeration`): `Disabled` (default), `Enabled`, `Object`, `Element`.
- View**Selection Style** (`Enumeration`): `Shape`, `BoundBox` (default).
- View**Show In Tree** (`Bool`): if set to `true`, the object appears in the [Tree view](/Tree_view "Tree view").
- View**Visibility** (`Bool`): if set to `true`, the object appears in the [3D view](/3D_view "3D view").

#### View hidden

Base

- View**Texture Material** (`Material`): an [App Material](/index.php?title=App_Material&action=edit&redlink=1 "App Material (page does not exist)") associated with the object.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_VertexCurvature/en&oldid=1560757>"
