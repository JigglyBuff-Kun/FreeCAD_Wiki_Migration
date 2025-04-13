---
title: Bild Arbeitsbereich
---

:::caution
Der ArbeitsbereichImageist nach Version 0.20 nicht länger Bestandteil von FreeCAD.Seine Funktionalität wurde inStd Basisintegriert. SieheStd ImportundStd ViewLoadImage.
:::
![](/images/Workbench_Image.svg)

Bild Arbeitsbereichssymbol

## Einleitung

Der ![](/images/Workbench_Image.svg) Bild Arbeitsbereich verwaltet verschiedene Arten von [Bitmap](/Bitmap/de "Bitmap/de") Bildern und ermöglicht, diese in FreeCAD zu öffnen.

## Werkzeuge

- ![](/images/Image_Open.svg) [Öffnen...](/Image_Open/de "Image Open/de"): Öffnet ein Bild in einem neuen Ansichtsfenster.
- ![](/images/Image_CreateImagePlane.svg) [Bildebene erstellen...](/Image_CreateImagePlane/de "Image CreateImagePlane/de"): Importiert ein Bild auf eine Ebene in der 3D-Ansicht.
- ![](/images/Image_Scaling.svg) [Bildebene skalieren](/Image_Scaling/de "Image Scaling/de"): Skaliert ein Bild, das auf eine Ebene importiert wurde.

## Funktionen

- Wie bei einer [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") kann ein importiertes Bild an eine der Hauptebenen XY, XZ oder YZ angehängt und mit einem positiven oder negativen Versatz versehen werden.
- Das Bild wird im Verhältnis von 1 Pixel zu 1 Millimeter importiert.
- Die Empfehlung lautet, das importierte Bild in einer angemessenen Auflösung zu haben.

## Arbeitsablauf

Eine Hauptanwendung dieses Arbeitsbereichs ist das Nachzeichnen auf dem Bild mit Werkzeugen der Arbeitsbereiche [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de"), um auf Basis der Konturen des Bildes einen Festkörper zu erzeugen.

Das Nachzeichnen eines Bildes funktioniert am besten, wenn das Bild einen kleinen negativen Versatz, z.B. -0,1 mm, zur Bearbeitungsebene hat. Das heißt, dass das Bild leicht hinter der Ebene liegt, auf der man die 2D-Geometrie zeichnet, so dass man nicht auf dem Bild selbst zeichnet.

Der Versatz des Bildes kann beim Import eingestellt oder später über seine Eigenschaften geändert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_Workbench/de&oldid=1332695>"
