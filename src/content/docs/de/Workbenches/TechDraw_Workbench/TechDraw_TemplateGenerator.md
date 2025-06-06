---
title: TechDraw Vorlagengenerator
---

|                                                                            |
| -------------------------------------------------------------------------- |
| Tutorium                                                                   |
| Thema                                                                      |
| Eine TechDraw-Vorlagen unter Verwendung eines Python-Makros erstellen      |
| Niveau                                                                     |
| Grundkenntnisse von Python und SVG-Strukturen sind hilfreich               |
| Zeit zum Abschluss                                                         |
| (noch nicht bekannt)                                                       |
| Autoren                                                                    |
| [FBXL5](/User:FBXL5 "User:FBXL5")                                          |
| FreeCAD-Version                                                            |
| 0.21 und neuer                                                             |
| Beispieldateien                                                            |
| _None_                                                                     |
| Siehe auch                                                                 |
| [Makro TemplateHelper](/Macro_TemplateHelper/de "Macro TemplateHelper/de") |
|                                                                            |

## Einleitung

Diese Anleitung beschreibt, wie man eine einfache Vorlage zur Benutzung mit dem TechDraw-Arbeitsbereich aus ein paar Zeilen Python-Kode erstellt.

Jeder Texteditor kann zum Erstellen von Kode genutzt werden. Mein Favorit ist Atom, aber FreeCADs eingebauter Editor funktioniert auch bestens.

Die folgenden Kode-Beispiele können kopiert, in eine leere Textdatei eingefügt und dann unter einem selbstgewählten Namen als \*.py oder \*.FCMacro abgespeichert werden.

Eine Vorlage stellt einen Hintergrund für Zeichnungsaufgaben bereit und ihre Maße werden vom Druckertreiber für die korrekte Skalierung der Zeichnung verwendet.

Die Vorlagen sind SVG-Dateien, daher muss ein Makro einige Zeilen SVG-Kode (eine Untermenge von XML-Kode) zusammenstellen.

**Hinweis:** nachdem FreeCAD von **freecadweb.org** nach **freecad.org** umgezogen ist, wurde diese Seite entsprechend aktualisiert und der resultierende SVG-Code ist nicht mehr kompatibel mit FreeCAD-Versionen, die älter sind als v0.21. Für diese versionen muss `freecad.org` in der Deklarationszeile des resultierenden SVG-Codes von Hand auf `freecadweb.org` zurückgeändert werden, da die editierbaren Texte sonst nicht erkannt werden.

## Struktur einer einfachen leeren Seite

Das SVG-Format ist eine Untermenge des XML-Formats.
Daher besteht eine SVG-Datei, wie auch jede XML-Datei, aus zwei Teilen:

- Einem Kopf mit eine Formatdeklaration
- Einem Körper, der die Informationen darüber enthält, was anzuzeigen ist und wo es platziert wird

: (Ich weiß nicht, warum die Kopfzeile enthalten sein soll; die SVG-Datei funktioniert auch ohne sie als Vorlagedatei)

### Kopf

Der Kopf besteht aus nur einer Zeile zur Angabe der Version der XML-Sprache, die verwendet werden soll, um die im Körper befindlichen Anweisungen zu verarbeiten.

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

```

### Körper

Der Körper startet mit einem öffnenden Tag, der Informationen über Namensräume, über die Größe der Vorlage und darüber, wo sie platziert wird enthält. Und er hört mit einem schließenden Tag auf.

```
<svg
  xmlns="http://www.w3.org/2000/svg" version="1.1"
  xmlns:freecad="http://www.freecad.org/wiki/index.php?title=Svg_Namespace"
  width="420mm"
  height="297mm"
  viewBox="0 0 420 297">
</svg>

