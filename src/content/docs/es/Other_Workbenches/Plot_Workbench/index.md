---
title: Entorno de trabajo Plot
---

![](/images/Workbench_Plot.svg)

Icono de entorno de trabajo Plot

## Introducción

FreeCAD puede realizar gráficas utilizando la biblioteca [matplotlib](https://matplotlib.org/) de [Python](/Python "Python"). Se proporciona un módulo para este fin, como complemento externo en la versión 0.19 y como componente central a partir de la versión 0.20. Las versiones anteriores de FreeCAD no están cubiertas en esta documentación.

Los gráficos producidos ofrecen las herramientas estándar de [matplotlib](https://matplotlib.org/) para editar y guardar. Además de eso, se proporciona un entorno de trabajo ![](/images/Workbench_Plot.svg) Plot como complemento externo que ofrece herramientas más completas para editar el trazado y guardarlo. El complemento se puede instalar con el [Administrador de complementos](/Std_AddonMgr "Std AddonMgr").

## Módulo

El módulo se puede invocar en una consola de Python o en una [macro](/Macros "Macros"). Lo primero que debes hacer es importar el módulo. En FreeCAD 0.19, primero debe instalar el entorno de trabajo ![](/images/Workbench_Plot.svg) Plot usando el [Administrador de complementos](/Std_AddonMgr/es "Std AddonMgr/es"), y luego puede importar Plot escribiendo:

```
from freecad.plot import Plot

```

Desde FreeCAD 0.20, el módulo de trazado ya está incluido con el programa, por lo que no necesita instalar ningún complemento, simplemente escriba:

```
from FreeCAD.Plot import Plot

```

Después de eso, puedes trazar una línea recta desde (0,0) hasta (1,2) simplemente escribiendo:

```
Plot.plot([0, 1], [0, 2])

```

Puedes encontrar ejemplos más complejos en el [tutorial básico de Plot](/Plot_Basic_tutorial/es "Plot Basic tutorial/es") y el [tutorial multi-ejes de Plot](/Plot_MultiAxes_tutorial/es "Plot MultiAxes tutorial/es").

## Herramientas de entorno de trabajo

Si decide instalar el ![](/images/Workbench_Plot.svg) entorno de trabajo Plot usando el [Administrador de complementos](/Std_AddonMgr/es "Std AddonMgr/es"), tendrá las siguientes herramientas disponibles para administrar las gráficas creadas con el módulo:

- ![](/images/Plot_Save.svg) [Guardar gráfico](/Plot_Save/es "Plot Save/es"): Guarda el gráfico en varios formatos, seleccionando el tamaño y resolución.
- ![](/images/Plot_Axes.svg) [Ejes](/Plot_Axes/es "Plot Axes/es"): Agrega, elimina o edita los ejes.
- ![](/images/Plot_Series.svg) [Series](/Plot_Series/es "Plot Series/es"): Edita el estilo de las series y establece su título.
- ![](/images/Plot_Grid.svg) [Malla](/Plot_Grid/es "Plot Grid/es"): Muestra/oculta la malla.
- ![](/images/Plot_Legend.svg) [Leyenda](/Plot_Legend/es "Plot Legend/es"): Muestra/oculta la leyenda.
- ![](/images/Plot_Labels.svg) [Títulos](/Plot_Labels/es "Plot Labels/es"): Edita los títulos.
- ![](/images/Plot_Positions.svg) [Posiciones](/Plot_Positions/es "Plot Positions/es"): Posiciona los diferentes elementos, como títulos o leyenda.

## Programación

Siendo el módulo de graficado una capa encima de `matplotlib`, usted puede hacer uso libremente de todas las posibilidades de esta biblioteca. Acuda a la sección [Programación y macros](/Scripting_and_macros/es "Scripting and macros/es") para saber más.

## Tutorial

- [Tutorial básico de Plot](/Plot_Basic_tutorial/es "Plot Basic tutorial/es")
- [Tutorial de multi-ejes de Plot](/Plot_MultiAxes_tutorial/es "Plot MultiAxes tutorial/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Workbench/es&oldid=1374351>"
