---
title: Sketcher Déplacer/dupliquer
---
|  |
| --- |
| Sketcher Dupliquer en matrice |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Déplacer/dupliquer en matrice |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| W |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_Translate.svg) Sketcher Déplacer/dupliquer déplace ou permet de créer des copies des éléments sélectionnés. Les copies sont réparties uniformément dans une ou deux directions.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

Pos-OVP = [Paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de position. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")  
Dim-OVP = Paramètres d'affichage des dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

### Déplacer une géometrie

1. Sélectionnez une ou plusieurs arêtes et/ou des [points](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr"). Les contraintes limitées aux éléments sélectionnés sont également traitées. Toutes les autres contraintes associées aux éléments seront supprimées.
2. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_Translate.svg) Déplacer/dupliquer en matrice.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse → ![](/images/Sketcher_Translate.svg) Déplacer/dupliquer en matrice** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_Translate.svg) Déplacer/dupliquer en matrice** du menu contextuel.
   * Utilisez le raccourci clavier : W.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. La section **Paramètres de la matrice** est ajoutée en haut de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
5. Choisissez le point de départ du vecteur de translation, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
6. Choisissez le point final du vecteur de translation, ou avec Dim-OVP : entrez la longueur et/ou l'angle du vecteur. L'angle est relatif à l'axe X de l'esquisse.
7. Les éléments sont déplacés. Aucune contrainte basée sur Pos-OVP ou Dim-OVP n'est ajoutée.

### Copier une géometrie

1. Sélectionnez une ou plusieurs arêtes et/ou des [objets Point](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr"). Les contraintes limitées aux éléments sélectionnés sont également traitées.
2. Lancer l'outil comme expliqué ci-dessus.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. La section **Paramètres de la matrice** est ajoutée en haut de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
5. Vous pouvez modifier le nombre de **copies** suivant le premier vecteur :
   * Entrez un nombre.
   * Appuyez sur la touche U pour augmenter le nombre.
   * Appuyez sur la touche J pour diminuer le nombre.
6. Vous pouvez également modifier le nombre de **rangées** suivant le deuxième vecteur :
   * Entrez un nombre.
   * Appuyez sur la touche R pour augmenter le nombre.
   * Appuyez sur la touche F pour diminuer le nombre.
7. Vous pouvez cocher la case **Appliquer des contraintes d'égalité** pour exclure les contraintes dimensionnelles de l'opération et appliquer à la place des ![](/images/Sketcher_ConstrainEqual.svg) [contraintes d'égalité](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") entre les objets originaux et leurs copies.
8. Choisissez le point de départ du premier vecteur, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y. Ce vecteur définit le décalage entre les copies.
9. Choisissez le point final du premier vecteur, ou avec Dim-OVP : entrez la longueur et/ou l'angle du vecteur. L'angle est relatif à l'axe X de l'esquisse.
10. S'il y a deux lignes ou plus : choisissez le point final du second vecteur, ou avec Dim-OVP : entrez la longueur et/ou l'angle du vecteur. L'angle est relatif à l'axe X de l'esquisse. Ce vecteur définit le décalage entre les rangées.
11. Les éléments sont copiés. Aucune contrainte basée sur Pos-OVP ou Dim-OVP n'est ajoutée.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Translate/fr&oldid=1565172>"