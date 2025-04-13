---
title: TechDraw Vue
---
|  |
| --- |
| TechDraw Vue |
| Emplacement du menu |
| TechDraw → Vues de Techdraw → Insérer une vue |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [TechDraw Projection de groupe](/TechDraw_ProjectionGroup/fr "TechDraw ProjectionGroup/fr"), [TechDraw Vue d'un objet Spreadsheet](/TechDraw_SpreadsheetView/fr "TechDraw SpreadsheetView/fr"), [TechDraw Vue d'un objet Arch](/TechDraw_ArchView "TechDraw ArchView"), [TechDraw Symbole](/TechDraw_Symbol/fr "TechDraw Symbol/fr"), [TechDraw Image](/TechDraw_Image/fr "TechDraw Image/fr") |
|  |

## Description

L'outil **TechDraw Vue** ajoute une représentation d'un ou plusieurs objets à une page de dessin. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr"): il peut créer un [élément de groupe de projection (une seule vue)](#Propriétés_Groupe_de_projection_d'un_élément), un [groupe de projection](/TechDraw_ProjectionGroup/fr "TechDraw ProjectionGroup/fr"), une [vue de Spreadsheet](/TechDraw_SpreadsheetView/fr "TechDraw SpreadsheetView/fr"), une [vue de Arch](/TechDraw_ArchView "TechDraw ArchView"), un [symbole](/TechDraw_Symbol "TechDraw Symbol") ou une [vue d'une image](/TechDraw_Image "TechDraw Image").

Jusqu'à la version 0.21 et précédentes, l'outil ne pouvait créer qu'une [vue de Part](#Propriétés_Vue_de_Part), très similaire à un élément de groupe de projection.

![](/images/TechDraw_View_example.png)

Vue d'une boîte pleine avec des lignes cachées

## Utilisation Groupe de projection d'élément et Groupe de projection

1. Vous pouvez faire pivoter la [vue 3D](/3D_view/fr "3D view/fr"). La direction de la caméra dans la vue 3D peut être utilisée pour définir la direction de projection de la vue principale.
2. Sélectionnez un ou plusieurs objets avec une propriété Données**Shape** dans la vue 3D ou la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Vous pouvez également sélectionner des [Std Parts](/Std_Part/fr "Std Part/fr") ou des [Std Groupes](/Std_Group/fr "Std Group/fr") qui contiennent de tels objets. Lors de la sélection dans la vue 3D, la première face sélectionnée peut être utilisée pour définir la direction de projection de la vue primaire. Ne sélectionnez pas d'objets en choisissant une face dans la vue 3D si vous souhaitez utiliser la direction en cours de la caméra.
3. S'il y a plusieurs pages de dessin dans le document : vous pouvez ajouter la page souhaitée à la sélection en la sélectionnant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
4. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le ![](/images/TechDraw_View.svg) Insérer une vue.
   * Sélectionnez l'option **TechDraw → Vues de Techdraw → ![](/images/TechDraw_View.svg) Insérer une vue** du menu.
5. S'il y a plusieurs pages de dessin dans le document, et si aucune page n'est affichée dans la [zone de vue principale](/Main_view_area/fr "Main view area/fr") et que vous n'avez pas encore sélectionné de page, la fenêtre de dialogue **Sélecteur de pages** s'ouvre :
   1. Sélectionnez la page souhaitée.
   2. Appuyez sur le bouton OK.
