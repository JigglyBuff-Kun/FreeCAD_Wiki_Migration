---
title: Mesh "Правильное геометрическое тело"
---
|  |
| --- |
| Правильное геометрическое тело |
| Расположение в меню |
| Полигональные Сетки → Правильное геометрическое тело... |
| Верстаки |
| [Mesh](/Mesh_Workbench/ru "Mesh Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

The **Mesh BuildRegularSolid** command creates a regular parametric solid mesh object.

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/Mesh_BuildRegularSolid.svg) [Regular solid...](/Mesh_BuildRegularSolid "Mesh BuildRegularSolid") button.
   * Select the **Meshes → ![](/images/Mesh_BuildRegularSolid.svg) Regular solid...** option from the menu.
2. The **Regular Solid** dialog box opens.
3. First select a mesh object type from the dropdown list:
   * **![](/images/Mesh_Cube.svg) Cube**
   * **![](/images/Mesh_Cylinder.svg) Cylinder**
   * **![](/images/Mesh_Cone.svg) Cone**
   * **![](/images/Mesh_Sphere.svg) Sphere**
   * **![](/images/Mesh_Ellipsoid.svg) Ellipsoid**
   * **![](/images/Mesh_Torus.svg) Torus**
4. Specify the required settings. The available settings depend on the mesh object type. See [Properties](#Properties).
5. For meshes with curved surfaces: a higher **Sampling** value results in a finer mesh.
6. Press the Create button to create the mesh object.
7. Optionally create more mesh objects.
8. Press the Close button to close the dialog box and finish the command.

## Примечания

* Mesh objects created with this command are parametric. Whenever they are recomputed, for example after changing one of their parameters, their mesh is reconstructed. This means that manipulating them with commands such as [Mesh RemeshGmsh](/Mesh_RemeshGmsh "Mesh RemeshGmsh"), [Mesh Scale](/Mesh_Scale "Mesh Scale") etc. usually does not make sense.

## Свойства

Mesh objects created with this command inherit all [Mesh Feature](/Mesh_Feature "Mesh Feature") properties. In addition each mesh object type has a number of properties to control its parametric behavior:

### Куб

#### Данные

Cube

* Данные**Height** (`FloatConstraint`): the height of the cube.
* Данные**Length** (`FloatConstraint`): the length of the cube.
* Данные**Width** (`FloatConstraint`): the width of the cube.

### Цилиндр

#### Данные

Основные

* Данные**Closed** (`Bool`): if set to `false`, the planar ends of the cylinder are left open.
* Данные**Edge Length** (`FloatConstraint`): the edge length of the faces in the mesh.
* Данные**Length** (`FloatConstraint`): the length of the cylinder.
* Данные**Radius** (`FloatConstraint`): the radius of the cylinder.
* Данные**Sampling** (`IntegerConstraint`): the number of faces along the curved surface.

### Конус

#### Данные

Основные

* Данные**Closed** (`Bool`): if set to `false`, the planar end(s) of the cone are left open.
* Данные**Edge Length** (`FloatConstraint`): the edge length of the faces in the mesh.
* Данные**Length** (`FloatConstraint`): the length of the cone.
* Данные**Radius 1** (`FloatConstraint`): the first radius of the cone. Can be `0`.
* Данные**Radius 2** (`FloatConstraint`): the second radius of the cone. Can be `0`.
* Данные**Sampling** (`IntegerConstraint`): the number of faces along the curved surface.

### Сфера

#### Данные

Основные

* Данные**Radius** (`FloatConstraint`): the radius of the sphere.
* Данные**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

### Эллипсоид

#### Данные

Основные

* Данные**Radius 1** (`FloatConstraint`): the first radius of the ellipsoid.
* Данные**Radius 2** (`FloatConstraint`): the second radius of the ellipsoid.
* Данные**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

### Тор

#### Данные

Основные

* Данные**Radius 1** (`FloatConstraint`): the first (main) radius the torus.
* Данные**Radius 2** (`FloatConstraint`): the second radius of the torus.
* Данные**Sampling** (`IntegerConstraint`): the number of faces along both directions of the curved surface.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_BuildRegularSolid/ru&oldid=1332913>"