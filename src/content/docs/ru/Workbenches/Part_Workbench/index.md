---
title: Верстак Деталь
---

![](/images/Workbench_Part.svg)

Иконка верстака Part

## Введение

Верстак \*_Деталь_- ![](/images/Workbench_Part.svg) обеспечивает традиционный рабочий процесс в области [Конструктивной твердотельной геометрии](/Constructive_solid_geometry/ru "Constructive solid geometry/ru") (CSG). В этом рабочем процессе каждый объект представляет собой независимое твердое тело. Модуль Деталь может создавать их на основе параметрически определенных [Эскизов](/Sketcher_Workbench/ru "Sketcher Workbench/ru") с помощью таких инструментов, как [Выдавливание](/Part_Extrude/ru "Part Extrude/ru"), [Вращение](/Part_Revolve/ru "Part Revolve/ru"), [Лофт](/Part_Loft/ru "Part Loft/ru"), и т.д. Кроме того, можно создавать базовые примитивы, такие как [Куб](/Part_Box/ru "Part Box/ru"), [Цилиндр](/Part_Cylinder/ru "Part Cylinder/ru"), и т.д. Эти объекты можно комбинировать с помощью [Булевых операций](/Part_Boolean/ru "Part Boolean/ru"), для создания более сложных объектов.

Верстак Деталь также позволяет создавать объекты, не являющиеся твердыми телами, такие как грани, оболочки и объекты только с ребрами или вершинами. Он также предоставляет множество инструментов общего назначения для манипулирования геометрией, проверки правильности геометрии и создания копий.

В верстаке![](/images/Workbench_PartDesign.svg) [PartDesign (Проект детали)](/PartDesign_Workbench/ru "PartDesign Workbench/ru") используется альтернативный рабочий процесс для создания твердых тел. Их подробное сравнение приведено в разделе [Part and Part Design (Деталь и Проект Детали)](/Part_and_PartDesign/ru "Part and PartDesign/ru").

![](/images/Part_Workbench_Example.jpg)

## Инструменты

### Панель инструментов твердые тела

- ![](/images/Part_Box.svg) [Куб](/Part_Box/ru "Part Box/ru"): Создаёт твердотельный куб.

- ![](/images/Part_Cylinder.svg) [Цилиндр](/Part_Cylinder/ru "Part Cylinder/ru"): Создаёт твердотельный цилиндр.

- ![](/images/Part_Sphere.svg) [Сфера](/Part_Sphere/ru "Part Sphere/ru"): Создаёт твердотельную сферу.

- ![](/images/Part_Cone.svg) [Конус](/Part_Cone/ru "Part Cone/ru"): Создаёт твердотельный конус.

- ![](/images/Part_Torus.svg) [Тор](/Part_Torus/ru "Part Torus/ru"): Создаёт твердотельный тор (кольцо).

- ![](/images/Part_Tube.svg) [Труба](/Part_Tube/ru "Part Tube/ru"): Создаёт трубу.

- ![](/images/Part_Primitives.svg) [Примитивы](/Part_Primitives/ru "Part Primitives/ru"): Инструмент для создания одного из следующих примитивов:

- ![](/images/Part_Plane.svg) [Плоскость](/Part_Plane/ru "Part Plane/ru"): Создаёт плоскость.

- ![](/images/Part_Box.svg) [Куб](/Part_Box/ru "Part Box/ru"): Создаёт куб (параллепипед). Этот объект также может быть создан с помощью инструмента [Куб](/Part_Box/ru "Part Box/ru").

- ![](/images/Part_Cylinder.svg) [Цилиндр](/Part_Cylinder/ru "Part Cylinder/ru"): Создаёт цилиндр. Этот объект также может быть создан с помощью инструмента [Цилиндр](/Part_Cylinder/ru "Part Cylinder/ru").

- ![](/images/Part_Cone.svg) [Конус](/Part_Cone/ru "Part Cone/ru"): Создаёт конус. Этот объект также может быть создан с помощью инструмента [Конус](/Part_Cone/ru "Part Cone/ru").

- ![](/images/Part_Sphere.svg) [Сфера](/Part_Sphere/ru "Part Sphere/ru"): Создаёт сферу. Этот объект также может быть создан с помощью инструмента [Сфера](/Part_Sphere/ru "Part Sphere/ru").

- ![](/images/Part_Ellipsoid.svg) [Эллипсоид](/Part_Ellipsoid/ru "Part Ellipsoid/ru"): Создаёт эллипсоид.

- ![](/images/Part_Torus.svg) [Тор](/Part_Torus/ru "Part Torus/ru"): Создаёт тор. Этот объект также может быть создан с помощью инструмента [Тор](/Part_Torus/ru "Part Torus/ru").

