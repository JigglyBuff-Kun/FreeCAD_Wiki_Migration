---
title: TechDraw Schnittansicht
---

|                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw Schnittansicht                                                                                                                         |
| Menüeintrag                                                                                                                                     |
| TechDraw→ TechDraw Ansichten → Schnittansicht einfügen                                                                                          |
| Arbeitsbereich                                                                                                                                  |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                      |
| Standardtastenkürzel                                                                                                                            |
| _Keiner_                                                                                                                                        |
| Eingeführt in Version                                                                                                                           |
| -                                                                                                                                               |
| Siehe auch                                                                                                                                      |
| [TechDraw KomplexerSchnitt](/TechDraw_ComplexSection/de "TechDraw ComplexSection/de"), [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de") |
|                                                                                                                                                 |

## Beschreibung

Das Werkzeug **TechDraw Schnittansicht** Fügt, von einer bestehenden Bauteilansicht ausgehend, (dem Zeichnungsblatt) eine Schnittansicht (kurz: einen Schnitt) hinzu.

![](/src/assets/images/TechDraw_section_ANSI.png)  
![](/src/assets/images/TechDraw_section_ISO.png)

Schnitt (Schnittdarstellung) einer bereits vorhandenen Ansicht, der die innenliegende Bohrung und eine schraffierte Schnittfläche zeigt.  
Das obere Bild zeigt die Schnittpfeile nach ANSI-Vorgabe.  
Das untere Bild zeigt die Schnittpfeile nach ISO-Vorgabe.

## Anwendung

1. Eine Bauteilansicht in der 3D-Ansicht oder in der Baumansicht auswählen.
2. Es gibt mehrere Möglichkeiten dieses Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_SectionView.svg) Schnittansicht drücken.
   - Den Menüeintrag **TechDraw→ TechDraw Views → ![](/src/assets/images/TechDraw_SectionView.svg) Schnittansicht einfügen** auswählen.
3. Im Aufgabenbereich wird ein Dialog geöffnet, der bei der Berechnung verschiedener Eigenschaften hilft. Es werden sinnvolle Werte für die Blickrichtung errechnet; diese können aber geändert werden.

![](/src/assets/images/TechDraw_Section_Taskview.png)

Aufgabenbereich zum Definieren des Schnitts einer Ansicht

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

In den Eigenschaften der Daten-Eigenschaft**Base View** kann die Darstellung der Schnittlinie eingestellt werden.

