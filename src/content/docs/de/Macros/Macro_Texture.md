---
title: Texture
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Makro Textur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Das Makro erstellt ein 3D-Bild von einem 8-bit (256 Farben) BMP-Bild. Mit andern Worten: Es ermöglicht ein 3D-Projekt sehr einfach von einem Bitmap-Bild, das eine Grauskala mit 256 Graustufen verwendet, ausgehend aufzubauen. Ist ein 32-bit BMP-Bild ausgewählt, wird das Bild durch Punkte dargestellt. Das Makro **FCCreaLoft Macro Loft** wird verwendet, um die mehrfache Loft-Ausführung zu automatisieren. Versionsmakro : 0.15 Datum der letzten Änderung : 2025/01/04 FreeCAD version : 0.18 und neuer Herunterladen : [ToolBar-Icon](https://www.freecad.org/wiki/images/9/90/FCTexture.png) Autor: Mario52 |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Herunterladen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [ToolBar-Icon](https://www.freecad.org/wiki/images/9/90/FCTexture.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                                                                                                                                                                                                                                                                                                                                                             |
| Macro-Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.15                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Datum der letzten Änderung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2025/01/04                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.18 und neuer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Standardverknüpfung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [FCCreaLoft](/File:FCCreaLoft.png "FCCreaLoft") [Macro Loft](/Macro_Loft/de "Macro Loft/de")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Beschreibung

Mit diesem kleinen Makro können Sie aus einem Bitmap-Bild mit 256 Graustufen sehr einfach ein 3D-Projekt erstellen.

Ich hoffe, dass dieses Makro unsere Denkweise beim Modellieren mit CAD und CNC revolutionieren wird, wenn das Konvertieren in 3D-Objekte kaum bis gar keine Eingriffe braucht.

Alles wird möglich, unabhängig von der Komplexität des Bildes!

Das ![FCCreaLoft](/images/FCCreaLoft.png) [Makro Loft](/Macro_Loft/de "Macro Loft/de") wird zum Automatisieren der Multi-Loft-Operation benutzt.

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

## Anwendung

Dieses Makro benötigt ein Bild mit 256 Graustufen (0-255), daher konvertieren Sie Ihr Bild vor dem Verwenden des Makros in Graustufen (Schwarzweiß). Bei der Ausführung des Makros wird die Anzahl der Farben automatisch erkannt.
Hinweis: Falls das Bild mehr als 256 Farben enthält, wird eine andere Funktion erwartet (in Arbeit). Jede Farbe (Graustufe) wird als tiefes, weißes (255) als hoch und schwarz (0) als niedrigster Pegel (tief) angesehen.

Die Konfiguration erfolgt vor dem Öffnen der Datei. Die Standardwerte sind die Einstellungen, um die Dimensionen eines Projekts zu ermitteln:

- Breite des Bildes in Punkten in der Koordinate **X**,
- Höhe des Bildes in Punkten in der Koordinate **Y**,
- Tiefe oder Dicke des Projekts 10 mm (im Rohmodus auf 256 mm) in der Koordinate **Z**.

Die Bilddatei wird wie ein Scanner x1 x2 x3 ... in 1-mm-Schritten in FreeCAD ähnlich dem Wert y von jeweils 1 mm aufgefächert. Der Wert von z ergibt sich aus dem Wert der Farbe. Diese Werte sind im Makro konfigurierbar.

Wichtiger Hinweis: Je nach Größe des Bildes kann das Projekt sehr groß werden! Bspw. ergibt ein Bild mit einer Breite von 100 px und einer Höhe von 100 px **100 x 100 = 10000 Punkte** und da jeder Punkt einer Koordinate entspricht, sind es 10000 X-, 10000 Y- und 10000 Z-Koordinaten.

### Schnittstelle

![Texture 002](/images/Texture_002.png)

Texture 002

#### Koordinaten

- Coordinate X ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg): Die X-Koordinate der Position des Objekts (Standardwert: 0).
- Coordinate Y ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg): Die Y-Koordinate der Position des Objekts (Standardwert: 0).
- Coordinate Z ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg): Die Z-Koordinate der Position des Objekts (Standardwert: 0).

#### Stretching

- Stretching X 0,00 mm ![](/images/SpinBox.svg): Verkleinerung oder Vergrößerung des **X-Wertes** (Länge) des Objekts (Standardwert: 0)
- Stretching Y 0,00 mm ![](/images/SpinBox.svg): Verkleinerung oder Vergrößerung des **Y-Wertes** (Höhe) des Objekts of the object (Standardwert: 0)
- Stretching Z 0,00 mm ![](/images/SpinBox.svg): Verkleinerung oder Vergrößerung des **Z-Wertes** (Tiefe) des Objekts (Standardwert: 0)

