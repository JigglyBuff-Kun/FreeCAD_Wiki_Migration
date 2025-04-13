---
title: Mesh Scala
---

|                                                |
| ---------------------------------------------- |
| Scala                                          |
| Posizione nel menu                             |
| Mesh → Scala...                                |
| Ambiente                                       |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| -                                              |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

Il comando **Scala** scala gli oggetti mesh.

## Utilizzo

1. Selezionare uno o più oggetti mesh.
2. Esistono diversi modi per invocare il comando:
   - Premere il bottone ![](/images/Mesh_Scale.svg) Scala....
   - Selezionare l'opzione **Mesh → ![](/images/Mesh_Scale.svg) Scala...** dal menu.
3. Il box dialogo **Scalatura** si apre.
4. Specificare un fattore di scala, il valore deve essere maggiore di `0`.
5. Premere il bottone OK per terminare il comando.

## Script

Vedere anche: [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it")

Per scalare una mesh usare il suo metodo `transformGeometry`.

```
import FreeCAD as App
import Mesh

# Create a non-parametric box-shaped mesh:
msh = App.ActiveDocument.addObject("Mesh::Feature", "Mesh")
msh.Mesh = Mesh.createBox(10, 10, 10)
msh.ViewObject.DisplayMode = "Flat Lines"

# Create and scale a matrix:
mat = App.Matrix()
mat.scale(2.0, 3.0, 4.0) # Unequal scaling.

# We need to work on a copy of the msh.Mesh object:
new_msh = msh.Mesh.copy()

# Transform that copy:
new_msh.transformGeometry(mat)

# Update msh.Mesh:
msh.Mesh = new_msh

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Scale/it&oldid=1334337>"
