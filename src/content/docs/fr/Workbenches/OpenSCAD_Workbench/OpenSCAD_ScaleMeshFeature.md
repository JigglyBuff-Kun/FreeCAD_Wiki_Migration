---
title: OpenSCAD Mise à l'échelle du maillage
---
|  |
| --- |
| OpenSCAD Mise à l'échelle du maillage |
| Emplacement du menu |
| OpenSCAD → Mettre à l'échelle le maillage |
| Ateliers |
| [OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Échelle](/Mesh_Scale/fr "Mesh Scale/fr") |
|  |

## Description

Crée un nouvel objet maillé mis à l'échelle avec une mise à l'échelle indépendante pour chaque axe.

## Utilisation

1. Sélectionnez l'objet maillé à mettre à l'échelle.
2. Cliquez sur le menu OpenSCAD → Mettre à l'échelle le maillage.
3. Sélectionnez l'axe souhaité dans la fenêtre de dialogue, ou entrez votre propre axe personnalisé à utiliser et cliquez sur OK.

* Un nouvel objet est créé et mis à l'échelle, l'objet d'origine est masqué.

## Limitations

* Le nouvel objet maillé n'est pas paramétrique par rapport à l'objet maillé d'origine, ce qui signifie que les modifications apportées à l'objet d'origine ne sont pas reflétées dans le nouvel objet mis à l'échelle.

## Remarques

* La fonction ne modifie pas le maillage existant mais renvoie un nouveau maillage.
* La fonction est accessible via Python :

```
import OpenSCADUtils
import Mesh
#this assumes an existing object in the document named "Mesh" that you wish to scale
original_mesh = App.ActiveDocument.Mesh
scaled_mesh = OpenSCADUtils.scalemesh(original_mesh.Mesh, FreeCAD.Base.Vector(1,0,0))
Mesh.show(scaled_mesh)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_ScaleMeshFeature/fr&oldid=1495888>"