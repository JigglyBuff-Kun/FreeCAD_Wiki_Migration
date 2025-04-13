---
title: CNC G-Kod Tezgahı
---

![](/images/Workbench_CAM.svg)

CAM workbench icon

## Introduction

The ![](/images/Workbench_CAM.svg) [CAM Workbench](/CAM_Workbench "CAM Workbench") is used to produce machine instructions for [CNC machines](https://en.wikipedia.org/wiki/CNC_router) from a FreeCAD 3D model. These produce real-world 3D objects on CNC machines such as mills, lathes, lasercutters, or similar. Typically, instructions are a [G-code](https://en.wikipedia.org/wiki/G-code) dialect. A [general CNC lathe tool path sequence simulation example](https://www.ange-softs.com/SIMULCNCHTML/index.html) is presented here.

![](/images/Pathwb.png)

The FreeCAD CAM Workbench workflow creates these machine instructions as follows:

- A 3D model is the base object, typically created using one or more of the ![](/images/Workbench_PartDesign.svg) [Part Design](/PartDesign_Workbench "PartDesign Workbench"), ![](/images/Workbench_Part.svg) [Part](/Part_Workbench "Part Workbench") or ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench "Draft Workbench") Workbenches.
- A [CAM Job](/CAM_Job "CAM Job") is created in the CAM Workbench. This contains all the information required to generate the necessary G-code to process the Job on a CNC mill: there is Stock material, the mill has a certain [set of tools](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") and it follows certain commands controlling speed and movements (usually G-code).
- [CAM Tools](/CAM_Tools "CAM Tools") are selected as required by the Job Operations.
- Milling paths are created using e.g. [Contour](/CAM_Profile "CAM Profile") and [Pocket](/CAM_Pocket_3D "CAM Pocket 3D") Operations. These CAM objects use internal FreeCAD G-code dialect, independent of the CNC machine.
- Export the job with a G-code, matching to your machine. This step is called _post processing_; there are different post processors available.

## General concepts

The CAM Workbench generates G-code defining the paths required to mill the Project represented by the 3D model on the target mill in [the CAM Job Operations FreeCAD G-code dialect](/CAM_scripting#The_FreeCAD_Internal_GCode_Format "CAM scripting"), which is later translated to the appropriate dialect for the target CNC controller by selecting the appropriate postprocessor.

The G-code is generated from directives and Operations contained in a CAM Job. The Job Workflow lists these in the order they will be executed. The list is populated by adding CAM Operations, Path Dressups, Supplemental Commands, and Path Modifications from the CAM Menu, or GUI buttons.

The CAM Workbench provides a Tool Manager (Library, Tool-Table), and G-code Inspection, and Simulation tools. It links the Postprocessor, and allows importing and exporting Job Templates.

The CAM Workbench has external dependencies including:

1. The FreeCAD 3D model units are defined in the **Edit → Preference → General → Default unit system**. The Postprocessor configuration defines the final G-code units.
2. The Macro file path, and Geometric tolerances, are defined in the **Edit → Preferences → CAM → Job Preferences** tab.
3. Colors are defined in the **Edit → Preferences → CAM → GUI** tab.
4. Holding tag parameters are defined in the **Edit → Preferences → CAM → Dressups** tab.
5. That the Base 3D model quality supports the CAM workbench requirements, passes Check Geometry.

## Limitations

Some current limitations of which you should be aware are:

- Most of the CAM Tools are not true 3D tools but only 2.5D capable. This means that they take a fixed 2D shape and can cut it down to a given depth. However, there are two tools which produce true 3D paths: ![](/images/CAM_3DPocket.svg) [3D Pocket](/CAM_Pocket_3D "CAM Pocket 3D") and ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") (which is still an [experimental feature](/CAM_experimental "CAM experimental") as of November 2020).
- Most of CAM workbench is designed for a simple, standard 3-axis (xyz) CNC mill/router, but lathe tools are under development in 0.19_pre.
- Most operations in CAM workbench will return paths based on a standard endmill tool/bit only, regardless of the tool/bit type assigned in a given tool controller with the exception of the ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") and ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface") operations.
- The operations within the CAM workbench are not aware of clamping mechanisms in use to secure the model to your machine. Consequently, please review and simulate the paths you generate prior to sending the code to your machine. If necessary, model your clamping mechanisms in FreeCAD in order to better inspect the paths generated. Look for possible collisions with clamps or other obstacles along the paths.

## Units

Unit handling in CAM can be confusing. There are several points to understand:

1. FreeCAD base units for length and time are 'mm' and 's' respectively. Velocity is thus 'mm/s'. This is what FreeCAD stores internally regardless of anything else
2. The default unit schema uses the default units. If you're using the default schema and you enter a feed rate without a unit string, it will get entered as 'mm/s'
3. Most CNC machines expect feed rate in the form of either 'mm/min' or 'in/min'. Most post-processors will automatically convert the unit when generating gcode.

Schemas:

1. Changing schema in preferences changes default unit string for the input fields. If you're a CAM user and prefer to design in metric, it's highly recommended that you use the "Metric Small Parts & CNC" schema. If you design in US units, either the Imperial Decimal and Building US will work.
2. Changing your preferred unit schema will have no effect on output but will help avoid input errors.

Output:

1. Generating the correct unit in output is the responsibility of the post-processor and is done only at that time.
2. Machine output unit is completely unrelated to your selected unit schema.
3. Post-processors produce either metric (G21) output, Imperial (G20) output or are configurable.
4. Configurable post-processors default to metric (G21).
5. If you want your configurable post-processor to output imperial G-code (G20), set the correct argument in your job output configuration (ie --inches for linuxcnc). This can be stored in a job template and set as your default template to make it automatic for all future jobs.

CAM Inspection:

1. If you use the CAM Inspect tool to look at G-code, you will see it in 'mm/s' because it is not being post-processed.

## Heights and depths

Many of the commands have various heights and depths:

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

## Commands

Some commands are experimental and not available by default. To enable them see [CAM experimental](/CAM_experimental "CAM experimental").

### Project Commands

- ![](/images/CAM_Job.svg) [Job](/CAM_Job "CAM Job"): Creates a new CNC job.

- ![](/images/CAM_Post.svg) [Post Process](/CAM_Post "CAM Post"): Exports a project to G-code.

- ![](/images/CAM_Sanity.svg) [Check the CAM job for common errors](/CAM_Sanity "CAM Sanity"): Checks the selected job for missing values.

- ![](/images/CAM_ExportTemplate.svg) [Export Template](/CAM_ExportTemplate "CAM ExportTemplate"): Export the current job as a template.

### Tool Commands

- ![](/images/CAM_Inspect.svg) [Inspect CAM Commands](/CAM_Inspect "CAM Inspect"): Shows the G-code for checking.

- ![](/images/CAM_Simulator.svg) [CAM Simulator](/CAM_Simulator "CAM Simulator"): Shows the milling operation like it's done on the machine.

- ![](/images/CAM_SimulatorGL.svg) [CAM SimulatorGL](/CAM_SimulatorGL "CAM SimulatorGL"): Enables the new, improved CAM simulator. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/CAM_SelectLoop.svg) [Finish Selecting Loop](/CAM_SelectLoop "CAM SelectLoop"): Completes a loop from two selected edges.

