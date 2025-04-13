---
title: Filete
---

|                                                                  |
| ---------------------------------------------------------------- |
| Sketcher CreateFillet                                            |
| Veja também                                                      |
| Sketch → Sketcher geometries → Create fillet                     |
| Bancadas de trabalho                                             |
| [Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br") |
| Atalho padrão                                                    |
| F                                                                |
| Introduzido na versão                                            |
| -                                                                |
| Veja também                                                      |
| _Nenhum_                                                         |
|                                                                  |

## Description

The ![](/images/Sketcher_CreateFillet.svg) [Sketcher CreateFillet](/Sketcher_CreateFillet "Sketcher CreateFillet") tool creates a fillet between two non-parallel edges. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The tool can also create a chamfer.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If two straight edges connected by a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") are filleted or chamfered, the corner point can optionally be preserved. The tool then adds a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both edges. Constraints connected to the corner point are transferred to the new point object.

![](/images/SketcherCreateFilletExample.png)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

1. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_CreateFillet.svg) [Create fillet](/Sketcher_CreateFillet "Sketcher CreateFillet") button.
   - Select the **Sketcher → Sketcher tools → ![](/images/Sketcher_CreateFillet.svg) Create fillet** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_CreateFillet.svg) Create fillet** option from the context menu.
   - Use the keyboard shortcut: G then F, then F.
2. If there is a previous selection it is cleared. The tool does not accept a pre-selection.
3. The cursor changes to a cross with the current tool mode icon.
4. The **Fillet/Chamfer parameters** section ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
5. Optionally press the U key or uncheck the **Preserve corner** checkbox to disable that option. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
6. Optionally press the M key or select from the dropdown list in the parameters section to change the tool mode:
   - ![](/images/Sketcher_CreateFillet.svg) **Fillet**
   - ![](/images/Sketcher_CreateChamfer.svg) **Chamfer**
7. Do one of the following:
   - Pick a point with a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") connecting two non-parallel straight edges.
   - Pick two non-parallel edges. Either edge can be a straight [line](/Sketcher_CreateLine "Sketcher CreateLine"), an [arc](/Sketcher_CreateArc "Sketcher CreateArc"), an [arc of ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse"), an [arc of hyperbola](/Sketcher_CreateArcOfHyperbola "Sketcher CreateArcOfHyperbola") or an [arc of parabola](/Sketcher_CreateArcOfParabola "Sketcher CreateArcOfParabola"). [B-splines](/Sketcher_Workbench#Sketcher_CompCreateBSpline "Sketcher Workbench") are currently not supported.
8. The fillet or chamfer is created, including a point object in case of a preserved corner. For a chamfer a construction geometry arc is also created.
9. This tool always runs in continue mode: optionally keep selecting points and/or edges.
10. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

## Notes

- The construction geometry arc of a chamfer is not visible outside the sketch. It cannot be deleted without breaking the geometry of the chamfer.
- Some ([conic](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench")) curves may need to be [trimmed](/Sketcher_Trimming "Sketcher Trimming") before they can be filleted.
- The fillet radius depends on the selection method. If a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") connecting two straight edges is selected, the fillet radius is derived from the length of the shortest edge. If two edges are selected the radius is the distance from the first clicked point to the (extended) intersection of the edges.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateFillet/pt-br&oldid=1413873>"
