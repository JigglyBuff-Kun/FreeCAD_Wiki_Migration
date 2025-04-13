---
title: OSH Automatisierte Dokumentation
---
![](/images/Icon-osh-autodoc.svg)

Icon des Arbeitsbereichs OSH Automatisierte Dokumentation

## Einleitung

OSH Automatisierte Dokumentation ist eine Software, mit der qualitativ hochwertige visuelle Montageanleitungen für physische Produkte erstellt werden können, die in CAD-Software entworfen wurden. Sie besteht aus zwei Teilen, dem FreeCAD-Arbeitsbereich und einem Compiler zur Erzeugung von PDF-Dateien. Weitere Informationen befinden sich auf der [OSH Automated Documentation website](https://osh-autodoc.org). Diese Seite befasst sich hauptsächlich mit dem Arbeitsbereich, der im FreeCAD Addon Manager verfügbar ist.

## Übersicht

Diese Software stammt aus einem [Peer-reviewten Artikel](https://openhardware.metajnl.com/articles/10.5334/joh.56) und ist als solche noch Forschungssoftware und nicht produktionsreif. Auf vielfachen Wunsch suchen wir aktiv nach einer Finanzierung, um diese Arbeit fortzusetzen und sie produktionsreif zu machen.

## Anwendung

Die Software besteht aus einem **Arbeitsbereich** und einem **Compiler**, der auf der Grundlage einer textlichen Beschreibung des Handbuchs ein PDF erzeugt. Der Arbeitsbereich wird verwendet, um Anmerkungen zum CAD-Modell zu machen, zum Beispiel eine STEP-Datei. Ein Beispiel für eine solche Anmerkung ist in der Abbildung unten zu sehen, wo die Kameraposition gespeichert ist, um ein qualitativ hochwertiges Bild für das Handbuch zu erzeugen:

![](/images/Screenshot-camera-position.png)

Der Arbeitsbereich erzeugt eine Verzeichnisstruktur mit SVG-Bildern und einer Stückliste der für einen Montageschritt verwendeten Teile. Die Stückliste ist eine CSV-Datei mit Bildern für jedes Teil. Diese Ausgabe kann von anderer Software verwendet werden, insbesondere vom Compiler, um PDF-Bilder zu erstellen.

Die Schnittstelle zwischen unserem Compiler und dem Arbeitsbereich wurde so ausgelegt, dass die Ausgabe des Arbeitsbereichs auch für andere Abläufe genutzt werden kann.

Weitere Informationen zur Verwendung der Workbench findet man auf der Webseite [OSH Automatisierte Dokumentation](https://osh-autodoc.org).

Retrieved from "<http://wiki.freecad.org/index.php?title=OSH_Automated_Documentation/de&oldid=1541255>"