---
title: Arch Крыша
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Крыша |
| Расположение в меню |
| Архитектура → Крыша |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| R F |
| Представлено в версии |
| - |
| См. также |
| [Структура](/Arch_Structure/ru "Arch Structure/ru"), [Стена](/Arch_Wall/ru "Arch Wall/ru") |
|  |

## Описание

The **Arch Roof** tool allows for the creation of a sloped roof from a selected wire. The created roof object is parametric, keeping its relationship with the base object. The principle is that each edge is seen allotting a profile of roof (slope, width, overhang, thickness).

**Note:** This tool is still in development, and might fail with very complex shapes.

![](/images/RoofExample.png)

View from above a building model showing the roof with certain transparency

## Применение

1. Создайте замкнутый контур с помощью инструмента **Wire** с направлением построения против часовой стрелки и выберите его.

   :   ![](/images/CounterclockwiseWire.png)
2. Нажмите кнопку ![](/images/Arch_Roof.svg) Крыша, или клавишу клавиатуры R затем F
3. Крыша созданная изначально может иметь странную форму, это связанно с тем, что параметры граней созданной крыши, пока что ещё не настроены.
4. После создания крыши по умолчанию дважды щелкните по объекту в [древе проекта](/Tree_view/ru "Tree view/ru") для доступа к редактированию свойств. Угол крыши должен быть между 0 и 90.

   :   ![](/images/RoofTable.png)
5. Каждая строка соответствует одной из панелей крыши. Таким образом, вы можете установить нужные свойства для каждой панели крыши.
6. Чтобы помочь себе, вы можете установить `Angle (Угол)` или `Run` в `0` и определить `Relative Id`, что приведет к автоматическому расчету, чтобы найти данные относительно `Relative Id`.
7. Это работает следующим образом:
   1. Если `Angle (Угол) = 0` и `Run = 0` тогда профиль идентичен относительному профилю.
   2. Если `Angle (Угол) = 0` тогда `Angle (Угол)` рассчитывается таким образом, чтобы высота была такой же, как и относительный профиль.
   3. Если `Run = 0` тогда `Run` рассчитывается таким образом, чтобы высота была такой же, как и относительный профиль.
8. Наконец, установите Angle (Угол) на 90°, чтобы сделать фронтон.

   :   ![](/images/RoofProfil.png)
9. *Примечание*: для лучшего понимания, пожалуйста, посмотрите это [youtube видеоролик](https://www.youtube.com/watch?v=4Urwru71dVk).

## Usage (solid base)

If your roof has a complex shape (e.g. contains pitched windows or other non-standard features) you can create a custom solid object using various other FreeCAD workbenches ([Part](/Part_Workbench "Part Workbench"), [Sketcher](/Sketcher_Workbench "Sketcher Workbench") etc.). And then use this solid as the Данные**Base** object of your roof:

1. Select the solid base object.
2. Press the ![](/images/Arch_Roof.svg) [Arch Roof](/Arch_Roof "Arch Roof") button, or press R then F keys.

## Subtracting a roof

Roofs have an automatically generated subtraction volume ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") for roofs with a solid base). When a roof is [removed](/Arch_Remove "Arch Remove") from the walls of a building, both the roof itself as well as everything above it is subtracted from the walls.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): It is possible to override the automatic subtraction volume by setting the Данные**Subvolume** property of the roof to a custom solid object.

![](/images/Arch_Roof_Subtract_Default.png) ![](/images/Arch_Roof_Subtract_Subvolume.png) ![](/images/Arch_Roof_Subvolume_Example.png)

Solid-based roof before (1st image) and after (2nd image) [removing](/Arch_Remove "Arch Remove") it from walls.  
The 3rd image shows the generated subtraction volume.

## Свойства

An Arch Roof object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Roof

* Данные**Angles (Углы)**: Список содержащий углы наклона крыши, для каждой её грани.
* Данные**Runs ()**: Список содержащий расстояние от центра крыши до свеса, для каждой грани крыши.
* Данные**IdRel**: Список содержащий идентификаторы, для каждой грани крыши.
* Данные**Thickness (Толщины)**: Список содержащий толщины крыши, для каждой её грани.
* Данные**Overhang (Свесы)**: Список содержащий длины свесов крыши, для каждой её грани.
* Данные**Face (Грань)**: Индекс грани базового объекта (не используется).

## Scripting

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Roof tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Roof = makeRoof(baseobj=None, facenr=0, angles=[45.,], run=[], idrel=[0,], thickness=[50.,], overhang=[100.,], name="Roof")

```

* Creates a `Roof` object from the given `baseobj`, which can be a closed wire or a solid object.
  + If `baseobj` is a wire, you can provide lists for `angles`, `run`, `idrel`, `thickness`, and `overhang`, for each edge in the wire to define the shape of the roof.
  + The lists are automatically completed to match the number of edges in the wire.

Пример:

```
import FreeCAD as App
import Arch, Draft

doc = App.newDocument()

rect = Draft.makeRectangle(3000, 4000)
doc.recompute()

roof = Arch.makeRoof(rect, angles=[30.,])

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(0, 2000, 0)

wire = Draft.make_wire([p1, p2, p3], closed=True)
doc.recompute()

roof1 = Arch.makeRoof(wire)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Roof/ru&oldid=1539742>"