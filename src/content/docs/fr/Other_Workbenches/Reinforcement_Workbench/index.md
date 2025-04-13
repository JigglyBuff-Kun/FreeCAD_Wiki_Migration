---
title: Atelier Reinforcement
---

![](/images/Reinforcement_Workbench.svg)

Icône de l'atelier Reinforcement

## Introduction

L'atelier Reinforcement est un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui fournit des outils pour la génération et le détail des armatures. Cet atelier fournit une interface et des préréglages pour la création de types d'armatures courants ainsi que des outils pour générer la nomenclature des armatures, la liste de coupe des formes d'armatures, la nomenclature de pliage des barres et le dessin et la cote des armatures.

- ![Armature droite](/images/Arch_Rebar_Straight_example.png)

  [Armature droite](/Reinforcement_StraightRebar/fr "Reinforcement StraightRebar/fr")

- ![Armature en U](/images/Arch_Rebar_UShape_example.png)

  [Armature en U](/Reinforcement_UShapeRebar/fr "Reinforcement UShapeRebar/fr")

- ![Armature en L](/images/Arch_Rebar_LShape_example.png)

  [Armature en L](/Reinforcement_LShapeRebar/fr "Reinforcement LShapeRebar/fr")

- ![Armature en étrier](/images/Arch_Rebar_Stirrup_example.png)

  [Armature en étrier](/Reinforcement_StirrupRebar/fr "Reinforcement StirrupRebar/fr")

- ![Armature cintrée](/images/Arch_Rebar_BentShape_example.png)

  [Armature cintrée](/Reinforcement_BentShapeRebar/fr "Reinforcement BentShapeRebar/fr")

- ![Armature hélicoïdale](/images/Arch_Rebar_Helical_example.png)

  [Armature hélicoïdale](/Reinforcement_HelicalRebar/fr "Reinforcement HelicalRebar/fr")

- ![Armature en colonne](/images/Arch_Rebar_ColumnReinforcement_example.png)

  [Armature en colonne](/Reinforcement_ColumnRebars/fr "Reinforcement ColumnRebars/fr")

- ![Armature 2 cadres 6 barres](/images/Arch_Rebar_ColumnReinforcement_TwoTies_example.png)

  [Armature 2 cadres 6 barres](/Reinforcement_ColumnRebars_TwoTiesSixRebars/fr "Reinforcement ColumnRebars TwoTiesSixRebars/fr")

- ![Armature circulaire](/images/Arch_Rebar_Circular_ColumnReinforcement_example.png)

  [Armature circulaire](/Reinforcement_ColumnRebars_Circular/fr "Reinforcement ColumnRebars Circular/fr")

- ![Poutre](/images/Arch_Rebar_BeamReinforcement_example.png)

  [Poutre](/Reinforcement_BeamRebars/fr "Reinforcement BeamRebars/fr")

