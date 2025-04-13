---
title: Atelier Sketcher
---

![](/images/Workbench_Sketcher.svg)

Icône de l'atelier Sketcher

## Introduction

Avec l'![](/images/Workbench_Sketcher.svg) atelier Sketcher, il est possible de créer des esquisses en 2D destinées à être utilisées dans d'autres ateliers. Les esquisses 2D sont le point de départ de nombreux modèles de CAO. Elles définissent généralement les profils et les trajectoires des opérations permettant de créer des formes en 3D. Un modèle peut dépendre de plusieurs esquisses pour sa forme finale.

Avec les opérations booléennes définies dans l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr"), l'atelier Sketcher, ou "Sketcher" en abrégé, constitue la base de la méthode de construction de solides [conception 3D solide](/Constructive_solid_geometry/fr "Constructive solid geometry/fr") (CSG en anglais). Avec l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), elle constitue également la base de la méthodologie des [fonctions](/Feature_editing/fr "Feature editing/fr") pour la création de solides. Mais de nombreux autres ateliers utilisent également des esquisses.

L'atelier Sketcher comporte des [contraintes](#Contraintes), permettant aux formes 2D de suivre des définitions géométriques précises en termes de longueur, d'angles et de relations (horizontalité, verticalité, perpendicularité, etc.). Un solveur de contraintes calcule l'étendue contrainte de la géométrie 2D et permet une exploration interactive des degrés de liberté de l'esquisse.

Sketcher n'est pas destiné à produire des plans en 2D. Une fois que les esquisses sont utilisées pour générer un élément solide, elles sont automatiquement masquées et les contraintes ne sont visibles qu'en mode d'édition d'esquisse. Si vous avez uniquement besoin de produire des vues 2D pour l'impression et que vous ne souhaitez pas créer de modèles 3D, consultez l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").

![](/images/FC_ConstrainedSketch.png)

Une esquisse pleinement contrainte.‎

## Contraintes

Les contraintes sont utilisées pour limiter les degrés de liberté d'un objet. Par exemple, une ligne sans contrainte a 4 degrés de liberté (abréviation française "DDL" et anglaise "DoF") : elle peut être déplacée horizontalement ou verticalement, étirée, subir une rotation.

L'application d'une contrainte horizontale ou verticale, ou une contrainte d'angle (par rapport à une autre ligne ou à l'un des axes), limite la capacité de rotation, la laissant ainsi avec 3 degrés de liberté.  
Le verrouillage d'un de ses points par rapport à l'origine va encore supprimer 2 degrés de liberté.  
Et, l'application d'une contrainte de dimension va supprimer le dernier degré de liberté. La ligne est alors considérée comme **entièrement contrainte**.

Les objets peuvent être contraints les uns par rapport aux autres. Deux lignes peuvent être reliées par l'un de leurs points grâce à la contrainte de coïncidence des points. Un angle peut être défini entre elles ou elles peuvent être perpendiculaires. Une ligne peut être tangente à un arc ou à un cercle, etc. Une esquisse complexe comportant plusieurs objets peut avoir un certain nombre de solutions différentes, et le fait de la rendre **entièrement contrainte** peut signifier qu'une seule de ces possibles solutions a été atteinte sur la base des contraintes appliquées.

