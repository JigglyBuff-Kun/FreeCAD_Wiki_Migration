---
title: TechDraw GeometrischeSchraffur
---

|                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw GeometrischeSchraffur                                                                                                      |
| Menüeintrag                                                                                                                         |
| TechDraw → Hatching → Fläche mit einer geometrischen Schraffur versehen                                                             |
| Arbeitsbereich                                                                                                                      |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                          |
| Standardtastenkürzel                                                                                                                |
| _Keiner_                                                                                                                            |
| Eingeführt in Version                                                                                                               |
| -                                                                                                                                   |
| Siehe auch                                                                                                                          |
| [TechDraw Schraffur](/TechDraw_Hatch/de "TechDraw Hatch/de"), [TechDraw Schraffieren](/TechDraw_Hatching/de "TechDraw Hatching/de") |
|                                                                                                                                     |

## Beschreibung

Das Werkzeug **TechDraw GeometrischeSchraffur** füllt einen geschlossenen Bereich in einer Ansicht mit einem Muster, das auf der Spezifikation einer AutoDesk-PAT-Schraffur basiert. Alternativ dazu verwendet das Werkzeug ![](/images/TechDraw_Hatch.svg) [TechDraw Schraffur](/TechDraw_Hatch/de "TechDraw Hatch/de") SVG-basierte Schraffurmuster. Siehe [Schraffieren](/TechDraw_Hatching/de "TechDraw Hatching/de") für Einzelheiten.

![](/images/TechDraw_GeomHatch_example.png)

Geometrisches Schraffurmuster auf einer Fläche

## Anwendung

1. Einen geschlossenen Bereich in einer Ansicht auswählen.
2. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_GeometricHatch.svg)Fläche mit einer geometrischen Schraffur versehen drücken.
   - Den Menüeintrag **TechDraw→ Hatching → ![](/images/TechDraw_GeometricHatch.svg) Fläche mit einer geometrischen Schraffur versehen** auswählen.
3. Der Aufgabenbereich zu **Geometrische Schraffur auf Fläche anwenden** wird geöffnet.
4. Optional können **Pattern File** (Schraffurdatei), **Pattern Name** (Schraffurname), **Pattern Scale** (Schraffurskalierung), **Line Weight** (Linienbreite) und **Line Color** (Linienfarbe) verändert werden.
5. Die Schaltfläche OK drücken.

## Hinweise

- Für eine durchgängige Farbfüllung wird [TechDraw Schraffur](/TechDraw_Hatch/de "TechDraw Hatch/de") verwendet und unter **Datei mit dem Schraffurmuster** solid.svg ausgewählt.
- Schraffierte Objekte sind anfällig für das "[Problem der topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de")". Siehe ![](/images/TechDraw_LengthDimension.svg) [TechDraw Längenmaß einfügen](/TechDraw_LengthDimension/de "TechDraw LengthDimension/de") für weitere Informationen. Es wird empfohlen, das Schraffieren als einen der letzten Schritte der Zeichnungserstellung auszuführen.
- Ein kleiner Satz von Beispielmustern befinden sich unter:

: ```
$INSTALL_DIR/data/Mod/TechDraw/PAT/FCPAT.pat

    ```

: wobei `$INSTALL_DIR` das Verzeichnis ist, in dem FreeCAD installiert wurde, zum Beispiel:
: ```
/usr/share/freecad/data/Mod/TechDraw/PAT/FCPAT.pat

    ```

## Eigenschaften

- Daten**Quelle**: Die Ansicht und die Fläche, die das Schraffurmuster erhält.
- Daten**Musterdatei**: Der Speicherort der zu verwendenden PAT Datei.
- Daten**Mustername**: Der Name der PAT Spezifikation innerhalb der Musterdatei.
- Daten**Mustermaßstab**: Der Maßstab, der auf das Muster angewendet werden soll (muss > 0,0 sein).
- Ansicht**Musterstärke**: Die Dicke der Musterlinien.
- Ansicht**Musterfarbe**: Die Farbe für die Musterlinien.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Eine geometrische Schraffur kann mit [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen erstellt werden:

```
hatch = FreeCAD.ActiveDocument.addObject("TechDraw::DrawGeomHatch", "GeomHatch")
hatch.Source = (view1, ["Face0"])
hatch.FilePattern = "path/to/myPATfile.pat"
hatch.NamePattern = "Diamond"
page.addView(hatch)

```

Es ist auch möglich, mit der TechDraw-Grafische Schraffur-Funktion ein Verbund-Objekt im 3D-Raum zu erstellen. Dabei muss man darauf achten, dass die Basis-Fläche auf der XY-Ebene liegt, weil der Algorithmus bisher nicht für andere Fälle geeignet ist.

```
import TechDraw
face = Part.makePlane(10, 10)
patfile = "path/to/myPATfile.pat"
pattern = "Diamond"
scale = 10
hatch = TechDraw.makeGeomHatch(face, scale, pattern, patfile)
Part.show(hatch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_GeometricHatch/de&oldid=1500193>"
