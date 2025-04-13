---
title: SheetMetal Prägen
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                                          |
| ------------------------------------------------------------------------ |
| SheetMetal Prägen                                                        |
| Menüeintrag                                                              |
| SheetMetal → Make Forming in Wall                                        |
| Arbeitsbereich                                                           |
| [Blech (SheetMetal)](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel                                                     |
| M F                                                                      |
| Eingeführt in Version                                                    |
| -                                                                        |
| Siehe auch                                                               |
| _Keiner_                                                                 |
|                                                                          |

## Beschreibung

DerBefehl ![](/images/SheetMetal_Forming.svg) **Prägen** erstellt ein geprägtes Formelement in einer Blechfläche und verwendet dafür ein separates Festkörperobjekt .

Die rückseitige Fläche des formgebenden Festkörpers und die zu prägenden Fläche werden benutzt, um den Festkörper zu platzieren und auszurichten, d.h. ihre lokalen Koordinatensysteme haben standardmäßig den gleichen Ursprung und die gleiche Ausrichtung.  
 Der Winkel um die Z-Achse und der Versatz in X-, Y- und Z-Richtung lassen sich durch ändern ihrer Werte im [Eigenschafteneditor](/Property_editor/de "Property editor/de") einstellen.

Eine Skizze kann hinzugefügt werden, um das eingeprägte Formelement zu vervielfältigen und in regelmäßigen oder unregelmäßigen Mustern einzufügen (unter Verwendung der Mittelpunkte von Kreisen oder Kreisbögen).

Eine kleine Auswahl von Objekten, die erstellt werden können:

![](/images/SheetMetal_Forming-08.png)
![](/images/SheetMetal_Forming-09.png)  
![](/images/SheetMetal_Forming-10.png)
![](/images/SheetMetal_Forming-11.png)

Durchprägungen, Kiemen, Durchzüge, Stege

## Anwendung

Es ist darauf zu achten, dass das Body-Objekt, welches das zu prägende Objekt enthält, aktiviert ist. Bei Bedarf kann es per Doppelklick in der [Baumansicht](/Tree_view/de "Tree view/de") aktiviert werden.

### Durchprägung

1. Eine Fläche des SheetMetal-Objekts auswählen, die geprägt (durchgesetzt) werden soll.
2. Drücken und halten der Strg-Taste (oder der Command-Taste bei macOS).
3. Die **Unterseite** (Rückseite) des formgebenden Festkörpers zur Auswahl hinzufügen.
4. Strg-Taste (bzw. Command-Taste) loslassen.
5. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/SheetMetal_Forming.svg) Prägen drücken.
   - Den Menüeintrag **SheetMetal → ![](/images/SheetMetal_Forming.svg) Prägen** auswählen.
   - Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **SheetMetal → ![](/images/SheetMetal_Forming.svg) Prägen** im Kontextmenü auswählen.
   - Das Tastaturkürzel M dann F.
6. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Parameter des Prägewerkzeugs** wird geöffnet (eingeführt in Version 0.5.00).
7. Wahlweise die Schaltfläche Auswahl drücken, um weitere Eckpunkte auszuwählen.
   - Die Schaltfläche Vorschau drücken, um die Auswahl abzuschließen und die Änderungen anzuzeigen.
8. Wahlweise die Parameter im Aufgaben-Fenster anpassen.
9. Die Schaltfläche OK rücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
10. Ein **WallForming**-Objekt wird im Mittelpunkt der ausgewählten zu prägenden Fläche erstellt.
11. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

### Kiemen

1. Eine Fläche des SheetMetal-Objekts auswählen, die geprägt (durchgesetzt) werden soll.
2. Drücken und halten der Strg-Taste (oder der Command-Taste bei macOS).
3. Die **Unterseite** (Rückseite) des formgebenden Festkörpers zur Auswahl hinzufügen.
4. Eine **Seitenfläche**, die an die Unterseite angrenzt zur Auswahl hinzufügen, um den Bereich zu markieren, der aufgeschnitten werden soll.
5. Strg-Taste (bzw. Command-Taste) loslassen.
6. Den Befehl aufrufen und den weiteren Schritten folgen, wie oben beschrieben.

### Steg

1. Eine Fläche des SheetMetal-Objekts auswählen, die geprägt (durchgesetzt) werden soll.
2. Drücken und halten der Strg-Taste (oder der Command-Taste bei macOS).
3. Die **Unterseite** (Rückseite) des formgebenden Festkörpers zur Auswahl hinzufügen.
4. Eine **Seitenfläche**, die an die Unterseite angrenzt, zur Auswahl hinzufügen, um die Position des ersten Schnittes zu markieren.
5. Die gegenüberliegende **Seitenfläche**, die an die Unterseite angrenzt, zur Auswahl hinzufügen, um die Position des zweiten Schnittes zu markieren.
6. Strg-Taste (bzw. Command-Taste) loslassen.
7. Den Befehl aufrufen und den weiteren Schritten folgen, wie oben beschrieben.

