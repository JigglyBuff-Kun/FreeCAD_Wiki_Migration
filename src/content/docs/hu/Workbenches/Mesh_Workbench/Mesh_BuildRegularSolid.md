---
title: Háló → Szabályos tömör test összeállítása
---
|  |
| --- |
| Mesh BuildRegularSolid |
| Menu location |
| Hálók → Szabályos tömör test… |
| Workbenches |
| [Háló](/Mesh_Workbench/hu "Mesh Workbench/hu") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

## Bemutatás

Hálóalaptestek létrehozása, mint például kockák, hengerek, kúpok, gömbök, ellipszoidok vagy tóruszok.

## Usage

## Használat

1. Válassza a  Hálók → ![](/images/Mesh_BuildRegularSolid.svg) Szabályos tömör test… menüpontot a felső menüből.

![](/images/Meshes_RegularSolid_Cube.jpg) ![](/images/Meshes_RegularSolid_Cylinder.jpg) ![](/images/Meshes_RegularSolid_Cone.jpg)
  
  
![](/images/Meshes_RegularSolid_Sphere.jpg) ![](/images/Meshes_RegularSolid_Ellipsoid.jpg) ![](/images/Meshes_RegularSolid_Torus.jpg)

## Notes

## Jegyzetek

Ezen hálós szabályos tömör testek paramétereinek megváltoztatásához jelölje ki azokat a fanézetben, és váltson át az adat lapra.

## Properties

Mesh objects created with this command inherit all [Mesh Feature](/Mesh_Feature "Mesh Feature") properties. In addition each mesh object type has a number of properties to control its parametric behavior:

### Cube

#### Data

Cube

* Adat**Height** (`FloatConstraint`): the height of the cube.
* Adat**Length** (`FloatConstraint`): the length of the cube.
* Adat**Width** (`FloatConstraint`): the width of the cube.

### Cylinder

#### Data

Base

* Adat**Closed** (`Bool`): if set to `false`, the planar ends of the cylinder are left open.
* Adat**Edge Length** (`FloatConstraint`): the edge length of the faces in the mesh.
* Adat**Length** (`FloatConstraint`): the length of the cylinder.
* Adat**Radius** (`FloatConstraint`): the radius of the cylinder.
* Adat**Sampling** (`IntegerConstraint`): the number of faces along the curved surface.

### Cone

#### Data

Base

* Adat**Closed** (`Bool`): if set to `false`, the planar end(s) of the cone are left open.
* Adat**Edge Length** (`FloatConstraint`): the edge length of the faces in the mesh.
* Adat**Length** (`FloatConstraint`): the length of the cone.
* Adat**Radius 1** (`FloatConstraint`): the first radius of the cone. Can be `0`.
* Adat**Radius 2** (`FloatConstraint`): the second radius of the cone. Can be `0`.
* Adat**Sampling** (`IntegerConstraint`): the number of faces along the curved surface.

### Sphere

#### Data

Base

* Adat**Radius** (`FloatConstraint`): the radius of the sphere.
* Adat**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

### Ellipsoid

#### Data

Base

* Adat**Radius 1** (`FloatConstraint`): the first radius of the ellipsoid.
* Adat**Radius 2** (`FloatConstraint`): the second radius of the ellipsoid.
* Adat**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

### Torus

#### Data

Base

* Adat**Radius 1** (`FloatConstraint`): the first (main) radius the torus.
* Adat**Radius 2** (`FloatConstraint`): the second radius of the torus.
* Adat**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_BuildRegularSolid/hu&oldid=859876>"