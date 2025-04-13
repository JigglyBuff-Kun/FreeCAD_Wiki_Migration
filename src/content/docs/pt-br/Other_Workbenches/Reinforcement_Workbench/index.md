---
title: Bancada de trabalho de reforço
---

![](/images/Reinforcement_Workbench.svg)

Reinforcement workbench icon

## Introdução

The [Reinforcement workbench](/Reinforcement_Workbench "Reinforcement Workbench") is an [external workbench](/External_workbenches "External workbenches") that provides tools for Reinforcement Generation and Detailing. This workbench provides an interface and presets for the creation of common rebar types. And tools to generate rebars bill of material, rebar shape cut list, bar bending schedule, and rebars drawing and dimension.

- ![Straight Rebar](/images/Arch_Rebar_Straight_example.png)

  [Straight Rebar](/Reinforcement_StraightRebar "Reinforcement StraightRebar")

- ![U-Shape Rebar](/images/Arch_Rebar_UShape_example.png)

  [U-Shape Rebar](/Reinforcement_UShapeRebar "Reinforcement UShapeRebar")

- ![L-Shape Rebar](/images/Arch_Rebar_LShape_example.png)

  [L-Shape Rebar](/Reinforcement_LShapeRebar "Reinforcement LShapeRebar")

- ![Stirrup](/images/Arch_Rebar_Stirrup_example.png)

  [Stirrup](/Reinforcement_StirrupRebar "Reinforcement StirrupRebar")

- ![Bent-Shape Rebar](/images/Arch_Rebar_BentShape_example.png)

  [Bent-Shape Rebar](/Reinforcement_BentShapeRebar "Reinforcement BentShapeRebar")

- ![Helical Rebar](/images/Arch_Rebar_Helical_example.png)

  [Helical Rebar](/Reinforcement_HelicalRebar "Reinforcement HelicalRebar")

