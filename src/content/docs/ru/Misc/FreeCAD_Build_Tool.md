---
title: Инструметы сборки FreeCAD
---
## Введение

**Инструмент сборки FreeCAD** или **fcbt** это python сценарий расположеный в

```
trunc/src/Tools/fcbt.py

```

Он может быть использован для упрощения некоторых часто встречающихся задач при сборке, распространении и расширении FreeCAD.

## Использование

В корректно установленом [Python](http://en.wikipedia.org/wiki/Python_(programming_language) "wikipedia:Python (programming language)") интепретаторе , может быть вызвана команда *fcbt*

```
python fbct.py

```

Она отобразит меню, в котором вы можете выбрать задачу которую необходимо использовать для:

```
FreeCAD Build Tool
 Usage:
    fcbt <command name> [command parameter]
 possible commands are:
  - DistSrc         (DS)   Build a source Distr. of the current source tree
  - DistBin         (DB)   Build a binary Distr. of the current source tree
  - DistSetup       (DI)   Build a Setup Distr. of the current source tree
  - DistSetup       (DUI)  Build a User Setup Distr. of the current source tree
  - DistAll         (DA)   Run all three above modules
  - NextBuildNumber (NBN)  Increase the Build Number of this Version
  - CreateModule    (CM)   Insert a new FreeCAD Module (Workbench) in the module directory
 
 For help on the modules type:
   fcbt <command name> ?

```

В ответ на запрос, введите абревеатуру той команды которую вы хотите вызвать. Например введите "CM" для [создания модуля](/Module_Creation/ru "Module Creation/ru").

### DistSrc

Команда "DS" **создать пакет исходников** текущего дерева исходных текстов.

### DistBin

Команда "DB" **создать бинарный пакет** текущего дерева исходных текстов.

### DistSetup

Команда "DI" **создать самораспаковывающийся пакет** текущего дерева исходных текстов.

### DistSetup

Команда "DUI" **создает пакет с пользовательскими настроками** текущего дерева исходных текстов.

### DistAll

Команда "DA" выполняет последовательно "DS", "DB" и "DI" .

### NextBuildNumber

"NBN" команда **увеличивает номер сборки** создает новую версию FreeCAD.

### Создать Модуль

"CM" команда [создает модуль приложение](/Module_Creation/ru "Module Creation/ru").

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_Build_Tool/ru&oldid=947331>"