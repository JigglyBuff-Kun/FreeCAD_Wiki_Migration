---
title: Примечания к выпуску 1.1
---
:::caution
FreeCAD 1.1 находится в стадии разработки, дата выхода пока не сообщается.
:::

Are features missing? Mention them in the [Release notes for v1.1](https://forum.freecad.org/viewtopic.php?f=10&t=92080) forum thread.

See [Help FreeCAD](/Help_FreeCAD "Help FreeCAD") for ways to contribute to FreeCAD.

All images on this page must use the \_relnotes\_1.1 suffix

**FreeCAD 1.1** was released on **D Month Year**, get it from the [Download](/Download "Download") page. This page lists all new features and changes.

Older FreeCAD release notes can be found in the [Feature list](/Feature_list#Release_notes "Feature list").

Placeholder for an eye-catching image selected by the admins from the [user showcases forum](https://forum.freecad.org/viewforum.php?f=24).

## General

## User interface

|  |  |
| --- | --- |
|  | Three-point lighting was added to improve the rendering of 3D models. [Pull request #19397](https://github.com/FreeCAD/FreeCAD/pull/19397) |

### Further user interface improvements

* A default shortcut for [Std DlgPreferences](/Std_DlgPreferences "Std DlgPreferences") has been added. [Pull request #15536](https://github.com/FreeCAD/FreeCAD/pull/15536)
* The Notification area preferences page was improved. [Pull request #15207](https://github.com/FreeCAD/FreeCAD/pull/15207)
* Auto save and additive selection features were added to the [Measure](/Std_Measure "Std Measure") tool. [Pull request #17717](https://github.com/FreeCAD/FreeCAD/pull/17717)
* A *ToggleTransparency* [fine-tuning](/Fine-tuning "Fine-tuning") parameter was added to allow users to change the default transparency level enabled by the [Toggle transparency](/Std_ToggleTransparency "Std ToggleTransparency") tool. [Pull request #18986](https://github.com/FreeCAD/FreeCAD/pull/18986)
* A *Show Plane* view property was added to display the plane on which a 2D object is based. [Pull request #18910](https://github.com/FreeCAD/FreeCAD/pull/18910)
* It is now possible to change the color of the coordinate system axes using the new preferences under *Edit → Preferences... → Display → 3D View*. [Pull request #16995](https://github.com/FreeCAD/FreeCAD/pull/16995)
* A *Show Placement* view property was added to display the placement as a coordinate system at the origin of a 2D object. [Pull request #19671](https://github.com/FreeCAD/FreeCAD/pull/19671)
* The SolidWorks [navigation style](/Mouse_navigation "Mouse navigation") was added. [Pull request #19568](https://github.com/FreeCAD/FreeCAD/pull/19568)

## Core system and API

### Core

|  |  |
| --- | --- |
|  | [Core Datum tools](/Std_Base#Part_Datums "Std Base") were implemented to create coordinate systems, datum planes, datum lines and datum points which can be attached and also used in Assembly. [Pull request #18332](https://github.com/FreeCAD/FreeCAD/pull/18332) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | The [Transform](/Std_TransformManip "Std TransformManip") tool was overhauled and now allows for precise inputs besides dragging in the 3D view. It is possible to align the interactive dragger to any element in the document and to transform the object in that local (U, V, W) coordinate system of the dragger, or in the global document coordinate system. The dragger can be aligned to the object's origin as before, and also to the center of mass of the object. It has a new feature to move the object (at the location of the dragger) to a target location in the document and flip the orientation. See all [new options](/Std_TransformManip#Options "Std TransformManip"). [Pull request #17564](https://github.com/FreeCAD/FreeCAD/pull/17564) |

### API

#### Removed Python API

#### Changed Python API

#### New Python API

## Start

* The Start page can now display the contents of additional folders specified by the user. Their paths should be separated by double semicolons (`;;`). [Pull request #19473](https://github.com/FreeCAD/FreeCAD/pull/19473), [Pull request #19918](https://github.com/FreeCAD/FreeCAD/pull/19918) and [Pull request #19948](https://github.com/FreeCAD/FreeCAD/pull/19948).
* The Examples section on the Start page can be hidden with a setting in the preferences. [Pull request #19376](https://github.com/FreeCAD/FreeCAD/pull/19376) and [Pull request #19918](https://github.com/FreeCAD/FreeCAD/pull/19918).

## Addon Manager

* The Python dependency updater now works correctly if FreeCAD is installed as a snap package or as an AppImage. [Pull request #19384](https://github.com/FreeCAD/FreeCAD/pull/19384), [Pull request #19766](https://github.com/FreeCAD/FreeCAD/pull/19766) and [Pull request #19814](https://github.com/FreeCAD/FreeCAD/pull/19814).
* The installation path of Python modules in the dependency updater is now shown as an absolute path for better readability. It is also shown correctly according to the FreeCAD installation method. [Pull request #19828](https://github.com/FreeCAD/FreeCAD/pull/19828) and [Pull request #19816](https://github.com/FreeCAD/FreeCAD/pull/19816).

## Assembly Workbench

* The [Insert a new part](/Assembly_InsertNewPart "Assembly InsertNewPart") tool was added making it possible to easily add new parts to assembly. [Pull request #17922](https://github.com/FreeCAD/FreeCAD/pull/17922)
* The [Create Simulation](/Assembly_CreateSimulation "Assembly CreateSimulation") tool was added making it possible to add motions to joints and create animations. [Pull request #16414](https://github.com/FreeCAD/FreeCAD/pull/16414)

### Further Assembly improvements

* The new core datums can be used for attaching joints to assemble multiple parts. [Pull request #18332](https://github.com/FreeCAD/FreeCAD/pull/18332)

## BIM Workbench

### Further BIM improvements

* The [Views](/BIM_Views "BIM Views") panel got an overhaul and now has a section for all 2D views. [Pull request #15836](https://github.com/FreeCAD/FreeCAD/pull/15836)
* NativeIFC support for 2D objects was added to BIM, allowing to embed 2D objects (linework, texts, dimensions) inside IFC files, as well as opening such files from other BIM apps. [Pull request #16629](https://github.com/FreeCAD/FreeCAD/pull/16629)
* The [Schedule](/Arch_Schedule "Arch Schedule") dialog gained support for simple arrays (e.g. non-nested). This enables regular and link arrays (both either expanded or not expanded) to be processed for further calculations in the BIM Schedule report. [Pull request #19219](https://github.com/FreeCAD/FreeCAD/pull/19219)

## CAM Workbench

### Further CAM improvements

* G84/G74 tapping operations were added. [Pull request #8069](https://github.com/FreeCAD/FreeCAD/pull/8069)
* Multi-pass support was added for profile operations. [Pull request #17326](https://github.com/FreeCAD/FreeCAD/pull/17326)

## Draft Workbench

* Support for relative font paths has been added to [ShapeStrings](/Draft_ShapeString "Draft ShapeString"). [Pull request #17819](https://github.com/FreeCAD/FreeCAD/pull/17819)
* The handling of Links in [TechDraw DraftViews](/TechDraw_DraftView "TechDraw DraftView") was fixed. [Pull request #18175](https://github.com/FreeCAD/FreeCAD/pull/18175) and [Pull request #19296](https://github.com/FreeCAD/FreeCAD/pull/19296)
* The extrude mode of the [Draft Trimex](/Draft_Trimex "Draft Trimex") command has been made *link-aware*. It can now handle faces belonging to Links and objects in linked containers. And the point that defines the extrusion can be co-planar with the face. [Pull request #18314](https://github.com/FreeCAD/FreeCAD/pull/18314) and [Pull request #18320](https://github.com/FreeCAD/FreeCAD/pull/18320)
* The [Move](/Draft_Move "Draft Move"), [Rotate](/Draft_Rotate "Draft Rotate") and [Scale](/Draft_Scale "Draft Scale") commands have been made *link-aware* as well. [Pull request #18795](https://github.com/FreeCAD/FreeCAD/pull/18795)
* If a [Facebinder](/Draft_Facebinder "Draft Facebinder") based on connected faces is extruded, an attempt is made to close its corners. The *Sew* property of the object must be set to true for this. Note that the code can fail for complex shapes. [Pull request #18901](https://github.com/FreeCAD/FreeCAD/pull/18901)
* [Path arrays](/Draft_PathArray "Draft PathArray") have been enhanced with several new properties. It is now possible to reverse the array, specify a fixed spacing unit, and use spacing patterns. [Pull request #19017](https://github.com/FreeCAD/FreeCAD/pull/19017)
* Objects in [layers](/Draft_Layer "Draft Layer") can now have overrrides. [Pull request #19207](https://github.com/FreeCAD/FreeCAD/pull/19207)
* The [Draft AddToLayer](/Draft_AddToLayer "Draft AddToLayer") command, to quickly put objects in the correct layer, has been added. [Pull request #19427](https://github.com/FreeCAD/FreeCAD/pull/19427)
* The TechDraw code that [Draft Hatch](/Draft_Hatch "Draft Hatch") relies on has been revised to also handle dashed lines in hatch patterns. [Pull request #19458](https://github.com/FreeCAD/FreeCAD/pull/19458)
* The [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") and [Draft Upgrade](/Draft_Upgrade "Draft Upgrade") commands have been updated. [Arrays](/Draft_Workbench#Draft_ArrayTools "Draft Workbench") can be downgraded (*exploded*), and new objects are put in the same container ([Group](/Std_Group "Std Group"), [Part](/Std_Part "Std Part")) as the original objects, and also receive the visual properties of the original objects. [Pull request #19487](https://github.com/FreeCAD/FreeCAD/pull/19487) and [Pull request #19685](https://github.com/FreeCAD/FreeCAD/pull/19685)

### Further Draft improvements

* The [Draft Fillet](/Draft_Fillet "Draft Fillet") command now works on selected edges, instead of the first edge of selected objects. [Pull request #17945](https://github.com/FreeCAD/FreeCAD/pull/17945) and [Pull request #18150](https://github.com/FreeCAD/FreeCAD/pull/18150)
* The [Draft AutoGroup](/Draft_AutoGroup "Draft AutoGroup") and the [Draft AddToGroup](/Draft_AddToGroup "Draft AddToGroup") commands have been improved. The menus of both commands are sorted alphabetically. In the menu of the [Draft AutoGroup](/Draft_AutoGroup "Draft AutoGroup") command layers are separated from groups, and the *New layer* option prompts for a name and activates the layer. The actions of both commands have been made undoable. [Pull request #18172](https://github.com/FreeCAD/FreeCAD/pull/18172) and [Pull request #19312](https://github.com/FreeCAD/FreeCAD/pull/19312)
* The position of the *Scale multiplier* field in the UI was improved ([Draft SetStyle](/Draft_SetStyle "Draft SetStyle"), [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor") and [Draft Preferences](/Draft_Preferences "Draft Preferences")). [Pull request #18299](https://github.com/FreeCAD/FreeCAD/pull/18299)
* The [Draft Draft2Sketch](/Draft_Draft2Sketch "Draft Draft2Sketch") command now also applies coincident constraints between edges from different source objects. [Pull request #18805](https://github.com/FreeCAD/FreeCAD/pull/18805)
* The radius, and chamfer and delete modes of the [Draft Fillet](/Draft_Fillet "Draft Fillet") command are stored. [Pull request #19067](https://github.com/FreeCAD/FreeCAD/pull/19067)
* An edit option has been added for [Draft Clones](/Draft_Clone "Draft Clone"). After double-clicking them in the [Tree view](/Tree_view "Tree view") their scaling can be modified in a task panel. [Pull request #19477](https://github.com/FreeCAD/FreeCAD/pull/19477)
* For clarity the *Filled* checkbox in the task panel of for example [Draft Wire](/Draft_Wire "Draft Wire") has been relabeled to *Make face*. [Pull request #19738](https://github.com/FreeCAD/FreeCAD/pull/19738)
* The texts of newly created dimensions are now oriented automatically relative to the current working plane. A [fine-tuning](/Fine-tuning#Draft_Workbench "Fine-tuning") parameter is available to disable this behavior. [Pull request #20072](https://github.com/FreeCAD/FreeCAD/pull/20072)
* [Near snap](/Draft_Snap_Near "Draft Snap Near") no longer overrides other snaps. On-object snaps, such as [Midpoint snap](/Draft_Snap_Midpoint "Draft Snap Midpoint") and [Endpoint snap](/Draft_Snap_Endpoint "Draft Snap Endpoint"), within *snapRange* of the cursor are now detected. [Pull request #20118](https://github.com/FreeCAD/FreeCAD/pull/20118)

## FEM Workbench

|  |  |
| --- | --- |
|  | A popup menu was added to enable the selection of a proper solid if the selected face of CompSolid belongs to two solids. This makes it easier to select inner solids e.g. to apply materials to them. [Pull request #18812](https://github.com/FreeCAD/FreeCAD/pull/18812) |

|  |  |
| --- | --- |
|  | *ZRefine* property was added to [Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") making it possible to create simple extruded hex-dominated meshes when *Quad Dominated* property is enabled. However, it works only for first order elements unless the generated elements are all hexahedrons. [Pull request #19524](https://github.com/FreeCAD/FreeCAD/pull/19524) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | [FEM results objects](/FEM_ResultShow "FEM ResultShow") now support animations of results. [Pull request #18496](https://github.com/FreeCAD/FreeCAD/pull/18496) |

|  |  |
| --- | --- |
|  | Support for Elmer's [static current conduction solver](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent") was added. Joule heating may also be calculated with it. [Pull request #19835](https://github.com/FreeCAD/FreeCAD/pull/19835) |

|  |  |
| --- | --- |
|  | The [Results pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") can now store results from multiple frames. [Pull request #19610](https://github.com/FreeCAD/FreeCAD/pull/19610) |

### Further FEM improvements

* Log verbosity can now be set for Gmsh in the [Preferences](/FEM_Preferences#Gmsh "FEM Preferences"). [Pull request #17699](https://github.com/FreeCAD/FreeCAD/pull/17699)
* The Данные**Second Order Linear** property and support for [local refinement](/FEM_MeshRegion "FEM MeshRegion"), previously only available for Gmsh, are now also available for the new [Netgen](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") implementation. [Pull request #17170](https://github.com/FreeCAD/FreeCAD/pull/17170)
* Box and elliptical beam section types were added to [FEM ElementGeometry1D](/FEM_ElementGeometry1D "FEM ElementGeometry1D"). [Pull request #15843](https://github.com/FreeCAD/FreeCAD/pull/15843)
* The [Purge results](/FEM_ResultsPurge "FEM ResultsPurge") tool now deletes all the results objects, not just the ones native to CalculiX. [Pull request #18328](https://github.com/FreeCAD/FreeCAD/pull/18328)
* [Tie constraint](/FEM_ConstraintTie "FEM ConstraintTie") can now be applied also to shell faces. [Pull request #18325](https://github.com/FreeCAD/FreeCAD/pull/18325)
* Output format (binary or ASCII) and saving of geometry IDs can now be set for Elmer, also in [Preferences](/FEM_Preferences#Elmer "FEM Preferences"). [Pull request #17972](https://github.com/FreeCAD/FreeCAD/pull/17972)
* A smoothing option was added to the [Contours filter](/FEM_PostFilterContours "FEM PostFilterContours"). [Pull request #18088](https://github.com/FreeCAD/FreeCAD/pull/18088)
* The *BucklingAccuracy* parameter was added to [CalculiX solver](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools") - it might be necessary to capture the first eigenvalue in some linear buckling analyses. [Pull request #18790](https://github.com/FreeCAD/FreeCAD/pull/18790)
* Now all FEM objects for which suppressing makes sense can be suppressed. Previously only constraints were suppressible. [Pull request #18636](https://github.com/FreeCAD/FreeCAD/pull/18636)
* Contact forces are now printed to ccx\_dat\_file in CalculiX analyses. [Pull request #18840](https://github.com/FreeCAD/FreeCAD/pull/18840)
* The [MaterialReinforced](/FEM_MaterialReinforced "FEM MaterialReinforced") tool now uses the [new material editor](/Material_Edit "Material Edit"). [Pull request #18893](https://github.com/FreeCAD/FreeCAD/pull/18893)
* The [Electrostatic potential boundary condition](/FEM_ConstraintElectrostaticPotential "FEM ConstraintElectrostaticPotential") was extended to also support Neumann-type boundary condition and prescribe electric flux density. It now has a symbol too. [Pull request #18514](https://github.com/FreeCAD/FreeCAD/pull/18514) and [Pull request #19011](https://github.com/FreeCAD/FreeCAD/pull/19011)
* Thermal expansion reference temperature can now be defined for [solid material](/FEM_MaterialSolid "FEM MaterialSolid") in thermomechanical analyses with CalculiX. [Pull request #19285](https://github.com/FreeCAD/FreeCAD/pull/19285)
* The *Fem.frdToVTK* Python function was added allowing conversion of CalculiX's frd results files to VTK format used by ParaView. [Pull request #19426](https://github.com/FreeCAD/FreeCAD/pull/19426)
* The [Current density boundary condition](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity") was improved. It now has two modes (*Custom* and *Normal*) and a symbol for the *Normal* mode. [Pull request #19930](https://github.com/FreeCAD/FreeCAD/pull/19930)
* Two new [FEM examples](/FEM_Examples "FEM Examples") were added - one for the newly implemented [Static current equation](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent") (Joule heating) and one for [Rigid body constraint](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody"). [Pull request #20007](https://github.com/FreeCAD/FreeCAD/pull/20007) and [Pull request #20011](https://github.com/FreeCAD/FreeCAD/pull/20011)
* The [Heat flux load](/FEM_ConstraintHeatflux "FEM ConstraintHeatflux") task panel was improved - radio buttons used to choose the heat flux type were replaced with a combo box. [Pull request #20059](https://github.com/FreeCAD/FreeCAD/pull/20059)
* The [Magnetization boundary condition](/FEM_ConstraintMagnetization "FEM ConstraintMagnetization") task panel was improved. [Pull request #20055](https://github.com/FreeCAD/FreeCAD/pull/20055)
* Selection mode was added to Geometry reference selector in the task panels of Elmer equations. [Pull request #20053](https://github.com/FreeCAD/FreeCAD/pull/20053)
* [Electric charge density](/FEM_ElectricChargeDensity "FEM ElectricChargeDensity") load was added for use with Elmer's [Electrostatic equation](/FEM_EquationElectrostatic "FEM EquationElectrostatic"). [Pull request #20494](https://github.com/FreeCAD/FreeCAD/pull/20494)

## Material Workbench

### Further Material improvements

* [Polycarbonate](https://en.wikipedia.org/wiki/Polycarbonate) with physical properties was added to the material database. [Pull request #19432](https://github.com/FreeCAD/FreeCAD/pull/19432)

## Mesh Workbench

### Further Mesh improvements

## OpenSCAD Workbench

### Further OpenSCAD improvements

## Part Workbench

### Further Part improvements

* The [Check geometry](/Part_CheckGeometry "Part CheckGeometry") tool now also has results entries for valid shapes, shows skipped objects and generates reports in the [report view](/Report_view "Report view").

## PartDesign Workbench

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | The task panel of the [Hole tool](/PartDesign_Hole "PartDesign Hole") was redesigned. The elements that are not relevant are now hidden, leaving only those useful for the current configuration, even if they are read-only. The panel is based on a diagram that provides direct context, and its elements have been placed near their area of effect. [Pull request #19052](https://github.com/FreeCAD/FreeCAD/pull/19052) and [Pull request #19167](https://github.com/FreeCAD/FreeCAD/pull/19167) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | Added model taper support and more thread profiles to the [Hole tool](/PartDesign_Hole "PartDesign Hole"):  * [British Standard Whitworth](https://en.wikipedia.org/wiki/British_Standard_Whitworth) * [British Standard Fine](https://en.wikipedia.org/wiki/British_Standard_Fine) * [British Standard Pipe](https://en.wikipedia.org/wiki/British_Standard_Pipe) * [National Pipe Threads](https://en.wikipedia.org/wiki/National_pipe_thread)   [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744) |

### Further PartDesign improvements

* The origin feature in a PartDesign body makes use of the new core datums. The appearance has been changed and the planes enlarge when creating a new sketch. As the orientation was wrong in older FreeCAD versions, files created with these versions need to be converted on opening. It can break files which reference the datums, and converted or new files created with 1.1 and above will be broken in 1.0 and below. [Pull request #18126](https://github.com/FreeCAD/FreeCAD/pull/18126)
* The [Toggle freeze](/Std_ToggleFreeze "Std ToggleFreeze") command is now available from PartDesign. [Pull request #18373](https://github.com/FreeCAD/FreeCAD/pull/18373)
* The performance of modeled threads from the [Hole tool](/PartDesign_Hole "PartDesign Hole") has been improved. [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)
* The initial angle for tapered threads in the [Hole tool](/PartDesign_Hole "PartDesign Hole") is now automatically set to the value from the ISO 7-1 and ASME B1.20.1 standards. [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)

## Points Workbench

### Further Points improvements

## Sketcher Workbench

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | [Projection](/Sketcher_Projection "Sketcher Projection") tool was added making it possible to create defining [external geometry](/Sketcher_External "Sketcher External") and toggle between defining and construction modes for external geometry. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

|  |  |
| --- | --- |
|  | [Intersection](/Sketcher_Intersection "Sketcher Intersection") tool was added making it possible to create [external geometry](/Sketcher_External "Sketcher External") based on the selected reference geometry and the intersection of the sketch plane. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

|  |  |
| --- | --- |
| Click on the image if the animation does not start. | [External geometry](/Sketcher_External "Sketcher External") (both projection and intersection) can now be created by selecting a face. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

### Further Sketcher improvements

* It is now possible to directly use external geometry as input for tools like offset or transform (array), for both external construction and defining geometry. [Pull request #17615](https://github.com/FreeCAD/FreeCAD/pull/17615)
* External geometry (projected or intersecting) is now by default real (defining) geometry (which does not need to be traced as in 1.0 and prior). It can be toggled to construction geometry as any other geometry [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736)
* The Sketcher axes are now displayed with infinite length. [Pull request #17312](https://github.com/FreeCAD/FreeCAD/pull/17312)
* Sketches are now ordered alphabetically in the [Attach sketch](/Sketcher_MapSketch "Sketcher MapSketch") dialog. [Pull request #16518](https://github.com/FreeCAD/FreeCAD/pull/16518)
* Group dragging was added, making it possible to drag all the selected geometrical entities. [Pull request #18273](https://github.com/FreeCAD/FreeCAD/pull/18273)
* There is a new preference that, if checked, makes external geometry creation independent of the current construction mode - it is always created as reference geometry in such a case. [Pull request #18697](https://github.com/FreeCAD/FreeCAD/pull/18697)
* A preference was added to allow optional grouping of the [Line](/Sketcher_CreateLine "Sketcher CreateLine") and [Polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline") tools. [Pull request #20165](https://github.com/FreeCAD/FreeCAD/pull/20165)

## Spreadsheet Workbench

### Further Spreadsheet improvements

* Default shortcuts for [Bold text](/Spreadsheet_StyleBold "Spreadsheet StyleBold"), [Italic text](/Spreadsheet_StyleItalic "Spreadsheet StyleItalic") and [Underline text](/Spreadsheet_StyleUnderline "Spreadsheet StyleUnderline") have been added. [Pull request #15556](https://github.com/FreeCAD/FreeCAD/pull/15556)
* Double-clicking on the separator in the header now resizes the column to content. [Pull request #16296](https://github.com/FreeCAD/FreeCAD/pull/16296)
* Zoom was added to Spreadsheet. [Pull request #16130](https://github.com/FreeCAD/FreeCAD/pull/16130)

## Surface Workbench

### Further Surface improvements

## TechDraw Workbench

### Further TechDraw improvements

* The [Insert Area Annotation](/TechDraw_AreaDimension "TechDraw AreaDimension") tool now properly accounts for holes in faces. [Pull request #17740](https://github.com/FreeCAD/FreeCAD/pull/17740)
* Shape validation is now available and can be enabled in [Preferences](/TechDraw_Preferences#Advanced "TechDraw Preferences"). [Pull request #18282](https://github.com/FreeCAD/FreeCAD/pull/18282)
* Scaling of SVG symbols has been fixed. [Pull request #18757](https://github.com/FreeCAD/FreeCAD/pull/18757)
* New *r* format specifier was added. It rounds the dimension value to the step specified as decimal before *r*. For example, *%0.5r* (or just *%.5r*) rounds to 0.5. [Pull request #19393](https://github.com/FreeCAD/FreeCAD/pull/19393)

## Import and export

* The alignment of sketches in SVG export and legacy DXF export has been fixed. [Pull request #19765](https://github.com/FreeCAD/FreeCAD/pull/19765)

## Compilation

## Known limitations

## Other resources

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_1.1/ru&oldid=1571045>"