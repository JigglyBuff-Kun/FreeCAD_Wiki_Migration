---
title: Documentation pour les utilisateurs
---

![](/images/User_hub.png)

---

Il s'agit de la principale rubrique d'aide pour les nouveaux venus dans FreeCAD.

FreeCAD est en développement continu, il peut donc y avoir des informations manquantes ou périmées. Si vous ne trouvez pas l'information dont vous avez besoin, n'hésitez pas à la demander sur le [forum FreeCAD](https://forum.freecad.org).

Si vous voulez apporter votre contribution à FreeCAD, vous pouvez [faire un don](/Donate "Donate") ou rendez-vous sur la page [Aider FreeCAD](/Help_FreeCAD/fr "Help FreeCAD/fr") pour d'autres moyens de contribuer. Si vous souhaitez modifier ce wiki, [demandez un compte wiki avec des autorisations d'édition sur le forum](https://forum.freecad.org/viewtopic.php?f=21&t=6830) et lisez les [pages Wiki](/WikiPages/fr "WikiPages/fr") pour les règles générales à suivre.

Si vous souhaitez découvrir comment le développement de FreeCAD a débuté il y a quelques années, rendez vous à la page [Histoire](/History/fr "History/fr").

## Utiliser FreeCAD

### Introduction

- [À propos de FreeCAD](/About_FreeCAD/fr "About FreeCAD/fr") : un aperçu général de FreeCAD.
- Installation : comment installer FreeCAD [sur Windows](/Installing_on_Windows/fr "Installing on Windows/fr"), [sur Linux](/Installing_on_Linux/fr "Installing on Linux/fr") et [sur Mac](/Installing_on_Mac/fr "Installing on Mac/fr").
- [Installation du fichier d'aide](/Installing_Helpfile/fr "Installing Helpfile/fr") : comment installer la documentation hors ligne basée sur ce wiki.
- [Installer des logiciels supplémentaires](/Installing_additional_components/fr "Installing additional components/fr") : comment installer des composants tiers supplémentaires qui peuvent fonctionner avec FreeCAD.
- [Premiers pas](/Getting_started/fr "Getting started/fr") : un rapide tour d'horizon des outils disponibles.
- [FAQ](/Frequently_asked_questions/fr "Frequently asked questions/fr") : foire aux questions.
- Des [tutoriels](/Tutorials/fr "Tutorials/fr") couvrant différentes parties de FreeCAD.

#### Vous venez d'un autre logiciel ?

- [Solutions de contournement](/Workarounds/fr "Workarounds/fr")
- [Migrer de Fusion360 vers FreeCAD](/Migrating_to_FreeCAD_from_Fusion360/fr "Migrating to FreeCAD from Fusion360/fr")
- [Migrer de OnShape vers FreeCAD](/Migrating_to_FreeCAD_from_OnShape/fr "Migrating to FreeCAD from OnShape/fr")
- [Migrer de SolidWorks vers FreeCAD](/Migrating_to_FreeCAD_from_SolidWorks/fr "Migrating to FreeCAD from SolidWorks/fr")
- [Migrer de Revit vers FreeCAD](/Migrating_to_FreeCAD_from_Revit/fr "Migrating to FreeCAD from Revit/fr")
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [BIM Tableau de compatibilité des applications](/BIM_application_compatibility_table/fr "BIM application compatibility table/fr")

### Concepts de base de l'application

- [Interface](/Interface/fr "Interface/fr") : l'interface FreeCAD est composée de divers éléments graphiques à l'écran, y compris la [Vue 3D](/3D_view/fr "3D view/fr"), la [vue d'arborescence](/Tree_view/fr "Tree view/fr"), l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), le [panneau de tâches](/Task_panel/fr "Task panel/fr") et la [console Python](/Python_console/fr "Python console/fr").
- [Navigation par la souris](/Mouse_navigation/fr "Mouse navigation/fr") : les différents types d'utilisation de la souris ou du trackpad pour naviguer dans la vue 3D.
- [Méthodes de sélection](/Selection_methods/fr "Selection methods/fr") : différentes méthodes de sélection d'objets dans le logiciel.
- [Objet name](/Object_name/fr "Object name/fr") : les objets FreeCAD ont un `Name` en lecture seule qui les identifie de manière unique et un `Label` qui est modifiable par l'utilisateur.
- [Éditeur de préférences](/Preferences_Editor/fr "Preferences Editor/fr") : le système qui vous permet de contrôler de nombreuses propriétés du système de base et des ateliers individuels.
- [Formats de fichiers](/Import_Export/fr "Import Export/fr") : les différents formats que FreeCAD peut lire et écrire.

### Ateliers

Les [ateliers](/Workbenches/fr "Workbenches/fr") sont des ensembles d’outils utilisés pour des tâches spécifiques. Voici les ateliers de base fournis avec chaque installation de FreeCAD :

- ![](/images/Freecad.svg) [Outils communs](/Std_Base/fr "Std Base/fr"). Ces commandes et outils sont présents dans tous les ateliers.

- ![](/images/Workbench_Assembly.svg) L'[atelier Assembly](/Assembly_Workbench/fr "Assembly Workbench/fr") pour la construction et la résolution d'assemblages mécaniques. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Workbench_BIM.svg) L'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") pour travailler avec des éléments architecturaux et créer des modèles [BIM](https://fr.wikipedia.org/wiki/Building_information_modeling). Il combine l'atelier Arch et l'ancien atelier BIM externe disponible dans la version 0.21 et précédentes.

- ![](/images/Workbench_CAM.svg) L'[atelier CAM](/CAM_Workbench/fr "CAM Workbench/fr") est utilisé pour produire des instructions en G-Code. Cet atelier était appelé "atelier Path" version 0.21 et précédentes.

- ![](/images/Workbench_Draft.svg) L'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") contient des outils 2D et des opérations de CAO 2D et 3D de base.

- ![](/images/Workbench_FEM.svg) L'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") fournit un flux de travail d'analyse par éléments finis (FEA).

- ![](/images/Workbench_Inspection.svg) L'[atelier Inspection](/Inspection_Workbench/fr "Inspection Workbench/fr") est fait pour vous donner des outils spécifiques pour l'examen des formes. Il en est encore aux premiers stades de développement.

- ![](/images/Workbench_Material.svg) L'[atelier Material](/Material_Workbench/fr "Material Workbench/fr") gère le système des matériaux de FreeCAD. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Workbench_Mesh.svg) L'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") pour travailler avec des maillages triangulés.

- ![](/images/Workbench_OpenSCAD.svg) L'[atelier OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr") pour l'interopérabilité avec OpenSCAD et la réparation de [Géométrie Solide Constructive](/Constructive_solid_geometry/fr "Constructive solid geometry/fr") (CSG).

- ![](/images/Workbench_Part.svg) L' [atelier Part](/Part_Workbench/fr "Part Workbench/fr") pour travailler avec des primitives géométriques et des opérations booléennes.

- ![](/images/Workbench_PartDesign.svg) L'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") pour créer des formes de pièces à partir d'esquisses.

- ![](/images/Workbench_Points.svg) L'[atelier Points](/Points_Workbench/fr "Points Workbench/fr") pour travailler avec des nuages de points.

- ![](/images/Workbench_Reverse_Engineering.svg) L'[atelier Reverse Engineering](/Reverse_Engineering_Workbench/fr "Reverse Engineering Workbench/fr") est destiné à fournir des outils spécifiques pour convertir des formes/solides/mailles en fonctionnalités paramétriques compatibles avec FreeCAD.

- ![](/images/Workbench_Robot.svg) L'[atelier Robot](/Robot_Workbench/fr "Robot Workbench/fr") pour étudier les mouvements des robots. Non maintenu pour le moment.

- ![](/images/Workbench_Sketcher.svg) L'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") pour travailler avec des esquisses à géométrie contrainte.

- ![](/images/Workbench_Spreadsheet.svg) L'[atelier Spreadsheet](/Spreadsheet_Workbench/fr "Spreadsheet Workbench/fr") pour créer et manipuler des données de feuilles de calcul.

- ![](/images/Workbench_Surface.svg) L'[atelier Surface](/Surface_Workbench/fr "Surface Workbench/fr") fournit des outils pour créer et modifier des surfaces. Il est similaire à l'outil [Part Générateur de formes](/Part_Builder/fr "Part Builder/fr") à partir des bords.

- ![](/images/Workbench_TechDraw.svg) L'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") pour produire des dessins techniques à partir de modèles 3D.

- ![](/images/Workbench_Test.svg) L'[atelier Test](/Testing/fr "Testing/fr") est destiné au débogage de FreeCAD.

### Macros

Les [macros](/Macros/fr "Macros/fr") sont de petits fragments de code [Python](/Python/fr "Python/fr") qui exécutent une tâche simple ou complexe qui n'est pas disponible dans le système FreeCAD de base.

Des utilisateurs avertis ont écrit différentes [macros](/Macros/fr "Macros/fr") pour améliorer FreeCAD en rajoutant des fonctionnalités.

Depuis FreeCAD 0.17, de nombreuses macros peuvent être installées à l'aide du [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Pour une liste des macros, reportez-vous à la page [Liste des macros](/Macros_recipes/fr "Macros recipes/fr"). Pour une installation manuelle, voir [Comment installer des macros](/How_to_install_macros/fr "How to install macros/fr").

### Ateliers externes

Lorsque de nombreuses macros ou fonctions sont développées ensemble et organisées dans des barres d’outils et des menus, elles peuvent devenir un nouvel atelier.

Les [Ateliers externes](/External_workbenches/fr "External workbenches/fr") sont des collections de fonctions qui ne font pas partie du système FreeCAD de base, généralement développées par des utilisateurs expérimentés et visant un besoin particulier.

Depuis FreeCAD 0.17, beaucoup d'ateliers peuvent être installés à l’aide du [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Pour l'installation manuelle, voir [Comment installer des ateliers supplémentaires](/How_to_install_additional_workbenches/fr "How to install additional workbenches/fr").

## Références

[Liste des commandes](/List_of_Commands/fr "List of Commands/fr") : liste complète des commandes disponibles dans FreeCAD.

## Aide en ligne

Il s'agit de l'aide en ligne officielle de FreeCAD. Veuillez noter que l'ensemble du système d'aide en ligne est actuellement retravaillé. Il sera utilisé pour générer un fichier .CHM, qui sera inclus avec les paquets d'installation de FreeCAD. Actuellement, l'aide en ligne recense quelques uns des articles les plus complets de ce wiki.

- [Table des matières de l'aide en ligne](/Online_Help_Toc/fr "Online Help Toc/fr")

## Plus

- Le [Centre des utilisateurs expérimentés](/Power_users_hub/fr "Power users hub/fr") est l'endroit où vous pouvez aller si vous voulez approfondir l'utilisation de FreeCAD.
- Le [Portail de la Communauté FreeCAD](/FreeCAD_Community_Portal/fr "FreeCAD Community Portal/fr") liste les projets réalisés par les membres de la communauté d'utilisateurs de FreeCAD.
- Vous ne comprenez pas un mot ou une expression utilisée dans FreeCAD ? Essayez la page [Glossaire](/Glossary/fr "Glossary/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/fr&oldid=1509393>"
