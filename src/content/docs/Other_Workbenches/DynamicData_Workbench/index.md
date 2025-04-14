---
title: DynamicData Workbench
---

![](/images/DynamicData_workbench_icon.svg)

DynamicData External Workbench Icon

## Overview

DynamicData is an [external workbench](/External_workbenches "External workbenches") with which one can create a container object for holding custom properties.

With this workbench it's possible to create a new custom [property](/Property "Property") of just about any type that FreeCAD supports. For example a Length property or a [Placement](/Placement "Placement") property. These custom properties can then be used in [Expressions](/Expressions "Expressions") just like any other property. For example, you could create a Length property called "Width" and refer to it when constraining a sketch element. Then when the "Width" property is changed, the sketch constraint will automatically update. This is similar to the way one can use a spreadsheet, but is more interactive in that the properties can be changed while still being able to see the [3D view](/3D_view "3D view") and also allows for a wider variety of property types.

Some features include:

- ability to import named constraints from a sketch
- ability to copy properties or set property values from one object to another
- container objects remain compatible with FreeCAD installations that do not have the workbench installed

## Installation

This workbench can be installed from the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). For manual installation see [Installing more workbenches](/Installing_more_workbenches "Installing more workbenches").

## Links

- Source code hosted on GitHub: [github.com](https://github.com/mwganson/DynamicData)
- Official complete [documentation](https://github.com/mwganson/DynamicData/blob/master/README.md)

## External workbenches

FreeCAD workbenches are easy to program in [Python](/Python "Python"), there are therefore many people developing additional workbenches outside of the FreeCAD main developers.

The [external workbenches](/External_workbenches "External workbenches") page has some information and tutorials on some of them, and the [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons) project aims at gathering them and making them easily installable from within FreeCAD.

New workbenches are in development, stay tuned!

Retrieved from "<http://wiki.freecad.org/index.php?title=DynamicData_Workbench/en&oldid=1035071>"
