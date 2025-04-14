---
title: Sketcher BrechungNachSnelliusFestlegen
---

|                                                                                  |
| -------------------------------------------------------------------------------- |
| Sketcher ConstrainSnellsLaw                                                      |
| Menüeintrag                                                                      |
| Sketch → Skizzen-Beschränkungen → Lichtbrechung (nach Snellius-Gesetz) festlegen |
| Arbeitsbereich                                                                   |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                       |
| Standardtastenkürzel                                                             |
| K W                                                                              |
| Eingeführt in Version                                                            |
| 0.15                                                                             |
| Siehe auch                                                                       |
| _Keiner_                                                                         |
|                                                                                  |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_ConstrainSnellsLaw.svg) Sketcher ConstrainSnellsLaw Legt zwei Linien so fest, dass sie der Lichtbrechung entsprechen, die beim Passieren einer Grenzfläche auftritt, an der zwei Werkstoffe mit unterschiedlichen Brechungsindizes aufeinander treffen. Siehe [Snelliussches_Brechungsgesetz](https://de.wikipedia.org/wiki/Snelliussches_Brechungsgesetz).

![](/images/Snells_law2_witheq.svg)

Snelliussches Gesetz

## Anwendung

![](/images/Sketcher_SnellsLaw_Example1.png)

Die Reihenfolge der Klicks wird durch gelbe Pfeile mit Zahlen angezeigt. n1, n2 zeigen, wo sich die Brechungsindizes befinden.

1. Zwei Linien, die einen Lichtstrahl darstellen, und eine Kante, die eine Grenzschicht darstellt, vorbereiten. Die Linien sollten sich auf unterschiedlichen Seiten der Grenzschichtkante befinden, die eine [Linie](/Sketcher_CreateLine/de "Sketcher CreateLine/de"), ein [Kreisbogen](/Sketcher_CreateArc/de "Sketcher CreateArc/de"), ein [Kreis](/Sketcher_CreateCircle/de "Sketcher CreateCircle/de") oder ein [Kegelschnitt](/Sketcher_CompCreateConic/de "Sketcher CompCreateConic/de") sein kann.
2. Einen Endpunkt der ersten Linie, einen Endpunkt der zweiten Linie und die Grenzschichtkante auswählen. Bei der Auswahl ist die Reihenfolge zu beachten.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:

   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/images/Sketcher_ConstrainSnellsLaw.svg) Lichtbrechung (nach Snellius-Gesetz) festlegen** auswählen.
   - Das Tastaturkürzel K dann W.

4. Der Dialog **Brechungsindex-Verhältnis** wird geöffnet.
5. einen Wert für **Verhältnis n2/n1** eingeben, wobei **n2** für das Medium gilt, in dem sich die zweite ausgewählte Linie befindet, und **n1** für das Medium der ersten Linie gilt.
6. Eine Randbedingung Lichtbrechung (nach Snellius-Gesetz) festlegen wird hinzugefügt. Wenn nötig, werden die Endpunkte mit den Randbedingungen [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") und [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") mit der Grenzschichtkante verbunden. Diese zusätzlichen Randbedingungen werden [Helferrandbedingungen](/Sketcher_helper_constraint/de "Sketcher helper constraint/de") genannt.

## Hinweise

- Die eigentliche Randbedingung nach Snellius-Gesetz verwendet die einfache Gleichung n1 \* sin(theta1) = n2 \* sin(theta2). Es erfordert, dass die Linienenden durch andere Randbedingungen deckungsgleich (koinzident) und auf der Grenzlinie liegend festgelegt werden, andernfalls ist ihr Verhalten nicht definiert. Die notwendigen Helferrandbedingungen werden automatisch auf Grundlage der aktuellen Koordinaten der Elemente hinzugefügt.
- In Python müssen die Helferrandbedingungen manuell hinzugefügt werden (siehe [Skripten](#Skripten)).
- Diese Helferrandbedingungen können vorübergehend gelöscht und die Endpunkte auseinandergezogen werden, was nützlich sein kann, wenn man einen reflektierten Strahl oder einen Doppelbrechungsstrahl konstruieren möchte.
- Im Gegensatz zur Realität sind Brechungsindizes mit Lichtstrahlen verknüpft, aber nicht den Seiten der Grenze entsprechend. Dies ist nützlich, um die Doppelbrechung zu emulieren, Pfade verschiedener Wellenlängen aufgrund der Brechung zu konstruieren und den Winkel des Auftretens der Totalreflexion leicht zu konstruieren.
- Beide Strahlen können sich auf der gleichen Seite der Grenzfläche befinden und gleichzeitig die Gleichung der Randbedingung erfüllen. Dies ist physikalischer Unfug, es sei denn, das Verhältnis n2 / n1 ist 1,0; in diesem Fall emuliert die Randbedingung eine Reflexion.
- Kreis- und Ellipsenbögen werden auch als Strahlen akzeptiert. Aber auch dies ist physikalischer Unfug.

## Skripten

Die Randbedingungen können in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit dem folgenden Befehl erstellt werden:

```
Sketch.addConstraint(Sketcher.Constraint('SnellsLaw',line1,pointpos1,line2,pointpos2,interface,n2byn1))

```

wobei

: _ `Sketch` ein Skizzenobjekt ist.
_ `line1` und `pointpos1` zwei ganze Zahlen sind, die den Endpunkt der Linie im Medium mit dem Brechungsindex von _n1_ identifizieren. `line1` ist der Index der Linie in der Skizze (der Rückgabewert von Sketch.addGeometry), und `pointpos1` sollte 1 für den Startpunkt und 2 für den Endpunkt sein.

- `line2` und `pointpos2` die Indizes sind, die den Endpunkt der zweiten Linie angeben (in Medium _n2_)
- `interface` der Index der Linie ist, die die Position der Grenzfläche zwischen Medium _n1_ und Medium _n2_ darstellt.
- `n2byn1` eine Gleitkommazahl ist, die dem Verhältnis der Brechungsindizes _n2_/\*n1\* entspricht.

Die Seite [Sketcher Skripterstellung](/Sketcher_scripting/de "Sketcher scripting/de") erklärt die Werte, die für `line1`, `pointpos1`, `line2`, `pointpos2` und `interface` verwendet werden können und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Beispiel:

```
import Sketcher
import Part
import FreeCAD

StartPoint = 1
EndPoint = 2

f = App.activeDocument().addObject("Sketcher::SketchObject","Sketch")

# add geometry to the sketch
icir = f.addGeometry(Part.Circle(App.Vector(-547.612366,227.479736,0),App.Vector(0,0,1),68.161979))
iline1 = f.addGeometry(Part.LineSegment(App.Vector(-667.331726,244.127090,0),App.Vector(-604.284241,269.275238,0)))
iline2 = f.addGeometry(Part.LineSegment(App.Vector(-604.284241,269.275238,0),App.Vector(-490.940491,256.878265,0)))
# add constraints
# helper constraints:
f.addConstraint(Sketcher.Constraint('Coincident',iline1,EndPoint,iline2,StartPoint))
f.addConstraint(Sketcher.Constraint('PointOnObject',iline1,EndPoint,icir))
# the Snell's law:
f.addConstraint(Sketcher.Constraint('SnellsLaw',iline1,EndPoint,iline2,StartPoint,icir,1.47))

App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainSnellsLaw/de&oldid=1427262>"