```

: **xmlns=**"<http://www.w3.org/2000/svg>": Externer Verweis auf den XML-Namensraum, um Standard-XML-Befehle nachzuschlagen.
: **version=**"1.1": Die verwendete XML-Version ist 1.1
: **xmlns:freecad=**"...=Svg_Namespace": Externe Verknüpfung zu FreeCADs Wikiseite [Svg-Namensraum](/Svg_Namespace/de "Svg Namespace/de")". Die Verknüpfung wird nicht zum Nachladen von Informationen oder Werten zur Laufzeit genutzt, sondern als Schlüssel zum Aktivieren der speziellen Attribute, wie z.B. die editierbare Texte.
: "freecad:" wird den besagten speziellen Attributen vorangestellt.
: **width=**"420mm": Breite der Zeichenfläche.
: **height=**"297mm": Höhe der Zeichenfläche.
: **viewBox=**"0 0 420 297": Position der oberen linken Ecke (0;0) und der unteren rechten Ecke (420;297) im SVG-Konstruktionsraum (in SVG-Einheiten).
: Width, height, and viewBox, in dieser Kombination, setzen 1 SVG-Einheit gleich 1 mm, für das gesamte Dokument. Von jetzt an kann die Maßeinheit weggelassen werden.
: In diesem Falle ergeben 420 und 297 eine A3-Seite. Diese Werte werden angepasst, um andere Seitenformate zu erzeugen.

Für eine leere DIN-A3-Seite im Querformat war das alles.

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
  xmlns="http://www.w3.org/2000/svg" version="1.1"
  xmlns:freecad="http://www.freecad.org/wiki/index.php?title=Svg_Namespace"
  width="420mm"
  height="297mm"
  viewBox="0 0 420 297">
</svg>

```

## Python-Kode...

Die Skripterstellung beginnt mit einem Gerüst, das eine separate Hauptfunktion "main" enthält

```
#! python
# -*- coding: utf-8 -*-
# (c) 2024 Your name LGPL

def main():
    """Here is where the magic happens"""
    return

if __name__ == '__main__':
    # This will be true only if the file is "executed"
    # but not if imported as module
    main()

```

### ... zum Erstellen einer leeren Seite

Der Ablauf zur Erstellung einer Vorlage besteht aus den Schritten:

- Den Volagenordner lokalisieren.
- Eine Datei zum Schreiben zu öffnen und so als ersten Schritt eine leere SVG-Datei anzulegen, eine Kopfzeile zu schreiben und die Datei zu schließen.
- Danach wiederholt die Datei zum Anhängen weiterer Segmente jeweils öffnen und nach erfolgtem Anhängen wieder schließen.

Das Makro besteht aus mehreren Funktionen, die von der Hauptfunktion "main()" aufgerufen werden.  
Zusätzliche Funktionen können vor der EndSvg-Funktion eingefügt werden und die dazugehörigen Aufrufe werden vor dem EndSvg()-Aufruf eingesetzt.  
Man muss auf die Anzahl der Leerzeichen achten, die mit den Schreiboperationen erzeugt werden, und damit auf den korrekten Zeileneinzug.

#### pathToTemplate()

Bevor überhaupt Kode erzeugt wird, benötigt man einen Ordner zum Speichern der neuen Vorlagen und es muss ein Dateiname vergeben werde.

Der Benutzer sollte bereits einen Vorlagenordner ausgewählt haben. Sein Pfad ist dann in den TechDraw-Voreinstellungen gespeichert.  
 Es ist nicht nötig zu wissen, wo die Voreinstellungen gespeichert werden, da FreeCAD Befehle enthält, mit denen man die benötigten Parameter direkt ansprechen kann.

```
def pathToTemplate(template_name):
    """Link a given template name to the path of the template folder"""
    #- Get the path to the template folder that is set in the FreeCAD parameters
    parameter_path = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Mod/TechDraw/Files")
    template_path = parameter_path.GetString("TemplateDir")
    #- Link template_path and template_name for any OS
    path_to_file = os.path.join(template_path, template_name)  # to join path segments OS neutral
    return path_to_file

```

**parameter_path** erhält den Pfad zum "Verzeichnis" innerhalb der Konfigurationsdatei, wo die Variable "TemplateDir" gefunden werden kann.  
**template_path** erhält den Inhalt von "TemplateDir", also den Pfad zum Vorlagenverzeichnis.  
**template_name** erhält den Namen der neu zu erstellenden Vorlage.

