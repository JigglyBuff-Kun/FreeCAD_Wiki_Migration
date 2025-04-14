---
title: SheetMetal Workbench
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::
![](/images/Sheetmetal_workbench_icon.svg)

SheetMetal External workbench icon

## Introduction

![](/images/Sheetmetal_workbench_icon.svg) [SheetMetal](/SheetMetal_Workbench "SheetMetal Workbench") is an [external workbench](/External_workbenches "External workbenches") and does not belong to the standard FreeCAD installation. It has been developed to supply tools to create and unfold sheet metal objects.

Characteristics of sheet metal objects are:

- They have a constant thickness
- They can be unfolded, if they are made of planar walls and cylindrical connections only

The unfolding tool in both of its versions is not restricted to parts made with tools from this workbench, but can handle [Part](/Part_Workbench "Part Workbench") and [PartDesign](/PartDesign_Workbench "PartDesign Workbench") objects as well, as long as they meet above characteristics.

![](/images/SheetMetal_Example.png)

Rear: the sheet metal model built with the SheetMetal add-on  
In front of it: the unfolded solid  
At the forefront: the unfold sketch with bending lines for export to DXF.

If the export in DXF is used to control machines (Lasercut for example), you have to modify the DXF to remove the lines showing the folds, as these lines may be used for cutting by the machine.

## Installation

This workbench can be installed from the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). For manual installation see [Installing more workbenches](/Installing_more_workbenches "Installing more workbenches").

## Tools

- ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase"): Creates a sheet metal base object from a sketch, either a profile or a plate.

