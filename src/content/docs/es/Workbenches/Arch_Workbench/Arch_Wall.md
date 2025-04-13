---
title: Arch Muro
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arquitectura Muro |
| Ubicación en el Menú |
| Arquitectura → Muro |
| Entornos de trabajo |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| W A |
| Introducido en versión |
| - |
| Ver también |
| [Arquitectura Estructura](/Arch_Structure/es "Arch Structure/es") |
|  |

## Descripción

Esta herramienta construye un objeto Muro desde cero o sobre cualquier otro objeto basado en el [forma](/Part_Workbench/es "Part Workbench/es") o en el [malla](/Mesh_Workbench/es "Mesh Workbench/es"). Un muro puede construirse sin ningún objeto base, en cuyo caso se comporta como un volumen cúbico, utilizando las propiedades de longitud, anchura y altura. Cuando se construye sobre una forma existente, un muro puede estar basado en:

* Un **objeto 2D lineal**, como líneas, hilos, arcos o bocetos, en cuyo caso puede cambiar el grosor, la alineación (derecha, izquierda o centrada) y la altura. La propiedad de longitud no tiene efecto.
* Una **cara plana**, en cuyo caso sólo puede cambiar la altura. Las propiedades de longitud y anchura no tienen ningún efecto. Sin embargo, si la cara base es vertical, el muro utilizará la propiedad de anchura en lugar de la de altura, lo que te permitirá construir muros a partir de objetos espaciales o estudios de masas.
* Un **sólido**, en cuyo caso las propiedades de longitud, anchura y altura no tienen ningún efecto. El muro simplemente utiliza el sólido subyacente como su forma.
* Una **malla'**, en cuyo caso la malla subyacente debe ser un sólido cerrado y múltiple.

![](/images/Arch_Wall_example.jpg)

Muros construidos a partir de una línea, un cable, una cara, un sólido y un boceto

Los muros también pueden tener adiciones o sustracciones. Las adiciones son otros objetos cuyas formas se unen en la forma de este Muro, mientras que las sustracciones se restan. Las adiciones y sustracciones se pueden añadir con las herramientas [Arco Añadir](/Arch_Add "Arch Add") y [Arco Quitar](/Arch_Remove "Arch Remove"). Las adiciones y sustracciones no influyen en los parámetros de los muros, como la altura y la anchura, que aún pueden modificarse. Los muros también pueden tener su altura automática, si están incluidos en un objeto de nivel superior como [floors](/Arch_Floor "Arch Floor"). La altura debe mantenerse en 0, entonces el muro adoptará la altura especificada en el objeto padre.

Cuando varios muros deberían intersecar, tienes que ubicarlos en un [piso](/Arch_Floor/es "Arch Floor/es") para tener su geometría intersecada.

## Utilización

### Dibujar un muro desde cero

1. Pulse el ![](/images/Arch_Wall.svg) Muro de Arco, o pulse las teclas W y luego A.
2. Haga clic en un primer punto en la vista 3D, o escriba una coordenada
3. Haz clic en un segundo punto en la vista 3D, o escribe una coordenada

### Dibujar un muro sobre los objetos seleccionados

1. Selecciona uno o más objetos de geometría base (objeto de borrador, croquis, etc.)
2. Pulse el botón ![](/images/Arch_Wall.svg) Arquitectura Muro, o pulse las teclas W y luego A.
3. Ajuste las propiedades necesarias, como la altura o la anchura.

## Opciones

* Los muros comparten las propiedades y comportamientos comunes de todos los [Arquitectura Componentes](/Arch_Component/es "Arch Component/es")
* La altura, ancho y alineación de un muro se pueden definir mientras se dibuja, por medio del panel de tareas
* Cuando se ajusta un muro a otro ya existente, ambos se unen en uno. El modo en que dos muros se unen depende de sus propiedades: Si tienen el mismo ancho, altura y alineación, el muro resultante será un objeto basado en un croquis compuesto por varios segmentos. En otro caso, el segundo muro se añadirá al primero como una adicción.
* Presiona X, Y o Z después del primer punto para restringir el segundo punto a un eje dado.
* Para introducir coordenadas manualmente, simplemente introduce los números y presiona Enter entre cada componente X, Y y Z.
* Presiona R o activa la casilla de selección para activar / desactivar el botón **Relativas**. Si el modo Relativas está activado, las coordenadas del segundo punto serán relativas al primero. Si no es así, serán absolutas, indicadas a partir del origen de coordenadas (0,0,0).
* Presiona Ctrl mientras dibujas para forzar el [ajuste](/Draft_Snap/es "Draft Snap/es") de tu punto a la posición de ajuste más cercana, independientemente de su distancia.
* Presiona Shift mientras dibujas para [restringir](/Draft_Constrain/es "Draft Constrain/es") tu segundo punto horizontal o verticalmente en relación al primero.
* Presiona Esc o el botón **Cancel** para cancelar el comando actual.
* Haciendo doble clic en el muro en la vista en árbol después de que sea creado te permitirá entrar en modo de edición y acceder y modificar sus adicciones y substracciones
* Los muros de múltiples capas se pueden crear fácilmente construyendo varias paredes desde la misma línea de base. Al establecer su propiedad Alinear a la izquierda o a la derecha, y al especificar un valor de Desplazamiento, puede construir efectivamente varias capas de muro. Al colocar una ventana en dicha capa de pared se propagará la apertura a las otras capas de la pared en función de la misma línea base.
* Los Muros también puede hacer uso de [Multimateriales](/Arch_MultiMaterial/es "Arch MultiMaterial/es"). Cuando se utiliza un material múltiple, la pared se convertirá en multicapa, utilizando los espesores especificados por el material múltiple. Cualquier capa con un espesor de cero tendrá su espesor definido automáticamente por el espacio restante definido por el valor de Ancho del muro, después de restar las otras capas.
* Los muros se pueden mostrar bloques, en lugar de un solo sólido, al activar su propiedad Datos**Make Blocks** . El tamaño y el desplazamiento de los bloques se pueden configurar con diferentes propiedades, y la cantidad de bloques se calcula automáticamente. [introducido en la versión 0.18](/Release_notes_0.18/es "Release notes 0.18/es")

