---
title: FEM Maillage FEM en maillage surfacique
---
|  |
| --- |
| FEM Maillage FEM en maillage surfacique |
| Emplacement du menu |
| Maillage → Convertir un maillage FEM en maillage surfacique |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

Cet outil convertit des surfaces d'éléments 3D ou des éléments 2D entiers d'un maillage FEM sélectionné en [maillage surfacique](/Mesh_MeshObject/fr "Mesh MeshObject/fr"). En pratique, il sélectionne les faces des éléments d'un maillage FEM qui sont uniques (non partagées par deux éléments) et les utilise pour créer les faces d'un maillage de surface. En outre, il peut être utilisé pour sauvegarder un maillage déformé. Cela se fait en ajoutant le déplacement des résultats FEM aux nœuds du maillage (l'échelle du déplacement peut être définie à l'aide de Python).

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil crée également un objet *Mesh2Fem* qui est un maillage FEM triangulaire généré à partir du maillage de surface.

## Utilisation

1. Sélectionnez un objet FEM maillage.
2. Vous pouvez également sélectionner les résultats FEM.
3. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_FemMesh2Mesh.svg) Convertir un maillage FEM en maillage surfacique.
   * Sélectionnez l'option **Maillage → ![](/images/FEM_FemMesh2Mesh.svg) Convertir un maillage FEM en maillage surfacique** du menu.

## Script

**Remarque** : le paramètre *scale* est [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr"). Pour les anciennes versions de FreeCAD, il faut l'omettre de votre code.

L'exemple du cantilever dans FreeCAD version 1.0 :

```
from os.path import join
import FreeCAD as App
import Mesh
from femmesh import femmesh2mesh

path = join(App.getResourceDir(), "examples", "FEMExample.FCStd")
doc = App.openDocument(path)
fem_mesh = doc.FEMMeshGmsh.FemMesh
result = doc.CCX_Results
scale = 10  # displacement scale factor
out_mesh = femmesh2mesh.femmesh_2_mesh(fem_mesh, result, scale)
Mesh.show(Mesh.Mesh(out_mesh))

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_FemMesh2Mesh/fr&oldid=1476550>"