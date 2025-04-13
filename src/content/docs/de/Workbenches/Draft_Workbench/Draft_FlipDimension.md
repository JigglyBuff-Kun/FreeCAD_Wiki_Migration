---
title: Draft MaßKippen
---
|  |
| --- |
| Draft MaßKippen |
| Menüeintrag |
| Änderung → Bemaßung umkehren |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_FlipDimension.svg) **Draft MaßKippen** schwenkt die Maßzahlen (Maßtexte) ausgewählter [Draft-Maße](/Draft_Dimension/de "Draft Dimension/de") 180° um die Maßlinie. Es kann verwendet werden, um Maße zu korrigieren, die gespiegelt erscheinen. Der Befehl funktioniert nicht ordentlich mit Winkelmaßen.

## Anwendung

1. Ein oder mehrere [Draft-Maße](/Draft_Dimension/de "Draft Dimension/de") auswählen.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_FlipDimension.svg) Maß umkehren drücken.
   * Den Menüeintrag **Änderung → ![](/images/Draft_FlipDimension.svg) Maß umkehren** auswählen.

## Hinweise

* [Draft Maße](/Draft_Dimension "Draft Dimension") haben auch eine Daten-Eigenschaft**Flip Text**. Auf `true` gesetzt, wird der Text 180° um die Normalenrichtung geschwenkt. Das kann mit dem Effekt aus diesem Befehl kombiniert werden.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um ein [Draft Maß](/Draft_Dimension/de "Draft Dimension/de") zu kippen, invertiert man seine Eigenschaft `Normal`.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 0, 0)
p3 = App.Vector(500, 300, 0)
dimension = Draft.make_dimension(p1, p2, p3)
dimension.ViewObject.FontSize = 200

dimension.Normal = dimension.Normal.negative()
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_FlipDimension/de&oldid=1500034>"