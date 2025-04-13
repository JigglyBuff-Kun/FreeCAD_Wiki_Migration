---
title: Curves SVGEinfügen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves SVGEinfügen |
| Menüeintrag |
| Misc. → Paste SVG |
| Arbeitsbereich |
| [Curves](/Curves_Workbench/de "Curves Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Curves_PasteSVG.svg) Curves SVGEinfügen fügt den SVG-Inhalt der Zwischenablage in die [3D-Ansicht](/3D_view/de "3D view/de") ein.

## Anwendung

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Curves_PasteSVG.svg) SVG einfügen drücken.
   * Den Menüeintrag **Verschiedenes → ![](/images/Curves_PasteSVG.svg) SVG einfügen** auswählen.

## Hinweise

A sample file result:

* 1 rect -> 1 Rectangle object
* 1 circle -> 1 Circle object
* 5 path -> 6 Path objects (one path split in two at the second **m** command)
* 4 text -> 12 Text objects (the first of of each triplet contains the text position, the next contains the text string, and the last one ?)

Rectangle and Circle are filled and visible, Paths are visible but nothing is displayed for any Text object.  
What is a use case for these objects?

## Eigenschaften

Diese Objekte haben keine zusätzlichen Eigenschaften.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_PasteSVG/de&oldid=1570247>"