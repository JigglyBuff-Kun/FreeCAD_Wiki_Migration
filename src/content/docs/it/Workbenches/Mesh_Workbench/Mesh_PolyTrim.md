---
title: Mesh Rifila con un poligono
---

|                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------- |
| Rifila con un poligono                                                                                                  |
| Posizione nel menu                                                                                                      |
| Mesh → Taglio → Rifila con un poligono                                                                                  |
| Ambiente                                                                                                                |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it")                                                                          |
| Avvio veloce                                                                                                            |
| _Nessuno_                                                                                                               |
| Introdotto nella versione                                                                                               |
| -                                                                                                                       |
| Vedere anche                                                                                                            |
| [Taglia la mesh](/Mesh_PolyCut/it "Mesh PolyCut/it"), [Rifila con un piano](/Mesh_TrimByPlane/it "Mesh TrimByPlane/it") |
|                                                                                                                         |

## Descrizione

Il comando **Rifila con un poligono** taglia facce e parti di facce da oggetti mesh.

## Utilizzo

1. Durante il comando non è possibile modificare la [vista 3D](/3D_view/it "3D view/it"). Si consiglia di allineare correttamente prima la vista 3D.
2. Selezionare uno o più oggetti mesh.
3. Esistono diversi modi per invocare il comando:
   - Premere il bottone ![](/images/Mesh_PolyTrim.svg) Rifila con un poligono.
   - Selezionare l'opzione **Mesh → Taglio → ![](/images/Mesh_PolyTrim.svg) Rifila con un poligono** dal menu.
4. Definire un poligono selezionando dei punti nella vista 3D.
5. Selezionare un'opzione dal menu contestuale della vista 3D:
   - **Interno**: rimuove le facce che sono (parzialmente) all'interno del poligono.
   - **Esterno**: rimuove le facce che sono completamente al di fuori del poligono.
   - **Dividi**: rimuove le facce che sono completamente esterne al poligono e crea un nuovo oggetto mesh che le contiene.
   - **Annulla**: annulla il comando.

## Script

Vedere anche: [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it")

Per tagliare una mesh con un poligono usare il suo metodo `trim`.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_PolyTrim/it&oldid=1334194>"
