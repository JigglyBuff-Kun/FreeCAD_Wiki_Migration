---
title: Draft Miroir
---
|  |
| --- |
| Draft Miroir |
| Emplacement du menu |
| Draft/BIM : Modification → Mettre en miroir |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| M I |
| Introduit dans la version |
| - |
| Voir aussi |
| [Draft Cloner](/Draft_Clone/fr "Draft Clone/fr") |
|  |

## Description

La commande ![](/images/Draft_Mirror.svg) **Draft Miroir** crée des copies miroir, des [Part Objets en miroir](/Part_Mirror/fr "Part Mirror/fr"), à partir des objets sélectionnés. Un [Part Objet en miroir](/Part_Mirror/fr "Part Mirror/fr") est paramétrique et il sera mis à jour si son objet source change.

Cette commande peut être utilisée sur des objets 2D créés avec l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), mais aussi sur de nombreux objets 3D tels que ceux créés avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr"), l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") ou l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr").

![](/images/Draft_Mirror_example.jpg)

Mise en miroir d'un objet

## Utilisation

Voir aussi : [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Vous pouvez sélectionné un ou plusieurs objets.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/Draft_Mirror.svg) Mettre en miroir.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr"): sélectionner l'option **Modification → ![](/images/Draft_Mirror.svg) Mettre en miroir** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr"): sélectionner l'option **Modification → ![](/images/Draft_Mirror.svg) Mettre en miroir** du menu.
   * Utiliser le raccourci clavier : M puis I.
3. Si vous n'avez pas encore sélectionné d'objet : sélectionner un objet dans la [vue 3D](/3D_view/fr "3D view/fr").
4. Le panneau de tâches **Mettre en miroir** s'ouvre. Voir [Options](#Options) pour plus d'informations.
5. Choisir le premier point du plan miroir dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
6. Choisir le deuxième point du plan miroir dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrer des coordonnées et appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
7. Le plan miroir est défini par les points sélectionnés et la normale du [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut.

* Pour saisir manuellement des coordonnées, entrez les valeurs X, Y et Z et appuyer sur Entrée après chaque valeur ou appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Appuyer sur R ou cliquer sur la case **Relatif** pour activer le mode relatif. Si le mode relatif est activé, les coordonnées du deuxième point sont relatives au premier point, sinon elles sont relatives à l'origine du système de coordonnées.
* Appuyer sur G ou cliquer sur la case **Global** pour activer le mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyer sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").
* Appuyer sur Échap ou sur le bouton Fermer pour abandonner la commande.

## Remarques

* Les copies en miroir des [Draft Lignes](/Draft_Line/fr "Draft Line/fr"), [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr"), [Draft Arcs](/Draft_Arc/fr "Draft Arc/fr") et [Draft Cercles](/Draft_Circle/fr "Draft Circle/fr") peuvent être transformées en objets Draft éditables indépendants en utilisant [Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr") et ensuite [Draft Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr").
* La commande [Part Copie simple](/Part_SimpleCopy/fr "Part SimpleCopy/fr") peut être utilisée pour créer une copie d'un objet mis en miroir qui n'est pas lié à son objet source.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un [Part Objet en miroir](/Part_Mirror/fr "Part Mirror/fr") est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Source** (`Link`) : donne l'objet qui est mis en miroir.

Plane

* Données**Base** (`Vector`) : indique le point de base du plan miroir.
* Données**Normal** (`Vector`) : indique la direction normale du plan miroir.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour mettre en miroir des objets, utilisez la méthode `mirror` du module Draft.

```
mirrored_list = mirror(objlist, p1, p2)

```

* `objlist` contient les objets à mettre en miroir. Il s'agit soit d'un objet unique, soit d'une liste d'objets.
* `p1` est le premier point du plan miroir.
* `p2` est le second point du plan miroir.
* Si le [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") est disponible, l'alignement du plan miroir est déterminé par sa normale, sinon la direction de la caméra dans la [vue 3D](/3D_view/fr "3D view/fr") active est utilisée. Si l'interface graphique n'est pas disponible, l'axe Z est utilisé.
* `mirrored_list` est retourné avec les nouveaux objets `Part::Mirroring`. Il s'agit soit d'un objet unique, soit d'une liste d'objets, en fonction de `objlist`.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(FreeCAD.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

p1 = App.Vector(2000, -1000, 0)
p2 = App.Vector(2000, 1000, 0)

line1 = Draft.make_line(p1, p2)
mirrored1 = Draft.mirror(polygon1, p1, p2)

Line2 = Draft.make_line(-p1, -p2)
mirrored2 = Draft.mirror([polygon1, polygon2], -p1, -p2)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Mirror/fr&oldid=1513940>"