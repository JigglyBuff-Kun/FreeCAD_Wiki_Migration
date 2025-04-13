---
title: Верстак Скетчер (Sketcher)
---

![](/images/Workbench_Sketcher.svg)

Логотип верстака Скетчер

## Введение

С помощью ![](/images/Workbench_Sketcher.svg) [Верстака Скетчер](/Sketcher_Workbench "Sketcher Workbench") можно создавать 2D-эскизы, предназначенные для использования в других рабочих столах. 2D-эскизы являются отправной точкой для многих CAD-моделей. Обычно они определяют профили и траектории для операций по созданию 3D-фигур. Окончательная форма модели может зависеть от нескольких эскизов.

Вместе с булевыми операциями, определёнными в ![](/images/Workbench_Part.svg) [Верстаке Деталь](/Part_Workbench/ru "Part Workbench/ru"), Верстак Скетчер, или сокращённо "Скетчер", составляет основу метода [Конструктивной твёрдотельной геометрии](/Constructive_solid_geometry/ru "Constructive solid geometry/ru") (CSG) для построения твёрдых тел. Вместе с операциями ![](/images/Workbench_PartDesign.svg) [Верстака Проектная Деталь (PartDesign)](/PartDesign_Workbench/ru "PartDesign Workbench/ru") - это также составляет основу методологии [редактирования конструктивных элементов](/Feature_editing/ru "Feature editing/ru") для создания твёрдых тел. Но многие другие верстаки также используют эскизы.

