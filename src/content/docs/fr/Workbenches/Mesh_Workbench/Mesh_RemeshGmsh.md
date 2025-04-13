---
title: Mesh Remailler avec Gmsh
---
|  |
| --- |
| Mesh Remailler avec Gmsh |
| Emplacement du menu |
| Maillages → Remailler... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Mesh Créer un maillage](/Mesh_FromPartShape/fr "Mesh FromPartShape/fr") |
|  |

## Description

La commande **Remailler avec Gmsh** remaille un objet maillé en utilisant le mailleur [Gmsh](https://gmsh.info/). Le nouveau maillage peut être plus fin ou plus grossier.

## Utilisation

1. Sélectionnez un seul objet maillé.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_RemeshGmsh.svg) Remailler...
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_RemeshGmsh.svg) Remailler...** du menu.
3. Le panneau des tâches **Remaillage par Gmsh** s'ouvre.
4. Spécifiez les paramètres requis. Voir la [configuration du mailleur Gmsh](/Mesh_FromPartShape/fr#Mailleur_Gmsh "Mesh FromPartShape/fr") de la commande [Mesh Créer un maillage](/Mesh_FromPartShape/fr "Mesh FromPartShape/fr").
5. Appuyez sur le bouton Appliquer pour remailler l'objet maillé.
6. Modifiez un ou plusieurs paramètres et appuyez à nouveau sur le bouton Appliquer jusqu'à ce que le nouveau maillage vous convienne.
7. Appuyez sur le bouton Fermer pour fermer le panneau des tâches et terminer la commande.

## Remarques

* Dans certains cas, cette commande produira un maillage avec des normales inversées. La commande [Mesh Inverser les normales](/Mesh_FlipNormals/fr "Mesh FlipNormals/fr") peut être utilisée pour corriger cela.

## Propriétés

Voir : [Mesh Feature](/Mesh_Feature/fr "Mesh Feature/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_RemeshGmsh/fr&oldid=1333710>"