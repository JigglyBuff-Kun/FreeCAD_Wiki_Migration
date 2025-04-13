---
title: CAM ToolShape
---

## Description

ToolShapes are a core part of the [CAM Tools](/CAM_Tools "CAM Tools") system. ToolShapes are the templates from which ToolBits are created. They represent the specific physical shape of a tool. A ToolShape does not completely describe the bit - for that some additional parameters are needed which will be added when an actual bit is parameterized from the template.

Initially ToolShapes are just FreeCAD documents with a single Body created from the ![](/src/assets/images/Workbench_PartDesign.svg) [Part Design](/PartDesign_Workbench "PartDesign Workbench") workbench.

Creating new ToolShapes is an advanced topic. The most commonly needed ToolShapes already exist and are provided with the FreeCAD installation at:

- On Linux it is usually `/usr/lib64/FreeCAD/Mod/CAM/Tools/Shape`
- On Windows it is usually `C:\Program Files\FreeCAD\Mod\CAM\Tools\Shape`
- On macOS it is usually `/Applications/FreeCAD.app/Contents/Resources/Mod/CAM/Tools/Shape`

They are:

: ballend.fcstd
: bullnose.fcstd
: chamfer.fcstd
: drill.fcstd
: endmill.fcstd
: probe.fcstd
: slittingsaw.fcstd
: thread-mill.fcstd
: v-bit.fcstd

These can be found in the Mod/CAM/Tools/Shape/ subdirectory where FreeCAD was installed.

## Usage

1. Create a new FreeCAD document.
2. Open the ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
3. Create a [Body](/PartDesign_Body "PartDesign Body") and give the Body a label you want to show up in the bit selection.
4. Create a ![](/src/assets/images/PartDesign_NewSketch.svg) [Sketch](/PartDesign_NewSketch "PartDesign NewSketch") on the XZ plane and draw half the profile of the bit.
5. Constrain the bottom most center of the bit on the origin `(0,0)`. This will be the center of the axis on which the G-code will rotate the bit.
   - Note: Do not add dimensional constraints at this time.
6. Close the Sketch.
7. ![](/src/assets/images/PartDesign_Revolution.svg) [Revolve](/PartDesign_Revolution "PartDesign Revolution") the Sketch around the vertical Sketch axis.
8. Open the ![](/src/assets/images/Workbench_CAM.svg) [CAM Workbench](/CAM_Workbench "CAM Workbench").
9. Select the Sketch in the [Tree view](/Tree_view "Tree view"). This ensures that the PropertyBag created in the next step will be nested in the Body.
10. Select the **CAM → Utils → PropertyBag** option from the menu.
11. A PropertyBag named `Attributes` is created. This PropertyBag will be used to control the dimensions in the Sketch.
12. Double-click the PropertyBag in the [Tree view](/Tree_view "Tree view").
13. The **Property Bag** task panel opens.
14. Click the Add... button.
15. The **Create Property** dialog opens.
16. Create a property named `Diameter`. This property is mandatory for ToolBits. Property names are case-sensitive and may not contain spaces.
17. Select `Shape` from the **Group** dropdown list.
18. Select the appropriate **Type**.
19. Optionally specify a **ToolTip**.
20. Click the OK button.
21. In the **Property Bag** task panel enter a value for the **Diameter** property.
22. Similarly add all other required properties.
23. Click the OK button in the **Property Bag** task panel when done.
24. Double-click the Sketch in the [Tree view](/Tree_view "Tree view").
25. Add dimensional constraints and apply the properties from the created PropertyBag. For example to apply the **Diameter** property:
    1. Double-click a dimension.
    2. Click the ![](/src/assets/images/Bound-expression.svg) icon.
    3. Enter `<<Attributes>>.Diameter` in the **Formula editor**.
    4. Click the OK button twice.
26. Repeat this until the Sketch is fully constrained.
27. Save the FCStd file where FreeCAD expects to find ToolBit files. See [Description](#Description) above.

- Note 1. If you are denied access to the folder on Windows, start FreeCAD in ADMINISTRATOR mode.
- Note 2. The Body of the ToolBit must be the first object in the [Tree view](/Tree_view "Tree view"). These instructions ensure that this is the case.

## Tool Thumbnail Images

ToolBits will have a small icon image of the tool in the [Tree view](/Tree_view "Tree view") if the file is saved with thumbnails active.

Important notes:

- Before saving the document make sure you have Save Thumbnail selected, and Add program logo deselected in FreeCAD's preferences.
- Also make sure to switch to Front View and Fit content to screen
- Whatever you see when saving the document will end up being the visual representation of the template

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ToolShape/en&oldid=1386826>"
