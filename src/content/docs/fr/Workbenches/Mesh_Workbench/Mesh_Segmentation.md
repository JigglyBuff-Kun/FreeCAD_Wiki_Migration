---
title: Mesh Segmentation
---
|  |
| --- |
| Mesh Segmentation |
| Emplacement du menu |
| Maillages → Segmenter le maillage... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Segmentation adaptée](/Mesh_SegmentationBestFit/fr "Mesh SegmentationBestFit/fr") |
|  |

## Description

La commande **Segmentation** crée des segments de maillage séparés pour des types de surface spécifiés d'un maillage.

## Utilisation

1. Sélectionnez un seul objet maillé.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_Segmentation.svg) Segmenter le maillage...
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_Segmentation.svg) Segmenter le maillage...** du menu.
3. Le panneau des tâches **Segmentation du maillage** s'ouvre.
4. Vouz pouvez cochez l'option **Lissage du maillage** et spécifier une valeur pour le lissage du maillage. Plus la valeur est élevée, plus le maillage est supposé lisse. La spécification de `0` a le même effet que la désactivation de cette option. Ne sélectionnez pas cette option si vous souhaitez créer des segments plans.
5. Sélectionnez le type de surface pour lequel vous souhaitez créer des segments de maillage. Vous pouvez sélectionner plusieurs types, mais cela peut conduire à de moins bons résultats. Les types de surface disponibles sont :
   * **Plan**
   * **Cylindre**
   * **Sphère**
   * **Forme libre**
6. Spécifiez les paramètres requis. Assurez-vous que les valeurs **Tolérance** ne sont pas trop faibles et que les valeurs **Nombre minimum de faces** ne sont pas trop élevées.
7. Appuyez sur le bouton OK.
8. La commande créera un [groupe](/Std_Group/fr "Std Group/fr") contenant des objets maillés séparés, chacun étant un segment de l'objet maillé d'origine.
9. Si le groupe créé est vide, essayez à nouveau d'utiliser la commande avec les paramètres modifiés.

## Remarques

* La version actuelle de la commande a du mal à identifier les faces sur les bords des types de surface.
* Dans certains cas, la commande [Mesh Segmentation adaptée](/Mesh_SegmentationBestFit/fr "Mesh SegmentationBestFit/fr") produira de meilleurs résultats.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Segmentation/fr&oldid=1333671>"