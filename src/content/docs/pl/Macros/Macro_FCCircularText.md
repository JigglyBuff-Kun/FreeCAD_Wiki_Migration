---
title: Makrodefinicja FCCircularText
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro FCCircularText                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| This macro makes use of the [Draft ShapeString](/Draft_ShapeString "Draft ShapeString") tool to create a text line placed in different circular orientations, including circumferential and helical (in the fashion of a Trajan Column). It can also be used to create a clock face with Arabic numerals _1, 2, 3,_ etc., or Roman numerals _I, II, III,_ etc. Macro version: 0.22e Last modified: 2024/07/11 FreeCAD version: 0.19 and more Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/c/c1/FCCircularTextButtom.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/c/c1/FCCircularTextButtom.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                                                                                            |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.22e                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2024/07/11                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.19 and more                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Opis

Makro to wykorzystuje narzędzie ![](/images/Draft_ShapeString.svg) [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl") środowiska Rysunek Roboczy do tworzenia linii tekstu umieszczonej w różnych orientacjach kołowych, w tym obwodowo i spiralnie na podobieństwo [Kolumny Trajana](http://en.wikipedia.org/wiki/Trajan%27s_Column). Można go również użyć do stworzenia tarczy zegara z cyframi arabskimi _1, 2, 3_ itd. lub rzymskimi _I, II, III_ itd. To ostatnie zastosowanie zostało zainspirowane przez wątek na forum [Macro to Create Clock Face](http://forum.freecadweb.org/viewtopic.php?f=22&t=5013&hilit=Clock) autorstwa członka społeczności FC, cblt2l.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/a25e802498bae6959335/raw/b80bc84eb1f39084a20564cf02c48764906fd6b8/Macro_FCCircularText.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/a25e802498bae6959335/raw/b80bc84eb1f39084a20564cf02c48764906fd6b8/Macro_FCCircularText.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/a25e802498bae6959335/raw/b80bc84eb1f39084a20564cf02c48764906fd6b8/Macro_FCCircularText.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/a25e802498bae6959335/raw/b80bc84eb1f39084a20564cf02c48764906fd6b8/Macro_FCCircularText.FCMacro>">raw code</a>

: ![360 degree orientation](/images/FCCircularText_01.png)

Example of the macro displaying text in a 360 degree orientation

## Użycie

Launch the macro folder **FcString** for created characters and a file **FcClock** for created clocks.

All the characters are and remain independent. When creating extrusions nothing is deleted. If Compound is created with Run Comp it is copied out of the folder.

The options are shaded by default and are active in all functions if they are checked ![](/images/CheckBoxTrue.svg) :

- ![](/images/CheckBoxFalse.svg) Extrude Char.
- ![](/images/CheckBoxFalse.svg) Placement.
- ![](/images/CheckBoxFalse.svg) SP. inclination.

Except for one Clock Service Placement box **Z** is activated and moves the text in the direction **Z** to place the text on the support surface.

## Uwagi

- This macro will gray-out (deactivate) options that are not relevant for a selected function.

## Interfejs

Przegląd

![GUI](/images/FCCircularText_06.png)

### First section

![](/images/FCCircularText_07.png)

- TextEdit window that lets you copy the text to display (click on the Reset allows to know the number of the input string that is displayed in the window title)
- The Reverse button reverses the text
- ![](/images/CheckBoxFalse.svg) Word checked, this option consider the text as word, the text is cut on space and write the text word by word (instead character by character in normal use)
- The Help button displays the wiki page in the FreeCAD browser
- LineEdit: display the path and name of file font
- Other button for search the font in other directory in case all directory is not discovery automatically
- ComboView to choose the font
- Origin return to origin system font path ex: "C:/Windows/Fonts/"
  - Default ARIAL.TTF

#### Dostępne opcje

After the first use, you must modify the following parameters:

**User parameter:BaseApp/Preferences/Macros/FCMmacros/FCCircularText**

**switchModeTextList**

- 0 = normal text mode (and black) cuts the switchFontComBox
- 1 = allows switchFontComBox 1

**switchFontComBox**

- 0 = (and switchModeTextList= 1) text mode (in color) in ComboBox list, faster
- 1 = (and switchModeTextList= 1) fontFamily slower but more beautiful ComboBoxst!

**setSystemFonts**

- 0 = matplotlib.font_manager.findSystemFonts("C:/", "ttf")
- do all the fonts (in all folders and sub-folders of the DD) time !!
- 1 = fontman.findSystemFonts(self.pathFont)
- do all the fonts in the directory (and in all the sub-folders)

**seTtextAlignement**

- 0 = AlignLeft (default)
- 1 = AlignCenter
- 2 = AlignRight

setFontByDefault

- Font by Default

**switchResetFALSE**

- 0 = reset (default)
- 1 = no reset (not recommended) some switches can remain open or close unexpectedly!

**Przykład**

![](/images/FCCirculatText_Config_0000A0.png)

1. switchModeTextList= `false`
2. switchFontComBox = `false`
3. setSystemFonts = `false`
4. seTtextAlignement = 0

![](/images/FCCirculatText_Config_1000A0.png)

1. switchModeTextList= `true`
2. switchFontComBox = `false`
3. setSystemFonts = `false`
4. seTtextAlignement = 0

![](/images/FCCirculatText_Config_1001A0.png)

1. switchModeTextList= `true`
2. switchFontComBox = `false`
3. setSystemFonts = `false`
4. seTtextAlignement = 1 _(0=Left, 1=Centered, 2=Right)_

![](/images/FCCirculatText_Config_1101A0.png)

1. switchModeTextList= `true`
2. switchFontComBox = `true`
3. setSystemFonts = `false`
4. seTtextAlignement = 1

### Second Section

Configuring characters in FCCircularText

![](/images/FCCircularText_08.png)

#### First zone

Your choice:

![](/images/FCCircularText_09.png)

- ![Outdoor](/images/FCCircularText_20.png)

  **Outdoor**

- ![Indoor](/images/FCCircularText_21.png)

  **Indoor**

- ![Helix](/images/FCCircularText_22.png)

  **Helix**

- ![Clock](/images/FCCircularText_23.png)

  **Clock**
  ![](/images/FCCircularText_24.png)

- Mode Stand or Mode Flat : The text will be placed standing or flat (same as clock) options **Outdoor** and **Indoor** are reversed.

- ![Mode Stand Outdoor The text will be written up.](/images/FCCircularText_01.png)

  **Mode Stand** **Outdoor** The text will be written up.

- ![Mode Flat Outdoor The text will be placed flat.](/images/FCCircularText_40.png)

  **Mode Flat** **Outdoor** The text will be placed flat.

- ![Mode Flat Indoor The text will be placed flat.](/images/FCCircularText_39.png)

  **Mode Flat** **Indoor** The text will be placed flat.

- [![Mode Stand Indoor The text will stand registered (same as clock).](/images/FCCircularText_03.png)](/File:FCCircularText_03.png  "Mode Stand Indoor The text will stand registered (same as clock).")

  **Mode Stand** **Indoor** The text will stand registered (same as clock).

#### Second area

This section allows you to configure the overall behavior of characters in all the choices available but with some variation.
If the command is not used in the option chosen, it will be grayed out.

![](/images/FCCircularText_10.png)

- 10.0 mm ![](/images/SpinBox.svg) **Radius of circle** : Radius of the circle. (Default 10)
- 2.0 mm ![](/images/SpinBox.svg) **Size character** : Character height. (Default 2)
- 0 deg ![](/images/SpinBox.svg) **Begin angle** : Starting angle of the first character in the circle. (Default 0 °)
- 360 deg ![](/images/SpinBox.svg) **End angle** : Angle end of the last character of the text. (Default 360)
- 10.0 deg ![](/images/SpinBox.svg) **Correction angle** : Character correction angle to make it tangent to the circle. (Default 10 °)
- 0.15 mm ![](/images/SpinBox.svg) **Correction radius** : Fixed the radius of the circle characters (optional). (Default 0.15)
- ![](/images/CheckBoxFalse.svg) **Extrude Char** : Checkbox extrusion characters. (Inactive Default)
- ![](/images/CheckBoxFalse.svg) **Placement** : Text placement in the 3D view. (Inactive Default)
- ![](/images/CheckBoxFalse.svg) **Sp. inclination** : Inclination of characters in three axes X, Y and Z (example to cover such a cone). (Inactive Default)

##### Outdoor

Default mode. The text is written on the outside of the circumference of the circle.

- ![Outdoor](/images/FCCircularText_20.png)

  **Outdoor**

- ![](/images/FCCircularText_25.png)
- ![](/images/FCCircularText_30.png)

##### Indoor

The text is written on the inner side of the circumference of the circle

- ![Indoor](/images/FCCircularText_21.png)

  **Indoor**

- ![](/images/FCCircularText_03.png)
- ![](/images/FCCircularText_27.png)

##### Helix

The text is entered on the outer circumference of a helix.

- ![Helix](/images/FCCircularText_22.png)

  **Helix**

- ![](/images/FCCircularText_33.png)
- ![](/images/FCCircularText_34.png)

- The helix area is hidden by default. The window is visible if the radio button ![](/images/RadioButtonTrue.svg) Helix is checked

![](/images/FCCircularText_14.png)

- All characters configuration options are available.
- **Step of helix** which corresponds to the pitch of the helix turns and displays 2 (character height) by default.
- **Char. per turn** activates and displays 10 by default, which corresponds to 10 characters per helical turn.

![](/images/FCCircularText_15.png)

- If **Step of helix** (helix pitch) is zero, Spinboxes **Base Helix** and **End Helix** are activated.
- **Base Helix** provides the basis for starting the helix (even Placement Z). If _'Placement Z'_ is different from zero, the starting point is added to Z Placement
- **End Helix** End of the helix pitch of the helix will be calculated relative to the height and the number of characters per helical turn.

##### Clock

The figures are part of a circle with Arabic numerals or Romans.

- ![Clock](/images/FCCircularText_23.png)

  **Clock**

- ![Axial](/images/FCCircularText_35.png)

  **Axial**

- ![Redress](/images/FCCircularText_36.png)

  **Redress**

- By default, the section is hidden. The window is visible if the radio button ![](/images/RadioButtonTrue.svg) Clock is checked

![](/images/FCCircularText_16.png)

- When the selection is made, the following functions get dark and are usable:
  1. Begin angle.
  2. End angle.
  3. Correction angle.
  4. Correction radius.
  5. The buttom Mode Stand or Mode Flat.
- The area **Clock** is activated.

![](/images/FCCircularText_19.png)

- **Radius of support** : If a value is given, support will be created (default 0).
- If **Support number face** is different from zero a support is created. (If **Extrude support** = zero then a face is created).
  - 1 = A circle is created (circle appears).
  - 2 = A rectangle is created (length = (Radius of media \* 1.5) width = Radius of support) (Rectangle appears).
  - 3 = A triangle is created (circumscribed) (Triangle appears).
  - 4 = A square is created (Radius of support) (Square appears).
  - 5 = A polygon with the number of faces displayed (circumscribed) (Polygon appears).
- **Extrude support** is activated and an extrusion dimension can be given.

![](/images/FCCircularText_18.png)

![](/images/FCCircularText_38.png)

![](/images/FCCircularText_17.png)

![](/images/FCCircularText_37.png)

- If **Support number face** is equal to zero there is no support.
- Mode Roman : The writing will be in Roman figures **I II III IIII V VI VII VIII IX X XI XII**
- Axial  : The figures will be written axially.

### Path section

![](/images/FCCircularText_06_Path.png)

The title section change and display the length of the wire selected.

If you select one wire, arc, circle, line and edge the section Path is coloured in green and the unused command coloured in red

1. ![](/images/RadioButtonFalse.svg) Orthogonal the character is Orthogonal to the view
2. ![](/images/RadioButtonFalse.svg) Tangent the character is Tangent to point path on wire

3. ![](/images/RadioButtonFalse.svg) BB Base the point base of the character is to point path on the wire
4. ![](/images/RadioButtonFalse.svg) BB Center the bounBox center of the character is to point path on the wire
5. ![](/images/RadioButtonFalse.svg) BB Top the top boundBox of the character is to point path on the wire

the last Radio Button used is saved in the parameter of FreeCAD

### Command section

![](/images/FCCircularText_13.png)

- Exit  : Leaves the macro.
- Reset  : Reset all values and displays the number of characters displayed in the window.
- Run Comp : Launches the macro and creates a Compound object of all characters.
- Run  : Launches the macro

### Dostępne parametry

Certain parameter are available in the parameters of FreeCAD see: **Menu → Tools → Edit parameters...**

- User parameter: BaseApp/Preferences/Macros/FCMmacros/FCCircularText

- - `switchModeTextList` :
    - `false` normal text mode (and black) turns off switchFontComBox
    - `true` allow switchFontComBox 1 (default)
  - `switchFontComBox` :
    - `false` (and switchModeTextList = 1) text mode (in color) in Faster ComboBox list (default)
    - `true` (and switchModeTextList = 1) font Family in ComboBox list slower but more beautiful!
  - `setSystemFonts` :
    - `false` matplotlib.font_manager.findSystemFonts ("C: /", "ttf") do all fonts (in all folders and subfolders of the HD) time !!
    - `true` fontman.findSystemFonts (self.pathFont)  
      make all the fonts in the directory (and in all the subfolders) (default)
  - `seTtextAlignement` : 0 = AlignLeft (default) 1 = AlignCenter 2 = AlignRight
  - `setFontByDefault` : Font by Default (the last used)
  - `switchResetFALSE` : `false` reset (default), `true` no reset (not recommended) some switches can stay open or close unexpectedly!
  - `setPathOrthogonal` : `true` `false`
  - `setPathTangent` : `true` `false`
  - `setPositionBase` : `true` `false`
  - `setPositionCenter` : `true` `false`
  - `setPositionTop` : `true` `false`
  - `switchVersionSearch` : `true` `false`
  - `Version` : FCCircularText version

Launch the macro folder **FcString** for created characters and a file **FcClock** for created clocks.

## Skrypt

The button icon:

- in .PNG ![](/images/FCCircularTextButtom.png)

- in .SVG ![](/images/FCCircularTextButtom.svg)

(See [Customize_Toolbars](/Customize_Toolbars "Customize Toolbars") for more)

### Skrypt

**Macro_Circular_Text.FCMacro**

or download the script :

- on github [Macro_FCCircularText.FCMacro](https://gist.github.com/mario52a/a25e802498bae6959335)

- at the forum [Extrude from curved surface of cylinder](http://forum.freecadweb.org/viewtopic.php?f=3&t=7384&p=87642#p87642)

## Przykład

- [![Text beginning at 180 degrees (Begin angle) end at 360 degrees (End angle) external curve.](/images/FCCircularText_02.png)](/File:FCCircularText_02.png  "Text beginning at 180 degrees (Begin angle) end at 360 degrees (End angle) external curve.")

  Text beginning at 180 degrees (**Begin angle**) end at 360 degrees (**End angle**) external curve.

- ![Text set in an inner curve.](/images/FCCircularText_03.png)

  Text set in an inner curve.

- ![Text circular on internal and external curve.](/images/FCCircularText_04.png)

  Text circular on internal and external curve.

- ![Circular text on a flat onbjet.](/images/FCCircularText_05.png)

  Circular text on a flat onbjet.

- [![Configuration Superior.(click to elarge)](/images/FCCircularText_IndoorFlat_01.png)](/File:FCCircularText_IndoorFlat_01.png  "Configuration Superior.(click to elarge)")

  Configuration Superior.(click to elarge)

- [![Configuration Inferior.(click to elarge)](/images/FCCircularText_IndoorFlat_02.png)](/File:FCCircularText_IndoorFlat_02.png  "Configuration Inferior.(click to elarge)")

  Configuration Inferior.(click to elarge)

- ![External curve.](/images/FCCircularText_26.png)

  External curve.

- ![Internal curve.](/images/FCCircularText_28.png)

  Internal curve.

- ![Internal curve extrusion material designated and subtraction.](/images/FCCircularText_29.png)

  Internal curve extrusion material designated and subtraction.

- ![External curve.](/images/FCCircularText_31.png)

  External curve.

- ![Internal curve with subtraction.](/images/FCCircularText_32.png)

  Internal curve with subtraction.

- ![Extrusion on a cone with Sp. Inclination 45° axis Z.](/images/FCCircularText_41.png)

  Extrusion on a cone with **Sp. Inclination** 45° axis Z.

- ![Ring Internal curve with subtraction.](/images/FCCircularText_42.png)

  Ring Internal curve with subtraction.

- ![Pivot character 0°, 90°, ....](/images/FCCircularText_61.png)

  Pivot character 0°, 90°, ....

- ![Word The text is cutting on space character](/images/FCCircularText_Path_00_002_000.png)

  ![](/images/CheckBoxTrue.svg) Word The text is cutting on space character

## Example onto Ellipse

- ![Create your ellipse hers 100x50.](/images/FCCircularText_43.png)

  Create your ellipse hers 100x50.

- ![Exrtude it 50 mm.](/images/FCCircularText_44.png)

  Exrtude it 50 mm.

- [![Discretize the perimeter and create points with the macro Work Features. Tab Point > Point 2/3 > Points=Cut (Wire)](/images/FCCircularText_45.png)](/File:FCCircularText_45.png  "Discretize the perimeter and create points with the macro Work Features. Tab Point > Point 2/3 > Points=Cut (Wire)")

  Discretize the perimeter and create points with the macro [Work Features](/Macro_WorkFeatures "Macro WorkFeatures").  
  Tab Point > Point 2/3 > Points=Cut (Wire)

- [![Create the circle to 3 points with the macro Work Features. Tab Circle Circle=(3 Points)](/images/FCCircularText_46.png)](/File:FCCircularText_46.png  "Create the circle to 3 points with the macro Work Features. Tab Circle Circle=(3 Points)")

  Create the circle to 3 points with the macro [Work Features](/Macro_WorkFeatures "Macro WorkFeatures").  
  Tab Circle Circle=(3 Points)

- [![Create point center circle with the macro Work Features. Tab Point > Point 1/3 > Circle(s) center.](/images/FCCircularText_47.png)](/File:FCCircularText_47.png  "Create point center circle with the macro Work Features. Tab Point > Point 1/3 > Circle(s) center.")

  Create point center circle with the macro [Work Features](/Macro_WorkFeatures "Macro WorkFeatures").  
  Tab Point > Point 1/3 > Circle(s) center.

- ![Create the benchmark lines and configure FCCircularText.](/images/FCCircularText_48.png)

  Create the benchmark lines and configure FCCircularText.

- ![Create the text with Run Comp.](/images/FCCircularText_49.png)

  Create the text with Run Comp.

- ![Select Ellipse Extrude, Shape and press the Part Cut button.](/images/FCCircularText_50.png)

  Select Ellipse Extrude, Shape and press the ![](/images/Part_Cut.svg) **Part Cut** button.

- ![Delete the circle, points and lines.](/images/FCCircularText_51.png)

  Delete the circle, points and lines.

- ![Ellipses.](/images/FCCircularText_52.png)

  Ellipses.

Mode relief:

- ![Create an ellipse.](/images/FCCircularText_53.png)

  Create an ellipse. ![](/images/Draft_Ellipse.svg)

- ![Create a rectangle include all object.](/images/FCCircularText_54.png)

  Create a rectangle include all object. ![](/images/Draft_Rectangle.svg)

- ![Select the rectangle , the ellipse and make compound Activate the Part module, then Menu Part > Make compound.](/images/FCCircularText_55.png)

  Select the rectangle , the ellipse and make compound  
  Activate the Part module, then Menu Part > Make compound.

- ![Extrude the compound of Solid.](/images/FCCircularText_56.png)

  Extrude the compound of Solid.

- [![Select Shape (text) , the compound and Cut.](/images/FCCircularText_57.png)](/File:FCCircularText_57.png  "Select Shape (text) , the compound and Cut.")

  Select Shape (text) , the compound and Cut.

- ![The text is cut in the shape of the ellipse.](/images/FCCircularText_58.png)

  The text is cut in the shape of the ellipse.

- [![Select the Ellipse extruded , the Cut (text) and fuse.](/images/FCCircularText_59.png)](/File:FCCircularText_59.png  "Select the Ellipse extruded , the Cut (text) and fuse.")

  Select the Ellipse extruded , the Cut (text) and fuse.

## Example section path

- [![Text on BoundBox Base (normal)](/images/FCCircularText_Path_00_Orth_Base_000.png)](/File:FCCircularText_Path_00_Orth_Base_000.png  "Text on BoundBox Base (normal)")

  Text on BoundBox Base (normal)

- ![Text on BoundBox Center character](/images/FCCircularText_Path_00_Orth_Center_000.png)

  Text on BoundBox Center character

- ![Text on BoundBox Top character](/images/FCCircularText_Path_00_Orth_Top_000.png)

  Text on BoundBox Top character

- ![Text on selected line: 1: Orthogonal 2: Tangent](/images/FCCircularText_Path_00_001_000_000.png)

  Text on selected line:  
  1: Orthogonal  
  2: Tangent

- [![Exemple use (Curved text on a flat surface?)](/images/YamahaDrumBadge00.gif)](/File:YamahaDrumBadge00.gif  "Exemple use (Curved text on a flat surface?)")

  Exemple use ([Curved text on a flat surface?](https://forum.freecad.org/viewtopic.php?t=82577))

## Ograniczenia

_Note_ it is possible that an error may occur between versions. Please post the issue on the forum and wait for the updated fix or rollback to a previous version of the macro. Thank you)

It is possible that two characters may overlap. If this happens, here's a workaround is available using the [Rotate-To-Point Macro](https://www.freecadweb.org/wiki/Macro_Rotate_To_Point).

- ![Character overlap issue and the workaround](/images/FCCircularText_Correction.gif)

  Character overlap issue and the workaround

(not fully developed)

Planned:

Writing on a path circular text of position object selected.

## Change log

- ver 0.22e 2024/07/11 : delete **"ss.support = None"**

- ver 0.22d 2024/07/11 : delete **"import WebGui"** cause error in 0.22xxx FC and replaced by **"import webbrowser"**

- ver 0.22c 2023/11/17 : adding restore selection after delete the last object , by TheMarkster , thanks

see [Curved text on a flat surface?](https://forum.freecad.org/viewtopic.php?p=719353#p719353)

```
sel = Gui.Selection.getCompleteSelection()
#delete objects
#restore previous selection
Gui.Selection.clearSelection()
for s in sel:
    Gui.Selection.addSelection(s.Object,s.SubElementNames)

```

- ver 0.22b 2023/11/15 : upgrade correction **stylesheet** and **FreeCAD.activeDocument().recompute(None,True,True)**

- ver 0.22 2022/06/06 : adding QScrollArea cause : [Unable to run FCCircularText [Problem with screen size]](https://forum.freecadweb.org/viewtopic.php?f=3&t=69206)

- ver 0.21 2022/05/31 : adding button search other path fontmanuelly, and button return font origin of system

- ver 0.20 2021/04/05 : adding icone in macro, Tab for diminish the heigth of the macro, remove all dimensions of widgets now fully compatible with the stylesheet, revisite the search version for compatibility and other little change.

- ver 1.19 2021/03/15 : adding button Delette the last object created and the code `FreeCAD.ActiveDocument.openTransaction("FCCTc")` for Undo/Redo system

- - Adding CheckBox ![](/images/CheckBoxFalse.svg) Reset for switched/activated (_requested by users_) the natural reset after all push button Runand Run comp. This use checkBox is not advised, is you constade one malfunction pusch the Reset button or quit FCCircularText and restart.

- ver 0.18 2021/01/19 : correction bug see [FCCircularText Macro issues](https://forum.freecadweb.org/viewtopic.php?f=22&t=54524&p=468687#p468687)

- ver 0.17b 2020/09/28 : correction little bug (pl instead plm in path section) and arrange the window (dimension) Clock, Helix, Path

- ver 0.17 2020/09/26 : adding create circular text on wire (curve, arc, spline, line ...) selected, mode word

ver 16d 2020/09/15 : see the [MasterCATZ commented Sep 14, 2020 message](https://gist.github.com/mario52a/a25e802498bae6959335)

delette the FC 0.18 test section:

```
#### Test FreeCAD.Version simple ############################################################################################################
if int(FreeCAD.Version()[1]) < 18:      # Version de FreeCAD
    FreeCAD.Console.PrintMessage("This version " + __Title__ + " rmu  work with the FreeCAD 0.18 or higher." + "\n\n")
    FreeCAD.Console.PrintMessage("For the precedent version see the page " + "\n\n")
    FreeCAD.Console.PrintMessage("https://gist.githubusercontent.com/mario52a/a25e802498bae6959335/raw/db47f78f2b20a35137ac213b8d1a62d30f525dcb/Macro_FCCircularText.FCMacro" + "\n\n")
#### Test FreeCAD.Version simple ############################################################################################################

```

- ver 0.16c 2020/07/24 : modify text proposed by Kunda1 [Please review FCVerticalText Macro](https://forum.freecadweb.org/viewtopic.php?f=22&t=48902#p418776)

- ver 0.16b 2020/07/24 : correct **\_\_title\_\_** to **\_\_Title\_\_** in 0.18 FC test (see [Please review FCVerticalText Macro](https://forum.freecadweb.org/viewtopic.php?f=22&t=48902))

- ver 0.16 2020/06/07 : little bug in Linux with the path, impost **PolicePath = "/usr/share/fonts/"** (stay on path /xx/xx/xx/xx/xx/xx/ on entry)

- ver 0.15 2020/06/01 : For PySide2 Qt5 adding matplotlib fonts in comboView, config on parameter

- ver 0.14-4 2020/04/25 : corrected for "**DisplayMode = u"Flat Lines**" :

- ver 0.14-3 2020/04/25 : adapted for :

```
OS: Windows 10 (10.0)
Word size of OS: 64-bit
Word size of FreeCAD: 64-bit
Version: 0.19.20655 (Git)
Build type: Release
Branch: master
Hash: e8e67e8c5ebbc9f9ed9ea67aba5b891969595ece
Python version: 3.6.8
Qt version: 5.12.1
Coin version: 4.0.0a
OCC version: 7.3.0

```

- ver 0.14-2 2019/07/22 replace chr(176) (give error <FC 0.18) and replace with the wmayer code, see [Fehler in Version 0.19 pre ??](https://forum.freecadweb.org/viewtopic.php?f=13&t=36380&p=308476#p308357)

```
       carDegrees = b' \xc2\xb0'.decode("utf-8")    #thanks wmayer	https://forum.freecadweb.org/viewtopic.php?f=13&t=36380&p=308476#p308357
       self.DS_InclinaisonX.setSuffix(carDegrees)
       self.DS_InclinaisonY.setSuffix(carDegrees)
       self.DS_InclinaisonZ.setSuffix(carDegrees)

```

- ver 0.14-1 2019/06/11 replace "°" to chr(176)

- ver 0.14 2019/04/27 compatible for Python 3.6.6 and Qt 5.6.2 (cause: unicode() )

```
latest testing:

#OS: Windows 10
#Word size of OS: 64-bit
#Word size of FreeCAD: 64-bit
#Version: 0.19.16523 (Git)
#Build type: Release
#Branch: master
#Hash: 9b3ec233c8b21e0df66fada487cd10f471d60cac
#Python version: 3.6.6
#Qt version: 5.6.2
#Coin version: 4.0.0a
#OCC version: 7.3.0

```

- ver 0.13 30/01/2018 add feature Pivot for rotate the character on himself

- ver 0.13 09/08/2016 replace the button "New font" to "fontComboBox" cause , with Windows 10 the window Font stay empty the files are hidden

- ver 0.12 03/07/2016 optimize the code for accept the decimal number in determination angle

replace the line

```
for angleTr in range(debut,rotation,((rotation-debut)/nombre)):

```

to

```
for angleTrFloat in range((debut*10000),(rotation*10000),int((round(((float(rotation)-float(debut))/float(nombre)),4)*10000)) ):    # pour 4 decimales
                angleTr = (float(angleTrFloat)/10000)

```

- ver 0.10 17/05/2015 adding lines 1365, 1366 only created more clock face ?? ()

```
supp.MakeFace = True
            App.activeDocument().recompute()

```

- ver 0.9 11/05/2015 thank you NormandC for testing

replace

```
self.DS_InclinaisonX.setSuffix(" X°")
        self.DS_InclinaisonY.setSuffix(" Y°")
        self.DS_InclinaisonZ.setSuffix(" Z°")

```

to

```
self.DS_InclinaisonX.setSuffix(unicode(" X°"))
        self.DS_InclinaisonY.setSuffix(unicode(" Y°"))
        self.DS_InclinaisonZ.setSuffix(unicode(" Z°"))

```

- ver 0.8 10/05/2015 replace "**String=texte[ii2]**" to "**String=unicode(texte[ii2])**" line 1290. cause "**TypeError: Property 'FontFile': type must be str or unicode, not QString**"

```
# ver 0.8 10/05/2015 /_ # testing with OS :
##################################################################################################
# OS: Ubuntu 14.04.1 LTS                          # OS: Ubuntu 14.04.2 LTS
# Platform: 32-bit                                # Word size of OS: 32-bit
# Version: 0.14.2935 (Git)                        # Word size of FreeCAD: 32-bit
# Branch: master                                  # Version: 0.16.4928 (Git)
# Hash: eab159b6ee675012bf79de838c206a311e911d85  # Branch: master
# Python version: 2.7.6                           # Hash: d8f63bcfd10301f3d1e141cced4370f0782238d0
# Qt version: 4.8.6                               # Python version: 2.7.6
# Coin version: 4.0.0a                            # Qt version: 4.8.6
# SoQt version: 1.6.0a                            # Coin version: 4.0.0a
# OCC version: 6.7.0                              # OCC version: 6.8.0.oce-0.17
##################################################################################################
# OS: Windows Vista                               # OS: Windows Vista
# Word size of OS: 32-bit                         # Word size of OS: 32-bit
# Word size of FreeCAD: 32-bit                    # Word size of FreeCAD: 32-bit
# Version: 0.15.4527 (Git)                        # Version: 0.15.4671 (Git)
# Branch: master                                  # Branch: releases/FreeCAD-0-15
# Hash: 0da2e4c45a9a259c26abd54c2a35393e1c15696f  # Hash: 244b3aef360841646cbfe80a1b225c8b39c8380c
# Python version: 2.7.8                           # Python version: 2.7.8
# Qt version: 4.8.6                               # Qt version: 4.8.6
# Coin version: 4.0.0a                            # Coin version: 4.0.0a
# OCC version: 6.7.1                              # OCC version: 6.8.0.oce-0.17
##################################################################################################

```

- ver 0.7 02/02/2015 suppression 2 str **App.Console.PrintMessage(str(PolicePath)+"\n")** to **App.Console.PrintMessage((PolicePath)+"\n")** that caused an error with the characters above 128 in the police path.
- ver 0.6 23/11/2014 corrected "texte = unicode(self.textEdit.toPlainText())" now accept "'éèà@..."
- ver 0.5 19/11/2014 Gui
- ver 0.4 10/10/2014 add variable "rotation" in the loop (**for i in range(0,rotation,(rotation/nombre)): # 360 a parametrer**)
- ver 0.4 27/08/2014 correction error of de radius (exterieur=0, debout=1)
- ver 0.3 26/08/2014 add creation text of flat curve
- ver 0.2 26/08/2014 add creation text of internal curve
- ver 0.1

(2537)

### Odnośniki internetowe

To comment on the [Extrude from curved surface of cylinder](http://forum.freecadweb.org/viewtopic.php?f=3&t=7384)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCCircularText/pl&oldid=1451278>"
