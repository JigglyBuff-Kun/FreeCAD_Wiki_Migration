---
title: Draft Tutoriel
---
|  |
| --- |
| Tutoriel |
| Thème |
| Esquisser |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 30 minutes |
| Auteurs |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) et vocx |
| Version de FreeCAD |
| 0.19 |
| Fichiers exemples |
| [Draft tutorial updated](https://forum.freecadweb.org/viewtopic.php?f=36&t=43651) |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel a été écrit à l'origine par Drei et a été écrit et illustré par vocx.

Ce tutoriel est destiné à présenter au lecteur le flux de travail de base de l'![](/images/Workbench_Draft.svg) [Atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").

Le lecteur pratiquera:

* création de lignes, d'arcs et de polygones
* l'utilisation de plans de travail
* la création de dimensions, de texte et de formes à partir de texte
* la création d'un dessin technique

Ce tutoriel utilise la notation `(x, y, z)` pour désigner les coordonnées nécessaires pour définir des points dans un objet. L'unité par défaut est le millimètre `mm`.

![](/images/00_Dr01_Draft_Tutorial_final.png)

Dessin final comprenant divers objets Draft.

## Installation

1. Ouvrez FreeCAD, créez un nouveau document vide avec **Fichier → ![](/images/Std_New.svg) [Nouveau](/Std_New/fr "Std New/fr")**.

:   1.1. Basculez vers l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") depuis le [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr") ou le menu **Affichage → Atelier → ![](/images/Workbench_Draft.svg) Draft**.
:   1.2. Assurez-vous de comprendre comment utiliser l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), en particulier les onglets **Données** et **Affichage** pour modifier les propriétés. Lors de la modification des propriétés, vous devrez peut-être effectuer une action ![](/images/Std_Refresh.svg) [Std Recalculer](/Std_Refresh/fr "Std Refresh/fr") pour voir le résultat dans la [vue 3D](/3D_view/fr "3D view/fr").
:   1.3. Comme les objets Draft sont des formes planes, ils sont mieux vus du dessus. Utilisez ![](/images/Std_ViewTop.svg) [vue de dessus](/Std_ViewTop/fr "Std ViewTop/fr") pour définir la [vue 3D](/3D_view/fr "3D view/fr").
:   1.4. Bien qu'elle ne soit pas utilisée dans ce tutoriel, la grille Draft est utile pour positionner des éléments géométriques. Utilisez ![](/images/Draft_SelectPlane.svg) [Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") pour définir à la fois le plan de travail et la grille, puis affichez et masquez la grille avec ![](/images/Draft_ToggleGrid.svg) [Visibilité de la grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr").

## Verrouillage de la barre d'outils

2. L'[Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") est normalement activée lorsque vous basculez vers l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").

:   2.1. Pour vous assurer qu'il est toujours là, allez dans [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"), **Edition → Préférences → Draft → onglet: Grille et aimantation**.
:   2.2. Vérifiez que la barre d'outils **Montrer la barre d'outils d'aimantation** est active.

Vous pouvez aussi changer la visibilité et les propriétés de la grille Draft dans cette même fenêtre.

## Plans de travail

La plupart des objets Draft sont des formes planes, ils sont donc naturellement basés sur un *plan de travail*. Un plan de travail peut être l'un des plans de coordonnées globaux principaux XY, XZ et YZ, ou il peut s'agir d'un plan qui leur est parallèle avec un décalage positif ou négatif, ou il peut s'agir d'un plan défini par la face d'un objet solide.

3. Appuyez sur ![](/images/Draft_SelectPlane.svg) [SelectPlane](/Draft_SelectPlane/fr "Draft SelectPlane/fr") ou allez dans le menu **Utilities → ![](/images/Draft_SelectPlane.svg) [Select plane](/Draft_SelectPlane/fr "Draft SelectPlane/fr")** pour ouvrir le plan de travail [Panneau des tâches](/Task_panel/fr "Task panel/fr").

:   3.1. Appuyez sur ![](/images/Std_ViewTop.svg) Top (XY).

Avant d'appuyer sur le bouton, vous pouvez également modifier la valeur du décalage en millimètres, ainsi que l'espacement de la grille, les lignes principales et le rayon d'accrochage.

## Lignes et arcs

4. Nous allons créer des arcs et des lignes.

