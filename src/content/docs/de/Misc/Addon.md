---
title: Erweiterung
---
## Einleitung

In FreeCAD und dieser Dokumentation ist ein Addon (eine Erweiterung oder Ergänzung) eine beliebige Komponente, die nicht Teil der Basisinstallation ist, die aber dem System durch bestimmte Methoden hinzugefügt werden kann.

## Verschiedene Typen

Es gibt drei Arten von Erweiterungen:

* [Makros](/Macros/de "Macros/de"): Kurzer Abschnitt von [Python](/Python/de "Python/de")-Kode, der ein neues Werkzeug oder eine neue Funktionalität in einer einzelnen Datei mit der Endung `.FCMacro` bereitstellt.
* [Arbeitsbereiche](/External_workbenches/de "External workbenches/de"): Sammlungen von Python-Dateien, die zusammengehörige [GUI-Befehle](/Gui_Command/de "Gui Command/de") (Werkzeuge) bereitstellen, die sich auf ein bestimmtes Thema beziehen, z.B. Werkzeuge für den Entwurf von Schränken, Werkzeuge für die Arbeit mit Architektur oder Werkzeuge für den Entwurf von Booten usw. Diese Arbeitsbereiche definieren normalerweise neue Werkzeugleisten, in denen [Befehle](/Gui_Command/de "Gui Command/de") als Schaltflächen platziert werden.
* [Voreinstellungspakete](/Preference_Packs "Preference Packs"): Verteilbare Sammlung von Benutzervoreinstellungen. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

## Installation

Beginnend mit FreeCAD 0.17 wird zur Installation von Erweiterungen die Verwendung des ![](/images/Std_AddonMgr.svg) [Addon-Managers](/Std_AddonMgr/de "Std AddonMgr/de") empfohlen.

Aber für Makros und Arbeitsbereiche ist auch eine manuelle Installation möglich:

* [Wie Makros installiert werden](/How_to_install_macros/de "How to install macros/de")
* [Weitere Arbeitsbereiche installieren](/Installing_more_workbenches/de "Installing more workbenches/de")

## Informationen für Entwickler

Hat man ein Makro oder einen Arbeitsbereich entwickelt und möchte es/ihn im Addon-Manager aufgelistet sehen, kann man auf den Seiten [FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons/) und [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/) (beide engl.) lesen, wie es funktioniert. Wird ein Makro zur Seite [Makrorezepte](/Macros_recipes/de "Macros recipes/de") hinzugefügt, muss nichts weiter getan werden, es wird automatisch vom Addon-Manager gefunden.

Siehe auch:

* [Programmpaket eines Python-Arbeitsbereiches herausgeben](/Workbench_creation/de#Programmpaket_(distribution) "Workbench creation/de")
* [Programmpaket eines C++ -Arbeitsbereiches herausgeben](/Workbench_creation/de#Distribution "Workbench creation/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Addon/de&oldid=1332135>"