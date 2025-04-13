---
title: Mesh FromPartShape/ru
---
|  |
| --- |
| Mesh MeshFromShape‏‎ |
| Расположение в меню |
| Полигональные Сетки → Создать полигональную сетку из фигуры |
| Верстаки |
| [Mesh](/Mesh_Workbench/ru "Mesh Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Description

The **Mesh\_FromPartShape** command creates non-parametric [mesh](/Mesh "Mesh") objects ([Mesh Features](/Mesh_Feature "Mesh Feature")) from [shape](/Shape "Shape") objects ([Part Features](/Part_Feature "Part Feature")).

The inverse operation is [Part ShapeFromMesh](/Part_ShapeFromMesh "Part ShapeFromMesh") from the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench").

## Usage

1. Optionally select one or more objects.
2. There are several ways to invoke the command:
   * Press the ![](/images/Mesh_FromPartShape.svg) [Create mesh from shape...](/Mesh_FromPartShape "Mesh FromPartShape") button.
   * Select the **Meshes → ![](/images/Mesh_FromPartShape.svg) Create mesh from shape...** option from the menu.
3. The **Tessellation** task panel opens.
4. While the task panel is open you can create a new selection or change an existing selection.
5. Select the tab for the mesher you wish to use.
6. Specify the required settings. See [Meshers](#Meshers).
7. Press the OK button to close the task panel and finish the command.

## Meshers

These are the available meshers and their settings:

### Standard mesher

* **Surface deviation**: the maximum [linear deviation](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) of a mesh section from the surface of the object.
* **Angular deviation**: the maximum [angular deviation](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) from one mesh section to the next. This setting is used when meshing curved surfaces.
* **Relative surface deviation**: if checked, the maximum linear deviation of a mesh segment will be the specified **Surface deviation** multiplied by the length of the current mesh segment (edge).
* **Apply face colors to mesh**: if checked, the mesh will get the face colors of the object.
* **Define segments by face colors**: if checked, mesh segments will be grouped according to the colors of the object's faces. These groups will be exported for mesh output formats supporting this feature (the [OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file) format for example).

### Mefisto mesher

* **Maximum edge length**: the maximum edge length of the mesh. A smaller value results in a finer mesh. Specifying `0`, or unchecking the checkbox, results in a very coarse mesh.
  + If you press the Estimate button the mesher will enter an estimated value for the **Maximum edge length**. This value is not very reliable if multiple objects have been selected.

### Netgen mesher

* **Fineness**: select an options for the finesse of the mesh:
  + **Very coarse**
  + **Coarse**
  + **Moderate**
  + **Fine**
  + **Very fine**
  + **User defined**: for this option the following settings can be specified:
    - **Mesh size grading**: a smaller value results in a finer mesh. The value must be in the `0.1` - `1.0` range.
    - **Element per edge**: a larger value results in a finer mesh. The value must be in the `0.2` - `10.0` range.
    - **Element per curvature radius**: a larger value results in a finer mesh. The value must be in the `0.2` - `10` range.
* **Optimize surface**: if checked, the surface shape will be optimized.
* **Second order elements**: if checked, second order elements will be generated resulting in a finer mesh.
* **Quad dominated**: if checked, the mesh will preferably use [quadrilateral faces](https://en.wikipedia.org/wiki/Types_of_mesh#Two-dimensional).

### Gmsh mesher

For Linux users: the external [Gmsh](https://gmsh.info/) module is required.

* **Meshing**: select a meshing option:
  + **Automatic**
  + **Adaptive**
  + **Delaunay**
  + **Frontal**
  + **BAMG**
  + **Frontal Quad**
  + **Parallelograms**
  + **Quasi-structured Quad**
* **Max. element size**: a smaller value results in a finer mesh. Specify `0` to have this size automatically determined.
* **Min. element size**: a smaller value results in a finer mesh. The value should be smaller than the **Max. element size**. Specify `0` to have this size automatically determined.
* **Angle**: seems to be unsupported at this time.
* **Path**: press the ... button and browse to the gmsh.exe path.
* If the meshing process takes too long you can press the Kill button to abort it.
* Press the Clear button to remove the information in the text area.

## Notes

* This command is not restricted to objects created with the [Part workbench](/Part_Workbench "Part Workbench"). It can create a mesh from any object that has a shape including objects created with the [PartDesign workbench](/PartDesign_Workbench "PartDesign Workbench").
* The [Std Export](/Std_Export "Std Export") command can export shape objects directly to a mesh format.
* See also: [Export to STL or OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ") tutorial.

## Preferences

### Standard mesher

* The **Surface deviation** setting is stored: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Mesh → Meshing → Standard → LinearDeflection**.
* The **Angular deviation** setting is stored: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Mesh → Meshing → Standard → AngularDeflection**.
* The **Relative surface deviation** setting is stored: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Mesh → Meshing → Standard → RelativeLinearDeflection**.

### Gmsh mesher

* The **Path** is stored: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Mesh → Meshing → gmshExe**.

## Properties

See: [Mesh Feature](/Mesh_Feature "Mesh Feature").

## Scripting

See also: [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a mesh object from a shape object use the `meshFromShape` method of the MeshPart module. This method has several signatures. The signature determines the mesher that will be used. The example below uses the Mefisto mesher signature.

```
import FreeCAD, Part, Mesh, MeshPart

cyl = FreeCAD.ActiveDocument.addObject("Part::Cylinder","Cylinder")
FreeCAD.ActiveDocument.recompute()

msh = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
msh.Mesh = MeshPart.meshFromShape(Shape=cyl.Shape, MaxLength=1)
msh.ViewObject.DisplayMode = "Flat Lines"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_FromPartShape/ru&oldid=1548486>"