---
title: TechDraw Vue d'un objet Arch
---
|  |
| --- |
| TechDraw Vue d'un objet Arch |
| Emplacement du menu |
| TechDraw → Vues des autres ateliers → Insérer un objet de l'atelier BIM |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") |
|  |

## Description

L'outil **TechDraw Vue d'un objet Arch** insère une vue d'un objet de l'atelier Arch, un ![](/images/Arch_SectionPlane.svg) [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") dans une [TechDraw Page standard](/TechDraw_PageDefault/fr "TechDraw PageDefault/fr").

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil [TechDraw Vue](/TechDraw_View/fr "TechDraw View/fr") peut également créer une vue d'un objet de Arch.

![](/images/TechDraw_Arch_example.jpg)

## Utilisation

1. Sélectionnez un plan de coupe Arch dans la [vue 3D](/3D_view/fr "3D view/fr") ou la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. S'il y a plusieurs pages de dessin dans le document : ajoutez la page souhaitée à la sélection en la sélectionnant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Sélectionnez l'option **TechDraw → Vues des autres ateliers → ![](/images/TechDraw_ArchView.svg) Insérer un objet de l'atelier BIM**  du menu.
4. S'il y a plusieurs pages de dessin dans le document, et si aucune page n'est affichée dans la [zone de vue principale](/Main_view_area/fr "Main view area/fr") et que vous n'avez pas encore sélectionné de page, la fenêtre de dialogue **Sélecteur de pages** s'ouvre :
   1. Sélectionnez la page désirée.
   2. Appuyez sur le bouton OK.

## Options

* La vue d'un objet Arch est générée par l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr").
* [Draft Aimantation Dimensions](/Draft_Snap_Dimensions/fr "Draft Snap Dimensions/fr"), [Draft Texte](/Draft_Text/fr "Draft Text/fr") et tout autre objet 2D (Sketch ou Draft) pris en compte par le plan de coupe est généré "tel quel" (pas d'intersection ni de lignes cachées) par dessus la géométrie solide.
* Le volume d'un [Arch Espace](/Arch_Space/fr "Arch Space/fr") n'est pas généré, seule l'étiquette sera crée.
* Les lignes de coupe, les lignes projetées (si la propriété Show Hidden est définie à True) et les lignes 2D ci-dessus peuvent être générées avec différentes largeurs de ligne. Cela peut être configuré dans les préférences Arch.
* La vue d'un objet Arch a deux modes de rendu :
  + Filaire qui utilise les algorithmes OpenCasCade de l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") et est rapide et ne produit que des lignes (pas de remplissage de face possible)
  + Solide qui est basé sur l'[algorithme du peintre](https://fr.wikipedia.org/wiki/Algorithme_du_peintre) et est capable de rendre des surfaces remplies avec leur couleur de forme. Cependant, il est beaucoup plus lent et peut échouer dans de nombreuses situations.

:   L'image ci-dessous illustre la différence entre les deux modes de rendu:

:   ![](/images/TechDraw_Arch_rendering.jpg)

* Seule la ligne de base des [Arch Conduites](/Arch_Pipe/fr "Arch Pipe/fr") est générée, pas le volume total des tubes :

:   ![](/images/TechDraw_Arch_piping.jpg)

## Remarques

La vue d'un objet Arch est générée dans l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") et donc TechDraw a un contrôle limité sur son apparence. Vous devrez peut-être apporter des modifications dans Arch pour obtenir la représentation souhaitée.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Une vue d'un objet Arch, en fait un objet `TechDraw::DrawViewArch`, possède les [propriétés](/TechDraw_View/fr#Propriétés_Vue_de_Part "TechDraw View/fr") communes à tous les types de vues. Elle possède également les propriétés supplémentaires suivantes :

### Données

Arch view

* Données**Source** (`Link`) : l'objet plan de coupe à afficher.
* Données**All On** (`Bool`) : si les objets cachés doivent être affichés ou non. Si `false`, seuls les objets visibles dans la vue 3D sont rendus.
* Données**Render Mode** (`Enumeration`) : le mode de rendu à utiliser, `Solid` ou `Wireframe`.
* Données**Fill Spaces** (`Bool`) : si `true`, les espaces d'arc sont affichés sous forme de zone colorée.
* Données**Show Hidden** (`Bool`) : si la géométrie cachée (la partie de la géométrie qui se trouve derrière le plan de coupe) est affichée ou non. Elle sera rendue en ligne pointillée, ce qui peut être configuré dans les préférences d'Arch.
* Données**Show Fill** (`Bool`) : si les zones coupées doivent être remplies avec une couleur grise ou non.
* Données**Line Width** (`Float`) : largeur des lignes principales. Les rapports de largeur des lignes coupées et des lignes projetées/2D peuvent être configurés dans les préférences d'Arch.
* Données**Font Size** (`Float`) : taille de tous les textes qui apparaissent dans cette vue.
* Données**Cut Line Width** (`Float`) : largeur des lignes de coupe dans cette vue.
* Données**Join Arch** (`Bool`) : si `true`, les murs et les structures seront fusionnés par matériau.
* Données**Line Spacing** (`Float`) : espacement entre les lignes à utiliser pour les textes multilignes. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Drawing view

* Données (Hidden)**Symbol** (`String`) : code SVG définissant ce symbole.
* Données**Editable Texts** (`StringList`) : valeurs de substitution pour les chaînes modifiables de ce symbole.
* Données**Owner** (`Link`) : fonction à laquelle ce symbole est rattaché. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Vue d'un objet Arch peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide des fonctions suivantes:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewArch','TestArch')
dv.Source = mySectionPlane
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ArchView/fr&oldid=1549389>"