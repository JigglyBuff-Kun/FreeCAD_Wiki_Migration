---
title: Arch Ajouter
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Ajouter |
| Emplacement du menu |
| Modifier → Ajouter un composant |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Supprimer](/Arch_Remove/fr "Arch Remove/fr") |
|  |

## Description

L'outil Ajouter vous permet de faire 4 types d'opérations :

* Ajoutez des objets basés sur [Part](/Part_Workbench/fr "Part Workbench/fr") à un composant Arch, tels qu'un ![](/images/Arch_Wall.svg) [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") ou une ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr"). Ces objets font alors partie du composant Arch et vous permettent de modifier sa forme tout en conservant ses propriétés de base telles que la largeur et la hauteur
* Ajouter des composants Arch, tels qu'un ![](/images/Arch_Wall.svg) [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") ou une ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr"), à un objet Arch basé sur un groupe tel que des ![](/images/Arch_Floor.svg) [Arch Niveaux](/Arch_Floor/fr "Arch Floor/fr").
* Ajoutez un ![](/images/Arch_Axis.svg) [Arch Système d'axes](/Arch_Axis/fr "Arch Axis/fr") à une ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")
* Ajouter des objets à des ![](/images/Arch_SectionPlane.svg) [Arch Plans de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr")

La contrepartie de cet outil est l'outil ![](/images/Arch_Remove.svg) [Arch Supprimer](/Arch_Remove/fr "Arch Remove/fr").

![](/images/Arch_Add_example.jpg)

Dans l'image ci-dessus, une boîte est ajoutée à un mur.

## Utilisation

1. Sélectionnez les objets à ajouter ensemble. Le dernier objet sélectionné sera l'objet Arch de l'hôte.
2. Appuyez sur le bouton ![](/images/Arch_Add.svg) Ajouter un composant ou utilisez **Modifier → ![](/images/Arch_Add.svg) Ajouter un composant** du menu supérieur.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Ajouter peut être utilisé dans une [macro](/Macros/fr "Macros/fr") ou dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction :

:   ```
    addComponents(objectsList, host)

    ```

:   L'extrait de code ci-dessus ajoute les objets donnés dans `objectsList` à l'objet `host` donné.
:   **Note:** `objectsList` peut être un objet unique ou une liste d'objets.

Exemple:

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/fr&oldid=1438723>"