Функции [ограничения](#Constraints) верстака Скетчер, позволяют задавать 2D фигурам точные геометрические размеры определяя длины, углы и отношения (горизонтальность, вертикальность, перпендикулярность и т. д.). Решатель "ограничений" в интерактивном режиме обсчитывает ограничения степеней свободы геометрии 2D эскиза.

Верстак Скетчер не предназначена для создания 2D-чертежей. Как только эскизы были использованы для создания твёрдого тела, они автоматически скрываются, а ограничения отображаются только в режиме редактирования эскиза. Если вам нужно создать 2D-изображение только для печати и вы не хотите создавать 3D-модели, ознакомьтесь с [Верстаком Набросок (Draft)](/Draft_Workbench/ru "Draft Workbench/ru").

![](/images/FC_ConstrainedSketch.png)

Так выглядит полностью ограниченный эскиз

### Ограничения

Ограничения используются для лишения степеней свободы объекта. Например, линия без ограничений имеет 4 степени свободы (сокращенно "DoF - Degre of Freedom"): и её можно перемещать по горизонтали или вертикали, растягивать и поворачивать.

Применение горизонтального или вертикального ограничения или углового ограничения (относительно другой линии или одной из галвных осей) убирает возможность вращать отрезок, оставляя таким образом 3 степени свободы.
Привязка одной из точек отрезка к центру системы координат уберёт еще 2 степени свободы. Применение ограничения размера убирает последнюю степень свободы. Такой отрезок будет считаться **полностью ограниченым**.

Две линии могут быть соединены через одну из их точек с ограничением совпадающей точки. Между ними может быть задан угол или они могут быть перпендикулярны. Линия может быть касательной к дуге или окружности и так далее. Сложный Эскиз с несколькими объектами может иметь несколько различных решений, и присвоение ему статуса **полностью ограниченного** может означать, что на основе наложенных ограничений было достигнуто только одно из этих возможных решений.

Существует два вида ограничений: геометрические и размерные. Они подробно описаны ниже в разделе [Инструменты](#Tools).

### Редактирование ограничений

Когда [основное размерное ограничение](/Sketcher_ToggleDrivingConstraint/ru "Sketcher ToggleDrivingConstraint/ru") создано, и когда в [настройках](/Sketcher_Preferences/ru#Display "Sketcher Preferences/ru") включен (по умолчанию) параметр **Запросить значение после создания размерного ограничения**, откроется диалоговое окно для редактирования его значения.

![Редактор размерного ограничения](/images/Sketcher_Edit_Constraint_RU.png)

Вы можете ввести числовое значение или [выражение](/Expressions/ru "Expressions/ru"), а также указать название ограничения, чтобы упростить его использование в других выражениях. Вы также можете установить флажок **Ссылка**, чтобы переключить ограничение в [справочный режим](/Sketcher_ToggleDrivingConstraint/ru "Sketcher ToggleDrivingConstraint/ru").

Чтобы изменить значение существующего размерного ограничения, выполните одно из следующих действий:

- Дважды щёлкните значение ограничения в [3D-виде](/3D_view/ru "3D view/ru").
- Дважды щёлкните ограничение в [диалоговом окне Скетчера](/Sketcher_Dialog/ru "Sketcher Dialog/ru").
- Щёлкните правой кнопкой мыши на ограничении в диалоговом окне Скетчера и выберите в контекстном меню пункт **Изменить значение**.

### Перемещение ограничений

Размерные ограничения могут быть передвинуты в 3D виде путём перетаскивания. Удерживая нажатой левую кнопку мыши над значением ограничения (размера), переместите указатель мыши. Символы геометрических ограничений размещаются автоматически и не могут быть передвинуты.

## Эскизы Профиля (сечения)

Чтобы создать эскиз, который можно использовать в качестве профиля для создания твёрдых тел, необходимо соблюдать определенные правила:

- Эскиз должен содержать только замкнутые контуры. Зазоры между конечными точками, какими бы маленькими они ни были, недопустимы.
- Контуры могут быть вложенными, чтобы создавать пустоты, но они не должны пересекаться друг с другом или с другими контурами.
- Контуры не могут иметь общих рёбер с другими контурами. Следует избегать дублирования рёбер.
- Т-образные соединения, то есть более двух рёбер, имеющих общую точку, или точка, соприкасающаяся с ребром, не допускаются.

Эти правила не применяются к вспомогательной геометрии (по умолчанию - синего цвета), которая не отображается вне режима редактирования или если эскиз используется для других целей. В зависимости от Верстака и инструмента, которые будут использовать эскиз профиля, могут применяться дополнительные требования.

## Вспомогательные инструменты рисования

В верстаке Скетчер есть несколько вспомогательных средств для рисования и другие функции, которые могут помочь при создании геометрии и применении ограничений.

### Непрерывный режим

Существует два непрерывных режима: **"Непрерывный Режим" создания геометрии** и **"Непрерывный Режим" создания ограничений**. Если они включены (по умолчанию) в [настройках](/Sketcher_Preferences/ru#Display "Sketcher Preferences/ru"), соответствующие инструменты будут перезапущены после завершения работы. Для выхода из непрерывного режима нажмите Esc или правую кнопку мыши. Это необходимо повторить, если инструмент непрерывной геометрии уже получил входные данные. Вы также можете выйти из инструмента непрерывной геометрии, запустив другой инструмент создания геометрии или ограничений. Обратите внимание, что нажатие Esc, если инструмент не активен, приведёт к выходу из режима редактирования эскиза. Снимите флажок "'Esc может выходить из режима редактирования эскиза"' в [настройках](/Sketcher_Preferences/ru#General "Sketcher Preferences/ru"), если вы часто по неосторожности нажимаете Esc слишком много раз.

### Автоматические ограничения

В эскизах, для которых установлен флажок "Автоматические ограничения" (по умолчанию), некоторые ограничения применяются автоматически. Значок предлагаемого автоматического ограничения отображается рядом с курсором, если он наведён правильно. При щелчке левой кнопкой мыши это ограничение будет применено. Эту настройка для каждого эскиза, можно изменить в [диалоговом окне Скетчера](/Sketcher_Dialog/ru#Constraints "Sketcher Dialog/ru") или путём изменения [свойства](/Property_editor "Property editor") эскиза Вид**Autoconstraints (Автоматические ограничения)** на вкладке Вид.

Следующие ограничения применяются автоматически:

- ![](/images/Sketcher_ConstrainCoincident.svg) [Совпадение](/Sketcher_ConstrainCoincident/ru "Sketcher ConstrainCoincident/ru")
- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Точка на объекте](/Sketcher_ConstrainPointOnObject/ru "Sketcher ConstrainPointOnObject/ru")
- ![](/images/Sketcher_ConstrainHorizontal.svg) [Горизонтально](/Sketcher_ConstrainHorizontal/ru "Sketcher ConstrainHorizontal/ru")
- ![](/images/Sketcher_ConstrainVertical.svg) [Вертикально](/Sketcher_ConstrainVertical/ru "Sketcher ConstrainVertical/ru")
- ![](/images/Sketcher_ConstrainTangent.svg) [Касательная](/Sketcher_ConstrainTangent/ru "Sketcher ConstrainTangent/ru")
- [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): ![](/images/Sketcher_ConstrainSymmetric.svg) [Симметрично](/Sketcher_ConstrainSymmetric/ru "Sketcher ConstrainSymmetric/ru") (средней точки линии)

### Привязки

[представлено в версии 0.21](/Release_notes_0.21/ru "Release notes 0.21/ru")

Можно [привязаться](/Sketcher_Snap "Sketcher Snap") к линиям сетки и пересечениям сетки, к краям геометрии и средним точкам линий и дуг, а также к определенным углам. Пожалуйста, обратите внимание, что привязка сама по себе не создаёт ограничений. Например, только при включенном [Автоматическом ограничении](#Auto_constraints), привязка к краю приведёт к созданию ограничения [Точка на объекте](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"). Но простой выбор точки на краю привел бы к тому же результату..

### Параметры На-Экране

[представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

В зависимости от выбранного параметра в [нстройках](/Sketcher_Preferences/ru#General "Sketcher Preferences/ru") могут быть включены только ввод размеров На-Экране или как ввод размеров, так и позиционные размеры На-Экране. Позиционные параметры позволяют вводить точные координаты, например, центр окружности или начальную точку прямой. Размерные параметры позволяют вводить точные размеры, например, радиус окружности или длину и угол наклона прямой. Ввод параметров На-Экране доступен не для всех инструментов.

![](/images/Sketcher_On_view_parameters_positional.png)

Указание центральной точки окружности с включёнными параметрами положения

![](/images/Sketcher_On_view_parameters_dimensional.png)

Указание радиуса окружности с включёнными размерными параметрами

Если значения введены и подтверждены нажатием Enter или Tab, соответствующие ограничения добавляются автоматически. Если одновременно отображаются два параметра, например координаты точки по X и Y, то можно ввести одно значение и выбрать точку для определения другого. В зависимости от объекта могут потребоваться дополнительные ограничения для его полного определения. Ограничения, возникающие в результате использования параметров На-Экране, имеют приоритет над теми, которые могут возникнуть из-за срабатывания [Автоматических ограничений](/Sketcher_Dialog/ru#Constraints "Sketcher Dialog/ru").

![](/images/Sketcher_ArcExample3.png)

Дуга создаётся путем ввода всех параметров На-Экране с результирующими автоматически созданными ограничениями

### Отображение координат

Если в [настройках](/Sketcher_Preferences#Display "Sketcher Preferences") установлен флажок (по умолчанию) **Показывать координаты рядом с курсором при редактировании**, то параметры текущего геометрического инструмента (координаты, радиус или длина и угол) отображаются рядом с курсором. Эта функция отключена при отображении параметров На-Экране.

## Методы Выбора

Пока эскиз находится в режиме редактирования, можно использовать следующие методы выделения:

### Выбор элементов в 3D виде

Как и везде в FreeCAD, элемент можно выбрать в [3D виде](/3D_view/ru "3D view/ru") одним щелчком левой кнопки мыши. Но при выборе нескольких элементов нет необходимости удерживать нажатой клавишу Ctrl. Однако удерживание нажатой клавиши возможно, и это имеет то преимущество, что вы можете пропустить щелчок, не потеряв предыдущий выбор. Таким образом можно выбирать рёбра, точки и ограничения.

### Выбор рамкой в 3D виде

Выделение прямоугольником в 3D виде работает без использования [Команды "Выделить область"](/Std_BoxSelection/ru "Std BoxSelection/ru") или [Команды "Область выбора элементов"](/Std_BoxElementSelection/ru "Std BoxElementSelection/ru"):

1. Убедитесь, что ни один инструмент не активен.
2. Выполните одно из следующих действий:
   - Щёлкните в пустой области и растяните прямоугольник слева направо, чтобы выбрать элементы, которые полностью находятся внутри прямоугольника.
   - Щёлкните в пустой области и растяните прямоугольник справа налево, чтобы также выбрать элементы, которые касаются прямоугольника или пересекают его.

Вы можете выделить рамкой рёбра и вершины, но ограничения не могут быть выбраны рамкой.

### Выбор связанной геометрии в 3D виде

[представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

Двойной щелчок на ребре в 3D-виде выделит все рёбра, прямо и косвенно связанные с этим ребром через крайние точки. Нет необходимости, чтобы рёбра были связаны [Ограничением совпадения](/Sketcher_ConstrainCoincident/ru "Sketcher ConstrainCoincident/ru"), достаточно чтобы конечные точки рёбер имели одинаковые координаты.

### Скетчер Диалоговое окно выбора

Рёбра и точки также можно выбрать в разделе «Элементы» [Диалогового окна Скетчера](/Sketcher_Dialog/ru "Sketcher Dialog/ru"), а ограничения - в разделе «Ограничения» этого окна.

## Копирование, вырезание и вставка

[представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

Стандартные сочетания клавиш Ctrl+C, Ctrl+X и Ctrl+V могут использоваться для копирования, вырезания и вставки выбранной геометрии Скетчера, включая связанные ограничения. Но эти инструменты также доступны из меню **Эскиз (Sketch) → Инструменты для эскиза**. Их можно использовать как в пределах одного эскиза, так и между разными эскизами или отдельными моделями FreeCAD. Поскольку данные копируются в буфер обмена в виде кода Python, их можно использовать и другим способом (например, поделиться на форуме).

## Инструменты

Инструменты верстака Скетчер находятся в меню Эскиз (Sketch) и/или на нескольких панелях инструментов. [представлено в версии 0.21](/Release_notes_0.21/ru "Release notes 0.21/ru"): Почти все панели инструментов Скетчера отображаются только тогда, когда эскиз находится в режиме редактирования. Единственным исключением является [Панель инструментов Скетчера](#Sketcher_toolbar/ru), которая отображается только в том случае, если ни один эскиз не находится в режиме редактирования.

Некоторые инструменты также доступны из контекстного меню [3D вида](/3D_view/ru "3D view/ru"), когда эскиз находится в режиме редактирования, или из контекстного меню [Диалогового окна Скетчер](/Sketcher_Dialog/ru "Sketcher Dialog/ru").

[представлено в версии 0.21](/Release_notes_0.21/ru "Release notes 0.21/ru"): Если эскиз находится в режиме редактирования, панель инструментов «Структура» скрывается, так как ни один из её инструментов не может быть использован.

### Основные

### Панель инструментов Скетчера

- ![](/images/Sketcher_NewSketch.svg) [Создать эскиз](/Sketcher_NewSketch/ru "Sketcher NewSketch/ru"): Создаёт новый эскиз и открывает [Диалоговое окно Скетчера](/Sketcher_Dialog/ru "Sketcher Dialog/ru") для его редактирования.

- ![](/images/Sketcher_EditSketch.svg) [Редактировать эскиз](/Sketcher_EditSketch/ru "Sketcher EditSketch/ru"): Открывает диалоговое окно Скетчера для редактирования существующего эскиза.

- ![](/images/Sketcher_MapSketch.svg) [Прикрепить эскиз](/Sketcher_MapSketch/ru "Sketcher MapSketch/ru"): Прикрепляет эскиз к выбранной геометрии.

- ![](/images/Sketcher_ReorientSketch.svg) [Переориентировать эскиз](/Sketcher_ReorientSketch/ru "Sketcher ReorientSketch/ru"): Помещает эскиз на одну из основных плоскостей с дополнительным смещением. Также может использоваться для отсоединения/открепления эскиза.

- ![](/images/Sketcher_ValidateSketch.svg) [Проверить эскиз](/Sketcher_ValidateSketch/ru "Sketcher ValidateSketch/ru"): Позволяет проанализировать и исправить эскиз, который больше не редактируется или имеет недействительные ограничения, а также добавить недостающие ограничения совпадения.

- ![](/images/Sketcher_MergeSketches.svg) [Объединить эскизы](/Sketcher_MergeSketches/ru "Sketcher MergeSketches/ru"): Объединяет два или более эскизов.

- ![](/images/Sketcher_MirrorSketch.svg) [Отразить эскиз зеркально](/Sketcher_MirrorSketch/ru "Sketcher MirrorSketch/ru"): Отражает эскизы относительно своих осей X, Y или относительно начала координат.

#### Панель инструментов Скетчера в Режиме Редактирования

- ![](/images/Sketcher_LeaveSketch.svg) [Покинуть эскиз](/Sketcher_LeaveSketch/ru "Sketcher LeaveSketch/ru"): Завершает режим редактирования эскиза и закрывает [Диалоговое окно Скетчера](/Sketcher_Dialog/ru "Sketcher Dialog/ru").

- ![](/images/Sketcher_ViewSketch.svg) [Просмотр эскиза](/Sketcher_ViewSketch/ru "Sketcher ViewSketch/ru"): Выравнивает [3D вид](/3D_view/ru "3D view/ru") нормально эскиза.

- ![](/images/Sketcher_ViewSection.svg) [Просмотр сечения](/Sketcher_ViewSection/ru "Sketcher ViewSection/ru"): Включает временную плоскость сечения, которая скрывает любые объекты и части объектов перед плоскостью эскиза.

#### Панель Скетчера с инструментами Редактирование

- ![](/images/Sketcher_Grid.svg) [Переключить сетку](/Sketcher_Grid/ru "Sketcher Grid/ru"): Переключает отображение сетки в редактируемом эскизе. Настройки можно изменить в соответствующем меню. [представлено в версии 0.21](/Release_notes_0.21/ru "Release notes 0.21/ru")

- ![](/images/Sketcher_Snap.svg) [Переключить привязку](/Sketcher_Snap/ru "Sketcher Snap/ru"): Включает/выключает привязку во всех эскизах. Настройки можно изменить в соответствующем меню. [представлено в версии 0.21](/Release_notes_0.21/ru "Release notes 0.21/ru")

- ![](/images/Sketcher_RenderingOrder.svg) [Настройка порядка прорисовки](/Sketcher_RenderingOrder/ru "Sketcher RenderingOrder/ru"): Порядок рендеринга/отрисовки всех эскизов можно изменить в соответствующем меню. [представлено в версии 0.21](/Release_notes_0.21/ru "Release notes 0.21/ru")

### Прочее

- ![](/images/Sketcher_StopOperation.svg) [Остановить операцию](/Sketcher_StopOperation/ru "Sketcher StopOperation/ru"): Останавливает любой запущенный в данный момент инструмент создания геометрии или ограничений.

### Геометрические фигуры Скетчера

Эти инструменты предназначенные для создания объектов.

- ![](/images/Sketcher_CreatePoint.svg) [Создать точку](/Sketcher_CreatePoint/ru "Sketcher CreatePoint/ru"): Создаёт точку.

- ![](/images/Sketcher_CreatePolyline.svg) [Создать линию по точкам (полилинию)](/Sketcher_CreatePolyline/ru "Sketcher CreatePolyline/ru"): Создаёт серию отрезков прямых и дуг, соединённых между собой крайними точками. Инструмент имеет несколько режимов.

- ![](/images/Sketcher_CreateLine.svg) [Создать отрезок](/Sketcher_CreateLine/ru "Sketcher CreateLine/ru"): Создаёт линию. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Инструмент имеет три режима работы.

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Создать дугу:

- ![](/images/Sketcher_CreateArc.svg) [Создать дугу от центра](/Sketcher_CreateArc/ru "Sketcher CreateArc/ru"): Создаёт дугу по её центру и конечным точкам. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Или по конечным точкам и точке вдоль дуги.

- ![](/images/Sketcher_Create3PointArc.svg) [Создать дугу по 3 точкам](/Sketcher_Create3PointArc/ru "Sketcher Create3PointArc/ru"): Строит дугу по её конечным точкам и точке вдоль дуги. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Это тот же инструмент, что и [Создать дугу от центра](/Sketcher_CreateArc/ru "Sketcher CreateArc/ru"), но с другим начальным режимом.

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Создать эллиптическую дугу](/Sketcher_CreateArcOfEllipse/ru "Sketcher CreateArcOfEllipse/ru"): Создаёт дугу эллипса.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Создать гиперболическую дугу](/Sketcher_CreateArcOfHyperbola/ru "Sketcher CreateArcOfHyperbola/ru"): Создаёт дугу гиперболы.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Создать параболическую дугу](/Sketcher_CreateArcOfParabola/ru "Sketcher CreateArcOfParabola/ru"): Создаёт дугу параболы.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Создать окружность/эллипс:

- ![](/images/Sketcher_CreateCircle.svg) [Создать круг по центру](/Sketcher_CreateCircle/ru "Sketcher CreateCircle/ru"): Создёет окружность с центром и точкой на окружности. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Или по трём точкам на окружности.

- ![](/images/Sketcher_Create3PointCircle.svg) [Создать круг по 3 точкам](/Sketcher_Create3PointCircle/ru "Sketcher Create3PointCircle/ru"): Создаёт окружность по трём точкам на окружности. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Это тот же инструмент, что и [Создать круг по центру](/Sketcher_CreateCircle/ru "Sketcher CreateCircle/ru"), но с другим начальным режимом.

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Создать эллипс от центра](/Sketcher_CreateEllipseByCenter/ru "Sketcher CreateEllipseByCenter/ru"): Создаёт эллипс по его центру, конечной точке одной из осей и точке на контуре эллипса. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Или по обеим конечным точкам одной из осей и точке на контуре эллипса.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Создать эллипс по 3 точкам](/Sketcher_CreateEllipseBy3Points/ru "Sketcher CreateEllipseBy3Points/ru"): Создаёт эллипс по конечным точкам одной из его осей и точке на контуре эллипса. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Это тот же инструмент, что и [Создать эллипс от центра](/Sketcher_CreateEllipseByCenter/ru "Sketcher CreateEllipseByCenter/ru"), но с другим начальным режимом.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Создать прямоугольник:

- ![](/images/Sketcher_CreateRectangle.svg) [Прямоугольник](/Sketcher_CreateRectangle/ru "Sketcher CreateRectangle/ru"): Создаёт прямоугольник. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Инструмент имеет четыре режима. Скруглённые углы и создание смещённой копии - дополнительные функции.

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Центрированный прямоугольник](/Sketcher_CreateRectangle_Center/ru "Sketcher CreateRectangle Center/ru"): Создаёт центрированный прямоугольник. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Это тот же инструмент, что и [Прямоугольник](/Sketcher_CreateRectangle/ru "Sketcher CreateRectangle/ru"), но с другим начальным режимом.

- ![](/images/Sketcher_CreateOblong.svg) [Скруглённый прямоугольник](/Sketcher_CreateOblong/ru "Sketcher CreateOblong/ru"): Создаёт скруглённый прямоугольник. Аналогично смотри выше.

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Создать правильный многоугольник:

- ![](/images/Sketcher_CreateTriangle.svg) [Треугольник](/Sketcher_CreateTriangle/ru "Sketcher CreateTriangle/ru"): Создаёт равносторонний треугольник. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Это тот же инструмент, что и [Правильный многоугольник](/Sketcher_CreateRegularPolygon/ru "Sketcher CreateRegularPolygon/ru"), но с заданным количеством сторон.

- ![](/images/Sketcher_CreateSquare.svg) [Квадрат](/Sketcher_CreateSquare/ru "Sketcher CreateSquare/ru"): Создаёт квадрат. Аналогично смотри выше.

- ![](/images/Sketcher_CreatePentagon.svg) [Пятиугольник](/Sketcher_CreatePentagon/ru "Sketcher CreatePentagon/ru"): Создаёт пятиугольник. Аналогично смотри выше.

- ![](/images/Sketcher_CreateHexagon.svg) [Шестиугольник](/Sketcher_CreateHexagon/ru "Sketcher CreateHexagon/ru"): Создаёт шестиугольник. Аналогично смотри выше.

- ![](/images/Sketcher_CreateHeptagon.svg) [Семиугольник](/Sketcher_CreateHeptagon/ru "Sketcher CreateHeptagon/ru"): Создаёт семиугольник. Аналогично смотри выше.

- ![](/images/Sketcher_CreateOctagon.svg) [Восьмиугольник](/Sketcher_CreateOctagon/ru "Sketcher CreateOctagon/ru"): Создаёт восьмиугольник. Аналогично смотри выше.

- ![](/images/Sketcher_CreateRegularPolygon.svg) [Правильный многоугольник](/Sketcher_CreateRegularPolygon/ru "Sketcher CreateRegularPolygon/ru"): Создаёт правильный многоугольник. Можно указать количество сторон.

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Создать паз:

- ![](/images/Sketcher_CreateSlot.svg) [Создать паз](/Sketcher_CreateSlot/ru "Sketcher CreateSlot/ru"): Создаёт паз.

- ![](/images/Sketcher_CreateArcSlot.svg) [Создать дуговой слот](/Sketcher_CreateArcSlot/ru "Sketcher CreateArcSlot/ru"): Создаёт паз по дуге. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Создать B-сплайн:

- ![](/images/Sketcher_CreateBSpline.svg) [B-сплайн по контрольным точкам](/Sketcher_CreateBSpline/ru "Sketcher CreateBSpline/ru"): Создаёт кривую B-сплайна по контрольным точкам. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Или по узловым точкам.

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Периодический B-сплайн по контрольным точкам](/Sketcher_CreatePeriodicBSpline/ru "Sketcher CreatePeriodicBSpline/ru"): Создаёт периодическую (замкнутую) кривую B-сплайна по контрольным точкам. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Это тот же инструмент, что и [B-сплайн по контрольным точкам](/Sketcher_CreateBSpline/ru "Sketcher CreateBSpline/ru"), но с другим начальным режимом.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [B-сплайн по узлам](/Sketcher_CreateBSplineByInterpolation/ru "Sketcher CreateBSplineByInterpolation/ru"): Создаёт кривую B-сплайна по узловым точкам. Аналогично смотри выше.

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [Периодический B-сплайн по узлам](/Sketcher_CreatePeriodicBSplineByInterpolation/ru "Sketcher CreatePeriodicBSplineByInterpolation/ru"): Создаёт периодическую (замкнутую) кривую B-сплайна по узловым точкам. Аналогично смотри выше.

- ![](/images/Sketcher_ToggleConstruction.svg) [Переключить вспомогательную геометрию](/Sketcher_ToggleConstruction/ru "Sketcher ToggleConstruction/ru"): Либо переключает инструменты создания геометрии в/из режима построения в режим вспомогательной геометрии, либо переводит выделенную геометрию в/из основной (построительной) во вспомогательную геометрию.

### Ограничения в Скетчере

Это инструменты для создания [ограничений](#Ограничения). Некоторые ограничения требуют использования дополнительных [Вспомогательных ограничений](/Sketcher_helper_constraint/ru "Sketcher helper constraint/ru").

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Размерные ограничения:

- ![](/images/Sketcher_Dimension.svg) [Размер](/Sketcher_Dimension/ru "Sketcher Dimension/ru"): Это контекстно-зависимый инструмент ограничений в верстаке Скетчер. На основе текущего выбора он предлагает соответствующие размерные ограничения, а также геометрические ограничения. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Sketcher_ConstrainDistanceX.svg) [Ограничение расстояния по горизонтали](/Sketcher_ConstrainDistanceX/ru "Sketcher ConstrainDistanceX/ru"): Фиксирует горизонтальное расстояние между двумя точками или конечными точками линии. Если выбран только один элемент, то расстояние устанавливается относительно начала координат.

- ![](/images/Sketcher_ConstrainDistanceY.svg) [Ограничение расстояния по вертикали](/Sketcher_ConstrainDistanceY/ru "Sketcher ConstrainDistanceY/ru"): Фиксирует вертикальное расстояние между двумя точками или конечными точками линии. Если выбран только один элемент, то расстояние устанавливается относительно начала координат.

- ![](/images/Sketcher_ConstrainDistance.svg) [Ограничение Расстояния](/Sketcher_ConstrainDistance/ru "Sketcher ConstrainDistance/ru"): Фиксирует длину прямой, расстояние между двумя точками, расстояние по перпендикуляру между точкой и прямой; или, [представлено в версии 0.21](/Release_notes_0.21/ru "Release notes 0.21/ru"), расстояние между краями двух окружностей или дуг, или между краем окружности или дуги и прямой; или, [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"), длину дуги.

- ![](/images/Sketcher_ConstrainRadiam.svg) [Ограничение радиуса/диаметра автоматически](/Sketcher_ConstrainRadiam/ru "Sketcher ConstrainRadiam/ru"): Фиксирует радиус дуг и круглых сегментов B-сплайна, а также диаметр окружностей.

- ![](/images/Sketcher_ConstrainRadius.svg) [Ограничение Радиуса](/Sketcher_ConstrainRadius/ru "Sketcher ConstrainRadius/ru"): Фиксирует радиус окружностей, дуг и круглых сегментов B-сплайна.

- ![](/images/Sketcher_ConstrainDiameter.svg) [Ограничение Диаметра](/Sketcher_ConstrainDiameter/ru "Sketcher ConstrainDiameter/ru"): Фиксирует диаметр окружностей и дуг.

- ![](/images/Sketcher_ConstrainAngle.svg) [Ограничение Угла](/Sketcher_ConstrainAngle/ru "Sketcher ConstrainAngle/ru"): Фиксирует угол между двумя рёбрами, угол наклона линии к горизонтальной оси эскиза или угол апертуры (раскрытия) круговой дуги.

- ![](/images/Sketcher_ConstrainLock.svg) [Ограничение положения](/Sketcher_ConstrainLock/ru "Sketcher ConstrainLock/ru"): Накладывает ограничения [Расстояния по Горизонтали](/Sketcher_ConstrainDistanceX/ru "Sketcher ConstrainDistanceX/ru") и [Расстояния по Вертикали](/Sketcher_ConstrainDistanceY/ru "Sketcher ConstrainDistanceY/ru") на точки. Если выбрана одна точка, ограничения ссылаются на начало эскиза. Если выбраны две или более точек, ограничения ссылаются на последнюю точку в выборе.

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Ограничение наложения точек](/Sketcher_ConstrainCoincidentUnified/ru "Sketcher ConstrainCoincidentUnified/ru"): Создаёт ограничение совпадения точек, фиксирует точки на рёбрах или осях или создаёт концентрическое ограничение. Объединяет инструменты [Ограничение Наложения точек](/Sketcher_ConstrainCoincident/ru "Sketcher ConstrainCoincident/ru") и [Ограничение точки на объекте](/Sketcher_ConstrainPointOnObject/ru "Sketcher ConstrainPointOnObject/ru"). [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Sketcher_ConstrainCoincident.svg) [Ограничение Наложения точек](/Sketcher_ConstrainCoincident/ru "Sketcher ConstrainCoincident/ru"): Создаёт ограничение, совпадения точек, или концентрическое ограничение.

- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Ограничение Точки на объекте](/Sketcher_ConstrainPointOnObject/ru "Sketcher ConstrainPointOnObject/ru"): Фиксирует точки на рёбрах или осях.

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)Ограничить горизонтальность/вертикальность:

- ![](/images/Sketcher_ConstrainHorVer.svg) [Ограничить горизонтальность/вертикальность](/Sketcher_ConstrainHorVer/ru "Sketcher ConstrainHorVer/ru"): Ограничивает линии или пары точек по горизонтали или вертикали, в зависимости от того, что ближе к текущему выравниванию. Объединяет инструменты [Ограничить горизонталь](/Sketcher_ConstrainHorizontal/ru "Sketcher ConstrainHorizontal/ru") и [Ограничить вертикаль](/Sketcher_ConstrainVertical/ru "Sketcher ConstrainVertical/ru"). [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Sketcher_ConstrainHorizontal.svg) [Ограничить горизонталь](/Sketcher_ConstrainHorizontal/ru "Sketcher ConstrainHorizontal/ru"): Ограничивает горизонтальность линий или пар точек.

- ![](/images/Sketcher_ConstrainVertical.svg) [Ограничить вертикаль](/Sketcher_ConstrainVertical/ru "Sketcher ConstrainVertical/ru"): Ограничивает вертикальность линий или пар точек.

- ![](/images/Sketcher_ConstrainParallel.svg) [Ограничение Параллельности](/Sketcher_ConstrainParallel/ru "Sketcher ConstrainParallel/ru"): Ограничивает параллельность линий.

- ![](/images/Sketcher_ConstrainPerpendicular.svg) [Ограничение перпендикулярности](/Sketcher_ConstrainPerpendicular/ru "Sketcher ConstrainPerpendicular/ru"): Ограничивает перпендикулярность двух линий, двух рёбер или ребра и оси в точке их пересечения. Ограничение также может соединять два ребра, заставляя их быть перпендикулярными на стыке.

- ![](/images/Sketcher_ConstrainTangent.svg) [Ограничить касательную или коллинеарность](/Sketcher_ConstrainTangent/ru "Sketcher ConstrainTangent/ru"): Ограничивает два ребра или ребро и ось, чтобы они были касательными. Ограничение также может соединять два ребра, заставляя их быть касательными на стыке. Если выбраны две линии, они становятся коллинеарными.

- ![](/images/Sketcher_ConstrainEqual.svg) [Ограничение эквивалентностью](/Sketcher_ConstrainEqual/ru "Sketcher ConstrainEqual/ru"): Ограничивает рёбра, чтобы они имели одинаковую длину (для линий) или кривизну (для других рёбер, кроме B-сплайнов).

- ![](/images/Sketcher_ConstrainSymmetric.svg) [Ограничить симметричность](/Sketcher_ConstrainSymmetric/ru "Sketcher ConstrainSymmetric/ru"): Ограничивает две точки, чтобы они были симметричны относительно прямой или оси, или относительно третьей точки.

- ![](/images/Sketcher_ConstrainBlock.svg) [Ограничение перемещения](/Sketcher_ConstrainBlock/ru "Sketcher ConstrainBlock/ru"): Блокирует рёбра на месте с помощью одного ограничения. Предназначен в основном для B-сплайнов.

- ![](/images/Sketcher_ConstrainSnellsLaw.svg) [Ограничение преломления (Закон Снеллиуса)](/Sketcher_ConstrainSnellsLaw/ru "Sketcher ConstrainSnellsLaw/ru"): Ограничивает две линии, чтобы они следовали закону преломления света при прохождении через границу раздела.

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Переключить ограничения:

- ![](/images/Sketcher_ToggleDrivingConstraint.svg) [Переключить ограничения в построительные/основные](/Sketcher_ToggleDrivingConstraint/ru "Sketcher ToggleDrivingConstraint/ru"): Переключает инструменты создания размерных ограничений между основным режимом и построительным (вспомогательным) режимом, а также переключает выбранные размерные ограничения между этими режимами.

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Вкл/выкл ограничение](/Sketcher_ToggleActiveConstraint/ru "Sketcher ToggleActiveConstraint/ru"): Активирует или деактивирует выбранные ограничения.

### Инструменты Скетчера

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Создать скругление/фаску:

- ![](/images/Sketcher_CreateFillet.svg) [Создать скругление](/Sketcher_CreateFillet/ru "Sketcher CreateFillet/ru"): Создаёт скругление между двумя непараллельными рёбрами. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru"): Инструмент также может создавать фаску.

- ![](/images/Sketcher_CreateChamfer.svg) [Создать Фаску](/Sketcher_CreateChamfer "Sketcher CreateChamfer"): Создаёт фаску между двумя непараллельными рёбрами. Это тот же инструмент, что и [Создать скругление](/Sketcher_CreateFillet/ru "Sketcher CreateFillet/ru"), но с другим начальным режимом. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Редактировать ребро:

- ![](/images/Sketcher_Trimming.svg) [Обрезать ребро](/Sketcher_Trimming/ru "Sketcher Trimming/ru"): Обрезает ребро в ближайших точках пересечения с другими рёбрами.

- ![](/images/Sketcher_Split.svg) [Разделить ребро](/Sketcher_Split/ru "Sketcher Split/ru"): Разделяет ребро, сохраняя большинство ограничений.

- ![](/images/Sketcher_Extend.svg) [Продлить ребро](/Sketcher_Extend/ru "Sketcher Extend/ru"): Удлиняет или укорачивает линию или дугу до ближайшего места или до заданного края или точки.

- ![](/images/Sketcher_External.svg) [Внешняя геометрия](/Sketcher_External/ru "Sketcher External/ru"): Проецирует на плоскость эскиза рёбра и/или вершины, принадлежащие объектам вне эскиза. для версии 1.0 и ниже

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Внешняя геометрия:

- ![](/images/Sketcher_Projection.svg) [Создать проекцию внешней геометрии](/Sketcher_Projection/ru "Sketcher Projection/ru"): Создаёт проекции рёбер внешней геометрии. [представлено в версии 1.1](/Release_notes_1.1/ru "Release notes 1.1/ru")

- ![](/images/Sketcher_Intersection.svg) [Создать сечение внешней геометрии](/Sketcher_Intersection/ru "Sketcher Intersection/ru"): Создаёт сечение из рёбер на пересечении внешней геометрии с плоскостью эскиза. [представлено в версии 1.1](/Release_notes_1.1/ru "Release notes 1.1/ru")

- ![](/images/Sketcher_CarbonCopy.svg) [Структурная копия](/Sketcher_CarbonCopy/ru "Sketcher CarbonCopy/ru"): Копирует всю геометрию и ограничения из другого эскиза в активный эскиз.

- ![](/images/Sketcher_SelectOrigin.svg) [Выбрать начало координат](/Sketcher_SelectOrigin/ru "Sketcher SelectOrigin/ru"): Выбирает начало координат эскиза.

- ![](/images/Sketcher_SelectHorizontalAxis.svg) [Выбрать горизонтальную ось](/Sketcher_SelectHorizontalAxis/ru "Sketcher SelectHorizontalAxis/ru"): Выбирает горизонтальную ось (ось абсцисс) эскиза.

- ![](/images/Sketcher_SelectVerticalAxis.svg) [Выбрать вертикальную ось](/Sketcher_SelectVerticalAxis/ru "Sketcher SelectVerticalAxis/ru"): Выбирает вертикальную ось (ось ординат) эскиза.

- ![](/images/Sketcher_Translate.svg) [Преобразование перемещения/массива](/Sketcher_Translate/ru "Sketcher Translate/ru"): Перемещает или, по желанию, создаёт копии выбранных элементов. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Sketcher_Rotate.svg) [Поворот / полярное преобразование](/Sketcher_Rotate/ru "Sketcher Rotate/ru"): Поворачивает или, по желанию, создаёт повернутые копии выбранных элементов. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Sketcher_Scale.svg) [Масштабировать (Шкала трансформации)](/Sketcher_Scale/ru "Sketcher Scale/ru"): Масштабировать или опционально создать масштабированные копии выбранных элементов. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Sketcher_Offset.svg) [Геометрия смещения](/Sketcher_Offset/ru "Sketcher Offset/ru"): Создаёт равноудалённые (эквидистантные) рёбра вокруг выбранных рёбер. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Sketcher_Symmetry.svg) [Симметрия](/Sketcher_Symmetry/ru "Sketcher Symmetry/ru"): Создаёт зеркальные копии выбранных элементов.

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Удалить выравнивание осей](/Sketcher_RemoveAxesAlignment/ru "Sketcher RemoveAxesAlignment/ru"): Удаляет выравнивание относительно осей для выбранных граней, заменяя ограничения [Горизонтально](/Sketcher_ConstrainHorizontal/ru "Sketcher ConstrainHorizontal/ru") и [Вертикально](/Sketcher_ConstrainVertical/ru "Sketcher ConstrainVertical/ru") ограничениями [Параллельно](/Sketcher_ConstrainParallel/ru "Sketcher ConstrainParallel/ru") и [Перпендикулярно](/Sketcher_ConstrainPerpendicular/ru "Sketcher ConstrainPerpendicular/ru").

