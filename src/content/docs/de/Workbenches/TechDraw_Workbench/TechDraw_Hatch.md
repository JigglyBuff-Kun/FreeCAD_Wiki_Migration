---
title: TechDraw Schraffur
---

|                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TechDraw Schraffur                                                                                                                                                 |
| Menüeintrag                                                                                                                                                        |
| TechDraw → Hatching → Fläche mit Muster aus einer Bilddatei schraffieren                                                                                           |
| Arbeitsbereich                                                                                                                                                     |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                                         |
| Standardtastenkürzel                                                                                                                                               |
| _Keiner_                                                                                                                                                           |
| Eingeführt in Version                                                                                                                                              |
| -                                                                                                                                                                  |
| Siehe auch                                                                                                                                                         |
| [TechDraw Geometrische Schraffur](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de"), [TechDraw Schraffieren](/TechDraw_Hatching/de "TechDraw Hatching/de") |
|                                                                                                                                                                    |

## Beschreibung

Das Werkzeug **TechDraw Schraffur** füllt einen geschlossenen Bereich in einer Ansicht mit einem gekachelten [SVG](/SVG/de "SVG/de")- oder bitmap-basierten ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) Schraffurmuster. Alternativ dazu verwendet das Werkzeug ![](/images/TechDraw_GeometricHatch.svg) [TechDraw GeometrischeSchraffur](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de") ein PAT-basiertes Schraffurmuster. Siehe [Schraffieren](/TechDraw_Hatching/de "TechDraw Hatching/de") für Einzelheiten.

![](/images/TechDraw_Hatch_example.png)

SVG Schraffurmuster auf einer Fläche

## Anwendung

1. Einen geschlossenen Bereich in einer Ansicht auswählen.
2. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_Hatch.svg) Fläche mit Muster aus einer Bilddatei schraffieren drücken.
   - Den Menüeintrag **TechDraw → Hatching → ![](/images/TechDraw_Hatch.svg) Fläche mit Muster aus einer Bilddatei schraffieren** auswählen.
3. Der Aufgabenbereich zu **Fläche mit Muster aus einer Bilddatei schraffieren** öffnet sich.
4. Wahlweise kann **Pattern File** geändert werden (wechselt die Schraffurdatei) .
5. Wahlweise können **Pattern Scale** (Schraffurskalierung) und **Line Color** (Linienfarbe) verändert werden. Diese Einstellungen werden für Bitmap-Muster ignoriert.
6. Schaltfläche OK drücken.

## Hinweise

- Für eine durchgängige Farbfüllung wird unter **Datei mit dem Schraffurmuster** solid.svg ausgewählt.
- Schraffierte Objekte sind anfällig für das "[Problem der topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de")". Siehe [TechDraw Längenmaß](/TechDraw_LengthDimension/de "TechDraw LengthDimension/de") für weitere Information. Es wird empfohlen, das Schraffieren als einen der letzten Schritte im Zeichenprozess anzuwenden.
- [SVG](/SVG/de "SVG/de")-Beispielmuster sind lokal verfügbar unter:

: ```
$INSTALL_DIR/data/Mod/TechDraw/Patterns

    ```

: Dabei ist `$INSTALL_DIR` das Verzeichnis, in dem FreeCAD installiert wurde, z.B.:
: ```
/usr/share/freecad/data/Mod/TechDraw/Patterns

    ```

: Sie stehen auch auf [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/TechDraw/Patterns) zur Verfügung.

## Eigenschaften

- Daten**Quelle**: Ansicht und Fläche, die das Schraffurmuster enthalten.
- Daten**Schraffurmuster**: Vollständiger Pfad und Dateiname zu einer SVG Musterdatei.
- Ansicht**Schraffurfarbe**: Das Schraffurmuster wird mit dieser Farbe angezeigt.
- Ansicht**Schraffurmaßstab**: Faktor zur Modifizierung der Schraffurmuster.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Eine Schraffur kann mit [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen erstellt werden:

```
hatch = FreeCAD.ActiveDocument.addObject("TechDraw::DrawHatch", "Hatch")
hatch.Source = (view1, ["Face0"])
hatch.HatchPattern = hatchFileSpec
page.addView(hatch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatch/de&oldid=1500195>"
