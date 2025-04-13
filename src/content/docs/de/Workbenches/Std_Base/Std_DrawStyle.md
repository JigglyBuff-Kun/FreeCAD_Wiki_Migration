---
title: Std Darstellungsart
---

|                                                                      |
| -------------------------------------------------------------------- |
| Std Darstellungsart                                                  |
| Menüeintrag                                                          |
| Ansicht → Darstellungsart → ...                                      |
| Arbeitsbereich                                                       |
| Alle                                                                 |
| Standardtastenkürzel                                                 |
| V 1 - V 7                                                            |
| Eingeführt in Version                                                |
| -                                                                    |
| Siehe auch                                                           |
| [Std SelBoundingBox](/Std_SelBoundingBox/de "Std SelBoundingBox/de") |
|                                                                      |

## Beschreibung

Der Befehl **Std Darstellungsart** kann den Effekt der Ansicht-Eigenschaft**Display Mode** von Objekten in einer [3D-Ansicht](/3D_view "3D view") überlagern.

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   - Ein Klick auf den schwarzen Abwärtspfeil rechts von der Schaltfläche ![](/src/assets/images/Std_DrawStyleAsIs.svg) Darstellungsart und eine Darstellungsart aus dem Ausklappmenü wählen.
   - Den Menüeintrag **Ansicht → Darstellungsart** auswählen und anschließend eine Darstellungsart aus dem Ausklappmenü wählen.
   - Im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") die Option **Darstellungsart** auswählen und anschließend eine Darstellungsart aus dem Ausklappmenü wählen.
   - Eines der Tastaturkürzel V dann 1, 2, 3, 4, 5, 6 oder 7.

## Verfügbare Darstellungsarten

### Original

Die Darstellungsart **Original** überlagert nicht die Ansicht-Eigenschaft**Display Mode** von Objekten.

![](/src/assets/images/Std_DrawStyleAsIs_example.png)

4 identische Objekte mit jeweils unterschiedlichen Display-Modes (von links nach rechts: 'Punkte', 'Drahtgitter', 'Schattiert' und 'Flat lines') mit der aktivierten Darstellungsart 'Original'

### Punkte

Die Darstellungsart **Punkte** überlagert die Ansicht-Eigenschaft**Display Mode** von Objekten. Diese Darstellungsart entspricht dem Display_Mode 'Points'. Knoten werden in deckenden Farben dargestellt. Kanten und Flächen werden nicht dargestellt.

![](/src/assets/images/Std_DrawStylePoints_example.png)

Dieselben Objekte mit Darstellungsart 'Punkte' aktiviert

### Drahtgitter

Die Darstellungsart **Drahtgitter** überlagert die Ansicht-Eigenschaft**Display Mode** von Objekten. Diese Darstellungsart entspricht dem Display_Mode 'Wireframe'. Knoten und Kanten werden in deckenden Farben dargestellt. Flächen werden nicht dargestellt.

![](/src/assets/images/Std_DrawStyleWireframe_example.png)

Dieselben Objekte mit Darstellungsart 'Drahtgitter' aktiviert

### Versteckte Linie

Die Darstellungsart **Versteckte Line** überlagert die Ansicht-Eigenschaft**Display Mode** von Objekten. Objekte werden dargestellt, als wären sie in Dreiecksnetze konvertiert.

![](/src/assets/images/Std_DrawStyleHiddenLine_example.png)

Dieselben Objekte mit Darstellungsart 'Versteckte Linie' aktiviert

### Keine Schattierung

Die Darstellungsart **Keine Schattierung** überlagert die Ansicht-Eigenschaft**Display Mode** von Objekten. Punkte, Kanten und Flächen werden gleichmäßig, deckend eingefärbt dargestellt.

![](/src/assets/images/Std_DrawStyleNoShading_example.png)

Dieselben Objekte mit Darstellungsart 'Keine Schattierung' aktiviert

### Schattiert

Die Darstellungsart **Schattiert** überlagert die Ansicht-Eigenschaft**Display Mode** von Objekten. Punkte und Kanten werden nicht dargestellt. Flächen werden abhängig von ihrer Ausrichtung beleuchtet.

![](/src/assets/images/Std_DrawStyleShaded_example.png)

Dieselben Objekte mit Darstellungsart 'Schattiert' aktiviert

### Flache Linien

Die Darstellungsart **Flache Linien** überlagert die Ansicht-Eigenschaft**Display Mode** von Objekten. Diese Darstellungsart entspricht demDisplay-Mode 'Flat Lines' von Objekten. Punkte und Kanten werden deckend eingefärbt dargestellt. Flächen werden abhängig von ihrer Ausrichtung beleuchtet.

![](/src/assets/images/Std_DrawStyleFlatLines_example.png)

Dieselben Objekte mit Darstellungsart 'Flache Linien' aktiviert

## Hinweise

- Objekte in einer [3D-Ansicht](/3D_view/de "3D view/de") besitzen auch eine Ansicht-Eigenschaft**Draw Style**. Diese Eigenschaft bestimmt die Linienart, die für die Kanten verwendet wird. Der Befehl Std Darstellungsart überlagert diese Eigenschaft nicht.
- Ein Makro zum Umschalten zwischen zwei Darstellungsarten findet sich unter: [Macro Toggle Drawstyle](/Macro_Toggle_Drawstyle "Macro Toggle Drawstyle").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DrawStyle/de&oldid=1451390>"
