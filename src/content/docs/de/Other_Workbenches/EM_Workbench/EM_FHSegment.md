---
title: EM FHSegment/de
---
|  |
| --- |
| EM FHSegment |
| Menu location |
| EM → FHSegment |
| Workbenches |
| [EM](/EM_Workbench "EM Workbench") |
| Default shortcut |
| E S |
| Introduced in version |
| 0.17 |
| See also |
| [EM FHNode](/EM_FHNode "EM FHNode"), [EM FHPath](/EM_FHPath "EM FHPath") |
|  |

## Beschreibung

The FHSegment tool inserts a FastHenry segment object.

![](/images/EM_FHSegment_Example.png)

FastHenry FHSegment

## Anwendung

The FHSegment object can be based on the position of a ![](/images/Draft_Line.svg) [Draft Line](/Draft_Line "Draft Line") object, or on two existing ![](/images/EM_FHNode.svg) [FHNodes](/EM_FHNode "EM FHNode") that will be the FHSegment end points, or you can select the 3D location of the two end points, where two additional FHNodes will be created.

1. Press the ![](/images/EM_FHSegment.svg) [EM FHSegment](/EM_FHSegment "EM FHSegment") button, or press E then S keys.
2. Click a first point on the 3D view, or type coordinates and press the ![](/images/Draft_AddPoint.svg) add point button.
3. Click a second point on the 3D view, or type coordinates and press the ![](/images/Draft_AddPoint.svg) add point button.

Alternatively, you can also:

1. Select two [FHNode](/EM_FHNode "EM FHNode") objects
2. Press the ![](/images/EM_FHSegment.svg) [EM FHSegment](/EM_FHSegment "EM FHSegment") button, or press E then S keys.

Or:

1. Select one or multiple [Draft Line](/Draft_Line "Draft Line") object(s)
2. Press the ![](/images/EM_FHSegment.svg) [EM FHSegment](/EM_FHSegment "EM FHSegment") button, or press E then S keys. As many FHSegment objects will be created as the Draft Line objects.

### Remarks:

* If you create a FHSegment object based on a Draft Line object, you can NOT freely move the FHSegment or the end point FHNodes. The FHSegment will always be constrained to the base object. To change the position of the FHSegment, or of its end point, apply the change to the underlying Draft Line object (the base object is hidden by default, you can show it again by selecting the object in the tree and pressing Space.

* If the FHSegment object has no base object `baseobj`, its position is controlled by the starting and ending FHNodes. You cannot change a FHSegment position by changing its Placement.

## Optionen

* To enter coordinates manually, simply enter the numbers, then press Enter between each X, Y and Z component. You can press the ![](/images/Draft_AddPoint.svg) add point button when you have the desired values to insert the point.
* Press Esc or the Close button to abort the current command.

## Eigenschaften

* Daten**Base**: The base object this component is built upon (a [Draft Line](/Draft_Line "Draft Line"))
* Daten**NodeStart**: the starting [FHNode](/EM_FHNode "EM FHNode")
* Daten**NodeEnd**: the ending [FHNode](/EM_FHNode "EM FHNode")
* Daten**Width**: the FHSegment width ('w' segment parameter in FastHenry)
* Daten**Height**: the FHSegment height ('h' segment parameter in FastHenry)
* Daten**Sigma**: the FHSegment conductivity ('sigma' segment parameter in FastHenry)
* Daten**ww**: the FHSegment cross-section direction along the width ('wx', 'wy', 'wz' segment parameter in FastHenry)
* Daten**nhinc**: the Number of filaments in the height direction ('nhinc' segment parameter in FastHenry)
* Daten**nwinc**: the Number of filaments in the width direction ('nwinc' segment parameter in FastHenry)
* Daten**rh**: the ratio of adjacent filaments in the height direction ('rh' segment parameter in FastHenry)
* Daten**rw**: the ratio of adjacent filaments in the width direction ('rw' segment parameter in FastHenry)

## Skripten

*Siehe auch:* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Objekt FHSegment kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
segment = makeFHSegment(baseobj=None, nodeStart=None, nodeEnd=None, width=None, height=None, name='FHSegment')

```

* Creates a `FHSegment` object.
* `baseobj` is the Draft Line object that can be used as base for the FHSegment. If `nodeStart` and `nodeEnd` are specified, they have priority over the `baseobj`, and `baseobj` is ignored.
* `nodeStart` is the segment starting node [FHNode](/EM_FHNode "EM FHNode") object.
* `nodeEnd` is the segment ending node [FHNode](/EM_FHNode "EM FHNode") object.
* `width` is the segment width. Defaults to `EMFHSEGMENT_DEF_SEGWIDTH`.
* `height` is the segment height. Defaults to `EMFHSEGMENT_DEF_SEGHEIGHT`.
* `name` is the name of the object

Beispiel:

```
import FreeCAD, EM

fhnode1 = EM.makeFHNode(X=1.0,Y=0,Z=0)
fhnode2 = EM.makeFHNode(X=0,Y=1.0,Z=0)

fhsegment = EM.makeFHSegment(nodeStart=fhnode1, nodeEnd=fhnode2)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHSegment/de&oldid=1340708>"