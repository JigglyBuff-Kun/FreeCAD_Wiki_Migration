---
title: Arch Raccord
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Raccord |
| Emplacement du menu |
| 3D/BIM → Raccord |
| Ateliers |
| [Arch](/Arch_Workbench/fr "Arch Workbench/fr") |
| Raccourci par défaut |
| P C |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Raccord** vous permet de créer des raccords entre deux ou plusieurs [Arch Conduites](/Arch_Pipe/fr "Arch Pipe/fr") sélectionnés.

## Utilisation

1. Sélectionnez 2 or 3 [conduites](/Arch_Pipe/fr "Arch Pipe/fr"). Si vous avez sélectionné trois conduites, deux doivent être parfaitement alignés.
2. Cliquez le bouton ![](/images/Arch_PipeConnector.svg) Raccord ou pressez la touche P puis C.

## Propriétés

* Données**Radius** : rayon de la courbe de ce raccord

## Flux de travail typique

Voir les informations de [Arch Conduite](/Arch_Pipe/fr "Arch Pipe/fr") pour le processus d'utilisation des conduites et la création de raccords.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Raccord peut être utilisé dans une [macro](/Macros/fr "Macros/fr") ou depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Connector = makePipeConnector(pipes, radius=0, name="Connector")

```

* Crée un objet `Connector` à partir du `pipes` donné qui est une liste de [Arch Conduite](/Arch_Pipe/fr "Arch Pipe/fr") et éventuellement un rayon `radius` de courbure.
  + Les objets de base ([Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr")) des [Arch Conduites](/Arch_Pipe/fr "Arch Pipe/fr") devraient partager un point d'extrémité afin de créer un raccord correct et lisse.

Exemple :

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(-1000, 0, 0)
p2 = FreeCAD.Vector(-2000, 0, 0)
p3 = FreeCAD.Vector(-2000, 0, 0)
p4 = FreeCAD.Vector(-2000, -1000, 0)
p5 = FreeCAD.Vector(-2000, -1000, 0)
p6 = FreeCAD.Vector(-4000, -1000, 0)
Line1 = Draft.makeWire([p1, p2])
Line2 = Draft.makeWire([p3, p4])
Line3 = Draft.makeWire([p5, p6])

Pipe1 = Arch.makePipe(Line1, 150)
Pipe2 = Arch.makePipe(Line2, 150)
Pipe3 = Arch.makePipe(Line3, 150)
FreeCAD.ActiveDocument.recompute()

Conn = Arch.makePipeConnector([Pipe1, Pipe2])
Conn2 = Arch.makePipeConnector([Pipe2, Pipe3])
FreeCAD.ActiveDocument.recompute()

Line4 = Draft.move(Line1, FreeCAD.Vector(-500, 1000, 0), copy=True)
Line5 = Draft.move(Line2, FreeCAD.Vector(-500, 1000, 0), copy=True)
Pipe4 = Arch.makePipe(Line4, 100)
Pipe5 = Arch.makePipe(Line5, 100)
FreeCAD.ActiveDocument.recompute()

Conn3 = Arch.makePipeConnector([Pipe4, Pipe5], radius=400)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_PipeConnector/fr&oldid=1539520>"