---
title: Arch Système d'axes
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Système d'axes |
| Emplacement du menu |
| Annotation → Système d'axes |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Axes](/Arch_Axis/fr "Arch Axis/fr"), [Arch Grille](/Arch_Grid/fr "Arch Grid/fr") |
|  |

## Description

L'outil Système d'axes vous permet de combiner 2 ou 3 objets [Arch Axes](/Arch_Axis/fr "Arch Axis/fr").

Ceci est utile pour définir les points d'intersection entre les différents axes. Les objets Arch peuvent ensuite utiliser ce système pour dupliquer leur forme sur les différents points d'intersection.

![](/images/Arch_AxisSystem_example.jpg)

Trois objets [Arch Axes](/Arch_Axis/fr "Arch Axis/fr") combinés en un Système d'axes. Un objet [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") utilise ce système comme propriété Données**Axis** pour que sa forme soit dupliquée à chaque point d'intersection.

## Utilisation

1. En option, sélectionnez les objets [Arch Axes](/Arch_Axis/fr "Arch Axis/fr") que vous souhaitez inclure dans ce système.
2. Appuyez sur le bouton ![](/images/Arch_AxisSystem.svg) Système d'axes.
3. Cliquez avec le bouton droit sur l'objet système d'axes nouvellement créé dans l'arborescence pour ajouter/modifier les objets [Axes](/Arch_Axis/fr "Arch Axis/fr") inclus dans ce système.
4. Sélectionnez un [Arch Axe](/Arch_Axis/fr "Arch Axis/fr") existant et appuyez sur les boutons ![](/images/Arch_Add.svg) [Arch Ajouter](/Arch_Add/fr "Arch Add/fr") ou ![](/images/Arch_Remove.svg) [Arch Supprimer](/Arch_Remove/fr "Arch Remove/fr") pour ajouter ou enlever de ce système.
5. Définir la propriété Données**Axis** de n'importe quel objet Arch pour pointer vers ce système, pour que sa forme soit dupliquée aux points d'intersection de ce système

## Options

* Un même objet [Arch Axes](/Arch_Axis/fr "Arch Axis/fr") peut faire partie de plus d'un système
* Tout objet basé sur une forme peut également être utilisé comme propriété **Axis** des objets Arch. Dans ce cas, la forme de l'objet sera dupliquée le long des sommets de l'objet Axe

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Système d'Axes peut être utilisé dans une [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante:

```
AxisSystem = makeAxisSystem(axes, name="Axis System")

```

* Crée un objet `AxisSystem` à partir de l'objet `axes` qui est un seul [Arch Axe](/Arch_Axis/fr "Arch Axis/fr") ou une liste d'entre eux.

Exemple:

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

AxisSystem = Arch.makeAxisSystem([Axes, Axes2])

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = AxisSystem
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_AxisSystem/fr&oldid=1437974>"