---
title: Arch Ejes
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Ejes de arquitectura |
| Ubicación en el Menú |
| Arquitectura → Ejes |
| Entornos de trabajo |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| A X |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

La herramienta Ejes te permite situar un sistema de ejes en el documento actual. La distancia y ángulo entre ejes es personalizable, así como el estilo de numeración. Los ejes sirven proncipalmente como referencias a las que ajustar objetos, pero se pueden utilizar en conjunto con [estructuras](/Arch_Structure/es "Arch Structure/es") para crear matrices paramétricas de vigas o columnas.

![](/images/Arch_Axis_example.jpg)

La imagen de arriba muestra dos objetos de eje diferentes posicionados perpendicularmente entre sí

## Utilización

1. Presiona el botón ![](/images/Arch_Axis.png) Arch Axis, o pulsa las teclas A y X
2. [Mover](/Draft_Move/es "Draft Move/es")/[Rotar](/Draft_Rotate/es "Draft Rotate/es") el sistema de ejes a la posición deseada
3. Entrar en modo de edición haciendo doble clic en el sistema de ejes en la vista de árbol para ajustar sus parámetros como el número de ejes, distancias y ángulos entre ejes.

## Opciones

* Cada eje en la sucesión tiene su propia distancia y ángulo en relación con el eje previo. Esto permite crear sistemas muy complejos como sistemas no ortogonales, sistemas polares o culquier tipo de sistemas no uniformes.
* Hacer doble clic en el eje en la vista en árbol permite editar las distancias, los ángulos y las etiquetas de cada eje
* La longitud de los ejes, el tamaño de los globos y los estilos de numeración se pueden personalizar directamente por medio de las propiedades de los sistemas de ejes
* Cada eje también puede mostrar una etiqueta, también editable a través del diálogo del panel de tareas

## Propiedades

* DATOS**Length**: La longitud de los ejes
* VISTA**Bubble Size**: El tamaño de los globos de los ejes
* VISTA**Numeration style**: Cómo se numeran los ejes: 1,2,3, A,B,C, etc...
* VISTA**Bubble Position**: Donde la burbuja se coloca en el eje: En el punto de inicio, punto final, ambos o ninguno.
* VISTA**Font Name**: Una fuente para dibujar el número de burbuja y/o las etiquetas
* VISTA**Font Size**: El tamaño del texto de la etiqueta solamente (el texto de la burbuja está controlado por el tamaño de la burbuja)
* VISTA**Show Labels**: Activa/desactiva la visualización de los textos de las etiquetas

## Use as section mark

By setting the **Bubble Position** property to **Arrow left/right** or **Bar left/right**, the axis will display a filled arrow or bar instead of the bubble, so it can be used as a section mark. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Scripting

## Programación

La herramienta Ejes se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola por medio de las siguientes funciones:

```
Axes = makeAxis(num=5, size=1000, name="Axes")

```

:   crea un sistema de ejes basado en el número dado de ejes y distancia de intervalo

Ejemplo:

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Axis/es&oldid=1447113>"