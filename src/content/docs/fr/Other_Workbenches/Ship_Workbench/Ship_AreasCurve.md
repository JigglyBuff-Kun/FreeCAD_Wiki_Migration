---
title: Ship Courbe de surface
---
|  |
| --- |
| Ship Courbe de surface |
| Emplacement du menu |
| Ship design → Areas curve |
| Ateliers |
| [Ship](/Ship_Workbench/fr "Ship Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Trace la courbe des aires transversales.

![](/images/FreeCAD-Ship-s60Areas.png)

Conception d'un projet de courbe des surfaces transversales

La courbe des surfaces transversales offre des informations très précieuses lors des premières étapes de la conception d'un navire, car elle donne une idée de la forme et de la répartition du volume du navire.

Une attention particulière doit être accordée aux éventuels épaulements de la courbe, qui indiqueraient une grande résistance du navire (moins d'efficacité en d'autres termes).

## Utilisation

Pour calculer la courbe des aires transversales, sélectionnez une **instance de bateau** (voir [Ship Coque](/Ship_CreateShip/fr "Ship CreateShip/fr")), et lancez **Ship design → ![](/images/Ship_AreasCurve.svg) Areas curve**.

Le panneau des tâches et une annotation de surface libre dans la [Vue 3D](/3D_view/fr "3D view/fr") sont affichés. L'annotation est temporaire et sera supprimée lorsque vous fermerez l'outil, ne vous inquiétez donc pas à ce sujet.

Par défaut, le tirant d'eau du navire de conception est sélectionné, ainsi qu'un angle d'assiette nul. Vous êtes libre de modifier ces deux champs. Chaque fois que les données de tirant d'eau et d'assiette sont modifiées, certaines informations de base concernant la partie immergée du navire sont mises à jour dans la zone de texte.

Vous pouvez également sélectionner le nombre de sections transversales à considérer. Plus le nombre de sections est élevé, meilleure sera la résolution obtenue, au prix d'un temps de calcul plus long.

Lorsque vous appuyez sur le bouton Accept, le calcul commence. Il se peut que FreeCAD soit bloqué pendant un certain temps, soyez patient. Lorsque le calcul est terminé, un tracé de la courbe des aires transversales est créé, ainsi qu'une feuille de calcul avec ces informations.

## Tutoriels

* [Tutoriel Construction navale S60](/FreeCAD-Ship_s60_tutorial/fr "FreeCAD-Ship s60 tutorial/fr")
* [Tutoriel Construction navale S60 (II)](/FreeCAD-Ship_s60_tutorial_(II)/fr "FreeCAD-Ship s60 tutorial (II)/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_AreasCurve/fr&oldid=1133273>"