- ![](/images/Sketcher_DeleteAllGeometry.svg) [Удалить всю геометрию](/Sketcher_DeleteAllGeometry/ru "Sketcher DeleteAllGeometry/ru"): Удаляет всю геометрию и все ограничения из эскиза.

- ![](/images/Sketcher_DeleteAllConstraints.svg) [Удалить все ограничения](/Sketcher_DeleteAllConstraints/ru "Sketcher DeleteAllConstraints/ru"): Удаляет все ограничения из эскиза.

- ![](/images/Edit-copy.svg) Копирование в Скетчере: Смотри [Копирование, вырезание и вставка](#Copy,_cut_and_paste).

- ![](/images/Edit-cut.svg) Вырезание в Скетчере: Смотри [Копирование, вырезание и вставка](#Copy,_cut_and_paste).

- ![](/images/Edit-paste.svg) Вставка в Скетчере: Смотри [Копирование, вырезание и вставка](#Copy,_cut_and_paste).

### Инструменты для B-сплайн Скетчера

- ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Преобразовать геометрию в B-сплайн](/Sketcher_BSplineConvertToNURBS/ru "Sketcher BSplineConvertToNURBS/ru"): Преобразует рёбра в B-сплайны.

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Увеличить степень B-сплайна](/Sketcher_BSplineIncreaseDegree/ru "Sketcher BSplineIncreaseDegree/ru"): Повышает степень (порядок) B-сплайнов.

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Уменьшить степень B-сплайна](/Sketcher_BSplineDecreaseDegree/ru "Sketcher BSplineDecreaseDegree/ru"): Понижает степень (порядок) B-сплайнов.

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Увеличение кратности узлов](/Sketcher_BSplineIncreaseKnotMultiplicity/ru "Sketcher BSplineIncreaseKnotMultiplicity/ru"): Увеличивает кратность узла B-сплайна.

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Уменьшение кратности узлов](/Sketcher_BSplineDecreaseKnotMultiplicity/ru "Sketcher BSplineDecreaseKnotMultiplicity/ru"): Уменьшает кратность узла B-сплайна.

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Вставить узел](/Sketcher_BSplineInsertKnot/ru "Sketcher BSplineInsertKnot/ru"): Вставляет узел в B-сплайн или увеличивает кратность существующего узла.

