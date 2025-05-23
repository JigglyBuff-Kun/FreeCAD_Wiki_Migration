---
title: CAM Nachbereitung
---
|  |
| --- |
| CAM Nachbereitung |
| Menüeintrag |
| CAM → Nachbearbeitung |
| Arbeitsbereich |
| [CAM](/CAM_Workbench/de "CAM Workbench/de") |
| Standardtastenkürzel |
| P P |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/CAM_Post.svg) Nachbereitung exportiert den ausgewählten ![](/images/CAM_Job.svg) [CAM-Auftrag](/CAM_Job/de "CAM Job/de") in eine G-Code-Datei.

**Jede CNC-Steuerung spricht einen spezifischen G-Code-Dialekt, was einen dialekt-korrekten Postprozessor erfordert, um die endgültige Ausgabe aus FreeCADs unabhängigen internen G-Code-Dialekt zu übersetzen.**

### Typische Funktionen des Postprozessors enthalten

* Das Verwenden einer korrekten G-Code-Dateierweiterung für die Auftragsausgabe.
* Das Auswählen der G-Code-Befehle. CNC-Steuerungen unterstützen typischerweise eine Teilmenge der verfügbaren G-Code-Befehle. Die Obermenge der G-Code-Befehle enthält leistungsfähige und spezialisierte Befehle, die sonst mit mehreren einfacheren Befehlen verarbeitet werden müssen. Postprozessoren werden geschrieben, um den besten G-Code für eine Operation auszuwählen, der auf dem Ziel verfügbar ist.
* Das Formatieren der G-Code-Syntax durch Umordnung der Eingänge Vorschub, X, Y, Z, A und B sowie der Präzision.
* Das Einfügen einer Einleitung/eines Vorspanns (Präambel) zum Einstellen von Einheiten, Einheitenformat, Arbeitsebene, Koordinatensystem usw.
* Das Einfügen einer Ausleitung/eines Nachspanns (Postambel), um die Maschine zu parken, zu stoppen, alle Argumente zu verarbeiten.
* Das Einfügen oder Unterdrücken von Werkzeugwechseln zwischen aufeinanderfolgenden Operationen mit demselben Werkzeug.
* Das Formatieren der Vorschub- und Geschwindigkeitsinformationen in Umdrehungen pro Minute oder pro Sekunde.
* Das Formatieren der Funktionsaufrufe Benennung und Aufruf.

### Anpassen des Postprozessors

Wenn du einen eigenen Postprozessor schreiben möchtest, wirf einen Blick auf die Seite [CAM Postprozessor-Anpassung](/CAM_Postprocessor_Customization/de "CAM Postprocessor Customization/de").

**Hinweis:** Mehrere mitgelieferte Postprozessoren erzeugen für viele CNC Steuerungen passenden Code oder können als Vorlage für Modifikationen verwendet werden

Postprozessoren enthalten Konfigurations-Flags und sind so konzipiert, dass sie durch Hinzufügen von G-Codes und M-Codes zu den bereitgestellten Definitionen eingestellt werden können für:

* Maschineninitialisierung
* Auftagsabschluss
* Werkzeugwechsel
* Kühlung ein/aus
* Usw...

Postprozessoren verwenden [FreeCADs internen G-Code-Dialekt](/CAM_scripting/de#FreeCADs_internes_G-Code-Format "CAM scripting/de") in Verbindung mit den Konfigurationsdefinitionen des Postprozessors, um dialektkorrekten G-Code für Zielmaschinen zu erzeugen. Dadurch kann der Arbeitsbereich CAM durch den Aufruf verschiedener Postprozessoren korrekten G-Code für verschiedene CNC-Maschinensteuerungen erzeugen.

Die Typen der CNC Maschinensteuerungen umfassen:

* CNC Fräsen
* CNC Drehmaschinen
* 3D Drucker
* Schleppmesserschneider
* Laserschneider
* Gravierer
* Plasma-Brenner-Schneider
* Drahtbieger
* EDM Schneider
* Usw...

Wenn nur eine CNC-Maschine verwendet wird, oder wenn alle CNC-Maschinen einen gemeinsamen Postprozessor verwenden, muss der Arbeitsbereich CAM nur einen einzigen Postprozessor enthalten. Wenn ein einziger Postprozessor nicht ausreicht, um G-Code für alle Ziel-CNC-Steuerungen auszugeben, dann müssen mehrere Postprozessoren installiert werden.

## Anwendung

1. Einen ![](/images/CAM_Job.svg) [CAM-Auftrag](/CAM_Job "CAM Job") in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/CAM_Post.svg) Nachbearbeitung drücken.
   * Den Menüeintrag **CAM → ![](/images/CAM_Post.svg) Nachbearbeitung** auswählen.
   * Das Tastaturkürzel P dann P.