Nun muss der **template_name** noch so mit dem **template_path** verknüpft werden, dass das Ergebnis sowohl zu unix-basierten Betriebssystemen als auch zu Windows kompatibel ist.  
Dies wird mit dem Befehl "os.path.join" erreicht und in der Variablen **template_file** gespeichert. Um diesen Befehl zu aktivieren, wird eine Importanweisung "import os" verlangt.

#### createSvgFile()

Dies erstellt eine neue Vorlage und speichert die XML-Kopfzeile.

```
def createSvgFile(file_path):
    # Create a file and insert a header line (with t as the space saving variant of template)
    t = open(file_path, "w")  # w = write, overwrites existing files
    t.write("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>")
    t.close

```

#### startSvg()

Dies wird an die Vorlagendatei angefügt und erstellt den öffnenden SVG-Tag inklusive seiner Attribute.  
Jede Schreibanweisung enthält eine einzelne SVG-Codezeile, die auf "\n" endet, dem Kennzeichen für CR/LF.

```
def startSvg(file_path, sheet_width, sheet_height):
    # Create svg-tag including namespace and format definitions
    t = open(file_path, "a", encoding="utf-8")
    # a = append, new lines are added at the end of an existing file
    # encoding="utf-8", helps with special characters if the Python interpreter is in ASCII mode
    t.write("\n" + "\n")
    t.write("<svg\n")
    #- Namespace declarations
    t.write("  xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"\n")
    t.write("  xmlns:freecad=\"http://www.freecad.org/wiki/index.php?title=Svg_Namespace\"\n")
    #- Format definition
    t.write("  width =\"" + sheet_width + "mm\"\n")
    t.write("  height=\"" + sheet_height + "mm\"\n")
    t.write("  viewBox=\"0 0 " + sheet_width + " " + sheet_height + "\">\n")
    # identical values for width and height and Viewbox' width and height
    # will synchronise mm and svg-units
    t.close

```

#### Funktion endSvg()

Dies wird wieder an die Vorlagendatei angefügt und erstellt den schließenden SVG-Tag; Damit wird der SVG-Code letztlich abgeschlossen.

```
def endSvg(file_path):
    # Create closing svg-tag
    t = open(file_path, "a", encoding="utf-8")
    t.write("</svg>")
    t.close

```

#### Funktion main()

Die Funktion main() ruft alle weiteren Funktionen auf und übergibt einige Parameter.

```
def main():
    """This one creates an empty A3 template"""
    #- Set the name of the template file and get its location
    template_file = pathToTemplate("MyTemplate.svg")  # Change the template name here
    #- Here starts the compiling of the svg file
    createSvgFile(template_file)  # overwrites existing File
    #- Set sheet format (DIN A3)
    format_width  = "420"
    format_height = "297"
    startSvg(template_file, format_width, format_height)  # adds svg start tag
    endSvg(template_file)  # adds svg end tag
    # At this point a new SVG-file is generated and saved
    return

```

In diesem Beispiel sind die Werte für `format_width` und `format_height` festgeschriebene (hard coded) Abmessungen, Die beiden eigentlich nicht notwendigen Zeilen markieren den Punkt an dem andere Funktionen zum Ermitteln der Formatdaten ihren Inhalt ablegen können.

#### Das komplette Makro für eine leere Seite

Dieses Makro enthält die obigen Codeabschnitte und ist startbereit.

