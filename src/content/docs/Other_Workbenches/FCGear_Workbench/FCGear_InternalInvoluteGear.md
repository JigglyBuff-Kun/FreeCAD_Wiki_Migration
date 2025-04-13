---
title: FCGear InternalInvoluteGear
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                   |
| ----------------------------------------------------------------- |
| FCGear InternalInvoluteGear                                       |
| Menu location                                                     |
| Gear → Internal Involute Gear                                     |
| Workbenches                                                       |
| [FCGear](/FCGear_Workbench "FCGear Workbench")                    |
| Default shortcut                                                  |
| None                                                              |
| Introduced in version                                             |
| 1.0                                                               |
| See also                                                          |
| [FCGear InvoluteGear](/FCGear_InvoluteGear "FCGear InvoluteGear") |
|                                                                   |

## Description

![](/src/assets/images/FCGear_InternalInvoluteGear-01.png)

Internal involute gears from left to right: Spur gearing, helical gearing, double helical gearing

## Usage

1. Switch to the ![](/src/assets/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FCGear_InternalInvoluteGear.svg) [Internal Involute Gear](/FCGear_InternalInvoluteGear "FCGear InternalInvoluteGear") button in the toolbar.
   - Select the **Gear → ![](/src/assets/images/FCGear_InternalInvoluteGear.svg) Internal Involute Gear** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

An FCGear InternalInvoluteGear object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

accuracy

- Data**numpoints** (`Integer`): Default is `6`. Change of the involute profile. Changing the value can lead to unexpected results.

base

- Data**height** (`Length`): Default is `5 mm`. Value of the gear width.
- Data**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
- Data**teeth** (`Integer`): Default is `15`. Number of teeth (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
- Data**thickness** (`Length`): Default is `5 mm`. Thickness of the uncut outer part of the gear.

computed

- Data**angular_backlash** (`Angle`): (read-only)
- Data**da** (`Length`): (read-only) Inside diameter, measured at the addendum (the tip of the teeth).
- Data**df** (`Length`): (read-only) Root diameter, measured at the foot of the teeth.
- Data**dw** (`Length`): (read-only) Working pitch diameter.
- Data**outside_diameter** (`Length`): (read-only) Outside diameter.
- Data**transverse_pitch** (`Length`): (read-only) Pitch in the plane of rotation.

fillets

- Data**head_fillet** (`Float`): Default is `0 mm`.
- Data**root_fillet** (`Float`): Default is `0 mm`.

helical

- Data**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created – positive value → rotation direction right, negative value → rotation direction left (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
- Data**double_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
- Data**properties_from_tool** (`Bool`): Default is `false`. If `true` and Data**beta** is not zero, gear parameters are recomputed internally for the rotated gear.

involute

- Data**pressure_angle** (`Angle`): Default is `20 °` (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
- Data**shift** (`Float`): Default is `0`. Generates a positive and negative profile shift (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).

precision

- Data**simple** (`Bool`): Default is `false`, `true` generates a simplified display (without teeth and only a cylinder in pitch diameter).

tolerance

- Data**backlash** (`Length`): Default is `0 mm`. Backlash, also called lash or play, is the distance between the teeth at a gear pair.
- Data**clearance** (`Float`): Default is `0.25` (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).
- Data**head** (`Float`): Default is `-0.4 mm`. This value is used to change the tooth height.
- Data**reversed_backlash** (`Bool`): `true` backlash decrease or `false` (default) backlash increase (see [Notes](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear")).

version

- Data**version** (`String`):

## Notes

See [FCGear InvoluteGear](/FCGear_InvoluteGear#Notes "FCGear InvoluteGear").

## Useful formulas

See [FCGear InvoluteGear](/FCGear_InvoluteGear#Useful_formulas "FCGear InvoluteGear").

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InternalInvoluteGear/en&oldid=1195141>"
