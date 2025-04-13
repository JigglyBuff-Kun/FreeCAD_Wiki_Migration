---
title: Arch Fusionner des murs
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Fusionner des murs |
| Emplacement du menu |
| Utilitaires → Fusionner des murs |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Murs](/Arch_Wall/fr "Arch Wall/fr") |
|  |

## Description

L'outil **Arch Fusionner des murs** fusionne plusieurs [Arch Murs](/Arch_Wall/fr "Arch Wall/fr").

## Utilisation

1. Faites l'une des choses suivantes :
   * Sélectionnez un seul mur avec un ou plusieurs [ajouts](/Arch_Add/fr "Arch Add/fr") qui sont également des murs.
   * Sélectionnez deux murs ou plus.
2. Dans les deux cas, les murs doivent avoir les mêmes propriétés Données**Height**, Données**Width** et Données**Align**.
3. Sélectionnez l'option **Utilitaires → ![](/images/Arch_MergeWalls.svg) Fusionner des murs** du menu.

## Remarques

* [Arch Ajouter](/Arch_Add/fr "Arch Add/fr") peut fusionner des murs même s'ils ont des hauteurs, des largeurs et des alignements différents.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Cet outil peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et utilisé dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction :

```
base = joinWalls(walls, delete=False)

```

Exemple :

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
FreeCAD.ActiveDocument.recompute() 

base = Arch.joinWalls([Wall1, Wall2])

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MergeWalls/fr&oldid=1567078>"