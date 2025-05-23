---
title: Solid Sweep
---

|                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Solid Sweep                                                                                                                                                                                                                             |
| Description                                                                                                                                                                                                                             |
| Creates a solid by sweeping a profile from a trajectory. Macro version: 1.0 Last modified: 2011-12-03 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png) Author: Normandc |
| Author                                                                                                                                                                                                                                  |
| [Normandc](/User:Normandc "User:Normandc")                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png)                                                                                                                                                       |
| Links                                                                                                                                                                                                                                   |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                        |
| Macro Version                                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                                     |
| Date last modified                                                                                                                                                                                                                      |
| 2011-12-03                                                                                                                                                                                                                              |
| FreeCAD Version(s)                                                                                                                                                                                                                      |
| All                                                                                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                  |
| See also                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                         |

## Description

This macro creates a solid by sweeping a 2D profile along a trajectory previously selected in the 3D view. The 2D elements can be created through the regular tools in FreeCAD's GUI.

It should be noted that the resulting solid will **not** be parametric. If you decide to change your profile or trajectory, you'll need to run the macro again.

![A few examples of sweeping all using the same oblong section and three kinds of trajectory.](/images/Solid_sweep.png)

## Usage

1. Create two 2D elements, one for the section and one for the trajectory, of the types listed below.
2. Select, either in the [Tree view](/Tree_view "Tree view") or in the [3D view](/3D_view "3D view") (**The order is important!**):
   1. The trajectory
   2. Then the profile
3. Open the [Macro manager](/Macros "Macros")
4. Select the **Solid Sweep** macro
5. Click Execute

**Result:** A **Sweep** object will be created in the Project tree.

## Supported 2D elements

- Wires

* ![](/images/Sketcher_NewSketch.svg) [Sketches](/Sketcher_Workbench "Sketcher Workbench")
* ![](/images/Draft_BSpline.svg) [Draft BSpline](/Draft_BSpline "Draft BSpline")

- 2D primitives from the _Part → ![](/images/Part_Primitives.svg) [Create Primitives](/Part_Primitives "Part Primitives") ..._ menu (circle, helix)

## Tips

- The section has to be a closed profile or the result will not be a solid.
- The section does not need to be located on the trajectory, but it's preferable that it be normal (perpendicular) to the trajectory.
- The trajectory can either be an open or closed profile (circle, or line and arc segments) but all elements need to be tangent or the resulting shape will be unexpected. For example, a trajectory with straight corners like a rectangle will not produce a solid.
- If the solid gets twisted, edit the macro to change the _isFrenet_ value to 0 (zero) and try again.
- Setting the _makeSolid_ variable to 0 (zero) in the macro will produce a set of surfaces with open ends.

## Script

ToolBar Icon ![](/images/Macro_Solid_Sweep.png)

**Macro_Solid_Sweep.FCMacro**

```
import Part, FreeCAD, math, PartGui, FreeCADGui
from FreeCAD import Base

# get the selected objects, with first selection for the trajectory and second for the section
s = FreeCADGui.Selection.getSelection()
try:
     shape1=s[0].Shape
     shape2=s[1].Shape
except:
     print "Wrong selection"

traj = Part.Wire([shape1])
section = Part.Wire([shape2])

# create Part objec in the current document
myObject=App.ActiveDocument.addObject("Part::Feature","Sweep")

# variable makeSolid = 1 to create solid, 0 to create surfaces
makeSolid = True #1
isFrenet = True #1

# create a 3D shape and assigh it to the current document
Sweep = Part.Wire(traj).makePipeShell([section],makeSolid,isFrenet)
myObject.Shape = Sweep
```

## Credits

Thanks to [Wmayer](/User:Wmayer "User:Wmayer") for his help in writing this script.

Two examples of uses can be found in [this forum topic](http://forum.freecadweb.org/viewtopic.php?f=8&t=1222&start=50#p11120), along with download links to the FCStd files. Using a helix as trajectory, a solid sweep can be used to create a bolt thread.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Solid_Sweep/en&oldid=800618>"
