---
title: PartDesign SubtractivePipe
---

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PartDesign SubtractivePipe                                                                                                                                            |
| Menu location                                                                                                                                                         |
| Part Design → Create a substractive feature → Subtractive pipe                                                                                                        |
| Workbenches                                                                                                                                                           |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench")                                                                                                            |
| Default shortcut                                                                                                                                                      |
| _None_                                                                                                                                                                |
| Introduced in version                                                                                                                                                 |
| 0.17                                                                                                                                                                  |
| See also                                                                                                                                                              |
| [PartDesign AdditivePipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe"), [PartDesign SubtractiveLoft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft") |
|                                                                                                                                                                       |

## Description

**Subtractive Pipe** creates a subtractive solid in the active Body by sweeping one or more sketches (also referred to as cross-sections) along an open or closed path. Its shape is then subtracted from the existing solid. SubtractivePipe is often used in connection with [Part Helix](/Part_Helix "Part Helix") and [PartDesign ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") to create a thread; see the [Thread for Screw Tutorial](/Thread_for_Screw_Tutorial "Thread for Screw Tutorial") for details.

## Usage

1. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/PartDesign_SubtractivePipe.svg) [Subtractive pipe](/PartDesign_SubtractivePipe "PartDesign SubtractivePipe") button.
   - Select the **PartDesign → Create an substractive feature → ![](/src/assets/images/PartDesign_SubtractivePipe.svg) Subtractive pipe** option from the menu.
2. In the **Select feature** dialog, select a sketch to be used as first cross-section and click OK.
   - Alternatively, a sketch or a face of a 3D object ([introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")) can be selected before starting the tool. You will not get this dialog then.
3. In the **Pipe parameters** under **Profile**, press the Object button.
4. Select the sketch to be used as path in the 3D view:
   - Alternatively, edges of the body can be selected by pressing Add Edge and selecting edges in the 3D view.
5. To use more than one cross-section, under **Section transformation** set the Transform mode to _Multisection_; press Add Section then select a sketch in the 3D view. Repeat for each additional cross-section.
6. Set options if needed and click OK.

## Options

**Section Transformation**:

- Select **Constant** to use a single profile
- Select **Multisection** to use multiple profiles

**Section Orientation**:

- Standard
  - This keeps the cross section shape perpendicular to the path. This is the default setting.
- Fixed
  - Orientation set by first profile and constant throughout. This deactivates the alignment to the path normal vector. That means that the cross-section shape will not rotate with the path. Sweep along a circle to see the effect.
- Frenet
  - Create minimum possible twisting of profile. For more info, see [Frenet-Serret Formulas](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas)
- Auxiliary
  - Specify secondary path to guide pipe.
  - For each point _P_ along the sweep path, there will be a corresponding point _Q_ on the auxiliary path.
  - As the profile is swept, it will be transformed such that the _PQ_ line is the normal of the sweep path.
  - If _Curvelinear equivalence_ is set, then the _Q_ points are scaled proportionally along the sweep path, regardless of is length.
- Binormal
  - Specify binormal vector in X, Y and Z

**Corner Transition**

- Transformed
- Right
- Rounded

## Properties

- Data**Label**: name given to the operation, this name can be changed at convenience.
- Data**Refine**: true or false. If set to true, cleans the solid from residual edges left by features. See [Part RefineShape](/Part_RefineShape "Part RefineShape") for more details.
- Data**Sections**: lists the sections used.
- Data**Spine Tangent**: true or false (default). True extends the path to include tangent edges.
- Data**Auxiliary Spine Tangent**: true or false (default). True extends the auxiliary path to include tangent edges.
- Data**Auxiliary Curvelinear**: true or false (default). True calculates normal between equidistant points on both spines.
- Data**Mode**: profile mode. See [Options](#Options).
- Data**Binormal**: binormal vector for corresponding orientation mode.
- Data**Transition**: transition mode. Options are _Transformed_, _Right Corner_ or _Round Corner_.
- Data**Transformation**: _Constant_ uses a single cross-section. _Multisection_ uses two or more cross-sections. _Linear_, _S-shape_ and _Interpolation_ are currently not functional.

## Notes

- To better control the shape of the pipe, it is recommended that all cross-sections have the same number of segments. For example, for a pipe between a rectangle and a circle, the circle should be broken down into 4 connected arcs.
- You can pipe from or toward a single [vertex](/Glossary#V "Glossary") from a sketch or the body. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- When you select a [vertex](/Glossary#V "Glossary") as section, it must in most cases be the last section of the pipe. You can change the order of the sections by dragging them in the list.
- The path can only be from a single sketch, feature or ShapeBinder. In case you want to sweep along several edges from different sketches, use a [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder").
- The path must not contain branches or T-junctions etc. Loops are allowed.
- It can lead to issues if the cross-section is not perpendicular to the path in 3D.
- A cross-section cannot lie on the same plane as the one immediately preceding it.
- The cross-sections must not contain disjoint or crossing loops.
- If the sketch has inner geometry, then the order in which the sketch geometry is created should be the same for all sections. Either start all sections with the inner geometry, or start them all with the outer. Otherwise an invalid pipe will be created where inner and outer walls cross.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePipe/en&oldid=1364434>"
