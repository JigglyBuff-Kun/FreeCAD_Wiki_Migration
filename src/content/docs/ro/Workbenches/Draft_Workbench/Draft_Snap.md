---
title: Ancorare
---

## Description

Ancorarea(Snapping) înseamnă "lipirea" următorului punct 3D pe un punct existent. Snapping este disponibil cu majoritatea instrumentelor [Draft Workbench](/Draft_Workbench "Draft Workbench") and [Arch Workbench](/Arch_Workbench "Arch Workbench") și poate fi activat și dezactivat la nivel global cu ![](/images/Draft_Snap_Lock.svg) [Draft ToggleSnap](#Options) . Fiecare locație de tip snap de mai jos poate fi activată sau dezactivată individual făcând clic pe butonul corespunzător din bara de instrumente snap. **View → Toolbars → Draft Snap**

Snapping is available with most [Draft](/Draft_Workbench "Draft Workbench") and [BIM](/BIM_Workbench "BIM Workbench") commands.

![](/images/Draft_Snap_Endpoint_example.png)

![](/images/Draft_Snap_example.jpg)

## Snap tools

These tools are available in the Draft snap toolbar and in the [Draft snap widget](/Draft_snap_widget "Draft snap widget").

Note that circular edges do not have to be full circles.

- ![](/images/Draft_Snap_Lock.svg) [Snap lock](/Draft_Snap_Lock "Draft Snap Lock"): enables or disables snapping globally.

- ![](/images/Draft_Snap_Endpoint.svg) [Snap endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint"): snaps to the endpoints of edges.

- ![](/images/Draft_Snap_Midpoint.svg) [Snap midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint"): snaps to the midpoint of edges.

- ![](/images/Draft_Snap_Center.svg) [Snap center](/Draft_Snap_Center "Draft Snap Center"): snaps to the center point of faces and circular edges, and to the Date**Placement** point of [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") and [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart").

- ![](/images/Draft_Snap_Angle.svg) [Snap angle](/Draft_Snap_Angle "Draft Snap Angle"): snaps to the special cardinal points on circular edges, at multiples of 30° and 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Snap intersection](/Draft_Snap_Intersection "Draft Snap Intersection"): snaps to the intersection of two edges.

- ![](/images/Draft_Snap_Perpendicular.svg) [Snap perpendicular](/Draft_Snap_Perpendicular "Draft Snap Perpendicular"): snaps to the perpendicular points on faces ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and edges.

- ![](/images/Draft_Snap_Extension.svg) [Snap extension](/Draft_Snap_Extension "Draft Snap Extension"): snaps to an imaginary line that extends beyond the endpoints of straight edges.

- ![](/images/Draft_Snap_Parallel.svg) [Snap parallel](/Draft_Snap_Parallel "Draft Snap Parallel"): snaps to an imaginary line parallel to straight edges.

- ![](/images/Draft_Snap_Special.svg) [Snap special](/Draft_Snap_Special "Draft Snap Special"): snaps to special points defined by the object.

- ![](/images/Draft_Snap_Near.svg) [Snap near](/Draft_Snap_Near "Draft Snap Near"): snaps to the nearest point on faces and edges.

- ![](/images/Draft_Snap_Ortho.svg) [Snap ortho](/Draft_Snap_Ortho "Draft Snap Ortho"): snaps to imaginary lines that cross the previous point at multiples of 45°.

- ![](/images/Draft_Snap_Grid.svg) [Snap grid](/Draft_Snap_Grid "Draft Snap Grid"): snaps to the intersections of grid lines.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Snap working plane](/Draft_Snap_WorkingPlane "Draft Snap WorkingPlane"): projects snap points onto the current [working plane](/Draft_SelectPlane "Draft SelectPlane").

- ![](/images/Draft_Snap_Dimensions.svg) [Snap dimensions](/Draft_Snap_Dimensions "Draft Snap Dimensions"): shows temporary X and Y dimensions.

- ![](/images/Draft_ToggleGrid.svg) [Toggle grid](/Draft_ToggleGrid "Draft ToggleGrid"): changes the visibility of the grid.

## Advanced snapping

- Additional snap points can be obtained by combining two snap options. For example combining [Draft Snap Ortho](/Draft_Snap_Ortho "Draft Snap Ortho") and [Draft Snap Extension](/Draft_Snap_Extension "Draft Snap Extension") will give you a snap point at the intersection of their imaginary lines.
- Snapping can be combined with [constraining](/Draft_Constrain "Draft Constrain").
- Press Q to insert a "hold point" at the current location of the cursor. You can snap to the orthogonal axes of hold points, and to the intersections of these axes. If the [Draft Snap Midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint") option is active, you can also snap to the midpoint between two hold points.
- Press ` one or more times to snap to an object that is obscured by other geometry. This is called "snap cycling". Note that you must move the cursor by a small amount in the [3D view](/3D_view "3D view") after pressing the key.

![](/images/Draft_Snap_example_cycling_1.png)

Snap cycling 1: The red rectangle was created first therefore it has snap priority. Without snap cycling you cannot snap to the green rectangle where it is overlapped by the red rectangle.

![](/images/Draft_Snap_example_cycling_2.png)

Snap cycling 2: After using the snap cycle key once the green rectangle receives snap priority. Snapping to the midpoint of the overlapped green edge is now possible.

## Notes

- Multiple snap options can be active at the same time, but it is advisable to only activate the snap options you really need. Activating too many can slow things down.
- 1.0 and below: It is not a good idea to have [Draft Snap Near](/Draft_Snap_Near "Draft Snap Near") permanently active as it takes precedence over many other snap options.
- [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): Is is possible to have [Draft Snap Near](/Draft_Snap_Near "Draft Snap Near") permanently active, but it does mean you have to move the mouse more, and point the mouse more accurately, for other on-object snaps.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

## Opțiuni

- ![](/images/Draft_Snap_Lock.svg) [Lock](/Draft_Snap_Lock "Draft Snap Lock"): activează global ancorarea on/off

* Anumite locații de fixare suplimentare pot fi obținute prin combinarea a două locații snap, cum ar fi extensia orto +, care vă va oferi un punct de fixare la intersecția liniilor lor imaginare.
* Alte locații, mai complexe, pot fi obținute prin utilizarea [constraining](/Draft_Constrain "Draft Constrain") (by pressing SHIFT or X or Y or Z while drawing).
* apăsarea tastei L în timpul desenării, blochează unghiul curent al segmentului de linie care este desenat.
* Distanta maxima la care un punct este capturat

și un amplasament de captură este specificat în [preferences](/Draft_Preferences "Draft Preferences"), și poate de altfel să fie schimbat din zbor apăsând tastele [ or ].

- Apăsând Q în timpul desenării, introduce un punct de întrerupere la poziția curentă a cursorului. Veți putea apoi să vă aliniați ortogonal acestor puncte de atașare și intersecții ale axelor lor ortogonale. Dacă este activată ancorarea la punctul median, puteți ancora, de asemenea, la jumătatea distanței dintre două puncte de întrerupere. [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap/ro&oldid=1565073>"
