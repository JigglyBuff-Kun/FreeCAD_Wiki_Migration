---
title: Draft Aimantation
---

## Description

Dans l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") et l'![](/images/Workbench_BIM.svg) [atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr"), vous pouvez créer une géométrie en sélectionnant des points dans la [vue 3D](/3D_view/fr "3D view/fr") ou en saisissant des coordonnées dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") des commandes. Une autre façon de sélectionner des points est l'aimantation. L'aimantation permet de sélectionner des points géométriques exacts sur des objets existants ou définis par ces objets ou la grille. Vous pouvez par exemple vous aimanter à l'extrémité d'une ligne, au centre d'un cercle ou à l'intersection de deux bords.

L'aimantation est disponible avec la plupart des commandes de [Draft](/Draft_Workbench/fr "Draft Workbench/fr") et [BIM](/BIM_Workbench/fr "BIM Workbench/fr").

![](/images/Draft_Snap_Endpoint_example.png)

Aimantation au point d'extrémité d'une arête

## Outils d'aimantation

Ces outils sont disponibles dans la barre d'outils Draft Aimantation et dans le [Draft Widget d'aimantation](/Draft_snap_widget/fr "Draft snap widget/fr").

Remarquez que les bords circulaires ne doivent pas nécessairement être des cercles complets.

