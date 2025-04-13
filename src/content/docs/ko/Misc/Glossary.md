---
title: 용어집
---
이 페이지에는 프리캐드에서 사용하는 기본적인 용어의 설명이 있습니다.

첫 문자 찾기: [0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

## 0-9

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

3D view ([3D 보기](/3D_view/ko "3D view/ko"))
:   3D 보기는 프리캐드 [인터페이스](/Interface/ko "Interface/ko")의 구성요 소입니다. 이것은 모형의 3차원 표현을 보여 줍니다.

## A

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Arc (호)
:   원의 일부분.

App
:   프리캐드 프로그램의 내부 수준 The FreeCAD App layer.

Arch ([건축 작업대(Arch Workbench)](/Arch_Workbench/ko "Arch Workbench/ko"))
:   이전의 건축 작업대(Architectural Workbench) 의 약어입니다. 이 작업대는 [BIM 작업대](/BIM_Workbench/ko "BIM Workbench/ko")([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))로 대체되었습니다.

Assembly([조립품](/Assembly/ko "Assembly/ko"))
:   1.  서로에 대해 정의된 위치가 있는 [부품(Part)](#Part)의 집합입니다.
:   2.  조립품 생성을 용이하게 하는 것을 목표로 하는 [작업대(workbench)](#Workbench)입니다. FreeCAD에는 현재 이러한 작업대가 내장되어 있지 않지만 여러 [외부 조립 작업대](/External_workbenches/ko "External workbenches/ko")가 있습니다.

Axes(축들)
:   [축(Axis)](#Axis)의 복수형

Axis (축)
:   작업 공간의 원점을 통과하는 가상의 선입니다. 3개의 법선축이 있습니다. X, Y, Z라는 고전적인 이름이 있습니다. X는 좌우입니다. Y는 위아래입니다. Z는 페이지/화면 안팎을 나타냅니다.

## B

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Backtrace
:   Output from a debugging program that displays the series of instructions FreeCAD followed before a problem occurred.

[Bezier Curve](http://en.wikipedia.org/wiki/B%C3%A9zier_curve)
:   A type of parametric curve.

[BIM (BIM 작업대)](/BIM_Workbench/ko "BIM Workbench/ko")
:   [Building Information Modelling](https://en.wikipedia.org/wiki/Building_information_modeling)의 약자입니다. [BIM 작업대](/BIM_Workbench/ko "BIM Workbench/ko") 는 프리캐드에서 BIM 작업흐름을 제공합니다.

Blueprint
:   Old term used for [drawing](#Drawing), and coined for its original [reproduction process](http://en.wikipedia.org/wiki/Blueprint).

Body ([몸통](/Body/ko "Body/ko"))
:   일련의 작업([스케치(sketches)](#Sketch), 구성 기하요소 및 [도형특징(features)](#Feature))을 그룹화하여 하나의 연속된 고체를 생성하는 [부품설계(PartDesing)](/PartDesign_Workbench/ko "PartDesign Workbench/ko") [작업대(workbench)](#Workbench)에서 사용되는 컨테이너 유형입니다. (FreeCAD V0.17에 도입되었습니다.)

Boolean Logic (부울 논리)
:   A method of data manipulation by using of the operands: And, Or, Not.

Boolean Operation (부울 연산)
:   A method of manipulating objects by using Boolean Logic. In FreeCAD, the Boolean Operations are: Union ([Fuse](#Fuse)), Difference ([Cut](#Cut)), Intersection, and Section.

Boolean OPerations check
:   See [BOPcheck](#BOPcheck).

BOPcheck
:   A setting that allows the Check Geometry tools in the Part WB and OpenSCAD WB to also check geometry made from [Boolean logic](#Boolean_Logic). The default Check Geometry setting for BOPcheck is "false" (or off). The user can enable BOPcheck to provide more accuracy when running the Check Geometry tool but this comes at the expense of longer Check Geometry processing times. Beginning with FreeCAD 0.19, the BOPcheck setting is most easily enabled from the Settings portion of the Check Geometry widget.

brep
:   Native file format for [Open CASCADE](#Open_CASCADE) and shared by a few applications. FreeCAD can save in \*.brep format.

B-rep (경계 표현)
:   경계 표현(B-rep)은 [boundary representation](http://en.wikipedia.org/wiki/B-rep)을 나타냅니다. 이는 FreeCAD가 지원하는 두 가지 유형의 3D 모델 중 하나입니다(다른 하나는 [메시(mesh)](#Mesh)입니다).

B-spline (B-조절곡선)
:   A type of parametric curve. See [B-spline](http://en.wikipedia.org/wiki/B-spline)

## C

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Callout
:   String of text connected to a line pointing to an object in a [drawing](#Drawing).

Chamfer (모따기)
:   날카로움을 없애기 위해 모서리를 비스듬히 잘라내는 것. 경사진 가장자리.

Clipping Plane (절단 평면)
:   절단 평면은 3D 보기에서 모형을 잘라내는 데 사용됩니다. 이는 시각적 보조 도구일 뿐 실제로 모형을 자르지는 않습니다.

Clone (복제본)
:   원본의 매개변수 제어 가능 상태가 유지되는 복사본입니다. 원본 개체가 변경되면 복제본도 변경되어 원본 개체에 대한 수정 사항을 똑같이 표시합니다.

Coin
:   Also called [Coin3D](https://www.coin3d.org). Third-party software library used for 3D representation by FreeCAD.

COLLADA
:   An interchange file format for [mesh](#Mesh) models. File extension is \*.dae.

[Command (명령)](/index.php?title=Command/ko&action=edit&redlink=1 "Command/ko (page does not exist)")
:   도구 모음 버튼을 누르거나 키보드 단축키를 입력하거나 Python 콘솔에 입력할 때 [GUI](#GUI)에서 호출되는 작업입니다.

Compound (복합)
:   Groups objects together without fusing them like a [boolean union](#Boolean_Operation) would.

CompSolid (복합체)
:   Set of [solids](#Solid) connected by their [faces](#Face). CompSolids are needed in [FEM](#FEM), where more than one material is used in one FEM-mesh.

Constraint (구속)
:   [스케치 (Sketch)](#Sketch)에서 기본 요소 간의 기하학적 관계에 대한 제약 조건입니다. 구속에 숫자 값이 있는 경우 치수 구속이라고 합니다(예: 거리 구속에는 두 점을 연결하는 가상의 선의 길이라는 숫자 값이 있습니다). 숫자 값이 없는 구속 조건(예: 수평 구속)은 기하학적 구속이라고도 합니다.

[Constructive Solid Geometry](http://en.wikipedia.org/wiki/Constructive_solid_geometry)
:   A solid modeling method for creating shapes by using [boolean operations](#Boolean_Operation) on [primitives](#Primitive).

Coordinate (좌표)
:   A number which defines the position of an object in space in reference to a [coordinate system](http://en.wikipedia.org/wiki/Cartesian_coordinate_system).

Coplanar (동일 평면)
:   Existing on the same plane.

CSG
:   Short for [Constructive Solid Geometry](#Constructive_Solid_Geometry).

Cut (자르기)
:   형상 간에  [부울 차이 (boolean difference)](#Boolean_Operation)를 적용합니다.

## D

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

DAG
:   See [Directed Acyclic Graph.](#Directed_Acyclic_Graph)

Degrees Of Freedom (자유도)
:   The number of ways geometry in a [Sketch](#Sketch) may vary. 예를 들어 하나의 점으로만 구성된 스케치가 있고 이 점에 [구속 (Constraint)](#Constraint)이 적용되지 않은 경우, 이 점은 수직과 수평 모두 자유롭게 움직일 수 있으므로 두 개의 [자유도(DOF)](#DOF)를 가집니다.
    마찬가지로 구속이 없는 단일 원으로만 구성된 스케치는 원이 수직 및 수평으로 움직일 수 있고 반경이 정의되지 않았기 때문에 [자유도](#DOF)가 3입니다. [자유도](#DOF)가 더 이상 남아 있지 않을 때까지 스케치를 제한하는 것이 좋습니다. 이 경우 [(완전히 구속Fully Constrained)](#Fully_Constrained)되었다고 합니다.

Dependency Graph
:   A third-party graphing tool used to show how objects in a FreeCAD model use or are related to one another. For more information, refer to the [Dependency Graph](/Std_DependencyGraph "Std DependencyGraph") Wiki page.

Difference
:   1.  The result of, or remainder of, a subtraction.
:   2.  A [Boolean Operation](#Boolean_operation) in the [Part](/Part_Workbench "Part Workbench") [workbench](#Workbench) which is used to subtract one geometry from another; it results in a [Cut](#Cut).

Directed Acyclic Graph (abbreviated as "DAG")
:   A type of [Dependency Graph](#Dependency_Graph) where the relationship of objects flows in a generally linear direction from start to end with no circular dependencies. When following a DAG there is no flow from one object A to any other objects and then back to that same object A again. In FreeCAD, a graph of the model must always be a DAG.

DOF (자유도)
:   [자유도(Degrees Of Freedom)의 약어](#Degrees_Of_Freedom)

[Draft](/Draft_Workbench "Draft Workbench")
:   1.  A FreeCAD [workbench](#Workbench) used primarily for 2 dimensional work.
:   2.  A relief angle on a mold to allow removal of the finished product. See [PartDesign Draft](/PartDesign_Draft "PartDesign Draft").

Drawing
:   Describes a representation of geometry through the use of two-dimensional views. Also called plan or [blueprint](#Blueprint).

## E

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Edge (모서리)
:   1.  A segment joining two [vertices](#Vertices). This segment can be a straight line or a curve. The CAD kernel defines it as: One-dimensional shape corresponding to a curve and bounded by a vertex at each extremity. A closed circle has therefore only one vertex, where it starts and ends. See ["Open CASCADE Technology, Profile: Defining the Topology"](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3).
:   2.  The joining line between two faces. It can be curved or straight.

Element (요소)
:   An item of Sketcher geometry such as a point, a line segment, an arc, a circle, etc.

Expression (표현식)
:   1.  A general term used in mathematics and programming.
:   2.  In FreeCAD [expressions](/Expressions "Expressions") are used to compute values. They can reference and drive object properties. They are used in [spreadsheets](/Spreadsheet_Workbench "Spreadsheet Workbench") and to control parametric models.

Extrude (돌출)
:   A general term for extending a 2D object into 3D along 1 direction. See also [Pad](#Pad).

## F

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Face (면)
:   2차원 위상 구조입니다. 예를 들어, 직육면체에는 6개의 면이 있습니다. 면은 FreeCAD에서 면이 하나인 구의 경우처럼 곡면이 될 수 있습니다. CAD 커널은 이를 다음과 같이 정의합니다: 닫힌 [철사(wire)](#Wire)로 둘러싸인 표면의 일부. [Profile: Defining the Topology](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3)을 참조.

Facet (면)
:   Often used to describe planar faces on a [mesh](#Mesh).

FC
:   Short for FreeCAD.

FCStd
:   FreeCAD native file format. File extension \*.fcstd, \*.FCStd

Feature ([도형특징](/PartDesign_Feature/ko "PartDesign Feature/ko"))
:   [부품설계(Part Design)](/PartDesign_Workbench/ko "PartDesign Workbench/ko") [작업대(workbench)](#Workbench) 작업흐름에서 3D 부품의 기하학적 특징이 만들어지는 각 단계입니다. 예를 들면 [깔판(Pad)](#Pad), [오목 파기(Pocket)](#Pocket), [회전 홈파기(Groove)](#Groove), [모깎기(Fillet)](#Fillet), 등이 있습니다. [부품설계](/PartDesign_Workbench/ko "PartDesign Workbench/ko") [작업대(workbench)](#Workbench)에서 모델을 생성할 때 각 도형특징은 마지막 도형특징의 형상을 취하고 무언가를 추가하거나 제거합니다. 따라서 "오목 파기(Pocket)" 도형특징은 오목하게 판 구멍 자체뿐 아니라 그것을 포함하는 전체 부품을 의미합니다.

[FEM (유한요소법)](/FEM_Workbench/ko "FEM Workbench/ko")
:   [Finite Element Method](https://en.wikipedia.org/wiki/Finite_element_method), a [workbench](#Workbench) used to solve engineering and mathematical physics problems associated with parts, assemblies and structures.

Fillet (모깎기)
:   A rounded relief or cut at an edge added for a finished appearance and to break sharp edges. See [Part Fillet](/Part_Fillet "Part Fillet") and [PartDesign Fillet](/PartDesign_Fillet "PartDesign Fillet").

Fork
:   See [Forked Model](#Forked_Model).

Forked Model
:   A modeling method, usually accidental and incorrect in FreeCAD, that creates two or more versions of a model from a previous item. (Not to be confused with intentional operations like Array, Clone, Polar Pattern, etc.)

Frenet
:   When Sweeping a profile along a 3D path, the Frenet parameter controls the orientation of the profile as it travels along the path. If Frenet is true, the profiles are oriented using the Frenet Frame (tangent, binormal, normal) of the path. If Frenet is false the profile's rotation is not restricted. [Frenet frame](https://en.wikipedia.org/wiki/Differentiable_curve#Frenet_frame)

[FreeType](http://www.freetype.org)
:   A freely available software library used to extract information from font definition files.

[Frustum](http://en.wikipedia.org/wiki/Frustum) (각뿔대)
:   절단하는 두 개의 평행한 평면 사이에 있는 고체 부분입니다. 컴퓨터 그래픽에서 화면에 표시되는 3차원 영역인 ["viewing frustum"](http://en.wikipedia.org/wiki/Viewing_frustum)을 설명하는 데 사용됩니다.

Fully Constrained (완전 구속)
:   [스케치 작업대](#Sketcher)에서 스케치에 [자유도](#Degrees_Of_Freedom)가 없으면 스케치는 적용된 구속조건에 의해 "완전히 [구속](#Constraint)"되었다고 합니다.

Fuse (융합)
:   FreeCAD에서 형상의 [부울 결합(boolean union)](#Boolean_Operation)을 나타내기 위해 일반적으로 사용되는 용어입니다.

## G

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

GDB or gdb
:   [**G**NU Project **D**e**B**ugger](https://www.gnu.org/software/gdb/), a debugging program used on Unix and other 'nix operating systems in order to get a [backtrace](#Backtrace). "gdb" (without the quotation marks) is also the first part of the command used to start the GDB program itself. An example of how to use GDB with FreeCAD is in [this forum post](http://forum.freecadweb.org/viewtopic.php?t=7052#p56918)

Geometric modeling kernel
:   Also called CAD kernel. A set of complex software libraries responsible for the creation of 3D shapes. All operations on objects (extrude, boolean operations, chamfer, fillet) rely on the geometric modeling kernel.

Git
:   [Distributed revision control system](http://en.wikipedia.org/wiki/Distributed_revision_control) used by FreeCAD to host and manage its code base.

[Group (모둠)](/Std_Group/ko "Std Group/ko")
:   [나무 보기](#Tree_view)에서 요소들을 구조화하는 데 사용됩니다..

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

[Intersection](http://en.wikipedia.org/wiki/Intersection) (교차)
:   두 개 이상의 기하학적 개체에서 모두에게 공통되는 부분입니다. 예를 들어 두 선의 교차는 점입니다.

## J

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

JT
:   A proprietary 3D data format developed by Siemens PLM Software. FreeCAD has no support for JT at this time.

## K

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Kernel
:   See [Geometric modeling kernel](#Geometric_modeling_kernel).

KML
:   Keyhole Markup Language - an XML-based geospatial 3D data definition file used by Google Earth. FreeCAD has no support for KML at this time.

## L

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Label (표지)
:   1.  개체의 사용자 정의 속성으로, [나무 보기(Tree view)](#Tree_view)를 사람이 더 쉽게 이해할 수 있도록 하는 데 사용됩니다.
:   2.  A string of descriptive text added to a drawing (see [Draft Label](/Draft_Label "Draft Label")).
:   Contrast with [Name](#Name).

Line (선)
:   대부분 [선분(line segment)](#Line_Segment)의 동의어로 사용됩니다. 스케치 작업대에서는 무한 직선 경로라는 정확한 의미로 사용되기도 합니다.

Line Segment (선분)
:   두 [점(points)](#Point)
    사이의 직선 경로입니다.

Lock (잠금)
:   [잠금 구속](/index.php?title=Sketcher_ConstrainLock/ko&action=edit&redlink=1 "Sketcher ConstrainLock/ko (page does not exist)")

[Loft](http://en.wikipedia.org/wiki/Loft_%283D%29)
:   A topological form created by linking consecutive profiles with a surface. Similar to the process used to make fabric covered aeroplanes or boats. Also the FreeCAD function for creating such a form.

## M

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Macro
:   A saved sequence of FreeCAD instructions, often written by end users.

Manifold (다양체)
:   완벽하게 밀폐되어 부피를 형성하는 [형상](#Shape)을 말합니다. 이를 잘 설명하는 친숙한 동의어는 "수밀"입니다. 고체를 생성하려면, a [shell](#Shell) must be manifold.

Mantis
:   [Bug tracking system](#Tracker) used by the FreeCAD project.

Mesh
:   Type of object that can be imported or created by FreeCAD. See [Polygon mesh](http://en.wikipedia.org/wiki/Polygon_mesh) for more details.

Model (모형)
:   3D 모형 이라고도 합니다. 3차원 [부품(part)](#Part)이나 [조립품(assembly)](#Assembly)을 컴퓨터로 표현한 것입니다.

[MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform")
:   Stands for multiple transformation. A [feature](#Feature) from the [PartDesign](/PartDesign_Workbench "PartDesign Workbench") [workbench](#Workbench) that applies a series of chained transformations (linear and circular pattern, mirrored) to selected features.

## N

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Name (이름)
:   FreeCAD 문서 개체에 대한 고유 식별자입니다. 프로그램에서 한 번 할당된 이름은 쉽게 변경할 수 없습니다. [표지(Label)](#Label)와 대조됩니다.

Non-manifold (비다양체)
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

Origin (원점)
:   좌표계의 중심입니다. 모든 것은 여기서부터 양 또는 음의 방향으로 나갑니다. 지구를 '원점'으로 보는 우리의 우주관도 마찬가지입니다.

Orthographic (평행 투상)
:   See [Orthographic projection](http://en.wikipedia.org/wiki/Orthographic_projection) and [Multiview orthographic projection](http://en.wikipedia.org/wiki/Multiview_orthographic_projection).

## P

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Pad (깔판)
:   [스케치(Sketch)](#Sketch)의 평면에 수직인 방향으로 스케치를 신장시킨 것입니다. [돌출(Extrude)](#Extrude)도 참조하세요.

Part (부품)
:   1.  A FreeCAD [workbench](#Workbench) primarily used for a [Constructive Solid Geometry](http://en.wikipedia.org/wiki/Constructive_solid_geometry) workflow. See [부품 작업대(Part Workbench)](/Part_Workbench/ko "Part Workbench/ko").
:   2.  A FreeCAD Python module, directly interfacing with [OCC](#OCC). See [Part scripting](/Part_scripting "Part scripting").
:   3.  A container which groups any type of FreeCAD object and has a [placement](#Placement). See [Std Part](/Std_Part "Std Part").
:   4.  A unibody solid. The lowest level component in an assembly.

PartDesignNext
:   Nickname used over the forums to distinguish the [PartDesign](/PartDesign_Workbench "PartDesign Workbench") [workbench](#Workbench) in the FreeCAD 0.17 release version from the one in v0.16 and earlier, because of the vast changes introduced.

PD
:   Abbreviation of [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), a FreeCAD [workbench](#Workbench).

PDN
:   Abbreviation of [PartDesignNext](#PartDesignNext).

Perspective (원근법)
:   [Perspective projection](http://en.wikipedia.org/wiki/Graphical_projection#Perspective)

[Pivy](http://pypi.python.org/pypi/Pivy)
:   A software library that allows Python to use Coin.

Placement (배치)
:   공간에서 개체의 좌표와 방향을 정의하는 속성 집합입니다. [배치](/Placement/ko "Placement/ko")를 참고하세요.

Planar (평면적)
:   모든 요소가 같은 평면에 놓여 있는 기하학적 구조를 말합니다.

Plane (평면)
:   1.  무한히 멀리 확장되는 평평한 2차원 표면입니다.
:   2.  [부품(Part)](/Part_Workbench/ko "Part Workbench/ko") [작업대(workbench)](#Workbench)에서 생성된 기초적인 2차원 객체 .

Plot
:   1.  An outdated synonym for a technical drawing made by a pen plotter. See [Plotter](https://en.wikipedia.org/wiki/Plotter)
:   2.  Short for plot plan. See [Site plan](https://en.wikipedia.org/wiki/Site_plan)
:   3.  Graphical representation of data. See [Plot (graphics)](https://en.wikipedia.org/wiki/Plot_(graphics))

Pocket (오목 자리)
:   [스케치](#Sketch)를 기반으로 고체에서 재료를 제거하는 [도형특징(feature)](#Feature)입니다.

Point (점)
:   3D 작업 공간에서 단일 영역을 참조하는 데 사용되는 항목입니다. "점"은 치수가 없습니다.그렇지만 우리가 보는 화면에는 치수가 있으며, 일반적으로 "점"으로만 표시되어 위치를 확인할 수 있습니다. [꼭지점(Vertex)](#Vertex)도 참조하세요.

Polygon mesh
:   See [Polygonal\_mesh](http://en.wikipedia.org/wiki/Polygonal_mesh)

Polyline (꺾은선)
:   여러 가지 길이와 방향을 가진 선분들을 차례로 이은 선입니다.

POV-Ray (POV-광선)
:   [POV-Ray](http://en.wikipedia.org/wiki/POV-Ray)

PPA
:   An acronym that stands for **P**ersonal **P**ackage **A**rchive. It's a type of software repository exclusive to the Ubuntu Linux operating system. The FreeCAD project offers the latest release as well as development versions through two PPA repositories. Updates are managed by the host system's update manager.

Primitive (기본 도형)
:   모형 제작에 사용되는 기본 형상입니다. 일부 2D 기본 요소에는 점, 선, 다각형, 원, 타원, spiral, helix 이 있습니다. 3D 기본 요소에는 상자, 원통, 원뿔, 원환체, 구, 타원체, 각기둥이 있습니다.

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

Raytracing (광선추적)
:   [Ray tracing](http://en.wikipedia.org/wiki/Ray_tracing_%28graphics%29)

Revolve (공전)
:   A tool in the [Part](/Part_Workbench "Part Workbench") [workbench](#Workbench). See [Part Revolve](/Part_Revolve "Part Revolve").

Robot (로봇)
:   [Industrial robot](http://en.wikipedia.org/wiki/Industrial_robot)

Rotate (회전)
:   개체를 축으로 회전시켜 공간에서 방향을 변경하는 동작입니다.

## S

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Section (단면)
:   [Cross section (geometry)](http://en.wikipedia.org/wiki/Cross_section_%28geometry%29)

Self Intersection (자기교차)
:   곡선이 자기 자신을 가로지르는 조건입니다(예: '8','&'). 이는 기하학적 커널 알고리즘을 혼란스럽게 하고 일반적으로 오류 조건을 생성합니다.

Shape (형상)
:   FreeCAD에서 ([meshes](#Mesh)를 제외한) 도형의 대부분의 요소를 설명하기 위해 사용되는 일반적인 용어입니다.

Shell (껍질)
:   두 개 이상의 연속된 [면(face)](#Face)으로 이루어진 형상입니다. [다양체](#Manifold) (enclosed) 껍질은 [고체](#Solid)로 전환될 수 있습니다..

Sketch (스케치)
:   평면 또는 [면(Face)](#Face)에 고정된 개체의 구속된 2D 그림입니다. FreeCAD에서 스케치는 항상 3D 공간의 어딘가에 있는 2차원 개체입니다.

[Sketcher](/Sketcher_Workbench "Sketcher Workbench") (스케치 작업대)
:   A [workbench](#Workbench) used to create 2D geometry by use of [elements](#Element) and [constraints](#Constraint).

Sketcher Solver
:   The internal FreeCAD mechanism that calculates inter-dependencies and effects of adding, deleting, and modifying geometry and associated constraints in each Sketch. Sketcher Solver also calculates the arrangement of all geometry in each Sketch so it can be displayed correctly.

Smooth Line
:   In a Drawing, a line indicating a change between tangent surfaces, as in the transition from a flat surface to a fillet. Also "tangent edge". See [Drawing View](/Drawing_View#Modify_an_existing_view "Drawing View")

Solid (고체)
:   [Shells](#Shell)로 둘러싸인 3D 공간의 일부입니다. 고체에는 질량이 있는 개체와 관련된 부피 및 기타 속성이 있습니다.

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

Sweep (쓸기)
:   하나 이상의 2D 단면을 궤적(경로)을 따라 쓸어서 생성된 3D 형상입니다. 생성된 형상뿐만 아니라 도구를 정의하는 데 일반적으로 사용됩니다. See [Solid modeling](http://en.wikipedia.org/wiki/Solid_modeling#Sweeping)

## T

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Task panel (작업판)
:   A [control panel](https://en.wikipedia.org/wiki/Panel_(computer_software)) in FreeCAD that displays content specific to the task at hand. It can show available tools in the active [workbench](#Workbench) or prompt for values and options while a [command](#Command) is active.

Tasks tab
:   See [Task panel](#Task_panel).

Tessellation (쪽매 붙임)
:   쪽매붙임(tessellation)은 쪽매(tile)이라고 하는 하나 이상의 기하학적 형상을 겹치지 않고 빈틈 없이 표면을 붙이는 것입니다. FreeCAD에서는 3D 보기에 기하학적 형상을 표시하는 데 필요합니다. 기본 설정에서 도형의 치수를 기준으로 쪽매붙임을 설정하면 계산 시간을 절약하면서 둥근 표면을 더 매끄럽게 볼 수 있습니다. [Preferences Editor](/Preferences_Editor "Preferences Editor")를 참고하세요.

Thickness (두께)
:   1.  A measure of how thick a shape is.
:   2.  A [Part](/Part_Workbench "Part Workbench") [workbench](#Workbench) tool to hollow out a solid and leave a defined uniform thickness.

Toggle (전환)
:   True 또는 False, Off와 On 등 두 가지 옵션 간에 변경할 수 있는 설정입니다.

Topological Naming (위상적 이름 짓기)
:   모서리 또는 면이 생성되면 영구적인 이름이 할당되는 체계입니다. 내부적으로 FreeCAD는 고체의 모서리와 면에 번호를 부여하여 식별합니다: 모서리1, 모서리2, 면1, 면2 등입니다. 문제는 이러한 ID가 다소 무작위로 적용되며 모형에 모서리와 면의 양을 변경하는 작업이 수행된 후에 이 이름이 변경된다는 것입니다. 예를 들어, 모형을 수정하면 면2에 연결된 항목이 나중에 다른 면(이름이 바뀌어 새로운 면2가 된)에 잘못 연결되어 사용자가 원하지 않는 결과를 초래할 수 있습니다. FreeCAD 0.20 릴리스에서는 토폴로지 명명 기능이 아직 구현되지 않았으므로 개체를 수정하여 모서리 또는 면의 수가 변경되면 해당 개체의 모서리 또는 면의 이름도 변경될 수 있습니다.

Torus (원환체)
:   기본 입체 도형의 하나

Tracker (추적기)
:   Short for bug tracker, the online software application used to keep track of reported bugs or feature requests. See also [Mantis](#Mantis).

[Tree View (나무 보기)](/Tree_view/ko "Tree view/ko")
:   나무 보기는 FreeCAD [인터페이스](/Interface/ko "Interface/ko")의 구성 요소입니다. 이는 별도의 [GUI](#GUI) 요소로 표시되거나 [Combo View](/Combo_View "Combo View")의 일부로 표시될 수 있습니다. 여기에는 문서 구조의 표현이 포함됩니다.

## U

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Union (결합)
:   A [Part](/Part_Workbench "Part Workbench") [workbench](#Workbench) tool that performs a [Boolean operation](#Boolean_Operation) on selected shapes.

Unstable
:   A nickname for a very recent version of the FreeCAD software. This version will contain many changes recently implemented by the developers. It does not typically fail or produce wrong results, but it has not completed testing.

[Upgrade](/Draft_Upgrade "Draft Upgrade")
:   A [Draft](/Draft_Workbench "Draft Workbench") [workbench](#Workbench) tool.

## V

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Vector (향량)
:   방향이 있는 크기입니다. 종종 2차원 또는 3차원의 화살표로 표현됩니다. For example, "fifty paces north", "9.8 m/s^2 down", and "(3,5,6) units in the x, y, z, direction, respectively" are all vectors. FreeCAD에서는 정렬된 쌍(x, y) 또는 정렬된 삼항(x, y, z)으로 표시되는 경우가 가장 많습니다.

Vertex (꼭지점)
:   공간에 홀로 있는 [점](#Point) 또는 [모서리들](#Edge)이 만나는 [형상](#shape)의 구석 입니다. 개방형 캐스케이드 기술(open Cascade Technology)은 이를 기하학의 한 점에 해당하는 0차원 [형상](#shape)으로 정의합니다. [OCCT 프로필: 토폴로지 정의](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3)를 참조하세요.

Vertices (꼭지점들)
:   [꼭지점(Vertex)](#Vertex)의 복수형

Viewprovider
:   General interface for all visual stuff in FreeCAD. A ViewProvider generates and handles all around visualizing and presenting objects from the FreeCAD [App layer](#App) to the user. This class and its descendents have to be implemented for any object type in order to show them in the [3D view](#3D_view) and [Tree view](#Tree_view).

## W

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

WB
:   [Workbench](#Workbench)의 줄임말.

Wire (철사)
:   1.  [꼭지점들](#Vertex)로 연결된 일련의 [모서리들](#Edge) 입니다. Wire(철사)라는 용어는 주로 [Open Cascade Technology](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3)에서 이러한 의미로 사용되므로 이 OCT를 사용하는FreeCAD 에서도 같은 의미로 사용됩니다.
:   2.  매개변수로 제어 가능한 철사를 만드는 [설계제도(Draft)](/Draft_Workbench/ko "Draft Workbench/ko") [작업대(workbench)](#Workbench)의 명령어 입니다.

Workbench (작업대)
:   모듈이라고도 하는 각 작업대는 특정 작업 전용 도구 세트를 그룹화합니다.

## X

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

X
:   일반적으로 2D 또는 3D X [축(axis)](#Axis)을 나타냅니다.

## Y

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Y
:   일반적으로 2D 또는 3D Y [축(axis)](#Axis)을 나타냅니다.

## Z

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Z
:   일반적으로 3D Z [축(axis)](#Axis)을 나타냅니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=Glossary/ko&oldid=1484018>"