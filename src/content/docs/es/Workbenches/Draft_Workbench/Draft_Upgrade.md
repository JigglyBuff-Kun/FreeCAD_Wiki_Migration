---
title: Borrador Elevar
---
|  |
| --- |
| Borrador Elevar |
| Ubicación en el Menú |
| Modificación → Elevar |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| U P |
| Introducido en versión |
| - |
| Ver también |
| [Borrador Rebajar](/Draft_Downgrade/es "Draft Downgrade/es") |
|  |

## Descripción

El ![](/images/Draft_Upgrade.svg) comando **Borrador Elevar** eleva objetos 2D seleccionados. El resultado depende del número de objetos seleccionados y de su tipo. El comando puede, por ejemplo, fusionar elementos y crear caras. Vale la pena intentar elevar una selección varias veces para ver si se puede obtener un mejor resultado. Vea el ejemplo de la imagen. Tenga en cuenta que no todos los objetos pueden ser elevados. Este comando es la contraparte del comando [Borrador Rebajar](/Draft_Downgrade/es "Draft Downgrade/es").

![](/images/Draft_Upgrade_example.jpg)

Un hilo abierto no editable se elevar en un hilo cerrado y luego en una cara. Un hilo cuadrado cerrado no editable también se elevar en una cara. Las dos caras se actualizan para crear un compuesto, que finalmente se elevado a un único borrador de hilo editable.

## Utilización

1. Opcionalmente selecciona uno o más objetos.
2. Hay varias vías para invocar el comando:
   * Pulsar el ![](/images/Draft_Upgrade.svg) Borrador Elevar.
   * Seleccione la opción **Modification → ![](/images/Draft_Upgrade.svg) Elevar** en el menú.
   * Utilice el atajo de teclado: U y luego P.
3. Si aún no ha seleccionado un objeto: seleccione un objeto en la [Vista 3D](/3D_view/es "3D view/es").

## Notas

* [Líneas de Borrador](/Draft_Line/es "Draft Line/es") y [Hilos de Borrador](/Draft_Wire/es "Draft Wire/es") se pueden unir con este comando, pero también con el comando [Unir Borrador](/index.php?title=Draft_Join/es&action=edit&redlink=1 "Draft Join/es (page does not exist)") o el comando [Hilo de Borrador](/Draft_Wire/es "Draft Wire/es").

## Guión

Ver también: [Documentación de la API autogenerada](https://freecad.github.io/SourceDoc/) y [Fundamentos de FreeCAD Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

Para elevar objetos utilice el método `upgrade` del módulo Borrador.

```
upgrade_list = upgrade(objects, delete=False, force=None)

```

* `objects` contiene los objetos que se van a elevar. Puede ser un solo objeto o una lista de objetos.
* Si `delete` es `True` se borran los objetos de origen.
* `force` fuerza una determinada forma de elevación llamando a una función interna específica. Puede ser: `"makeCompound"`, `"closeGroupWires"`, `"makeSolid"`, `"closeWire"`, `"turnToParts"`, `"makeFusion"`, `"makeShell"`, `"makeFaces"`, `"draftify"`, `"joinFaces"`, `"makeSketchFace"`, `"makeWires"` o `"turnToLine"`.
* Se devuelve `upgrade_list`. Es una lista que contiene dos listas: una lista de objetos nuevos y una lista de objetos a eliminar. Si `delete` es `True` la segunda lista está vacía.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle = Draft.make_circle(1000)
rectangle = Draft.make_rectangle(2000, 800)
doc.recompute()

add_list1, delete_list1 = Draft.upgrade([circle, rectangle], delete=False)

line1 = Draft.make_line(App.Vector(2000, 0, 0), App.Vector(2500, 1500, 0))
line2 = Draft.make_line(App.Vector(2500, 1500, 0), App.Vector(3000, -1000, 0))
doc.recompute()

add_list2, delete_list2 = Draft.upgrade([line1, line2], delete=False)

simple_wire = add_list2[0]
add_list3, delete_list3 = Draft.upgrade(simple_wire, delete=False)

closed_wire = add_list3[0]
add_list4, delete_list4 = Draft.upgrade(closed_wire, delete=False)

face = add_list4[0]
add_list5, delete_list5 = Draft.upgrade(face, delete=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Upgrade/es&oldid=1456802>"