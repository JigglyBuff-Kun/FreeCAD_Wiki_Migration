---
title: TechDraw Bild
---

|                                                             |
| ----------------------------------------------------------- |
| TechDraw Bild                                               |
| Menüeintrag                                                 |
| TechDraw → TechDraw Ansichten → Bitmap-Grafik einfügen      |
| Arbeitsbereich                                              |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")  |
| Standardtastenkürzel                                        |
| _Keiner_                                                    |
| Eingeführt in Version                                       |
| -                                                           |
| Siehe auch                                                  |
| [TechDraw Symbol](/TechDraw_Symbol/de "TechDraw Symbol/de") |
|                                                             |

## Beschreibung

Das Werkzeug **TechDraw Bild** fügt eine [Bitmap](/Bitmap/de "Bitmap/de")-Grafik (PNG, JPEG, JPG, BMP usw.) aus einer Datei als Ansicht auf einem Zeichnungsblatt ein.

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Auch das Werkzeug [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de") kann eine Bildansicht erstellen.

![](/src/assets/images/TechDraw_Image_example.png)

Ein auf dem Zeichnungsblatt eingefügtes Bild

## Anwendung

1. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") aktivieren.
2. Den Menüeintrag **TechDraw → TechDraw Ansichten → ![](/src/assets/images/TechDraw_Image.svg) Bitmap-Grafik einfügen** auswählen.
3. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und noch kein Blatt aktiviert wurde, wird das Dialogfeld **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.
4. Ein Datei-Browser wird geöffnet.
5. Eine Bilddatei auswählen.
6. Eine Bildansicht wird eingefügt.
7. Wahlweise ihre Daten-Eigenschaft**Scale** Anpassen, um ihre Größe einzustellen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Bildansicht, oder formal ein `TechDraw::DrawViewImage`-Objekt, besitzt die gemeinsamen [Eigenschaften](/TechDraw_View/de#Eigenschaften_der_Bauteilansicht "TechDraw View/de") aller Ansichtsarten. Sie enthält außerdem die folgenden Eigenschaften:

### Daten

Image

- Daten-Eigenschaft**Image File** (`File`) (Bilddatei): Die Datei, die dieses Bitmap-Bild enthält.
- Daten-Eigenschaft**Image Included** (`FileIncluded`) (Enthaltenes Bild): Eingebettete Bilddatei. Nur systeminterne Verwendung.
- Daten-Eigenschaft**Width** (`Float`): Die Breite des zugeschnittenen Bildes in mm.
- Daten-Eigenschaft**Height** (`Float`): Die Höhe des zugeschnittenen Bildes in mm.

: Die beiden letzten Eigenschaften werden nur verwendet, wenn der Wert der Ansicht-Eigenschaft**Crop** `true` ist.

### Ansicht

Image

- Ansicht-Eigenschaft**Crop** (`Bool`): Beschneidet das Bild entsprechen der Daten-Eigenschaft**Width** und der Daten-Eigenschaft**Height**.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Bild kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
dvi = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewImage','TestImage')
rc = page.addView(dvi)
dvi.ImageFile = "pathToMy/imageFile.png"
dvi.Height = 200
dvi.Width  = 200

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Image/de&oldid=1500118>"
