---
title: Installieren auf Windows
---
## Standardinstallation

Der einfachste Weg, die aktuellste, stabile Version von FreeCAD zu installieren, ist die Verwendung des Installierers, siehe Seite [Herunterladen](/Download/de "Download/de").

Wenn Du eine Entwicklungsversion herunterladen möchtest, die möglicherweise instabil ist, lies die Seite [Weekly builds download](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds).

Nachdem Du den Installierer heruntergeladen hast, startet der Installationsprozess nach einem Doppelklick darauf.

Nachfolgend finden sich weitere Informationen zu einigen technischen Optionen. Aber die meisten Nutzer benötigen nicht mehr als den Installierer. Nach Abschluss der Installation, gehe zu [Erste Schritte](/Getting_started/de "Getting started/de").

## Installation für alle Nutzer im Windowssystem

Voreingestellt wird FreeCAD für den Nutzer installiert, der den Installierer aktiviert. Wenn dieser Nutzer nur Nutzerrechte hat, dann ist der Installationspfad: C:\Users\<username>\AppData\Local\Programs\FreeCAD X.YY

Wird der Installierer durch einen Administrator aktiviert, kann dieser wählen, ob FreeCAD für alle Nutzer im System oder nur für Dich installiert wird. Per Voreinstellung wird für alle Nutzer installiert.

Der voreingestellte Pfad für alle Nutzer ist: C:\Program Files\FreeCAD X.YY

## Installation im Hintergrund

Um FreeCAD im Hintergrund zu installieren kann der Installierer über die Kommandozeile aktiviert werden:

```
FreeCAD-~.exe /S

```

Für alle Optionen werden vorgegebene Einstellungen verwendet. Eine benutzerbezogene Installation kann in folgender Weise eingestellt werden:

```
FreeCAD-~.exe /S /D=A path to FreeCAD with spaces

```

Selbst bei einer Installation im Hintergrund wird per Vorgabe eine Meldung gezeigt, während der Installierer auf Korruption geprüft wird. Diese sogenannte zyklische Redundanzprüfung dauert meistens nur ein paar Sekunden. Um diese Prüfung auf Korruption zu unterbinden, muß folgendes eingegeben werden:

```
FreeCAD-~.exe /S /NCRC

```

Beachte: diese `/NCRC` Angabe (flag) wird **nicht empfohlen**, da die Prüfung auf Korruption gewährleistet, daß der Installierer beispielsweise vollständig heruntergeladen wurde.

## Chocolatey

Die Verwendung des [Chocolatey](https://chocolatey.org/install) Paketmanagers wird derzeit nicht empfohlen, da diese Quelle nicht mehr aktuell gehalten wird.

## Deinstallation

Um FreeCAD zu de-installieren sollten vorzugsweise die Windowswerkzeuge verwendet werden. Andernfalls kann der Deinstallierer direkt verwendet werden. Dies ist die Datei: Uninstall-FreeCAD.exe
Sie befindet sich im selben Ordner, in dem FreeCAD installiert ist.

Der Deinstallierer kann mit der folgenden Kommandozeile auch im Hintergrund ausgeführt werden:

```
Uninstall-FreeCAD.exe /S

```

Beachte: die Deinstallation im Hintergrund verursacht einen Fehler, wenn eine Instanz von FreeCAD läuft, auch wenn die Instanz nicht die Version ist die deinstalliert werden soll.

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Windows/de&oldid=1464561>"