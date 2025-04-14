---
title: Kreis messen
---

|                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro MeasureCircle                                                                                                                                                                                                                                                     |
| Beschreibung                                                                                                                                                                                                                                                            |
| Compute the radius of a circle by 3 points or a circular edge Versionsmakro : 1.0 Datum der letzten Änderung : 2016-04-08 FreeCAD version : All Herunterladen : [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_MeasureCircle.png) Autor: galou_breizh |
| Autor                                                                                                                                                                                                                                                                   |
| [galou_breizh](/index.php?title=User:Galou_breizh&action=edit&redlink=1 "User:Galou breizh (page does not exist)")                                                                                                                                                      |
| Herunterladen                                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bd/Macro_MeasureCircle.png)                                                                                                                                                                                     |
| Links                                                                                                                                                                                                                                                                   |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                            |
| Macro-Version                                                                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                                                                     |
| Datum der letzten Änderung                                                                                                                                                                                                                                              |
| 2016-04-08                                                                                                                                                                                                                                                              |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                      |
| All                                                                                                                                                                                                                                                                     |
| Standardverknüpfung                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                  |
| Siehe auch                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                         |

## Beschreibung

Dieses Makro zeigt nach der Angabe von drei Punkten oder einer kreisförmigen Kante den berechneten Mittelpunkt und den berechneten Radius eines Kreises an.
Eine Linie wird vom Mittelpunkt zum ersten Punkt auf dem Kreis gezeichnet, der für spätere Messungen verwendet werden kann.

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

## Anwendung

Kopiere das Makro in den Makro-Zielpfad und starte es (siehe [How to install macros](/How_to_install_macros/de "How to install macros/de") für weitere Details).

Wähle die drei Punkte und das Ergebnis wird in dem "Report view" angezeigt.
Kanten können auch ausgewählt werden und zählen als zwei Punkte.
Eine kreisförmige Kante kann auch ausgewählt werden.
Wenn zwei Kanten ausgewählt wurden, wird der Endpunkt der zweiten Kante in der Berechnung nicht berücksichtigt.

Man kann entweder die Elemente auswählen und dann das Makro starten oder das Makro ohne Auswahl starten und die Elemente nach dem Start des Makros auswählen.
Wenn nicht genug Elemente ausgewählt werden, bevor das Makro gestartet wird, wird man aufgefordert, die fehlenden Elemente auszuwählen.

## Code

Die neueste Version des Makros ist zu finden auf [MeasureCircle.FCMacro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/MeasureCircle.FCMacro), aber der einfachste Weg zur Installation dieses Makros ist die Nutzung des [Addon-Managers](/Std_AddonMgr/de "Std AddonMgr/de").

ToolBar Icon ![](/images/Macro_MeasureCircle.png)

**Macro_MeasureCircle.FCMacro**

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_MeasureCircle/de&oldid=1106150>"
