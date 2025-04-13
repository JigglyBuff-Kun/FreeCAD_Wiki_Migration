---
title: Screen Wiki
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Screen Wiki                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Macro speciale per l'utente Wiki. Questa macro consente di salvare la vista 3D nel formato desiderato. La vista 3D o la finestra 3D completa di FreeCAD assume le dimensioni desiderate. È possibile far fare una rotazione di un dato angolo all'oggetto selezionato o alla vista 3D e il numero di immagini viene calcolato automaticamente, è anche possibile dare un angolo di partenza e un angolo di arrivo. È necessario utilizzare un altro programma, ad esempio Gimp, per assemblare le immagini e creare il file animato. Versione macro: 00.06c Ultima modifica: 2024/10/10 Versione FreeCAD: 0.19 e successive Download: [Icona della barra degli strumenti](https://wiki.freecad.org/images/f/f5/Macro_Screen_Wiki.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Icona della barra degli strumenti](https://wiki.freecad.org/images/f/f5/Macro_Screen_Wiki.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 00.06c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2024/10/10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.19 e successive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Macro Copy3DViewToClipboard](/Macro_Copy3DViewToClipboard/it "Macro Copy3DViewToClipboard/it"), [Macro Snip](/Macro_Snip/it "Macro Snip/it")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Descrizione

Macro speciale per l'utente Wiki. Questa macro consente di salvare la vista 3D nel formato desiderato. La vista 3D o la finestra 3D completa di FreeCAD assume le dimensioni desiderate. È possibile far fare una rotazione di un dato angolo all'oggetto selezionato o alla vista 3D e il numero di immagini viene calcolato automaticamente, è anche possibile dare un angolo di partenza e un angolo di arrivo. È necessario utilizzare un altro programma, ad esempio Gimp, per assemblare le immagini e creare il file animato.

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

Macro Screen Wiki Immagine e finestra di configurazione

![](/images/Macro_Screen_Wiki_01.png)

Finestra Rotazione Wiki schermo macro

## Utilizzo

### Opzioni immagine

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

1. 600 px ![](/images/SpinBox.svg) Length (Impostato: 600 px)
2. 400 px ![](/images/SpinBox.svg) Height (Impostato: 400 px)

#### Window

1. ![](/images/RadioButtonFalse.svg) Window FC : Il completo FreeCAD window
2. ![](/images/RadioButtonTrue.svg) Screen 3D : La vista 3D di FreeCAD

#### Colore di sfondo

1. ![](/images/RadioButtonTrue.svg) Current (Default)
2. ![](/images/RadioButtonFalse.svg) Color
3. ![](/images/RadioButtonFalse.svg) Transparent
4. Restore

#### Commando

1. Set Screen : Finestra ancorata
2. Tile Screen : Finestra flottante
3. Save Image : Salva l'immagine, per esempio: imageBox_000.png (il \_000 e sempre aggiunto)
4. Follow : Dopo aver salvato la prima immagine, premere questo pulsante se si desidera salvare l'immagine successiva con lo stesso nome. Le immagini salvate vengono incrementate, per esempio: imageBox_001.png, imageBox_002.png, imageBox_003.png, etc. ..
5. New image: Salva una nuova immagine senza modificare il contatore
6. Rotation : Accesso al menu di rotazione (il titolo della sezione

"Image options" cambia in "Rotation options")

1. Quit : \_\_\_Screen_Wiki end\_\_\_\_\_\_\_\_\_\_
2. ToolBar: Riduce la finestra dell'immagine in una barra degli strumenti, l'opzione Rotation non è disponibile in questa modalità
   1. ![](/images/Macro_Screen_Wiki_ToolBar_01.png)![](/images/Macro_Screen_Wiki_ToolBar_02.png)![](/images/Macro_Screen_Wiki_ToolBar_03.png)![](/images/Macro_Screen_Wiki_ToolBar_04.png)
   2. Il pulsante ![](/images/Macro_Screen_Wiki_ToolBar_04_6.png) Flip/Flop S/N è una mini barra degli strumenti ![](/images/Macro_Screen_Wiki_ToolBar_Mini.png)

### Rotation options

#### Rotation on

1. ![](/images/RadioButtonFalse.svg) 3D View: La vista completa viene ruotata
2. ![](/images/RadioButtonTrue.svg) Object: L'oggetto selezionato viene ruotato

#### Axis

: ![](/images/RadioButtonTrue.svg) **X**: Rotation on X axis
: ![](/images/RadioButtonFalse.svg) **Y**: Rotation on Y axis
: ![](/images/RadioButtonFalse.svg) **Z**: Rotation on Z axis
: ![](/images/RadioButtonFalse.svg) **D**: Rotazione su una direzione, per utilizzare questa opzione, selezionare prima l'oggetto, secondo: la linea guida del filo. Se ![](/images/RadioButtonTrue.svg) **D** è selezionato e nessun filo è selezionato, la direzione è `Vector(0, 0, 0)`

#### Point Rotation BoundBox

1. Object : Rotazione sul centro BoundBox dell'oggetto selezionato
2. Sub Object : Rotazione sul centro BoundBox dell' secondo oggetto selezionato

#### Angles

- Angle Rotation

1. - : Riduce il valore di 10 gradi
2. 0 Degrees ![](/images/SpinBox.svg) : Valore
3. + : Aumenta il valore di 10 gradi

- Number images

1. -: Diminuisce il valore di 10 immagini
2. 0 Immagini (+1) ![](/images/SpinBox.svg) : Valore
3. +: Aumenta il valore di 10 immagini
4. - : Riduce il valore di 10 gradi
5. 0 Degrees ![](/images/SpinBox.svg) : Valore : Angolo della rotazione iniziale
6. + : Aumenta il valore di 10 gradi

- Angle End Rotation

1. - : Riduce il valore di 10 gradi
2. 360 Degrees ![](/images/SpinBox.svg) : Valore : Angolo della rotazione finale
3. + : Aumenta il valore di 10 gradi

#### Command

- Delay between 2 images

1. 0,00 ![](/images/SpinBox.svg) : Se ci sono problemi con il salvataggio dell'immagine (computer troppo veloce) dare un valore ...
2. ![](/images/CheckBoxFalse.svg) Reverse : Se selezionato, questa opzione inverte la vista 3D o l'oggetto di rotazione
3. Point center: Visualizza il centro di rotazione del punto, se il punto è visibile il punto viene incluso nell'immagine (PS: il punto può essere nascosto da un oggetto)
4. ![](/images/CheckBoxTrue.svg) Original position : Questa opzione ripristina la posizione originale della vista 3D o dell'oggetto ruotato. In caso contrario, la vista 3D o l'oggetto rimangono nell'ultima posizione della rotazione
5. Test Rot.: Testa la rotazione senza salvare le immagini
6. Save the animation : Salva l'animazione

## Esempio immagini

![](/images/Macro_Screen_Wiki_03_Set_Screen.png)

Mode Set Screen 640 px x 400 px

![](/images/Macro_Screen_Wiki_04_Tile_Screen.png)

Mode Tile Screen 640 px x 400 px ad esempio: sposta la finestra. L'immagine viene salvata nello stesso modo ché Set Screen qui sopra

![](/images/Macro_Screen_Wiki_Object_Direction_Object.gif)

Modalità animazione Oggetto selezionato e direzione BoundBox center Object.  
 Le immagini devono essere assemblate con un altro programma per creare un GIF animato  
Esempio [Gimp](https://www.gimp.org/downloads/) o [ScreenToGif](https://www.screentogif.com)

![](/images/Macro_Screen_Wiki_Object_Direction_SUBObject.gif)

Modalità animazione: Selezione dell'oggetto secondario per la direzione dell'oggetto.  
Le immagini devono essere assemblate con un'applicazione di terze parti che crei un file .gif animato  
come [GIMP](https://daviesmediadesign.com/project/make-animated-gif-gimp/) o [ScreenToGif](https://www.screentogif.com)

![](/images/Macro_Screen_Wiki_07.png)

La finestra di FreeCAD ridimensionata. La dimensione può essere diversa dalla definizione (dipende dal Widget, dalla barra del titolo ... utilizzata)

## Versione

Version=00.06c: 10/10/2024 : eliminato "**import WebGui**"

Versione=00.06: Versione=00.06b: 26/06/2023: aggiunta selezione del numero dell'immagine, pulsante prova rotazione, pulsante visualizza la rotazione del punto,
aggiunta del codice tramite rotazione centrale di wmayer sullo schermo centrale:

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

Versione=0.01 : 2020/03/21 :

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Screen_Wiki/it&oldid=1495276>"