```
#! python
# -*- coding: utf-8 -*-
# (c) 2024 Your name LGPL

import os  # to enable the use of os.path.join()

# - SVG creation -
def createSvgFile(file_path):
    # Create a file and insert a header line (with t as the space saving variant of template)
    t = open(file_path, "w")  # w = write, overwrites existing files
    t.write("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>")
    t.close

def startSvg(file_path, sheet_width, sheet_height):
    # Create svg-tag including namespace and format definitions
    t = open(file_path, "a", encoding="utf-8")
    # a = append, new lines are added at the end of an existing file
    # encoding="utf-8", helps with special characters if the Python interpreter is in ASCII mode
    t.write("\n" + "\n")
    t.write("<svg\n")
    #- Namespace declarations
    t.write("  xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"\n")
    t.write("  xmlns:freecad=\"http://www.freecad.org/wiki/index.php?title=Svg_Namespace\"\n")
    #- Format definition
    t.write("  width =\"" + sheet_width + "mm\"\n")
    t.write("  height=\"" + sheet_height + "mm\"\n")
    t.write("  viewBox=\"0 0 " + sheet_width + " " + sheet_height + "\">\n")
    # identical values for width and height and Viewbox' width and height
    # will synchronise mm and svg-units
    t.close

def endSvg(file_path):
    # Create closing svg-tag
    t = open(file_path, "a", encoding="utf-8")
    t.write("</svg>")
    t.close

def pathToTemplate(template_name):
    """Link a given template name to the path of the template folder"""
    #- Get the path to the template folder that is set in the FreeCAD parameters
    parameter_path = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Mod/TechDraw/Files")
    template_path = parameter_path.GetString("TemplateDir")
    #- Link template_path and template_name for any OS
    path_to_file = os.path.join(template_path, template_name)  # to join path segments OS neutral
    return path_to_file

def main():
    """This one creates an empty A3 template"""
    #- Set the name of the template file and get its location
    template_file = pathToTemplate("MyTemplate.svg")  # Change the template name here
    #- Here starts the compiling of the svg file
    createSvgFile(template_file)  # overwrites existing File
    #- Set sheet format (DIN A3)
    format_width  = "420"
    format_height = "297"
    startSvg(template_file, format_width, format_height)  # adds svg start tag
    endSvg(template_file)  # adds svg end tag
    # At this point a new SVG-file is generated and saved
    return

if __name__ == '__main__':
    # This will be true only if the file is "executed"
    # but not if imported as module
    main()

```

### ... zum Erstellen einer Seite mit ein paar Strichen

Um aus einer leeren Seite eine Zeichnung zu machen, braucht man:

- Rahmen, d.h. Rechtecke, die mit der Anweisung **rect** erstellt werden.
- Ein Schriftfeld und noch etwas mehr, das aus Linien besteht, die mit der Anweisung **path** erstellt werden.
- Einfache Texte für Indizes und die Benennungen der Schriftfeldzellen.
- Editierbare Texte für z.B. Sachnummer und Benennung.

Diese graphischen Elemente werden normalerweise mehrfach benutzt, daher werden für die erzeugenden Kodes vier Funktionen erstellt:

- svgRect() für rechteckige Rahmenelemente.
- svgPath() für gerade Linienelemente.
- svgText() für unveränderliche Texte.
- ediText() für editierbares Texte.

Alle Funktionen werden innerhalb des obigen Makros vor der Funktion main() eingefügt und die dazugehörigen Funktionsaufrufe zwischen `startSvg(...)` und `endSvg(...)` in der Funktion main().

### Funktion svgRect()

Um ein Rechteck zu zeichnen, muss die Funktion **svgRect** aufgerufen und die Werte für Breite, Höhe und die Position der linken oberen Ecke übergeben werden. Das liest sich an dieser Stelle besser als wenn svg_line die komplette SVG-Codezeile enthalten würde.

```
def svgRect(width, height, x, y):
    # Generates an svg-instruction to draw a rectangle with the given values
    svg_line = (
        "<rect width=\"" + width + "\" height=\"" + height + "\" x=\"" + x
        + "\" y=\"" + y + "\" />"
        )
    return svg_line

```

Die SVG-Anweisung ist geteilt, um innerhalb der empfohlenen Python-Zeilenlänge zu bleiben, sie ergibt trotzdem eine einzelne SVG-Zeile.

### Funktion svgPath()

Um eine Linie zu zeichnen, muss die Funktion **svgPath** aufgerufen und die Koordinaten für Start- und Endpunkt einer Linie übergeben werden.

Anstatt der Endpunktkoordinaten kann ein Kennwert übergeben werden, um eine horizontale (h) oder vertikale (v) Linie zu zeichnen, gefolgt von der Länge der Linie, oder ein Kennwert, um eine Horizontale (H) oder vertikale (V) Linie zu zeichnen, gefolgt von der X- bzw. Y-Ordinate des Endpunktes.

