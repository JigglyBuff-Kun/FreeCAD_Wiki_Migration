---
title: Rocket Bulkhead
---

|                                                          |
| -------------------------------------------------------- |
| Rocket Bulkhead                                          |
| Menu location                                            |
| Rocket → Bulkhead                                        |
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

A bulkhead is a solid section of material used to close off a section of body tube, or to provide a base for a nose cone.

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Rocket_Bulkhead.svg) [Bulkhead](/Rocket_Bulkhead "Rocket Bulkhead") button.
   - Select the **Rocket → ![](/src/assets/images/Rocket_Bulkhead.svg) Bulkhead** option from the menu.
   - Double click on a Bulkhead object in the [Tree view](/Tree_view "Tree view").
2. Set options and press OK.

## Options

### Step

Bulkheads may include a step.

A step may be thought of as an additional bulkhead of smaller diameter stacked on top of the original bulkhead. The most common use is to cap the end of a body tube, such as for an electronics bay. In this case the outer diameter of the bulkhead would match the outer diameter of the body tube, and the outer diameter of the step would match the inner diameter of the body tube.

![](/src/assets/images/Stepped_Bulkhead.png)

A stepped bulkhead used to cap a body tube

### Holes

A bulkhead may require holes for a variety of reasons, such as for attaching an eye hook. This tool allows you to specify one or more identical holes applied in a radial pattern.

![](/src/assets/images/Bulkhead_2.png)

A stepped bulkhead with 4 holes

## Properties

Bulkhead

- Data**Diameter**: The outer diameter of the bulkhead
- Data**Hole Center**: The distance from the center of the hole to the center of the bulkhead
- Data**Hole Count**: The number of holes applied in a radial pattern around the center of the bulkhead
- Data**Hole Diameter**: The diameter of the hole
- Data**Hole Offset**: Offset from 0 degrees of the first hole
- Data**Holes**: True when the the bulkhead has one or more holes, see [Options](#Options)
- Data**Step**: True when the bulkhead includes a step, see [Options](#Options)
- Data**Step Diameter**: The outer diameter of the step
- Data**Step Thickness**: The thickness, not including the bulkhead thickness, of the step
- Data**Thickness**: The thickness, not including any step, of the bulkhead

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_Bulkhead/en&oldid=1123077>"