- ![](/images/Part_Prism.svg) [Призма](/Part_Prism/ru "Part Prism/ru"): Создаёт призму.

- ![](/images/Part_Wedge.svg) [Клин](/Part_Wedge/ru "Part Wedge/ru"): Создаёт клин.

- ![](/images/Part_Helix.svg) [Спираль винтовая](/Part_Helix/ru "Part Helix/ru"): Создаёт винтовую спираль.

- ![](/images/Part_Spiral.svg) [Спираль плоская](/Part_Spiral/ru "Part Spiral/ru"): Создаёт плоскую спираль.

- ![](/images/Part_Circle.svg) [Окружность](/Part_Circle/ru "Part Circle/ru"): Создаёт круглое ребро.

- ![](/images/Part_Ellipse.svg) [Эллипс](/Part_Ellipse/ru "Part Ellipse/ru"): Создаёт эллиптическое ребро.

- ![](/images/Part_Point.svg) [Точка](/Part_Point/ru "Part Point/ru"): Создаёт точку (вершину).

- ![](/images/Part_Line.svg) [Отрезок](/Part_Line/ru "Part Line/ru"): Создаёт отрезок (ребро).

- ![](/images/Part_RegularPolygon.svg) [Правильный Многоугольник](/Part_RegularPolygon/ru "Part RegularPolygon/ru"): Создаёт правильный многоугольник.

- ![](/images/Part_Builder.svg) [Построитель](/Part_Builder/ru "Part Builder/ru"): Создаёт формы из разнообразных примитивов.

### Панель инструментов для обработки деталей

- ![](/images/Sketcher_NewSketch.svg) [Создать эскиз](/Sketcher_NewSketch/ru "Sketcher NewSketch/ru"): Создаёт новый эскиз и открывает [Диалоговое окно Эскиза](/Sketcher_Dialog/ru "Sketcher Dialog/ru") для его редактирования.

- ![](/images/Part_Extrude.svg) [Выдавить](/Part_Extrude/ru "Part Extrude/ru"): Выдавливает (вытягивает) плоские грани.

- ![](/images/Part_Revolve.svg) [Вращать](/Part_Revolve/ru "Part Revolve/ru"):Создаёт твёрдое тело, вращая объект (не твёрдое тело) вокруг оси.

- ![](/images/Part_Mirror.svg) [Отразить зеркально](/Part_Mirror/ru "Part Mirror/ru"): Отражает выбранный объект относительно зеркальной плоскости.

- ![](/images/Part_Scale.svg) [Масштабировать](/Part_Scale/ru "Part Scale/ru"): Масштабирует одну или несколько фигур. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Part_Fillet.svg) [Скругление](/Part_Fillet/ru "Part Fillet/ru"): Закругляет края объекта.

- ![](/images/Part_Chamfer.svg) [Фаска](/Part_Chamfer/ru "Part Chamfer/ru"): Делает фаску на рёбрах объекта.

- ![](/images/Part_MakeFace.svg) [Создать грань из ломанных](/Part_MakeFace/ru "Part MakeFace/ru"): Создаёт грань из набора ломанных (рёбер или контуров).

- ![](/images/Part_RuledSurface.svg) [Линейчатая поверхность](/Part_RuledSurface/ru "Part RuledSurface/ru"): Создаёт линейчатую поверхность.

- ![](/images/Part_Loft.svg) [Лофт](/Part_Loft/ru "Part Loft/ru"): Построение профиля методом перехода от одного эскиза к другому.

- ![](/images/Part_Sweep.svg) [Развёртка](/Part_Sweep/ru "Part Sweep/ru"): Переносит (проецирует) один или несколько профилей вдоль траектории.

- ![](/images/Part_Section.svg) [Разделить](/Part_Section/ru "Part Section/ru"): Обрезает объект по поверхности пересечения секущего объекта.

- ![](/images/Part_CrossSections.svg) [Поперечные сечения...](/Part_CrossSections/ru "Part CrossSections/ru"): Создаёт одно или несколько поперечных сечений через весь объект.

