---
title: Gui Befehl
---
Der GUI-Befehl (Befehl der grafischen Benutzerschnittstelle) ist eine der wichtigsten Funktionen von FreeCAD im Hauptinteraktionsbereich des Benutzers. Jedes Mal, wenn der Benutzer einen Menüeintrag auswählt oder eine Schaltfläche in der Werkzeugleiste drückt, wird ein GUI-Befehl aktiviert. Einige der Merkmale eines GUI-Befehls sind:

* Definiert einen Namen
* Enthält ein Symbol
* Definiert den Umfang für ein Rückgängigmachen/Wiederherstellen.
* Besitzt eine Hilfeseite
* Öffnet und steuert Dialoge
* Makroaufnahme
* und andere.

## Benennung

Der GUI-Befehl wird nach einem Standardmuster benannt: *Modulname\_Befehlsname*, z.B. "[Base\_Öffnen](/index.php?title=Base_Open/de&action=edit&redlink=1 "Base Open/de (page does not exist)")"; dies wäre der GUI-Befehl Öffnen in einem Basissystem. Der GUI-Befehl in einem bestimmten Modul wird mit dem Modulnamen an erster Stelle benannt z.B. "[Part Zylinder](/Part_Cylinder/de "Part Cylinder/de")"

Wenn die Dokumentation noch nicht fertig ist, verwendet man die Vorlage [UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu").

## Hilfe-Seite

Jeder GUI-Befehl muss eine Hilfeseite haben. Die Hilfeseite wird im Wiki der
FreeCAD-Dokumentation gehostet. Der Artikel hat den gleichen Namen wie der GUI-Befehl, z.B. [Draft ShapeString](/Draft_ShapeString "Draft ShapeString").

Um eigene Hilfeseiten zu erstellen, kann man die Vorlage [GuiCommand model](/GuiCommand_model "GuiCommand model") verwenden.

Beispiel:

* [Draft ShapeString](/Draft_ShapeString "Draft ShapeString")
* [Draft Line](/Draft_Line "Draft Line")

## Symbole

![](/images/Tango-Palette.png)

Jeder GUI-Befehl muss ein Symbol haben. Wir verwenden den [Tango Symbolsatz](http://tango-project.org/Tango_Desktop_Project/) und seine Richtlinien. Auf der rechten Seite ist die Tango-Farbpalette dargestellt.

Alle Symbole sollten im Format [SVG](/SVG/de "SVG/de") mit einer Vektorgrafikanwendung, wie beispielsweise [Inkscape](http://inkscape.org), erstellt werden.
Dies erleichtert die Anwendung von Änderungen und die Ableitung von zusätzlichen Symbolen im gleichen Anwendungsbereich.

### Symbol-Farbkodierungstabelle

![](/images/Colorchart.png)

Wir versuchen so weit wie möglich, dieses Diagramm zu berücksichtigen, und so hat die Farbe der Symbole eine direkte Bedeutung.

Retrieved from "<http://wiki.freecad.org/index.php?title=Gui_Command/de&oldid=1191782>"