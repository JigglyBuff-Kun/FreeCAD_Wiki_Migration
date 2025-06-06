---
title: Hauptanwenderzentrum
---
![](/images/Power_user_hub.png)

---

Dies ist der richtige Ort, wenn du ein erfahrener Benutzer bist und mehr über die Anpassung und Erweiterung von FreeCAD erfahren möchtest.

FreeCAD ist durch [Python](/Python/de "Python/de") Code erweiterbar, der direkt in der [Python Konsole](/Python_console/de "Python console/de") ausgeführt wird oder der beim Start aus Modulen geladen wird. Das bedeutet, dass du FreeCAD modifizieren kannst, ohne das Programm neu kompilieren zu müssen. Zum Beispiel kannst du:

* **Geometrie erstellen und modifizieren**: Du kannst einen neuen Objekttyp erstellen, entweder von Grund auf neu oder durch Anpassung eines bestehenden Typs.
* **Benutzerdefinierte Werkzeuge und Befehle erstellen**: Du kannst deinen eigenen Satz von Werkzeugen hinzufügen, die deinen Code ausführen.
* **Ändern der Oberfläche**: Erstelle Werkzeugleisten, um deine Werkzeuge zu platzieren, erstelle spezielle Fenster, Bedienfelder oder Oberflächen für die Interaktion mit deinen Werkzeugen.
* **Modifizieren der Szenegraphendarstellung**: FreeCAD hat separate Prozesse für den Aufbau der Geometrie und die Anzeige dieser Geometrie auf dem Bildschirm. Du hast vollen Zugriff auf die Art und Weise, wie der Szeneninhalt auf dem Bildschirm angezeigt wird, daher kannst du diese Darstellung modifizieren, mit ihr interagieren oder ihr benutzerdefiniertes Verhalten hinzufügen. Du kannst auch benutzerdefinierte Bildschirmsteurelementes wie Informationen, Bremser, Anker oder kurzzeitige Einheiten hinzufügen.

Wenn du Inhalte zu diesen Seiten beitragen möchtest, beantrage ein Wiki Zugang mit Berabeiterberechtigungen [im Forum](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830), und lies die [WikiSeiten](/WikiPages/de "WikiPages/de") für die allgemeinen Richtlinien, die du befolgen solltest. Für weitere Möglichkeiten, zum Projekt beizutragen, siehe die [FreeCAD Hilfe](/Help_FreeCAD/de "Help FreeCAD/de") Seite.

## Anpassen von FreeCAD

* [Anpassung der Benutzeroberfläche](/Interface_Customization/de "Interface Customization/de"): Beginnend mit dem Anfang: Werkzeugleisten und Tastaturkürzel
* [Arbeiten mit Makros](/Macros/de "Macros/de"): Einfache Aufzeichnung häufig wiederkehrender Aufgaben oder von Python Code
* [Makro Rezepte](/Macros_recipes/de "Macros recipes/de")
* [Anpassung der Werkzeugleisten](/Customize_Toolbars/de "Customize Toolbars/de")
* [Weitere Arbeitsbereiche installieren](/Installing_more_workbenches/de "Installing more workbenches/de")

## Skripten in FreeCAD

### Allgemein

