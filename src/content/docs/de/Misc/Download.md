---
title: Herunterladen
---
## Aktuelle stabile Version

Die Version 1.0 von FreeCAD wurde am 18.11.2024 veröffentlicht. Um herauszufinden, was es Neues gibt, siehe die [Veröffentlichungshinweise](/Release_notes_1.0/de "Release notes 1.0/de").

SHA256-Prüfsummen zur Überprüfung der Integrität eines Downloads findet man auf der [[1]](https://github.com/FreeCAD/FreeCAD/releases/tag/1.0.0).

Frühere Versionen können von der Seite der veröffentlichten [Versionen](https://github.com/FreeCAD/FreeCAD/releases/) heruntergeladen werden.

|  |  |  |
| --- | --- | --- |
| [Install instructions](/Installing_on_Windows "Installing on Windows")  [64-bit installer](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Windows-x86_64-installer-1.exe)  [64-bit portable version (.7z)](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Windows-x86_64-py311.7z) | [Install instructions](/Installing_on_Mac "Installing on Mac")  [ARM (M-series) disk image](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-macOS-arm64-py311.dmg)  [Intel disk image](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-macOS-x86_64-py311.dmg) | [Install instructions](/Installing_on_Linux "Installing on Linux")  [x86\_64 AppImage](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Linux-x86_64-py311.AppImage)  [aarch64 AppImage](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Linux-aarch64-py311.AppImage) |

### Hinweise für Windows-Anwender

* Die folgenden Windows-Versionen werden unterstützt: 64-bit 8/10/11.
* Das Paket kann auch vom [Chocolatey](https://chocolatey.org/packages/freecad)-Manager installiert werden. Das Chocolatey-Paket ist zurzeit nicht auf dem neuesten Stand

### Hinweise für macOS-Anwender

* MacOS 10.12 Sierra ist die älteste unterstützte Version.

### Hinweise für GNU/Linux-Anwender

Die meisten Distributionen führen FreeCAD in ihren offiziellen Repositorien, aber wenn die Distribution nicht einem rollierenden Veröffentlichungs Modell folgt, kann die von ihnen bereitgestellte Version veraltet sein. Stattdessen kannst Du das AppImage oben herunterladen, als ausführbar markieren und ohne Installation starten.

Bitte schau auf der Seite [Installation unter Linux](/Installing_on_Linux/de "Installing on Linux/de") nach weiteren Installationsoptionen, einschließlich täglicher Pakete für Ubuntu und Derivaten.

Eine portable Version, welche keine Installation benötigt, kann durch Starten von FreeCad mit diesen Befehlen erreicht werden:

```
cd path/to/directory_containing_AppImage/
chmod +x ./name_of_AppImage_file.AppImage
HOME="$PWD/Settings" FREECAD_USER_HOME="$PWD/Settings" ./name_of_AppImage_file.AppImage

```

Weitere Informationen über die Umgebungsvariablen von FreeCAD können auf der [Konfigurationsseite](/Start_up_and_Configuration/de#Environment_variables "Start up and Configuration/de") gefunden werden.

## Entwicklungsversionen

Die Entwicklung von FreeCAD ist aktiv.

* Für Entwicklungs-Builds und Entwicklungsquellcode siehe die Seite [Weekly-Builds](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds). Weekly-Builds stehen für Linux, MacOS und Windows zur Verfügung. Für Linux stehen auch Daily-Builds zur Verfügung: [snap package](/Ubuntu_Snap "Ubuntu Snap")'s edge channel oder [FreeCAD daily PPA](https://launchpad.net/~freecad-maintainers/+archive/ubuntu/freecad-daily) (letzterer nur für auf Debian basierende Distributionen).
* Um den neuesten Quellcode zu kompilieren, siehe die Seite [Kompilieren](/Compiling/de "Compiling/de").

## Zusätzliche Module und Makros

Die FreeCAD-Gemeinschaft stellt viele zusätzliche Module und Makros zur Verfügung. Sie können einfach aus FreeCAD heraus mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr "Std AddonMgr") installiert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Download/de&oldid=1509192>"