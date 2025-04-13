---
title: Arquitectura Referencia
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arquitectura Referencia |
| Ubicación en el Menú |
| Arquitectura → Referencia |
| Entornos de trabajo |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Arquitectura EdificioPieza](/Arch_BuildingPart/es "Arch BuildingPart/es") |
|  |

## Descripción

La herramienta Referencia permite colocar un objeto en el documento actual que copia su forma y colores de un objeto basado en [Part](/Part_Workbench "Part Workbench") (incluyendo [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart")) almacenado en otro archivo de FreeCAD. Si ese archivo de FreeCAD cambia, el objeto de referencia se marca para ser recargado.

![](/images/Arch_reference_screenshot.png)

## Utilización

1. Pulse el botón ![](/images/Arch_Reference.svg) **Arquitectura Referencia** botón,
2. Pulsa el botón "Elegir archivo..." y selecciona un archivo existente de FreeCAD,
3. Selecciona uno de los objetos basados en la Parte incluidos en la lista desplegable,
4. Pulsa **OK**.

## Opciones

* El objeto de referencia puede ser movido y rotado, la posición actual se mantendrá después de recargar el objeto.
* Si el objeto original se mueve en el archivo contenedor, este movimiento se reflejará en el objeto de referencia.
* Haciendo clic con el botón derecho en un objeto de referencia en la vista de árbol, tiene las opciones de recargar el objeto original o abrir el archivo que lo contiene.
* Para referenciar varios objetos a la vez, colóquelos dentro de una [Arquitectura EdificioPieza](/Arch_BuildingPart/es "Arch BuildingPart/es").
* Al desactivar la propiedad de la vista **Actualizar colores** de la Referencia, ya no se recargarán los colores originales, por lo que puede cambiarlos con seguridad.

## Propiedades

* Datos**Archivo**: El archivo base sobre el que se construye este componente
* Datos**Pieza**: La pieza a utilizar del archivo base
* Vista**Actualizar Colores**: Si es verdadero, los colores del archivo vinculado se mantendrán actualizados

## Guión

La herramienta Referencia puede utilizarse en [macros](/Macros/es "Macros/es") y desde la consola de python utilizando la siguiente función:

```
reference = makeReference([filepath], [partname], [name])

```

crea un objeto Referencia a partir del objeto dado en el archivo dado.

Ejemplo:

```
import Arch
Arch.makeReference("/path/to/some/file.FSCtd", "myPart")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Reference/es&oldid=1481124>"