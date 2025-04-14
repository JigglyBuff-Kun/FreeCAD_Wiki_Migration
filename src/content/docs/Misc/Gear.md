---
title: Gear
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Introduction

This page is intended to differentiate some kind of gears by their (hopefully) correct names.  
There will be not much information about the design in detail; there are enough proper descriptions in the wiki pages and elsewhere in the www.

## Gear

A Gear is a toothed wheel that can be paired with other gears, racks, chains, or belts to form a **gear train** (which is usually called a gear as well).

Native speakers, feel invited to add local synonyms, or spelling variations

### Bevel gear

A bevel gear meshes with another bevel gear to connect two angled rotation axes.

![](/images/Gear_Example-08.png)

Two meshing bevel gears

The ![](/images/FCGear_BevelGear.svg) [FCGear BevelGear](/FCGear_BevelGear "FCGear BevelGear") tool creates a basic bevel gear, a solid object that needs to be trimmed to shape in following steps.

![](/images/Gear_Example-06.png) ![](/images/Gear_Example-07.png)

Left: Raw bevel gears as created with [FCGear BevelGear](/FCGear_BevelGear "FCGear BevelGear"). Right: Bevel gears trimmed to a more recognisable shape.

### Cage gear

See [lantern gear](#Lantern_gear).

### Chain wheel

The driving gear (attached to the crank arms) of a bicycle drivetrain is usually called a chain wheel. See cog wheel and [sprocket](#Sprocket).

### Cog

The driven gear (attached to the rear wheel) of a bicycle drivetrain is usually called a cog. See cog wheel and [sprocket](#Sprocket).

### Cog wheel

A cog wheel, or cogged wheel, is an assembly of a hub(?) and several inserted teeth, the actual cogs.

![](/images/Gear_Example-01.png)

Cog wheel and a single cog ready to get inserted)

Early wooden cog wheels were used to drive [lantern gears](#Lantern_gear). See [gear trains](#Cog_wheel_and_lantern_gear).  
The cogs could have other angles than 90° relative to the axis to build angled gear trains:

![](/images/Gear_Example-04.png)

Large cog wheel resembling a Crown gear

Cog wheels have been replaced with single body gears that are called [sprockets](#Sprocket) if they mesh with cylindrical teeth such as the rollers of a (roller) chain, or ladder-like roller racks.

- In case of a bicycle's drivetrain the driven sprocket is called **cog** and the driving one is called [chain wheel](#chain_wheel).
- In connection with rack railways the gears were still called **cog wheels** or [pinions](#Pinion).

### Crown gear

A crown gear is similar to a larger bevel gear, but meshes with spur gears instead of another bevel gear. See [Crown gear and spur gear](#Crown_gear_and_spur_gear).

![](/images/Gear_Example-09.png)

Crown gear

FreeCAD provides a tools to model crown gears:

- ![](/images/FCGear_CrownGear.svg) [FCGear CrownGear](/FCGear_CrownGear "FCGear CrownGear"): Creates a crown gear.

### Double helical gear

A double helical gear has two symmetric rows of helical teeth that have an angle other than 90° to the axis of rotation. Double helical gears mesh with other double helical gears, double helical racks, or internal double helical gears.

FreeCAD provides two tools to model double helical gears:

- ![](/images/FCGear_InvoluteGear.svg) [FCGear InvoluteGear](/FCGear_InvoluteGear "FCGear InvoluteGear"): Creates an involute spur gear by default.
- ![](/images/FCGear_CycloidGear.svg) [FCGear CycloidGear](/FCGear_CycloidGear "FCGear CycloidGear"): Creates a cycloid spur gear by default.

### Helical gear

A helical gear has helical teeth that have an angle other than 90° to the axis of rotation. Helical gears mesh with other helical gears, helical racks, or internal helical gears. See [Skew gears](#Skew_gears).

FreeCAD provides two tools to model helical gears:

- ![](/images/FCGear_InvoluteGear.svg) [FCGear InvoluteGear](/FCGear_InvoluteGear "FCGear InvoluteGear"): Creates an involute spur gear by default.
- ![](/images/FCGear_CycloidGear.svg) [FCGear CycloidGear](/FCGear_CycloidGear "FCGear CycloidGear"): Creates a cycloid spur gear by default.

### Internal gear

The ![](/images/FCGear_InternalInvoluteGear.svg) [FCGear InternalInvoluteGear](/FCGear_InternalInvoluteGear "FCGear InternalInvoluteGear") tool creates an internal involute gear.

### Lantern gear

A lantern gear is an assembly of a front plate(?) and a back plate(?) and several bolts called **rollers** connecting both plates.

This kind of gear looks similar to an ancient lantern or a bird cage, that's why it's called **lantern gear** or **cage gear**.

![](/images/Gear_Example-02.png)

Lantern gear and a single roller ready to get inserted

Early wooden lantern wheels were driven by [cog wheels](#Cog_wheel). See [cog wheel gear trains](#Cog_wheel_gear_trains).

### Pinion

Pinions are [sprockets](#Sprocket) that are paired with [racks](#Rack_and_pinion).

### Sprocket

A sprocket is a gear meshing with roller racks, roller chains, or timing belts, but not with another sprocket.

FreeCAD provides three tools to model sprockets:

- ![](/images/FCGear_TimingGear.svg) [FCGear TimingGear](/FCGear_TimingGear "FCGear TimingGear"): Sprockets for timing belts (timing pulleys, toothed pulleys), creates a solid object.
- ![](/images/FCGear_LanternGear.svg) [FCGear LanternGear](/FCGear_LanternGear "FCGear LanternGear"): Sprockets for chains or racks (chain wheels, cogs, pinions), creates a solid object.
- ![](/images/PartDesign_Sprocket.svg) [PartDesign Sprocket](/PartDesign_Sprocket "PartDesign Sprocket"): Sprockets for bike chains (chain wheels, cogs), creates just an outline.

### Spur gear

A spur gear has straight teeth that are aligned parallel to the axis of rotation. Spur gears mesh with other spur gears, racks, or internal gears.

FreeCAD provides two tools to model spur gears:

- ![](/images/FCGear_InvoluteGear.svg) [FCGear InvoluteGear](/FCGear_InvoluteGear "FCGear InvoluteGear"): Creates an involute spur gear by default.
- ![](/images/FCGear_CycloidGear.svg) [FCGear CycloidGear](/FCGear_CycloidGear "FCGear CycloidGear"): Creates a cycloid spur gear by default.

### Timing pulley

Timing (belt) pulleys or or toothed pulleys are [sprockets](#Sprocket) to use with timing belts.

### Worm gear

The ![](/images/FCGear_WormGear.svg) [FCGear WormGear](/FCGear_WormGear "FCGear WormGear") tool creates a WormGear.

## Racks

A Rack is like a gear segment having an infinite radius.

### Cycloid rack

![](/images/Gear_Example-12.png)

Cycloid rack

FreeCAD provides a tool to model cycloid racks for spur gearing, helical gearing, and double helical gearing:

- ![](/images/FCGear_CycloidRack.svg) [FCGear CycloidRack](/FCGear_CycloidRack "FCGear CycloidRack"): Creates a cycloid rack for spur gearing by default.

### Involute rack

![](/images/Gear_Example-11.png)

Involute rack

FreeCAD provides a tool to model involute racks for spur gearing, helical gearing, and double helical gearing:

- ![](/images/FCGear_InvoluteRack.svg) [FCGear InvoluteRack](/FCGear_InvoluteRack "FCGear InvoluteRack"): Creates an involute rack for spur gearing by default.

### Roller rack

## Gear trains

### Cog wheel and lantern gear

![](/images/Gear_Example-GT-01.gif)

A [cog wheel](#Cog_wheel) on the left meshes with a [lantern gear](#Lantern_gear) (with its front plate removed) on the right

![](/images/Gear_Example-GT-02.gif) ![](/images/Gear_Example-05.png)

A large [cog wheel](#Cog_wheel) in the background (similar to a [crown gear](#Crown_gear)) meshes with a [lantern gear](#Lantern_gear)

### Cog wheel and roller rack

See [Rack and pinion](#Rack_and_pinion).

### Crown gear and spur gear

![](/images/Gear_Example-10.png)

A [crown gear](#Crown_gear) meshes with a [spur gear](#Spur_gear)

### Skew gears

![](/images/Gear_Example-GT-03.gif)

Skew gears are paired [helical gears](#Helical_gear) having non-parallel and offset axes of rotation

### Sprocket and chain

### Rack and pinion

![](/images/Gear_Example-03.png)

A [pinion](#Pinion) (or cog wheel) meshes with a (ladder-like) roller rack

### Rack and spur gear

![](/images/Gear_Example-13.png) ![](/images/Gear_Example-14.png)

A [spur gear](#Spur_gear) meshes with a rack. Left: Cycloid gearing. Right: Involute gearing

Retrieved from "<http://wiki.freecad.org/index.php?title=Gear&oldid=1192843>"
