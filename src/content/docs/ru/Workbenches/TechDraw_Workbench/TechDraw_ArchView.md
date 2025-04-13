---
title: TechDraw "Вставить объект верстака Arch"
---
|  |
| --- |
| Вставить объект верстака Arch |
| Расположение в меню |
| TechDraw → Вставить объект верстака Arch |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Плоскость Сечения](/Arch_SectionPlane/ru "Arch SectionPlane/ru") |
|  |

## Описание

The **TechDraw ArchView** tool inserts an Arch View, a view of an ![](/images/Arch_SectionPlane.svg) [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"), on a [TechDraw page](/TechDraw_PageDefault "TechDraw PageDefault").

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [TechDraw View](/TechDraw_View "TechDraw View") tool can also create an Arch View.

![](/images/TechDraw_Arch_example.jpg)

## Применение

1. Select an Arch section plane in the [3D view](/3D_view "3D view") or [Tree view](/Tree_view "Tree view").
2. If there are multiple drawing pages in the document: optionally add the desired page to the selection by selecting it in the [Tree view](/Tree_view "Tree view").
3. Select the **TechDraw → Views From Other Workbenches → ![](/images/TechDraw_ArchView.svg) Insert BIM Workbench Object** option from the menu.
4. If there are multiple drawing pages in the document, and if no page is displayed in the [Main view area](/Main_view_area "Main view area") and you have not yet selected a page, the **Page Chooser** dialog box opens:
   1. Select the desired page.
   2. Press the OK button.

## Опции

* The Arch View is rendered by the [BIM Workbench](/BIM_Workbench "BIM Workbench").
* [Draft Dimensions](/Draft_Snap_Dimensions "Draft Snap Dimensions"), [Draft Texts](/Draft_Text "Draft Text") and any other 2D (Sketch or Draft) object considered by the section plane is rendered "as is" (no intersection or hidden lines) on top of the solid geometry
* The volume of [Arch Spaces](/Arch_Space "Arch Space") is not rendered, only the label will be rendered
* Cut lines, projected lines (if Show Hidden property is set to True) and 2D lines above can be rendered with different line widths. This can be configured in the Arch preferences.
* The ArchView has two rendering modes:
  + Wireframe, which uses the OpenCasCade algorithms of the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench"), is fast and produces only lines (no face fill possible)
  + Solid, which is based on the [Painter's algorithm](https://en.wikipedia.org/wiki/Painter%27s_algorithm), and is capable of rendering faces filled with their shape color. However, it is much slower and can fail in many situations.

:   The image below illustrates the difference between the two rendering modes:

:   ![](/images/TechDraw_Arch_rendering.jpg)

* Only the base line of [Arch Pipes](/Arch_Pipe "Arch Pipe") is rendered, not the full volume of the tube:

:   ![](/images/TechDraw_Arch_piping.jpg)

## Notes

The ArchView is rendered within the [BIM Workbench](/BIM_Workbench "BIM Workbench"), therefore TechDraw has limited control over its appearance. You may need to make changes within Arch to get the representation you want.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

An Arch View, formally a `TechDraw::DrawViewArch` object, has the [properties](/TechDraw_View#Properties_Part_View "TechDraw View") that are common to all View types. It also has the following additional properties:

### Data

Arch view

* Данные**Source** (`Link`): The section plane object to be displayed.
* Данные**All On** (`Bool`): If hidden objects must be shown or not. If `false`, only objects that are visible in the 3D view are rendered.
* Данные**Render Mode** (`Enumeration`): The render mode to use, `Solid` or `Wireframe`.
* Данные**Fill Spaces** (`Bool`): If `true`, Arch Spaces are shown as a colored area.
* Данные**Show Hidden** (`Bool`): If the hidden geometry (the part of the geometry that lies behind the section plane) is shown or not. It will be rendered in dashed line, which can be configured in the Arch preferences.
* Данные**Show Fill** (`Bool`): If cut areas must be filled with a grey color or not.
* Данные**Line Width** (`Float`): The width of the main lines. Cut lines and projected/2D line widths ratios can be configured in the Arch preferences.
* Данные**Font Size** (`Float`): The size of all texts that appear in this view.
* Данные**Cut Line Width** (`Float`): Width of the cut lines in this view.
* Данные**Join Arch** (`Bool`): If `true`, walls and structures will be fused by material.
* Данные**Line Spacing** (`Float`): The spacing between lines to use for multiline texts. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Drawing view

* Данные (Hidden)**Symbol** (`String`): The SVG code defining this symbol.
* Данные**Editable Texts** (`StringList`): Substitution values for the editable strings in this symbol.
* Данные**Owner** (`Link`): Feature to which this symbol is attached. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The ArchView tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewArch','TestArch')
dv.Source = mySectionPlane
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ArchView/ru&oldid=1490161>"