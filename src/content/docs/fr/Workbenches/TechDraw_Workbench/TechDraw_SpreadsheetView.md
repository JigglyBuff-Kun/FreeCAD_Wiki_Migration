---
title: TechDraw Vue d'un objet Spreadsheet
---
|  |
| --- |
| TechDraw Vue d'un objet Spreadsheet |
| Emplacement du menu |
| TechDraw → Vues des autres ateliers → Insérer une vue de l'atelier Spreadsheet |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr"), [Spreadsheet](/Spreadsheet_Workbench/fr "Spreadsheet Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **TechDraw Vue d'un objet Spreadsheet** vous permet de placer une vue d'une [feuille de calcul](/Spreadsheet_Workbench/fr "Spreadsheet Workbench/fr") sélectionnée dans une [page](/TechDraw_Workbench/fr "TechDraw Workbench/fr").

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil [TechDraw Vue](/TechDraw_View/fr "TechDraw View/fr") peut également créer une vue d'un objet de Spreadsheet.

![](/images/TechDraw_Spreadsheetview.png)

Elément de Spreadsheet inséré dans la page de dessin TechDraw

## Utilisation

1. Sélectionnez un objet Spreadsheet dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Si le document contient plusieurs pages de dessin : ajoutez la page souhaitée à la sélection en la sélectionnant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Sélectionnez l'option **TechDraw → Vues des autres ateliers → ![](/images/TechDraw_SpreadsheetView.svg) Insérer une vue de l'atelier Spreadsheet** du menu.
4. S'il y a plusieurs pages de dessin dans le document, et si aucune page n'est affichée dans la [zone de vue principale](/Main_view_area/fr "Main view area/fr") et que vous n'avez pas encore sélectionné de page, la fenêtre de dialogue **Sélecteur de pages** s'ouvre :
   1. Sélectionnez la page souhaitée.
   2. Appuyez sur le bouton OK.
5. Une vue de Spreadsheet est insérée.
6. Ajustez la plage de cellules de la vue en modifiant ses propriétés Données**Cell Start** et Données**Cell End**.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Une vue d'un objet Spreadsheet, en fait un objet `TechDraw::DrawViewSpreadsheet`, possède les [propriétés](/TechDraw_View/fr#Propriétés_Vue_de_Part "TechDraw View/fr") communes à tous les types de vues. Elle possède également les propriétés supplémentaires suivantes :

### Données

Drawing view

* Données (Hidden)**Symbol** (`String`) : code SVG définissant ce symbole.
* Données**Editable Texts** (`StringList`) : valeurs de substitution pour les chaînes modifiables de ce symbole.
* Données**Owner** (`Link`) : fonction à laquelle ce symbole est rattaché. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Spreadsheet

* Données**Source** (`Link`) : feuille de calcul à ajouter à la page.
* Données**Cell Start** (`String`) : cellule supérieure gauche de la plage de cellules à inclure dans cette vue.
* Données**Cell End** (`String`) : cellule inférieure droite de la plage de cellules à inclure dans cette vue.
* Données**Font** (`Font`) : nom de la police utilisée pour les textes.
* Données**Text Color** (`Color`) : couleur des textes et des lignes qui n'ont pas de couleur spécifiée dans le tableur.
* Données**Text Size** (`Float`) : taille de la police des textes.
* Données**Line Width** (`Float`) : largeur des bordures des cellules.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_SpreadsheetView/fr&oldid=1496106>"