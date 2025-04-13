---
title: Rocket Échappement avec ailerons
---
|  |
| --- |
| Rocket Échappement avec ailerons |
| Emplacement du menu |
| Rocket → Échappement avec ailerons |
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

Les ailerons sont utilisés pour contrôler aérodynamiquement la direction du vol. Un Échappement avec ailerons est un ensemble complet comprenant des ailerons et un tube de corps, souvent monté sur l'extérieur du tube de corps principal de la fusée. En option, un Échappement avec ailerons peut comprendre un sabot de lancement.

![](/images/FinCan.png)

Un Échappement avec ailerons avec un sabot de lancement

## Utilisation

1. Il existe plusieurs façons d'appeler la commande:
   * Appuyez sur le bouton ![](/images/Rocket_FinCan.svg) [Fin Can](/Rocket_FinCan "Rocket FinCan").
   * Sélectionnez l'option **Rocket → ![](/images/Rocket_FinCan.svg) Fin Can** dans le menu.
   * Double-cliquez sur un objet Fin dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Définissez les options et appuyez sur OK.

## Options

### Options des ailerons

Les options pour l'Échappement avec ailerons sont les mêmes que pour les ailerons seuls. Voir ![](/images/Rocket_Fin.svg) [Ailerons](/Rocket_Fin/fr "Rocket Fin/fr") pour plus de détails.

Cependant, en raison de la nature monobloc des Échappements avec ailerons, elles ne peuvent pas inclure d'ailerons à travers la paroi (TTW).

### Options de l'échappement avec ailerons

### Options du sabot de lancement

## Propriétés

Fin Can

* Données**Fin Type** : définit la forme des ailerons.
* Données**Height** : hauteur de l'aileron.
* Données**Profile** : esquisse associée au type d'aileron personnalisé.
* Données**Root Chord** : distance entre les bords d'attaque et de fuite de l'aileron à la racine.
* Données**Root Cross Section** : forme de la section transversale de l'aileron à l'emplanture, voir [Options](#Options).
* Données**Root Length 1** : l'utilisation dépend de **Fin Root Cross Section** et s'appliquera à une longueur conique ou similaire, voir [Options](#Options).
* Données**Root Length 2** : l'utilisation dépend de de **Fin Root Cross Section** et s'appliquera à une longueur conique ou similaire lorsque plusieurs valeurs sont requises, voir [Options](#Options).
* Données**Root Per Cent** : exprime les propriétés **Fin Root Length 1** et **Fin Root Length 2** en pourcentage de la **Fin Root Chord**.
* Données**Root Thickness** : épaisseur maximale à la base de l'aileron
* Données**Sweep Angle** : angle de l'avant de l'aileron, avec un avant vertical égal à 0 degré. Cette valeur peut être négative. Le réglage de cette valeur entraînera l'ajustement de la **Sweep Length**.
* Données**Sweep Length** : distance entre l'avant de l'emplanture de l'aileron et l'avant de l'extrémité de l'aileron le long de l'axe x. Cette valeur peut être négative. Si vous définissez cette valeur, **Sweep Angle** sera ajusté.
* Données**Tip Chord** : distance entre le bord d'attaque et le bord de fuite de l'aileron à l'extrémité.
* Données**Tip Cross Section** : forme de la section transversale de l'aileron à l'extrémité, voir [Options](#Options).
* Données**Tip Length 1** : l'utilisation dépend de la **Fin Tip Cross Section** et s'applique à une longueur conique ou similaire, voir [Options](#Options).
* Données**Tip Length 2** : l'utilisation dépend de la **Fin Tip Cross Section** et s'appliquera à une longueur conique ou similaire lorsque plusieurs valeurs sont requises, voir [Options](#Options).
* Données**Tip Per Cent** : exprime les propriétés **Fin Tip Length 1** et **Fin Tip Length 2** en pourcentage de la **Fin Tip Chord**.
* Données**Tip Thickness** : épaisseur maximale à l'extrémité de l'ailette

Rocket Component

Ces paramètres sont fournis à titre indicatif et n'ont aucun effet sur la conception du composant.

* Données**Description** : description du composant
* Données**Manufacturer** : fabricant lorsqu'il est connu
* Données**Material** : matériau lorsqu'il est connu
* Données**Part Number** : numéro de pièce du fabricant

## Tutoriels et apprentissage

[Aileron atelier Rocket](https://youtu.be/8MmEVyGkA0I) Tutoriel sur YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_FinCan/fr&oldid=1199336>"