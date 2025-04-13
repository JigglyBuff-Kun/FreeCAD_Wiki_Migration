---
title: PartDesign Фигура вращения
---
|  |
| --- |
| Фигура вращения |
| Расположение в меню |
| PartDesign → Create an additive feature → Фигура вращения |
| Верстаки |
| [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

Инструмент "Вращения" создает тело из эскиза или 2D объекта вращая его вокруг выбранной оси.

![](/images/PartDesign_Revolution_example.svg)

Выше: эскиз (A) вращается на 270 градусов против часовой стрелки вокруг оси (B); полученно тело (C) .

## Применение

1. Выберете эскиз, который хотите вращать. Грань существующего тела тоже может быть использована.
2. Нажмите на кнопку ![](/images/PartDesign_Revolution.svg) **Вращение**.
3. Установите параметры вращения (разобраны в следующей секции).
4. Нажмите OK.

## Опции

Когда производится вращение , появляется диалоговое окно **Параметры вращения** оно позволяет настроить как именно эскиз будет изогну.

|  |  |
| --- | --- |
|  | Type [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  Type offers five different ways of specifying the angle of the revolution: Dimension Enter a numeric value for the **Angle** of the revolution. With the option **Symmetric to plane** the revolution will extend half the given angle to either side of the sketch or face. To last The revolution will extend up to the last face of the support it encounters in its direction. If there is no support, an error message will appear. To first The revolution will extend up to the first face of the support it encounters in its direction. If there is no support, an error message will appear. Up to face The revolution will extend up to a face. Press the Face button and select a face or a [datum plane](/PartDesign_Plane "PartDesign Plane") from the Body. Two dimensions This allows to enter a second angle in which the revolution should extend in the opposite direction. The directions can be switched by checking the **Reversed** option.   Оси Specifies the axis of the revolution:  Это параметр определяет, вокруг каких осей эскиз будет изогнут.   * **Вертикальная ось эскиза**: выбирает вертикальную ось эскиза. * **Горизонтальная ось эскиза**: выбирает горизонтальную ось эскиза. * **Вспомогательные линии**: выбирает вспомогательную линию, содержимую в эскизе. выпадающий список содержит каждую вспомогательную линию. Первая вспомогательная линия будет названа *Вспомогательная линя 1*. * **Основные оси (X/Y/Z)**: выбирает ось X, Y или Z. * **Выбрать ориентир...**: позволяет выбрать в 3D режиме грань тела, или [Создать опорный отрезок](/PartDesign_Line/ru "PartDesign Line/ru").  Note that when changing the axis, the **Reversed** option may be (un)checked automatically.   Угол Этот параметр задает угол, на который будет вращаться эскиз, к примеру 360 создаст смыкающееся тело. Тело в секции [Примеров](#Examples) демонстрирует чего можно добиться с помощью углов. Невозможно задать негативные углы (используйте параметр **В обратную сторону**) или углы больше 360°.   Симметрично плоскости Если выбрано, вращение будет происходить в обе стороны от плоскости эскиза на половину заданного угла.   В обратную сторону Если выбрано, направление вращения будет изменено со стандартного (по часовой стрелки) на противоположенное |

### 2nd angle

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Defines the angle of the revolution in the opposite direction. This option is only available if **Type** is **Two dimensions** and **Angle** is smaller than 360°.

## Свойства

### Data

Part Design

* Данные**Refine** (`Bool`)

Revolution

* Данные**Type** (`Enumeration`)
* Данные**Base** (`Vector`): (read-only)
* Данные**Axis** (`Vector`): (read-only)
* Данные**Angle** (`Angle`)
* Данные**Up To Face** (`LinkSub`)
* Данные**Angle2** (`Angle`)
* Данные**Reference Axis** (`LinkSub`)

Sketch Based

* Данные**Profile** (`LinkSub`)
* Данные**Midplane** (`Bool`)
* Данные**Reversed** (`Bool`)
* Данные**Allow Multi Face** (`Bool`)

## Notes

* A ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") cannot be used for the profile.
* When using a ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") for the profile, selecting the binder in the [Tree view](/Tree_view "Tree view") will fail, instead the binder's face has to be selected in the [3D view](/3D_view "3D view").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Revolution/ru&oldid=1446915>"