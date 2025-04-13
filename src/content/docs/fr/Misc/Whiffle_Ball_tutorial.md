---
title: Tutoriel pour créer une Whiffle Ball
---
|  |
| --- |
| Tutoriel |
| Thème |
| Conception de produits |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 30 minutes |
| Auteurs |
| r-frank et vocx |
| Version de FreeCAD |
| 0.17 et plus |
| Fichiers exemples |
| [WhiffleBall\_Tutorial\_FCWiki.FCStd](https://github.com/FreeCAD/Examples/blob/master/Whiffle_Ball_Tutorial_ExampleFiles/WhiffleBall_Tutorial_FCWiki.FCStd?raw=true) |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel a été écrit à l'origine par Roland Frank († 2017, r-frank). Il a été réécrit et illustré par vocx.

Ce tutoriel est là pour vous apprendre à utiliser l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr").

L'atelier Part a été le premier atelier. Il fournit les éléments géométriques de base qui peuvent être utilisés comme blocs de construction pour d’autres ateliers. L'atelier Part est destiné à être utilisé dans un flux de travaux classique [Géométrie Solide Constructive](/Constructive_solid_geometry/fr "Constructive solid geometry/fr") (CSG). Pour un flux de travail plus moderne utilisant des esquisses, des blocs et des fonctions, utilisez l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

Vous vous exercerez à :

* insérer des primitives
* en modifiant les paramètres de ces objets primitifs
* en modifiant leur [placement](/Placement/fr "Placement/fr")
* au moyen d'opérations booléennes

![](/images/10_T03_Part_ball_fillet.png)

Modèle terminé de la balle à trous

## Installation

1. Ouvrez FreeCAD, créez un nouveau document vide avec **Fichier → ![](/images/Std_New.svg) [Nouveau](/Std_New/fr "Std New/fr")** et passez à l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr").

:   1.1. Appuyez sur le bouton ![](/images/Std_ViewIsometric.svg) [Vue isométrique](/Std_ViewIsometric/fr "Std ViewIsometric/fr") ou appuyez sur 0 sur le pavé numérique pour changer la vue à isométrique pour mieux visualiser les solides 3D.
:   1.2. Appuyez sur le bouton ![](/images/Std_ViewFitAll.svg) [Tout afficher](/Std_ViewFitAll "Std ViewFitAll") chaque fois que vous ajoutez des objets afin de faire un panoramique et un zoom sur la [Vue 3D](/3D_view/fr "3D view/fr") afin que tous les éléments sont visibles dans la vue.
:   1.3. Maintenez Ctrl pendant que vous cliquez pour sélectionner plusieurs éléments. Si vous avez sélectionné quelque chose de mal ou que vous voulez tout désélectionner, cliquez simplement sur un espace vide dans la [Vue 3D](/3D_view/fr "3D view/fr").

## Insérer des cubes primitifs

2. Insérez un cube primitif en cliquant sur ![](/images/Part_Box.svg) [Cube](/Part_Box/fr "Part Box/fr").

:   2.1. Sélectionnez `Cube` dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr").
:   2.2. Modifiez les dimensions dans l'onglet **Data** de l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").
:   2.3. Remplacez **Length** par `90 mm`.
:   2.4. Remplacez **Width** par `90 mm`.
:   2.5. Remplacez **Height** par `90 mm`.

3. Dans l'onglet **Données** de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), cliquez sur la valeur **Placement** pour que le bouton points de suspension ... apparaisse sur la droite.

:   3.1. Appuyez sur les points de suspension pour ouvrir la boîte de dialogue [Positionner](/Std_Placement/fr "Std Placement/fr").
:   3.2. Modifiez les valeurs de **Translation**.
:   3.3. Remplacez **X** par `-45 mm`.
:   3.4. Remplacez **Y** par `-45 mm`.
:   3.5. Remplacez **Z** par `-45 mm`.
:   3.6. Appuyez sur le bouton OK pour fermer la boîte de dialogue.

4. Répétez le processus en insérant un deuxième cube plus petit en cliquant sur ![](/images/Part_Box.svg) [Cube](/Part_Box/fr "Part Box/fr").

:   4.1. Le deuxième cube sera créé avec le même nom, mais avec un numéro supplémentaire pour distinguer l'objet.
:   4.2. Sélectionnez `Cube001` dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et modifiez les dimensions et le placement comme avec l'objet précédent.
:   4.3. Remplacez **Longueur** par `80 mm`.
:   4.4. Remplacez **Largeur** par `80 mm`.
:   4.5. Remplacez **Hauteur** par `80 mm`.
:   4.6. Ouvrez la boîte de dialogue [Positionner](/Std_Placement/fr "Std Placement/fr").
:   4.7. Remplacez **X** par `-40 mm`.
:   4.8. Remplacez **Y** par `-40 mm`.
:   4.9. Remplacez **Z** par `-40 mm`.
:   4.10. Appuyez sur le bouton OK pour fermer la boîte de dialogue.

## Modifier les propriétés visuelles

5. Les opérations précédentes créent un cube plus petit à l'intérieur d'un cube plus grand. Pour visualiser cela, nous pouvons modifier les propriétés **View** dans l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

:   5.1. Sélectionnez `Cube001`, le plus petit cube, dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") et changez la couleur. Dans l'onglet **Vue**, cliquez sur la valeur **Shape Color** pour ouvrir la boîte de dialogue **Select color**, puis choisissez une couleur verte; modifiez également la valeur de **Line Width** en `2.0`.
:   5.2. Sélectionnez `Cube`, le plus grand cube, dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"). Dans l'onglet **Vue**, modifiez la valeur de **Transparency** en `70`.

![](/images/01_T03_Part_cubes_visibility.png)

Cube solide à l'intérieur d'un autre cube solide

## Insérer des cylindres primitifs

6. Insérez un cylindre primitif en cliquant sur ![](/images/Part_Cylinder.svg) [Cylindre](/Part_Cylinder/fr "Part Cylinder/fr").

:   6.1. Sélectionnez `Cylinder` dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
:   6.2. Modifiez les dimensions dans l'onglet **Data** de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").
:   6.3. Remplacez **Rayon** par `27,5 mm`.
:   6.4. Remplacez **Hauteur** par `120 mm`.
:   6.5. Ouvrez la boîte de dialogue [Positionner](/Std_Placement/fr "Std Placement/fr").
:   6.6. Remplacez **Z** par `-60 mm`.
:   6.7. Appuyez sur le bouton OK pour fermer la boîte de dialogue.

7. Répétez le processus en insérant un deuxième cylindre en cliquant sur ![](/images/Part_Cylinder.svg) [Cylindre](/Part_Cylinder/fr "Part Cylinder/fr").

:   7.1. Le deuxième cylindre sera créé avec le même nom, mais avec un numéro supplémentaire pour distinguer l'objet.
:   7.2. Sélectionnez `Cylinder001` dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et modifiez les dimensions et le placement comme avec l'objet précédent.
:   7.3. Remplacez **Rayon** par `27,5 mm`.
:   7.4. Remplacez **Hauteur** par `120 mm`.
:   7.5. Ouvrez la boîte de dialogue [Positionner](/Std_Placement/fr "Std Placement/fr").
:   7.6. Remplacez **Y** par `60 mm`.
:   7.7. Remplacez **Rotation** par `Axe de rotation et angle`; **Axis** à `X` (en fixant les valeurs de `X`, `Y` et `Z` des valeurs de l'axe à `1`, `0` et `0` respectivement) et **Angle** à `90 deg`.
:   7.8. Appuyez sur le bouton OK pour fermer la boîte de dialogue.

8. Insérez un autre cylindre. Cette fois, créez un doublon afin que le rayon et la hauteur ne doivent pas être modifiés, seulement son placement.

:   8.1. Sélectionnez `Cylinder001` dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et allez dans le menu **Edition → [Dupliquer une sélection](/Std_DuplicateSelection/fr "Std DuplicateSelection/fr")**. Cela créera `Cylinder002`.
:   8.2. Ouvrez la boîte de dialogue [Positionner](/Std_Placement/fr "Std Placement/fr").
:   8.3. Changez **X** en `-60 mm`, et changez **Y** en `0 mm`.
:   8.4. Changez **Rotation** par `Axe de rotation et angle`; **Axis** à `Y` et **Angle** à `90 deg`.
:   8.5. Appuyez sur le bouton OK pour fermer la boîte de dialogue.

## Modifier les propriétés visuelles

9. Les opérations précédentes créent trois cylindres qui se croisent et qui croisent également les cubes. Pour mieux visualiser cela, nous pouvons modifier les propriétés **View** dans l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

:   9.1. Sélectionnez `Cube001`, le plus petit cube, dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") et modifiez la transparence. Dans l'onglet **View**, modifiez la valeur de **Transparency** en `70`.
:   9.2. Sélectionnez `Cylinder`, dans l'onglet **View**, cliquez sur la valeur **Shape Color** pour ouvrir la boîte de dialogue **Select color**, puis choisissez une couleur rouge .
:   9.3. Sélectionnez `Cylinder001`, dans l'onglet **View**, cliquez sur la valeur **Shape Color** pour ouvrir la boîte de dialogue **Select color**, puis choisissez une couleur bleue .
:   9.4. Sélectionnez `Cylinder002`, dans l'onglet **View**, cliquez sur la valeur **Shape Color** pour ouvrir la boîte de dialogue **Select color**, puis choisissez une couleur rose .
:   9.5. Sélectionnez les trois cylindres, dans l'onglet **View** changez également la valeur de **Line Width** en `2.0`.

![](/images/02_T03_Part_cylinders_visibility.png)

Cylindres solides qui se croisent et les cubes solides.

## Union et Soustraction

10. Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Cube001` (le cube intérieur plus petit) et les cylindres de l'arbre, puis appuyez sur ![](/images/Part_Fuse.svg) [Union](/Part_Fuse/fr "Part Fuse/fr"). Cela créera un objet `Fusion`.

11. Effectuez ensuite une coupe booléenne du `Cube` (cube plus grand) et du nouvel objet `Fusion`.

:   11.1. Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez d'abord `Cube`, puis `Fusion`.
:   11.2. Appuyez ensuite sur ![](/images/Part_Cut.svg) [Soustraction](/Part_Cut/fr "Part Cut/fr"). Cela créera un objet `Cut`.
:   *Remarque:* l'ordre dans lequel vous sélectionnez les objets est important pour l'opération de soustraction. L'objet de base est sélectionné en premier et l'objet de soustraction vient à la fin.
:   11.3. Si les couleurs semblent étranges, sélectionnez le nouvel objet `Cut`, allez dans l'onglet **View**, cliquez sur la valeur **Shape Color** pour ouvrir la **Select color**, puis choisissez une couleur grise; modifiez également la valeur de **Line Width** en `2.0`.

![](/images/03_T03_Part_cube_cut.png)

Forme creuse produite en coupant un cube et trois cylindres à partir d'un plus gros cube.

## Insérer des cubes primitifs pour couper les coins du solide partiel

Maintenant, nous allons créer plus de cubes qui seront utilisés comme outils de coupe pour couper les coins de l'objet `Cut` précédemment obtenu.

12. Cliquez sur ![](/images/Part_Box.svg) [Cube](/Part_Box/fr "Part Box/fr").

:   12.1. Sélectionnez `Cube002` dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et modifiez les dimensions et l'emplacement.
:   12.2. Remplacez **Longueur** par `140 mm`.
:   12.3. Remplacez **Largeur** par `112 mm`.
:   12.4. Remplacez **Hauteur** par `112 mm`.
:   12.5. Ouvrez la boîte de dialogue [Positionner](/Std_Placement/fr "Std Placement/fr").
:   12.6. Remplacez **X** par `-70 mm`.
:   12.7. Remplacez **Y** par `-56 mm`.
:   12.8. Remplacez **Z** par `-56 mm`.
:   12.9. Appuyez sur OK.

13. Cliquez sur ![](/images/Part_Box.svg) [Cube](/Part_Box/fr "Part Box/fr").

:   13.1. Sélectionnez `Cube003` dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et modifiez les dimensions et l'emplacement.
:   13.2. Remplacez **Longueur** par `180 mm`.
:   13.3. Remplacez **Largeur** par `180 mm`.
:   13.4. Remplacez **Hauteur** par `180 mm`.
:   13.5. Ouvrez la boîte de dialogue [Positionner](/Std_Placement/fr "Std Placement/fr").
:   13.6. Remplacez **X** par `-90 mm`.
:   13.7. Remplacez **Y** par `-90 mm`.
:   13.8. Remplacez **Z** par `-90 mm`.
:   13.9. Appuyez sur OK.

Nous dupliquerons à nouveau les deux objets précédents pour les utiliser à nouveau comme objets de coupe.

14. Sélectionnez uniquement `Cube002` dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") et allez dans **Edition → [Dupliquer une sélection](/Std_DuplicateSelection/fr "Std DuplicateSelection/fr")**. Cela créera `Cube004`.

15. Sélectionnez uniquement `Cube003` dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") et allez dans **Edition → [Dupliquer une sélection](/Std_DuplicateSelection/fr "Std DuplicateSelection/fr")**. Cela créera `Cube005`.

16. Pour mieux visualiser cela, nous pouvons modifier les propriétés **View** dans l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

:   16.1. Sélectionnez l'objet `Cut`, dans l'onglet **View**, cliquez sur la valeur **Shape Color** pour ouvrir la boîte de dialogue **Select color**, puis choisissez un couleur bleue.
:   16.2. Sélectionnez tous les nouveaux cubes, `Cube002`, `Cube003`, `Cube004` et `Cube005`, dans l'onglet **View**, modifiez la valeur de **Transparency** à `80`.

![](/images/04_T03_Part_cube_additional.png)

Cubes externes supplémentaires qui seront utilisés comme objets de coupe pour le solide interne.

## Couper les coins partie 1

17. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") sélectionnez `Cube002` et `Cube003`.

:   17.1. Ouvrez la boîte de dialogue [Positionner](/Std_Placement/fr "Std Placement/fr").
:   17.2. Cochez l'option **Appliquer des modifications incrémentielles**; notez que toutes les valeurs de **Translation** sont remises à zéro.
:   17.3. Remplacez **Rotation** par `Axe de rotation et angle`; **Axe** à `X` et **Angle** à `45 deg`, puis cliquez sur Appliquer. Cela appliquera une rotation autour de l'axe X et réinitialisera le champ **Angle** à zéro.
:   17.4. Modifiez à nouveau **Rotation**, maintenant **Axe** en `Z` et **Angle** en `45 deg`, puis cliquez sur Appliquer. Cela appliquera une rotation autour de l'axe Z local et réinitialisera le champ **Angle** à zéro.
:   17.5. Cliquez sur OK pour fermer la boîte de dialogue.

18. Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") désélectionnez les objets; puis sélectionnez d'abord `Cube003`, le plus gros cube, puis `Cube002`, le plus petit cube.

:   18.1. Appuyez ensuite sur ![](/images/Part_Cut.svg) [Soustraction](/Part_Cut/fr "Part Cut/fr"). Cela créera `Cut001`. C'est un corps évidé qui coupe le `Cut` initial uniquement à certains coins.

19. Pour mieux visualiser cela, nous pouvons modifier les propriétés **View** dans l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

:   19.1. Sélectionnez `Cube004` et `Cube005`, dans l'onglet **View**, puis changez la valeur de **Visibility** en `false`, ou appuyez sur Espace au clavier.
:   19.2. Sélectionnez `Cut001`, cliquez sur la valeur **Shape Color** pour ouvrir la boîte de dialogue **Select color**, puis choisissez une couleur rouge; modifiez également la valeur de **Transparency** en `90`.

![](/images/05_T03_Part_cube_additional_cut_1.png)

Un solide tourné et évidé, qui sera utilisé comme objet de coupe pour certains coins du solide interne.

## Couper les coins partie 2

20. Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Cut001`, dans l'onglet **View**, changez la valeur de **Visibility** en `false` , ou appuyez sur Espace au clavier.

21. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Cube004` et `Cube005`, dans l'onglet **Vue**, modifiez la valeur de **Visibility** à `true`, ou appuyez sur Espace au clavier.

:   21.1. Ouvrez la boîte de dialogue [Positionner](/Std_Placement/fr "Std Placement/fr").
:   21.2. Cochez l'option **Appliquer des modifications incrémentielles**; notez que toutes les valeurs de **Translation** sont remises à zéro.
:   21.3. Remplacez **Rotation** par `Axe de rotation et angle`; **Axe** à `X`, et **Angle** à `45 deg`, puis cliquez sur Appliquer. Cela appliquera une rotation autour de l'axe X et réinitialisera le champ `Angle` à zéro.
:   21,4. Changez à nouveau **Rotation**, maintenant **Axe** en `Z`, et **Angle** en `-45 deg`, puis cliquez sur Applique. Cela appliquera une rotation autour de l'axe Z local et réinitialisera le champ **Angle** à zéro.
:   21.5. Cliquez sur OK pour fermer la boîte de dialogue.

18. Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") désélectionnez les objets; puis sélectionnez d'abord `Cube005`, le plus gros cube, puis `Cube004`, le plus petit cube.

:   18.1. Appuyez ensuite sur ![](/images/Part_Cut.svg) [Soustraction](/Part_Cut/fr "Part Cut/fr"). Cela créera `Cut002`. C'est un corps évidé qui coupe le `Cut` initial uniquement à certains coins.

23. Pour mieux visualiser cela, nous pouvons modifier les propriétés **View** dans l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").

:   23.1. Sélectionnez `Cut002`, cliquez sur la valeur **Shape Color** pour ouvrir la boîte de dialogue **Select color**, puis choisissez une couleur rose; modifiez également la valeur de **Transparency** en `90`.

![](/images/06_T03_Part_cube_additional_cut_2.png)

Un solide tourné et évidé, qui sera utilisé comme objet de coupe pour certains coins du solide interne.

## Finalisation du modèle

24. Assurez-vous que tous les objets sont visibles. Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez tous les objets, dans l'onglet **View**, changez la valeur de **Visibility** en `true`, ou appuyez sur Espace sur le clavier.

![](/images/07_T03_Part_ball_additional_both.png)

Le solide creux interne, ainsi que les objets externes qui serviront à le découper.

25. Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"), désélectionnez les objets; puis sélectionnez d'abord `Cut`, puis `Cut001`.

:   25.1. Appuyez ensuite sur ![](/images/Part_Cut.svg) [Soustraction](/Part_Cut/fr "Part Cut/fr"). Cela créera `Cut003`.

![](/images/08_T03_Part_ball_cut_1.png)

e solide creux interne, coupé par `Cut001`.

26. Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"), désélectionnez les objets; puis sélectionnez d'abord `Cut003`, puis `Cut002`.

:   26.1. Appuyez ensuite sur ![](/images/Part_Cut.svg) [Soustraction](/Part_Cut/fr "Part Cut/fr"). Cela créera `Cut004`. C'est le dernier objet.
:   26.2. Sélectionnez `Cut004`, cliquez sur la valeur **Shape Color** pour ouvrir la boîte de dialogue **Select color**, puis choisissez une couleur verte; modifiez également la valeur de **Line Width** en `2.0`.

![](/images/09_T03_Part_ball_cut_2.png)

Le solide creux interne, coupé par `Cut001` et `Cut002`. Modèle final.

27. Les objets réels n'ont pas d'arêtes ou d'angles parfaitement nets, il est donc possible d'appliquer un congé aux arêtes pour affiner le modèle.

:   27.1. Dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez `Cut004` puis appuyez sur ![](/images/Part_Fillet.svg) [Congé](/Part_Fillet/fr "Part Fillet/fr").
:   27.2. Dans le [Panneau des tâches](/Task_panel/fr "Task panel/fr") de **Fillet edges**, allez dans **Selection**, choisissez **Select bords**, puis appuyez sur All. Comme **Fillet type** choisissez `Constant radius`, puis définissez **Radius** sur `1 mm`.
:   24.3. Appuyez sur OK. Cela créera un objet `Fillet`.
:   27.4. Dans l'onglet **View**, modifiez la valeur de **Line Width** en `2.0`.

![](/images/10_T03_Part_ball_fillet.png)

Modèle terminé de la balle à trous avec des congés appliqués sur les bords.

Retrieved from "<http://wiki.freecad.org/index.php?title=Whiffle_Ball_tutorial/fr&oldid=1305138>"