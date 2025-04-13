---
title: Curves Workbench
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Introduction

![](/src/assets/images/Curves_workbench_icon.svg)

Curves External workbench icon

The Curves Workbench is an [External workbench](/External_workbenches "External workbenches") that is Python based with a collection of tools for NURBS curves and surfaces. This workbench is developed with FreeCAD Master and OCC 7.4.

Note: Some tools may not work with earlier versions.

## Installation

Download the Curves Workbench via the ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr"). Select the **Tools → Addon Manager** option from the menu.

## References

- Developer: @Chris_G
- Github: <https://github.com/tomate44/CurvesWB>
- Discussion: <https://forum.freecad.org/viewtopic.php?f=8&t=22675>
- YouTube tutorial using Curves Workbench: <https://www.youtube.com/watch?v=ZVdbvxmJ3Mo>
- Dailymotion tutorial, tide bottle, demoing Curves Workbench: <https://www.dailymotion.com/video/x6bo9a6>

## Tools

With the latest update the order of the tools was matched with the menu options of version 0.6.59 and some missing tools were added.

### Curve tools

- ![](/src/assets/images/Curves_Line.svg) [Parametric line](/Curves_Line "Curves Line"): Creates a parametric line between two vertices.

- ![](/src/assets/images/Curves_EditableSpline.svg) [Freehand BSpline](/Curves_EditableSpline "Curves EditableSpline"): Creates a freehand B-spline curve.

- ![](/src/assets/images/Curves_MixedCurve.svg) [Mixed curve](/Curves_MixedCurve "Curves MixedCurve"): Creates a 3D curve as the intersection of 2 projected curves.

- ![](/src/assets/images/Curves_ExtendCurve.svg) [Curve extend](/Curves_ExtendCurve "Curves ExtendCurve"): Extends the selected edge.

- ![](/src/assets/images/Curves_JoinCurve.svg) [joinCurves](/Curves_JoinCurve "Curves JoinCurve"): Joins the selected edges into B-spline curves.

- ![](/src/assets/images/Curves_SplitCurve.svg) [Split curve](/Curves_SplitCurve "Curves SplitCurve"): Splits the selected edge.

- ![](/src/assets/images/Curves_Discretize.svg) [Discretize](/Curves_Discretize "Curves Discretize"): Discretizes an edge or a wire.

- ![](/src/assets/images/Curves_Approximate.svg) [Approximate](/Curves_Approximate "Curves Approximate"): Approximates points to NURBS curve or surface.

- ![](/src/assets/images/Curves_Interpolate.svg) [Interpolate](/Curves_Interpolate "Curves Interpolate"): Interpolates points with a B-spline curve.

- ![](/src/assets/images/Curves_ParametricBlendCurve.svg) [Blend curve](/Curves_ParametricBlendCurve "Curves ParametricBlendCurve"): Creates a parametric blend curve between two edges.

- ![](/src/assets/images/Curves_ParametricComb.svg) [Comb plot](/Curves_ParametricComb "Curves ParametricComb"): Creates a parametric Comb plot on selected edges.

- ![](/src/assets/images/Curves_CurveOnSurface.svg) [CurveOnSurface](/Curves_CurveOnSurface "Curves CurveOnSurface"): Projects a curve on a surface object.

### Surface tools

- ![](/src/assets/images/Curves_ZebraTool.svg) [ZebraTool](/Curves_ZebraTool "Curves ZebraTool"): Zebra texture for surface inspection.

- ![](/src/assets/images/Curves_TrimFace.svg) [Trim face](/Curves_TrimFace "Curves TrimFace"): Trims a face with a projected curve.

- ![](/src/assets/images/Curves_IsoCurve.svg) [IsoCurve](/Curves_IsoCurve "Curves IsoCurve"): Applies a UV oriented lattice onto selected surfaces.

- ![](/src/assets/images/Curves_SketchOnSurface.svg) [Sketch on surface](/Curves_SketchOnSurface "Curves SketchOnSurface"): Maps a sketch on to a surface.

- ![](/src/assets/images/Curves_Sweep2Rails.svg) [Sweep2Rails](/Curves_Sweep2Rails "Curves Sweep2Rails"):

- ![](/src/assets/images/Curves_ProfileSupport.svg) [Profile support plane](/Curves_ProfileSupport "Curves ProfileSupport"): Creates a support plane for sketches.

