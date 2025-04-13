---
title: Sketcher Skripterstellung
---

## Erstellen eines Sketch-Objekts mit Python

So wird ein Sketch-Objekt erstellt:

```
import FreeCAD as App
import Part
import Sketcher

doc = App.newDocument()

sketch = doc.addObject("Sketcher::SketchObject", "Sketch")
sketch.addGeometry(Part.LineSegment(App.Vector(1.2, 1.8, 0),
                                    App.Vector(5.2, 5.3, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(6.5, 1.5, 0),
                                    App.Vector(10.2, 5.0, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(12.2, 1.0, 0),
                                    App.Vector(15.4, 5.0, 0)), False)

doc.recompute()

```

Es werden der neu erstellten Skizze auch noch drei [Linien](/Topological_data_scripting/de#Linie "Topological data scripting/de") hinzugefügt.

## Erstellen einer Randbedingung mit Python

Die geometrischen Randbedingungen
![](/src/assets/images/Sketcher_ConstrainCoincident.svg) ![](/src/assets/images/Sketcher_ConstrainPointOnObject.svg) ![](/src/assets/images/Sketcher_ConstrainVertical.svg) ![](/src/assets/images/Sketcher_ConstrainHorizontal.svg) ![](/src/assets/images/Sketcher_ConstrainParallel.svg) ![](/src/assets/images/Sketcher_ConstrainPerpendicular.svg) ![](/src/assets/images/Sketcher_ConstrainTangent.svg) ![](/src/assets/images/Sketcher_ConstrainEqual.svg) ![](/src/assets/images/Sketcher_ConstrainSymmetric.svg) und ![](/src/assets/images/Sketcher_ConstrainBlock.svg) können mit Makros und von der Python-Konsole aus durch Verwendung des folgenden Befehls erstellt werden:

```
sketch.addConstraint(Sketcher.Constraint(ConstraintType, EdgeOrPartOfEdge…))

```

Die maßlichen Randbedingungen ![](/src/assets/images/Sketcher_ConstrainLock.svg) ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) ![](/src/assets/images/Sketcher_ConstrainDistanceY.svg) ![](/src/assets/images/Sketcher_ConstrainDistance.svg) ![](/src/assets/images/Sketcher_ConstrainRadius.svg) ![](/src/assets/images/Sketcher_ConstrainDiameter.svg) ![](/src/assets/images/Sketcher_ConstrainAngle.svg) und die spezielle Randbedingung ![](/src/assets/images/Sketcher_ConstrainSnellsLaw.svg) [Lichtbrechung (nach Snellius-Gesetz) festlegen](/Sketcher_ConstrainSnellsLaw/de "Sketcher ConstrainSnellsLaw/de") können mit Makros und von der Python-Konsole aus durch Verwendung des folgenden Befehls erstellt werden:

```
sketch.addConstraint(Sketcher.Constraint(DimensionalConstraintType, EdgeOrPartOfEdge…, App.Units.Quantity("float_value unit")))

```

z. B.

```
sketch.addConstraint(Sketcher.Constraint(DimensionalConstraintType, EdgeOrPartOfEdge…, App.Units.Quantity("123.0 mm")))

```

