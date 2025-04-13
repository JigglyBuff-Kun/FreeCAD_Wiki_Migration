---
title: Arquitectura  Añadir
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Add |
| Ubicación en el Menú |
| Arquitectura → Adicción |
| Entornos de trabajo |
| [Entorno de Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Arch Suprimir](/Arch_Remove/es "Arch Remove/es") |
|  |

## Descripción

La herramienta de adicción te permite realizar cuatro tipos de operaciones:

* Añadir objetos basados en [formas](/Part_Workbench/es "Part Workbench/es") a un componente de Arquitectura, tal como un [muro](/Arch_Wall/es "Arch Wall/es") o una [estructura](/Arch_Structure/es "Arch Structure/es"). Estos objetos forman así parte del componente de Arquitectura, y te permiten modificar su forma pero manteniendo sus propiedades base tales como el ancho y alto.
* Añadir componentes de Arquitectura, como [muros](/Arch_Wall/es "Arch Wall/es") o [estructuras](/Arch_Structure/es "Arch Structure/es"), a un objeto de arquitectura como los [pisos](/Arch_Floor/es "Arch Floor/es").
* Añadir [sistemas de ejes](/Arch_Axis/es "Arch Axis/es") a [objetos estructurales](/Arch_Structure/es "Arch Structure/es")
* Añadir objetos a [planos de sección](/Arch_SectionPlane/es "Arch SectionPlane/es")

The counterpart of this tool is the ![](/images/Arch_Remove.svg) [Arch Remove](/Arch_Remove "Arch Remove") tool.

![](/images/Arch_Add_example.jpg)

*En la imagen superior, un cubo se añade a un muro.*

## Utilización

1. Selecciona el objeto(s) a ser añadido, luego el objeto "huésped" (el objeto huésped debe ser el último que selecciones)
2. Presiona el botón ![](/images/Arch_Add.png) **Añadir**

## Scripting

## Programación

La herramienta Añadir se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python por medio de las siguientes instrucciones:

:   ```
    addComponents(objectsList, host)

    ```

* Añade los objetos dados como componentes del objeto huesped dado. Utiliza esto por ejemplo para añadir ventanas a un muro, o muros a un piso.
* No retorna nada.

Ejemplo:

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/es&oldid=1432721>"