Jeder Pfad beginnt am Ursprung und die erste Aktion ist eine Bewegung mit "angehobenem Stift" (nicht zeichnend) zum Startpunkt. In diesem Fall sind die relative und die absolute Bewegung identisch und daher ist es egal, ob der M-Tag ein großes oder ein kleines M enthält.

```
def svgPath(x1, y1, x2, y2):
    # Generates an svg-instruction to draw a path element (line) with the given values
    if x2 == "v" or x2 == "V" or x2 == "h" or x2 == "H":
        svg_line = ("<path d=\"m " + x1 + "," + y1 + " " + x2 + " " + y2 + "\" />")
    else:
        svg_line = ("<path d=\"m " + x1 + "," + y1 + " l " + x2 + "," + y2 + "\" />")
    return svg_line

```

### Funktion svgText()

Um etwas Text zu zeichnen, muss die Funktion **svgText** aufgerufen und die Koordinaten für den Ankerpunkt des Textes, die Textzeichenkette selbst sowie wahlweise ein Winkel für gedrehten Text übergeben werden. Zum Drehen von Texten muss eine Transformationsanweisung in jeden einzelnen Text-Tag eingefügt werden; die Drehpunkte müssen dieselben Koordinaten erhalten, wie die zugehörigen Text-Ankerpunkte.

(Die Textausrichtung wird durch den umschließenden Gruppen-Tag gesteuert oder ist standardmäßig linksbündig)

```
def svgText(x, y, str_value, str_angle="0"):
    """
    Generates an svg-instruction to place a text element with the given values.
    Optional str_angle enables vertical and arbitrarily rotated texts
    """
    if str_angle == "0":
        svg_line = ("<text x=\"" + x + "\" y=\"" + y + "\">" + str_value + "</text>")
    else:
        svg_line = (
            "<text x=\"" + x + "\" y=\"" + y + "\" transform=\"rotate(" + str_angle
            + "," + x + "," + y + ")\">" + str_value + "</text>"
            )
    return svg_line

```

#### Funktion ediText()

Um einen editierbaren Text zu zeichnen, muss die Funktion **ediText** aufgerufen und die Koordinaten für den Ankerpunkt des Textes, die Textzeichenkette selbst sowie wahlweise ein Winkel für gedrehten Text übergeben werden. Zum Drehen von Texten muss eine Transformationsanweisung in jeden einzelnen Text-Tag eingefügt werden; die Drehpunkte müssen dieselben Koordinaten erhalten, wie die zugehörigen Text-Ankerpunkte.

FreeCAD erzeugt ein Dictionary-Objekt für jede hinzugefügte Vorlage, und jeder Eintrag hat einen Namen (key) und einen Wert (value).

(Die Textausrichtung wird durch den umschließenden Gruppen-Tag gesteuert oder ist standardmäßig linksbündig)

```
def ediText(entry_name, x, y, str_value, str_angle="0"):
    """
    Generates an svg-instruction to place an editable text element with the given values.
    Optional str_angle enables vertical and arbitrarily rotated editable texts
    """
    if str_angle == "0":
        svg_line = (
            "<text freecad:editable=\"" + entry_name + "\" x=\"" + x + "\" y=\"" + y
            + "\">  <tspan>" + str_value + "</tspan>  </text>"
            )
    else:
        svg_line = (
            "<text freecad:editable=\"" + entry_name + "\" x=\"" + x + "\" y=\"" + y
            + "\" transform=\"rotate(" + str_angle + "," + x + "," + y + ")\">  <tspan>"
            + str_value + "</tspan>  </text>"
            )
    return svg_line

```

### Funktionstyp createXxxx

Diese Funktionen beginnen mit Kode zum öffnen einer Datei im Anfüge-Modus (append mode) sowie zum schreiben des öffnenden Gruppen-Tags.

Dann folgt ein Abschnitt zum setzen und berechnen von Werten und mit Schreibanweisungen, die die obigen Funktionen zum erstellen von SVG-Kode aufrufen.

Und am Ende steht der schließende Gruppen-Tag, gefolgt von einer Anweisung zum Schließen der Datei.

