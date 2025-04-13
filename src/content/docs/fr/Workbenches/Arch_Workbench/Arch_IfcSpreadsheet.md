---
title: Arch Tableur IFC
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Tableur IFC |
| Emplacement du menu |
| Utilitaires → Créer une feuille de calcul IFC... |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| I P |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch IFC](/Arch_IFC/fr "Arch IFC/fr") |
|  |

## Description

Cet outil crée une feuille de calcul pour stocker les propriétés [IFC](/Arch_IFC/fr "Arch IFC/fr") d'un objet.

## Utilisation

1. Sélectionnez un objet.
2. Il y a plusieurs façons de lancer l'outil :
   * Sélectionnez l'option **Utilitaires → ![](/images/Arch_IfcSpreadsheet.svg) Créer une feuille de calcul IFC...** du menu.
   * Utilisez le raccourci clavier : I puis P.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Cet outil peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et utilisé dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction :

```
spreadsheet = makeIfcSpreadsheet(archobj=None)

```

* Crée un objet `spreadsheet`. Vous pouvez éventuellement donner un `archobj`.

Exemple :

```
import FreeCAD, Draft, Arch

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

spreadsheet = Arch.makeIfcSpreadsheet(Wall)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_IfcSpreadsheet/fr&oldid=1511053>"