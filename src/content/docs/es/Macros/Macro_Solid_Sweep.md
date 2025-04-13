---
title: Solid Sweep
---

|                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Solid Sweep                                                                                                                                                                                                                                                       |
| Descripción                                                                                                                                                                                                                                                       |
| Crea un sólido barriendo un perfil a lo largo de una trayectoria. Versión macro : 1.0 Fecha última modificación : 2011-12-03 Versión FreeCAD : All Descargar : [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png) Autor : Normandc |
| Autor                                                                                                                                                                                                                                                             |
| [Normandc](/User:Normandc "User:Normandc")                                                                                                                                                                                                                        |
| Descargar                                                                                                                                                                                                                                                         |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png)                                                                                                                                                                                 |
| Enlace                                                                                                                                                                                                                                                            |
| [Macros recipes](/Macros_recipes/es "Macros recipes/es") [How to install macros](/How_to_install_macros/es "How to install macros/es") [How to customize toolbars](/Customize_Toolbars/es "Customize Toolbars/es")                                                |
| Versión Macro                                                                                                                                                                                                                                                     |
| 1.0                                                                                                                                                                                                                                                               |
| Fecha última modificación                                                                                                                                                                                                                                         |
| 2011-12-03                                                                                                                                                                                                                                                        |
| Versión(es) FreeCAD                                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                                               |
| Acceso directo predeterminado                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                            |
| Ver también                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                   |

## Descriptivo

Esta macro crea un sólido barriendo un perfil 2D a lo largo de una trayectoria previamente seleccionada en la vista 3D. Los elementos 2D se pueden crear con las herramientas habituales de FreeCAD.

El sólido resultante no es paramétrico. Si cambias el perfil o la trayectoria, necesitarás ejecutar la macro de nuevo.

![A few examples of sweeping all using the same oblong section and three kinds of trajectory.](/images/Solid_sweep.png)

## Como se utiliza

- Crea dos elementos 2D, uno para la sección y otro para la trayectoria, de los tipos indicados abajo.
- Selecciona, en el árbol del Proyecto o en la vista 3D, primero la trayectoria y después el perfil. El orden es importante!
- Abre el gestor de macros, selecciona la macro y pulsa en "Ejecutar".
- Se creará un sólido **barrido** en el árbol del Proyecto.

## Elementos 2D soportados

- Contornos

* ![](/images/Sketcher_NewSketch.png) [Croquis](/Sketcher_Workbench/es "Sketcher Workbench/es")
* ![](/images/Draft_BSpline.png) [BSplines](/Draft_BSpline/es "Draft BSpline/es")

- Primitivas 2D del menú _Parametricas → ![](/images/Part_CreatePrimitives.png) [Crear Primitivas](/Part_CreatePrimitives/es "Part CreatePrimitives/es") ..._ (circunferencia, hélice)

## Trucos

- La sección debe ser un perfil cerrado o el resultado no será un sólido.
- La sección no necesita ubicarse en la trayectoria, pero es preferible que sea normal a ella.
- La trayectoria puede ser un perfil abierto o cerrado (circunferencias, o líneas y arcos) pero todos los elementos deben ser tangentes o la forma resultante será inesperada. Por ejemplo, una trayectoria con esquinas rectas como un rectángulo no producirá un sólido.
- Si el sólido se retuerce, edita la macro para cambiar el valor de _isFrenet_ a cero y prueba de nuevo.
- Configurar la variable _makeSolid_ a cero en la macro producirá una colección de superficies con finales abiertos.

## La macro

ToolBar Icon ![](/images/Macro_Solid_Sweep.png)

**Macro_Solid_Sweep.FCMacro**

```
import Part, FreeCAD, math, PartGui, FreeCADGui
from FreeCAD import Base

# get the selected objects, with first selection for the trajectory and second for the section
s = FreeCADGui.Selection.getSelection()
try:
     shape1=s[0].Shape
     shape2=s[1].Shape
except:
     print "Wrong selection"

traj = Part.Wire([shape1])
section = Part.Wire([shape2])

# create Part objec in the current document
myObject=App.ActiveDocument.addObject("Part::Feature","Sweep")

# variable makeSolid = 1 to create solid, 0 to create surfaces
makeSolid = True #1
isFrenet = True #1

# create a 3D shape and assigh it to the current document
Sweep = Part.Wire(traj).makePipeShell([section],makeSolid,isFrenet)
myObject.Shape = Sweep
```

## Créditos

Gracias a [Wmayer](/User:Wmayer "User:Wmayer") por su ayuda al escribir esta macro.

Dos ejemplo de uso se pueden ver en [este hilo del foro](http://forum.freecadweb.org/viewtopic.php?f=8&t=1222&start=50#p11120), así como enlaces para descargar archivos FCStd. Utilizando una hélice como trayectoria, un sólido barrido se puede utilizar para crear un tornillo.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Solid_Sweep/es&oldid=692533>"
