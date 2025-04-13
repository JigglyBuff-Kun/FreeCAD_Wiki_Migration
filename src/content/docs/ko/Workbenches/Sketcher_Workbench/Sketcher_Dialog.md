---
title: 스케처 대화상자(Sketcher Dialog)
---
## Introduction

While a sketch is being edited, or, in other words, while a sketch is in edit mode, the Sketcher Dialog is displayed on the Task tab of the [Combo view](/Combo_view "Combo view").

To put a sketch in edit mode see ![](/images/Sketcher_EditSketch.svg) [Sketcher EditSketch](/Sketcher_EditSketch "Sketcher EditSketch"). To finish edit mode see ![](/images/Sketcher_LeaveSketch.svg) [Sketcher LeaveSketch](/Sketcher_LeaveSketch "Sketcher LeaveSketch").

The Sketcher Dialog has the following sections:

## Tool parameters

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Some tools add a parameters section at the top of the dialog. Available options and/or modes depend on the tool.

![](/images/Sketcher_Dialog_Line_parameters.png)

The parameters section of the [Sketcher CreateLine](/Sketcher_CreateLine "Sketcher CreateLine") tool

## Solver messages

This section informs about the state of the sketch.

The possible messages are:

* Empty sketch
* Over-constrained: (#, #, #)
* Malformed constraints: (#, #, #)
* Redundant constraints: (#, #, #)
* Partially redundant: (#, #, #)
* Solver failed to converge
* Under constrained: n DoF(s)
* Fully constrained

If a sketch is under-constrained the number of degrees of freedom (or DoFs) is indicated. Clicking the underlined text will select the under-constrained sketch elements. See ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Sketcher SelectElementsWithDoFs](/Sketcher_SelectElementsWithDoFs "Sketcher SelectElementsWithDoFs").

If a sketch has redundant constraints or is over-constrained the indices of the involved constraints are indicated. Clicking the underlined text will select them. See ![](/images/Sketcher_SelectRedundantConstraints.svg) [Sketcher SelectRedundantConstraints](/Sketcher_SelectRedundantConstraints "Sketcher SelectRedundantConstraints") and ![](/images/Sketcher_SelectConflictingConstraints.svg) [Sketcher SelectConflictingConstraints](/Sketcher_SelectConflictingConstraints "Sketcher SelectConflictingConstraints").

Malformed constraints can be fixed with ![](/images/Sketcher_ValidateSketch.svg) [Sketcher ValidateSketch](/Sketcher_ValidateSketch "Sketcher ValidateSketch").

Some messages are displayed in red for a reason: they are warnings that should not be ignored. They signal issues that must be addressed as they interfere with the solver. The messages are not mutually exclusive. If more than one applies only the first in the list is displayed.

To change the colors used for the message see [Fine-tuning](/Fine-tuning#Constraint_label_colors "Fine-tuning").

Available options:

| Option | Description |
| --- | --- |
|  | This button opens a menu:  * **Auto update**: If checked, the whole document is recomputed after every sketch action. Not advisable for complex documents. |

## Advanced solver control

This section will only appear if you check the **Show section 'Advanced solver control'** option in the [sketcher preferences](/Sketcher_Preferences "Sketcher Preferences").

Note that most of the options in this section are of no practical use. They can however help with testing and understanding the solvers.

Available options:

| Option | Description |
| --- | --- |
| **Default solver** | The solver that is used for solving the geometry. **[LevenbergMarquardt](https://en.wikipedia.org/wiki/Levenberg%E2%80%93Marquardt_algorithm)** and **DogLeg** are [trust region](https://en.wikipedia.org/wiki/Trust_region) optimization algorithms. The **BFGS** solver uses the [Broyden–Fletcher–Goldfarb–Shanno algorithm](https://en.wikipedia.org/wiki/Broyden%E2%80%93Fletcher%E2%80%93Goldfarb%E2%80%93Shanno_algorithm). |
| **DogLeg Gauss step** | This setting is only available for the solver **DogLeg**. It is the step type used in the DogLeg algorithm. |
| **Maximum iterations** | If the solver needs more iterations to find a convergence to a solution, it will stop and output that it failed. |
| **Sketch size multiplier** | If checked, the maximum iterations will be multiplied by the number of parameters. The idea is that bigger sketches would need more iterations to converge. |
| **Convergence** | The threshold for the squared error. This error is used to determine whether a solution converges or not. |
| **Eps/Eps1/Tau** | These settings are only available for the solver **LevenbergMarquardt**. You should only change something here if you fully understand how the LevenbergMarquardt solver works. |
| **Tolg/Tolx/Tolf** | These settings are only available for the solver **DogLeg**. You should only change something here if you fully understand how the DogLeg solver works. |
| **QR Algorithm** | During diagnosing the rank of the matrix is calculated which enables to further analyze the constraint system to determine if there are redundant/conflicting constraints. The rank revealing decomposition used in FreeCAD is QR. There are two algorithms: **Eigen Dense QR** is a dense matrix QR with full pivoting, which is the legacy proven algorithm that works very well but it is rather slow as the system grows. The **Eigen Sparse QR** algorithm is an optimization for sparse matrices (having lots of zeros), which is usually much faster, since FreeCAD's systems do have a lot of zeros. |
| **Pivot threshold** | When doing a QR, values under the pivot threshold are treated as zero. |
| **Redundant Solver** | The solver that is used during diagnosing to determine whether a group is redundant or conflicting. |
| **Red. Max Iterations** | The same as **Maximum iterations**, but for the redundant solving. |
| **Red. Sketch size multiplier** | The same as **Sketch size multiplier**, but for the redundant solving. |
| **Red. Convergence** | The same as **Convergence**, but for the redundant solving. |
| **R.Eps/R.Eps1/R.Tau** | The same as **Eps/Eps1/Tau**, but for the redundant solving. |
| **R.Tolg/R.Tolx/R.Tolf** | The same as **Tolg/Tolx/Tolf**, but for the redundant solving. |
| **Console Debug mode** | Setting to specify the verbosity of the console output. |
| Solve | This button explicitly starts the solver. |
| Restore Defaults | This button restores the default solver settings. |

## Constraints

This section lists the constraints in the sketch. Unchecking a constraint in the list will hide it in the sketch. Constraints can be selected in the list as well as in the sketch.

Constraints can also be (un)hidden with ![](/images/Sketcher_SwitchVirtualSpace.svg) [Sketcher SwitchVirtualSpace](/Sketcher_SwitchVirtualSpace "Sketcher SwitchVirtualSpace").

Available options:

| Option | Description |
| --- | --- |
| Filter | If the Filter checkbox is checked the Filter dropdown list controls which constraints are listed:  * **All**: All constraints. * **Geometric**: Geometric constraints. * **Datums**: [Driving](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") dimensional constraints. Does not work properly: all dimensional constraints are filtered. * **Named**: Named constraints. Does not work. * **Reference**: [Driven](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") dimensional constraints. Does not work. * **Selected constraints**: Constraints selected in the sketch. * **Associated constraints**: Constraints associated with elements selected in the sketch. |
|  | This button toggles the visibility of the listed constraints in the sketch. |
|  | This button opens a menu:  * **Auto constraints**: If checked, some geometric constraints are applied automatically to new elements. * **Auto remove redundants**: If checked, new constraints that are redundant are automatically removed. * **Show only filtered Constraints**: If checked, only the listed constraints are shown in the sketch. * **Extended information (in widget)**: If checked, extended information is added in this form:   `[(GeoID1,PosID1),(GeoID2,PosID2),(GeoID3,PosID3)]`  GeoID is a zero-based index for non-external geometry. The X axis has GeoID -1, the Y axis has GeoID -2. GeoID -3, -4 etc. are used for external geometry.  PosID can have the following values:  0 = edge, 1 = start point, 2 = end point, 3 = center point.  For example a dimension from the origin to the center of a circle that is the 2nd non-external element in the sketch will have this extended information:  `[(-1,1),(1,3)]`   * **Hide internal alignment (in widget)**: If checked, constraints associated with internal alignments are hidden in the list. The  [Show/Hide internal geometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry") tool can also hide these constraints, but will also hide the internal alignments in the sketch. |
| **Context menu** | Right-clicking the background of the list, or right-clicking constraints selected in the list opens a context menu. The menu has the following options:  * **Change value**: Changes the value of a dimensional constraint. Only works for a single constraint. You can also double click the constraint in the list, or double click its value in the [3D view](/3D_view "3D view"). * **Toggle to/from reference**: See [Sketcher ToggleDrivingConstraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint"). * **Deactivate** or **Activate**: See [Sketcher ToggleActiveConstraint](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"). * **Show constraints**: Same as checking the constraint checkbox. But, unlike the checkbox, also works for more than one constraint. * **Hide constraints**: Same as unchecking the constraint checkbox. Idem. * **Select Elements**: See [Sketcher SelectElementsAssociatedWithConstraints](/Sketcher_SelectElementsAssociatedWithConstraints "Sketcher SelectElementsAssociatedWithConstraints"). * **Rename**: Renames the constraint. * **Center sketch**: Centers the 3D view around the selected constraints. * **Delete**: Deletes the selected constrains. The Del key can also be used. * **Swap constraint names**: Swaps the names of selected constraints. Only works if two constraints with user given names are selected. |

## Elements

This section lists the elements in the sketch. Unchecking an element in the list will hide it in the sketch. Elements can be selected in the list as well as in the sketch.

Available options:

| Option | Description |
| --- | --- |
| Filter | If the Filter checkbox is checked the Filter dropdown list controls which elements are listed:  * **Normal**: Normal geometry: geometry that does not fall in the next three categories. * **Construction**: [Construction geometry](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"). * **Internal**: [Internal geometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry"). * **External**: [External geometry](/Sketcher_External "Sketcher External"). * **All types**: All geometry types. Specific types can be selected in the rest of the list:   + **Point**   + **Line**   + **Circle**   + **Ellipse**   + **Arc of circle**   + **Arc of ellipse**   + **Arc of hyperbola**   + **Arc of parabola**   + **B-Spline** |
|  | This button opens a menu:  * **Extended information**: If checked, extended element information is provided.   For non-external geometry the information in the list then changes from:  `<N>-<TYPE>`  to:  `<TYPE>(Edge<N>#ID<GeoID>#<VLX>)[-Construction]`  <TYPE>: Element type.  <N>: A 1-based index that indicates the creation order of the element.  <GeoID>: See under [Constraints](#Constraints).  <VLX>: Element layer. See below. |
|  | Each element in the list has 1 to 4 buttons organized in 4 columns. These select a specific part of the element. Only applicable buttons are shown.  * Button in column 1: Selects the edge of the element. * Button in column 2: Selects the start point of the element. * Button in column 3: Selects the end point of the element. * Button in column 4: Selects the center point of the element.   Clicking the text has the same effect as clicking the first available button of the element.  *In the image the edge of a line and the center of an arc have been selected.*  *The line does not have a button in column 4 as it does not have a center.* |
| **Context menu** | Right-clicking the background of the list, or right-clicking elements selected in the list opens a context menu. The menu contains the Geometric [constraint tools](/Sketcher_Workbench#Sketcher_constraints "Sketcher Workbench"), the Dimensional constraint tools and the following additional options:  * **Toggle construction geometry**: See [Sketcher ToggleConstruction](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction"). * **Select Constraints**: See [Sketcher SelectConstraints](/Sketcher_SelectConstraints "Sketcher SelectConstraints"). * **Select Origin**: See [Sketcher SelectOrigin](/Sketcher_SelectOrigin "Sketcher SelectOrigin"). * **Select Horizontal Axis**: See [Sketcher SelectHorizontalAxis](/Sketcher_SelectHorizontalAxis "Sketcher SelectHorizontalAxis"). * **Select Vertical Axis**: See [Sketcher SelectVerticalAxis](/Sketcher_SelectVerticalAxis "Sketcher SelectVerticalAxis"). * **Layer**: 3 layers are available:   + **Layer 0**: Indicated as `VL0` in extended information. This is the default layer. Elements on this layer are displayed with a solid line type.   + **Layer 1**: Indicated as `VL1` in extended information. Elements on this layer are displayed with a dashed line type.   + **Hidden**: Indicated as `VL2` in extended information. Elements on this layer are hidden in the sketch.   The rendering order of layers 0 and 1 is such that when picking coincident points in the [3D view](/3D_view "3D view") elements on layer 0 are selected in favor of those on layer 1.   * **Delete**: Deletes the selected elements. The Del key can also be used. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Dialog/ko&oldid=1460769>"