---
title: Lámina de Panel Arch
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Panel Sheet |
| Ubicación en el Menú |
| Arch → Panel tools → Panel Sheet |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| P S |
| Introducido en versión |
| - |
| Ver también |
| [Arch Panel](/Arch_Panel/es "Arch Panel/es") |
|  |

## Descripción

Esta herramienta permite construir una lámina 2D, incluyendo cualquier número de objetos [Arch Panel Cut](/Arch_Panel_Cut/es "Arch Panel Cut/es"), o cualquier otro objeto 2D como los realizados por [Draft Workbench](/Draft_Workbench/es "Draft Workbench/es") y [Sketcher Workbench](/Sketcher_Workbench/es "Sketcher Workbench/es"). La lámina del panel se hace típicamente para cortes de layout que se realizarán por una máquina CNC. Estas hojas pueden luego exportarse a un archivo [DXF](/Draft_DXF/es "Draft DXF/es").

![](/images/Arch_Wikihouse_03.jpg)

![](/images/Arch_Wikihouse_04.jpg)

*La imagen de arriba muestra cómo aparecen las láminas del panel cuando se exportan a DXF.*

## Utilización

1. Opcionalmente, seleccione uno o más objetos [Arch Panel Cut](/Arch_Panel_Cut/es "Arch Panel Cut/es") o cualquier otro objeto 2D que se encuentre en el plano XY
2. Presione el botón ![](/images/Arch_Panel_Sheet.png) Arch Panel Sheet, o presione P y luego S
3. Ajuste las propiedades deseadas

## Opciones

* Después de crear la lámina del panel, con o sin objetos secundarios, se puede agregar/eliminar cualquier otro objeto secundario a/desde la lámina del panel haciendo doble clic en ella en la vista de árbol y agregando o quitando objetos de su carpeta de grupo
* Hacer doble clic en el panel en la vista de árbol también le permite mover los objetos contenidos en esta lámina, o mover su etiqueta
* Es posible crear automáticamente paneles compuestos de más de una lámina de un material, mediante el aumento de su propiedad de láminas
* Las láminas del panel pueden mostrar un margen, que es útil para asegurarse de que siempre haya un espacio determinado entre los objetos internos y el borde de la lámina
* Cuando las láminas del Panel se exportan a DXF, los contornos, agujeros internos, etiquetas de sus hijos internos se colocan en diferentes capas, como se muestra en la imagen de arriba

## Propiedades

### Data

* DATOS**Height**: la altura de la lámina
* DATOS**Width**: el ancho de la lámina
* DATOS**Fill Ratio**: El porcentaje del área de la lámina que se llena con cortes (automático)
* DATOS**Tag Text**: el texto para mostrar
* DATOS**Tag Size**: el tamaño del texto de la etiqueta
* DATOS**Tag Position**: la posición del texto de la etiqueta. Mantener (0,0,0) para la posición central automática
* DATOS**Tag Rotation**: la rotación del texto de la etiqueta
* DATOS**Font File**: la fuente del texto de la etiqueta
* DATOS**Make Face**: si es verdadero, el panel es una Part cara, de lo contrario, una Part wire
* DATOS**Grain Direction**: Esto le permite informar la dirección principal de la fibra del panel (sentido horario, 0 ° significa arriba)
* VISTA**Margin**: un margen que se puede mostrar dentro del borde del panel
* VISTA**Show Margin**: Activa/desactiva la visualización del margen
* VISTA**Show Grain**: muestra una textura de fibra (Make Face debe establecerse en True)

### View

* Vista**Margin**: A margin that can be displayed inside the panel border
* Vista**Show Margin**: Turns the display of the margin on/off
* Vista**Show Grain**: Shows a fiber texture (Make Face must be set to True)

## Scripting

## Programación

La herramienta Hoja de panel puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de Python mediante la siguiente función:

```
Sheet = makePanelSheet(panels=[], name="PanelSheet")

```

* Creates a `Sheet` object from `panels`, which is a list of [Arch Panel](/Arch_Panel "Arch Panel") objects.

Ejemplo:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(500, 200)
Polygon = Draft.makePolygon(5, 750)

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2000, 400, 0)
p3 = FreeCAD.Vector(1250, 800, 0)
Wire = Draft.makeWire([p1, p2, p3], closed=True)

Panel1 = Arch.makePanel(Rect, thickness=36)
Panel2 = Arch.makePanel(Polygon, thickness=36)
Panel3 = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

Cut1 = Arch.makePanelCut(Panel1)
Cut2 = Arch.makePanelCut(Panel2)
Cut3 = Arch.makePanelCut(Panel3)
Cut1.ViewObject.LineWidth = 3
Cut2.ViewObject.LineWidth = 3
Cut3.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

Sheet = Arch.makePanelSheet([Cut1, Cut2, Cut3])

```

## Tutoriales

* [Wikihouse porting tutorial](/Wikihouse_porting_tutorial/es "Wikihouse porting tutorial/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Sheet/es&oldid=1433146>"