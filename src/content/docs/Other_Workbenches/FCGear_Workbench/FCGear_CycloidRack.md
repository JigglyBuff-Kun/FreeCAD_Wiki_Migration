---
title: FCGear CycloidRack
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                |
| -------------------------------------------------------------- |
| FCGear CycloidRack                                             |
| Menu location                                                  |
| Gear → Cycloid Rack                                            |
| Workbenches                                                    |
| [FCGear](/FCGear_Workbench "FCGear Workbench")                 |
| Default shortcut                                               |
| None                                                           |
| Introduced in version                                          |
| 1.0                                                            |
| See also                                                       |
| [FCGear CycloidGear](/FCGear_CycloidGear "FCGear CycloidGear") |
|                                                                |

## Description

![](/src/assets/images/FCGear_CycloidRack-01.png)

Cycloid racks from left to right: Spur gearing, helical gearing, double helical gearing

## Usage

1. Switch to the ![](/src/assets/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/FCGear_CycloidRack.svg) [Cycloid Rack](/FCGear_CycloidRack "FCGear CycloidRack") button in the toolbar.
   - Select the **Gear → ![](/src/assets/images/FCGear_CycloidRack.svg) Cycloid Rack** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

An FCGear CycloidRack object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

accuracy

- Data**numpoints** (`Integer`): Default is `15`. Number of points for spline.

base

- Data**add_endings** (`bool`): If `true` (default), then the total length of the rack is teeth \* pitch. If `false`, then the rack starts with a tooth-flank.
- Data**height** (`Length`): Default is `5 mm`. Value of the gear width.
- Data**teeth** (`Integer`): Default is `15`. Number of teeth.
- Data**thickness** (`Length`): Default is `5 mm`. Thickness of the uncut part of the rack.

computed

- Data**transverse_pitch** (`Length`): (read-only) Pitch in the transverse plane.

cycloid

- Data**inner_diameter** (`Float`): Default is `7.5`. Diameter of the rolling circle of hypocycloid, normalized by the Data**module** (see [Notes](/FCGear_CycloidGear#Notes "FCGear CycloidGear")).
- Data**outer_diameter** (`Float`): Default is `7.5`. Diameter of the rolling circle of epicycloid, normalized by the Data**module** (see [Notes](/FCGear_CycloidGear#Notes "FCGear CycloidGear")).

fillets

- Data**head_fillet** (`Float`): Default is `0`.
- Data**root_fillet** (`Float`): Default is `0`.

helical

- Data**beta** (`Angle`): Default is `0 °`. With the helix angle β a helical gear is created (positive value → rotation direction right, negative value → rotation direction left).
- Data**double_helix** (`Bool`): Default is `false`, `true` creates a double helix gear (see [Notes](/FCGear_CycloidGear#Notes "FCGear CycloidGear")).

involute

- Data**module** (`Length`): Default is `1 mm`. For racks the module equals the pitch and so is the distance between corresponding points on adjacent teeth (see [Notes](/FCGear_CycloidGear#Notes "FCGear CycloidGear")).

precision

- Data**simplified** (`Bool`): Default is `false`. If `true` the rack is drawn with a constant number of teeth to avoid topological renaming.

tolerance

- Data**clearance** (`Float`): Default is `0.25` (see [Notes](/FCGear_CycloidGear#Notes "FCGear CycloidGear")).
- Data**head** (`Float`): Default is `0`. Additional length of the tip of the teeth, normalized by the Data**module**.

version

- Data**version** (`String`):

## Notes

See [FCGear CycloidGear](/FCGear_CycloidGear#Notes "FCGear CycloidGear").

## Useful formulas

See [FCGear CycloidGear](/FCGear_CycloidGear#Useful_formulas "FCGear CycloidGear").

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_CycloidRack/en&oldid=1196700>"
