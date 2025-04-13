---
title: Arch Bewehrung
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Bewehrung |
| Menüeintrag |
| 3D/BIM → Bewehrungswerkzeuge → Benutzerdefinierte Bewehrung |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de"), [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de") |
| Standardtastenkürzel |
| R B |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug **Arch Bewehrung** ermöglicht, [Bewehrungsstäbe](https://de.wikipedia.org/wiki/Bewehrungsstahl) (und Bewehrungsbügel) in [Arch Struktur](/Arch_Structure/de "Arch Structure/de")-Objekten zu positionieren.

Bewehrungen (Rebar-Objekte) basieren auf 2D-Profilen, wie [Draft-Objekte](/Draft_Workbench/de "Draft Workbench/de") und [Skizzen](/Sketcher_Workbench/de "Sketcher Workbench/de"), die auf einer Fläche des Strukturobjekts gezeichnet werden müssen. Nach der Erstellung können die Eigenschaften der Bewehrung angepasst werden, einschließlich der Anzahl und des Durchmessers der Bewehrungsstäbe sowie des Abstands zwischen ihnen und den Flächen des Strukturelements.

![](/images/Arch_Rebar_example.jpg)

Strukturobjekt mit zwei auf seinen Flächen gezeichneten Skizzen, die dann in zwei Sätze von Bewehrungsobjekten umgewandelt werden

## Anwendung

1. Zum Arbeitsbereich ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/de "BIM Workbench/de") wechseln.
2. Ein ![](/images/Arch_Structure.svg) [Arch Struktur](/Arch_Structure/de "Arch Structure/de")-Element erstellen
3. Zum Arbeitsbereich ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") wechseln.
4. Eine Fläche des Strukturelements auswählen.
5. Die Schaltfläche ![](/images/Sketcher_NewSketch.png) [Skizze erstellen](/Sketcher_NewSketch/de "Sketcher NewSketch/de") drücken, um eine neue Skizze auf der ausgewählten Fläche zu erstellen.
6. Den Verlauf des Bewehrungsstabes skizzieren.
7. Die Schaltfläche ![](/images/Sketcher_LeaveSketch.png) [Skizze verlassen](/Sketcher_LeaveSketch/de "Sketcher LeaveSketch/de") drücken, um die Skizze fertigzustellen.
8. Zurück zum Arbeitsbereich ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/de "BIM Workbench/de") wechseln.
9. Die gerade gezeichnete Skizze auswählen.
10. Die Schaltfläche ![](/images/Arch_Rebar.svg) Benutzerdefinierte Bewehrung drücken oder das Tastaturkürzel R dann B.
11. Die gewünschten Eigenschaften anpassen (der Bewehrungsstab erscheint möglicherweise nicht sofort, wenn einige der Eigenschaften einen unmöglichen Zustand schaffen; z.B. wenn der Stabdurchmesser 0 ist oder die Abstände größer sind als die Länge des Strukturelements).

Obwohl eine Bewehrung normalerweise in einer Arch-Struktur verwendet wird, kann sie seit FreeCAD v0.19 auch außerhalb eines Host-Objekts erstellt werden. Um eine Bewehrung in einem Objekt zu platzieren, muss einfach nur dessen Daten-Eigenschaft**Host** gesetzt werden.

## Optionen

* Der Verrundungswert wird als Vielfaches des Durchmessers ausgedrückt. Wenn ein Stab einen Durchmesser von 5 mm hat, führt ein Verrundungswert von 3 zu einem Radius von 15 mm in den Ecken.
* Standardwerte für neue Bewehrungsstäbe können in den Arch-Einstellungsdialogen gesetzt werden.
* Falls ein Richtungsvektor nicht angegeben wurde, werden die Werte für Richtung und Abstand zwischen den Stäben automatisch abhängig vom Strukturobjekt berechnet, indem die normale Ausrichtung der Basisskizze und der Schnittpunkt mit dem Strukturobjekt genommen werden. Wird ein Richtungsvektor angegeben, wird die Länge des Vektor ebenfalls berücksichtigt.
* Der Abstandswert wird aus der aktuellen Anzahl von Stäben berechnet und stellt den Abstand zwischen den Achsen der Stäbe dar. Es muss daher ein Stabdurchmesser subtrahiert werden, um die Weite des freien Raums zwischen den Stäben zu erhalten.

## Eigenschaften

Eine Arch-Bewehrung (Rebar-Objekt) besitzt die gemeinsamen Eigenschaften und Verhaltensweisen aller [Arch-Komponenten](/Arch_Component/de "Arch Component/de").

* Daten-Eigenschaft**Anzahl**: Die Anzahl von Stäben.
* Daten-Eigenschaft**Durchmesser**: Der Durchmesser der Stäbe.
* Daten-Eigenschaft**Richtung**: Die Richtung (und Länge), über die die Stäbe verteilt werden müssen. Wenn der Wert (0,0,0) ist, wird die Richtung automatisch abhängig vom Host-Strukturobjekt gesetzt
* Daten-Eigenschaft**Versatzbeginn**: Der Versatzabstand zwischen dem Rand des Strukturobjekts und dem ersten Stab.
* Daten-Eigenschaft**Versatzende**: Der Versatzabstand zwischen dem Rand des Strukturobjekts und dem letzten Stab.
* Daten-Eigenschaft**Verrundung**: Ein Verrundungswert in den Ecken der Stäbe, ausgedrückt als das Vielfache des Durchmessers.
* Daten-Eigenschaft**Leerraum**: Der Abstand zwischen den Achsen jedes Stabs.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Bewehrung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Rebar = makeRebar(baseobj=None, sketch=None, diameter=None, amount=1, offset=None, name="Rebar")

```

* Erstellt ein Objekt `Rebar` aus dem gegebenen Objekt `baseobj`, das ein [Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt ist, und einem Profil `sketch`.
  + `diameter`, `amount` und `offset` werden verwendet, um die Merkmale der Stäbe festzulegen.
  + Sind keine Werte für `diameter` (Durchmesser), `amount` (Menge) oder `offset` (Abstand) angegeben, werden die Standardwerte aus den [Arch Einstellungen](/Arch_Preferences/de "Arch Preferences/de") verwendet.

Beispiel:

```
import FreeCAD, Arch, Part

Structure = Arch.makeStructure(None, length=1000, width=1000, height=3000)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

p1 = FreeCAD.Vector(-400, 400, 0)
p2 = FreeCAD.Vector(400, 400, 0)
Sketch = FreeCAD.ActiveDocument.addObject('Sketcher::SketchObject', 'Sketch')
Sketch.MapMode = "FlatFace"
Sketch.Support = [(Structure, "Face6")]
Sketch.addGeometry(Part.LineSegment(p1, p2))
FreeCAD.ActiveDocument.recompute()

Rebar = Arch.makeRebar(Structure, Sketch, diameter=80, amount=7, offset=50)
Rebar.OffsetStart = 100
Rebar.OffsetEnd = 100
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Rebar/de&oldid=1541998>"