- ![](/images/Draft_Snap_Lock.svg) [Verrouiller l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr") : active ou désactive l'aimantation de manière globale.

- ![](/images/Draft_Snap_Endpoint.svg) [Aimantation Extrémité](/Draft_Snap_Endpoint/fr "Draft Snap Endpoint/fr") : aimante aux extrémités des segments.

- ![](/images/Draft_Snap_Midpoint.svg) [Aimantation milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") : aimante au point milieu des segments.

- ![](/images/Draft_Snap_Center.svg) [Aimantation centre](/Draft_Snap_Center/fr "Draft Snap Center/fr") : aimante au point central des faces et des arêtes circulaires et au point Données**Placement** de [Draft Proxy de plan de travail](/Draft_WorkingPlaneProxy/fr "Draft WorkingPlaneProxy/fr") et [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr").

- ![](/images/Draft_Snap_Angle.svg) [Aimantation angle](/Draft_Snap_Angle/fr "Draft Snap Angle/fr") : aimante aux points cardinaux spéciaux des bords circulaires, aux multiples de 30° et 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Aimantation intersection](/Draft_Snap_Intersection/fr "Draft Snap Intersection/fr") : aimante à l'intersection de deux bords.

- ![](/images/Draft_Snap_Perpendicular.svg) [Aimantation perpendiculaire](/Draft_Snap_Perpendicular/fr "Draft Snap Perpendicular/fr") : aimante aux points perpendiculaires sur les faces ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) et les arêtes.

- ![](/images/Draft_Snap_Extension.svg) [Aimantation extension](/Draft_Snap_Extension/fr "Draft Snap Extension/fr") : aimante à une ligne imaginaire qui s'étend au-delà des extrémités des bords droits.

- ![](/images/Draft_Snap_Parallel.svg) [Aimantation parallèle](/Draft_Snap_Parallel/fr "Draft Snap Parallel/fr") : aimante à une ligne imaginaire parallèle aux bords droits.

- ![](/images/Draft_Snap_Special.svg) [Aimantation spécial](/Draft_Snap_Special/fr "Draft Snap Special/fr") : aimante à des points spéciaux définis par l'objet.

- ![](/images/Draft_Snap_Near.svg) [Aimantation Au plus proche](/Draft_Snap_Near/fr "Draft Snap Near/fr") : aimante au point le plus proche sur les faces et les bords.

- ![](/images/Draft_Snap_Ortho.svg) [Aimantation orthogonal](/Draft_Snap_Ortho/fr "Draft Snap Ortho/fr") : aimante sur des lignes imaginaires qui croisent le point précédent à des multiples de 45°.

- ![](/images/Draft_Snap_Grid.svg) [Aimantation grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr") : aimante aux intersections des lignes de la grille.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Aimantation plan de travail](/Draft_Snap_WorkingPlane/fr "Draft Snap WorkingPlane/fr") : projette les points d'aimantation sur le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours.

- ![](/images/Draft_Snap_Dimensions.svg) [Aimantation dimensions](/Draft_Snap_Dimensions/fr "Draft Snap Dimensions/fr") : montre les dimensions X et Y temporaires.

- ![](/images/Draft_ToggleGrid.svg) [Basculer la grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr") : modifie la visibilité de la grille.

## Aimantation avancée

- Des points d'aimantation supplémentaires peuvent être obtenus en combinant deux options d'aimantation. Par exemple, en combinant [Draft Aimantation Orthogonal](/Draft_Snap_Ortho/fr "Draft Snap Ortho/fr") et [Draft Aimantation Extension](/Draft_Snap_Extension/fr "Draft Snap Extension/fr"), vous obtiendrez un point d'aimantation à l'intersection de leurs lignes imaginaires.
- L'aimantation peut être combinée avec des [constraintes](/Draft_Constrain/fr "Draft Constrain/fr").
- Appuyez sur Q pour insérer un "point d'aimantation" à l'emplacement en cours du curseur. Vous pouvez vous aimanter aux axes orthogonaux des points d'arrêt et aux intersections de ces axes. Si l'option [Draft Aimantation Milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") est active, vous pouvez également vous fixer sur le point milieu entre deux points d'arrêt.
- Appuyez une ou plusieurs fois sur ` pour effectuer une aimantation sur un objet qui est masqué par d'autres éléments géométriques. Cette opération est appelée "cycle d'aimantation". Notez que vous devez déplacer légèrement le curseur dans la [Vue 3D](/3D_view/fr "3D view/fr") après avoir appuyé sur la touche.

![](/images/Draft_Snap_example_cycling_1.png)

Cycle d'aimantation 1 : le rectangle rouge a été créé en premier, il a donc la priorité d'aimantation. Sans le cycle d'aimantation, vous ne pouvez pas aimanter le rectangle vert, qui est recouvert par le rectangle rouge.

![](/images/Draft_Snap_example_cycling_2.png)

Cycle d'aimantation 2 : après avoir utilisé la touche cycle d'aimantation une fois, le rectangle vert reçoit la priorité d'aimantation. L'aimantation au point milieu du bord vert superposé est maintenant possible.

## Remarques

- Plusieurs options d'aimantation peuvent être actives en même temps, mais il est conseillé de n'activer que celles dont vous avez réellement besoin. En activer trop peut ralentir les choses.
- version 1.0 et précédentes : ce n'est pas une bonne idée d'avoir [Draft Aimantation Au plus proche](/Draft_Snap_Near/fr "Draft Snap Near/fr") actif en permanence car il est prioritaire sur de nombreuses autres options d'aimantation.
- [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") : il est possible d'avoir [Draft Aimantation Au plus proche](/Draft_Snap_Near/fr "Draft Snap Near/fr") activé en permanence, mais cela signifie que vous devez davantage bouger la souris et la pointer plus précisément, pour d'autres aimantations aux objets.

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

- Lorsqu'une commande de [Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou de [BIM](/BIM_Workbench/fr "BIM Workbench/fr") nécessitant la saisie de points est active, la distance maximale à laquelle [Draft Aimantation Grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr") détecte les intersections des lignes de la grille peut être modifiée à la volée en appuyant sur P (touche d'augmentation) ou M (touche de diminution). Ce réglage est enregistré : **Outils → Modifier les paramètres... → BaseApp → Preferences → Mod → Draft → snapRange**. Elle peut également être modifiée dans le panneau des tâches de la commande [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
- Pour n'aimanter que lorsque la **Touche pour l'aimantation** est maintenue enfoncée :
  - Désélectionner : **Édition → Préférences... → Draft → Grille et aimantation → Toujours aimanter**.
  - La **Touche pour l'aimantation** par défaut, Ctrl, peut être modifiée : **Édition → Préférences... → Draft → Grille et accrochage → Touche pour l'aimantation**.
- Pour n'afficher la barre d'outils d'aimantation de Draft que lorsqu'une commande est active, sélectionnez : **Édition → Préférences... → Draft → Interface → Afficher la barre d'outils d'aimantation de Draft uniquement pendant les commandes**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
- Les symboles d'aimantation peuvent être modifiés : **Édition → Préférences... → Draft → Grille et aimantation → Style des symboles d'aimantation**.
- La couleur des symboles d'aimantation et les [Draft Aimantation Dimensions](/Draft_Snap_Dimensions/fr "Draft Snap Dimensions/fr") peuvent être modifiées : **Édition → Préférences... → Draft → Grille et aimantation → Couleur des symboles d'aimantation**.
- La taille des symboles d'aimantation dépend de : **Édition → Préférences... → Affichage → Vue 3D → Taille des marqueurs**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
- Les raccourcis clavier mentionnés pour un seul caractère peuvent être modifiés : **Édition → Préférences... → Draft → Interface → Raccourcis des commandes**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap/fr&oldid=1565112>"
