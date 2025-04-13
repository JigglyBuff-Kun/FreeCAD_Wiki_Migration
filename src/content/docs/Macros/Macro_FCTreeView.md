---
title: FCTreeView
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro FCTreeView                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| New version GUI modifyed for the HD dpi (QGridLayout) run only FC version 0.18 and more (PySide2 Qt5) Macro for list all objects in the project in one list without hierarchy, options sort by name, label, visibility, group, by length option search by name, label .... without case sensitive or with case sensitive and select all objects displayed in the macro window. [Macro FCTreeView Icon package](https://forum.freecadweb.org/download/file.php?id=70498) unzip the .zip file and copy the icon in your macro directory. For the precedent version see [Macro_FCTreeView.FCMacro](https://gist.githubusercontent.com/mario52a/67517ef758ff20005d0a6adcfd8c9190/raw/0a92d7f591a0a179f84b2fc417046723b4d7b0e6/Macro_FCTreeView.FCMacro) and install it manually. Macro version: 00.09 Last modified: 2020-09-24 FreeCAD version: 0.18 and below Download: [ToolBar Icon](https://wiki.freecad.org/images/6/64/Macro_FCTreeView.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://wiki.freecad.org/images/6/64/Macro_FCTreeView.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 00.09                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2020-09-24                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.18 and below                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Description

Macro for list all objects in the project in one list without hierarchy, options sort by name, label, visibility, group, by length option search by name, label .... without case sensitive or with case sensitive and select all objects displayed in the macro window.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/67517ef758ff20005d0a6adcfd8c9190/raw/59bc2028978c82744c83c6b138ab3ef30e0bf6f3/Macro_FCTreeView.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/67517ef758ff20005d0a6adcfd8c9190/raw/59bc2028978c82744c83c6b138ab3ef30e0bf6f3/Macro_FCTreeView.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/67517ef758ff20005d0a6adcfd8c9190/raw/59bc2028978c82744c83c6b138ab3ef30e0bf6f3/Macro_FCTreeView.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/67517ef758ff20005d0a6adcfd8c9190/raw/59bc2028978c82744c83c6b138ab3ef30e0bf6f3/Macro_FCTreeView.FCMacro>">raw code</a>

## Usage

![Macro FCTreeView](/src/assets/images/FCTreeView.gif)

### Section **Window**

The title display the option, number and type object(s) displayed

- **O** = Objects
- **N** = Name
- **L** = Label
- **T** = Total
- **G** = Group
- **S** = Single
- **V** = Visible
- **H** = Hidden

If one object are selected : the Placement Base, Rotation and Center of mass is displayed (if available !)

![Icon used for the Name of object](/src/assets/images/Macro_FCTreeView_00.png) Icon used for the Name of object (the scrollbar is colored blue)

![Icon used for the Label of object](/src/assets/images/Macro_FCTreeView_05.png) Icon used for the Label of object (the scrollbar is colored blue clear)

[![Icon used for visualise if the object is status Visible (mouse click for Hidden)](/src/assets/images/Macro_FCTreeView_01.png)](/File:Macro_FCTreeView_01.png "Icon used for visualise if the object is status Visible (mouse click for Hidden)") Icon used for visualise if the object is status Visible (mouse click for Hidden) (the scrollbar is colored green)

[![Icon used for visualise if the object is status Hidden (mouse click for Visible)](/src/assets/images/Macro_FCTreeView_02.png)](/File:Macro_FCTreeView_02.png "Icon used for visualise if the object is status Hidden (mouse click for Visible)") Icon used for visualise if the object is status Hidden (mouse click for Visible) (the scrollbar is colored red)

[![Icon used for the Name contains objects (or folder Group)](/src/assets/images/Macro_FCTreeView_17.png)](/File:Macro_FCTreeView_17.png "Icon used for the Name contains objects (or folder Group)") Icon used for the Name contains objects (or folder Group)

![Icon used for inform the object in a group the number objects is displayed in top group](/src/assets/images/Macro_FCTreeView_03.png) Icon used for inform the object in a group the number objects is displayed in top group (the scrollbar is colored red clear)

[![Icon used for displayed the single object (not group)](/src/assets/images/Macro_FCTreeView_04.png)](/File:Macro_FCTreeView_04.png "Icon used for displayed the single object (not group)") Icon used for displayed the single object (not group)

### Section **Sort by :**

![](/src/assets/images/Macro_FCTreeView_10.png) Name Icon used for flip/flop normal/reverse the data listing sort by Name

![](/src/assets/images/Macro_FCTreeView_11.png) Label Icon used for flip/flop normal/reverse the data listing sort by Label

![](/src/assets/images/Macro_FCTreeView_12.png) Visible Icon used for flip/flop normal/reverse the data listing sort by Visibile/Hidden

![](/src/assets/images/Macro_FCTreeView_13.png) Group Icon used for flip/flop normal/reverse the data listing sort by Group/Single object

![](/src/assets/images/Macro_FCTreeView_19.png) Length If this check Box is checked the sort is created by length with the button clicked (Name, Label ...)

### Section **Global**

![](/src/assets/images/Macro_FCTreeView_21.png) Split flip/flop Split the Name list

![](/src/assets/images/Macro_FCTreeView_22.png) Split flip/flop Split the Name and Label list

![](/src/assets/images/Macro_FCTreeView_14.png) Expend flip/flop the data listing Fold/Expend

![](/src/assets/images/Macro_FCTreeView_15.png) Expend flip/flop the data listing Expend/Fold

![](/src/assets/images/Macro_FCTreeView_06.png) Visibility flip/flop normal/Visibility

![](/src/assets/images/Macro_FCTreeView_07.png) Group flip/flop normal/Group

![](/src/assets/images/Macro_FCTreeView_16.png) Reload reload the data in the project

![](/src/assets/images/Macro_FCTreeView_18.png) Original return in original organisation after operation visibility/Hidden

![](/src/assets/images/Macro_FCTreeView_01.png) All Visible visualise if the object is status Visible

![](/src/assets/images/Macro_FCTreeView_02.png) All Hidden visualise if the object is status Hidden

### Section **Search**

![](/src/assets/images/Macro_FCTreeView_20.png) Clear Clear the search line edit

#### The radioButton options **Search**:

- **("NLwc")** : Search by Name and Label **W**ithout respecting the sensitive **C**ase

- **("Nsc")** : Search by Name and respecting the **S**ensitive **C**ase

- **("Lwc")** : Search by Label **W**ithout respecting the sensitive **C**ase

- **("NLsc")** : Search by Name and Label and respecting the **S**ensitive **C**ase

- **("NLwsc")** : Search by Name and Label in Word and respecting the **S**ensitive **C**ase (same panel selection of FreeCAD)

- **(Nu)**  : Search by numeric value (radius, length, angle .....) see version section

![](/src/assets/images/Macro_FCTreeView_23.png) Select flip/flop for Selected all object(s) displayed in the window

![](/src/assets/images/Macro_FCTreeView_24.png) Unselected flip/flop Unselected all object(s)

![](/src/assets/images/Macro_FCTreeView_25.png) S Sheet access in Spreadsheet options

### The SpreadSheet options:

![Macro FCTreeView](/src/assets/images/TreeView_SpeadSheet.gif)

![](/src/assets/images/Macro_FCTreeView_001.png)

![](/src/assets/images/Macro_FCTreeView_002.png)

- CheckBox options for select the data to save in spreadsheet

![](/src/assets/images/Macro_FCTreeView_28.png) Select : Select all checkBox option to save

![](/src/assets/images/Macro_FCTreeView_29.png) Select : unSelect all checkBox option to save

![](/src/assets/images/Macro_FCTreeView_003.png)

- **Value** : alone the value is saved in the cell
  - Ex : 10.00 ![](/src/assets/images/Macro_FCTreeView_30.png)
- **Val Gr** : the value and the unit are saved in unique cell
  - Ex : 10.00 mm ![](/src/assets/images/Macro_FCTreeView_31.png)
- **Val Gr Ph** : the value, the unit and the physic data is saved in unique cell
  - Ex : 10.00 mm Length ![](/src/assets/images/Macro_FCTreeView_32.png)
- **Split** : if the Split checkBox is checked, the data is cut saved in separate cell
  - Ex : 10.00 | mm | length ![](/src/assets/images/Macro_FCTreeView_33.png)

![](/src/assets/images/Macro_FCTreeView_004.png)

- Combobox **mm** : select the unit length desired. The value is convert in the selected unit. The units length available are:
  - km, hm, dam, m, dm, cm, **mm**, um, nm, pm, fm, in, lk, ft, yd, rd, ch, fur, mi, lea, nmi
- Combobox **gram** : select the unit weight desired. The value is convert in the selected unit. The units weight available are:
  - t, q, kg, hg, dag, **g**, dg, cg, mg, µg, ng, pg, fg, gr, dr, oz, oz t, lb, t lb, st, qtr, cwt, tonneau fr, ct
- Spinbox **Densite** : give the density by dm3 of the material used (Default : 1.0000)
- Spinbox **Round** : give the round value desired (Default : 3)

![](/src/assets/images/Macro_FCTreeView_005.png)

- Combobox **Name spreadSheet** : List the spreadsheet in the document
- Line edit **Name spreadSheet** : Display the actual spreadsheet or give the name for the new spreadsheet

![](/src/assets/images/Macro_FCTreeView_006.png)

![](/src/assets/images/Macro_FCTreeView_28.png) Select select all checkbox options

![](/src/assets/images/Macro_FCTreeView_29.png) Unselect unselected all checkbox options

![](/src/assets/images/Macro_FCTreeView_27.png) Save save the data in Spreadsheet displayed. if no spreadsheet is active the spreadsheet named **FCSpreadSheet** is created

![](/src/assets/images/Macro_FCTreeView_26.png) Quit quit the Spreadsheet options

### Icons

The icon must be copied into the same directory as the macro

[Macro_FCTreeView_Icon](https://forum.freecadweb.org/download/file.php?id=70498)

![Icon used for the Name of object](/src/assets/images/Macro_FCTreeView_00.png) [![Icon used for visualise if the object is status Visible (mouse click for Hidden)](/src/assets/images/Macro_FCTreeView_01.png)](/File:Macro_FCTreeView_01.png "Icon used for visualise if the object is status Visible (mouse click for Hidden)")
[![Icon used for visualise if the object is status Hidden (mouse click for Visible)](/src/assets/images/Macro_FCTreeView_02.png)](/File:Macro_FCTreeView_02.png "Icon used for visualise if the object is status Hidden (mouse click for Visible)")
![Icon used for inform the object in a group the number objects is displayed in top group](/src/assets/images/Macro_FCTreeView_03.png)
[![Icon used for displayed the single object (not group)](/src/assets/images/Macro_FCTreeView_04.png)](/File:Macro_FCTreeView_04.png "Icon used for displayed the single object (not group)")
![Icon used for the Label of object](/src/assets/images/Macro_FCTreeView_05.png)
![Icon used for flip/flop normal/Visibility](/src/assets/images/Macro_FCTreeView_06.png)
![Icon used for flip/flop normal/Group](/src/assets/images/Macro_FCTreeView_07.png)
[![Icon used for Reverse the data listing (momentarily not used)](/src/assets/images/Macro_FCTreeView_08.png)](/File:Macro_FCTreeView_08.png "Icon used for Reverse the data listing (momentarily not used)")
[![Icon used for quit Macro FCTreeView (momentarily not used)](/src/assets/images/Macro_FCTreeView_09.png)](/File:Macro_FCTreeView_09.png "Icon used for quit Macro FCTreeView (momentarily not used)")
![Icon used for flip/flop normal/reverse the data listing sort by Name](/src/assets/images/Macro_FCTreeView_10.png)
![Icon used for flip/flop normal/reverse the data listing sort by Label](/src/assets/images/Macro_FCTreeView_11.png)
![Icon used for flip/flop normal/reverse the data listing sort by Visibility/Hidden](/src/assets/images/Macro_FCTreeView_12.png)
![Icon used for flip/flop normal/reverse the data listing sort by Grout/Single object](/src/assets/images/Macro_FCTreeView_13.png)
![Icon used for flip/flop the data listing Fold/Expend](/src/assets/images/Macro_FCTreeView_14.png)
![Icon used for flip/flop the data listing Expend/Fold](/src/assets/images/Macro_FCTreeView_15.png)
![Icon used for reload the data in the project](/src/assets/images/Macro_FCTreeView_16.png)
[![Icon used for the Name contains objects (or folder Group)](/src/assets/images/Macro_FCTreeView_17.png)](/File:Macro_FCTreeView_17.png "Icon used for the Name contains objects (or folder Group)")
![Icon used for return in original organisation after operation visibility/Hidden](/src/assets/images/Macro_FCTreeView_18.png)
[![If this check Box is checked the sort is created by length with the button clicked (Name, Label ...)](/src/assets/images/Macro_FCTreeView_19.png)](/File:Macro_FCTreeView_19.png "If this check Box is checked the sort is created by length with the button clicked (Name, Label ...)")
![Icon used for Clear the search line edit](/src/assets/images/Macro_FCTreeView_20.png)
![Icon used for flip/flop Split the Name list](/src/assets/images/Macro_FCTreeView_21.png)
![Icon used for flip/flop Split the Name and Label list](/src/assets/images/Macro_FCTreeView_22.png)
[![Icon used for Selected all object(s) displayed in the window](/src/assets/images/Macro_FCTreeView_23.png)](/File:Macro_FCTreeView_23.png "Icon used for Selected all object(s) displayed in the window")
[![Icon used for Unselected all object(s)](/src/assets/images/Macro_FCTreeView_24.png)](/File:Macro_FCTreeView_24.png "Icon used for Unselected all object(s)")
![Icon used for access in Spreadsheet options](/src/assets/images/Macro_FCTreeView_25.png)
![Icon used for quit the Spreadsheet options](/src/assets/images/Macro_FCTreeView_26.png)
![Icon used for save the data in Spreadsheet](/src/assets/images/Macro_FCTreeView_27.png)
![Icon used for select all checkbox options](/src/assets/images/Macro_FCTreeView_28.png)
![Icon used for unselected all checkbox options](/src/assets/images/Macro_FCTreeView_29.png)
![Icon used for save the value data in Spreadsheet](/src/assets/images/Macro_FCTreeView_30.png)
![Icon used for save the value and Unit data in Spreadsheet](/src/assets/images/Macro_FCTreeView_31.png)
![Icon used for save the value, Unit and type data in Spreadsheet](/src/assets/images/Macro_FCTreeView_32.png)
![Icon used for split the value, Unit and type in cell separate in Spreadsheet](/src/assets/images/Macro_FCTreeView_33.png)

## Script

For prevent many instance the clic on ToolBar button are effect flip/flop (hide/visible)

The macro is located in right dock for change it modify the value line number 133 **testing = 0** (or change it with the mouse as a widget normal)

The toolbar icon ![Macro FCTreeView](/src/assets/images/Macro_FCTreeView.png)

**Macro_FCTreeView.FCMacro**

[![](/src/assets/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mario52a/67517ef758ff20005d0a6adcfd8c9190)

[Macro_FCTreeView.FCMacro](https://gist.github.com/mario52a/67517ef758ff20005d0a6adcfd8c9190)

## To do

Docked the macro

## Version

ver 00.09 (2020-09-24) : correct the "**freeze**" macro after call the **assembly4 workbench** i try activate "**Class SelObserver**" and it work ???

```
class SelObserver:
    def addSelection(self, document, object, element, position):  # Selection
        global sourisPass
        global listeSorted
        global ui

        None

```

ver 00.08 (2020-02-25) : upgrade with Layout

ver 00.07 (06/05/2018) : modify procedure for search the last cell used

ver 00.06 (13/12/2017) : correct little bug line del line num 1881 "del listeSortedBis[doublon][4:] # supprime le fond inutile" thanks renatorivo

ver 00.05 (27/11/2017) : add creation spreadsheet and many option for him

ver 00.04 (29-09-2017) : add search by numeric value (length, radius....)

values researched :

```
global impost                 ; impost = ["Angle","Angle0","Angle1","Angle2","Angle3","ChamferSize","Circumradius","Columns","Degree",
                                          "FilletRadius","FirstAngle","Growth","Height","LastAngle","Length","Length2","MajorRadius",
                                          "MinorRadius","Pitch","Polygon","Radius","Radius1","Radius2","Radius3","Rows","Size","Width",
                                          "X","X1","X2","Xmax","Xmin","X2max","X2min",
                                          "Y","Y1","Y2","Ymax","Ymin","Y2max","Y2min",
                                          "Z","Z1","Z2","Zmax","Zmin","Z2max","Z2min"]

```

ver 00.03 (23/09/2017) : add search by type object

ver 00.02 (11/09/2017) : modify for docked and prevent many instance the clic on button are effect flip/flop (macro hide/visible)

ver 00.01 (08/09/2017) :

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCTreeView/en&oldid=1345637>"
