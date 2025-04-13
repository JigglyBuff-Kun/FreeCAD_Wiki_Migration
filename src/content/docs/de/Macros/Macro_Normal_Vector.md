---
title: Normalenvektor
---

|                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Normal Vector Macro                                                                                                                                                                                                                              |
| Description                                                                                                                                                                                                                                      |
| Erhalte den Normalenvektor auf die zuvor angewählte Oberfläche Macro version: 1.0 Last modified: 2016-09-26 FreeCAD version: Alle Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/8b/Macro_Normal_Vector.png) Author: ulrich1a |
| Author                                                                                                                                                                                                                                           |
| [ulrich1a](/index.php?title=User:Ulrich1a&action=edit&redlink=1 "User:Ulrich1a (page does not exist)")                                                                                                                                           |
| Download                                                                                                                                                                                                                                         |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/8/8b/Macro_Normal_Vector.png)                                                                                                                                                              |
| Links                                                                                                                                                                                                                                            |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                 |
| Macro Version                                                                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                                                                              |
| Date last modified                                                                                                                                                                                                                               |
| 2016-09-26                                                                                                                                                                                                                                       |
| FreeCAD Version(s)                                                                                                                                                                                                                               |
| Alle                                                                                                                                                                                                                                             |
| Default shortcut                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                           |
| See also                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                  |

## Beschreibung

Einfaches Makro, um den aus der zuvor in der 3D-Ansicht gewählten Oberfläche Normalenvektor zu erhalten und an die Pythonkonsole zu übergeben.

## Anwendung

- Die Oberfläche in der 3D-Ansicht wählen.
- Die Makroanweisungen in die Pythonkonsole kopieren.
- FreeCAD wird die Normalenvektorinformationen in der Pythonkonsole anzeigen.
- Diese Werte können für die Einstellung der Richtung beim Erstellen einer Zeichnungsansicht verwendet werden.

## Skript

ToolBar Icon
![](/src/assets/images/Macro_Normal_Vector.png)

**Macro_Normal_Vector.FCMacro**

```
Gui.Selection.getSelectionEx()[0].SubObjects[0].Faces[0].normalAt(0,0)
```

## Verweis

[Link to dicussion thread (german)](http://forum.freecadweb.org/viewtopic.php?f=13&t=10959)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Normal_Vector/de&oldid=1087015>"