- ![](/images/CAM_OpActiveToggle.svg) [Toggle the Active State of the Operation](/CAM_OpActiveToggle "CAM OpActiveToggle"): Activates or de-activates a path operation.

- ![](/images/CAM_ToolBitLibraryOpen.svg) [ToolBit Library editor](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen"): Opens an editor to manage ToolBit libraries.

- ![](/images/CAM_ToolBitDock.svg) [ToolBit Dock](/CAM_ToolBitDock "CAM ToolBitDock"): Toggles the ToolBit Dock.

### Basic Operations

- ![](/images/CAM_Profile.svg) [Profile](/CAM_Profile "CAM Profile"): Creates a profile operation of the entire model, or from one or more selected faces or edges.

- ![](/images/CAM_Pocket_Shape.svg) [Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape"): Creates a pocketing operation from one or more selected pocket(s).

- ![](/images/CAM_Drilling.svg) [Drilling](/CAM_Drilling "CAM Drilling"): Performs a drilling cycle.

- ![](/images/CAM_MillFace.svg) [Face](/CAM_MillFace "CAM MillFace"): Creates a surfacing path.

- ![](/images/CAM_Helix.svg) [Helix](/CAM_Helix "CAM Helix"): Creates a helical path.

- ![](/images/CAM_Adaptive.svg) [Adaptive](/CAM_Adaptive "CAM Adaptive"): Creates an adaptive clearing and profiling operation.

- ![](/images/CAM_Slot.svg) [Slot](/CAM_Slot "CAM Slot"): Creates a slotting operation from selected features or custom points. [_Experimental_](/CAM_experimental "CAM experimental").

- ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave"): Creates an engraving path.

- ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr"): Creates a deburr path.

- ![](/images/CAM_Vcarve.svg) [Vcarve](/CAM_Vcarve "CAM Vcarve"): Creates an engraving path using a V tool shape.

### 3D Operations

- ![](/images/CAM_Pocket_3D.svg) [3D Pocket](/CAM_Pocket_3D "CAM Pocket 3D"): Creates a path for a 3D pocket.

- ![](/images/CAM_Surface.svg) [3D Surface](/CAM_Surface "CAM Surface"): Creates a path for a 3D surface. [_Experimental_](/CAM_experimental "CAM experimental").

- ![](/images/CAM_Waterline.svg) [Waterline](/CAM_Waterline "CAM Waterline"): Creates a waterline path for a 3D surface. [_Experimental_](/CAM_experimental "CAM experimental").

### Path Dressup

- ![](/images/CAM_DressupAxisMap.svg) [Axis Map](/CAM_DressupAxisMap "CAM DressupAxisMap"): Remaps one axis to another.

- ![](/images/CAM_DressupPathBoundary.svg) [Boundary](/CAM_DressupPathBoundary "CAM DressupPathBoundary"): Adds a boundary dressup modification to a selected path.

- ![](/images/CAM_DressupDogbone.svg) [Dogbone](/CAM_DressupDogbone "CAM DressupDogbone"): Adds a dogbone dressup modification to a selected path.

- ![](/images/CAM_DressupDragKnife.svg) [DragKnife](/CAM_DressupDragKnife "CAM DressupDragKnife"): Adds a dragknife dressup modification to a selected path.

- ![](/images/CAM_DressupLeadInOut.svg) [LeadInOut](/CAM_DressupLeadInOut "CAM DressupLeadInOut"): Adds a lead-in and/or lead-out point to a selected path.

- ![](/images/CAM_DressupRampEntry.svg) [RampEntry](/CAM_DressupRampEntry "CAM DressupRampEntry"): Adds ramp entry dressup modification to a selected path.

- ![](/images/CAM_DressupTag.svg) [Tag](/CAM_DressupTag "CAM DressupTag"): Adds a holding tag dressup modification to a selected path.

- ![](/images/CAM_DressupZCorrect.svg) [Z Depth Correction](/CAM_DressupZCorrect "CAM DressupZCorrect"): Corrects the Z depth using Probe Map.

### Supplemental Commands

- ![](/images/CAM_Fixture.svg) [Fixture](/CAM_Fixture "CAM Fixture"): Changes the fixture position.

- ![](/images/CAM_Comment.svg) [Comment](/CAM_Comment "CAM Comment"): Inserts a comment in the G-code of a path.

- ![](/images/CAM_Stop.svg) [Stop](/CAM_Stop "CAM Stop"): Inserts a full stop of the machine.

- ![](/images/CAM_Custom.svg) [Custom](/CAM_Custom "CAM Custom"): Inserts custom G-code.

- ![](/images/CAM_Probe.svg) [Probe](/CAM_Probe "CAM Probe"): Creates a Probing Grid from a job stock.

- ![](/images/CAM_Shape.svg) [From Shape](/CAM_Shape "CAM Shape"): Creates a path object from a selected Part object. [_Experimental_](/CAM_experimental "CAM experimental").

### Path Modification

- ![](/images/CAM_Copy.svg) [Copy the operation in the job](/CAM_Copy "CAM Copy"): Creates a parametric Copy of a selected path object.

- ![](/images/CAM_Array.svg) [Array](/CAM_Array "CAM Array"): Creates an array by duplicating a selected path.

- ![](/images/CAM_SimpleCopy.svg) [Simple Copy](/CAM_SimpleCopy "CAM SimpleCopy"): Creates a non-parametric copy of a selected path object.

### Specialty Operations

- ![](/images/CAM_ThreadMilling.svg) [Thread Milling](/CAM_ThreadMilling "CAM ThreadMilling"): Creates a CAM Thread Milling operation from features of a base object. [_Experimental_](/CAM_experimental "CAM experimental").

### Miscellaneous

- ![](/images/CAM_Area.svg) [Area](/CAM_Area "CAM Area"): Creates a feature area from selected objects. [_Experimental_](/CAM_experimental "CAM experimental").

- ![](/images/CAM_Area_Workplane.svg) [Area workplane](/CAM_Area_Workplane "CAM Area Workplane"): Creates a feature area workplane. [_Experimental_](/CAM_experimental "CAM experimental").

## ToolBit architecture

Manage tools, bits, and the Tool Library. Based on the ToolBit architecture.

- [CAM Tools](/CAM_Tools "CAM Tools")
- [CAM ToolShape](/CAM_ToolShape "CAM ToolShape")
- [CAM ToolBit](/CAM_ToolBit "CAM ToolBit")
- [CAM ToolBit Library](/CAM_ToolBit_Library "CAM ToolBit Library")
- [CAM ToolController](/CAM_ToolController "CAM ToolController")

## Other

- [CAM FAQ](/CAM_FAQ "CAM FAQ"): The CAM Workbench shares many concepts with other CAM software packages but has its own peculiarities. If something seems wrong this is a good place to start.
- [CAM SetupSheet](/CAM_SetupSheet "CAM SetupSheet"): You can use a SetupSheet to customize how various property values for operations are calculated.
- [CAM Postprocessor Customization](/CAM_Postprocessor_Customization "CAM Postprocessor Customization"): If you have a special machine which cannot use one of the available post-processors you may need to write your own post-processor.
- [CAM fourth axis](/CAM_fourth_axis "CAM fourth axis"): Experimental four axis milling.

## Preferences

- ![](/images/Preferences-cam.svg) [Preferences...](/CAM_Preferences "CAM Preferences"): Preferences available for the CAM Workbench.

## Scripting

See [CAM scripting](/CAM_scripting "CAM scripting").

## Tutorials

- [CAM Walkthrough for the Impatient](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient"): a quick tutorial to get familiar with CAM.

## Videos

- [FreeCAD Path: Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): A playlist with a series of 5 videos in English by sliptonic. This series shows how to work with the [CAM Workbench](/CAM_Workbench "CAM Workbench").
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): A playlist with a series of 7 videos in English by CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): A playlist with a series of 8 videos in English by CAD CAM Lessons.
- Also see the [Computer-Aided Manufacturing (CAM) section](</Video_tutorials#Computer-Aided_Manufacturing_(CAM)> "Video tutorials") of the [Video tutorials](/Video_tutorials "Video tutorials") wiki page.

## Roadmap

- [CAM Development Roadmap](/CAM_Development_Roadmap "CAM Development Roadmap"): Read this if you are a developer and want to contribute to CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/tr&oldid=1494606>"
