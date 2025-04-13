---
title: Arch Raster
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Raster |
| Menüeintrag |
| Anmerkung → Raster |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch Achse](/Arch_Axis/de "Arch Axis/de"), [Arch Achsensystem](/Arch_AxisSystem/de "Arch AxisSystem/de") |
|  |

## Beschreibung

Das Werkzeug **Arch Raster** ermöglicht, ein gitterartiges Objekt im Dokument zu platzieren. Dieses Objekt soll als Basis für die Erstellung von Arch-Objekten dienen, die einen regelmäßigen, aber komplexen Rahmen benötigen, wie z.B. Fenster, Vorhangfassaden, Säulengitter, Geländer usw. Das Rasterobjekt (Grid-Objekt) kann wie eine Tabellenkalkulation bearbeitet werden, indem Spalten und Zeilen hinzugefügt oder entfernt werden, die Größe festgelegt und Zellen zusammengeführt werden.

Das Raster ist ein 2D-Objekt und kann daher überall dort verwendet werden, wo eine 2D-Form wie z.B. ein [Draft](/Draft_Workbench/de "Draft Workbench/de")-Objekt oder eine [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") benötigt wird, es kann sich aber auch wie ein [Arch AchsenSystem](/Arch_AxisSystem/de "Arch AxisSystem/de") verhalten und dazu verwendet werden, die Positionierung anderer Arch-Objekte zu verbreiten.

![](/images/Arch_Grid_example.jpg)

Eine Anordnung von Säulen, ein Geländersystem und ein Fenster, die jeweils auf einem Arch Raster-Objekt basieren.

## Anwendung

1. Die Schaltfläche ![](/images/Arch_Grid.svg) Arch Raster drücken.
2. # **Breite** und **Höhe** des Rasters in den Eigenschaften festlegen.
3. Durch doppelklick auf das Raster-Objekt in der Baumansicht in den Bearbeitungsmodus wechseln.
4. Zeilen und Spalten hinzufügen.
5. Die gewünschte Breite und Höhe der Zeilen und Spalten einstellen, indem die Zeilen- oder Spaltenüberschriften doppelt angeklickt werden.

## Optionen

* Eine Spaltenbreite oder Zeilenhöhe von 0 bedeutet, dass die Größe automatisch an die Gesamtbreite/-höhe des Rasters angepasst wird.
* Zellen können zusammengeführt und wieder getrennt werden, indem sie ausgewählt und auf die entsprechende Schaltfläche geklickt wird.
* Bei Verwendung als Daten**Achsen**-Eigenschaft anderer Arch-Objekte steuert das Raster die Positionierung dieser Objekte. Die Eigenschaft Daten**Punkteausgabe** definiert, wie die anderen Objekte auf dem Raster platziert werden: An Knotenpunkten, Kantenmittelpunkten oder Flächenmittelpunkten.
* Durch festlegen der Eigenschaften Daten**Auto Höhe** oder Daten**Auto Breite** auf einen Wert ungleich Null, wird die Gesamtzahl der Zeilen/Spalten und ihre individuellen Höhen/Breiten ignoriert. Stattdessen wird automatisch die maximale Anzahl von Spalten oder Zeilen der angegebenen Auto Breite/Höhe erzeugt.

## Eigenschaften

* Daten-Eigenschaft**Zeilen**: Die Anzahl der Zeilen
* Daten-Eigenschaft**Spalten**: Die Anzahl der Spalten
* Daten-Eigenschaft**Zeilengröße**: Die Größen für Zeilen
* Daten-Eigenschaft**Spaltengröße**: Die Größen für Spalten
* Daten-Eigenschaft**Punkte Ausgabe**: Die Art der von diesem Rasterobjekt erzeugten 3D-Punkte
* Daten-Eigenschaft**Breite**: Die Gesamtbreite dieses Rasters
* Daten-Eigenschaft**Höhe**: Die Gesamthöhe dieses Rasters
* Daten-Eigenschaft**Auto Breite**: Erstellt automatische Spalteneinteilungen (zum Deaktivieren auf 0 setzen)
* Daten-Eigenschaft**Auto Höhe**: Erstellt automatische Zeileneinteilungen (zum Deaktivieren auf 0 setzen)
* Daten-Eigenschaft**Neuausrichten**: Gibt an ob dieses Raster Kindobjekte entlang der Kantennormalen neu ausrichtet, wenn es sich im Modus Kantenmittelpunkt befindet, oder nicht.
* Daten-Eigenschaft**Ausgeblendete Flächen**: Die Indizes der auszublendenden Flächen.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Raster kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de") Konsole aus durch folgende Funktion verwendet werden:

```
Grid = makeGrid(name="Grid")

```

* Erstellt ein `Raster`-Objekt.

Seine Attribute `Breite`, `Höhe`, `Zeilen`, und `Spalten` können direkt geändert werden, um das Aussehen des Rasters festzulegen.

```
import FreeCAD, Draft, Arch
Grid = Arch.makeGrid()

Grid.Width = 5000
Grid.Height = 5000
Grid.Rows = 4
Grid.Columns = 6
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = Grid
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Grid/de&oldid=1541980>"