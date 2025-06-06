---
title: Sketcher Rectangle
---

|                                                                                |
| ------------------------------------------------------------------------------ |
| Sketcher Rectangle                                                             |
| Emplacement du menu                                                            |
| Esquisse → Géométries d'esquisse → Créer un rectangle                          |
| Ateliers                                                                       |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")                     |
| Raccourci par défaut                                                           |
| G R                                                                            |
| Introduit dans la version                                                      |
| -                                                                              |
| Voir aussi                                                                     |
| [Sketcher Polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr") |
|                                                                                |

## Description

L'outil ![](/images/Sketcher_CreateRectangle.svg) Sketcher Rectangle crée un rectangle. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil dispose de quatre modes, dont deux peuvent également produire des parallélogrammes. Les coins arrondis et la création d'une copie décalée sont des fonctions optionnelles.

![](/images/SketcherCreateRectangleExample.png)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

Pos-OVP = [Paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de position. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")  
Dim-OVP = Paramètres d'affichage des dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

1. Il existe plusieurs façons de lancer l'outil :
   - Appuyez sur le bouton ![](/images/Sketcher_CreateRectangle.svg) Rectangle.
   - Sélectionnez l'option **Esquisse → Géométries d'esquisse → ![](/images/Sketcher_CreateRectangle.svg) Créer un rectangle** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_CreateRectangle.svg) Créer un rectangle** du menu contextuel.
   - Utilisez le raccourci clavier : G puis R.
2. Le curseur se transforme en croix avec l'icône du mode d'outil en cours.
3. La section **Paramètres du rectangle** ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) est ajoutée en haut de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
4. Vous pouvez appuyer sur la touche U ou cocher la case **Coins arrondis** pour appliquer des congés au rectangle. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
5. Vous pouvez appuyer sur la touche J ou cochez la case **Cadre** pour créer une seconde forme décalée. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
6. Vous pouvez appuyer sur la touche M ou sélectionnez dans la liste déroulante de la section des paramètres pour changer le mode de l'outil :
   - ![](/images/Sketcher_CreateRectangle.svg) **Coin, largeur, hauteur** :
     1. Choisissez le premier coin du rectangle, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez le coin opposé du rectangle, ou avec Dim-OVP : entrez la largeur et/ou la hauteur du rectangle.
   - ![](/images/Sketcher_CreateRectangle_Center.svg) **Centre, largeur, hauteur** : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
     1. Choisissez le centre du rectangle, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez un coin du rectangle, ou avec Dim-OVP : entrez la largeur et/ou la hauteur du rectangle.
   - ![](/images/Sketcher_CreateRectangle3Points.svg) **3 coins** : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
     1. Choisissez le premier coin du rectangle, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez le point d'extrémité du premier bord du rectangle, ou avec Dim-OVP : entrez la longueur et/ou l'angle du premier bord. L'angle est relatif à l'axe X de l'esquisse.
     3. Choisissez le troisième coin, opposé au premier, du rectangle, ou avec Dim-OVP : entrez la longueur et/ou l'angle du deuxième bord. L'angle est relatif au premier bord. Ce n'est que si cet angle est de 90° que le résultat sera un rectangle.
   - ![](/images/Sketcher_CreateRectangle3Points_Center.svg) **Centre, 2 coins** : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
     1. Choisir le centre du rectangle, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez le premier coin du rectangle, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     3. Choisissez le deuxième coin du rectangle, ou avec Dim-OVP : entrez la longueur et/ou l'angle de l'arête entre le premier et le deuxième coin. L'angle est relatif à l'autre arête reliée au premier coin. Le résultat ne sera un rectangle que si cet angle est de 90°.
7. Si **Coins arrondis** est sélectionné : choisissez un point pour définir le rayon du congé, ou avec Dim-OVP : saisissez-le.
8. Si **Cadre** est sélectionné : choisissez un point pour définir la distance de décalage, ou avec Dim-OVP : saisissez-le. Si le décalage est vers l'intérieur et plus grand que le rayon, la forme du décalage n'aura pas de filets.
9. La géométrie est créée et les contraintes Pos-OVP et Dim-OVP applicables sont ajoutées.
10. Si l'outil fonctionne en [mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
    1. Vous pouvez continuer à créer des rectangles.
    2. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateRectangle/fr&oldid=1496262>"
