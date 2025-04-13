---
title: Rocket Fin
---

|                                                          |
| -------------------------------------------------------- |
| Rocket Fin                                               |
| Menu location                                            |
| Rocket → Fin                                             |
| Workbenches                                              |
| [Rocket Workbench](/Rocket_Workbench "Rocket Workbench") |
| Default shortcut                                         |
| _None_                                                   |
| Introduced in version                                    |
| 0.19                                                     |
| See also                                                 |
| _None_                                                   |
|                                                          |

## Description

Fins are used to aerodynamically control the direction of flight.

![](/src/assets/images/Nike_Fin_TTW_2.png)

A Tapered fin with TTW tab

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Rocket_Fin.svg) [Fin](/Rocket_Fin "Rocket Fin") button.
   - Select the **Rocket → ![](/src/assets/images/Rocket_Fin.svg) Fin** option from the menu.
   - Double click on a Fin object in the [Tree view](/Tree_view "Tree view").
2. Set options and press OK.

## Options

### Fin Type

The general shape of the fin.

- Trapezoid.

This fin type is used for almost all 4 sided fins. The root remains fixed, but the leading and trailing edges can have variable amounts of sweep. The chord length of the root and tip are set independently.

![](/src/assets/images/Fin_Trapezoid_small.png)

Trapezoid fin type

- Elliptical.

A generalized rounded shape. Circular fins are a special case where the height is 1/2 of the root chord.

![](/src/assets/images/Fin_Elliptical_small.png)

Elliptical fin type

- Custom.

Most fins will fit into one of the standard shapes. In cases where they don't it's possible to create a custom shape using a sketch.

The sketch must be created first. The fin root is drawn along the positive X axis. With the sketch selected in the model tree, selecting the Fin icon will create the custom fin. The fin profile can be changed at this time.

There is no way to associate a custom fin with a sketch within the dialog after it's been created, so it is important to create the sketch first. It can be selected from the Properties view. Updating the sketch will update the fin.

![](/src/assets/images/Fin_Sketch_small.png)

Sketch used to create a custom fin shape

![](/src/assets/images/Fin_Custom_small.png)

The custom fin created from the sketch

### Cross Section

The cross sectional shape of a fin can greatly affect its performance at different speeds, as well as the looks of the rocket. A variety of fin cross sections have been implemented. Fins are created by lofting the root cross section to the tip cross section, so not all combinations of **Root Cross Section** and **Tip Cross Section** will produce useful fins.

- Square. Both the leading and trailing edges are squared.

![](/src/assets/images/CS_Square.png)

Square Cross Section

- Round. The leading and trailing edges are rounded.

![](/src/assets/images/CS_Round.png)

Round cross section

- Airfoil. Uses the NACA symmetrical airfoil shape [NACA airfoil](https://en.wikipedia.org/wiki/NACA_airfoil) with maximum thickness at 30% of the chord.

![](/src/assets/images/CS_Airfoil.png)

Airfoil cross section

- Wedge. The trailing edge of the fin is square, converging to a point at the leading edge.

![](/src/assets/images/CS_Wedge.png)

Wedge cross section

- Diamond. The diamond shape starts from a point at the leading edge, straight out to the maximum thickness at a point determined by **Length 1**, and back to a point at the trailing edge.

![](/src/assets/images/CS_Diamond.png)

Diamond cross section

- Leading Edge (LE) Taper. The leading edge is tapered to a point as determined by **Length 1**.

![](/src/assets/images/LE_Taper.png)

Leading edge taper cross section

- Trailing Edge (TE) Taper. The trailing edge is tapered to a point as determined by **Length 1**.

![](/src/assets/images/TE_Taper.png)

Trailing edge taper cross section

- Taper. The leading edge is tapered to a point as determined by **Length 1**, and the trailing edge is tapered to a point as determined by **Length 2**.

![](/src/assets/images/CS_Taper.png)

Taper cross section

### Through the Wall (TTW) Tabs

Through the Wall fins add structural strength by extending though the outer body tube to an inner body tube such as a motor mount. Instead of attaching just to the outside of the outer body tube, it can be attached at multiple points. As such, the height of the tab would be the distance from the outer diameter of the inner body tube to the outer diameter of the outer body tube. Other parameters would vary depending on requirements.

![](/src/assets/images/TTWx4.png)

4 TTW fins attached to a central motor mount inside the outer body tube

## Properties

Fin

- Data**Fin Type**: Defines the shape of the fin.
- Data**Height**: The fin height.
- Data**Profile**: The sketch associated with the custom fin type.
- Data**Root Chord**: The distance between the fin leading and trailing edges at the root
- Data**Root Cross Section**: The cross section shape of the fin at the root, see [Options](#Options)
- Data**Root Length 1**: Usage depends on the **Fin Root Cross Section** and will apply to a taper length or similar, see [Options](#Options)
- Data**Root Length 2**: Usage depends on the **Fin Root Cross Section** and will apply to a taper length or similar when multiple values are required, see [Options](#Options)
- Data**Root Per Cent**: Expresses the **Fin Root Length 1** and **Fin Root Length 2** properties as a percentage of the **Fin Root Chord**
- Data**Root Thickness**: Maximum thickness at the root of the fin
- Data**Sweep Angle**: The angle of the front of the fin, with a vertical front being 0 degrees. This may be negative. Setting this value will cause the **Sweep Length** to be adjusted.
- Data**Sweep Length**: The distance from the front of the fin root to the front of the fin tip along the x axis. This may be negative. Setting this value will cause the **Sweep Angle** to be adjusted.
- Data**Tip Chord**: The distance between the fin leading and trailing edges at the tip
- Data**Tip Cross Section**: The cross section shape of the fin at the tip, see [Options](#Options)
- Data**Tip Length 1**: Usage depends on the **Fin Tip Cross Section** and will apply to a taper length or similar, see [Options](#Options)
- Data**Tip Length 2**: Usage depends on the **Fin Tip Cross Section** and will apply to a taper length or similar when multiple values are required, see [Options](#Options)
- Data**Tip Per Cent**: Expresses the **Fin Tip Length 1** and **Fin Tip Length 2** properties as a percentage of the **Fin Tip Chord**
- Data**Tip Thickness**: Maximum thickness at the tip of the fin
- Data**Ttw**: True when a tab for Through the Wall fins is required, see [Options](#Options)
- Data**Ttw Height**: Height of the TTW tab
- Data**Ttw Length**: Length of the TTW tab
- Data**Ttw Offset**: Distance from the front of the fin to the front of the TTW tab
- Data**Ttw Thickness**: Thickness of the TTW tab

Rocket Component

These parameters are provided for information and have no effect on the design of the component.

- Data**Description**: Description of the component
- Data**Manufacturer**: Manufacturer when known
- Data**Material**: Material when known
- Data**Part Number**: Manufacturer part number

## Tutorials and Learning

[Rocket Workbench Fins](https://youtu.be/8MmEVyGkA0I) Tutorial on YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_Fin/en&oldid=1196679>"
