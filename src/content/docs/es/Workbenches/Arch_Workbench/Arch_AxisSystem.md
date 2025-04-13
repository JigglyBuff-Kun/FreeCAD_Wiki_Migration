---
title: Sistema de Ejes Arch
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch AxisSystem |
| Ubicación en el Menú |
| Arch → Axis System |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Arch Axis](/Arch_Axis/es "Arch Axis/es"), [Grid](/Arch_Grid/es "Arch Grid/es") |
|  |

## Descripción

La herramienta Sistema de ejes le permite combinar 2 o 3 objetos [Arch Axis](/Arch_Axis/es "Arch Axis/es"). La función principal de esta herramienta es calcular los puntos de intersección entre los diferentes ejes incluidos en este sistema. Los objetos de Arch pueden usar este sistema para duplicar su forma en los diferentes puntos de intersección.

This is useful to define the intersection points between the different axes. Arch objects can then use this system to duplicate their shape on the different intersection points.

![](/images/Arch_AxisSystem_example.jpg)

*La imagen de arriba muestra tres objetos [Arch Axis](/Arch_Axis/es "Arch Axis/es") combinados en un Sistema de Eje. A continuación, un objeto de columna utiliza este sistema como su propiedad **Eje**, para tener su forma duplicada en cada punto de intersección.*

## Utilización

1. Opcionalmente, seleccione los objetos [Arch Axis](/Arch_Axis/es "Arch Axis/es") que desea incluir en este sistema
2. Presione el botón ![](/images/Arch_AxisSystem.png) Arch AxisSystem
3. Haga clic con el botón derecho en el objeto del sistema de ejes recién creado en la vista de árbol para agregar / editar los objetos [Arch Axis](/Arch_Axis "Arch Axis") incluidos en este sistema
4. Seleccione cualquier [Arch Axis](/Arch_Axis/es "Arch Axis/es") existente y presione los botones Agregar o Eliminar para agregarlo o eliminarlo de / a este sistema
5. Establecer la propiedad **Eje** de cualquier objeto Arch para que apunte a este sistema, para que su forma se duplique en los puntos de intersección de este sistema

## Opciones

* Un mismo objeto [Arch Axis](/Arch_Axis/es "Arch Axis/es") puede ser parte de más de un sistema
* Cualquier objeto basado en una forma también se puede usar como la propiedad **Eje** de los objetos Arch. En este caso, la forma del objeto se duplicará a lo largo de los vértices del objeto ejes

## Scripting

## Programación

La herramienta del sistema ejes puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de Python mediante la siguiente función:

```
AxisSystem = makeAxisSystem(axes, name="Axis System")

```

Hace un sistema de eje basado en la lista dada de [Arch Axis](/Arch_Axis/es "Arch Axis/es")

Ejemplo:

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

AxisSystem = Arch.makeAxisSystem([Axes, Axes2])

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = AxisSystem
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_AxisSystem/es&oldid=1432778>"