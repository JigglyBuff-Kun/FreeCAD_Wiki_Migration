---
title: Arquitectura Armadura
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arquitectura Armadura |
| Ubicación en el Menú |
| Arquitectura → Armadura |
| Entornos de trabajo |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.19 |
| Ver también |
| *Ninguno* |
|  |

## Descripción

La herramienta Arquitectura Armadura construye un objeto [[1]](https://es.wikipedia.org/wiki/Armadura_(estructura)), bien a partir de un objeto lineal seleccionado (mientas que una [Línea de Borrador](/Draft_Line/es "Draft Line/es") o [Boceto](/Sketcher_NewSketch/es "Sketcher NewSketch/es")), o bien desde cero, si no hay ningún objeto seleccionado al lanzar el comando.

![](/images/Arch_Truss_example.png)

## Utilización

### Crear a partir de un objeto seleccionado

1. Use a workbench of your choice to create a single line
2. Select that line
3. Press the ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss") button
4. Adjust the truss properties to your liking

### Crear desde cero

1. Make sure nothing is selected
2. Press the ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss") button
3. Click in the 3D view to define a first point, or manually enter X, Y and Z coordinates
4. Click in the 3D view to define a second point, or manually enter X, Y and Z coordinates
5. Adjust the truss properties to your liking

## Propiedades

### Datos

* Datos**TrussAngle**: The angle of the truss
* Datos**SlantType**: The slant type of this truss
* Datos**Normal**: The normal direction of this truss
* Datos**HeightStart**: The height of the truss at the start position
* Datos**HeightEnd**: The height of the truss at the end position
* Datos**StrutStartOffset**: An optional start offset for the top strut
* Datos**StrutEndOffset**: An optional end offset for the top strut
* Datos**StrutHeight**: The height of the main top and bottom elements of the truss
* Datos**StrutWidth**: The width of the main top and bottom elements of the truss
* Datos**RodType**: The type of the middle element of the truss
* Datos**RodDirection**: The direction of the rods
* Datos**RodSize**: The diameter or side of the rods
* Datos**RodSections**: The number of rod sections
* Datos**RodEnd**: If the truss has a rod at its endpoint or not
* Datos**RodMode**: How to draw the rods

## Archivos de guión

The Truss tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Truss = makeFence([baseobj])

```

Ejemplo:

```
import FreeCAD
import Draft
import Arch

p1 = FreeCAD.Vector(0,0,0)
p2 = FreeCAD.Vector(2000,0,0)
baseline = Draft.makeLine(p1,p2)
truss = Arch.makeTruss(baseline)
truss.HeightStart = 200
truss.HeightEnd = 400
# adjust other needed properties

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Truss/es&oldid=1433491>"