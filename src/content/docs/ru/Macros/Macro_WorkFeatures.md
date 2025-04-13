---
title: WorkFeatures/ru
---

|                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro WorkFeatures                                                                                                                                                                                                                                  |
| Description                                                                                                                                                                                                                                         |
| Tool utility to create Points, Axis, Planes...and other usefull functions. Macro version: 2019-05 Last modified: 2019-05-01 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/WF_wf.png) Author: rentlau_64 |
| Author                                                                                                                                                                                                                                              |
| [rentlau_64](/index.php?title=User:Rentlau_64&action=edit&redlink=1 "User:Rentlau 64 (page does not exist)")                                                                                                                                        |
| Download                                                                                                                                                                                                                                            |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/WF_wf.png)                                                                                                                                                                               |
| Links                                                                                                                                                                                                                                               |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                    |
| Macro Version                                                                                                                                                                                                                                       |
| 2019-05                                                                                                                                                                                                                                             |
| Date last modified                                                                                                                                                                                                                                  |
| 2019-05-01                                                                                                                                                                                                                                          |
| FreeCAD Version(s)                                                                                                                                                                                                                                  |
| All                                                                                                                                                                                                                                                 |
| Default shortcut                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                              |
| See also                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                     |

## Description

Tool utility to create:

- Points (mid points, center of circle, center of object(s)...),
- Axes (from 2 points, Normal of a plane...),
- Planes (from 3 points, from one axis and a point...)
- And many other useful features to facilitate the creation of your project. This utility is up next in the combo view with "Work Features" label.

![](/images/WF.png)

WorkFeatures

## Uses

**Work Features**

- ![After activating Work Features, the tool moves to the left in the window Combo view.](/images/Macro_WorkFeatures_01.png)

  After activating Work Features, the tool moves to the left in the window Combo view.

- ![Each use and each Tag that corresponds to a function group is a group created in the name of Tag used. The Axis, Point and Planes origin are directly keyed to hidden.](/images/Macro_WorkFeatures_07.png)

  Each use and each Tag that corresponds to a function group is a group created in the name of Tag used. The Axis, Point and Planes origin are directly keyed to hidden.

- [![You can ENTERING AND USING common commands to make visible the created function. Example key Space or select your object and click right of mouse and click "Hide selection" or "Show selection".](/images/Macro_WorkFeatures_08.png)](/File:Macro_WorkFeatures_08.png 'You can ENTERING AND USING common commands to make visible the created function. Example key Space or select your object and click right of mouse and click "Hide selection" or "Show selection ".')

  You can ENTERING AND USING common commands to make visible the created function.  
  Example key **Space** or select your object and click right of mouse and click "**Hide selection**" or "**Show selection**".

**Origin Tab**

|     |                                                                                                                                                                   |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Origin Tab** _ Origin : Create at origin: a point and X,Y and Z axis and XZ,XY and YZ planes. The Axis, Point and Planes origin are directly keyed to hidden. |

**Points Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Points Tab** _ Object(s) Center : Create a Point at center location of all selected Object(s). _ Lines(s) Center : Create a Point at mid point location of each selected Line(s). _ Line(s) Extrema : Create Points at start and end location of each selected Line(s). _ Circle(s) Center : Create a Point at center location of each selected Circle(s) or Arc(s). _ Point along Line : Create a Point on a line at some distance of the extremity point selected. _ **SpinBox** : enter the displacement value _ Face(s) Center : Create a Point at center location of each selected Face(s). _ Point (Line,Face) : Create a point at the intersection of the Line and Plane selected. _ Point (Line,Point) : Create a projection Point of a Point onto a Line and symetric point. _ Point (Point,Face) : Create a projection Point of a Point onto a Face. _ Object(s) Base Point : Create Base Point of all selected Object(s). |

**Axis Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Axis Tab** _ Object(s) X, Y, Z Axes : Create 3 Axes at center location of all selected Object(s). _ Two Points Axis : Create an Axis crossing 2 Points. _ **SpinBox** : enter the displacement value _ Cylinder(s) Axis : Create the Axis of a Cylinder. _ Axis (Line,Line) : Create an Axis between 2 Axes. _ Plane(s) Axes : Create 2 Perpendicular Axes at center location of a Plane. _ Axis (Point,Axis) : Create an Axis parallel to an Axis and crossing a Point. _ Axis (Axis,Point) : Create an Axis perpendicular to an Axis and crossing a Point. _ **SpinBox** : enter the displacement value _ Axis (Plane,Axis) : Create an Axis on a Plane by projection from another Axis. _ Axis (Plane,Plane) : Create an Axis by intersect of 2 Planes. \* Object(s) Base Axis : Create 3 Axes at Base location of all selected Object(s). |

