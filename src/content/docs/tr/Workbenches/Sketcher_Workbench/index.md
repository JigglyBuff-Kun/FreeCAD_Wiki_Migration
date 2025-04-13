---
title: Eskiz Tezgahı
---

![](/images/Workbench_Sketcher.svg)

Sketcher workbench icon

## Giriş

Eskiz tezgahı; [Parça tasarım tezgahı](/PartDesign_Workbench/tr "PartDesign Workbench/tr"), [Yapı tezgahı](/Arch_Workbench/tr "Arch Workbench/tr") ve diğer tezgahlarda kullanılmak üzere 2D geometriler üretir.
Genel olarak, bir 2D geometrisi çoğu CAD modelinin başlangıç ​​noktası olarak kabul edilir, çünkü bir 2D çizimi, 3D şekli oluşturmak için "ekstrüzyona sokulabilir"; Önceden oluşturulmuş 3D şekillerin üstünde oyuklar, çıkıntılar veya ekstrüzyonlar gibi başka özellikler oluşturmak için başka 2D çizimler de kullanılabilir. [Parça Tezgahında](/Part_Workbench/tr "Part Workbench/tr") tanımlanan katılarda, Boolean işlemleri ile birlikte Eskiz, üretken katı şekilli tasarımın çekirdeğini oluşturur.

Together with boolean operations defined in the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), the Sketcher Workbench, or "The Sketcher" for short, forms the basis of the [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) method of building solids. Together with ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") operations, it also forms the basis of the [feature editing](/Feature_editing "Feature editing") methodology of creating solids. But many other workbenches use sketches as well.

Eskiz tezgahı, 2D şekillerin kesin geometrik tanımları izlemesine izin veren "kısıtlamalara" sahiptir. Bir kısıtlayıcı çözücü, 2D geometrinin kısıtlı boyutunu hesaplar ve çizim serbestlik derecelerinin etkileşimli olarak araştırılmasını sağlar.

#### Eskiz nerelerde kullanılmaz

Eskiz, 2D planlar üretmek için tasarlanmamıştır. Eskizler, katı bir özellik oluşturmak için kullanıldığında, otomatik olarak gizlenir. Kısıtlamalar yalnızca Eskiz düzenleme modunda görülebilir.

![](/images/FC_ConstrainedSketch.png)

Tamamen kısıtlanmış bir eskiz

## Constraints

#### Kısıtlama nedir

