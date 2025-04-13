---
title: PartDesign Проточка
---
|  |
| --- |
| Проточка |
| Расположение в меню |
| Part Design → Create a substractive feature → Проточка |
| Верстаки |
| [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Фигура вращения](/PartDesign_Revolution/ru "PartDesign Revolution/ru") |
|  |

## Описание

The **Groove** tool revolves a selected sketch or profile about a given axis, cutting out material from the support .

![](/images/PartDesign_Groove_example.svg)

Above: sketch (A) is revolved around axis (B); resulting groove on solid (C) is shown right.

## Применение

1. Select a single sketch or one or more faces from the Body.
2. Press the ![](/images/PartDesign_Groove.svg) [Groove](/PartDesign_Groove "PartDesign Groove") button.
3. Set the Groove parameters, see [Options](#Options) below.
4. Press the OK button.

## Опции

When creating a groove, or after double-clicking an existing groove in the [Tree view](/Tree_view "Tree view"), the **Groove parameters** task panel is shown. It offers the following settings:

![](/images/Partdesign_groove_parameters.png)

### Type

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Type offers five different ways of specifying the angle of the groove:

#### Dimension

Enter a numeric value for the **Angle** of the groove. With the option **Symmetric to plane** the groove will extend half the given angle to either side of the sketch or face.

#### Through all

The groove will extend up to the last face of the support it encounters in its direction. With the option **Symmetric to plane** the groove will cut through all material in both directions.

#### To first

The groove will extend up to the first face of the support it encounters in its direction.

#### Up to face

The groove will extend up to a face. Press the Face button and select a face or a [datum plane](/PartDesign_Plane "PartDesign Plane") from the Body.

#### Two dimensions

This allows to enter a second angle in which the groove should extend in the opposite direction. The directions can be switched by checking the **Reversed** option.

### Axis

Specifies the axis of the groove:

* **Vertical sketch axis**: selects the vertical sketch axis.
* **Horizontal sketch axis**: selects the horizontal sketch axis.
* **Construction line**: selects a construction line from the sketch used by the groove. The dropdown list will contain an entry for each construction line. The first construction line will be labelled *Construction line 1*.
* **Base (X/Y/Z) axis**: selects the X, Y or Z axis of the Body's origin.
* **Select reference...**: allows the selection of a straight edge or a [datum line](/PartDesign_Line "PartDesign Line") from the Body.

Note that when changing the axis, the **Reversed** option may be (un)checked automatically.

### Angle

Defines the angle of the groove. This option is only available if **Type** is **Dimension** or **Two dimensions**. Angles larger than 360° are not possible. Nor are negative values, use the **Reversed** option instead.

### Symmetric to plane

Check this option to extend the groove half the given angle to either side of the sketch or face, if **Type** is **Dimension**, or **Through all** if that is the **Type**.

### Reversed

Reverses the direction of the groove.

### 2nd angle

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Defines the angle of the groove in the opposite direction. This option is only available if **Type** is **Two dimensions** and **Angle** is smaller than 360°.

## Свойства

### Data

Groove

* Данные**Type** (`Enumeration`)
* Данные**Base** (`Vector`): (read-only)
* Данные**Axis** (`Vector`): (read-only)
* Данные**Angle** (`Angle`)
* Данные**Angle2** (`Angle`)
* Данные**Up To Face** (`LinkSub`)
* Данные**Reference Axis** (`LinkSub`)

Part Design

* Данные**Refine** (`Bool`)

Sketch Based

* Данные**Profile** (`LinkSub`)
* Данные**Midplane** (`Bool`)
* Данные**Reversed** (`Bool`)
* Данные**Allow Multi Face** (`Bool`)

## Notes

* A ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") cannot be used for the profile.
* When using a ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") for the profile, selecting the binder in the [Tree view](/Tree_view "Tree view") will fail, instead the binder's face has to selected in the [3D view](/3D_view "3D view").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Groove/ru&oldid=1402165>"