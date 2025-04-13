---
title: Arch Планирование
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Schedule |
| Расположение в меню |
| Архитектура → Create schedule... |
| Верстаки |
| [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| *Нет* |
|  |

## Описание

The **Arch Schedule** tool allows you to create and automatically populate a [spreadsheet](/Spreadsheet_Workbench "Spreadsheet Workbench") with contents gathered from the model.

For a more general solution, see the [Reporting Workbench](https://github.com/furti/FreeCAD-Reporting/tree/master) in the list of [external workbenches](/External_workbenches "External workbenches"). This workbench uses SQL syntax to extract information from the document.

## Применение

1. Open or create a FreeCAD document which contains some objects.
2. Press the ![](/images/Arch_Schedule.svg) [Schedule](/Arch_Schedule "Arch Schedule") button.
3. Adjust the desired options. Enable the **Associate spreadsheet** option if you want the schedule to generate a FreeCAD [spreadsheet](/Spreadsheet_Workbench "Spreadsheet Workbench"). Or, alternatively, right-click the schedule in the [Tree view](/Tree_view "Tree view") after creation, and select **Attach spreadsheet** from the context menu.
4. Press OK.

## Рабочий процесс

Для начала требуется некоторая готовая конструкция. Например, как здание в этом документе, которое содержит множество объектов созданных в верстаке Arch (хотя на самом деле также поддерживаются и другие объекты).

![](/images/Arch_schedule_example01.jpg)

Далее нажмите на кнопку ![](/images/Arch_Schedule.svg) Планирование. В результате чего откроется панель задач, как на изображении ниже. Она довольно широкая, поэтому для удобной работы, вам нужно будет расширить комбо панель по горизонтали.

![](/images/ArchSchedule.png)

Затем вы можете заполнять строки таблицы друг за другом. Каждая строка представляет собой "запрос" и будет отображать одну строку в электронной таблице. Нажмите кнопку Add, чтобы добавить новую строку, и дважды щелкните каждую ячейку из этой строки, чтобы заполнить значения. Кнопка Del удаляет строку, содержащую выбранную в данный момент ячейку, а кнопка Clear удаляет абсолютно все строки. Доступными полями для заполнения в столбцах являются:

* **Description**: Описание для этого запроса. Столбец "Описание" - Это первый столбец результирующей электронной таблицы. В описании обязательно должен быть представлен запрос. Если вы оставите ячейку описания пустой, вся строка будет пропущена и оставлена пустой в электронной таблице. Это позволяет добавлять "разделительные" строки.
* **Value**: Это реальный запрос, который вы хотите выполнить для всех объектов, выбранных этим запросом. Это может быть два типа вещей: либо слово `count` или свойство объекта:
  + Если вы войдете `count` (или `Count` или `COUNT`, не чувствителен к регистру) выбранные объекты будут просто подсчитаны.
  + Если вы введете свойство объекта, значение этого свойства для каждого из выбранных объектов будет извлечено и суммировано. Объекты, у которых нет этого свойства, будут пропущены. Используйте точечную нотацию для извлечения свойств свойств:`PropertyOfObject.PropertyOfProperty1.PropertyOfProperty2`. Если свойство перед первой точкой начинается со строчной буквы, оно будет считаться ссылкой на сам объект и игнорироваться. Ввод, например `object.Shape.Volume` это то же самое, что`Shape.Volume`.
* **Unit**: Дополнительная единица измерения для выражения результатов. Вы сами должны указать единицу измерения, соответствующую выполняемому вами запросу, например, если вы извлекаете тома, вы должны использовать единицу измерения объема, например `m^3`. Если вы используете неправильную единицу измерения, например, см, вы получите неправильные результаты.
* **Objects**: Вы можете оставить это поле пустым, тогда все объекты документа будут рассматриваться этим запросом, или предоставить разделенный точкой с запятой (;) список имен объектов (не меток). Если какой-либо из объектов в этом списке является группой, то также будут выбраны его дочерние объекты. Таким образом, самый простой способ использовать эту функцию - правильно сгруппировать ваши объекты в документе и просто указать здесь имя группы. Вы также можете использовать кнопку Selection чтобы добавить объекты, выбранные в данный момент в документе.
* **Filter**: Здесь вы можете добавить точку с запятой`;`-разделенный список фильтров. Каждый фильтр записывается в виде: `property:value`. Вы можете использовать только те свойства, которые содержат строковое значение. Как свойство, так и значение не чувствительны к регистру. The `value` can be left out but not the `:`. To properly handle schedules created with previous versions of Arch Schedule the `type` property will be translated to the `ifctype` property. It is advisable to not use `type` in new schedules.

:   Например:

    :   `label:floor1;ifctype:window` сохранит только объекты, у которых есть "floor1" в их Данные**Label** и "window" в их Данные**IFC Type**. Окно с Данные**Label** "Floor1-AA" и Данные**IFC Type** равным "Window Standard Case" будет включено.
    :   `label:door` Сохранит только те объекты, которые имеют "door" в свойстве Данные**Label**.
    :   `!label:door` Сохранит только объекты, которые не имеют "door" в свойстве Данные**Label**.
    :   `ifctype:structural` Will retain only objects that have "structural" in their Данные**IFC Type**.
    :   `!ifctype:something` Will retain only objects that do not have "structural" in their Данные**IFC Type** or that do not have the Данные**IFC Type** property.
    :   `!ifctype:` Will retain only objects that do not have the Данные**IFC Type** property.

Example filter queries

| Query | Description |
| --- | --- |
| `label:floor1;ifctype:window` | Will retain only objects that have "floor1" in their Данные**Label** and "window" in their Данные**IFC Type**. A window with the Данные**Label** "Floor1-AA" and the Данные**IFC Type** "Window Standard Case" will be included. |
| `label:door` | Will retain only objects that have "door" in their Данные**Label** |
| `!label:door` | Will retain only objects that do not have "door" in their Данные**Label** |
| `ifctype:structural` | Will retain only objects that have "structural" in their Данные**IFC Type** |
| `!ifctype:something` | Will retain only objects that do not have "structural" in their Данные**IFC Type** or that do not have the Данные**IFC Type** property |
| `!ifctype:` | Will retain only objects that do not have the Данные**IFC Type** property |

The ![](/images/Document-open.svg) Import button allows you to build this list in another spreadsheet application, and import that as a csv file here.

Таким образом, мы можем составить список запросов, подобный этому:

![](/images/ArchScheduleExample.png)

После этого нажмите OK, и в документ будет добавлен новый объект "Планирование", содержащий результат в виде электронной таблицы:

![](/images/Arch_schedule_example04.jpg)

To edit an existing schedule double-click it in the Tree view. By double-clicking the spreadsheet, you get the results in 3 columns: Description, Value, Unit (if applicable):

![](/images/Arch_schedule_example05.jpg)

The spreadsheet can then be exported to csv normally, from the [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench").

## Динамические свойства

It is possible to add your own properties to objects. These are called [Dynamic properties](/Property_editor#Actions "Property editor"). If they have been added with the **Prefix group name** option selected, their names will indeed start with the group name, but this prefix is not displayed in the [Property editor](/Property_editor "Property editor"). Their names have this form: `NameOfGroup_NameOfProperty`. To reference them in a schedule this full name must be used.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Schedule/ru&oldid=1486336>"