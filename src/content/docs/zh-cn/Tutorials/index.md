---
title: 教程
---
本页展示了一系列精选的高质量图文教程。完整无序的教程集可以在[Category:Tutorials](/Category:Tutorials "Category:Tutorials")找到。

如果您希望为FreeCAD维基文档与教程的编写做出贡献，请参考维基的通用指南[WikiPages](/WikiPages "WikiPages")，并阅读[tutorial guidelines](/Tutorial_guidelines "Tutorial guidelines")。

请注意每个教程中所用的FreeCAD版本，因为有些教程采用的是老版FreeCAD。尽管常规的建模方式在新版FreeCAD中依然可行，但是某些工具却可能已经发生了变化。

See also [video tutorials](/Video_tutorials "Video tutorials") and [books](/Books "Books").

## 建筑物与BIM

* [![建筑工作台教程 (v0.14) 本文是一篇针对建筑工作台的基本介绍文章。文中通过DXF格式文件导入图纸，最后构建出对应的3D模型，整个流程大致展示了该工作台的一般工作流程。](/images/Arch_tutorial_00.jpg)](/Arch_tutorial  "建筑工作台教程 (v0.14) 本文是一篇针对建筑工作台的基本介绍文章。文中通过DXF格式文件导入图纸，最后构建出对应的3D模型，整个流程大致展示了该工作台的一般工作流程。")

  [建筑工作台教程](/Arch_tutorial "Arch tutorial") (v0.14)   
  本文是一篇针对建筑工作台的基本介绍文章。文中通过DXF格式文件导入图纸，最后构建出对应的3D模型，整个流程大致展示了该工作台的一般工作流程。
* [![BIM 建模 本文讨论了如何建立一个小屋的模型、利用TechDraw工作台生成一份蓝图（blueprint），并导出为IFC格式文件。](/images/Exercise_arch_01.jpg)](/Manual:BIM_modeling "BIM 建模 本文讨论了如何建立一个小屋的模型、利用TechDraw工作台生成一份蓝图（blueprint），并导出为IFC格式文件。 ")

  [BIM 建模](/Manual:BIM_modeling "Manual:BIM modeling")   
  本文讨论了如何建立一个小屋的模型、利用TechDraw工作台生成一份蓝图（blueprint），并导出为IFC格式文件。
* [![打开窗口与门 (v0.18) 本文展示了如何利用elevation与plan符号显示打开的窗口与门，并利用TechDraw工作台生成一个基本的平面图。](/images/11_T01_window_all_symbol_top.png)](/Tutorial_for_open_windows  "打开窗口与门 (v0.18) 本文展示了如何利用elevation与plan符号显示打开的窗口与门，并利用TechDraw工作台生成一个基本的平面图。")

  [打开窗口与门](/Tutorial_for_open_windows "Tutorial for open windows") (v0.18)   
  本文展示了如何利用elevation与plan符号显示打开的窗口与门，并利用TechDraw工作台生成一个基本的平面图。
* [![设计自定义窗口 (v0.18) 本文展示了如何利用草图工作台来绘制自定义门窗，并将其调整至墙体中合适的位置。](/images/17_T02_sketch_2_attached_correctly.png)](/Tutorial_custom_placing_of_windows_and_doors  "设计自定义窗口 (v0.18) 本文展示了如何利用草图工作台来绘制自定义门窗，并将其调整至墙体中合适的位置。")

  [设计自定义窗口](/Tutorial_custom_placing_of_windows_and_doors "Tutorial custom placing of windows and doors") (v0.18)   
  本文展示了如何利用草图工作台来绘制自定义门窗，并将其调整至墙体中合适的位置。
* [![建筑面板教程 (v0.15) 文中利用草图工作台创建一个微型建筑的屋面板（roof panel）。这里会运用窗口工具与面板工具。](/images/Arch_panel_tutorial_01.jpg)](/Arch_panel_tutorial  "建筑面板教程 (v0.15) 文中利用草图工作台创建一个微型建筑的屋面板（roof panel）。这里会运用窗口工具与面板工具。")

  [建筑面板教程](/Arch_panel_tutorial "Arch panel tutorial") (v0.15)   
  文中利用草图工作台创建一个微型建筑的屋面板（roof panel）。这里会运用窗口工具与面板工具。
* [![维基房屋（WikiHouse）建模 先导入由SketchUp创建的WikiHouse网格模型，再利用草图工作台与面板工具对其重新建模。](/images/Arch_Wikihouse_01.jpg)](/Wikihouse_porting_tutorial "维基房屋（WikiHouse）建模 先导入由SketchUp创建的WikiHouse网格模型，再利用草图工作台与面板工具对其重新建模。 ")

  [维基房屋（WikiHouse）建模](/Wikihouse_porting_tutorial "Wikihouse porting tutorial")   
  先导入由SketchUp创建的WikiHouse网格模型，再利用草图工作台与面板工具对其重新建模。
* [![NativeIFC Tutorial Learn to work with native IFC files, objects and concepts in the BIM workbench.](/images/Nativeifc-tutorial-01.jpg)](/NativeIFC_Tutorial "NativeIFC Tutorial Learn to work with native IFC files, objects and concepts in the BIM workbench. ")

  [NativeIFC Tutorial](/NativeIFC_Tutorial "NativeIFC Tutorial")   
  Learn to work with native IFC files, objects and concepts in the BIM workbench.

## 零件造型

FreeCAD提供了两种主要工作流程来实现零件造型（modeling part）：

