---
title: FCGear CycloidGear
---

|                                                                   |
| ----------------------------------------------------------------- |
| FCGear CycloidGear                                                |
| Menu location                                                     |
| Gear → Cycloid Gear                                               |
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

Cycloidal gears are very sensitive to an inaccurate adjustment of the centre distance, which then leads to a change in the transmission ratio. For these reasons, cycloidal gears are hardly found in mechanical engineering but are only used in special cases such as in the watch industry, for roots type blowers or for the drive of gear racks.

![](/images/Cycloid-Gear_example_1.png)

From left to right: Spur gearing, helical gearing, double helical gearing

## Usage

1. Switch to the ![](/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/images/FCGear_CycloidGear.svg) [Cycloid Gear](/FCGear_CycloidGear "FCGear CycloidGear") button in the toolbar.
   - Select the **Gear → ![](/images/FCGear_CycloidGear.svg) Cycloid Gear** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

### Data

An FCGear CycloidGear object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

accuracy

- Data**numpoints** (`Integer`): Default is `15`. Change of the involute profile. Changing the value can lead to unexpected results.

base

- Data**height** (`Length`): Default is `5 mm`. Value of the gear width.
- Data**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).
- Data**teeth** (`Integer`): Default is `15`. Number of teeth.

computed

- Data**angular_backlash** (`Angle`): (read-only)
- Data**dw** (`Length`): (read-only) Working pitch diameter.

cycloid

- Data**inner_diameter** (`Float`): (read-only) Diameter of the rolling circle of hypocycloid, normalized by the Data**module** (see [Notes](#Notes)).
- Data**outer_diameter** (`Float`): Default is `7.5`. Diameter of the rolling circle of epicycloid, normalized by the Data**module** (see [Notes](#Notes)).

fillets

- Data**head_fillet** (`Float`): Default is `0 mm`.
- Data**root_fillet** (`Float`): Default is `0 mm`.

helical

- Data**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created – positive value → rotation direction right, negative value → rotation direction left.
- Data**double_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](#Notes)).

tolerance

- Data**backlash** (`Length`): Default is `0`. Backlash, also called lash or play, is the distance between the teeth at a gear pair.

- Data**clearance** (`Float`): Default is `0.25` (see [Notes](#Notes)).
- Data**head** (`Float`): Default is `0`. Additional length of the tip of the teeth, normalized by the Data**module**.

version

- Data**version** (`String`):

## Notes

- Cycloidal gears must always be specially matched to each other and can generally not be exchanged at will: In a gear pair, the value of _inner_diameter_ on one gear must equal the _outer_diameter_ on the other, and vice versa. See also the information in _Properties cycloid parameter view_ below.
- _clearance_: At a gear pair, clearance is the distance between the tooth tip of the first gear and the tooth root of the second gear.
- _double_helix_: To use the double helical gearing the helix angle β (_beta_) for the helical gearing must first be entered.
- _module_: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth.

## Special cases

### Straight line as hypocycloid

To obtain a straight line, directly towards the center, as hypocycloid, use the following [expression](/Expressions "Expressions") for the Data**inner_diameter**: `teeth / 2`. Such a tooth form is often found in historical clockworks and thus called "clock toothing". A larger Data**clearance** makes the effect even more visible.

### Full hypocycloid/epicycloid as tooth

To obtain a gear made of complete hypocycloid and epicycloid curves use the following [expressions](/Expressions "Expressions"):

- Data**inner_diameter**: `0.5 + 1e-6`
- Data**outer_diameter**: `inner_diameter`
- Data**clearance**: `(-1 + inner_diameter/1mm) * 2`
- Data**head**: `(-1 + outer_diameter/1mm) * 2`

The reference diameter is _d = m \* z_, with _m_ being the Data**module** and _z_ being the Data**teeth**.
For a complete hypocycloid, the rolling diameter has to be _d_i = d / (z\*2) = m\*z / (z\*2)_. And if we now normalize this by the module, we get _d_in = m\*z / (z\*2) / m = 1 / 2_. The additional explicit tolerance value (`1e-6` in the expression above) is required to overcome coincidence issues.

Now the cycloids' rolling circle diameters have to match the gear's addedum/dedendum. The addendum, i.e. the tooth length above the reference circle, is 1 + Data**head**. The dedendum, i.e. the tooth length below the reference circle, is 1 + Data**clearance**. Both are normalized by the module, thus we need a head/clearance value of _1 - d_in_. The additional `/ 1mm` and `* 2` are required to overcome shortcomings already fixed in the development version of the FCGear Workbench, but porting those fixes back to the stable version may break existing models.

Such "gears" allow the the number of teeth to be as low as _two_ and are used as rotary vanes in pumps or compressors (cf. [Roots-type Supercharger](https://en.wikipedia.org/wiki/Roots-type_supercharger)).

### Infinitely large epicycloid

If the radius of the epicycloid's rolling circle becomes infinitely large, it becomes a rolling straight line. Such a degenerated epicycloid is called involute. Gears with such a tooth form are handled by the [involute gear](/FCGear_InvoluteGear "FCGear InvoluteGear") command. It is by far the most common tooth form Today.

## Useful formulas

See [FCGear InvoluteGear](/FCGear_InvoluteGear#Useful_formulas "FCGear InvoluteGear").

## Properties cycloid parameter view

![](/images/CycloidGear_inner-outer-diameter_2.svg)

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CycloidGear/en&oldid=1195175>"
