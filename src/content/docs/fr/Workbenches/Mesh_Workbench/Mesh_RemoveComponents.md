---
title: Mesh Supprimer des composants
---
|  |
| --- |
| Mesh Supprimer des composants ‎ |
| Emplacement du menu |
| Maillages → Supprimer des composants... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Suppression manuelle de composants](/Mesh_RemoveCompByHand/fr "Mesh RemoveCompByHand/fr"), [Arch Séparer un objet Mesh](/Arch_SplitMesh/fr "Arch SplitMesh/fr") |
|  |

## Description

La commande **Supprimer des composants** supprime des composants d'objets maillés.

![](/images/Meshes_RemoveComponents.jpg)

Le panneau de tâches Supprimer des composants

## Utilisation

1. La commande utilise la couleur rouge pour marquer les faces sélectionnées. Pour les voir correctement :
   * Vue**Display Mode** des objets maillés devrait idéalement être `Flat lines`, mais devrait au moins montrer des faces. Si nécessaire, utilisez la commande [Std Style de représentation](/Std_DrawStyle/fr "Std DrawStyle/fr") pour remplacer cette propriété.
   * Vue**Shape Color** des objets maillés ne doit pas être rouge.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_RemoveComponents.svg) Supprimer des composants...
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_RemoveComponents.svg) Supprimer des composants...** du menu.
3. Le panneau des tâches **Supprimer des composants** s'ouvre.
4. Utilisez une ou plusieurs des options **Sélectionner** pour sélectionner des faces :
   * Appuyez sur le bouton Région et tout en maintenant le bouton gauche de la souris, dessinez une région, une spline fermée, dans la [vue 3D](/3D_view/fr "3D view/fr"). Les faces qui correspondent aux **Options de la région** et tombent (partiellement) à l'intérieur de la région seront sélectionnées.
   * Appuyez sur le bouton Tous pour sélectionner tous les faces.
   * Appuyez sur le bouton Composants pour sélectionner tous les composants avec moins que le nombre maximum de faces spécifié. Ici, un composant fait référence à un groupe complet de faces connectées. Un objet maillé contient généralement un seul composant. Mais, par exemple après avoir utilisé la commande [Mesh Fusionner](/Mesh_Merge/fr "Mesh Merge/fr"), un objet maillé peut contenir plusieurs composants.
   * Appuyez sur le bouton Choisir un triangle pour sélectionner une seule face dans la vue 3D. Si l'option **Sélectionner le composant en entier** est cochée, la sélection d'une face entraînera la sélection du composant entier auquel appartient la face.
5. Utilisez éventuellement une ou plusieurs des options **Désélectionner** pour désélectionner les faces. Ces options sont identiques aux options **Sélectionner**, sauf que le nombre de faces pour le bouton Composants est un nombre minimum.
6. Vous pouvez appuyer sur le bouton Inverser pour inverser la sélection.
7. Appuyez sur le bouton Supprimer pour supprimer les faces sélectionnées.
8. Appuyez sur le bouton Fermer pour fermer le panneau des tâches et terminer la commande.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_RemoveComponents/fr&oldid=1333666>"