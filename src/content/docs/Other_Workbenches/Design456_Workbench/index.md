---
title: Design456 Workbench
---

:::caution
This workbench is under heavy development
:::

## Introduction

![](/images/Design456_workbench_icon.svg)

Design456 External workbench icon

The Design456 workbench is an [External workbench](/External_workbenches "External workbenches") that plans to implement a Direct Modeling methodology in FreeCAD. Think 'push and pull geometry' that one finds in CAD suites like SketchUp and Fusion360.

The original idea came to live when the developer of Design456 wanted to do the basic tasks which is simple and easy to do in 123D Design. FreeCAD could do the same job but the tools aren't interfaced in that way. This workbench will not keep track of old shapes. It tries to clean up the garbage which might be produced during running under commands. It tries to make the tree as simple as possible. Parameters must be decided during the desired manipulations which cannot be changed later.

This Wikipage is not updated regularly. To get the latest tool-list, you need to look at Design456 github or youtube videos. Only one developer is working on this project, and time to update these all documents is missing unfortunately.

## Background

Traditionally, FreeCAD employs a Parametric Modeling methodology which is a powerful and scalable approach. It is also has been an industry standard. But I wish to have another approach. My workbench will try to implement direct modeling which is not provided at the moment by FreeCAD.

## Important note

Please notice that there is no released version yet for this workbench. Intensively development is ongoing and bug is expected for the tools. Don't use it on serious document yet. Make a copy of you object and apply my tools. By that you know if it works for you or not without taking risk.

## Installation

Download the Design456 workbench via the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") **Tools → Addon Manager**

If the above is not working for you please consider :

- Addon manager no longer works in FreeCAD 0.18 due to changes in Github use FreeCAD 0.20 instead.
- Invoke the Addon Manager - Tools | Adddon manager.
- Select Configure..Into Custom repositories enter <https://github.com/MariwanJ/Design456>.
- Then OK.
- Restart FreeCAD.

## References

