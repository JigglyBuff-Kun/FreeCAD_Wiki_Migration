---
title: Atelier Arch
---

:::caution
Dans la version 1.0, les ateliers BIM, Native-IFC et Arch ont été fusionnés dans l'atelier BIM.
:::
![](/images/Workbench_Arch.svg)

Icône de l'Atelier Arch

## Introduction

L'![](/images/Workbench_Arch.svg) atelier Arch fournit un flux de travail moderne [**B**uilding'**I**nformation**M**odelling](https://fr.wikipedia.org/wiki/Building_information_modeling) (BIM) à FreeCAD, avec la prise en charge de fonctions telles que des entités architecturales entièrement paramétriques comme les murs, les poutres, les toits, les fenêtres, les escaliers, les tuyaux et le mobilier. Il prend en charge les fichiers [*I*ndustry **F*oundation*** *C*lasses](/Arch_IFC/fr "Arch IFC/fr") (IFC) et la production de plans d'étage en 2D en combinaison avec l'![](/images/Workbench_TechDraw.svg) [atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr").

L'atelier Arch importe tous les outils de l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") car il utilise ses objets 2D pour créer des objets architecturaux paramétriques 3D. Néanmoins, Arch peut également utiliser des formes solides créées avec d'autres ateliers tels que ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/fr "Part Workbench/fr") et ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