- ![Single Tie Rectangular Column Reinforcement](/images/Arch_Rebar_ColumnReinforcement_example.png)

  [Single Tie Rectangular Column Reinforcement](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars")

- ![Two Ties Six Rebars Rectangular Column Reinforcement](/images/Arch_Rebar_ColumnReinforcement_TwoTies_example.png)

  [Two Ties Six Rebars Rectangular Column Reinforcement](/Reinforcement_ColumnRebars_TwoTiesSixRebars "Reinforcement ColumnRebars TwoTiesSixRebars")

- ![Circular Column Reinforcement](/images/Arch_Rebar_Circular_ColumnReinforcement_example.png)

  [Circular Column Reinforcement](/Reinforcement_ColumnRebars_Circular "Reinforcement ColumnRebars Circular")

- ![Beam Reinforcement](/images/Arch_Rebar_BeamReinforcement_example.png)

  [Beam Reinforcement](/Reinforcement_BeamRebars "Reinforcement BeamRebars")

- ![Slab Reinforcement](/images/Isometric_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

  [Slab Reinforcement](/Reinforcement_SlabRebars "Reinforcement SlabRebars")

- ![Footing Reinforcement](/images/Isometric_view_of_Columns_footing.png)

  [Footing Reinforcement](/Reinforcement_FootingRebars "Reinforcement FootingRebars")

- ![Rebar Bill Of Material](/images/Arch_Rebar_BOM_example.png)

  [Rebar Bill Of Material](/Reinforcement_BillOfMaterial "Reinforcement BillOfMaterial")

- ![Rebar Shape Cut List](/images/Reinforcement_Bar_Shape_Cut_List_example.svg)

  [Rebar Shape Cut List](/Reinforcement_BarShapeCutList "Reinforcement BarShapeCutList")

- ![Bar Bending Schedule](/images/Reinforcement_Bar_Bending_Schedule_example.svg)

  [Bar Bending Schedule](/Reinforcement_BarBendingSchedule "Reinforcement BarBendingSchedule")

- ![Reinforcement Drawing Dimensioning](/images/Arch_Rebar_Drawing_Dimensioning_example.svg)

  [Reinforcement Drawing Dimensioning](/Reinforcement_DrawingDimensioning "Reinforcement DrawingDimensioning")

## Instalação

The Reinforcement workbench is not bundled with the default FreeCAD package, but can easily be installed via the ![](/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr"). Install it from **Tools → Addon manager → Reinforcement**. The Reinforcement workbench code is [hosted and developed on github](https://github.com/amrit3701/FreeCAD-Reinforcement) and can also be installed manually by copying it into FreeCAD's MOD directory.

## Ferramentas

### Reinforcement Generation

- ![](/images/Arch_Rebar.svg) [Custom Rebar](/Arch_Rebar "Arch Rebar"): Creates a custom reinforcement bar in a selected structural element using a sketch.

- ![](/images/Reinforcement_StraightRebar.svg) [Straight Rebar](/Reinforcement_StraightRebar "Reinforcement StraightRebar"): Creates a straight reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_UShapeRebar.svg) [U-Shape Rebar](/Reinforcement_UShapeRebar "Reinforcement UShapeRebar"): Creates a U-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_LShapeRebar.svg) [L-Shape Rebar](/Reinforcement_LShapeRebar "Reinforcement LShapeRebar"): Creates an L-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_StirrupRebar.svg) [Stirrup](/Reinforcement_StirrupRebar "Reinforcement StirrupRebar"): Creates a stirrup reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_BentShapeRebar.svg) [Bent-Shape Rebar](/Reinforcement_BentShapeRebar "Reinforcement BentShapeRebar"): Creates a bent-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_HelicalRebar.svg) [Helical Rebar](/Reinforcement_HelicalRebar "Reinforcement HelicalRebar"): Creates a helical reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_ColumnRebars.svg) [Column Reinforcement](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars"): Creates reinforcement bars in a selected column.

- ![](/images/Reinforcement_BeamRebars.svg) [Beam Reinforcement](/Reinforcement_BeamRebars "Reinforcement BeamRebars"): Creates reinforcement bars in a selected beam.

- ![](/images/Reinforcement_SlabRebars.svg) [Slab Reinforcement](/Reinforcement_SlabRebars "Reinforcement SlabRebars"): Creates reinforcement bars in a selected slab.

- ![](/images/Reinforcement_FootingRebars.svg) [Footing Reinforcement](/Reinforcement_FootingRebars "Reinforcement FootingRebars"): Creates reinforcement bars in a selected footing.

### Reinforcement Detailing

- ![](/images/Arch_Rebar_BOM.svg) [Lista de ferros (BOM)](/Arch_Rebar_BOM/pt-br "Arch Rebar BOM/pt-br"): Cria lista de material de barras de reforço

- ![](/images/Reinforcement_Bar_Shape_Cut_List.svg) [Lista de materiais para reforço](/Reinforcement_Bar_Shape_Cut_List/pt-br "Reinforcement Bar Shape Cut List/pt-br"): Cria a lista de corte de vergalhões em forma de barras de reforço

- ![](/images/Reinforcement_Bar_Bending_Schedule.svg) [Cronograma de dobra da barra de reforço](/Reinforcement_Bar_Bending_Schedule/pt-br "Reinforcement Bar Bending Schedule/pt-br"): Cria um calendário de dobra de barras de reforço

- ![](/images/Arch_Rebar_Drawing_Dimensioning.svg) [Desenhar e dimensionar um reforço](/Arch_Rebar_Drawing_Dimensioning/pt-br "Arch Rebar Drawing Dimensioning/pt-br"): Cria desenho e dimensionamento de barras de reforço
  - ![](/images/Arch_Rebar_Drawing.svg) [Desenho de Reforço](/Arch_Rebar_Drawing_Dimensioning#Reinforcement_Drawing/pt-br "Arch Rebar Drawing Dimensioning"): Cria desenho de barras de reforço
  - ![](/images/Arch_Rebar_Dimensioning.svg) [Dimensionamento de Reforço](/Arch_Rebar_Drawing_Dimensioning#Reinforcement_Dimensioning/pt-br "Arch Rebar Drawing Dimensioning"): Cria o dimensionamento de barras de reforço em [Desenho de Reforço](/Arch_Rebar_Drawing_Dimensioning#Reinforcement_Drawing/pt-br "Arch Rebar Drawing Dimensioning")

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_Workbench/pt-br&oldid=1433696>"
