---
title: Верстак Армирования (Reinforcement Workbench)
---

![](/images/Reinforcement_Workbench.svg)

Иконка верстака Reinforcement

## Введение

Верстак для армирования представляет собой [внешний верстак](/External_workbenches/ru "External workbenches/ru"), который предоставляет инструменты для создания и детализации армирования. Этот верстак предоставляет интерфейс и предустановки для создания распространенных типов арматуры. И инструменты для создания спецификации арматуры, списка вырезов формы арматуры, графика гибки стержней, чертежа и размеров арматуры.

- ![Прямая арматура](/images/Arch_Rebar_Straight_example.png)

  [Прямая арматура](/Arch_Rebar_Straight/ru "Arch Rebar Straight/ru")

- ![Арматура U-формы](/images/Arch_Rebar_UShape_example.png)

  [Арматура U-формы](/Arch_Rebar_UShape/ru "Arch Rebar UShape/ru")

- ![Арматура L-формы](/images/Arch_Rebar_LShape_example.png)

  [Арматура L-формы](/Arch_Rebar_LShape/ru "Arch Rebar LShape/ru")

- ![Арматура гнутая](/images/Arch_Rebar_BentShape_example.png)

  [Арматура гнутая](/Arch_Rebar_BentShape/ru "Arch Rebar BentShape/ru")

- ![Арматура в форме скоб](/images/Arch_Rebar_Stirrup_example.png)

  [Арматура в форме скоб](/Arch_Rebar_Stirrup/ru "Arch Rebar Stirrup/ru")

- ![Спиральная арматура](/images/Arch_Rebar_Helical_example.png)

  [Спиральная арматура](/Arch_Rebar_Helical/ru "Arch Rebar Helical/ru")

- ![Армирование кольцевых колон](/images/Arch_Rebar_Circular_ColumnReinforcement_example.png)

  [Армирование кольцевых колон](/Arch_Rebar_Circular_ColumnReinforcement/ru "Arch Rebar Circular ColumnReinforcement/ru")

- ![Армирование одинарной стяжкой](/images/Arch_Rebar_ColumnReinforcement_example.png)

  [Армирование одинарной стяжкой](/Arch_Rebar_ColumnReinforcement/ru "Arch Rebar ColumnReinforcement/ru")

- ![Армирование колонны из шести стержней, двумя стяжками](/images/Arch_Rebar_ColumnReinforcement_TwoTies_example.png)

  [Армирование колонны из шести стержней, двумя стяжками](/Arch_Rebar_ColumnReinforcement_TwoTiesSixRebars/ru "Arch Rebar ColumnReinforcement TwoTiesSixRebars/ru")

- ![Усиление балки](/images/Arch_Rebar_BeamReinforcement_example.png)

  [Усиление балки](/Arch_Rebar_BeamReinforcement/ru "Arch Rebar BeamReinforcement/ru")

- ![Спецификация](/images/Arch_Rebar_BOM_example.png)

  [Спецификация](/Arch_Rebar_BOM "Arch Rebar BOM")

- ![Таблица формы сечений арматуры](/images/Reinforcement_Bar_Shape_Cut_List_example.svg)

  [Таблица формы сечений арматуры](/Reinforcement_Bar_Shape_Cut_List/ru "Reinforcement Bar Shape Cut List/ru")

- ![Таблица гибки арматурных стержней](/images/Reinforcement_Bar_Bending_Schedule_example.svg)

  [Таблица гибки арматурных стержней](/Reinforcement_Bar_Bending_Schedule/ru "Reinforcement Bar Bending Schedule/ru")

- ![Указание размеров чертежа арматуры](/images/Arch_Rebar_Drawing_Dimensioning_example.svg)

  [Указание размеров чертежа арматуры](/Arch_Rebar_Drawing_Dimensioning/ru "Arch Rebar Drawing Dimensioning/ru")

## Установка

The Reinforcement workbench is not bundled with the default FreeCAD package, but can easily be installed via the ![](/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr"). Install it from **Tools → Addon manager → Reinforcement**. The Reinforcement workbench code is [hosted and developed on github](https://github.com/amrit3701/FreeCAD-Reinforcement) and can also be installed manually by copying it into FreeCAD's MOD directory.

## Инструменты

### Армирование

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

### Детализация Армирования

- ![](/images/Reinforcement_BillOfMaterial.svg) [Rebar Bill Of Material](/Reinforcement_BillOfMaterial "Reinforcement BillOfMaterial"): Creates bill of material of reinforcing bars.

- ![](/images/Reinforcement_BarShapeCutList.svg) [Rebar Shape Cut List](/Reinforcement_BarShapeCutList "Reinforcement BarShapeCutList"): Creates rebar shape cut list of reinforcing bars.

- ![](/images/Reinforcement_BarBendingSchedule.svg) [Bar Bending Schedule](/Reinforcement_BarBendingSchedule "Reinforcement BarBendingSchedule"): Creates bar bending schedule of reinforcing bars.

- ![](/images/Reinforcement_DrawingDimensioning.svg) [Reinforcement Drawing Dimensioning](/Reinforcement_DrawingDimensioning "Reinforcement DrawingDimensioning"): Creates drawing and dimensioning of reinforcing bars.

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_Workbench/ru&oldid=1433701>"
