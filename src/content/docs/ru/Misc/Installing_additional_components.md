---
title: Установка дополнительных компонентов
---
# Введение

После установки FreeCAD на вашей операционной системе ([Windows](/Installing_on_Windows/ru "Installing on Windows/ru"), [Linux](/Installing_on_Linux/ru "Installing on Linux/ru") или [Mac](/Installing_on_Mac/ru "Installing on Mac/ru")), вы можете рассмотреть возможность установки одного или нескольких из следующих дополнительных компонентов.

# Файлы помощи

Смотри [Установка файла справки](/Installing_Helpfile/ru "Installing Helpfile/ru").

# Внешние верстаки

Кроме стандартных [верстаков](/Workbenches/ru "Workbenches/ru"), привязанных к FreeCAD, есть большая коллекция полезных [сторонних верстаков](/External_workbenches "External workbenches"), созданных членами сообщества.

# Стороннее программное обеспечение

FreeCAD поддерживает некоторые сторонние программные пакеты из коробки. Зачастую вам нужно лишь установить программное обеспечение, и при следующем запуске оно будет автоматически найдено и его можно использовать. В данном разделе представлен список всех таких пакетов ПО, а также некоторой информации о том, где он используется во FreeCAD и где его загрузить.

## Поддержка

### GitPython

