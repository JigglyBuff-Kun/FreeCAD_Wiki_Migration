---
title: Дополнения
---
## Введение

В FreeCAD и в этой документации Дополнения - это любой компонент, который не является частью базовой установки, но который может быть добавлен в систему определенными методами.

## Различные типы

Грубо говоря существует три типа дополнения:

* [Макросы](/Macros/ru "Macros/ru"): короткий фрагмент кода [Python](/Python "Python"), который предоставляет новый инструмент или функциональность в одном файле, заканчивающемся расширением файла `.FCMacro`.
* Модули: один исходный файл Python или набор файлов Python, который каким-то образом расширяет программное обеспечение. Модули не обязательно определяют графический "верстак", но могут предоставлять вспомогательную функцию, например библиотеку, выполняющую преобразование форматов, или код, изменяющий графический [интерфейс](/Interface/ru "Interface/ru").
* [Верстаки](/External_workbenches/ru "External workbenches/ru"): коллекции файлов Python, которые предоставляют связанные [команды Gui](/Gui_Command/ru "Gui Command/ru") (инструменты), сосредоточенные вокруг определенной темы, например, инструменты для проектирования шкафов, инструменты для работы с архитектурой, инструменты для проектирования лодок и т. Д. Эти верстаки обычно определяют новые панели инструментов, где [команды](/Gui_Command/ru "Gui Command/ru") размещаются в виде кнопок.

## Установка

Начиная с FreeCAD версии 0.17, рекомендуется установка дополнений с помощью ![](/images/Std_AddonMgr.svg) [Менеджера дополнений](/Std_AddonMgr/ru "Std AddonMgr/ru").

Однако для макросов и верстаков доступна ручная установка.

* [Как установить макросы](/How_to_install_macros/ru "How to install macros/ru")
* [Установка дополнительных верстаков](/Installing_more_workbenches/ru "Installing more workbenches/ru")

## Информация для разработчиков

If you have developed a macro or workbench, and want to see it included in the Addon manager, read how to do so on the repository pages: ([FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons/) and [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/)). If you add your macro to the [Macros recipes](/Macros_recipes "Macros recipes") page, there is nothing else to do, it will automatically be picked up by the Addon manager.

See also:

* [Distribution of a Python workbench](/Workbench_creation#Distribution "Workbench creation")
* [Distribution of a C++ workbench](/Workbench_creation#Distribution_2 "Workbench creation")

Retrieved from "<http://wiki.freecad.org/index.php?title=Addon/ru&oldid=1239255>"