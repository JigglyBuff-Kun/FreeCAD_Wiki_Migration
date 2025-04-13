---
title: Fasteners Fraisage
---
:::caution
Cette commande est obsolète, elle n'est pas disponible dansversion 0.5.13 et suivantes. UtilisezPartDesign Perçageà la place.
:::

|  |
| --- |
| Fasteners Fraisage |
| Emplacement du menu |
| Fasteners → Réaliser un fraisage |
| Ateliers |
| [Fasteners](/Fasteners_Workbench/fr "Fasteners Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/Fasteners_ChamferHole.svg) **Fasteners Fraisage** chanfreine les trous pour les vis à tête fraisée.

![](/images/Fasteners_ChamferHole_Example.png)

Trous chanfreinés pour vis à tête fraisée

## Utilisation

1. La commande peut détecter automatiquement le diamètre des vis. Les trous doivent avoir le bon diamètre pour que cela fonctionne. Par exemple, une vis M5 nécessite un trou de passage de 5 mm ou un trou de taraudage de 4,2 mm. La commande ![](/images/Fasteners_ScrewCalculator.svg) [Fasteners Calculateur de trous de vis](/Fasteners_ScrewCalculator/fr "Fasteners ScrewCalculator/fr") peut être utilisée pour déterminer le diamètre des trous taraudés.
2. Sélectionnez une pièce avec des trous circulaires.
3. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Fasteners_ChamferHole.svg) Réaliser un fraisage.
   * Sélectionnez l'option **Fasteners → ![](/images/Fasteners_ChamferHole.svg) Réaliser un fraisage** du menu.
4. Le panneau de tâches **Trous chanfreinés pour vis à tête fraisée** s'ouvre.
5. La liste **Arêtes à chanfreiner** affiche tous les bords circulaires de la pièce sélectionnée.
6. Sélectionnez les arêtes que vous voulez chanfreiner en effectuant l'une des opérations suivantes :
   * Cliquez sur des arêtes circulaires individuelles ou sur des faces avec des arêtes circulaires dans la [vue 3D](/3D_view/fr "3D view/fr") :
     + Il n'est pas nécessaire de maintenir la touche Ctrl enfoncée.
     + Chaque arête sélectionnée est cochée dans la liste **Arêtes à chanfreiner**.
     + Le diamètre de la vis pour chaque arête est détecté automatiquement.
     + Les arêtes ne peuvent pas être désélectionnées dans la [vue 3D](/3D_view/fr "3D view/fr").
   * Sélectionnez ou désélectionnez les arêtes en les cochant ou décochant dans la liste **Arêtes à chanfreiner** :
     + Dans ce cas, le diamètre de la vis n'est pas détecté automatiquement.
7. Vous pouvez modifier le diamètre de la vis de chaque arête de la liste **Arêtes à chanfreiner** en double-cliquant sur leur champ **Diamètre** et en sélectionnant une nouvelle valeur dans la liste déroulante qui apparaît.
8. Modifiez éventuellement le diamètre de vis de toutes les arêtes sélectionnées en sélectionnant une nouvelle valeur dans la liste déroulante **Diamètre** située sous la liste **Arêtes à chanfreiner**.
9. Spécifiez en option un **Type de vis**.
10. Appuyez sur le bouton OK.
11. Un objet Countersunk avec un évidement chanfreiné pour chaque arête sélectionnée est créé.
12. Fixez éventuellement des vis. Voir [atelier Fasteners](/Fasteners_Workbench/fr#Utilisation "Fasteners Workbench/fr").

## Remarques

* Les objets Countersunk sont paramétriques. Un objet Countersunk existant peut être modifié en double-cliquant dessus dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Le panneau de tâches **Trous chanfreinés pour vis à tête fraisée** s'ouvre. Des arêtes circulaires peuvent être ajoutées ou supprimées et les paramètres des arêtes peuvent être modifiés.

Retrieved from "<http://wiki.freecad.org/index.php?title=Fasteners_ChamferHole/fr&oldid=1393862>"