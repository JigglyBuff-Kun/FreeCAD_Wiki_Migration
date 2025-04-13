---
title: Mesh Rifila con un piano
---

|                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- |
| Rifila con un piano                                                                                                  |
| Posizione nel menu                                                                                                   |
| Mesh → Taglio → Rifila con un piano                                                                                  |
| Ambiente                                                                                                             |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it")                                                                       |
| Avvio veloce                                                                                                         |
| _Nessuno_                                                                                                            |
| Introdotto nella versione                                                                                            |
| -                                                                                                                    |
| Vedere anche                                                                                                         |
| [Taglia la mesh](/Mesh_PolyCut/it "Mesh PolyCut/it"), [Rifila con un poligono](/Mesh_PolyTrim/it "Mesh PolyTrim/it") |
|                                                                                                                      |

## Descrizione

Il comando **Rifila con un piano** taglia facce e parti di facce su un lato di un piano da un oggetto mesh.

## Utilizzo

1. Selezionare un singolo oggetto mesh e un singolo [piano di Part](/Part_Primitives/it "Part Primitives/it"). Il piano (esteso) deve intersecare l'oggetto mesh.
2. Selezionare l'opzione **Mesh → Taglio → ![](/images/Mesh_TrimByPlane.svg) Rifila con un piano** dal menu.
3. Si apre la finestra di dialogo **Rifila con un piano**.
4. **Selezionare il lato da mantenere** premendo uno dei pulsanti:
   - Sopra
   - Sotto
   - Dividi: rimuove le facce e le parti delle facce sopra il piano e crea un nuovo oggetto mesh che le contiene.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_TrimByPlane/it&oldid=1219064>"
