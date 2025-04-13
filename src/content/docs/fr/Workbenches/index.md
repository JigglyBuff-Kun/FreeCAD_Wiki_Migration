---
title: Ateliers
---

FreeCAD, à l'instar de nombreuses applications de conception modernes telles que [Revit](https://fr.wikipedia.org/wiki/Revit) ou [CATIA](https://fr.wikipedia.org/wiki/CATIA), est basé sur le concept d'[atelier](https://fr.wikipedia.org/wiki/Établi). Un atelier peut être considéré comme un ensemble d’outils spécialement regroupés pour une tâche donnée. Dans un atelier traditionnel de fabrication de meubles, vous disposeriez d'une table de travail pour la personne qui travaille le bois, d'une autre pour celle qui travaille avec des pièces métalliques et peut-être d'une troisième pour la personne qui monte toutes les pièces ensemble.

Le même principe s'applique dans FreeCAD. Les outils sont regroupés sous des ateliers, selon des tâches auxquelles ils sont destinés.

Lorsque vous passez d'un atelier à un autre, les outils disponibles de l'interface changent. Les barres d'outils, les barres de commande et éventuellement d'autres parties de l'interface passent au nouvel atelier, mais le contenu de votre écran ne change pas. Vous pouvez, par exemple, commencer à dessiner des formes 2D avec l'atelier Draft, puis les retravailler avec l'atelier Part.

Remarquez que parfois, un Atelier est aussi appelé _Module_. Cependant, Ateliers et Modules sont deux choses différentes. Un Module est une extension de FreeCAD, tandis qu'un Atelier est un type particulier de Module avec une interface graphique (GUI) (barres d'outils et menus).

## Ateliers internes

### Actuels

Les ateliers suivants sont intégrés à chaque installation de FreeCAD :

- ![](/images/Freecad.svg) [Std Base](/Std_Base/fr "Std Base/fr"). Ce n'est pas vraiment un atelier mais plutôt une catégorie de commandes et d'outils "standards" qui peuvent être utilisés dans tous les ateliers.

- ![](/images/Workbench_Assembly.svg) L'[atelier Assembly](/Assembly_Workbench/fr "Assembly Workbench/fr") pour la construction et la résolution d'assemblages mécaniques. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Workbench_BIM.svg) L'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") pour travailler avec des éléments architecturaux et créer des modèles [BIM](https://fr.wikipedia.org/wiki/Building_information_modeling). Il combine l'atelier Arch et l'ancien atelier BIM externe disponible dans la version 0.21 et précédentes.

- ![](/images/Workbench_CAM.svg) L'[atelier CAM](/CAM_Workbench/fr "CAM Workbench/fr") est utilisé pour produire des instructions en G-Code. Cet atelier était appelé "atelier Path" version 0.21 et précédentes.

- ![](/images/Workbench_Draft.svg) L'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") contient des outils 2D et des opérations de CAO 2D et 3D de base.

- ![](/images/Workbench_FEM.svg) L'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") fournit un processus d'analyse par éléments finis (FEA).

- ![](/images/Workbench_Inspection.svg) L'[atelier Inspection](/Inspection_Workbench/fr "Inspection Workbench/fr") est fait pour vous donner des outils spécifiques pour l'examen des formes. Le projet en est encore à ses débuts.

- ![](/images/Workbench_Material.svg) L'[atelier Material](/Material_Workbench/fr "Material Workbench/fr") gère le système des matériaux de FreeCAD. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Workbench_Mesh.svg) L'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") pour travailler avec des maillages triangulés.

- ![](/images/Workbench_OpenSCAD.svg) L'[atelier OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr") pour l'interopérabilité avec OpenSCAD et la réparation de l'historique de modèle de [géométries de construction de solides](/Constructive_solid_geometry/fr "Constructive solid geometry/fr").

- ![](/images/Workbench_Part.svg) L'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") pour travailler avec des primitives géométriques et des opérations booléennes.

- ![](/images/Workbench_PartDesign.svg) L'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") pour créer des formes de pièces à partir d'esquisses.

