---
title: Textura na objekt
---

|                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Texture Objects                                                                                                                                                                                                                                                                                                                                       |
| Popis                                                                                                                                                                                                                                                                                                                                                 |
| Toto makro umožňuje dočasně vložit obrázek s texturou na vybraný objekt. Pro odstranění textury stačí jednoduše zavřít a znovu otevřít dokument. Version macro : 1.0 Date last modification : 2011-10-13 FreeCAD version : 0.18 и испод Download : [Icon Toolbar](https://www.freecadweb.org/wiki/images/d/da/Macro_Texture_Objects.png) Autor: yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                 |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                     |
| Download                                                                                                                                                                                                                                                                                                                                              |
| [Icon Toolbar](https://www.freecadweb.org/wiki/images/d/da/Macro_Texture_Objects.png)                                                                                                                                                                                                                                                                 |
| Odkazy                                                                                                                                                                                                                                                                                                                                                |
| [Makro recepty                                                                                                                                                                                                                                                                                                                                        | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                                                                                                 |
| 1.0                                                                                                                                                                                                                                                                                                                                                   |
| Datum poslední úpravy                                                                                                                                                                                                                                                                                                                                 |
| 2011-10-13                                                                                                                                                                                                                                                                                                                                            |
| Verze FreeCAD                                                                                                                                                                                                                                                                                                                                         |
| 0.18 и испод                                                                                                                                                                                                                                                                                                                                          |
| Výchozí zástupce                                                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                                                |
| Viz též                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                       |

## Description

## Description

Toto makro umožňuje dočasně vložit obrázek s texturou na vybraný objekt. Pro odstranění textury stačí jednoduše zavřít a znovu otevřít dokument.

![](/images/Textured_objects.jpg)

## Скрипта

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

## Линкови

[Macro Texture Objects](https://forum.freecadweb.org/viewtopic.php?t=7216)

[Script to map texture with environement checked](https://forum.freecadweb.org/viewtopic.php?f=3&t=28795)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture_Objects/cs&oldid=1338898>"
