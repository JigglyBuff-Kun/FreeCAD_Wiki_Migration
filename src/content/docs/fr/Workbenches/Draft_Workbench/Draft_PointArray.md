---
title: Draft Réseau de points
---
|  |
| --- |
| Draft Réseau de points |
| Emplacement du menu |
| Draft : Modification → Outils pour les réseaux → Réseau de points  BIM : Modification → Réseau de points |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.18 |
| Voir aussi |
| [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr"), [Draft Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr"), [Draft Réseau circulaire](/Draft_CircularArray/fr "Draft CircularArray/fr"), [Draft Réseau selon une courbe](/Draft_PathArray/fr "Draft PathArray/fr"), [Draft Réseau lié selon une courbe](/Draft_PathLinkArray/fr "Draft PathLinkArray/fr"), [Draft Réseau lié selon des points](/Draft_PointLinkArray/fr "Draft PointLinkArray/fr") |
|  |

## Description

La commande ![](/images/Draft_PointArray.svg) **Draft Réseau de points** crée un réseau régulier à partir d'un objet de base sélectionné en plaçant des copies aux points d'un objet ponctuel. Utilisez la commande [Draft Réseau lié selon une courbe](/Draft_PointLinkArray/fr "Draft PointLinkArray/fr") pour créer un réseau lié [Link](/App_Link/fr "App Link/fr") plus efficace. À l'exception du type de réseau créé, réseau de liens ou réseau régulier, la commande [Draft Réseau lié selon une courbe](/Draft_PointLinkArray/fr "Draft PointLinkArray/fr") est identique à cette commande.

L'objet de base peut être un objet 2D créé avec l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), mais aussi un objet 3D tel que ceux créés avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr"), l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") ou l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr").

L'objet Point peut être n'importe quel objet ayant une forme et des sommets (y compris un [Std Part](/Std_Part/fr "Std Part/fr") contenant un ou plusieurs de ces objets), ainsi qu'un [maillage](/Mesh_Workbench/fr "Mesh Workbench/fr") et un [nuage de point](/Points_Workbench/fr "Points Workbench/fr"). Les points en double dans l'objet point sont filtrés.

![](/images/Draft_PointArray_Example.png)

Un Draft Réseau de points

## Utilisation

