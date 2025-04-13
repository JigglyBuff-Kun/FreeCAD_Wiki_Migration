---
title: Верстаки
---

FreeCAD, подобно многим современным приложениям для проектирования, таким как [Revit](//ru.wikipedia.org/wiki/Revit) или [CATIA](//ru.wikipedia.org/wiki/CATIA), базируется на концепции [верстаков](//ru.wikipedia.org/wiki/Верстак). Верстаки можно рассматривать как набор инструментов, специально сгруппированных под определенные задачи. В традиционных мебельных мастерских, вы имели бы рабочий стол для человека работающего с деревом, другой для работающего с металлическими частями, и, возможно, третий для того, который монтирует все это вместе.

Тоже самое относится и к FreeCAD. Инструменты сгруппированы в верстаки в соответствии с задачами, к которым они относятся.

Когда вы переключаетесь с одного верстака на другой, доступные в интерфейсе инструменты меняются. Панели инструментов, командные панели и, возможно, другие части интерфейса, переключаются на новый инструментарий, но содержание вашей сцены не меняется. Вы могли бы, например, начать рисовать 2D форму в Чертежном инструментарии, а дальше работать над ней в инструментарии Деталей.

Следует отметить, что иногда верстаки называют _модулями_. Однако, стоит отметить, что верстаки и модули это разные понятия. Модуль - это любое расширение FreeCAD, в то время как Верстак - это специальный тип модуля со своей собственной конфигурацией графического интерфейса (панели инструментов и меню).

## Встроенные верстаки

### Current

Следующие верстаки идут в комплекте с каждой установкой FreeCAD:

- ![](/images/Freecad.svg) [Стандартные инструменты](/Std_Base/ru "Std Base/ru"). На самом деле это не верстак, а скорее категория 'стандартных' команд и инструментов, которые можно использовать на всех верстаках.

- ![](/images/Workbench_Assembly.svg) The [Assembly Workbench](/Assembly_Workbench "Assembly Workbench") for building and solving mechanical assemblies. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) The [BIM Workbench](/BIM_Workbench "BIM Workbench") for working with architectural elements and creating [BIM](https://en.wikipedia.org/wiki/Building_information_modeling) models. It combines the Arch Workbench and the formerly external BIM Workbench available in 0.21 and below.

- ![](/images/Workbench_CAM.svg) The [CAM Workbench](/CAM_Workbench "CAM Workbench") is used to produce G-Code instructions. This workbench was called "Path Workbench" in 0.21 and below.

- ![](/images/Workbench_Draft.svg) [Верстак Draft](/Draft_Workbench/ru "Draft Workbench/ru") содержит 2D-инструменты и основные операции 2D и 3D CAD.

- ![](/images/Workbench_FEM.svg) [Верстак FEM](/FEM_Workbench/ru "FEM Workbench/ru") обеспечивает рабочий процесс анализа Методом Конечных Элементов (МКЭ).

- ![](/images/Workbench_Inspection.svg) [Верстак Inspection](/Inspection_Workbench/ru "Inspection Workbench/ru") сделан для того, чтобы дать вам специфические инструменты для осмотра форм. Он всё ещё находится в стадии разработки.

- ![](/images/Workbench_Material.svg) The [Material Workbench](/Material_Workbench "Material Workbench") handles the FreeCAD material system. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_Mesh.svg) [Верстак Mesh](/Mesh_Workbench/ru "Mesh Workbench/ru") для работы с триангулярными (разбитыми на треугольники) сетками.

- ![](/images/Workbench_OpenSCAD.svg) [Верстак OpenSCAD](/OpenSCAD_Workbench/ru "OpenSCAD Workbench/ru") обеспечивает совместимость с OpenSCAD и восстановление истории модели [конструктивной твердотельной геометрии](/Constructive_solid_geometry/ru "Constructive solid geometry/ru") (CSG).

- ![](/images/Workbench_Part.svg) [Верстак Part](/Part_Workbench/ru "Part Workbench/ru") для работы с деталями САПР.

