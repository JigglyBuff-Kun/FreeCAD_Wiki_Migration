---
title: Arch Grilla
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Grid |
| Ubicación en el Menú |
| Arch → Axis tools → Grid |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Arch Axis/es](/Arch_Axis/es "Arch Axis/es"), [Arch AxisSystem/es](/Arch_AxisSystem/es "Arch AxisSystem/es") |
|  |

## Descripción

La herramienta Grid/Grilla le permite colocar un objeto similar a una cuadrícula en el documento. Este objeto sirve como base para construir objetos Arch que necesitan un marco regular pero complejo, como ventanas, muros cortina, rejillas de columnas, barandas, etc. El objeto Grilla se puede editar como una hoja de cálculo, donde puede agregar o eliminar columnas y filas, definir su tamaño y combinar celdas.

La grilla es un objeto 2D y, por lo tanto, puede utilizarse en cualquier lugar donde se necesite una forma 2D como [Draft](/Draft_Workbench/es "Draft Workbench/es") o [Sketch](/Sketcher_Workbench/es "Sketcher Workbench/es"), pero también puede comportarse como un [Arch AxisSystem](/Arch_AxisSystem/es "Arch AxisSystem/es"), y se usará para propagar la ubicación de otros objetos de Arch.

![](/images/Arch_Grid_example.jpg)

*La imagen de arriba muestra una grilla de columnas, un sistema de barandillas y una ventana, cada una basada en un objeto grilla.*

## Utilización

1. Presione el botón ![](/images/Arch_Grid.png) Arch Grid
2. Establezca el **Ancho** y **Altura** de la grilla en las propiedades
3. Ingrese al modo de edición haciendo doble clic en el objeto de la grilla en la vista de árbol
4. Agregar filas y columnas
5. Establezca el ancho y el alto deseados de filas y columnas haciendo doble clic en los encabezados de fila o columna

## Opciones

* Un ancho de columna o una altura de fila de 0 significa que su tamaño se adaptará automáticamente para ajustarse al ancho / alto total de la grilla
* Las celdas se pueden fusionar y no fusionar seleccionándolas y haciendo clic en el botón apropiado
* Cuando se usa como la propiedad **Eje** de otros objetos Arch, la grilla controlará el posicionamiento de estos objetos. La propiedad **Salida de puntos** define cómo se colocan los otros objetos en la grilla: en vértices, puntos medios del borde o centros de caras
* Al establecer las propiedades **Auto Height** o **Auto Width** en un valor distinto de cero, se ignora el número total de filas / columnas y sus alturas / anchuras individuales. En cambio, se crea automáticamente la cantidad máxima de columnas o filas del auto especificado ancho / alto

## Propiedades

* DATOS**Rows**: el número de filas
* DATOS**Columns**: el número de columnas
* DATOS**Row Size**: los tamaños para las filas
* DATOS**Column Size**: los tamaños de las columnas
* DATOS**Points Output**: el tipo de puntos 3D producidos por este objeto de cuadrícula
* DATOS**Width**: el ancho total de esta grilla
* DATOS**Height**: la altura total de esta grilla
* DATOS**Auto Width**: crea divisiones de columna automáticas (se establece en 0 para deshabilitar)
* DATOS**Auto Height**: crea divisiones de filas automáticas (establecido en 0 para deshabilitar)
* DATOS**Reorient**: cuando está en el modo de punto medio de borde, si esta grilla debe reorientar sus hijos a lo largo de las normales de borde o no
* DATOS**Hidden Faces**: los índices de caras para ocultar

## Scripting

## Programación

La herramienta grilla se puede usar en [macros](/Macros/es "Macros/es") y desde la consola de python mediante la siguiente función:

```
Grid = makeGrid(name="Grid")

```

* Creates a `Grid` object.

Its `Width`, `Height`, `Rows`, and `Columns` attributes can be changed directly to define the appearance of the grid.

```
import FreeCAD, Draft, Arch
Grid = Arch.makeGrid()

Grid.Width = 5000
Grid.Height = 5000
Grid.Rows = 4
Grid.Columns = 6
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = Grid
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Grid/es&oldid=1433015>"