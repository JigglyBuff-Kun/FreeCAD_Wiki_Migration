---
title: Arch Barra de Refuerzo
---
|  |
| --- |
| Arch Rebar |
| Ubicación en el Menú |
| Arch → Rebar |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| R B |
| Introducido en versión |
| - |
| Ver también |
| [Arch Structure](/Arch_Structure/es "Arch Structure/es") |
|  |

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Rebar |
| Ubicación en el Menú |
| Arch → Rebar |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| R B |
| Introducido en versión |
| - |
| Ver también |
| [Arch Structure](/Arch_Structure/es "Arch Structure/es") |
|  |

## Descripción

La herramienta Rebar le permite colocar [reinforcing bars](http://en.wikipedia.org/wiki/Rebar) dentro de los objetos [Arch Structure](/Arch_Structure/es "Arch Structure/es"). Los objetos de barra de refuerzo se basan en perfiles 2D como [sketches](/Sketcher_Workbench/es "Sketcher Workbench/es") o [draft objects](/Draft_Workbench/es "Draft Workbench/es"), que deben dibujarse en una cara de un objeto de estructura. A continuación, puede ajustar la configuración de las barras de refuerzo, como el número y el diámetro de las barras, o la distancia de desplazamiento entre los dos extremos del elemento estructural.

Rebar objects are based on 2D profiles such as [Draft objects](/Draft_Workbench "Draft Workbench") and [Sketches](/Sketcher_Workbench "Sketcher Workbench"), that must be drawn on a face of the structural object. After creation you can adjust the properties of the rebar, including the number and diameter of the bars, and the offset distance between them and the faces of the structural element.

![](/images/Arch_Rebar_example.jpg)

La imagen de arriba muestra un objeto estructural, donde se dibujan dos bocetos, que definen dos diagramas de barras. Estos dos bocetos se convierten en objetos de barras de refuerzo.

## Como utilizar

1. Crear un elemento [structure](/Arch_Structure/es "Arch Structure/es")
2. Cambiar a [Sketcher Workbench](/Sketcher_Workbench/es "Sketcher Workbench/es")
3. Seleccione una cara del elemento estructural
4. Presione el botón ![](/images/Sketcher_NewSketch.png) [New Sketch](/Sketcher_NewSketch/es "Sketcher NewSketch/es") para comenzar un nuevo boceto en la cara seleccionada
5. Dibuja el diagrama de tu barra
6. Presione el botón ![](/images/Sketcher_LeaveSketch.png) [Leave Sketch](/Sketcher_LeaveSketch/es "Sketcher LeaveSketch/es") para finalizar
7. Vuelve al [Arch Workbench](/Arch_Workbench/es "Arch Workbench/es")
8. Seleccione el boceto que acaba de dibujar
9. Presione el botón ![](/images/Arch_Rebar.png) Arch Rebar, o presione R luego la tecla B
10. Ajuste las propiedades deseadas (es posible que su barra de refuerzo no aparezca inmediatamente, si algunas de las propiedades crean una situación imposible, como que el diámetro de la barra sea 0 o que las distancias de compensación sean mayores que la longitud del elemento estructural)

Although normally a rebar is used inside an Arch Structure, since FreeCAD 0.19 the rebar can be created outside of any host object. To host a rebar inside an object, you just need to set its Datos**Host**.

## Opciones

* Las barras de refuerzo comparten las propiedades y los comportamientos comunes de todos [Arch Components](/Arch_Component/es "Arch Component/es")
* El valor de redondeo se expresa en veces el diámetro. Si su barra tiene un diámetro de 5 mm, un valor de redondeo de 3 creará redondeo en ángulos con un radio de 15 mm.
* Los valores predeterminados para nuevas barras de refuerzo se pueden configurar en la configuración de preferencias de Arch.
* Si no se especifica un vector de dirección, la dirección y la distancia a lo largo de las cuales se extenderán las barras se calcula automáticamente desde el objeto estructural del anfitrión, tomando la dirección normal del boceto base y tomando su intersección con el objeto estructural. Si especifica un vector de dirección, también se tendrá en cuenta la longitud de ese vector.
* El valor de espaciado se calcula a partir de la cantidad actual de barras, y representa la distancia entre los ejes de cada barra. Por lo tanto, debe restar el diámetro de la barra para obtener el tamaño del espacio libre entre barras.

## Propiedades

An Arch Rebar object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

* DATOS**Amount**: La cantidad de barras.
* DATOS**Diameter**: El diámetro de las barras.
* DATOS**Direction**: La dirección (y longitud) a lo largo de la cual las barras deben extenderse. Si el valor es (0,0,0), la dirección se calcula automáticamente desde el objeto estructural del host.
* DATOS**Offset Start**: La distancia de desplazamiento entre el borde del objeto estructural y la primera barra.
* DATOS**Offset End**: La distancia de desplazamiento entre el borde del objeto estructural y la última barra.
* DATOS**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times the diameter.
* DATOS**Spacing**: La distancia entre los ejes de cada barra.

## Programación

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

La herramienta Refuerzo de Barras puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de python utilizando la siguiente función:

```
Rebar = makeRebar(baseobj=None, sketch=None, diameter=None, amount=1, offset=None, name="Rebar")

```

* Agrega un objeto de barra de refuerzo al objeto estructural dado, usando el boceto dado como perfil.
* Si no se proporciona ningún diámetro, cantidad o valor de compensación, se aplican los valores predeterminados de las configuraciones de preferencias de Arch.
* Devuelve el nuevo objeto Rebar.

Ejemplo:

```
import FreeCAD, Arch, Part

Structure = Arch.makeStructure(None, length=1000, width=1000, height=3000)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

p1 = FreeCAD.Vector(-400, 400, 0)
p2 = FreeCAD.Vector(400, 400, 0)
Sketch = FreeCAD.ActiveDocument.addObject('Sketcher::SketchObject', 'Sketch')
Sketch.MapMode = "FlatFace"
Sketch.Support = [(Structure, "Face6")]
Sketch.addGeometry(Part.LineSegment(p1, p2))
FreeCAD.ActiveDocument.recompute()

Rebar = Arch.makeRebar(Structure, Sketch, diameter=80, amount=7, offset=50)
Rebar.OffsetStart = 100
Rebar.OffsetEnd = 100
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Rebar/es&oldid=1539723>"