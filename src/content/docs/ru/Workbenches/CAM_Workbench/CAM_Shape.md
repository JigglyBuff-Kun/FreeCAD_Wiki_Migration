---
title: CAM Shape/ru
---
:::caution
Чтобы использовать эту функцию, Вам следуетвключить экспериментальные функции
:::

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Path Shape |
| Расположение в меню |
| Path → Supplemental commands → Из фигуры |
| Верстаки |
| [Path](/Path_Workbench/ru "Path Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Description

Инструмент Path Shape не соответствует текущему рабочему процессу верстака Path. По этой причине он перемещён в экспериментальные функции.

Этот инструмент генерирует траектории инструмента из краев Path Object.

Траектории инструмента не имеют компенсации по радиусу инструмента. Нет контроллера инструментов, связаного с созданными траекториями инструмента.

![](/images/FromShape_image_0.png)

## Применение

Будут включены все ребра, связанные с выбранной 3D-моделью.

1. Выберите ребра, выбрав весь объект из [трёхмерного вида](/3D_view/ru "3D view/ru") или [древа проекта](/Tree_view/ru "Tree view/ru"), выбрав или отдельные кромки, или по граням из [трёхмерного вида](/3D_view/ru "3D view/ru").
2. Нажмите кнопку ![](/images/Path_Shape.svg) [From Shape](/Path_Shape/ru "Path Shape/ru")

Итоговый путь инструмента добавляется вне задания Path.

## Опции

Все предоставленные параметры доступны только в представлении FromShape.Property.Data и включают:

* Ось отвода
* Высота отвода
* Высота возобновления
* Скорость подачи
* Скорость подачи по вертикали

## Свойства

### Данные

Empty

### Вид

Empty

## Scripting

## Скрипты

*См. так же:* [Основы скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

#### DocString Info

#### DocString Info

Возвращает объект Path из списка фигур.

* shapes: входной список фигур.

* start (Vector()): feed start position, and also serves as a hint of path entry.

* return\_end (False): if True, returns tuple (path, endPosition).

* arc\_plane(1): 0=None,1=Auto,2=XY,3=ZX,4=YZ,5=Variable. Arc drawing plane, corresponding to G17, G18, and G19.
  + If not 'None', the output wires will be transformed to align with the selected plane, and the corresponding G-code will be inserted.
  + 'Auto' means the plane is determined by the first encountered arc plane. If the found plane does not align to any G-code plane, XY plane is used.
  + 'Variable' means the arc plane can be changed during operation to align to the arc encountered.

* sort\_mode(1): 0=None,1=2D5,2=3D,3=Greedy. Wire sorting mode to optimize travel distance.
  + '2D5' explode shapes into wires, and groups the shapes by its plane. The 'start' position chooses the first plane to start. The algorithm will then sort within the plane and then move on to the next nearest plane.
  + '3D' makes no assumption of planarity. The sorting is done across 3D space.
  + 'Greedy' like '2D5' but will try to minimize travel by searching for nearest path below the current milling layer. The path in lower layer is only selected if the moving distance is within the value given in 'threshold'.

* min\_dist(0.0): minimum distance for the generated new wires. Wires maybe broken if the algorithm see fits. Set to zero to disable wire breaking.

* abscissa(3.0): Controls vertex sampling on wire for nearest point searching. The sampling is done using OCC GCPnts\_UniformAbscissa.

* nearest\_k(3): Nearest k sampling vertices are considered during sorting.

* orientation(0): 0=Normal,1=Reversed. Enforce loop orientation:
  + 'Normal' means CCW for outer wires when looking against the positive axis direction, and CW for inner wires.
  + 'Reversed' means the other way round.

* direction(0): 0=None,1=XPositive,2=XNegative,3=YPositive,4=YNegative,5=ZPositive,6=ZNegative. Enforce open path direction.

* threshold(0.0): If two wire's end points are separated within this threshold, they are consider as connected. You may want to set this to the tool diameter to keep the tool down.

* retract\_axis(2): 0=X,1=Y,2=Z. Tool retraction axis.

* retraction(0.0): Tool retraction absolute coordinate along retraction axis.

* resume\_height(0.0): When return from last retraction, this gives the pause height relative to the Z value of the next move.

* segmentation(0.0): Break long curves into segments of this length. One use case is for PCB autolevel, so that more correction points can be inserted.

* feedrate(0.0): Normal move feed rate.

* feedrate\_v(0.0): Vertical only (step down) move feed rate.

* verbose(true): If true, each motion G-code will contain full coordinate and feedrate.

* abs\_center(false): Use absolute arc center mode (G90.1).

* preamble(true): Emit preambles.

* deflection(0.01): Deflection for non circular curve discretization. It also also used for discretizing circular wires when you 'Explode' the shape for wire operations

Example:

```
shapes = [Box.Shape]
Path.fromShapes(shapes, start=Vector(), return_end=False, arc_plane=1, sort_mode=1, min_dist=0.0, abscissa=3.0, nearest_k=3, orientation=0, direction=0, threshold=0.0, retract_axis=2, retraction=0.0, resume_height=0.0, segmentation=0.0, feedrate=0.0, feedrate_v=0.0, verbose=True, abs_center=False, preamble=True, deflection=0.01)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Shape/ru&oldid=1491806>"