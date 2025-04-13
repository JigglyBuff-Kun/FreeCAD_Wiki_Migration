---
title: FCGear Crémaillère cycloïde
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| FCGear Crémaillère cycloïde |
| Emplacement du menu |
| Gear → Cycloid Rack |
| Ateliers |
| [FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr") |
| Raccourci par défaut |
| Aucun |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [FCGear CycloidGear](/FCGear_CycloidGear/fr "FCGear CycloidGear/fr") |
|  |

## Description

![](/images/FCGear_CycloidRack-01.png)

Crémaillères cycloïdes de gauche à droite : engrenage droit, engrenage hélicoïdal, engrenage hélicoïdal double

## Utilisation

1. Passez à l' ![](/images/FCGear_workbench_icon.svg) [atelier FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr").
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur ![](/images/FCGear_CycloidRack.svg) Cycloid Rack dans la barre d'outils.
   * Sélectionnez **Gear → ![](/images/FCGear_CycloidRack.svg) Cycloid Rack** dans le menu.
3. Modifiez le paramètre de l'engrenage en fonction des conditions requises (voir [Propriétés](#Propri.C3.A9t.C3.A9s)).

## Propriétés

Un objet FCGear CycloidRack est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

accuracy

* Données**numpoints** (`Integer`) : valeur par défaut à `15`. Nombre de points pour la spline.

base

* Données**add\_endings** (`bool`) : si `true` (valeur par défaut), alors la longueur totale de la crémaillère est dents \* pas. Si `false`, alors la crémaillère commence par un front de dent.
* Données**height** (`Length`) : valeur par défaut à `5 mm`. Valeur de la largeur de l'engrenage.
* Données**teeth** (`Integer`) : valeur par défaut à `15`. Nombre de dents.
* Données**thickness** (`Length`) : valeur par défaut à `5 mm`. Epaisseur de la partie non découpée de la crémaillère.

computed

* Données**transverse\_pitch** (`Length`) : (en lecture seule) le pas dans le plan transversal.

cycloid

* Données**inner\_diameter** (`Float`) : valeur par défaut à `7.5`. Diamètre du cercle de roulement de l'hypocycloïde, normalisé par Données**module**. (voir [Remarques](/FCGear_CycloidGear/fr#Remarques "FCGear CycloidGear/fr")).
* Données**outer\_diameter** (`Float`) : valeur par défaut à `7.5`. Diamètre du cercle de roulement de l'épicycloïde, normalisé par Données**module**. (voir [Remarques](/FCGear_CycloidGear/fr#Remarques "FCGear CycloidGear/fr")).

fillets

* Données**head\_fillet** (`Float`) : valeur par défaut à `0`.
* Données**root\_fillet** (`Float`) : valeur par défaut à `0`.

helical

* Données**beta** (`Angle`) : valeur par défaut à `0 °`. Avec l'angle d'hélice β, un engrenage hélicoïdal est créé (valeur positive → sens de rotation à droite, valeur négative → sens de rotation à gauche).
* Données**double\_helix** (`Bool`) : valeur par défaut à `false`. `true` crée un engrenage à double hélice (voir [Remarques](/FCGear_CycloidGear/fr#Remarques "FCGear CycloidGear/fr")).

involute

* Données**module** (`Length`) : valeur par défaut à `1 mm`. Pour les crémaillères, le module est égal au pas et donc à la distance entre les points correspondants sur les dents adjacentes (voir [Remarques](/FCGear_CycloidGear/fr#Remarques "FCGear CycloidGear/fr")).

precision

* Données**simplified** (`Bool`) : valeur par défaut à `false`. Si `true`, la crémaillère est dessinée avec un nombre constant de dents pour éviter le renommage topologique.

tolerance

* Données**clearance** (`Float`) : valeur par défaut à `0.25`. (voir [Remarques](/FCGear_CycloidGear/fr#Remarques "FCGear CycloidGear/fr")).
* Données**head** (`Float`) : valeur par défaut à `0`. Longueur supplémentaire de la pointe des dents, normalisée par Données**module**.

version

* Données**version** (`String`) :

## Remarques

Voir [FCGear CycloidGear](/FCGear_CycloidGear/fr#Remarques "FCGear CycloidGear/fr").

## Formules utiles

Voir [FCGear CycloidGear](/FCGear_CycloidGear/fr#Formules_utiles "FCGear CycloidGear/fr").

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CycloidRack/fr&oldid=1536807>"