Das erste Argument `ConstraintType` wird weiter unten unter [Arten von Randbedingungen](#Arten_von_Randbedingungen) beschrieben.

Eine Randbedingung kann bis zu sechs Argumente besitzen; das können Kanten sein oder Angaben, welcher Bestandteil einer Kante von der Randbedingung verwendet wird. In den Dokumentationen der einzelnen Randbedingungen findet man Details zu den Kombinationen von Kanten und Bestandteilen von Kanten, die als Argumente übergeben werden können.
Das Hauptproblem bei dieser Funktion besteht darin, die Liniennummer und die Knotennummer der zu bearbeitenden Linien korrekt zu identifizieren.
Die folgenden Abschnitte beschreiben, wie man die [Nummerierung einer Linie](#Identifizierung_der_Nummerierung_einer_Linie) und die [Nummerierung der Bestandteile einer Linie](#Identifizierung_der_Nummerierung_der_Abschnittsteile_einer_Linie) herausfindet.

## Arten von Randbedingungen

Bei geometrischen Randbedingungen ist das erste Argument eines der folgenden. Die möglichen Kombinationen von Argumenten, die für jede Beschränkung zulässig sind, findet man auf der Referenzseite der zugehörigen Funktion.

| Schlüsselwort     | Symbol | Funktion                                                                                               |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| `"Coincident"`    |        | [Koinzidenz festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de")             |
| `"PointOnObject"` |        | [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") |
| `"Vertical"`      |        | [Vertikal festlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de")                   |
| `"Horizontal"`    |        | [Horizontal festlegen](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de")             |
| `"Parallel"`      |        | [Parallel festlegen](/Sketcher_ConstrainParallel/de "Sketcher ConstrainParallel/de")                   |
| `"Perpendicular"` |        | [Rechtwinklig festlegen](/Sketcher_ConstrainPerpendicular/de "Sketcher ConstrainPerpendicular/de")     |
| `"Tangent"`       |        | [Tangential festlegen](/Sketcher_ConstrainTangent/de "Sketcher ConstrainTangent/de")                   |
| `"Equal"`         |        | [Gleichheit festlegen](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de")                       |
| `"Symmetric"`     |        | [Symmetrie festlegen](/Sketcher_ConstrainSymmetric/de "Sketcher ConstrainSymmetric/de")                |
| `"Block"`         |        | [Fixieren](/Sketcher_ConstrainBlock/de "Sketcher ConstrainBlock/de")                                   |

Bei maßlichen Randbedingungen ist das erste Argument eines der folgenden. Die möglichen Kombinationen von Argumenten, die für jede Randbedingung zulässig sind, findet man auf der Referenzseite der zugehörigen Funktion.

| Schlüsselwort     | Symbol | Funktion                                                                                           |
| ----------------- | ------ | -------------------------------------------------------------------------------------------------- |
| `"DistanceX"`     |        | [Horizontalen Abstand festlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de") |
| `"DistanceY"`     |        | [Vertikalen Abstand festlegen](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de")   |
| `"Distance"`      |        | [Abstand festlegen](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de")                |
| `"Radius"`        |        | [Radius oder Gewicht festlegen](/Sketcher_ConstrainRadius/de "Sketcher ConstrainRadius/de")        |
| `"Diameter"`      |        | [Durchmesser festlegen](/Sketcher_ConstrainDiameter/de "Sketcher ConstrainDiameter/de")            |
| `"Angle"`         |        | [Winkel festlegen](/Sketcher_ConstrainAngle/de "Sketcher ConstrainAngle/de")                       |
| `"AngleViaPoint"` |        | [Winkel festlegen](/Sketcher_ConstrainAngle/de "Sketcher ConstrainAngle/de")                       |

Die Randbedingung ![](/src/assets/images/Sketcher_ConstrainSnellsLaw.svg) [Lichtbrechung (nach Snellius-Gesetz) festlegen](/Sketcher_ConstrainSnellsLaw/de "Sketcher ConstrainSnellsLaw/de") verhält sich im Zusammenhang mit der Skripterstellung wie eine maßliche Randbedingung. Auch hier findet man auf der zugehörigen Referenzseite die möglichen Kombinationen von Argumenten, die für diese Randbedingung zulässig sind.

| Schlüsselwort | Symbol | Funktion                                                                                                           |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| `"SnellsLaw"` |        | [Lichtbrechung (nach Snellius-Gesetz) festlegen](/Sketcher_ConstrainSnellsLaw/de "Sketcher ConstrainSnellsLaw/de") |

Die Randbedingung ![](/src/assets/images/Sketcher_ConstrainLock.svg) [Sperren](/Sketcher_ConstrainLock/de "Sketcher ConstrainLock/de") ist ein GUI-Befehl, der die Randbedingungen ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) [Horizontalen Abstand festlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de") und ![](/src/assets/images/Sketcher_ConstrainDistanceY.svg) [Vertikalen Abstand festlegen](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de") erstellt; sie ist keine eigenständige Randbedingung.

## Identifizierung der Nummerierung einer Linie

Ich habe drei Linien gezeichnet, wie in der folgenden Abbildung dargestellt.

![](/src/assets/images/PartDesignConstraintPointOnPointScriptingFigure1.jpg)

Durch bewegen des Mauszeigers über die Linie, lässt sich die Liniennummer unten links im FreeCAD Fenster anzeigen, siehe nächste Abbildung.

![](/src/assets/images/PartDesignConstraintPointOnPointScriptingFigure2.jpg)

Leider beginnt die im FreeCAD-Fenster angezeigte Nummerierung bei 1, während die Nummerierung der Linien, die für das Skript verwendet wird, bei 0 beginnt: Das bedeutet, dass jedes Mal eins abgezogen werden muss, wenn man auf eine Linie verweisen möchte.

Positive Zahlen bezeichnen Skizzenkanten (Geraden, Kreise, Kegelschnitte, B-Splines usw.). Die folgenden Werte können verwendet werden, um Elemente zu kennzeichnen, die keine Skizzenkanten sind:

- `-1` bezeichnet die horizontale X-Achse
- `-2` bezeichnet die vertikale Y-Achse
- `-n` bezeichnet die Nummer des externen Geometrieelements `n-3` (z. B. würde das externe Geometrieelement mit Index 0 in der reduzierten Liste `Sketch.ExternalGeometry` mit -3 bezeichnet, das folgende Element in der reduzierten Liste mit -4 usw.).

## Identifizierung der Nummerierung der Bestandteile einer Linie

Um festzulegen, welcher Bestandteile einer Linie von einer Randbedingung betroffen ist, können die folgenden Werte verwendet werden:

- `0`, um anzugeben, dass die Randbedingung die gesamte Kante betrifft.
- `1`, um anzugeben, dass die Randbedingung den Anfangspunkt der Kante betrifft (ein Vollkreis hat keinen Anfangspunkt).
- `2`, um anzugeben, dass die Randbedingung den Endpunkt der Kante betrifft.
- `3`, um anzugeben, dass die Randbedingung den Mittelpunkt der Kante betrifft. Kann nur für Kreise, Kreisbögen, Ellipsen und Ellipsenbögen verwendet werden.
- `n`, um anzugeben, dass die Randbedingung den n-ten Kontrollpunkt eines B-Splines betrifft.

Die mit 1 und 2 gekennzeichneten Knoten sind in der Reihenfolge ihrer Erstellung nummeriert. Um die Reihenfolge ihrer Erstellung herauszufinden (sind viele Linien vorhanden, kann es schwierig werden sich zu erinnern, welcher Knoten zuerst erstellt wurde), musst nur der Mauszeiger über die beiden Knoten einer Linie bewegt werden, siehe folgende Abbildung.

![](/src/assets/images/PartDesignConstraintPointOnPointScriptingFigure3.jpg)

Liest man z. B. 4 und 5, bedeutet dies, dass der Knoten mit der niedrigeren Nummer (4 in diesem Beispiel) mit der Nummer 1 (zuerst im Skriptbefehl) und der Knoten mit der höheren Nummer (5 in diesem Beispiel) mit der Nummer 2 im Skriptbefehl referenziert wird.

## Beispiel

Nehmen wir das vorherige Beispiel der drei Linien. Die nachfolgende Abbildung zeigt die Nummerierung der einzelnen Linien und ihrer Knoten gemäß der Konvention für die Skripterstellung.

![](/src/assets/images/PartDesignConstraintPointOnPointScriptingFigure3Bis.jpg)

**blauer Text:** Nummerierung der Linie, **schwarzer Text:** Nummerierung der Knoten

Der Befehl `sketch.addConstraint(Sketcher.Constraint("Coincident", 1, 2, 2, 1))` ergibt folgendes Ergebnis:

![](/src/assets/images/PartDesignConstraintPointOnPointScriptingFigure4.jpg)

Der gesamte Kode zum Zeichnen der drei Linien und der Anwendung der Randbedingung "Coincident" auf zwei Punkte von zwei Linien sieht ungefähr so aus:

```
import FreeCAD as App
import Part
import Sketcher

doc = App.newDocument()

sketch = doc.addObject("Sketcher::SketchObject", "Sketch")
sketch.addGeometry(Part.LineSegment(App.Vector(1.2, 1.8, 0),
                                    App.Vector(5.2, 5.3, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(6.5, 1.5, 0),
                                    App.Vector(10.2, 5.0, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(12.2, 1.0, 0),
                                    App.Vector(15.4, 5.0, 0)), False)
sketch.addConstraint(Sketcher.Constraint("Coincident", 1, 2, 2, 1))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_scripting/de&oldid=1424960>"