- ![Renforts de dalle](/images/Isometric_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

  [Renforts de dalle](/Reinforcement_SlabRebars/fr "Reinforcement SlabRebars/fr")

- ![Renforts de semelle](/images/Isometric_view_of_Columns_footing.png)

  [Renforts de semelle](/Reinforcement_FootingRebars/fr "Reinforcement FootingRebars/fr")

- ![Nomenclature armature](/images/Arch_Rebar_BOM_example.png)

  [Nomenclature armature](/Reinforcement_BillOfMaterial/fr "Reinforcement BillOfMaterial/fr")

- ![Nomenclature de façonnage des armatures](/images/Reinforcement_Bar_Shape_Cut_List_example.svg)

  [Nomenclature de façonnage des armatures](/Reinforcement_BarShapeCutList/fr "Reinforcement BarShapeCutList/fr")

- ![Plan de cintrage](/images/Reinforcement_Bar_Bending_Schedule_example.svg)

  [Plan de cintrage](/Reinforcement_BarBendingSchedule/fr "Reinforcement BarBendingSchedule/fr")

- ![Dimensions et dessins d'armatures](/images/Arch_Rebar_Drawing_Dimensioning_example.svg)

  [Dimensions et dessins d'armatures](/Reinforcement_DrawingDimensioning/fr "Reinforcement DrawingDimensioning/fr")

## Installation

L'atelier Reinforcement n'est pas fourni avec le package FreeCAD par défaut mais peut être facilement installé via le ![](/images/AddonManager.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Pour l'installer, **Outils → [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr")**. Le code de l'atelier Reinforcement est [hébergé et développé sur github](https://github.com/amrit3701/FreeCAD-Reinforcement) et peut également être installé manuellement en le copiant dans le répertoire MOD de FreeCAD.

## Outils

### Créer des armatures

- ![](/images/Arch_Rebar.svg) [Armature personnalisée](/Arch_Rebar/fr "Arch Rebar/fr") : crée une barre de ferraillage personnalisée dans un élément de structure sélectionné à l'aide d'une esquisse.

- ![](/images/Reinforcement_StraightRebar.svg) [Armature droite](/Reinforcement_StraightRebar/fr "Reinforcement StraightRebar/fr") : crée une barre de ferraillage droite dans un élément de structure sélectionné.

- ![](/images/Reinforcement_UShapeRebar.svg) [Armature en U](/Reinforcement_UShapeRebar/fr "Reinforcement UShapeRebar/fr") : crée une barre de ferraillage de forme U dans un élément de structure sélectionné.

- ![](/images/Reinforcement_LShapeRebar.svg) [Armature en L](/Reinforcement_LShapeRebar/fr "Reinforcement LShapeRebar/fr") : crée une barre de ferraillage de forme L dans un élément de structure sélectionné.

- ![](/images/Reinforcement_StirrupRebar.svg) [Armature en étrier](/Reinforcement_StirrupRebar/fr "Reinforcement StirrupRebar/fr") : crée une barre de renforcement d'étrier dans un élément de structure sélectionné.

- ![](/images/Reinforcement_BentShapeRebar.svg) [Armature cintrée](/Reinforcement_BentShapeRebar/fr "Reinforcement BentShapeRebar/fr") : crée une barre de renforcement de forme cintrée dans un élément de structure sélectionné.

- ![](/images/Reinforcement_HelicalRebar.svg) [Armature hélicoïdale](/Reinforcement_HelicalRebar/fr "Reinforcement HelicalRebar/fr") : crée une barre de ferraillage hélicoïdale dans un élément de structure sélectionné.

- ![](/images/Reinforcement_ColumnRebars.svg) [Armature en colonne](/Reinforcement_ColumnRebars/fr "Reinforcement ColumnRebars/fr") : crée des armatures dans une colonne sélectionnée.

- ![](/images/Reinforcement_BeamRebars.svg) [Poutre](/Reinforcement_BeamRebars/fr "Reinforcement BeamRebars/fr") : crée des armatures dans une poutre sélectionnée.

- ![](/images/Reinforcement_SlabRebars.svg) [Renfort de dalle](/Reinforcement_SlabRebars/fr "Reinforcement SlabRebars/fr") : crée des armatures dans une dalle sélectionnée.

- ![](/images/Reinforcement_FootingRebars.svg) [Renfort de semelle](/Reinforcement_FootingRebars/fr "Reinforcement FootingRebars/fr"): crée des armatures dans une semelle sélectionnée.

### Informations sur les armatures

- ![](/images/Reinforcement_BillOfMaterial.svg) [Nomenclature armature](/Reinforcement_BillOfMaterial/fr "Reinforcement BillOfMaterial/fr") : crée la nomenclature des armatures.

- ![](/images/Reinforcement_BarShapeCutList.svg) [Nomenclature de façonnage](/Reinforcement_BarShapeCutList/fr "Reinforcement BarShapeCutList/fr") : crée la nomenclature de façonnage des armatures.

- ![](/images/Reinforcement_BarBendingSchedule.svg) [Plan de cintrage](/Reinforcement_BarBendingSchedule/fr "Reinforcement BarBendingSchedule/fr") : crée un plan de cintrage des barres d'armature.

- ![](/images/Reinforcement_DrawingDimensioning.svg) [Dessins et dimensions](/Reinforcement_DrawingDimensioning/fr "Reinforcement DrawingDimensioning/fr") : crée les dessins et dimensions des armatures.

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_Workbench/fr&oldid=1433698>"
