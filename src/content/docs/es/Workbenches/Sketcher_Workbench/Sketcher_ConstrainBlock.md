---
title: Croquizador RestringirBloque
---
|  |
| --- |
| Croquizador RestringirBloque |
| Ubicación en el Menú |
| Croquis → Restricciones de croquis → Restringir Bloque |
| Entornos de trabajo |
| [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Restringir Lock](/Sketcher_ConstrainLock/es "Sketcher ConstrainLock/es") |
|  |

## Descripción

The ![](/images/Sketcher_ConstrainBlock.svg) [Sketcher ConstrainBlock](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock") tool blocks edges in place with a single constraint. It is mainly intended for [B-splines](/Sketcher_CreateBSpline "Sketcher CreateBSpline"), which can be difficult to fully constrain otherwise.

The block constraint only affects the freely movable parts of an edge. Blocked edges can have other constraints, and applying additional constraints to a blocked edge can modify it.

## Utilización

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainBlock.svg) [Constrain block](/Sketcher_ConstrainBlock "Sketcher ConstrainBlock") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainBlock.svg) Constrain block** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Constrain → ![](/images/Sketcher_ConstrainBlock.svg) Constrain block** option from the context menu.
   * Use the keyboard shortcut: K then B.
3. The cursor changes to a cross with the tool icon.
4. Select a single edge.
5. A constraint is added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Select one or more edges.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainBlock.svg) Constrain block** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Block', Edge))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainBlock/es&oldid=1416680>"