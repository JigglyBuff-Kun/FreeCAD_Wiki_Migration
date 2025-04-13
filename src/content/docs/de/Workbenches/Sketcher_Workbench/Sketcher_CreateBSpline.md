---
title: Sketcher B-SplineErstellen
---

|                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------- |
| Sketcher B-SplineErstellen                                                                                        |
| Menüeintrag                                                                                                       |
| Sketch → Skizzengeometrien → B-Spline erstellen                                                                   |
| Arbeitsbereich                                                                                                    |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                        |
| Standardtastenkürzel                                                                                              |
| G B B                                                                                                             |
| Eingeführt in Version                                                                                             |
| 0.17                                                                                                              |
| Siehe auch                                                                                                        |
| [Sketcher GeschlossenenB-SplineErstellen](/Sketcher_CreatePeriodicBSpline/de "Sketcher CreatePeriodicBSpline/de") |
|                                                                                                                   |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_CreateBSpline.svg) Sketcher B-SplineErstellen erstellt eine offene [B-Spline](/B-Splines "B-Splines")-Kurve durch Kontrollpunkte. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Oder wahlweise durch Knotenpunkte.

![](/src/assets/images/Sketcher_CreateBSpline_Example.png)

Eine B-Spline-Kurve (weiß), festgelegt durch 4 Kontrollpunkte.  
Das Kontrollpolygon (grün) verbindet die Kontrollpunkte (markiert mit dunkelgelben Gewichtskreisen).  
Die Zahl 3 (grün, ohne Klammern) in der Mitte repräsentiert den [Grad](/Sketcher_BSplineIncreaseDegree/de#Beschreibung "Sketcher BSplineIncreaseDegree/de") des B-Splines.  
Die Zahlen (1) und (4) (grün, in runden Klammern) repräsentieren die [Vielachheit](/Sketcher_BSplineDecreaseKnotMultiplicity/de#Beschreibung "Sketcher BSplineDecreaseKnotMultiplicity/de") der Knotenpunkte.  
Die Zahlen [1.00] (grün, in eckigen Klammern) repräsentieren die Gewichte der Kontrollpunkte.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_CreateBSpline.svg) B-Spline durch Kontrollpunkte drücken.
   - Den Menüeintrag **Skizze → Skizzengeometrien → ![](/src/assets/images/Sketcher_CreateBSpline.svg) B-Spline erstellen** auswählen.
   - Ein Rechtsklick in der [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_CreateBSpline.svg) B-Spline erstellen** im Kontextmenü auswählen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
   - Das Tastaturkürzel G dann B dann B.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. DerAbschnitt **B-Spline-Parameter** ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) wird im oberen Bereich des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") eingefügt.
4. Wahlweise die M-Taste drücken oder eine der Möglichkeiten im Auswahlfeld Modus des Abschnitts Parameter auswählen, um den Werkzeugmodus zu ändern:
   - ![](/src/assets/images/Sketcher_CreateBSpline.svg) **Durch Kontrollpunkte**:
     1. Wahlweise den **Grad** anpassen (kann auch nach dem Auswählen der Punkte erfolgen):
        - Eine Zahl größer als null eingeben.
        - Die U-Taste drücken, um den Grad zu erhöhen.
        - Die J-Taste drücken, um den Grad zu verringern.
   - ![](/src/assets/images/Sketcher_CreateBSplineByInterpolation.svg) **Durch Knoten**: [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
     1. B-Splines durch Knoten werden immer mit Grad 3 erstellt, aber der Grad kann nachträglich angepasst werden. Siehe [Hinweise](#Hinweise).
5. Wahlweise die R-Taste drücken oder die CheckBox **Periodisch** aktivieren, um einen geschlosenen B-Spline zu erstellen (kann auch nach dem Auswählen der Punkte erfolgen). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
6. Mehrere Punkte auswählen.
7. Wahlweise vor dem Beenden die F-Taste drücken, um den letzten Punkt zu löschen.
8. Die rechte Maustaste oder Esc drücken, um die Eingabe abzuschließen.
9. Der B-Spline wird erstellt, einschließlich der zugehörigen internen Geometrie (Gewichtskreise und Knotenpunkte).
10. Wenn das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de") läuft:
    1. Wahlweise weitere B-Splines erstellen.
    2. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

## Hinweise

- Elemente der internen Geometry können gelöscht werden. Sie können jederzeit neu erstellt werden mit [Sketcher InterneAusrichtungsgeometrieWiederherstellen](/Sketcher_RestoreInternalAlignmentGeometry/de "Sketcher RestoreInternalAlignmentGeometry/de").
- Nachdem ein B-Spline erstellt wurde, ist es möglich, die Gewichte der Kontrollpunkte festzulegen, indem die Radien der Gewichtskreise geändert werden. Die Gleichheitsbedingungen der Kreise müssen zuerst gelöscht werden. Die Randbedingung Radius ist frei wählbar, das Gewicht der Kontrollpunkte wird durch die relativen Radien der Kreise definiert. Es funktioniert ähnlich wie die Schwerkraft: Je größer ein Kreis im Verhältnis zu den anderen ist, desto stärker wird die Kurve von diesem Kontrollpunkt angezogen.
- Der Grad eines erstellten B-Splines kann [erhöht](/Sketcher_BSplineIncreaseDegree/de "Sketcher BSplineIncreaseDegree/de") oder [verringert](/Sketcher_BSplineDecreaseDegree/de "Sketcher BSplineDecreaseDegree/de") werden und auch die Vielfachheit seiner Knoten kann [erhöht](/Sketcher_BSplineIncreaseKnotMultiplicity/de "Sketcher BSplineIncreaseKnotMultiplicity/de") oder [verringert](/Sketcher_BSplineIncreaseKnotMultiplicity/de "Sketcher BSplineIncreaseKnotMultiplicity/de") werden.
- Die Sichtbarkeit des [Grades](/Sketcher_BSplineDegree/de "Sketcher BSplineDegree/de"), des [Kontrollpolygons](/Sketcher_BSplinePolygon/de "Sketcher BSplinePolygon/de"), des [Krümmungskamms](/Sketcher_BSplineComb/de "Sketcher BSplineComb/de"), der [Knotenvielfachheit](/Sketcher_BSplineKnotMultiplicity/de "Sketcher BSplineKnotMultiplicity/de") und des [Kontrollpunktgewichts](/Sketcher_BSplinePoleWeight/de "Sketcher BSplinePoleWeight/de") können in der Symbolleiste [Sketcher visuell](/Sketcher_Workbench/de#Sketcher_visuell "Sketcher Workbench/de") ein- bzw. ausgeschaltet werden.

## Einschränkungen

- Einige Arten von Randbedingungen werden derzeit nicht unterstützt.
- Die festgelegte Vielfachheit der Knoten wird eventuell nicht immer berücksichtigt:
  - Für einen geschlossenen Spline hat der erste Knoten (deckungsgleich mit dem letzten) immer eine Vielfachheit von 2.
  - Für einen offenen Spline haben der erste und der letzte Knoten immer eine Vilefachheit von 4.
  - Besitzen die Punkte unmittelber davor und danach eine Vielfachheit >= 3, ist das Stück zwischen den beiden vollständig stetig, und dieser (Mittel-) Punkt wird nur mit einer Randbedingung Punkt auf Objekt festgelegt. Wird ein Knoten benötigt, sollte das Werkzeug [BSplineKnotenEinfügen](/Sketcher_BSplineInsertKnot/de "Sketcher BSplineInsertKnot/de") in Erwägung gezogen werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateBSpline/de&oldid=1454415>"
