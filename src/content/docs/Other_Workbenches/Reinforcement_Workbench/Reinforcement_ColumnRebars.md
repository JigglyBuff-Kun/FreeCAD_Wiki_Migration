---
title: Reinforcement ColumnRebars
---

|                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Reinforcement ColumnRebars                                                                                                                                                                                                                                   |
| Menu location                                                                                                                                                                                                                                                |
| 3D/BIM → Reinforcement tools → Column Reinforcement                                                                                                                                                                                                          |
| Workbenches                                                                                                                                                                                                                                                  |
| [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench"), [BIM](/BIM_Workbench "BIM Workbench")                                                                                                                                                   |
| Default shortcut                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                       |
| Introduced in version                                                                                                                                                                                                                                        |
| 0.19                                                                                                                                                                                                                                                         |
| See also                                                                                                                                                                                                                                                     |
| [Reinforcement ColumnRebars TwoTiesSixRebars](/Reinforcement_ColumnRebars_TwoTiesSixRebars "Reinforcement ColumnRebars TwoTiesSixRebars"), [Reinforcement ColumnRebars Circular](/Reinforcement_ColumnRebars_Circular "Reinforcement ColumnRebars Circular") |
|                                                                                                                                                                                                                                                              |

## Description

The [Reinforcement ColumnRebars](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars") tool allows the user to create reinforcing bars inside a Column [Arch Structure](/Arch_Structure "Arch Structure") object.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

Three usage examples are available:

- [Single tie rectangular column (see below)](#Usage)
- [Two ties six rebars rectangular column](/Reinforcement_ColumnRebars_TwoTiesSixRebars "Reinforcement ColumnRebars TwoTiesSixRebars")
- [Circular column](/Reinforcement_ColumnRebars_Circular "Reinforcement ColumnRebars Circular")

![](/images/Arch_Rebar_ColumnReinforcement_example.png)

Single tie reinforcement inside a [column](/Arch_Structure "Arch Structure")

## Usage

1. Select any face of a previously created ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.

2. Then select ![](/images/Reinforcement_ColumnRebars.svg) [Column Reinforcement](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars") from the rebar tools.

3. A dialog box will pop-out on screen as shown below.

: ![](/images/ColumnReinforcementDialog_Ties.png)
: Dialog Box for the Arch Rebar ColumnReinforcement tool

4. Select the desired type of column reinforcement.

5. Give inputs for data related to ties.

6. Click Next and the dialog box will be updated as shown below.

: ![](/images/ColumnReinforcementDialog_MainRebars.png)
: Dialog Box for Main Rebars data

7. Select desired rebar type and fill data for main rebars.

8. Click Next and the dialog box will be updated as shown below.

: ![](/images/ColumnReinforcementDialog_XDirRebars.png)
: Dialog Box for XDirection Rebars data

9. Select desired rebar type and fill data for xdirection rebars.

10. Click Next and the dialog box will be updated as shown below.

: ![](/images/ColumnReinforcementDialog_YDirRebars.png)
: Dialog Box for YDirection Rebars data

11. Select desired rebar type and fill data for ydirection rebars.

12. Click OK or Apply to generate column reinforcement.

13. Click Cancel to exit the dialog box.

## Properties

**Ties:**

- Data**Left Cover**: The distance between the left end of the tie to the left face of the structure.
- Data**Right Cover**: The distance between the right end of the tie to right face of the structure.
- Data**Top Cover**: The distance between tie from the top face of the structure.
- Data**Bottom Cover**: The distance between tie from the bottom face of the structure.
- Data**Offset**: The distance between tie from the top/bottom face of the structure.
- Data**Diameter**: Diameter of the tie.
- Data**Bent Angle**: Bent angle defines the angle at the ends of a tie.
- Data**Extension Factor**: Extension Factor defines length of end of tie, expressed in times the diameter.
- Data**Number**: The number of ties.
- Data**Spacing**: The distance between the axes of each tie.

**Main Rebars:** Rebars present at corners of tie

- Data**Rebar Type**: Type of main rebars.
- Data**Hook Orientation**: Orientation of LShaped hooks.
- Data**Hook Extend Along**: Direction for hook extension.
- Data**Hook Extension**: Length of hook of LShape rebars.
- Data**Rounding**: A rounding value to be applied to the corners of the LShape rebars, expressed in times the diameter.
- Data**Top Offset**: The distance between rebar from the top face of the structure.
- Data**Bottom Offset**: The distance between rebar from the bottom face of the structure.
- Data**Diameter**: Diameter of the main rebars.

**XDir Secondary Rebars:** Rebars along x-direction except main rebars

- Data**Rebar Type**: Type of x-direction rebars.
- Data**Hook Orientation**: Orientation of LShaped hooks.
- Data**Hook Extension**: Length of hook of LShape rebars.
- Data**Rounding**: A rounding value to be applied to the corners of the LShape rebars, expressed in times the diameter.
- Data**Top Offset**: The distance between rebar from the top face of the structure.
- Data**Bottom Offset**: The distance between rebar from the bottom face of the structure.
- Data**Number#Diameter**: Number#Diameter set of the x-direction rebars.

**YDir Secondary Rebars:** Rebars along y-direction except main rebars

- Data**Rebar Type**: Type of y-direction rebars.
- Data**Hook Orientation**: Orientation of LShaped hooks.
- Data**Hook Extension**: Length of hook of LShape rebars.
- Data**Rounding**: A rounding value to be applied to the corners of the LShape rebars, expressed in times the diameter.
- Data**Top Offset**: The distance between rebar from the top face of the structure.
- Data**Bottom Offset**: The distance between rebar from the bottom face of the structure.
- Data**Number#Diameter**: Number#Diameter set of the y-direction rebars.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement ColumnRebars tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

### Create Single Tie Four Rebars

```
RebarGroup = makeSingleTieFourRebars(
    l_cover_of_tie,
    r_cover_of_tie,
    t_cover_of_tie,
    b_cover_of_tie,
    offset_of_tie,
    bent_angle,
    extension_factor,
    dia_of_tie,
    number_spacing_check,
    number_spacing_value,
    dia_of_rebars,
    t_offset_of_rebars,
    b_offset_of_rebars,
    rebar_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    structure=None,
    facename=None,
).rebar_group

```

- Creates a `RebarGroup` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  - If no `structure` nor `facename` are given, it will take the user selected face as input.
- `l_cover_of_tie`, `r_cover_of_tie`, `t_cover_of_tie`, `b_cover_of_tie` and `offset_of_tie` are inner offset distances for the tie elements with respect to the faces of the structure. They are respectively the left, right, top, bottom and front/rear offsets.
- `bent_angle` define the angle of the tip of the reinforcement loop.
- `extension_factor` define the length of the tip of the reinforcement loop, expressed in times the diameter.
- `dia_of_tie` is the diameter of the ties.
- `number_spacing_check` if it is `True` it will create as many ties as given by `number_spacing_value`; if it is `False` it will create ties separated by the numerical value of `number_spacing_value`.
- `number_spacing_value` specifies the number of ties, or the value of the separation between them, depending on `number_spacing_check`.
- `dia_of_rebars` is the diameter of the main rebars.
- `t_offset_of_rebars` and `b_offset_of_rebars` are inner offset distances for the main rebars with respect to the top and bottom faces of the structure, respectively.
- `rebar_type` is the type of the main rebars; it can be `"StraightRebar"` or `"LShapeRebar"`.
- `hook_orientation` specifies the orientation of LShaped hook; it can be: `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` or `"Bottom Left"`.
- `hook_extend_along` specifies direction for hook extension; it can be `"x-axis"` or `"y-axis"`.
- `l_rebar_rounding` is the parameter that determines the bending radius of the LShaped main rebars, expressed as times the diameter.
- `hook_extension` is the length of hook of LShaped rebars.

#### Example

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import SingleTie

# It doesn't work if the structure is not based on a face.
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

# For Straight Rebars

RebarGroup = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=40,
    b_offset_of_rebars=40,
    rebar_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    structure=Structure,
    facename="Face6",
).rebar_group

# For LShaped Rebars with hook along x-axis

RebarGroup = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    rebar_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="x-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    structure=Structure,
    facename="Face6",
).rebar_group

# For LShaped Rebars with hook along y-axis

RebarGroup = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    rebar_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="y-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    structure=Structure,
    facename="Face6",
).rebar_group

```

### Create Single Tie Multiple Rebars

```
RebarGroup = makeSingleTieMultipleRebars(
    l_cover_of_tie,
    r_cover_of_tie,
    t_cover_of_tie,
    b_cover_of_tie,
    offset_of_tie,
    bent_angle,
    extension_factor,
    dia_of_tie,
    number_spacing_check,
    number_spacing_value,
    dia_of_main_rebars,
    main_rebars_t_offset,
    main_rebars_b_offset,
    main_rebars_type="StraightRebar",
    main_hook_orientation="Top Inside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=None,
    main_hook_extension=None,
    sec_rebars_t_offset=None,
    sec_rebars_b_offset=None,
    sec_rebars_number_diameter=None,
    sec_rebars_type=("StraightRebar", "StraightRebar"),
    sec_hook_orientation=("Top Inside", "Top Inside"),
    l_sec_rebar_rounding=None,
    sec_hook_extension=None,
    structure=None,
    facename=None,
)

```

- Creates a `RebarGroup` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  - If no `structure` nor `facename` are given, it will take the user selected face as input.
- `l_cover_of_tie`, `r_cover_of_tie`, `t_cover_of_tie`, `b_cover_of_tie` and `offset_of_tie` are inner offset distances for the tie elements with respect to the faces of the structure. They are respectively the left, right, top, bottom and front/rear offsets.
- `bent_angle` define the angle of the tip of the reinforcement loop.
- `extension_factor` define the length of the tip of the reinforcement loop, expressed in times the diameter.
- `dia_of_tie` is the diameter of the ties.
- `number_spacing_check` if it is `True` it will create as many ties as given by `number_spacing_value`; if it is `False` it will create ties separated by the numerical value of `number_spacing_value`.
- `number_spacing_value` specifies the number of ties, or the value of the separation between them, depending on `number_spacing_check`.
- `dia_of_main_rebars` is the diameter of the main rebars.
- `main_rebars_t_offset` and `main_rebars_b_offset` are inner offset distances for the main rebars with respect to the top and bottom faces of the structure, respectively.
- `main_rebars_type` is the type of the main rebars; it can be `"StraightRebar"` or `"LShapeRebar"`.
- `main_hook_orientation` specifies the orientation of main LShaped hook; it can be: `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` or `"Bottom Left"`.
- `main_hook_extend_along` specifies direction for main hook extension; it can be `"x-axis"` or `"y-axis"`.
- `l_main_rebar_rounding` is the parameter that determines the bending radius of the LShaped main rebars, expressed as times the diameter.
- `main_hook_extension` is the length of hook of main LShaped rebars.
- `sec_rebars_t_offset` and `sec_rebars_b_offset` are tuples (xdir_rebars_t_offset, ydir_rebars_t_offset) and (xdir_rebars_b_offset, ydir_rebars_b_offset) respectively, that defines inner offset distances for the secondary x-direction and y-direction rebars with respect to the top and bottom faces of the structure, respectively.
- `sec_rebars_number_diameter` is a tuple (xdir_rebars_number_diameter, ydir_rebars_number_diameter) that defines number#diameter set of the secondary x-direction and y-direction rebars, respectively.
- `sec_rebars_type` is a tuple (xdir_rebars_type, ydir_rebars_type) that defines the type of secondary x-direction and y-direction rebars ,respectively; it can have `"StraightRebar"` or `"LShapeRebar"` as rebar type.
- `sec_hook_orientation` is a tuple (xdir_hook_orientation, ydir_hook_orientation) that defines the orientation of secondary x-direction and y-direction LShaped hook; it can have `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` or `"Bottom Left"` as hook_orientation.
- `l_sec_rebar_rounding` is a tuple (l_xdir_rebar_rounding, l_ydir_rebar_rounding) that determines the bending radius of the LShaped secondary x-direction and y-direction LShaped rebars, expressed as times the diameter of x-direction and y-direction LShaped rebars, respectively.
- `sec_hook_extension` is a tuple (xdir_hook_extension, ydir_hook_extension) that defines the length of hook of secondary x-direction and y-direction LShaped rebars.

#### Example

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import SingleTieMultipleRebars

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

RebarGroup = SingleTieMultipleRebars.makeSingleTieMultipleRebars(
    l_cover_of_tie=40,
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    main_rebars_t_offset=-40,
    main_rebars_b_offset=-40,
    main_rebars_type="LShapeRebar",
    main_hook_orientation="Top Outside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=2,
    main_hook_extension=40,
    sec_rebars_t_offset=(-40, -40),
    sec_rebars_b_offset=(-40, -40),
    sec_rebars_number_diameter=("2#20mm+1#16mm+2#20mm", "1#20mm+1#16mm+1#20mm"),
    sec_rebars_type=("LShapeRebar", "LShapeRebar"),
    sec_hook_orientation=("Top Outside", "Top Outside"),
    l_sec_rebar_rounding=(2, 2),
    sec_hook_extension=(40, 40),
    structure=Structure,
    facename="Face6",
)

```

### Edition of Single Tie Four Rebars

You can change the properties of the ties and rebars with the following function:

```
rebar_group = editSingleTieFourRebars(
    rebar_group,
    l_cover_of_tie,
    r_cover_of_tie,
    t_cover_of_tie,
    b_cover_of_tie,
    offset_of_tie,
    bent_angle,
    extension_factor,
    dia_of_tie,
    number_spacing_check,
    number_spacing_value,
    dia_of_rebars,
    t_offset_of_rebars,
    b_offset_of_rebars,
    rebar_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    structure=None,
    facename=None,
)

```

- `rebar_group` is a previously created `ColumnReinforcement` group object.
- The other parameters are the same as required by the `makeSingleTieFourRebars()` function.
- `structure` and `facename` may be omitted so that the rebar stays in the original structure.

#### Example

```
from ColumnReinforcement import SingleTie

rebar_group = SingleTie.editSingleTieFourRebars(
    rebar_group,
    l_cover_of_tie=40,
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    rebar_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="x-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    structure=None,
    facename=None,
)

```

### Edition of Single Tie Multiple Rebars

You can change the properties of the ties and rebars with the following function:

```
rebar_group = editSingleTieMultipleRebars(
    rebar_group,
    l_cover_of_tie,
    r_cover_of_tie,
    t_cover_of_tie,
    b_cover_of_tie,
    offset_of_tie,
    bent_angle,
    extension_factor,
    dia_of_tie,
    number_spacing_check,
    number_spacing_value,
    dia_of_main_rebars,
    main_rebars_t_offset,
    main_rebars_b_offset,
    main_rebars_type="StraightRebar",
    main_hook_orientation="Top Inside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=None,
    main_hook_extension=None,
    sec_rebars_t_offset=None,
    sec_rebars_b_offset=None,
    sec_rebars_number_diameter=None,
    sec_rebars_type=("StraightRebar", "StraightRebar"),
    sec_hook_orientation=("Top Inside", "Top Inside"),
    l_sec_rebar_rounding=None,
    sec_hook_extension=None,
    structure=None,
    facename=None,
)

```

- `rebar_group` is a previously created `ColumnReinforcement` group object.
- The other parameters are the same as required by the `makeSingleTieMultipleRebars()` function.
- `structure` and `facename` may be omitted so that the reinforcement stays in the original structure.

#### Example

```
from ColumnReinforcement import SingleTieMultipleRebars

rebar_group = SingleTieMultipleRebars.editSingleTieMultipleRebars(
    rebar_group,
    l_cover_of_tie=40,
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    main_rebars_t_offset=-40,
    main_rebars_b_offset=-40,
    main_rebars_type="LShapeRebar",
    main_hook_orientation="Top Outside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=2,
    main_hook_extension=40,
    sec_rebars_t_offset=(-40, -40),
    sec_rebars_b_offset=(-40, -40),
    sec_rebars_number_diameter=("2#20mm+1#16mm+2#20mm", "1#20mm+1#16mm+1#20mm"),
    sec_rebars_type=("StraightRebar", "StraightRebar"),
    sec_hook_orientation=None,
    l_sec_rebar_rounding=None,
    sec_hook_extension=None,
    structure=None,
    facename=None,
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars/en&oldid=1433605>"
