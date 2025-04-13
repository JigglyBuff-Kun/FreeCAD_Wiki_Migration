---
title: Верстак Assembly3
---

![](/images/Assembly3_workbench_icon.svg)

иконка верстака Assembly3

## Введение

![](/images/Assembly3_workbench_icon.svg) Assembly3 это [внешний верстак](/External_workbenches/ru "External workbenches/ru"), используемый для выполнения сборок различных тел, содержащихся в одном файле или нескольких документах. Верстак Assembly3 основан на нескольких изменениях основных функций, сделанных для версии FreeCAD 0.19 (например, [App Link](/App_Link/ru "App Link/ru")), поэтому его нельзя использовать с более ранними версиями.

Основные особенности Верстака Assembly3:

- **динамический/интерактивный решатель**. Это означает, что вы можете перемещать детали с помощью мыши, в то время как решающая программа ограничивает движение. Это позволяет, например, подключить колесо к оси и вращать колесо интерактивно с помощью мыши.
- **ссылки**. Это означает, что вы можете использовать одну единственную деталь, например винт несколько раз в сборке (в разных местах) без дублирования геометрии.
- **внешняя ссылка**. Возможно иметь документ FreeCAD, который содержит только сборку без деталей. Все части могут быть в отдельных файлах. Файлы могут быть даже в библиотеке или где-нибудь еще в файловой системе. Единственное требование - файл должен быть загружен при создании ссылки. После создания ссылки файл должен быть открыт для обновления ссылок, связанных с файлом. Assembly3 решает эту проблему, открывая файлы в фоновом режиме по мере необходимости.
- **иерархические сборки**. Как и в реальной жизни, механический узел может состоять из узлов. Они могут снова состоять из подузлов и так далее.
- **заморозка сборки**. Поскольку ЦП может обрабатывать только определённое количество одновременных ограничений в реальном времени, замораживание сборки позволяет использовать ограничения даже для больших сборок. При замораживании готовых сборок или ограничений, которые не должны оставаться динамическими (например, сварные, болтовые или склеенные детали), они исключаются из расчётов обновления и считаются решателем Assembly3 фиксированной геометрией.

  : Обратите внимание, что другие подходы предлагают другое решение этой проблемы, например ![](/images/Assembly4_workbench_icon.svg) [Верстак Assembly4](/Assembly4_Workbench/ru "Assembly4 Workbench/ru").

[наверх](#top)

### Панели инструментов

По состоянию на 2020 год верстак Assembly3 имеет следующие панели инструментов.

#### Главная Панель Инструментов

: ![](/images/Assembly_New_Assembly.svg) ![](/images/Assembly_New_Group.svg) ![](/images/Assembly_New_Element.svg) ![](/images/Assembly_Import.svg)![](/images/AngleDown.svg)![](/images/Assembly3_workbench_icon.svg) ![](/images/Assembly_QuickSolve.svg) ![](/images/Assembly_Move.svg) ![](/images/Assembly_AxialMove.svg) ![](/images/Assembly_QuickMove.svg) ![](/images/Assembly_LockMover.svg) ![](/images/Assembly_TogglePartVisibility.svg) ![](/images/Assembly_Trace.svg) ![](/images/Assembly_AutoRecompute.svg) ![](/images/Assembly_SmartRecompute.svg) ![](/images/Assembly_AutoFixElement.svg) ![](/images/Assembly_AutoElementVis.svg)![](/images/AngleDown.svg)![](/images/Assembly_Add_Workplane.svg)![](/images/AngleDown.svg)![](/images/Assembly_TreeItemUp.svg) ![](/images/Assembly_TreeItemDown.svg) ![](/images/Assembly_ConstraintMultiply.svg)

: **Главная Панель Инструментов** содержит инструменты, охватывающие наиболее часто используемые функции верстака. Всплывающие подсказки выдадут сочетания клавиш.

- ![](/images/Assembly_New_Assembly.svg) [Create assembly](/Assembly3_CreateAssembly/ru "Assembly3 CreateAssembly/ru"): Добавить папку сборки

  - ![](/images/Assembly_New_Group.svg) [Group objects](/Assembly3_GroupObjects/ru "Assembly3 GroupObjects/ru"): Группировать объекты
  - ![](/images/Assembly_New_Element.svg) [Create element](/Assembly3_CreateElement/ru "Assembly3 CreateElement/ru"): Создать элемент.
  - Импорт из STEP. Имеет две установки
    - ![](/images/Assembly_Import.svg) [Import from STEP](/Assembly3_ImportFromSTEP/ru "Assembly3 ImportFromSTEP/ru"): Импорт STEP-файлов
    - ![](/images/Assembly_ImportMulti.svg) [Import as multi-document](/Assembly3_ImportMultiDocument/ru "Assembly3 ImportMultiDocument/ru"): Импорт сборок из STEP в отдельные документы
  - ![](/images/Assembly3_workbench_icon.svg) [Resolve constraints](/Assembly3_ResolveConstraints/ru "Assembly3 ResolveConstraints/ru"): Разрешить ограничения
  - ![](/images/Assembly_QuickSolve.svg) [Quick solve](/Assembly3_QuickSolve/ru "Assembly3 QuickSolve/ru"): Быстрое разрешение ограничений
  - ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart/ru "Assembly3 MovePart/ru"): Перемещение деталей в 3D, это специфично для Assembly3
  - ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove/ru "Assembly3 AxialMove/ru"): Axial move parts in 3D, это классический инструмент, доступный в любом месте FreeCAD.
  - ![](/images/Assembly_QuickMove.svg) [Быстрое перемещение](/Assembly3_QuickMove/ru "Assembly3 QuickMove/ru"): При этом выделенная в дереве часть будет прикреплена к курсору мыши. Она изменит положение детали при щелчке мышью.

    : Часто добавляемые части накладываются друг на друга в начале координат. Используйте эту функцию, чтобы захватить деталь, которую вы не видите.

  - ![](/images/Assembly_LockMover.svg) [Lock mover](/index.php?title=Assembly3_LockMover/ru&action=edit&redlink=1 "Assembly3 LockMover/ru (page does not exist)"): Блокировка перемещения зафиксированных частей. Переключаемая кнопка. Когда эта кнопка не нажата, можно перемещать части, которые имеют ограничение "Locked".
  - ![](/images/Assembly_TogglePartVisibility.svg) [Переключатель видимости](/index.php?title=Assembly3_TogglePartVisibility/ru&action=edit&redlink=1 "Assembly3 TogglePartVisibility/ru (page does not exist)"): Переключает видимость выделенной части.

    : Обратите внимание, что это отличается использование пробела. Использование пробела для выделенных элементов из подразделов в 3D-виде часто ведет себя не так, как ожидалось. Используйте эту функцию в этих случаях (или сочетание A-Space).

  - ![](/images/Assembly_Trace.svg) [Trace part move](/index.php?title=Assembly3_TracePartMove/ru&action=edit&redlink=1 "Assembly3 TracePartMove/ru (page does not exist)"): Отслеживание перемещения детали (TBD)
  - ![](/images/Assembly_AutoRecompute.svg) [Auto recompute](/index.php?title=Assembly3_AutoRecompute/ru&action=edit&redlink=1 "Assembly3 AutoRecompute/ru (page does not exist)"): Автопересчет. Обычно включено.

    : Может быть не включено при ремонте ограничений или исправлении деталей, когда решатель выдает сообщение _"не сходятся"_ (например, поворачивая деталь на 180 градусов).

  - ![](/images/Assembly_SmartRecompute.svg) [Smart recompute](/index.php?title=Assembly3_SmartRecompute/ru&action=edit&redlink=1 "Assembly3 SmartRecompute/ru (page does not exist)"): Умный пересчёт. Обычно включено.
  - ![](/images/Assembly_AutoFixElement.svg) [Auto fix element](/index.php?title=Assembly3_AutoFixElement/ru&action=edit&redlink=1 "Assembly3 AutoFixElement/ru (page does not exist)"): Автоматическое исправление элементов. Экспериментальная возможность в 0.19_pre
  - Стиль элемента. Имеет две настройки
    - ![](/images/Assembly_AutoElementVis.svg) [Auto element visibility](/index.php?title=Assembly3_AutoElementVisibility/ru&action=edit&redlink=1 "Assembly3 AutoElementVisibility/ru (page does not exist)"): Автоматическая видимость элемента.
    - ![](/images/Assembly_ShowElementCS.svg) [Show element coordinate system](/index.php?title=Assembly3_ShowElementCS/ru&action=edit&redlink=1 "Assembly3 ShowElementCS/ru (page does not exist)"): Показать систему координат элемента.
  - Рабочая плоскость и начала координат. Добавляет рабочую плоскость, размещение или начало координат. Должна быть выбрана деталь. Имеет пять установок
    - ![](/images/Assembly_Add_Workplane.svg) [Add workplane](/index.php?title=Assembly3_AddWorkplane/ru&action=edit&redlink=1 "Assembly3 AddWorkplane/ru (page does not exist)"): добавить рабочую область
    - ![](/images/Assembly_Add_WorkplaneXZ.svg) [Add XZ workplane](/index.php?title=Assembly3_AddXZWorkplane/ru&action=edit&redlink=1 "Assembly3 AddXZWorkplane/ru (page does not exist)"): добавить XZ область
    - ![](/images/Assembly_Add_WorkplaneZY.svg) [Add ZY workplane](/index.php?title=Assembly3_AddZYWorkplane/ru&action=edit&redlink=1 "Assembly3 AddZYWorkplane/ru (page does not exist)"): Добавить YZ область
    - ![](/images/Assembly_Add_Placement.svg) [Add placement](/index.php?title=Assembly3_AddPlacement/ru&action=edit&redlink=1 "Assembly3 AddPlacement/ru (page does not exist)"): добавить Размещение
    - ![](/images/Assembly_Add_Origin.svg) [Add Origin](/index.php?title=Assembly3_AddOrigin/ru&action=edit&redlink=1 "Assembly3 AddOrigin/ru (page does not exist)"): добавить Начало координат
  - ![](/images/Assembly_TreeItemUp.svg) [Move item up](/Assembly3_MoveItemUp/ru "Assembly3 MoveItemUp/ru"): MПереместить выбранный элемент дерева вверх
  - ![](/images/Assembly_TreeItemDown.svg) [Move item down](/index.php?title=Assembly3_MoveItemDown/ru&action=edit&redlink=1 "Assembly3 MoveItemDown/ru (page does not exist)"): Переместите выбранный элемент дерева вниз

    : Позволяет сортировать Детали, Элементы или Ограничения в древе. Сворачивает элемент (сверху вниз и наоборот). Работает лишь при единичном выборе.

  - ![](/images/Assembly_ConstraintMultiply.svg) [Multiply constraint](/index.php?title=Assembly3_MultiplyConstraint/ru&action=edit&redlink=1 "Assembly3 MultiplyConstraint/ru (page does not exist)"): Множественное Ограничение. Это может быть выбрано, если присутствует несколько частей и подходящих Элементов.

    : Используется, например, для назначения нескольких креплений одного типа в несколько отверстий с одним ограничением.