- Developer: @MariwanJ (Mariwan Jalal)
- Youtube channel : [Youtube channel](https://www.youtube.com/user/BestofMyDream) used to announce new updates 2022-01-20
- Github: [Design456](https://github.com/MariwanJ/Design456) used to announce new updates 2022-01-20
- Discussion: [forum thread](https://forum.freecadweb.org/viewtopic.php?f=8&t=54893) Not used anymore 2022-01-20

## Tools

### 2D Drawing and manipulation tools

- ![](/images/Design456_3Point.svg) [Design456 Arc3Points](/Design456_3Point "Design456 3Point"): Use this tool to create an Arc from 3 vertices.

- ![](/images/Design456_MultiPointsToWireClose.svg) [Design456 MultiPointsToWireClose](/Design456_MultiPointsToWireClose "Design456 MultiPointsToWireClose"): Use this tool to create a series of lines between points selected in series(closed).

- ![](/images/Design456_MultiPointsToWireOpen.svg) [Design456 MultiPointsToWireOpen](/Design456_MultiPointsToWireOpen "Design456 MultiPointsToWireOpen"): Use this tool to create a series of lines between points selected in series (open).

- ![](/images/Design456_2DTrimLine.svg) [Design456 Trim a line](/Design456_2DTrim "Design456 2DTrim"): Use this tool delete a line/wire.

- ![](/images/2D_ExtendLine.svg) [Design456 Extend a line or a wire](/Design456_2DExtend "Design456 2DExtend"): Use this tool to extend any wire or line .

### 3D Drawing and manipulation tools

- ![](/images/Design456_Extrude.svg) [Design456 Extrude](/Design456_Extrude "Design456 Extrude"): Use this tool to extrude any face of 2D or 3D object.

- ![](/images/Extract.svg) [Design456 Extract Face](/Design456_Extract "Design456 Extract"): Use this tool to extract a face, edge or vertex from any object.

- ![](/images/Design456_PartMerge.svg) [Design456 3D PartMerge](/Design456_PartMerge "Design456 PartMerge"): Use this tool to merge 3D objects.

- ![](/images/SimplifyCompound.svg) [Design456 Simplify Compound Obects](/index.php?title=Design456_SimplifyCompound&action=edit&redlink=1 "Design456 SimplifyCompound (page does not exist)"): Use this tool to simplify faces of 3D objects.

- ![](/images/Design456_PartSubtract.svg) [Design456 3D PartSubtract](/Design456_PartSubtract "Design456 PartSubtract"): Use this tool to subtract/cut 3D objects.

- ![](/images/Design456_PartIntersect.svg) [Design456 3D Parts Intersect](/index.php?title=Design456_PartIntersect&action=edit&redlink=1 "Design456 PartIntersect (page does not exist)"): Use this tool to create new object which is common between two shapes intersecting each other.

- ![](/images/Design456_LoftOnDirection.svg) [Design456 Loft on direction](/Design456_LoftOnDirection "Design456 LoftOnDirection"): Use this tool create new 3D object based on the face you select and the scale you choose.

- ![](/images/Design456_PartGroup.svg) [Design456 3D Part Grouping](/index.php?title=Design456_PartGroup&action=edit&redlink=1 "Design456 PartGroup (page does not exist)"): Use this tool to collect several parts in one group.

- ![](/images/Design456_PartCompound.svg) [Design456 3D Part Compound](/index.php?title=Design456_PartCompound&action=edit&redlink=1 "Design456 PartCompound (page does not exist)"): Use this tool to compound different parts.

- ![](/images/PartDesign_Shell.svg) [Design456 3D Part Shell](/index.php?title=Design456Part_Shell&action=edit&redlink=1 "Design456Part Shell (page does not exist)"): Use this tool to make Shell.

- ![](/images/DivideObject.svg) [Design456 3D Divide Object](/index.php?title=Design456_DivideObject&action=edit&redlink=1 "Design456 DivideObject (page does not exist)"): Use this tool to divide 3D object faces.

- ![](/images/Design456_SplitObject.svg) [Design456 Split a 3D object](/Design456_SplitObject "Design456 SplitObject"): Use this tool to split any 3D object.

- ![](/images/PartDesign_Fillet.svg) [Design456 3D Fillet](/index.php?title=Design456Part_Fillet&action=edit&redlink=1 "Design456Part Fillet (page does not exist)"): Use this tool to create fillet.

- ![](/images/PartDesign_Chamfer.svg) [Design456 3D Chamfer](/index.php?title=Design456Part_Chamfer&action=edit&redlink=1 "Design456Part Chamfer (page does not exist)"): Use this tool to create Chamfer.

- ![](/images/LoftBetweenFaces.svg) [Design456 3D loft between faces](/index.php?title=Design456_LoftBetweenFaces&action=edit&redlink=1 "Design456 LoftBetweenFaces (page does not exist)"): Use this tool to fill gap between faces by creating a loft between them.

- ![](/images/UnifySplitFuse2.svg) [Design456 3D unify or split and then fuse](/index.php?title=Design456_unifySplitFuse2&action=edit&redlink=1 "Design456 unifySplitFuse2 (page does not exist)"): Use this tool create diff shapes. (Might be removed in the future)

- ![](/images/Design456_Colorize.svg) [Design456 Colorize 3D object-faces](/index.php?title=Design_ColorizeObject&action=edit&redlink=1 "Design ColorizeObject (page does not exist)"): Use this colorize randomly 3D object (each face will get a random color).

### Alignment tools

- ![](/images/Design456_PartMagnet.svg) [Design456 Magnet](/index.php?title=Design456_PartMagnet&action=edit&redlink=1 "Design456 PartMagnet (page does not exist)"): Use this tool align an object on another one by selecting the target face.

- ![](/images/Design456_AlignToPlane.svg) [Design456 Align to plane](/index.php?title=Design456_AlignToPlane&action=edit&redlink=1 "Design456 AlignToPlane (page does not exist)"): Use this tool to align object(s) on the surface of the plane.

- ![](/images/Design456_TopSideView.svg) [Design456 Top Side View](/index.php?title=Design456_TopSideView&action=edit&redlink=1 "Design456 TopSideView (page does not exist)"): Use this tool align camera and working plane to the Top side.

- ![](/images/Design456_BottomSideView.svg) [Design456 Bottom Side View](/index.php?title=Design456_BottomView&action=edit&redlink=1 "Design456 BottomView (page does not exist)"): Use this tool align camera and working plane to the Bottom side.

- ![](/images/LeftSideView.svg) [Design456 Left Side View](/index.php?title=Design456_LeftSideView&action=edit&redlink=1 "Design456 LeftSideView (page does not exist)"): Use this tool align camera and working plane to the Left side.

- ![](/images/Design456_RightSideView.svg) [Design456 Right Side View](/index.php?title=Design456_RightSideView&action=edit&redlink=1 "Design456 RightSideView (page does not exist)"): Use this tool align camera and working plane to the Right side.

- ![](/images/FrontSideView.svg) [Design456 Front Side View](/index.php?title=Design456_FrontSideView&action=edit&redlink=1 "Design456 FrontSideView (page does not exist)"): Use this tool align camera and working plane to the Front side.

- ![](/images/BackSideView.svg) [Design456 Back Side View](/index.php?title=Design456_BackSideView&action=edit&redlink=1 "Design456 BackSideView (page does not exist)"): Use this tool align camera and working plane to the Back side.

- ![](/images/Design456_MoveObject.svg) [Design456 Move Object](/index.php?title=Design456_MoveObject&action=edit&redlink=1 "Design456 MoveObject (page does not exist)"): Move, rotate 3D Objects.

- ![](/images/Design456_MoveObjectDetails.svg) [Design456 Move Object in details](/index.php?title=Design456_MoveObjectDetails&action=edit&redlink=1 "Design456 MoveObjectDetails (page does not exist)"): Move, rotate 3D and 2D Objects.

- ![](/images/Design456_SmartAlignment.svg) [Design456 Align multiple objects](/index.php?title=Design456_SmartAlignment&action=edit&redlink=1 "Design456 SmartAlignment (page does not exist)"): Do 9 alignments based on shapes bound boxes.

## FreeCAD Direct Modeling

Main goal of Design456 is to provide [Direct Modeling](/index.php?title=FreeCAD_Direct_Modeling&action=edit&redlink=1 "FreeCAD Direct Modeling (page does not exist)") tool set. There are some tools that are partially finished or ready to use. Please try them and report your comments at the github pages. This wiki will be updated whenever I have time. It is almost certain that the github has more info than these pages (at the moment due to lack of time for updating the wiki pages)

- Smart Scale
- Smart DirectScale
- Smart Fillet
- Smart Chamfer
- Smart Extrude
- Smart Extrude Rotate
- Smart Edge Extend
- Smart Face Extend
- Smart Alignment
- Extend Edge
- Extend Face
- Paint
- Hole
- Reset Placement
- Simplify Edges
- Simplify Faces

## FreeCAD GUI Widgets toolkit

[FreeCAD GUI Widgets toolkit](/FreeCAD_GUI_Widgets_toolkit "FreeCAD GUI Widgets toolkit") is a work for providing easy to use Coin3D drawing GUI toolkit. The toolkit will make it easy to draw and should provide an interactive way to manipulate FreeCAD e objects. The simplicity of the toolkit should make it easy to use it.

Widgets gives you the ability to get callbacks, and are inspired by the well known multi-platform toolkit www.fltk.org. Almost all smart tools must have a widget from this toolkit.

## Defeaturing Workbench added to Design456

I added the workbench to my workbench and further development of the tools will continue. It was necessary to add the de-featuring tools to Design456. More tools must be added to the tool set in the feature.

- To be continued!

## Microelly2 Tools (Nurbs Workbench) converted

I did the conversion for the Nurbs and fixed many bugs. In the beginning I added the project to my workbench, but since the tools are not working well, I remove it. The work is huge and there were places where I didn't know how to solve the issues. More time required and more understanding of Microlley's work is required that is why the work on the project is suspended. Some good works are done and you can find the project at: [Github Nurb](https://github.com/MariwanJ/nurbs). Unfortunately, the code is more experimental code that is not made to be a tool in a workbench. Due to that, I wasn't able to retrieve all tools and it is hard to understand the tools. Most of the code are undocumented. There are good things there but not structured in a way a workbench requires.

Note: Due to what I described, further developing Nurbs workbench is not possible, at least for now.

Retrieved from "<http://wiki.freecad.org/index.php?title=Design456_Workbench&oldid=1219104>"
