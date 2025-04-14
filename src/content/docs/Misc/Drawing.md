---
title: Drawing
---

## Introduction

In FreeCAD the word "[Drawing](/Drawing "Drawing")" is normally used to refer to a 2D projection of a [3D model](/Model "Model"). This is usually created with the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

## Usage

1. Start with an already built [3D model](/Model "Model"), created with, for example, the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). In fact, any object that has a [Shape](/Shape "Shape"), including 2D objects, will work.
2. Switch to the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").
3. Press ![](/images/TechDraw_PageDefault.svg) [TechDraw PageDefault](/TechDraw_PageDefault "TechDraw PageDefault") or ![](/images/TechDraw_PageTemplate.svg) [TechDraw PageTemplate](/TechDraw_PageTemplate "TechDraw PageTemplate") to create a Page.
4. Select the existing model, and then press ![](/images/TechDraw_View.svg) [TechDraw View](/TechDraw_View "TechDraw View") or ![](/images/TechDraw_ProjectionGroup.svg) [TechDraw ProjectionGroup](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup").
5. A 2D projection on the page will be created. You may now adjust its properties, like Data**Scale**, Data**Rotation**, and Data**Direction**.
6. When the drawing is ready, you can press ![](/images/TechDraw_ExportPageSVG.svg) [TechDraw ExportPageSVG](/TechDraw_ExportPageSVG "TechDraw ExportPageSVG"), ![](/images/TechDraw_ExportPageDXF.svg) [TechDraw ExportPageDXF](/TechDraw_ExportPageDXF "TechDraw ExportPageDXF"), or use [Std Export](/Std_Export "Std Export"), to export the page to SVG, DXF, or PDF formats for further use in another software, or for printing.

## Notes

In informal usage, a "Drawing" may be any geometrical figure that is visible in the [3D view](/3D_view "3D view"), and thus its concept may be confused with that of "[Body](/Body "Body")", "[Part](/Part "Part")", or "[model](/Model "Model")".

However, when more precision is required, the distinction must be made.

- A "[Body](/Body "Body")" ([PartDesign Body](/PartDesign_Body "PartDesign Body")) is an object derived from a [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class), created with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
- A "[Part](/Part "Part")" ([App Part](/App_Part "App Part")) is used to group several "[Bodies](/Body "Body")" to form an assembly.
- A "Drawing" is a 2D projection of a "Body" or a "Part".

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing/en&oldid=1252509>"
