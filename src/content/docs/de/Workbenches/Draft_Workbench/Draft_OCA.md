---
title: Draft OCA
---
## Beschreibung

Entwurf OCA ist ein Softwaremodul, das von den ![](/images/Std_Open.svg) [Std Open](/Std_Open/de "Std Open/de"), ![](/images/Std_Import.svg) [Std Import](/Std_Import/de "Std Import/de") und ![](/images/Std_Export.svg) [Std Export](/Std_Export/de "Std Export/de") Befehle, um das [OCA Dateiformat](http://groups.google.com/group/open_cad_format) zu verarbeiten.

Das OCA-Dateiformat ist eine Gemeinschaftsanstrengung zur Erstellung eines freien, einfachen und offenen CAD-Dateiformats. OCA basiert weitgehend auf dem GCAD-Dateiformat, das von [gCAD3D](http://www.gcad3d.org/) erzeugt wird. Beide Formate können in FreeCAD importiert werden, und die von FreeCAD exportierten OCA-Dateien können in gCAD3D geöffnet werden.

## Importieren

Die folgenden OCA-Objekte können importiert werden:

* Linien
* Bögen und Kreise
* Geschlossene Flächenbereiche

## Exportieren

Die folgenden FreeCAD-Objekte können exportiert werden:

* Linien und Drähte (Polylinien)
* Bögen und Kreise
* Flächen

## Einstellungen

Siehe [Import-Export-Einstellungen](/Import_Export_Preferences/de "Import Export Preferences/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um Objekte in eine OCA-Datei zu exportieren, wird die Methode `export` des Moduls importSVG verwendet.

```
importOCA.export(exportList, filename)

```

* Für Windows: / (forward slash) wird als Pfad-Trennzeichen in `filename` verwendet.

Beispiel:

```
import FreeCAD as App
import Draft
import importOCA

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=500)
polygon2 = Draft.make_polygon(5, radius=1500)

doc.recompute()

objects = [polygon1, polygon2]
importOCA.export(objects, "/home/user/Pictures/myfile.oca")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_OCA/de&oldid=1500014>"