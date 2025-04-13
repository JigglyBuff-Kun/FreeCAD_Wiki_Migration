---
title: BIM Library
---
|  |
| --- |
| BIM Library |
| Menu location |
| 3D Modeling → Library |
| Workbenches |
| [BIM](/BIM_Workbench/ru "BIM Workbench/ru") |
| Default shortcut |
| None |
| See also |
| [Arch Equipment](/Arch_Equipment/ru "Arch Equipment/ru") |
|  |
| This command is part of the **BIM AddOn**, that you can install via menu Tools → Addons Manager |
|  |

## Описание

Инструмент «Библиотека BIM» позволяет разместить в текущей модели объект из [FreeCAD Parts Library](/Parts_Library "Parts Library"), который должен быть установлен с помощью ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr"), чтобы этот инструмент был доступен.

![](/images/BIM_Library_screenshot.png)

Выше: Смотрите диалог **Library browser** [панели задач](/Task_panel/ru "Task panel/ru") слева

## Применение

1. Нажмите кнопку ![](/images/BIM_Library.png) BIM Library

   :   Result: In the [Combo view](/Combo_view "Combo view") → [Task panel](/Task_panel "Task panel") a dialog titled **Library browser** will display
2. Щелкните файл в браузере библиотеки
3. Дважды щелкните его или нажмите кнопку Insert
4. Щелкните точку в [трехмерном виде](/3D_view/ru "3D view/ru") или введите координату вручную, чтобы поместить объект

## Опции

* Поддерживаются файлы [FCStd](/index.php?title=FCStd/ru&action=edit&redlink=1 "FCStd/ru (page does not exist)"), [STEP](/index.php?title=STEP/ru&action=edit&redlink=1 "STEP/ru (page does not exist)") и [BREP](/index.php?title=BREP/ru&action=edit&redlink=1 "BREP/ru (page does not exist)"). Доступны для размещения только файлы STEP и BREP. Файлы FCStd не позволят вам выбрать место размещения, так как они могут состоять из сложной серии объектов со значительными позициями. При выборе файла FCStd его содержимое будет вставлено в позицию, определенную в файле.
* Объекты STEP и BREP вставляются как ![Arch Equipment](/images/Arch_Equipment.svg) [Equipment](/Arch_Equipment/ru "Arch Equipment/ru"), без отдельной формы основания. Добавление базовой формы к этим объектам впоследствии уничтожит их текущую форму.
* При размещении объекта вы можете выбрать их точку вставки между оригинальной (точкой (`0,0,0`), определенной в файле), верхней, средней, нижней и левой, центральной и правой.
* Библиотека может работать в автономном режиме, в этом случае она зависит от устанавливаемой надстройки библиотеки компонентов (и обновляется пользователем), или в сети, и в этом случае она просматривается непосредственно с [репозитория Git библиотеки Parts](https://github.com/FreeCAD/FreeCAD-library) и позволяет скачивать прямо оттуда.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Library/ru&oldid=1442994>"