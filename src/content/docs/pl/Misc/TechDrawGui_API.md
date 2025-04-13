---
title: Tysunek Techniczny Api dla GUI
---

:::caution
(Listopad 2018)Te informacje mogą być niekompletne i nieaktualne. Najnowsze API można znaleźć na stronieautogenerowana dokumentacja API.
:::

Funkcje te są częścią środowiska pracy [Rysunek Roboczy](/TechDraw_Workbench/pl "TechDraw Workbench/pl") i mogą być używane w [makrodefinicjach](/Macros/pl "Macros/pl") oraz z konsoli środowiska [Python](/Python/pl "Python/pl") po zaimportowaniu modułu `TechDrawGui`.

Zobacz stronę [API](/TechDraw_API/pl "TechDraw API/pl") aby poznać więcej funkcji.

Przykład:

```
import FreeCAD
import TechDrawGui

p = FreeCAD.ActiveDocument.Page

f = "/home/localuser/myPdfDirectory/savePage.pdf"
TechDrawGui.exportPageAsPdf(p, f)

f = "/home/localuser/mySvgDirectory/savePage.svg"
TechDrawGui.exportPageAsSvg(p, f)

```

![](/images/Method.png) **exportPageAsPdf(\***pageObject, filePath**\*)**

**Description**: zapisz kopię pageObject w formacie PDF w lokalizacji filePath

**Returns**:

![](/images/Method.png) **exportPageAsSvg(\***pageObject, filePath**\*)**

**Description**: zapisz kopię pageObject w formacie SVG w lokalizacji filePath

**Returns**:

![](/images/Method.png) **copyActiveViewToSvgFile(\***document, filePath,\* (opcje)''**_)_**

**Description**: zapisz kopię aktywnego widoku dla "dokumentu" do pliku "filePath"

**Returns**: double _(szacunkowa skala)_

Opcje:

- width - float - szerokość generowanego svg w mm
- height - float - wysokość generowanego svg w mm
- paintBackground - bool - maluj / nie maluj tła
- backgroundColor - tuple - (r,g,b,a)
- lineWidth - float - szerokość linii
- border - float - pusta przestrzeń wokół obrazu
- mode - int - tryb renderowania (AS_IS, WIREFRAME, POINTS, WIREFRAME_OVERLAY, HIDDEN_LINE, BOUNDING_BOX)

![](/images/Method.png) **addQGIToView(\***view, QGraphicsItem**\*)**

**Description**: add element QGraphicsItem _(utworzony przy użyciu PySide)_ dla Widoku.

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDrawGui_API/pl&oldid=1002373>"