**Plane Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Plane Tab** _ Three Points Plane : Create a Plane crossing 3 Points. _ Plane (Point, Axis) : Create a plane crossing a Line and a Point. The point MUST not belongs to the Line ! _ Plane (Point, \_Axis) : Create a plane perpendicular to a Line and crossing a Point. _ Plane (Point, Plane) : Create a plane crossing a Point and parallel to a Plane. _ **SpinBox** : enter the displacement value _ Plane (Plane, Axis) : Create a Plane crossing a Line and perpendicular to a Plane. _ **SpinBox** : enter the displacement value \* Object(s) Center Planes : Create 3 Planes (XY, XZ and YZ) at center location of all selected Object(s). |

**Objects Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Objects Tab** _ Bounding Box(es) : Create bounding boxes around each of selected object(s). _ Bounding Box : Create one bounding box around all of selected object(s). _ Cylinder : First select an Axis and a Point. Define Diameter and Length if needed. Then Click the button... It will create a Cylinder aligned on the selected axis. with one of the extremities at point selected. \* Cube : First select an Axis and a Point. Define Dimensions if needed. Then Click the button... It will create a Cube aligned on the selected axis. with one of the extremities at point selected. |

**Views Tab**

|     |                                                                                                                                                                                                             |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Views Tab** _ Align to ... : Set the current view perpendicular to the selected Face, or aligned to the selected Axis, or aligned on 2 Points. ReClick with same selection, will reverse the direction. |

**Modif. Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Modif. Cutting Tab** _ Select Object : After selected your object and, First, one Object to cut and click 'Select Object' button, + The name of the object selected are displayed _ Select Cut Line : Second, one cutting Line and click 'Select Cut Line' button, + The name of the line selected are displayed _ Select Ref. Plane : Last, a reference Plane and click 'Select Ref. Plane' button! + The name of the plane selected are displayed _ **Angle** : Angle for cut (Defaut : 0.0) _ **Thichness** : Thichness the cut (Defaut : 0.0) _ Reset : Reset the values _ Apply : Apply the values |

**Check. Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Check. Tab** _ are Parallel ? : Check if two faces or two Edges are Parallel: + Select the 2 faces/planes or 2 Edges/Lines and Click this button _ are Perpendicular ? : Check if two faces or two Edges are Perpendicular: + Select the 2 faces/planes or 2 Edges/Lines and Click this button _ are Coplanar ? : Check if two faces or two Edges are Coplanar: + Select the 2 faces/planes or 2 Edges/Lines and Click this button _ Distance Clearance ? : Check for two Objects Clearance distance: + Quick measurements between parallel faces and similarly placed objects Select the 2 Objects and Click this button _ Angle ? : Calculate angle from 2 objects: + Angle measurement between two Edges or two Planes + Select the 2 Edges and Click this button + or : Select the 2 Planes and Click this button + or : Select one Edge and one Plane and Click this button _ Distance ? : Check for two Points distance: + Distances measurement and Delta values (on main Axes) between two Points + Select the 2 Points and Click this button _ Length ? : Check for Line Length: + Length measurement and Delta values (on main Axes) for a Line + Select the Line and Click this button _ Area ? : Check for surface Area: + Area measurement for a Plane or a set of Planes. + Select One or several Planes and Click this button _ View : Detect the position of the camera. The returned value is the value provided by the function getCameraOrientation(). |

## Script

After downloading the file compressed here

ToolBar Icon ![](/images/WF_wf.png)

