---
title: Верстак PartDesign
---

![](/images/Workbench_PartDesign.svg)

Логотип верстака PartDesign

## Введение

![](/images/Workbench_PartDesign.svg)Верстак PartDesign предоставляет расширенные инструменты для моделирования сложных твердотельных деталей. Он в основном ориентирован на создание механических деталей, которые можно изготовить и собрать в готовое изделие. Тем не менее, созданные твёрдые тела можно использовать повсеместно для любых других целей, таких как [архитектурное проектирование](/Arch_Workbench/ru "Arch Workbench/ru"), [анализ методом конечных элементов](/FEM_Workbench/ru "FEM Workbench/ru") или [механическая обработка и 3D-печать](/Path_Workbench/ru "Path Workbench/ru").

В то время как ![](/images/Workbench_Part.svg) [Верстак Part](/Part_Workbench/ru "Part Workbench/ru") основан на методологии [конструктивной сплошной геометрии](/Constructive_solid_geometry/ru "Constructive solid geometry/ru") (CSG) для построения фигур, верстак PartDesign использует параметрическую методологию редактирования объектов, которая означает, что базовое твёрдое тело последовательно преобразуется путем добавления элементов от начала и до тех пор, пока не будет получена окончательная форма. Более полное объяснение данного процесса смотри на странице [особенности редактирования компонентов](/Feature_editing/ru "Feature editing/ru"). Более полное описание этого процесса смотри на странице [редактирования элементов](/Feature_editing/ru "Feature editing/ru"), а затем смотри [Создание простой детали с помощью PartDesign](/Creating_a_simple_part_with_PartDesign/ru "Creating a simple part with PartDesign/ru"), чтобы приступить к созданию твёрдых тел.

