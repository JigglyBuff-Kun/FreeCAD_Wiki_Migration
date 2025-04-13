---
title: Эскиз
---
## Введение

В FreeCAD слово "Эскиз" обычно используется для обозначения [Sketcher SketchObject](/Sketcher_SketchObject/ru "Sketcher SketchObject/ru") (`Sketcher::SketchObject` класс), который определяется [Верстаком Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru"). Это 2D-чертеж, который использует математические ограничения для точного описания 2D-геометрии.

Дополнительные сведения об этом типе объектов см. в разделе [Sketcher SketchObject](/Sketcher_SketchObject/ru "Sketcher SketchObject/ru").

## Применение

Существует два наиболее распространенных способа создания эскиза: непосредственно с помощью [верстака Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") или через [верстак PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru").

### Верстак Sketcher

1. Переключитесь на ![](/images/Workbench_Sketcher.svg) [верстак Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru").
2. Нажмите на ![](/images/Sketcher_NewSketch.svg) [Создать новый эскиз](/Sketcher_NewSketch/ru "Sketcher NewSketch/ru").

### Верстак PartDesign

1. Переключитесь на ![](/images/Workbench_PartDesign.svg) [Верстак PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru").
2. Нажмите на ![](/images/PartDesign_Body.svg) [Создать новое тело](/PartDesign_Body/ru "PartDesign Body/ru").
3. Нажмите на ![](/images/PartDesign_NewSketch.svg) [Создать эскиз](/PartDesign_NewSketch/ru "PartDesign NewSketch/ru").

После завершения редактирования эскиза закройте его, чтобы выйти из режима редактирования. Дважды щёлкните по нему, чтобы снова войти в режим редактирования.

## Примечания

Эскиз обычно используется вместе с ![](/images/Workbench_PartDesign.svg) [верстаком PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") для создания твёрдых тел выдавливанием, используя операцию ![](/images/PartDesign_Pad.svg) [Выдавить выбранный эскиз](/PartDesign_Pad/ru "PartDesign Pad/ru").

Тем не менее, Эскиз(Sketch) всегда может быть создан сам по себе для любой другой цели; он не обязан быть привязан к [Создать новое тело](/PartDesign_Body/ru "PartDesign Body/ru") верстака PartDesign. Например, инструмент ![](/images/Arch_Window.svg) [Arch Window(Окно)](/Arch_Window "Arch Window") в ![](/images/Workbench_Arch.svg) [Верстаке Arch](/Arch_Workbench "Arch Workbench") использует эскизы для определения формы окон и дверей; точно так же эскиз может быть использован для определения формы ![](/images/Arch_Wall.svg) [Arch Walls(Стен)](/Arch_Wall "Arch Wall").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketch/ru&oldid=1457024>"