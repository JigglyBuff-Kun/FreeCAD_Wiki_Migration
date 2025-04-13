---
title: Campitura di oggetti
---

|                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Campitura di oggetti                                                                                                                                                                                                                                                                                                                                                       |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                |
| Questa macro permette di mettere temporaneamente una immagine di texture sugli oggetti selezionati. Per rimuovere le campiture, è sufficiente chiudere e riaprire il documento. Versione macro: 1.1 Ultima modifica: 2023-12-08 Versione FreeCAD: 0.18 e precedenti Download: [ToolBar Icon](https://wiki.freecad.org/images/d/da/Macro_Texture_Objects.png) Autore: yorik |
| Autore                                                                                                                                                                                                                                                                                                                                                                     |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                          |
| Download                                                                                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://wiki.freecad.org/images/d/da/Macro_Texture_Objects.png)                                                                                                                                                                                                                                                                                             |
| Link                                                                                                                                                                                                                                                                                                                                                                       |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                   |
| Versione macro                                                                                                                                                                                                                                                                                                                                                             |
| 1.1                                                                                                                                                                                                                                                                                                                                                                        |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                       |
| 2023-12-08                                                                                                                                                                                                                                                                                                                                                                 |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                        |
| 0.18 e precedenti                                                                                                                                                                                                                                                                                                                                                          |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                  |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                               |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                            |

## Descrizione

Questa macro permette di mettere temporaneamente una immagine di texture sugli oggetti selezionati. Per rimuovere le campiture, è sufficiente chiudere e riaprire il documento.

![](/images/Textured_objects.jpg)

## Script

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

## Link

- La discussione nel forum [Macro Texture Objects](https://forum.freecadweb.org/viewtopic.php?t=7216)

- La discussione nel forum [Script to map texture with environement checked](https://forum.freecadweb.org/viewtopic.php?f=3&t=28795)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture_Objects/it&oldid=1350296>"
