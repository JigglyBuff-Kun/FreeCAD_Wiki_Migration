---
title: Mesh Lissage
---
|  |
| --- |
| Mesh Lissage |
| Emplacement du menu |
| Maillages → Lisser... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande **Lissage** lisse les objets maillés en modifiant la position de leurs sommets.

![](/images/Meshes_Smooth.jpg)

Le panneau des tâches Lissage après avoir choisi l'option Seulement la sélection

## Utilisation

1. Si vous prévoyez de lisser uniquement certaines zones, notez que la commande utilise la couleur rouge pour marquer les faces sélectionnées pour cette option. Pour les voir correctement :
   * Vue**Display Mode** des objets maillés devrait idéalement être `Flat lines`, mais devrait au moins montrer des faces. Si nécessaire, utilisez la commande [Std Style de représentation](/Std_DrawStyle/fr "Std DrawStyle/fr") pour remplacer cette propriété.
   * Vue**Shape Color** des objets maillés ne doit pas être rouge.
2. Sélectionnez un ou plusieurs objets maillés.
3. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_Smoothing.svg) Lisser...
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_Smoothing.svg) Lisser...** du menu.
4. Le panneau des tâches **Lissage** s'ouvre.
5. Si vous souhaitez uniquement lisser les zones sélectionnées: choisissez l'option **Seulement la sélection** :
   * Le panneau **Sélection** est ajouté au panneau des tâches.
   * Spécifiez les options de région :
     + **Respecter uniquement les triangles visibles**
     + **Respecter uniquement les triangles dont les normales font face à l'écran**
   * Appuyez sur le bouton Ajouter et tout en maintenant le bouton gauche de la souris enfoncé, dessinez une région, une spline fermée, dans la [vue 3D](/3D_view/fr "3D view/fr"). Les faces qui correspondent aux options de région et tombent (partiellement) à l'intérieur de la région seront sélectionnées.
   * Si vous le souhaitez, appuyez sur le bouton Effacer pour effacer la sélection.
6. Sélectionnez le lissage **Méthode** :
   * **Taubin**
   * **Laplace**
7. Spécifiez les **Paramètres** :
   * **Itérations** : plus ce nombre est élevé, plus le résultat final est lisse. La valeur a également un impact sur le temps de traitement total de la commande. Évitez les valeurs élevées si les objets maillés ont de nombreux points.
   * **λ** : la valeur doit être comprise dans la plage `0` - `1`.
   * **μ** : la valeur doit être comprise dans la plage `0` - `1`.
8. Appuyez sur le bouton OK pour terminer la commande.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Smoothing/fr&oldid=1333675>"