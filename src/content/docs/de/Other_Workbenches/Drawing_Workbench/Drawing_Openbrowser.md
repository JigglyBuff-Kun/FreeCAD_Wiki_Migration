---
title: Zeichnen Openbrowser
---
|  |
| --- |
| Zeichen Openbrowser |
| Menüeintrag |
| Drawing → Open Browser |
| Arbeitsbereich |
| [Zeichnung](/Drawing_Workbench/de "Drawing Workbench/de"), Complete |
| Standardtastenkürzel |
| none |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Mit diesem Befehl kannst Du eine ausgewählte [Drawing page](/Drawing_Landscape_A3 "Drawing Landscape A3") mit dem internen Webbrowser von FreeCAD anzeigen. Der normale Drawing Page Betrachter von FreeCAD basiert auf [Qt's eingebautem SVG Rendering Modul](http://qt-project.org/doc/qt-5.0/qtsvg/svgrendering.html), das nur eine winzige Teilmenge der vollständigen SVG Spezifikation unterstützt. Daher werden einige fortgeschrittenere SVG Funktionen wie Muster Füllen oder mehrzeilige Texte von diesem Betrachter nicht unterstützt. Der FreeCAD interne Webbrowser basiert jedoch auf [webkit](http://en.wikipedia.org/wiki/WebKit), einem der besten SVG Renderer auf dem Markt, der deine Seite mit all ihren Funktionen korrekt darstellt.

## Anwendung

1. Erstelle eine [Drawing page](/Drawing_Landscape_A3 "Drawing Landscape A3")
2. Füge einige [Views](/Drawing_View "Drawing View") oder andere Inhalte zu deiner Seite hinzu.
3. [Refresh](/Std_Refresh "Std Refresh") Die Ansicht, wenn keine Zeichenansicht geöffnet wurde.
4. Drücke die Taste ![](/images/Drawing_Openbrowser.png) [Drawing Openbrowser](/Drawing_Openbrowser "Drawing Openbrowser") Schaltfläche

## Einschränkungen

* Eine im Webbrowser geöffnete Seite wird bei Änderungen nicht automatisch aktualisiert. Du musst mit der rechten Maustaste auf → erneut laden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Openbrowser/de&oldid=1536785>"