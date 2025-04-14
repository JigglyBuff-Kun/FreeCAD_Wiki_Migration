---
title: Body
---

## Introduction

In FreeCAD the word "[Body](/Body "Body")" is normally used to refer to a [PartDesign Body](/PartDesign_Body "PartDesign Body") object (`PartDesign::Body` class) that is defined by the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). This is a container object that can hold [2D sketches](/Sketch "Sketch") and [3D geometrical features](/PartDesign_Feature "PartDesign Feature") to build a solid shape.

See [PartDesign Body](/PartDesign_Body "PartDesign Body") for more information about this type of object.

## Usage

1. Switch to the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
2. Press ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body").
3. Press ![](/images/PartDesign_NewSketch.svg) [PartDesign NewSketch](/PartDesign_NewSketch "PartDesign NewSketch") to create a new [sketch](/Sketch "Sketch").
4. Create a closed wire, and then use ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") to extrude the sketch, and create an initial solid.
5. Add more sketches and pads, and use other tools of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") to modify and transform the initial solid.

Alternatively, instead of using [sketches](/Sketch "Sketch"), you can add primitive [PartDesign Features](/PartDesign_Feature "PartDesign Feature"), for example, a ![](/images/PartDesign_AdditiveBox.svg) [PartDesign Additive box](/PartDesign_AdditiveBox "PartDesign AdditiveBox"). Any number of additive and subtractive features can be used to create a final volume.

## Notes

A Body is required when using the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") in a [feature editing](/Feature_editing "Feature editing") methodology.

A Body is not required when using the [Part Workbench](/Part_Workbench "Part Workbench"), as this workbench uses a [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") workflow, which is based on [primitive shapes](/Part_Primitives "Part Primitives") and boolean operations.

Retrieved from "<http://wiki.freecad.org/index.php?title=Body/en&oldid=1351042>"