* [Skripterstellung und Makros](/Scripting_and_macros/de "Scripting and macros/de") - Eine Liste zugehöriger Wiki-Seiten
* [Einführung in Python](/Introduction_to_Python/de "Introduction to Python/de") - Siehe auch andere Python-Tutorien am Ende dieser Seite.
* [Anleitung zur Skripterstellung in FreeCAD](/Python_scripting_tutorial/de "Python scripting tutorial/de") - Ein allgemeiner Blick auf die Skriptsprache Python in FreeCAD
* [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de"): Nun, die Grundlagen...
* [FreeCAD-Handbuch - Abschnitt Skripterstellung mit Python](/Manual:A_gentle_introduction/de "Manual:A gentle introduction/de"): Mehrere Kapitel Einführung in die Skripterstellung mit Python in FreeCAD
* [Gui Befehl](/Gui_Command/de "Gui Command/de"): Hinzufügen von benutzerdefinierten Befehlen zur Benutzerschnittstelle
* Verwendung von gemischten [Einheiten](/Units/de "Units/de") in FreeCAD
* [Profilieren](/Profiling/de "Profiling/de") des Python Codes
* [Fehlerdiagnose](/Debugging/de#Python_Fehlerdiagnose "Debugging/de") des Python-Codes
* [Python Entwicklungsumgebung](/Python_Development_Environment/de "Python Development Environment/de") - Eine einfache in FreeCAD enthaltene Entwicklungsumgebung für Python

### Module

Die Funktionalität von FreeCAD ist in Module unterteilt, die sich mit speziellen Datentypen und Anwendungen befassen. FreeCAD hat eingebaute Module und Erweiterungsmodule (Plug-Ins). Sobald Plugin-Module installiert sind, stehen sie Ihnen genauso einfach zur Verfügung wie die eingebauten Module. Die nachfolgend beschriebenen Module sind die Standardmodule, die in jeder FreeCAD-Installation enthalten sind.

* Die [Einbaumodule](/Builtin_modules/de "Builtin modules/de") sind die wichtigsten FreeCAD Module. Sie enthalten Werkzeuge zur Manipulation allgemeiner FreeCAD Konfigurationen, Dokumente und deren Inhalte.
* [Arbeitsbereich Erstellung](/Workbench_creation/de "Workbench creation/de") zeigt Dir, wie Du Deine eigene Arbeitsbereich erstellen kannst.

#### Arbeiten mit Netzen

* [Polygonnetz Skripten](/Mesh_Scripting/de "Mesh Scripting/de"): Wie man mit dem [Polygonnetz Arbeitsbereich](/Mesh_Workbench/de "Mesh Workbench/de") interagiert

#### Arbeiten mit Teilen

* [Arbeitsbereich Part](/Part_Workbench/de "Part Workbench/de"): Wie [Open CASCADE Technologie](http://en.wikipedia.org/wiki/Open_CASCADE) Werkzeuge und Strukturen in FreeCAD verwendet werden.
* [Topologisches Datenskripten](/Topological_data_scripting/de "Topological data scripting/de"): Wie man mit dem Teil Arbeitsbereich umgeht
* [PythonOCC](/PythonOCC/de "PythonOCC/de"): Wie man die gesamte Open CASCADE Leistung entfesselt
* [Polygonnetz zu Teil](/Mesh_to_Part/de "Mesh to Part/de"): Konvertierung zwischen Objekttypen

#### Der Zugriff auf die Coin Szenengraph

* [Szenengraph](/Scenegraph/de "Scenegraph/de"): Wie die FreeCAD Szenendarstellung funktioniert
* [Pivy](/Pivy/de "Pivy/de"): Wie man auf den Szenengraph zugreift und ihn ändert

### Steuerung der Qt Schnittstelle

* [PySide](/PySide/de "PySide/de"): Wie man auf die Schnittstelle zugreift und deren Inhalt ändert
* [Einbetten von FreeCADGui](/Embedding_FreeCADGui/de "Embedding FreeCADGui/de") in eine andere Qt Anwendung mit PyQt

### Arbeiten mit parametrischen Objekten

* [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de"): wie man 100% Python skriptgenerierte Objekte erstellt.
  + [Skriptgenerierte Objekte mit Anhang](/Scripted_objects_with_attachment/de "Scripted objects with attachment/de"): wie man skriptgenerierte Objekte an andere Objekte anhängen kann.
  + [Skriptgenerierte Objekte, die Attribute speichern](/Scripted_objects_saving_attributes/de "Scripted objects saving attributes/de"): wie man Attribute der Proxy-Klasse mit `dumps` und `loads` speichert und wiederherstellt.
  + [Geskriptete Objekte migrieren](/Scripted_objects_migration/de "Scripted objects migration/de"): wie man alte geskriptete Objekte in eine neue Klasse überführt.

### Beispiele

* [Code Schnipsel](/Code_snippets/de "Code snippets/de") : Eine Sammlung von Teilen des FreeCAD Python Codes, die als Bestandteile in deinen Skripten dienen...
* [Linienzeichnungsfunktion](/Line_drawing_function/de "Line drawing function/de"): Wie man ein einfaches Werkzeug zum Zeichnen von Linien baut
* [Dialogerstellung](/Dialog_creation/de "Dialog creation/de"): Wie man Dialoge mit dem Qt Designer erstellt und in FreeCAD verwendet.
* [FreeCAD einbinden](/Embedding_FreeCAD/de "Embedding FreeCAD/de"): Wie man FreeCAD als Python Modul in andere Anwendungen importiert
* Der [Arbeitsbereich Entwurf](/Draft_Workbench/de "Draft Workbench/de") fügt FreeCAD grundlegende 2D Zeichenfunktionen hinzu. Es ist vollständig in Python geschrieben, so dass es ein gutes Beispiel sein kann, wenn man eigene Module schreiben will.
* [FreeCAD Vektor Mathematische Bibliothek](/FreeCAD_vector_math_library/de "FreeCAD vector math library/de") : Einige praktische Funktionen zur Manipulation von FreeCAD Vektoren. Diese Bibliothek ist auch im Draft Modul enthalten.

## API Funktionen

Die vollständige API-Dokumentation von FreeCAD findest Du unter <http://www.freecadweb.org/api/> . Es enthält sowohl C++ als auch Python-APIs und ist noch nicht vollständig gut formatiert, was bei der Suche nach nur Python Code verwirrend sein kann. Eine einfacher zu durchsuchende Version findest Du [[[:Category:API|here]]]. Beachte, dass es unvollständig sein kann, da es manuell aktualisiert wird. Für genauere Informationen durchsuche die Module direkt von der Python-Konsole von FreeCAD aus.

Verwandt: [Aussetzen von C++ in Python](/index.php?title=Exposing_C%2B%2B_to_Python/de&action=edit&redlink=1 "Exposing C++ to Python/de (page does not exist)")

## Erweiterte Modifikation

* [Programmstart und Konfiguration](/Start_up_and_Configuration/de "Start up and Configuration/de"): Start- und Kommandozeilenoptionen
* [Installieren auf Windows](/Install_on_Windows/de "Install on Windows/de"): Verwendung des Windows nstallationsprogramms
* [Kompilieren auf Windows](/Compile_on_Windows/de "Compile on Windows/de") und [Kompilieren auf Linux](/Compile_on_Linux/Unix/de "Compile on Linux/Unix/de")
* [Markenbindung](/Branding/de "Branding/de"): Einfache Änderungen, die am Quellcode vorgenommen werden können, um einige Aspekte von FreeCAD zu ändern.
* [Zusätzliche Python Module](/Extra_python_modules/de "Extra python modules/de") : Erweitere den FreeCAD Python Übersetzer mit diesen leistungsstarken Modulen!

## Python Tutorien

Dies sind gute allgemeine Tutorien, nicht spezifisch für FreeCAD, die dich interessieren könnten, wenn Python völlig neu für dich ist.

**Python**

* [Official python tutorial](https://docs.python.org/3/tutorial/index.html) - Ein sehr vollständiges Tutorial zur Erforschung von Python.
* [Non-programmer tutorial for python](https://en.wikibooks.org/wiki/Non-Programmer%27s_Tutorial_for_Python_3) - ein ausgezeichnetes Wikibuch
* [Python for newbies](http://npt.cc.rsu.ru/user/wanderer/ODP/Python_for_Newbies.htm) - ein großes Tutorial, das alle Grundlagen abdeckt

**PySide** - Wie man die Qt UI-Schnittstelle von FreeCAD aus Python erstellt und verwaltet.

* [PySide tutorial](http://zetcode.com/gui/pysidetutorial/) : Ein plattformunabhängiges Tutorial, das die Verwendung von PySide mit Beispielen zeigt.
* [PySide/PyQt tutorial](http://www.pythoncentral.io/series/python-pyside-pyqt-tutorial/) : Ein leicht verständliches Tutorial, das PySide und PyQt mit Beispielen behandelt.
* [PySide documentation](http://qt-project.org/wiki/PySideDocumentation) : aus dem Qt-Projekt (die Leute, die alles geschrieben haben)
* [Using QtCreator in PySide](http://qt-project.org/wiki/QtCreator_and_PySide) : auch aus dem Qt Projekt
* [PySide reference](http://srinikom.github.io/pyside-docs/index.html) : endlose Details über die Details von PySide und Qt, einer zuverlässigen Referenzquelle.
* [PySide code snippets](http://nullege.com/codes/search?cq=PySide) : eine durchsuchbare Datenbank mit PySide Code Snippets.

Die folgenden beiden Referenzen sind PyQt spezifisch (nicht PySide), könnten aber einige Informationen zur Verwendung anbieten:

* [Basic PyQt Tutorial](http://www.cs.usfca.edu/~afedosov/qttut/) : Ein einfaches und kurzes linuxbasiertes Tutorium, das die Arbeit mit PyQt und Qt Designer erklärt.
* [Programmierung von Qt Anwendungen in Python](http://vizzzion.org/?id=pyqt) : Ein ausführlicheres Tutorium, das den gesamten Prozess der Arbeit mit Qt und Python behandelt.

*Pivy''* - Wie man mit den 3D Szenen von FreeCAD umgeht

* [Pivy - Einbetten einer dynamischen Skriptsprache in eine Szenengrafik-Bibliothek](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.108.947&rep=rep1&type=pdf) : These, die Pivy im Detail erklärt
* [Hochwertige 3D-Grafikprogrammierung in Python](http://ftp.ntua.gr/mirror/python/pycon/dc2004/papers/47/) : Pivy Beispiel von Pycon 2004
* [Einführung von Pivy in die studierstube](https://www.semanticscholar.org/paper/Integrating-Pivy-into-Studierstube-4.2-Gruber/08c9a89c8326c87f81c2d83428029fbfb6c2ae64) [(Spiegel)](https://www.researchgate.net/publication/228737136_Integrating_Pivy_into_Studierstube_42) : Ein Papier, die nicht wirklich ein Tutorium ist, aber gut veranschaulicht, wie Pivy arbeitet (erfordert ein akademisches Konto)

## Gemeinschaftsprojekte

Auf dem [Gemeinschaftsportal](/FreeCAD_Community_Portal/de "FreeCAD Community Portal/de"), findet man weitere FreeCAD basierte Projekte, die von der FreeCAD Anwendergemeinschaft ausgeführt werden. Wenn man ein neues FreeCAD Projekt startet, sollte es dort aufgelistet werden! Wir haben auch eine Seite mit Dingen, die Du, wenn Du möchtest tun kannst [Hilf FreeCAD](/Help_FreeCAD/de "Help FreeCAD/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Power_users_hub/de&oldid=1463670>"