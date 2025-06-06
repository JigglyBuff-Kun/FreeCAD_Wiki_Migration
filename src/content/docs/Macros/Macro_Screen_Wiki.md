---
title: Screen Wiki
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Screen Wiki                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Special macro for the Wiki user. This macro allows to save the 3D view in the desired format. The 3D view or the full 3D window of FreeCAD takes the desired dimensions. A rotation of the selected object or of the 3D view is possible to give a rotation angle the number of images is calculated automatically it is possible to give a departure angle and an arrival angle. You must use another Gimp example program to assemble the images and create the animated file. Macro version: 00.06c Last modified: 2024/10/10 FreeCAD version: 0.19 and more Download: [ToolBar Icon](https://wiki.freecad.org/images/f/f5/Macro_Screen_Wiki.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://wiki.freecad.org/images/f/f5/Macro_Screen_Wiki.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 00.06c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2024/10/10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.19 and more                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Macro Copy3DViewToClipboard](/Macro_Copy3DViewToClipboard "Macro Copy3DViewToClipboard"), [Macro Snip](/Macro_Snip "Macro Snip")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Description

This macro allows the user save the [3D view](/3D_view "3D view") in a desired format. The 3D view or the full 3D window of FreeCAD takes the desired dimensions. A rotation of the selected object or of the 3D view is possible to give a rotation angle the number of images is calculated automatically it is possible to give a departure angle and an arrival angle. You must use another Gimp example program to assemble the images and create the animated file.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/61571ce0bd41af0471995df7c3ea855f/raw/14deef95d2276c1095ea7eefb75dc5b5e4be4e04/Macro_Screen_Wiki.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/61571ce0bd41af0471995df7c3ea855f/raw/14deef95d2276c1095ea7eefb75dc5b5e4be4e04/Macro_Screen_Wiki.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/61571ce0bd41af0471995df7c3ea855f/raw/14deef95d2276c1095ea7eefb75dc5b5e4be4e04/Macro_Screen_Wiki.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/61571ce0bd41af0471995df7c3ea855f/raw/14deef95d2276c1095ea7eefb75dc5b5e4be4e04/Macro_Screen_Wiki.FCMacro>">raw code</a>

![](/images/Macro_Screen_Wiki_00.png)

Macro Screen Wiki Image and configuration window

![](/images/Macro_Screen_Wiki_01.png)

Macro Screen Wiki Rotation window

## Usage

### Image options

#### Definition

1. ![](/images/RadioButtonFalse.svg) 400x200
2. ![](/images/RadioButtonTrue.svg) 600x400 (Default)
3. ![](/images/RadioButtonFalse.svg) 1024x768
4. ![](/images/RadioButtonFalse.svg) 320x240 (QVGA)
5. ![](/images/RadioButtonFalse.svg) 320x480 (HVGA)
6. ![](/images/RadioButtonFalse.svg) 400x300
7. ![](/images/RadioButtonFalse.svg) 480x360
8. ![](/images/RadioButtonFalse.svg) 640x480 (VGA)
9. ![](/images/RadioButtonFalse.svg) 768x576 (PAL)
10. ![](/images/RadioButtonFalse.svg) 800x600 (SVGA)
11. ![](/images/RadioButtonFalse.svg) 960x720
12. ![](/images/RadioButtonFalse.svg) 1024x768 (XGA)

#### Format image

1. 600 px ![](/images/SpinBox.svg) Length (Default: 600 px)
2. 400 px ![](/images/SpinBox.svg) Height (Default: 400 px)

#### Window

1. ![](/images/RadioButtonFalse.svg) Window FC : The complete FreeCAD window
2. ![](/images/RadioButtonTrue.svg) Screen 3D : The 3D view of FreeCAD

#### BackGround Color

1. ![](/images/RadioButtonTrue.svg) Current (Default)
2. ![](/images/RadioButtonFalse.svg) Color
3. ![](/images/RadioButtonFalse.svg) Transparent
4. Restore

#### Command

1. Set Screen: Docked window
2. Tile Screen: Fly window
3. Save Image: Save the image, for ex: imageBox_000.png (the \_000 is incremented with each new image)
4. Follow: After saving the first image, press this button to save the next image with the same name. The images saved is incremented, for ex: imageBox_001.png, imageBox_002.png, imageBox_003.png, ![](/images/Macro_Screen_Wiki_ToolBar_04_4b.png) etc...
5. New Image: Save one new image without change the counter
6. Rotation: Access to the rotation menu (the title of the section "Image options" change to "Rotation options"
7. Quit: \_\_\_Screen_Wiki end\_\_\_\_\_\_\_\_\_\_
8. ToolBar: Reduce the image window in a toolBar, the Rotation option is not available in this mode
   1. ![](/images/Macro_Screen_Wiki_ToolBar_01.png)![](/images/Macro_Screen_Wiki_ToolBar_02.png)![](/images/Macro_Screen_Wiki_ToolBar_03.png)![](/images/Macro_Screen_Wiki_ToolBar_04.png)
   2. The button ![](/images/Macro_Screen_Wiki_ToolBar_04_6.png) Flip/Flop Y/N the mini toolBar ![](/images/Macro_Screen_Wiki_ToolBar_Mini.png)

### Rotation options

#### Rotation on

1. ![](/images/RadioButtonFalse.svg) 3D View: The complete view is rotated
2. ![](/images/RadioButtonTrue.svg) Object: The object selected is rotated

#### Axis

: ![](/images/RadioButtonTrue.svg) **X**: Rotation on X axis
: ![](/images/RadioButtonFalse.svg) **Y**: Rotation on Y axis
: ![](/images/RadioButtonFalse.svg) **Z**: Rotation on Z axis
: ![](/images/RadioButtonFalse.svg) **D**: Rotation on Direction.

    :   * To use this option: select first the object, then afterwards select the wire guideline. If ![](/images/RadioButtonTrue.svg) **D** is checked and no wire is selected the direction is `Vector(0, 0, 0)`

#### Point Rotation BoundBox

1. Object: Rotation on the BoundBox center of the object selected
2. Sub Object: Rotation on the BoundBox center of the sub object selected

#### Angles

- Angle Rotation

1. -: Decrease the value by 10 degrees
2. 0 Degrees ![](/images/SpinBox.svg) : Value
3. +: Increase the value by 10 degrees

- Number images

1. -: Decrease the value by 10 images
2. 0 Images (+1) ![](/images/SpinBox.svg) : Value
3. +: Increase the value by 10 images

- Angle Begin Rotation

1. -: Decrease the value by 10 degrees
2. 0 Degrees ![](/images/SpinBox.svg) : Value: Angle of the starting rotation
3. +: Increase the value by 10 degrees

- Degrees Angle End Rotation

1. -: Decrease the value by 10 degrees
2. 360 Degrees ![](/images/SpinBox.svg): Value: Angle of the end rotation
3. +: Increase the value by 10 degrees

#### Command

- Delay between 2 images

1. 0,00 Delay second ![](/images/SpinBox.svg) : If there is a problem saving images due to speed, then add a delay of X seconds.
2. ![](/images/CheckBoxFalse.svg) Reverse: Checked, this option reverses the rotation 3D view or Object
3. Point center: Visualize the point center of rotation, if the point is visible the point is include in the image (PS: the point can be hidden by an object)
4. ![](/images/CheckBoxTrue.svg) Original position: This option restores the original position of the 3D View or the Object rotated. Instead fo the 3D view or the Object staying in the last position of the rotation.
5. Test Rot.: Testing the rotation without saving images
6. Save the animation: Save the animation

## Examples

![](/images/Macro_Screen_Wiki_03_Set_Screen.png)

Captured screen with dimensions of `640px x 400px`

![](/images/Macro_Screen_Wiki_04_Tile_Screen.png)

Same dimensions as the previous image, this one is captured as 'Tile Screen'.

![](/images/Macro_Screen_Wiki_Object_Direction_Object.gif)

Animation mode: Object selected and direction BoundBox center Object.  
The images must be assembled with a 3rd party application to create an animated .gif  
such as [GIMP](https://daviesmediadesign.com/project/make-animated-gif-gimp/) or [ScreenToGif](https://www.screentogif.com)

![](/images/Macro_Screen_Wiki_Object_Direction_SUBObject.gif)

Animation mode: Object Direction SubObject selected.  
The images must be assembled with a 3rd party application that creates an animated .gif  
such as [GIMP](https://daviesmediadesign.com/project/make-animated-gif-gimp/) or [ScreenToGif](https://www.screentogif.com)

![](/images/Macro_Screen_Wiki_07.png)

The FreeCAD window resized. The dimension may be different from the definition (depending on the Widget, title bar etc... used.)

## Versions

Version=00.06c: 10/10/2024 : delete "**import WebGui**"

Version=00.06: Version=00.06b: 2023/06/26 : adding select number image, button test rotation, button visualize the point rotation,
adding code by wmayer center rotation on center screen :

```
#https://forum.freecadweb.org/viewtopic.php?f=22&t=10157
                cam = Gui.ActiveDocument.ActiveView.getCameraNode()
                position = cam.position.getValue()
                orient = cam.orientation.getValue()
                focalDistance = cam.focalDistance.getValue()
                viewdir = coin.SbVec3f(0, 0, -1)
                viewdir = orient.multVec(viewdir)
                pointRotation = position + viewdir * focalDistance
                pointRotation = pointRotation2 = App.Vector(pointRotation.getValue()[0], pointRotation.getValue()[1], pointRotation.getValue()[2])

```

Version=00.05: 2021/05/21 : adding code in Save file section for Linux Mint QFileDialog ignore the extension. Only the Path+name is displayed

```
global switchQFileDialogMint
                ####  mint
                if switchQFileDialogMint == True:   #
                    Filter = Filter[Filter.find("."):Filter.find(")")]
                    SaveName = SaveName + Filter
                ####  mint

```

Version=00.04: 2021/01/13 : adding mini ToolBar

Version=0.03: 2020/10/30 : create a tool bar for the image and new button for unique image

Version=0.02: 2020/05/04 : correct bug color button (self.PB_01_Color obsolete)

Version=0.01: 2020/03/21

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Screen_Wiki/en&oldid=1494967>"