- ![](/src/assets/images/Curves_PipeshellProfile.svg) [Pipeshell profile](/Curves_PipeshellProfile "Curves PipeshellProfile"): Creates a Profile object for PipeShell.

- ![](/src/assets/images/Curves_Pipeshell.svg) [Pipeshell](/Curves_Pipeshell "Curves Pipeshell"): Creates a Pipeshell sweep object.

- ![](/src/assets/images/Curves_GordonSurface.svg) [Gordon surface](/Curves_GordonSurface "Curves GordonSurface"): Creates a surface that skins a network of curves.

- ![](/src/assets/images/Curves_SegmentSurface.svg) [Segment surface](/Curves_SegmentSurface "Curves SegmentSurface"): Segments a surface on isocurves.

- ![](/src/assets/images/Curves_CompressionSpring.svg) [Compression Spring](/Curves_CompressionSpring "Curves CompressionSpring"): Creates a compression spring.

- ![](/src/assets/images/Curves_ReflectLines.svg) [Reflect Lines](/Curves_ReflectLines "Curves ReflectLines"): Creates the reflect lines on a shape, according to a view direction.

- ![](/src/assets/images/Curves_MultiLoft.svg) [MultiLoft](/Curves_MultiLoft "Curves MultiLoft"): Lofts profile objects made of multiple faces in parallel.

- ![](/src/assets/images/Curves_BlendSurf2.svg) [BlendSurface](/Curves_BlendSurf2 "Curves BlendSurf2"): Creates a surface between two edges with some continuity with their support faces.

- ![](/src/assets/images/Curves_BlendSolid.svg) [BlendSolid](/Curves_BlendSolid "Curves BlendSolid"): Creates a solid between two edges with some continuity with their support shapes.

- ![](/src/assets/images/Curves_FlattenFace.svg) [Flatten face](/Curves_FlattenFace "Curves FlattenFace"): Creates a flat developed face from conical or cylindrical faces.

- ![](/src/assets/images/Curves_RotationSweep.svg) [Rotation Sweep](/Curves_RotationSweep "Curves RotationSweep"): Sweeps profiles along a spine (sweep path) or a point.

- ![](/src/assets/images/Curves_ZebraTool.svg) [Title](/Curves_SurfaceAnalysis "Curves SurfaceAnalysis"): <- Wrong Icon and name! - (Curves SurfaceAnalysis) Creates visual analysis maps on selected shapes.

- ![](/src/assets/images/Curves_DraftAnalysis.svg) [Draft Analysis](/Curves_DraftAnalysis "Curves DraftAnalysis"): Creates a colored overlay on an object to visualize draft angles.

- ![](/src/assets/images/Curves_TruncateExtend.svg) [Truncated Extend](/Curves_TruncateExtend "Curves TruncateExtend"): Cuts a shape and truncates or extends it by a given distance.

- ![](/src/assets/images/Curves_WaterlineCurves.svg) [WaterLine](/Curves_WaterlineCurves "Curves WaterlineCurves"): Creates waterline curves on selected faces.

### Miscellaneous tools

- ![](/src/assets/images/Curves_GeomInfo.svg) [GeomInfo](/Curves_GeomInfo "Curves GeomInfo"): Toggles the display of information about selected shapes.

- ![](/src/assets/images/Curves_ExtractSubshape.svg) [Extract subshape](/Curves_ExtractSubshape "Curves ExtractSubshape"): Creates non-parametric copies of selected sub shapes.

- ![](/src/assets/images/Curves_ParametricSolid.svg) [Parametric solid](/Curves_ParametricSolid "Curves ParametricSolid"): Creates a parametric solid from selected faces.

- ![](/src/assets/images/Curves_PasteSVG.svg) [Paste SVG](/Curves_PasteSVG "Curves PasteSVG"): Pastes the SVG content of the clipboard.

- ![](/src/assets/images/Curves_ToConsole.svg) [Objects to console](/Curves_ToConsole "Curves ToConsole"): Moves objects to the console.

- ![](/src/assets/images/Curves_AdjacentFaces.svg) [Select Adjacent faces](/Curves_AdjacentFaces "Curves AdjacentFaces"): Selects the adjacent faces of the selected subshape.

- ![](/src/assets/images/Curves_BSplineToConsole.svg) [BSpline to Console](/Curves_BSplineToConsole "Curves BSplineToConsole"): Creates a Python script to build the selected B-spline or Bézier geometries.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Workbench/en&oldid=1565156>"