- ![](/images/Workbench_Points.svg) L'[atelier Points](/Points_Workbench/fr "Points Workbench/fr") pour travailler avec des nuages de points.

- ![](/images/Workbench_Reverse_Engineering.svg) L'[atelier Reverse Engineering](/Reverse_Engineering_Workbench/fr "Reverse Engineering Workbench/fr") est destiné à fournir des outils spécifiques pour convertir des formes/solides/mailles en fonctionnalités paramétriques compatibles avec FreeCAD.

- ![](/images/Workbench_Robot.svg) L'[atelier Robot](/Robot_Workbench/fr "Robot Workbench/fr") pour étudier les mouvements des robots. Non maintenu pour le moment.

- ![](/images/Workbench_Sketcher.svg) L'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") pour travailler avec des esquisses à géométrie contrainte.

- ![](/images/Workbench_Spreadsheet.svg) L'[atelier Spreadsheet](/Spreadsheet_Workbench/fr "Spreadsheet Workbench/fr") pour créer et manipuler des données de feuilles de calcul.

- ![](/images/Workbench_Surface.svg) L'[atelier Surface](/Surface_Workbench/fr "Surface Workbench/fr") fournit des outils pour créer et modifier des surfaces. Il est similaire à l'outil [Part Générateur de formes](/Part_Builder/fr "Part Builder/fr"), option Face à partir d'arêtes.

- ![](/images/Workbench_TechDraw.svg) L'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") pour produire des dessins techniques à partir de modèles 3D. C'est le successeur de l'[atelier Drawing](/Drawing_Workbench/fr "Drawing Workbench/fr").

- ![](/images/Workbench_Test.svg) L'[atelier Test](/Testing/fr "Testing/fr") est destiné au débogage de FreeCAD.

### Obsolètes

Les ateliers suivants ne sont plus inclus après la version 0.21 :

- ![](/images/Workbench_Start.svg) L'[atelier Start](/Start_Workbench/fr "Start Workbench/fr") vous permet de passer rapidement à l'un des ateliers les plus courants. Cet atelier a été remplacé par la page Start accessible via le [menu Aide](/Std_Help_Menu/fr "Std Help Menu/fr").

- ![](/images/Workbench_Web.svg) L'[atelier Web](/Web_Workbench/fr "Web Workbench/fr") vous fournit une fenêtre de navigateur au lieu de la [vue 3D](/3D_view/fr "3D view/fr") dans FreeCAD.

Les ateliers suivants ne sont plus inclus après la version 0.20 :

- ![](/images/Workbench_Drawing.svg) L'[atelier Drawing](/Drawing_Workbench/fr "Drawing Workbench/fr") était utilisé pour produire des dessins techniques. L'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") est son remplaçant plus avancé.

- ![](/images/Workbench_Image.svg) L'[atelier Image](/Image_Workbench/fr "Image Workbench/fr") était utilisé pour travailler avec des images bitmap. Ses fonctionnalités ont été intégrées dans [Std Base](/Std_Base/fr "Std Base/fr"). Voir [Std Importer](/Std_Import/fr "Std Import/fr") et [Std Charger une image](/Std_ViewLoadImage/fr "Std ViewLoadImage/fr").

- ![](/images/Workbench_Raytracing.svg) L'[atelier Raytracing](/Raytracing_Workbench/fr "Raytracing Workbench/fr") était utilisé pour le lancer de rayons (rendu). L'atelier externe [Render](https://github.com/FreeCAD/FreeCAD-render) peut être utilisé à la place.

## Ateliers externes

Les ateliers de FreeCAD sont faciles à programmer en [Python](/Python/fr "Python/fr"). Pour cette raison, plusieurs personnes développent des ateliers additionnels en dehors des principaux développeurs de FreeCAD.

La page des [ateliers externes](/External_workbenches/fr "External workbenches/fr") répertorie tout ce qui est connu de cette communauté. La plupart sont facilement installables à partir de FreeCAD, à l’aide du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"), situé dans le menu **Outils → Gestionnaire des extensions**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/fr&oldid=1565395>"
