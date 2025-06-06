---
title: Rocket Coiffe
---
|  |
| --- |
| Rocket Coiffe |
| Emplacement du menu |
| Rocket → Nose Cone |
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

Les coiffes sont de formes et de tailles diverses, dont la plupart sont difficiles à modeler sans programmation. Pour de nombreux constructeurs de fusées, cela rend le processus irréalisable. Cette commande permet de créer des coiffes de fusée en utilisant des propriétés simples combinées à un dialogue de tâches spécialisées.

## Utilisation

1. Il existe plusieurs façons d'appeler la commande:
   * Appuyez sur le bouton ![](/images/Rocket_NoseCone.svg) Nose Cone.
   * Sélectionnez l'option **Rocket → ![](/images/Rocket_NoseCone.svg) Nose Cone** dans le menu.
   * Double-cliquez sur un objet Nose Cone dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Définissez les options et appuyez sur OK.

## Options

### Types de coiffe

La théorie derrière les différentes formes de cône de nez est expliquée ici: [Aérodynamique de la pointe avant](https://fr.wikipedia.org/wiki/A%C3%A9rodynamique_de_la_pointe_avant)

Les types de coiffes pris en charge comprennent:

* Cône.

![](/images/NC_Cone_small.png)

Conique

* Cône arrondi. Pour toutes les formes arrondies, la longueur est la longueur réelle de la pointe et non la longueur virtuelle décrite dans la référence [Aérodynamique de la pointe avant](https://fr.wikipedia.org/wiki/A%C3%A9rodynamique_de_la_pointe_avant).

![](/images/NC_Blunted_Cone_small.png)

Cône arrondi sphérique

* Ogive.

![](/images/NC_Ogive_small.png)

Ogive

* Ogive arrondie. Pour toutes les formes arrondies, l'extrémité est arrondie de manière sphérique avec un diamètre spécifié. La longueur est la longueur réelle du nez et non la longueur virtuelle décrite dans la référence [Aérodynamique de la pointe avant](https://fr.wikipedia.org/wiki/A%C3%A9rodynamique_de_la_pointe_avant).

![](/images/NC_Blunted_Ogive_small.png)

Ogive arrondie sphérique

* Ogive sécante.

![](/images/NC_Secant_Ogive_small.png)

Ogive sécante

* Elliptique.

![](/images/NC_Elliptical_small.png)

Elliptique

* Sphérique. C'est un cas particulier du cône de nez elliptique où la longueur est égale à la moitié du diamètre.

![](/images/NC_Sperical_small.png)

Sphérique

* Parabole. La forme généralement considérée comme une parabole n'est pas générée à l'aide d'une série parabolique, mais d'une série de puissance avec un coefficient de 1/2. Ceci est expliqué dans l'article de Wikipédia.

![](/images/NC_Parabola_small.png)

Parabole (Série de puissances de coefficient 1/2)

* Série parabolique. Cette forme est contrainte à l'aide d'un coefficient, comme expliqué dans l'article de Wikipédia.

![](/images/NC_Parabolic_0.5_small.png)

Série parabolique de coefficient 1/2

![](/images/NC_Parabolic_1_small.png)

Série parabolique de coefficient 1

* Von Karman. Une série Haack avec un coefficient de 0

![](/images/NC_Karman_small.png)

Von Karman (Série Haack de coefficient 0)

* Série Haack. Cette forme est contrainte à l'aide d'un coefficient, comme expliqué dans l'article de Wikipédia.

![](/images/NC_Haack_0.33_small.png)

Série Haack de coefficient 1/3

![](/images/NC_Haack_2_small.png)

Série Haack de coefficient 2

### Types de coiffe

Les coiffes peuvent être dessinées dans l'un des 3 styles :

* Solide: le cône est construit comme une pièce solide, par exemple en bois de balsa.

![](/images/NC_Solid_small.png)

* Creux: Le cône est creux à l'intérieur avec une épaisseur spécifiée. La fin n'est pas scellée.

![](/images/NC_Hollow_small.png)

* Couvert: similaire à creux, sauf que l'extrémité est scellée.

![](/images/NC_Capped_small.png)

### Epaulements

Les coiffes peuvent être créés avec ou sans épaulements:

![](/images/NC_Ogive_small.png)

Ogive avec épaulement

![](/images/NC_No_Shoulder_small.png)

Ogive sans épaulement

## Propriétés

Nose Cone

* Données**Blunted Diameter** : Le diamètre de la partie sphérique à l'extrémité de la pointe.
* Données**Coefficent** : Combiné avec le type de coiffe, cela définit la forme de la pointe, voir [Options](#Options).
* Données**Diameter** : Le diamètre de la base de la pointe.
* Données**Length** : La longueur du cône de la pointe sans l'épaulement. Pour toutes les formes arrondies, la longueur est la longueur réelle de la pointe et non la longueur virtuelle décrite dans la référence [Aérodynamique de la pointe avant](https://fr.wikipedia.org/wiki/A%C3%A9rodynamique_de_la_pointe_avant).
* Données**Nose Style** : Définit le style de la pointe, voir [Options](#Options).
* Données**Nose Type** : Définit la forme de la pointe en utilisant le coefficient si nécessaire, voir [Options](#Options).
* Données**Ogive Diameter** : Diamètre du cercle de l'ogive. Cette donnée n'est requise que pour la pointe en ogive sécante.
* Données**Resolution** : Utilisé en interne, ce paramètre définit le nombre de points de données à utiliser lors du dessin du contour de la pointe.
* Données**Shoulder** : Vrai lorsque la pointe comprend une épaulement.
* Données**Shoulder Diameter** : Le diamètre de l'épaulement. Il doit être inférieur au rayon de la pointe.
* Données**Shoulder Length** : La longueur de l'épaulement.
* Données**Shoulder Thickness** : Lorsque le style de la pointe est creux ou bouché, cela détermine l'épaisseur de l'épaulement.
* Données**Thickness** : Lorsque le style de la pointe est creux ou coiffé, cela déterminera l'épaisseur de la paroi de la pointe.

Rocket Component

Ces paramètres sont fournis à titre indicatif et n'ont aucun effet sur la conception du composant.

* Données**Description** : description du composant
* Données**Manufacturer** : fabricant lorsqu'il est connu
* Données**Material** : matériau lorsqu'il est connu
* Données**Part Number** : numéro de pièce du fabricant

## Tutoriels et apprentissage

Tutoriel sur YouTube [Rocket Workbench Nose Cones](https://youtu.be/zwLgie2E4Ts)

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_NoseCone/fr&oldid=1199328>"