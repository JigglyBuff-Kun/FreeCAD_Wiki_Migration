---
title: Texture
---

|                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Texture                                                                                                                                                                                                                                                                                                                                              |
| Popis                                                                                                                                                                                                                                                                                                                                                      |
| Vytvoří obraz 3D z obrázku BMP 8 bitů (256 barev). Version macro : 0.14c Date last modification : 2021/01/16 FreeCAD version : 0.18 and more Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/90/FCTexture.png), [Macro Loft](https://www.freecadweb.org/wiki/Macro_Loft) [FCCreaLoft](/File:FCCreaLoft.png "FCCreaLoft") Autor: Mario52 |
| Autor                                                                                                                                                                                                                                                                                                                                                      |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                    |
| Download                                                                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/90/FCTexture.png), [Macro Loft](https://www.freecadweb.org/wiki/Macro_Loft) [FCCreaLoft](/File:FCCreaLoft.png "FCCreaLoft")                                                                                                                                                                        |
| Odkazy                                                                                                                                                                                                                                                                                                                                                     |
| [Makro recepty                                                                                                                                                                                                                                                                                                                                             | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                                                                                                      |
| 0.14c                                                                                                                                                                                                                                                                                                                                                      |
| Datum poslední úpravy                                                                                                                                                                                                                                                                                                                                      |
| 2021/01/16                                                                                                                                                                                                                                                                                                                                                 |
| Verze FreeCAD                                                                                                                                                                                                                                                                                                                                              |
| 0.18 and more                                                                                                                                                                                                                                                                                                                                              |
| Výchozí zástupce                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                     |
| Viz též                                                                                                                                                                                                                                                                                                                                                    |
| [FCCreaLoft](/File:FCCreaLoft.png "FCCreaLoft") [Macro Loft](/Macro_Loft/cs "Macro Loft/cs")                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                            |

## Description

## Popis

Toto malé makro vám umožňuje velmi snadno vytvořit 3D projekt z bitmapového obrázku 256 úrovní šedé.

Doufám, že toto makro revoltuje způsob myšlení CAD a CNC jakéhokoli obrazu, když se může bez jakéhokoliv zásahu přeměnit na objekt 3D.

Všechno je možné bez ohledu na složitost obrazu !

Macro für die automatisierung des multi loft ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/cs "Macro Loft/cs") pro automatizaci multifunkčního loftu.

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

![](/images/Texture_004_Honda.png)

Texture 004 Honda

## Usage

## Použijte

Toto makro potřebuje obrázek v 256 odstínech šedé (0-255), proto před použitím makra převeďte snímek na stupně šedi (černé a bílé) Lowe. Počet barev je automaticky detekován, je-li obrázek více než 256 barev, očekává se další funkce. Každá barva (úroveň šedé) se považuje za hlubokou, bílou (255) vysokou a černou (0) nejnižší (hlubokou).

Konfigurace se provádí před otevřením souboru, výchozí hodnoty jsou nastavení poskytnutá pro získání rozměrů projektu:

- šířka obrázku v bodech v souřadnici **X**,
- výška obrázku v bodech v souřadnici **Y**,
- hloubka nebo tloušťka projektu unikla 10 mm (v surovém režimu, na 256 mm) v souřadnici **Z**.

Soubor s obrázkem se rozkládá jako skener x1 x2 x3 ... v krocích po 1 mm v aplikaci FreeCAD podobně jako hodnota y 1 mm najednou. Hodnota z je dána hodnotou barvy. Tyto hodnoty lze konfigurovat v makru.

Pozor: v závislosti na velikosti obrázku může být projekt velmi velký! pro záznam 100 pixelů široký a 100 pixelů na výšku dává 100 x 100 = 10000 bodů a každý bod odpovídá souřadnici, takže 10000 souřadnic XYZ tam je.

### Rozhraní

![Texture 002](/images/Texture_002.png)

Texture 002

#### Coordinates

#### Coordinate

- Coordinate X ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg): souřadnice X polohy objektu, implicitní: 0.
- Coordinate Y ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg): souřadnice Y polohy objektu, výchozí: 0.
- Coordinate Z ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg): souřadnice Z pozice objektu, výchozí: 0.

#### Stretching

#### Stetching

- Stetching X 0,00 mm ![](/images/SpinBox.svg): zúžení nebo zvětšení délky objektu, default: 0.
- Stetching Y 0,00 mm ![](/images/SpinBox.svg): zúžení nebo zvětšení výšky objektu, default: 0.
- Stetching Z 0,00 mm ![](/images/SpinBox.svg): zúžení nebo zvětšení hloubky objektu, default: 0.

#### Inversion

#### Inversion

