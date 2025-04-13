---
title: SheetMetal EckentlastungHinzufügen
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                                          |
| ------------------------------------------------------------------------ |
| SheetMetal EckentlastungHinzufügen                                       |
| Menüeintrag                                                              |
| SheetMetal → Add Corner Relief                                           |
| Arbeitsbereich                                                           |
| [Blech (SheetMetal)](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel                                                     |
| C R                                                                      |
| Eingeführt in Version                                                    |
| -                                                                        |
| Siehe auch                                                               |
| _Keiner_                                                                 |
|                                                                          |

## Beschreibung

Der Befehl ![](/images/SheetMetal_AddCornerRelief.svg) Eckentlastung hinzufügen fügt einen Ausschnitt zur Eckentlastung hinzu. Ein Entlastungsausschnitt wird normalerweise an Ecken erstellt, an denen sich zwei Kanten (Abstellungen, Bördel) treffen, aber der Befehl kann auch an offenen ecken Entlastungsausschnitte erstellen.

Der Befehl erstellt einen Entlastungsausschnitt zur Zeit.

![](/images/SheetMetal_AddCornerRelief-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-02.png)

Standardecke zweier Kanten → Ecke mit hinzugefügter Eckentlastung

![](/images/SheetMetal_AddCornerRelief-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-04.png)

Offene Standardecke → Offene Ecke mit hinzugefügter Eckentlastung

## Anwendung

1. Zwei Kanten einer Ecke auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/SheetMetal_AddCornerRelief.svg) Eckentlastung hinzufügen drücken.
   - Den Menüeintrag **SheetMetal → ![](/images/SheetMetal_AddCornerRelief.svg) Eckentlastung hinzufügen** auswählen.
   - Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **SheetMetal → ![](/images/SheetMetal_AddCornerRelief.svg) Eckentlastung hinzufügen** im Kontextmenü auswählen.
   - Das Tastaturkürzel C dann R.
3. Ein **CornerRelief**-Objekt wird erstell und das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Eigenschaften der Eckentlastung** wird geöffnet (eingeführt in Version 0.5.00).

   : Eine neue Eckentlastung wird an der ausgewählten Ecke hinzugefügt.

4. Wahlweise die Schaltfläche Auswahl drücken, um die Kanten erneut auszuwählen.
   - Die Schaltfläche Vorschau drücken, um die Auswahl abzuschließen und die Änderungen anzuzeigen.
5. Wahlweise erneut einen der Radioknöpfe unter **Form des Entlastungsausschnitts** auswählen:
   - Der Radioknopf **Kreisförmig** erstellt einen runden Entlastungsausschnitt.
   - Der Radioknopf **Quadratisch** erstellt einen quadratischen Entlastungsausschnitt.
   - Der Radioknopf **Sketch** erstellt einen Entlastungsausschnitt, der auf einer Skizze basiert.
     1. Die Schaltfläche Sketch drücken, um die Skizze auszuwählen.
     2. Wahlweise die Parameter **X offset** und **Y offset** einstellen.
6. Wahlweise die Radioknöpfe unter **Größe des Entlastungsausschnitts** umschalten:
   - **Absolute** auswählen und die **Größe des Entlastungsausschnitts** in mm eingeben.
   - **Relative' _auswählen und den_** _Vergrößerungsfaktor_ eingeben.
7. Wahlweise den **K-Faktor** anpassen.
8. Die Schaltfläche OK rücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
9. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

### Aufgaben-Fenster

Ein Aufgaben-Fenster wurde in Version 0.5.00 eingeführt

Ein vorhandenes CornerRelief-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken, um das Aufgaben-Fenster erneut zu öffnen und die Parameter zu bearbeiten.

![](/images/SheetMetal_AddCornerRelief-Task.png)

- Base Select: Verknüpft ausgewählte Kanten mit der Eigenschaft **base Object**.
- Die Radioknöpfe **Kreisförmig**, **Quadratisch** und **Sketch** in Kombination mit den Radioknöpfen **Absolute** und **Relative** bestimmen die Eigenschaft **Relief Sketch**.
- Wenn der Radioknopf **Sketch** ausgewählt ist, werden folgende Optionen angezeigt:
  1. Sketch: Verknüpft eine Skizze mit der Eigenschaft **Sketch**.
  2. **X Offset**: Eingabe für die Eigenschaft **XOffset**.
  3. **Y Offset**: Eingabe für die Eigenschaft **YOffset**.
- Wenn der Radioknopf **Absolute** ausgewählt ist:

  : **Relief Size**: Eingabe für die Eigenschaft **Size**.

