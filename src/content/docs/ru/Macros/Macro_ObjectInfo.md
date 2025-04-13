---
title: ObjectInfo
---

|                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro ObjectInfo                                                                                                                                                                                                                                                                                                                                                   |
| описание                                                                                                                                                                                                                                                                                                                                                           |
| предоставляет информацию о выбранном объекте Макрос версии : 1.0 Дата последней модификации : 2012-11-09 FreeCAD версия : Until 0.17 **and PyQt4** Скачать : Это не макрос, а один WorkBench, распакуйте ZIP-файл и вставьте полный каталог в каталог пользователя Mod. [Info](https://github.com/KeithSloan/FreeCAD_Info/archive/master.zip) автор : keithsloan52 |
| автор                                                                                                                                                                                                                                                                                                                                                              |
| [keithsloan52](/index.php?title=User:Keithsloan52&action=edit&redlink=1 "User:Keithsloan52 (page does not exist)")                                                                                                                                                                                                                                                 |
| Скачать                                                                                                                                                                                                                                                                                                                                                            |
| Это не макрос, а один WorkBench, распакуйте ZIP-файл и вставьте полный каталог в каталог пользователя Mod. [Info](https://github.com/KeithSloan/FreeCAD_Info/archive/master.zip)                                                                                                                                                                                   |
| Links                                                                                                                                                                                                                                                                                                                                                              |
| [Макросы рецепты](/Macros_recipes/ru "Macros recipes/ru") [Как установить макросы](/How_to_install_macros/ru "How to install macros/ru") [Как настроить панели инструментов](/Customize_Toolbars/ru "Customize Toolbars/ru")                                                                                                                                       |
| Версия                                                                                                                                                                                                                                                                                                                                                             |
| 1.0                                                                                                                                                                                                                                                                                                                                                                |
| Дата последней модификации                                                                                                                                                                                                                                                                                                                                         |
| 2012-11-09                                                                                                                                                                                                                                                                                                                                                         |
| Версии FreeCAD                                                                                                                                                                                                                                                                                                                                                     |
| Until 0.17 **and PyQt4**                                                                                                                                                                                                                                                                                                                                           |
| Ярлык по умолчанию                                                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                                                             |
| Смотрите также                                                                                                                                                                                                                                                                                                                                                     |
| [Arch Survey](/File:Arch_Survey.svg "Arch Survey") [Arch Survey](/Arch_Survey/ru "Arch Survey/ru")                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                    |

## Description

## Описание

Этот WorkBench позволяет узнать объем информации о площади поверхности, центре масс и моменте интерции выбранного объекта.

![](/images/ObjectInfoIt.png)

## Установка

Если вы работаете в Linux, вам нужно создать папку с именем «Mod» в скрытой папке .FreeCAD, которая находится в вашей домашней папке. Затем создайте папку с именем "Info" в папке "Mod" и извлеките в нее содержимое архива. На Windows я понятия не имею, где это будет. Используйте ту же процедуру для Windows в C:\Program Files\FreeCAD\Mod.

## Usage

## Использование

Затем запустите FreeCAD, откройте свой файл STEP и переключитесь на рабочую среду "Info" с помощью переключателя рабочей среды или перейдя в меню View → Workbench. Теперь выберите твёрдое тело и нажмите на иконку «Информация»; левая панель задач покажет некоторую информацию о модели, в том числе объем, площадь поверхности, центр масс и момент пересечения.

## код

```
import webbrowser

##########
# WorkBenche
# Code used to download the zip file from FreeCAD
##########

FreeCAD.Console.PrintMessage("\n" + "You must download the Info.zip file in the author github KeithSloan/FreeCAD_Infosite" + "\n")
FreeCAD.Console.PrintMessage("http://keithsloan.dynu.com/Keith&Jenny/" + "\n")
webbrowser.open("https://github.com/KeithSloan/FreeCAD_Info/archive/master.zip")
```

## Links

## Ссылки

Пользователь FreeCAD создал удобный модуль «Информация», который вы можете получить здесь: <http://www.sloan-home.co.uk/FreeCAD/Info/Info.html>

С форума[Info Workbench - Help with icons please.](http://forum.freecadweb.org/viewtopic.php?f=10&t=3185)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_ObjectInfo/ru&oldid=1345591>"
