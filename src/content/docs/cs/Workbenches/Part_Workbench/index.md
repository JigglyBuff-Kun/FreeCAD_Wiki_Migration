---
title: Modul Díl
---

![](/images/Workbench_Part.svg)

Part workbench icon

## Introduction

CAD možnosti FreeCADu jsou založeny na jádře [OpenCasCade](http://en.wikipedia.org/wiki/Open_CASCADE). Modul Díl umožňuje FreeCADu přístup a používání objektů a funkcí OpenCasCade. OpenCascade je profesionální CAD jádro, jehož vlastnosti umožňují pokročilou manipulaci s 3D konstrukcemi a objekty. Objekty Díl, narozdíl od objektů [Modulu Síť](/Mesh_Workbench/cs "Mesh Workbench/cs"), jsou mnohem komplexnější a proto umožňují mnohem dokonalejší operace, jako jsou logické boolean operace, modifikace historie a parametrické chování.

The Part Workbench can also create objects that are not solids, such as faces, shells, and objects with only edges or vertices. It also provides a variety of general purpose tools for geometry manipulation, geometry validation, and making copies.

The ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") uses an alternative workflow for creating solids. For a detailed discussion of the Part Workbench versus the Part Design Workbench see [Part and Part Design](/Part_and_PartDesign "Part and PartDesign").

![](/images/Part_Workbench_Example.jpg)

### Nástroje

### Solids toolbar

- ![](/images/Part_Box.svg) [Box](/Part_Box "Part Box"): Creates a box.

- ![](/images/Part_Cylinder.svg) [Cylinder](/Part_Cylinder "Part Cylinder"): Creates a cylinder.

- ![](/images/Part_Sphere.svg) [Sphere](/Part_Sphere "Part Sphere"): Creates a sphere.

- ![](/images/Part_Cone.svg) [Cone](/Part_Cone "Part Cone"): Creates a cone.

- ![](/images/Part_Torus.svg) [Torus](/Part_Torus "Part Torus"): Creates a torus.

- ![](/images/Part_Tube.svg) [Tube](/Part_Tube "Part Tube"): Creates a tube.

- ![](/images/Part_Primitives.svg) [Create primitives...](/Part_Primitives "Part Primitives"): A tool to create one of the following primitives:

- ![](/images/Part_Plane.svg) [Plane](/Part_Plane "Part Plane"): Creates a plane.

- ![](/images/Part_Box.svg) [Box](/Part_Box "Part Box"): Creates a box. This object can also be created with the [Box](/Part_Box "Part Box") tool.

- ![](/images/Part_Cylinder.svg) [Cylinder](/Part_Cylinder "Part Cylinder"): Creates a cylinder. This object can also be created with the [Cylinder](/Part_Cylinder "Part Cylinder") tool.

- ![](/images/Part_Cone.svg) [Cone](/Part_Cone "Part Cone"): Creates a cone. This object can also be created with the [Cone](/Part_Cone "Part Cone") tool.

- ![](/images/Part_Sphere.svg) [Sphere](/Part_Sphere "Part Sphere"): Creates a sphere. This object can also be created with the [Sphere](/Part_Sphere "Part Sphere") tool.

- ![](/images/Part_Ellipsoid.svg) [Ellipsoid](/Part_Ellipsoid "Part Ellipsoid"): Creates a ellipsoid.

- ![](/images/Part_Torus.svg) [Torus](/Part_Torus "Part Torus"): Creates a torus. This object can also be created with the [Torus](/Part_Torus "Part Torus") tool.

- ![](/images/Part_Prism.svg) [Prism](/Part_Prism "Part Prism"): Creates a prism.

- ![](/images/Part_Wedge.svg) [Wedge](/Part_Wedge "Part Wedge"): Creates a wedge.

- ![](/images/Part_Helix.svg) [Helix](/Part_Helix "Part Helix"): Creates a helix.

- ![](/images/Part_Spiral.svg) [Spiral](/Part_Spiral "Part Spiral"): Creates a spiral.

- ![](/images/Part_Circle.svg) [Circle](/Part_Circle "Part Circle"): Creates a circular arc.

- ![](/images/Part_Ellipse.svg) [Ellipse](/Part_Ellipse "Part Ellipse"): Creates an elliptical arc.

- ![](/images/Part_Point.svg) [Point](/Part_Point "Part Point"): Creates a point.

- ![](/images/Part_Line.svg) [Line](/Part_Line "Part Line"): Creates a line.

- ![](/images/Part_RegularPolygon.svg) [Regular polygon](/Part_RegularPolygon "Part RegularPolygon"): Creates a regular polygon.

- ![](/images/Part_Builder.svg) [Shape builder...](/Part_Builder "Part Builder"): Creates shapes from various primitives.

### Part tools toolbar

- ![](/images/Sketcher_NewSketch.svg) [Create sketch](/Sketcher_NewSketch "Sketcher NewSketch"): Creates a new sketch and opens the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog") to edit it.

- ![](/images/Part_Extrude.svg) [Extrude](/Part_Extrude "Part Extrude"): Extrudes planar faces.

- ![](/images/Part_Revolve.svg) [Revolve](/Part_Revolve "Part Revolve"): Creates a solid by revolving an object (not a solid) around an axis.

- ![](/images/Part_Mirror.svg) [Mirror](/Part_Mirror "Part Mirror"): Mirrors the selected object across a mirror plane.

- ![](/images/Part_Scale.svg) [Scale](/Part_Scale "Part Scale"): Scales one or more shapes. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Part_Fillet.svg) [Fillet](/Part_Fillet "Part Fillet"): Fillets (rounds) edges of an object.

