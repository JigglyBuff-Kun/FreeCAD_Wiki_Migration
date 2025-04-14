---
title: Feature
---

## Introduction

In FreeCAD the word "[Feature](/Feature "Feature")" is normally used to refer to a [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") object (`PartDesign::Feature` class) that is defined by the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). This is an operation or modelling step performed to create or modify a solid [Shape](/Shape "Shape") following the [feature editing](/Feature_editing "Feature editing") paradigm.

See [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") for more information about this type of object.

## Usage

1. Switch to the ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
2. Press ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body").
3. Press ![](/images/PartDesign_NewSketch.svg) [PartDesign NewSketch](/PartDesign_NewSketch "PartDesign NewSketch") to create a new [Sketch](/Sketch "Sketch").
4. Create a closed wire, and then use ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") to extrude the sketch, and create an initial solid. This initial solid is the initial Feature.
5. Add more sketches and pads, and use other tools of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") to modify and transform the initial solid. Each of these steps correspond to Features of the [Body](/Body "Body").
6. Alternatively, add primitive objects, like ![](/images/PartDesign_AdditiveBox.svg) [PartDesign Additive box](/PartDesign_AdditiveBox "PartDesign AdditiveBox") and ![](/images/PartDesign_SubtractiveCylinder.svg) [PartDesign Subtractive cylinder](/PartDesign_SubtractiveCylinder "PartDesign SubtractiveCylinder"). Any number of additive and subtractive steps are Features that are used to create a final volume.

## Notes

In the general sense, a "Feature" can be any modelling step used to create a final [Shape](/Shape "Shape"), with any tool of any [workbench](/Workbenches "Workbenches").

- For example, in the [Part Workbench](/Part_Workbench "Part Workbench"), in the [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") workflow, a "Feature" could be any boolean operation, like ![](/images/Part_Fuse.svg) [Part Fuse](/Part_Fuse "Part Fuse"), ![](/images/Part_Cut.svg) [Part Cut](/Part_Cut "Part Cut"), or ![](/images/Part_Common.svg) [Part Common](/Part_Common "Part Common").

In a more specific sense, a "Feature" is a modelling step used inside a [PartDesign Body](/PartDesign_Body "PartDesign Body").

- For example, ![](/images/PartDesign_AdditiveCylinder.svg) [PartDesign Additive cylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder"), ![](/images/PartDesign_AdditiveLoft.svg) [PartDesign Additive loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft"), ![](/images/PartDesign_Pocket.svg) [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket"), ![](/images/PartDesign_SubtractiveCone.svg) [PartDesign Subtractive cone](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone"), etc., are all "Features".

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature/en&oldid=811803>"
