---
title: Makrodefinicja Tekstura
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Texture                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Creates a 3D image from an 8 bit (256 color) BMP image. In other words, it allows one to build a 3D project very easily from a bitmap image using grayscale (256 shades of gray). If one 32 bit BMP image is selected, the image is represented in points. The **FCCreaLoft Macro Loft** macro is used to automate the multi loft operation. Macro version: 0.15 Last modified: 2025/01/04 FreeCAD version: 0.18 and more Download: [ToolBar Icon](https://www.freecad.org/wiki/images/9/90/FCTexture.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecad.org/wiki/images/9/90/FCTexture.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                                                           |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.15                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2025/01/04                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.18 and more                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [FCCreaLoft](/File:FCCreaLoft.png "FCCreaLoft") [Macro Loft](/Macro_Loft "Macro Loft")                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Description

This small macro allows one to build a 3D project very easily from a bitmap image with 256 shades of gray.

I hope that this macro will revolutionize the way we think when modeling with CAD and CNC converting to 3D objects with little to no intervention.

Everything becomes possible regardless of the complexity of the image!

The ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft "Macro Loft") is used to automate the multi loft operation.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/262317bc7d8555885b0e/raw/f18613c8bfd142e644ba79fc8dd34a5f72282f18/Macro%2520FCTexture.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/262317bc7d8555885b0e/raw/f18613c8bfd142e644ba79fc8dd34a5f72282f18/Macro%2520FCTexture.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/262317bc7d8555885b0e/raw/f18613c8bfd142e644ba79fc8dd34a5f72282f18/Macro%2520FCTexture.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/262317bc7d8555885b0e/raw/f18613c8bfd142e644ba79fc8dd34a5f72282f18/Macro%2520FCTexture.FCMacro>">raw code</a>

![](/images/Texture_004_Honda.png)

Texture 004 Honda

## Usage

This macro requires an image in 256 shades of gray (0-255) therefore before executing the macro, convert your image into grayscale (black and white). When running the macro, the number of colors is detected automatically. Note: if the image is more than 256 colors another function is expected (WIP). Each color (gray level) is regarded as a deep, white (255) the level high and black (0) the lowest level (deep).

Configuration is done before the opening of the file, default values are the settings provided to get a project's dimensions:

- width of the image in points in the coordinate **X**,
- height of the image in points in the coordinate **Y**,
- depth or thickness of the project leaked 10 mm (in raw mode, on 256 mm) in the coordinate **Z**.

The image file unfolds like a scanner x1 x2 x3 ... in 1 mm increments in FreeCAD similarly to the value y of 1 mm at a time. The value of z is given by the value of the color. These values are configurable in the macro.

Important note: depending on the size of the image, the project can become very large in size! For example, a simple image of (100px x 100px) width/height would be: **100 x 100 = 10000 points**. Each of the 10,000 points corresponds to a coordinate, so that means 10000 X, 10000 Y, and 10000 Z coordinates in actuality.

### Interface

![Texture 002](/images/Texture_002.png)

Texture 002

#### Coordinates

- Coordinate X ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg): The **X** coordinate position of the object (default: 0)
- Coordinate Y ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg): The **Y** coordinate position of the object (default: 0)
- Coordinate Z ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg): The **Z** coordinate position of the object (default: 0)

#### Stretching

- Stretching X 0,00 mm ![](/images/SpinBox.svg): narrowing or enlarging of the **X** (length) of the object (default: 0)
- Stretching Y 0,00 mm ![](/images/SpinBox.svg): narrowing or enlarging of the **Y** (height) of the object (default: 0)
- Stretching Z 0,00 mm ![](/images/SpinBox.svg): narrowing or enlarging of the **Z** (depth) of the object (default: 0)

#### Inversion

- ![](/images/CheckBoxFalse.svg) Axis X: inverts the **X** coordinates of the image.
- ![](/images/CheckBoxFalse.svg) Axis Y: inverts the **Y** coordinates of the image.
- ![](/images/CheckBoxFalse.svg) Axis Z: inverts the **Z** coordinates of the image.

#### 8 bit Mode

The beginning of the operation value automatically adapts to the selected function: 0 if the setting is on black (**Black**) 255 or 20 if the setting is white (**White**).

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_Wire.svg) Wire: build the line (vector) in the form of Wire.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_BSpline.svg) Bspline: build the line (vector) in the form of Bspline.
- ![](/images/RadioButtonFalse.svg) ![](/images/Workbench_Points.svg) Cloud: build the points vectors in a point cloud.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Point.svg) Point: creates a point at each pixel (vector) (Note: this procedure is CPU intensive)
- ![](/images/CheckBoxFalse.svg) Nuance: if the shade option is checked, the color of the point is represented as a picture.

#### 32 bit Mode