#### Панель Основных Ограничений

: ![](/images/Assembly_ConstraintLock.svg) ![](/images/Assembly_ConstraintAlignment.svg) ![](/images/Assembly_ConstraintCoincidence.svg) ![](/images/Assembly_ConstraintAttachment.svg)![](/images/AngleDown.svg)![](/images/Assembly_ConstraintAxial.svg) ![](/images/Assembly_ConstraintSameOrientation.svg) ![](/images/Assembly_ConstraintMultiParallel.svg) ![](/images/Assembly_ConstraintAngle.svg) ![](/images/Assembly_ConstraintPerpendicular.svg) ![](/images/Assembly_ConstraintPointCoincident.svg) ![](/images/Assembly_ConstraintPointInPlane.svg) ![](/images/Assembly_ConstraintPointOnLine.svg) ![](/images/Assembly_ConstraintPointOnCircle.svg) ![](/images/Assembly_ConstraintPointsDistance.svg) ![](/images/Assembly_ConstraintPointPlaneDistance.svg) ![](/images/Assembly_ConstraintPointLineDistance.svg) ![](/images/Assembly_ConstraintSymmetric.svg) ![](/images/Assembly_ConstraintMore.svg)

: Некоторые инструменты на деле представляют собой меню для дополнительных инструментов.

