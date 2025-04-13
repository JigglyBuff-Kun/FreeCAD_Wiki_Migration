---
title: Reinforcement FootingRebars
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Reinforcement FootingRebars                                                                                |
| Menu location                                                                                              |
| 3D/BIM → Reinforcement tools → Footing Reinforcement                                                       |
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

The [Reinforcement FootingRebars](/Reinforcement_FootingRebars "Reinforcement FootingRebars") tool allows the user to create reinforcing bars inside a Footing [Arch Structure](/Arch_Structure "Arch Structure") object.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/src/assets/images/Isometric_view_of_Columns_footing.png)

An Example of Footing reinforcement in Footing [Arch Structure](/Arch_Structure "Arch Structure")

![](/src/assets/images/Front_View_of_Column_footing.png)

Front view of given Footing Reinforcement example

## Usage

1. Select vertical face of a previously created Footing ![](/src/assets/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object as shown in below image.

: ![](/src/assets/images/Footing_Face_selected.png)
: Selected face for Footing Arch Structure

2. Then select [Footing Reinforcement](/Reinforcement_FootingRebars "Reinforcement FootingRebars") from the rebar tools.

3. A footing reinforcement dialog box will pop-out on screen as shown below.

: ![](/src/assets/images/Footing_Reinforcement_GUI_.png)
: Dialog Box for the Footing Reinforcement

4. Select the desired rebar type and other input data for rebars in parallel direction of selected face in footing reinforcement mesh as show in below image.

: ![](/src/assets/images/Input_Fields_for_Parallel_rebars_in_footing_GUI_Dialog_box.png)
: Dialog Box for Footing Reinforcement of the Rebars in parallel direction of selected face

5. Now click Next or select Cross Rebars in list view and fill desired data for input data for rebars in cross direction of selected face in footing reinforcement mesh as show in below image.

: ![](/src/assets/images/GUICrossRebarInputsFooting.png)
: Dialog Box for Footing Reinforcement of the Rebars in cross direction of selected face

6. Click Next or click on Columns in list view and fill desired input for columns in footing reinforcement. Here you can select to add secondary rebars in columns or not.

: ![](/src/assets/images/Columns_input_fields_for_column_footing.png)
: Dialog Box for input fields of Columns in Footing Reinforcement

7. Click Next or click on Ties in list view and fill desired input for Ties in columns of footing reinforcement.

: ![](/src/assets/images/Ties_input_fields_for_column_footing.png)
: Dialog Box for input fields of Ties in columns of Footing Reinforcement

8. Click Next or click on Main rebars in list view and fill desired input for main rebars in columns of footing reinforcement.

: ![](/src/assets/images/Main_Rebar_input_fields_for_column_footing.png)
: Dialog Box for input fields of Main rebars in columns of Footing Reinforcement

Note: step 9 and 10 are required, only if secondary rebars check is enable in step 6.

9. Click Next or click on XDir Secondary rebar in list view and fill desired input for secondary rebars in X direction in a column in footing reinforcement.

: ![](/src/assets/images/X_Direction_secondary_rebar_sinput_fields_for_column_footing_Reinforcement.png)
: Dialog Box for input fields of X direction rebars in columns of Footing Reinforcement

10. Click Next or click on YDir Secondary rebar in list view and fill desired input for secondary rebars in Y direction in a column in footing reinforcement.

: ![](/src/assets/images/Y_Direction_secondary_rebars_input_fields_for_Column_footing_reinforcement.png)
: Dialog Box for input fields of Y direction rebars in columns of Footing Reinforcement

11. Click OK or Apply or Finish to generate Footing reinforcement.

12. Click Cancel to exit the dialog box.

## Properties

**Properties for Rebars in Parallel Direction to selected face in footing Reinforcement:**

- Data**Mesh Cover Along**: It represent alignment of rebar mesh along top and/or bottom face of structure. It can have three values "Top", "Bottom" and "Both".
- Data**Rebar Type**: Type of rebar for parallel rebars for footing reinforcement. It can have three values 'StraightRebar', 'LShapeRebar' and 'UShapeRebar'.
- Data**Front Cover**: The distance between parallel rebar and selected face.
- Data**Left Cover**: The distance between the left end of the parallel rebar to the left face of the structure.
- Data**Right Cover**: The distance between the right end of the parallel rebar to right face of the structure.
- Data**Bottom Cover**: The distance between parallel rebars from the bottom face of the structure.
- Data**Top Cover**: The distance between parallel rebars from the top face of the structure.
- Data**Rear Cover**: Rear cover for footing reinforcement of parallel rebars.
- Data**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times of diameter of parallel rebars.
- Data**Diameter**: Diameter of parallel rebars
- Data**Amount**: It contains count of parallel rebars.
- Data**Spacing**: It contains spacing between parallel rebars.

**Properties for Rebars in Cross Direction to selected face in footing Reinforcement:**

- Data**Rebar Type**: Type of rebar for cross rebars for footing reinforcement. It can have three values 'StraightRebar', 'LShapeRebar' and 'UShapeRebar'.
- Data**Front Cover**: The distance between cross rebar and cross_face (face perpendicular to selected face).
- Data**Left Cover**: The distance between the left end of the cross rebar to the left face of the structure.
- Data**Right Cover**: The distance between the right end of the cross rebar to right face of the structure.
- Data**Bottom Cover**: The distance between cross rebars from the bottom face of the structure.
- Data**Top Cover**: The distance between cross rebars from the top face of the structure.
- Data**Rear Cover**: Rear cover for footing reinforcement of cross rebars.
- Data**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times of diameter of cross rebars.
- Data**Diameter**: Diameter of cross rebars
- Data**Amount**: It contains count of cross rebars.
- Data**Spacing**: It contains spacing between cross rebars.

**Properties for Columns in footing Reinforcement:**

- Data**Front Cover**: Distance between selected face and columns.
- Data**Left Cover**: Distance between left face and columns.
- Data**Right Cover**: Distance between right face and columns.
- Data**Rear Cover**: Distance between rear face and columns.
- Data**Column Width**: Width of column.
- Data**Column Length**: Length of column.
- Data**X direction column amount**: It contains count of columns in x direction. If X direction amount radio button is enabled.
- Data**X direction column spacing**: It contains spacing between columns in x direction. If X direction spacing radio button is enabled.
- Data**Y direction column amount**: It contains count of columns in y direction. If Y direction amount radio button is enabled.
- Data**Y direction column spacing**: It contains spacing between columns in y direction. If Y direction spacing radio button is enabled.
- Data**Add Secondary Rebars**: If checked add secoundary x and y direction rebars in columns.

**Properties for Ties in Columns of footing Reinforcement:**

- Data**Top Cover**: Top cover for ties outside footing from Main Rebars end.
- Data**Bottom Cover** : Bottom cover of ties from Bottom of Main Rebars in footing near mesh.
- Data**Diameter**: Diameter of ties.
- Data**Bent Angle**: Bent angle for ties.
- Data**Extension Factor**: Extension factor for ties extended edge.
- Data**Tie Number**: It contains count of rebars or spacing between ties, if Number radio button is enabled.
- Data**Tie Spacing**: It contains the spacing between ties, if Spacing radio button is enabled.

**Properties for Main Rebars in Columns of footing Reinforcement:**

- Data**Rabar Type**: Rebar type for main rebars of column. It takes two different inputs for 'StraightRebar', 'LShapeRebar'.
- Data**Hook Orientation**: Hook orientation of main rebars in columns if main rabar type is LShapeRebar. It takes eight different orientations input for L-shaped hooks i.e. 'Top Inside', 'Top Outside', 'Bottom Inside', 'Bottom Outside', 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'.
- Data**Hook Extend Along**: Direction of main rebar (LShapeRebar) hook. it has two option "x-axis" and "y-axis".
- Data**Hook Extension**: It specifies length of hook of main rebar (LShapeRebar).
- Data**Rebar Rounding**: A rounding value to be applied to the corners of the bars, expressed in times the Main Rebar Diameter.
- Data**Top Offset**: Top offset of main rebars in column outside footing Top face.
- Data**Diameter**: Diameter of main rebars in columns.

**Properties for X Direction Rebars in Columns of footing Reinforcement:**

Rebars along x-direction except main rebars

- Data**Rebar Type**: Type of x-direction rebars in a column.It has two values, 'StraightRebar' and 'LShapeRebar'.
- Data**Hook Orientation**: Orientation of L-Shaped rebar hooks.It takes eight different orientations input for L-shaped hooks i.e. 'Top Inside', 'Top Outside', 'Bottom Inside', 'Bottom Outside', 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'.
- Data**Hook Extension**: Length of hook of L-Shape rebars.
- Data**Rounding**: A rounding value to be applied to the corners of the L-Shape rebars, expressed in times the diameter.
- Data**Top Offset**: The distance between rebar from the top face of the structure.
- Data**Number#Diameter**: Number#Diameter set of the x-direction rebars.

**Properties for Y Direction Rebars in Columns of footing Reinforcement:**

Rebars along y-direction except main rebars

- Data**Rebar Type**: Type of y-direction rebars. It has two values, 'StraightRebar' and 'LShapeRebar'.
- Data**Hook Orientation**: Orientation of LShaped hooks. It takes eight different orientations input for L-shaped hooks i.e. 'Top Inside', 'Top Outside', 'Bottom Inside', 'Bottom Outside', 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'.
- Data**Hook Extension**: Length of hook of L-Shape rebars.
- Data**Rounding**: A rounding value to be applied to the corners of the L-Shape rebars, expressed in times the diameter.
- Data**Top Offset**: The distance between rebar from the top face of the structure.
- Data**Number#Diameter**: Number#Diameter set of the y-direction rebars.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement FootingRebars tool can be used from the [Python](/Python "Python") console by using the following function:

### Create Footing Reinforcement

```
from FootingReinforcement.FootingReinforcement import makeFootingReinforcement

footingReinforcementGroup = makeFootingReinforcement(
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
    column_front_cover,
    column_left_cover,
    column_right_cover,
    column_rear_cover,
    tie_top_cover,
    tie_bottom_cover,
    tie_bent_angle,
    tie_extension_factor,
    tie_diameter,
    tie_number_spacing_check,
    tie_number_spacing_value,
    column_main_rebar_diameter,
    column_main_rebars_t_offset,
    cross_amount_spacing_value,
    column_width,
    column_length,
    xdir_column_amount_spacing_check = True,
    xdir_column_amount_spacing_value = 1,
    ydir_column_amount_spacing_check = True,
    ydir_column_amount_spacing_value = 1,
    parallel_rounding = 2,
    parallel_l_shape_hook_orintation = "Alternate",
    cross_rounding = 2,
    cross_l_shape_hook_orintation = "Alternate",
    column_main_rebars_type = "StraightRebar",
    column_main_hook_orientation = "Bottom Outside",
    column_main_hook_extend_along = "x-axis",
    column_l_main_rebar_rounding = 2,
    column_main_hook_extension = 40,
    column_sec_rebar_check = False,
    column_sec_rebars_t_offset = (400, 400),
    column_sec_rebars_number_diameter = (
        "1#8mm+1#8mm+1#8mm",
        "1#8mm+1#8mm+1#8mm",
    ),
    column_sec_rebars_type = (
        "StraightRebar",
        "StraightRebar",
    ),
    column_sec_hook_orientation = (
        "Top Inside",
        "Top Inside",
    ),
    column_l_sec_rebar_rounding = (2, 2),
    column_sec_hook_extension = (40, 40),
    mesh_cover_along = "Bottom",
    structure = None,
    facename = None,
)

```

- Creates a `footingReinforcementGroup` object from the given `structure`, which is a Footing [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  - If no `structure` nor `facename` are given, it will take the user selected face as input.

**Properties for Rebars in Parallel Direction to selected face:**

- `parallel_rebar_type`: Type of rebar for parallel rebars for footing reinforcement. It can have three values 'StraightRebar', 'LShapeRebar', 'UShapeRebar'.
- `parallel_front_cover`: The distance between parallel rebar and selected face.
- `parallel_rear_cover`: Rear cover for footing reinforcement of parallel rebars.
- `parallel_left_cover`: The distance between the left end of the parallel rebar to the left face of the structure.
- `parallel_right_cover`: The distance between the right end of the parallel rebar to right face of the structure.
- `parallel_top_cover`: The distance between parallel rebars from the top face of the structure.
- `parallel_bottom_cover`: The distance between parallel rebars from the bottom face of the structure.
- `parallel_diameter`: Diameter of parallel rebars.
- `parallel_amount_spacing_check`: If is set to True, then value of parallel_amount_spacing_value is used as rebars count else parallel_amount_spacing_value's value is used as spacing in parallel rebars.
- `parallel_amount_spacing_value`: It contains count of rebars or spacing between parallel rebars based on value of amount_spacing_check.
- `parallel_rounding`: A rounding value to be applied to the corners of the bars, expressed in times the parallel_diameter.
- `parallel_l_shape_hook_orintation`: It represents orintation of hook of parallel L-Shape rebar if parallel_rebar_type is LShapeRebar. It can have three values "Left", "Right","Alternate"

**Properties for Rebars in Cross Direction to selected face:**

- `cross_rebar_type`: Type of rebar for cross rebars for footing reinforcement. It can have three values 'StraightRebar', 'LShapeRebar', 'UShapeRebar'.
- `cross_front_cover`: The distance between cross rebar and cross_face (face perpendicular to selected face).
- `cross_rear_cover`: Rear cover for footing reinforcement of cross rebars.
- `cross_left_cover`: The distance between the left end of the cross rebar to the left face of the structure.
- `cross_right_cover`: The distance between the right end of the rebar to right face of the structure relative to cross_face.
- `cross_top_cover`: The distance between cross rebar from the top face of the structure.
- `cross_bottom_cover`: The distance between cross rebar from the bottom face of the structure.
- `cross_diameter`: Diameter of cross rebars.
- `cross_amount_spacing_check`: If is set to True, then value of cross_amount_spacing_value is used as rebars count else cross_amount_spacing_value's value is used as spacing in rebars.
- `cross_amount_spacing_value`: It contains count of rebars or spacing between rebars based on value of cross_amount_spacing_check.
- `cross_rounding`: A rounding value to be applied to the corners of the bars, expressed in times the cross_diameter.
- `cross_l_shape_hook_orintation`: It represents orintation of hook of cross L-Shape rebar if cross_rebar_type is LShapeRebar. It can have three values "Left", "Right", "Alternate"

**Properties for Columns in footing Reinforcement:**

- `column_front_cover`: Distance between selected face and columns.
- `column_left_cover`: Distance between left face and columns.
- `column_right_cover`: Distance between right face and right columns.
- `column_rear_cover`: Distance between rear face and rear columns.
- `column_width`: Width of columns.
- `column_length`: Length of columns.
- `xdir_column_amount_spacing_check`: If is set to True, then value of xdir_column_amount_spacing_value is used as columns count else xdir_column_amount_spacing_value's value is used as spacing between columns in x direction.
- `xdir_column_amount_spacing_value`: It contains count of columns or spacing between columns in x direction based on value of xdir_column_amount_spacing_check.
- `ydir_column_amount_spacing_check`: If is set to True, then value of ydir_column_amount_spacing_value is used as columns count else ydir_column_amount_spacing_value's value is used as spacing between columns in y direction.
- `ydir_column_amount_spacing_value`: It contains count of columns or spacing between columns in y direction based on value of ydir_column_amount_spacing_check.
- `column_sec_rebar_check`: If True add secondary x and y direction rebars in columns.

**Properties for Ties of columns in footing Reinforcement:**

- `tie_top_cover`:Top cover for ties outside footing from Main Rebars end.
- `tie_bottom_cover`:Bottom cover of ties from Bottom of Main Rebars in footing near mesh.
- `tie_bent_angle`:Bent angle for ties.
- `tie_extension_factor`:Extension factor for ties extended edge.
- `tie_diameter`:Diameter of ties.
- `tie_number_spacing_check`:If is set to True, then value of tie_number_spacing_value is used as ties count else tie_number_spacing_value's value is used as spacing in ties.
- `tie_number_spacing_value`:It contains count of ties or spacing between ties based on value of tie_number_spacing_check.

**Properties for Main rebar of columns in footing Reinforcement:**

- `column_main_rebar_diameter`:Diameter of main rebars in columns.
- `column_main_rebars_t_offset`:Top offset of main rebars in column outside footing.
- `column_main_hook_extend_along`:Direction of main rebar (LShapeRebar) hook. it has two option "x-axis" and "y-axis".
- `column_l_main_rebar_rounding`:A rounding value to be applied to the corners of the bars, expressed in times the column_main_rebar_diameter.
- `column_main_hook_extension`:It specifies length of hook of main rebar (LShapeRebar).
- `column_main_rebars_type`:Rebar type for main rebars of column. It takes two different inputs for 'StraightRebar', 'LShapeRebar'. Default is StraightRebar.
- `column_main_hook_orientation`:Hook orientation of main rebars in columns if column_main_rebars_type is LShapeRebar. It takes eight different orientations input for L-shaped hooks i.e. 'Top Inside', 'Top Outside', 'Bottom Inside', 'Bottom Outside', 'Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'.

**Properties for Secondary X and Y direction Rebar of columns in footing Reinforcement:**

- `column_sec_rebars_t_offset` and `sec_rebars_b_offset` are tuples (xdir_rebars_t_offset, ydir_rebars_t_offset) that defines offset distances (or hight) for the secondary x-direction and y-direction rebars with respect to the top faces of the structure, respectively.
- `column_sec_rebars_number_diameter` is a tuple (xdir_rebars_number_diameter, ydir_rebars_number_diameter) that defines number#diameter set of the secondary x-direction and y-direction rebars, respectively.
- `column_sec_rebars_type` is a tuple (xdir_rebars_type, ydir_rebars_type) that defines the type of secondary x-direction and y-direction rebars ,respectively; it can have `"StraightRebar"` or `"LShapeRebar"` as rebar type.
- `column_sec_hook_orientation` is a tuple (xdir_hook_orientation, ydir_hook_orientation) that defines the orientation of secondary x-direction and y-direction LShaped hook; it can have `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` or `"Bottom Left"` as hook_orientation.
- `column_l_sec_rebar_rounding` is a tuple (l_xdir_rebar_rounding, l_ydir_rebar_rounding) that determines the bending radius of the LShaped secondary x-direction and y-direction LShaped rebars, expressed as times the diameter of x-direction and y-direction LShaped rebars, respectively.
- `column_sec_hook_extension` is a tuple (xdir_hook_extension, ydir_hook_extension) that defines the length of hook of secondary x-direction and y-direction LShaped rebars.

**Common Properties for Footing Reinforcement:**

- `mesh_cover_along`: It can have three values "Top", "Bottom" and "Both". It represent alignment of rebar mesh along top and/or bottom face of structure.
- `structure`: Arch structure object. Default is None
- `facename`: selected face of structure. Default is None

### Edition of Footing Reinforcement

You can change the properties of the Footing Reinforcement with the following function:

```
from FootingReinforcement.FootingReinforcement import editFootingReinforcement

footingReinforcementGroup = editFootingReinforcement(
    footingReinforcementGroup,
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
    column_front_cover,
    column_left_cover,
    column_right_cover,
    column_rear_cover,
    tie_top_cover,
    tie_bottom_cover,
    tie_bent_angle,
    tie_extension_factor,
    tie_diameter,
    tie_number_spacing_check,
    tie_number_spacing_value,
    column_main_rebar_diameter,
    column_main_rebars_t_offset,
    cross_amount_spacing_value,
    column_width,
    column_length,
    xdir_column_amount_spacing_check = True,
    xdir_column_amount_spacing_value = 1,
    ydir_column_amount_spacing_check = True,
    ydir_column_amount_spacing_value = 1,
    parallel_rounding = 2,
    parallel_l_shape_hook_orintation = "Alternate",
    cross_rounding = 2,
    cross_l_shape_hook_orintation = "Alternate",
    column_main_rebars_type = "StraightRebar",
    column_main_hook_orientation = "Bottom Outside",
    column_main_hook_extend_along = "x-axis",
    column_l_main_rebar_rounding = 2,
    column_main_hook_extension = 40,
    column_sec_rebar_check = False,
    column_sec_rebars_t_offset = (400, 400),
    column_sec_rebars_number_diameter = (
        "1#8mm+1#8mm+1#8mm",
        "1#8mm+1#8mm+1#8mm",
    ),
    column_sec_rebars_type = (
        "StraightRebar",
        "StraightRebar",
    ),
    column_sec_hook_orientation = (
        "Top Inside",
        "Top Inside",
    ),
    column_l_sec_rebar_rounding = (2, 2),
    column_sec_hook_extension = (40, 40),
    mesh_cover_along = "Bottom",
    structure = None,
    facename = None,
)

```

- `footingReinforcementGroup` is a previously created `Footing Reinforcement` group object.
- The other parameters are the same as required by the `makeFootingReinforcement()` function.

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_FootingRebars/en&oldid=1441028>"
