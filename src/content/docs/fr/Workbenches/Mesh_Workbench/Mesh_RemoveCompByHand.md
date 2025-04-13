---
title: Mesh Suppression manuelle de composants
---
|  |
| --- |
| Mesh Suppression manuelle de composants |
| Emplacement du menu |
| Maillages → Supprimer manuellement des composants... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Supprimer des composants](/Mesh_RemoveComponents/fr "Mesh RemoveComponents/fr"), [Arch Séparer un objet Mesh](/Arch_SplitMesh/fr "Arch SplitMesh/fr") |
|  |

## Description

La commande **Suppression manuelle de composants** supprime des composants d'objets maillés.

## Utilisation

1. Un composant fait référence à un groupe complet de faces connectées. Un objet maillé contient généralement un seul composant. Mais, par exemple après avoir utilisé la commande [Mesh Fusionner](/Mesh_Merge/fr "Mesh Merge/fr"), un objet maillé peut contenir plusieurs composants.
2. La commande utilise la couleur rouge pour marquer les composants sélectionnés. Pour les voir correctement :
   * Le Vue**Display Mode** des objets maillés doit montrer des faces. Si nécessaire, utilisez la commande [Std Style de représentation](/Std_DrawStyle/fr "Std DrawStyle/fr") pour remplacer cette propriété.
   * La Vue**Shape Color** des objets maillés ne doit pas être rouge.
3. Sélectionnez l'option **Maillages → ![](/images/Mesh_RemoveCompByHand.svg) Supprimer manuellement des composants...**  du menu.
4. Le curseur se transforme en icône de main.
5. Sélectionnez les composants que vous souhaitez supprimer dans la [vue 3D](/3D_view/fr "3D view/fr").
6. Vous pouvez sélectionner **Effacer les faces sélectionnées** du menu contextuel de la vue 3D pour désélectionner tous les composants.
7. Sélectionnez **Supprimer les faces sélectionnées** du menu contextuel de la vue 3D pour supprimer les composants sélectionnés.
8. Sélectionnez **Quitter le mode de suppression** du menu contextuel de la vue 3D pour terminer la commande.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_RemoveCompByHand/fr&oldid=1278637>"