- ![](/images/Assembly_ConstraintLock.svg) [Locked](/index.php?title=Assembly3_ConstraintLock/ru&action=edit&redlink=1 "Assembly3 ConstraintLock/ru (page does not exist)"): Добавьте ограничение "Locked", чтобы зафиксировать одну или несколько частей.

      :   Вам нужно выбрать элемент геометрии детали.
      :   Если вы фиксируете вершину или ребро, деталь по-прежнему может свободно вращаться вокруг вершины или ребра.
      :   Фиксация грани полностью заблокирует деталь.

  - ![](/images/Assembly_ConstraintAlignment.svg) [Plane Alignment](/index.php?title=Assembly3_ConstraintAlignment/ru&action=edit&redlink=1 "Assembly3 ConstraintAlignment/ru (page does not exist)"): Добавьте ограничение "Plane alignment", чтобы выровнять плоские грани двух или более деталей.

    : Грани становятся копланарными или параллельными с возможной дистанцией.

  - ![](/images/Assembly_ConstraintCoincidence.svg) [Plane Coincidence](/index.php?title=Assembly3_ConstraintCoincidence/ru&action=edit&redlink=1 "Assembly3 ConstraintCoincidence/ru (page does not exist)"): Добавьте ограничение "Plane coincidence", чтобы совместить плоские грани двух или более деталей.

    : Грани совпадут в своих центрах с возможной дистанцией.

  - Attachment имеет две настройки

    - ![](/images/Assembly_ConstraintAttachment.svg) [Attachment](/index.php?title=Assembly3_ConstraintAttachment/ru&action=edit&redlink=1 "Assembly3 ConstraintAttachment/ru (page does not exist)"): Добавьте ограничение "Attachment", чтобы прикрепить две детали с выбранными элементами геометрии.

      : Это ограничение полностью фиксирует детали относительно друг друга.

    - ![](/images/Assembly_ConstraintAttachmentOffset.svg) [AttachmentOffset](/index.php?title=Assembly3_ConstraintAttachmentOffset/ru&action=edit&redlink=1 "Assembly3 ConstraintAttachmentOffset/ru (page does not exist)"): То же, что и ограничение "Attachment", но с сохранением текущего относительного размещения задействованных частей путем установки смещения элемента.

      : Это ограничение полностью фиксирует детали относительно друг друга.

  - ![](/images/Assembly_ConstraintAxial.svg) [Axial Alignment](/index.php?title=Assembly3_ConstraintAxial/ru&action=edit&redlink=1 "Assembly3 ConstraintAxial/ru (page does not exist)"): Добавьте ограничение "Axial alignment" для выравнивания ребер/граней двух или более деталей.

    : ограничение принимает

        :   линейные ребра, которые становятся коллинеарными,
        :   плоские грани, которые выровнены по оси нормали к поверхности,
        :   и цилиндрическая грань, которые выровнены по осевому направлению.

    : Можно смешивать различные типы геометрических элементов.

  - ![](/images/Assembly_ConstraintSameOrientation.svg) [Same orientation](/index.php?title=Assembly3_ConstraintSameOrientation/ru&action=edit&redlink=1 "Assembly3 ConstraintSameOrientation/ru (page does not exist)"): Добавьте ограничение "Same orientation", чтобы выровнять грани двух или более деталей.

    : Плоскости выровнены, чтобы иметь одинаковую ориентацию (т.е. вращение)

  - ![](/images/Assembly_ConstraintMultiParallel.svg) [Multi parallel](/index.php?title=Assembly3_ConstraintMultiParallel/ru&action=edit&redlink=1 "Assembly3 ConstraintMultiParallel/ru (page does not exist)"): Добавьте зависимость "Multi parallel", чтобы сделать плоские грани или линейные ребра двух или более деталей параллельными.
  - ![](/images/Assembly_ConstraintAngle.svg) [Angle](/index.php?title=Assembly3_ConstraintAngle/ru&action=edit&redlink=1 "Assembly3 ConstraintAngle/ru (page does not exist)"): Добавьте ограничение "Angle", чтобы задать угол между плоскими гранями или линейными ребрами двух деталей.
  - ![](/images/Assembly_ConstraintPerpendicular.svg) [Perpendicular](/index.php?title=Assembly3_ConstraintPerpendicular/ru&action=edit&redlink=1 "Assembly3 ConstraintPerpendicular/ru (page does not exist)"): Добавьте ограничение "Perpendicular", чтобы сделать плоские грани или линейные ребра двух деталей перпендикулярными.
  - ![](/images/Assembly_ConstraintPointCoincident.svg) [Points coincident](/index.php?title=Assembly3_ConstraintPointsCoincident/ru&action=edit&redlink=1 "Assembly3 ConstraintPointsCoincident/ru (page does not exist)"): Добавьте ограничение "Point coincident", чтобы совместить две точки в 2D или 3D.
  - ![](/images/Assembly_ConstraintPointInPlane.svg) [Point on plane](/Assembly3_ConstraintPointInPlane/ru "Assembly3 ConstraintPointInPlane/ru"): Добавьте "Point on plane", чтобы ограничить одну или несколько точек плоскостью.
  - ![](/images/Assembly_ConstraintPointOnLine.svg) [Point on line](/index.php?title=Assembly3_ConstraintPointOnLine/ru&action=edit&redlink=1 "Assembly3 ConstraintPointOnLine/ru (page does not exist)"): Добавьте "Point on line", чтобы ограничить точку линией в 2D или 3D.
  - ![](/images/Assembly_ConstraintPointOnCircle.svg) [Point on circle](/index.php?title=Assembly3_ConstraintPointOnCircle/ru&action=edit&redlink=1 "Assembly3 ConstraintPointOnCircle/ru (page does not exist)"): Добавьте "Point on circle", чтобы ограничить одну или несколько точек цилиндрической поверхностью, заданной окружностью.

    : Обратите внимание, что вы должны выбрать точку (любой элемент геометрии может определить точку), а затем выбрать окружность (или цилиндрическую поверхность),
    : после чего вы можете добавить дополнительные точки к вашему выбору, если надо.

  - ![](/images/Assembly_ConstraintPointsDistance.svg) [Points distance](/index.php?title=Assembly3_ConstraintPointsDistance/ru&action=edit&redlink=1 "Assembly3 ConstraintPointsDistance/ru (page does not exist)"): Добавьте "Points distance", чтобы ограничить расстояние между двумя или более точками.
  - ![](/images/Assembly_ConstraintPointPlaneDistance.svg) [Point plane distance](/index.php?title=Assembly3_ConstraintPointPlaneDistance/ru&action=edit&redlink=1 "Assembly3 ConstraintPointPlaneDistance/ru (page does not exist)"): Добавьте "Point plane distance", чтобы ограничить расстояние между одной или несколькими точками и плоскостью.
  - ![](/images/Assembly_ConstraintPointLineDistance.svg) [Point line distance](/index.php?title=Assembly3_ConstraintPointLineDistance/ru&action=edit&redlink=1 "Assembly3 ConstraintPointLineDistance/ru (page does not exist)"): Добавьте "Point line distance" чтобы ограничить расстояние между точкой и линейным ребром в 2D или 3D.
  - ![](/images/Assembly_ConstraintSymmetric.svg) [Symmetric](/index.php?title=Assembly3_ConstraintSymmetric/ru&action=edit&redlink=1 "Assembly3 ConstraintSymmetric/ru (page does not exist)"): Добавьте зависимость "Symmetric", чтобы сделать элементы геометрии двух деталей симметричными относительно плоскости.

    : Поддерживаемые элементы: линейная кромка и плоская грань.

  - ![](/images/Assembly_ConstraintMore.svg) [More](/Assembly3_ConstraintMore/ru "Assembly3 ConstraintMore/ru"): Включение дополнительных панелей инструментов ограничений

    : На деле не ограничение, а тумблер для отображения/скрытия **Additional Constraints Toolbars**.

#### Панель Дополнительных Ограничений

: ![](/images/Assembly_ConstraintPointDistance.svg) ![](/images/Assembly_ConstraintEqualAngle.svg) ![](/images/Assembly_ConstraintPointsSymmetric.svg) ![](/images/Assembly_ConstraintGeneral.svg) ![](/images/Assembly_ConstraintGeneral.svg) ![](/images/Assembly_ConstraintSymmetricLine.svg) ![](/images/Assembly_ConstraintPointsHorizontal.svg) ![](/images/Assembly_ConstraintPointsVertical.svg) ![](/images/Assembly_ConstraintLineHorizontal.svg) ![](/images/Assembly_ConstraintLineVertical.svg) ![](/images/Assembly_ConstraintArcLineTangent.svg) (Assembly3 Constraints2)

: ![](/images/Assembly_ConstraintSketchPlane.svg) ![](/images/Assembly_ConstraintLineLength.svg) ![](/images/Assembly_ConstraintEqualLength.svg) ![](/images/Assembly_ConstraintLengthRatio.svg) ![](/images/Assembly_ConstraintLengthDifference.svg) ![](/images/Assembly_ConstraintLengthEqualPointLineDistance.svg) ![](/images/Assembly_ConstraintEqualLineArcLength.svg) ![](/images/Assembly_ConstraintMidPoint.svg) ![](/images/Assembly_ConstraintDiameter.svg) ![](/images/Assembly_ConstraintEqualRadius.svg) ![](/images/Assembly_ConstraintPointsProjectDistance.svg) ![](/images/Assembly_ConstraintEqualPointLineDistance.svg) ![](/images/Assembly_ConstraintColinear.svg) (Assembly3 Sketch Constraints)

: Их можно включить, нажав кнопку ![](/images/Assembly_ConstraintMore.svg) [More](/Assembly3_ConstraintMore/ru "Assembly3 ConstraintMore/ru") на панели инструментов «Основные ограничения».

