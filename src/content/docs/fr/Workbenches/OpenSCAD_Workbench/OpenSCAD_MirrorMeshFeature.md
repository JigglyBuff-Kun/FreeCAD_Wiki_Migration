---
title: OpenSCAD Miroir du maillage
---
|  |
| --- |
| OpenSCAD Miroir du maillage |
| Emplacement du menu |
| OpenSCAD → Créer un objet maillé en miroir... |
| Ateliers |
| [OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Objet en miroir](/Part_Mirror/fr "Part Mirror/fr") |
|  |

## Description

Crée un nouvel objet maillé en miroir, symmétrisé autour de l'axe sélectionné.

## Utilisation

1. Sélectionnez l'objet maillé à mettre en miroir.
2. Cliquez sur le menu OpenSCAD → Créer un objet maillé en miroir....
3. Sélectionnez l'axe souhaité dans la fenêtre de dialogue, ou entrez votre propre axe personnalisé à utiliser et cliquez sur OK.

* Un nouvel objet est créé et mis en miroir, l'objet d'origine est masqué.

## Limitations

* Le nouvel objet maillé n'est pas paramétrique par rapport à l'objet maillé d'origine, ce qui signifie que les modifications apportées à l'objet d'origine ne sont pas reflétées dans le nouvel objet en miroir.

## Remarques

* La fonction ne modifie pas le maillage existant mais renvoie un nouveau maillage.
* La fonction est accessible via Python :

```
import OpenSCADUtils
import Mesh
#this assumes an existing object in the document named "Mesh" that you wish to mirror
original_mesh = App.ActiveDocument.Mesh
mirrored_mesh = OpenSCADUtils.mirrormesh(original_mesh.Mesh, FreeCAD.Base.Vector(1,0,0))
Mesh.show(mirrored_mesh)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_MirrorMeshFeature/fr&oldid=1514459>"