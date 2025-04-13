---
title: TechDraw MaßVerknüpfen
---

:::caution
Das WerkzeugTechDraw MaßVerknüpfenist veraltet und wird in zukünftigen Versionen nicht mehr enthalten sein. Es sollte nur mit älteren FreeCAD-Versionen und Dateien (< v0.19) verwendet werden.In neueren Versionen sollte das WerkzeugTechDraw Maßreparatureingesetzt werden, um sowohl 2D- als auch 3D-Referenzen zu ändern.
:::

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| TechDraw MaßVerknüpfen                                                                                                                           |
| Menüeintrag                                                                                                                                      |
| TechDraw → Maßeinträge → Maß mit 3D-Geometrie verknüpfen                                                                                         |
| Arbeitsbereich                                                                                                                                   |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                       |
| Standardtastenkürzel                                                                                                                             |
| _Keiner_                                                                                                                                         |
| Eingeführt in Version                                                                                                                            |
| -                                                                                                                                                |
| Siehe auch                                                                                                                                       |
| [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de"), [TechDraw Ansichtengruppe](/TechDraw_ProjectionGroup/de "TechDraw ProjectionGroup/de") |
|                                                                                                                                                  |

## Beschreibung

Das Werkzeug **TechDraw MaßVerknüpfen** erstellt eine Verknüpfung zwischen einer 3D-Geometrie und einem oder mehreren projizierten Maß(en) auf einem Zeichnungsblatt. Diese Verknüpfung ermöglicht es dem Maß den tatsächlichen 3D-Wert anstelle des projizierten 2D-Wertes zu verwenden.

Dieses Werkzeug wird meistens dafür verwendet, isometrische Ansichten einer Projektionsgruppe zu bemaßen. Die projizierte Länge (angezeigte Länge) einer Linie in einer isometrischen Zeichnungsansicht muss nicht zwangsläufig der tatsächlichen Länge dieser Linie im 3D-Bauteil entsprechen. In einer rechtwinkligen Ansicht sind die projizierten und tatsächlichen Längen immer gleich.

Diese Verknüpfung veranlasst das Maß seinen Wert direkt von der 3D-Geometrie abzuleiten.

## Anwendung

1. Ein geeignetes Maß mit einer der Bemaßungsfunktionen [Längenmaß](/TechDraw_LengthDimension/de "TechDraw LengthDimension/de"), [MaßHorizontal](/TechDraw_HorizontalDimension/de "TechDraw HorizontalDimension/de") usw. auf dem Zeichnungsblatt erstellen. Dieses Maß steht an der richtigen Stelle auf der Seite, zeigt aber den Wert des projizierten Maßes an.
2. Auswahl der Geometrie in der 3D-Ansicht, z.B. eine Kante, die der bemaßten projizierten Geometrie entspricht.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_LinkDimension.svg) Maß mit 3D-Geometrie verknüpfen drücken.
   - Den Menüeintrag **TechDraw → Maßeinträge → ![](/src/assets/images/TechDraw_LinkDimension.svg) Maß mit 3D-Geometrie verknüpfen** auswählen.
4. Der Aufgaben-Bereich wird geöffnet.
5. Ein oder mehrere Maß(e) auswählen, die mit der ausgewählten 3D-Geometrie verknüpft werden sollen.
6. OK drücken.

Die Verknüpfungsoperation ändert die Daten-Eigenschaft**MeasureType** des Maßes von `Projected` (projiziertes Maß) auf `True` (tatsächliche Länge).

## Einschränkungen

Dimension-Objekte (Maße) sind anfällig für das "[Topological-Naming-Problem](/Topological_naming_problem/de "Topological naming problem/de")" (Problem der topologischen Benennung). Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de "TechDraw LengthDimension/de") für weitere Informationen. Es wird empfohlen, dass das Verknüpfen von Maßen einer der letzten Schritte der Zeichnungserstellung ist.

Das Verknüpfungswerkzeug hindert niemanden daran, unlogische Verknüpfungen zu erstellen, daher muss jeder selbst darauf achten, beim Erstellen der Verknüpfung die richtige Kante aus der 3D Ansicht auzuswählen.

Es gibt derzeit keine Möglichkeit, eine Verknüpfung aufzulösen, aber die Daten-Eigenschaft**MeasureType** kann zurück auf `Projected` geändert werden, so dass das Maß wieder den projizierten Wert anstelle des verknüpften Wertes verwendet.

Zu beachten ist, dass, wenn das zu verknüpfende Maß auf zwei Eckpunkten basiert, zwei Eckpunkte in der 3D-Ansicht ausgewählt werden sollten. Wenn das Maß auf einer Kante basiert, sollte eine Kante in der 3D-Ansicht ausgewählt werden.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug TechDraw MaßVerknüpfen kann nicht direkt in Makros verwendet werden, aber durch das Ändern der Daten-Eigenschaft**References 3D** kann das gleiche Ergebnis erreicht werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LinkDimension/de&oldid=1500124>"
