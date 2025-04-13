---
title: PartDesign MehrfachTransformation
---
|  |
| --- |
| PartDesign MehrfachTransformation |
| Menüeintrag |
| Part Design → Muster anwenden → Mehrfach-Transformation erstellen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [PartDesign Spiegeln](/PartDesign_Mirrored/de "PartDesign Mirrored/de"), [PartDesign LinearesMuster](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de"), [PartDesign PolaresMuster](/PartDesign_PolarPattern/de "PartDesign PolarPattern/de"), [PartDesign Skalieren](/PartDesign_Scaled/de "PartDesign Scaled/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/PartDesign_MultiTransform.svg) **PartDesign MehrfachTransformation** erstellt ein Muster aus einem oder mehreren Formelementen. Das Muster kann mehrere Transformationen enthalten, wobei jede folgende Transformation auf das Ergebnis der vorherigen Transformation angewendet wird.

Folgende Transformationen stehen zur Verfügung: ![](/images/PartDesign_Mirrored.svg) [Spiegeln](/PartDesign_Mirrored/de "PartDesign Mirrored/de"), ![](/images/PartDesign_LinearPattern.svg) [LinearesMuster](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de"), ![](/images/PartDesign_PolarPattern.svg) [PolaresMuster](/PartDesign_PolarPattern/de "PartDesign PolarPattern/de") und ![](/images/PartDesign_Scaled.svg) [SkalierteTransformation](/PartDesign_Scaled/de "PartDesign Scaled/de"). Die ersten drei stehen auch als separate Werkzeuge zur Verfügung.

![](/images/Multitransform_example.png)

Ein Lochmuster, das aus einem einzelnen Loch erstellt wurde, wobei zuerst ein lineares Muster mit 2 Vorkommen und danach ein polares Muster mit 8 Vorkommen angewendet wurde.

## Anwendung

### Erstellen

1. Wahlweise den korrekten Körper [aktivieren](/PartDesign_Body/de#Aktiver_Status "PartDesign Body/de").
2. Wahlweise können ein oder mehrere Elemente in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt werden.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/PartDesign_MultiTransform.svg) Mehrfach-Transformation erstellen drücken.
   * Den Menüeintrag **Part Design → Muster anwenden → ![](/images/PartDesign_MultiTransform.svg) Mehrfach-Transformation erstellen** auswählen.
4. Falls kein Körper aktiviert ist und sich zwei oder mehr Körper im Dokument befinden, öffnet sich der Dialog **Aktiver Körper erforderlich** mit der Aufforderung einen zu aktivieren. Wenn nur ein einziger Körper vorhanden ist, wird dieser automatisch aktiviert.
5. Wenn kein Formelement ausgewählt wurde, öffnet sich das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Element auswählen**: Ein oder mehrere (Ctrl-Taste gedrückt halten) aus der Liste auswählen und die Schaltfläche OK drücken.
6. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Parameter der Mehrfach-Transformation** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
7. Zum Fertigstellen die Schaltfläche OK am oberen Rand drücken.

### Bearbeiten

1. Eine der folgenden Möglichkeiten auswählen:
   * Ein Doppelklick auf das MultiTransform-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de").
   * Ein Rechtsklick auf das MultiTransform-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") und die Menüoption **MultiTransform bearbeiten** im Kontextmenü auswählen.
2. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Parameter der Mehrfach-Transformation** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Zum Fertigstellen die Schaltfläche OK am oberen Rand drücken.

### Vorhandene Transformationen kombinieren

Es ist möglich ein MultiTransform-Objekt von vorhandenen Transformationen wie [Spiegeln](/PartDesign_Mirrored/de "PartDesign Mirrored/de"), [Lineares Muster](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de") und [Polares Muster](/PartDesign_PolarPattern/de "PartDesign PolarPattern/de") zu erstellen.

1. Die Daten-Eigenschaft**Originals** der bestehenden Transformationen überprüfen, ob sie auf dieselben Formelemente angewendet werden.
2. Diese Formelemente in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
3. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/PartDesign_MultiTransform.svg) Mehrfach-Transformation erstellen drücken.
   * Den Menüeintrag **Part Design → Muster anwenden → ![](/images/PartDesign_MultiTransform.svg) Mehrfach-Transformation erstellen** auswählen.
4. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Parameter der Mehrfach-Transformation** wird geöffnet.
5. Die Schaltfläche OK am oberen Rand drücken.
6. Die Daten-Eigenschaft**Tranformations** des erstellten MultiTransform-Objekts bearbeiten:
   1. Auf das Feld klicken.
   2. Die Schaltfläche ..., die dann erscheint, anklicken.
   3. Der Dialog **Link** wird geöffnet.
   4. Mit gedrückter Ctrl-Taste werden die bestehenden Transformationen ausgewählt.
   5. Die Schaltfläche OK drücken.
7. Wahlweise das MultiTransform-Objekt [bearbeiten](#Bearbeiten), siehe oben.

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
    - Wenn ein Muster mehrere Formelemente enthält, kann deren Reihenfolge wichtig sein. Siehe [PartDesign PolaresMuster](/PartDesign_PolarPattern/de#Formelemente_ordnen "PartDesign PolarPattern/de").
* Transformationen hinzufügen:
  1. Wenn schon Transformationen vorhanden sind: Die Transformation auswählen, hinter der die neue Transformation eingefügt werden soll.
  2. Mit der rechten Maustaste in die Liste **Transformationen** klicken.
  3. Eine der folgenden Möglichkeiten des Kontextmenüs auswählen:
     + **Spiegelung hinzufügen**. Siehe [PartDesign Spiegeln](/PartDesign_Mirrored/de "PartDesign Mirrored/de").
     + **Lineares Muster hinzufügen**. Siehe [PartDesign LinearesMuster](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de").
     + **Polares Muster hinzufügen** Siehe [PartDesign PolaresMuster](/PartDesign_PolarPattern/de "PartDesign PolarPattern/de").
     + **Skalierte Transformation hinzufügen**. Siehe [PartDesign SkalierteTransformation](/PartDesign_Scaled/de "PartDesign Scaled/de").
  4. Die ausgewählte Transformation wird zur Liste hinzugefügt und die Einstellungen der Transformationen werden unterhalb der Liste angezeigt.
  5. Die Einstellungen nach Bedarf anpassen.
  6. Die OK-Leiste am unteren Rand drücken.
  7. Wiederholen, um weitere Transformationen hinzuzufügen.
* Transformationen bearbeiten:
  1. Mit der rechten Maustaste in die Liste **Transformationen** klicken.
  2. **Bearbeiten** aus dem Kontextmenü auswählen.
  3. Die Einstellungen nach Bedarf anpassen.
  4. Die OK-Leiste am unteren Rand drücken.
* Die Reihenfolge der Transformationen ändern:
  1. Mit der rechten Maustaste in die Liste **Transformationen** klicken.
  2. **Nach oben verschieben** oder **Nach unten verschieben** aus dem Kontextmenü auswählen.
* Wenn die Checkbox **Ansicht aktualisieren** aktiviert ist, erfolgt die aktualisierung in Echtzeit.

## Einschränkungen

Siehe [PartDesign PolaresMuster](/PartDesign_PolarPattern/de#Einschränkungen "PartDesign PolarPattern/de").

## Beispiel

Dieses Werkzeug kann zur Erstellung eines vollparametrischen Teils, symetrisch über zwei Achsen aus einer Skizze heraus, verwendet werden.

Das kann eine 150x100x10mm große Montageplatte für einen Motor mit symetrisch angeordneten Bohrungen sein.

![](/images/PartDesign_MultiTransform_Example2.png)

1. Einen ![](/images/PartDesign_Body.svg) [Körper](/PartDesign_Body/de "PartDesign Body/de") erstellen und eine ![](/images/PartDesign_NewSketch.svg) [Skizze](/PartDesign_NewSketch "PartDesign NewSketch") auf einer seiner Basisebenen einfügen.
2. In der Skizze die Geometrie für einen Quadranten des Teiles erstellen (d.h. den oberen rechten Quadranten).
   * Man beachte, dass die Randbedingungen auch nur ein Viertel des Teiles abdecken müssen, d.h. statt einer gesamten Länge von `150 mm` wird nur die halbe Länge `150/2 mm` bzw. `75 mm` eingegeben.
   * Sicherstellen, dass die Skizze geschlossen ist, durch Hinzufügen von Linien entlang der vertikalen und horizontalen Achsen.
3. Das Teil mit ![](/images/PartDesign_Pad.svg) [Block](/PartDesign_Pad/de "PartDesign Pad/de") extrudieren.
4. ![](/images/PartDesign_MultiTransform.svg) **PartDesign Mehrfach-Transformation erstellen** auswählen.
5. Der Aufgaben-Dialog wird geöffnet.
6. Das letzte Formelement des Körpers ist bereits ausgewählt. Da wir dieses Formelement spiegeln wollen, können wir die Schaltflächen Element hinzufügen und die Element entfernen ignorieren.
7. Mit der rechten Maustaste in das Feld **Transformationen** klicken und im Kontextmenü **Spiegelung hinzufügen** auswählen.
8. Als **Ebene** wird **vertikale Skizzenachse** ausgewählt.
9. Ist die Checkbox **Ansicht aktualisieren** aktiviert, sollte man jetzt das über eine Achse gespiegelte Teil sehen.
10. Erneut **Spiegelung hinzufügen** im Kontextmenü des Feldes **Transformationen** auswählen.
11. Jetzt wird als **Ebene** die **horizontale Skizzenachse** ausgewählt.
12. Zum Beenden die Schaltfläche OK drücken.
13. Um die Kanten entlang der Symmetrieachsen zu entfernen, wird die Daten-Eigenschaft**Refine** des neuen Formelements im [Eigenschafteneditor](/Property_editor/de "Property editor/de") auf `true` gesetzt.

Um zu gewährleisten, dass das Teil vollparametrisch ist, öffnet man die Ursprungsskizze mit dem Viertelteil und ändert ein Maß, z.B. den Bohrungsdurchmesser. Nach dem Schließen der Skizze werden die drei anderen Bohrungen entsprechend geändert sein. Das funktioniert für alle anderen Maße gleichermaßen. Eine Skizze die ein vollständiges Teil durch eine einfache Formung ohne Spiegelung erstellt, wäre sehr viel komplizierter und alle möglichen Änderungen wäre sehr viel komplizierter.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_MultiTransform/de&oldid=1485533>"