---
title: Arch Supprimer la forme
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Supprimer la forme |
| Emplacement du menu |
| Utilitaires → Supprimer une forme |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Diviser un maillage](/Arch_SplitMesh/fr "Arch SplitMesh/fr"), [Arch Maillage en une forme](/Arch_MeshToShape/fr "Arch MeshToShape/fr") |
|  |

## Description

L'outil **Arch Supprimer la forme** vise à supprimer la forme cubique intérieure d'un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") ou d'une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") et ajuste ses propriétés, la rendant totalement paramétriques. Cet outil ne fonctionne que si le forme sous-jacente est cubique (exactement 6 faces, tous les coins ont seulement des angles droits).

## Utilisation

1. Selectionnez un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") ou une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").
2. Sélectionnez l'option **Utilitaires → ![](/images/Arch_RemoveShape.svg) Supprimer une forme** du menu.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Cet outil peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et utilisé dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction :

```
removeShape(objs, mark=True)

```

* Prend une liste d'objets Arch (`objs`) construits sur une forme cubique et supprime la forme interne, en conservant la longueur, la largeur et la hauteur comme propriétés de l'objet Arch.
  + `objs` est un objet unique, [mur Arch](/Arch_Wall/fr "Arch Wall/fr") ou [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") ou une liste d'entre eux.
* Si `mark` est mis à `True`, les objets qui ne peuvent pas être traités par cette fonction deviennent rouges.

```
import FreeCAD, Draft, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(Box)
FreeCAD.ActiveDocument.recompute()

Arch.removeShape(Structure)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_RemoveShape/fr&oldid=1567073>"