Boyutlar yerine, kısıtlamalar bir nesnenin serbestlik derecesini sınırlamak için kullanılır. Örneğin, kısıtlamaları olmayan bir çizgi 4 [Serbestlik Derecesine](#Degrees_Of_Freedom) (" DOF " olarak kısaltılır) sahiptir: yatay ya da dikey olarak hareket ettirilebilir, uzatılabilir ve döndürülebilir.

Yatay veya dikey bir sınırlama veya bir açı sınırlaması (başka bir çizgiye veya eksenlerden birine göre) uygulamak, dönme kapasitesini sınırlar ve böylece 3 serbestlik derecesine sahip olur. Çizginin herhangi bir noktasını, Orijin ile ilişkilendirmek 2 serbestlik derecesini ortadan kaldırır. Bir boyut sınırlaması uygulamak son serbestlik derecesini ortadan kaldıracaktır. Çizgi daha sonra **tamamen kısıtlı** olarak kabul edilir .

Birden fazla nesne aralarında sınırlandırılabilir. İki çizgi, noktaları birbiriyle çakışan nokta kısıtı ile birleştirilebilir. Aralarında bir açı belirlenebilir veya dik olarak ayarlanabilir. Bir çizgi, bir yay veya bir daireye teğet olabilir vb. Birden fazla nesneyi içeren karmaşık bir Eskiz, çok sayıda farklı çözüme sahip olacak ve **tamamen kısıtlı** olması, bu olası çözümlerden yalnızca birinin uygulanan kısıtlamalara dayanarak ulaşıldığı anlamına gelir.

İki tür kısıtlama vardır: geometrik ve boyutsal. Bunlar aşağıdaki ['Araçlar'](#The_tools) bölümünde ayrıntılı olarak açıklanmaktadır .

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

In sketches that have **Auto constraints** checked (default) several constraints are applied automatically. The icon of a proposed automatic constraint is shown next to the cursor when it is placed correctly. Left-clicking will then apply that constraint. This is a per-sketch setting that can be changed in the [Sketcher Dialog](/Sketcher_Dialog#Constraints "Sketcher Dialog") or by changing the Görünüm**Autoconstraints** [property](/Property_editor "Property editor") of the sketch.

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

## Araçlar

Eskiz Tezgahı araçlarının tümü, Eskiz Tezgahını yüklediğinizde görünen Eskiz menüsünde bulunur.

Some tools are also available from the [3D view](/3D_view "3D view") context menu while a sketch is in edit mode, or from the context menus of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): If a sketch is in edit mode the Structure toolbar is hidden as none of its tools can then be used.

### General

#### Sketcher toolbar

- ![](/images/Sketcher_NewSketch.png) [Eskiz oluştur](/Sketcher_NewSketch/tr "Sketcher NewSketch/tr"): Seçilen bir yüz veya düzlemde yeni bir eskiz oluşturur. Bu araç yürütülürken herhangi bir yüz seçilmezse, kullanıcıdan açılır pencereden bir düzlem seçmesi istenir.

- ![](/images/Sketcher_EditSketch.png) [Eskizi düzenle](/Sketcher_EditSketch/tr "Sketcher EditSketch/tr"): Seçilen Eskiz'i düzenler.

- ![](/images/Sketcher_MapSketch.png) [Eskizi yüze eşle](/Sketcher_MapSketch/tr "Sketcher MapSketch/tr"): Bir katının seçilmiş bir yüzüne Eskizi eşler.

- ![](/images/Sketcher_ReorientSketch.svg) [Eskizi uyarla](/Sketcher_ReorientSketch/tr "Sketcher ReorientSketch/tr"): Eskizin konumunu değiştirmek için kullanılır.

- [Eskizi kontrol et](/index.php?title=Sketcher_ValidateSketch/tr&action=edit&redlink=1 "Sketcher ValidateSketch/tr (page does not exist)"): Farklı noktaların toleransını doğrulayın ve ayarlayın.

- ![](/images/Sketcher_MergeSketch.png) [Eskizleri birleştir](/index.php?title=Sketcher_MergeSketches/tr&action=edit&redlink=1 "Sketcher MergeSketches/tr (page does not exist)"): İki veya daha fazla eskizi birleştirin.[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_MirrorSketch.png) [Eskizi Aynala](/index.php?title=Sketcher_MirrorSketch/tr&action=edit&redlink=1 "Sketcher MirrorSketch/tr (page does not exist)"):Bir çizimi x ekseni, y ekseni veya orijini boyunca aynalayın. [introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

#### Sketcher Edit Mode toolbar

- ![](/images/Sketcher_LeaveSketch.png) [Eskizden çık](/Sketcher_LeaveSketch/tr "Sketcher LeaveSketch/tr"): Eskiz düzenleme modundan çıkar.

- ![](/images/Sketcher_ViewSketch.png) [Eskiz görünümü](/Sketcher_ViewSketch/tr "Sketcher ViewSketch/tr"): Model görünümünü eskiz düzlemine dik olarak ayarlar.

- ![](/images/Sketcher_ViewSection.png) [Bölümü görüntüle](/index.php?title=Sketcher_ViewSection/tr&action=edit&redlink=1 "Sketcher ViewSection/tr (page does not exist)"): Eskiz düzleminin önünde herhangi bir cismi geçici olarak gizleyen bir bölüm düzlemi oluşturur.[introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

#### Sketcher edit tools toolbar

- ![](/images/Sketcher_Grid.svg) [Toggle grid](/Sketcher_Grid "Sketcher Grid"): Toggles the grid in the sketch currently being edited. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_Snap.svg) [Toggle snap](/Sketcher_Snap "Sketcher Snap"): Toggles snapping in all sketches. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_RenderingOrder.svg) [Configure rendering order](/Sketcher_RenderingOrder "Sketcher RenderingOrder"): The rendering order of all sketches can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

#### Other

- ![](/images/Sketcher_StopOperation.svg) [Stop operation](/Sketcher_StopOperation "Sketcher StopOperation"): Stops any currently running geometry or constraint creation tool.

### Eskiz Geometrileri

Bunlar nesne oluşturma araçlarıdır.

- ![](/images/Sketcher_CreatePoint.png) [Nokta](/index.php?title=Sketcher_CreatePoint/tr&action=edit&redlink=1 "Sketcher CreatePoint/tr (page does not exist)"): Nokta çizer.

- ![](/images/Sketcher_CreatePolyline.png) [Polyline (Çok noktalı çizgi)](/index.php?title=Sketcher_CreatePolyline/tr&action=edit&redlink=1 "Sketcher CreatePolyline/tr (page does not exist)"): Birden çok çizgi parçasından oluşan bir çizgi çizer. Bir Polyline çizerken M tuşuna basmak, farklı polyline modları arasında geçiş yapar.

- ![](/images/Sketcher_Line.png) [2 noktadan Çizgi](/index.php?title=Sketcher_CreateLine/tr&action=edit&redlink=1 "Sketcher CreateLine/tr (page does not exist)"): İki nokta arasında Çizgi oluşturur. Çizgiler sonsuz serbestlik derecesine sahiptir.

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create arc:

- ![](/images/Sketcher_Arc.png) [Yay](/index.php?title=Sketcher_CreateArc/tr&action=edit&redlink=1 "Sketcher CreateArc/tr (page does not exist)"): Merkez, yarıçap, başlangıç ​​açısı ve bitiş açısından bir yay parçası çizer.

- ![](/images/Sketcher_CreateArc3Point.png) [3 nokta ile yay çiz](/index.php?title=Sketcher_Create3PointArc/tr&action=edit&redlink=1 "Sketcher Create3PointArc/tr (page does not exist)"): İki uç noktadan ve çevredeki başka bir noktadan bir yay parçası çizer.

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Arc of ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse"): Creates an arc of ellipse.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Arc of hyperbola](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola"): Creates an arc of hyperbola.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Arc of parabola](/Sketcher_CreateArcOfParabola "Sketcher CreateArcOfParabola"): Creates an arc of parabola.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create circle/ellipse:

- ![](/images/Sketcher_Circle.png) [Daire](/index.php?title=Sketcher_CreateCircle/tr&action=edit&redlink=1 "Sketcher CreateCircle/tr (page does not exist)"): Merkez nokta ve yarıçaptan bir daire çizer.

- ![](/images/Sketcher_CreateCircle3Point.png) [3 nokta ile daire](/index.php?title=Sketcher_Create3PointCircle/tr&action=edit&redlink=1 "Sketcher Create3PointCircle/tr (page does not exist)"): seçilen üç nokta üzerinden geçen bir daire çizer.

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter"): Creates an ellipse by its center, an endpoint of one of its axes, and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by both endpoints of one of its axes and a point along the ellipse.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Ellipse by 3 points](/Sketcher_CreateEllipseBy3Points "Sketcher CreateEllipseBy3Points"): Creates an ellipse by the endpoints of one of its axes and a point along the ellipse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Ellipse by center](/Sketcher_CreateEllipseByCenter "Sketcher CreateEllipseByCenter") but with a different initial mode.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create rectangle:

- ![](/images/Sketcher_CreateRectangle.png) [Dikdörtgen](/index.php?title=Sketcher_CreateRectangle/tr&action=edit&redlink=1 "Sketcher CreateRectangle/tr (page does not exist)"): İki zıt noktadan bir dikdörtgen çizer.

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Centered rectangle](/Sketcher_CreateRectangle_Center "Sketcher CreateRectangle Center"): Creates a centered rectangle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [Rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle") but with a different initial mode.

- ![](/images/Sketcher_CreateOblong.svg) [Rounded rectangle](/Sketcher_CreateOblong "Sketcher CreateOblong"): Creates a rounded rectangle. Idem.

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create regular polygon:

- ![](/images/Sketcher_CreateTriangle.png) [Üçgen](/index.php?title=Sketcher_CreateTriangle/tr&action=edit&redlink=1 "Sketcher CreateTriangle/tr (page does not exist)"):Bir inşaat geometri dairesi içine bir eşkenar üçgen çizer. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreateSquare.png) [Kare](/index.php?title=Sketcher_CreateSquare/tr&action=edit&redlink=1 "Sketcher CreateSquare/tr (page does not exist)"): Bir inşaat geometri dairesi içine bir kare çizer. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreatePentagon.png) [Beşgen](/index.php?title=Sketcher_CreatePentagon/tr&action=edit&redlink=1 "Sketcher CreatePentagon/tr (page does not exist)"): Bir inşaat geometri dairesi içine bir beşgen çizer. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreateHexagon.png) [Altıgen](/index.php?title=Sketcher_CreateHexagon/tr&action=edit&redlink=1 "Sketcher CreateHexagon/tr (page does not exist)"): Bir inşaat geometri dairesi içine bir altıgen çizer. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreateHeptagon.png) [Yedigen](/index.php?title=Sketcher_CreateHeptagon/tr&action=edit&redlink=1 "Sketcher CreateHeptagon/tr (page does not exist)"): Bir inşaat geometri dairesi içine bir yedigen çizer.

- ![](/images/Sketcher_CreateOctagon.png) [Sekizgen](/index.php?title=Sketcher_CreateOctagon/tr&action=edit&redlink=1 "Sketcher CreateOctagon/tr (page does not exist)"):Bir inşaat geometri dairesi içine bir sekizgen çizer. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreateRegularPolygon.svg) [Regular polygon](/Sketcher_CreateRegularPolygon "Sketcher CreateRegularPolygon"): Creates a regular polygon. The number of sides can be specified.

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create slot:

- ![](/images/Sketcher_CreateSlot.png) [Yuva](/index.php?title=Sketcher_CreateSlot/tr&action=edit&redlink=1 "Sketcher CreateSlot/tr (page does not exist)"): Bir yarım dairenin merkezini ve diğer bir yarım dairenin son noktasını seçerek ikisi arasında bir oval çizer.

