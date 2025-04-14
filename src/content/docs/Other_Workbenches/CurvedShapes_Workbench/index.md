---
title: CurvedShapes Workbench
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::
![](/images/CurvedShapes_workbench_icon.svg)

CurvedShapes Workbench icon

## Introduction

Curved Shapes is a FreeCAD [external workbench](/External_workbenches "External workbenches") that creates 3D shapes from 2D curves.

## Installation

Recommended installation is through the FreeCAD ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") via the **Tools → Addon Manager**

## Tools

- ![](/images/CurvedShapes_CurvedArray.svg) [CurvedArray](/CurvedShapes_CurvedArray "CurvedShapes CurvedArray"): Creates an array and resizes the items in the bounds of one or more hull curves.
- ![](/images/CurvedShapes_CurvedSegment.svg) [CurvedSegment](/index.php?title=CurvedShapes_CurvedSegment&action=edit&redlink=1 "CurvedShapes CurvedSegment (page does not exist)"): Interpolates between two 2D curves. The interpolated curves can be resized in the bounds of some hullcurves.
- ![](/images/CurvedShapes_InterpolatedMiddle.svg) [InterpolatedMiddle](/index.php?title=CurvedShapes_InterpolatedMiddle&action=edit&redlink=1 "CurvedShapes InterpolatedMiddle (page does not exist)"): Interpolates a 2D shape into the middle between two 2D curves. The base shapes can be connected to a shape with a sharp corner.
- ![](/images/CurvedShapes_SurfaceCut.svg) [SurfaceCut](/index.php?title=CurvedShapes_SurfaceCut&action=edit&redlink=1 "CurvedShapes SurfaceCut (page does not exist)"): Cuts a surface to get the outline curve or a face. This tool is similar to ![](/images/Part_CrossSections.svg) [Cross-Sections](/Part_CrossSections "Part CrossSections") in the ![](/images/Workbench_Part.svg) [Part workbench](/Part_Workbench "Part Workbench"), but it is fully parametric and has an option to reduce the complexity of the output curve. It tries to remove overlapping edges.

### Examples

- ![](/images/CurvedShapes_HortenHIX.svg) [HortenHIX](/index.php?title=CurvedShapes_HortenHIX&action=edit&redlink=1 "CurvedShapes HortenHIX (page does not exist)"): A Python script that creates the shape of the [Horten Ho 229 (also called Horten H IX)](https://en.wikipedia.org/wiki/Horten_Ho_229), a stealth fighter that has been build in Germany in 1944.
- ![](/images/CurvedShapes_FlyingWingS800.svg) [FlyingWingS800](/index.php?title=CurvedShapes_FlyingWingS800&action=edit&redlink=1 "CurvedShapes FlyingWingS800 (page does not exist)"): A Python script that creates the shape of a flying wing radio-controlled model.

## References

- Author: @chbergmann
- Github repo: <https://github.com/chbergmann/CurvedShapesWorkbench>

## Related

- [Curves Workbench](/Curves_Workbench "Curves Workbench")
- [AirPlaneDesign Workbench](https://github.com/FredsFactory/FreeCAD_AirPlaneDesign)

## External Workbenches

Retrieved from "<http://wiki.freecad.org/index.php?title=CurvedShapes_Workbench/en&oldid=1077867>"
