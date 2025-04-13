---
title: Constraint EqualLength
---
|  |
| --- |
| Constraint EqualLength |
| Localização do menu |
| Sketch → Sketcher constraints → Constrain equal |
| Bancadas de trabalho |
| [Sketcher](/Sketcher_Workbench/pt "Sketcher Workbench/pt"), [PartDesign](/PartDesign_Workbench/pt "PartDesign Workbench/pt") |
| Atalho padrão |
| *Nenhum* |
| Introduzido na versão |
| - |
| Veja também |
| [Constraint Radius](/Sketcher_ConstrainRadius/pt "Sketcher ConstrainRadius/pt") |
|  |

## Description

The ![](/images/Sketcher_ConstrainEqual.svg) [Sketcher ConstrainEqual](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") tool constrains edges to have an equal length (lines) or curvature (other edges except [B-splines](/Sketcher_CreateBSpline "Sketcher CreateBSpline")). Selected edges must have the same type. Circles and circular arcs are of the same type (their radii are made equal), and so are ellipses and elliptical arcs (their major and minor radii are made equal).

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainEqual.svg) [Constrain equal](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainEqual.svg) Constrain equal** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Constrain → ![](/images/Sketcher_ConstrainEqual.svg) Constrain equal** option from the context menu.
   * Use the keyboard shortcut: E.
3. The cursor changes to a cross with the tool icon.
4. Select two edges of the same type.
5. A constraint is added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Select two or more edges of the same type.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainEqual.svg) Constrain equal** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Equal', Edge1, Edge2))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge1` and `Edge2` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainEqual/pt&oldid=1405072>"