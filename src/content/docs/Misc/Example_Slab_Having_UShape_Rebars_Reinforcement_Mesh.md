---
title: Example Slab Having UShape Rebars Reinforcement Mesh
---

|                                                       |
| ----------------------------------------------------- |
| Tutorial                                              |
| Topic                                                 |
| Example Slab Having U-Shape Rebars Reinforcement Mesh |
| Level                                                 |
| Intermediate                                          |
| Time to complete                                      |
|                                                       |
| Authors                                               |
| Shiv Charan                                           |
| FreeCAD version                                       |
| 0.20                                                  |
| Example files                                         |
|                                                       |
| See also                                              |
| _None_                                                |
|                                                       |

## Description

The ![](/src/assets/images/Reinforcement_SlabRebars.svg) [Reinforcement SlabRebars](/Reinforcement_SlabRebars "Reinforcement SlabRebars") tool allows the user to create reinforcing bars inside a Slab [Arch Structure](/Arch_Structure "Arch Structure") object.

This tool is part of the ![](/src/assets/images/Reinforcement_Workbench.svg) [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/src/assets/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

In this example we will create Slab Reinforcement having U-Shape Rebars for both direction as shown in below figure.

![](/src/assets/images/U-shape_rebars_isometric_view.png)

A Example of Slab Reinforcement having U-Shape Rebars in Slab [Arch Structure](/Arch_Structure "Arch Structure")

## Usage

1. Select any face of a previously created Slab ![](/src/assets/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object. as shown in below image.

: ![](/src/assets/images/Selected_face_for_Slab_Arch_Structure.png)
: Selected face for Slab Arch Structure

2. Then select ![](/src/assets/images/Reinforcement_SlabRebars.svg) [Slab Reinforcement](/Reinforcement_SlabRebars "Reinforcement SlabRebars") from the rebar tools.

3. A dialog box will pop-out on screen as shown below.

: ![](/src/assets/images/Slab_Reinforcement_input_dialog_box.png)
: Dialog Box for the Slab Reinforcement

4. Select the desired type of cover of reinforcement mesh (Top or Bottom) In example Bottom is selected.

5. Select the UShapeRebar rebar type and other input data for radars in parallel direction of selected face as show in below image.

: ![](/src/assets/images/U-shape_parallel_rebars_inputs.png)
: Dialog Box for Slab Reinforcement of the Rebars in parallel direction of selected face

6. Now click on Next button or select Cross Rebars in list view.

7. Now select UShapeRebar rebar type and other desired data for input data for rebars in cross direction of selected face as show in below image.

: ![](/src/assets/images/U-Shape_rebars_in_cross_direction_inputs.png)
: Dialog Box for Slab Reinforcement of the Rebars in cross direction of selected face

8. Click OK or Apply or Finish to generate Slab reinforcement.

9. Click Cancel to exit the dialog box.

## Properties Used for Slab Reinforcement Having U-Shape Rebars

**Properties for Rebars in Parallel Direction to selected face:**

- Data**Mesh Cover Along**: It represent alignment of rebar mesh along top or bottom face of structure. It can have two values "Top" and "Bottom".
- Data**Rebar Type**: Type of rebar for parallel rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
- Data**Front Cover**: The distance between parallel rebar and selected face.
- Data**Left Cover**: The distance between the left end of the parallel rebar to the left face of the structure.
- Data**Right Cover**: The distance between the right end of the parallel rebar to right face of the structure.
- Data**Bottom Cover**: The distance between parallel rebars from the bottom face of the structure.
- Data**Top Cover**: The distance between parallel rebars from the top face of the structure.
- Data**Rear Cover**: Rear cover for slab reinforcement of parallel rebars.
- Data**Diameter**: Diameter of parallel rebars.
- Data**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times of diameter of parallel rebars.
- Data**Amount**: It contains count of parallel rebars.
- Data**Spacing**: It contains spacing between parallel rebars.

**Properties for Rebars in Cross Direction to selected face:**

- Data**Rebar Type**: Type of rebar for cross rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
- Data**Front Cover**: The distance between cross rebar and selected face.
- Data**Left Cover**: The distance between the left end of the cross rebar to the left face of the structure.
- Data**Right Cover**: The distance between the right end of the cross rebar to right face of the structure.
- Data**Bottom Cover**: The distance between cross rebars from the bottom face of the structure.
- Data**Top Cover**: The distance between cross rebars from the top face of the structure.
- Data**Rear Cover**: Rear cover for slab reinforcement of cross rebars.
- Data**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times of diameter of cross rebars.
- Data**Diameter**: Diameter of cross rebars
- Data**Amount**: It contains count of cross rebars.
- Data**Spacing**: It contains spacing between cross rebars.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Slab Reinforcement tool can be used from the [Python](/Python "Python") console by using the following function:

### Create Slab Reinforcement of U-Shape Rebars

To create Slab reinforcement U-Shape Rebars as shown in above figures you can use makeSlabReinforcement function as follows:

```
from SlabReinforcement.SlabReinforcement import makeSlabReinforcement
SlabReinforcementGroup = makeSlabReinforcement(
    parallel_rebar_type="UShapeRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_rounding=2,
    parallel_diameter=8,
    parallel_amount_spacing_check=True,
    parallel_amount_spacing_value=12,
    cross_rebar_type="UShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=20,
    cross_bottom_cover=20,
    cross_rounding=2,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=12,
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

- Creates a `SlabReinforcementGroup` object for slab reinforcement having U-Shape rebars for the given `structure`, which is a Slab [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  - If no `structure` nor `facename` are given, it will take the user selected face as input.

**Properties used for slab reinforcement having U-Shape rebars for scripting reinforcement**

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

**Common Properties for Parallel and Cross Rebars:**

- Data**mesh_cover_along**: It can have two values "Top" and "Bottom". It represent alignment of rebar mesh along top or bottom face of structure.
- Data**structure**: Arch structure object. Default is None
- Data**facename**: selected face of structure. Default is None

### Edition of Slab Reinforcement having U-Shape Rebars

You can change the properties of the Slab Reinforcement having U-Shape Rebars by using editSlabReinforcement function as follows:

```
from SlabReinforcement.SlabReinforcement import editSlabReinforcement
SlabReinforcementGroup = editSlabReinforcement(
    SlabReinforcementGroup,
    parallel_rebar_type="UShapeRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_rounding=2,
    parallel_diameter=8,
    parallel_amount_spacing_check=True,
    parallel_amount_spacing_value=15,
    cross_rebar_type="UShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=20,
    cross_bottom_cover=20,
    cross_rounding=2,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=15,
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

- `slabReinforcementGroup` is a previously created `Slab Reinforcement` group object.
- The other parameters are the same as required by the `makeSingleTieFourRebars()` function.

you can change any property to edit Slab Reinforcement.

Retrieved from "<http://wiki.freecad.org/index.php?title=Example_Slab_Having_UShape_Rebars_Reinforcement_Mesh/en&oldid=1372615>"
