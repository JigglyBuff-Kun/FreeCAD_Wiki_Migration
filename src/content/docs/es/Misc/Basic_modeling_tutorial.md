---
title: Tutorial de modelado básico
---
|  |
| --- |
| Tutorial |
| Tema |
| Introducción a la modelización |
| Nivel |
| Principiante |
| Tiempo para completar |
| 15 minutos |
| Autores |
| [NormandC](/User:Normandc "User:Normandc") |
| Versión de FreeCAD |
| cualquier |
| Archivos de ejemplos |
| ninguno |
| Ver también |
| *None* |
|  |

## Introducción

Este Tutorial de Modelado Básico te mostrará cómo modelar un ángulo de hierro. Una cosa que hay que saber es que FreeCAD es modular por diseño, y como para muchos otros programas de CAD, siempre hay más de una manera de hacer las cosas. Exploraremos dos métodos aquí.

This tutorial was written with version 0.15 of FreeCAD.

## Antes de empezar

Ten en cuenta que FreeCAD está todavía en una fase temprana de desarrollo, por lo que puede que no seas tan productivo como con otra aplicación de CAD, y seguramente te encontrarás con errores, o experimentarás cuelgues. FreeCAD tiene ahora la capacidad de guardar archivos de copia de seguridad. El número de esos archivos de copia de seguridad puede ser especificado en el diálogo de preferencias. No dudes en permitir 2 o 3 archivos de copia de seguridad hasta que sepas bien cómo manejar FreeCAD.

Guarde su trabajo a menudo, de vez en cuando guarde su trabajo con un nombre diferente, para tener una copia "segura" a la que recurrir, y esté preparado para la posibilidad de que algunos comandos no le den los resultados esperados.

## Introducción a las técnicas de modelado

