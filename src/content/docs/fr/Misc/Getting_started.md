---
title: Démarrer avec FreeCAD
---
## Avant-propos

FreeCAD est une [application de modélisation paramétrique](/About_FreeCAD/fr "About FreeCAD/fr") 3D. Elle est principalement destinée à la conception mécanique, mais sert aussi à toutes les utilisations où vous avez besoin de modéliser des objets avec précision et de contrôler l'historique de la modélisation 3D.

FreeCAD est en cours de développement depuis 2002 et propose une grande liste de [fonctions](/Feature_list/fr "Feature list/fr"). Des fonctions manquent encore mais il est assez puissant pour une utilisation amateur et de petits projets. Il existe une communauté d'utilisateurs enthousiastes en pleine croissance qui participent au [forum FreeCAD](http://forum.freecad.org/index.php) et vous pouvez trouver [nombreux exemples](http://forum.freecad.org/viewforum.php?f=24) de projets de qualité développés avec FreeCAD.

Comme tous les projets de logiciels libres, FreeCAD dépend de sa communauté pour se développer, gagner en fonctionnalités et corriger les bogues. N'oubliez pas cela lorsque vous utilisez FreeCAD. Si vous l'aimez, vous pouvez [faire un don](/Donate/fr "Donate/fr") et [contribuer à FreeCAD](/Help_FreeCAD/fr "Help FreeCAD/fr") de diverses manières, comme par exemple rédiger de la documentation et faire des traductions.

Voir aussi :

* [Migrer vers FreeCAD depuis Fusion360](/Migrating_to_FreeCAD_from_Fusion360/fr "Migrating to FreeCAD from Fusion360/fr")
* [Quel atelier dois-je choisir ?](/Which_workbench_should_I_choose/fr "Which workbench should I choose/fr")
* [Tutoriels](/Tutorials/fr "Tutorials/fr")
* [Tutoriels vidéo](/Video_tutorials/fr "Video tutorials/fr")

## Installation

Tout d'abord, téléchargez et installez FreeCAD. Voir la page [Téléchargement](/Download/fr "Download/fr") pour des informations sur les versions en cours et les mises à jour ainsi que les instructions d'installation pour votre système d'exploitation ([Windows](/Installing_on_Windows/fr "Installing on Windows/fr"), [Linux](/Installing_on_Linux/fr "Installing on Linux/fr") ou [Mac](/Installing_on_Mac/fr "Installing on Mac/fr")). FreeCAD est disponible dans les gestionnaires de paquets de nombreuses distributions Linux. FreeCAD étant un logiciel libre, vous pouvez également récupérer le code source et le [compiler](/Compiling/fr "Compiling/fr") vous-même.

## Explorer l'interface

![](/images/FreeCAD_interface_base_divisions.svg)

L'interface standard de FreeCAD

*Pour une explication complète voir [Interface](/Interface/fr "Interface/fr").*

