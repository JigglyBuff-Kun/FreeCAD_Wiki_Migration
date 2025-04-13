---
title: Croquizador CrearRedondeo
---
|  |
| --- |
| Sketcher CreateFillet |
| Ubicación en el Menú |
| Croquizador → Geometrías del Croquizador → Crear redondeo |
| Entornos de trabajo |
| [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Atajo de teclado por defecto |
| F |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

Esta herramienta crea un redondeo entre dos líneas unidas en un punto. Activa la herramienta, selecciona ambas líneas o pulsa sobre el punto de dicha esquina.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If two straight edges connected by a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") are filleted or chamfered, the corner point can optionally be preserved. The tool then adds a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both edges. Constraints connected to the corner point are transferred to the new point object.

![](/images/SketcherCreateFilletExample.png)

## Utilización

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. Pulse el ![](/images/Sketcher_CreateFillet.svg) CrearRedondeo.
2. Elige un vértice que conecte dos líneas; o haz clic en dos líneas conectadas, la distancia a la que hagas clic del vértice establecerá el radio del filete.
3. Pulsando Esc o haciendo clic con el botón derecho del ratón se cancela o finaliza la función.

## Notes

* The construction geometry arc of a chamfer is not visible outside the sketch. It cannot be deleted without breaking the geometry of the chamfer.
* Some ([conic](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench")) curves may need to be [trimmed](/Sketcher_Trimming "Sketcher Trimming") before they can be filleted.
* The fillet radius depends on the selection method. If a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") connecting two straight edges is selected, the fillet radius is derived from the length of the shortest edge. If two edges are selected the radius is the distance from the first clicked point to the (extended) intersection of the edges.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateFillet/es&oldid=1410012>"