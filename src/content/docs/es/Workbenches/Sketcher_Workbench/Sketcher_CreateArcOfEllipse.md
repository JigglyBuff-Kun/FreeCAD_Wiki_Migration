---
title: Croquizador CrearArcoDeElipse
---
|  |
| --- |
| Croquizador CrearArcoDeElipse |
| Ubicación en el Menú |
| Croquis → Geometrías de Croquizador → Crear un arco de elipse |
| Entornos de trabajo |
| [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.15 |
| Ver también |
| [Croquizador Ellipse por el centro](/Sketcher_CreateEllipseByCenter/es "Sketcher CreateEllipseByCenter/es"), [Croquizador Arco](/Sketcher_CompCreateArc/es "Sketcher CompCreateArc/es") |
|  |

## Descripción

Esta herramienta dibuja un arco de elipse eligiendo cuatro puntos: el centro, el extremo del radio mayor, el punto inicial y el punto final.
Al iniciar la herramienta, el puntero del ratón cambia a una cruz blanca con un icono de arco de elipse rojo. Además se muestran las coordenadas en tiempo real.

![](/images/Sketcher_CreateArcOfEllipse_Example.png)

Arc of ellipse (white) with internal geometry (dark yellow)

## Utilización

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

* Pulse el ![](/images/Sketcher_CreateArcOfEllipse.svg) Arco de elipse.
* El primer clic en la vista 3D establece el centro de la elipse. El segundo clic establece el primer radio y la orientación de la elipse. El tercer clic establece el otro radio y el inicio del arco. El cuarto clic establece el final del arco.
* Después del cuarto clic, se crea el arco de la elipse, junto con un conjunto de geometrías de construcción alineadas con él (diámetro mayor, diámetro menor, dos focos). La geometría de construcción puede ser eliminada manualmente si no se necesita, y recreada más tarde. Ver [Croquizador Mostrar Ocultar la geometría interna](/Sketcher_RestoreInternalAlignmentGeometry/es "Sketcher RestoreInternalAlignmentGeometry/es").
* Pulsar ESC o hacer clic con el botón derecho del ratón cancela la función.

## Notes

## Peculiaridades

* Los ejes mayor y menor de la elipse subyacente son estrictos y no pueden ser intercambiados por el cambio de tamaño. La elipse subyacente debe girarse para intercambiar los ejes.
* A diferencia de la elipse, que puede ser restringida para convertirse en un círculo, el arco de la elipse no puede representar un arco de círculo.
* Mover el arco de la elipse por el borde es lo mismo que mover el centro de la elipse.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcOfEllipse/es&oldid=1413724>"