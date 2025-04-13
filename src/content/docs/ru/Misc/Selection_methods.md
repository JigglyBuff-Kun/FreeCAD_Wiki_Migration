---
title: Методы выделения
---
## Обзор

Методы выбора в FreeCAD позволяют выбирать объекты в [интерфейсе FreeCAD](/Interface/ru "Interface/ru"): таких как [3D view](/3D_view/ru "3D view/ru"), [древе проекта](/Tree_view/ru "Tree view/ru"), [вид выбора](/Selection_view/ru "Selection view/ru") и других диалогах. Некоторые методы выбора зависят от конкретной рабочей среды и задокументированы в соответствующей документации по рабочей среде.

## Трёхмерный вид

В [трёхмерном виде](/3D_view/ru "3D view/ru") есть различные способы выбора объектов с помощью указателя мыши.

### Простое выделение

Простой выбор с помощью мыши (по умолчанию щелчок левой кнопкой мыши) и предварительный выбор (наведение курсора) описаны на странице [навигация с помощью мыши](/Mouse_Model/ru "Mouse Model/ru").

### Повторные клики

Первый щелчок выбирает подэлемент (вершину, кромку или грань) объекта под курсором мыши. Второй щелчок выделяет весь объект. [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

Третий щелчок расширяет выделение на объект-контейнер ([PartDesign Body](/PartDesign_Body/ru "PartDesign Body/ru"), [Std Part](/Std_Part/ru "Std Part/ru") и другие). Дальнейшие щелчки расширяют выбор вверх по цепочке контейнеров. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

### Команды выделения

Выбор перетаскиванием мышью для выбора нескольких объектов или подэлементов (вершин или граней) доступен с использованием [Std SelectAll](/Std_SelectAll/ru "Std SelectAll/ru"), [Std BoxSelection](/Std_BoxSelection/ru "Std BoxSelection/ru"), [Part BoxSelection](/Part_BoxSelection/ru "Part BoxSelection/ru") и [Std BoxElementSelection](/Std_BoxElementSelection/ru "Std BoxElementSelection/ru").

## Панель выделения

[Панель выделения](/Selection_view/ru "Selection view/ru") показывает имена выбираемых объектов, включая их полное имя внутри объекта, например `Unnamed#Body.Box001.Face17`.

It also allows to perform some actions like [Std ViewFitSelection](/Std_ViewFitSelection "Std ViewFitSelection"), and sending the object to the [Python console](/Python_console "Python console").

### Экспорт объектов

*This should be in the [selection view](/Selection_view "Selection view") page.*

Выберите любой сложный объект, например, [PartDesign Body](/PartDesign_Body/ru "PartDesign Body/ru") или [Std Part](/Std_Part/ru "Std Part/ru"), затем в [панели выделения](/Selection_view/ru "Selection view/ru") снова выберите объект, а затем нажмите Ctrl + C на клавиатуре, чтобы открыть диалоговое окно **Выбор объекта**. Это позволяет копировать выбранный объект вместе со всеми или только некоторыми объектами зависимостей этого объекта. Например, для [Std Part](/Std_Part/ru "Std Part/ru") возможные объекты для выбора включают сам [Std Part](/Std_Part/ru "Std Part/ru"), его начало координат, его три базовые оси (XYZ) и его три базовые плоскости (XY, YZ, XZ).

После нажатия OK выбранные объекты копируются в память, а затем могут быть вставлены в документ только для дублирования этих объектов.

![](/images/ObjectSelection.png)

Диалог выбора объекта, запускаемый из [панель выделения](/Selection_view/ru "Selection view/ru").

## Древо проекта

В [древе проекта](/Tree_view/ru "Tree view/ru") элементы можно выбирать или отменять по одному, удерживая клавишу Ctrl и щелкая мышью.

Ряд элементов можно выбрать, щелкнув первый элемент, удерживая Shift и щелкнув последний элемент.

Выбор отдельного элемента также покажет его свойства в [редакторе свойств](/Property_editor/ru "Property editor/ru").

Двойной щелчок откроет любую связанную [панель задач](/Task_panel/ru "Task panel/ru"), содержащую действия. Обязательно закройте эту панель задач перед выполнением другой команды или переключением на любую другую рабочую среду.

Дополнительные методы доступны при открытии контекстного меню (щелчок правой кнопкой мыши), в зависимости от выбранного объекта или активной рабочей среды; см. информацию в [древе проекта](/Tree_view/ru "Tree view/ru").

## Программирование

Выбор объектов по своей сути является графической задачей и поэтому доступен только тогда, когда графический интерфейс пользователя загружен.

Эти команды можно использовать в [макросе](/Macros/ru "Macros/ru") или из [консоли Python](/Python_console/ru "Python console/ru").

```
import FreeCADGui as Gui

Gui.Selection.addSelection
Gui.Selection.addSelectionGate
Gui.Selection.Filter

```

Команда `addSelectionGate` запрещает пользователю выбирать объекты, не указанные в строке выбора. Символ появляется, когда указатель находится над элементом, не входящим в указанную группу.

```
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Edge")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Face")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Vertex")

```

To remove `SelectionGate()`:

```
Gui.Selection.removeSelectionGate()

```

Смотрите [Документацию по исходным кодам](/Source_documentation/ru "Source documentation/ru") и [Std PythonHelp](/Std_PythonHelp/ru "Std PythonHelp/ru") для получения дополнительной помощи по использованию этих инструментов.

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_methods/ru&oldid=1268557>"