---
title: PartDesign Аддитивная Призма
---
|  |
| --- |
| Аддитивная призма |
| Расположение в меню |
| Part Design → Создать аддитивный примитив → Аддитивная Призма |
| Верстаки |
| [PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.17 |
| См. также |
| [Создать аддитивный примитив](/PartDesign_CompPrimitiveAdditive/ru "PartDesign CompPrimitiveAdditive/ru"), [Субтрактивная призма](/PartDesign_SubtractivePrism/ru "PartDesign SubtractivePrism/ru") |
|  |

## Описание

Вставляет в активное Тело простую геометрическую форму - призму, в качестве базового конструктивного элемента, или объединяет этот элемент с уже существующей совокупностью конструктивных элементов.

![](/images/PartDesign_AdditivePrism_example.png)

## Применение

1. Нажмите кнопку ![](/images/PartDesign_AdditivePrism.svg) **Аддитивная призма**. **Примечание**: Инструмент Аддитивная призма входит в состав меню с названием "Создать аддитивный примитив". После запуска FreeCAD на панели инструментов в этом меню по умолчанию отображается инструмент Аддитивный куб. Чтобы перейти к кнопке создания Призмы, нажмите на стрелку указывающую вниз рядом со значком и выберите Аддитивная призма в выпадающем меню.
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

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditivePrism/ru&oldid=1268424>"