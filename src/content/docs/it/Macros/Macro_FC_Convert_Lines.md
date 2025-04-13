---
title: Converti Linee
---

|                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Converti Linee                                                                                                                                                                                                                                                                              |
| Descrizione                                                                                                                                                                                                                                                                                 |
| Converte la linea dell'oggetto, da continua a tratteggiata, ecc. assegnandole lo spessore indicato. Versione macro: 00.07b Ultima modifica: 2020-11-09 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e2/Macro_FCConvertLines.png) Autore: mario52 |
| Autore                                                                                                                                                                                                                                                                                      |
| [mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                     |
| Download                                                                                                                                                                                                                                                                                    |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/e2/Macro_FCConvertLines.png)                                                                                                                                                                                                        |
| Link                                                                                                                                                                                                                                                                                        |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                    |
| Versione macro                                                                                                                                                                                                                                                                              |
| 00.07b                                                                                                                                                                                                                                                                                      |
| Data ultima modifica                                                                                                                                                                                                                                                                        |
| 2020-11-09                                                                                                                                                                                                                                                                                  |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                                                         |
| Scorciatoia                                                                                                                                                                                                                                                                                 |
| _Nessuna_                                                                                                                                                                                                                                                                                   |
| Vedere anche                                                                                                                                                                                                                                                                                |
| _Nessuno_                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                             |

## Description

## Descrizione

Questa macro converte la linea dell'oggetto, da continua a tratteggiata, a tratto e punto, a puntini, a zig zag, e le assegna lo spessore indicato.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/3d719574089a5f9044ec/raw/812769b6b296a1da2e9c8cd8153ad7266fe80f8d/Macro_FCConvertLines.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/3d719574089a5f9044ec/raw/812769b6b296a1da2e9c8cd8153ad7266fe80f8d/Macro_FCConvertLines.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/3d719574089a5f9044ec/raw/812769b6b296a1da2e9c8cd8153ad7266fe80f8d/Macro_FCConvertLines.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/3d719574089a5f9044ec/raw/812769b6b296a1da2e9c8cd8153ad7266fe80f8d/Macro_FCConvertLines.FCMacro>">raw code</a>

![](/images/Macro_FCConvertLines_00.png)

ConvertLines Dash, Dash dot, Dash dot dot

## Usage

## Utilizzo

Copiare la macro nella cartella macro e avviarla da
FCConvertLines Gui

![FCConvertLines Gui](/images/Macro_FCConvertLines_01.png)

FCConvertLines Gui

![FCConvertLines Gui](/images/Macro_FCConvertLines_01.png)

FCConvertLines Gui

Prima sezione:

Cut line (Attivo di default)

![FCConvertLines](/images/Macro_FCConvertLines_02.png)

FCConvertLines

- Selezionare una o più linee nella vista 3D
- **SpinBox** : per inserire il numero di tagli o la distanza dei tagliati ... (di default è visualizzato suffisso predefinito del numero di tagli "x Cut")
- **Create L.** : Se questa casella è selezionata viene creata la linea
- **Dimension** : Se viene selezionata questa casella il numero inserito è considerato una lunghezza, quindi il suffisso cambia in "x.000 Dim" e vengono accettati 3 decimali
- **Bicolor** : Se questa casella è selezionata le linee create sono alternativamente colorate in bianco e in rosso, se non è selezionata il colore è il colore definito con il tasto Color
- **Points** : Se questa casella è selezionata, viene creato un punto e il colore è il colore definito in Bicolor oppure
- Sono disponibili i colori di **Options lines**

Seconda sezione :

Tipo di linea: Dash

![FCConvertLines](/images/Macro_FCConvertLines_03.png)

FCConvertLines

- Il riquadro al fondo della finestra della macro cambia in linea Dash
- Selezionare una o più linee nella vista 3D
- **Line A** : lunghezza del tratto (vedere **A** nella schermata)
- **Space B** : lunghezza dello spazio (vedere **B** nella schermata)
- Le linee sono create secondo le specifiche di configurazione stabilite nelle opzioni delle linee

