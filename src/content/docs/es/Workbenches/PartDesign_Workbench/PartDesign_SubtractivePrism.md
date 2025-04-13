---
title: PartDesign Prisma Sustractivo
---
|  |
| --- |
| PartDesign Prisma Sustractivo |
| Ubicación en el Menú |
| Part Design → Crear una primitiva sustractiva → Prisma sustractivo |
| Entornos de trabajo |
| [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Crear una Primitiva sustractiva](/PartDesign_CompPrimitiveSubtractive/es "PartDesign CompPrimitiveSubtractive/es"), [Additive Prism](/PartDesign_AdditivePrism "PartDesign AdditivePrism") |
|  |

## Descripción

Inserta un Prisma sustractivo en el Body (cuerpo) activo. Su forma es sustraída del sólido existente.

![](/images/PartDesign_SubtractivePrism_example.svg)

*A la izquierda: Body activo (A) mostrado en color gris y el Prisma sustractivo (B) mostrado en color rojo transparente. El resultado se puede apreciar a la derecha.*

## Uso

1. Presionar el botón ![](/images/PartDesign_SubtractivePrism.svg) **Prisma Sustractivo** . **Nota**: El Prisma sustractivo forma parte de un icono de herramientas llamado *Crear una primitiva sustractiva*. Tras abrir FreeCAD, la Caja sustractiva es la única mostrada en la barra de herramientas. Para obtener el botón del Prisma, pinchar en la flecha que indica hacia abajo que está al lado del icono visible y seleccionar Prisma sustractivo en el menú desplegable.
2. Seleccionar los parámetros de la primitiva y el [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Aceptar OK.
4. Una operación de Prisma aparece dentro del Body(cuerpo) activo.

## Opciones

Es posible crear prismas torcidos especificando ángulos con respecto al vector normal del adjunto seleccionado. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

Tras su creación, el Prisma puede ser editado de dos maneras:

* Haciendo doble clic con el ratón sobre el árbol del Modelo, o pinchando con el botón derecho y seleccionando **Editar primitiva** en el menú contextual. Con ello se abre la ventana de selección de parámetros de la Primitiva.
* Por medio del [Editor de propiedades](/Property_editor/es "Property editor/es").

## Propiedades

* DATOS**Attachment**: Define el modo de Attachment y la separación del archivo adjunto. Ver [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* DATOS**Label**: Nombre dado al objeto Prisma. Se puede cambiar para adaptarlo a sus necesidades.
* DATOS**Polígono**: Número de lados en el corte transversal del polígono que forma el prisma.
* DATOS**Circunradio**: [circumscribed radius](https://en.wikipedia.org/wiki/Circumscribed_circle) Radio de la circunferencia en la que está circunscrito el corte transversal del polígono que forma el prisma.
* DATOS**Altura**: Altura del prisma.
* DATOS**Primer Ángulo**: Ángulo de la primera dirección. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")
* DATOS**Segundo Ángulo**: Ángulo de la segunda dirección. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePrism/es&oldid=1268444>"