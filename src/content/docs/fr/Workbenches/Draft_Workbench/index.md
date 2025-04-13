---
title: Atelier Draft
---

![](/images/Workbench_Draft.svg)

Icône de l'atelier Draft

## Introduction

L'![](/images/Workbench_Draft.svg) **atelier Draft** est principalement axé sur la création et la modification d'objets 2D dans FreeCAD. Mais il n'est pas limité au plan XY du système de coordonnées global. Ses objets peuvent avoir n'importe quelle orientation et position dans l'espace 3D et certains objets Draft peuvent être soit planaires, soit non planaires.

Les objets Draft peuvent être utilisés pour le dessin général, de manière similaire à ce que l'on peut faire avec Inkscape ou AutoCAD. Mais ils peuvent également servir de base à la création d'objets 3D dans d'autres environnements de travail. Une [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr") peut définir le tracé d'un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"), un [Draft Polygone](/Draft_Polygon/fr "Draft Polygon/fr") peut être extrudé avec [Part Extrusion](/Part_Extrude/fr "Part Extrude/fr"), etc. La plupart des [outils de modification de Draft](#Modification) peuvent être appliqués à des objets 2D et 3D créés avec d'autres ateliers. Vous pouvez, par exemple, [déplacer](/Draft_Move/fr "Draft Move/fr") une [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") ou créer un [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr") à partir d'un objet [Part](/Part_Workbench/fr "Part Workbench/fr").

L'atelier Draft fournit également des outils pour définir un [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr"), une [grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr") et un [système d'aimantation](/Draft_Snap/fr "Draft Snap/fr") pour contrôler précisément la position de la géométrie.

Si votre objectif principal est la production de dessins 2D complexes et de fichiers [DXF](/DXF/fr "DXF/fr") et que vous n'avez pas besoin de modélisation 3D, FreeCAD n'est peut-être pas le bon choix pour vous. Vous pouvez envisager d'utiliser un logiciel dédié au dessin technique, tel que [LibreCAD](https://fr.wikipedia.org/wiki/LibreCAD) ou [QCad](https://fr.wikipedia.org/wiki/QCad).

![](/images/Draft_Workbench_Example.png)

