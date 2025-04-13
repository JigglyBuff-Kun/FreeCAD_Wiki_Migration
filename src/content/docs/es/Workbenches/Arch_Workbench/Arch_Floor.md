---
title: Arch Piso
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Floor |
| Ubicación en el Menú |
| Arquitectura → Piso |
| Entornos de trabajo |
| [Entorno de Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| F L |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

El Piso de Arquitectura es un tipo especial de FreeCAD group que tiene un par de propiedades adicionales particularmente ajustadas para la construcción de pisos. En particular, tienen una propiedad de altura, que sus objetos descendientes ([muros](/Arch_Wall/es "Arch Wall/es") y [estructuras](/Arch_Structure/es "Arch Structure/es")) pueden utilizar para ajustar su altura automáticamente

As of 0.18 and above the Arch Floor is derived entirely from the [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") object, which is a general container to organize a building model not limited to floors or storeys. Older Floor objects can be converted to the new type by right clicking on them and choosing `Convert to BuildingPart`.

## Como utilizar

1. Opcionalmente, seleccione uno o más objetos para incluir en su nuevo piso
2. Presione el botón ![](/images/Arch_Floor.png) **Arch Floor** o presione las teclas F y L

## Opciones

* Después de la creación de un piso, puedes añadirle más objetos arrastrando y soltándolos en la vista en árbol o utilizando la herramienta ![](/images/Arch_Add.png) [Añadir](/Arch_Add/es "Arch Add/es")
* Puedes eliminar objetos de un piso arrastrando y soltándolos fuera en la vista de árbol o utilizando la herramienta ![](/images/Arch_Remove.png) [Remover](/Arch_Remove/es "Arch Remove/es")

## Propiedades

An Arch Floor object shares all properties from an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"), with the Datos**Ifc Type** set to `"Building Storey"`.

## Scripting

## Programación

La herramientas piso se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando las siguiente funcion:

```
Floor = makeFloor(objectslist=None, baseobj=None, name="Floor")

```

:   Crea un piso incluyendo los objetos de la lista dada.

Ejemplo:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

Floor = Arch.makeFloor([Wall1, Wall2])

Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Floor/es&oldid=1537466>"