- ![](/images/CheckBoxFalse.svg) Axis X: zpětné souřadnice **X** obrázek.
- ![](/images/CheckBoxFalse.svg) Axis Y: zpětné souřadnice **Y** obrázek.
- ![](/images/CheckBoxFalse.svg) Axis Z: zpětné souřadnice **Z** obraz.

#### 8 bit Mode

#### Mode 8 Bits

Začátek hodnoty operace se automaticky přizpůsobí zvolené funkci: 0, pokud je nastavení černé (**černé**) 255 nebo 20, je-li nastavení bílé (**bílá**).

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_Wire.svg) Wire: postavte vaši linku (vektor) ve formě Wire.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_BSpline.svg) Bspline: postavte svou linku (vektor) ve formě Bspline.
- ![](/images/RadioButtonFalse.svg) ![](/images/Workbench_Points.svg) Cloud: buduje bodové vektory v bodovém oblaku.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Point.svg) Point: vytvoří bod u každého pixelu (vektor). (postup může být dlouhý)
- ![](/images/CheckBoxFalse.svg) Nuance: Je-li zkontrolována volba odstínu, barva bodu je reprezentována jako obrázek.

#### 32 bit Mode

#### Mode 32 Bits

- ![](/images/RadioButtonTrue.svg) Photo: Režim foto je automaticky aktivován, když je detekován obraz **32 Bits**. (postup může být dlouhý)
- ![](/images/RadioButtonFalse.svg) Plan: plán umožňuje importovat **32 -bitový obrázek** a ignorovat pozadí plánu. Ve výchozím nastavení je pozadí mapy černé pro ignorování barev nastavitelné příkazem **Capping**. Pokud je zaškrtnuto políčko Bílý, ignorované dno bude bílé. (postup může být dlouhý)

#### File

#### Files

- ![](/images/CheckBoxFalse.svg) .pcd: pokud je zaškrtnuto jeden soubor originalName.bmp.pcd je uložen ve stejném adresáři souboru (pcd v0.7).
- ![](/images/CheckBoxFalse.svg) .asc: pokud je zaškrtnuto jeden soubor originalName.bmp.asc je uložen ve stejném adresáři souboru. Tento soubor lze použít jako cloud point (formát: X Y Z).

#### Capping (10mm)

#### Capping (10mm)

- Slider: udávají výšku tvaru, výška je zobrazena v rámečku titulku.
- 0 height ![](/images/SpinBox.svg): udávají výšku tvaru, výška je zobrazena v rámečku titulku.
- Raw mode ![](/images/CheckBoxFalse.svg) 20: pro nastavení počtu barev (hloubka). Výchozí režim je 0-20 (což představuje filtr a získání podrobnějších informací podle složitosti obrazu) po kontrole režimu 0 až 255 (celý rozsah barev).

* ![](/images/CheckBoxFalse.svg): Tento checkbox umožnil spouštění.

- 0/2 Contour ![](/images/SpinBox.svg): tento spinbox dává obrysovou čáru nepoužívejte (např. 0 pro základnu).
- Capping ![](/images/CheckBoxFalse.svg) White : Funkce zakončení může být provedena na základě výběru barev, bílé (výchozí) nebo černé. Stupně omezení pravidla 20 až 0 (nebo 255 až 0), pokud je zaškrtávací políčko nastaveno na **W** (nezaškrtnuto) nebo 0 až 20 (nebo 0 až 255) **(kontrolovány).**
- 20 Capping ![](/images/SpinBox.svg): Tento spinbox dává stupně omezení.

#### Command

#### Command

- File and launch: otevře obrazový soubor a spustí konverzi.
- Help: zobrazte wiki stránku ve webovém prohlížeči FreeCAD

  - Zobrazte stránku Wiki v prohlížeči FreeCAD
  - Pro změnu dostupného parametru: přejděte do **Nástroje → Upravit parametr ...**
  - \_\_ Globální krok na spinBoxu: \_\_
  - User parameter:**BaseApp/Preferences/Macros/FCMmacros/FCTexture → SingleStep**
  - Upravte požadovanou hodnotu (standardně 1,0)
  - \_\_ Pro vyhledávání, pokud je makro upgradováno: \_\_
  - User parameter:**BaseApp/Preferences/Macros/FCMmacros/FCTexture → switchVesionMacroSearch**
  - Upravte switchVesionMacroSearch na `true` (ve výchozím nastavení `false`)

- Quit: ukončí funkci.

## Skript

The icons .png ![](/images/FCTexture.png) and .svg![](/images/FCTexture.svg)

**Macro_Texture.FCMacro**

