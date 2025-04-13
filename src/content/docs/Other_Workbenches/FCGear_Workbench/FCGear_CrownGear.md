---
title: FCGear CrownGear
---

|                                                                   |
| ----------------------------------------------------------------- |
| FCGear CrownGear                                                  |
| Menu location                                                     |
| Gear → Crown Gear                                                 |
| Workbenches                                                       |
| [FCGear](/FCGear_Workbench "FCGear Workbench")                    |
| Default shortcut                                                  |
| None                                                              |
| Introduced in version                                             |
| v0.16                                                             |
| See also                                                          |
| [FCGear InvoluteGear](/FCGear_InvoluteGear "FCGear InvoluteGear") |
|                                                                   |

## Description

The crown wheel resembles a ring-shaped curved rack. The pressure angle decreases continuously from the outer to the inner diameter. Thus, the variable peripheral speed at the crown wheel is compensated against the constant peripheral speed of the pinion. The pointed outer teeth and the steep tooth flanks on the inner diameter limit the usable tooth width. Crown gears achieve similar efficiencies as spur gears. One crown gear can drive several pinions.

Known field of application of crown gears:

- Rear axle drives for cars and motorcycles
- Swivel mechanism for operating tables
- Angular milling heads
- Powered tool systems with multiple pinions and a crown gear

![](/src/assets/images/Crown-Gear_example.png)

Above: Crown gear

## Usage

1. Switch to the ![](/src/assets/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FCGear_CrownGear.svg) [Crown Gear](/FCGear_CrownGear "FCGear CrownGear") button in the toolbar.
   - Select the **Gear → ![](/src/assets/images/FCGear_CrownGear.svg) Crown Gear** option from the menu.
3. The crown gear is displayed without teeth by default. ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"))
4. Change the gear parameters to the required conditions (see [Properties](#Properties)).
5. Set the Data**preview_mode** property to `false` to display the teeth (see [Notes](#Notes)).

## Properties

An FCGear CrownGear object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

accuracy

- Data**num_profiles** (`Integer`): Default is `4`. Number of profiles used for loft.
- Data**preview_mode** (`Bool`): Default is `true`.

base

- Data**height** (`Length`): Default is `2 mm`. Value for the tooth width.
- Data**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
- Data**other_teeth** (`Integer`): Default is `15`. Number of teeth of the construction gear (pinion) (see [Notes](#Notes)).
- Data**teeth** (`Integer`): Default is `15`. Number of teeth.
- Data**thickness** (`Length`): Default is `5 mm`. Height from the tip of tooth to the lower side of the crown wheel.

involute

- Data**pressure_angle** (`Angle`): Default is `20 °` (see [Notes](#Notes)).

version

- Data**version** (`String`):

## Notes

- The Data**preview_mode** property is set to `true` by default and when the gear is created you'll find this message in the report view:

  : _Gear module: Crown gear created, preview_mode = true for improved performance. Set preview_mode property to false when ready to cut teeth._

- _module_: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth.
- _other_teeth_: Several pinions with the same number of teeth only can be used on one crown wheel.
- _pressure_parameter_: Only change the parameter, if sufficient knowledge of the gear geometry is available.
- The geometry of the crown gear is primarily determined by the spur pinion geometry (_other_teeth_).
- Create spur gear with [Involute gear](/FCGear_InvoluteGear "FCGear InvoluteGear"). The number of teeth must be identical to the parameter _other_teeth_ of the crown gear.
- Adjustments for optimal running characteristics can be made with the parameters of involute gear.

## Crown and spur gear set overview

![](/src/assets/images/Crown-spur-gear-set_example.png)

- (1) Spur gear
- (2) Crown gear
- (3) Tooth width
- (4) Inner diameter
- (5) Outer diameter

## Useful formulas

- **Inner diameter (4)**

  - _inner diamter_ = _module (spur gear)_ \* _teeth (crown gear)_ \* *cos pressure_paramter (pinion)* : _cos pressure_parameter (crown gear)_

- **Outer diameter (5)**
  - _outer diamter_ = _inner diameter_ + _2x height (tooth width crown gear)_

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CrownGear/en&oldid=1257995>"
