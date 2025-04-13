---
title: PartDesign Аддитивный профиль
---
|  |
| --- |
| Аддитивный профиль |
| Расположение в меню |
| Part Design → Create an additive feature → Аддитивный профиль |
| Верстаки |
| [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Аддитивная трубный профиль](/PartDesign_AdditivePipe/ru "PartDesign AdditivePipe/ru"), [Субтрактивный профиль](/PartDesign_SubtractiveLoft/ru "PartDesign SubtractiveLoft/ru") |
|  |

## Описание

**Аддитивный профиль** создаёт твёрдое тело в активном Теле путём перехода между двумя или более эскизами (также называемыми поперечными сечениями). Если тело уже содержит элементы, аддитивный профиль будет объединён с ними.

![](/images/PartDesign_AddLoft_example.png)

Слева: поперечные сечения (A), (B) и (C); справа созданный Аддитивный профиль.

## Применение

### Применение через диалог

1. Press the ![](/images/PartDesign_AdditiveLoft.svg) [Additive loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft") button.
2. In the **Select feature** dialog select a sketch to be used as base profile object and click OK.
   * Alternatively, either a single sketch or the face of a 3D object ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")) can be selected prior to pressing the Additive loft button.
3. In the **Loft parameters**, press the Add Section button.
4. Select the next sketch in the [3D view](/3D_view "3D view"). Repeat to select more sketches in the order you want them to be lofted through. You can change the section order any time later in the loft dialog by dragging sections in the list to the desired position.
5. Set options if needed and click OK.

### Применение в текущем Виде, напрямую

1. Select several sketches. It is hereby important in what order you select them:
   * The sketch selected at first will become the base profile object in the next step
   * The sketches selected after the first one will become the loft sections. Also here the selection order is important: The sketch selected as second will become the first loft section, the one selected as third becomes the second section and so on. (You can change the section order any time later in the loft dialog by dragging sections in the list to the desired position.
   * The first or last selection can also be a face of a 3D object ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"))
2. Press the ![](/images/PartDesign_AdditiveLoft.svg) [Additive loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft") button.
3. Set options if needed and click OK.

## Опции

* **Управление поверхностью**: делает прямолинейные переходы между поперечными сечениями. Не оказывает никакого эффекта, в случае если профиль формируется только по двум поперечными сечениям. Если пункт не установлен, переходы между сечениями будут плавными.
* **Замкнуть форму**: выполняет переход от последнего поперечного сечения к первому, создавая замкнутую форму.

## Свойства

* Данные**Label**: name given to the operation, this name can be changed at convenience.
* Данные**Sections**: lists the sections used.
* Данные**Ruled**: see [Options](#Options).
* Данные**Closed**: see [Options](#Options).
* Данные**Refine**: true or false. If set to true, cleans the solid from residual edges left by features. See [Part RefineShape](/Part_RefineShape "Part RefineShape") for more details.
* Данные**Profile**: the see base profile object of the loft.
* Данные**Midplane**: non applicable.
* Данные**Reversed**: non applicable.
* Данные**Up To Face**: non applicable.
* Данные**Allow Multi Face**: non applicable.

## Notes

* Эскизы должны иметь замкнутые контуры.
* Невозможно сделать профиль через в вершину.
* Поперечное сечение не может лежать в той же плоскости, что и непосредственно предшествующее ему.
* Чтобы лучше контролировать форму профиля, рекомендуется, чтобы все поперечные сечения имели одинаковое количество сегментов. Например, для профиля создаваемого между прямоугольником и окружностью окружность желательно разбить на 4 соединенные дуги.
* Профиль будет создан в том порядке, в котором были добавлены поперечные сечения
* Если эскиз имеет внутреннюю геометрию, т. е. в профиле должны быть отверстия, то порядок создания геометрии эскиза должен быть одинаковым для всех секций: либо начните все секции с внутренней геометрии, либо начните их все с внешней. В противном случае может быть создан некорректный профиль, в котором пересекаются внутренние и внешние стенки фигуры.

## Ссылки

* [Part Loft Technical Details](/Part_Loft_Technical_Details "Part Loft Technical Details") explains how a [Part Loft](/Part_Loft "Part Loft") is created, much of its content is relevant to the PartDesign Additive loft.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveLoft/ru&oldid=1446888>"