[GitPython](https://github.com/gitpython-developers/GitPython) это библиотека взаимодействия с репозиториями Git. [Менеджер дополнений](/Std_AddonMgr/ru "Std AddonMgr/ru") может использовать эту библиотеку. GitPython включён в установщики FreeCAD для Windows и Mac.

### GraphViz

[GraphViz](https://www.graphviz.org) - это ПО для визуализации графиков с открытым исходным кодом. Он используется инструментом [Std DependencyGraph](/Std_DependencyGraph/ru "Std DependencyGraph/ru").

### OpenCAMLib

[OpenCAMLib](http://www.anderswallin.net/CAM) это библиотека с открытым исходным кодом алгоритмов автоматизированного производства (CAM). Она используется в [Path Workbench](/Path_Workbench/ru "Path Workbench/ru"). Насчёт инструкций по установки смотрите страницу [OpenCamLib](/OpenCamLib/ru "OpenCamLib/ru").

### OpenSCAD

[OpenSCAD](https://www.openscad.org) - средство моделирования объёмных твёрдых тел. [Верстак OpenSCAD](/OpenSCAD_Workbench/ru "OpenSCAD Workbench/ru") зависит от этого программного обеспечения, а [верстак Mesh](/Mesh_Workbench/ru "Mesh Workbench/ru") использует его для своих булевых операций. Он так же необходим для импорта файлов SCAD с помощью инструмента [Std Import](/Std_Import/ru "Std Import/ru").

## Форматы файлов

Все программное обеспечение в этом разделе используется инструментами [Импорт](/Std_Import/ru "Std Import/ru") или [Экспорт](/Std_Export/ru "Std Export/ru").

### CADExchanger

[CADExchanger](https://cadexchanger.com) это комерческое приложение с закрытым исходным кодом для обмена файлами различных форматов файлов САПР. Для использования этого приложения в FreeCAD имеется [внешний верстак](https://github.com/yorikvanhavre/CADExchanger).

### Импортёр DXF

FreeCAD имеет собственный импортер/экспортер файлов DXF, реализованный на C++. Пока что этот импортер реализует не все функции формата DXF. Для этих функций по-прежнему доступен устаревший импортер и экспортер, написанный на Python. Для него требуется библиотека Python [Draft-dxf-importer](https://github.com/yorikvanhavre/Draft-dxf-importer). Насчёт дополнительной информации смотрите страницу [FreeCAD и импорт DXF](/FreeCAD_and_DXF_Import/ru "FreeCAD and DXF Import/ru").

### DWG converters

FreeCAD cannot directly read and write DWG files. To convert DXF files to DWG files, and vice-versa, FreeCAD relies on external converters. There is built-in support for the following DWG converters:

* [LibreDWG](https://www.gnu.org/software/libredwg) (open-source, lacks support for some DWG entities).
* [ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter) (free, but not open-source).
* [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) (commercial). [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

See [Import Export Preferences](/Import_Export_Preferences#DWG "Import Export Preferences") and [FreeCAD and DWG Import](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import") for more information.

### IfcOpenShell

[IfcOpenShell](http://ifcopenshell.org) - это библиотека для работы с форматом файлов Industry Foundation Classes (IFC), используемым в архитектурном дизайне. Библиотека также используется инструментами [Arch IfcExplorer](/Arch_IfcExplorer/ru "Arch IfcExplorer/ru") (0.18 and below) и [BIM IfcExplorer](/BIM_IfcExplorer/ru "BIM IfcExplorer/ru"). IfcOpenShell включен в установщики FreeCAD для Windows и Mac.

### IfcJson

[IfcJson](https://github.com/buildingSMART/ifcJSON) - это библиотека, необходимая для экспорта в формат файла IFCJSON. IFCJSON - это новый формат IFC, который еще не поддерживается многими приложениями.

### Pycollada

[Pycollada](https://github.com/pycollada/pycollada/releases), также известная как `python-collada`, представляет собой библиотеку Python для чтения и записи документов COLLADA (DAE). Pycollada включён в установщики
FreeCAD для Windows и Mac.

## Визуализация

### LuxCoreRender

[LuxCoreRender](https://www.luxcorerender.org) is a render engine, reboot of the [LuxRender](/LuxRender "LuxRender") project. Officially it is not supported by the [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench"), but it might be worth to give it a try. It is officially supported by the new [Render Workbench](https://github.com/FreeCAD/FreeCAD-render), intended as a future replacement of the Raytracing Workbench. See the [LuxCoreRender](/LuxCoreRender "LuxCoreRender") page for more information and installation instructions.

### LuxRender

[LuxRender](https://luxcorerender.org/history/) is one of the two render engines supported by the [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench"). In 2013 the project has been rebooted becoming [LuxCoreRender](/LuxCoreRender "LuxCoreRender"), with a major code rewriting and compatibility breaking changes. Officially the Raytracing Workbench only supports the abandoned [LuxRender](/LuxRender "LuxRender") (latest version is 1.6, 2017-12-28), while the new [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) (intended as a future replacement of the Raytracing Workbench) supports instead LuxCoreRender and has dropped the support for LuxRender. Anyway, even if officially not supported, [LuxCoreRender](/LuxCoreRender "LuxCoreRender") may work with the Raytracing Workbench, it might be worth to give it a try. See the [LuxRender](/LuxRender "LuxRender") page for more information and installation instructions, and the [LuxCoreRender](/LuxCoreRender "LuxCoreRender") if you want to try a more modern software.

### POVRay

[POV-Ray](https://www.povray.org) - это известный трассировщик лучей, который может создавать фотореалистичные изображения. Это один из двух механизмов рендеринга, которые в настоящее время поддерживаются [верстаком Raytracing](/Raytracing_Workbench/ru "Raytracing Workbench/ru"). Дополнительную информацию и инструкцию по установке смотрите на странице [POV-Ray](/POV-Ray/ru "POV-Ray/ru").

## Конечные элементы

### CalculiX

[CalculiX](http://calculix.de) представляет собой набор из двух пакетов конечных элементов: CalculiX CrunchiX, вычислитель МКЭ, и CalculiX GraphiX, графический интерфейс. В FreeCAD поддерживается лишь вычислитель. Он используется инструментом [Solver CalculiX](/FEM_SolverCalculiX/ru "FEM SolverCalculiX/ru").

### Gmsh

[Gmsh](http://gmsh.info) это автоматический генератор сеток для метода конечных элементов. Он используется инструментами [FEM MeshGmshFromShape](/FEM_MeshGmshFromShape/ru "FEM MeshGmshFromShape/ru") и [Mesh FromPartShape](/Mesh_FromPartShape/ru "Mesh FromPartShape/ru").

### Элмер

[Elmer](https://www.csc.fi/web/elmer) - это программное обеспечение для мультифизического моделирования, исходный код которого был открыт в 2005 году. В FreeCAD его модули Grid и Solver используются инструментом [FEM SolverElmer](/FEM_SolverElmer/ru "FEM SolverElmer/ru").

### FEniCS

[FEniCS](https://fenicsproject.org) - это вычислительная платформа для решения уравнений в частных производных (partial differential equations, PDE), которые широко используются при решении задач МКЭ. Он используется [верстаком FEM](/FEM_Workbench/ru "FEM Workbench/ru").

### Z88

[Z88](https://en.z88.de) - это еще одна программа FEM, содержащая сеточник, вычислитель и преобразователи. Она используется инструментом [FEM SolverZ88](/FEM_SolverZ88/ru "FEM SolverZ88/ru"). Для FreeCAD требуется пакет Z88OS с открытым исходным кодом.

### OpenFOAM

[OpenFOAM](https://openfoam.org) это большая коллекция библиотек для вычислительной гидродинамики (computational fluid dynamics, CFD). OpenFOAM используется [внешними верстаками](/External_workbenches/ru "External workbenches/ru") [Cfd](/Cfd_Workbench/ru "Cfd Workbench/ru") и [CfdOF](https://github.com/jaheyns/CfdOF).

# Связанные страницы

* [Импорт и экспорт](/Import_Export/ru "Import Export/ru")
* [Настройки импорта и экспорта](/Import_Export_Preferences/ru "Import Export Preferences/ru")
* [Сторонние библиотеки](/Third_Party_Libraries/ru "Third Party Libraries/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_additional_components/ru&oldid=1476446>"