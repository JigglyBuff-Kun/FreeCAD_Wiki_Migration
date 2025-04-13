---
title: PartDesign Cono Sustractivo
---
|  |
| --- |
| PartDesign Cono sustractivo |
| Ubicación en el Menú |
| Part Design → Crear una primitiva sustractiva → Cono sustractivo |
| Entornos de trabajo |
| [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Crear una Primitiva sustractiva](/PartDesign_CompPrimitiveSubtractive/es "PartDesign CompPrimitiveSubtractive/es"), [Additive Cone](/PartDesign_AdditiveCone "PartDesign AdditiveCone") |
|  |

## Descripción

Inserta un Cono sustractivo en el Body (cuerpo) activo. Su forma es sustraída del sólido existente.

![](/images/PartDesign_SubtractiveCone_example.png)

*A la izquierda: Body activo (A) mostrado en color gris y el Cono sustractivo (B) mostrado en color rojo transparente. El resultado se puede apreciar a la derecha.*

## Uso

1. Presionar el botón ![](/images/PartDesign_SubtractiveCone.svg) **Cono sustractivo** . **Nota**: El Cono sustractivo forma parte de un icono de herramientas llamado *Crear una primitiva sustractiva*. Tras abrir FreeCAD, la Caja sustractiva es la única mostrada en la barra de herramientas. Para obtener el botón del Cono, pinchar en la flecha que indica hacia abajo que está al lado del icono visible y seleccionar Cono sustractivo en el menú desplegable.
2. Seleccionar los parámetros de la primitiva (para un cono completo, poner 0 como el valor de uno de sus radios) y el [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Aceptar OK.
4. Una operación de Cono aparece dentro del Body(cuerpo) activo.

## Opciones

Tras su creación, el Cono puede ser editado de dos maneras:

* Haciendo doble clic con el ratón sobre el árbol del Modelo, o pinchando con el botón derecho y seleccionando **Editar primitiva** en el menú contextual. Con ello se abre la ventana de selección de parámetros de la Primitiva.
* Por medio del [Editor de propiedades](/Property_editor/es "Property editor/es").

## Propiedades

* DATOS**Attachment**: Define el modo de Attachment y la separación del archivo adjunto. Ver [Part EditAttachment](/Part_EditAttachment "Part EditAttachment").
* DATOS**Label**: Nombre dado al objeto Cono. Se puede cambiar para adaptarlo a sus necesidades.
* DATOS**Radio1**: El valor del radio de la base del cono.
* DATOS**Radio2**: El valor del radio superior del cono. Un valor diferente de 0 crea un cono truncado.
* DATOS**Altura**: La altura del cono a lo largo de su eje.
* DATOS**Ángulo**: Ángulo de rotación del corte de la sección (360 grados forma un cono completo).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCone/es&oldid=1111347>"