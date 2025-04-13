---
title: Центр пользователей
---

![](/images/User_hub.png)

---

Это основное место помощи для новичков во FreeCAD.

FreeCAD находится в непрерывной разработке, поэтому информация может отсутствовать или устаревать.Если вы не можете найти нужную информацию, не стесняйтесь спрашивать на [форуме FreeCAD](https://forum.freecad.org).

Если хотите внести вклад в FreeCAD, пожалуйста, [помогите](/Donate/ru "Donate/ru"), и смотрите страницу [помощи FreeCAD](/Help_FreeCAD/ru "Help FreeCAD/ru") для других видов содействия. Если хотите редактировать эту вики, запросите аккаунт с правами редактирования [на форуме](https://forum.freecad.org/viewtopic.php?f=21&t=6830), и читайте общие указания, которым нужно следовать, на странице [WikiPages](/WikiPages/ru "WikiPages/ru").

Если вы хотите узнать, с чего начался FreeCAD в прежние годы, посетите страницу [История](/History/ru "History/ru").

## Применение FreeCAD

### Введение

- [Обзор приложения](/About_FreeCAD/ru "About FreeCAD/ru"): Общий обзор FreeCAD
- [Установка](/Installing/ru "Installing/ru"): Как установить FreeCAD на [Windows](/Install_on_Windows/ru "Install on Windows/ru"), [Linux](/Install_on_Linux/ru "Install on Linux/ru") или [Mac](/Install_on_Mac/ru "Install on Mac/ru")
- [Установка справочных файлов](/Installing_Helpfile/ru "Installing Helpfile/ru"): как установить документацию для работы оффлайн, базирующуюся на этих страницах wiki.
- [Установка дополнительных компонентов](/Installing_additional_components/ru "Installing additional components/ru"): как установить дополнительные сторонние компоненты, которые могут работать вместе с FreeCAD.
- [С чего начать?](/Getting_started/ru "Getting started/ru"): Краткий обзор доступных инструментов
- [FAQ](/FAQ/ru "FAQ/ru"): Часто задаваемые вопросы
- [Учебники](/Tutorials/ru "Tutorials/ru") по различным частям FreeCAD

#### Переход с других САПР

- [Обходные решения](/Workarounds/ru "Workarounds/ru")
- [Переход в FreeCAD с Fusion 360](/Migrating_to_FreeCAD_from_Fusion360/ru "Migrating to FreeCAD from Fusion360/ru")
- [Переход в FreeCAD с OnShape](/Migrating_to_FreeCAD_from_OnShape/ru "Migrating to FreeCAD from OnShape/ru")
- [Переход в FreeCAD с SolidWorks](/Migrating_to_FreeCAD_from_SolidWorks/ru "Migrating to FreeCAD from SolidWorks/ru")
- [Переход в FreeCAD с Revit](/Migrating_to_FreeCAD_from_Revit/ru "Migrating to FreeCAD from Revit/ru")
- [Руководство по миграции FreeCAD BIM](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [Таблица совместимости приложений BIM](/BIM_application_compatibility_table/ru "BIM application compatibility table/ru")

### Основные элементы Приложения

- [Интерфейс](/Interface/ru "Interface/ru"): интерфейс FreeCAD составлен из различных графических элементов на экране, включая [трёхмерный вид](/3D_view/ru "3D view/ru"), [древо проекта](/Tree_view/ru "Tree view/ru"), [редактор свойств](/Property_editor/ru "Property editor/ru"), [панель задач](/Task_panel/ru "Task panel/ru"), и [консоль Python](/Python_console/ru "Python console/ru").
- [Навигация мышью](/Mouse_navigation/ru "Mouse navigation/ru"): различные способы использования мыши или трэкпада для навигации в панели трёхмерного вида.
- [Методы выделения](/Selection_methods/ru "Selection methods/ru"): различные методы выделения объектов в программе.
- [Именование объектов](/Object_name/ru "Object name/ru"): Объекты FreeCAD имеют атрибут только для чтения `Name`, который уникально идентифицирует их, и `Label`, редактируемый пользователем.
- [Редактор настроек](/Preferences_Editor/ru "Preferences Editor/ru"): система, позволяющая управлять множеством свойств базовой системы и отдельных верстаков.
- [Форматы файлов](/Import_Export/ru "Import Export/ru"): различные форматы файлов, которые FreeCAD может читать и записывать

### Верстаки

[Верстаки](/Workbenches/ru "Workbenches/ru") - это наборы инструментов, используемые для решения определенных задач. Далее перечислены базовые верстаки, идущие в комплекте с каждой установкой FreeCAD:

- ![](/images/Freecad.svg) [Стандартные инструменты](/Std_Base/ru "Std Base/ru"). Эти команды и инструменты присутствуют во всех верстаках.

- ![](/images/Workbench_Assembly.svg) [Верстак Сборка (Assembly)](/index.php?title=Assembly_Workbench/ru&action=edit&redlink=1 "Assembly Workbench/ru (page does not exist)") для создания и решения механических сборок. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Workbench_BIM.svg) [Верстак Строительные конструкуции (BIM)](/BIM_Workbench/ru "BIM Workbench/ru") для работы с архитектурными элементами и создания моделей [СК(BIM)](https://en.wikipedia.org/wiki/Building_information_modeling). Он объединяет верстаки Архитектура (Arch) и ранее внешний верстак СК(BIM), доступный для версии 0.21 и ниже.

- ![](/images/Workbench_CAM.svg) Для создания инструкций в G-коде используется [CAM верстак](/CAM_Workbench/ru "CAM Workbench/ru"). А для версии 0.21 и ниже этот верстак назывался «Path».

- ![](/images/Workbench_Draft.svg) [Верстак Проект(Draft)](/Draft_Workbench/ru "Draft Workbench/ru") содержит 2D-инструменты и основные операции 2D и 3D CAD.

- ![](/images/Workbench_FEM.svg) [Верстак МКЭ(FEM)](/FEM_Workbench/ru "FEM Workbench/ru") обеспечивает рабочий процесс анализа Методом Конечных Элементов (МКЭ).

- ![](/images/Workbench_Inspection.svg) [Верстак Инспектирование(Inspection)](/Inspection_Workbench/ru "Inspection Workbench/ru") создан для того, чтобы дать вам специальные инструменты для проверки форм. Всё ещё находится на ранних стадиях разработки.

- ![](/images/Workbench_Material.svg) [Верстак Материалы(Material)](/index.php?title=Material_Workbench/ru&action=edit&redlink=1 "Material Workbench/ru (page does not exist)") работает с системой материалов FreeCAD. [представлено в версии 1.0](/Release_notes_1.0/ru "Release notes 1.0/ru")

- ![](/images/Workbench_Mesh.svg) [Верстак Сетки(Mesh)](/Mesh_Workbench/ru "Mesh Workbench/ru") для работы с триангулярными (разбитыми на треугольники) сетками.

- ![](/images/Workbench_OpenSCAD.svg) [Верстак OpenSCAD](/OpenSCAD_Workbench/ru "OpenSCAD Workbench/ru") обеспечивает совместимость с OpenSCAD и восстановление истории модели [конструктивной твердотельной геометрии](/Constructive_solid_geometry/ru "Constructive solid geometry/ru") (CSG).

- ![](/images/Workbench_Part.svg) [Верстак Деталь(Part)](/Part_Workbench/ru "Part Workbench/ru") для работы с геометрическими примитивами и булевыми операциями.

- ![](/images/Workbench_PartDesign.svg) [Верстак Part Design](/PartDesign_Workbench/ru "PartDesign Workbench/ru") для построения фигур Деталей из эскизов.

- ![](/images/Workbench_Points.svg) [Верстак Точки(Points)](/Points_Workbench/ru "Points Workbench/ru") для работы с облаками точек.

- ![](/images/Workbench_Reverse_Engineering.svg) [Верстак Обратное Проектирование (Reverse Engineering)](/Reverse_Engineering_Workbench/ru "Reverse Engineering Workbench/ru") предназначен для предоставления специальных инструментов для преобразования форм/тел/сеток в параметрические элементы, совместимые с FreeCAD.

- ![](/images/Workbench_Robot.svg) [Верстак Робот(Robot)](/Robot_Workbench/ru "Robot Workbench/ru") для изучения движений робота. В настоящее время не обслуживается.

- ![](/images/Workbench_Sketcher.svg) [Верстак Эскизы(Sketcher)](/Sketcher_Workbench/ru "Sketcher Workbench/ru") для работы с геометрически ограниченными эскизами.

- ![](/images/Workbench_Spreadsheet.svg) [Верстак Электронные таблицы (Spreadsheet)](/Spreadsheet_Workbench/ru "Spreadsheet Workbench/ru") предназначен для создания и обработки данных электронных таблиц.

- ![](/images/Workbench_Surface.svg) [Верстак Поверхности(Surface)](/Surface_Workbench/ru "Surface Workbench/ru") предоставляет инструменты для создания и изменения поверхностей. Он похож на опцию Грань из отрезков [Построителя Форм](/Part_Builder/ru "Part Builder/ru").

- ![](/images/Workbench_TechDraw.svg) [Верстак Чертёж(TechDraw)](/TechDraw_Workbench/ru "TechDraw Workbench/ru") для создания технических чертежей из 3D-моделей.

- ![](/images/Workbench_Test.svg) [Верстак Система тестирования (Test Framework)](/Testing/ru "Testing/ru") предназначен для отладки FreeCAD.

### Макросы

[Макросы](/Macros/ru "Macros/ru") это небольшие куски кода [Python](/Python/ru "Python/ru") для выполнения простых или сложных задач, не доступных в базовой системе FreeCAD.

Опытные пользователи написали различные [макросы](/Macros "Macros") для расширения возможностей FreeCAD.

Начиная с версии FreeCAD 0.17,многие макросы можно установить с помощью [Менеджера Дополнений](/Std_AddonMgr/ru "Std AddonMgr/ru"). Список макросов приведен на странице [рецепты макросов](/Macros_recipes/ru "Macros recipes/ru"). Для ручной установки см. [Как установить макросы](/How_to_install_macros/ru "How to install macros/ru").

### Внешние верстаки

Когда много макросов и функций разрабатываются вместе, и организуются в панели инструментов и меню, они становятся новыми верстаками.

К [сторонним верстакам](/External_workbenches/ru "External workbenches/ru") относят собрания функций, которые не входят в базовую систему FreeCAD, обычно разрабатываемые опытными пользователями и ориентированные на особые потребности.

Начиная с FreeCAD 0.17, многие рабочие верстаки можно установить с помощью [Менеджера Дополнений](/Std_AddonMgr/ru "Std AddonMgr/ru"). Для ручной установки см. [Как установить дополнительные верстаки](/How_to_install_additional_workbenches/ru "How to install additional workbenches/ru").

## Ссылки

- [Справочник команд](/List_of_Commands/ru "List of Commands/ru"): Полный список доступных команд FreeCAD.

## Онлайн помощь

Это официальная онлайновая помощь по FreeCAD. Пожалуйста, обратите внимание, что вся справочная система в настоящее время на стадии разработки. Она будет использоваться для создания файла .CHM, которые будут распределены с бинарными пакетами FreeCAD. На данный момент на сайте помощи приведены некоторые из наиболее полных описаний.

- [Справочная система онлайн - Содержание](/Online_Help_Toc/ru "Online Help Toc/ru")

## Дополнительно

- [Центр опытных пользователей](/Power_users_hub/ru "Power users hub/ru") - это раздел, который следует посетить, если вы хотите узнать о более продвинутых способах работы в FreeCAD.
- На [Портал сообщества FreeCAD](/FreeCAD_Community_Portal/ru "FreeCAD Community Portal/ru") содержит в себе проекты, созданные членами сообщества FreeCAD.
- Не понять смысл того или иного термина или выражения, применямого в FreeCAD? Попробуйте найти ответ в [Справочнике](/Glossary/ru "Glossary/ru") .

Retrieved from "<http://wiki.freecad.org/index.php?title=User_hub/ru&oldid=1548181>"
