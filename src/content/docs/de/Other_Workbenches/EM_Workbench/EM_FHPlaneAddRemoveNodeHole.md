---
title: EM FHPlaneAddRemoveNodeHole/de
---
|  |
| --- |
| EM FHPlaneAddRemoveNodeHole |
| Menu location |
| EM → FHPlaneAddRemoveNodeHole |
| Workbenches |
| [EM](/EM_Workbench "EM Workbench") |
| Default shortcut |
| E A |
| Introduced in version |
| 0.17 |
| See also |
| [EM FHPlane](/EM_FHPlane "EM FHPlane"), [EM FHNode](/EM_FHNode "EM FHNode"), [EM FHPlaneHole](/EM_FHPlaneHole "EM FHPlaneHole") |
|  |

## Beschreibung

Das Werkzeug FHPlaneAddRemoveNodeHole fügt die Objekte FHNode oder FHPlaneHole zu einem FHPlane-Objekt hinzu oder entfernt sie aus ihm.

![](/images/EM_FHPlaneAddRemoveNodeHole_Example.png)

Nodes added (blue) and removed (red) from a FHPlane, and a FHPlaneHole removed from the FHPlane (not cutting a hole in the plane)

## Anwendung

To remove one or multiple FHNode objects or FHPlaneHole objects from a FHPlane:

1. Select all the [EM FHNode](/EM_FHNode "EM FHNode") objects or [EM FHPlaneHole](/EM_FHPlaneHole "EM FHPlaneHole") objects that you want to remove from the FHPlane (note that you need to expand the list of children of the FHPlane if you want to select these object from the [tree view](/Tree_view "Tree view") instead of from the current [3D view](/3D_view "3D view")).
2. Press the ![](/images/EM_FHPlaneAddRemoveNodeHole.svg) [EM FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole "EM FHPlaneAddRemoveNodeHole") button, or press E then A keys.

To insert one or multiple FHNode objects or FHPlaneHole objects into a FHPlane:

1. Select the [EM FHPlane](/EM_FHPlane "EM FHPlane") and all the [EM FHNode](/EM_FHNode "EM FHNode") objects or [EM FHPlaneHole](/EM_FHPlaneHole "EM FHPlaneHole") objects that you want to insert in the FHPlane.
2. Press the ![](/images/EM_FHPlaneAddRemoveNodeHole.svg) [EM FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole "EM FHPlaneAddRemoveNodeHole") button, or press E then A keys.

### Remarks

You can also remove FHNode objects or FHPlaneHole objects from a FHPlane, and insert one or multiple FHNode objects or FHPlaneHole objects into a FHPlane at the same time. All FHNode objects or FHPlaneHole objects that already belong to a FHPlane will be removed from that FHPlane, while the others will be added to the selected FHPlane.

## Skripten

*Siehe auch:* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

To add or remove FHNode or FHPlaneHole objects from a FHPlane via Python scripting, just add or remove the objects from the relevant properties of the FHPlane object. The PropertyList is monitored for changes, so the FHNode or FHPlaneHole will be handled as expected (change of color, etc.)

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHPlaneAddRemoveNodeHole/de&oldid=1340649>"