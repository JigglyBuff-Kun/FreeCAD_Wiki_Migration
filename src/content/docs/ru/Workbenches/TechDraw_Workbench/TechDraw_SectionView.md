---
title: TechDraw "Вставить Вид сечения"
---
|  |
| --- |
| Вставить Вид сечения |
| Расположение в меню |
| TechDraw → Вставить Вид сечения |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Вставить Вид](/TechDraw_View/ru "TechDraw View/ru"), [Вставить группу проекций](/TechDraw_ProjectionGroup/ru "TechDraw ProjectionGroup/ru") |
|  |

## Описание

The **TechDraw SectionView** tool inserts a cross-section view based on an existing part view.

![](/images/TechDraw_section_ANSI.png)  
![](/images/TechDraw_section_ISO.png)

Sectioning an already placed view, which shows the internal holes and a hatched cut surface.  
The top image shows the ANSI arrow format.  
The bottom image shows the ISO arrow format.

## Применение

1. Select a part view in the [3D view](/3D_view "3D view") or [Tree view](/Tree_view "Tree view").
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_SectionView.svg) [Insert Section View](/TechDraw_SectionView "TechDraw SectionView") button.
   * Select the **TechDraw → TechDraw Views → ![](/images/TechDraw_SectionView.svg) Insert Section View** option from the menu.
3. A task panel opens which will help calculate the various properties. Reasonable values for the view Direction are calculated, but these can be changed.

![](/images/TechDraw_Section_Taskview.png)

Taskview to define the sectional cut of a view

## Properties

See also: [Property editor](/Property_editor "Property editor").

In the properties of the Данные**Base View** you can change the appearance of the section line.

A Section View, formally a `TechDraw::DrawViewSection` object, is derived from a [Part View](/TechDraw_View#Properties_Part_View "TechDraw View"), formally a `TechDraw::DrawViewPart` object, and inherits all its properties. It also has the following additional properties:

### Данные

Appearance

* Данные**Section Line Stretch** (`FloatConstraint`): Adjusts the length of the section line. `1.0` is normal length, `1.1` would be 10% longer, `0.9` would be 10% shorter. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Cut Operation

* Данные**Fuse Before Cut** (`Bool`): Fuse the source shapes before performing the section cut.
* Данные**Trim After Cut** (`Bool`): Additionally trim the resulting shape after the section cut to remove any unwanted pieces. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Данные**Use Previous Cut** (`Bool`) Use the cut shape from the base view instead of the original object. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Cut Surface Format

* Данные**Cut Surface Display** (`Enumeration`): Appearance of the cut surface. Options:
  + `Hide`: Hides the cut surface, only the outline will be displayed.
  + `Color`: Colors the cut surface using the setting of **Cut Surface Color** in the [TechDraw preferences](/TechDraw_Preferences "TechDraw Preferences").
  + `SvgHatch`: Hatches the section cut using a [hatch](/TechDraw_Hatch "TechDraw Hatch")
  + `PatHatch`: Hatches the section cut using a [geometric hatch](/TechDraw_GeometricHatch "TechDraw GeometricHatch")
* Данные**File Hatch Pattern** (`File`): Full path to SVG hatch pattern file.
* Данные**File Geom Pattern** (`File`): Full path to PAT pattern file.
* Данные**Svg Included** (`FileIncluded`): Full path to the included SVG hatch pattern file.
* Данные**Pat Included** (`FileIncluded`): Full path to the included PAT pattern file.
* Данные**Name Geom Pattern** (`String`): Name of the PAT pattern to use.
* Данные**Hatch Scale** (`Float`): Hatch pattern size adjustment.
* Данные**Hatch Rotation** (`Float`): Rotation of hatch pattern in degrees counter-clockwise. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Данные (Hidden)**Hatch Offset** (`Vector`): Hatch pattern offset. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Section

* Данные**Section Symbol** (`String`): The identifier for this section.
* Данные**Base View** (`Link`): The view on which this section is based.
* Данные**Section Normal** (`Vector`): A vector describing the direction normal to the cutting plane.
* Данные**Section Origin** (`Vector`): A vector describing a point on the cutting plane. Typically the centroid of the original part.
* Данные**Section Direction** (`Enumeration`): The direction in the Base View for this section. Options: `Aligned`, `Right`, `Left`, `Up` or `Down`.

### Вид

Cut Surface

* Вид**Cut Surface Color** (`Color`): Solid color for surface highlight. Used if Данные**Cut Surface Display** is set to `Color`.
* Вид (Hidden)**Show Cut Surface** (`Bool`): Show/hide the cut surface.

Surface Hatch

* Вид**Geom Hatch Color** (`Color`): The color of the Geometric hath pattern.
* Вид**Hatch Color** (`Color`): The color of the Svg hatch pattern.
* Вид (Hidden)**Hatch Cut Surface** (`Bool`): Hatch the cut surface.
* Вид**Weight Pattern** (`Float`): Line weight of the Geometric hatch pattern.

## Примечания

* **Section Line Format**: two section line formats are supported (as depicted above) and controlled by the Preference setting "Section Line Standard" on the Annotation tab. The `ANSI` option uses "pulling arrows" (known as the "traditional format" in some areas) and the `ISO` option uses "pushing arrows" (also known as the "reference arrow format").
* **Fuse Before Cut**: the section operation sometimes fails to cut the source shapes. If **Fuse Before Cut** is true, the source shapes are merged into a single shape before the section operation is attempted. If you encounter problems with the section operation, try flipping this value.
* **Trim After Cut**: the section cut operation sometimes leaves behind a portion of the source shape. If **Trim After Cut** is true, an additional cut operation is performed on the result of the first cut which should remove any unwanted pieces.
* **Cut Surface Display**: the cut surface can be hidden, painted in a solid color, hatched using an Svg pattern (default) or hatched using a PAT pattern. See [Hatching](/TechDraw_Hatching "TechDraw Hatching").

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

A SectionView can be created with [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
doc = FreeCAD.ActiveDocument
box = doc.Box
page = doc.Page

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = box
view.Direction = (0, 0, 1)

section = doc.addObject("TechDraw::DrawViewSection", "Section")
page.addView(section)
section.Source = box
section.BaseView = view
section.Direction = (0, 1, 0)
section.SectionNormal = (-1, 0, 0)

doc.recompute()

```

## Examples

For some more information about section views and some use cases, have a look at: [TechDraw section examples](/TechDraw_Section_Examples "TechDraw Section Examples").

![](/images/TechDraw_ExampleSection-10.png)
![](/images/TechDraw_ExampleSection-13.png)
![](/images/TechDraw_ExampleSection-15.png)
![](/images/TechDraw_ExampleSection-17.png)
![](/images/TechDraw_ExampleSection-34.png)
![](/images/TechDraw_ExampleSection-35.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_SectionView/ru&oldid=1490015>"