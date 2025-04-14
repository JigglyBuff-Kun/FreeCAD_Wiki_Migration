---
title: Part
---

## Introduction

In FreeCAD the word "[Part](/Part "Part")" is normally used to refer to a ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") (`App::Part` class), a type of container object that is defined by the base system. This Part is used to manage the position of 3D shapes in order to create mechanical assemblies.

See ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") for more information about this type of object.

## Usage

The Std Part tool is not defined by a particular workbench, but by the base system, thus it is found in the **structure toolbar**, which is available in all [workbenches](/Workbenches "Workbenches").

1. Press the ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") button. An empty Part is created and automatically becomes _[active](/Std_Part#Active_status "Std Part")_.

## Notes

In informal usage, a "Part" may be any geometrical figure that is visible in the [3D view](/3D_view "3D view"), and thus its concept may be confused with that of "[Body](/Body "Body")" or "[Assembly](/Assembly "Assembly")".

However, when more precision is required, the distinction must be made.

- A "[Body](/Body "Body")" is used for single contiguous elements, usually created with the [Part](/Part_Workbench "Part Workbench") or [PartDesign Workbenches](/PartDesign_Workbench "PartDesign Workbench").
- A "Part" is used to group a single "Body", or several of them to form an "Assembly".
- An "Assembly" is a collection of "Parts" arranged in some way, manually, or by using an assembly workbench.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part/en&oldid=1102257>"
