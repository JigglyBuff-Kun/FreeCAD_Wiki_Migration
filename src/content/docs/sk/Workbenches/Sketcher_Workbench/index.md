---
title: Pracovný stôl Náčrtník
---

![](/images/Workbench_Sketcher.svg)

ikona pracovného stola Náčrtník

## Úvod

![](/images/Workbench_Sketcher.svg) [Pracovný stôl Náčrtník](/Sketcher_Workbench "Sketcher Workbench") sa vo FreeCADe používa na tvorbu 2D geometrie, ktorú následne využijete v ![](/images/Workbench_PartDesign.svg) [na pracovnom stole Dizajn dielca](/PartDesign_Workbench "PartDesign Workbench"), ![](/images/Workbench_Arch.svg) [pracovnom stole Arch](/Arch_Workbench "Arch Workbench") a iných pracovných stoloch. Vo všeobecnosti sa za východiskový bod pre väčšinu CAD modelov považuje 2D náčrt, pretože ten dokážeme „vytiahnuť“ a vytvoriť tak 3D tvar; navyše je možné 2D náčrty okrem predtým vytvorených 3D tvarov použiť aj na vytvorenie ďalších prvkov, ako sú kapsy, ryhy alebo výlisky. Spolu s booleanovskými operáciami definovanými na ![](/images/Workbench_Part.svg) [pracovnom stole Diel](/Part_Workbench "Part Workbench") tvorí Náčrtník základ [konštruktívnej geometrie telies](/Constructive_solid_geometry "Constructive solid geometry") (CSG) - spôsobu tvorby telies. Okrem toho s operáciami ![](/images/Workbench_PartDesign.svg) [pracovného stola Dizajn dielu](/PartDesign_Workbench "PartDesign Workbench") tvorí Náčrtník tiež základ metodológie [úpravy prvkov](/Feature_editing "Feature editing") pri tvorbe telies.

Together with boolean operations defined in the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), the Sketcher Workbench, or "The Sketcher" for short, forms the basis of the [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) method of building solids. Together with ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") operations, it also forms the basis of the [feature editing](/Feature_editing "Feature editing") methodology of creating solids. But many other workbenches use sketches as well.

Pracovný stôl Náčrtník obsahuje "väzby", vďaka ktorým dokážete pomocou presných geometrických definícií ako dĺžky, uhla a vzťahov (vodorovnosť, zvislosť, kolmosť atď.) určiť umiestnenie 2d tvarov. Riešiteľ väzieb vypočíta rozsah väzieb 2D geometrie a poskytuje interaktívne prehliadanie stupňov voľnosti náčrtu.

Náčrtník neslúži na tvorbu 2D výkresov. Akonáhle boli náčrty použité na vytvorenie prvku telesa, sú automaticky skryté. Väzby sú viditeľné iba v upravovacom režime náčrtu.

![](/images/FC_ConstrainedSketch.png)

Plne zaväzbený náčrt

## Constraints

Namiesto rozmerov sú väzby používané na obmedzenie stupňov voľnosti objektu. Napríklad čiara bez väzieb má 4 stupne voľnosti (skrátene SV, angl. DOF): môže byť posúvaná vodorovne alebo zvislo, môže byť natiahnutá a môže byť otočená.

Použitie vodorovnej alebo zvislej väzby alebo väzby uhla čiary (vzhľadom na inú čiaru alebo jednu z osí) obmedzí jej schopnosť otáčania, takže jej zostanú 3 stupne voľnosti. Zamknutie jedného z jej dvoch bodov vzhľadom na začiatok súradníc odstráni ďalšie 2 stupne voľnosti. A nakoniec použitie väzby rozmeru odstráni posledný stupeň voľnosti. Po týchto úkonoch je čiara považovaná za "plne zaväzbenú".

Objekty môžu byť takisto zaväzbené medzi sebou. Dve čiary môžete spojiť pomocou jedného z ich bodov vďaka väzbe splynutia bodov. Môže takisto medzi nimi byť nastavený úhol, alebo môžu nastavené ako kolmé. Čiara môže byť dotyčnicou oblúka alebo kruhu apod. Komplexný náčrt s viacerými objektami bude mať viac možných riešení a jeho "plné zaväzbenie" znamená, že bolo dosiahnuté práve jedno z týchto možných riešení v závislosti od použitých väzieb.