L'image montre la [grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr") alignée avec le plan XY.  
A gauche, en blanc, plusieurs objets planaires.  
À droite, une [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr") non planaire utilisé comme objet de chemin d'un [Draft Réseau selon une courbe](/Draft_PathArray/fr "Draft PathArray/fr").

## Draft

- ![](/images/Draft_Line.svg) [Ligne](/Draft_Line/fr "Draft Line/fr") : crée une ligne droite.

- ![](/images/Draft_Wire.svg) [Polyligne](/Draft_Wire/fr "Draft Wire/fr") : crée une polyligne (appelée aussi filaire), une séquence de plusieurs segments de ligne connectés.

- ![](/images/Draft_Fillet.svg) [Congé](/Draft_Fillet/fr "Draft Fillet/fr") : crée un congé, un coin arrondi, ou un chanfrein, un bord droit, entre deux [Draft Lignes](/Draft_Line/fr "Draft Line/fr").

- ![](/images/Draft_Arc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Outils Arc :

- ![](/images/Draft_Arc.svg) [Arc](/Draft_Arc/fr "Draft Arc/fr") : crée un arc de cercle à partir d'un centre, d'un rayon, d'un angle de départ et d'un angle d'ouverture.

- ![](/images/Draft_Arc_3Points.svg) [Arc par 3 points](/Draft_Arc_3Points/fr "Draft Arc 3Points/fr") : crée un arc de cercle à partir de trois points qui définissent sa circonférence.

- ![](/images/Draft_Circle.svg) [Cercle](/Draft_Circle/fr "Draft Circle/fr") : crée un cercle à partir d'un centre et d'un rayon.

- ![](/images/Draft_Ellipse.svg) [Ellipse](/Draft_Ellipse/fr "Draft Ellipse/fr") : crée une ellipse à partir de deux points définissant un rectangle dans lequel l'ellipse s'inscrira.

- ![](/images/Draft_Rectangle.svg) [Rectangle](/Draft_Rectangle/fr "Draft Rectangle/fr") : crée un rectangle à partir de deux points.

- ![](/images/Draft_Polygon.svg) [Polygone](/Draft_Polygon/fr "Draft Polygon/fr") : crée un polygone régulier à partir d'un centre et d'un rayon.

- ![](/images/Draft_BSpline.svg) [B-spline](/Draft_BSpline/fr "Draft BSpline/fr") : crée une courbe B-spline à partir de plusieurs points.

- ![](/images/Draft_CubicBezCurve.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Outils de Bézier :

- ![](/images/Draft_CubicBezCurve.svg) [Courbe de Bézier cubique](/Draft_CubicBezCurve/fr "Draft CubicBezCurve/fr") : crée une courbe de Bézier du troisième degré.

- ![](/images/Draft_BezCurve.svg) [Courbe de Bézier](/Draft_BezCurve/fr "Draft BezCurve/fr") : crée une courbe de Bézier à partir de plusieurs points.

- ![](/images/Draft_Point.svg) [Point](/Draft_Point/fr "Draft Point/fr") : crée un simple point.

- ![](/images/Draft_Facebinder.svg) [Surface liée](/Draft_Facebinder/fr "Draft Facebinder/fr") : crée un objet surface à partir des faces sélectionnées.

- ![](/images/Draft_ShapeString.svg) [Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr") : crée une forme composée qui représente une chaîne de texte.

- ![](/images/Draft_Hatch.svg) [Hachures](/Draft_Hatch/fr "Draft Hatch/fr") : crée des hachures sur les faces planes d'un objet sélectionné.

## Annotation

- ![](/images/Draft_Text.svg) [Texte](/Draft_Text/fr "Draft Text/fr") : crée un texte de plusieurs lignes à un point donné.

- ![](/images/Draft_Dimension.svg) [Dimension](/Draft_Dimension/fr "Draft Dimension/fr") : crée une dimension linéaire, une dimension radiale ou une dimension angulaire.

- ![](/images/Draft_Label.svg) [Étiquette](/Draft_Label/fr "Draft Label/fr") : crée un texte de plusieurs lignes avec une ligne de tête à deux segments et une flèche.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Éditer le style des annotations](/Draft_AnnotationStyleEditor/fr "Draft AnnotationStyleEditor/fr") : permet de définir des styles qui affectent les propriétés visuelles des objets de type annotation.

## Modification

- ![](/images/Draft_Move.svg) [Déplacer](/Draft_Move/fr "Draft Move/fr") : déplace ou copie les objets sélectionnés d'un point à un autre.

- ![](/images/Draft_Rotate.svg) [Pivoter](/Draft_Rotate/fr "Draft Rotate/fr") : fait pivoter ou copie les objets sélectionnés autour d'un point central selon un angle donné.

- ![](/images/Draft_Scale.svg) [Échelle](/Draft_Scale/fr "Draft Scale/fr") : met à l'échelle ou copie les objets sélectionnés autour d'un point de base.

- ![](/images/Draft_Mirror.svg) [Miroir](/Draft_Mirror/fr "Draft Mirror/fr") : crée des copies miroir à partir des objets sélectionnés.

- ![](/images/Draft_Offset.svg) [Décaler](/Draft_Offset/fr "Draft Offset/fr") : décale chaque segment d'un objet sélectionné sur une distance donnée ou crée une copie décalée de l'objet sélectionné.

- ![](/images/Draft_Trimex.svg) [Ajuster ou prolonger](/Draft_Trimex/fr "Draft Trimex/fr") : coupe ou étend un objet sélectionné.

- ![](/images/Draft_Stretch.svg) [Étirer](/Draft_Stretch/fr "Draft Stretch/fr") : étire les objets en déplaçant les points sélectionnés.

- ![](/images/Draft_Clone.svg) [Cloner](/Draft_Clone/fr "Draft Clone/fr") : crée des copies liées, des clones, des objets sélectionnés.

- ![](/images/Draft_OrthoArray.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Outils Réseau :

- ![](/images/Draft_OrthoArray.svg) [Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr") : crée un réseau orthogonal à partir d'un objet sélectionné. Cela peut éventuellement créer un réseau de [Link](/App_Link/fr "App Link/fr").

- ![](/images/Draft_PolarArray.svg) [Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr") : crée un réseau à partir d'un objet sélectionné en plaçant des copies le long d'une circonférence. Cela peut éventuellement créer un réseau de [Link](/App_Link/fr "App Link/fr").

- ![](/images/Draft_CircularArray.svg) [Réseau circulaire](/Draft_CircularArray/fr "Draft CircularArray/fr") : crée un réseau à partir d'un objet sélectionné en plaçant des copies le long de circonférences concentriques. Cela peut éventuellement créer un réseau de [Link](/App_Link/fr "App Link/fr").

- ![](/images/Draft_PathArray.svg) [Réseau selon une courbe](/Draft_PathArray/fr "Draft PathArray/fr") : crée un réseau à partir d'un objet sélectionné en plaçant des copies le long d'un tracé.

- ![](/images/Draft_PathLinkArray.svg) [Réseau lié selon une courbe](/Draft_PathLinkArray/fr "Draft PathLinkArray/fr") : idem, mais crée un réseau de [Link](/App_Link/fr "App Link/fr") au lieu d'un réseau normal.

- ![](/images/Draft_PointArray.svg) [Réseau de points](/Draft_PointArray/fr "Draft PointArray/fr") : crée un réseau à partir d'un objet sélectionné en plaçant des copies aux points d'un composé de points.

- ![](/images/Draft_PointLinkArray.svg) [Réseau lié selon des points](/Draft_PointLinkArray/fr "Draft PointLinkArray/fr") : idem, mais crée un réseau de [Link](/App_Link/fr "App Link/fr") au lieu d'un réseau normal.

- ![](/images/Draft_Edit.svg) [Éditer](/Draft_Edit/fr "Draft Edit/fr") : met les objets sélectionnés en mode d'édition de Draft. Dans ce mode, les propriétés des objets peuvent être modifiées graphiquement.

- ![](/images/Draft_SubelementHighlight.svg) [Surligner des sous éléments](/Draft_SubelementHighlight/fr "Draft SubelementHighlight/fr") : met temporairement en évidence des objets sélectionnés ou des objets base des objets sélectionnés.

- ![](/images/Draft_Join.svg) [Joindre](/Draft_Join/fr "Draft Join/fr") : joint des [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et des [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr") en une seule ligne.

- ![](/images/Draft_Split.svg) [Scinder](/Draft_Split/fr "Draft Split/fr") : divise une [Draft Ligne](/Draft_Line/fr "Draft Line/fr") ou une [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr") à un point ou un bord spécifié.

- ![](/images/Draft_Upgrade.svg) [Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr") : agrège les objets sélectionnés.

- ![](/images/Draft_Downgrade.svg) [Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr") : déclasse les objets sélectionnés.

- ![](/images/Draft_WireToBSpline.svg) [Polyligne <=> B-spline](/Draft_WireToBSpline/fr "Draft WireToBSpline/fr") : convertit des [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr") en [Draft B-splines](/Draft_BSpline/fr "Draft BSpline/fr") et vice versa.

- ![](/images/Draft_Draft2Sketch.svg) [Draft <=> esquisse](/Draft_Draft2Sketch/fr "Draft Draft2Sketch/fr") : convertit les objets Draft en [Sketcher Esquisses](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") et vice versa.

- ![](/images/Draft_Slope.svg) [Pente](/Draft_Slope/fr "Draft Slope/fr") : incline les [Draft Lignes](/Draft_Line/fr "Draft Line/fr") ou les [Draft Polylignes](/Draft_Wire "Draft Wire") sélectionnés en augmentant ou en diminuant, la coordonnée Z de tous les points après le premier.

- ![](/images/Draft_FlipDimension.svg) [Inverser le texte de la dimension](/Draft_FlipDimension/fr "Draft FlipDimension/fr") : fait pivoter le texte de la dimension des [Draft Dimensions](/Draft_Dimension/fr "Draft Dimension/fr") sélectionnées de 180° autour de la ligne de la dimension.

- ![](/images/Draft_Shape2DView.svg) [Vue 2D d'une forme](/Draft_Shape2DView/fr "Draft Shape2DView/fr") : crée des projections 2D à partir des objets sélectionnés.

## La barre de Draft

[Draft La barre](/Draft_Tray/fr "Draft Tray/fr") permet de sélectionner le plan de travail, de définir les paramètres de style, de passer en mode construction et de spécifier le calque ou le groupe actif.

![](/images/Draft_tray_default.png)

- ![](/images/Draft_tray_button_plane.png) [Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") : définit le plan de travail Draft en cours. Egalement disponible dans le menu : **Draft → Utilitaires → ![](/images/Draft_SelectPlane.svg) Sélectionner un plan**.

- ![](/images/Draft_tray_button_style.png) [Définir le style](/Draft_SetStyle/fr "Draft SetStyle/fr") : définit le style par défaut pour les nouveaux objets. Egalement disponible dans le menu : **Draft → Utilitaires → ![](/images/Draft_SetStyle.svg) Définir le style**.

- ![](/images/Draft_tray_button_construction.png) [Basculer en mode construction](/Draft_ToggleConstructionMode/fr "Draft ToggleConstructionMode/fr") : active ou désactive le mode de construction de Draft. Egalement disponible dans le menu : **Draft → Utilitaires → ![](/images/Draft_ToggleConstructionMode.svg) Basculer en mode construction**.

- ![](/images/Draft_tray_button_layer.png) [Grouper automatiquement](/Draft_AutoGroup/fr "Draft AutoGroup/fr") : change le [Draft Calque](/Draft_Layer/fr "Draft Layer/fr") actif ou, accessoirement, le [Std Groupe](/Std_Group/fr "Std Group/fr") actif ou un objet [BIM](/BIM_Workbench/fr "BIM Workbench/fr") de type groupe.

## Widget d'échelle d'annotation de Draft

Avec le [Draft Widget d'échelle d'annotation](/Draft_annotation_scale_widget/fr "Draft annotation scale widget/fr"), l'échelle d'annotation Draft peut être spécifiée.

![](/images/Draft_annotation_scale_widget_button.png)

## Widget d'aimantation de Draft

Le [Draft Widget d'aimantation](/Draft_snap_widget/fr "Draft snap widget/fr") peut être utilisé comme alternative à la [Barre d'outils d'aimantation de Draft](#Barre_d.27outils_d.27aimantation_de_Draft).

![](/images/Draft_snap_widget_button.png)

## Barre d'outils d'aimantation de Draft

La barre d'outils Draft Aimantation permet de sélectionner les options actives d'aimantation. Les boutons appartenant aux options actives restent enfoncés. Pour des informations générales sur l'aimantation, voir : [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").

- ![](/images/Draft_Snap_Lock.svg) [Verrouiller l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr") : active ou désactive l'aimantation de manière globale.

- ![](/images/Draft_Snap_Endpoint.svg) [Aimantation Extrémité](/Draft_Snap_Endpoint/fr "Draft Snap Endpoint/fr") : aimante aux extrémités des segments.

- ![](/images/Draft_Snap_Midpoint.svg) [Aimantation Milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") : aimante au point milieu des segments.

- ![](/images/Draft_Snap_Center.svg) [Aimantation Centre](/Draft_Snap_Center/fr "Draft Snap Center/fr") : aimante au point central des faces et des arêtes circulaires et au point Données**Placement** de [Draft Proxy de plan de travail](/Draft_WorkingPlaneProxy/fr "Draft WorkingPlaneProxy/fr") et [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr").

- ![](/images/Draft_Snap_Angle.svg) [Aimantation Angle](/Draft_Snap_Angle/fr "Draft Snap Angle/fr") : aimante aux points cardinaux spéciaux des bords circulaires, aux multiples de 30° et 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Aimantation Intersection](/Draft_Snap_Intersection/fr "Draft Snap Intersection/fr") : aimante à l'intersection de deux bords.

- ![](/images/Draft_Snap_Perpendicular.svg) [Aimantation Perpendiculaire](/Draft_Snap_Perpendicular/fr "Draft Snap Perpendicular/fr") : aimante aux points perpendiculaires sur les faces ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) et les arêtes.

- ![](/images/Draft_Snap_Extension.svg) [Aimantation Extension](/Draft_Snap_Extension/fr "Draft Snap Extension/fr") : aimante à une ligne imaginaire qui s'étend au-delà des extrémités des bords droits.

- ![](/images/Draft_Snap_Parallel.svg) [Aimantation Parallèle](/Draft_Snap_Parallel/fr "Draft Snap Parallel/fr") : aimante à une ligne imaginaire parallèle aux bords droits.

- ![](/images/Draft_Snap_Special.svg) [Aimantation Spécial](/Draft_Snap_Special/fr "Draft Snap Special/fr") : aimante à des points spéciaux définis par l'objet.

- ![](/images/Draft_Snap_Near.svg) [Aimantation Au plus proche](/Draft_Snap_Near/fr "Draft Snap Near/fr") : aimante au point le plus proche sur les faces et les bords.

- ![](/images/Draft_Snap_Ortho.svg) [Aimantation Orthogonal](/Draft_Snap_Ortho/fr "Draft Snap Ortho/fr") : aimante sur des lignes imaginaires qui croisent le point précédent à des multiples de 45°.

- ![](/images/Draft_Snap_Grid.svg) [Aimantation Grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr") : aimante aux intersections des lignes de la grille.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Aimantation Plan de travail](/Draft_Snap_WorkingPlane/fr "Draft Snap WorkingPlane/fr") : projette les points d'aimantation sur le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours.

- ![](/images/Draft_Snap_Dimensions.svg) [Aimantation Dimensions](/Draft_Snap_Dimensions/fr "Draft Snap Dimensions/fr") : montre les dimensions X et Y temporaires.

- ![](/images/Draft_ToggleGrid.svg) [Basculer la grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr") : modifie la visibilité de la grille.

## Outils utilitaires de la barre d'outils de Draft

- ![](/images/Draft_LayerManager.svg) [Gestion des calques...](/Draft_LayerManager/fr "Draft LayerManager/fr") : permet de gérer les calques dans un document. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/Draft_AddNamedGroup.svg) [Groupe nommé](/Draft_AddNamedGroup/fr "Draft AddNamedGroup/fr") : crée un [Std Groupe](/Std_Group/fr "Std Group/fr") nommé et ajoute des objets sélectionnés à ce groupe.

- ![](/images/Draft_SelectGroup.svg) [Sélection groupée](/Draft_SelectGroup/fr "Draft SelectGroup/fr") : sélectionne le contenu des objets de type [Std Groupe](/Std_Group/fr "Std Group/fr") ou des objets de type groupe de [BIM](/BIM_Workbench/fr "BIM Workbench/fr").

- ![](/images/Draft_AddToLayer.svg) [Ajouter au calque](/Draft_AddToLayer/fr "Draft AddToLayer/fr") : ajoute des objets à un calque, ou les supprime de n'importe quel calque. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

- ![](/images/Draft_AddToGroup.svg) [Ajouter au groupe](/Draft_AddToGroup/fr "Draft AddToGroup/fr") : ajoute des objets à un [Std Groupe](/Std_Group/fr "Std Group/fr"). Il peut aussi dégrouper des objets.

- ![](/images/Draft_AddConstruction.svg) [Ajouter au groupe de construction](/Draft_AddConstruction/fr "Draft AddConstruction/fr") : ajoute les objets au [Draft groupe de construction](/Draft_ToggleConstructionMode/fr "Draft ToggleConstructionMode/fr").

- ![](/images/Draft_ToggleDisplayMode.svg) [Mode d'affichage](/Draft_ToggleDisplayMode/fr "Draft ToggleDisplayMode/fr") : bascule la Vue**Display Mode** (mode d'affichage) des objets sélectionnés entre `Flat Lines` et `Wireframe`.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Proxy de plan de travail](/Draft_WorkingPlaneProxy/fr "Draft WorkingPlaneProxy/fr") : crée un proxy de plan de travail pour sauvegarder le [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").

## Outils supplémentaires

Le menu **Draft → Utilitaires** contient plusieurs outils. La plupart d'entre eux sont également accessibles depuis les barres d'outils ou [Draft La barre](/Draft_Tray/fr "Draft Tray/fr") et ont déjà été mentionnés ci-dessus. Pour les outils suivants, ce n'est pas le cas :

- ![](/images/Draft_ApplyStyle.svg) [Appliquer le style](/Draft_ApplyStyle/fr "Draft ApplyStyle/fr") : applique les paramètres du style en cours aux objets sélectionnés.

- ![](/images/Draft_Layer.svg) [Calque](/Draft_Layer/fr "Draft Layer/fr") : crée un [Draft Calque](/Draft_Layer/fr "Draft Layer/fr").

- ![](/images/Draft_Heal.svg) [Réparer](/Draft_Heal/fr "Draft Heal/fr") : répare les objets Draft problématiques trouvés dans de très vieux fichiers.

- ![](/images/Draft_ShowSnapBar.svg) [Barre d'aimantation](/Draft_ShowSnapBar/fr "Draft ShowSnapBar/fr") : montre la [Draft Barre d'aimantation](#Barre_d.27outils_d.27aimantation_de_Draft).

## Fonctions additionnelles

- [Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") : le plan dans la [vue 3D](/3D_view/fr "3D view/fr") où les nouveaux objets Draft sont créés.
- [Aimantation](/Draft_Snap/fr "Draft Snap/fr") : sélectionne des points géométriques exacts sur, ou définis par, des objets existants ou la grille.
- [Contrainte](/Draft_Constrain/fr "Draft Constrain/fr") : pour chaque point suivant, vous pouvez contraindre le mouvement du curseur dans la direction X, Y ou Z.
- [Mode de construction](/Draft_ToggleConstructionMode/fr "Draft ToggleConstructionMode/fr") : place les nouveaux objets Draft dans un groupe dédié, ce qui facilite leur masquage ou leur suppression.
- [Motif](/Draft_Pattern/fr "Draft Pattern/fr") : les objets Draft ayant une propriété Données**Make Face** peuvent afficher un motif SVG au lieu d'une couleur unie.

## Menu contextuel de l'arborescence

Les options supplémentaires sont disponibles dans le menu contextuel de la [Vue en arborescence](/Tree_view/fr "Tree view/fr") :

### Options par défaut

Pour la plupart des objets Draft, l'option suivante est disponible :

- Éditer : édite l'objet. Selon le type d'objet, on utilise soit [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr") soit une solution d'édition dédiée. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

S'il y a un document actif, le menu contextuel contient un sous-menu supplémentaire :

- Utilitaires : un sous-ensemble des outils disponibles dans le menu principal Draft Utilitaires.

### Options du conteneur du calque

Pour un [Draft Calque](/Draft_Layer/fr "Draft Layer/fr"), les options supplémentaires sont disponibles :

- ![](/images/Draft_Layer.svg) [Fusionner les calques en double](/Draft_Layer/fr#Options_du_conteneur_du_calque "Draft Layer/fr") : fusionne tous les calques ayant le même libellé de base.

- ![](/images/Draft_NewLayer.svg) [Ajouter un nouveau calque](/Draft_Layer/fr#Options_du_conteneur_du_calque "Draft Layer/fr") : ajoute un nouveau calque au document en cours.

### Options du calque

Pour un [Draft Calque](/Draft_Layer/fr "Draft Layer/fr"), les options supplémentaires sont disponibles :

- ![](/images/Button_right.svg) [Grouper automatiquement](/Draft_AutoGroup/fr "Draft AutoGroup/fr") : active le calque sélectionné.

- ![](/images/Draft_SelectGroup.svg) [Sélectionner le contenu du calque](/Draft_SelectGroup/fr "Draft SelectGroup/fr") : sélectionne les objets à l'intérieur du calque sélectionné.

### Options du texte

Pour un [Draft Texte](/Draft_Text/fr "Draft Text/fr") et une [Draft Étiquette](/Draft_Label/fr "Draft Label/fr") qui contient un ou plusieurs hyperliens, vers un fichier local ou distant ou vers une URL, cette option supplémentaire est disponible :

- Ouvrir les hyperliens : les hyperliens sont ouverts dans l'application appropriée (telle que définie par le système d'exploitation). Il y a un avertissement dans le cas d'hyperliens multiples. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

### Options des lignes

Pour une [Draft Ligne](/Draft_Line/fr "Draft Line/fr") et une [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr"), cette option supplémentaire est disponible :

- ![](/images/Draft_Edit.svg) Aplatir : aplatit la polyligne sur le [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours. Cette option ne fonctionne pas correctement pour la version 0.19 et précédentes.

### Options du proxy du plan de travail

Pour un [Draft Proxy de plan de travail](/Draft_WorkingPlaneProxy/fr "Draft WorkingPlaneProxy/fr"), les options supplémentaires sont disponibles :

- ![](/images/Draft_SelectPlane.svg) [Enregistrer la position de la caméra](/Draft_WorkingPlaneProxy/fr#Menu_contextuel "Draft WorkingPlaneProxy/fr") : met à jour la propriété Vue**View Data** du proxy du plan de travail avec les paramètres en cours de la caméra de la [vue 3D](/3D_view/fr "3D view/fr").

- ![](/images/Draft_SelectPlane.svg) [Enregistrer l'état des objets](/Draft_WorkingPlaneProxy/fr#Menu_contextuel "Draft WorkingPlaneProxy/fr") : met à jour la propriété Vue**Visibility Map** du proxy du plan de travail avec l'état de visibilité en cours des objets dans le document.

## Menu contextuel de la vue 3D

Les options supplémentaires sont disponibles dans le menu contextuel de la [Vue 3D](/3D_view/fr "3D view/fr") :

### Options par défaut

S'il y a un document actif, le menu contextuel contient un sous-menu supplémentaire :

- Utilitaires : un sous-ensemble des outils disponibles dans le menu principal Draft Utilitaires.

### Options du texte

Voir [au dessus](#Text_options).

## Outils obsolète

- ![](/images/Draft_Array.svg) [Réseau](/Draft_Array/fr "Draft Array/fr") : crée un réseau orthogonal à partir d'un objet sélectionné. Le réseau créé peut être transformé en un [réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr") ou un [réseau circulaire](/Draft_CircularArray/fr "Draft CircularArray/fr") en modifiant sa propriété Données**Array Type**. Elle n'est plus disponible dans la version 0.21 et suivantes.

- ![](/images/Draft_Drawing.svg) [Dessin](/Draft_Drawing/fr "Draft Drawing/fr") : insère des vues des objets sélectionnés dans une page [Drawing](/Drawing_Workbench/fr "Drawing Workbench/fr"). Elle n'est plus disponible dans la version 0.21 et suivantes.

- ![](/images/Draft_ToggleContinueMode.svg) [Basculer en mode continu](/Draft_ToggleContinueMode/fr "Draft ToggleContinueMode/fr") : active ou désactive le mode continu. Cela n'est plus disponible avec la version 1.0 et suivantes.

## Préférences

- ![](/images/Preferences-draft.svg) [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr") : préférences générales pour l'atelier Draft.

- ![](/images/Preferences-import-export.svg) [Préférences Importer/Exporter](/Import_Export_Preferences/fr "Import Export Preferences/fr") : préférences disponibles pour l'importation et l'exportation vers différents formats de fichiers.

## Formats de fichiers

L'atelier Draft fournit à FreeCAD des importateurs et des exportateurs pour différents formats de fichiers. Ceux-ci sont utilisés par les commandes [Std Importer](/Std_Import/fr "Std Import/fr") et [Std Exporter](/Std_Export/fr "Std Export/fr").

- [Autodesk .DXF](/Draft_DXF/fr "Draft DXF/fr") : importe et exporte les fichiers [DXF (Drawing eXchange Format)](http://fr.wikipedia.org/wiki/Drawing_eXchange_Format) créés avec d'autres applications de CAO 2D. Voir aussi [Importation DXF et FreeCAD](/FreeCAD_and_DXF_Import/fr "FreeCAD and DXF Import/fr").
- [Autodesk .DWG](/Draft_DXF/fr "Draft DXF/fr") : importe et exporte des fichiers DWG via un convertisseur DWG externe. Voir aussi [Importation FreeCAD et DWG](/FreeCAD_and_DWG_Import/fr "FreeCAD and DWG Import/fr").
- [Scalable Vector Graphics .SVG](/Draft_SVG/fr "Draft SVG/fr") : importe et exporte les fichiers [Scalable Vector Graphics(SVG)](http://fr.wikipedia.org/wiki/Scalable_Vector_Graphics) créés avec des applications de dessin vectoriel
- [Open Cad format .OCA](/Draft_OCA/fr "Draft OCA/fr") : importe et exporte des fichiers [OCA/GCAD](http://groups.google.com/group/open_cad_format).
- [Airfoil Data Format .DAT](/Draft_DAT/fr "Draft DAT/fr") : importe des fichiers DAT décrivant des profils d'ailes.

## Tests unitaires

Voir aussi : [Atelier Test](/Testing/fr "Testing/fr").

Pour exécuter les tests unitaires du plan de travail, exécutez ce qui suit à partir du terminal du système d'exploitation:

```
freecad -t TestDraft

```

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'atelier comprend un module pour créer des échantillons de tous les objets dans un nouveau document.

Utilisez-le pour tester que tous les objets sont produits correctement:

```
import drafttests.draft_test_objects as dto
doc = dto.create_test_file()

```

L'inspection du code de ce module peut aider à comprendre l'interface de programmation.

## Tutoriels

- [Draft Tutoriel](/Draft_tutorial/fr "Draft tutorial/fr")
- [Draft Tutoriel Forme à partir de texte](/Draft_ShapeString_tutorial/fr "Draft ShapeString tutorial/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Workbench/fr&oldid=1548106>"