```
def createFrame(file_path, sheet_width, sheet_height):
    # Creates rectangles for sheet frame and drawing area
    t = open(file_path, "a", encoding="utf-8")
    t.write("    <g id=\"drawing-frame\"\n")
    t.write("      style=\"fill:none;stroke:#000000;stroke-width:0.5;stroke-linecap:round\">\n")
    #- upper left corner of inner Frame, drawing area
    frame_x = str(20)
    frame_y = str(10)
    #- frame dimensions
    frame_width = str(int(sheet_width) - 20 - 10)
    frame_height = str(int(sheet_height) - 10 - 10)
    #- frame rectangle
    t.write("      " + svgRect(frame_width, frame_height, frame_x, frame_y) + "\n")
    #- upper left corner outer frame, sheet frame
    frame_x = str(15)
    frame_y = str(5)
    #- frame dimensions
    frame_width = str(int(sheet_width)-20)
    frame_height = str(int(sheet_height)-10)
    #- frame rectangle
    t.write("      " + svgRect(frame_width, frame_height, frame_x, frame_y) + "\n")
    t.write("    </g>\n\n")
    t.close

```

### Das resultierende Makro

Dieses Makro fügt ein paar grundlegende graphische Elemente hinzu, die für richtige Vorlagen gebraucht werden, wie z.B. Linienelemente, Texte und editierbares Texte.

