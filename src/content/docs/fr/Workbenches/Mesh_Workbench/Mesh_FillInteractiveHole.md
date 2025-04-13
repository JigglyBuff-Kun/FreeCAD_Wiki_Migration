---
title: Mesh Boucher un trou
---
|  |
| --- |
| Mesh Boucher un trou |
| Emplacement du menu |
| Maillages → Boucher un trou |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Remplir les trous](/Mesh_FillupHoles/fr "Mesh FillupHoles/fr"), [Mesh Ajouter un triangle](/Mesh_AddFacet/fr "Mesh AddFacet/fr") |
|  |

## Description

La commande **Boucher un trou** remplit les trous sélectionnés dans les objets maillés.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_FillInteractiveHole.svg) Boucher un trou
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_FillInteractiveHole.svg) Boucher un trou** du menu.
2. Le curseur se transforme en icône triangulaire.
3. Sélectionnez une face qui partage une arête avec le trou que vous souhaitez fermer.
4. Le trou est fermé.
5. Répétez éventuellement cette opération pour fermer des trous supplémentaires.
6. Si nécessaire, vous pouvez utiliser [Std Annuler](/Std_Undo/fr "Std Undo/fr") pour annuler la dernière action de la commande.
7. Sélectionnez l'option **Quitter le mode de remplissage des trous** du menu contextuel de la [vue 3D](/3D_view/fr "3D view/fr") pour terminer la commande.

## Remarques

* Si les arêtes d'un trou ne se trouvent pas dans le même plan, le résultat de la commande peut dépendre de la face sélectionnée.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_FillInteractiveHole/fr&oldid=1333653>"