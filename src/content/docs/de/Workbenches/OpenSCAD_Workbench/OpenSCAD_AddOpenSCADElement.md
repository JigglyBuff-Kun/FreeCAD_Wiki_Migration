---
title: OpenSCAD OpenSCADElementHinzufügen
---
|  |
| --- |
| OpenSCAD OpenSCADElementHinzufügen |
| Menüeintrag |
| OpenSCAD -> OpenSCAD Element hinzufügen |
| Arbeitsbereich |
| [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Ein OpenSCAD Element hinzufügen, indem OpenSCAD-Code im Aufgabenbereich eingegeben und die OpenSCAD-Binärdatei ausgeführt wird (erfordert OpenSCAD).

Wird 'as mesh' ausgewählt, rendert OpenSCAD ein Netz.

Jedesmal beim Drücken von Einfügen wird OpenSCAD-Code ausgeführt und Elemente werden importiert.

Falls OpenSCAD erfolgreich zurückkehrt, werden seine Meldungen als Warnungen im Ausgabefenster angezeigt. Dies wird der Fall sein, wenn der Pfad zu importierten, eingefügten und verwendeten Dateien defekt ist. Im Falle von ungewünschten Ergebnissen wird dringend empfohlen, einen Blick auf das Ausgabefenster zu werfen, denn dort könnten viele weitere vom Importer erstellte Ausgaben zu finden sein. Falls OpenSCAD fehlschlägt, werden seine Meldungen als Fehler aufgezeichnet.

Bibliotheken sollten wie üblich erreichbar sein, dabei können Beispiele, wie folgend dargestellt ist, erreicht werden.

```
include <../examples/example001.scad>;

```

würde das erste Beispiel beinhalten, auch als das OpenSCAD-Symbol bekannt.

## OpenSCAD innerhalb von FreeCAD einrichten

**Hinweis:** OpenSCAD muss auf deinem Computer installiert sein, damit FreeCAD diese Funktionalität nutzen kann  
Installiere OpenSCAD in der für dein Betriebssystem entsprechenden Weise. Siehe [the OpenSCAD web site](https://www.openscad.org/) für mehr Informationen.

FreeCAD muss gesagt werden, wo die ausführbare OpenSCAD-Datei gefunden werden kann:

* Zum Arbeitsbereich ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") wechseln durch Auswahl des Menüeintrags **Ansicht → Arbeitsbereich → OpenSCAD**.
* Den Voreinstellungsdialog aufrufen.**Bearbeiten → Einstellungen...**
* Die Schaltfläche "OpenSCAD" anklicken.
* Die Schaltfläche ... unter **General Settings → General OpenSCAD Settings → OpenSCAD executable** anklicken, um das Verzeichnis zu durchsuchen oder den Pfad direkt in das Eingabefeld rechts von der Schaltfläche einzugeben (z.B. `/usr/bin/openscad` für Ubuntu-basierte Linux-Distributionen).
* FreeCAD schließen und erneut starten.

:   **Ergebnis:** Ein neues OpenSCAD-Symbol erscheint in der Symbolleite und im OpenSCAD-Menü in FreeCADs Arbeitsbereich OpenSCAD.

Hinweis: Es ist ebenso möglich einen anderen Optionalen Paramter hinzuzufügen, der die maximalen Seiten eines Polygons steuert bevor es als ein Kreis angesehen wird (fn).

Beginnend mit 0.14 und neuer sucht FreeCAD nach der ausführbaren Datei von OpenSCAD, wenn die oben genannte Einstellung leer ist.

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_AddOpenSCADElement/de&oldid=1334516>"