---
title: Sketcher Workbench
---

![](/images/Workbench_Sketcher.svg)

Sketcher workbench icon

## Introducere

Atelierul [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") este utilizat pentru a crea forme geometrice 2D cu intenția de a le utiliza în Atelierul [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench"), [Arch Workbench](/Arch_Workbench "Arch Workbench"), și alte ateliere. În general, o geometrie 2D este considerată punctul de plecare pentru majoritatea modelelor CAD, deoarece o schiță 2D poate fi "extrudată" pentru a crea o formă 3D; mai mult, schițele 2D pot fi folosite pentru a crea alte caracteristici cum ar fi cavități, creste sau extrudări peste formele 3D construite anterior. Împreună cu operațiile booleene pe solide definite în [Part Workbench](/Part_Workbench "Part Workbench"), Sketcher-ul formează nucleul de design generativ al formei solide.

Together with boolean operations defined in the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), the Sketcher Workbench, or "The Sketcher" for short, forms the basis of the [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) method of building solids. Together with ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") operations, it also forms the basis of the [feature editing](/Feature_editing "Feature editing") methodology of creating solids. But many other workbenches use sketches as well.

Atelierul de lucru Sketcher pune pe primul loc ”constrângerile” - permițând definirea formelor 2D după criterii geometrice precise. Un solver matematic de constrângeri calculează nivelul constrângerii și permite explorarea interactivă a gradelor de libertate.

#### La ce nu este bun Sketcher-ul

Instrumentul Sketcher nu este destinat pentru realizarea planurilor 2D. Odată ce schițele sunt folosite pentru a genera o caracteristică solidă, ele sunt ascunse automat. Constrângerile sunt vizibile numai în modul Editare schiță.

![](/images/FC_ConstrainedSketch.png)

A fully constrained sketch

## Constraints

#### Ce sunt constrângerile?

