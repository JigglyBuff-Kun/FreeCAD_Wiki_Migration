---
title: TechDraw MaßHorizontaleAusdehnung
---

|                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw MaßHorizontaleAusdehnung                                                                                                                                                               |
| Menüeintrag                                                                                                                                                                                     |
| TechDraw → Maßeinträge → Maß für die horizontale Ausdehnung einfügen                                                                                                                            |
| Arbeitsbereich                                                                                                                                                                                  |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                                                                      |
| Standardtastenkürzel                                                                                                                                                                            |
| _Keiner_                                                                                                                                                                                        |
| Eingeführt in Version                                                                                                                                                                           |
| 0.19                                                                                                                                                                                            |
| Siehe auch                                                                                                                                                                                      |
| [TechDraw Längenmaß](/TechDraw_LengthDimension/de "TechDraw LengthDimension/de"), [TechDraw MaßVertikaleAusdehnung](/TechDraw_VerticalExtentDimension/de "TechDraw VerticalExtentDimension/de") |
|                                                                                                                                                                                                 |

## Beschreibung

Das Werkzeug **TechDraw MaßHorizontaleAusdehnung** fügt einer Ansicht ein lineares Maß hinzu. Das Maß erstreckt sich vom äußersten linken Punkt der ausgewählten Objekte bis zum äußersten rechten Punkt.

![](/src/assets/images/TechDraw_Dimension_Horizontal_Extent_example.png)

Maße für die horizontale und die vertikale Ausdehnung eines B-Splines

## Anwendung

1. Eine Ansicht oder mehrere Kanten in einer Ansicht auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Einstellung](/TechDraw_Preferences/de#Maßeinträge "TechDraw Preferences/de") **Maß-Werkzeuge** auf `Einzelnes Werkzeug` (Standardeinstellung) gesetzt: Den Nach-unten-Pfeil rechts neben der Schaltfläche ![](/src/assets/images/TechDraw_Dimension.svg) ![](/src/assets/images/Toolbar_flyout_arrow.svg) drücken und die Menüoption **![](/src/assets/images/TechDraw_HorizontalExtentDimension.svg) Horizontale Ausdehnung** in der Ausklappliste auswählen.
   - Hat die Einstellung einen anderen Wert (und in 0.21 und davor): Die Schaltfläche ![](/src/assets/images/TechDraw_HorizontalExtentDimension.svg) Horizontale Ausdehnung drücken.
   - Den Menüeintrag **TechDraw → Page → ![](/src/assets/images/TechDraw_HorizontalExtentDimension.svg) Horizontale Ausdehnung** auswählen.
3. Ein Maß wird zur Ansicht hinzugefügt.
4. Das Maß kann an die gewünschte Position gezogen werden.
5. Falls erforderlich, können Toleranzen, wie auf der [GD&T-Seite](/TechDraw_Geometric_dimensioning_and_tolerancing/de#Toleranzen "TechDraw Geometric dimensioning and tolerancing/de") beschrieben, hinzugefügt werden.

### Eigenschaften anpassen

Um die Eigenschaften eines Maßes (Dimension-Objekt) zu ändern, wird es in der Zeichnung oder in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt angeklickt. Dadurch wird der Dialog [Maßeintrag](/TechDraw_LengthDimension/de#Dialog_Maßeintrag "TechDraw LengthDimension/de") geöffnet.

## Einschränkungen

Dimension-Objekte (Maße) sind anfällig für das "[Topological-Naming-Problem](/Topological_naming_problem/de "Topological naming problem/de")" (Problem der topologischen Benennung). Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de "TechDraw LengthDimension/de").

## Hinweise

Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de#Hinweise "TechDraw LengthDimension/de").

## Eigenschaften

Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de#Eigenschaften "TechDraw LengthDimension/de"). Ausnahmen sind weiter unten angegeben.

### Daten

Basis

- Daten-Eigenschaft**Measure Type** (`Enumeration`): Noch nicht implementiert für Ausdehnungsmaße.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug MaßHorizontaleAusdehnung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
selection = ['Edge1', 'Edge2']                      # or [] for all

TechDraw.makeExtentDim(view1, selection, 0)         # view1 is a DrawViewPart; 0 for horizontal
App.ActiveDocument.DimExtent.Y = -60                # offset dimension line from dimensioned edges in Y direction
App.ActiveDocument.DimExtent.X = 10                 # offset dimension text along dimension line in X direction
App.ActiveDocument.DimExtent.FormatSpec = '%.0f'    # Dimension format

TechDraw.makeExtentDim(view1, selection, 1)         # view1 is a DrawViewPart; 1 for vertical
App.ActiveDocument.DimExtent001.X = -130            # offset dimension line from dimensioned edges in X direction
App.ActiveDocument.DimExtent001.Y = 10              # offset dimension text along dimension line in Y direction
App.ActiveDocument.DimExtent001.FormatSpec = '%.0f'

# Note the dimension names are 'DimExtent', 'DimExtent001' etc in the order created.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_HorizontalExtentDimension/de&oldid=1551510>"
