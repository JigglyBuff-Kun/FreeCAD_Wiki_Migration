---
title: PartDesign Einstellungen
---
## Einleitung

Die Arbeitsbereiche ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") und ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench") verwenden dieselben Einstellungen. Sie sind im [Voreinstellungseditor](/Preferences_Editor "Preferences Editor") zu finden. Im Menü **Bearbeiten → Einstellungen...** auswählen und dann **![](/images/Preferences-part_design.svg) Part/Part Design**. Diese Gruppe ist nur nur vorhanden, wenn einer der Arbeitsbereiche in der aktuellen FreeCAD-Sitzung geladen wurde.

Einige fortgeschrittene Einstellungen können nur im [Parameter-Editor](/Std_DlgParameter/de "Std DlgParameter/de") geändert werden. Siehe [Feinabstimmung](/Fine-tuning/de#Arbeitsbereich_PartDesign "Fine-tuning/de").

Diese Seite wurde für Version 1.0 aktualisiert.

## Verfügbare Einstellungen

Es gibt Drei Seiten: [Allgemein](#General/de), [Form-Ansicht](#Shape_view/de) und [Erscheinungsbild der Form](#Shape_appearance/de).

### Allgemein

![](/images/Preferences_PartDesign_Page_General.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Modell automatisch nach Boolescher Operation überprüfen** | Wenn aktiviert, wird die [Boundary-Representation](https://en.wikipedia.org/wiki/Boundary_representation) (BREP) des Modells nach einer [booleschen Operation](/Part_Boolean/de "Part Boolean/de") [überprüft](/Part_CheckGeometry/de "Part CheckGeometry/de"). |
| **Modell nach Boolescher Operation automatisch aufbereiten** | Wenn aktiviert, wird das Modell nach einer [booleschen Operation](/Part_Boolean/de "Part Boolean/de") [aufbereitet](/Part_RefineShape/de "Part RefineShape/de"). |
| **Modell nach skizzenbasierter Operation automatisch aufbereiten** | Wenn aktiviert, wird das Modell nach Änderungen an den Skizzen, auf denen das Objekt basiert, [aufbereitet](/Part_RefineShape/de "Part RefineShape/de"). |
| **Mehrere Festkörper in einem PartDesign-Körper standardmäßig erlauben (experimental)** | Wenn aktiviert, können Körper mehrere Festkörper enthalten. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |

### Form-Ansicht

![](/images/Preferences_PartDesign_Page_Shape_view.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Setzt die maximale Abweichung abhängig von der Modell-Bounding-Box** | Die maximale [lineare Abweichung](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) der [tessellierten](#Tessellation) Objekte von ihrer Oberfläche. |
| **Maximale Winkelabweichung** | Die maximale [Winkelabweichung](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) von einem [tessellierten](#Tessellation) Objektabschnitt zum nächsten Abschnitt. |

### Erscheinungsbild der Form

![](/images/Preferences_PartDesign_Page_Shape_appearance.png)

Eine Erklärung der Farben ist [hier](/Part_ColorPerFace/de#Usage "Part ColorPerFace/de") zu finden.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Formfarbe** | Die diffuse Farbe für neue Formen. Wenn die Option **Zufällig** gesetzt ist, wird stattdessen eine Zufallsfarbe verwendet. |
| **Farbe der umgebenden Form** | Die Umgebungsfarbe für neue Formen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |
| **Farbe der emittierenden Form** | Die emittierende Farbe für neue Formen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |
| **Farbe der spiegelnden Form** | Die spiegelnde Farbe für neue Formen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |
| **Form-Transparenz** | Die Transparenz für neue Formen. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de") |
| **Form-Glanz** | Der Glanz neuer Formen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |
| **Linienfarbe** | Die Linienfarbe für neue Formen. |
| **Linienbreite** | Die Linienbreite für neue Formen. |
| **Scheitelpunktfarbe** | Die Farbe für neue [Scheitelpunkte](/Glossary/de#Vertex "Glossary/de"). |
| **Scheitelpunktgröße** | Die Größe für neue [Scheitelpunkte](/Glossary#Vertex "Glossary"). |
| **Begrenzungsrahmenfarbe** | Die Farbe des [Begrenzungsrahmens](/Property_editor/de#View "Property editor/de") in der 3D-Ansicht. |
| **Begrenzungsrahmen-Schriftgröße** | Die Schriftgröße des  [Begrenzungsrahmen](/Property_editor/de#View "Property editor/de") in der 3D-Ansicht. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |
| **Zweiseitiges Rendering** | Wenn diese Option aktiviert ist, hat die Innenseite von Flächen die gleiche Farbe wie die Außenseite. Wenn sie nicht aktiviert ist, wird stattdessen entweder die [Farbe des Hintergrundes](/Preferences_Editor/de#3D_View "Preferences Editor/de"), falls aktiviert, oder Schwarz verwendet. |
| **Textfarbe** | Die Textfarbe für neue Dokumentanmerkungen. Derzeit können diese Anmerkungen nur mit Hilfe der [Python-Konsole](/Python_console/de "Python console/de") hinzugefügt werden:  `obj = App.ActiveDocument.addObject("App::Annotation", "Label")` |

## Tesselierung

Um ein Objekt effizient darzustellen, wird seine Oberfläche [tesselliert](https://en.wikipedia.org/wiki/Tessellation_(computer_graphics)), d.h. es wird mit einigen kleinen Abweichungen von seiner realen Oberfläche dargestellt. Dies gilt nicht nur für PartDesign Modelle, sondern auch für andere Objekte in FreeCAD.

Es gibt eine untere Grenze für die Tessellierung von 0,01%. Ist es OK mehr Zeit aufzuwenden, kann die Untergrenze noch weiter reduziert werden, indem der [Parametereditor](/Std_DlgParameter/de "Std DlgParameter/de") geöffnet wird.

Im Parametereditor wird zu **BaseApp → Preferences → Mod → Part** gewechselt und nach einem Rechtsklick auf **Netzabweichung** im Kontextmenü **Wert ändern** ausgewählt. Den Wert auf die gewünschte minimale Tessellierung festlegen. Nicht vergesen, dass der Wert in % angegeben wird, d.h. für einen Wert von 0,005% wird `0.00005` eingeben. Der kleinstmögliche Wert ist `1e-7`. Bitte beachten, dass Im [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") noch immer 0.01% angezeigt wird, auch wenn ein niedrigerer Wert eingestellt wurde.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Preferences/de&oldid=1542529>"