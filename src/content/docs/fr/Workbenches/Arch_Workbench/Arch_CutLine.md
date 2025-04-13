---
title: Arch Couper selon une ligne
---
:::caution
Cette commande est obsolète.Elle n'est plus disponible depuisversion 1.0 et suivantes. Utilisez plutôtArch Couper selon un plan.
:::

|  |
| --- |
| Arch Couper selon une ligne |
| Emplacement du menu |
| Arch → Couper selon une ligne |
| Ateliers |
| [Arch](/Arch_Workbench/fr "Arch Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Arch Couper selon un plan](/Arch_CutPlane/fr "Arch CutPlane/fr") |
|  |

## Description

L'outil **Arch Couper selon une ligne** coupe un objet solide Arch comme un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") ou une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") avec une arête droite. En se basant sur cette arête et sur la normale du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr"), une face de coupe est générée.

![](/images/Arch_CutLine_example_1.png) ![](/images/Arch_CutLine_example_2.png)

Un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") coupé par une ligne.  
À gauche : la boîte soustractive qui apparaît lors de l'utilisation de l'outil.  
À droite : le mur résultant après la coupe.

## Utilisation

1. Si nécessaire, aligner le plan de travail :
   * L'arête sélectionnée peut ne pas être parallèle à la normale du plan de travail.
   * La face de coupe générée sera perpendiculaire au plan de travail.
2. Sélectionner l'objet à découper dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr").
3. Sélectionner une ligne droite. Celle-ci doit être sélectionnée dans la [vue 3D](/3D_view/fr "3D view/fr").
4. Appuyer sur le ![](/images/Arch_CutLine.svg) Couper selon une ligne.
5. Choisir **Derrière** ou **Devant** pour indiquer de quel côté de la face de coupe la matière doit être enlevée.
6. Appuyer sur le bouton OK.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CutLine/fr&oldid=1432907>"