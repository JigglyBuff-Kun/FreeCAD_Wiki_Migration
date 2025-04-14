---
title: TechDraw FormatierterBeschriftungstext
---

|                                                                     |
| ------------------------------------------------------------------- |
| TechDraw FormatierterBeschriftungstext                              |
| Menüeintrag                                                         |
| TechDraw → Beschriftungen → Formatierten Beschriftungstext einfügen |
| Arbeitsbereich                                                      |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")          |
| Standardtastenkürzel                                                |
| _Keiner_                                                            |
| Eingeführt in Version                                               |
| 0.19                                                                |
| Siehe auch                                                          |
| [TechDraw Vorlagen](/TechDraw_Templates/de "TechDraw Templates/de") |
|                                                                     |

## Beschreibung

Das Werkzeug **TechDraw FormatierterBeschriftungstext** fügt einer [Hinweislinie](/TechDraw_LeaderLine/de "TechDraw LeaderLine/de") oder einer Ansicht einen formatierten Beschriftungsblock hinzu .

![](/images/TechDraw_RichTextBlock_sample.png)

Eigenständiger formatierter Beschriftungstext

## Anwendung

1. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") aktivieren.
2. Um eine formatierte (Rich-Text-) Beschriftung an eine [Hinweislinie](/TechDraw_LeaderLine/de "TechDraw LeaderLine/de") anzuhängen, wird die Linie in der [Baumansicht](/Tree_view/de "Tree view/de") oder auf dem Zeichnungsblatt ausgewählt.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_RichTextAnnotation.svg) Formatierten Beschriftungstext einfügen drücken.
   - Den Menüeintrag **TechDraw → Beschriftungen → ![](/images/TechDraw_RichTextAnnotation.svg) Formatierten Beschriftungstext einfügen** auswählen.
4. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und noch kein Blatt aktiviert wurde, wird das Dialogfeld **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.
5. Der Aufgaben-Bereich wird geöffnet und ermöglicht eine schnelle Eingabe von Text.
6. Die Schaltfläche Rich-Text-Editor starten öffnet einen voll ausgestatteten Editor:
   1. Ist die Texteingabe abgaschlossen, wird die Schaltfläche ![](/images/Document-save.svg) gedrückt, um die Änderungen zu speichern und den Editor zu schließen.
7. Die Schaltfläche OK drücken, um den Aufgaben-Bereich zu schließen.

## Hinweise

- Nach der Erstellung kann das RichTextAnnotation-Objekt des formatierten Beschriftungstextes mit einem Doppelklick auf dem Zeichnungsblatt zum Bearbeiten ausgewählt werden.

## Eigenschaften

- Daten-Eigenschaft**X,Y**: Die Position des Blocks; relativ zum Ende der Linie, wenn er an eine [Hinweisline](/TechDraw_LeaderLine/de "TechDraw LeaderLine/de") angehängt ist, ansonsten ist dies die Position auf dem Zeichnungsblatt.
- Daten-Eigenschaft**Show Frame**: Zeichnet einen Rahmen um den Block herum.
- Daten-Eigenschaft**Max Width**: Begrenzt die (horizontale) Breite des Blocks. Ein Wert von -1 steht für eine unbegrenzte Breite.
- Daten-Eigenschaft**Anno Text**: Der HTML-Text des Blocks.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug **FormatierterBeschriftungstext** kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus verwendet werden.

```
myPage = FreeCAD.ActiveDocument().Page
myBase = FreeCAD.ActiveDocument().View
blockObj = FreeCAD.ActiveDocument.addObject('TechDraw::DrawRichAnno','DrawRichAnno')
FreeCAD.activeDocument().myPage.addView(blockObj)
blockObj.X = 5
blockObj.Y = 5
blockObj.AnnoText = myHTMLText

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_RichTextAnnotation/de&oldid=1500211>"
