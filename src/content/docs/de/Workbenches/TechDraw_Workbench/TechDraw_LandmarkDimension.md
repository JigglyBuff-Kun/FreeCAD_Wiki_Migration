---
title: TechDraw MaßÜberOrientierungspunkte
---

|                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TechDraw MaßÜberOrientierungspunkte                                                                                                                                                  |
| Menüeintrag                                                                                                                                                                          |
| TechDraw → Bemaßungen → Maß zwischen Orientierungspunkten einfügen - EXPERIMENTELL                                                                                                   |
| Arbeitsbereich                                                                                                                                                                       |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                                                           |
| Standardtastenkürzel                                                                                                                                                                 |
| _Keiner_                                                                                                                                                                             |
| Eingeführt in Version                                                                                                                                                                |
| 0.19                                                                                                                                                                                 |
| Siehe auch                                                                                                                                                                           |
| [TechDraw MaßHorizontal](/TechDraw_HorizontalDimension/de "TechDraw HorizontalDimension/de"), [TechDraw MaßVertikal](/TechDraw_VerticalDimension/de "TechDraw VerticalDimension/de") |
|                                                                                                                                                                                      |

## Beschreibung

Das Werkzeug **TechDraw MaßÜberOrientierungspunkte** fügt einer Ansicht ein lineares Maß hinzu. Das Maß basiert auf zwei Punkten (Point-Objekte wie [Draft Punkt](/Draft_Point/de "Draft Point/de"), [Part Punkt](/Part_Point/de "Part Point/de") oder [PartDesign Punkt](/PartDesign_Point/de "PartDesign Point/de")) aus dem 3D-Modell.

Der Zweck dieses Werkzeugs ist es, eine Abhilfe gegen die Beschädigung der Maße zu schaffen, die im Zusammenhang mit dem "[Problem der topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de")" entsteht. Die Quellpunkte sollten [Ausdrücke](/Expressions/de "Expressions/de") verwenden oder andere Mechanismen enthalten, um ihre Position festzulegen. Da es sich bei den Punkten um [Dokumentobjekte](/App_DocumentObject/de "App DocumentObject/de") und nicht um Formkomponenten handelt, ändert sich ihr Name bei Neuberechnungen nicht, so dass sie leicht gefunden werden können.

Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de#Begrenzungen "TechDraw LengthDimension/de") für Weiteres über Maße und topologische Benennung.

## Anwendung

1. Zwei Punktobjekte in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Die korrekte TechDraw-Ansicht zur Auswahl hinzufügen, indem sie in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt wird.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_LandmarkDimension.svg) [Maß zwischen Orientierungspunkten hinzufügen - EXPERIMENTELL](/TechDraw_LandmarkDimension "TechDraw LandmarkDimension") drücken.
   - Den Menüeintrag **TechDraw → Maßeinträge → ![](/src/assets/images/TechDraw_LandmarkDimension.svg) Maß zwischen Orientierungspunkten hinzufügen - EXPERIMENTELL** auswählen.
4. Ein Maß wird zur Ansicht hinzugefügt.
5. Das Maß kann an die gewünschte Position gezogen werden.
6. Falls erforderlich, können Toleranzen, wie auf der [GD&T-Seite](/TechDraw_Geometric_dimensioning_and_tolerancing/de#Toleranzen "TechDraw Geometric dimensioning and tolerancing/de") beschrieben, hinzugefügt werden.

### Eigenschaften anpassen

Um die Eigenschaften eines Maßes (Dimension-Objekt) zu ändern, wird es in der Zeichnung oder in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt angeklickt. Dadurch wird der Dialog [Maßeintrag](/TechDraw_LengthDimension/de#Dialog_Maßeintrag "TechDraw LengthDimension/de") geöffnet.

## Begrenzungen

Das Werkzeug MaßÜberOrientierungspunkte ist zunächst auf Maße für "Abstände" beschränkt. Andere Typen könnten hinzugefügt werden, wenn die Nachfrage dies rechtfertigt.

## Hinweise

Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de#Hinweise "TechDraw LengthDimension/de").

## Eigenschaften

Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de#Eigenschaften "TechDraw LengthDimension/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug MaßÜberOrientierungspunkte kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::LandmarkDimension", "Landmark")
dim1.Type = "Distance"
dim1.References2D = [(TDView, "Vertex1")]
dim1.References3D = [(Point3d1, "Vertex1")]
dim1.References3D = [(Point3d2, "Vertex1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LandmarkDimension/de&oldid=1500120>"
