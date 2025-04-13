---
title: Arch Nido
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Nest |
| Ubicación en el Menú |
| Arch → Panel tools → Nest |
| Entornos de trabajo |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Arch Panel/es](/Arch_Panel/es "Arch Panel/es"), [Arch Panel Sheet/es](/Arch_Panel_Sheet/es "Arch Panel Sheet/es") |
|  |

## Descripción

La herramienta Nido permite seleccionar una forma plana para ser un contenedor y una serie de otras formas planas para organizarlas dentro del espacio definido por la forma del contenedor. Esto es típicamente necesario para las operaciones CNC, donde se desea cortar una serie de piezas de un panel base, y necesita organizar esas piezas de la mejor forma compacta posible para que ocupen menos espacio en el panel.

El algoritmo detrás de la herramienta Nido está en constante evolución y actualmente no está totalmente optimizado. En el futuro, el rendimiento de esta herramienta debería ser mucho mejor.

![](/images/Arch_Nest_example.jpg)

*La imagen de arriba muestra una serie de formas antes y después de la operación de anidación*

## Utilización

1. Presiona el botón ![](/images/Arch_Nest.png) Arch Nest
2. Seleccione un objeto para ser el contenedor. Este objeto debe ser plano, y, de momento, rectangular
3. Haz clic en el botón "Elegir contenedor" para usar ese objeto como contenedor
4. Seleccione una serie de otros objetos planos que desee colocar dentro del contenedor. Todos estos objetos deben ser planos y en el mismo plano que el contenedor.
5. Ajuste las opciones deseadas a continuación
6. Inicie el proceso de cálculo
7. Al final del cálculo, haga clic en el botón **Vista previa** para crear una vista previa temporal del resultado.
8. Si desea aplicar el resultado (mueva y gire las formas reales en su lugar), haga clic en Aceptar.

![](/images/Arch_Nest_panel.jpg)

## Notas

* Todos los objetos deben tener una cara
* Por el momento, la herramienta solo funcionará con objetos planos que tengan la misma orientación.
* Por el momento, el contenedor debe ser rectangular.
* En este momento, el margen/espacio entre las piezas aún no está implementado
* El cálculo puede tomar mucho tiempo con muchos objetos. Eso se optimizará en el futuro

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Nest/es&oldid=1433097>"