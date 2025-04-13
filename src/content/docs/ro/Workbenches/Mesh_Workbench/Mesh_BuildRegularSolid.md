---
title: Mesh BuildRegularSolid
---
|  |
| --- |
| Mesh BuildRegularSolid |
| Menu location |
| Meshes → Regular solid... |
| Workbenches |
| [Mesh](/Mesh_Workbench "Mesh Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

## Introducere

Creați primitive tip plasă, cum ar fi cuburi, cilindri, conuri, sfere, elipsoid, torus.

## Usage

## Utilizare

Choose  Meshes → ![](/images/Mesh_BuildRegularSolid.svg) Regular solid... from the top menu.
  
  
![](/images/Meshes_RegularSolid_Cube.jpg) ![](/images/Meshes_RegularSolid_Cylinder.jpg) ![](/images/Meshes_RegularSolid_Cone.jpg)
  
  
![](/images/Meshes_RegularSolid_Sphere.jpg) ![](/images/Meshes_RegularSolid_Ellipsoid.jpg) ![](/images/Meshes_RegularSolid_Torus.jpg)

## Notes

## Notes

Pentru a schimba parametrii acestor componente solide regulate, evidențiați-le în vizualizarea arborescentă și comutați la tab-ul de date.

## Properties

Mesh objects created with this command inherit all [Mesh Feature](/Mesh_Feature "Mesh Feature") properties. In addition each mesh object type has a number of properties to control its parametric behavior:

### Cube

#### Data

Cube

* Date**Height** (`FloatConstraint`): the height of the cube.
* Date**Length** (`FloatConstraint`): the length of the cube.
* Date**Width** (`FloatConstraint`): the width of the cube.

### Cylinder

#### Data

Base

* Date**Closed** (`Bool`): if set to `false`, the planar ends of the cylinder are left open.
* Date**Edge Length** (`FloatConstraint`): the edge length of the faces in the mesh.
* Date**Length** (`FloatConstraint`): the length of the cylinder.
* Date**Radius** (`FloatConstraint`): the radius of the cylinder.
* Date**Sampling** (`IntegerConstraint`): the number of faces along the curved surface.

### Cone

#### Data

Base

* Date**Closed** (`Bool`): if set to `false`, the planar end(s) of the cone are left open.
* Date**Edge Length** (`FloatConstraint`): the edge length of the faces in the mesh.
* Date**Length** (`FloatConstraint`): the length of the cone.
* Date**Radius 1** (`FloatConstraint`): the first radius of the cone. Can be `0`.
* Date**Radius 2** (`FloatConstraint`): the second radius of the cone. Can be `0`.
* Date**Sampling** (`IntegerConstraint`): the number of faces along the curved surface.

### Sphere

#### Data

Base

* Date**Radius** (`FloatConstraint`): the radius of the sphere.
* Date**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

### Ellipsoid

#### Data

Base

* Date**Radius 1** (`FloatConstraint`): the first radius of the ellipsoid.
* Date**Radius 2** (`FloatConstraint`): the second radius of the ellipsoid.
* Date**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

### Torus

#### Data

Base

* Date**Radius 1** (`FloatConstraint`): the first (main) radius the torus.
* Date**Radius 2** (`FloatConstraint`): the second radius of the torus.
* Date**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_BuildRegularSolid/ro&oldid=859860>"