#### Inversion

- ![](/images/CheckBoxFalse.svg) Axis X : Kehrt die **X**-Koordinaten des Bildes um.
- ![](/images/CheckBoxFalse.svg) Axis Y : Kehrt die **Y**-Koordinaten des Bildes um.
- ![](/images/CheckBoxFalse.svg) Axis Z : Kehrt die **Z**-Koordinaten des Bildes um.

#### 8-Bit-Modus

Der Anfangswert des Bedienungswerts passt sich automatisch an die ausgewählte Funktion an: 0, wenn die Einstellung auf Schwarz (**Schwarz**) 255 oder 20 steht, wenn die Einstellung Weiß ist (**Weiß**).

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_Wire.svg) Wire : Die Linie (Vektor) als Linienzug (Wire) erstellen.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_BSpline.svg) Bspline : Die Linie (Vektor) als -Spline erstellen.
- ![](/images/RadioButtonFalse.svg) ![](/images/Workbench_Points.svg) Cloud : Die Vektoren der Punkte in einer Punktewolke erstellen.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Point.svg) Point : Erstellt einen Punkt an jedem Pixel (Vektor). (Hinweis: Diese Prozedur ist sehr rechenintensiv)
- ![](/images/CheckBoxFalse.svg) Nuance : Wenn die Option Farbton aktiviert ist, wird die Farbe des Punktes als Bild dargestellt.

#### 32-Bit-Modus

- ![](/images/RadioButtonTrue.svg) Photo : Der Fotomodus wird automatisch aktiviert, wenn ein 32-Bit-Bild erkannt wird. (Hinweis: Die Prozedur ist sehr rechenintensiv)
- ![](/images/RadioButtonFalse.svg) Plan : Erlebt ein '**32-Bit-Bild** zu importieren und den Hintergrund des Plans ignorieren. Standardmäßig ist der Kartenhintergrund schwarz, um zu ignorieren, dass Farben mit dem Befehl **Capping** eingestellt werden können. Wenn Weiß markiert ist, wird der untere Bereich weiß angezeigt. (Hinweis: Die Prozedur ist sehr rechenintensiv)

#### Datei

- ![](/images/CheckBoxFalse.svg) .pcd : Wenn aktiviert, wird eine Datei (originalName.bmp.pcd) im selben Verzeichnis wie die Datei (pcd v0.7) gespeichert.
- ![](/images/CheckBoxFalse.svg) .asc : Wenn aktiviert, wird eine Datei (originalName.bmp.asc) im selben Verzeichnis wie die Datei gespeichert. Diese Datei kann als Punktwolke verwendet werden (Format: X Y Z).

#### Capping (10mm)

- Slider : Die Höhe des Formulars angeben. Die Höhe wird auf dem Titelrahmen angezeigt.
- 0 height ![](/images/SpinBox.svg) : Die Höhe des Formulars angeben. Die Höhe wird auf dem Titelrahmen angezeigt.
- Raw mode ![](/images/CheckBoxFalse.svg) 20 : Zum Einstellen der Anzahl der Farben (Tiefe). Der Standardmodus ist 0-20 (was ein Filter darstellt und weitere Details entsprechend der Komplexität des Bildes liefert), sobald der Modus 0 bis 255 (der gesamte Farbbereich) markiert ist.

* ![](/images/CheckBoxFalse.svg) : Diese Option ermöglicht Zugriff auf die Spinbox Contour.

- 0/2 Contour ![](/images/SpinBox.svg) : Diese Spinbox gibt die Konturlinie an. Nicht verwenden (außer: 0 für die Basis).
- Capping ![](/images/CheckBoxFalse.svg) White : Diese Funktion kann auf der Farbauswahl (Weiß (Standard) oder Schwarz) festgelegt werden. Der Grad der Verkappung der Regel 20 auf 0 (oder 255 auf 0), wenn das Kontrollkästchen auf **W** (nicht markiert) oder 0 bis 20 (oder 0 bis 255) gesetzt ist, wenn das Kontrollkästchen auf **B gesetzt ist** (geprüft).
- 20 Capping ![](/images/SpinBox.svg) : Diese Spinbox gibt den Grad der Verkappung an.

#### Befehl

