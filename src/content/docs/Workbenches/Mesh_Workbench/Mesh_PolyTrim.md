---
title: Mesh PolyTrim
---

|                                                                                                        |
| ------------------------------------------------------------------------------------------------------ |
| Mesh PolyTrim                                                                                          |
| Menu location                                                                                          |
| Meshes → Cutting → Trim mesh                                                                           |
| Workbenches                                                                                            |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                                               |
| Default shortcut                                                                                       |
| _None_                                                                                                 |
| Introduced in version                                                                                  |
| -                                                                                                      |
| See also                                                                                               |
| [Mesh PolyCut](/Mesh_PolyCut "Mesh PolyCut"), [Mesh TrimByPlane](/Mesh_TrimByPlane "Mesh TrimByPlane") |
|                                                                                                        |

## Description

The **Mesh PolyTrim** command trims faces and parts of faces from mesh objects.

## Usage

1. During the command the [3D view](/3D_view "3D view") cannot be changed. It is advisable to properly line up the 3d view first.
2. Select one or more mesh objects.
3. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Mesh_PolyTrim.svg) [Trim mesh](/Mesh_PolyTrim "Mesh PolyTrim") button.
   - Select the **Meshes → Cutting → ![](/src/assets/images/Mesh_PolyTrim.svg) Trim mesh** option from the menu.
4. Define a polygon by picking points in the 3D view.
5. Select an option from the 3D view context menu:
   - **Inner**: removes the faces and parts of faces that are inside the polygon.
   - **Outer**: removes the faces and parts of faces that are outside the polygon.
   - **Split**: removes the faces and parts of faces that are outside the polygon, and creates a new mesh object containing them.
   - **Cancel**: cancels the command.

## Scripting

See also: [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To trim a mesh with a polygon use its `trim` method.

```
import FreeCAD as App
import Mesh

# Create a non-parametric box-shaped mesh:
msh = App.ActiveDocument.addObject("Mesh::Feature", "Mesh")
msh.Mesh = Mesh.createBox(30, 40, 50)
msh.ViewObject.DisplayMode = "Flat Lines"

# Define some points:
p1 = App.Vector(0, 0, 0)
p2 = App.Vector(60, 0, 0)
p3 = App.Vector(60, 60, 0)

# We need to work on a copy of the msh.Mesh object:
new_msh = msh.Mesh.copy()

# Trim that copy:
new_msh.trim([p1, p2, p3], 0) # 2nd argument: 0=inner, 1=outer.

# Update msh.Mesh:
msh.Mesh = new_msh

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_PolyTrim/en&oldid=1333042>"
