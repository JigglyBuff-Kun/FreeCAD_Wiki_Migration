---
title: Ständer für Zahnbürstenköpfe
---

|                                                                  |
| ---------------------------------------------------------------- |
| Tutorium                                                         |
| Thema                                                            |
| Modellierung                                                     |
| Niveau                                                           |
| Anfänger                                                         |
| Zeit zum Abschluss                                               |
| 1 Stunde                                                         |
| Autoren                                                          |
| [EmmanuelG](/User:EmmanuelG "User:EmmanuelG")                    |
| FreeCAD-Version                                                  |
| 0.16 oder höher                                                  |
| Beispieldateien                                                  |
| [Thingiverse 2403310](https://www.thingiverse.com/thing:2403310) |
| Siehe auch                                                       |
| _None_                                                           |
|                                                                  |

## Ein alltägliches Problem

Elektrische Zahnbürsten kommen selten mit einem Ständer für die Köpfe, während Sie in einer Familie oftmals mehrere Köpfe sehen, die mit einem Gerät benutzt werden. Viele Leute, die ein gemeinsames Problem haben, führen zu einer Vielzahl von Lösungen, wie man u.a. auf Thingiverse sieht (200-800 Projekte befassen sich damit). Hier ist die erste Antwort und wie man sie entwirft.

Dieses Tutorial wird Sie durch die notwendigen Schritte führen, um das in der folgenden Abbildung gezeigte Teil mit Hilfe von grundlegenden Werkzeugen aus dem [Part Design-Arbeitsbereich](/PartDesign_Workbench "PartDesign Workbench") zu modellieren (viele der Werkzeuge und Möglichkeiten werden nicht behandelt).

![](/images/TBHS-model.png)

## Erste Idee: Eine Platte

- Auf der Startseite von FreeCAD wähle ![](/images/Workbench_PartDesign.svg) _Part Design_, oder erstelle ein neues Dokument und wähle den _Part Design_ Arbeitsbereich.

![](/images/TBHS-0.png)

### Eine Skizze erstellen

- Klicke auf ![](/images/Sketcher_NewSketch.svg) [**Neue Skizze**](/Sketcher_NewSketch "Sketcher NewSketch"), entweder aus dem kontextbezogenen Aufgabenmenü links oder aus der Werkzeugleiste oben oder aus dem Part Design Menü oben.

![](/images/TBHS-1.JPG)

Ein Dialog fordert dich auf, die Skizzenausrichtung zu wählen und einen Versatz anzugeben.

- Wir wählen die XY Ebene wie in der obigen Abbildung gezeigt (diese Orientierung entspricht der üblichen Ebene der meisten 3D Drucker) und drücken dann _OK_.

![](/images/TBHS-2.JPG)

Du siehst nun die XY Ebene von oben und hast Zugriff auf die Zeichenwerkzeuge.

- Klicke auf ![](/images/Sketcher_CreateRectangle.svg) [**Rechteck**](/Sketcher_CreateRectangle/de "Sketcher CreateRectangle/de").
- Klicke, um einen ersten Punkt zu platzieren.
- Klicke, um die gegenüber liegende Ecke zu platzieren.
- Drücke ESC oder drücke die rechte Maustaste, um das Werkzeug zu beenden.

![](/images/TBHS-3.JPG)

Du hast nun ein schwebendes Rechteck ohne festgelegte Abmessungen.

- Klicke auf eine Seite des Rechtecks, so dass du Zugriff auf die Beschränkungswerkzeuge rechts neben der Werkzeugleiste hast (abhängig von der Größe Ihres Bildschirms musst du diese nach links ziehen, um sie alle zu sehen)
- Klicke auf ![](/images/Sketcher_ConstrainDistance.png) [**Abstand**](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de")
- Ein Dialog fordert auf, eine Abmessung festzulegen. Gib 80 mm ein, klicke OK.
- Wiederhole dies mit der anderen Seite des Rechtecks, ebenfalls 80 mm.

![](/images/TBHS-4.JPG)

Du hast nun ein schwebendes Quadrat.

- Klicke auf die untere linke Ecke des Quadrats.
- Klicken auf den Ursprung der XY Ebene (am Schnittpunkt der beiden dicken Linien).
- Klicke auf ![](/images/Constraint_PointOnPoint.svg) [**Deckungsgleich**](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de").

![](/images/TBHS-5.JPG)

Du hast nun eine vollständig bestimmte Skizze, wie dir der Löser auf der linken Seite und die Änderung der Farbe anzeigt. Es hat sich bewährt, eine Skizze immer vollständig zu bestimmen.

Eine unterbestimmte Skizze lässt Raum für ungewollte Änderungen, wenn du später etwas anpasst.

Umgekehrt ist eine überbestimmte Skizze auch nicht gut. In diesem Fall warnt dich der Löser vor überflüssigen Beschränkungen, und du solltest einige davon entfernen.

- Um die Skizze zu verlassen, klicke entweder auf die _Schließen_ Schaltfläche auf der linken Seite oder das ![](/images/Sketcher_LeaveSketch.png) Symbol in der Werkzeugleiste, oder drücke ESC.

![](/images/TBHS-6.JPG)

Du siehst jetzt nur noch das Quadrat, und das kontextbezogene Aufgabenmenü auf der linken Seite zeigt dir mehr Wahlmöglichkeiten als zuvor.

### Einen Block erstellen

- Klicke auf ![](/images/View-axometric.svg) **Axonometrisch** unter den Standardansichten, um besser sehen zu können, was passieren wird.
- Klicken auf ![](/images/PartDesign_Pad.svg) **Block**.
- Gib 4 mm ein und klicke _OK_.

![](/images/TBHS-7.JPG)

Deine Skizze ist jetzt mit Rauminhalt !

### Eine Skizze darauf erstellen

- Wähle die Oberseite

![](/images/TBHS-8.JPG)

Die Farbe der Seite wechselt und du hast mehr Wahlmöglichkeiten im kontextbezogenen Aufgabenmenü.

- Klicke auf ![](/images/Sketcher_NewSketch.svg) **Neue Skizze**. Da eine Fläche ausgewählt wurde, wirst du nicht aufgefordert, eine Ebene zu wählen.

![](/images/TBHS-9.JPG)

- Klicke auf ![](/images/Sketcher_Circle.svg) [**Kreis**](/Sketcher_CreateCircle/de "Sketcher CreateCircle/de"), klicke, um den Mittelpunkt zu platzieren, bewege den Mauszeiger und klicke, um den Radius festzulegen.
- Zeichne vier Kreise auf die Platte (von beliebiger Größe)
- Drücke ESC oder die rechte Maustaste, um die Verwendung des Werkzeugs zu beenden.

![](/images/TBHS-10.JPG)

- Wähle die Kreise
- Klicke ![](/images/Sketcher_ConstrainEqual.png) [**Gleiche Länge**](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de")

![](/images/TBHS-11.JPG)

Nun haben die Kreise den gleichen Radius.

- Klicke ![](/images/Sketcher_External.svg) [**Externe Geometrie**](/Sketcher_External/de "Sketcher External/de").
- Klicke auf die vier Seiten des Quadrats, und es werden vier magentafarbene Linien hinzugefügt.

![](/images/TBHS-12.JPG)

Diese Linien dienen als Referenz, um die Kreise zu positionieren.

- ![](/images/Sketcher_ConstrainDistance.png) [**Abstand**](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de") anklicken.

* Einen Kreismittelpunkt anklicken.
* Auf eine magentafarbene Linie klicken.
* Den Abstand eingeben (20 mm von jeder Seite).

![](/images/TBHS-13.JPG)

- Klicke auf einen Kreis
- Klicke auf ![](/images/Sketcher_ConstrainRadius.svg) [**Radius**](/Sketcher_ConstrainRadius/de "Sketcher ConstrainRadius/de") und setze ihn auf 1,5 mm.

![](/images/TBHS-14.JPG)

- Um die Skizze zu verlassen, klicke entweder auf die _Schließen_ Schaltfläche zur Linken, oder das ![](/images/Sketcher_LeaveSketch.png) Symbol in der Werkzeugleiste oder drücke ESC.

![](/images/TBHS-15.JPG)

### Einen Block erstellen

- Klicke auf ![](/images/View-axometric.svg) **Axonometrisch** unter den Standardansichten, um besser sehen zu können, was passieren wird.
- Klicke auf ![](/images/PartDesign_Pad.svg) **Block**.
- Gib 25 mm ein und klicke _OK_.

![](/images/TBHS-16.JPG)

Du hast die Grundform, sie braucht nur noch den letzten Schliff.

### Ecken abrunden

- Halte STRG gedrückt und klicke auf die vertikale Kante an jeder Ecke, um die vier auszuwählen.

Zögere nicht, dir zu helfen, indem du den Anzeigemodus (gleich links neben der Axonometrischen Ansicht) umschaltest zwischen ![](/images/DrawStyleWireFrame.svg) **Drahtgitter** and ![](/images/DrawStyleFlatLines.svg) **Drahtgitter und Schatten**.

![](/images/TBHS-17.JPG)

- Klicke auf ![](/images/PartDesign_Fillet.svg)[**Verrundung**](/PartDesign_Fillet/de "PartDesign Fillet/de").
- Setze den Radius auf 20 mm.

![](/images/TBHS-18.JPG)

Viel besser.

### Es robuster machen

```
Wir müssen Material an der Basis der Zylinder hinzufügen, um sie weniger rissanfällig zu machen. Aufgrund der Druckausrichtung werden diese kleinen Flächen an der Verbindungsstelle mit der Basis zerbrechlich sein.

```

- Wähle die Kreise an der Basis der Zylinder

![](/images/TBHS-19.JPG)

- Klicke auf ![](/images/PartDesign_Chamfer.svg) [**Fase**](/PartDesign_Chamfer/de "PartDesign Chamfer/de").
- Setze sie auf 2 mm.

![](/images/TBHS-20.JPG)

### Kanten anfasen

- Wähle die Fläche unter der Basis aus, füge eine ![](/images/PartDesign_Chamfer.svg) **Fase** von 0,5 mm hinzu

Die erste Plastikschicht wird oft ein wenig zu stark gequetscht, dies gleicht das aus und spart dir Zeit bei der Reinigung des Modells. Wenn die erste Schicht in Ordnung ist, wird es nur schöner.

![](/images/TBHS-21.JPG)

- Wähle die Kanten am Rand der oberen Fläche aus (halte STRG ).

![](/images/TBHS-23.JPG)

- Füge eine ![](/images/PartDesign_Chamfer.svg) **Fase** von 1 mm hinzu. Dies nur aus ästhetischen Gründen.

![](/images/TBHS-22.JPG)

Tadaa!

## Als .STL exportieren

- Wähle in der Combo-Ansicht auf der linken Seite die Baumansicht anstelle des kontextbezogenen Aufgabenmenüs und klicke auf das letzte Element (die Fase).

![](/images/TBHS-24.JPG)

- Jetzt kannst du "Export..." aus dem Dateimenü oben links auswählen und das Dateiformat .STL wählen.
- Einfach ausdrucken :-)

## Inspiration

Das obige Modell stellt einen guten Startpunkt zur Nutzung von FreeCAD dar, aber als ein Zahnbürstenkopfständer hat es seine Schwächen: aufgrund der Druckausrichtung und der kleinen Oberfläche sind die Stifte bruchgefährdet.

Angeregt durch die Vielfalt der Lösungen, die sich andere Leute ausgedacht haben, werden wir diese zweite Version machen, die viel besser sein wird.

![](/images/TBHS-v2.jpg)

Keine Sorge, es ist oftmals notwendig, für eine Idee mehrere Überarbeitungen vorzunehmen (z.B.: nachdem der Prototyp auf dem Bild verwendet wurde, haben wir mehr Platz zwischen den Köpfen hinzugefügt, damit sie sich nicht berühren).

In diesem zweiten Teil wirst du auch lernen, mehr Werkzeuge zu benutzen, wie die mächtige _Lineare Wiederholung_.

## Zweite Idee: Ein Band

- Erstelle ein neues Dokument und wähle den ![](/images/Workbench_PartDesign.svg) _Part Design_ Arbeitsbereich.

### Eine Skizze erstellen

- Erstelle eine ![](/images/Sketcher_NewSketch.svg) **Neue Skizze** auf der XY Ebene.

![](/images/TBHS-1.JPG)

- Zeichne eine ![](/images/Sketcher_CreateSlot.svg) [**Nut**](/Sketcher_CreateSlot/de "Sketcher CreateSlot/de")
  - Klicke, um den ersten Mittelpunkt zu platzieren
  - Bewege den Mauszeiger, um die Länge und den Radius zu definieren
  - Klicke, um den zweiten Mittelpunkt festzulegen

![](/images/TBHS2-1.JPG)

Jetzt hast du eine schwebende Nut ohne festgelegte Abmessungen.

- Klicke auf eine der horizontalen Linien der Nut
- Klicke auf ![](/images/Sketcher_ConstrainDistance.png) [**Abstand**](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de")
- Ein Dialog fordert dich auf, eine Abmessung festzulegen. Gib 75 mm ein, klicke auf OK.
  - das ist für einen 3 Kopf Ständer, zähle 25 mm für jeden, wenn du mehr willst

![](/images/TBHS2-2.JPG)

- Klicke auf einen Punkt der horizontalen Linie
- Klicke auf einen Punkt der anderen horizontalen Linie
- Klicke auf ![](/images/Sketcher_ConstrainDistance.png) [**Distanz**](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de")
- Ein Dialogfeld fordert dich auf, eine Abmessung festzulegen. Gib 29 mm ein, klicke auf OK.

![](/images/TBHS2-3.JPG)

- Zeichne eine ![](/images/Sketcher_CreateSlot.svg) [**Nut**](/Sketcher_CreateSlot/de "Sketcher CreateSlot/de") um die erste Nut herum.

![](/images/TBHS2-4.JPG)

- Mache die Mittelpunkte der zweiten Nut deckungsgleich mit den Mittelpunkten der ersten Nut mit ![](/images/Constraint_PointOnPoint.svg) [**Deckungsgleich**](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de").

![](/images/TBHS2-5.JPG)

- Klicke auf einen Punkt der horizontalen Linie der ersten Nut
- Klicke auf einen Punkt der nächsten horizontalen Linie der zweiten Nut
- Klicke auf ![](/images/Sketcher_ConstrainDistance.png) [**Abstand**](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de")
- Ein Dialogfeld fordert dich auf, eine Abmessung festzulegen. Gib 3 mm ein, klicke auf OK.

![](/images/TBHS2-6.JPG)

- Um die Skizze vollständig zu beschränken
  - klicke auf den unteren linken Punkt der zweiten Nut
  - klicke auf den Ursprung der XY Ebene
  - klicke auf ![](/images/Constraint_PointOnPoint.svg) [**Deckungsgleich**](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de")

![](/images/TBHS2-7.JPG)

- Um die Skizze zu verlassen, klicke entweder auf die _Schließen_ Schaltfläche zur Linken oder das ![](/images/Sketcher_LeaveSketch.png) Symbol in der Werkzeugleiste, oder drücke ESC.

![](/images/TBHS2-8.JPG)

### Einen Block erstellen

- Klicken auf ![](/images/View-axometric.svg) **Axonometrisch** unter den Standardansichten, um besser sehen zu können, was passieren wird.
- Klicke auf ![](/images/PartDesign_Pad.svg) **Block**.
- Gib 30 mm ein und klicke OK.

![](/images/TBHS2-9.JPG)

### Eine Skizze darauf erstellen

- Wähle die Oberseite

![](/images/TBHS2-10.JPG)

- Erstelle eine ![](/images/Sketcher_NewSketch.svg) **Neue Skizze**. Da eine Fläche ausgewählt wurde, wirst du nicht aufgefordert, eine Ebene zu wählen.

![](/images/TBHS2-11.JPG)

- Zeichne ein ![](/images/Sketcher_CreateHexagon.svg) [**Sechseck**](/Sketcher_CreateHexagon/de "Sketcher CreateHexagon/de")
  - Klicke, um den Mittelpunkt zu platzieren
  - Bewege den Mauszeiger, um den Radius zu definieren
  - Klicke, um den Radius zu festzulegen

![](/images/TBHS2-12.JPG)

- Klicke auf eine Kante des Sechsecks
- Klicke auf ![](/images/Constraint_Horizontal.svg) [**Horizontal**](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de")

![](/images/TBHS2-13.JPG)

- Klicke auf den Mittelpunkt des Sechsecks
- Klicke auf die horizontale Linie der XY Ebene
- Klicke auf ![](/images/Sketcher_ConstrainDistance.png) [**Abstand**](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de")
- Ein Dialogfeld fordert dich auf, eine Abmessung festzulegen. Gib 15 mm ein und klicke OK.

![](/images/TBHS2-14.JPG)

- Klicke auf den Mittelpunkt des Sechsecks
- Klicke auf die vertikale Linie der XY-Ebene
- Klicke auf ![](/images/Sketcher_ConstrainDistance.png) [**Abstand**](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de")
- Ein Dialogfeld fordert dich auf, eine Abmessung festzulegen. Gib 10 mm ein, klicke auf OK.

![](/images/TBHS2-15.JPG)

- Klicke auf den blauen Kreis des Sechsecks
- Klicke auf![](/images/Sketcher_ConstrainRadius.png) [**Radius**](/Sketcher_ConstrainRadius/de "Sketcher ConstrainRadius/de")
- Ein Dialogfeld fordert dich auf, eine Abmessung festzulegen. Gib 8 mm ein, klicke auf OK.

![](/images/TBHS2-16.JPG)

- Um die Skizze zu verlassen, klicke entweder auf die _Schließen_ Schaltfläche auf der linken Seite oder das ![](/images/Sketcher_LeaveSketch.png) Symbol in der Werkzeugleiste, oder drücke ESC.

![](/images/TBHS2-17.JPG)

### Ein Loch erstellen

- Klicke auf ![](/images/View-axometric.svg) **Axonometrisch** unter den Standardansichten, um besser zu sehen, was passieren wird.
- Klicke auf ![](/images/PartDesign_Pad.svg) [**Tasche**](/PartDesign_Pocket/de "PartDesign Pocket/de").
- Wähle "zum ersten" in der Auswahlliste und klicke _OK_.

![](/images/TBHS2-18.JPG)

### Lineare Wiederholung

- Wähle in der Combo Ansicht auf der linken Seite die Baumansicht anstelle des kontextbezogenen Aufgabenmenüs, klicke auf die Taschen Funktion.
- Klicke auf ![](/images/PartDesign_LinearPattern.svg) [**Lineares Muster**](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de").
- Setze die Länge auf 55 mm und Häufigkeit auf 3 dann klicke OK.

![](/images/TBHS2-19.JPG)

### Eine Skizze darauf erstellen

- Wähle die Innenseite

![](/images/TBHS2-20.JPG)

- Klicke auf ![](/images/Sketcher_NewSketch.svg) **Neue Skizze**. Da eine Fläche ausgewählt wurde, wirst du nicht aufgefordert, eine Ebene zu wählen.

![](/images/TBHS2-21.JPG)

- Klicke auf ![](/images/Sketcher_Circle.svg) [**Kreis**](/Sketcher_CreateCircle/de "Sketcher CreateCircle/de"), klicke, um den Mittelpunkt zu positionieren, bewege den Zeiger und klicke, um den Radius festzulegen.

![](/images/TBHS2-22.JPG)

- Klicke auf den Mittelpunkt des Kreises
- Klicke auf die horizontale Linie der XY Ebene
- Klicke auf![](/images/Sketcher_ConstrainDistance.png) [**Abstand**](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de")
- Ein Dialog fordert dich auf, eine Abmessung festzulegen. Gib 15 mm ein und klicke OK.

![](/images/TBHS2-23.JPG)

- Klicke auf den Mittelpunkt des Kreises
- Klicke auf die vertikale Linie der XY-Ebene
- Klicke auf ![](/images/Sketcher_ConstrainDistance.png) [**Abstand**](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de")
- Ein Dialog fordert dich auf, eine Abmessung festzulegen. Gib 10 mm ein, klicke auf OK.

![](/images/TBHS2-24.JPG)

- Klicke auf den Kreis
- Klicke auf ![](/images/Sketcher_ConstrainRadius.png) [**Radius**](/Sketcher_ConstrainRadius/de "Sketcher ConstrainRadius/de")
- Ein Dialogfeld fordert dich auf, eine Abmessung festzulegen. Gib 3.5 mm ein, klicke auf OK.

![](/images/TBHS2-25.JPG)

- Um die Skizze zu verlassen, klicke entweder auf die _Schließen_ Schaltfläche zur Linken oder das ![](/images/Sketcher_LeaveSketch.png) Symbol in der Werkzeugleiste, oder drücke ESC.

![](/images/TBHS2-26.JPG)

### Einen Block erstellen

- Klicke auf ![](/images/View-axometric.svg) **Axonometrisch** unter den Standardansichten, um besser sehen zu können, was passieren wird.
- Klicken auf ![](/images/PartDesign_Pad.svg) **Block**.
- Gib 4 mm ein und klicke _OK_.

![](/images/TBHS2-27.JPG)

### Lineare Wiederholung

- Wähle in der Combo Ansicht auf der linken Seite die Baumansicht anstelle des kontextbezogenen Aufgabenmenüs, klicke auf die Polster Funktion.
- Klicke ![](/images/PartDesign_LinearPattern.svg) [**Lineares Muster**](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de").
- Setze die Länge auf 55 mm und Häufigkeit auf 3 dann klicke OK.

![](/images/TBHS2-28.JPG)

### Formschräge

- Selektieren Sie die Seite jedes runden Blocks

![](/images/TBHS2-29.JPG)

- Klicke auf ![](/images/PartDesign_Draft.svg) [**Formschräge**](/PartDesign_Draft/de "PartDesign Draft/de").
- Setze den Formschrägenwinkel auf 40°.
- Klicke "Neutrale Ebene" und wähle die Seite, auf der die Skizze gezeichnet wurde.
- Hake "Entformungsrichtung umkehren" an.

![](/images/TBHS2-30.JPG)

Wir hätten eine Fase benutzen können, um etwas Ähnliches zu tun, aber die Entformschräge ist in diesem Fall angebrachter.

Fase = links / Entformschräge = rechts

![](/images/TBHS2-30-chamfer.JPG)![](/images/TBHS2-30-draft.JPG)

### Abschlüsse

- Halte STRG gedrückt und wähle die Ober- und Unterseiten.

![](/images/TBHS2-31-bottom.JPG)![](/images/TBHS2-31-top.JPG)

- - Füge eine ![](/images/PartDesign_Chamfer.svg) **Fase** von 0,5 mm hinzu.

![](/images/TBHS2-31.JPG)

Perfekt!

## Als .STL exportieren

- Wähle in der Combo Ansicht auf der linken Seite die Baumansicht anstelle des kontextbezogenen Aufgabenmenüs und klicke auf das letzte Element (die Fase).

![](/images/TBHS2-32.JPG)

- Jetzt kannst du "Export ..." aus dem Dateimenü oben links und daraus das Dateiformat .STL wählen.
- Drucke es statt der ersten Version oder um diese zu ersetzen, falls sie irgendwann zerbrochen ist ;-).

Retrieved from "<http://wiki.freecad.org/index.php?title=Toothbrush_Head_Stand/de&oldid=1251737>"
