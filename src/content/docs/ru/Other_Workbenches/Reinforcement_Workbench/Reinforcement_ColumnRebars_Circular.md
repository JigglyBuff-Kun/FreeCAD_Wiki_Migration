---
title: Reinforcement ColumnRebars Circular/ru
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
| [Reinforcement ColumnRebars](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars"), [Reinforcement ColumnRebars TwoTiesSixRebars](/Reinforcement_ColumnRebars_TwoTiesSixRebars "Reinforcement ColumnRebars TwoTiesSixRebars") |
|  |

## Описание

The [Reinforcement ColumnRebars](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars") tool allows the user to create reinforcing bars inside a Column [Arch Structure](/Arch_Structure "Arch Structure") object. This page shows an additional usage example for the tool.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

Three usage examples are available:

* [Single tie rectangular column](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars")
* [Two ties six rebars rectangular column](/Reinforcement_ColumnRebars_TwoTiesSixRebars "Reinforcement ColumnRebars TwoTiesSixRebars")
* [Circular column (see below)](#Usage)

![](/images/Arch_Rebar_Circular_ColumnReinforcement_example.png)

Circular reinforcement inside a [column](/Arch_Structure "Arch Structure")

## Применение

1. Select top face of a previously created ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.

2. Then select ![](/images/Reinforcement_ColumnRebars.svg) [Column Reinforcement](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars") from the rebar tools.

3. A dialog box will pop-out on screen as shown below.

:   ![](/images/ColumnReinforcementDialog_Ties.png)
:   Dialog Box for the Arch Rebar ColumnReinforcement tool

4. Select the Circular Column radio button in column reinforcement dialog.

:   ![](/images/CircularColumnReinforcementDialog.png)
:   Dialog Box for Circular Column Reinforcement

5. Give inputs for data related to circular column reinforcement.

6. Click OK or Apply to generate circular column reinforcement.

7. Click Cancel to exit the dialog box.

## Свойства

**Helical Rebars:**

* Данные**Side Cover**: The distance between rebar to the curved face.
* Данные**Top Cover**: The distance between rebar from the top face of the structure.
* Данные**Bottom Cover**: The distance between rebar from the bottom face of the structure.
* Данные**Pitch**: The pitch of a helix is the height of one complete helix turn, measured parallel to the axis of the helix.
* Данные**Diameter**: Diameter of the rebar.

**Main Rebars:**

* Данные**Top Offset**: The distance between rebars from the top face of the structure.
* Данные**Bottom Offset**: The distance between rebars from the bottom face of the structure.
* Данные**Diameter**: Diameter of the main rebars.
* Данные**Number**: The number of main rebars.
* Данные**Angle**: The angular distance between ties.

## Программирование

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement ColumnRebars\_Circular tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

### Create Circular Column Reinforcement

```
RebarGroup = CircularColumn.makeReinforcement(
    s_cover,
    helical_rebar_t_offset,
    helical_rebar_b_offset,
    pitch,
    dia_of_helical_rebar,
    main_rebars_t_offset,
    main_rebars_b_offset,
    dia_of_main_rebars,
    number_angle_check,
    number_angle_value,
    structure=None,
    facename=None,
)

```

* Creates a `RebarGroup` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  + If no `structure` nor `facename` are given, it will take the user selected face as input.
* `s_cover`, `helical_rebar_t_offset`, and `helical_rebar_b_offset` are inner offset distances for the helical rebar with respect to the faces of the structure. They are respectively the side, top and bottom offsets.
* `pitch` is the parameter that determines how close or far apart each helical loop is to each other.
* `dia_of_helical_rebar` is the diameter of the helical rebar inside the structure.
* `main_rebars_t_offset` and `main_rebars_b_offset` are inner offset distances for the main rebars with respect to the top and bottom faces of the structure, respectively.
* `dia_of_main_rebars` is the diameter of the main rebars.
* `number_angle_check` if it is `True` it will create as many main rebars as given by `number_angle_value`; if it is `False` it will create main rebars at an angle of `number_spacing_value`, specified in degrees.
* `number_angle_value` specifies the number of main rebars, or the value of the angle between the main rebars, depending on `number_angle_check`.

#### Пример

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import CircularColumn

Circle = Draft.makeCircle(radius=250)
Structure = Arch.makeStructure(Circle)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

RebarGroup = CircularColumn.makeReinforcement(
    s_cover=20,
    helical_rebar_t_offset=40,
    helical_rebar_b_offset=40,
    pitch=50,
    dia_of_helical_rebar=8,
    main_rebars_t_offset=20,
    main_rebars_b_offset=20,
    dia_of_main_rebars=16,
    number_angle_check=True,
    number_angle_value=6,
    structure=Structure,
    facename="Face3",
).rebar_group

```

### Edition of Circular Column Reinforcement

You can change the properties of the helical and main rebars with the following function:

```
rebar_group = editReinforcement(
    rebar_group,
    s_cover,
    helical_rebar_t_offset,
    helical_rebar_b_offset,
    pitch,
    dia_of_helical_rebar,
    main_rebars_t_offset,
    main_rebars_b_offset,
    dia_of_main_rebars,
    number_angle_check,
    number_angle_value,
    structure=None,
    facename=None,
)

```

* `rebar_group` is a previously created `ColumnReinforcement` group object.
* The other parameters are the same as required by the `makeSingleTieFourRebars()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

#### Пример

```
from ColumnReinforcement import CircularColumn

rebar_group = CircularColumn.editReinforcement(
    rebar_group,
    s_cover=30,
    helical_rebar_t_offset=30,
    helical_rebar_b_offset=30,
    pitch=60,
    dia_of_helical_rebar=10,
    main_rebars_t_offset=-30,
    main_rebars_b_offset=-30,
    dia_of_main_rebars=18,
    number_angle_check=False,
    number_angle_value=45,
    structure=Structure,
    facename="Face3",
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars_Circular/ru&oldid=1433590>"