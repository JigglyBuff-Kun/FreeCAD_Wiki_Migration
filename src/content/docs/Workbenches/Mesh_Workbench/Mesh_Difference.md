---
title: Mesh Difference
---

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| Mesh Difference                                                                                     |
| Menu location                                                                                       |
| Meshes → Boolean → Difference                                                                       |
| Workbenches                                                                                         |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                                            |
| Default shortcut                                                                                    |
| _None_                                                                                              |
| Introduced in version                                                                               |
| -                                                                                                   |
| See also                                                                                            |
| [Mesh Union](/Mesh_Union "Mesh Union"), [Mesh Intersection](/Mesh_Intersection "Mesh Intersection") |
|                                                                                                     |

## Description

The **Mesh Difference** command creates a new non-parametric mesh object, a [Mesh Feature](/Mesh_Feature "Mesh Feature"), that is the difference of two mesh objects: one mesh object is cut from the other.

[OpenSCAD](http://www.openscad.org/) must be installed to use this command, and the path to its executable must be set in the [OpenSCAD preferences](/OpenSCAD_Preferences "OpenSCAD Preferences").

![](/images/Mesh_Difference_example.png)

On the left two mesh objects, on the right the mesh object that is the difference of those objects if the cube is selected as the main object

## Usage

1. Select the main mesh object.
2. Add the mesh object you want to cut from the main object to the selection. The mesh objects must overlap.
3. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_Difference.svg) [Difference](/Mesh_Difference "Mesh Difference") button.
   - Select the **Meshes → Boolean → ![](/images/Mesh_Difference.svg) Difference** option from the menu.

## Properties

See: [Mesh Feature](/Mesh_Feature "Mesh Feature").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Difference/en&oldid=1332936>"
