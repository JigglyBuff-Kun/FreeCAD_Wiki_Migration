---
title: Molla a spirale variabile
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Molla a spirale variabile                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Questa macro crea una molla personalizzabile, la configurazione della molla può essere salvata in un file con estensione **.FCSpring** o coordinate **.FCSpringCoor**. Vengono rilevati: Superficie (Direzione della faccia), Cilindro (raggio), Ellisse (raggio minore), Sfera (raggio), Toroide (raggio1), Piano (direzione), Linea (seguire la direzione), Punto (posizione vertice XYZ) Se non viene rilevato alcun oggetto (non selezione) la molla viene creata nel punto XYZ 0., 0., 0. Vedi [esempi](https://www.freecadweb.org/wiki/Macro_FCSpring_Helix_Variable/it#Esempi) Versione macro: 01.18c Ultima modifica: 2023/09/01 Versione FreeCAD: 0.19 Download: Download the [the Icons](https://forum.freecadweb.org/download/file.php?id=80844) in .zip file Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Download the [the Icons](https://forum.freecadweb.org/download/file.php?id=80844) in .zip file                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 01.18c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2023/09/01                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.19                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Description

## Descrizione

Questa macro crea una molla con una configurazione altamente personalizzabile. Qualsiasi modifica che cambi la configurazione della molla può essere salvata in un file con estensione .FCSpring o coordinate .FCSpringCoor  
Vengono rilevati: superficie (direzione faccia), cilindro (raggio), ellisse (raggio minore), sfera (raggio), toroide (raggio1), piano (direzione), linea (seguire la direzione), punto (posizione vertice XYZ)  
 Se non viene rilevato alcun oggetto (non selezione) la molla viene creata nel punto XYZ 0., 0., 0.  
Si possono creare diverse configurazioni di molle, secondo le proprie esigenze, e poi salvarle in un file con estensione **.FCSpring**

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro>">raw code</a>

![](/images/TruncateSpring00.png)

FCSpring Helix Variable

## Usage

## Uso

Configurazione della molla

Schema di configurazione della molla

![](/images/Macro_TruncateSpring_01.png)

#### **Gui**

![](/images/Macro_FCSpring_Helix_Variable_01.png)

#### Configuration

#### Configurazione

- 10 coils ![](/images/SpinBox.svg) **Number of coil** : Numero di spire. Default = 10
- 20,000 mm ![](/images/SpinBox.svg) **Radius of spring** : Raggio della molla. Default = 20.0
- 15,000 mm ![](/images/SpinBox.svg) **Pitch of spring** : Passo principale. Default = 15.0
- 5 ( 72 points ) ![](/images/SpinBox.svg) **Precision of turn** : Precisione della curvatura, la precisione corrisponde al numero di punti per spira ed è calcolata \* 5 ( 72 points ) ![](/images/SpinBox.svg) : precision (numero di punti) = (passo / (360/precisione)). Default = 5 (72 punti)
- 20,000 mm ![](/images/SpinBox.svg) **Spring conical** : Diametro maggiore del cono, questa dimensione deve essere maggiore o uguale al raggio

* ![](/images/CheckBoxFalse.svg) Spring conical : Dai al diametro grande del cono che la dimensione sarà sempre maggiore del raggio
* ![](/images/CheckBoxFalse.svg) Angles : Casella di scelta per attivare la funzione angolo iniziale e angolo finale della molla, deselezionata per impostazione predefinita.  
   Se questa funzione è selezionata, la precisione viene impostata automaticamente a 1 (360 punti per spira, 1 punto = 1 grado)

- 0 deg ![](/images/SpinBox.svg) **Begin** : Angolo iniziale della prima spira della molla.
- 360 deg ![](/images/SpinBox.svg) **End** : Angolo finale dell'ultima spira della molla.

![](/images/Macro_FCSpring_Helix_Variable_02.png)

#### Type line

#### Tipo di linea

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_BSpline.svg) Bspline **BSpline** : Linea di tipo BSpline.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Wire.svg) Wire **Wire** : Linea di tipo Wire.
- ![](/images/CheckBoxFalse.svg) ![](/images/Draft_Point.svg) Points **Points** : Casella di controllo dei punti, se è attivata viene creato un punto in ogni punto.
- ![](/images/CheckBoxFalse.svg) Reverse **Reverse** : Casella di controllo per invertire la direzione della molla

![](/images/Macro_FCSpring_Helix_Variable_03.png)

#### Options

#### Opzione

Questa sezione viene visualizzata se è selezionato l'oggetto. Il tipo di oggetto viene visualizzato in Text Editor

