---
title: PartDesign Dicke
---
|  |
| --- |
| PartDesign Dicke |
| Menüeintrag |
| Part Design → Modifikationen → Dicke |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [Part Dicke](/Part_Thickness/de "Part Thickness/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/PartDesign_Thickness.svg) **PartDesign Dicke** wandelt einen Volumenkörper in ein hohles Objekt (Schalenobjekt) mit mindestens einer offenen Fläche, und gibt allen verbleibenden Flächen eine konstante Wandstärke. Es fügt dem Dokument ein **Thickness**-Objekt und den dazugehörigen Repräsentanten in der [Baumansicht](/Tree_view/de "Tree view/de") hinzu.

![](/images/PartDesign_Thickness_example.svg)

Ausgangsvolumenkörper (A) → Volumenkörper mit der ausgewählten Fläche, die geöffnet werden soll (B) → Das resultierende hohle Objekt (C)

## Anwendung

### Dicke hinzufügen

1. Optional [aktiviert](/PartDesign_Body/de#Aktiver_Status "PartDesign Body/de") man den Körper, der ausgehöhlt werden soll.
2. Eine oder mehrere Flächen des Körpers auswählen.
3. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/PartDesign_Thickness.svg) Dicke drücken.
   * Den Menüeintrag **Part Design → Modifikationen → ![](/images/PartDesign_Thickness.svg) Dicke** auswählen.
4. Wenn zwei oder mehr Körper vorhanden sind und kein Körper aktiviert ist, wird der der Dialog **Active Body Required** geöffnet mit der Aufforderung einen zu aktivieren. Ist nur ein einziger Körper vorhanden, wird dieser automatisch aktiviert.
5. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Parameter der Wandstärke** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
6. Zum Fertigstellen die OK-Schaltfläche drücken.

:   *Nicht vergessen*:

    * Da das Werkzeug immer mindestens eine Fläche erfordert, kann die letzte vorhandene Fläche nicht aus der Liste entfernt werden.

### Dicke bearbeiten

1. Eine der folgenden Möglichkeiten startet die Bearbeitung:
   * Das Thickness-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken.
   * Das Thickness-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") mit der rechten Maustaste anklicken und **Thickness bearbeiten** aus dem Kontextmenü auswählen.
2. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Parameter der Wandstärke** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Zum Fertigstellen die OK-Schaltfläche drücken.

## Optionen

* **Fläche hinzufügen**: Fügt Flächen hinzu, durch Drücken der Schaltfläche Fläche hinzufügen und die Auswahl weiterer Flächen.
* **Fläche entfernen**: Möglichkeiten eine Fläche aus der Auswahl zu entfernen:
  + Eine oder mehrere Flächen in der Liste auswählen und die Del-Taste drücken oder mit der rechte Maustaste in die Liste klicken und Entfernen aus dem Kontextmenü auswählen.
  + Die Schaltfläche Fläche entfernen drücken. Alle zuvor ausgewählten Flächen werden violett hervorgehoben. Jede zu entfernende Fläche auswählen.
* **Dicke**: Die Wandstärke verändern, indem man einen Wert eingibt oder die Pfeiltasten anklickt.
* **Modus**:
  + **Oberfläche**: Diese Option für ein vasenartiges Objekt mit Boden aber ohne Deckel auswählen. Nur diese Möglichkeit wird verwendet.
  + **Rohr**: Nicht implementiert. Siehe [diesen Forumsbeitrag (engl.)](https://forum.freecadweb.org/viewtopic.php?p=484495#p484495).
  + **Recto Verso**: Nicht implementiert. Siehe [Forumsbeitrag (engl.)](https://forum.freecadweb.org/viewtopic.php?p=484495#p484495diesen).
* **Verbindungstyp**:
  + **Kreisbogen**: Wenn nicht tangentiale Flächen versetzt werden und sich die neuen Flächen nicht überschneiden, werden sie mit einer Rundung verbunden, deren Radius der festgelegten Wandstärke entspricht.
  + **Schnitt**: Wenn nicht tangentiale Flächen versetzt werden und sich die neuen Flächen nicht überschneiden, werden sie bis zu ihrer virtuellen Schnittlinie verlängert.
* **Schnitt**: Wenn aktiviert, werden bei bestimmten Modellen Selbstdurchdringungen verhindert. Diese Möglichkeit wird nicht empfohlen, da sie auf einer unvollständigen [OpenCASCADE-Methode](https://dev.opencascade.org/doc/refman/html/class_b_rep_offset_a_p_i___make_thick_solid.html#af78f35025a31e2ce8bd96c82fb33a981) basiert.
* **Dicke nach innen auftragen**: Wenn aktiviert, werden Flächen nach innen versetzt.

## Hinweise

* Wenn die Wandstärke nach innen aufgetragen wird, muss der Wert kleiner sein als die kleinste Höhe des Körpers.
* Das Wekzeug kann bei komplexen Formen versagen. [Rohr](/PartDesign_AdditivePipe/de "PartDesign AdditivePipe/de") oder [Ausformung](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft") können geeigneter sein, um komplexe Formen zu erstellen.
* Bekannte Fehler:
  + BRep\_API: command not done (Befehl nicht ausgeführt).
  + BRep\_Tool: no parameter on edge (Kein Parameter auf der Kante).
  + Silently fails (Stilles Versagen).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein PartDesign-Thickness-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Basis

* Daten**Base** (`LinkSub`): Sub-link zu der Liste des übergeordneten Formelements, die die ausgewählten Kanten und Flächen enthält.
* Daten**Support Transform** (`Bool`): Beinhaltet das ursprüngliche Formelement zur Verwendung in Muster-Objekten. Wenn deaktiviert, wird nur der angepasste (bearbeitete) Anteil der Form zum Erstellen von Mustern verwendet. Standardwert: `false`.
* Daten (hidden)**Add Sub Shape** (`PartShape`)
* Daten (hidden)**Base Feature** (`Link`): Verknüpfung mit dem übergeordneten Formelement.
* Daten (hidden)**\_ Body** (`LinkHidden`): Verknüpfung mit dem übergeordneten Körper.

Part Design

* Daten-Eigenschaft**Refine** (`Bool`): Form aufbereiten (überflüssige Kanten entfernen) nach einer Hinzufügen- oder Entfernen-Operation. Der voreingestellte Wert wird durch die Einstellung **Modell nach skizzenbasierter Operation automatisch aufbereiten** bestimmt. Siehe [PartDesign Einstellungen](/PartDesign_Preferences/de#Allgemein "PartDesign Preferences/de").

Thickness

* Daten**Value** (`Length`): Wert der Wandstärke (Dicke). Standardwert: `1 mm`.
* Daten**Mode** (`Enumeration`): Modus. `Skin` (Standard), `Pipe` oder `Recto verso`. Nur `Skin` ist implementiert.
* Daten**Join** (`Enumeration`): Verbindungstyp. `Arc` (Standard) oder `Intersection`.
* Daten**Reversed** (`Bool`): Wandstärke in Richtung des Körperinneren auftragen. Standardwert: `false`.
* Daten**Intersection** (`Bool`): Bearbeitung von Überschneidungen aktivieren. Standardwert: `false`.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Thickness/de&oldid=1485389>"