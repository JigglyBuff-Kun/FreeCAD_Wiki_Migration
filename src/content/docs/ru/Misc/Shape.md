---
title: Форма (очертание)
---
## Введение

В FreeCAD слово "Форма" обычно используется для обозначения [Part TopoShape (Топологической Геометрии Детали)](/Part_TopoShape/ru "Part TopoShape/ru") (Part::TopoShape класса), типа объекта, который даёт элементу его трёхмерное геометрическое и параметрическое представление (куб, пирамида, сфера, цилиндр, слияние и т. Д.).

По существу, все объекты, отображаемые в [3D виде](/3D_view/ru "3D view/ru"), имеют [TopoShape(Топологическую Форму)](/Part_TopoShape/ru "Part TopoShape/ru"), за исключением "[Сеток](/Mesh/ru "Mesh/ru")", которые имеют (Mesh::MeshObject клас) MeshObject .

Смотри [Part TopoShape (Топологическая Геометрия Детали)](/Part_TopoShape/ru "Part TopoShape/ru") для получения дополнительной информации об этом типе объектов.

![](/images/Shape_and_mesh.svg)

Слева: параметрическая форма, определяемая свойствами. Справа: [сетка](/Mesh/ru "Mesh/ru"), определяемая вершинами и треугольными поверхностями.

## Применение

Формы обычно создаются внутренними функциями [Верстака Part](/Part_Workbench/ru "Part Workbench/ru") и в конечном счёте определяются ядром [OpenCASCADE Технологии](/OpenCASCADE/ru "OpenCASCADE/ru") (OCCT).

Как только фигура создана, она может быть использована и изменена всеми [верстаками](/Workbenches/ru "Workbenches/ru") путём создания [скриптовых объектов](/Scripted_objects/ru "Scripted objects/ru") вокруг этой фигуры.

По сути, каждый объект, производный от [Функций Part (Feature)](/Part_Feature/ru "Part Feature/ru") (`Part::Feature` класса), содержит и манипулирует Формой.

Any OpenCascade Shape has a tesselation mainly to view the Shape on screen. More information about this can be found in this German [forum post](https://forum.freecad.org/viewtopic.php?t=77521&start=10#p674947) and in the [OpenCascad Mesh documentation](https://dev.opencascade.org/doc/overview/html/occt_user_guides__mesh.html).

## Примечания

В неофициальном употреблении "Фигурой" может быть любая геометрическая фигура, видимая в [3D-виде](/3D_view/ru "3D view/ru"), и поэтому её понятие можно спутать с понятием "[Тело](/Body/ru "Body/ru")" или "[Деталь](/Part/ru "Part/ru")".

Однако, когда требуется более точное определение, различие должно быть сделано.

* "[Тело](/Body/ru "Body/ru")" это объект полученный [Функцией Part](/Part_Feature/ru "Part Feature/ru") (`Part::Feature` класса), созданный с помощью [Версткак PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru").
* "Форма" - это внутренний объект, встроенный в "[Тело](/Body/ru "Body/ru")".
* "[Деталь](/Part/ru "Part/ru")" используется для группировки нескольких "[Тел](/Body/ru "Body/ru")" чтобы сформировать [сборку](/Assembly/ru "Assembly/ru"). "Деталь" состоит из набора "Форм", но не имеет собственной "Формы" как таковой.

Retrieved from "<http://wiki.freecad.org/index.php?title=Shape/ru&oldid=1254588>"