---
title: Arch Паенль
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Паенль |
| Расположение в меню |
| Arch → Инструменты панелирования → Панель |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| P A |
| Представлено в версии |
| 0.15 |
| См. также |
| [Панельный контур](/Arch_Panel_Cut/ru "Arch Panel Cut/ru"), [Панельный лист](/Arch_Panel_Sheet/ru "Arch Panel Sheet/ru") |
|  |

## Описание

Этот инструмент позволяет создавать все виды панельных элементов, как правило, для панельных конструкций, таких как проект [WikiHouse](http://www.wikihouse.cc/), но также для всех видов объектов, которые основаны на плоском профиле.

![](/images/Arch_Panel_example.jpg)

*На приведенном выше рисунке показана серия объектов панели, просто сделанных из импортированных 2D-контуров из файла DXF. Затем они могут быть повернуты и собраны для создания структур.*

Данный инструмент может также применятся для создания гофрированных или трапециевидных профилей (для версии 0.17 и выше):

![](/images/Arch_panel_wave.jpg)

## Применение

1. Select a 2D shape (Draft object, face or sketch) - optional.
2. Press the ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel "Arch Panel") button, or press P then A keys.
3. Adjust the desired properties.

### Ограничения

* В настоящее время нет автоматической системы для создания листов 2D-резки из панельных объектов, но такая функция есть в планах и будет добавлена в будущем.

## Опции

* The thickness of a panel can be adjusted after creation.
* Press Esc or the Cancel button to abort the current command.
* Double-clicking on the panel in the tree view after it is created allows you to enter edit mode and access and modify its additions and subtractions.
* It is possible to automatically make panels composed of more than one sheet of a material, by raising its Sheets property.
* Panels can make use of ![](/images/Arch_MultiMaterial.svg) [Multi-Materials](/Arch_MultiMaterial "Arch MultiMaterial"). When using a multi-material, the panel will become multi-layer, using the thicknesses specified by the multi-material. Any layer with a thickness of zero will have its thickness defined automatically by the remaining space defined by the Panel's own Thickness value, after subtracting the other layers.

## Свойства

An Arch Panel object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

* Данные**Length**: The length of the panel
* Данные**Width**: The width of the panel
* Данные**Thickness**: The thickness of the panel
* Данные**Area**: The area of the panel (automatic)
* Данные**Sheets**: The number of sheets of material the panel is made of
* Данные**Wave Length**: The length of the wave for corrugated panels
* Данные**Wave Height**: The height of the wave for corrugated panels
* Данные**Wave Type**: The type of the wave for corrugated panels, curved, trapezoidal or spiked
* Данные**Wave Direction**: The orientation of the waves for corrugated panels
* Данные**Bottom Wave**: If the bottom wave of the panel is flat or not

## Scripting

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Panel tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Panel = makePanel(baseobj=None, length=0, width=0, thickness=0, placement=None, name="Panel")

```

* Creates a `Panel` object from the given `baseobj`, which is a closed profile, and the given extrusion `thickness`.
  + If no `baseobj` is given, you can provide the numerical values for the `length`, `width`, and `thickness` to create a block panel.
* If a `placement` is given, it is used.

Пример:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(1000, 400)
Panel = Arch.makePanel(Rect, thickness=36)

```

## Материалы для самостоятельного изучения

* [Руководство по портированию файлов проекта Wikihouse в FreeCAD](/Wikihouse_porting_tutorial/ru "Wikihouse porting tutorial/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel/ru&oldid=1539696>"