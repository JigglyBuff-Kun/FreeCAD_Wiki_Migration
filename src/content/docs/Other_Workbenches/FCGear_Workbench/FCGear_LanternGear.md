---
title: FCGear LanternGear
---

|                                                |
| ---------------------------------------------- |
| FCGear LanternGear                             |
| Menu location                                  |
| Gear → Lantern Gear                            |
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

The lantern gear toothing is a special form of cycloidal toothing in which the rolling circle and pitch circle are of equal size. In addition, the teeth of the larger wheel in a gearbox are replaced by cylinders. The small wheel is given a cycloid gearing. This results in a one-sided point gearing. Lantern gearings can only be straight toothed.

Because their construction is very simple, they are among the oldest forms of gearing. Lantern gearings are used when large gear ratios are required, for example in the slewing gears of mills or timber handling cranes.

Lantern gear wheel with roller chains are a cost-effective and robust alternative to rack and pinion drives. By guiding the stretched lantern gear wheel chain tangentially along the lantern gear wheel, a linear movement of the chain is converted into a rotational movement of the wheel. Conversely, a linear motion of the chain can also be achieved by the rotary motion of the lantern gear wheel (motorbike/bicycle).

![](/src/assets/images/Lantern-Gear_example.png)

Above: Lantern gear

## Usage

1. Switch to the ![](/src/assets/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FCGear_LanternGear.svg) [Lantern Gear](/FCGear_LanternGear "FCGear LanternGear") button in the toolbar.
   - Select the **Gear → ![](/src/assets/images/FCGear_LanternGear.svg) Lantern Gear** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

### Data

An FCGear LanternGear object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

accuracy

- Data**num_profiles** (`Integer`): Default is `10`. The value normally does not need to be changed.

base

- Data**bolt_radius** (`Length`): Default is `1 mm`. Diameter of the cylinder on the rotating disc which functions as a second "gear wheel".
- Data**height** (`Length`): Default is `5 mm`. Value of the gear width.
- Data**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).

gear_parameter

- Data**teeth** (`Integer`): Default is `15`. Number of teeth.

tolerance

- Data**head** (`Float`): Default is `0`.

version

- Data**version** (`String`):

## Notes

- _module_: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth.

## Useful formulas

- _addendum diameter_ = _module_ \* _(teeth +2)_
- _pitch diameter_ = _module_ \* _teeth_
- _axle base_ = *pitch diameter (lantern gear 1 + 2)* : 2

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_LanternGear/en&oldid=1207940>"
