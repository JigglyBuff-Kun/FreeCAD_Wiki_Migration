---
title: Esempi di PartDesign
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Introduzione

A volte si ha bisogno di un suggerimento su quanto sia potente uno strumento, senza troppe spiegazioni.

Questa è una raccolta di esempi che possono essere realizzati con determinati strumenti. Per spiegazioni dettagliate vedere le descrizioni degli strumenti e cercare tutorial sul Web.

## Pad

![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") is a tool to create Pad objects, which are prismatic objects such as extrusion objects, cylinders, cones, cubes, wedges...

Each object is based on an outline (yellow), that defines the cross-section shape (preferably made with the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")).

The outline is dragged along a direction (extruded) to provide the object with a thickness or a length.  
By default it is the normal direction of the plane containing the outline (sketch plane). Optionally the direction can be altered by editing parameters in the properties panel or by selecting a separate straight line (white).

**Gallery**

### Prismatic Primitives

|  |  |  |
| --- | --- | --- |
| **Cylinder** | Cylinder | * Outline: **circle**. |
| **Cube** | Cube | * Outline: **square**. * Extrusion length: equals length of square edges. |
| **Cuboid** | Cuboid | * Outline: **rectangle**. |
| **Regular Prism** | Regular Prism | * Outline: **hexagon**. |
| **Wedge** | Wedge | * Outline: **triangle**. |

### Prismatic Profiles

|  |  |  |
| --- | --- | --- |
| **L-profile** | L-profile | * Outline: **L** shape. |
| **C-profile** | C-profile | * Outline: **C** shape. |
| **Z-profile** | Z-profile | * Outline: **Z** shape. |
| **T-profile** | T-profile | * Outline: **T** shape. |
| **Double-T-profile** | Double-T-profile | * Outline: **H** shape, with flange width < flange offset. |
| **H-profile** | H-profile | * Outline: **H** shape, with width = height. |

## Additive Pipe

![](/images/PartDesign_AdditivePipe.svg) [PartDesign Additive pipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe") is a tool to create AdditivePipe objects such as sweep objects, extrusion objects, rotation objects, cylinders, cones, cubes, pyramids, spheres...

Each object is based on at least two lines (preferably made with the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")):

* One outline (yellow), to define the cross-section shape.
* One path (white), to sweep along.

It is not hard to realize that some objects can be created with other tools too, but would you have guessed how versatile this tool is without these examples?

**Gallery**

### Circular Sweep Objects

|  |  |  |
| --- | --- | --- |
| **Sphere** | Sphere | * Outline: a**180° arc** and a **line** connecting the end points. * Path: full **circle**. |
| **Sphere Segment** | Sphere Segment 240° | * Outline: a **180° arc** and a **line** connecting the end points. * Path: a **240° arc**.   This function can create segments of any angle except 180° exactly, because it has a problem with start and end plane being coplanar. |
| **Hemisphere** | Hemisphere | * Outline: a **90° arc** and two perpendicular **lines** connecting the end points. * Path: a full **circle**. |
| **Torus** | Torus | * Outline: full **circle**. * Path: full **circle**. |
| **Cone** | Cone | * Outline: **triangle** with one edge lying on the centreline. * Path: full **circle**. |
| **Cylinder** | Cylinder | * Outline: **rectangle** with one edge lying on the centreline. * Path: full **circle**. |
| **Pipe** Hollow Cylinder | Pipe (Hollow Cylinder) | * Outline: **rectangle**. * Path: full **circle**. |

### Prismatic Objects

Straight Sweep Objects

|  |  |  |
| --- | --- | --- |
| **Cylinder** | Cylinder | * Outline: **circle**. * Path: straight **line**. |
| **Cube** | Cube | * Outline: **square**. * Path: straight **line**, same length as square edges. |
| **Cuboid** | Cuboid | * Outline: **rectangle**. * Path: straight **line**. |
| **Wedge** | Wedge | * Outline: **triangle**. * Path: straight **line**. |
| Regular **Prism** | Regular Prism | * Outline: regular **hexagon**. * Path: straight **line**. |
| Star-shaped Prism | Star-shaped Prism | * Outline: regular **star-shape**. * Path: straight **line**. |
| Double-T Beam | Double-T Beam | * Outline: **beam section**. * Path: straight **line**. |

### Conical Objects

|  |  |  |
| --- | --- | --- |
| **Cone** | Cone | * Outlines: Base: full **circle**, Top: **point**. * Path: straight **line**.   (Tip point is an end point of an auxiliary line) |
| **Pyramid** | Pyramid | * Outlines: Base: **square**, Top: **point**. * Path: straight **line**.   (Tip point is an end point of an auxiliary line) |
| Tilted Pyramid | Tilted Pyramid | * Outlines: Base: **square**, Top: **point**. * Path: straight **line**.   (Tip point is the end point of the path) |

### Curved Sweep Objects

|  |  |  |
| --- | --- | --- |
| **Hose** (Pipe) | Hose | * Outline: 2 concentric **circles**. * Path: curved **line**. |
| Square **Pipe** | Square Pipe | * Outline: 2 concentric **squares**. * Path: curved **line**. |
| **Wire** | Wire | * Outline: **circle**. * Path: curved **line**. |
| Horn | Horn | * Outlines: Base: **circle**, Top: (smaller) **circle**. * Path: curved **line**. |
| Legendary **Hex-Wrench** | Hex-Wrench | * Outline: **hexagon**. * Path: curved **line**. |

### Spiral and Helical Objects

|  |  |  |
| --- | --- | --- |
| Coil Spring | Spring | * Outline: **circle**. * Path:  [Part Helix](/Part_Helix "Part Helix"). |
| Hairspring Balance Spring | Balance Spring | * Outline: **rectangle**. * Path:  [Part Spiral](/Part_Spiral "Part Spiral"). |
| **Volute Spring**, Conical Spring | Volute Spring | * Outline: **rectangle**. * Path:  [Part Helix](/Part_Helix "Part Helix") with an angle. |

### Transition Objects

|  |  |  |
| --- | --- | --- |
| Square to Circle  via path | Curvy transition object | * Outlines: Base: **square**, Top: **circle**. * Path: curved **line**. |
| Square to Circle  direct | Straight transition object | * Outlines: Base: **square**, Top: **circle**. * Path: straight **line**. |
| Polygon to Star | Polygon to Star | * Outlines: Base: **pentagon**, Top: **star shape**. * Path: straight **line**. |

### Options

#### Corner Transition

A polyline can be used as a path, and the property **Transition** influences the shapes of the corners.

Transformed needs special attention as it can produce flat areas where the thickness is 0.

| Parameter | Iso View | Top View |
| --- | --- | --- |
| **Transformed** | Transformed iso view Inner and outer corners are edges. | Transformed top view The basic shape does not follow the line orientation. |
| **Right corner** | Right corner iso view Inner and outer corners are edges. | Right corner top view The basic shape follows the line orientation. |
| **Round corner** | Round corner iso view The corners lying outside the path are rounded. | Round corner top view The basic shape follows the line orientation. |

#### Orientation Mode

| Parameter | Iso View | Top View |
| --- | --- | --- |
| **Standard** | Standard iso view Location and orientation follow the path. | Standard top view (If the object is twisted in an unexpected way, try Frenet) |
| **Fixed** | Fixed iso view Location follows the path and orientation stays the same as basic shape. | Fixed top view This tends to cause self intersections which lead to further errors: a ghost face in this case. |
| **Frenet** | Frenet iso view Location and orientation follow the path, based on a different algorithm than Standard. | Frenet top view The basic shape follows the line orientation. |
| **Auxiliary** | Auxiliary iso view Location follows the path with a twist around the path that is controlled by an auxiliary curve (blue). | Auxiliary top view (It is hard to recognise but there is an angle between the planes of auxiliary curve and path that is responsible for the twist) |
| **Binormal** |  |  |

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Examples/it&oldid=1442839>"