---
title: EM FHPlane
---
|  |
| --- |
| EM FHPlane |
| Posizione nel menu |
| EM → FHPlane |
| Ambiente |
| [EM](/EM_Workbench/it "EM Workbench/it") (add-on) |
| Avvio veloce |
| E P |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [EM FHNode](/EM_FHNode/it "EM FHNode/it"), [EM FHPlaneHole](/EM_FHPlaneHole/it "EM FHPlaneHole/it"), [EM FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole/it "EM FHPlaneAddRemoveNodeHole/it") |
|  |

## Descrizione

The FHPlane tool inserts a FastHenry uniform conductive plane object.

![](/images/EM_FHPlane_Example.png)

FastHenry FHPlane

## Utilizzo

The FHPlane object must be based on another object, that can be either a [Draft Rectangle](/Draft_Rectangle "Draft Rectangle") or a [Part Box](/Part_Box "Part Box") object. In case you based your FHPlane on a [Part Box](/Part_Box "Part Box") object, the Thickness parameter will be inherited from the Box Height value.

1. Create and select a ![](/images/Draft_Rectangle.svg) [Draft Rectangle](/Draft_Rectangle "Draft Rectangle") or a ![](/images/Part_Box.svg) [Part Box](/Part_Box "Part Box") object
2. Press the ![](/images/EM_FHPlane.svg) [EM FHPlane](/EM_FHPlane "EM FHPlane") button, or press E then P keys.

In addition, you can also select together with the base object (the [Draft Rectangle](/Draft_Rectangle "Draft Rectangle") or the [Part Box](/Part_Box "Part Box")) also one or more [EM FHNode](/EM_FHNode "EM FHNode") and / or one or more [EM FHPlaneHole](/EM_FHPlaneHole "EM FHPlaneHole") objects, that will be adopted by the FHPlane:

1. Create a [Draft Rectangle](/Draft_Rectangle "Draft Rectangle") or a [Part Box](/Part_Box "Part Box") object
2. Create one or more ![](/images/EM_FHNode.svg) [EM FHNode](/EM_FHNode "EM FHNode") objects
3. Create one or more ![](/images/EM_FHPlaneHole.svg) [EM FHPlaneHole](/EM_FHPlaneHole "EM FHPlaneHole") objects
4. Select the base object, the FHNode objects and the FHPlaneHole objects (for this multiple selection, you can point and click the objects in the [tree view](/Tree_view "Tree view") or in the [3D view](/3D_view "3D view"), and to perform a multiple selection just keep the CTRL key pressed while selecting).
5. Press the ![](/images/EM_FHPlane.svg) [EM FHPlane](/EM_FHPlane "EM FHPlane") button, or press E then P keys.

### Remarks:

