---
title: EM FHPlaneHole/de
---

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EM FHPlaneHole                                                                                                                                                         |
| Menu location                                                                                                                                                          |
| EM → FHPlaneHole                                                                                                                                                       |
| Workbenches                                                                                                                                                            |
| [EM](/EM_Workbench "EM Workbench")                                                                                                                                     |
| Default shortcut                                                                                                                                                       |
| E H                                                                                                                                                                    |
| Introduced in version                                                                                                                                                  |
| 0.17                                                                                                                                                                   |
| See also                                                                                                                                                               |
| [EM FHPlane](/EM_FHPlane "EM FHPlane"), [EM FHNode](/EM_FHNode "EM FHNode"), [EM FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole "EM FHPlaneAddRemoveNodeHole") |
|                                                                                                                                                                        |

## Beschreibung

Das Werkzeug FHPlaneHole fügt ein Objekt eines Loches in einer Ebene (plane hole object) ein, das ein FastHenry-Objekt eines Loches in einer Ebene mit gleichförmiger Leitfähigkeit repräsentiert.

![](/images/EM_point_FHPlaneHole_Example.png)

FastHenry Point FHPlaneHole

![](/images/EM_rect_FHPlaneHole_Example.png)

FastHenry Rectangle FHPlaneHole

![](/images/EM_circle_FHPlaneHole_Example.png)

FastHenry Circle FHPlaneHole

## Anwendung

The FHPlaneHole object can be based on the position of a [Draft Point](/Draft_Point "Draft Point") object, or you can select the 3D location of the FHPlaneHole.

1. Press the ![](/images/EM_FHPlaneHole.svg) [EM FHPlaneHole](/EM_FHPlaneHole "EM FHPlaneHole") button, or press E then H keys.
2. Click a point on the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) add point button.

Alternatively, you can also:

1. Select one or multiple ![](/images/Draft_Point.svg) [Draft Point](/Draft_Point "Draft Point") object(s)
2. Press the ![](/images/EM_FHPlaneHole.svg) [EM FHPlaneHole](/EM_FHPlaneHole "EM FHPlaneHole") button, or press E then H keys. As many FHPlaneHole objects will be created as the Draft Point objects, at the same coordinates of the Draft Points.

### Remarks

- ![](/images/EM_FHPlaneHole.svg) FHPlaneHole objects have no meaning if they are not part of a ![](/images/EM_FHPlane.svg) [FHPlane](/EM_FHPlane "EM FHPlane"). To adopt a FHPlaneHole within a FHPlane, use the ![](/images/EM_FHPlaneAddRemoveNodeHole.svg) [EM FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole "EM FHPlaneAddRemoveNodeHole") command, or select the FHPlaneHole at [FHPlane](/EM_FHPlane "EM FHPlane") creation. To remove a FHPlaneHole from a FHPlane, you can use the [EM FHPlaneAddRemoveNodeHole](/EM_FHPlaneAddRemoveNodeHole "EM FHPlaneAddRemoveNodeHole") command.

* FHPlaneHole objects represent FastHenry plane holes, and therefore follow the same rules of the uniform conductive plane holes. In particular, holes are created removing the internal plane nodes from the plane node array, before constructing the segment mesh. You can enable the view of the internal FHPlane nodes by turning the [FHPlane](/EM_FHPlane "EM FHPlane") Daten**ShowNodes** property on. Three types of FHPlaneHoles exist, and can be selected by changing the Daten**Type** FHPlaneNode property.

