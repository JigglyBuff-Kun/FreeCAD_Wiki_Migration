---
title: Lattice2 Workbench
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::
![](/images/Lattice2_workbench_icon.svg)

The FreeCAD Lattice2 External Workbench Icon

## Introduction

:::caution
Lattice2 is stable. New features may be added, but no breaking changes are supposed to happen.
:::

The Lattice2 Workbench is a FreeCAD [external workbench](/External_workbenches "External workbenches") that serves the purpose of working with placements and arrays of placements. It is a sort of Assembly workbench, but with emphasis on arrays. There are no constraints and relations, there are just arrays of placements that can be generated, combined, transformed, superimposed, and populated with shapes.

Ever wondered how to create a protractor with FreeCAD? That's the aim of the workbench (including tick labeling). Also, exploded assemblies can be made with the workbench.

Additionally, the workbench features a few general-purpose tools, such as parametric downgrade, bounding boxes, shape info tool, and tools for working with collections of shapes (compounds).

One of the big design goals of the workbench is being as parametric as possible.

## References

- Author: DeepSOIC
- Home page: <https://github.com/DeepSOIC/Lattice2>
- Source code on github: <https://github.com/DeepSOIC/Lattice2>

## Tools

Detailed description on the [Lattice2 Github wiki](https://github.com/DeepSOIC/Lattice2/wiki)

### Toolbar

![](/images/Lattice2-menu-orizz.png)

Lattice2 Toolbar

### Commands

- ![](/images/Lattice2_Placement.svg) [Placement](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: Custom](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: XY plane](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: XZ plane](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: YZ plane](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: along X](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: along Y](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: along Z](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: Euler angles](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_PlacementFromShape.svg) [Placement of shape: Copy object.Placement](/index.php?title=Lattice2_PlacementFromShape&action=edit&redlink=1 "Lattice2 PlacementFromShape (page does not exist)")
  - ![](/images/Lattice2_PlacementFromShape.svg) [Placement of shape: Center of bounding box](/index.php?title=Lattice2_PlacementFromShape&action=edit&redlink=1 "Lattice2 PlacementFromShape (page does not exist)")
  - ![](/images/Lattice2_PlacementFromShape.svg) [Placement of shape: Center of mass](/index.php?title=Lattice2_PlacementFromShape&action=edit&redlink=1 "Lattice2 PlacementFromShape (page does not exist)")
  - ![](/images/Lattice2_PlacementFromShape.svg) [Placement of shape: Inertial axis system](/index.php?title=Lattice2_PlacementFromShape&action=edit&redlink=1 "Lattice2 PlacementFromShape (page does not exist)")
- ![](/images/Lattice2_AttachablePlacement.svg) [Attachable Placement](/Lattice2_AttachablePlacement "Lattice2 AttachablePlacement")
- ![](/images/Lattice2_LinearArray.svg) [Generate linear array](/index.php?title=Lattice2_LinearArray&action=edit&redlink=1 "Lattice2 LinearArray (page does not exist)")
- ![](/images/Lattice2_PolarArray.svg) [Generate polar array](/index.php?title=Lattice2_PolarArray&action=edit&redlink=1 "Lattice2 PolarArray (page does not exist)")
- ![](/images/Lattice2_ArrayFromShape.svg) [Array from shape](/index.php?title=Lattice2_ArrayFromShape&action=edit&redlink=1 "Lattice2 ArrayFromShape (page does not exist)")
  - ![](/images/Lattice2_ArrayFromShape.svg) [Internal placements](/index.php?title=Lattice2_ArrayFromShape&action=edit&redlink=1 "Lattice2 ArrayFromShape (page does not exist)")
  - ![](/images/Lattice2_ArrayFromShape.svg) [Center of bounding box](/index.php?title=Lattice2_ArrayFromShape&action=edit&redlink=1 "Lattice2 ArrayFromShape (page does not exist)")
  - ![](/images/Lattice2_ArrayFromShape.svg) [Center of mass](/index.php?title=Lattice2_ArrayFromShape&action=edit&redlink=1 "Lattice2 ArrayFromShape (page does not exist)")
  - ![](/images/Lattice2_ArrayFromShape.svg) [Inertial axis system](/index.php?title=Lattice2_ArrayFromShape&action=edit&redlink=1 "Lattice2 ArrayFromShape (page does not exist)")
- ![](/images/Lattice2_InvertLattice.svg) [Invert lattice](/index.php?title=Lattice2_InvertLattice&action=edit&redlink=1 "Lattice2 InvertLattice (page does not exist)")
- ![](/images/Lattice2_JoinArrays.svg) [Join arrays](/index.php?title=Lattice2_JoinArrays&action=edit&redlink=1 "Lattice2 JoinArrays (page does not exist)")
- ![](/images/Lattice2_ArrayFilter.svg) [Array filter](/index.php?title=Lattice2_ArrayFilter&action=edit&redlink=1 "Lattice2 ArrayFilter (page does not exist)")
  - ![](/images/Lattice2_ArrayFilter.svg) [Selected items](/index.php?title=Lattice2_ArrayFilter&action=edit&redlink=1 "Lattice2 ArrayFilter (page does not exist)")
  - ![](/images/Lattice2_ArrayFilter.svg) [Touching](/index.php?title=Lattice2_ArrayFilter&action=edit&redlink=1 "Lattice2 ArrayFilter (page does not exist)")
  - ![](/images/Lattice2_ArrayFilter.svg) [Within distance window](/index.php?title=Lattice2_ArrayFilter&action=edit&redlink=1 "Lattice2 ArrayFilter (page does not exist)")
  - ![](/images/Lattice2_ArrayFilter.svg) [Pointing at shape](/index.php?title=Lattice2_ArrayFilter&action=edit&redlink=1 "Lattice2 ArrayFilter (page does not exist)")
- ![](/images/Lattice2_ExplodeArray.svg) [Explode array](/index.php?title=Lattice2_ExplodeArray&action=edit&redlink=1 "Lattice2 ExplodeArray (page does not exist)")
- ![](/images/Lattice2_ProjectArray.svg) [Project array](/index.php?title=Lattice2_ProjectArray&action=edit&redlink=1 "Lattice2 ProjectArray (page does not exist)")
- ![](/images/Lattice2_ResampleArray.svg) [Resample array](/index.php?title=Lattice2_ResampleArray&action=edit&redlink=1 "Lattice2 ResampleArray (page does not exist)")
- ![](/images/Lattice2_PopulateCopiesNormal.svg) [Populate with copies](/index.php?title=Lattice2_PopulateCopiesNormal&action=edit&redlink=1 "Lattice2 PopulateCopiesNormal (page does not exist)")
  - ![](/images/Lattice2_PopulateCopiesNormal.svg) [Populate with copies](/index.php?title=Lattice2_PopulateCopiesNormal&action=edit&redlink=1 "Lattice2 PopulateCopiesNormal (page does not exist)")
  - ![](/images/Lattice2_PopulateCopiesArray.svg) [Populate with copies: Build array](/index.php?title=Lattice2_PopulateCopiesArray&action=edit&redlink=1 "Lattice2 PopulateCopiesArray (page does not exist)")
  - ![](/images/Lattice2_PopulateCopiesMove.svg) [Moved object](/index.php?title=Lattice2_PopulateCopiesMove&action=edit&redlink=1 "Lattice2 PopulateCopiesMove (page does not exist)")
- ![](/images/Lattice2_PopulateChildrenNormal.svg) [Populate with children](/index.php?title=Lattice2_PopulateChildrenNormal&action=edit&redlink=1 "Lattice2 PopulateChildrenNormal (page does not exist)")
  - ![](/images/Lattice2_PopulateChildrenNormal.svg) [Populate with children](/index.php?title=Lattice2_PopulateChildrenNormal&action=edit&redlink=1 "Lattice2 PopulateChildrenNormal (page does not exist)")
  - ![](/images/Lattice2_PopulateChildrenArray.svg) [Populate with children: Build array](/index.php?title=Lattice2_PopulateChildrenArray&action=edit&redlink=1 "Lattice2 PopulateChildrenArray (page does not exist)")
  - ![](/images/Lattice2_PopulateChildrenMove.svg) [Moved children](/index.php?title=Lattice2_PopulateChildrenMove&action=edit&redlink=1 "Lattice2 PopulateChildrenMove (page does not exist)")
- ![](/images/Lattice2_ParametricDowngrade.svg) [Parametric downgrade](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Leaves](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to CompSolids](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Shells](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to OpenWires](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Faces](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Wires](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Edges](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Seam edges](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Non-seam edges](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Vertices](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
- ![](/images/Lattice2_SubLink.svg) [Sub link](/index.php?title=Lattice2_SubLink&action=edit&redlink=1 "Lattice2 SubLink (page does not exist)")
- ![](/images/Lattice2_MakeCompound.svg) [Make compound](/index.php?title=Lattice2_MakeCompound&action=edit&redlink=1 "Lattice2 MakeCompound (page does not exist)")
- ![](/images/Lattice2_ExplodeCompound.svg) [Explode compound](/index.php?title=Lattice2_ExplodeCompound&action=edit&redlink=1 "Lattice2 ExplodeCompound (page does not exist)")
- ![](/images/Lattice2_FuseCompound.svg) [Fuse compound](/index.php?title=Lattice2_FuseCompound&action=edit&redlink=1 "Lattice2 FuseCompound (page does not exist)")
- ![](/images/Lattice2_BoundingBox.svg) [Bounding box](/index.php?title=Lattice2_BoundingBox&action=edit&redlink=1 "Lattice2 BoundingBox (page does not exist)")
  - ![](/images/Lattice2_BoundingBox.svg) [Whole](/index.php?title=Lattice2_BoundingBox&action=edit&redlink=1 "Lattice2 BoundingBox (page does not exist)")
  - ![](/images/Lattice2_BoundingBoxCompound.svg) [Children](/index.php?title=Lattice2_BoundingBoxCompound&action=edit&redlink=1 "Lattice2 BoundingBoxCompound (page does not exist)")
- ![](/images/Lattice2_ShapeString.svg) [Shape string for array](/index.php?title=Lattice2_ShapeString&action=edit&redlink=1 "Lattice2 ShapeString (page does not exist)")
- ![](/images/Lattice2_ParaSeries.svg) [Para series](/index.php?title=Lattice2_ParaSeries&action=edit&redlink=1 "Lattice2 ParaSeries (page does not exist)")
- ![](/images/Lattice2_Inspect.svg) [Inspect](/index.php?title=Lattice2_Inspect&action=edit&redlink=1 "Lattice2 Inspect (page does not exist)")
  - ![](/images/Lattice2_InspectSelection.svg) [Inspect seletion](/index.php?title=Lattice2_InspectSelection&action=edit&redlink=1 "Lattice2 InspectSelection (page does not exist)")
  - ![](/images/Lattice2_InspectShape.svg) [Shape info (feature)](/index.php?title=Lattice2_InspectShape&action=edit&redlink=1 "Lattice2 InspectShape (page does not exist)")
- ![](/images/Lattice2_SubstituteObject.svg) [Substitute object](/index.php?title=Lattice2_SubstituteObject&action=edit&redlink=1 "Lattice2 SubstituteObject (page does not exist)")

* Expose links to subelements

Other

- Recomputes
  - ![](/images/Lattice2_RecomputeMakeFeature.svg) [Make recompute locher object](/index.php?title=Lattice2_RecomputeMakeFeature&action=edit&redlink=1 "Lattice2 RecomputeMakeFeature (page does not exist)"):
  - ![](/images/Lattice2_RecomputeLock.svg) [Lock recomputes](/index.php?title=Lattice2_RecomputeLock&action=edit&redlink=1 "Lattice2 RecomputeLock (page does not exist)"):
  - ![](/images/Lattice2_RecomputeUnlock.svg) [Unlock recomputes](/index.php?title=Lattice2_RecomputeUnlock&action=edit&redlink=1 "Lattice2 RecomputeUnlock (page does not exist)"):
  - ![](/images/Lattice2_RecomputeFeature.svg) [Recompute feature](/index.php?title=Lattice2_RecomputeFeature&action=edit&redlink=1 "Lattice2 RecomputeFeature (page does not exist)"):
  - ![](/images/Lattice2_RecomputeDocument.svg) [Recompute document](/index.php?title=Lattice2_RecomputeDocument&action=edit&redlink=1 "Lattice2 RecomputeDocument (page does not exist)"):
  - ![](/images/Lattice2_RecomputeForce.svg) [Force recompute](/index.php?title=Lattice2_RecomputeForce&action=edit&redlink=1 "Lattice2 RecomputeForce (page does not exist)"):
  - ![](/images/Lattice2_RecomputeTouch.svg) [Touch selected feature](/index.php?title=Lattice2_RecomputeTouch&action=edit&redlink=1 "Lattice2 RecomputeTouch (page does not exist)"):

* ![](/images/Lattice2_workbench_icon.svg) Lattice2 Workbench icon

## Installation

**Prerequisites**: Lattice2 Workbench requires FreeCAD >= v0.16.5155.

### Automatic installation

As of v0.17 one can use the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") to install the ![](/images/Lattice2_workbench_icon.svg) Lattice2 Workbench. Use **Tools → Addon Manager**

### Manual Install

- Scroll to the top of the page, and click 'download zip' button
- Unpack the contents into a "Lattice2" folder created in \Path\to\FreeCAD\Mod, and restart FreeCAD.
- Note that InitGui.py (and the rest of .py files) should end up directly under Mod\Lattice2 (not under nested directory like Mod\Lattice2\Lattice2).

After you install the workbench, it should appear at the bottom of list of workbench selector in FreeCAD.

## Tutorials

- Tutorials: [Gallery](https://github.com/DeepSOIC/Lattice2/wiki/Gallery)
- [Basic Tutorial](https://github.com/DeepSOIC/Lattice2/wiki/Basic-Tutorial)
- [Lattice2 in PartDesign](https://github.com/DeepSOIC/Lattice2/wiki/PartDesign-Pattern-Tutorial)
- [Making a Cogset](https://github.com/DeepSOIC/Lattice2/wiki/Cogset-Tutorial)
- [Feature Patterns in Lattice2 Workbench](https://www.youtube.com/watch?v=BXmeEGnhszo) by @sliptonic

## Links to Lattice2 workbench

- Lattice2 Wiki: <https://github.com/DeepSOIC/Lattice2/wiki>
- FreeCAD Wiki: <https://www.freecadweb.org/wiki/Lattice2_Workbench>
- FreeCAD Forum: [Lattice workbench - v2.0 is becoming stable](http://forum.freecadweb.org/viewtopic.php?t=12464)
- Gallery: <https://github.com/DeepSOIC/Lattice2/wiki/Gallery>
- Report bugs: Please report bugs at <https://github.com/DeepSOIC/Lattice2/issues>

## Other useful links

- [Lattice aka Lattice1 Workbench (obsolete)](https://github.com/DeepSOIC/Lattice)
- [External Workbenches](/External_workbenches "External workbenches"): List of FreeCAD workbenches.
- [Macros recipes](/Macros_recipes "Macros recipes")
- [FreeCAD Community Portal](/FreeCAD_Community_Portal "FreeCAD Community Portal")

Retrieved from "<http://wiki.freecad.org/index.php?title=Lattice2_Workbench/en&oldid=1287511>"
