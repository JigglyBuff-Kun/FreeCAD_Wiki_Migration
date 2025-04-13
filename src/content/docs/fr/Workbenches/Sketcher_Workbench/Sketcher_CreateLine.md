---
title: Sketcher Ligne
---

|                                                                                |
| ------------------------------------------------------------------------------ |
| Sketcher Ligne                                                                 |
| Emplacement du menu                                                            |
| Esquisse → Géométries d'esquisse → Créer une ligne                             |
| Ateliers                                                                       |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")                     |
| Raccourci par défaut                                                           |
| G L                                                                            |
| Introduit dans la version                                                      |
| -                                                                              |
| Voir aussi                                                                     |
| [Sketcher Polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr") |
|                                                                                |

## Description

L'outil ![](/images/Sketcher_CreateLine.svg) Sketcher Ligne crée une ligne. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si le [mode de visibilité des paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") est activé, l'outil dispose de trois modes.

![](/images/Sketcher_LineExample1.png)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

Pos-OVP = [Paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de position. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")  
Dim-OVP = Paramètres d'affichage des dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

1. Il y a plusieurs façons de lancer l'outil :
   - Appuyez sur le bouton ![](/images/Sketcher_CreateLine.svg) Créer une ligne.
   - Sélectionnez l'option **Esquisse → Géométries d'esquisse → ![](/images/Sketcher_CreateLine.svg) Créer une ligne** du menu.
   - Utiliser le raccourci clavier : G puis L.
2. Le curseur se transforme en croix avec l'icône du mode d'outil actuel.
3. si le [mode de visibilité des paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") est activé, la section **Paramètres de la ligne** ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) est ajoutée en haut de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
4. Il est possible d'appuyer sur la touche M ou de choisir dans la liste déroulante de la section des paramètres pour changer le mode de l'outil :
   - ![](/images/Sketcher_CreateLineAngleLength.svg) **Point, largeur, angle** : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
     1. Choisissez le point de départ de la ligne, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez le point d'arrivée de la ligne, ou avec Dim-OVP : entrez la longueur et/ou l'angle de la ligne. L'angle est relatif à l'axe X du croquis.
   - ![](/images/Sketcher_CreateLineLengthWidth.svg) **Point, largeur, hauteur** : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
     1. Choisissez le point de départ de la ligne, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez le point d'arrivée de la ligne, ou avec Dim-OVP : entrez sa distance X et/ou Y par rapport au point de départ.
   - ![](/images/Sketcher_CreateLine.svg) **2 points** :
     1. Choisissez le point de départ de la ligne, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
     2. Choisissez le point d'arrivée de la ligne, ou avec Pos-OVP : entrez sa coordonnée X et/ou Y.
5. La ligne est créée et les contraintes Pos-OVP et Dim-OVP applicables sont ajoutées.
6. Si l'outil fonctionne en [mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
   1. Vous pouvez continuer à créer des lignes.
   2. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateLine/fr&oldid=1496230>"
