---
title: Arbeitsbereich Cables
---

![](/images/Cables_workbench_icon.svg)

Symbol des externen Arbeitsbereichs Cables

## Einleitung

Der Arbeitsbereich ![](/images/Cables_workbench_icon.svg) **Cables** ist ein Werkzeugsatz für die Modellierung elektrischer Installationen in Architekturprojekten. Mit seiner Hilfe können Kabelverläufe in Gebäuden, oder anderen Objekten, sowie Einzelverdrahtungen erstellt werden. Er ist eine [Externer Arbeitsbereich](/External_workbenches/de "External workbenches/de").

Dieser Werkzeugsatz kann für die Erstellung von Installationsdosen, oder anderen gebrauchsfertigen Elektro-Bauteilen (die Liste der Bauteile wächst hoffentlich in der Zukunft noch), genutzt werden. Diese Elemente können mit voll parametrisierbaren Leitungen verschiedener Leitungsprofile, Anzahl an Leitern und Leiterquerschnitten verbunden werden. Es gibt ein paar vordefinierte Leitungsprofile, aber es ist ebenso möglich, eigene, nicht standardisierte Profile mit einer einfachen CSV-Datei zu erzeugen.

Modelle die mit diesem Arbeitsbereich erstellt wurden, erlauben die einfache Umpositionierung von Elementen, ohne dass die Verbindung verloren geht. Leitungen verändern ihre Form zur neuen Position. Diese Funktion ist jedoch noch nicht perfekt.

Der Arbeitsbereich versucht zum [Arbeitsbereich BIM](/BIM_Workbench/de "BIM Workbench/de") kompatibel zu sein, aber er kann auch für andere Aufgaben als Architekturprojekte genutzt werden. Zukünftig sollen PCB-Steck-Verbindungen (jede Hilfe, z. B. bei der Erstellung eines Satzes vorgefertigter Verbindungen, ist sehr willkommen) modelliert werden können.

![](/images/Cables_Example3.png)

Beispiel von wandmontierten Installationsdosen und Leitungen  
Animierte Version [hier](/Cables_Example1_Simple_workflow "Cables Example1 Simple workflow")

![](/images/Cables_Example1.png)

Beispiel für ein dreiadriges Flachkabel:  
Leitungsform aus mehreren Materialien und deren Basisleiter, dem Profil und Einzelleitern.

## Installation

