---
title: Верстак Robot
---

:::caution
Верстак Robot в FreeCAD остался без поддержки. Если у Вас есть знания в этом вопросе и интерес к его поддержке, пожалуйста, заявите своё намерение в секции разработчиков нафоруме FreeCAD.
:::
:::caution
Причина, по которой этот верстак все ещё находится в основном исходном коде, заключается в том, что этот верстак запрограммирован на C++. Если бы этот верстак можно было запрограммировать на Python, то его можно было бы сделатьвнешним верстакоми переместить в отдельный репозиторий.
:::

## Введение

![](/images/Workbench_Robot.svg)

Логотип верстака Robot

![](/images/Workbench_Robot.svg) Верстак Robot это инструмент для симуляции стандартного [6-ти осевого промышленного робота](/Robot_6-Axis/ru "Robot 6-Axis/ru"), такого как [Kuka](http://kuka.com/).

Вы можете выполнять следующие работы:

- создать среду моделирования с роботом и заготовкой
- создать и загрузить траекторию
- разложить часть детали САПР в траекторию
- имитировать движение робота и его пространственные ограничения
- экспортировать траекторию в программный файл робота

Начните с [Учебника по роботам](/Robot_tutorial/ru "Robot tutorial/ru"), и смотрите программный интерфейс в файле примера
[RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/Robot/RobotExample.py).

![](/images/Robot_Workbench_example.jpg)

## Инструменты

Основные команды которые можно использовать для настройки робота.

### Роботы

Инструменты создания и управления 6-осевыми роботами.

- ![](/images/Robot_CreateRobot.svg) [Добавить робота](/Robot_CreateRobot/ru "Robot CreateRobot/ru"): Добавляет нового робота в текущую сцену
- ![](/images/Robot_Simulate.svg) [Воспроизвести движение инструмента по траектории](/Robot_Simulate/ru "Robot Simulate/ru"): Открывает диалог позволяющий выполнить симуляцию движения рабочего инструмента робота по заданной траектории
- ![](/images/Robot_Export.svg) [Экспортировать траекторию](/Robot_Export/ru "Robot Export/ru"): Экспортировать траекторию в файл
- ![](/images/Robot_SetHomePos.svg) [Сохранить текущее положение как исходное](/Robot_SetHomePos/ru "Robot SetHomePos/ru"): Сохранить текущее положение робота как исходное
- ![](/images/Robot_RestoreHomePos.svg) [Вернуть в исходное положение](/Robot_RestoreHomePos/ru "Robot RestoreHomePos/ru"): Возвращает робота в исходное положение

### Траектории

Инструменты для создания и управления траекториями. Траектории могут быть параметрические и непараметрические.

#### Не параметрические траектории

- ![](/images/Robot_CreateTrajectory.svg) [Создать траекторию](/Robot_CreateTrajectory/ru "Robot CreateTrajectory/ru"): Поместить на сцену новый объект-траекторию
- ![](/images/Robot_SetDefaultOrientation.svg) [Установить ориентацию по умолчанию](/Robot_SetDefaultOrientation/ru "Robot SetDefaultOrientation/ru"): Создать промежуточные точки-ориентации по умолчанию
- ![](/images/Robot_SetDefaultValues.svg) [Установить значения по умолчанию](/Robot_SetDefaultValues/ru "Robot SetDefaultValues/ru"): Установить настройки по умолчанию для создания промежуточных точек
- ![](/images/Robot_InsertWaypoint.svg) [Вставить в траекторию](/Robot_InsertWaypoint/ru "Robot InsertWaypoint/ru"): Вставить в траекторию текущее положение робота
- ![](/images/Robot_InsertWaypointPre.svg) [Вставить в траекторию предвыбранную](/Robot_InsertWaypointPre/ru "Robot InsertWaypointPre/ru"): Вставить в траекторию точку текущего положения курсора мыши

#### Параметрические траектории

- ![](/images/Robot_Edge2Trac.svg) [Край траектории](/Robot_Edge2Trac/ru "Robot Edge2Trac/ru"): Поместить новый объект, который раскладывается на ребра для траектории
- ![](/images/Robot_TrajectoryDressUp.svg) [Настройка траектории](/Robot_TrajectoryDressUp/ru "Robot TrajectoryDressUp/ru"): Изменить одно и более свойств траектории
- ![](/images/Robot_TrajectoryCompound.svg) [Объединение траекторий](/Robot_TrajectoryCompound/ru "Robot TrajectoryCompound/ru"): Создать объединение из нескольких одиночных траекторий

## Составление скриптов

Смотрите на странице [Robot API example](/Robot_API_example/ru "Robot API example/ru") описания функций, используемых для моделирования расположения робота.

## Учебные материалы

- [6-ти осевой робот](/Robot_6-Axis/ru "Robot 6-Axis/ru")
- [Подготовка VRML для имитации робота](/VRML_Preparation_for_Robot_Simulation/ru "VRML Preparation for Robot Simulation/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/ru&oldid=1233578>"
