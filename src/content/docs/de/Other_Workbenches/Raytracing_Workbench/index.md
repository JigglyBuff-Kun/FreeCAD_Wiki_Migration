---
title: Arbeitsbereich Raytracing
---

:::caution
Der ArbeitsbereichRaytracingist nach der Version 0.20 nicht mehr enthalten.Der externe ArbeitsbereichRendersollte stattdessen eingesetzt werden.
:::
![](/images/Workbench_Raytracing.svg)

Arbeitsbereichssymbol Strahlverfolgung

## Einführung

Der ![](/images/Workbench_Raytracing.svg)Arbeitsbereich Strahlverfolgung dient dazu, fotorealistische Bilder deiner Modelle zu erzeugen, indem du sie mit einem externen Renderer verarbeitest.

Der Arbeitsbereich Strahlverfolgung arbeitet mit [Vorlagen](/Raytracing_templates/de "Raytracing templates/de"), das sind Projektdateien, die eine Szene für dein 3D Modell definieren. Du kannst Lichter und Geometrie wie Grundrisse platzieren, und es enthält auch Platzhalter für die Position der Kamera und für die Materialinformationen der Objekte in der Szene. Das Projekt kann dann in eine renderfertige Datei exportiert oder direkt in FreeCAD gerendert werden.

Derzeit werden zwei Renderer unterstützt: [POV-Ray](/index.php?title=POV-Ray/de&action=edit&redlink=1 "POV-Ray/de (page does not exist)") und [LuxRender](/LuxRender/de "LuxRender/de"). Um aus FreeCAD heraus rendern zu können, muss mindestens eines dieser Programme in deinem System installiert und konfiguriert sein. Wenn jedoch kein Renderer installiert ist, kannst du trotzdem eine Projektdatei exportieren, die zu einem anderen Zeitpunkt gerendert werden soll.

