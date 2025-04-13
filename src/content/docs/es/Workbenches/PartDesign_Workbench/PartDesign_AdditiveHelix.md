---
title: PartDesign Hélice aditiva
---
|  |
| --- |
| PartDesign Hélice aditiva |
| Ubicación en el Menú |
| PartDesign → Create an additive feature → Additive helix |
| Entornos de trabajo |
| [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.19 |
| Ver también |
| [PartDesign SubtractiveHelix](/PartDesign_SubtractiveHelix "PartDesign SubtractiveHelix") |
|  |

## Descripción

La herramienta **Hélice aditiva** crea un sólido realizando un barrido de un boceto seleccionado o de un objeto 2D a lo largo de la trayectoria de una hélice.

![](/images/PartDesign_AdditiveHelix_example_overview.png)

*El perfil (B), es extruido en forma de barrido alrededor del eje (A) para producir una hélice sólida (C)*

## Uso

1. Seleccionar el boceto que va a ser extruido a lo largo de la trayectoria de la hélice. También se puede usar una cara del sólido existente.
2. Presionar el botón ![](/images/PartDesign_AdditiveHelix.svg) PartDesign Hélice aditiva .
3. Seleccionar los parámetros de la hélice (ver la sección siguiente).
4. Inspeccionar la hélice en la ventana de vistas para asegurarse de que dichos parámetros no dan como resultado una hélice que interseccione consigo misma.
5. Confirmar con OK.

## Opciones

Cuando se crea una hélice aditiva, la caja de diálogo **Helix parameters** o parámetros de la hélice, ofrece varios parámetros para especificar la forma en que ha de realizar el boceto el barrido.

![](/images/PartDesign_AdditiveHelix_taskpanel.png)

### Axis o Eje

Esta opción especifica el eje alrededor del cual el boceto va a realizar el barrido.

* **Eje vertical del boceto**: Selecciona el eje vertical del objeto.
* **Eje horizontal del boceto**: Selecciona el eje horizontal del boceto.
* **Línea de construcción**: Selecciona una línea de construcción contenida en el boceto para ser usada como eje. La lista desplegable contendrá una entrada para cada línea de construcción existente en el boceto. La primera línea de construcción creada se llamará *Línea de construcción 1*.
* **Base (X/Y/Z) axis**: Selecciona los ejes X, Y o Z del origen del Body (cuerpo).
* **Select reference...** o Seleccionar referencia: Permite la selección en la vista 3D de una arista del Body, o de una [línea de referencia](/PartDesign_Line/es "PartDesign Line/es").

### Modo

Son opciones para controlar qué parámetros serán usados para definir la hélice. Las opciones son:

* **Pitch-Altura-Ángulo**: La hélice se definirá en función de la altura por vuelta y la altura total.
* **Pitch-Vueltas-Ángulo**: La hélice se definirá en función de la altura por vuelta y el número de vueltas.
* **Altura-Vueltas-Ángulo**: La hélice se definirá en función de la altura total y el número de vueltas.
* **Altura-Vueltas-Crecimiento** [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es"): La hélice se definirá en función de la altura total, el número de vueltas y el crecimiento del radio helical. Así, una altura de 0 da lugar a un recorrido en forma de espiral. Una altura y crecimiento de 0 da lugar a un recorrido en forma de círculo.

### Pitch

La distancia entre cada vuelta de la hélice.

### Altura

La altura de la hélice (de centro a centro).

### Vueltas

El número de vueltas en la hélice. Definido como Altura/Pitch

### Ángulo del cono

La proporción en la que el radio de la hélice se incrementa a lo largo del eje. Rango permitido: [-89°, +89°].

### Left handed o Hacia la izquierda

Si se selecciona, la dirección de giro de la hélice cambia de la dirección horaria por defecto a la dirección antihoraria.

### Reversed o Revés

Si está marcada esta casilla, la dirección del eje de la hélice es la contraria de la dirección por defecto.

### Actualizar vista

Si está marcada esta casilla, la hélice se mostrará en la vista y se actualizará automáticamente con cada cambio de parámetro.

## Preferencias

* Una hélice aditiva que no intersecte con el Body será visible en la vista preliminar si **Herramientas → Editar parámetros... → BaseApp → Preferences → Mod → PartDesign → AdditiveHelixPreview** está seleccionado como `true`. Este preferencia por defecto es `false`. [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")

## Propiedades

* DATOS**Pitch**: La distancia axial entre dos vueltas.
* DATOS**Altura**: La longitud total de la hélice (sin tener en cuenta la extensión del perfil)
* DATOS**Vueltas**: El número de vueltas (no es necesario que sea un número entero)
* DATOS**Left Handed**: La dirección de giro de la hélice. True o False.
* DATOS**Reversed**: La dirección del eje de la hélice. True o False. Ver [Reversed](#Reversed).
* DATOS**Ángulo**: La proporción en la que el radio de la hélice se incrementa a lo largo del eje. Rango permitido: [-89°, +89°].
* DATOS**Reference axis**: El eje de referencia de la hélice.
* DATOS**Mode**: El modo de definición de la hélice (pitch-altura, pitch-vueltas, vueltas-altura)
* DATOS**Outside**: No usada (Usada en la hélice sustractiva)
* DATOS**Has Been Edited**: Si está en False, la herramienta propondrá un valor inicial para el pitch basado en el perfil de la caja de abarque para evitar que la figura intersecte consigo misma.
* DATOS**Refine**: True o false. Seleccionando True, limpia el sólido de aristas residuales dejadas por las operaciones. Ver [Part RefineShape](/Part_RefineShape "Part RefineShape") para más detalles.
* DATOS**Profile**: Puede ser un boceto que contenga un contorno cerrado o una cara.
* DATOS**Midplane**: No usada.
* DATOS**Up to face**: No usada.
* DATOS**Allow multiple face**: No usada.

## Notes

* A ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") cannot be used for the profile.
* When using a ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") for the profile, selecting the binder in the [Tree view](/Tree_view "Tree view") will fail, instead the binder's face has to be selected in the [3D view](/3D_view "3D view").
* Helixes are very difficult for the underlying engine to calculate correctly because the curves involved push floating point precision to its limit. That means that performing further operations on a helix like attempting boolean operations with another object can be very sensitive to small changes. When they fail, they often break the model in surprising ways. To avoid this, you should try to make operations on a helix either clearly overlap (interfere) or clearly not overlap. Exact matches where the surface of the helix is perfectly aligned with the surface of another object are fragile. A thread around a bolt cylinder is an example of this. It may even work initially, and then break later when objects are moved slightly.

## Ejemplos

1. Figura 1: Ejemplo de hélice usando una B-spline en el boceto.
2. Figura 2: Ejemplo de hélice donde el eje de la hélice es la normal del plano del boceto, resultando una extrusión con efecto de torsión.

![](/images/PartDesign_AdditiveHelix_example_bspline.png)

Example helix using a [B-spline](/Sketcher_CreateBSpline "Sketcher CreateBSpline") in the sketch

![](/images/PartDesign_AdditiveHelix_example_twisting_pad.png)

Example helix where the helix axis is normal to the sketch plane resulting in a "Pad with twist" effect.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveHelix/es&oldid=1513012>"