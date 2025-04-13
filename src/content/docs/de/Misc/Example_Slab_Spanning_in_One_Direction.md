---
title: Example Slab Spanning in One Direction/de
---
|  |
| --- |
| Tutorial |
| Topic |
| Example Slab Spanning in One Direction |
| Level |
| Intermediate |
| Time to complete |
|  |
| Authors |
| Shiv Charan |
| FreeCAD version |
| 0.20 |
| Example files |
|  |
| See also |
| *None* |
|  |

## Beschreibung

The ![](/images/Reinforcement_SlabRebars.svg) [Reinforcement SlabRebars](/Reinforcement_SlabRebars "Reinforcement SlabRebars") tool allows the user to create reinforcing bars inside a Slab [Arch Structure](/Arch_Structure "Arch Structure") object.

This tool is part of the ![](/images/Reinforcement_Workbench.svg) [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

In this example we will create Slab Reinforcement for Slab spanning in one direction as shown in below figure.

![](/images/Slab_spanning_in_one_Direction.png)

A Example of Slab Reinforcement of spanning in one direction in Slab [Arch Structure](/Arch_Structure "Arch Structure")

![](/images/Right_view_of_Slab_spanning_in_one_direction.png)

Right view of the given Slab Reinforcement example

![](/images/Front_view_of_slab_spanning_in_one_direction.png)

Front view of the given Slab Reinforcement example

## Anwendung

1. Select any face of a previously created Slab ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object. as shown in below image.

:   ![](/images/Selected_face_for_Slab_Arch_Structure.png)
:   Selected face for Slab Arch Structure

2. Then select ![](/images/Reinforcement_SlabRebars.svg) [Slab Reinforcement](/Reinforcement_SlabRebars "Reinforcement SlabRebars") from the rebar tools.

3. A dialog box will pop-out on screen as shown below.

:   ![](/images/Slab_Reinforcement_input_dialog_box.png)
:   Dialog Box for the Slab Reinforcement

4. Select the desired type of cover of reinforcement mesh (Top or Bottom) In example Bottom is selected.

5. Select the StraightRebar rebar type and other input data for rebars in parallel direction of selected face as show in below image.

:   ![](/images/Straight_Rebars_in_parallel_for_Slab_Spanning_in_One_Direction.png)
:   Dialog Box for Slab Reinforcement of the Rebars in parallel direction of selected face

6. Now click on Next button or select Cross Rebars in list view.

7. Now select BentShapeRebar rebar type and other desired data for input data for rebars in cross direction of selected face as show in below image.

:   ![](/images/Bent_Shape_rebars_in_cross_direction_with_distribution_rebars.png)
:   Dialog Box for Slab Reinforcement of the Rebars in cross direction of selected face

8. Click OK or Apply or Finish to generate Slab reinforcement.

9. Click Cancel to exit the dialog box.

## Properties Used for Slab Spanning in One direction

**Properties for Rebars in Parallel Direction to selected face:**

* Daten**Mesh Cover Along**: It represent alignment of rebar mesh along top or bottom face of structure. It can have two values "Top" and "Bottom".
* Daten**Rebar Type**: Type of rebar for parallel rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
* Daten**Front Cover**: The distance between parallel rebar and selected face.
* Daten**Left Cover**: The distance between the left end of the parallel rebar to the left face of the structure.
* Daten**Right Cover**: The distance between the right end of the parallel rebar to right face of the structure.
* Daten**Bottom Cover**: The distance between parallel rebars from the bottom face of the structure.
* Daten**Top Cover**: The distance between parallel rebars from the top face of the structure.
* Daten**Rear Cover**: Rear cover for slab reinforcement of parallel rebars.
* Daten**Diameter**: Diameter of parallel rebars
* Daten**Amount**: It contains count of parallel rebars.
* Daten**Spacing**: It contains spacing between parallel rebars.

**Properties for Rebars in Cross Direction to selected face:**

* Daten**Rebar Type**: Type of rebar for cross rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
* Daten**Front Cover**: The distance between cross rebar and selected face.
* Daten**Left Cover**: The distance between the left end of the cross rebar to the left face of the structure.
* Daten**Right Cover**: The distance between the right end of the cross rebar to right face of the structure.
* Daten**Bottom Cover**: The distance between cross rebars from the bottom face of the structure.
* Daten**Top Cover**: The distance between cross rebars from the top face of the structure.
* Daten**Rear Cover**: Rear cover for slab reinforcement of cross rebars.
* Daten**Anchor Length**: It represents arm's length of bent shape cross rebar when cross rebar type is BentShapeRebar.
* Daten**Bent Angle**: It represents angle for bent shape cross rebar when cross rebar type is BentShapeRebar.
* Daten**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times of diameter of cross rebars.
* Daten**Diameter**: Diameter of cross rebars
* Daten**Amount**: It contains count of cross rebars.
* Daten**Spacing**: It contains spacing between cross rebars.

**Properties of Distribution Rebars for bent shape rebars in cross Direction to selected face:**

* Daten**Amount**: It contains count of Distribution Rebars for Bent shape rebars in cross Direction.
* Daten**Spacing**: It contains spacing between Distribution Rebars for Bent shape rebars in cross Direction.

## Skripten

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Slab Reinforcement tool can be used from the [Python](/Python "Python") console by using the following function:

### Create Slab Reinforcementof Slab Spanning in One direction

To create Slab reinforcement spanning one direction as shown in above figures you can use makeSlabReinforcement function as follows:

```
from SlabReinforcement.SlabReinforcement import makeSlabReinforcement
SlabReinforcementGroup = makeSlabReinforcement(
    parallel_rebar_type="StraightRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_diameter=8,
    parallel_amount_spacing_check=False,
    parallel_amount_spacing_value=50,
    cross_rebar_type="BentShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=29,
    cross_bottom_cover=20,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=10,
    cross_rounding=2,
    cross_bent_bar_length=150,
    cross_bent_bar_angle=135,
    cross_distribution_rebars_check = True,
    cross_distribution_rebars_diameter = 8,
    cross_distribution_rebars_amount_spacing_check = True,
    cross_distribution_rebars_amount_spacing_value = 4,
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

* Creates a `SlabReinforcementGroup` object for slab spanning in one direction from the given `structure`, which is a Slab [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  + If no `structure` nor `facename` are given, it will take the user selected face as input.

**Properties used for slab spanning in one direction for scripting reinforcement**

**Properties for Rebars in Parallel Direction to selected face:**

* Daten**parallel\_rebar\_type**: Type of rebar for parallel rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
* Daten**parallel\_front\_cover**: The distance between parallel rebar and selected face.
* Daten**parallel\_rear\_cover**: Rear cover for slab reinforcement of parallel rebars.
* Daten**parallel\_left\_cover**: The distance between the left end of the parallel rebar to the left face of the structure.
* Daten**parallel\_right\_cover**: The distance between the right end of the parallel rebar to right face of the structure.
* Daten**parallel\_top\_cover**: The distance between parallel rebars from the top face of the structure.
* Daten**parallel\_bottom\_cover**: The distance between parallel rebars from the bottom face of the structure.
* Daten**parallel\_diameter**: Diameter of parallel rebars.
* Daten**parallel\_amount\_spacing\_check**: If is set to True, then value of parallel\_amount\_spacing\_value is used as rebars count else parallel\_amount\_spacing\_value's value is used as spacing in parallel rebars.
* Daten**parallel\_amount\_spacing\_value**: It contains count of rebars or spacing between parallel rebars based on value of amount\_spacing\_check.

**Properties for Rebars in Cross Direction to selected face:**

* Daten**cross\_rebar\_type**: Type of rebar for cross rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
* Daten**cross\_front\_cover**: The distance between cross rebar and cross\_face (face perpendicular to selected face).
* Daten**cross\_rear\_cover**: Rear cover for slab reinforcement of cross rebars.
* Daten**cross\_left\_cover**: The distance between the left end of the cross rebar to the left face of the structure.
* Daten**cross\_right\_cover**: The distance between the right end of the rebar to right face of the structure relative to cross\_face.
* Daten**cross\_top\_cover**: The distance between cross rebar from the top face of the structure.
* Daten**cross\_bottom\_cover**: The distance between cross rebar from the bottom face of the structure.
* Daten**cross\_diameter**: Diameter of cross rebars.
* Daten**cross\_amount\_spacing\_check**: If is set to True, then value of cross\_amount\_spacing\_value is used as rebars count else cross\_amount\_spacing\_value's value is used as spacing in rebars.
* Daten**cross\_amount\_spacing\_value**: It contains count of rebars or spacing between rebars based on value of cross\_amount\_spacing\_check.
* Daten**cross\_rounding**: A rounding value to be applied to the corners of the bars, expressed in times the cross\_diameter.
* Daten**cross\_bent\_bar\_length**: It represents arm's length of bent shape cross rebar when cross\_rebar\_type is BentShapeRebar
* Daten**cross\_bent\_bar\_angle**: It represents angle for bent shape cross rebar when cross\_rebar\_type is BentShapeRebar
* Daten**cross\_distribution\_rebars\_check**: If True add distribution rebars for cross bent shape rebars. Default is False.
* Daten**cross\_distribution\_rebars\_diameter**: Diameter for distribution rebars for cross bent shape rebars.
* Daten**cross\_distribution\_rebars\_amount\_spacing\_check**: If is set to True, then value of cross\_distribution\_rebars\_amount\_spacing\_value is used as rebars count else cross\_distribution\_rebars\_amount\_spacing\_value's value is used as spacing in cross\_distribution\_rebars. Default is True.
* Daten**cross\_distribution\_rebars\_amount\_spacing\_value**: It contains count or spacing between distribution rebars for one side of cross bent shape rebars based on value of cross\_distribution\_rebars\_check. Default is 2.

**Common Properties for Parallel and Cross Rebars:**

* Daten**mesh\_cover\_along**: It can have two values "Top" and "Bottom". It represent alignment of rebar mesh along top or bottom face of structure.
* Daten**structure**: Arch structure object. Default is None
* Daten**facename**: selected face of structure. Default is None

### Edition of Slab Reinforcement of Slab Spanning in one direction

You can change the properties of the Slab Reinforcement for slab spanning in one direction by using editSlabReinforcement function as follows:

```
from SlabReinforcement.SlabReinforcement import editSlabReinforcement
SlabReinforcementGroup = editSlabReinforcement(
    SlabReinforcementGroup,
    parallel_rebar_type="StraightRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_diameter=8,
    parallel_amount_spacing_check=True,
    parallel_amount_spacing_value=10,
    cross_rebar_type="BentShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=20,
    cross_bottom_cover=20,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=15,
    cross_rounding=2,
    cross_bent_bar_length=150,
    cross_bent_bar_angle=135,
    cross_distribution_rebars_check = True,
    cross_distribution_rebars_diameter = 8,
    cross_distribution_rebars_amount_spacing_check = True,
    cross_distribution_rebars_amount_spacing_value = 4,
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

* `slabReinforcementGroup` is a previously created `Slab Reinforcement` group object.
* The other parameters are the same as required by the `makeSingleTieFourRebars()` function.

you can change any property to edit Slab Reinforcement.

Retrieved from "<http://wiki.freecad.org/index.php?title=Example_Slab_Spanning_in_One_Direction/de&oldid=1372669>"