---
title: Sketcher Diviser
---
|  |
| --- |
| Sketcher Diviser |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Diviser une arête |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G Z |
| Introduit dans la version |
| 0.20 |
| Voir aussi |
| [Sketcher Ajuster](/Sketcher_Trimming/fr "Sketcher Trimming/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_Split.svg) Sketcher Diviser permet de diviser une arête. Si l'arête est une courbe fermée (c'est-à-dire un cercle, une ellipse ou une B-spline périodique), elle est convertie en courbe ouverte (respectivement un arc, un arc d'ellipse ou une B-spline non périodique).

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_Split.svg) Diviser une arête.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse → ![](/images/Sketcher_Split.svg) Diviser une arête** du menu.
   * Utilisez le raccourci clavier : G puis Z.
2. S'il y a une précédente sélection, elle est effacée. L'outil n'accepte pas de présélection.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Cliquez sur une arête à l'endroit où elle doit être divisée.
5. Si l'arête d'origine est une ligne ou une courbe ouverte, deux nouvelles arêtes sont créées et reliées par une [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr"). Pour les courbes fermées, une nouvelle courbe ouverte est créée, le nouveau point ne reçoit alors pas de contrainte de coïncidence. Les contraintes existantes applicables sont transférées à la/aux nouvelle(s) arête(s). Voir [Remarques](#Remarques).
6. Cet outil fonctionne toujours en mode continu : il est possible de continuer à diviser les arêtes.
7. Pour terminer, cliquez dans une zone vide de la [vue 3D](/3D_view/fr "3D view/fr"), cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

* Une contrainte de [coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") est appliquée aux centres des nouveaux arcs.
* Les contraintes de [rayon](/Sketcher_ConstrainRadius/fr "Sketcher ConstrainRadius/fr") et de [diamètre](/Sketcher_ConstrainDiameter/fr "Sketcher ConstrainDiameter/fr") sont copiées sur les nouveaux arcs (ce qui entraîne une redondance).
* Les contraintes de coïncidence et les contraintes [Point sur l'objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") sont transférées sur la nouvelle arête la plus proche.
* Les contraintes [horizontales](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr") et [verticales](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr") entre les points sont transférées vers la nouvelle arête la plus proche.
* Les contraintes horizontales et verticales attachées aux lignes sont copiées sur les nouveaux segments de ligne.
* Les contraintes [parallèles](/Sketcher_ConstrainParallel/fr "Sketcher ConstrainParallel/fr") et [perpendiculaire](/Sketcher_ConstrainPerpendicular/fr "Sketcher ConstrainPerpendicular/fr") sont copiées sur les nouveaux segments de ligne, pour les nouveaux arcs, elles sont seulement copiées sur les plus proches.
* Les contraintes de [distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr"), [distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") et [distance](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr") sont transférées vers la nouvelle arête la plus proche.
* Les contraintes d'[angle](/Sketcher_ConstrainAngle/fr "Sketcher ConstrainAngle/fr"), de [symétrie](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr") et de [blocage](/Sketcher_ConstrainBlock/fr "Sketcher ConstrainBlock/fr") ne sont actuellement pas transférées.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Split/fr&oldid=1415426>"