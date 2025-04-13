---
title: TechDraw BlattExportierenSVG
---

|                                                                                                                |
| -------------------------------------------------------------------------------------------------------------- |
| TechDraw BlattExportierenSVG                                                                                   |
| Menüeintrag                                                                                                    |
| TechDraw → Page → Seite als SVG-Datei exportieren                                                              |
| Arbeitsbereich                                                                                                 |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                     |
| Standardtastenkürzel                                                                                           |
| _Keiner_                                                                                                       |
| Eingeführt in Version                                                                                          |
| -                                                                                                              |
| Siehe auch                                                                                                     |
| [TechDraw Vorlagen](/TechDraw_Templates/de "TechDraw Templates/de"), [Draft SVG](/Draft_SVG/de "Draft SVG/de") |
|                                                                                                                |

## Beschreibung

Das Werkzeug **TechDraw BlattExportierenSVG** speichert das aktuelle Zeichnungsblatt als [SVG](/SVG/de "SVG/de")-Datei.

## Anwendung

1. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") aktivieren.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_ExportPageSVG.svg) Seite als SVG-Datei exportieren drücken.
   - Den Menüeintrag **TechDraw → Page → ![](/src/assets/images/TechDraw_ExportPageSVG.svg) Seite als SVG-Datei exportieren** auswählen.
   - Wenn ein Zeichnungsblatt im [Hauptansichtsbereich](/Main_view_area/de "Main view area/de") angezeigt wird: Mit der rechten Maustaste in das Fenster des Blattes klicken und im Kontextmenü die Option **Export SVG** auswählen.
3. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und noch kein Blatt aktiviert wurde, wird das Dialogfeld **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.
4. Das Dialogfenster **Seite als SVG-Datei exportieren** wird geöffnet.
5. Einen Speicherort und einen Dateinamen auswählen.

## Hinweise

- [TechDraw Schraffur](/TechDraw_Hatch/de "TechDraw Hatch/de") Muster werden aufgrund einer Begrenzung in der SVG Unterstützung von Qt4 nicht nach [SVG](/SVG/de "SVG/de") exportiert.
- Textpositionen und -größen sind in der exportierten Datei nicht korrekt. Die Verwendung der "System" Standardschriftart in der Zeichnung verbessert das Größenproblem erheblich.

## Skripten

_Siehe auch:_ [TechDrawGui API](/TechDrawGui_API/de "TechDrawGui API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das SpeichereSVG Werkzeug kann in [Makros](/Macros/de "Macros/de") und aus der [Python](/Python/de "Python/de") Konsole mit den folgenden Funktionen benutzt werden:

```
TechDrawGui.exportPageAsSvg(DrawPageObject,FilePath)

```

Beachte, dass das FreeCADGui Modul aktiv sein muss, um diese Funktion nutzen zu können.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExportPageSVG/de&oldid=1487575>"
