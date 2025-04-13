---
title: Entwicklerzentrum
---

![](/images/Crystal_Clear_app_tutorials.png)

---

Dies ist die Stelle, wenn Du zur Entwicklung der FreeCAD-Software beitragen möchtest.

Diese Seiten sind in einem frühen Stadium. Wenn Du nicht die Informationen findest, nach denen Du suchst oder hilfreiche Informationen an anderer Stelle gefunden hast, auf die wir nicht verwiesen haben, dann hinterlasse bitte einen Kommentar im [Forum](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff) und jemand wird danach gucken (oder wenn Du magst, kannst Du diese Seite selbst ändern!).

## Entwicklerdokumentation

Die Entwicklerdokumentation umfasst die folgenden Abschnitte:

### FreeCAD kompilieren

- [Github Repo](https://github.com/FreeCAD/FreeCAD). Wenn du neu bei Git bist, lies [Quellcode-Verwaltung](/Source_code_management/de "Source code management/de")
- [Kompilieren mit Docker](/Compile_on_Docker/de "Compile on Docker/de")
- [Kompilieren auf Windows](/Compile_on_Windows/de "Compile on Windows/de")
- [Komplieren auf Unix](/Compile_on_Linux/de "Compile on Linux/de")
- [Kompilieren auf Mac OS X](/Compile_on_MacOS/de "Compile on MacOS/de")
- [Lizenzdetails](/License/de "License/de") über die FreeCAD-Lizenzen
- [Drittanbieter Bibliotheken](/Third_Party_Libraries/de "Third Party Libraries/de")
- [Drittanbieter Werkzeuge](/Third_Party_Tools/de "Third Party Tools/de")
- [Programmstart und Konfiguation](/Start_up_and_Configuration/de "Start up and Configuration/de")
- [Quellcode Dokumentation](/Source_documentation/de "Source documentation/de")
- Verwende den [Fehlerverfolger](/Tracker/de "Tracker/de"), wenn du ein Problem hast oder glaubst, einen Fehler gefunden zu haben

### Paketerstellung

[Paketerstellung](/Packaging/de "Packaging/de") besteht darin, die kompilierten Binärdateien und Python Quelldateien von FreeCAD zu übernehmen und für die Verwendung in einem bestimmten System zu verteilen.

- [Linux Paketerstellung](/Linux_packaging/de "Linux packaging/de")
  - [Debian Entwicklung](/Debian_development/de "Debian development/de")
  - [Debian Unstable](/Debian_Unstable/de "Debian Unstable/de")
  - [Git buildpackage](/Git_buildpackage/de "Git buildpackage/de")
- [Windows Paketerstellung](/Windows_packaging/de "Windows packaging/de")
- [MacOS Paketerstellung](/index.php?title=MacOS_packaging/de&action=edit&redlink=1 "MacOS packaging/de (page does not exist)")

### Bau Unterstützungswerkzeuge

- Das [FreeCAD Bau Werkzeug](/FreeCAD_Build_Tool/de "FreeCAD Build Tool/de")
  - [Ein Anwendungsmodul hinzufügen](/Workbench_creation/de "Workbench creation/de") zu FreeCAD
- [Fehlersuche](/Debugging/de "Debugging/de") FreeCAD
- [Testen](/Testing/de "Testing/de") FreeCAD
- [Kompilieren (beschleunigen)](</Compiling_(Speeding_up)/de> "Compiling (Speeding up)/de") FreeCAD
- [Fortlaufende Integration](/Continuous_Integration/de "Continuous Integration/de")

### FreeCAD ändern

- Den[FreeCAD Quellcode](/The_FreeCAD_source_code/de "The FreeCAD source code/de") verstehen
- [Patches einreichen](/Tracker/de#Einreichen_von_Änderungssätzen "Tracker/de")
- Add [Methoden](/Gui_Command "Gui Command") (Befehle) zu FreeCAD oder einem Arbeitsbereich hinzufügen
- [Branding](/Branding/de "Branding/de") oder _FreeCAD ein unverwechselbares Aussehen geben_
- [Grafik](/Artwork/de "Artwork/de") die wir für FreeCAD erstellen, kannst Du ungehindert wiederverwenden
- [Illustrationsrichtlinien](/Artwork_Guidelines/de "Artwork Guidelines/de") Vorgaben für Symbole
- [FreeCAD übersetzen](/Localisation/de "Localisation/de")
- [Zusätzliche Python Module](/Extra_python_modules/de "Extra python modules/de"), oder _Wie die Python-Funktionalität in FreeCAD erweitern_
- [Google Summer of Code](/index.php?title=Google_Summer_of_Code/de&action=edit&redlink=1 "Google Summer of Code/de (page does not exist)") Engagieren über das Schülerförderprogramm von Google
- [Feinabstimmung](/Fine-tuning/de "Fine-tuning/de") zeigt verschiedene Optionen und Parameterschalter, die Probleme lösen können.

- [Eine C++ Klasse in Python einbetten](/Wrapping_a_Cplusplus_class_in_Python/de "Wrapping a Cplusplus class in Python/de") zeigt, wie ein Python-Wrapper für eine C++ Klasse erstellt wird
- [Checkliste für das Hinzufügen einer Methode zu einem C++ Arbeitsbereich](/index.php?title=NewFeatureCheckList_C%2B%2B/de&action=edit&redlink=1 "NewFeatureCheckList C++/de (page does not exist)") enthält Hilfestellungen für Contributors.

- [Übersetzen eines externen Arbeitsbereichs](/Translating_an_external_workbench/de "Translating an external workbench/de")

### Modul Entwicklerhandbuch

[FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide): Dies ist ein ebook gerade auf github geschrieben , bitte teilen und pull request senden, um beizutragen.

Kapitel:

- Überblick und Software Architektur
- Quellcode Struktur
- Basis und Applikations Module
- GUI Modul
- Python Umhüllung
- Modulares Design
- FEM Modul Quellen Analyse (C++ und Python gemischt)
- Entwicklung des CFD Moduls (nur Python)
- Modul Test und Fehlersuche
- Code beitragen mit git

Die neueste pdf Vorschau kann aus dem [pdf-Ordner](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide/tree/master/pdf) dieses Git Repos heruntergeladen werden.

### Internas

#### OpenCascade Dokumentation

OpenCascade ist eine Software Entwicklungsplattform für 3D Oberflächen- und Volumenmodellierung, CAD Datenaustausch und Visualisierung, meist in Form von C++ Bibliotheken.

- [Roman Lygins Tutorien](http://opencascade.wikidot.com/romansarticles)
- [Komplette Online Dokumentation](https://dev.opencascade.org/cdoc/overview/html/index.html)
- [Referenzhandbuch](https://dev.opencascade.org/doc/refman/html/index.html)
- [The openCascade wiki](http://opencascade.wikidot.com) (Enthält gegenwärtig ?? Chinesischen Spam)

#### Dateiformat

[File Format FCStd](/File_Format_FCStd/de "File Format FCStd/de"). Bei den mit FreeCAD erstellten Dateien handelt es sich um `.zip` Dateien, die die [[[1]](https://de.wikipedia.org/wiki/Boundary_Representation/de%7CBREP)]-Geometrie sowie XML-Daten zur Beschreibung des Dokuments enthalten.

#### Skizzierer Löser

- [Sketcher Solver Architecture Booklet](https://forum.freecadweb.org/viewtopic.php?f=10&t=36355) (Forum Thread), [source](https://github.com/abdullahtahiriyo/FreeCADBooks/tree/master/FreeCAD_Solver_Architecture) in GitHub.
- [PlaneGCS solver](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/) im FreeCAD Quellcode; wichtige Dateien sind [GCS.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/GCS.cpp) und [SubSystem.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/SubSystem.cpp).
- [Einige jüngste Skizzierer Verbesserungen](https://forum.freecadweb.org/viewtopic.php?f=9&t=29192).

Der Skizzierer Löser ist nicht perfekt, da es einige Probleme mit numerischer Präzision bei der Verwendung großer Werte gibt, siehe [Abenteuer der Fixierung des Skizzierer Lösers für große Skizzen](https://forum.freecadweb.org/viewtopic.php?f=10&t=40502).

Die Entwicklung einer neuen Löserarchitektur könnte die Verwendung des Lösers sowohl in der [Sketcher Arbeitsbereich](/Sketcher_Workbench/de "Sketcher Workbench/de") als auch für die Montage von 3D Körpern verbessern. Siehe [Reimplementieren des Beschränkungslösers](https://forum.freecadweb.org/viewtopic.php?f=20&t=40525).

## Fahrplan

FreeCAD, obwohl in bestimmten Bereichen verwendbar, steht am Anfang eines langen Weges in den CAD Mainstream. Es gibt noch viel zu tun um einen Stand zu erreichen, in dem wir mit kommerzieller Software konkurrieren können.

[FreeCAD 1.0 Development Cycle](/FreeCAD_1.0_Development_Cycle "FreeCAD 1.0 Development Cycle")

## Gemeinschaft

- [IRC Kanal](ircs://irc.libera.chat:6697/freecad), synchronisiert mit [gitter channel](https://gitter.im/FreeCAD/FreeCAD)
- [Entwicklungsforum](https://forum.freecad.org/viewforum.php?f=6)

- [Entwicklungsfahrplan](/Development_roadmap/de "Development roadmap/de")

## Danksagungen

[Mitwirkende](/Contributors/de "Contributors/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Developer_hub/de&oldid=1393604>"
