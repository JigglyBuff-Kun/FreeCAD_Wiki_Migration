---
title: Конструктивная твердотельная геометрия
---
## Введение

[Конструктивная Твердотельная Геометрия](https:///ru.wikipedia.org/wiki/Конструктивная_сплошная_геометрия) (**КТГ**) это парадигма моделирования, которая используется во многих традиционных CAD-системах. По сути, она состоит из использования примитивных твёрдых объектов и выполнения над ними логических операций, таких как слияние, вычитание и пересечение, для создания окончательной формы.

Во FreeCAD этот метод в основном используется с ![](/images/Workbench_Part.svg) [Верстаком Part](/Part_Workbench/ru "Part Workbench/ru"), он позволяет создавать примитивные объекты, такие как ![](/images/Part_Box.svg) [кубы](/Part_Box/ru "Part Box/ru"), ![](/images/Part_Cylinder.svg) [цилиндры](/Part_Cylinder/ru "Part Cylinder/ru"), и ![](/images/Part_Sphere.svg) [сферы](/Part_Sphere/ru "Part Sphere/ru"), и соединять их вместе или использовать для обрезки других объектов с помощью инструментов, таких как ![](/images/Part_Cut.svg) [Обрезать](/Part_Cut/ru "Part Cut/ru").

![](/images/Part_Constructive_Solid_Geometry_workflow.svg)

Рабочий процесс конструктивной твердотельной геометрии (КТГ); с этими примитивами можно выполнить любое количество операций, чтобы создать другие твердотельные объекты, а затем соединить их или обрезать, пока не будет получена окончательная форма.

В качестве альтернативы ![](/images/Workbench_PartDesign.svg) [Верстак PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") использует более современный подход, чем простой КТГ; этот метод называется редактированием объектов с помощью [функций редактирования](/Feature_editing/ru "Feature editing/ru"), что означает создание базового твёрдого тела, а затем добавление последовательных параметрических преобразований для получения конечного тела.

*Примечание:* [Тела](/PartDesign_Body/ru "PartDesign Body/ru"), созданные с помощью [верстака PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru"), также могут учавствовать в логических операциях с другими объектами верстака **Part**.

## Пример

![](/images/Part_CGS_workflow_example.svg)

Пример рабочего процесса конструктивной твердотельной геометрии (КТГ): примитивные части соединяются (объединение/union); вычисляется пересечение двух других примитивных частей (пересечение/common); и как итог, получается разность (вычитание/cut) двух предыдущих фигур.

## Учебники

На странице [Учебники/Tutorials](/Tutorials/ru "Tutorials/ru") приведены некоторые примеры создания твёрдых тел с помощью ![](/images/Workbench_Part.svg) [Верстака Part](/Part_Workbench/ru "Part Workbench/ru") который использует метод **КТГ**.

* [Традиционное моделирование методом КБГ](/Manual:Traditional_modeling,_the_CSG_way/ru "Manual:Traditional modeling, the CSG way/ru")
* [Wiffle ball (шарик дуновения) руководство](/Whiffle_Ball_tutorial/ru "Whiffle Ball tutorial/ru")
* [Руководство по базовому моделированию](/Basic_modeling_tutorial/ru "Basic modeling tutorial/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Constructive_solid_geometry/ru&oldid=1231020>"