- ![](/images/Part_Chamfer.svg) [Chamfer](/Part_Chamfer "Part Chamfer"): Chamfers edges of an object.

- ![](/images/Part_MakeFace.svg) [Make face from wires](/Part_MakeFace "Part MakeFace"): Makes a face from a set of wires (contours).

- ![](/images/Part_RuledSurface.svg) [Ruled Surface](/Part_RuledSurface "Part RuledSurface"): Creates a ruled surface.

- ![](/images/Part_Loft.svg) [Loft](/Part_Loft "Part Loft"): Lofts from one profile to another.

- ![](/images/Part_Sweep.svg) [Sweep](/Part_Sweep "Part Sweep"): Sweeps one or more profiles along a path.

- ![](/images/Part_Section.svg) [Section](/Part_Section "Part Section"): Creates a section by intersecting an object with a section plane.

- ![](/images/Part_CrossSections.svg) [Cross sections...](/Part_CrossSections "Part CrossSections"): Creates one or more cross-sections through an object.

- ![](/images/Part_Offset.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Offset:

- ![](/images/Part_Offset.svg) [3D Offset](/Part_Offset "Part Offset"): Constructs a parallel shape at a certain distance from an original.

- ![](/images/Part_Offset2D.svg) [2D Offset](/Part_Offset2D "Part Offset2D"): Constructs a parallel wire at certain distance from an original, or enlarges/shrinks a planar face.

- ![](/images/Part_Thickness.svg) [Thickness](/Part_Thickness "Part Thickness"): Hollows out a solid.

- ![](/images/Part_ProjectionOnSurface.svg) [Projection on surface](/Part_ProjectionOnSurface "Part ProjectionOnSurface"): Projects a logo, text or any face, wire or edge onto a surface.

- ![](/images/Part_ColorPerFace.svg) [Color per face](/Part_ColorPerFace "Part ColorPerFace"): Assigns colors to individual faces of objects.

### Boolean toolbar

- ![](/images/Part_Compound.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Compound:

- ![](/images/Part_Compound.svg) [Make compound](/Part_Compound "Part Compound"): Creates a compound from the selected objects.

- ![](/images/Part_ExplodeCompound.svg) [Explode compound](/Part_ExplodeCompound "Part ExplodeCompound"): Splits up compounds.

- ![](/images/Part_CompoundFilter.svg) [Compound Filter](/Part_CompoundFilter "Part CompoundFilter"): Extracts the individual pieces from compounds.

- ![](/images/Part_Boolean.svg) [Boolean](/Part_Boolean "Part Boolean"): Performs boolean operations on two objects.

- ![](/images/Part_Cut.svg) [Cut](/Part_Cut "Part Cut"): Cuts one object from another.

- ![](/images/Part_Fuse.svg) [Union](/Part_Fuse "Part Fuse"): Fuses two or more objects.

- ![](/images/Part_Common.svg) [Intersection](/Part_Common "Part Common"): Extracts the common part of two objects.

- ![](/images/Part_JoinConnect.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Join:

- ![](/images/Part_JoinConnect.svg) [Connect objects](/Part_JoinConnect "Part JoinConnect"): Connects interiors of walled objects.

- ![](/images/Part_JoinEmbed.svg) [Embed object](/Part_JoinEmbed "Part JoinEmbed"): Embeds a walled object into another walled object.

- ![](/images/Part_JoinCutout.svg) [Cutout for object](/Part_JoinCutout "Part JoinCutout"): Creates a cutout in a wall of an object for another walled object.

- ![](/images/Part_BooleanFragments.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Split:

- ![](/images/Part_BooleanFragments.svg) [Boolean fragments](/Part_BooleanFragments "Part BooleanFragments"): Creates all pieces obtained from Boolean operations.

- ![](/images/Part_SliceApart.svg) [Slice apart](/Part_SliceApart "Part SliceApart"): Slices and splits an object by intersecting it with other objects.

- ![](/images/Part_Slice.svg) [Slice to compound](/Part_Slice "Part Slice"): Slices an object by intersecting it with other objects.

- ![](/images/Part_XOR.svg) [Boolean XOR](/Part_XOR "Part XOR"): Removes space shared by an even number of objects.

- ![](/images/Part_CheckGeometry.svg) [Check geometry](/Part_CheckGeometry "Part CheckGeometry"): Checks the geometry of selected objects for errors.

- ![](/images/Part_Defeaturing.svg) [Defeaturing](/Part_Defeaturing "Part Defeaturing"): Removes features from an object.

### Other tools

- ![](/images/Part_Import.svg) [Import CAD file...](/Part_Import "Part Import"): Imports from \*.IGES, \*.STEP, or \*.BREP files.

- ![](/images/Part_Export.svg) [Export CAD file...](/Part_Export "Part Export"): Exports to \*.IGES, \*.STEP, or \*.BREP files.

- ![](/images/Part_BoxSelection.svg) [Box selection](/Part_BoxSelection "Part BoxSelection"): Selects faces from a rectangular area.

- ![](/images/Part_ShapeFromMesh.svg) [Create shape from mesh](/Part_ShapeFromMesh "Part ShapeFromMesh"): Creates shapes from mesh objects.

- ![](/images/Part_PointsFromMesh.svg) [Create points object from geometry](/Part_PointsFromMesh "Part PointsFromMesh"): Creates points objects from geometric objects.

- ![](/images/Part_MakeSolid.svg) [Convert to solid](/Part_MakeSolid "Part MakeSolid"): Creates solids from shape objects.

- ![](/images/Part_ReverseShape.svg) [Reverse shapes](/Part_ReverseShape "Part ReverseShape"): Creates parametric copies with reversed face normals from selected objects.

- Create a copy:

- ![](/images/Part_SimpleCopy.svg) [Create simple copy](/Part_SimpleCopy "Part SimpleCopy"): Creates non-parametric copies of objects.

- ![](/images/Part_TransformedCopy.svg) [Create transformed copy](/Part_TransformedCopy "Part TransformedCopy"): Creates non-parametric copies of objects. It is intended for objects nested in containers.

- ![](/images/Part_ElementCopy.svg) [Create shape element copy](/Part_ElementCopy "Part ElementCopy"): Creates non-parametric copies of subelements: vertices, edges and faces.

- ![](/images/Part_RefineShape.svg) [Refine shape](/Part_RefineShape "Part RefineShape"): Creates parametric copies with a refined shape from selected objects. It removes unnecessary edges from planar and cylindrical faces.

- ![](/images/Part_EditAttachment.svg) [Attachment...](/Part_EditAttachment "Part EditAttachment"): Attaches an object to one or more other objects.

## Obsolete tools

### Measure

The ![](/images/Std_Measure.svg) [Std Measure](/Std_Measure "Std Measure") tool replaces the tools listed below. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Part_Measure_Linear.svg) [Measure Linear](/Part_Measure_Linear "Part Measure Linear"): Creates a linear measurement. Not available in 1.0 and above.

- ![](/images/Part_Measure_Angular.svg) [Measure Angular](/Part_Measure_Angular "Part Measure Angular"): Creates an angular measurement. Not available in 1.0 and above.

- ![](/images/Part_Measure_Refresh.svg) [Measure Refresh](/Part_Measure_Refresh "Part Measure Refresh"): Updates all measurements. Not available in 1.0 and above.

- ![](/images/Part_Measure_Clear_All.svg) [Clear All](/Part_Measure_Clear_All "Part Measure Clear All") and [View Measure Clear All](/View_Measure_Clear_All "View Measure Clear All"): Clears all measurements. Not available in 1.0 and above.

- ![](/images/Part_Measure_Toggle_All.svg) [Toggle All](/Part_Measure_Toggle_All "Part Measure Toggle All") and [View Measure Toggle All](/View_Measure_Toggle_All "View Measure Toggle All"): Shows or hides all measurements. Not available in 1.0 and above.

- ![](/images/Part_Measure_Toggle_3D.svg) [Toggle 3D](/Part_Measure_Toggle_3D "Part Measure Toggle 3D"): Shows or hides 3D measurements. Not available in 1.0 and above.

- ![](/images/Part_Measure_Toggle_Delta.svg) [Toggle Delta](/Part_Measure_Toggle_Delta "Part Measure Toggle Delta"): Shows or hides delta measurements. Not available in 1.0 and above.

## Preferences

- ![](/images/Preferences-part_design.svg) [Preferences](/PartDesign_Preferences "PartDesign Preferences"): Preferences for the Part Workbench.
- ![](/images/Preferences-import-export.svg) [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences"): Preferences for importing from and exporting to different file formats.
- [Fine-tuning](/Fine-tuning#Part_Workbench "Fine-tuning"): Some extra parameters to fine-tune Part behavior.

## Skriptování

See [Part scripting](/Part_scripting "Part scripting").

## Tutorials

- [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ"): How to import STL/OBJ files in FreeCAD
- [Export to STL or OBJ](/Export_to_STL_or_OBJ "Export to STL or OBJ"): How to export STL/OBJ files from FreeCAD
- [Whiffle Ball tutorial](/Whiffle_Ball_tutorial "Whiffle Ball tutorial"): How to use the Part Workbench

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Workbench/cs&oldid=1500781>"
