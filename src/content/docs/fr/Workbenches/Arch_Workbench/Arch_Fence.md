---
title: Arch Clôture
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Clôture |
| Emplacement du menu |
| 3D/BIM → Clôture |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Clôture** est un objet qui construit une clôture en répétant un poteau et une section de clôture le long d'un tracé donné.

![](/images/Arch_Fence_description_example.png)

## Utilisation

### Création à partir de zéro

1. Utilisez un atelier de votre choix pour créer un seul poteau de clôture et une seule section.
2. Créez le tracé que la clôture doit suivre à l'aide de l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") ou de l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").
3. Revenez à l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr").
4. Sélectionnez la section, la publication et le tracé dans exactement cet ordre.
5. Appuyez sur le bouton ![](/images/Arch_Fence.svg)Clôture.

## Options

Pour l'instant, l'outil part du principe que

1. Le tracé est dessiné sur le plan XY
2. La section et le poteau sont dessinés à l'origine de manière à rester debout dans la vue de face

## Propriétés

### Données

* Données**Path** : tracé que doit suivre la clôture
* Données**Post** : un seul poteau de clôture à répéter
* Données**Section** : une seule section à répéter
* Données**Number Of Posts** : nombre total de poteaux utilisés pour construire la clôture. Calculé automatiquement.
* Données**Number Of Sections** : nombre total de sections utilisées pour construire la clôture. Calculé automatiquement.

### Vue

* Vue**Use Original Colors** : lorsque l'option est définie à `true`, la clôture utilisera les couleurs de la section d'origine et du piquet. Sinon, la définition de ShapeColor de la clôture sera utilisée pour coloriser la clôture.

## Remarques

* Arch Clôture a été introduit dans FC v0.19 par l'utilisateur furti.
* [Sujet du forum](https://forum.freecadweb.org/viewtopic.php?t=36149) discutant de la fonctionnalité Arch Clôture.

## Script

L'outil Clôture peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide de la fonction suivante :

```
Fence = buildFence(section, post, path)

```

Exemple :

```
import FreeCAD
import Part
import Arch

parts = []

parts.append(Part.makeBox(2000, 50, 30, FreeCAD.Vector(0, 0, 1000 - 30)))
parts.append(Part.makeBox(2000, 50, 30))
parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector(0, 15, 30)))
parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector(1980, 15, 30)))

for i in range(8):
    parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector((2000 / 9 * (i + 1)) - 10, 15, 30)))

Part.show(Part.makeCompound(parts), "Fence_section")
fence_section = FreeCAD.ActiveDocument.Fence_section

sketch = FreeCAD.ActiveDocument.addObject("Sketcher::SketchObject", "Path")
sketch.Placement = FreeCAD.Placement(FreeCAD.Vector(0, 0, 0), FreeCAD.Rotation(0, 0, 0, 1))
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(20000, 0, 0)), False)
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(20000, 0, 0), FreeCAD.Vector(20000, 20000, 0)), False)

post = Part.makeBox(100, 100, 1000, FreeCAD.Vector(0, 0, 0))
Part.show(post, "Post")
post = FreeCAD.ActiveDocument.Post

Fence = Arch.buildFence(fence_section, post, sketch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Fence/fr&oldid=1480778>"