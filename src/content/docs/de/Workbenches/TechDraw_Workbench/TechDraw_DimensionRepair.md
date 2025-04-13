---
title: TechDraw Maßreparatur
---

|                                                                                  |
| -------------------------------------------------------------------------------- |
| TechDraw Maßreparatur                                                            |
| Menüeintrag                                                                      |
| TechDraw → Maßeinträge → Maßreferenzen reparieren                                |
| Arbeitsbereich                                                                   |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                       |
| Standardtastenkürzel                                                             |
| _Keiner_                                                                         |
| Eingeführt in Version                                                            |
| 0.21                                                                             |
| Siehe auch                                                                       |
| [TechDraw Längenmaß](/TechDraw_LengthDimension/de "TechDraw LengthDimension/de") |
|                                                                                  |

## Beschreibung

Das Werkzeug **TechDraw Maßreparatur** kann die 2D- oder 3D-Geometriereferenzen eines Maßes anpassen. Solche Referenzen können aufgrund des "[Problems der topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de")" oder durch das Ausblenden verdeckter Kanten ungültig werden.

Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de#Begrenzungen "TechDraw LengthDimension/de") für Weiteres über Maße und das Problem der topologische Benennung.

## Anwendung

1. Das Maß, das korrigiert werden soll, auswählen und wahlweise die neuen Geometriereferenzen wie Punkte oder Kanten in der TechDraw-Ansicht oder in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_DimensionRepair.svg) Maßreferenzen reparieren drücken.
   - Den Menüeintrag **TechDraw → Maßeinträge → ![](/src/assets/images/TechDraw_DimensionRepair.svg) Maßreferenzen reparieren** auswählen.
3. Der Aufgabenbereich **Maß Reparieren** wird geöffnet und zeigt das ausgewählte Maß und die aktuellen Maßreferenzen an.
4. Wenn noch nicht erfolgt, neue Geometriereferenzen auswählen.
5. Die Schaltfläche Referenzen durch aktuelle Auswahl ersetzen drücken.
6. Die Schaltfläche OK drücken, um das Maß zu aktualisieren.
7. Wurden 3D-Referenzen ausgewählt: Wahlweise die Daten-Eigenschaft**Measure Type** des Maßes auf `True` setzen.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug TechDraw Maßreparatur kann nicht in [Makros](/Macros/de "Macros/de") oder von der [Python](/Python/de "Python/de")-Konsole aus verwendet werden. Maßreferenz-Eigenschaften können mit Hilfe von Python aktualisiert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_DimensionRepair/de&oldid=1500078>"