- ![](/images/Sketcher_JoinCurves.svg) [Объединить кривые](/Sketcher_JoinCurves/ru "Sketcher JoinCurves/ru"): Создаёт B-сплайн путем соединения двух существующих B-сплайнов или других рёбер. [представлено в версии 0.21](/Release_notes_0.21/ru "Release notes 0.21/ru")

### Визуализация в Скетчер

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Выбрать недостаточно ограниченные элементы](/Sketcher_SelectElementsWithDoFs/ru "Sketcher SelectElementsWithDoFs/ru"): Выбирает не полностью ограниченные элементы в эскизе.

- ![](/images/Sketcher_SelectConstraints.svg) [Выбрать связанные ограничения](/Sketcher_SelectConstraints/ru "Sketcher SelectConstraints/ru"): Выбирает ограничения, связанные с указанными элементами эскиза.

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.svg) [Выбрать связанную геометрию](/Sketcher_SelectElementsAssociatedWithConstraints/ru "Sketcher SelectElementsAssociatedWithConstraints/ru"): Выбирает элементы эскиза, связанные с указанными ограничениями.

- ![](/images/Sketcher_SelectRedundantConstraints.svg) [Выбрать избыточные ограничения](/Sketcher_SelectRedundantConstraints/ru "Sketcher SelectRedundantConstraints/ru"): Выбирает избыточные ограничения в эскизе.

