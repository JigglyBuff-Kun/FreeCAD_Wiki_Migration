---
title: Texture Objects
---

|                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objetos de textura                                                                                                                                                                                                                                                                                                                                                                      |
| Descripción                                                                                                                                                                                                                                                                                                                                                                             |
| Esta macro permite poner temporalmente una imagen de textura en los objetos seleccionados. Para eliminar las texturas, simplemente cierra y vuelve a abrir el documento. Versión macro : 1.0 Fecha última modificación : 2011-10-13 Versión FreeCAD : 0.18 y por debajo Descargar : [Icon Toolbar](https://www.freecadweb.org/wiki/images/d/da/Macro_Texture_Objects.png) Autor : yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                                                   |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                       |
| Descargar                                                                                                                                                                                                                                                                                                                                                                               |
| [Icon Toolbar](https://www.freecadweb.org/wiki/images/d/da/Macro_Texture_Objects.png)                                                                                                                                                                                                                                                                                                   |
| Enlace                                                                                                                                                                                                                                                                                                                                                                                  |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es")                                                                                                                                                                      |
| Versión Macro                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                     |
| Fecha última modificación                                                                                                                                                                                                                                                                                                                                                               |
| 2011-10-13                                                                                                                                                                                                                                                                                                                                                                              |
| Versión(es) FreeCAD                                                                                                                                                                                                                                                                                                                                                                     |
| 0.18 y por debajo                                                                                                                                                                                                                                                                                                                                                                       |
| Acceso directo predeterminado                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                                  |
| Ver también                                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                         |

## Description

## Descripción

Esta macro permite poner temporalmente una imagen de textura en los objetos seleccionados. Para eliminar las texturas, simplemente cierra y vuelve a abrir el documento.

![](/images/Textured_objects.jpg)

## Guión

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

[Macro Texture Objects](https://forum.freecadweb.org/viewtopic.php?t=7216)

[Script to map texture with environement checked](https://forum.freecadweb.org/viewtopic.php?f=3&t=28795)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture_Objects/es&oldid=1338893>"
