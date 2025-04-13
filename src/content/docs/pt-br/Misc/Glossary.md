---
title: Glossário
---
This page is a glossary of common FreeCAD terms and definitions.

Jump to letter: [0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

## 0-9

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

[3D view](/3D_view "3D view")
:   The 3D view is a component of the FreeCAD [interface](/Interface "Interface"). It shows a 3D representation of the model.

## A

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Arc
:   A portion or segment of a circle.

App
:   The FreeCAD App layer.

[Arch](/Arch_Workbench "Arch Workbench")
:   An abbreviation for the old Architectural [workbench](#Workbench). This workbench has been superseded by the [BIM Workbench](/BIM_Workbench "BIM Workbench") ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")).

[Assembly](/Assembly "Assembly")
:   1.  A set of [parts](#Part) that have defined positions in relation to each other.
:   2.  A [workbench](#Workbench) which aims to facilitate the creation of assemblies. FreeCAD currently does not have such a workbench built-in, but there are several [external assembly workbenches](/External_workbenches "External workbenches").

Axes
:   Plural of [Axis](#Axis)

Axis
:   An imaginary line through the origin of the workspace. There are 3 normal axes. They have the classic names of X, Y and Z. X is side to side. Y is up and down. Z is in and out of the page/screen.

## B

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Backtrace
:   Output from a debugging program that displays the series of instructions FreeCAD followed before a problem occurred.

[Bezier Curve](http://en.wikipedia.org/wiki/B%C3%A9zier_curve)
:   A type of parametric curve.

[BIM](/BIM_Workbench "BIM Workbench")
:   An abbreviation for [Building Information Modelling](https://en.wikipedia.org/wiki/Building_information_modeling). The [BIM Workbench](/BIM_Workbench "BIM Workbench") provides a BIM workflow in FreeCAD.

Blueprint
:   Old term used for [drawing](#Drawing), and coined for its original [reproduction process](http://en.wikipedia.org/wiki/Blueprint).

Body
:   A type of container used in the [PartDesign](/PartDesign_Workbench "PartDesign Workbench") [workbench](#Workbench) that groups a sequence of operations ([sketches](#Sketch), construction geometry and [features](#Feature)) to create a single contiguous solid. (Introduced in FreeCAD V0.17.)

Boolean Logic
:   A method of data manipulation by using of the operands: And, Or, Not.

Boolean Operation
:   A method of manipulating objects by using Boolean Logic. In FreeCAD, the Boolean Operations are: Union ([Fuse](#Fuse)), Difference ([Cut](#Cut)), Intersection, and Section.

Boolean OPerations check
:   See [BOPcheck](#BOPcheck).

BOPcheck
:   A setting that allows the Check Geometry tools in the Part WB and OpenSCAD WB to also check geometry made from [Boolean logic](#Boolean_Logic). The default Check Geometry setting for BOPcheck is "false" (or off). The user can enable BOPcheck to provide more accuracy when running the Check Geometry tool but this comes at the expense of longer Check Geometry processing times. Beginning with FreeCAD 0.19, the BOPcheck setting is most easily enabled from the Settings portion of the Check Geometry widget.

brep
:   Native file format for [Open CASCADE](#Open_CASCADE) and shared by a few applications. FreeCAD can save in \*.brep format.

B-rep
:   Stands for [boundary representation](http://en.wikipedia.org/wiki/B-rep), which is one of two types of 3D models that FreeCAD supports (the other being [mesh](#Mesh)).

B-spline
:   A type of parametric curve. See [B-spline](http://en.wikipedia.org/wiki/B-spline)

## C

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Callout
:   String of text connected to a line pointing to an object in a [drawing](#Drawing).

Chamfer
:   The cutting off of an edge, at an angle, to get rid of its sharpness; a beveled edge.

Clipping Plane
:   The clipping plane is used to cut away at the model in the 3D view. It is just a visual aid and does not actually cut the model.

Clone
:   A copy of an object whereby the copy remains parametric. When the original object is changed the Clone(s) also change to show modifications made to the original object.

Coin
:   Also called [Coin3D](https://www.coin3d.org). Third-party software library used for 3D representation by FreeCAD.

COLLADA
:   An interchange file format for [mesh](#Mesh) models. File extension is \*.dae.

[Command](/Command "Command")
:   An action invoked from the [GUI](#GUI) when you press a toolbar button or type a keyboard shortcut or type into the Python console.

Compound
:   Groups objects together without fusing them like a [boolean union](#Boolean_Operation) would.

CompSolid
:   Set of [solids](#Solid) connected by their [faces](#Face). CompSolids are needed in [FEM](#FEM), where more than one material is used in one FEM-mesh.

Constraint
:   A restriction on the geometric relationship between primitives in a [Sketch](#Sketch). If a constraint has a numerical value, it is referred to as Datum (e.g., a distance constraint has a numerical value - the length of an imaginary line connecting the two points). A constraint that has no numerical value (e.g., a Horizontal constraint) is sometimes referred to as Geometric Constraint.

[Constructive Solid Geometry](http://en.wikipedia.org/wiki/Constructive_solid_geometry)
:   A solid modeling method for creating shapes by using [boolean operations](#Boolean_Operation) on [primitives](#Primitive).

Coordinate
:   A number which defines the position of an object in space in reference to a [coordinate system](http://en.wikipedia.org/wiki/Cartesian_coordinate_system).

Coplanar
:   Existing on the same plane.

CSG
:   Short for [Constructive Solid Geometry](#Constructive_Solid_Geometry).

Cut
:   Applying a [boolean difference](#Boolean_Operation) between shapes.

## D

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

DAG
:   See [Directed Acyclic Graph.](#Directed_Acyclic_Graph)

Degrees Of Freedom
:   The number of ways geometry in a [Sketch](#Sketch) may vary. For example, if we have a Sketch consisting of only one point, and the point has no [Constraints](#Constraint) applied to it, the point has two [DOF](#DOF) because it is free to move both vertically and horizontally. Similarly, a Sketch consisting of only a single unconstrained circle has three [DOF](#DOF) because the circle can move vertically and horizontally and, additionally, the radius is not defined. It is good practice to constrain a Sketch until it has no [DOF](#DOF) remaining, in which case it is said to be [Fully Constrained](#Fully_Constrained).

Dependency Graph
:   A third-party graphing tool used to show how objects in a FreeCAD model use or are related to one another. For more information, refer to the [Dependency Graph](/Std_DependencyGraph "Std DependencyGraph") Wiki page.

Difference
:   1.  The result of, or remainder of, a subtraction.
:   2.  A [Boolean Operation](#Boolean_operation) in the [Part](/Part_Workbench "Part Workbench") [workbench](#Workbench) which is used to subtract one geometry from another; it results in a [Cut](#Cut).

Directed Acyclic Graph (abbreviated as "DAG")
:   A type of [Dependency Graph](#Dependency_Graph) where the relationship of objects flows in a generally linear direction from start to end with no circular dependencies. When following a DAG there is no flow from one object A to any other objects and then back to that same object A again. In FreeCAD, a graph of the model must always be a DAG.

DOF
:   [Degrees Of Freedom](#Degrees_Of_Freedom)

[Draft](/Draft_Workbench "Draft Workbench")
:   1.  A FreeCAD [workbench](#Workbench) used primarily for 2 dimensional work.
:   2.  A relief angle on a mold to allow removal of the finished product. See [PartDesign Draft](/PartDesign_Draft "PartDesign Draft").

Drawing
:   Describes a representation of geometry through the use of two-dimensional views. Also called plan or [blueprint](#Blueprint).

## E

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Edge
:   1.  A segment joining two [vertices](#Vertices). This segment can be a straight line or a curve. The CAD kernel defines it as: One-dimensional shape corresponding to a curve and bounded by a vertex at each extremity. A closed circle has therefore only one vertex, where it starts and ends. See ["Open CASCADE Technology, Profile: Defining the Topology"](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3).
:   2.  The joining line between two faces. It can be curved or straight.

Element
:   An item of Sketcher geometry such as a point, a line segment, an arc, a circle, etc.

Expression
:   1.  A general term used in mathematics and programming.
:   2.  In FreeCAD [expressions](/Expressions "Expressions") are used to compute values. They can reference and drive object properties. They are used in [spreadsheets](/Spreadsheet_Workbench "Spreadsheet Workbench") and to control parametric models.

Extrude
:   A general term for extending a 2D object into 3D along 1 direction. See also [Pad](#Pad).

## F

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Face
:   A 2 dimensional topological construct. For example, a cube has 6 Faces. A face can be curved, like in case of a sphere, which has one face in FreeCAD. The CAD kernel defines it as: Part of a surface bounded by a closed [wire(s)](#Wire). See [Profile: Defining the Topology](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3).

Facet
:   Often used to describe planar faces on a [mesh](#Mesh).

FC
:   Short for FreeCAD.

FCStd
:   FreeCAD native file format. File extension \*.fcstd, \*.FCStd

Feature
:   A step in a 3d part's evolution in the [Part Design](/PartDesign_Workbench "PartDesign Workbench") [workbench](#Workbench) workflow. Examples are [Pad](#Pad), [Pocket](#Pocket), [Groove](#Groove), [Fillet](#Fillet), etc. As we create a model in the [Part Design](/PartDesign_Workbench "PartDesign Workbench") [workbench](#Workbench), each feature takes the shape of the last one and adds or removes something. Hence a "Pocket" feature is not only the pocketed hole itself, but the whole part with the pocket feature.

[FEM](/FEM_Workbench "FEM Workbench")
:   [Finite Element Method](https://en.wikipedia.org/wiki/Finite_element_method), a [workbench](#Workbench) used to solve engineering and mathematical physics problems associated with parts, assemblies and structures.

Fillet
:   A rounded relief or cut at an edge added for a finished appearance and to break sharp edges. See [Part Fillet](/Part_Fillet "Part Fillet") and [PartDesign Fillet](/PartDesign_Fillet "PartDesign Fillet").

Fork
:   See [Forked Model](#Forked_Model).

Forked Model
:   A modeling method, usually accidental and incorrect in FreeCAD, that creates two or more versions of a model from a previous item. (Not to be confused with intentional operations like Array, Clone, Polar Pattern, etc.)

Frenet
:   When Sweeping a profile along a 3D path, the Frenet parameter controls the orientation of the profile as it travels along the path. If Frenet is true, the profiles are oriented using the Frenet Frame (tangent, binormal, normal) of the path. If Frenet is false the profile's rotation is not restricted. [Frenet frame](https://en.wikipedia.org/wiki/Differentiable_curve#Frenet_frame)

[FreeType](http://www.freetype.org)
:   A freely available software library used to extract information from font definition files.

[Frustum](http://en.wikipedia.org/wiki/Frustum)
:   The portion of a solid that lies between two parallel planes cutting it. Used in computer graphics to describe the three-dimensional region which is visible on the screen, the ["viewing frustum"](http://en.wikipedia.org/wiki/Viewing_frustum)

Fully Constrained
:   In [Sketcher](#Sketcher), when a [Sketch](#Sketch) has no [Degrees Of Freedom](#Degrees_Of_Freedom), the Sketch is said to be "fully constrained" by the applied [Constraints](#Constraint).

Fuse
:   Term commonly used in FreeCAD to refer to a [boolean union](#Boolean_Operation) of shapes.

## G

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

GDB or gdb
:   [**G**NU Project **D**e**B**ugger](https://www.gnu.org/software/gdb/), a debugging program used on Unix and other 'nix operating systems in order to get a [backtrace](#Backtrace). "gdb" (without the quotation marks) is also the first part of the command used to start the GDB program itself. An example of how to use GDB with FreeCAD is in [this forum post](http://forum.freecadweb.org/viewtopic.php?t=7052#p56918)

Geometric modeling kernel
:   Also called CAD kernel. A set of complex software libraries responsible for the creation of 3D shapes. All operations on objects (extrude, boolean operations, chamfer, fillet) rely on the geometric modeling kernel.

Git
:   [Distributed revision control system](http://en.wikipedia.org/wiki/Distributed_revision_control) used by FreeCAD to host and manage its code base.

[Group](/Std_Group "Std Group")
:   Used to organize elements in the [Tree view](#Tree_view).

GUI
:   **G**raphical **U**ser **I**nterface. Allows users to interact with FreeCAD through graphical icons and the mouse pointer.

## H

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

[Half Space](http://en.wikipedia.org/wiki/Half-space_%28geometry%29)
:   When a plane completely divides a 3D Euclidian space, the plane forms two half spaces.

## I

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

IGES
:   A file format for the exchange of product data models. Files extensions are \*.iges, \*.igs. See also [STEP](#STEP).

[Intersection](http://en.wikipedia.org/wiki/Intersection)
:   That portion of two or more geometric entities that is common to all. For example, the intersection of two lines is a point.

## J

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

JT
:   A proprietary 3D data format developed by Siemens PLM Software. FreeCAD has no support for JT at this time.

## K

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Kernel
:   Consulte [Núcleo de modelagem geométrica](#Geometric_modeling_kernel).

KML
:   Keyhole Markup Language - um arquivo de definição de dados geoespaciais 3D baseado em XML usado pelo Google Earth. O FreeCAD não tem suporte para KML no momento.

## L

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Label
:   1.  A user defined property of an object; used to make the [Tree view](#Tree_view) easier to understand by humans.
:   2.  A string of descriptive text added to a drawing (see [Draft Label](/Draft_Label "Draft Label")).
:   Contrast with [Name](#Name).

Line
:   Most often this is used as a synonym for a [line segment](#Line_Segment). In Sketcher, it is used sometimes with its exact meaning of an infinite straight path.

Line Segment
:   A straight path between two [points](#Point).

Lock
:   [Constraint Lock](/Sketcher_ConstrainLock "Sketcher ConstrainLock")

[Loft](http://en.wikipedia.org/wiki/Loft_%283D%29)
:   A topological form created by linking consecutive profiles with a surface. Similar to the process used to make fabric covered aeroplanes or boats. Also the FreeCAD function for creating such a form.

## M

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Macro
:   A saved sequence of FreeCAD instructions, often written by end users.

Manifold
:   Said of a [shape](#Shape) that forms a perfectly enclosed volume. A familiar synonym that gives a good description is "watertight". To generate a solid, a [shell](#Shell) must be manifold.

Mantis
:   [Bug tracking system](#Tracker) used by the FreeCAD project.

Mesh
:   Type of object that can be imported or created by FreeCAD. See [Polygon mesh](http://en.wikipedia.org/wiki/Polygon_mesh) for more details.

Model
:   Also called 3D model. Computer representation of a three-dimensional [part](#Part) or [assembly](#Assembly).

[MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform")
:   Stands for multiple transformation. A [feature](#Feature) from the [PartDesign](/PartDesign_Workbench "PartDesign Workbench") [workbench](#Workbench) that applies a series of chained transformations (linear and circular pattern, mirrored) to selected features.

## N

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Name
:   An unique identifier for a FreeCAD document object. Once assigned by the program, the Name can not be easily changed. Contrast with [Label](#Label).

Non-manifold
:   Non-manifold topology, also called zero-thickness, is two distinct solid bodies connected at a theoretical vertex or edge. It is an unsupported type of shape (not always detected by FreeCAD) that should be avoided, as it can cause trouble with further steps and export.

Null Shape
:   A [Shape](#Shape) property that has not been initialized by a program/macro. Usually an error condition.

## O

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

OCC
:   Acronym for [Open CASCADE](#Open_CASCADE). Prior to being open sourced, it used to be named CAS.CADE (abbreviated from Computer Aided Software for Computer Aided Design and Engineering).

OCE
:   **O**pen CASCADE **C**ommunity **E**dition. It provides patches, improvements and experiments contributed by users over the official [Open CASCADE](#Open_CASCADE) library. FreeCAD is known to work on either OCC or OCE.

OCCT
:   Open CASCADE Technology. See [OCC](#OCC).

[Open CASCADE](http://www.opencascade.org)
:   The [geometric modeling kernel](#Geometric_modeling_kernel) (software library) underlying FreeCAD. Also called [OCC](#OCC) or [OCCT](#OCCT) (for Open CASCADE Technology). See also [OCE](#OCE).

[OpenSCAD](http://www.openscad.org/)
:   1.  Name of a script-only based CAD program.
:   2.  A [workbench](#Workbench) in FreeCAD. The [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench") [workbench](#Workbench) provides an interface for import/export of \*.scad and \*.csg models, as well as a some utility tools.

Origin
:   The center of the coordinate system. Everything goes out from here in either the positive or negative directions. As is our view of the universe with Earth being the “origin”.

Orthographic
:   See [Orthographic projection](http://en.wikipedia.org/wiki/Orthographic_projection) and [Multiview orthographic projection](http://en.wikipedia.org/wiki/Multiview_orthographic_projection).

## P

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Pad
:   An extension of a [Sketch](#Sketch) in a direction perpendicular to the plane of the Sketch. See also [Extrude](#Extrude).

Part
:   1.  A FreeCAD [workbench](#Workbench) primarily used for a [Constructive Solid Geometry](http://en.wikipedia.org/wiki/Constructive_solid_geometry) workflow. See [Part Workbench](/Part_Workbench "Part Workbench").
:   2.  A FreeCAD Python module, directly interfacing with [OCC](#OCC). See [Part scripting](/Part_scripting "Part scripting").
:   3.  A container which groups any type of FreeCAD object and has a [placement](#Placement). See [Std Part](/Std_Part "Std Part").
:   4.  A unibody solid. The lowest level component in an assembly.

PartDesignNext
:   Nickname used over the forums to distinguish the [PartDesign](/PartDesign_Workbench "PartDesign Workbench") [workbench](#Workbench) in the FreeCAD 0.17 release version from the one in v0.16 and earlier, because of the vast changes introduced.

PD
:   Abbreviation of [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), a FreeCAD [workbench](#Workbench).

PDN
:   Abbreviation of [PartDesignNext](#PartDesignNext).

Perspective
:   [Perspective projection](http://en.wikipedia.org/wiki/Graphical_projection#Perspective)

[Pivy](http://pypi.python.org/pypi/Pivy)
:   A software library that allows Python to use Coin.

Placement
:   Set of properties of an object that defines its coordinates and orientation in space. See [Placement](/Placement "Placement").

Planar
:   Said of geometry of which elements all lie on a same plane.

Plane
:   1.  A flat, two-dimensional surface that extends infinitely far.
:   2.  A primitive two-dimensional object created in the [Part](/Part_Workbench "Part Workbench") [workbench](#Workbench).

Plot
:   1.  An outdated synonym for a technical drawing made by a pen plotter. See [Plotter](https://en.wikipedia.org/wiki/Plotter)
:   2.  Short for plot plan. See [Site plan](https://en.wikipedia.org/wiki/Site_plan)
:   3.  Graphical representation of data. See [Plot (graphics)](https://en.wikipedia.org/wiki/Plot_(graphics))

Pocket
:   A [feature](#Feature) that removes material from a solid based on a [Sketch](#Sketch).

Point
:   An item used to reference a single area in the 3D workspace. A “point” is dimensionless. It has a dimension on the screen, usually represented by a “dot” only so we can see where it is. See also [Vertex](#Vertex).

Polygon mesh
:   See [Polygonal\_mesh](http://en.wikipedia.org/wiki/Polygonal_mesh)

Polyline
:   A series of connected line or arc segments.

POV-Ray
:   [POV-Ray](http://en.wikipedia.org/wiki/POV-Ray)

PPA
:   An acronym that stands for **P**ersonal **P**ackage **A**rchive. It's a type of software repository exclusive to the Ubuntu Linux operating system. The FreeCAD project offers the latest release as well as development versions through two PPA repositories. Updates are managed by the host system's update manager.

Primitive
:   A basic shape used in the construction of models. Some 2D primitives are: point, line, polygon, circle, ellipse, spiral, helix. 3D primitives are: box, cylinder, cone, torus, sphere, ellipsoid, prism.

[PySide](https://wiki.qt.io/PySide)
:   A freely available software library that allows Python to use QT.

[Python](http://www.python.org)
:   A programming language used in the development of FreeCAD as well as in user-written [macros](#Macro) or scripts.

## Q

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

[Qt](https://www.qt.io/developers/)
:   A cross-platform application and user interface framework.

## R

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Raytracing
:   [Ray tracing](http://en.wikipedia.org/wiki/Ray_tracing_%28graphics%29)

Revolve
:   A tool in the [Part](/Part_Workbench "Part Workbench") [workbench](#Workbench). See [Part Revolve](/Part_Revolve "Part Revolve").

Robot
:   [Industrial robot](http://en.wikipedia.org/wiki/Industrial_robot)

Rotate
:   Action to spin an object unto an axis to change its orientation in space.

## S

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Section
:   [Cross section (geometry)](http://en.wikipedia.org/wiki/Cross_section_%28geometry%29)

Self Intersection
:   A condition where a curve crosses over itself (ex.'8','&'). This confuses geometric kernel algorithms and generally produces an error condition.

Shape
:   Generic term used in FreeCAD to describe most elements (except for [meshes](#Mesh)).

Shell
:   Shape made of two or more contiguous [faces](#Face). A [manifold](#Manifold) (enclosed) shell can be converted into a [solid](#Solid).

Sketch
:   A constrained 2D depiction of an object fixed to a plane or a [Face](#Face). In FreeCAD a Sketch is always a 2-dimensional object somewhere in the 3D space.

[Sketcher](/Sketcher_Workbench "Sketcher Workbench")
:   A [workbench](#Workbench) used to create 2D geometry by use of [elements](#Element) and [constraints](#Constraint).

Sketcher Solver
:   The internal FreeCAD mechanism that calculates inter-dependencies and effects of adding, deleting, and modifying geometry and associated constraints in each Sketch. Sketcher Solver also calculates the arrangement of all geometry in each Sketch so it can be displayed correctly.

Smooth Line
:   In a Drawing, a line indicating a change between tangent surfaces, as in the transition from a flat surface to a fillet. Also "tangent edge". See [Drawing View](/Drawing_View#Modify_an_existing_view "Drawing View")

Solid
:   Part of 3D space bounded by [Shells](#Shell). A solid has a volume and other properties related to objects with a mass.

Solver
:   See [Sketcher Solver](#Sketcher_Solver).

Stable
:   A nickname for the last general release version of the FreeCAD software. This is typically the version available from sources other than the FreeCAD project. Compare with [Unstable](#Unstable).

STL
:   *STereoLithography*, also known as *Standard Tessellation Language.* A [mesh](#Mesh) file format defining only the surface of a 3D object. File extensions is \*.stl

STEP
:   An ISO standard (ISO 10303) for the exchange of 3D data and product manufacturing information. It replaces [IGES](#IGES). File extensions are \*.step, \*.stp.

SVG
:   [Scalable Vector Graphics](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). A vector graphics file format.

Sweep
:   A 3D shape generated from at least one 2D cross-section that traces along a trajectory (path). Commonly used to define the tool as well as the created shape. See [Solid modeling](http://en.wikipedia.org/wiki/Solid_modeling#Sweeping)

## T

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Task panel
:   A [control panel](https://en.wikipedia.org/wiki/Panel_(computer_software)) in FreeCAD that displays content specific to the task at hand. It can show available tools in the active [workbench](#Workbench) or prompt for values and options while a [command](#Command) is active.

Tasks tab
:   See [Task panel](#Task_panel).

Tessellation
:   A tessellation of a surface is the tiling of the surface using one or more geometric shapes, called tiles, with no overlaps and no gaps. In FreeCAD it is needed to display the geometric shapes in the 3D-view. The tessellation relative to the dimensions of a shape can be set in the preferences to get a smoother view of round surfaces at the cost of computation time. See [Preferences Editor](/Preferences_Editor "Preferences Editor").

Thickness
:   1.  A measure of how thick a shape is.
:   2.  A [Part](/Part_Workbench "Part Workbench") [workbench](#Workbench) tool to hollow out a solid and leave a defined uniform thickness.

Toggle
:   A setting that can be changed between two options, for example between True or False or between Off and On.

Topological Naming
:   A scheme whereby an edge or face, once created, is assigned a permanent name. Internally, FreeCAD identifies edges and faces on a solid by numbering them such as: Edge1, Edge2, Face1, Face2, etc. The problem is that these IDs are somewhat randomly applied, and they will change after something is done to the model that changes the amount of edges and faces. For example, if the model is revised an item linked to a Face2 could later erroneously become linked to a different face (which was renamed to become the new Face2), causing the user unwanted results. As of the FreeCAD 0.20 release Topological Naming has not yet been implemented, and so if an object is modified such that the number of edges or faces changes, the names of the edges or faces of that object might change too.

Torus
:   A primitive shape.

Tracker
:   Short for bug tracker, the online software application used to keep track of reported bugs or feature requests. See also [Mantis](#Mantis).

[Tree view](/Tree_view "Tree view")
:   The Tree view is a component of the FreeCAD [interface](/Interface "Interface"). It can be shown as a separate [GUI](#GUI) element or as part of the [Combo View](/Combo_View "Combo View"). It contains a representation of the document's structure.

## U

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Union
:   A [Part](/Part_Workbench "Part Workbench") [workbench](#Workbench) tool that performs a [Boolean operation](#Boolean_Operation) on selected shapes.

Unstable
:   A nickname for a very recent version of the FreeCAD software. This version will contain many changes recently implemented by the developers. It does not typically fail or produce wrong results, but it has not completed testing.

[Upgrade](/Draft_Upgrade "Draft Upgrade")
:   A [Draft](/Draft_Workbench "Draft Workbench") [workbench](#Workbench) tool.

## V

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Vector
:   A magnitude with a direction. Often represented graphically as an arrow in 2 or 3 dimensions. For example, "fifty paces north", "9.8 m/s^2 down", and "(3,5,6) units in the x, y, z, direction, respectively" are all vectors. In FreeCAD, they are most often denoted as ordered pairs (x, y) or ordered triples (x, y, z).

Vertex
:   A lone [point](#Point) in space, or the corner of a [shape](#shape) where [edges](#Edge) meet. The open Cascade Technology defines it, as a zero dimensional [shape](#shape) corresponding to a point in geometry. See [OCCT Profile: Defining the topology](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3)

Vertices
:   Plural of [Vertex](#Vertex)

Viewprovider
:   General interface for all visual stuff in FreeCAD. A ViewProvider generates and handles all around visualizing and presenting objects from the FreeCAD [App layer](#App) to the user. This class and its descendents have to be implemented for any object type in order to show them in the [3D view](#3D_view) and [Tree view](#Tree_view).

## W

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

WB
:   Short for [workbench](#Workbench).

Wire
:   1.  A sequence of connected [edges](#Edge) by [vertices](#Vertex). The term wire is used in this sense mainly by [Open Cascade Technology](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3) and therefore also inside of FreeCAD.
:   2.  A [Draft](/Draft_Workbench "Draft Workbench") [workbench](#Workbench) command that creates a parametric wire.

Workbench
:   Also called a module, each [workbench](/Workbenches "Workbenches") groups a set of tools dedicated to a specific task.

## X

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

X
:   Commonly refers to the 2D or 3D X [axis](#Axis).

## Y

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Y
:   Commonly refers to the 2D or 3D Y [axis](#Axis).

## Z

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Z
:   Commonly refers to the 3D Z [axis](#Axis).

Retrieved from "<http://wiki.freecad.org/index.php?title=Glossary/pt-br&oldid=1484019>"