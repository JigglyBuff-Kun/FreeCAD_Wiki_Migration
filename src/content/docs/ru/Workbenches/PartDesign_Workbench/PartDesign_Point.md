---
title: PartDesign Создать опорную точку
---
|  |
| --- |
| Создать опорную точку |
| Расположение в меню |
| Part Design → Create a datum → Создать опорную точку |
| Верстаки |
| [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Создать опорную линию](/PartDesign_Line/ru "PartDesign Line/ru"), [Создать опорную плоскость](/PartDesign_Plane/ru "PartDesign Plane/ru") |
|  |

## Описание

Создает **опорную точку**, которую можно использовать для размещения эскизов или другой опорной геометрии.

![](/images/DatumPoint.png)

A datum point attached to a sphere with an attachment offset of `2` in the Z direction.

## Применение

1. Press the ![](/images/PartDesign_Point.svg) **Create a datum point** button.
2. Define Point parameters. Select a first reference in the 3D view to filter the available attachment modes.
3. Depending on the selected reference, there may be one or more attachment modes available in the the list. The most likely one will automatically be selected and shown in bold in the list. The text *Attached with mode* along with the attachment mode name will appear in green at the top of the Parameters panel.
4. To add an additional reference, press the next Reference button. Once pressed its label changes to *Selecting...* until a selection is made.
5. Select an attachment mode in the list.
6. Define Attachment Offset values.
7. Press OK.

## Опции

Double-click the DatumPoint label in the Model tree or right-click and select **Edit datum** in the contextual menu to edit its parameters. For more details about Attachment mode and Attachment offset, see [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").

## Preferences

See [PartDesign Plane](/PartDesign_Plane#Preferences "PartDesign Plane").

## Свойства

* Данные**MapMode**: lists the attachment mode used.
* Данные**Attachment Offset**: applies a transformation (translation and rotation) in reference to the attachment placement.
* Данные**Label**: name given to the object, this name can be changed at convenience.

## Ограничения

* The datum point cannot be used as section for Pipe and Loft features.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Point/ru&oldid=1460157>"