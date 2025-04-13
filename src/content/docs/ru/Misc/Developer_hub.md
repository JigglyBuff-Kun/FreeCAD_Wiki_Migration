---
title: Центр разработчиков
---

![](/images/Crystal_Clear_app_tutorials.png)

---

Это раздел для тех, кто хочет принять участие в разработке FreeCAD.

Этот раздел находятся в стадии разработки. Если вы не можете найти информацию, которую ищете, или нашли полезную информацию, на которую мы не сослались, пожалуйста, оставьте комментарий на [форуме](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff) и кто-нибудь заглянет в него (или, если вы уверены в своих знаниях, почему бы не отредактировать эту страницу самостоятельно!).

## Документация для Разработчиков

Документация для разработчиков включает в себя следующие разделы:

### Компиляция FreeCAD

- [Github репозиторий](https://github.com/FreeCAD/FreeCAD). Если вы новичок, в git изучите [управление исходным кодом](/Source_code_management/ru "Source code management/ru")
- [Компиляция с Docker](/Compile_on_Docker/ru "Compile on Docker/ru")
- [Компиляция в Windows](/Compile_on_Windows/ru "Compile on Windows/ru")
- [Компиляция в Linux](/Compile_on_Linux/ru "Compile on Linux/ru")
- [Компиляция в MacOS](/Compile_on_MacOS/ru "Compile on MacOS/ru")
- [Детали лицензий](/License/ru "License/ru") про FreeCAD лицензии
- [Сторонние Библиотеки](/Third_Party_Libraries/ru "Third Party Libraries/ru")
- [Сторонние Инструменты](/Third_Party_Tools/ru "Third Party Tools/ru")
- [Запуск и Конфигурирование](/Start_up_and_Configuration/ru "Start up and Configuration/ru")
- [Документирование исходников](/Source_documentation/ru "Source documentation/ru")
- Используйте [Систему отслеживания Багов](/Tracker/ru "Tracker/ru") когда у вас есть проблема или вы думаете, что, возможно, нашли ошибку

### Упаковывание

[Упаковка](/Packaging "Packaging") заключается в том, чтобы взять скомпилированные двоичные файлы и исходные файлы Python FreeCAD и распространить их для использования в определенной системе.

- [Упаковывание в Linux](/Linux_packaging/ru "Linux packaging/ru")
  - [Debian разработка](/Debian_development/ru "Debian development/ru")
  - [Debian Unstable](/Debian_Unstable/ru "Debian Unstable/ru")
  - [Git build пакет](/Git_buildpackage/ru "Git buildpackage/ru")
- [Упаковывание в Windows](/Windows_packaging/ru "Windows packaging/ru")
- [Упаковывание в MacOS](/index.php?title=MacOS_packaging/ru&action=edit&redlink=1 "MacOS packaging/ru (page does not exist)")

### Инструменты Поддержки Сборки

- The [Инструметы сборки FreeCAD](/FreeCAD_Build_Tool/ru "FreeCAD Build Tool/ru")
  - [Создание Модулей](/Module_Creation/ru "Module Creation/ru") в FreeCAD
- [Отладка](/Debugging/ru "Debugging/ru") FreeCAD
- [Тестирование](/Testing/ru "Testing/ru") FreeCAD
- [Компиляция FreeCAD (способы ускорения)](</Compiling_(Speeding_up)/ru> "Compiling (Speeding up)/ru")
- [(CI) Непрерывная Интеграция](/Continuous_Integration/ru "Continuous Integration/ru")

### Модифицирование FreeCAD

- Объяснение структуры [исходного кода FreeCAD](/The_FreeCAD_source_code/ru "The FreeCAD source code/ru")
- [Отправка патчей](/Tracker/ru#Отправка_патчей "Tracker/ru")
- Добавление [особенностей](/Gui_Command/ru "Gui Command/ru") в FreeCAD или в Верстак
- [Брендинг](/Branding/ru "Branding/ru") или _как придать FreeCAD уникальный вид_
- [Иллюстрации](/Artwork/ru "Artwork/ru"), которые мы создали для FreeCAD и которые вы можете свободно использовать повторно
- [Руководство по оформлению](/Artwork_Guidelines/ru "Artwork Guidelines/ru") "стандарты" для иконок
- [Локализация и Перевод FreeCAD](/Localisation/ru "Localisation/ru")
- [Дополнительные модули Python](/Extra_python_modules/ru "Extra python modules/ru"), или _как как разширить возможности python внутри FreeCAD_
- [Google Summer of Code](/Google_Summer_of_Code "Google Summer of Code") для тех кто хочет принять участие в программе поддержки студентов Google
- [Тонкая настройка](/Fine-tuning/ru "Fine-tuning/ru") содержит информацию о различных параметрах и переключателях параметров, которые могут помоч устранить некоторые проблемы
- [Обертывание C++ класса в Python](/Wrapping_a_Cplusplus_class_in_Python/ru "Wrapping a Cplusplus class in Python/ru") содержит информацию о том, как создать Python обертку для C++ класса

- [Перевод внешних верстаков](/Translating_an_external_workbench/ru "Translating an external workbench/ru")

### Руководство для разработчика модуля

[FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide): This is an ebook under writing on github, please fork and send pull request to contribute.

Chapters:

- Overview and Software Architecture
- Source code structure
- Base and App module
- Gui module
- Python wrapping
- Modular design
- Fem module source analysis (mixed C++ and Python)
- Development of CFD Module (pure Python)
- Module testing and debugging
- Contribute code with git

Latest pdf preview can be downoaded from [pdf folder](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide/tree/master/pdf) of this git repo

### Внутренние устройство

#### OpenCascade Documentation

OpenCascade is a software development platform for 3D surface and solid modeling, CAD data exchange, and visualization, mostly in the form of C++ libraries.

- [Roman Lygin's tutorials](http://opencascade.wikidot.com/romansarticles)
- [Full Online Documentation](https://dev.opencascade.org/cdoc/overview/html/index.html)
- [Reference Manual](https://dev.opencascade.org/doc/refman/html/index.html)
- [The openCascade wiki](http://opencascade.wikidot.com) (currently containing ?? Chinese spam)

#### Про формат файла

[Формат файла FCStd](/File_Format_FCStd "File Format FCStd"). Файлы, созданные с помощью FreeCAD, являются `.zip` файлами, включающими в себя BREP геометрию, а также XML-данные, описывающие документ.

#### Решатель Эскизов (Sketcher solver)

- [Sketcher Solver Architecture Booklet](https://forum.freecadweb.org/viewtopic.php?f=10&t=36355) (forum thread), [source](https://github.com/abdullahtahiriyo/FreeCADBooks/tree/master/FreeCAD_Solver_Architecture) in GitHub.
- [PlaneGCS solver](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/) in the FreeCAD source code; important files are [GCS.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/GCS.cpp) and [SubSystem.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/SubSystem.cpp).
- [Recent Several Sketcher improvements](https://forum.freecadweb.org/viewtopic.php?f=9&t=29192).

The sketcher solver isn't perfect, as there are some issues with numerical precision when using large values, see [Adventure of fixing sketcher solver for large sketches](https://forum.freecadweb.org/viewtopic.php?f=10&t=40502).

The development of a new solver architecture could improve the way the solver is used both in the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), and for assembly of 3D bodies. See [Reimplementing constraint solver](https://forum.freecadweb.org/viewtopic.php?f=20&t=40525).

## Дорожная карта проекта

FreeCAD, though usable in certain areas, is at the beginning of a long way into the CAD mainstream. There is still a lot to do
to reach a state where we can compete with commercial software.

[FreeCAD 1.0 Development Cycle](/FreeCAD_1.0_Development_Cycle "FreeCAD 1.0 Development Cycle")

## Сообщество

- [IRC channel](ircs://irc.libera.chat:6697/freecad) ,synchronized with [gitter channel](https://gitter.im/FreeCAD/FreeCAD)
- [Development forum](https://forum.freecad.org/viewforum.php?f=6)

- [Development roadmap](/Development_roadmap "Development roadmap")

## Авторы

[Участники проекта](/Contributors/ru "Contributors/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Developer_hub/ru&oldid=1392962>"
