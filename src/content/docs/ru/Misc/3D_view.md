---
title: 3D вид
---
## Введение

**3D вид** в FreeCAD это экземпляр Coin3D  [граф сцены](/Scenegraph/ru "Scenegraph/ru"), который формирует самое важное окно [интерфейса](/Interface/ru "Interface/ru"). Coin3D-это библиотека, реализующая стандарт описания сцен OpenInventor 2.1

Некоторые свойства вида, такие как цвет фона, [стиль навигации мыши](/Mouse_Model/ru "Mouse Model/ru") и шаги масштабирования, можно настроить в [редакторе настроек](/Preferences_Editor/ru "Preferences Editor/ru").

![](/images/FreeCAD_3D_view.png)

**3D вид** является компонентом [интерфейса](/Interface/ru "Interface/ru") FreeCAD. По умолчанию он показывает небольшой виджет с координатными осями и навигационный куб также с координатными осями; сетку можно отобразить и настроить, загрузив [верстак Draft](/Draft_Workbench/ru "Draft Workbench/ru").

## Context menu

The options in the context menu of the 3D view depend on the selected object(s) and the currently active workbench. To display this menu optionally select one or more objects and then right-click in the 3D view.

## Подробности

FreeCAD использует библиотеку Quarter для использования Coin3D в среде Qt.

Можно напрямую взаимодействовать с графом сцены 3D-вида из [консоли Python](/Python_console/ru "Python console/ru") с помощью библиотеки Python Pivy.

Дополнительные сведения см. в документации для опытных пользователей:

* [Scenegraph](/Scenegraph/ru "Scenegraph/ru"), описание библиотеки Coin3D.
* [Pivy](/Pivy/ru "Pivy/ru"), использование Coin3D из консоли Python.
* [Сторонние библиотеки](/Third_Party_Libraries/ru "Third Party Libraries/ru") используемые FreeCAD.
* [Coin3D](https://grey.colorado.edu/coin3d/index.html) C++ документация.

Retrieved from "<http://wiki.freecad.org/index.php?title=3D_view/ru&oldid=1442208>"