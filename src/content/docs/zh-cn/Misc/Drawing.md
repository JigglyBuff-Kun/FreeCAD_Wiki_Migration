---
title: 图样
---
## 简介

在FreeCAD中，"[图样](/Drawing "Drawing")"通常指一个[3D 模型](/Model "Model")的二维投影。这个3D模型通常是用[TechDraw 工作台](/TechDraw_Workbench "TechDraw Workbench")创建的

## 用法

1. 从一个已经构建的[3D模型](/Model "Model")开始，例如，使用[PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench")创建的模型。 事实上，模型可以是任何具有[Shape](/Shape "Shape")的对象(包括2D对象)。
2. 切换到 [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").
3. 点击 ![](/images/TechDraw_PageDefault.svg) [TechDraw PageDefault](/TechDraw_PageDefault "TechDraw PageDefault") 或![](/images/TechDraw_PageTemplate.svg) [TechDraw PageTemplate](/TechDraw_PageTemplate "TechDraw PageTemplate") 创建一个页面.
4. 选择已有的模型,然后点击 ![](/images/TechDraw_View.svg) [TechDraw View](/TechDraw_View "TechDraw View") 或![](/images/TechDraw_ProjectionGroup.svg) [TechDraw ProjectionGroup](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup").
5. 在新创建的页面上会有一个2D投影被创建. 现在你可以调整他的属性, 比如数据**Scale**, 数据**Rotation**, 还有数据**Direction**.
6. 图样准备好之后, 你可以点按 ![](/images/TechDraw_ExportPageSVG.svg) [TechDraw ExportPageSVG](/TechDraw_ExportPageSVG "TechDraw ExportPageSVG"), ![](/images/TechDraw_ExportPageDXF.svg) [TechDraw ExportPageDXF](/TechDraw_ExportPageDXF "TechDraw ExportPageDXF"), 或使用 [Std Export](/Std_Export "Std Export"), 将页面导出到 SVG, DXF, or PDF 格式以备将来用在其他软件中, 或用于打印.

## 说明

In informal usage, a "Drawing" may be any geometrical figure that is visible in the [3D view](/3D_view "3D view"), and thus its concept may be confused with that of "[Body](/Body "Body")", "[Part](/Part "Part")", or "[model](/Model "Model")".

However, when more precision is required, the distinction must be made.

* A "[Body](/Body "Body")" ([PartDesign Body](/PartDesign_Body "PartDesign Body")) is an object derived from a [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class), created with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
* A "[Part](/Part "Part")" ([App Part](/App_Part "App Part")) is used to group several "[Bodies](/Body "Body")" to form an assembly.
* A "Drawing" is a 2D projection of a "Body" or a "Part".

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing/zh-cn&oldid=1252508>"