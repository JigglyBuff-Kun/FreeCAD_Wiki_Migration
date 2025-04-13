---
title: Архитектура УказатьМатериал
---
:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above. UseBIM Materialinstead.
:::

|  |
| --- |
| Arch SetMaterial |
| Расположение в меню |
| Arch → Инструменты материала → Материал |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru"), [BIM](/BIM_Workbench/ru "BIM Workbench/ru") |
| Быстрые клавиши |
| M T |
| Представлено в версии |
| - |
| См. также |
| [Arch CompSetMaterial](/Arch_CompSetMaterial/ru "Arch CompSetMaterial/ru"), [Arch MultiMaterial](/Arch_MultiMaterial/ru "Arch MultiMaterial/ru") |
|  |

## Описание

Инструмент Материал создает и привязывает [материал](/Material "Material") к активному документу, и привязывает его свойства к [Архитектурному](/Arch_Workbench/ru "Arch Workbench/ru") объекту. Материалы могут использовать все свойства определенного материала и контролировать цвет объекта, к которому он прикреплен. Материалы хранятся в папке **Materials** в активном документе.

![](/images/Arch_materials_01.jpg)

## Применение

1. При желании выберите один или несколько объектов, которым вы хотите задать новый материал
2. Вызовите команду одним из способов
   * Нажмите кнопку ![](/images/Arch_SetMaterial.svg) [Material](/Arch_SetMaterial "Arch SetMaterial") на панели инструментов
   * Используйте сочетание клавиш M then T.
   * Используйте пункт главного меню **Arch → Инструменты материала → Материал**.
3. Загрузите предварительно заданный материал или создайте новый, заполнив поля.
4. Нажмите OK.

## Опции

* При создании нового материала панель задач позволяет вам установить различные параметры:

![](/images/Arch_materials_02.jpg)

* **Choose preset**: Выберите один из предустановленных материалов, который будет использоваться как есть, или будет адаптирован путем изменения полей ниже
* **Name**: Укажите имя материала
* **Edit button**: Открывает текущий материал в FreeCAD's [Material editor](/FEM_MaterialEditor "FEM MaterialEditor"), который позволяет редактировать многие дополнительные свойства и добавлять собственные параметры
* **Description**: Более подробное описание материала
* **Color**: Отображаемый цвет материала, который будет применяться ко всем объектам, использующим этот материал
* **Section Color**: Цвет отображения материала, который будет применяться на страницах TechDraw, когда объект с этим материалом будет вырезан, а для свойства «Отображать материалы» содержащей его плоскости секитона установлено значение True.
* **Code**: Код и номер спецификации, например [Masterformat](https://en.wikipedia.org/wiki/MasterFormat) или [Omniclass](http://www.omniclass.org/).
* **Code browser button**: Пока не реализована - позволит открыть ссылку в веб-браузере
* **URL**: Ссылка, где можно найти дополнительную информацию о материале
* **URL button**:Открывает ссылку в веб-браузере

## Relation to IFC

This roughly corresponds to [IfcMaterial](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmaterial.htm).

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SetMaterial/ru&oldid=1467126>"