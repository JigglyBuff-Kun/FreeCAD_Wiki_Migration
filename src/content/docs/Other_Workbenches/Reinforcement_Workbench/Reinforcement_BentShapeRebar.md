---
title: Reinforcement BentShapeRebar
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Reinforcement BentShapeRebar                                                                               |
| Menu location                                                                                              |
| 3D/BIM → Reinforcement tools → Bent-Shape Rebar                                                            |
| Workbenches                                                                                                |
| [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                                                                                           |
| _None_                                                                                                     |
| Introduced in version                                                                                      |
| 0.17                                                                                                       |
| See also                                                                                                   |
| _None_                                                                                                     |
|                                                                                                            |

## Description

The [Reinforcement BentShapeRebar](/Reinforcement_BentShapeRebar "Reinforcement BentShapeRebar") tool allows the user to create a set of bent reinforcing bars inside an [Arch Structure](/Arch_Structure "Arch Structure") object.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/src/assets/images/Arch_Rebar_BentShape_example.png)

Two sets of bent reinforcement bars inside an [Arch Structure](/Arch_Structure "Arch Structure")

## Usage

1. Select any face of a previously created ![](/src/assets/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.
2. Then select ![](/src/assets/images/Reinforcement_BentShapeRebar.svg) [Bent-Shape Rebar](/Reinforcement_BentShapeRebar "Reinforcement BentShapeRebar") from the rebar tools.
3. A [task panel](/Task_panel "Task panel") will pop-out on the left side of the screen as shown below.
4. Select the desired orientation.
5. Populate the inputs like 'Left Cover', 'Right Cover', 'Top Cover', 'Bottom Cover', 'Front Cover', 'Bent Angle', 'Bent Factor', 'Rounding' and 'Diameter' of the rebar.
6. Select the mode of distribution either 'Amount' or 'Spacing'.
   - If 'Spacing' is selected, a user can also opt for [custom spacing](/Reinforcement_Custom_Spacing "Reinforcement Custom Spacing").
7. Pick Selected Face is used to verify or change the face for rebar distribution.
8. Click OK or Apply to generate the rebars.
9. Click Cancel to exit the task panel.

![](/src/assets/images/BentShapeDialog.png)

Task panel for the tool

## Properties

- Data**Orientation**: It decides the orientation of the rebar (like a bottom, top, right and left).
- Data**Front Cover**: The distance between rebar and selected face.
- Data**Left Cover**: The distance between the left end of the rebar to the left face of the structure.
- Data**Right Cover**: The distance between the right end of the rebar to right face of the structure.
- Data**Bottom Cover**: The distance between rebar from the bottom face of the structure.
- Data**Top Cover**: The distance between rebar from the top face of the structure.
- Data**Anchor Length**: It is the arm's length of bent shape rebar.
- Data**Bent Angle**: It decides angle in bent shape rebar.
- Data**Amount**: The amount of rebars.
- Data**Spacing**: The distance between the axes of each bar.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement BentShapeRebar tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Rebar = makeBentShapeRebar(f_cover, b_cover, l_cover, r_cover,
                           diameter, t_cover, bentLength, bentAngle, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                           structure=None, facename=None)

```

- Creates a `Rebar` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  - If no `structure` nor `facename` are given, it will take the user selected face as input.
- `f_cover`, `b_cover`, `l_cover`, `r_cover`, and `t_cover` are inner offset distances for the rebar elements with respect to the faces of the structure. They are respectively the front, bottom, left, right, and top offsets.
- `diameter` is the diameter of the reinforcement bars inside the structure.
- `rounding` is the parameter that determines the bending radius of the center reinforcement bars.
- `bentLength` and `bentAngle` define the length of the tip of the reinforcement bars, and the bending angle from the center bars.
- `amount_spacing_check` if it is `True` it will create as many reinforcement bars as given by `amount_spacing_value`; if it is `False` it will create reinforcement bars separated by the numerical value of `amount_spacing_value`.
- `amount_spacing_value` specifies the number of reinforcement bars, or the value of the separation between them, depending on `amount_spacing_check`.
- `orientation` specifies the orientation of the rebar; it can be `"Bottom"`, `"Top"`, `"Left"`, or `"Right"`.

### Example

```
import FreeCAD, Arch, BentShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=100)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = BentShapeRebar.makeBentShapeRebar(50, 20, 20, 20,
                                          8, 40, 100, 135, 2, True, 4, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = BentShapeRebar.makeBentShapeRebar(50, 40, 20, 20,
                                           8, 20, 100, 135, 2, True, 4, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edition of the rebar

You can change the properties of the rebar with the following function:

```
editBentShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                   diameter, t_cover, bentLength, bentAngle, rounding, amount_spacing_check, amount_spacing_value, orientation,
                   structure=None, facename=None)

```

- `Rebar` is a previously created `BentShapeRebar` object.
- The other parameters are the same as required by the `makeBentShapeRebar()` function.
- `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import BentShapeRebar

BentShapeRebar.editBentShapeRebar(Rebar, 50, 20, 20, 20,
                                  12, 20, 100, 155, 2, True, 6, "Top")

BentShapeRebar.editBentShapeRebar(Rebar2, 50, 35, 20, 20,
                                  12, 35, 100, 155, 2, True, 6, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_BentShapeRebar/en&oldid=1433580>"
