---
title: Constraint Radius
---
|  |
| --- |
| Constraint Radius |
| Localização do menu |
| Sketch → Sketcher constraints → Constrain radius |
| Bancadas de trabalho |
| [Sketcher](/Sketcher_Workbench/pt "Sketcher Workbench/pt"), [PartDesign](/PartDesign_Workbench/pt "PartDesign Workbench/pt") |
| Atalho padrão |
| *Nenhum* |
| Introduzido na versão |
| - |
| Veja também |
| [Constraint Distance](/Sketcher_ConstrainDistance/pt "Sketcher ConstrainDistance/pt"), [Constraint Horizontal](/Sketcher_ConstrainHorizontal/pt "Sketcher ConstrainHorizontal/pt"), [Constraint Vertical](/Sketcher_ConstrainVertical/pt "Sketcher ConstrainVertical/pt") |
|  |

## Description

The ![](/images/Sketcher_ConstrainRadius.svg) [Sketcher ConstrainRadius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius") tool fixes the radius of circles, arcs and [B-spline weight circles](/Sketcher_CreateBSpline#Notes "Sketcher CreateBSpline").

![](/images/Sketcher_ConstrainRadius_example.png)

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/Sketcher_ConstrainRadius.svg) Constrain radius** option from the dropdown.
   * If this preference has a different value (and in 0.21 and below): press the ![](/images/Sketcher_ConstrainRadius.svg) [Constrain radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainRadius.svg) Constrain radius** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/images/Sketcher_ConstrainRadius.svg) Constrain radius** option from the context menu.
   * Use the keyboard shortcut: K then R.
3. For further steps see [Sketcher ConstrainRadiam](/Sketcher_ConstrainRadiam#Continue_mode "Sketcher ConstrainRadiam").

### Run-once mode

See [Sketcher ConstrainRadiam](/Sketcher_ConstrainRadiam#Run-once_mode "Sketcher ConstrainRadiam").

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `ArcOrCircle`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadius/pt&oldid=1461124>"