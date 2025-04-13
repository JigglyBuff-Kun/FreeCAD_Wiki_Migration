---
title: Croquizador Dividir
---
|  |
| --- |
| Sketcher Split |
| Menu location |
| Croquis → Croquizador Geometrías → Dividir |
| Workbenches |
| [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.20 |
| See also |
| [Croquizador Recortar](/Sketcher_Trimming/es "Sketcher Trimming/es") |
|  |

## Descripción

Esta herramienta permite dividir un borde en dos idénticas, mientras que la mayoría de las restricciones se duplican, por lo que ambas partes permanecen restringidas aparte de la posición del punto de división. En el caso especial de un círculo, éste se convierte en un arco de extremos sueltos, transfiriéndose las restricciones existentes del círculo al nuevo arco.

## Utilización

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. Pulse el ![](/images/Sketcher_Split.svg) Dividir. El puntero del ratón se convierte en una cruz blanca con un símbolo rojo de división.
2. Haz clic en el borde en el lugar donde quieres dividirla.
3. A partir de los bordes de línea y arco, se crearán dos nuevas, conectadas en el punto pulsado. Un círculo se convierte en un arco con el mismo punto central y otras restricciones que tenía el círculo original.
4. Pulsando Esc o el botón derecho del ratón terminará la función.

## Notas

* Se transfieren todas las coincidencias - punto inicial, punto final y punto central (si procede).
* La restricción de punto en el objeto se transfiere a la arista más cercana recién creada.
* Las restricciones verticales y horizontales se copian a ambos descendientes.
* Las restricciones paralelas y perpendiculares se copian para ambos segmentos de línea, para el arco sólo una vez, a la parte más cercana.
* La restricción de igualdad se transfiere sólo para las aristas de arco resultantes, los segmentos de línea no la reciben.
* La restricción de simetría no se transfiere actualmente.
* La restricción de bloque no se transfiere actualmente.
* Las restricciones horizontales, verticales y de longitud entre puntos se transfieren a los puntos exteriores de las nuevas aristas.
* La restricción de distancia entre puntos se asigna sólo una vez, al segmento de arista más cercano.
* Las restricciones de radio y diámetro se copian a cualquier arco resultante.
* La restricción de ángulo no se transfiere actualmente.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Split/es&oldid=1397506>"