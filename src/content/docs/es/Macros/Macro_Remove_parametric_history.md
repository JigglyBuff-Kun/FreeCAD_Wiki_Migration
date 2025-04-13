---
title: Remove parametric history
---

|                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Remove parametric history                                                                                                                                                                                                                                                                                        |
| Descripción                                                                                                                                                                                                                                                                                                      |
| Esta macro eliminará toda la asociatividad paramétrica de un objeto, dejándolo como una forma "tonta" Versión macro : 0.1 Fecha última modificación : 2011-08-01 Versión FreeCAD : All Descargar : [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png) Autor : Yorik |
| Autor                                                                                                                                                                                                                                                                                                            |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                |
| Descargar                                                                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/b7/Macro_Remove_parametric_history.png)                                                                                                                                                                                                                  |
| Enlace                                                                                                                                                                                                                                                                                                           |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es")                                                                                               |
| Versión Macro                                                                                                                                                                                                                                                                                                    |
| 0.1                                                                                                                                                                                                                                                                                                              |
| Fecha última modificación                                                                                                                                                                                                                                                                                        |
| 2011-08-01                                                                                                                                                                                                                                                                                                       |
| Versión(es) FreeCAD                                                                                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                                                                                              |
| Acceso directo predeterminado                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                           |
| Ver también                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                  |

## Descripción

Esta macro eliminará toda la asociatividad paramétrica de un objeto, dejándolo como una forma "tonta"

Antes y después de:

![](/images/RPH_before.png)

![](/images/RPH_after.png)

## Script

ToolBar Icon ![](/images/Macro_Remove_parametric_history.png)

**Remove parametric history.FCMacro**

```
originalObject = FreeCAD.ActiveDocument.ActiveObject
newShape = originalObject.Shape.copy()
newName = FreeCAD.ActiveDocument.ActiveObject.Name
FreeCAD.ActiveDocument.removeObject(newName)
newObject = FreeCAD.ActiveDocument.addObject("Part::Feature",newName)
newObject.Shape = newShape
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Remove_parametric_history/es&oldid=692467>"
