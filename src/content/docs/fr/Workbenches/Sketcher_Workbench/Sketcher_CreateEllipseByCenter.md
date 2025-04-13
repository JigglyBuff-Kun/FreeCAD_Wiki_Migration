---
title: Sketcher Ellipse par centre
---

|                                                                                            |
| ------------------------------------------------------------------------------------------ |
| Sketcher Ellipse par centre                                                                |
| Emplacement du menu                                                                        |
| Esquisse → Géométries d'esquisse → Créer une ellipse par son centre                        |
| Ateliers                                                                                   |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")                                 |
| Raccourci par défaut                                                                       |
| G E E                                                                                      |
| Introduit dans la version                                                                  |
| 0.15                                                                                       |
| Voir aussi                                                                                 |
| [Sketcher Arc d'ellipse](/Sketcher_CreateArcOfEllipse/fr "Sketcher CreateArcOfEllipse/fr") |
|                                                                                            |

## Description

L'outil ![](/images/Sketcher_CreateEllipseByCenter.svg) Sketcher Ellipse par centre crée une ellipse par son centre, une extrémité de l'un de ses axes et un point de l'ellipse. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : ou bien par les deux extrémités d'un de ses axes et un point de l'ellipse.

![](/images/Sketcher_CreateEllipseByCenter_Example.png)

Ellipse (en blanc) avec géométrie interne (en jaune foncé)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

Pos-OVP = [Paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de position. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")  
Dim-OVP = Paramètres d'affichage des dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

1. Il y a plusieurs façons de lancer l'outil :
   - Appuyez sur le bouton ![](/images/Sketcher_CreateEllipseByCenter.svg) Ellipse par son centre, un de ses rayons, un point de la courbe.
   - Sélectionnez l'option **Esquisse → Géométries d'esquisse → ![](/images/Sketcher_CreateEllipseByCenter.svg) Créer une ellipse par le centre** du menu.
   - Utilisez le raccourci clavier : G puis E, puis E.
2. Le curseur se transforme en croix avec l'icône du mode d'outil en cours.
3. La section **Paramètres de l'ellipse** ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) est ajoutée en haut de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
4. Il est possible d'appuyer sur la touche M ou d'effectuer une sélection dans la liste déroulante de la section des paramètres pour changer le mode de l'outil :
   - ![](/images/Sketcher_CreateEllipseByCenter.svg) **Centre** :
     1. Choisissez le centre de l'ellipse, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez un point d'extrémité de l'un des axes de l'ellipse, ce qui définit également l'un de ses rayons, ou avec Dim-OVP : entrez ce rayon et/ou l'angle de cet axe.
     3. Choisissez un point pour définir l'autre rayon de l'ellipse, ou avec Dim-OVP : entrez ce rayon.
   - ![](/images/Sketcher_CreateEllipseBy3Points.svg) **Extrémités de l'axe** : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
     1. Choisissez les extrémités de l'un des axes de l'ellipse, cela définit également l'un de ses rayons, ou avec Pos-OVP : entrez leurs coordonnées X et/ou Y. Aucune contrainte n'est créée pour ces points. Aucune contrainte n'est créée pour ces points.
     2. Choisissez un point pour définir l'autre rayon de l'ellipse, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y. Aucune contrainte n'est créée pour ce point.
5. L'ellipse est créée, y compris un ensemble de géométrie interne (grand axe, petit axe et deux foyers), et les contraintes Pos-OVP et Dim-OVP applicables sont ajoutées.
6. Si l'outil fonctionne en [mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
   1. Vous pouvez continuer à créer des ellipses.
   2. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

- Les éléments de la géométrie interne peuvent être supprimés. Ils peuvent être recréés à tout moment avec [Sketcher Géométrie interne d'alignement](/Sketcher_RestoreInternalAlignmentGeometry/fr "Sketcher RestoreInternalAlignmentGeometry/fr").
- Une fois créée, les axes majeur et mineur d'une ellipse sont figés et ne peuvent pas être intervertis par redimensionnement. Ceci est une conséquence de la paramétrisation du solveur et du même comportement strict de [OpenCASCADE](/OpenCASCADE/fr "OpenCASCADE/fr"). Une ellipse doit être pivotée pour intervertir ses axes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateEllipseByCenter/fr&oldid=1496242>"
