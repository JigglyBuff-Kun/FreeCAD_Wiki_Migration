---
title: Modulul Plotare
---

![](/images/Workbench_Plot.svg)

Plot workbench icon

## Introducere

FreeCAD is able to perform plots using the [matplotlib](https://matplotlib.org/) [Python](/Python "Python") library. A module is provided to this end, as an external add-on in version 0.19 and as a core component from version 0.20 on. Older versions of FreeCAD are not covered in this documentation.

The produced plots offer the standard [matplotlib](https://matplotlib.org/) tools to edit and save. On top of that, a ![](/images/Workbench_Plot.svg) [Plot Workbench](/Plot_Workbench "Plot Workbench") is provided as an external add-on offering more complete tools to edit the plot and save it. The add-on can be installed with the [Add-on manager](/Std_AddonMgr "Std AddonMgr").

## Module

The module can be invoked in a Python console or in a [macro](/Macros "Macros"). The first thing you must do is importing the module. In FreeCAD 0.19 you must first install the ![](/images/Workbench_Plot.svg) [Plot Workbench](/Plot_Workbench "Plot Workbench") using the [Add-on manager](/Std_AddonMgr "Std AddonMgr"), and then you can import Plot by typing:

```
from freecad.plot import Plot

```

Since FreeCAD 0.20 the plot module is already packaged with the program, so you don't need to install any add-on, but just type:

```
from FreeCAD.Plot import Plot

```

After that, you can plot a straight line from (0,0) to (1,2) just simply typing:

```
Plot.plot([0, 1], [0, 2])

```

You can find more complex examples in the [Plot Basic tutorial](/Plot_Basic_tutorial "Plot Basic tutorial") and the [Plot MultiAxes tutorial](/Plot_MultiAxes_tutorial "Plot MultiAxes tutorial").

## Instrumente

If you decide to install the ![](/images/Workbench_Plot.svg) [Plot Workbench](/Plot_Workbench "Plot Workbench") using the [Add-on manager](/Std_AddonMgr "Std AddonMgr"), you will have the following tools available to manage the plots created with the module:

- ![](/images/Plot_Save.png) [Save plot](/Plot_Save "Plot Save"): Salvează desenul/graficul în mai multe formate. Puteți selecta și dimensiunea de ieșire și rezoluția.
- ![](/images/Plot_Axes.png) [Axes](/Plot_Axes "Plot Axes"): Adăugați, eliminați sau editați axele desenelor/graficelor.
- ![](/images/Plot_Series.png) [Series](/Plot_Series "Plot Series"): Editează o serie de titluri și stiluri.
- ![](/images/Plot_Grid.png) [Grid](/Plot_Grid "Plot Grid"): Afișează/ascunde grila.
- ![](/images/Plot_Legend.png) [Legend](/Plot_Legend "Plot Legend"): Afișează /ascunde legenda.
- ![](/images/Plot_Labels.png) [Labels](/Plot_Labels "Plot Labels"): Editează etichetele.
- ![](/images/Plot_Positions.png) [Positions](/Plot_Positions "Plot Positions"): Setează elementele de poziție.

## Scripting

## Script-Programare

Deoarece Plot este un strat peste `matplotlib`, aveți libertatea de a folosi orice funcție din această bibliotecă peste instanțele de plotare. A se vedea [Scripting and macros](/Scripting_and_macros "Scripting and macros") pentru exemple.

## Tutorial

## Tutorial

- [Plot Basic tutorial](/Plot_Basic_tutorial "Plot Basic tutorial")
- [Plot MultiAxes tutorial](/Plot_MultiAxes_tutorial "Plot MultiAxes tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Workbench/ro&oldid=1157583>"
