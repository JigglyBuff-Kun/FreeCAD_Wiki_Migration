---
title: Part Austragung
---

|                                                 |
| ----------------------------------------------- |
| Part Austragung                                 |
| Menüeintrag                                     |
| Formteil → Sweep...                             |
| Arbeitsbereich                                  |
| [Part](/Part_Workbench/de "Part Workbench/de")  |
| Standardtastenkürzel                            |
| _Keiner_                                        |
| Eingeführt in Version                           |
| -                                               |
| Siehe auch                                      |
| [Part Ausformung](/Part_Loft/de "Part Loft/de") |
|                                                 |

## Beschreibung

Der Befehl ![](/images/Part_Sweep.svg) Part Austragung (Sweep) wird verwendet, um eine Fläche, eine Schale (dünnwandiges Objekt) oder eine Festkörper-Form aus einem oder mehreren Profilen (Querschnitten) entlang eines Spines (Rückgratkurve) zu erzeugen.

Der Befehl Part Austragung ähnelt dem ![](/images/Part_Loft.svg) [Part Ausformung](/Part_Loft/de "Part Loft/de") mit einem hinzugefügten Spine.

![](/images/Part_Sweep_simple.png)

Ein Festkörper-Sweep-Objekt aus einem einzelnen Profil (A) entlang eines Spines (B) ausgetragen

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl auzurufen:
   - Die Schaltfläche ![](/images/Part_Sweep.svg) Sweep... drücken.
   - Den Menüeintrag **Part → ![](/images/Part_Sweep.svg) Sweep...** auswählen.
2. Der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") Sweep wird geöffnet.
3. In der linken Liste _Verfügbare Profile_ ein Profil auswählen und auf den Pfeil nach rechts klicken, um es in die rechte Liste _Ausgewählte Profile_ zu verschieben.
4. Wiederholen, wenn mehr als ein Profil verwendet werden soll.
5. Die Pfeiltasten nach oben und nach unten ändern die Reihenfolge der Liste, aber dias hat keinen Einfluss auf das Ergebnis. Die Lage der Profile entlang des Spines bestimmt, in welcher Reihenfolge sie verwendet werden.
6. Die Schaltfläche Sweep-Pfad drücken; danach hat man zwei Möglichkeiten den Spine auszuwählen:
   - _Abschnitte auswählen_: Eine Kante oder mehrere zusammenhängende Kanten in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen (für Mehrfachauswahl strg (ctrl) drücken) und die Schaltfläche Fertig drücken. Das Sweep-Objekt wird nur entlang der ausgewählten Kanten ausgetragen.
   - _Den Kompletten Pfad auswählen_: Zur [Baumansicht](/Tree_view/de "Tree view/de") wechseln, das Objekt auswählen, das als Spine verwendet werden soll, zum Aufgaben-Bereich zurück wechseln und die Schaltfläche Fertig drücken. Das Sweep-Objekt wird entlang aller aneinandergrenzenden Kanten ausgetragen, die das Objekt enthält.
