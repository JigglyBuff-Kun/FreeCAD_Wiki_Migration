---
title: Anleitung KinematischerZusammenbau
---

|                                                    |
| -------------------------------------------------- |
| Tutorial                                           |
| Topic                                              |
| Assembly3, ein einfacher Mechanismus               |
| Level                                              |
| Grundwissen über Assembly3-Werkzeuge ist hilfreich |
| Time to complete                                   |
| 30 Minuten                                         |
| Authors                                            |
| [FBXL5](/User:FBXL5 "User:FBXL5")                  |
| FreeCAD version                                    |
| 0.20 und neuer                                     |
| Example files                                      |
| _None_                                             |
| See also                                           |
| _None_                                             |
|                                                    |

## Einleitung

In dieser Anleitung geht es darum einen einfachen Mechanismus aufzubauen, hauptsächlich mit den Werkzeugen des externen Arbeitsbereichs ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench/de "Assembly3 Workbench/de").

Der kinematische Zusammenbau (die Kinematik), die erstellt wird, besteht aus vier Bauteilen: Eine Basis, ein Schieber, eine Kurbel und ein Pleuel (Verbindungsstange). Sie sind mit vier Gelenken verbunden.

![](/images/Assembly3_KinematicExample-01.png)

Die zusammengebauten Bauteile: Basis (bernsteinfarben), Schieber (hellblau), Kurbel (rot), Pleuel (grün)

## Zusammenbau

### Bauteile

Die **Basis** ist ein Objekt mit zwei Hauptgeometrien, ein Loch und ein Zapfen. Beide sind zylindrisch. Der Rest der Form ist nicht von Bedeutung für diese Anleitung, solange er keine Kollision verursacht. Gleiches gilt auch für die anderen Bauteile.

![](/images/Assembly3_KinematicExample-02.png)

Der **Schieber** bestecht aus einem Schaft mit einem Zapfen an einem Ende. Beide sind zylindrisch.

![](/images/Assembly3_KinematicExample-03.png)

Die **Kurbel** hat ein Loch und einen Zapfen. Wieder sind beide zylindrisch.

![](/images/Assembly3_KinematicExample-04.png)

Das **Pleuel** besitzt zwei zylindrische Löcher.

![](/images/Assembly3_KinematicExample-05.png)

### Verbindungen

#### Festgesetzte Basis

Damit der Zusammenbau an der gewünschten Position bleibt, sollte die Basis festgesetzt werden.

: (Wenn der Befehl ![](/images/Assembly_LockMover.svg) [Lock mover](/Assembly3_LockMover/de "Assembly3 LockMover/de") aktiviert ist, sind die Werkzeuge zum Bewegen deaktiviert, so lange ein festgesetztes Bauteil ausgewählt ist.)

1. Eine Fläche der Basis auswählen.
2. Die Schaltfläche ![](/images/Assembly_ConstraintLock.svg) [Locked](/Assembly3_ConstraintLock/de "Assembly3 ConstraintLock/de") drücken, um die Basis auf Dauer an ihrem Platz zu halten.

![](/images/Assembly3_KinematicExample-08.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-09.png)

Ausgewählte Fläche → Resultierendes Element

Dann werden alle vier Bauteile mit vier Gelenken verbunden. Die kinematische Kette beginnt an der Basis.

#### Basis-Schieber-Gelenk

Das Basis-Schieber-Gelenk ist ein **zylindrisches Gelenk**. Es ermöglicht dem Schieber sich entlang der Z-Achse des Loches in der Basis und um sie herum zu bewegen, während die Z-Achsen beider Elemente fluchtend (kollinear) ausgerichtet sind.

Die passende Randbedingung findet man unter "AxialAlignment". Sie funktioniert mit Elementen, die zylindrische Geometrie repräsentieren, wie zylindrische Flächen, kreisförmige Flächen und kreisförmige Kanten.

1. Die zylindrischen Flächen des Loches in der Basis und des Schieberschaftes auswählen.
2. Die Schaltfläche ![](/images/Assembly_ConstraintAxial.svg) [Create "AxialAlignment" constraint](/Assembly3_ConstraintAxial/de "Assembly3 ConstraintAxial/de") drücken.
3. Optional können die Label der erzeugten Elemente editiert werden (die Daten-Eigenschaft**Label**).

![](/images/Assembly3_KinematicExample-10.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-11.png)

Ausgewählte Flächen → Ausgerichtete Objekte

#### Basis-Kurbel-Gelenk

Das Basis-Kurbel-Gelenk ist ein **Scharnier**. Es ermöglicht der Kurbel sich um die Z-Achse des Zapfens der Basis zu drehen, während die Z-Achsen beider Elemente fluchtend (kollinear) ausgerichtet und der Abstand zwischen ihren XY-Ebenen konstant bleiben.

Die passende Randbedingung findet man unter "PlaneCoincident". Sie funktioniert mit Elementen, die ebene Geometrien repräsentieren, wie kreisförmige Flächen oder ringförmige Kanten (wie in diesem Falle).

1. Die kreisförmige Fläche oder die ringförmige Kante des Zapfens der Basis sowie die äußere kreisförmige Kante des Kurbellochs auswählen.
2. Die Schaltfläche ![](/images/Assembly_ConstraintCoincidence.svg) [Create "PlaneCoincident" constraint](/Assembly3_ConstraintCoincidence/de "Assembly3 ConstraintCoincidence/de") drücken.
3. Wahlweise können die Label der erzeugten Elemente editiert werden.