Dieser externe Arbeitsbereich kann über den ![](/images/Std_AddonMgr.svg) [Std AddonManager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden. Siehe auch [Weitere Arbeitsbereiche installieren](/Installing_more_workbenches/de "Installing more workbenches/de") für die manuelle Installation.

## Werkzeuge

Leitungs-Werkzeuge werden nach ihrer Verwendung in wenige Gruppen unterteilt.

### Leitungs-Manipulations-Werkzeuge

- ![](/images/Cables_WireFlex.svg) [Leitungsverlauf erstellen](/Cables_WireFlex/de "Cables WireFlex/de"): Erzeugt ein neues Leitungsverlauf-Objekt, das zwischen zwei Knoten gespannt wird.

- ![](/images/Cables_AddVertex.svg) [Knoten hinzufügen](/Cables_AddVertex/de "Cables AddVertex/de"): Fügt weitere Knoten zur Kante des ausgewählten Leitungsverlaufs hinzu.

- ![](/images/Cables_DelVertex.svg) [Knoten löschen](/Cables_DelVertex/de "Cables DelVertex/de"): Löscht den ausgewählten Knoten aus dem Leitungsverlauf.

- ![](/images/Cables_AttachVertex.svg) [Knoten befestigen](/Cables_AttachVertex/de "Cables AttachVertex/de"): Befestigt den ausgewählten Knoten des Leitungsverlaufs an einem externen Knoten/Objekt.

- ![](/images/Cables_RemoveVertexAttachment.svg) [Knotenbefestigung entfernen](/Cables_RemoveVertexAttachment/de "Cables RemoveVertexAttachment/de"): Entfernt die ausgewählte Leitungsverlauf-Knoten-Befestigung von einem externen Knoten/Objekt.

### Werkzeuge zum Erstellen von Leitungen und anderen vorgefertigten Elementen

- ![](/images/Cables_Profile.svg) [Leitungsprofil](/Cables_Profile/de "Cables Profile/de"): Erstellt ein neues Leitungsprofil im aktuellen Dokument.

- ![](/images/Cables_Cable.svg) [Leitung](/Cables_Cable/de "Cables Cable/de"): Erstellt eine neue Leitung auf Basis des ausgewählten Linienzuges und Profils.

- ![](/images/Cables_CableBox.svg) [Installationsdose](/Cables_CableBox/de "Cables CableBox/de"): Erstellt eine neue parametrische Installationsdose.

- ![](/images/Cables_CableConnector.svg) [Leitungsverbindung](/Cables_CableConnector/de "Cables CableConnector/de"): Erstellt eine neue universelle parametrische Leitungsverbindung.

- ![](/images/Cables_CableLightPoint.svg) [Lichtauslass](/Cables_CableLightPoint/de "Cables CableLightPoint/de"): Erstellt einen universellen parametrischer Lichtauslass für ein Kabel.

- ![](/images/Cables_Material.svg) [Materialien](/Cables_Material/de "Cables Material/de"): Erstellt eine Standardliste verschiedener Materialien im aktuellen Dokument.

### Unterstützungs-Werkzeuge

- ![](/images/Cables_SupportPoint.svg) [BefestigungsPunkt](/Cables_SupportPoint/de "Cables SupportPoint/de"): Fügt einen universellen BefestigungsPunkt hinzu.

- ![](/images/Cables_SupportLine.svg) [BefestigungsLinie](/Cables_SupportLine/de "Cables SupportLine/de"): Fügt eine universelle BefestigungsLinie hinzu.

### Externe Werkzeuge

- ![](/images/Draft_ToggleGrid.svg) [Raster umschalten](/Draft_ToggleGrid/de "Draft ToggleGrid/de"): Ändert die Sichtbarkeit des Rasters.

## Hinweise

Dieser Arbeitsbereich befindet sich in einer frühen Entwicklungsphase. Es ist mit Fehlern zu rechnen, die ggf. das Modell zerstören können. Einige Eigenschaften des Modells können sich in der Zukunft verändern und sind inkompatibel mit der aktuellen Version. Die Wiki-Seiten dieses Arbeitsbereichs können sich zukünftig ebenfalls grundlegend verändern. Jeder Kommentar und jede neue Idee sind herzlich willkommen. Bitte teile die Kommentare und Absturzberichte über die in den [Referenzen](#References) angegebenen Kanäle.

## Beschreibung des Basis-Arbeitsablaufs

1. Erstelle Endpunkte für Leitungen wie: [Installationsdosen](/Cables_CableBox/de "Cables CableBox/de") oder [Lichtpunkte](/Cables_CableLightPoint/de "Cables CableLightPoint/de") und ordne sie im 3D-Raum an.
2. Erzeuge einen Basisleiter der die erzeugten Endpunkte mit einem [WireFlex](/Cables_WireFlex/de "Cables WireFlex/de") verbindet und ordne sie im 3D-Raum mit der Hilfe von [Befestigungslinien](/Cables_SupportLine/de "Cables SupportLine/de") oder [Befestigungspunkten](/Cables_SupportPoint/de "Cables SupportPoint/de") an.
3. Erzeuge für das Projekt geeignete [Leitungsprofile](/Cables_Profile/de "Cables Profile/de").
4. Erzeuge [Leitungen](/Cables_Cable/de "Cables Cable/de") basierend auf den existierenden Basisleitungen und Leitungsprofilen.
5. Färbe die Leitungen mit vordefinierten oder angepassten [Materialien](/Cables_Material/de "Cables Material/de") ein.
6. Verbinde (optional) am Ende die einzelnen Leitungen mit einer [Leitungsverbindung](/Cables_CableConnector/de "Cables CableConnector/de").

## Tutorien und Beispiele

FreeCAD-Beispieldokumente mit Leitungen:

- [Beispiele](https://github.com/sargo-devel/Cables/tree/master/examples) verteilt mit dem Quellcode

Beispiele in animierten Bildern:

- [Beispiele eines einfachen Arbeitsablaufs](/Cables_Example1_Simple_workflow "Cables Example1 Simple workflow")
- [WireFlex Bewegungsbeispiele](/Cables_Example2_WireFlex "Cables Example2 WireFlex")
- [Nutzung von Installationsdosen](/Cables_Example3_CableBox "Cables Example3 CableBox")
- [Nutzung von Kabelverbindern](/Cables_Example4_CableConnector "Cables Example4 CableConnector")

## Referenzen

- Quellcode auf GitHub: <https://github.com/sargo-devel/Cables>
- FreeCAD-Forum: <https://forum.freecad.org/viewtopic.php?t=94090>
- Fehler melden: Bitte melde Fehler [hier](https://github.com/sargo-devel/Cables/issues)

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_Workbench/de&oldid=1555673>"