La fonctionnalité BIM de FreeCAD est progressivement divisée en cet atelier Arch, qui contient des outils d'architecture de base, et l'![](/images/Workbench_BIM.svg) [Atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr"), disponible depuis le ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Cet atelier BIM ajoute une nouvelle couche d'interface en plus des outils Arch dans le but de rendre le flux de travail BIM plus intuitif et convivial. Voir [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide).

Les développeurs de Draft, Arch et BIM collaborent également avec la [communauté OSArch](https://osarch.org) dans le but d'améliorer la conception des bâtiments en utilisant un logiciel entièrement gratuit.

![](/images/Screenshot_arch_window.jpg)

## Outils

Ces outils permettent la création d'objets architecturaux.

- ![](/images/Arch_Wall.svg) [Mur](/Arch_Wall/fr "Arch Wall/fr") : crée un mur à partir de rien ou en utilisant un objet sélectionné comme base.

- ![](/images/Arch_Structure.svg) [Structure](/Arch_Structure/fr "Arch Structure/fr") : crée un élément structurel à partir de rien ou en utilisant un objet sélectionné comme base.

- ![](/images/Arch_CompRebarStraight.png) [Armatures](/Arch_CompRebarStraight/fr "Arch CompRebarStraight/fr") : ces outils, saufle dernier, ne sont disponibles que si l'[atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr") a été installé.

- ![](/images/Reinforcement_StraightRebar.svg) [Armature droite](/Reinforcement_StraightRebar/fr "Reinforcement StraightRebar/fr") : crée une barre de ferraillage droite dans un élément de structure sélectionné.

- ![](/images/Reinforcement_UShapeRebar.svg) [Armature en U](/Reinforcement_UShapeRebar/fr "Reinforcement UShapeRebar/fr") : crée une barre de ferraillage de forme U dans un élément de structure sélectionné.

- ![](/images/Reinforcement_LShapeRebar.svg) [Armature en L](/Reinforcement_LShapeRebar/fr "Reinforcement LShapeRebar/fr") : crée une barre de ferraillage de forme L dans un élément de structure sélectionné.

- ![](/images/Reinforcement_StirrupRebar.svg) [Armature en étrier](/Reinforcement_StirrupRebar/fr "Reinforcement StirrupRebar/fr") : crée une barre de renforcement d'étrier dans un élément de structure sélectionné.

- ![](/images/Reinforcement_BentShapeRebar.svg) [Armature cintrée](/Reinforcement_BentShapeRebar/fr "Reinforcement BentShapeRebar/fr") : crée une barre de renforcement de forme cintrée dans un élément de structure sélectionné.

- ![](/images/Reinforcement_HelicalRebar.svg) [Armature hélicoïdale](/Reinforcement_HelicalRebar/fr "Reinforcement HelicalRebar/fr") : crée une barre de ferraillage hélicoïdale dans un élément de structure sélectionné.

- ![](/images/Reinforcement_ColumnRebars.svg) [Armature en colonne](/Reinforcement_ColumnRebars/fr "Reinforcement ColumnRebars/fr") : crée des armatures dans une colonne sélectionnée.

- ![](/images/Reinforcement_BeamRebars.svg) [Poutre](/Reinforcement_BeamRebars/fr "Reinforcement BeamRebars/fr") : crée des barres d'armature dans une poutre sélectionnée.

- ![](/images/Reinforcement_SlabRebars.svg) [Renfort de dalle](/Reinforcement_SlabRebars/fr "Reinforcement SlabRebars/fr") : crée des barres d'armature dans une dalle sélectionnée.

- ![](/images/Reinforcement_FootingRebars.svg) [Renfort de semelle](/Reinforcement_FootingRebars/fr "Reinforcement FootingRebars/fr"): crée des barres d'armature dans une semelle sélectionnée.

- ![](/images/Arch_Rebar.svg) [Armature personnalisée](/Arch_Rebar/fr "Arch Rebar/fr") : crée une barre de ferraillage personnalisée dans un élément de structure sélectionné à l'aide d'une esquisse.

- ![](/images/Arch_CurtainWall.svg) [Mur-rideau](/Arch_CurtainWall/fr "Arch CurtainWall/fr") : crée un mur-rideau à partir de rien ou en utilisant un objet sélectionné comme base.

- ![](/images/Arch_BuildingPart.svg) [Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr") : crée une partie de bâtiment incluant les objets sélectionnés.

- ![](/images/Arch_Project.svg) [Projet](/Arch_Project/fr "Arch Project/fr") : crée un projet incluant les objets sélectionnés.

- ![](/images/Arch_Site.svg) [Site](/Arch_Site/fr "Arch Site/fr") : crée un site incluant les objets sélectionnés.

- ![](/images/Arch_Building.svg) [Bâtiment](/Arch_Building/fr "Arch Building/fr") : crée un bâtiment incluant les objets sélectionnés.

- ![](/images/Arch_Floor.svg) [Niveau](/Arch_Floor/fr "Arch Floor/fr") : crée un niveau incluant les objets sélectionnés.

- ![](/images/Arch_Reference.svg) [Référence externe](/Arch_Reference/fr "Arch Reference/fr") : lie les objets d'un autre fichier FreeCAD dans le document en cours.

- ![](/images/Arch_Window.svg) [Fenêtre](/Arch_Window/fr "Arch Window/fr") : crée une fenêtre à partir de rien ou en utilisant un objet sélectionné comme base.

- ![](/images/Arch_Roof.svg) [Toit](/Arch_Roof/fr "Arch Roof/fr") : crée un toit incliné à partir d'une polyligne sélectionnée.

- ![](/images/Arch_CompAxis.png) [Outils pour les axes](/Arch_CompAxis/fr "Arch CompAxis/fr")

- ![](/images/Arch_Axis.svg) [Axes](/Arch_Axis/fr "Arch Axis/fr") : ajoute un réseau d'axes à 1 direction.

- ![](/images/Arch_AxisSystem.svg) [Système d'axes](/Arch_AxisSystem/fr "Arch AxisSystem/fr") : ajoute un système d'axes composé de plusieurs axes.

- ![](/images/Arch_Grid.svg) [Grille](/Arch_Grid/fr "Arch Grid/fr") : ajoute un objet de type grille.

- ![](/images/Arch_SectionPlane.svg) [Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") : ajoute un objet plan de coupe.

- ![](/images/Arch_Space.svg) [Espace](/Arch_Space/fr "Arch Space/fr") : crée un objet volume vide.

- ![](/images/Arch_Stairs.svg) [Escalier](/Arch_Stairs/fr "Arch Stairs/fr") : crée un objet escalier.

- ![](/images/Arch_CompPanel.png) [Outils pour les panneaux](/Arch_CompPanel/fr "Arch CompPanel/fr")

- ![](/images/Arch_Panel.svg) [Panneaux](/Arch_Panel/fr "Arch Panel/fr") : crée un objet panneau à partir d'un objet 2D sélectionné.

- ![](/images/Arch_Panel_Cut.svg) [Découpe de panneaux](/Arch_Panel_Cut/fr "Arch Panel Cut/fr") : crée une vue coupée en 2D à partir d'un panneau.

- ![](/images/Arch_Panel_Sheet.svg) [Feuille de panneau](/Arch_Panel_Sheet/fr "Arch Panel Sheet/fr") : crée une feuille de découpe 2D comprenant des découpes de panneaux ou d'autres objets 2D.

- ![](/images/Arch_Nest.svg) [Calepinage](/Arch_Nest/fr "Arch Nest/fr") : permet d'imbriquer plusieurs objets plats à l'intérieur d'une forme conteneur.

- ![](/images/Arch_Equipment.svg) [Équipement](/Arch_Equipment/fr "Arch Equipment/fr") : crée un objet d'équipement ou de mobilier.

- ![](/images/Arch_Frame.svg) [Ossature](/Arch_Frame/fr "Arch Frame/fr") : crée un objet ossature à partir d'une mise en page sélectionnée.

- ![](/images/Arch_Fence.svg) [Clôture](/Arch_Fence/fr "Arch Fence/fr") : crée un objet clôture à partir d'un poteau et d'un chemin sélectionnés.

- ![](/images/Arch_Truss.svg) [Treillis](/Arch_Truss/fr "Arch Truss/fr") : crée un treillis à partir d'une ligne sélectionnée ou de zéro.

- ![](/images/Arch_Profile.svg) [Profilé](/Arch_Profile/fr "Arch Profile/fr") : crée un profilé 2D paramétrique.

- ![](/images/Arch_CompSetMaterial.png) [Outils pour les matériaux](/Arch_CompSetMaterial/fr "Arch CompSetMaterial/fr")

- ![](/images/Arch_SetMaterial.svg) [Matériau](/Arch_SetMaterial/fr "Arch SetMaterial/fr") : crée un matériau et l'attribue aux objets sélectionnés, le cas échéant.

- ![](/images/Arch_MultiMaterial.svg) [Multi-matériaux](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr") : crée un multi-matériaux et l'attribue aux objets sélectionnés, le cas échéant.

- ![](/images/Arch_Schedule.svg) [Nomenclature](/Arch_Schedule/fr "Arch Schedule/fr") : crée différents types de nomenclatures.

- ![](/images/Arch_CompPipe.png) [Outils pour la tuyauterie](/Arch_CompPipe/fr "Arch CompPipe/fr")

- ![](/images/Arch_Pipe.svg) [Conduite](/Arch_Pipe/fr "Arch Pipe/fr") : crée une conduite.

- ![](/images/Arch_PipeConnector.svg) [Raccord](/Arch_PipeConnector/fr "Arch PipeConnector/fr") : crée un raccord en angle ou un raccord en T entre 2 ou 3 conduites sélectionnées.

### Outils de transformation

Ce sont des outils de modification d'objets architecturaux.

- ![](/images/Arch_CutPlane.svg) [Couper suivant un plan](/Arch_CutPlane/fr "Arch CutPlane/fr") : découpe un objet en fonction d'un plan.

- ![](/images/Arch_CutLine.svg) [Couper suivant une ligne](/Arch_CutLine/fr "Arch CutLine/fr") : découpe un objet en fonction d'une ligne.

- ![](/images/Arch_Add.svg) [Ajouter](/Arch_Add/fr "Arch Add/fr") : ajoute des objets à un composant.

- ![](/images/Arch_Remove.svg) [Supprimer](/Arch_Remove/fr "Arch Remove/fr") : soustrait ou supprime des objets d'un composant.

- ![](/images/Arch_Survey.svg) [Prendre des cotes](/Arch_Survey/fr "Arch Survey/fr") : permet de rentrer ou de sortir du mode prise de cotes.

### Utilitaires

Ce sont des outils supplémentaires, pour vous aider dans des tâches spécifiques.

- ![](/images/Arch_Component.svg) [Composant](/Arch_Component/fr "Arch Component/fr") : crée un composant Arch non-paramétrique.

- ![](/images/Arch_CloneComponent.svg) [Cloner un composant](/Arch_CloneComponent/fr "Arch CloneComponent/fr") : produit des composants Arch qui sont des clones d'objets Arch sélectionnés (à ne pas confondre avec [Draft Cloner](/Draft_Clone/fr "Draft Clone/fr")).

- ![](/images/Arch_SplitMesh.svg) [Diviser un maillage](/Arch_SplitMesh/fr "Arch SplitMesh/fr") : divise un maillage sélectionné en composants séparés.

- ![](/images/Arch_MeshToShape.svg) [Maillage en une forme](/Arch_MeshToShape/fr "Arch MeshToShape/fr") : convertit un maillage en une forme, en unifiant les faces coplanaires.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Sélection de Sélection de maillages non-manifoldz non-manifold](/Arch_SelectNonSolidMeshes/fr "Arch SelectNonSolidMeshes/fr") : sélectionne tous les maillages non-manifold de la sélection courante ou du document.

- ![](/images/Arch_RemoveShape.svg) [Supprimer la forme](/Arch_RemoveShape/fr "Arch RemoveShape/fr") : rend l'objet Arch basé sur une forme cubique entièrement paramétrique.

- ![](/images/Arch_CloseHoles.svg) [Boucher des trous](/Arch_CloseHoles/fr "Arch CloseHoles/fr") : bouche des trous d'un objet sélectionné.

- ![](/images/Arch_MergeWalls.svg) [Fusionner des murs](/Arch_MergeWalls/fr "Arch MergeWalls/fr") : fusionne deux ou plusieurs murs.

- ![](/images/Arch_Check.svg) [Vérification](/Arch_Check/fr "Arch Check/fr") : vérifie si les objets sélectionnés sont des solides et ne contiennent pas de défauts.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Basculer en B-rep IFC](/Arch_ToggleIfcBrepFlag/fr "Arch ToggleIfcBrepFlag/fr") : force un objet sélectionné à être exporté en tant que [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_3Views.svg) [3 vues à partir d'un maillage](/Arch_3Views/fr "Arch 3Views/fr") : crée des vues de dessus, de face et de côté à partir d'un [maillage](/Mesh_Workbench/fr "Mesh Workbench/fr").

- ![](/images/Arch_IfcSpreadsheet.svg) [Tableur IFC](/Arch_IfcSpreadsheet/fr "Arch IfcSpreadsheet/fr") : crée une feuille de calcul pour stocker les propriétés [IFC](/Arch_IFC/fr "Arch IFC/fr") d'un objet.

- ![](/images/Arch_ToggleSubs.svg) [Bascule des sous composants](/Arch_ToggleSubs/fr "Arch ToggleSubs/fr") : affiche ou cache les sous-composants d'un objet Arch.

### Préférences

- ![](/images/Preferences-arch.svg) [Préférences](/Arch_Preferences/fr "Arch Preferences/fr") : préférences pour l'apparence par défaut des murs, structures, armatures, fenêtres, escaliers, panneaux, tuyaux, grilles et axes.

### Formats de fichiers

- [IFC](/Arch_IFC/fr "Arch IFC/fr") : Industry Foundation Classes
- [DAE](/Arch_DAE/fr "Arch DAE/fr") : format de maillage de Collada
- [OBJ](/Arch_OBJ/fr "Arch OBJ/fr") : format de maillage OBJ (seulement en exportation)
- [JSON](/Arch_JSON/fr "Arch JSON/fr") : JavaScript Object Notation format (seulement en exportation)
- [3DS](/Arch_3DS/fr "Arch 3DS/fr") : format 3DS (seulement en importation)
- [SHP](/Arch_SHP/fr "Arch SHP/fr") : shapefiles GIS (seulement en importation)

## API

L'atelier Arch peut être utilisé dans des scripts [Python](/Python/fr "Python/fr") et dans des [macros](/Macros/fr "Macros/fr") grâce aux fonctions [Arch Python API](/Arch_API/fr "Arch API/fr").

## Tutoriels

- [Migrer de Revit vers FreeCAD](/Migrating_to_FreeCAD_from_Revit/fr "Migrating to FreeCAD from Revit/fr")
- [Architecture workflow](http://yorik.uncreated.net/guestblog.php?tag=freecad) : un exemple de la manière dont FreeCAD peut commencer à avoir sa place préliminaire dans un flux de travail d’architecture.
- [Tutoriel Arch](/Arch_tutorial/fr "Arch tutorial/fr")(v0.14)
- [Tutoriel Arch sur le blog de Yorik](http://yorik.uncreated.net/guestblog.php?2012=180)(v0.13)
- [Présentation Vidéo de l'atelier Arch](https://www.youtube.com/watch?v=lTDOeHapv_E) (2016)
- [Tutoriel panneaux Arch](/Arch_panel_tutorial/fr "Arch panel tutorial/fr") (v0.15)
- [Chapitre sur la modélisation BIM dans le Guide de l'Utilisateur FreeCAD](/Manual:BIM_modeling/fr "Manual:BIM modeling/fr")
- [Importation de fichiers STL ou OBJ](/Import_from_STL_or_OBJ/fr "Import from STL or OBJ/fr")
- [Exportation de fichiers STL ou OBJ](/Export_to_STL_or_OBJ/fr "Export to STL or OBJ/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Workbench/fr&oldid=1567080>"
