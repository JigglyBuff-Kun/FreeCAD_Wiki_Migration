---
title: Copiar objetos
---
## Overview

## Vista general

Como muchos otros programas, FreeCAD también tiene la capacidad de copiar/cortar y de pegar objetos (párrafos, celdas de hojas de cálculo, imágenes, etc.). [Documento](/Document_structure/es "Document structure/es") objetos pueden ser copiados libremente dentro de un documento o entre documentos usando el ![](/images/Std_Copy.svg)[Copiar](/index.php?title=Std_Copy/es&action=edit&redlink=1 "Std Copy/es (page does not exist)"), ![](/images/Std_Paste.svg) [Pegar](/index.php?title=Std_Paste/es&action=edit&redlink=1 "Std Paste/es (page does not exist)") y [Duplicar la selección](/index.php?title=Std_DuplicateSelection/es&action=edit&redlink=1 "Std DuplicateSelection/es (page does not exist)") comandos.

![](/images/Copy_past_duplicate.png)

Por favor, considere que los objetos copiados no dependen del original. Si quieres clones dependientes por favor usa ![](/images/Draft_Clone.svg) [Clon del ambiente de trabajo Borrador](/Draft_Clone/es "Draft Clone/es") o ![](/images/PartDesign_Clone.svg)  [Clon del ambiente de trabajo DiseñoPiezas](/PartDesign_Clone/es "PartDesign Clone/es"). Si necesita un clon dependiente o una réplica paramétrica, también puede usar ![](/images/Part_SimpleCopy.svg)  [La copia simple del ambiente de trabajo Piezas](/index.php?title=Part_SimpleCopy/es&action=edit&redlink=1 "Part SimpleCopy/es (page does not exist)"). Para clones con patrones, por favor, mira en la  [sección Otros Métodos](#Otros_Métodos) de esta página.

## Copying Linked Objects

## Notas

* Si un objeto a copiar tiene enlaces a objetos que no están en la selección, FreeCAD preguntará si los objetos no seleccionados deben ser incluidos en la operación de copia. [introducido en la versión 0.14](/Release_notes_0.14/es "Release notes 0.14/es")

## Finding and Positioning Pasted Object(s)

## Búsqueda y posicionamiento de los objetos pegados

Después de la operación de Copiar/Pegar, puede que no sea obvio dónde se encuentran los nuevos objetos en la ventana del Documento. Esto se debe a que el nuevo objeto tiene la misma propiedad [Colocación](/Placement/es "Placement/es") que el original. Active la propiedad Visibilidad (Barra espaciadora) para ocultar el original. A continuación, utilice el cuadro de diálogo Colocación para mover la copia a su posición correcta.

## Other Methods

## Otros métodos

Como la mayoría de las cosas en FreeCAD, hay muchas maneras de hacer una copia. Para más ideas, mira:

* DiseñoPieza: [Espejo](/PartDesign_Mirrored/es "PartDesign Mirrored/es"), [Patrón lineal](/PartDesign_LinearPattern/es "PartDesign LinearPattern/es"), [Patrón polar](/PartDesign_PolarPattern/es "PartDesign PolarPattern/es"), [MultiTransformación](/PartDesign_MultiTransform/es "PartDesign MultiTransform/es").
* Pieza: [Espejo](/Part_Mirror/es "Part Mirror/es"), [Crear copia simple](/index.php?title=Part_SimpleCopy/es&action=edit&redlink=1 "Part SimpleCopy/es (page does not exist)")
* Borrador: [Desplazamiento](/Draft_Offset/es "Draft Offset/es"), [Escala](/Draft_Scale/es "Draft Scale/es"), [Arreglo](/Draft_Array/es "Draft Array/es"), [Arreglo Trayectoria](/Draft_PathArray/es "Draft PathArray/es"), [Clón](/Draft_Clone/es "Draft Clone/es"), [Espejar](/Draft_Mirror/es "Draft Mirror/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Copying_Objects/es&oldid=1054179>"