---
title: Migrating to FreeCAD from Fusion360
---

## Background

This page is intended for users who are interested in migrating to FreeCAD from the Fusion 360 world.

## What do I do?

1. The first thing that you want to do is to get your files out of proprietary formats and storage. Start by exporting your models from the cloud to your local machine.
   - A popular method is using this [Fusion360 total exporter](https://github.com/Jnesselr/fusion-360-total-exporter) script.
2. We recommend exporting to STEP format.

## Glossary

:::caution
Please also reference the ongoing work in progressCAD Rosetta Stoneproject to learn the analogous names that popular proprietary CADs use
:::

Reference the [Glossary](/Glossary "Glossary") page in general but here is a short list of specific terms that F360 folks may find spefically helpful:

- Tangent constraint - FreeCAD's form of **Collinear Constraint**. See ![](/images/Sketcher_ConstrainTangent.svg) [Sketcher ConstrainTangent](/Sketcher_ConstrainTangent#Between_two_lines_.28collinear.29 "Sketcher ConstrainTangent").
- Pad - The **extrude** function in FreeCAD. Read the ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") documentation to learn more.
- Toponaming - Short for [Topological naming problem](/Topological_naming_problem "Topological naming problem"). Covered very well in [Brodie Fairhall's youtube clip](https://www.youtube.com/watch?v=6p2vqEEmWq4)].

## FAQ

1. What formats do you support in FreeCAD?
   - The native file format in FreeCAD is BREP, [boundary representation](https://en.wikipedia.org/wiki/Boundary_representation), provided by the internal [OpenCASCADE (OCCT)](/OpenCASCADE "OpenCASCADE") geometry kernel.
   - FreeCAD supports all formats that OCCT supports, so STEP and IGES at least.
2. What formats should I use to migrate to FreeCAD?
   - STEP is the best format because it is a solid [Shape](/Shape "Shape") format, as opposed to a [Mesh](/Mesh "Mesh") (STL, OBJ, DAE). Example, [Importing Step with Colors](https://forum.freecadweb.org/viewtopic.php?f=3&t=50308).
   - Importing an STL is possible, but this mesh format will be difficult to modify further. We recommend converting imported meshes to solid Shapes using ![](/images/Part_ShapeFromMesh.svg) [Part ShapeFromMesh](/Part_ShapeFromMesh "Part ShapeFromMesh"). Remodelling the object in FreeCAD, while using the mesh as reference, is the best advice.

## Tips

- @MPetrika ([twitter](https://twitter.com/MPetrikas/status/1362051484704264198)) recommends installing HakanSeven12's [ModernUI Workbench](/ModernUI_Workbench "ModernUI Workbench")

## Learning Resources

- [Fusion360 to FreeCAD - Introduction](https://www.youtube.com/watch?v=_GxJkB23ZHM), video by Brodie Fairhall.
- [Fusion360 to FreeCAD - Part 2](https://www.youtube.com/watch?v=IESZD4QS3P8), video by Brodie Fairhall.
- [V0.19 Benchmarking--2019 Monthly Challenges](https://forum.freecadweb.org/viewtopic.php?f=36&t=50492), a series of objects created with Fusion360 are remodelled using FreeCAD, by experienced user ppemawm.
- [Beginners written tutorial: from first part to technical drawing.](https://github.com/macdroid53/LearningFreeCAD) by macdroid53.
- [An online resource for us regular FreeCAD users.](https://www.freecad.info/)

## Comparison Videos

- [Model a compressor turbine in FreeCAD and Fusion360](https://www.youtube.com/watch?v=kirDbZd0dvI&feature=youtu.be)

## Help

Is this wiki page missing something. Please make a request for [wiki permissions](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830) on the forum to edit this page.

## Related

- [Migrating to FreeCAD from OnShape](/Migrating_to_FreeCAD_from_OnShape "Migrating to FreeCAD from OnShape")

Retrieved from "<http://wiki.freecad.org/index.php?title=Migrating_to_FreeCAD_from_Fusion360/en&oldid=960626>"
