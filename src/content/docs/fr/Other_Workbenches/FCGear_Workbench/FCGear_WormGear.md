---
title: FCGear Vis sans fin
---
|  |
| --- |
| FCGear Vis sans fin |
| Emplacement du menu |
| Gear → Worm Gear |
| Ateliers |
| [FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr") |
| Raccourci par défaut |
| Aucun |
| Introduit dans la version |
| v0.16 |
| Voir aussi |
| [PartDesign Engrenage à développante](/PartDesign_InvoluteGear/fr "PartDesign InvoluteGear/fr") |
|  |

## Description

La vis sans fin peut être considérée comme un cas particulier d'engrenage hélicoïdal. Imaginez qu'il n'y ait qu'une seule dent sur un engrenage droit. Augmentez maintenant l'angle d'hélice de telle sorte que la dent s'enroule plusieurs fois autour de l'engrenage droit avant d'émerger du côté opposé. Le résultat serait une vis sans fin à un seul filet.

Pour une vis sans fin à démarrage unique, chaque tour complet (360 degrés) de la vis sans fin fait avancer l'engrenage d'une dent. Ainsi, un engrenage de 24 dents donnera une réduction de 24:1. Pour une vis sans fin à plusieurs démarrages, la réduction est égale au nombre de dents de l'engrenage, divisé par le nombre de démarrages de la vis sans fin.

Une vis sans fin ne peut être utilisée qu'avec une roue à vis sans fin. C'est ce qu'on appelle un entraînement par vis sans fin. Comme d'autres systèmes de transmission, un entraînement à vis sans fin peut réduire la vitesse de rotation ou transmettre un couple plus élevé. L'un des principaux avantages des engrenages à vis sans fin est qu'ils peuvent transmettre un mouvement à 90 degrés. Un entraînement à vis sans fin est également autobloquant.

![](/images/Worm-Gear_example.png)

Engrenage à vis sans fin (nombre de dents 3)

## Utilisation

1. Passez à l' ![](/images/FCGear_workbench_icon.svg) [atelier FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr").
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur ![](/images/FCGear_WormGear.svg) Worm Gear dans la barre d'outils.
   * Sélectionnez l'option **Gear → ![](/images/FCGear_WormGear.svg) Worm Gear** dans le menu.
3. Modifiez le paramètre de l'engrenage en fonction des conditions requises (voir [Propriétés](#Propri.C3.A9t.C3.A9s)).

## Propriétés

Un objet FCGear WormGear est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

base

* Données**diameter** (`Length`) : valeur par défaut à `5 mm`. Diamètre du pas.
* Données**height** (`Length`) : valeur par défaut à `5 mm`. Valeur de la longueur de la vis sans fin.
* Données**module** (`Length`) : valeur par défaut à `1 mm`. Module est le rapport du diamètre de référence de l'engrenage divisé par le nombre de dents (voir [Remarques](#Remarques)).
* Données**reverse\_pitch** (`Bool`) : valeur par défaut à `false`. `true` change le sens de rotation de droite à gauche.
* Données**teeth** (`Integer`) : La valeur par défaut est `3`. Nombre de dents (voir [Remarques](#Remarques)).

computed

* Données**beta** (`Angle`) : (en lecture seule) angle d'attaque (voir aussi les informations dans [Remarques](#Remarques) et [Formules utiles](#Formules_utiles)).

involute

* Données**pressure\_angle** (`Angle`) : valeur par défaut à `20 °` (voir les [Remarques](#Remarques)).

tolerance

* Données**clearance** (`Float`) : valeur par défaut à `0.25` (voir [Remarques](#Remarques)).
* Données**head** (`Float`) : valeur par défaut à `0`. Cette valeur est utilisée pour modifier la hauteur de la dent.

version

* Données**version** (`String`) :

## Remarques

* *beta* : si l'angle d'attaque est inférieur à 5°, il s'agit d'un engrenage autobloquant. Un exemple typique est celui des chevilles d'accordage d'une guitare ou d'un ukulélé.
* *clearance* : sur un engrenage à vis sans fin, le jeu est la distance entre la pointe de la dent de la vis sans fin et la racine de la dent de la roue à vis sans fin.
* *module* : selon les directives ISO (Organisation internationale de normalisation), la taille du module est désignée comme l'unité représentant la taille des dents d'un engrenage. Module (m) : m = 1 (p = 3,1416), m = 2 (p = 6,2832), m = 4 (p = 12,566). Si vous multipliez Module par Pi, vous obtenez le pas (p). Le pas est la distance entre des points correspondants sur des dents adjacentes. Si l'on change le module, l'angle d'attaque change aussi (*beta*).
* *teeth* : le nombre de dents d'un vis sans fin s'appelle le nombre de fils. Par conséquent, on parle de vis sans fin à fil simple, double ou multiple. En général, on produit surtout des vis sans fin à fil unique, mais dans certains cas particuliers, le nombre de départs peut aller jusqu'à quatre (parfois aussi plus). Si le nombre de dents est modifié, *beta* change également.
* *pressure\_parameter* : ne modifiez ce paramètre que si vous avez une connaissance suffisante de la géométrie de l'engrenage.

## Formules utiles

* *beta (angle d'attaque)* = arctan (*module* \* *teeth* : *pitchdiameter (diamètre)*)
* *axial pitch* = *pi* \* *module* \* *teeth*
* *beta (angle d'attaque)* = arctan (*axial pitch* : (*pitchdiameter (diamètre)* \* *pi*))
* *worm length* = 4,5 \* *module* \* *pi*

## Roue à vis sans fin

La roue à vis sans fin doit être conçue manuellement. A cet effet, [FCGear Engrenage à développante](/FCGear_InvoluteGear/fr "FCGear InvoluteGear/fr") peut être utilisé pour une construction simple. Dans tous les cas, une connaissance approfondie des types d'engrenages est nécessaire.

![](/images/Worm-Gear_example3.png)

Vis sans fin avec roue à vis sans fin

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_WormGear/fr&oldid=1223702>"