See the [feature editing](/Feature_editing "Feature editing") page for a more complete explanation of this process, and then see [Creating a simple component with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") to get started with creating solids.

Более подробное обсуждение различий между верстаками Part и Part Design можно найти на странице: [Part и Part Design](/Part_and_PartDesign/ru "Part and PartDesign/ru").

![](/images/PartDesign_Workbench_Example.jpg)

## Инструменты

Все инструменты проектирования деталей находятся в меню **Part Design** и на панели инструментов Part Design, которая появляется при загрузке верстака Part Design.

### Вспомогательные инструменты Part Design

- ![](/images/PartDesign_Body.svg) [Создать тело](/PartDesign_Body/ru "PartDesign Body/ru"): создаёт объект [Тело](/Body/ru "Body/ru") и делает его активным.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create Sketch:

- ![](/images/Sketcher_NewSketch.svg) [Создать эскиз](/PartDesign_NewSketch/ru "PartDesign NewSketch/ru"): создаёт новый эскиз на выбранной грани или плоскости. Если во время выполнения этого инструмента не выбрана ни одна из граней, пользователю будет предложено выбрать плоскость на Панели задач. После чего интерфейс переключится на [верстак Sketcher](/Sketcher_Workbench/ru "Sketcher Workbench/ru") в режим редактирования.

- ![](/images/Sketcher_MapSketch.svg) [Разместить эскиз на грани](/Sketcher_MapSketch/ru "Sketcher MapSketch/ru"): сопоставляет эскиз с ранее выбранной плоскостью или гранью активного тела.

- ![](/images/Sketcher_EditSketch.svg) [Редактировать эскиз](/Sketcher_EditSketch/ru "Sketcher EditSketch/ru"): редактировать выбранный эскиз.

- ![](/images/Sketcher_ValidateSketch.svg) [Проверить эскиз](/Sketcher_ValidateSketch/ru "Sketcher ValidateSketch/ru"): проверяет допуски различных точек и корректирует их.

- ![](/images/Part_CheckGeometry.svg) [Check geometry](/Part_CheckGeometry "Part CheckGeometry"): Checks the geometry of selected objects for errors.

- ![](/images/PartDesign_ShapeBinder.svg) [Create a shape binder](/PartDesign_ShapeBinder "PartDesign ShapeBinder"): creates a shape binder referencing geometry from a single parent object.

- ![](/images/PartDesign_SubShapeBinder.svg) [Создать новую под-объектную связующую форму](/PartDesign_SubShapeBinder/ru "PartDesign SubShapeBinder/ru"): создаёт геометрию привязки формы из одного или нескольких родительских объектов.

- ![](/images/PartDesign_Clone.svg) [Создать клон](/PartDesign_Clone/ru "PartDesign Clone/ru"): клонирует выбранное тело.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a datum (1.0 and below):

- ![](/images/PartDesign_Plane.svg) [Создать опорную плоскость](/PartDesign_Plane/ru "PartDesign Plane/ru"): создает опорную плоскость в активном теле.

- ![](/images/PartDesign_Line.svg) [Создать опорный отрезок](/PartDesign_Line/ru "PartDesign Line/ru"): создает опорный отрезок в активном теле.

- ![](/images/PartDesign_Point.svg) [Создать опорную точку](/PartDesign_Point/ru "PartDesign Point/ru"): создает опорную точку в активном теле.

- ![](/images/PartDesign_CoordinateSystem.svg) [Создать локальную систему координат](/PartDesign_CoordinateSystem/ru "PartDesign CoordinateSystem/ru"): создает локальную систему координат прикрепленную к опорной геометрии в активном теле.

: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): these tools have been replaced by new [datum tools](/Std_Base#Part_Datums "Std Base").

### Инструменты моделирования Part Design

#### Аддитивные инструменты

Это инструменты для создания базовых конструктивных элементов или для добавления простых аддитивных геометрических форм к уже существующему твёрдому телу.

- ![](/images/PartDesign_Pad.svg) [Выдавливание](/PartDesign_Pad/ru "PartDesign Pad/ru"): выдавливает твёрдое тело из выбранного эскиза.

- ![](/images/PartDesign_Revolution.svg) [Вращение](/PartDesign_Revolution/ru "PartDesign Revolution/ru"): создаёт твёрдое тело, поворачивая эскиз вокруг оси. Контур эскиза должен быть замкнутым.

- ![](/images/PartDesign_AdditiveLoft.svg) [Аддитивный профиль](/PartDesign_AdditiveLoft/ru "PartDesign AdditiveLoft/ru"): создает переходную форму, между двумя и более переходными контурами.

- ![](/images/PartDesign_AdditivePipe.svg) [Аддитивный профиль по траектории](/PartDesign_AdditivePipe/ru "PartDesign AdditivePipe/ru"): создаёт твёрдое тело путем протягивания одного или нескольких эскизов вдоль открытой или замкнутой траектории.

- ![](/images/PartDesign_AdditiveHelix.svg) [Аддитивная спираль](/PartDesign_AdditiveHelix/ru "PartDesign AdditiveHelix/ru"): создает сплошное тело, перемещая эскиз по спирали.

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create an additive primitive:

: \- ![](/images/PartDesign_AdditiveBox.svg) [Аддитивный параллелепипед](/PartDesign_AdditiveBox/ru "PartDesign AdditiveBox/ru"): создаёт аддитивный параллелепипед.

: \- ![](/images/PartDesign_AdditiveCylinder.svg) [Аддитивный цилиндр](/PartDesign_AdditiveCylinder/ru "PartDesign AdditiveCylinder/ru"): создает аддитивный цилиндр.

: \- ![](/images/PartDesign_AdditiveSphere.svg) [Аддитивная сфера](/PartDesign_AdditiveSphere/ru "PartDesign AdditiveSphere/ru"): создает аддитивную сферу.

: \- ![](/images/PartDesign_AdditiveCone.svg) [Аддитивный конус](/PartDesign_AdditiveCone/ru "PartDesign AdditiveCone/ru"): создает аддитивный конус.

: \- ![](/images/PartDesign_AdditiveEllipsoid.svg) [Аддитивный эллипсоид](/PartDesign_AdditiveEllipsoid/ru "PartDesign AdditiveEllipsoid/ru"): создает аддитивный эллипсоид.

: \- ![](/images/PartDesign_AdditiveTorus.svg) [Аддитивный тор](/PartDesign_AdditiveTorus/ru "PartDesign AdditiveTorus/ru"): создает аддитивный тор.

: \- ![](/images/PartDesign_AdditivePrism.svg) [Аддитивная призма](/PartDesign_AdditivePrism/ru "PartDesign AdditivePrism/ru"): создает аддитивную призму.

: \- ![](/images/PartDesign_AdditiveWedge.svg) [Аддитивный клин](/PartDesign_AdditiveWedge/ru "PartDesign AdditiveWedge/ru"): создает аддитивный клин.

#### Инструменты вычитания (съёма) материала (Субтрактивные инструменты)

Это инструменты для вычитания материала из существующего тела.

- ![](/images/PartDesign_Pocket.svg) [Вырез](/PartDesign_Pocket/ru "PartDesign Pocket/ru"): создает вырез на основе выбранного эскиза.

- ![](/images/PartDesign_Hole.svg) [Отверстие](/PartDesign_Hole/ru "PartDesign Hole/ru"): создает отверстия на основе выбранного эскиза. Эскиз должен содержать один или несколько кругов.

- ![](/images/PartDesign_Groove.svg) [Проточка](/PartDesign_Groove/ru "PartDesign Groove/ru"): создает проточку, путем вращения эскиза вокруг оси.

- ![](/images/PartDesign_SubtractiveLoft.svg) [Субтрактивный профиль](/PartDesign_SubtractiveLoft/ru "PartDesign SubtractiveLoft/ru"): создает твердое тело путем перехода между двумя или более эскизами и вычитает созданное тело из активного тела.

- ![](/images/PartDesign_SubtractivePipe.svg) [Субтрактивный профиль по траектории](/PartDesign_SubtractivePipe/ru "PartDesign SubtractivePipe/ru"): создает твердое тело, перемещая один или несколько эскизов по конечному или замкнутому контуру, и вычитает созданное тело из активного тела.

- ![](/images/PartDesign_SubtractiveHelix.svg) [Субтрактивная спираль](/PartDesign_SubtractiveHelix/ru "PartDesign SubtractiveHelix/ru"): создает сплошную форму, перемещая эскиз вдоль спирали и вычитает его из активного тела.

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a subtractive primitive:

: \- ![](/images/PartDesign_SubtractiveBox.svg) [Субтрактивный параллепипед](/PartDesign_SubtractiveBox/ru "PartDesign SubtractiveBox/ru"): создает субтрактивный прямоугольный параллелепипед и отнимает его от активного тела.

: \- ![](/images/PartDesign_SubtractiveCylinder.svg) [Субтрактивный цилиндр](/PartDesign_SubtractiveCylinder/ru "PartDesign SubtractiveCylinder/ru"): создает субтрактивный цилиндр и отнимает его от активного тела.

: \- ![](/images/PartDesign_SubtractiveSphere.svg) [Субтрактивная сфера](/PartDesign_SubtractiveSphere/ru "PartDesign SubtractiveSphere/ru"): создает субтрактивную сферу и отнимает её от активного тела.

: \- ![](/images/PartDesign_SubtractiveCone.svg) [Субтрактивный конус](/PartDesign_SubtractiveCone/ru "PartDesign SubtractiveCone/ru"): создает субтрактивный конус и отнимает его от активного тела.

: \- ![](/images/PartDesign_SubtractiveEllipsoid.svg) [Субтрактивный эллипсоид](/PartDesign_SubtractiveEllipsoid/ru "PartDesign SubtractiveEllipsoid/ru"): создает субтрактивный эллипсоид и отнимает его от активного тела.

: \- ![](/images/PartDesign_SubtractiveTorus.svg) [Субтрактивный тор](/PartDesign_SubtractiveTorus/ru "PartDesign SubtractiveTorus/ru"): создает субтрактивный тор и отнимает его от активного тела.

: \- ![](/images/PartDesign_SubtractivePrism.svg) [Субтрактивная призма](/PartDesign_SubtractivePrism/ru "PartDesign SubtractivePrism/ru"): создает субтрактивную призму и отнимает её от активного тела.

: \- ![](/images/PartDesign_SubtractiveWedge.svg) ‎[Субтрактивный клин](/PartDesign_SubtractiveWedge/ru "PartDesign SubtractiveWedge/ru"): создает субтрактивный клин и отнимает его от активного тела.

#### Логические операции

- ![](/images/PartDesign_Boolean.svg) [Булева операция](/PartDesign_Boolean/ru "PartDesign Boolean/ru"): импортирует одно или несколько тел или клонов PartDesign в активное тело и применяет логическую операцию.

#### Инструменты обработки граней тела

Данные инструменты предназначены для создания кромок и обработки граней.

- ![](/images/PartDesign_Fillet.svg) [Скругление](/PartDesign_Fillet/ru "PartDesign Fillet/ru"): скругление граней активного тела.

- ![](/images/PartDesign_Chamfer.svg) [Фаска](/PartDesign_Chamfer/ru "PartDesign Chamfer/ru"): снимает фаску с граней активного тела.

- ![](/images/PartDesign_Draft.svg) [Уклон](/PartDesign_Draft/ru "PartDesign Draft/ru"): создает уклон выбранных граней активного тела

- ![](/images/PartDesign_Thickness.svg) [Преобразовать в полое тело](/PartDesign_Thickness/ru "PartDesign Thickness/ru"): создает толстостенную полую оболочку из активного твердого тела и убирая выбранные грани.

#### Инструменты преобразования

Это инструменты для преобразования существующих элементов.

- ![](/images/PartDesign_Mirrored.svg) [Симметрия](/PartDesign_Mirrored/ru "PartDesign Mirrored/ru"): зеркально отражает один или несколько элементов.

- ![](/images/PartDesign_LinearPattern.svg) [Линейный массив](/PartDesign_LinearPattern/ru "PartDesign LinearPattern/ru"): создаёт линейный массив из одного или нескольких элементов.

- ![](/images/PartDesign_PolarPattern.svg) [Круговой массив](/PartDesign_PolarPattern/ru "PartDesign PolarPattern/ru"): создаёт круговой массив из одного или нескольких элементов.

- ![](/images/PartDesign_MultiTransform.svg) [Множественное преобразование](/PartDesign_MultiTransform/ru "PartDesign MultiTransform/ru"): создаёт массив, комбинируя любое из вышеупомянутых преобразований, а также преобразование [Масштабирование](/PartDesign_Scaled/ru "PartDesign Scaled/ru").
  - ![](/images/PartDesign_Scaled.svg) [Масштабирование](/PartDesign_Scaled/ru "PartDesign Scaled/ru"): масштабирует один или несколько элементов. Этот инструмент недоступен как отдельный инструмент преобразования.

#### Дополнительные

Некоторые дополнительные функции в меню "Part Design":

- ![](/images/PartDesign_Sprocket.svg) [Цепное колесо (звездочка)](/PartDesign_Sprocket/ru "PartDesign Sprocket/ru"): создает профиль цепного колеса (звездочки), который можно далее сделать объемным.

- ![](/images/PartDesign_InternalExternalGear.svg) [Шестерня с эвольвентным профилем](/PartDesign_InvoluteGear/ru "PartDesign InvoluteGear/ru"): создает внутренний или наружный эвольвентный профиль шестерни, который далее можно сделать объемным.

- ![](/images/PartDesign_WizardShaft.svg) [Мастер проектирования вала](/PartDesign_WizardShaft/ru "PartDesign WizardShaft/ru"): Создает вал из таблицы значений и позволяет анализировать силы и моменты. Вал создается как фигура вращения из эскиза, который можно редактировать.

### Инструменты контекстного меню

- [Suppressed](/index.php?title=PartDesign_Suppressed&action=edit&redlink=1 "PartDesign Suppressed (page does not exist)"): checkbox to disable a specific feature without deleting it. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

![](/images/PartDesign_MoveTip.svg) [Установить точку завершения расчёта тела](/PartDesign_MoveTip/ru "PartDesign MoveTip/ru"): переопределяет положение конечной точки расчёта детали.

- ![](/images/PartDesign_MoveFeature.svg) [Переместить объект в другое тело](/PartDesign_MoveFeature/ru "PartDesign MoveFeature/ru"): перемещает выбранный эскиз, базовой геометрии или объект в другое тело.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Переместить объект следом за другим объектом](/PartDesign_MoveFeatureInTree/ru "PartDesign MoveFeatureInTree/ru"): позволяет изменить порядок операций в древе построения тела, с помощью перемещения выбранного эскиза, базовой геометрии или объекта в другое положение в списке операций.

