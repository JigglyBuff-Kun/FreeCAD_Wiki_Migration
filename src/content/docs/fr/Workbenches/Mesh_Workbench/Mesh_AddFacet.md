---
title: Mesh Ajouter un triangle
---
|  |
| --- |
| Mesh Ajouter un triangle |
| Emplacement du menu |
| Maillages → Ajouter un triangle |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Remplir les trous](/Mesh_FillupHoles/fr "Mesh FillupHoles/fr"), [Mesh Boucher un trou](/Mesh_FillInteractiveHole/fr "Mesh FillInteractiveHole/fr") |
|  |

## Description

La commande **Ajouter un triangle** ajoute des faces le long d'une limite d'un objet maillé ouvert. Elle peut être utilisée pour remplir des trous.

## Utilisation

1. Pendant la commande, le mode d'édition sera actif. Dans ce mode, il est impossible de faire pivoter ou de faire un panoramique de la [vue 3D](/3D_view/fr "3D view/fr") bien que le zoom fonctionne toujours. Mais vous pouvez temporairement sortir du mode d'édition avec la commande [Std Bascule en mode navigation](/Std_ToggleNavigation/fr "Std ToggleNavigation/fr") si vous avez besoin de changer la vue.
2. Sélectionnez un seul objet maillé ouvert.
3. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_AddFacet.svg) Ajouter un triangle.
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_AddFacet.svg) Ajouter un triangle** du menu.
4. Si vous survolez un sommet le long d'une limite du maillage, un marqueur jaune apparaîtra et un clic gauche le sélectionnera.
5. Sélectionnez deux points supplémentaires pour définir une face triangulaire. L'ordre des trois points, dans le sens horaire ou antihoraire, détermine la direction de la normale de la face.
6. Un menu apparaît avec les options suivantes :
   * **Ajouter un triangle** : ajoute la face au maillage.
   * **Inverser la normale** : inverse la normale de la face. Après avoir sélectionné cette option, un clic gauche affichera à nouveau le menu.
   * **Effacer** : supprime les points sélectionnés.
7. Ajoutez éventuellement plus de faces.
8. Choisissez **Terminer** dans le menu contextuel de la vue 3D pour terminer la commande.

## Remarques

Pour une indication plus précise de l'orientation des faces des objets maillés, assurez-vous que la propriété Vue**Lighting** des objets maillés est définie à `One side`. La couleur de l'arrière de leurs faces dépendra alors des paramètres de rétroéclairage : **Edition → Préférences... → Affichage → Vue 3D → Backlight color - Intensity**. Voir [Editeur de préférences](/Preferences_Editor/fr#Vue_3D "Preferences Editor/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_AddFacet/fr&oldid=1333638>"