- ![](/images/Sketcher_SelectConflictingConstraints.svg) [Выбрать конфликтующие ограничения](/Sketcher_SelectConflictingConstraints/ru "Sketcher SelectConflictingConstraints/ru"): Выбирает конфликтующие ограничения в эскизе.

- ![](/images/Sketcher_ArcOverlay.svg) [Показать/скрыть круговой помощник для дуг](/Sketcher_ArcOverlay/ru "Sketcher ArcOverlay/ru"): Показывает или скрывает круговые подсказки (вспомогательные виртуальные окружности) для дуг во всех эскизах. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Показать/скрыть информационный слой B-сплайна:

- ![](/images/Sketcher_BSplineDegree.svg) [Показать/Скрыть степень B-сплайна](/Sketcher_BSplineDegree/ru "Sketcher BSplineDegree/ru"): Показывает или скрывает степень B-сплайна во всех эскизах.

- ![](/images/Sketcher_BSplinePolygon.svg) [Показать/Скрыть полигон управления B-сплайном](/Sketcher_BSplinePolygon/ru "Sketcher BSplinePolygon/ru"): Показывает или скрывает контрольный полигон B-сплайна во всех эскизах.

- ![](/images/Sketcher_BSplineComb.svg) [Показать/скрыть гребень кривизны B-сплайна](/Sketcher_BSplineComb/ru "Sketcher BSplineComb/ru"): Показывает или скрывает гребень кривизны B-сплайна во всех эскизах.

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Показать/скрыть кратность узлов В-сплайна](/Sketcher_BSplineKnotMultiplicity/ru "Sketcher BSplineKnotMultiplicity/ru"): Показывает или скрывает кратность узла B-сплайна во всех эскизах.

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Показть/скрыть контрольную точку веса B-сплайна](/Sketcher_BSplinePoleWeight/ru "Sketcher BSplinePoleWeight/ru"): Показывает или скрывает вес контрольной точки B-сплайна во всех эскизах.

- ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Показать/скрыть внутреннюю геометрию](/Sketcher_RestoreInternalAlignmentGeometry/ru "Sketcher RestoreInternalAlignmentGeometry/ru"): Удаляет внутреннюю геометрию элементов или воссоздаёт отсутствующую внутреннюю геометрию.

- ![](/images/Sketcher_SwitchVirtualSpace.svg) [Переключение виртуального пространства](/Sketcher_SwitchVirtualSpace/ru "Sketcher SwitchVirtualSpace/ru"): Показывает/скрывает ограничения или переключает видимое виртуальное пространство.

## Устаревшие инструменты

- ![](/images/Sketcher_Clone.svg) [Клонировать](/Sketcher_Clone/ru "Sketcher Clone/ru"): Клонирует элемент Скетчера. Недоступно для версии 1.0 и выше.

- ![](/images/Sketcher_CloseShape.svg) [Замкнуть фигуру](/Sketcher_CloseShape/ru "Sketcher CloseShape/ru"): Создаёт замкнутую фигуру, применяя совпадающие ограничения к конечным точкам. Недоступно для версии 0.21 и выше.

- ![](/images/Sketcher_CreatePointFillet.svg) [Скругление с сохранением ограничений](/Sketcher_CreatePointFillet/ru "Sketcher CreatePointFillet/ru"): Создаёт скругление (галтель) между двумя непараллельными линиями с сохранением их угловой точки. Недоступно для версии 1.0 и выше.