- ![](/images/Assembly_ConstraintPointDistance.svg) [Point distance](/index.php?title=Assembly3_ConstraintPointDistance/ru&action=edit&redlink=1 "Assembly3 ConstraintPointDistance/ru (page does not exist)"): Добавьте "Point distance", чтобы ограничить расстояние между двумя точками в 2D или 3D.

  - ![](/images/Assembly_ConstraintEqualAngle.svg) [Equal angle](/index.php?title=Assembly3_ConstraintEqualAngle/ru&action=edit&redlink=1 "Assembly3 ConstraintEqualAngle/ru (page does not exist)"): Добавьте "Equal angle", чтобы приравнять углы между двумя линиями или нормалями.
  - ![](/images/Assembly_ConstraintPointsSymmetric.svg) [Points symmetric](/index.php?title=Assembly3_ConstraintPointsSymmetric/ru&action=edit&redlink=1 "Assembly3 ConstraintPointsSymmetric/ru (page does not exist)"): Добавьте ограничение "Points symmetric" чтобы сделать две точки симметричными относительно плоскости.
  - ![](/images/Assembly_ConstraintGeneral.svg) () [Symmetric horizontal](/index.php?title=Assembly3_ConstraintSymmetricHorizontal/ru&action=edit&redlink=1 "Assembly3 ConstraintSymmetricHorizontal/ru (page does not exist)"): Symmetric horizontal
  - ![](/images/Assembly_ConstraintGeneral.svg) () [Symmetric vertical](/index.php?title=Assembly3_ConstraintSymmetricVertical/ru&action=edit&redlink=1 "Assembly3 ConstraintSymmetricVertical/ru (page does not exist)"): Symmetric vertical
  - ![](/images/Assembly_ConstraintSymmetricLine.svg) [Symmetric line](/index.php?title=Assembly3_ConstraintSymmetricLine/ru&action=edit&redlink=1 "Assembly3 ConstraintSymmetricLine/ru (page does not exist)"): Добавьте ограничение "Symmetric line" чтобы сделать две точки симметричными относительно линии.
  - ![](/images/Assembly_ConstraintPointsHorizontal.svg) [Points horizontal](/index.php?title=Assembly3_ConstraintPointsHorizontal/ru&action=edit&redlink=1 "Assembly3 ConstraintPointsHorizontal/ru (page does not exist)"): Add a "Points horizontal" constraint to make two points horizontal with each other when projected onto a plane.
  - ![](/images/Assembly_ConstraintPointsVertical.svg) [Points vertical](/index.php?title=Assembly3_ConstraintPointsVertical/ru&action=edit&redlink=1 "Assembly3 ConstraintPointsVertical/ru (page does not exist)"): Добавьте ограничение "Points vertical" чтобы сделать две точки горизонтальными относительно друг друга при проецировании на плоскость.
  - ![](/images/Assembly_ConstraintLineHorizontal.svg) [Line horizontal](/index.php?title=Assembly3_ConstraintLineHorizontal/ru&action=edit&redlink=1 "Assembly3 ConstraintLineHorizontal/ru (page does not exist)"): Добавьте ограничение "Line horizontal" чтобы сделать сегмент линии горизонтальным в проекции на плоскость.
  - ![](/images/Assembly_ConstraintLineVertical.svg) [Line vertical](/index.php?title=Assembly3_ConstraintLineVertical/ru&action=edit&redlink=1 "Assembly3 ConstraintLineVertical/ru (page does not exist)"): Добавьте ограничение "Line vertical" чтобы сделать сегмент линии вертикальным при проецировании на плоскость.
  - ![](/images/Assembly_ConstraintArcLineTangent.svg) [Arc line tangent](/index.php?title=Assembly3_ConstraintArcLineTangent/ru&action=edit&redlink=1 "Assembly3 ConstraintArcLineTangent/ru (page does not exist)"): Добавьте зависимость "Arc line tangent" чтобы сделать линию касательной к дуге в начальной или конечной точке дуги.

- ![](/images/Assembly_ConstraintSketchPlane.svg) [Sketch plane](/Assembly3_ConstraintSketchPlane/ru "Assembly3 ConstraintSketchPlane/ru"): Добавьте "Sketch plane" (плоскость эскиза), чтобы определить рабочую плоскость любого элемента уклона внутри или после этого ограничения.

      :   Добавьте пустую "плоскость эскиза", чтобы отменить определение предыдущей рабочей плоскости.

  - ![](/images/Assembly_ConstraintLineLength.svg) [Line length](/index.php?title=Assembly3_ConstraintLineLength/ru&action=edit&redlink=1 "Assembly3 ConstraintLineLength/ru (page does not exist)"): Добавление ограничения "Line length", определяющего длину неразделенного объекта Draft.Wire.
  - ![](/images/Assembly_ConstraintEqualLength.svg) [Equal length](/index.php?title=Assembly3_ConstraintEqualLength/ru&action=edit&redlink=1 "Assembly3 ConstraintEqualLength/ru (page does not exist)"): Добавьте ограничение "Equal length" (равная длина), чтобы сделать две линии одной длины.
  - ![](/images/Assembly_ConstraintLengthRatio.svg) [Length ratio](/index.php?title=Assembly3_ConstraintLengthRatio/ru&action=edit&redlink=1 "Assembly3 ConstraintLengthRatio/ru (page does not exist)"): Добавьте "Length ratio" чтобы ограничить соотношение длины двух линий.
  - ![](/images/Assembly_ConstraintLengthDifference.svg) [Length difference](/index.php?title=Assembly3_ConstraintLengthDifference/ru&action=edit&redlink=1 "Assembly3 ConstraintLengthDifference/ru (page does not exist)"): Добавьте "Length difference" чтобы ограничить по разности длины двух линий.
  - ![](/images/Assembly_ConstraintLengthEqualPointLineDistance.svg) [Length Equal Point Line Distance](/index.php?title=Assembly3_ConstraintLengthEqualPointLineDistance/ru&action=edit&redlink=1 "Assembly3 ConstraintLengthEqualPointLineDistance/ru (page does not exist)"): Добавьте "Length Equal Point Line Distance" для ограничения дистанции

    : между точкой и линией той же величиной, что длина другой линии.

  - ![](/images/Assembly_ConstraintGeneral.svg) ( ![](/images/Assembly_ConstraintEqualLineArcLength.svg) )[Equal Line Arc Length](/index.php?title=Assembly3_ConstraintEqualLineArcLength/ru&action=edit&redlink=1 "Assembly3 ConstraintEqualLineArcLength/ru (page does not exist)"): Добавьте ограничение "Equal Line Arc Length", чтобы сделать длину линии равной длине дуги.
  - ![](/images/Assembly_ConstraintMidPoint.svg) [Mid point](/index.php?title=Assembly3_ConstraintMidPoint/ru&action=edit&redlink=1 "Assembly3 ConstraintMidPoint/ru (page does not exist)"): Добавьте ограничение "Mid point" чтобы установить положение точки в середине линии.
  - ![](/images/Assembly_ConstraintDiameter.svg) [Diameter](/index.php?title=Assembly3_ConstraintDiameter/ru&action=edit&redlink=1 "Assembly3 ConstraintDiameter/ru (page does not exist)"): Добавьте "Diameter" чтобы ограничить диаметр окружности/дуги.
  - ![](/images/Assembly_ConstraintEqualRadius.svg) [Equal radius](/index.php?title=Assembly3_ConstraintEqualRadius/ru&action=edit&redlink=1 "Assembly3 ConstraintEqualRadius/ru (page does not exist)"): Добавьте ограничение "Equal radius" чтобы сделать равным радиусы двух окружностей/дуг.
  - ![](/images/Assembly_ConstraintPointsProjectDistance.svg) [Points project distance](/index.php?title=Assembly3_ConstraintPointsProjectDistance/ru&action=edit&redlink=1 "Assembly3 ConstraintPointsProjectDistance/ru (page does not exist)"): Добавьте "Points project distance" чтобы ограничить спроецированное на линию расстояние между точками.
  - ![](/images/Assembly_ConstraintEqualPointLineDistance.svg) [Equal point line distance](/index.php?title=Assembly3_ConstraintEqualPointLineDistance/ru&action=edit&redlink=1 "Assembly3 ConstraintEqualPointLineDistance/ru (page does not exist)"): Добавьте "Equal point line distance" чтобы ограничить дистанцию

    : между точкой и линией равной дистанции между другой точкой и линией.

  - ![](/images/Assembly_ConstraintColinear.svg) [Colinear](/index.php?title=Assembly3_ConstraintColinear/ru&action=edit&redlink=1 "Assembly3 ConstraintColinear/ru (page does not exist)"): Добавьте ограничение "Colinear" чтобы сделать две линии коллинеарными.

