---
title: TechDraw "Вставить объект верстака Draft"
---
|  |
| --- |
| Вставить объект верстака Draft |
| Расположение в меню |
| TechDraw → Вставить объект верстака Draft |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru"), [Draft](/Draft_Workbench/ru "Draft Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Вставить объект верстака Arch](/TechDraw_ArchView/ru "TechDraw ArchView/ru") |
|  |

## Описание

The **TechDraw DraftView** tool inserts a view of a selected [Part](/Part_Workbench "Part Workbench")-based or Group object into a drawing page. Unlike the standard ![](/images/TechDraw_View.svg) [View](/TechDraw_View "TechDraw View") tool, views created with this tool are handled by the ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench"), and specially designed for showing 2D objects. See [Notes](#Notes).

![](/images/TechDraw_DraftView_example.png)

Draft elements like circles and arrays imported into a TechDraw drawing page

## Применение

1. Optionally rotate the [3D view](/3D_view "3D view"). The camera direction in the [3D view](/3D_view "3D view") determines the initial value of the Данные**Direction** property of the View.
2. Select one or more objects in the [3D view](/3D_view "3D view") or [Tree view](/Tree_view "Tree view"). A separate view will created for each object.
3. If there are multiple drawing pages in the document: optionally add the desired page to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
4. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_DraftView.svg) [Insert Draft Workbench Object](/TechDraw_DraftView "TechDraw DraftView") button.
   * Select the **TechDraw → Views From Other Workbenches → ![](/images/TechDraw_DraftView.svg) Insert Draft Workbench Object** option from the menu.
5. If there are multiple drawing pages in the document and you have not yet selected a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.

## Опции

* Creating a DraftView of a layer will recursively handle all objects found in that layer. The View is updated automatically when the contents of the layer changes
* There is no hidden line removal. Each face found in the handled object(s) will simply be projected along the Direction vector, no specific action is taken when faces overlap
* The Draft View also supports all Draft objects that are not Part-based, such as dimensions and texts
* Color, line width and line pattern can be specified in the properties. Line patterns can be fine-tuned by directly giving a [stroke-dasharray](https://www.w3.org/TR/SVG/painting.html#StrokeProperties) value, such as 3,5
* Projected faces are filled with the face color

### Ограничения

The DraftView is rendered within the [Draft Workbench](/Draft_Workbench "Draft Workbench"), therefore TechDraw has limited control over its appearance. You may need to make changes within Draft to get the representation you want.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

A Draft View, formally a `TechDraw::DrawViewDraft` object, has the [properties](/TechDraw_View#Properties_Part_View "TechDraw View") that are common to all View types. It also has the following additional properties:

### Data

Draft view

* Данные**Source** (`Link`): The Draft object to be displayed.
* Данные**Line Width** (`Float`): The width of the lines, independently of the scale.
* Данные**Font Size** (`Float`): The size of all texts appearing in this view (texts and dimensions).
* Данные**Direction** (`Vector`): The projection direction to use.
* Данные**Color** (`Color`): The color of lines.
* Данные**Line Style** (`String`): A line style to use for this view. Can be `Solid`, `Dashed`, `Dashdot`, `Dot` or an SVG line pattern like `0.20,0.20`.
* Данные**Line Spacing** (`Float`): The spacing between lines to use for multiline texts.
* Данные**Override Style** (`Bool`): If `true`, line color, width and style of this view will override those of the rendered object.

Drawing view

* Данные (Hidden)**Symbol** (`String`): The SVG code defining this symbol.
* Данные**Editable Texts** (`StringList`): Substitution values for the editable strings in this symbol.
* Данные**Owner** (`Link`): Feature to which this symbol is attached. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The New Draft tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewDraft','TestDraft')
dv.Source = myDraftbject
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_DraftView/ru&oldid=1490137>"