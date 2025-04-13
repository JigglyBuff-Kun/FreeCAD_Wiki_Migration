---
title: Arch Corte de Panel
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Corte de Panel |
| Ubicación en el Menú |
| Arch → Panel Tools → Panel Cut |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| P C |
| Introducido en versión |
| - |
| Ver también |
| [Arch Panel](/Arch_Panel/es "Arch Panel/es"), [Arch Panel Sheet/es](/Arch_Panel_Sheet/es "Arch Panel Sheet/es"), [Arch Nest/es](/Arch_Nest/es "Arch Nest/es"), [Path Workbench/es](/Path_Workbench/es "Path Workbench/es") |
|  |

## Descripción

Esta herramienta crea, en el documento 3D, una vista 2D plana de un [Arch Panel](/Arch_Panel/es "Arch Panel/es"), que se incluirá en una [Arch Panel Sheet](/Arch_Panel_Sheet/es "Arch Panel Sheet/es") o se exportará directamente a [DXF](/Draft_DXF/es "Draft DXF/es").

![](/images/Arch_Wikihouse_02.jpg)

## Como utilizar

1. Seleccione uno o más objetos [Arch Panel](/Arch_Panel/es "Arch Panel/es")
2. Presione el botón ![](/images/Arch_Panel_Cut.png) Arch Panel Cut, o presione P luego la tecla C
3. Ajuste las propiedades deseadas

## Opciones

* Si el panel no es plano (corrugado, por ejemplo), el relieve no aparecerá en el corte del panel. Esta herramienta es útil principalmente para paneles planos
* El corte del panel puede mostrar una etiqueta. Esta etiqueta puede ser una línea de texto personalizada o puede mostrar automáticamente la etiqueta, la etiqueta o la descripción de su panel vinculado.
* Para ser útil en el mecanizado CNC, la etiqueta debe escribirse con una fuente adhesiva, donde las letras son polilíneas simples que la máquina puede seguir fácilmente. Al momento de la creación, el objeto Corte de Panel utilizará automáticamente la fuente especificada en Editar → Preferencias → Borrador → Textos y dimensiones → Fuente ShapeString
* Al hacer doble clic en el corte del panel en la vista de árbol después de haber sido creado, puede ingresar al modo de edición y modificar la posición de la etiqueta.
* Cuando necesite diseñar diferentes Cortes de panel juntos, los Cortes de panel pueden mostrar un margen, que es útil para asegurarse de que siempre haya un cierto espacio entre un corte y otro.

## Propiedades

### Data

* DATOS**Source**: el objeto [Arch Panel](/Arch_Panel/es "Arch Panel/es") mostrado por este corte
* DATOS**Tag Text**: el texto para mostrar. Puede ser %tag%, %label% o %description% para mostrar la etiqueta o etiqueta del panel
* DATOS**Tag Size**: el tamaño del texto de la etiqueta
* DATOS**Tag Position**: la posición del texto de la etiqueta. Mantener (0,0,0) para la posición central automática
* DATOS**Tag Rotation**: la rotación del texto de la etiqueta
* DATOS**Font File**: la fuente del texto de la etiqueta
* VISTA**Margin**: un margen que se puede mostrar fuera de la forma de corte del panel
* VISTA**Show Margin**: Activa/desactiva la visualización del margen
* DATOS**Make Face**: si es verdadero, el panel es una cara de la pieza, de lo contrario, una Part Wire

### View

* Vista**Margin**: A margin that can be displayed outside the panel cut shape
* Vista**Show Margin**: Turns the display of the margin on/off

## Scripting

## Programación

La herramienta Panel puede usarse en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando la siguiente función:

```
View = makePanelCut(panel, name="PanelView")

```

* Creates a `View` object (2D projection) from the existing `panel`.

Ejemplo:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(500, 0, 0)
p3 = FreeCAD.Vector(500, 50, 0)
p4 = FreeCAD.Vector(550, 50, 0)
p5 = FreeCAD.Vector(600, 0, 0)
p6 = FreeCAD.Vector(1000, 0, 0)
p7 = FreeCAD.Vector(1000, 400, 0)
p8 = FreeCAD.Vector(600, 400, 0)
p9 = FreeCAD.Vector(600, 350, 0)
p10 = FreeCAD.Vector(550, 350, 0)
p11 = FreeCAD.Vector(500, 400, 0)
p12 = FreeCAD.Vector(0, 400, 0)

Wire = Draft.makeWire([p1, p2, p3, p4, p5, p6,
                       p7, p8, p8, p9, p10, p11, p12], closed=True)
Panel = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

View = Arch.makePanelCut(Panel)
View.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

```

## Tutoriales

* [Wikihouse porting tutorial](/Wikihouse_porting_tutorial/es "Wikihouse porting tutorial/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Cut/es&oldid=1433147>"