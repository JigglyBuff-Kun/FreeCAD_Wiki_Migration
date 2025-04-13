---
title: Arch Supprimer
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Supprimer |
| Emplacement du menu |
| Modification → Supprimer un composant |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Couper selon un plan](/Arch_CutPlane "Arch CutPlane"), [Arch Ajouter](/Arch_Add/fr "Arch Add/fr") |
|  |

## Description

Les outils **Arch Supprimer** vous permettent d'effectuer 2 types d'opérations :

* Supprimer un sous-composant d'un objet Arch, par exemple supprimer une boîte qui a été ajoutée à un mur avec ![](/images/Arch_Add.svg) [Arch Ajouter](/Arch_Add/fr "Arch Add/fr").
* Supprimer un objet issu de l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") d'un composant Arch tel qu'un ![](/images/Arch_Wall.svg) [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") ou une ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

La contrepartie de cet outil est l'outil ![](/images/Arch_Add.svg) [Arch Ajouter](/Arch_Add/fr "Arch Add/fr")

![](/images/Arch_Remove_example.jpg)

Une boîte soustraite d'un mur, laissant un trou dedans.

## Utilisation

1. Sélectionnez un sous-composant dans un objet Arch.
2. Appuyez sur le bouton ![](/images/Arch_Remove.svg) Supprimer un composant ou **Modification → ![](/images/Arch_Remove.svg) Supprimer un composant** du menu supérieur.

Ou

1. Sélectionnez les objets à soustraire, le dernier objet sélectionné doit être l’objet Arch à partir duquel les autres objets seront soustraits.
2. Appuyez sur le bouton ![](/images/Arch_Remove.svg) Supprimer un composant ou **Modification → ![](/images/Arch_Remove.svg) Supprimer un composant** du menu supérieur.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Soustraire peut être utilisé dans [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide de la fonction suivante:

```
removeComponents(objectsList, host=None)

```

* Supprime les objets donnés dans `objectsList` de leurs parents.
* Si un objet `host` est spécifié, cette fonction essaiera d'ajouter les objets dans `objectsList` en tant que trous de l'élément `host`.

Exemple :

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0),FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 900
Box.Width = 450
Box.Height = 2000
FreeCAD.ActiveDocument.recompute()

Draft.rotate(Box, 45)
Draft.move(Box, FreeCAD.Vector(1000, 700, 0))

Arch.removeComponents(Box, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Remove/fr&oldid=1437944>"