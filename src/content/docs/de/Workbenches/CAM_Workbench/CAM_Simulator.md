---
title: CAM Simulator
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| CAM Simulator |
| Menu location |
| CAM → CAM Simulator |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| P M |
| Introduced in version |
| - |
| See also |
| [CAM Inspect](/CAM_Inspect "CAM Inspect") |
|  |

## Beschreibung

The ![](/images/CAM_Simulator.svg) [Simulator](/CAM_Simulator "CAM Simulator") tool allows Simulation of the CAM Job by sweeping 3D Models of the Tools used in each Operation, along the G-Code paths, subtracting material from the Stock, where the stock and tool overlap, providing visualization of the Job. This allows detection and isolation of errors prior to running the Job on a mill.

![](/images/Path-Simulation.gif)

## Anwendung

1. There are several ways to invoke the command:
   * Press the ![](/images/CAM_Simulator.svg) [CAM Simulator](/CAM_Simulator "CAM Simulator") button.
   * Select the **CAM → ![](/images/CAM_Simulator.svg) CAM Simulator** option from the menu.
   * Use the keyboard shortcut: P then M.
2. De-select any **Operations** that are not to be simulated
3. Tune the **Speed** and **Accuracy** settings.
4. Select the **Job** for simulation from the drop menu.
5. Use the **Path Simulator** toolbar to invoke different actions:
   * Press the ![](/images/CAM_BPlay.svg) (Play) button to play or playback an animation of the operations.
   * Press the ![](/images/CAM_BFastForward.svg) (Fast Forward) button to increase the speed substantially (in order to quickly review complicated paths).
   * Press the ![](/images/CAM_BPause.svg) (Pause) button to pause animation for troubleshooting purposes
   * Press the ![](/images/CAM_BStep.svg) (Single-Step) button for slowing down the animation, this functionality helps troubleshooting and resolving specific cuts and/or movements.
   * Press the ![](/images/CAM_BStop.svg) (Stop) button to stop the animation.
6. Press the Cancel button will remove the stock created for the simulation. If you press OK this object will be kept in your Job.

## Eigenschaften

* Daten**Playback Speed**: The speed of the simulation playback, in G-code lines/second
* Daten**Accuracy**: The accuracy of the simulation expressed as a percentage indicating the simulations deviation from the Job. For interactive simulation, reducing accuracy to 0.3 works much faster.
* Daten**Job**: The Job used as the basis of the simulation
* Daten**Operation List**: The list of Operations selected for inclusion in the simulation.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Simulator/de&oldid=1487343>"