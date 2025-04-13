---
title: Extension
---
## Introduction

Dans FreeCAD et dans cette documentation, une extension est un composant qui ne fait pas partie de l'installation de base mais peut être ajouté au système par certaines méthodes.

## Différents types

Il existe environ trois types d'extensions :

* [Macros](/Macros/fr "Macros/fr") : petit bout de code en [Python](/Python/fr "Python/fr") qui fournit un nouvel outil ou une nouvelle fonctionnalité dans un seul fichier se terminant par `.FCMacro`.
* [Ateliers](/External_workbenches/fr "External workbenches/fr") : collections de fichiers Python qui fournissent des [Gui Commands](/Gui_Command/fr "Gui Command/fr") (outils) centrés autour d'un sujet particulier, par exemple, des outils pour concevoir des armoires ou des outils pour travailler avec l'architecture, ou des outils pour concevoir des bateaux, etc. Ces ateliers définissent généralement de nouvelles barres d'outils où des [commandes](/Gui_Command/fr "Gui Command/fr") sont placées sous forme de boutons.
* [Kits de préférence](/Preference_Packs/fr "Preference Packs/fr") : kits de préférences d'utilisateurs. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

## Installation

La méthode recommandée pour installer des extensions est d'utiliser le ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

Mais pour les macros et les ateliers, une installation manuelle est également possible :

* [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr")
* [Comment installer un atelier](/Installing_more_workbenches/fr "Installing more workbenches/fr")

## Informations pour les développeurs

Si vous avez développé une macro ou un atelier, et que vous souhaitez qu'il soit inclus dans le gestionnaire des extensions, lisez comment faire sur les pages : ([FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons/) et [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/)). Si vous ajoutez votre macro à la page [Liste des macros](/Macros_recipes/fr "Macros recipes/fr"), il n'y a rien d'autre à faire, elle sera automatiquement récupérée par le gestionnaire des extensions.

Voir aussi :

* [Distribution d'un atelier Python](/Workbench_creation/fr#Distribution "Workbench creation/fr")
* [Distribution d'un atelier C++](/Workbench_creation/fr#Distribution_2 "Workbench creation/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Addon/fr&oldid=1328437>"