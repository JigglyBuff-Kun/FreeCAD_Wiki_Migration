---
title: EM FHNode/de
---
|  |
| --- |
| EM FHNode |
| Menu location |
| EM → FHNode |
| Workbenches |
| [EM](/EM_Workbench "EM Workbench") |
| Default shortcut |
| E N |
| Introduced in version |
| 0.17 |
| See also |
| [EM FHSegment](/EM_FHSegment "EM FHSegment"), [EM FHPath](/EM_FHPath "EM FHPath"), [EM FHPlane](/EM_FHPlane "EM FHPlane"), [EM FHPlane Add/Remove Node/Hole](/EM_FHPlaneAddRemoveNodeHole "EM FHPlaneAddRemoveNodeHole"), [EM FHEquiv](/EM_FHEquiv "EM FHEquiv"), [EM FHPort](/EM_FHPort "EM FHPort") |
|  |

## Beschreibung

Das Werkzeug FHNode Fügt ein FastHenry-Knotenobjekt (FastHenry node object) ein.

![](/images/EM_FHNode_Example.png)

FastHenry FHNode

## Anwendung

The FHNode object can be based on the position of a [Draft Point](/Draft_Point "Draft Point") object, or you can select the 3D location of the FHNode.

1. Press the ![](/images/EM_FHNode.svg) [EM FHNode](/EM_FHNode "EM FHNode") button, or press E then N keys.
2. Click a point on the 3D view, or type coordinates and press the ![](/images/Draft_AddPoint.svg) add point button.

Alternatively, you can also:

1. Select one or multiple [Draft Point](/Draft_Point "Draft Point") object(s)
2. Press the ![](/images/EM_FHNode.svg) [EM FHNode](/EM_FHNode "EM FHNode") button, or press E then N keys. As many FHNodes will be created as the Draft Point objects, at the same coordinates of the Draft Points.

## Optionen

* To enter coordinates manually, simply enter the numbers, then press Enter between each X, Y and Z component. You can press the ![](/images/Draft_AddPoint.svg) add point button when you have the desired values to insert the point.
* Click the checkbox to toggle *continue* mode. If continue mode is on, the FHNode tool will restart after you place a node, allowing you to place another one without pressing the tool button again.
* Press Esc or the Close button to abort the current command.

## Eigenschaften

* Daten**X**: the X coordinate of the node
* Daten**Y**: the Y coordinate of the node
* Daten**Z**: the Z coordinate of the node

## Skripten

*Siehe auch:* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Objekt FHNode kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
node = makeFHNode(baseobj=None, X=0.0, Y=0.0, Z=0.0, color=None, size=None, name='FHNode')

```

* Creates a `FHNode` object.
* `baseobj` is the Draft Point object whose position can be used as base for the FHNode. It has priority over `X`, `Y`, `Z`. If no `baseobj` is given, `X`,`Y`,`Z` are used as coordinates.
* `X` x coordinate of the node, in absolute coordinate system.
* `Y` y coordinate of the node, in absolute coordinate system.
* `Z` z coordinate of the node, in absolute coordinate system.
* `color` is the node color, e.g. a tuple (1.0,0.0,0.0). Defaults to `EMFHNODE_DEF_NODECOLOR`.
* `size` is the node size. Defaults to `EMFHNODE_DEF_NODESIZE`.
* `name` is the name of the object

The placement of the FHNode can be changed by modifying its `Placement` property, or changing the `X`,`Y`,`Z` properties individually. Changing `X`,`Y`,`Z` modifies the node position in the relative coordinate system of the `Placement`.

Additionally, the \_FHNode class exposes these methods. The \_FHNode class can be accessed through the FHNode object Proxy (e.g. fhnode.Proxy).

```
pos = getAbsCoord()

```

* Get a `FreeCAD.Vector` containing the node coordinates in the absolute reference system

```
pos = getRelCoord()

```

* Get a `FreeCAD.Vector` containing the node coordinates relative to the FHNode Placement

```
pos = setRelCoord(rel_coord, placement=None)

```

* Sets the node position relative to the placement
* `rel_coord` is a FreeCAD.Vector containing the node coordinates relative to the FHNode Placement
* `placement` is a new FHNode placement. If `None`, the placement is not changed

```
pos = setAbsCoord(abs_coord, placement=None)

```

* Sets the absolute node position, considering the object placement, and in case forcing a new placement
* `abs_coord` is a FreeCAD.Vector containing the node coordinates in the absolute reference system
* `placement` is a new FHNode placement. If `None`, the placement is not changed

Beispiel:

```
import FreeCAD, EM

fhnode = EM.makeFHNode(X=1.0,Y=2.0,Z=0.0)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHNode/de&oldid=1340593>"