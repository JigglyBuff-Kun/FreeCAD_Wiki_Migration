---
title: PartDesign LinearesMuster
---
|  |
| --- |
| PartDesign LinearesMuster |
| Menüeintrag |
| Part Design → Muster anwenden → Lineares Muster |
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

Das Werkzeug ![](/images/PartDesign_LinearPattern.svg) **PartDesign LinearesMuster** erstellt aus einem oder mehreren Formelementen ein lineares Muster.

![](/images/PartDesign_LinearPattern_example.svg)

Ein L-förmiger Block (B), der auf einer Grundplatte (A, auch als *Träger* bezeichnet) angebracht ist, wird für ein lineares Muster verwendet. Das Ergebnis (C) ist rechts dargestellt.

## Anwendung

### Erstellen

1. Wahlweise den gewünschten Körper [aktivieren](/PartDesign_Body/de#Aktiver_Status "PartDesign Body/de") .
2. Wahlweise ein oder mehrere Formelemente in der [Baumansicht](/Tree_view/de "Tree view/de") oder in der [3D-Ansicht](/3D_view "3D view") auswählen.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/PartDesign_LinearPattern.svg) Lineares Muster drücken.
   * Den Menüeintrag **Part Design → Muster anwenden → ![](/images/PartDesign_LinearPattern.svg) Lineares Muster** auswähen.
4. Ist kein Körper aktiv und es sind zwei oder mehr Körper im Dokument vorhanden, wird der Dialog **Aktiver Körper erforderlich** geöffnet und zeigt an, dass einer aktiviert werden muss. Gibt es nur einen einzigen Körper, wird dieser automatisch aktiviert.
5. Wurde kein Formelement ausgewählt, wird der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") **Element auswählen** geöffnet: Ein oder mehrere (mit gedrücker Ctrl-Taste) Formelemente in der Liste auswählen und die Schaltfläche OK drücken.
6. Der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") **Parameter des linearen Musters** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
7. Die Schaltfläche OK drücken, um zu beenden.

### Bearbeiten

1. Eine der folgenden Möglichkeiten auswählen:
   * Ein Doppelklick auf das LinearPattern-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de").
   * Ein Rechtsklick auf das LinearPattern-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") und die Menüoption **Lineares Muster bearbeiten** im Kontextmenü auswählen.
2. Der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") **Parameter des linearen Musters** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Die Schaltfläche OK drücken, um zu beenden.

## Optionen

* Modus auswählen:
  + **Körper transformieren**: Transformiert die Form des gesamten Körpers (Standardeinstellung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
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
    - Wenn ein Muster mehrere Formelemente enthält, kann deren Reihenfolge wichtig sein. Siehe [PartDesign PolaresMuster](/PartDesign_PolarPattern/de#Formelemente_ordnen "PartDesign PolarPattern/de").
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
* [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Den **Modus** der Länge eingeben:
  + **Gesamtlänge**: Die **Länge** eingeben, die von einem gegebenen Punkt des Originals bis zum selben Punkt auf der letzten Instanz gemessen wird.
  + [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): **Versetzen**: Den **Abstand** eingeben, der von einem gegebenen Punkt des Originals bis zum selben Punkt auf der folgenden Instanzen gemessen wird. Für n Objekte: Gesamtlänge = (n - 1) \* Abstand.
* Die **Anzahl** (inklusive des originalen Formelements) eingeben.
* Ist die Checkbox **Ansicht aktualisieren** aktiviert, wird die Ansicht in Echtzeit aktualisiert.

## Einschränkungen

Siehe [PartDesign PolarPattern](/PartDesign_PolarPattern#Limitations "PartDesign PolarPattern").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_LinearPattern/de&oldid=1485480>"