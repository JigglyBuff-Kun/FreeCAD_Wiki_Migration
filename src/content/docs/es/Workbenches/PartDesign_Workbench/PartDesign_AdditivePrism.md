---
title: DiseñoPiezas PrismaAditivo
---
|  |
| --- |
| DiseñoPiezas PrismaAditivo |
| Ubicación en el Menú |
| DiseñoPiezas → Crear una primitiva aditiva → Prisma Aditivo |
| Entornos de trabajo |
| [DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [DiseñoPiezas Componer un primitiva aditiva](/PartDesign_CompPrimitiveAdditive/es "PartDesign CompPrimitiveAdditive/es"), [DiseñoPiezas Prisma Sustractivo](/PartDesign_SubtractivePrism/es "PartDesign SubtractivePrism/es") |
|  |

## Descripción

Inserta un prisma primitiva en el Cuerpo activo como primera característica, o lo fusiona con la(s) característica(s) existente(s).

![](/images/PartDesign_AdditivePrism_example.png)

## Uso

1. Presionar el botón ![](/images/PartDesign_AdditivePrism.svg) **Prisma aditivo** . **Nota**: El Prisma aditivo forma parte de un icono de herramientas llamado *Crear una primitiva aditiva*. Tras abrir Freecad, el Cubo aditivo es la única primitiva mostrada en la barra de herramientas. Para obtener el botón del Prisma, pinchar en la flecha que indica hacia abajo, que está al lado del icono visible y seleccionar Prisma aditivo en el menú desplegable.
2. Establece los parámetros de Primitiva y [Adjunto](/index.php?title=Part_EditAttachment/es&action=edit&redlink=1 "Part EditAttachment/es (page does not exist)").
3. Aceptar OK.
4. Una característica del Prisma aparece dentro del Cuerpo activo.

## Opciones

Es posible crear prismas torcidos especificando ángulos con respecto al vector normal del adjunto seleccionado. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

Tras su creación, el Prisma puede ser editado de dos maneras:

* Haciendo doble clic con el ratón sobre el árbol del Modelo, o pinchando con el botón derecho y seleccionando **Editar primitiva** en el menú contextual. Con ello se abre la ventana de selección de parámetros de la Primitiva.
* Por medio del [Editor de propiedades](/Property_editor/es "Property editor/es").

## Propiedades

* DATOS**Adjunto**: Define el modo de Attachment y la separación del archivo adjunto. Ver [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* DATOS**Etiqueta**: etiqueta dada al objeto Prisma. Cámbiela para adaptarla a sus necesidades.
* DATOS**Polígono**: Número de lados en el corte transversal del polígono que forma el prisma.
* DATOS**Circunradio**: [circumscribed radius](https://en.wikipedia.org/wiki/Circumscribed_circle) Radio de la circunferencia en la que está inscrito el corte transversal del polígono que forma el prisma.
* DATOS**Altura**: Altura del prisma.
* DATOS**Primer Ángulo**: Ángulo de la primera dirección. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")
* DATOS**Segundo Ángulo**: Ángulo de la segunda dirección. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditivePrism/es&oldid=1268431>"