- Datei und Start: Öffnet die Image-Datei und startet die Konvertierung.
- Help: Zeigt die Wiki-Seite im FreeCAD-Browser

  - Zeigt die Wiki-Seite im FreeCAD-Browser an
  - Um den Parameter zu ändern, gehen Sie zu _'Extras → Parameter bearbeiten ...'_
  - \_\_Der globale Schritt auf spinBox: \_
  - User parameter:**BaseApp/Preferences/Macros/FCMmacros/FCTexture → SingleStep**
  - Passen Sie den gewünschten Wert an (standardmäßig 1,0).
  - \_\_Für die Suche, ob das Makro aktualisiert wurde:\_\_
  - User parameter:**BaseApp/Preferences/Macros/FCMmacros/FCTexture → switchVesionMacroSearch**
  - Passen Sie die switchVesionMacroSearch auf `true` an (standardmäßig `false`).

- Quit: beendet die Funktion.

## Skript

The icons .png ![](/images/FCTexture.png) and .svg![](/images/FCTexture.svg)

**Macro_Texture.FCMacro**

Laden Sie das Makro in Gist herunter [Macro FCTexture.FCMacro](https://gist.github.com/mario52a/262317bc7d8555885b0e)

## Beispiel

The images were inclined to enhance the 3D effect.

- ![Honda](/images/FCTexture_008.png)

  Honda

- ![Here with option contour](/images/Macro_FCTexture_008b.png)

  Here with option contour

- ![Here an example of a bmp image converted to points and restoring picture the width of the image is 6.5 nm thanks for the permission of Yorik](/images/Texture_Nano_Photo.png)

  Here an example of a bmp image converted to points and restoring picture the width of the image is 6.5 nm  
  [thanks for the permission of Yorik](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893#p47075)

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

- [![Mode Plan: the image on the left the white background has been ignored in the right image the colour black has been ignored (an example on the forum)](/images/FCTexture_006.png)](/File:FCTexture_006.png "Mode Plan: the image on the left the white background has been ignored in the right image the colour black has been ignored (an example on the forum)")

  Mode Plan: the image on the left the white background has been ignored in the right image the colour black has been ignored (an [example](https://forum.freecad.org/viewtopic.php?f=3&t=6123&hilit=teobo&start=10#p49024) on the forum)

- ![Topography from a drawing or each level is represented with a degrees of different color.](/images/Texture_Topographie.png)

  Topography from a drawing or each level is represented with a degrees of different color.

- ![Image converted in ASCII caracter.](/images/FCTexture_007_FreeCAD_ASCII_00.png)

  Image converted in ASCII caracter.

- [![Procedure for create solid: 1: Create loft with the tools or with the Macro Loft 2: Select all and extrude with the tools 3A: For Linux Download GMSHMesh (author psicofil) Macro_GMSH Wiki page 3B: For Windows Download GmshMesh2.zip unzip the file and install it in your Mod directory (author ulrich1a) 4: Create your Mesh file and use it](/images/FCTexture_Example.gif)](/File:FCTexture_Example.gif "Procedure for create solid: 1: Create loft with the tools or with the Macro Loft 2: Select all and extrude with the tools 3A: For Linux Download GMSHMesh (author psicofil) Macro_GMSH Wiki page 3B: For Windows Download GmshMesh2.zip unzip the file and install it in your Mod directory (author ulrich1a) 4: Create your Mesh file and use it")

  Procedure for create solid:  
   **1:** Create loft with the ![](/images/Part_RuledSurface.svg) tools or with the ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/de "Macro Loft/de")  
   **2:** Select all and extrude with the tools ![](/images/Part_Extrude.svg)  
   **3A:** For Linux Download [GMSHMesh](https://github.com/psicofil/Macros_FreeCAD) (author psicofil) [Macro_GMSH Wiki page](/Macro_GMSH "Macro GMSH")  
   **3B:** For Windows Download [GmshMesh2.zip](https://forum.freecad.org/download/file.php?id=15220) unzip the file and install it in your Mod directory (author ulrich1a)  
   **4:** Create your Mesh file and use it

- ![Convert solid in mesh with GmshMesh.](/images/FCTexture_Example_Mesh.png)

  Convert solid in mesh with [GmshMesh.](/Macro_GMSH "Macro GMSH")

## Verweise

Die Diskussion über [the forum](https://forum.freecad.org/viewtopic.php?f=24&t=5893) Um Ihre Eindrücke zu vermitteln oder kontaktieren Sie mich.

Das Makro ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/de "Macro Loft/de") wird zum Automatisieren der Multi Loft-Operation benutzt.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture/de&oldid=1528541>"
