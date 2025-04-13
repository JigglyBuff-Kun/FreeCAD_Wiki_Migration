---
title: PartDesign Toro Sustractivo
---
|  |
| --- |
| PartDesign Toro Sustractivo |
| Ubicación en el Menú |
| Part Design → Crear una primitiva sustractiva → Toro Sustractivo |
| Entornos de trabajo |
| [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Crear una Primitiva sustractiva](/PartDesign_CompPrimitiveSubtractive/es "PartDesign CompPrimitiveSubtractive/es") |
|  |

## Descripción

Inserta un Toro sustractivo en el Body (cuerpo) activo. Su forma es sustraída del sólido existente.

![](/images/PartDesign_SubtractiveTorus_example.svg)

*A la izquierda: Body activo (A) mostrado en color gris y el Toro sustractivo (B) mostrado en color rojo transparente. El resultado se puede apreciar a la derecha.*

## Uso

1. Presionar el botón ![](/images/PartDesign_SubtractiveTorus.svg) **Toro Sustractivo** . **Nota**: El Toro sustractivo forma parte de un icono de herramientas llamado *Crear una primitiva sustractiva*. Tras abrir FreeCAD, la Caja sustractiva es la única mostrada en la barra de herramientas. Para obtener el botón del Toro, pinchar en la flecha que indica hacia abajo que está al lado del icono visible y seleccionar Toro sustractivo en el menú desplegable.
2. Seleccionar los parámetros de la primitiva y el [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Aceptar OK.
4. Una operación de Toro aparece dentro del Body(cuerpo) activo.

## Opciones

Tras su creación, el Toro puede ser editado de dos maneras:

* Haciendo doble clic con el ratón sobre el árbol del Modelo, o pinchando con el botón derecho y seleccionando **Editar primitiva** en el menú contextual. Con ello se abre la ventana de selección de parámetros de la Primitiva.
* Por medio del [Editor de propiedades](/Property_editor/es "Property editor/es").

## Propiedades

* DATOS**Attachment**: Define el modo de Attachment y la separación del archivo adjunto. Ver [Part Attachment](/Part_EditAttachment "Part EditAttachment").
* DATOS**Label**: Nombre dado al objeto Toro. Se puede cambiar para adaptarlo a sus necesidades.
* DATOS**Radio1**: Radio de la órbita imaginaria alrededor de la cual revoluciona el corte de la sección circular. (La distancia entre el centro del Toro y el centro de la sección circular que revoluciona).
* DATOS**Radio2**: Radio de la sección circular que define la forma del Toro.
* DATOS**Ángulo1**: (Llamado parámetro *V* en los parámetros de la primitiva) Truncamiento inferior del Toro, paralelo al corte de la sección circular (-180 grados en un Toro completo). Al cambiar el Ángulo 1, un error en los originales puede causar resultados impredecibles.
* DATOS**Ángulo2**: (Sin nombre en los parámetros de la primitiva) Truncamiento superior del Toro, paralelo al corte de la sección circular (180 grados en un Toro completo). Al cambiar el Ángulo 2, un error en los originales puede causar resultados impredecibles.
* DATOS**Ángulo3**: (Llamado parámetro *U* en los parámetros de la primitiva) Ángulo de rotación del corte de la sección circular (360 grados en un Toro completo).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveTorus/es&oldid=1127222>"