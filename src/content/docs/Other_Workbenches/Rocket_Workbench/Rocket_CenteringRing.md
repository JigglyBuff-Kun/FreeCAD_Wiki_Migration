---
title: Rocket CenteringRing
---

|                                                          |
| -------------------------------------------------------- |
| Rocket CenteringRing                                     |
| Menu location                                            |
| Rocket → Centering Ring                                  |
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

A Centering Ring is a solid object used to hold one or more body tubes inside another body tube.

![](/images/CR_with_tubes.png)

Conical

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/Rocket_CenteringRing.svg) [Centering Ring](/Rocket_CenteringRing "Rocket CenteringRing") button.
   - Select the **Rocket → ![](/images/Rocket_CenteringRing.svg) Centering Ring** option from the menu.
   - Double click on a Centering Ring object in the [Tree view](/Tree_view "Tree view").
2. Set options and press OK.

## Options

### Notch

Centering rings, especially those used for low power rocketry, often need a notch to accommodate an engine hook. The **Centering Ring** tool can generate those for you.

![](/images/Notched_CR.png)

Centering ring with an engine hook notch

## Properties

Bulkhead

These properties are inherited from the **Bulkhead**, see [Bulkhead](/Rocket_Bulkhead "Rocket Bulkhead") for more information.

- Data**Diameter**: The outer diameter of the bulkhead
- Data**Hole Center**: The distance from the center of the hole to the center of the bulkhead
- Data**Hole Count**: The number of holes applied in a radial pattern around the center of the bulkhead
- Data**Hole Diameter**: The diameter of the hole
- Data**Hole Offset**: Offset from 0 degrees of the first hole
- Data**Holes**: True when the the bulkhead has one or more holes, see [Bulkhead Options](/Rocket_Bulkhead#Options "Rocket Bulkhead")
- Data**Step**: True when the bulkhead includes a step, see [Bulkhead Options](/Rocket_Bulkhead#Options "Rocket Bulkhead")
- Data**Step Diameter**: The outer diameter of the step
- Data**Step Thickness**: The thickness, not including the bulkhead thickness, of the step
- Data**Thickness**: The thickness, not including any step, of the bulkhead

Centering Ring

- Data**Center Diameter**: The diameter of the inner hole
- Data**Notch Height**: The notch height
- Data**Notch Width**: The notch width
- Data**Notched**: True when the center hole includes a notch, see [Options](#Options)

Rocket Component

These parameters are provided for information and have no effect on the design of the component.

- Data**Description**: Description of the component
- Data**Manufacturer**: Manufacturer when known
- Data**Material**: Material when known
- Data**Part Number**: Manufacturer part number

## Scripting

See also: [Category:API](/Category:API "Category:API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

TBD

## Tutorials and Learning

[Rocket Workbench Body Tubes, Bulkheads, and Centering Rings](https://youtu.be/xi7acpw3eDA) Tutorial on YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_CenteringRing/en&oldid=1123068>"
