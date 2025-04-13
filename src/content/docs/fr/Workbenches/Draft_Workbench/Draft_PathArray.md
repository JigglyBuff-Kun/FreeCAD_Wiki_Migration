---
title: Draft Réseau selon une courbe
---
|  |
| --- |
| Draft Réseau selon une courbe |
| Emplacement du menu |
| Draft : Modification → Outils pour les réseaux → Réseau selon une courbe  BIM : Modification → Réseau selon une courbe |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.14 |
| Voir aussi |
| [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr"), [Draft Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr"), [Draft Réseau circulaire](/Draft_CircularArray/fr "Draft CircularArray/fr"), [Draft Réseau lié selon une courbe](/Draft_PathLinkArray/fr "Draft PathLinkArray/fr"), [Draft Réseau de points](/Draft_PointArray/fr "Draft PointArray/fr"), [Draft Réseau lié selon des points](/Draft_PointLinkArray/fr "Draft PointLinkArray/fr") |
|  |

## Description

La commande ![](/images/Draft_PathArray.svg) **Draft Réseau selon une courbe** crée un réseau régulier à partir d'un objet sélectionné en plaçant des copies le long d'une courbe. Utilisez la commande [Draft Réseau lié selon une courbe](/Draft_PathLinkArray/fr "Draft PathLinkArray/fr") pour créer un réseau [Link](/App_Link/fr "App Link/fr") plus efficace à la place. À l'exception du type de réseau créé, réseau de liens ou réseau régulier, la commande [Draft Réseau lié selon une courbe](/Draft_PathLinkArray/fr "Draft PathLinkArray/fr") est identique à cette commande.

Ces deux commandes peuvent être utilisées sur des objets 2D créés avec l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), mais aussi sur de nombreux objets 3D tels que ceux créés avec l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr"), l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") ou l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr").

![](/images/Draft_PathArray_Example.png)

Un Draft réseau selon une courbe

## Utilisation

1. Sélectionner l'objet que vous souhaitez mettre en réseau.
2. Ajouter la trajectoire à la sélection. Il est également possible de sélectionner des arêtes à la place. Les arêtes doivent appartenir au même objet et doivent être connectées.
3. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/Draft_PathArray.svg) Réseau selon une courbe.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr"): sélectionner l'option **Modification → Outils pour les réseaux → ![](/images/Draft_PathArray.svg) Réseau selon une courbe** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr"): sélectionner l'option **Modification → ![](/images/Draft_PathArray.svg) Réseau selon une courbe** du menu.
4. Le réseau est créé.
5. Vous pouvez modifier les [propriétés](#Propri.C3.A9t.C3.A9s) du réseau dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Alignement

L'alignement des éléments d'un Draft Réseau selon une courbe dépend des propriétés du réseau et de l'orientation de l'objet source. La position de l'objet source est ignorée : pour les besoins du réseau, les valeurs `x`, `y` et `z` sont fixées à `0`. Si la propriété Données**Align** du réseau est définie à `false`, l'orientation des éléments du réseau est identique à celle de l'objet source. Si elle a pour valeur `true`, l'axe X du système de coordonnées local de chaque élément placé est tangent à la trajectoire. Les axes Y et Z des systèmes de coordonnées locaux dépendent de la propriété Données**Align Mode** du réseau. Les autres propriétés du réseau impliquées dans l'alignement comprennent Données**Tangent Vector**, Données**Force Vertical** et Données**Vertical Vector**.

![](/images/Draft_PathArray_example2.png)

3 réseaux basés sur la même courbe non planaire.  
De gauche à droite : Align est false, Align à true pour Align Mode Original et Align à true pour Align Mode Frenet.

.

### Mode d'alignement

Trois modes sont disponibles :

#### Original

Ce mode se rapproche le plus du mode unique Données**Align Mode** disponible dans la version 0.18. Il s'appuie sur un vecteur normal fixe. Si la courbe est planaire, ce vecteur est perpendiculaire au plan de la courbe, sinon un vecteur par défaut, l'axe Z positif, est utilisé. À partir de ce vecteur normal et du vecteur tangent local (l'axe X local), un [produit vectoriel](https://fr.wikipedia.org/wiki/Produit_vectoriel) est calculé. Ce nouveau vecteur est utilisé comme axe Z local. L'orientation de l'axe Y local est déterminée à partir des axes X et Z locaux.

#### Frenet

Ce mode utilise le vecteur normal local dérivé de la trajectoire à chaque placement d'élément. Si ce vecteur ne peut pas être déterminé (par exemple dans le cas d'un segment droit), un vecteur par défaut, toujours l'axe Z positif, est utilisé à la place. Avec ce vecteur et le vecteur tangent local, le système de coordonnées local est déterminé en utilisant la même procédure que dans le paragraphe précédent.

#### Tangent

Ce mode est similaire à Données**Align Mode**. `Original` mais offre la possibilité de pré-rotation de l'objet source en spécifiant un Données**Tangent Vector**.

### Force Vertical et Vertical Vector

Ces propriétés ne sont disponibles que si Données**Align Mode** est `Original` ou `Tangent`. Si Données**Force Vertical** est défini sur `true`, le système de coordonnées local est calculé d'une manière différente. Données**Vertical Vector** est utilisé comme vecteur normal fixe. Un produit vectoriel est à nouveau calculé à partir de ce vecteur normal et du vecteur tangent local (l'axe X local). Mais ce vecteur est maintenant utilisé comme l'axe Y local. L'orientation de l'axe Z local est déterminée à partir des axes X et Y locaux.

