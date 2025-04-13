---
title: PartDesign Workbench
---

![](/images/Workbench_PartDesign.svg)

PartDesign workbench icon

## Introduction

The ![](/images/Workbench_PartDesign.svg) **PartDesign Workbench** provides tools for modeling solid components. It is mostly focused on creating mechanical components that can be manufactured and assembled into a finished product. Nevertheless, the created solids can be used for any other purpose such as [BIM modeling](/BIM_Workbench "BIM Workbench"), [finite element analysis](/FEM_Workbench "FEM Workbench"), or [machining and 3D printing](/CAM_Workbench "CAM Workbench").

The PartDesign Workbench uses a feature based methodology. A component is represented by the Body object container. The Body defines a local coordinate system and contains the cumulative features that define the component. Most features are based on parametric sketches and are either additive or subtractive. For example, the [Pad tool](/PartDesign_Pad "PartDesign Pad") adds the extruded sketch to the developing solid, the [Pocket tool](/PartDesign_Pocket "PartDesign Pocket") subtracts the extruded sketch. Each feature is cumulative and builds on the result of preceding features. It is also possible to use primitives ([Cylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder"), [Sphere](/PartDesign_AdditiveSphere "PartDesign AdditiveSphere"), etc.) as well as solids created outside the Body as features.

See the [feature editing](/Feature_editing "Feature editing") page for a more complete explanation of this process, and then see [Creating a simple component with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") to get started with creating solids.

The ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") provides an alternative [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) methodology for building shapes. For a detailed discussion of the Part Workbench versus the Part Design Workbench see [Part and Part Design](/Part_and_PartDesign "Part and PartDesign").

![](/images/PartDesign_Workbench_Example.jpg)

### Verktygen

The Part Design tools are all located in the **Part Design** menu and the PartDesign toolbar that appear when you load the Part Design workbench.

### Part Design Helper tools

- ![](/images/PartDesign_Body.svg) [Create body](/PartDesign_Body "PartDesign Body"): creates a [Body](/Body "Body") object in the active document and makes it active.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create Sketch:

: \- ![](/images/PartDesign_NewSketch.svg) [Create sketch](/PartDesign_NewSketch "PartDesign NewSketch"): creates a new sketch on a selected face or plane. If no face is selected while this tool is executed, the user is prompted to select a plane from the Tasks panel. The interface then switches to the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") in sketch editing mode.

: \- ![](/images/Sketcher_MapSketch.svg) [Attach sketch](/Sketcher_MapSketch "Sketcher MapSketch"): attaches a sketch to geometry selected from the active body.

: \- ![](/images/Sketcher_EditSketch.svg) [Edit sketch](/Sketcher_EditSketch "Sketcher EditSketch"): opens the selected sketch for editing.

- ![](/images/Sketcher_ValidateSketch.svg) [Validate sketch](/Sketcher_ValidateSketch "Sketcher ValidateSketch"): verifies the tolerance of different points and adjusts them.

- ![](/images/Part_CheckGeometry.svg) [Check geometry](/Part_CheckGeometry "Part CheckGeometry"): Checks the geometry of selected objects for errors.

- ![](/images/PartDesign_ShapeBinder.svg) [Create a shape binder](/PartDesign_ShapeBinder "PartDesign ShapeBinder"): creates a shape binder referencing geometry from a single parent object.

- ![](/images/PartDesign_SubShapeBinder.svg) [Create a sub-object(s) shape binder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder"): creates a shape binder referencing geometry from one or more parent objects.

- ![](/images/PartDesign_Clone.svg) [Create a clone](/PartDesign_Clone "PartDesign Clone"): creates a clone of the selected body.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a datum (1.0 and below):

: \- ![](/images/PartDesign_Plane.svg) [Create a datum plane](/PartDesign_Plane "PartDesign Plane"): creates a datum plane in the active body. (1.0 and below)

: \- ![](/images/PartDesign_Line.svg) [Create a datum line](/PartDesign_Line "PartDesign Line"): creates a datum line in the active body. (1.0 and below)

: \- ![](/images/PartDesign_Point.svg) [Create a datum point](/PartDesign_Point "PartDesign Point"): creates a datum point in the active body. (1.0 and below)

: \- ![](/images/PartDesign_CoordinateSystem.svg) [Create a local coordinate system](/PartDesign_CoordinateSystem "PartDesign CoordinateSystem"): creates a local coordinate system attached to datum geometry in the active body. (1.0 and below)

: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): these tools have been replaced by new [datum tools](/Std_Base#Part_Datums "Std Base").

### Part Design Modeling tools

#### Additive tools

These are tools for creating base features or adding material to an existing body.

- ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad "PartDesign Pad"): extrudes a solid from a selected sketch.

- ![](/images/PartDesign_Revolution.svg) [Revolution](/PartDesign_Revolution "PartDesign Revolution"): creates a solid by revolving a sketch around an axis. The sketch must form a closed profile.

- ![](/images/PartDesign_AdditiveLoft.svg) [Additive loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft"): creates a solid by making a transition between two or more sketches.

- ![](/images/PartDesign_AdditivePipe.svg) [Additive pipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe"): creates a solid by sweeping one or more sketches along an open or closed path.

- ![](/images/PartDesign_AdditiveHelix.svg) [Additive helix](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix"): creates a solid by sweeping a sketch along a helix.

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create an additive primitive:

: \- ![](/images/PartDesign_AdditiveBox.svg) [Additive box](/PartDesign_AdditiveBox "PartDesign AdditiveBox"): creates an additive box.

: \- ![](/images/PartDesign_AdditiveCylinder.svg) [Additive cylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder"): creates an additive cylinder.

: \- ![](/images/PartDesign_AdditiveSphere.svg) [Additive sphere](/PartDesign_AdditiveSphere "PartDesign AdditiveSphere"): creates an additive sphere.

: \- ![](/images/PartDesign_AdditiveCone.svg) [Additive cone](/PartDesign_AdditiveCone "PartDesign AdditiveCone"): creates an additive cone.

: \- ![](/images/PartDesign_AdditiveEllipsoid.svg) [Additive ellipsoid](/PartDesign_AdditiveEllipsoid "PartDesign AdditiveEllipsoid"): creates an additive ellipsoid.

: \- ![](/images/PartDesign_AdditiveTorus.svg) [Additive torus](/PartDesign_AdditiveTorus "PartDesign AdditiveTorus"): creates an additive torus.

: \- ![](/images/PartDesign_AdditivePrism.svg) [Additive prism](/PartDesign_AdditivePrism "PartDesign AdditivePrism"): creates an additive prism.

: \- ![](/images/PartDesign_AdditiveWedge.svg) [Additive wedge](/PartDesign_AdditiveWedge "PartDesign AdditiveWedge"): creates an additive wedge.

#### Subtractive tools

These are tools for subtracting material from an existing body.

- ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket"): creates a pocket from a selected sketch.

- ![](/images/PartDesign_Hole.svg) [Hole](/PartDesign_Hole "PartDesign Hole"): creates a hole feature from a selected sketch. The sketch must contain one or multiple circles.

- ![](/images/PartDesign_Groove.svg) [Groove](/PartDesign_Groove "PartDesign Groove"): creates a groove by revolving a sketch around an axis.

- ![](/images/PartDesign_SubtractiveLoft.svg) [Subtractive loft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft"): creates a solid shape by making a transition between two or more sketches and subtracts it from the active body.

- ![](/images/PartDesign_SubtractivePipe.svg) [Subtractive pipe](/PartDesign_SubtractivePipe "PartDesign SubtractivePipe"): creates a solid shape by sweeping one or more sketches along an open or closed path and subtracts it from the active body.

- ![](/images/PartDesign_SubtractiveHelix.svg) [Subtractive helix](/PartDesign_SubtractiveHelix "PartDesign SubtractiveHelix"): creates a solid shape by sweeping a sketch along a helix and subtracts it from the active body.

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a subtractive primitive:

: \- ![](/images/PartDesign_SubtractiveBox.svg) [Subtractive box](/PartDesign_SubtractiveBox "PartDesign SubtractiveBox"): adds a subtractive box to the active body.

: \- ![](/images/PartDesign_SubtractiveCylinder.svg) [Subtractive cylinder](/PartDesign_SubtractiveCylinder "PartDesign SubtractiveCylinder"): adds a subtractive cylinder to the active body.

: \- ![](/images/PartDesign_SubtractiveSphere.svg) [Subtractive sphere](/PartDesign_SubtractiveSphere "PartDesign SubtractiveSphere"): adds a subtractive sphere to the active body.

: \- ![](/images/PartDesign_SubtractiveCone.svg) [Subtractive cone](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone"): adds a subtractive cone to the active body.

: \- ![](/images/PartDesign_SubtractiveEllipsoid.svg) [Subtractive ellipsoid](/PartDesign_SubtractiveEllipsoid "PartDesign SubtractiveEllipsoid"): adds a subtractive ellipsoid to the active body.

: \- ![](/images/PartDesign_SubtractiveTorus.svg) [Subtractive torus](/PartDesign_SubtractiveTorus "PartDesign SubtractiveTorus"): adds a subtractive torus to the active body.

: \- ![](/images/PartDesign_SubtractivePrism.svg) [Subtractive prism](/PartDesign_SubtractivePrism "PartDesign SubtractivePrism"): adds a subtractive prism to the active body.

: \- ![](/images/PartDesign_SubtractiveWedge.svg) ‎[Subtractive wedge](/PartDesign_SubtractiveWedge "PartDesign SubtractiveWedge"): adds a subtractive wedge to the active body.

#### Boolean

- ![](/images/PartDesign_Boolean.svg) [Boolean operation](/PartDesign_Boolean "PartDesign Boolean"): imports one or more Bodies or PartDesign Clones into the active body and applies a Boolean operation.

### Dress-up tools

These tools apply a treatment to edges or faces.

- ![](/images/PartDesign_Fillet.svg) [Fillet](/PartDesign_Fillet "PartDesign Fillet"): fillets (rounds) edges of the active body.

- ![](/images/PartDesign_Chamfer.svg) [Chamfer](/PartDesign_Chamfer "PartDesign Chamfer"): chamfers edges of the active body.

- ![](/images/PartDesign_Draft.svg) [Draft](/PartDesign_Draft "PartDesign Draft"): applies an angular draft to selected faces of the active body.

- ![](/images/PartDesign_Thickness.svg) [Thickness](/PartDesign_Thickness "PartDesign Thickness"): creates a thick shell from the active body and opens selected face.

### Transformation tools

These are tools for transforming existing features.

- ![](/images/PartDesign_Mirrored.svg) [Mirrored](/PartDesign_Mirrored "PartDesign Mirrored"): mirrors one or more features.

- ![](/images/PartDesign_LinearPattern.svg) [Linear Pattern](/PartDesign_LinearPattern "PartDesign LinearPattern"): creates a linear pattern of one or more features.

- ![](/images/PartDesign_PolarPattern.svg) [Polar Pattern](/PartDesign_PolarPattern "PartDesign PolarPattern"): creates a polar pattern of one or more features.

- ![](/images/PartDesign_MultiTransform.svg) [Create MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform"): creates a pattern by combining any of the transformations mentioned above, as well as the [Scaled](/PartDesign_Scaled "PartDesign Scaled") transformation.
  - ![](/images/PartDesign_Scaled.svg) [Scaled](/PartDesign_Scaled "PartDesign Scaled"): scales one or more features. This is not available as a separate transformation tool.

#### Extras

Some additional functionality found in the Part Design menu:

- ![](/images/PartDesign_Sprocket.svg) [Sprocket](/PartDesign_Sprocket "PartDesign Sprocket"): creates a sprocket profile that can be padded.

- ![](/images/PartDesign_InvoluteGear.svg) [Involute gear](/PartDesign_InvoluteGear "PartDesign InvoluteGear"): creates an involute gear profile that can be padded.

- ![](/images/PartDesign_WizardShaft.svg) [Shaft design wizard](/PartDesign_WizardShaft "PartDesign WizardShaft"): Generates a shaft from a table of values and allows to analyze forces and moments. The shaft is made with a revolved sketch that can be edited.

### Context Menu items

- [Suppressed](/index.php?title=PartDesign_Suppressed&action=edit&redlink=1 "PartDesign Suppressed (page does not exist)"): checkbox to disable a specific feature without deleting it. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/PartDesign_MoveTip.svg) [Set tip](/PartDesign_MoveTip "PartDesign MoveTip"): redefines the tip, which is the feature exposed outside of the Body.

- ![](/images/PartDesign_MoveFeature.svg) [Move object to other body](/PartDesign_MoveFeature "PartDesign MoveFeature"): moves the selected sketch, datum geometry or feature to another Body.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Move object after other object](/PartDesign_MoveFeatureInTree "PartDesign MoveFeatureInTree"): allows reordering of the Body tree by moving the selected sketch, datum geometry or feature to another position in the list of features.

#### Items shared with the Part workbench

- ![](/images/Std_SetAppearance.svg) [Appearance](/Std_SetAppearance "Std SetAppearance"): determines appearance of the whole part (color transparency etc.).

- ![](/images/Part_ColorPerFace.svg) [Color per face](/Part_ColorPerFace "Part ColorPerFace"): Assigns colors to individual faces of objects.

### Obsolete tools

- ![](/images/PartDesign_Migrate.svg) [Migrate](/PartDesign_Migrate "PartDesign Migrate"): migrates files from FreeCAD versions below 0.17 to version 0.17. This tool is not available in 1.0 and above.

## Preferences

- ![](/images/Preferences-part_design.svg) [Preferences](/PartDesign_Preferences "PartDesign Preferences"): preferences available for PartDesign Tools.
- [Fine tuning](/Fine-tuning "Fine-tuning"): some extra parameters to fine-tune PartDesign behavior.

## Tutorials

- [How to use FreeCAD](http://help-freecad-jpg87.fr/), a website describing the workflow for mechanical design.
- [Creating a simple part with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign")
- [Basic Part Design Tutorial 019](/Basic_Part_Design_Tutorial_019 "Basic Part Design Tutorial 019")
- [PartDesign Bearingholder Tutorial I](/PartDesign_Bearingholder_Tutorial_I "PartDesign Bearingholder Tutorial I") (needs updating)
- [PartDesign Bearingholder Tutorial II](/PartDesign_Bearingholder_Tutorial_II "PartDesign Bearingholder Tutorial II") (needs updating)

## Examples

For some ideas of what can be achieved with Part Design tools, have a look at: [PartDesign examples](/PartDesign_Examples "PartDesign Examples").

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/sv&oldid=1529331>"
