---
title: PartDesign Субтрактивная Призма
---
|  |
| --- |
| Субтрактивная призма |
| Расположение в меню |
| Part Design → Создать субтрактивный примитив → Субтрактивная призма |
| Верстаки |
| [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Создать субтрактивный примитив](/PartDesign_CompPrimitiveSubtractive/ru "PartDesign CompPrimitiveSubtractive/ru"), [Аддитивная призма](/PartDesign_AdditivePrism/ru "PartDesign AdditivePrism/ru") |
|  |

## Описание

Вставляет субтрактивную призму в активное Тело. Её форма вычитается из существующего тела.

![](/images/PartDesign_SubtractivePrism_example.svg)

*Слева: активное тело (A) отображено серым цветом, к которому добавлена субтрактивная призма (B) отображена прозрачным красным цветом. Справа: форма полученная в результате преобразования.*

## Применение

1. Нажмите кнопку ![](/images/PartDesign_SubtractivePrism.svg) **Субтрактивная призма**. **Примечание**: Инструмент Субтрактивная призма входит в состав меню с названием "Создать субтрактивная примитив". После запуска FreeCAD на панели инструментов в этом меню по умолчанию отображается инструмент Субтрактивная куб. Чтобы перейти к кнопке создания Призмы, нажмите на стрелку указывающую вниз рядом со значком и выберите Аддитивная призма в выпадающем меню.
2. Установите параметры геометрической формы и [настройки крепления](/Part_EditAttachment/ru "Part EditAttachment/ru") к уже существующим конструктивным элементам, если это требуется.
3. Нажмите OK.
4. Конструктивный элемент Призма появится в иерархии документа под активным Телом.

## Опции

Возможно также создавать наклонные призмы, указав углы наклона её боковых рёбер относительно плоскости основания. [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru")

Параметры Призмы после её создания можно изменить двумя способами:

* Дважды щелкнув по ней в дереве модели или щелкнув правой кнопкой мыши и выбрав **Редактировать примитив** в контекстном меню; это откроет окно параметров примитива.
* Через [Редактор свойств](/Property_editor/ru "Property editor/ru").

## Свойства

* Данные**Attachment**: defines the attachment mode as well as the Attachment Offset. See [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* Данные**Label**: label given to the Prism object. Change to suit your needs.
* Данные**Polygon**: number of sides in the polygon cross-section of the prism.
* Данные**Circumradius**: [circumscribed radius](https://en.wikipedia.org/wiki/Circumscribed_circle) of the polygon cross-section of the prism.
* Данные**Height**: height of the prism.
* Данные**First Angle**: angle in first direction.
* Данные**Second Angle**: angle in second direction.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePrism/ru&oldid=1268436>"