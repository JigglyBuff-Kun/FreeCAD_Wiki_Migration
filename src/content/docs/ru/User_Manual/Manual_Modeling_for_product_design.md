---
title: Моделирование для проектирования продукта
---

[Проектирование продукта](https://en.wikipedia.org/wiki/Product_design) изначально было коммерческим термином, но в мире 3D это обычно означает моделирование чего-то, что будет напечатано с помощью [3D-принтера](https://ru.wikipedia.org/wiki/3D_принтер), или, в более общем случае, произведено с помощью машины, будь это объёмный принтера или [станок с ЧПУ](https://ru.wikipedia.org/wiki/Числовое_программное_управление).

Когда Вы печатаете объёмный объект, обязательно нужно, чтобы Ваш объект был **твёрдым телом**. Конечно, ничего не мешает ему быть пустым внутри. Но Вам всегда следует чётко знать, с какой стороны внутренний материал, а где внешняя сторона, поскольку принтер или ЧПУ должны чётко знать, что заполнено материалом, а что нет. Поэтому [верстак PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") является лучшим инструментом в FreeCAD для построения таких частей, потому что он всегда следит за тем, чтобы объекты были твердотельны и изготовляемы.

Для демонстрации работы верстака PartDesign, смоделируем эту хорошо известную деталь [Лего](https://ru.wikipedia.org/wiki/Лего):

![](/images/FreeCAD_Exercise1_RedBrick.png)

В элементах Лего хорошо то, что их размеры, как минимум для стандартных, легко узнать в Интернет. Их достаточно легко моделировать и печатать в объёме, и при некотором терпении (объёмная печать требует много настройки) Вы сможете сделать элементы, которые полностью совместимы и идеально присоединяются к оригинальным блокам Лего. В показанном ниже примере мы делаем элемент в 1,5 раз больше оригинала.

Мы будем использовать только инструменты модулей [Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") и [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru"). Поскольку все инструменты верстака Sketcher включены в верстак PartDesign, мы можем оставаться в PartDesign и не нуждаться в переключении между верстаками.

A sketch is considered fully constrained when every point is locked into position by the appropriate number of constraints, meaning no part of the sketch can be moved freely. Achieving a fully constrained sketch is ideal because it ensures the design is well-defined and stable, allowing for predictable changes later in the design process. On the other hand, if more constraints are added than necessary—referred to as an over-constrained sketch—this can cause conflicts in the geometry. FreeCAD will alert you to any redundant or conflicting constraints, as over-constraining can cause issues in further operations like extrusions or cuts.

Объекты PartDesign полностью базируются на **Эскизах**. Эскизы это двумерные объекты, составленные из линейных сегментов (линий, дуг или эллипсов) и геометрических ограничений. Эти ограничения могут быть применены либо к линейным сегментам или их конечным точкам или центральным точкам, и заставляют геометрию следовать некоторым правилам. Например, Вы можете поместить вертикальные ограничения к сегменту линии, чтобы заставить его быть вертикальным, или установить для конечных точек ограничения позиции, чтобы запретить перемещение. Когда эскиз содержит такой набор ограничений, что никакие точки эскиза не могут быть сдвинуты, говорят о полностью ограниченном эскизе. Когда есть излишние ограничения, которые могут быть убраны без позволения изменений геометрии, он называется переограниченным. Этого следует избегать, и FreeCAD в этом случае сделает предупреждение.

Эскизы имеют режим редактирования, где их геометрия и ограничения могут быть изменены. Когда Вы завершили редактирование, эскизы ведут себя как остальные объекты FreeCAD, и могут использоваться как строительные блоки для всех инструментов PartDesign и для других верстаков, вроде [Part](/Part_Workbench/ru "Part Workbench/ru") или [Arch](/Arch_Workbench/ru "Arch Workbench/ru"). [Верстак Draft](/Draft_Workbench/ru "Draft Workbench/ru") так же содержит инструменты, которые преобразуют объекты Draft в объекты Sketch и наоборот.

- Начнём с моделирования палаллелепипеда, который станет базой для нашего кубика Lego. Далее мы вырежем внутренности, и добавим 8 точек сверху. Поэтому начнём с создания прямоугольного эскиза, который мы потом выдавим:
- Переключимся на [верстак PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru")
- Кликнем на кнопке ![](/images/Sketcher_NewSketch.svg) [Создать эскиз](/Sketcher_NewSketch/ru "Sketcher NewSketch/ru"). Появится диалог, спрашивающий, как расположить эскиз, выберем плоскость **XY**, плоскость "вида сверху". Эскиз будет создан и переключён в режим редактирования, а вид будет повёрнут так, чтобы видеть эскиз сверху.
- Теперь нарисуем прямоугольник, выбрав инструмент ![](/images/Sketcher_CreateRectangle.svg) [Создать прямоугольник](/Sketcher_CreateRectangle/ru "Sketcher CreateRectangle/ru") и кликнув две угловые точки. Можете поместить их где угодно, поскольку правильное положение будет установлено на следующем шаге.
- Вы увидите, что прямоугольнику сразу будет добавлено множество геометрических ограничений: вертикальные сегменты получат вертикальные ограничения, горизонтальные - горизонтальные ограничения, а каждый угол - ограничение коинцидентности, соединяющее сегменты вместе. Вы можете на пробу подвигать прямоугольник, перетаскивая его линии мышью, и вся геометрия останется соответствующей ограничениям.

![](/images/FreeCAD_Exercise1_re_UC.png)

- Теперь добавим ещё три ограничения:
  - Выберите один из вертикальных сегментов и добавьте ![](/images/Constraint_VerticalDistance.svg) [Ограничение расстояния по вертикали](/Sketcher_ConstrainDistanceY/ru "Sketcher ConstrainDistanceY/ru"). Установите размер 23,7 мм.
  - Выберите один из горизонтальных сегментов и добавьте ![](/images/Constraint_HorizontalDistance.svg) [Ограничение расстояния по горизонтали](/Sketcher_ConstrainDistanceX/ru "Sketcher ConstrainDistanceX/ru"). Установите его в 47,7 мм.
  - Затем выберите одну из угловых точек и начальную точку (это точка на пересечении красной и зелёной оси), и добавьте ![](/images/Constraint_PointOnPoint.svg) [Ограничение коинцидентности](/Sketcher_ConstrainCoincident/ru "Sketcher ConstrainCoincident/ru"). Прямоугольник переместится к начальной точке привязки, и эскиз станет зелёным, означая, что он он полностью ограничен. Попробуйте перемещать линии или точки, ничего больше не сдвинется.

![](/images/FreeCAD_Exercise1_re.png)

- Наш базовый эскиз теперь готов, мы можем закончить редактирование нажатием кнопки **Закрыть** на панели задач, или просто нажатием кнопки **Escape**. Если нужно, в любое время можно вернуться в режим редактирования двойным кликом на эскизе в древе проекта.
- Применим к эскизу инструмент ![](/images/PartDesign_Pad.svg) [Выдавливание](/PartDesign_Pad/ru "PartDesign Pad/ru"), и зададим расстояние 14,4 мм. Прочие опции можно оставить по умолчанию:

![](/images/FreeCAD_Exercise1_padding.png)

**Выдавливание** в PartDesign действует похоже на инструмент [Extrude](/Part_Extrude/ru "Part Extrude/ru"), который мы использовали в предыдущей главе, но есть много отличий. Главное из них, что это выдавливание не может быть передвинуто, оно навсегда привязано к эскизу. Если Вы хотите изменить положение выдавливания, Вам следует перемещать эскиз. В текущем контексте, где мы хотим гарантировать, что ничего не уйдет со своего места, это добавляет защиту.

- Мы будем теперь делать вырез внутри блока, используя инструмент ![](/images/PartDesign_Pocket.svg) [карман](/PartDesign_Pocket/ru "PartDesign Pocket/ru"), версия инструмента [Обрезать](/Part_Cut/ru "Part Cut/ru"). Чтобы сделать выемку, мы сделаем эскиз внизу нашего блока, который будет использовать для удаления части блока.
- При выбранной нижней гранью нажмите кнопку ![](/images/Sketcher_NewSketch.svg) [Создать эскиз](/Sketcher_NewSketch/ru "Sketcher NewSketch/ru").
- Рисуем в этом эскизе прямоугольник

![](/images/FreeCAD_Exercise1_TopFaceSketch.png)

- Теперь мы ограничим прямоугольник относительно нижней грани. Для этого нам нужно "импортировать" некоторые грани поверхности с помощью инструмента ![](/images/Sketcher_External.svg) [External geometry](/Sketcher_External/ru "Sketcher External/ru"). Примените этот инструмент к двум вертикальным линиям на нижней поверхности:

![](/images/FreeCAD_Exercise1_topCylPad.png)

Вы заметите, что этим инструментом могут быть добавлены только рёбра с базовой поверхности. Когда Вы создаёте эскиз с выбранной поверхностью, создается связь между ними, которая важна для дальнейших операций. Вы всегда можете позднее пересоединить эскиз к другой поверхности инструментом ![](/images/Sketcher_MapSketch.svg) [Разместить эскиз на грани](/Sketcher_MapSketch/ru "Sketcher MapSketch/ru").

![](/images/FreeCAD_Exercise1_topPattern.png)

- We will now carve the inside of the block, using the ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket") tool, which is the PartDesign version of [Part Cut](/Part_Cut "Part Cut"). To make a pocket, we will create a sketch on the bottom face of our block, which will be used to remove a part of the block.
- With the bottom face selected, press the ![](/images/PartDesign_NewSketch.svg) [New Sketch](/PartDesign_NewSketch "PartDesign NewSketch") button.
- Draw a ![](/images/Sketcher_CreateRectangle.svg) [Rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle") on the face.
- Apply a ![](/images/Sketcher_ConstrainSymmetric.svg) [symmetry constraint](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") by selecting the upper left corner point of the rectangle, then the origin point (the dot where the red and green axes intersect), and the lower right corner point.
- By using the [Image:Sketcher\_External.svg|16px]] [External geometry](/Sketcher_External "Sketcher External") choose the left edge of the bottom face. Notice again that it will be highlighted in red.
- Set the horizontal and vertical distance of the rectangle in regards to the upper right point to 1.8 by using the ![](/images/Sketcher_Dimension.svg) [automatic dimension](/Sketcher_Dimension "Sketcher Dimension") constraint.

![](/images/FreeCAD_Exercise1_BottomRec.png)

- Create three ![](/images/Sketcher_Circle.svg) [circles](/Sketcher_CreateCircle "Sketcher CreateCircle") by making sure their center is located on the X-axis (red line).
- By choosing all three circles apply an ![](/images/Sketcher_ConstrainEqual.svg) [equal constraint](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual").
- Set the diameter of one circle to 9.765mm.
- Set the center distance of the left circle in regards to the bottom edge of the rectangle we created before to 10.2mm.
- Set the distance between the left and middle circles to 12 mm. Repeat this step to set the same 12 mm distance between the middle and right circles

![](/images/FreeCAD_Exercise1_BottomOuterCirc.png)

- We are almost done.
- Create three additional ![](/images/Sketcher_Circle.svg) [circles](/Sketcher_CreateCircle "Sketcher CreateCircle") , ensuring that each new circle is concentric with one of the previously drawn circles. Alternatively, you can place the new circles anywhere in the sketch and use the ![](/images/Sketcher_ConstrainCoincident.svg) [coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") tool to align their centers with the centers of the existing circles.
- By choosing all three circles apply an ![](/images/Sketcher_ConstrainEqual.svg) [equal constraint](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual").
- Set the diameter of one circle to 7.2mm.
- You can now exit the sketch.

![](/images/FreeCAD_Exercise1_bottomSketchCom.png)

- By choosing the completed sketch use the ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket") tool setting the length to 12 mm.

![](/images/FreeCAD_Exercise1_BottomPad.png)

- This is it. Our brick is ready. If you wish to change its color, you can do so by going to the **View tab**.

![](/images/FreeCAD_Exercise1_redBrick2.png)

Теперь мы видим, что наша история моделирования (которая видна в древе проекта) стала довольно длинной. Это прекрасно, поскольку каждый шаг нашей работы может быть потом изменён. Адаптация этой модели для другого вида кирпичиков, например, на 2x2 точки вместо 2x4, будет проще пареной репы, нам только надо будет изменить пару размеров и число шагов в линейных массивах. Мы сможем так же легко создать большие элементы, которых нет в оригинальной игре Lego.

Но нам может понадобиться вычистить нашу историю, например, если мы собираемся смоделировать их этих кирпичиков замок, и нам не хочется, чтобы эта история повторялась в нашем файле сотни раз.

Есть два простых способа отбросить историю, один это использовать инструмент [Create simple copy](/Part_SimpleCopy/ru "Part SimpleCopy/ru") из [верстака Part](/Part_Workbench/ru "Part Workbench/ru"), который создаст независимую от истории копию нашего элемента (потом можно будет её даже удалить), другой путь - это экспортировать элемент в файл STEP и снова импортировать его.

**Загрузки**

- Созданная во время этого упражнения модель: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/lego.FCStd>

**Читать далее**

- [Эскизирование](/Sketcher_Workbench "Sketcher Workbench")
- [Верстак PartDesign](/PartDesign_Workbench "PartDesign Workbench")
- [Верстак Assembly2](https://github.com/hamish2014/FreeCAD_assembly2)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Modeling_for_product_design/ru&oldid=1538736>"
