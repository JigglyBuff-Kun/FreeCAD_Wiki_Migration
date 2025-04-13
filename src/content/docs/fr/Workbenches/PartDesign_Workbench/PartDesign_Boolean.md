---
title: PartDesign Opérations booléennes
---
|  |
| --- |
| PartDesign Opérations booléennes |
| Emplacement du menu |
| PartDesign → Créer une opération booléenne |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

**PartDesign Opérations booléennes** importe un ou plusieurs [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") ou [PartDesign Clones](/PartDesign_Clone/fr "PartDesign Clone/fr") (désignés comme "corps d'outils") dans un PartDesign Corps actif et applique une opération booléenne (union, soustraction ou intersection).

![](/images/PartDesign_Boolean_example.png)

À gauche : un corps actif (A) avec des corps (B) et (C).  
À droite : le résultat après une soustraction booléenne.

## Utilisation

1. [Activer le corps](/PartDesign_Body/fr#Statut_actif "PartDesign Body/fr") qui doit recevoir la fonction booléenne. ***Remarque** : il est important de s'assurer que ni le corps actif, ni aucune des fonctions qu'il contient ne soit sélectionné avant de passer à l'étape 2.*
2. Pressez le bouton ![](/images/PartDesign_Boolean.svg) Créer une opération booléenne.
3. Dans **Paramètres booléens**, cliquez le bouton Ajouter un corps. Le corps actif va temporairement disparaître de la vue 3D pour faciliter les sélections.
4. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez le corps à utiliser dans la fonction booléenne. Répétez pour ajouter plus de corps.
5. Sélectionnez le type d'opération booléenne dans le menu déroulant (fusion, soustraction ou intersection).
6. Cliquer OK.

Il est également possible de sélectionner des objets avant d'appuyer sur le bouton booléen. Ils seront ajoutés automatiquement. Lors de la présélection, vous n'êtes pas limité aux corps. Vous pouvez également sélectionner les objets suivants : [PartDesign Forme liée](/PartDesign_ShapeBinder/fr "PartDesign ShapeBinder/fr"), [PartDesign Sous forme liée](/PartDesign_SubShapeBinder/fr "PartDesign SubShapeBinder/fr") et même des solides créés avec d'autres ateliers.

## Options

* **Union :** fusionne le ou les corps désignés avec le corps actif.
* **Soustraction :** soustrait le corps ou les corps désignés du corps actif.
* **Intersection :** extrait l'intersection du ou des corps sélectionnés avec le corps actif.
* Presser le bouton Enlever un corps pour retirer un corps, en le sélectionnant dans la [vue 3D](/3D_view/fr "3D view/fr").

## Propriétés

* Données**Type** : définit l'opération booléenne (Fuse, Cut, Common)
* Données**Label** : nom donné à l'opération, ce nom peut être changé à volonté.
* Données**Group** : liste des corps d'outils.
* Vue**Display** : définit l'affichage entre 2 modes :
  + Résultat (par défaut) : affiche le résultat de la fonction booléenne. Dans ce mode, les corps d'outils ne peuvent pas être affichés dans leur état original, même si leur visibilité est activée.
  + Outils : affiche les corps d'outils dans leur état d'origine. Ce mode est utile lorsque les corps d'outils doivent être modifiés ou utilisés dans des opérations ultérieures.
* Vue**Selectable** : vrai ou faux. Si la valeur est false, l'élément ne peut pas être sélectionné dans la vue 3D.
* Vue**Visibility** : vrai ou faux. Permet de basculer la visibilité de l'élément dans la vue 3D.

## Limites

* Pour que Intersection puisse fonctionner avec plus d'un corps d'outil, ces derniers doivent tous avoir une partie commune avec le corps actif.
* Les corps utilisés adoptent l'origine locale du corps actif. Si le corps actif n'est pas situé à (0,0,0) dans le système de coordonnées global, le placement des corps d'outils doit être relatif au corps actif. Il peut être plus facile de laisser le placement du corps actif à l'origine avant d'appliquer la fonction booléenne, que de modifier son placement.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Boolean/fr&oldid=1559260>"