---
title: Pieza ExplotarCompuesto
---
|  |
| --- |
| Pieza ExplotarCompuesto |
| Ubicación en el Menú |
| Pieza → Compuesto → Explotar Compuesto |
| Entornos de trabajo |
| [Pieza](/Part_Workbench/es "Part Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.18.15506 |
| Ver también |
| [Pieza Hacer Compuesto](/Part_Compound/es "Part Compound/es"), [Borrador Bajada](/Draft_Downgrade/es "Draft Downgrade/es") |
|  |

## Descripción

Herramienta para dividir compuestos de formas, para que cada forma contenida (niño) esté disponible como un objeto separado en el árbol modelo. Los niños se ponen automáticamente en un [Grupo](/Std_Group/es "Std Group/es") si hay más de un niño.

Es semiparamétrico: las formas de los niños se actualizarán a medida que cambie el compuesto fuente, pero si se cambia el número de niños en el compuesto, la explosión o bien perderá algunas formas, o tendrá objetos redundantes en un estado de error.

Las colocaciones de las formas extraídas siguen las colocaciones de los originales, más la propiedad de colocación de cada niño.

La herramienta también explotará las formas no compuestas en sus constituyentes de nivel inferior: los compsólidos en sólidos, los sólidos en conchas, las conchas en caras, las caras en cables, los cables en bordes, los bordes en vértices.

## Utilización

1. Invocar la Herramienta de explotar piezas de compuesto de varias maneras:
   * Presionando en la ![](/images/Part_ExplodeCompound.svg) en la barra de herramientas de pieza
   * Usando la **Pieza → Compuesto → Explotar compuesto** entrada en el Pieza menú

## Casos de uso

* Ajustar las posiciones de las formas hechas por ![](/images/Draft_Array.svg) [Draft Array](/Draft_Array/es "Draft Array/es")
* Obtención de piezas divididas a partir del resultado de ![](/images/Part_Slice.svg) [Pieza Slice](/index.php?title=Part_Slice/es&action=edit&redlink=1 "Part Slice/es (page does not exist)") y ![](/images/Part_Cut.svg) [Pieza Cut](/Part_Cut/es "Part Cut/es")
* Obtención de contornos individuales a partir de bocetos y rostros multicontorno
* Obtención de un sólido puro a partir de un sólido en compuesto, para su uso en ![](/images/Workbench_FEM.svg) [MEF Ambiente de trabajo](/FEM_Workbench/es "FEM Workbench/es").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ExplodeCompound/es&oldid=1496839>"