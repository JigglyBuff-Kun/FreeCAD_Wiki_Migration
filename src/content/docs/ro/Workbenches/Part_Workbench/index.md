---
title: Atelierul Piese
---

![](/images/Workbench_Part.svg)

Part workbench icon

## Introduction

## Introducere

Capacitățile de modelare a solidelor ale FreeCAD se bazează pe kernelul [Open Cascade Technology](http://en.wikipedia.org/wiki/Open_Cascade_Technology) (OCCT), un sistem CAD de calitate profesionistă, care oferă crearea și manipularea geometriei avansate 3D.

The Part Workbench can also create objects that are not solids, such as faces, shells, and objects with only edges or vertices. It also provides a variety of general purpose tools for geometry manipulation, geometry validation, and making copies.

The ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") uses an alternative workflow for creating solids. For a detailed discussion of the Part Workbench versus the Part Design Workbench see [Part and Part Design](/Part_and_PartDesign "Part and PartDesign").

![](/images/Part_Workbench_Example.jpg)

## Instrumente

### Solids toolbar

- ![](/images/Part_Box.svg) [Caseta](/Part_Box/ro "Part Box/ro"): Deseneaza o caseta prin specificarea dimensiunile sale

- ![](/images/Part_Cylinder.svg) [Cilindru](/Part_Cylinder/ro "Part Cylinder/ro"): Deseneaza un cilindru prin specificarea dimensiunile sale

- ![](/images/Part_Sphere.svg) [Sfera](/Part_Sphere/ro "Part Sphere/ro"): Deseneaza o sfera prin specificarea dimensiunile sale

- ![](/images/Part_Cone.svg) [Con](/Part_Cone/ro "Part Cone/ro"): Deseneaza un con prin specificarea dimensiunile sale

- ![](/images/Part_Torus.svg) [Tor](/Part_Torus/ro "Part Torus/ro"): Deseneaza un tor (inel) prin specificarea dimensiunile sale

- ![](/images/Part_Tube.svg) [Tube](/Part_Tube "Part Tube"): Creates a tube.

- ![](/images/Part_Primitives.svg) [Creaza primitive](/Part_CreatePrimitives/ro "Part CreatePrimitives/ro"): Unealta pentru crearea primitivelor geometrice bazate pe parametrii:

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

- ![](/images/Part_Extrude.svg) [Extrudare](/Part_Extrude/ro "Part Extrude/ro"): Extrudeaza fetele plane ale unui obiect

- ![](/images/Part_Revolve.svg) [Rotatie](/Part_Revolve/ro "Part Revolve/ro"): Creaza un obiect prin rotirea altui obiect in jurul unei axe

- ![](/images/Part_Mirror.svg) [Simetrizare](/Part_Mirror/ro "Part Mirror/ro"): Simetrizează obiectul selectat fata de un plan

- ![](/images/Part_Scale.svg) [Scale](/Part_Scale "Part Scale"): Scales one or more shapes. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Part_Fillet.svg) [Panglica](/Part_Fillet/ro "Part Fillet/ro"): Rotunjeste marginile unui obiect

- ![](/images/Part_Chamfer.svg) [Tesire](/Part_Chamfer/ro "Part Chamfer/ro"): Teseste marginile unui obiect

- ![](/images/Part_MakeFace.svg) [Make face from wires](/Part_MakeFace "Part MakeFace"): Makes a face from a set of wires (contours).

- ![](/images/Part_RuledSurface.svg) [Ruled Surface](/Part_RuledSurface/ro "Part RuledSurface/ro"):

- ![](/images/Part_Loft.svg) [Mansardare](/Part_Loft/ro "Part Loft/ro"): Uneste un profil de altul

- ![](/images/Part_Sweep.svg) [Baleiere](/Part_Sweep/ro "Part Sweep/ro"): Baleiază unul sau mai multe profile de-a lungul unei cai

- ![](/images/Part_Section.svg) [Sectiune](/Part_Section/ro "Part Section/ro"): Creaza o sectiune prin intersectarea unui obiect cu planul de sectionare

- ![](/images/Part_CrossSections.svg) [Cross sections...](/Part_SectionCross/ro "Part SectionCross/ro"):

