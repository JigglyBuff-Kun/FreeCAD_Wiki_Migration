---
title: FlattenWire
---

|                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FlattenWire                                                                                                                                                                                                                                                                              |
| Descripción                                                                                                                                                                                                                                                                              |
| Esta macro aplana contornos de croquizado que no son planos a la mediana de su coordenada Z Versión macro : 1.0 Fecha última modificación : 2011-08-01 Versión FreeCAD : All Descargar : [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png) Autor : Yorik |
| Autor                                                                                                                                                                                                                                                                                    |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                        |
| Descargar                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/2f/Macro_FlattenWire.png)                                                                                                                                                                                                        |
| Enlace                                                                                                                                                                                                                                                                                   |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es")                                                                       |
| Versión Macro                                                                                                                                                                                                                                                                            |
| 1.0                                                                                                                                                                                                                                                                                      |
| Fecha última modificación                                                                                                                                                                                                                                                                |
| 2011-08-01                                                                                                                                                                                                                                                                               |
| Versión(es) FreeCAD                                                                                                                                                                                                                                                                      |
| All                                                                                                                                                                                                                                                                                      |
| Acceso directo predeterminado                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                   |
| Ver también                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                          |

## Description

## Descriptivo

Esta macro aplana contornos de coquizado que no son planos a la mediana de su coordenada Z

## Rescripto

ToolBar Icon
![](/images/Macro_FlattenWire.png)

**Macro_FlattenWire.FCMacro**

```
import FreeCAD
obj = FreeCAD.ActiveDocument.ActiveObject
z = 0
for p in obj.Points: z += p.z
z = z/len(obj.Points)
newpoints = []
for p in obj.Points: newpoints.append(FreeCAD.Vector(p.x, p.y, z))
obj.Points = newpoints
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FlattenWire/es&oldid=1086163>"
