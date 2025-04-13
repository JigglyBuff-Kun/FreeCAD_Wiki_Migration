---
title: Part Système de coordonnées
---
|  |
| --- |
| Part Système de coordonnées |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.1 |
| Voir aussi |
| [Part Plan de référence](/Part_DatumPlane/fr "Part DatumPlane/fr"), [Part Ligne de référence](/Part_DatumLine/fr "Part DatumLine/fr"), [Part Point de référence](/Part_DatumPoint/fr "Part DatumPoint/fr") |
|  |

## Description

La commande **Part Système de coordonnées** crée un objet coordinate system qui peut être ancré à d'autres objets. Un système de coordonnées est un des [objets de référence](/Std_Base#Std_Base/fr#Part_Datums "Std Base"). Un objet de référence est généralement utilisé pour ancrer plusieurs autres objets. Si la position ou l'orientation d'un objet de référence change, tous les objets qui lui sont ancrés suivront.

Un objet datum peut également fournir une référence géométrique pour une fonctionnalité ou une opération. Selon son type, il peut par exemple être utilisé comme vecteur de direction, axe de rotation ou plan miroir.

## Utilisation

1. Vous pouvez également activer le bon conteneur, par exemple un ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), un ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") ou un ![](/images/Assembly_CreateAssembly.svg) [assemblage](/Assembly_CreateAssembly/fr "Assembly CreateAssembly/fr"). Si plusieurs conteneurs sont actifs, l'objet de référence est ajouté au conteneur actif qui a été créé en premier.
2. Vous pouvez sélectionner la géométrie à laquelle l'objet datum doit être ancré.
3. Appuyez sur le bouton ![](/images/Part_CoordinateSystem.svg) Créer un système de coordonnées.
4. Le panneau de tâches **Ancrage** s'ouvre.
5. Si aucune géométrie n'a été sélectionnée : vous pouvez appuyer sur le bouton OK pour terminer la commande sans ancrer l'objet de référence.
6. Pour d'autres étapes, voir [Part Ancrage](/Part_EditAttachment/fr#Utilisation "Part EditAttachment/fr"). Continuez à partir de l'étape 7 de cette page si la géométrie a été présélectionnée.

## Remarques

* Un objet de référence peut également être placé dans un conteneur en le déposant sur le conteneur dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
* L'ancrage d'un objet de référence peut être modifié en éditant sa propriété Données**Map Mode**. Voir [Part Ancrage](/Part_EditAttachment/fr#Utilisation "Part EditAttachment/fr").
* Les objets [Part Plan de référence](/Part_DatumPlane/fr "Part DatumPlane/fr") et [Part Ligne de référence](/Part_DatumLine/fr "Part DatumLine/fr"), ainsi que les plans et axes de l'objet Part Système de coordonnées sont infinis.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Part CoordinateSystem, formellement un objet `Part::LocalCoordinateSystem`, est dérivé d'un objet `App::LocalCoordinateSystem`. Toutes ses propriétés sont héritées, à l'exception de celles énumérées sous Attachment.

### Données

Attachment

L'objet a les mêmes propriétés d'attachement qu'un [Part Part2DObject](/Part_Part2DObject/fr#Donn.C3.A9es "Part Part2DObject/fr").

Base

* Données (hidden)**Origin Features** (`LinkList`) : les axes, les plans et le point d'origine sont contrôlés par le système de coordonnées.
* Données**Placement** (`Placement`) : voir [Part Feature](/Part_Feature/fr#Données "Part Feature/fr").
* Données**Label** (`String`) : idem.
* Données (hidden)**Label2** (`String`) : idem.
* Données (hidden)**Expression Engine** (`ExpressionEngine`) : idem.
* Données (hidden)**Visibility** (`Bool`) : idem.
* Données**Group** (`LinkList`):
* Données (hidden)**\_ Group Touched** (`Bool`):

### Vue

Display Options

* Vue**Display Mode** (`Enumeration`) : voir [Part Feature](/Part_Feature/fr#Vue "Part Feature/fr").
* Vue**Show In Tree** (`Bool`) : idem.
* Vue**Visibility** (`Bool`) : idem.

Selection

* Vue**On Top When Selected** (`Enumeration`) : voir [Part Feature](/Part_Feature/fr#Vue "Part Feature/fr").
* Vue**Selection Style** (`Enumeration`) : idem.

## Script

```
import FreeCAD as App

doc = App.newDocument()

body = doc.addObject("PartDesign::Body", "Body")
lcs = doc.addObject("Part::LocalCoordinateSystem", "LCS")
lcs.Visibility = True
body.addObjects([lcs])

orig = body.Origin
plane = next(f for f in orig.OriginFeatures if f.Role == "XZ_Plane")
lcs.AttachmentSupport = [(orig, (plane.Name + ".", ))]
lcs.AttachmentOffset = App.Placement(App.Vector(), App.Vector(1, 0, 0), 45)
lcs.MapMode = "FlatFace"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CoordinateSystem/fr&oldid=1538304>"