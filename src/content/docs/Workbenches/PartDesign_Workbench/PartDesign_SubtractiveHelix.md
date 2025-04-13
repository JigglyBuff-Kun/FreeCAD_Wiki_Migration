---
title: PartDesign SubtractiveHelix
---

|                                                                                  |
| -------------------------------------------------------------------------------- |
| PartDesign SubtractiveHelix                                                      |
| Menu location                                                                    |
| Part Design → Create a subtractive feature → Subtractive helix                   |
| Workbenches                                                                      |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                       |
| Default shortcut                                                                 |
| _None_                                                                           |
| Introduced in version                                                            |
| 0.19                                                                             |
| See also                                                                         |
| [PartDesign AdditiveHelix](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix") |
|                                                                                  |

## Description

The **SubtractiveHelix** tool modifies a solid by sweeping a selected sketch or 2D object along a helix path cutting away the material.

![](/src/assets/images/PartDesign_SubtractiveHelix_example_overview.png)

_The profile (B), is swept around axis (A) in order to produce the helical groove (C) in the pre-existing work piece_

## Usage

1. Select the sketch to be swept into a helix. A face on the existing solid can alternatively be used.
2. Press the ![](/src/assets/images/PartDesign_SubtractiveHelix.svg) [PartDesign SubtractiveHelix](/PartDesign_SubtractiveHelix "PartDesign SubtractiveHelix") button.
3. Set the Helix parameters (see next section).
4. Inspect the Helix in the view window, to ensure that the parameters do not result in a self intersecting helix.
5. Press OK.

## Options

When creating a SubtractiveHelix, the **Helix parameters** dialogue offers several parameters specifying how the sketch should be swept.

![](/src/assets/images/PartDesign_SubtractiveHelix_taskpanel.png)

### Axis

This option specifies the axis about which the sketch is to be swept.

- **Normal sketch axis**: selects the normal of the sketch that runs through the sketch origin as axis. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- **Vertical sketch axis**: selects the vertical sketch axis.
- **Horizontal sketch axis**: selects the horizontal sketch axis.
- **Construction line**: selects a construction line contained in the sketch used by the Helix. The drop down list will contain an entry for each construction line. The first construction line created in the sketch will be labelled _Construction line 1_.
- **Base (X/Y/Z) axis**: selects the X, Y or Z axis of the Body's Origin;
- **Select reference...**: allows selection in the 3D view of an edge on the Body, or a [datum line](/PartDesign_Line "PartDesign Line").

### Mode

This controls what parameters will be used to define the helix. The choices are:

- **Pitch-Height-Angle**: definition via the height per turn and the overall height
- **Pitch-Turns-Angle**: definition via the height per turn and the number of turns
- **Height-Turns-Angle**: definition via the overall height and the number of turns
- **Height-Turns-Growth** [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): definition via the overall height, the number of turns and the growth of the helical radius. So a Height of zero leads to a path in form of a spiral. A Height and Growth of zero to leads to a path in form of a circle.

### Pitch

The distance between turns in the helix.

### Height

The height of the helix (center-center).

### Turns

The number of turns in the helix. Define as Height/Pitch

### Cone Angle

Angle of the cone that forms a hull around the helix. Allowable range: [-89°, +89°].

### Left handed

If checked, the turning direction of helix is reversed from default clockwise to counterclockwise.

### Reversed

If checked, the axis direction of helix is reversed from default.

### Remove outside of profile

If checked, the result will be the intersection of the swept profile and the preexisting body.

### Update view

If checked, the helix will be shown in the view, and updated automatically on every change of the parameters.

## Preferences

- A subtractive helix that does not intersect the body will be visible in the preview if **Tools → Edit parameters... → BaseApp → Preferences → Mod → PartDesign → SubtractiveHelixPreview** is set to `true`. The default for this preference is `true`. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Properties

- Data**Pitch**: The axial distance between two turns.
- Data**Height**: The total length of the helix (not accounting for the extent of the profile)
- Data**Turns**: The number of turns (does not need to be a whole number)
- Data**Left Handed**: See [Left Handed](#Left_handed).
- Data**Reversed**: See [Reversed](#Reversed).
- Data**Angle**: The rate at which the radius of the helix increase along the axis. Allowable range: [-89°, +89°].
- Data**Reference axis**: The helix axis
- Data**Mode**: The helix input mode (pitch-height, pitch-turns, turns-height)
- Data**Outside**: If true, the result will be the intersection of the swept profile and the preexisting body.
- Data**Has Been Edited**: If false, the tool will propose an initial value for pitch based on the profile bounding box, so that self intersection is avoided.
- Data**Refine**: true or false. If set to true, cleans the solid from residual edges left by features. See [Part RefineShape](/Part_RefineShape "Part RefineShape") for more details.
- Data**Profile**: Either a sketch containing a closed contour, or a face.
- Data**Midplane**: Not used.
- Data**Up to face**: Not used.
- Data**Allow multiple face**: Not used.

## Notes

- A ![](/src/assets/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") cannot be used for the profile.
- When using a ![](/src/assets/images/d/d2/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") for the profile, selecting the binder in the [Tree view](/Tree_view "Tree view") will fail, instead the binder's face has to selected in the [3D view](/3D_view "3D view").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveHelix/en&oldid=1424622>"