Terza sezione:

Tipo di linea: DashDot

![FCConvertLines](/images/Macro_FCConvertLines_04.png)

FCConvertLines

- Il riquadro al fondo della finestra della macro cambia in linea DashDot
- Selezionare una o più linee nella vista 3D
- **Line A** : lunghezza del tratto (vedere **A** nella schermata)
- **Space B** : lunghezza dello spazio (vedere **B** nella schermata) (Può essere diverso da D)
- **Line 2 C** : lunghezza del tratto (vedere **C** nella schermata)
- **Space 2 D** : lunghezza dello spazio (vedere **D** nella schermata) (Può essere diverso da B)

Quarta sezione:

Tipo di linea : DashDotDot

![FCConvertLines](/images/Macro_FCConvertLines_05.png)

FCConvertLines

- Il riquadro al fondo della finestra della macro cambia in linea DashDotDot
- Selezionare una o più linee nella vista 3D
- **Line A** : lunghezza del tratto (vedere **A** nella schermata)
- **Space B** : lunghezza dello spazio (vedere **B** nella schermata)
- **Line 2 C** : lunghezza del tratto (vedere **C** nella schermata)
- **Space 2 D** : lunghezza dello spazio (vedere **D** nella schermata)

Quinta sezione:

Tipo di linea : ZigZag

![FCConvertLines](/images/Macro_FCConvertLines_06.png)

FCConvertLines

