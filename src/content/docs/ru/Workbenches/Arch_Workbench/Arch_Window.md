---
title: Arch Окно
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Окно |
| Расположение в меню |
| Архитектура → Окно |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| W I |
| Представлено в версии |
| - |
| См. также |
| [Стена](/Arch_Wall/ru "Arch Wall/ru"), [Добавить компонент](/Arch_Add/ru "Arch Add/ru") |
|  |

## Описание

Arch Window (окно) это базовый объект для всех типов "внедряемых" объектов, таких как окна, двери и т.д... Он спроектирован так, что может быть и независим, и "базироваться" на другом компоненте вроде [стены](/Arch_Wall/ru "Arch Wall/ru"), [структуры](/Arch_Structure/ru "Arch Structure/ru"), или [крыши](/Arch_Roof/ru "Arch Roof/ru"). У него своя собственная геометрия, которая может быть сделана из нескольких твердотельных компонентов (обычно оконная рама и внутренняя панель), и определяет объём, которые будет вычитаться из базового объекта, чтобы сделать проём.

Объекты Window базируются на замкнутых двумерных объектах, вроде [прямоугольников](/Draft_Rectangle/ru "Draft Rectangle/ru") или [эскизов](/Sketcher_Workbench "Sketcher Workbench"), которые используются для определения их внутренних компонентов. Базовые двумерные объекты должны, следовательно, содержать несколько замкнутых многоугольников, которые могут быть скомбинированы для создания заполненных панелей (один многоугольник) или рамок (несколько многоугольников).

Инструмент Window предлагает несколько **предустановок**, это позволяют пользователю создать общие типы окон и дверей с некоторыми редактируемыми параметрами, без необходимости создавать вручную двумерные объекты и компоненты.

Вся информация, применимая к Arch Window, также относится к [Arch Door](/Arch_Door/ru "Arch Door/ru"), поскольку это один и тот же базовый объект. Основное различие между окном и дверью состоит в том, что у двери есть внутренняя панель, которая показана непрозрачной (сама дверь), в то время как окно имеет частично прозрачную панель (стекло).

![](/images/Arch_Window_example2.jpg)

Более сложное окно, созданное на базе [эскиза](/Sketcher_Workbench "Sketcher Workbench"). При входе в режим редактирования окна, Вы можете создать различные компоненты, установить их толщину, и выделить и назначить многоугольники из эскиза для них.

## Применение

### Применение предустановок

1. Нажмите кнопку ![](/images/Arch_Window.svg) Окно, или нажмите клавиши W, затем I
2. Выберите предустановку из списка
3. Заполните желаемые параметры
4. В [трёхмерном просмотре](/3D_view/ru "3D view/ru") переместите окно в то место, где вы хотите его разместить. Если вы наведете указатель на [Arch Wall](/Arch_Wall/ru "Arch Wall/ru"), контур окна должен выровняться относительно лицевой стороны этого объекта.
5. Щелкните мышью на [трёхмерном просмотре](/3D_view/ru "3D view/ru") или трижды нажмите клавишу Enter, чтобы подтвердить координаты X, Y, Z места размещения.

#### Additional presets

In addition to the default presets, the window tool can also use custom presets. A custom preset is a FreeCAD file containing a single window based on a parametric sketch that has two named constrains: `Width` and `Height`. Custom presets can be placed in the following locations:

The window tool will always search this pair of locations:

$ROOT\_DIR/Arch/Doors/Custom/  
$ROOT\_DIR/Arch/Windows/Custom/

If you install the [Parts Library](/Parts_Library_Workbench "Parts Library Workbench") from the [Addon Manager](/Std_AddonMgr "Std AddonMgr"), the window tool will also search this library for additional presets at this pair of locations:

$ROOT\_DIR/Mod/parts\_library/Architectural Parts/Doors/Custom/  
$ROOT\_DIR/Mod/parts\_library/Architectural Parts/Windows/Custom/

* The $ROOT\_DIR is the user directory where FreeCAD configuration files, macros, and external workbenches are stored. It can be found be entering `FreeCAD.getUserAppDataDir()` in the [Python console](/Python_console "Python console").
  + On Linux it is usually /home/username/.local/share/FreeCAD/
  + On Windows it is usually C:\Users\username\Application Data\FreeCAD\
  + On Mac OSX it is usually /Users/username/Library/Preferences/FreeCAD/