Existujú dva typy väzieb: geometrické a rozmerové. Sú opísané nižšie v časti ['Nástroje'](#Nástroje).

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

In sketches that have **Auto constraints** checked (default) several constraints are applied automatically. The icon of a proposed automatic constraint is shown next to the cursor when it is placed correctly. Left-clicking will then apply that constraint. This is a per-sketch setting that can be changed in the [Sketcher Dialog](/Sketcher_Dialog#Constraints "Sketcher Dialog") or by changing the View**Autoconstraints** [property](/Property_editor "Property editor") of the sketch.

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

## Nástroje

Nástroje pracovného stola Náčrtník sa nachádzajú v menu Náčrt, ktoré sa objaví po nahraní pracovného sola Náčrtník.

Some tools are also available from the [3D view](/3D_view "3D view") context menu while a sketch is in edit mode, or from the context menus of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): If a sketch is in edit mode the Structure toolbar is hidden as none of its tools can then be used.

### Všeobecné

#### Sketcher toolbar

- ![](/images/Sketcher_NewSketch.svg) [Nový náčrt](/Sketcher_NewSketch "Sketcher NewSketch"): Vytvorí nový náčrt na vybranej ploche alebo rovine. Ak nie je pri spustení tohto nástroja vybraná žiadna plocha, užívateľ je vyzvaný zvoliť si z vyskakovacieho okna želanú rovinu.

- ![](/images/Sketcher_EditSketch.svg) [Upraviť náčrt](/Sketcher_EditSketch "Sketcher EditSketch"): Úprava zvoleného náčrtu. Otvorí sa [dialógové okno Náčrtníka](/Sketcher_Dialog "Sketcher Dialog").

- ![](/images/Sketcher_MapSketch.svg) [Namapovať náčrt na plochu](/Sketcher_MapSketch "Sketcher MapSketch"): Namapuje náčrt na predtým vybranú plochu alebo teleso.

- ![](/images/Sketcher_ReorientSketch.svg) [Preorientovať náčrt](/Sketcher_ReorientSketch "Sketcher ReorientSketch"): Umožní vám naviazať náčrt na jednu z hlavných rovín.

- ![](/images/Sketcher_ValidateSketch.svg) [Skontrolovať náčrt](/Sketcher_ValidateSketch "Sketcher ValidateSketch"): Skontroluje toleranciu jednotlivých bodov a upraví ich.

- ![](/images/Sketcher_MergeSketches.svg) [Zlúčiť náčrty](/Sketcher_MergeSketches "Sketcher MergeSketches"): Zlúči dva alebo viac náčrtov.

- ![](/images/Sketcher_MirrorSketch.svg) [Zrkadliť náčrt](/Sketcher_MirrorSketch "Sketcher MirrorSketch"): Zrkadlí náčrt podľa osy x, y alebo podľa začiatku súradníc.

#### Sketcher Edit Mode toolbar

- ![](/images/Sketcher_LeaveSketch.svg) [Opustiť náčrt](/Sketcher_LeaveSketch "Sketcher LeaveSketch"): Ukončí režim úprav náčrtu.

- ![](/images/Sketcher_ViewSketch.svg) [Zobraziť náčrt](/Sketcher_ViewSketch "Sketcher ViewSketch"): Nastaví zobrazenie modelu kolmo na rovinu náčrtu.

- ![](/images/Sketcher_ViewSection.svg) [Zobraziť rez](/Sketcher_ViewSection "Sketcher ViewSection"): Vytvorí reznú rovinu a dočasne skryje akýkoľvek materiál nachádzajúci sa pred reznou rovinou.

#### Sketcher edit tools toolbar

- ![](/images/Sketcher_Grid.svg) [Toggle grid](/Sketcher_Grid "Sketcher Grid"): Toggles the grid in the sketch currently being edited. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_Snap.svg) [Toggle snap](/Sketcher_Snap "Sketcher Snap"): Toggles snapping in all sketches. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_RenderingOrder.svg) [Configure rendering order](/Sketcher_RenderingOrder "Sketcher RenderingOrder"): The rendering order of all sketches can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

#### Other

- ![](/images/Sketcher_StopOperation.svg) [Zastaviť operáciu](/Sketcher_StopOperation "Sketcher StopOperation"): V režime úprav zastaví aktuálnu operáciu, napr. kreslenie, nastavovanie väzieb apod.

### Geometria v Náčrtníku

Tu sú uvedené nástroje pre tvorbu objektov.

- ![](/images/Sketcher_CreatePoint.svg) [Bod](/Sketcher_CreatePoint "Sketcher CreatePoint"): Nakreslí bod.

- ![](/images/Sketcher_CreatePolyline.svg) [Lomená čiara (čiara s viacerými bodmi)](/Sketcher_CreatePolyline "Sketcher CreatePolyline"): Nakreslí čiaru zloženú z viacerých segmentov. Pri kreslení lomenej čiary a stláčaní klávesy M preskakujete medzi jednotlivými štýlmi lomených čiar.