```
#! python
# -*- coding: utf-8 -*-
# (c) 2024 Your name LGPL

import os  # to enable the use of os.path.join()

# - SVG creation -
def createSvgFile(file_path):
    # Create a file and insert a header line (with t as the space saving variant of template)
    t = open(file_path, "w")  # w = write, overwrites existing files
    t.write("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>")
    t.close

def startSvg(file_path, sheet_width, sheet_height):
    # Create svg-tag including namespace and format definitions
    t = open(file_path, "a", encoding="utf-8")
    # a = append, new lines are added at the end of an existing file
    # encoding="utf-8", helps with special characters if the Python interpreter is in ASCII mode
    t.write("\n" + "\n")
    t.write("<svg\n")
    #- Namespace declarations
    t.write("  xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"\n")
    t.write("  xmlns:freecad=\"http://www.freecad.org/wiki/index.php?title=Svg_Namespace\"\n")
    #- Format definition
    t.write("  width =\"" + sheet_width + "mm\"\n")
    t.write("  height=\"" + sheet_height + "mm\"\n")
    t.write("  viewBox=\"0 0 " + sheet_width + " " + sheet_height + "\">\n")
    # identical values for width and height and Viewbox' width and height
    # will synchronise mm and svg-units
    t.close

def endSvg(file_path):
    # Create closing svg-tag
    t = open(file_path, "a", encoding="utf-8")
    t.write("</svg>")
    t.close

def svgRect(width, height, x, y):
    # Ggenerates an svg-instruction to draw a rectangle with the given values
    svg_line = (
        "<rect width=\"" + width + "\" height=\"" + height + "\" x=\"" + x
        + "\" y=\"" + y + "\" />"
        )
    return svg_line

def svgPath(x1, y1, x2, y2):
    # Generates an svg-instruction to draw a path element (line) with the given values
    if x2 == "v" or x2 == "V" or x2 == "h" or x2 == "H":
        svg_line = ("<path d=\"m " + x1 + "," + y1 + " " + x2 + " " + y2 + "\" />")
    else:
        svg_line = ("<path d=\"m " + x1 + "," + y1 + " l " + x2 + "," + y2 + "\" />")
    return svg_line

def svgText(x, y, str_value, str_angle="0"):
    """
    Generates an svg-instruction to place a text element with the given values.
    Optional str_angle enables vertical and arbitrarily rotated texts
    """
    if str_angle == "0":
        svg_line = ("<text x=\"" + x + "\" y=\"" + y + "\">" + str_value + "</text>")
    else:
        svg_line = (
            "<text x=\"" + x + "\" y=\"" + y + "\" transform=\"rotate(" + str_angle
            + "," + x + "," + y + ")\">" + str_value + "</text>"
            )
    return svg_line

def ediText(entry_name, x, y, str_value, str_angle="0"):
    """
    Generates an svg-instruction to place an editable text element with the given values.
    Optional str_angle enables vertical and arbitrarily rotated editable texts
    """
    if str_angle == "0":
        svg_line = (
            "<text freecad:editable=\"" + entry_name + "\" x=\"" + x + "\" y=\"" + y
            + "\">  <tspan>" + str_value + "</tspan>  </text>"
            )
    else:
        svg_line = (
            "<text freecad:editable=\"" + entry_name + "\" x=\"" + x + "\" y=\"" + y
            + "\" transform=\"rotate(" + str_angle + "," + x + "," + y + ")\">  <tspan>"
            + str_value + "</tspan>  </text>"
            )
    return svg_line

def createFrame(file_path, sheet_width, sheet_height):
    # Creates rectangles for sheet frame and drawing area
    t = open(file_path, "a", encoding="utf-8")
    t.write("    <g id=\"drawing-frame\"\n")
    t.write("      style=\"fill:none;stroke:#000000;stroke-width:0.5;stroke-linecap:round\">\n")
    #- calculate upper left corner of inner Frame, drawing area
    frame_x = str(20)
    frame_y = str(10)
    #- frame dimensions
    frame_width = str(int(sheet_width) - 20 - 10)
    frame_height = str(int(sheet_height) - 10 - 10)
    #- frame rectangle
    t.write("      " + svgRect(frame_width, frame_height, frame_x, frame_y) + "\n")
    #- calculate upper left corner outer frame, sheet frame
    frame_x = str(15)
    frame_y = str(5)
    #- frame dimensions
    frame_width = str(int(sheet_width)-20)
    frame_height = str(int(sheet_height)-10)
    #- frame rectangle
    t.write("      " + svgRect(frame_width, frame_height, frame_x, frame_y) + "\n")
    t.write("    </g>\n\n")
    t.close

def createTitleBlock(file_path, sheet_width, sheet_height):
    """Creates a title block and transfers it to the position according to the sheet dimensions"""
    #- calculate title block origin (lower left corner), offset from page origin
    tbX = str(int(sheet_width) - 10 - 180)  # 180 according to DIN EN ISO 7200
    tbY = str(int(sheet_height) - 10)
    t = open(file_path, "a", encoding="utf-8")
    #- group to transfer all included title block elements at once
    t.write("    <g id=\"titleblock\"\n")
    t.write("      transform=\"translate(" + tbX + "," + tbY + ")\">\n")
    #- sub-group of title block line framework
    t.write("      <g id=\"titleblock-frame\"\n")
    t.write("        style=\"fill:none;stroke:#000000;stroke-width:0.35;\
stroke-linecap:miter;stroke-miterlimit:4\">\n")
    t.write("        " + svgPath("  0","  0","  0","-63") + "\n")
    t.write("        " + svgPath("  0","-63","180","  0") + "\n")
    t.write("        " + svgPath("  0","-30","h","155") + "\n")
    t.write("        " + svgPath("155","  0","v","-63") + "\n")
    t.write("      </g>\n")
    #- sub-group of title block static texts (left-aligned by default)
    t.write("      <g id=\"titleblock-text-non-editable\"\n")
    t.write("        style=\"font-size:5.0;text-anchor:start;fill:#000000;\
font-family:osifont\">\n")
    t.write("        " + svgText("  4.5","-43.5 ","Some static text") + "\n")
    t.write("        " + svgText("  4.5","-13.5 ","More static text") + "\n")
    t.write("        " + svgText("162.5","-3.5 ","Vertical static text","-90") + "\n")
    t.write("      </g>\n")
    t.write("    </g>\n\n")
    t.close

def createEditableText(file_path, sheet_width, sheet_height):
    """Creates editable texts positioned according to the page origin"""
    #- calculate offset to titleblock origin
    edX = int(sheet_width) - 10 - 180 # 180 according to DIN EN ISO 7200
    edY = int(sheet_height) - 10
    t = open(file_path, "a", encoding="utf-8")
    #- group editable texts using the same attributes
    t.write("    <g id=\"titleblock-editable-texts\"\n")
    t.write("      style=\"font-size:7.0;text-anchor:start;fill:#0000d0;\
font-family:osifont\">\n")
    t.write(
        "      " + ediText("EdiText-1",str(edX + 60),str(edY - 43.5),"Some editable text") + "\n"
        )
    t.write(
        "      " + ediText("EdiText-2",str(edX + 60),str(edY - 13.5),"More editable text") + "\n"
        )
    t.write(
        "      " + ediText("EdiText-3",str(edX + 173),str(edY - 4.5),"90° editable text","-90")
        + "\n"
        )
    t.write("    </g>\n\n")
    t.close

def pathToTemplate(template_name):
    """Link a given template name to the path of the template folder"""
    #- Get the path to the template folder that is set in the FreeCAD parameters
    parameter_path = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Mod/TechDraw/Files")
    template_path = parameter_path.GetString("TemplateDir")
    #- Link template_path and template_name for any OS
    path_to_file = os.path.join(template_path, template_name)  # to join path segments OS neutral
    return path_to_file

def main():
    """This one creates an A3 template with simple frame and title block"""
    #- Set the name of the template file and get its location
    template_file = pathToTemplate("MyTemplate.svg")  # Change the template name here
    #- Here starts the compiling of the svg file
    createSvgFile(template_file)  # overwrites existing File
    #- Set sheet format (DIN A3)
    format_width  = "420"
    format_height = "297"
    startSvg(template_file, format_width, format_height)  # adds svg start tag
    createFrame(template_file, format_width, format_height)
    createTitleBlock(template_file, format_width, format_height)
    createEditableText(template_file, format_width, format_height)
    endSvg(template_file)  # adds svg end tag
    # At this point a new SVG-file is generated and saved
    return

if __name__ == '__main__':
    # This will be true only if the file is "executed"
    # but not if imported as module
    main()

```

