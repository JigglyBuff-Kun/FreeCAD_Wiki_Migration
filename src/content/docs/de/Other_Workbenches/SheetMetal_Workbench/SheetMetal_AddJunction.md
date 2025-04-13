---
title: SheetMetal StoßHinzufügen
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SheetMetal StoßHinzufügen                                                                                                                                                          |
| Menüeintrag                                                                                                                                                                        |
| SheetMetal → Make Junction                                                                                                                                                         |
| Arbeitsbereich                                                                                                                                                                     |
| [SheetMetal (Blech)](/SheetMetal_Workbench/de "SheetMetal Workbench/de")                                                                                                           |
| Standardtastenkürzel                                                                                                                                                               |
| S J                                                                                                                                                                                |
| Eingeführt in Version                                                                                                                                                              |
| -                                                                                                                                                                                  |
| Siehe auch                                                                                                                                                                         |
| [SheetMetal Entlastungsausschnitt hinzufügen](/SheetMetal_AddRelief/de "SheetMetal AddRelief/de"), [SheetMetal Biegung hinzufügen](/SheetMetal_AddBend/de "SheetMetal AddBend/de") |
|                                                                                                                                                                                    |

## Beschreibung

Der Befehl ![](/images/SheetMetal_AddJunction.svg) Stoß hinzufügen erzeugt einen offenen Stoß zwischen zwei Abschnitten (Kanten/Falze) eines SheetMetal-Objekts. Ohne diese Stöße wären (zusammenhängende) Abschnitte, die mit derselben Grundplatte verbunden sind, nicht abwickelbar.

Dieser Befehl ist der zweite von drei Schritten, um ein Schalenobjekt, das mit dem Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") oder [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erzeugt wurde, in ein abwickelbares SheetMetal-Objekt umzuwandeln:

1. [SheetMetal Entlastungsausschnitt hizufügen](/SheetMetal_AddRelief/de "SheetMetal AddRelief/de")
2. SheetMetal Stoß hinzufügen
3. [SheetMetal Biegung hinzufügen](/SheetMetal_AddBend/de "SheetMetal AddBend/de")

![](/images/SheetMetal_ConvertShellObject-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-02.png)(/SheetMetal_AddRelief "SheetMetal AddRelief") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-03.png)(/SheetMetal_AddJunction "SheetMetal AddJunction") ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-04.png)(/SheetMetal_AddBend "SheetMetal AddBend")

Stoß hinzufügen - Kanten aufschneiden

## Anwendung

1. Eine oder mehrere Kanten auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/SheetMetal_AddJunction.svg) Stoß hinzufügen drücken.
   - Den Menüeintrag **SheetMetal → ![](/images/SheetMetal_AddJunction.svg) Stoß hinzufügen** auswählen.
   - Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **SheetMetal → ![](/images/SheetMetal_AddJunction.svg) Stoß hinzufügen** im Kontextmenü auswählen.
   - Das Tastaturkürzel S dann J.
3. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Stoßeigenschaften** wird geöffnet (eingeführt in Version 0.5.00).
4. Wahlweise die Schaltfläche Auswahl drücken, um weitere Kanten auszuwählen.
   - Die Schaltfläche Vorschau drücken, um die Auswahl abzuschließen und die Änderungen anzuzeigen.
5. Wahlweise die Parameter im Aufgaben-Fenster anpassen.
6. Die Schaltfläche OK rücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
7. Ein **Junction**-Objekt wird erstellt und ergibt einen Stoß an jeder ausgewählten Kante.
8. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

![](/images/SheetMetal_ConvertShellObject-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_ConvertShellObject-07.png)

## Hinweise

- Die Befehle ![](/images/SheetMetal_AddRelief.svg) **[Entlastungsausschnitt hinzufügen](/SheetMetal_AddRelief/de "SheetMetal AddRelief/de")**, ![](/images/SheetMetal_AddJunction.svg) **Stoß hinzufügen** und ![](/images/SheetMetal_AddBend.svg) **[Biegung hinzufügen](/SheetMetal_AddBend/de "SheetMetal AddBend/de")** funktionieren am besten mit hohlen Quadern, d.h. Schalenobjekten mit einer konstanten Wandstärke und nur 90° Winkeln zwischen den Flächen.
- Siehe [SheetMetal Entlastungsausschnitt hinzufügen](/SheetMetal_AddRelief/de#Hinweise "SheetMetal AddRelief/de") für Hinweise zur Erstellung von Schalenobjekten aus Quadern.

- **Stoß** (Junction) ist in diesem Falle nicht das Ergebnis dieses Werkzeuges, welches eine Lücke zischen aneinandergrenzenden ebenen Flächen ist, sondern beschreibt eher die Stelle, an der sich zwei ebene Flächen des fertigen realen Objekts treffen, um verschweißt zu werden, zum Beispiel.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-Junction-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

- Daten**base Object** (`LinkSub`): "Base Object". Verweise zu den Kanten, die die Position der Stöße bzw. Lücken bestimmen.
- Daten**gap** (`Length`): "Junction Gap". Standardwert: `2,00 mm`. Spaltweite des hinzuzufügenden Stoßes.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddJunction/de&oldid=1545514>"