* The subdirectory name Custom is just a suggestion, any name can be used. But the files must be placed in one or more subdirectories inside the Doors or Windows directories.

Custom presets will be available in the window tool's presets dropdown menu. Presets in library locations will also be available in the Parts Library dialog.

### Создание с нуля

1. По желанию, выделите грань объекта, где Вы хотите вставить окно
2. Переключитесь на [верстак Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru")
3. Создайте новый эскиз
4. Нарисуйте одну или более замкнутых ломаных (петель)
5. Закройте эскиз
6. Переключитесь обратно на [верстак Arch](/Arch_Workbench/ru "Arch Workbench/ru")
7. Нажмите кнопку ![](/images/Arch_Window.svg) Arch Window, или нажмите клавиши W, затем I
8. Чтобы настроить компоненты окна и различные свойства, войдите в окно [панели задач](/Task_panel/ru "Task panel/ru"), дважды щелкнув созданный объект в [древе проекта](/Tree_view/ru "Tree view/ru").

## Предустановки

Доступны следующие предустановки:

* [![Glass door (стеклянная дверь)](/images/ParametersDoorGlass.svg)](/File:ParametersDoorGlass.svg  "Glass door (стеклянная дверь)")

  Glass door (стеклянная дверь)
* [![Simple door (простая дверь)](/images/ParametersDoorSimple.svg)](/File:ParametersDoorSimple.svg  "Simple door (простая дверь)")

  Simple door (простая дверь)
* [![Double-opening window (двустворчатое окно)](/images/ParametersWindowDouble.svg)](/File:ParametersWindowDouble.svg  "Double-opening window (двустворчатое окно)")

  Double-opening window (двустворчатое окно)
* [![Fixed window (глухое окно)](/images/ParametersWindowFixed.svg)](/File:ParametersWindowFixed.svg  "Fixed window (глухое окно)")

  Fixed window (глухое окно)
* [![Single-opening window (одностворчатое окно)](/images/ParametersWindowSimple.svg)](/File:ParametersWindowSimple.svg  "Single-opening window (одностворчатое окно)")

  Single-opening window (одностворчатое окно)
* [![Sash-opening window (сдвижное окно)](/images/ParametersWindowStash.svg)](/File:ParametersWindowStash.svg  "Sash-opening window (сдвижное окно)")

  Sash-opening window (сдвижное окно)

## Создание компонентов

Окна могут включать 3 типа компонентов: панели, рамы и жалюзи. Панели и жалюзи делаются из замкнутых ломаных, которые выдавливаются, в то время как рамы делаются из двух и более замкнутых ломаных, где каждый выдавливается, затем меньший вычитается из большего. Вы можете иметь доступ, создавать, модифицировать и удалять компоненты в окне в режиме редактирования (дважды кликнув по окну в древе проекта). У компонента имеются следующие параметры:

* **Name**: имя компонента
* **Type**: тип компонента. Может быть "Frame", "Glass panel", "Solid panel" или "Louvres"
* **Wires**: разделяемый запятыми список ломаных, на которых базируется компонент
* **Thickness**: толщина выдавливания компонента
* **Z Offset**: расстояние между компонентом и его базовой ломанной
* **Hinge**: позволяет выбрать край базового 2D-объекта, а затем установить этот край в качестве места для петель этого компонента и следующих в списке.
* **Opening mode**: если вы определили край для петель в этом компоненте или любом другом ранее в списке, установка режима открытия позволит окну казаться открытым или отображать 2D-символы открытия в плане или на фасаде.

![](/images/Arch_Window_options.jpg)

## Опции

* Оборудование обладает такими же общими свойствами и моделью поведения, как и все остальные [компоненты верстака Arch](/Arch_Component/ru "Arch Component/ru")
* Если метка **Auto-include** на панели задач создания окна не снята, окно не будет вмонтировано ни в один несущий объект при его создании.
* Добавить выделенное окно в [стену](/Arch_Wall/ru "Arch Wall/ru"), выделив оба и нажатием кнопки ![](/images/Arch_Add.svg) [Arch Add](/Arch_Add/ru "Arch Add/ru").
* Убрать выбранное окно из [стены](/Arch_Wall/ru "Arch Wall/ru") выделив окно, затем нажав кнопку ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove/ru "Arch Remove/ru").
* При использовании предустановок часто полезно включить [привязку](/Draft_Snap/ru "Draft Snap/ru") "Near", чтобы Вы смогли привязать окно к существующей грани.
* Отверстие, создаваемое окном в базовом объекте, определяется двумя параметрами: Данные**Hole Depth** и Данные**Hole Wire** ([представлено в версии 0.17](/Release_notes_0.17/ru "Release notes 0.17/ru")). Число Hole Wire может быть получено в трёхмерном окне из панели задач окна, доступной при двойном клике на окне в древе проектов
* Окна могут использовать [Multi-Materials](/Arch_MultiMaterial/ru "Arch MultiMaterial/ru"). Окно ищет в присоединённом Multi-Material слои материала с теми же именами для каждого компонента окна, и используют их при нахождении. Например, компонент под названием "OuterFrame" ищет в приложеннном Multi-Material материальный слой под именем "OuterFrame". Если этот слой найден, его материал будет назначен компоненту OuterFrame. Значение толщины слоя материала отбрасывается.

