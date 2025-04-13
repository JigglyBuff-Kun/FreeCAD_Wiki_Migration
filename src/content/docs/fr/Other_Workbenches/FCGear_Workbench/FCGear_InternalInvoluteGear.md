---
title: FCGear Engrenage à développante interne
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| FCGear Engrenage à développante interne |
| Emplacement du menu |
| Gear → Internal Involute Gear |
| Ateliers |
| [FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr") |
| Raccourci par défaut |
| Aucun |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [FCGear Engrenage à développante](/FCGear_InvoluteGear/fr "FCGear InvoluteGear/fr") |
|  |

## Description

![](/images/FCGear_InternalInvoluteGear-01.png)

Engrenages à développante interne, de gauche à droite : engrenage droit, engrenage hélicoïdal, engrenage hélicoïdal double

## Utilisation

1. Passez à l' ![](/images/FCGear_workbench_icon.svg) [atelier FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr").
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur ![](/images/FCGear_InternalInvoluteGear.svg) Internal Involute Gear dans la barre d'outils.
   * Sélectionnez l'option **Gear → ![](/images/FCGear_InternalInvoluteGear.svg) Internal Involute Gear** dans le menu.
3. Modifiez le paramètre de l'engrenage en fonction des conditions requises (voir [Propriétés](#Propri.C3.A9t.C3.A9s)).

## Propriétés

Un objet FCGear InternalInvoluteGear est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

accuracy

* Données**numpoints** (`Integer`) : valeur par défaut à `6`. Changement du profil de la développante. La modification de la valeur peut entraîner des résultats inattendus.

base

* Données**height** (`Length`) : valeur par défaut à `5 mm`. Valeur de la largeur de l'engrenage.
* Données**module** (`Length`) : valeur par défaut à `1 mm`. Le module est le rapport du diamètre de référence de l'engrenage divisé par le nombre de dents (voir [Remarques](/FCGear_InvoluteGear/fr#Remarques "FCGear InvoluteGear/fr")).
* Données**teeth** (`Integer`) : valeur par défaut est `15`. Nombre de dents (voir [Remarques](/FCGear_InvoluteGear/fr#Remarques "FCGear InvoluteGear/fr")).
* Données**thickness** (`Length`) : valeur par défaut est `5 mm`. Epaisseur de la partie extérieure non découpée de l'engrenage.

computed

* Données**angular\_backlash** (`Angle`) : (lecture seule)
* Données**da** (`Length`) : (lecture seule) diamètre intérieur, mesuré à l'addendum (la pointe des dents).
* Données**df** (`Length`) : (lecture seule) diamètre de pied, mesuré au pied des dents.
* Données**dw** (`Length`) : (lecture seule) diamètre du pas de travail.
* Données**outside\_diameter** (`Length`) : (lecture seule) diamètre extérieur.
* Données**transverse\_pitch** (`Length`) : (lecture seule) pas dans le plan de rotation.

fillets

* Données**head\_fillet** (`Float`) : valeur par défaut à `0 mm`.
* Données**root\_fillet** (`Float`) : valeur par défaut à `0 mm`.

helical

* Données**beta** (`Angle`) : valeur par défaut à `0 °`. Avec l'angle d'hélice β, un engrenage hélicoïdal est créé - valeur positive → sens de rotation à droite, valeur négative → sens de rotation à gauche (voir [Remarques](/FCGear_InvoluteGear/fr#Remarques "FCGear InvoluteGear/fr")).
* Données**double\_helix** (`Bool`) : valeur par défaut à `false`. `true` crée un engrenage à double hélice (voir [Remarques](/FCGear_InvoluteGear/fr#Remarques "FCGear InvoluteGear/fr")).
* Données**properties\_from\_tool** (`Bool`) : valeur par défaut à `false`. Si `true` et Données**beta** est différent de zéro, les paramètres de l'engrenage sont recalculés en interne pour l'engrenage tourné.

involute

* Données**pressure\_angle** (`Angle`) : valeur par défaut à `20 °`. (voir [Remarques](/FCGear_InvoluteGear/fr#Remarques "FCGear InvoluteGear/fr")).
* Données**shift** (`Float`) : valeur par défaut à `0`. Génère un décalage de profil positif et négatif (voir [Remarques](/FCGear_InvoluteGear/fr#Remarques "FCGear InvoluteGear/fr")).

precision

* Données**simple** (`Bool`) : valeur par défaut à `false`. `true` génère un affichage simplifié (sans dents et seulement un cylindre en diamètre de pas).

tolerance

* Données**backlash** (`Length`) : valeur par défaut à `0 mm`. Le jeu, également appelé lash ou play, est la distance entre les dents d'une paire d'engrenages.
* Données**clearance** (`Float`) : valeur par défaut à `0.25` (voir [Remarques](/FCGear_InvoluteGear/fr#Remarques "FCGear InvoluteGear/fr")).
* Données**head** (`Float`) : valeur par défaut à `-0.4 mm`. Cette valeur est utilisée pour modifier la hauteur des dents.
* Données**reversed\_backlash** (`Bool`) : `true` diminution du jeu ou `false` augmentation du jeu (par défaut) (voir [Remarques](/FCGear_InvoluteGear/fr#Remarques "FCGear InvoluteGear/fr")).

version

* Données**version** (`String`) :

## Remarques

Voir [FCGear InvoluteGear](/FCGear_InvoluteGear/fr#Remarques "FCGear InvoluteGear/fr").

## Formules utiles

Voir [FCGear InvoluteGear](/FCGear_InvoluteGear/fr#Formules_utiles "FCGear InvoluteGear/fr").

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InternalInvoluteGear/fr&oldid=1537628>"