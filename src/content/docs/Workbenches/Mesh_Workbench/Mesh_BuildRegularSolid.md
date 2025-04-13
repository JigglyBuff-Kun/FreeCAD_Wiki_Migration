---
title: Mesh BuildRegularSolid
---

|                                          |
| ---------------------------------------- |
| Mesh BuildRegularSolid                   |
| Menu location                            |
| Meshes → Regular solid...                |
| Workbenches                              |
| [Mesh](/Mesh_Workbench "Mesh Workbench") |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Description

The **Mesh BuildRegularSolid** command creates a regular parametric solid mesh object.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Mesh_BuildRegularSolid.svg) [Regular solid...](/Mesh_BuildRegularSolid "Mesh BuildRegularSolid") button.
   - Select the **Meshes → ![](/src/assets/images/Mesh_BuildRegularSolid.svg) Regular solid...** option from the menu.
2. The **Regular Solid** dialog box opens.
3. First select a mesh object type from the dropdown list:
   - **![](/src/assets/images/Mesh_Cube.svg) Cube**
   - **![](/src/assets/images/Mesh_Cylinder.svg) Cylinder**
   - **![](/src/assets/images/Mesh_Cone.svg) Cone**
   - **![](/src/assets/images/Mesh_Sphere.svg) Sphere**
   - **![](/src/assets/images/Mesh_Ellipsoid.svg) Ellipsoid**
   - **![](/src/assets/images/Mesh_Torus.svg) Torus**
4. Specify the required settings. The available settings depend on the mesh object type. See [Properties](#Properties).
5. For meshes with curved surfaces: a higher **Sampling** value results in a finer mesh.
6. Press the Create button to create the mesh object.
7. Optionally create more mesh objects.
8. Press the Close button to close the dialog box and finish the command.

## Notes

- Mesh objects created with this command are parametric. Whenever they are recomputed, for example after changing one of their parameters, their mesh is reconstructed. This means that manipulating them with commands such as [Mesh RemeshGmsh](/Mesh_RemeshGmsh "Mesh RemeshGmsh"), [Mesh Scale](/Mesh_Scale "Mesh Scale") etc. usually does not make sense.

## Properties

Mesh objects created with this command inherit all [Mesh Feature](/Mesh_Feature "Mesh Feature") properties. In addition each mesh object type has a number of properties to control its parametric behavior:

### Cube

#### Data

Cube

- Data**Height** (`FloatConstraint`): the height of the cube.
- Data**Length** (`FloatConstraint`): the length of the cube.
- Data**Width** (`FloatConstraint`): the width of the cube.

### Cylinder

#### Data

Base

- Data**Closed** (`Bool`): if set to `false`, the planar ends of the cylinder are left open.
- Data**Edge Length** (`FloatConstraint`): the edge length of the faces in the mesh.
- Data**Length** (`FloatConstraint`): the length of the cylinder.
- Data**Radius** (`FloatConstraint`): the radius of the cylinder.
- Data**Sampling** (`IntegerConstraint`): the number of faces along the curved surface.

### Cone

#### Data

Base

- Data**Closed** (`Bool`): if set to `false`, the planar end(s) of the cone are left open.
- Data**Edge Length** (`FloatConstraint`): the edge length of the faces in the mesh.
- Data**Length** (`FloatConstraint`): the length of the cone.
- Data**Radius 1** (`FloatConstraint`): the first radius of the cone. Can be `0`.
- Data**Radius 2** (`FloatConstraint`): the second radius of the cone. Can be `0`.
- Data**Sampling** (`IntegerConstraint`): the number of faces along the curved surface.

### Sphere

#### Data

Base

- Data**Radius** (`FloatConstraint`): the radius of the sphere.
- Data**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

### Ellipsoid

#### Data

Base

- Data**Radius 1** (`FloatConstraint`): the first radius of the ellipsoid.
- Data**Radius 2** (`FloatConstraint`): the second radius of the ellipsoid.
- Data**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

### Torus

#### Data

Base

- Data**Radius 1** (`FloatConstraint`): the first (main) radius the torus.
- Data**Radius 2** (`FloatConstraint`): the second radius of the torus.
- Data**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_BuildRegularSolid/en&oldid=1332915>"
