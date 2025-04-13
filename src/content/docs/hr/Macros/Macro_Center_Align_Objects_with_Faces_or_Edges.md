---
title: Center Align Objects with Faces or Edges
---

:::caution
Ovi su alati sada uključeni uManipulator Workbench. Instalirajte ovu radnu površinu za najnovija ažuriranja tih alata.
:::

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Središnja lica dijelova                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Opis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Ova makronaredba poravnava objekte preko ograničenja lica ili rubova. Ovi su alati sada uključeni u [Manipulator Workbench](https://github.com/easyw/Manipulator). Instalirajte ovu radnu površinu za najnovija ažuriranja tih alata. Makronaredba verzije : 1.5.3 Datum zadnje izmjene : 2017-10-01 Verzija FreeCAD : All Preuzimanje datoteka : [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ee/Macro_Center_Align_Objects_with_Faces_or_Edges.svg) [Mover-ico](https://www.freecadweb.org/wiki/images/8/8b/Mover-ico.png) [Caliper-ico](https://www.freecadweb.org/wiki/images/e/ee/Caliper-ico.png) Autor : easyw-fc |
| Autor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [easyw-fc](/index.php?title=User:Easyw-fc&action=edit&redlink=1 "User:Easyw-fc (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Preuzimanje datoteka                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ee/Macro_Center_Align_Objects_with_Faces_or_Edges.svg) [Mover-ico](https://www.freecadweb.org/wiki/images/8/8b/Mover-ico.png) [Caliper-ico](https://www.freecadweb.org/wiki/images/e/ee/Caliper-ico.png)                                                                                                                                                                                                                                                                                                                                                                    |
| Linkovi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Makro recepti](/index.php?title=Macros_recipes/hr&action=edit&redlink=1 "Macros recipes/hr (page does not exist)") [Kako instalirati makronaredbe](/How_to_install_macros/hr "How to install macros/hr") [Kako prilagoditi alatne trake](/Customize_Toolbars/hr "Customize Toolbars/hr")                                                                                                                                                                                                                                                                                                                                           |
| Verzija                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.5.3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Datum zadnje izmjene                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2017-10-01                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Verzije FreeCAD-a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Zadani prečac                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Vidi također                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Opis

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

## Alati

\*_Aligner_- ![](/images/Aligner-ico.png): skup alata za pomicanje i poravnavanje 3D dijelova

\*_Mover_- ![](/images/Mover-ico.png): skup alata za pomicanje i okretanje 3D dijelova na različitim osima

\*_Measure_- ![](/images/Caliper-ico.png): skup alata za mjerenje 3D dijelova, s nekim mjerama Snap i Radius, Length, Angle.

Ovi pomoćnici rade s **Part, App :: Part i Body objektima**.
Svaki Alat može biti **Plutajući** ili **Usidren lijevo ili desno**.

---

## OLD Reference

Ovaj makronaredba pokriva sljedeća ograničenja:

- Koncentrično ograničenje među necilindričnim dijelovima;
- Ograničenje na središnja lica and/or rubove.
- Radi i sa novim Body i App :: Part kontejnerima, kao i sa STEP hijerarhijom.

![](/images/Center-align-faces.png)

![](/images/Center-align-faces-in-action.gif)

![](/images/Center-align-Body-objects.gif)

![](/images/Utube-alignment-tool-tutorial.png)

[Aligning tool video tutorial](https://youtu.be/qzixT157jJU)

![](/images/Utube-alignment-STEP-models.png)

[Aligning STEP models video tutorial](https://youtu.be/aQcPqhlgHBU)

## koristite

Lica ili rubovi ograničavaju se među necilindričnim dijelovima: Samo otvorite FC dokument, pokrenite Macro i odaberite dva ili više Faces/Edges koje želite poravnati. Kliknite na gumb Align i to je to!

## Skripta

Ikona za vašu alatnu traku![](/images/Macro_Center_Align_Objects_with_Faces_or_Edges.png)

**CenterAlignObjectswFacesEdges.py**

After downloading the file here  
GitHub page

<https://github.com/easyw/FreeCAD_Macros/tree/master/Align%20Objects>

code:

<https://github.com/easyw/FreeCAD_Macros/raw/master/Align%20Objects/CenterAlignObjectswFacesEdges.py>

you need to copy the file to your macro directory.

[How to install macros](/How_to_install_macros "How to install macros")

## Link

Forum : [Faces or Edges constraint among non cylindrical parts Macro](http://forum.freecadweb.org/viewtopic.php?f=22&t=18655)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Center_Align_Objects_with_Faces_or_Edges/hr&oldid=692095>"