:   1. La [zone de vue principale](/Main_view_area/fr "Main view area/fr"), qui peut contenir différentes fenêtres à onglets, principalement la [vue 3D](/3D_view/fr "3D view/fr").
:   2. La [vue 3D](/3D_view/fr "3D view/fr"), affichant les objets géométriques de votre document.
:   3. La [vue arborescente](/Tree_view/fr "Tree view/fr") (partie de la [vue combinée](/Combo_view/fr "Combo view/fr")), qui montre l'historique et la hiérarchie de construction des les objets dans votre document ; il peut également afficher le [panneau des tâches](/Task_panel/fr "Task panel/fr") pour les commandes actives.
:   4. L'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") (partie de la [vue combinée](/Combo_view/fr "Combo view/fr")), qui vous permet d'afficher et de modifier les propriétés des objets sélectionnés.
:   5. Le [panneau de sélection](/Selection_view/fr "Selection view/fr"), qui indique les objets ou les sous-éléments des objets (sommets, arêtes, faces) sélectionnés.
:   6. La [vue rapport](/Report_view/fr "Report view/fr") (ou fenêtre de sortie) qui est la fenêtre où FreeCAD affiche des messages, avertissements et erreurs.
:   7. La [console Python](/Python_console/fr "Python console/fr"), où sont affichées toutes les commandes exécutées par FreeCAD, et qui permet de saisir du code [Python](/Python/fr "Python/fr").
:   8. La [barre de status](/Status_bar/fr "Status bar/fr"), où certains messages et info-bulles apparaissent.
:   9. La zone de la barre d'outils, où les barres d'outils sont ancrées.
:   10. Le [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr"), dans lequel vous sélectionnez l'[atelier](/Workbenches/fr "Workbenches/fr") actif.
:   11. Le [menu standard](/Standard_Menu/fr "Standard Menu/fr"), qui contient les opérations de base du programme.

Le principe de l'interface de FreeCAD est qu'elle est composée d'[ateliers](/Workbenches/fr "Workbenches/fr"). Un atelier est une collection d'outils adaptés à une tâche spécifique, comme travailler avec des [maillages](/Mesh_Workbench/fr "Mesh Workbench/fr"), faire du [dessin 2D](/Draft_Workbench/fr "Draft Workbench/fr"), ou créer des [esquisses contraintes](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). Vous pouvez changer d'atelier à l'aide du [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr"). Vous pouvez [personnaliser](/Interface_Customization/fr "Interface Customization/fr") les outils inclus dans chaque atelier, ajouter des outils provenant d'autres ateliers ou même des outils créés par vous-même, que nous appelons [macros](/Macros/fr "Macros/fr"). Les ateliers de départ les plus utilisés sont [l'atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") et [l'atelier Part](/Part_Workbench/fr "Part Workbench/fr").

Lorsque vous démarrez FreeCAD pour la première fois, la page Start s'affiche. Voici son apparence sous la version 0.19 :

![](/images/Start_center_0.19_screenshot.png)

La page Start permet de passer rapidement à l'un des ateliers les plus usuels, ouvrir un des fichiers récents ou voir les dernières nouvelles du monde de FreeCAD. Vous pouvez modifier l'atelier par défaut dans l'[éditeur de préférences](/Preferences_Editor/fr "Preferences Editor/fr").

## Naviguer dans l'espace 3D

FreeCAD propose différents [modes de navigation](/Mouse_navigation/fr "Mouse navigation/fr"), qui changent la façon dont vous utilisez votre souris pour interagir avec les objets de la vue 3D et la vue elle-même. L'un d'eux est spécialement conçu pour les [touchpads](/Mouse_navigation/fr#Mode_Touchpad "Mouse navigation/fr") où le bouton central de la souris n'est pas utilisé. Le mode de navigation par défaut est le [mode CAD](/Mouse_navigation/fr#Mode_CAD "Mouse navigation/fr"). Vous pouvez rapidement changer le mode de navigation utilisé par le bouton ![](/images/NavigationCAD_dark.svg) dans la [barre d'état](/Status_bar/fr "Status bar/fr") ou en cliquant avec le bouton droit de la souris sur une zone vide de la [vue 3D](/3D_view/fr "3D view/fr").

Plusieurs vue prédéfinies (vue de dessus, vue de face, etc.) sont disponibles dans le menu Affichage, dans la barre d'outils ainsi que par des raccourcis numériques (1, 2, etc...). Un clic droit sur un objet ou sur une zone vide de la vue 3D vous donne un accès rapide à certaines opérations courantes, telles que la définition d'une vue particulière, ou localiser un objet dans l'arborescence.

## Premiers pas avec FreeCAD

L'objectif de FreeCAD est de vous permettre de créer des modèles 3D de haute précision, de garder un contrôle étroit sur ces modèles (en étant capable de revenir à l'historique de la modélisation et de modifier les paramètres), et finalement de construire ces modèles (via l'impression 3D, l'usinage CNC ou même le chantier de construction). Il est donc très différent des autres applications 3D conçues pour d'autres fins, tels que le film d'animation ou les jeux. Sa courbe d'apprentissage peut être ardue, spécialement si c'est votre premier contact avec la modélisation 3D. Si vous êtes bloqués à un moment donné, n'oubliez pas que l'amicale communauté des utilisateurs du [forum forum de FreeCAD](http://forum.freecad.org/index.php) pourrait être en mesure de vous sortir d’embarras sans délai.

L'atelier que vous utiliserez à l'aide de FreeCAD dépend du type de travail à effectuer : Si vous travaillez sur des modèles mécaniques, ou plus généralement tous les petits objets, vous aurez probablement envie d'essayer l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Si vous voulez travailler en 2D, passez à l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") si vous avez besoin de contraintes. Si vous voulez faire de la modélisation BIM, lancez l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr"). Et si vous venez du monde OpenSCAD, essayez l'[atelier OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr"). Il existe également de nombreux ateliers développés par la communauté, les [ateliers externes](/External_workbenches/fr "External workbenches/fr").

Vous pouvez changer d'atelier à tout moment et aussi changer les [préférences](/Interface_Customization/fr "Interface Customization/fr") de votre atelier favori pour ajouter des outils d'autres ateliers.

## Travailler avec PartDesign et l'atelier Sketcher

L'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") est spécialement conçu pour construire des objets complexes, à partir de formes simples et en ajoutant ou en supprimant des opérations (que nous appelons "fonctions"), jusqu'à obtention de votre objet final. Toutes les fonctions que vous avez appliquées durant le processus de modélisation sont stockées dans une vue distincte appelée [Vue Modèle](/Document_structure/fr "Document structure/fr"), qui contient également les autres objets de votre document. Vous pouvez considérer un objet PartDesign comme une succession d'opérations, chacune appliquée au résultat de la précédente, formant une grande chaîne structurée. Dans l'arborescence, vous voyez votre objet final, mais vous pouvez développer et récupérer tous les états précédents et modifier leurs paramètres, qui mettent automatiquement à jour l'objet final.

L'atelier PartDesign fait un usage intensif d'un autre atelier, l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). L'esquisseur vous permet de dessiner des formes 2D, puis de leur appliquer des contraintes. Par exemple, vous pourriez dessiner un rectangle et définir la taille d'un côté à l'aide d'une contrainte de longueur. Ce côté ne pourra plus être redimensionné (à moins d'éditer et modifier cette contrainte).

Les formes 2D faites avec l'esquisseur servent beaucoup dans l'atelier PartDesign, par exemple pour extruder des volumes 3D, ou dessiner des zones sur la face de votre objet, qui seront ensuite évidées ou extrudées de son volume principal. Il s'agit d'un flux de travail typique de PartDesign :

1. Créez une nouvelle esquisse
2. Dessinez un profil fermé (assurez-vous que tous les points sont joints)
3. Fermez l'esquisse
4. Extrudez l'esquisse en un objet 3D avec l'outil Protrusion
5. Sélectionnez une face du solide extrudé
6. Créez une seconde esquisse (cette fois elle sera dessinée sur la face sélectionnée)
7. Dessinez un profil fermé
8. Fermez l'esquisse
9. Créez une cavité à partir de la seconde esquisse, sur le premier objet

Ce qui vous donne un objet comme ceci :

![](/images/Partdesign_example.jpg)

À tout moment, vous pouvez sélectionner les esquisses originales et les modifier, ou changer les paramètres d'extrusion des opérations de protrusion ou de cavité, qui mettront automatiquement à jour l'objet final.

## Travailler avec les ateliers Draft et BIM

Les ateliers [Draft](/Draft_Workbench/fr "Draft Workbench/fr") et [BIM](/BIM_Workbench/fr "BIM Workbench/fr") se comportent un peu différemment des autres ateliers ci-dessus, bien qu'ils suivent les mêmes règles communes à l'ensemble de FreeCAD. En bref, alors que Sketcher et PartDesign sont principalement conçus pour réaliser des pièces uniques, Draft et BIM sont faits pour faciliter votre travail lorsque vous travaillez avec plusieurs objets simples.

L'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") vous propose des outils 2D un peu semblables à ce que vous pouvez trouver dans les applications de CAO 2D traditionnelles telles que [AutoCAD](https://fr.wikipedia.org/wiki/AutoCAD). Cependant, le dessin 2D étant loin du champ d'application de FreeCAD, ne vous attendez pas à y trouver la gamme complète d'outils que ces applications offrent. La plupart des outils Draft travaillent non seulement dans un plan 2D, mais également dans l'espace 3D et bénéficient de systèmes spéciaux d'assistance tels que les [Plans de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") et l'[aimantation d'objet](/Draft_Snap/fr "Draft Snap/fr").

L'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") ajoute des outils de modélisation [BIM](http://fr.wikipedia.org/wiki/Building_Information_Modeling) à FreeCAD, vous permettant de construire des modèles architecturaux à partir d'objets paramétriques. L'atelier BIM s'appuie beaucoup sur les autres modules tels que Draft et le Sketcher. Tous les outils Draft sont également présents dans l'atelier BIM, et la plupart des outils BIM font usage des systèmes d'assistance Draft.

Le flux de travail avec les ateliers BIM et Draft peut être :

1. Dessiner plusieurs lignes avec l'outil Draft Polyligne
2. Sélectionner chaque ligne et cliquer sur l'outil Mur pour construire un mur sur chacune d'elle
3. Sélectionner les murs et les joindre en cliquant sur l'outil Ajouter un composant de BIM
4. Créer un objet Étage et, dans l'arborescence, faites glisser vos murs dans l'objet Étage
5. Créer un objet Bâtiment et, dans l'arborescence, faites glisser votre Étage (qui comprend maintenant les murs) dans l'objet Bâtiment
6. Créer une fenêtre en cliquant sur l'outil Fenêtre, sélectionner un paramètre prédéfini, puis cliquer sur une face d'un mur
7. Ajouter des cotes en réglant d'abord le plan de travail si nécessaire, puis en utilisant l'outil Cote

Le résultat sera :

![](/images/Arch_workflow_example.jpg)

Plus d'informations sur la page [tutoriels](/Tutorials/fr "Tutorials/fr").

## Extensions

Tout utilisateur peut développer ses propres fonctions pour FreeCAD et les mettre à la disposition de la communauté FreeCAD en tant qu'[extension](/Addon/fr "Addon/fr").

Il existe trois types de extensions :

* Les [macros](/Macros/fr "Macros/fr") : petit bout de code en [Python](/Python/fr "Python/fr") qui fournit un nouvel outil ou une nouvelle fonction dans un fichier unique se terminant par `.FCMacro`.
* Les [ateliers](/External_workbenches/fr "External workbenches/fr") : ensembles de fichiers en Python qui fournissent des [commandes graphiques](/Gui_Command/fr "Gui Command/fr") (outils) autour d'un sujet particulier.
* Les [kits de préférences](/Preference_Packs/fr "Preference Packs/fr") : des paquets de préférences d'utilisateurs.

## Script

Enfin, l'une des fonctions les plus intéressantes de FreeCAD est l'environnement de [script](/Power_users_hub/fr#Scripts_dans_FreeCAD/fr "Power users hub/fr"). À partir de la console Python intégrée (ou de tout autre script Python externe), vous pouvez accéder à presque toutes les parties de FreeCAD, créer ou modifier la géométrie, modifier la représentation de ces objets dans la scène 3D ou accéder à l'interface de FreeCAD et la modifier. Les scripts Python peuvent également être utilisés dans les [macros](/Macros/fr "Macros/fr"), lesquelles fournissent une méthode simple pour créer des commandes personnalisées.

## Nouveautés

* Voir les [notes de versions](/Feature_list/fr#Notes_de_versions "Feature list/fr") pour la liste détaillée des évolutions.

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/fr&oldid=1480630>"