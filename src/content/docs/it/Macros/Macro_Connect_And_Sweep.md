---
title: Collega con Sweep
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Collega con Sweep                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| La nuova GUI della nuova versione modificata per lo HD dpi (QGridLayout) esegue solo FC versione 0.18 e successive. Questa macro crea facilmente una connessione tra due oggetti, un oggetto e un punto o tra due punti (il centro degli oggetti sono i punti iniziale e finale dello sweep) possono essere selezionati da un cerchio poligonale di ellisse configurabile. È disponibile una funzione di discretizzazione per creare punti marker configurabili per il taglio di linee in sezione o il taglio con una quota sul punto viene creato per tutte le coordinate. Una funzione di faccia o filo duplicata da utilizzare con l'operazione Sweep e Loft. Operazione Sweep e Loft direttamente con la macro. Centraggio sulla faccia Versione macro: 0.13 Ultima modifica: 2024-07-21 Versione FreeCAD: 0.18 e più Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/c/c9/Macro_Connect_And_Sweep.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/c/c9/Macro_Connect_And_Sweep.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.13                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2024-07-21                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.18 e più                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Descrizione

Questa macro crea una connessione tra due oggetti, un oggetto e un punto o tra due punti. La connessione va da un centro all'altro centro degli oggetti, la sua forma è configurabile, e può essere circolare, poligonale o ellittica. E disponibile una funzione di discretizzazione per creare punto di riferimento configurabili per tagliare linee in sezione o tagliare con una dimensione.  
È disponibile una funzione di discretizzazione per creare punti marker configurabili per il taglio di linee in sezione o il taglio con una quota sul punto viene creato per tutte le coordinate.  
Una funzione di faccia o filo duplicata da utilizzare con l'operazione Sweep e Loft.  
Operazione Sweep e Loft direttamente con la macro.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/3ec67a3711202dab69592ce53b938924/raw/984cd58c1d64dd391062025cfa82a698c7268e66/Macro_Connect_And_Sweep.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/3ec67a3711202dab69592ce53b938924/raw/984cd58c1d64dd391062025cfa82a698c7268e66/Macro_Connect_And_Sweep.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/3ec67a3711202dab69592ce53b938924/raw/984cd58c1d64dd391062025cfa82a698c7268e66/Macro_Connect_And_Sweep.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/3ec67a3711202dab69592ce53b938924/raw/984cd58c1d64dd391062025cfa82a698c7268e66/Macro_Connect_And_Sweep.FCMacro>">raw code</a>

![](/images/Macro_Connect_And_Sweep_00.png)

Macro_Connect_And_Sweep

## Uso

Eseguire la macro, selezionare gli oggetti o i punti, scegliere la forma e impostare i parametri, poi fare clic su Create.

![](/images/Macro_Connect_And_Sweep_01.png)

Macro_Connect_And_Sweep

![](/images/Macro_Connect_And_Sweep_Discretize.png)

Discretize

![](/images/Macro_Connect_And_Sweep_Duplicate.png)

Duplicate

![](/images/Macro_Connect_And_Sweep_Sweep.png)

Sweep

![](/images/Macro_Connect_And_Sweep_Loft.png)

Loft

![](/images/Macro_Connect_And_Sweep_Reset.png)

Reset

## Icone

Questi file devono essere copiati nella directory delle macro