**[Download the latest version on GitHub](https://github.com/Rentlau/WorkFeature)** ,
you must unzip the zip and copy all the files in your macro directory.

**PS: This macro is still in development please visit this page for commonly be sure to have the latest version.**

![Download in GitHub click the Download ZIP button](/images/Macro_Work_Features_GitHub_00.png)

Download in GitHub click the Download ZIP button

Use ![](/images/AddonManager.svg) [Addons installer](/Std_AddonMgr "Std AddonMgr"), **Menu → Tools → Addon installer** for easy installation of WorkFeatures and other interesting macros

Here for [How to install macros](/How_to_install_macros "How to install macros") detailed

## Примеры

### Cutting tools

**Setting of the Cutting tools:** Select an object to cut, a cutting line and a reference Plane.
Angle is an angle between the cutting Plane and the Ref. Plane.
Thickness is the wide of the of the cutting Plane.

- ![Here we have selected a cylinder.](/images/CuttingSettings.jpg)

  Here we have selected a cylinder.

- ![The result will be : the cylinder is then cut in two parts!](/images/CuttingResult.jpg)

  The result will be : the cylinder is then cut in two parts!

**Example the practice**

- ![Select the Tab Plane](/images/Macro_Work_Features_Cutting_01.png)

  Select the **Tab Plane**

- [![and click the Plane button (you can change the dimensions of the plane (Default: 10 x 10)).](/images/Macro_Work_Features_Cutting_02.png)](/File:Macro_Work_Features_Cutting_02.png  "and click the Plane button (you can change the dimensions of the plane (Default: 10 x 10)).")

  and click the Plane button  
   (you can change the dimensions of the plane (**Default: 10 x 10**)).

- [![click you work object. The plane is created tangent of the object (here a cylinder)](/images/Macro_Work_Features_Cutting_03.png)](/File:Macro_Work_Features_Cutting_03.png  "click you work object. The plane is created tangent of the object (here a cylinder)")

  click you work object. The plane is created tangent of the object (here a cylinder)

- [![click the Tab Modif, and 1 : click your object for cutting 2 : click the Select object button (here the cylinder and then name is displayed)](/images/Macro_Work_Features_Cutting_04.png)](/File:Macro_Work_Features_Cutting_04.png  "click the Tab Modif, and 1 : click your object for cutting 2 : click the Select object button (here the cylinder and then name is displayed)")

  click the Tab Modif, and  
  **1 :** click your object for cutting  
  **2 :** click the Select object button (here the cylinder and then name is displayed)

- [![3 : click your line for cutting your cylinder 4 : click the Select Cut Line (then name is displayed)](/images/Macro_Work_Features_Cutting_05.png)](/File:Macro_Work_Features_Cutting_05.png  "3 : click your line for cutting your cylinder 4 : click the Select Cut Line (then name is displayed)")

  **3 :** click your line for cutting your cylinder  
  **4 :** click the Select Cut Line (then name is displayed)

- [![5 : click the work plane 6 : click the Select Ref. Plane button (then name is displayed)](/images/Macro_Work_Features_Cutting_06.png)](/File:Macro_Work_Features_Cutting_06.png  "5 : click the work plane 6 : click the Select Ref. Plane button (then name is displayed)")

  **5 :** click the work plane  
  **6 :** click the Select Ref. Plane button (then name is displayed)

- ![click the Apply button](/images/Macro_Work_Features_Cutting_07.png)

  click the Apply button

- ![The operation is completed and all operations are preserved.](/images/Macro_Work_Features_Cutting_08.png)

  The operation is completed and all operations are preserved.

- ![you can also give Angle and Thickness for your cut.](/images/Macro_Work_Features_Cutting_09.png)

  you can also give Angle and Thickness for your cut.

### Concentric constraint between two non cylindrical parts

- ![](/images/Concentric_Constraint_Between_two_non_cylindrical_parts.gif)

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How to Constraint Between two non cylindrical parts. **1 :** The original object to modify. **2 :** Objective center two square tubes. **3 :** Select the first object and in the menu **Axis 1/2** click "Object(s)" X, Y, Z Axes. **4 :** Same procedure for the second object. **5 :** Click on button **Draw style** and onto "Wireframe", **6 :** for clarify the view. **7 :** Select the object to center and his axis created. **8 :** Click the button **Draft Move** **9 :** and select the first axis to move on the second axis. **10 :** Restore normal view with on button **Draw style** and onto **As is**. **11 :** Click the first object moved and correct the position with "Combo view > Data > Placement". **12 :** Select the object created by WorkFeature (contener axis) and delete it. **13 :** The object vanished. **14 :** The result. |

### Rotation Object

- ![Click the image for see the animation.](/images/WorkFeature_Rotation_Object.gif)

  Click the image for see the animation.

### Plane on face tangent

- ![Click the image for see the animation. Click the object, click the Face tangent button, click the point on face for create the plane.](/images/Macro_Work_Features_PlaneFaceTangent.gif)

  Click the image for see the animation.  
  Click the object, click the Face tangent button, click the point on face for create the plane.

## Links

The forum discussion [MACRO:Work Feature 2014_12](http://forum.freecadweb.org/viewtopic.php?f=22&t=9056)

## External workbenches

FreeCAD workbenches are easy to program in [Python](/Python "Python"), there are therefore many people developing additional workbenches outside of the FreeCAD main developers.

The [external workbenches](/External_workbenches "External workbenches") page has some information and tutorials on some of them, and the [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons/) project aims at gathering them and making them easily installable from within FreeCAD.

New workbenches are in development, stay tuned!

## Latest version

**Icons :**

![](/images/WF_wf.png)

![](/images/WF_centerObjectsPlanes.png)

**Sources :**

On github : [/github.com/Rentlau/WorkFeature-WB.git](https://github.com/Rentlau/WorkFeature-WB.git)

Date 2019-05-01 (YYYY-MM-DD)

20/01/2019

08/03/2015 : [WF_2015_03_08](http://github.com/Rentlau/WorkFeature.git)

- Circle cut added
- Are Parallel, Are Perpendicular, Are Coplanar added

17/02/2015 : [WF_2015_02_17](https://github.com/Rentlau/WorkFeature.git)

- Circle and Ellipse Tab added
- Cutting tab added

25/01/2015 : [WF_2015_01_25.zip](http://forum.freecadweb.org/download/file.php?id=10937&sid=b770dec5362ae499adb4173547ef445f) add Object Cylinder Cube

18/01/2015 : [WF_2015_01_18.tar.gz](http://forum.freecadweb.org/download/file.php?id=10799) add plane and face to view

28/12/2014 : [WorkFeatures_2014_12_28.zip](http://forum.freecadweb.org/download/file.php?id=10347)

27/12/2014 : [WF_2014_12_27.zip](http://forum.freecadweb.org/download/file.php?id=10325)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_WorkFeatures/ru&oldid=1210933>"
