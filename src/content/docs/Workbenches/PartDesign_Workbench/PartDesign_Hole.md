---
title: PartDesign Hole
---

|                                                             |
| ----------------------------------------------------------- |
| PartDesign Hole                                             |
| Menu location                                               |
| Part Design → Create a substractive feature → Hole          |
| Workbenches                                                 |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")  |
| Default shortcut                                            |
| _None_                                                      |
| Introduced in version                                       |
| 0.17                                                        |
| See also                                                    |
| [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket") |
|                                                             |

## Description

The **Hole** feature creates one or more holes from a selected sketch's circles and arcs. If arcs are present they must be part of closed contours. All non arc/circle entities are ignored but they still must form closed contours. Many parameters can be set such as threading and size, fit, hole type (countersink, counterbore, straight) and more.

The centers of the circles and arcs are used to position the holes, but please note that their radii are not taken into account. The generated holes will be identical even if the radii vary.

![](/images/Countersunk_and_counterbored_holes_cross-section1.png)

Countersunk (to the left) and counterbored (to the right) holes longitudinal section.

## Usage

1. Press the ![](/images/PartDesign_Hole.svg) **Hole** button.
2. If an existing unused sketch is found, it will be used automatically. If more than one sketch is found, a **Select feature** panel appears to make a selection. Alternatively, a sketch can be selected before launching the Hole command.
3. Define the Hole parameters, that are described in section [Options](#Options).
4. Press OK.

## Options

![](/images/PartDesign_Hole_parameters.png)

Depending on the specified options, some fields will be active or stay disabled.

- **Profile**:

: If set to _None_, no threading info is defined, and the diameter needs to be set manually.
: When set to a supported [standard](https://en.wikipedia.org/wiki/List_of_thread_standards) the diameter and other parameters can be set automatically.

- **Threaded**: _Only available if Profile is not None_

: If checked, the provided diameter will be the recommended drill size for post-processing with a [cutting tap](https://en.wikipedia.org/wiki/Tap_and_die).
: If unchecked, the diameter is set according to _Clearance_ to pass-through a thread without contact.

- **Model Thread**: _Only available if threaded_

: If checked a real thread is modeled. This consumes much computing power and is usually not used for models, except for display purposes or sometimes for 3D prints. If it is used, it is advised to check it as one of the last actions done to the model, because it will increase recomputation time significantly.

- **Direction**: _Only available if threaded_

: Sets the thread direction as Right Hand or Left hand.

- **Size**: _Only available if threaded_

: Sets the thread size. Requires _Profile_ to not be _None_

- **Clearance**: _Only available if non-threaded_

: Determines the distance from the thread crest to the side of the hole. Can be understood as how _tight_ a bolt will pass-through.
: For ISO threads the diameters are according to the ISO 273 standard
: For UTS they are calculated using a rule of thumb because there is no norm defining them.

- **Class**: Defines the tolerance class.
- **Diameter**: Defines the hole diameter, if the _Profile_ is set to _None_.
- **Depth**: Depth of the hole from the sketch plane.

: _Dimension_: Enables a field to enter a value.
: _Through All_: Will cut the hole through the whole Body
: To reduce the file size, do not use _Through All_ if _Model Thread_ is checked, specify a minimal depth instead.

### Hole cut

- **Hole Cut Type**: _None_ means no cut, other types are the various norms for screws and the generic types _Counterbore_, _Countersink_ and ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) _Counterdrill_. ISO and DIN 7984 models appear if _Profile_ receives an ISO or DIN selection.
- **Diameter**: sets the upper diameter (at the sketch plane) for the hole cut.
- **Depth**: The depth is defined differently depending on the _Hole Cut Type_:
  - For a _Counterbore_, it is the depth of the hole cut, measured from the sketch plane.
  - For a _Countersink_, it is the depth of the screw head top below the sketch plane.
  - For a _Counterdrill_, it is the depth of the cylindrical part of the hole cut.
- **Countersink angle**: angle of the conical hole cut. Only applicable for countersinks, counterdrills, ISO 2009, ISO 7046, ISO 10642 profiles.

### Drill point

- **Drill point**: defines the ending of the hole if _Depth_ is set to _Dimension_.
  - **Flat** produces a flat bottom
  - **Angled** sets a conical point.

: **Take into account for depth** will subtract the conical height from the _Dimension_. So if for example _Dimension_ is 7.00 and the option is not used, the cylindrical part of the hole will be 7.00 and the depth necessary for the conical part is added to the hole depth. If the option is used, the overall hole depth including the conical point will be 7.00.

### Misc

- **Tapered**: sets a taper angle to the hole. Value is calculated from the sketch plane normal.

: 90 degrees sets a straight hole.
: Under 90 generates a smaller hole radius at the end, larger at the start.
: Over 90 generates a larger hole radius at the end, smaller at the start.

- **Reversed**: reverses the hole extrusion direction. The default direction is the mapping direction of the hole sketch to its attachment.

## Properties

Much of the Data properties are the same as those shown in [Options](#Options).

- Data**Label**: name given to the object, this name can be changed at convenience.
- Data**Refine**: true or false. If set to true, cleans the solid from residual edges left by features. See ![](/images/Part_RefineShape.svg) [Part RefineShape](/Part_RefineShape "Part RefineShape") for more details.

## Limitations

- By default, the hole feature extrudes below the sketch plane. If the solid lies on the XY*Plane, and the hole sketch is attached to the XY_Plane, it will try to extrude away from the solid and seemingly produce no result. In such a case, the option \_Reversed* needs to be set; alternatively the sketch can be mapped to the bottom face of the solid.

## Cut Type Definitions

Cut types (screw-types) are defined in [json](https://de.wikipedia.org/wiki/JavaScript_Object_Notation) files. There is a set of files distributed with FreeCAD, but users can create their own definitions. Files are searched in `<UserAppDataDir>/PartDesign/Hole`. The `UserAppDataDir` can be found by typing `App.getUserAppDataDir()` in the [Python console](/Python_console "Python console").

The file should contain:

- **name**: The name of the definition. This must be unique as it will be used as identifier in the FreeCAD UI and as internal index.
- **cut_type**: Either `countersink` or `counterbore`.
- **thread_type**: Either `metric` or `metricfine`.
- **angle**: The angle of a countersink (not necessary for counterbore).
- **data**: A list of sizes, consisting of:
  - **thread**: Name of thread known to FreeCAD.
  - **diameter**: The diameter of the cut.
  - **depth**: Depth of the counterbore (not necessary for countersink).

Example:

```
{
    "name": "DIN 7984",
    "cut_type": "counterbore",
    "thread_type": "metric",
    "data": [
        { "thread": "M2",   "diameter":  4.3, "depth":  1.6 },
        { "thread": "M2.5", "diameter":  5.0, "depth":  2.0 },
        …
    ]
}

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Hole/en&oldid=1561176>"
