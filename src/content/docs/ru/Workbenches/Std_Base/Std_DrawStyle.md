---
title: Меню "Стиль представления"
---
|  |
| --- |
| Std DrawStyle |
| Расположение в меню |
| Вид → Стиль представления → ... |
| Верстаки |
| All |
| Быстрые клавиши |
| V 1 - V 7 |
| Представлено в версии |
| - |
| См. также |
| [Std SelBoundingBox](/Std_SelBoundingBox/ru "Std SelBoundingBox/ru") |
|  |

## Описание

The **Std DrawStyle** command can override the effect of the Вид**Display Mode** [property](/Property_editor "Property editor") of objects in a [3D view](/3D_view "3D view").

## Применение

1. There are several ways to invoke the command:
   * Click on the black down arrow to the right of the ![](/images/Std_DrawStyleAsIs.svg) [Draw style](/Std_DrawStyle "Std DrawStyle") button and select a style from the flyout.
   * In the menu go to **View → Draw style** and select a style.
   * In the [3D view](/3D_view "3D view") context menu go to **Draw style** and select a style.
   * Use one of the keyboard shortcut: V then 1, 2, 3, 4, 5, 6 or 7.

## Available draw styles

### Как есть

The **As is** style does not override the Вид**Display Mode** of objects.

![](/images/Std_DrawStyleAsIs_example.png)

4 одинаковых объекта, с разными значениями переменной Display Mode (слева направо: 'Points', 'Wireframe', 'Shaded' и 'Flat lines') в режиме отображения 'Как есть'

### Точки

The **Points** style overrides the Вид**Display Mode** of objects. This style matches the 'Points' Display Mode. Vertices are displayed in solid colors. Edges and faces are not displayed.

![](/images/Std_DrawStylePoints_example.png)

Внешний вид тех же самых объектов в режиме отображения 'Точки'

### Каркас

The **Wireframe** style overrides the Вид**Display Mode** of objects. This style matches the 'Wireframe' Display Mode. Vertices and edges are displayed in solid colors. Faces are not displayed.

![](/images/Std_DrawStyleWireframe_example.png)

Внешний вид тех же самых объектов в режиме отображения 'Каркас'

### Скрытые линии

The **Hidden line** style overrides the Вид**Display Mode** of objects. Objects are displayed as if converted to triangular meshes.

![](/images/Std_DrawStyleHiddenLine_example.png)

Внешний вид тех же самых объектов в режиме отображения 'Скрытые линии'

### Без затенения

The **No shading** style overrides the Вид**Display Mode** of objects. Vertices, edges and faces are displayed in solid colors.

![](/images/Std_DrawStyleNoShading_example.png)

Внешний вид тех же самых объектов в режиме отображения 'Без затенения'

### Только грани

The **Shaded** style overrides the Вид**Display Mode** of objects. This style matches the 'Shaded' Display Mode. Vertices and edges are not displayed. Faces are illuminated depending on their orientation.

![](/images/Std_DrawStyleShaded_example.png)

Внешний вид тех же самых объектов в режиме отображения 'Только грани'

### Плоские линии

The **Flat lines** style overrides the Вид**Display Mode** of objects. This style matches the 'Flat lines' Display Mode. Vertices and edges are displayed in solid colors. Faces are illuminated depending on their orientation.

![](/images/Std_DrawStyleFlatLines_example.png)

Внешний вид тех же самых объектов в режиме отображения 'Плоские линии'

## Примечания

* Objects in a [3D view](/3D_view "3D view") also have a Вид**Draw Style** property. This property controls the linetype used for the edges. The Std DrawStyle command does not override this property.
* For a macro to toggle between two draw styles see: [Macro Toggle Drawstyle](/Macro_Toggle_Drawstyle "Macro Toggle Drawstyle").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DrawStyle/ru&oldid=1449682>"