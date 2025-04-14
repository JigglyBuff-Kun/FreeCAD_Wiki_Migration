---
title: Sketcher TangentialFestlegen
---

|                                                                         |
| ----------------------------------------------------------------------- |
| Sketcher TangentialFestlegen                                            |
| Menüeintrag                                                             |
| Skizze → Sketcher-Randbedingungen → Tangential oder kollinear festlegen |
| Arbeitsbereich                                                          |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")              |
| Standardtastenkürzel                                                    |
| T                                                                       |
| Eingeführt in Version                                                   |
| -                                                                       |
| Siehe auch                                                              |
| _Keiner_                                                                |
|                                                                         |

## Beschreibung

The ![](/images/Sketcher_ConstrainTangent.svg) [Sketcher ConstrainTangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent") tool constrains two edges, or an edge and an axis, to be tangent. Lines are treated as infinite, and open curves are virtually extended as well. The constraint can also connect two edges, forcing them to be tangent at the joint. If two lines are selected, or a line and the endpoint of another line, the lines are made collinear.

Die Randbedingung TangentialFestlegen legt fest, dass sich zwei Kurven berühren (sie tangential sind). Linien werden als unendlich angesehen, und Bögen werden wie Vollkreise/Ellipsen behandelt. Die Randbedingung ist auch in der Lage, zwei Kurven miteinander zu verbinden, und sie gleichzeitig an der Verbindungsstelle tangential festzulegen, wodurch die Verbindung glatt wird.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Sicherstellen, dass die Auswahl leer ist.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_ConstrainTangent.svg) Tangential oder kollinear festlegen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Randbedingungen → ![](/images/Sketcher_ConstrainTangent.svg) Tangential oder kollinear festlegen** auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Festlegen → ![](/images/Sketcher_ConstrainTangent.svg) Tangential oder kollinear festlegen** im Kontextmenü auswählen.
   - Das Tastaturkürzel T.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Eine der folgenden Möglichkeiten auswählen:
   - Zwei beliebige Kanten, außer B-Splines, auswählen.
   - Einen Punkt und zwei Kanten auswählen (in dieser Reihenfolge).
   - Eine Kante, einen Punkt und eine weitere Kante auswählen (wie vorher).