7. Wahlweise die Optionen [Festkörper erstellen](#Festkörper) und [Frenet](#Frenet/de) aktivieren.
8. OK anklicken

### Akzeptierte Geometrie

- **Profile** können aus einem Punkt (Knoten), einer Linie (Kante), einem Kantenzug oder einer Fläche bestehen. Kanten und Kantenzüge können entweder offen oder geschlossen sein. Es gibt verschiedene [Einschränkungen](#Einschränkungen), siehe unten. Manchmal reicht es nicht aus, Profile korrekt am Spine auszurichten. Damit das Werkzeug richtig funktioniert, kann es genauso wichtig sein, das Profil am Spine zu [befestigen](/Part_EditAttachment/de "Part EditAttachment/de"). Wenn die Skizze des Profils am falschen Ende des Spines befestigt ist, wird die Daten-Eigenschaft**Map Path Parameter** von 0 auf 1 geändert.

- **Spine**: kann aus einer Linie (Kante), einer Reihe von verbundenen Linien, einem Kantenzug, verschiedenen Grundelemente des Arbeitsbereiches Part, Objekten des Arbeitsbereiches Draft oder einer Skizze bestehen. Der Spine kann offen oder gesclossen sein.

- [App-Link](/App_Link/de "App Link/de")-Objekte, die zu geeigneten Objektarten verlinkt sind und [App-Part](/App_Part/de "App Part/de")-Container, die geeignete sichtbare Objekte enthalten, können auch als Profile und Pfade verwendet werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

## Optionen

#### Festkörper

Wenn "Festkörper erstellen" auf "true" gesetzt ist, erstellt FreeCAD einen Festkörper, vorausgesetzt, die Profile sind geschlossen; wenn es auf "false" gesetzt ist, erstellt FreeCAD stets eine Fläche oder eine Schale, sowohl aus offenen als auch aus geschlossenen Profilen.

#### Frenet

![](/images/Sweep-frenet-comp.png)

Die Eigenschaft "Frenet" steuert, wie sich die Profilausrichtung ändert, Während sie dem Sweep-Spine folgt. Wenn "Frenet" "falsch" ist, wird die Ausrichtung des Profils von Punkt zu Punkt konsistent gehalten. Die resultierende Form weist die kleinstmögliche Verdrehung auf. Wenn ein Profil entlang einer Spirale ausgetragen wird, führt dies unwillkürlich dazu, dass das Profil langsam kriecht (dreht), während es der Spirale folgt. Wird "Frenet" auf "true" gesetzt, wird dies verhindert.

Wenn "Frenet" "wahr" ist, wird die Ausrichtung des Profils basierend auf lokalen Krümmungs- und Tangentialvektoren des Pfades berechnet. Dadurch bleibt die Ausrichtung des Profils beim Austragen entlang einer Helix konstant (da der Krümmungsvektor einer geraden Helix immer auf ihre Achse zeigt). Wenn der Weg jedoch keine Helix ist, kann die resultierende Form manchmal seltsam aussehende Verdrehungen aufweisen. Weitere Informationen befinden sich unter [Frenet-Serret-Formeln](http://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas).

#### Übergang

"Transition" (Übergang) legt die Art des Übergangs des Sweep-Objekts an nicht-tangentialen Verbindungen (Knicken) im Spline fest. Die Eigenschaft wird im Aufgaben-Bereich nicht angezeigt und befindet sich nach der Erstellung des Sweep-Objekts in den [Eigenschaften](/Property_editor/de "Property editor/de").

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part-Sweep-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Sweep

- Daten-Eigenschaft**Sections** (`LinkList`): listet die verwendeten Querschnitte auf.
- Daten-Eigenschaft**Spine** (`LinkSub`): Spine (Rückgratkurve,Pfad) an dem entlang das Sweep-Objekt ausgetragen wird.
- Daten-Eigenschaft**Solid** (`Bool`): true oder false (Standardwert). True bewirkt, dass ein Festkörper (Solid) erstellt wird.
- Daten-Eigenschaft**Frenet** (`Bool`): true oder false (Standardwert). True bewirkt, dass der Frenet-Algorithmus eingesetzt wird.
- Daten-Eigenschaft**Transition** (`Enumeration`): Übergangsmodus mit den Optionen _Transformed_, _Right corner_ oder _Round corner_.

## Einschränkungen

### Knoten oder Punkt

Ein Knoten oder Punkt darf nur als erstes und/oder letztes Profil eingesetzt werden.  
Zum Beispiel:

- Eine Form kann nicht von einem Kreis über einen Punkt zu einer Ellipse ausgetragen werden.
- Es ist aber möglich eine Form von einem Punkt über einen Kreis und eine Ellipse zu einem weiteren Punkt auszutragen.

### Profile

In einem Sweep-Objekt müssen alle Profile (Linien, Linienzüge usw.) entweder offen oder geschlossen.  
Zum Beispiel:

- FreeCAD kann ein Sweep-Objekt nicht zwischen einem Part-Kreis und einer Part-Linie austragen.

### Skizzen

- Das Profil kann mit einer Skizze erstellt werden. Es werden aber nur geeignete Skizzen werden zur Auswahl im Aufgaben-Bereich angezeigt.
- Die Skizze darf nur einen Linienzug oder eine Linie, jeweils entweder offen oder geschlossen, enthalten (Es können mehrere Linien sein, wenn alle miteinander verbunden sind und einen einzelnen Linienzug bilden).

### Objekte des Arbeitsbereichs Draft

Ein Profil kann ein Objekt des Arbeitsbereichs [Draft](/Draft_Workbench/de "Draft Workbench/de") sein.  
Die folgenden Objekte können geeignete Profile sein:

- Punkt
- Linie, Linienzug
- B-Spline, Bézierkurve
- Kreis, Ellipse
- Rechteck, Vieleck

### Objekte des Arbeitsbereichs Part

Eine Profilkurve kann ein Part-Objekt sein, dass mit dem Befehl [Part Grundelemente](/Part_Primitives/de "Part Primitives/de") erstellt wurde.  
Die folgenden Objekte können geeignete Profile sein:

- Punkt (Knoten)
- Linie (Kante)
- Wendel, Spirale
- Kreis, Ellipse
- Regelmäßiges Vieleck
- Ebene (Fläche)

## Verweise

- Ein Sweep-Objekt wird häufig zum Erstellen von Gewinden für Schrauben verwendet, siehe die Anleitung [Gewinde für Schrauben](/Thread_for_Screw_Tutorial/de "Thread for Screw Tutorial/de") für weitere Informationen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Sweep/de&oldid=1495138>"
