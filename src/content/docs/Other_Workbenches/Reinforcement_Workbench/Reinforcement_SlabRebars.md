---
title: Reinforcement SlabRebars
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Reinforcement SlabRebars                                                                                   |
| Menu location                                                                                              |
| 3D/BIM → Reinforcement tools → Slab Reinforcement                                                          |
| Workbenches                                                                                                |
| [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                                                                                           |
| _None_                                                                                                     |
| Introduced in version                                                                                      |
| -                                                                                                          |
| See also                                                                                                   |
| _None_                                                                                                     |
|                                                                                                            |

## Description

The [Reinforcement SlabRebars](/Reinforcement_SlabRebars "Reinforcement SlabRebars") tool allows the user to create reinforcing bars inside a Slab [Arch Structure](/Arch_Structure "Arch Structure") object.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Isometric_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

A Example of Slab Reinforcement inside a Slab [Arch Structure](/Arch_Structure "Arch Structure")

![](/images/Right_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Right view of the given Slab Reinforcement example

![](/images/Front_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Front view of the given Slab Reinforcement example

## Usage

1. Select any face of a previously created Slab ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object. as shown in below image.

: ![](/images/Selected_face_for_Slab_Arch_Structure.png)
: Selected face for Slab Arch Structure

2. Then select ![](/images/Reinforcement_SlabRebars.svg) [Slab Reinforcement](/Reinforcement_SlabRebars "Reinforcement SlabRebars") from the rebar tools.

3. A dialog box will pop-out on screen as shown below.

: ![](/images/Slab_Reinforcement_input_dialog_box.png)
: Dialog Box for the Slab Reinforcement

4. Select the desired type of cover of reinforcement mesh (Top or Bottom).

5. Select the desired rebar type and other input data for rebars in parallel direction of selected face as show in below image.

: ![](/images/Bent_Shape_rebars_in_parallel_with_distribution_rebars_inputs_for_Slab_Reinforcement.png)
: Dialog Box for Slab Reinforcement of the Rebars in parallel direction of selected face

6. Now click Next or select Cross Rebars in list view.

7. Now select desired data for input data for rabars in cross direction of selected face as show in below image.

: ![](/images/Bent_Shape_rebars_in_cross_direction_with_distribution_rebars.png)
: Dialog Box for Slab Reinforcement of the Rebars in cross direction of selected face

8. Click OK or Apply or Finish to generate Slab reinforcement.

9. Click Cancel to exit the dialog box.

## Properties

**Properties for Rebars in Parallel Direction to selected face:**

- Data**Mesh Cover Along**: It represent alignment of rebar mesh along top or bottom face of structure. It can have two values "Top" and "Bottom".
- Data**Rebar Type**: Type of rebar for parallel rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
- Data**Front Cover**: The distance between parallel rebar and selected face.
- Data**Left Cover**: The distance between the left end of the parallel rebar to the left face of the structure.
- Data**Right Cover**: The distance between the right end of the parallel rebar to right face of the structure.
- Data**Bottom Cover**: The distance between parallel rebars from the bottom face of the structure.
- Data**Top Cover**: The distance between parallel rebars from the top face of the structure.
- Data**Rear Cover**: Rear cover for slab reinforcement of parallel rebars.
- Data**Anchor Length**: It represents arm's length of bent shape parallel rebar when parallel rebar type is BentShapeRebar.
- Data**Bent Angle**: It represents angle for bent shape parallel rebar when parallel rebar type is BentShapeRebar.
- Data**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times of diameter of parallel rebars.
- Data**Diameter**: Diameter of parallel rebars
- Data**Amount**: It contains count of parallel rebars.
- Data**Spacing**: It contains spacing between parallel rebars.

**Properties of Distribution Rebars for bent shape rebars in parallel Direction to selected face:**

- Data**Amount**: It contains count of Distribution Rebars for Bent shape rebars in parallel Direction.
- Data**Spacing**: It contains spacing between Distribution Rebars for Bent shape rebars in parallel Direction.

**Properties for Rebars in Cross Direction to selected face:**

- Data**Rebar Type**: Type of rebar for cross rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
- Data**Front Cover**: The distance between cross rebar and selected face.
- Data**Left Cover**: The distance between the left end of the cross rebar to the left face of the structure.
- Data**Right Cover**: The distance between the right end of the cross rebar to right face of the structure.
- Data**Bottom Cover**: The distance between cross rebars from the bottom face of the structure.
- Data**Top Cover**: The distance between cross rebars from the top face of the structure.
- Data**Rear Cover**: Rear cover for slab reinforcement of cross rebars.
- Data**Anchor Length**: It represents arm's length of bent shape cross rebar when cross rebar type is BentShapeRebar.
- Data**Bent Angle**: It represents angle for bent shape cross rebar when cross rebar type is BentShapeRebar.
- Data**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times of diameter of cross rebars.
- Data**Diameter**: Diameter of cross rebars
- Data**Amount**: It contains count of cross rebars.
- Data**Spacing**: It contains spacing between cross rebars.

**Properties of Distribution Rebars for bent shape rebars in cross Direction to selected face:**

- Data**Amount**: It contains count of Distribution Rebars for Bent shape rebars in cross Direction.
- Data**Spacing**: It contains spacing between Distribution Rebars for Bent shape rebars in cross Direction.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement SlabRebars tool can be used from the [Python](/Python "Python") console by using the following function:

### Create Slab Reinforcement

```
from SlabReinforcement.SlabReinforcement import makeSlabReinforcement
SlabReinforcementGroup = makeSlabReinforcement(
    parallel_rebar_type,
    parallel_front_cover,
    parallel_rear_cover,
    parallel_left_cover,
    parallel_right_cover,
    parallel_top_cover,
    parallel_bottom_cover,
    parallel_diameter,
    parallel_amount_spacing_check,
    parallel_amount_spacing_value,
    cross_rebar_type,
    cross_front_cover,
    cross_rear_cover,
    cross_left_cover,
    cross_right_cover,
    cross_top_cover,
    cross_bottom_cover,
    cross_diameter,
    cross_amount_spacing_check,
    cross_amount_spacing_value,
    cross_rounding = 2,
    cross_bent_bar_length = 50,
    cross_bent_bar_angle = 135,
    cross_l_shape_hook_orintation = "Alternate",
    cross_distribution_rebars_check = False,
    cross_distribution_rebars_diameter = 8,
    cross_distribution_rebars_amount_spacing_check = True,
    cross_distribution_rebars_amount_spacing_value = 2,
    parallel_rounding = 2,
    parallel_bent_bar_length = 50,
    parallel_bent_bar_angle = 135,
    parallel_l_shape_hook_orintation = "Alternate",
    parallel_distribution_rebars_check = False,
    parallel_distribution_rebars_diameter = 8,
    parallel_distribution_rebars_amount_spacing_check = True,
    parallel_distribution_rebars_amount_spacing_value = 2,
    mesh_cover_along = "Bottom",
    structure = None,
    facename = None,
)

```

- Creates a `SlabReinforcementGroup` object from the given `structure`, which is a Slab [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  - If no `structure` nor `facename` are given, it will take the user selected face as input.

**Properties for Rebars in Parallel Direction to selected face:**

- Data**parallel_rebar_type**: Type of rebar for parallel rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
- Data**parallel_front_cover**: The distance between parallel rebar and selected face.
- Data**parallel_rear_cover**: Rear cover for slab reinforcement of parallel rebars.
- Data**parallel_left_cover**: The distance between the left end of the parallel rebar to the left face of the structure.
- Data**parallel_right_cover**: The distance between the right end of the parallel rebar to right face of the structure.
- Data**parallel_top_cover**: The distance between parallel rebars from the top face of the structure.
- Data**parallel_bottom_cover**: The distance between parallel rebars from the bottom face of the structure.
- Data**parallel_diameter**: Diameter of parallel rebars.
- Data**parallel_amount_spacing_check**: If is set to True, then value of parallel_amount_spacing_value is used as rebars count else parallel_amount_spacing_value's value is used as spacing in parallel rebars.
- Data**parallel_amount_spacing_value**: It contains count of rebars or spacing between parallel rebars based on value of amount_spacing_check.
- Data**parallel_rounding**: A rounding value to be applied to the corners of the bars, expressed in times the parallel_diameter.
- Data**parallel_bent_bar_length**: It represents arm's length of bent shape parallel rebar when parallel_rebar_type is BentShapeRebar
- Data**parallel_bent_bar_angle**: It represents angle for bent shape parallel rebar when parallel_rebar_type is BentShapeRebar
- Data**parallel_l_shape_hook_orintation**: It represents orintation of hook of parallel L-Shape rebar if parallel_rebar_type is LShapeRebar. It can have three values "Left", "Right","Alternate"
- Data**parallel_distribution_rebars_check**: If True add distribution rebars for parallel bent shape rebars. Default is False.
- Data**parallel_distribution_rebars_diameter**: Diameter of distribution rebars for parallel bent shape rebars.
- Data**parallel_distribution_rebars_amount_spacing_check**: If is set to True, then value of parallel_distribution_rebars_amount_spacing_value is used as rebars count else parallel_distribution_rebars_amount_spacing_value's value is used as spacing in parallel_distribution_rebars. Default is True.
- Data**parallel_distribution_rebars_amount_spacing_value**: It contains count or spacing between distribution rebars for one side of parallel bent shape rebars based on value of parallel_distribution_rebars_check. Default is 2.

**Properties for Rebars in Cross Direction to selected face:**

- Data**cross_rebar_type**: Type of rebar for cross rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
- Data**cross_front_cover**: The distance between cross rebar and cross_face (face perpendicular to selected face).
- Data**cross_rear_cover**: Rear cover for slab reinforcement of cross rebars.
- Data**cross_left_cover**: The distance between the left end of the cross rebar to the left face of the structure.
- Data**cross_right_cover**: The distance between the right end of the rebar to right face of the structure relative to cross_face.
- Data**cross_top_cover**: The distance between cross rebar from the top face of the structure.
- Data**cross_bottom_cover**: The distance between cross rebar from the bottom face of the structure.
- Data**cross_diameter**: Diameter of cross rebars.
- Data**cross_amount_spacing_check**: If is set to True, then value of cross_amount_spacing_value is used as rebars count else cross_amount_spacing_value's value is used as spacing in rebars.
- Data**cross_amount_spacing_value**: It contains count of rebars or spacing between rebars based on value of cross_amount_spacing_check.
- Data**cross_rounding**: A rounding value to be applied to the corners of the bars, expressed in times the cross_diameter.
- Data**cross_bent_bar_length**: It represents arm's length of bent shape cross rebar when cross_rebar_type is BentShapeRebar
- Data**cross_bent_bar_angle**: It represents angle for bent shape cross rebar when cross_rebar_type is BentShapeRebar
- Data**cross_l_shape_hook_orintation**: It represents orintation of hook of cross L-Shape rebar if cross_rebar_type is LShapeRebar. It can have three values "Left", "Right", "Alternate"
- Data**cross_distribution_rebars_check**: If True add distribution rebars for cross bent shape rebars. Default is False.
- Data**cross_distribution_rebars_diameter**: Diameter for distribution rebars for cross bent shape rebars.
- Data**cross_distribution_rebars_amount_spacing_check**: If is set to True, then value of cross_distribution_rebars_amount_spacing_value is used as rebars count else cross_distribution_rebars_amount_spacing_value's value is used as spacing in cross_distribution_rebars. Default is True.
- Data**cross_distribution_rebars_amount_spacing_value**: It contains count or spacing between distribution rebars for one side of cross bent shape rebars based on value of cross_distribution_rebars_check. Default is 2.

**Common Properties for Parallel and Cross Rebars:**

- Data**mesh_cover_along**: It can have two values "Top" and "Bottom". It represent alignment of rebar mesh along top or bottom face of structure.
- Data**structure**: Arch structure object. Default is None
- Data**facename**: selected face of structure. Default is None

### Edition of Slab Reinforcement

You can change the properties of the Slab Reinforcement with the following function:

```
from SlabReinforcement.SlabReinforcement import editSlabReinforcement
slabReinforcementGroup = editSlabReinforcement(
    slabReinforcementGroup,
    parallel_rebar_type,
    parallel_front_cover,
    parallel_rear_cover,
    parallel_left_cover,
    parallel_right_cover,
    parallel_top_cover,
    parallel_bottom_cover,
    parallel_diameter,
    parallel_amount_spacing_check,
    parallel_amount_spacing_value,
    cross_rebar_type,
    cross_front_cover,
    cross_rear_cover,
    cross_left_cover,
    cross_right_cover,
    cross_top_cover,
    cross_bottom_cover,
    cross_diameter,
    cross_amount_spacing_check,
    cross_amount_spacing_value,
    cross_rounding = 2,
    cross_bent_bar_length = 50,
    cross_bent_bar_angle = 135,
    cross_l_shape_hook_orintation = "Alternate",
    cross_distribution_rebars_check = False,
    cross_distribution_rebars_diameter = 8,
    cross_distribution_rebars_amount_spacing_check = True,
    cross_distribution_rebars_amount_spacing_value = 2,
    parallel_rounding = 2,
    parallel_bent_bar_length = 50,
    parallel_bent_bar_angle = 135,
    parallel_l_shape_hook_orintation = "Alternate",
    parallel_distribution_rebars_check = False,
    parallel_distribution_rebars_diameter = 8,
    parallel_distribution_rebars_amount_spacing_check = True,
    parallel_distribution_rebars_amount_spacing_value = 2,
    mesh_cover_along: str = "Bottom",
    structure = None,
    facename = None,
)

```

- `slabReinforcementGroup` is a previously created `Slab Reinforcement` group object.
- The other parameters are the same as required by the `makeSlabReinforcement()` function.

### Examples for Slab Reinforcement

- [Slab Spanning in Two Directions](/Example_Slab_Spanning_in_Two_Directions "Example Slab Spanning in Two Directions")

![](/images/Isometric_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

- [Slab Spanning in One Direction](/Example_Slab_Spanning_in_One_Direction "Example Slab Spanning in One Direction")

![](/images/Slab_spanning_in_one_Direction.png)

- [Slab Having Straight Rebars Reinforcement Mesh](/Example_Slab_Having_Mesh_Of_Straight_Rebars "Example Slab Having Mesh Of Straight Rebars")

![](/images/Slab_having_straight_rebars_in_both_direction.png)

- [Slab Having U-Shape Rebars Reinforcement Mesh](/Example_Slab_Having_UShape_Rebars_Reinforcement_Mesh "Example Slab Having UShape Rebars Reinforcement Mesh")

![](/images/U-shape_rebars_isometric_view.png)

- [Slab Having L-Shape Rebars Reinforcement Mesh](/Example_Slab_Having_LShape_Rebars_Reinforcement_Mesh "Example Slab Having LShape Rebars Reinforcement Mesh")

![](/images/L-Shape_Rebars_isometric_view.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_SlabRebars/en&oldid=1441021>"
