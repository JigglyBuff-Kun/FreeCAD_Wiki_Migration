---
title: TechDraw Schweißsymbol
---

|                                                                           |
| ------------------------------------------------------------------------- |
| TechDraw Schweißsymbol                                                    |
| Menüeintrag                                                               |
| TechDraw → Symbols → Hinzufügen von Schweißinformationen zur Hinweislinie |
| Arbeitsbereich                                                            |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                |
| Standardtastenkürzel                                                      |
| _Keiner_                                                                  |
| Eingeführt in Version                                                     |
| 0.19                                                                      |
| Siehe auch                                                                |
| [TechDraw Hinweislinie](/TechDraw_LeaderLine/de "TechDraw LeaderLine/de") |
|                                                                           |

## Beschreibung

Das Werkzeug **TechDraw Schweißsymbol** fügt einer bestehenden Hinweislinie Schweißspezifikationen hinzu.

![](/src/assets/images/TechDraw_WeldingSymbol_example.png)

Schweißspezifikation zu einer Hinweislinie hinzugefügt

## Anwendung

1. Eine vorhandene [Hinweislinie](/TechDraw_LeaderLine/de "TechDraw LeaderLine/de") auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_WeldSymbol.svg) Hinzufügen von Schweißinformationen zur Hinweislinie drücken.
   - Den Menüeintrag **TechDraw → Symbols → ![](/src/assets/images/TechDraw_WeldSymbol.svg) Hinzufügen von Schweißinformationen zur Hinweislinie** auswählen.
3. Der Aufgaben-Bereich wird geöffnet.
4. Schweißsymbole und begleitenden Text festlegen, die der Hinweislinie hinzugefügt werden sollen.
5. Die Schaltfläche OK drücken.

## Hinweise

- Nach Erstellung kann ein Schweißsymbol mit Doppelklick in der [Baumansicht](/Tree_view/de "Tree view/de") zum Bearbeiten aktiviert werden.
- Es gibt einen [Parameter](/TechDraw_Preferences/de "TechDraw Preferences/de") in den Einstellungen für das Standardverzeichnis mit Schweißsymbolen. Eigene Symbole können in einem persönlichen Verzeichnis hinzugefügt werden.

## Eigenschaften

### Schweißsymbol

- Daten-Eigenschaft**All Around**: Zeigt das Symbol für "umlaufende Naht" (Kreis) am Knick der Hinweislinie.
- Daten-Eigenschaft**Field Weld**: Zeigt das Symbol für _Baustellennaht_ (Flagge) am Knick der Hinweislinie.
- Daten-Eigenschaft**Alternating Weld**: Versetzt das untere Symbol, um wechselseitig Schweißungen anzuzeigen.
- Daten-Eigenschaft**Tail Text**: Text, der am Ende der Hinweislinie angezeigt werden soll.

### Kacheln

Jedes einzelne Symbol ("Pfeilseite" und "andere Seite") wird durch ein "Kachel"-Objekt dargestellt. Einem Schweißsymbol sind 1 oder 2 Kacheln zugeordnet. Die Eigenschaften können geändert werden. Dazu muß in der Baumansicht auf die jeweilige Schweißkachel geklickt werden. Unten im Eigenschaftsfeld können dann Änderungen vorgenommen werden:

- Daten-Eigenschaft**Tile Parent**: das ursprüngliche Schweißsymbol
- Daten-Eigenschaft**Tile Row**: Reihe der Kachel. 0 bedeutet oberhalb der Linie, -1 unterhalb der Linie. **Hinweis:** Wenn du die Reihe einer Kachel änderst, musst du auch die Kachel für die zweite Seite ändern! Auf diesem Weg kannst du die Seiten tauschen.
- Daten-Eigenschaft**Tile Column**: Im Moment = 0, zur Zeit noch nicht änderbar.
- Daten-Eigenschaft**Symbol File**: Verzeichnis und Dateiname der SVG-Datei für das Symbol.
- Daten-Eigenschaft**Left Text**: Text, der links neben dem SVG-Symbol angezeigt werden soll.
- Daten-Eigenschaft**Center Text**: Text, der oberhalb/unterhalb des SVG-Symbols angezeigt werden soll.
- Daten-Eigenschaft**Right Text**: Text, der rechts neben dem SVG-Symbol angezeigt werden soll.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Schweißsymbol kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
symbolName = "DrawWeldSymbol001")
symbolType = "TechDraw::DrawWeldSymbol"
App.activeDocument().addObject(symbolType, symbolName)
App.activeDocument().Page.addView(App.activeDocument().DrawWeldSymbol001)
App.activeDocument().DrawWeldSymbol001.Leader = myLeader
App.activeDocument().DrawWeldSymbol001.AllAround = True
App.activeDocument().DrawWeldSymbol001.FieldWeld = True
App.activeDocument().DrawWeldSymbol001.AlternatingWeld = True
App.activeDocument().DrawWeldSymbol001.TailText = "process text"

tileName = "DrawTileWeld001"
tileType = "TechDraw::DrawTileWeld"
App.activeDocument().addObject(tileType, tileName)
App.activeDocument().DrawTileWeld001.TileParent = App.activeDocument().DrawWeldSymbol001
App.activeDocument().DrawTileWeld001.TileRow = 0
App.activeDocument().DrawTileWeld001.TileColumn = 0
App.activeDocument().DrawTileWeld001.SymbolFile = fullPathToMySvgFile
App.activeDocument().DrawTileWeld001.LeftText = "left text"
App.activeDocument().DrawTileWeld001.RightText = "right text"
App.activeDocument().DrawTileWeld001.CenterText = "center text"

```

## Svg Symbol Kacheln

- Einzelne Symbole werden durch 64x64 Pixel große SVG-Dateien gebildet. Zusätzliche Symbole können in einem SVG-Programm wie z.B. [Inkscape](https://en.wikipedia.org/wiki/Inkscape) aus einem der mitgelieferten Symbole als Vorlage erstellt werden.

![](/src/assets/images/Techdraw-WeldingSymbolLayoutArrow.svg)
![](/src/assets/images/Techdraw-WeldingSymbolLayoutOther.svg)

- Einzelne Symbole werden durch SVG-Dateien mit 64x64 (nominal) Pixeln gebildet. Die Kacheln haben einen "Rand" von 4px. Der Rand sorgt dafür, dass sich Hinweislinie und Symbol gut treffen.
- Das Symbol wird in Schwarz auf einem transparenten Hintergrund gezeichnet. Die Strichstärke beträgt 0,5 mm.
- Die Hinweislinie verläuft unterhalb der Symbole für die Pfeilseite (siehe Abbildung links) und oberhalb der Symbole für die "andere" Seite (siehe Abbildung rechts).
- Es gibt keinen besonderen Namensstandard, außer dass bei Bedarf "Auf/Ab" an die Symbole der Pfeil- und der anderen Seite angehängt wird.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_WeldSymbol/de&oldid=1500227>"
