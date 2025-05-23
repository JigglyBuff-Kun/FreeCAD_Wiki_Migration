---
title: Mesh Skalieren
---

|                                                |
| ---------------------------------------------- |
| Mesh Skalieren                                 |
| Menüeintrag                                    |
| Netze → Skalieren...                           |
| Arbeitsbereich                                 |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") |
| Standardtastenkürzel                           |
| _Keiner_                                       |
| Eingeführt in Version                          |
| -                                              |
| Siehe auch                                     |
| _Keiner_                                       |
|                                                |

## Beschreibung

Der Befehl **Mesh Skalieren** passt die Größe von Netzobjekten an.

## Anwendung

1. Select one or more mesh objects.
2. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_Scale.svg) [Scale...](/Mesh_Scale "Mesh Scale") button.
   - Select the **Meshes → ![](/images/Mesh_Scale.svg) Scale...** option from the menu.
3. The **Scaling** dialog box opens.
4. Specify a scaling factor, the value must be larger than `0`.
5. Press the OK button to finish the command.

## Scripting

See also: [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To scale a mesh use its `transformGeometry` method.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Scale/de&oldid=1333064>"
