---
title: Basic modeling tutorial
---

|                                            |
| ------------------------------------------ |
| Tutorial                                   |
| Topic                                      |
| Introduction to modelling                  |
| Level                                      |
| Beginner                                   |
| Time to complete                           |
| 15 minutes                                 |
| Authors                                    |
| [NormandC](/User:Normandc "User:Normandc") |
| FreeCAD version                            |
| any                                        |
| Example files                              |
| none                                       |
| See also                                   |
| _None_                                     |
|                                            |

## Introduction

This Basic Modeling Tutorial will show you how to model an iron angle. One thing to know is that FreeCAD is modular by design, and like for many other CAD software, there are always more than one way to do things. We will explore two methods here.

This tutorial was written with version 0.15 of FreeCAD.

## Before we begin

Keep in mind that FreeCAD is still in an early stage of development, so you might not be as productive as with another CAD application, and you will certainly encounter bugs, or experience crashes. FreeCAD now has the ability to save backup files. The number of those backup files can be specified in the preferences dialog. Don't hesitate to allow 2 or 3 backup files until you know well how to deal with FreeCAD.

Save your work often, from time to time save your work under a different name, so you have a "safe" copy to fall back to, and be prepared to the possibility that some commands might not give you the expected results.

## Modeling Techniques Intro

