---
title: Texture Objects
---

|                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Texture Objects                                                                                                                                                                                                                                                                                                                                                              |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                 |
| Dieses Makro ermöglicht eine Texturabbildung auf ausgewählte Objekte zu legen. Zum Entfernen der Texturen einfach das Dokument schließen und erneut öffnen. Versionsmakro : 1.1 Datum der letzten Änderung : 2023-12-08 FreeCAD version : 0.18 und darunter Herunterladen : [ToolBar Icon](https://wiki.freecad.org/wiki/images/d/da/Macro_Texture_Objects.png) Autor: yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                                        |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                            |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://wiki.freecad.org/wiki/images/d/da/Macro_Texture_Objects.png)                                                                                                                                                                                                                                                                                          |
| Links                                                                                                                                                                                                                                                                                                                                                                        |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                 |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                |
| 1.1                                                                                                                                                                                                                                                                                                                                                                          |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                   |
| 2023-12-08                                                                                                                                                                                                                                                                                                                                                                   |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                           |
| 0.18 und darunter                                                                                                                                                                                                                                                                                                                                                            |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                                                                                       |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                              |

## Beschreibung

Dieses Makro ermöglicht eine Texturabbildung auf ausgewählte Objekte zu legen. Zum Entfernen der Texturen einfach das Dokument schließen und erneut öffnen.

![](/images/Textured_objects.jpg)

## Skript

**Macro_Texture_Objects.FCMacro**

```
import FreeCADGui
from PySide import QtGui
from pivy import coin

# get a jpg filename
jpgfilename = QtGui.QFileDialog.getOpenFileName(QtGui.QApplication.activeWindow(),'Open image file','*.jpg')

# apply textures
for obj in FreeCADGui.Selection.getSelection():
    rootnode = obj.ViewObject.RootNode
    tex =  coin.SoTexture2()
    tex.filename = str(jpgfilename[0])
    rootnode.insertChild(tex,1)
```

## Links

- Forum-Thread [Macro Texture Objects](https://forum.freecadweb.org/viewtopic.php?t=7216)

- Forum-Thread [[Script to map texture with environement checked](https://forum.freecadweb.org/viewtopic.php?f=3&t=28795)]

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture_Objects/de&oldid=1356498>"
