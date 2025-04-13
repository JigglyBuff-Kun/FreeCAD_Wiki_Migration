---
title: TechDraw BlattExportierenDXF
---

|                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw BlattExportierenDXF                                                                                                      |
| Menüeintrag                                                                                                                       |
| TechDraw → Page → Seite als DXF-Datei exportieren                                                                                 |
| Arbeitsbereich                                                                                                                    |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                        |
| Standardtastenkürzel                                                                                                              |
| _Keiner_                                                                                                                          |
| Eingeführt in Version                                                                                                             |
| 0.18                                                                                                                              |
| Siehe auch                                                                                                                        |
| [TechDraw BlattExportierenSVG](/TechDraw_ExportPageSVG/de "TechDraw ExportPageSVG/de"), [Draft DXF](/Draft_DXF/de "Draft DXF/de") |
|                                                                                                                                   |

## Beschreibung

Das Werkzeug **TechDraw BlattExportierenDXF** speichert ein Zeichnungsblatt als [DXF](/DXF/de "DXF/de")-Datei.

## Anwendung

1. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") aktivieren.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_ExportPageDXF.svg) Seite als DXF-Datei exportieren drücken.
   - Den Menüeintrag **TechDraw → Page → ![](/src/assets/images/TechDraw_ExportPageDXF.svg) Seite als DXF-Datei exportieren** auswählen.
   - Wenn ein Zeichnungsblatt im [Hauptansichtsbereich](/Main_view_area/de "Main view area/de") angezeigt wird: Mit der rechten Maustaste in das Fenster des Blattes klicken und im Kontextmenü die Option **Export DXF** auswählen.
3. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und noch kein Blatt aktiviert wurde, wird das Dialogfeld **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.
4. Das Dialogfenster **Seite als DXF-Datei exportieren** wird geöffnet.
5. Einen Speicherort und einen Dateinamen auswählen.

### Einschränkungen

- Radien- und Durchmessermaße werden nur dann korrekt exportiert, wenn sie "innerhalb" des Bogens liegen.
- Skalierung wird nicht unterstützt. Das DXF wird in der tatsächlichen Größe der TechDraw Seite gezeichnet.
- Einheiten werden nicht unterstützt. Das DXF wird in Millimetern (mm) gezeichnet. Bemaßungstext wird genau wie in TechDraw angezeigt.
- TechDraw kann keine [Draft-Ansicht](/TechDraw_DraftView/de "TechDraw DraftView/de") oder [Arch-Ansicht](/TechDraw_ArchView/de "TechDraw ArchView/de") nach DXF exportieren. Diese Ansichten sind [SVG](/SVG/de "SVG/de")-Elemente, die intern vom Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") generiert werden, sodass es keine geometrische Form zum Exportieren gibt. Um eine Ansicht als DXF zu exportieren, muss sie mit [Ansicht](/TechDraw_View/de "TechDraw View/de") oder [Ansichtengruppe](/TechDraw_ProjectionGroup/de "TechDraw ProjectionGroup/de") erstellt worden sein. Man wählt z. B. eine [Arch SchnittEbene](/Arch_SectionPlane/de "Arch SectionPlane/de"), danach verwendet man [Draft FormIn2DAnsicht](/Draft_Shape2DView/de "Draft Shape2DView/de") um eine ebene Projektion zu erstellen, und wendet dann [Ansicht](/TechDraw_View/de "TechDraw View/de") auf dieses Objekt an. Alternativ wählt man die Objekte in der Baumansicht oder in der 3D-Ansicht aus und exportiert sie mit **Datei → [Exportieren...](/Std_Export/de "Std Export/de")**.
- Das Schriftfeld einer Seite ist ebenfalls eine [SVG](/SVG/de "SVG/de")-Vorlage, daher wird es auch nicht nach DXF exportiert.
- Im Allgemeinen kann TechDraw nur die Elemente nach DXF exportieren, die von der Klasse `Import::ImpExpDxfWrite` des [Draft DXF](/Draft_DXF/de "Draft DXF/de")-Moduls unterstützt werden.

## Hinweise

- Diese Funktion exportiert die Versionen R12 (AC1009) und R14 (AC1014) von [DXF](/DXF/de "DXF/de").
  - R12 ist eine ältere, einfachere Version des Standards, sollte aber für die meisten anderen Programme lesbar sein.
  - R14 ist die Standardversion. Sie enthält unter anderem Unterstützung für Splines und Ellipsen.
- Diese Parameter beeinflussen die Ausgabe:
  - **Werkzeuge → Parameter Berabeiten → BasisApp/Einstellungen/Mod/Import → DxfVersionOut**. Dies ist ein ganzzahliger Wert. Gültige Einträge sind 12 oder 14. Der Standardwert ist 14.
  - **Werkzeuge → Parameter Berabeiten → BasisApp/Einstellungen/Mod/Import → DiscretizeEllipses**. Dies ist ein boolescher Wert. Wenn `true`, werden Splines und Ellipsen in Polylinien umgewandelt; wenn `false`, werden Splines und Ellipsen als Splines- und Ellipsenobjekte geschrieben. Die Vorgabe ist `false`. Wenn der Parameter DxfVersionOut 12 ist, werden Splines und Ellipsen immer in Polylinien konvertiert.
  - **Werkzeuge → Parameter Berabeiten → BasisApp/Einstellungen/Mod/Import → maxsegmentlength**. Dies ist ein Gleitkommawert. Wenn Splines und Ellipsen in Polylinien umgewandelt werden, bestimmt dieser Parameter die Segmentlänge.

## Skripten

_Siehe auch:_ [TechDrawGui API](/TechDrawGui_API/de "TechDrawGui API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug SeiteExportierenDXF kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen benutzt werden:

```
TechDraw.writeDXFPage(page,filename)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExportPageDXF/de&oldid=1487579>"
