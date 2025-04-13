---
title: Draft Mirror/es
---
|  |
| --- |
| Draft Mirror |
| Ubicación en el Menú |
| Draft → Mirror |
| Entornos de trabajo |
| [Draft](/Draft_Workbench/es "Draft Workbench/es"), [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Draft Scale](/Draft_Scale/es "Draft Scale/es") |
|  |

## Description

## Descripción

Esta herramienta produce una copia duplicada de un objeto seleccionado, utilizando un objeto [Part Mirror](/Part_Mirror "Part Mirror"). La copia está vinculada de forma paramétrica al objeto original: si el objeto original cambia, la copia duplicada también cambia, pero se mantiene reflejada.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Mirror_example.jpg)

![](/images/Draft_Mirror_example.jpg)

## Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Comment utiliser

1. Sélectionnez les objets que vous souhaitez mettre en miroir
2. Appuyez sur le bouton  ![](/images/Draft_Mirror.png) [Draft Mirror](/Draft_Mirror "Draft Mirror").
3. Cliquez sur le premier point de la ligne miroir sur la vue 3D ou tapez une coordonnée
4. Cliquez sur l'autre point de la ligne miroir de la vue 3D ou tapez une coordonnée

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

## Opciones

* Después de la creación del espejo, su enlace con el objeto original se puede eliminar con la herramienta  [Part Simple Copy](/Part_SimpleCopy "Part SimpleCopy").
* El espejo de un objeto Draft también se puede convertir en un Draft Wire, usando [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") luego [Draft Upgrade](/Draft_Upgrade "Draft Upgrade").

## Notes

* Mirrored copies of [Draft Lines](/Draft_Line "Draft Line"), [Draft Wires](/Draft_Wire "Draft Wire"), [Draft Arcs](/Draft_Arc "Draft Arc") and [Draft Circles](/Draft_Circle "Draft Circle") can be turned into independent editable Draft objects by using [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") and then [Draft Upgrade](/Draft_Upgrade "Draft Upgrade").
* The [Part SimpleCopy](/Part_SimpleCopy "Part SimpleCopy") command can be used to create a copy of a mirrored object that is not linked to its source object.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A [Part Mirror](/Part_Mirror "Part Mirror") object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Datos**Source** (`Link`): specifies the object that is mirrored.

Plane

## Propiedades

* Datos **Base**: El punto base del plano espejo
* Datos **Normal**: la dirección normal del plano reflejado

## Scripting

## Programación

La herramienta de clonación se puede usar en [macros](/Macros "Macros") y desde la consola de python usando la siguiente función:

To mirror objects use the `mirror` method of the Draft module.

```
mirrored_list = mirror(objlist, p1, p2)

```

* Hace espejo (s) del objeto (s) dado a través de un plano definido por una línea de p1 a p2, y paralelo a la vista actual
* El resultado es un objeto [Part Mirror](/Part_Mirror "Part Mirror")
* Si el objeto original cambia, el objeto final también cambia pero se mantiene reflejado

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(FreeCAD.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

p1 = App.Vector(2000, -1000, 0)
p2 = App.Vector(2000, 1000, 0)

line1 = Draft.make_line(p1, p2)
mirrored1 = Draft.mirror(polygon1, p1, p2)

Line2 = Draft.make_line(-p1, -p2)
mirrored2 = Draft.mirror([polygon1, polygon2], -p1, -p2)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Mirror/es&oldid=1456348>"