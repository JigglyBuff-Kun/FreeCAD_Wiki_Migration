---
title: SheetMetal BiegungHinzufügen
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SheetMetal BiegungHinzufügen                                                                                                                                                            |
| Menüeintrag                                                                                                                                                                             |
| SheetMetal → Make Bend                                                                                                                                                                  |
| Arbeitsbereich                                                                                                                                                                          |
| [SheetMetal (Blech)](/SheetMetal_Workbench/de "SheetMetal Workbench/de")                                                                                                                |
| Standardtastenkürzel                                                                                                                                                                    |
| S B                                                                                                                                                                                     |
| Eingeführt in Version                                                                                                                                                                   |
| -                                                                                                                                                                                       |
| Siehe auch                                                                                                                                                                              |
| [SheetMetal Entlastungsausschnitt hinzufügen](/SheetMetal_AddRelief/de "SheetMetal AddRelief/de"), [SheetMetal Stoß hinzufügen](/SheetMetal_AddJunction/de "SheetMetal AddJunction/de") |
|                                                                                                                                                                                         |

## Beschreibung

Der Befehl ![](/images/SheetMetal_AddBend.svg) Biegung hinzufügen tauscht scharfe Kanten zwischen zwei Abschnitten (Grundplatte/Kanten/Falze) eines SheetMetal-Objekts gegen runde Biegungen aus. Ohne diese Bögen wären das Objekt nicht abwickelbar.

Dieser Befehl ist der dritte von drei Schritten, um ein Schalenobjekt, das mit dem Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") oder [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erzeugt wurde, in ein abwickelbares SheetMetal-Objekt umzuwandeln:

1. [SheetMetal Entlastungsausschnitt hizufügen](/SheetMetal_AddRelief/de "SheetMetal AddRelief/de")
2. [SheetMetal Stoß hinzufügen](/SheetMetal_AddJunction/de "SheetMetal AddJunction/de")
3. SheetMetal Biegung hinzufügen

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)

Biegung hinzufügen - Scharfe Kanten durch Bögen ersetzen

## Anwendung

1. Eine oder mehrere Kanten auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/SheetMetal_AddBend.svg) Bogen einfügen drücken.
   - Den Menüeintrag **SheetMetal → ![](/images/SheetMetal_AddBend.svg) Bogen einfügen** auswählen.
   - Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **SheetMetal → ![](/images/SheetMetal_AddBend.svg) Bogen einfügen** im Kontextmenü auswählen.
   - Das Tastaturkürzel S dann B.
3. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Eigenschaften des Bogens an der scharfkantigen Ecke** wird geöffnet (eingeführt in Version 0.5.00).
4. Wahlweise die Schaltfläche Auswahl drücken, um weitere Kanten auszuwählen.
   - Die Schaltfläche Vorschau drücken, um die Auswahl abzuschließen und die Änderungen anzuzeigen.
5. Wahlweise die Parameter im Aufgaben-Fenster anpassen.
6. Die Schaltfläche OK rücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
7. Ein **SolidBend**-Objekt wird erstellt und enthält einen neuen Bogen an jeder ausgewählten Kante.
8. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

![](/images/SheetMetal_ConvertShellObject-07.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-08.png)

## Hinweise

Die Befehle ![](/images/SheetMetal_AddRelief.svg) **[Entlastungsausschnitt hinzufügen](/SheetMetal_AddRelief/de "SheetMetal AddRelief/de")**, ![](/images/SheetMetal_AddJunction.svg) **[Stoß hinzufügen](/SheetMetal_AddJunction/de "SheetMetal AddJunction/de")** und ![](/images/SheetMetal_AddBend.svg) **Biegung hinzufügen** funktionieren am besten mit hohlen Quadern, d.h. Schalenobjekten mit einer konstanten Wandstärke und nur 90° Winkeln zwischen den Flächen.

Siehe [SheetMetal Entlastungsausschnitt hinzufügen](/SheetMetal_AddRelief/de#Hinweise "SheetMetal AddRelief/de") für Hinweise zur Erstellung von Schalenobjekten aus Quadern.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-SolidBend-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

- Daten-Eigenschaft**base Object** (`LinkSub`): "Base object". Verknüpfungen zu den Kanten, die gebogen werden sollen.
- Daten-Eigenschaft**radius** (`Length`): "Bend Radius". Standardwert: `1,00 mm`.
- Daten-Eigenschaft**thickness** (`Length`): "Thickness of sheetmetal". Standardwert: `1,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddBend/de&oldid=1545433>"