3. Den Namen und das Verzeichnis der **Ausgabedatei** bestätigen.

## Optionen

Die Eigenschaften der Ausgabedatei und des Postprozessors können jederzeit vor dem Aufruf des Postprozessors im [Auftrag](/CAM_Job/de "CAM Job/de") eingestellt werden.

Die bereitgestellten Postprozessoren sind mit Kommentaren versehen, die Bereiche mit Flags, Konfigurationsvariablen und Abschnitten von G-Codes und M-Codes angeben, die vom Postprozessor zur Konfiguration der Ausgabe verwendet werden sollen.

Zu den typischen True/False-Markierungen der Konfiguration gehören:

* **OUTPUT\_COMMENTS** (True = Zulassen, False = Unterdrücken): Wird verwendet, um Textkommentare in die G-Code-Ausgabedatei einzufügen.
* **OUTPUT\_HEADER** (True = Zulassen, False = Unterdrücken): Dient zum Einfügen von Textkopfzeilen in die G-Code-Ausgabedatei.
* **OUTPUT\_LINE\_NUMBERS** (True = Zulassen, False = Unterdrücken): Dient zum Einfügen von Zeilennummern in die G-Code-Ausgabedatei.
* **SHOW\_EDITOR** (True = Zulassen, False = Unterdrücken): Dient zur Anzeige des ausgegebenen G-Codes in einem Aufklappfenster beim Aufruf des Postprozessors.
* **MODAL** (True = Allow, False = Suppress): Reduziert die Anzahl der ausgegebenen G-Code-Zeilen, indem die Modusinformationen entfernt werden, wenn sich der Modus nicht ändert.

Typische Konfigurationsvariablen schließen ein:

* **LINENR** (Zeilennummer): Wird verwendet, um den Zeilennummernindex einzustellen.
* **UNITS** (G20 oder G21): wird verwendet, um der Ziel-CNC-Steuerung ausdrücklich mitzuteilen, welche Einheiten zur Interpretation der endgültigen Ausgabedatei verwendet werden sollen.
* **MACHINE\_NAME** (Name der Ziel-CNC-Fräse): wird verwendet, um eine Maschinennamen-Kennzeichnung in die endgültige Ausgabedatei einzufügen.
* **PRECISION**: wird verwendet, um die Anzahl der Nachkommastellen in der endgültigen Ausgabedatei festzulegen.

Typische Konfigurationsabschnitte sind:

* **PREAMBLE** (Code-Konfiguration, die zu Beginn des Auftrags eingefügt wird).
* **POSTAMBLE** (Code-Konfiguration, die an den Auftrag angehängt wird und das Parken der Maschine vorsieht, usw...).
* **TOOL\_CHANGE** (Code, der bei jedem Werkzeugwechsel im Auftrag eingefügt wird).

Die Voreinstellung Bearbeiten → Einstellungen... → CAM → Auftragseinstellungen → Standardwerte → CAM wird verwendet, um den bei der Auftragserstellung ausgewählten Standard-Postprozessor festzulegen. Dies ermöglicht den Arbeitsbereich CAM so zu konfigurieren, dass nur die gewünschten Postprozessoren angezeigt werden und einer als Voreinstellung festgelegt wird.

Enthaltene Postprozessoren werden standardmäßig unter **FreeCAD/Mod/CAM/CAM/Post/scripts** gespeichert:

* centroid
* comparams
* dxf
* dynapath
* grbl, einschließlich Unterstützung für bCNC-Kopfzeilenblöcke die das Auftragausgabeargument --bcnc verwenden
* jtech (laser)
* [linuxcnc](http://linuxcnc.org/docs/html/gcode/g-code.html#gcode:g17-g19.1)
* mach3\_mach4
* nccad
* opensbp
* phillips
* refactored\* (Diese Postprozessoren sind noch in Arbeit und ändern sich häufig)
* rml
* smoothie
* uccnc

## Einschränkungen

* **Nicht** den Menüeintrag Datei → Export für den Export in G-Code verwenden; damit wird beschädigter G-Code erzeugt!

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Post/de&oldid=1393372>"