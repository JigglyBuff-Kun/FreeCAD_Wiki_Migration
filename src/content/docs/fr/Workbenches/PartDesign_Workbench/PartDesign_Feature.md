---
title: PartDesign Fonction
---
## Introduction

PartDesign Feature fait référence à une « étape » du processus de modélisation qui se produit à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"). Par exemple, chaque fois que vous ajoutez une boîte pleine avec [PartDesign Cube additif](/PartDesign_AdditiveBox/fr "PartDesign AdditiveBox/fr"), vous ajoutez une fonction. Lorsque vous ajoutez un chanfrein à une arête avec [PartDesign Chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr"), vous ajoutez une autre fonction. Lorsque vous découpez un trou à l'aide d'une [Esquisse](/Sketch/fr "Sketch/fr") et [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr"), vous ajoutez une autre fonction.

![](/images/PartDesign_Feature_example.png)

Modification des fonctions dans un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") avec trois fonctions séquentielles.

Il existe de nombreux types de fonctions qui peuvent ajouter ou supprimer du volume d'un solide initial. Le mot « fonction » fait référence à l'opération elle-même ainsi qu'au solide résultant après cette opération.

Pour en savoir plus sur la création d'objets solides avec l'[Atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), voir [Édition de fonctions](/Feature_editing/fr "Feature editing/fr").

## Utilisation

Presque tous les outils de l'[Atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") sont destinés à ajouter des fonctions à un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"). Ces outils sont accessibles à partir des boutons de menu et de barre d'outils lorsqu'un objet ou un sous-élément (sommet, arête, face) est sélectionné.

Les fonctionnalités peuvent être classées en différentes catégories :

* Base d'objet : fait référence à l'objet d'objet de base qui peut être créé dans un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr").
* Additif et soustractif
  + Formes primitives : [Cube additif](/PartDesign_AdditiveBox/fr "PartDesign AdditiveBox/fr"), [Cône additif](/PartDesign_AdditiveCone/fr "PartDesign AdditiveCone/fr"), [Cylindre additif](/PartDesign_AdditiveCylinder/fr "PartDesign AdditiveCylinder/fr"), [Ellipsoïde additif](/PartDesign_AdditiveEllipsoid/fr "PartDesign AdditiveEllipsoid/fr"), [Prisme additif](/PartDesign_AdditivePrism/fr "PartDesign AdditivePrism/fr"), [Sphère additive](/PartDesign_AdditiveSphere/fr "PartDesign AdditiveSphere/fr"), [Tore additif](/PartDesign_AdditiveTorus/fr "PartDesign AdditiveTorus/fr") et [Pyramide tronquée additive](/PartDesign_AdditiveWedge/fr "PartDesign AdditiveWedge/fr").
  + Formes primitives soustractives : [Cube soustractif](/PartDesign_SubtractiveBox/fr "PartDesign SubtractiveBox/fr"), [Cône soustractif](/PartDesign_SubtractiveCone/fr "PartDesign SubtractiveCone/fr"), [Cylindre soustractif](/PartDesign_SubtractiveCylinder/fr "PartDesign SubtractiveCylinder/fr"), [Ellipsoïde soustractif](/PartDesign_SubtractiveEllipsoid/fr "PartDesign SubtractiveEllipsoid/fr"), [Prisme soustractif](/PartDesign_SubtractivePrism/fr "PartDesign SubtractivePrism/fr"), [Sphère soustractive](/PartDesign_SubtractiveSphere/fr "PartDesign SubtractiveSphere/fr"), [Tore soustractif](/PartDesign_SubtractiveTorus/fr "PartDesign SubtractiveTorus/fr") et [Pyramide tronquée soustractive](/PartDesign_SubtractiveWedge/fr "PartDesign SubtractiveWedge/fr").
  + Addition basée sur un profil : [Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr"), [Révolution](/PartDesign_Revolution/fr "PartDesign Revolution/fr"), [Lissage additif](/PartDesign_AdditiveLoft/fr "PartDesign AdditiveLoft/fr"), [Balayage additif](/PartDesign_AdditivePipe/fr "PartDesign AdditivePipe/fr").
  + Soustraction basée sur un profil : [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr"), [Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr"), [Rainure](/PartDesign_Groove/fr "PartDesign Groove/fr"), [Lissage soustractif](/PartDesign_SubtractiveLoft/fr "PartDesign SubtractiveLoft/fr"), [Balayage soustractif](/PartDesign_SubtractivePipe/fr "PartDesign SubtractivePipe/fr").
* [Opérations booléennes](/PartDesign_Boolean/fr "PartDesign Boolean/fr") comprenant fusion, coupe et intersection.
* Finition
  + [Chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr")
  + [Dépouille](/PartDesign_Draft/fr "PartDesign Draft/fr")
  + [Congé](/PartDesign_Fillet/fr "PartDesign Fillet/fr")
  + [Évidement](/PartDesign_Thickness/fr "PartDesign Thickness/fr")
* Transformation
  + [Répétition linéaire](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr")
  + [Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr")
  + [Transformation multiple](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr")
  + [Répétition circulaire](/PartDesign_PolarPattern/fr "PartDesign PolarPattern/fr")
  + [Mise à l'échelle](/PartDesign_Scaled/fr "PartDesign Scaled/fr")

## Héritage

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets centraux du programme. L'objet `PartDesign::Feature` est destiné à construire des solides 3D paramétriques et est donc dérivé de l'objet de base `Part::Feature`.

## Script

*Voir aussi :* [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") et [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

Voir [Part Feature](/Part_Feature/fr "Part Feature/fr") pour les informations générales sur l'ajout d'objets à partir de la [console Python](/Python_console/fr "Python console/fr").

Voir [PartDesign Corps](/PartDesign_Body "PartDesign Body") pour les informations générales sur l'ajout d'un corps. Une fois qu'un corps existe, des fonctionnalités peuvent y être attachées à l'aide de la méthode `addObject()` du corps.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject('PartDesign::Body', 'Body')
obj.Label = "Custom label"

feature = App.ActiveDocument.addObject('PartDesign::AdditiveBox', 'Box')
feature.Width = 200
feature.Length = 300
feature.Height = 500
obj.addObject(feature)
App.ActiveDocument.recompute()

feature2 = App.ActiveDocument.addObject('PartDesign::SubtractiveBox', 'Box')
feature2.Width = 50
feature2.Length = 200
feature2.Height = 400
obj.addObject(feature2)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Feature/fr&oldid=1495969>"