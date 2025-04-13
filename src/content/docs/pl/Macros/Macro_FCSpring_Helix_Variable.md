---
title: Makrodefinicja FCSpring Zmienna spirala
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro FCSpring Helix Variable                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| This macro creates a spring with customizable, any turn may change the spring configuration can be saved in a file with the extension **.FCSpring** or coordinates **.FCSpringCoor**. Are detected: Surface (Face direction), Cylinder (Radius), Ellipse (MinorRadius), Sphere (Radius), Toroid (Radius1), Plane (Direction), Line (follow the Direction ), Point (XYZ vertex position) If no object is detected (not selection) the spring is created at the point XYZ 0., 0., 0. See the [examples](https://www.freecadweb.org/wiki/Macro_FCSpring_Helix_Variable#Examples) Download [the Icons](https://forum.freecadweb.org/download/file.php?id=80844) in .zip file Macro version: 01.19 Last modified: 2024/07/11 FreeCAD version: 0.19 and bigger Download: [ToolBar Icon](https://wiki.freecad.org/images/6/69/FCSpring_Helix_Variable.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [ToolBar Icon](https://wiki.freecad.org/images/6/69/FCSpring_Helix_Variable.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 01.19                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2024/07/11                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.19 and bigger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Description

This macro creates a spring highly customizable. Any modification changing the spring configuration can be saved in a file with the extension .FCSpring or coordinates .FCSpringCoor  
Are detected: Surface (Face direction), Cylinder (Radius), Ellipse (MinorRadius), Sphere (Radius), Toroid (Radius1), Plane (Direction), Line (follow the Direction ), Point (XYZ vertex position)  
If no object is detected (not selection) the spring is created at the point XYZ 0., 0., 0.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro>">raw code</a>

![](/images/TruncateSpring00.png)

FCSpring Helix Variable

## Usage

This section is used to configuration the spring

Schematic detail of spring configuration

![](/images/Macro_TruncateSpring_01.png)

#### Gui

![](/images/Macro_FCSpring_Helix_Variable_01.png)

#### Configuration

- 10 coils ![](/images/SpinBox.svg) **Number of coil** : Total of coil to spring. Default = 10
- 20,000 mm ![](/images/SpinBox.svg) **Radius of spring** : Radius of spring. Default = 20.0
- 15,000 mm ![](/images/SpinBox.svg) **Pitch of spring** : Pitch of spring general. Default = 15.0
- 5 ( 72 points ) ![](/images/SpinBox.svg) **Precision of turn** : Precision of turn the precision correspond the number of point for 1 turn the coil and is calculate : precision (number points) = (pitch / (360/precision)). Default = 5 (72 points)
- 20,000 mm ![](/images/SpinBox.svg) : Radius of large circle of the cone (check the ![](/images/CheckBoxTrue.svg) Spring conical for use)
- ![](/images/CheckBoxFalse.svg) Spring conical : Give the large diameter of the cone that dimension will always be greater than the radius
- ![](/images/CheckBoxFalse.svg) Angles : Check box choice for activate the function Begin and End angle of the coil unchecked by default.  
   If the function is checked. The accuracy is automatically set "precision" is ordered 1 ( 360 points ) ![](/images/SpinBox.svg) to 1 (360 points per turn 1 point = 1 degrees)
- 0 deg ![](/images/SpinBox.svg) **Begin** : Begin angle of the spring first coil.
- 360 deg ![](/images/SpinBox.svg) **End** : End angle of the spring last coil.

![](/images/Macro_FCSpring_Helix_Variable_02.png)

#### Type line

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_BSpline.svg) Bspline **BSpline** : Type line BSpline.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Wire.svg) Wire **Wire** : Type line Wire.
- ![](/images/CheckBoxFalse.svg) ![](/images/Draft_Point.svg) Points **Points** : Check box point if the check box is activate one point is create of on each point.
- ![](/images/CheckBoxFalse.svg) Reverse **Reverse** : Check box reverse if the check box is activate the spring changes direction

![](/images/Macro_FCSpring_Helix_Variable_03.png)

#### Options

This section is displayed if on object is selected. The type object is displayed in the Text Editor

The object can be line, 2 points, circle, wire ... one axis the length of the spring is automatically created