- ![](/images/Sketcher_CreateArcSlot.svg) [Arc slot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot"): Creates an arc slot. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create B-spline:

- ![](/images/Sketcher_CreateBSpline.svg) [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline"): Creates a B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Or by knot points.

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Periodic B-spline by control points](/Sketcher_CreatePeriodicBSpline "Sketcher CreatePeriodicBSpline"): Creates a periodic (closed) B-spline curve by control points. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This is the same tool as [B-spline by control points](/Sketcher_CreateBSpline "Sketcher CreateBSpline") but with a different initial mode.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [B-spline by knots](/Sketcher_CreateBSplineByInterpolation "Sketcher CreateBSplineByInterpolation"): Creates a B-spline curve by knot points. Idem.

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [Periodic B-spline by knots](/Sketcher_CreatePeriodicBSplineByInterpolation "Sketcher CreatePeriodicBSplineByInterpolation"): Creates a periodic (closed) B-spline curve by knot points. Idem.

- ![](/images/Sketcher_ToggleConstruction.png) [İnşaat modu](/index.php?title=Sketcher_ToggleConstruction/tr&action=edit&redlink=1 "Sketcher ToggleConstruction/tr (page does not exist)"): Eskiz geometrisini inşaat moduna değiştirir. İnşaat geometrisi mavi renkte gösterilir ve Eskiz düzenleme modunun dışına atılır.

### Eskiz kısıtlamaları

Kısıtlamalar, uzunlukları tanımlamak, Eskiz öğeleri arasında kuralları belirlemek ve eskizleri dikey ve yatay eksenler boyunca kilitlemek için kullanılır. Bazı kısıtlamalar, [Yardımcı kısıtlamaların](/Sketcher_helper_constraint "Sketcher helper constraint") kullanılmasını gerektirir .

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensional constraints:

- ![](/images/Sketcher_Dimension.svg) [Dimension](/Sketcher_Dimension "Sketcher Dimension"): Is the context-sensitive constraint tool of the Sketcher Workbench. Based on the current selection, it offers appropriate dimensional constraints, but also geometric constraints. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainDistanceX.png) [Yatay uzunluk](/index.php?title=Sketcher_ConstrainDistanceX/tr&action=edit&redlink=1 "Sketcher ConstrainDistanceX/tr (page does not exist)"):İki nokta veya çizgi bitiş noktaları arasındaki yatay mesafeyi sabitler. Yalnızca bir öğe seçilirse, mesafe orijine ayarlanır.

- ![](/images/Sketcher_ConstrainDistanceY.png) [Dikey uzunluk](/index.php?title=Sketcher_ConstrainDistanceY/tr&action=edit&redlink=1 "Sketcher ConstrainDistanceY/tr (page does not exist)"): 2 nokta veya çizgi bitiş noktası arasındaki dikey uzunluğu sabitler. Yalnızca bir öğe seçilirse, uzunluk orijine ayarlanır.

