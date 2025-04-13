---
title: Центр опытных пользователей
---
![](/images/Power_user_hub.png)

---

Это место, куда можно прийти, если вы опытный пользователь и хотите узнать больше о настройке и расширении FreeCAD.

FreeCAD расширяем с помощью кода [Python](/Python/ru "Python/ru"), который запускается непосредственно в [консоли Python](/Python_console/ru "Python console/ru") или загружается из модулей при запуске. Это означает, что вы можете модифицировать FreeCAD без необходимости перекомпиляции программы. Например, вы можете:

* **Создавать и изменять геометрию**: вы можете создать новый вид объекта, либо с нуля, либо адаптировав существующий тип.
* **Создавать собственные инструменты и команды**: создать ваши собственные наборы инструментов, запускающих Ваш код .
* **Изменять интерфейс**: создать панель инструментов и пометить туда ваши инструменты, создавать специальные окна, панели или интерфейсы для взаимодействия с вашими инструментами.
* **Изменять представление в графе сцены**: В FreeCAD есть разделение процессов построения и вычисления геометрии и отрисовки этой геометрии на вашем экране. У Вас есть полный доступ к способу отображения содержимого на экране, поэтому вы можете изменить представление, взаимодействовать с ним, или добавить к ним пользовательское поведение.

Вы можете так же добавить пользовательские экранные виджеты, как например информационные, перетаскиватели (draggers), якоря (привязки) или временные объекты (для быстрого предпросмотра операции).

Если Вы хотите добавить контент на эти страницы, запросите аккаунт на wiki с правом редактирования [на форуме](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830), изучите [WikiPages](/WikiPages/ru "WikiPages/ru") насчёт общих рекомендаций, которым Вы должны следовать. Относительно прочих путей внести вклад в проект смотрите страницу [о том как помочь FreeCAD](/Help_FreeCAD/ru "Help FreeCAD/ru").

## Настройка FreeCAD

* [Настройка Интерфейса](/Interface_Customization/ru "Interface Customization/ru"): Начиная с начала: Панели инструментов и ярлыки
* [Работа с макросами](/Macros/ru "Macros/ru"): Легкая запись часто повторяющихся задач или python кода
* [Рецепты макросов](/Macros_recipes/ru "Macros recipes/ru")
* [Кастомизация панелей инструментов](/Customize_Toolbars/ru "Customize Toolbars/ru")
* [Установка дополнительных верстаков](/Installing_more_workbenches/ru "Installing more workbenches/ru")

## Написание сценариев FreeCAD

### Основы