- Lo schermo sul fondo della macro cambia in linea ZigZag
- Questa linea e creata
- **Number heads** : numero di totale teste della linea
- **\_\_\_\_\_140.0\_\_\_\_\_** : la lunghezza totale della linea e calcolata automaticamente e informato immediatamente
- **Begin A** : comincio della linea fino il comincio della prima testa , questa dimensione sarà la stessa ché l'ultima sezione della linea (vedi **A** su l'imagine)
- **Dimension B** : dimensione tra il comincio e la fine della testa (vedi **B** su l'imagine)
- **Gap C** : dimensione della testa (vedi **C** su l'imagine)
- **Height D** : altezza della testa (vedi **D** su l'imagine)
- **Number E** : numero di teste contiguo (vedi **E** su l'imagine)
- Le opzioni **Plane** e **Options lines** sono disponibile

Sesta sezione:

Tipo di linea : Hand

![FCConvertLines](/images/Macro_FCConvertLines_07.png)

FCConvertLines

- Questa linea e creata
- **Length A** : la lunghezza totale della linea (vedi **A** su l'imagine)
- **Height B** : altezza della linea (vedi **B** su l'imagine)
- **Wave** : compressione or no della onda (vedi **Wave** su l'imagine)
- Le opzioni **Plane** e **Options lines** sono disponibile

Settima sezione:

Options line :

![FCConvertLines](/images/Macro_FCConvertLines_08.png)

FCConvertLines

Queste opzione sono disponibile per tutti menu

- \_\_2,00 Width\_\_ : spessore della linea
- \_\_2,00 Point S\_\_ : dimensione dei punti della linea
- Color : colore della linea questo bottone prende il colore scelto (se dentro il menu "Cut line" la casella "Bicolor" e selezionata questa opzione non e utilizzata)

Ottavo sezione :

Opzione Plane

Questa sezione e valida solo per **"ZigZag"** e **"Hand"**

![FCConvertLines](/images/Macro_FCConvertLines_09.png)

FCConvertLines

- **XY** : Piano XY
- **YZ** : Piano YZ
- **XZ** : Piano XZ

Nona sezione :

Bottoni

![FCConvertLines](/images/Macro_FCConvertLines_10.png)

FCConvertLines

- Save type: la linea configurata viene salvata in un unico file (un file per un tipo di linea). Durante il salvataggio di un file un intestazione è predeterminato a seconda del menù scelto (ad esempio: Dash viene salvato, nella finestra di salvataggio viene visualizzato "Dash\_.FCConvertL" è possibile modificare a "Dash_my_config_10.FCConvertL" o il nome che si desidera ... questo metodo permette acuisce chiaro)
- Load type: caricare un file di una linea configurata
- Name type line\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_: nome del tipo configurato questo nome viene salvato nel file
- Reset: ripristinare i dati di nella configurazione originale
- Create Comp: questo pulsante crea il composto con le linee create (dieci righe selezionate = un composto)
- Create: creare le linee separatamente (dieci righe selezionate = dieci linee create)
- Quit: uscire dalla macro

## I fili devono essere copiati dentro vostro repertorio di insieme la macro (10 fili immagine)

**L' icona per la vostra toolBar**

**The icon for the toolBar**

![Macro_FCConvertLines](/images/Macro_FCConvertLines.png)

Macro_FCConvertLines

**Title**

![ConvertLines_Title](/images/Macro_FCConvertLines_Title.png)

ConvertLines_Title

**Line Dash** :

![ConvertLines_Dash](/images/Macro_FCConvertLines_Dash.png)

ConvertLines_Dash

**Line DashDot** :

![ConvertLines Dash dot](/images/Macro_FCConvertLines_DashDot.png)

ConvertLines Dash dot

**Line DashDotDot** :

![ConvertLines Dash dot dot](/images/Macro_FCConvertLines_DashDotDot.png)

ConvertLines Dash dot dot

**Line Zigzag** :

![ConvertLines_Zigzag](/images/Macro_FCConvertLines_Zigzag.png)

ConvertLines_Zigzag

**Line Hand** :

![ConvertLines_Hand](/images/Macro_FCConvertLines_Hand.png)

ConvertLines_Hand

**View** :

![ConvrtLines_View-front](/images/Macro_FCConvrtLines_View-front.png) ![ConvrtLines_View-right](/images/Macro_FCConvrtLines_View-right.png) ![ConvrtLines_View-right](/images/Macro_FCConvrtLines_View-top.png)

## Script

## Script

Copiare la macro **Macro_FCConvertLines.FCMacro** dentro vostro repertorio dei macros

Lo script su Gist [Macro_FCConvertLines.FCMacro](https://gist.github.com/mario52a/3d719574089a5f9044ec)

ToolBar icon ![](/images/Macro_FCConvertLines.png)

**Macro_FCConvertLines.FCMacro**

## Examples

## Esempi

Esempi dot, dash dot, dash dot, dash dot dot

![](/images/Macro_FCConvertLines_11b.png)

Esempi hand, zigzag

![](/images/Macro_FCConvertLines_11.png)

Esempio hand

![](/images/Macro_FCConvertLines_012.png)

Tutte le linee sono create con le specifiche di configurazione impostate nelle opzioni delle linee

Esempio hand (manuale) con cui si può creare una bella onda sinusoidale o una linea totalmente anarchica

![](/images/Macro_FCConvertLines_013.png)

Esempio di conversione ShapeString in Sketch (Le curve non sono autorizzate per la conversione Shape to Sketch)

![](/images/ShapeString_To_Sketch.gif)

## Versione

ver 00.07b 09/11/2020 correct bug # (ajoute recompute() pour corriger)# Cannot compute Inventor representation for the shape of Shape. aggiunto Linea con Label

ver 00.07 13/05/2017 corretto bug dopo aver creato una linea "Alternate ...." le dimensione non ritornavano alle dimensione volute.

ver 00.06 20/02/2017 correzione della precisione del taglio (cambiato "numberOfPoints = longueur" in "numberOfPoints = (longueur + 1)")

ver 00.05 11/01/2017 modificazione metodo di ricerca del path per le macros

ver 00.04 05/09/2016 setPointSize(8.0)

ver 00.02 18/02/2016

ver 00.01 19/01/2016

ver 00.00 19/01/2016

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FC_Convert_Lines/it&oldid=1184110>"