Und das ist der SVG-Kode aus diesem Makro:

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<svg
  xmlns="http://www.w3.org/2000/svg" version="1.1"
  xmlns:freecad="http://www.freecad.org/wiki/index.php?title=Svg_Namespace"
  width ="420mm"
  height="297mm"
  viewBox="0 0 420 297">
    <g id="drawing-frame"
      style="fill:none;stroke:#000000;stroke-width:0.5;stroke-linecap:round">
      <rect width="390" height="277" x="20" y="10" />
      <rect width="400" height="287" x="15" y="5" />
    </g>

    <g id="titleblock"
      transform="translate(230,287)">
      <g id="titleblock-frame"
        style="fill:none;stroke:#000000;stroke-width:0.35;stroke-linecap:miter;stroke-miterlimit:4">
        <path d="m   0,  0 l   0,-63" />
        <path d="m   0,-63 l 180,  0" />
        <path d="m   0,-30 h 155" />
        <path d="m 155,  0 v -63" />
      </g>
      <g id="titleblock-text-non-editable"
        style="font-size:5.0;text-anchor:start;fill:#000000;font-family:osifont">
        <text x="  4.5" y="-43.5 ">Some static text</text>
        <text x="  4.5" y="-13.5 ">More static text</text>
        <text x="162.5" y="-3.5 " transform="rotate(-90,162.5,-3.5 )">Vertical static text</text>
      </g>
    </g>

    <g id="titleblock-editable-texts"
      style="font-size:7.0;text-anchor:start;fill:#0000d0;font-family:osifont">
      <text freecad:editable="EdiText-1" x="290" y="243.5">  <tspan>Some editable text</tspan>  </text>
      <text freecad:editable="EdiText-2" x="290" y="273.5">  <tspan>More editable text</tspan>  </text>
      <text freecad:editable="EdiText-3" x="403" y="282.5" transform="rotate(-90,403,282.5)">  <tspan>90° editable text</tspan>  </text>
    </g>

</svg>

```

Und so soll es aussehen, wenn sie (die Vorlage) eingefügt wurde (mit vergrößertem Schriftfeld):

![](/images/TechDraw_TemplateGenerator.png)

Die editierbaren Texte in blau einzufärben ist nur eine persönliche Vorliebe, um unveränderlichen und editierbaren Text einfacher unterscheiden zu können.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_TemplateGenerator/de&oldid=1361853>"
