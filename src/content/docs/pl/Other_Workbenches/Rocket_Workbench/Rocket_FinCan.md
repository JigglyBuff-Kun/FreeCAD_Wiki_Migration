---
title: Rakieta Korpus ogona ze statecznikiem
---
|  |
| --- |
| Rocket FinCan |
| Menu location |
| Rocket → Fin Can |
| Workbenches |
| [Rocket Workbench](/Rocket_Workbench "Rocket Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| *None* |
|  |

## Description

Fins are used to aerodynamically control the direction of flight. A fin can is a complete assembly including fins and body tube, often fitted over the outside of the main rocket body tube. Optionally, a fin can may include a launch lug.

![](/images/FinCan.png)

A fin can with launch lug

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/Rocket_FinCan.svg) [Fin Can](/Rocket_FinCan "Rocket FinCan") button.
   * Select the **Rocket → ![](/images/Rocket_FinCan.svg) Fin Can** option from the menu.
   * Double click on a Fin Can object in the [Tree view](/Tree_view "Tree view").
2. Set options and press OK.

## Options

### Fin Options

Fin options for the fin can are the same as for individual fins. See ![](/images/Rocket_Fin.svg) [Fin](/Rocket_Fin "Rocket Fin") for more details

However due to the one piece nature of fin cans, they do not have the option to include Through The Wall (TTW) tabs.

### Fin Can Options

### Launch Lug Options

## Properties

Fin Can

* DANE**Fin Type**: Defines the shape of the fins.
* DANE**Height**: The fin height.
* DANE**Profile**: The sketch associated with the custom fin type.
* DANE**Root Chord**: The distance between the fin leading and trailing edges at the root
* DANE**Root Cross Section**: The cross section shape of the fin at the root, see [Options](#Options)
* DANE**Root Length 1**: Usage depends on the **Fin Root Cross Section** and will apply to a taper length or similar, see [Options](#Options)
* DANE**Root Length 2**: Usage depends on the **Fin Root Cross Section** and will apply to a taper length or similar when multiple values are required, see [Options](#Options)
* DANE**Root Per Cent**: Expresses the **Fin Root Length 1** and **Fin Root Length 2** properties as a percentage of the **Fin Root Chord**
* DANE**Root Thickness**: Maximum thickness at the root of the fin
* DANE**Sweep Angle**: The angle of the front of the fin, with a vertical front being 0 degrees. This may be negative. Setting this value will cause the **Sweep Length** to be adjusted.
* DANE**Sweep Length**: The distance from the front of the fin root to the front of the fin tip along the x axis. This may be negative. Setting this value will cause the **Sweep Angle** to be adjusted.
* DANE**Tip Chord**: The distance between the fin leading and trailing edges at the tip
* DANE**Tip Cross Section**: The cross section shape of the fin at the tip, see [Options](#Options)
* DANE**Tip Length 1**: Usage depends on the **Fin Tip Cross Section** and will apply to a taper length or similar, see [Options](#Options)
* DANE**Tip Length 2**: Usage depends on the **Fin Tip Cross Section** and will apply to a taper length or similar when multiple values are required, see [Options](#Options)
* DANE**Tip Per Cent**: Expresses the **Fin Tip Length 1** and **Fin Tip Length 2** properties as a percentage of the **Fin Tip Chord**
* DANE**Tip Thickness**: Maximum thickness at the tip of the fin

Rocket Component

These parameters are provided for information and have no effect on the design of the component.

* DANE**Description**: Description of the component
* DANE**Manufacturer**: Manufacturer when known
* DANE**Material**: Material when known
* DANE**Part Number**: Manufacturer part number

## Tutorials and Learning

[Rocket Workbench Fins](https://youtu.be/8MmEVyGkA0I) Tutorial on YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_FinCan/pl&oldid=1197834>"