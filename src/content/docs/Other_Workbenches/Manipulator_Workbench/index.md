---
title: Manipulator Workbench
---

![](/src/assets/images/Manipulator_workbench_icon.svg)

Manipulator workbench icon

## Introduction

The [Manipulator Workbench](/Manipulator_Workbench "Manipulator Workbench") is an [external workbench](/External_workbenches "External workbenches") aimed to help FreeCAD users with Aligning, Moving, Rotating and Measuring 3D objects through a friendly GUI. These series of tools help to Transform the placement and Measure objects and STEP models in FreeCAD.

## Features

![](/src/assets/images/Aligner-ico.png) **Aligner:** a set of tools to move and align 3D parts; it can also align an object (face, edge, point) to the origin in FreeCAD.

![](/src/assets/images/Manipulator_Mover.svg) **Mover:** a set of tools to move and rotate 3D parts on different Axis

![](/src/assets/images/Manipulator_Caliper.svg) **Caliper:** a set of tools to measure 3D parts, with some Snap facility and Radius, Length, Angle measurements.

These helpers work with **Part, App::Part and Body objects**.

The Tools can be **Floating** or **Docked Left or Right**.

Each Tool has a \*_Help Button_- ![](/src/assets/images/Help-btn.png) to get some useful tips

## References

- Author on github: [@easyw](https://github.com/easyw)
- FreeCAD Forums: [easyw-fc](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=6387)
- Source code on github: <https://github.com/easyw/Manipulator>
- Forum announcements/discussion: <https://forum.freecadweb.org/viewtopic.php?t=24742>

## Tutorial

[![Manipulator-WB-@Work](/src/assets/images/Manipulator-WB-%40Work.png)](https://youtu.be/owGzsd1fyZc "Title Manipulator-WB-@Work ")

YouTube Tutorial [Manipulator WorkBench @Work](https://youtu.be/owGzsd1fyZc)

## Tools

![](/src/assets/images/Manipulator-WB-Tools.png)

Above: Manipulator workbench dialog. For a more detailed description see [README.md](https://github.com/easyw/Manipulator/blob/master/README.md) on Github.

### Aligner

![](/src/assets/images/Manipulator-WB-Aligner.gif)

Aligner: set of tools to move and align 3D parts; it can also align an object (face, edge, point) to the origin in FreeCAD

### Mover

![](/src/assets/images/Manipulator-WB-Mover.gif)

Mover: set of tools to move and rotate 3D parts on different Axis

![](/src/assets/images/Manipulator-WB-Mover-with-App_Part%26Body.gif)

Mover: Using App:Part and Body

![](/src/assets/images/Manipulator-WB-Mover-with-External-Reference.gif)

Mover: with External Reference

### Caliper

![](/src/assets/images/Manipulator-WB-Measure-Radius.gif)

Caliper: measuring Radius

![](/src/assets/images/Manipulator-WB-Measure-Angles.gif)

Caliper: measuring Angles

![](/src/assets/images/Manipulator-WB-Dimension.gif)

Caliper: measuring Dimensions

![](/src/assets/images/Manipulator-WB-Dimension-2.gif)

Caliper: measuring Dimensions (cont.)

![](/src/assets/images/Manipulator-WB-Parallel-Planes-Distance.gif)

Caliper: parallel planes distance

### Manipulator

![](/src/assets/images/Manipulator-WB-Assembly-Parts.gif)

## Installation

### Automatic Installation

The recommended way to install the Manipulator Workbench is via the ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") under the **Tools → Addon Manager** menu.

### Manual Installation

If a manual install is necessary please follow the following instructions:

- Copying the Manipulator source in to the Mod sub-directory of the FreeCAD application.

```
cd ~/.FreeCAD/Mod
git clone https://github.com/easyw/Manipulator Manipulator

```

- Restart FreeCAD

### Supports

- FreeCAD v0.15 4671
- FreeCAD v0.16 >= 6712
- FreeCAD v0.17 >= 11707
- FreeCAD v0.18+
- FreeCAD v0.19+

## History

The workbench evolved out of the [Center Align Objects with Faces or Edges](/Macro_Center_Align_Objects_with_Faces_or_Edges "Macro Center Align Objects with Faces or Edges") macro

## External workbenches

FreeCAD workbenches are easy to program in [Python](/Python "Python"), there are therefore many people developing additional workbenches outside of the FreeCAD main developers.

The [external workbenches](/External_workbenches "External workbenches") page has some information and tutorials on some of them, and the [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons) project aims at gathering them and making them easily installable from within FreeCAD.

New workbenches are in development, stay tuned!

Retrieved from "<http://wiki.freecad.org/index.php?title=Manipulator_Workbench/en&oldid=1072001>"
