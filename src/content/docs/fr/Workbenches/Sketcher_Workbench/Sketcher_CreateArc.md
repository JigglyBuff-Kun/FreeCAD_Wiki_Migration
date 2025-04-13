---
title: Sketcher Arc par centre
---

|                                                                         |
| ----------------------------------------------------------------------- |
| Sketcher Arc par centre                                                 |
| Emplacement du menu                                                     |
| Esquisse → Géométries d'esquisse → Créer un arc à partir du centre      |
| Ateliers                                                                |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")              |
| Raccourci par défaut                                                    |
| G A                                                                     |
| Introduit dans la version                                               |
| -                                                                       |
| Voir aussi                                                              |
| [Sketcher Cercle](/Sketcher_CreateCircle/fr "Sketcher CreateCircle/fr") |
|                                                                         |

## Description

L'outil ![](/images/Sketcher_CreateArc.svg) Sketcher Arc par centre crée un arc par son centre et ses extrémités. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : ou par ses extrémités et un point de l'arc.

![](/images/Sketcher_ArcExample3.png)

Arc créé en mode Centre avec des contraintes appliquées automatiquement, définies par la saisie de tous les paramètres de la vue.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

Pos-OVP = [Paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de position. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")  
Dim-OVP = Paramètres d'affichage des dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

1. Il y a plusieurs façons de lancer l'outil :
   - Appuyez sur le bouton ![](/images/Sketcher_CreateArc.svg) Arc par son centre et ses extrémités.
   - Sélectionnez l'option **Sketcher → Sketcher geometries → ![](/images/Sketcher_CreateArc.svg) Créer un arc à partir du centre** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_CreateArc.svg) Créer un arc à partir du centre** du menu contextuel.
   - Utilisez le raccourci clavier : G puis A.
2. Le curseur se transforme en croix avec l'icône du mode d'outil courant.
3. La section **Paramètres de l'arc** ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) est ajoutée en haut de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
4. Il est possible d'appuyer sur la touche M ou de choisir dans la liste déroulante de la section des paramètres pour changer le mode de l'outil :
   - ![](/images/Sketcher_CreateArc.svg) **Centre** :
     1. Choisissez le centre de l'arc, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez le point de départ de l'arc, cela définit également le rayon, ou avec Dim-OVP : entrez le rayon et/ou l'angle de départ de l'arc. L'angle est relatif à l'axe X de l'esquisse. Aucune contrainte n'est créée pour cet angle.
     3. Choisissez le point final de l'arc, ou avec Dim-OVP : entrez l'angle d'ouverture de l'arc.
   - ![](/images/Sketcher_Create3PointArc.svg) **Cercle par 3 points du bord** : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
     1. Choisissez les points de départ et d'arrivée de l'arc, ou avec Pos-OVP : entrez leurs coordonnées X et/ou Y.
     2. Choisissez un autre point pour définir le rayon, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y. Aucune contrainte n'est créée pour ce point.
5. L'arc est créé et les contraintes Pos-OVP et Dim-OVP applicables sont ajoutées.
6. Si l'outil fonctionne en [mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
   1. Vous pouvez continuer à créer des arcs.
   2. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArc/fr&oldid=1496240>"
