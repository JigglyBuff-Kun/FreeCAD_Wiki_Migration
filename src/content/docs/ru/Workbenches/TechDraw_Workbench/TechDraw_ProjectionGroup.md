---
title: TechDraw "Вставить группу проекций"
---
|  |
| --- |
| Вставить группу проекций |
| Расположение в меню |
| TechDraw → Вставить группу проекций |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Вставить Вид](/TechDraw_View/ru "TechDraw View/ru"), [Вставить Вид сечения](/TechDraw_SectionView/ru "TechDraw SectionView/ru") |
|  |

## Описание

The **TechDraw ProjectionGroup** tool creates a [multiview projection](https://en.wikipedia.org/wiki/Multiview_projection) of one or more 3D objects, using the traditional [first-](https://en.wikipedia.org/wiki/Multiview_orthographic_projection#First-angle_projection) or [third-angle projection](https://en.wikipedia.org/wiki/Multiview_orthographic_projection#Third-angle_projection). The isometric views of the 4 front corners can also be included.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [TechDraw View](/TechDraw_View "TechDraw View") tool can also create a Projection Group. It is advisable to use that tool instead.

![](/images/TechDraw_ProjGroup_example.png)

Three orthogonal views and one isometric view of a solid object

## Применение

See [TechDraw View](/TechDraw_View#Usage_Projection_Group_Item_and_Projection_Group "TechDraw View"), but to invoke the tool select the **TechDraw → TechDraw Views → ![](/images/TechDraw_ProjectionGroup.svg) Insert Projection Group** option from the menu.

## Свойства

See also: [Property editor](/Property_editor "Property editor").

A Projection Group, formally a `TechDraw::DrawProjGroup` object, has the [properties](/TechDraw_View#Properties_Part_View "TechDraw View") that are common to all View types. It also has the following additional properties:

### Data

Base

* Данные**Source** (`LinkList`): Links to the drawable objects to be depicted.
* Данные**XSource** (`XLinkList`): Links to the drawable objects in an external file.
* Данные**Anchor** (`Link`): The central view in the group. Normally the Front view.
* Данные**ProjectionType** (`Enumeration`): `First Angle` or `Third Angle`.

Collection

* Данные**Views** (`LinkList`): Links to the views in this ProjectionGroup.

Distribute

* Данные**Auto Distribute** (`Bool`): If `true`, space out individual views automatically. Use `false` to position manually.
* Данные**spacing X** (`Length`): Horizontal space between views when automatically positioned. Note that Scale and the size of other views in the group also influence the spacing.
* Данные**spacing Y** (`Length`): Vertical space between views when automatically positioned.

## Notes

The ProjectionGroup as a whole inherits X, Y, ScaleType, Scale and Rotation from the basic View.

Individual Views within the group inherit all part view properties, but the ProjectionGroup object controls the scale of all its member Views.

The RotationVector property of individual Views within the group is deprecated as of v0.19. Use XDirection instead.

Note that the central box displays the current projection direction of the primary view. It cannot be used to change the direction.

## Программирование

*См. так же:* [TechDraw API](/TechDraw_API/ru "TechDraw API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

A Projection Group can be created with [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following functions:

```
import FreeCAD as App

doc = App.ActiveDocument
cyl = doc.addObject("Part::Cylinder", "Cylinder")
doc.recompute()

page = doc.addObject("TechDraw::DrawPage", "Page")
template = doc.addObject("TechDraw::DrawSVGTemplate", "Template")
template.Template = App.getResourceDir() + "Mod/TechDraw/Templates/A4_LandscapeTD.svg"
page.Template = template

# Toggle the visibility of the page to ensure its width and height are updated (hack):
page.Visibility = False
page.Visibility = True

group = doc.addObject("TechDraw::DrawProjGroup", "ProjGroup")
page.addView(group)
group.Source = [cyl]
group.ProjectionType = "Third Angle"

front_view = group.addProjection("Front") # First projection will become the Anchor.
group.Anchor.Direction = (0, 1, 0)
group.Anchor.RotationVector = (1, 0, 0)

left_view = group.addProjection("Left")
top_view = group.addProjection("Top")

group.X = page.PageWidth / 2
group.Y = page.PageHeight / 2

doc.recompute()

```

Note: The Projection Group should always be added to the Page, `page.addView(group)`, before adding projections to the Group. This allows the Projection Group to use default parameter values derived from the parent page.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ProjectionGroup/ru&oldid=1490499>"