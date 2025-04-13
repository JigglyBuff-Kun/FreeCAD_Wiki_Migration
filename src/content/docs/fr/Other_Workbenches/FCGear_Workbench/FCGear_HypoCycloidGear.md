---
title: FCGear Engrenage hypocycloïde
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| FCGear Engrenage hypocycloïde |
| Emplacement du menu |
| Gear → HypoCycloid Gear |
| Ateliers |
| [FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr") |
| Raccourci par défaut |
| Aucun |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/FCGear_HypoCycloidGear.svg) **FCGear Engrenage hypocycloïde** crée deux disques à cames cannelés et un ensemble de galets qui restent en contact avec la surface extérieure des disques pendant le mouvement.

![](/images/FCGear_FCGear_HypoCycloidGear-04.png) ![](/images/FCGear_FCGear_HypoCycloidGear-05.png)

A gauche : engrenage hypocycloïde. A droite : engrenage et transparence avec un engrenage inversé et un jeu de galets

```
Veuillez fournir une brève description de ce qui peut être réalisé en utilisant un tel train d'engrenages.

```

## Utilisation

1. Passez à l' ![](/images/FCGear_workbench_icon.svg) [atelier FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr").
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le ![](/images/FCGear_HypoCycloidGear.svg) HypoCycloid Gear dans la barre d'outils.
   * Sélectionnez **Gear → ![](/images/FCGear_HypoCycloidGear.svg) HypoCycloid Gear** dans le menu.
3. Modifiez le paramètre de l'engrenage en fonction des conditions requises (voir [Propriétés](#Propri.C3.A9t.C3.A9s)).

## Propriétés

## Remarques

Le ou les engrenages par défaut s'affichent comme suit :

![](/images/FCGear_FCGear_HypoCycloidGear-01.png)

Pour afficher les disques à cames et le jeu de galets (broches) dans des couleurs différentes, nous avons besoin de trois objets HypocycloidGear identiques. Leur visibilité peut être modifiée :

* Données**show\_disk0** (`Bool`) pour le disque à cames principal.
* Données**show\_disk1** (`Bool`) pour le disque à cames inversé situé au-dessus.
* Données**show\_pins** (`Bool`) pour le jeu de broches.

![](/images/FCGear_FCGear_HypoCycloidGear-02.png) ![](/images/FCGear_FCGear_HypoCycloidGear-03.png)

A gauche : objets HypocycloidGear tels que créés. A droite : objets repositionnés pour obtenir une meilleure vue sur chaque objet

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_HypoCycloidGear/fr&oldid=1536803>"