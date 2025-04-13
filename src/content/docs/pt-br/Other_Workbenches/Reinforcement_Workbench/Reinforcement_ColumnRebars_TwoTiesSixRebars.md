---
title: Reforço de pilares com duas braçadeiras e seis barras
---
|  |
| --- |
| Reinforcement ColumnRebars |
| Menu location |
| 3D/BIM → Reinforcement tools → Column Reinforcement |
| Workbenches |
| [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| [Reinforcement ColumnRebars](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars"), [Reinforcement ColumnRebars Circular](/Reinforcement_ColumnRebars_Circular "Reinforcement ColumnRebars Circular") |
|  |

## Descrição

The [Reinforcement ColumnRebars](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars") tool allows the user to create reinforcing bars inside a Column [Arch Structure](/Arch_Structure "Arch Structure") object. This page shows an additional usage example for the tool.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

Three usage examples are available:

* [Single tie rectangular column](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars")
* [Two ties six rebars rectangular column (see below)](#Usage)
* [Circular column](/Reinforcement_ColumnRebars_Circular "Reinforcement ColumnRebars Circular")

![](/images/Arch_Rebar_ColumnReinforcement_TwoTies_example.png)

Two ties six rebars reinforcement inside a [column](/Arch_Structure "Arch Structure")

## Utilização

1. Select any face of a previously created ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.

2. Then select ![](/images/Reinforcement_ColumnRebars.svg) [Column Reinforcement](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars") from the rebar tools.

3. A dialog box will pop-out on screen as shown below.

:   ![](/images/ColumnReinforcementDialog_Ties.png)
:   Dialog Box for the Arch Rebar ColumnReinforcement tool

4. Select the TwoTiesSixRebars type of column reinforcement from drop down menu on right side.

:   ![](/images/TwoTiesColumnReinforcementDialog_Ties.png)
:   Dialog Box for the TwoTiesSixRebars ColumnReinforcement

5. Give inputs for data related to ties.

6. Click Next and the dialog box will be updated as shown below.

:   ![](/images/TwoTiesColumnReinforcementDialog_MainRebars.png)
:   Dialog Box for Main Rebars data

7. Select desired rebar type and fill data for main rebars.

8. Click OK or Apply to generate column reinforcement.

9. Click Cancel to exit the dialog box.

## Propriedades

**Ties:**

* Dados**Left Cover**: The distance between the left end of the tie to the left face of the structure.
* Dados**Right Cover**: The distance between the right end of the tie to right face of the structure.
* Dados**Top Cover**: The distance between tie from the top face of the structure.
* Dados**Bottom Cover**: The distance between tie from the bottom face of the structure.
* Dados**Offset**: The distance between tie from the top/bottom face of the structure.
* Dados**Diameter**: Diameter of the tie.
* Dados**Bent Angle**: Bent angle defines the angle at the ends of a tie.
* Dados**Extension Factor**: Extension Factor defines length of end of tie, expressed in times the diameter.
* Dados**Number**: The number of ties.
* Dados**Spacing**: The distance between the axes of each tie.
* Dados**Ties Sequence**: The sequence of ties from top to bottom with respect to front view.

**Main Rebars:** Rebars present at corners of tie

* Dados**Rebar Type**: Type of main rebars.
* Dados**Hook Orientation**: Orientation of LShaped hooks.
* Dados**Hook Extend Along**: Direction for hook extension.
* Dados**Hook Extension**: Length of hook of LShape rebars.
* Dados**Rounding**: A rounding value to be applied to the corners of the LShape rebars, expressed in times the diameter.
* Dados**Top Offset**: The distance between rebar from the top face of the structure.
* Dados**Bottom Offset**: The distance between rebar from the bottom face of the structure.
* Dados**Diameter**: Diameter of the main rebars.

## Scripting

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement ColumnRebars tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

### Create Two Ties Six Rebars

```
RebarGroup = makeTwoTiesSixRebars(
    l_cover_of_ties,
    r_cover_of_ties,
    t_cover_of_ties,
    b_cover_of_ties,
    offset_of_ties,
    bent_angle_of_ties,
    extension_factor_of_ties,
    dia_of_ties,
    number_spacing_check,
    number_spacing_value,
    dia_of_main_rebars,
    t_offset_of_rebars,
    b_offset_of_rebars,
    main_rebars_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    ties_sequence=("Tie1", "Tie2"),
    structure=None,
    facename=None,
)

```

* Creates a `RebarGroup` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  + If no `structure` nor `facename` are given, it will take the user selected face as input.
* `l_cover_of_ties`, `r_cover_of_ties`, `t_cover_of_ties`, `b_cover_of_ties` and `offset_of_ties` are inner offset distances for the tie elements with respect to the faces of the structure. They are respectively the left, right, top, bottom and front/rear offsets.
* `bent_angle_of_ties` define the angle of the tip of the reinforcement loop of tie elements.
* `extension_factor_of_ties` define the length of the tip of the reinforcement loop of tie elements, expressed in times the diameter of tie elements.
* `dia_of_ties` is the diameter of the tie elements.
* `number_spacing_check` if it is `True` it will create as many two ties sets as given by `number_spacing_value`; if it is `False` it will create two ties sets separated by the numerical value of `number_spacing_value`.
* `number_spacing_value` specifies the number of two ties sets, or the value of the separation between the sets, depending on `number_spacing_check`.
* `dia_of_main_rebars` is the diameter of the main rebars.
* `t_offset_of_rebars` and `b_offset_of_rebars` are inner offset distances for the main rebars with respect to the top and bottom faces of the structure, respectively.
* `main_rebars_type` is the type of the main rebars; it can be `"StraightRebar"` or `"LShapeRebar"`.
* `hook_orientation` specifies the orientation of LShaped hook; it can be: `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` or `"Bottom Left"`.
* `hook_extend_along` specifies direction for hook extension; it can be `"x-axis"` or `"y-axis"`.
* `l_rebar_rounding` is the parameter that determines the bending radius of the LShaped main rebars, expressed as times the diameter.
* `hook_extension` is the length of hook of LShaped rebars.
* `ties_sequence` is the sequence of ties from top to bottom with respect to front view; it can be `("Tie1", "Tie2")` or `("Tie2", "Tie1")`.

#### Exemplo

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import TwoTiesSixRebars

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

# For Straight Rebars
RebarGroup = TwoTiesSixRebars.makeTwoTiesSixRebars(
    l_cover_of_ties=40,        
    r_cover_of_ties=40,
    t_cover_of_ties=40,
    b_cover_of_ties=40,
    offset_of_ties=100,
    bent_angle_of_ties=135,
    extension_factor_of_ties=2,
    dia_of_ties=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    t_offset_of_rebars=40,
    b_offset_of_rebars=40,
    main_rebars_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    ties_sequence=("Tie1", "Tie2"),
    structure=Structure,
    facename="Face6",
)

# For LShaped Rebars with hook along x-axis
RebarGroup = TwoTiesSixRebars.makeTwoTiesSixRebars(
    l_cover_of_ties=40,
    r_cover_of_ties=40,
    t_cover_of_ties=40,
    b_cover_of_ties=40,
    offset_of_ties=100,
    bent_angle_of_ties=135,
    extension_factor_of_ties=2,
    dia_of_ties=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    main_rebars_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="x-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    ties_sequence=("Tie1", "Tie2"),
    structure=Structure,
    facename="Face6",
)

# For LShaped Rebars with hook along y-axis and tie sequence ("Tie2", "Tie1")

RebarGroup = TwoTiesSixRebars.makeTwoTiesSixRebars(
    l_cover_of_ties=40,        
    r_cover_of_ties=40,
    t_cover_of_ties=40,
    b_cover_of_ties=40,
    offset_of_ties=100,
    bent_angle_of_ties=135,
    extension_factor_of_ties=2,
    dia_of_ties=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    main_rebars_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="y-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    ties_sequence=("Tie2", "Tie1"),
    structure=Structure,
    facename="Face6",
)

```

### Edition of Two Ties Six Rebars

You can change the properties of the ties and rebars with the following function:

```
rebar_group = editTwoTiesSixRebars(
    rebar_group,
    l_cover_of_ties,
    r_cover_of_ties,
    t_cover_of_ties,
    b_cover_of_ties,
    offset_of_ties,
    bent_angle_of_ties,
    extension_factor_of_ties,
    dia_of_ties,
    number_spacing_check,
    number_spacing_value,
    dia_of_main_rebars,
    t_offset_of_rebars,
    b_offset_of_rebars,
    main_rebars_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    ties_sequence=("Tie1", "Tie2"),
    structure=None,
    facename=None,
)

```

* `rebar_group` is a previously created `ColumnReinforcement` group object.
* The other parameters are the same as required by the `makeSingleTieFourRebars()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

#### Exemplo

```
from ColumnReinforcement import TwoTiesSixRebars

rebar_group = TwoTiesSixRebars.editTwoTiesSixRebars(
    rebar_group,                                
    l_cover_of_ties=40,        
    r_cover_of_ties=40,
    t_cover_of_ties=40,
    b_cover_of_ties=40,
    offset_of_ties=100,
    bent_angle_of_ties=135,
    extension_factor_of_ties=2,
    dia_of_ties=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    main_rebars_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="x-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    ties_sequence=("Tie2", "Tie1"),
    structure=None,
    facename=None,
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars_TwoTiesSixRebars/pt-br&oldid=1433612>"