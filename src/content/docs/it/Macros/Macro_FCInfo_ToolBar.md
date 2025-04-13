---
title: FCInfo ToolBar
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro FCCInfo ToolBar                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Fornisce informazioni sulla forma selezionata e può visualizzare una conversione di raggio, diametro, lunghezza, area, volume ... in diverse unità (metriche e imperiali) in una barra degli strumenti in real tempo. Le informazioni da visualizzare sono parametrizzabili nel parametro di FreeCAD. Macro version: 00.05b Last modified: 2023/09/06 FreeCAD version: 0.18 and more Download: [ToolBar Icon](https://wiki.freecad.org/images/9/9d/FCInfoToolBar.png) Author: Mario52 |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [ToolBar Icon](https://wiki.freecad.org/images/9/9d/FCInfoToolBar.png)                                                                                                                                                                                                                                                                                                                                                                                                                |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                      |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 00.05b                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2023/09/06                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.18 and more                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Arch Survey](/Arch_Survey/it "Arch Survey/it"), [Macro FCInfo](/Macro_FCInfo/it "Macro FCInfo/it"), [Macro FCInfoGlass](/Macro_FCInfoGlass/it "Macro FCInfoGlass/it")                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Descrizione

Fornisce informazioni sulla forma selezionata e può visualizzare una conversione di raggio, diametro, lunghezza, area, volume ... in diverse unità (metriche e imperiali) in una barra degli strumenti. Le informazioni da visualizzare sono parametrizzabili nel parametro di FreeCAD.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/e382adbe41747788ad15a18eb206a872/raw/c825afd430d9124a77f9688824d12a78b2219348/FCInfo_ToolBar.FCMacro>">raw code</a>

![FCInfo_ToolBar](/images/Macro_FCInfo_ToolBar_00.png)

FCInfo_ToolBar

![FCInfo_ToolBar](/images/FCInfo_ToolBar_Animate01.gif)

Barra degli strumenti FCInfo in azione

## Utilizzo

Dopo aver eseguito la macro, andare a Menu → Strumenti → Modifica parametri ... :BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar

e aggiungere le informazioni da visualizzare.

Le informazioni complete vengono visualizzate nella finestra ToolTip, l'opzione selezionata è visibile se viene visualizzato di uno "\*".

Usate il pulsante reset dopo aver cambiato un'opzione nella finestra dei parametri.

L'unità delle dimensione può essere selezionata:
km, hm, dam, m, dm, cm, mm, µm, nm, pm, fm, inch, link, foot, yard, perch, chain, furlong, mile, league, nautique.

![FCInfo_ToolBar the info toolTip](/images/Macro_FCInfo_ToolBar_01.png)

FCInfo_ToolBar the info toolTip

## Opzioni

Le opzioni si trovano nel parametro di FreeCAD:

_Menu → Strumenti → Modifica parametri ... :BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar_

- **_switch_User_ToolbarIconSize_**

  - se = `false`: l'icona della barra degli strumenti rispetta il valore di FreeCAD per la dimensione dell'icona
  - se = `true`: l'icona prende i valori della variabile **seT_User_sizeIconX** e **seT_User_sizeIconY**

- **_seT_User_sizeIconX_**

  - imposta il valore X dell'icona

- **_seT_User_sizeIconY_**

  - imposta il valore Y dell'icona

- **_seT_User_setFixed_Tool_Bar_Width_**

  - imposta la lungunese del ToolBar

- **_seT_User_setFixed_Tool_Bar_Height_**

  - imposta la altessa del ToolBar

- **_switch_User_Work_With_Preselection_**

  - Lavora con la preselezione, i dati sono calcolate in tempo reale

- **_seT_User_StyleSheetColorToolBar_**

  - imposta il colore della barra degli strumenti in formato HTML esempio: **#F8E6E0'**.
  - se il valore è **0'** la barra degli strumenti prende il colore del sistema

- **_seT_User_DecimalValue_**

  - dare il numero di decimali del numero (Default **2**)

- **_seT_User_TextHeigthValue_**

  - dare l'altezza del testo della barra degli strumenti

- **_switch_User_Display_objectName_**

  - visualizza il Nome ()

- **_switch_User_Display_SubElementName_**

  - visualizza il nome del sotto-elemento ()

- **_switch_User_Display_ShapeType_**

  - visualizzare il Shape type (TyS:)

- **_switch_User_Display_TypeId_**

  - visualizzare il TypeId (TyI:)

- **_switch_User_Display_RadiusObject_**

  - visualizzare il raggio e il diametro (r:) [D:]

- **_switch_User_Display_RadiusSurface_**

  - visualizza il raggio e il diametro sulla superficie (rS:) [DS:]

- **_switch_User_Display_LengthObject_**

  - Visualizza la lunghezza del bordo selezionato o il perimetro della faccia selezionata
    - (L:) visualizza la lunghezza del filo, linea, bordo selezionato
    - (P:) visualizza il perimetro della fascia selezionata

- **_switch_User_Display_SommeAllEdgesObject_**

  - visualizza la lunghezza totale dei bordi (edges) di l'obietto selezionato (Se:)

- **_switch_User_Display_NumberFacesMesh_**

  - visualizza il numero di facce dell'oggetto Mesh (Nf:)

- **_switch_User_Display_NumberPointsMeshPoints_**

  - visualizza il numero di punti dell'oggetto Mesh (Np:)

- **_switch_User_Display_NumberEdgesMesh_**

  - visualizza il numero di bordi dell'oggetto Mesh (Ne:)

- **_switch_User_Display_AreaObject_**

  - visualizza la superficie dell'oggetto (A:)

- **_switch_User_Display_AreaSubObject_**

  - visualizza la superficie della faccia selezionata (Af:)

- **_switch_User_Display_VolumeObject_**

  - visualizza il volume dell'oggetto (V:)

- **_switch_User_Display_BsplineObject_**

  - visualizza il numero di nodi della Bspline selezionata
    - (BSpline) visualizza i nodi del BSpline
    - (BSrA) BSPline raggio approximativo del primo raggio del BSpline
    - (BSS) BSPline Points Shape numero di punti del BSPline (caso Shape)
    - (BSc) BSPline Points Sub Obbietto numero di punti del sub obbietto selezionato (case Edge)

- **_switch_User_Display_CentreObject_**

  - visualizza il centro del cerchio (se viene rilevato un cerchio) o dell'oggetto selezionato (Ce:)

- **_switch_User_Display_CentreBoundBoxObject_**

  - visualizza il centro del boundingBox dell'oggetto (BBCe:)

- **_switch_User_Display_Position_**

  - visualizza le coordinate del punto puntato dal mouse (Pos:)

- **_switch_User_Display_Position_2D_CAD_**

  - visualizza le coordinate del punto 2D Cad (x, y) 0,0 = angolo in basso a sinistra

- **_switch_User_Display_Position_2D_BMP_**

  - visualizza le coordinate punto 2D Bmp (x, y) 0,0 = angolo in alto a sinistra

- **_switch_User_NotInfoOnBeginning_**

  - se è `false` l'informazione (questa informazione) non viene visualizzata
  - se è `true` l'informazione viene visualizzata

- **_seT_User_UnitSymbolSquare_**

  - dare il simbolo quadrato (Predefinito **2**)

- **_seT_User_UnitSymbolCube_**

  - datare il simbolo del cubo (Predefinito **3**)

- **_seT_User_UnitSymbolMicro_**
  - dare il simbolo micro (Predefinito **u**)

## Per l'esecuzione automatica

#### in linea di comando

Nella tua scorciatoia _verifica il tuo percorso giusto_.

"Percorso_completo_di_FreeCAD" "Percorso_completo_della_macro.FCMacro"

esempio:

```
"C:/FreeCAD_0.20.26858_Win-LPv12.5.4_vc17.x-x86-64/bin/FreeCAD.exe" "C:/Users/User/AppData/Roaming/FreeCAD/Macro/FCInfo_ToolBar.FCMacro"

```

#### nella directory Mod

1. Dopo aver installato la macro con [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it")
2. Creare la directory _FCInfo_ToolBar_.
3. Copiare la macro FCInfo_ToolBar.FCMacro (copiare non spostare) nella directory _FCInfo_ToolBar_ e rinominarla in FCInfo_ToolBar.py
4. Creare un file chiamato InitGui.py
5. Incolla il codice in InitGui.py:

```
#### FC Version: 0.1 #16/02/2022
#### Mario52
#### FCInfo_ToolBar : mini FCInfo ####
#
import importlib
from importlib import reload
import FreeCAD, FreeCADGui
App = FreeCAD
Gui = FreeCADGui

switch_User_NotRunAuto = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar").GetBool("switch_User_NotRunAuto")
## switch_User_NotRunAuto 0 (False) = run the macro in begin
## switch_User_NotRunAuto 1 (True)  = not run automatic the macro

if switch_User_NotRunAuto == False:
    import FCInfo_ToolBar
    #reload(FCInfo_ToolBar)
    FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macros/FCMmacros/FCInfo_ToolBar").SetBool("switch_User_NotRunAuto", False)
    #FreeCAD.Console.PrintMessage("InitGui Ok FCInfo_ToolBar" + "\n")

```

1. salvare il file
2. eseguire FreeCAD
3. se la macro non viene eseguita (normale) eseguire la macro FCInfo_ToolBar.FCMacro come una normale macro
4. al prossimo avvio di FreeCAD la macro deve partire automaticamente

enjoy

## Collegamento

Discussioni sul forum [Feature request: coordinates display](https://forum.freecadweb.org/viewtopic.php?f=8&t=66294)

## Versione

versione 00.05b 06/09/2023: corretto bug calcolo 2D Bmp

versione 00.05 09/06/2023 : aggiunte coordinate 2D Cad (x, y) 0,0 = angolo in basso a sinistra o Bmp (x, y) 0,0 = angolo in alto a sinistra, raggioSuperficie  
crea il test "if" ' _switch_User_NotInfoOnBeginning'_ dimenticato!!

versione 00.04 28/06/2023 : correzione fogli di stile e:

```
sommeEdgesSTR = str(sommeEdges)

```

sostituito da:

```
sommeEdgesSTR = str(round(sommeEdges * uniteM, seT_User_DecimalValue)) + " " + uniteMs

```

version: (00.02 +) 00.03 2022/03/22 : add somme all edges

version: 00.02 2022/03/14 : add calcul in real time (with preselection), dimension of toolBar, add info mesh and points

version: 00.01 2022/02/16 :

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCInfo_ToolBar/it&oldid=1345625>"
