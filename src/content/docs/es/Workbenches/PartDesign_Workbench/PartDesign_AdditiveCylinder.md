---
title: DiseñoPiezas CilindroAditivo
---
|  |
| --- |
| DiseñoPiezas CilindroAditivo |
| Ubicación en el Menú |
| DiseñoPiezas → Crear una primitiva aditiva → Cilindro Aditivo |
| Entornos de trabajo |
| [DiseñoPiezas](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Crear una primitiva aditiva](/PartDesign_CompPrimitiveAdditive/es "PartDesign CompPrimitiveAdditive/es"), [Cilindro sustractivo](/PartDesign_SubtractiveCylinder/es "PartDesign SubtractiveCylinder/es") |
|  |

## Descripción

Inserta un Cilindro primitivo en el Cuerpo activo como primera característica, o lo fusiona con la(s) característica(s) existente(s).

![](/images/PartDesign_AdditiveCylinder_example.png)

## Uso

1. Presionar el botón ![](/images/PartDesign_AdditiveCylinder.svg) **Cilindro aditivo** . **Nota**: El Cilindro aditivo forma parte de un icono de herramientas llamado *Crear una primitiva aditiva*. Tras abrir Freecad, el Cubo aditivo es la única primitiva mostrada en la barra de herramientas. Para obtener el botón del Cilindro, pinchar en la flecha que indica hacia abajo, que está al lado del icono visible y seleccionar Cilindro aditivo en el menú desplegable.
2. Seleccionar los parámetros de la primitiva y [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Aceptar OK.
4. Una operación de Cilindro aparece dentro del Body (cuerpo) activo.

## Opciones

Es posible crear prismas torcidos especificando ángulos con respecto al vector normal del adjunto seleccionado. [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")

Tras su creación, el Cilindro puede ser editado de dos maneras:

* Haciendo doble clic con el ratón sobre el árbol del Modelo, o pinchando con el botón derecho y seleccionando **Editar primitiva** en el menú contextual. Con ello se abre la ventana de selección de parámetros de la Primitiva.
* Por medio del [Editor de propiedades](/Property_editor/es "Property editor/es").

## Propiedades

* DATOS**Attachment**: Define el modo de Attachment y la separación del archivo adjunto. Ver [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* DATOS**Label**: Nombre dado al objeto Cilindro. Se puede cambiar para adaptarlo a sus necesidades.
* DATOS**Radio**: El valor del radio del Cilindro.
* DATOS**Ángulo**: Ángulo de rotación del corte de la sección (360 grados forma un Cilindro completo).
* DATOS**Altura**: La longitud del Cilindro a lo largo de su eje.
* DATOS**Primer Ángulo**: Ángulo en la primera dirección. [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")
* DATOS**Segundo Ángulo**: Ángulo en la segunda dirección. [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveCylinder/es&oldid=1126925>"