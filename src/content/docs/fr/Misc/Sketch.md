---
title: Esquisse
---
## Introduction

Dans FreeCAD, le mot "Sketch" est normalement utilisé pour désigner un [objet esquisse](/Sketcher_SketchObject/fr "Sketcher SketchObject/fr") (classe `Sketcher::Sketcher::SketchObject`) définie par l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). Il s'agit d'un dessin 2D qui utilise des contraintes mathématiques pour décrire avec précision la géométrie 2D.

Voir [Sketcher SketchObject](/Sketcher_SketchObject/fr "Sketcher SketchObject/fr") pour plus d'informations sur le type d'objet.

## Utilisation

Il existe deux manières courantes de créer une esquisse: directement dans l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), ou à partir de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

### Atelier Sketcher

1. Passez dans l'![](/images/Workbench_Sketcher.svg)[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").
2. Cliquez sur le bouton ![](/images/Sketcher_NewSketch.svg) [Créer une esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr").

### Atelier PartDesign

1. Passez dans l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench "PartDesign Workbench").
2. Cliquez sur le bouton ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr").
3. Cliquez sur le bouton ![](/images/PartDesign_NewSketch.svg) [PartDesign Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr").

Une fois l'édition de l'esquisse terminée, fermez-la pour quitter le mode d'édition. Double-cliquez dessus pour entrer à nouveau en mode édition.

## Remarques

Une esquisse est très couramment utilisée en conjonction avec l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") pour créer des solides par extrusion, en utilisant le bouton ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr").

Néanmoins, une esquisse peut toujours être créée à toute autre fin. Elle ne doit pas être liée à un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"). Par exemple, l'outil ![](/images/Arch_Window.svg) [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") de l'![](/images/Workbench_BIM.svg) [atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") utilise des esquisses pour définir les formes des fenêtres et des portes. De la même manière, elles peuvent être utilisées pour définir la forme de ![](/images/Arch_Wall.svg) [Arch Murs](/Arch_Wall/fr "Arch Wall/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketch/fr&oldid=1459362>"