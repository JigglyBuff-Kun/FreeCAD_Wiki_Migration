---
title: Reinforcement UShapeRebar
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Reinforcement UShapeRebar                                                                                  |
| Menu location                                                                                              |
| 3D/BIM → Reinforcement tools → U-Shape Rebar                                                               |
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

The [Reinforcement UShapeRebar](/Reinforcement_UShapeRebar "Reinforcement UShapeRebar") tool allows the user to create a set of U-shaped reinforcing bars inside an [Arch Structure](/Arch_Structure "Arch Structure") object.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/src/assets/images/Arch_Rebar_UShape_example.png)

Two sets of U-shaped reinforcement bars inside an [Arch Structure](/Arch_Structure "Arch Structure")

## Usage

1. Select any face of a previously created ![](/src/assets/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.
2. Then select ![](/src/assets/images/Reinforcement_UShapeRebar.svg) [U-Shape Rebar](/Reinforcement_UShapeRebar "Reinforcement UShapeRebar") from the rebar tools.
3. A [task panel](/Task_panel "Task panel") will pop-out on the left side of the screen as shown below.
4. Select the desired orientation.
5. Populate the inputs like 'Left Cover', 'Right Cover', 'Top Cover', 'Bottom Cover', 'Front Cover', 'Bent Angle', 'Bent Factor', 'Rounding' and 'Diameter' of the rebar.
6. Select the mode of distribution either 'Amount' or 'Spacing'.
   - If 'Spacing' is selected, a user can also opt for [custom spacing](/Reinforcement_Custom_Spacing "Reinforcement Custom Spacing").
7. Pick Selected Face is used to verify or change the face for rebar distribution.
8. Click OK or Apply to generate the rebars.
9. Click Cancel to exit the task panel.

![](/src/assets/images/UShapeDialog.png)

Task panel for the tool

## Properties

- Data**Orientation**: It decides the orientation of the rebar (like a bottom, top, right and left).
- Data**Front Cover**: The distance between rebar and selected face.
- Data**Right Cover**: The distance between the right end of the rebar to right face of the structure.
- Data**Left Cover**: The distance between the left end of the rebar to the left face of the structure.
- Data**Bottom Cover**: The distance between rebar from the bottom face of the structure.
- Data**Top Cover**: The distance between rebar from the top face of the structure.
- Data**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times the diameter.
- Data**Amount**: The amount of rebars.
- Data**Spacing**: The distance between the axes of each bar.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement UShapeRebar tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Rebar = makeUShapeRebar(f_cover, b_cover, r_cover, l_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                        structure=None, facename=None)

```

- Creates a `Rebar` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  - If no `structure` nor `facename` are given, it will take the user selected face as input.
- `f_cover`, `b_cover`, `r_cover`, `l_cover`, and `t_cover` are inner offset distances for the rebar elements with respect to the faces of the structure. They are respectively the front, bottom, right, left, and top offsets.
- `diameter` is the diameter of the reinforcement bars inside the structure.
- `rounding` is the parameter that determines the bending radius of the reinforcement bars.
- `amount_spacing_check` if it is `True` it will create as many reinforcement bars as given by `amount_spacing_value`; if it is `False` it will create reinforcement bars separated by the numerical value of `amount_spacing_value`.
- `amount_spacing_value` specifies the number of reinforcement bars, or the value of the separation between them, depending on `amount_spacing_check`.
- `orientation` specifies the orientation of the rebar; it can be `"Bottom"`, `"Top"`, `"Right"`, or `"Left"`.

### Example

```
import FreeCAD, Arch, UShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = UShapeRebar.makeUShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = UShapeRebar.makeUShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edition of the rebar

You can change the properties of the rebar with the following function:

```
editUShapeRebar(Rebar, f_cover, b_cover, r_cover, l_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

- `Rebar` is a previously created `UShapeRebar` object.
- The other parameters are the same as required by the `makeUShapeRebar()` function.
- `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import UShapeRebar

UShapeRebar.editUShapeRebar(Rebar, 50, 50, 20, 20,
                            16, 20, 5, True, 5, "Top")

UShapeRebar.editUShapeRebar(Rebar2, 70, 50, 20, 20,
                            16, 70, 5, True, 5, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_UShapeRebar/en&oldid=1433693>"
