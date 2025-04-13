---
title: Arch Boucher des trous
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Boucher des trous |
| Emplacement du menu |
| Utilitaires → Boucher des trous |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Vérification](/Arch_Check/fr "Arch Check/fr") |
|  |

## Description

Cet outil identifie les trous (séquence circulaire d'arêtes ouvertes) dans un objet [shape](/Part_Workbench/fr "Part Workbench/fr") et tente de les boucher avec l'ajout d'une nouvelle face construite sur la séquence des arêtes. Vous devez cependant, vous assurer que le résultat est un solide.

## Utilisation

1. Sélectionnez un objet [Shape](/Part_Workbench/fr "Part Workbench/fr").
2. Sélectionnez l'option **Utilitaires → ![](/images/Arch_CloseHoles.svg) Boucher des trous** du menu.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Cet outil peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et utilisé dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction :

```
solid = closeHole(shape)

```

* Ferme un trou dans une `shape` qui est un `Part.Shape` et renvoie le nouvel objet `solid`.

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

solid = Arch.closeHole(Wall.Shape)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CloseHoles/fr&oldid=1567066>"