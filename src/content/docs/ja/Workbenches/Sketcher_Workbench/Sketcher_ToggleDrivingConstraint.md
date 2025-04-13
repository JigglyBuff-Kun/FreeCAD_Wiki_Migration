---
title: スケッチ・ワークベンチ ToggleDrivingConstraint
---
|  |
| --- |
| Sketcher ToggleDrivingConstraint |
| Menu location |
| Sketch → Sketcher constraints → Toggle driving/reference constraint |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| K X |
| Introduced in version |
| 0.16 |
| See also |
| [Sketcher ToggleActiveConstraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint") |
|  |

## Description

The ![](/images/Sketcher_ToggleDrivingConstraint.svg) [Sketcher ToggleDrivingConstraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") tool either toggles the [dimensional constraint creation tools](/Sketcher_Workbench#Sketcher_CompDimensionTools "Sketcher Workbench") between driving and reference mode, or toggles selected dimensional constraints between those modes.

Contrary to driving constraints, reference constraints do not constrain the sketch, their value depends on other constraints, they are driven. They can be useful to verify measurements. They can be used in [expressions](/Expressions "Expressions"), but not in the sketch itself.

![](/images/Sketcher_ToggleConstraint_example.png)

A driving horizontal distance constraint (50 mm), a driving vertical distance constraint (30 mm) and a driving angle constraint (75°) were set to define the profile; a reference dimension was added on the slanted line segment to know its length (31.0583 mm).

## Usage

### Toggle tools

1. Make sure no dimensional constraints have been selected.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ToggleDrivingConstraint.svg) [Toggle driving/reference constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ToggleDrivingConstraint.svg) Toggle driving/reference constraint** option from the menu.
   * Use the keyboard shortcut: K then X.
3. The mode of the dimensional constraint creation tools is toggled:
   * In driving mode their menu and toolbar icons are red, and they create driving constraints (default [color](/Sketcher_Preferences#Appearance "Sketcher Preferences") red). The icon of this tool is then: ![](/images/Sketcher_ToggleConstraint.svg).
   * In reference mode their menu and toolbar icons are blue, and they create reference constraints (default color blue). The icon of this tool is then: ![](/images/Sketcher_ToggleConstraint_Driven.svg).

### Toggle constraints

1. Select one or more dimensional constraints.
2. Invoke the tool as described above, or with one of the following additional options:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ToggleDrivingConstraint.svg) Toggle driving/reference constraint** option from the context menu.
   * Right-click in the **Constraints** section of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog") and select the **Toggle to/from reference** option from the context menu.
3. The selected constraints are changed from driving to reference mode or vice versa. Their appearance changes accordingly.
4. The mode of the dimensional constraint creation tools is not changed.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleDrivingConstraint/ja&oldid=1531580>"