- ![](/images/Workbench_PartDesign.svg) [Верстак Part Design](/PartDesign_Workbench/ru "PartDesign Workbench/ru") для построения фигур деталей из эскизов.

- ![](/images/Workbench_Points.svg) [Верстак Points](/Points_Workbench/ru "Points Workbench/ru") для работы с облаками точек.

- ![](/images/Workbench_Reverse_Engineering.svg) [Верстак Reverse Engineering](/Reverse_Engineering_Workbench/ru "Reverse Engineering Workbench/ru") предназначен для предоставления специальных инструментов для преобразования форм/тел/сеток в параметрические элементы, совместимые с FreeCAD. Он все ещё находится в стадии разработки.

- ![](/images/Workbench_Robot.svg) [Верстак Robot](/Robot_Workbench/ru "Robot Workbench/ru") для изучения движений робота.

- ![](/images/Workbench_Sketcher.svg) [Верстак Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") для работы с геометрически ограниченными эскизами.

- ![](/images/Workbench_Spreadsheet.svg) [Верстак Spreadsheet](/Spreadsheet_Workbench/ru "Spreadsheet Workbench/ru") для создания и обработки данных электронной таблицы.

- ![](/images/Workbench_Surface.svg) [Верстак Surface](/Surface_Workbench/ru "Surface Workbench/ru") предоставляет инструменты для создания и изменения поверхностей. Он похож на опцию Грань из отрезков [Построителя Форм](/Part_Builder/ru "Part Builder/ru").

- ![](/images/Workbench_TechDraw.svg) [Верстак TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") для создания технических чертежей из 3D-моделей. Это преемник [Верстака Drawing](/Drawing_Workbench/ru "Drawing Workbench/ru").

- ![](/images/Workbench_Test.svg) [Верстак Test Framework](/Testing/ru "Testing/ru") предназначен для отладки FreeCAD.

### Obsolete

The following workbenches are no longer included after version 0.21:

- ![](/images/Workbench_Start.svg) [Верстак Start Center](/Start_Workbench/ru "Start Workbench/ru") позволяет быстро перейти к одному из наиболее распространённых верстаков.

- ![](/images/Workbench_Web.svg) [Верстак Web](/Web_Workbench/ru "Web Workbench/ru") предоставляет окно браузера вместо [3D вида](/3D_view/ru "3D view/ru") FreeCAD.

The following workbenches are no longer included after version 0.20:

- ![](/images/Workbench_Drawing.svg) [Верстак Drawing](/Drawing_Workbench/ru "Drawing Workbench/ru") использовался для изготовления технических чертежей, но в настоящее время устарел. По-прежнему необходимо читать старые файлы FreeCAD, содержащие объекты, созданные с помощью этого верстака. [Верстак TechDraw](/TechDraw_Workbench/ru "TechDraw Workbench/ru") является его более продвинутой заменой. [obsolete in 0.17](/Release_notes_0.17 "Release notes 0.17")

- ![](/images/Workbench_Image.svg) [Верстак Image](/Image_Workbench/ru "Image Workbench/ru") для работы с растровыми изображениями.

- ![](/images/Workbench_Raytracing.svg) [Верстак Raytracing](/Raytracing_Workbench/ru "Raytracing Workbench/ru") для работы с трассировкой лучей (рендеринг).

## Внешние верстаки

Верстаки FreeCAD легко программируются в [Python](/Python/ru "Python/ru"), поэтому многие разрабатывают дополнительные верстаки вне кодовой базы FreeCAD.

Страница [внешние верстаки](/External_workbenches/ru "External workbenches/ru") перечисляет все известные сообществу. Большинство из них легко устанавливается из FreeCAD, используя [Addon Manager](/Std_AddonMgr/ru "Std AddonMgr/ru") через меню **Инструменты → ![](/images/Std_AddonMgr.svg) Addon manager**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/ru&oldid=1442638>"
