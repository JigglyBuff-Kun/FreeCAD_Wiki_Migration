---
title: Part y PartDesign
---
## Introducción

Ha habido muchas discusiones a lo largo de los años sobre las diferencias y ramificaciones del uso de los bancos de trabajo ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/es "Part Workbench/es") y ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") .

Es una buena idea utilizar uno o el otro hasta que el usuario se sienta cómodo con uno, y luego aprender el otro. También es recomendado normalmente que los nuevos usuarios no los mezclen hasta que comprendan las ramificaciones de hacerlo.

Vamos a hablar de esas ramificaciones.

## Conceptos del banco de trabajo Part

El banco de trabajo Part es esencialmente un [Estilo de modelado CSG](/Constructive_solid_geometry/es "Constructive solid geometry/es"). El usuario combina varias primitivas para finalizar con una representación de la forma deseada. De hecho, el banco de trabajo Part va un paso más allá de sólo primitivas y permite al usuario realizar una operación de boceto+extrusión (o boceto+revolución, interpolación de secciones, barrido ...) para crear también formas aleatorias.
Cuando cada primitiva o forma es creada, no tiene relación con otros objetos creados (excepto los bocetos y sus adjuntos), siendo un sólido único e independiente.

![](/images/Part_CSG_Prims.png)

Sólidos independientes

Esta condición permanece así hasta que el usuario utiliza alguna operación para combinarlos (normalmente una operación booleana que los sume o los reste).
Cada sólido inicial permanece accesible por separado y la operación crea un nuevo objeto.

El resultado es, por una parte, un sólido único e independiente y por otra parte, la combinación de varios objetos.

## Conceptos del banco de trabajo PartDesign

En el banco de trabajo PartDesign el objeto Body (cuerpo) es contruído directamente como un sólido acumulativo único e independiente.

El primer paso en un Body debe ser un bloque de material, bien desde una primitiva aditiva o una extrusión de un boceto, o bien una forma importada (llamada entonces Característica Base)

Este bloque de material inicial será cambiado secuencialmente hasta que se obtenga la forma final deseada (sólido).

Es acumulativo en el sentido de que cada operación añade o resta material.

Por defecto, la "punta" del body (cuerpo) - a menos que haya un cambio voluntario en la visualización de una operación en particular - es la última operación realizada sobre el body.
Este es el actual y visible estado del body, listo para ser cambiado de nuevo por una nueva operación.

Ninguna función bajo el body (cuerpo) representa la forma acumulativa del sólido desde la primera operación a la operación considerada.

Por tanto, **para obtener el sólido completo**, por un lado la operación de "punta" debe ser el último estado de la construcción de este sólido, y por el otro lado, **es el body (cuerpo) el que debe ser seleccionado** y no un estado de su construcción.

Esto hará posible, en el caso de una modificación, **tener siempre la última versión del sólido representado.**

**Nota y añadidos :**
A cada etapa de la construcción, la última función usada es la "Punta", la cual puede ser definida también como "estado activo en la construcción del objeto" o "estado precedente a la siguiente acción en la construcción del objeto".
Cuando el diseño del objeto está completo, la Punta es naturalmente el último estado de operación de la construcción.
Pero si se desea, en caso de olvido, cualquier operación de la construcción puede ser declarada provisionalmente como Punta, convirtiéndose entonces en el paso precedente a la siguiente acción en la construcción del objeto, lo que quiere decir que una nueva operación u operaciones pueden ser insertadas en cualquier sitio de la construcción, **con la condición de no crear ninguna incompatibilidad con lo siguiente**.

Cuando todo esté finalizado, se tendrá que volver a declarar la última operación como Punta, la cual corresponde al objeto terminado.

![](/images/Part_Design_Cumulativ.png)

Sólido de Body acumulativo

Esta imagen muestra un Body (cuerpo). Es un sólido acumulativo que consiste en un boceto extruído y una primitiva de un cono. Este es un único sólido.

Si la Punta es **Pad**, la extrusión puede existir por separado, pero si la Punta es **Cono**, el cono no puede existir por separado (Punta en cono = extrusión + cono).

(Otra cosa mencionada a menudo es que un Body (cuerpo) ***DEBE*** ser un sólido único contiguo. Esto quiere decir que toda geometría creada por una operación en el Body *debe* tocar su adyacente.)

## Ramificaciones

Aunque no es recomendable para los principiantes, es posible combinar herramientas de los bancos de trabajo Part y PartDesign, siempre y cuando se sepa lo que se está haciendo. Por ejemplo:

La gente se queda atascada cuando intenta usar alguna operación dentro del Body (en vez de con el Body en sí mismo) como una selección de una operación booleana del banco de trabajo Part. Esto es un problema, porque la operación seleccionada no representa **EL** sólido completo.

