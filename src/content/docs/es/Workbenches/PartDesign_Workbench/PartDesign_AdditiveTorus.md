---
title: DiseñoPiezas ToroAditivo
---
|  |
| --- |
| Part Design Toro aditivo |
| Ubicación en el Menú |
| Part Design → Crear una primitiva aditiva → Toro aditivo |
| Entornos de trabajo |
| [Part Design](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Part Design Crear una Primitiva aditiva](/PartDesign_CompPrimitiveAdditive/es "PartDesign CompPrimitiveAdditive/es") |
|  |

## Descripción

Inserta un toro primitivo en el Cuerpo activo como primera característica, o lo fusiona con la(s) característica(s) existente(s).

![](/images/PartDesign_AdditiveTorus_example.png)

## Uso

1. Presionar el botón ![](/images/PartDesign_AdditiveTorus.svg) **Toro aditivo** . **Nota**: El Toro aditivo forma parte de un icono de herramientas llamado *Crear una primitiva aditiva*. Tras abrir Freecad, el Cubo aditivo es la única primitiva mostrada en la barra de herramientas. Para obtener el botón del Toro, pinchar en la flecha que indica hacia abajo, que está al lado del icono visible y seleccionar Toro aditivo en el menú desplegable.
2. Establece los parámetros de Primitiva y [Adjunto](/index.php?title=Part_EditAttachment/es&action=edit&redlink=1 "Part EditAttachment/es (page does not exist)").
3. Aceptar OK.
4. Una operación de Toro aparece dentro del Cuerpo activo.

## Opciones

Tras su creación, el Toro puede ser editado de dos maneras:

* Haciendo doble clic con el ratón sobre el árbol del Modelo, o pinchando con el botón derecho y seleccionando **Editar primitiva** en el menú contextual. Con ello se abre la ventana de selección de parámetros de la Primitiva.
* Por medio del [Editor de propiedades](/Property_editor/es "Property editor/es").

## Propiedades

* DATOS**Attachment**: Define el modo de Attachment y la separación del archivo adjunto. Ver [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* DATOS**Label**: Nombre dado al objeto Toro. Se puede cambiar para adaptarlo a sus necesidades.
* DATOS**Radio1**: Radio de la órbita imaginaria alrededor de la cual revoluciona el corte de la sección circular. (La distancia entre el centro del Toro y el centro de la sección circular que revoluciona).
* DATOS**Radio2**: Radio de la sección circular que define la forma del Toro.
* DATOS**Ángulo1**: (Llamado parámetro *V* en los parámetros de la primitiva) Truncamiento inferior del Toro, paralelo al corte de la sección circular (-180 grados en un Toro completo). Al cambiar el Ángulo 1, un error en los originales puede causar resultados impredecibles.
* DATOS**Ángulo2**: (Sin nombre en los parámetros de la primitiva) Truncamiento superior del Toro, paralelo al corte de la sección circular (180 grados en un Toro completo). Al cambiar el Ángulo 2, un error en los originales puede causar resultados impredecibles.
* DATOS**Ángulo3**: (Llamado parámetro *U* en los parámetros de la primitiva) Ángulo de rotación del corte de la sección circular (360 grados en un Toro completo).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveTorus/es&oldid=1126967>"