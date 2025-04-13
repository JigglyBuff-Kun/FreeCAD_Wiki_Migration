---
title: FCGear Engrenage cycloïde
---
|  |
| --- |
| FCGear Engrenage cycloïde |
| Emplacement du menu |
| Gear → Cycloid Gear |
| Ateliers |
| [FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr") |
| Raccourci par défaut |
| Aucun |
| Introduit dans la version |
| v0.16 |
| Voir aussi |
| [FCGear Engrenage à développante](/FCGear_InvoluteGear/fr "FCGear InvoluteGear/fr") |
|  |

## Description

Les engrenages cycloïdaux sont très sensibles à un ajustement inexact de la distance centrale, ce qui entraîne alors une modification du rapport de transmission. Pour ces raisons, les engrenages cycloïdaux sont peu présents dans la construction mécanique mais ne sont utilisés que dans des cas particuliers tels que dans l'industrie horlogère, pour les compresseurs mécaniques ou pour l'entraînement de crémaillères.

![](/images/Cycloid-Gear_example_1.png)

De gauche à droite: Engrenage droit, engrenage hélicoïdal, engrenage double hélicoïdal

## Utilisation

1. Passez à l' ![](/images/FCGear_workbench_icon.svg) [atelier FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr").
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur ![](/images/FCGear_CycloidGear.svg) Cycloid Gear dans la barre d'outils.
   * Sélectionnez l'option **Gear → ![](/images/FCGear_CycloidGear.svg) Cycloid Gear** dans le menu.
3. Modifiez le paramètre de l'engrenage en fonction des conditions requises (voir [Propriétés](#Propri.C3.A9t.C3.A9s)).

## Propriétés

### Données

Un objet FCGear CycloidGear est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

accuracy

* Données**numpoints** (`Integer`) : valeur par défaut à `15`, Modification du profil de la développante. Changer la valeur peut conduire à des résultats inattendus.

base

* Données**height** (`Length`) : valeur par défaut à `5 mm`. Valeur de la largeur de l'engrenage.
* Données**module** (`Length`) : valeur par défaut à `1 mm`. Le module est le rapport du diamètre de référence de l'engrenage divisé par le nombre de dents (voir [Remarques](#Remarques)).
* Données**teeth** (`Integer`) : valeur par défaut à `15`. Nombre de dents.

computed

* Données**angular\_backlash** (`Angle`) : (lecture seule)
* Données**dw** (`Length`) : (lecture seule) diamètre du pas de travail.

cycloid

* Données**inner\_diameter** (`Float`) : (lecture seule). Diamètre du cercle de roulement de l'hypocycloïde, normalisé par le Données**module**. (voir [Remarques](#Remarques)).
* Données**outer\_diameter** (`Float`) : valeur par défaut à `7.5`. Diamètre du cercle de roulement de l'épicycloïde, normalisé par le Données**module**. (voir [Remarques](#Remarques)).

fillets

* Données**head\_fillet** (`Float`) : valeur par défaut à `0 mm`.
* Données**root\_fillet** (`Float`) : valeur par défaut à `0 mm`.

helical

* Données**beta** (`Angle`) : valeur par défaut à `0 °`. Avec l'angle d'hélice β, un engrenage hélicoïdal est créé (valeur positive → sens de rotation à droite, valeur négative → sens de rotation à gauche).
* Données**double\_helix** (`Bool`) : valeur par défaut à `false`. *True* crée un engrenage à double hélice (voir [Remarques](#Remarques)).

tolerance

* Données**backlash** (`Length`) : valeur par défaut à `0`. Le jeu, également appelé lash ou play, est la distance entre les dents d'une paire d'engrenages.

* Données**clearance** (`Float`) : valeur par défaut à `0,25` (voir [Remarques](#Remarques)).
* Données**head** (`Float`) : valeur par défaut à `0`. Longueur supplémentaire de la pointe des dents, normalisée par Données**module**. La valeur par défaut est 0.

version

* Données**version** (`String`) :

## Remarques

* Les engrenages cycloïdaux doivent toujours être spécialement adaptés les uns aux autres et ne peuvent généralement pas être échangés à volonté : Dans une paire d'engrenages, la valeur de *inner\_diameter* sur un engrenage doit être égale à *outer\_diameter* sur l'autre, et vice versa. Voir aussi les informations dans *Propriétés vue paramètres cycloïdes* ci-dessous.
* *clearance*: sur une paire d'engrenages, le jeu est la distance entre l'extrémité de la dent du premier engrenage et la racine de la dent du deuxième engrenage.
* *double\_helix*: pour utiliser l'engrenage hélicoïdal double, l'angle d'hélice β (*beta*) pour l'engrenage hélicoïdal doit d'abord être saisi.
* *module*: en utilisant les directives ISO (Organisation internationale de normalisation), la taille du module est désignée comme l'unité représentant la taille des dents des engrenages. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). Si vous multipliez Module par Pi, vous pouvez obtenir Pitch (p) (le pas). Le pas est la distance entre les points correspondants sur les dents adjacentes.

## Cas particuliers

### Ligne droite comme hypocycloïde

Pour obtenir une ligne droite, directement vers le centre, comme l'hypocycloïde, utilisez l'[expression](/Expressions/fr "Expressions/fr") suivante pour Données**inner\_diameter** : `teeth / 2`. Une telle forme de dent se retrouve souvent dans les horloges historiques et est donc appelée "denture d'horloge". Une Données**clearance** plus grande rend l'effet encore plus visible.

### Hypocycloïde/épicycloïde complet en tant que dent

Pour obtenir un engrenage constitué de courbes hypocycloïdes et épicycloïdes complètes, utilisez les [expressions](/Expressions/fr "Expressions/fr") suivantes :

* Données**inner\_diameter**: `0.5 + 1e-6`
* Données**outer\_diameter**: `inner_diameter`
* Données**clearance**: `(-1 + inner_diameter/1mm) * 2`
* Données**head**: `(-1 + outer_diameter/1mm) * 2`

Le diamètre de référence est *d = m \* z*, avec *m* étant le Données**module** et *z* étant les dents Données**teeth**.
Pour une hypocycloïde complète, le diamètre de roulement doit être *d\_i = d / (z\*2) = m\*z / (z\*2)*. Et si nous normalisons maintenant cela par le module, nous obtenons *d\_in = m\*z / (z\*2) / m = 1 / 2*. La valeur de tolérance explicite supplémentaire (`1e-6` dans l'expression ci-dessus) est nécessaire pour surmonter les problèmes de coïncidence.

Les diamètres des cercles de roulement des cycloïdes doivent maintenant correspondre à l'addedum/dedendum de l'engrenage. L'addendum, c'est-à-dire la longueur de la dent au-dessus du cercle de référence, est égal à 1 + Données**head**. Le dedendum, c'est-à-dire la longueur de la dent en dessous du cercle de référence, est de 1 + Données**clearance**. Les deux sont normalisés par le module, donc nous avons besoin d'une valeur de tête/dégagement (head/clearance) de *1 - d\_in*. Les valeurs supplémentaires  `/ 1mm` et  `* 2` sont nécessaires pour pallier les défauts déjà corrigés dans la version de développement de l'atelier FCGear, mais le portage de ces corrections dans la version stable peut casser les modèles existants.

De tels "engrenages" permettent de réduire le nombre de dents à "deux" et sont utilisés comme palettes rotatives dans les pompes ou les compresseurs (cf. [Compresseur mécanique à lobes](https://fr.wikipedia.org/wiki/Compresseur_m%C3%A9canique#%C3%80_lobe(s))).

### Epicycloïde infiniment grand

Si le rayon du cercle de roulement de l'épicycloïde devient infiniment grand, il devient une ligne droite de roulement. Une telle épicycloïde dégénérée est appelée développante. Les engrenages avec une telle forme de dent sont gérés par la commande [engrenage à développante](/FCGear_InvoluteGear/fr "FCGear InvoluteGear/fr"). C'est de loin la forme de dent la plus courante aujourd'hui.

## Formules utiles

Voir [FCGear InvoluteGear](/FCGear_InvoluteGear/fr#Formules_utiles "FCGear InvoluteGear/fr").

## Propriétés vue paramètres cycloïdes

![](/images/CycloidGear_inner-outer-diameter_2.svg)

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CycloidGear/fr&oldid=1536802>"