---
title: TechDraw "Экспорт листа в SVG"
---
|  |
| --- |
| Экспорт листа в SVG |
| Расположение в меню |
| TechDraw → Экспорт листа в SVG |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Шаблоны](/TechDraw_Templates/ru "TechDraw Templates/ru"), [Draft SVG](/Draft_SVG/ru "Draft SVG/ru") |
|  |

## Описание

The **TechDraw ExportPageSVG** tool saves the current drawing page as an [SVG](/SVG "SVG") file.

## Применение

1. If there are multiple drawing pages in the document: optionally activate the desired page by selecting it in the [Tree view](/Tree_view "Tree view").
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_ExportPageSVG.svg) [Export Page as SVG](/TechDraw_ExportPageSVG "TechDraw ExportPageSVG") button.
   * Select the **TechDraw → Page → ![](/images/TechDraw_ExportPageSVG.svg) Export Page as SVG** option from the menu.
   * If a page is displayed in the [Main view area](/Main_view_area "Main view area"): right-click the page's window and select the **Export SVG** option from the context menu.
3. If there are multiple drawing pages in the document and you have not yet activated a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.
4. The **Export page as SVG** dialog box opens.
5. Select a location and file name.

## Примечания

* [TechDraw Hatch](/TechDraw_Hatch "TechDraw Hatch") patterns are not exported to [SVG](/SVG "SVG") due to a limitation in Qt4's SVG support.
* Text positions and sizes are not correct in the exported file. Using the "system" default font in the drawing improves the size problem considerably.

## Программирование

*См. так же:* [TechDrawGui API](/TechDrawGui_API/ru "TechDrawGui API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The SaveSVG tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
TechDrawGui.exportPageAsSvg(DrawPageObject,FilePath)

```

Note that the FreeCADGui module must be active to use this function.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExportPageSVG/ru&oldid=1485893>"