En cierto modo, desde el punto de vista del banco de trabajo Part, el Body (cuerpo) representa otra primitiva. Así pues, usar un Body (recuerde que es un sustituto para la Punta) y un objeto del banco de trabajo Part para realizar una operación booleana es válido. Pero el objeto resultante es un objeto del banco de trabajo Part; y por tanto, las herramientas del banco de trabajo PartDesign no pueden volver a ser utilizadas.

E incluso puede ser aún más complicado. Si crea un nuevo Body y arrastra el resultado de la operación previa dentro del mismo, un objeto Base es creado. Posteriormente se puede salir y usar las herramientas del banco de trabajo PartDesign sobre él.

## Advertencias

Hay una advertencia sobre la Punta y su representación de un sólido único en el Body (cuerpo). *Si* la punta es una operación sustractiva y es usada en una operación acumulativa en forma de pila, por ejemplo una Simetría, dicha simetría es operada sobre el objeto inferior de la pila (un vaciado, por ejemplo). Así pues, la simetría no se realiza sobre el sólido acumulativo, sino sobre la operación sustractiva. El resultado de esto debe crear un sólido único.

En este ejemplo, una simetría de la punta (la cual es el vaciado de la ranura) alrededor de cualquiera de los planos base, o incluso de una cara del sólido, no producirá un sólido simétrico del modelo entero. (De hecho, producirá una operación de simetría en el árbol de dependencias que estará esencialmente vacía.)

![](/images/PhantomMirror.png)

Sólidos aislados

En este ejemplo, una simetría de una punta (la cual es el vaciado de la ranura) es ejecutada alrededor de un Plano de datos y produce una ranura simétrica:

![](/images/MirroredSlot.png)

Sólidos aislados

Ver la página wiki de la herramienta ![](/images/PartDesign_Mirrored.svg) [PartDesign Simetría](/PartDesign_Mirrored/es "PartDesign Mirrored/es") para más información.

## Comparación

Puede ver debajo el mismo ejemplo construído con cada uno de los dos bancos de trabajo. Por supuesto, siempre hay diferentes métodos posibles de construcción con cada banco de trabajo.

![Compare constructions with Part WB and PartDesign WB](/images/PartWBvsPartDesignWBexample.jpg)

Compare constructions with Part WB and PartDesign WB

| En  Banco de trabajo PartDesign | En  Banco de trabajo Part |
| --- | --- |
| 01-  Nuevo Body >  Nuevo boceto en el plano XZ | 01-  Boceto de PartDesign >  Boceto en el plano XZ |
|  |  |

|  |  |
| --- | --- |
| 02-  Revolución / Z | 02-  Revolución / Z |
|  |  |

|  |  |
| --- | --- |
| 03-  Nuevo boceto en el plano XY | 03-  Banco de trabajo PartDesign >  Nuevo boceto en el plano XY |
|  |  |

|  |  |
| --- | --- |
| 04-  Vaciado | 04a-  Extrusión |
|  |  |

|  |  |
| --- | --- |
|  | 04b-  Corte |
|  |  |

|  |  |
| --- | --- |
| 05-  Nuevo boceto en el plano XZ | 05-  Banco de trabajo PartDesign >  Nuevo boceto en el plano XZ |
|  |  |

|  |  |
| --- | --- |
| 06-  Extrusión sim/XZ | 06a-  Extrusión sim/XZ |
|  |  |

|  |  |
| --- | --- |
|  | 06b-  Banco de trabajo Draft  Patrón Polar |
|  |  |

|  |  |
| --- | --- |
|  | 06c-  Fusión |
|  |  |

|  |  |
| --- | --- |
| 07-  Nuevo boceto sobre la cara de la base | 07-  Sketcher WB >  Nuevo boceto en el plano XZ |
|  |  |

|  |  |
| --- | --- |
| 08-  Taladro abocardado | 08a-  Revolución |
|  |  |

|  |  |
| --- | --- |
|  | 08b-  Banco de trabajo Draft  Patrón Polar |
|  |  |

|  |  |
| --- | --- |
| 09-  Patrón polar o Agujero y extrusión | 09-  Corte |
|  |  |

Compare the construction trees in the two workbenches as well as their organization and reading timeline :

|  |  |
| --- | --- |
| 10- Construction tree in PartDesign workbench | 10- Construction tree in Part workbench |
|  |  |

## Conclusión

Los bancos de trabajo Part y PartDesign pueden ser usados juntos con cuidado, creando modelos bastante complejos.

[Arriba](#Top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_and_PartDesign/es&oldid=1231294>"