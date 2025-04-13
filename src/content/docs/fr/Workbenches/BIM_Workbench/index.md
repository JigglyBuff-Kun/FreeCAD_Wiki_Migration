---
title: Atelier BIM
---

:::caution
Dans la version 1.0, les ateliers BIM, Native-IFC etArchont été fusionnés dans l'atelier BIM.Cette page a été mise à jour pour cette version.
:::
![](/images/Workbench_BIM.svg)

Icône de l'atelier externe BIM

## Introduction

L'![](/images/Workbench_BIM.svg) atelier BIM fournit un flux de travail moderne [BIM](https://fr.wikipedia.org/wiki/Building_information_modeling) dans FreeCAD, avec des objets entièrement paramétriques tels que les murs, les poutres, les toits, les fenêtres, les escaliers, les tuyaux et le mobilier. Il prend en charge les fichiers [Industry Foundation Classes](/Arch_IFC/fr "Arch IFC/fr") (IFC) et la production de plans 2D en combinaison avec l'![](/images/Workbench_TechDraw.svg) [atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").

L'atelier BIM importe tous les outils de l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") car il utilise ses objets 2D pour créer des objets architecturaux paramétriques 3D. Néanmoins, il peut également utiliser des formes solides créées avec d'autres ateliers tels que ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/fr "Part Workbench/fr") et ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

Voir le [guide de migration BIM de FreeCAD](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide) pour un aperçu rapide si vous êtes déjà utilisateur d'une autre application BIM.

