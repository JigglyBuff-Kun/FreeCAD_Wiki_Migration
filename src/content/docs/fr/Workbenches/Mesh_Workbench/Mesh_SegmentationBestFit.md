---
title: Mesh Segmentation adaptée
---
|  |
| --- |
| Mesh Segmentation adaptée |
| Emplacement du menu |
| Maillages → Créer des segments de maillage de surfaces ajustées... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Segmentation](/Mesh_Segmentation/fr "Mesh Segmentation/fr") |
|  |

## Description

La commande **Segmentation adaptée** crée des segments de maillage séparés pour les types de surface spécifiés d'un objet maillé. La commande peut également identifier leurs paramètres, lesquels peuvent être utiles lors de la reconfiguration d'un objet maillé.

## Utilisation

1. Si vous souhaitez identifier les paramètres d'un type de surface, notez que la commande utilise la couleur rouge pour marquer les faces sélectionnées pour cette option. Pour les voir correctement :
   * Vue**Display Mode** de l'objet maillé devrait idéalement être `Flat lines`, mais devrait au moins montrer des faces. Si nécessaire, utilisez la commande [Std Style de représentation](/Std_DrawStyle/fr "Std DrawStyle/fr") pour remplacer cette propriété.
   * Vue**Shape Color** de l'objet maillé ne doit pas être rouge.
2. Sélectionnez un seul objet maillé.
3. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_SegmentationBestFit.svg) Segmenter le maillage par des surfaces adaptées....
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_SegmentationBestFit.svg) Segmenter le maillage par des surfaces adaptées...** du menu.
4. Le panneau des tâches **Segmentation du maillage** s'ouvre.
5. Appuyez sur l'un des boutons Paramètres... pour identifier les paramètres d'une surface :
   * La fenêtre de dialogue **Ajustement de la surface** s'ouvre.
   * Sélectionnez une ou plusieurs faces appartenant à la surface :
     + Appuyez sur le bouton Région et tout en maintenant le bouton gauche de la souris, dessinez une région, une spline fermée, dans la [vue 3D](/3D_view/fr "3D view/fr"). Les faces qui tombent (partiellement) à l'intérieur de la région seront sélectionnées.
     + Appuyez sur le bouton Triangle pour sélectionner des faces une par une.
     + Appuyez sur le bouton Effacer pour effacer la sélection.
   * Appuyez sur le bouton Calculer pour calculer les paramètres.
   * Appuyez sur le bouton OK ou Annuler pour fermer la fenêtre de dialogue.
6. Sélectionnez le ou les types de surface pour lesquels vous souhaitez créer des segments de maillage :
   * **Plan**
   * **Cylindre**
   * **Sphère**
7. Spécifiez les valeurs de **Tolérance**.
8. Spécifiez les valeurs **Nombre minimum de faces**.
9. Appuyez sur le bouton OK.
10. La commande créera un [groupe](/Std_Group/fr "Std Group/fr") contenant des objets maillés séparés, chacun étant un segment de l'objet maillé d'origine.
11. Si le groupe créé est vide, essayez à nouveau d'utiliser la commande avec les paramètres modifiés.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_SegmentationBestFit/fr&oldid=1496065>"