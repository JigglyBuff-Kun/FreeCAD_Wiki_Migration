---
title: Vazba Rovnoběžnosti
---
|  |
| --- |
| Constraint Parallel |
| Umístění Menu |
| Sketch → Sketcher constraints → Constrain parallel |
| Pracovní stoly |
| [Sketcher](/Sketcher_Workbench/cs "Sketcher Workbench/cs"), [PartDesign](/PartDesign_Workbench/cs "PartDesign Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Constraint Vertical](/Sketcher_ConstrainVertical/cs "Sketcher ConstrainVertical/cs"), [Constraint Horizontal](/Sketcher_ConstrainHorizontal/cs "Sketcher ConstrainHorizontal/cs") |
|  |

## Description

#### Popis

Vazba rovnoběžnosti zajistí, že dvě vybrané přímky nebo hrany jsou vzájemně rovnoběžné.

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainParallel.svg) [Constrain parallel](/Sketcher_ConstrainParallel "Sketcher ConstrainParallel") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainParallel.svg) Constrain parallel** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Constrain → ![](/images/Sketcher_ConstrainParallel.svg) Constrain parallel** option from the context menu.
   * Use the keyboard shortcut: P.
3. The cursor changes to a cross with the tool icon.
4. Select two lines.
5. A constraint is added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Select two or more lines. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Points can be included in the selection, but will be ignored.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainParallel.svg) Constrain parallel** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Parallel', Line1, Line2))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Line1` and `Line2` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainParallel/cs&oldid=1404980>"