L'oggetto può essere una linea, 2 punti, un cerchio, un contorno ... un asse, la lunghezza della molla viene creata automaticamente

Detection : Cylinder (radius), Sphere (radius), Toroid (radius) , Cone (little radius), Circle (radius), Arc (radius), Ellipse (little radius)

- Normal. : Se uno circo e seletto **Norm** il raggio non e modificato (Difetto)
  - Adapt Rad. : Se il pulsante Normal e attivato, il raggio della molla e datato al raggio della selezione se uno raggio e detetto
- Point Mouse : Se date uno clic mouse sopra una faccia l'asso della molla sarà il punto di coordinate della molla
  - Center Face : Si il pulsante Point Mouse è attivato, il pulsante cambia a Center Face è la molla sarà creata in centro della facia

* ![](/images/CheckBoxFalse.svg) Position **Position** : Se due obbietti sonno selezionate (primo asso secondo molla) potete modificare il posizionamento della molla allungo l'asso creato

- Circle : Se tre punti sonno selezionati potete creare un cerchio che servirà di punto di partenza della molla

![](/images/Macro_FCSpring_Helix_Variable_02_1.png)

#### Position (0)(xx)

#### Position (0)(xx)

(0)(xx) : Number selection(s), length in mm of axis created x 10, Dati e numeri punti per la posizione della molla sopra l'asso

- Begin/End : Posizione della base della molla su l'asso, inizia, meta, fine del asso
- Reverse Spr. : Riversa la molla sopra l'asso
- 0,1 mm ![](/images/SpinBox.svg) : posizione della molla con una precinzione di spostamento di (0.1 mm) a longo l'asso
- Reverse Count. : Riversa il contatore ex: Begin 0 to 10.. or End 0 to 10..
- **Slider** : Posizione rapida della molla a longo l'asso

![](/images/Macro_FCSpring_Helix_Variable_02_2.png)

#### Coil special dimension

#### Spire di lunghezza speciale

- Num: 2 ![](/images/SpinBox.svg) **Numbering of coil** : Numero di spire da modificare. (Defaut : nessuna)

* ![](/images/CheckBoxFalse.svg) Smoothing **Smoothing** Questa casella apre una casella numerica per determinare il grado di lisciatura. Il valore massimo è il valore di precisione -1 (questa opzione è ancora allo stadio di prototipo e il risultato può essere soddisfacente o completamente sbagliato)

- 0,000 mm ![](/images/SpinBox.svg) **Pitch of coil** : Passo delle spire da modificare. (Defaut : nessuna)
- 15.0 mm : Se viene premuto questo pulsante il valore di "Pitch of string" influenza "Pitch of coil" (Questo valore viene allineato automaticamente al valore di Pitch of string)
- 0,000 mm ![](/images/SpinBox.svg) **Radius of coil** : Raggio della spira da modificare. (Defaut : nessuno)
- 20.0 mm : Se viene premuto questo pulsante il valore di "Radius of string" influenza "Radius of coil" (Questo valore viene allineato automaticamente al valore di Radius of string)

* ![](/images/FCSpring_Helix_Variable_Icon_01.png) Accept the value modified : Pulsante da premere per confermare le modifiche definite prima.

- **Text edit** : Questa finestra mostra tutte le spire modificate.
- Clear : Ripulisce l'editor
- Zoom : Pulsante "Zoom" ingrandisce la finestra di modifica del testo

![](/images/Macro_FCSpring_Helix_Variable_04.png)

#### Command

## Comandi

- ![](/images/FCSpring_Helix_Variable_Icon_02.png) Load : Apre una finestra di dialogo per leggere un file **.FCSpring**.
- ![](/images/FCSpring_Helix_Variable_Icon_03.png) Save : Apre una finestra di dialogo per salvare un file **.FCSpring** .
- ![](/images/FCSpring_Helix_Variable_Icon_02b.png) Load Coordinates : Apre una finestra di dialogo per leggere un file **.FCSpringCoor** (tutte le coordinate dei punti di una molla).
- ![](/images/FCSpring_Helix_Variable_Icon_03b.png) Save Coordinates : Apre una finestra di dialogo per salvare un file **.FCSpringCoor** (tutte le coordinate dei punti di una molla).
- ![](/images/FCSpring_Helix_Variable_Icon_04.png) Quit : Esce dalla macro.
- ![](/images/FCSpring_Helix_Variable_Icon_05.png) Reset : Ripristina la configurazione iniziale della macro.
- ![](/images/FCSpring_Helix_Variable_Icon_06.png) Launch : Avvia la macro per creare una molla configurata.

* Help : Questo pulsante visualizza la pagina wiki nel browser FreeCAD.

