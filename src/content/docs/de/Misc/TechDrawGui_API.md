---
title: TechDrawGui API
---
:::caution
(November 2018) Diese Information kann unvollständig und veraltet sein. Für die letzte API siehe die (engl.)autogenerierte API-Dokumentation.
:::

Diese Funktionen sind Teil des [TechDraw-Arbeitsbereichs](/TechDraw_Workbench/de "TechDraw Workbench/de") und können in [Makros](/Macros/de "Macros/de") oder mit dem [Python](/Python/de "Python/de")-Interpreter verwendet werden, sobald das `TechDrawGui` importiert wurde.

Siehe die [TechDraw API](/TechDraw_API/de "TechDraw API/de") für weitere Funktionen.

Beispiel:

```
import FreeCAD
import TechDrawGui

p = FreeCAD.ActiveDocument.Page

f = "/home/localuser/myPdfDirectory/savePage.pdf"
TechDrawGui.exportPageAsPdf(p, f)

f = "/home/localuser/mySvgDirectory/savePage.svg"
TechDrawGui.exportPageAsSvg(p, f)

```

![](/images/Method.png) **exportPageAsPdf(***pageObject, filePath***)**

**Description**: eine Kopie des pageObject im PDF Format im Speicherort filePath speichern

**Returns**: none

![](/images/Method.png) **exportPageAsSvg(***pageObject, filePath***)**

**Description**: eine Kopie des pageObject im SVG Format im Speicherort filePath speichern

**Returns**: none

![](/images/Method.png) **copyActiveViewToSvgFile(***document, filePath, (options)***)**

**Description**: eine Kopie der aktiven Ansicht für "document" in der Datei "filePath" speichern

**Returns**: double (estimated scale)

Optionen:

* width - float - Breite des erzeugten svg in mm
* height - float - Höhe des erzeugten svg in mm
* paintBackground - bool - Hintergrund malen/nicht malen
* backgroundColor - tuple - (r,g,b,a)
* lineWidth - float - Linienstärke
* border - float - Leerraum um Bild
* mode - int - Rendermodus (AS\_IS, WIREFRAME, POINTS, WIREFRAME\_OVERLAY, HIDDEN\_LINE, BOUNDING\_BOX)

![](/images/Method.png) **addQGIToView(***view, QGraphicsItem***)**

**Description**: Hinzufügen eines QGraphicsItems (erstellt mit PySide) zu einer Ansicht

**Returns**: none

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDrawGui_API/de&oldid=790602>"