---
title: Arch Каркас
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Каркас |
| Расположение в меню |
| Arch → Каркас |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| F R |
| Представлено в версии |
| - |
| См. также |
| [Стена](/Arch_Wall/ru "Arch Wall/ru"), [Структура](/Arch_Structure/ru "Arch Structure/ru") |
|  |

## Описание

Инструмент «Рамка» используется для создания всех видов объектов фрейма на основе профиля и макета. Профиль экструдируется по краям макета, который может быть любым 2D-объектом, таким как [sketch](/Sketcher_Workbench "Sketcher Workbench") или [draft object](/Draft_Workbench "Draft Workbench"). Особенно полезно создавать перила или стены рамы. Объекты кадра затем могут быть легко превращены в объекты [wall](/Arch_Wall "Arch Wall") или [structure](/Arch_Structure "Arch Structure") .

![](/images/Arch_Frame_example.jpg)

*На приведенном выше рисунке [line](/Draft_Line "Draft Line") была преобразована в [массива](/Draft_OrthoArray "Draft OrthoArray"), а объект фрейма был создан с использованием массива как макета, а [circle](/Draft_Circle "Draft Circle") как профиль.*

## Применение

1. Create a layout object and a profile object, for example with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").
2. Select the layout object first, then, with Ctrl pressed, select the profile object.
3. Press the ![](/images/Arch_Frame.svg) [Frame](/Arch_Frame "Arch Frame") button, or press F then R keys.

## Опции

* The frame object can be placed at a certain distance from the layout object, by setting its Offset property.
* The profile will be copied at the base of each edge of the layout object, then extruded along it. You can control how the profile is placed at the base of each edge with the Align and Rotation properties.

## Свойства

An Arch Frame object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Component

* Данные**Base** (`Link`): The layout this frame is based on.

For the other properties in the group see [Arch Component](/Arch_Component#Properties "Arch Component").

Frame

* Данные**Align** (`Bool`): Specifies if the profile must be rotated to have its normal axis aligned with each edge.
* Данные**Base Point** (`Integer`): Zero-based index indicating the crossing point of the path on the profile:
  + `0`: The **Base** of the **Placement** of the profile. This point is also used in case of an invalid index.
  + `1`: The midpoint of the 1st edge of the profile.
  + `2`: The endpoint of the 1st edge of the profile.
  + `3`: The midpoint of the 2nd edge of the profile.
  + `4`: The endpoint of the 2nd edge of the profile.
  + ...
  + `n*2-1`: The midpoint of the nth edge of the profile.
  + `n*2`: The endpoint of the nth edge of the profile.
* Данные**Edges** (`Enumeration`): The type of edges to consider. The options are:
  + `All edges`
  + `Vertical edges`
  + `Horizontal edges`
  + `Bottom horizontal edges`: Based of the global Z coordinate of the center of mass of the edge.
  + `Top horizontal edges`: Idem.
* Данные**Fuse** (`Bool`): If true, overlapping solids are fused.
* Данные**Offset** (`VectorDistance`): An optional distance between the layout object and the frame object.
* Данные**Profile** (`Link`): The profile this frame is based on.
* Данные**Profile Placement** (`Placement`): An optional additional placement to add to the profile before extruding it. Only the **Rotation** of the **Placement** is used. Ignored if Данные**Align** is `true`.
* Данные**Rotation** (`Angle`): The rotation of the profile around its extrusion axis.

## Программирование

## Программирование

*См. так же:* [Arch API](/Arch_API/ru "Arch API/ru") и [Основы составления скриптов FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

The Frame tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Frame = makeFrame(baseobj, profile)

```

* Creates a `Frame` object from the given `baseobj` and `profile`.
  + `baseobj` is any object containing wires, like a [Draft Wire](/Draft_Wire "Draft Wire"), or a [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray") with a collection of them.
  + `profile` is an extrudable 2D object containing faces or closed wires.

Пример:

```
import Draft, Arch

Line = Draft.makeLine(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(0, 0, 2000))
baseobj = Draft.makeArray(Line, FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(0, 1, 0), 6, 1)

profile = Draft.makeCircle(200)
Frame = Arch.makeFrame(baseobj, profile)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Frame/ru&oldid=1539679>"