---
title: Mesh TrimByPlane
---

|                                                                                               |
| --------------------------------------------------------------------------------------------- |
| Mesh TrimByPlane                                                                              |
| Menu location                                                                                 |
| Meshes → Cutting → Trim mesh with a plane                                                     |
| Workbenches                                                                                   |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                                      |
| Default shortcut                                                                              |
| _None_                                                                                        |
| Introduced in version                                                                         |
| -                                                                                             |
| See also                                                                                      |
| [Mesh PolyCut](/Mesh_PolyCut "Mesh PolyCut"), [Mesh PolyTrim](/Mesh_PolyTrim "Mesh PolyTrim") |
|                                                                                               |

## Description

The **Mesh TrimByPlane** command trims faces and parts of faces on one side of a plane from a mesh object.

## Usage

1. Select a single mesh object and a single [Part plane](/Part_Plane "Part Plane"). The (extended) plane should intersect the mesh object.
2. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_TrimByPlane.svg) [Trim mesh with a plane](/Mesh_TrimByPlane "Mesh TrimByPlane") button.
   - Select the **Meshes → Cutting → ![](/images/Mesh_TrimByPlane.svg) Trim mesh with a plane** option from the menu.
3. The **Trim by plane** dialog box opens.
4. **Select the side you want to keep** by pressing one of the buttons:
   - Below
   - Above
   - Split: removes the faces and parts of faces above the plane, and creates a new mesh object containing them.

## Scripting

See also: [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To trim a mesh with a plane use its `trimByPlane` method.

```
import FreeCAD as App
import Mesh

# Create a non-parametric box-shaped mesh:
msh = App.ActiveDocument.addObject("Mesh::Feature", "Mesh")
msh.Mesh = Mesh.createBox(30, 40, 50)
msh.ViewObject.DisplayMode = "Flat Lines"

# Define a plane by a base point and a normal vector:
pnt = App.Vector(25, 0, 0)
nor = App.Vector(0, 0, 1)

# We need to work on a copy of the msh.Mesh object:
new_msh = msh.Mesh.copy()

# Trim that copy:
new_msh.trimByPlane(pnt, nor)

# Update msh.Mesh:
msh.Mesh = new_msh

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_TrimByPlane/en&oldid=1333095>"