Die Arbeitsbereich Raytracing ist veraltet. Der externe Arbeitsbereich [Render](https://github.com/FreeCAD/FreeCAD-render) ist sein Ersatz. Nichtsdestotrotz sind die Informationen auf dieser Seite im Allgemeinen für den neuen Arbeitsbereich nützlich, da beide im Wesentlichen auf die gleiche Weise arbeiten.

![](/images/Raytracing_example.jpg)

## Typischer Arbeitsablauf

1. Erstelle oder öffne ein FreeCAD Projekt, füge einige Festkörperobjekte hinzu ([Part-basiert](/Part_Workbench/de "Part Workbench/de") oder [PartDesign-basiert](/PartDesign_Workbench/de "PartDesign Workbench/de")); Netze werden derzeit nicht unterstützt.
2. Erstelle ein Raytracing-Projekt (povray oder luxrender).
3. Wähle die Objekte für das Raytracing-Projekt aus und füge sie hinzu.
4. Exportiere die Projektdatei oder rendere sie direkt.

![](/images/Raytracing_Workbench_workflow.svg)

Arbeitsablauf des Arbeitsbereichs Strahlverfolgung; der Arbeitsbereich bereitet eine Projektdatei aus einer bestimmten Vorlage vor und ruft dann ein externes Programm auf, um das eigentliche Rendering der Szene zu erstellen. Der externe Renderer kann unabhängig von FreeCAD verwendet werden..

## Werkzeuge

### Projekt Werkzeuge

Dies sind die wichtigsten Werkzeuge für den Export deiner 3D Arbeit in externe Renderer.

- ![](/images/Raytracing_New.svg) [Neues PovRay Projekt](/Raytracing_New/de "Raytracing New/de"): Neues PovRay Projekt in das Dokument einfügen
- ![](/images/Raytracing_Lux.svg) [Neues LuxRender Projekt](/Raytracing_Lux/de "Raytracing Lux/de"): Neues LuxRender Projekt in das Dokument einfügen
- ![](/images/Raytracing_InsertPart.svg) [Teil einfügen](/Raytracing_InsertPart/de "Raytracing InsertPart/de"): Einfügen einer Ansicht eines Teils in ein Strahlverfolgungsprojekt
- ![](/images/Raytracing_ResetCamera.svg) [Kamera zurücksetzen](/Raytracing_ResetCamera/de "Raytracing ResetCamera/de"): Stimmt die Kameraposition eines Raytracing Projekts mit der aktuellen Ansicht ab.
- ![](/images/Raytracing_ExportProject.svg) [Export Projekt](/Raytracing_ExportProject/de "Raytracing ExportProject/de"): Exportiert ein Strahlverfolgungsprojekt in eine Szene Datei zum Rendern in einem externen Renderer.
- ![](/images/Raytracing_Render.svg) [Rendern](/Raytracing_Render/de "Raytracing Render/de"): Rendert ein Strahlverfolgungsprojekt mit einem externen Renderer.

### Hilfsmittel

Dies sind Hilfswerkzeuge, um bestimmte Aufgaben manuell auszuführen.

- ![](/images/Raytracing_WriteView.svg) [Exportiere Ansicht zu povray](/Raytracing_WriteView/de "Raytracing WriteView/de"): Schreibe die aktive 3D Ansicht mit der Kamera und allen Inhalten in eine Povray Datei.
- ![](/images/Raytracing_WriteCamera.svg) [Exportiere Kamera zu povray](/Raytracing_WriteCamera/de "Raytracing WriteCamera/de"): Exportieren der Kameraposition der aktiven 3D Ansicht im POV-Ray Format in eine Datei.
- ![](/images/Raytracing_WritePart.svg) [Exportiere Teil zu povray](/Raytracing_WritePart/de "Raytracing WritePart/de"): Schreiben des ausgewählten Teils (Objekts) als Povray Datei

## Einstellungen

- ![](/images/Preferences-raytracing.svg) [Einstellungen](/Raytracing_Preferences/de "Raytracing Preferences/de"): Einstellungen, die in den Strahlverfolgungswerkzeugen verfügbar sind.

## Tutorien

- [Grundlegendes Strahlverfolgungstutorium](/Raytracing_tutorial/de "Raytracing tutorial/de")
- [Mittleres Strahlverfolgungstutorium](/Tutorial_FreeCAD_POV_ray/de "Tutorial FreeCAD POV ray/de")

## Eine Povray Datei manuell erzeugen

Mit den oben beschriebenen Hilfswerkzeugen kannst Du die aktuelle 3D Ansicht und ihren gesamten Inhalt in eine Datei [Povray](http://www.povray.org/) exportieren. Zuerst musst Du Deine CAD Daten laden oder erstellen und die Ausrichtung der 3D Ansicht nach Deinen Wünschen positionieren. Wähle dann "Hilfsprogramme → Export Ansicht...." aus dem Menü Strahlverfolgung.

![](/images/FreeCAD_Raytracing.jpg)

Du wirst nach einem Ort gefragt, an dem du die resultierende \*.pov Datei speichern kannst. Danach kannst du es in [Povray](http://www.povray.org/) öffnen und rendern:

![](/images/Povray.jpg)

Üblicherweise kann man mit einem Renderer große und schöne Bilder erstellen:

![](/images/Scharniergreifer_render.jpg)

## Skripten

Siehe [Strahlverfolgungs API Beispiel](/Raytracing_API_example/de "Raytracing API example/de") für Informationen zum programmgesteuerten Schreiben von Szenen.

## Verweise

### POV-Ray

- [POV-Ray Seite in diesem Wiki](/index.php?title=POV-Ray/de&action=edit&redlink=1 "POV-Ray/de (page does not exist)")
- <http://www.spiritone.com/~english/cyclopedia/>
- <http://www.povray.org/>
- <http://en.wikipedia.org/wiki/POV-Ray>

### Luxrender

- [LuxRender Seite in diesem Wiki](/LuxRender/de "LuxRender/de")
- <http://www.luxrender.net/>

### Zukünftige zur Implementierung mögliche Renderer

- <http://www.yafaray.org/>
- <http://www.mitsuba-renderer.org/>
- <http://www.kerkythea.net/>
- <http://www.artofillusion.org/>

## Export nach Kerkythea

Obwohl der direkte Export in das Kerkythea XML-Datei-Format noch nicht unterstützt wird, kannst Du deine Objekte als Netz Datei (.obj) exportieren und dann in Kerkythea importieren.

- Wenn Du Kerkythea für Linux verwendest, denke daran, das WINE Paket zu installieren (wird von Kerkythea für Linux benötigt).
- Du kannst deine Modelle mit Hilfe der Arbeitsbereich Netz in Netze konvertieren und diese Netze dann als .obj-Dateien exportieren.
- Wenn dein Netz Export zu Fehlern geführt hat (Umklappen der Normalen, Löcher...), kannst du dein Glück mit [netfabb studio basic](http://www.netfabb.com/downloadcenter.php?basic=1) versuchen.

: Kostenlos für den persönlichen Gebrauch, verfügbar für Windows, Linux und Mac OSX.
: Es verfügt über Standard Reparaturwerkzeuge, die dein Modell in den meisten Fällen reparieren werden.

- ein weiteres gutes Programm für die Netzanalyse und -reparatur ist [Meshlab](http://sourceforge.net/projects/meshlab/).

: Open Source, verfügbar für Windows, Linux und Mac OSX.
: Es verfügt über Standard Reparaturwerkzeuge, die Ihr Modell in den meisten Fällen reparieren werden (Löcher füllen, Normalen neu ausrichten, etc.).

- Du kannst "Erzeuge Verbund" und dann "Erzeuge einfache Kopie" verwenden oder Festkörper verschmelzen, um sie zu gruppieren, bevor du sie in Meshes konvertierst.
- Denkedaran, in Kerkythea einen Importfaktor von 0,001 für obj-Modellierer einzustellen, da Kerkythea erwartet, dass die obj Datei in m vorliegt (aber das Standard Einheitenschema in FreeCAD ist mm).

: Innerhalb von WIndows 7 64-Bit scheint Kerkythea diese Einstellungen nicht speichern zu können.
: Also denk daran, das jedes Mal zu tun, wenn du Kerkythea startest.

- Wenn Du mehrere Objekte in Kerkythea importierst, kannst Du den Befehl "Datei → Zusammenführen" in Kerkythea verwenden.

## Entwicklung

Diese Seiten beziehen sich auf den neuen, in Python programmierten Arbeitsbereich, der den aktuellen Arbeitsbereich Strahlverfolgung ersetzen soll.

- [Arbeitsbereich Rendern](https://github.com/FreeCAD/FreeCAD-render)
- [Arbeitsbereich Rendern](https://forum.freecadweb.org/viewtopic.php?f=9&t=25933) (Nur Ankündigung, keine Erörterung)
- [FreeCAD Verbesserungen Arbeitsbereich Rendern](https://forum.freecadweb.org/viewtopic.php?t=39168)

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_Workbench/de&oldid=1331321>"
