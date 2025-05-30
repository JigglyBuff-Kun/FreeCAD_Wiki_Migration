---
title: DibujoTécnico ExportaciónPáginaDXF
---
|  |
| --- |
| TechDraw ExportPageDXF |
| Menu location |
| TechDraw → Page → Export Page as DXF |
| Workbenches |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.18 |
| See also |
| [TechDraw Export Page as SVG](/TechDraw_ExportPageSVG "TechDraw ExportPageSVG"), [Draft DXF](/Draft_DXF "Draft DXF") |
|  |

## Descripción

The **TechDraw ExportPageDXF tool** saves a drawing page as a [DXF](/DXF "DXF") file.

## Utilización

1. If there are multiple drawing pages in the document: optionally activate the desired page by selecting it in the [Tree view](/Tree_view "Tree view").
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_ExportPageDXF.svg) [Export Page as DXF](/TechDraw_ExportPageDXF "TechDraw ExportPageDXF") button.
   * Select the **TechDraw → Page → ![](/images/TechDraw_ExportPageDXF.svg) Export Page as DXF** option from the menu.
   * If a page is displayed in the [Main view area](/Main_view_area "Main view area"): right-click the page's window and select the **Export DXF** option from the context menu.
3. If there are multiple drawing pages in the document and you have not yet activated a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.
4. The **Save DXF file** dialog box opens.
5. Select a location and file name.

## Limitaciones

* Radial and Diameter dimensions will only export properly if they are "inside" the arc.
* Scaling is not supported. The DXF will be drawn in the actual size of the TechDraw page.
* Units are not supported. The DXF will be drawn in millimeters (mm). Dimension text will be shown exactly as displayed in TechDraw.
* TechDraw can't export a [Insert Draft Workbench Object](/TechDraw_DraftView "TechDraw DraftView") or an [Insert Arch Workbench Object](/TechDraw_ArchView "TechDraw ArchView") to DXF. These views are [SVG](/SVG "SVG") elements generated internally by the [Draft Workbench](/Draft_Workbench "Draft Workbench"), so there is no geometrical shape to export. To export a view as DXF, it must have been created with [Insert View](/TechDraw_View "TechDraw View") or [Insert Projection Group](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup"). For example, select an [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"), then use [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") to create a flat projection shape, and then use [Insert View](/TechDraw_View "TechDraw View") on this object. Alternatively, select the objects from the tree view or the 3D viewport, and export to DXF using **File → [Export](/Std_Export "Std Export")**.
* The title block of a page is an [SVG](/SVG "SVG") template as well, so it will not be exported to DXF either.
* In general, TechDraw can only export to DXF those elements that are supported by the `Import::ImpExpDxfWrite` class of the [Import Module](/Draft_DXF "Draft DXF").

## Notas

* This function exports the R12 (AC1009) and R14 (AC1014) versions of [DXF](/DXF "DXF").
  + R12 is an older, simpler version of the standard, but should be readable by most other software.
  + R14 is the default version. It includes support for splines and ellipses among other things.
* These parameters affect the output:
  + **Tools → Edit parameters → BaseApp/Preferences/Mod/Import → DxfVersionOut**. This is an integer value. Valid entries are 12 or 14. The default is 14.
  + **Tools → Edit parameters → BaseApp/Preferences/Mod/Import → DiscretizeEllipses**. This is a boolean value. If `true`, splines and ellipses are converted to polylines; if `false`, splines and ellipses are written as splines and ellipses objects. The default is `false`. If the DxfVersionOut parameter is 12, splines and ellipses are always converted to polylines.
  + **Tools → Edit parameters → BaseApp/Preferences/Mod/Import → maxsegmentlength**. This is a float value. If splines and ellipses are converted to polylines this parameter determines the segment length.

## Guión

*Ver también:* [DibujoTécnico API](/index.php?title=TechDrawGui_API/es&action=edit&redlink=1 "TechDrawGui API/es (page does not exist)"), y [Fundamentos de scripting de FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

The SaveDXF tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
TechDraw.writeDXFPage(page,filename)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExportPageDXF/es&oldid=1485906>"