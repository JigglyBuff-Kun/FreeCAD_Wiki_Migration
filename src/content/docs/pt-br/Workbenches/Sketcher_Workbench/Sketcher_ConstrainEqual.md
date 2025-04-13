---
title: Restrição de igualdade
---
|  |
| --- |
| Constraint EqualLength |
| Veja também |
| Sketch → Sketcher constraints → Constrain equal |
| Bancadas de trabalho |
| [Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br"), [PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br") |
| Atalho padrão |
| *Nenhum* |
| Introduzido na versão |
| - |
| Veja também |
| [Constraint Radius](/Sketcher_ConstrainRadius/pt-br "Sketcher ConstrainRadius/pt-br") |
|  |

## Description

The ![](/images/Sketcher_ConstrainEqual.svg) [Sketcher ConstrainEqual](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") tool constrains edges to have an equal length (lines) or curvature (other edges except [B-splines](/Sketcher_CreateBSpline "Sketcher CreateBSpline")). Selected edges must have the same type. Circles and circular arcs are of the same type (their radii are made equal), and so are ellipses and elliptical arcs (their major and minor radii are made equal).

## Utilização

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

### Modo de execução única

1. Select two or more edges of the same type.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainEqual.svg) Constrain equal** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Equal', Edge1, Edge2))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge1` and `Edge2` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainEqual/pt-br&oldid=1452443>"