Stáhněte makro k obsahu [Macro FCTexture.FCMacro](https://gist.github.com/mario52a/262317bc7d8555885b0e)

## Příklad

Obrazy byly nakloněny ke zvýšení efektu 3D.

- ![Honda](/images/FCTexture_008.png)

  Honda

- ![Here with option contour](/images/Macro_FCTexture_008b.png)

  Here with option contour

- ![Here an example of a bmp image converted to points and restoring picture the width of the image is 6.5 nm thanks for the permission of Yorik](/images/Texture_Nano_Photo.png)

  Here an example of a bmp image converted to points and restoring picture the width of the image is 6.5 nm  
  [thanks for the permission of Yorik](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893#p47075)

- ![Here an example of a bmp image converted to object 3D of 6.7 nm width. thanks for the permission of Yorik](/images/Texture_NanoDesign.png)

  Here an example of a bmp image converted to object 3D of 6.7 nm width.  
   [thanks for the permission of Yorik](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893#p47075)

- ![The logo of FreeCAD.](/images/Texture_001_Logo.png)

  The logo of FreeCAD.

- ![A portion of the screen FreeCAD. The file.](/images/Texture_002_Fe_FC.png)

  A portion of the screen FreeCAD. The [file](http://forum.freecadweb.org/viewtopic.php?f=3&t=4708&start=10#p46353).

- ![A portion of a tablecloth.](/images/Texture_003_napperon.png)

  A portion of a tablecloth.

- ![A diamond plate.](/images/Texture_005_larme.png)

  A diamond plate.

- [![Mode Plan: the image on the left the white background has been ignored in the right image the colour black has been ignored (an example on the forum)](/images/FCTexture_006.png)](/File:FCTexture_006.png  "Mode Plan: the image on the left the white background has been ignored in the right image the colour black has been ignored (an example on the forum)")

  Mode Plan: the image on the left the white background has been ignored in the right image the colour black has been ignored (an [example](http://forum.freecadweb.org/viewtopic.php?f=3&t=6123&hilit=teobo&start=10#p49024) on the forum)

- ![Topography from a drawing or each level is represented with a degrees of different color.](/images/Texture_Topographie.png)

  Topography from a drawing or each level is represented with a degrees of different color.

- ![Image converted in ASCII caracter.](/images/FCTexture_007_FreeCAD_ASCII_00.png)

  Image converted in ASCII caracter.

- [![Procedure for create solid: 1: Create loft with the tools or with the Macro Loft 2: Select all and extrude with the tools 3A: For Linux Download GMSHMesh (author psicofil) Macro_GMSH Wiki page 3B: For Windows Download GmshMesh2.zip unzip the file and install it in your Mod directory (author ulrich1a) 4: Create your Mesh file and use it](/images/FCTexture_Example.gif)](/File:FCTexture_Example.gif  "Procedure for create solid: 1: Create loft with the tools or with the Macro Loft 2: Select all and extrude with the tools 3A: For Linux Download GMSHMesh (author psicofil) Macro_GMSH Wiki page 3B: For Windows Download GmshMesh2.zip unzip the file and install it in your Mod directory (author ulrich1a) 4: Create your Mesh file and use it")

  Procedure for create solid:  
   **1:** Create loft with the ![](/images/Part_RuledSurface.svg) tools or with the ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/cs "Macro Loft/cs")  
   **2:** Select all and extrude with the tools ![](/images/Part_Extrude.svg)  
   **3A:** For Linux Download [GMSHMesh](https://github.com/psicofil/Macros_FreeCAD) (author psicofil) [Macro_GMSH Wiki page](/Macro_GMSH "Macro GMSH")  
   **3B:** For Windows Download [GmshMesh2.zip](http://forum.freecadweb.org/download/file.php?id=15220) unzip the file and install it in your Mod directory (author ulrich1a)  
   **4:** Create your Mesh file and use it

- ![Convert solid in mesh with GmshMesh.](/images/FCTexture_Example_Mesh.png)

  Convert solid in mesh with [GmshMesh.](/Macro_GMSH "Macro GMSH")

## Links

## Odkazy

Diskuse o [the forum](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893) abych získala své dojmy nebo mě kontaktovala.

Macro ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/cs "Macro Loft/cs") pro automatizaci multifunkčního loftu

[apply hair cell texture](http://forum.freecadweb.org/viewtopic.php?f=3&t=4708&start=10#p46353)

[How to handle pdf import properly and feasibly?](http://forum.freecadweb.org/viewtopic.php?f=3&t=6123&hilit=teobo&start=10#p49024)

## Revize

- ver 0.15 2025/01/04 delette all references to PySide and QtWidgets , chrono by chrisb

- Ver 0.14c : 15-01-2021 include **Gui.SendMsgToActiveView("ViewFit")**

- Ver 0.14b : 15-01-2021 Create Tab Coordinate and Tab Stretching for diminish the height of the macro and accepted in 15" screen

- ver 0.13b: 30/12/2020 add try for **time.clock()** and **time.process_time()** for Python 3xyz...\*ver 0.13 : 17/04/2020 Layout and PySide2 Qt5
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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture/cs&oldid=1528528>"
