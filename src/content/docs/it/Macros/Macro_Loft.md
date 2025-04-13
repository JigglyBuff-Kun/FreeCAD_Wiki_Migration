---
title: Loft
---

|                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Loft                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                                              |
| Crea un loft con i profili selezionati. Scritto appositamente per la realizzazione di un facile loft con linee generate dalla [Macro Texture](https://www.freecadweb.org/wiki/Macro_Texture) (ma può essere adatto e utilizzato per loft comuni) Versione macro: 00.04 Ultima modifica: 2019-07-03 Versione FreeCAD: Tutte Download: [ToolBar Icon](https://wiki.freecad.org/images/2/29/FCCreaLoft.png) Autore: Mario52 |
| Autore                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                  |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [ToolBar Icon](https://wiki.freecad.org/images/2/29/FCCreaLoft.png)                                                                                                                                                                                                                                                                                                                                                      |
| Link                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                                                 |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                                           |
| 00.04                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2019-07-03                                                                                                                                                                                                                                                                                                                                                                                                               |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                      |
| Tutte                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                                              |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                                                |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Macro Texture](/Macro_Texture/it "Macro Texture/it")                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Descrizione

Questa macro è stata scritta appositamente per facilitare il lofting con le linee generate dalla [Macro Texture](/Macro_Texture/it "Macro Texture/it") (ma può essere utilizzata anche per i loft comuni)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro>">raw code</a>

![](/images/Texture_001_Logo.png)

Texture_001_Logo

## Utilizzo

Copiare la macro e l'icona nella propria cartella macro.

- **Sort** : Ordina i dati in ingresso.
- **Reverse** : Inverte l'ordine dei dati.
- **Reset / Upgrade**: Questo pulsante ha molte funzioni:
  1. Se non c'è nessuna selezione nella vista 3D viene mostrato il pulsante Upgrade.  
     Selezionare un oggetto nella vista 3D, o nella vista combinata e fare clic su questo pulsante per aggiornare i dati nella macro, il pulsante si trasforma in Reset.
  2. Se uno o più oggetti sono selezionati prima dell'avvio della macro viene mostrato il pulsante Reset.  
     Tutti gli oggetti selezionati vengono visualizzati nella finestra della macro.  
     Dopo aver ordinato con **Sort** o **Reverse** i dati visualizzati, si può usare il pulsante Reset per ripristinare l'ordine originale.  
     Se si fa clic nella vista 3D o si deselezionano tutti gli oggetti, questo pulsante serve per il reset della macro.  
     Se alla lista si aggiunge uno o più oggetti questo pulsante serve per aggiornare i dati.
- **Select all** : Seleziona tutti gli oggetti del documento.
- **SpinBox** : Questa casella permette di "saltare" x linee (di default =1, vengono utilizzati tutti gli oggetti).
- **Quit** : Esce dalla macro.
- **CheckBox** Se questa casella viene attivata, lo stato dell'elaborazione è visibile in tempo reale, se non è attivata si vede solo l'avanzamento sulla barra (in questo è più veloce) (selezionata per impostazione predefinita).
- **Launch the Lofting** : Avvia il Lofting e ripristina la macro. Il numero indica la quantità di elementi selezionati che saranno effettivamente trattati quando si utilizza lo spinBox "salta"

### L'interfaccia

![FCCreaLoft002](/images/Macro_FCCreaLoft_01.png)

FCCreaLoft002

## Script

L'icona per la barra degli strumenti ![](/images/FCCreaLoft.png)

Scaricare la macro da Gist [**Macro_FCCreaLoft.FCMacro**](https://gist.github.com/mario52a/c477f892233d6abe02df5e97af828ff4)

## Link

La discussione nel forum [Texture](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893&start=10)

La [Macro Texture](/Macro_Texture/it "Macro Texture/it")

## Versione

ver 00.00 : 06/02/2016

ver 00.02 : 09/02/2016 : Add button "Select all" and little option displayed in the button Launch (number selections) and (real number loft)

ver 00.03 : 09/02/2016 : minor (display on button)

ver 00.04 : 03/07/2019 : adapt to Python 3

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Loft/it&oldid=1475571>"