: Панель **Ограничений** (**Constraints tool bars**) будет основной панелью, используемой при сборке деталей.
: По умолчанию она неактивна, но активируются после выбора хотя бы одной грани, линии или точки детали.
: Обычно вы выбираете элементы, которые должны быть объединены, а затем выбираете тип ограничения.
: Различные цветные рамки отмечают различные характеристики ограничений:

    :   2D/3D при добавлении более 2 Элементов.

: Подробное описание можно найти в вики Gibhub.

#### Панель Навигации

: ![](/images/Assembly_GotoRelation.svg) ![](/images/LinkSelect.svg) ![](/images/LinkSelectFinal.svg)

: Эти функции полезны при работе со сборкой с иерархией связанных внешних файлов.

- ![](/images/Assembly_GotoRelation.svg) [Go to relation](/index.php?title=Assembly3_GoToRelation/ru&action=edit&redlink=1 "Assembly3 GoToRelation/ru (page does not exist)"): Открывает группу отношений (по умолчанию скрыта) и выбирает объект отношения.
  - ![](/images/Std_LinkSelectLinked.svg) [Select linked object](/Std_LinkSelectLinked/ru "Std LinkSelectLinked/ru"): Выбирает связанный объект и переключается на его документ. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")
  - ![](/images/Std_LinkSelectLinkedFinal.svg) [Select linked final](/Std_LinkSelectLinkedFinal/ru "Std LinkSelectLinkedFinal/ru"): Выбирает объект с самыми глубокими ссылками и переключается на его документ. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

#### Панель Измерений

: ![](/images/Assembly_MeasurePointDistance.svg) ![](/images/Assembly_MeasurePointLineDistance.svg) ![](/images/Assembly_MeasurePointPlaneDistance.svg) ![](/images/Assembly_MeasureAngle.svg)

: **Панель измерений** добавляет функции для измерения расстояний между двумя объектами.

- ![](/images/Assembly_MeasurePointDistance.svg) [Measure points](/index.php?title=Assembly3_MeasurePoints/ru&action=edit&redlink=1 "Assembly3 MeasurePoints/ru (page does not exist)"): Добавьте "Measure points" для измерения расстояния между двумя точками в 2D или 3D.
  - ![](/images/Assembly_MeasurePointLineDistance.svg) [Measure point to line](/index.php?title=Assembly3_MeasurePointLine/ru&action=edit&redlink=1 "Assembly3 MeasurePointLine/ru (page does not exist)"): Добавьте "Measure point to line" для измерения расстояния между точкой и линейным ребром в 2D или 3D.
  - ![](/images/Assembly_MeasurePointPlaneDistance.svg) [Measure point to plane](/index.php?title=Assembly3_MeasurePointPlane/ru&action=edit&redlink=1 "Assembly3 MeasurePointPlane/ru (page does not exist)"): Добавьте "Measure point to plane" для измерения угла между точкой и плоскостью.
  - ![](/images/Assembly_MeasureAngle.svg) [Measure angle](/index.php?title=Assembly3_MeasureAngle/ru&action=edit&redlink=1 "Assembly3 MeasureAngle/ru (page does not exist)"): Добавьте "Measure angle" для измерения угла между плоскими гранями или линейными рёбрами двух разных деталей.