În loc de dimensiuni, constrângerile sunt folosite pentru a limita gradul de libertate al unui obiect. De exemplu, o linie fără constrângeri are 4 [Degrees of Freedom](#Degrees_of_Freedom) (abreviat ca "DOF"): poate fi mișcat orizontal sau vertical, poate fi întinsă și poate fi rotită.

Aplicarea unei constrângeri orizontale sau verticale sau a unei constrângeri de unghi (relativ la o altă linie sau la una dintre axe) va limita capacitatea sa de a se roti, lăsându-l astfel cu 3 grade de libertate. Blocarea unuia dintre punctele sale în raport cu originea va elimina încă 2 grade de libertate. Și aplicarea unei constrângeri de dimensiune va elimina ultimul grad de libertate. Linia este apoi considerată **complet constrânsă** .

Obiectele multiple pot fi constrânse între ele. Două linii pot fi unite prin unul dintre punctele lor cu constrângerea punctului coincident. Un unghi poate fi setat între ele sau poate fi setat perpendicular. O linie poate fi tangentă la un arc sau un cerc și așa mai departe. O schiță complexă, cu obiecte multiple, va avea o serie de soluții diferite, ceea ce înseamnă că "una dintre aceste soluții posibile a fost atinsă pe baza constrângerilor aplicate.

Există două tipuri de constrângeri: geometrice și dimensionale. Acestea sunt detaliate în secțiunea ['Instrumentele'](#_Instrumente) de mai jos.

### Edit constraints

When a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, and if the **Ask for value after creating a dimensional constraint** [preference](/Sketcher_Preferences#Display "Sketcher Preferences") is selected (default), a dialog opens to edit its value.

![Sketcher_Edit_Constraint.png](/images/Sketcher_Edit_Constraint.png)

You can enter a numerical value or an [expression](/Expressions "Expressions"), and it is possible to name the constraint to facilitate its use in other expressions. You can also check the **Reference** checkbox to switch the constrain to [reference mode](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint").

To edit the value of an existing dimensional constraint do one of the following:

- Double-click the constraint value in the [3D view](/3D_view "3D view").
- Double-click the constraint in the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
- Right-click the constraint in the Sketcher Dialog and select the **Change value** option from the context menu.

### Reposition constraints

Dimensional constraints can be repositioned in the 3D view by dragging. Hold down the left mouse button over the constraint value and move the mouse. The symbols of geometric constraints are positioned automatically and cannot be moved.

## Profile sketches

To create a sketch that can be used as a profile for generating solids certain rules must be followed:

- The sketch must contain only closed contours. Gaps between endpoints, however small, are not allowed.
- Contours can be nested, to create voids, but should not self-intersect or intersect other contours.
- Contours cannot share edges with other contours. Duplicate edges must be avoided.
- T-connections, that is more than two edges sharing a common point, or a point touching an edge, are not allowed.

These rules do not apply to construction geometry (default color blue), which is not shown outside edit mode, or if the sketch is used for a different purpose. Depending on the workbench and the tool that will use the profile sketch, additional restrictions may apply.

## Drawing aids

The Sketcher Workbench has several drawing aids and other features that can help when creating geometry and applying constraints.

### Continue modes

There are two continue modes: **Geometry creation "Continue Mode"** and **Constraint creation "Continue Mode"**. If these are checked (default) in the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), related tools will restart after finishing. To exit a continuous tool press Esc or the right mouse button. This must be repeated if a continuous geometry tool has already received input. You can also exit a continuous tool by starting another geometry or constraint creation tool. Note that pressing Esc if no tool is active will exit sketch edit mode. Uncheck the **Esc can leave sketch edit mode** [preference](/Sketcher_Preferences#General "Sketcher Preferences") if you often inadvertently press Esc too many times.

### Auto constraints

In sketches that have **Auto constraints** checked (default) several constraints are applied automatically. The icon of a proposed automatic constraint is shown next to the cursor when it is placed correctly. Left-clicking will then apply that constraint. This is a per-sketch setting that can be changed in the [Sketcher Dialog](/Sketcher_Dialog#Constraints "Sketcher Dialog") or by changing the Vizualizare**Autoconstraints** [property](/Property_editor "Property editor") of the sketch.

The following constraints are applied automatically:

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident")
- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject")
- ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal")
- ![](/images/Sketcher_ConstrainVertical.svg) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical")
- ![](/images/Sketcher_ConstrainTangent.svg) [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent")
- [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): ![](/images/Sketcher_ConstrainSymmetric.svg) [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") (line midpoint)

### Snapping

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

It is possible to [snap](/Sketcher_Snap "Sketcher Snap") to grid lines and grid intersection, to edges of geometry and midpoints of lines and arcs, and to certain angles. Please note that snapping does not produce constraints in and of itself. For example, only if [Auto constraints](#Auto_constraints) is switched on will snapping to an edge produce a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"). But just picking a point on the edge would then have the same result.

### On-View-Parameters

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Depending on the selected option in the [preferences](/Sketcher_Preferences#General "Sketcher Preferences") only the dimensional On-View-Parameters or both the dimensional and the positional On-View-Parameters can be enabled. Positional parameters allow the input of exact coordinates, for example the center of a circle, or the start point of a line. Dimensional parameters allow the input of exact dimensions, for example the radius of a circle, or the length and angle of a line. On-View-Parameters are not available for all tools.

![](/images/Sketcher_On_view_parameters_positional.png)

Determining the center point of a circle with the positional parameters enabled

![](/images/Sketcher_On_view_parameters_dimensional.png)

Determining the radius of a circle with the dimensional parameters enabled

If values are entered and confirmed by pressing Enter or Tab, related constraints are added automatically. If two parameters are displayed at the same time, for example the X and Y coordinate of a point, it is possible to enter one value and pick a point to define the other. Depending on the object additional constraints may be required to fully constrain it. Constraints resulting from On-View-Parameters take precedence over those that may result from [Auto constraints](/Sketcher_Dialog#Constraints "Sketcher Dialog").

![](/images/Sketcher_ArcExample3.png)

Arc created by entering all On-View-Parameters with resulting automatically created constraints

### Coordinate display

If the **Show coordinates beside cursor while editing** [preference](/Sketcher_Preferences#Display "Sketcher Preferences") is checked (default), the parameters of the current geometry tool (coordinates, radius, or length and angle) are displayed next to the cursor. This is deactivated while On-View-Parameters are shown.

## Selection methods

While a sketch is in edit mode the following selection methods can be used:

### 3D view element selection

As elsewhere in FreeCAD, an element can be selected in the [3D view](/3D_view "3D view") with a single left mouse click. But there is no need to hold down the Ctrl key when selecting multiple elements. Holding down that key is possible though and has the advantage that you can miss-click without losing the selection. Edges, points and constraints can be selected in this manner.

### 3D view box selection

Box selection in the 3D view works without using [Std BoxSelection](/Std_BoxSelection "Std BoxSelection") or [Std BoxElementSelection](/Std_BoxElementSelection "Std BoxElementSelection"):

1. Make sure that no tool is active.
2. Do one of the following:
   - Click in an empty area and drag a rectangle from left to right to select elements that lie completely inside the rectangle.
   - Click in an empty area and drag a rectangle from right to left to also select elements that touch or cross the rectangle.

You can box-select edges and points, constraints cannot be box-selected.

### 3D view connected geometry selection

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Double-clicking an edge in the 3D view will select all edges directly and indirectly connected with that edge via endpoints. There is no need for the edges to be connected with [Coincident constraints](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"), endpoints need only have the same coordinates.

### Sketcher Dialog selection

Edges and points can also be selected from the Elements section of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog"), and constraints from the Constraints section of that dialog.

## Copy, cut and paste

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

The standard keyboard shortcuts, Ctrl+C, Ctrl+X and Ctrl+V, can be used to copy, cut and paste selected Sketcher geometry including related constraints. But these tools are also available from the **Sketch → Sketcher tools** menu. They can be used within the same sketch but also between different sketches or separate instances of FreeCAD. Since the data is copied to the clipboard in the form of Python code, it can be used in other ways too (e.g. shared on the forum).

## Tools

## Instrumentele

Instrumentele Sketcher Workbench sunt toate localizate în meniul Sketch care apare atunci când încărcați Sketcher Workbench.

Some tools are also available from the [3D view](/3D_view "3D view") context menu while a sketch is in edit mode, or from the context menus of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): If a sketch is in edit mode the Structure toolbar is hidden as none of its tools can then be used.

### General

#### Sketcher toolbar

- ![](/images/Sketcher_NewSketch.png) [New sketch](/Sketcher_NewSketch "Sketcher NewSketch"):Creează o nouă schiță pe o fațetă sau pe un plan selectat. Dacă nu este selectată nici o fațetă în timp ce acest instrument este executat, utilizatorul este chemat să selecteze un plan dintr-o fereastră pop-up.

- ![](/images/Sketcher_EditSketch.png) [Edit sketch](/Sketcher_EditSketch "Sketcher EditSketch"): Editează schița selectată.

- ![](/images/Sketcher_MapSketch.png) [Map sketch to face](/Sketcher_MapSketch "Sketcher MapSketch"): Aplică o schiță pe o fațetă a unui solid.

- [Reorient sketch](/Sketcher_ReorientSketch/ro "Sketcher ReorientSketch/ro"): Permite schimbarea poziției schiței

- [Validate sketch](/Sketcher_ValidateSketch/ro "Sketcher ValidateSketch/ro"): Verifică toleranța la direferite puncte și le ajustează.

- ![](/images/Sketcher_MergeSketch.png) [Merge sketches](/Sketcher_MergeSketches "Sketcher MergeSketches"): Fuzionează două sau mai multe schițe. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_MirrorSketch.png) [Mirror sketch](/Sketcher_MirrorSketch "Sketcher MirrorSketch"): Crează o schiță simetrică după axa x, y sau față de origine. [introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

#### Sketcher Edit Mode toolbar

- ![](/images/Sketcher_LeaveSketch.png) [Leave sketch](/Sketcher_LeaveSketch "Sketcher LeaveSketch"): Părăsește modul de editare al Sketch.

- ![](/images/Sketcher_ViewSketch.png) [View sketch](/Sketcher_ViewSketch "Sketcher ViewSketch"): Setează modul de vedere perpendicular pe planul schiței.

- ![](/images/Sketcher_ViewSection.png) [View section](/Sketcher_ViewSection "Sketcher ViewSection"): Creează o secțiune plană care ascunde temporar orice lucru în fața planului schiței. [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

#### Sketcher edit tools toolbar

- ![](/images/Sketcher_Grid.svg) [Toggle grid](/Sketcher_Grid "Sketcher Grid"): Toggles the grid in the sketch currently being edited. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_Snap.svg) [Toggle snap](/Sketcher_Snap "Sketcher Snap"): Toggles snapping in all sketches. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_RenderingOrder.svg) [Configure rendering order](/Sketcher_RenderingOrder "Sketcher RenderingOrder"): The rendering order of all sketches can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

#### Other

- ![](/images/Sketcher_StopOperation.svg) [Stop operation](/Sketcher_StopOperation "Sketcher StopOperation"): Stops any currently running geometry or constraint creation tool.

### Sketcher geometries

Aceste unelte se folosesc la crearea obiectelor.

- ![](/images/Sketcher_CreatePoint.png) [Point](/Sketcher_CreatePoint "Sketcher CreatePoint"): Desenează un punct.

- ![](/images/Sketcher_CreatePolyline.png) [Polyline (multiple-point line)](/Sketcher_CreatePolyline "Sketcher CreatePolyline"): Creează o linie formată din mai multe segmente de linie. Apăsând tasta M în timp ce desenați o polilinie comută între diferite moduri de polilinie.

- ![](/images/Sketcher_Line.png) [Line by 2 point](/Sketcher_CreateLine "Sketcher CreateLine"): Desenează un segment de linie definit prin 2 puncte. Liniile sunt infinite în ceea ce privește anumite constrângeri.

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create arc:

- ![](/images/Sketcher_Arc.png) [Arc](/Sketcher_CreateArc "Sketcher CreateArc"): Desenează un segemnt de cerc definit prin centru, radius, unghiul de stat și cel de capăt.

- ![](/images/Sketcher_CreateArc3Point.png) [Arc by 3 Point](/Sketcher_Create3PointArc "Sketcher Create3PointArc"): Desenează un segment de arc de cerc din două puncte de capăt și un alt punct de pe circumferință.

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Arc of ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse"): Creates an arc of ellipse.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Arc of hyperbola](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola"): Creates an arc of hyperbola.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Arc of parabola](/Sketcher_CreateArcOfParabola "Sketcher CreateArcOfParabola"): Creates an arc of parabola.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create circle/ellipse:

- ![](/images/Sketcher_Circle.png) [Circle](/Sketcher_CreateCircle "Sketcher CreateCircle"): Desenează un cerc definit prin centru și rază.

- ![](/images/Sketcher_CreateCircle3Point.png) [Circle by 3 Point](/Sketcher_Create3PointCircle "Sketcher Create3PointCircle"): Desenează un cerc definit prin trei puncte pe circumferință.

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter"): Creates an ellipse by its center, an endpoint of one of its axes, and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by both endpoints of one of its axes and a point along the ellipse.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Ellipse by 3 points](/Sketcher_CreateEllipseBy3Points "Sketcher CreateEllipseBy3Points"): Creates an ellipse by the endpoints of one of its axes and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter") but with a different initial mode.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create rectangle:

- ![](/images/Sketcher_CreateRectangle.png) [Rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle"): Desenează un dreptunghi definit prin 2 puncte diagonal opuse.

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Centered rectangle](/Sketcher_CreateRectangle_Center "Sketcher CreateRectangle Center"): Creates a centered rectangle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle") but with a different initial mode.

- ![](/images/Sketcher_CreateOblong.svg) [Rounded rectangle](/Sketcher_CreateOblong "Sketcher CreateOblong"): Creates a rounded rectangle. Idem.

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create regular polygon:

- ![](/images/Sketcher_CreateTriangle.png) [Triangle](/Sketcher_CreateTriangle "Sketcher CreateTriangle"): Desenează un triunghi echilateral inscris într-un cerc .[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreateSquare.png) [Square](/Sketcher_CreateSquare "Sketcher CreateSquare"): Desenează un pătrat înscris într-un cerc. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreatePentagon.png) [Pentagon](/Sketcher_CreatePentagon "Sketcher CreatePentagon"): Desenează un pentagon regulat înscris într-un cerc. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreateHexagon.png) [Hexagon](/Sketcher_CreateHexagon "Sketcher CreateHexagon"): Desenează un hexagon regulat înscris într-un cerc. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreateHeptagon.png) [Heptagon](/Sketcher_CreateHeptagon "Sketcher CreateHeptagon"): Desenează un heptagon regulat înscris într-un cerc. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreateOctagon.png) [Octagon](/Sketcher_CreateOctagon "Sketcher CreateOctagon"): Desenează un octogon regulat înscris într-un cerc. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreateRegularPolygon.png) [Create Regular Polygon](/Sketcher_CreateRegularPolygon "Sketcher CreateRegularPolygon") : Desenează un poligon regulat prin selectarea numărului de laturi și a două puncte: centrul, respectiv unul dintre unghiuri.

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create slot:

- ![](/images/Sketcher_CreateSlot.png) [Slot](/Sketcher_CreateSlot "Sketcher CreateSlot"): Desenează un oval (locaș de pană) prin selectare centrului unui semicerc, a razei și un punct de capăt al celuilalt semicerc.

- ![](/images/Sketcher_CreateArcSlot.svg) [Arc slot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot"): Creates an arc slot. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create B-spline:

- ![](/images/Sketcher_CreateBSpline.svg) [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline"): Creates a B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by knot points.

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Periodic B-spline by control points](/Sketcher_CreatePeriodicBSpline "Sketcher CreatePeriodicBSpline"): Creates a periodic (closed) B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline") but with a different initial mode.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [B-spline by knots](/Sketcher_CreateBSplineByInterpolation "Sketcher CreateBSplineByInterpolation"): Creates a B-spline curve by knot points. Idem.

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [Periodic B-spline by knots](/Sketcher_CreatePeriodicBSplineByInterpolation "Sketcher CreatePeriodicBSplineByInterpolation"): Creates a periodic (closed) B-spline curve by knot points. Idem.

- ![](/images/Sketcher_ToggleConstruction.png) [Construction Mode](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"): Comută elementele geometrice ale schiței de la / la modul de Construcție. Forma geometrică este afișată în albastru și nu este luată în considerare în afara modului de editare a schiței.

### Constrângeri Sketcher

Constrângerile sunt folosite pentru a defini lungimile, a stabili reguli între elementele de schiță și pentru a bloca schița de-a lungul axelor verticale și orizontale. Unele constrângeri necesită utilizarea [Helper constraints](/Sketcher_helper_constraint "Sketcher helper constraint").

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensional constraints:

- ![](/images/Sketcher_Dimension.svg) [Dimension](/Sketcher_Dimension "Sketcher Dimension"): Is the context-sensitive constraint tool of the Sketcher Workbench. Based on the current selection, it offers appropriate dimensional constraints, but also geometric constraints. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainDistanceX.png) [Horizontal Distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"):

Fixează distanța orizontală dintre două puncte sau puncte finale. Dacă este selectat un singur element, distanța este setată față de origine.

- ![](/images/Sketcher_ConstrainDistanceY.png) [Vertical Distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"):

Fixează distanța verticală între 2 puncte sau puncte de capăt ale liniei. Dacă este selectat un singur element, distanța este setată față de origine.

- ![](/images/Sketcher_ConstrainDistance.png) [Distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance"):

Definește distanța unei linii selectate prin limitarea lungimii acesteia sau definește distanța dintre două puncte prin limitarea distanței dintre ele.

- ![](/images/Sketcher_ConstrainRadiam.svg) [Auto radius/diameter](/Sketcher_ConstrainRadiam "Sketcher ConstrainRadiam"): Fixes the radius of arcs and B-spline weight circles, and the diameter of circles.

- ![](/images/Sketcher_ConstrainRadius.png) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius"):

Definește raza unui arc de cerc sau cerc selectat prin limitarea razei.

- ![](/images/Constraint_InternalAngle.png) [Internal Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"):

Definește unghiul interior dintre două linii selectate.

- ![](/images/Sketcher_ConstrainDiameter.svg) [Diameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter"): Fixes the diameter of circles and arcs.

- ![](/images/Sketcher_ConstrainAngle.svg) [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"): Fixes the angle between two edges, the angle of a line with the horizontal axis of the sketch, or the aperture angle of a circular arc.

- ![](/images/Sketcher_ConstrainLock.png) [Lock](/Sketcher_ConstrainLock "Sketcher ConstrainLock"): Restricționează elementul selectat prin stabilirea distanțelor orizontale și orizontale față de origine, blocând astfel locația acelui element. Aceste distanțe de constrângere pot fi editate mai târziu.

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Coincident (unified)](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified"): Creates a coincident constraint between points, fixes points on edges or axes, or creates a concentric constraint. It combines the [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainCoincident.png) [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"): Creează o constrângere de coincidență cu unul sau mai multe puncte.

- ![](/images/Sketcher_ConstrainPointOnObject.png) [Point On Object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"): Face să coincidă un punct cu altul cu alt obiect ca de ex: linie, arc, sau axă.

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)Horizontal/vertical constraints:

- ![](/images/Sketcher_ConstrainHorVer.svg) [Horizontal/vertical](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer"): Constrains lines or pairs of points to be horizontal or vertical, whichever is closest to the current alignment. It combines the [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Constraint_Horizontal.png) [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal"):

Constrânge liniile selectate sau elementele de polilinie la o orientare orizontală reală. Pot fi selectate mai multe obiecte înainte de aplicarea acestei constrângeri.

- ![](/images/Constraint_Vertical.png) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical"): Constrâne liniile selectate sau elementele poliliniei la o orientare verticală. Se poate aplică la mai mult de un obiect.

- ![](/images/Sketcher_ConstrainParallel.png) [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel"): Constrânge două sau mai multe linii a fi paralele înte ele.

- ![](/images/Sketcher_ConstrainPerpendicular.png) [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular"): Constrânge două linii a fi perpendiculare una pe ceallată, sau consrînge o linie a fi perpendiculară pe un capăt de arc de cerc.

- ![](/images/Constraint_Tangent.png) [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent"): Creează o constrângere de tangență în două entități selectate ates, sau o constrânere de coliniaritaea între două segmente de linie. Un segment de linie nu trebuie să stea direct pe un arc sau un cerc pentru a fi constrâns tangent la acel arc sau cerc.

- ![](/images/Sketcher_ConstrainEqual.png) [Equal Length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual"): Constrânge două entități selectate a fi egale una cu celălaltă. Dacă sunt utilizate pe cercuri sau arce de cerc, raza lor va fi egală.

- ![](/images/Sketcher_ConstrainSymmetric.png) [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric"):Constrânge două puncte a fi simetrice față de o linie sau constrânge primele două puncte selectate a fi simetrice în raport cu un al treilea punct selectat.

- ![](/images/Sketcher_ConstrainBlock.png) [Constrain Block](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock"):

Practic permite blocarea unui element geometric în loc cu o singură constrângere. Ar trebui să fie deosebit de util să lucrați cu acest la curbele B-Splines. A se vedea [Block Constraint forum topic](https://forum.freecadweb.org/viewtopic.php?f=9&t=26572). [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

- ![](/images/Constraint_SnellsLaw.png) [Snell's Law](/Sketcher_ConstrainSnellsLaw "Sketcher ConstrainSnellsLaw"): Constrânge două linii pentru a se supune unei legi de refracție pentru a simula lumina care traversează o interfață. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Toggle constraints:

- ![](/images/Sketcher_ToggleConstraint.png) [Toggle reference/driving constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint"): Comută bara de instrumente sau constrângerile selectate de la/din modul de referință. [introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Activate/deactivate constraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"): Activates or deactivates selected constraints.

### Instrumente Sketcher

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create fillet/chamfer:

- ![](/images/Sketcher_CreateFillet.png) [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet"): Face o racordare între două linii îmbinate într-un punct. Selectați ambele linii sau faceți clic pe punctul de intersecție, apoi activați instrumentul.

- ![](/images/Sketcher_CreateChamfer.svg) [Chamfer](/Sketcher_CreateChamfer "Sketcher CreateChamfer"): creates a chamfer between two non-parallel edges. This is the same tool as [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet") but with a different initial mode. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Edit edge:

- ![](/images/Sketcher_Trimming.png) [Trimming](/Sketcher_Trimming "Sketcher Trimming"): Ajustează o linie, un cerc sau un arc în raport cu amplasarea unui punct dat(poziția mouse-ului).

- ![](/images/Sketcher_Split.svg) [Split](/Sketcher_Split "Sketcher Split"): Splits an edge while transferring most constraints.

- ![](/images/Sketcher_Extend.svg) [Extend](/Sketcher_Extend "Sketcher Extend"): Extinde o linie sau un arc de cerc până la o limită definită printr-un arc de cerc, elipsă, arc de elipsă sau un punct în spațiu. [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

- ![](/images/Sketcher_External.png) [External Geometry](/Sketcher_External "Sketcher External"): Creează o margine legată de geometria exterioară.

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) External geometry:

- ![](/images/Sketcher_Projection.svg) [Create external projection geometry](/Sketcher_Projection "Sketcher Projection"): Creates the projection edges of external geometry. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_Intersection.svg) [Create external intersection geometry](/Sketcher_Intersection "Sketcher Intersection"): Creates the intersection edges of external geometry with the sketch plane. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_CarbonCopy.svg) [CarbonCopy](/Sketcher_CarbonCopy "Sketcher CarbonCopy"): Copiază forma geometrică din altă schiță.[introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

- ![](/images/Sketcher_SelectOrigin.png) [Select Origin](/Sketcher_SelectOrigin "Sketcher SelectOrigin"): Selectează originea unei sketch [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectHorizontalAxis.png) [Select Horizontal Axis](/Sketcher_SelectHorizontalAxis "Sketcher SelectHorizontalAxis"): Selectează axa orizontală a sketch [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectVerticalAxis.png) [Select Vertical Axis](/Sketcher_SelectVerticalAxis "Sketcher SelectVerticalAxis"): Selectează axa verticală a sketch [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_Translate.svg) [Array transform](/Sketcher_Translate "Sketcher Translate"): Moves or optionally creates copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Rotate.svg) [Polar transform](/Sketcher_Rotate "Sketcher Rotate"): Rotates or optionally creates rotated copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Scale.svg) [Scale transform](/Sketcher_Scale "Sketcher Scale"): Scales or optionally creates scaled copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Offset.svg) [Offset geometry](/Sketcher_Offset "Sketcher Offset"): Creates equidistant edges around selected edges. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Symmetry.png) [Symmetry](/Sketcher_Symmetry "Sketcher Symmetry"): Copiază elementul simetric față de o linie selectatăe [introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Remove axes alignment](/Sketcher_RemoveAxesAlignment "Sketcher RemoveAxesAlignment"): Removes the axes alignment of selected edges by replacing [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") constraints with [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel") and [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") constraints.

- ![](/images/Sketcher_Element_SelectionTypeInvalid.svg) [Delete All Geometry](/Sketcher_DeleteAllGeometry "Sketcher DeleteAllGeometry"): Șterger toate elementele geometrice din sketch. [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

- ![](/images/Sketcher_Element_SelectionTypeInvalid.svg) [Delete All Constraints](/Sketcher_DeleteAllConstraints "Sketcher DeleteAllConstraints"): Șterge toate constrângerile din sketch. [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

- ![](/images/Edit-copy.svg) Copy in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-cut.svg) Cut in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-paste.svg) Paste in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

### Instrumentele pentru Sketcher B-spline

- ![](/images/Sketcher_BSplineApproximate.svg) [Convert Geometry to B-spline](/Sketcher_BSplineApproximate "Sketcher BSplineApproximate")

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Increase degree](/Sketcher_BSplineIncreaseDegree "Sketcher BSplineIncreaseDegree")

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Decrease B-spline degree](/Sketcher_BSplineDecreaseDegree "Sketcher BSplineDecreaseDegree"): Decreases the degree (order) of B-splines.

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Increase knot multiplicity](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity")

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Decrease knot multiplicity](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity")

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Insert knot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot"): Inserts a knot into a B-spline or increases the multiplicity of an existing knot.

- ![](/images/Sketcher_JoinCurves.svg) [Join curves](/Sketcher_JoinCurves "Sketcher JoinCurves"): Creates a B-spline by joining two existing B-splines or other edges. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Sketcher visual

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Select solver DOFs](/Sketcher_SelectElementsWithDoFs "Sketcher SelectElementsWithDoFs"): Evidențiază în verde geometria cu grade de libertate (DOF), adică nu este complet constrânsă. [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

- ![](/images/Sketcher_SelectConstraints.png) [Select Constraints](/Sketcher_SelectConstraints "Sketcher SelectConstraints"): Selectează constrângerile elementului Sketcher [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.png) [Select Elements Associated with constraints](/Sketcher_SelectElementsAssociatedWithConstraints "Sketcher SelectElementsAssociatedWithConstraints"): Selectați elementele sketcher asociate cu constrângerile [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectRedundantConstraints.png) [Select Redundant Constraints](/Sketcher_SelectRedundantConstraints "Sketcher SelectRedundantConstraints"): Selectează constrângeri redundante a sketch [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectConflictingConstraints.png) [Select Conflicting Constraints](/Sketcher_SelectConflictingConstraints "Sketcher SelectConflictingConstraints"): Selectează constrângerile conflictuale ale unei sketch [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_ArcOverlay.svg) [Show/hide circular helper for arcs](/Sketcher_ArcOverlay "Sketcher ArcOverlay"): Shows or hides the circular helpers (underlying virtual circles) for arcs in all sketches. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Show/hide B-spline information layer:

- ![](/images/Sketcher_BSplineDegree.svg) [Show/Hide B-spline degree](/Sketcher_BSplineDegree "Sketcher BSplineDegree")

- ![](/images/Sketcher_BSplinePolygon.svg) [Show/Hide B-spline control polygon](/Sketcher_BSplinePolygon "Sketcher BSplinePolygon")

- ![](/images/Sketcher_BSplineComb.svg) [Show/Hide B-spline curvature comb](/Sketcher_BSplineComb "Sketcher BSplineComb")

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Show/Hide B-spline knot multiplicity](/Sketcher_BSplineKnotMultiplicity "Sketcher BSplineKnotMultiplicity")

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Show/hide B-spline control point weight](/Sketcher_BSplinePoleWeight "Sketcher BSplinePoleWeight"): Shows or hides the B-spline control point weight in all sketches.

- ![](/images/Sketcher_Element_Ellipse_All.png) [Show/Hide internal geometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry"): Reface pierderea / ștergerea geometriei interne inutile a unei elipse selectate, arcului de elipsă / hyperbola / parabola sau B-spline.

- ![](/images/Sketcher_SwitchVirtualSpace.png) [Switch Virtual Space](/Sketcher_SwitchVirtualSpace "Sketcher SwitchVirtualSpace"): Vă permite să comutați între a ”ascunde” constrângerile și a le face iarăși vizibile. [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17") See <https://forum.freecadweb.org/viewtopic.php?f=9&t=26614>

### Obsolete tools

- ![](/images/Sketcher_Clone.png) [Clone](/Sketcher_Clone "Sketcher Clone"): Clonează un element sketcher [introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

- ![](/images/Sketcher_CloseShape.png) [Close Shape](/Sketcher_CloseShape "Sketcher CloseShape"): Creează o formă închisă prin aplicarea unor constrângeri de coincidență a punctelor de capăt[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreatePointFillet.svg) [Corner-preserving fillet](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet"): Creates a fillet between two non-parallel lines while preserving their corner point. Not available in 1.0 and above.

- ![](/images/Sketcher_ConnectLines.png) [Connect Edges](/Sketcher_ConnectLines "Sketcher ConnectLines"): Conectați elementele Sketcher aplicând constrângeri de coincidentență la punctele de capăt [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_Copy.png) [Copy](/Sketcher_Copy "Sketcher Copy"): Copiază un element sketcher [introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

- ![](/images/Sketcher_Move.svg) [Move](/Sketcher_Move "Sketcher Move"): Mută elementul geometric ales luând ca referință ultimul punct selectat.[introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

- ![](/images/Sketcher_RectangularArray.png) [Rectangular Array](/Sketcher_RectangularArray "Sketcher RectangularArray"): Creează o matrice de multiplicare a elementelor sketcher selectate [introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

### Preferințe

- ![](/images/Std_DlgParameter.png) [Preferences...](/Sketcher_Preferences "Sketcher Preferences"): Preferințe disponibile în Sketcher Tools.

## Best practices

## Cele mai bune practici

Fiecare utilizator CAD își dezvoltă în timp propriul mod de a lucra, dar există câteva principii generale utile care trebuie urmate.

- O serie de schițe simple sunt mai ușor de gestionat decât una complexă. De exemplu, o primă schiță poate fi creată pentru funcționalitate 3D de bază (fie un pad, fie o rotire), în timp ce a doua poate conține găuri sau decupări (buzunare). Unele detalii pot fi lăsate, pentru a fi realizate ulterior ca elemente 3D. Puteți alege să evitați filamentele din schiță dacă există prea multe și adăugați-le ca o funcționalitate 3D.
- Creați întotdeauna un profil închis, sau schița dvs. nu va produce un solid, ci mai degrabă un set de fețe deschise. Dacă nu doriți ca unele obiecte să fie incluse în creația solidă, transformați-le în elementele de construcție cu instrumentul Mod de construcție.
- Utilizați caracteristica de constrângeri automate pentru a limita numărul de constrângeri pe care trebuie să le adăugați manual.
- Ca regulă generală, aplicați mai întâi constrângeri geometrice, apoi constrângeri dimensionale și blocați ultima schiță. Dar amintiți-vă: regulile sunt făcute pentru a fi încălcate. Dacă întâmpinați dificultăți în manipularea schiței dvs., poate fi util să restrângeți mai întâi câteva obiecte înainte de a vă completa profilul.
- Dacă este posibil, centrați schița la origine (0,0) cu constrângerea de blocare. Dacă schița dvs. nu este simetrică, localizați unul dintre punctele sale la origine sau alegeți numere rotunde frumoase pentru distanțele de blocare. În v0.12, constrângerile externe (constrângerea schiței față de geometria 3D existentă ca marginile sau alte schite) nu sunt implementate. Aceasta înseamnă că pentru a localiza geometria schițelor care urmează în prima schiță, va trebui să setați manual distanțele față de prima schiță. O constrângere de blocare a (25,75) de origine este mai ușor de reținut decât (23,47,73.02).
- Dacă aveți posibilitatea de a alege între constrângerile de lungime și constrângerile orizontale sau verticale, preferați ultima. Constrângerile orizontale și verticale sunt mai puțin costisitoare ca timp computațional.
- În general, cele mai bune constrângeri de utilizat sunt: ​​Constrângerile orizontale și verticale; Restricții de lungime orizontală și verticală; Point-to-Point Tangency. Dacă este posibil, limitați utilizarea acestora: restricția generală a lungimii; Tangența de la muchie la muchie; Fix Point pe o linie Constrângere; Constrângerea simetrice.

## Tutoriale

- [Sketcher Lecture](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) by chrisb. This is a more than 80 page PDF document that serves as a detailed manual for the Sketcher. It explains the basics of Sketcher usage, and goes into a lot of detail about the creation of geometrical shapes, and each of the constraints.
- [Basic Sketcher Tutorial](/Basic_Sketcher_Tutorial "Basic Sketcher Tutorial") for beginners
- [Sketcher Micro Tutorial - Constraint Practices](/Sketcher_Micro_Tutorial_-_Constraint_Practices "Sketcher Micro Tutorial - Constraint Practices")
- [Sketcher requirement for a sketch](/Sketcher_requirement_for_a_sketch "Sketcher requirement for a sketch") Minimum requirement for a sketch and Complete determination of a sketch

## Scripting

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page contains examples on how to create constraints from Python scripts.

## Examples

For some ideas of what can be achieved with Sketcher tools, have a look at: [Sketcher examples](/Sketcher_Examples "Sketcher Examples").

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/ro&oldid=1537989>"
