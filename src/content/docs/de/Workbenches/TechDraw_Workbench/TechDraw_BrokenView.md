---
title: TechDraw UnterbrocheneAnsicht
---

|                                                                |
| -------------------------------------------------------------- |
| TechDraw UnterbrocheneAnsicht                                  |
| Menüeintrag                                                    |
| TechDraw → TechDraw Ansichten → Unterbrochene Ansicht einfügen |
| Arbeitsbereich                                                 |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")     |
| Standardtastenkürzel                                           |
| _Keiner_                                                       |
| Eingeführt in Version                                          |
| 1.0                                                            |
| Siehe auch                                                     |
| [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de")       |
|                                                                |

## Beschreibung

Das Werkzeug **TechDraw UnterbrocheneAnsicht** fügt eine unterbrochene Ansicht ein, die entweder auf einer bestehenden [Bauteilansicht](/TechDraw_View/de "TechDraw View/de") basiert oder auf einem oder Mehreren Objekten wie [Körpern](/PartDesign_Body/de "PartDesign Body/de") oder [Part](/Std_Part "Std Part")-Behältern. Die unterbrochene Ansicht erfordert auch eine oder mehrere [Skizzen](/Sketcher_NewSketch/de "Sketcher NewSketch/de"), die Lage und Größe des zu entfernenden Bereiches festlegen. Die unterbrochenen Ansicht verhält sich ähnlich wie andere Ansichten. Die Projektionsrichtung wird vom vorhandenen Bauteil, der 3D-Kamera-Ausrichtung oder der Normale einer ausgewählten Fläche abgeleitet.

![](/images/TechDraw_BrokenView_example3d.png)

Eine Form, die unterbrochen werden soll und die Skizzen, die die Unterbrechungen festlegen

![](/images/TechDraw_BrokenView_example2d.png)

Das Ergebnis

## Anwendung

1. Wahlweise die [3D-Ansicht](/3D_view/de "3D view/de") drehen. Die 3D-Ansicht bestimmt die Ausgangswerte der Daten-Eigenschaft**Direction** und der Daten-Eigenschaft**XDirection** der unterbrochenen Ansicht.
2. Das Objekt auswählen, von dem eine unterbrochene Ansicht erstellt werden soll oder eine vorhandene TechDraw-Ansicht auswählen, die das Objekt enthält.
3. Eine oder mehrere Skizzen in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen, um sie zur Auswahl hinzuzufügen. Jede Skizze sollte nur zwei parallele Linien enthalten. Es können auch andere Objekte, die zwei parallele Kanten enthalten, verwendet werden
4. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_BrokenView.svg) Unterbrochene Ansicht einfügen drücken.
   - Den Menüeintrag **TechDraw → TechDraw Ansichten → ![](/images/TechDraw_BrokenView.svg) Unterbrochene Ansicht einfügen** auswählen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine unterbrochene Ansicht, formal ein `TechDraw::DrawBrokenView`-Objekt, wird von einer [Bauteilansicht](#Properties_Part_View/de), formal ein `TechDraw::DrawViewPart`-Objekt abgeleitet und erbt alle seine Eigenschaften. Es besitzt außerdem die folgenden Eigenschaften:

### Daten

Broken View

- Daten-Eigenschaft**Breaks** (`LinkList`): Objekte in der 3D-Ansicht, die Start- und Endpunkte sowie die Ausrichtung der Unterbrechung in dieser Ansicht festlegen.
- Daten-Eigenschaft**Gap** (`Length`): Der Abstand der Bruchkanten in dieser Ansicht (nicht skalierte 3D-Länge).

## Hinweise

- Unterbrechungen müssen vertikal oder horizontal sein. Beliebige Unterbrechungen werden nicht unterstützt.
- Siehe auch [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Eine unterbrochene Ansicht kann mit [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen erstellt werden:

```
doc = FreeCAD.ActiveDocument
box = doc.Box
profile = doc.Sketch
page = doc.Page

brokenView = doc.addObject("TechDraw::DrawBrokenView", "BrokenView")
page.addView(brokenView)
brokenView.Source= box
brokenView.Breaks = [doc.Sketch]

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_BrokenView/de&oldid=1500112>"
