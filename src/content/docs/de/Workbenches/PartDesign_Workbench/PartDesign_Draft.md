---
title: PartDesign Formschräge
---
|  |
| --- |
| PartDesign Formschräge |
| Menüeintrag |
| Part Design → Modifikationen → Formschräge |
| Arbeitsbereich |
| [Part Design](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| - |
| Eingeführt in Version |
| - |
| Siehe auch |
| Keine |
|  |

## Beschreibung

Das Werkzeug ![](/images/PartDesign_Draft.svg) **PartDesign Formschräge** versieht die ausgewähleten Flächen eines Objekts mit einer (Entform-)Schräge. Es fügt dem Dokument ein **Draft**-Objekt und den dazugehörigen Repräsentanten in der [Baumansicht](/Tree_view/de "Tree view/de") hinzu.

|  |  |
| --- | --- |
| Eine oder mehrere Flächen des Objekts auswählen, bevor das Werkzeug gestartet wird. Hier wurden 2 Flächen ausgewählt.    Anzeige der Parameter der Fomschräge im Aufgabenbereich.    2 Flächen wurden hinzugefügt und mit 10 Grad Schräge versehen. Die Bodenebene ist maßlich unverändert geblieben, während die Deckelebene verkleinert wurde.    Die neutrale Ebenen wurde nach oben versetzt. Jetzt bleibt die Deckelebene maßlich unverändert, während die Bodenebene vergrößert wurde.    Die untere rechte Kante wurde als Zugrichtung (Entformrichtung) festgelegt, daraus ergibt sich, dass die Schräge nach links gezogen wird.    Die Aktivierung der Checkbox Entformungsrichtung umkehren sorgt dafür, dass die Schräge nach innen statt nach außen verläuft. |  |

## Anwendung

### Eine Formschräge hinzufügen

1. Falls nötig, wird der abzuschrägende Körper [aktiviert](/PartDesign_Body/de#Activer_Status "PartDesign Body/de").
2. Eine oder mehrere Flächen des Körpers auswählen.
3. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/PartDesign_Draft.svg) Formschräge drücken.
   * Den Menüeintrag **Part Design → Modifikationen → ![](/images/PartDesign_Draft.svg) Formschräge** auswählen.
4. Wenn kein Körper aktiv ist und sich zwei oder mehr Körper im Dokument befinden, offnet sich der Dialog **Active Body Required** und fordert zur Aktivierung eines Körpers auf. Ist nur ein einziger Körper vorhanden, wird er automatisch ausgewählt.
5. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Parameter der Formschräge** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
6. Zum Fertigstellen die OK-Schaltfläche drücken.

:   *Nicht vergessen*:

    * Da das Werkzeug immer mindestens eine Fläche erfordert, kann die letzte vorhandene Fläche nicht aus der Liste entfernt werden.

### Eine Formschräge bearbeiten

1. Eine der folgenden Möglichkeiten startet die Bearbeitung:
   * Das Draft-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken.
   * Das Draft-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") mit der rechten Maustaste anklicken und **Draft bearbeiten** aus dem Kontextmenü auswählen.
2. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Parameter der Formschräge** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Zum Fertigstellen die OK-Schaltfläche drücken.

## Optionen

* **Fläche hinzufügen**: Flächen werden zur Auswahl hinzugefügt, indem man die Schaltfläche Fläche hinzufügen drückt und weitere Flächen auswählt.
* **Fläche entfernen**: Möglichkeiten eine Fläche aus der Auswahl zu entfernen:
  + Eine oder mehrere Flächen in der Liste auswählen und die Del-Taste drücken oder mit der rechte Maustaste in die Liste klicken und **Entfernen** aus dem Kontextmenü auswählen.
  + Die Schaltfläche Fläche entfernen drücken. Alle zuvor ausgewählten Flächen werden violett hervorgehoben. Jede zu entfernende Fläche auswählen.
* **Formschrägenwinkel**: Den Winkel der Schräge verändern, indem man einen Wert eingibt oder die Pfeiltasten anklickt.
* **Neutrale Ebene**: Die neutrale Ebene angeben, indem man die Schaltfläche Neutrale Ebene drückt und die Fläche auswählt, die sich maßlicht nicht verändern soll.
* **Zugrichtung**: Die Zugrichtung festlegen, indem man die Schaltfläche Zugrichtung drückt und dann eine Kante auswählt. Die Zugrichtung hat nur dann eine Wirkung, wenn eine neutrale Ebenen angegeben wurde. Die Ergebnisse können unvorhersehbar sein.
* **Zugrichtung umkehren'*: Umkehren der Zugrichtung durch aktivieren der Checkbox '***. Dies schaltet den Winkel der Schräge von positiv zu negativ um.

## Hinweise

* Das Werkzeug Formschräge arbeitet nur mit Flächen, die nicht tangential mit anderen Flächen verbunden sind. (Hier sollte das englische Original präzisiert werden...) A common mistake is to attempt to apply draft to a face that already has a fillet applied to it. To solve this, remove the fillet, apply the draft as needed, then re-apply the fillet.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein PartDesign-Draft-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Basis

* Daten-Eigenschaft**Angle** (`Angle`): Kann nicht negativ sein. Standardwert: `1,5 °`.
* Daten-Eigenschaft**Reversed** (`Bool`): Standardwert: `false`.
* Daten-Eigenschaft**Base** (`LinkSub`): Sub-Link zur Liste der Ausgewählten Kanten und Flächen des übergeordneten Formelements.
* Daten-Eigenschaft**Support Transform** (`Bool`): In Muster-Formelementen die hinzuzufügende bzw. abzuziehende Grundform berücksichtigen. Wenn deaktiviert, wird nur der Anteil der Form für das Muster berücksichtigt, der nach dem Einfügen erkennbar bleibt. Standardwert: `false`.
* Daten-Eigenschaft (versteckt)**Add Sub Shape** (`PartShape`)
* Daten-Eigenschaft (versteckt)**Base Feature** (`Link`): Verknüpfung zum übergeordneten Formelement.
* Daten-Eigenschaft (versteckt)**\_ Body** (`LinkHidden`): Verknüpfung zum übergeordneten Körper.

Draft

* Daten-Eigenschaft**Neutral Plane** (`LinkSub`): Sub-link to the parent feature's list containing the neutral plane.
* Daten-Eigenschaft**Pull Direction** (`LinkSub`)

Part Design

* Daten-Eigenschaft**Refine** (`Bool`): Form aufbereiten (überflüssige Kanten entfernen) nach einer Hinzufügen- oder Entfernen-Operation. Der voreingestellte Wert wird durch die Einstellung **Modell nach skizzenbasierter Operation automatisch aufbereiten** bestimmt. Siehe [PartDesign Einstellungen](/PartDesign_Preferences/de#Allgemein "PartDesign Preferences/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Draft/de&oldid=1336292>"