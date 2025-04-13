---
title: Mesh Sezione da mesh e piano
---

|                                                           |
| --------------------------------------------------------- |
| Sezione da mesh e piano                                   |
| Posizione nel menu                                        |
| Mesh → Taglio → Sezione da mesh e piano                   |
| Ambiente                                                  |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it")            |
| Avvio veloce                                              |
| _Nessuno_                                                 |
| Introdotto nella versione                                 |
| -                                                         |
| Vedere anche                                              |
| [Sezioni](/Mesh_CrossSections/it "Mesh CrossSections/it") |
|                                                           |

## Descrizione

Il comando **Sezione da mesh e piano** crea una sezione trasversale attraverso un oggetto mesh. La sezione trasversale è una [Part Feature](/Part_Feature/it "Part Feature/it").

## Utilizzo

1. Selezionare un singolo oggetto mesh e un singolo [piano di Part](/Part_Primitives/it "Part Primitives/it"). Il piano (esteso) deve intersecare l'oggetto mesh.
2. Selezionare l'opzione **Mesh → Taglio → ![](/images/Mesh_SectionByPlane.svg) Sezione da mesh e piano** dal menu.

## Proprietà

Vedere: [Funzioni Part](/Part_Feature/it "Part Feature/it").

## Scripting

See also: [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_SectionByPlane/it&oldid=1219054>"
