---
title: Draft Tutoriel pour créer une forme à partir d'un texte
---
|  |
| --- |
| Tutoriel |
| Thème |
| Conception de produit |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 30 minutes |
| Auteurs |
| r-frank et vocx |
| Version de FreeCAD |
| 0.17 et suivantes |
| Fichiers exemples |
| [Draft\_Shapestring\_Text](https://github.com/FreeCAD/Examples/blob/master/Draft_Shapestring_Tutorial_Examples/Draft_Shapestring_Tutorial_Text.FCStd?raw=true) |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel a été écrit à l'origine par Roland Frank († 2017, r-frank). Il a été réécrit et illustré par vocx.

Ce tutoriel décrit une méthode pour créer du texte 3D et l'utiliser avec des objets solides dans l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") ![](/images/Workbench_Part.svg). Nous allons voir comment :

* insérer du texte avec l'outil ![](/images/Draft_ShapeString.svg) [Draft Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr"),
* l'extruder pour qu'il soit un solide 3D avec ![](/images/Part_Extrude.svg) [Part Extrusion](/Part_Extrude/fr "Part Extrude/fr"),
* le positionner dans l'espace 3D en utilisant le [placement](/Placement/fr "Placement/fr") et ![](/images/Draft_Move.svg) [Draft Déplacer](/Draft_Move/fr "Draft Move/fr") (on utilise une esquisse comme géométrie auxiliaire) et
* graver le texte en appliquant une ![](/images/Part_Cut.svg) [Part Soustraction](/Part_Cut/fr "Part Cut/fr").

Pour utiliser ShapeStrings à l'intérieur de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") ![](/images/Workbench_PartDesign.svg), le procédé est essentiellement le même qu'avec l'atelier Part, mais la Forme à partir d'un texte est placé à l'intérieur du [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") pour l'extruder. Allez à la fin de ce tutoriel pour plus d'informations.

![](/images/08_T04_Part_ShapesString_Extrude_final_cut.png)

Maquette finale du texte gravé.

L'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") est utilisé brièvement pour tracer une ligne auxiliaire. Pour plus d'informations sur les outils de cet atelier, consultez

* le [tutoriel d'introduction à Sketcher](/Basic_Sketcher_Tutorial/fr "Basic Sketcher Tutorial/fr")
* le [manuel de référence pour Sketcher](/Sketcher_Lecture/fr "Sketcher Lecture/fr")

## Installation

1. Lancez FreeCAD, créez un nouveau document vide avec **Fichier → ![](/images/Std_New.svg) [Nouveau](/Std_New/fr "Std New/fr")** et sélectionnez l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr").

:   1.1. Appuyez sur le bouton ![](/images/Std_ViewIsometric.svg) [Vue isométrique](/Std_ViewIsometric/fr "Std ViewIsometric/fr") ou appuyez sur 0 dans le pavé numérique de votre clavier, pour changer la vue à isométrique pour mieux visualiser les solides 3D.
:   1.2. Appuyez sur le bouton ![](/images/Std_ViewFitAll.svg) [Tout afficher](/Std_ViewFitAll/fr "Std ViewFitAll/fr") chaque fois que vous ajoutez des objets afin de faire un panoramique et un zoom sur [vue 3D](/3D_view/fr "3D view/fr") afin que tous les éléments soient visibles dans la vue.
:   1.3. Maintenez Ctrl pendant que vous cliquez pour sélectionner plusieurs éléments. Si vous avez sélectionné quelque chose de mal ou souhaitez tout désélectionner, cliquez simplement sur un espace vide dans la [vue 3D](/3D_view/fr "3D view/fr").

## Création de la forme de base

2. Insérez un cube primitif en cliquant sur ![](/images/Part_Box.svg) [Cube](/Part_Box/fr "Part Box/fr").

:   2.1. Sélectionnez `Cube` dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
:   2.2. Modifiez les dimensions dans l'onglet **Données** de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").
:   2.3. Mettez **Width** à `31 mm`.

3. Créer un chanfrein.

:   3.1. Sélectionnez le bord supérieur (`Arête6`) sur la face avant du `Cube` dans la [Vue 3D](/3D_view/fr "3D view/fr").
:   3.2. Appuyez sur ![](/images/Part_Chamfer.svg) [Chanfrein](/Part_Chamfer/fr "Part Chamfer/fr").
:   3.3. Dans le [Panneau des tâches](/Task_panel/fr "Task panel/fr") de **Chanfreiner les arêtes**, se rendre à **Forme sélectionnée** puis choisir **Sélectionner les arêtes**. Comme **Type de chanfrein**, choisissez `Cote égale` puis définissez la **Longueur** à `5 mm`.
:   3.4. Appuyez sur OK. Cela créera un objet `Chamfer`.
:   3,5. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Chanfrein`, dans l'onglet **Vue**, changez la valeur de **Largeur de ligne** à `2.0`.

![](/images/01_T04_Part_Cube_base_long.png)

Objet de base créé à partir d'un cube et d'une opération de chanfrein.

## Insérer la forme à partir d'un texte

4. Basculez vers l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").

:   4.1. Assurez-vous que rien n'est sélectionné dans [vue en arborescence](/Tree_view/fr "Tree view/fr").
:   4.2. Établissez le plan de travail jusqu'à XY (haut) en cliquant sur ![](/images/Draft_SelectPlane.svg) [Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") et pressez ![](/images/View-top.svg) [Vue de dessus (XY)](/Std_ViewTop/fr "Std ViewTop/fr").

5. Insérer le texte "FreeCAD".

:   5.1. Appuyez sur ![](/images/Draft_ShapeString.svg) [Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr").
:   5.2. Remplacez **X** en `0 mm`.
:   5.3. Remplacez **Y** en `0 mm`.
:   5.4. Remplacez **Z** en `0 mm`.
:   5,5. Ou appuyez sur Réinitialiser le point.
:   5.6. Remplacez **Chaîne** par `FreeCAD`; mettez la **Hauteur** à `5 mm`; remplacez **Suivi** en `0 mm`.
:   5.7. Assurez-vous que le **Fichier de police** pointe vers une police valide (par exemple `/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf` ou `C:/Windows/Fonts/arial.ttf`). Appuyez sur les points de suspension ... pour ouvrir la boîte de dialogue du système d'exploitation pour trouver une police.

    :   *Remarque :* pour plus de détails sur le travail avec les polices, veuillez vous reporter à la section [Draft Formes à partir texte Remarques](/Draft_ShapeString/fr#Remarques "Draft ShapeString/fr").
:   5.8. Appuyez sur OK. Cela créera un objet `ShapeString`.
:   5.9. Recalculez le document en appuyant sur ![](/images/Std_Refresh.svg) [Recalculer](/Std_Refresh/fr "Std Refresh/fr").
:   5.10. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `ShapeString`, dans l'onglet **Vue**, changez la valeur de **Largeur de ligne** à `2.0`.
:   5.11. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Chamfer`, dans l'onglet **Vue**, changez la valeur de **Visibility** à `false` ou appuyez sur Espace sur le clavier. Cela masquera l'objet afin que vous puissiez mieux voir le `ShapeString`.
:   5.12. Pour voir la Forme à partir d'un texte ci-dessus, changez la vue en appuyant sur ![](/images/View-top.svg) [Vue de dessus (XY)](/Std_ViewTop/fr "Std ViewTop/fr") ou 2 au clavier.
:   5.13. Pour restaurer la vue en isométrique, appuyez sur ![](/images/Std_ViewIsometric.svg) [Vue isométrique](/Std_ViewIsometric/fr "Std ViewIsometric/fr") ou 0 au clavier.

![](/images/02_T04_Part_ShapeString.png)

Texte créé en tant que ShapeString, c'est-à-dire en tant que collection d'arêtes dans un plan.

## Créer un texte 3D

6. Retour à l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr").

:   6.1. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `ShapeString`, puis appuyez sur ![](/images/Part_Extrude.svg) [Extrusion](/Part_Extrude/fr "Part Extrude/fr").
:   6.2. Dans le [Panneau des tâches](/Task_panel/fr "Task panel/fr") **Extrusion** allez dans **Direction**, choisissez **Along normal**; dans **Length**, définissez **Along** sur `1 mm`; cochez également l'option **Create solid**.
:   6.3. Appuyez sur OK. Cela créera un objet `Extrude`.
:   6.4. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Extrude`, dans l'onglet **Vue**, changez la valeur de **Line Width** en `2.0`.

![](/images/03_T04_Part_ShapeString_Extrude.png)

Texte créé comme un ShapeString et transformé en solide par extrusion.

## Insérer l'esquisse pour le positionnement

Nous allons maintenant dessiner une simple esquisse qui sera utilisée comme géométrie auxiliaire pour positionner l'extrusion de la Forme à partir d'un texte.

7. Dans la [vue en arboresence](/Tree_view/fr "Tree view/fr"), sélectionnez `Extrude` et pressez Espace pour le rendre invisible.

8. Basculez vers l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").

9. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Chamfer`, puis appuyez sur Espace sur le clavier pour le rendre visible.

:   9.1. Choisissez la face inclinée créée par l'opération de chanfrein (`Face3`).
:   9.2. Cliquez sur ![](/images/Sketcher_NewSketch.svg) [Créer une esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr"). Dans la boîte de dialogue **Sketch attachment**, sélectionnez `FlatFace`, puis appuyez sur OK.
:   9.3. La vue doit s'ajuster automatiquement afin que la prise de vue soit parallèle à la face sélectionné.
:   9.4. Tracez une ligne horizontale dans une position générale sur le dessus du visage. La longueur n'est pas importante; nous sommes simplement intéressés par sa position.
:   9.5. Contraindre l'extrémité gauche à `2.5 mm` de l'axe X local et de l'axe Y local, à l'aide de ![](/images/Sketcher_ConstrainDistanceX.svg) [Contrainte de distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") et ![](/images/Sketcher_ConstrainDistanceY.svg) [Contrainte de distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr").
:   9,6. Étant donné que l'esquisse n'est qu'un objet auxiliaire, nous n'avons pas besoin de le contraindre complètement. Vous pouvez le faire si vous le souhaitez en affectant une distance fixe, par exemple `20 mm`, à nouveau avec ![](/images/Sketcher_ConstrainDistanceX.svg) [Contrainte de distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr").
:   9.7. Fermez l'esquisse.

![](/images/04_T04_Part_ShapeString_support_sketch.png)

Ligne en cours de création avec l'esquisse, avec contraintes.

![](/images/05_T04_Part_ShapeString_support_sketch_3D.png)

Ligne d'esquisse créée au-dessus de la face solide, à utiliser comme guide de référence pour positionner le texte extrudé.

## Positionnement du texte 3D dans l'espace 3D

10. Dans la [vue en arboresence](/Tree_view/fr "Tree view/fr"), sélectionnez `Extrude` et pressez Espace pour le rendre visible.

11. Toujours avec `Extrude` sélectionné, dans l'onglet **Données** de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), cliquez sur la valeur **Placement** pour que le bouton points de suspension ... apparaisse sur la droite et cliquez sur ce bouton.

:   11.1. Cochez l'option **Appliquer des changements incrémentiels**.
:   11.2. Changez **Rotation** en `Axe de rotation avec angle`; **Axe** en `Z`. (en définissant les valeurs `X`, `Y` et `Z` des valeurs de l'axe à `0`, `0` et `1` respectivement, `Z` étant la troisième entrée), et **Angle** à `90 deg`, puis cliquez sur Appliquer. Ceci appliquera une rotation autour de l'axe Z et remettra le champ **Angle** à zéro.
:   11.3. Changez **Rotation** en `Axe de rotation avec angle`; **Axe** en `Y`. (en définissant les valeurs `X`, `Y` et `Z` des valeurs de l'axe à `0`, `1` et `0` respectivement), et **Angle** à `45 deg`, puis cliquez sur Appliquer. Ceci appliquera une rotation autour de l'axe Y et remettra le champ **Angle** à zéro.
:   11.4. Cliquez sur OK pour fermer la fenêtre de dialogue.

12. Basculez à nouveau vers l'[Atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").

:   12.1. Passez au style de dessin "Filaire" avec **Affichage → [Style de représentation](/Std_DrawStyle/fr "Std DrawStyle/fr") → ![](/images/DrawStyleWireFrame.svg) Filaire** ou appuyez sur ![](/images/DrawStyleWireFrame.svg) [Filaire](/Std_DrawStyle/fr "Std DrawStyle/fr") dans la barre d'outils de la vue. Cela vous permettra de voir les objets derrière d'autres objets.
:   12.2. Assurez-vous que la méthode [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") "Aimantation Terminaison" est active. Cela peut être fait à partir du menu **Draft → Aimantation → ![](/images/Draft_Snap_Lock.svg) [Verrouiller l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr")** puis  **→ ![](/images/Draft_Snap_Endpoint.svg) [Aimantation Extrémité](/Draft_Snap_Endpoint/fr "Draft Snap Endpoint/fr")** ou en appuyant sur ![](/images/Draft_Snap_Lock.svg) [Verrouiller l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr") et ![](/images/Draft_Snap_Endpoint.svg) [Extrémité](/Draft_Snap_Endpoint/fr "Draft Snap Endpoint/fr") dans la barre d'outils Snap.

13. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Extrude`.

:   13.1. Cliquez sur ![](/images/Draft_Move.svg) [Déplacer](/Draft_Move/fr "Draft Move/fr").
:   13.2. Dans la [vue 3D](/3D_view/fr "3D view/fr"), cliquez sur le coin supérieur gauche de l'objet `Extrude` (1), puis cliquez sur le point le plus à gauche de la ligne tracée avec l'esquisse (2).
:   13.3. Si ![](/images/Draft_Snap_Endpoint.svg) [Aimanter aux extrémités](/Draft_Snap_Endpoint/fr "Draft Snap Endpoint/fr") est actif, dès que vous déplacez le pointeur près d'un sommet, vous devez voir qu'il s'y attache exactement.
:   *Remarque :* si vous rencontrez des problèmes lors de l'aimantation aux sommets, assurez-vous que seule la méthode ![](/images/Draft_Snap_Endpoint.svg) [Aimanter aux extrémités](/Draft_Snap_Endpoint/fr "Draft Snap Endpoint/fr") est activée. Le fait d'avoir plusieurs méthodes d'aimantation actives en même temps peut rendre difficile la sélection de la bonne fonction.
:   13.4. Le texte extrudé doit maintenant se trouver dans le corps de l'objet `Chamfer`.

![](/images/06_T04_Part_ShapeString_move.svg)

La chaîne de forme extrudée doit être déplacée à la position de la ligne esquissée qui se trouve sur la face du corps de base.

![](/images/07_T04_Part_ShapesString_Extrude_in_place.png)

Forme à partir d'un texte extrudée positionnée dans le `Chanfrein`.

## Création de texte gravé

14. Revenez à l'[Atelier Part](/Part_Workbench/fr "Part Workbench/fr").

:   14.1. Passez au style de dessin "Comme actuellement" avec **Affichage → [Style de représentation](/Std_DrawStyle/fr "Std DrawStyle/fr") → ![](/images/DrawStyleAsIs.svg) Comme actuellement** ou appuyez sur le ![](/images/DrawStyleAsIs.svg) [Comme actuellement](/Std_DrawStyle/fr "Std DrawStyle/fr") bouton dans la barre d'outils de la vue. Cela montrera tous les objets avec l'ombrage et la couleur normaux.
:   14.2. Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Sketch` et appuyez sur Espace sur le clavier pour le rendre invisible.

15. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez d'abord `Chamfer` puis `Extrude`.

:   15.1. Appuyez ensuite sur ![](/images/Part_Cut.svg) [Soustraction](/Part_Cut/fr "Part Cut/fr"). Cela créera un objet `Cut`. Ceci est l'objet terminé.
:   *Remarque :* l'ordre dans lequel vous sélectionnez les objets est important pour l'opération de découpe. L'objet de base est sélectionné en premier et l'objet soustractif arrive à la fin.
:   15.2. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Cut`, dans l'onglet **Vue**, changez la valeur de **Line Width** en `2.0`.

![](/images/08_T04_Part_ShapesString_Extrude_final_cut.png)

Modèle terminé d'un cube avec filet avec du texte gravé créé à partir des opérations Forme à partir d'un texte, extrusion et soustraction bouléenne.

## Gravure de texte 3D avec l'atelier PartDesign

Un processus similaire à celui décrit ci-dessus peut être effectué avec l'[Atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

1. Créez d'abord le ![](/images/Draft_ShapeString.svg) [Draft Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr").
2. Créez un ![](/images/PartDesign_Body_Tree.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), rendez-le actif et ajoutez un solide de base en ajoutant des primitives ou en utilisant une esquisse et en l'extrudant avec ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr").
3. Déplacez l'objet `ShapeString` dans le corps actif.
4. Attachez l'objet `ShapeString` à l'une des faces du solide ou à un ![](/images/PartDesign_Plane.svg) [PartDesign Plan de référence](/PartDesign_Plane/fr "PartDesign Plane/fr"), en utilisant ![](/images/Part_EditAttachment.svg) [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").
5. Créez maintenant un ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") ou un ![](/images/PartDesign_Pocket.svg) [PartDesign Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") à partir de `ShapeString`, afin de produire un additif ou une soustraction [PartDesign Feature](/PartDesign_Feature/fr "PartDesign Feature/fr") du corps de base, respectivement.

Voir le fil du forum [How to use ShapeStrings in PartDesign](https://forum.freecadweb.org/viewtopic.php?f=3&t=36623).

## Remarques

* pour créer un texte courbé, vous pouvez utiliser ![](/images/FCCircularTextButtom.png) [Macro FCCircularText](/Macro_FCCircularText/fr "Macro FCCircularText/fr").
* pour importer du texte depuis Inkscape, regardez l' [Importation de texte à partir du tutoriel Inkscape](/Import_text_and_geometry_from_Inkscape/fr "Import text and geometry from Inkscape/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ShapeString_tutorial/fr&oldid=1529268>"