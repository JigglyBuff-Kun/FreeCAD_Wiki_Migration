---
title: FCGear TimingGear
---

|                                                |
| ---------------------------------------------- |
| FCGear TimingGear                              |
| Menu location                                  |
| Gear → Timing Gear                             |
| Workbenches                                    |
| [FCGear](/FCGear_Workbench "FCGear Workbench") |
| Default shortcut                               |
| None                                           |
| Introduced in version                          |
| v0.16                                          |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The purpose of timing gears is to allow the camshaft and crankshaft to turn the timing chain. The crankshaft turns to move pistons up and down inside the cylinders. The camshaft turns to allow intake and exhaust valves on the cylinders to open and close. These components are important for proper engine timing.

Timing gears are connected to a timing belt or timing chain.

![](/images/Timing-Gear_example.png)

Above: Timing gear

## Usage

1. Switch to the ![](/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/images/FCGear_TimingGear.svg) [Timing Gear](/FCGear_TimingGear "FCGear TimingGear") button in the toolbar.
   - Select the **Gear → ![](/images/FCGear_TimingGear.svg) Timing Gear** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

An FCGear TimingGear object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

base

- Data**height** (`Length`): Default is `5 mm`. Value of the gear width.
- Data**teeth** (`Integer`): Default is `15`. Number of teeth.
- Data**type** (`Enumeration`): Default is `gt2`. Type of timing gear – profile pitch for timing belts (see [Notes](#Notes)).

computed

- Data**h** (`Length`): (read-only) Radial height of teeth.
- Data**offset** (`Length`): (read-only) X-Offset of second arc mid-point.
- Data**pitch** (`Length`): (read-only) Pitch of gear.
- Data**r0** (`Length`): (read-only) Radius of first arc.
- Data**r1** (`Length`): (read-only) Radius of second arc.
- Data**rs** (`Length`): (read-only) Radius of third arc.
- Data**u** (`Length`): (read-only) Radial difference between pitch … diameter and head of gear.

version

- Data**version** (`String`):

## Notes

- _type_: The pitch of the timing belts (distance from tooth centre to tooth centre of consecutive teeth) is specified in types. GT2 has a pitch of 2 mm, GT3 of 3 mm, GT5 of 5 mm etc..

## Useful formulas

- _addendum diameter_ = _pitch diameter_ + 2 \* _module_
- _belt length_ = 2 \* _axle base_ + *belt tooth pitch* : 2 \* _(teeth 1 + 2)_ + *belt tooth pitch²* : 4 \* pi² \* _axle base_ \* _(teeth 1 - 2)²_
- _axle base_ = *belt length* : 4 - *belt tooth pitch* : 8 \* _(teeth 1+2)_ + ¼ \* sqrt [*belt length* - ½ \* *belt tooth pitch* \* *(teeth 1+2)²* - 2 \* *belt tooth pitch²* \* *(teeth 1+2)²* : pi²]

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_TimingGear/en&oldid=1195245>"
