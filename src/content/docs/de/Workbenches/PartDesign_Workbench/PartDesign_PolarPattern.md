---
title: PartDesign PolaresMuster
---
|  |
| --- |
| PartDesign PolaresMuster |
| Menüeintrag |
| Part Design → Muster anwenden → Polares Muster |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [PartDesign MehrfachTransformation](/PartDesign_MultiTransform/de "PartDesign MultiTransform/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/PartDesign_PolarPattern.svg) **PolaresMuster** erstellt aus einem oder mehreren Formelementen ein polares Muster (d.h. eine Reihe von Objekten, die auf einem Kreisring oder Kreisbogen um den Mittelpunkt (Pol) herum gleichmäßig verteilt werden.)

![](/images/PartDesign_PolarPattern_example.png)

Ein Langloch (Formelement Tasche) (B), das in einem Grundkörper (A, auch als Träger bezeichnet) eingebracht ist, wird für ein polares Muster verwendet. Das Ergebnis (C) ist rechts dargestellt.

## Anwendung

### Erstellen

1. Wahlweise den gewünschten Körper [aktivieren](/PartDesign_Body/de#Aktiver_Status "PartDesign Body/de").
2. Wahlweise ein oder mehrere Formelemente in der [Baumansicht](/Tree_view/de "Tree view/de") oder in der [3D-Ansicht](/3D_view "3D view") auswählen.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/PartDesign_PolarPattern.svg) Polares Muster drücken.
   * Den Menüeintrag **Part Design → Muster anwenden → ![](/images/PartDesign_PolarPattern.svg) Polares Muster** auswählen.
4. Ist kein Körper aktiv und es sind zwei oder mehr Körper im Dokument vorhanden, wird der Dialog **Aktiver Körper erforderlich** geöffnet und zeigt an, dass einer aktiviert werden muss. Gibt es nur einen einzigen Körper, wird dieser automatisch aktiviert.
5. Wurde kein Formelement ausgewählt, wird der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") **Element auswählen** geöffnet: Ein oder mehrere (mit gedrücker Ctrl-Taste) Formelemente in der Liste auswählen und die Schaltfläche OK drücken.
6. Der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") **Parameter des polaren Musters** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
7. Die Schaltfläche OK drücken, um zu beenden.

### Bearbeiten

1. Eine der folgenden Möglichkeiten auswählen:
   * Ein Doppelklick auf das PolarPattern-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de").
   * Ein Rechtsklick auf das PolarPattern-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") und die Menüoption **Polares Muster bearbeiten** im Kontextmenü auswählen.
2. Der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") **Parameter des polaren Musters** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Die Schaltfläche OK drücken, um zu beenden.

## Optionen

* Modus auswählen:
  + **Körper transformieren**: Transformiert die Form des gesamten Körpers (Standardeinstellung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
  1. Die Schaltfläche Add feature drücken.
  + **Werkzeugformen transformieren**: Transformiert die einzelnen Forme der ausgewählten Formelemente.
    - Formelemente hinzufügen:
      1. Die Schaltfläche Element hinzufügen drücken.
      2. Ein Formelement in der [Baumansicht](/Tree_view/de "Tree view/de") oder in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
      3. Wiederholen, um weitere Formelemente hinzuzufügen.
    - Formelemente entfernen:
      1. Die Schaltfläche Element entfernen drücken.
      2. Eine der folgenden Möglichkeiten wählen:
         * Ein Formelement in der [Baumansicht](/Tree_view/de "Tree view/de") oder in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
         * Ein Formelement in der oberen Liste auswählen und die Del-Taste drücken.
         * Mit der rechten Maustaste ein Formelement in der oberen Liste anklicken und **Entfernen** aus dem Kontextmenü auswählen.
      3. Wiederholen, um weitere Formelemente zu entfernen.
    - Wenn ein Muster mehrere Formelemente enthält, kann deren Reihenfolge wichtig sein. Siehe [Formelemente ordnen](#Formelemente_ordnen).
* Die **Richtung** des Musters festlegen:
  + **Normal zur Skizzenachse**: Die Z-Achse der Skizze (steht nur für skizzenbasierte Formelemente zur Verfügung).
  + **Vertikale Skizzenachse**: Die Y-Achse der Skizze (wie vorher).
  + **Horizontale Skizzenachse**: Die X-Achse der Skizze (wie vorher).
  + **Konstruktionslinie**: Ein eigener Eintrag für jede Hilfslinie in der Skizze (wie vorher).
  + **Basis X-Achse**: Die X-Achse des Körpers.
  + **Basis Y-Achse**: Die Y-Achse des Körpers.
  + **Basis Z-Achse**: Die Z-Achse des Körpers.
  + **Wähle Referenz auswählen...**: Eine [Bezugslinie](/PartDesign_Line/de "PartDesign Line/de") in der [Baumansicht](/Tree_view/de "Tree view/de") bzw. eine  [Bezugslinie](/PartDesign_Line/de "PartDesign Line/de") oder Kante in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
* Die Checkbox **Richtung umkehren** aktivieren, um das Muster umzukehren.
* [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Den **Modus** des Winkels eingeben:
  + **Gesamtwinkel**: Den **Winkel** eingeben. Ist der Winkel kleiner als 360°, werden das Original und die Instanzen gleichmäßig verteilt, von 0° (Original) bis zum angegebenen Winkel (letzte Instanz). Ist der Winkel 360°, werden alle Objekte gleichmäßig auf einem Kreisring verteilt. Für n Objekte ist ein Winkel von 360° gleich dem Winkel aus 360° \* (1 - 1/n).
  + [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): **Versatzwinkel**: Den **Teilwinkel** eingeben, der von einem gegebenen Punkt des Originals bis zum selben Punkt auf der folgenden Instanz gemessen wird. Für n Objekte: Gesamtwinkel = (n - 1) \* Teilwinkel.
* Die **Anzahl** (inklusive des originalen Formelements) eingeben.
* Ist die Checkbox **Ansicht aktualisieren** aktiviert, wird die Ansicht in Echtzeit aktualisiert.

## Formelemente ordnen

Wenn einige der ausgewählten Formelemente additiv und andere subtraktiv sind, kann ihre Reihenfolge letztlich das Ergebnis beeinflussen. Die Reihenfolge kann durch bewegen einzelner Formelemente innerhalb der Liste verändert werden.

![](/images/PartDesign_feature-order.gif)

Auswirkung der Formelement-Reihenfolge

## Einschränkungen

* Jede Oberfläche im Muster die nicht mit dem Elternteil überlappt, wird ausgeschlossen. Dadurch wird sichergestellt, dass der PartDesign Teil immer nur aus einem zusammenhängenden Körper besteht.
* Die PartDesign Muster sind nicht so ausgereift wie ihre Draft Gegenstücke. Bei einer großen Anzahl von Objekten sollte man überlegen [Draft Polare Anordnung](/Draft_PolarArray/de "Draft PolarArray/de") in Kombination mit einer logischen Part Operation, zu verwenden. Da man dazu PartDesign verläßt, können erhebliche Änderungen im Modell notwendig sein. Man kann nicht einfach im PartDesign Modell im gleichen Körper weitermachen. Ein Beispiel findet man in diesem [Foren-Thema](https://forum.freecadweb.org/viewtopic.php?f=3&t=55192).
* Ein Muster kann nicht direkt wiederum gemustert werden, um ein polares oder lineares Muster, oder ein Spiegelbild zu bilden. Um dies zu machen verwende [PartDesign MehrfachTransform](/PartDesign_MultiTransform/de "PartDesign MultiTransform/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_PolarPattern/de&oldid=1541345>"