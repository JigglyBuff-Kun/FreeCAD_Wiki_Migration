---
title: Import von Text und Geometrie aus Inkscape
---
|  |
| --- |
| Tutorium |
| Thema |
| Import von Text und Geometrie aus Inkscape |
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

## Einleitung

Dieses Tutorium soll zeigen, wie Text oder Geometrie, die mit Inkscape erstellt wurden, über das SVG-Format in FreeCAD importiert werden können.  
Für diese Bearbeitungen werden Inkscape 0.91 und FreeCAD 0.16.6704 unter Windows verwendet.

## Allgemeine Tipps zum Importieren aus inkscape

* Der SVG-Import in FreeCAD kann eine SVG-Datei mit einer Auflösung von mehr als 45 dpi nicht verarbeiten, daher sollte man die Einstellungen in Inkscape überprüfen.
* Wenn das Importieren von Pfadobjekten, die in der 3D-Ansicht in FreeCAD erscheinen, nicht sehr glatt verläuft, kann es eine Frage der FreeCAD-Einstellungen für die Formansicht sein.
  + In FreeCAD Bearbeiten → Voreinstellungen → Part Design → Formansicht auswählen.
  + Unter "Tesselation" bearbeitet man den zu "Setzt die maximale Abweichung abhängig von Modell-Bounding-Box" gehörigen Wert, Standardwert ist `0,5 %`.
  + Die Einstellung auf einen niedrigeren Wert erhöht die Glätte des Modells in der 3D-Ansicht (und verbraucht mehr PC-Leistung)
  + Werte unter "0,01 %" sollten vermieden werden, da diese FreeCAD höchstwahrscheinlich zum Absturz bringen.
  + In diesem Fall wird das Löschen von "system.cfg" und "user.cfg" im eigenen FreeCAD-Benutzerverzeichnis dieses Problem lösen.

## Text aus Inkscape importieren

* In Inkscape, nach dem Einfügen von Text (und vielleicht nach dem Anwenden von Effekten wie Biegen oder etwas anderem), nicht vergessen:
  + Den Text und dann  Pfad →  Objekt zu Pfad auswählen.
  + Die Gruppierung der Objekte aufheben.
  + Im Dateiformat "Einfaches SVG (\*.svg)" speichern.
* Die Datei in FreeCAD mit der ausgewählten Option "SVG as geometry (\*.svg)" öffnen.
* In der Baumansicht wird ein Pfadobjekt für jeden Buchstaben/jede Zahl/jedes Zeichen erstellt.
* Das Werkzeug [Draft Aufrüsten](/Draft_Upgrade/de "Draft Upgrade/de") auf jedes Pfadobjekt anwenden, um Flächen zu erzeugen.
* Das Werkzeug Aufpolsterung oder [Part](/Part_Workbench/de "Part Workbench/de") [Extrudieren](/Part_Extrude/de "Part Extrude/de") auf die Flächen anwenden, um Volumenkörper zu erhalten
* Die Objekte können vereinigt oder in einem Verbund verwendet werden, je nachdem, welche weitere Arbeiten geplant sind

## Geometrie aus Inkscape importieren

Da Inkscape und FreeCAD unterschiedliche Ansätze zur Bemaßung von SVG-Objekten zu haben scheinen, scheint der empfohlene Arbeitsablauf zu sein:

* Gruppierung aller Objekte in Inkscape aufheben.
* Alle Objekte in Inkscape auswählen.
* Das Linienattribut Breite mit dem Wert 0 mm (ja, das sind null Millimeter) auf alle Objekte anwenden.
* Speichern im Dateiformat "Inkscape SVG (\*.svg)" oder "Einfaches SVG (\*.svg)".
* Die Datei in FreeCAD öffnen und die Option "SVG als Geometrie (importSVG)" auswählen.
* die Abmessungen der Objekte in Inkscape und in FreeCAD sollten jetzt identisch sein

## Danksagung

Dank an die Benutzer "freecad-heini-1" und "herbk" für die Tests und die wertvolle Rückmeldung.

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_text_and_geometry_from_Inkscape/de&oldid=1156001>"