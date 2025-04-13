---
title: Borrador Rebajar
---
|  |
| --- |
| Borrador Rebajar |
| Ubicación en el Menú |
| Modificación → Rebajar |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| D N |
| Introducido en versión |
| - |
| Ver también |
| [Borrador Elevar](/Draft_Upgrade/es "Draft Upgrade/es"), [Pieza Cortar](/Part_Cut/es "Part Cut/es") |
|  |

## Descripción

El ![](/images/Draft_Downgrade.svg) comando **Borrador Rebajar**  rebaja los objetos seleccionados. El resultado depende del número de objetos seleccionados y de su tipo. El comando puede, por ejemplo, deconstruir un sólido 3D en caras separadas y un hilo en aristas separadas. Si se seleccionan dos caras, se crea un objeto [Pieza Corte](/Part_Cut/es "Part Cut/es") a partir de ellas. Tenga en cuenta que no todos los objetos pueden ser rebajados. Este comando es la contraparte del comando [Borrador Elevar](/Draft_Upgrade/es "Draft Upgrade/es").

![](/images/Draft_Downgrade_example.jpg)

Dos caras superpuestas se rebajan a un objeto Pieza Corte, que se rebaja a una cara. Esa cara se rebaja a continuación a un hilo cerrado, que finalmente se rebajan a aristas separadas.

## Utilización

1. Opcionalmente selecciona uno o más objetos.
2. Hay varias vías para invocar el comando:
   * Pulsar el ![](/images/Draft_Downgrade.svg) Borrador Rebajar.
   * Seleccione la opción **Modificación → ![](/images/Draft_Downgrade.svg) Rebajar** en el menú.
   * Utilice el atajo de teclado: D y luego N.
3. Si aún no ha seleccionado un objeto: seleccione un objeto en la [Vista 3D](/3D_view/es "3D view/es").

## Guión

Ver también: [Documentación de la API autogenerada](https://freecad.github.io/SourceDoc/) y [Fundamentos de FreeCAD Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

Para rebajar objetos utilice el método `downgrade` del módulo Borrador.

```
downgrade_list = downgrade(objects, delete=False, force=None)

```

* `objects` contiene los objetos que se van a rebajar. Puede ser un solo objeto o una lista de objetos.
* Si `delete` es `True` se eliminan los objetos de origen.
* `force` fuerza una determinada forma de reducción llamando a una función interna específica. Puede ser: `"explode"`, `"shapify"`, `"subtr"`, `"splitFaces"`, `"cut2"`, `"getWire"`, `"splitWires"` o `"splitCompounds"`.
* Se devuelve `downgrade_list`. Es una lista que contiene dos listas: una lista de objetos nuevos y una lista de objetos a eliminar. Si `delete` es `True` la segunda lista está vacía.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle = Draft.make_circle(1000)
rectangle = Draft.make_rectangle(2000, 800)
doc.recompute()

add_list1, delete_list1 = Draft.upgrade([circle, rectangle], delete=True)

compound = add_list1[0]
add_list2, delete_list2 = Draft.downgrade(compound, delete=False)
face = add_list2[0]
add_list3, delete_list3 = Draft.downgrade(face, delete=False)

box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 800
box.Height = 1000

add_list4, delete_list4 = Draft.downgrade(box, delete=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Downgrade/es&oldid=1456241>"