Les développeurs de Draft et BIM collaborent également avec la [communauté OSArch](https://osarch.org) dans le but ultime d'améliorer la conception des bâtiments en utilisant un logiciel entièrement gratuit.

![](/images/BIM_workbench_presentation.png)

## Commencer

![](/images/BIM_welcome_screen.png)

Lorsque vous démarrez l'atelier BIM pour la première fois, une fenêtre de dialogue de bienvenue s'affiche, donnant un aperçu rapide du fonctionnement de l'atelier et permettant à l'utilisateur de démarrer un [tutoriel ludique](/BIM_ingame_tutorial/fr "BIM ingame tutorial/fr"). Le dialogue de bienvenue est également disponible dans le menu **aide**. Lorsque vous fermez l'écran de bienvenue en cliquant sur OK, la [Fenêtre de dialogue configuration BIM](/BIM_Setup/fr "BIM Setup/fr") s'affiche. Elle permet à l'utilisateur de définir rapidement certaines des préférences les plus courantes liées à BIM de FreeCAD sans qu'il soit nécessaire de parcourir les pages complètes des [paramètres de préférences FreeCAD.](/Preferences_Editor/fr "Preferences Editor/fr").

L'outil [Configuration](/BIM_Setup/fr "BIM Setup/fr") vous permet de configurer rapidement un projet BIM en renseignant certaines informations de base sur votre projet. Vous pouvez ensuite, par exemple, utiliser les différents outils de dessin 2D pour dessiner des repères et des lignes de base, Puis utiliser les différents outils de modélisation 3D pour créer automatiquement des objets BIM 3D à partir d'eux. Une ligne, par exemple, peut devenir un mur simplement en la sélectionnant et en appuyant sur le bouton [Mur](/Arch_Wall/fr "Arch Wall/fr").

Les éléments communs de construction tels que les [murs](/Arch_Wall/fr "Arch Wall/fr") ou les [colonnes](/BIM_Column/fr "BIM Column/fr") sont facilement créés en appuyant sur le bouton approprié de la barre d'outils et en cliquant sur des points dans la vue 3D. Une fois créés, ils peuvent être déplacés, pivotés et modifiés. La plupart des éléments de BIM sont créés sur le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") en cours, de sorte qu'un flux de travail typique consiste à placer d'abord le plan de travail, puis à créer un élément de BIM. Des éléments plus complexes peuvent être créés en dessinant d'abord des éléments 2D, puis en utilisant l'un des outils de BIM pour les convertir en l'élément souhaité.

Les éléments des projets de construction peuvent être organisés en utilisant des [sites](/Arch_Site/fr "Arch Site/fr"), [bâtiments](/Arch_Building/fr "Arch Building/fr") et des [niveaux](/Arch_BuildingPart/fr "Arch BuildingPart/fr"), pour reproduire ce qui est communément fait dans d'autres applications BIM. Dans FreeCAD, cependant, de telles structures ne sont pas obligatoires, et vous êtes libre d'organiser les éléments de votre modèle comme vous l'entendez, par exemple en utilisant des [groupes](/Std_Group/fr "Std Group/fr").

Des dessins 2D peuvent être générés à partir d'un modèle pour représenter des vues en plan, en coupe ou en élévation. Pour générer un tel dessin, des [plans de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") sont placés dans le modèle pour indiquer l'endroit où il doit être coupé ou vu. Une fois les plans de coupe en place, deux méthodes sont possibles :

1. Créer des vues projetées dans le document en utilisant des [vues 2D d'une forme](/Draft_Shape2DView/fr "Draft Shape2DView/fr") puis ajouter toutes les annotations nécessaires telles que les textes et les dimensions, et enfin mettre le tout sur une page. C'est la méthode recommandée, car elle offre plus de souplesse.
2. Créer une vue sur une page directement à partir du plan de coupe. Ensuite, toutes les annotations 2D nécessaires doivent être soit ajoutées au plan de coupe, soit effectuées directement sur la page. Cette méthode est moins souple.

Enfin, les nomenclatures des quantités peuvent être créés à l'aide de l'outil [Nomenclature](/Arch_Schedule/fr "Arch Schedule/fr").

Si vous êtes habitué à une autre application BIM, consultez notre [Tableau de compatibilité des applications BIM](/BIM_application_compatibility_table/fr "BIM application compatibility table/fr") pour connaître vos marques lors du démarrage avec FreeCAD.

![](/images/BIM_tutorial_screenshot.png)

Le [BIM Tutoriel](/BIM_ingame_tutorial/fr "BIM ingame tutorial/fr") est un moyen facile de se mettre rapidement sur la bonne voie avec l'atelier BIM.

## Outils

L'atelier BIM rassemble des outils provenant de plusieurs autres ateliers FreeCAD, principalement [Draft](/Draft_Workbench/fr "Draft Workbench/fr") et [Part](/Part_Workbench/fr "Part Workbench/fr"), grossièrement réorganisés en catégories logiques.

De plus, si de telles [extensions](/External_workbenches/fr "External workbenches/fr") sont installées, des outils de [Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr") (armatures supplémentaires), [Fasteners](/Fasteners_Workbench/fr "Fasteners Workbench/fr") (boulons et vis), [Flamingo/Dodo](/Flamingo_Workbench/fr "Flamingo Workbench/fr") (outils de structure métallique et de tuyauterie) et [Parts Library](/Parts_Library_Workbench/fr "Parts Library Workbench/fr") sont automatiquement inclus dans l'atelier BIM.

L'atelier BIM ajoute également une série d'éléments dans la **barre d'état** de FreeCAD et quelques **éléments de menu contextuel**, accessibles en cliquant avec le bouton droit de la souris dans la vue 3D ou dans l'arborescence.

### Dessin 2D

Les objets 2D sont couramment utilisés comme aide à la conception ou pour tracer des lignes de base et des profils sur lesquels construire des objets BIM. Ils peuvent également être utilisés pour dessiner des symboles et des annotations dans votre modèle. En plus des esquisses, qui utilisent leur propre système de coordonnées, des objets 2D seront dessinés sur le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") sélectionné.

- ![](/images/BIM_Sketch.svg) [Esquisse](/BIM_Sketch/fr "BIM Sketch/fr") : crée une nouvelle esquisse et passe en mode édition d'esquisse. Les esquisses sont des objets 2D avancés avec prise en charge des contraintes.

- ![](/images/Draft_Line.svg) [Ligne](/Draft_Line/fr "Draft Line/fr") : crée une ligne droite.

- ![](/images/Draft_Wire.svg) [Polyligne](/Draft_Wire/fr "Draft Wire/fr") : crée une polyligne (appelée aussi filaire), une séquence de plusieurs segments de ligne connectés.

- ![](/images/Draft_Circle.svg) [Cercle](/Draft_Circle/fr "Draft Circle/fr") : crée un cercle à partir d'un centre et d'un rayon.

- ![](/images/Draft_Arc.svg) [Arc](/Draft_Arc/fr "Draft Arc/fr") : crée un arc de cercle à partir d'un centre, d'un rayon, d'un angle de départ et d'un angle d'ouverture.

- ![](/images/Draft_Arc_3Points.svg) [Arc par 3 points](/Draft_Arc_3Points/fr "Draft Arc 3Points/fr") : crée un arc de cercle à partir de trois points qui définissent sa circonférence.

- ![](/images/Draft_Fillet.svg) [Congé](/Draft_Fillet/fr "Draft Fillet/fr") : crée un congé, un coin arrondi, ou un chanfrein, un bord droit, entre deux [Draft Lignes](/Draft_Line/fr "Draft Line/fr").

- ![](/images/Draft_Ellipse.svg) [Ellipse](/Draft_Ellipse/fr "Draft Ellipse/fr") : crée une ellipse à partir de deux points définissant un rectangle dans lequel l'ellipse s'inscrira.

- ![](/images/Draft_Polygon.svg) [Polygone](/Draft_Polygon/fr "Draft Polygon/fr") : crée un polygone régulier à partir d'un centre et d'un rayon.

- ![](/images/Draft_Rectangle.svg) [Rectangle](/Draft_Rectangle/fr "Draft Rectangle/fr") : crée un rectangle à partir de deux points.

- ![](/images/Draft_BSpline.svg) [B-spline](/Draft_BSpline/fr "Draft BSpline/fr") : crée une courbe B-spline à partir de plusieurs points.

- ![](/images/Draft_BezCurve.svg) [Courbe de Bézier](/Draft_BezCurve/fr "Draft BezCurve/fr") : crée une courbe de Bézier à partir de plusieurs points.

- ![](/images/Draft_CubicBezCurve.svg) [Courbe de Bézier cubique](/Draft_CubicBezCurve/fr "Draft CubicBezCurve/fr") : crée une courbe de Bézier du troisième degré.

- ![](/images/Draft_Point.svg) [Point](/Draft_Point/fr "Draft Point/fr") : crée un simple point.

### 3D/BIM

Les objets 3D et BIM sont les éléments du monde réel qui composeront votre projet BIM.

- ![](/images/BIM_Project.svg) [Projet](/BIM_Project/fr "BIM Project/fr") : crée un projet IFC incluant les objets sélectionnés.

- ![](/images/Arch_Site.svg) [Site](/Arch_Site/fr "Arch Site/fr") : crée un site incluant les objets sélectionnés.

- ![](/images/Arch_Building.svg) [Bâtiment](/Arch_Building/fr "Arch Building/fr") : crée un bâtiment incluant les objets sélectionnés.

- ![](/images/Arch_Floor.svg) [Niveau](/Arch_Floor/fr "Arch Floor/fr") : crée un niveau incluant les objets sélectionnés.

- ![](/images/Arch_Space.svg) [Espace](/Arch_Space/fr "Arch Space/fr") : crée un objet volume vide.

- ![](/images/Arch_Wall.svg) [Mur](/Arch_Wall/fr "Arch Wall/fr") : crée un mur à partir de rien ou en utilisant un objet sélectionné comme base.

- ![](/images/Arch_CurtainWall.svg) [Mur-rideau](/Arch_CurtainWall/fr "Arch CurtainWall/fr") : crée un mur-rideau à partir de rien ou en utilisant un objet sélectionné comme base.

- ![](/images/BIM_Column.svg) [Colonne](/BIM_Column/fr "BIM Column/fr") : crée un élément vertical [structurel](/Arch_Structure/fr "Arch Structure/fr") à un point donné, en utilisant éventuellement un objet sélectionné comme profil.

- ![](/images/BIM_Beam.svg) [Poutre](/BIM_Beam/fr "BIM Beam/fr") : crée un élément [structurel](/Arch_Structure/fr "Arch Structure/fr") horizontal entre deux points, en utilisant éventuellement un objet sélectionné comme profil.

- ![](/images/BIM_Slab.svg) [Dalle](/BIM_Slab/fr "BIM Slab/fr") : crée un élément plat [structural](/Arch_Structure/fr "Arch Structure/fr") en extrudant un objet plat sélectionné.

- ![](/images/BIM_Door.svg) [Porte](/BIM_Door/fr "BIM Door/fr") : crée un objet [Fenêtre](/Arch_Window/fr "Arch Window/fr") en utilisant les préréglages de porte.

- ![](/images/Arch_Window.svg) [Fenêtre](/Arch_Window/fr "Arch Window/fr") : crée une fenêtre à partir de rien ou en utilisant un objet sélectionné comme base.

- ![](/images/Arch_Pipe.svg) [Conduite](/Arch_Pipe/fr "Arch Pipe/fr") : crée une conduite.

- ![](/images/Arch_PipeConnector.svg) [Raccord](/Arch_PipeConnector/fr "Arch PipeConnector/fr") : crée un angle ou une connexion en T entre 2 ou 3 conduites sélectionnées.

- ![](/images/Arch_Stairs.svg) [Escalier](/Arch_Stairs/fr "Arch Stairs/fr") : crée un objet escalier.

- ![](/images/Arch_Roof.svg) [Toit](/Arch_Roof/fr "Arch Roof/fr") : crée un toit incliné à partir d'une polyligne sélectionnée.

- ![](/images/Arch_Panel.svg) [Panneau](/Arch_Panel/fr "Arch Panel/fr") : crée un objet panneau à partir d'un objet 2D sélectionné.

- ![](/images/Arch_Frame.svg) [Ossature](/Arch_Frame/fr "Arch Frame/fr") : crée un objet ossature à partir d'une mise en page sélectionnée.

- ![](/images/Arch_Fence.svg) [Clôture](/Arch_Fence/fr "Arch Fence/fr") : crée un objet clôture à partir d'un poteau et d'un chemin sélectionnés.

- ![](/images/Arch_Truss.svg) [Treillis](/Arch_Truss/fr "Arch Truss/fr") : crée un treillis à partir d'une ligne sélectionnée ou de zéro.

- ![](/images/Arch_Equipment.svg) [Équipement](/Arch_Equipment/fr "Arch Equipment/fr") : crée un objet d'équipement ou de mobilier.

- Outils d'armatures :

: Ces outils, à l'exception du premier, ne sont disponibles que si le [atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr") a été installé.

- ![](/images/Arch_Rebar.svg) [Armature personnalisée](/Arch_Rebar/fr "Arch Rebar/fr") : crée une armature personnalisée dans un élément de structure sélectionné à l'aide d'une esquisse.

- ![](/images/Reinforcement_StraightRebar.svg) [Armature droite](/Reinforcement_StraightRebar/fr "Reinforcement StraightRebar/fr") : crée une armature droite dans un élément de structure sélectionné.

- ![](/images/Reinforcement_UShapeRebar.svg) [Armature en U](/Reinforcement_UShapeRebar/fr "Reinforcement UShapeRebar/fr") : crée une armature en U dans un élément de structure sélectionné.

- ![](/images/Reinforcement_LShapeRebar.svg) [Armature en L](/Reinforcement_LShapeRebar/fr "Reinforcement LShapeRebar/fr") : crée une armature en L dans un élément de structure sélectionné.

- ![](/images/Reinforcement_StirrupRebar.svg) [Armature en étrier](/Reinforcement_StirrupRebar/fr "Reinforcement StirrupRebar/fr") : crée une armature étrier dans un élément de structure sélectionné.

- ![](/images/Reinforcement_BentShapeRebar.svg) [Armature cintrée](/Reinforcement_BentShapeRebar/fr "Reinforcement BentShapeRebar/fr") : crée une armature de forme cintrée dans un élément de structure sélectionné.

- ![](/images/Reinforcement_HelicalRebar.svg) [Armature hélicoïdale](/Reinforcement_HelicalRebar/fr "Reinforcement HelicalRebar/fr") : crée une armature hélicoïdale dans un élément de structure sélectionné.

- ![](/images/Reinforcement_ColumnRebars.svg) [Armature pour colonne](/Reinforcement_ColumnRebars/fr "Reinforcement ColumnRebars/fr") : crée des armatures dans une colonne sélectionnée.

- ![](/images/Reinforcement_BeamRebars.svg) [Poutre](/Reinforcement_BeamRebars/fr "Reinforcement BeamRebars/fr") : crée des armatures dans une poutre sélectionnée.

- ![](/images/Reinforcement_SlabRebars.svg) [Renfort de dalle](/Reinforcement_SlabRebars/fr "Reinforcement SlabRebars/fr") : crée des armatures dans une dalle sélectionnée.

- ![](/images/Reinforcement_FootingRebars.svg) [Renfort de semelle](/Reinforcement_FootingRebars/fr "Reinforcement FootingRebars/fr"): crée des armatures dans une semelle sélectionnée.

* Outils 3D génériques :

: Ces outils permettent de créer des objets 3D génériques qui peuvent être transformés ou utilisés dans des composants BIM.

- ![](/images/Arch_Profile.svg) [Profilé](/Arch_Profile/fr "Arch Profile/fr") : crée un profilé 2D paramétrique.

- ![](/images/BIM_Box.svg) [Boîte](/BIM_Box/fr "BIM Box/fr") : crée une boîte en spécifiant ses dimensions graphiquement.

- ![](/images/Part_Builder.svg) [Générateur de formes...](/Part_Builder/fr "Part Builder/fr") : crée des formes plus complexes à partir de diverses primitives.

- ![](/images/Draft_Facebinder.svg) [Surface liée](/Draft_Facebinder/fr "Draft Facebinder/fr") : crée un objet surface à partir des faces sélectionnées.

- ![](/images/BIM_Library.svg) [Bibliothèque d'objets](/BIM_Library/fr "BIM Library/fr") : insère un objet d'équipement ou de mobilier. Nécessite l'extension [Parts Library](/Parts_Library/fr "Parts Library/fr").

- ![](/images/Arch_Component.svg) [Composant](/Arch_Component/fr "Arch Component/fr") : crée un composant Arch non-paramétrique.

- ![](/images/Arch_Reference.svg) [Référence externe](/Arch_Reference/fr "Arch Reference/fr") : lie les objets d'un autre fichier FreeCAD dans le document en cours.

### Annotation

Les annotations sont des objets d'aide visuels pouvant être placés dans votre modèle. Ils peuvent être utilisés pour exporter votre modèle directement vers un format 2D tel que [DXF](/Draft_DXF/fr "Draft DXF/fr"), ou être réutilisés lors de la création de vues 2D de votre modèle avec l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").

- ![](/images/BIM_Text.svg) [Texte](/BIM_Text/fr "BIM Text/fr") : crée un texte 2D dans un document ou sur une page TechDraw.

- ![](/images/Draft_ShapeString.svg) [Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr") : crée une forme composée qui représente une chaîne de texte.

- ![](/images/BIM_DimensionAligned.svg) [Dimension alignée](/BIM_DimensionAligned/fr "BIM DimensionAligned/fr") : crée une dimension alignée avec deux points ou une arête sélectionnée.

- ![](/images/BIM_DimensionHorizontal.svg) [Dimension horizontale](/BIM_DimensionHorizontal/fr "BIM DimensionHorizontal/fr") : crée une dimension horizontale entre deux points ou à partir d'un arête sélectionnée.

- ![](/images/BIM_DimensionVertical.svg) [Dimension verticale](/BIM_DimensionVertical/fr "BIM DimensionVertical/fr") : crée une dimension verticale entre deux points ou à partir d'une arête sélectionnée.

- ![](/images/BIM_Leader.svg) [Ligne de référence](/BIM_Leader/fr "BIM Leader/fr") : crée une polyligne à 2 segments avec une flèche à son extrémité, à utiliser comme ligne de référence avec un [texte](/BIM_Text/fr "BIM Text/fr").

- ![](/images/Draft_Label.svg) [Étiquette](/Draft_Label/fr "Draft Label/fr") : crée un texte de plusieurs lignes avec une ligne de tête à deux segments et une flèche.

- ![](/images/Arch_Axis.svg) [Axes](/Arch_Axis/fr "Arch Axis/fr") : ajoute un réseau d'axes à 1 direction.

- ![](/images/Arch_AxisSystem.svg) [Système d'axes](/Arch_AxisSystem/fr "Arch AxisSystem/fr") : ajoute un système d'axes composé de plusieurs axes.

- ![](/images/Arch_Grid.svg) [Grille](/Arch_Grid/fr "Arch Grid/fr") : ajoute un objet de type grille.

- ![](/images/Arch_SectionPlane.svg) [Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") : ajoute un objet plan de coupe.

- ![](/images/Draft_Hatch.svg) [Hachures](/Draft_Hatch/fr "Draft Hatch/fr") : crée des hachures sur les faces d'un objet sélectionné.

- ![](/images/BIM_TDPage.svg) [Page Techdraw](/BIM_TDPage/fr "BIM TDPage/fr") : crée une [page de TechDraw](/TechDraw_PageTemplate/fr "TechDraw PageTemplate/fr") à partir d'un fichier SVG modèle.

- ![](/images/BIM_TDView.svg) [Vue](/BIM_TDView/fr "BIM TDView/fr") : crée une vue de/des objet(s) sélectionnés, tel qu'un [plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") ou un groupe contenant les différents éléments d'une vue 2D.

- ![](/images/BIM_Shape2DView.svg) [Projection 2D](/BIM_Shape2DView/fr "BIM Shape2DView/fr") : crée une vue projetée en 2D à partir d'un objet sélectionné tel qu'un [plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") ou un [niveau](/Arch_BuildingPart/fr "Arch BuildingPart/fr").

### Aimantation

Ce menu contient les outils [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") ainsi que les outils suivants :

- ![](/images/BIM_SetWPTop.svg) [Plan de travail en haut](/BIM_SetWPTop/fr "BIM SetWPTop/fr") : place le plan de travail sur le plan global XY (sol).

- ![](/images/BIM_SetWPFront.svg) [Plan de travail de devant](/BIM_SetWPFront/fr "BIM SetWPFront/fr") : place le plan de travail sur le plan global XZ (avant).

- ![](/images/BIM_SetWPSide.svg) [Plan de travail de côté](/BIM_SetWPSide/fr "BIM SetWPSide/fr") : place le plan de travail sur le plan global YZ (coté).

### Modification

- ![](/images/Draft_Move.svg) [Déplacer](/Draft_Move/fr "Draft Move/fr") : déplace ou copie les objets sélectionnés d'un point à un autre.

- ![](/images/BIM_Copy.svg) [Copier](/BIM_Copy/fr "BIM Copy/fr") : copie les objets sélectionnés d'un point à un autre.

- ![](/images/Draft_Rotate.svg) [Pivoter](/Draft_Rotate/fr "Draft Rotate/fr") : fait pivoter ou copie les objets sélectionnés autour d'un point central selon un angle donné.

- ![](/images/BIM_Clone.svg) [Cloner](/BIM_Clone/fr "BIM Clone/fr") : clone les objets sélectionnés.

- ![](/images/BIM_SimpleCopy.svg) [Copie simple](/BIM_SimpleCopy/fr "BIM SimpleCopy/fr") : crée une copie non paramétrique d'un objet sélectionné. Il s'agit du même outil que [Part Copie simple](/Part_SimpleCopy/fr "Part SimpleCopy/fr").

- ![](/images/BIM_Compound.svg) [Composé](/BIM_Compound/fr "BIM Compound/fr") : crée un composé à partir des objets sélectionnés. Il s'agit du même outil que [Part Composé](/Part_Compound/fr "Part Compound/fr").

- ![](/images/Draft_Offset.svg) [Décaler](/Draft_Offset/fr "Draft Offset/fr") : décale chaque segment d'un objet sélectionné sur une distance donnée ou crée une copie décalée de l'objet sélectionné.

- ![](/images/BIM_Offset2D.svg) [Décaler en 2D](/BIM_Offset2D/fr "BIM Offset2D/fr") : construit une polyligne parallèle à une distance donnée de l'originale, ou agrandit/réduit une face plane (version paramétrique). Il s'agit du même outil que [Part Décaler en 2D](/Part_Offset2D/fr "Part Offset2D/fr").

- ![](/images/Draft_Trimex.svg) [Ajuster ou prolonger](/Draft_Trimex/fr "Draft Trimex/fr") : ajuste ou étend un objet sélectionné.

- ![](/images/Draft_Join.svg) [Joindre](/Draft_Join/fr "Draft Join/fr") : joint des [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et des [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr") en une seule polyligne.

- ![](/images/Draft_Split.svg) [Scinder](/Draft_Split/fr "Draft Split/fr") : divise une [Draft Ligne](/Draft_Line/fr "Draft Line/fr") ou une [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr") à un point ou une arête spécifique.

- ![](/images/Draft_Scale.svg) [Échelle](/Draft_Scale/fr "Draft Scale/fr") : met à l'échelle ou copie les objets sélectionnés autour d'un point de base.

- ![](/images/Draft_Stretch.svg) [Étirer](/Draft_Stretch/fr "Draft Stretch/fr") : étire les objets en déplaçant les points sélectionnés.

- ![](/images/Draft_Draft2Sketch.svg) [Draft <=> esquisse](/Draft_Draft2Sketch/fr "Draft Draft2Sketch/fr") : convertit les objets Draft en [Sketcher Esquisses](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") et vice versa.

- ![](/images/Draft_Upgrade.svg) [Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr") : agrège les objets sélectionnés.

- ![](/images/Draft_Downgrade.svg) [Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr") : déclasse les objets sélectionnés.

- ![](/images/Arch_Add.svg) [Ajouter](/Arch_Add/fr "Arch Add/fr") : ajoute des objets à un composant.

- ![](/images/Arch_Remove.svg) [Supprimer](/Arch_Remove/fr "Arch Remove/fr") : soustrait ou supprime des objets d'un composant.

- ![](/images/Draft_OrthoArray.svg) [Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr") : crée un réseau orthogonal à partir d'un objet sélectionné. Cela peut éventuellement créer un réseau de [liens](/App_Link/fr "App Link/fr").

- ![](/images/Draft_PathArray.svg) [Réseau selon une courbe](/Draft_PathArray/fr "Draft PathArray/fr") : crée un réseau à partir d'un objet sélectionné en plaçant des copies le long d'un tracé.

- ![](/images/Draft_PolarArray.svg) [Réseau polaire](/Draft_PolarArray/fr "Draft PolarArray/fr") : crée un réseau à partir d'un objet sélectionné en plaçant des copies sur une circonférence. L'outil peut créer un réseau de [liens](/App_Link/fr "App Link/fr").

- ![](/images/Draft_PointArray.svg) [Réseau de points](/Draft_PointArray/fr "Draft PointArray/fr") : crée un réseau à partir d'un objet sélectionné en plaçant des copies aux points d'un composé de points.

- ![](/images/Arch_CutPlane.svg) [Couper suivant un plan](/Arch_CutPlane/fr "Arch CutPlane/fr") : découpe un objet en fonction d'un plan.

- ![](/images/Draft_Mirror.svg) [Miroir](/Draft_Mirror/fr "Draft Mirror/fr") : crée des copies miroir à partir des objets sélectionnés.

- ![](/images/BIM_Extrude.svg) [Extrusion](/BIM_Extrude/fr "BIM Extrude/fr") : extrude les faces planes d'un objet. Il s'agit du même outil que [Part Extrusion](/Part_Extrude/fr "Part Extrude/fr").

- ![](/images/BIM_Cut.svg) [Soustraction](/BIM_Cut/fr "BIM Cut/fr") : soustrait un objet d'un autre. Il s'agit du même outil que [Part Soustraction](/Part_Cut/fr "Part Cut/fr").

- ![](/images/BIM_Fuse.svg) [Union](/BIM_Fuse/fr "BIM Fuse/fr") : fusionne deux objets. Il s'agit du même outil que [Part Union](/Part_Fuse/fr "Part Fuse/fr").

- ![](/images/BIM_Common.svg) [Intersection](/BIM_Common/fr "BIM Common/fr") : extrait la partie commune de deux objets. Il s'agit du même outil que [Part Intersection](/Part_Common/fr "Part Common/fr").

### Gestion

- ![](/images/BIM_Setup.svg) [Configuration des BIM](/BIM_Setup/fr "BIM Setup/fr") : configure certaines des préférences de FreeCAD les plus couramment utilisées pour les BIM.

- ![](/images/BIM_Views.svg) [Gérer les vues BIM](/BIM_Views/fr "BIM Views/fr") : gérer les différentes vues et niveaux de votre projet.

- ![](/images/BIM_ProjectManager.svg) [Projet](/BIM_ProjectManager/fr "BIM ProjectManager/fr") : permet de créer des objets de base tels qu'un [site](/Arch_Site/fr "Arch Site/fr"), un [bâtiment](/Arch_Building/fr "Arch Building/fr") et des [axes](/Arch_Axis/fr "Arch Axis/fr") en remplissant les informations de base du projet.

- ![](/images/BIM_Windows.svg) [Fenêtres et portes](/BIM_Windows/fr "BIM Windows/fr") : gérer les portes et fenêtres de votre projet.

- ![](/images/BIM_IfcElements.svg) [Éléments IFC](/BIM_IfcElements/fr "BIM IfcElements/fr") : gérer la façon dont les différents éléments de votre projet seront exportés en IFC.

- ![](/images/BIM_IfcQuantities.svg) [Quantités IFC](/BIM_IfcQuantities/fr "BIM IfcQuantities/fr") : gérer la façon dont les quantités de vos objets sont explicitement exportées en IFC.

- ![](/images/BIM_IfcProperties.svg) [Propriétés IFC](/BIM_IfcProperties/fr "BIM IfcProperties/fr") : gérer les propriétés IFC attachées à chacun de vos objets.

- ![](/images/BIM_Classification.svg) [Classification](/BIM_Classification/fr "BIM Classification/fr") : gérer la façon dont les objets et les matériaux de votre projet sont liés à des systèmes de classification tels que [Uniclass](https://en.wikipedia.org/wiki/Uniclass).

- ![](/images/BIM_Layers.svg) [Calques](/BIM_Layers/fr "BIM Layers/fr") : gérer les calques de votre document.

- ![](/images/BIM_Material.svg) [Matériau](/BIM_Material/fr "BIM Material/fr") : gère les [matériaux](/Arch_SetMaterial/fr "Arch SetMaterial/fr") ou les [multi-matériaux](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr") des objets sélectionnés.

- ![](/images/Arch_Schedule.svg) [Nomenclature](/Arch_Schedule/fr "Arch Schedule/fr") : crée différents types de nomenclatures.

- ![](/images/BIM_Preflight.svg) [Contrôle en amont](/BIM_Preflight/fr "BIM Preflight/fr") : effectuer différents contrôles sur votre modèle avant de l'exporter en IFC.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Éditer le style des annotations](/Draft_AnnotationStyleEditor/fr "Draft AnnotationStyleEditor/fr") : permet de définir des styles qui affectent les propriétés visuelles des objets de type annotation.

### Utilitaires

- ![](/images/BIM_TogglePanels.svg) [Bascule des panneaux inférieurs](/BIM_TogglePanels/fr "BIM TogglePanels/fr") : affiche ou masque les fenêtres de sortie (la vue rapport et la console Python).

- ![](/images/BIM_Trash.svg) [Corbeille](/BIM_Trash/fr "BIM Trash/fr") : déplace les objets sélectionnés vers la corbeille, créée si nécessaire.

- ![](/images/BIM_WPView.svg) [Vue du plan de travail](/BIM_WPView/fr "BIM WPView/fr") : règle la caméra pour qu'elle soit face au plan de travail en cours.

- ![](/images/Draft_SelectGroup.svg) [Sélection groupée](/Draft_SelectGroup/fr "Draft SelectGroup/fr") : sélectionne le contenu des objets de type [Std Groupe](/Std_Group/fr "Std Group/fr") ou des objets de type groupe de [Arch](/Arch_Workbench/fr "Arch Workbench/fr").

- ![](/images/Draft_Slope.svg) [Pente](/Draft_Slope/fr "Draft Slope/fr") : incline les [Draft Lignes](/Draft_Line/fr "Draft Line/fr") ou les [Draft Polylignes](/Draft_Wire "Draft Wire") sélectionnés en augmentant ou en diminuant, la coordonnée Z de tous les points après le premier.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Proxy de plan de travail](/Draft_WorkingPlaneProxy/fr "Draft WorkingPlaneProxy/fr") : crée un proxy de plan de travail pour sauvegarder le [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").

- ![](/images/Draft_AddConstruction.svg) [Ajouter au groupe de construction](/Draft_AddConstruction/fr "Draft AddConstruction/fr") : déplace les objets vers le [Draft mode construction](/Draft_ToggleConstructionMode/fr "Draft ToggleConstructionMode/fr").

- ![](/images/Arch_SplitMesh.svg) [Diviser un maillage](/Arch_SplitMesh/fr "Arch SplitMesh/fr") : divise un maillage sélectionné en composants séparés.

- ![](/images/Arch_MeshToShape.svg) [Maillage en une forme](/Arch_MeshToShape/fr "Arch MeshToShape/fr") : convertit un maillage en une forme, en unifiant les faces coplanaires.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Sélection de Sélection de maillages non-manifoldz non-manifold](/Arch_SelectNonSolidMeshes/fr "Arch SelectNonSolidMeshes/fr") : sélectionne tous les maillages non-manifold de la sélection courante ou du document.

- ![](/images/Arch_RemoveShape.svg) [Supprimer la forme](/Arch_RemoveShape/fr "Arch RemoveShape/fr") : rend l'objet Arch basé sur une forme cubique entièrement paramétrique.

- ![](/images/Arch_CloseHoles.svg) [Boucher des trous](/Arch_CloseHoles/fr "Arch CloseHoles/fr") : bouche des trous d'un objet sélectionné basé sur une forme.

- ![](/images/Arch_MergeWalls.svg) [Fusionner des murs](/Arch_MergeWalls/fr "Arch MergeWalls/fr") : fusionne des murs.

- ![](/images/Arch_Check.svg) [Vérification](/Arch_Check/fr "Arch Check/fr") : vérifie si les objets sélectionnés sont des solides et ne contiennent pas de défauts.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Basculer en B-rep IFC](/Arch_ToggleIfcBrepFlag/fr "Arch ToggleIfcBrepFlag/fr") : force un objet sélectionné à être exporté en tant que [IfcFacetedBrep](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_ToggleSubs.svg) [Bascule des sous composants](/Arch_ToggleSubs/fr "Arch ToggleSubs/fr") : affiche ou cache les sous-composants d'un objet Arch.

- ![](/images/Arch_Survey.svg) [Prendre des cotes](/Arch_Survey/fr "Arch Survey/fr") : permet de rentrer ou de sortir du mode prise de cotes.

- ![](/images/BIM_Diff.svg) [Comparateur d'IFC](/BIM_Diff/fr "BIM Diff/fr") : affiche une différence visuelle entre deux fichiers IFC.

- ![](/images/BIM_IfcExplorer.svg) [Explorateur d'IFC](/BIM_IfcExplorer/fr "BIM IfcExplorer/fr") : ouvre un outil permettant d'explorer la structure d'un fichier IFC avant de l'importer.

- ![](/images/Arch_IfcSpreadsheet.svg) [Tableur IFC](/Arch_IfcSpreadsheet/fr "Arch IfcSpreadsheet/fr") : cet outil crée une feuille de calcul pour stocker les propriétés IFC d'un objet.

- ![](/images/BIM_ImagePlane.svg) [Plan d'image](/index.php?title=BIM_ImagePlane/fr&action=edit&redlink=1 "BIM ImagePlane/fr (page does not exist)") : insère un plan d'image dans le document.

- ![](/images/BIM_Unclone.svg) [Cloner libre](/index.php?title=BIM_Unclone/fr&action=edit&redlink=1 "BIM Unclone/fr (page does not exist)") : crée un objet cloné indépendant de l'objet d'origine.

- ![](/images/BIM_Rewire.svg) [Recréer les polylignes](/index.php?title=BIM_Rewire/fr&action=edit&redlink=1 "BIM Rewire/fr (page does not exist)") :

- ![](/images/BIM_Glue.svg) [Coller](/index.php?title=BIM_Glue/fr&action=edit&redlink=1 "BIM Glue/fr (page does not exist)") :

- ![](/images/BIM_Reextrude.svg) [Extruder de nouveau](/index.php?title=BIM_Reextrude/fr&action=edit&redlink=1 "BIM Reextrude/fr (page does not exist)") : recrée une extrusion à partir d'une forme qui a perdu son extrusion paramétrique en sélectionnant une face de base.

- Outils pour les panneaux :

- ![](/images/Arch_Panel.svg) [Panneaux](/Arch_Panel/fr "Arch Panel/fr") : crée un objet panneau à partir d'un objet 2D sélectionné.

- ![](/images/Arch_Panel_Cut.svg) [Découpe de panneaux](/Arch_Panel_Cut/fr "Arch Panel Cut/fr") : crée une vue coupée en 2D à partir d'un panneau.

- ![](/images/Arch_Panel_Sheet.svg) [Feuille de panneau](/Arch_Panel_Sheet/fr "Arch Panel Sheet/fr") : crée une feuille de découpe 2D comprenant des découpes de panneaux ou d'autres objets 2D.

- ![](/images/Arch_Nest.svg) [Calepinage](/Arch_Nest/fr "Arch Nest/fr") : permet d'imbriquer plusieurs objets plats à l'intérieur d'une forme conteneur.

- Outils pour les structures :

- ![](/images/Arch_Structure.svg) [Structure](/Arch_Structure/fr "Arch Structure/fr") : crée un élément structurel à partir de rien ou en utilisant un objet sélectionné comme base.

- ![](/images/Arch_StructuralSystem.svg) [Système structurel](/index.php?title=Arch_StructuralSystem/fr&action=edit&redlink=1 "Arch StructuralSystem/fr (page does not exist)") :

- ![](/images/Arch_StructuresFromSelection.svg) [Structures multiples](/index.php?title=Arch_StructuresFromSelection/fr&action=edit&redlink=1 "Arch StructuresFromSelection/fr (page does not exist)") :

- ![](/images/IFC_Diff.svg) [Différence IFC](/index.php?title=IFC_Diff/fr&action=edit&redlink=1 "IFC Diff/fr (page does not exist)") :

- ![](/images/IFC_Expand.svg) [Développer l'IFC](/index.php?title=IFC_Expand/fr&action=edit&redlink=1 "IFC Expand/fr (page does not exist)") :

- ![](/images/IFC_MakeProject.svg) [Projet IFC](/index.php?title=IFC_MakeProject/fr&action=edit&redlink=1 "IFC MakeProject/fr (page does not exist)") :

- ![](/images/IFC_UpdateIOS.svg) [Mise à jour de IfcOpenShell](/index.php?title=IFC_UpdateIOS/fr&action=edit&redlink=1 "IFC UpdateIOS/fr (page does not exist)") :

- Petit déplacement :

: \* [Mode Auto/manuel](/index.php?title=BIM_Nudge_Switch&action=edit&redlink=1 "BIM Nudge Switch (page does not exist)"):

: \* [Vers le haut](/index.php?title=BIM_Nudge_Up/fr&action=edit&redlink=1 "BIM Nudge Up/fr (page does not exist)") :

: \* [Vers le bas](/index.php?title=BIM_Nudge_Down/fr&action=edit&redlink=1 "BIM Nudge Down/fr (page does not exist)") :

: \* [Vers la gauche](/index.php?title=BIM_Nudge_Left/fr&action=edit&redlink=1 "BIM Nudge Left/fr (page does not exist)") :

: \* [Vers la droite](/index.php?title=BIM_Nudge_Right/fr&action=edit&redlink=1 "BIM Nudge Right/fr (page does not exist)") :

: \* [Rotation à gauche](/index.php?title=BIM_Nudge_RotateLeft/fr&action=edit&redlink=1 "BIM Nudge RotateLeft/fr (page does not exist)") :

: \* [Rotation à droite](/index.php?title=BIM_Nudge_RotateRight/fr&action=edit&redlink=1 "BIM Nudge RotateRight/fr (page does not exist)") :

: \* [Extension](/index.php?title=BIM_Nudge_Extend/fr&action=edit&redlink=1 "BIM Nudge Extend/fr (page does not exist)") :

: \* [Diminution](/index.php?title=BIM_Nudge_Shrink/fr&action=edit&redlink=1 "BIM Nudge Shrink/fr (page does not exist)") :

### Barre d'état

La barre d'état contient quelques boutons qui permettent de changer facilement d'état :

- ![](/images/BIM_TogglePanels.svg) [Bascule des panneaux de bas de page](/BIM_TogglePanels/fr "BIM TogglePanels/fr") : affiche ou masque la [vue rapport](/Report_view/fr "Report view/fr") et la [console Python](/Python_console/fr "Python console/fr").

- ![](/images/BIM_ToggleViews.svg) Bascule des vues : affiche ou masque le panneau de [Gérer les vues BIM](/BIM_Views/fr "BIM Views/fr").

- ![](/images/BIM_ToggleBackground.svg) Cycle de l'arrière-plan : cycles entre les modes dégradé vertical, dégradé radial et arrière-plan de couleur simple. Cela peut être utilisé pour alterner entre un arrière-plan sombre pour la modélisation et un arrière-plan blanc pour le dessin en 2D.

- ![](/images/IFC.svg) Vérrouiller IFC : permet de passer [du mode IFC verrouillé au mode IFC déverrouillé](/index.php?title=NativeIFC/fr&action=edit&redlink=1 "NativeIFC/fr (page does not exist)")

### Menu contextuel de la vue en arborescence

A définir

### Menu contextuel de la vue 3D

A définir

### Outils obsolètes

- ![](/images/Arch_3Views.svg) [Arch 3 vues depuis un maillage](/Arch_3Views/fr "Arch 3Views/fr") : crée des vues de dessus, de face et de côté à partir d'un [maillage](/Mesh_Workbench/fr "Mesh Workbench/fr"). Non disponible dans version 1.0 et suivantes.

- ![](/images/Arch_BuildingPart.svg) [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr") : crée une partie de bâtiment incluant les objets sélectionnés. Non disponible dans version 1.0 et suivantes. Utilisez plutôt [Arch Niveau](/Arch_Floor/fr "Arch Floor/fr").

- ![](/images/Arch_CloneComponent.svg) [Cloner un composant](/Arch_CloneComponent/fr "Arch CloneComponent/fr") : produit des composants Arch qui sont des clones d'objets Arch sélectionnés. Non disponible dans version 1.0 et suivantes. Utilisez plutôt [Draft Cloner](/Draft_Clone/fr "Draft Clone/fr").

- ![](/images/Arch_CutLine.svg) [Arch Couper selon une ligne](/Arch_CutLine/fr "Arch CutLine/fr") : coupe un objet en fonction d'une ligne. Non disponible dans version 1.0 et suivantes. Utilisez plutôt [Arch Couper selon un plan](/Arch_CutPlane/fr "Arch CutPlane/fr").

- ![](/images/Arch_MultiMaterial.svg) [Arch Multi-matériau](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr") : crée un multi-matériau et l'attribue aux objets sélectionnés, s'il y en a. Non disponible dans version 1.0 et suivantes. Utilisez plutôt [BIM Matériau](/BIM_Material/fr "BIM Material/fr").

- ![](/images/Arch_Project.svg) [Arch Projet](/Arch_Project/fr "Arch Project/fr") : crée un projet incluant les objets sélectionnés. Non disponible dans version 1.0 et suivantes. Utilisez plutôt [BIM Projet](/BIM_Project/fr "BIM Project/fr").

- ![](/images/Arch_SetMaterial.svg) [Arch Matériau](/Arch_SetMaterial/fr "Arch SetMaterial/fr") : crée un matériau et l'attribue aux objets sélectionnés, s'il y en a. Non disponible dans version 1.0 et suivantes. Utilisez plutôt [BIM Matériau](/BIM_Material/fr "BIM Material/fr").

## Préférences

- ![](/images/Preferences-bim.svg) [Préférences](/BIM_Preferences/fr "BIM Preferences/fr") : préférences générales pour l'atelier BIM.
- [Réglage fin](/Fine-tuning/fr#Atelier_BIM "Fine-tuning/fr") : paramètres supplémentaires pour améliorer le comportement de BIM.

## Travailler avec les IFC

L'atelier BIM fonctionne nativement avec les fichiers [Industry Foundation Classes](https://fr.wikipedia.org/wiki/Industry_Foundation_Classes) (IFC). Natif signifie qu'il n'y a plus de traduction entre le contenu IFC et FreeCAD : le contenu des IFC est directement rendu dans FreeCAD, et tout changement affecte directement le contenu des IFC. Pour en savoir plus, voir [NativeIFC](/index.php?title=NativeIFC/fr&action=edit&redlink=1 "NativeIFC/fr (page does not exist)").

Si vous n'avez pas l'intention de travailler avec d'autres personnes et que vous n'avez pas besoin d'IFC, vous pouvez toujours utiliser les outils de l'atelier BIM et ignorer tout ce qui a trait à l'IFC. Vous pouvez toujours exporter votre modèle au format IFC.

L'ancien importateur de [Arch IFC](/Arch_IFC/fr "Arch IFC/fr") est désactivé par défaut dans FreeCAD mais toujours disponible à partir de Python.

Il existe également un [Tutoriel IFC natifs](/index.php?title=NativeIFC_Tutorial/fr&action=edit&redlink=1 "NativeIFC Tutorial/fr (page does not exist)") spécifique qui explique les concepts plus en détail.

## Formats de fichiers

- [IFC](/Arch_IFC/fr "Arch IFC/fr") : Industry Foundation Classes
- [DAE](/Arch_DAE/fr "Arch DAE/fr") : format de maillage de Collada
- [OBJ](/Arch_OBJ/fr "Arch OBJ/fr") : format de maillage OBJ (seulement en exportation)
- [JSON](/Arch_JSON/fr "Arch JSON/fr") : JavaScript Object Notation format (seulement en exportation)
- [3DS](/Arch_3DS/fr "Arch 3DS/fr") : format 3DS (seulement en importation)
- [SHP](/Arch_SHP/fr "Arch SHP/fr") : shapefiles GIS (seulement en importation)

## API

L'atelier Arch peut être utilisé dans des scripts [Python](/Python/fr "Python/fr") et dans des [macros](/Macros/fr "Macros/fr") grâce aux fonctions [Arch Python API](/Arch_API/fr "Arch API/fr").

## Tutoriels et apprentissage

- [Migrer de Revit vers FreeCAD](/Migrating_to_FreeCAD_from_Revit/fr "Migrating to FreeCAD from Revit/fr")
- [Tutoriels sur ce wiki Arch & BIM](/Tutorials/fr#Architecture_et_BIM "Tutorials/fr")
- ["BIM with FreeCAD" série de vidéos de Yorik](https://www.youtube.com/playlist?list=PLmKdGVtV5Vnt2cj4IZIv9FM39QHaE1ZaU)
- ["FreeCAD tutorials" série de vidéos de Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwkkxVOfVmR8ObpPN5QbL7ye)
- ["Quinta Monroy" série de vidéos de Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwnAYyutuKhrPY51skaBhrVU)
- ["HRCompacta" chaîne youtube (la plupart du contenu est en portugais)](https://www.youtube.com/@HRCompacta)
- ["FreeCADBIM" chaîne youtube (la plupart du contenu est en portugais)](https://www.youtube.com/@FreeCadBIM)

## Fichiers d'exemple

- FreeCAD propose un exemple BIM à la page Start.
- D'autres exemples de fichiers BIM sont disponibles ici : [Exemples BIM](https://github.com/yorikvanhavre/FreeCAD-BIM-examples).
- Dans FreeCAD, utilisez le menu Aide → Exemples BIM.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Workbench/fr&oldid=1567086>"
