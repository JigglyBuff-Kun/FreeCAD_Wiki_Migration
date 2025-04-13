---
title: TechDraw "Добавить осевую линию к граням"
---
|  |
| --- |
| Добавить осевую линию к граням |
| Расположение в меню |
| TechDraw → Добавить Линии → Add Centerline to Face(s) |
| Верстаки |
| [TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.19 |
| См. также |
| [Добавить вспомогательную вершину](/TechDraw_CosmeticVertex/ru "TechDraw CosmeticVertex/ru"), [Добавить осевую линию между 2 линиями](/TechDraw_2LineCenterLine/ru "TechDraw 2LineCenterLine/ru"), [Добавить осевую линию между 2 точками](/TechDraw_2PointCenterLine/ru "TechDraw 2PointCenterLine/ru"), [Удалить вспомогательный объект](/TechDraw_CosmeticEraser/ru "TechDraw CosmeticEraser/ru") |
|  |

## Описание

The **TechDraw FaceCenterLine** tool adds a centerline to selected faces.

![](/images/TechDraw_FaceCenterLine_Sample.png)

Centerline added to a face

## Usage create

1. Select one or more faces in a View.
2. There are several ways to invoke the tool:
   * Press the ![](/images/TechDraw_FaceCenterLine.svg) [Add Centerline to Faces](/TechDraw_FaceCenterLine "TechDraw FaceCenterLine") button.
   * Select the **TechDraw → Add Lines → ![](/images/TechDraw_FaceCenterLine.svg) Add Centerline to Faces** option from the menu.
3. A task panel opens. See [Options](#Options) for more information.
4. Press the OK button to confirm.
5. A centerline is added at the midpoint of the bounding box of the selected face(s).

## Usage edit

Any of the centerline tools (![](/images/TechDraw_FaceCenterLine.svg) TechDraw FaceCenterLine, ![](/images/TechDraw_2LineCenterLine.svg) [TechDraw 2LineCenterLine](/TechDraw_2LineCenterLine "TechDraw 2LineCenterLine") and ![](/images/TechDraw_2PointCenterLine.svg) [TechDraw 2PointCenterLine](/TechDraw_2PointCenterLine "TechDraw 2PointCenterLine")) can be used to edit any centerline.

1. Select a centerline.
2. Invoke a centerline tool.
3. A task panel opens. See [Options](#Options) for more information.
4. Press the OK button to confirm.

## Свойства

* **Orientation**:
  + **Vertical**: Forces the centerline vertical. Ignored for 2PointCenterLines.
  + **Horizontal**: Forces the centerline horizontal. Ignored for 2PointCenterLines.
  + **Aligned**: Not available for FaceCenterLines. Forces the centerline to follow the general direction of the selected edges for 2LineCenterLines. Ignored for 2PointCenterLines.
* **Shift Horizontal**: Moves the centerline left or right of its normal position.
* **Shift Vertical**: Moves the centerline up or down from its normal position.
* **Rotate**: Rotates the centerline around its midpoint (degrees. + counterclockwise, - clockwise).
* **Extend By**: Makes the centerline longer by this amount.
* **Color**: The color of the centerline.
* **Weight**: The width of the centerline.
* **Style**: The linestyle of the centerline. The options are:
  + ![](/images/Continuous-line.svg) **Continuous**
  + ![](/images/Dash-line.svg) **Dash**
  + ![](/images/Dot-line.svg) **Dot**
  + ![](/images/DashDot-line.svg) **DashDot**
  + ![](/images/DashDotDot-line.svg) **DashDotDot**

## Примечания

* To delete a centerline select it and press Delete. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* FaceCenterLines will eventually replace two View properties:
  + Вид**HorizCenterLine**: Show a horizontal centerline through view.
  + Вид**VertCenterLine**: Show a vertical centerline through view.

## Properties

Centerlines have no properties of their own, as they are not document objects.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_FaceCenterLine/ru&oldid=1402788>"