#### Комманды, используемые совместно с верстаком Part

- ![](/images/Std_SetAppearance.svg) [Внешний вид](/Std_SetAppearance/ru "Std SetAppearance/ru"): определяет внешний вид всей детали (прозрачность, цвет и т.д.).

- ![](/images/Part_FaceColors.svg) [Установить цвета](/Part_FaceColors/ru "Part FaceColors/ru"): позволяет назначить цвета для граней детали.

### Obsolete tools

- ![](/images/PartDesign_Migrate.svg) [Migrate](/PartDesign_Migrate "PartDesign Migrate"): migrates files from FreeCAD versions below 0.17 to version 0.17. This tool is not available in 1.0 and above.

## Настройки

- ![](/images/Preferences-part_design.svg) [Настройки](/PartDesign_Preferences/ru "PartDesign Preferences/ru"): настройки, доступные для инструментов проектирования деталей.
- [Точная настройка](/Fine-tuning/ru "Fine-tuning/ru"): некоторые дополнительные параметры для точной настройки при проектировании деталей.

## Учебники

- [Использование FreeCAD](http://help-freecad-jpg87.fr/), вебсайт, описывающий рабочий процесс проектирования механики.
- [Создание простейшей детали с помощью PartDesign](/Creating_a_simple_part_with_PartDesign/ru "Creating a simple part with PartDesign/ru")
- [Базовый учебник Part Design](/Basic_Part_Design_Tutorial/ru "Basic Part Design Tutorial/ru")
- [Учебник PartDesign Bearingholder I](/PartDesign_Bearingholder_Tutorial_I/ru "PartDesign Bearingholder Tutorial I/ru") (требует обновления)
- [Учебник PartDesign Bearingholder II](/PartDesign_Bearingholder_Tutorial_II/ru "PartDesign Bearingholder Tutorial II/ru") (требует обновления)

## Примеры

Некоторые идеи о том, чего можно достичь с помощью инструментов проектирования деталей, см. в: [Примеры проектирования деталей](/PartDesign_Examples "PartDesign Examples").

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/ru&oldid=1529337>"