:   4.1. Appuyez sur ![](/images/Draft_Arc.svg) [Arc](/Draft_Arc/fr "Draft Arc/fr").
:   4.2. Définissez **Center** sur `(0, 0, 0)` et appuyez sur Validez.
:   4.3. Réglez **Radius** sur `30 mm` et appuyez sur Validez.
:   4.4. Réglez **Start angle** sur `60.0°` et appuyez sur Validez.
:   4.5. Réglez **Aperture angle** sur `60.0°` et appuyez sur Validez.
:   4.6. Répétez la même procédure pour un deuxième arc avec un rayon de `25 mm`, les autres propriétés sont les mêmes.

5. Nous allons maintenant créer un profil fermé en liant les arcs avec des lignes.

:   5.1. Appuyez sur ![](/images/Draft_Line.svg) [Ligne](/Draft_Line/fr "Draft Line/fr").
:   5.2. Dans la [Barre d'outils Aimantation](/Draft_Snap/fr "Draft Snap/fr"), assurez-vous que ![](/images/Draft_Snap_Lock.svg) [Activer/désactiver l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr") est actif et que ![](/images/Draft_Snap_Endpoint.svg) [Extrémité](/Draft_Snap_Endpoint/fr "Draft Snap Endpoint/fr") également. Lorsque vous déplacez le pointeur sur l'arc et à proximité de l'un de ses extrémités, l'icône ![](/images/Draft_Snap_Endpoint.svg) [Extrémité](/Draft_Snap_Endpoint/fr "Draft Snap Endpoint/fr") doit apparaître. De plus, le point cible est mis en valeur par un grand point blanc. Cliquez pour sélectionner ce point.
:   5.3. Déplacez le pointeur vers l'extrémité la plus proche de l'autre arc pour lier les deux arcs ensemble.
:   5.4. Répétez le processus pour l'autre côté de l'arc pour fermer le profil.

![](/images/01_Dr01_Draft_Arc_profile.png)

Profil fermé créé par deux arcs et deux lignes.

## Fusion ou composition

Nous avons maintenant plusieurs objets dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") qui forment un profil fermé. Cependant, ce profil est toujours composé d'objets déconnectés. Chacun d'eux peut être édité et déplacé indépendamment des autres. Il est possible de continuer à travailler avec les éléments de cette manière mais il est également possible de les fusionner en un seul objet.

6a. Notez que fusionner les objets en un seul objet créera un objet qui n'est plus paramétrique, de sorte que leurs propriétés ne peuvent plus être modifiées.

:   6a.1. Sélectionnez les quatre objets dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr") ou en maintenant Ctrl et en les sélectionnant dans la [Vue 3D](/3D_view/fr "3D view/fr").
:   6a.2. Une fois ces objets sélectionnés, cliquez sur ![](/images/Draft_Upgrade.svg) [Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr").
:   6a.3. Cela agrègera les quatre objets en un seul `Wire`.

6b. Si vous souhaitez conserver la nature paramétrique des objets, vous pouvez créer un composé à la place.

:   6b.1. Basculez vers ![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr").
:   6b.2. Une fois ces objets sélectionnés, cliquez sur ![](/images/Part_Compound.svg) [Part Composé](/Part_Compound/fr "Part Compound/fr").

## Rectangles, cercles et polygones

7. Nous allons dessiner un cadre rectangulaire. (retournez vers l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").)

:   7.1. Appuyez sur ![](/images/Draft_Rectangle.svg) [Rectangle](/Draft_Rectangle/fr "Draft Rectangle/fr").
:   7.2. Entrez les valeurs du premier point `(-100, -60, 0)` et appuyez sur Validez.
:   7.3. Assurez-vous que l'option **Relative** n'est pas cochée, car nous utiliserons des unités absolues. Vous pouvez appuyer sur R sur le clavier pour activer et désactiver rapidement cette option.
:   7.4. Entrez les valeurs du deuxième point `(140, 90, 0)` et appuyez sur Validez.

Un rectangle est créé. Allez dans l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour modifier ses propriétés. Si vous ne voulez pas que le rectangle crée une face, définissez Données**Make Face** sur `false`. Si vous voulez créer une face mais ne voyez que les fils de cet objet, conservez Données**Make Face** sur `true` mais réglez Vue**Display Mode** sur `Wireframe`.

8. Nous allons dessiner un cercle.

:   8.1. Appuyez sur ![](/images/Draft_Circle.svg) [Cercle](/Draft_Circle/fr "Draft Circle/fr").
:   8.2. Entrez les valeurs du centre `(0, 0, 0)` et appuyez sur Validez.
:   8.3. Définissez le rayon sur `15 mm` et appuyez sur Validez.

9. Nous allons dessiner un polygone régulier.

:   9.1. Appuyez sur ![](/images/Draft_Polygon.svg) [Polygone](/Draft_Polygon/fr "Draft Polygon/fr").
:   9.2. Entrez les valeurs du centre `(0, 0, 0)` et appuyez sur Validez.
:   9.3. Définissez le nombre de côtés sur `6` et appuyez sur Validez.
:   9.4. Définissez le rayon sur `50 mm` et appuyez sur Validez.

Encore une fois, vous pouvez modifier les propriétés Données**Make Face** et Vue**Display Mode** dans l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr") si vous le souhaitez.

Le rectangle, le cercle, le polygone et la plupart des autres objets créés avec l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") partagent de nombreuses données et propriétés d'affichage car ils sont dérivés de la même classe de base, [Part Part2DObject](/Part_Part2DObject/fr "Part Part2DObject/fr").

![](/images/02_Dr01_Draft_Rectangle_circle_polygon.png)

Rectangle, cercle et polygone ajoutés.

## Réseaux

Les réseaux sont utilisés pour répliquer un objet plusieurs fois dans une direction orthogonale (X, Y, Z) autour d'un axe de révolution ou le long d'une trajectoire.

10. Nous allons créer un réseau polaire.

:   10.1. Sélectionnez l'objet `Wire` qui a été précédemment créé avec l'outil ![](/images/Draft_Upgrade.svg) [Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr") ou `Compound` créé avec l'outil ![](/images/Part_Compound.svg) [Part Composé](/Part_Compound/fr "Part Compound/fr").
:   10.2. Appuyez sur ![](/images/Draft_PolarArray.svg) [Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr").
:   10.3. Ajustez l'angle polaire sur `360°`.
:   10.4. Définissez le nombre d'éléments sur `4`.
:   10.5. Saisissez les valeurs du centre de rotation `(0, 0, 0)` et appuyez sur Validez.

L'objet réseau montre des copies de l'objet autour de l'origine.

![](/images/03_Dr01_Draft_PolarArray.png)

Réseau polaire du petit profil centré autour de l'origine.

## Cotes

Les cotes linéaires fonctionnent mieux lorsque vous utilisez les méthodes d'[aimantation](/Draft_Snap/fr "Draft Snap/fr") appropriées pour sélectionner les points et les arêtes à mesurer. Cependant, ils peuvent également être créés en spécifiant des coordonnées absolues.

11. Créez des dimensions pour les différents objets.

:   11.1. Appuyez sur ![](/images/Draft_Dimension.svg) [Dimension](/Draft_Dimension/fr "Draft Dimension/fr").
:   11.2. Choisissez le premier point. Dans ce tutoriel, le premier point sera toujours l'origine `(0, 0, 0)`.
:   11.3. Dans la [Barre d'outils Aimantation](/Draft_Snap/fr "Draft Snap/fr"), assurez-vous que ![](/images/Draft_Snap_Lock.svg) [Bascule l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr") est actif et que ![](/images/Draft_Snap_Midpoint.svg) [Milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") également. Lorsque vous déplacez le pointeur vers le bord supérieur du polygone, l'icône ![](/images/Draft_Snap_Midpoint.svg) [Milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") doit apparaître; cliquez pour sélectionner ce point.
:   11.4. Déplacez le curseur vers la droite pour spécifier l'emplacement de la dimension, puis cliquez pour définir la position finale, autour de `(100, 20, 0)`. La cote affichera automatiquement la valeur de longueur mesurée entre les deux points.
:   11,5. Sélectionnez l'objet dimension dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") remplacez Vue**Font Size** par `6 mm`, définissez Vue**Ext Lines** à `45 mm` et Vue**Show Unit** à `false`.

12. Répétez le processus pour les deux arcs du profil fermé. Le premier point de la mesure sera toujours l'origine et le second point utilisera le ![](/images/Draft_Snap_Midpoint.svg) [Milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") de l'arc.

13. Répétez le processus pour le cercle situé au centre. Le premier point de la mesure sera toujours l'origine. Pour sélectionner le deuxième point, assurez-vous que ![](/images/Draft_Snap_Lock.svg) [Verrouiller l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr") est actif et que seul ![](/images/Draft_Snap_Angle.svg) [Angle](/Draft_Snap_Angle/fr "Draft Snap Angle/fr") également. Lorsque vous déplacez le pointeur vers le haut du cercle, l'icône ![](/images/Draft_Snap_Angle.svg) [Angle](/Draft_Snap_Angle/fr "Draft Snap Angle/fr") doit apparaître. Cliquez pour sélectionner ce point. Déplacez ensuite le curseur vers la droite et cliquez pour fixer la cote.

N'oubliez pas d'ajuster Vue**Font Size** et d'autres propriétés pour voir correctement la dimension.

![](/images/04_Dr01_Draft_Dimension.png)

Cotes qui mesurent la distance verticale entre l'origine et le haut du cercle, des arcs et du polygone.

## Textes et Formes à partir de texte

14. Les objets texte sont de simples figures planes qui sont créées dans la [vue 3D](/3D_view/fr "3D view/fr") mais qui n'ont pas de véritable "[Forme](/Shape/fr "Shape/fr")" sous jacente. Cela signifie qu'ils ne peuvent pas être utilisés dans des opérations complexes avec des formes telles que des extrusions ou des opérations booléennes.

:   14.1. Appuyez sur ![](/images/Draft_Text.svg) [Texte](/Draft_Text/fr "Draft Text/fr").
:   14.2. Sélectionnez le point de référence dans la [Vue 3D](/3D_view/fr "3D view/fr"). Dans la [Barre d'outils Aimantation](/Draft_Snap/fr "Draft Snap/fr"), assurez-vous que ![](/images/Draft_Snap_Lock.svg) [Bascule l'aimantation](/Draft_Snap_Lock/fr "Draft Snap Lock/fr") est actif et que ![](/images/Draft_Snap_Midpoint.svg) [Milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") également. Déplacez le pointeur vers le bord supérieur de l'arc le plus élevé, de sorte que l'icône ![](/images/Draft_Snap_Midpoint.svg) [Milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") s'affiche. Cliquez pour sélectionner ce point.
:   14.3. Entrez le **Text** souhaité et appuyez une fois sur Validez pour commencer une nouvelle ligne; ajoutez plus de lignes de texte au besoin.
:   14.4. Lorsque vous êtes prêt à terminer l'édition, appuyez deux fois sur Validez.
:   14,5. Sélectionnez l'objet texte dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") remplacez Vue**Font Size** par `6 mm` et Vue**Justification** à `Center`.

15. Les objets ShapeString sont des formes constituées de fils primitifs qui suivent les lignes indiquées par une certaine police. Cela signifie que ces objets ont une vraie "[Forme](/Shape/fr "Shape/fr")" sous jacente et peuvent donc être utilisés dans des opérations complexes comme les extrusions et les opérations booléennes.

:   15.1. Appuyez sur ![](/images/Draft_ShapeString.svg) [Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr").
:   15.2. Déplacez le pointeur vers l'emplacement souhaité dans la [vue 3D](/3D_view/fr "3D view/fr") au-dessus du polygone régulier, et cliquez une fois. Cela corrigera le point de base du ShapeString. Les coordonnées peuvent également être entrées manuellement, par exemple, `(-20, 65, 0)`.
:   15.3. Entrez la **Chaîne de caractère** souhaitée et choisissez la **Hauteur** souhaitée.
:   15.4. S'il n'y a pas de fichier de police par défaut, vous devez cliquer sur les points de suspension ... pour ouvrir une boîte de dialogue pour choisir l'emplacement de la police dans le système.
:   15.5. Lorsqu'un fichier de police valide a été spécifié, vous pouvez cliquer sur OK ou appuyer sur Entrée.

![](/images/05_Dr01_Draft_Text_ShapeString.png)

Objets Text et ShapeString ajoutés.

Pour extruder des lettres et les graver sur des solides, voir le [Draft Tutoriel Forme à partir de texte](/Draft_ShapeString_tutorial/fr "Draft ShapeString tutorial/fr").

## Création de dessins techniques

Dans l'état actuel des choses, les objets que nous avons créés peuvent être sauvegardés, exportés vers d'autres formats [SVG](/SVG/fr "SVG/fr") ou [DXF](/DXF/fr "DXF/fr") ou imprimés.

Si vous le souhaitez, vous pouvez créer un dessin technique pour afficher ces objets avec des informations supplémentaires comme un cadre.

Avant de faire quoi que ce soit, masquez la grille Draft en appuyant sur ![](/images/Draft_ToggleGrid.svg) [Bascule de la grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr").

16. Basculez vers l' ![](/images/Workbench_TechDraw.svg) [atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").

:   16.1. Créez une page standard en appuyant sur ![](/images/TechDraw_PageDefault.svg) [Page standard](/TechDraw_PageDefault/fr "TechDraw PageDefault/fr").
:   16.2. Dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez tous les objets créés, à l'exception de la page, puis appuyez sur ![](/images/TechDraw_ActiveView.svg) [Vue active](/TechDraw_ActiveView/fr "TechDraw ActiveView/fr"). Appuyez sur OK avec les options par défaut. La création de la vue dans la page peut prendre quelques secondes.
:   16.3. La sélection de l'objet Page dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") affichera automatiquement la page dans la fenêtre principale. Avec la page sélectionnée, allez dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") et changez Données**Scale** en `0.75`.
:   16.4. Développez l'objet Page dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour sélectionner l'objet ActiveView. Avec cette vue sélectionnée, allez dans [éditeur de propriétés](/Property_editor/fr "Property editor/fr") et changez Données**Scale Type** en `Page`.
:   16.5. Recalculez le modèle en utilisant ![](/images/Std_Refresh.svg) [Recalculer](/Std_Refresh/fr "Std Refresh/fr") ou en appuyant sur F5.
:   16.6. Cachez les cadres des objets en appuyant sur ![](/images/TechDraw_ToggleFrame.svg) [Bascule des cadres](/TechDraw_ToggleFrame/fr "TechDraw ToggleFrame/fr").

En savoir plus sur l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") en lisant le [TechDraw: Tutoriel d'introduction](/Basic_TechDraw_Tutorial/fr "Basic TechDraw Tutorial/fr").

![](/images/06_Dr01_Draft_TechDraw_page.png)

Page TechDraw avec une projection des formes créées avec l'atelier Draft.

TechDraw fonctionne mieux avec les objets qui ont une [Part TopoShape](/Part_TopoShape/fr "Part TopoShape/fr"). Étant donné que certains objets de Draft, tels que [Draft Textes](/Draft_Text/fr "Draft Text/fr") et [Draft Dimensions](/Draft_Dimension/fr "Draft Dimension/fr"), n'ont pas de telles "[formes](/Shape/fr "Shape/fr")", certaines opérations de TechDraw ne fonctionnent pas avec ces éléments.

Les outils tels que ![](/images/TechDraw_ActiveView.svg) [TechDraw Vue active](/TechDraw_ActiveView/fr "TechDraw ActiveView/fr"), ![](/images/TechDraw_DraftView.svg) [TechDraw Vue Draft](/TechDraw_DraftView/fr "TechDraw DraftView/fr") et ![](/images/TechDraw_ArchView.svg) [TechDraw Vue architecturale](/TechDraw_ArchView/fr "TechDraw ArchView/fr") fonctionnent en recevant une image SVG interne générée par les fonctions Draft internes; par conséquent, TechDraw n'a pas beaucoup de contrôle sur la façon dont ces vues sont affichées. Une plus grande intégration de Draft et TechDraw est un travail en cours.

## Remarques finales

L'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") est à bien des égards similaire au [atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), car tous deux sont destinés à produire des formes 2D. La principale différence réside dans la façon dont chaque atelier gère les systèmes de coordonnées et la façon dont les objets sont positionnés. Dans Draft, les objets sont librement positionnés dans le système de coordonnées global, en alignant généralement leurs points sur une grille ou sur d'autres objets. Dans Sketcher, un "[objet sketch](/Sketch/fr "Sketch/fr")" définit un système de coordonnées local qui sert de référence pour tous les éléments géométriques de cette esquisse. De plus, l'esquisse s'appuie sur des «contraintes» pour définir la position finale de ses points.

* L'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") est destiné aux dessins 2D qui peuvent être dessinés sur une grille. L'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") s'appuie principalement sur les outils définis dans l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").

* L'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") est destiné aux dessins 2D qui nécessitent des relations précises entre ses points. Il ne s'appuie pas sur une grille mais sur des règles de positionnement (contraintes) pour déterminer où seront placés les points et les arêtes. L'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") est principalement utilisé avec l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") pour la création de solides [corps](/Body/fr "Body/fr").

* Il est possible de transformer un objet Draft en [Esquisse](/Sketch/fr "Sketch/fr") et inversement en utilisant l'outil ![](/images/Draft_Draft2Sketch.svg) [Draft Draft vers esquisse](/Draft_Draft2Sketch/fr "Draft Draft2Sketch/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_tutorial/fr&oldid=1549433>"