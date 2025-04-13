---
title: Feature
---
## Introduction

Dans FreeCAD, le mot "Feature" est normalement utilisé pour faire référence à un objet [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr") (classe `PartDesign::Feature`) défini par la classe [PartDesign Workbench](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Il s'agit d'une opération ou d'une étape de modélisation effectuée pour créer ou modifier un solide [Shape](/Shape/fr "Shape/fr") en suivant le paradigme [feature publishing](/Feature_editing/fr "Feature editing/fr").

Voir [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr") pour plus d'informations sur ce type d'objet.

## Utilisation

1. Basculez vers l'![](/images/Workbench_PartDesign.svg) [Atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
2. Appuyez sur ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr").
3. Appuyez sur le bouton ![](/images/PartDesign_NewSketch.svg) [PartDesign Nouvelle esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") pour créer une nouvelle [Esquisse](/Sketch/fr "Sketch/fr").
4. Créez un fil fermé, puis utilisez le bouron ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") pour extruder l'esquisse et créer un solide initial. Ce solide initial est la fonction initiale.
5. Ajoutez plus d'esquisses et de tampons et utilisez d'autres outils de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") pour modifier et transformer le solide initial. Chacune de ces étapes correspond aux Caractéristiques du [Corps](/Body/fr "Body/fr").
6. Alternativement, ajoutez des objets primitifs, comme ![](/images/PartDesign_AdditiveBox.svg) [PartDesign Cube additif](/PartDesign_AdditiveBox/fr "PartDesign AdditiveBox/fr") et ![](/images/PartDesign_SubtractiveCylinder.svg) [PartDesign Cylindre soustractif](/PartDesign_SubtractiveCylinder/fr "PartDesign SubtractiveCylinder/fr"). Un nombre quelconque d'étapes additives et soustractives sont des fonctionnalités utilisées pour créer un volume final.

## Remarques

Dans le sens général, "Feature" peut être n'importe quelle étape de modélisation utilisée pour créer une [Forme](/Shape/fr "Shape/fr") finale avec n'importe quel outil de n'importe quel [Atelier](/Workbenches/fr "Workbenches/fr").

* Par exemple, dans l'[Atelier Part](/Part_Workbench/fr "Part Workbench/fr"), dans le flux de travail de [géométrie solide constructive](/Constructive_solid_geometry/fr "Constructive solid geometry/fr"), "Feature" peut être n'importe quelle opération booléenne comme ![](/images/Part_Fuse.svg) [Part Union](/Part_Fuse/fr "Part Fuse/fr"), ![](/images/Part_Cut.svg) [Part Soustraction](/Part_Cut/fr "Part Cut/fr") ou ![](/images/Part_Common.svg) [Part Intersection](/Part_Common/fr "Part Common/fr").

Dans un sens plus spécifique, une "entité" est une étape de modélisation utilisée à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr").

* Par exemple, ![](/images/PartDesign_AdditiveCylinder.svg) [PartDesign Cylindre additif](/PartDesign_AdditiveCylinder/fr "PartDesign AdditiveCylinder/fr"), ![](/images/PartDesign_AdditiveLoft.svg) [PartDesign Lissage additif](/PartDesign_AdditiveLoft/fr "PartDesign AdditiveLoft/fr"), ![](/images/PartDesign_Pocket.svg) [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr"), ![](/images/PartDesign_SubtractiveCone.svg) [PartDesign Cône soustractif](/PartDesign_SubtractiveCone/fr "PartDesign SubtractiveCone/fr") etc... sont toutes des "Fonctionnalités" (Features).

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature/fr&oldid=812392>"