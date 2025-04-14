---
title: FCGear BevelGear
---

|                                                |
| ---------------------------------------------- |
| FCGear BevelGear                               |
| Menu location                                  |
| Gear → Bevel Gear                              |
| Workbenches                                    |
| [FCGear](/FCGear_Workbench "FCGear Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| v0.16                                          |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/images/FCGear_BevelGear.svg) [FCGear BevelGear](/FCGear_BevelGear "FCGear BevelGear") tool creates a basic bevel gear, a solid object that needs to be trimmed to the correct final shape in following steps.

Partly because of the noise they generate, bevel gears are not used as often as other types of gear. But they are still used in certain sectors, such as food packaging and canned food, lawn and garden equipment, machines such as drills and mills, compression systems for the gas and oil market and flow control valves.

Spiral bevel gears have curved teeth to provide softer engagement and greater tooth to tooth contact compared to a straight bevel gear. This reduces the vibration and noise. They can be used at high speeds and are typically used in motorcycle and bicycle transmissions.

![](/images/Bevel-Gear_example.png)

From left to right: Spur gearing, spiral gearing

## Usage

1. Switch to the ![](/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/images/FCGear_BevelGear.svg) [Bevel Gear](/FCGear_BevelGear "FCGear BevelGear") button in the toolbar.
   - Select the **Gear → ![](/images/FCGear_BevelGear.svg) Bevel Gear** option from the menu.
3. A BevelGear object is created according to the default settings.
4. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

See also: [Property editor](/Property_editor "Property editor").

An FCGear BevelGear object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

base

- Data**height** (`Length`): Default is `5`. Value of the bevel gear width, measured from the pitch circle.
- Data**module** (`Length`): Default is `1`. Module is the ratio of the pitch diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
- Data**reset_origin** (`Bool`): If `true` (default) the origin of the gear is at the center of the pitch circle (bottom of the gear) (see [Notes](#Notes)).

  : If `false` the origin of the gear is at the tip of the pitch cone.

- Data**teeth** (`Integer`): Default is `15`. Number of teeth.

computed

- Data**angular_backlash** (`Angle`): (read-only)
- Data**dw** (`Length`): (read-only) Working pitch diameter.

helical

- Data**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical bevel gear is created – positive value → rotation direction right, negative value → rotation direction left.

involute

- Data**pitch_angle** (`Angle`): Default is `45 °`. Taper angle of the pitch cone.

involute_parameter

- Data**pressure_angle** (`Angle`): Default is `20 °` (see [Notes](#Notes)).

precision

- Data**numpoints** (`Integer`): Default is `6`. Change of the involute profile. Changing the value can lead to unexpected results.

tolerance

- Data**backlash** (`Length`): Default is `0`. Backlash, also called lash or play, is the distance between the teeth at a gear pair.
- Data**clearance** (`Float`): Default is `0.1` (see [Notes](#Notes)).

version

- Data**version** (`String`):

## Notes

- Bevel gears are quite complex, because their properties not only depend on the gear ratio but also on the angle between the gear axes. The default bevel gear is built for perpendicular axes and a 1:1 ratio.
- _pitch angle_: The taper angle of the pitch cone is half the angle between gear axes for a 1:1 ratio, that is 45° for perpendicular axes. Pitch angles for other combinations of ratio and angles between axes can be determined geometrically within a [sketch](/Sketcher_Workbench "Sketcher Workbench").
- _clearance_: At a gear pair, clearance is the distance between the tooth tip of the first gear and the tooth root of the second gear.
- _module_: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth.
- _pressure_angle_: Only change the parameter, if sufficient knowledge of the gear geometry is available.
- _reset_origin_: It is recommended to set the parameter to _false_ to have the origin of the gear at the tip of the pitch cone. This way we can extend the bevel gear beyond the pitch circle plane using the module property.
- The weak point of this tool is that it builds the geometry from the pitch diameter towards the tip and ignores the fact that there is also geometry in the opposite direction. That is why we have to determine the cross-section of the gear at the pitch circle belonging to our chosen module to define cutting geometry and then use an extended (scaled from the tip) bevel gear to be cut. (see _reset origin_ above)

## Useful formulas

- _pitch diameter_ = _module_ \* _teeth_
- _addendum diameter_ = _pitch diameter_ + 2 \* _module_ \* _cos reference cone angle_
- _tip angle 1_ = _(teeth 1 + 2)_ \* *(cos reference cone angle 1)* : _(teeth 2 - 2)_ \* _(sin reference cone angle 1)_
- _tip angle 2_ = _(teeth 2 + 2)_ \* *(cos reference cone angle 2)* : _(teeth 1 - 2)_ \* _(sin reference cone angle 2)_
- _reference cone angle 1_ = *(teeth 1)* : _(teeth 2)_
- _reference cone angle 2_ = *(teeth 2)* : _(teeth 1)_
- _axis angle total_ = _reference cone angle 1_ + _reference cone angle 2_

Substantive reference cone angle [TECH.]

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_BevelGear/en&oldid=1447341>"