Detection : Cylinder (radius), Sphere (radius), Toroid (radius) , Cone (little radius), Circle (radius), Arc (radius), Ellipse (little radius)

- Normal : If one circle is selected **Normal** not modify the radius of circle (Default)
  - Adapt Rad. : If the button Normal' is pressed, the button change to Adapt Rad. the spring is adapted to the detected radius (If a radius is detected )
- Point Mouse : If the click mouse is on one face the spring is created on this point (Default)
  - Center Face : If the button Point Mouse is pressed, the button change to Center Face, the spring is created on the center face selected
- ![](/images/CheckBoxFalse.svg) Position **Position** : If two object are selected (First axis, Second the spring (or other object)), this checkBox is enabled and you can modify the placement object 2 (spring) along the on object 1 (axis), if this ![](/images/CheckBoxTrue.svg) Position is checked the "Position" option is enabled for use
- Circle : If three points click mouse are selected the Circle button is enabled and it possible to create a circle which can serve as a base for a spring

![](/images/Macro_FCSpring_Helix_Variable_02_1.png)

#### Position (0)(xx)

(0)(xx) : Number selection(s), length in mm of axis created x 10, equal number of points for shifting the spring of the axis

- Begin/End : Position the spring on begin, middle, end axis
- Reverse Spr. : Reverse the spring of the axis
- 0,1 mm ![](/images/SpinBox.svg) : Shifting the spring with precision (0.1 mm) along its axis
- Reverse Count. : Reverse the counter ex: Begin 0 to 10.. or End 0 to 10..
- **Slider** : Position the spring on its axis

![](/images/Macro_FCSpring_Helix_Variable_02_2.png)

#### Coil special dimension

- Num: 2 ![](/images/SpinBox.svg) **Numbering of coil** : Numbering of coil to modify. (Default : none)
- ![](/images/CheckBoxFalse.svg) Smoothing **Smoothing** This checkBox discover one spinBox for determine the grade of smoothing the maximum value is the precision value -1 (this option is still at the prototype stage and the result can be satisfying or completely wrong)
- 0,000 mm ![](/images/SpinBox.svg) **Pitch of coil** : Pitch of coil to modify. (Default : none)
- 15.0 mm : If the button is pressed the value of the "Pitch of string" is affected of the "Pitch of coil" (This value is automatically aligned of the value Pitch of string)
- 0,000 mm ![](/images/SpinBox.svg) **Radius of coil** : Radius of coil to modify. (Default : none)
- 20.0 mm : If the button is pressed the value of the "Radius of string" is affected of the "Radius of coil" (This value is automatically aligned of the value Radius of string)
- ![](/images/FCSpring_Helix_Variable_Icon_01.png) Accept the value modified : Button to accept the modification after select the numbering of coil and modify the pitch of coil.
- **Text edit** : This window displayed all coil modified.
- Clear : Clean the text editor
- Zoom : Button "Zoom" enlarge the text-edit window

![](/images/Macro_FCSpring_Helix_Variable_04.png)

#### Command

- ![](/images/FCSpring_Helix_Variable_Icon_02.png) Load : The Lead button open a dialogue box to read a file **.FCSpring**.
- ![](/images/FCSpring_Helix_Variable_Icon_03.png) Save : The Save button open a dialogue box to save a file **.FCSpring** with configuration spring modify or not.
- ![](/images/FCSpring_Helix_Variable_Icon_02b.png) Load Coordinates : Open a dialogue box to read a file **.FCSpringCoor** (all coordinates of points of the spring).
- ![](/images/FCSpring_Helix_Variable_Icon_03b.png) Save Coordinates : Open a dialogue box to save a file **.FCSpringCoor** (all coordinates of points of the spring).
- ![](/images/FCSpring_Helix_Variable_Icon_04.png) Quit : Quit the macro.
- ![](/images/FCSpring_Helix_Variable_Icon_05.png) Reset : Reset the macro to default configuration.
- ![](/images/FCSpring_Helix_Variable_Icon_06.png) Launch : Launch the macro and create the spring configured.
- Help : This button display the wiki page int the FreeCAD browser.

![](/images/Macro_FCSpring_Helix_Variable_05.png)

## Report view

The window report view displayed all value modified.

![](/images/Macro_FCSpring_Helix_Variable_06.png)

