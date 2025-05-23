---
title: Base API
---
:::caution
(October 2019) Do not edit this page. The information is incomplete and outdated. For the latest API, see theautogenerated API documentation, or generate the documentation yourself, seeSource documentation.
:::

El módulo Base está contenido en el módulo FreeCAD y contiene constructores para diferentes tipos de objetos ampliamente utilizados en FreeCAD.

![](/images/Class.png) **BoundBox(***[Xmin,Ymin,Zmin,Xmax,Ymax,Zmax] ) o ( Tuple, Tuple ) o ( Vector, Vector***)**

**Description**: Crea una caja de abarque. Una caja de abarque es un cubo que sirve para describir los límites exteriores. Puedes obtener las cajas de abarque de un montón de tipos 3D. Se utiliza frecuentemente para verificar si una entidad 3D permanece en el rango de otro objeto. La comprobación inicial de interferencias de los límites puede ahorrar un montón de tiempo de cálculo!

![](/images/Class.png) **Matrix(****)**

**Description**: Crea una [Matriz](/Matrix_API "Matrix API") 4x4, que puede ser utilizada para aplicar transformaciones a los objetos.

![](/images/Class.png) **Vector(***) o ( x,y,z***)**

**Description**: Crea un [Vector](/Vector_API "Vector API") 3D de FreeCAD, representando un punto 3D o una dirección.

![](/images/Class.png) **Placement(****)**

**Description**: Crea una [Ubicación](/Placement_API "Placement API").

Retrieved from "<http://wiki.freecad.org/index.php?title=Base_API/es&oldid=632392>"