- ![](/images/Sketcher_ConnectLines.svg) [Соединить рёбра](/Sketcher_ConnectLines/ru "Sketcher ConnectLines/ru"): Соединяет элементы Скетчера, применяя совпадающие ограничения к конечным точкам. Недоступно для версии 0.21 и выше.

- ![](/images/Sketcher_Copy.svg) [Копия](/Sketcher_Copy/ru "Sketcher Copy/ru"): Копирует элемент Скетчера. Недоступно для версии 1.0 и выше.

- ![](/images/Sketcher_Move.svg) [Перемещение](/Sketcher_Move/ru "Sketcher Move/ru"): Перемещает выбранную геометрию, используя в качестве точки отсчета последнюю выбранную точку. Недоступно для версии 1.0 и выше.

- ![](/images/Sketcher_RectangularArray.svg) [Прямоугольный массив](/Sketcher_RectangularArray/ru "Sketcher RectangularArray/ru"): Создаёт массив выбранных элементов Скетчера. Недоступно для версии 1.0 и выше.

### Настройки

- ![](/images/Workbench_Sketcher.svg) [Настройки](/Sketcher_Preferences/ru "Sketcher Preferences/ru"): Настройки для верстака Скетчер.

## Лучшая практика применения

Каждый пользователь САПР со временем вырабатывает свой собственный стиль работы, но есть несколько полезных общих принципов, которых следует придерживаться.