1. Point hole: Removes the single FHPlane internal node closer to the position of the FHPlaneHole. The Point FHPlaneHole is shown as a single vertex (small dot), to help to visualize its position; see the FastHenry Point FHPlaneHole picture above.
2. Rect hole: Removes all the FHPlane internal nodes that are within as well as close to the area defined by the base point of the FHPlaneNode and the Daten**Length** and Daten**Width** properties. This means that not only the internal nodes strictly within the rectangular area defined by the FHPlaneHole are removed, but also the internal nodes outside the rectangle, but within half of the internal node - node distance. The Rect FHPlaneHole is shown as a 2D rectangle, to help to visualize its position and area; see the FastHenry Rect FHPlaneHole picture above.
3. Circle hole: Removes all the FHPlane internal nodes that are within as well as close to the area defined by the base point of the FHPlaneNode and the Daten**Radius** property. This means that not only the internal nodes strictly within the circular area defined by the FHPlaneHole are removed, but also the internal nodes outside the circle, but within half of the internal node - node distance. The Circle FHPlaneHole is shown as a 2D circle, to help to visualize its position and area; see the FastHenry Circle FHPlaneHole picture above. Note that if the FHPlane discretization as specified by the Daten**seg1** and Daten**seg1** FHPlane properties is coarse, the shape of the circular hole can not resemble a circle. This is normal, and it is how FastHenry handles circular holes, not a defect of the ElectroMagnetic Workbench for FastHenry.

## Optionen

- To enter coordinates manually, simply enter the numbers, then press Enter between each X, Y and Z component. You can press the ![](/images/Draft_AddPoint.svg) add point button when you have the desired values to insert the point.
- Press Esc or the Close button to abort the current command.

## Eigenschaften

- Daten**X**: the X coordinate of the FHPlaneHole
- Daten**Y**: the Y coordinate of the FHPlaneHole
- Daten**Z**: the Z coordinate of the FHPlaneHole
- Daten**Length**: the Rectangular hole length (along x from FHPlaneHole base point)
- Daten**Width**: the Rectangular hole width (along y from FHPlaneHole base point)
- Daten**Radius**: the Circular hole radius
- Daten**Type**: the type of FastHenry plane hole. Can be "Point", "Rect" or "Circle".

## Skripten

_Siehe auch:_ [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Objekt FHPlaneHole kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
hole = makeFHPlaneHole(baseobj=None, X=0.0, Y=0.0, Z=0.0, holetype=None, length=None, width=None, radius=None, name='FHPlaneHole')

```

- Creates a `FHPlaneHole` object.
- `baseobj` is the Draft Point object whose position can be used as base for the FHPlaneHole. It has priority over `X`, `Y`, `Z`. If no `baseobj` is given, `X`,`Y`,`Z` are used as coordinates.
- `X` x coordinate of the hole, in absolute coordinate system.
- `Y` y coordinate of the hole, in absolute coordinate system.
- `Z` z coordinate of the hole, in absolute coordinate system.
- `holetype` is the type of hole. Allowed values are: "Point", "Rect", "Circle"
- `length` is the length of the hole (along the x dimension), in case of rectangular "Rect" hole.
- `width` is the width of the hole (along the y dimension), in case of rectangular "Rect" hole.
- `radius` is the radius of the hole, in case of circular "Circle" hole.
- `name` is the name of the object

The placement of the FHPlaneHole can be changed by modifying its `Placement` property, or changing the `X`,`Y`,`Z` properties individually. Changing `X`,`Y`,`Z` modifies the node position in the relative coordinate system of the `Placement`.

Additionally, the \_FHPlaneHole class exposes these methods. The \_FHPlaneHole class can be accessed through the FHPlaneHole object Proxy (e.g. fhhole.Proxy).

```
pos = getAbsCoord()

```

- Get a `FreeCAD.Vector` containing the hole coordinates in the absolute reference system

```
pos = getRelCoord()

```

- Get a `FreeCAD.Vector` containing the hole coordinates relative to the FHPlaneHole Placement

```
pos = setRelCoord(rel_coord, placement=None)

```

- Sets the hole position relative to the placement
- `rel_coord` is a FreeCAD.Vector containing the hole coordinates relative to the FHPlaneHole Placement
- `placement` is a new FHPlaneHole placement. If `None`, the placement is not changed

```
pos = setAbsCoord(abs_coord, placement=None)

```

- Sets the absolute hole position, considering the object placement, and in case forcing a new placement
- `abs_coord` is a FreeCAD.Vector containing the hole coordinates in the absolute reference system
- `placement` is a new FHPlaneHole placement. If `None`, the placement is not changed

Beispiel:

```
import FreeCAD, EM

fhhole = EM.makeFHPlaneHole(X=1.0,Y=1.0,Z=0.0,holetype="Rect",length=1.0,width=2.0)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHPlaneHole/de&oldid=1340676>"
