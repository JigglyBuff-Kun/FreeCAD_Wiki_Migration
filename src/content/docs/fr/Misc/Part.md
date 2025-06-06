---
title: Part
---
## Introduction

Dans FreeCAD, le mot "Part" est normalement utilisé pour faire référence à une classe ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") (`App::Part`), un type d'objet conteneur défini par le système de base. Cette pièce permet de gérer la position des formes 3D afin de créer des assemblages mécaniques.

Voir ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") pour plus d'informations sur ce type d'objet.

## Comment l'utiliser

L'outil Std Part n'est pas défini par un atelier particulier, mais par le système de base, il se trouve donc dans la **structure toolbar**, qui est disponible dans tous les [ateliers](/Workbenches/fr "Workbenches/fr").

1. Appuyez sur le bouton ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr"). Une pièce vide est créée et devient automatiquement *[active](/Std_Part/fr#Active_status "Std Part/fr")*.

## Remarques

Dans un usage informel, une "pièce" peut être n'importe quelle figure géométrique visible dans la [vue 3D](/3D_view/fr "3D view/fr"), et son concept peut donc être confondu avec celui de "[Corps](/Body/fr "Body/fr")" ou "[Assemblage](/Assembly/fr "Assembly/fr")".

Cependant, lorsque plus de précision est requise, la distinction doit être faite.

* Un "[corps](/Body/fr "Body/fr")" est utilisé pour des éléments contigus uniques, généralement créés avec les ateliers [Part](/Part_Workbench/fr "Part Workbench/fr") ou [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
* Une "pièce" est utilisée pour regrouper un seul "corps", ou plusieurs d'entre eux pour former un assemblage.
* Un "assemblage" est une collection de "pièces" disposées d'une manière ou d'une autre, manuellement ou à l'aide d'un atelier d'assemblage.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part/fr&oldid=1102656>"