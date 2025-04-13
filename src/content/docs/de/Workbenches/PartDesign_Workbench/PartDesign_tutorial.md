---
title: PartDesign Tutorium
---
|  |
| --- |
| Tutorium |
| Thema |
| Skizzieren |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 15 Minuten |
| Autoren |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| FreeCAD-Version |
| 0.16 oder höher |
| Beispieldateien |
|  |
| Siehe auch |
| *None* |
|  |

### Einleitung

Dieses Tutorium soll den Leser in den grundlegenden Arbeitsablauf des [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") einführen.
Der Leser wird sehen, wie man 3D Objekte auf der Grundlage von Skizzen erstellt, Subtraktionsoperationen durchführt und wie man bestimmte Formelemente in einem Muster nachbildet.

![](/images/Sketcher_tutorial_result.png)

### Anforderungen

* FreeCAD Version 0.17 oder höher
* Der Leser hat das [Grundlegende Skizzierer Tutorium](/Basic_Sketcher_Tutorial/de "Basic Sketcher Tutorial/de") abgeschlossen.

### Verfahren

#### Erstellen von 3D Geometrie

Der Zweck des **PartDesign Arbeitsbereichs** ist es, dem Benutzer die Erstellung von Geometrie im 3D Raum zu ermöglichen. Als solche ist sie mit Werkzeugen ausgestattet, um Skizzen zu nutzen und sie in 3D Objekte umzuwandeln.

Um dies zu erreichen, gibt es zwei Werkzeuge: ![](/images/PartDesign_Pad.svg) [Polster](/PartDesign_Pad/de "PartDesign Pad/de") und ![](/images/PartDesign_Revolution.svg) [Drehung](/PartDesign_Revolution/de "PartDesign Revolution/de").
Neben ihren subtraktiven Gegenstücken (![](/images/PartDesign_Pocket.svg) [Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de") und ![](/images/PartDesign_Groove.svg) [Nut](/PartDesign_Groove/de "PartDesign Groove/de")) bilden sie die meisten der von diesem Arbeitsbereich verwendeten üblichen Aktionen.

1. Wechsle in den Arbeitsbereich PartDesign.
2. Mit der Skizze ausgewählt in der [Baumansicht](/Tree_view/de "Tree view/de"), drücke ![](/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de"), Wähle die Standard XY-Ebene und drücke OK. Die Skizze sollte nun innerhalb des Körpers erscheinen.
3. Wähle ![](/images/PartDesign_Pad.svg) [Polster](/PartDesign_Pad/de "PartDesign Pad/de")
4. Setze den Abstand auf 5 mm
5. Wähle **OK**

Eine andere Möglichkeit zum Erzeugen von 3D Geometrie ist das ![](/images/PartDesign_Revolution.svg) [Drehungs](/PartDesign_Revolution/de "PartDesign Revolution/de") Werkzeug.

![](/images/PartDesign_revolution_exercise.png)

1. Erstelle eine neuen Körper ![](/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de"), und dann eine Skizze auf der Grundlage des obigen Bildes.
2. Die Skizze kann sich auf jeder beliebigen Ebene befinden, sollte aber mit der horizontalen Achse deckungsgleich sein.
3. Wähle ![](/images/PartDesign_Revolution.svg) [Drehung](/PartDesign_Revolution/de "PartDesign Revolution/de") ![](/images/PartDesign_Revolution.png).
4. Setze die "Achse" auf die "Horizontale Skizzenachse"
5. Setze den Winkel Winkel auf 360°.

#### Subtraktions Merkmale

Wir beginnen mit der Erstellung einer Skizze mit der Form, die wir subtrahieren wollen.

1. Wähle die obere flache Seite der "Drehung"
2. Wähle ![](/images/Sketcher_NewSketch.svg) [Neue Skizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de")
3. Wähle ![](/images/Sketcher_External.svg) [Externe Geometrie](/Sketcher_External/de "Sketcher External/de")
4. Nähere dich der Kante des Polsters. Ein Bogen sollte hervorgehoben werden
5. Wähle den Bogen. Ein Bogen in einer anderen Farbe sollte in der Skizze erscheinen
6. Erzeuge ein Sechseck, das auf demselben Punkt wie der Bogen zentriert ist, und setze den Radius des Referenzkreises auf 5 mm

**Externe Geometrie**

Wenn ein 3D Element erstellt wurde, ist es möglich, innerhalb einer Skizze Referenzen auf dieses Element zu erstellen.

1. Wähle ![](/images/Sketcher_External.svg) [Externe Geometrie](/Sketcher_External/de "Sketcher External/de").
2. Nähere dich dem Element, auf das du referenzieren möchtest, z.B. die Kante eines **Polsters**.
3. Klicke darauf
4. Neue Elemente in einer anderen Farbe sollten in der Skizze an der Stelle erscheinen, auf die du Bezug nehmen möchtest.

![](/images/PartDesign_pocket_exercise.png)

Danach werden wir eine **Taschen** Funktion anwenden.

1. Wähle die Skizze
2. Wähle ![](/images/PartDesign_Pocket.svg) [Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de")
3. Setze den Abstand auf **Durch alles**

#### Muster Merkmale

Rufe das extrudierte Profil auf, das zu Beginn des Tutoriums erstellt wurde.

1. Wähle die obere Fläche des Objekts
2. Erstelle eine neuen Skizze
3. Erstelle Referenzgeometrie, die mit dem oberen Arm der Figur verknüpft ist
4. Erstelle einen Kreis, der zum Mittelpunkt des Bezugsbogens beschränkt ist
5. Setze seinen Radius auf 3 mm
6. Vertiefe die Skizze durch das gesamte Werkstück

Anstatt für jede Bohrung in der Skizze einen Kreis zu erstellen, werden wir das Konzept der **Muster Formelemente** einführen. Diese Werkzeuge arbeiten, indem sie ein bereits erstelltes Formelement im Werkstück replizieren, das wir in einer linearen oder kreisförmigen Anordnung reproduzieren möchten.
Wir werden eine Kombination von **linearen** und **polaren** Mustermerkmalen gleichzeitig verwenden, um das endgültige Werkstück zu erhalten.

1. Wähle das Taschen Formelement in der **Baumansicht**, das wir gerade erstellt haben.
2. Wähle ![](/images/PartDesign_MultiTransform.svg) [MehrfachUmwandlung](/PartDesign_MultiTransform/de "PartDesign MultiTransform/de")

In der Combo Ansicht werden wir nun gebeten, die von uns gewünschten **Umwandlungen** einzuführen. Beachte, dass wir im Menü **MehrfachUmwandlungs Parameter** sehen, dass FreeCAD die Tasche als **Original Formelement *identifiziert hat und ein zweites Feld fordert uns auf,*** *es rechts zu klicken*, um die Musterformelemente einzuführen.

1. Rechtsklicke das Kästchen
2. Wähle **Lineares Muster hinzufügen**
3. Setze die **Richtung** auf **Vertikale Skizzenachse**
4. Setze Länge auf 10 mm
5. Häufigkeiten bei 2 % belassen
6. Klicke OK
7. Rechtsklicke erneut auf das Kästchen, um ein **Polares Muster** hinzuzufügen. Beachte, dass die 3D Ansicht jetzt das lineare Muster hinzugefügt hat.
8. Setze Häufigkeiten auf 5
9. Klicke OK zweimal

Nach Abschluss dieser Aufgabe solltest du das folgende Ergebnis haben.

![](/images/PartDesign_multitransform_exercise.png)

Wenn nicht, bearbeite den MehrfachUmwandlungs Vorgang erneut, indem du in der Baumansicht darauf doppelklickst. Überprüfe beide Muster Formelemente, um notwendige Modifikationen zu erkennen, wie z.B. die **Achse** und ob die **Richtung** umgekehrt werden muss.

Wir sind jetzt mit dem grundlegenden Workflow für den [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") fertig.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_tutorial/de&oldid=759415>"