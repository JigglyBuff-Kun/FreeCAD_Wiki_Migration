---
title: PartDesign Cilindro Sustractivo
---
|  |
| --- |
| PartDesign Cilindro Sustractivo |
| Ubicación en el Menú |
| Part Design → Crear una primitiva sustractiva → Cilindro Sustractivo |
| Entornos de trabajo |
| [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Crear una Primitiva sustractiva](/PartDesign_CompPrimitiveSubtractive/es "PartDesign CompPrimitiveSubtractive/es"), [Additive Cylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder") |
|  |

## Descripción

Inserta un Cilindro sustractivo en el Body (cuerpo) activo. Su forma es sustraída del sólido existente.

![](/images/PartDesign_SubtractiveCylinder_example.svg)

*A la izquierda: Body activo (A) mostrado en color gris y el Cilindro sustractivo (B) mostrado en color rojo transparente. El resultado se puede apreciar a la derecha.*

## Uso

1. Presionar el botón ![](/images/PartDesign_SubtractiveCylinder.svg) **Cilindro Sustractivo** . **Nota**: El Cilindro sustractivo forma parte de un icono de herramientas llamado *Crear una primitiva sustractiva*. Tras abrir FreeCAD, la Caja sustractiva es la única mostrada en la barra de herramientas. Para obtener el botón del Cilindro, pinchar en la flecha que indica hacia abajo que está al lado del icono visible y seleccionar Cilindro sustractivo en el menú desplegable.
2. Seleccionar los parámetros de la primitiva y el [Attachment](/Part_EditAttachment "Part EditAttachment").
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

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCylinder/es&oldid=1219069>"