Il existe deux types de contraintes : géométriques et dimensionnelles. Elles sont détaillées dans la section [Les outils](#Les_outils) ci-dessous.

### Modifier les contraintes

Lorsqu'une [contrainte pilotante de dimension](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") est créée, et si la [préférence](/Sketcher_Preferences/fr#Affichage "Sketcher Preferences/fr") **Demander la valeur après la création d'une contrainte de dimension** est sélectionnée (par défaut), une boîte de dialogue s'ouvre pour modifier sa valeur.

![Sketcher_Edit_Constraint.png](/images/Sketcher_Edit_Constraint.png)

Vous pouvez saisir une valeur numérique ou une [expression](/Expressions/fr "Expressions/fr"), et il est possible de nommer la contrainte pour faciliter son utilisation dans d'autres expressions. Vous pouvez également cocher la case **Référence** pour faire basculer la contrainte en [mode référence](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr").

Pour modifier la valeur d'une contrainte existante de dimension, procédez comme suit :

- Double-cliquez sur la valeur de la contrainte dans la [vue 3D](/3D_view/fr "3D view/fr").
- Double-cliquez sur la contrainte dans la [fenêtre de dialogue](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
- Cliquez avec le bouton droit de la souris sur la contrainte dans la fenêtre de dialogue de l'esquisse et sélectionnez l'option **Changer la valeur** du menu contextuel.

### Repositionner les contraintes

Les contraintes de dimension peuvent être repositionnées dans la vue 3D en les faisant glisser. Maintenez le bouton gauche de la souris enfoncé sur la valeur de la contrainte et déplacez la souris. Les symboles des contraintes géométriques sont positionnés automatiquement et ne peuvent pas être déplacés.

## Esquisses de profil

Pour créer une esquisse qui peut être utilisée comme profil pour générer des solides, certaines règles doivent être respectées :

- L'esquisse ne doit contenir que des contours fermés. Les espaces entre les extrémités, aussi petits soient-ils, ne sont pas autorisés.
- Les contours peuvent être imbriqués pour créer des vides, mais ils ne doivent pas s'auto-intersecter ou croiser d'autres contours.
- Les contours ne peuvent pas partager d'arêtes avec d'autres contours. Les arêtes en double doivent être évitées.
- Les connexions en T, c'est-à-dire plus de deux arêtes partageant un point commun ou un point touchant une arête, ne sont pas autorisées.

Ces règles ne s'appliquent pas à la géométrie de construction (couleur bleue par défaut), qui n'est pas affichée en dehors du mode édition, ou si l'esquisse est utilisée à d'autres fins. D'autres restrictions peuvent s'appliquer en fonction de l'atelier et de l'outil qui utilisera l'esquisse de profil.

## Aides au dessin

L'atelier Sketcher dispose de plusieurs aides au dessin et d'autres fonctions qui peuvent aider à créer des géométries et à appliquer des contraintes.

### Modes continus

Il existe deux modes continus : **Création de géométrie en mode continu** et **Création de contraintes en mode continu**. Si ces modes sont cochés (par défaut) dans les [préférences](/Sketcher_Preferences/fr#Affichage "Sketcher Preferences/fr"), les outils associés redémarreront après avoir été arrêtés. Pour quitter un outil en mode continu, appuyez sur Échap ou sur le bouton droit de la souris. Cette opération doit être répétée si un outil géométrique continu a déjà été saisi. Vous pouvez également quitter un outil continu en démarrant un autre outil de création de géométrie ou de contrainte. Notez qu'en appuyant sur Échap, si aucun outil n'est actif, vous quitterez le mode d'édition d'esquisse. Décochez la [préférence](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr") **Échap permet de quitter l'esquisse en édition** si vous appuyez souvent par inadvertance sur Échap trop de fois.

### Contraintes automatiques

Dans les esquisses pour lesquelles la case **Contraintes automatiques** est cochée (par défaut), plusieurs contraintes sont appliquées automatiquement. L'icône d'une contrainte automatique proposée s'affiche à côté du curseur lorsqu'elle est placée correctement. Un clic gauche permet alors d'appliquer cette contrainte. Il s'agit d'un paramètre par esquisse qui peut être modifié dans la [fenêtre de dialogue](/Sketcher_Dialog/fr#Contraintes "Sketcher Dialog/fr") ou en modifiant la [propriété](/Property_editor/fr "Property editor/fr") Vue**Autoconstraints** de l'esquisse.

Les contraintes suivantes sont appliquées automatiquement :

- [Coincidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr")
- [Point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr")
- [Horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr")
- [Verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr")
- [Tangence](/Sketcher_ConstrainTangent/fr "Sketcher ConstrainTangent/fr")
- [introduit dans la version 0.22](/Release_notes_0.22/fr "Release notes 0.22/fr") : [Symétrie](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr") (point milieu de la ligne)

### Aimantation

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

Il est possible d'[aimanter](/Sketcher_Snap/fr "Sketcher Snap/fr") aux lignes de la grille et aux intersections de la grille, aux arêtes de géométrie et aux points médians des segments et des arcs, ainsi que sur certains angles. Veuillez noter que l'aimantation ne produit pas de contraintes en soi. Par exemple, ce n'est que si [Contraintes automatiques](#Contraintes_automatiques) est activé que l'aimantation à une arête produira une [contrainte Point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr"). Mais le simple fait de choisir un point sur l'arête aurait le même résultat.

### Paramètres d'affichage

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Selon l'option sélectionnée dans les [préférences](/Sketcher_Preferences/fr#Général "Sketcher Preferences/fr"), seuls les paramètres d'affichage de dimension ou les paramètres d'affichage de dimension et de position peuvent être activés. Les paramètres de position permettent de saisir des coordonnées exactes, par exemple le centre d'un cercle ou le point de départ d'une ligne. Les paramètres de dimension permettent de saisir des dimensions exactes, par exemple le rayon d'un cercle ou la longueur et l'angle d'une ligne. Les paramètres d'affichage ne sont pas disponibles pour tous les outils.

![](/images/Sketcher_On_view_parameters_positional.png)

Détermination du point central d'un cercle avec les paramètres de position activés

![](/images/Sketcher_On_view_parameters_dimensional.png)

Détermination du rayon d'un cercle avec les paramètres de dimension activés

Si des valeurs sont saisies et confirmées en appuyant sur Entrée ou Tabulation, les contraintes correspondantes sont ajoutées automatiquement. Si deux paramètres sont affichés en même temps, par exemple les coordonnées X et Y d'un point, il est possible de saisir une valeur et de choisir un point pour définir l'autre. En fonction de l'objet, des contraintes supplémentaires peuvent être nécessaires pour le contraindre complètement. Les contraintes résultant des paramètres d'affichage sont prioritaires sur celles qui peuvent résulter des [contraintes automatiques](/Sketcher_Dialog/fr#Contraintes "Sketcher Dialog/fr").

![](/images/Sketcher_ArcExample3.png)

Arc créé en saisissant tous les paramètres d'affichage avec les contraintes créées automatiquement qui en résultent

### Affichage des coordonnées

Si la [préférence](/Sketcher_Preferences/fr#Affichage "Sketcher Preferences/fr") **Afficher les coordonnées à côté du curseur lors de l'édition** est cochée (par défaut), les paramètres de l'outil géométrique en cours (coordonnées, rayon ou longueur et angle) sont affichés à côté du curseur. Cette option est désactivée lorsque les paramètres d'affichage sont affichés.

## Méthodes de sélection

Lorsqu'une esquisse est en mode édition, les méthodes de sélection suivantes peuvent être utilisées :

### Sélection des éléments dans la vue 3D

Comme partout ailleurs dans FreeCAD, un élément peut être sélectionné dans la [vue 3D](/3D_view/fr "3D view/fr") avec un simple clic gauche de la souris. Mais il n'est pas nécessaire de maintenir la touche Ctrl pour sélectionner plusieurs éléments. Il est toutefois possible de maintenir cette touche enfoncée, ce qui présente l'avantage de pouvoir faire un mauvais clic sans perdre la sélection. Les arêtes, les points et les contraintes peuvent être sélectionnés de cette manière.

### Sélection par une boîte dans la vue 3D

La sélection par boîte dans la vue 3D fonctionne sans utiliser [Std Sélection par boîte](/Std_BoxSelection/fr "Std BoxSelection/fr") ou [Std Sélection d'éléments par boîte](/Std_BoxElementSelection/fr "Std BoxElementSelection/fr") :

1. Assurez-vous qu'aucun outil n'est actif.
2. Faites l'une des choses suivantes :
   - Cliquez dans une zone vide et faites glisser un rectangle de gauche à droite pour sélectionner les éléments qui se trouvent entièrement à l'intérieur du rectangle.
   - Cliquez dans une zone vide et faites glisser un rectangle de droite à gauche pour sélectionner également les éléments qui touchent ou traversent le rectangle.

Vous pouvez sélectionner des arêtes et des points par boîte mais les contraintes ne peuvent pas être sélectionnées par une boîte.

### Sélection de la géométrie connectée dans la vue 3D

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Un double-clic sur une arête dans la vue 3D sélectionnera toutes les arêtes directement et indirectement connectées à cette arête via ses extrémités. Il n'est pas nécessaire que les arêtes soient reliées par des [contraintes de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr"), il suffit que les extrémités aient les mêmes coordonnées.

### Fenêtre de dialogue de Sketcher

Les arêtes et les points peuvent également être sélectionnés à partir de la section Éléments de la [fenêtre de dialogue de Sketcher](/Sketcher_Dialog/fr "Sketcher Dialog/fr") et les contraintes à partir de la section Contraintes de cette même fenêtre de dialogue.

## Copier, couper et coller

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Les raccourcis clavier standard, Ctrl+C, Ctrl+X et Ctrl+V, peuvent être utilisés pour copier, couper et coller une géométrie sélectionnée, y compris les contraintes associées. Mais ces outils sont également disponibles dans le menu **Esquisse → Outils d'esquisse**. Ils peuvent être utilisés au sein d'une même esquisse, mais aussi entre différentes esquisses ou instances distinctes de FreeCAD. Comme les données sont copiées dans le presse-papiers sous forme de code Python, elles peuvent également être utilisées d'autres manières (par exemple, partagées sur le forum).

## Les outils

Les outils de l'atelier Sketcher se trouvent dans le menu Esquisse et/ou dans plusieurs barres d'outils. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") : la majorité des barres d'outils de Sketcher ne s'affichent que lorsqu'une esquisse est en mode édition. La seule exception est la [barre d'outils de Sketcher](#Barre_d'outils_de_Sketcher) est la seule à s'afficher si aucune esquisse n'est en mode édition.

Certains outils sont également disponibles dans le menu contextuel de le [vue 3D](/3D_view/fr "3D view/fr") lorsqu'une esquisse est en mode édition, ou dans les menus contextuels de la [boîte de dialogue](/Sketcher_Dialog/fr "Sketcher Dialog/fr").

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") : si une esquisse est en mode édition, la barre d'outils Structure est cachée car aucun de ses outils ne peut être utilisé.

### Généralités

#### Barre d'outils de Sketcher

- ![](/images/Sketcher_NewSketch.svg) [Créer une esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") : crée une nouvelle esquisse et ouvre la [fenêtre de dialogue](/Sketcher_Dialog/fr "Sketcher Dialog/fr") pour la modifier.

- ![](/images/Sketcher_EditSketch.svg) [Modifier une esquisse](/Sketcher_EditSketch/fr "Sketcher EditSketch/fr") : ouvre la fenêtre de dialogue pour modifier une esquisse existante.

- ![](/images/Sketcher_MapSketch.svg) [Ancrer une esquisse](/Sketcher_MapSketch/fr "Sketcher MapSketch/fr") : ancre une esquisse à la géométrie sélectionnée.

- ![](/images/Sketcher_ReorientSketch.svg) [Réorienter une esquisse](/Sketcher_ReorientSketch/fr "Sketcher ReorientSketch/fr") : place une esquisse sur l'un des plans principaux avec un décalage en option. Cela peut également être utilisé pour détacher une esquisse.

- ![](/images/Sketcher_ValidateSketch.svg) [Valider une esquisse](/Sketcher_ValidateSketch/fr "Sketcher ValidateSketch/fr") : peut analyser et réparer une esquisse qui n'est plus modifiable ou qui présente des contraintes non valides, ou ajouter des contraintes coïncidentes manquantes.

- ![](/images/Sketcher_MergeSketches.svg) [Fusionner des esquisses](/Sketcher_MergeSketches/fr "Sketcher MergeSketches/fr") : fusionne deux ou plusieurs esquisses.

- ![](/images/Sketcher_MirrorSketch.svg) [Esquisse miroir](/Sketcher_MirrorSketch/fr "Sketcher MirrorSketch/fr") : met en miroir les esquisses par rapport à leur axe X, axe Y ou à leur origine.

#### Barre d'outils du mode édition de Sketcher

- ![](/images/Sketcher_LeaveSketch.svg) [Quitter l'esquisse](/Sketcher_LeaveSketch/fr "Sketcher LeaveSketch/fr") : quitte le mode d'édition de l'esquisse et ferme la [fenêtre de dialogue de Sketcher](/Sketcher_Dialog/fr "Sketcher Dialog/fr").

- ![](/images/Sketcher_ViewSketch.svg) [Vue de l'esquisse](/Sketcher_ViewSketch/fr "Sketcher ViewSketch/fr") : aligne la [vue 3D](/3D_view/fr "3D view/fr") avec le plan de l'esquisse.

- ![](/images/Sketcher_ViewSection.svg) [Vue en coupe](/Sketcher_ViewSection/fr "Sketcher ViewSection/fr") : permet d'activer/désactiver un plan de coupe temporaire qui masque tous les objets et parties d'objets devant le plan d'esquisse.

#### Barre d'outils des outils d'édition de Sketcher

- ![](/images/Sketcher_Grid.svg) [Grille](/Sketcher_Grid/fr "Sketcher Grid/fr") : active/désactive la grille dans l'esquisse en cours d'édition. Les paramètres peuvent être modifiés dans le menu correspondant. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/Sketcher_Snap.svg) [Aimantation](/Sketcher_Snap/fr "Sketcher Snap/fr") : active/désactive l'aimantation dans toutes les esquisses. Les paramètres peuvent être modifiés dans le menu correspondant. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/Sketcher_RenderingOrder.svg) [Ordre de rendu](/Sketcher_RenderingOrder/fr "Sketcher RenderingOrder/fr") : l'ordre de rendu de toutes les esquisses peut être modifié dans le menu correspondant. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

#### Autres

- ![](/images/Sketcher_StopOperation.svg) [Arrêt de l'opération](/Sketcher_StopOperation/fr "Sketcher StopOperation/fr") : arrête tout outil de création de géométrie ou de contrainte en cours d'exécution.

### Géométries d'esquisse

Ces outils permettent de créer des objets.

- ![](/images/Sketcher_CreatePoint.svg) [Point](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr") : crée un point.

- ![](/images/Sketcher_CreatePolyline.svg) [Polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr") : crée une série de segments de lignes et d'arcs reliés par leurs extrémités. L'outil dispose de plusieurs modes.

- ![](/images/Sketcher_CreateLine.svg) [Ligne](/Sketcher_CreateLine/fr "Sketcher CreateLine/fr") : crée une ligne. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil a trois modes.

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer un arc :

- ![](/images/Sketcher_CreateArc.svg) [Arc](/Sketcher_CreateArc/fr "Sketcher CreateArc/fr") : crée un arc par son centre et ses extrémités. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : ou par ses extrémités et un point de l'arc.

- ![](/images/Sketcher_Create3PointArc.svg) [Arc par 3 points](/Sketcher_Create3PointArc/fr "Sketcher Create3PointArc/fr") : crée un arc par ses extrémités et un point de l'arc. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : il s'agit du même outil que [Arc](/Sketcher_CreateArc/fr "Sketcher CreateArc/fr") mais avec un mode initial différent.

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Arc d'ellipse](/Sketcher_CreateArcOfEllipse/fr "Sketcher CreateArcOfEllipse/fr") : crée un arc d'ellipse.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Arc d'hyperbole](/Sketcher_CreateArcOfHyperbola/fr "Sketcher CreateArcOfHyperbola/fr") : crée un arc d'hyperbole.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Arc de parabole](/Sketcher_CreateArcOfParabola/fr "Sketcher CreateArcOfParabola/fr") : crée un arc de parabole.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer un cercle/une ellipse :

- ![](/images/Sketcher_CreateCircle.svg) [Cercle](/Sketcher_CreateCircle/fr "Sketcher CreateCircle/fr") : crée un cercle par son centre et un point de la circonférence. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : ou par trois points de la circonférence.

- ![](/images/Sketcher_Create3PointCircle.svg) [Cercle par 3 points](/Sketcher_Create3PointCircle/fr "Sketcher Create3PointCircle/fr") : crée un cercle à partir de trois points de la circonférence. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : il s'agit du même outil que [Cercle](/Sketcher_CreateCircle/fr "Sketcher CreateCircle/fr") mais avec un mode initial différent.

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Ellipse par son centre](/Sketcher_CreateEllipseByCenter/fr "Sketcher CreateEllipseByCenter/fr") : crée une ellipse par son centre, une des extrémités de l'un de ses axes et un point de l'ellipse. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : ou par les deux extrémités d'un de ses axes et un point de l'ellipse.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Ellipse par 3 points](/Sketcher_CreateEllipseBy3Points/fr "Sketcher CreateEllipseBy3Points/fr") : crée une ellipse à partir des extrémités de l'un de ses axes et d'un point de l'ellipse. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : Il s'agit du même outil que [Ellipse](/Sketcher_CreateEllipseByCenter/fr "Sketcher CreateEllipseByCenter/fr") mais avec un mode initial différent.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer un rectangle :

- ![](/images/Sketcher_CreateRectangle.svg) [Rectangle](/Sketcher_CreateRectangle/fr "Sketcher CreateRectangle/fr") : crée un rectangle. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil dispose de quatre modes. Les coins arrondis et la création d'une copie décalée sont des fonctions optionnelles.

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Rectangle centré](/Sketcher_CreateRectangle_Center/fr "Sketcher CreateRectangle Center/fr") : crée un rectangle centré. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : il s'agit du même outil que [Rectangle](/Sketcher_CreateRectangle/fr "Sketcher CreateRectangle/fr") mais avec un mode initial différent.

- ![](/images/Sketcher_CreateOblong.svg) [Rectangle arrondi](/Sketcher_CreateOblong/fr "Sketcher CreateOblong/fr") : crée un rectangle arrondi. Idem.

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer un polygone régulier :

- ![](/images/Sketcher_CreateTriangle.svg) [Triangle équilatéral](/Sketcher_CreateTriangle/fr "Sketcher CreateTriangle/fr") : crée un triangle équilatéral. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : il s'agit du même outil que [Polygone régulier](/Sketcher_CreateRegularPolygon/fr "Sketcher CreateRegularPolygon/fr") mais le nombre de côtés est prédéfini à une valeur spécifique.

- ![](/images/Sketcher_CreateSquare.svg) [Carré](/Sketcher_CreateSquare/fr "Sketcher CreateSquare/fr") : crée un carré. Idem.

- ![](/images/Sketcher_CreatePentagon.svg) [Pentagone](/Sketcher_CreatePentagon/fr "Sketcher CreatePentagon/fr") : crée un pentagone. Idem.

- ![](/images/Sketcher_CreateHexagon.svg) [Hexagone](/Sketcher_CreateHexagon/fr "Sketcher CreateHexagon/fr") : crée un hexagone. Idem.

- ![](/images/Sketcher_CreateHeptagon.svg) [Heptagone](/Sketcher_CreateHeptagon/fr "Sketcher CreateHeptagon/fr") : crée un heptagone. Idem.

- ![](/images/Sketcher_CreateOctagon.svg) [Octogone](/Sketcher_CreateOctagon/fr "Sketcher CreateOctagon/fr") : crée un octogone. Idem.

- ![](/images/Sketcher_CreateRegularPolygon.svg) [Polygone régulier](/Sketcher_CompCreateRegularPolygon/fr "Sketcher CompCreateRegularPolygon/fr") : crée un polygone régulier. Le nombre de côtés peut être spécifié.

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer un contour oblong :

- ![](/images/Sketcher_CreateSlot.svg) [Contour oblong](/Sketcher_CreateSlot/fr "Sketcher CreateSlot/fr") : crée un contour oblong.

- ![](/images/Sketcher_CreateArcSlot.svg) [Rainure en arc](/Sketcher_CreateArcSlot/fr "Sketcher CreateArcSlot/fr") : crée une rainure en arc. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer une B-spline :

- ![](/images/Sketcher_CreateBSpline.svg) [B-spline simple](/Sketcher_CreateBSpline/fr "Sketcher CreateBSpline/fr") : crée une B-spline par des points de contrôle. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : ou par des points de nœuds.

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [B-spline périodique](/Sketcher_CreatePeriodicBSpline/fr "Sketcher CreatePeriodicBSpline/fr") : crée une B-spline périodique (fermée) par des points de contrôle. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : c'est le même outil que [B-spline des points de contrôle](/Sketcher_CreateBSpline/fr "Sketcher CreateBSpline/fr") mais avec un mode initial différent.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [B-spline par des nœuds](/Sketcher_CreateBSplineByInterpolation/fr "Sketcher CreateBSplineByInterpolation/fr") : crée une B-spline par des nœuds. Idem.

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [B-spline périodique par des nœuds](/Sketcher_CreatePeriodicBSplineByInterpolation/fr "Sketcher CreatePeriodicBSplineByInterpolation/fr") : crée une B-spline périodique (fermée) par des nœuds. Idem.

- ![](/images/Sketcher_ToggleConstruction.svg) [Géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr") : permet de faire basculer les outils de création de géométrie en mode construction ou de faire basculer la géométrie sélectionnée en mode construction.

### Contraintes d'esquisse

Il s'agit d'outils permettant de créer des [contraintes](#Contraintes). Certaines contraintes nécessitent l'utilisation de [contraintes d'assistance](/Sketcher_helper_constraint/fr "Sketcher helper constraint/fr").

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Contraintes de dimension :

- ![](/images/Sketcher_Dimension.svg) [Dimension](/Sketcher_Dimension/fr "Sketcher Dimension/fr") : il s'agit de l'outil de contrainte contextuelle de l'atelier Sketcher. En fonction de la sélection en cours, il propose des contraintes appropriées de dimension mais aussi des contraintes géométriques. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Sketcher_ConstrainDistanceX.svg) [Distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") : fixe la distance horizontale entre deux points ou les extrémités d'une ligne. Si un seul point est présélectionné, la distance est relative à l'origine de l'esquisse.

- ![](/images/Sketcher_ConstrainDistanceY.svg) [Distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") : fixe la distance verticale entre deux points ou les extrémités d'une ligne. Si un seul point est présélectionné, la distance est relative à l'origine de l'esquisse.

- ![](/images/Sketcher_ConstrainDistance.svg) [Distance](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr") : fixe la longueur d'une ligne, la distance entre deux points, la distance perpendiculaire entre un point et une ligne. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr"), la distance entre les arêtes de deux cercles ou arcs, ou entre l'arête d'un cercle ou d'un arc et une ligne. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr"), la longueur d'un arc.

- ![](/images/Sketcher_ConstrainRadiam.svg) [Rayon automatique](/Sketcher_ConstrainRadiam/fr "Sketcher ConstrainRadiam/fr") : fixe le rayon des arcs et des cercles des poids des B-splines ainsi que le diamètre des cercles.

- ![](/images/Sketcher_ConstrainRadius.svg) [Rayon ou poids](/Sketcher_ConstrainRadius/fr "Sketcher ConstrainRadius/fr") : fixe le rayon des cercles, des arcs et des cercles des poids des B-splines.

- ![](/images/Sketcher_ConstrainDiameter.svg) [Diamètre](/Sketcher_ConstrainDiameter/fr "Sketcher ConstrainDiameter/fr") : fixe le diamètre des cercles et des arcs.

- ![](/images/Sketcher_ConstrainAngle.svg) [Angle](/Sketcher_ConstrainAngle/fr "Sketcher ConstrainAngle/fr") : fixe l'angle entre deux arêtes, l'angle d'une ligne avec l'axe horizontal de l'esquisse ou l'angle d'ouverture d'un arc de cercle.

- ![](/images/Sketcher_ConstrainLock.svg) [Fixe](/Sketcher_ConstrainLock/fr "Sketcher ConstrainLock/fr") : Applique les contraintes de [Distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") et [Distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr") aux points. Si un seul point est sélectionné, les contraintes font référence à l'origine de l'esquisse. Si deux points ou plus sont sélectionnés, les contraintes font référence au dernier point de la sélection.

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Coïncidence (unifiée)](/Sketcher_ConstrainCoincidentUnified/fr "Sketcher ConstrainCoincidentUnified/fr") : crée une contrainte de coïncidence entre des points, fixe des points sur des arêtes ou des axes, ou crée une contrainte concentrique. Il combine les outils de [coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") et [point sur objet](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"). [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") : crée une contrainte de coïncidence entre des points ou une contrainte concentrique.

- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") : fixe des points sur des arêtes ou des axes.

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Contrainte horizontale/verticale :

- ![](/images/Sketcher_ConstrainHorVer.svg) [Horizontal/vertical](/Sketcher_ConstrainHorVer/fr "Sketcher ConstrainHorVer/fr") : contraint les lignes ou les paires de points à être horizontales ou verticales, selon ce qui est le plus proche de l'alignement actuel. L'outil combine les outils de [contrainte horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr") et [contrainte verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr"). [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr") : contraint les lignes ou les paires de points à être horizontales.

- ![](/images/Sketcher_ConstrainVertical.svg) [Vertical](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr") : contraint les lignes ou les paires de points à être verticales.

- ![](/images/Sketcher_ConstrainParallel.svg) [Parallèle](/Sketcher_ConstrainParallel/fr "Sketcher ConstrainParallel/fr") : contraint les lignes à être parallèles.

- ![](/images/Sketcher_ConstrainPerpendicular.svg) [Perpendiculaire](/Sketcher_ConstrainPerpendicular/fr "Sketcher ConstrainPerpendicular/fr") : contraint deux lignes à être perpendiculaires, ou deux arêtes, ou une arête et un axe, à être perpendiculaires à leur intersection. La contrainte peut également relier deux arêtes, les obligeant à être perpendiculaires au niveau de la jonction.

- ![](/images/Sketcher_ConstrainTangent.svg) [Tangente](/Sketcher_ConstrainTangent/fr "Sketcher ConstrainTangent/fr") : contraint deux arêtes, ou une arête et un axe, à être tangentes. La contrainte peut également relier deux arêtes, les obligeant à être tangentes au niveau de la jonction. Si deux lignes sont sélectionnées, elles deviennent colinéaires.

- ![](/images/Sketcher_ConstrainEqual.svg) [Égalité](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr") : contraint les arêtes à avoir la même longueur (lignes) ou la même courbure (autres arêtes sauf B-splines).

- ![](/images/Sketcher_ConstrainSymmetric.svg) [Symétrie](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr") : contraint deux points à être symétriques par rapport à une ligne ou un axe, ou par rapport à un troisième point.

- ![](/images/Sketcher_ConstrainBlock.svg) [Blocage](/Sketcher_ConstrainBlock/fr "Sketcher ConstrainBlock/fr") : bloque les arêtes en place avec une seule contrainte. Il est principalement destiné aux B-splines.

- ![](/images/Sketcher_ConstrainSnellsLaw.svg) [Contrainte de réfraction](/Sketcher_ConstrainSnellsLaw/fr "Sketcher ConstrainSnellsLaw/fr") : contraint deux lignes à suivre la loi de réfraction de la lumière lorsqu'elle pénètre à travers une interface.

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Activer/désactiver les contraintes pilotantes/pilotées :

- ![](/images/Sketcher_ToggleDrivingConstraint.svg) [Contraintes pilotantes](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr") : active/désactive les outils de création de contraintes de dimension entre le mode pilotant et le mode piloté, ou fait basculer les contraintes de dimension sélectionnées entre ces modes.

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Activer les contraintes](/Sketcher_ToggleActiveConstraint/fr "Sketcher ToggleActiveConstraint/fr") : active ou désactive les contraintes sélectionnées.

### Outils d'esquisse

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer un congé/chanfrein :

- ![](/images/Sketcher_CreateFillet.svg) [Congé](/Sketcher_CreateFillet/fr "Sketcher CreateFillet/fr") : crée un congé entre deux arêtes non parallèles. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil peut également créer un chanfrein.

- ![](/images/Sketcher_CreateChamfer.svg) [Chanfrein](/Sketcher_CreateChamfer/fr "Sketcher CreateChamfer/fr") : crée un chanfrein entre deux arêtes non parallèles. Il s'agit du même outil que [Congé](/Sketcher_CreateFillet/fr "Sketcher CreateFillet/fr") mais avec un mode initial différent. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Ajuster une arête :

- ![](/images/Sketcher_Trimming.svg) [Ajuster](/Sketcher_Trimming/fr "Sketcher Trimming/fr") : ajuste une arête aux intersections les plus proches avec d'autres arêtes.

- ![](/images/Sketcher_Split.svg) [Diviser](/Sketcher_Split/fr "Sketcher Split/fr") : divise une arête tout en transférant la plupart des contraintes.

- ![](/images/Sketcher_Extend.svg) [Prolonger](/Sketcher_Extend/fr "Sketcher Extend/fr") : prolonge ou raccourcit une ligne ou un arc jusqu'à un emplacement arbitraire, ou jusqu'à une arête ou un point cible.

- ![](/images/Sketcher_External.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr") : projette sur le plan de l'esquisse des arêtes et/ou des sommets appartenant à des objets situés en dehors de l'esquisse. version 1.0 et précédentes

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Géométrie externe :

- ![](/images/Sketcher_Projection.svg) [Projection](/Sketcher_Projection/fr "Sketcher Projection/fr") : crée les arêtes de projection de la géométrie externe. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

- ![](/images/Sketcher_Intersection.svg) [Intersection](/Sketcher_Intersection/fr "Sketcher Intersection/fr") : crée les arêtes d'intersection de la géométrie externe avec le plan de l'esquisse. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

- ![](/images/Sketcher_CarbonCopy.svg) [Copie carbone](/Sketcher_CarbonCopy/fr "Sketcher CarbonCopy/fr") : copie toutes les géométries et contraintes d'une autre esquisse dans l'esquisse active.

- ![](/images/Sketcher_SelectOrigin.svg) [Selectionner l'origine](/Sketcher_SelectOrigin/fr "Sketcher SelectOrigin/fr") : sélectionne l'origine de l'esquisse.

- ![](/images/Sketcher_SelectHorizontalAxis.svg) [Axe horizontal](/Sketcher_SelectHorizontalAxis/fr "Sketcher SelectHorizontalAxis/fr") : sélectionne l'axe horizontal de l'esquisse.

- ![](/images/Sketcher_SelectVerticalAxis.svg) [Axe vertical](/Sketcher_SelectVerticalAxis/fr "Sketcher SelectVerticalAxis/fr") : sélectionne l'axe vertical de l'esquisse.

- ![](/images/Sketcher_Translate.svg) [Déplacer/dupliquer](/Sketcher_Translate/fr "Sketcher Translate/fr") : déplace ou permet de créer des copies des éléments sélectionnés. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Sketcher_Rotate.svg) [Pivoter/dupliquer](/Sketcher_Rotate/fr "Sketcher Rotate/fr") : fait pivoter ou permet de créer des copies pivotées des éléments sélectionnés. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Sketcher_Scale.svg) [Mise à l'échelle](/Sketcher_Scale/fr "Sketcher Scale/fr"): met à l'échelle ou permet de créer des copies mises à l'échelle des éléments sélectionnés. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Sketcher_Offset.svg) [Décaler une géométrie](/Sketcher_Offset/fr "Sketcher Offset/fr") : crée des arêtes équidistantes autour d'arêtes sélectionnés. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Sketcher_Symmetry.svg) [Symétriser](/Sketcher_Symmetry/fr "Sketcher Symmetry/fr") : crée des copies de manière symétrique des éléments sélectionnés.

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Supprimer l'alignement des axes](/Sketcher_RemoveAxesAlignment/fr "Sketcher RemoveAxesAlignment/fr") : supprime l'alignement des axes des arêtes sélectionnées en remplaçant les contraintes [horizontales](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr") et [verticales](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr") par des contraintes [parallèles](/Sketcher_ConstrainParallel/fr "Sketcher ConstrainParallel/fr") et [perpendiculaires](/Sketcher_ConstrainPerpendicular/fr "Sketcher ConstrainPerpendicular/fr").

- ![](/images/Sketcher_DeleteAllGeometry.svg) [Supprimer tous les éléments de géométrie](/Sketcher_DeleteAllGeometry/fr "Sketcher DeleteAllGeometry/fr") : supprime toute la géométrie et toutes les contraintes de l'esquisse.

- ![](/images/Sketcher_DeleteAllConstraints.svg) [Supprimer toutes les contraintes](/Sketcher_DeleteAllConstraints/fr "Sketcher DeleteAllConstraints/fr") : supprime toutes les contraintes de l'esquisse.

- ![](/images/Edit-copy.svg) Copier dans Sketcher : voir [Copier, couper et coller](#Copier,_couper_et_coller).

- ![](/images/Edit-copy.svg) Couper dans Sketcher : voir [Copier, couper et coller](#Copier,_couper_et_coller).

- ![](/images/Edit-copy.svg) Coller dans Sketcher : voir [Copier, couper et coller](#Copier,_couper_et_coller).

### Outils d'esquisse des B-splines

- ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Convertir une géométrie en B-splines](/Sketcher_BSplineConvertToNURBS/fr "Sketcher BSplineConvertToNURBS/fr") : convertit les arêtes en B-splines.

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Augmenter le degré](/Sketcher_BSplineIncreaseDegree/fr "Sketcher BSplineIncreaseDegree/fr") : augmente le degré (l'ordre) des B-splines.

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Diminuer le degré](/Sketcher_BSplineDecreaseDegree/fr "Sketcher BSplineDecreaseDegree/fr") : diminue le degré (l'ordre) des B-splines.

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Augmenter la multiplicité des nœuds](/Sketcher_BSplineIncreaseKnotMultiplicity/fr "Sketcher BSplineIncreaseKnotMultiplicity/fr") : augmente la multiplicité d'un nœud d'une B-spline.

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Diminuer la multiplicité des nœuds](/Sketcher_BSplineDecreaseKnotMultiplicity/fr "Sketcher BSplineDecreaseKnotMultiplicity/fr") : diminue la multiplicité d'un nœud d'une B-spline.

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Insérer un nœud](/Sketcher_BSplineInsertKnot/fr "Sketcher BSplineInsertKnot/fr") : insère un nœud dans une B-spline ou augmente la multiplicité d'un nœud existant.

- ![](/images/Sketcher_JoinCurves.svg) [Joindre des courbes](/Sketcher_JoinCurves/fr "Sketcher JoinCurves/fr") : crée une B-spline en joignant deux B-splines existantes ou d'autres arêtes. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

### Affichage

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Degrés de liberté non contraints](/Sketcher_SelectElementsWithDoFs/fr "Sketcher SelectElementsWithDoFs/fr") : sélectionne les éléments non entièrement contraints dans l'esquisse.

- ![](/images/Sketcher_SelectConstraints.svg) [Contraintes associées](/Sketcher_SelectConstraints/fr "Sketcher SelectConstraints/fr") : sélectionne les contraintes associées aux éléments de l'esquisse.

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.svg) [Éléments associés aux contraintes](/Sketcher_SelectElementsAssociatedWithConstraints/fr "Sketcher SelectElementsAssociatedWithConstraints/fr") : sélectionne les éléments de l'esquisse associés aux contraintes.

- ![](/images/Sketcher_SelectRedundantConstraints.svg) [Contraintes redondantes](/Sketcher_SelectRedundantConstraints/fr "Sketcher SelectRedundantConstraints/fr") : sélectionne les contraintes redondantes dans l'esquisse.

- ![](/images/Sketcher_SelectConflictingConstraints.svg) [Contraintes conflictuelles](/Sketcher_SelectConflictingConstraints/fr "Sketcher SelectConflictingConstraints/fr") : sélectionne les contraintes conflictuelles de l'esquisse.

- ![](/images/Sketcher_ArcOverlay.svg) [Cercle auxiliaire pour les arcs](/Sketcher_ArcOverlay/fr "Sketcher ArcOverlay/fr") : affiche ou masque les aides circulaires (cercles virtuels sous-jacents) pour les arcs dans toutes les esquisses. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Afficher/masquer les informations d'une B-spline :

- ![](/images/Sketcher_BSplineDegree.svg) [Degré de la B-spline](/Sketcher_BSplineDegree/fr "Sketcher BSplineDegree/fr") : affiche ou masque le degré des B-splines dans toutes les esquisses.

- ![](/images/Sketcher_BSplinePolygon.svg) [Polygone de contrôle](/Sketcher_BSplinePolygon/fr "Sketcher BSplinePolygon/fr") : affiche ou masque le polygone de contrôle des B-splines dans toutes les esquisses.

- ![](/images/Sketcher_BSplineComb.svg) [Peigne de courbure](/Sketcher_BSplineComb/fr "Sketcher BSplineComb/fr") : affiche ou masque le peigne de courbure des B-splines dans toutes les esquisses.

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Multiplicité des nœuds](/Sketcher_BSplineKnotMultiplicity/fr "Sketcher BSplineKnotMultiplicity/fr") : affiche ou masque la multiplicité des nœuds des B-splines dans toutes les esquisses.

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Poids des points de contrôle](/Sketcher_BSplinePoleWeight/fr "Sketcher BSplinePoleWeight/fr") : affiche ou masque le poids des points de contrôle des B-splines dans toutes les esquisses.

- ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Géométrie interne d'alignement](/Sketcher_RestoreInternalAlignmentGeometry/fr "Sketcher RestoreInternalAlignmentGeometry/fr") : supprime la géométrie interne des éléments ou recrée la géométrie interne manquante.

- ![](/images/Sketcher_SwitchVirtualSpace.svg) [Espace virtuel](/Sketcher_SwitchVirtualSpace/fr "Sketcher SwitchVirtualSpace/fr") : masque/démasque les contraintes ou active/désactive l'espace virtuel visible.

### Outils obsolète

- ![](/images/Sketcher_Clone.svg) [Cloner](/Sketcher_Clone/fr "Sketcher Clone/fr") : clone un élément. Non disponible dans version 1.0 et suivantes.

- ![](/images/Sketcher_CloseShape.svg) [Fermer la forme](/Sketcher_CloseShape/fr "Sketcher CloseShape/fr") : ferme une forme en appliquant des contraintes coïncidentes aux points d'arrivée. Non disponible dans la (version 0.21 et suivantes).

- ![](/images/Sketcher_CreatePointFillet.svg) [Congé avec contrainte](/Sketcher_CreatePointFillet/fr "Sketcher CreatePointFillet/fr") : crée un congé entre deux lignes non parallèles tout en préservant leur point d'angle. Non disponible dans version 1.0 et suivantes.

- ![](/images/Sketcher_ConnectLines.svg) [Connecter les côtés](/Sketcher_ConnectLines/fr "Sketcher ConnectLines/fr") : connecte les éléments en appliquant des contraintes de coïncidence aux points d'arrivée. Non disponible dans la (version 0.21 et suivantes).

- ![](/images/Sketcher_Copy.svg) [Copier](/Sketcher_Copy/fr "Sketcher Copy/fr") : copie un élément. Non disponible dans version 1.0 et suivantes.

- ![](/images/Sketcher_Move.svg) [Déplacer](/Sketcher_Move/fr "Sketcher Move/fr") : déplace la géométrie sélectionnée en prenant comme référence le dernier point sélectionné. Non disponible dans version 1.0 et suivantes.

- ![](/images/Sketcher_RectangularArray.svg) [Répétition linéaire](/Sketcher_RectangularArray/fr "Sketcher RectangularArray/fr") : crée une répétition à partir d'éléments sélectionnés. Non disponible dans version 1.0 et suivantes.

## Préférences

- ![](/images/Workbench_Sketcher.svg) [Préférences...](/Sketcher_Preferences/fr "Sketcher Preferences/fr") : préférences pour l'atelier Sketcher.

## Bonnes pratiques

Chaque utilisateur de CAO développe sa propre méthode de travail au fil du temps, mais il existe quelques principes généraux utiles à suivre.

- Une série d'esquisses simples est plus facile à gérer qu'une seule esquisse complexe. Par exemple, une première esquisse peut être créée pour l'élément 3D de base (un tampon ou une rotation), tandis qu'une deuxième peut contenir des trous ou des découpes (poches). Certains détails peuvent être laissés de côté, pour être réalisés ultérieurement en tant qu'éléments 3D. Vous pouvez choisir d'éviter les congés dans votre esquisse s'il y en a trop, et les ajouter en tant qu'élément 3D.
- Créez toujours un profil fermé, sinon votre esquisse ne produira pas un solide, mais plutôt un ensemble de faces ouvertes. Si vous ne souhaitez pas que certains objets soient inclus dans la création du solide, transformez-les en éléments de construction avec l'outil Mode de construction.
- Utilisez la fonction de contraintes automatiques pour limiter le nombre de contraintes que vous devrez ajouter manuellement.
- En règle générale, appliquez d'abord les contraintes géométriques, puis les contraintes dimensionnelles, et verrouillez votre esquisse en dernier. Mais n'oubliez pas : les règles sont faites pour être transgressées. Si vous avez du mal à manipuler votre esquisse, il peut être utile de contraindre quelques objets avant de compléter votre profil.
- Si possible, centrez votre esquisse par rapport à l'origine (0,0) avec la contrainte de verrouillage. Si votre esquisse n'est pas symétrique, localisez l'un de ses points par rapport à l'origine ou choisissez de jolis chiffres ronds pour les distances de verrouillage.
- Si vous avez la possibilité de choisir entre la contrainte de longueur et les contraintes de distance horizontale ou verticale, préférez ces dernières. Les contraintes de distance horizontale et verticale sont moins coûteuses en termes de calcul.
- En général, les meilleures contraintes à utiliser sont : Contraintes horizontales et verticales ; Contraintes de longueur horizontales et verticales ; Tangence point à point. Si possible, limitez l'utilisation de ces contraintes : la contrainte générale de longueur ; la tangence bord à bord ; la contrainte de fixation du point sur une ligne ; la contrainte de symétrie.
- En cas de doute sur la validité d'une esquisse une fois qu'elle est terminée (les caractéristiques deviennent vertes), fermez la fenêtre de dialogue de Sketcher et utilisez ![](/images/Sketcher_ValidateSketch.svg) [Valider une esquisse](/Sketcher_ValidateSketch/fr "Sketcher ValidateSketch/fr").

## Tutoriels

- [Sketcher Lecture](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) par chrisb. Il s'agit d'un document PDF de plus de 80 pages qui sert de manuel détaillé pour Sketcher. Il explique les bases de l'utilisation de Sketcher et entre dans les détails de la création de formes géométriques et de chacune des contraintes.
- [Sketcher : Tutoriel d'introduction](/Basic_Sketcher_Tutorial/fr "Basic Sketcher Tutorial/fr") pour débutants
- [Sketcher : Micro-tutoriel - Les pratiques de contraintes](/Sketcher_Micro_Tutorial_-_Constraint_Practices/fr "Sketcher Micro Tutorial - Constraint Practices/fr")
- [Sketcher : Requis pour une esquisse](/Sketcher_requirement_for_a_sketch/fr "Sketcher requirement for a sketch/fr") : exigences minimales pour une esquisse et défintion d'une esquisse.

## Script

La page [Sketcher : Écrire des scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") contient des exemples sur la façon de créer des contraintes à partir de scripts Python.

## Exemples

Pour avoir une idée de ce qui peut être réalisé avec les outils de Sketcher, jetez un coup d'œil aux [Sketcher Exemples](/Sketcher_Examples/fr "Sketcher Examples/fr") :

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/fr&oldid=1565560>"
