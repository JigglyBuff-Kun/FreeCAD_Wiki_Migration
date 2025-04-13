---
title: Body
---
## Introduction

Dans FreeCAD, le mot "Body" est normalement utilisé pour faire référence à un objet [PartDesign Corps (Body)](/PartDesign_Body/fr "PartDesign Body/fr") (classe `PartDesign::Body`) défini par l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Il s'agit d'un objet conteneur qui peut contenir des [esquisses 2D](/Sketch/fr "Sketch/fr") et des [fonctions géométriques 3D](/PartDesign_Feature/fr "PartDesign Feature/fr") pour créer une forme solide.

Voir [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") pour plus d'informations sur ce type d'objet.

## Utilisation

1. Basculer vers l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
2. Presser ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr").
3. Presser ![](/images/PartDesign_NewSketch.svg) [PartDesign Nouvelle esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") pour créer une nouvelle [esquisse](/Sketch/fr "Sketch/fr").
4. Créer un dessin fermé, puis utilisez ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") pour extruder l'esquisse et créer un solide initial.
5. Ajouter d'autres esquisses et protrusions et utiliser d'autres outils de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") pour modifier et transformer le solide initial.

Au lieu d'utiliser des [esquisses](/Sketch/fr "Sketch/fr"), vous pouvez ajouter des [PartDesign fonctions](/PartDesign_Feature/fr "PartDesign Feature/fr") primitives, par exemple un ![](/images/PartDesign_AdditiveBox.svg) [PartDesign Cube additif](/PartDesign_AdditiveBox/fr "PartDesign AdditiveBox/fr"). Un nombre illimité de fonctions additives et soustractives peuvent être utilisées pour créer un volume final.

## Remarques

Un corps est requis lors de l'utilisation de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") dans une procédure de [modification d'élément](/Feature_editing/fr "Feature editing/fr").

Un corps n'est pas requis lors de l'utilisation de l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr"), car cet atelier utilise un flux de [géométrie constructive de solide](/Constructive_solid_geometry/fr "Constructive solid geometry/fr"), basé sur des [formes primitives](/Part_Primitives/fr "Part Primitives/fr") et des opérations booléennes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Body/fr&oldid=1350953>"