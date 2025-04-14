---
title: Sketcher Zuschneiden
---

|                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- |
| Sketcher Zuschneiden                                                                                                       |
| Menüeintrag                                                                                                                |
| Skizze → Sketcher-Werkzeuge → Kante zuschneiden                                                                            |
| Arbeitsbereich                                                                                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                                 |
| Standardtastenkürzel                                                                                                       |
| G T                                                                                                                        |
| Eingeführt in Version                                                                                                      |
| 0.12                                                                                                                       |
| Siehe auch                                                                                                                 |
| [Sketcher Teilen](/Sketcher_Split/de "Sketcher Split/de"), [Sketcher Verlängern](/Sketcher_Extend/de "Sketcher Extend/de") |
|                                                                                                                            |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_Trimming.svg) Sketcher Zuschneiden entfern eine Kante bis zu den nächsten Schnittstellen mit anderen Kanten. Schneidet die ausgewählte Kante keine andere Kante, wird sie ganz gelöscht

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_Trimming.svg) Kante zuschneiden drücken.
   - Den Menüeintrag **Skizze → Sketcher-Werkzeuge → ![](/images/Sketcher_Trimming.svg) Kante zuschneiden** auswählen.
   - Das Tastaturkürzel G dann T.
2. Ist eine Auswahl vorhanden, wird sie geleert. Das Werkzeug akzeptiert keine Vorauswahl.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Es gibt zwei Arbeitsweisen:
   - Zuschneiden durch Einzelklick:
     1. Den Mauszeiger auf den Abschnitt einer Kante bewegen, der entfernt werden soll.
     2. Die Kante wird hervorgehoben und die Zuschnittpositionen werden mit temporären Kreisen markiert.
     3. Zum Bestätigen klicken.
     4. Die Kante wird zwischen den markierten Stellen ausgeschnitten.
   - Zuschneiden durch Halten-und-Ziehen: [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
     1. Die linke Maustaste gedrückt halten.
     2. Mit dem Mauszeiger über die Abschnitte von Kanten fahren, die entfernt werden sollen.
     3. Die Abschnitte werden sofort entfernt.
     4. Die linke Maustaste loslassen.
5. Wird ein Abschnitt ausgeschnitten, werden vorhandene anwendbare Randbedingungen auf eine der resultierenden neuen Kanten übertragen. Zwischen den Enden der zugeschnittenen Kanten und den Schnittkanten wird die Randbedingung [PunktAufObjektFestlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") hinzugefügt.
6. Dieses Werkzeug läuft immer im Fortsetzen-Modus: Wahlweise weitere Kanten zuschneiden.
7. Zum Beenden in einen leeren Bereich der [3D-Ansicht](/3D_view/de "3D view/de") klicken, mit der rechten Maustaste klicken, Esc drücken, oder ein anderes Werkzeug zum Erstellen von Geometrie oder Randbedingungen starten.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Trimming/de&oldid=1414668>"
