---
title: Sketcher VerrundungErstellen
---

|                                                            |
| ---------------------------------------------------------- |
| Sketcher VerrundungErstellen                               |
| Menüeintrag                                                |
| Skizze → Sketcher-Werkzeuge → Verrundung erstellen         |
| Arbeitsbereich                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") |
| Standardtastenkürzel                                       |
| G F F                                                      |
| Eingeführt in Version                                      |
| -                                                          |
| Siehe auch                                                 |
| _Keiner_                                                   |
|                                                            |

## Beschreibung

das Werkzeug ![](/src/assets/images/Sketcher_CreateFillet.png) VerrundungErstellen: Erstellt eine Verrundung zwischen zwei nicht parallelen Kanten. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Werkzeug kann auch eine Fase erstellen

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Werden zwei gerade Kanten, die durch eine Randbedingung [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") verbunden sind, mit einer Verrundung oder Fase versehen, kann der Eckpunkt wahlweise erhalten bleiben. Das Werkzeug fügt dann ein [Punkt](/Sketcher_CreatePoint/de "Sketcher CreatePoint/de")-Objekt hinzu, dass durch die Randbedingung [PunktAufObjektFestlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") mit beiden Kanten verbunden wird. Randbedingungen des Eckpunktes werden auf das neue Punkt-Objekt übertragen.

![](/src/assets/images/SketcherCreateFilletExample.png)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_CreateFillet.svg) Verrundung erstellen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Werkzeuge → ![](/src/assets/images/Sketcher_CreateFillet.svg) Verrundung erstellen** auswählen.
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_CreateFillet.svg) Verrundung erstellen** im Kontextmenü auswählen.
   - Das Tastaturkürzel G dann F dann F.
2. Eine vorhandene Auswahl wird gelöscht; das Werkzeug akzeptiert keine Vorauswahl.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Der Abschnitt **Parameter der Verrundung/Fase** ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) wird im oberen Bereich des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") eingefügt.
5. Wahlweise die U-Taste drücken oder die Checkbox **Eckpunkt erhalten** im Abschnitt **Parameter der Verrundung/Fase** deaktivieren, um die Option abzuwählen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
6. Wahlweise die M-Taste drücken oder einen Eintrag in der Ausklappliste **Modus** im Abschnitt **Parameter der Verrundung/Fase** auswählen, um den Werkzeugmodus zu wechseln:
   - ![](/src/assets/images/Sketcher_CreateFillet.svg) **Fillet**
   - ![](/src/assets/images/Sketcher_CreateChamfer.svg) **Chamfer**
7. Eine der folgenden Möglichkeiten auswählen:
   - Einen Punkt auswählen, der zwei gerade, nicht parallele Kanten mit einer Randbedingung [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") verbindet.
   - Zwei nicht parallele Kanten auswählen. Jede der Kanten kann eine gerade [Linie](/Sketcher_CreateLine/de "Sketcher CreateLine/de"), ein [Kreisbogen](/Sketcher_CreateArc/de "Sketcher CreateArc/de"), ein [Ellipsenbogen](/Sketcher_CreateArcOfEllipse/de "Sketcher CreateArcOfEllipse/de"), ein [Hyperbelbogen](/Sketcher_CreateArcOfHyperbola/de "Sketcher CreateArcOfHyperbola/de") oder ein [aParabelbogen](/Sketcher_CreateArcOfParabola/de "Sketcher CreateArcOfParabola/de") sein. [B-Splines](/Sketcher_Workbench/de#Sketcher_CompCreateBSpline "Sketcher Workbench/de") werden zurzeit nicht unterstützt.
8. Die Verrundung bzw. Fase wird erstellt, inklusive eines Punkt-Objekts falls eine Ecke erhalten wurde. Für eine Fase wird auch ein Hilfsgeometriebogen erstellt.
9. Dieses Werkzeug läuft immer im Fortsetzen-Modus: wahlweise weitere Punkte und/oder Kanten auswählen.
10. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

## Hinweise

- Der Hilfsgeometriebogen einer Fase ist nicht sichtbar außerhalb der Skizze. Er kann nicht gelöscht werden, ohne die Geometrie der Fase aufzubrechen.
- Einige ([Kegelschnitt](/Sketcher_Workbench/de#Sketcher_CompCreateConic "Sketcher Workbench/de"))-Kurven müssen [zugeschnitten](/Sketcher_Trimming/de "Sketcher Trimming/de") werden, bevor sie verrundet werden können.
- Der Verrundungsradius hängt von der Auswahlmethode ab. Wird eine Randbedingung [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") ausgewählt, die zwei gerade Kanten verbindet, wird der Verrundungsradius von der Länge der kürzesten Kante abgeleitet. Werden zwei Kanten ausgewählt, ist der Radius gleich dem Abstand vom ersten angeklickten Punkt zum Schnittpunkt der (verlängerten) Kanten.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateFillet/de&oldid=1418732>"
