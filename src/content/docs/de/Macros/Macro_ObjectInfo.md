---
title: ObjectInfo
---

|                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro ObjectInfo                                                                                                                                                                                                                                                             |
| Beschreibung                                                                                                                                                                                                                                                                 |
| Liefert Informationen zum ausgewählten Objekt. Versionsmakro : 1.0 Datum der letzten Änderung : 2012-11-09 FreeCAD version : Until 0.17 **and PyQt4** Herunterladen : [Werkzeugleistensymbol](https://wiki.freecad.org/images/2/29/Macro_ObjectInfo.png) Autor: keithsloan52 |
| Autor                                                                                                                                                                                                                                                                        |
| [keithsloan52](/index.php?title=User:Keithsloan52&action=edit&redlink=1 "User:Keithsloan52 (page does not exist)")                                                                                                                                                           |
| Herunterladen                                                                                                                                                                                                                                                                |
| [Werkzeugleistensymbol](https://wiki.freecad.org/images/2/29/Macro_ObjectInfo.png)                                                                                                                                                                                           |
| Links                                                                                                                                                                                                                                                                        |
| [Makros Rezepte](/Macros_recipes/de "Macros recipes/de") [Wie installiere ich Makros](/How_to_install_macros/de "How to install macros/de") [So passen Sie Symbolleisten an](/Customize_Toolbars/de "Customize Toolbars/de")                                                 |
| Macro-Version                                                                                                                                                                                                                                                                |
| 1.0                                                                                                                                                                                                                                                                          |
| Datum der letzten Änderung                                                                                                                                                                                                                                                   |
| 2012-11-09                                                                                                                                                                                                                                                                   |
| FreeCAD-Version(s)                                                                                                                                                                                                                                                           |
| Until 0.17 **and PyQt4**                                                                                                                                                                                                                                                     |
| Standardverknüpfung                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                       |
| Siehe auch                                                                                                                                                                                                                                                                   |
| [Arch Survey](/Arch_Survey/de "Arch Survey/de")                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                              |

## Beschreibung

Dieser Arbeitsbereich gibt Volumeninformationen, Flächeninhalte, den Massenschwerpunkt und Trägheitsmomente des ausgewählten Objekts aus.

![](/src/assets/images/ObjectInfoIt.png)

## Installation

Wenn Sie mit Linux arbeiten, müssen Sie im versteckten Ordner .FreeCAD einen Ordner mit dem Namen "Mod" erstellen, der sich in Ihrem Home-Ordner befindet. Legen Sie dann im Ordner "Mod" einen Ordner mit dem Namen "Info" an und extrahieren Sie den Inhalt des Archivs. Unter Windows habe ich keine Ahnung, wo das wäre. Verwenden Sie dasselbe Verfahren für Windows in C:\Program Files\FreeCAD\Mod.

## Anwendung

Starten Sie dann FreeCAD, öffnen Sie Ihre STEP-Datei und wechseln Sie mit dem Workbench-Switcher zur Workbench "Info" oder über das Menü Ansicht → Workbench. Wählen Sie nun Ihren Körper aus und klicken Sie auf das Symbol "Info". In der linken Taskleiste werden einige Informationen zum Modell angezeigt, darunter Volumen, Oberfläche, Massenmittelpunkt und Trägheitsmoment.

## Code

```
import webbrowser

##########
# WorkBenche
# Code used to download the zip file from FreeCAD
##########

FreeCAD.Console.PrintMessage("\n" + "You must download the Info.zip file in the author github KeithSloan/FreeCAD_Infosite" + "\n")
FreeCAD.Console.PrintMessage("http://keithsloan.dynu.com/Keith&Jenny/" + "\n")
webbrowser.open("https://github.com/KeithSloan/FreeCAD_Info/archive/master.zip")
```

## Verweise

Ein FreeCAD-Benutzer hat ein benutzerfreundliches "Info" Modul erstellt, das man hier erhalten kann: <http://www.sloan-home.co.uk/FreeCAD/Info/Info.html>

Vom Forum [Info Workbench - Help with icons please.](http://forum.freecadweb.org/viewtopic.php?f=10&t=3185)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_ObjectInfo/de&oldid=1358672>"