(Per scaricarle fare clic con il pulsante destro sull'immagine e poi su "Salva con nome ..."(version 0.17))

![Center](/images/Macro_Connect_And_Sweep_CE.png) ![Top left](/images/Macro_Connect_And_Sweep_TL.png) ![Top rigth](/images/Macro_Connect_And_Sweep_TR.png) ![Low left](/images/Macro_Connect_And_Sweep_LL.png) ![Low rigth](/images/Macro_Connect_And_Sweep_LR.png)

L'icona di **Macro_Connect_And_Sweep** per personalizzare la barra degli strumenti: ![Icon for the button](/images/Macro_Connect_And_Sweep.png)

## Script

**Macro_Connect_And_Sweep.FCMacro**

Scaricare la macro da Gits [**Macro_Connect_And_Sweep.FCMacro**](https://gist.github.com/mario52a/3ec67a3711202dab69592ce53b938924)

## Esempio

Creare un percorso e una tubazione con la Macro Connect And Sweep e la [Macro Replica](http://www.freecadweb.org/wiki/index.php?title=Macro_Repro_Wire/it) ![](/images/Macro_ReproWire.png)

- ![The sweep to work](/images/Macro_Connect_And_Sweep_02.png)

  The sweep to work

- ![Selezionare due punti o impostare le opzioni ed eseguire lo sweep](/images/Macro_Connect_And_Sweep_03.png)

  Selezionare due punti o impostare le opzioni ed eseguire lo sweep

- ![Repeat the operation if needed](/images/Macro_Connect_And_Sweep_04.png)

  Repeat the operation if needed

- ![selezionare il bordo del cilindro ed eseguire la Macro Repro Wire](/images/Macro_Connect_And_Sweep_05.png)

  selezionare il bordo del cilindro ed eseguire la [Macro Repro Wire](/Macro_Repro_Wire "Macro Repro Wire") ![](/images/Macro_ReproWire.png)

- ![viene creato il cerchio, attivare lo strumento Sweep](/images/Macro_Connect_And_Sweep_06.png)

  viene creato il cerchio, attivare lo strumento Sweep ![](/images/Part_Sweep.png)

- ![Selezionare il cerchio e il percorso poi eseguire lo sweep](/images/Macro_Connect_And_Sweep_07.png)

  Selezionare il cerchio e il percorso poi eseguire lo sweep

- ![Easy ?](/images/Macro_Connect_And_Sweep_08.png)

  Easy ?

## Esempio animato

![](/images/Macro_Connect_And_Sweep_Sweep2.gif)

{clear}}

Obietto é Obietto , la connessione boundBox centro Obietto 1 é boundBox centro Obietto 2
![](/images/Connect_And_Sweep_01_Object_Object.gif)

Obietto SubObject, la connessione boundBox centro Obietto 1 é boundBox centro Subobject 1
![](/images/Connect_And_Sweept_02_Object_SubObject.gif)

SubObject SubObject, la connessione boundBox centro Subobject 1 é boundBox centro Subobject 2
![](/images/Connect_And_Sweep_03_SubObject_SubObject.gif)

Connessione And Sweep Direzione uno Obietto selezionato or Subobject selzionato
![](/images/Connect_And_Sweep_4_Direction.gif)

Rileva errore nella selezione del modo scelto, se viene creato un errore di selezione, il modo passa alla modo 3 e la linea della modo 3 viene colorata in arancione
![](/images/Connect_And_Sweep_05_Detect_Error.gif)

## Versione

ver 0.13 2024/07/24 : eliminato webGui e sostituito con webbrowser

ver 0.12 2020/07/05 : include le icone dentro il codice sorgente

ver 00.11b 2020-02-22 : aggiunto di uno test "try: except" al testo FreeCAD version

ver 00.11 2020-02-13 : modificata per HD dpi QGridLayout eseguire solo FC versione 0.18 e successive  
 Per la versione precedente vedere [Macro_Connect_And_Sweep.FCMacro](https://gist.githubusercontent.com/mario52a/3ec67a3711202dab69592ce53b938924/raw/b3554916e0dce63644a2d4d3f88ef114b5e1e390/Macro_Connect_And_Sweep.FCMacro)

ver 00.10 2020-01-09 : centraggio su la faccia

ver 00.09 2020-01-06 : aggiunto di Tab Duplicate (come Macro reproWire), Sweep, Loft.

ver 00.08 2019-12-23 : l'aggiunta della funzione discretizza il filo e crea punti marker per usare i punti come punti di riferimento

ver 00.07 2019-06-26 : upgrade aggiunto mode Object è Object, Object è SubObject, SubObject é SubObject selezione una linea è altre minori cambiamenti

00.06 18/06/2019 : aggiunto "Recompute" sessione line

00.05 05/04/2019 : compatibile Python 3

00.04 22/02/2017 : upgrade the search path

00.03 15/09/2016 : add create pipe

00.02 13/06/2016 : add options choice angle path rectangle and ellipse

00.01 07/06/2016 : add option solid or not centring rectangle or not

00.00 05/06/2016 :

## Link

La discussione [Scripting point to point tubing](http://forum.freecadweb.org/viewtopic.php?f=22&t=15833) nel forum di FreeCAD.

Questa macro si basa sul codice di microelly2, vedere [Looking for some helpful GUI-commands](http://forum.freecadweb.org/viewtopic.php?t=7029#p56746)

Altra discussione sul foro [Macro_Connect_And_Sweep](https://forum.freecadweb.org/viewtopic.php?f=22&t=35432)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Connect_And_Sweep/it&oldid=1466153>"
