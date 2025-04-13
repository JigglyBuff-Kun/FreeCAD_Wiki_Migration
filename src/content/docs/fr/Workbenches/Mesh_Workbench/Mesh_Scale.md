---
title: Mesh Échelle
---
|  |
| --- |
| Mesh Echelle |
| Emplacement du menu |
| Maillages → Mettre à l'échelle... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande **Échelle** met à l'échelle les objets maillés.

## Utilisation

1. Sélectionnez un ou plusieurs objets maillés.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_Scale.svg) Mettre à l'échelle...
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_Scale.svg) Mettre à l'échelle...** du menu.
3. La fenêtre de dialogue **Mettre à l'échelle** s'ouvre.
4. Spécifiez un facteur de mise à l'échelle, la valeur doit être supérieure à `0`.
5. Appuyez sur le bouton OK pour terminer la commande.

## Script

Voir aussi : [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour mettre à l'échelle un maillage, utilisez sa méthode `transformGeometry`.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Scale/fr&oldid=1495963>"