---
title: Arch Tutoriel pour des fenêtres ouvertes
---
|  |
| --- |
| Tutoriel |
| Thème |
| Architecture |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 60 minutes |
| Auteurs |
| [vocx](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=21943) |
| Version de FreeCAD |
| 0.18 ou ultérieure |
| Fichiers exemples |
| aucun |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel montre comment placer des [Arch Fenêtres](/Arch_Window/fr "Arch Window/fr") et des portes dans un modèle de bâtiment, comment les afficher comme ouvertes dans la vue 3D et comment créer un dessin 2D (projection en plan et en élévation) pour le modèle. Il utilise l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr"), l'[atelier Arch Workbench](/Arch_Workbench/fr "Arch Workbench/fr") et l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").

Les outils couramment utilisés sont : [Draft Grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr"), [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr"), [Draft Fil](/Draft_Wire/fr "Draft Wire/fr"), [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"), [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr"), [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") et [TechDraw Vue architecturale](/TechDraw_ArchView/fr "TechDraw ArchView/fr").

Voir également la page suivante pour quelques vidéos sur la façon de travailler avec des fenêtres et des portes.

* [L'atelier utilisé pour créer des projets architecturaux s'appelle Arch](http://help-freecad-jpg87.fr/04_arch_ind.php)

## Installation

1. Ouvrez FreeCAD, créez un nouveau document vide et passez à l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr")

2. Assurez-vous que vos unités sont correctement définies dans le menu **Edition → Préférences → Général → Unités**. Par exemple, `MKS (m/kg/s/degré)` est bon pour gérer les distances dans un bâtiment typique; de plus, définissez le nombre de décimales sur `4` pour considérer même les plus petites fractions du mètre.

3. Utilisez le bouton [Draft Visibilité de la grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr") pour afficher une grille avec une résolution suffisante. Vous pouvez modifier l'apparence de la grille dans le menu **Edition → Préférences → Draft → Grille et ancrage → Grille**. Définissez des lignes tous les `50 mm`, avec des lignes principales toutes les `20` lignes (tous les mètres) et `1000 lignes` au total (la grille couvre une superficie de 50 mx 50 m).

4. [Zoom arrière](/Std_ViewZoomOut/fr "Std ViewZoomOut/fr") de la vue 3D si vous êtes trop près de la grille.

Nous sommes maintenant prêts à créer un bâtiment simple avec des murs fermés, deux portes et deux fenêtres.

## Placement d'un mur

5. Utilisez l'outil [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr") pour créer une polyligne fermée. Allez dans le sens antihoraire.

:   5.1. Premier point à (0, 0, 0); dans la boîte de dialogue, saisissez 0 m Enter, 0 m Valider, 0 m Valider.
:   5.2. Deuxième point à (3, 0, 0). Appuyez sur X pour contraindre le mouvement à l'axe X; entrez la valeur 3 m Valider.
:   5.3. Troisième point à (3, 4, 0). Appuyez sur Y pour contraindre le mouvement à l'axe Y; entrez la valeur 4 m Valider.
:   5.4. Quatrième point à (0, 4, 0). Appuyez sur X pour contraindre le mouvement à l'axe X; entrez la valeur - 3 m Valider.
:   5.5. Appuyez sur O pour fermer le fil et fermer l'outil.
:   5.6. Au pavé numérique, appuyez sur 0 pour obtenir une [vue axonométrique](/Std_View_Menu/fr "Std View Menu/fr") du modèle.
:   *Remarque:* les points peuvent également être définis avec le pointeur de la souris en choisissant les intersections sur la grille, à l'aide de la barre d'outils [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et de la méthode [Draft Grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr").

6. Sélectionnez `DWire` et remplacez la propriété Données**Make Face** par `false`.

7. Sélectionnez `DWire` et cliquez sur l'outil [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"). le mur est immédiatement créé avec une largeur (épaisseur) par défaut de 0,2 m et une hauteur de 3 m.

:   *Remarque:* si la propriété Données**Make Face** de `DWire` est `true`, cette étape créerait un bloc solide, au lieu d'utiliser uniquement le contour de `DWire`.

![](/images/01_T01_wire_wall.png)

Fil de base pour le mur; c'est un fil fermé qui ne fait pas une face

![](/images/02_T01_just_wall.png)

Mur construit à partir du fil

## Placement de portes et fenêtres

8. Cliquez sur l'outil [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr"); comme préréglage, sélectionnez `Simple door` et modifiez la hauteur à 2 m.

:   8.1. Changez l'accrochage en [Draft Milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") et essayez de sélectionner le bord inférieur du mur frontal; faites pivoter la [vue standard](/Std_View_Menu/fr "Std View Menu/fr") si nécessaire pour vous aider à choisir le bord et non la face du mur; lorsque le milieu est actif, cliquez pour placer la porte.
:   8.2. Cliquez à nouveau sur l'outil [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") et placez une autre porte, mais cette fois au milieu du mur arrière; faites pivoter la [vue standard](/Std_View_Menu/fr "Std View Menu/fr") si nécessaire.

![](/images/03_T01_wall_place_door_rear.png)

Accrochage au milieu du bord inférieur du mur pour placer la porte

9. Cliquez sur l'outil [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr"); comme préréglage, sélectionnez `Open 1-pane` et changez la `Sill height` à 1 m.

:   9.1. Conservez l'accrochage sur [Draft Milieu](/Draft_Snap_Midpoint "Draft Snap Midpoint") et essayez de sélectionner le bord inférieur du mur latéral gauche; faites pivoter la [vue standard](/Std_View_Menu/fr "Std View Menu/fr") si nécessaire pour vous aider à choisir le bord et non la face du mur; lorsque le milieu est actif, cliquez pour placer la fenêtre.

:   *Remarque:* la `Sill height` (Hauteur du seuil) est la distance entre le sol et le bord inférieur de l'élément. Pour les portes, la `Sill height` est généralement de 0 m car les portes touchent normalement le sol; d'autre part, les fenêtres ont une séparation habituelle de 0,5 m à 1,5 m du sol.

:   9.2. Cliquez à nouveau sur l'outil [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") et placez une autre fenêtre, mais cette fois au milieu du mur droit; faites pivoter la [vue standard](/Std_View_Menu/fr "Std View Menu/fr") si nécessaire. Cette fois, faites la largeur (longueur) de la fenêtre de 1,5 m, puis faites à nouveau la `Sill height` 1 m.

![](/images/04_T01_wall_place_door_side_right.png)

Accrochage au milieu du bord inférieur du mur pour placer la fenêtre

:   *Remarque :* le paramètre `Sill height` ne peut être défini que lors de la création initiale de la fenêtre à l'aide d'un préréglage. Une fois la fenêtre insérée, modifiez son emplacement en éditant le vecteur Données**Position** `[x, y, z]` de l'[Sketcher Esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") sous-jacente.

:   9.3. Déplacez `Window001` un peu plus haut. Sélectionnez le `Sketch003` sous-jacent et changez sa Données**Position** de `[3.1 m, 2.0 m, 1.0 m]` à `[3.1 m, 2.0 m, 1.6 m]`. L'ensemble de `Window001` doit monter. Le mur peut encore montrer une ouverture dans la position précédente; si cela se produit, faites un clic droit sur l'élément `Wall`, sélectionnez `Mark to recompute`, puis appuyez sur Ctrl+R pour [recalculer](/Recompute/fr "Recompute/fr") le modèle.

![](/images/04.1_T01_wall_built.png)

Mur construit avec portes et fenêtres

*Remarque :* lorsque vous placez une fenêtre ou une porte avec un préréglage, survolez l'élément au-dessus du [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") et attendez que l'élément tourne pour qu'il soit parallèle à ce mur. Visez le bord inférieur du mur et utilisez `Sill height` pour ajuster la distance par rapport au sol. Si cela est difficile, utilisez le mode d'aimantation [Draft Au plus proche](/Draft_Snap_Near "Draft Snap Near") de la barre d'outils [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") pour insérer l'élément n'importe où sur la face du mur, puis ajustez sa Données**Position** manuellement comme décrit ci-dessus. Le fait d'avoir plusieurs modes [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") actifs en même temps peut entraîner des problèmes de placement de l'élément, essayez donc avec une seule option à la fois.

*Remarque 2:* occasionnellement, la fenêtre peut être placée à l'extérieur du [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"); tant que l'élément est parallèle à ce mur, vous devriez pouvoir corriger la position manuellement.

## Ouvertures des portes

10. Dans l'arborescence, sélectionnez `Sketch` sous-jacent à `Door` et appuyez sur Espace ou modifiez la propriété Vue**Visibility** en `true`

11. Double-cliquez sur `Door` dans l'arborescence pour commencer à l'éditer.

:   11.1.. Dans le cadre `Window elements`, il y a deux volets, `Wires` et `Components`.
:   *Remarque:* avec un simple préréglage de porte, il y a deux fils, `Wire0` et `Wire1`, et deux composants, `OuterFrame` et `Door`. Une [Arch Porte](/Arch_Door/fr "Arch Door/fr") conçue sur mesure peut avoir plus de fils et de composants.

:   11.2. Cliquez sur `Door`, puis sur le bouton Edition. Cela montre les propriétés du composant `Door` comme par exemple `Name`, `Type`, `Wires`, `Thickness`, `Offset`, `Hinge` et `Opening mode`.
:   11.3. Dans la vue 3D, sélectionnez une seule arête verticale dans l'esquisse visible de la porte, puis cliquez sur le bouton Obtenir l'arête sélectionnée. Le bouton doit devenir un nom d'arête, par exemple Edge8.
:   11.4. Changez le `Opening mode` en Arc 90, ou toute autre option.
:   11.5. Cliquez sur le bouton +Create/update component puis sur Fermer pour terminer la modification de la porte. L'esquisse peut redevenir masquée.

![](/images/05_T01_window_edit.png)

Dialogue pour modifier une fenêtre ou une porte

![](/images/06_T01_window_edit_component.png)

Dialogue pour éditer les éléments qui composent une fenêtre ou une porte

![](/images/06.1_T01_window_edit_wire_door_front.png)

Bord vertical de l'esquisse choisie comme charnière pour une porte

12. Sélectionnez `Door` et donnez à la propriété Données**Opening** une valeur de 45. Le panneau plein de la porte doit s'ouvrir vers l'intérieur du bâtiment.

13. Sélectionnez `Door` et changez la propriété Données**Symbol Elevation** en `true`; le bout du fil créé indique quel côté de la porte s'ouvre; il est plus facile de voir si la vue est en [vue de face](/Std_ViewFront/fr "Std ViewFront/fr"). Changez la propriété Données**Symbol Plan** en `true`; un arc de cercle devrait indiquer l'étendue de l'ouverture de la porte; il est plus facile de voir si la vue est en [vue de dessus](/Std_ViewTop/fr "Std ViewTop/fr").

14. Répétez les étapes avec `Door001` et le `Sketch001` sous-jacent pour ouvrir la porte à 75 degrés vers l'intérieur du bâtiment. Activez également les symboles d'élévation et de plan.

![](/images/07_T01_window_property_view.png)

Vue des propriétés de la porte pour modifier la valeur d'ouverture, l'élévation du symbole, le plan du symbole et d'autres options

![](/images/08_T01_window_symbol_elevation.png)

Porte avec symbole d'élévation d'ouverture, vue de face

![](/images/09_T01_window_symbol_plan.png)

Porte avec symbole de plan, vue de dessus

## Ouvertures des fenêtres

10. Dans l'arborescence, sélectionnez `Sketch002` sous-jacent à `Window` et appuyez sur Espace ou modifiez la propriété Vue**Visibility** en `true`.

11. Double-cliquez sur `Window` dans l'arborescence pour commencer à l'éditer.

:   16.1. Cliquez sur le composant `InnerFrame`, puis sur le bouton Edition.

:   16.2. Dans la vue 3D, sélectionnez une seule arête verticale de `Sketch002`. Les fils représentant `OuterFrame` et `InnerFrame` sont très proches l'un de l'autre, donc [zoomer avant](/Std_ViewZoomIn/fr "Std ViewZoomIn/fr") aussi près que possible de l'esquisse pour sélectionner le fil approprié. Cliquez ensuite sur le bouton Get selected edge. Le bouton doit devenir un nom d'arête, par exemple Edge12.
:   *Remarque:* lorsqu'il y a beaucoup de solides à l'écran qu'il devient difficile de sélectionner une seule arête, passez en [mode filaire](/Std_DrawStyle/fr#Filaire "Std DrawStyle/fr") pour supprimer les faces de ces objets solides et ne voir que les fils, bords et contours.

:   16.3. Remplacez `Opening mode` par `Arc 90 inv`, ou toute autre option.

12. Sélectionnez `Window` et donnez à la propriété Données**Opening** une valeur de 45. Le cadre intérieur contenant le verre transparent doit s'ouvrir vers l'intérieur du bâtiment.

13. Sélectionnez `Window` et changez la propriété Données**Symbol Elevation** en `true`; le bout du fil créé indique quel côté de la fenêtre s'ouvre; il est plus facile de voir si la vue est en [vue de gauche](/Std_ViewLeft/fr "Std ViewLeft/fr"). Changez la propriété Données**Symbol Plan** en `true`; un arc de cercle devrait indiquer l'étendue de l'ouverture de la fenêtre; il est plus facile de voir si la vue est en [vue de dessus](/Std_ViewTop/fr "Std ViewTop/fr").

19. Répétez les étapes avec `Window001` et le sous-jacent `Sketch003` pour ouvrir la fenêtre à 75 degrés. Affichez également les symboles d'élévation et de plan. Dans ce cas, ne choisissez pas un fil vertical du `InnerFrame` comme charnière, mais choisissez le fil horizontal supérieur. Cela signifie que cette fenêtre s'ouvrira différemment de l'autre fenêtre. Le symbole d'élévation sera mieux vu à partir d'une [vue du côté droit](/Std_View_Menu/fr "Std View Menu/fr"). Le symbole du plan sera mieux vu de la [vue de face](/Std_ViewFront/fr "Std ViewFront/fr"); cependant, puisque le mur obstrue la vue, vous pouvez changer sa Vue**Transparency** en une valeur telle que 85 pour voir à travers; vous pouvez également changer son Vue**Display Mode** en `Wireframe` pour n'afficher que ses bords.

![](/images/06.2_T01_window_edit_wire_side_right.png)

Bord vertical de l'esquisse choisie comme charnière pour une fenêtre

![](/images/10_T01_window_all_symbol_axonometric.png)

Symboles d'élévation et de plan pour tous les éléments, vue axonométrique

![](/images/11_T01_window_all_symbol_top.png)

Symboles d'élévation et de plan pour tous les éléments, vue de dessus

## Réalisation d'un plan d'étage du bâtiment

20. Toujours dans l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr"), sélectionnez tous les composants de l'arborescence, les [Arch Murs](/Arch_Wall/fr "Arch Wall/fr"), les deux [Arch Fenêtres](/Arch_Window/fr "Arch Window/fr") et les deux [Arch Portes](/Arch_Door/fr "Arch Door/fr"), puis utilisez l'outil [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") pour créer un élément `Section`.

*Remarque:* changez la propriété Données**Arrow size** du plan de coupe en une valeur plus grande, par exemple, `200 mm`, afin que la direction de la section soit clairement visible dans la fenêtre 3D.

![](/images/11.1_T01_Arch_SectionPlane_all.png)

Plan de coupe coupant des objets solides, y compris des murs, des portes et des fenêtres

21. Passez à l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") et insérez une nouvelle page avec l'outil [TechDraw Page standard](/TechDraw_PageDefault/fr "TechDraw PageDefault/fr"); un nouvel objet `Page` est créé et la vue passe à cette page. La page insérée est une feuille A4 standard en orientation paysage, entourée d'un cadre de base. Utilisez l'outil [TechDraw Page à partir d'un modèle](/TechDraw_PageTemplate/fr "TechDraw PageTemplate/fr") si vous devez créer une nouvelle page en utilisant un modèle [SVG](/SVG/fr "SVG/fr") particulier.

22. Sélectionnez `Section` et utilisez l'outil [TechDraw Vue Arch](/TechDraw_ArchView/fr "TechDraw ArchView/fr") pour créer un objet `ArchView` dans la page. Très probablement, le nouvel objet ne sera pas visible dans la page car il a une très grande échelle de `1`, c'est-à-dire 1:1. Cela signifie que chaque mètre dans la vue 3D est affiché comme mètre dans la vue de page; comme la page ne mesure que 0.297 m x 0.210 m, la plupart des éléments sont trop grands pour tenir dans cette page à leur échelle naturelle.

23. Sélectionnez cet objet `ArchView` et changez la propriété Données**Scale** en `0.02`, ce qui équivaut à 1:50, une échelle adaptée aux bâtiments typiques. Cela signifie que chaque mètre dans la vue 3D sera affiché comme 20 mm dans la page. L'objet doit apparaître au centre de la page et peut être déplacé vers une meilleure position sur le côté gauche. Les deux portes doivent avoir l'air ouvertes, mais seule la fenêtre de gauche doit avoir l'air ouverte. La raison pour laquelle la fenêtre de droite n'apparaît pas dans la projection est que le plan défini par `Section` ne traverse pas cette fenêtre de droite.

![Section view of the building, A4 sheet, scale 1:50](/images/12_T01_TechDraw_window_all_symbols.png)

Section view of the building, A4 sheet, scale 1:50

Plan de coupe coupant des objets solides, y compris des murs, des portes et des fenêtres

24. Revenez à l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr") . Dans l'arborescence, sélectionnez à nouveau tous les composants et utilisez l'outil [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") pour créer un deuxième élément `Section001`.

:   24.1. Sélectionnez `Section001` et remplacez la propriété Données**Position** par `[1.5 m, 2.0 m, 1.8 m]`. Ce deuxième plan coupe tous les objets Arch.
:   24.2. Revenez à [atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr"). Sélectionnez `Section001`, utilisez l'outil [TechDraw Vue Arch](/TechDraw_ArchView/fr "TechDraw ArchView/fr") pour créer `ArchView001` et définissez Données**Scale** sur `0.02`. La nouvelle vue de la page TechDraw montre maintenant toutes les ouvertures dans les [Arch Murs](/Arch_Wall/fr "Arch Wall/fr") produites par les portes et les fenêtres.

*Remarque:* définissez Données**All On** sur `true` pour les objets [TechDraw Vue architecturale](/TechDraw_ArchView/fr "TechDraw ArchView/fr") afin que tous les éléments coupés par le plan soient visibles sur la page, quel que soit leur état de visibilité dans la fenêtre 3D. L'option Données**Show Fill** peut également être définie sur `true` pour dessiner une nuance sur les solides qui ont été coupés par le plan de coupe.

![](/images/13_T01_TechDraw_window_all_symbols_higher.png)

Vue en section du bâtiment, avec un deuxième plan coupé, feuille A4, échelle 1:50

## Faire une projection d'élévation du bâtiment

25. Revenez à l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr"). Dans l'arborescence, sélectionnez tous les composants, le [Arch Mur](/Arch_Wall/fr "Arch Wall/fr"), les deux [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") s et les deux [Arch Portes](/Arch_Door/fr "Arch Door/fr"), puis utilisez l'outil [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") pour créer un troisième élément `Section002`.

:   25.1. Faites pivoter `Section002`, de sorte qu'il coupe verticalement à travers le bâtiment. Modifiez les propriétés Données**Axis** en `[1, 0, 0]` et Données**Angle** en `90`.
:   25.2. Remplacez Données**Position** par `[1.5 m, -1 m, 1.5 m]`, de sorte que le plan soit devant le bâtiment.

![](/images/14.1_T01_Arch_SectionPlane_three.png)

Plans de section qui coupent ou regardent le bâtiment et les objets solides

26. Revenez à l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") et utilisez l'outil [TechDraw Vue Arch](/TechDraw_ArchView/fr "TechDraw ArchView/fr") sur `Section002`; n'oubliez pas d'ajuster l'échelle à `0.02` (1:50). Remplacez Données**Rotation** par `-90` pour corriger l'apparence des projections. Disposez `ArchView002` à côté des autres vues de la page. Cette troisième projection regarde le bâtiment de face.

![](/images/14_T01_TechDraw_window_all_symbols_elevation.png)

Vue de section du bâtiment, deux vues de dessus et une vue d'élévation, feuille A4, échelle 1:50

## Interaction Arch et TechDraw

Au moment de la rédaction de ce document (FreeCAD 0.18, novembre 2018), l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") ne peut afficher dans ses pages que ce que l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr") exporte en [SVG](/SVG/fr "SVG/fr"). Cela signifie que l'apparence des éléments inclus dans l'outil [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") et affichés par l'outil [TechDraw Vue Arch](/TechDraw_ArchView/fr "TechDraw ArchView/fr") est contrôlée par l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr").

l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") n'a qu'un contrôle minimal sur la façon dont il affiche ces objets [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") (`ArchView`). Par conséquent, les rapports de bogue et les demandes de fonctionnalités liées à l'affichage des éléments Arch doivent être déposés auprès des deux ateliers.

Une interaction plus étroite entre les ateliers est prévue pour les futures versions de FreeCAD. Dans ces versions, on s'attend à ce que les problèmes de longue date soient résolus, tels que le contrôle des caractéristiques des lignes et des faces (largeur de ligne, couleur de ligne, couleur de face, motifs de hachures, etc...).

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_for_open_windows/fr&oldid=1549402>"