![](/images/Macro_FCSpring_Helix_Variable_05.png)

## Report view

## Registro degli eventi

La finestra Report visualizzata tutti i valori modificati.

![](/images/Macro_FCSpring_Helix_Variable_06.png)

## Example spring

## Esempio di molla

Esempio di molla modificata

![](/images/Macro_FCSpring_Helix_Variable_07.png)

## Example Report view

## Esempio di rapporto nel Registro degli eventi

All'avvio della macro viene visualizzato l'elenco completo dei giri sotto forma di tabella.

Questi sono i dati della molla precedente visualizzati nella finestra Report
![](/images/Macro_FCSpring_Helix_Variable_08.png)

## Icon

## Icone

Scaricare le immagini e copiarle nel repertorio delle macro.

Cliccare sull'immagine con il tasto destro del mouse e salvarla nella nuova posizione selezionando "Salva oggetto con nome ..."

Pulsanti della barra degli strumenti ![Button](/images/FCSpring_Helix_Variable.png)

Button

Icone della macro

Macro icons

![](/images/FCSpring_Helix_Variable_Icon_01.png) ![](/images/FCSpring_Helix_Variable_Icon_02.png) ![](/images/FCSpring_Helix_Variable_Icon_02b.png) ![](/images/FCSpring_Helix_Variable_Icon_03.png) ![](/images/FCSpring_Helix_Variable_Icon_03b.png) ![](/images/FCSpring_Helix_Variable_Icon_04.png) ![](/images/FCSpring_Helix_Variable_Icon_05.png) ![](/images/FCSpring_Helix_Variable_Icon_06.png)

## Script

## Script

**Macro_FCSpring_Helix_Variable.FCMacro**

