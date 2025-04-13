---
title: Туторіал з проектування базової деталі 019
---
|  |
| --- |
| Tutorial |
| Topic |
| Моделювання |
| Level |
| Початківець |
| Time to complete |
| 1 година |
| Authors |
| Carlo Dormeletti ([onekk](/User:Onekk "User:Onekk")) Ed Williams ([edwilliams16](/index.php?title=User:Edwilliams16&action=edit&redlink=1 "User:Edwilliams16 (page does not exist)")) Roy 043 ([Roy 043](/index.php?title=User:Roy_043&action=edit&redlink=1 "User:Roy 043 (page does not exist)")) |
| FreeCAD version |
| 0.19 або вище |
| Example files |
| *None* |
| See also |
| [Туторіал з проектування базової деталі](/Basic_Part_Design_Tutorial "Basic Part Design Tutorial") |
|  |

## Introduction

*This is an updated version of the [Basic Part Design Tutorial](/Basic_Part_Design_Tutorial "Basic Part Design Tutorial").*

![](/images/Pd_tut_final_solid.png)

This tutorial introduces users to the [Part Design Workbench](/PartDesign_Workbench "PartDesign Workbench"). In this tutorial we will create a 3D solid model of the part shown in the image above. In the [drawing](/TechDraw_Workbench "TechDraw Workbench") at the end of this paragraph all the necessary dimensions to complete the task are given.

We will start by creating a core solid shape from a base Sketch and then build on that shape, adding what are known as features. These features will either add material to, or remove material from the solid by use of additional sketches and accompanying feature operations.

