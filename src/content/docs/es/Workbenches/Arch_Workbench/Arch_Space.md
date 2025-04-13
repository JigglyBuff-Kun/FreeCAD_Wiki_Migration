---
title: Arch Espacio
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Espacio |
| Ubicación en el Menú |
| Arch → Space |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| S P |
| Introducido en versión |
| 0.14 |
| Ver también |
| [Arch Wall/es](/Arch_Wall/es "Arch Wall/es"), [Arch Structure/es](/Arch_Structure/es "Arch Structure/es") |
|  |

## Description

## Descripción

La herramienta Espacio le permite definir un volumen vacío, ya sea basado en una forma sólida, o definiendo sus límites, o una combinación de ambos. Si se basa únicamente en los límites, el volumen se calcula comenzando desde el cuadro delimitador de todos los límites dados, y restando los espacios detrás de cada límite. El objeto espacio siempre define un volumen sólido. El área del suelo de un objeto espacio, calculado mediante la intersección de un plano horizontal en el centro de masa del volumen del espacio, también se puede visualizar, configurando el modo de visualización del objeto espacial a "detallado".

![](/images/Arch_Space_example.jpg)

*En la imagen de arriba, un objeto espacial se crea a partir de un objeto sólido existente, luego se agregan dos caras de muro como límites, y el modo de visualización se establece en "detallado" para mostrar el área del piso.*

## Utilización

1. Seleccione un objeto sólido existente o caras en objetos de contorno
2. Presione el botón  ![](/images/Arch_Space.png) [Arch Space](/Arch_Space "Arch Space"), o presione las teclas  S,  P

Once a space has been created, you can also add or remove boundaries to/from it using the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") or ![](/images/Arch_Remove.svg) [Remove](/Arch_Remove "Arch Remove") buttons in the toolbar. Alternatively, you can also do this in the Tasks panel or in the [Property editor](/Property_editor "Property editor").

As an example, to add a boundary, given a space that intersects a wall:

1. Select the wall face that intersects the space. That will be the new boundary.
2. Keeping the Ctrl key pressed, select the space.
3. Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button in the toolbar.
4. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

The same example: add a boundary, given a space that intersects a wall. This time we're using the Tasks panel:

1. Double-click the space object in the Tree View. This will activate its Tasks panel.
2. Select the wall face that intersects the space. That will be the new boundary.
3. Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button in the Tasks panel. The name of the wall face will be displayed in the "Space boundaries" section there.
4. Press the OK button in the Tasks panel.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

Yet another alternative: add a boundary, given a space that intersects a wall. This time we're using the Property editor:

1. Navigate to the Property View and locate the Datos**Boundaries** property under the "Space" group.
2. On the right hand side of the Datos**Boundaries** property, click on the ellipsis button.
3. Select the wall face that intersects the space. That will be the new boundary. The "Link" dialog will reflect your selection.
4. Press the OK button in the "Link" dialog.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

## Limitaciones

* No disponible antes de la versión 0.14 de FreeCAD
* Las propiedades de límites actualmente no se pueden editar a través de GUI
* Ver el [anuncio del foro](http://forum.freecadweb.org/viewtopic.php?f=9&t=4275)

## Propiedades

* DATOS**Base**: El objeto base, si lo hay (debe ser un sólido)
* DATOS**Boundaries**: Una lista de elementos de límite opcionales

* Vista**Text**: The text to show. Use $area, $label, $floor, $walls, $ceiling to insert the respective data
* Vista**FontName**: The name of the font
* Vista**TextColor**: The color of the text
* Vista**FontSize**: The size of the text
* Vista**FirstLine**: The size of the first line of text (multiplies the font size. 1 = same size, 2 = double size, etc..)
* Vista**LineSpacing**: The space between the lines of text
* Vista**TextPosition**: The position of the text. Leave (0,0,0) for automatic position
* Vista**TextAlign**: The justification of the text
* Vista**Decimals**: The number of decimals to use for calculated texts
* Vista**ShowUnit**: Show the unit suffix or not

## Options

* To create zones that group several spaces, use an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") and set its IFC type to "Spatial Zone".
* The Space object has the same display modes as other Arch and Part objects, with one more, called **Footprint**, that displays only the bottom face of the space.

## Scripting

## Programación

La herramienta de espacio se puede usar en scripts de Python y [macros/es](/Macros/es "Macros/es") usando la siguiente función:

```
Space = makeSpace(objects=None, baseobj=None, name="Space")

```

* Crea un objeto espacio a partir de los objetos dados.
* Los objetos pueden ser un objeto de documento, en cuyo caso se convierte en la forma básica del objeto de espacio, o una lista de objetos de selección como se devuelve por FreeCADGui.Selection.getSelectionEx(), o una lista de tuplas (object, subobjectname).
* Devuelve el objeto espacial recién creado.

Ejemplo:

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 1000
Box.Height = 1000

Space = Arch.makeSpace(Box)
Space.ViewObject.LineWidth = 2
FreeCAD.ActiveDocument.recompute()

```

Después de crear un objeto espacio, se pueden agregar caras seleccionadas con la siguiente función:

```
import FreeCAD, FreeCADGui, Draft, Arch

points = [FreeCAD.Vector(-500, 0, 0), FreeCAD.Vector(1000, 1000, 0)]
Line = Draft.makeWire(points)
Wall = Arch.makeWall(Line, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select a face of the wall
selection = FreeCADGui.Selection.getSelectionEx()
Arch.addSpaceBoundaries(Space, selection)

```

Los límites también se pueden eliminar con:

```
selection = FreeCADGui.Selection.getSelectionEx()
Arch.removeSpaceBoundaries(Space, selection)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Space/es&oldid=1559101>"