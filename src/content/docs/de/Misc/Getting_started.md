---
title: Loslegen
---

## Vorwort

FreeCAD ist eine [parametrische 3D-
Modellierungsanwendung](/About_FreeCAD/de "About FreeCAD/de") und hauptsächlich zum Konstruieren ausgelegt. FreeCAD unterstützt aber auch alle anderen Einsatzbereiche, bei denen 3D-Objekte präzise modelliert werden, auch durch Bearbeiten ihrer Konstruktionshistorie.

FreeCAD befindet sich seit 2002 in der Entwicklung und bietet einen großen [Funktionsumfang](/Feature_list/de "Feature list/de"). Für kommerzielle Anwendungen fehlen noch einige Funktionen. Für den Hobbygebrauch und für kleinere Betriebe ist es aber leistungsfähig genug. Eine schnell wachsende Gemeinschaft begeisterter Anwender ist im [FreeCAD-Forum](http://forum.freecad.org/index.php) aktiv. Dort sind [viele Beispiele](https://forum.freecad.org/viewforum.php?f=24%7C) qualitativ hochwertiger Projekte zu finden, die mit FreeCAD konstruiert wurden.

Wie alle freien Software-Projekte, ist auch FreeCAD auf seine Gemeinschaft angewiesen, um zu wachsen, neue Funktionen zu erhalten und Fehler zu beheben. Dies sollte man nicht vergessen, wenn man FreeCAD nutzt. Wer mag, kann [spenden](/Donate/de "Donate/de") und FreeCAD auf verschiedene Weise [unterstützen](/Help_FreeCAD/de "Help FreeCAD/de"), z.B. durch Schreiben von Dokumentationen und beim Übersetzen.

Siehe auch:

- [Umstieg von Fusion360 auf FreeCAD](/Migrating_to_FreeCAD_from_Fusion360/de "Migrating to FreeCAD from Fusion360/de")
- [Welchen Arbeitsbereich soll ich auswählen?](/Which_workbench_should_I_choose/de "Which workbench should I choose/de")
- [Anleitungen](/Tutorials/de "Tutorials/de")
- [Video-Anleitungen](/Video_tutorials/de "Video tutorials/de")

## Installieren

Zuerst FreeCAD herunterladen und installieren. Siehe die Seite [Herunterladen](/Download/de "Download/de") für Informationen zu aktuellen Versionen und Aktualisierungen sowie Installationsanweisungen für das jeweilige Betriebssystem ([Windows](/Installing_on_Windows/de "Installing on Windows/de"), [Linux](/Installing_on_Linux/de "Installing on Linux/de") oder [macOS](/Installing_on_Mac/de "Installing on Mac/de")). FreeCAD steht über die Paketmanager vieler Linux-Distributionen zur Verfügung. Da FreeCAD quelloffen ist, kann auch der Quellcode selbst heruntergeladen und [kompiliert](/Compiling/de "Compiling/de") werden.

## Erkunden der Oberfläche

![](/images/FreeCAD_interface_base_divisions.svg)

FreeCADs Standard-Oberfläche

_Eine vollständige Erklärung ist auf der Seite [Oberfläche](/Interface/de "Interface/de") zu finden._

: 1. Der [Hauptansichtsbereich](/Main_view_area "Main view area"), der verschiedene Registerkartenfenster enthalten kann, hauptsächlich die [3D-Ansicht](/3D_view/de "3D view/de").
: 2. Die [3D-Ansicht](/3D_view/de "3D view/de") stellt die im Dokument befindlichen geometrischen Objekte dar.
: 3. Die [Baumansicht](/Tree_view/de "Tree view/de") (Teil der [Combo-Ansicht](/Combo_view/de "Combo view/de")), die die Hierarchie und Konstruktionshistorie der Objekte des Dokument anzeigt; sie kann auch das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") für aktive Befehle anzeigen.
: 4. Der [Eigenschafteneditor](/Property_editor/de "Property editor/de") (Teil der [Combo-Ansicht](/Combo_view/de "Combo view/de")), der das Anzeigen und Ändern von Eigenschaften der ausgewählten Objekte ermöglicht.
: 5. Die [Auswahlansicht](/Selection_view/de "Selection view/de"), die die Objekte oder Unterelemente von Objekten (Ecken, Kanten, Flächen) anzeigt, die ausgewählt wurden.
: 6. Das [Ausgabefenster](/Report_view/de "Report view/de"), in dem Meldungen, Warnungen und Fehler ausgegeben werden.
: 7. Die [Python-Konsole](/Python_console/de "Python console/de"), in der alle ausgeführten Befehle ausgegeben werden und in der [Python](/Python/de "Python/de")-Code eingegeben werden kann.
: 8. Die [Statusleiste](/Status_bar/de "Status bar/de"), in der einige Meldungen und QuickInfos erscheinen.
: 9. Der Symbolleistenbereich, in dem die Symbolleisten angedockt sind.
: 10. Die [Arbeitsbereichsauswahl](/Std_Workbench/de "Std Workbench/de"), mit der der aktive [Arbeitsbereich](/Workbenches/de "Workbenches/de") ausgewählt wird.
: 11. Das [Standardmenü](/Standard_Menu/de "Standard Menu/de"), das die grundlegenden Funktionen des Programms enthält.

Das Hauptkonzept der FreeCAD-Oberfläche ist die Aufteilung in [Arbeitsbereiche](/Workbenches/de "Workbenches/de"). Ein Arbeitsbereich ist eine Sammlung von Werkzeugen, die sich für eine bestimmte Aufgabe eignen, wie z.B. das Arbeiten mit [Netzobjekten](/Mesh_Workbench/de "Mesh Workbench/de") (Meshes), das Zeichnen von [2D-Objekten](/Draft_Workbench/de "Draft Workbench/de") oder das Erstellen durch Randbedingungen bestimmter [Skizzen](/Sketcher_Workbench/de "Sketcher Workbench/de"). Der aktuelle Arbeitsbereich kann mit der [Arbeitsbereichsauswahl](/Std_Workbench/de "Std Workbench/de") gewechselt werden. Die in jedem Arbeitsbereich enthaltenen Werkzeuge können [angepasst](/Interface_Customization/de "Interface Customization/de") werden. Werkzeuge anderer Arbeitsbereiche und auch selbst erstellte Werkzeuge, [Makros](/Macros/de "Macros/de") genannt, können hinzugefügt werden. Meistens wird mit dem Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") oder [Part](/Part_Workbench/de "Part Workbench/de") begonnen.

Wird FreeCAD zum ersten Mal gestartet, wird die Startseite angezeigt. So sieht sie für die Version 0.19 aus:

![](/images/Start_center_0.19_screenshot.png)

Die Startseite ermöglicht das schnelle Auswählen der gängigsten Arbeitsbereiche, eine der zuletzt benutzten Dateien zu öffnen oder das Lesen der neuesten Nachrichten der FreeCAD-Welt. Der Standardarbeitsbereich kann in den [Voreinstellungen](/Preferences_Editor/de "Preferences Editor/de") eingestellt werden.

## Navigieren im 3D-Raum

FreeCAD stellt verschiedene [Navigationsmodi](/Mouse_navigation/de "Mouse navigation/de") zur Verfügung, die die Art und Weise ändert, wie mit Objekten in der 3D-Ansicht und der 3D-Ansicht selbst interagiert wird. Einer dieser Modi ist speziell für [Touchpads](/Mouse_navigation/de#Touchpad_Navigation "Mouse navigation/de") ausgelegt, bei dem die mittlere Maustaste nicht verwendet wird. Der Standard-Navigationsmodus ist [CAD-Navigation](/Mouse_navigation/de#CAD_navigation "Mouse navigation/de"). Mit der Schaltfläche ![](/images/NavigationCAD_dark.svg) in der [Statusleiste](/Status_bar/de "Status bar/de") oder durch einen Rechtsklick in einen leeren Bereich der [3D-Ansicht](/3D_view/de "3D view/de") kann schnell zwischen verschiedenen Modi gewechselt werden.

Es gibt mehrere voreingestellte Ansichten (Draufsicht, Vorderansicht usw.); sie stehen im Menü Ansicht, in der Symbolleiste Ansicht und als numerische Tastaturkürzel (1, 2, usw.) zur Verfügung. Mit einem Rechtsklick auf ein Objekt oder in einen leeren Bereich der 3D-Ansicht gibt es einen schnellen Zugriff auf allgemeine Vorgänge, wie eine bestimmte Ansicht einzustellen oder ein Objekt in der Baumansicht zu finden.

## Erste Schritte mit FreeCAD

Der Fokus von FreeCAD liegt darauf, zu ermöglichen, hochpräzise 3D-Modelle zu erstellen, die Kontrolle über die Modelle zu behalten (durch die Möglichkeit in der Modellhistorie zurückgehen zu können und Parameter anzupassen) und schließlich die Modelle zu fertigen (mittels 3D-Druck, CNC-Bearbeitung oder sogar großer Fertigungsanlagen).
FreeCAD unterscheidet sich daher sehr von einigen anderen 3D-Anwendungen, die für andere Einsatzzwecke programmiert wurden wie z.B. für das Erstellen von Animationsfilmen oder Spielen. Seine Lernkurve kann sehr steil sein, besonders wenn es ein erster Kontakt mit dem 3D-Modellieren ist. Falls es an einer Stellen mal nicht weitergehen will, sollte man sich daran erinnern, dass es eine freundliche Gemeinschaft von Nutzern im [FreeCAD-Forum](http://forum.freecad.org/index.php) gibt, die schnell weiterhelfen kann.

Mit welchem Arbeitsbereich man in FreeCAD beginnt, hängt von der Art der Arbeit ab, die man erledigen möchte: Soll an mechanischen Modellen gearbeitet werden oder ganz allgemein an kleinformatigen Objekten, dann wird wahrscheinlich der Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") verwendet. Soll in 2D gearbeitet werden, kann zum Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") gewechselt werden oder zum Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de"), wenn mit Randbedingungen gearbeitet werden soll. Soll [Gebäudedatenmodellierung](https://de.wikipedia.org/wiki/Building_Information_Modeling) eingesetzt werden, wird der Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") gestartet. Und wer aus der OpenSCAD-Welt kommt, probiert den Arbeitsbereich [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") aus. Es stehen auch viele von der Gemeinschaft entwickelte [externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de") zur Verfügung.

Der Arbeitsbereich kann jederzeit gewechselt werden. Es lässt sich auch ein eigener Lieblingsarbeitsbereich [zusammenstellen](/Interface_Customization/de "Interface Customization/de"), mit Werkzeugen unterschiedlicher Arbeitsbereiche.

## Arbeiten mit den Arbeitsbereichen PartDesign und Sketcher

Der Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") wurde für das Erstellen von komplexen Objekten entwickelt. Ausgehend von einfachen Formen werden Bestandteile ("Formelemente" genannt) hinzugefügt oder entfernt, bis das Objekt der eigenen Vorstellung entspricht. Alle dabei verwendeten Formelemente werden in einer separaten Ansicht, der [Dokumentstruktur](/Document_structure/de "Document structure/de") (besser bekannt als **Baumansicht** oder Modellbaum), angezeigt, die auch die anderen Objekte des Dokuments enthält. Man kann sich ein PartDesign-Objekt als eine Folge von Bearbeitungsschritten vorstellen, die sich jeweils auf das Ergebnisobjekt des vorhergehenden Schrittes beziehen und so eine lange Kette bilden. In der Baumansicht wird das fertige Objekt angezeigt; man kann es aber aufklappen, um alle vorherige Zustände abzurufen und die zugehörigen Parameter zu verändern, wobei das endgültige Objekt automatisch aktualisiert wird.

Der Arbeitsbereich PartDesign verwendet dabei viele der Funktionen und Werkzeuge des Arbeitsbereichs [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de"). Der Sketcher ermöglicht 2D-Formen zu zeichnen, die durch Randbedingungen und Maßvorgaben festgelegt werden. Man kann beispielsweise ein Rechteck zeichnen und eine Seitenlänge mit einer Maßvorgabe festlegen. Die Länge der Seite ist dann unveränderlich (solange der Wert der Maßvorgabe nicht verändert wird).

Solche mit dem Sketcher erstellen 2D-Formen werden vielfach imArbeitsbereich PartDesign verwendet, z.B. um 3D-Volumen zu erstellen oder um Bereiche auf einer Fläche eines Objekts zu zeichnen, die als Grundlage für Geometrie dienen, die vom Hauptvolumen entfernt wird. So sieht ein typischer Arbeitsablauf im Arbeitsbereich PartDesign aus:

1. Eine neue Skizze erstellen
2. Einer geschlossene Form zeichnen (alle Punkte müssen verbunden sein)
3. Die Skizze schließen
4. Die Skizze mit dem Werkzeug \*Aufpolsterung- ![](/images/PartDesign_Pad.svg) zu einem 3D-Festkörper erweitern
5. Eine der Seiten des Körpers auswählen
6. Eine zweite Skizze auf dieser Oberfläche erstellen
7. Eine geschlossene Form zeichnen
8. Die Skizze schließen
9. Eine \*Tasche- ![](/images/PartDesign_Pocket.svg) aus der zweiten Skizze im ersten Objekt erstellen.

Das Ergebnis könnte ein Objekt wie dieses sein:

![](/images/Partdesign_example.jpg)

Die originalen Skizzen können jederzeit ausgewählt und geändert oder die Extrusionsrichtung von Aufpolsterung und Tasche angepasst werden, wobei das endgültige Objekt aktualisiert wird.

## Arbeiten mit den Arbeitsbereichen Draft und BIM

Die Arbeitsbereiche [Draft](/Draft_Workbench/de "Draft Workbench/de") und [BIM](/BIM_Workbench/de "BIM Workbench/de") verhalten sich etwas anders als die zuvor beschriebenen Arbeitsbereiche, obwohl sie denselben Regeln folgen, die überall in FreeCAD gelten. Kurz gesagt: Während die Arbeitsbereiche Sketcher und PartDesign für die Konstruktion von einzelnen Bauteilen ausgelegt sind, vereinfachen Draft und BIM die Arbeit, wenn viele einfachere Objekte bearbeitet werden.

Der Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") bietet 2D-Werkzeuge, wie sie auch in klassischen 2D-CAD-Programmen (z.B. [AutoCAD](https://de.wikipedia.org/wiki/AutoCAD)) zu finden sind. Da das Erstellen von 2D-Zeichnungen jedoch nicht zum eigentlichen Aufgabenbereich von FreeCAD gehört, sollte hierbei keine solch große Auswahl an Werkzeugen wie bei kommerziellen Alternativen erwartet werden. Die meisten der dabei verfügbaren Werkzeuge funktionieren nicht nur in 2D-Ebenen, sondern auch im 3D-Raum und profitieren dabei von besonderen Konstruktionshhilfen wie [Arbeitsebenen](/Draft_SelectPlane/de "Draft SelectPlane/de") und [Einrasten](/Draft_Snap/de "Draft Snap/de").

Der Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") fügt eine Umgebung für Bauwerksdatenmodellierung ([BIM](https://de.wikipedia.org/wiki/Building_Information_Modeling)) in FreeCAD ein. Dies erlaubt das Erstellen von Architekturmodellen aus parametrischen Objekten. Der Arbeitsbereich BIM ist stark von anderen Arbeitsbereichen wie Draft oder Sketcher abhängig. Alle Draft-Werkzeuge sind auch im Arbeitsbereich BIM zu finden und die meisten BIM-Werkzeuge verwenden die Unterstützungsfunktionen von Draft.

Ein typischer Arbeitsablauf mit BIM und Draft könnte so aussehen:

1. Einige Linien mit dem Werkzeug Draft-Linie zeichnen.
2. Jede Linie jeweils einzeln auswählen und mit dem Werkzeug Wand eine Wand darauf aufbauen.
3. Die Wände auswählen und durch Drücken des Werkzeugs Arch-Komponente hinzufügen miteinander verbinden.
4. Ein Boden-Objekt erstellen und in der Baumansicht die Wände in dieses Boden-Objekt ziehen.
5. Ein Gebäude-Objekt erstellen und in der Baumansicht den Boden (der die Wände enthält) in dieses Gebäude-Objekt ziehen.
6. Ein Fenster einfügen, durch Anklicken des Werkzeugs Fenster, eine Voreinstellung im Dialogfenster und anschließend die Fläche einer Wand auswählen.
7. Maße hinzufügen, indem bei Bedarf zuerst eine Arbeitsebene festgelegt wird und dann das Werkzeug Draft-Maß verwendet wird

Das Ergebnis könnte folgendermaßen aussehen:

![](/images/Arch_workflow_example.jpg)

Mehr dazu auf der Seite [Tutorials](/Tutorials/de "Tutorials/de").

## Addons

Jeder Benutzer kann eigene Funktionen für FreeCAD entwickeln und sie der FreeCAD-Gemeinschaft als [Addon](/Addon/de "Addon/de") zur Verfügung stellen.

Es gibt Drei Arten von Addons:

- [Makros](/Macros/de "Macros/de"): kurze Abschnitte von [Python](/Python/de "Python/de")-Code, die ein neues Werkzeug oder eine neue Funktionalität in einer einzelnen Datei mit der Endung `.FCMacro` bereitstellen.
- [Externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de"): Sammlungen von Python-Dateien, die zusammengehörige [Befehle der Benutzerschnittstelle](/Gui_Command/de "Gui Command/de") (Werkzeuge) zur Verfügung stellen, die sich auf ein bestimmtes Thema beziehen.
- [Voreinstellungspakete](/Preference_Packs/de "Preference Packs/de"): Verteilbare Sammlungen von Benutzervoreinstellungen.

## Skripten

Und schließlich ist einer der leistungsfähigsten Bereiche von FreeCAD die Umgebung für die [Skripterstellung](/Power_users_hub/de#Skripten_in_FreeCAD "Power users hub/de"). Von der integrierten Python-Konsole (oder von jedem anderen externen Python-Skript) kann auf fast jeden Teil von FreeCAD zugegriffen werden, Geometrien erstellt oder geändert werden, die Darstellung dieser Objekte in der 3D-Szene geändert werden oder auf die FreeCAD-Oberfläche zugegriffen und diese modifiziert werden. Die Skriptsprache Python kann auch in [Makros](/Macros/de "Macros/de") verwendet werden, die eine einfache Methode zur Erstellung benutzerdefinierter Befehle bereitstellen.

## Was neu ist

- Siehe [Funktionsübersicht](/Feature_list/de#Versionshinweise "Feature list/de") für eine detaillierte Liste der Leistungsmerkmale.

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/de&oldid=1480499>"
