---
title: FCCamera
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Posizione camera                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| La nuova versione modificata della GUI per HD dpi (QGridLayout) funziona solo con la versione FC 0.18 e successive (PySide2 Qt5) Per le versioni precedenti, vedere [FCCamera](https://gist.githubusercontent.com/mario52a/4aa545c23b323cf68824/raw/42dc3ef73dc8db463a03b175f5a7f1f6978e3293/Macro%2520FCCamera.FCMacro) e installarla manualmente. Questa macro può ruotare lo schermo di un determinato angolo, lungo un asse a scelta e creare un piano frontale allo schermo. Versione macro: 0.14 Ultima modifica: 2020/10/20 Versione FreeCAD: 0.18 e successive Download: [ToolBar Icon](https://wiki.freecad.org/images/2/25/FCCamera_00.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [ToolBar Icon](https://wiki.freecad.org/images/2/25/FCCamera_00.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.14                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2020/10/20                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.18 e successive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Descrizione

Questa macro serve per ruotare lo schermo di un determinato angolo lungo l'asse voluto e per creare un piano frontale allo schermo in cui produrre una forma in una specifica posizione del piano della faccia selezionata rivolta verso lo schermo, inoltre serve per rilevare la posizione della fotocamera, per allineare la vista alla faccia o all'asse e per allineare l'oggetto alla vista.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/4aa545c23b323cf68824/raw/b31c64d26788b796750095eca4a6b92803537732/Macro%2520FCCamera.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/4aa545c23b323cf68824/raw/b31c64d26788b796750095eca4a6b92803537732/Macro%2520FCCamera.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/4aa545c23b323cf68824/raw/b31c64d26788b796750095eca4a6b92803537732/Macro%2520FCCamera.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/4aa545c23b323cf68824/raw/b31c64d26788b796750095eca4a6b92803537732/Macro%2520FCCamera.FCMacro>">raw code</a>

## Utilizzo

![FCCamera](/images/Macro_FCCamera_00.png)

FCCamera

**Camera of Axis**: La finestra di dialogo per immettere il valore dell'angolo di rotazione in gradi.

**Asse di rotazione angolare in gradi**: Selezionare l'asse di rotazione **X**, **Y** o **Z**.

**Axe of rotation**: Serve per selezionare l'asse di rotazione X, Y, Z o D.

- ![](/images/FCCamera_01.png) Accept the rotation : Serve per confermare i valori inseriti

**Virtual**

- ![](/images/FCCamera_02.png) Detect camera orientation : Rileva l'orientamento della fotocamera e lo stampa nella vista Report. Il valore restituito è il valore fornito dalla funzione **getCameraOrientation()**.

**Align view to face selected**

- ![](/images/FCCamera_03.png) To Face. : Allinea la vista alla faccia selezionata. Fare clic e ripetere il clic per **NormalAt** : "(0,0,1) (0,0,-1) (0,1,0) (0,-1,0) (1,0,0) (-1,0,0)"

- ![](/images/FCCamera_04.png) To Axis. : Allinea la vista della faccia selezionata agli Assi. Fare clic e ripetere il clic per **Surface Axis** : "(0,0,1) (0,0,-1) (0,1,0) (0,-1,0) (1,0,0) (-1,0,0)"

- ![](/images/FCCamera_05.png) Align object to view. : Allinea l'oggetto selezionato alla vista attiva. Modifica i valori di : Rotation Axis((X, Y, Z), Angle) come angoli di Eulero : Yaw, Pitch, Roll. Translation non viene modificata.

- ![](/images/FCCamera_06.png) Create plane of view. : crea un piano circolare frontale allo schermo con le coordinate del punto cliccato con il mouse su un oggetto. Il raggio del piano è uguale alla dimensione massima di boundbox. Se non è selezionato alcun oggetto, il piano viene creato nel punto 0, 0, 0 con un raggio di 20 mm. Il raggio è modificabile nella riga 515:

```
rayon = 20                            # Radius of plane

```

- ![](/images/FCCamera_07.png) Reset.: Ripristina tutti i valori
- ![](/images/FCCamera_00.png) Photo.: La sezione salva la rotazione dello schermo di un'immagine in valore angolare
- ![](/images/FCCamera_08.png) Quit. : Esci da FCCamera

## Sezione Photo

![FCCamera](/images/Macro_FCCamera_00b.png)

FCCamera

- ComboBox Actual  : Scegliere la propria definizione dello schermo per il formato dell'immagine

  - Available (pre-definito):
    - "Actual" (definizione attuale dello schermo)
    - "Icon 16 x 16"
    - "Icon 32 x 32"
    - "Icon 64 x 64"
    - "Icon 128 x 128"
    - "CGA 320 x 200"
    - "QVGA 320 x 240"
    - "VGA 640 x 480"
    - "SVGA 800 x 600"
    - "XGA 1024 x 768"
    - "XGA+ 1152 x 864"
    - "SXGA 1280 x 1024"
    - "SXGA+ 1400 x 1050"
    - "UXGA 1600 x 1200"
    - "QXGA 2048 x 1536"
    - "Free"

- SpinBox X and Y

- ComboBox Format image

  - Available :
    - "BMP \*.bmp"
    - "ICO \*.ico"
    - "JPEG \*.jpeg"
    - "JPG \*.jpg"
    - "PNG \*.png" (by default)
    - "PPM \*.ppm"
    - "TIF \*.tif"
    - "TIFF \*.tiff"
    - "XBM \*.xbm"
    - "XPM \*.xpm"

- Line 2 : La definizione di schermo utilizzata

- Immagine di sfondo :
  - Actual : salva l'immagine con il colore dello schermo effettivo
  - White : salva l'immagine con il colore dello schermo bianco
  - Black : salva l'immagine con il colore dello schermo nero

* ![](/images/FCCamera_00.png) Launch : Apre la finestra del file, indica il nome e il percorso
* ![](/images/FCCamera_07.png) Reset : Reimposta il valore predefinito
* ![](/images/FCCamera_00.png) Return : Esce dal pannello foto e torna al pannello di FCCamera

## Link

Link correlati con FCCamera

- [Macro Rotate View](/Macro_Rotate_View/it "Macro Rotate View/it")
- [Macro Align Object to View](/Macro_Align_Object_to_View/it "Macro Align Object to View/it")
- [Macro Align Face Object to View](/Macro_Align_Face_Object_to_View/it "Macro Align Face Object to View/it")
- [Macro WorkFeatures](/Macro_WorkFeatures/it "Macro WorkFeatures/it")

La discussione nel forum [MACRO:Work Feature 2014_12](http://forum.freecadweb.org/viewtopic.php?f=22&t=9056)

## Script

Scaricare gli icone [FCCamera_Icones.zip](https://forum.freecadweb.org/download/file.php?id=79288)

Scaricare la macro da Gist [**Macro FCCamera.FCMacro**](https://gist.github.com/mario52a/4aa545c23b323cf68824)

## Esempi

### Come creare un foro inclinato

- ![Creare un oggetto](/images/FCCamera_09.png)

  Creare un oggetto

- ![Creare un cilindro e posizionarlo come questo. Scegliere l'asse, assegnare l'angolo di inclinazione, ad es. 15°, e poi cliccare su Accept the rotation](/images/FCCamera_10.png)

  Creare un cilindro e posizionarlo come questo.  
  Scegliere l'asse, assegnare l'angolo di inclinazione, ad es. 15°, e poi cliccare su ![](/images/FCCamera_01.png) Accept the rotation

- ![Selezionare il cilindro da usare per creare il foro](/images/FCCamera_11.png)

  Selezionare il cilindro da usare per creare il foro

- ![In FCCamera, cliccare su Align Object to View](/images/FCCamera_12.png)

  In FCCamera, cliccare su ![](/images/FCCamera_05.png) Align Object to View

- [![Il cilindro si inclina di 15° (assume la posizione della camera). Poi eseguire l'operazione booleana.](/images/FCCamera_13.png)](/File:FCCamera_13.png  "Il cilindro si inclina di 15° (assume la posizione della camera). Poi eseguire l'operazione booleana.")

  Il cilindro si inclina di 15° (assume la posizione della camera).  
  Poi eseguire l'operazione booleana.

- ![Ecco il foro inclinato di 15°.](/images/FCCamera_14.png)

  Ecco il foro inclinato di 15°.

Lo stesso risultato può essere ottenuto creando un disegno nell'angolo dato dalla posizione del clic del mouse e uno schizzo.

- ![esempio del posizionamento di una molla sull'asse di una faccia](/images/Macro_FCCamera_Align_To_Face.gif)

  esempio del posizionamento di una molla sull'asse di una faccia

- [![Esempio di utilizzazione di rotazione della vista 3D e salvamento delle immagine (Potete creare uno filo animato Gif con GIMP)](/images/Test_FCCamera_Photo_01.gif)](/File:Test_FCCamera_Photo_01.gif  "Esempio di utilizzazione di rotazione della vista 3D e salvamento delle immagine (Potete creare uno filo animato Gif con GIMP)")

  Esempio di utilizzazione di rotazione della vista 3D e salvamento delle immagine (Potete creare uno filo animato Gif [con GIMP](https://www.gimp.org/))

## Versione

- **ver 0.15, 0.15b (19/12/2024):** adapt and return PySide, ([FCCamera macro can't find Pyside2](https://forum.freecad.org/viewtopic.php?p=797838)) correct the web access delete **WebGui** replaced by **webbrowser**

```
####
try:
    import webbrowser
    webbrowser.open("http://www.freecadweb.org/wiki/index.php?title=Macro_FCCamera")
except Exception:
    None
####
####
import urllib
from urllib import request

contentPage = request.urlopen("https://wiki.freecadweb.org/Macro_FCCamera").readlines()
####

```

- **ver 0.14 (20/10/2020):** corretto bug "Grid" non accettata

- **ver 0.13 (28/06/2020):** adding files image in source code, create plane "On point, Center face, BBox center, Center Mass", gridLayout

- **ver 00.12.1 (12/02/2020):** suppress the bad character lines 674 and 675 (accent...) again

- **ver 12 (01/08/2019):** compatible Python 3 ( print to print() )

- **ver 11 (13/01/2018):** minor

- **ver 10 (13/01/2018):** add "def centerBoundBoxGlobal():"

- **ver 09 (08/01/2018):** minor

- **ver 08 (08/01/2018):** supp "Pyqt4"
- **ver 07 (03/01/2018):** aggiunto pannello foto e rotazione sull'asse selezionato (polilinea, bordo, linea)

- **ver 0.6 (13/12/2016):** nuovo sistema per verificare il percorso delle macro direttamente nelle preferenze

```
#path = FreeCAD.ConfigGet("AppHomePath")
#path = FreeCAD.ConfigGet("UserAppData")
#path = "your path"
param = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macro")# macro path
path = param.GetString("MacroPath","") + "/"                        # macro path
path = path.replace("\\","/")
App.Console.PrintMessage("Path locality to FCCamera.....images.png [ " + path + " ]"+"\n")

```

- **ver 0.5 06/09/2016:** correct name "FCCamera_Axis_rotation_X.png" in reset block

- **ver 0.4 28/02/2016 :** add display all camera detection and the [Direction](http://forum.freecadweb.org/viewtopic.php?f=13&t=14213#p114667)

- **ver 0.3 18/03/2015 :** modify line 492 replace "**pl.Base = App.Vector(0,0,0)**" to "**pl.Base = sel[0].Placement.Base**" now no longer moves the form at point (0,0,0) and leaves has the coordinates

- **ver 0.2 25/02/2015 :** correct names files in for compatibility Linux (case sensitive) thanks microelly2

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCCamera/it&oldid=1521312>"
