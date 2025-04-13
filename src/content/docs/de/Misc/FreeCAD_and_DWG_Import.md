---
title: FreeCAD und DWG Import
---
< Back to [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

## Warum ist es schwierig, DWG Dateien in FreeCAD zu unterstützen?

Das DWG-Format ist ein proprietäres binäres Dateiformat, das von FreeCAD nicht direkt unterstützt wird. Es erfordert einen externen Dateikonverter eines Drittanbieters, der DWG-Dateien in DXF-Dateien umwandelt und umgekehrt.

## Was benötige ich, um DWG-Dateien importieren zu können?

### LibreDWG

* Homepage: <https://www.gnu.org/software/libredwg/>
* Licenz: [GPLv3-or-later](https://savannah.gnu.org/projects/libredwg/)
* Optional, wird verwendet, um den Import und Export von DWG-Dateien zu ermöglichen

GNU-LibreDWG ist eine freie C-Bibliothek zum Verarbeiten von DWG-Dateien. Sie zielt darauf ab, ein freier Ersatz für die Open Design Alliance Drawings SDK-Bibliotheken zu sein. Nicht vergessen, dass libreDWG noch in der Entwicklung ist und es noch nicht alle Elemente des DWG-Formats unterstützt.

#### Installation Windows

Die passenden [pre-compiled Windows Binär-Dateien](https://github.com/LibreDWG/libredwg/releases) herunterladen und entpacken. Die ausführbare Datei dem Suchpfad des Betriebssystems hinzufügen `os.getenv("PATH")` für die automatische ermittlung ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) oder den Pfad manuell festlegen. Siehe [Import-/Export-Voreinstellungen](/Import_Export_Preferences/de#DWG "Import Export Preferences/de").

#### Installation Linux/Unix systems

```
git clone  --recurse-submodules https://github.com/LibreDWG/libredwg.git
cd libredwg
mkdir build
cd build
cmake ..
make
make install # oder verwende checkinstall oder suche und kopiere einfach das dwg2dxf # Hilfsprogramm in den Pfad deiner ausführbaren Dateien, es wird dann automatisch von FreeCAD erkannt

```

Die ausführbaren Dateien dem Suchpfad des Betriebssystems hinzufügen `os.getenv("PATH")` für die automatische ermittlung ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) oder den Pfad manuell festlegen. Siehe [Import-/Export-Voreinstellungen](/Import_Export_Preferences/de#DWG "Import Export Preferences/de").

#### openSUSE

Um Probleme zu vermeiden, musst das LibreDWG-Paket verwendet werden, das für die installierte openSUSE OS Distribution kompiliert wurde.
LibreDWG wird normalerweise mit **YAST** installiert (Abk. Yet another Setup Tool) dem Einrichtungs- und Konfigurationswerkzeug des Linux Betriebssystems.

Der erfahrenere Benutzer erhält zunächst einen Überblick über mögliche bereitgestellte Pakete.
**Hinweis:** openSUSE bietet beim Herunterladen von LibreDWG mehrere Optionen zur Auswahl an.
Um diese Optionen zu sehen, besuchst du [Übersicht der bereitgestellten LibreDWG Pakete unter openSUSE](https://software.opensuse.org/search?utf8=%E2%9C%93&baseproject=ALL&q=libredwg).

Für z.B. Intel oder AMD 64-Bit Desktops, Laptops und Server ist die (x86\_64) Version die richtige Wahl. Daher sind **libredwg0** und **libredwg-tools** die richtige Wahl zum Installieren.

Es wird empfohlen, die Binärpakete direkt zu holen. Wähle dann die richtige Distribution für dein installiertes openSUSE Betriebssystem.

In einem beliebigen Terminal/Konsole (root Rechte erforderlich) wird die Installation durchgeführt mit:

```
zypper install libredwg0 libredwg-tools

```

Place the executable in the OS search path, `os.getenv("PATH")`, for automatic detection ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")), or set the path manually. See [Import Export Preferences](/Import_Export_Preferences#DWG "Import Export Preferences").

### ODA-Dateikonverter

* Homepage: <https://www.opendesign.com/guestfiles/oda_file_converter>
* Lizenz: Freeware
* Optional, wird für den Im- und Export von DWG Dateien verwendet

Der ODA-Dateikonverter ist ein kleines, frei verfügbares Dienstprogramm, das die Konvertierung zwischen verschiedenen Versionen von DWG- und DXF-Dateien erlaubt. FreeCAD kann es verwenden, um DWG-Import und -Export anzubieten, indem DWG-Dateien unter der Haube in das DXF-Format konvertiert werden und der Dateiinhalt dann mit seinem Standard-DXF-Importprogramms importiert wird. Es gelten die Einschränkungen des [DXF-Importprogramms](/Draft_DXF/de "Draft DXF/de").

#### Einrichtung

Wenn das Dienstprogramm nach der Installation nicht automatisch von FreeCAD gefunden wird, musst der Pfad zur ausführbaren Datei des Konverters manuell festgelegt werden. Siehe [Import-/Export-Voreinstellungen](/Import_Export_Preferences/de#DWG "Import Export Preferences/de").

### QCAD pro

[eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

* homepage: <https://qcad.org/en/qcad-command-line-tools#dwg2dwg>
* license: commercial
* optional, used to enable import and export of DWG files

QCAD is a well-known open-source DXF-based 2D CAD platform. It also offers a paid pro version, which is basically the open-source version plus support for the DWG format. When buying the pro version, QCAD also includes a DWG to DXF conversion utility that can be used by FreeCAD.

#### Installation

If the utility is not found automatically by FreeCAD after installation ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")), you need to set the path to the bash file (Linux and macOS) or batch file (Windows) manually. See [Import Export Preferences](/Import_Export_Preferences#DWG "Import Export Preferences").

### CADExchanger Arbeitsbereich

Die Installation des CADExchanger Arbeitsbereichs ermöglicht das Arbeiten mit DWG Dateien durch Integration mit dem kostenpflichtigen kommerziellen Dateikonverterprodukt [CADExchanger](https://cadexchanger.com/). Folge einfach den Anweisungen im [GitHub Repositorium](https://github.com/yorikvanhavre/CADExchanger). Du kannst über diesen Arbeitsbereich im [sein Forumsbeitrag](https://forum.freecadweb.org/viewtopic.php?f=9&t=22227&p=462421) diskutieren.

Im Moment ist der CADExchanger Weg der einzige, der es erlaubt, mit 3D DWG-Dateien zu arbeiten, indem er sie in andere 3D Formate konvertiert.

## Was sind die Alternativen?

### DoubleCAD XT

Es gibt auch DoubleCAD XT (<https://www.turbocad.com/content/doublecad-xt-v5>). Das Programm ist für die persönliche und kommerzielle Nutzung kostenlos.
Es erfordert eine kostenlose Anmeldung, um einen Aktivierungscode per E-Mail zu bekommen.
Dieses Programm ist nur für Windows. Hinweis: Es scheint seit Jahren nicht mehr aktualisiert worden zu sein.

### NanoCAD 5.0

Es gibt auch nanoCAD 5.0 (<https://nanocad.com/products/nanoCAD/download/>). Das Programm ist für die private und kommerzielle Nutzung kostenlos. Es erfordert eine kostenlose Anmeldung, um einen Aktivierungscode per E-Mail zu erhalten. Dieses Programm ist nur für Windows.

### Exportiere Deine AutoCAD-Dateien in freundliches Format

Exportiere deine AutoCAD Dateien in ein FreeCAD freundlicheres Format, wie DXF R12 oder R14, SVG und, falls die Version dies unterstützt, IGES. Alle sind bessere Alternativen zum DWG Format, wenn du FreeCAD verwendest.

Es ist wichtig darauf hinzuweisen, dass es keinen Unterschied zwischen den Inhalten einer Datei gibt, die im DWG- oder DXF-Format gespeichert ist, sofern es sich um die gleiche Version handelt (z.B. DWG 2014 und DXF 2014). Beide Formate werden von Autodesk verwaltet, und beide unterstützen genau dieselben Funktionen. Der Unterschied besteht darin, dass DWG geschlossen (maschinenkodiert) ist, während DXF offen ist.

## Was kann ich tun, um zu helfen?

### Fördere die Verwendung alternativer Formate

Einfach genommen, höre auf, im DWG Format geleistete Arbeit zu akzeptieren. In der Praxis ist dies oft leichter gesagt als getan. Dennoch wäre es keine schlechte Praxis für Benutzer und Unterstützer von FreeCAD, das DWG Format zu vermeiden und abzulehnen, wann immer es möglich ist.

### Benutze die LibreDWG Bibliothek und schreibe Fehlerberichte

In der Entwicklungsversion kannst du, wie oben erwähnt, vom proprietären ODA Konverter auf die freie Software Bibliothek LibreDWG für DWG (und DXF) Dateien umsteigen. Bitte tue dies und melde etwaige Probleme, die dabei auftreten.

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_and_DWG_Import/de&oldid=1501234>"