- Wenn der Radioknopf **Relative** ausgewählt ist:

  : **Scale Factor**: Eingabe für die Eigenschaft **Size Ratio**.

- **K Factor**: Eingabe für die Eigenschaft **kfactor**.

## Formen der Entlastungsausschnitte

Die Gestalt einer Eckentlastung kann durch Einstellung der Werte ihrer Eigenschaften verändert werden.

Der Wert der Daten-Eigenschaft**ReliefSketch** kann aus einer Liste ausgewählt werden: `Circle` (default), `Circle-Scaled`, `Square`, `Square-Scaled`, `Sketch`.

- `Circle` und `Square` verwenden den Wert der Daten-Eigenschaft**Size**, um die Größe des Entlastungsausschnitts zu variieren.
- `Circle-Scaled` und `Square-Scaled` verwenden den Wert der Daten-Eigenschaft**Size Ratio**, um die Größe des Entlastungsausschnitts zu variieren.
- `Sketch` Aktiviert die Verwendung der Skizze, die in der Daten-Eigenschaft**Sketch** abgelegt ist, um die Form des Entlastungsausschnitts festzulegen.

![](/images/SheetMetal_AddCornerRelief-05.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-06.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-07.png)

Kreisförmige Entlastung (mit Standardeinstellungen) → Quadratische Entlastung (mit Standardeinstellungen) → Skizzenbasierte Entlastung

## Eine nähere Betrachtung der Größe von Entlastungsausschnitten

Um eine Vorstellung davon zu bekommen, wie und wo ein Entlastungsausschnitt platziert wird, wird die Abwicklung einer Standardecke ohne Entlastungsausschnitt erstellt.

![](/images/SheetMetal_AddCornerRelief-08.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-09.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-10.png)

Standardecke zweier Kanten → Ecke mit Abwicklungskörper → Ecke in der Draufsicht

Der nächste Schritt ist das Öffnen der Abwicklungsskizze, das Erstellen eines Kreises durch drei Punkte und das Erzeugen eines Maßes für den Radius.  
 Nun fügt man eine Eckentlastung hinzu, erstellt den dazugehörigen Abwicklungskörper und öffnet die erste Abwicklungsskizz erneut.  
 Ein konzentrischer Kreis mit 3 mm Durchmesser zeigt uns, dass wir herausgefunden haben, wie der interne Kreis platziert wird, da der neue Kreis perfekt in den Ausschnitt des Abwicklungskörpers der Eckentlastung passt.

![](/images/SheetMetal_AddCornerRelief-11.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddCornerRelief-12.png)

Standardecke mit Abwicklungsskizze → Ecke mit Standardentlastungsausschnitt und derselben Abwicklungsskizze

Der Versuch die Daten-Eigenschaft**Size** auf einen Wert unter 1,67 mm zu setzen, wird zu einem Fehler führen; jeder Wert darüber sollte funktionieren.

Die Auswahl von Circle-Scaled und das Erstellen eines weiteren Abwicklungskörpers zeigt, dass 1,67 mm auch die Basis der Daten**Size Ratio** ist.

## Hinweise

- Der K-Faktor legt der ANSI-Norm folgend fest, wo sich innerhalb der Wandstärke eines Bleches die neutrale Faser befindet.
- Die Auswahl akzeptiert mehr als zwei Kanten, aber nur die ersten zwei werden berücksichtigt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-CornerRelief-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

- Daten-Eigenschaft**ReliefSketch** (`Enumeration`): "Corner Relief Type". `Circle` (standard), `Circle-Scaled`, `Square`, `Square-Scaled`, `Sketch`.
- Daten-Eigenschaft**Size** (`Length`): "Size of Shape". Größe der Form, Standardwert: `3,00 mm`.
- Daten-Eigenschaft**Size Ratio** (`Float`): "Size Ratio of Shape". Größenverhältnis der Form, Standardwert: `1,50`.
- Daten-Eigenschaft**base Object** (`LinkSub`): "Base Object". Verweis zu dem Kantenpaar, das die Lage der Eckentlastung bestimmt.
- Daten-Eigenschaft**kfactor** (`FloatConstraint`): "Neutral Axis Position". Lage der neutralen Faser, Standardwert: `0,50`.

Parameters1

- Daten-Eigenschaft**Sketch** (`Link`): "Corner Relief Sketch".
- Daten-Eigenschaft**XOffset** (`Distance`): "Gap from side one". Abstand von der ersten Seite, Standardwert: `0,00 mm`.
- Daten-Eigenschaft**YOffset** (`Distance`): "Gap from side two". Abstand von der zweiten Seite, Standardwert: `0,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddCornerRelief/de&oldid=1545508>"
