---
title: Arch Панельный лист
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Панельный лист |
| Расположение в меню |
| Arch → Инструменты панелирования → Панельный лист |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| P S |
| Представлено в версии |
| 0.17 |
| См. также |
| [Паенль](/Arch_Panel/ru "Arch Panel/ru"), [Панельный контур](/Arch_Panel_Cut/ru "Arch Panel Cut/ru"), [Компоновка](/Arch_Nest/ru "Arch Nest/ru") |
|  |

## Описание

This tool allows to build a 2D sheet, including any number of [Arch Panel Cut](/Arch_Panel_Cut "Arch Panel Cut") objects, or any other 2D object such as those made by the [Draft Workbench](/Draft_Workbench "Draft Workbench") and [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"). The Panel Sheet is typically made to layout cuts to be made by a CNC machine. These sheets can then be exported to a [DXF](/Draft_DXF "Draft DXF") file.

![](/images/Arch_Wikihouse_03.jpg)

![](/images/Arch_Wikihouse_04.jpg)

"На приведенном выше изображении показано, как выглядят листы раскроеные на плоские панельные элементы при экспорте в формат DXF".

## Применение

1. Optionally, select one or more [Arch Panel Cut](/Arch_Panel_Cut "Arch Panel Cut") objects or any other 2D object that lies on the XY plane.
2. Select the **Utils → Panel tools → ![](/images/Arch_Panel_Sheet.svg) Panel Sheet** option from the menu.
3. Adjust the desired properties.

## Опции

* After the panel sheet is created, with or without child objects, Any other child object can be added/removed to/from the panel sheet by double-clicking it in the tree view and adding or removing objects from its Group folder
* Double-clicking on the panel in the tree view also allows you to move the objects contained in this sheet, or move its tag
* It is possible to automatically make panels composed of more than one sheet of a material, by raising its Sheets property
* Panel Sheets can display a margin, that is useful to make sure a certain space is always present between inner objects and the border of the sheet
* When Panel sheets are exported to DXF, the outlines, inner holes, tags of their inner children are placed on different layers, as shown on the above image

## Свойства

### Данные

* Данные**Height**: The height of the sheet
* Данные**Width**: The width of the sheet
* Данные**Fill Ratio**: The percentage of the sheet area that is filled by cuts (automatic)
* Данные**Tag Text**: The text to display
* Данные**Tag Size**: The size of the tag text
* Данные**Tag Position**: The position of the tag text. Keep (0,0,0) for automatic center position
* Данные**Tag Rotation**: The rotation of the tag text
* Данные**Font File**: The font of the tag text
* Данные**Make Face**: If True, the panel is a Part Face, otherwise a Part Wire
* Данные**Grain Direction**: This allows you to inform the main direction of the panel fiber (clockwise direction, 0° means up)

### Вид

* Вид**Margin**: A margin that can be displayed inside the panel border
* Вид**Show Margin**: Turns the display of the margin on/off
* Вид**Show Grain**: Shows a fiber texture (Make Face must be set to True)

## Программирование

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Panel sheet tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Sheet = makePanelSheet(panels=[], name="PanelSheet")

```

* Creates a `Sheet` object from `panels`, which is a list of [Arch Panel](/Arch_Panel "Arch Panel") objects.

Пример:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(500, 200)
Polygon = Draft.makePolygon(5, 750)

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2000, 400, 0)
p3 = FreeCAD.Vector(1250, 800, 0)
Wire = Draft.makeWire([p1, p2, p3], closed=True)

Panel1 = Arch.makePanel(Rect, thickness=36)
Panel2 = Arch.makePanel(Polygon, thickness=36)
Panel3 = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

Cut1 = Arch.makePanelCut(Panel1)
Cut2 = Arch.makePanelCut(Panel2)
Cut3 = Arch.makePanelCut(Panel3)
Cut1.ViewObject.LineWidth = 3
Cut2.ViewObject.LineWidth = 3
Cut3.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

Sheet = Arch.makePanelSheet([Cut1, Cut2, Cut3])

```

## Материалы для самостоятельного изучения

* [Руководство по портированию файлов проекта Wikihouse в FreeCAD](/Wikihouse_porting_tutorial/ru "Wikihouse porting tutorial/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Sheet/ru&oldid=1433145>"