- ![](/images/RadioButtonTrue.svg) Photo: photo mode is automatically activated when a **32-bit image** is detected. (Note: this procedure is CPU intensive)
- ![](/images/RadioButtonFalse.svg) Plan: allows for importing a **32-bit image** and ignore the background of the plan. By default the map background is black to ignore colors are adjustable with the **Capping** command. If White is checked, the bottom has ignore will be white. (Note: this procedure is CPU intensive)

#### File

- ![](/images/CheckBoxFalse.svg) .pcd: if checked, a file (originalName.bmp.pcd) is saved in the same directory of the file (pcd v0.7).
- ![](/images/CheckBoxFalse.svg) .asc: if checked, a file (originalName.bmp.asc) is saved in the same directory of the file. This file can be used as a point cloud (format: X Y Z).

#### Capping (10mm)

- Slider: Enter the height of the form. The height is displayed on title frame.
- 0 height ![](/images/SpinBox.svg): Enter the height of the form. The height is displayed on title frame.
- Raw mode ![](/images/CheckBoxFalse.svg) 20: For adjusting the number of colors (depth). The default mode is 0-20 (which constitutes a filter and to obtain more details according to the complexity of the image) once the checked the mode is 0 to 255 (the entire range of colors).
- ![](/images/CheckBoxFalse.svg): this option enables the ability to access the Contour spinbox
- 0/2 Contour ![](/images/SpinBox.svg): this spinbox gives the contour line. do not use (ex: 0 for the base).
- Capping ![](/images/CheckBoxFalse.svg) White: this function can be made on the choice of colours, white (default) or black. The degrees of capping rule 20 to 0 (or 255 to 0) if the checkbox is set on **W** (unchecked) or 0 to 20 (or 0 to 255) if the checkbox is set on **B** (checked).
- 20 Capping ![](/images/SpinBox.svg): this spinbox gives the degrees of capping.

#### Command

- File and launch: opens the image file and launches the conversion.
- Help:

  - Display the Wiki page in the FreeCAD browser
  - For change the parameter disponible: go to **Tools → Edit parameter...**
  - \_\_The global step on spinBox:\_\_
  - User parameter:**BaseApp/Preferences/Macros/FCMmacros/FCTexture → SingleStep**
  - Adjust the value desired (1.0 by default)
  - \_\_For search if the macro is upgraded :\_\_
  - User parameter:**BaseApp/Preferences/Macros/FCMmacros/FCTexture → switchVesionMacroSearch**
  - Adjust the switchVesionMacroSearch to `true` (`false` by default)

- Quit: exits the function.

## Script

The icons .png ![](/images/FCTexture.png) and .svg![](/images/FCTexture.svg)

**Macro_Texture.FCMacro**

