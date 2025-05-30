---
title: Fasteners Lochsenkung
---
:::caution
Dieser Befehl ist veraltet und steht in0.5.13 und neuernicht mehr zur Verfügung. Stattdessen sollte das WerkzeugPartDesign Bohrungeingesetzt werden.
:::

|  |
| --- |
| Fasteners Lochsenkung |
| Menüeintrag |
| Fasteners → Make countersunk |
| Arbeitsbereich |
| [Fasteners](/Fasteners_Workbench/de "Fasteners Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Fasteners_ChamferHole.svg) **Fasteners Lochsenkung** erstellt eine Senkung an einem Loch für Senkschrauben.

![](/images/Fasteners_ChamferHole_Example.png)

Löcher mit Senkung für Senkschrauben

## Anwendung

1. The command can detect screw diameters automatically. Holes must have the correct diameter for this to work. For example an M5 screw requires a 5mm pass hole or a 4.2mm tap hole. The ![](/images/Fasteners_ScrewCalculator.svg) [Fasteners ScrewCalculator](/Fasteners_ScrewCalculator "Fasteners ScrewCalculator") command can be used to determine tap hole diameters.
2. Select a part with circular holes.
3. There are several ways to invoke the command:
   * Press the ![](/images/Fasteners_ChamferHole.svg) [Make countersunk](/Fasteners_ChamferHole "Fasteners ChamferHole") button.
   * Select the **Fasteners → ![](/images/Fasteners_ChamferHole.svg) Make countersunk** option from the menu.
4. The **Chamfer holes for countersunk screws** task panel opens.
5. The **Edges to chamfer** list shows all circular edges of the selected part.
6. Select the edges you want to chamfer by doing one of the following:
   * Click individual circular edges or faces with circular edges in the [3D view](/3D_view "3D view"):
     + There is no need to hold down the Ctrl key.
     + Each selected edge is checked in the **Edges to chamfer** list.
     + The screw diameter for each edge is detected automatically.
     + Edges cannot be deselected in the [3D view](/3D_view "3D view").
   * Select or deselect edges by checking or unchecking them in the **Edges to chamfer** list:
     + In this case the screw diameter is not detected automatically.
7. Optionally change the screw diameter of individual edges in the **Edges to chamfer** list by double-clicking their **Diameter** field, and selecting a new value from the dropdown list that appears.
8. Optionally change the screw diameter of all selected edges by selecting a new value from the **Diameter** dropdown list below the **Edges to chamfer** list.
9. Optionally specify a **Screw type**.
10. Press the OK button.
11. A Countersunk object with a chamfered recess for each selected edge is created.
12. Optionally attach screws. See [Fasteners Workbench](/Fasteners_Workbench#Usage "Fasteners Workbench").

## Hinweise

* Countersunk objects are parametric. An existing Countersunk object can be edited by double-clicking it in the [Tree view](/Tree_view "Tree view"). The **Chamfer holes for countersunk screws** task panel will open. Circular edges can be added or removed, and the parameters of edges can be changed.

Retrieved from "<http://wiki.freecad.org/index.php?title=Fasteners_ChamferHole/de&oldid=1395395>"