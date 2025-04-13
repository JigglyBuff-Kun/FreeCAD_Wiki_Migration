---
title: Centra facce e bordi
---

:::caution
Ora questi strumenti sono inclusi nell'ambienteManipulator. Installare questo workbench per gli ultimi aggiornamenti su questi strumenti.
:::

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Centra e allinea facce e bordi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Allinea gli oggetti vincolando le facce o i bordi. Ora questi strumenti sono inclusi nell'ambiente [Manipulator](/Manipulator_Workbench/it "Manipulator Workbench/it"). Installare questo workbench per gli ultimi aggiornamenti su questi strumenti Versione macro: 1.5.3 Ultima modifica: 2017-10-01 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ee/Macro_Center_Align_Objects_with_Faces_or_Edges.svg) [Mover-icon](https://www.freecadweb.org/wiki/images/3/3d/Manipulator_Mover.svg) [Caliper-icon](https://www.freecadweb.org/wiki/images/1/10/Manipulator_Caliper.svg) Autore: easyw-fc |
| Autore                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [easyw-fc](/index.php?title=User:Easyw-fc&action=edit&redlink=1 "User:Easyw-fc (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ee/Macro_Center_Align_Objects_with_Faces_or_Edges.svg) [Mover-icon](https://www.freecadweb.org/wiki/images/3/3d/Manipulator_Mover.svg) [Caliper-icon](https://www.freecadweb.org/wiki/images/1/10/Manipulator_Caliper.svg)                                                                                                                                                                                                                                                                                                                                                         |
| Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Versione macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.5.3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2017-10-01                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Descrizione

Questa macro allinea gli oggetti tramite i vincoli di facce o bordi

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py)_

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
    "https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/easyw/FreeCAD_Macros/master/Align%20Objects/CenterAlignObjectswFacesEdges.py>">raw code</a>

## Strumenti

\*_Aligner_- ![](/images/Macro_Center_Align_Objects_with_Faces_or_Edges.svg): un set di strumenti per spostare e allineare le parti 3D

\*_Mover_- ![](/images/Manipulator_Mover.svg): una serie di strumenti per spostare e ruotare parti 3D su diversi assi

\*_Measure_- ![](/images/Manipulator_Caliper.svg): una serie di strumenti per misurare le parti 3D, con alcune funzioni di Snap e di misurazione di Raggio, Lunghezza, Angolo.

Questi supporti lavorano con **Part, App::Part e Body objects**.
Ogni strumento può essere **Floating** o **Docked Left o Right**.

---

## Vecchie riferimenti

Questa macro applica i seguenti vincoli:

- vincolo concentrico tra parti non cilindriche;
- vincolo nel centro di facce e bordi.
- Funziona anche con i nuovi contenitori Body e App::Part, funziona lo stesso anche con la gerarchia STEP.

![](/images/Center-align-faces.png)

![](/images/Center-align-faces-in-action.gif)

![](/images/Center-align-Body-objects.gif)

![](/images/Utube-alignment-tool-tutorial.png)

[Aligning tool video tutorial](https://youtu.be/qzixT157jJU)

![](/images/Utube-alignment-STEP-models.png)

[Aligning STEP models video tutorial](https://youtu.be/aQcPqhlgHBU)

## Utilizzo

Per vincolare facce o bordi tra parti non cilindriche, basta aprire un documento FC, lanciare la Macro, selezionare due o più facce o bordi da allineare, fare clic sul pulsante Allinea e il gioco è fatto!

## Script

L'icona per la barra degli strumenti ![](/images/Macro_Center_Align_Objects_with_Faces_or_Edges.png)

**CenterAlignObjectswFacesEdges.py**

Dopo aver scaricato il file dalla pagina GitHub  
<https://github.com/easyw/FreeCAD_Macros/tree/master/Align%20Objects>

il codice:

<https://github.com/easyw/FreeCAD_Macros/raw/master/Align%20Objects/CenterAlignObjectswFacesEdges.py>

è necessario copiare il file nella directory delle macro.

Per maggiori informazioni vedere la pagina [Come installare le macro](/How_to_install_macros/it "How to install macros/it")

## Link

Nel forum : [Faces or Edges constraint among non cylindrical parts Macro](http://forum.freecadweb.org/viewtopic.php?f=22&t=18655)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Center_Align_Objects_with_Faces_or_Edges/it&oldid=1355944>"
