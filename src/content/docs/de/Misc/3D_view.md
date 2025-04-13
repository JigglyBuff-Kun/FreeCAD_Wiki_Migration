---
title: 3D-Ansicht
---
## Einleitung

Die 3D-Ansicht von FreeCAD ist eine Instanz eines Coin3D-[Szenengraphen](/Scenegraph/de "Scenegraph/de"), und stellt das wichtigste Fenster in der [Benutzeroberfläche](/Interface/de "Interface/de") dar. Coin3D ist eine Bibliothek, die den OpenInventor 2.1-Szenenbeschreibungsstandard implementiert.

Bestimmte Eigenschaften der Ansicht, wie Hintergrundfarbe, Art der [Mausnavigation](/Mouse_navigation/de "Mouse navigation/de") und Zoom-Schritte, können im [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") konfiguriert werden.

![](/images/FreeCAD_3D_view.png)

Die 3D-Ansicht ist ein Bestandteil der FreeCAD- [Benutzerschnittstelle](/Interface/de "Interface/de"). Standardmäßig zeigt sie ein kleines Widget mit Koordinatenachsen und den Navigationswürfel, ebenfalls mit Koordinatenachsen; das Raster kann durch Laden des Arbeitsbereichs [Draft](/Draft_Workbench/de "Draft Workbench/de") angezeigt und konfiguriert werden.

## Kontextmenü

Die Optionen im Kontextmenü der 3D-Ansicht hängen von den Objekten in der Auswahl und des gerade aktiven Arbeitsbereichs ab. Um dieses Menü anzuzeigen, wahlweise ein oder mehrere Objekte auswählen und dann mit der rechten Maustaste in die 3D-Ansicht klicken.

## Details

FreeCAD verwendet die Bibliothek Quarter, um Coin3D in einer Qt-Umgebung zu verwenden.

Es ist möglich, von der [Python-Konsole](/Python_console "Python console") aus direkt mit dem Szenengraph der 3D-Ansicht zu interagieren, wenn die Python-Bibliothek Pivy verwendet wird.

Weitere Informationen finden sich in der Dokumentation für erfahrene Anwender:

* [Szenengraph](/Scenegraph/de "Scenegraph/de"), Beschreibung von Coin3D.
* [Pivy](/Pivy/de "Pivy/de"), Verwendung von Coin3D über die Python-Konsole.
* [Drittanbieter-Bibliotheken](/Third_Party_Libraries/de "Third Party Libraries/de"), die von FreeCAD verwendet werden.
* [Coin3D](https://grey.colorado.edu/coin3d/index.html) C++ Dokumentation.

Retrieved from "<http://wiki.freecad.org/index.php?title=3D_view/de&oldid=1442226>"