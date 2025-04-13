---
title: SuperWire
---

|                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SuperWire                                                                                                                                                                                                                                                                                                                                                                                   |
| Descripción                                                                                                                                                                                                                                                                                                                                                                                 |
| Esta macro crea una polilínea a partir de los objetos seleccionados (líneas y arcos) incluso si los métodos habituales de creación de polilíneas fallan (por ejemplo la herramienta Promocionar) Versión macro : 0.1 Fecha última modificación : 2012-05-22 Versión FreeCAD : All Descargar : [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png) Autor : Yorik |
| Autor                                                                                                                                                                                                                                                                                                                                                                                       |
| [Yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                                                                                                                                                           |
| Descargar                                                                                                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e3/Macro_SuperWire.png)                                                                                                                                                                                                                                                                                                             |
| Enlace                                                                                                                                                                                                                                                                                                                                                                                      |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es")                                                                                                                                                                          |
| Versión Macro                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1                                                                                                                                                                                                                                                                                                                                                                                         |
| Fecha última modificación                                                                                                                                                                                                                                                                                                                                                                   |
| 2012-05-22                                                                                                                                                                                                                                                                                                                                                                                  |
| Versión(es) FreeCAD                                                                                                                                                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                                                                                                                                                         |
| Acceso directo predeterminado                                                                                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                                                                                                      |
| Ver también                                                                                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                             |

## Description

## Descriptivo

Esta macro crea una polilínea a partir de los objetos seleccionados (líneas y arcos) incluso si los métodos habituales de creación de polilíneas fallan (por ejemplo la herramienta Promocionar)

Atención, necesitas una versión reciente de FreeCAD para que esto funcione

## Rescripto

ToolBar Icon
![](/images/Macro_SuperWire.png)

**Macro_SuperWire.FCMacro**

```
import FreeCAD,FreeCADGui,Part
try:
    import DraftGeomUtils as fcgeo
except:
    from draftlibs import fcgeo

sel = FreeCADGui.Selection.getSelection()
if not sel:
   FreeCAD.Console.PrintWarning("Select something first!")
else:
   elist = []
   for obj in sel:
       if hasattr(obj,"Shape"):
           elist.append(obj.Shape.Edges[0])
   wire = fcgeo.superWire(elist)
   if wire:
       Part.show(wire)
   else:
       FreeCAD.Console.PrintError("SuperWire operation failed!")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_SuperWire/es&oldid=1086213>"
