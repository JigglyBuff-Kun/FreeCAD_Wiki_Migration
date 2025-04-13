---
title: Rocket Cloison
---
|  |
| --- |
| Rocket Cloison |
| Emplacement du menu |
| Rocket → Bulkhead |
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

Une cloison est une section solide de matériau utilisée pour fermer une section du tube du corps ou pour fournir une base pour une coiffe.

## Utilisation

1. Il existe plusieurs façons d'appeler la commande:
   * Appuyez sur le bouton ![](/images/Rocket_Bulkhead.svg) Bulkhead.
   * Sélectionnez l'option **Rocket → ![](/images/Rocket_Bulkhead.svg) Bulkhead** dans le menu.
   * Double-cliquez sur un objet Bulkhead dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Définissez les options et appuyez sur OK.

## Options

### Étape

Les cloisons peuvent comporter une marche.

Une marche peut être considérée comme une cloison supplémentaire de plus petit diamètre empilée sur le dessus de la cloison d'origine. L'utilisation la plus courante est de boucher l'extrémité d'un tube du corps, comme pour une baie électronique. Dans ce cas, le diamètre extérieur de la cloison correspondrait au diamètre extérieur du tube du corps et le diamètre extérieur de la marche correspondrait au diamètre intérieur du tube du corps.

![](/images/Stepped_Bulkhead.png)

Une cloison étagée utilisée pour boucher un tube du corps

### Trous

Une cloison peut nécessiter des trous pour diverses raisons, telles que la fixation d'un crochet à œil. Cet outil vous permet de spécifier un ou plusieurs trous identiques appliqués selon un schéma radial.

![](/images/Bulkhead_2.png)

Une cloison étagée à 4 trous

## Propriétés

Bulkhead

* Données**Diameter**: Le diamètre extérieur de la cloison
* Données**Hole Center**: La distance entre le centre du trou et le centre de la cloison
* Données**Hole Count**: Le nombre de trous appliqués dans un motif radial autour du centre de la cloison
* Données**Hole Diameter**: Le diamètre du trou
* Données**Hole Offset**: Décalage à partir de 0 degré du premier trou
* Données**Holes**: Vrai lorsque la cloison comporte un ou plusieurs trous, voir [Options](#Options)
* Données**Step**: Vrai lorsque la cloison comprend une marche, voir [Options](#Options)
* Données**Step Diameter**: Le diamètre extérieur de la marche
* Données**Step Thickness**: L'épaisseur, sans compter l'épaisseur de la cloison, de la marche
* Données**Thickness**: L'épaisseur, à l'exclusion de toute marche, de la cloison

Rocket Component

Ces paramètres sont fournis à titre indicatif et n'ont aucun effet sur la conception du composant.

* Données**Description** : Description du composant
* Données**Manufacturer** : Fabricant lorsqu'il est connu
* Données**Material** : Matériau lorsqu'il est connu
* Données**Part Number** : Numéro de pièce du fabricant

## Script

Voir aussi : [Category:API/fr](/Category:API/fr "Category:API/fr") et [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

A définir

## Tutoriels et apprentissage

[Tubes de corps, cloisons et anneaux de centrage Atelier Rocket](https://youtu.be/xi7acpw3eDA) Tutoriel sur YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_Bulkhead/fr&oldid=1123173>"