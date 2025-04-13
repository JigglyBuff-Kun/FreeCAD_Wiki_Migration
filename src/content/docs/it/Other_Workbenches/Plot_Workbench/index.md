---
title: Ambiente Plot
---

![](/images/Workbench_Plot.svg)

L'icona dell'ambiente Plot

## Introduzione

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

### Strumenti

If you decide to install the ![](/images/Workbench_Plot.svg) [Plot Workbench](/Plot_Workbench "Plot Workbench") using the [Add-on manager](/Std_AddonMgr "Std AddonMgr"), you will have the following tools available to manage the plots created with the module:

- ![](/images/Plot_Save.svg) [Salva grafico](/Plot_Save/it "Plot Save/it"): consente di salvare il grafico in diversi formati. È possibile selezionare il formato di output e anche la risoluzione.
- ![](/images/Plot_Axes.svg) [Assi](/Plot_Axes/it "Plot Axes/it"): aggiunge, rimuove o modifica gli assi del grafico.
- ![](/images/Plot_Series.svg) [Serie](/Plot_Series/it "Plot Series/it"): modifica il titolo e lo stile della serie.
- ![](/images/Plot_Grid.svg) [Griglia](/Plot_Grid/it "Plot Grid/it"): mostra o nasconde la griglia.
- ![](/images/Plot_Legend.svg) [Legenda](/Plot_Legend/it "Plot Legend/it"): mostra o nasconde la legenda.
- ![](/images/Plot_Labels.svg) [Etichette](/Plot_Labels/it "Plot Labels/it"): edita le etichette.
- ![](/images/Plot_Positions.svg) [Posizioni](/Plot_Positions/it "Plot Positions/it"): posiziona i vari elementi, come le etichette o la legenda.

## Scripting

### Script

Poiché il modulo Grafico è costruito su `matplotlib`, si è liberi di utilizzare tutti i comandi matplotlib per le istanze del grafico. Consultare la sezione [Scripting and macros](/Scripting_and_macros "Scripting and macros") per vedere degli esempi.

## Tutorial

### Tutorial

- [Guida di base per il modulo Grafico](/Plot_Basic_tutorial/it "Plot Basic tutorial/it") di FreeCAD
- [Guida ai grafici MultiAsse](/Plot_MultiAxes_tutorial/it "Plot MultiAxes tutorial/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Workbench/it&oldid=1457713>"
