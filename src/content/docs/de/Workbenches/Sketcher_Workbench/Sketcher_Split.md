---
title: Sketcher Teilen
---

|                                                                      |
| -------------------------------------------------------------------- |
| Sketcher Teilen                                                      |
| Menüeintrag                                                          |
| Sketch → Sketcher-Werkzeuge → Kante teilen                           |
| Arbeitsbereich                                                       |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")           |
| Standardtastenkürzel                                                 |
| G Z                                                                  |
| Eingeführt in Version                                                |
| 0.20                                                                 |
| Siehe auch                                                           |
| [Sketcher Zuschneiden](/Sketcher_Trimming/de "Sketcher Trimming/de") |
|                                                                      |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_Split.svg) Sketcher Teilen teilt eine Kante in zwei auf. Ist die Kante eine geschlossene Kurve (z.B. ein Kreis, eineEllipse oder ein geschlossener B-Spline), wird sie in eine entsprechende offene Kurve umgewandelt (einen Kreisbogen, einen Ellipsenbogen oder einen offenen B-Spline).

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_Split.svg) Kante teilen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Werkzeuge →![](/src/assets/images/Sketcher_Split.svg) Kante teilen** auswählen.
   - Das Tastaturkürzel G dann Z.
2. Ist eine Vorauswahl vorhanden, wird sie geleert. Das Werkzeug akzeptiert keine Vorauswahl.
3. Der Mauszeiger wandelt sich in ein Kreuz mit dem Werkzeugsymbol.
4. Eine Kante andem Punkt anklicken, an dem sie aufgetrennt werden soll.
5. Ist die originale Kante eine Linie oder eine offene Kurve, werden zwei neue Kanten erstellt und mit einer Randbedingung [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") verbunden. Für geschlossene Kurven wird eine neue offene Kurve erstellt; die neue Verbindunsstelle erhält diese Randbedingung nicht. Vorhandene anwendbare Randbedingungen werden auf die neue(n) Kante(n) übertragen. Siehe [Hinweise](#Hinweise).
6. Dieses Werkzeug läuft immer im Fortsetzen-Modus: Wahlweise weitere Kanten teilen.
7. Zum Beenden, in einen leeren Bereich der [3D-Ansicht](/3D_view/de "3D view/de") klicken, die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zur Erstellung von Geometrien oder Randbedingungen auswählen.

## Hinweise

- Eine Randbedingung [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") wird auf die Mittelpunkte neuer Kreisbögen angewendet.
- Randbedingungen zum Festlegen von [Radius](/Sketcher_ConstrainRadius/de "Sketcher ConstrainRadius/de") und [Durchmesser](/Sketcher_ConstrainDiameter/de "Sketcher ConstrainDiameter/de") werden auf die neuen Randbedingungen kopiert (sie sind im Ergebnis überflüssig).
- Die Randbedingungen Koinzident festlegen und [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") werden auf die jeweils nähere neu erstellte Kante übertragen.
- Die Randbedingungen [Horizontal festlegen](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de") und [Vertikal festlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de") zwischen Punkten werden auf die jeweils nähere neu erstellte Kante übertragen.
- Gehören die vorgenannten Randbedingungen zu Linien, werden sie auf die neuen Linienabschnitte kopiert.
- Die Randbedingungen [Parallel festlegen](/Sketcher_ConstrainParallel/de "Sketcher ConstrainParallel/de") und [Rechtwinklig festlegen](/Sketcher_ConstrainPerpendicular/de "Sketcher ConstrainPerpendicular/de") werden auf die neuen Linienabschnitte kopiert; für neue Kreisbögen werden sie nur jeweils einmal auf den näheren kopiert.
- Die Randbedingungen [Horizontalen Abstand festlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de"), [Vertikalen Abstand festlegen](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de") und [Abstand festlegen](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de") werden auf die jeweils nähere neu erstellte Kante übertragen.
- Die Randbedingungen [Winkel festlegen](/Sketcher_ConstrainAngle/de "Sketcher ConstrainAngle/de"), [Symmetrisch festlegen](/Sketcher_ConstrainSymmetric/de "Sketcher ConstrainSymmetric/de") und [Fixieren](/Sketcher_ConstrainBlock/de "Sketcher ConstrainBlock/de") werden derzeit nicht übertragen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Split/de&oldid=1414678>"
