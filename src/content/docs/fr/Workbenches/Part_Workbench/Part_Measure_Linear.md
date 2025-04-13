---
title: Part Mesure linéaire
---
:::caution
Cette commande est obsolète, elle ne sera pas disponible dans laversion 1.0 et suivantes.UtiliserStd Mesurerà la place.
:::

|  |
| --- |
| Part Mesure linéaire |
| Emplacement du menu |
| Mesure → Mesure linéaire |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Mesurer une distance](/Std_MeasureDistance/fr "Std MeasureDistance/fr"), [Draft Dimension](/Draft_Dimension/fr "Draft Dimension/fr") |
|  |

## Description

Cette commande mesure la distance entre deux éléments topologiques sélectionnés (sommet, arête, face) et affiche les mesures dans la [vue 3D](/3D_view/fr "3D view/fr"). La distance la plus courte entre les deux éléments et les mesures delta (distances parallèles aux axes globaux X, Y, Z) sont affichées.

L'apparence des mesures peut être modifiée dans le menu des [préférences](/PartDesign_Preferences/fr#Mesure "PartDesign Preferences/fr").

![](/images/MeasureLinear3D1.png)
![](/images/MeasureLinearDelta1.PNG)

## Utilisation

1. Sélectionner n'importe quelle combinaison de deux éléments : sommets, arêtes, faces...
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Part_Measure_Linear.svg) Mesure linéaire.
   * Sélectionnez l'option **Mesure → ![](/images/Part_Measure_Linear.svg) Mesure linéaire** dans le menu.
3. Alternativement, la commande peut être lancée sans sélection préalable. Un dialogue de sélection s'ouvre alors dans le [Panneau des tâches](/Task_Panel/fr "Task Panel/fr"). Un widget de contrôle fournit également des boutons pour réinitialiser la sélection, basculer l'affichage des mesures dans la [vue 3D](/3D_view/fr "3D view/fr") et effacer toutes les mesures.
4. Les mesures sont automatiquement supprimées à la fermeture du document.

## Remarques

* Vous ne pouvez pas utiliser les outils d'aimantation de l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") avec cette commande.
* Pour ajouter des cotes aux dessins, utilisez les outils de cotes de l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").
* Pour des outils de mesure plus complets, installez l'![](/images/Manipulator_workbench_icon.svg) [atelier Manipulator](/Manipulator_Workbench/fr "Manipulator Workbench/fr") (un [atelier externe](/External_workbenches/fr "External workbenches/fr")).

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Measure_Linear/fr&oldid=1459279>"