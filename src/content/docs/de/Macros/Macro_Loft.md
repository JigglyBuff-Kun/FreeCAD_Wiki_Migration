---
title: Loft
---

|                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Loft                                                                                                                                                                                                                                           |
| Beschreibung                                                                                                                                                                                                                                         |
| Erzeugt ein Loft aus ausgewählten Linienzügen. Versionsmakro : 00.04 Datum der letzten Änderung : 2019-07-03 FreeCAD version : Alle Herunterladen : [Werkzeugleistensymbol](https://wiki.freecad.org/wiki/images/2/29/FCCreaLoft.png) Autor: Mario52 |
| Autor                                                                                                                                                                                                                                                |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                              |
| Herunterladen                                                                                                                                                                                                                                        |
| [Werkzeugleistensymbol](https://wiki.freecad.org/wiki/images/2/29/FCCreaLoft.png)                                                                                                                                                                    |
| Links                                                                                                                                                                                                                                                |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                         |
| Macro-Version                                                                                                                                                                                                                                        |
| 00.04                                                                                                                                                                                                                                                |
| Datum der letzten Änderung                                                                                                                                                                                                                           |
| 2019-07-03                                                                                                                                                                                                                                           |
| FreeCAD-Version(s)                                                                                                                                                                                                                                   |
| Alle                                                                                                                                                                                                                                                 |
| Standardverknüpfung                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                               |
| Siehe auch                                                                                                                                                                                                                                           |
| [Macro Texture](/Macro_Texture/de "Macro Texture/de")                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                      |

## Beschreibung

Speziell für einfaches Lofting mit Linien geschrieben, die mit dem [Macro Texture](/Macro_Texture/de "Macro Texture/de") erzeugt wurden (kann aber für gewöhnliche Lofts geeignet sein und verwendet werden)

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

![](/src/assets/images/Texture_001_Logo.png)

Texture_001_Logo

## Anwendung

Das Makro und das Symbol in das Makroverzeichnis kopieren.

- **Sort**: Sortiert die Dateneinträge.
- **Reverse**: Die Reihenfolge der Daten wird umgekehrt.
- **Reset / Upgrade**: Diese Schaltfläche hat so viele Funktionen:
- # Wenn eine Auswahl in 3Dview angezeigt wird, wird diese Schaltfläche Upgrade angezeigt.
  Wählen Sie Ihr Objekt in der 3D-Ansicht oder in der Kombinationsansicht aus und klicken Sie auf diese Schaltfläche, um die Daten im Makro zu aktualisieren. Die Schaltfläche ändert sich Reset.
- # Wenn vor dem Laufmakro ein oder mehrere Objekte ausgewählt werden, wird diese Schaltfläche Reset angezeigt.
  Alle ausgewählten Objekte werden im Makrofenster angezeigt.  
   Nach **Sort** oder **Reverse** die angezeigten Daten, wird diese Schaltfläche Reset verwendet, um zur ursprünglichen Reihenfolge zurückzukehren.  
   Wenn Sie in das 3DView klicken oder alle Objekte deaktivieren, werden diese Objekte deaktiviert Die Schaltfläche wird zum Zurücksetzen auf Makro verwendet.  
   Wenn Sie ein oder mehrere Objekte in die Liste aufnehmen, wird diese Schaltfläche verwendet.
- **Select all**: Alle Objekte im Dokument auswählen.
- **SpinBox**: Inkrementieren Sie den Sprung x Elemente (Standardeinstellung 1 alle Objekte werden verwendet).
- **Quit**: Beenden Sie das Makro.
- **CheckBox** Wenn die CheckBox markiert ist, wird der Arbeitsfortschritt angezeigt, wenn nicht nur ProgressBar funktioniert (diese Methode ist schneller) (standardmäßig aktiviert).
- **Launch the Lofting**: Lofting starten und Makro zurücksetzen. Die Nummer der Auswahl wird angezeigt und die tatsächliche Zahl wird erhöht, wenn die SpinBox "jump" verwendet wird

### Die Schnittstelle

![FCCreaLoft002](/src/assets/images/Macro_FCCreaLoft_01.png)

FCCreaLoft002

## Skript

Das Symbol für die Werkzeugleiste ![](/src/assets/images/FCCreaLoft.png)

Laden Sie das Makro in herunter Gist [**Macro_FCCreaLoft.FCMacro**](https://gist.github.com/mario52a/c477f892233d6abe02df5e97af828ff4)

## Links

Die Forumsdiskussion [Texture](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893&start=10)

Das [Macro Texture](/Macro_Texture/de "Macro Texture/de")

## Version

ver 00.00 : 06/02/2016

ver 00.02 : 09/02/2016 : Add button "Select all" and little option displayed in the button Launch (number selections) and (real number loft)

ver 00.03 : 09/02/2016 : minor (display on button)

ver 00.04 : 03/07/2019 : adapt to Python 3

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Loft/de&oldid=1362219>"
