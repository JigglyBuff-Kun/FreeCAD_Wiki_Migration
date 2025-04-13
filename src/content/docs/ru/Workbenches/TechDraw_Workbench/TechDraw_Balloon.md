---
title: TechDraw "Вставить примечание в выноску"
---
|  |
| --- |
| Вставить примечание в выноску |
| Расположение в меню |
| TechDraw → Заметки → Вставить примечание в выноску |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Вставить заметку](/TechDraw_Annotation/ru "TechDraw Annotation/ru") |
|  |

## Описание

The **TechDraw Balloon** tool can add balloons with leader line in a drawing.

![](/images/Techdraw_balloon.png)

## Применение

1. Select one of the following:
   * A View (on the page or in the [Tree view](/Tree_view "Tree view")).
   * A vertex in a View.
   * An edge in a View.
   * A closed region in a View.
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_Balloon.svg) [Insert Balloon Annotation](/TechDraw_Balloon "TechDraw Balloon") button.
   * Select the **TechDraw → Annotations → ![](/images/TechDraw_Balloon.svg) Insert Balloon Annotation** option from the menu.
3. If a View or a region was selected:
   1. The cursor changes to a balloon icon.
   2. Click a point on the page for the origin of the Balloon.

To move the bubble of a Balloon, press and hold the left mouse button on its center and drag the mouse.

To change the properties of a Balloon double-click it on the page or in the [Tree view](/Tree_view "Tree view"). This will open the Balloon task panel.

**Note:** The position of a Balloon is relative to its Source View and uses the same scale factor.

## Using separators

When using a rectangle shape, separators can be added using "|" in the text. For example "AAA|TEST|111" gives:

![](/images/Balloon_separator.png)

## Свойства

### Data

* Данные**Text**: Text to be displayed.
* Данные**Source View**: Source View for the balloon.
* Данные**Origin X**: Balloon origin x-position relative to the View.
* Данные**Origin Y**: Balloon origin y-position relative to the View.
* Данные**End Type**: End symbol for the balloon line. Options: ![](/images/Arrowfilled.svg) Filled Arrow, ![](/images/Arrowopen.svg) Open Arrow, ![](/images/Arrowtick.svg) Tick, ![](/images/Arrowdot.svg) Dot, ![](/images/Arrowopendot.svg) Open Circle, ![](/images/Arrowfork.svg) Fork, ![](/images/Arrowpyramid.svg) Filled Triangle, None.
* Данные**End Type Scale**: Scale factor for the **End Type**.
* Данные**Bubble Shape**: Shape of the balloon bubble. Options: ![](/images/Circular.svg) Circular, None, ![](/images/Triangle.svg) Triangle, ![](/images/Inspection.svg) Inspection, ![](/images/Hexagon.svg) Hexagon, ![](/images/TechDraw_Square.svg) Square, ![](/images/Rectangle.svg) Rectangle.
* Данные**Shape Scale**: Scale factor for the **Shape**.
* Данные**Text Wrap**: Text wrap length; -1 means the text will never be wrapped and the result is in every case a single line.
* Данные**Kink Length**: Distance from the **Shape** to the leader line kink.
* Данные**X**: Horizontal position of the balloon bubble relative to the View.
* Данные**Y**: Vertical position of the balloon bubble relative to the View.

### View

* Вид**Color**: Color of the balloon text.
* Вид**Font**: The name of the font to use for the balloon bubble.
* Вид**Fontsize**: Dimension text size in mm.
* Вид**Line Visible**: Whether the balloon line is visible.
* Вид**Line Width**: Balloon line width

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Balloon tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
bal1 = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewBalloon','Balloon')
rc = page.addView(bal1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Balloon/ru&oldid=1486058>"