---
title: Tragflächenprofil
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Makro Tragflächenprofil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Tragflächenprofil erstellt Tragflächenprofilkurven und -flächen mit vordefinierten Modellen, algebraischen Funktionen und DAT oder CSV Dateien. Versionsmakro : 2.0.1 Datum der letzten Änderung : 2021-03-10 FreeCAD version : 0.17 und neuer Herunterladen : [ToolBar Icon](https://wiki.freecad.org/images/5/59/AeroFoil-reduced.png) Autor: Melwyncarlo                                                                                                                                                                                                             |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Melwyncarlo](/index.php?title=User:Melwyncarlo&action=edit&redlink=1 "User:Melwyncarlo (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://wiki.freecad.org/images/5/59/AeroFoil-reduced.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Persönliches Github - AeroFoil](https://github.com/melwyncarlo/AeroFoil) [AeroFoil.zip](https://github.com/melwyncarlo/AeroFoil/blob/main/AeroFoil.zip?raw=true) [FC Github - AeroFoil](https://github.com/FreeCAD/FreeCAD-macros/tree/master/ObjectCreation) [FC Forum - AeroFoil](https://forum.freecad.org/viewtopic.php?f=22&t=56162) [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de") |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.0.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2021-03-10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.17 und neuer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Beschreibung

**AeroFoil** (Tragflächenprofil) ist ein vom Anwender erstelltes Makro, das innerhalb der FreeCAD-Anwendung verwendet werden kann. AeroFoil erstellt Tragflächenkurven und -flächen unter Verwendung vordefinierter Modelle, algebraischer Funktionen sowie importierter DAT- oder CSV-Dateien.

![](/src/assets/images/AeroFoil-reduced.png)    Dies ist das **Tragflächenprofil Makro** Symbol.

Das AeroFoil Makro kann über den integrierten [Erweiterungsverwalter](/Std_AddonMgr/de "Std AddonMgr/de") innerhalb der FreeCAD Software heruntergeladen werden.

#### Schlüsselfunktionen

- Airfoil points refinement
- Multiple airfoil copy generation
- 2D curves and planar face output
- DWire/PolyLine and BSpline output
- Sketcher workbench and Draft workbench output
- Fully constrained sketches in Sketcher workbench
- Split (upper and lower) airfoil curves generation
- Ready-made NACA 4-digit and 5-digit solvers
- Symmetric and asymmetric curve functions parser
- DAT text file and CSV spreadsheet data parser
- Chord length input in mm, cm, m, in., ft, and yards

<span id="Additional\_Features\_0.19 and above">

#### Zusatzfunktionen 0.19 und neuer

AeroFoil object properties *(read-only)* :

Base

- Daten**Airfoil Type** (`String`)
- Daten**Airfoil Chord Length** (`Length`)
- Daten**Design Curve Type** (`String`)
- Daten**Number Of Points** (`Integer`)

[![AeroFoil-output-types.gif](/src/assets/images/9/94/AeroFoil-output-types.gif)](/File:AeroFoil-output-types.gif)

**Caption : AeroFoil Macro Output Types**

[![AeroFoil-input-types.gif](/src/assets/images/0/0a/AeroFoil-input-types.gif)](/File:AeroFoil-input-types.gif)

**Caption : AeroFoil Macro Input Types**

## Einrichtung

#### Linux

AeroFoil can be installed manually, similar to Windows installation, or by using the command terminal and its relevant commands as mentioned in the [INSTALL](https://raw.githubusercontent.com/melwyncarlo/AeroFoil/main/INSTALL.sh) file.

Standardmäßig kann das Linux Befehlsterminal durch gleichzeitiges Drücken der folgenden Tastaturtasten gestartet werden:

`Control + Alt + T`

#### Windows

Tragflächenprofil kann mit Hilfe der folgenden zwei Schritte installiert werden :-

1. Download the [AeroFoil.zip](https://github.com/melwyncarlo/AeroFoil/blob/main/AeroFoil.zip?raw=true) file.
2. Extract the ZIP file's contents into the FreeCAD User Macro directory location.

By default, the FreeCAD User Macro directory should be located at :

`C:/Users/User_Name/AppData/Roaming/FreeCAD/Macro`

## Anwendung

AeroFoil can be loaded by performing the following steps :-

1. Launch the **FreeCAD** application.
2. Go to **Macro → Macros ...**.
3. Click on the **User macros** tab in the pop-up dialog box.
4. Select AeroFoil.FCMacro.
5. Click on Execute.

Once the AeroFoil macro has been loaded, follow the instructions in the respective dialog boxes, fill in the relevant inputs, and navigate accordingly. In case of error or warning, you will automatically be notified of the same. In case you are notified to report an unexpected error, communicate the error by mentioning the FreeCAD version, tracing the steps taken, and mentioning whether (and how much) or not any ouput was generated.

#### Notes

|     |                                                                                                                                                                                               |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (1) | Performing the macro operation with custom points and refinement produces no visible changes.                                                                                                 |
| (2) | The AeroFoil object properties are only visible on the FreeCAD software version 0.19. On older versions, you will be shown a warning on the console. This warning will not affect the output. |

#### Hints to keep in mind during usage :

1. For the NACA airfoils, the last two digits (combined) cannot have a value of zero; thickness cannot be a zero value.
2. The NACA 5-digit airfoils are limited to the following models ('XX' denotes the last two digits, thickness, of the airfoil) :
   - 210XX
   - 220XX
   - 221XX
   - 230XX
   - 231XX
   - 240XX
   - 241XX
   - 250XX
   - 251XX
3. For curve functions, only use the preset characters and functions.
4. For curve functions,

   2
   ∗
   x
   {\displaystyle 2\*x}
   ![{\displaystyle 2*x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e74f26f80a2da37d8165a158a50adb9d6f932913) is correct, whereas

   2
   x
   {\displaystyle 2x}
   ![{\displaystyle 2x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e50b849d3a7cd902f0ae3fa6ad6d1cad49987c39) is incorrect.

5. For curve functions,

   # y

   f
   (
   x
   )
   {\displaystyle y=f(x)}
   ![{\displaystyle y=f(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2311a6a75c54b0ea085a381ba472c31d59321514) ranges from **0** to **1**, both inclusive.

6. For curve functions, the trigonometric _theta_ is in degrees (**θ °**)
7. For curve functions, the trigonometric _theta_ ranges from **0°** to **360°**, subject to computational limits.
8. Curves or points that are intersecting between **0** and **1**, both exclusive, will return an error.
9. Curves or points that contain the bottom airfoil data cannot be mirrored
10. For file imports, it is suggested to leave the line, row, and column numbers to their default values, unless you are well-informed.
11. Increasing the **refine** and **quantity** parameters increases the computation time and resources.
12. Absolute chord length, in millimetres, cannot be less than **1mm**.

[![AeroFoil-preset-functions.png](/src/assets/images/a/a4/AeroFoil-preset-functions.png)](/File:AeroFoil-preset-functions.png)

**Caption : Preset Characters and Functions**

## Skript

```
__Title__         = "AeroFoil"
__Author__        = "Melwyncarlo"
__Version__       = "2.0.0"
__Date__          = "2021-03-09"
__Comment__       = "AeroFoil creates airfoil curves and faces using pre-defined models, algebraic functions, and DAT or CSV Files"
__Web__           = "https://github.com/melwyncarlo/AeroFoil"
__Wiki__          = "http://www.freecadweb.org/wiki/index.php?title=Macro_AeroFoil"
__Icon__          = "https://wiki.freecad.org/images/5/59/AeroFoil-reduced.png"
__Help__          = "Click on the AeroFoil button/macro, and follow the instructions in the subsequent dialog boxes."
__Status__        = "stable"
__Requires__      = "Freecad >= v0.17"
__Communication__ = "https://github.com/melwyncarlo/AeroFoil/issues"
__Files__         = "AeroFoil_UI_Files/AeroFoil_Initial_Dialog.ui, AeroFoil_UI_Files/AeroFoil_NACA4Digit_Dialog.ui, \
AeroFoil_UI_Files/AeroFoil_NACA5Digit_Dialog.ui, AeroFoil_UI_Files/AeroFoil_CurvesInput_Dialog.ui, \
AeroFoil_UI_Files/AeroFoil_PointsInput_Dialog.ui, AeroFoil_UI_Files/AeroFoil_DATInput_Dialog.ui, \
AeroFoil_UI_Files/AeroFoil_CSVInput_Dialog.ui, AeroFoil_UI_Files/AeroFoil_FileLoad_Dialog.ui, \
AeroFoil_UI_Files/AeroFoil_Final_Dialog.ui, AeroFoil_UI_Files/AeroFoil_Math_Functions_Box.ui, \
AeroFoil_UI_Files/AeroFoil_mfb_img.gif, AeroFoil_UI_Files/AeroFoil.svg"

#  OS: Ubuntu 18.04.5 LTS
#  Word size of OS: 64-bit
#  Word size of FreeCAD: 64-bit
#  Version: 0.18.4.
#  Build type: Release
#  Python version: 3.6.8
#  Qt version: 5.9.5
#  Coin version: 4.0.0a
#  OCC version: 7.3.0
#  Locale: English/UnitedKingdom (en_GB)

#  OS: Ubuntu 18.04.5 LTS (LXDE/Lubuntu)
#  Word size of OS	: 64-bit
#  Word size of FreeCAD: 64-bit
#  Version: 0.19
#  Build type: Release
#  Branch: unknown
#  Hash: 32200b604d421c4dad527fe587a7d047cf953b4f
#  Python version: 3.6.9
#  Qt version: 5.9.5
#  Coin versio: 4.0.0a
#  OCC version: 7.3.0
#  Locale: English/UnitedKingdom (en_GB)
```

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/melwyncarlo/AeroFoil/main/AeroFoil.FCMacro)_

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
    "https://raw.githubusercontent.com/melwyncarlo/AeroFoil/main/AeroFoil.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/melwyncarlo/AeroFoil/main/AeroFoil.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/melwyncarlo/AeroFoil/main/AeroFoil.FCMacro>">raw code</a>

## Verweise

[1] [AeroFoil Github Repositorium](https://github.com/melwyncarlo/AeroFoil)

[2] [FreeCAD Makros Github Repositorium - AeroFoil](https://github.com/FreeCAD/FreeCAD-macros/tree/master/ObjectCreation)

[3] [FreeCAD Forum Diskussionsseite - AeroFoil](https://forum.freecadweb.org/viewtopic.php?f=22&t=56162)

[4] [Tragflächenprofil Werkzeuge](http://airfoiltools.com/) enthält etwa 1.638 verschiedene Tragflächenprofile.

[5] [UIUC Tragflächenprofil Koordinaten Datenbank](https://m-selig.ae.illinois.edu/ads/coord_database.html) enthält fast 1.600 verschiedene Tragflächenprofile.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_AeroFoil/de&oldid=1350654>"
