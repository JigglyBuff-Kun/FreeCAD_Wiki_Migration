---
title: L'interface FreeCad
---

FreeCAD est basé sur le [framework Qt](https://fr.wikipedia.org/wiki/Qt) et se caractérise par une interface simple et directe. Les utilisateurs de CAO les plus expérimentés pourront identifier les similitudes avec d'autres logiciels, tandis que les nouveaux utilisateurs trouveront qu'il est facile de naviguer et de découvrir les différentes options offertes par FreeCAD. Voici l'apparence par défaut de FreeCAD :

![](/images/FreeCAD_022_Start.png)

La page de démarrage sert d'écran d'accueil, conçu pour faciliter l'accès rapide et facile aux principales zones de FreeCAD qu'un utilisateur pourrait souhaiter explorer. Grâce à elle, les utilisateurs peuvent sans effort créer de nouvelles pièces, ouvrir des fichiers récents et lancer des dessins en 2D. En outre, il comporte des raccourcis vers des ressources utiles telles que des tutoriels et des forums d'utilisateurs, qui sont inestimables pour les débutants et les utilisateurs expérimentés à la recherche de conseils ou d'astuces. Les utilisateurs peuvent facilement personnaliser l'apparence de la page de démarrage en fonction de leurs préférences.

Au fur et à mesure que vous vous familiarisez avec FreeCAD, vous pouvez ajuster les paramètres dans les préférences. Vous pouvez ainsi configurer FreeCAD pour qu'il s'ouvre directement dans l'un des ateliers avec un nouveau document prêt à l'emploi lorsque vous le lancez. Vous pouvez également fermer l'onglet Page de démarrage et créer manuellement un nouveau document.

![](/images/FreeCAD_022_PartDesign.png)

### Les ateliers

FreeCAD utilise un système appelé « ateliers », similaire aux cadres conceptuels utilisés dans les logiciels de conception avancés tels que Revit ou CATIA. L'idée d'un atelier est analogue aux stations spécialisées d'un laboratoire scientifique, où différents postes de travail sont équipés pour des types d'expériences distincts. Dans un laboratoire, vous pouvez avoir une zone dédiée à la chimie, une autre à la biologie et une troisième à la physique, chacune équipée des outils spécifiques nécessaires à ces disciplines.

Dans le contexte de FreeCAD, chaque atelier est adapté à un type de tâche particulier, organisant tous les outils nécessaires à cette activité dans une seule interface. Lorsque vous passez d'un atelier à l'autre, l'ensemble des outils et des commandes visibles dans l'interface utilisateur s'adapte pour refléter les besoins de la tâche sélectionnée, bien que le contenu du projet ou la « scène » sur laquelle vous travaillez ne change pas. Cela permet des transitions transparentes dans le flux de travail, par exemple en commençant une conception avec des formes 2D de base dans l'atelier Draft, puis en élaborant ces conceptions avec des outils de modélisation avancés dans l'atelier Part.

Les termes « Atelier » et « Module » sont parfois utilisés de manière interchangeable, mais ils ont des significations distinctes dans FreeCAD. Un module est une extension qui ajoute des fonctionnalités à FreeCAD, alors qu'un atelier est un type spécifique de module équipé de ses propres composants d'interface utilisateur tels que les barres d'outils et les menus, conçus pour faciliter des types de tâches spécifiques. Ainsi, chaque atelier est un module, mais tous les modules ne sont pas des ateliers.

Le contrôle le plus important de l'interface FreeCAD est le sélecteur d’atelier (Workbench) que vous utilisez pour passer d'un atelier à l'autre :

![](/images/FreeCAD_WB.png)

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

- ![](/images/Workbench_Surface.svg) L'[atelier Surface](/Surface_Workbench/fr "Surface Workbench/fr") fournit des outils pour créer et modifier des surfaces. Il est similaire à l'outil [Part Générateur de formes](/Part_Builder/fr "Part Builder/fr") à partir des arêtes.

- ![](/images/Workbench_TechDraw.svg) L'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") pour produire des dessins techniques à partir de modèles 3D. C'est le successeur de l'[atelier Drawing](/Drawing_Workbench/fr "Drawing Workbench/fr").

- ![](/images/Workbench_Test.svg) L'[atelier Test](/Testing/fr "Testing/fr") est destiné au débogage de FreeCAD.

Les ateliers déconcertent souvent les nouveaux utilisateurs, car il n'est pas toujours facile de savoir dans quel atelier chercher un outil spécifique. Mais ils s'apprennent rapidement et, au bout d'un certain temps, ils leur paraîtront naturels. Les nouveaux utilisateurs se rendent rapidement compte que les ateliers sont un moyen pratique d'organiser la multitude d'outils offerts par FreeCAD. En outre, les ateliers sont entièrement personnalisables.

### L'interface

Regardons mieux les différentes parties de l'interface :

![](/images/FreeCAD_022_Interface.png)

La fenêtre principale de l'application peut être divisée en 11 sections :

1. La [zone de vue principale](/Main_view_area/fr "Main view area/fr") qui peut contenir différentes fenêtres à onglets.
2. La [vue 3D](/3D_view/fr "3D view/fr"), normalement intégrée à la [zone de vue principale](/Main_view_area/fr "Main view area/fr"). La vue 3D est l'élément central de l'interface. Elle affiche et permet de manipuler les objets sur lesquels vous travaillez. Il est possible d'avoir plusieurs vues du même document (ou des mêmes objets) ou d'avoir plusieurs documents ouverts simultanément. De plus, chaque vue peut être détachée de la fenêtre principale séparément.
3. L'onglet Modèle et l'onglet [Tâches](/Task_panel/fr "Task panel/fr").
   1. L'onglet Modèle vous montre le contenu et la structure de votre document.
   2. L'onglet Tâches est l'endroit où FreeCAD vous demandera des valeurs spécifiques à l'atelier et à l'outil que vous utilisez (par exemple les dimensions d'un objet).
4. L'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") qui apparaît lorsque l'onglet Modèle est actif dans l'interface. Il permet de gérer les propriétés exposées publiquement des objets du document. Il se compose des sections Data et View, qui présentent respectivement les propriétés de visualisation et les propriétés paramétriques des objets.
5. La [fenêtre de sélection](/Selection_view/fr "Selection view/fr") qui indique les objets ou les sous-éléments d'objets (sommets, arêtes, faces) qui sont sélectionnés.
6. La [vue rapport](/Report_view/fr "Report view/fr") où sont affichés les messages, les avertissements et les erreurs.
7. La [console Python](/Python_console/fr "Python console/fr") où toutes les commandes exécutées sont imprimées et où vous pouvez entrer du code Python.
8. La [barre d'état](/Status_bar/fr "Status bar/fr") où apparaissent certains messages et infobulles.
9. La zone de la barre d'outils, où les barres d'outils sont ancrées.
10. Le [sélecteur d'atelier](/Std_Workbench "Std Workbench") où vous sélectionnez l'[atelier](/Workbenches/fr "Workbenches/fr") actif.
11. Le [menu standard](/Standard_Menu "Standard Menu") qui contient les opérations de base du programme.

La plupart des panneaux ci-dessus peuvent être cachés ou révélés par **Affichage → Panneaux**.

### Personnalisation de l'interface

L'interface de FreeCAD est conçue pour une personnalisation poussée. Toutes les barres d'outils et tous les panneaux peuvent être déplacés, empilés ou même ancrés dans diverses configurations selon les préférences de l'utilisateur. En outre, ils peuvent être fermés puis rouverts selon les besoins. Au-delà de ces capacités, les utilisateurs disposent de nombreuses autres options, notamment la possibilité de créer des barres d'outils personnalisées avec des outils sélectionnés dans l'un des ateliers disponibles, et d'attribuer ou de modifier des raccourcis clavier pour rationaliser le flux de travail. Cette flexibilité permet aux utilisateurs d'adapter l'environnement à leurs besoins et préférences spécifiques.

Ces options de personnalisation avancées sont disponibles à partir du menu **Outils → Personnaliser...** :

![](/images/FreeCAD_022_Customization.png)

**Pour en savoir plus** :

- [Pour commencer avec FreeCAD](/Getting_started/fr "Getting started/fr")
- [Personnalisation de l'interface](/Interface_Customization/fr "Interface Customization/fr")
- [Ateliers](/Workbenches/fr "Workbenches/fr")
- [En savoir plus sur Python](https://www.python.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:The_FreeCAD_Interface/fr&oldid=1537397>"