- ![](/images/Sketcher_ConstrainDistance.png) [Uzunluk](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance"): Seçili çizginin uzunluğunu sınırlayarak mesafeyi tanımlar veya aralarındaki uzunluğu sınırlayarak iki nokta arasını tanımlar.

- ![](/images/Sketcher_ConstrainRadiam.svg) [Auto radius/diameter](/Sketcher_ConstrainRadiam "Sketcher ConstrainRadiam"): Fixes the radius of arcs and B-spline weight circles, and the diameter of circles.

- ![](/images/Sketcher_ConstrainRadius.png) [Yarıçap](/index.php?title=Sketcher_ConstrainRadius/tr&action=edit&redlink=1 "Sketcher ConstrainRadius/tr (page does not exist)"):Yarıçapı kısıtlayarak, seçilen bir yayın veya dairenin yarıçapını tanımlar.
- ![](/images/Constraint_InternalAngle.png) [İç Açı](/index.php?title=Sketcher_ConstrainAngle/tr&action=edit&redlink=1 "Sketcher ConstrainAngle/tr (page does not exist)"):Seçilen iki çizgi arasındaki iç açıyı tanımlar.

- ![](/images/Sketcher_ConstrainDiameter.svg) [Diameter](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter"): Fixes the diameter of circles and arcs.

- ![](/images/Sketcher_ConstrainAngle.svg) [Angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle"): Fixes the angle between two edges, the angle of a line with the horizontal axis of the sketch, or the aperture angle of a circular arc.

- ![](/images/Sketcher_ConstrainLock.png) [Kilit](/Sketcher_ConstrainLock "Sketcher ConstrainLock"): Seçili öğeyi, kökene göre dikey ve yatay mesafeler ayarlayarak sınırlar ve böylece o öğenin konumunu kilitler. Bu kısıtlama mesafeleri daha sonra düzenlenebilir.

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Coincident (unified)](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified"): Creates a coincident constraint between points, fixes points on edges or axes, or creates a concentric constraint. It combines the [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainCoincident.png) [Çakıştır](/index.php?title=Sketcher_ConstrainCoincident/tr&action=edit&redlink=1 "Sketcher ConstrainCoincident/tr (page does not exist)"):Bir noktaya, bir veya daha fazla noktayı çakıştırır.

- ![](/images/Sketcher_ConstrainPointOnObject.png) [Nesne üzerinde nokta](/index.php?title=Sketcher_ConstrainPointOnObject/tr&action=edit&redlink=1 "Sketcher ConstrainPointOnObject/tr (page does not exist)"): Bir noktayı, çizgi, yay veya eksen gibi bir nesne üzerine çakıştırır.

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)Horizontal/vertical constraints:

- ![](/images/Sketcher_ConstrainHorVer.svg) [Horizontal/vertical](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer"): Constrains lines or pairs of points to be horizontal or vertical, whichever is closest to the current alignment. It combines the [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Constraint_Horizontal.png) [Yatay](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal"): Seçili çizgileri veya çoklu çizgi öğelerini gerçek bir yatay yönde sınırlar. Bu kısıtlamayı uygulamadan önce birden fazla nesne seçilebilir.

- ![](/images/Constraint_Vertical.png) [Dikey](/index.php?title=Sketcher_ConstrainVertical/tr&action=edit&redlink=1 "Sketcher ConstrainVertical/tr (page does not exist)"): Seçilen çizgileri veya çoklu çizgi öğelerini gerçek bir dikey yönlendirmeyle sınırlar. Bu kısıtlamayı uygulamadan önce birden fazla nesne seçilebilir.

- ![](/images/Sketcher_ConstrainParallel.png) [Paralel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel"): İki veya daha fazla çizgiyi paralel yaptırarak sınırlar.

- ![](/images/Sketcher_ConstrainPerpendicular.png) [Dik](/index.php?title=Sketcher_ConstrainPerpendicular/tr&action=edit&redlink=1 "Sketcher ConstrainPerpendicular/tr (page does not exist)"): İki çizgiyi bir birine dik hale getirir veya bir yay uç noktasına bir çizgiyi dik olarak sınırlar.

- ![](/images/Constraint_Tangent.png) [Teğet](/index.php?title=Sketcher_ConstrainTangent/tr&action=edit&redlink=1 "Sketcher ConstrainTangent/tr (page does not exist)"):Seçilen iki varlık arasında teğet bir kısıtlama veya iki çizgi parçası arasında bir eş doğrusal kısıtlama oluşturur. Bir çizgi segmenti, bu yay veya daireyle teğet olmak için doğrudan bir yay veya dairenin üzerinde olmak zorunda değildir.

- ![](/images/Sketcher_ConstrainEqual.png) [Eşit](/index.php?title=Sketcher_ConstrainEqual/tr&action=edit&redlink=1 "Sketcher ConstrainEqual/tr (page does not exist)"): Seçilen iki çizimi birbirine eşitler. Eğer daireler veya yaylar seçilirse yarıçapları eşitlenir.

- ![](/images/Sketcher_ConstrainSymmetric.png) [Simetrik](/index.php?title=Sketcher_ConstrainSymmetric/tr&action=edit&redlink=1 "Sketcher ConstrainSymmetric/tr (page does not exist)"): Bir çizgi etrafında simetrik olarak iki nokta sınırlar veya seçilen ilk iki noktayı simetrik olarak seçilen üçüncü bir noktaya sınırlar.

- ![](/images/Sketcher_ConstrainBlock.png) [Kısıtlama bloğu](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock"): Temel olarak, tek bir kısıtlama ile yerinde bir geometrik elemanın bloklanmasını sağlar.

- ![](/images/Constraint_SnellsLaw.png) [Snell yasası](/index.php?title=Sketcher_ConstrainSnellsLaw/tr&action=edit&redlink=1 "Sketcher ConstrainSnellsLaw/tr (page does not exist)"):Bir arayüzden geçen ışığı simüle etmek için bir kırılma yasasına uymak için iki satır kısıtlar. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Toggle constraints:

- ![](/images/Sketcher_ToggleConstraint.png) [Referans/Çizim değiştir](/index.php?title=Sketcher_ToggleDrivingConstraint/tr&action=edit&redlink=1 "Sketcher ToggleDrivingConstraint/tr (page does not exist)"):Araç çubuğunu veya seçilen kısıtlamaları referans moduna /çizim modundan değiştirir.[introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Activate/deactivate constraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"): Activates or deactivates selected constraints.

### Eskiz araçları

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create fillet/chamfer:

- ![](/images/Sketcher_CreateFillet.png) [Kavis](/index.php?title=Sketcher_CreateFillet/tr&action=edit&redlink=1 "Sketcher CreateFillet/tr (page does not exist)"):Bir noktada birleştirilmiş iki çizgi arasında bir kavis yapar. Her iki çizgiyi de seçin veya köşe noktasına tıklayın, ardından aracı etkinleştirin.

- ![](/images/Sketcher_CreateChamfer.svg) [Chamfer](/Sketcher_CreateChamfer "Sketcher CreateChamfer"): creates a chamfer between two non-parallel edges. This is the same tool as [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet") but with a different initial mode. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Edit edge:

- ![](/images/Sketcher_Trimming.png) [Kırpma](/index.php?title=Sketcher_Trimming/tr&action=edit&redlink=1 "Sketcher Trimming/tr (page does not exist)"): Tıklanan noktaya göre bir çizgi, daire veya yay kırpar.

- ![](/images/Sketcher_Split.svg) [Split](/Sketcher_Split "Sketcher Split"): Splits an edge while transferring most constraints.

- ![](/images/Sketcher_Extend.svg) [Genişlet](/index.php?title=Sketcher_Extend/tr&action=edit&redlink=1 "Sketcher Extend/tr (page does not exist)"): Bir çizgiyi veya bir yayı bir sınır çizgisine, yay, elips, elips yayına veya uzayda bir noktaya genişletir.[introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

- ![](/images/Sketcher_External.png) [Dış geometri](/index.php?title=Sketcher_External/tr&action=edit&redlink=1 "Sketcher External/tr (page does not exist)"): Dış geometriye bağlı bir kenar oluşturur.

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) External geometry:

- ![](/images/Sketcher_Projection.svg) [Create external projection geometry](/Sketcher_Projection "Sketcher Projection"): Creates the projection edges of external geometry. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_Intersection.svg) [Create external intersection geometry](/Sketcher_Intersection "Sketcher Intersection"): Creates the intersection edges of external geometry with the sketch plane. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_CarbonCopy.svg) [Karbon kopya](/index.php?title=Sketcher_CarbonCopy/tr&action=edit&redlink=1 "Sketcher CarbonCopy/tr (page does not exist)"):Başka bir çizimin geometrisini kopyalar.[introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

- ![](/images/Sketcher_SelectOrigin.png) [Eksen merkez noktasını seç](/Sketcher_SelectOrigin "Sketcher SelectOrigin"): Eskizin eksen merkez noktasını seçer.[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectHorizontalAxis.png) [Yatay ekseni seç](/Sketcher_SelectHorizontalAxis "Sketcher SelectHorizontalAxis"): Eskizin yatay eksenini seçer.[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectVerticalAxis.png) [Dikey eksen seç](/index.php?title=Sketcher_SelectVerticalAxis/tr&action=edit&redlink=1 "Sketcher SelectVerticalAxis/tr (page does not exist)"): Eskizin dikey eksenini seçer.[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_Translate.svg) [Array transform](/Sketcher_Translate "Sketcher Translate"): Moves or optionally creates copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Rotate.svg) [Polar transform](/Sketcher_Rotate "Sketcher Rotate"): Rotates or optionally creates rotated copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Scale.svg) [Scale transform](/Sketcher_Scale "Sketcher Scale"): Scales or optionally creates scaled copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Offset.svg) [Offset geometry](/Sketcher_Offset "Sketcher Offset"): Creates equidistant edges around selected edges. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Symmetry.png) [Simetri](/index.php?title=Sketcher_Symmetry/tr&action=edit&redlink=1 "Sketcher Symmetry/tr (page does not exist)"): Seçilen bir çizgiye simetrik bir eskiz elemanı kopyalar. [introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Remove axes alignment](/Sketcher_RemoveAxesAlignment "Sketcher RemoveAxesAlignment"): Removes the axes alignment of selected edges by replacing [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") constraints with [Parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel") and [Perpendicular](/Sketcher_ConstrainPerpendicular "Sketcher ConstrainPerpendicular") constraints.

- ![](/images/Sketcher_Element_SelectionTypeInvalid.svg) [Tüm geometriyi sil](/index.php?title=Sketcher_DeleteAllGeometry/tr&action=edit&redlink=1 "Sketcher DeleteAllGeometry/tr (page does not exist)"):Tüm geometriyi eskizden siler.[introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

- ![](/images/Sketcher_Element_SelectionTypeInvalid.svg) [Tüm kısıtlamaları sil](/Sketcher_DeleteAllConstraints "Sketcher DeleteAllConstraints"):Tüm kısıtlamaları çizimden siler. [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

- ![](/images/Edit-copy.svg) Copy in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-cut.svg) Cut in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-paste.svg) Paste in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

### Eskiz B-spline araçları

- ![](/images/Sketcher_BSplineApproximate.svg) [Geometriyi B-spline'a Dönüştür](/index.php?title=Sketcher_BSplineApproximate/tr&action=edit&redlink=1 "Sketcher BSplineApproximate/tr (page does not exist)")

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Derece arttır](/index.php?title=Sketcher_BSplineIncreaseDegree/tr&action=edit&redlink=1 "Sketcher BSplineIncreaseDegree/tr (page does not exist)")

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Decrease B-spline degree](/Sketcher_BSplineDecreaseDegree "Sketcher BSplineDecreaseDegree"): Decreases the degree (order) of B-splines.

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Düğüm çokluğunu arttır](/index.php?title=Sketcher_BSplineIncreaseKnotMultiplicity/tr&action=edit&redlink=1 "Sketcher BSplineIncreaseKnotMultiplicity/tr (page does not exist)")

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Düğüm çokluğunu azalt](/index.php?title=Sketcher_BSplineDecreaseKnotMultiplicity/tr&action=edit&redlink=1 "Sketcher BSplineDecreaseKnotMultiplicity/tr (page does not exist)")

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Insert knot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot"): Inserts a knot into a B-spline or increases the multiplicity of an existing knot.