5. Eine Randbedingung Tangential oder kollinear festlegen wird hinzugefügt. Wurden ein Punkt und zwei Kanten ausgewählt, können bis zu zwei Randbedingungen [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") hinzugefügt werden. Siehe [Beispiele](#Zwischen_zwei_Kanten_in_einem_Punkt).
6. Wahlweise weitere Randbedingungen erstellen.
7. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

### Einmal-Ausführen-Modus

1. Eine der folgenden Möglichkeiten auswählen:
   - Zwei Kanten auswählen (siehe oben).
   - Zwei Kanten auswählen, die zu unterschiedlichen Kanten gehören.
   - Eine Kante und den Endpunkt einer anderen Kante auswählen (in beliebiger Reihenfolge).
   - Einen Punkt und zwei Kanten auswählen (wie vorher).
2. Das Werkzeug aufrufen, wie oben beschrieben oder mit der folgenden zusätzlichen Möglichkeit:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/images/Sketcher_ConstrainTangent.svg) Tangential oder kollinear festlegen** im Kontextmenü auswählen.
3. Eine Randbedingung Tangential oder kollinear festlegen wird hinzugefügt. Wurden ein Punkt und zwei Kanten ausgewählt, können auch bis zu zwei Randbedingungen [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") hinzugefügt werden. Siehe [Beispiele](#Zwischen_zwei_Kanten_in_einem_Punkt).

## Beispiele

### Zwischen zwei Kanten

![](/images/Sketcher_ConsraintTangent_mode1.png)

Die zwei Kanten werden tangential ausgerichtet. Ist eine der Kanten ein [Kegelschnitt](/Sketcher_Workbench/de#Sketcher_CompCreateConic "Sketcher Workbench/de"), wird ein [Punktobjekt](/Sketcher_CreatePoint/de "Sketcher CreatePoint/de") hinzugefügt, das mit jeweils einer Randbedingung [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") mit beiden (verlängerten) Kanten verbunden ist.

Es wird nicht empfohlen den Berührpunkt manuell zu bestimmen, indem ein Punkt erstellt wird, der auf beiden Kurven liegend festgelegt wird. Dies funktioniert im Prinzip, aber die Konvergenz der Lösung wird erheblich erschwert, sprunghafter und benötigt ungefähr doppelt so viele Iterationen wie normal. Wird der Berührpunkt benötigt, werden stattdessen zwei Kanten und ein vorhandener Punkt ausgewählt.

### Zwischen zwei Endpunkten

![](/images/Sketcher_ConsraintTangent_mode2.png)

Die Endpunkte werden koinzident (deckungsgleich) festgelegt und der Winkel zwischen den Kanten in diesem Punkt auf 180° (stumpfe Verbindung) oder 0° (Scharfe Verbindung) festgelegt, abhängig von der Positionierung der Kanten bevor die Randbedingung zugeordnet wurde.

### Zwischen Kante und Endpunkt

![](/images/Sketcher_ConsraintTangent_mode3.png)

Der Endpunkt einer Kante wird auf der anderen Kante liegend und die Kanten in diesem Punkt tangential zueinander festgelegt.

### Zwischen zwei Kanten in einem Punkt

![](/images/Sketcher_ConsraintTangent_mode4.png)

Die zwei Kanten werden in einem gegebenen Punkt tangential zueinander festgelegt. Der Punkt kann ein beliebiger Punkt sein z.B. der Mittelpunkt eines Kreises, der Endpunkt einer Kante oder der Ursprung; er kann zu einer der Kanten gehören und er kann auch ein [Punktobjekt](/Sketcher_CreatePoint/de "Sketcher CreatePoint/de") sein. Wenn erforderlich, werden Randbedingungen [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") hinzugefügt, um sicherzustellen, dass der Punkt auf beiden (verlängerten) Kanten liegt. Diese zusätzlichen Randbedingungen werden These additional constraints are called [Helferrandbedingungen](/Sketcher_helper_constraint/de "Sketcher helper constraint/de") genannt.

Verglichen mit der direkten Tangentialität ist diese Randbedingung langsamer, weil mehr Freiheitsgrade involviert sind, aber wenn der Berührungspunkt benötigt wird, ist dies der empfohlene Modus, weil er eine bessere Konvergenz der Lösung aufweist.

### Zwischen zwei Linien

![](/images/Sketcher_ConstraintTangent_mode5.png)

Die beiden Linien werden kollinear zueinander ausgerichtet.

## Skripten

Die Randbedingung TangentialFestlegen kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Befehlen erstellt werden:

```
# direct tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,icurve2))

# point-to-point tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,pointpos1,icurve2,pointpos2))

# point-to-curve tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,pointpos1,icurve2))

# tangent-via-point (plain constraint, helpers are not added automatically)
Sketch.addConstraint(Sketcher.Constraint('TangentViaPoint',icurve1,icurve2,geoidpoint,pointpos))

```

wobei

: _ `Sketch` ein Skizzenobjekt ist.
_ `icurve1`, `icurve2` zwei ganze Zahlen (integer) sind, die die Kurven identifizieren, die zueinander tangential liegen sollen. Diese Ganzzahlen sind Indexwerte der Skizze (die entsprechenden Rückgabewerte von `Sketch.addGeometry`).
_ `pointpos1`, `pointpos2` 1 für den Startpunkt und 2 für den Endpunkt sein sollten.
_ `geoidpoint` und `pointpos` in `TangentViaPoint` die Indizes sind, die den Berührpunkt festlegen.

Die Seite [Sketcher Skripterstellung](/Sketcher_scripting/de "Sketcher scripting/de") erklärt die Werte, die für `incurve1`, `incurve2`, `pointpos1`, `pointpos2`, `geoidpoint` und `pointpos` verwendet werden können und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainTangent/de&oldid=1438093>"
