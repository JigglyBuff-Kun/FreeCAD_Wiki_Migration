---
title: SheetMetal EntlastungsausschnittHinzufügen
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SheetMetal EntlastungsausschnittHinzufügen                                                                                                                            |
| Menüeintrag                                                                                                                                                           |
| SheetMetal → Make Relief                                                                                                                                              |
| Arbeitsbereich                                                                                                                                                        |
| [Blech (SheetMetal)](/SheetMetal_Workbench/de "SheetMetal Workbench/de")                                                                                              |
| Standardtastenkürzel                                                                                                                                                  |
| S R                                                                                                                                                                   |
| Eingeführt in Version                                                                                                                                                 |
| -                                                                                                                                                                     |
| Siehe auch                                                                                                                                                            |
| [SheetMetal Stoß hinzufügen](/SheetMetal_AddJunction/de "SheetMetal AddJunction/de"), [SheetMetal Biegung hinzufügen](/SheetMetal_AddBend/de "SheetMetal AddBend/de") |
|                                                                                                                                                                       |

## Beschreibung

Der Befehl ![](/images/SheetMetal_AddRelief.svg) Entlastungsausschnitt hinzufügen erzeugt Eckentlastungen, Ausschnitte an den Eckpunkten, an denen sich drei Abschnitte (Grundplatte/Kanten/Falze) eines SheetMetal-Objekts treffen. Ohne diese Entlastungen wäre das Objekt nicht abwickelbar.

Dieser Befehl ist der erste von drei Schritten, um ein Schalenobjekt, das mit dem Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") oder [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erzeugt wurde, in ein abwickelbares SheetMetal-Objekt umzuwandeln:

1. SheetMetal Entlastungsausschnitt hizufügen
2. [SheetMetal Stoß hinzufügen](/SheetMetal_AddJunction/de "SheetMetal AddJunction/de")
3. [SheetMetal Biegung hinzufügen](/SheetMetal_AddBend/de "SheetMetal AddBend/de")

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)(/SheetMetal_AddBend "SheetMetal AddBend")

Entlastungsausschnitt hinzufügen - Ecken abschneiden

## Anwendung

1. Einen oder mehrere Eckpunkte auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/SheetMetal_AddRelief.svg) Entlastungsausschnitt hinzufügen drücken.
   - Den Menüeintrag **SheetMetal → ![](/images/SheetMetal_AddRelief.svg) Entlastungsausschnitt hinzufügen** auswählen.
   - Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **SheetMetal → ![](/images/SheetMetal_AddRelief.svg) Entlastungsausschnitt hinzufügen** im Kontextmenü auswählen.
   - Das Tastaturkürzel S dann R.
3. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Parameter der Eckentlastung am Festkörper** wird geöffnet (eingeführt in Version 0.5.00).
4. Wahlweise die Schaltfläche Auswahl drücken, um weitere Eckpunkte auszuwählen.
   - Die Schaltfläche Vorschau drücken, um die Auswahl abzuschließen und die Änderungen anzuzeigen.
5. Wahlweise die Parameter im Aufgaben-Fenster anpassen.
6. Die Schaltfläche OK rücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
7. Ein **CornerRelief**-Objekt wird erstellt und enthält eine neue Eckentlastung an jedem ausgewählten Eckpunkt.
8. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

![](/images/SheetMetal_ConvertShellObject-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-06.png)

## Hinweise

Die Befehle ![](/images/SheetMetal_AddRelief.svg) **[Entlastungsausschnitt hinzufügen](/SheetMetal_AddRelief "SheetMetal AddRelief")**, ![](/images/SheetMetal_AddJunction.svg) **[Stoß hinzufügen](/SheetMetal_AddJunction "SheetMetal AddJunction")** und ![](/images/SheetMetal_AddBend.svg) **[Biegung hinzufügen](/SheetMetal_AddBend "SheetMetal AddBend")** funktionieren am besten mit hohlen Quadern, d.h. Schalenobjekten mit einer konstanten Wandstärke und nur 90° Winkeln zwischen den Flächen.

Schalenobjekte können mit Befehlen der Arbeitsbereiche ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de")
oder ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt werden.

Zum Erstellen eines hohlen Quaders mit dem Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de"):

1. Einen Festkörper erstellen durch
   - Anwendung des Befehls ![](/images/Part_Box.svg) [Part Würfel (Box)](/Part_Box/de "Part Box/de")
   - Verwendung des Befehls ![](/images/Part_Extrude.svg) [Part Extrudieren...](/Part_Extrude/de "Part Extrude/de") mit
     - einem ![](/images/Draft_Rectangle.svg) [Draft Rechteck](/Draft_Rectangle/de "Draft Rectangle/de").
     - einem ![](/images/Draft_Wire.svg) [Draft Linienzug](/Draft_Wire/de "Draft Wire/de").
     - einer ![](/images/Sketcher_NewSketch.svg) [Skizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de").
2. Den Befehl ![](/images/Part_Thickness.svg) [Part Dicke...](/Part_Thickness "Part Thickness") verwenden, um aus dem Festkörper ein Schalenobjekt zu erzeugen (typischerweise mit einer Wandstärke, die der Blechstärke entspricht).

Zum Erstellen eines hohlen Quaders mit dem Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"):

1. Einen Festkörper erstellen durch
   - Anwendung des Befehls ![](/images/PartDesign_AdditiveBox.svg) [Zu addierender Quader](/PartDesign_AdditiveBox/de "PartDesign AdditiveBox/de").
   - ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad/de "PartDesign Pad/de") mit einer ![](/images/Sketcher_NewSketch.svg) [Skizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de").
2. Den Befehl ![](/images/PartDesign_Thickness.svg) [PartDesign Dicke](/PartDesign_Thickness/de "PartDesign Thickness/de") verwenden, um aus dem Festkörper ein Schalenobjekt zu erzeugen (typischerweise mit einer Wandstärke, die der Blechstärke entspricht).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-Relief-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

- Daten-Eigenschaft**base Object** (`LinkSub`): "Base Object". Verweise zu den Eckpunkten, die die Lage der Entlastungsausschnitte bestimmen.
- Daten-Eigenschaft**relief** (`Length`): "Relief Size". Größe der Entlastungsausschnitte, Standardwert: `2,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddRelief/de&oldid=1545480>"
