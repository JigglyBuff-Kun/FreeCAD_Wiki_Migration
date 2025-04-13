---
title: SheetMetal Examples
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Introduction

The ![](/src/assets/images/Sheetmetal_workbench_icon.svg) [SheetMetal workbench](/SheetMetal_Workbench "SheetMetal Workbench") (an [external workbench](/External_workbenches "External workbenches") available through the [Addon Manager](/Std_AddonMgr "Std AddonMgr")) has grown quite powerful and merits to be appropriately documented.

To avoid the overcrowding of the tool pages with examples this page was added to collect parts showing and explaining special SheetMetal features.

Planned phases to generate content:

1. Collecting pictures
2. Adding workflow descriptions
3. Adding more detailed tutorials

## Hinge

![](/src/assets/images/SheetMetal_Example-01.png)

![](/src/assets/images/SheetMetal_Example-01a.png)
![](/src/assets/images/SheetMetal_Example-01b.png)
![](/src/assets/images/SheetMetal_Example-01c.png)
![](/src/assets/images/SheetMetal_Example-01d.png)

Workflow Hinge:
![](/src/assets/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase"),
![](/src/assets/images/PartDesign_Pocket.svg) [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket"),
![](/src/assets/images/PartDesign_Hole.svg) [PartDesign Hole](/PartDesign_Hole "PartDesign Hole"),
![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold").

### Hinge step by step

1. Create a profile (a line and a tangent arc), preferably using the ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").
2. Activate the ![](/src/assets/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") command to create a BaseBend object.
3. Edit the BaseBend object's parameters:
   - Set Data**Mid Plane** to `true`to let the profile extend symmetrically to both sides of the sketch plane.
   - Set Data**radius** and Data**thickness** to values of your choice.
4. Create a cut-out contour with the ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").
5. Use the ![](/src/assets/images/PartDesign_Pocket.svg) [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket") command to cut off one half of the Round bit.
6. Create a hole pattern with the ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").
7. Use the ![](/src/assets/images/PartDesign_Hole.svg) [PartDesign Hole](/PartDesign_Hole "PartDesign Hole") command. Avoid the countersink and counterbore options to keep the body unfoldable.
8. Activate the ![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold") command to get an Unfold object.
9. Done!

## Paper clip

![](/src/assets/images/SheetMetal_Example-02.png)

![](/src/assets/images/SheetMetal_Example-02a.png)
![](/src/assets/images/SheetMetal_Example-02b.png)
![](/src/assets/images/SheetMetal_Example-02c.png)
![](/src/assets/images/SheetMetal_Example-02d.png)

Workflow Paper Clip:
![](/src/assets/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase"),
![](/src/assets/images/SheetMetal_SketchOnSheet.svg) [Sketch on Sheet](/SheetMetal_SketchOnSheet "SheetMetal SketchOnSheet"),
clone, flip and fuse,
![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold").

### Paper clip step by step

1. Create a profile, preferably using the ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") on the XZ plane.  
   ![Profile sketch](/src/assets/images/SheetMetal_Example-02e.png)
2. Activate the ![](/src/assets/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase") command to create a BaseBend object.
3. Edit the BaseBend object's parameters in the properties panel:  
    ![BaseBend object and highlighted sketch](/src/assets/images/SheetMetal_Example-02f.png)
   - Set Data**Mid Plane** to `true`to let the profile extend symmetrically to both sides of the sketch plane.
   - Set Data**length** to 32 mm.
   - Set Data**radius** to 2 mm.
   - Set Data**thickness** to 0.3 mm.
4. Select the face between the round sections and activate the ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").  
   ![Face to support the sketch](/src/assets/images/SheetMetal_Example-02g.png)
5. To hide the curled part use the ![](/src/assets/images/Sketcher_ViewSection.svg) [Sketcher View section](/Sketcher_ViewSection "Sketcher ViewSection") command.
6. Create the cut-out contour.  
   ![Cut-out contour](/src/assets/images/SheetMetal_Example-02h.png) ![Cut-out contour slightly touching the selected face](/src/assets/images/SheetMetal_Example-02i.png)
7. Finish the sketch using the ![](/src/assets/images/Sketcher_LeaveSketch.svg) [Sketcher Leave sketch](/Sketcher_LeaveSketch "Sketcher LeaveSketch") command.
8. Select the face again and add the Cut-out sketch to the selection.  
   ![Face and sketch selected](/src/assets/images/SheetMetal_Example-02j.png)
9. Use the ![](/src/assets/images/SheetMetal_SketchOnSheet.svg) [Sketch on Sheet](/SheetMetal_SketchOnSheet "SheetMetal SketchOnSheet") command to cut around the curled bit.  
   ![Finished first half](/src/assets/images/SheetMetal_Example-02b.png)
10. One side is finished. We now need to find a way to mirror the body.

**Potential mirror options:**

- The ![](/src/assets/images/PartDesign_Mirrored.svg) [PartDesign Mirrored](/PartDesign_Mirrored "PartDesign Mirrored") command fails because it cannot handle SheetMetal features for some reason. So that does not work.
- The ![](/src/assets/images/Part_Mirror.svg) [Part Mirror](/Part_Mirror "Part Mirror") command creates a mirrored part, but this is no longer unfoldable. So that does not work either.
- One way that can work is to use a clone. This still can't be mirrored, but it can use axial symmetry (turn it 180°).
- Another way that works is to use a link object.

**Mirror using a clone:**

1. Select the body from the tree view.
2. Use the ![](/src/assets/images/PartDesign_Clone.svg) [PartDesign Clone](/PartDesign_Clone "PartDesign Clone") command. It adds a new body containing a clone object.  
   To apply a 180° turn set the Data**Angle** under the Placement property of either the body or the clone to 180°. (Z axis is default and should be fine if you started on the XZ plane as described).  
   ![Cloned half](/src/assets/images/SheetMetal_Example-02b.png) ![](/src/assets/images/Button_right.svg) ![Flipped cloned half](/src/assets/images/SheetMetal_Example-02l.png)
3. With the body still active, use the ![](/src/assets/images/PartDesign_Boolean.svg) [PartDesign Boolean operation](/PartDesign_Boolean "PartDesign Boolean") command to add the body of the clone and fuse both halves.  
   ![Fused halves](/src/assets/images/SheetMetal_Example-02c.png)
4. Activate the ![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold") command to get an Unfold object.  
   ![Clip and Unfold object](/src/assets/images/SheetMetal_Example-02m.png) ![Unfold object](/src/assets/images/SheetMetal_Example-02d.png)
5. Done!

**Mirror using a link object:**

1. Select the body from the tree view.
2. Use the ![](/src/assets/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake") command. This adds a new link object.
3. Duplicate the link object by setting the property Data**Element Count** to 2.
4. To apply a 180° turn set the Data**Angle** under the Placement property of either of the sub-linked objects to 180°. (Z axis is default and should be fine if you started on the XZ plane as described).
5. Select both sub-linked objects in the tree view.
6. Activate the ![](/src/assets/images/Part_Fuse.svg) [Part Fuse](/Part_Fuse "Part Fuse") command to fuse both halves.  
   ![Fused halves](/src/assets/images/SheetMetal_Example-02c.png)
7. Activate the ![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold") command to get an Unfold object.  
   ![Clip and Unfold object](/src/assets/images/SheetMetal_Example-02m.png) ![Unfold object](/src/assets/images/SheetMetal_Example-02d.png)
8. Done!

## Omega clamp

![](/src/assets/images/SheetMetal_Example-03.png)

![](/src/assets/images/SheetMetal_Example-03a.png)
![](/src/assets/images/SheetMetal_Example-03b.png)
![](/src/assets/images/SheetMetal_Example-03.png)
![](/src/assets/images/SheetMetal_Example-03c.png)

Workflow Omega Clip:
![](/src/assets/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase"),
![](/src/assets/images/PartDesign_Hole.svg) [PartDesign Hole](/PartDesign_Hole "PartDesign Hole"),
![](/src/assets/images/PartDesign_Fillet.svg) [PartDesign Fillet](/PartDesign_Fillet "PartDesign Fillet"),
![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold").

## Hex bowl

![](/src/assets/images/SheetMetal_Example-04.png)

![](/src/assets/images/SheetMetal_Example-04a.png)
![](/src/assets/images/SheetMetal_Example-04b.png)
![](/src/assets/images/SheetMetal_Example-04.png)
![](/src/assets/images/SheetMetal_Example-04c.png)

Workflow Hex Bowl:
![](/src/assets/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase"),
![](/src/assets/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall"),
6x ![](/src/assets/images/SheetMetal_AddCornerRelief.svg) [Add Corner Relief](/SheetMetal_AddCornerRelief "SheetMetal AddCornerRelief"),
![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold").

![](/src/assets/images/SheetMetal_Example-04d.png)

When a Corner Relief is added (right side) it can be necessary to adjust the value of the **Size** property.

## Pen clip

![](/src/assets/images/SheetMetal_Example-05.png)

![](/src/assets/images/SheetMetal_Example-05a.png)
![](/src/assets/images/SheetMetal_Example-05b.png)
![](/src/assets/images/SheetMetal_Example-05c.png)
![](/src/assets/images/SheetMetal_Example-05d.png)
![](/src/assets/images/SheetMetal_Example-05.png)
![](/src/assets/images/SheetMetal_Example-05e.png)

Workflow Pen Clip:
![](/src/assets/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase"),
![](/src/assets/images/PartDesign_Pocket.svg) [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket"),
3x ![](/src/assets/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall"),
![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold").

## Extend face example

![](/src/assets/images/SheetMetal_Example-06.png)

![](/src/assets/images/SheetMetal_Example-06a.png)
![](/src/assets/images/SheetMetal_Example-06b.png)
![](/src/assets/images/SheetMetal_Example-06c.png)
![](/src/assets/images/SheetMetal_Example-06.png)
![](/src/assets/images/SheetMetal_Example-06d.png)

Workflow Extend Face Example:
![](/src/assets/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase"),
![](/src/assets/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall"),
![](/src/assets/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude "SheetMetal Extrude"),
![](/src/assets/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude "SheetMetal Extrude"),
![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold").

For the second use of **Extend Face** a Sketch with two contours is used for shape of the extension(s); and with the value of "use subtraction" set to true it provides the shape for the cut-outs, as well

## USB shield contact

![](/src/assets/images/SheetMetal_Example-07.png)

![](/src/assets/images/SheetMetal_Example-07a.png)
![](/src/assets/images/SheetMetal_Example-07b.png)
![](/src/assets/images/SheetMetal_Example-07c.png)
![](/src/assets/images/SheetMetal_Example-07d.png)
![](/src/assets/images/SheetMetal_Example-07.png)
![](/src/assets/images/SheetMetal_Example-07e.png)

Workflow USB shield contact:
![](/src/assets/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase"),
![](/src/assets/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude "SheetMetal Extrude"),
![](/src/assets/images/PartDesign_Pocket.svg) [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket"),
![](/src/assets/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude "SheetMetal Extrude"),
![](/src/assets/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall"),
![](/src/assets/images/SheetMetal_Unfold.svg) [Unfold](/SheetMetal_Unfold "SheetMetal Unfold").

(The pull relief is just an artistic expression of what could be hidden inside a real plug)

## SheetMetal properties

This section tries to explain the properties of each SheetMetal object with simple images, where applicable.

### BaseBend object

![](/src/assets/images/SheetMetal_Example-08a.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-08b.png)

Selected sketch +
![](/src/assets/images/SheetMetal_AddBase.svg) [Make Base Wall](/SheetMetal_AddBase "SheetMetal AddBase")
→ BaseBend object with default settings

![](/src/assets/images/SheetMetal_Example-08b.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-08c.png)

Edit Data**length**: Default length → Reduced length

![](/src/assets/images/SheetMetal_Example-08d.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-08h.png)

Switch Data**Mid Plane** from `false` to `true`: Extrusion in one direction → Symmetric extrusion

![](/src/assets/images/SheetMetal_Example-08d.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-08e.png)

Switch Data**Reverse** from `false` to `true`: Default direction → Inverted direction

![](/src/assets/images/SheetMetal_Example-08e.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-08f.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-08g.png)

Select Data**Bend Side**: `Outside` (default) → `Inside` → `Middle`

![](/src/assets/images/SheetMetal_Example-08e.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-08i.png)

Edit Data**radius**: Default radius → Enlarged radius.  
This property is the inner radius of the bends created at the vertices where two edges in the sketch have a non-tangential transition.

![](/src/assets/images/SheetMetal_Example-08e.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-08j.png)

Edit Data**thickness**: Default Thickness → Enlarged thickness

### Bend object

A Bend object consists of sets of one cylindrical bend and one planar strip each. Each pair extends from a selected edge of a blank.

![](/src/assets/images/SheetMetal_Example-09a.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09b.png)

Selected edges +
![](/src/assets/images/SheetMetal_AddWall.svg) [Make Wall](/SheetMetal_AddWall "SheetMetal AddWall")
→ Bend objects with default settings  
(Two Bend objects in two separate bodies.)

Edit Data**radius** to vary the inner radius of all bends supplied by a Bend object. (See BaseBend object above)

Edit Data**length** to vary the length of all planar strips extending from the bends of a Bend object.

: Don't confuse the Data**length** with a flange length which is the sum of this length, radius, and thickness (90° only).

![](/src/assets/images/SheetMetal_Example-09b.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09c.png)

Switch Data**invert** from `false` to `true`:Default flanges (Bend objects) → Inverted flanges

![](/src/assets/images/SheetMetal_Example-09c.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09d.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09e.png)

Edit Data**angle**:Default angle (90°) → Enlarged angle → Decreased angle

We don't have to care about trimming the edges, because **Auto Miter** is activated by default.  
 If deactivated, the result would look like this:

![](/src/assets/images/SheetMetal_Example-09m.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09f.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09g.png)

Switch Data**Auto Miter** from `true` to `false`: Default angle (90°) → Enlarged angle → Decreased angle  
(Auto Miter has no effect on single flanges)

To manually miter a flange edge **miterangle1** and **miterangle2** are used:

![](/src/assets/images/SheetMetal_Example-09m.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09n.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09o.png)

Edit Data**miterangle1** and Data**miterangle2**: No miter (default) → Differently mitered edges, positive angle → Symmetrically mitered edges, negative angles

Mitering only effects the planar strips, not the bends.

: (It takes the whole edge into account and so cannot be used to chamfer flange edges)

To display the different choices of **Bend Type** we introduce an auxiliary cuboid that extrudes from the same outline as the blank and has the same height as the Bend object (its flange length).

![](/src/assets/images/SheetMetal_Example-09h.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09i.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09j.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09k.png)

Select Data**Bend Type**: `Material Outside` (default) → `Material Inside` → `Thickness Outside` → `Offset`

- Outside: The bend starts at the selected edge (The whole Bend object lies outside the cuboid).
- Inside: The outer side of the bend ends on the cuboid surface (The whole Bend object lies inside the cuboid).
- Thickness Outside: The inner side of the bend ends on the cuboid surface (only the planar strip is protruding from the cuboid surface).
- Offset: According to the value of Data**offset** the bend is moved in outward direction from its default position.

: An extension is inserted for positive values (high-lighted strip).
: Negative values are allowed to move the bend inwards.

If we don't want to use the whole length of an edge we can use **gap1** and **gap2**.

![](/src/assets/images/SheetMetal_Example-09c.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09l.png)

Edit Data**gap1** and Data**gap2**: Default flanges → Flanges with different values for gap1 and gap2

If the length of a gap reaches or extends the value of Data**min Relief Gap**, a relief will be added to the gap.  
Reliefs are controlled by Data**relief Type**, Data**reliefd** (relief depth), and Data**reliefw** (relief width) which are enabled only when a gap value is set.

![](/src/assets/images/SheetMetal_Example-09p.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09q.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09r.png)

Edit Data**reliefd** and Data**reliefw**: Default values → Relief depth enlarged → Relief depth and width enlarged

![](/src/assets/images/SheetMetal_Example-09r.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-09s.png)

Switch Data**relief Type** from `Rectangle` to `Round`: Default rectangular relief → Round relief

The round option will only be applied, if the relief depth is larger than the relief width.

Switch Data**Use Relief Factor** from `false` (default) to `true` to set the values of Data**reliefd** and Data**reliefw** automatically. Both are set to the object's (inherited) thickness multiplied by the value of Data**Relief Factor**.

: In this case the round option is useless, since the relief depth is as large as the relief width. (See above)

A new property Data**Length Spec** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") enables us to choose how to measure the length of the Bend object:

![](/src/assets/images/SheetMetal_Example-09t.png)

Side view of four 120° flanges with default length (10 mm) and different Data**Length Spec** values:  
 `Leg` (default), `Outer Sharp`, `Inner Sharp`, `Tangential`

With the `Tangential` option selected the property Data**length** is the equivalent of the flange length.

`Outer Sharp` and `Tangential` are identical for 90° angles.

### Extend object

An Extend object extends a sheet metal plate at one or more selected edge faces or edges.

![](/src/assets/images/SheetMetal_Example-10a.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-10b.png)

Selected edge face and edges +
![](/src/assets/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude "SheetMetal Extrude")
→ One Extend object with default settings.

A first issue occurs here: Although the property Data**Refine** is set to `true` two of the extensions still show their seam lines. Only the extension of the last selected element will be refined.

To refine all extensions they have to be created separately:

![](/src/assets/images/SheetMetal_Example-10c.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-10d.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-10e.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-10f.png)

3x Selected edge face or edge +
![](/src/assets/images/SheetMetal_Extrude.svg) [Extend Face](/SheetMetal_Extrude "SheetMetal Extrude")
→ Three Extend objects completely refined and with default settings.

Altered properties apply to all edges listed in the related Data**base Object** of the Extension object.

Edit Data**length** to adjust the length of the extension.

![](/src/assets/images/SheetMetal_Example-10h.png) ![](/src/assets/images/SheetMetal_Example-10g.png)

Edit Data**gap1** and Data**gap2** to reduce the width of the extension.  
Left: Extension object with 3 edges. Right: One of the Extension objects with one single edge.

Link a sketch to the property Data**Sketch** to shape an extension. The properties Data**length**, Data**gap1** and Data**gap2** will be ignored once a sketch is linked. (This seems not to work with still unbent blanks).

![](/src/assets/images/SheetMetal_Example-10i.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-10j.png)

A selected sketch lying on the flange to be extended → Resulting extension

It is plain to see that it doesn't matter which edge was selected for the Extend object, the shape of the flange is changed wherever sketch geometry protrudes, the new shape can even contain parts that are disconnected from the original flange. Multiple outlines are no problem, but the flange is not cut into.

This example shows that designers are responsible for their construction and shouldn't rely on the results of their tools, which do not make sense in this case. The Sketch attached to a flange face is problematic as well due to the toponaming problem, but for this a solution is in sight.

But there are better use cases for this tool involving almost closed shapes such as one of the examples on the [SheetMetal Extrude](/SheetMetal_Extrude "SheetMetal Extrude") page:

![](/src/assets/images/SheetMetal_Example-10k.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-10l.png)

An almost closed profile → The added default extension is fused with the opposite side creating a closed profile (a tube) that is not unfoldable

![](/src/assets/images/SheetMetal_Example-10l.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-10m.png)

Link a rectangular sketch to the property Data**Sketch**: Closed profile → Profile with rectangular extension, still fused

![](/src/assets/images/SheetMetal_Example-10m.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/SheetMetal_Example-10n.png)

Switch Data**Use Subtraction** to `true` to provide a (hardly visible) default gap between the Extension object and the opposite side, then increase Data**Offset** to widen the gap:  
Fused profile → Profile with interlocking extension, this final result is unfoldable

### Fold object

A Fold object is the result of a sheet metal plate bent at a given line.

Change the property Data**Position** to control where the bend is positioned according to the bend line.

![](/src/assets/images/SheetMetal_Example-10o.png)

Cross-section of the bend: The bend line lies on the upper face of the blank (black) with a 10 mm offset from the edge, its position is marked with a pentagon. It also defines the virtual intersection of the blank and the bent wall

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Examples/en&oldid=1544851>"
