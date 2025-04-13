---
title: Interface
---
## Introduction

L’interface FreeCAD est basée sur Qt, un toolkit d’interface utilisateur graphique bien connu, particulièrement utilisé sous Linux mais également disponible sous Windows et MacOS.

![](/images/FreeCAD_interface_base_divisions.svg)

Interface standard dans v0.19.

La fenêtre principale de l'application peut être grossièrement divisée en 11 sections :

1. La [zone de vue principale](/Main_view_area/fr "Main view area/fr") qui peut contenir différentes fenêtres à onglets
2. La [vue 3D](/3D_view/fr "3D view/fr") normalement intégrée dans la [zone de vue principale](/Main_view_area/fr "Main view area/fr")
3. La partie supérieure de la [vue combinée](/Combo_view/fr "Combo view/fr") qui comprend la [vue en arborescence](/Tree_view/fr "Tree view/fr") et le [panneau des tâches](/Task_Panel/fr "Task Panel/fr")
4. La partie inférieure de la [vue combinée](/Combo_view/fr "Combo view/fr") qui comprend l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr")
5. La [fenêtre de sélection](/Selection_view/fr "Selection view/fr")
6. La [vue rapport](/Report_view/fr "Report view/fr")
7. La [console Python](/Python_console/fr "Python console/fr")
8. La [barre d'état](/Status_bar/fr "Status bar/fr")
9. La zone de la barre d'outils, voir les informations suivantes sur les barres d'outils
10. Le [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr") qui est lui-même une barre d'outils
11. Le [menu standard](/Standard_Menu/fr "Standard Menu/fr")

## Composants de l'interface

Comme beaucoup de logiciels, FreeCAD comprend une barre de menu standard, puis une série de barres d'outils et de panneaux où se trouvent les outils de l'utilisateur.

### Menus

Les [menus standard](/Standard_Menu/fr "Standard Menu/fr") sont :
[**Fichier**](/Std_File_Menu/fr "Std File Menu/fr"), [**Édition**](/Std_Edit_Menu/fr "Std Edit Menu/fr"), [**Affichage**](/Std_View_Menu/fr "Std View Menu/fr"), [**Outils**](/Std_Tools_Menu/fr "Std Tools Menu/fr"), [**Macro**](/Std_Macro_Menu/fr "Std Macro Menu/fr"), [**Fenêtre**](/Std_Windows_Menu/fr "Std Windows Menu/fr"), [**Aide**](/Std_Help_Menu/fr "Std Help Menu/fr").

### Barres d'outils

Les barres d'outils standard qui apparaissent dans l'interface sont :

* Barre d’outils Fichier : outils pour travailler avec des fichiers, ouvrir des documents, copier, coller, annuler et rétablir des actions.
* [Barre d’outils Ateliers](/Std_Workbench/fr "Std Workbench/fr") : contient un seul widget pour sélectionner l'[atelier](/Workbenches/fr "Workbenches/fr") actif.
* Barre d’outils Macro : outils pour enregistrer, éditer et exécuter [macros](/Macros/fr "Macros/fr").
* Barre d’outils Vue : outils permettant de contrôler l’apparence des objets dans la [vue 3D](/3D_view/fr "3D view/fr").
* Barre d'outils Structure : outils pour organiser les objets dans le document et créer des liens vers des documents supplémentaires.

Celles-ci peuvent être activées ou désactivées en cliquant avec le bouton droit de la souris sur un espace vide de l'une des barres d'outils et en choisissant l'élément souhaité ou par le menu **Affichage → Barres d'outils**.

### Panneaux

Les panneaux principaux permettant de travailler avec des objets sont :

* [Vue 3D](/3D_view/fr "3D view/fr") : la zone où la géométrie 2D et 3D est dessinée.
* [Vue combinée](/Combo_view/fr "Combo view/fr") : le panneau qui contient la [vue en arborescence](/Tree_view/fr "Tree view/fr"), le [panneau de tâches](/Task_panel/fr "Task panel/fr"), et l'[éditeur de propriété](/Property_editor/fr "Property editor/fr").
* [Vue en arborescence](/Tree_view/fr "Tree view/fr"): l'élément qui montre tous les objets du document et leur historique paramétrique.
* [Panneau de tâches](/Task_panel/fr "Task panel/fr") : panneau affichant différentes actions et options en fonction de l'outil de dessin sélectionné.
* [Éditeur de propriétés](/Property_editor/fr "Property editor/fr") : l'endroit où les propriétés de l'objet sont modifiées.
* [Vue de sélection](/Selection_view/fr "Selection view/fr") : panneau affichant les éléments actuellement sélectionnés.
* [Vue rapport](/Report_view/fr "Report view/fr") : la zone de texte contenant différents messages de l'application et de ses outils.
* [Console Python](/Python_console/fr "Python console/fr") : l'éditeur qui permet de lancer le code de manière interactive dans la console [Python](/Python/fr "Python/fr") pour voir les résultats dans la [vue 3D](/3D_view/fr "3D view/fr").
* [Barre d'état](/Status_bar/fr "Status bar/fr") : la barre qui montre certains messages de l'application et qui a le sélecteur pour la [navigation par la souris](/Mouse_navigation/fr "Mouse navigation/fr").
* [Vue DAG](/DAG_view/fr "DAG view/fr"): une alternative à la [vue en arborescence](/Tree_view/fr "Tree view/fr"), qui montre les relations entre différents objets graphiquement.

À l'exception de la vue 3D, tout peut être activé ou désactivé en cliquant avec le bouton droit de la souris sur un espace vide de l'une des barres d'outils supérieures et en choisissant l'élément souhaité ou par le menu **Affichage → Panneaux**.

Pour activer et désactiver la barre d'état utiliser le menu, **Affichage → Barre d'état**.

### Autre

Les autres interfaces et fenêtres utiles incluent :

* [Inspecteur de scène‏‎](/Std_SceneInspector/fr "Std SceneInspector/fr") : panneau affichant les nœuds Coin3D constituant le [graphe de scène](/Scenegraph/fr "Scenegraph/fr"). Pour les utilisateurs expérimentés et les développeurs, il peut être utile de résoudre les opérations manipulant directement la scène et les objets créés dans la [vue 3D](/3D_view/fr "3D view/fr").
* [Graphe des dépendances](/Std_DependencyGraph/fr "Std DependencyGraph/fr") : une fenêtre affichant le graphe des dépendances de tous les objets du document, créée à l'aide du programme auxiliaire [Graphviz](https://graphviz.org/). Il est utile de reconnaître les problèmes liés à la création d'objets, tels que les dépendances circulaires, qui peuvent ne pas être totalement évidents dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou de la [vue DAG](/DAG_view/fr "DAG view/fr").

### Personnalisation

Les barres d’outils peuvent avoir plus ou moins de boutons, et des barres d’outils personnalisées peuvent être créées avec un mélange de différents outils et pour stocker des macros développées.

Ces options sont dans le menu, **Outils → Personnaliser...**. Voir [Personnalisation de l'interface](/Interface_Customization/fr "Interface Customization/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface/fr&oldid=1528358>"