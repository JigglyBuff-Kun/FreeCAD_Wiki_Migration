---
title: Sketcher Mise à l'échelle
---
|  |
| --- |
| Sketcher Mise à l'échelle |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Mettre à l'échelle |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| Z P S |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_Scale.svg) Sketcher Mise à l'échelle met à l'échelle ou peut créer des copies à l'échelle d'éléments sélectionnés.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

Pos-OVP = [Paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de position. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")  
Dim-OVP = Paramètres d'affichage des dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

1. Sélectionnez une ou plusieurs arêtes et/ou des [objets Point](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr"). Les contraintes limitées aux éléments sélectionnés sont également traitées. Si les éléments d'origine sont à l'échelle, toutes les autres contraintes qui leur sont associées seront supprimées.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_Scale.svg) Mettre à l'échelle.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse → ![](/images/Sketcher_Scale.svg) Mettre à l'échelle** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_Scale.svg) Mettre à l'échelle** dans le menu contextuel.
   * Utilisez le raccourci clavier : Z puis P, puis S.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. La section **Paramètres d'échelle** est ajoutée en haut de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
5. Vous pouvez appuyer sur la touche U ou cocher la case **Conserver les géométries d'origine** pour créer des copies à l'échelle des éléments sélectionnés.
6. Choisissez le point de base pour l'opération de mise à l'échelle, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
7. Choisissez le point final de la première ligne auxiliaire. Son angle et sa longueur sont arbitraires.
8. Choisissez le point final de la deuxième ligne auxiliaire. Son angle est également arbitraire. Sa longueur par rapport à la longueur de la première ligne auxiliaire définit le facteur d'échelle, ou avec Dim-OVP : entrez le facteur d'échelle.
9. Les éléments originaux sont mis à l'échelle ou des copies à l'échelle sont créées. Aucune contrainte basée sur Pos-OVP ou Dim-OVP n'est ajoutée.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Scale/fr&oldid=1496224>"