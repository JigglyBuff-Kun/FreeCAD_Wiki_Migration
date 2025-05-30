---
title: Part Cône
---
|  |
| --- |
| Part Cône |
| Emplacement du menu |
| Part → Primitives → Cône |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Primitives](/Part_Primitives/fr "Part Primitives/fr") |
|  |

## Description

La commande ![](/images/Part_Cone.svg) **Part Cône** crée un solide conique paramétrique. Dans le système de coordonnées défini par sa propriété Données**Placement**, la face inférieure du cône se trouve dans le plan XY avec son centre à l'origine.

Le Part Cône par défaut est tronqué. On peut le transformer en un cône complet, non tronqué, en donnant la valeur zéro à sa propriété Données**Radius1** ou Données**Radius2**. Il peut être transformé en un segment de cône en modifiant sa propriété Données**Angle**.

![](/images/Part_Cone_Example.png)

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Part_Cone.svg) Cône.
   * Sélectionnez l'option **Part → Primitives → ![](/images/Part_Cone.svg) Cône** du menu.
2. Le cône est créé.
3. Vous pouvez modifier les dimensions et le Données**Placement** du cône en effectuant l'une des opérations suivantes :
   * Double-cliquez sur l'objet dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") :
     1. Le panneau de tâches **Primitives géométriques** s'ouvre.
     2. Modifiez une ou plusieurs propriétés.
     3. L'objet est mis à jour dynamiquement dans la [vue 3D](/3D_view/fr "3D view/fr").
     4. Appuyez sur le bouton OK.
     5. Modifiez les propriétés dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").
   * Changez le Données**Placement** avec la commande ![](/images/Std_TransformManip.svg) [Std Transformer](/Std_TransformManip/fr "Std TransformManip/fr").

## Exemple

![](/images/Part_Cone_Scripting_Example.png)

Part Cône à partir de l'exemple du script

Un objet Part Cône créé avec l'[exemple du script](#Script) ci-dessous.

## Remarques

* Un Part Cône peut également être créé avec la commande ![](/images/Part_Primitives.svg) [Part Primitives](/Part_Primitives/fr "Part Primitives/fr"). Avec cette commande, vous pouvez spécifier les dimensions et le placement au moment de la création.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Part Cône est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Attachment

L'objet a les mêmes propriétés d'attachement qu'un [Part Part2DObject](/Part_Part2DObject/fr#Donn.C3.A9es "Part Part2DObject/fr").

Cone

* Données**Radius1** (`Length`) : rayon de la face inférieure du cône. Peut être `0mm` si Données**Radius2** est supérieur à `0mm`. La valeur par défaut est `2mm`.
* Données**Radius2** (`Length`) : rayon de la face supérieure du cône. Peut être `0mm` si Données**Radius1** est supérieur à `0mm`. La valeur par défaut est `4mm`.
* Données**Height** (`Length`) : hauteur du cône. La valeur par défaut est `10mm`.
* Données**Angle** (`Angle`) : angle de l'arc de cercle qui définit la face supérieure et inférieure du cône. Plage valide : `0° < value <= 360°`. La valeur par défaut est `360°`. Si elle est inférieure à `360°`, le solide résultant sera un segment de cône.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/), [Part Ecrire un script](/Part_scripting/fr "Part scripting/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Un Part Cône est créé avec la méthode `addObject()` du document :

```
cone = FreeCAD.ActiveDocument.addObject("Part::Cone", "myCone")

```

* Où `"myCone"` est le nom de l'objet.
* La fonction restitue l'objet nouvellement créé.

Exemple :

```
import FreeCAD as App

doc = App.activeDocument()

cone = doc.addObject("Part::Cone", "myCone")
cone.Radius1 = 5
cone.Radius2 = 10
cone.Height = 50
cone.Angle = 270
cone.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(30, 60, 15))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Cone/fr&oldid=1469849>"