## Условное обозначение направления открывания окон

*Смотрите также:* [Руководство по обозначению направления открытия окон и дверей](/Tutorial_for_open_windows/ru "Tutorial for open windows/ru")

Двери и окна могут отображаться частично или полностью открытыми в 3D-модели или могут отображать открывающие символы как в плане, так и в области высоты. Следовательно, они также появятся в извлеченных 2D-представлениях, сгенерированных [Draft Shape2DView](/Draft_Shape2DView/ru "Draft Shape2DView/ru") или [TechDraw Workbench](/TechDraw_Workbench/ru "TechDraw Workbench/ru") или [Drawing Workbench](/Drawing_Workbench/ru "Drawing Workbench/ru"). Чтобы получить это, по крайней мере один из компонентов окна должен иметь шарнир и режим открытия (см. [Создание компонентов](#Создание_компонентов) выше). Затем вы можете настроить внешний вид окна, используя свойства Данные**Opening**, Данные**Symbol Plan** или Данные**Symbol Plan**:

![](/images/Arch_window_openings.png)

A door showing the symbol plan, symbol elevation and opening properties at work

## Defining window types

Windows can also take advantage of other tools, specifically [PartDesign](/PartDesign_Workbench "PartDesign Workbench") workflows, to define a type. A type is an object that defines the shape of the window. This is specially well suited to work with [App Parts](/App_Part "App Part"):

![](/images/Arch_window_type_example.png)

[Download the example file shown above](https://github.com/FreeCAD/Examples/raw/master/Arch_Example_Files/Window_Type.FCStd)

### Example workflow

* Create a window frame object, a glass panel, and any other window component you need, using [Part Workbench](/Part_Workbench "Part Workbench") or [PartDesign](/PartDesign_Workbench "PartDesign Workbench") tools.
* For example, create a base rectangular sketch for your window, then a profile sketch for the frame, and create a [Part Sweep](/Part_Sweep "Part Sweep") to sweep the profile around the base sketch. Create a [Part Offset2D](/Part_Offset2D "Part Offset2D") from the base sketch, then a [Part Extrude](/Part_Extrude "Part Extrude") to create the glass panel
* Make sure all these pieces have a unique, meaningful name (for example, "Frame" or "Glass Panel")
* Create an [App Part](/App_Part "App Part"), and place all your subcomponents in it
* Create a volume to be subtracted from the wall, for example by extruding the base sketch. Add this volume to the App Part. Make sure the volume is turned off
* You can add 3 properties to your App Part, by right-clicking its properties view and selecting "Add property". Add the following properties (all of them are optional, the group doesn't matter):
  + **Height** as a PropertyLength and link it, for example, to a vertical constraint of your base sketch
  + **Width** as a PropertyLength and link it, for example, to a horizontal constraint of your base sketch
  + **Subvolume** as a PropertyLink and link it to the volume to be subtracted that we created above
  + **Tag** as a PropertyString

Our window type is now ready. We can create window objects from it, simply by selecting the App Part and pressing the window button. The "Height", "Width", "Subvolume" and "Tag" properties of the window will be linked to the corresponding property of the App Part, if existing.

### Materials

To build a material for type-based windows:

* Create a [multi-material](/Arch_MultiMaterial "Arch MultiMaterial")
* Create one entry in the multi-material for each component of your App Part. For example, one "Frame", one "Glass panel" as we used above. Make sure to use the exact same name.
* Attribute that multi-material to each of the windows derived from the same type

You can use any other kind of workflow than the one described above, the important points to remember are:

* The type object must be one object, no matter the type (App Part, PartDesign Body, Part Compound, or even another Arch Window)
* The type object must have a "Subvolume" property (linked to the window's Subvolume property) for openings in host objects to work
* The type object must have a "Group" property with different children with same names as multi-material items for multi-materials to work

## Свойства

An Arch Window object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Window

* Данные**Height**: Высота окна
* Данные**Width**: Ширина окна
* Данные**Hole Depth**: Глубина углубления, созданного окном в базовом объекте
* Данные**Hole Wire**: Номер многоугольника, используемого для создания проёма окна. Значение может быть установлено графически двойным кликом на окне в древе проекта. Если установить значение в ноль, для проёма будет автоматически браться наибольший многоугольник.
* Данные**Window Parts**: Список струн (5 струн на компонент, установка опций компонента выше)
* Данные**Louvre Width**: Если какой-либо из компонентов установлен в "Louvres (жалюзи)", этот параметр определяет размер элементов жалюзи
* Данные**Louvre Spacing**: Если какой-либо из компонентов установлен в "Louvres (жалюзи)", этот параметр определяет пробел между элементами жалюзи
* Данные**Opening**: все компоненты, для которых установлен режим открытия, и при условии, что в них или в более раннем компоненте в списке определен шарнир, будут отображаться открытыми в процентах, определяемых этим значением.
* Данные**Symbol Plan**: отображение двумерного символа проема на виде сверху
* Данные**Symbol Elevation**: показывает двумерный символ проема на фасаде

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Инструмент создания окон может использоваться в [макросах](/Macros/ru "Macros/ru") и их консоли [Python](/Python/ru "Python/ru"), с использованием следующих функций:

```
Window = makeWindow(baseobj=None, width=None, height=None, parts=None, name="Window")

```

* Создает объект `Window` на основе `baseobj`, который должен быть правильно сформированной замкнутой [ломанной](/Draft_Wire/ru "Draft Wire/ru") или [эскизом Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru").
* Если доступно, устанавливает `width`, `height` и `name` (метку) окна.
* Если `baseobj` не является замкнутой формой, инструмент может не создать правильную сплошную фигуру.

Пример:

```
import FreeCAD, Draft, Arch

Rect1 = Draft.makeRectangle(length=900, height=3000)
Window = Arch.makeWindow(Rect1)
FreeCAD.ActiveDocument.recompute()

```

Вы можете так же создать окно из предустановок.

```
Window = makeWindowPreset(windowtype, width, height, h1, h2, h3, w1, w2, o1, o2, placement=None)

```

* Создает объект `Window` на основе `windowtype`, который должен быть одним из имен, определенных в `Arch.WindowPresets`
  + Некоторые из этих предустановок: `"Fixed"`, `"Open 1-pane"`, `"Open 2-pane"`, `"Sash 2-pane"`, `"Sliding 2-pane"`, `"Simple door"`, `"Glass door"`, `"Sliding 4-pane"`.
* `width` и `height` определяют общий размер объекта в миллиметрах.
* Параметры `h1`, `h2`, `h3` (вертикальные смещения), `w1`, `w2` (ширина), `o1` и `o2` (горизонтальные смещения) определяют разные расстояния в миллиметрах и зависят от типа создаваемой предустановки.
* Если задано `placement`, используется оно.

Пример:

```
import FreeCAD, Arch

base = FreeCAD.Vector(2000, 0, 0)
Axis = FreeCAD.Vector(1, 0, 0)
place=FreeCAD.Placement(base, FreeCAD.Rotation(Axis, 90))

Door = Arch.makeWindowPreset("Simple door",
                             width=900, height=2000,
                             h1=100, h2=100, h3=100, w1=200, w2=100, o1=0, o2=100,
                             placement=place)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Window/ru&oldid=1560845>"