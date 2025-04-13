---
title: Arch Bâtiment
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Bâtiment |
| Emplacement du menu |
| 3D/BIM → Bâtiment |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| B U |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Arch Bâtiment est un type spécial d'objet de groupe FreeCAD particulièrement adapté pour représenter une unité de construction entière. Ils sont principalement utilisés pour organiser votre modèle, en contenant des objets [Arch Niveaux](/Arch_Floor/fr "Arch Floor/fr").

## Utilisation

1. Vous pouvez sélectionner un ou plusieurs objets que vous voulez inclure dans votre nouveau bâtiment
2. Pressez le bouton ![](/images/Arch_Building.svg) Bâtiment ou appuyez sur les touches B puis U.

## Options

* À partir de FreeCAD version 0.18, l'objet Building est en réalité une [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr") avec sa propriété Données**IFC Type** définie sur "Building". Vous pouvez convertir n'importe quelle BuildingPart en un bâtiment simplement en modifiant son Type IFC.
* Après la création du bâtiment, vous pouvez ajouter un ou plusieurs objets que vous pouvez copier/coller dans la vue arborescente ou utilisez l'outil ![](/images/Arch_Add.svg) [Arch Ajouter](/Arch_Add/fr "Arch Add/fr").
* Vous pouvez effacer le bâtiment que vous avez copier/coller dans la vue arborescente ou utiliser l'outil ![](/images/Arch_Remove.svg) [Arch Supprimer](/Arch_Remove/fr "Arch Remove/fr").

## Propriétés

* Données**Building Type** : type de ce bâtiment à choisir à partir d'une liste.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Bâtiment peut être utilisé à l'intérieur d'une [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Building = makeBuilding(objectslist=None, baseobj=None, name="Building")

```

* Crée un objet `Building` à partir de `objectlist` qui est une liste d'objets ou de `baseobj` qui est un `Shape`.

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

Building = Arch.makeBuilding([Wall1, Wall2])

Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Building/fr&oldid=1539513>"