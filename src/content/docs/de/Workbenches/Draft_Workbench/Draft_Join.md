---
title: Draft Verbinden
---
|  |
| --- |
| Draft Verbinden |
| Menüeintrag |
| Änderung → Verbinden Bearbeiten → Verbinden |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| J O |
| Eingeführt in Version |
| 0.18 |
| Siehe auch |
| [Draft Teilen](/Draft_Split/de "Draft Split/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Join.svg) **Draft Verbinden** verbindet [Draft Linien](/Draft_Line/de "Draft Line/de") und [Draft Polylinien](/Draft_Wire/de "Draft Wire/de") zu einer einzigen Polylinie. Dieser Befehl ist das Gegenstück zum Befehl [Draft Teilen](/Draft_Split/de "Draft Split/de").

## Anwendung

1. Die Endpunkte der [Draft Linien](/Draft_Line/de "Draft Line/de") und/oder [Draft Polylinien](/Draft_Wire/de "Draft Wire/de"), die verbunden werden sollen, müssen exakt deckungsgleich sein. Wenn erforderlich, werden zuerst die Punkte justiert, um dies sicherzustellen.
2. Zwei oder mehrere [Draft Linien](/Draft_Line/de "Draft Line/de") und/oder [Draft Polylinien](/Draft_Wire/de "Draft Wire/de").
3. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Join.svg) Verbinden drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → ![](/images/Draft_Join.svg) Verbinden** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_Join.svg) Verbinden** auswählen.
   * Das Tastaturkürzel J dann O.

## Hinweise

* [Draft Linien](/Draft_Line/de "Draft Line/de") und [Draft Polylinien](/Draft_Wire/de "Draft Wire/de") können auch mit dem Befehl [Draft Polylinie](/Draft_Wire/de "Draft Wire/de") oder dem Befehl [Draft Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de") verbunden werden.
* Um Objekte zu verbinden, die keine [Draft Linien](/Draft_Line/de "Draft Line/de") oder [Draft Polylinien](/Draft_Wire/de "Draft Wire/de") sind, kann zunächst versucht werden, [Draft Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de") und/oder [Draft Herabstufen](/Draft_Downgrade/de "Draft Downgrade/de") einmal oder mehrmals auf sie anzuwenden.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um Drähte zu verbinden, wird die Methode `join_wires` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `joinWires`. Diese Methode gibt `None` zurück.

```
join_wires(wires)

```

* `wires` ist eine Liste von Polylinienobjekten, die verbunden werden sollen.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(500, 0, 0)
p3 = App.Vector(500, 500, 0)
p4 = App.Vector(0, 500, 0)

wire1 = Draft.make_wire([p1, p2])
wire2 = Draft.make_wire([p2, p3])
wire3 = Draft.make_wire([p3, p4])
wire4 = Draft.make_wire([p4, p1])

Draft.join_wires([wire1, wire3, wire2, wire4])
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Join/de&oldid=1499974>"