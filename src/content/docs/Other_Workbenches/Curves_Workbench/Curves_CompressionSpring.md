---
title: Curves CompressionSpring
---

|                                                |
| ---------------------------------------------- |
| Curves CompressionSpring                       |
| Menu location                                  |
| Surfaces → Compression Spring                  |
| Workbenches                                    |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/src/assets/images/Curves_CompressionSpring.svg) [Curves CompressionSpring](/Curves_CompressionSpring "Curves CompressionSpring") tool creates a compression spring.

## Usage

1. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_CompressionSpring.svg) [Compression Spring](/Curves_CompressionSpring "Curves CompressionSpring") button.
   - Select the **Surfaces → ![](/src/assets/images/Curves_CompressionSpring.svg) Compression Spring** option from the menu.
2. A **CompSpring** object is created showing the spine (wire) only.
3. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to display the solid shape and adjust the related properties (see Properties below).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **CompSpring** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Comp Spring

- Data**Diameter** (`Float`): Diameter of the spring.
- Data**Length** (`Float`): Spring Length.
- Data**Reverse Helix** (`Bool`): Left hand if true.
- Data**Turns** (`Integer`): Number of turns.
- Data**Wire Diameter** (`Float`): Diameter of the spring wire.

Setting

- Data**Flatness** (`Integer`): Flatness of spring extremities from 0 to 4.
- Data**Wire Output** (`Bool`): Output a wire shape.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_CompressionSpring/en&oldid=1565939>"
