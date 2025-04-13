---
title: Sketcher Racordare unghi
---
|  |
| --- |
| Sketcher CreateFillet |
| poziția meniului |
| Sketch → Sketcher geometries → Create fillet |
| Ateliere |
| [Sketcher](/Sketcher_Workbench/ro "Sketcher Workbench/ro") |
| scurtătură |
| F |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Acest instrument creează o racordarea între două linii care se unesc într-un punct. Activați instrumentul, apoi selectați ambele linii sau click pe punctul de colț.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If two straight edges connected by a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") are filleted or chamfered, the corner point can optionally be preserved. The tool then adds a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both edges. Constraints connected to the corner point are transferred to the new point object.

![](/images/SketcherCreateFilletExample.png)

## Cum se folosește

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

* Selectați vertex-ul care conectează cele două linii; sau click pe cele două linii conectate, distanța la care se face click determină raza racordării.
* Apăsați Esc sau click dreapta pe butonul mouse-ului și abandonați sau terminați acestă funcție.

## Notes

* The construction geometry arc of a chamfer is not visible outside the sketch. It cannot be deleted without breaking the geometry of the chamfer.
* Some ([conic](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench")) curves may need to be [trimmed](/Sketcher_Trimming "Sketcher Trimming") before they can be filleted.
* The fillet radius depends on the selection method. If a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") connecting two straight edges is selected, the fillet radius is derived from the length of the shortest edge. If two edges are selected the radius is the distance from the first clicked point to the (extended) intersection of the edges.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateFillet/ro&oldid=1413870>"