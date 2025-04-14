---
title: Reinforcement StirrupRebar
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Reinforcement StirrupRebar                                                                                 |
| Menu location                                                                                              |
| 3D/BIM → Reinforcement tools → Stirrup                                                                     |
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

The [Reinforcement StirrupRebar](/Reinforcement_StirrupRebar "Reinforcement StirrupRebar") tool allows the user to create a set of stirrup reinforcing bars inside an [Arch Structure](/Arch_Structure "Arch Structure") object.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Arch_Rebar_Stirrup_example.png)

One set of stirrup reinforcement bars inside an [Arch Structure](/Arch_Structure "Arch Structure") object

## Usage

1. Select any face of a previously created ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.
2. Then select ![](/images/Reinforcement_StirrupRebar.svg) [Stirrup](/Reinforcement_StirrupRebar "Reinforcement StirrupRebar") from the rebar tools.
3. A [task panel](/Task_panel "Task panel") will pop-out on the left side of the screen as shown below.
4. Select the desired orientation.
5. Populate the inputs like 'Left Cover', 'Right Cover', 'Top Cover', 'Bottom Cover', 'Front Cover', 'Bent Angle', 'Bent Factor', 'Rounding' and 'Diameter' of the rebar.
6. Select the mode of distribution either 'Amount' or 'Spacing'.
   - If 'Spacing' is selected, a user can also opt for [custom spacing](/Reinforcement_Custom_Spacing "Reinforcement Custom Spacing").
7. Pick Selected Face is used to verify or change the face for rebar distribution.
8. Click OK or Apply to generate the rebars.
9. Click Cancel to exit the task panel.

![](/images/StirrupDialog.png)

Task panel for the tool

## Properties

- Data**Front Cover**: The distance between rebar and selected face.
- Data**Right Cover**: The distance between the right end of the rebar to right face of the structure.
- Data**Left Cover**: The distance between the left end of the rebar to the left face of the structure.
- Data**Bottom Cover**: The distance between rebar from the bottom face of the structure.
- Data**Top Cover**: The distance between rebar from the top face of the structure.
- Data**Bent Angle**: Bent angle defines the angle at the ends of a stirrup.
- Data**Bent Factor**: Bent Factor defines length of stirrup end.
- Data**Amount**: The amount of rebars.
- Data**Spacing**: The distance between the axes of each bar.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement StirrupRebar tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Rebar = makeStirrup(l_cover, r_cover, t_cover, b_cover, f_cover,
                    bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
                    structure=None, facename=None)

```

- Creates a `Rebar` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  - If no `structure` nor `facename` are given, it will take the user selected face as input.
- `l_cover`, `r_cover`, `t_cover`, `b_cover`, and `f_cover` are inner offset distances for the rebar elements with respect to the faces of the structure. They are respectively the left, right, top, bottom, and front offsets.
- `diameter` is the diameter of the reinforcement bars inside the structure.
- `rounding` is the parameter that determines the bending radius of the reinforcement bars as they make a loop.
- `bentLength` and `bentAngle` define the length and angle of the tip of the reinforcement loop.
- `amount_spacing_check` if it is `True` it will create as many reinforcement loops as given by `amount_spacing_value`; if it is `False` it will create reinforcement loops separated by the numerical value of `amount_spacing_value`.
- `amount_spacing_value` specifies the number of reinforcement loops, or the value of the separation between them, depending on `amount_spacing_check`.

### Example

```
import Draft, Arch, Stirrup

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = Stirrup.makeStirrup(20, 20, 20, 20, 20,
                            115, 4, 8, 2, True, 10, Structure, "Face6")

```

### Edition of the rebar

You can change the properties of the rebar with the following function:

```
editStirrup(Rebar, l_cover, r_cover, t_cover, b_cover, f_cover,
            bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
            structure=None, facename=None)

```

- `Rebar` is a previously created `StirrupRebar` object.
- The other parameters are the same as required by the `makeStirrup()` function.
- `structure` and `facename` may be omitted so that the rebar stays in the original structure.

```
import Stirrup

Stirrup.editStirrup(Rebar, 20, 20, 20, 20, 50,
                    100, 4, 14, 8, True, 8)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_StirrupRebar/en&oldid=1433671>"
