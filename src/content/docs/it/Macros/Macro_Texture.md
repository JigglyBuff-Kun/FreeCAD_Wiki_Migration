---
title: Texture
---

|                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Texture                                                                                                                                                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                                                                                                                                                           |
| Crea una immagine 3D partendo da una immagine BMP. Versione macro: 0.14c Ultima modifica: 2021/01/16 Versione FreeCAD: 0.18 e superiore Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/90/FCTexture.png), [Macro Loft](https://www.freecadweb.org/wiki/Macro_Loft) [FCCreaLoft](/File:FCCreaLoft.png "FCCreaLoft") Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                                                                                                                |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                               |
| Download                                                                                                                                                                                                                                                                                                                                              |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/90/FCTexture.png), [Macro Loft](https://www.freecadweb.org/wiki/Macro_Loft) [FCCreaLoft](/File:FCCreaLoft.png "FCCreaLoft")                                                                                                                                                                   |
| Link                                                                                                                                                                                                                                                                                                                                                  |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                              |
| Versione macro                                                                                                                                                                                                                                                                                                                                        |
| 0.14c                                                                                                                                                                                                                                                                                                                                                 |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                  |
| 2021/01/16                                                                                                                                                                                                                                                                                                                                            |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                   |
| 0.18 e superiore                                                                                                                                                                                                                                                                                                                                      |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                           |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                             |
| Vedere anche                                                                                                                                                                                                                                                                                                                                          |
| [FCCreaLoft](/File:FCCreaLoft.png "FCCreaLoft") [Macro Loft](/Macro_Loft/it "Macro Loft/it")                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                       |

## Description

## Descrizione

Questa macro permette di creare facilmente un modello 3D partendo da una immagine bitmap con 256 livelli di grigio.

Siccome con questa macro si può convertire qualsiasi immagine in oggetti 3D senza alcun intervento, spero che questo cambi il modo di concepire il CAD e il CNC.

Tutto diventa possibile indipendentemente dalla complessità dell'immagine!

La macro ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/it "Macro Loft/it") permette di automatizzare il "multi loft"

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

## Uso

Questo macro ha bisogno di una immagine con 256 livelli di grigio (0-255) (8 bit) pertanto prima di utilizzare la macro è necessario convertire l'immagine in scala di grigi. Il numero di colori viene rilevato automaticamente. Ogni colore viene trattato come un livello di grigio, il bianco (255) è il livello più alto e il nero (0) è il livello più basso. Se l'immagine ha più di 256 colori (32 bit) viene attivato il modo Plan. (Il tempo di esecuzione delle funzioni di visualizzazione dei punti può essere molto lungo)

La configurazione si esegue prima di aprire il file, i valori predefiniti producono un disegno con le seguenti dimensioni:

- la coordinata **X** è la larghezza dell'immagine in punti,
- la coordinata **Y** è l'altezza dell'immagine in punti,
- la coordinata **Z** è la profondità o spessore del disegno adattato a 10 mm (256 mm in modo raw).

In FreeCAD il file dell'immagine si sviluppa come in una scansione x1 x2 x3 ... con incrementi del valore y di 1 mm per volta. Il valore di z è determinato dal valore del colore. Questi valori sono configurabili nell'interfaccia della macro.

Attenzione: secondo le dimensioni dell'immagine, il file del disegno può diventare molto grande! Tenere presente che un'immagine di 100 px di larghezza e 100 px di altezza produce **100 x 100 = 10000 punti** e quindi, siccome a ogni punto corrisponde una coordinata, ci sono **10000 coordinate XYZ** o vettori.

### L'interfaccia

![Texture 002](/images/Texture_002.png)

Texture 002

#### Coordinates

#### Coordinate

- Coordinate X: ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg) : Coordinata X della posizione dell'oggetto, di default : 0.
- Coordinate Y: ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg) : Coordinata Y della posizione dell'oggetto, di default : 0.
- Coordinate Z: ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg) : Coordinata Z della posizione dell'oggetto, di default : 0.

#### Stretching

#### Stetching

- Stetching X 0,00 mm ![](/images/SpinBox.svg) : diminuisce o aumenta la lunghezza dell'oggetto, di default : 0.
- Stetching Y 0,00 mm ![](/images/SpinBox.svg) : aumenta l'altezza dell'oggetto, di default : 0.
- Stetching Z 0,00 mm ![](/images/SpinBox.svg) : diminuisce o aumenta la profondità dell'oggetto, di default : 0.

#### Inversion

#### Inversion

- ![](/images/CheckBoxFalse.svg) Axis X : Inverte le coordinate **X** dell'immagine.
- ![](/images/CheckBoxFalse.svg) Axis Y : Inverte le coordinate **Y** dell'immagine.
- ![](/images/CheckBoxFalse.svg) Axis Z : Inverte le coordinate **Z** dell'immagine.

#### 8 bit Mode

#### Mode 8 Bits