- ![](/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall"): Adds a flange on each selected edge of a base plate. (The flange can be turned into a hem by modifying its angle.)

- ![](/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude "SheetMetal Extrude"): Extends a sheet metal plate at a selected edge face along its normal. (By adding an outline sketch it can be used to create interlocking geometry.)

- ![](/images/SheetMetal_AddFoldWall.svg) [Fold a Wall](/SheetMetal_AddFoldWall "SheetMetal AddFoldWall"): Folds a face at a chosen line with a specified bend radius.

- ![](/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold"): Flattens a folded sheet metal object and generates an unfold solid and an outline sketch with bend lines (provides a dialog to set parameters).

- ![](/images/SheetMetal_UnattendedUnfold.svg) [Unattended Unfold](/SheetMetal_UnattendedUnfold "SheetMetal UnattendedUnfold"): Flattens a folded sheet metal object and generates an unfold solid and an outline sketch with bend lines (if parameters have already been set).

- ![](/images/SheetMetal_UnfoldUpdate.svg) [Unfold Update](/SheetMetal_UnfoldUpdate "SheetMetal UnfoldUpdate"): Updates all unfold objects.

- ![](/images/SheetMetal_AddCornerRelief.svg) [Add Corner Relief](/SheetMetal_AddCornerRelief "SheetMetal AddCornerRelief"): Adds a corner relief to a corner.

- ![](/images/SheetMetal_AddRelief.svg) [Make Relief](/SheetMetal_AddRelief "SheetMetal AddRelief"): 1st step to convert a shell object into an unfoldable sheet metal object, adds a relief (cutout) to a corner.

- ![](/images/SheetMetal_AddJunction.svg) [Make Junction](/SheetMetal_AddJunction "SheetMetal AddJunction"): 2nd step to convert a shell object into an unfoldable sheet metal object, creates an open junction on the edge of two walls.

- ![](/images/SheetMetal_AddBend.svg) [Make Bend](/SheetMetal_AddBend "SheetMetal AddBend"): 3rd step to convert a shell object into an unfoldable sheet metal object, replaces sharp edges with round bends.

- ![](/images/SheetMetal_SketchOnSheet.svg) [Sketch On Sheet metal](/SheetMetal_SketchOnSheet "SheetMetal SketchOnSheet"): Cuts a sketch based hole pattern along the folded walls of a sheet metal object.

- ![](/images/SheetMetal_AddCutout.svg) [Extruded Cutout](/SheetMetal_AddCutout "SheetMetal AddCutout"): Creates an extruded cutout from a sketch extrusion.

- ![](/images/SheetMetal_Forming.svg) [Make Forming in Wall](/SheetMetal_Forming "SheetMetal Forming"): Embosses shapes with or without holes into a sheet metal plate.

- ![](/images/SheetMetal_BaseShape.svg) [Add base shape](/SheetMetal_BaseShape "SheetMetal BaseShape"): Adds a basic sheet metal object from parameters (introduced in version 0.3.10).

## Brief description

This workbench provides tools for the two main tasks:

- Create sheet metal objects
- Unfold sheet metal objects

This section is meant to give a rough idea of how to use the supplied tools. More detailed information can be found on each tool's own page (see above) or in the linked tutorials (see below).

### Create a sheet metal object

#### Start with a profile

1. Create an open polyline (preferably with the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"))
2. Use the ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") command to create a sheet metal profile.

#### Start with a blank

1. Create a closed polyline (preferably with the sketcher)
2. Use the ![](/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") command to create a sheet metal blank.

#### Start with a base shape

1. Use the ![](/images/SheetMetal_BaseShape.svg) [Add base shape](/SheetMetal_BaseShape "SheetMetal BaseShape") comand to add a basic sheet metal object from parameters (introduced in version 0.3.10).

#### Start with a PartDesign Pad

1. Create a closed polyline (preferably with the sketcher)
2. Use the ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") command to create a prismatic body.
3. The ![](/images/PartDesign_Thickness.svg) [PartDesign Thickness](/PartDesign_Thickness "PartDesign Thickness") command will make it an object of constant thickness.
4. To make it unfoldable it needs some gaps or connections between the walls:
   1. The ![](/images/SheetMetal_AddRelief.svg) [Make Relief](/SheetMetal_AddRelief "SheetMetal AddRelief") command will cut off selected corners.
   2. The ![](/images/SheetMetal_AddJunction.svg) [Make Junction](/SheetMetal_AddJunction "SheetMetal AddJunction") command will create junctions with gaps between adjoining walls that need to be disjoined.
   3. The ![](/images/SheetMetal_AddBend.svg) [Make Bend](/SheetMetal_AddBend "SheetMetal AddBend") command will create cylindrical connections for the remaining walls that need to stay joined.

Some parameters will be inherited from the parent object(s) but it is better to check the relevant parameters at each stage.

It should now be checked if the resulting sheet metal object can be unfolded. (see [Unfold...](#Unfold_a_sheet_metal_object) below).

#### Adding more features

The unfoldable basic sheet metal objects can be extended:

1. Use the ![](/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude "SheetMetal Extrude") command to enlarge walls.
2. The ![](/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall") command will add new flanges or hems to the existing object.
3. Use the ![](/images/SheetMetal_AddCornerRelief.svg) [Add Corner Relief](/SheetMetal_AddCornerRelief "SheetMetal AddCornerRelief") command to add or reshape corner reliefs.
4. The ![](/images/SheetMetal_AddFoldWall.svg) [Fold a Wall](/SheetMetal_AddFoldWall "SheetMetal AddFoldWall") command will fold a wall at a chosen line, i.e. it will trimm a wall at said line, relocate the cut away side, and rejoin them with a cylindrical connection.
5. Use the ![](/images/SheetMetal_SketchOnSheet.svg) [Sketch on Sheet metal](/SheetMetal_SketchOnSheet "SheetMetal SketchOnSheet") command to cut holes into the object starting on a chosen wall and then following the adjoined walls and connections.
6. The ![](/images/SheetMetal_Forming.svg) [Make Forming in Wall](/SheetMetal_Forming "SheetMetal Forming") command will stamp a shape into a plate (wall).

: : After the creation of a WallForming feature the SheetMetal object is **no longer unfoldable**!

Several tools from other workbenches can be used to add holes or to reshape edges.

### Unfold a sheet metal object

To unfold a sheet metal object activate the ![](/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold") or the ![](/images/SheetMetal_UnattendedUnfold.svg) [Unattended Unfold](/SheetMetal_UnattendedUnfold "SheetMetal UnattendedUnfold") tool.

The result will be a 3D object with an optional outline sketch including bend lines.

### Examples

Until tutorial pages are available on this wiki there is an [Examples](/SheetMetal_Examples "SheetMetal Examples") page.

![](/images/SheetMetal_Example-01.png)
![](/images/SheetMetal_Example-02.png)
![](/images/SheetMetal_Example-03.png)
![](/images/SheetMetal_Example-04.png)
![](/images/SheetMetal_Example-05.png)

It contains some hints about [properties](/SheetMetal_Examples#SheetMetal_properties "SheetMetal Examples") as well.

## Limitations

- The workbench is affected by the [topological naming issue](/Glossary#Topological_Naming "Glossary") that is inherent to FreeCAD. If an edit of a bend earlier in the history of the part renumbers the faces, then the following bends may be affected and switch faces. If the bend features do not break, you can double-click on it to get a dialog where you can select the proper face in the [3D view](/3D_view "3D view"), and update the Bend.
- The Unfold tool has some limitations, and will fail in certain complex situations. When it fails, try to select a different face.
- Frequent case of crash: take a lot of precautions not to cut in the hinges (the folds) either along the faces or in the angles nor to make holes or notches through the angles.

## Tutorials

### SheetMetal Tutorial by meme2704

The following tutorial is reproduced from the PDF tutorial mentioned in [Links](#Links).

#### Presentation of the workbench

After downloading the extension and install, open it.

![](/images/Sm1.png)

#### 1st operation

- Get the base: use either the workbenches "part" or "draft", make 1 sketch that will contain all holes and any cuts, extrude this base to the thickness of the sheet.
- Bear in mind that the edges will always be in addition as well as the folding radii.

![](/images/Sm2.png)

#### 2nd operation

- Open the SheetMetal workbench.
- Select 1 thickness of the edge (edge) of the base plate and click on the "bend" tool 90° default bend angle can be changed from 0 to 90°.
- Edge height is 10mm by default, editable from 0.1 to xxxmm.
- Bending radius is by default equal to thickness, editable from 0.1 to xxmm (never put 0).
- Gap1, gap2 is the withdrawal of the folded edge from the corner of the base (0 accept).
- Invert default: false folds to Z +, true to ZReliefd cuts the corner between the fold and the base (inactive if gap = 0).
- Reliefw adds 1 slot between the crop and the edge (inactive if reliefd = 0).

![](/images/Sm3.png)

Repeat as many times as there are sides to bend.  
Folding 1 return with use of "extend".

![](/images/Sm4a.png)

To add 1 back repeat the same operation by selecting the thickness of the concerned edge.  
To reduce the space between the 2 edges, use "extends".  
Select the thickness and specify the length to add.  
Note that if the extension of the 1st edge is made before the fold of the return, it will not be taken into account, if 1 identical fold is added to the extension, it will appear correct but the unfolding will not be done.

Folding of 1 2nd edge:  
Now we must separate the 2 edges otherwise they will merge and unfolding will be impossible.

- 1st method: make 1 withdrawal of 1 edge.
  - Give 1 value slightly greater than gap1 (or gap2), at zero there is still fusion.
- 2nd method make 1 cut at 45 ° see further, use this tool.

![](/images/Sm5a.png)

#### Unfolding

Choose 1 reference face (here the orange face) and click on the button in the toolbar.  
We obtain the blue part of which it is enough to modify the values X, Y, or Z to see it in totality.

![](/images/Sm6.png)

#### Cut the flaps at 45°

After folding the flaps without having made a withdrawal, the shape thus appears.

![](/images/Sm7a.png)

To do it must split at 45 ° (or following the bisector flaps are unequal width).

- Create 1 new skit related to the common part of the 2 flaps.
- Create 1 linked stop by selecting the outer edge of the "hinge".
- Draw 1 triangle whose top is constrained at the end, oriented 1 side at 45 °, give the small side 1 minimum width (0.1mm is enough), and make 1 pocket.

Be careful not to scratch the "hinge" where the nakedness of bound the tip of the triangle at the edge of the fold line.

![](/images/Sm8a.png)

Unfolding

![](/images/Sm9.png)

#### Piercing edges and flaps

Make these holes and cuts after folding and before unfolding.  
Always take care not to "scratch" the fold lines.

![](/images/Sm10.png)

#### Make wired flaps

Make 1 fold on the edge of the side, at 45 ° of 0.1mm long, then 1 other reverse at 45 ° of the length of the contiguous flap, then extend the opposite side, it will pass over and they will not be merged.

![](/images/Sm11.png)

#### Special case of this same pierced edge

In this particular case, unfolding only works by choosing the yellow face as a reference.

![](/images/Sm12.png)

#### Special case hole straddling the folds

Previously it is said several times that it is not necessary to cut the folding lines.  
How to do ?

![](/images/Sm13.png)

- Make the base with its half-round hole and make the 2 half-sided and the 2 half-folds separately.
- Then make 1 extension on 1 of the sides of the width of the opening minus 0.1mm, the 2 edges thus remain separated.
- Then on this extension (in green) draw the contour of the cut and make 1 pocket
- The result is the red piece above, and the unfolding works, stays the line that separated the 2 edges previously

![](/images/Sm14.png)

## Videos

- [The Elegant SheetMetal Workbench](https://www.youtube.com/watch?v=xidvQYkC4so) by Joko Engineering

## Links

- [Macro Sheet Metal Unfolder](/Macro_Sheet_Metal_Unfolder "Macro Sheet Metal Unfolder"), the original macro the Unfold tool is based on.
- [An English and French tutorial in PDF format](https://forum.freecadweb.org/viewtopic.php?f=3&t=25002) on the FreeCAD forum.
- Report bugs/Request features: <https://github.com/shaise/FreeCAD_SheetMetal/issues>.

## References

- Author:
  - Folding tools: Copyright 2015-2018 by Shai Seger
  - Unfolding tool: Copyright 2014 by Ulrich Brammer
- License: [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
- Source code on github: <https://github.com/shaise/FreeCAD_SheetMetal>

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Workbench/en&oldid=1522750>"
