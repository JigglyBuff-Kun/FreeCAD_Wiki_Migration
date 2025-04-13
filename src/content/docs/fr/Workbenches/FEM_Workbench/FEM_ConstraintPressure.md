---
title: FEM Charge de pression
---
|  |
| --- |
| FEM Charge de pression |
| Emplacement du menu |
| Modèle → Conditions limites et charges mécaniques → Charge de pression |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Charge d'effort](/FEM_ConstraintForce/fr "FEM ConstraintForce/fr") |
|  |

| Solveurs |
| --- |
| CalculiX, Elmer |

## Description

Applique une charge de pression à une face.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/FEM_ConstraintPressure.svg) Charge de pression.
   * Sélectionnez l'option **Modèle → Conditions limites et charges mécaniques → ![](/images/FEM_ConstraintPressure.svg) Charge de pression** du menu.
2. Appuyez sur le bouton Ajouter et sélectionnez la/les face(s) dans la [vue 3D](/3D_view/fr "3D view/fr"). Vous pouvez appuyer sur le bouton Supprimer et cliquez sur les faces que vous souhaitez supprimer de la sélection.
3. Modifiez la fenêtre appropriée pour spécifier la charge de pression en MPa.
4. Cochez la case pour inverser la direction si nécessaire.

![](/images/FEM_Pressure_example.PNG)

Charge de pression appliquée à un cylindre

## Remarques

* La répartition de la pression sur une face est toujours uniforme et toujours perpendiculaire à la face.

* version 0.21 et précédentes : la charge de pression peut être appliquée aux coques, mais seulement lorsque [Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr") est utilisé pour le maillage et que le maillage de groupe est réglé à true. Ce paramètre est codé en dur à true, de sorte que l'utilisateur n'a pas à s'en préoccuper. Cependant, en raison d'un bogue, la charge de pression peut nécessiter un remaillage pour fonctionner sur des coques.
* Cette fonction utilise le [jeu de paramètres \*DLOAD de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node190.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPressure/fr&oldid=1543551>"