L'utilisation de ces propriétés peut s'avérer nécessaire lorsqu'une arête de la courbe devient (presque) parallèle à la normale par défaut de la courbe.

## Remarques

* Les réseaux de liens fusionnés ne sont pas affichés correctement ; dans la vue 3D, leurs éléments apparaissent toujours non fusionnés.

## Propriétés

Voir aussi: [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Draft Réseau selon une courbe est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés (à l'exception de certaines propriétés Vue qui ne sont pas héritées par les réseaux de liens). Les propriétés suivantes sont supplémentaires, sauf indication contraire :

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

Alignment

* Données**Align** (`Bool`) : spécifie si les éléments du réseau sont alignés ou non le long de la courbe. Si elle vaut `false`, toutes les autres propriétés de ce groupe, à l'exception de Données**Extra Translation** ne s'appliquent pas et sont masquées.
* Données**Align Mode** (`Enumeration`) : spécifie le mode d'alignement, qui peut être `Original`, `Frenet` ou `Tangent`.
* Données**Extra Translation** (`VectorDistance`) : spécifie un déplacement supplémentaire pour chaque élément le long de la courbe.
* Données**Force Vertical** (`Bool`) : spécifie s'il faut remplacer la direction normale par défaut par la valeur de Données**Vecteur Vertical**. Utilisé uniquement si Données**Align Mode** est `Original` ou `Tangent`.
* Données**Reverse Path** (`Bool`) : spécifie si la courbe doit être parcouru à l'envers. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* Données**Tangent Vector** (`Vector`) : spécifie le vecteur d'alignement. Utilisé uniquement si Données**Align Mode** est `Tangent`.
* Données**Vertical Vector** (`Vector`) : spécifie le remplacement de la direction normale par défaut. Utilisé uniquement si Données**Vertical Vector** est `true`.

Draft

* Données**Always Sync Placement** (`Bool`)

Objects

* Données**Base** (`LinkGlobal`) : spécifie l'objet à dupliquer dans le réseau.
* Données**Expand Array** (`Bool`) : indique s'il faut développer le réseau dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour permettre la sélection de ses éléments individuels. Disponible uniquement pour les réseaux de liens.
* Données**Fuse** (`Bool`) : spécifie si les éléments qui se chevauchent dans le réseau sont fusionnés ou non. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Données**Path Object** (`LinkGlobal`) : spécifie l'objet à utiliser pour la courbe. Il doit contenir `Edges` dans sa [Part TopoShape](/Part_TopoShape/fr "Part TopoShape/fr").
* Données**Path Subelements** (`LinkSubListGlobal`) : spécifie une liste d'arêtes de Données**Path Object**. Si elle est renseignée, seules ces arêtes sont utilisées pour la courbe.
* Données**Placement List** (`PlacementList`) : placement de chaque élément. Apparaît dans le groupe Link pour les réseaux de liens. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

Spacing

* Données**Count** (`Integer`) : indique le nombre d'éléments du réseau.
* Données**End Offset** (`Length`) : spécifie la longueur entre la fin de la courbe et la dernière copie. Elle doit être inférieure à la longueur de la courbe moins Données**Start Offset**. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
* Données**Spacing Mode** (`Enumeration`) : spécifie comment les éléments sont espacés. Les options sont les suivantes : [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
  + `Fixed count` : la longueur de la courbe disponible (moins les décalages de début et de fin) est divisée de manière égale pour accueillir les éléments Données**Count**.
  + `Fixed spacing` : commence au décalage de début et place les nouveaux éléments après avoir parcouru une distance fixe le long de la courbe.
  + `Fixed count and spacing` : identique à `Fixed spacing`, mais s'arrête également aux éléments Données**Count**.
* Données**Spacing Pattern** (`FloatList`) : l'espacement est multiplié par un nombre correspondant dans cette séquence. Utilisé uniquement si Données**Use Spacing Pattern** est `true`, sinon caché. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* Données**Spacing Unit** (`Length`) : la distance fixe de base entre les éléments. Utilisé uniquement si Données**Spacing Mode** est `Fixed spacing` ou `Fixed count and spacing` sinon caché. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* Données**Start Offset** (`Length`) : spécifie la longueur entre le début de la courbe et la première copie. Elle doit être inférieure à la longueur de la courbe. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
* Données**Use Spacing Pattern** (`Bool`) : utilise des motifs d'espacement répétitifs au lieu d'un espacement uniforme. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

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

* Vue (Caché)**Child View Provider** (`PersistentObject`)
* Vue (Caché)**Material List** (`MaterialList`)
* Vue (Caché)**Override Color List** (`ColorList`)
* Vue (Caché)**Override Material List** (`BoolList`)
* Vue (Caché)**Proxy** (`PythonObject`): il s'agit d'une propriété héritée.

Display Options

Les propriétés de ce groupe sont des propriétés héritées. Voir [Part Feature](/Part_Feature/fr#Propri.C3.A9t.C3.A9s "Part Feature/fr") pour plus d'informations.

* Vue**Bounding Box** (`Bool`) : cette propriété n'est pas héritée par les réseaux de liens (Link).
* Vue**Display Mode** (`Enumeration`) : pour les réseaux de type Link, il peut s'agir de `Link` ou `ChildView`. Pour les autres réseaux, il peut s'agir de : `Flat Lines`, `Shaded`, `Wireframe` ou `Points`.
* Vue**Show In Tree** (`Bool`)
* Vue**Visibility** (`Bool`)

Draft

* Vue**Pattern** (`Enumeration`) : non utilisé.
* Vue**Pattern Size** (`Float`) : non utilisé.

Object style

Les propriétés de ce groupe ne sont pas héritées par les réseaux de liens.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour créer un réseau selon une courbe, utilisez la méthode `make_path_array` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) de l'atelier Draft. Cette méthode remplace la méthode dépréciée `makePathArray`.

```
path_array = make_path_array(base_object, path_object,
                             count=4, extra=App.Vector(0, 0, 0), subelements=None,
                             align=False, align_mode="Original", tan_vector=App.Vector(1, 0, 0),
                             force_vertical=False, vertical_vector=App.Vector(0, 0, 1),
                             use_link=True)

```

* `base_object` est l'objet à mettre en réseau. Il peut également s'agir du `Label` (chaîne de caractères) d'un objet du document courant.
* `path_object` est l'objet courbe. Il peut également s'agir du `Label` (chaîne de caractères) d'un objet du document courant.
* `count` est le nombre d'éléments dans le réseau.
* `extra` est un vecteur qui déplace chaque élément.
* `subelements` est une liste d'arêtes de `path_object`, par exemple `["Bord1", "Bord2"]`. Si elle est renseignée, seules ces arêtes sont utilisées pour la courbe.
* Si `align` est `True` les éléments sont alignés le long de la courbe en fonction de la valeur de `align_mode`, qui peut être `"Original"`, `"Frenet"` ou `"Tangent"`.
* `tan_vector` est un vecteur unitaire qui définit la direction tangente locale des éléments le long de la courbe. Il est utilisé lorsque `align_mode` est `"Tangent"`.
* Si `force_vertical` est `True` `vertical_vector` est utilisé pour la direction Z locale des éléments le long de la courbe. Il est utilisé lorsque `align_mode` est `"Original"` ou `"Tangent"`.
* Si `use_link` est `True`, les éléments créés sont des [App Links](/App_Link/fr "App Link/fr") au lieu de copies ordinaires.
* `path_array` est restitué avec l'objet réseau créé.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(500, -1000, 0)
p2 = App.Vector(1500, 1000, 0)
p3 = App.Vector(3000, 500, 0)
p4 = App.Vector(4500, 100, 0)
spline = Draft.make_bspline([p1, p2, p3, p4])
obj = Draft.make_polygon(3, 500)

path_array = Draft.make_path_array(obj, spline, 6)
doc.recompute()

wire = Draft.make_wire([p1, -p2, -p3, -p4])
path_array2 = Draft.make_path_array(obj, wire, count=3, extra=App.Vector(0, -500, 0), subelements=["Edge2", "Edge3"], align=True, force_vertical=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PathArray/fr&oldid=1558062>"