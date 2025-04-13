---
title: Draft Textform
---
|  |
| --- |
| Draft Textform |
| Menüeintrag |
| Zeichnen → Textform Anmerkung → Textform |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.14 |
| Siehe auch |
| [Draft Text](/Draft_Text/de "Draft Text/de"), [Draft Notiz](/Draft_Label/de "Draft Label/de"), [Part Extrudieren](/Part_Extrude/de "Part Extrude/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_ShapeString.svg) **Draft Textform** erstellt eine Verbundform, die eine Zeichenfolge darstellt. Diese Form kann für die Erstellung von 3D-Buchstaben mit dem Befehl [Part Extrudieren](/Part_Extrude/de "Part Extrude/de") verwendet werden.

Der Befehl Draft Textform ist nicht für normale Notizen gedacht. Dafür sollten die Befehle [Draft Text](/Draft_Text "Draft Text") oder [Draft Notiz](/Draft_Label "Draft Label") verwendet werden.

![](/images/Draft_ShapeString_Example400.png)

Ein einzelner Punkt wird zur Positionierung einer Textform benötigt

## Anwendung

Für Windows-Anwender: Bitte zuerst den Abschnitt [Auswahl der Schriftdatei unter Windows](#Auswahl_der_Schriftdatei_unter_Windows) lesen.

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_ShapeString.svg) Textform drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → ![](/images/Draft_ShapeString.svg) Textform** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Anmerkung → ![](/images/Draft_ShapeString.svg) Textform** auswählen.
2. Der Aufgabenbereich **Textform** wird geöffnet.
3. Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") anklicken, oder die Koordinaten eingeben.
4. Wahlweise die Schaltfläche Punkt zurücksetzen drücken, um den Punkt auf den Ursprung zurückzusetzen.
5. Eine **Zeichenkette** eingeben.
6. Die **Höhe** eingeben.
7. Zur Auswahl einer Schrift hat man folgende Möglichkeiten:
   * Einen Dateipfad im Eingabefeld **Font file** eintragen.
   * Die Schaltfläche ... drücken und eine Datei auswählen.
8. Die Schaltfläche OK drücken, um den Befehl abzuschließen.
9. Wahlweise die Daten-Eigenschaft**Justification** (Ausrichtung) der Textform anpassen. Siehe [Eigenschaften](#Eigenschaften).

## Optionen

* Die Esc-Taste oder die Schaltfläche Cancel drücken, um den Befehl abzubrechen.

## Relative font path

[eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

Es ist möglich, einen relativen Pfad für die Schriftdatei anzugeben. Hierfür muss das FreeCAD-Dokument wenigstens einmal gesichert worden sein.

Einige Beispiele:

* ./EineSchrift.ttf: Die Schriftdatei befindet sich in demselben Verzeichnis wie das Dokument.
* ./MeinVerzeichnis/EineSchrift.ttf: Die Schriftdatei befindet sich im Unterverzeichnis MeinVerzeichnis des Dokumentverzeichnisses.
* ../EineSchrift.ttf: Die Schriftdatei befindet sich im übergeordneten Verzeichnis des Dokumentverzeichnisses.

## Auswahl der Schriftdatei unter Windows

On Windows access to the default font folder is restricted. This affects the font file selection for ShapeStrings. There are three cases in FreeCAD where a font file for ShapeStrings can be specified: in the ShapeString task panel, when changing the Daten**Font File** property of a ShapeString, and when specifying the default font file in the [Draft Preferences](/Draft_Preferences#Texts_and_dimensions "Draft Preferences").

Pressing the ... button and then selecting a file from the default Windows font folder is not possible when using the native file dialog. There are a number of workarounds:

* Make sure **DontUseNativeFontDialog** is set to `true`, which is the default value for this preference. This will only call a different, non-native, file dialog when pressing the ... button in the ShapeString task panel. With this file dialog the default Windows font folder can be accessed.
* Change **DontUseNativeDialog** to `true`. This instructs FreeCAD to always use the non-native file dialog.
* Specify the font file in the input box. You can of course type the full path or copy-paste the path from the Windows File Explorer. But there is also another way to enter the path. If you enter `C:\` a dropdown list will appear. Select `Windows` from that list and add `\F`. Select `Fonts` from the new dropdown list. Finally add `\` and the first letter(s) of the font file, and then select it from the dropdown list.
* Create a custom folder for your font files.

See the [Preferences](#Preferences) paragraph below for the location of the mentioned preferences.

## Hinweise

* Eine Draft Textform (ShapeString) kann nach einem Doppelklick auf ihr Symbol in der [Baumansicht](/Tree_view/de "Tree view/de") bearbeitet werden.
* Die unterstützten Schriftarten enthalten TrueType- (.ttf), OpenType- (.otf) und Type-1-Schriftarten (.pfb).
* Der Befehl unterstützt nur Text mit Schreibrichtung nach rechts. Text mit Schreibrichtung nach links und von oben nach unten wird nicht unterstützt.
* Sehr kleine Schrifthöhen können zu verformten Zeichenumrissen führen, da beim Skalieren Details verlorengehen.
* Schriftarten können problematische Geometrien erzeugen. Das liegt daran, dass Schriftkonturen überlappen dürfen und kleine Lücken enthalten dürfen. Diese Merkmale werden bei Linienzügen, die zur Erstellung von Flächen dienen, als Fehler angesehen.
* Draft Textformen können auch mit dem [Macro Fonts Win10 PYMP](/Macro_Fonts_Win10_PYMP "Macro Fonts Win10 PYMP") erstellt werden.
* Um Draft Textformen ringförmig anzuordnen kann das [Macro FCCircularText](/Macro_FCCircularText "Macro FCCircularText") verwendet werden.

## Tutorien

* [Entwurf FormFolge Tutorium](/Draft_ShapeString_tutorial/de "Draft ShapeString tutorial/de"): einen ShapeString extrudieren, im 3D Raum positionieren und eine Gravur in einem anderen Körper erzeugen.
* [Anwenden von Formfolgen in PartDesign](https://forum.freecadweb.org/viewtopic.php?f=3&t=36623)

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de"), [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de") und [Std ParameterDialog](/Std_DlgParameter/de "Std DlgParameter/de").

* Die Standardschrift kann im Voreinstellungseditor angepasst werden: **Bearbeiten → Einstellungen... → Draft → Texte und Bemaßungen → Standardschriftart für Textformen**.
* Für Windows-Anwender:
  + **Werkzeuge → Parameter bearbeiten... → BaseApp → Preferences → Dialog → DontUseNativeFontDialog** auf `true` setzen, um den non-native Datei-Dialog zu verwenden, wenn eine Schriftart aus dem Aufgaben-Bereich Textform ausgewählt wird.
  + Alternativ kann **Werkzeuge → Parameter bearbeiten... → BaseApp → Preferences → Dialog → DontUseNativeDialog** auf `true` gesetzt werden, um immer den non-native Datei-Dialog zu verwenden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft ShapeString-Objekt (Textform-Objekt) wird von einem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten-Eigenschaft**Font File** (`File`): Name der Schriftdatei.
* Daten-Eigenschaft**Fuse** (`Bool`): Vereinigt Flächen, wenn sie überlappen. Ist normalerweise nicht erforderlich (kann sehr langsam sein). Wird ignoriert, wenn die Daten-Eigenschaft**Make Face** auf `false` gesetzt ist. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Daten-Eigenschaft**Justification** (`Enumeration`): Horizontales und vertikales Ausrichten. Optionen: `Top-Left` (oben links), `Top-Center` (oben mittig), `Top-Right` (oben rechts), `Middle-Left` (Mitte links), `Middle-Center` (Mitte mittig), `Middle-Right` (Mitte rechts), `Bottom-Left` (unten links), `Bottom-Center` (unten mittig), `Bottom-Right` (unten rechts). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Daten-Eigenschaft**Justification Reference** (`Enumeration`): Hohenreferenz, die zum Ausrichten verwendet wird. Optionen: `Cap Height` (Versalhöhe = Mittel- + Oberlänge), `Shape Height` (Mittel- + Unterlänge). Shape-Height hängt von den Zeichen in der Daten-Eigenschaft**String** ab. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Daten-Eigenschaft**Keep Left Margin** (`Bool`): Behält den linken Rand und führende Leerzeichen bei, wenn linksbündig ausgerichtet wird. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Daten-Eigenschaft**Make Face** (`Bool`): Erstellt Flächen aus den Konturen der Schriftzeichen.
* Daten-Eigenschaft**Oblique Angle** (`Angle`): Neigungswinkel. Kann Werte zwischen -80° und +80° annehmen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Daten-Eigenschaft**Scale To Size** (`Bool`): Skaliert die Versalhöhe, damit sie der Schrifthöhe gleicht. Wenn auf `false` gesetzt, wird die Versalhöhe, abhängig von der Schriftart, nicht exakt der Daten-Eigenschaft**Size** entsprechen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Daten-Eigenschaft**Size** (`Length`): Schrifthöhe.
* Daten-Eigenschaft**String** (`String`): Zeichenkette. Eine Textform kann nur eine einzelne Textzeile anzeigen.
* Daten-Eigenschaft**Tracking** (`Distance`): Zeichenzwischenraum. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Die Art der Eigenschaft wurde aktualisiert.

![](/images/Draft_ShapeString_Justification.png)

Die Höhe des roten Rechtecks (Vollinie) gleicht der Versalhöhe.  
Höhe des grünen Rechtecks (Strichlinie) gleicht der Mittel- + Unterlänge (shape height).  
Die Eckpunkte, die Mittelpunkte der Kanten und die Mittelpunkte der Rechtecke  
entsprechen den 9 Ausrichtungsoptionen von oben links bis unten rechts.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um eine Draft Textform zu erstellen, verwendet man die Methode `make_shapestring` ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")) des Arbeitsbereiches Draft. Diese Methode ersetzt die veraltete Methode `makeShapeString`.

```
shapestring = make_shapestring(String, FontFile, Size=100, Tracking=0)

```

* Erzeugt eine `shapestring`-Verbund-Form unter Verwendung der angegebenen Zeichenfolge `String` und des vollständigen Pfades einer unterstützten Schriftartdatei `FontFile`.
* `Size` ist die Höhe des resultierenden Textes in Millimetern.
* `Tracking` ist der Zeichenabstand (Laufweite) in Millimetern.

Die Positionierung der Textform kann durch Überschreiben ihres Attributs `Placement` oder durch individuelles Überschreiben ihrer Attribute `Placement.Base` und `Placement.Rotation` geändert werden.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

font1 = "/usr/share/fonts/truetype/msttcorefonts/Arial.ttf"
font2 = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
font3 = "/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf"

S1 = Draft.make_shapestring("This is a sample text", font1, 200)

S2 = Draft.make_shapestring("Inclined text", font2, 200, 10)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(-1000, 500, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 45))
S2.Placement = place2

S3 = Draft.make_shapestring("Upside-down text", font3, 200, 10)
S3.Placement.Base = App.Vector(0, -1000, 0)
S3.Placement.Rotation = App.Rotation(zaxis, 180)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ShapeString/de&oldid=1542651>"