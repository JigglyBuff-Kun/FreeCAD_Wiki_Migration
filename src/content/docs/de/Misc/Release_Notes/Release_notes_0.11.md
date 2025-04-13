---
title: Release notes 0.11/de
---
Dies ist eine Zusammenfassung der wichtigsten Änderungen und Neuerungen der Ausgabe 0.11 von FreeCAD. Eine komplette Liste befindet sich [hier](http://www.freecadweb.org/tracker/changelog_page.php).

![](/images/FreeCAD011.png)

Ein Bildschirmfoto der Version 0.11

### Allgemein

* Das [FreeCAD Übersetzungsprojekt](http://crowdin.net/project/freecad) erfuhr große Unterstützung durch viele Menschen auf der ganzen Welt und nun kann FreeCAD mit nicht weniger als 15 Sprachen ausgeliefert werden: Englisch, Deutsch, Französisch, Italienisch, Schwedisch, Spanisch, Portugiesisch, Russisch, Ukrainisch, Norwegisch, Afrikaans, Finnisch, Chinesisch, Kroatisch und Niederländisch. An vielen weiteren Sprachen für die nächste Ausgabe wird gearbeitet.

![](/images/Release011-translation.jpg)

* Verschiedene Verbesserungen hat FreeCAD in allen Bereichen erfahren, zum Beispiel ermöglicht der Hierarchiebaum von nun an komplexe Objektstapel, um die Geometriehistorie einwandfrei, gut zugänglich und veränderbar zu halten. Neue Python-API-Verbesserungen erlauben es Objekten besser mit dem Baum zu interagieren, ihr eigenes Verhalten zu bestimmen, Symbole, usw.

![](/images/Release011-dependency.jpg)

* Der Kopieren/Einfügen-Mechanismus wurde ebenfalls deutlich verbessert, um das Kopieren/Einfügen von Objekten zwischen Dokumenten zu ermöglichen.
* Die [Teil Werkbank](/Part_Workbench/de "Part Workbench/de") weist neue Werkzeuge wie Spiegelung, Kantenverrundung und Fasen auf.

### Skizze und Teilkonstruktion

* Der Beschränkungslöser der [Skizzierungswerkbank](/Sketcher_Workbench "Sketcher Workbench") wurde vollkommen neu geschrieben. Der Skizzierer, auch wenn noch nicht vollständig, weist bereits eine gute Auswahl an Werkzeugen für Linien, Rechtecke und Beschränkungen wie das Zusammentreffen von Punkten, Parallelität, feste Länge oder horizontale bzw. vertikale Beschränkungen auf.
* Zusätzlich zu dem Skizzierer, ermöglicht eine neue TeilKonstruktion Werkbank das schnelle erstellen von Körpern auf Skizzen. Von nun an grundsätzlich ist in FreeCAD alles parametrisch, d.h. Sie können jederzeit zu Änderungen zurückkehren und sämtliche darauf basierende Geometrie wird automatisch angepasst.

![](/images/Release011-sketcher.jpg)

![](/images/Movie.png) Beispiele: [Skizzierer Demo](http://www.youtube.com/watch?v=hvXupH5bA0E) • [TeilKonstruktion Demo](http://www.youtube.com/watch?v=7ih9Jp3OAwA)

### Roboter-Simulation

* Die [Roboter Werkbank](/Robot_Workbench/de "Robot Workbench/de") wurde um viele GUI Werkzeuge erweitert und ist nun ziemlich funktional. Sie erlaubt die einfache Simulation der Bewegungen von Industrierobotern.

![](/images/Release011-robot.jpg)

### 2D drafting

* Snapping has been greatly optimized and now works pretty fast, even on complex objects
* The "Trim/Extend" tool can now be called "Trim/Extend/Extrude", since it allows you to quickly extrude single faces, offering a convenient shortcut to the standard Part Extrude tool
* The Draft-to-Drawing sheet workflow has also been enhanced, all the Draft workbench objects can now be placed on a Drawing page, and they all offer the same level of comfort as standard Part objects, offering the ability to change their position, rotation and scale on the fly. They also offer some extra features, such as hatch pattern fillings

![](/images/Release011-draft-drawing.jpg)

* The Draft workbench also offers new tools such as regular polygons and bSplines
* There is also a new Edit tool, allowing to edit the geometry of most of the Draft objects

![](/images/Release011-draft.jpg)

* Dimensions can now have their text edited and moved, and wires can have an end arrow, allowing to use them as leaders
* Several commands such as move, rotate or dimensioning now allow you to do several copies without exiting the tool
* The Draft workbench also gained a python [API](/Draft_API "Draft API").
* The DXF importer now support block attributes

![](/images/Movie.png) Examples: [Draft module demo](http://www.youtube.com/watch?v=Q7cG-LQK8Ps)

### Images

* The image workbench now features an ImagePlane object, allowing you to display an image file inside the 3D scene, that can be used for example to construct geometry on top of scanned blueprints

### Documentation

* The [FreeCAD manual](/Online_Help_Toc "Online Help Toc") now has several well advanced translations. Check the main page!

Verfügbare Übersetzungen dieser Seite: [![](/images/Flag-en.jpg)](/Release_notes_0.11 "Release notes 0.11 ") [![](/images/9/98/Flag-es.jpg)](/Release_notes_0.11/es "Release notes 0.11/es") [![](/images/Flag-fr.jpg)](/Release_notes_0.11/fr "Release notes 0.11/fr ") [![](/images/8/80/Flag-it.jpg)](/Release_notes_0.11/it "Release notes 0.11/it") [![](/images/Flag-pl.jpg)](/Release_notes_0.11/pl "Release notes 0.11/pl ") [![](/images/5/57/Flag-ru.jpg)](/Release_notes_0.11/ru "Release notes 0.11/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.11/de&oldid=1015972>"