1. Sélectionner l'objet que vous souhaitez mettre en réseau.
2. Ajouter l'objet point à la sélection.
3. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/Draft_PointArray.svg) Réseau de points.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionner l'option **Modification → Outils pour les réseaux → ![](/images/Draft_PointArray.svg) Réseau de points** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionner l'option **Modification → ![](/images/Draft_PointArray.svg) Réseau de points** du menu.
4. Le réseau est créé.
5. Vous pouvez modifier les [propriétés](#Propri.C3.A9t.C3.A9s) du réseau dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Remarques

* Les réseaux de liens fusionnés ne sont pas affichés correctement ; dans la vue 3D, leurs éléments apparaissent toujours non fusionnés.

## Propriétés

Voir aussi: [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Réseau de points est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés (à l'exception de certaines propriétés Vue qui ne sont pas héritées par les réseaux Link). Les propriétés suivantes sont supplémentaires, sauf indication contraire :

### Données

Link

Les propriétés de ce groupe ne sont disponibles que pour les réseaux de liens. Voir [Std Créer un lien](/Std_LinkMake/fr#Propri.C3.A9t.C3.A9s "Std LinkMake/fr") pour plus d'informations.

* Données**Scale** (`Float`)
* Données (Hidden)**Scale Vector** (`Vector`)
* Données**Scale List** (`VectorList`)
* Données (Hidden)**Visibility List** (`BoolList`)
* Données (Hidden)**Placement List** (`PlacementList`)
* Données (Hidden)**Element List** (`LinkList`)
* Données (Hidden)**\_ Link Touched** (`Bool`)
* Données (Hidden)**\_ Child Cache** (`LinkList`)
* Données (Hidden)**\_ Link Owner** (`Integer`)
* Données (Hidden)**Colored Elements** (`LinkSubHidden`)
* Données**Link Copy On Change** (`Enumeration`)
* Données**Link Transform** (`Bool`)

Draft

* Données**Always Sync Placement** (`Bool`)

Objects

* Données**Base** (`Link`) : spécifie l'objet à dupliquer dans le réseau.
* Données**Count** (`Integer`) : (en lecture seule) spécifie le nombre d'éléments dans le réseau. Ce nombre est déterminé par le nombre de points dans l'objet Données**Point**.
* Données**Expand Array** (`Bool`) : spécifie s'il faut développer le réseau dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour permettre la sélection de ses éléments individuels. Disponible uniquement pour les réseaux de liens.
* Données**Extra Placement** (`Placement`) : spécifie un [placement](/Placement/fr "Placement/fr"), une translation et une rotation supplémentaires pour chaque élément du réseau.
* Données**Fuse** (`Bool`) : spécifie si les éléments qui se chevauchent dans le réseau sont fusionnés ou non. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Données**Placement List** (`PlacementList`) : le placement de chaque élément. Apparaît dans le groupe Link pour les réseaux de liens. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* Données**Point Object** (`Link`) : spécifie l'objet dont les points sont utilisés pour positionner les éléments dans le réseau.

### Vue

Link

Les propriétés de ce groupe, à l'exception de la propriété héritée, ne sont disponibles que pour les réseaux liens (Link). Voir [Std Créer un lien](/Std_LinkMake/fr#Propri.C3.A9t.C3.A9s "Std LinkMake/fr") pour plus d'informations.

* Vue**Draw Style** (`Enumeration`)
* Vue**Line Width** (`FloatConstraint`)
* Vue**Override Material** (`Bool`)
* Vue**Point Size** (`FloatConstraint`)
* Vue**Selectable** (`Bool`) : il s'agit d'une propriété héritée qui apparaît dans le groupe Sélection pour d'autres réseaux.
* Vue**Shape Material** (`Material`)

Base

Les propriétés de ce groupe, à l'exception de la propriété héritée, ne sont disponibles que pour les réseaux liens (Link). Voir [Std Créer un lien](/Std_LinkMake/fr#Propri.C3.A9t.C3.A9s "Std LinkMake/fr") pour plus d'informations.

* Vue (Hidden)**Child View Provider** (`PersistentObject`)
* Vue (Hidden)**Material List** (`MaterialList`)
* Vue (Hidden)**Override Color List** (`ColorList`)
* Vue (Hidden)**Override Material List** (`BoolList`)
* Vue (Hidden)**Proxy** (`PythonObject`): il s'agit d'une propriété héritée.

Display Options

Les propriétés de ce groupe sont des propriétés héritées. Voir [Part Feature](/Part_Feature/fr#Propri.C3.A9t.C3.A9s "Part Feature/fr") pour plus d'informations.

* Vue**Bounding Box** (`Bool`): cette propriété n'est pas héritée par les réseaux de liens (Link).
* Vue**Display Mode** (`Enumeration`): pour les réseaux de liens, il peut s'agir de `Link` ou `ChildView`. Pour les autres réseaux, il peut s'agir de : `Flat Lines`, `Shaded`, `Wireframe` ou `Points`
* Vue**Show In Tree** (`Bool`)
* Vue**Visibility** (`Bool`)

Draft

* Vue**Pattern** (`Enumeration`) : non utilisé.
* Vue**Pattern Size** (`Float`) : non utilisé.

Object style

Les propriétés de ce groupe ne sont pas héritées par les réseaux de liens.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer un réseau de points, utilisez la méthode `make_point_array` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) de l'atelier Draft. Cette méthode remplace la méthode dépréciée `makePointArray`.

```
point_array = make_point_array(base_object, point_object, extra=None, use_link=True)

```

* `base_object` est l'objet à mettre en réseau. Il peut également s'agir du `Label` (chaîne de caractères) d'un objet du document courant.
* `point_object` est l'objet contenant les points. Il peut également s'agir du `Label` (chaîne de caractères) d'un objet du document courant. Il doit avoir une propriété `Geometry`, `Links`, ou `Components` contenant des points.
* `extra` est un `App.Placement`, un `App.Vector` ou un `App.Rotation` qui déplace chaque élément.
* Si `use_link` est `True`, les éléments créés sont des [App Links](/App_Link/fr "App Link/fr") au lieu de copies ordinaires.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon = Draft.make_polygon(3, radius=500.0)

p1 = Draft.make_point(App.Vector(1500, 0, 0))
p2 = Draft.make_point(App.Vector(2500, 0, 0))
p3 = Draft.make_point(App.Vector(2000, 1000, 0))

compound = doc.addObject("Part::Compound", "Compound")
compound.Links = [p1, p2, p3]

point_array = Draft.make_point_array(polygon, compound)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PointArray/fr&oldid=1558058>"