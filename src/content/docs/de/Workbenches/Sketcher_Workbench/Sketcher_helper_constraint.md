---
title: Sketcher Helferrandbedingung
---

## Übersicht

![](/images/Sketcher_helper_constraint_example1.png)

Beispiel einer Helferrandbedingung (Randbedingung5 - Punkt auf Kreis) für eine Randbedingung Tangential festlegen (Randbedingung6; im Tangente im Punkt Modus). In diesem Fall wird nur eine Helferrandbedingung verwendet, da der Tangentenpunkt der Endpunkt des Ellipsenhauptdurchmessers ist, der von Natur aus auf der Ellipse liegt.

Die Helferrandbedingung ist eine reguläre Sketcher-Randbedingung, die als Teil einer komplexeren Festlegung benötigt wird, aber in der Benutzeroberfläche offengelegt wird, um den Umgang mit Redundanz zu erleichtern. Für die Randbedingung [Lichtbrechung (nach Snellius-Gesetz) festlegen](/Sketcher_ConstrainSnellsLaw/de "Sketcher ConstrainSnellsLaw/de") müssen beispielsweise die beiden Linien, die Lichtstrahlen darstellen, verbunden werden (Randbedingung [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de")), und die Verbindung muss auf der Schnittstelle liegen (Randbedingung [Punkt Auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de")).

Helferrandbedingungen werden automatisch hinzugefügt, wenn sie benötigt werden. Die Entscheidung, ob sie benötigt werden, wird derzeit durch Auswerten des Helferrandbedingungsfehlers für den aktuellen Zustand der Geometrie getroffen (dies kann sich in zukünftigen Versionen ändern). Wenn der Fehler klein genug ist, wird die Randbedingung als unnötig angesehen und nicht hinzugefügt. In einigen Fällen kann diese Logik zu Fehlern führen (die Randbedingung kann versehentlich erfüllt werden, was leicht passieren kann, wenn im Sketcher das Einrasten auf dem Raster aktiviert ist).

Wenn dies geschieht (eine Helferrandbedingung fehlt, und die erforderliche Bedingung wird andernfalls nicht erfüllt), wird die komplexe Randbedingung zerstört. Sie wird etwas tun, aber das tatsächliche Verhalten ist undefiniert. Eine solche zerstörte Randbedingung kann durch manuelles Hinzufügen der fehlenden Helferrandbedingung repariert werden.

Zurzeit sind Helferrandbedingungen erforderlich für:

- Randbedingung [Tangential oder kollinear festlegen](/Sketcher_ConstrainTangent/de "Sketcher ConstrainTangent/de") (im Tangente im Punkt Modus; zwei Randbedingungen Punkt auf Objekt festlegen sind erforderlich).
- Randbedingung [Rechtwinklig festlegen](/Sketcher_ConstrainPerpendicular/de "Sketcher ConstrainPerpendicular/de") (im Rechtwinklig im Punkt Modus; zwei Randbedingungen Punkt auf Objekt festlegen sind erforderlich)
- Randbedingung [Winkel festlegen](/Sketcher_ConstrainAngle/de "Sketcher ConstrainAngle/de") (im Winkel im Punkt Modus; zwei Randbedingungen Punkt auf Objekt festlegen sind erforderlich)
- Randbedingung [Lichtbrechung (nach Snellius-Gesetz) festlegen](/Sketcher_ConstrainSnellsLaw/de "Sketcher ConstrainSnellsLaw/de") (die Randbedingungen Koinzident festlegen und Punkt auf Objekt festlegen sind erforderlich)

## Skripten

Wenn Randbedingungen, die Helfer erfordern, aus Python hinzugefügt werden, werden keine Helferrandbedingungen automatisch hinzugefügt. Man kann die automatische Entscheidungsfindung der UI-Befehle in einem Skript nachbilden, indem man die folgenden Funktionen testet, die speziell für diesen Zweck hinzugefügt und in den UI-Routinen verwendet werden:

```
Sketch.isPointOnCurve(icurve,x,y)

```

`isPointOnCurve` prüft, ob ein virtueller Punkt, der durch die Skizzenkoordinaten `x,y` (Fließkommawerte) festgelegt ist, eine virtuelle Randbedingung Punkt auf Objekt festlegen erfüllt, d.h. ob er auf der Kurve mit dem Kurvenindex `icurve` liegt. Gibt True zurück, wenn der Punkt auf der Kurve liegt, und False, wenn er nicht auf der Kurve liegt.

```
Sketch.calculateConstraintError(iconstr)

```

`calculateConstraintError` wertet eine Fehlerfunktion einer Randbedingung aus, die durch ihren Index `iconstr` in der Skizze angegeben ist. Wenn es nur eine Fehlerfunktion in der Randbedingung gibt, ist der Rückgabewert der vorzeichenbehaftete Rückgabewert der Fehlerfunktion. Wenn der Randbedingung mehr als eine Fehlerfunktion zugeordnet ist (d.h. die Randbedingung entfernt mehr als einen Freiheitsgrad), ist der Rückgabewert der Effektivwert aller Fehlerfunktionen (immer positiv).

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_helper_constraint/de&oldid=1425859>"
