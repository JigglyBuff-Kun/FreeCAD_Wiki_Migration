---
title: FCGear WormGear
---

|                                                                               |
| ----------------------------------------------------------------------------- |
| FCGear WormGear                                                               |
| Menu location                                                                 |
| Gear → Worm Gear                                                              |
| Workbenches                                                                   |
| [FCGear](/FCGear_Workbench "FCGear Workbench")                                |
| Default shortcut                                                              |
| None                                                                          |
| Introduced in version                                                         |
| v0.16                                                                         |
| See also                                                                      |
| [PartDesign InvoluteGear](/PartDesign_InvoluteGear "PartDesign InvoluteGear") |
|                                                                               |

## Description

The worm can be considered a special case of a helical gear. Imagine that there is only one tooth on a spur gear. Now increase the helix angle so much that the tooth winds around the spur gear several times before it emerges on the opposite side. The result would be a single thread worm.

For a single-start worm, each full turn (360 degrees) of the worm advances the gear by one tooth. So a gear with 24 teeth will provide a gear reduction of 24:1. For a multi-start worm, the gear reduction equals the number of teeth on the gear, divided by the number of starts on the worm.

A worm can only be used with a worm wheel. This is called a worm drive. Like other gear arrangements, a worm drive can reduce rotational speed or transmit higher torque. One of the major advantages of worm gear drive units are that they can transfer motion in 90 degrees. A worm drive is also self-locking.

![](/images/Worm-Gear_example.png)

Worm gear (No. of teeth 3)

## Usage

1. Switch to the ![](/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/images/FCGear_WormGear.svg) [Worm Gear](/FCGear_WormGear "FCGear WormGear") button in the toolbar.
   - Select the **Gear → ![](/images/FCGear_WormGear.svg) Worm Gear** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

An FCGear WormGear object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

base

- Data**diameter** (`Length`): Default is `5 mm`. Pitch diameter.
- Data**height** (`Length`): Default is `5 mm`. Value of the worm length.
- Data**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
- Data**reverse_pitch** (`Bool`): Default is `false`, `true` changes the rotating direction from right to left.
- Data**teeth** (`Integer`): Default is `3`. Number of teeth (see [Notes](#Notes)).

computed

- Data**beta** (`Angle`): (read-only) Lead angle (see also the information in [Notes](#Notes) and [Useful formulas](#Useful_formulas)).

involute

- Data**pressure_angle** (`Angle`): Default is `20 °` (see [Notes](#Notes)).

tolerance

- Data**clearance** (`Float`): Default is `0.25` (see [Notes](#Notes)).
- Data**head** (`Float`): Default is `0`. This value is used to change the tooth height.

version

- Data**version** (`String`):

## Notes

- _beta_: If the lead angle is less than 5°, it is a self-locking gear. A typical example are the tuning pegs on a guitar or ukulele.
- _clearance_: At a worm gearing, clearance is the distance between the tooth tip of the worm and the tooth root of the worm wheel.
- _module_: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth. If the module is changed, the lead angle also changes (_beta_).
- _teeth_: The number of teeth in a worm is called the number of threads. Correspondingly, one speaks of single, double or multiple thread worms. In general, mainly single worms are produced, but in special cases the number of starts can be up to four (sometimes also more). If the number of teeth is changed, _beta_ also changes.
- _pressure_parameter_: Only change the parameter, if sufficient knowledge of the gear geometry is available.

## Useful formulas

- _beta (lead angle)_ = arctan (_module_ \* *teeth* : _pitchdiameter (diameter)_)
- _axial pitch_ = _pi_ \* _module_ \* _teeth_
- _beta (lead angle)_ = arctan (*axial pitch* : (_pitchdiameter (diameter)_ \* _pi_))
- _worm length_ = 4,5 \* _module_ \* _pi_

## Worm wheel

The worm wheel must be designed manually. For this purpose [FCGear InvoluteGear](/FCGear_InvoluteGear "FCGear InvoluteGear") can be used for a simple construction. In any case, in-depth knowledge of the gear types is required.

![](/images/Worm-Gear_example3.png)

Worm with worm wheel

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_WormGear/en&oldid=1195240>"
