---
title: Arbeitsbereich Zeichnen
---

:::caution
Der ArbeitsbereichDrawingist nach Version 0.20 nicht länger Bestandteil von FreeCAD.Der ArbeitsbereichTechDrawist sein fortschrittlicherer Ersatz.
:::
![](/images/Workbench_Drawing.svg)

Drawing workbench icon

## Einführung

Das Zeichnungsmodul erlaubt dir, deine 3D Arbeit zu Papier zu bringen. Das bedeutet, gewählte Ansichten von deinen Modellen in einem 2D Fenster anzeigen und dieses Fenster in eine Zeichnung einzufügen, zum Beispiel in ein Blatt mit einer Umrandung, einem Titel und deinem Logo und druckt schließlich das Blatt.

![](/images/Drawing_extraction.png)

## Werkzeuge

Diese Werkzeuge ermöglichen das Erstellen, Konfigurieren und exportieren von 2D Zeichnungen

- ![](/images/Drawing_New.png) [Skalierbare Vektorgrafik öffnen](/Drawing_Open_SVG/de "Drawing Open SVG/de"): Öffnet ein zuvor als SVG Datei gespeichertes Zeichnungsblatt

- ![](/images/Drawing_Landscape_A3.png) [Neue A3 Querformat Zeichnung](/Drawing_Landscape_A3/de "Drawing Landscape A3/de"): Erzeugt ein neues Zeichnungsblatt aus FreeCADs Standard A3 Vorlage

- ![](/images/Drawing_View.png) [Eine Ansicht einfügen](/Drawing_View/de "Drawing View/de"): Fügt eine Ansicht des ausgewählten Objekts in das aktive Zeichnungsblatt ein

- ![](/images/Drawing_Annotation.png) [Anmerkung](/Drawing_Annotation/de "Drawing Annotation/de"): Fügt eine Anmerkung in das aktuelle Zeichnungsblatt ein

- ![](/images/Drawing_Clip.png) [Ausschnitt](/Drawing_Clip/de "Drawing Clip/de"): Fügt eine Ausschnittsgruppe in das aktuelle Zeichnungsblatt ein

- ![](/images/Drawing_Openbrowser.png) [Browser öffnen](/Drawing_Openbrowser/de "Drawing Openbrowser/de"): Öffnet eine Vorschau des aktuellen Zeichnungsblatts in den Browser ein

- ![](/images/Drawing_Orthoviews.png) [Orthografische Ansichten einfügen](/Drawing_Orthoviews/de "Drawing Orthoviews/de"): Orthografische Projektion eines Bauteils in die aktive Zeichnung einfügen

- ![](/images/Drawing_Symbol.png) [Symbol](/Drawing_Symbol "Drawing Symbol"): Fügt den Inhalt einer SVG-Datei als ein Symbol auf das aktuelle Zeichnungsblatt ein.

- ![](/images/Drawing_DraftView.png) [Draft View](/Draft_Drawing "Draft Drawing"): Fügt eine spezielle Entwurfsansicht des ausgewählten Objekts in das aktuelle Zeichenblatt ein.

- ![](/images/Drawing_SpreadsheetView.png) [Spreadsheet View](/Drawing_SpreadsheetView "Drawing SpreadsheetView"): Fügt eine Ansicht eines ausgewählten Rechenblatts in das aktuelle Zeichenblatt ein.

- ![](/images/Drawing_Save.png) [Speichern](/index.php?title=Drawing_Save/de&action=edit&redlink=1 "Drawing Save/de (page does not exist)"): Speichert das aktuelle Blatt als SVG-Datei

* [Project Shape](/Drawing_ProjectShape "Drawing ProjectShape"): Erstellt eine Projektion des ausgewählten Objekts (Quelle) in der 3D-Ansicht.

* _Note:_ das [Draft Drawing](/Draft_Drawing/de "Draft Drawing/de") Werkzeugt wird mit [Draft objects](/Draft_Workbench/de "Draft Workbench/de") verwendet. Es verfügt über einige zusätzliche Funktionen gegenüber den Zeichenwerkzeugen und unterstützt spezifische Objekte wie[Entwurfsbemaßungen](/Draft_Dimension/de "Draft Dimension/de").

## Arbeitsablauf

Das Dokument enthält ein 3D Formobjekt (Schenkel), von dem wir eine Zeichnung erstellen wollen. Deshalb wird eine "Seite" erstellt. Eine Seite wird aus einer Vorlage realisiert, z. B. aus der Vorlage "A3_Landscape". Die Vorlage ist ein [SVG](/SVG/de "SVG/de") Dokument, das einen Seitenrahmen, ein Logo und andere Elemente enthalten kann.

In diese Seite können wir eine oder mehrere Ansichten einfügen. Jede Ansicht hat eine Position auf der Seite, einen Skalierungsfaktor und zusätzliche Eigenschaften. Jedes Mal, wenn sich die Seite oder die Ansicht oder das referenzierte Objekt ändert, wird die Seite regeneriert und die Seitenanzeige aktualisiert.

## Scripting

Im Moment ist der Arbeitsablauf der grafischen Benutzeroberfläche sehr begrenzt, daher ist die Skripten API interessanter.

Siehe die [Zeichnungs API Beispiel](/index.php?title=Drawing_API_example/de&action=edit&redlink=1 "Drawing API example/de (page does not exist)") Seite für eine Beschreibung der Funktionen zum Erstellen von Zeichenblättern und Ansichten.

## Erweiterung des Zeichenmoduls

Einige Hinweise auf der Programmierseite des Zeichenmoduls werden auf der Seite [Drawing Documentation/de](/index.php?title=Drawing_Documentation/de&action=edit&redlink=1 "Drawing Documentation/de (page does not exist)") hinzugefügt. Dies soll helfen, die Funktionsweise des Zeichenmoduls schnell zu verstehen, so dass Programmierer schnell mit der Programmierung beginnen können.

## Externe Links

- [Einführung in technische Zeichnung auf Youtube - von Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/de&oldid=1464569>"