La primera (y básica) técnica de modelado de sólidos es [Geometría constructiva de sólidos (CSG)](http://es.wikipedia.org/wiki/Geometr%C3%ADa_constructiva_de_s%C3%B3lidos). También hay una explicación detallada (en el contexto de FreeCAD) de [Geometría constructiva de sólidos](/Constructive_solid_geometry/es "Constructive solid geometry/es") en el wiki. Trabajas con formas primitivas como cubos, cilindros, esferas y conos para construir tu geometría combinándolas, restando una forma de la otra, o intersectándolas. Estas herramientas forman parte del [Ambiente de trabajo Pieza](/Part_Workbench/es "Part Workbench/es"). También puedes aplicar transformaciones en las formas, como aplicar redondeos o chaflanes en las aristas. Estas herramientas también están en el [Ambiente de trabajo Pieza](/Part_Workbench/es "Part Workbench/es").

Luego existen otras herramientas más avanzadas. Tu empiezas dibujando un perfil 2D que puedas extruir o revolucionar.

Así que vamos a comenzar tratando de hacer un pie de hierro para una mesa con estos 2 métodos.

## 1er Método - Por Geometría Sólida Constructiva

1. Comienza con el [Ambiente de trabajo Pieza](/Part_Workbench/es "Part Workbench/es") ![](/images/Switch_PartWorkbench.JPG).
2. Si no has abierto un nuevo documento de FreeCAD (la mayor parte de la ventana de FreeCAD aparece en gris), desde el menú desplegable haz clic en **Archivo → Nuevo** o haz clic en el ![](/images/Document-new.png) **Crear un nuevo documento vacío'** icono.
3. Haga clic en el ![](/images/Part_Box.svg) [Caja](/Part_Box/es "Part Box/es") para crear una caja
4. Cambia sus dimensiones seleccionándola en el espacio 3D, o haciendo clic en la pestaña Proyecto de la izquierda, y luego
5. Haz clic en la pestaña Datos de la parte inferior, y cambia los valores de Longitud, Anchura y Altura a 50mm, 50 y 750 *(ver Fig. 1.1)* *Nota*: *cuando se tomaron estas capturas, las propiedades estaban ordenadas de forma diferente, siendo la Altura la primera*.
6. La caja ahora llena la mayor parte de la vista 3D. Haga clic en ![](/images/Std_ViewFitAll.svg) [Encajar todo](/index.php?title=Std_ViewFitAll/es&action=edit&redlink=1 "Std ViewFitAll/es (page does not exist)") para ajustar la vista a la caja recién creada.
7. Crea una segunda caja de la misma manera, pero con los valores L=40, W=40 y H=750mm. Por defecto esta caja se superpondrá a la primera. *(ver Fig. 1.2)*
8. Ahora restaremos la segunda caja a la primera. Seleccione primero la primera forma (llamada Box), luego la segunda (llamada Box001), ¡el orden de selección es importante! (Asegúrate de que ambas formas están seleccionadas en el árbol del proyecto. Una cosa para recordar: **en el modo de navegación de Inventor, Ctrl + clic no funciona para la selección múltiple. Cambie [Navegación con ratón](/Mouse_navigation/es "Mouse navigation/es") a la selección de CAD o Blender).**
9. En la barra de herramientas del ambiente de trabajo de piezas, haga clic en el ![](/images/Part_Cut.svg) [Cortar](/Part_Cut/es "Part Cut/es").

![](/images/Tutorial-normand01.jpg)

Fig. 1.1 El primer cubo

![](/images/Tutorial-normand02.jpg)

Fig. 1.2 El segundo cubo superpuesto sobre el primero, preparado para ser restado

![](/images/Tutorial-normand03.jpg)

Fig. 1.3 Después de la resta

Ahora tienes tu primer ángulo de hierro *(Fig. 1.3)*. Te habrás fijado que, en la pestaña de Proyecto a la izquierda, ambos cubos han sido reemplazados por un objeto "Cut". En realidad, no han desaparecido, sino que se han agrupado en el objeto Cut. Pulsa en el + en frente de él, y verás que ambos cubos siguen ahí, pero sin resaltar *(Fig. 1.4)*. Si pulsas en cada uno de ellos y pulsas la barra espaciadora, se mostrarán. La barra espaciadora alterna la visibilidad de los objetos seleccionados. *(Fig. 1.5)*

No quieres el ángulo orientado en esa posición? Simplemente necesitas cambiar la ubicación de la forma Box001. Selecciónalo, ocultalo y en la pestaña de Datos, pulsa sobre el + enfrente a Placement, entonces se despliega la ubicación, y cambia sus coordenadas X e Y. Presiona Enter, oculta la forma Box001 de nuevo, y la orientación de tu ángulo es ahora diferente. *(Fig. 1.5)* Incluso puedes cambiar las dimensiones de las formas, y el objeto Cut se actualizará.

![](/images/Tutorial-normand04.jpg)

Fig. 1.4 La operación corte retiene sus objetos originales (los cubos)

![](/images/Tutorial-normand05.jpg)

Fig. 1.5 Aún puedes hacer visibles los cubos originales

Por cierto, podemos añadir redondeos al ángulo para que parezca más real, utilizando la herramienta ![](/images/Part_Fillet.png) [Redondeo](/Part_Fillet "Part Fillet"). *(Fig. 1.6)*

![](/images/Tutorial-normand06.jpg)

Fig. 1.6 Las aristas redondeadas

## Segundo método - Extruyendo un croquis

Este método requiere que comiences dibujando un perfil 2D. Necesitas activar el [Módulo de croquizado 2D](/Draft_Workbench/es "Draft Workbench/es") (Menú **Vista > Entorno > Croquizado 2d**).

Después necesitamos establecer el [plano de trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es"). Dependiendo de tu versión de FreeCAD, lo tendrás directamente en la barra de herramientas, a la derecha, el botón que indica "None". Pulsalo, y a la izquierda aparecerán justo después de "Comando activo: Seleccionar plano Equidistancia", un campo de texto y una serie de botones. Asumiendo que quieres comenzar tu perfil en la vista en planta, seleciona XY. El botón "None" mostrará ahora "Top" como plano activo.
[Ver nota.](#DraftPlaneButton/es)

Selecciona la herramienta ![](/images/Draft_Wire.png) [Wire o Polilínea (línea de múltiples puntos)](/Draft_Wire "Draft Wire"), y comienza a dibujar la forma, utilizando los campos de texto para las posiciones X e Y. La casilla de verificación Relativo debería estar activada, así como la de "Relleno".

* 1st punto: 0,0
* 2nd punto: 50,0
* 3rd punto: 0,10
* 4th punto: -40,0
* 5th punto: 0,40
* 6th punto: -10,0
* No se indica el 7th punto, en su lugar pulsa en el botón "Cerrar" para cerrar el perfil. Ahora deberías tener este perfil, titulado "Wire" en la pestaña del Proyecto:

![](/images/Tutorial-normand07.jpg)

Fig. 1.7 La Polilínea base

Pulsa la tecla cero del para establecer la vista axonométrica.

Activa el [Entorno de Pieza](/Part_Workbench/es "Part Workbench/es").

Pulsa en la herramienta de ![](/images/Part_Extrude.png) [Extruir](/Part_Extrude "Part Extrude").

En la pestaña de Tareas a la izquierda, selecciona el objeto **Wire**. Introduce la longitud deseada, digamos que 750mm. Deja la dirección Z. Pulsa en Aplicar. Ahora deberías tener un objeto **Extrude** en la pestaña del Proyecto *(fig. 1.8)*

![](/images/Tutorial-normand08.jpg)

Fig. 1.8 El objeto extruido

Algo que se debe tener en cuenta con respecto a este método: para editar la forma, tienes que editar la Polilínea, no es tan sencillo como en el método anterior.

Y también existen otros métodos para hacerlo! Espero que estos dos ejemplos te inicien. Seguramente te encuentres con algunos inconvenientes por el camino (A mi me pasó cuando aprendí a trabajar con FreeCAD, y tenía experiencia en CAD 3D ), pero no dudes en preguntar en el [foro de FreeCAD](http://forum.freecadweb.org)!

Nota sobre el botón del plano de trabajo de Boceto:

La etiqueta en tu botón podría ser diferente, dependiendo de tu versión y también de lo que estuvieras haciendo antes. La etiqueta del botón podría ser: "Planta", "alzado", "vista lateral", "Ninguna" o una representación de un vector como d(0.0,0.0,1.0). También podría estar en blanco. Por ejemplo:

![](/images/DraftPlaneNone.png)

Seleccionar Plano Ninguno

![](/images/DraftPlaneTop.png)

Seleccionar Plano Planta

![](/images/DraftPlaneView.png)

Seleccionar Plano Vista

Las instrucciones de arriba funcionarán, sin importar la etiqueta que tenga el botón.

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_modeling_tutorial/es&oldid=1251487>"