- ![](/images/Sketcher_JoinCurves.svg) [Join curves](/Sketcher_JoinCurves "Sketcher JoinCurves"): Creates a B-spline by joining two existing B-splines or other edges. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Sketcher visual

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [DOF çözücü seç](/index.php?title=Sketcher_SelectElementsWithDoFs/tr&action=edit&redlink=1 "Sketcher SelectElementsWithDoFs/tr (page does not exist)"): Yeşil renkte geometriyi serbestlik dereceli (DOF), yani tamamen kısıtlanmayan şekilde vurgular.[introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

- ![](/images/Sketcher_SelectConstraints.png) [Kısıtlamaları seç](/index.php?title=Sketcher_SelectConstraints/tr&action=edit&redlink=1 "Sketcher SelectConstraints/tr (page does not exist)"): Eskiz elemanının kısıtlamalarını seçer. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.png) [Kısıtlanmış öğeleri seç](/index.php?title=Sketcher_SelectElementsAssociatedWithConstraints/tr&action=edit&redlink=1 "Sketcher SelectElementsAssociatedWithConstraints/tr (page does not exist)"): Eskizin kısıtlanmış öğelerini seçer.[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectRedundantConstraints.png) [Gereksiz kısıtlamaları seç](/index.php?title=Sketcher_SelectRedundantConstraints/tr&action=edit&redlink=1 "Sketcher SelectRedundantConstraints/tr (page does not exist)"): Eskizin gereksiz kısıtlamalarını seçer. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_SelectConflictingConstraints.png) [Uyumsuz Kısıtlamaları seç](/index.php?title=Sketcher_SelectConflictingConstraints/tr&action=edit&redlink=1 "Sketcher SelectConflictingConstraints/tr (page does not exist)"): Eskizin birbiriyle tutarsız olan kısıtlamalarını seçer.[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_ArcOverlay.svg) [Show/hide circular helper for arcs](/Sketcher_ArcOverlay "Sketcher ArcOverlay"): Shows or hides the circular helpers (underlying virtual circles) for arcs in all sketches. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Show/hide B-spline information layer:

- ![](/images/Sketcher_BSplineDegree.svg) [B-spline derecesini Göster / Gizle](/index.php?title=Sketcher_BSplineDegree/tr&action=edit&redlink=1 "Sketcher BSplineDegree/tr (page does not exist)")

- ![](/images/Sketcher_BSplinePolygon.svg) [B-spline kontrol poligonunu Göster/Gizle](/index.php?title=Sketcher_BSplinePolygon/tr&action=edit&redlink=1 "Sketcher BSplinePolygon/tr (page does not exist)")

- ![](/images/Sketcher_BSplineComb.svg) [B-spline eğrilik tepelerini Göster/Gizle](/Sketcher_BSplineComb "Sketcher BSplineComb")

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [B-spline düğüm çokluğunu Göster/Gizle](/index.php?title=Sketcher_BSplineKnotMultiplicity/tr&action=edit&redlink=1 "Sketcher BSplineKnotMultiplicity/tr (page does not exist)")

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Show/hide B-spline control point weight](/Sketcher_BSplinePoleWeight "Sketcher BSplinePoleWeight"): Shows or hides the B-spline control point weight in all sketches.

- ![](/images/Sketcher_Element_Ellipse_All.png) [İç geometriyi göster/gizle](/index.php?title=Sketcher_RestoreInternalAlignmentGeometry/tr&action=edit&redlink=1 "Sketcher RestoreInternalAlignmentGeometry/tr (page does not exist)"):Seçilmiş bir elipsin, elips yayının/hiperbol/parabol veya B-spline'ın gereksiz iç geometrisini kaybeder/siler.

- ![](/images/Sketcher_SwitchVirtualSpace.png) [Sanal alana geç](/index.php?title=Sketcher_SwitchVirtualSpace/tr&action=edit&redlink=1 "Sketcher SwitchVirtualSpace/tr (page does not exist)"): Kısıtlamaları **gizlemenizi** ve onları tekrar görünür hale getirmenizi sağlar.[introduced in 0.17](/Release_notes_0.17 "Release notes 0.17") <https://forum.freecadweb.org/viewtopic.php?f=9&t=26614> bakınız.

### Obsolete tools