* 利用[零件工作台（Part workbench）](/Part_Workbench "Part Workbench")中的[构造实体几何（constructive solid geometry，简作CSG）](https://en.wikipedia.org/wiki/Constructive_solid_geometry)方法来组合对象（combining objects），以及
* 利用[零件设计工作台](/PartDesign_Workbench "PartDesign Workbench")进行参数化建模，并编辑[feature](/Glossary#Feature "Glossary")。

请注意，[零件设计工作台](/PartDesign_Workbench "PartDesign Workbench")的工作流程自FreeCAD 0.17版起有了较大变化，而部分教程还未对此更新，可能仍然采用的是0.16版本。

* [![利用PartDesign工作台创建一个简单的零件 (v0.17) 本文为PartDesign工作台工作流程的简介，在这里我们要：绘制草图、使用填充（pad）与挖槽（pocket）工具、并移动对象。](/images/GGTuto1_Vue.PNG)](/Creating_a_simple_part_with_PartDesign  "利用PartDesign工作台创建一个简单的零件 (v0.17) 本文为PartDesign工作台工作流程的简介，在这里我们要：绘制草图、使用填充（pad）与挖槽（pocket）工具、并移动对象。")

  [利用PartDesign工作台创建一个简单的零件](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") (v0.17)  
  本文为PartDesign工作台工作流程的简介，在这里我们要：绘制草图、使用填充（pad）与挖槽（pocket）工具、并移动对象。
* [![Creating a simple part with Draft and Part Workbench An introduction to modeling solids with Draft Workbench by creating a 2d profile in draft.](/images/GGTuto1_Vue.PNG)](/Creating_a_simple_part_with_Draft_and_Part_WB "Creating a simple part with Draft and Part Workbench An introduction to modeling solids with Draft Workbench by creating a 2d profile in draft. ")

  [Creating a simple part with Draft and Part Workbench](/Creating_a_simple_part_with_Draft_and_Part_WB "Creating a simple part with Draft and Part WB")  
  An introduction to modeling solids with Draft Workbench by creating a 2d profile in draft.
* [![Creating a simple part with PartDesign (v0.17) An introduction to the PartDesign workflow: tracing a sketch, using pad, pocket, and moving the object.](/images/GGTuto1_Vue.PNG)](/Creating_a_simple_part_with_PartDesign  "Creating a simple part with PartDesign (v0.17) An introduction to the PartDesign workflow: tracing a sketch, using pad, pocket, and moving the object.")

  [Creating a simple part with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") (v0.17)  
  An introduction to the PartDesign workflow: tracing a sketch, using pad, pocket, and moving the object.
* [![零件设计基础教程 (v0.17) 本文利用功能编辑方式来建立一个简单的零件，主要流程为：创建草图，再利用填充、外部引用、挖槽与镜像等工具来生成零件实体。](/images/Pd_tut_final_solid.png)](/Basic_Part_Design_Tutorial  "零件设计基础教程 (v0.17) 本文利用功能编辑方式来建立一个简单的零件，主要流程为：创建草图，再利用填充、外部引用、挖槽与镜像等工具来生成零件实体。")

  [零件设计基础教程](/Basic_Part_Design_Tutorial "Basic Part Design Tutorial") (v0.17)  
  本文利用功能编辑方式来建立一个简单的零件，主要流程为：创建草图，再利用填充、外部引用、挖槽与镜像等工具来生成零件实体。
* [![Basic Part Design Tutorial 019 (v0.19 or above) An updated version of the previous tutorial that creates the same model using techniques that avoid the topological naming problem.](/images/Pd_tut_final_solid.png)](/Basic_Part_Design_Tutorial_019  "Basic Part Design Tutorial 019 (v0.19 or above) An updated version of the previous tutorial that creates the same model using techniques that avoid the topological naming problem.")

  [Basic Part Design Tutorial 019](/Basic_Part_Design_Tutorial_019 "Basic Part Design Tutorial 019") (v0.19 or above)  
  An updated version of the previous tutorial that creates the same model using techniques that avoid the [topological naming problem](/Topological_naming_problem "Topological naming problem").
* [![建立电动牙刷头架模型 (v0.16) 文中使用了多种功能：草图工具、距离约束与重合约束（coincident constraint）工具、填充工具、外部引用工具、倒圆角工具（fillet）, 倒角工具（chamfer）、线性复制（linear pattern）工具与拔模（draft）。](/images/TBHS-model.png)](/Toothbrush_Head_Stand  "建立电动牙刷头架模型 (v0.16) 文中使用了多种功能：草图工具、距离约束与重合约束（coincident constraint）工具、填充工具、外部引用工具、倒圆角工具（fillet）, 倒角工具（chamfer）、线性复制（linear pattern）工具与拔模（draft）。")

  [建立电动牙刷头架模型](/Toothbrush_Head_Stand "Toothbrush Head Stand") (v0.16)  
  文中使用了多种功能：草图工具、距离约束与重合约束（coincident constraint）工具、填充工具、外部引用工具、倒圆角工具（fillet）, 倒角工具（chamfer）、线性复制（linear pattern）工具与拔模（draft）。
* [![针对产品设计进行建模 (v0.16) 建立对乐高方块模型，要用到的工具有：草图、垂直距离与水平距离的约束、填充、挖槽、外部引用、线性复制与装配工作台。](/images/Exercise_lego_01.jpg)](/Manual:Modeling_for_product_design  "针对产品设计进行建模 (v0.16) 建立对乐高方块模型，要用到的工具有：草图、垂直距离与水平距离的约束、填充、挖槽、外部引用、线性复制与装配工作台。")

  [针对产品设计进行建模](/Manual:Modeling_for_product_design "Manual:Modeling for product design") (v0.16)  
  建立对乐高方块模型，要用到的工具有：草图、垂直距离与水平距离的约束、填充、挖槽、外部引用、线性复制与装配工作台。
* [![传统建模，CSG方式 利用像立方体与圆柱体这样简单的实体，并辅以布尔运算（模拟“焊接”与“切割”）来创建一个桌子。](/images/Exercise_table_complete.jpg)](/Manual:Traditional_modeling,_the_CSG_way/zh-cn "传统建模，CSG方式 利用像立方体与圆柱体这样简单的实体，并辅以布尔运算（模拟“焊接”与“切割”）来创建一个桌子。 ")

  [传统建模，CSG方式](/Manual:Traditional_modeling,_the_CSG_way/zh-cn "Manual:Traditional modeling, the CSG way/zh-cn")  
  利用像立方体与圆柱体这样简单的实体，并辅以布尔运算（模拟“焊接”与“切割”）来创建一个桌子。
* [![底图ShapeString工具教程 (v0.16) 在实体上创建雕刻文字：首先挤压底图shapestring对象使之成为实体，再利用布尔运算从另一实体中将其切割，也就是对此文本进行雕刻。](/images/08_T04_Part_ShapesString_Extrude_final_cut.png)](/Draft_ShapeString_tutorial  "底图ShapeString工具教程 (v0.16) 在实体上创建雕刻文字：首先挤压底图shapestring对象使之成为实体，再利用布尔运算从另一实体中将其切割，也就是对此文本进行雕刻。")

  [底图ShapeString工具教程](/Draft_ShapeString_tutorial "Draft ShapeString tutorial") (v0.16)  
  在实体上创建雕刻文字：首先挤压底图shapestring对象使之成为实体，再利用布尔运算从另一实体中将其切割，也就是对此文本进行雕刻。
* [![创建一个威浮球（wiffle ball） (v0.16) 对立方体与圆柱体等实体图元进行布尔运算（如并集与切割）来创建一个空心球。](/images/10_T03_Part_ball_fillet.png)](/Whiffle_Ball_tutorial  "创建一个威浮球（wiffle ball） (v0.16) 对立方体与圆柱体等实体图元进行布尔运算（如并集与切割）来创建一个空心球。")

  [创建一个威浮球（wiffle ball）](/Whiffle_Ball_tutorial "Whiffle Ball tutorial") (v0.16)  
  对立方体与圆柱体等实体图元进行布尔运算（如并集与切割）来创建一个空心球。
* [![建模基本教程 创建利用两种方式一个角铁：第一种是对实体图元执行布尔运算(CSG);第二种是通过根据平面轮廓图纸进行挤压来实现。](/images/Tutorial-normand06.jpg)](/Basic_modeling_tutorial  "建模基本教程 创建利用两种方式一个角铁：第一种是对实体图元执行布尔运算(CSG);第二种是通过根据平面轮廓图纸进行挤压来实现。")

  [建模基本教程](/Basic_modeling_tutorial "Basic modeling tutorial")   
  创建利用两种方式一个角铁：第一种是对实体图元执行布尔运算(CSG);第二种是通过根据平面轮廓图纸进行挤压来实现。
* [![Aeroplane tutorial Understand placements in FreeCAD by creating a simple aeroplane model. Then learn about rotation angles, yaw (Z), pitch (Y), and roll (X).](/images/HTCaeroplane04.png)](/Aeroplane  "Aeroplane tutorial Understand placements in FreeCAD by creating a simple aeroplane model. Then learn about rotation angles, yaw (Z), pitch (Y), and roll (X).")

  [Aeroplane tutorial](/Aeroplane "Aeroplane")   
  Understand placements in FreeCAD by creating a simple aeroplane model. Then learn about rotation angles, yaw (Z), pitch (Y), and roll (X).
* [![Thread for screw tutorial (v0.19) Understand how to create threads with several techniques that include use of the tools Part Helix, PartDesign AdditivePipe, Part Sweep, Part Fuse, and Part Cut.](/images/T13_14_Threads_components.png)](/Thread_for_Screw_Tutorial  "Thread for screw tutorial (v0.19) Understand how to create threads with several techniques that include use of the tools Part Helix, PartDesign AdditivePipe, Part Sweep, Part Fuse, and Part Cut.")

  [Thread for screw tutorial](/Thread_for_Screw_Tutorial "Thread for Screw Tutorial") (v0.19)  
  Understand how to create threads with several techniques that include use of the tools [Part Helix](/Part_Helix "Part Helix"), [PartDesign AdditivePipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe"), [Part Sweep](/Part_Sweep "Part Sweep"), [Part Fuse](/Part_Fuse "Part Fuse"), and [Part Cut](/Part_Cut "Part Cut").

The Raspberry Pi project has made simple tutorials that are easy to follow, particularly for those new to CAD systems:

* [freecad-dice](https://projects.raspberrypi.org/en/projects/freecad-dice), model a die with six faces, and optionally 3D print it.
* [freecad-headphone-tidy](https://projects.raspberrypi.org/en/projects/freecad-headphone-tidy), model a spool to organize and store earphones, and optionally 3D print it.
* [freecad-chess-set](https://projects.raspberrypi.org/en/projects/freecad-chess-set), model and entire chess set in Bauhaus modernist style.
* [raspberrypilearning](https://github.com/raspberrypilearning?utf8=%E2%9C%93&q=freecad&type=source&language=) repository (CC-BY 4.0) with other examples.

## 绘制底图与草图

* [![绘制传统的2D底图 利用线段、连线、立方体、圆弧绘制建筑平面图，并为之添加填充图案、注释与标注。并将结果导出为DXF文件。](/images/Exercise_cabin_01.jpg)](/Manual:Traditional_2D_drafting "绘制传统的2D底图 利用线段、连线、立方体、圆弧绘制建筑平面图，并为之添加填充图案、注释与标注。并将结果导出为DXF文件。 ")

  [绘制传统的2D底图](/Manual:Traditional_2D_drafting "Manual:Traditional 2D drafting")   
  利用线段、连线、立方体、圆弧绘制建筑平面图，并为之添加填充图案、注释与标注。并将结果导出为DXF文件。
* [![底图教程 (v0.19) 本文简单介绍了底图工作台中的常见工具：工作平面、网格、线段、弧线、升级（upgrade）、矩形、圆形、多边形、阵列、标注、注释与shapestring。](/images/00_Dr01_Draft_Tutorial_final.png)](/Draft_tutorial  "底图教程 (v0.19) 本文简单介绍了底图工作台中的常见工具：工作平面、网格、线段、弧线、升级（upgrade）、矩形、圆形、多边形、阵列、标注、注释与shapestring。")

  [底图教程](/Draft_tutorial "Draft tutorial") (v0.19)   
  本文简单介绍了底图工作台中的常见工具：工作平面、网格、线段、弧线、升级（upgrade）、矩形、圆形、多边形、阵列、标注、注释与shapestring。
* [![Sketcher Lecture (v0.19) This is a more than 80 page PDF document that serves as a detailed manual for the Sketcher Workbench. It explains the basics of Sketcher usage, and goes into a lot of detail about the creation of geometrical shapes, and each of the constraints.](/images/Sketcher_reference.png)](/Sketcher_Lecture  "Sketcher Lecture (v0.19) This is a more than 80 page PDF document that serves as a detailed manual for the Sketcher Workbench. It explains the basics of Sketcher usage, and goes into a lot of detail about the creation of geometrical shapes, and each of the constraints.")

  [Sketcher Lecture](/Sketcher_Lecture "Sketcher Lecture") (v0.19)   
   This is a more than 80 page PDF document that serves as a detailed manual for the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"). It explains the basics of Sketcher usage, and goes into a lot of detail about the creation of geometrical shapes, and each of the constraints.
* [![草图教程 (v0.19) 本文简单介绍了草图工作台中的常用工具：构建模式（construction mode）、线段、圆形、弧线、约束（等长约束、垂直约束、水平约束、相切约束、距离约束、角度约束、半径约束）。](/images/09b_Sk01_Sketcher_fully_constrained_clean.png)](/Basic_Sketcher_Tutorial  "草图教程 (v0.19) 本文简单介绍了草图工作台中的常用工具：构建模式（construction mode）、线段、圆形、弧线、约束（等长约束、垂直约束、水平约束、相切约束、距离约束、角度约束、半径约束）。")

  [草图教程](/Basic_Sketcher_Tutorial "Basic Sketcher Tutorial") (v0.19)   
  本文简单介绍了草图工作台中的常用工具：构建模式（construction mode）、线段、圆形、弧线、约束（等长约束、垂直约束、水平约束、相切约束、距离约束、角度约束、半径约束）。
* [![草图工作台中宏的使用教程 (v0.19) 学习高效地对草图进行约束。几何约束较之尺寸约束更受人们青睐。](/images/03d_Sk02_Sketcher_Rectangle_constrained_length.png)](/Sketcher_Micro_Tutorial_-_Constraint_Practices  "草图工作台中宏的使用教程 (v0.19) 学习高效地对草图进行约束。几何约束较之尺寸约束更受人们青睐。")

  [草图工作台中宏的使用教程](/Sketcher_Micro_Tutorial_-_Constraint_Practices "Sketcher Micro Tutorial - Constraint Practices") (v0.19)  
  学习高效地对草图进行约束。几何约束较之尺寸约束更受人们青睐。

## 技术制图

* [![TechDraw工作台基础教程 (v0.17) 本文内容为针对TechDraw工作台中常见工具的基本介绍，如：页（page）、视图（view）、缩放（scale）、垂直标注与水平标注（vertical and horizontal dimensions）、注释（ annotations）、正交投影组（projection groups）以及将标注与3D视图联系起来。](/images/TDTut_ProjGroup21.png)](/Basic_TechDraw_Tutorial  "TechDraw工作台基础教程 (v0.17) 本文内容为针对TechDraw工作台中常见工具的基本介绍，如：页（page）、视图（view）、缩放（scale）、垂直标注与水平标注（vertical and horizontal dimensions）、注释（ annotations）、正交投影组（projection groups）以及将标注与3D视图联系起来。")

  [TechDraw工作台基础教程](/Basic_TechDraw_Tutorial "Basic TechDraw Tutorial") (v0.17)   
  本文内容为针对TechDraw工作台中常见工具的基本介绍，如：页（page）、视图（view）、缩放（scale）、垂直标注与水平标注（vertical and horizontal dimensions）、注释（ annotations）、正交投影组（projection groups）以及将标注与3D视图联系起来。
* [![创建一个新的背景模板 (v0.17) 介绍如何在TechDraw工作台中使用以Inkscape创建的页模板。涉及的步骤有：确定表单的规格大小、为页面绘制布局框架、定义固有的文本并编辑文本域。](/images/FCTemplateHow.png)](/TechDraw_TemplateHowTo  "创建一个新的背景模板 (v0.17) 介绍如何在TechDraw工作台中使用以Inkscape创建的页模板。涉及的步骤有：确定表单的规格大小、为页面绘制布局框架、定义固有的文本并编辑文本域。")

  [创建一个新的背景模板](/TechDraw_TemplateHowTo "TechDraw TemplateHowTo") (v0.17)   
  介绍如何在TechDraw工作台中使用以Inkscape创建的页模板。涉及的步骤有：确定表单的规格大小、为页面绘制布局框架、定义固有的文本并编辑文本域。
* [![Measurement Of Angles On Holes (v0.19) Instructions for adding center lines and subsequent angle representations on holes.](/images/AnHi1.png)](/Measurement_Of_Angles_On_Holes  "Measurement Of Angles On Holes (v0.19) Instructions for adding center lines and subsequent angle representations on holes.")

  [Measurement Of Angles On Holes](/Measurement_Of_Angles_On_Holes "Measurement Of Angles On Holes") (v0.19)   
   Instructions for adding center lines and subsequent angle representations on holes.

## FEM

* [![FEM Geometry Preparation and Meshing (v0.21) This is a general reference for the most common issues related to geometry preparation and meshing for FEM. It contains several tips and explains the current capabilities of the FEM workbench in terms of geometry and mesh handling.](/images/FEM_locally_refined_mesh.PNG)](/FEM_Geometry_Preparation_and_Meshing  "FEM Geometry Preparation and Meshing (v0.21) This is a general reference for the most common issues related to geometry preparation and meshing for FEM. It contains several tips and explains the current capabilities of the FEM workbench in terms of geometry and mesh handling.")

  [FEM Geometry Preparation and Meshing](/FEM_Geometry_Preparation_and_Meshing "FEM Geometry Preparation and Meshing") (v0.21)   
  This is a general reference for the most common issues related to geometry preparation and meshing for FEM. It contains several tips and explains the current capabilities of the FEM workbench in terms of geometry and mesh handling.
* [![CalculiX cantilever FEM analysis (v0.20) This is an example included in every installation of FreeCAD; it demonstrates a basic analysis with the CalculiX FE solver. Purge the current result, re-run the solver, and view the displacements and stresses in the deformed mesh in the viewport.](/images/FEM_example01_pic00.jpg)](/FEM_CalculiX_Cantilever_3D  "CalculiX cantilever FEM analysis (v0.20) This is an example included in every installation of FreeCAD; it demonstrates a basic analysis with the CalculiX FE solver. Purge the current result, re-run the solver, and view the displacements and stresses in the deformed mesh in the viewport.")

  [CalculiX cantilever FEM analysis](/FEM_CalculiX_Cantilever_3D "FEM CalculiX Cantilever 3D") (v0.20)   
  This is an example included in every installation of FreeCAD; it demonstrates a basic analysis with the CalculiX FE solver. Purge the current result, re-run the solver, and view the displacements and stresses in the deformed mesh in the viewport.
* [![Simple FEM introduction (v0.20) This is a short introduction to the steps required to perform an analysis in the FEM Workbench: model your object, create a mesh, add constraints and forces, add a material, run the solver, and visualize the results.](/images/FEM_tutorial_result.png)](/FEM_tutorial  "Simple FEM introduction (v0.20) This is a short introduction to the steps required to perform an analysis in the FEM Workbench: model your object, create a mesh, add constraints and forces, add a material, run the solver, and visualize the results.")

  [Simple FEM introduction](/FEM_tutorial "FEM tutorial") (v0.20)   
  This is a short introduction to the steps required to perform an analysis in the FEM Workbench: model your object, create a mesh, add constraints and forces, add a material, run the solver, and visualize the results.
* [![FEM shear analysis of a composite block (v0.17) Study the deformation of a block made of a hard nucleus surrounded by a softer material: create mesh regions, add materials, set up sliding constraints, add shear loads, run the solver, and visualize the results with a clip plane.](/images/Figure_11_Deformed_Mesh.png)](/FEM_Shear_of_a_Composite_Block  "FEM shear analysis of a composite block (v0.17) Study the deformation of a block made of a hard nucleus surrounded by a softer material: create mesh regions, add materials, set up sliding constraints, add shear loads, run the solver, and visualize the results with a clip plane.")

  [FEM shear analysis of a composite block](/FEM_Shear_of_a_Composite_Block "FEM Shear of a Composite Block") (v0.17)   
  Study the deformation of a block made of a hard nucleus surrounded by a softer material: create mesh regions, add materials, set up sliding constraints, add shear loads, run the solver, and visualize the results with a clip plane.
* [![Analysis of reinforced concrete with FEM (v0.19) Estimate the level of reinforcement required in a concrete structure to prevent brittle failure under tension or shear.](/images/Femconcrete_Wall_3D_rx_PSS.png)](/Analysis_of_reinforced_concrete_with_FEM  "Analysis of reinforced concrete with FEM (v0.19) Estimate the level of reinforcement required in a concrete structure to prevent brittle failure under tension or shear.")

  [Analysis of reinforced concrete with FEM](/Analysis_of_reinforced_concrete_with_FEM "Analysis of reinforced concrete with FEM") (v0.19)   
  Estimate the level of reinforcement required in a concrete structure to prevent brittle failure under tension or shear.
* [![Electrostatic equation – Capacitance of two balls (v0.19) This example shows how to simulate a capacitance. It illustrates how to setup the example, study its various parts, solve it using the Elmer Solver and visualize the results using Clip Filter.](/images/Two_balls_result_2-cropped.png)](/FEM_Example_Capacitance_Two_Balls  "Electrostatic equation – Capacitance of two balls (v0.19) This example shows how to simulate a capacitance. It illustrates how to setup the example, study its various parts, solve it using the Elmer Solver and visualize the results using Clip Filter.")

  [Electrostatic equation – Capacitance of two balls](/FEM_Example_Capacitance_Two_Balls "FEM Example Capacitance Two Balls") (v0.19)  
  This example shows how to simulate a capacitance. It illustrates how to setup the example, study its various parts, solve it using the [Elmer Solver](/FEM_SolverElmer "FEM SolverElmer") and visualize the results using [Clip Filter](/FEM_PostFilterClipRegion "FEM PostFilterClipRegion").
* [![Post-Processing of FEM results with Paraview (v0.19) This tutorial explains the basics of transferring data from the FEM Workbench to Paraview and shows some of the options and settings for displaying data.](/images/FEM_post-processing_Paraview.png)](/Post-Processing_of_FEM_Results_with_Paraview  "Post-Processing of FEM results with Paraview (v0.19) This tutorial explains the basics of transferring data from the FEM Workbench to Paraview and shows some of the options and settings for displaying data.")

  [Post-Processing of FEM results with Paraview](/Post-Processing_of_FEM_Results_with_Paraview "Post-Processing of FEM Results with Paraview") (v0.19)  
  This tutorial explains the basics of transferring data from the FEM Workbench to Paraview and shows some of the options and settings for displaying data.

## CNC & 3D打印

* [![CAM Workbench for the impatient This is a quick presentation of the workflow for the CAM Workbench: create a job, define the output, define the milling tool, define the path operations, start the simulation, and generate a G-code output file.](/images/Path-WalkThroughResult.gif)](/CAM_Walkthrough_for_the_Impatient "CAM Workbench for the impatient This is a quick presentation of the workflow for the CAM Workbench: create a job, define the output, define the milling tool, define the path operations, start the simulation, and generate a G-code output file. ")

  [CAM Workbench for the impatient](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient")   
  This is a quick presentation of the workflow for the CAM Workbench: create a job, define the output, define the milling tool, define the path operations, start the simulation, and generate a G-code output file.
* [![Preparing models for 3D printing (v0.16) Convert a solid object to a mesh object using the Mesh Workbench, export the mesh to STL format, and use Slic3r to prepare the G-code. Alternatively use the Cura Workbench or the CAM Workbench to generate the G-code.](/images/Exercise_meshing_03.jpg)](/Manual:Preparing_models_for_3D_printing  "Preparing models for 3D printing (v0.16) Convert a solid object to a mesh object using the Mesh Workbench, export the mesh to STL format, and use Slic3r to prepare the G-code. Alternatively use the Cura Workbench or the CAM Workbench to generate the G-code.")

  [Preparing models for 3D printing](/index.php?title=Preparing_models_for_3D_printing&action=edit&redlink=1 "Preparing models for 3D printing (page does not exist)") (v0.16)  
  Convert a solid object to a mesh object using the Mesh Workbench, export the mesh to STL format, and use Slic3r to prepare the G-code. Alternatively use the Cura Workbench or the CAM Workbench to generate the G-code.

## 渲染

* [![创建渲染文件 如果系统中安装了POV-Ray与LuxRender，就利用它们为您的设计快速地渲染出一幅图像。](/images/Exercise_raytracing_05.jpg)](/Manual:Creating_renderings "创建渲染文件 如果系统中安装了POV-Ray与LuxRender，就利用它们为您的设计快速地渲染出一幅图像。 ")

  [创建渲染文件](/Manual:Creating_renderings "Manual:Creating renderings")   
  如果系统中安装了POV-Ray与LuxRender，就利用它们为您的设计快速地渲染出一幅图像。
* [![Raytracing tutorial (v0.16) 本文描述了在光线追踪工作台中使用POV-Ray或LuxRender的基本工作流程：设置渲染器的工作路径、创建工程、设置摄像机的位置、选择模型、运行渲染器。](/images/Raytracing_tutorial_result.png)](/Raytracing_tutorial  "Raytracing tutorial (v0.16) 本文描述了在光线追踪工作台中使用POV-Ray或LuxRender的基本工作流程：设置渲染器的工作路径、创建工程、设置摄像机的位置、选择模型、运行渲染器。")

  [Raytracing tutorial](/Raytracing_tutorial "Raytracing tutorial") (v0.16)   
  本文描述了在光线追踪工作台中使用POV-Ray或LuxRender的基本工作流程：设置渲染器的工作路径、创建工程、设置摄像机的位置、选择模型、运行渲染器。
* [![FreeCAD与POV-ray中级教程 (v0.18) 利用POV-Ray生成更佳渲染效果的工作流程：创建工程、添加对象、设置摄像机、保存.pov文件，手动编辑此文件来改良其纹理、表面、光照，最后运行渲染器。](/images/12_T04_FreeCAD_POVray_render_floor_wood_walls_radiosity_final.png)](/Tutorial_FreeCAD_POV_ray  "FreeCAD与POV-ray中级教程 (v0.18) 利用POV-Ray生成更佳渲染效果的工作流程：创建工程、添加对象、设置摄像机、保存.pov文件，手动编辑此文件来改良其纹理、表面、光照，最后运行渲染器。")

  [FreeCAD与POV-ray中级教程](/Tutorial_FreeCAD_POV_ray "Tutorial FreeCAD POV ray") (v0.18)   
  利用POV-Ray生成更佳渲染效果的工作流程：创建工程、添加对象、设置摄像机、保存.pov文件，手动编辑此文件来改良其纹理、表面、光照，最后运行渲染器。
* [![利用Blender渲染一个FreeCAD部件 (v0.18) 从FreeCAD中将部件导出为Wavefront的.obj格式，再将其导入Blender中，建立一个简单的太阳光源，利用Principled BSDF着色器为之赋予基本材质，最后通过EEVEE与Cycles来生成渲染图片。](/images/07_T03_FreeCAD_Blender_EEVEE_render.png)](/Tutorial_Render_with_Blender  "利用Blender渲染一个FreeCAD部件 (v0.18) 从FreeCAD中将部件导出为Wavefront的.obj格式，再将其导入Blender中，建立一个简单的太阳光源，利用Principled BSDF着色器为之赋予基本材质，最后通过EEVEE与Cycles来生成渲染图片。")

  [利用Blender渲染一个FreeCAD部件](/Tutorial_Render_with_Blender "Tutorial Render with Blender") (v0.18)   
  从FreeCAD中将部件导出为Wavefront的.obj格式，再将其导入Blender中，建立一个简单的太阳光源，利用Principled BSDF着色器为之赋予基本材质，最后通过EEVEE与Cycles来生成渲染图片。

## 机器人工作台

:::caution
Development of theRobot Workbenchis currently abandoned. Please inquire on our forum regarding any news or alternative workbenches.
:::

* [![机器人工作台教程 (v0.17) 模拟工业机器人的运动：建立一个机器人的运动轨迹（trajectory）、建立初始位置（home position）、改变机器人的位置、插入各种路点（waypoints），并模拟机器人的运动。](/images/Robot_Tutorial_RobotSimulation.gif)](/Robot_tutorial  "机器人工作台教程 (v0.17) 模拟工业机器人的运动：建立一个机器人的运动轨迹（trajectory）、建立初始位置（home position）、改变机器人的位置、插入各种路点（waypoints），并模拟机器人的运动。")

  [机器人工作台教程](/Robot_tutorial "Robot tutorial") (v0.17)   
  模拟工业机器人的运动：建立一个机器人的运动轨迹（trajectory）、建立初始位置（home position）、改变机器人的位置、插入各种路点（waypoints），并模拟机器人的运动。

## Scripting

These are tutorials that are related to scripting or programming. They are geared towards more experienced users, who are already somewhat familiar with the program.

* [Python scripting tutorial](/Python_scripting_tutorial "Python scripting tutorial")
* [How to install macros](/How_to_install_macros "How to install macros")
* [How to install additional workbenches](/How_to_install_additional_workbenches "How to install additional workbenches")

## Tutorials - Comprehensive list

Here are listed all the tutorials that are not in the manual **regardless of their quality**. If a tutorial is listed in the [Category:Tutorials](/Category:Tutorials "Category:Tutorials") and not in this table please insert it.

| Tutorial | Topic | Level | Time to complete hh:mm | Authors | FreeCAD version | Example files |
| --- | --- | --- | --- | --- | --- | --- |
| [Add Button to FEM Toolbar Tutorial](/Add_Button_to_FEM_Toolbar_Tutorial "Add Button to FEM Toolbar Tutorial") | Finite Element Analysis |  |  | [JohnWang](/index.php?title=User:JohnWang&action=edit&redlink=1 "User:JohnWang (page does not exist)") |  |  |
| [Add FEM Constraint Tutorial](/Add_FEM_Constraint_Tutorial "Add FEM Constraint Tutorial") | Finite Element Analysis |  |  | [M42kus](/index.php?title=User:M42kus&action=edit&redlink=1 "User:M42kus (page does not exist)") |  |  |
| [Add FEM Equation Tutorial](/Add_FEM_Equation_Tutorial "Add FEM Equation Tutorial") | Finite Element Analysis |  |  | [JohnWang](/index.php?title=User:JohnWang&action=edit&redlink=1 "User:JohnWang (page does not exist)") |  |  |
| [Advanced Attachment OYX](/Advanced_Attachment_OYX "Advanced Attachment OYX") | Attachment | Intermediate/Advanced |  | [drmacro](/index.php?title=User:Drmacro&action=edit&redlink=1 "User:Drmacro (page does not exist)") | 0.19 | None |
| [Advanced TechDraw Tutorial (unfinished)](/Advanced_TechDraw_Tutorial "Advanced TechDraw Tutorial") | TechDraw Workbench | Advanced |  | [domad](/index.php?title=User:Domad&action=edit&redlink=1 "User:Domad (page does not exist)") | 0.19 | None |
| [Aeroplane](/Aeroplane "Aeroplane") | Part Workbench | Beginner | 0:10 | Hughthecat |  |  |
| [Analysis of reinforced concrete with FEM](/Analysis_of_reinforced_concrete_with_FEM "Analysis of reinforced concrete with FEM") | Finite Element Analysis | Intermediate | 1:00 | [HarryvL](/index.php?title=User:HarryvL&action=edit&redlink=1 "User:HarryvL (page does not exist)") | 0.19 or above |  |
| [Arch panel tutorial](/Arch_panel_tutorial "Arch panel tutorial") | BIM Workbench | Beginner | 1:00 | [Yorik](/User:Yorik "User:Yorik") |  |  |
| [Arch tutorial](/Arch_tutorial "Arch tutorial") | BIM Workbench | Intermediate |  | [Yorik](/User:Yorik "User:Yorik") | 0.14 |  |
| [Basic Attachment Tutorial](/Basic_Attachment_Tutorial "Basic Attachment Tutorial") | Attachment | Beginner/Intermediate | 1:00 | [Bance](/index.php?title=User:Bance&action=edit&redlink=1 "User:Bance (page does not exist)") | 0.17 or above | [Basic Attachment Tutorial.FCStd](https://github.com/BanceFC/Examples/blob/master/Basic_Attachment_Tutorial.FCStd) |
| [Basic modeling tutorial](/Basic_modeling_tutorial "Basic modeling tutorial") | Modelling | Beginner | 0:15 | [NormandC](/index.php?title=User:NormandC&action=edit&redlink=1 "User:NormandC (page does not exist)") | Any | None |
| [Basic Part Design Tutorial](/Basic_Part_Design_Tutorial "Basic Part Design Tutorial") | Modeling | Beginner |  | [Mark Stephen (Quick61)](/User:Quick61 "User:Quick61") and [HarryGeier](/index.php?title=User:HarryGeier&action=edit&redlink=1 "User:HarryGeier (page does not exist)") | 0.17 or above | [Basic Part Design for v0.17](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd) |
| [Basic Part Design Tutorial 019](/Basic_Part_Design_Tutorial_019 "Basic Part Design Tutorial 019") | Modeling | Beginner | 1:00 | [Carlo Dormeletti](/User:Onekk "User:Onekk") and [Ed Williams](/index.php?title=User:Edwilliams16&action=edit&redlink=1 "User:Edwilliams16 (page does not exist)") | 0.19 or above |  |
| [Basic Sketcher Tutorial](/Basic_Sketcher_Tutorial "Basic Sketcher Tutorial") | Sketcher Workbench | Beginner | 1:00 | [Drei](/User:Drei "User:Drei") and [Vocx](/index.php?title=User:Vocx&action=edit&redlink=1 "User:Vocx (page does not exist)") | 0.19 | [Basic Sketcher tutorial](https://forum.freecadweb.org/viewtopic.php?f=36&t=43594) |
| [Basic TechDraw Tutorial](/Basic_TechDraw_Tutorial "Basic TechDraw Tutorial") | TechDraw Workbench | Beginner |  | [WandererFan](/index.php?title=User:WandererFan&action=edit&redlink=1 "User:WandererFan (page does not exist)") | 0.17 or above | [Basic Part Design for v0.17 Sample](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd) [Basic TechDraw Tutorial Sample](https://github.com/FreeCAD/Examples/blob/master/Basic_TechDraw_Tutorial_Example_Files/Basic_TechDraw_Tutorial.fcstd) |
| [BIM ingame tutorial](/BIM_ingame_tutorial "BIM ingame tutorial") | BIM Workbench | Beginner |  | [Yorik](/User:Yorik "User:Yorik") |  |  |
| [CAM Walkthrough for the Impatient](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient") | CAM Workbench |  |  | Chrisb |  |  |
| [Code snippets](/Code_snippets "Code snippets") | Python | Beginner |  |  |  |  |
| [Configuration Tables](/Configuration_Tables "Configuration Tables") | Product design | Beginner | 0:30 | Gbroques | 0.20 or above | [ConfigurationTableExample.FCStd](https://forum.freecad.org/download/file.php?id=270593) |
| [Creating a simple part with Draft and Part WB](/Creating_a_simple_part_with_Draft_and_Part_WB "Creating a simple part with Draft and Part WB") | Modeling | Beginner | 1:30 | Heda | - | - |
| [Creating a simple part with Part WB](/Creating_a_simple_part_with_Part_WB "Creating a simple part with Part WB") | Modeling | Beginner | 2:00 | Heda | - | - |
| [Creating a simple part with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") | Modeling | Beginner | 1:00 | GlouGlou | 0.17 or above | [Creating a simple PartDesign Body.FCStd](https://github.com/FreeCAD/Examples/blob/master/Creating_a_simple_PartDesign_Body.FCStd) |
| [Customize Toolbars](/Customize_Toolbars "Customize Toolbars") | Customization | Beginner | 0:05 | [Mario52](/User:Mario52 "User:Mario52") | Any | None |
| [Draft ShapeString tutorial](/Draft_ShapeString_tutorial "Draft ShapeString tutorial") | Product Design | Beginner | 0:30 | r-frank and vocx | 0.17 or above | [Draft\_Shapestring\_Text](https://github.com/FreeCAD/Examples/blob/master/Draft_Shapestring_Tutorial_Examples/Draft_Shapestring_Tutorial_Text.FCStd?raw=true) |
| [Draft tutorial](/Draft_tutorial "Draft tutorial") | Draft Workbench | Beginner | 0:30 | [Drei](/User:Drei "User:Drei") and vocx | 0.19 | [Draft tutorial updated](https://forum.freecadweb.org/viewtopic.php?f=36&t=43651) |
| [Engine Block Tutorial](/Engine_Block_Tutorial "Engine Block Tutorial") | Part Workbench | Beginner | 1:00 | Andrewbuck40 | 0.14.3700 |  |
| [Example Combined Footing](/Example_Combined_Footing "Example Combined Footing") | Reinforcement Workbench | Intermediate |  | [Shiv Charan](/User:Shiv_Charan "User:Shiv Charan") | 0.20 | None |
| [Example Slab Having LShape Rebars Reinforcement Mesh](/Example_Slab_Having_LShape_Rebars_Reinforcement_Mesh "Example Slab Having LShape Rebars Reinforcement Mesh") | Reinforcement Workbench | Intermediate |  | [Shiv Charan](/User:Shiv_Charan "User:Shiv Charan") | 0.20 | None |
| [Example Slab Having Mesh Of Straight Rebars](/Example_Slab_Having_Mesh_Of_Straight_Rebars "Example Slab Having Mesh Of Straight Rebars") | Reinforcement Workbench | Intermediate |  | [Shiv Charan](/User:Shiv_Charan "User:Shiv Charan") | 0.20 | None |
| [Example Slab Having UShape Rebars Reinforcement Mesh](/Example_Slab_Having_UShape_Rebars_Reinforcement_Mesh "Example Slab Having UShape Rebars Reinforcement Mesh") | Reinforcement Workbench | Intermediate |  | [Shiv Charan](/User:Shiv_Charan "User:Shiv Charan") | 0.20 | None |
| [Example Slab Spanning in One Direction](/Example_Slab_Spanning_in_One_Direction "Example Slab Spanning in One Direction") | Reinforcement Workbench | Intermediate |  | [Shiv Charan](/User:Shiv_Charan "User:Shiv Charan") | 0.20 | None |
| [Example Slab Spanning in Two Directions](/Example_Slab_Spanning_in_Two_Directions "Example Slab Spanning in Two Directions") | Reinforcement Workbench | Intermediate |  | [Shiv Charan](/User:Shiv_Charan "User:Shiv Charan") | 0.20 | None |
| [Export to STL or OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ") | Export | Beginner | 0:20 | r-frank | 0.16.6703 |  |
| [Extend FEM Module](/Extend_FEM_Module "Extend FEM Module") | Finite Element Analysis |  |  | [M42kus](/index.php?title=User:M42kus&action=edit&redlink=1 "User:M42kus (page does not exist)") |  |  |
| [FEM CalculiX Cantilever 3D](/FEM_CalculiX_Cantilever_3D "FEM CalculiX Cantilever 3D") | Finite Element Analysis | Beginner | 0:10 | [Bernd](/index.php?title=User:Bernd&action=edit&redlink=1 "User:Bernd (page does not exist)") | 0.16.6377 or above |  |
| [FEM Example Capacitance Two Balls](/FEM_Example_Capacitance_Two_Balls "FEM Example Capacitance Two Balls") | Finite Element Analysis | Beginner |  | [Sudhanshu Dubey](/User:Sudhanshu_Dubey "User:Sudhanshu Dubey") | 0.19 | None |
| [FEM Geometry Preparation and Meshing](/FEM_Geometry_Preparation_and_Meshing "FEM Geometry Preparation and Meshing") | Finite Element Analysis | Beginner |  | [NewJoker](/index.php?title=User:NewJoker&action=edit&redlink=1 "User:NewJoker (page does not exist)") | 0.21 | None |
| [FEM Shear of a Composite Block](/FEM_Shear_of_a_Composite_Block "FEM Shear of a Composite Block") | Finite Element Analysis | Beginner/Intermediate | 0:30 | [HarryvL](/index.php?title=User:HarryvL&action=edit&redlink=1 "User:HarryvL (page does not exist)") | 0.17.12960 or above |  |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") | Finite Element Analysis | Beginner | 0:10 | [Drei](/User:Drei "User:Drei") | 0.17 or above |  |
| [FEM Tutorial Python](/FEM_Tutorial_Python "FEM Tutorial Python") | Finite Element Analysis | Intermediate | 0:30 | [Bernd](/index.php?title=User:Bernd&action=edit&redlink=1 "User:Bernd (page does not exist)") | 0.18.15985 or above |  |
| [FreeCAD-Ship s60 tutorial](/FreeCAD-Ship_s60_tutorial "FreeCAD-Ship s60 tutorial") | Ship Workbench | Beginner |  |  |  |  |
| [FreeCAD-Ship s60 tutorial (II)](/FreeCAD-Ship_s60_tutorial_(II) "FreeCAD-Ship s60 tutorial (II)") | Ship Workbench | Beginner |  |  |  |  |
| [How to install additional workbenches](/How_to_install_additional_workbenches "How to install additional workbenches") | Programming | Medium programmer | 0:15 | [r-frank](/index.php?title=User:R-frank&action=edit&redlink=1 "User:R-frank (page does not exist)") | Any | None |
| [How to install macros](/How_to_install_macros "How to install macros") | Programming | Medium programmer | 0:15 | [Mario52](/User:Mario52 "User:Mario52") | Any | None |
| [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ") | Import | Beginner | 0:30 | r-frank | 0.16.6703 |  |
| [Import OpenSCAD code](/Import_OpenSCAD_code "Import OpenSCAD code") | Import | Beginner | 0:30 | r-frank | 0.16.6704 | None |
| [Import text and geometry from Inkscape](/Import_text_and_geometry_from_Inkscape "Import text and geometry from Inkscape") | Import | Beginner | 0:30 | r-frank | 0.16.6704 |  |
| [Import/Export IFC - compiling IfcOpenShell](/Import/Export_IFC_-_compiling_IfcOpenShell "Import/Export IFC - compiling IfcOpenShell") | BIM Workbench | Advanced | 2:00 | Pablo Gil |  |  |
| [Measurement Of Angles On Holes](/Measurement_Of_Angles_On_Holes "Measurement Of Angles On Holes") | TechDraw Workbench | Beginner | 0:01 | AnHi | 0.19 |  |
| [NativeIFC Tutorial](/NativeIFC_Tutorial "NativeIFC Tutorial") | BIM Workbench | Intermediate/Advanced | 1:00 | [Yorik](/User:Yorik "User:Yorik") | 1.0 |  |
| [PartDesign Bearingholder Tutorial I](/PartDesign_Bearingholder_Tutorial_I "PartDesign Bearingholder Tutorial I") | Product design | Beginner | 1:00 | NormandC |  |  |
| [PartDesign Bearingholder Tutorial II](/PartDesign_Bearingholder_Tutorial_II "PartDesign Bearingholder Tutorial II") | Product design | Beginner | 1:00 | NormandC |  |  |
| [PartDesign tutorial](/PartDesign_tutorial "PartDesign tutorial") | Sketcher Workbench | Beginner | 0:15 | [Drei](/User:Drei "User:Drei") | 0.16 or above |  |
| [Plot Basic tutorial](/Plot_Basic_tutorial "Plot Basic tutorial") | Plot Workbench | Beginner |  |  |  |  |
| [Plot MultiAxes tutorial](/Plot_MultiAxes_tutorial "Plot MultiAxes tutorial") | Plot workbench | Intermediate |  |  |  |  |
| [Post-Processing of FEM Results with Paraview](/Post-Processing_of_FEM_Results_with_Paraview "Post-Processing of FEM Results with Paraview") | Finite Element Analysis | Intermediate | 2:00 | [HarryvL](/index.php?title=User:HarryvL&action=edit&redlink=1 "User:HarryvL (page does not exist)") | 0.19 | [Beam](https://forum.freecadweb.org/download/file.php?id=103403) and [wall](https://forum.freecadweb.org/download/file.php?id=103557) |
| [Private Preference Packs](/Private_Preference_Packs "Private Preference Packs") | Customization | Intermediate/Advanced |  | [drmacro](/index.php?title=User:Drmacro&action=edit&redlink=1 "User:Drmacro (page does not exist)") | 1.0 or above |  |
| [Python scripting tutorial](/Python_scripting_tutorial "Python scripting tutorial") | Programming | Intermediate |  |  |  |  |
| [Raytracing tutorial](/Raytracing_tutorial "Raytracing tutorial") | Raytracing Workbench | Beginner | 0:10 | [Drei](/User:Drei "User:Drei") | 0.16 or above |  |
| [Robot 6-Axis](/Robot_6-Axis "Robot 6-Axis") | Robot Workbench | Intermediate |  |  |  |  |
| [Robot tutorial](/Robot_tutorial "Robot tutorial") | Robot Workbench | Beginner |  | r-frank |  |  |
| [Scripted Parts: Ball Bearing - Part 1](/Scripted_Parts:_Ball_Bearing_-_Part_1 "Scripted Parts: Ball Bearing - Part 1") | Python | Beginner | 0:30 | r-frank | 0.16.6706 |  |
| [Scripted Parts: Ball Bearing - Part 2](/Scripted_Parts:_Ball_Bearing_-_Part_2 "Scripted Parts: Ball Bearing - Part 2") | Python | Beginner | 0:30 | r-frank | 0.16.6706 |  |
| [Scripts](/Scripts "Scripts") | Python | Beginner |  | onekk Carlo | 0.19 |  |
| [Sketcher Lecture](/Sketcher_Lecture "Sketcher Lecture") | Sketcher Workbench |  |  |  |  |  |
| [Sketcher Micro Tutorial - Constraint Practices](/Sketcher_Micro_Tutorial_-_Constraint_Practices "Sketcher Micro Tutorial - Constraint Practices") | Sketcher Workbench | Beginner | 0:30 | [Mark Stephen (Quick61)](/User:Quick61 "User:Quick61") and vocx | 0.19 | [Sketcher Constraints practices](https://forum.freecadweb.org/viewtopic.php?f=36&p=371659#p371659) |
| [Sketcher requirement for a sketch](/Sketcher_requirement_for_a_sketch "Sketcher requirement for a sketch") | Sketcher Workbench | Beginner |  | [Maker](/User:Maker "User:Maker") |  | None |
| [Sketcher Tutorial](/Sketcher_Tutorial "Sketcher Tutorial") | Sketcher Workbench | Beginner |  | Ulrich |  |  |
| [TechDraw HowTo Page](/TechDraw_HowTo_Page "TechDraw HowTo Page") | TechDraw Workbench |  |  |  | 0.19 | None |
| [TechDraw Pitch Circle Tutorial](/TechDraw_Pitch_Circle_Tutorial "TechDraw Pitch Circle Tutorial") | TechDraw Workbench | Beginner | 0:10 | Andergrin | 0.19 | None |
| [TechDraw TemplateGenerator](/TechDraw_TemplateGenerator "TechDraw TemplateGenerator") | TechDraw Workbench | Intermediate |  | [FBXL5](/User:FBXL5 "User:FBXL5") | 0.19 | None |
| [TechDraw TemplateHowTo](/TechDraw_TemplateHowTo "TechDraw TemplateHowTo") | TechDraw Workbench | Intermediate | 1:00 | wandererfan | 0.17 | None |
| [Thread for Screw Tutorial](/Thread_for_Screw_Tutorial "Thread for Screw Tutorial") | Product design | Advanced | 1:00 | [DeepSOIC](/User:DeepSOIC "User:DeepSOIC"), [Murdic](/index.php?title=User:Murdic&action=edit&redlink=1 "User:Murdic (page does not exist)"), vocx | 0.19 | [Updated: Thread for screw tutorial](https://forum.freecadweb.org/viewtopic.php?f=36&t=44668) |
| [Toothbrush Head Stand](/Toothbrush_Head_Stand "Toothbrush Head Stand") | Modeling | Beginner | 1:00 | [EmmanuelG](/User:EmmanuelG "User:EmmanuelG") | 0.16 or above | [Thingiverse 2403310](https://www.thingiverse.com/thing:2403310) |
| [Topological data scripting](/Topological_data_scripting "Topological data scripting") | Programming | Intermediate |  |  |  |  |
| [Transient FEM analysis](/Transient_FEM_analysis "Transient FEM analysis") | Finite Element Analysis |  |  |  |  |  |
| [Tutorial custom placing of windows and doors](/Tutorial_custom_placing_of_windows_and_doors "Tutorial custom placing of windows and doors") | BIM Workbench | Intermediate | 1:00 | [Vocx](/index.php?title=User:Vocx&action=edit&redlink=1 "User:Vocx (page does not exist)") | 0.18 or above | None |
| [Tutorial for open windows](/Tutorial_for_open_windows "Tutorial for open windows") | BIM Workbench | Beginner | 1:00 | [Vocx](/index.php?title=User:Vocx&action=edit&redlink=1 "User:Vocx (page does not exist)") | 0.18 or above | None |
| [Tutorial FreeCAD POV ray](/Tutorial_FreeCAD_POV_ray "Tutorial FreeCAD POV ray") | Raytracing Workbench | Intermediate | 2:00 | [Vocx](/index.php?title=User:Vocx&action=edit&redlink=1 "User:Vocx (page does not exist)") | 0.18 or above | None |
| [Tutorial KinematicAssembly](/Tutorial_KinematicAssembly "Tutorial KinematicAssembly") | Assembly3 Workbench | Beginner | 0:30 | [FBXL5](/User:FBXL5 "User:FBXL5") | 0.20 or above | None |
| [Tutorial KinematicController](/Tutorial_KinematicController "Tutorial KinematicController") | Programming | Intermediate | 1:00 | [FBXL5](/User:FBXL5 "User:FBXL5") | 0.20 or above | None |
| [Tutorial KinematicSkeleton](/Tutorial_KinematicSkeleton "Tutorial KinematicSkeleton") | Assembly3 Workbench | Intermediate | 0:40 | [FBXL5](/User:FBXL5 "User:FBXL5") | 0.20 | None |
| [Tutorial Render with Blender](/Tutorial_Render_with_Blender "Tutorial Render with Blender") | Rendering | Intermediate | 1:00 | [Vocx](/index.php?title=User:Vocx&action=edit&redlink=1 "User:Vocx (page does not exist)") | 0.18 or above | None |
| [VRML Preparation for Robot Simulation](/VRML_Preparation_for_Robot_Simulation "VRML Preparation for Robot Simulation") | Robot Workbench | Intermediate |  |  | 0.11.4252ppa1 |  |
| [Whiffle Ball tutorial](/Whiffle_Ball_tutorial "Whiffle Ball tutorial") | Product design | Beginner | 0:30 | r-frank and vocx | 0.17 or above | [WhiffleBall\_Tutorial\_FCWiki.FCStd](https://github.com/FreeCAD/Examples/blob/master/Whiffle_Ball_Tutorial_ExampleFiles/WhiffleBall_Tutorial_FCWiki.FCStd?raw=true) |
| [Wikihouse porting tutorial](/Wikihouse_porting_tutorial "Wikihouse porting tutorial") | Import | Intermediate/Advanced | 1:00 |  |  |  |

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorials/zh-cn&oldid=1538582>"