- ![](/images/Sketcher_CreateLine.svg) [Čiara](/Sketcher_CreateLine "Sketcher CreateLine"): Nakreslí čiarový segment medzi 2 bodmi. Pre potreby niektorých väzieb sa čiary považujú za nekonečne dlhé.

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create arc:

- ![](/images/Sketcher_CreateArc.svg) [Oblúk](/Sketcher_CreateArc "Sketcher CreateArc"): Nakreslí segment oblúka pomocou stredového bodu, polomeru a začiatočného a koncového uhla.

- ![](/images/Sketcher_Create3PointArc.svg) [Oblúk podľa 3 bodov](/Sketcher_Create3PointArc "Sketcher Create3PointArc"): Nakreslí segment oblúka pomocou dvoch koncových bodov a ďalšieho bodu na obvode.

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Arc of ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse"): Creates an arc of ellipse.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Arc of hyperbola](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola"): Creates an arc of hyperbola.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Arc of parabola](/Sketcher_CreateArcOfParabola "Sketcher CreateArcOfParabola"): Creates an arc of parabola.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create circle/ellipse:

- ![](/images/Sketcher_CreateCircle.svg) [Kruh](/Sketcher_CreateCircle "Sketcher CreateCircle"): Nakreslí kruh pomocou stredového bodu a polomeru.

- ![](/images/Sketcher_Create3PointCircle.svg) [Kruh podľa 3 bodov](/Sketcher_Create3PointCircle "Sketcher Create3PointCircle"): Nakreslí kruh pomocou troch bodov na jeho obvode.

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter"): Creates an ellipse by its center, an endpoint of one of its axes, and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by both endpoints of one of its axes and a point along the ellipse.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Ellipse by 3 points](/Sketcher_CreateEllipseBy3Points "Sketcher CreateEllipseBy3Points"): Creates an ellipse by the endpoints of one of its axes and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter") but with a different initial mode.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create rectangle:

- ![](/images/Sketcher_CreateRectangle.svg) [Obdĺžnik](/Sketcher_CreateRectangle "Sketcher CreateRectangle"): Nakreslí obdĺžnik pomocou 2 protiľahlých bodov.

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Vycentrovaný obdĺžnik](/Sketcher_CreateRectangle_Center "Sketcher CreateRectangle Center"): Nakreslí obĺdžnik pomocou stredového bodu a rohového bodu. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Sketcher_CreateOblong.svg) [Zaoblený obĺdžnik](/Sketcher_CreateOblong "Sketcher CreateOblong"): Nakreslí zaoblený obĺdžnik z dvoch protiľahlých bodov. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create regular polygon:

- ![](/images/Sketcher_CreateTriangle.svg) [Trojuholník](/Sketcher_CreateTriangle "Sketcher CreateTriangle"): Nakreslí pravidelný trojuholník vpísaný do kružnice v konštrukčnej geometrii.

- ![](/images/Sketcher_CreateSquare.svg) [Štvorec](/Sketcher_CreateSquare "Sketcher CreateSquare"): Nakreslí pravidelný štvorec vpísaný do kružnice v konštrukčnej geometrii.

- ![](/images/Sketcher_CreatePentagon.svg) [Päťuholník](/Sketcher_CreatePentagon "Sketcher CreatePentagon"): Nakreslí pravidelný päťuholník vpísaný do kružnice v konštrukčnej geometrii.

- ![](/images/Sketcher_CreateHexagon.svg) [Šesťuholník](/Sketcher_CreateHexagon "Sketcher CreateHexagon"): Nakreslí pravidelný šesťuholník vpísaný do kružnice v konštrukčnej geometrii.

- ![](/images/Sketcher_CreateHeptagon.svg) [Sedemuholník](/Sketcher_CreateHeptagon "Sketcher CreateHeptagon"): Nakreslí pravidelný sedemuholník vpísaný do kružnice v konštrukčnej geometrii.

- ![](/images/Sketcher_CreateOctagon.svg) [Osemuholník](/Sketcher_CreateOctagon "Sketcher CreateOctagon"): Nakreslí pravidelný osemuholník vpísaný do kružnice v konštrukčnej geometrii.

- ![](/images/Sketcher_CreateRegularPolygon.svg) [Vytvoriť pravidelný mnohouholník](/Sketcher_CreateRegularPolygon "Sketcher CreateRegularPolygon"): Nakreslí pravidelný mnohouholník pomocou voľby počtu strán a výberom dvoch bodov: stredu a jedného rohu.

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create slot:

- ![](/images/Sketcher_CreateSlot.svg) [Drážka](/Sketcher_CreateSlot "Sketcher CreateSlot"): Nakreslí ovál pomocou stredu jedného polkruhu a koncového bodu druhého polkruhu.

- ![](/images/Sketcher_CreateArcSlot.svg) [Arc slot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot"): Creates an arc slot. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create B-spline:

- ![](/images/Sketcher_CreateBSpline.svg) [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline"): Creates a B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by knot points.

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Periodic B-spline by control points](/Sketcher_CreatePeriodicBSpline "Sketcher CreatePeriodicBSpline"): Creates a periodic (closed) B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline") but with a different initial mode.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [B-spline by knots](/Sketcher_CreateBSplineByInterpolation "Sketcher CreateBSplineByInterpolation"): Creates a B-spline curve by knot points. Idem.

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [Periodic B-spline by knots](/Sketcher_CreatePeriodicBSplineByInterpolation "Sketcher CreatePeriodicBSplineByInterpolation"): Creates a periodic (closed) B-spline curve by knot points. Idem.

- ![](/images/Sketcher_ToggleConstruction.svg) [Konštrukčný režim](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"): Prepne geometriu náčrtu z/do konštrukčného režimu. Konštrukčná geometria je sfarbená na modro a mimo režim úprav náčrtu je neviditeľná.

### Väzby v Náčrtníku

Väzby sa používajú na definovanie dĺžok, nastavenie pravidiel medzi súčasťami náčrtu a na ukotvenie náčrtu vzhľadom na vodorovnú a zvislú os. Niektoré väzby vyžadujú [Pomocné väzby](/Sketcher_helper_constraint "Sketcher helper constraint").

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensional constraints:

- ![](/images/Sketcher_Dimension.svg) [Dimension](/Sketcher_Dimension "Sketcher Dimension"): Is the context-sensitive constraint tool of the Sketcher Workbench. Based on the current selection, it offers appropriate dimensional constraints, but also geometric constraints. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainDistanceX.svg) [Vodorovná vzdialenosť](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"): Nastaví vodorovnú vzdialenosť medzi dvomi bodmi alebo koncovými bodmi čiary. Ak je vybraný len jeden objekt, je vzdialenosť nastavená voči začiatku súradníc.

- ![](/images/Sketcher_ConstrainDistanceY.svg) [Zvislá vzdialenosť](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"): Nastaví zvislú vzdialenosť medzi dvomi bodmi alebo koncovými bodmi čiary. Ak je vybraný len jeden objekt, je vzdialenosť nastavená voči začiatku súradníc.

- ![](/images/Sketcher_ConstrainDistance.svg) [Vzdialenosť](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance"): Definuje vzdialenosť vybranej čiary zaväzbením jej dĺžky, alebo definuje vzdialenosť medzi dvomi bodmi zaväzbením ich vzájomnej vzdialenosti.

- ![](/images/Sketcher_ConstrainRadiam.svg) [Auto radius/diameter](/Sketcher_ConstrainRadiam "Sketcher ConstrainRadiam"): Fixes the radius of arcs and B-spline weight circles, and the diameter of circles.

- ![](/images/Sketcher_ConstrainRadius.svg) [Polomer](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius"): Zaväzbí polomer vybraného oblúka alebo kruhu určením jeho konkrétnej hodnoty.
- ![](/images/Sketcher_ConstrainDiameter.svg) [Priemer](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter"): Zaväzbí priemer vybraného oblúka alebo kruhu určením jeho konkrétnej hodnoty.
- ![](/images/Sketcher_ConstrainRadiam.svg) [Automatické zaväzbenie polomeru/priemeru](/Sketcher_ConstrainRadiam "Sketcher ConstrainRadiam"): Automaticky definuje polomer/priemer vybraného oblúka alebo kruhu (váhu riadiaceho bodu B-spline krivky, priemer kompletného kruhu, polomer oblúka) [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- ![](/images/Sketcher_ConstrainAngle.svg) [Uhol](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"): Definuje interný uhol medzi dvomi vybranými čiarami.

- ![](/images/Sketcher_ConstrainDiameter.svg) [Diameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter"): Fixes the diameter of circles and arcs.

- ![](/images/Sketcher_ConstrainAngle.svg) [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"): Fixes the angle between two edges, the angle of a line with the horizontal axis of the sketch, or the aperture angle of a circular arc.

- ![](/images/Sketcher_ConstrainLock.svg) [Zámok](/Sketcher_ConstrainLock "Sketcher ConstrainLock"): Zaväzbí vybraný objekt nastavením jeho zvislej a vodorovnej vzdialenosti od začiatku súradníc, čím v podstate uzamkne umiestnenie objektu. Tieto väzobné vzdialenosti je možné následne upraviť.

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Coincident (unified)](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified"): Creates a coincident constraint between points, fixes points on edges or axes, or creates a concentric constraint. It combines the [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainCoincident.svg) [Splynutie](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"): Pripojí bod na jeden alebo viacero iných bodov.

- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Bod na objekt](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"): Pripojí bod na iný objekt typu čiara, oblúk alebo os.

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)Horizontal/vertical constraints:

- ![](/images/Sketcher_ConstrainHorVer.svg) [Horizontal/vertical](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer"): Constrains lines or pairs of points to be horizontal or vertical, whichever is closest to the current alignment. It combines the [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainHorizontal.svg) [Vodorovná väzba](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal"): Zaväzbí vybrané čiary alebo elementy lomených čiar do presne vodorovnej polohy. Pred aplikovaním tejto väzby môžete vybrať jeden alebo viac objektov.

- ![](/images/Sketcher_ConstrainVertical.svg) [Zvislá väzba](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical"): Zaväzbí vybrané čiary alebo elementy lomených čiar do presne zvislej polohy. Pred aplikovaním tejto väzby môžete vybrať jeden alebo viac objektov.

- ![](/images/Sketcher_ConstrainParallel.svg) [Rovnobežná väzba](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel"): Zaväzbí dve alebo viac číar tak, aby boli rovnobežné.

- ![](/images/Sketcher_ConstrainPerpendicular.svg) [Kolmá väzba](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular"): Zaväzbí dve čiary tak, aby boli na seba kolmé, alebo zaväzbí čiaru kolmo na koncový bod oblúka.

- ![](/images/Sketcher_ConstrainTangent.svg) [Väzba dotyčnice](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent"): Medzi dvomi vybranými objektami vytvorí väzbu dotyčnice, alebo kolineárnu väzbu medzi dvomi čiarovými segmentami. Čiarový segment nemusí nutne ležať priamo na oblúku alebo kruhu, aby mohol s týmto oblúkom alebo kruhom vytvárať väzbu dotyčnice.

- ![](/images/Sketcher_ConstrainEqual.svg) [Väzba zhodnosti](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual"): Zaväzbí dva vybrané objekty tak, aby boli zhodné. Ak ju použijete na kruhy alebo oblúky, ich polomery sa budú zhodovať.

- ![](/images/Sketcher_ConstrainSymmetric.svg) [Väzba symetrie](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric"): Zaväzbí dva body symetricky k čiare, alebo zaväzbí prvé dva vybrané body symetricky k tretiemu vybranému bodu.

- ![](/images/Sketcher_ConstrainBlock.svg) [Blokovacia väzba](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock"): Zablokuje hranu a znemožní jej posun, to znamená, že neumožní jej vrcholom zmeniť umiestnenie. Hodí sa napríklad na ukotvenie pozície B-Spline kriviek. Viď [príspevok na fóre o blokovacej väzbe](https://forum.freecadweb.org/viewtopic.php?f=9&t=26572).

- ![](/images/Sketcher_ConstrainSnellsLaw.svg) [Snellov zákon](/Sketcher_ConstrainSnellsLaw "Sketcher ConstrainSnellsLaw"): Zaväzbí dve čiary tak, aby dodržiavali zákon lomu a simulovali prechod svetla cez optické rozhranie.

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Toggle constraints:

- ![](/images/Sketcher_ToggleDrivingConstraint.svg) [Prepnúť riadiacu/referenčnú väzbu](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint"): Prepne lištu nástrojov alebo zvolenú väzbu do/z referenčného stavu.

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Aktivovať/dekativovať väzbu](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"): Zapne alebo vypne už umiestnenú väzbu. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

### Nástroje Náčrtníka

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create fillet/chamfer:

- ![](/images/Sketcher_CreateFillet.svg) [Zaoblenie](/Sketcher_CreateFillet "Sketcher CreateFillet"): Medzi dvomi čiarami spojenými bodom vytvorí zaoblenie. Vyberte obe čiary alebo rohový bod a potom aktivujte nástroj.

- ![](/images/Sketcher_CreateChamfer.svg) [Chamfer](/Sketcher_CreateChamfer "Sketcher CreateChamfer"): creates a chamfer between two non-parallel edges. This is the same tool as [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet") but with a different initial mode. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Edit edge:

- ![](/images/Sketcher_Trimming.svg) [Orezanie](/Sketcher_Trimming "Sketcher Trimming"): Oreže čiaru, kruh alebo oblúk podľa zvoleného bodu.

- ![](/images/Sketcher_Split.svg) [Rozdelenie](/Sketcher_Split "Sketcher Split"): Rozdelí čiaru alebo oblúk na dve časti, premení kruh na oblúk pri zachovaní väčšiny väzieb. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Sketcher_Extend.svg) [Predĺženie](/Sketcher_Extend "Sketcher Extend"): Predĺži čiaru alebo oblúk až po hraničnú čiaru, oblúk, elipsu, oblúk elipsy alebo bod v priestore.

- ![](/images/Sketcher_External.svg) [Vonkajšia geometria](/Sketcher_External "Sketcher External"): Vytvorí hranu spojenú s vonjakšou geometriou.

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) External geometry:

- ![](/images/Sketcher_Projection.svg) [Create external projection geometry](/Sketcher_Projection "Sketcher Projection"): Creates the projection edges of external geometry. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_Intersection.svg) [Create external intersection geometry](/Sketcher_Intersection "Sketcher Intersection"): Creates the intersection edges of external geometry with the sketch plane. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_CarbonCopy.svg) [Presná kópia](/Sketcher_CarbonCopy "Sketcher CarbonCopy"): Skopíruje geometriu iného náčrtu.

- ![](/images/Sketcher_SelectOrigin.svg) [Vybrať začiatok súradníc](/Sketcher_SelectOrigin "Sketcher SelectOrigin"): Vyberie začiatok súradníc náčrtu.

- ![](/images/Sketcher_SelectHorizontalAxis.svg) [Vybrať vodorovnú os](/Sketcher_SelectHorizontalAxis "Sketcher SelectHorizontalAxis"): Vyberie vodorovnú os náčrtu.

- ![](/images/Sketcher_SelectVerticalAxis.svg) [Vybrať zvislú os](/Sketcher_SelectVerticalAxis "Sketcher SelectVerticalAxis"): Vyberie zvislú os náčrtu.

- ![](/images/Sketcher_Translate.svg) [Array transform](/Sketcher_Translate "Sketcher Translate"): Moves or optionally creates copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Rotate.svg) [Polar transform](/Sketcher_Rotate "Sketcher Rotate"): Rotates or optionally creates rotated copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Scale.svg) [Scale transform](/Sketcher_Scale "Sketcher Scale"): Scales or optionally creates scaled copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Offset.svg) [Offset geometry](/Sketcher_Offset "Sketcher Offset"): Creates equidistant edges around selected edges. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Symmetry.svg) [Symetria](/Sketcher_Symmetry "Sketcher Symmetry"): Skopíruje element náčrtu symetricky ku zvolenej čiare.

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Odstrániť zarovnanie k osám](/Sketcher_RemoveAxesAlignment "Sketcher RemoveAxesAlignment"): Odstráni zarovnanie k osám a zároveň sa pokúsi zachovať vzťah väzieb výberu. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Sketcher_DeleteAllGeometry.svg) [Zmazať všetku geometriu](/Sketcher_DeleteAllGeometry "Sketcher DeleteAllGeometry"): Zmaže všetku geometriu v náčrte.

- ![](/images/Sketcher_DeleteAllConstraints.svg) [Zmazať všetky väzby](/Sketcher_DeleteAllConstraints "Sketcher DeleteAllConstraints"): Zmaže všetky väzby z náčrtu.

- ![](/images/Edit-copy.svg) Copy in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-cut.svg) Cut in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-paste.svg) Paste in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

### Nástroje B-spline kriviek Náčrtníka

- ![](/images/Sketcher_BSplineApproximate.svg) [Konvertovať geometriu na B-spline krivku](/Sketcher_BSplineApproximate "Sketcher BSplineApproximate")

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Zvýšiť stupeň B-spline krivky](/Sketcher_BSplineIncreaseDegree "Sketcher BSplineIncreaseDegree")

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Znížiť stupeň B-spline krivky](/Sketcher_BSplineDecreaseDegree "Sketcher BSplineDecreaseDegree"), [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Zvýšiť násobnosť uzla](/Sketcher_BSplineIncreaseKnotMultiplicity "Sketcher BSplineIncreaseKnotMultiplicity")

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Znížiť násobnosť uzla](/Sketcher_BSplineDecreaseKnotMultiplicity "Sketcher BSplineDecreaseKnotMultiplicity")

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Insert knot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot"): Inserts a knot into a B-spline or increases the multiplicity of an existing knot.

- ![](/images/Sketcher_JoinCurves.svg) [Join curves](/Sketcher_JoinCurves "Sketcher JoinCurves"): Creates a B-spline by joining two existing B-splines or other edges. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Sketcher visual

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Select solver DOFs](/Sketcher_SelectElementsWithDoFs "Sketcher SelectElementsWithDoFs"): Zelenou farbou označí geometrické elementy, pri ktorých riešiteľ stále ukazuje nezaväzbené stupne voľnosti.

- ![](/images/Sketcher_SelectConstraints.svg) [Vybrať väzby](/Sketcher_SelectConstraints "Sketcher SelectConstraints"): Vyberie väzby elementu náčrtu.

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.svg) [Vybrať elementy spojené s väzbami](/Sketcher_SelectElementsAssociatedWithConstraints "Sketcher SelectElementsAssociatedWithConstraints"): Vyberie elementy náčrtu spojené s väzbami.

