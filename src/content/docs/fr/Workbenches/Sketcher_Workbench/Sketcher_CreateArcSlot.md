---
title: Sketcher Rainure en arc
---

|                                                                             |
| --------------------------------------------------------------------------- |
| Sketcher Rainure en arc                                                     |
| Emplacement du menu                                                         |
| Esquisse → Géometries d'esquisse → Créer une rainure en arc                 |
| Ateliers                                                                    |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")                  |
| Raccourci par défaut                                                        |
| G S 2                                                                       |
| Introduit dans la version                                                   |
| 1.0                                                                         |
| Voir aussi                                                                  |
| [Sketcher Contour oblong](/Sketcher_CreateSlot/fr "Sketcher CreateSlot/fr") |
|                                                                             |

## Description

L'outil ![](/images/Sketcher_CreateArcSlot.svg) Sketcher Rainure en arc crée une rainure en arc, une polyligne fermée composée de deux arcs concentriques parallèles fermés par deux demi-cercles ou deux lignes droites radiales.

![](/images/Sketcher_CreateArcSlot_Example.png)

Rainures en arc avec des extrémités en arc (à gauche) et des extrémités plates (à droite)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

Pos-OVP = [Paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de position. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")  
Dim-OVP = Paramètres d'affichage des dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

1. Il y a plusieurs façons de lancer l'outil :
   - Appuyez sur le bouton ![](/images/Sketcher_CreateArcSlot.svg) Créer une rainure en arc.
   - Sélectionnez l'option **Esquisse → Géometries d'esquisse → ![](/images/Sketcher_CreateArcSlot.svg) Créer une rainure en arc** du menu.
   - Le raccourci clavier : G puis S, puis 2.
2. Le curseur se transforme en croix avec l'icône de l'outil.
3. La section **Paramètres de la rainure en arc** est ajoutée en haut de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
4. Appuyez sur la touche M ou sélectionnez dans la liste déroulante de la section des paramètres pour changer le mode de l'outil :
   - ![](/images/Sketcher_CreateArcSlot.svg) **Extrémités arrondies** :
     1. Choisissez le centre de la rainure en l'arc, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez le centre du premier demi-cercle, qui définit également le rayon de la ligne centrale (virtuelle) de la rainure, ou avec Dim-OVP : entrez le rayon et/ou l'angle de départ de la rainure. L'angle est relatif à l'axe X de l'esquisse. Aucune contrainte n'est créée pour cet angle.
     3. Choisissez le centre du deuxième demi-cercle, ou avec Dim-OVP : entrez l'angle d'ouverture de l'arc de la ligne centrale.
     4. Choisissez un point pour définir le rayon des demi-cercles, ou avec Dim-OVP : entrez ce rayon.
   - ![](/images/Sketcher_CreateRectangleSlot.svg) **Extrémités plates** :
     1. Choisissez le centre de la rainure en arc, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez le point de départ du premier arc, cela définit également son rayon, ou avec Dim-OVP : entrez le rayon et/ou l'angle de départ du premier arc. L'angle est relatif à l'axe X de l'esquisse. Aucune contrainte n'est créée pour cet angle.
     3. Choisissez le point final du premier arc, ou avec Dim-OVP : entrez l'angle d'ouverture de l'arc.
     4. Choisissez un point pour définir la largeur de la fente. Ou avec Dim-OVP : entrez cette largeur.
5. La rainure est créée et les contraintes applicables basées sur Pos-OVP et Dim-OVP sont ajoutées.
6. Si l'outil fonctionne en [mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
   1. Vous pouvez continuer à créer des rainures en arc.
   2. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

- Les points choisis pour définir le rayon des demi-cercles ou le décalage des arcs intérieurs et extérieurs n'ont pas besoin de toucher la géométrie, la distance entre le curseur et le centre de la rainure contrôle en fait la valeur.
- En mode **Extrémités arrondies**, le premier rayon s'applique à un arc central virtuel, alors qu'il s'applique à l'un des arcs de contour en mode **Extrémités plates**.
- Si la valeur de la largeur en mode **Extrémités plates** est positive, l'arc contraint devient l'arc intérieur, pour une valeur négative, ce sera l'arc extérieur.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcSlot/fr&oldid=1496246>"