- ![](/images/Part_Offset.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Смещение:

- ![](/images/Part_Offset.svg) [Cмещение 3D](/Part_Offset/ru "Part Offset/ru"): Строит поверхность, равноудалённую на заданном расстоянии, от поверхности оригинального объекта.

- ![](/images/Part_Offset2D.svg) [2D смещение](/Part_Offset2D/ru "Part Offset2D/ru"): Строит контур, равноудалённый на заданное расстояние, от оригинала или увеличивает/сжимает плоскую грань.

- ![](/images/Part_Thickness.svg) [Толщина](/Part_Thickness/ru "Part Thickness/ru"): Делает твёрдое тело пустотелым.

- ![](/images/Part_ProjectionOnSurface.svg) [Проекция на поверхность](/Part_ProjectionOnSurface/ru "Part ProjectionOnSurface/ru"): Проецирует логотип, текст или любую поверхность, контур или ребро на поверхность.

- ![](/images/Part_FaceColors.svg) [Установить цвет грани](/Part_FaceColors/ru "Part FaceColors/ru"): Назначает цвета отдельным граням объектов.

### Булевы операции

- ![](/images/Part_Compound.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Сгруппировать:

- ![](/images/Part_Compound.svg) [Создать соединение](/Part_Compound/ru "Part Compound/ru"): Создаёт объект, соединяющий в себе выбранные объекты.

- ![](/images/Part_ExplodeCompound.svg) [Разгруппировать объединение](/Part_ExplodeCompound/ru "Part ExplodeCompound/ru"): Разъединяет объекты на составные элементы более низкого уровня.

- ![](/images/Part_CompoundFilter.svg) [Фильтр компонентов](/Part_CompoundFilter/ru "Part CompoundFilter/ru"): Извлекает отдельные компоненты из объектов.

- ![](/images/Part_Boolean.svg) [Булевы](/Part_Boolean/ru "Part Boolean/ru"): Производит булевы (логические) операции над объектами.

- ![](/images/Part_Cut.svg) [Обрезать](/Part_Cut/ru "Part Cut/ru"): Вырезает (вычитает) один объект из другого.

- ![](/images/Part_Fuse.svg) [Объединить](/Part_Fuse/ru "Part Fuse/ru"): Объединяет (сплавляет) два объекта.

- ![](/images/Part_Common.svg) [Пересечь](/Part_Common/ru "Part Common/ru"): Извлекает общую (пересекающуюся) часть двух объектов.

- ![](/images/Part_JoinConnect.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Соединить:

- ![](/images/Part_JoinConnect.svg) [Connect (Соединить)](/Part_JoinConnect/ru "Part JoinConnect/ru"): Соединяет полые объекты с усечением лишних внутренних поверхностей.

- ![](/images/Part_JoinEmbed.svg) [Embed (Внедрить)](/Part_JoinEmbed/ru "Part JoinEmbed/ru"): Внедряет один полый объект в другой полый объект.

- ![](/images/Part_JoinCutout.svg) [Cutout (Вырезать)](/Part_JoinCutout/ru "Part JoinCutout/ru"): Создаёт вырез в стенке полого объекта для другого полого объекта.

- ![](/images/Part_BooleanFragments.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Разделить:

- ![](/images/Part_BooleanFragments.svg) [Булево разделение (на фрагменты)](/Part_BooleanFragments/ru "Part BooleanFragments/ru"): Создаёт все фрагменты, которые могут быть получены булевыми операциями между объектами.

- ![](/images/Part_SliceApart.svg) [Разрезать на части](/Part_SliceApart/ru "Part SliceApart/ru"): Разрезает и разбивает объект, путём его пересечения с другими объектами.

- ![](/images/Part_Slice.svg) [Разрезать и сгруппировать](/Part_Slice/ru "Part Slice/ru"): Разрезает объект, пересекая его с другими объектами образуя объединение.

- ![](/images/Part_XOR.svg) [Булева XOR](/Part_XOR/ru "Part XOR/ru"): Удаляет пространство, общее для пересекаемых объектов.

- ![](/images/Part_CheckGeometry.svg) [Проверка геометрии](/Part_CheckGeometry/ru "Part CheckGeometry/ru"): Проверяет геометрию выбранных объектов на ошибки.

- ![](/images/Part_Defeaturing.svg) [Удаление элемента](/Part_Defeaturing/ru "Part Defeaturing/ru"): Удаляет применённые функции (features) построения из объекта.

### Прочие инструменты

- ![](/images/Part_Import.svg) [Импорт CAD...](/Part_Import/ru "Part Import/ru"): Импорт в текущий документ файлов типа \*.IGES, \*.STEP или \*.BREP.

- ![](/images/Part_Export.svg) [Экспорт CAD...](/Part_Export/ru "Part Export/ru"): Экспортирует деталь в файлы типа \*.IGES, \*.STEP или \*.BREP.

- ![](/images/Part_BoxSelection.svg) [Выделение прямоугольной область](/Part_BoxSelection/ru "Part BoxSelection/ru"): Позволяет выбирать грани прямоугольной областью.

- ![](/images/Part_ShapeFromMesh.svg) [Создание оболочки из сетки](/Part_ShapeFromMesh/ru "Part ShapeFromMesh/ru"): Создаёт оболочку из полигональной сетки.

- ![](/images/Part_PointsFromMesh.svg) [Точки из сетки](/Part_PointsFromMesh/ru "Part PointsFromMesh/ru"): Создаёт объект в виде массива точек из полигональной сетки.

- ![](/images/Part_MakeSolid.svg) [Преобразовать в твёрдое](/Part_MakeSolid/ru "Part MakeSolid/ru"): Преобразует оболочку в твёрдое тело.

- ![](/images/Part_ReverseShape.svg) [Вывернуть оболочку](/Part_ReverseShape/ru "Part ReverseShape/ru"): Создаёт параметрические копии с обращенными нормалями граней из выбранных объектов.

- Создать копию:

- ![](/images/Part_SimpleCopy.svg) [Создать простую копию](/Part_SimpleCopy/ru "Part SimpleCopy/ru"): Создаёт непараметрические копии объектов.

- ![](/images/Part_TransformedCopy.svg) [Создать преобразованную копию](/Part_TransformedCopy/ru "Part TransformedCopy/ru"): Создаёт непараметрические копии объектов. Предназначен для объектов, вложенных в контейнеры.

- ![](/images/Part_ElementCopy.svg) [Создать копию элемента формы](/Part_ElementCopy/ru "Part ElementCopy/ru"): Создаёт непараметрические копии субэлементов: вершин, рёбер и граней.

- ![](/images/Part_RefineShape.png) [Улучшить форму](/Part_RefineShape/ru "Part RefineShape/ru"): Создаёт параметрические копии с уточнённой (очищенной) формой из выбранных объектов. Удаляет ненужные грани с плоских и цилиндрических поверхностей.

- ![](/images/Part_EditAttachment.svg) [Присоединение...](/Part_EditAttachment/ru "Part EditAttachment/ru"): Прикрепляет/фиксирует объект к одному или нескольким другим объектам.

## Устаревшие инструменты

### Измерение

Инструмент ![](/images/Std_Measure.svg) [Стандартное измерение](/Std_Measure/ru "Std Measure/ru") заменяет инструменты, перечисленные ниже. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Part_Measure_Linear.svg) [Измерить Длину](/Part_Measure_Linear/ru "Part Measure Linear/ru") Создаёт линейное изменение. Не доступно для версии 1.0 и выше.

- ![](/images/Part_Measure_Angular.svg) [Измерить Угол](/Part_Measure_Angular/ru "Part Measure Angular/ru"): Создаёт угловое измерение. Не доступно для версии 1.0 и выше.

- ![](/images/Part_Measure_Refresh.svg) [Обновить Измерение](/Part_Measure_Refresh/ru "Part Measure Refresh/ru"): Обновляет все измерения. Не доступно для версии 1.0 и выше.

- ![](/images/Part_Measure_Clear_All.svg) [Очистить Всё](/Part_Measure_Clear_All/ru "Part Measure Clear All/ru"): Удаляет все измерения. Не доступно для версии 1.0 и выше.

- ![](/images/Part_Measure_Toggle_All.svg) [Переключить Всё](/Part_Measure_Toggle_All/ru "Part Measure Toggle All/ru"): Показать или скрыть все измерения. Не доступно для версии 1.0 и выше.

- ![](/images/Part_Measure_Toggle_3D.svg) [Переключить 3D](/Part_Measure_Toggle_3D/ru "Part Measure Toggle 3D/ru"): Показать или скрыть трёхмерные измерения. Не доступно для версии 1.0 и выше.

- ![](/images/Part_Measure_Toggle_Delta.svg) [Переключить Дельту](/Part_Measure_Toggle_Delta/ru "Part Measure Toggle Delta/ru"): Показывает или скрывает результаты разностных измерений. Не доступно для версии 1.0 и выше.

## Настройки

- ![](/images/Preferences-part_design.svg) [Настройки](/PartDesign_Preferences/ru "PartDesign Preferences/ru"): Настройки верстака Деталь
- ![](/images/Preferences-import-export.svg) [Настройки импорта-экспорта](/Import_Export_Preferences/ru "Import Export Preferences/ru"): Настройки для импорта и экспорта в различные форматы файлов.
- [Тонкая настройка](/Fine-tuning/ru "Fine-tuning/ru"): Некоторые дополнительные параметры для тонкой настройки работы верстака Деталь.

## Программирование

Смотри [Создание сценариев (скриптов) модуля Part](/Part_scripting/ru "Part scripting/ru")

## Учебники

- [Импорт из STL или OBJ](/Import_from_STL_or_OBJ/ru "Import from STL or OBJ/ru") : Как импортировать файлы STL/OBJ в FreeCAD
- [Экспорт в STL или OBJ](/Export_to_STL_or_OBJ/ru "Export to STL or OBJ/ru") : Как экспортировать в FreeCAD файлы STL/OBJ
- [Whiffle Ball (Шарик вдохновения) руководство](/Whiffle_Ball_tutorial/ru "Whiffle Ball tutorial/ru") : Как использовать модуль Part

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Workbench/ru&oldid=1558714>"
