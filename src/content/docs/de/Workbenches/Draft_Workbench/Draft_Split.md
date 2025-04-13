---
title: Draft Teilen
---
|  |
| --- |
| Draft Teilen |
| Menüeintrag |
| Änderung → Teilen Bearbeiten → Teilen |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| S P |
| Eingeführt in Version |
| 0.18 |
| Siehe auch |
| [Draft Verbinden](/Draft_Join/de "Draft Join/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Split.svg) **Draft Teilen** teilt eine [Draft Linie](/Draft_Line/de "Draft Line/de") oder [Draft Polylinie](/Draft_Wire/de "Draft Wire/de") an einem bestimmten Punkt oder einer Kante. Dieser Befehl ist das Gegenstück zum Befehl [Draft Verbinden](/Draft_Join/de "Draft Join/de").

## Anwendung

1. * Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Split.svg) Teilen drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → ![](/images/Draft_Split.svg) Teilen** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_Split.svg) Split** auswählen.
   * Das Tastaturkürzel S dann P.
2. Den Mauszeiger über die richtige Kante einer [Draft Linie](/Draft_Line/de "Draft Line/de") oder eines [Draft Polylinie](/Draft_Wire/de "Draft Wire/de") bewegen.
3. Die Kante wird markiert.
4. Eine der folgenden möglichkeiten auswählen:
   * Wenn die Polylinie geschlossen ist:
     + Einen beliebigen Punkt auf der Kante auswählen.
     + Die Kante wird von der Polylinie abgetrennt und zu einer separaten Polylinie.
   * Wenn die Polylinie offen ist:
     + Den richtigen Punkt auf der Kante auswählen. Siehe [Hinweise](#Hinweise).
     + Die Polylinie wird an der ausgewählten Stelle geteilt.

## Hinweise

* Wenn eine offene Polylinie geteilt wird und der angeklickte Punkt nicht genau auf der ausgewählten Kante liegt, wird der neue Punkt nicht kollinear mit der ehemaligen Kante sein. Verwende eine entsprechende [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") Option, um dies zu verhindern.
* Um Objekte zu teilen, die keine [Draft Linien](/Draft_Line/de "Draft Line/de") oder [Draft Polylinien](/Draft_Wire/de "Draft Wire/de") sind, kann man zuerst versuchen, [Draft Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de") und/oder [Draft Herabstufen](/Draft_Downgrade/de "Draft Downgrade/de") einmal oder mehrmals auf sie anzuwenden.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um einen Polylinie zu teilen, wird die Methode `split` des Moduls Draft verwendet. Diese Methode gibt `None` zurück.

```
split(wire, newPoint, edgeIndex)

```

* `wire` die Polylinie (wire object), die geteilt werden soll.
* `newPoint` der Punkt, an dem die Abtrennung erfolgen soll.
* `edgeIndex` Index der Kante, an der die Abtrennung erfolgen soll (1-basiert).

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(500, 0, 0)
p3 = App.Vector(250, 0, 0)

wire = Draft.make_wire([p1, p2])

Draft.split(wire, p3, 1)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Split/de&oldid=1500028>"