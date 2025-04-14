---
title: Mesh SchnittMitEbene
---

|                                                                  |
| ---------------------------------------------------------------- |
| Mesh SchnittMitEbene                                             |
| Menu location                                                    |
| Netze → Schneiden → Schnittlinie aus Netz und Ebene erstellen    |
| Workbenches                                                      |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                         |
| Default shortcut                                                 |
| _None_                                                           |
| Introduced in version                                            |
| -                                                                |
| See also                                                         |
| [Mesh Schnittkonturen](/Mesh_CrossSections "Mesh CrossSections") |
|                                                                  |

## Beschreibung

Der Befehl **Mesh SchnittMitEbene** erstellt einen Schnitt durch ein Netzobjekt (Querschnitt). Dieser Schnitt ist ein [Part Formelement](/Part_Feature/de "Part Feature/de").

## Anwendung

1. Select a single mesh object and a single [Part plane](/Part_Primitives "Part Primitives"). The (extended) plane should intersect the mesh object.
2. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_SectionByPlane.svg) [Create section from mesh and plane](/Mesh_SectionByPlane "Mesh SectionByPlane") button.
   - Select the **Meshes → Cutting → ![](/images/Mesh_SectionByPlane.svg) Create section from mesh and plane** option from the menu.

## Eigenschaften

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de").

## Skripten

Siehe auch: [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

To section a mesh use its `section` method. The method requires a second mesh object that need not be planar.

```
import FreeCAD as App
import Mesh
import Part

# Create a non-parametric box-shaped mesh:
msh = App.ActiveDocument.addObject("Mesh::Feature", "Mesh")
msh.Mesh = Mesh.createBox(30, 40, 50)
msh.ViewObject.DisplayMode = "Flat Lines"

# Create a planar mesh from 3 points:
p1 = App.Vector(-20, -60, 0)
p2 = App.Vector(65, 25, 0)
p3 = App.Vector(-20, 25, 0)
msh_plane = Mesh.Mesh([p1, p2, p3])

# Find the section loops (each loop is a list of points):
loops = msh.Mesh.section(msh_plane)

# Show the loop polygon:
Part.show(Part.makePolygon(loops[0]))

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_SectionByPlane/de&oldid=1341720>"
