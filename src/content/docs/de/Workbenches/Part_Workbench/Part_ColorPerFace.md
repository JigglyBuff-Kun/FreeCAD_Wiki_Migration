---
title: Part FarbeProFläche
---
|  |
| --- |
| Part FarbeProFläche |
| Menüeintrag |
| Ansicht → Farbe pro Fläche |
| Arbeitsbereich |
| [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Std Darstellung](/Std_SetAppearance/de "Std SetAppearance/de") |
|  |

## Beschreibung

Der Befehl **FarbeProFläche** passt die Anzeigeeigenschaften von ausgewählten Flächen an. Um sie für ein ganzes Objekt anzupassen, wird stattdessen *[Std Darstellung](/Std_SetAppearance/de "Std SetAppearance/de")* verwendet.

Diese Seite wurde für Version 1.0 aktualisiert.

![](/images/Part_ColorPerFace_Taskpanel.png)

Das Aufgabenfeld Erscheinungsbild pro Fläche festlegen

## Anwendung

1. Wähle ein einzelnes Objekt.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Wenn der [Arbeitsbereich Part](/Part_Workbench/de "Part Workbench/de") aktiv ist: drücke den Knopf ![](/images/Part_ColorPerFace.svg) Farbe pro Fläche.
   * Wähle die Option **Ansicht → ![](/images/Part_ColorPerFace.svg) Farbe pro Fläche** aus dem Menü.
   * Wähle die Option **![](/images/Part_ColorPerFace.svg) Aussehen flächenweise festlegen...** aus dem Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de").
3. Das **Aussehen flächenweise festlegen** Aufgabenfenster öffnet sich.
4. Wähle eine oder mehrere Flächen:
   * Halte die Taste Ctrl für die Mehrfachauswahl gedrückt.
   * Drücke optional die Schaltfläche Rechteckauswahl, klicken Sie in einen leeren Bereich und ziehe ein Rechteck auf, um alle zum Objekt gehörenden Flächen auszuwählen, die sich (teilweise) innerhalb des Rechtecks befinden. Es können mehrere Auswahlboxen festgelegt werden.
5. Führe einen der folgenden Schritte aus:
   * Wähle ein Material aus der Liste.
     1. Alternativ drücke den Knopf Editor aufrufen, um den [Material-Editor](/Material_Edit/de "Material Edit/de") aufzurufen.
   * Festlegen eines **Benutzerdefinierten Aussehens**:
     1. Drücke den Knopf ....
     2. Der **Materialeigentschaften**-Dialog wird geöffnet:  
        ![](/images/Material_Properties_Dialog.png)
     3. Die folgenden Eigenschaften können geändert werden:
        + **Umgebungsfarbe**: Farbe der Schatten auf dem Objekt.
        + **Diffuse Farbe**: Aktuelle/Basisfarbe des Objekts.
        + **Emittierende Farbe**: Farbe des vom Objekt abgestrahlten Lichts.
        + **Spiegelnde Farbe**: Farbe des Glanzlichts (Reflexion) auf einer glänzenden Oberfläche des Objekts.
        + **Glanz**
        + **Transparenz**
     4. Drücke optional die Schaltfläche Zurücksetzen, um das Erscheinungsbild auf das durch das Material definierte zu ändern.
     5. Drücken Sie optional die Schaltfläche Standard, um das Erscheinungsbild an die aktuelle [preferences](/PartDesign_Preferences/de#Shape_appearance "PartDesign Preferences/de") anzupassen.
     6. Drücke nach Abschluss den Knopf Schliessen.
   * Drücke den Knopf Standardeinstellung setzen, um das Aussehen in das durch das Material definierte zu ändern.
6. Wähle optional eine oder mehrere neue Flächen aus, deren Eigenschaften geändert werden sollen.
7. Drücke die Schaltfläche OK um das Aufgabenfenster zu schließen und den Befehl zu beenden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ColorPerFace/de&oldid=1542619>"