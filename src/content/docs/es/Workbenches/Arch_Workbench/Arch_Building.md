---
title: Arch Building
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Building |
| Ubicación en el Menú |
| Arch → Building |
| Entornos de trabajo |
| [Entorno de Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| B U |
| Introducido en versión |
| - |
| Ver también |
| [Piso](/Arch_Floor/es "Arch Floor/es"), [Ubicación](/Arch_Site/es "Arch Site/es") |
|  |

## Descripción

Las Construcciones son un tipo especial de objeto grupo de FreeCAD particularmente ajustadas para la representación de una unidad de construcción completa. Se utilizan principalmente para organizar el modelo, conteniendo objetos [piso](/Arch_Floor/es "Arch Floor/es").

## Utilización

1. Opcionalmente, selecciona uno o más objetos para incluirlos en tu nueva consdtrucción
2. Presiona el botón ![](/images/Arch_Building.png) **Construcción**, o presiona las teclas B y U

## Opciones

* Después de la creación de uina construcción, puedes añadirle más objetos arrastrando y soltándolos en la vista en árbol o utilizando la herramienta ![](/images/Arch_Add.png) [Añadir](/Arch_Add/es "Arch Add/es")
* Puedes eliminar objetos de una construcción arrastrando y soltándolos fuera desde la vista de árbol o utilizando la herramienta ![](/images/Arch_Remove.png) [Eliminar](/Arch_Remove/es "Arch Remove/es")

## Properties

* Datos**Building Type**: The type of this building, to choose from a list

## Scripting

## Programación

La herramienta Construcción se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python por medio de las siguientes instrucciones:

```
Building = makeBuilding(objectslist=None, baseobj=None, name="Building")

```

:   crea una construcción incluyendo los objetos de la lista dada.

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

Building = Arch.makeBuilding([Wall1, Wall2])

Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Building/es&oldid=1432796>"