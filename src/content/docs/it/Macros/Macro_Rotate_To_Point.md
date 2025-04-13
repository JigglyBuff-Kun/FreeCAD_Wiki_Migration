---
title: Ruotare su uno punto
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Rotatzione su Punto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Nuva versione GUI modicato per HD dpi (QGridLayout) funziona solo su FC version 0.18 e più alto (PySide2 Qt5) Questa macro fa ruotare un oggetto su se stesso intorno all'asse scelto. Si puo salvare in un file tutte le coordinate lavorate e salvarlo in un file "Coordinate [(0.06,1.30,0.0), (85.0,0.0,0.0)]" o in una macro completa per creare un'animazione Per la precedente versione vedi [Macro_Rotate_To_Point](https://gist.githubusercontent.com/mario52a/2fc48333deca5a31e6232c29a9db5e4c/raw/9231d5b1d218357305cc0404e46bf6c107509a0e/Macro%2520Rotate%2520To%2520Point.FCMacro) e installa manualmente. Versione macro: 00.09 Ultima modifica: 2021/02/25 Versione FreeCAD: 0.18 e più Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d1/Macro_Rotate_To_Point.svg) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/d/d1/Macro_Rotate_To_Point.svg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 00.09                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2021/02/25                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.18 e più                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Descrizione

Questa macro permette di ruotare un oggetto su se stesso scegliendo l'asse di rotazione. L'asse può essere il centro del contenitore dell'oggetto

- il centro BoundBox
- il centro di massa
- la direzione di un filo
- l'ultimo punto cliccato

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/2fc48333deca5a31e6232c29a9db5e4c/raw/d9419d4bb13e36940eb2f56c3c469ea4182827ee/Macro%2520Rotate%2520To%2520Point.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/2fc48333deca5a31e6232c29a9db5e4c/raw/d9419d4bb13e36940eb2f56c3c469ea4182827ee/Macro%2520Rotate%2520To%2520Point.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/2fc48333deca5a31e6232c29a9db5e4c/raw/d9419d4bb13e36940eb2f56c3c469ea4182827ee/Macro%2520Rotate%2520To%2520Point.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/2fc48333deca5a31e6232c29a9db5e4c/raw/d9419d4bb13e36940eb2f56c3c469ea4182827ee/Macro%2520Rotate%2520To%2520Point.FCMacro>">raw code</a>

## Uso

1. Carica la macro con [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it")
2. Lancia la macro
3. Clic uno obietto
4. Celia una orientazione

![Interface Rotate to point](/images/Macro_Rotate_To_Point_00.png)

### [1] Position Rotation

_First operation_

![[1] Position Rotation](/images/Macro_Rotate_To_Point_Position-Rotation00.png)

- ![](/images/CheckBoxFalse.svg) Translation: If this checkBox is ![](/images/CheckBoxTrue.svg) checked the rotation is disabled, the object placement is done on the axis selected.

_The SpinBox 1,00000 Degrees ![](/images/SpinBox.svg) is reinitialized to `0.0` and coloured in red_

- The time passed with your favourite macro is displayed.

### [2] Translation Rotation

_Second operation_

![[2]Translation Rotation](/images/Macro_Rotate_To_Point_Translation-Rotation00.png)

### Point Rotation

- Bounbox Center : Seleziona come asse di rotazione il centro del BoundBox
- Center of Mass : Seleziona come asse di rotazione il Centro di massa
- Point Clicked : Seleziona come asse di rotazione l'ultimo punto cliccato 1: Selezionare l'oggetto 2: usare il tasto CTRL per scegliere un punto esterno all'oggetto
  - 1: seleziona uno obietto
  - 2: utilizza CTRL per scegliere un oggetto in più

### Axis Rotation

- Rotation(Z) Yaw : asse Yaw
- Rotation(Y) Pitch : asse Pitch
- Rotation(X) Roll : asse Roll
- Rotation(D) Direction: Ruota intorno alla linea, filo selezionato

_The SpinBox 1,00000 Degrees ![](/images/SpinBox.svg) is reinitialized to `0.0` and coloured in red_

### Coordinates Point clicked

- DoubleSpinBox : Coordinate X del clic del mouse (modificabile solo nel modo "Point Clicked")
- DoubleSpinBox : Coordinate Y del clic del mouse (modificabile solo nel modo "Point Clicked")
- DoubleSpinBox : Coordinate Z del clic del mouse (modificabile solo nel modo "Point Clicked")

### Work

_Third operation_

![Macro Rotate To Point Work](/images/Macro_Rotate_To_Point_Work_00.png)

- ![](/images/CheckBoxFalse.svg) Translation: Se questo checkBox è ![](/images/CheckBoxTrue.svg) checked la rotazione è disabilitata, il posizionamento dell'oggetto viene eseguito sull'asse selezionato.

* Point: viene creato un punto per visualizzare l'asse di rotazione del punto: X rossa, Y verde, Z blu
* Line Edit: la modifica della linea mostra la coordinata originale dell'asse selezionato + i dati di input forniti nella casella di selezione
* 0,0000 ![](/images/SpinBox.svg): immettere la modifica
* Apply: applica la modifica all'oggetto
* La coordinata viene visualizzata

### Data

![Rotate To Point Data-To-Save](/images/Macro_Rotate_To_Point_Data-To-Save_00.png)

- Finestra per la visualizzazione delle coordinate memorizzate
- Save: salva i dati nel file
- Clear: elimina e pulisci l'editor di testo
- Delete: elimina la riga selezionata
- Memorize: memorizza e visualizza le coordinate

* ![](/images/CheckBoxFalse.svg) Macro:
  - Modalità normale ![](/images/CheckBoxFalse.svg) Macro la coordinata viene salvata in questa modalità: **[(0.06,1.30,0.0), (85.0,0.0,0.0)],**
  - Modalità macro ![](/images/CheckBoxTrue.svg) 0,0 Coordinate la coordinata viene salvata in una macro completa direttamente nella directory delle macro con lo stesso nome dell'estensione del documento .FCMacro
    - **Opzioni della macro**
    - **\_\_ pompe\_\_\_\_engrenage\_\_**: Nome del documento
    - **\_\_ 22 Coordinates\_\_**: numero di coordinate
    - **Digita il tasto Q per uscire**: Esci dalla macro
    - **Digita il tasto D per diminuire la velocità**: Diminuisci la velocità dell'animazione
    - **Digita il tasto I per aumentare la velocità**: Aumenta la velocità dell'animazione
    - **Digitare il tasto P per mettere in pausa/continuare o il tasto RETURN o ESCAPE**: Pausa/Anime
    - **Digitare il tasto S per procedere passo dopo passo (tasto RETURN o ESCAPE per continuare)**: Passo dopo passo
    - **Digitare la chiave M per questo messaggio**: Visualizza questo memo
    - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
* ![](/images/CheckBoxFalse.svg) Memo on Click:
  - Modalità normale ![](/images/CheckBoxFalse.svg) Memo on Click: i dati non vengono salvati sulla finestra, è necessario premere il pulsante Memo (2) per salvare le coordinate
  - Modalità Memo on Click ![](/images/CheckBoxTrue.svg) Memo on Demand: i dati vengono salvati automaticamente facendo clic sul pulsante Apply

### Command

![Rotate To Point Command](/images/Macro_Rotate_To_Point_Command_00.png)

- Quit: chiude la macro
- Original: dopo aver modificato i dati dell'oggetto puoi tornare alla posizione originale, se non hai deselezionato l'oggetto corrente.
- 0,0,0: questa opzione posiziona l'oggetto nella coordinata di base `0, 0, 0`
- Reset: reimposta i dati nella macro e deseleziona l'oggetto corrente (stesso clic del mouse nella [vista 3D](/3D_view/it "3D view/it"))

ToolBar PNG Icon ![](/images/Macro_Rotate_To_Point.png) and ToolBar SVG Icon ![](/images/Macro_Rotate_To_Point.svg)

## Esempi

![](/images/Macro_Rotate_To_Point_01.gif)

## Links

## Link

Le mie macro su Gist [mario52a](https://gist.github.com/mario52a)

## Versione

2022/10/17 Version=00.11 : new organization GUI, Follow the path, View on object, Button Copy, adding menu Image on macro saved, add "QtWidgets.QScrollArea()"

2021/03/08 Version=00.10 : adding zoom on object clicked, memory value, imposted values

2021/02/25 Version=00.09 : correct the macro : cause multi object possible

```
App.ActiveDocument.getObject(p[0]).Placement

```

instead

```
myObject.Placement

```

2021/02/22 Version=00.08c : correct the center facePoint (19h26 Paris)

2021/02/22 Version=00.08b : correct the center facePoint (17h23 Paris)

2021/02/22 Version=00.08 : adding save macro with multi objects moved

2021/01/24 Version=00.07 : adding option R: reverse

2021/01/12 ver 00.06 : adding the Data section and more options

2020/03/07 ver 00.05.2 : corretto il bug translation delete "direction = myObject.Placement.Rotation.multVec(direction)"

2020/03/01 ver 00.05.1 : corretto la posizione del test "FreeCAD version"

2020/02/29 ver 00.05 : conversione per Hdpi (Layout) e aggiunto Direction

06/04/2019 ver 00.04 : Python 3

29/03/2018 ver 00.03 : commento delle linee "FreeCAD.ActiveDocument.recompute()" il cambiamento di posizione e tropo lento con la versione di FreeCAD 0.17.... vedere [FC0.17 recompute strange behaviour (regression)](https://www.forum.freecadweb.org/viewtopic.php?f=10&t=27732&p=224195#p224195)

27/03/2017 ver 00.02 : modificazione dello spinbox "Pos" adesso accetta i numeri negativi

05/03/2017 ver 00.01 : agggiunto 3 spinbox per visualizzare le coordinate X Y Z del clic del mouse

04/03/2017 ver 00.00

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Rotate_To_Point/it&oldid=1345059>"
