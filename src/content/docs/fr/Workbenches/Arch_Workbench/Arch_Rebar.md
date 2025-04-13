---
title: Arch Armature personnalisée
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Armature |
| Emplacement du menu |
| 3D/BIM → Outils d'armatures → Armature personnalisée |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr"), [Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr") |
| Raccourci par défaut |
| R B |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Armature** vous permet de placer des [barres d'armature](http://fr.wikipedia.org/wiki/Armature_%28technique%29) dans les objets [Structure](/Arch_Structure/fr "Arch Structure/fr").

Les objets Armatures sont basés sur des profils 2D comme les [esquisses](/Sketcher_Workbench/fr "Sketcher Workbench/fr") ou [les objets dessin](/Draft_Workbench/fr "Draft Workbench/fr"), qui doivent être dessinés sur une face d'un objet Structure. Vous pouvez ensuite ajuster la configuration de l'armature comme le nombre et le diamètre des barres ou la distance de décalage entre les deux extrémités de l'élément structurel.

![](/images/Arch_Rebar_example.jpg)

L'image ci dessus montre un objet structurel, sur lequel deux esquisses sont dessinées, qui définissent le chemin des barre de fer. Ces deux esquisses sont ensuite transformées en objet Armature.

## Utilisation

1. Basculez vers l'![](/images/Workbench_BIM.svg) [atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr").
2. Créez un objet ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")
3. Basculez vers l'![](/images/Workbench_Sketcher.svg) [atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")
4. Sélectionnez une face de l'objet Structure
5. Appuyez sur le bouton ![](/images/Sketcher_NewSketch.svg) [Sketcher Créer une nouvelle esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") pour démarrer l'édition d'une nouvelle esquisse sur la face choisie
6. Dessinez la forme de l'Armature
7. Cliquez sur le bouton ![](/images/Sketcher_LeaveSketch.svg) [Sketcher Sortir de l'edition de l'esquisse](/Sketcher_LeaveSketch/fr "Sketcher LeaveSketch/fr") pour finir
8. Basculez de nouveau vers l'![](/images/Workbench_BIM.svg) [atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr").
9. Sélectionnez l'esquisse que vous venez de dessiner
10. Appuyez sur le bouton ![](/images/Arch_Rebar.svg) Arch Armature personnalisée, ou pressez les touches R puis B
11. Ajustez les propriétés désirées (votre armature peut ne pas apparaître immédiatement, si certaines propriétés créent des situations impossibles comme un diamètre égal à 0 mm ou un décalage plus grand que la longueur de l'objet Structure).

Bien que normalement une armature soit utilisée dans une structure de Arch, depuis FreeCAD 0.19, elle peut être créée en dehors de tout objet hôte. Pour héberger une barre dans un objet, il vous suffit de définir Données**Host**.

## Options

* La valeur d'arrondi est exprimée en multiples du diamètre. Si la barre a un diamètre de 5 mm, la valeur d'arrondi de 3 va créer des angles arrondis d'un rayon de 15 mm.
* La valeur par défaut des nouvelles armatures peut être définie dans les préférences de l'atelier Arch.
* Si un vecteur de direction n'est pas spécifié, la direction et la distance le long de laquelle les armatures seront répandues sont définies automatiquement sur l'objet hôte structurel, en prenant la direction normale de l'esquisse de base et en son intersection avec l'objet structurel. Si vous spécifiez un vecteur de direction, la longueur de ce vecteur va également être prise en compte.
* La valeur d'espacement est calculée d'après le nombre actuel des armatures et représente la distance entre les axes de chaque barre. Vous devez donc soustraire le diamètre de l'armature pour obtenir la taille de l'espace libre entre les armatures.

## Propriétés

un objet Arch Rebar partage les propriétés communes et les comportements de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

* Données**Amount** : quantité de barres.
* Données**Diameter** : diamètre des barres.
* Données**Direction** : direction (et longueur) selon laquelle la barre est répartie. Si la valeur est (0,0,0), la direction est calculée automatiquement en fonction de l'objet Structure hôte.
* Données**Offset Start** : distance du décalage entre le bord de l'objet Structure et la première barre.
* Données**Offset End** : distance du décalage entre le bord de l'objet Structure et la dernière barre.
* Données**Rounding** : Une valeur d'arrondi qui s'applique aux angles des barres, multiple du diamètre.
* Données**Spacing** : espacement des axes de chaque barre.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Armature peut être utilisé dans les [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant les fonctions suivantes :

```
Rebar = makeRebar(baseobj=None, sketch=None, diameter=None, amount=1, offset=None, name="Rebar")

```

* Crée un objet `Rebar` à partir d'`objet de base` donné, qui est une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr"), et une `sketch` comme profil.
  + `diameter`, `amount` et `offset` sont utilisés pour définir les caractéristiques des barres.
  + Si aucune valeur `diameter`, `amount` ou `offset` n'est donnée, les valeurs par défaut des [Arch Préférences](/Arch_Preferences/fr "Arch Preferences/fr") sont utilisées.

Exemple :

```
import FreeCAD, Arch, Part

Structure = Arch.makeStructure(None, length=1000, width=1000, height=3000)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

p1 = FreeCAD.Vector(-400, 400, 0)
p2 = FreeCAD.Vector(400, 400, 0)
Sketch = FreeCAD.ActiveDocument.addObject('Sketcher::SketchObject', 'Sketch')
Sketch.MapMode = "FlatFace"
Sketch.Support = [(Structure, "Face6")]
Sketch.addGeometry(Part.LineSegment(p1, p2))
FreeCAD.ActiveDocument.recompute()

Rebar = Arch.makeRebar(Structure, Sketch, diameter=80, amount=7, offset=50)
Rebar.OffsetStart = 100
Rebar.OffsetEnd = 100
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Rebar/fr&oldid=1540367>"