---
title: Makrodefinicja Tekstura na obiektach
---

|                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tekstura na obiektach                                                                                                                                                                                                                                                                                                                                          |
| Opis                                                                                                                                                                                                                                                                                                                                                           |
| Makrodefinicja umożliwia tymczasowe umieszczenie obrazu tekstury na wybranych obiektach. Aby usunąć tekstury, wystarczy zamknąć i ponownie otworzyć dokument. Macro version: 1.1 Last modified: 2023-12-08 FreeCAD version: 0.18 i nowszy Download: [Ikona paska narzędzi](https://www.freecadweb.org/wiki/images/d/da/Macro_Texture_Objects.png) Autor: yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                          |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                              |
| Do pobrania                                                                                                                                                                                                                                                                                                                                                    |
| [Ikona paska narzędzi](https://www.freecadweb.org/wiki/images/d/da/Macro_Texture_Objects.png)                                                                                                                                                                                                                                                                  |
| Odnośniki                                                                                                                                                                                                                                                                                                                                                      |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl")                                                                                                                    |
| Wersja Makrodefinicji                                                                                                                                                                                                                                                                                                                                          |
| 1.1                                                                                                                                                                                                                                                                                                                                                            |
| Data zmian                                                                                                                                                                                                                                                                                                                                                     |
| 2023-12-08                                                                                                                                                                                                                                                                                                                                                     |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                                                                                 |
| 0.18 i nowszy                                                                                                                                                                                                                                                                                                                                                  |
| Domyślny skrót                                                                                                                                                                                                                                                                                                                                                 |
| _Brak_                                                                                                                                                                                                                                                                                                                                                         |
| Zobacz również                                                                                                                                                                                                                                                                                                                                                 |
| _-_                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                                |

## Opis

Makrodefinicja umożliwia tymczasowe umieszczenie obrazu tekstury na wybranych obiektach. Aby usunąć tekstury, wystarczy zamknąć i ponownie otworzyć dokument.

![](/images/Textured_objects.jpg)

## Skrypt

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

## Odnośniki internetowe

- Wątek na forum [Obiekty tekstury](https://forum.freecadweb.org/viewtopic.php?t=7216)

- Wątek na forum [Skrypt do mapowania tekstur przy zaznaczonym środowisku](https://forum.freecadweb.org/viewtopic.php?f=3&t=28795)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture_Objects/pl&oldid=1344882>"
