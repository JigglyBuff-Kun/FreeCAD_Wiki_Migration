---
title: Sketcher Pivoter/dupliquer
---
|  |
| --- |
| Sketcher Pivoter/dupliquer |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Pivoter/dupliquer |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| Z P |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_Rotate.svg) Sketcher Pivoter/dupliquer fait pivoter ou permet de créer des copies pivotées des éléments sélectionnés. Les copies sont réparties uniformément le long de l'angle de rotation.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

Pos-OVP = [Paramètres d'affichage](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") de position. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")  
Dim-OVP = Paramètres d'affichage des dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

1. Sélectionnez une ou plusieurs arêtes et/ou [objets Point](/Sketcher_CreatePoint "Sketcher CreatePoint"). Les contraintes, à l'exception des contraintes [horizontales](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr") et [verticales](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr"), limitées aux éléments sélectionnés sont également traitées. Si les éléments originaux sont tournés, toutes les autres contraintes qui leur sont associées seront supprimées.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_Rotate.svg) Pivoter/dupliquer.
   * Sélectionnez l'option **Sketcher → Outils Sketcher → ![](/images/Sketcher_Rotate.svg) Pivoter/dupliquer** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_Rotate.svg) Pivoter/dupliquer** du menu contextuel.
   * Raccourci clavier : Z puis P.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. La section **Paramètres de rotation** est ajoutée en haut de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
5. Vous pouvez modifier le nombre de **copies** (si le nombre est égal à zéro, les éléments d'origine sont pivotés) :
   * Entrez un nombre.
   * Appuyez sur la touche U pour augmenter le nombre.
   * Appuyez sur la touche J pour diminuer le nombre.
6. Vous pouvez cocher la case **Appliquer des contraintes d'égalité** pour exclure les contraintes dimensionnelles de l'opération, et appliquer à la place des ![](/images/Sketcher_ConstrainEqual.svg) [contraintes d'égalité](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr") entre les objets originaux et leurs copies.
7. Choisissez le centre de rotation, ou avec Pos-OVP : entrez ses coordonnées X et/ou Y.
8. Choisissez un point pour définir l'angle de référence, ou avec Dim-OVP : saisissez-le.
9. Choisissez un point pour définir l'angle de rotation, ou avec Dim-OVP : saisissez-le.
10. Les éléments originaux sont pivotés ou des copies pivotées sont créées. Aucune contrainte basée sur Pos-OVP ou Dim-OVP n'est ajoutée.

## Remarques

* Il peut être conseillé d'utiliser [Sketcher Supprimer l'alignement des axes](/Sketcher_RemoveAxesAlignment/fr "Sketcher RemoveAxesAlignment/fr") avant d'utiliser cet outil.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Rotate/fr&oldid=1538316>"