* [Введение в Python](/Introduction_to_Python/ru "Introduction to Python/ru")- Смотрите также другие руководства по Python в нижней части этой страницы
* [Учебник скриптов FreeCAD](/Python_scripting_tutorial "Python scripting tutorial") - Общий взгляд на написание скриптов на python в FreeCAD
* [Основы написания сценариев для FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru"): Что сказать, основы ...
* [Команды графического интерфейса](/Gui_Command/ru "Gui Command/ru") : Добавление пользовательских команд в графический интерфейс
* Использование смешанных [Единиц измерения](/Units/ru "Units/ru") в FreeCAD
* [Профилирование](/Profiling/ru "Profiling/ru") кода Python

### Модули

Функциональность FreeCAD разделена между модулями, работающими со своими типами данных и приложениями. У FreeCADа есть встроенные модули и модули расширения (plug-ins). Когда модули расширений установлены, они становятся доступны вам как встроенные модули. Описываемые ниже модули модули по умолчанию, включённые в любую установку FreeCAD.

* [Встроенные модули](/Builtin_modules/ru "Builtin modules/ru") это принципиальные модули FreeCAD. Они содержат инструменты для манипулирования общими конфигурациями FreeCAD, документами и их содержимым.
* [Создание верстаков](/Workbench_creation/ru "Workbench creation/ru") покажет Вам как создать собственных верстак.

#### Работа с полигональными сетками

* [Написание сценариев для Mesh](/Mesh_Scripting/ru "Mesh Scripting/ru"): Как взаимодействовать с [модулем Mesh](/Mesh_Workbench/ru "Mesh Workbench/ru")

#### Работа с Parts

* [Верстак Деталь](/Part_Workbench/ru "Part Workbench/ru"): Как инструменты и структуры [OpenCasCade](http://en.wikipedia.org/wiki/Open_CASCADE) используются в FreeCAD
* [Сценарии для обработки топологических данных](/Topological_data_scripting/ru "Topological data scripting/ru"): Как взаимодействовать с модулем Part
* [PythonOCC](/PythonOCC/ru "PythonOCC/ru"): Как раскрыть всю мощь OpenCasCade
* [Mesh to Part](/Mesh_to_Part/ru "Mesh to Part/ru"): Преобразование между типами объектов

#### Получение доступа к визуализатору сцен - Coin

* [The Coin/Inventor scenegraph](/Scenegraph/ru "Scenegraph/ru"): Как работает представление сцен в FreeCAD
* [Pivy](/Pivy/ru "Pivy/ru"): Как получить доступ и изменить графическое представление сцены

### Управление Qt интерфейсом

* [PySide](/PySide/ru "PySide/ru"): Как получить доступ к интерфейсу и изменить его содержание
* [Использование FreeCAD GUI](/Embedding_FreeCADGui/ru "Embedding FreeCADGui/ru") в различных Qt приложениях с помощью PyQt

### Работа с параметрическими объектами

* [Сценарные объекты](/Scripted_objects/ru "Scripted objects/ru"): Как создать на 100% управляемые сценариями на python объекты в FreeCAD
  + [Scripted objects with attachment](/Scripted_objects_with_attachment/ru "Scripted objects with attachment/ru"):Как сделать скриптовые объекты присоединяемыми к другим объектам в FreeCAD
  + [Scripted objects saving attributes](/Scripted_objects_saving_attributes/ru "Scripted objects saving attributes/ru"): как сохранить и восстановить атрибуты промежуточного класса с `__getstate__` и `__setstate__`.
  + [Scripted objects migration](/Scripted_objects_migration/ru "Scripted objects migration/ru"): как мигрировать старые скриптовые объекты на новые классы.

### Примеры

* [Фрагменты кода](/Code_snippets/ru "Code snippets/ru"): Коллекция фрагментов FreeCAD python кода, в качестве ингредиентов ваших сценариев...
* [Функция отрисовки линии](/Line_drawing_function/ru "Line drawing function/ru"): Как собрать простой инструмент для отрисовки линий
* [Создание диалога](/Dialog_creation/ru "Dialog creation/ru"): Как сконструировать диалог в Qt designer, и использовать его в FreeCAD
* [Встраивание FreeCAD](/Embedding_FreeCAD/ru "Embedding FreeCAD/ru"): Как импортировать FreeCAD в виде python модуля в другие приложения
* [Верстак черчения](/Draft_Workbench/ru "Draft Workbench/ru")добавляет основные функции 2d рисования в freecad. Он полностью написан на python, так что может быть хорошим примером если вы хотите писать ваши собственные модули.
* [Векторная библиотека FreeCAD](/FreeCAD_vector_math_library/ru "FreeCAD vector math library/ru"): Пара полезных функций для работы с векторами в FreeCAD. Эта библиотека также включена в Чертежный Модуль.

## Функции API

Полное описание API можно найти в <http://www.freecadweb.org/api/> . Он содержит программный интерфейс как на C++, так и на Python, и пока не совсем хорошо форматирован, что может мешать при просмотре кода Python. Более простая для просмотра версия доступна [здесь](/Category:API/ru "Category:API/ru"). Заметим что он может быть неполным, так как обновляется вручную. Для получения более точной информации, просматривайте модули напрямую из консоли Python FreeCADа.

Связанное: [Представление C++ в Python](/Exposing_C%2B%2B_to_Python/ru "Exposing C++ to Python/ru")

## Продвинутые модификации

* [Запуск и настройка](/Start_up_and_Configuration/ru "Start up and Configuration/ru"): Запуск и параметры командной строки
* [Установка в Windows](/Installing_on_Windows/ru "Installing on Windows/ru"): Использование установщика windows
* [Компиляция FreeCAD в Windows](/Compile_on_Windows/ru "Compile on Windows/ru") и [компиляция FreeCAD в Linux](/Compile_on_Linux/ru "Compile on Linux/ru")
* [Маркирование](/Branding/ru "Branding/ru"): Простые изменения, которые вы можете сделать с исходными кодами для изменения некоторых аспектов FreeCAD
* [Дополнительные модули Python](/Extra_python_modules/ru "Extra python modules/ru") : Расширение интерпретатора python в FreeCAD этими мощными модулями!

## Учебники по Python

Здесь представлены хорошие общие учебники, без специфики FreeCAD, они могут вас заинтересовать, если для вас python, это что-то свовершенно новое.

**Python**

* [Официальный учебник python](https://docs.python.org/3/tutorial/index.html) - весьма полный учебник для знакомства с Python
* [Учебник по python для не программистов](https://en.wikibooks.org/wiki/Non-Programmer%27s_Tutorial_for_Python_3) - отличная wikiкнига
* [Python для новичков](http://npt.cc.rsu.ru/user/wanderer/ODP/Python_for_Newbies.htm) - один большой учебник, полностью охватывающий основы

**PySide** - Как создавать и управлять FreeCAD Qt UI интерфейсом с помощью python

* [PySide tutorial](http://zetcode.com/gui/pysidetutorial/) : Платформонезависимый учебник, показывающий использование PySide с примерами
* [PySide/PyQt tutorial](http://www.pythoncentral.io/series/python-pyside-pyqt-tutorial/) : Легкий в чтении учебник по PySide и PyQt, с примерами
* [Документация PySide](http://qt-project.org/wiki/PySideDocumentation) : от проекта Qt (от тех, кто его написал)
* [Использование QtCreator в PySide](http://qt-project.org/wiki/QtCreator_and_PySide) : так же от проекта Qt
* [Справка по PySide](http://srinikom.github.io/pyside-docs/index.html) : бесконечные детали о minutiae PySide и Qt, надежный источник для справки
* [Примеры кода PySide](http://nullege.com/codes/search?cq=PySide) : база данных кода PySide с возможностью поиска

Дальнейшие два ссылаются на специффичные для PyQt (не PySide), но могут предложить некоторую полезную информацию:

* [Basic PyQt tutorial](http://www.cs.usfca.edu/~afedosov/qttut/) : Простое и короткое, ориентированное на linux руководство, объясняющее работу с PyQt и Qt Designer
* [Programming Qt applications in python](http://vizzzion.org/?id=pyqt) : Более глубокое руководство, описывающее все процессы работы с qt и python.

**Pivy** - Как взаимодействовать с в 3D сценой FreeCADа

* [Pivy - Embedding a Dynamic Scripting Language into a Scene Graph Library](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.108.947&rep=rep1&type=pdf) : Тезис, подробно объясняющий Pivy
* [High Level 3D Graphics Programming in Python](http://ftp.ntua.gr/mirror/python/pycon/dc2004/papers/47/) : Примеры Pivy из Pycon 2004
* [Introducing Pivy into studierstube](https://www.semanticscholar.org/paper/Integrating-Pivy-into-Studierstube-4.2-Gruber/08c9a89c8326c87f81c2d83428029fbfb6c2ae64) [(Mirror)](https://www.researchgate.net/publication/228737136_Integrating_Pivy_into_Studierstube_42) : Документ, который на самом деле не учебник, но прекрасно иллюстрирует как работает Pivy (требует академический аккаунт)

## Проекты сообщества

На [портале Сообщества](/FreeCAD_Community_Portal "FreeCAD Community Portal"), вы можете найти другие основанные на FreeCAD проекты запущенные сообществом пользователей FreeCAD. Если вы начинаете новый проект FreeCAD, убедитесь что его нет в списке! У нас также есть страница, с описанием вещей, которые вы могли бы сделать, если хотите [Помочь FreeCAD](/Help_FreeCAD/ru "Help FreeCAD/ru").

Retrieved from "<http://wiki.freecad.org/index.php?title=Power_users_hub/ru&oldid=1463668>"