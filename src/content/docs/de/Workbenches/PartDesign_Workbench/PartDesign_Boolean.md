---
title: PartDesign BoolescheVerknüpfung
---
|  |
| --- |
| PartDesign BoolescheVerknüpfung |
| Menüeintrag |
| Part Design → Boolesche Verknüpfung |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

**PartDesign BoolescheVerknüpfung** importiert einen oder mehrere [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") (Bodies) oder [PartDesign-Klone](/PartDesign_Clone/de "PartDesign Clone/de") (hier "Werkzeugkörper" genannt) in den aktiven PartDesign-Körper und führt eine boolesche Verknüpfung durch (Vereinigung, Differenz oder Schnitt ).

![](/images/PartDesign_Boolean_example.png)

Links der aktive Körper (A) mit den Werkzeugkörpern (B) und (C); Rechts das Ergebnis nach der booleschen Verknüpfung Differenz.

## Anwendung

1. Den [Körper aktivieren](/PartDesign_Body/de#Aktiver_Status "PartDesign Body/de"), der das Boolean-Objekt erhalten soll. ***Hinweis**: Es ist wichtig, dass weder der aktive Körper noch eines der darin enthaltenen Elemente ausgewählt sind!*
2. Die Schaltfläche ![](/images/PartDesign_Boolean.svg) **Boolesche Verknüpfung** drücken.
3. Unter **Parameter der booleschen Verknüpfung**, klickt man auf die Schaltfläche Körper hinzufügen. Der aktive Körper verschwindet vorübergehend aus der [3D-Ansicht](/3D_view/de "3D view/de"), um die Auswahl von Werkzeugkörpern zu erleichtern.
4. In der 3D-Ansicht den Körper auswählen, der in dem Boolean-Objekt verwendet werden soll. Diesen Vorgang wiederholen, um weitere Körper hinzuzufügen.
5. Den Typ der booleschen Verknüpfung im Auswahlmenü auswählen (Vereinigung, Differenz oder Schnitt).
6. OK klicken.

Alternativ können Objekte ausgewählt werden, bevor die Schaltfläche Boolesche Operation gedrückt wird. Sie werden automatisch hinzugefügt. Bei der Vorauswahl ist man nicht auf Körper (Bodies) beschränkt. [PartDesign FormBinder](/PartDesign_ShapeBinder/de "PartDesign ShapeBinder/de"), [PartDesign SubShapeBinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de") und sogar Festkörper, die mit anderen Arbeitsbereichen erstellt wurden, können dann auch ausgewählt werden.

## Optionen

* **Vereinigung:** Verbindet den/die Werkzeugkörper mit dem aktiven Körper.
* **Differenz:** Zieht den/die Werkzeugkörper vom aktiven Körper ab.
* **Schnitt:** Extrahiert die Überschneidung der/des gewählten Körper(s) mit dem aktiven Körper.
* Die Schaltfläche Körper entfernen drücken, um einen Körper durch Auswahl in der [3D-Ansicht](/3D_view/de "3D view/de") zu entfernen.

## Eigenschaften

* Daten-Eigenschaft**Type**: legt die Boolesche Operation (Vereinigung, Differenz, Schnitt) fest.
* Daten-Eigenschaft**Label**: Name, der der Operation gegeben wurde, dieser Name kann nach Belieben geändert werden.
* Daten-Eigenschaft**Group**: Listet die Werkzeugkörper auf.
* Ansicht-Eigenschaft**Display**: Setzt einen von zwei Anzeigemodi:
  + Result (Standard): Zeigt das Ergebnis des Boolean-Objekts an. In diesem Modus können die Werkzeugkörper nicht in ihrem ursprünglichen Zustand angezeigt werden, selbst wenn ihre Sichtbarkeit eingeschaltet ist.
  + Tools: zeigt die Werkzeugkörper in ihrem ursprünglichen Zustand an. Dieser Modus ist nützlich, wenn die Werkzeugkörper bearbeitet werden müssen, oder für spätere Bearbeitungen verwendet werden sollen.
* Ansicht-Eigenschaft**Selectable**: true oder false. Wenn auf "false" gesetzt, kann das Objekt nicht in der 3D-Ansicht ausgewählt werden.
* Ansicht-Eigenschaft**Sichtbarkeit**: true oder false. Schaltet die Sichtbarkeit des Objekts in der 3D-Ansicht um.

## Begrenzungen

* Damit Schnitt mit mehr als einem Werkzeugkörper arbeiten kann, müssen sich alle untereinander und mit dem aktiven Körper überschneiden.
* Werkzeugkörper übernehmen den lokalen Ursprung des aktiven Körpers. Wenn sich der aktive Körper nicht bei (0,0,0) im globalen Koordinatensystem befindet, muss die Positionierung der Werkzeugkörper relativ zum aktiven Körper erfolgen. Es kann einfacher sein, die Positionierung des aktiven Körpers am Ursprung zu belassen, bevor das Boolean-Objekt angewendet wird, als seine Positionierung zu ändern.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Boolean/de&oldid=1425038>"