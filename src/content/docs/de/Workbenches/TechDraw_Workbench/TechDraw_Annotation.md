---
title: TechDraw Beschriftung
---

|                                                                                                       |
| ----------------------------------------------------------------------------------------------------- |
| TechDraw Beschriftung                                                                                 |
| Menüeintrag                                                                                           |
| TechDraw → Anmerkungen → Anmerkung einfügen                                                           |
| Arbeitsbereich                                                                                        |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                            |
| Standardtastenkürzel                                                                                  |
| _Keiner_                                                                                              |
| Eingeführt in Version                                                                                 |
| -                                                                                                     |
| Siehe auch                                                                                            |
| [TechDraw FormatierteTextAnmerkung](/TechDraw_RichTextAnnotation/de "TechDraw RichTextAnnotation/de") |
|                                                                                                       |

## Beschreibung

Das Werkzeug **TechDraw Beschriftung** fügt einem Zeichnungsblatt einen Textblock hinzu.

![](/src/assets/images/AnnotationSample.png)

Beschriftung auf einem Zeichnungsblatt

## Anwendung

1. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") aktivieren.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_Annotation.svg) [Anmerkung einfügen](/TechDraw_Annotation "TechDraw Annotation") drücken.
   - Den Menüeintrag **TechDraw → Anmerkungen → ![](/src/assets/images/TechDraw_Annotation.svg) Anmerkung einfügen** auswählen.
3. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und noch kein Blatt aktiviert wurde, wird das Dialogfeld **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.
4. Ein Textblock mit _Default Text_ erscheint auf der Zeichnung.
5. Zum Bearbeiten des Textes wird der [Eigenschafteneditor](/Property_editor/de "Property editor/de") verwendet.
6. Wahlweise den Textblock auf die gewünschte Position ziehen.

![](/src/assets/images/UpdateAnnotation.png)

Ändern der Beschriftung im Eigenschafteneditor

## Hinweise

- Einige Zeichen stören die interne Darstellung des Beschriftungstextes. Im Einzelnen sind dies die doppelten Anführungszeichen `"` sowie die Symbole kleiner als `<` und größer als `>`; diese müssen durch die HTML-Escape-Zeichen `&quot;`, `&lt;` und `&gt;` entsprechend ersetzt werden. Siehe [Zeichenkodierungen in HTML](https://en.wikipedia.org/wiki/Character_encodings_in_HTML#HTML_character_references) für Einzelheiten.

## Eigenschaften

Die Beschriftung übernimmt alle anwendbaren grundlegenden Eigenschaften der Ansicht außer Daten-Eigenschaft**Scale** (Maßstab). Stattdessen wird die Daten-Eigenschaft**Text Size** (Schrifthöhe) verwendet.

- Daten-Eigenschaft**Text**: Der anzuzeigende Text.
- Daten-Eigenschaft**Font**: Der Name der zu verwendenden Schriftart. Für Beschriftungen wird die beste Übereinstimmung der installierten Schriftarten verwenden.
- Daten-Eigenschaft**Text Color**: Die Farbe des Textes.
- Daten-Eigenschaft**Text Size**: Die Schrifthöhe.
- Daten-Eigenschaft**Max Width**: Die maximale Breite des Beschriftungsblocks. -1 gibt keine maximale Breite an.
- Daten-Eigenschaft**LineSpace**: Einstellung des Zeilenabstands (%).
- Daten-Eigenschaft**Text Style**: "Normal", "Bold", "Italic", "Bold-Italic" (normal, fett, kursiv, fett-kursiv)

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das neue Werkzeug Beschriftung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
anno = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewAnnotation','TestAnno')
anno.Text = ['Different Text']
anno.TextStyle = 'Bold'
rc = page.addView(anno)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Annotation/de&oldid=1500038>"