Eine Schnittansicht, formal ein `TechDraw::DrawViewSection`-Objekt, wird von einer [Bauteilansicht](#Properties_Part_View/de), formal ein `TechDraw::DrawViewPart`-Objekt abgeleitet und erbt alle seine Eigenschaften. Es besitzt außerdem die folgenden Eigenschaften:

### Daten

Appearance

- Daten-Eigenschaft**Section Line Stretch** (`FloatConstraint`): Passt die Länge der Schnittlinie an. `1.0` ist die normale Länge, `1.1` wäre 10% länger, `0.9` wäre 10% kürzer. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Cut Operation

- Daten-Eigenschaft**Fuse Before Cut** (`Bool`): Vereinigt die Ausgangsformen vor dem Erstellen der Schnittansicht.
- Daten-Eigenschaft**Trim After Cut** (`Bool`): Führt eine zusätzliche Beschnittoperation am Ergebnisobjekt aus, um nach dem Schnitt alle unerwünschten Elemente zu entfernen.
- Daten-Eigenschaft**Use Previous Cut** (`Bool`) Verwendet die beschnittene Form der Basisansicht weiter, anstatt des originalen Objekts. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Cut Surface

- Daten-Eigenschaft**Cut Surface Display** (`Enumeration`): Darstellung der Schnittfläche. Optionen:
  - `Hide`: Verbirgt die Schnittfläche, nur der Umriss wird angezeigt.
  - `Color`: Färbt die Schnittfläche entsprechend der Einstellung **Farbe für Schnittflächen** in den [TechDraw Einstellungen](/TechDraw_Preferences/de "TechDraw Preferences/de") ein.
  - `SvgHatch`: Schraffiert den Schnitt, mit einer [Schraffur](/TechDraw_Hatch/de "TechDraw Hatch/de").
  - `PatHatch`: Schraffiert den Schnitt mit einer [geometrischen Schraffur](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de").
- Daten-Eigenschaft**File Hatch Pattern** (`File`): Vollständiger Pfad zur SVG-Schraffurmusterdatei.
- Daten-Eigenschaft**File Geom Pattern** (`File`): Vollständiger Pfad zur PAT-Musterdatei.
- Daten-Eigenschaft**Svg Included** (`FileIncluded`): Vollständiger Pfad zur enthaltenen SVG-Schraffurmusterdatei.
- Daten-Eigenschaft**Pat Included** (`FileIncluded`): Vollständiger Pfad zur enthaltenen PAT-Musterdatei.
- Daten-Eigenschaft**Name Geom Pattern** (`String`): Name des zu verwendenden PAT-Musters.
- Daten-Eigenschaft**Hatch Scale** (`Float`): Größenanpassung des Schraffurmusters.
- Daten-Eigenschaft**Hatch Rotation** (`Float`): Drehung des Schraffurmusters gegen den Uhrzeigersinn in Grad. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- Daten-Eigenschaft (versteckt)**Hatch Offset** (`Vector`): Versatz des Schraffurmusters. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

Section

- Daten-Eigenschaft**Section Symbol** (`String`): Bezeichner für diesen Schnitt.
- Daten-Eigenschaft**Base View** (`Link`): Die Ansicht, auf der dieser Schnitt basiert.
- Daten-Eigenschaft**Section Normal** (`Vector`): Ein Vektor, der die Richtung normal (senkrecht) zur Schnittebene beschreibt.
- Daten-Eigenschaft**Section Origin** (`Vector`): Ein Vektor, der einen Punkt auf der Schnittebene beschreibt. Typischerweise der Schwerpunkt des Originalteils.
- Daten**Section Direction** (`Enumeration`): Die Richtung dieser Schnittansicht in der Basisansicht. Optionen: `Aligned`, `Right`, `Left`, `Up` or `Down`.

### Ansicht

Cut Surface

- Ansicht-Eigenschaft**Cut Surface Color** (`Color`): Farbton für Flächenhervorhebung. Wird verwendet, wenn Daten**Cut Surface Display** auf `Color` eingestellt ist.
- Ansicht-Eigenschaft (versteckt)**Show Cut Surface** (`Bool`): Schaltet die Sichtbarkeit der Schnittfläche ein/aus.

Surface Hatch

- Ansicht**Geom Hatch Color** (`Color`): Farbe des geometrischen Schraffurmusters.
- Ansicht-Eigenschaft**Hatch Color** (`Color`): Farbe des SVG-Schraffurmusters.
- Ansicht (Hidden)**Hatch Cut Surface** (`Bool`): Schraffiert die Schnittfläche.
- Ansicht-Eigenschaft**Weight Pattern** (`Float`): Linienstärke für geometrische Schraffurmuster.

## Hinweise

- **Section Line Format**: Zwei Arten zur Schnittliniendarstellung werden unterstützt (wie oben abgebildet) und durch die Einstellung "Normbasis für Schnittlinien" (Section Line Standard) auf dem Reiter Anmerkung bestimmt. Die Option `ANSI` verwendet "ziehende Peile" (in einigen Regionen auch als "traditionelles Format" bekannt) und die Option `ISO` verwendet "schiebende Pfeile" (auch als "Reference Arrow Format", Referenzpfeilmethode bekannt).
- **Fuse Before Cut**: Die Schnittoperation kann manchmal die Ausgangsformen nicht schneiden. Wenn Fuse Before Cut den Wert TRUE besitzt, werden die Ausgangsformen zu einer einzigen Form zusammengeführt, bevor die Schnittoperation versucht wird. Wenn es Probleme mit der Schnittoperation gibt, kann es helfen, diesen Wert umzuschalten.
- **Trim After Cut**: Die Schnittoperation lässt manchmal (ungewollte) Anteile der Ausgangsform übrig. Wenn **Trim After Cut** den Wert TRUE besitzt, wird an dem Ergebnis des ersten Schnittes eine zusätzliche Beschnittoperation ausgeführt, die alle ungewollten Anteile entfernen sollte.
- **Cut Surface Display**: Die Schnittfläche kann ausgeblendet, mit Farbe gefüllt, mit einem SVG-Muster schraffiert oder mit einem PAT-Muster schraffiert werden. Siehe [Schraffieren](/TechDraw_Hatching/de "TechDraw Hatching/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Eine Schnittansicht kann mit [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen erstellt werden:

```
doc = FreeCAD.ActiveDocument
box = doc.Box
page = doc.Page

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = box
view.Direction = (0, 0, 1)

section = doc.addObject("TechDraw::DrawViewSection", "Section")
page.addView(section)
section.Source = box
section.BaseView = view
section.Direction = (0, 1, 0)
section.SectionNormal = (-1, 0, 0)

doc.recompute()

```

## Beispiele

Für weitere Information über Schnittansichten und einige Beispiele siehe: [TechDraw Schnittbeispiele](/TechDraw_Section_Examples/de "TechDraw Section Examples/de").

![](/src/assets/images/TechDraw_ExampleSection-10.png)
![](/src/assets/images/TechDraw_ExampleSection-13.png)
![](/src/assets/images/TechDraw_ExampleSection-15.png)
![](/src/assets/images/TechDraw_ExampleSection-17.png)
![](/src/assets/images/TechDraw_ExampleSection-34.png)
![](/src/assets/images/TechDraw_ExampleSection-35.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_SectionView/de&oldid=1500213>"