### Durchzug

1. Eine Fläche des SheetMetal-Objekts auswählen, die geprägt und gestanzt werden soll.
2. Drücken und halten der Strg-Taste (oder der Command-Taste bei macOS).
3. Die **Unterseite** (Rückseite) des formgebenden Festkörpers zur Auswahl hinzufügen.
4. Die der Unterseite gegenüberliegende **Oberseite** zur Auswahl hinzufügen, um den Bereich zu markieren, der ausgestanzt werden soll.
5. Strg-Taste (bzw. Command-Taste) loslassen.
6. Den Befehl aufrufen und den weiteren Schritten folgen, wie oben beschrieben.

### Verfvielfältigen und Anordnen

Um das geprägte Formelement zu vervielfältigen und nach einem Muster anzuordnen, kann eine **Skizze'\*, die Kreise und Bögen enthält, zu der Eigenschaft Daten-Eigenschaft\*\***Sketch **des\*** **WallForming**-Objekts hinzugefügt werden. Diese Anordnungsskizze muss komplanar zu der zu prägenden Fläche sein.

Die Mittelpunkte der Kreise und Bögen werden verwendet, um Positionen vorzugeben, an denen Instanzen der geprägten Formelemente eingesetzt werden; sie haben keinen Einfluss auf die Ausrichtung der Instanzen.

Die Ausrichtung hängt weiterhin von der Ausrichtung der zuerst ausgewählten Fläche ab.

### Ausrundungen hinzufügen

1. Zur Arbeitsumgebung ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") wechseln.
2. Eine Kante auf der Oberseite des SheetMetal-Objekts auswählen, die verrundet werden soll.
3. Den Befehl ![](/images/PartDesign_Fillet.svg) [Verrundung](/PartDesign_Fillet/de "PartDesign Fillet/de") aktivieren durch:
   - Die Schaltfläche ![](/images/PartDesign_Fillet.svg) [Verrundung](/PartDesign_Fillet/de "PartDesign Fillet/de")
   - Den Menüeintrag **Teile-Konstruktion → Modifikationen → ![](/images/PartDesign_Fillet.svg)Verrundung**
4. Die Eigenschaft des Fillet-Objekts Daten-Eigenschaft**Refine** auf `true` setzen. Dies ist wichtig für die nächste Verrundung.
5. Eine Kante auf der Unterseite des SheetMetal-Objekts auswählen, die verrundet werden soll.
6. Den Befehl ![](/images/PartDesign_Fillet.svg) [Verrundung](/PartDesign_Fillet/de "PartDesign Fillet/de") aktivieren (siehe oben)

## Hinweise

Die geprägte Geometrie ist nicht auf ebene Flächen und zylindrische Verbindungen begrenzt, und daher **ist**, nachdem so eine Geometrie zu einem SheetMetal-Objekt hinzugefügt wurde, **das Objekt nicht länger abwickelbar**.

Die Prägung kann deaktiviert werden (durch setzen der Eigenschaft Daten-Eigenschaft**Suppress Feature** auf `true`), um das Objekt abzuwickeln, aber nachfolgende Verrundungen verlieren die ihnen zugrundeliegenden Kanten und werden als fehlerhaft gekennzeichnet, wenn die Prägung wieder aktiviert wird.

Prägen und Verrunden sollten die letzten Schritte der Erstellung eines SheetMetal-Objekts sein.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-WallForming-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

- Daten-Eigenschaft**Suppress Feature** (`Bool`): "Suppress Forming Feature". Prägung unterdrücken. Standardwert ist `false`.
- Daten-Eigenschaft**angle** (`Angle`): "Tool Position Angle". Winkel des formgebenden Werkzeugs. Standardwinkel: `0,00°`.
- Daten-Eigenschaft**base Object** (`LinkSub`): "Base Object". Verknüpfung zu der ebenen Fläche, die geprägt werden soll.
- Daten-Eigenschaft**offset** (`VectorDistance`): "Offset from Center of Face". Abstand vom Flächenzentrum. Standard: `[0,00 mm, 0,00 mm, 0,00 mm]`.
- Daten-Eigenschaft**thickness** (`Distance`): "Thickness of Sheetmetal". Dicke des Basiselements in der Daten-Eigenschaft (versteckt)**Base Feature**.
- Daten-Eigenschaft**tool Object** (`LinkSub`): "Forming Tool Object". Verknüpfung zu der ebenen Fläche, die verwendet wird, um das formgebende Werkzeug zu positionieren.

