---
title: Arbeitsbereich Plot
---

![](/images/Workbench_Plot.svg)

Druck Arbeitsbereichsymbol

## Einführung

FreeCAD is able to perform plots using the [matplotlib](https://matplotlib.org/) [Python](/Python "Python") library. A module is provided to this end, as an external add-on in version 0.19 and as a core component from version 0.20 on. Older versions of FreeCAD are not covered in this documentation.

The produced plots offer the standard [matplotlib](https://matplotlib.org/) tools to edit and save. On top of that, a ![](/images/Workbench_Plot.svg) [Plot Workbench](/Plot_Workbench "Plot Workbench") is provided as an external add-on offering more complete tools to edit the plot and save it. The add-on can be installed with the [Add-on manager](/Std_AddonMgr "Std AddonMgr").

## Modul

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

## Arbeitsbereichswerkzeuge

If you decide to install the ![](/images/Workbench_Plot.svg) [Plot Workbench](/Plot_Workbench "Plot Workbench") using the [Add-on manager](/Std_AddonMgr "Std AddonMgr"), you will have the following tools available to manage the plots created with the module:

- ![](/images/Plot_Save.svg) [Save plot](/Plot_Save "Plot Save"): Saves the plot in several formats. You can select the output size and resolution too.
- ![](/images/Plot_Axes.svg) [Axes](/Plot_Axes "Plot Axes"): Add, remove or edit plot axes.
- ![](/images/Plot_Series.svg) [Series](/Plot_Series "Plot Series"): Edit series title and styling.
- ![](/images/Plot_Grid.svg) [Grid](/Plot_Grid "Plot Grid"): Show/hide grid.
- ![](/images/Plot_Legend.svg) [Legend](/Plot_Legend "Plot Legend"): Show/hide legend.
- ![](/images/Plot_Labels.svg) [Labels](/Plot_Labels "Plot Labels"): Edit labels.
- ![](/images/Plot_Positions.svg) [Positions](/Plot_Positions "Plot Positions"): Set elements positions.

## Scripting

## Skripten

Da der Plot Arbeitsbereich eine Schicht über der `matplotlib` ist, kannst du jede Funktion aus dieser Bibliothek auf Plot Instanzen verwenden. Siehe [Skripten und Makros](/Scripting_and_macros/de "Scripting and macros/de") für Beispiele.

## Tutorial

## Tutorium

- [Plot Basic tutorial/de](/Plot_Basic_tutorial/de "Plot Basic tutorial/de")
- [Plot MultiAxes tutorial/de](/Plot_MultiAxes_tutorial/de "Plot MultiAxes tutorial/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Workbench/de&oldid=1157577>"