Download the macro to Gist [Macro_FCSpring_Helix_Variable](https://gist.github.com/mario52a/68c81c32a0727a693d3a)

## Installation

## Installazione

Il file sopra è una macro sotto forma di codice GitHub. Scaricare il file Zip da GitHub, quindi seguire le istruzioni di installazione delle macro mostrate in [installing FreeCAD macros in Ubuntu](https://wiki.opensourceecology.org/wiki/Installing_Macros_in_FreeCAD).

## Esempi

- ![Valves Assembly IN EX with permit and created by r.tec see Inlet & Exhaust Valves Assembly and Spiralfeder thanks r.tec](/images/Valves_Assembly_IN_EX.png)

  Valves Assembly IN EX with permit and created by r.tec see [Inlet & Exhaust Valves Assembly](http://forum.freecadweb.org/viewtopic.php?f=24&t=14183) and [Spiralfeder](http://forum.freecadweb.org/viewtopic.php?f=13&t=14143) thanks r.tec

* ![](/images/Macro_FCSpring_Helix_Variable_12.png)
* ![](/images/Macro_FCSpring_Helix_Variable_13.png)

* ![](/images/Macro_FCSpring_Helix_Variable_14.png)
* ![](/images/Macro_FCSpring_Helix_Variable_15.png)

* ![](/images/Macro_FCSpring_Helix_Variable_16.png)
* ![](/images/Macro_FCSpring_Helix_Variable_17.png)

* ![](/images/Macro_FCSpring_Helix_Variable_18.png)

- ![Example polygonal Spiral by 3 points](/images/Macro_FCSpring_Helix_Variable_polygonalSpiral00.png)

  Example polygonal Spiral by 3 points

- ![Example polygonal Spiral by 4 points](/images/Macro_FCSpring_Helix_Variable_polygonalSpiral01.png)

  Example polygonal Spiral by 4 points

- [![Difference between Smooth (here 71 with precision 5 (72 points)) and normal](/images/Macro_FCSpring_Helix_Variable_19.png)](/File:Macro_FCSpring_Helix_Variable_19.png  "Difference between Smooth (here 71 with precision 5 (72 points)) and normal")

  Difference between Smooth (here 71 with precision 5 (72 points)) and normal

- ![Example](/images/Macro_FCSpring_Helix_Variable.gif)

  Example

- ![Example create conical spring](/images/Macro_FCSpringHelixVariable_Example_02.gif)

  Example create conical spring

- ![Esempio creare la molla sul cerchio](/images/Macro_FCSpringHelixVariable_Spring_On_Circle.gif)

  Esempio creare la molla sul cerchio

- ![Muovimenti lungo l'asse](/images/Macro_FCSpringHelixVarable_Spring_Along_Axis.gif)

  Muovimenti lungo l'asse

## Links

## Links

La discussione nel forum: [Try to do a Spring](http://forum.freecadweb.org/viewtopic.php?f=3&t=8313&p=68161#p68161)

## In progetto

molla troncata

ammorbidire i raccordi: fatto

modificare il diametro di qualsiasi spira: fatto

## Versione

11/07/2024 version 01.19 delete **"import WebGui"** replaced by **"import webbrowser"** and optimise filter for **OS Linux Mint**

2023/09/01 Version 0.18c adding **FreeCAD.activeDocument().recompute(None,True,True)\***Texte en italique\* "bug" fixed by **Syres** thanks
[How to draw polygonal spirals in Freecad?](https://forum.freecad.org/viewtopic.php?p=703568#p703568)

2023/09/01 Version 0.18b correct (adapt) the code :

```
self.PB_Adapt_Radius.setStyleSheet("background-color: QPalette.Base")

```

to

```
self.PB_Adapt_Radius.setStyleSheet("QPushButton {background-color: QPalette.Base}")

```

2022/03/16 Version 0.18 : adding scrollBar, possibility docking Left or Right, restore the chrono _(time.time())_, memorise the last FilePath

```
####chrono################
import time
global depart ; depart  = 0.0
global arrivee; arrivee = 0.0
def chrono(switch):    # 0=depart autre=stop
#time.strftime('%X %x %Z')#'15:44:07 12/14/19 Paris, Madrid'
    global depart
    global arrivee
    try:
        if switch == 0:
            depart = time.time()#time.clock()
            App.Console.PrintMessage("Chrono begin   : "+str(time.strftime('%X'))+"\n")
        else:
            arrivee = time.time()#time.clock()
            App.Console.PrintMessage("Chrono end     : "+str(time.strftime('%X'))+"\n")
            parcouru = ((arrivee - depart)/60.0)
            App.Console.PrintError("Time execution : "+str("%.3f" % parcouru)+" min"+"\n\n")
        return parcouru
        FreeCADGui.updateGui()
    except Exception: None
####chrono################

```

2020/11/12 Version=01.17 : suppress the timer chrono !!

2020/10/18 Ver 00.16b : i suppress the test on FC 18 line 56, i suppress the timer chrono and i wait one little

2020/05/01 Ver 00.16: correction error file (save and load) cause "label_11_Name" suppressed...

2020/04/11 Ver 01.15: layout and little presentation

2019/05/03 Ver 01.14: compatibile FreeCAD 0.19.16523 (Git)

2019/04/08 Ver 01.13: compatible FreeCAD 0.18.16093 (Git) /Python version: 3.6.6 /Qt version: 5.6.2

03/04/2017: ver 01.12: correction bug line 2314 add "global ui"

11/12/2016: ver 01.11: Aggiunto Posizione della molla sopra l'oggetto selezionato

10/09/2016: ver 01.10: Adding Button "Zoom" enlarge the textedit window

04/09/2016: ver 01.09: add smoothing

16/03/2016: ver 01.08 : correct and add "int()" to debutAngle and finAngle (read file)

02/03/2016: ver 01.07 : add option reverse spring

08/02/2016: ver 01.06 : correct bug angle cause "modifyAngle = int(file.readline().rstrip('\n\r')) # 9" modifyAngle is int() not char

07/01/2015: ver 01.05 : adding "Try ...Except" (data cone) for compatibility with old version

07/01/2015: ver 01.04 : adding spring conical and modify the path to "UserAppData" and adding the icone.

07/12/2014: ver 01.03 : new version with radius coil adjustable

17/11/2014 ver 1.02 : nuova versione con interfaccia grafica e con la possibilità di modificare qualsiasi spira e salvare o caricare i dati su disco.

10/11/2014: (23h20) correction of the modification

```
ligne.Placement = App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

10/11/2014: modify line 44 :

```
a = FreeCAD.ActiveDocument.Line.Placement=App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

con

```
ligne = FreeCAD.ActiveDocument.Line.Placement=App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

6/11/2014 : aggiunto "makeBSpline" e configurazione

## Limitazioni

Durante i test di sweep ho ottenuto questi errori!

- ![For the moment the macro is not adapted for the square, rectangle... Only circle work well](/images/Macro_FCSpring_Helix_Variable_20.png)

  For the moment the macro is not adapted for the square, rectangle...  
  Only circle work well

- ![ACCESS VIOLATION](/images/Macro_FCSpring_Helix_Variable_09.png)

  ACCESS VIOLATION

- ![TCollection_IndexedDataMap](/images/Macro_FCSpring_Helix_Variable_10.png)

  TCollection_IndexedDataMap

- ![Wrong usage of punctual sections](/images/Macro_FCSpring_Helix_Variable_11.png)

  Wrong usage of punctual sections

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCSpring_Helix_Variable/it&oldid=1450787>"
