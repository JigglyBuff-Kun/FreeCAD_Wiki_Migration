---
title: Borrador Atrapar
---

## Descripción

Las ![](/images/Workbench_Draft.svg) [Ambiente de Trabajo Borrador](/Draft_Workbench/es "Draft Workbench/es") herramientas permiten elegir puntos y distancias haciendo clic en la [Vista 3D](/3D_view/es "3D view/es") con el puntero, o introduciendo Coordenadas en el [panel de tareas](/Task_panel/es "Task panel/es") de la herramienta.

El encaje está disponible con la mayoría de las herramientas [Borrador](/Draft_Workbench/es "Draft Workbench/es") y [Ambiente de trabajo Arquitectura](/Arch_Workbench/es "Arch Workbench/es").

![](/images/Draft_Snap_Endpoint_example.png)

La línea atrapar perpendicularmente a otra línea

## Snap tools

These tools are available in the Draft snap toolbar and in the [Draft snap widget](/Draft_snap_widget "Draft snap widget").

Note that circular edges do not have to be full circles.

- ![](/images/Draft_Snap_Lock.svg) [Snap lock](/Draft_Snap_Lock "Draft Snap Lock"): enables or disables snapping globally.

- ![](/images/Draft_Snap_Endpoint.svg) [Snap endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint"): snaps to the endpoints of edges.

- ![](/images/Draft_Snap_Midpoint.svg) [Snap midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint"): snaps to the midpoint of edges.

- ![](/images/Draft_Snap_Center.svg) [Snap center](/Draft_Snap_Center "Draft Snap Center"): snaps to the center point of faces and circular edges, and to the Datos**Placement** point of [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") and [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart").

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

## Atrapar avanzado

- Additional snap points can be obtained by combining two snap options. For example combining [Draft Snap Ortho](/Draft_Snap_Ortho "Draft Snap Ortho") and [Draft Snap Extension](/Draft_Snap_Extension "Draft Snap Extension") will give you a snap point at the intersection of their imaginary lines.
- Snapping can be combined with [constraining](/Draft_Constrain "Draft Constrain").
- Press Q to insert a "hold point" at the current location of the cursor. You can snap to the orthogonal axes of hold points, and to the intersections of these axes. If the [Draft Snap Midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint") option is active, you can also snap to the midpoint between two hold points.
- Press ` one or more times to snap to an object that is obscured by other geometry. This is called "snap cycling". Note that you must move the cursor by a small amount in the [3D view](/3D_view "3D view") after pressing the key.

![](/images/Draft_Snap_example_cycling_1.png)

Snap cycling 1: The red rectangle was created first therefore it has snap priority. Without snap cycling you cannot snap to the green rectangle where it is overlapped by the red rectangle.

![](/images/Draft_Snap_example_cycling_2.png)

Snap cycling 2: After using the snap cycle key once the green rectangle receives snap priority. Snapping to the midpoint of the overlapped green edge is now possible.

## Notas

- Es aconsejable activar sólo los métodos de snap que realmente necesitas. Activar demasiados puede ralentizar las cosas.
- No es una buena idea tener el snap [Cerca](/index.php?title=Draft_Snap_Near/es&action=edit&redlink=1 "Draft Snap Near/es (page does not exist)") permanentemente activo.

## Preferencias

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

- La distancia máxima a la que un punto se considera punto de encaje puede cambiarse sobre la marcha pulsando [} (aumentar) o ] (disminuir). Este ajuste se almacena: **Herramientas → Editar parámetros... → BaseApp → Preferencias → Mod → Borrador → snapRange**.
- Las claves mencionadas se pueden personalizar en el [Preferencias de Borrador](/Draft_Preferences/es "Draft Preferences/es"): **Edición → Preferencias... → Borrador → Configuración de la interfaz de usuario → Atajos en el comando**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap/es&oldid=1338348>"