Parameters1

- Daten**Sketch** (`Link`): "Point Sketch on Sheetmetal". Verknüpfung zu der Skizze, die die Informationen enthält, wie die Instanzen des formgebenden Werkzeugs vervielfältigt und verteilt werden. (Die Mittelpunkte von Kreisen und Bögen werden verwendet, um die Instanzen zu erstellen und zu positionieren)

## Beispiel

![](/images/SheetMetal_Forming-01.png) ![](/images/SheetMetal_Forming-02.png)

Eine sechsseitige Schale mit geprägtem Mittelteil

### Vorbereitung

Diese Schale besteht aus einem gekanteten Blechobjekt und einem durchgeprägten Formelement; beide müssen schon fertig vorbereitet sein.

Es ist hier nicht nötig mit komplanaren Skizzen zu arbeiten.

![](/images/SheetMetal_Forming-03.png)

Blechschale und prägendes Objekt

### Arbeitsablauf

1. Die Fläche des SheetMetal-Objekts auswählen, die eingeprägt werden soll.
2. Die **Rückseite** des formgebenden Objekts auswählen  
    (Nicht vergessen, dass der zu prägende **und** der formgebende Festkörper ausgewählt sein müssen. Die dem Betriebssystem entsprechende Mehrfachauswahl aktivieren: Control-Taste bzw. Command-Taste.)  
   ![](/images/SheetMetal_Forming-04.png)
3. Schaltfläche ![](/images/SheetMetal_Forming.svg) Prägen drücken  
   oder Tastenkürzel M dann F verwenden  
   ![](/images/SheetMetal_Forming-05.png)
4. Die scharfen Kanten verrunden:
   - Die Schale umdrehen und eine oder mehrere Kanten für die kleineren Innenradien auswählen
   - Schaltfläche ![](/images/PartDesign_Fillet.svg) [PartDesign Verrunden](/PartDesign_Fillet/de "PartDesign Fillet/de") drücken  
     ![](/images/SheetMetal_Forming-12.png) \*_-->_- ![](/images/SheetMetal_Forming-02.png)
   - Die Schale wieder umdrehen und eine oder mehrere Kanten für die größeren Außenradien auswählen
   - Schaltfläche ![](/images/PartDesign_Fillet.svg) [PartDesign Verrunden](/PartDesign_Fillet/de "PartDesign Fillet/de") drücken  
     ![](/images/SheetMetal_Forming-13.png) \*_-->_- ![](/images/SheetMetal_Forming-01.png)
     Fertig!
5. Ausrichtung und Position verändern (sollte vor dem Verrunden erfolgen)
   - Aktivieren des ![](/images/SheetMetal_Forming.svg) WallForming-Objekts im [Konstruktionsbaum](/Tree_view/de "Tree view/de")
   - Den Wert der Daten-Eigenschaft**angle** auf z.B. 45° setzen  
      ![](/images/SheetMetal_Forming-14.png)
   - Den Wert der Daten-Eigenschaft**offset, x** auf z.B. größer als 0 setzen  
      ![](/images/SheetMetal_Forming-06.png)  
      Hier sieht man deutlich, dass es nicht sinnvoll ist, die geprägte Geometrie in eine Bereich außerhalb der gewählte Fläche zu verschieben.
   - Den Wert der Daten-Eigenschaft**offset, z** auf z.B. größer als 0 zu setzen ist auch nicht besser:  
      ![](/images/SheetMetal_Forming-07.png)  
      Wenigstens stürzt FreeCAD nicht ab, wenn ein Teil aus zwei einzelnen Körpern besteht...
6. Einige Hinweise
   1. Die Höhe des formgebenden Festkörpers bestimmt die Tiefe der geprägten Form.  
      Das heißt, dass das Ändern des Parameters **offset, z** nicht das gewünschte Ergebnis bringt.
   2. Die geprägte Geometrie ist ein Schalenobjekt, d.h. sie hat eine konstante Wandstärke.  
      Und deshalb muss die Oberfläche des formgebenden Körper aufdickbar sein, andernfalls wird das Werkzeug keine Prägung erzeugen können.
   3. Wenn die Außenkanten zuerst verrundet werden, kann das Objekt in in mehrere Teile aufgetrennt werden, wenn die Radien zu groß eingestellt wurden.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Forming/de&oldid=1545498>"
