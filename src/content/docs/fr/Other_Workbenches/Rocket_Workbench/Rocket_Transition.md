---
title: Rocket Transition
---
|  |
| --- |
| Rocket Transition |
| Emplacement du menu |
| Rocket → Transition |
| Ateliers |
| [Rocket](/Rocket_Workbench/fr "Rocket Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

Les transitions sont comme [Coiffe](/Rocket_NoseCone/fr "Rocket NoseCone/fr") à bien des égards. Bien que généralement coniques, elles peuvent avoir les mêmes formes que les coiffes mais sont beaucoup plus polyvalents.

L'application la plus courante consiste à passer d'un diamètre de corps à un autre, par exemple entre les étapes, ou à la base d'un carénage de charge utile. Elle peut également être utilisée pour la pointe d'une fusée où le diamètre de la fusée diminue vers la tuyère d'échappement.

## Utilisation

1. Il existe plusieurs façons d'appeler la commande:
   * Appuyez sur le bouton ![](/images/Rocket_Transition.svg) Transition.
   * Sélectionnez l'option **Rocket → ![](/images/Rocket_Transition.svg) Transition** dans le menu.
   * Double-cliquez sur un objet Transition dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Définissez les options et appuyez sur OK.

## Options

### Types de transition

Les transitions prennent en charge toutes les formes prises en charge par Coiffe, voir [Options de coiffe](/Rocket_NoseCone/fr#Options "Rocket NoseCone/fr") pour plus de détails.

### Styles de transition

Les transitions prennent en charge tous les styles pris en charge par Coiffe, voir [Options de coiffe](/Rocket_NoseCone/fr#Options "Rocket NoseCone/fr") pour plus de détails.

De plus, les transitions ont une autre option de style, *Solid Core*. Pour ce style, la transition est solide mais avec un trou d'une extrémité à l'autre. Un exemple où cela pourrait être utilisé est une transition en balsa conçue pour maintenir un tube du corps à la manière d'une bague de centrage.

![](/images/Core_transition_with_tube.png)

Transition avec épaulement arrière tenant un tube du corps

![](/images/Core_transition.png)

Transition avec épaulement arrière montrant le noyau interne

### Coupé

Des formes telles qu'une ogive ou une parabole peuvent être appliquées de deux manières. Le standard, non coupé, traite l'axe parallèle à l'axe central décalé par le plus petit des rayons avant et arrière comme l'axe de dessin de la forme. La méthode découpée applique une version plus grande de la courbe centrée autour de l'axe de transition et coupe la partie en avant du rayon le plus petit. Dans cet exemple, la courbe non découpée est dessinée de *x=0* à *x=60* autour de l'axe *y=0*. La version découpée étend la forme le long de l'axe x jusqu'à *y=0* et ne prend que la partie de *x=0* à *x=60*.

![](/images/ParabolaClippedVsNon.png)

Courbes coupées et non coupées pour une transition parabolique

Pour certaines formes, cela ne fait aucune différence dans la forme de la transition, comme pour les formes coniques ou ogives. Dans ces cas, le découpage est ignoré.

![](/images/OgiveClippedVsNon.png)

Courbes coupées et non coupées pour une transition en ogive

## Remarques

Il y a des problèmes connus avec le dessin des transitions sur lesquels on travaille actuellement.

* Les versions coupées des transitions elliptiques produisent des formes non valides
* Les versions coupées où le rayon avant est plus grand que le rayon arrière peuvent produire des formes invalides. Si tel est le cas, vous pouvez concevoir la transition vers l'arrière et utiliser la position pour la faire pivoter.

## Propriétés

Rocket Component

Ces paramètres sont fournis à titre indicatif et n'ont aucun effet sur la conception du composant.

* Données**Description** : Description du composant
* Données**Manufacturer** : Fabricant lorsqu'il est connu
* Données**Material** : Matériau lorsqu'il est connu
* Données**Part Number** : Numéro de pièce du fabricant

Transition

* Données**Aft Diameter** : Le diamètre de la base de la transition
* Données**Aft Shoulder** : Vrai lorsque la transition comprend un épaulement à la base.
* Données**Aft Shoulder Diameter** : Le diamètre de l'épaulement. Il doit être inférieur au **Aft Diameter** de la transition.
* Données**Aft Shoulder Length** : La longueur de l'épaulement
* Données**Aft Shoulder Thickness** : Lorsque le *Style de transition* est *Hollow* ou *Capped*, ceci détermine l'épaisseur de la paroi de l'épaulement.
* Données**Clipped** : Définit la forme de la transition en combinaison avec le **Transition Type**, voir [Options](#Options).
* Données**Coefficient** : Combiné avec **Transition Type**, ceci définit la forme de la transition, voir [Options](#Options).
* Données**Core Diameter** : Lorsque **Transition Style** est *Solid Core*, ceci détermine la taille du trou à travers la transition, voir [Options](#Options).
* Données**Fore Diameter** : Le diamètre de l'avant de la transition
* Données**Fore Shoulder** : Vrai lorsque la transition comprend une épaule à l'extrémité avant.
* Données**Fore Shoulder Diameter** : Le diamètre de l'épaulement. Il doit être inférieur au *diamètre de l'avant* de la transition.
* Données**Fore Shoulder Length** : La longueur de l'épaulement
* Données**Fore Shoulder Thickness** : Lorsque le *Style de transition* est *Creux* ou *Recouvert*, ceci détermine l'épaisseur de la paroi de l'épaulement.
* Données**Length** : La longueur de la transition sans les épaulements.
* Données**Resolution** : Utilisé en interne, ce paramètre définit le nombre de points de données à utiliser pour dessiner le contour du cône de la coiffe.
* Données**Thickness** : **Transition Type** est *Hollow* ou *Capped*, ce paramètre détermine l'épaisseur de la paroi de la transition.
* Données**Transition Style** : Définit le style de la transition, voir [Options](#Options).
* Données**Transition Type** : Définit la forme de la transition en utilisant le coefficient si nécessaire, voir [Options](#Options).

## Script

Voir aussi : [Category:API/fr](/Category:API/fr "Category:API/fr") et [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

A définir

## Tutoriels et apprentissage

[Transitions atelier Rocket](https://youtu.be/O5Ze4MYAHNA) Tutoriel sur YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_Transition/fr&oldid=1123387>"