- ![](/images/Sketcher_SelectRedundantConstraints.svg) [Vybrať nadbytočné väzby](/Sketcher_SelectRedundantConstraints "Sketcher SelectRedundantConstraints"): Vyberie nadbytočné väzby náčrtu.

- ![](/images/Sketcher_SelectConflictingConstraints.svg) [Vybrať konfliktné väzby](/Sketcher_SelectConflictingConstraints "Sketcher SelectConflictingConstraints"): Vyberie konfliktné väzby náčrtu.

- ![](/images/Sketcher_ArcOverlay.svg) [Show/hide circular helper for arcs](/Sketcher_ArcOverlay "Sketcher ArcOverlay"): Shows or hides the circular helpers (underlying virtual circles) for arcs in all sketches. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Show/hide B-spline information layer:

- ![](/images/Sketcher_BSplineDegree.svg) [Zobraziť/skryť stupeň B-spline krivky](/Sketcher_BSplineDegree "Sketcher BSplineDegree")

- ![](/images/Sketcher_BSplinePolygon.svg) [Zobraziť/skryť kontrolný polygón B-spline krivky](/Sketcher_BSplinePolygon "Sketcher BSplinePolygon")

- ![](/images/Sketcher_BSplineComb.svg) [Zobraziť/skryť hrebeň zakrivenia B-spline krivky](/Sketcher_BSplineComb "Sketcher BSplineComb")

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Zobraziť/skryť násobnosť uzla B-spline krivky](/Sketcher_BSplineKnotMultiplicity "Sketcher BSplineKnotMultiplicity")

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Zobraziť/skryť váhu kontrolných bodov B-spline krivky](/Sketcher_BSplinePoleWeight "Sketcher BSplinePoleWeight"), [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Zobraziť/skryť vnútornú geometriu](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry"): Znovu vytvorí chýbajúcu/zmaže nepotrebnú vnútornú geometriu vybraného kruhu, oblúka elipsy/hyperboly/paraboly alebo B-spline krivky.

- ![](/images/Sketcher_SwitchVirtualSpace.svg) [Prepnúť virtuálny priestor](/Sketcher_SwitchVirtualSpace "Sketcher SwitchVirtualSpace"): Umožní vám skryť všetky väzby náčrtu a potom ich znovu zobraziť.

### Obsolete tools

- ![](/images/Sketcher_Clone.svg) [Klon](/Sketcher_Clone "Sketcher Clone"): Vytvorí klon elementu náčrtu s prepojením na originál.

- ![](/images/Sketcher_CloseShape.svg) [Uzavrieť tvar](/Sketcher_CloseShape "Sketcher CloseShape"): Vytvorí uzavretý tvar aplikovaním väzieb splynutia na koncové body.

- ![](/images/Sketcher_CreatePointFillet.svg) [Corner-preserving fillet](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet"): Creates a fillet between two non-parallel lines while preserving their corner point. Not available in 1.0 and above.

- ![](/images/Sketcher_ConnectLines.svg) [Spojiť hrany](/Sketcher_ConnectLines "Sketcher ConnectLines"): Spojí elementy náčrtu aplikovaním väzieb splynutia na koncové body.

- ![](/images/Sketcher_Copy.svg) [Kópia](/Sketcher_Copy "Sketcher Copy"): Vytvorí kópiu elementu náčrtu bez prepojenia na originál.

- ![](/images/Sketcher_Move.svg) [Presun](/Sketcher_Move "Sketcher Move"): Presunie vybranú geometriu podľa posledného vybraného bodu.

- ![](/images/Sketcher_RectangularArray.svg) [Obdĺžnikové pole](/Sketcher_RectangularArray "Sketcher RectangularArray"): Vytvorí pole z vybraných elementov náčrtu.

## Predvoľby

- ![](/images/Preferences-general.svg) [Predvoľby](/Sketcher_Preferences "Sketcher Preferences"): Predvoľby pracovného stola "Náčrtník".

## Osvedčené postupy

Každý CAD používateľ si priebežne vytvára vlastný pracovný postup, ale existujú určité osvedčené postupy, ktoré je dobré zachovávať.

- Séria jednoduchých náčrtov sa spravuje ľahšie, ako jeden komplexný náčrt. Napríklad prvý náčrt môžete vytvoriť pre základný 3D prvok (napríklad pomocou vytiahnutia alebo obtočenia), zatiaľ čo druhý môžete použiť na vytvorenie dier alebo výrezov (kapies). Niektoré detaily môžete vynechať a vytvoriť ich neskôr ako 3D prvky. Môžete v náčrte takisto vynechať zaoblenia, ak ich obsahuje príliš veľa, pričom ich neskôr pridáte ako 3D prvky.
- Vždy vytvárajte uzavretý profil, inak z vášho náčrtu nebudete môcť vytvoriť teleso, ale iba súbor otvorených plôch. Ak nechcete, aby boli niektoré objekty zahrnuté do tvorby telesa, zmeňte ich pomocou nástroja Konštrukčný režim na konštrukčné elementy.
- Aby ste nemuseli všetky väzby vytvárať manuálne, môžete na niektoré elementy použiť ich automatické vytváranie.
- Vo všeobecnosti platí, že najprv by ste mali aplikovať geometrické väzby, potom väzby rozmerov a na koniec celý náčrt uzamknúť. Ale zapamätajte si: pravidlá sú často na to, aby sa porušovali. Ak máte problém manipulovať s náčrtom, môže byť vhodné niektoré objekty zaväzbiť, než celý náčrt dokončíte.
- Ak sa dá, vycentrujte náčrt k začiatku súradníc (0,0) pomocou väzby Zámok. Ak náčrt nie je symetrický, zaväzbite jeden z jeho bodov k začiatku súradníc, alebo si pre väzby vzdialeností zvoľte okrúhle čísla. Vo verzii 0.12 nie sú externé väzby (umožňujúce zaväzbiť náčrt k existujúcej 3D geometrii, ako napríklad hranám či iným náčrtom) ešte implementované. To znamená, že naviazanie geometrie náčrtu k predchádzajúcemu náčrtu musíte vykonať manuálne nastavením vzdialeností od predchádzajúceho náčrtu. Väzba zámku (25,75) od začiatku súradníc sa určite pamätá lepšie, než (23.47,73.02).
- Ak máte možnosť výberu medzi väzbou dĺžky a väzbami vodorovnej/zvislej vzdialenosti, použite radšej tie druhé. Väzby vodorodnej a zvislej vzdialenosti sä výpočetne jednoduchšie.
- Vo všeobecnosti sú najlepšie väzby tieto: vodorovná a zvislá vzdialenosť, vodorovná a zvislá dĺžka, dotyčnica bod-na-bod. Ak je to možné, obmedzte použitie týchto väzieb: všeobecná väzba dĺžky; dotyčnica hrana-na-hranu; väzba bodu na čiaru; väzba symetrie.
- Ak máte pochybnosti o platnosti náčrtu po jeho ukončení (prvky sú vysvietené nazeleno), zavrite dialógové okno Náčrtníka, prepnite sa na ![](/images/Workbench_Part.svg) [pracovný stôl Dielec](/Part_Workbench "Part Workbench") a spustite príkaz ![](/images/Part_CheckGeometry.svg) [Skontrolovať geomegriu](/Part_CheckGeometry "Part CheckGeometry").

## Návody

- [Sketcher tutorial](https://forum.freecadweb.org/viewtopic.php) od autora chrisb. Toto je 70-stranový PDF dokument, ktorý slúži ako detailný návod na použitie Náčrtníka. Vysvetľuje základy použitia Náčrtníka a poskytuje veľa detailov o tvorbe geometrických tvarov a všetkých druhov väzieb.
- [Basic Sketcher Tutorial](/Basic_Sketcher_Tutorial "Basic Sketcher Tutorial") pre začiatočníkov
- [Sketcher Micro Tutorial - Constraint Practices](/Sketcher_Micro_Tutorial_-_Constraint_Practices "Sketcher Micro Tutorial - Constraint Practices")
- [Sketcher requirement for a sketch](/Sketcher_requirement_for_a_sketch "Sketcher requirement for a sketch") Minimálne požiadavky na náčrt a úplné určenie náčrtu.

## Skriptovanie

Stránka [Skriptovanie v Náčrtníku](/Sketcher_scripting "Sketcher scripting") obsahuje príklady vytvárania väzieb pomocou skriptov v jazyku Python.

## Examples

For some ideas of what can be achieved with Sketcher tools, have a look at: [Sketcher examples](/Sketcher_Examples "Sketcher Examples").

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/sk&oldid=1537983>"