- Набором простых эскизов управлять легче, чем одним сложным. Например, первый эскиз может быть создан для применения 3D операции (такой как выдавливание или вращение), а второй может содержать отверстия или вырезы. Некоторые детали могут быть опущены, чтобы позднее быть реализованными 3D-операциями. Вы можете избегать скруглений в эскизе, если их слишком много, и добавить их позднее 3D-операцией.
- Всегда создавайте замкнутый контур, иначе из эскиза не получится создать твёрдое тело, а только набор открытых граней. Если вы не хотите, чтобы некоторые элементы были включены в создание твёрдого тела, переключите их в состав вспомогательных элементов конструкции с помощью инструмента Вспомогательной геометрии.
- Используйте функцию Авто Ограничения, чтобы уменьшить количество ограничений, которые вам нужно будет добавить вручную.
- Как общее правило, сначала применяйте геометрические ограничения, затем размерные, а в последнюю очередь фиксируйте эскиз. Но помните: правила созданы для того, чтобы их нарушать. Если у вас возникли проблемы с манипуляциями с эскизом, может быть полезно сначала ограничить несколько объектов, прежде чем завершить профиль.
- Если возможно, центрируйте эскиз в начале координат (0,0) с помощью ограничения Фиксация. Если эскиз не симметричен, расположите одну из его точек в начале координат или выберите красивые круглые числа для расстояния между точками фиксации.
- Если у вас есть возможность выбрать между ограничением Длина и ограничениями Горизонтальное или Вертикальное расстояние, отдайте предпочтение последним. Ограничения расстояния по горизонтали и вертикали экономичнее с вычислительной точки зрения.
- В целом, лучше всего использовать следующие ограничения: ограничения по Горизонтали и Вертикали; ограничения Длины по Горизонтали и Вертикали; Совпадение точки с точкой. По возможности ограничьте использование следующих ограничений: общее ограничение Длины; Касательность ребра с ребром; ограничение Точки на объекте; Симметричное ограничение.
- Если вы сомневаетесь в корректности эскиза после его завершения (контуры станут зелёными), закройте диалог Скетчера и используйте [24px](/index.php?title=%D0%A4%D0%B0%D0%B9%D0%BB:Sketcher_ValidateSketch.svg&action=edit&redlink=1 "Файл:Sketcher ValidateSketch.svg (page does not exist)") [Проверить эскиз](/Sketcher_ValidateSketch/ru "Sketcher ValidateSketch/ru").

## Уроки

- [Лекция по Скетчеру](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) от chrisb. ЭЭто более чем 80-страничный PDF-документ, который служит подробным руководством по Скетчеру. В нём объясняются основы использования Скетчера, а также подробно рассматривается создание геометрических фигур и все ограничения.
- [Базовый самоучитель по Cкетчеру](/Basic_Sketcher_Tutorial/ru "Basic Sketcher Tutorial/ru") для начинающих
- [Микроучебник Скетчер - Практика использования ограничений](/Sketcher_Micro_Tutorial_-_Constraint_Practices/ru "Sketcher Micro Tutorial - Constraint Practices/ru")
- [Скетчер требования к эскизу](/Sketcher_requirement_for_a_sketch/ru "Sketcher requirement for a sketch/ru") Минимальные требования к эскизу и Полное определение эскиза

## Написание скриптов

Страница [программирование в Sketcher](/Sketcher_scripting/ru "Sketcher scripting/ru") содержит в себе примеры создания различных ограничений через скрипты Python.

## Примеры

Чтобы получить представление о том, чего можно добиться с помощью инструментов Скетчера, посмотрите: [Примеры в Скетчере](/Sketcher_Examples/ru "Sketcher Examples/ru").

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/ru&oldid=1570056>"