- ![](/images/Sketcher_Clone.png) [Klon](/Sketcher_Clone/tr "Sketcher Clone/tr"): Eskiz elemanını klonlar.[introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

- ![](/images/Sketcher_CloseShape.png) [CŞekli kapat](/index.php?title=Sketcher_CloseShape/tr&action=edit&redlink=1 "Sketcher CloseShape/tr (page does not exist)"): Bitiş noktalarını çakıştırarak kısıtlanmış kapalı bir şekil oluşturur. [introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_CreatePointFillet.svg) [Corner-preserving fillet](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet"): Creates a fillet between two non-parallel lines while preserving their corner point. Not available in 1.0 and above.

- ![](/images/Sketcher_ConnectLines.png) [Kenarları Bağla](/index.php?title=Sketcher_ConnectLines/tr&action=edit&redlink=1 "Sketcher ConnectLines/tr (page does not exist)"): Uç noktalarını çakıştırarak eskiz elemanlarını bağlar.[introduced in 0.15](/Release_notes_0.15 "Release notes 0.15")

- ![](/images/Sketcher_Copy.png) [Kopyala](/index.php?title=Sketcher_Copy/tr&action=edit&redlink=1 "Sketcher Copy/tr (page does not exist)"): Eskiz öğesini kopyalar.[introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

- ![](/images/Sketcher_Move.svg) [Taşı](/index.php?title=Sketcher_Move/tr&action=edit&redlink=1 "Sketcher Move/tr (page does not exist)"): Seçilen geometriyi, seçilen son noktayı referans alarak hareket ettirir.

- ![](/images/Sketcher_RectangularArray.png) [Dikdörtgen dizi](/index.php?title=Sketcher_RectangularArray/tr&action=edit&redlink=1 "Sketcher RectangularArray/tr (page does not exist)"): Seçili eskiz öğelerinin dizisini oluşturur.[introduced in 0.16](/Release_notes_0.16 "Release notes 0.16")

### Seçenekler

- ![](/images/Std_DlgParameter.png) [Seçenekler...](/index.php?title=Sketcher_Preferences/tr&action=edit&redlink=1 "Sketcher Preferences/tr (page does not exist)"): Seçenekler, Eskiz araçlarında tek kullanımlıktır.

## Best practices

## Öneriler

Her CAD kullanıcısı zaman içinde kendi çalışma tarzını geliştirir, ancak takip edilmesi gereken bazı genel prensipler vardır.

- Bir dizi basit eskizle çalışmak, tek bir karmaşık olandan daha kolaydır. Örneğin, temel 3D özelliği için bir ilk çizim oluşturulabilir (kalınlık ver veya bir döndürerek), ikincisi ise bir delik veya kesik içerebilir (oyuklar). Bazı detaylar, daha sonra 3D özellikler olarak gerçekleştirilmek üzere bırakılabilir. Çok fazla varsa, eskiziniz de kavislerden kaçınmayı seçebilir ve bunları 3D özellik olarak ekleyebilirsiniz.
- Her zaman kapalı bir profil oluşturun, aksi halde çiziminiz düzgün olmaz ve bir dizi açık yüz oluşturur. Bazı nesnelerin katı oluşturmaya dahil edilmesini istemiyorsanız, inşaat modu aracıyla bunları inşaat elemanlarına çevirin.
- Elle eklemeniz gereken kısıtlama sayısını sınırlandırmak için otomatik kısıtlamalar özelliğini kullanın.
- Genel bir kural olarak, önce geometrik kısıtlamaları, ardından boyutsal kısıtlamaları uygulayın ve eskizinizi en son kilitleyin. Ancak unutmayın: kurallar çiğnenmek içindir. Eskizinizle ilgili sorun yaşıyorsanız, profilinizi tamamlamadan önce birkaç nesneyi kısıtlamak faydalı olabilir.
- Mümkünse, eskizinizi kilit sınırlamasıyla başlangıç ​​noktasına (0,0) ortalayın. Çiziminiz simetrik değilse, noktalarından bir orijini bulun veya kilitleme mesafeleri için güzel yuvarlak sayılar seçin. V0.12'de, harici sınırlamalar (eskiz kenarları gibi mevcut 3D geometriye veya diğer çizimlere sınırlama) uygulanmaz. Bu, aşağıdaki eskiz geometrisini ilk eskizinize göre bulmak için ilk eskizinize göre mesafeleri elle ayarlamanız gerektiği anlamına gelir. Orijine göre (25,75) bir kilit kısıtlaması (23.47,73.02) 'den daha kolay hatırlanır.
- Uzunluk sınırlaması ile Yatay/Dikey uzunluk sınırlamaları arasında seçim yapma olanağınız varsa, ikincisini tercih edin. Yatay ve Dikey Mesafe kısıtlamaları hesaplamak daha kolaydır.
- Genel olarak, kullanılacak en iyi kısıtlamalar şunlardır: Yatay ve Dikey Kısıtlamalar; Yatay ve Dikey Uzunluk Kısıtlamaları; Noktadan Noktaya Teğet. Mümkünse, bunların kullanımından kaçının: genel Uzunluk Kısıtlaması; Kenardan Kenara Teğet; Noktayı Çizgi Kısıtlamasına Onar; Simetri Kısıtlaması.

## Kılavuzlar

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/tr&oldid=1537990>"
