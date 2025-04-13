---
title: Datum
---
## Introduction

Dans FreeCAD, le mot "Datum" est normalement utilisé pour faire référence à la géométrie auxiliaire dans l'[Atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Ces éléments géométriques ne feront pas partie de la [Shape](/Shape/fr "Shape/fr") (forme) finale du [Body](/Body/fr "Body/fr") (corps) mais peuvent être utilisés comme références et supports pour les [esquisses](/Sketch/fr "Sketch/fr") et d'autres types de [features](/Feature/fr "Feature/fr") (fonctions).

Les éléments suivants correspondent aux éléments dérivés de la classe `Part::Datum`, elle-même dérivée de [Part Feature](/Part_Feature/fr "Part Feature/fr") :

* [PartDesign Point](/PartDesign_Point/fr "PartDesign Point/fr")
* [PartDesign Ligne](/PartDesign_Line/fr "PartDesign Line/fr")
* [PartDesign Plan](/PartDesign_Plane/fr "PartDesign Plane/fr")
* [PartDesign Système de coordonnées](/PartDesign_CoordinateSystem/fr "PartDesign CoordinateSystem/fr")

Les éléments suivants sont dérivés directement de [Part Feature](/Part_Feature/fr "Part Feature/fr") :

* [PartDesign Forme liée](/PartDesign_ShapeBinder "PartDesign ShapeBinder")
* [PartDesign Sous forme liée](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder")

## Utilisation

1. Basculez vers l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
2. Appuyez sur ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr").
3. Sélectionnez l'origine du corps et rendez-la visible en appuyant sur la barre Espace de votre clavier.
4. Appuyez sur ![](/images/PartDesign_Plane.svg) [PartDesign Plan](/PartDesign_Plane/fr "PartDesign Plane/fr") pour ouvrir le plan [Panneau des tâches](/Task_Panel/fr "Task Panel/fr").
5. Dans la [vue 3D](/3D_view/fr "3D view/fr"), cliquez sur l'un des plans standards, par exemple le plan XY. Appuyez ensuite sur OK pour fermer le panneau des tâches.
6. Maintenant, dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez le nouveau plan de référence, puis appuyez sur ![](/images/PartDesign_NewSketch.svg) [PartDesign Nouvelle esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr").
7. Créez une polyligne fermée, puis utilisez ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") pour extruder l'esquisse et créer un premier solide.

Vous pouvez maintenant déplacer et faire pivoter le plan de référence comme vous le souhaitez en modifiant ses propriétés dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). L'esquisse et la protrusion suivront le nouveau [Placement](/Placement/fr "Placement/fr").

Vous pouvez ajouter d'autres types de références à utiliser avec d'autres esquisses et fonctions.

## Remarques

Lors de leur apparition dans la v0.17, les objets de référence étaient destinés à être utilisés dans [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"). Cependant, comme ce sont des objets utiles de "référence" avec différentes méthodes d'[ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr"), il a été proposé qu'ils soient disponibles en dehors de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). De cette façon, ils seront utilisables dans tous les ateliers comme support de géométrie, notamment dans le cadre de la création d'[assemblages](/Assembly/fr "Assembly/fr").

* [Create and display local coordinate system](https://forum.freecadweb.org/viewtopic.php?f=10&t=2604)
* [Datum objects in App::Part](https://forum.freecadweb.org/viewtopic.php?f=22&t=33654)
* [Structure toolbar and datums](https://forum.freecadweb.org/viewtopic.php?t=42759)
* [Local CS cannot be used in Part Wb?](https://forum.freecadweb.org/viewtopic.php?f=3&t=42960)

Retrieved from "<http://wiki.freecad.org/index.php?title=Datum/fr&oldid=1225662>"