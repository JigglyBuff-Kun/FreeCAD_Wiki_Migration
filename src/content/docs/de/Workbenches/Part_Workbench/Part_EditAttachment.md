---
title: Part Befestigen
---

|                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- |
| Part Befestigen                                                                                                                     |
| Menüeintrag                                                                                                                         |
| Part → Befestigung...                                                                                                               |
| Arbeitsbereich                                                                                                                      |
| [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de")                    |
| Standardtastenkürzel                                                                                                                |
| _Keiner_                                                                                                                            |
| Eingeführt in Version                                                                                                               |
| 0.17                                                                                                                                |
| Siehe auch                                                                                                                          |
| [Positionierung](/Placement/de "Placement/de"), [Basic Attachment Tutorial](/Basic_Attachment_Tutorial "Basic Attachment Tutorial") |
|                                                                                                                                     |

## Beschreibung

Der Befehl ![](/src/assets/images/Part_EditAttachment.svg) **Part Befestigen** befestigt ein Objekt an einem oder mehreren anderen Objekten. Das befestigte Objekt ist mit den referenzierten Objekten verknüpft, d.h. wenn sich die [Positionierung](/Std_Placement/de "Std Placement/de") oder die Geometrie der referenzierten Objekte ändert, wird die Positionierung des befestigten Objekts entsprechend aktualisiert.

## Befestigungswerkzeuge

Das Befestigen eines Objekts wird durch eins von vier Befestigungswerkzeugen (attach engines) gesteuert. Welches Werkzeug für ein Objekt voreingestellt ist, hängt von seiner Art ab. Das Befestigungswerkzeug eines Objekts kann über seine Daten-Eigenschaft**Attacher Engine** geändert werden ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) oder durch seine [ausgeblendete](/Property_editor/de#Kontextmenü "Property editor/de") (hidden) Daten-Eigenschaft**Attacher Type**.

Die vorhandenen Befestigungswerkzeuge sind in der nachfolgenden Tabelle aufgelistet. Befestigungswerkzeuge kontrollieren die Daten-Eigenschaft**Placement** (Positionierung) von Objekten. Alle Befestigungswerkzeuge können für alle Objekte, die diese Eigenschaft besitzen, verwendet werden. Aber die Ergebnisse der letzten drei sind am sinnvollsten, wenn die Form der Objekte mit der erwähnten "Logischen Form" zusammenpassen.

| Befestigungswerkzeug          | Befestigungstyp             | Logische Form                                                      |
| ----------------------------- | --------------------------- | ------------------------------------------------------------------ |
| [3D-Engine](#3D-Engine)       | Attacher::AttachEngine3D    |                                                                    |
| [Plane-Engine](#Plane-Engine) | Attacher::AttachEnginePlane | Ebene Fläche die mit der XY-Ebene der Positionierung übereinstimmt |
| [Line-Engine](#Line-Engine)   | Attacher::AttachEngineLine  | Gerade Kante die mit der Z-Achse der Positionierung kolliniear ist |
| [Point-Engine](#Point-Engine) | Attacher::AttachEnginePoint | Knotenpunkt der mit dem Ursprung der Positionierung übereinstimmt  |

Der Rest dieser Seite hat den Fokus auf dem Werkzeug 3D-Engine. Die Verfahren der anderen Werkzeuge werden hier nur aufgelistet. Man beachte, dass die Verfahren der Plane-Engine in Wirklichkeit identisch sind mit denen der 3D-Engine.

## Anwendung

1. Das Objekt auswählen, das befestigt werden soll.
2. Eine der folgenden Möglichkeiten ausführen:
   - Wenn das Objekt schon eine Daten-Eigenschaft**Map Mode** besitzt: Im [Eigenschafteneditor](/Property_editor/de "Property editor/de") in dieses Feld klicken und die Schaltfläche ... drücken, die dann erscheint.
   - Den Menüeintrag **Part → ![](/src/assets/images/Part_EditAttachment.svg) Befestigung...** auswählen.
3. Das Aufgaben-Fenster **Befestigen** wird geöffnet.
4. Oben im Aufgaben-Fenster steht _Nicht befestigt_. Die erste Schaltfläche Auswählen... wird hervorgehoben, um anzuzeigen, dass eine Auswahl in der [3D-Ansicht](/3D_view/de "3D view/de") erwartet wird.
5. Einen Knoten, eine Kante oder eine Fläche bzw. Ebene auswählen, der/die zu einem anderen Objekt gehört.
6. Im Eingabefeld rechts der Schaltfläche wird das referenzierte Objekt mit Subelement angezeigt. Wenn zum Beispiel eine Fläche eines [Part-Quaders](/Part_Box/de "Part Box/de") ausgewählt ist, kann das Feld `Box:Face6` anzeigen. Die Bezeichnung (Label) der Schaltfläche zeigt jetzt die Art des Unterelements an.
7. Die zur Verfügung stehenden Verfahren werden auf Basis der ausgewählten Bezugselemente und deren Reihenfolge gefiltert. Beispielsweise muss für die Verfahren [Ausrichtung O-Z-X](#Ausrichtung_O-Z-X) bis [Ausrichtung O-Y-X](#Ausrichtung_O-Y-X) das erste Bezugselement ein Knoten sein. Ist das erste Bezugselement ein Subelement einer anderen Art, werden sie von der Liste gelöscht.
8. _Befestigungsverfahren: <Beschreibung>_ wird jetzt oben im Aufgaben-Fenster angezeigt.
9. Wahlweise einen anderen [Befestigungsmodus](#Attachment_mode/de) in der Liste auswählen. Für Informationen zu den Befestigungsverfahren fährt man mit dem Mauszeiger darüber, um einen QuickTip zum jeweiligen Verfahren anzuzeigen.
10. Abhängig vom ausgewählten Verfahren werden bis zu drei weitere Bezugselemente hinzugefügt, indem die Schaltflächen Bezugselement2, Bezugselement3, und Bezugselement4 gedrückt und jeweils der Schritt 5 wiederholt werden. Es ist auch möglich, alle Bezugselemente vor der Auswahl eines Befestigungsverfahrens festzulegen.
11. Wahlweise einen [Befestigungsversatz](#Befestigungsversatz) eingeben.
12. OK drücken.
13. Wo möglich, kann wahlweise die Daten-Eigenschaft**Map Path Parameter** im [Eigenschafteneditor](/Property_editor/de "Property editor/de") geändert werden.

## Befestigungsverfahren

### 3D-Engine

![](/src/assets/images/Part_Offset_Tasks.png)

#### Deaktiviert

Befestigen ist deaktiviert. Das Objekt kann durch Bearbeiten seiner Eigenschaft [Placement](/Placement/de "Placement/de") (Positionierung) bewegt werden.

#### Ursprung versetzen

Der Ursprung wird auf einen Knoten gesetzt. Die Ausrichtung wird weiterhin durch die Eigenschaft Placement des befestigten Objekts gesteuert.

: Kombinationen der Bezugselemente
: Knoten.

#### X Y Z des Objekts

Die Positionierung wird der Positionierung eines verknüpften Objekts angeglichen.

: Kombinationen der Bezugselemente
: Alle
: Kegelschnitt (Elipse, Parabel,Hyperbel).

#### X Z Y des Objekts

Die X-, Y- und Z- Achsen werden entsprechend den lokalen X-, Z- und -Y- Achsen eines verknüpften Objekts angeglichen.

: Kombinationen der Bezugselemente
: Alle
: Kegelschnitt.

#### Y Z X des Objekts

Die X-, Y- und Z- Achsen werden entsprechend den lokalen Y-, Z- und X- Achsen eines verknüpften Objekts angeglichen.

: Kombinationen der Bezugselemente
: Alle
: Kegelschnitt.

#### XY auf Ebene

Die XY-Ebene wird zu einer ebenen Fläche deckungsgleich ausgerichtet.

: Kombinationen der Bezugselemente
: Ebene

#### XY tangential zur Oberfläche

Die XY-Ebene wird an einem Knoten tangential zu einer Oberfläche ausgerichtet.

: Kombinationen der Bezugselemente
: Fläche, Knoten
: Knoten, Fläche

#### Z tangential zur Kante

Die Z-Achse wird tangential zu einer Kante ausgerichtet. Ein optionaler Knoten legt fest, an welcher Stelle.

Ist kein Knoten verknüpft, legt die Daten-Eigenschaft**Map Path Parameter** den Punkt fest.

: Kombinationen der Bezugselemente
: Kante
: Kante, Knoten
: Knoten, Kante

#### Frenet NBT

![](/src/assets/images/Attacher_mode_FrenetNB.png)

Die X- und Y-Achsen werden an der normalen (N) und der binormalen (B) Achse des [Frenet-Serret-Koordinatensystems](https://de.wikipedia.org/wiki/Frenetsche_Formeln) ([Frenet-Serret coordinate system](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas)) in einem Punkt auf einer gekrümmten Kante ausgerichtet. Ein optionaler Knoten legt fest, an welcher Stelle.

Ist kein Knoten verknüpft, legt die Daten-Eigenschaft**Map Path Parameter** den Punkt fest. Der Ursprung des Objekts wird auf den Knoten verschoben, wenn dieser zuerst ausgewählt wurde oder er wird an der Kurve belassen, wenn die Kurve zuerst ausgewählt wurde.

_Frenet NBT_ entspricht _Z tangential zur Kante_, außer dass die X-Achse eindeutig festgelegt ist.

: Kombinationen der Bezugselemente
: Kurve
: Kurve, Knoten
: Knoten, Kurve

#### Frenet TNB

![](/src/assets/images/Attacher_mode_FrenetTN.png)

Die X- und Y-Achsen werden an der tangentialen (T) und der normalen (N) Achse des Frenet-Serret-Koordinatensystems in einem Punkt auf einer gekrümmten Kante ausgerichtet. Ein optionaler Knoten legt fest, an welcher Stelle.

Siehe [Frenet NBT](#Frenet_NBT).

#### Frenet TBN

![](/src/assets/images/Attacher_mode_FrenetTB.png)

Die X- und Y-Achsen werden an die tangentiale (T) und die binormale Achse des Frenet-Serret Koordinatensystems in einem Punkt auf einer gekrümmten Kante angeglichen. Ein optionaler Knoten legt fest, an welcher Stelle.

Siehe [Frenet NBT](#Frenet_NBT).

#### Konzentrisch

Die XY-Ebene wird an dem [Krümmungskreis](https://de.wikipedia.org/wiki/Krümmungskreis) ([osculating circle](https://en.wikipedia.org/wiki/Osculating_circle)) in einem Punkt auf einer Kante ausgerichtet. Ein optionaler Knoten legt fest, an welcher Stelle.

Ist kein Knoten verknüpft, legt die Daten-Eigenschaft**Map Path Parameter** den Punkt fest.

: Kombinationen der Bezugselemente
: Kurve
: Kreis
: Kurve, Knoten
: Kreis, Knoten
: Knoten, Kurve
: Knoten, Kreis

#### Drehung Abschnitt

Die Y-Achse wird an der Achse des Krümmungskreises in einem Punkt auf einer Kante ausgerichtet. Ein optionaler Knoten legt fest, an welcher Stelle.

Siehe [Konzentrisch](#Konzentrisch).

#### XY-Ebene durch 3 Punkte

Die XY-Ebene wird so ausgerichtet, dass sie durch drei Knoten verläuft. Die X-Achse verläuft durch die ersten zwei Knoten.

: Kombinationen der Bezugselemente
: Knoten, Knoten, Knoten
: Linie, Knoten
: Knoten, Linie
: Linie, Linie

#### XZ-Ebene durch 3 Punkte

Die XZ-Ebene wird so ausgerichtet, dass sie durch drei Knoten verläuft. Die X-Achse verläuft durch die ersten zwei Knoten.

Siehe [XY-Ebene durch 3 Punkte](#XY-Ebene_durch_3_Punkte).

#### Faltung

![](/src/assets/images/Attacher_mode_Folding.png)

Dies ist ein spezieller Modus zum Falten von Polyedern. Vier Linien mit einem gemeinsamen Punkt in dieser Reihenfolge auswählen: erste Verbindungslinie (1), erste Faltlinie (2), zweite Faltlinie (3), zweite Verbindungslinie (4). Zum ableiten des Koordinatensystems werden die Verbindungslinien deckungsgleich ausgerichtet, indem Linie 1 um Linie 2 geschwenkt wird und Linie 4 um Linie 3. Der Ursprung wird auf den gemeinsamen Punkt gesetzt, die X-Achse der Linie 2 angeglichen und die Y-Achse2 der Richtung der deckungsgleichen Verbindungslinien angeglichen.

: Kombinationen der Bezugselemente
: Linie, Linie, Linie, Linie

#### Inertial-Koordinatensystem

Die X-, Y-, und Z-Achsen werden an denen eines Inertial-Koordinatensystems (Trägheitskoordinatensystem) ausgerichtet, das aus den Hauptachsen der Massenträgheit und dem Masseschwerpunkt abgeleitet wird.

: Kombinationen der Bezugselemente
: Alle
: Alle,Alle
: Alle, Alle, Alle
: Alle, Alle, Alle, Alle

#### Ausrichten O-Z-X

Der Ursprung wird auf den ersten Knoten gesetzt. Die X- und Z-Achsen werden in Richtung auf einen Knoten zu oder entlang einer Linie ausgerichtet.

Siehe [Befestigungsverfahren der Art O-X-Y](/O-X-Y_Type_Attachment_Modes/de "O-X-Y Type Attachment Modes/de") für weitere Eizelheiten.

: Kombinationen der Bezugselemente
: Knoten, Knoten, Knoten
: Knoten, Knoten, Linie
: Knoten, Linie, Knoten
: Knoten, Linie, Linie
: Knoten, Knoten
: Knoten, Linie

#### Ausrichten O-Z-Y

Der Ursprung wird auf den ersten Knoten gesetzt. Die Z-, und Y-Achsen werden in Richtung auf einen Knoten zu oder entlang einer Linie ausgerichtet.

Siehe [Ausrichten O-Z-X](#Ausrichten_O-Z-X).

#### Ausrichten O-X-Y

Der Ursprung wird auf den ersten Knoten gesetzt. Die X- und Y-Achsen werden in Richtung auf einen Knoten zu oder entlang einer Linie ausgerichtet.

Siehe [Ausrichten O-Z-X](#Ausrichten_O-Z-X).

#### Ausrichten O-X-Z

Der Ursprung wird auf den ersten Knoten gesetzt. Die X- und Z-Achsen werden in Richtung auf einen Knoten zu oder entlang einer Linie ausgerichtet.

Siehe [Ausrichten O-Z-X](#Ausrichten_O-Z-X).

#### Ausrichten O-Y-Z

Der Ursprung wird auf den ersten Knoten gesetzt. Die Y- und Z-Achsen werden in Richtung auf einen Knoten zu oder entlang einer Linie ausgerichtet.

Siehe [Ausrichten O-Z-X](#Ausrichten_O-Z-X).

#### Ausrichten O-Y-X

Der Ursprung wird auf den ersten Knoten gesetzt. Die Y- und X-Achsen werden in Richtung auf einen Knoten zu oder entlang einer Linie ausgerichtet.

Siehe [Ausrichten O-Z-X](#Ausrichten_O-Z-X).

#### XY parallel zur Ebene

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Die XY-Ebene wird parallel zur XY-Ebene der Positionierung eines verknüpften Objekts ausgerichtet und verlauft durch einen Knoten. Der Ursprung wird auf den auf die XY-Ebene projizierten Ursprung des verknüpften Objekts gesetzt.

Man beachte, dass das gesamte Objekt ausgewählt werden muss und nicht nur ein Teilelement, wie eine Fläche oder Ebene.

: Kombinationen der Bezugselemente
: Ein beliebiges komplettes Objekt (mit einer Daten-Eigenschaft**Placement**), Knoten

### Plane-Engine

- Deactivated
- Translate origin
- Object's XY
- Object's XZ
- Object's YZ
- Plane face
- Tangent to surface
- Normal to edge
- Frenet NB
- Frenet TN
- Frenet TB
- Concentric
- Revolution Section
- Plane by 3 points
- Normal to 3 points
- Folding
- Inertia 2-3
- Align O-N-X
- Align O-N-Y
- Align O-X-Y
- Align O-X-N
- Align O-Y-N
- Align O-Y-X
- XY parallel to plane [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

### Line-Engine

- Deactivated
- Object's X
- Object's Y
- Object's Z
- Axis of curvature
- Directrix1
- Directrix2
- Asymptote1
- Asymptote2
- Tangent
- Normal to edge
- Binormal
- Through two points
- Intersection [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- Proximity line
- 1st principal axis
- 2nd principal axis
- 3rd principal axis
- Normal to surface

### Point-Engine

- Deactivated (Deaktiviert)
- Object's origin (Objektursprung)
- Focus1 (Fokus1)
- Focus2 (Fokus2)
- On edge (Auf Kante)
- Center of curvature (Krümmungsmittelpunkt)
- Center of mass (Schwerpunkt)
- Vertex (Knoten)
- Proximity point 1 (Näherungspunkt 1)
- Proximity point 2 (Näherungspunkt 2)

## Befestigungsversatz

Befestigungsversatz wird aktiviert, wenn ein anderes Befestigungsverfahren als _Deaktiviert_ ausgewählt wurde. Er wird eingesetzt, um einen linearen oder einen Winkelversatz innerhalb des Koordinatensystems der Befestigung (attachment coordinate system, ACS) anzuwenden, der durch das Befestigungsverfahren und die referenzierten Objekte festgelegt wird.

- **In X-Richtung**: legt einen Versatzabstand entlang der X-Achse des ACS fest.

- **In Y-Richtung**: legt einen Versatzabstand entlang der Y-Achse des ACS fest.

- **In Z-Richtung**: legt einen Versatzabstand entlang der Z-Achse des ACS fest.

- **Um die X-Achse**: dreht das befestigte Element um die X-Achse des ACS.

- **Um die Y-Achse**: dreht das befestigte Element um die Y-Achse des ACS.

- **Um die Z-Achse**: dreht das befestigte Element um die Z-Achse des ACS.

- **Seiten umdrehen**: Wenn aktiviert, wird die Befestigung umgekehrt. Dies entspricht der Drehung des Objekts um 180° um die Y-Achse des ACS.

## Einschränkungen

- Falls die Auswahl zweier Linien den Fehler ergibt "points are collinear. Can't make a plane" endet, Kann man versuchen stattdessen drei Knoten auszuwählen [[1]](https://forum.freecadweb.org/viewtopic.php?f=8&t=55088&p=473614#p473594) (engl.).

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_EditAttachment/de&oldid=1530162>"
