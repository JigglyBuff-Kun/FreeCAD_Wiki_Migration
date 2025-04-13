---
title: Sketcher Cercle par centre
---

|                                                                   |
| ----------------------------------------------------------------- |
| Sketcher Cercle par centre                                        |
| Emplacement du menu                                               |
| Esquisse → Géometries d'esquisse → Créer un cercle par son centre |
| Ateliers                                                          |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")        |
| Raccourci par défaut                                              |
| G C                                                               |
| Introduit dans la version                                         |
| -                                                                 |
| Voir aussi                                                        |
| [Sketcher Arc](/Sketcher_CreateArc/fr "Sketcher CreateArc/fr")    |
|                                                                   |

## Description

L'outil ![](/images/Sketcher_CreateCircle.svg) Sketcher par centre crée un cercle par son centre et un point de la circonférence. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : ou bien par trois points de la circonférence.

![](/images/Sketcher_CircleExample1.png)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

Pos-OVP = [Paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de position. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")  
Dim-OVP = Paramètres d'affichage des dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

1. Il y a plusieurs façons de lancer l'outil :
   - Appuyez sur le bouton ![](/images/Sketcher_CreateCircle.svg) Cercle par son centre et un point de la circonférence.
   - Sélectionnez l'option **Esquisse → Géometries d'esquisse → ![](/images/Sketcher_CreateCircle.svg) Créer un cercle par son centre** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_CreateCircle.svg) Créer un cercle par son centre** du menu contextuel.
   - Utilisez le raccourci clavier : G puis C.
2. Le curseur se transforme en croix avec l'icône du mode d'outil courant.
3. La section **Paramètres du cercle** ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) est ajoutée en haut de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
4. Il est possible d'appuyer sur la touche M ou de choisir dans la liste déroulante de la section des paramètres pour changer le mode de l'outil :
   - ![](/images/Sketcher_CreateCircle.svg) **Centre** :
     1. Choisissez le centre du cercle, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez un point pour définir le rayon du cercle, ou avec Dim-OVP : entrez ce rayon.
   - ![](/images/Sketcher_Create3PointCircle.svg) **Cercle par 3 points du bord** : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
     1. Choisissez trois points pour définir le cercle, ou avec Pos-OVP : entrez leurs coordonnées X et/ou Y. Aucune contrainte n'est créée pour ces points.
5. Le cercle est créé et les contraintes applicables basées sur Pos-OVP et Dim-OVP sont ajoutées.
6. Si l'outil fonctionne en [mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
   1. Vous pouvez continuer à créer des cercles.
   2. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateCircle/fr&oldid=1496228>"
