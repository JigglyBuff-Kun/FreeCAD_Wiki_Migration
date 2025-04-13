---
title: Arch Armazón
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Frame |
| Ubicación en el Menú |
| Arch → Frame |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| F R |
| Introducido en versión |
| - |
| Ver también |
| [Arch Wall/es](/Arch_Wall/es "Arch Wall/es"), [Arch Structure/es](/Arch_Structure/es "Arch Structure/es") |
|  |

## Descripción

La herramienta armazón se usa para construir todo tipo de objetos de armazón basados en un perfil y un diseño. El perfil se extruye a lo largo de los bordes del diseño, que puede ser cualquier objeto 2D como un [sketch](/Sketcher_Workbench/es "Sketcher Workbench/es"), o un [draft object](/Draft_Workbench/es "Draft Workbench/es"). Es especialmente útil crear barandas o muros de armazón. Los objetos de armazón pueden convertirse fácilmente en objetos [wall](/Arch_Wall/es "Arch Wall/es") o [structure](/Arch_Structure/es "Arch Structure/es") .

![](/images/Arch_Frame_example.jpg)

*En la imagen de arriba, un [line](/Draft_Line/es "Draft Line/es") se ha convertido en un [array](/Draft_Array/es "Draft Array/es"), y un objeto de armazón se ha hecho usando el arreglo como layout, y un [circle](/Draft_Circle/es "Draft Circle/es") como perfil.*

## Utilización

1. Crear un layout objeto y un objeto de perfil, por ejemplo con el [Draft Workbench](/Draft_Workbench/es "Draft Workbench/es") o el [Sketcher Workbench](/Sketcher_Workbench/es "Sketcher Workbench/es")
2. Seleccione primero el objeto de layout, luego, con CTRL presionado, seleccione el objeto perfil
3. Presiona el botón ![](/images/Arch_Frame.png) Arch Frame, o presiona F y luego la tecla R

## Opciones

* Los armazones comparten las propiedades y los comportamientos comunes de todos [Arch Components](/Arch_Component/es "Arch Component/es")
* El objeto de armazón se puede colocar a cierta distancia del objeto de layout, estableciendo su propiedad de Desplazamiento/Offset
* El perfil se copiará en la base de cada borde del objeto de layout y luego se extruirá a lo largo de él. Puede controlar cómo se coloca el perfil en la base de cada borde con las propiedades Alinear y Rotación.

## Propiedades

An Arch Frame object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Component

* Datos**Base** (`Link`): The layout this frame is based on.

For the other properties in the group see [Arch Component](/Arch_Component#Properties "Arch Component").

Frame

* DATOS**Base**: el layout en el que se basa este armazón.
* DATOS**Profile**: el perfil en el que se basa este armazón.
* DATOS**Align**: Especifica si el perfil debe girarse para que su eje normal esté alineado con cada borde.
* DATOS**Offset**: una distancia opcional entre el objeto de layout y el objeto de armazón.
* DATOS**Rotation**: la rotación del perfil alrededor de su eje de extrusión.

## Scripting

## Programación

La herramienta Armazón se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python mediante la siguiente función:

```
Frame = makeFrame(baseobj, profile)

```

* Crea un objeto de armazón a partir de un Sketch base (o cualquier otro objeto que contenga wires cerrados) y un objeto de perfil (un objeto 2D extruible que contiene caras o wires cerrados)
* Devuelve el nuevo objeto de armazón, o ninguno si la operación falló.

Ejemplo:

```
import Draft, Arch

Line = Draft.makeLine(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(0, 0, 2000))
baseobj = Draft.makeArray(Line, FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(0, 1, 0), 6, 1)

profile = Draft.makeCircle(200)
Frame = Arch.makeFrame(baseobj, profile)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Frame/es&oldid=1539678>"