## Example spring

Example to spring modified

![](/images/Macro_FCSpring_Helix_Variable_07.png)

## Example Report view

When the macro is launched full list of turns is displayed in tabular form.

Here the data of the spring above and displayed in the Report view
![](/images/Macro_FCSpring_Helix_Variable_08.png)

## Icon

Download the file image and copy in your macro repertory.

Click the image, in the new window position the mouse over the image, click the right mouse and do "Save target as ..."

ToolBar button

![Button](/images/FCSpring_Helix_Variable.png)

Button

Macro icons

![](/images/FCSpring_Helix_Variable_Icon_01.png) ![](/images/FCSpring_Helix_Variable_Icon_02.png) ![](/images/FCSpring_Helix_Variable_Icon_02b.png) ![](/images/FCSpring_Helix_Variable_Icon_03.png) ![](/images/FCSpring_Helix_Variable_Icon_03b.png) ![](/images/FCSpring_Helix_Variable_Icon_04.png) ![](/images/FCSpring_Helix_Variable_Icon_05.png) ![](/images/FCSpring_Helix_Variable_Icon_06.png)

## Script

**Macro_FCSpring_Helix_Variable.FCMacro**

Download the macro to Gist [Macro_FCSpring_Helix_Variable](https://gist.github.com/mario52a/68c81c32a0727a693d3a)

## Installation

The above file is a macro in the form of GitHub code. Download the Zip on GitHub, and then follow the macros installation instructions for dummies shown at [installing FreeCAD macros in Ubuntu](https://wiki.opensourceecology.org/wiki/Installing_Macros_in_FreeCAD).

## Examples

- ![Valves Assembly IN EX with permit and created by r.tec see Inlet & Exhaust Valves Assembly and Spiralfeder thanks r.tec](/images/Valves_Assembly_IN_EX.png)

  Valves Assembly IN EX with permit and created by r.tec see [Inlet & Exhaust Valves Assembly](http://forum.freecadweb.org/viewtopic.php?f=24&t=14183) and [Spiralfeder](http://forum.freecadweb.org/viewtopic.php?f=13&t=14143) thanks r.tec

- ![](/images/Macro_FCSpring_Helix_Variable_12.png)
- ![](/images/Macro_FCSpring_Helix_Variable_13.png)

- ![](/images/Macro_FCSpring_Helix_Variable_14.png)
- ![](/images/Macro_FCSpring_Helix_Variable_15.png)

- ![](/images/Macro_FCSpring_Helix_Variable_16.png)
- ![](/images/Macro_FCSpring_Helix_Variable_17.png)

- ![](/images/Macro_FCSpring_Helix_Variable_18.png)

- ![Example polygonal Spiral by 3 points](/images/Macro_FCSpring_Helix_Variable_polygonalSpiral00.png)

  Example polygonal Spiral by 3 points

- ![Example polygonal Spiral by 4 points](/images/Macro_FCSpring_Helix_Variable_polygonalSpiral01.png)

  Example polygonal Spiral by 4 points

- [![Difference between Smooth (here 71 with precision 5 (72 points)) and normal](/images/Macro_FCSpring_Helix_Variable_19.png)](/File:Macro_FCSpring_Helix_Variable_19.png  "Difference between Smooth (here 71 with precision 5 (72 points)) and normal")

  Difference between Smooth (here 71 with precision 5 (72 points)) and normal

- ![Example](/images/Macro_FCSpring_Helix_Variable.gif)

  Example

- ![Example create conical spring](/images/Macro_FCSpringHelixVariable_Example_02.gif)

  Example create conical spring

- ![Example create spring on circle](/images/Macro_FCSpringHelixVariable_Spring_On_Circle.gif)

  Example create spring on circle

- ![Move along the axis](/images/Macro_FCSpringHelixVarable_Spring_Along_Axis.gif)

  Move along the axis

## Links

The forum discussion [Try to do a Spring](http://forum.freecadweb.org/viewtopic.php?f=3&t=8313&p=68161#p68161)

## Project

spring solid truncated

soften fittings :done

modify diameter to any coil :done

## Version

11/07/2024 version 01.19 delete **"import WebGui"** replaced by **"import webbrowser"** and optimise filter for **OS Linux Mint**

2023/09/01 Version 0.18c adding **FreeCAD.activeDocument().recompute(None,True,True)\***Texte en italique\* "bug" fixed by **Syres** thanks
[How to draw polygonal spirals in Freecad?](https://forum.freecad.org/viewtopic.php?p=703568#p703568)

2023/09/01 Version 0.18b correct (adapt) the code :

```
self.PB_Adapt_Radius.setStyleSheet("background-color: QPalette.Base")

```

to

```
self.PB_Adapt_Radius.setStyleSheet("QPushButton {background-color: QPalette.Base}")

```

2022/03/16 Version 0.18 : adding scrollBar, possibility docking Left or Right, restore the chrono _(time.time())_, memorise the last FilePath

```
####chrono################
import time
global depart ; depart  = 0.0
global arrivee; arrivee = 0.0
def chrono(switch):    # 0=depart autre=stop
#time.strftime('%X %x %Z')#'15:44:07 12/14/19 Paris, Madrid'
    global depart
    global arrivee
    try:
        if switch == 0:
            depart = time.time()#time.clock()
            App.Console.PrintMessage("Chrono begin   : "+str(time.strftime('%X'))+"\n")
        else:
            arrivee = time.time()#time.clock()
            App.Console.PrintMessage("Chrono end     : "+str(time.strftime('%X'))+"\n")
            parcouru = ((arrivee - depart)/60.0)
            App.Console.PrintError("Time execution : "+str("%.3f" % parcouru)+" min"+"\n\n")
        return parcouru
        FreeCADGui.updateGui()
    except Exception: None
####chrono################

```

2020/11/12 Version=01.17 : suppress the timer chrono !!

2020/10/18 Ver 00.16b : i suppress the test on FC 18 line 56, i suppress the timer chrono and i wait one little

2020/05/01 Ver 00.16: correction error file (save and load) cause "label_11_Name" suppressed...

2020/04/11 Ver 01.15: layout and little presentation

2019/05/03 Ver 01.14: compatible FreeCAD 0.19.16523 (Git)

2019/04/08 Ver 01.13: compatible FreeCAD 0.18.16093 (Git) /Python version: 3.6.6 /Qt version: 5.6.2

03/04/2017: ver 01.12: correction bug line 2314 add "global ui"

11/12/2016: ver 01.11: Adding Position of the spring on a selected object

10/09/2016: ver 01.10: Adding Button "Zoom" enlarge the textedit window

04/09/2016: ver 01.09: add smoothing

16/03/2016: ver 01.08 : correct and add "int()" to debutAngle and finAngle (read file)

02/03/2016: ver 01.07 : add option reverse spring

08/02/2016: ver 01.06 : correct bug angle cause "modifyAngle = int(file.readline().rstrip('\n\r')) # 9" modifyAngle is int() not char

07/01/2015: ver 01.05 : adding "Try ...Except" (data cone) for compatibility with old version

07/01/2015: ver 01.04 : adding spring conical and modify the path to "UserAppData" and adding the icone.

07/12/2014: ver 01.03 : new version with radius coil adjustable

17/11/2014: ver 1.02 : new version with GUI and modification any coil and save or load the data to disk.

10/11/2014: (23h20) correction of the modification

```
ligne.Placement = App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

10/11/2014: modify line 44 :

```
a = FreeCAD.ActiveDocument.Line.Placement=App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

to

```
ligne = FreeCAD.ActiveDocument.Line.Placement=App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

6/11/2014 : adding "makeBSpline" and configuration

## Limitations

During sweep tests here are the mistakes I have obtained !

- ![For the moment the macro is not adapted for the square, rectangle... Only circle work well](/images/Macro_FCSpring_Helix_Variable_20.png)

  For the moment the macro is not adapted for the square, rectangle...  
  Only circle work well

- ![ACCESS VIOLATION](/images/Macro_FCSpring_Helix_Variable_09.png)

  ACCESS VIOLATION

- ![TCollection_IndexedDataMap](/images/Macro_FCSpring_Helix_Variable_10.png)

  TCollection_IndexedDataMap

- ![Wrong usage of punctual sections](/images/Macro_FCSpring_Helix_Variable_11.png)

  Wrong usage of punctual sections

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCSpring_Helix_Variable/pl&oldid=1450788>"
