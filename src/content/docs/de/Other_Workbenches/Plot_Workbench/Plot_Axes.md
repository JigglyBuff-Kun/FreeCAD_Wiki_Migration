---
title: Plot Axes/de
---
|  |
| --- |
| Plot Axes |
| Menu location |
| Plot → Configure axes |
| Workbenches |
| [Plot](/Plot_Workbench "Plot Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Beschreibung

The standard plot module already provides a basic tool to control the plot axes ![](/images/Matplotlib_edit_subplot.png). But that tool is clearly insufficient when multi-axes plots have to be handled, as is the case in the [Multi-axes plot tutorial](/Plot_MultiAxes_tutorial "Plot MultiAxes tutorial"). To overcome that limitation you can install the ![](/images/Workbench_Plot.svg) [Plot Workbench](/Plot_Workbench "Plot Workbench") using the [Add-on manager](/Std_AddonMgr "Std AddonMgr"), so a more complete tool to edit the plot axes will be available.

![](/images/Plot_MultiAxes_Example.png)

## Anwendung

Select the plot tab that you want to edit, and run this tool.

It is strongly recommended to start scaling the whole plot so you can be sure it will fit into the available space. To this end enable the option **Apply to all axes**

![Apply to all axes](/images/Apply_To_All_Axes.png)

Apply to all axes selector

After that you can scale the whole plot to fit it in the visible area, using the four sliders

![Plot area controlling sliders](/images/Plot_Axes_Sliders.png)

Sliders to scale the plot

When you are happy with the general size of the plot, you can deselect **Apply to all axes**, and fine tune each set of axes independently. Just select the set of axes you want to edit at the top

![Plot axes selector](/images/Plot_Axes_Active.png)

Selector for the set of axes to de edited

You can again use the sliders to control the area covered by that subplot. You can also control where the ticks and titles are placed for both X axis and Y axis

![Plot axes position editor](/images/Plot_Axes_Position.png)

Editor of positions for the selected axes

More specifically, you can set whether X axis is shown below or above the plot, as well as whether Y axis is shown at the left or at the right of the plot. You can even set the offset of both axis with respect to the plot baseline.

Finally you can set the minimum and maximum values considered for each set of axes, the so-called zoom

![Plot zoom editor](/images/Plot_Axes_Zoom.png)

Editor of minimum and maximum considered values

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Axes/de&oldid=1049359>"