---
title: Sketcher RechtwinkligFestlegen
---

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| Sketcher RechtwinkligFestlegen                                                       |
| Menüeintrag                                                                          |
| Skizze → Sketcher-Randbedingungen → Rechtwinklig festlegen                           |
| Arbeitsbereich                                                                       |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                           |
| Standardtastenkürzel                                                                 |
| N                                                                                    |
| Eingeführt in Version                                                                |
| -                                                                                    |
| Siehe auch                                                                           |
| [Sketcher WinkelFestlegen](/Sketcher_ConstrainAngle/de "Sketcher ConstrainAngle/de") |
|                                                                                      |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_ConstrainPerpendicular.svg) Sketcher RechtwinkligFestlegen legt zwei Linien rechtwinklig zueinander fest oder zwei Kanten bzw. eine Kante und eine Achse an ihrer Verbindungsstelle. Linien werden als unendlich angesehen; offene Kurven werden ebenfalls virtuell verlängert. Die Randbedingung kann auch zwei Kanten verbinden und sie gleichzeitig an der Verbindungsstelle rechtwinklig festlegen.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_ConstrainPerpendicular.svg) Rechtwinklig festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingung → ![](/images/Sketcher_ConstrainPerpendicular.svg) Rechtwinklig festlegen** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Festlegen → ![](/images/Sketcher_ConstrainPerpendicular.svg) Rechtwinklig festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel N.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Eine der folgenden Möglichkeiten auswählen:
   - Zwei Kanten auswählen. Eine der Kanten muss eine gerade Linie oder eine Achse sein. Die andere kann eine beliebige Kante sein außer einem B-Spline.
   - Einen Punkt und zwei Kanten auswählen (in dieser Reihenfolge).
   - Eine Kante, einen Punkt und eine weitere Kante auswählen (wie vorher).
5. Eine Randbedingung Rechtwinklig festlegen wird hinzugefügt. Wurden ein Punkt und zwei Kanten ausgewählt, werden auch bis zu zwei Randbedingungen [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") hinzugefügt. Siehe [Beispiel](#Zwischen_zwei_Kanten_in_einem_Punkt).
6. Wahlweise weitere Randbedingungen erstellen.
7. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Eine der folgenden Möglichkeiten auswählen:
   - Zwei Kanten auswählen (siehe oben).
   - Zwei Endpunkte auswählen, die zu unterschiedlichen Kanten gehören.
   - Eine Kante und den Endpunkt einer anderen Kante auswählen (in bleliebiger Reihenfolge).
   - Einen Punkt und zwei Kanten auswählen (wie vorher).
2. Dieses Werkzeug aufrufen, wie oben beschrieben oder mit der folgenden zusätzlichen Möglichkeit:
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/images/Sketcher_ConstrainPerpendicular.svg) Rechtwinklig festlegen** im Kontextmenü auswählen.
3. Eine Randbedingung Rechtwinklg festlegen wird hinzugefügt. Wurden ein Punkt und zwei Kanten ausgewählt, können auch bis zu zwei Randbedingungen [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") hinzugefügt werden. Siehe [Beispiele](#Zwischen_zwei_Kanten_in_einem_Punkt).

## Beispiele

### Zwischen zwei Kanten

![](/images/Sketcher_ConsraintPerpendicular_mode1.png)

Die beiden Kanten werden an ihrer (virtuellen) Schnittstelle rechtwinklig zueinander angeordnet. Ist eine der Kanten ein [Kegeschnitt](/Sketcher_Workbench/de#Sketcher_CompCreateConic "Sketcher Workbench/de"), wird ein [Punktobjekt](/Sketcher_CreatePoint/de "Sketcher CreatePoint/de") hinzugefügt, das mit jeweils einer Randbedingung [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") mit beiden (verlängerten) Kanten verbunden ist.

### Zwischen zwei Endpunkten

![](/images/Sketcher_ConsraintPerpendicular_mode2.png)

Die Endpunkte werden deckungsgleich (koinzident) und die Kanten rechtwinklig zueinander festgelegt.

### Zwischen Kante und Endpunkt

![](/images/Sketcher_ConsraintPerpendicular_mode3.png)

Der Endpunkt einer Kante wird auf der anderen Kante liegend und die Kanten in diesem Punkt rechtwinklig zueinander festgelegt.

### Zwischen zwei Kanten in einem Punkt

![](/images/Sketcher_ConsraintPerpendicular_mode4.png)

Die zwei Kanten werden in einem gegebenen Punkt rechtwinklig zueinander festgelegt. Der Punkt kann ein beliebiger Punkt sein z.B. der Mittelpunkt eines Kreises, der Endpunkt einer Kante oder der Ursprung; er kann zu einer der Kanten gehören und er kann auch ein [Punktobjekt](/Sketcher_CreatePoint/de "Sketcher CreatePoint/de") sein. Wenn erforderlich, werden Randbedingungen [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") hinzugefügt, um sicherzustellen, dass der Punkt auf beiden (verlängerten) Kanten liegt. Diese zusätzlichen Randbedingungen werden These additional constraints are called [Helferrandbedingungen](/Sketcher_helper_constraint/de "Sketcher helper constraint/de") genannt.

## Skripten

Die Randbedingung RechtwinkligFestlegen kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Befehlen erstellt werden:

```
# direct perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,icurve2))

# point-to-point perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,pointpos1,icurve2,pointpos2))

# point-to-curve perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,pointpos1,icurve2))

# perpendicular-via-point (plain constraint, helpers are not added automatically)
Sketch.addConstraint(Sketcher.Constraint('PerpendicularViaPoint',icurve1,icurve2,geoidpoint,pointpos))

```

wobei

: _ `Sketch` ein Skizzenobjekt ist.
_ `icurve1`, `icurve2` zwei ganze Zahlen (integer) sind, die die Kurven identifizieren, die rechtwinklig zueinander liegen sollen. Diese Ganzzahlen sind Indexwerte der Skizze (die entsprechenden Rückgabewerte von `Sketch.addGeometry`).
_ `pointpos1`, `pointpos2` `1` für den Startpunkt und `2` für den Endpunkt sein sollten.
_ `geoidpoint` und `pointpos` in `PerpendicularViaPoint` die Indizes sind, die die Schnittstelle (an der die Rechtwinkligkeit gilt) festlegen.

Die Seite [Sketcher Skripterstellung](/Sketcher_scripting/de "Sketcher scripting/de") erklärt die Werte, die für `incurve1`, `incurve2`, `pointpos1`, `pointpos2` und `geoidpoint` verwendet werden können und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainPerpendicular/de&oldid=1426448>"
