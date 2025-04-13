---
title: Sketcher Contour oblong
---
|  |
| --- |
| Sketcher Contour oblong |
| Emplacement du menu |
| Esquisse → Géométries d'esquisse → Créer un contour oblong |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G S |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Rainure en arc](/Sketcher_CreateArcSlot/fr "Sketcher CreateArcSlot/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_CreateSlot.svg) Sketcher Contour oblong crée une contour oblong, une polyligne fermée composée de deux demi-cercles reliés par deux lignes droites parallèles.

![](/images/SketcherCreateSlotExample.png)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

Pos-OVP = [Paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de position. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")  
Dim-OVP = Paramètres d'affichage des dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_CreateSlot.svg) Créer un contour oblong.
   * Sélectionnez l'option **Esquisse → Géométries d'esquisse → ![](/images/Sketcher_CreateSlot.svg) Créer un contour oblong** du menu.
   * Le raccourci clavier : G puis S.
2. Le curseur se transforme en croix avec l'icône de l'outil.
3. Choisissez le centre du premier demi-cercle, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
4. Choisissez le centre du deuxième demi-cercle, ou avec Dim-OVP : entrez la distance entre les centres et/ou l'angle du contour oblong. L'angle est relatif à l'axe X de l'esquisse.
5. Choisissez un point pour définir le rayon du contour oblong, ou avec Dim-OVP : entrez ce rayon.
6. Le contour oblong est créé et les contraintes applicables basées sur Pos-OVP et Dim-OVP sont ajoutées.
7. Si l'outil fonctionne en [mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
   1. Vous pouvez continuer à créer des emplacements.
   2. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

* version 0.21 et précédentes ([introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")) : maintenir Ctrl lors de la sélection du second centre contraindra le contour oblong à être dessiné horizontalement ou verticalement.
* [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'[aimantation angulaire](/Sketcher_Snap/fr "Sketcher Snap/fr") peut être utilisée pour contrôler l'angle du contour oblong.
* [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr") : un contour oblong peut également être contrainte horizontalement ou verticalement si l'option des [contraintes automatiques](/Sketcher_Workbench/fr#Contraintes_automatiques "Sketcher Workbench/fr") est activée.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateSlot/fr&oldid=1519025>"