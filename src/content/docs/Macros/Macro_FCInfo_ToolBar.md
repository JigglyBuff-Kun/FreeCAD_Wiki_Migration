---
title: FCInfo ToolBar
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro FCCInfo ToolBar                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Gives information about the selected shape and can display a conversion of radius, diameter, length, area, volume ... in different units (metric and imperial) in a toolBar. The information to be displayed in real time is parametrizable in the Parameter of FreeCAD. Macro version: 00.05b Last modified: 2023/09/06 FreeCAD version: 0.18 and more Download: [ToolBar Icon](https://wiki.freecad.org/images/9/9d/FCInfoToolBar.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [ToolBar Icon](https://wiki.freecad.org/images/9/9d/FCInfoToolBar.png)                                                                                                                                                                                                                                                                                                                                                                                   |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                         |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 00.05b                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2023/09/06                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.18 and more                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Arch Survey](/Arch_Survey "Arch Survey"), [Macro FCInfo](/Macro_FCInfo "Macro FCInfo"), [Macro FCInfoGlass](/Macro_FCInfoGlass "Macro FCInfoGlass")                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Description

Gives information about the selected shape and can display a conversion of radius, diameter, length, area, volume ... in different units (metric and imperial) in a toolBar. The information to be displayed is parametrizable in the Parameter of FreeCAD.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro>">raw code</a>

![FCInfo_ToolBar](/src/assets/images/Macro_FCInfo_ToolBar_00.png)

FCInfo_ToolBar

![FCInfo_ToolBar](/src/assets/images/FCInfo_ToolBar_Animate01.gif)

FCInfo ToolBar in action

## Usage

After run the macro, go to Menu → Tools → Edit parameters ... :BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar

and check the info to display.

The complete info hare displayed in the ToolTip window, the checked option is visible if the "\*" is displayed.

Use the button reset after change one option in the parameter window.

The Unit size can be selected :
km, hm, dam, m, dm, cm, mm, µm, nm, pm, fm, inch, link, foot, yard, perch, chain, furlong, mile, league, nautique.

![FCInfo_ToolBar the info toolTip](/src/assets/images/Macro_FCInfo_ToolBar_01.png)

FCInfo_ToolBar the info toolTip

## Options

The options are located in the Parameter of FreeCAD:

_Menu → Tools → Edit parameters ... :BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar_

- **_switch_User_ToolbarIconSize_**

  - if = `false`: the icon toolBar respect the FreeCAD value for the icon size
  - if = `true`: the icon take the values of the variable **seT_User_sizeIconX** and **seT_User_sizeIconY**

- **_seT_User_sizeIconX_**

  - set the value X of the Icon

- **_seT_User_sizeIconY_**

  - set the value Y of the Icon

- **_seT_User_setFixed_Tool_Bar_Width_**

  - set the Width of the ToolBar

- **_seT_User_setFixed_Tool_Bar_Height_**

  - set the Height of the ToolBar

- **_switch_User_Work_With_Preselection_**

  - Work With the Preselectiond, update the data in real time

- **_seT_User_StyleSheetColorToolBar_**

  - set the color of the toolBar in HTML format example : **#F8E6E0**
  - if the value is **0** the toolBar take the system color

- **_seT_User_DecimalValue_**

  - give the number of decimal of the number (Default **2**)

- **_seT_User_TextHeigthValue_**

  - give the text height of the toolBar

- **_switch_User_Display_objectName_**

  - display the object Name ()

- **_switch_User_Display_SubElementName_**

  - display the SubElementName ()

- **_switch_User_Display_ShapeType_**

  - display the Shape type (TyS:)

- **_switch_User_Display_TypeId_**

  - display the TypeId (TyI:)

- **_switch_User_Display_RadiusObject_**

  - display the radius and the diameter (r:) [D:]

- **_switch_User_Display_RadiusSurface_**

  - display the radius and the diameter on surface (rS:) [DS:]

- **_switch_User_Display_LengthObject_**

  - display the Length of the edge selected or the Perimeter of the face selected
    - (L:) display the Length of the wire, edge, line selected
    - (P:) display the Perimeter if the face is selected

- **_switch_User_Display_SommeAllEdgesObject_**

  - display the somme of the all edge of the object selected (Se:)

- **_switch_User_Display_NumberFacesMesh_**

  - display the number of Faces of the Mesh object (Nf:)

- **_switch_User_Display_NumberPointsMeshPoints_**

  - display the number of points of the Mesh object (Np:)

- **_switch_User_Display_NumberEdgesMesh_**

  - display the number of edges of the Mesh object (Ne:)

- **_switch_User_Display_AreaObject_**

  - display the area of the object (A:)

- **_switch_User_Display_AreaSubObject_**

  - display the area of the face selected (Af:)

- **_switch_User_Display_VolumeObject_**

  - display the volume of the object (V:)

- **_switch_User_Display_BsplineObject_**

  - display the number of node of the Bspline selected
    - (BSpline) display the number of node of the BSpline
    - (BSrA) BSPline radius approximative first radius of the BSpline
    - (BSS) BSPline Points Shape number points of the Bspline (case Shape)
    - (BSc) BSPline Points Sub Object number points of sub object selected (case Edge)

- **_switch_User_Display_CentreObject_**

  - display the center of the circle (if one circle is detected) or of the object selected
    - (Ce:) display the center of circle (if detected), face, edge ... BBoxCenter of face, edge ... Sub selection" + "\n\n")

- **_switch_User_Display_CentreBoundBoxObject_**

  - display the boundingBox center of the object (BBCe:)

- **_switch_User_Display_Position_**

  - display the coordinates point mouse pointed (Pos:)

- **_switch_User_Display_Position_2D_CAD_**

  - display the coordinates point 2D Cad (x, y) 0,0 = bottom left corner

- **_switch_User_Display_Position_2D_BMP_**

  - display the coordinates point 2D Bmp (x, y) 0,0 = top left corner

- **_switch_User_NotInfoOnBeginning_**

  - if it is `false` the info (this information) is not displayed
  - if it is `true` the info is displayed

- **_seT_User_UnitSymbolSquare_**

  - give the symbol square (Default **2**)

- **_seT_User_UnitSymbolCube_**

  - give the symbol cube (Default **3**)

- **_seT_User_UnitSymbolMicro_**
  - give the symbol micro (Default **u**)

## For automatic Run

#### in command line

In your shortcut _verify your right path_

"Complete_path_of_FreeCAD" "Complete_path_of_the_macro.FCMacro"

example:

```
"C:/FreeCAD_0.20.26858_Win-LPv12.5.4_vc17.x-x86-64/bin/FreeCAD.exe" "C:/Users/User/AppData/Roaming/FreeCAD/Macro/FCInfo_ToolBar.FCMacro"

```

#### in Mod directory

1. After install the macro with [Addon Manager](/Std_AddonMgr "Std AddonMgr")
2. Create the _FCInfo_ToolBar_ directory
3. Copy the macro FCInfo*ToolBar.FCMacro (copy not move) in the \_FCInfo_ToolBar* directory and rename it in FCInfo_ToolBar.py
4. Create a file named InitGui.py
5. Paste the code in InitGui.py:

```
#### FC Version: 0.1 #16/02/2022
#### Mario52
#### FCInfo_ToolBar : mini FCInfo ####
#
import importlib
from importlib import reload
import FreeCAD, FreeCADGui
App = FreeCAD
Gui = FreeCADGui

switch_User_NotRunAuto = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar").GetBool("switch_User_NotRunAuto")
## switch_User_NotRunAuto 0 (False) = run the macro in begin
## switch_User_NotRunAuto 1 (True)  = not run automatic the macro

if switch_User_NotRunAuto == False:
    import FCInfo_ToolBar
    #reload(FCInfo_ToolBar)
    FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar").SetBool("switch_User_NotRunAuto", False)
    #FreeCAD.Console.PrintMessage("InitGui Ok FCInfo_ToolBar" + "\n")

```

1. save the file
2. run FreeCAD
3. if the macro not run (normal) execute the macro FCInfo_ToolBar.FCMacro as a normal macro
4. the next start of FreeCAD the macro must start automatically

enjoy

## Link

The forum discussion [Feature request: coordinates display](https://forum.freecadweb.org/viewtopic.php?f=8&t=66294)

## Version

version 00.05b 06/09/2023 : correct bug calcul 2D Bmp

version 00.05 06/09/2023 : add coordinate 2D Cad (x, y) 0,0 = bottom left corner or Bmp (x, y) 0,0 = top left corner, radiusSurface  
create the test "if" **switch_User_NotInfoOnBeginning** i forgot !!

version 00.04 28/06/2023 : correction styleSheet and:

```
sommeEdgesSTR = str(sommeEdges)

```

replaced by:

```
sommeEdgesSTR = str(round(sommeEdges * uniteM, seT_User_DecimalValue)) + " " + uniteMs

```

version: (00.02 +) 00.03 2022/03/22 : add somme all edges

version: 00.02 2022/03/14 : add calcul in real time (with preselection), dimension of toolBar, add info mesh and points

version: 00.01 2022/02/16 :

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCInfo_ToolBar/en&oldid=1345270>"
