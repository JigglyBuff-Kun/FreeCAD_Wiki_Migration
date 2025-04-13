---
title: Урок по черчению
---
|  |
| --- |
| Руководство |
| Тема |
| Черчение |
| Уровень |
| Начинающий |
| Время для завершения |
| 30 минут |
| Авторы |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) и vocx |
| FreeCAD версия |
| 0.19 |
| Примеры файлов |
| [Draft tutorial updated](https://forum.freecadweb.org/viewtopic.php?f=36&t=43651) |
| Смотрите также |
| *None* |
|  |

## Введение

Этот учебник изначально написан Drei, переписан и иллюстрирован vocx.

Урок знакомит пользователя с основами рабочего процесса ![](/images/Workbench_Draft.svg) [Верстака Draft](/Draft_Workbench/ru "Draft Workbench/ru").

Читатель будет практиковаться в:

* создании линий, дуг и полигонов
* использование рабочих поверхностей
* создании размеров, текста и надписей
* создании технических чертежей

В уроке используется обозначение `(x, y, z)` для указания координат точки объекта. Размеры по умолчанию в миллиметрах `mm`.

![](/images/00_Dr01_Draft_Tutorial_final.png)

Итоговый чертёж с различными объектами Draft.

## Настройка

1. Запустите FreeCAD, создайте новый пустой документ из меню **Файл → ![](/images/Std_New.svg) [Создать](/Std_New/ru "Std New/ru")**.

:   1.1. Переключитесь на [верстак Draft](/Draft_Workbench/ru "Draft Workbench/ru") из [списка верстаков](/Std_Workbench/ru "Std Workbench/ru") или из меню **Вид → Рабочее окружение → ![](/images/Workbench_Draft.svg) Draft**.
:   1.2. Убедитесь, что вы понимаете как использовать [редактор свойств](/Property_editor/ru "Property editor/ru"), а в особенности вкладки **Данные** и **Вид** для изменения свойств. При изменении свойств, вы можете ![](/images/Std_Refresh.svg) [Обновлять](/Std_Refresh/ru "Std Refresh/ru") [3D-вид view](/3D_view/ru "3D view/ru") для отображения результата.
:   1.3. Так как объекты Draft это плоские фигуры, их лучше отображать видом сверху. Используйте кнопку ![](/images/Std_ViewTop.svg) [Вид сверху](/Std_ViewTop/ru "Std ViewTop/ru") для [3D-вида](/3D_view "3D view").
:   1.4. Хотя в этом уроке и не используется сетка в верстаке Draft, она полезна для размещения геометрических элементов. Используйте ![](/images/Draft_SelectPlane.svg) [Выбор плоскости](/Draft_SelectPlane/ru "Draft SelectPlane/ru") для установки рабочей плоскости и сетки, затем включайте или выключайте сетку при помощи ![](/images/Draft_ToggleGrid.svg) [Показывать сетку](/Draft_ToggleGrid/ru "Draft ToggleGrid/ru").

### Панель инструментов привязки

2. [Панель привязки Draft](/Draft_Snap/ru "Draft Snap/ru") обычно активирована, если вы переключаетесь на [верстак Draft](/Draft_Workbench/ru "Draft Workbench/ru").

:   2.1. Чтобы убедиться, в её активности перейдите в [Настройки Draft](/Draft_Preferences/ru "Draft Preferences/ru"), **Правка → Настройки → Draft → Сетка и привязка**.
:   2.2. Проверьте, что активно **Показать панель инструментов привязки**.

Вы так же можете изменить в этом окне видимость и параметры сетки Draft.

## Рабочие плоскости

Большинство объектов Draft являются плоскими фигурами, поэтому естественно, что они располагаются на *рабочей плоскости*. Рабочая плоскость может быть одна из основных XY, XZ или YZ глобальных координатных плоскостей или параллельна им с положительным или отрицательным смещением. Также это может быть плоскость заданная поверхностью твердого объекта.

3. Нажмите ![](/images/Draft_SelectPlane.svg) [Выбор плоскости](/Draft_SelectPlane/ru "Draft SelectPlane/ru") или из меню **Вспомогательные → ![](/images/Draft_SelectPlane.svg) [Выбор плоскости](/Draft_SelectPlane/ru "Draft SelectPlane/ru")** чтобы открыть [панель задач](/Task_panel/ru "Task panel/ru").

:   3.1. Нажмите ![](/images/Std_ViewTop.svg) XY (сверху).

Перед тем как нажать кнопку, вы можете изменить значение смещения в мм, а также расстояние сетки, основные линии и радиус привязки.

## Линии и дуги

4. Создадим дуги и линии.

:   4.1. Нажмите ![](/images/Draft_Arc.svg) [Дуга](/Draft_Arc/ru "Draft Arc/ru").
:   4.2. Установите **Центр** в `(0, 0, 0)` и нажмите Enter.
:   4.3. Установите **Радиус** в `30 mm` и нажмите Enter.
:   4.4. Установите **Начальный угол** в `60.0°` и нажмите Enter.
:   4.5. Установите **Угол апертуры** в `60.0°` и нажмите Enter.
:   4.6. Повторите эту процедуру для следующей дуги с радиусом `25 мм`, остальные параметры те же.

5. Теперь создадим замкнутый профиль, связав дуги с линиями.

:   5.1. Нажмите ![](/images/Draft_Line.svg) [Line](/Draft_Line/ru "Draft Line/ru").
:   5.2. В [Snap toolbar](/Draft_Snap/ru "Draft Snap/ru") убедитесь, что ![](/images/Draft_Snap_Lock.svg) [режим привязки](/Draft_Snap_Lock/ru "Draft Snap Lock/ru") активен, с одним только ![](/images/Draft_Snap_Endpoint.svg) [Endpoint](/Draft_Snap_Endpoint/ru "Draft Snap Endpoint/ru") вдобавок. Когда Вы придвините указатель к конечной точке дуги, появится иконка ![](/images/Draft_Snap_Endpoint.svg) [Endpoint](/Draft_Snap_Endpoint/ru "Draft Snap Endpoint/ru"). Кликните для выбора этой точки.
:   5.3. Переместите указатель к ближайшей конечной точке другой дуги, чтобы связать две дуги вместе.
:   5.4. Повторите процесс для другой стороны дуги, чтобы закрыть профиль.

![](/images/01_Dr01_Draft_Arc_profile.png)

Замкнутый контур из двух дуг и двух линий.

## Fusing or compounding

Теперь в [древе проекта](/Tree_view/ru "Tree view/ru") есть несколько объектов, которые образуют закрытый профиль. Однако этот профиль все еще состоит из отключенных объектов; каждый из них может быть отредактирован и перемещен независимо от других. Возможно продолжить работу с отдельными элементами как они есть, но в данном случае мы объединим их в один объект.

6а. Обратите внимание, что объединение объектов в один объект приведет к созданию объекта, который больше не является параметрическим, поэтому их свойства не могут быть изменены в дальнейшем.

:   6a.1. Выберите все четыре объекта в [древе проекта](/Tree_view/ru "Tree view/ru"), или, удерживая Ctrl, выберите их в [трёхмерном виде](/3D_view/ru "3D view/ru").
:   6a.2. Выбрав эти объекты, нажмите ![](/images/Draft_Upgrade.svg) [Upgrade](/Draft_Upgrade/ru "Draft Upgrade/ru").
:   6a.3. Это обновит четыре объекта в один `Wire`.

6b. If you wish to maintain the parametric nature of the objects you can create a compound instead.

:   6b.1. Switch to the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench").
:   6b.2. With these objects selected, click on ![](/images/Part_Compound.svg) [Part Compound](/Part_Compound "Part Compound").

## Прямоугольники, окружности и полигоны

7. We will draw a rectangular frame. (Switch back to the ![](/images/Workbench_Draft.svg)  [Draft Workbench](/Draft_Workbench "Draft Workbench").)

:   7.1. Press ![](/images/Draft_Rectangle.svg) [Rectangle](/Draft_Rectangle "Draft Rectangle").
:   7.2. Enter the values of the first point `(-100, -60, 0)`, and press Enter.
:   7.3. Make sure the **Relative** option is unchecked, as we will use absolute units. You may press R in the keyboard to quickly toggle this option on and off.
:   7.4. Enter the values for the second point `(140, 90, 0)`, and press Enter.

A rectangle is created. Go in the [property editor](/Property_editor "Property editor") to change its properties. If you don't want the rectangle to create a face, set Данные**Make Face** to `false`. If you want to make a face, but see only the wires of that object, keep Данные**Make Face** to `true` but set the Вид**Display Mode** to `Wireframe`.

8. Нарисуем круг.

:   8.1. Нажмите ![](/images/Draft_Circle.svg) [Circle](/Draft_Circle/ru "Draft Circle/ru").
:   8.2. Введите значения центра `(0, 0, 0)` и нажмите Enter.
:   8.3. Установите радиус `15 mm` и нажмите Enter.

9. Нарисуем правильный многоугольник.

:   9.1. Нажмите ![](/images/Draft_Polygon.svg) [Polygon](/Draft_Polygon/ru "Draft Polygon/ru").
:   9.2. Введите значения центра `(0, 0, 0)` и нажмите Enter.
:   9.3. Установите количество сторон `6` и нажмите Enter.
:   9.4. Установите радиус `50 мм` и нажмите Enter.

Again, you may change the Данные**Make Face** and Вид**Display Mode** properties in the [property editor](/Property_editor "Property editor") if you want.

The rectangle, the circle, the polygon, and most other objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") share many data and view properties because they are derived from the same base class, [Part Part2DObject](/Part_Part2DObject "Part Part2DObject").

![](/images/02_Dr01_Draft_Rectangle_circle_polygon.png)

Rectangle, circle and polygon added.

## Arrays

Arrays are used to replicate an object several times in an orthogonal direction (X, Y, Z), around a revolution axis, or along a path.

10. We will create a polar array.

:   10.1. Select the `Wire` object that was previously created with the ![](/images/Draft_Upgrade.svg) [Upgrade](/Draft_Upgrade "Draft Upgrade") tool, or the `Compound` created with the ![](/images/Part_Compound.svg) [Part Compound](/Part_Compound "Part Compound") tool.
:   10.2. Press ![](/images/Draft_PolarArray.svg) [PolarArray](/Draft_PolarArray "Draft PolarArray").
:   10.3. Adjust the polar angle to `360°`.
:   10.4. Set the number of elements to `4`.
:   10.5. Enter the values for the center of rotation `(0, 0, 0)`, and press Enter.

The array object shows copies of the object around the origin.

![](/images/03_Dr01_Draft_PolarArray.png)

Polar array of the small profile centered around the origin.

## Dimensions

Linear dimensions work best when using the appropriate [Draft Snap](/Draft_Snap "Draft Snap") methods to select points and edges to measure. However, they can also be created by specifying absolute coordinates.

11. Create dimensions for the different objects.

:   11.1. Press ![](/images/Draft_Dimension.svg) [Dimension](/Draft_Dimension "Draft Dimension").
:   11.2. Pick the first point. In this tutorial the first point will always be the origin `(0, 0, 0)`.
:   11.3. In the [Snap toolbar](/Draft_Snap "Draft Snap") make sure ![](/images/Draft_Snap_Lock.svg) [Toggle snap](/Draft_Snap_Lock "Draft Snap Lock") is active, and only ![](/images/Draft_Snap_Midpoint.svg) [Midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint") as well. As you move the pointer to the top edge of the polygon, the ![](/images/Draft_Snap_Midpoint.svg) [Midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint") icon should appear; click to select this point.
:   11.4. Move the cursor to the right to specify the location of the dimension, then click to set the final position, around `(100, 20, 0)`. The dimension will automatically show the length value measured between the two points.
:   11.5. Select the dimension object in the [tree view](/Tree_view "Tree view"), and in the [property editor](/Property_editor "Property editor"), change Вид**Font Size** to `6 mm`, set Вид**Ext Lines** to `45 mm`, and Вид**Show Unit** to `false`.

12. Повторите процесс для двух дуг замкнутого профиля. Первая точка измерения по-прежнему будет в исходной, а вторая точка будет использовать ![](/images/Draft_Snap_Midpoint.svg) [среднюю точку](/Draft_Snap_Midpoint/ru "Draft Snap Midpoint/ru") дуги.

13. Repeat the process for the circle located in the center. The first point of the measurement will still be the origin. To select the second point make sure ![](/images/Draft_Snap_Lock.svg) [Toggle snap](/Draft_Snap_Lock "Draft Snap Lock") is active, and only ![](/images/Draft_Snap_Angle.svg) [Angle](/Draft_Snap_Angle "Draft Snap Angle") as well. As you move the pointer to the top of the circle, the ![](/images/Draft_Snap_Angle.svg) [Angle](/Draft_Snap_Angle "Draft Snap Angle") icon should appear; click to select this point. Then move the cursor to the right, and click to fix the dimension.

Remember to adjust the Вид**Font Size**, and other properties to see the dimension correctly.

![](/images/04_Dr01_Draft_Dimension.png)

Dimensions that measure the vertical distance from the origin to the top of the circle, arcs, and polygon.

## Texts and ShapeStrings

14. Text objects are simple planar figures that are created in the [3D view](/3D_view "3D view") but don't have an actual "[shape](/Shape "Shape")" underneath. This means that they cannot be used in complex operations with shapes like extrusions or boolean operations.

:   14.1. Press ![](/images/Draft_Text.svg) [Text](/Draft_Text "Draft Text").
:   14.2. Select the reference point in the [3D view](/3D_view "3D view"). In the [Snap toolbar](/Draft_Snap "Draft Snap") make sure ![](/images/Draft_Snap_Lock.svg) [Toggle snap](/Draft_Snap_Lock "Draft Snap Lock") is active, and only ![](/images/Draft_Snap_Midpoint.svg) [Midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint") as well. Move the pointer to the top edge of the highest arc, so that the ![](/images/Draft_Snap_Midpoint.svg) [Midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint") icon appears; click to select this point.
:   14.3. Enter the desired **Text**, and press Enter once to start a new line; add more lines of text as needed.
:   14.4. When you are ready to finish with edition, press Enter twice.
:   14.5. Select the text object in the [tree view](/Tree_view "Tree view"), and in the [property editor](/Property_editor "Property editor"), change Вид**Font Size** to `6 mm`, and Вид**Justification** to `Center`.

15. ShapeString objects are shapes made of primitive wires that follow the lines indicated by a certain font. This means that these objects have a real "[shape](/Shape "Shape")" underneath, and thus can be used in complex operations like extrusions and boolean operations.

:   15.1. Press ![](/images/Draft_ShapeString.svg) [ShapeString](/Draft_ShapeString "Draft ShapeString").
:   15.2. Move the pointer to the desired location in the [3D view](/3D_view "3D view") above the regular polygon, and click once. This will fix the base point for the ShapeString. The coordinates may be entered manually as well, for example, `(-20, 65, 0)`.
:   15.3. Enter the desired **String**, and choose the desired **Height**.
:   15.4. If there is no default font file, you must click on the ellipsis ... to open a dialog window to choose the font location in the system.
:   15.5. When a valid font file has been specified, you may proceed to click OK or press Enter.

![](/images/05_Dr01_Draft_Text_ShapeString.png)

Text and ShapeString objects added.

To extrude letters and engrave them on to solids, see the [Draft ShapeString tutorial](/Draft_ShapeString_tutorial "Draft ShapeString tutorial").

## Creating technical drawings

As it is now, the objects that we have created can be saved, exported to other formats like [SVG](/SVG "SVG") or [DXF](/DXF "DXF"), or printed.

If you wish, you may create a technical drawing to display these objects together with additional information like a frame.

Before doing anything, hide the Draft grid by pressing ![](/images/Draft_ToggleGrid.svg) [Toggle grid](/Draft_ToggleGrid "Draft ToggleGrid").

16. Switch to the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

:   16.1. Create a standard page by pressing ![](/images/TechDraw_PageDefault.svg) [TechDraw PageDefault](/TechDraw_PageDefault "TechDraw PageDefault").
:   16.2. In the [tree view](/Tree_view "Tree view") select all objects created, except for the Page, and then press ![](/images/TechDraw_ActiveView.svg) [TechDraw ActiveView](/TechDraw_ActiveView "TechDraw ActiveView"). Press OK with the default options; it may take a few seconds to create the view in the page.
:   16.3. Selecting the Page object in the [tree view](/Tree_view "Tree view") will automatically display the Page in the main window. With the Page selected, go to the [property editor](/Property_editor "Property editor"), and change Данные**Scale** to `0.75`.
:   16.4. Expand the Page object in the [tree view](/Tree_view "Tree view") to select the ActiveView object. With this view selected, go to the [property editor](/Property_editor "Property editor"), and change Данные**Scale Type** to `Page`.
:   16.5. Recompute the model by using ![](/images/Std_Refresh.svg) [Refresh](/Std_Refresh "Std Refresh") or pressing F5.
:   16.6. Hide the frames of the objects by pressing ![](/images/TechDraw_ToggleFrame.svg) [TechDraw ToggleFrame](/TechDraw_ToggleFrame "TechDraw ToggleFrame").

Learn more about the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") by reading the [Basic TechDraw Tutorial](/Basic_TechDraw_Tutorial "Basic TechDraw Tutorial").

![](/images/06_Dr01_Draft_TechDraw_page.png)

TechDraw page with a projection of the shapes created with the Draft Workbench.

TechDraw works best with objects that have a [Part TopoShape](/Part_TopoShape "Part TopoShape"). Since some objects from Draft, like [Draft Texts](/Draft_Text "Draft Text") and [Draft Dimensions](/Draft_Dimension "Draft Dimension"), don't have such "[shapes](/Shape "Shape")", some operations of TechDraw don't work with these elements.

Tools like ![](/images/TechDraw_ActiveView.svg) [TechDraw ActiveView](/TechDraw_ActiveView "TechDraw ActiveView"), ![](/images/TechDraw_DraftView.svg) [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView"), and ![](/images/TechDraw_ArchView.svg) [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") work by receiving an internal SVG image that is generated by internal Draft functions; therefore, TechDraw doesn't have much control about how these views are displayed. More integration of Draft and TechDraw is a work in progress.

## Конечные замечания

The [Draft Workbench](/Draft_Workbench "Draft Workbench") in many ways is similar to the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), as both are intended to produce 2D shapes. The main difference is in the way each workbench handles coordinate systems, and how the objects are positioned. In Draft, objects are freely positioned in the global coordinates system, usually snapping their points to a grid, or to other objects. In Sketcher, a "[sketch object](/Sketch "Sketch")" defines a local coordinate system which serves as the reference for all geometrical elements within that sketch. Moreover, the sketch relies on "constraints" to define the final position of its points.

* The [Draft Workbench](/Draft_Workbench "Draft Workbench") is intended for 2D drawings which are suitable to be drawn on a grid. The [BIM Workbench](/BIM_Workbench "BIM Workbench") mostly builds on top of the tools defined in the [Draft Workbench](/Draft_Workbench "Draft Workbench").

* The [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") is intended for 2D drawings that require precise relationships between its points. It does not rely on a grid, but on rules of positioning (constraints) to determine where the points and edges will be placed. The [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") is mostly used together with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") for the creation of solid [bodies](/Body "Body").

* It is possible to transform a Draft object into a [Sketch](/Sketch "Sketch"), and the other way around, using the ![](/images/Draft_Draft2Sketch.svg) [Draft Draft2Sketch](/Draft_Draft2Sketch "Draft Draft2Sketch") tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_tutorial/ru&oldid=1456869>"