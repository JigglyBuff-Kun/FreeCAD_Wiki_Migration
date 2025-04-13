---
title: TechDraw Vue d'un objet Draft
---
|  |
| --- |
| TechDraw Vue d'un objet Draft |
| Emplacement du menu |
| TechDraw → Vues des autres ateliers → Insérer un objet de l'atelier Draft |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr"), [Draft](/Draft_Workbench/fr "Draft Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [TechDraw Vue d'un objet Arch](/TechDraw_ArchView/fr "TechDraw ArchView/fr") |
|  |

## Description

L'outil **TechDraw Vue d'un objet Draft** insère une vue d'un objet basé sur [Part](/Part_Workbench/fr "Part Workbench/fr") ou Groupe sélectionné dans une page de dessin. Contrairement à l'outil ![](/images/TechDraw_View.svg) [TechDraw Vue](/TechDraw_View/fr "TechDraw View/fr"), les vues créées avec cet outil sont gérées par ![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") et spécialement conçues pour montrer des objets 2D. Voir [Remarques](#Remarques).

![](/images/TechDraw_DraftView_example.png)

Éléments Draft tels que des cercles et des réseaux importés dans une page de dessin TechDraw

## Utilisation

1. Faites éventuellement pivoter la [vue 3D](/3D_view/fr "3D view/fr"). La direction de la caméra dans la [vue 3D](/3D_view/fr "3D view/fr") détermine la valeur initiale de la propriété Données**Direction** de la vue.
2. Sélectionnez un ou plusieurs objets dans la [vue 3D](/3D_view/fr "3D view/fr") ou [vue en arborescence](/Tree_view/fr "Tree view/fr"). Une vue distincte sera créée pour chaque objet.
3. S'il y a plusieurs pages de dessin dans le document : vous pouvez ajouter la page souhaitée à la sélection en la sélectionnant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
4. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/TechDraw_DraftView.svg) Insérer un objet de l'atelier Draft.
   * Sélectionnez l'option **TechDraw → Vues des autres ateliers → ![](/images/TechDraw_DraftView.svg) Insérer un objet de l'atelier Draft** du menu.
5. S'il y a plusieurs pages de dessin dans le document et que vous n'avez pas encore sélectionné de page, la fenêtre de dialogue **Sélecteur de pages** s'ouvre :
   1. Sélectionnez la page désirée.
   2. Appuyez sur le bouton OK.

## Options

* La création d'une vue d'un objet Draft d'une coupe traitera de manière récursive tous les objets trouvés dans cette coupe. La vue est mise à jour automatiquement lorsque le contenu de la coupe change.
* Il n'y a pas de suppression de ligne cachée. Chaque face trouvée dans le ou les objets manipulés sera simplement projetée le long du vecteur Direction, aucune action spécifique n'est entreprise lorsque les faces se chevauchent.
* La vue d'un objet Draft prend également en charge tous les objets Draft qui ne sont pas basés Part, tels que les cotes et les textes.
* La couleur, la largeur et le motif des lignes peuvent être spécifiés dans les propriétés. Les motifs de ligne peuvent être affinés en donnant directement une valeur [stroke-dasharray](https://www.w3.org/TR/SVG/painting.html#StrokeProperties), telle que 3,5.
* Les surfaces projetées sont remplies de la couleur de la surface.

## Remarques

La vue d'un objet Draft est affiché dans l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr"). TechDraw a donc un contrôle limité sur son apparence. Vous devrez peut-être apporter des modifications dans Draft pour obtenir la représentation souhaitée.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Une vue d'un objet Draft, en fait un objet `TechDraw::DrawViewDraft`, possède les [propriétés](/TechDraw_View/fr#Propriétés_Vue_de_Part "TechDraw View/fr") communes à tous les types de vues. Elle possède également les propriétés supplémentaires suivantes :

### Données

Drawing view

* Données**Source** (`Link`) : l'objet Draft à afficher.
* Données**Line Width** (`Float`) : largeur des lignes, indépendamment de l'échelle.
* Données**Font Size** (`Float`) : taille de tous les textes apparaissant dans cette vue (textes et dimensions).
* Données**Direction** (`Vector`) : direction de projection à utiliser.
* Données**Color** (`Color`) : couleur des lignes.
* Données**Line Style** (`String`) : style de ligne à utiliser pour cette vue. Peut être `Solid`, `Dashed`, `Dashdot`, `Dot` ou un modèle de ligne SVG comme `0.20,0.20`.
* Données**Line Spacing** (`Float`) : espacement entre les lignes à utiliser pour les textes multilignes.
* Données**Override Style** (`Bool`) : si `true`, la couleur, la largeur et le style des lignes de cette vue remplaceront ceux de l'objet rendu.

Drawing view

* Données (Hidden)**Symbol** (`String`) : code SVG définissant ce symbole.
* Données**Editable Texts** (`StringList`) : valeurs de substitution pour les chaînes modifiables de ce symbole.
* Données**Owner** (`Link`) : fonction à laquelle ce symbole est rattaché. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Vue d'un objet Draft peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide des fonctions suivantes:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewDraft','TestDraft')
dv.Source = myDraftbject
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_DraftView/fr&oldid=1496155>"