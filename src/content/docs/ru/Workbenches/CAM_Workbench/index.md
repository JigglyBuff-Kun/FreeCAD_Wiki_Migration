---
title: Верстак Path
---

![](/images/Workbench_CAM.svg)

Логотип верстака Path

## Введение

![](/images/Workbench_CAM.svg) [Верстак Path](/Path_Workbench/ru "Path Workbench/ru") используется для создания машинных инструкций для [станков с ЧПУ](https://en.wikipedia.org/wiki/CNC_router) из 3D-моделей FreeCAD. Это позволяет изготавливать реальные вещи на станках с ЧПУ, таких как: фрезерные, токарные станки, лазерные резаки и тому подобном оборудовании. Обычно эти инструкции на языке [G-кодов](https://en.wikipedia.org/wiki/G-code). Здесь представлен [общий пример моделирования траектории движения инструмента на токарном станке с ЧПУ](https://www.ange-softs.com/SIMULCNCHTML/index.html).

![](/images/Pathwb.png)

```
Рабочий процесс создания инструкций в верстаке FreeCAD Path выглядит следующим образом:

```

- 3D-модель - это базовый объект, обычно созданный с использованием одного или нескольких верстаков [Part Design](/PartDesign_Workbench "PartDesign Workbench"), [Part](/Part_Workbench "Part Workbench") или [Draft](/Draft_Workbench "Draft Workbench").
- В верстаке Path создается [Задание](/CAM_Job/ru "CAM Job/ru"). Оно содержит всю информацию, необходимую для генерации G-кода для обработки на станке с ЧПУ: там определен материал, станок имеет определенный [набор инструментов](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") и выполняет команды, контролирующие скорость и перемещения (обычно G-Code).
- Инструменты выбираются в соответствии с требованиями Рабочих Операций.
- Операции обработки задаются с использованием, например, [Контуров](/CAM_Profile/ru "CAM Profile/ru") и [Вырезов](/CAM_Pocket_3D "CAM Pocket 3D"). Эти Операции обработки используют внутренний диалект FreeCAD G-Code, независимо от станка с ЧПУ.
- Экспортируйте задание в g-код, соответствующий вашему станку. Этот шаг называется «постобработка», доступны разные постпроцессоры.

## Основные понятия

Верстак Path генерирует G-код, определяющий траектории движения фрезы, необходимую для фрезерования проекта, представленного 3D-моделью на [FreeCAD диалекте G-Кода](https://www.freecadweb.org/wiki/Path_scripting#FreeCAD.27s_internal_GCode_format), который впоследствии переводится на соответствующий диалект для целевого контроллера ЧПУ путем выбора соответствующего постпроцессора.

G-код генерируется из директив и операций, содержащихся в Задании на обработку. Job Workflow перечисляет их в порядке их выполнения. Список заполняется путем добавления Path Operations, Path Dressups, Path Partial Commands и Path Modifications из Path меню или кнопок GUI.

Верстак Path предоставляет диспетчер инструментов (библиотека и таблица инструментов), инструменты проверки G-кода и симуляции обработки. Он содержит постпроцессор и позволяет импортировать и экспортировать шаблоны заданий.

Верстак Path имеет внешние зависимости, включая:

1. Единицы измерения 3D-модели FreeCAD определены в **Правка → Предпочтения → Общие → Настройки единиц измерения на вкладке Единицы Измерения**. Конфигурация Postprocessor определяет единицы измерения результирующего G-кода.
2. Путь к файлу макроса и геометрические допуски определяются на вкладке **Правка → Параметры → Путь → Параметры задания**.
3. Цвета определяются на вкладке **Правка → Настройки → Путь → Цвета пути**.
4. Содержащие параметры тега определены на вкладке **Правка → Настройки → Путь → Dressups**.
5. То, что качество базовой 3D-модели соответствует требованиям Path WB, проходит проверку геометрии.

## Ограничения

Некоторые текущие ограничения, о которых вам следует знать:

- Большинство инструментов Path Tools не являются настоящими 3D-инструментами, поскольку поддерживают только 2.5D-обработку. Это означает, что они фактически обрабатывают плоскую форму, но могут вырезать ее до заданной глубины. Однако есть два инструмента, которые создают истинные трехмерные пути: ![](/images/CAM_3DPocket.svg) [3D Pocket](/CAM_Pocket_3D "CAM Pocket 3D") и ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") (он все еще является [экспериментальной функцией](/CAM_experimental "CAM experimental") по состоянию на ноябрь 2020 г.).
- Большая часть верстака Path разработана для простых, стандартных 3-осевых (xyz) фрезерных станков и роутеров с ЧПУ, но операции для токарной обработки находятся в разработке в версии 0.19_pre.
- Большинство операций в верстаке Path будут создавать пути, основанные лишь на стандартной концевой фрезе, независимо от типа инструмента , назначенного в данном контроллере инструмента, за исключением ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") и ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface").
- Операции в верстаке Path не знают о зажимных механизмах, используемых для закрепления заготовки на вашем станке. Следовательно, внимательно просмотрите и симулируйте пути, которые вы создаете, перед отправкой кода на ваш станок. При необходимости смоделируйте свои зажимные механизмы в FreeCAD, чтобы лучше проверять создаваемые пути. Ищите возможные столкновения с зажимами или другими препятствиями на пути движения инструмента.

## Единицы измерения

Обработка единиц измерения в Path может быть запутанной. Есть несколько моментов, которые нужно понять:

1. Базовыми единицами FreeCAD для длины и времени являются «мм» и «с» соответственно. Скорость, таким образом, измеряется в «мм/с». Это внутренний формат хранения FreeCAD
2. В схеме единиц измерения по умолчанию используются единицы измерения по умолчанию. Если вы используете схему по умолчанию и вводите скорость подачи без единиц измерения, она будет восприниматься как «мм/с»
3. Большинство станков с ЧПУ предполагает, что скорость подачи будет в «мм/мин» или «дюйм/мин». Большинство постпроцессоров автоматически конвертируют единицы при генерации gcode.

Схемы:

1. Изменение схемы в настройках изменяет строку по умолчанию для полей ввода. Если вы являетесь пользователем Path и предпочитаете проектировать в метрической системе настоятельно рекомендуется использовать схему «Метрические мелкие детали и ЧПУ». Если вы проектируете в единицах США, то будет работать Imperial Decimal и Building US
2. Изменение предпочитаемой схемы объекта не повлияет на вывод, но поможет избежать ошибок ввода

Вывод:

1. Генерация правильной единицы измерения в выходном файле является обязанностью постпроцессора и выполняется только в это время.
2. Единица измерения на выходе полностью не зависимо от выбранной схемы единиц измерения
3. Постпроцессоры выдают либо метрический (G21) выход, либо Imperial (G20), либо настраиваемый.
4. Конфигурируемые постпроцессоры по умолчанию для метрики (G21)
5. Если вы хотите, чтобы ваш настраиваемый постпроцессор выводил имперский gcode (G20), задайте правильный аргумент в конфигурации вывода задания (т.е. --дюймы для linuxcnc). Это может быть сохранено в шаблоне работы и установлено в качестве шаблона по умолчанию, чтобы сделать его автоматическим для всех будущих работ

Проверка траектории:

1. Если вы используете инструмент Path Inspect для просмотра g-кода, вы увидите подачу в «мм/с», потому что он не подвергается пост-обработке

## Высоты и глубины

Многие из команд имеют различные высоты и глубины:

![](/images/Path-DepthsAndHeights_ru.gif)

Визуальное отображение некоторых параметров обработки (для настроек)

## Команды

Некоторые команды являются экспериментальными и недоступны по умолчанию. Для их включения, см. [CAM experimental](/CAM_experimental "CAM experimental").

### Команды проекта

- ![](/images/CAM_Job.svg) [Проект](/CAM_Job "CAM Job"): Создаёт новую программу для ЧПУ

- ![](/images/CAM_Post.svg) [Постобработка](/CAM_Post "CAM Post"): Экспортирует проект в G-код

- ![](/images/CAM_Sanity.svg) [Проверить задание на наличие распространенных ошибок](/CAM_Sanity "CAM Sanity"): проверяет выбранное задание на отсутствие значений.[_Experimental_](/CAM_experimental "CAM experimental"). [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/CAM_ExportTemplate.svg) [Экспорт шаблона](/CAM_ExportTemplate "CAM ExportTemplate"): Экспортирует текущий проект в качестве шаблона

### Инструментальные команды

- ![](/images/CAM_Inspect.svg) [Inspect G-code](/CAM_Inspect "CAM Inspect"): Показывает G-код для проверки

- ![](/images/CAM_Simulator.svg) [CAM Simulator](/CAM_Simulator "CAM Simulator"): Показывает операции фрезерной обработки, эмулируя станок

- ![](/images/CAM_SimulatorGL.svg) [CAM SimulatorGL](/CAM_SimulatorGL "CAM SimulatorGL"): Enables the new, improved CAM simulator. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/CAM_SelectLoop.svg) [Finish Selecting Loop](/CAM_SelectLoop "CAM SelectLoop"): Завершает петлю между двумя выбранными кромками.

- ![](/images/CAM_OpActiveToggle.svg) [Toggle the Active State of the Operation](/CAM_OpActiveToggle "CAM OpActiveToggle"): Активирует или деактивирует операцию.

- ![](/images/CAM_ToolBitLibraryOpen.svg) [ToolBit Library editor](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen"): Открывает редактор для управления библиотеками инструментов ToolBit. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/CAM_ToolBitDock.svg) [ToolBit Dock](/CAM_ToolBitDock "CAM ToolBitDock"): Открывает панель ToolBit. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

### Основные операции

- ![](/images/CAM_Profile.svg) [Profile](/CAM_Profile "CAM Profile"): Создает операцию обработки профиля для всей модели или для одной или нескольких выбранных граней или кромок. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/CAM_Pocket_Shape.svg) [Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape"): Создает операцию обработки кармана для одного или нескольких выбранных карманов.

- ![](/images/CAM_Drilling.svg) [Drilling](/CAM_Drilling "CAM Drilling"): Создает цикл сверления.

- ![](/images/CAM_Face.svg) [Face](/CAM_MillFace "CAM MillFace"): Создает путь обработки поверхности.

- ![](/images/CAM_Helix.svg) [Helix](/CAM_Helix "CAM Helix"): Создает спиральную траекторию.

- ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive"): Creates an adaptive clearing and profiling operation.

- ![](/images/CAM_Slot.svg) [Slot](/CAM_Slot "CAM Slot"): Creates a slotting operation from selected features or custom points. [_Experimental_](/CAM_experimental "CAM experimental").

- ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave"): Creates an engraving path.

- ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr"): Creates a deburr path.

- ![](/images/CAM_Vcarve.svg) [Vcarve](/CAM_Vcarve "CAM Vcarve"): Creates an engraving path using a V tool shape.

### 3D Operations

- ![](/images/CAM_Pocket_3D.svg) [3D Pocket](/CAM_Pocket_3D "CAM Pocket 3D"): Creates a path for a 3D pocket.

- ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface"): Creates a path for a 3D surface. [_Experimental_](/CAM_experimental "CAM experimental").

- ![](/images/CAM_Waterline.svg) [Waterline](/CAM_Waterline "CAM Waterline"): Creates a waterline path for a 3D surface. [_Experimental_](/CAM_experimental "CAM experimental").

### Path Dressup

- ![](/images/CAM_DressupAxisMap.svg) [Axis Map](/CAM_DressupAxisMap "CAM DressupAxisMap"): Remaps one axis to another.

- ![](/images/CAM_DressupPathBoundary.svg) [Boundary](/CAM_DressupPathBoundary "CAM DressupPathBoundary"): Adds a boundary dressup modification to a selected path.

- ![](/images/CAM_DressupDogbone.svg) [Dogbone](/CAM_DressupDogbone "CAM DressupDogbone"): Adds a dogbone dressup modification to a selected path.

- ![](/images/CAM_DressupDragKnife.svg) [DragKnife](/CAM_DressupDragKnife "CAM DressupDragKnife"): Adds a dragknife dressup modification to a selected path.

- ![](/images/CAM_DressupLeadInOut.svg) [LeadInOut](/CAM_DressupLeadInOut "CAM DressupLeadInOut"): Adds a lead-in and/or lead-out point to a selected path.

- ![](/images/CAM_DressupRampEntry.svg) [RampEntry](/CAM_DressupRampEntry "CAM DressupRampEntry"): Adds ramp entry dressup modification to a selected path.

- ![](/images/CAM_DressupTag.svg) [Tag](/CAM_DressupTag "CAM DressupTag"): Adds a holding tag dressup modification to a selected path.

- ![](/images/CAM_DressupZCorrect.svg) [Z Depth Correction](/CAM_DressupZCorrect "CAM DressupZCorrect"): Corrects the Z depth using Probe Map.

### Дополнительные команды

- ![](/images/CAM_Fixture.svg) [Крепление](/CAM_Fixture "CAM Fixture"): Изменяет позицию крепления

- ![](/images/CAM_Comment.svg) [Comment](/CAM_Comment "CAM Comment"): Вставляет комментарий в G-код.

- ![](/images/CAM_Stop.svg) [Stop](/CAM_Stop "CAM Stop"): Вставить команду полной остановки станка.

- ![](/images/CAM_Custom.svg) [Custom](/CAM_Custom "CAM Custom"): Вставляет пользовательский G-код.

- ![](/images/CAM_Probe.svg) [Probe](/CAM_Probe "CAM Probe"): Creates a Probing Grid from a job stock.

- ![](/images/CAM_Shape.svg) [From Shape](/CAM_Shape "CAM Shape"): Создаёт траекторию из существующего объекта Part [_Experimental_](/CAM_experimental "CAM experimental").

### Модификация траектории

- ![](/images/CAM_Copy.svg) [Copy the operation in the job](/CAM_Copy "CAM Copy"): Создает параметрическую копию выбранного объекта траектории.

- ![](/images/CAM_Array.svg) [Array](/CAM_Array "CAM Array"): Создает массив путем дублирования выбранного участка траектории.

- ![](/images/CAM_SimpleCopy.svg) [Simple Copy](/CAM_SimpleCopy "CAM SimpleCopy"): Создает непараметрическую копию выбранного объекта траектории.

### Specialty Operations

- ![](/images/CAM_ThreadMilling.svg) [Thread Milling](/CAM_ThreadMilling "CAM ThreadMilling"): Creates a CAM Thread Milling operation from features of a base object. [_Experimental_](/CAM_experimental "CAM experimental").

### Miscellaneous

- ![](/images/CAM_Area.svg) [Area](/CAM_Area "CAM Area"): Creates a feature area from selected objects. [_Experimental_](/CAM_experimental "CAM experimental").

- ![](/images/CAM_Area_Workplane.svg) [Area workplane](/CAM_Area_Workplane "CAM Area Workplane"): Creates a feature area workplane. [_Experimental_](/CAM_experimental "CAM experimental").

## ToolBit architecture

Управляйте инструментами и библиотекой инструментов. Основано на архитектуре ToolBit. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- [CAM Tools](/CAM_Tools "CAM Tools")
- [CAM ToolShape](/CAM_ToolShape "CAM ToolShape")
- [CAM ToolBit](/CAM_ToolBit "CAM ToolBit")
- [CAM ToolBit Library](/CAM_ToolBit_Library "CAM ToolBit Library")
- [CAM ToolController](/CAM_ToolController "CAM ToolController")

## Прочее

- [CAM FAQ](/CAM_FAQ "CAM FAQ"): The CAM Workbench shares many concepts with other CAM software packages but has its own peculiarities. If something seems wrong this is a good place to start.
- [CAM SetupSheet](/CAM_SetupSheet "CAM SetupSheet"): You can use a SetupSheet to customize how various property values for operations are calculated.
- [CAM Postprocessor Customization](/CAM_Postprocessor_Customization "CAM Postprocessor Customization"): If you have a special machine which cannot use one of the available post-processors you may need to write your own post-processor.
- [CAM fourth axis](/CAM_fourth_axis "CAM fourth axis"): Experimental four axis milling.

## Настройки

- ![](/images/Preferences-path.svg) [Настройки...](/CAM_Preferences "CAM Preferences"): Настройки, доступные для верстака Path.

## Скриптование

Смотри [Создание сценариев (скриптов) модуля Part](/Part_scripting/ru "Part scripting/ru")

## Руководства

- [CAM Walkthrough for the Impatient](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient"): краткое руководство для ознакомления с верстаком Path.

## Видео

- [FreeCAD Path: Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): A playlist with a series of 5 videos in English by sliptonic. This series shows how to work with the [CAM Workbench](/CAM_Workbench "CAM Workbench").
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): A playlist with a series of 7 videos in English by CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): A playlist with a series of 8 videos in English by CAD CAM Lessons.
- Also see the [Computer-Aided Manufacturing (CAM) section](</Video_tutorials#Computer-Aided_Manufacturing_(CAM)> "Video tutorials") of the [Video tutorials](/Video_tutorials "Video tutorials") wiki page.

## Roadmap

- [CAM Development Roadmap](/CAM_Development_Roadmap "CAM Development Roadmap"): Read this if you are a developer and want to contribute to CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/ru&oldid=1494607>"
