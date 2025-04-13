---
title: Datum
---

## Introduction

In FreeCAD the word "[Datum](/Datum "Datum")" is normally used to refer to auxiliary geometry in the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). These geometrical elements will not form part of the final [Shape](/Shape "Shape") of the [Body](/Body "Body"), but can be used as references and supports for [sketches](/Sketch "Sketch") and other types of [features](/Feature "Feature").

The following correspond to elements derived from the `Part::Datum` class, itself derived from [Part Feature](/Part_Feature "Part Feature"):

- [PartDesign Point](/PartDesign_Point "PartDesign Point")
- [PartDesign Line](/PartDesign_Line "PartDesign Line")
- [PartDesign Plane](/PartDesign_Plane "PartDesign Plane")
- [PartDesign CoordinateSystem](/PartDesign_CoordinateSystem "PartDesign CoordinateSystem")

The following are derived directly from [Part Feature](/Part_Feature "Part Feature"):

- [PartDesign ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder")
- [PartDesign SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder")

## Usage

1. Switch to the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
2. Press ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body").
3. Select the Origin of the Body, and make it visible by pressing the Space bar in your keyboard.
4. Press ![](/src/assets/images/PartDesign_Plane.svg) [PartDesign Plane](/PartDesign_Plane "PartDesign Plane") to open the plane [task panel](/Task_panel "Task panel").
5. In the [3D view](/3D_view "3D view"), click on one of the standard planes, for example, the XY plane. Then press OK to close the task panel.
6. Now in the [tree view](/Tree_view "Tree view"), select the newly created DatumPlane, and then press ![](/src/assets/images/PartDesign_NewSketch.svg) [PartDesign NewSketch](/PartDesign_NewSketch "PartDesign NewSketch").
7. Create a closed wire, and then use ![](/src/assets/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") to extrude the sketch, and create an initial solid.

Now you can move and rotate the DatumPlane as you wish, by changing its properties in the [property editor](/Property_editor "Property editor"), and the Sketch and Pad will follow its new [Placement](/Placement "Placement").

You can add other types of datums to be used with other sketches and features.

## Notes

Since they appeared in v0.17, datum objects were intended to be used inside [PartDesign Bodies](/PartDesign_Body "PartDesign Body"). However, since they are useful "reference" objects with different [attachment methods](/Part_EditAttachment "Part EditAttachment"), it has been proposed that they should be available outside of the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"). In this way, they will be usable in all workbenches as supporting geometry, particularly in the context of creating [assemblies](/Assembly "Assembly").

- [Create and display local coordinate system](https://forum.freecadweb.org/viewtopic.php?f=10&t=2604)
- [Datum objects in App::Part](https://forum.freecadweb.org/viewtopic.php?f=22&t=33654)
- [Structure toolbar and datums](https://forum.freecadweb.org/viewtopic.php?t=42759)
- [Local CS cannot be used in Part Wb?](https://forum.freecadweb.org/viewtopic.php?f=3&t=42960)

Retrieved from "<http://wiki.freecad.org/index.php?title=Datum/en&oldid=1015620>"