A FastHenry uniform conductive plane object is formed by laying down a gird of nodes (hereafter called 'internal nodes') and connecting the nodes with a 2D mesh of segments in the (relative) X and Y directions. Holes are formed in the plane by removing some internal nodes, and hence also the segments that connects to those nodes.
For more details on FastHenry uniform conductive planes, you should review the [FastHenry user's guide](https://www.fastfieldsolvers.com/documentation.htm).

* As the FHPlane object is based on a Draft Rectangle or Part Box object, you can NOT freely move the FHPlane. The FHPlane will always be constrained to the base object. To change the position of the FHPlane, apply the change to the underlying base object (the base object is hidden by default, you can show it again by selecting the object in the tree and pressing Space. The origin of the FHPlane is the origin of the base object.

* When the FHNode objects are adopted by the FHPlane, their (X, Y, Z) coordinates will be made relative to the FHPlane origin (so while the FHNode will retain the same position in space, the relative coordinates (X, Y, Z) of the FHNode will be modified to be relative to the FHPlane origin). Also, once adopted, the Z coordinate of the FHNode will be reset to zero (as the coordinates are relative to the FHPlane, the Z coordinate is the height of the object from the plane). For this reason, the node will be visible only from the bottom of the FHPlane, or changing the transparency of the FHPlane to see the FHNodes through, or hiding the FHPlane altogether. Moreover, to show that the FHNode now belongs to the FHPlane, the color of the FHNode is changed.

* When the FHPlaneHole objects are adopted by the FHPlane, their (X, Y, Z) coordinates will be made relative to the FHPlane origin (so while the FHPlaneHole will retain the same position in space, the relative coordinates (X, Y, Z) of the FHPlaneHole will be modified to be relative to the FHPlane origin). Also, once adopted, the Z coordinate of the FHPlaneHole will be reset to zero (as the coordinates are relative to the FHPlane, the Z coordinate is the height of the object from the plane). For this reason, the node will be visible only from the bottom of the FHPlane, or changing the transparency of the FHPlane to see the FHNodes through, or hiding the FHPlane altogether. Moreover, to show that the FHNode now belongs to the FHPlane, the color of the FHNode is changed.

* If you want to remove the FHNodes or the FHPlaneHoles from the FHPlane later on, you can use the [EM FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole "EM FHPlaneAddRemoveNodeHole") command.

## Properties

* Dati**Base**: The base object this component is built upon (a [Draft Rectangle](/Draft_Rectangle "Draft Rectangle") or a [Part Box](/Part_Box "Part Box"))
* Dati**Thickness**: the FHPlane thickness ('thick' plane parameter in FastHenry). If the FHPlane is based on a [Part Box](/Part_Box "Part Box"), this value is inherited from the Part Box Height parameter
* Dati**seg1**: the Number of segments along the length direction ('seg1' plane parameter in FastHenry)
* Dati**seg2**: the Number of segments along the width direction ('seg2' plane parameter in FastHenry)
* Dati**nhinc**: the Number of filaments the plane thickness ('nhinc' plane parameter in FastHenry)
* Dati**rh**: the ratio of adjacent filaments along the thickness ('rh' plane parameter in FastHenry)
* Dati**Sigma**: the FHPlane conductivity ('sigma' plane parameter in FastHenry)
* Dati**segwid1**: the Width of segments along the plane length direction ('segwid1' plane parameter in FastHenry)
* Dati**segwid2**: the Width of segments along the plane width direction ('segwid2' plane parameter in FastHenry)
* Dati**Nodes**: the list of FHNode objects for connections to the plane
* Dati**Holes**: the list of FHPlaneHoles in the plane
* Dati**FineMesh**: specifies if this the plane fine mesh is shown (i.e. composing segments)
* Dati**ShowNodes**: show the internal node grid supporting the plane (i.e. internal nodes)

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The FHPlane object can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
plane = makeFHPlane(baseobj=None, thickness=None, seg1=None, seg2=None, nodes=[], holes=[], name='FHPlane')

```

* Creates a `FHPlane` object.
* `baseobj` is the Draft Rectangle object or Part Box object that can be used as base for the FHPlane. If no `baseobj` is given, the user must assign a base object later on, to be able to use this object.
* `thickness` is the plane thickness. If the `baseobj` is a Part Box, this parameter is ignored, and the Part Box height is used instead. Defaults to `EMFHPLANE_DEF_THICKNESS`.
* `seg1` is an integer defining the number of segments along the x dimension of the plane ('seg1' parameter in FastHenry)
* `seg2` is an integer defining the number of segments along the y dimension of the plane ('seg2' parameter in FastHenry)
* `nodes` is an array of FHNode objects, specifying the nodes that will be adopted by the plane.
* `holes` is an array of FHPlaneHole objects, specifying the holes that will be adopted by the plane.
* `name` is the name of the object

Example:

```
import FreeCAD, Draft, EM

pl = FreeCAD.Placement()
pl.Rotation.Q = (0.0,0.0,0.0,1.0)
pl.Base = FreeCAD.Vector(1.0,1.0,0.0)
rec = Draft.makeRectangle(length=10.0,height=5.0,placement=pl,face=True,support=None)

fhnode1 = EM.makeFHNode(X=1.0,Y=3.5,Z=0)
fhnode2 = EM.makeFHNode(X=8.0,Y=3.5,Z=0)

hole = EM.makeFHPlaneHole(X=6.0,Y=3.5,Z=0.0)

fhplane = EM.makeFHPlane(rect, thickness=1.0, seg1=15, seg2=15, nodes=[fhnode1, fhnode2], holes=[hole])

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHPlane/it&oldid=1078804>"