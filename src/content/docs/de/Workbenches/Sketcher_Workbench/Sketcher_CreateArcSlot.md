---
title: Sketcher BogennutErstellen
---

|                                                                           |
| ------------------------------------------------------------------------- |
| Sketcher BogennutErstellen                                                |
| Menüeintrag                                                               |
| Skizze → Skizzengeometrien → Bogennut erstellen                           |
| Arbeitsbereich                                                            |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                |
| Standardtastenkürzel                                                      |
| G S 2                                                                     |
| Eingeführt in Version                                                     |
| 1.0                                                                       |
| Siehe auch                                                                |
| [Sketcher NutErstellen](/Sketcher_CreateSlot/de "Sketcher CreateSlot/de") |
|                                                                           |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_CreateArcSlot.svg) Sketcher BogennutErstellen erstellt eine Bogennut, ein geschlossener Linienzug, der aus zwei parallelen konzentrischen Kreisbögen bestehen, die durch zwei Halbkreisen oder zwei radialen geraden Linien geschlossen werden.

![](/images/Sketcher_CreateArcSlot_Example.png)

Bogennut mit Bogenenden (links) und geraden Enden (rechts)

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") (In-Ansicht-Parameter zur Lagebestimmung).  
Dim-OVP = Dimensional On-View-Parameters (In-Ansicht-Parameter zur maßlichen Festlegung).

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_CreateArcSlot.svg) Bogennut erstellen drücken.
   - Den Menüeintrag **Skizze → Skizzengeometrien → ![](/images/Sketcher_CreateArcSlot.svg) Bogennut erstellen** auswählen.
   - Das Tastaturkürzel G dann S dann 2.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. Der Abschnitt **Bogennutparameter** wird im oberen Bereich des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") eingefügt.
4. Wahlweise die M-Taste drücken oder einen Eintrag in der Ausklappliste **Modus** im Abschnitt **Kreisparameter** auswählen, um den Werkzeugmodus zu wechseln:
   - ![](/images/Sketcher_CreateArcSlot.svg) **Runde Enden**:
     1. Den Mittelpunkt der Bogennut auswählen; oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
     2. Den Mittelpunkt des ersten Halbkreises auswählen; dies legt auch den Radius der (virtuellen) Mittellinie der "Nut" fest; oder mit Dim-OVP: den Radius und/oder den Startwinkel der Bogennut eingeben. Der Wikel bezieht sich auf die X-Achse der Skizze. Für diesen Winkel wird keine Randbedingung hinzugefügt.
     3. Den Mittelpunkt des zweiten Halbkreises auswählen; oder mit Dim-OVP: den überstrichenen Winkel des Mittellinienbogens eingeben.
     4. Einen Punkt auswählen, um den Radius der Halbkreise festzulegen; oder mit Dim-OVP: diesen Radius eingeben.
   - ![](/images/Sketcher_CreateRectangleSlot.svg) **Flache Enden**:
     1. Den Mittelpunkt der Bogennut auswählen; oder mit Pos-OVP: seine X- und/oder Y-Koordinate eingeben.
     2. Den Startpunkt des ersten Kreisbogens auswählen; dies legt auch seinen Radius fest; oder mit Dim-OVP: den Radius und/oder den Startwinkel des erstens Bogens eingeben. Der Wikel bezieht sich auf die X-Achse der Skizze. Für diesen Winkel wird keine Randbedingung hinzugefügt.
     3. Den Endpunkt des ersten Kreisbogens auswählen; oder mit Dim-OVP: den überstrichenen Winkel des Bogens eingeben.
     4. Einen Punkt auswählen, um die Breite der "Nut" festzulegen; oder mit Dim-OVP: diese Breite eingeben.
5. Die Bogennut wird erstellt und mögliche auf Pos-OVP und Dim-OVP basierende Randbedingungen hinzugefügt.
6. Läuft das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de"):
   1. Wahlweise weitere Bogennuten erstellen.
   2. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

## Hinweise

- Die Punkte, die ausgewählt werden, um entweder den Radius der Halbkreise oder den Abstand von innerem und äußerem Bogen festzulegen, müssen die Geometrie nicht berühren, da eigentlich der Abstand vom Mauszeiger zum Mittelpunkt der Bogennut den Wert steuert.
- Im Modus **Runde Enden** wirkt der erste Radius auf den virtuellen Mittellinienbogen, während er im Modus **Flache Enden** auf einen der Umrissbögen wirkt.
- Ist der eingegebene Wert für die Breite im Modus **Flache Enden** positiv, wird der festgelegte Bogen der innere Bogen, ist der Wert negativ wird er der äußere Bogen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcSlot/de&oldid=1418812>"
