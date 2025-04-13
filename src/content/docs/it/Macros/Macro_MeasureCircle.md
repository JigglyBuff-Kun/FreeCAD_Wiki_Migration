---
title: Misura cerchio
---

|                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Misura cerchio                                                                                                                                                                                                                                                 |
| Descrizione                                                                                                                                                                                                                                                    |
| Calcola il raggio di un cerchio da 3 punti o da uno spigolo circolare Versione macro: 1.0 Ultima modifica: 2016-04-08 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_MeasureCircle.png) Autore: galou_breizh |
| Autore                                                                                                                                                                                                                                                         |
| [galou_breizh](/index.php?title=User:Galou_breizh&action=edit&redlink=1 "User:Galou breizh (page does not exist)")                                                                                                                                             |
| Download                                                                                                                                                                                                                                                       |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_MeasureCircle.png)                                                                                                                                                                            |
| Link                                                                                                                                                                                                                                                           |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                       |
| Versione macro                                                                                                                                                                                                                                                 |
| 1.0                                                                                                                                                                                                                                                            |
| Data ultima modifica                                                                                                                                                                                                                                           |
| 2016-04-08                                                                                                                                                                                                                                                     |
| Versioni di FreeCAD                                                                                                                                                                                                                                            |
| All                                                                                                                                                                                                                                                            |
| Scorciatoia                                                                                                                                                                                                                                                    |
| _Nessuna_                                                                                                                                                                                                                                                      |
| Vedere anche                                                                                                                                                                                                                                                   |
| _Nessuno_                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                |

## Descrizione

Questa macro calcola e riporta il raggio e il centro di un cerchio dati 3 punti o uno spigolo circolare.
Traccia una linea dal centro del cerchio al primo vertice, che può essere utilizzato per misurazioni future.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro>">raw code</a>

## Uso

Copiare la macro nella propria cartella delle macro ed eseguirla (per maggiori dettagli vedere [Come installare le macro](/How_to_install_macros/it "How to install macros/it")).

Basta selezionare i vertici e il risultato viene mostrato nel pannello Report.
I bordi sono selezionabili e valgono come due vertici.
Può anche essere selezionato un bordo circolare.
Se sono selezionati due bordi, il vertice finale del secondo bordo non viene utilizzato nel calcolo.

È possibile selezionare gli elementi e poi lanciare la macro oppure lanciare la macro senza selezione e poi selezionare gli elementi dopo il lancio.
Se non ci sono abbastanza elementi selezionati prima di lanciare la macro, è necessario selezionare gli elementi mancanti.

## Codice

L'ultima versione della macro si trova in [MeasureCircle.FCMacro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro) ma il modo più semplice per installare questa macro è tramite [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it").

ToolBar Icon ![](/images/Macro_MeasureCircle.png)

**Macro_MeasureCircle.FCMacro**

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MeasureCircle/it&oldid=1186342>"
