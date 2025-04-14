---
title: FCGear HypoCycloidGear
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| FCGear HypoCycloidGear                         |
| Menu location                                  |
| Gear → HypoCycloid Gear                        |
| Workbenches                                    |
| [FCGear](/FCGear_Workbench "FCGear Workbench") |
| Default shortcut                               |
| None                                           |
| Introduced in version                          |
| 1.0                                            |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/images/FCGear_HypoCycloidGear.svg) **FCGear HypoCycloid Gear** command creates two splined cam disks and a set of rollers that stay in touch with the disks' outer surfaces while moving.

![](/images/FCGear_FCGear_HypoCycloidGear-04.png) ![](/images/FCGear_FCGear_HypoCycloidGear-05.png)

Left: Hypocycloid gear. Right: Gear and transparently displayed also provided reversed gear and set of rollers

```
Please provide a short description what can be achieved using such a gear train.

```

## Usage

1. Switch to the ![](/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/images/FCGear_HypoCycloidGear.svg) [HypoCycloid Gear](/FCGear_HypoCycloidGear "FCGear HypoCycloidGear") button in the toolbar.
   - Select the **Gear → ![](/images/FCGear_HypoCycloidGear.svg) HypoCycloid Gear** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

## Notes

The default gear(s) are displayed like this:

![](/images/FCGear_FCGear_HypoCycloidGear-01.png)

To display the cam disks and the set of rollers (pins) in different colours, we need three identical HypocycloidGear objects. Their visibility can be toggled:

- Data**show_disk0** (`Bool`) for the main cam disk.
- Data**show_disk1** (`Bool`) for a reversed cam disk on top.
- Data**show_pins** (`Bool`) for the set of pins.

![](/images/FCGear_FCGear_HypoCycloidGear-02.png) ![](/images/FCGear_FCGear_HypoCycloidGear-03.png)

Left: HypocycloidGear objects as created. Right: Objects repositioned to get a better view on each object

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_HypoCycloidGear/en&oldid=1204773>"
