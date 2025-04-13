---
title: Std Import
---
|  |
| --- |
| Std\_Import |
| Ubicación en el Menú |
| Archivo → Importar |
| Entornos de trabajo |
| Todos |
| Atajo de teclado por defecto |
| CTRL+I |
| Introducido en versión |
| - |
| Ver también |
| [Std Open](/Std_Open/es "Std Open/es"), [Std\_Save](/Std_Save/es "Std Save/es")... |
|  |

## Description

Añade en el documento actual el contenido de un fichero creado con otra aplicación. Estan soportados varios formatos de archivo:
**[.IGES](http://en.wikipedia.org/wiki/IGES), [.STEP](http://es.wikipedia.org/wiki/ISO_10303), [.BREP](http://en.wikipedia.org/wiki/Boundary_representation), [.STL](http://en.wikipedia.org/wiki/STL_%28file_format%29), [.OBJ](http://en.wikipedia.org/wiki/Wavefront_.obj_file), [.PLY](http://en.wikipedia.org/wiki/PLY_%28file_format%29)**, etc.

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): If an image format is selected the command will create an [Image Plane](#Image_Plane).

## Usage

Cuando se carga, el fichero es **incorporado** al proyecto actual (que debe estar abierto). Si lo que deseas es cargar un nuevo archivo en una nueva ventana, usa el comando **[Std\_Open](/Std_Open/es "Std Open/es")**.

## Options

* Press Esc or the Cancel button to abort the command.

## Notes

* To convert an imported [mesh object](/Mesh_Workbench "Mesh Workbench") into a solid see the [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ") tutorial.
* To import into a new document you can use the [Std Open](/Std_Open "Std Open") command.
* Some workbenches have additional import commands. See [Import Export](/Import_Export "Import Export").

## Preferences

* See [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences").

## Image Plane

An Image Plane is a planar representation of an image in the [3D view](/3D_view "3D view"). It can for example be used when creating a model based on photographs of an existing object.

By default an Image Plane is placed on the global XY plane. The initial size of an Image Plane is calculated using a 96px/inch resolution.

### Edit

1. To edit an Image Plane do one of the following:
   * Double-click the Image Plane in the [Tree view](/Tree_view "Tree view").
   * Right-click the Image Plane in the Tree view and select **![](/images/Image-scaling.svg) Change image...** from the context menu.
2. If the Image Plane is not plane-parallel to the XY, XZ or YZ plane of the global coordinate system, it is realigned to be plane-parallel to the XY plane.
3. The **Image plane settings** task panel opens.
4. Optionally select the **XY-Plane**, **XZ-Plane** or **YZ-Plane** of the global coordinate system.
5. Check **Reverse direction** to rotate the Image Plane 180°. The rotation axis depends on the selected plane. For the XY plane it is the global X axis. For the XZ and YZ plane it is the global Z axis.
6. The **Offset**, **X distance** and **Y distance** are relative to the coordinate system of the Image Plane. A small negative offset can be useful when tracing the image with a [sketch](/Sketcher_Workbench "Sketcher Workbench") or [Draft](/Draft_Workbench "Draft Workbench") geometry.
7. Optionally change the **Transparency**.
8. **Image size** options:
   * Scale by numerical input:
     1. Optionally uncheck **Keep aspect ratio** for unequal scaling.
     2. Enter a **Width** and/or **Height**.
   * Scale by picking points:
     1. Press the Calibrate button.
     2. Pick two points inside the image.
     3. A dimension line is displayed.
     4. Enter the desired dimension.
     5. Press Enter or the Apply button.
9. Press the OK button to confirm the changes and close the task panel.

### Properties

See also: [Property editor](/Property_editor "Property editor").

An Image Plane object is derived from an [App GeoFeature](/App_GeoFeature "App GeoFeature") object and inherits all its properties. It also has the following additional properties:

#### Data

Image Plane

* Datos**Image File** (`FileIncluded`): The image file used for the Image Plane. This file is stored in the .FCStd file.
* Datos**XSize** (`Length`): The width of the Image Plane.
* Datos**YSize** (`Length`): The height of the Image Plane.

#### View

Object Style

* Vista**Lighting** (`Enumeration`): How the Image Plane is illuminated in the [3D view](/3D_view "3D view"). Can be `Two side` or `One side`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Import/es&oldid=1403622>"