---
title: Тело
---
## Введение

Во FreeCAD слово "Тело" обычно используется для ссылки на объект [Тело PartDesign](/PartDesign_Body/ru "PartDesign Body/ru") (класс `PartDesign::Body`), определённый в [Верстаке PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru"). Это контейнер, который может содержать [2D эскизы](/Sketch/ru "Sketch/ru") и [3D геометрические операции](/PartDesign_Feature/ru "PartDesign Feature/ru") для создания твердотельной формы.

Смотри [Тело PartDesign](/PartDesign_Body/ru "PartDesign Body/ru") для получения дополнительной информации об этом типе объекта.

## Применение

1. Переключитесь на [верстак PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru").
2. Нажмите ![](/images/PartDesign_Body.svg) [Создать тело](/PartDesign_Body/ru "PartDesign Body/ru").
3. Нажмите ![](/images/PartDesign_NewSketch.svg) [Создать эскиз](/PartDesign_NewSketch/ru "PartDesign NewSketch/ru") для создания нового [эскиза](/Sketch/ru "Sketch/ru").
4. Создайте замкнутую полилинию, потом используйте ![](/images/PartDesign_Pad.svg) [Выдавливание](/PartDesign_Pad/ru "PartDesign Pad/ru") для выдавливания эскиза и создания базового твёрдого тела.
5. Добавьте ещё эскизы и выдавливания, и используйте другие инструменты [верстака PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") для модификации и трансформации исходного тела.

В качестве альтернативы, вместо использования [эскизов](/Sketch/ru "Sketch/ru"), можно добавить [конструктивный элемент PartDesign](/PartDesign_Feature "PartDesign Feature"), например, ![](/images/PartDesign_AdditiveBox.svg) [Аддитивный куб](/PartDesign_AdditiveBox "PartDesign AdditiveBox"). Для создания конечной формы можно использовать любое количество аддитивных и субтрактивных конструктивных элементов.

## Примечания

Тело требуется при использовании [Верстака PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") с методами [редактирования конструктивных элементов](/Feature_editing/ru "Feature editing/ru").

Тело не требуется при использовании [верстака Part](/Part_Workbench/ru "Part Workbench/ru"), поскольку этот верстак использует процедуру [конструктивной блочной геометрии](/Constructive_solid_geometry/ru "Constructive solid geometry/ru"), базирующуюся на [примитивах](/Part_Primitives/ru "Part Primitives/ru") и булевых операциях.

Retrieved from "<http://wiki.freecad.org/index.php?title=Body/ru&oldid=1351043>"