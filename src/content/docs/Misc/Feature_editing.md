---
title: Feature editing
---

## Introduction

This page explains the feature editing workflow of the ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

## Body

Working in PartDesign requires first creating a ![](/src/assets/images/PartDesign_Body.svg) [Body](/PartDesign_Body "PartDesign Body"). The Body is a container intended to hold a single contiguous solid. When a Body is created, an Origin object, a local coordinate system consisting of standard reference planes (XY, XZ, YZ) and axes (X, Y, Z), is automatically added. The solid is then built by adding features. Each [feature](/PartDesign_Feature "PartDesign Feature") is cumulative and adds to or subtracts from the result of the previous feature.

![](/src/assets/images/PartDesign_Feature_example.png)

Feature editing in practice. From left to right:  
Body with a [box](/PartDesign_AdditiveBox "PartDesign AdditiveBox") feature.  
Body with a box and a [chamfer](/PartDesign_Chamfer "PartDesign Chamfer") feature.  
Body with a box, a chamfer and a [pocket](/PartDesign_Pocket "PartDesign Pocket") feature.

A document can contain multiple Bodies, but only one Body can be active. New features are added to the active Body. A Body can be activated or deactivated by double clicking it in the [Tree view](/Tree_view "Tree view"). The activate Body is highlighted in the Tree view.

![](/src/assets/images/PartDesign_Body_tree.png)

### What is a contiguous solid?

A contiguous solid is an object like a casting or something machined from a single block of metal. If the object involves nails, screws or glue, it is not a contiguous solid. As a practical example, a wooden chair would be made of multiple Bodies, with one for each of its sub-components (legs, slats, seat, etc).

In FreeCAD version 1.0 an experimental property was introduced that allows the Body to have non-contiguous solids. This can also be set in the [Preferences](/PartDesign_Preferences#General "PartDesign Preferences") as default for newly created Bodies. This is not intended to be used to build, as in the example, a chair in one Body. It is meant to allow features that may produce disconnected solids that will be made contiguous by later features.

When a model requires multiple Bodies, like the wooden chair, the general purpose ![](/src/assets/images/Std_Part.svg) [Part container](/Std_Part "Std Part") can be used to group them and move the whole as a unit.

### Body visibility management

By default a Body presents its most recent feature to the outside. This feature is the Tip of the Body. The Tip also marks the location where new features are added. It is possible to temporarily redefine the Tip to a feature in the middle of the Body to insert new objects (features, sketches or datum geometry) there. As a new feature is added to the Body, visibility of the previous feature is turned off, and the new feature becomes the Tip.

There can only be one feature visible at a time. It is possible to [toggle the visibility](/Std_ToggleVisibility "Std ToggleVisibility") of any feature in the Body, by selecting it in the Tree view and pressing the Spacebar, in effect going back in the history of the Body. Note that changing the visibility of features does not change the Tip of the Body.

### Moving and Reordering Objects

The features of a Body can be reordered, or moved to a different Body. Select the feature and right-click to get a context menu that offers both options. The operation may be prevented if the object has dependencies in the source Body, such as being attached to a face. To move a sketch to another Body, it should not contain links to external geometry.

![](/src/assets/images/PartDesign_workflow.svg)

Schematic representation of the PartDesign workflow.

## Datum geometry

Datum geometry consists of custom planes, lines, points or externally linked shapes. They can be created for use as reference by sketches and features. There are many [attachment](/Part_EditAttachment "Part EditAttachment") options for datum objects.

In FreeCAD, datum planes make sense if you are placing sketches in non-standard orientations, that is, on planes offset or rotated around the three main axes. But since sketches can also be placed in non-standard orientations and have the same attachment options as datum planes, there is often no need to use them. Datum planes make the most sense if there is more than one sketch with the same non-standard orientation. Adjusting the orientation of the datum plane will then adjust all associated sketches and the features created from those sketches.

Although FreeCAD version 1.0 already has code to mitigate the [topological naming problem](/Topological_naming_problem "Topological naming problem"), it is still best practice to attach both sketches and datum planes to the base planes of the Body's Origin whenever possible. Referencing generated geometry (geometry that is the result of a feature operation, for example a pad or pocket) may yet result in less stable models. See [Advice for creating stable models](#Advice_for_creating_stable_models) below.

## Advice for creating stable models

The idea of parametric modeling implies that you can change the values of certain parameters and subsequent steps are changed according to the new values. However, when severe changes are made, the model can break due to the [topological naming problem](/Topological_naming_problem "Topological naming problem"). Breakage can be minimized if you respect the following design principles:

- Avoid attaching sketches and custom datum geometry to generated geometry, that is any face, edge or vertex, of the model's solid. Attach them to standard planes/axes instead. Sketches attached to standard planes/axes or to datum geometry attached to standard planes/axes, will not get unexpectedly reattached to a different reference. Use attachment offsets as needed.
- Use a "master sketch". Since a master sketch is done before the rest of the model, it can only reference the standard planes/axes.
  - A master sketch should be as simple as possible, containing the basic geometric elements of your model.
  - Master sketch elements can be referenced when modelling subsequent features.
  - A master sketch can be the first sketch in the Body, or outside the Body completely. In the first case it can be referenced directly as external geometry, in the latter it can be referenced via a ![](/src/assets/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") or ![](/src/assets/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder").
- Don't create (Sub)ShapeBinders from generated geometry. Keep in mind that (Sub)ShapeBinders can be an issue if geometry is deleted from the sketch it is based on.
- Always first try to reference a sketch, or sketch geometry, rather than generated geometry. If you inevitably have to reference generated geometry, use the first feature where the element to be referenced occurs. Changes to later steps then won't break your model.
- Use dress ups, like fillets and chamfers, as late in the feature tree as possible.

## Tutorials

The [tutorials](/Tutorials "Tutorials") page provides some examples of using the feature editing method of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

- [Creating a simple part with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign")
- [Basic Part Design Tutorial 019](/Basic_Part_Design_Tutorial_019 "Basic Part Design Tutorial 019")
- [Basic Attachment Tutorial](/Basic_Attachment_Tutorial "Basic Attachment Tutorial")

## Related

- [Constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry")

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature_editing/en&oldid=1511494>"
