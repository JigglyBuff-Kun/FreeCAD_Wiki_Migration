---
title: PartDesign Конструктивный элемент
---
## Введение

Конструктивный элемент PartDesign является «шагом» в процессе моделирования, происходящим внутри [Тела PartDesign](/PartDesign_Body/ru "PartDesign Body/ru"). Например, каждый раз, когда вы добавляете Куб с помощью [PartDesign AdditiveBox](/PartDesign_AdditiveBox/ru "PartDesign AdditiveBox/ru"), вы добавляете констуктивный элемент; когда вы добавляете фаску к кромке с помощью [PartDesign Chamfer](/PartDesign_Chamfer/ru "PartDesign Chamfer/ru"), вы добавляете еще один конструктивный элемент; когда вы вырезаете отверстие с помощью [sketch](/Sketch/ru "Sketch/ru") и [PartDesign Pocket](/PartDesign_Pocket/ru "PartDesign Pocket/ru"), вы добавляете ещё один конструктивный элемент.

![](/images/PartDesign_Feature_example.png)

Изменение [PartDesign Тела](/PartDesign_Body/ru "PartDesign Body/ru") последовательностью из трех конструктивных элементов.

Есть много типов элементов, которые могут добавить или удалить объем исходного твердого тела. Слово «элемент» относится к самой операции, а также к твёрдому телу, полученному после этой операции.

Чтобы узнать больше о создании твердотельных объектов с помощью [верстака PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru"), смотрите [редактирование конструктивных элементов](/Feature_editing/ru "Feature editing/ru").

## Применение

Почти все инструменты в [верстаке PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") предназначены для добавления элементов в [PartDesign Body](/PartDesign_Body/ru "PartDesign Body/ru"). Доступ к этим инструментам можно получить из меню и кнопок панели инструментов, когда выбран объект или подэлемент (вершина, кромка, грань).

Элементы могут быть вставлены в различные категории:

* Feature base: относится к объекту Base Feature, который может быть создан в [PartDesign Body](/PartDesign_Body/ru "PartDesign Body/ru").
* Аддитивные и субтрактивные
  + Примитивные фигуры: [Box](/PartDesign_AdditiveBox/ru "PartDesign AdditiveBox/ru"), [Cone](/PartDesign_AdditiveCone/ru "PartDesign AdditiveCone/ru"), [Cylinder](/PartDesign_AdditiveCylinder/ru "PartDesign AdditiveCylinder/ru"), [Ellipsoid](/PartDesign_AdditiveEllipsoid/ru "PartDesign AdditiveEllipsoid/ru"), [Prism](/PartDesign_AdditivePrism/ru "PartDesign AdditivePrism/ru"), [Sphere](/PartDesign_AdditiveSphere/ru "PartDesign AdditiveSphere/ru"), [Torus](/PartDesign_AdditiveTorus/ru "PartDesign AdditiveTorus/ru") и [Wedge](/PartDesign_AdditiveWedge/ru "PartDesign AdditiveWedge/ru").
  + Вычитание примитивных фигур: [Subtractive Box](/PartDesign_SubtractiveBox/ru "PartDesign SubtractiveBox/ru"), [Subtractive Cone](/PartDesign_SubtractiveCone/ru "PartDesign SubtractiveCone/ru"), [Subtractive Cylinder](/PartDesign_SubtractiveCylinder/ru "PartDesign SubtractiveCylinder/ru"), [Subtractive Ellipsoid](/PartDesign_SubtractiveEllipsoid/ru "PartDesign SubtractiveEllipsoid/ru"), [Subtractive Prism](/PartDesign_SubtractivePrism/ru "PartDesign SubtractivePrism/ru"), [Subtractive Sphere](/PartDesign_SubtractiveSphere/ru "PartDesign SubtractiveSphere/ru"), [Subtractive Torus](/PartDesign_SubtractiveTorus/ru "PartDesign SubtractiveTorus/ru") и [Subtractive Wedge](/PartDesign_SubtractiveWedge/ru "PartDesign SubtractiveWedge/ru").
  + На основе профиля: [Pad](/PartDesign_Pad/ru "PartDesign Pad/ru"), [Revolution](/PartDesign_Revolution/ru "PartDesign Revolution/ru"), [Loft](/PartDesign_AdditiveLoft/ru "PartDesign AdditiveLoft/ru"), [Pipe](/PartDesign_AdditivePipe/ru "PartDesign AdditivePipe/ru").
  + Вычитание профиля: [Pocket](/PartDesign_Pocket/ru "PartDesign Pocket/ru"), [Hole](/PartDesign_Hole/ru "PartDesign Hole/ru"), [Groove](/PartDesign_Groove/ru "PartDesign Groove/ru"), [Subtractive Loft](/PartDesign_SubtractiveLoft/ru "PartDesign SubtractiveLoft/ru"), [Subtractive Pipe](/PartDesign_SubtractivePipe/ru "PartDesign SubtractivePipe/ru").
* [Boolean](/PartDesign_Boolean/ru "PartDesign Boolean/ru"), включая fuse, cut, и common.
* Украшения
  + [Chamfer](/PartDesign_Chamfer/ru "PartDesign Chamfer/ru")
  + [Draft](/PartDesign_Draft/ru "PartDesign Draft/ru")
  + [Fillet](/PartDesign_Fillet/ru "PartDesign Fillet/ru")
  + [Thickness](/PartDesign_Thickness/ru "PartDesign Thickness/ru")
* Трансформации
  + [Linear pattern](/PartDesign_LinearPattern/ru "PartDesign LinearPattern/ru")
  + [Mirrored](/PartDesign_Mirrored/ru "PartDesign Mirrored/ru")
  + [Multi-transformed](/PartDesign_MultiTransform/ru "PartDesign MultiTransform/ru")
  + [Polar pattern](/PartDesign_PolarPattern/ru "PartDesign PolarPattern/ru")
  + [Scaled](/PartDesign_Scaled/ru "PartDesign Scaled/ru")

## Наследование

![](/images/FreeCAD_core_objects.svg)

Упрощенная диаграмма взаимосвязей между основными объектами в программе. Объекты `PartDesign::Feature` используются для построения параметрических трёхмерных тел и, таким образом, являются производными от базового объекта `Part::Feature`.

## Scripting

*См. так же:* [Основы скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru"), и [скриптовые объекты](/Scripted_objects/ru "Scripted objects/ru").

Смотрите [элементы Part](/Part_Feature/ru "Part Feature/ru") ждя получения общей информации о добавлении объектов из [консоли Python](/Python_console/ru "Python console/ru").

Смотрите [PartDesign Body](/PartDesign_Body/ru "PartDesign Body/ru") для получения общей информации о добавлении тела. Когда тело существует, к нему можно прикрепить элементы с помощью метода Body `addObject()`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject('PartDesign::Body', 'Body')
obj.Label = "Custom label"

feature = App.ActiveDocument.addObject('PartDesign::AdditiveBox', 'Box')
feature.Width = 200
feature.Length = 300
feature.Height = 500
obj.addObject(feature)
App.ActiveDocument.recompute()

feature2 = App.ActiveDocument.addObject('PartDesign::SubtractiveBox', 'Box')
feature2.Width = 50
feature2.Length = 200
feature2.Height = 400
obj.addObject(feature2)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Feature/ru&oldid=1205997>"