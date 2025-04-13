---
title: SheetMetal Ausschneiden
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| SheetMetal Ausschneiden |
| Menüeintrag |
| Sheet Metal → Extrudierter Ausschnitt |
| Arbeitsbereich |
| [SheetMetal](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel |
| E C |
| Eingeführt in Version |
| 0.5.04 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/SheetMetal_AddCutout.svg) Extrudierter Ausschnitt erstellt aus einer Skizze einen extrudierten Ausschnitt.

Der Unterschied zwischen einem 'normalen' Ausschnitt und einem extrudierten Ausschnitt ist, dass bei letzterem die Kanten senkrecht zur ausgewählten Fläche des Blechobjekts ausgeführt werden. Die Auswirkung des Befehls ist nur sichtbar, wenn die Skizze nicht parallel zur Fläche verläuft.

![](/images/SheetMetal_AddCutout_Example.png)

Extrudierter Ausschnitt auf Basis einer kreisförmigen Skizze

## Anwendung

1. Eine ebene Fläche und eine Skizze mit einer geschlossenen Kontur auswählen (in beliebiger Reihenfolge).
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/SheetMetal_AddCutout.svg) Extrudierter Ausschnitt drücken.
   * Den Menüeintrag **Sheet Metal → ![](/images/SheetMetal_AddCutout.svg) Extrudierter Ausschnitt** auswählen.
   * Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Sheet Metal → ![](/images/SheetMetal_AddCutout.svg) Extrudierter Ausschnitt** im Kontextmenü auswählen.
   * Das Tastaturkürzel E dann C.
3. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Eigenschaften des extrudierten Ausschnitts** wird geöffnet.
4. Wahlweise die Schaltfläche Face drücken, um die ebene Fläche neu auszuwählen.
5. Wahlweise die Schaltfläche Sketch drücken, um erneut eine Skizze auszuwählen.
6. Wahlweise die Parameter im Aufgaben-Fenster anpassen.
7. Die Schaltfläche OK rücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
8. Ein **ExtrudedCutout**-Objekt wird erstellt und enthält ein oder mehrere Löcher in einer Reihe durch das Objekt.
9. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-ExtrudedCutout-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Extruded Cutout

* Daten-Eigenschaft**Cut Side** (`Enumeration`): Standardwert `Inside` (innerhalb). Seite des Ausschnitts.
* Daten-Eigenschaft**Cut Type** (`Enumeration`): Standardwert `Through everything both sides` (beidseitig durch alles). Art des Ausschnitts.
* Daten-Eigenschaft (versteckt)**Extrusion Length1** (`Length`): Standardwert `500,0 mm`. Länge in Extrusionsrichtung 1.
* Daten-Eigenschaft (versteckt)**Extrusion Length2** (`Length`): Standardwert `500,0 mm`. Länge in Extrusionsrichtung 2.
* Daten-Eigenschaft**Selected Face** (`LinkSub`): Das Objekt und die ausgewählte Fläche.
* Daten-Eigenschaft**Sketch** (`Link`): Die Skizze für den Ausschnitt.

Extruded Cutout Improvements

* Daten-Eigenschaft**Improve Cut** (`Bool`): Standardwert `False`. Verbessert die Schnittgeometrie, wenn sie den Schnittbereich erreicht. `True` sollte nur ausgewählt werden, wenn der Ausschnitt korrigiert werden muss, da es sehr langsam sein kann.
* Daten-Eigenschaft (versteckt)**Improve Level** (`IntegerConstraint`): Standardwert `4`. Niveau der Qualität der Schnittverbesserung. Bei einem Wert größer als 10 kann es eine sehr lange Zeit dauern.
* Daten-Eigenschaft**Refine** (`Bool`): Standardwert `False`. Verfeinert die Geometrie.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddCutout/de&oldid=1545510>"