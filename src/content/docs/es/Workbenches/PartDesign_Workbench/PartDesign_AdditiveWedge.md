---
title: PartDesign Cuña aditiva
---
|  |
| --- |
| PartDesign Cuña aditiva |
| Ubicación en el Menú |
| Part Design → Crear una primitiva aditiva → Cuña aditiva |
| Entornos de trabajo |
| [PartDesign](/PartDesign_Workbench/es "PartDesign Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Create an additive primitive](/PartDesign_CompPrimitiveAdditive/es "PartDesign CompPrimitiveAdditive/es"), [Subtractive Wedge](/PartDesign_SubtractiveWedge "PartDesign SubtractiveWedge") |
|  |

## Descripción

Inserta una cuña primitiva en el Body (cuerpo) activo como primera operación, o la fusiona con la(s) operación(es) existente(s).

![](/images/PartDesign_AdditiveWedge_example.png)

## Uso

1. Presionar el botón ![](/images/PartDesign_AdditiveWedge.svg) **Cuña aditiva** . **Nota**: La Cuña aditiva forma parte de un icono de herramientas llamado *Crear una primitiva aditiva*. Tras abrir FreeCad, el icono de Crear una primitiva aditiva es el único que se muestra en la barra de herramientas. Para obtener el botón de la Cuña, pinchar en la flecha que indica hacia abajo que está al lado del icono visible y seleccionar Cuña aditiva en el menú desplegable.
2. Seleccionar los parámetros de la primitiva y el [Attachment](/Part_EditAttachment "Part EditAttachment").
3. Aceptar OK.
4. Una operación de Cuña aparece dentro del Body (cuerpo) activo.

## Opciones

Tras su creación, la Cuña puede ser editada de dos maneras:

* Haciendo doble clic con el ratón sobre el árbol del Modelo, o pinchando con el botón derecho y seleccionando **Editar primitiva** en el menú contextual. Con ello se abre la ventana de selección de parámetros de la Primitiva.
* Por medio del [Editor de propiedades](/Property_editor/es "Property editor/es").

## Propiedades

Usando el emplazamiento por defecto, las entradas siguientes son:

* DATOS**X min/max** : Posición de los puntos iniciales y finales que forman la cara frontal en el eje X
* DATOS**Y min/max**: Altura de la cuña, indicando los puntos iniciales y finales, que resultarán en la altura de la cuña.
* DATOS**Z min/max** : Posición de los puntos iniciales y finales que forman la cara frontal en el eje Z
* DATOS**X2 min/max** : Posición de los puntos iniciales y finales que forman la cara posterior en el eje X
* Datos**Z2 min/max** : Posición de los puntos iniciales y finales que forman la cara posterior en el eje Z

Teniendo en cuenta que X y Z se refieren a la cara frontal (base inferior) y X2 y Z2 a la cara posterior (base superior) de la cuña en la posición en que aparece por defecto.

## Pirámides

Las cuñas pueden ser usadas para crear pirámides, seleccionando DATOS**X2 min/max** y DATOS**Z2 min/max** , tal que min = max.

Para crear una pirámide regular con un vértice en el lado superior, los valores de DATOS**X2 min/max** y de DATOS**Z2 min/max** tienen que ser la mitad de DATOS**X max** y DATOS**Z max**

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveWedge/es&oldid=1111291>"