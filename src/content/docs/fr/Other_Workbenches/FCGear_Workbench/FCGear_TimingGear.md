---
title: FCGear Engrenage de distribution
---
|  |
| --- |
| FCGear Engrenage de distribution |
| Emplacement du menu |
| Gear → Timing Gear |
| Ateliers |
| [FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr") |
| Raccourci par défaut |
| Aucun |
| Introduit dans la version |
| v0.16 |
| Voir aussi |
| *Aucun* |
|  |

## Description

Le but des engrenages de distribution est de permettre à l'arbre à cames et au vilebrequin de faire tourner la chaîne de distribution. Le vilebrequin tourne pour déplacer les pistons de haut en bas à l'intérieur des cylindres. L'arbre à cames tourne pour permettre aux soupapes d'admission et d'échappement des cylindres de s'ouvrir et de se fermer. Ces composants sont importants pour le bon calage du moteur.

Les engrenages de distribution sont connectés à une courroie de distribution ou une chaîne de distribution.

![](/images/Timing-Gear_example.png)

Au-dessus: engrenage de distribution

## Utilisation

1. Passez à l' ![](/images/FCGear_workbench_icon.svg) [atelier FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr").
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur ![](/images/FCGear_TimingGear.svg) Timing Gear dans la barre d'outils.
   * Sélectionnez l'option **Gear → ![](/images/FCGear_TimingGear.svg) Timing Gear** dans le menu.
3. Modifiez le paramètre de l'engrenage en fonction des conditions requises (voir [Propriétés](#Propri.C3.A9t.C3.A9s)).

## Propriétés

Un objet FCGear TimingGear est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

base

* Données**height** (`Length`) : valeur par défaut à `5 mm`. Valeur de la largeur de l'engrenage.
* Données**teeth** (`Integer`) : valeur par défaut à `15`. Nombre de dents.
* Données**type** (`Enumeration`) : valeur par défaut à `gt2`. Type de denture - pas de profil pour les courroies dentées (voir [Remarques](#Remarques)).

computed

* Données**h** (`Length`) : (lecture seule) hauteur radiale des dents.
* Données**offset** (`Length`) : (lecture seule) décalage en X du milieu du deuxième arc.
* Données**pitch** (`Length`) : (lecture seule) pas de l'engrenage.
* Données**r0** (`Length`) : (lecture seule) rayon du premier arc.
* Données**r1** (`Length`) : (lecture seule) rayon du second arc.
* Données**rs** (`Length`) : (lecture seule) rayon du troisième arc.
* Données**u** (`Length`) : (lecture seule) différence radiale entre le diamètre du pas ... et la tête de l'engrenage.

version

* Données**version** (`String`) :

## Remarques

* *type* : pas des courroies de distribution (distance du centre de la dent au centre de la dent des dents consécutives) est spécifié en types. GT2 a un pas de 2 mm, GT3 de 3 mm, GT5 de 5 mm etc.

## Formules utiles

* *addendum diameter* = *pitch diameter* + 2 \* *module*
* *belt length* = 2 \* *axle base* + *belt tooth pitch* : 2 \* *(teeth 1 + 2)* + *belt tooth pitch²* : 4 \* pi² \* *axle base* \* *(teeth 1 - 2)²*
* *axel base* = *belt length* : 4 - *belt tooth pitch* : 8 \* *(teeth 1+2)* + ¼ \* sqrt [*belt length* - ½ \* *belt tooth pitch* \* *(teeth 1+2)²* - 2 \* *belt tooth pitch²* \* *(teeth 1+2)²* : pi²]

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_TimingGear/fr&oldid=1196488>"