: Функции измерения радиуса или диаметра нет. .
: Инструменты измерения выдерживают замену деталей, например расстояние между краями куба при изменении размера куба.
: Поскольку вычисления ограничений выполняются в реальном времени и обновляются при любых изменениях. За кулисами функция очень похожа на [ограничения](#Ограничения/ru). Расстояние или угол между [элементами](#Элементы) рассчитывается таким же образом, как и для [ограничений](#Ограничения). Отображение в дереве работает аналогично.

Как обычно, вы можете изменять панели инструментов и добавлять или удалять отдельные инструменты. Обязательно проверьте меню Assembly3 на наличие функций, которые могут отсутствовать на панели инструментов.

[наверх](#top)

### Ограничения

Проектировщик использует ограничения для достижения желаемого результата для соотношения двух частей. Выбор правильных ограничений, которые лучше всего подходят для решения каждой проблемы - Искусство. Каждая удалённая степень свободы теоретически должна устраняться только один раз между двумя объектами, но на практике со многими инструментами САПР выбранные ограничения создают комбинации избыточных ограничений, порой компенсируемые сложными алгоритмами, а порой нет. Assembly3 действительно использует алгоритмы для выявления и компенсации избыточных ограничений, но очевидно, что они еще не очень развиты. Таким образом, на практике для ограничений Assembly3 можно избежать проблем, зная, сколько степеней свободы (DOF) было использовано, а какие ещё предстоит заблокировать. Никакая часть не должна иметь связи с ограничениями превышающими 6 степеней свободы.

: Примечание: Если решатель встречает комбинацию, которую невозможно разрешить, он выдаст ошибку. Решателю сложно выяснить, что вызвало проблему, поэтому, как правило, из данной ошибки не будет ясно, «где» проблема. В крупных сборках это может привести к сложному поиску проблем. К сожалению, нет простого способа избежать этого. Однако это подталкивает полностью осознавать как работает система (например, см. [Elements](#Elements) ниже), использовать чёткие имена для всех задействованных компонентов и добавлять новые ограничения лишь когда решатель может разрешить текущую сборку. Очень полезной для отслеживания проблемы является функция «ContexMenu/Deactivate» у каждого ограничения.

Ограничения Assembly3 определяют ограничения в положении или ориентации между двумя [элементами](#Элементы). Некоторые ограничения работают даже с более чем двумя [Элементами](#Элементы). [Элемент](#Элементы) может быть гранью, линией, кромкой или точкой детали. Обычно ограничения определяются путем выбора желаемого [элемента](#Элементы), а затем выбора ограничения на [панели инструментов](#Панели_инструментов) Constraints.

- Фиксирует 6 степеней свободы, оставляют 0:
  - **Lock**: ограничение блокирует все степени свободы грани. Его следует использовать для одной базовой детали в каждой сборке. Вы также можете включить функцию _MoveLock_ (на панели инструментов), чтобы деталь не могла быть перемещена случайно. Обычно не имеет значения, какую грань/линию/точку вы используете для фиксации детали. Также обратите внимание, что блокировка действительна только для прямой сборки, то есть в случае подсборки родительской сборке все равно потребуется заблокированная деталь сама по себе.
  - **Attachment**: Делает системы координат обоих элементов одинаковыми для всех осей. Это самая простая функция с точки зрения вычислений, и ее следует использовать везде, где это возможно. Обратите внимание, что вы можете использовать свойства элемента для компенсации смещений и углов, если два [Элемента](#Элементы) не идеально выровнены.
- Фиксирует 5 степеней свободы, оставляет 1:
  - **Plane Coincident**: фиксирует Tx, Ty, Tz, Rx, Ry. Только Rz свободен. Остаётся вращение вокруг нормали, проходящей через «центр плоскости».
- Фиксируют 4 степеней свободы, оставляют 2:
  - **Axial Alignment**: фиксирует Tx, Ty, Rx, Ry. Только Tz, Rz свободен. Остается вращение вокруг оси формы и перенос вдоль этой же оси. Два ограничения _PointOnLine_ (при различных точках) дают тот же результат. Ограничение '‘Colinear'’ - тоже.
  - **PointOnLine**: Исключает сдвиг и вращение вдоль нормали к опорной линии. Допускаются только перемещение и вращение по оси линии.
- Фиксируют 3 степени свободы, оставляют 3:
  - **Same Orientation**: фиксирует Rx, Rz, Rz. Все Т остаются свободными.
  - **Points Coincident**: фиксирует Tx, Ty, Tz. Все R остаются свободными.
  - **PointOnPoint** исключает 3 сдвига.
  - **Plane Alignment**: фиксирует Tz, Rx, Ry (движение в плоскости). Это исключает смещение по нормали к базовой плоскости и два вращения вокруг осей этой плоскости.
- Фиксируют 2 степени свободы, оставляют 4:
  - **Multi Parallel**: фиксирует Rx, Ry, все T и R остаются. Это исключает два вращения вокруг осей базовой плоскости.
- Фиксируют 1 степень свободы, оставляют 5:

  - **Points in Plane**: фиксирует Tz. Это исключает смещение по нормали к базовой плоскости.
  - **Points Distance**: фиксирует расстояние между исходными точками элемента.

    : Это дает вам больше свободы, чем _Points in Plane_.

Другое

- **Points on Circle**: фиксирует Tz и частично Tx, Ty. Замораживает перемещение точки (или нескольких точек) в области круга или диска. Вы должны выбрать круг вторым. Это оставляет все вращения свободными и даёт ограниченный сдвиг в базовой плоскости круга.

_: Примечание: В следующем списке Tx, Ty, Tz и Rx, Ry, Rz используются для описания перемещений и поворотов относительно опорных систем координат задействованных Элементов. Это не всегда точно или полностью определено, например когда задействована линия, не определяется, проходит ли она по X, Y или под любым углом между ними. Система используется для простоты и легкости сравнения взамен правильного, но более сложного определения. Таким образом, Z обычно является нормальным направлением всех задействованных граней. Пожалуйста, не стесняйтесь изменять это, используя лучший подход с улучшенной читаемостью._

[наверх](#top)

### Элементы

Элементы это особый термин, используемый в верстаке Assembly 3. Понимание Элементов важно для понимания того, как следует использовать Assembly 3.

Полезно думать об элементе как об общем слове, обозначающем «выбираемый элемент» детали, то есть грань, ребро, круг, угол или другую точку. Элементы, которые вы выбираете для их ограничения, являются этими Элементами. В дереве папка Assembly имеет три подпапки. Рядом с 'Parts' и 'Constraints' есть папка 'Elements', которая пуста, пока не добавлены ограничения. При добавлении ограничения само ограничение получает два (или более) листа, это выбранные «Элементы». Также они добавляются в папку «Элементы», которая представляет собой просто список всех элементов, используемых в сборке. Рекомендуется изменить их имена (с помощью клавиши F2), особенно в больших сборках.

Давайте рассмотрим пример

: Создайте новый файл и добавьте куб и цилиндр с помощью верстака Part. Установите цилиндр над кубом. Сначала зафиксируйте базовую деталь, в нашем случае куб. Выберите нижнюю сторону куба и установите ограничения "Locked" (первая иконка в Constraints [toolbar](#Toolbars)). Выберите верхнюю сторону цилиндра и верхнюю сторону куба. Затем выберите ограничение "Совпадение плоскостей" ("Plane Coincident"). Теперь цилиндр переместится в куб и в дереве в разделе 'Constraints' ("Ограничения") будет добавлен новый елемент с двумя дочерними узлами. Дополнительно те же самые два дочерних узла будут добавлены в разделе 'Elements' ("Элементы"). Если Ваш цилиндр внутри куба а не сверху, исправим это сначала: выберите дочерний узел в разделе 'Constraints' ("Ограничения"), который является гранью цилиндра, щелкните правой кнопкой мыши и в контекстном меню и выберите 'Flip Part' ("Перевернуть Деталь"). Теперь цилиндр будет установлен на куб.

Главное, что нужно понять, - это то, что ограничение действует на ссылки на элементы в списке в папке дерева 'Elements'. Это позволяет сохранять структуру ограничений без изменений при замене деталей. Это очень сложно увидеть без примера.

Вернемся к примеру выше

: Примечание: убедитесь, что вы добавили в куб ограничение "Locked", иначе это может сбивать с толку.
: В окне САПР выберите другую грань куба. Теперь мы работаем только в древовидной структуре. Перейдите мышкой по дереву, в котором должен быть выбран куб. Перетащите кубик в папку 'Elements'. Перетащите его на имя 'Elements', а не где-нибудь еще в папке - причину мы увидим позже. Вы должны увидеть, что в список 'Elements' добавлен еще один элемент. Теперь выберите в папке 'Constraints' дочерний узел грани куба в ограничении "Plane Coincident" и удалите его. Ограничение покажет восклицательный знак, так как отсутствует один элемент. Обратите внимание, что, удалив элемент в ограничении, мы _не_ удалили его в списке. Это потому, что в ограничении была только ссылка на элемент в списке. Теперь возьмите только что добавленный элемент в списке 'Elements' и перетащите его на ограничение "Plane Coincident". Теперь цилиндр переместится на другую выбранную грань. Нам может понадобиться снова выбрать в контекстном меню 'flip part', если цилиндр снова окажется внутри куба.

Пример показал, что, не удаляя ограничение, мы можем менять элементы, которые используются для ограничения. Таким же образом мы можем переместить цилиндр в совершенно другую часть. Поигравшись с этим примером еще немного, вы заметите некоторые дополнительные вещи, как

- Если вы переименуете элемент в списке, имя будет изменено во всех ограничениях.
- вы можете использовать один элемент в списке в нескольких ограничениях.
- Вы можете использовать окно свойств элемента, чтобы добавить **смещения**. В примере это может перемещать цилиндр по грани куба.
- вы можете использовать кнопку "Show Element Coordinate System" на главной панели инструментов, чтобы увидеть, что делают в контекстном меню 'Flip Part' и 'Flip Element'. Обязательно посмотрите, что происходит в окне свойств.
- вы можете добавить ограничение в совершенно другом порядке: сначала добавьте несколько элементов в «Список элементов» (полезно наименование, например, «Верхняя грань куба» или «Лицевая грань куба»), затем добавьте ограничение, ничего не выбирая - это будет пустым ограничением. Затем перетащите элементы из списка «Элементы». Результат такой же, как и в первом примере. После выполнения этого упражнения должно быть ясно, как работают ограничения с элементами.
- вы можете изменить существующее ограничение между существующими элементами, просто выбрав другой элемент в свойстве PropertyWindow/ConstraintType.

[наверх](#top)

## Совместимость

На Assembly3 повлиял [Assembly2](/Assembly2_Workbench/ru "Assembly2 Workbench/ru"), но они не совместимы. Если у Вас есть старые модели, созданные в Assembly2, оставайтесь на FreeCAD 0.16 и используйте Assembly2 с ним.

Новые модели, разработанные с помощью Assembly3, следует открывать и редактировать только с помощью этого верстака.

Несмотря на наличие похожих инструментов, Assembly3 не совместим ни с [A2plus](/A2plus_Workbench "A2plus Workbench"), ни с [Assembly4](/Assembly4_Workbench "Assembly4 Workbench"). Модели, созданные в этих верстаках, должны открываться только своими верстаками.

[наверх](#top)

## Установка

Верстак Assembly3 (по состоянию на март 2022) доступен через [Менеджер Дополнений](/Std_AddonMgr/ru "Std AddonMgr/ru"). Любые сторонние зависимости Assembly3 должны разрешаться автоматически Менеджером Дополнений.

#### Альтернативные установки

Существует два альтернативных способа установки Assembly3:

- Отдельная ветка FreeCAD, сделанная realthunder; смотри [здесь](https://github.com/realthunder/FreeCAD/releases). Эта ветка базируется на конкретной точке главной ветки FreeCAD, но имеет дополнительные возможности, пока не присутствующие в главной ветке. Поскольку эта ветвь базируется на конкретном слепке с процесса разработки, в неё не попали позднейшие возможности, внедрённые позднее в главную ветку.
- [AppImage](/AppImage/ru "AppImage/ru") разрабатываемой версии; она базируется на текущей главной ветке, и включает зависимости, необходимые для работы с Assembly3, такие как решатель SolveSpace.

Поскольку AppImage работает только для Linux, выбором для пользователей Windows (кто хочет установить Assembly3 альтернативным путём) будет лишь первый вариант тестирования Assembly3 (ветка realthunderа).

[наверх](#top)

## Как...

### Начать

Есть много способов создать сборку с помощью Assembly3. Вот самый простой из возможных вариантов.

: ![](/images/Assembly3_Example-GettingStarted.jpg)
: _Окончательный результат примера «Начало работы». На изображении выбран верстак Assembly3, поэтому видно несколько его панелей инструментов. Обратите внимание, что вертикальная «TabBar» слева от древовидного представления - это верстак AddOn, который не содержится в стандартном FreeCAD (но может быть установлен с помощью Addon-Manager)._

- Press ![](/images/Std_New.svg) [New](/Std_New/ru "Std New/ru") для создания нового файла FreeCAD
- Выберите верстак ![](/images/Assembly3_workbench_icon.svg) Assembly3.
- Выберите ![](/images/Assembly_New_Assembly.svg) [Create assembly](/Assembly3_CreateAssembly/ru "Assembly3 CreateAssembly/ru")
- Перейдите на верстак ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/ru "Part Workbench/ru") добавьте ![](/images/Part_Cylinder.svg) [Cylinder](/Part_Cylinder/ru "Part Cylinder/ru") и ![](/images/Part_Box.svg) [Cube](/Part_Box/ru "Part Box/ru")
- ![](/images/Std_Save.svg) [Сохраните](/Std_Save/ru "Std Save/ru") файл с любым именем, которое вам нравится. ![](/images/Std_CloseActiveWindow.svg) [Закройте](/Std_CloseActiveWindow/ru "Std CloseActiveWindow/ru") and ![](/images/Std_Open.svg) [откройте](/Std_Open/ru "Std Open/ru") файл снова.

Древовидное представление должно выглядеть так (0.20.pre и Link Branch):

![](/images/Assembly3_Example-Tree-01.png) ![](/images/Assembly3_Example-Tree-02.png)

- Теперь перетащите мышью **Cylinder** и **Cube** на папку **Parts**. Они переместятся внутрь.

  : Это самый быстрый способ, подходящий для простых случаев вроде этого. Лучше использовать объект link:
  : Выбрать **Cube** и **Cylinder** и затем ![](/images/Std_LinkMake.svg) [Make link](/Std_LinkMake/ru "Std LinkMake/ru") или через **Context menu** (-> LinkActions -> MakeLink) или через панель **Structure**.
  : Это добавляет два объекта ссылок. Затем перетащите объекты ссылок в папку _Parts_.

- Щелкните по обеим верхним поверхностям цилиндра и куба (удерживая Ctrl, или Cmd на Mac)
- Выберите верстак ![](/images/Assembly3_workbench_icon.svg) Assembly3.
- Выберите ![](/images/Assembly_ConstraintCoincidence.svg) [Plane Coincidence](/Assembly3_ConstraintCoincidence "Assembly3 ConstraintCoincidence") из [Main constraints toolbar](#Main_Constraints_Toolbar/ru).

Теперь части должны быть соединены друг с другом, и ваше дерево должно выглядеть примерно так (0.20.pre и Link Branch):

![](/images/Assembly3_Example-Tree-03.png) ![](/images/Assembly3_Example-Tree-04.png)

- Щелкните правой кнопкой мыши **\_Element** (любой из двух) и выберите "Flip Part".

- : Теперь **цилиндр** должен быть наверху **коробки**. Если перевёрнуто всё, вернитесь и выберите "Flip Part" на другом элементе.

: Мы пропустили один важный шаг, который должен выполняться в больших сборках: блокировка базовой детали.
: Это означает, что нужно определить одну деталь, которую нельзя будет перемещать по ограничениям. В вашем случае для этого мы используем куб:

    * Выберите нижнюю грань куба. Только нижняя грань, а не весь куб.
    * выберите ограничение ![](/images/Assembly_ConstraintLock.svg) [Locked](/Assembly3_ConstraintLock "Assembly3 ConstraintLock") на [панели инструментов ограничения](#Main_Constraints_Toolbar)

Готово.

Готовое дерево сборки должно выглядеть примерно как (0.20.pre и Link Branch):

![](/images/Assembly3_Example-Tree-05.png) ![](/images/Assembly3_Example-Tree-06.png):

Если хотите, можете переместить ограничение **Locked** вверх по дереву. Для этого используйте кнопку ![](/images/Assembly_TreeItemUp.svg) [Move item up](/Assembly3_MoveItemUp/ru "Assembly3 MoveItemUp/ru") на главной [панели инструментов](#Main_Toolbar).

**Заметьте**: все новые внешние файлы должны быть **сохранены**, **закрыты** и повторно открыты как минимум один раз, чтобы Assembly3 могла их найти.

: Без этого FreeCAD не сможет передать дескриптор файла верстаку Assembly3 и он не сможет найти новую деталь.
: Когда все части находятся в том же файле, вы тоже должны **сохранить**, **закрыть** и снова открыть файл.

[наверх](#top)

### Добавить смещение

Assembly3 не предлагает смещение с константами, как это делают [верстак A2plus](/A2plus_Workbench/ru "A2plus Workbench/ru") или другие инструменты САПР. Вместо этого он предлагает более общую и гибкую систему для добавления сдвигов, а также углов.

- Добавьте смещение в свойствах одного [Elements](#Элементы) из [Constraint](#Ограничения).

  : вы можете выбрать любой из двух.

Пример:

- Добавьте 2 куба в сборку и выберите их боковые грани.
- выберите "PlaneCoincident". Кубики будут прикреплены друг к другу.
- выберите один элемент и «Контекстное меню → Flip Part». Кубики будут прикреплены бок о бок.
- выберите одно свойство элемента Offset/Position/Zz и установите значение 5 мм. Кубики будут находиться на расстоянии 5 мм друг от друга.

: \* Проверьте с другими осями или полями углов/осей. Также убедитесь, что вы получаете тот же результат при использовании другого элемента.

Для других Ограничений применяется аналогичный подход.

[наверх](#top)

### Устранить сбой решателя

Это часто случается, когда детали чрезмерно ограничены, т.е. заблокировано более 6 степеней свободы.

Самый простой способ найти проблему - щелкнуть соответствующие ограничения в дереве и выбрать в контекстном меню _Disable_ и произвести повторный расчёт. Полезно узнать последние добавленные ограничения перед отказом решателя и просто отменить их.

Примечание: поскольку Assembly3 пытается за кулисами скомпенсировать чрезмерно ограниченные части, иногда проблема просто запускается новым ограничением, но основная причина в другом. Прежде чем удалить все и начать заново, помните, что вы можете повторно использовать элементы. Если вы назвали их, вы можете определить необходимые элементы и заново построить ограничения, вообще не используя трехмерный вид. Смотрите раздел [Элементы](#Элементы) выше.

[наверх](#top)

### Заменить деталь или переименовать файл

Когда деталь удаляется или изменяется имя файла, сборка ломается, ее нельзя решить, и решатель выдаст сообщение "Inconsistent constraints" («Несогласованные ограничения»). Решатель помечает недопустимые элементы и ограничения в дереве знаком вопроса.

Один из способов решить эту проблему - просто удалить все недопустимые ограничения и элементы, импортировать новую часть и все повторить. Но есть способ лучше:

- Переименуйте файл

  1. Используя файловый менеджер скопируйте файл, который хотите переименовать. Затем дайте копии новое имя.
  2. Откройте копию в FreeCAD. Сборка и старый файл тоже должны быть открыты
  3. Выберите старый объект в дереве и нажмите на поле для изменения свойства "Linked object" («Связанный объект») (оно должно содержать старое имя файла)
  4. Откроется диалоговое окно со списком всех открытых деталей. Он показывает имена файлов и объекты каждой детали. Выберите старую деталь и объект. Найдите переименованную деталь в дереве и выберите тот же объект в новой детали. Затем подтвердите выбор.
  5. Удалить старую деталь в дереве. Также можно удалить и файл.
  6. Ограничения и элементы старой детали стали недействительными. Откройте ограничения или список элементов в дереве. Затем последовательно
     - выберите грани каждого элемента на новой детали. Элемент в дереве будет выделен.
     - Возьмите этот элемент и перетащите его на старый элемент (либо в списке элементов, либо в одном из ограничений, где он использовался). Этот элемент должен стать действительным.
     - Повторите процедуру для остальных элементов. Часто одного элемента достаточно, чтобы Assembly3 могла автоматически идентифицировать остальные элементы детали.
     - Если элемент был случайно назначен не той поверхности, просто повторите с правильной гранью.
  7. При желании измените имя объекта в FreeCAD

- Замена детали другой деталью

  : _на достаточно похожую деталь, чтобы исходные ограничения, конечно, все еще имели смысл_

  1. Удалите старую деталь в дереве. Также можно удалить файл.
  2. Ограничения и элементы старой детали стали недействительными. Откройте ограничение или список элементов в дереве.
     - Выберите грань элемента новой детали. Элемент в дереве будет выделен.
     - Возьмите этот элемент и перетащите его на старый элемент (либо в списке элементов, либо в одном из ограничений, где он использовался). Этот элемент должен стать действительным.
     - Повторите процедуру для остальных элементов.
     - Если элемент был случайно назначен не той поверхности, просто повторите с правильной гранью.
  3. При желании измените имя объекта в FreeCAD

_Примечания_

- Эти способы не такие сложные, как могут показаться. Через 2–3 применения они станут гармоничнее и станут легче в применении.
- Это не только быстрее, чем удаление и повторное выполнение ограничений, но и безопаснее, потому что элемент может быть использован в родительской сборке. Удаление оригинала уничтожит эту ссылку, повторная установка сохранит ее.
- Также эта процедура становится действительно быстрой и простой, если ограничения и элементы имеют названия. Не нужно гадать, куда следует перетащить грани, потому что названия говорят сами за себя (см. [Советы и хитрости](#Советы_и_хитрости)).

[наверх](#top)

### Советы и хитрости

- Использование иерархических сборок помогает избежать проблем с решателем и позволяет сохранить плавность моделирования. Вы можете заморозить подсистему одним щелчком мыши и сэкономите ресурсы процессора (используйте контекстное меню в дереве). При загрузке сборки Assembly3 не нужно открывать внешние файлы для замороженных подсистем, что сохраняет компактность дерева.
- Очень полезно выработать привычку именовать элементы и ограничения. Используйте клавишу F2, чтобы это делать быстро в дереве. Инструменты сортировки дерева в основной панели инструментов будут очень полезными. Сборка с полностью именованными ограничениями и элементами очень проста в понимании для других людей или для самого себя, по сравнению с предыдущими файлами.

  : Примерами имен ограничений для стола могут быть "Align_FrontLegs", "Align_FrameBottom-LegTops", а именами элементов - "Leg1_Top" или "TableTop_Front", "TableTop_Left".

- Пожалуйста, обратите внимание, что после того, как внешние файлы открыты сборкой, их нелегко закрыть снова, не закрыв сборку. Так как сборка сохраняет открытыми эти файлы в обратном порядке, вкладка может исчезнуть, но файл останется видимым в дереве. При наличии нескольких слоев подсистем закрытие отдельных файлов становится близким к невозможности. Такое поведение может измениться, но до тех пор возможным подходом может быть регулярное использование команд _Файл/Сохранить все_ и _Файл/Закрыть все_ для очистки дерева перед работой с другой подсистемой.

  : _Пример: рассмотрим, что у вас есть большой станок с ЧПУ с основной сборкой и подразделом для каждого модуля. После того, как у вас открыта основная сборка, она может открыть буквально сотни файлов вплоть до одного шарикоподшипника. Перед работой над подразделом корпуса электроники станка хорошо сохранить и закрыть все файлы, чтобы получить пустое дерево. Затем откройте только подраздел корпуса электроники. При этом откроются все нужные файлы, и только они._

- Использование внешних файлов облегчает повторное использование частей или версионирование частей с такими системами, как git или Subversion. Рабочий процесс во FreeCAD с Assembly чувствуется точно так же, как и с файлами, в которых все части находятся в одном файле. Для частого обмена файлами с другими сторонами более удобным может оказаться использование отдельных файлов.
- Детали с множественными связями. Если вы добавите ссылку в сборку, то она будет иметь значение свойства под названием "Element Count", по умолчанию 0. Если вы установите это значение в 3, то получите 3 экземпляра этой части. Они будут добавлены в подпапку и могут быть использованы как полностью разделяемые части. Используйте эту возможность, чтобы сохранить данные в файле на низком уровне, т.к. часть сохраняется только один раз. Каждый экземпляр содержит только различия.
- Вставьте несколько деталей, например, Винты, одним кликом. Проверьте [Assembly3 Wiki](https://github.com/realthunder/FreeCAD_assembly3/wiki/Constraints-and-Solvers) на сайте Github. Это не только потрясающая функция (даже немножко волшебная), но и действительно очень полезная.

- Использование [верстак TabBar](https://github.com/triplus/TabBar) ускоряет работу со сборкой. Это добавляет панель инструментов с одной кнопкой для каждого рабочего места. Вы можете отсортировать панель инструментов и разместить ее где угодно. Многие люди помещают его вертикально слева, рядом с деревом. Если у вас есть Assembly3, Part, PartDesign и другие часто используемые рабочие места, расположенные ближе к верху, переключение между ними становится чрезвычайно простым.

[наверх](#top)

## Ссылки

- [Объект App Link](/App_Link/ru "App Link/ru"), который обеспечивает работу Assembly3.
- [FreeCAD_assembly3](https://github.com/realthunder/FreeCAD_assembly3) репозиторий и документация.
- [Обзор Assembly3](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712), большая ветка обсуждения.
- [Пробный учебник для Assembly 3 WB](http://help-freecad-jpg87.fr/02_ass_ind.php) от jpg87.
- [Текущий статус Assembly](https://forum.freecadweb.org/viewtopic.php?f=20&t=34583)
- [Внешние верстаки](/External_workbenches/ru "External workbenches/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_Workbench/ru&oldid=1246363>"