![](/images/Assembly3_KinematicExample-12.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-13.png)

Ausgewählte Fläche und Kante → Ausgerichtete Objekte

#### Schieber-Pleuel-Gelenk

Das Schieber-Pleuel-Gelenk ist ein **Scharnier**. Es ermöglicht dem Pleuel sich um die Z-Achse des Schieberzapfens zu drehen, während die Z-Achsen beider Elemente fluchtend (kollinear) ausgerichtet und der Abstand zwischen ihren XY-Ebenen konstant bleiben.

Die passende Randbedingung findet man wieder unter "PlaneCoincident". (siehe oben).

1. Die kreisförmige Fläche oder die ringförmige Kante des Schieberzapfens und die äußere kreisförmige Kante des Pleuelloches auswählen.
2. Die Schaltfläche ![](/images/Assembly_ConstraintCoincidence.svg) [Create "PlaneCoincident" constraint](/Assembly3_ConstraintCoincidence/de "Assembly3 ConstraintCoincidence/de") drücken.
3. Wahlweise können die Label der erzeugten Elemente editiert werden.

![](/images/Assembly3_KinematicExample-14.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-15.png)

Ausgewählte Fläche und Kante → Ausgerichtete Objekte

#### Kurbel-Pleuel-Gelenk

Das Kurbel-Pleuel-Gelenk ist ein **zylindrisches Gelenk**. Es ermöglicht dem Pleuel sich um die Z-Achse des Kurbelzapfens zu drehen und sich daran entlang zu bewegen, während die Z-Achsen beider Elemente fluchtend (kollinear) ausgerichtet sind. Aber nur die Drehung ist möglich, da die Verschubbewegung durch die Kombination aus Basis-Kurbel-Gelenk und Schieber-Pleuel-Gelenk verhindert wird.

Die passende Randbedingung findet man wieder unter "AxialAlignment" (siehe oben).

1. Die zylinderförmigen Flächen von Kurbelzapfen und Pleuelloch auswählen.
2. Die Schaltfläche ![](/images/Assembly_ConstraintAxial.svg) [Create "AxialAlignment" constraint](/Assembly3_ConstraintAxial/de "Assembly3 ConstraintAxial/de") drücken.
3. Wahlweise können die Label der erzeugten Elemente editiert werden.

![](/images/Assembly3_KinematicExample-16.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-01.png)

Ausgewählte Flächen → Ausgerichtete Objekte

#### Überzählige Randbedingungen

Wenn die Basis festgesetzt ist und alle vier Gelenke definiert sind, erscheinen zwei Meldungen im [Ausgabefenster](/Report_view/de "Report view/de"):

- Eine Warnung (orange): "...redundant constraints" (überzählige Randbedingungen).
- Eine einfache Meldung (schwarz): "...dof remaining: 0" (noch nicht bestimmte Freiheitsgrade).

Diese Kombination der Meldungen taucht auf, wenn ein Bauteil eines Zusammenbaus überbestimmt ist, aber der Gleichungslöser weiterhin in der Lage ist, gültige Lösungen zu finden. Aber was führt zu den überzähligen Randbedingungen?

Es ist die Z-Richtung der Zapfen. Wenn man sich z. B. den Schieberzapfen ansieht, erkennt man, dass die Z-Achse seines Element-Objekts parallel zu der Z-Achse des Zapfens der Basis festgelegt ist über die Zusammenbaukette Basis-Kurbel-Pleuel-Schieber. Das bedeutet, dass der Schieberzapfen an der Drehung um die X- und Y-Achse gehindert wird.

![](/images/Assembly3_KinematicExample-06.png)

Auf der anderen Seite wird die Drehung um die X-Achse (rot) schon duch das Basis-Kurbel-Gelenk verhindert; und daher ist der zugehörige Freiheitsgrad zweifach (also überzählig/redundant) festgelegt (bestimmt) und löst die Warnung aus.

: Um diese Redundanz zu vermeiden, könnte man ein HIlfsobjekt einfügen mit entsprechenden Randbedingungen, aber das gehört in eine andere Anleitung.
: Um die doppelte Festlegung des Abstandes zwischen Basis und Pleuel zu vermeiden, wurden unterschiedliche Randbedingungen verwendet und nur eine verhindert die Bewegung entlang der Z-Achse.

### Antrieb

Noch ist es ein statischer Zusammenbau. Um daraus einen kinematischen Zusammenbau zu machen, muss eine der Randbedingungen als Antrieb verwendet werden. Damit die Bedingung "PlaneCoincident" des Basis-Kurbel-Gelenks als Antrieb genutzt werden kann, muss man den Winkel zwischen dem Zapfen der Basis und der Kurbel steuern können. Dazu muss die Daten-Eigenschaft**Lock Angle** auf `true` gesetzt werden. Und für spätere Verwendung wird das Label der Randbedingung mit dem Suffix **.Driver** markiert.

Die Daten-Eigenschaft**Angle** kann jetzt verwendet werden, um die Kurbel zu drehen.

![](/images/Assembly3_KinematicExample-07.gif)

## Steuerung

Ein Dialogfenster zu haben, mit dem man die Werte von Eigenschaften ohne Tippen ändern kann und mit automatischer Neuberechnung, wäre nett.

Siehe dazu die Anleitung [Kinematiksteuerung](/Tutorial_KinematicController/de "Tutorial KinematicController/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_KinematicAssembly/de&oldid=1400306>"
