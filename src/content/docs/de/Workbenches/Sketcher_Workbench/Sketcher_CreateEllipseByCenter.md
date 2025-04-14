---
title: Sketcher EllipseUmMittelpunktErstellen
---

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| Sketcher EllipseUmMittelpunktErstellen                                                              |
| Menüeintrag                                                                                         |
| Skizze → Skizzengeometrien → Ellipse um Mittelpunkt erstellen                                       |
| Arbeitsbereich                                                                                      |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                          |
| Standardtastenkürzel                                                                                |
| G E E                                                                                               |
| Eingeführt in Version                                                                               |
| 0.15                                                                                                |
| Siehe auch                                                                                          |
| [Sketcher EllipsenbogenErstellen](/Sketcher_CreateArcOfEllipse/de "Sketcher CreateArcOfEllipse/de") |
|                                                                                                     |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_CreateEllipseByCenter.svg) EllipseUmMittelpunktErstellen: Erstellt eine Ellipse durch Festlegen ihres Mittelpunktes, eines Endpunktes einer ihrer Achsen und eines Punktes im Verlauf ihres Umfangs. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Oder durch Festlegen beider Endpunkte einer Achse und eines Punktes im Verlauf ihres Umfangs.

![](/images/Sketcher_CreateEllipseByCenter_Example.png)

Ellipse (weiß) mit interner Geometrie (dunkelgelb)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") (In-Ansicht-Parameter zur Lagebestimmung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")  
Dim-OVP = Dimensional On-View-Parameters (In-Ansicht-Parameter zur maßlichen Festlegung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_CreateEllipseByCenter.svg) Ellipse um Mittelpunkt erstellen drücken.
   - Den Menüeintrag **Skizze → Skizzengeometrien → ![](/images/Sketcher_CreateEllipseByCenter.svg) Ellipse um Mittelpunkt erstellen** auswählen.
   - Das Tastaturkürzel G dann E dann E.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. Der Abschnitt **Ellipsenparameter** ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) wird im oberen Bereich des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") eingefügt.
4. Wahlweise die M-Taste drücken oder einen Eintrag in der Ausklappliste **Modus** im Abschnitt **Ellipsenparameter** auswählen, um den Werkzeugmodus zu wechseln:
   - ![](/images/Sketcher_CreateEllipseByCenter.svg) **Mitte**:
     1. Den Mittelpunkt der Ellipse auswählen; oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
     2. Einen Endpunkt einer der Achsen der Ellipse auswählen; dies legt auch einen der Radien fest; oder mit Dim-OVP: diesen Radius und/oder den Winkel der Achse eingeben.
     3. Einen Punkt auswählen, um den anderen Radius der Ellipse festzulegen; oder mit Dim-OVP: diesen Radius eingeben.
   - ![](/images/Sketcher_CreateEllipseBy3Points.svg) **Achsen-Endpunkte**: [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
     1. Die Endpunkte einer der Achsen der Ellipse auswählen; dies legt auch einen der Radien fest; oder mit Pos-OVP: ihre X- und/oder Y-Koordinaten eingeben. Für diese Punkte werden keine Randbedingungen hinzugefügt.
     2. Einen Punkt auswählen, um den anderen Radius der Ellipse festzulegen; oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben. Für diese Punkt wird keine Randbedingung hinzugefügt.
5. Die Ellipse wird erstellt inklusive der internen Geometrie (Hauptachse, Nebenachse und zwei Fokus-Punkte) und mögliche auf Pos-OVP und Dim-OVP basierende Randbedingungen hinzugefügt.
6. Läuft das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de"):
   1. Wahlweise weitere Ellipsen erstellen.
   2. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

## Hinweise

- Die Elemente der internen Geometrie können gelöscht werden. Sie können jederzeit mit [Sketcher RestoreInterna/delInterneAusrichtungsgeometrieWiederherstellen](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry") wiederhergestellt werden.
- Einmal erstellt, sind Haupt- und Nebenachse einer Ellipse fest zugeordnet und können nicht durch Ändern der Längen getauscht werden. Dies ist eine Folge der Parametrisierung des Gleichungslösers und des gleichen strengen Verhaltens von [OpenCASCADE](/OpenCASCADE/de "OpenCASCADE/de"). Ein Ellipsenbogen muss gedreht werden, um die Achsen zu tauschen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateEllipseByCenter/de&oldid=1418690>"
