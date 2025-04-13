---
title: PartDesign Fase
---
|  |
| --- |
| PartDesign Fase |
| Menüeintrag |
| Part Design → Modifikationen → Fase |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Verrundung](/PartDesign_Fillet/de "PartDesign Fillet/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/PartDesign_Chamfer.svg) **PartDesign Fase** erzeugt Fasen (Abschrägungen) an den ausgewählten Kanten eines Objekts. Es fügt dem Dokument ein **Chamfer**-Objekt und den dazugehörigen Repräsentanten in der [Baumansicht](/Tree_view/de "Tree view/de") hinzu.

## Anwendung

### Eine Fase hinzufügen

1. Falls nötig, wird der anzufasende Körper [aktiviert](/PartDesign_Body/de#Activer_Status "PartDesign Body/de").
2. Es gibt mehrere Möglichkeiten, die Kanten zum Anfasen auszuwählen:
   * Eine oder mehrere einzelne Kanten des Körpers auswählen.
   * Eine oder mehrere Flächen des Körpers auswählen, um alle ihrer Kanten auszuwählen.
   * Ein Formelement (normalerweise das letzte) des Körpers auswählen, um alle seiner Kanten auszuwählen.
3. Um eine Reihe tangential verbundener Kanten auszuwählen, muss nur eine einzige Kante ausgewählt werden, die Fase folgt dann dem kompletten Kantenzug.
4. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/PartDesign_Chamfer.svg) Fase drücken.
   * Den Menüeintrag **Part Design → Modifikationen → ![](/images/PartDesign_Chamfer.svg) Fase** auswählen.
5. Wenn kein Körper aktiv ist und sich zwei oder mehr Körper im Dokument befinden, offnet sich der Dialog **Active Body Required** und fordert zur Aktivierung eines Körpers auf. Ist nur ein einziger Körper vorhanden, wird er automatisch ausgewählt.
6. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Parameter der Fase** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
7. Zum Fertigstellen die OK-Schaltfläche drücken.

### Eine Fase bearbeiten

1. Eine der folgenden Möglichkeiten startet die Bearbeitung:
   * Das Chamfer-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken.
   * Das Chamfer-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") mit der rechten Maustaste anklicken und **Chamfer bearbeiten** aus dem Kontextmenü auswählen.
2. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Parameter der Fase** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Zum Fertigstellen die OK-Schaltfläche drücken.

## Optionen

* Zum Hinzufügen von Kanten hat man folgende Möglichkeiten:
  + Die Schaltfläche Hinzufügen drücken, um die Auswahl weiterer Kanten und/oder Flächen in der [3D-Ansicht](/3D_view/de "3D view/de") zu starten.
  + Zur Auswahl aller übrigen Kanten hat man folgende Möglichkeiten:
    1. Wenn nötig, Schaltfläche Hinzufügen drücken.
    2. Tastaturkürzel Ctrl+Shift+A anwenden, oder mit der rechten Maustaste in die Liste klicken und **Alle Kanten verwenden** aus dem Kontextmenü auswählen.
* Zum Entfernen von Kanten hat man folgende Möglichkeiten:
  + Die Schaltfläche Entfernen drücken, um das Entfernen der Kanten und/oder Flächen in der [3D-Ansicht](/3D_view/de "3D view/de") zu starten. Ausgewählte Elemente werden in violett hervorgehoben.
  + Ein oder mehrere Elemente in der Liste auswählen und die Del-Taste drücken, oder mit der rechten Maustaste in die Liste klicken und **Entfernen** aus dem Kontextmenü auswählen.
* Den **Typ** der Fase auswählen:
  + **Gleiche Distanzen**: Für die Platzierung beider Fasenkanten wird der gleiche Abstand verwendet.
  + **Zwei Distanzen**: Für die Platzierung der Fasenkanten werden zwei unterschiedliche Abstände verwendet.
  + **Distanz und Winkel**: Für die Platzierung der einen Fasenkante wird ein Abstand verwendet, die andere Fasenkante wird durch den Winkel festgelegt.
* Die Schaltfläche ![](/images/PartDesign_Flip_Direction.svg) Richtung umkehren drücken, um die Richtung der Fase umzudrehen (deaktivaiert für **gleiche Distanz**).
* Die **Größe** der Fase angeben.
* Die **Größe 2** der Fase angeben (ist nur verfügbar, wenn **Zwei Distanzen** ausgewählt ist).
* Den **Winkel** der Fase angeben (ist nur verfügbar, wenn **Distanz und Winkel** ausgewählt ist).
* Die Checkbox **Alle Kanten verwenden** aktivieren, um alle Kanten des vorherigen Formelements auszuwählen. Dies deaktiviert die Auswahlliste und die dazugehörigen Schaltflächen.

## Hinweise

* PartDesign Fase sollte nicht mit [Part Fase](/Part_Chamfer/de "Part Chamfer/de") verwechselt werden. Solange man nicht weiß, was man macht, sollte [Part Fase](/Part_Chamfer/de "Part Chamfer/de") nicht auf einen PartDesign-Body angewendet werden. Siehe [Part und PartDesign](/Part_and_PartDesign/de "Part and PartDesign/de").
* Fasen können (dürfen?) die angrenzenden Flächen nicht komplett vereinnahmen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein PartDesign-Chamfer-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Basis

* Daten-Eigenschaft**Base** (`LinkSub`): Link to the selected edges and faces of the parent feature. Can be a link to only the parent feature if Daten-Eigenschaft**Use All Edges** is `true`.
* Daten-Eigenschaft**Support Transform** (`Bool`): If `true` the chamfered shape of the additive/subtractive parent feature will be used when the chamfer object is included in a [pattern](/PartDesign_Workbench#Transformation_tools "PartDesign Workbench"), else only the shape of the chamfer itself will be used. The default is `false`.
* Daten-Eigenschaft (versteckt)**Add Sub Shape** (`PartShape`)
* Daten-Eigenschaft (versteckt)**Base Feature** (`Link`): Link to the parent feature.
* Daten-Eigenschaft (versteckt)**\_ Body** (`LinkHidden`): Link to the parent body.

Chamfer

* Daten-Eigenschaft**Chamfer Type** (`Enumeration`): Art der Fase: `Equal distance` (gleicher Abstand - Standardeinstellung), `Two distances` (zwei Abstände) oder `Distance and Angle` (Abstand und Winkel).
* Daten-Eigenschaft**Größe** (`QuantityConstraint`): Erster Abstand der Fase. Standardwert: `1 mm`.
* Daten-Eigenschaft**Größe2** (`QuantityConstraint`): Zweiter Abstand der Fase. Wird nur verwendet, wenn für die Daten-Eigenschaft**Chamfer Type** `Two distances` ausgewählt wurde. Standardwert: `1 mm`.
* Daten-Eigenschaft**Angle** (`Winkel`): Winkel der Fase. Wird nur verwendet, wenn für die Daten-Eigenschaft**Chamfer Type** `Distance and Angle` ausgewählt wurde. Standardwert: `45 °`.
* Daten-Eigenschaft**Flip Direction** (`Bool`):Wenn `true`, wird die Richtung der Fase umgedreht. Wird nicht verwendet, wenn für die Daten-Eigenschaft**Chamfer Type** `Equal distance` ausgewählt wurde. Standardwert: `false`.
* Daten-Eigenschaft**Use All Edges** (`Bool`): Wenn `true`, werden alle Kanten des Objekts angefast und die unter der Daten-Eigenschaft**Base** angegebenen Kanten werden ignoriert. Standardwert: `false`.

Part Design

* Daten-Eigenschaft**Refine** (`Bool`): Wenn auf `true` gesetzt, werden überflüssige Kanten aus dem Ergebnis der Operation entfernt. Der voreingestellte Wert wird durch die Einstellung **Modell nach skizzenbasierter Operation automatisch aufbereiten** bestimmt. Siehe [PartDesign Einstellungen](/PartDesign_Preferences/de#Allgemein "PartDesign Preferences/de").

## Bekannte Probleme

Siehe [PartDesign Verrundung](/PartDesign_Fillet/de#Bekannte_Probleme "PartDesign Fillet/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Chamfer/de&oldid=1515805>"