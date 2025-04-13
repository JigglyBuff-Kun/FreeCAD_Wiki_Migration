---
title: TechDraw "Вставить подробный Вид"
---
|  |
| --- |
| Вставить подробный Вид |
| Расположение в меню |
| TechDraw → Вставить подробный Вид |
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

The **TechDraw DetailView** tool creates a view of a small area of an existing view.

![](/images/ViewDetail.png)

Detail view with a circular outline

## Применение

1. Select a base view for the detail view.
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_DetailView.svg) [Insert Detail View](/TechDraw_DetailView "TechDraw DetailView") button.
   * Select the **TechDraw → TechDraw Views → ![](/images/TechDraw_DetailView.svg) Insert Detail View** option from the menu.
3. A highlight outline is added to the base view, a detail view is added to the page, and a task panel opens.
4. For clarity it is best to move the detail view so that it no longer overlaps the base view: hold down the left mouse button on its frame or label and drag it to a new position.
5. To change the position of the highlight outline do one of the following:
   * Move the outline by dragging:
     1. Press the Drag Highlight button.
     2. The outline is marked on the page and a temporary *drag* label is added.
     3. Hold down the left mouse button on the outline itself, or on that label, and drag the outline to a new position.
   * Move the outline by coordinate input:
     1. Change the X and Y coordinates in the task panel. The coordinates are relative to the center of the base view.
6. Optionally change the **Radius** of the detail view.
7. Optionally change the **Scale Type** and **Scale Factor** of the detail view. See [TechDraw View](/TechDraw_View#Properties "TechDraw View") for more information.
8. Specify a **Reference** label. This label will be displayed near the highlight outline.
9. Press the OK button.

## Примечания

* To edit a detail view double-click it in the [Tree view](/Tree_view "Tree view").
* The outlines of detail views can be round or square. This is controlled by the **Detail View Outline Shape** [preference](/TechDraw_Preferences#Annotation "TechDraw Preferences").
* [Forum topic with a good discussion about setting the anchor.](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=34055#p285281)

## Properties

See also: [Property editor](/Property_editor "Property editor").

In the properties of the Данные**Base View** you can change the appearance of the detail outline.

A Detail View, formally a `TechDraw::DrawViewDetail` object, is derived from a [Part View](/TechDraw_View#Properties_Part_View "TechDraw View"), formally a `TechDraw::DrawViewPart` object, and inherits all its properties. It also has the following additional properties:

### Data

Appearance

* Данные**Show Matting** (`Bool`): Show or hide the matting around the detail view. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* Данные**Show Highlight** (`Bool`): Show or hide the detail highlight in the source view. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Detail

* Данные**Base View** (`Link`): The view on which the detail view is based.
* Данные**Anchor Point** (`Vector`): The center of the detail view within the Данные**Base View**.
* Данные**Radius** (`Float`): The size of the area in the Данные**Base View** that is displayed in the detail view.
* Данные**Reference** (`String`): An identifier for the detail view in the Данные**Base View**.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_DetailView/ru&oldid=1490042>"