---
title: Example Slab Having LShape Rebars Reinforcement Mesh/de
---
|  |
| --- |
| Tutorial |
| Topic |
| Example Slab Having L-Shape Rebars Reinforcement Mesh |
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

In this example we will create Slab Reinforcement having L-Shape Rebars for both direction as shown in below figure.

![](/images/L-Shape_Rebars_isometric_view.png)

A Example of Slab Reinforcement having L-Shape Rebars in Slab [Arch Structure](/Arch_Structure "Arch Structure")

## Anwendung

1. Select any face of a previously created Slab ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object. as shown in below image.

:   ![](/images/Selected_face_for_Slab_Arch_Structure.png)
:   Selected face for Slab Arch Structure

2. Then select ![](/images/Reinforcement_SlabRebars.svg) [Slab Reinforcement](/Reinforcement_SlabRebars "Reinforcement SlabRebars") from the rebar tools.

3. A dialog box will pop-out on screen as shown below.

:   ![](/images/Slab_Reinforcement_input_dialog_box.png)
:   Dialog Box for the Slab Reinforcement

4. Select the desired type of cover of reinforcement mesh (Top or Bottom) In example Bottom is selected.

5. Select the LShapeRebar rebar type and other input data for rebars in parallel direction of selected face as show in below image.

:   ![](/images/L-Shape_Rebars_parallel_direction_input.png)
:   Dialog Box for Slab Reinforcement of the Rebars in parallel direction of selected face

6. Now click on Next button or select Cross Rebars in list view.

7. Now select LShapeRebar rebar type and other desired data for input data for rabars in cross direction of selected face as show in below image.

:   ![](/images/L-Shape_Rebars_cross_direction_inputs.png)
:   Dialog Box for Slab Reinforcement of the Rebars in cross direction of selected face

8. Click OK or Apply or Finish to generate Slab reinforcement.

9. Click Cancel to exit the dialog box.

## Properties Used for Slab Reinforcement Having L-Shape Rebars

**Properties for Rebars in Parallel Direction to selected face:**

* Daten**Mesh Cover Along**: It represent alignment of rebar mesh along top or bottom face of structure. It can have two values "Top" and "Bottom".
* Daten**Rebar Type**: Type of rebar for parallel rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
* Daten**Front Cover**: The distance between parallel rebar and selected face.
* Daten**Left Cover**: The distance between the left end of the parallel rebar to the left face of the structure.
* Daten**Right Cover**: The distance between the right end of the parallel rebar to right face of the structure.
* Daten**Bottom Cover**: The distance between parallel rebars from the bottom face of the structure.
* Daten**Top Cover**: The distance between parallel rebars from the top face of the structure.
* Daten**Rear Cover**: Rear cover for slab reinforcement of parallel rebars.
* Daten**Hook Orientation**: It represents orintation of hook of parallel L-Shape rebar if parallel\_rebar\_type is LShapeRebar. It can have three values "Left", "Right","Alternate".
* Daten**Diameter**: Diameter of parallel rebars.
* Daten**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times of diameter of parallel rebars.
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
* Daten**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times of diameter of cross rebars.
* Daten**Hook Orientation**: It represents orintation of hook of corss L-Shape rebar if cross\_rebar\_type is LShapeRebar. It can have three values "Left", "Right","Alternate".
* Daten**Diameter**: Diameter of cross rebars
* Daten**Amount**: It contains count of cross rebars.
* Daten**Spacing**: It contains spacing between cross rebars.

## Scripting

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Slab Reinforcement tool can be used from the [Python](/Python "Python") console by using the following function:

### Create Slab Reinforcement of L-Shape Rebars

To create Slab reinforcement L-Shape Rebars as shown in above figures you can use makeSlabReinforcement function as follows:

```
from SlabReinforcement.SlabReinforcement import makeSlabReinforcement
SlabReinforcementGroup = makeSlabReinforcement(
    parallel_rebar_type="LShapeRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_rounding=2,
    parallel_diameter=8,
    parallel_amount_spacing_check=True,
    parallel_amount_spacing_value=10,
    parallel_l_shape_hook_orintation= "Alternate",
    cross_rebar_type="LShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=20,
    cross_bottom_cover=20,
    cross_rounding=2,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=10,
    cross_l_shape_hook_orintation= "Alternate",
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

* Creates a `SlabReinforcementGroup` object for slab reinforcement having L-Shape rebars for the given `structure`, which is a Slab [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  + If no `structure` nor `facename` are given, it will take the user selected face as input.

**Properties used for slab reinforcement having L-Shape rebars for scripting reinforcement**

**Properties for Rebars in Parallel Direction to selected face:**

* Daten**parallel\_rebar\_type**: Type of rebar for parallel rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
* Daten**parallel\_front\_cover**: The distance between parallel rebar and selected face.
* Daten**parallel\_rear\_cover**: Rear cover for slab reinforcement of parallel rebars.
* Daten**parallel\_left\_cover**: The distance between the left end of the parallel rebar to the left face of the structure.
* Daten**parallel\_right\_cover**: The distance between the right end of the parallel rebar to right face of the structure.
* Daten**parallel\_top\_cover**: The distance between parallel rebars from the top face of the structure.
* Daten**parallel\_bottom\_cover**: The distance between parallel rebars from the bottom face of the structure.
* Daten**parallel\_l\_shape\_hook\_orintation**: It represents orintation of hook of parallel L-Shape rebar if parallel\_rebar\_type is LShapeRebar. It can have three values "Left", "Right","Alternate"
* Daten**parallel\_diameter**: Diameter of parallel rebars.
* Daten**parallel\_amount\_spacing\_check**: If is set to True, then value of parallel\_amount\_spacing\_value is used as rebars count else parallel\_amount\_spacing\_value's value is used as spacing in parallel rebars.
* Daten**parallel\_amount\_spacing\_value**: It contains count of rebars or spacing between parallel rebars based on value of amount\_spacing\_check.
* Daten**parallel\_rounding**: A rounding value to be applied to the corners of the bars, expressed in times the parallel\_diameter.

**Properties for Rebars in Cross Direction to selected face:**

* Daten**cross\_rebar\_type**: Type of rebar for cross rebars for slab reinforcement. It can have four values 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.
* Daten**cross\_front\_cover**: The distance between cross rebar and cross\_face (face perpendicular to selected face).
* Daten**cross\_rear\_cover**: Rear cover for slab reinforcement of cross rebars.
* Daten**cross\_left\_cover**: The distance between the left end of the cross rebar to the left face of the structure.
* Daten**cross\_right\_cover**: The distance between the right end of the rebar to right face of the structure relative to cross\_face.
* Daten**cross\_top\_cover**: The distance between cross rebar from the top face of the structure.
* Daten**cross\_bottom\_cover**: The distance between cross rebar from the bottom face of the structure.
* Daten**cross\_l\_shape\_hook\_orintation**: It represents orintation of hook of cross L-Shape rebar if cross\_rebar\_type is LShapeRebar. It can have three values "Left", "Right", "Alternate"
* Daten**cross\_diameter**: Diameter of cross rebars.
* Daten**cross\_amount\_spacing\_check**: If is set to True, then value of cross\_amount\_spacing\_value is used as rebars count else cross\_amount\_spacing\_value's value is used as spacing in rebars.
* Daten**cross\_amount\_spacing\_value**: It contains count of rebars or spacing between rebars based on value of cross\_amount\_spacing\_check.
* Daten**cross\_rounding**: A rounding value to be applied to the corners of the bars, expressed in times the cross\_diameter.

**Common Properties for Parallel and Cross Rebars:**

* Daten**mesh\_cover\_along**: It can have two values "Top" and "Bottom". It represent alignment of rebar mesh along top or bottom face of structure.
* Daten**structure**: Arch structure object. Default is None
* Daten**facename**: selected face of structure. Default is None

### Edition of Slab Reinforcement having L-Shape Rebars

You can change the properties of the Slab Reinforcement having L-Shape Rebars by using editSlabReinforcement function as follows:

```
from SlabReinforcement.SlabReinforcement import editSlabReinforcement
SlabReinforcementGroup = editSlabReinforcement(
    SlabReinforcementGroup,
    parallel_rebar_type="LShapeRebar",
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
    parallel_l_shape_hook_orintation= "Alternate",
    cross_rebar_type="LShapeRebar",
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
    cross_l_shape_hook_orintation= "Alternate",
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

* `slabReinforcementGroup` is a previously created `Slab Reinforcement` group object.
* The other parameters are the same as required by the `makeSingleTieFourRebars()` function.

you can change any property to edit Slab Reinforcement.

Retrieved from "<http://wiki.freecad.org/index.php?title=Example_Slab_Having_LShape_Rebars_Reinforcement_Mesh/de&oldid=1372642>"