The first (and basic) technique of solid modeling is [Constructive Solid Geometry (CSG)](http://en.wikipedia.org/wiki/Constructive_solid_geometry). There is also a detailed explanation (in the context of FreeCAD) of [Constructive_solid_geometry](/Constructive_solid_geometry "Constructive solid geometry") on the wiki. You work with primitive shapes like cubes, cylinders, spheres and cones to construct your geometry by combining them, subtracting one shape from the other, or intersecting them. These tools are part of the [Part Workbench](/Part_Workbench "Part Workbench"). You can also apply transformations on shapes, like applying rounds or chamfers on edges. These tools are also in the [Part Workbench](/Part_Workbench "Part Workbench").

Then there are more advanced tools. You start by drawing a 2D profile which you'll either extrude or revolve.

So let's start by trying to do some iron feet for a table with these 2 methods.

## 1st Method - By Constructive Solid Geometry

1. Start with the [Part Workbench](/Part_Workbench "Part Workbench") ![](/images/Switch_PartWorkbench.JPG).
2. If you haven't opened a new FreeCAD document (most of the FreeCAD window looks greyed-out), from the pull-down menu click **File → New** or click the ![](/images/Std_New.svg) **Create a new empty document** icon.
3. Click on the ![](/images/Part_Box.svg) [Box](/Part_Box "Part Box") button to create a box
4. Change its dimensions by selecting it either in the 3D space, or by clicking it in the Project tab to the left, then
5. Click on the Data tab at the bottom, and change values for Length, Width and Height to 50mm, 50 and 750 _(see Fig. 1.1)_ **Note**: _back when these captures were taken, the properties were ordered differently, with Height being first_.
6. The box now fills most of the 3D view. Click on ![](/images/Std_ViewFitAll.svg) [Fit All](/Std_ViewFitAll "Std ViewFitAll") to fit the view to the newly created box.
7. Create a second box the same way, but with values L=40, W=40 and H=750mm. By default this box will be superimposed on the first one. _(see Fig. 1.2)_
8. You'll now subtract the second box from the first. Select the first shape first (named Box), then the second one (named Box001), the selection order is important! (Make sure that both shapes are selected in the Project tree. **One thing to remember:** in Inventor navigation mode, Ctrl + click does not work for multiple selection. Switch [Mouse navigation](/Mouse_navigation "Mouse navigation") to either CAD or Blender selection.)
9. On the Part Workbench toolbar, click on the ![](/images/Part_Cut.svg) [Cut](/Part_Cut "Part Cut") tool.

![](/images/Tutorial-normand01.jpg)

Fig. 1.1 The first box

![](/images/Tutorial-normand02.jpg)

Fig. 1.2 The second box on top of the first one, ready to be subtracted

![](/images/Tutorial-normand03.jpg)

Fig. 1.3 After the subtraction

You now have your first iron angle _(Fig. 1.3)_. You'll notice that, in the Project tab on the left, both boxes have been replaced by a "Cut" object. Actually, they're not disappeared, but rather grouped under the Cut object. Click on the + in front of it, and you'll see that both boxes are still there, but greyed out _(Fig. 1.4)_. If you click on either of them and hit the Space bar, it will show up. The space bar toggles [visibility](/Std_ToggleVisibility "Std ToggleVisibility") of selected objects. _(Fig. 1.5)_

Don't want the angle oriented that way? You just need to change the placement of the Box001 shape. Select it, unhide it, and in the Data tab, click on the + in front of Placement, then expand the Position parameter, and change its X and Y coordinates. Hit Enter, hide the Box001 shape again, and your angle orientation is now different. _(Fig. 1.5)_ You can even change either of your shapes dimensions, and the Cut object will be updated.

![](/images/Tutorial-normand04.jpg)

Fig. 1.4 The cut operation retains its original objects (the boxes)

![](/images/Tutorial-normand05.jpg)

Fig. 1.5 You can still make the original boxes visible

By the way, we can add rounds to the angle so it is more realistic, using the ![](/images/Part_Fillet.svg) [Fillet](/Part_Fillet "Part Fillet") tool. _(Fig. 1.6)_

![](/images/Tutorial-normand06.jpg)

Fig. 1.6 The filleted edges

## 2nd Method - By extruding a profile

This method requires that you start by drawing a 2D profile. You need to activate the [Draft workbench](/Draft_Workbench "Draft Workbench") ![](/images/Switch_DraftWorkbench.JPG).

- If you haven't opened a new FreeCAD document (most of the FreeCAD window looks greyed-out), from the pull-down menu click File → New or click the ![](/images/Std_New.svg) **Create a new empty document** icon.

### Setting the working plane

First we need to define on which [working plane](/Draft_SelectPlane "Draft SelectPlane") to draft our profile.

1. Locate the toolbar displayed below. Depending on your Draft preferences, it may be below the main toolbar, to the left or to the right.

   : ![](/images/DraftPlaneAuto.png)

2. Press the Auto button (it may be labeled "None").
3. Depending on your Draft preferences, this expands a **Select Plane** dialog in the Tasks side panel, or a horizontal toolbar labeled "active command: **Select Plane**". See the [Note on Draft Working Plane Button](#Note_on_Draft_Working_Plane_Button) for screen captures showing the two expanded modes.
4. We will leave the _Offset_ field at a value of zero.
5. Press the XY button to set the working plane to XY. This closes the Tasks panel or the expanded buttons. The "Auto" button will now be relabeled as "Top" to show it is the active plane.

### Drafting the profile

1. Select the ![](/images/Draft_Wire.svg) [DWire (multiple-point DraftWire)](/Draft_Wire "Draft Wire") tool.
2. Check the "Relative" and "Filled" boxes.
3. Rather than drawing the shape in the 3D view, we'll enter coordinates in the _Global X_, _Global Y_ and _Global Z_ input fields. The process is the following:
   1. Click in the _Global X_ input field;
   2. Enter a value as listed in the bullet list below and press TAB to go to the _Global Y_ input field;
   3. Enter the _Global Y_ value and press TAB to go to the _Global Z_ input field;
   4. In the _Global Z_ field, leave the zero value and press ENTER to validate the coordinates for the point;
   5. Repeat for the next 5 points.
      - **Coordinates** (X, Y, Z)
      - 1st point: 0, 0, 0
      - 2nd point: 50, 0, 0
      - 3rd point: 0,10, 0
      - 4th point: -40, 0, 0 **Note:** _in FreeCAD 0.16, there is a bug that removes the previous point when entering the minus sign in the input field. A workaround is to enter a positive value, then place the cursor before the number and add the minus sign. (This bug is resolved in v0.17)_
      - 5th point: 0, 40, 0
      - 6th point: -10, 0, 0
4. Press the Close button to close the profile. You should now have this profile, titled **DWire** in the Model tab:

![](/images/Tutorial-normand07.jpg)

Fig. 1.7 The base DWire

Hit the 0 (zero) key on the numerical keypad to set the view to axonometric.

### Extruding the profile

Activate the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") either from the [workbench selector](/Std_Workbench "Std Workbench"), or from the **[View](/Std_View_Menu "Std View Menu") → Workbench → Part** menu.

Click on the ![](/images/Part_Extrude.svg) [Extrude](/Part_Extrude "Part Extrude") tool.

On the Tasks tab on the left, select the **Wire** object. Then enter the desired length, say 750mm. Leave the direction at Z = 1. Press OK. You should now have an **Extrude** object in the Model tab _(fig. 1.8)_

![](/images/Tutorial-normand08.jpg)

Fig. 1.8 The extruded object

This method has a minor caveat compared to the other one: to edit the shape, you need to edit the Wire, it's not as easy to do as the previous method.

And there are a few other ways to do it too! I hope these two examples get you started. You'll sure hit some snags along the way (I did when I first learned FreeCAD, and I do have 3D CAD experience), but don't hesitate to ask questions on the [FreeCAD forum](https://forum.freecadweb.org)!

### Note on Draft Working Plane Button

The label on your button may be different, depending on your version and also on what you were doing beforehand. The button label could read: "Top", "Front", "Side", "None" or a Vector representation such as d(0.0,0.0,1.0). It can also be blank. For example:

![](/images/DraftPlaneNone.png)

Select Plane None

![](/images/DraftPlaneTop.png)

Select Plane Top

![](/images/DraftPlaneView.png)

Select Plane View

After pressing the button, the options will be expanded into either of the following configurations.

![](/images/DraftPlaneTasks.png)

**Select Plane** parameters as shown in Tasks panel mode.

![](/images/DraftPlaneToolbarMode.png)

**Select Plane** parameters as shown in Toolbar mode.

The above instructions will work, no matter what label your button has.

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_modeling_tutorial/en&oldid=1251496>"
