---
title: Rocket Anneau de centrage
---
|  |
| --- |
| Rocket Anneau de centrage |
| Emplacement du menu |
| Rocket → Centering Ring |
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

Un anneau de centrage est un objet solide utilisé pour maintenir un ou plusieurs tubes du corps à l'intérieur d'un autre tube du corps.

![](/images/CR_with_tubes.png)

Conique

## Utilisation

1. Il existe plusieurs façons d'appeler la commande:
   * Appuyez sur le bouton ![](/images/Rocket_CenteringRing.svg) Centering Ring.
   * Sélectionnez l'option **Rocket → ![](/images/Rocket_CenteringRing.svg) Centering Ring** dans le menu.
   * Double-cliquez sur un objet Centering Ring dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Définissez les options et appuyez sur OK.

## Options

### Encoche

Les anneaux de centrage, en particulier ceux utilisés pour les fusées de faible puissance, ont souvent besoin d'une encoche pour accueillir un crochet de moteur. L'outil **Centering Ring** peut les générer pour vous.

![](/images/Notched_CR.png)

Anneau de centrage avec une encoche de crochet moteur

## Propriétés

Bulkhead

Ces propriétés sont héritées de **Bulkhead**, voir [Cloison](/Rocket_Bulkhead/fr "Rocket Bulkhead/fr") pour plus d'informations

* Données**Diameter**: Le diamètre extérieur de la cloison
* Données**Hole Center**: La distance entre le centre du trou et le centre de la cloison
* Données**Hole Count**: Le nombre de trous appliqués dans un motif radial autour du centre de la cloison
* Données**Hole Diameter**: Le diamètre du trou
* Données**Hole Offset**: Décalage à partir de 0 degré du premier trou
* Données**Holes**: Vrai lorsque la cloison comporte un ou plusieurs trous, voir [Options de Cloison](/Rocket_Bulkhead/fr#Options "Rocket Bulkhead/fr")
* Données**Step**: Vrai lorsque la cloison comprend une étape, voir [Options de Cloison](/Rocket_Bulkhead/fr#Options "Rocket Bulkhead/fr")
* Données**Step Diameter**: Le diamètre extérieur de la marche
* Données**Step Thickness**: L'épaisseur, sans compter l'épaisseur de la cloison, de la marche
* Données**Thickness**: L'épaisseur, à l'exclusion de toute marche, de la cloison

Centering Ring

* Données**Center Diameter**: Le diamètre du trou intérieur
* Données**Notch Height**: La hauteur de l'encoche
* Données**Notch Width**: La largeur de l'encoche
* Données**Notched**: Vrai lorsque le trou central comprend une encoche, voir [Options](#Options)

Rocket Component

Ces paramètres sont fournis à titre indicatif et n'ont aucun effet sur la conception du composant.

* Données**Description** : description du composant
* Données**Manufacturer** : fabricant lorsqu'il est connu
* Données**Material** : matériau lorsqu'il est connu
* Données**Part Number** : numéro de pièce du fabricant

## Script

Voir aussi : [Category:API/fr](/Category:API/fr "Category:API/fr") et [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

A définir

## Tutoriels et apprentissage

[Tubes de corps, cloisons et anneaux de centrage Atelier Rocket](https://youtu.be/xi7acpw3eDA) Tutoriel sur YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_CenteringRing/fr&oldid=1199325>"