6. Le panneau de tâches **Vue de l'objet** s'ouvre. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
7. Vous pouvez ajuster les paramètres :
   * **Échelle** : sélectionnez `Feuille`, `Automatique` ou `Personnalisée`. Si la dernière option est sélectionnée, entrez le numérateur et le dénominateur de l'échelle.
   * **Direction** : utilisez les boutons disponibles pour ajuster la direction de projection et la rotation de la vue primaire :
     + Le bouton [#.## #.## #.##] au centre indique la direction de projection actuelle. La valeur initiale dépend de la [préférence](/TechDraw_Preferences/fr#Général "TechDraw Preferences/fr") **Utiliser la direction de la caméra 3D**. Appuyez sur le bouton pour ajuster la direction de la vue et la rotation manuellement.
     + Appuyez sur le bouton ![](/images/Arrow-up.svg), ![](/images/Arrow-down.svg), ![](/images/Arrow-left.svg) ou ![](/images/Arrow-right.svg) pour faire pivoter la direction de projection de 90° autour de l'axe horizontal ou vertical de la vue.
     + Appuyez sur le bouton ![](/images/Arrow-cw.svg) ou ![](/images/Arrow-ccw.svg) pour faire pivoter la vue de 90° autour de la direction de projection.
     + Appuyez sur le bouton ![](/images/TechDraw_ProjFront.svg) pour définir la direction de projection de la vue principale sur la vue standard [Vue de face](/Std_ViewFront/fr "Std ViewFront/fr").
     + Appuyez sur le bouton ![](/images/TechDraw_CameraOrientation.svg) pour la définir sur la première face sélectionnée, si disponible, ou sinon sur la direction actuelle de la caméra.
   * **Projections secondaires** : vous pouvez crée des projections secondaires en plus de la vue principale. Au moins une projection secondaire doit être spécifiée pour que toutes les commandes de cette section soient affichées.
8. Après avoir modifié certains paramètres, il peut être nécessaire d'appuyer sur le bouton Appliquer pour mettre à jour la (les) vue(s).
9. Appuyez sur le bouton OK.
10. Un [groupe de projection d'un élément](#Propriétés_Groupe_de_projection_d'un_élément) ou, s'il y a une ou plusieurs projections secondaires, un [groupe de projection](/TechDraw_ProjectionGroup/fr "TechDraw ProjectionGroup/fr") est inséré.

![](/images/TechDraw_View_Taskpanel.png)

[Panneau des tâches](/Task_panel/fr "Task panel/fr") Vue de l'objet

## Utilisation pour d'autres types de vues

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

1. Vous pouvez sélectionner une [feuille de calcul](/Spreadsheet_CreateSheet/fr "Spreadsheet CreateSheet/fr") dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou un [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") dans la [vue 3D](/3D_view/fr "3D view/fr") ou la vue en arborescence.
2. Suivez les étapes 3, 4 et 5 comme expliqué [ci-dessus](#Utilisation_Groupe_de_projection_d'élément_et_Groupe_de_projection).
3. Si vous n'avez pas sélectionné une feuille de calcul ou un plan de coupe de Arch :
   1. Une fenêtre de dialogue d'avertissement s'ouvre :
   2. Cochez la case **Ne plus afficher ce message** pour éviter cette fenêtre de dialogue à l'avenir.
   3. Appuyez sur le bouton OK.
   4. Un navigateur de fichiers s'ouvre.
   5. Sélectionnez un fichier SVG ou un fichier image.
   6. Une [vue de Spreadsheet](/TechDraw_SpreadsheetView/fr "TechDraw SpreadsheetView/fr"), une [vue de Arch](/TechDraw_ArchView/fr "TechDraw ArchView/fr"), un [symbole](/TechDraw_Symbol/fr "TechDraw Symbol/fr") ou une [image](/TechDraw_Image/fr "TechDraw Image/fr") est inséré.
4. Dans le cas d'une vue de feuille de calcul : ajustez la plage de cellules de la vue en modifiant ses propriétés Données**Cell Start** et Données**Cell End**.
5. Dans le cas d'un symbole ou d'une image : vous pouvez modifier sa propriété Données**Scale** pour ajuster sa taille.

## Propriétés Vue de Part

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Une vue de Part, en fait un objet `TechDraw::DrawViewPart`, a les propriétés suivantes :

### Données

Base

* Données**X** (`Distance`) : position horizontale de la vue sur la page. (1)
* Données**Y** (`Distance`) : position verticale de la vue sur la page. (1)
* Données**Lock Position** (`Bool`) : empêche les vues d'être déplacées dans l'interface graphique si mis à `true`. La vue peut toujours être déplacée en modifiant les propriétés X,Y. (1)
* Données**Rotation** (`Angle`) : rotation dans le sens inverse des aiguilles d'une montre de la vue sur la page en degrés. (1)
* Données**Scale Type** (`Enumeration`) : type d'échelle. Options : (1)
  + `Page` : utilise le paramètre d'échelle de la [page standard](/TechDraw_PageDefault/fr "TechDraw PageDefault/fr").
  + `Automatic` : adapte la vue à la page.
  + `Custom` : utilise l'échelle définie par Données**Scale**.
* Données**Scale** (`FloatConstant`) : la vue sera rendue sur la page dans un rapport échelle:1 par rapport à la source. (1)
* Données**Caption** (`String`) : légende de texte courte optionnelle. (1)

Cosmetics

* Données (Hidden)**Cosmetic Vertexes** (`TechDraw::PropertyCosmeticVertexList`)
* Données (Hidden)**Cosmetic Edges** (`TechDraw::PropertyCosmeticEdgeList`)
* Données (Hidden)**Center Lines** (`TechDraw::PropertyCenterLineList`)
* Données (Hidden)**Geom Formats** (`TechDraw::PropertyGeomFormatList`)

HLR Parameters

* Données**Coarse View** (`Bool`) : si `true`, TechDraw utilisera une approximation polygonale pour calculer la géométrie du dessin. Si `false`, TechDraw utilisera un algorithme de précision. CoarseView peut être beaucoup plus rapide pour les modèles complexes. La qualité du dessin est réduite, car chaque courbe est approximée comme une série de segments de ligne courts. Les sommets ne sont pas affichés dans CoarseView, car chaque segment court entraînerait la création de deux nouveaux sommets et l'affichage devient encombré. Les dimensions linéaires peuvent être ajoutées à une CoarseView, mais il est peu probable qu'elles soient utiles.
* Données**Smooth Visible** (`Bool`) : active/désactive des lignes lisses visibles.
* Données**Seam Visible** (`Bool`) : active/désactive des lignes de couture visibles.
* Données**Iso Visible** (`Bool`) : active/désactive des lignes isométriques (u,v) visibles.
* Données**Hard Hidden** (`Bool`) : active/désactive des lignes cachées.
* Données**Smooth Hidden** (`Bool`) : active/désactive des lignes cachées lisses.
* Données**Seam Hidden** (`Bool`) : active/désactive des lignes de couture cachées.
* Données**Iso Hidden** (`Bool`) : active/désactive des lignes isométriques (u,v) cachées.
* Données**Iso Count** (`Integer`) : nombre de lignes isométriques (u,v) à dessiner sur chaque face.
* Données**Scrub Count** (`Integer`) : le nombre de fois que FreeCAD doit essayer de nettoyer le résultat des lignes cachées supprimées. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

Projection

* Données**Source** (`LinkList`) : liens vers les objets dessinables à représenter.
* Données**XSource** (`XLLinkList`) : liens vers les objets dessinables dans un fichier externe.
* Données**Direction** (`Vector`) : ce vecteur contrôle la direction depuis laquelle vous regardez l'objet. +X est la droite, -X est la gauche, +Y est l'arrière, -Y est l'avant (regardant dans l'écran), +Z est le haut et -Z est le bas. Ainsi, une vue de face est (0,-1,0) et une vue isométrique est (1,-1,1).
* Données**XDirection** (`Vector`) : ce vecteur contrôle la rotation de la vue autour de la direction.
* Données**Perspective** (`Bool`) : `true` pour une projection en perspective, `false` pour une projection orthogonale.
* Données**Focus** (`Distance`) : distance entre le plan de la caméra et le plan de projection pour les projections en perspective. Doit être ajustée pour s'adapter à l'objet. Trop loin et la perspective est perdue, trop près et l'objet est déformé.

### Vue

Base

* Vue**Keep Label** (`Bool`) : toujours afficher l'étiquette de la vue si `true`. (1)
* Vue**Stack Order** (`Integer`) : sur ou sous le niveau d'empilement par rapport aux autres vues. (1) [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

Broken View

* Vue**Break Line Style** (`Enumeration`) : définit le style de la ligne de rupture, quand cela est possible. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Vue**Break Line Type** (`Enumeration`) : ajuste le type de représentation de la ligne de rupture sur les vues interrompues, quand cela est possible : `None`, `ZigZag` or `Simple`. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Decoration

* Vue**Arc Center Marks** (`Bool`) : active/désactive des marques centrales d'arc de cercle.
* Vue**Center Scale** (`Float`) : ajustement de la taille des marques centrales d'arc de cercle, si activé.
* Vue**Horiz Center Line** (`Bool`) : affiche une ligne centrale horizontale dans la vue.
* Vue**Show All Edges** (`Bool`) : affiche temporairement les lignes invisibles.
* Vue**Vert Center Line** (`Bool`) : affiche une ligne centrale verticale dans la vue.

Faces

* Vue**Face Color** (`Color`) : définit la couleur des faces. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Vue**Face Transparency** (`Percent`) : définit la transparence des faces. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Highlight

* Vue**Highlight Adjust** (`Float`) : ajuste la rotation de la mise en évidence du détail, le cas échéant.
* Vue**Highlight Line Color** (`Color`) : définit la couleur de la ligne de surbrillance, le cas échéant.
* Vue**Highlight Line Style** (`Enumeration`) : définit le style de la ligne de mise en évidence, le cas échéant.

Lines

* Vue**Extra Width** (`Length`) : pas encore implémenté.
* Vue**Hidden Width** (`Length`) : épaisseur des lignes cachées, si elles sont activées.
* Vue**Iso Width** (`Length`) : épaisseur des lignes de surface isométriques (u,v) et des lignes de dimension.
* Vue**Line Width** (`Length`) : épaisseur des lignes visibles. Voir [Groupe de lignes](/TechDraw_LineGroup/fr "TechDraw LineGroup/fr").

Section Line

* Vue**Include Cut Line** (`Bool`) : affiche/masque la ligne de coupe de la section, quand cela est possible. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Vue**Section Line Color** (`Color`) : définit la couleur de la ligne de la section, quand cela est possible.
* Vue**Section Line Marks** (`Bool`) : affiche/masque les marques aux changements de direction pour la section complexe, quand cela est possible. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Vue**Section Line Style** (`Enumeration`) : définit le style de ligne de la section, quand cela est possible.
* Vue**Show Section Line** (`Bool`) : affiche/masque la ligne de section, quand cela est possible.

(1) ces propriétés sont communes à tous les types de vues.

## Propriétés Groupe de projection d'un élément

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Une groupe de projection d'un élément, en fait un objet `TechDraw::DrawProjGroupItem`, est dérivée d'une [vue de Part](#Propriétés_Vue_de_Part) et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Type** (`Enumeration`) : le type de vue (`Front`, `Left`, etc.).
* Données**Rotation Vector** (`Vector`) : déclassé, utilisez Données**XDirection** à la place.

## Propriétés Groupe de projection

Voir [TechDraw Groupe de projections](/TechDraw_ProjectionGroup/fr#Propriétés "TechDraw ProjectionGroup/fr").

## Propriétés Vue de Spreadsheet

Voir [TechDraw Vue de Spreadsheet](/TechDraw_SpreadsheetView/fr#Propriétés "TechDraw SpreadsheetView/fr").

## Propriétés Vue de Arch

Voir [TechDraw Vue de Arch](/TechDraw_ArchView/fr#Propriétés "TechDraw ArchView/fr").

## Propriétés Symbole

Voir [TechDraw Symbole](/TechDraw_Symbol/fr#Propri.C3.A9t.C3.A9s "TechDraw Symbol/fr").

## Propriétés Vue d'une image

Voir [TechDraw Image](/TechDraw_Image/fr#Propri.C3.A9t.C3.A9s "TechDraw Image/fr").

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Une vue de Part peut être crée à partir de [macros](/Macros/fr "Macros/fr") et de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
import FreeCAD as App

doc = App.ActiveDocument
box = doc.addObject("Part::Box", "Box")

page = doc.addObject("TechDraw::DrawPage", "Page")
template = doc.addObject("TechDraw::DrawSVGTemplate", "Template")
template.Template = App.getResourceDir() + "Mod/TechDraw/Templates/A4_LandscapeTD.svg"
page.Template = template

# Toggle the visibility of the page to ensure its width and height are updated (hack):
page.Visibility = False
page.Visibility = True

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = [box]
view.Direction = (0, 0, 1)

view.X = page.PageWidth / 2
view.Y = page.PageHeight / 2

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_View/fr&oldid=1549414>"