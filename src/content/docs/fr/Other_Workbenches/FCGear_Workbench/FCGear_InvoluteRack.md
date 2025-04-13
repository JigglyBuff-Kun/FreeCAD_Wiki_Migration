---
title: FCGear Engrenage à crémaillère
---
|  |
| --- |
| FCGear Engrenage à crémaillère |
| Emplacement du menu |
| Gear → Involute Rack |
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

Les crémaillères sont utilisées pour convertir un mouvement rotatif en un mouvement linéaire ou vice versa. Les exemples suivants présentent les différentes applications:

* Une crémaillère avec un engrenage sur un barrage de retenue.
* Divers systèmes de crémaillère de chemins de fer à crémaillère.
* Direction à crémaillère dans un véhicule.
* Treuil à crémaillère utilisé comme palan mécanique (par exemple, un cric de voiture).
* Entraînements pneumatiques à crémaillère utilisés pour contrôler les vannes dans le transport par pipeline.

![](/images/Involute-Rack_example.png)

De gauche à droite : engrenage droit, engrenage hélicoïdal, engrenage hélicoïdal double.

## Utilisation

1. Passez à l' ![](/images/FCGear_workbench_icon.svg) [atelier FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr").
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur ![](/images/FCGear_InvoluteRack.svg) Involute Rack dans la barre d'outils.
   * Sélectionnez l'option **Gear → ![](/images/FCGear_InvoluteRack.svg) Involute Rack** dans le menu.
3. Modifiez le paramètre de l'engrenage en fonction des conditions requises (voir [Propriétés](#Propri.C3.A9t.C3.A9s)).

## Propriétés

Un objet FCGear InvoluteRack est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

base

* Données**add\_endings** (`Bool`) : si `true` (valeur par défaut), alors la longueur totale de la crémaillère est égale à dents \* pas. Si `false`, alors la crémaillère commence par un front de dent.
* Données**height** (`Length`) : valeur par défaut à `5 mm`. Valeur de la largeur de l'engrenage.
* Données**module** (`Length`) : valeur par défaut à `1 mm`. Module est le rapport du diamètre de référence de l'engrenage divisé par le nombre de dents (voir [Remarques](#Remarques)).
* Données**teeth** (`Integer`) : valeur par défaut à `15`. Nombre de dents.
* Données**thickness** (`Length`) : valeur par défaut à `5`. Hauteur de la racine de la dent à la face inférieure de la tige.

computed

* Données**transverse\_pitch** (`Length`) : (lecture seule) pas dans le plan transversal (voir [Remarques](#Remarques)).

fillets

* Données**head\_fillet** (`Float`) : valeur par défaut à `0 mm`.
* Données**root\_fillet** (`Float`) : valeur par défaut à `0 mm`.

helical

* Données**beta** (`Angle`) : valeur par défaut à `0 °`. Avec l'angle d'hélice β, un engrenage hélicoïdal est créé - valeur positive → sens de rotation à droite, valeur négative → sens de rotation à gauche (voir [Remarques](#Remarques)).
* Données**double\_helix** (`Bool`) : valeur par défaut à `false`, `true` crée un engrenage à double hélice (voir [Remarques](#Remarques)).
* Données**properties\_from\_tool** (`Bool`) : valeur par défaut à `false`. Si `true` et Données**beta** différente de zéro, les paramètres de l'engrenage sont recalculés en interne pour l'engrenage tourné.

involute

* Données**pressure\_angle** (`Angle`) : valeur par défaut à `20 °` (voir [Remarques](#Remarques)).

precision

* Données**simplified** (`Bool`) : valeur par défaut à `false`, `true` génère un affichage simplifié (sans dents).

tolerance

* Données**clearance** (`Float`) : valeur par défaut à `0.25` (voir [Remarques](#Remarques)).
* Données**head** (`Float`) : valeur par défaut à `0`. Cette valeur est utilisée pour modifier la hauteur de la dent.

version

* Données**version** (`String`) :

## Remarques

* *transverse\_pitch*: la valeur est le résultat de la multiplication de *module \* pi*. Cela signifie que pour la crémaillère à développante standard de FCGear: 15 (*teeth*) \* 3.14 (*transverse\_pitch*) est de 47,12 mm. Voir également *module* ci-dessous.
* *clearance*: pour une paire d'engrenages, le jeu est la distance entre l'extrémité de la dent du premier engrenage et la racine de la dent du deuxième engrenage.
* *double\_helix*: pour utiliser l'engrenage hélicoïdal double, l'angle d'hélice β (*beta*) pour l'engrenage hélicoïdal doit d'abord être saisi.
* *module*: en utilisant les directives ISO (Organisation internationale de normalisation), la taille du module est désignée comme l'unité représentant la taille des dents des engrenages. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). Si vous multipliez Module par Pi, vous pouvez obtenir Pitch (p) (le pas). Le pas est la distance entre les points correspondants sur les dents adjacentes. Le résultat de la multiplication est affiché dans *transverse\_pitch*
* *pressure\_parameter*: modifiez le paramètre uniquement si une connaissance suffisante de la géométrie de l'engrenage est disponible.

## Formules utiles

Voir [FCGear InvoluteGear](/FCGear_InvoluteGear/fr#Formules_utiles "FCGear InvoluteGear/fr").

## Script

Utilisez la puissance de Python pour automatiser la modélisation de votre engrenage:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteRack.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteRack/fr&oldid=1196821>"