- ![](/images/Part_Offset.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Offset:

- ![](/images/Part_Offset.svg) [3D Offset](/Part_Offset/ro "Part Offset/ro"): Construiește o formă paralelă la o anumită distanță față de original.

- ![](/images/Part_Offset2D.svg) [2D Offset](/Part_Offset2D/ro "Part Offset2D/ro"): Construiește o polilinie paralelă la o anumită distanță față de original, sau enlarges/shrinks o fațetă plană.

- ![](/images/Part_Thickness.svg) [Thickness](/Part_Thickness/ro "Part Thickness/ro"): Golește un solid, lăsând deschideri lângă fațetele selectate.

- ![](/images/Part_ProjectionOnSurface.svg) [Projection on surface](/Part_ProjectionOnSurface "Part ProjectionOnSurface"): Projects a logo, text or any face, wire or edge onto a surface.

- ![](/images/Part_ColorPerFace.svg) [Color per face](/Part_ColorPerFace "Part ColorPerFace"): Assigns colors to individual faces of objects.

### Boolean toolbar

- ![](/images/Part_Compound.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Compound:

- ![](/images/Part_Compound.svg) [Make compound](/Part_Compound/ro "Part Compound/ro"): Creează un compus din obiectele selectate.

- ![](/images/Part_ExplodeCompound.svg) [Explode Compound](/index.php?title=Part_ExplodeCompound/ro&action=edit&redlink=1 "Part ExplodeCompound/ro (page does not exist)"): Instrumente pentru separarea unui compus din forme

- ![](/images/Part_CompoundFilter.svg) [Compound Filter](/Part_CompoundFilter/ro "Part CompoundFilter/ro"): The CompoundFilter poate fi utilizat pentru a extrage piesele individuale.

- ![](/images/Part_Boolean.svg) [Boolean](/Part_Boolean "Part Boolean"): Efectueaza operatii logice asupra obiectelor.

- ![](/images/Part_Cut.svg) [Cut](/Part_Cut "Part Cut"): Cuts one object from another.

- ![](/images/Part_Fuse.svg) [Union](/Part_Fuse "Part Fuse"): Fuses two or more objects.

- ![](/images/Part_Common.svg) [Intersection](/Part_Common "Part Common"): Extracts the common part of two objects.

- ![](/images/Part_JoinConnect.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Join:

- ![](/images/Part_JoinConnect.svg) [Connect](/Part_JoinConnect/ro "Part JoinConnect/ro"): Conectează interiorul obiectelor

- ![](/images/Part_JoinEmbed.svg) [Embed](/Part_JoinEmbed/ro "Part JoinEmbed/ro"): Include un obiect din perete într-un alt obiect din perete

- ![](/images/Part_JoinCutout.svg) [Cutout](/Part_JoinCutout/ro "Part JoinCutout/ro"): Crează o tăietură într-un peretele unui obiect pentru un alt obiect de pus în perete

- ![](/images/Part_BooleanFragments.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Split:

- ![](/images/Part_BooleanFragments.svg) [Boolean fragments](/Part_BooleanFragments/ro "Part BooleanFragments/ro"): face toate piesele care pot fi obținute prin operații booleene între obiecte

- ![](/images/Part_SliceApart.svg) [Slice a part](/index.php?title=Part_SliceApart/ro&action=edit&redlink=1 "Part SliceApart/ro (page does not exist)"): instrument pentru a separa forme prin intersecția cu alte forme

- ![](/images/Part_Slice.svg) [Slice](/Part_Slice/ro "Part Slice/ro"): Separă un obiect în piese prin intersecții cu un alt obiect

- ![](/images/Part_XOR.svg) [XOR](/index.php?title=Part_XOR/ro&action=edit&redlink=1 "Part XOR/ro (page does not exist)"): elimină spațiul partajat de un număr par de obiecte (versiunea simetrică a [Cut](/Part_Cut/ro "Part Cut/ro"))

- ![](/images/Part_CheckGeometry.svg) [Check geometry](/Part_CheckGeometry "Part CheckGeometry"): Checks the geometry of selected objects for errors.

- ![](/images/Part_Defeaturing.svg) [Defeaturing](/index.php?title=Part_Defeaturing/ro&action=edit&redlink=1 "Part Defeaturing/ro (page does not exist)")

### Alte Instrumente

- ![](/images/Part_Import.svg) [Import](/Part_Import "Part Import"): Imports from \*.IGES, \*.STEP, or \*.BREP files.

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

## Preferințe

- ![](/images/Preferences-import-export.svg) [Preference ...](/Import_Export_Preferences/ro "Import Export Preferences/ro") Import Export

## Scripting

See [Part scripting](/Part_scripting "Part scripting").

## Tutorials

- [Import from STL or OBJ](/Import_from_STL_or_OBJ/ro "Import from STL or OBJ/ro") : How to import STL/OBJ files in FreeCAD
- [Export to STL or OBJ](/Export_to_STL_or_OBJ/ro "Export to STL or OBJ/ro") : How to export STL/OBJ files from FreeCAD
- [Whiffle Ball tutorial](/Whiffle_Ball_tutorial/ro "Whiffle Ball tutorial/ro") : How to use the Part Workbench

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Workbench/ro&oldid=1500777>"
