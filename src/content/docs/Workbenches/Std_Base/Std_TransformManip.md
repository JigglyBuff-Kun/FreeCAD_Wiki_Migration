---
title: Std TransformManip
---

|                                                          |
| -------------------------------------------------------- |
| Std TransformManip                                       |
| Menu location                                            |
| Edit → Transform                                         |
| Workbenches                                              |
| All                                                      |
| Default shortcut                                         |
| _None_                                                   |
| Introduced in version                                    |
| -                                                        |
| See also                                                 |
| [Std UserEditMode](/Std_UserEditMode "Std UserEditMode") |
|                                                          |

## Description

The **Std TransformManip** command allows you to apply rotation increments and translation increments to a selected object. This can be done either by dragging the interactive dragger in the 3D view or, [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), by entering precise values in the task panel, either in the (local) dragger coordinate system or the global coordinate system.

![](/src/assets/images/Std_Transform_Manip_Example_1.1.png)

## Usage

1. Select an object with a Data**Placement** property. See [Notes](#Notes).
2. There are several ways to invoke the command:
   - Select the **Edit → ![](/src/assets/images/Std_TransformManip.svg) Transform** option from the menu.
   - Select the **![](/src/assets/images/Std_TransformManip.svg) Transform** option from the [Tree view](/Tree_view "Tree view") context menu.
   - If [edit mode](/Std_UserEditMode "Std UserEditMode") is set to **![](/src/assets/images/Std_UserEditModeTransform.svg) Transform** you can also double-click the object in the Tree view.
3. The **Transform** task panel opens.
4. Optionally adjust the snapping parameters: These are values for snapping to increments when dragging in the 3D view, either for rotation or translation.
5. Do one or more of the following:
   - Press and hold the left mouse button on an axis arrow and drag to translate the object along that axis.
   - Press and hold the left mouse button on a plane and drag to translate the object along that plane.
   - Press and hold the left mouse button on a sphere and drag to rotate the object around that axis.
6. Optionally, adjust the location of the [dragger](#Dragger), [coordinate system](#Coordinate_system), input precise delta (local), or absolute (global) increments, or [move the object to a target object](#Utilities). [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"). See the following [Options](#Options) section for more information.
7. Do one of the following:
   - Press the OK button to confirm and finish the command.
   - Press the Cancel button to revert the applied transformations and finish the command. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Options

There are new options [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") for the tool. By default, the options are set to work the same as in version 1.0 and below.

![](/src/assets/images/Std_Transform_Manip_relnotes_1.1.gif)

You can adjust the following options:

### Dragger

This section controls the interactive dragger (gizmo or axis handles) location and orientation, and its behavior in the 3D view. The object is always transformed around the current dragger coordinate system.

#### Mode

Allows to adjust the location and orientation of the dragger and therefore the transform origin.

- **Object origin** (default): Places the dragger at the origin of the object to be transformed.
- **Center of mass / Centroid**: Places the dragger at the centroid (geometric center) of the object to be transformed, which is only equal to the center of mass if the material is identical and equally distributed, or not considered.
- **Custom**: The dragger can be snapped to any element in the document, not limited to the object to be transformed (faces, edges, vertices, datums). Choosing _Custom_ waits for a user input, to place the dragger at a custom location. Hovering elements in the document previews the new dragger location and orientation, a click on the selection attaches the dragger at this position.
  - **Reference** (only visible in _Custom_ mode): Displays the element where the dragger (transform origin) is set to. It displays _Select face, edge or vertex..._ if the tool waits for an input (selection) from the user.
  - Pick reference / Cancel (only visible in _Custom_ mode): If a custom dragger location is set, Pick reference allows the user to change the location of the dragger and snap it to a different element in the document. The object can be transformed, the dragger location be changed and transformed again, all in one active task. Cancel is displayed when the transform tool expects a user input for a new dragger location (selection in the 3D view) and cancels the placement of a custom dragger location.

#### Snapping

Snapping increments are values to control solely the interactive dragging behavior in the 3D view. The object to be transformed snaps to the following increments:

- **Translation**: Length value - snapping increment for translational change of the object in the 3D view, either in one axis or planar.
- **Rotation**: Angle value - snapping increment for a rotational change of the object in the 3D view around any axis.

If 0 is set as snapping increment, snapping is deactivated when dragging in the 3D view.

### Coordinate system

This dropdown sets the coordinate system for the manual inputs in the task panel. The coordinate system has no effect when transforming the object solely by dragging in the 3D view (except when choosing _Global_ and check to _align the dragger rotation to the selected coordinate system_.)

The axis labels are also displayed on the dragger in the 3D view, whereas **U,V,W** is the local coordinate system at the current dragger location, and **X,Y,Z** is the global coordinate system (equal to the placement value in the property editor, if the dragger is at the object's origin).

- **Local** (default): the current dragger location and orientation defines the transform origin for the following inputs in the task panel in **U,V,W**. The input is equal the delta to the current dragger location in its axes.
- **Global**: the task panel shows the values of the global position and rotation in the global coordinate system **X,Y,Z** and allows to change these values. If the dragger mode is set to _Object origin_, the values are the same as in the placement property of the object to be transformed.
  - **Align dragger rotation with selected coordinate system** (default _FALSE_, only available if the coordinate system is not the local one): changes the orientation of the dragger to match the global axes **X,Y,Z**. The dragger location is not changed by this checkbox, only the axis rotation of the dragger. This allows to drag the object in the directions of the global axes (X,Y,Z), even if the object's origin is in a different orientation.

### Translation

Length input for changing the translation of the object around the current dragger (transform origin).

- **U, V, W** (default, in _local_ coordinate system): Allows to input – or displays, when dragging in the 3D view – the delta to the previous dragger location in the local coordinate system (= dragger location). The translation values in U,V,W are accumulated, as long as the dragger rotation (orientation of the axes) is not changed (either by dragging in the 3D view or by inputting rotation values in the task panel), the dragger is re-aligned to a different custom location, or the _Move to other object_ function has been used. In these cases, the values are set to zero in the user interface of the task panel, without changing the actual translation of the object.
- **X, Y, Z** (in _global_ coordinate system): Allows to input – or displays, when dragging in the 3D view – the location values of the current dragger position in the global coordinate system X,Y,Z. If the dragger mode is set to _Object origin_, the values correspond with the placement values of the object to be transformed which are also visible in the property view.

### Rotation

Angular input for changing the rotation of the object around the current dragger (transform origin).

- **U, V, W** (default, in _local_ coordinate system): Allows to input – or displays, when dragging in the 3D view – the delta to the previous dragger orientation in the local coordinate system (= dragger orientation). The rotation values in U,V,W are accumulated, as long as the dragger location (position of the axes) is not changed (either by dragging in the 3D view or by inputting translation values in the task panel), the dragger is re-aligned to a different custom location, or the _Move to other object_ function has been used. In these cases, the rotation values are set to zero in the user interface of the task panel, without changing the actual rotation of the object.
- **X, Y, Z** (in _global_ coordinate system): Allows to input – or displays, when dragging in the 3D view – the location values of the current dragger orientation in the global coordinate system in euler angles around X,Y,Z. If the dragger mode is set to _Object origin_, the values correspond with the rotational placement values of the object to be transformed.

### Utilities

Quick actions to transform the selected object.

- Move to other object: Allows to interactively select a target location in the 3D view (any element in the document) where the object to be transformed is set to (translation and rotation), at the current dragger location. The button changes to Cancel if the tool waits for an input (3D selection) from the user. **Cancel** then aborts the selection of a target but does not close the transform tool.
- Flip: Flips the orientation of the object to be transformed 180 degrees around X and Z axis. This is helpful, if after _Move to other object_ the object to be transformed is intersecting the target object, because the target location coordinates are flipped 180 degrees.

## Notes

- As soon as you rotate/move the object in the [3D view](/3D_view "3D view"), changes are applied.
- Some objects with a Data**Placement** property, such as sketches, cannot be manipulated, neither can objects that are attached to other objects.
- There is no Cancel button in 0.21 and below, in those versions you can press the OK button and use the ![](/src/assets/images/Std_Undo.svg) [Undo](/Std_Undo "Std Undo") command to revert changes afterwards.

## Examples

### Pick custom dragger

If the dragger is not in view or at an unwanted location, it can be set to either the center of mass or any element in the document (not limited to the object to be transformed):

1. Invoke the **Transform** tool.
2. Choose **Dragger → Mode → Custom**.
3. Select any element in the 3D view.
4. Transform around that dragger origin by either dragging in the 3D view, or changing the values in the task panel.

Demo animation (Click the image, if the animation does not start):

![](/src/assets/images/Std_Transform_Manip_Pick_Custom_Dragger_1.1.gif)

### Move feature to global origin

This allows to position bodies and imported STEP files with regard to special features (e.g. holes) in the document:

1. Invoke the **Transform** tool.
2. Choose **Dragger → Mode → Custom**.
3. Select the element in the 3D view which needs to be positioned.
4. Change the **Coordinate system** to **Global**.
5. Input the new position, e.g. 0,0,0 to center the object to be transformed at the dragger location to the global origin.

Demo animation (Click the image, if the animation does not start):

![](/src/assets/images/Std_Transform_Manip_Move_Feature_to_Global_Origin_1.1.gif)

### Align to target object

If an object should be transformed to be placed at a target location (reference):

1. Invoke the **Transform** tool.
2. Choose **Dragger → Mode → Custom**.
3. Select the reference element in the 3D view.
4. Click **Utilities → Move to other object**.
5. Select the target location (location where the object to be transformed is aligned to, at the current dragger position).
6. Optional: click **Flip** to change the orientation, if the objects are intersecting.

Demo animation (Click the image, if the animation does not start):

![](/src/assets/images/Std_Transform_Manip_Align_to_Target_Object_1.1.gif)

### Drag in global coordinate system if object is not aligned

If an (imported or transformed) object is not aligned to the global coordinate system X, Y, Z but it needs to be dragged (rotation or translation) around the global axes:

1. Invoke the **Transform** tool.
2. Optional: change dragger location **Mode**.
3. Select the reference element in the 3D view.
4. Change the **Coordinate system** to **Global**.
5. Check the option **Align dragger rotation with selected coordinate system**.
6. The labels on the dragger change from U,V,W to X,Y,Z and are now aligned to the global coordinate system.

Demo animation (Click the image, if the animation does not start):

![](/src/assets/images/Std_Transform_Manip_Drag_in_Document_CS_1.1.gif)

### Move BIM objects in custom directions

For example to move a BIM door along a skewed wall element:

1. Invoke the **Transform** tool.
2. Choose **Dragger → Mode → Custom**.
3. Select an element which is oriented in the target direction.
4. Transform around that dragger origin by either dragging in the 3D view, or changing the values in the task panel.

Demo animation (Click the image, if the animation does not start):

![](/src/assets/images/Std_Transform_Manip_BIM_Door_1.1.gif)

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_TransformManip/en&oldid=1534358>"
