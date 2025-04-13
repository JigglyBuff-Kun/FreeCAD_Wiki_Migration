---
title: Compound Plus
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Macro Compound Plus                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Draft command set in a small macro for the 2D wire example: work with the DXF files. The macro detected : Line, Arc, Circle, Ellipse, BSplineCurve and reproduce the DXF wire in a Draft object. The text is converted in ShapeString. Macro version: 00.05 Last modified: 2024-11-11 FreeCAD version: 0.21.2 and more Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Compound_Plus.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Compound_Plus.png)                                                                                                                                                                                                                                                                                                                                                  |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                     |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 00.05                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2024-11-11                                                                                                                                                                                                                                                                                                                                                                                                                           |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.21.2 and more                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                               |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Description

Draft command set in a small macro for the 2D wire example: work with the DXF files. The macro detected : Line, Arc, Circle, Ellipse, BSplineCurve and reproduce the DXF wire in a Draft object. The text is converted in ShapeString.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro>">raw code</a>

## Usage

![Macro_Compound_Plus_00](/src/assets/images/Macro_Compound_Plus_00.png)

### Choice

- ![](/src/assets/images/Part_Compound.svg) Compound I Type I [1 + 1 = 1] : Create one compound unique of all objects selected without history.
- ![](/src/assets/images/Part_Compound.svg) Compound II Type II [1 + 1 = A (1 + 1)] : Create one compound of all objects selected with history of all objects. Same "**Menu → Part → Make compound**".

### Option color

If it ![](/src/assets/images/CheckBoxFalse.svg) checked the colour to object to work are coloured (edge, vertex)

- ![](/src/assets/images/Workbench_Image.svg) Color  : Gives a colour to object. (Default Red 255, 0, 0)

### Tools

- LineEdit : display (Iindex of Font / Number of font) the path and name of the font.

* ![](/src/assets/images/Draft_Text.svg) Convert Text (A) : convert the text ![](/src/assets/images/Draft_Text.svg) in a shape string ![](/src/assets/images/Draft_ShapeString.svg) (The height of the text converted is respected but the visual result may not be respected, see the Combo view property for confirm). (A) is Automatic value height of text.

  - 0,00 Auto ![](/src/assets/images/SpinBox.svg) : If the spinbox is egual 0.0 the heigth of the VALUE of the text is respected, if other of 0.0 the ![](/src/assets/images/Draft_Text.svg) Convert Text (A) change to ![](/src/assets/images/Draft_Text.svg) Convert Text (M) manual.

* ![](/src/assets/images/Draft_Line.svg) Convert Wire (A) : This command convert the wire in one line with coordinates. (ex: one compound downgraded does not have coordinates, this function create a line with the coordinate as Draft line and reproduce the DXF wire in a Draft object are detected: Line, Arc, Circle, Ellipse, BSplineCurve.
  - 0,00 Auto ![](/src/assets/images/SpinBox.svg) : Gives a thickness of the wire. If the spinbox is egual 0.0 the heigth of the VALUE of the text is respected, if other of 0.0 the ![](/src/assets/images/Draft_Line.svg) Convert Wire (A) change to Convert Wire (M) manual.
* ![](/src/assets/images/CheckBoxFalse.svg) ![](/src/assets/images/Draft_BezCurve.svg) BezierCurve : By default the BezierCurve detected is ![](/src/assets/images/Draft_BezCurve.svg), if it is checked the BezierCurve is Cubic ![](/src/assets/images/Draft_CubicBezCurve.svg) and the button change ![](/src/assets/images/CheckBoxTrue.svg) ![](/src/assets/images/Draft_CubicBezCurve.svg) Cubic BezierCurve

* ![](/src/assets/images/RadioButtonTrue.svg) ![](/src/assets/images/Std_DrawStyleFlatLines.svg) FlatLines : The objects created is FlatLines.
* ![](/src/assets/images/RadioButtonFalse.svg) ![](/src/assets/images/Std_DrawStyleWireFrame.svg) Wireframe : The objects created is Wireframe.
* ![](/src/assets/images/RadioButtonFalse.svg) ![](/src/assets/images/Std_DrawStylePoints.svg) Points : The objects created is Points.
* ![](/src/assets/images/Draft_Upgrade.svg) UpGrade : UpGrade
* ![](/src/assets/images/Draft_Downgrade.svg) DownGrade : DownGrade

### For Compound I and Convert Edge

This section work only with the tools ![](/src/assets/images/Part_Compound.svg) Compound I, ![](/src/assets/images/Draft_Text.svg) Convert Text (A) and ![](/src/assets/images/Draft_Line.svg) Convert Wire (A)

- ![](/src/assets/images/RadioButtonTrue.svg) None : Everything originals objects remains as it is.
- ![](/src/assets/images/RadioButtonFalse.svg) Hidden original objest(s) : Hidden the originals objest(s).
- ![](/src/assets/images/RadioButtonFalse.svg) Delete original objest(s) : Delete the originals objest(s).

### Force on a form : Line

If the object line, arc or circle is not reconized (as form in a volume 3D object), this section force the creation of Line, Arc or Circle.

no verification is done, this section tray to create a requested shape 2D (Draft) based on the data provided

- ![](/src/assets/images/RadioButtonTrue.svg) ![](/src/assets/images/Draft_Line.svg) Lines : Tray to create a Line.
- ![](/src/assets/images/RadioButtonFalse.svg) ![](/src/assets/images/Draft_Arc.svg) Arc : Tray to create a Arc.
- ![](/src/assets/images/RadioButtonFalse.svg) ![](/src/assets/images/Draft_Circle.svg) Circle : Tray to create a Circle.
- ![](/src/assets/images/Draft_Line.svg) Force on : Line : Button Force

### Command

- ProgressBar
- Reset : Reset the macro
- Quit : Quit the macro, bye
- Help : Display the wiki page in the FreeCAD browser

## Script

The icon for you toolBar ![](/src/assets/images/Macro_Compound_Plus.png) copy in same directory to the macro

[How to Customize Toolbars](/Customize_Toolbars "Customize Toolbars"), [How to install macros](/How_to_install_macros "How to install macros")

The script to github [Macro_Compound_Plus.FCMacro](https://gist.github.com/mario52a/7be361a8c489deec918f664fdcfc4394)

## Links

My macros to [Github](https://gist.github.com/mario52a)

## Version

- 11/11/2024 ver 00.05  : return to **PySide** and replace **WebGui** by **webbrowser**
- 15/08/2020 ver 00.04  : adding section "Force the forme" if not detected, create Line, Arc and Circle on forced
- 14/05/2020 ver 00.03 : upgrade pySide2 and Qt5 layout and (matPlotLib Font) and convert Circle, Arc, Ellipse, BezierCurve
- 24/01/2018 ver 00.02 : sup "import PyQt4"
- 21/11/2016 ver 00.01 :

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Compound_Plus/en&oldid=1505493>"
