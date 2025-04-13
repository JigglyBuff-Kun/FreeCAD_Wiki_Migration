---
title: Mesh Ajuster par plan
---
|  |
| --- |
| Mesh Ajuster par plan |
| Emplacement du menu |
| Maillages → Couper → Ajuster le maillage avec un plan |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Couper le maillage](/Mesh_PolyCut/fr "Mesh PolyCut/fr"), [Mesh Ajuster](/Mesh_PolyTrim/fr "Mesh PolyTrim/fr") |
|  |

## Description

La commande **Ajuster par plan** permet de découper les faces et parties de faces d'un côté d'un plan à partir d'un objet maillé.

## Utilisation

1. Sélectionnez un seul objet maillé et un seul [Part Plan](/Part_Plane/fr "Part Plane/fr"). Le plan (étendu) doit couper l'objet maillé.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_TrimByPlane.svg) Ajuster le maillage avec un plan
   * Sélectionnez l'option **Maillages → Couper → ![](/images/Mesh_TrimByPlane.svg) Ajuster le maillage avec un plan** du menu.
3. La fenêtre de dialogue **Découpe par un plan** s'ouvre.
4. **Sélectionner le coté à conserver** en appuyant sur l'un des boutons :
   * En-dessous
   * Au-dessus
   * Recomposer : supprime les faces et les parties de faces au-dessus du plan et crée un nouveau maillage les contenant.

## Script

Voir aussi : [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour découper un maillage avec un plan, utilisez sa méthode `trimByPlane`.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_TrimByPlane/fr&oldid=1496081>"