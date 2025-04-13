---
title: Arch Equipamiento
---
|  |
| --- |
| Arch Equipment |
| Ubicación en el Menú |
| Arch → Equipment |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| E Q |
| Introducido en versión |
| - |
| Ver también |
| [3 views from mesh](/Arch_3Views/es "Arch 3Views/es") |
|  |

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Equipment |
| Menu location |
| 3D/BIM → Equipment |
| Workbenches |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| E Q |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descripción

La herramienta de equipamiento le ofrece una manera simple y conveniente de insertar elementos independientes no estructurales, como muebles, equipos hidro-sanitarios o electrodomésticos para sus proyectos. Los equipos se basan en [Part shapes](/Part_Workbench/es "Part Workbench/es"), lo que les permite beneficiarse de la solidez y las posibilidades de la geometría BRep, y generar buenas vistas cuando se representan en vistas de planos y secciones.

![](/images/Arch_equipment_example.jpg)

Furniture objects enclosed in an [Arch Equipment](/Arch_Equipment "Arch Equipment") object. The flat projections can be obtained by the [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") tool

A partir de la versión 0.17, los objetos de equipamiento también tienen una propiedad **HiRes** donde se puede conectar un objeto [Mesh](/Mesh_Workbench/es "Mesh Workbench/es"). Los objetos del equipamiento se pueden hacer para mostrar esa malla en la vista 3D en lugar de su forma, lo que permite usar cualquier objeto de malla de alta resolución, como muebles detallados que se encuentran comúnmente en los sitios web.

![](/images/Arch_equipment_mesh.jpg)

Furniture objects enclosed in an [Arch Equipment](/Arch_Equipment "Arch Equipment") object, with a high resolution mesh attached

Cuando se utiliza el exportador Arch OBJ, todos los equipos que están en el modo de visualización Mesh se exportarán como su malla en lugar de su forma.

## Como utilizar

1. Seleccione una forma de [Part](/Part_Workbench/es "Part Workbench/es"), y opcionalmente un objeto [Mesh](/Mesh_Workbench/es "Mesh Workbench/es")
2. Presione el botón ![](/images/Arch_Equipment.png) Arch Equipment, o presione E y luego Q

## Propiedades

* Los equipamientos comparten las propiedades y comportamientos comunes de todos [Arch Components](/Arch_Component/es "Arch Component/es")

* DATOS**Model**: una descripción del modelo de este equipamiento.
* DATOS**Url**: una URL de la página del producto donde se puede encontrar más información sobre este equipamiento.
* DATOS**Mesh**: una representación de [Mesh](/Mesh_Workbench/es "Mesh Workbench/es") para usar con este equipo. Cuando se establece, el modo de visualización **Mesh** está disponible.

## Programación

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

La herramienta Equipamiento puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de Python utilizando la siguiente función:

```
Equipment = makeEquipment(baseobj=None, placement=None, name="Equipment")

```

* Crea un objeto de equipo a partir de un objeto base (Malla o Pieza)
* Devuelve el nuevo objeto del equipamiento, o ninguno si la operación falló.

Ejemplo:

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 500
Box.Width = 2000
Box.Height = 600

Equip = Arch.makeEquipment(Box)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Equipment/es&oldid=1539669>"