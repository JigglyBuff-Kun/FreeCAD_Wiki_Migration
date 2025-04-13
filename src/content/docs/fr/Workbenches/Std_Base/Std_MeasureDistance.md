---
title: Std Mesurer une distance
---
:::caution
Cette commande est obsolète, elle ne sera pas disponible dansversion 1.0 et suivantes.UtiliserStd Mesureà la place.
:::

|  |
| --- |
| Std Mesurer une distance |
| Emplacement du menu |
| Outils → Mesurer une distance‏‎ |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Mesurer](/Std_Measure/fr "Std Measure/fr"), [Draft Cote](/Draft_Dimension/fr "Draft Dimension/fr") |
|  |

## Description

La commande **Std Mesurer une distance** crée un objet distance qui mesure et affiche la distance entre deux points.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Std_MeasureDistance.svg) Mesurer une distance.
   * Utilisez **Outils → ![](/images/Std_MeasureDistance.svg) Mesurer une distance** dans le menu.
2. Sélectionnez le premier point dans la [vue 3D](/3D_view/fr "3D view/fr").
3. Sélectionnez le deuxième point n'importe où sur un objet dans la vue 3D.
4. L'ordre de sélection des points peut avoir un impact sur la position de la ligne de la distance.
5. Vous pouvez également inverser la position de la ligne de cote en modifiant la propriété Vue**Mirror** de l'objet distance.

## Remarques

* Vous ne pouvez pas utiliser les outils d'aimantation de l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") avec cette commande.
* Pour ajouter des cotes aux dessins, utilisez les outils de cotes de l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").
* Pour des outils de mesure plus complets, installez le ![](/images/Manipulator_workbench_icon.svg) [atelier Manipulator](/Manipulator_Workbench/fr "Manipulator Workbench/fr") (un [atelier externe](/External_workbenches/fr "External workbenches/fr")).

## Propriétés

### Données

Base

* Données**Label** : par défaut, l'étiquette contient la distance mesurée mais cette distance n'est pas mise à jour lorsque P1 ou P2 sont modifiés ultérieurement.

Measurement

* Données**P1** : premier point de la dimension.
* Données**P2** : deuxième point de la dimension.
* Données**Distance** : (en lecture seulement) la distance mesurée entre P1 et P2.

### Vue

Base

* Vue**Dist Factor** : ce facteur, multiplié par la distance mesurée, détermine le décalage de la ligne de cote.
* Vue**Font Size** : la hauteur des lettres (hauteur de ligne en pixels).
* Vue**Mirror** : si la valeur est `true`, la position de la ligne de cote par rapport à P1 et P2 est inversée.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_MeasureDistance/fr&oldid=1442058>"