## Ajuste

El ajuste funciona un poco diferente con los muros de Arquitectura que con otros objetos de Arquitectura y Borrador. Si un muro tiene un objeto base, el ajuste se anclará al objeto base, en lugar de a la geometría del muro, lo que permite alinear fácilmente los muros por su línea base. Sin embargo, si quiere ajustarse específicamente a la geometría del muro, pulsando Ctrl cambiará el ajuste al objeto muro.

![](/images/Arch_wall_snap.jpg)

Segunda muro que se ajuste perpendicularmente a la primera

## Propiedades

An Arch Wall object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Blocks

* DATOS**Make Blocks**: Habilita esto para hacer que el muro genere bloques
* DATOS**Block Length**: La longitud de cada bloque
* DATOS**Block Height**: La altura de cada bloque
* DATOS**Offset First**: El desplazamiento horizontal de la primera línea de bloques
* DATOS**Offset Second**: El desplazamiento horizontal de la segunda línea de bloques
* DATOS**Joint**: El tamaño de las juntas entre cada bloque
* DATOS**Count Entire**: La cantidad de bloques enteros (solo lectura)
* DATOS**Count Broken**: La cantidad de bloques rotos (solo lectura)

Component

See [Arch Component](/Arch_Component#Properties "Arch Component").

IFC

See [Arch Component](/Arch_Component#Properties "Arch Component").

IFC Attributes

See [Arch Component](/Arch_Component#Properties "Arch Component").

Wall

:   ![](/images/Sketch_vs_Wall.jpg)

Los objetos de muro heredan las propiedades de los objetos [Pieza](/Part_Workbench/es "Part Workbench/es") y también tienen las siguientes propiedades adicionales:

* DATOS**Align**: La alineación del muro en su línea base: izquierda, derecha o centro
* DATOS**Base**: El objeto base sobre el que está construido este muro
* DATOS**Face**: El índice de la cara desde el objeto base a usar. Si el valor no está establecido o es 0, se usa el objeto completo
* DATOS**Force Wire**: Si es verdadero, y el muro se basa en una cara, solo se usa el borde de la cara, lo que da como resultado una pared que bordea la cara
* DATOS**Length**: La longitud del muro (no se usa cuando el muro está basada en un objeto)
* DATOS**Width**: El ancho del muro (no se usa cuando el muro se basa en una cara)
* DATOS**Height**: La altura del muro (no se usa cuando el muro está basado en un sólido). Si no se da altura, y el muro está dentro de un objeto [floor](/Arch_Floor/es "Arch Floor/es") con su altura definida, la pared tomará automáticamente el valor de la altura del piso/floor.
* DATOS**Normal**: Una dirección de extrusión para el muro. Si se establece en (0,0,0), la dirección de extrusión es automática.
* DATOS**Offset**: Esto especifica la distancia entre el muro y su línea base. Funciona solo si la propiedad Align está configurada a Derecha o Izquierda.

## Scripting

## Guión

*Ver también:* [Borrador API](/index.php?title=Arch_API/es&action=edit&redlink=1 "Arch API/es (page does not exist)") y [Fundamentos de Guión FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

La herramienta Wall se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de [Python](/Python/es "Python/es") utilizando la siguiente función:

```
Wall = makeWall(baseobj=None, length=None, width=None, height=None, align="Center", face=None, name="Wall")

```

* Crea un objeto `Wall` a partir del `baseobj` dado, que puede ser un [Objeto borrador](/Draft_Workbench "Draft Workbench"), un [Sketch](/Sketcher_Workbench "Sketcher Workbench"), una cara o un sólido.
  + Si no se da `baseobj`, puedes proporcionar los valores numéricos para el `length`, `width` (grosor), y `height`.
  + Si se da, `face` puede usarse para dar el índice de una cara del objeto subyacente, para construir este muro, en lugar de usar todo el objeto.
* `align` puede ser `"Center"`, `"Left"` o `"Right"`.
* Devuelve `None` si la operación falla.

Ejemplo:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
Draft.move(Wall2, FreeCAD.Vector(0, -1000, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Wall/es&oldid=1548507>"