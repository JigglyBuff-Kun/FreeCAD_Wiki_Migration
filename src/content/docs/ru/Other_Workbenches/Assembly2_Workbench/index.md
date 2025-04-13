---
title: Assembly2 Workbench/ru
---

:::caution
Верстак Assembly2 устарел. Его автор более не поддерживает его, так что он может не работать с FreeCAD версии 0.17 и выше. Информация на этой странице не поддерживается, и оставлена для исторических задач.
:::

Для альтернативы, смотрите [A2plus](/A2plus_Workbench/ru "A2plus Workbench/ru"). Этот верстак является ветвью Assembly2, но не совместим с ним. Если у Вас имеются более старые модели, которые Вам надо открыть, Вам следует оставаться на FreeCAD 0.16 и Assembly2. Более новые модели должны создаваться только в A2plus и открываться только им.  
В качестве других вариантов смотрите [Assembly3](/Assembly3_Workbench/ru "Assembly3 Workbench/ru") или [Assembly4](/Assembly4_Workbench/ru "Assembly4 Workbench/ru"). Эти верстаки так же основаны на Assembly2, но не совместимы с любым из перечисленного.

## Введение

Assembly2 это верстак для создания сборок из FreeCAD v0.15 с поддержкой импорта деталей из внешних файлов.

По утверждению автора [на форуме](https://forum.freecadweb.org/viewtopic.php?f=17&t=16591), он более не поддерживается с 2016 года, поэтому у него могут быть проблемы с FreeCAD 0.17 и выше. Хорошей альтернативой может быть более новый и активно поддерживаемый [верстак A2plus](/A2plus_Workbench/ru "A2plus Workbench/ru").

![](/images/Assembly2_example.jpg)

## Применение

Предполагаемый процесс работы:

- каждая деталь в сборке проектируется в своём собственном файле FreeCAD
- для сборки создаётся отдельный файл FreeCAD
- детали импортируются в эту сборку, используя верстак Assembly 2
- для сборки импортированных деталей будут добавлены добавлены пространственные ограничения

Возможности

- ограничения по окружности
- ограничения соосности
- ограничения по плоскости
- импорт частей
- обновление уже импортированных частей

Ограничения

- слабый вычислитель ограничений, могущий ошибиться или требовать слишком много времени для сложных сборок
- не поддерживается откат и тому подобные возможности

## Справки

- Author: hamish
- Home page: [Assembly2](https://github.com/hamish2014/FreeCAD_assembly2)
- Source code on github: [Assembly2](https://github.com/hamish2014/FreeCAD_assembly2)

## Инструменты

Панель инструментов

![](/images/Assembly2-menu-orizz.png)

Ниспадающее меню

![](/images/Assembly2-menu-vert.png)

- ![](/images/Assembly2_ImportPart.png) Импорт деталей из других документов FreeCAD
- ![](/images/Assembly2_UpdatePart.png) Обновить детали, импортированные в сборку
- ![](/images/Assembly2_Move.png) Перемещение
- ![](/images/Assembly2_CircularEdgeConstraint.png) Добавить ограничение по круглой кромке
- ![](/images/Assembly2_PlaneConstraint.png) Добавить ограничение по плоскости
- ![](/images/Assembly2_AxialConstraint.png) Добавить осевое ограничение
- ![](/images/Assembly2_AngularConstraint.png) Создать угловое ограничение между двумя плоскостями
- ![](/images/Assembly2_SphericalSurfaceConstraint.png) Добавить ограничение по сферической поверхности
- ![](/images/Assembly2_DOFAnimation.png) Анимировать степени свободы
- ![](/images/Assembly2_Assembly2Constraint.png) Разрешить ограничения Assembly2
- ![](/images/Assembly2_Mux.png) Собрать сборку в единый объект (используется для создания чертежа сборки и так далее...)
- ![](/images/Assembly2_ListParts.png) Создать список деталей из импортированных с помощью assembly2
- ![](/images/Assembly2_Ceck.png) Проверить сборку на перекрытия/пересечения

Прочее

- ![](/images/Assembly2_BoltMultipleCircularEdges.png) Bolt multiple circular edges
- ![](/images/Assembly2_FlipConstraint.png) Отразить ограничение
- ![](/images/Assembly2_LockRotation.png) Зафиксировать поворот
- ![](/images/Assembly2_Preferences.png) Настройки
- ![](/images/Assembly2_Assembly2.png) Assembly2 WB icon

## Установка

### Автоматическая установка

Смотри [Установка](/Installing/ru "Installing/ru")

### Из GitHub

To use this workbench clone this git repository under your FreeCAD Mod directory, and install the pyside and numpy Python libraries. On a Linux Debian based system such as Ubuntu, installation can be done through BASH as follows

```
sudo apt-get install git python-numpy python-pyside
mkdir ~/.FreeCAD/Mod
cd ~/.FreeCAD/Mod
git clone https://github.com/hamish2014/FreeCAD_assembly2.git

```

In FreeCAD you will now have a new workbench-entry called "Assembly 2". Once installed, use git to upgrade to the latest version through BASH as follows

```
cd ~/.FreeCAD/Mod/FreeCAD_assembly2
git pull
rm *.pyc

```

Alternatilvely, on an Ubuntu system the freecad-community PPA can be used:

```
Add ppa:freecad-community/ppa to your software sources
sudo apt-get update
sudo apt-get install freecad-extras-assembly2

```

In Windows

- download the git repository as ZIP
- assuming FreeCAD is installed in "C:\PortableApps\FreeCAD 0_15", go to "C:\PortableApps\FreeCAD 0_15\Mod" within Windows Explorer
- create new directory named "assembly2"
- unzip downloaded repository in "C:\PortableApps\FreeCAD 0_15\Mod\assembly2"

FreeCAD will now have a new workbench-entry called "Assembly 2".

Pyside and Numpy are integrated in the FreeCAD 0.15 dev-Snapshots, so these Python packages do not need to be installed individually

To update to the latest version, delete the assembly2 folder and redownload the git repository.

## Ссылки

- Workbench Wiki:
- FreeCAD Wiki:
- FreeCAD Forum: <http://forum.freecadweb.org/viewtopic.php?f=10&t=8577>
- Tutorials:
- Videos: [video 1](https://www.youtube.com/watch?v=dhaYJKDk4GI), [video 2](http://youtu.be/ufhyUxQkeC0),
- Files:
- Report bugs: Please report bugs at <https://github.com/hamish2014/FreeCAD_assembly2/issues>

## Другие полезные ссылки

- [Animation](http://www.freecadweb.org/wiki/index.php?title=Sandbox:Animation): This Workbench can be used to create sequences of pictures.
- [ExplodedAnimation](http://www.freecadweb.org/wiki/index.php?title=Sandbox:ExplodedAnimation): FreeCAD workbench to create exploded views and animations of assemblies.
- [External workbenches](/External_workbenches "External workbenches")

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly2_Workbench/ru&oldid=1220908>"
