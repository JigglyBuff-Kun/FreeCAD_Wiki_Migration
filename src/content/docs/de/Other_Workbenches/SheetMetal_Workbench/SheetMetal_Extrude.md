---
title: SheetMetal KanteVerlängern
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                                          |
| ------------------------------------------------------------------------ |
| SheetMetal KanteVerlängern                                               |
| Menüeintrag                                                              |
| SheetMetal → Extend Face                                                 |
| Arbeitsbereich                                                           |
| [SheetMetal (Blech)](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel                                                     |
| E                                                                        |
| Eingeführt in Version                                                    |
| -                                                                        |
| Siehe auch                                                               |
| _Keiner_                                                                 |
|                                                                          |

## Beschreibung

Der Befehl ![](/images/SheetMetal_Extrude.svg) **Kante verlängern** erweitert eine Blechplatte an einer ausgewählten Kantenfläche.

Er erzeugt eine **einfache Verlängerung** in Richtung der Flächennormalen der ausgewählten Kantenfläche:

![](/images/SheetMetal_Extrude-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-02.png)

Wenn eine Konturskizze hinzugefügt wird, erzeugt er **verzahnte Geometrie** um ein Profil zu schließen:

![](/images/SheetMetal_Extrude-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-04.png)

Drei Profile mit hinzuzufügenden Konturskizzen → Drei Ergebnisse

## Anwendung

### Einfache Verlängerung

1. Eine oder mehrere Flächen auswählen, die verlängert werden sollen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/SheetMetal_Extrude.svg) Kante verlängern drücken.
   - Den Menüeintrag **Sheet Metal → ![](/images/SheetMetal_Extrude.svg) Kante verlängern** auswählen.
   - Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Sheet Metal → ![](/images/SheetMetal_Extrude.svg) Kante verlängern** im Kontextmenü auswählen.
   - Das Tastaturkürzel E.
3. Ein **Extend**-Objekt wird erstellt und das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Eigenschaften der Erweiterung** wird geöffnet (eingeführt in Version 0.5.00).
4. An jeder ausgewählten Kante wurde eine neue Flächenverlängerung angefügt.
5. Wahlweise die Schaltfläche Auswählen drücken, um Flächen hinzuzufügen oder zu entfernen.
   - Die Schaltfläche Vorschau drücken, um die Auswahl abzuschließen und die Äderungen anzuzeigen.
6. Die Parameter im Aufgaben-Fenster einstellen.
7. Die Schaltfläche OK drücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
8. Wahlweise die Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

### Aufgaben-Fenster

Ein [Aufgaben-Fenster](/Task_panel/de "Task panel/de") wurde in Version 0.5.00 eingeführt.

Ein vorhandenes Extend-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken, um das Aufgaben-Fenster erneut zu öffnen und die Parameter zu bearbeiten.

![](/images/SheetMetal_Extrude-Task.png)

- Select: Ändert die Anzahl der Flächen in der Eigenschaft **base Object**.
- **Length**: Eingabe für die Eigenschaft **length** property.
- **Offset A**: Eingabe für die Eigenschaft **gap 1** property.
- **Offset B**: Eingabe für die Eigenschaft **gap 2** property.
- **Refine**: Schaltet die Eigenschaft **Refine** um.

### Verzahnte Erweiterung

: (Eine ![](/images/Workbench_Sketcher.svg) [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") für die Verzahnung vorbereiten)

1. Die Kantenfläche auswählen, die erweitert werden soll.
2. Den Befehl aktivieren, wie oben beschrieben.
3. Die Schaltfläche OK drücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
4. Im [Eigenschafteneditor](/Property_editor/de "Property editor/de") die Schaltfläche ... der Daten-Eigenschaft**Sketch** drücken.
5. Das Dialogfenster "Link" wird geöffnet.
   - Die vorbereitete Skizze in der Liste auswählen.
   - Die Schaltfläche OK drücken, um das Dialogfenster zu schließen.
6. Die Daten-Eigenschaft**Ausschneiden** auf `true` setzen, um Ausschnitte zu erstellen, die Platz für die Erweiterungen schaffen.
7. Den Wert der Daten-Eigenschaft**Offset** verändern, um den Spalt um die Erweiterung herum einzustellen.

![](/images/SheetMetal_Extrude-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-04.png)

Drei Profile → Position der Skizzen → Ergebnisse ohne Ausschnitte → Endergebnisse

### Hinweise

- Eine Skizze kann mehr als nur eine Kontur enthalten.

: Nach dem Einfügen einer Skizze muss mindestens eine ihrer Konturen eine gegenüberliegende Fläche wenigstens berühren, andernfalls kann das Werkzeug weder eine Erweiterung noch einen Ausschnitt erzeugen.

: Nur eine Kontur, die eine gegenüberliegende Fläche berührt, reicht um Erweiterungsgeometrie von allen Konturen einer Skizze zu erzeugen.

- Jeder Ausschnitt hat die Gestalt eines Quaders, egal welche form die zugehörige Konturskizze hat.

- Alle Formen außer Rechtecken können sich etwas merkwürdig verhalten und auch wenn das Objekt abgewickelt werden kann, wird das Ergebnis anders ausfallen als erwartet.

![](/images/SheetMetal_Extrude-07.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Extrude-08.png)

Drei Konturskizzen und ihre resultierenden Erweiterungen: einzelne Dreiecksplatte mit rechteckigem Ausschnitt, Kreis ohne Spalt → Abwicklungskörper wurde an unerwarteter Stelle aufgetrennt

- Für eine Erweiterung wird empfohlen, die Daten-Eigenschaft**Refine** auf `true` (default) gesetzt zu lassen.

- Die Operation KanteVerlängern mit einer verknüpften Skizze könnte aufgrund von Komplanar-Problemen versagen, wenn die Fläche auf der Skizzenseite und die Fläche auf der gegenüberliegenden Seite komplanar sind aber mit gegensätzlichen Ausrichtungen. Ein kleiner Versatz könnte in so einem Fall helfen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-Extend-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

- Daten-Eigenschaft**base Object** (`LinkSub`): "Base object". Verweis zu der ebenen Fläche, die erweitert werden soll.
- Daten-Eigenschaft**gap1** (`Distance`): "Gap from the left side". Abstand von der linken Seite, Standardwert: `0,00 mm`.
- Daten-Eigenschaft**gap2** (`Distance`): "Gap from the right side". Abstand von der rechten Seite, Standardwert: `0,00 mm`.
- Daten-Eigenschaft**length** (`Length`): "Length of Wall". Kantenlänge, Standardwert: `10,00 mm`.

Parameters Ext.

- Daten-Eigenschaft**Offset** (`Distance`): "Offset for subtraction". Abstand zur Aussparung, Standardwert: `20,00 µm`.
- Daten-Eigenschaft**Refine** (`Bool`): "Use Refine". Standardwert: `true`.
- Daten-Eigenschaft**Sketch** (`Link`): "Wall Sketch". Skizze für den zu erweiternden Bereich
- Daten-Eigenschaft**Use Subtraction** (`Bool`): "Use Subtraction". Aussparung anwenden, Standardwert: `false`

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Extrude/de&oldid=1545518>"
