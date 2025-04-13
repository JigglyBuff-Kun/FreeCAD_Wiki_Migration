---
title: Rakieta Pierścień środkowy
---
|  |
| --- |
| Rocket CenteringRing |
| Menu location |
| Rocket → Centering Ring |
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

A Centering Ring is a solid object used to hold one or more body tubes inside another body tube.

![](/images/CR_with_tubes.png)

Conical

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/Rocket_CenteringRing.svg) [Centering Ring](/Rocket_CenteringRing "Rocket CenteringRing") button.
   * Select the **Rocket → ![](/images/Rocket_CenteringRing.svg) Centering Ring** option from the menu.
   * Double click on a Centering Ring object in the [Tree view](/Tree_view "Tree view").
2. Set options and press OK.

## Options

### Notch

Centering rings, especially those used for low power rocketry, often need a notch to accommodate an engine hook. The **Centering Ring** tool can generate those for you.

![](/images/Notched_CR.png)

Centering ring with an engine hook notch

## Properties

Bulkhead

These properties are inherited from the **Bulkhead**, see [Bulkhead](/Rocket_Bulkhead "Rocket Bulkhead") for more information.

* DANE**Diameter**: The outer diameter of the bulkhead
* DANE**Hole Center**: The distance from the center of the hole to the center of the bulkhead
* DANE**Hole Count**: The number of holes applied in a radial pattern around the center of the bulkhead
* DANE**Hole Diameter**: The diameter of the hole
* DANE**Hole Offset**: Offset from 0 degrees of the first hole
* DANE**Holes**: True when the the bulkhead has one or more holes, see [Bulkhead Options](/Rocket_Bulkhead#Options "Rocket Bulkhead")
* DANE**Step**: True when the bulkhead includes a step, see [Bulkhead Options](/Rocket_Bulkhead#Options "Rocket Bulkhead")
* DANE**Step Diameter**: The outer diameter of the step
* DANE**Step Thickness**: The thickness, not including the bulkhead thickness, of the step
* DANE**Thickness**: The thickness, not including any step, of the bulkhead

Centering Ring

* DANE**Center Diameter**: The diameter of the inner hole
* DANE**Notch Height**: The notch height
* DANE**Notch Width**: The notch width
* DANE**Notched**: True when the center hole includes a notch, see [Options](#Options)

Rocket Component

These parameters are provided for information and have no effect on the design of the component.

* DANE**Description**: Description of the component
* DANE**Manufacturer**: Manufacturer when known
* DANE**Material**: Material when known
* DANE**Part Number**: Manufacturer part number

## Scripting

See also: [Category:API](/Category:API "Category:API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

TBD

## Tutorials and Learning

[Rocket Workbench Body Tubes, Bulkheads, and Centering Rings](https://youtu.be/xi7acpw3eDA) Tutorial on YouTube

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_CenteringRing/pl&oldid=1123067>"