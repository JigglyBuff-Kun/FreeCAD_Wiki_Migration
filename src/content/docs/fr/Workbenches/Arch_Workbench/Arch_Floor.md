---
title: Arch Niveau
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Niveau |
| Emplacement du menu |
| 3D/BIM → Niveau |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| L V |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Niveau** est un type spécial d'objet de groupe de FreeCAD qui possède quelques propriétés supplémentaires particulièrement adaptées pour la construction de niveaux. Ils ont en particulier une propriété hauteur, que ses objets enfants ([Arch Murs](/Arch_Wall/fr "Arch Wall/fr") et [Arch Structures](/Arch_Structure/fr "Arch Structure/fr")) peuvent utiliser pour définir automatiquement leur propre hauteur. Ils sont principalement utilisés pour organiser votre modèle.

À partir de version 0.18 et suivantes, Arch Niveau est entièrement dérivé de l'objet [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr") qui est un conteneur général permettant d'organiser un modèle de construction ne se limitant pas aux niveaux ou aux étages. Les anciens objets Floor peuvent être convertis dans le nouveau type en cliquant dessus avec le bouton droit de la souris et en choisissant `Convert to BuildingPart`.

## Utilisation

1. Sélectionnez un ou plusieurs objets que vous voulez inclure dans votre nouveau niveau.
2. Lancez la commande Arch Niveau de plusieurs manières :
   * En appuyant sur le bouton ![](/images/Arch_Floor.svg) Niveau dans la barre d'outils.
   * Utilisation des touches L puis V.
   * Utilisation de l'entrée **3D/BIM → Niveau** du menu supérieur.

## Options

* Après la création d'un niveau, vous pouvez ajouter un ou plusieurs objets que vous pouvez copier/coller dans l'arborescence ou en utilisant l'outil ![](/images/Arch_Add.svg) [Arch Ajouter un composant](/Arch_Add/fr "Arch Add/fr").
* Vous pouvez supprimer des objets d'un niveau en les faisant glisser et en les déposant dans l'arborescence ou en utilisant l'outil ![](/images/Arch_Remove.svg) [Arch Supprimer un composant](/Arch_Remove/fr "Arch Remove/fr").

## Propriétés

Un objet Arch Floor partage toutes les propriétés d'un objet [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr") avec Données**Ifc Type** défini sur `"Building Storey"`.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Niveau peut être utilisé dans une [macro](/Macros/fr "Macros/fr") ainsi que dans la console [Python](/Python/fr "Python/fr") en utilisant la commande :

```
Floor = makeFloor(objectslist=None, baseobj=None, name="Floor")

```

* Crée un objet `Floor` à partir de `objectlist` qui est une liste d'objets.

Exemple :

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

Floor = Arch.makeFloor([Wall1, Wall2])

Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Floor/fr&oldid=1539515>"