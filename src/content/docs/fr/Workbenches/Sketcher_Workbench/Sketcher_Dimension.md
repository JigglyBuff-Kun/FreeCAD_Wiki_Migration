---
title: Sketcher Contrainte de dimension
---
|  |
| --- |
| Sketcher Contrainte de dimension |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte de dimension |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| D |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_Dimension.svg) Sketcher Contrainte de dimension est l'outil de contrainte contextuelle de l'atelier Sketcher. En fonction de la sélection en cours, il propose des contraintes de dimension appropriées, mais aussi des contraintes géométriques.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

1. Vous pouvez sélectionner un ou plusieurs éléments (arêtes ou points). Les arêtes des [B-splines](/Sketcher_Workbench/fr#Sketcher_CompCreateBSpline "Sketcher Workbench/fr") ne sont actuellement pas prises en charge.
2. Il y a plusieurs façons de lancer l'outil :
   * Si la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") des **contraintes des dimensions** est réglée sur `Les deux` ou `Un seul outil` (par défaut) : appuyez sur le bouton ![](/images/Sketcher_Dimension.svg) Dimension.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_Dimension.svg) Dimension** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Dimension → ![](/images/Sketcher_Dimension.svg) Dimension** du menu contextuel.
   * S'il y a une sélection : cliquez avec le bouton droit de la souris dans la vue 3D et sélectionnez l'option **![](/images/Sketcher_Dimension.svg) Dimension** du menu contextuel.
   * Utilisez le raccourci clavier : D.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Si vous n'avez pas encore sélectionné d'élément : sélectionnez-en un.
5. En fonction du ou des éléments sélectionnés, une contrainte est proposée.
6. Vous pouvez sélectionner un élément supplémentaire.
7. Vous pouvez également désélectionner un élément en le cliquant à nouveau.
8. La contrainte proposée est mise à jour après chaque changement de sélection.
9. Vous pouvez appuyer sur la touche M une ou plusieurs fois pour faire défiler les autres contraintes disponibles, le cas échéant.
10. Si une contrainte géométrique est proposée, les éléments sélectionnés peuvent changer, ce qui donne un aperçu du résultat.
11. Faites l'une des choses suivantes :
    * Cliquez dans une zone vide de la [vue 3D](/3D_view/fr "3D view/fr") pour confirmer :
      1. Si une contrainte dimensionnelle est créée, le point cliqué détermine son emplacement. Pour une dimension linéaire, le point cliqué détermine également son type : ![](/images/Sketcher_ConstrainDistanceX.svg) [Contrainte de distance en X](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr"), ![](/images/Sketcher_ConstrainDistanceY.svg) [Contrainte de distance en Y](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") ou ![](/images/Sketcher_ConstrainDistance.svg) [Contrainte de distance](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr").
      2. Si une [contrainte pilotante de dimension](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") est créée, en fonction des [préférences](/Sketcher_Preferences/fr#Affichage "Sketcher Preferences/fr"), une fenêtre de dialogue s'ouvre pour [modifier sa valeur](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").
      3. Une contrainte est ajoutée.
      4. Cet outil fonctionne toujours en mode continu : vous pouvez continuer à créer des contraintes.
    * Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Dimension/fr&oldid=1496252>"