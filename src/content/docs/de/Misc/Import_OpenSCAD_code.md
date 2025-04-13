---
title: OpenSCAD Code importieren
---
|  |
| --- |
| Tutorium |
| Thema |
| OpenSCAD Code importieren |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 30 Minuten |
| Autoren |
| r-frank |
| FreeCAD-Version |
| 0.16.6704 |
| Beispieldateien |
|  |
| Siehe auch |
| *None* |
|  |

## Einführung

OpenSCAD ist, wie FreeCAD, ein quelloffenes 3D CAD Programm. Während FreeCAD einen visuellen Ansatz verwendet, nutzt OpenSCAD eine Programmierschnittstelle, um die 3D Operationen durchzuführen.
Der OpenSCAD Arbeitsbereich kann verwendet werden, um OpenSCAD Objektcode zu importieren und um Zugang zu einigen der mit OpenSCAD möglichen Netzoperationen zu erhalten.

## Installation von OpenSCAD

* Linux Anwender können aus den entsprechenden Distributions Repositorien wie Debian, openSUSE, Mint, Unbuntu usw. oder von der [OpenSCAD Heimseite](http://www.openscad.org/) installieren.
* Mac Anwender können die Binärdateien von der [OpenSCAD Homepage](http://www.openscad.org/) herunterladen.
* Windows Anwender können das Programm von der [OpenSCAD Heimseite](http://www.openscad.org/) herunterladen.

Da nur die ausführbare OpenSCAD Datei von FreeCAD benötigt wird, können Windows Anwender die portable Version installieren, wenn sie möchten.

## Konfigurieren des OpenSCAD Arbeitsbereichs in FreeCAD

* Öffne FreeCAD
* Wechsle zum [OpenSCAD-Arbeitsbereich](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de")
* Wähle Bearbeiten → Einstellungen → OpenSCAD aus dem Hauptmenü
  + Verweise FreeCAD auf die ausführbare OpenSCAD-Datei (Abschnitt: Allgemeine OpenSCAD-Einstellungen)
  + alle anderen Werte auf der Einstellungsseite können auf den Standardwerten belassen werden

## Das Beispielmodell

Hier verwenden wir die Datei [example005.scad](https://github.com/openscad/openscad/blob/master/examples/Old/example005.scad) aus den (alten) OpenSCAD Beispielen, es kann aber auch jede andere scad-Datei verwendet werden.  
![](/images/TutorialOpenSCAD_SampleFile.jpg)

![](/images/TutorialOpenSCAD_SampleFile.jpg)

## Importieren des Modells in FreeCAD

* In FreeCAD wähle einfach Datei → Öffnen und wähle die .scad Datei, die du importieren möchtest.
* Es ist nicht wichtig, welcher Arbeitsbereich aktiviert ist, der OpenSCAD Arbeitsbereich selbst wird nur benötigt, wenn du spezielle Funktionen auf dein Modell anwendest.
* FreeCAD importiert die OpenSCAD Datei und baut einen Baum mit Grundkörpern und booleschen Operationen auf.
* Tutorial beendet

![](/images/TutorialOpenSCAD_ImportFile.jpg)

![](/images/TutorialOpenSCAD_ImportFile.jpg)

## Verwandtes

* [FreeCAD Wie Importieren Exportieren](/index.php?title=FreeCAD_Howto_Import_Export/de&action=edit&redlink=1 "FreeCAD Howto Import Export/de (page does not exist)")
* [Import Export Einstellungen](/Import_Export_Preferences/de "Import Export Preferences/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_OpenSCAD_code/de&oldid=1553109>"