Il valore iniziale dell'operazione si adegua automaticamente alla funzione selezionata: 0 se l'impostazione è su Nero (Black), oppure 255 o 20 se l'impostazione è Bianco (White)

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_Wire.svg) Wire : Costruisce la linea (i vettori) in forma di Wire.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_BSpline.svg) Bspline : Costruisce la linea (i vettori) in forma di Bspline.
- ![](/images/RadioButtonFalse.svg) ![](/images/Workbench_Points.svg) Cloud : Crea i vettori dei punti nella nuvola di punti.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Point.svg) Point : Crea un punto per ogni pixel (vettoriale). (La procedura può essere lunga)
- ![](/images/CheckBoxFalse.svg) Nuance : Se Nuance è attivato i colori dei punti sono restituiti come se fosse una foto.

#### 32 bit Mode

#### Mode 32 Bits

- ![](/images/RadioButtonTrue.svg) Photo : Il modo Photo è attivato automaticamente quando viene rilevata una immagine di **32 bit**. (La procedura può essere lunga)
- ![](/images/RadioButtonFalse.svg) Plan : Il modo Plan consente di importare una immagine di **32 bit** e ignorare lo sfondo del piano. Il colore predefinito dello sfondo del piano è il nero, per ignorare più colori regolare il **Capping**. Se è selezionato il bianco, ignora il bianco e lascia passare tutti gli altri colori. (La procedura può essere lunga)

#### File

#### Files

- ![](/images/CheckBoxFalse.svg) .pcd : Se è selezionato viene salvato un file originalName.bmp.pcd nella stessa directory del file (pcd v0.7).
- ![](/images/CheckBoxFalse.svg) .asc : Se è selezionato viene salvato un file originalName.bmp.asc nella stessa directory del file. Questo file può essere usato come una nuvola di punti (formato: X Y Z).

#### Capping (10mm)

#### Capping (10mm)

