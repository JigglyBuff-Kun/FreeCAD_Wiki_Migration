---
title: TechDraw MaßRadius
---

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| TechDraw MaßRadius                                                                                 |
| Menüeintrag                                                                                        |
| TechDraw → Bemaßungen → Radienmaß einfügen                                                         |
| Arbeitsbereich                                                                                     |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                         |
| Standardtastenkürzel                                                                               |
| _Keiner_                                                                                           |
| Eingeführt in Version                                                                              |
| -                                                                                                  |
| Siehe auch                                                                                         |
| [TechDraw Durchmessermaß einfügen](/TechDraw_DiameterDimension/de "TechDraw DiameterDimension/de") |
|                                                                                                    |

## Beschreibung

Das Werkzeug **TechDraw MaßRadius** fügt einer Ansicht ein Radienmaß hinzu. Das Maß kann an jede Kante gesetzt werden, die ein Kreis oder ein Kreisbogen ist.

![](/src/assets/images/TechDraw_Dimension_Radius_example.png)

Bemaßen eines Kreises durch Angabe des Radius

## Anwendung

1. Einen Kreis oder Kreisbogen auswählen. Die Geometrie kann in der [3D-Ansicht](/3D_view/de "3D view/de") oder in der Zeichnung ausgewählt werden. Hinweis: Einige Bögen, die kreisförmig aussehen, können tatsächlich Ellipsen oder B-Splines sein. In diesen Fällen können keine Radienmaße erstellt werden.
2. Wenn die Geometrie in der 3D-Ansicht ausgewählt wurde, wird die korrekte TechDraw-ansicht in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Einstellung](/TechDraw_Preferences/de#Maßeinträge "TechDraw Preferences/de") **Maß-Werkzeuge** auf `Einzelnes Werkzeug` (Standardeinstellung) gesetzt: Den Nach-unten-Pfeil rechts neben der Schaltfläche ![](/src/assets/images/TechDraw_Dimension.svg) ![](/src/assets/images/Toolbar_flyout_arrow.svg) drücken und die Menüoption **![](/src/assets/images/TechDraw_RadiusDimension.svg) Radienmaß einfügen** in der Ausklappliste auswählen.
   - Hat die Einstellung einen anderen Wert (und in 0.21 und davor): Die Schaltfläche ![](/src/assets/images/TechDraw_RadiusDimension.svg) Radienmaß einfügen drücken.
   - Den Menüeintrag **TechDraw → Maßeinträge → ![](/src/assets/images/TechDraw_RadiusDimension.svg) Radienmaß einfügen** auswählen.
4. Ein Maß wird der Ansicht hinzugefügt.
5. Das Maß kann auf die gewünschte Position gezogen werden.
6. Falls erforderlich, können Toleranzen, wie auf der [GD&T-Seite](/TechDraw_Geometric_dimensioning_and_tolerancing/de#Toleranzen "TechDraw Geometric dimensioning and tolerancing/de") beschrieben, hinzugefügt werden.

### 3D-Abmessungen anzeigen

Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de#3D-Abmessungen_anzeigen "TechDraw LengthDimension/de").

### Eigenschaften anpassen

Um die Eigenschaften eines Maßes (Dimension-Objekt) zu ändern, wird es in der Zeichnung oder in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt angeklickt. Dadurch wird der Dialog [Maßeintrag](/TechDraw_LengthDimension/de#Dialog_Maßeintrag "TechDraw LengthDimension/de") geöffnet.

## Einschränkungen

Dimension-Objekte (Maße) sind anfällig für das "[Topological-Naming-Problem](/Topological_naming_problem/de "Topological naming problem/de")" (Problem der topologischen Benennung). Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de "TechDraw LengthDimension/de").

## Hinweise

Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de#Hinweise "TechDraw LengthDimension/de").

## Eigenschaften

Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de#Eigenschaften "TechDraw LengthDimension/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug MaßRadius kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::DrawViewDimension", "Dimension")
dim1.Type = "Radius"
dim1.References2D=[(view1, "Edge1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_RadiusDimension/de&oldid=1500209>"
