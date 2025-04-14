---
title: TechDraw KomplexerSchnitt
---

|                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw KomplexerSchnitt                                                                                                               |
| Menüeintrag                                                                                                                             |
| TechDraw → TechDraw Ansichten → Komplexe Schnittansicht einfügen                                                                        |
| Arbeitsbereich                                                                                                                          |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                              |
| Standardtastenkürzel                                                                                                                    |
| _Keiner_                                                                                                                                |
| Eingeführt in Version                                                                                                                   |
| 0.21                                                                                                                                    |
| Siehe auch                                                                                                                              |
| [TechDraw Schnittansicht](/TechDraw_SectionView/de "TechDraw SectionView/de"), [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de") |
|                                                                                                                                         |

## Beschreibung

Das Werkzeug **TechDraw KomplexerSchnitt** fügt einem Zeichnungsblatt eine Schnittansicht hinzu, die auf einer vorhandenen Bauteilansicht und einem Schnittprofil (Schnittkontur) basiert.

![](/images/TechDraw_QuarterSection_example.png)

Halbschnitt, mit dem Werkzeug Komplexe Schnittansicht erstellt

![](/images/TechDraw_AlignedSection_example.png)

Abgewinkelter Schnitt, mit dem Werkzeug Komplexe Schnittansicht erstellt

![](/images/TechDraw_OffsetSection_example.png)

Abgesetzter Schnitt, mit dem Werkzeug Komplexe Schnittansicht erstellt

## Anwendung

1. Eine Bauteilansicht und ein Profilobjekt in der [3D-Ansicht](/3D_view/de "3D view/de") oder der [Baumansicht](/Tree_view/de "Tree view/de") auswählen. Profile sind normalerweise Skizzen, aber jedes Objekt, dessen Form in einen Draht (wire) umgewandelt werden kann, funktioniert.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_ComplexSection.svg) Komplexe Schnittansicht drücken.
   - Den Menüeintrag **TechDraw → TechDraw Ansichten → ![](/images/TechDraw_ComplexSection.svg) Komplexe Schnittansicht einfügen** auswählen.
3. Im Aufgabenbereich wird ein Dialog geöffnet, der bei der Berechnung verschiedener Eigenschaften hilft. Für die Blickrichtung werden sinnvolle Werte ermittelt, diese können aber verändert werden.

![](/images/TechDraw_ComplexSection_Taskview1.png)
![](/images/TechDraw_ComplexSection_Taskview2.png)

## Eigenschaften

Eine komplexe Schnittansicht, formal ein `TechDraw::DrawComplexSection`-Objekt, wird von einer [Schnittansicht](/TechDraw_SectionView/de#Eigenschaften "TechDraw SectionView/de"), formal ein `TechDraw::DrawViewSection`-Objekt abgeleitet und erbt alle seine Eigenschaften. Es besitzt außerdem die folgenden Eigenschaften:

### Daten

Cutting Tool

- Daten-Eigenschaft**Cutting Tool Wire Object**: Das Dokumentobjekt, dessen Form verwendet wird, um die Schnittkontur zu erstellen.
- Daten-Eigenschaft**Projection Strategy**: Steuert, wie der Schnitt durchgeführt wird und wie das Ergebnis auf dem Blatt projiziert wird:
  - `Offset`: Erzeugt einen einfachen Schnitt der Ausgangsform und projiziert das Ergebnis.
  - `Aligned`: Schneidet die Ausgangsform unter Verwendung eines Werkzeuges das jede Kante (edge) der Schnittkontur verwendet. Die Ergebnisse aller Schnitte werden, abhängig von der Orientierung der Schnittkontur, in einer vertikalen oder horizontalen Anordnung projiziert.
  - `NoParallel`: Wie Aligned, aber Abschnitte der Schnittkontur, die parallel zur Blickrichtung verlaufen, werden übersprungen.

## Hinweise

- Die Eigenschaft [SectionNormal](/TechDraw_SectionView/de#Data "TechDraw SectionView/de") steuert, welche Seite des Profils entfernt wird und sollte generell in die der durch die Schnittpfeile an der Schnittlinie dargestellten Blickrichtung entgegengesetzte Richtung zeigen. Man sollte eine SectionNormal vermeiden, die parallel zu Profilabschnitten (besonders zum ersten und zum letzten Abschnitt) verläuft, da dies die korrekte Berechnung der Schnittpfeilrichtung verhindert und umgekehrte Ansichten erzeugen kann.
- Siehe auch [TechDraw Schnittansicht](/TechDraw_SectionView/de#Hinweise "TechDraw SectionView/de")

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Eine komplexe Schnittansicht kann mit [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen erstellt werden:

```
doc = FreeCAD.ActiveDocument
box = doc.Box
profile = doc.Sketch
page = doc.Page

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = box
view.Direction = (0, 0, 1)

section = doc.addObject("TechDraw::DrawComplexSection", "ComplexSection")
page.addView(section)
section.BaseView = view
section.CuttingToolWireObject = profile
section.Direction = (0, 1, 0)
section.SectionNormal = (-1, 0, 0)

```

## Beispiele

Für weitere Information über Schnittansichten und einige Beispiele siehe: [TechDraw Schnittbeispiele](/TechDraw_Section_Examples/de "TechDraw Section Examples/de").

![](/images/TechDraw_ExampleSection-10.png)
![](/images/TechDraw_ExampleSection-13.png)
![](/images/TechDraw_ExampleSection-15.png)
![](/images/TechDraw_ExampleSection-17.png)
![](/images/TechDraw_ExampleSection-34.png)
![](/images/TechDraw_ExampleSection-35.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ComplexSection/de&oldid=1571047>"
