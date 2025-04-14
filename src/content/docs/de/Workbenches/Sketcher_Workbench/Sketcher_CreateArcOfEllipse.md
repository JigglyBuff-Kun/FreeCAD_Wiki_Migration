---
title: Sketcher EllipsenbogenErstellen
---

|                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------- |
| Sketcher EllipsenbogenErstellen                                                                                     |
| Menüeintrag                                                                                                         |
| Skizze → Skizzengeometrien → Ellipsenbogen erstellen                                                                |
| Arbeitsbereich                                                                                                      |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                          |
| Standardtastenkürzel                                                                                                |
| G E A                                                                                                               |
| Eingeführt in Version                                                                                               |
| 0.15                                                                                                                |
| Siehe auch                                                                                                          |
| [Sketcher EllipseDurchMittelpunktErstellen](/Sketcher_CreateEllipseByCenter/de "Sketcher CreateEllipseByCenter/de") |
|                                                                                                                     |

## Beschreibung

Das Werkzzeug ![](/images/Sketcher_CreateArcOfEllipse.svg) Ellipsenbogen erstellen erstellt einen Ellipsenbogen.

![](/images/Sketcher_CreateArcOfEllipse_Example.png)

Ellipsenbogen (weiß) mit interner Geometrie (dunkelgelb)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_CreateArcOfEllipse.svg) Ellipsenbogen erstellen drücken.
   - Den Menüeintrag **Skizze → Skizzengeometrien → ![](/images/Sketcher_CreateArcOfEllipse.svg) Ellipsenbogen erstellen** auswählen.
   - Das Tastaturkürzel G dann E dann A.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. Den Mittelpunkt des Bogens auswählen.
4. Einen Endpunkt einer der Achsen auswählen; dies legt auch einen der Radien fest.
5. Den Startpunkt des Bogens auswählen; dies legt auch den anderen Radius des Bogens fest.
6. Den Endpunkt des Bogens auswählen.
7. Der Ellipsenbogen wird erstellt inklusive der internen Geometrie (Hauptachse, Nebenachse und zwei Fokus-Punkte).
8. Läuft das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de"):
   1. Wahlweise weitere Kreise erstellen.
   2. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

## Hinweise

- Die Elemente der internen Geometrie können gelöscht werden. Sie können jederzeit mit [Sketcher RestoreInterna/delInterneAusrichtungsgeometrieWiederherstellen](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry") wiederhergestellt werden.
- Einmal erstellt, sind Haupt- und Nebenachse eines Ellipsenbogens fest zugeordnet und können nicht durch Ändern der Längen getauscht werden. Dies ist eine Folge der Parametrisierung des Gleichungslösers und des gleichen strengen Verhaltens von [OpenCASCADE](/OpenCASCADE/de "OpenCASCADE/de"). Ein Ellipsenbogen muss gedreht werden, um die Achsen zu tauschen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcOfEllipse/de&oldid=1418606>"
