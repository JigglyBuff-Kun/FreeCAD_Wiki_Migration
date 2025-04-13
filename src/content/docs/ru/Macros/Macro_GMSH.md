---
title: GMSH/ru
---

|                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GMSH Macro                                                                                                                                                                                                                                                                                                                                                           |
| описание                                                                                                                                                                                                                                                                                                                                                             |
| Создание сетки метода конечных элементов с помощью генератора сеток GMSH. Возможно создание внутри линейных или билинейных (квадратичных) элементов Балки, Оболочки и Объема. Макрос версии : 1.0 Дата последней модификации : 2015-08-24 FreeCAD версия : Все Скачать : [ToolBar Icon](https://www.freecadweb.org/wiki/images/a/a2/Macro_GMSH.png) автор : psicofil |
| автор                                                                                                                                                                                                                                                                                                                                                                |
| [psicofil](/index.php?title=User:Psicofil&action=edit&redlink=1 "User:Psicofil (page does not exist)")                                                                                                                                                                                                                                                               |
| Скачать                                                                                                                                                                                                                                                                                                                                                              |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/a/a2/Macro_GMSH.png)                                                                                                                                                                                                                                                                                           |
| Links                                                                                                                                                                                                                                                                                                                                                                |
| [Макросы рецепты](/Macros_recipes/ru "Macros recipes/ru") [Как установить макросы](/How_to_install_macros/ru "How to install macros/ru") [Как настроить панели инструментов](/Customize_Toolbars/ru "Customize Toolbars/ru")                                                                                                                                         |
| Версия                                                                                                                                                                                                                                                                                                                                                               |
| 1.0                                                                                                                                                                                                                                                                                                                                                                  |
| Дата последней модификации                                                                                                                                                                                                                                                                                                                                           |
| 2015-08-24                                                                                                                                                                                                                                                                                                                                                           |
| Версии FreeCAD                                                                                                                                                                                                                                                                                                                                                       |
| Все                                                                                                                                                                                                                                                                                                                                                                  |
| Ярлык по умолчанию                                                                                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                                                                                               |
| Смотрите также                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                      |

## Important information

This macro is outdated. It is Python 2.x code. All the code has been directly integrated in the FEM Workbench before FreeCAD Version 0.20. See [FEM MeshGmshFromShape](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape").

## Описание

Создание сетки метода конечных элементов с помощью генератора сеток GMSH. Возможно создание внутри линейных или билинейных (квадратичных) элементов Балки, Оболочки и Объема.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/psicofil/Macros_FreeCAD/master/Macros/GMSHMesh.FCMacro>">raw code</a>

![GMSH](/images/Macro_GMSH00.png)

## Скрипт

Вы можете найти макрос в следующем репозитории github: [GMSH Macro](https://github.com/psicofil/Macros_FreeCAD/blob/master/Macros/GMSHMesh.FCMacro)

ToolBar Icon ![](/images/Macro_GMSH.png)

**GMSHMesh.FCMacro GMSH Macro.FCMacro**

## Дополнительные установки

Должен быть установлен GMSH. Смотрите [gmsh.info](http://gmsh.info/). Макрос предназначен для работы в операционных системах Linux, OSX и Windows. Бинарный путь GMSH должен быть адаптирован в макросе.

## Ссылки

Страница обсуждения [макроса GMSH](http://forum.freecadweb.org/viewtopic.php?t=11182)

[Смотрите использование макроса на YouTube (англ).](https://www.youtube.com/watch?v=ZcG5EEUe3yc)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_GMSH/ru&oldid=1394318>"
