---
title: Sketcher Arc d'ellipse
---
|  |
| --- |
| Sketcher Arc d'ellipse |
| Emplacement du menu |
| Esquisse → Géométries d'esquisse → Créer un arc d'ellipse |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G E A |
| Introduit dans la version |
| 0.15 |
| Voir aussi |
| [Sketcher Ellipse par son centre](/Sketcher_CreateEllipseByCenter/fr "Sketcher CreateEllipseByCenter/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_CreateArcOfEllipse.svg) Sketcher Arc d'ellipse crée un arc d'ellipse.

![](/images/Sketcher_CreateArcOfEllipse_Example.png)

Arc d'ellipse (en blanc) avec géométrie interne (en jaune foncé)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_CreateArcOfEllipse.svg) Arc d'ellipse par son centre, son rayon, des extrémités.
   * Sélectionnez l'option **Esquisse → Géométries d'esquisse → ![](/images/Sketcher_CreateArcOfEllipse.svg) Créer un arc d'ellipse** du menu.
   * Utilisez le raccourci clavier : G puis E, puis A.
2. Le curseur se transforme en croix avec l'icône de l'outil.
3. Choisissez le centre de l'arc.
4. Choisissez un point d'extrémité de l'un des axes de l'arc, ce qui définit également l'un de ses rayons.
5. Choisissez le point de départ de l'arc, qui définit également l'autre rayon de l'arc.
6. Choisissez le point d'arrivée de l'arc.
7. L'arc d'ellipse est créé, y compris un ensemble de géométrie interne (grand axe, petit axe et deux foyers).
8. Si l'outil fonctionne en [mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
   1. Vous pouvez continuer à créer des arcs d'ellipse.
   2. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

* Les éléments de la géométrie interne peuvent être supprimés. Ils peuvent être recréés à tout moment avec [Sketcher Géométrie interne d'alignement](/Sketcher_RestoreInternalAlignmentGeometry/fr "Sketcher RestoreInternalAlignmentGeometry/fr").
* Une fois créé, les axes majeurs et mineurs d'un arc ou d'une ellipse sont figés et ne peuvent plus être redimensionnés. Ceci est une conséquence de la paramétrisation du solveur et du même comportement strict d'[OpenCASCADE](/OpenCASCADE/fr "OpenCASCADE/fr"). Un arc d'ellipse doit être tourné pour intervertir ses axes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcOfEllipse/fr&oldid=1415304>"