- Slider : Definisce l'altezza della forma, l'altezza viene visualizzata nel riquadro del titolo.
- 0 height ![](/images/SpinBox.svg) : Definisce l'altezza della forma, l'altezza viene visualizzata nel riquadro del titolo.
- Raw mode ![](/images/CheckBoxFalse.svg) 20 : Serve a regolare il numero di colori (livelli). La modalità predefinita è 0-19 (che costituisce un filtro e permette di ottenere maggiori dettagli, secondo la complessità dell'immagine). Quando viene selezionata questa opzione la modalità passa a 0-255 (tutta la scala di colori).

* ![](/images/CheckBoxFalse.svg) : Questo checkBox abilita lo spinbox.

- 0/2 Contour ![](/images/SpinBox.svg) : Questa casella numerica determina il colore che deve essere rimosso per ottenere il contorno dell'oggetto (ad esempio 0 per rimuovere lo sfondo).
- Capping ![](/images/CheckBoxFalse.svg) White : L'operazione di tappatura può essere eseguita su colori a scelta, bianco (impostazione predefinita) o nero. Il grado di tappatura si regola da 19 a 0 (o da 255 a 0) se la casella di controllo è impostata su **White** , oppure da 0 a 19 (o da 0 a 255) se la casella di controllo è impostata su **Black**.
- 20 Capping ![](/images/SpinBox.svg) : Questa casella numerica determina il grado di Capping

#### Command

#### Command

- File and launch : Apre il file immagine e avvia la conversione.
- Help : Apre la pagina del wiki dentro il FreeCAD webBrowser

  - Visualizza la pagina Wiki nel browser di FreeCAD
  - Per modificare il parametro disponibile: vai su _'Strumenti → Modifica parametro ...'_
  - \_\_ Il passaggio globale su spinBox: \_\_
  - User parameter:**BaseApp/Preferences/Macros/FCMmacros/FCTexture → SingleStep**
  - Regola il valore desiderato (1.0 per impostazione predefinita)
  - \_\_ Per la ricerca se la macro è aggiornata: \_\_
  - User parameter:**BaseApp/Preferences/Macros/FCMmacros/FCTexture → switchVesionMacroSearch**
  - Regola switchVesionMacroSearch su `true` (`false` per impostazione predefinita)

- Quit : Esce dalla funzione.

## Script

Le icone in formato .png ![](/images/FCTexture.png) e .svg![](/images/FCTexture.svg)

**Macro_Texture.FCMacro**

Scaricare la macro da Gist [Macro FCTexture.FCMacro](https://gist.github.com/mario52a/262317bc7d8555885b0e)

## Esempio

Le immagini sono state inclinate per esaltare l'effetto 3D.

- ![Honda](/images/FCTexture_008.png)

  Honda

- ![Here with option contour](/images/Macro_FCTexture_008b.png)

  Here with option contour

- ![Ecco un esempio di immagine bmp convertita in punti e ripristinata in foto larga 6.5 nm Grazie a Yorik per l'autorizzazione](/images/Texture_Nano_Photo.png)

  Ecco un esempio di immagine bmp convertita in punti e ripristinata in foto larga 6.5 nm  
  [Grazie a Yorik per l'autorizzazione](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893#p47075)

- ![Questo è un esempio di immagine bmp convertita in oggetto 3D largo 6.7 nm. Grazie a Yorik per l'autorizzazione](/images/Texture_NanoDesign.png)

  Questo è un esempio di immagine bmp convertita in oggetto 3D largo 6.7 nm.  
  [Grazie a Yorik per l'autorizzazione](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893#p47075)

- ![Il logo di FreeCAD.](/images/Texture_001_Logo.png)

  Il logo di FreeCAD.

- ![Una parte dello sfondo di FreeCAD. Il file.](/images/Texture_002_Fe_FC.png)

  Una parte dello sfondo di FreeCAD. Il [file](http://forum.freecadweb.org/viewtopic.php?f=3&t=4708&start=10#p46353).

- ![Una porzione di una tovaglia.](/images/Texture_003_napperon.png)

  Una porzione di una tovaglia.

- ![Una lastra zigrinata.](/images/Texture_005_larme.png)

  Una lastra zigrinata.

- [![Modo Plan: nell'immagine a sinistra è stato ignorato lo sfondo bianco, nell'immagine a destra è stato ignorato il colore nero (uno esempio su il foro)](/images/FCTexture_006.png)](/File:FCTexture_006.png  "Modo Plan: nell'immagine a sinistra è stato ignorato lo sfondo bianco, nell'immagine a destra è stato ignorato il colore nero (uno esempio su il foro)")

  Modo Plan: nell'immagine a sinistra è stato ignorato lo sfondo bianco, nell'immagine a destra è stato ignorato il colore nero (uno [esempio](http://forum.freecadweb.org/viewtopic.php?f=3&t=6123&hilit=teobo&start=10#p49024) su il foro)

- ![Esempio con un'immagine topografica di un Terrill dove ogni gradino corrisponde ad un diverso livello di colore.](/images/Texture_Topographie.png)

  Esempio con un'immagine topografica di un Terrill dove ogni gradino corrisponde ad un diverso livello di colore.

- [![Immagine convertita in carattere ASCII (non ancora in funzione).](/images/FCTexture_007_FreeCAD_ASCII_00.png)](/File:FCTexture_007_FreeCAD_ASCII_00.png  "Immagine convertita in carattere ASCII (non ancora in funzione).")

  Immagine convertita in carattere ASCII (non ancora in funzione).

- [![Procedura per creare il solido: 1: Creare un loft con lo strumento o con la Macro Loft 2: Selezionare tutto e estrudere con lo strumento 3A: Per Linux Download GMSHMesh (autore psicofil) Pagina del wiki Macro GMSH 3B: Per Windows Download GmshMesh2.zip decomprimere il file e installarlo nella propria directory Mod (autore ulrich1a) 4: Creare il proprio file Mesh e utilizzarlo](/images/FCTexture_Example.gif)](/File:FCTexture_Example.gif  "Procedura per creare il solido: 1: Creare un loft con lo strumento o con la Macro Loft 2: Selezionare tutto e estrudere con lo strumento 3A: Per Linux Download GMSHMesh (autore psicofil) Pagina del wiki Macro GMSH 3B: Per Windows Download GmshMesh2.zip decomprimere il file e installarlo nella propria directory Mod (autore ulrich1a) 4: Creare il proprio file Mesh e utilizzarlo")

  Procedura per creare il solido:  
   **1:** Creare un loft con lo strumento ![](/images/Part_RuledSurface.svg) o con la ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/it "Macro Loft/it")  
   **2:** Selezionare tutto e estrudere con lo strumento ![](/images/Part_Extrude.svg)  
   **3A:** Per Linux Download [GMSHMesh](https://github.com/psicofil/Macros_FreeCAD) (autore psicofil) [Pagina del wiki Macro GMSH](/Macro_GMSH/it "Macro GMSH/it")  
   **3B:** Per Windows Download [GmshMesh2.zip](http://forum.freecadweb.org/download/file.php?id=15220) decomprimere il file e installarlo nella propria directory Mod (autore ulrich1a)  
   **4:** Creare il proprio file Mesh e utilizzarlo

- ![Converte solidi in mesh con GmshMesh.](/images/FCTexture_Example_Mesh.png)

  Converte solidi in mesh con [GmshMesh.](/Macro_GMSH/it "Macro GMSH/it")

## Links

## Link

La discussione sul [forum](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893) per esprimere le proprie impressioni e contattare l'autore.

La ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/it "Macro Loft/it") che permette di automatizzare il "multi loft"

[apply hair cell texture](http://forum.freecadweb.org/viewtopic.php?f=3&t=4708&start=10#p46353)

[How to handle pdf import properly and feasibly?](http://forum.freecadweb.org/viewtopic.php?f=3&t=6123&hilit=teobo&start=10#p49024)

## Revisioni

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

ver 0.4 : 08/08/2014 PyQt4 PySide

ver 0.3 : 28/03/2014 :commentata la riga "**# self.checkBox_5.setAccessibleName(\_fromUtf8(""))**"
che causa un errore con la seguente versione di FreeCAD : 0.14.3343 (Git), Python version: 2.7.6, Qt version: 4.8.5

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture/it&oldid=1528527>"
