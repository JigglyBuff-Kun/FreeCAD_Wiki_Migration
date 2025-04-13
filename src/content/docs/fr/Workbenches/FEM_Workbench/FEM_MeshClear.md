---
title: FEM Effacer le maillage FEM
---
|  |
| --- |
| FEM Effacer le maillage FEM |
| Emplacement du menu |
| Menu contextuel sur l'objet maillé → Effacer le maillage de l'atelier FEM |
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

Permet à l'utilisateur de réinitialiser le maillage à partir de l'objet maillé FEM. Le maillage existe toujours mais n'a pas de sommets, d'arêtes, de faces ou d'éléments. Les informations de maillage, les paramètres Netgen/Gmsh, les régions maillées, les groupes de mailles et la couche limite du maillage restent dans l'arborescence du modèle, ce qui signifie que le maillage peut être reproduit ultérieurement. L'utilisation principale de cette fonction est d'alléger le fichier FreeCAD, soit pour améliorer les performances lors de l'utilisation de FreeCAD, soit pour économiser de l'espace disque ou permettre un transfert facile des fichiers sans perdre les données du maillage.

## Utilisation

1. Cliquez avec le bouton droit de la souris sur un objet maillé FEM ![](/images/FEM_MeshNetgenFromShape.svg) [Netgen](/FEM_MeshNetgenFromShape/fr "FEM MeshNetgenFromShape/fr") ou ![](/images/FEM_MeshGmshFromShape.svg) [Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr") dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Sélectionnez l'option **![](/images/FEM_MeshClear.svg) Effacer le maillage de l'atelier FEM** dans le menu contextuel.

## Remarques

Les objets de l'arborescence du modèle sont maintenus car ils représentent les données de maillage mais le maillage est maintenant effacé du fichier FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshClear/fr&oldid=1478164>"