We will follow some of the techniques described in [Advice for creating stable models](/Feature_editing#Advice_for_creating_stable_models "Feature editing"):

* We will use a **master sketch**.
* **Named constraints** will be used to hold dimensions that can be referenced later in the model construction.  
  For instance, to change the model width from 53 mm, as in the technical drawing, to 55 mm we need only modify the **Length** value of the appropriate **named constraint** in the **master sketch** and the whole model will modify accordingly. This is *parametric* design in action.
* **External geometries** are potentially subject to the [Topological Naming Problem](/Topological_naming_problem "Topological naming problem"). We will use them only when strictly necessary and will attempt to reference to the most **stable** elements available. Referencing edges and vertices of sketches is normally more stable than referencing edges and vertices of generated solid geometry.

This Tutorial will not use every feature and tool available in the Part Design Workbench, but will provide a basic foundation upon which users can build their knowledge and skills.

Feel free to signal any errors or problems in this forum thread: [New Part Design Tutorial for FC 019 and 020](https://forum.freecad.org/viewtopic.php?f=36&t=73235).

![](/images/Tutorial_Drawing_Sheet.png)

## Preliminary notes

* This tutorial will provide detailed instructions when it describes an operation for the first time. Subsequent operations will have a more concise description. When in doubt, find the operation that contains the more detailed description. For instance, when creating a sketch for the first time the process of choosing the sketch plane will be explained in detail, for subsequent sketches it will not.
* All mentioned tools can be accessed from toolbars and from the menu.
* This tutorial assumes that ![](/images/CheckBoxTrue.svg) Auto constraints in the Sketcher's **Edit controls** window is checked. This ensures that some constraints are applied automatically. Otherwise you will need to apply them yourself.
* If the Sketcher Solver detects a redundant constraint it will turn the sketch orange in color. Before further constraints are added, redundant constraints should be removed. Redundant constraints are shown in the task panel, click the blue reference and press Delete.
* The color mentioned above is a default color, it can be changed in the preferences. The same applies to the other colors mentioned in this tutorial.
* You exit a Sketcher drawing tool by pressing the Esc key or by right-clicking an empty area of the [3D view](/3D_view "3D view"). The mouse cursor will change to the standard arrow cursor. If you press Esc an additional time you will exit sketch edit mode. To return to the editor, click the Model tab, then either double-click the Sketch element in the [Tree view](/Tree_view "Tree view"), or right-click it and select **Edit sketch** from the context menu. To avoid leaving edit mode when pressing Esc too often, change the **Esc can leave sketch edit mode** preference, see [Sketcher Preferences](/Sketcher_Preferences#General "Sketcher Preferences").
* It's possible that some elements in a task panel, for instance the OK button, are not visible if the panel is not wide enough. You can make it wider by dragging its right border. Place your mouse pointer over the border, when the pointer changes to a two-way arrow, hold down the left mouse button and drag.
* A >> button in a toolbar indicates that the toolbar is truncated. You can either use the mentioned button to expand it, or move the toolbar to a position where more room is available. To move a toolbar place your mouse pointer over the grip before the first icon in the toolbar, hold down the left mouse button and drag.
* During the v0.21 development cycle a new icon was introduced for the [Sketcher Create polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline") tool: ![](/images/Sketcher_CreatePolyline.svg). The old icon looks like this: [![](/images/Sketcher_CreatePolyline_rel_0.20.svg)](/Sketcher_CreatePolyline "Sketcher CreatePolyline "). In this tutorial we will use the new icon.
* See [Part Design Workbench Concepts](/Part_and_PartDesign#PartDesign_Workbench_Concepts "Part and PartDesign") for some conceptual background.
* See the [Sketcher WorkBench](/Sketcher_Workbench "Sketcher Workbench") for a more detailed explanation of some of the terminology used here.

## Startup

First make sure you are in the ![](/images/Workbench_PartDesign.svg) [Part Design Workbench](/PartDesign_Workbench "PartDesign Workbench"). If required select it from the [Workbench dropdown list](/Std_Workbench "Std Workbench"). Once there, you will want to create a new document if you have not done so already. It is a good habit to save your work often, so first save the new document, giving it any name you choose.

All work in Part Design begins with a [body](/Glossary#Body "Glossary"). Click ![](/images/PartDesign_Body.svg) [Create new body](/PartDesign_Body "PartDesign Body") to create and activate one. Note that it is also possible to skip this step: when creating a sketch using the Part Design ![](/images/PartDesign_NewSketch.svg) [Create sketch](/PartDesign_NewSketch "PartDesign NewSketch") tool, if no existing body is found, a new one is automatically created and activated.

## Master sketch

The master sketch contains the model's rectangular base shape and two **named constraints** that will supply correct dimensions to other parts of the model: **length** that will contain 53 mm (the result of adding the 39 mm dimension to the two 7 mm sides), and **width** that will contain 26 mm. To be able to take advantage of the model's symmetry in later steps, the top edge of the rectangle will be centered around the origin with a symmetrical constraint.

**Sketch**

![](/images/Pd_start_00.png)

Fig: MS1

![](/images/Pd_tut_sketch_start.png)

Fig: MS2

![](/images/Pd_tut_sel_points_h.png)

Fig: MS3

![](/images/Pd_tut_rect_h_dim_end.png)

Fig: MS4

![](/images/Pd_tut_rect04.png)

Fig: MS5

![](/images/Pd_tut_rect_v3.png)

Fig: MS6

**Step A: Create the sketch**

1. Click ![](/images/PartDesign_NewSketch.svg) [Create sketch](/PartDesign_NewSketch "PartDesign NewSketch"). This will create the sketch within the just created body. It will be named **Sketch**.
2. A task panel like **Fig: MS1** will open where you have to choose to which plane the sketch will be attached.
   1. Select **XY\_Plane** from the list or select that plane in the [3D view](/3D_view "3D view").
   2. Click OK.
3. FreeCAD automatically switches to the ![](/images/Workbench_Sketcher.svg) [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").
4. The sketch is opened in edit mode: you will see something like **Fig: MS2**. The X axis (the red line) and Y axis (the green line) of the sketch are indicated, as well as its origin (the red point).

**Step B: Add geometry**

1. Click ![](/images/Sketcher_CreateRectangle.svg) [Create rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle").
2. While the tool is active the cursor has this appearance:  
   ![](/images/Pd_tut_rec_cursor.png)
3. Pick two points to create a rectangle roughly centered around the **Y axis** similar to **Fig: MS3**. Note:
   * Don't place points on an axis as the Solver will automatically apply constraints that will create problems later.
   * The dimensions of the rectangle are unimportant at this point. They will be assigned using constraints in a later step.
4. Once done, press Esc or right-click to exit the tool.

**Step C: Assign a horizontal distance constraint**

1. Select the line defined by **P2** and **P3** in **Fig: MS3**. The labels like P1, P2 etc. will not appear in sketches, they were added for reference in the images of this tutorial.
2. Click ![](/images/Sketcher_ConstrainDistanceX.svg) [Horizontal distance constraint](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"):
   1. A dimension will appear between the endpoints of the selected line. This dimension is the current distance.
   2. Additionally a dialog will appear:  
      ![](/images/Pd_tut_rect03.png)
   3. Assign **Length = 53 mm**.
   4. To be able to reference this dimension later a name is required. You are free to use any name, it need only be unique within the sketch. Assign **Name = length**.
   5. Click OK.
3. The result should resemble **Fig: MS4**

**Step D: Assign a symmetrical constraint**

1. Select points **P2** and **P3** of the rectangle.
2. Select the **origin** of the sketch. Note: the selection order of the points is important.
3. Click ![](/images/Sketcher_ConstrainSymmetric.svg) [Symmetrical constraint](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric").
4. You will end up with something that resembles **Fig: MS5**.

**Step E: Assign a vertical distance constraint**

:   Assign a vertical distance constraint following the same procedure as used for the previous horizontal distance constraint:

1. Select the line defined by **P3** and **P4** in **Fig: MS3**.
2. Click ![](/images/Sketcher_ConstrainDistanceY.svg) [Vertical distance constraint](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"):
   1. Assign **Length = 26 mm**
   2. Assign **Name = width**.
   3. Click OK.
3. The result should resemble **Fig: MS6**.
4. The sketch is fully constrained now:
   * The lines in the sketch are bright green.
   * The **Solver messages** section of the task panel displays **Fully constrained**.
   * If you select any line or vertex of the sketch and try to drag it, it won't move.

**Step F: Close the sketch**

:   Click Close at the top of the [tasks panel](/Task_panel "Task panel") to leave sketch edit mode.

## Main profile

The main profile is created by [padding](/PartDesign_Pad "PartDesign Pad") a new sketch.

**Sketch001**

![](/images/OffsetSketch001.png)

Fig. MP1

![](/images/Pd_tut_side_fc.png)

Fig: MP2

**Step A: Create the sketch**

:   Click ![](/images/PartDesign_NewSketch.svg) [Create sketch](/PartDesign_NewSketch "PartDesign NewSketch") and create a sketch attached to the **YZ\_Plane**. FreeCAD will assign the name **Sketch001**.

**Step B: Add geometry**

1. Click ![](/images/Sketcher_CreatePolyline.svg) [Create polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline") and make a shape like in **Fig: MP1**.
2. For the last point of the final segment make sure to pick the first point of the shape. The point will change color and you will see the symbol for a ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") appear near the cursor. Coincident constraints have to be explicit. Just having two points visually coincident is not sufficient.
3. Press Esc or right-click to exit the tool.

**Step C: Assign constraints**

1. The three vertical and horizontal constraints you see in the image should have been added automatically provided you drew those lines that way. If you didn't you need to add them.
2. Select the point **P2** and the **Y axis** of the sketch and apply a ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point onto object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"). Because the sketch is attached to the YZ\_Plane, the Y axis of the sketch does not match the Y axis of the body.
3. Select the **origin** and the point **P1** and apply a ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal constraint](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal"). Why not a ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident")? you might ask. Try it (and undo). The sketch will turn orange and a solver message **Redundant constraints** will appear. Because the line P1 to P2 has already been constrained to be vertical, the only remaining degree of freedom is P1's Y coordinate. The coincidence constraint sets both the X and Y coordinates to zero, but the X coordinate is already determined. The horizontal constraint, on the other hand, only sets the Y coordinate to zero, which is sufficient.
4. Select the line defined by the points **P2** and **P3**, apply a ![](/images/Sketcher_ConstrainDistanceX.svg) [Horizontal distance constraint](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), and assign **Length = 5 mm**.
5. Select the line defined by the points **P1** and **P2**, apply a ![](/images/Sketcher_ConstrainDistanceY.svg) [Vertical distance constraint](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"), and assign **Length = 26 mm**.
6. Select the line defined by the points **P1** and **P4** and apply a ![](/images/Sketcher_ConstrainDistanceX.svg) [Horizontal distance constraint](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"):
   1. For this value you will use a **named constraint** using [Expressions](/Expressions "Expressions"). To do so you have to click the little button in the **Length** input field: ![](/images/Bound-expression.svg).
   2. You will be presented with a new dialog named **Formula editor** that contains an input field and a **Result:** label, similar to the image below:  
      ![](/images/Pd_tut_expressions.png)  
      When you start typing in the input field, you will be presented with some autocompletions.
   3. Select the label of the sketch. In our case we want **`<<Sketch>>.`**. Note the period after the label.
   4. To select the **named constraint** "width", you first have to enter **`Constraints.`** with the period. Here autocomplete works.
   5. To add "width", as yet autocompletion is not available, so complete the cell to read **`<<Sketch>>.Constraints.width`**. If all went well the red error message after **Result:** has been replaced by the correct value as in the image below:  
      ![](/images/Pd_tut_expression_end.png)
   6. Click OK to close the **Formula editor** dialog.
   7. Click OK to close the **Insert length** dialog.
7. You should have a fully constrained sketch similar to **Fig: MP2**.
8. Note the different colors used for distance constraints assigned using expressions, and those assigned specifying a length.

**Step D: Close the sketch**

:   Click Close at the top of the [tasks panel](/Task_panel "Task panel") to leave sketch edit mode.

**Pad**

![](/images/Pd_tut_pad1.png)

Fig: MP3

1. Make sure **Sketch001** is selected.
2. Click ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad "PartDesign Pad"):
   1. The **Pad parameters** task panel opens.
   2. For **Type** select Dimension ![](/images/ComboBox.svg).
   3. For **Length** again use an expression, but this time enter **`<<Sketch>>.Constraints.length`**. This should evaluate to 53 mm.
   4. Select ![](/images/CheckBoxTrue.svg) Symmetric to plane.
   5. Click OK to close the task panel.
3. You should now have a solid as shown in **Fig: MP3**.

## Corner cutouts

For the corner cutouts two features are added to the model. A [pocket](/PartDesign_Pocket "PartDesign Pocket"), based on another sketch, is used to create the first cutout, and this feature is then [mirrored](/PartDesign_Mirrored "PartDesign Mirrored").

**Sketch002**

![](/images/Pd_tut_sk2_start.png)

Fig: CC1

![](/images/Pd_tut_sk2_eg01.png)

Fig: CC2

![](/images/Pd_tut_sk2_end.png)

Fig: CC3

**Step A: Hide the solid**

:   Hide the just created solid: Select **Pad** and click the Spacebar.

**Step B: Create the sketch**

:   Click ![](/images/PartDesign_NewSketch.svg) [Create sketch](/PartDesign_NewSketch "PartDesign NewSketch") and create a sketch attached to the **XZ\_Plane**. The sketch will be named **Sketch002**.

**Step C: Add geometry**

1. Select ![](/images/Sketcher_CreateRectangle.svg) [Create rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle"), and create a rectangle. Do not create it too near an axis, to avoid any automatic constraints that would make it difficult to move it into the correct position later.
2. Exit the tool.

**Step D: Assign dimensional constraints**

1. Select one of the horizontal lines, apply a ![](/images/Sketcher_ConstrainDistanceX.svg) [Horizontal distance constraint](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), and assign a value of **11 mm**.
2. Select one of the vertical lines, apply a ![](/images/Sketcher_ConstrainDistanceY.svg) [Vertical distance constraint](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"), and assign a value of **5 mm**.
3. You should obtain something similar to **Fig: CC1**.

**Step E: Close the sketch**

:   Click Close. **Sketch002** is not fully constrained at this stage.

**Step F: Make previous sketches visible**

:   To use [external geometry](/Sketcher_External "Sketcher External"), the sketches whose elements we want to reference must be visible. Make sure **Sketch** and **Sketch001** are both visible. Use the Spacebar to toggle visibility if needed. Expand the **Pad** node in the [Tree view](/Tree_view "Tree view") to access **Sketch001**.

**Step G: Add external geometry and fully constrain the sketch**

1. Double click **Sketch002** to enter edit mode.
2. Rotate the view so you can clearly see the points as shown in **Fig: CC2**. This will ease subsequent steps. Note that the rectangle's initial position may be different in your sketch.
3. Click ![](/images/Sketcher_External.svg) [External geometry](/Sketcher_External "Sketcher External").
4. While the tool is active the cursor has this appearance:  
   ![](/images/Pd_tut_eg_cursor.png)
5. Select point **P1** in **Fig: CC2**. The selected point is added to the sketch as external geometry. In the **Elements** section of the task panel it will appear with a purple X icon or, [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"), a purple dot icon.
6. With the tool still active select point **P2** in **Fig: CC2**. This external geometry should also appear in the **Elements** section.
7. Exit the tool.
8. Select point **P1** and point **P3** and apply a ![](/images/Sketcher_ConstrainVertical.svg) [Vertical constraint](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical"). The rectangle will be aligned with the X position of **P1**.
9. Select point **P2** and point **P3** and apply a ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal constraint](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal"). The rectangle will be aligned with the Y position of **P2**.
10. You should have a fully constrained sketch similar to **Fig: CC3**.

**Step H: Close the sketch**

:   Click Close.

**Pocket**

![](/images/Pd_tut_pck01.png)

Fig: CC4

![](/images/Pd_tut_pck02-mir.png)

Fig: CC5

To create the cutouts we will use the ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket") tool. This tool is the opposite of the Pad tool. Whereas the Pad tool adds material, the Pocket tool removes material.

1. Select **Sketch002**.
2. Click ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket"):
   1. The **Pocket parameters** task panel opens.
   2. Select **Type** Through all ![](/images/ComboBox.svg).
   3. Check ![](/images/CheckBoxTrue.svg) Reversed
   4. Click OK.
3. You should have something that resembles **Fig: CC4**

**Mirror**

Instead of creating another sketch and pocketing it, we take advantage of the model's symmetry about the YZ plane and use ![](/images/PartDesign_Mirrored.svg) [Mirrored](/PartDesign_Mirrored "PartDesign Mirrored") to create the second cutout.

1. Select **Pocket** in the [Tree view](/Tree_view "Tree view").
2. Click ![](/images/PartDesign_Mirrored.svg) [Mirrored](/PartDesign_Mirrored "PartDesign Mirrored"):
   1. The **Mirrored parameters** task panel opens.
   2. Select **Plane** Vertical sketch axis ![](/images/ComboBox.svg) from the pulldown menu. The plane will be defined by this axis (the Y axis) and also by the Z axis of the sketch. Note that selecting **Base YZ Plane** would have the same result.
   3. Click OK.
3. You should now have a part that looks like **Fig: CC5**.

## Sides

The sides are created in a similar manner, but instead of removing material we will add material with a [pad](/PartDesign_Pad "PartDesign Pad") feature.

**Sketch003**

![](/images/Pd_tut_sk3_1.png)

Fig: SD1

![](/images/Pd_tut_pad001.png)

Fig: SD2

![](/images/Pd_tut_pad02-mir.png)

Fig: SD3

1. Make sure **Sketch** is visible, and **Mirrored** is hidden.
2. Click ![](/images/PartDesign_NewSketch.svg) [Create sketch](/PartDesign_NewSketch "PartDesign NewSketch") and create a new sketch attached to the **XY\_Plane**. The sketch will be named **Sketch003**.
3. Click ![](/images/Sketcher_CreateRectangle.svg) [Create rectangle](/Sketcher_CreateRectangle "Sketcher CreateRectangle") and create a rectangle similar to the smaller rectangle in **Fig: SD1**. Because the rectangle is offset from the X axis this should not trigger an automatic ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point onto object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject").
4. Exit the tool.
5. Click ![](/images/Sketcher_External.svg) [External geometry](/Sketcher_External "Sketcher External").
6. Select the point **P1** as shown in **Fig: CC2** from **Sketch**.
7. Exit the tool.
8. Apply these constraints:
   1. Select one of the horizontal lines, apply a ![](/images/Sketcher_ConstrainDistanceX.svg) [Horizontal distance constraint](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), and assign a value of **7 mm**.
   2. Select one of the vertical lines, apply a ![](/images/Sketcher_ConstrainDistanceY.svg) [Vertical distance constraint](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"), and assign this expression: **`<<Sketch>>.Constraints.width`**.
   3. Select the **top-left** point of the created rectangle (marked **TL** in **Fig: SD1**) and the newly added **external geometry point** and apply a ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident").
9. The sketch should be fully constrained now.
10. Click Close.

**Pad001**

1. Select **Sketch003**.
2. Click ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad "PartDesign Pad"):
   1. Assign **Type =**  Dimension ![](/images/ComboBox.svg).
   2. Assign **Length = 16.7 mm**
   3. Click OK.
3. You should have a result as shown in **Fig: SD2**

**Mirrored001**

1. Select **Pad001**.
2. Click ![](/images/PartDesign_Mirrored.svg) [Mirrored](/PartDesign_Mirrored "PartDesign Mirrored"):
   1. Make sure **Plane** Vertical sketch axis ![](/images/ComboBox.svg) is selected.
   2. Click OK.
3. You should now have a part that looks like **Fig: SD3**.

**Note**

Our two mirror operations have a common symmetry plane, so we could have made our model a little simpler by combining them. We would:

1. Omit the first **Mirror** operation.
2. Select both **Pad001** and **Pocket** in step 1 of the above **Mirrored001** operation.

This emphasizes the important concept that we are mirroring the selected features (the operations we performed on the body, in the selected order), not the body itself.

## Center hole

Now it is time for the most challenging part of our modeling, a challenge that arises because some of the dimensions of the center hole are defined along the slanted face. If you use this face, created by padding **Sketch001**, as a reference for the next sketch, you expose yourself to the [Topological Naming Problem](/Topological_naming_problem "Topological naming problem"). A better solution is to reference **Sketch001** itself.

**Sketch004**

![](/images/Pd_tut_cen01.png)

Fig: CH1

![](/images/Pd_tut_cen02.png)

Fig: CH2

1. Make **Sketch001** visible, and hide **Sketch** and **Mirrored001**.
2. Click ![](/images/PartDesign_NewSketch.svg) [Create sketch](/PartDesign_NewSketch "PartDesign NewSketch") and create a new sketch attached to the **YZ\_Plane**. The sketch will be named **Sketch004**.
3. Click ![](/images/Sketcher_CreatePolyline.svg) [Create polyline](/Sketcher_CreatePolyline "Sketcher CreatePolyline") and trace a polyline like that indicated by the points **P1**, **P2**, **P3** and **P4** in **Fig: CH1**.
4. Remember to close the polyline by picking the first point. This will create the required ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident").
5. Exit the tool.
6. Check the applied constraints:
   * Delete the redundant ![](/images/Sketcher_ConstrainVertical.svg) [Vertical constraint](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") applied to the line defined by **P1** and **P2**.
   * Make sure a ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal constraint](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") has been applied to the lines defined by **P1** and **P4**, and **P2** and **P3**.
   * Make sure a ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point onto object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") has been applied to **P1** and the **Y axis**, and to **P2** and the **Y axis**.
7. Click ![](/images/Sketcher_External.svg) [External geometry](/Sketcher_External "Sketcher External")
8. Select the line defined by **EGP1** and **EGP2** in **Sketch001**, indicated by the purple color in **Fig: CH2**.
9. Exit the tool.
10. Apply a ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point onto object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") to **P3** and the **external geometry**, and repeat this for **P4**. This will make the line defined by **P3** and **P4** coincident with the line defined by **EGP1** and **EGP2**.
11. Select the line **P3** to **P4**, apply a ![](/images/Sketcher_ConstrainDistance.svg) [Distance constraint](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance"), and assign **Length = 17 mm**
12. Select the points **EGP2** and **P4**, apply a ![](/images/Sketcher_ConstrainDistance.svg) [Distance constraint](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance"), and assign **Length = 7 mm**.
13. This will result in a fully constrained sketch like **Fig: CH2**.
14. Click Close.
15. Hide **Sketch001**.

**Pocket001**

1. Select **Sketch004**.
2. Click ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket"):
   1. Select **Type** Two Dimensions ![](/images/ComboBox.svg).
   2. Assign **8.5 mm** to **Length** and **2nd length**.
   3. Click OK.
3. Select the newly created **Pocket001**.
4. On the Data tab of the [Property editor](/Property_editor "Property editor") change its **Refine** property to **True**. The property editor can be found on the Model tab of the [Combo View](/Combo_view "Combo view").

**Notes**

1. For **Pocket001** we could have alternatively used **Type** Dimension ![](/images/ComboBox.svg), checked **Symmetric to Plane**, and entered **17 mm** for the **Length** value.
2. **Refine** will try to remove seams left by previous operations. It is advisable to only refine the final solid, as some operations can fail if a previous feature has been refined. However, there are also cases where refine can make an operation succeed. So in case of problems check this property and test. Unfortunately there is not yet a general rule to follow.

## Result

The model is complete. It should look like the image below.

Finally, select **Sketch** in the [Tree view](/Tree_view "Tree view") and on the Data tab of the [Property editor](/Property_editor "Property editor") look for **Sketch → Constraints**. Expand that node and changed the **length** and **width** constraints. The model should change parametrically.

![](/images/Pd_tut_final_solid.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Part_Design_Tutorial_019/uk&oldid=1520544>"