Download the macro to Gist [Macro FCTexture.FCMacro](https://gist.github.com/mario52a/262317bc7d8555885b0e)

## Example

The images were inclined to enhance the 3D effect.

- ![Honda](/images/FCTexture_008.png)

  Honda

- ![Here with option contour](/images/Macro_FCTexture_008b.png)

  Here with option contour

- ![Here an example of a bmp image converted to points and restoring picture the width of the image is 6.5 nm thanks for the permission of Yorik](/images/Texture_Nano_Photo.png)

  Here an example of a bmp image converted to points and restoring picture the width of the image is 6.5 nm  
  [thanks for the permission of Yorik](https://forum.freecad.org/viewtopic.php?f=24&t=5893#p47075)

- ![Here an example of a bmp image converted to object 3D of 6.7 nm width. thanks for the permission of Yorik](/images/Texture_NanoDesign.png)

  Here an example of a bmp image converted to object 3D of 6.7 nm width.  
   [thanks for the permission of Yorik](https://forum.freecad.org/viewtopic.php?f=24&t=5893#p47075)

- ![The logo of FreeCAD.](/images/Texture_001_Logo.png)

  The logo of FreeCAD.

- ![A portion of the screen FreeCAD. The file.](/images/Texture_002_Fe_FC.png)

  A portion of the screen FreeCAD. The [file](https://forum.freecad.org/viewtopic.php?f=3&t=4708&start=10#p46353).

- ![A portion of a tablecloth.](/images/Texture_003_napperon.png)

  A portion of a tablecloth.

- ![A diamond plate.](/images/Texture_005_larme.png)

  A diamond plate.

- [![Mode Plan: the image on the left the white background has been ignored in the right image the colour black has been ignored (an example on the forum)](/images/FCTexture_006.png)](/File:FCTexture_006.png  "Mode Plan: the image on the left the white background has been ignored in the right image the colour black has been ignored (an example on the forum)")

  Mode Plan: the image on the left the white background has been ignored in the right image the colour black has been ignored (an [example](https://forum.freecad.org/viewtopic.php?f=3&t=6123&hilit=teobo&start=10#p49024) on the forum)

- ![Topography from a drawing or each level is represented with a degrees of different color.](/images/Texture_Topographie.png)

  Topography from a drawing or each level is represented with a degrees of different color.

- ![Image converted in ASCII caracter.](/images/FCTexture_007_FreeCAD_ASCII_00.png)

  Image converted in ASCII caracter.

- [![Procedure for create solid: 1: Create loft with the tools or with the Macro Loft 2: Select all and extrude with the tools 3A: For Linux Download GMSHMesh (author psicofil) Macro_GMSH Wiki page 3B: For Windows Download GmshMesh2.zip unzip the file and install it in your Mod directory (author ulrich1a) 4: Create your Mesh file and use it](/images/FCTexture_Example.gif)](/File:FCTexture_Example.gif  "Procedure for create solid: 1: Create loft with the tools or with the Macro Loft 2: Select all and extrude with the tools 3A: For Linux Download GMSHMesh (author psicofil) Macro_GMSH Wiki page 3B: For Windows Download GmshMesh2.zip unzip the file and install it in your Mod directory (author ulrich1a) 4: Create your Mesh file and use it")

  Procedure for create solid:  
   **1:** Create loft with the ![](/images/Part_RuledSurface.svg) tools or with the ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft "Macro Loft")  
   **2:** Select all and extrude with the tools ![](/images/Part_Extrude.svg)  
   **3A:** For Linux Download [GMSHMesh](https://github.com/psicofil/Macros_FreeCAD) (author psicofil) [Macro_GMSH Wiki page](/Macro_GMSH "Macro GMSH")  
   **3B:** For Windows Download [GmshMesh2.zip](http://forum.freecadweb.org/download/file.php?id=15220) unzip the file and install it in your Mod directory (author ulrich1a)  
   **4:** Create your Mesh file and use it

- ![Convert solid in mesh with GmshMesh.](/images/FCTexture_Example_Mesh.png)

  Convert solid in mesh with [GmshMesh.](/Macro_GMSH "Macro GMSH")

## Links

The discussion on [the forum](https://forum.freecad.org/viewtopic.php?f=24&t=5893) to give your impressions or contact me.

The macro ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft "Macro Loft") for automate the multi loft.

[apply hair cell texture](https://forum.freecad.org/viewtopic.php?f=3&t=4708&start=10#p46353)

[How to handle pdf import properly and feasibly?](https://forum.freecad.org/viewtopic.php?f=3&t=6123&hilit=teobo&start=10#p49024)

## Revision

- ver 0.15 2025/01/04 delette all references to PySide and QtWidgets , chrono by chrisb

- Ver 0.14c : 15-01-2021 include **Gui.SendMsgToActiveView("ViewFit")**

- Ver 0.14b : 15-01-2021 Create Tab Coordinate and Tab Stretching for diminish the height of the macro and accepted in 15" screen

- ver 0.14 : 06/01/2021 change the search path procedure and adding preference option: search the new macro upgraded

```
####new2
                pathFile      = os.path.dirname(SaveName) + "/"  #= C:/Provisoire400/
                formatFichier = os.path.splitext(SaveName)[1]    #= .png
                SaveName      = os.path.splitext(SaveName)[0]    #= /home/kubuntu/.FreeCAD/Macro/Texture_007_H #= C:/Provisoire400/image3D
                SaveNameformatFichier = SaveName + formatFichier #= C:/Provisoire400/image3D.png
                ####new2
                FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macros/FCMmacros/FCTexture").SetString("Path",pathFile)
                ####new

```

- ver 0.13b: 30/12/2020 add try for **time.clock()** and **time.process_time()** for Python 3xyz...
- ver 0.13 : 17/04/2020 Layout and PySide2 Qt5
- ver 0.12 : 04/08/2019 add spinbox button for height
- ver 0.11 :03/07/2019 adapt to Python 3
- ver 0.10 : 28/12/2016 add save point in .pcd, .asc display a points cloud, height form, contour
- ver 0.9 : 12/12/2016 adding save file .asc for cloud point
- ver 0.8 : 16/03/2016 adding progressBar
- ver 0.7 : 03/09/2014 Delete "**translate**" forgotten and bug fix discovered by the passage of PyQt to Pyside !
- ver 0.6 : 26/08/2014 Delete all "**\_translate**"
- ver 0.5 : 25/08/2014 Delete "**\_translate (" MainWindow ",**" Stretching X "**, None)**" that prevented the display of tooltip with PySide (Windows Vista)

- ver 0.4 : 08/08/2014 PyQt4 PySide

- ver 0.3 : 28/03/2014 :comment out the line "**# self.checkBox_5.setAccessibleName(\_fromUtf8(""))**"

that causes an error with the version FreeCAD : Version: 0.14.3343 (Git), Python version: 2.7.6, Qt version: 4.8.5

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture/pl&oldid=1528526>"
