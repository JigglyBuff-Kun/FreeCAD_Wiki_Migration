---
title: Tutorium Befestigen von Objekten
---
|  |
| --- |
| Tutorium |
| Thema |
| Befestigung |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 1 Std. |
| Autoren |
| Bance |
| FreeCAD-Version |
| 0.17 oder neuer |
| Beispieldateien |
| [Basic Attachment Tutorial.FCStd](https://github.com/BanceFC/Examples/blob/master/AttachmentTutorial.FCStd) |
| Siehe auch |
|  |
|  |

![](/images/Attachment_Model.png)

Das fertige Modell

Dieses Tutorium soll als Einführung in ![](/images/Part_EditAttachment.svg) [Part Befestigen](/Part_EditAttachment/de "Part EditAttachment/de") dienen. Es ist nicht umfangreich, wird aber hoffentlich Anwendern beim Ausprobieren helfen.

Befestigen ist ein Dienstprogramm zum verknüpfen der Positionierung eines Objekts an die Positionierung oder die Form eines anderen Objekts. Das erste, befestigte Objekt folgt dem anderen, wenn sich dessen Positionierung oder Form ändert. Der Fokus liegt auf dem Arbeitsbereich PartDesign und dem Befestigen von Skizzen an andere Skizzen, was eine empfohlene Methode zum Erstellen [*stabiler*](/Feature_editing/de#Advice_for_creating_stable_models "Feature editing/de") Modelle ist.  
Diese Anleitung wurde für V0.19 geschrieben, sollte aber für jede Version ab 0.17 gültig sein. Allerdings können einige Details abweichen.  
Das Originalmodell wurde von Md. Aminul Islam entworfen und heruntergeladen von hier: <https://grabcad.com/library/50-cad-exercise-drawing-1> als "Übung - 13".

## Voraussetzungen

Vor dem Ausprobieren dieser Anleitung sollte sichergestellt sein, dass

1. Version 0.17 oder neuer eingesetzt wird.
2. sicher in der [3D-Ansicht](/3D_view/de "3D view/de") navigiert werden kann.
3. eine [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt und mit Bedingungen festgelegt werden kann.
4. ein Grundverständnis für den Arbeitsbereich ![](/images/Workbench_PartDesign.svg) [Part Design](/PartDesign_Workbench/de "PartDesign Workbench/de") vorhanden ist.
5. grundlegende Kenntnisse über [Ausdrücke](/Expressions/de "Expressions/de") vorhanden sind.

## Ziele

Zweck dieses Tutoriums ist es zu zeigen, wie ein Modell konstruiert werden kann, in dem Skizzen relativ zu anderer Geometrie positioniert werden. Hierzu werden einige der verfügbaren Befestigungs-Modi verwendet.

Auch wenn es möglich ist Formelemente (Eckpunkte (Knoten), Kanten und Flächen) als Referenz-Geometrie zu nutzen, wird im Interesse der gängigen Praxis in diesem Tutorium darauf verzichtet. Siehe [Formelemente bearbeiten](/Feature_editing/de "Feature editing/de") für weitere Erklärungen.

## Vorbereitungen

Bevor wir beginnen, wollen wir untersuchen, wie wir dieses Modell aufbauen sollten.

Aus welchem Blickwinkel wir auch darauf schauen, wir sehen ein Quadrat oder Rechteck mit einer abgetrennten Ecke.

![](/images/AttachmentTD.png)

Die TechDraw Ansicht

Es gibt jedoch eine offensichtliche Achse, von der aus alle Merkmale gemeinsam sind.

Es ist durchaus möglich, hier eine Datums-Geometrie zu erstellen und alle Skizzen daran anzuhängen. Bei einigen Modellen wäre das eine kluge Wahl, für dieses Tutorial beschränken wir uns auf Standardebenen und Skizzen.

Wir könnten eine Skizze auf jeder der Hauptebenen erstellen. Wir könnten eine abgeschrägte Ecke in unsere Basis-Skizze einfügen, aber wir verzichten darauf und fügen eine zusätzliche Skizze und eine Tasche hinzu, um zu lernen.

![](/images/CommonAxis.png)

Die Hauptachsen

## Befestigung

Wir werden mit einem Block starten und den Überstand mit einer Tasche entfernen.

In den Arbeitsbereich PartDesign wechseln, ein neues Dokument öffnen, einen neuen Körper und eine neue Skizze auf der XY-Ebene erstellen.

Dort hast Du gerade eine ***Befestigung*** erstellt. Wenn Sie die Ebene auswählen, auf der die Skizze erstellt werden soll, wird genau das getan. Der Dialog „Ebene auswählen“ ist nur eine vereinfachte Version des Anordnungsdialogs, bei dem alle Versätze auf Null gesetzt sind.

Ein Rechteck skizzieren. In den Versionen 0.17-0.21 hängt die Richtung der Linien des Rechtecks davon ab, wie es erstellt wird. Um dieselben Befestigungsergebnisse , wie in den obigen Abbildungen, zu erhalten, wird das Werkzeug [Zentriertes Rechteck](/Sketcher_CreateRectangle_Center/de "Sketcher CreateRectangle Center/de") verwendet und als ersten Punkt der Ursprungs der Skizze ausgewählt, dann als zweiten Punkt die obere rechte Ecke des Rechtecks. In Version 1.0 und später haben die Knaten des Rechtecks eine festgelegte Richtung, die der in den Abbildungen entgegensteht, wodurch das Folgen dieser Anleitung etwas herausfordernder wird. Dies kann verhindert werden, indem ein Rechteck manuell im Uhrzeigersinn erstellt wird, mit dem Werkzeug [Linienzug erstellen](/Sketcher_CreatePolyline/de "Sketcher CreatePolyline/de") .

Sicherstellen, dass das Rechteck auf dem Ursprung zentriert ist, eine (horizontale) Länge von 70 mm festlegen und die Randbedingung mit "Laenge" benennen. Die (vertikale) Breite von 40 mm festlegen und mit "Breite" benennen.

Wähle die Skizze, drücke F2 und benenne es um in "BasisSkizze".

![](/images/Sketch1.png)

Die Basis-Skizze

[Anfang](#Top)

### Befestigungsversatz

Wenn wir die Skizze dort belassen wo sie ist, wäre das Beispiel zu einfach. Also verändern wir die Position der Skizze durch Änderung des Versatzes der Befestigung.

In der Combo-Ansicht (Daten-Tab) den Abschnitt Attachment im Eigenschafteneditor ansehen. Hier sehen wir, dass BaseSketch (Basis-Skizze) einen Support 0.21 und davor oder Attachment Support [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") XY\_Plane enthält und mit dem Modus "FlatFace" befestigt ist. Weiter unten finden wir Attachment Offsets (Befestigungsabstände), die mit einem Klick auf das Plus-Zeichen oder dem Pfeil daneben erweitert werden.

Mache das gleiche für die Positions-Unterüberschrift. Ändere den X-Versatz auf 80 mm und den Y-Versatz auf 90 mm.

![](/images/Comboview.png)

Befestigungsversatz

Der Befestigungsversatz wird häufig in Verbindung mit Ausdrücken verwendet, um eine parametrische Position parallel zur Ebene zu ermöglichen, z. B. die Positionierung einer Skizze auf der oberen Fläche eines Pads unter Verwendung eines (Pad.Length)-Ausdrucks für den Z-Versatz.

Die Skizze kann nun aufgepolstert ![](/images/PartDesign_Pad.svg) werden. Wir nehmen an, dass die Höhe des Pads der Skizzen-Breite entspricht. Im Aufgaben-Fenster **Aufpolsterungs-Parameter** wähle das Feld **Länge**, drücke = oder wähle das Funktion-Icon ![](/images/Bound-expression.svg) und tippe "**Sketch.Constraints.Breite**" or "**<<BaseSketch>>.Constraints.Breite**", dieser Ausdruck sollte zu "40 mm" ausgewertet werden, dann aktiviere **Symmetrisch zur Ebene** und drücke OK.

![](/images/BasePad2.png)

Die Basis-Aufpolsterung

Jetzt erstellen wir die nächste Skizze. Es ist nicht wirklich wichtig, welche wir wählen, aber die einfachste ist das 20x20 gleichschenklige Dreieck, das sich durch die Länge des Blocks zieht.

Erzeuge eine neue Skizze, wähle Deine bevorzugte Ebene (wir werden die Befestigung sowieso ändern).

Zeichne das Dreieck, mache zwei Seiten gleich und beschränke die Länge in der gleichen Weise, wie die Länge der Aufpolsterung. Diesmal mit der Formel "**Sketch.Constraints.Breite/2**" oder "**<<BaseSketch>>.Constraints.Breite/2**".

Es sollten zwei Freiheitsgrade verbleiben, nämlich die Position im Bezug zum Ursprung. Befestigen Sie eine der Ecken am Ursprung, so dass die Skizze folgendermaßen aussieht:

![](/images/IsoscelesSketch.png)

Das erste Dreieck

[Anfang](#Top)

### Befestigung ändern

Schließe die Skizze. Benenne sie um in 'GleichschenkligeSkizze'.
Der Nullpunkt der Skizze ist der Punkt, an dem zukünftig befestigt wird. Daher ist die Art und Weise der Einschränkung zum Ursprung wichtig. Der Ursprung kann als Haken auf die Referenz verstanden werden. Wir können die Position der Skizze mit Hilfe von Versätzen anpassen, aber es ist besser, sie von vornherein mit Bedacht zu wählen.

Nun werden wir den Befestigungsmodus der Skizze in unserem Modell ändern.

Wähle die Aufpolsterung und mache sie unsichtbar, wähle die BasisSkizze und mache sie sichtbar. Wir müssen die BasisSkizze sehen und wir wollen die Aufpolsterung verstecken, damit wir keinen Fehler bei der Auswahl machen.

Die 3D-Ansicht sollte etwa so aussehen:

![](/images/TwoSketches.png)

Zwei Skizzen

Ich habe die XY-Ebene für die gleichschenklige Skizze gewählt, Deine könnte eine andere sein.

Nun wählen wir die GleichschenkligeSkizze und gehen zur Eigenschaften-Palette in der Combo-Ansicht. Klicke auf die Werte-Schaltfläche neben der Map Mode-Eigenschaft, erscheint eine Schaltfläche mit einer Auslassung ....

![](/images/MapModeSelect.png)

Map Mode Auswahl

Klicke darauf und das Aufgaben-Fenster erscheint mit dem Befestigungs-Dialog.

![](/images/AttachmentDialogue.png)

Befestigungs-Dialog

Hier sehen wir die Befestigung die gewählt wurde, als die Skizze erzeugt (im Ebene-Auswählen-Dialog) erzeugt wurde.

Der Knopf Reference 1 ist im Auswahl-Modus, daher wählen wir eine der langen Seiten der BasisSkizze.

Die GleichschenkligeSkizze wird an die von Ihnen gewählte Linie angehängt, und das Fenster für den Anhänge-Modus ändert sich, um die verfügbaren Modi anzuzeigen. Wenn das Dreieck in die falsche Richtung zeigt, kann dies korrigiert werden, indem das Kontrollkästchen „Seiten spiegeln“ am unteren Ende des Dialogs aktiviert wird (oder später nach dem Schließen des Dialogs in der Registerkarte „Eigenschaften“ ändern, indem „Map Reversed“ auf „true“ gesetzt wird). Es ist nicht wichtig, an welchem Ende der Linie das Dreieck befestigt It is not important which end of the line the triangle is attached to (it depends on how the rectangle was created).

Es ist nicht wichtig, an welches Ende der Linie das Dreieck befestigt wird. (Dies hängt davon ab, wie das Rechteck erstellt wurde!)

![](/images/NormalToEdgeIsosceles.png)

Normal zur gleichschenkligen Kante

![](/images/NormalToEdgeAttachment.png)

Normal zur Kanten-Befestigung

Man kann sehen, dass die GleichschenkligeSkizze mit dem auf den Ursprung eingeschränkten Punkt an der ausgewählten Linie befestigt wurde.

Dieses Konzept des Ursprung als Befestigungspunkt ist wichtig, denn es macht das Befestigen sehr flexibel und zu einem mächtigen Werkzeug beim Konstruieren.

Es kann zusammen mit Versätzen verwendet werden, um Skizzen präzise zu positionieren, ohne sich auf die generierte Geometrie und alle damit verbundenen Probleme zu verlassen.

FreeCAD versucht den Befestigungsmodus für Dich vorherzusagen und filtert die verfügbaren Modi für die gegebene Auswahl.

In diesem Fall sind die Optionen "Deaktiviert", ["**Normal zur Kante**"](/Part_EditAttachment/de#Normal_to_edge "Part EditAttachment/de") und ["Trägheit 2-3"](/Part_EditAttachment/de#Inertia_2-3 "Part EditAttachment/de"). Normal zur Kante ist fett dargestellt und wird als die bevorzugte Wahl angesehen.

Der Benachrichtigungsbereich am oberen Rand des Dialogs zeigt in grüner Farbe an, welcher Modus gerade verwendet wird.

Ausgegraute Optionen zeigen an, dass weitere Auswahlen erforderlich sind, um sie zu aktivieren.

An diesem Punkt können Sie eine weitere Auswahl treffen und den Unterschied zwischen den Modi sehen. Vergessen Sie nicht, wieder in den Modus „‚‘‚Normal bis Kante‘‚‘“ zu wechseln, bevor Sie mit dem Tutorium fortfahren.

Die GleichschenkligeSkizze ist nun korrekt positioniert, daher bestätigen und verlassen sie den Dialog.

Nun kann die [Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de") mit der Skizze erzeugt werden. Dies mit dem Typ "Durch Alles" und je nach Ausrichtung mit der Option "umgekehrt".

![](/images/Pocket.png)

Erste Tasche

[Anfang](#Top)

### Der nächste Schritt

Erzeuge die nächste Skizze, die Bemassungen sollten Ausdrücke sein ("**Sketch.Constraints.Breite**","**Sketch.Constraints.Breite/2**" oder "**<<BaseSketch>>.Constraints.Breite**","**<<BaseSketch>>.Constraints.Breite/2**") und es sollte auf den Ursprung an dem Knoten beschränkt werden, der an die Hypotenuse und ihre kürzeste Seite angrenzt. (In einer leeren Skizze, wenn du vertraut mit ![](/images/Sketcher_CarbonCopy.svg) [Blaupause](/Sketcher_CarbonCopy/de "Sketcher CarbonCopy/de") bist, kannst du eine Kopie der 'GleichschenkligeSkizze' machen, und die Parameter so anpassen, dass sie passt.)

Skizze in *RechterWinkelDreieckSkizze* umbenennen.

![](/images/FinalSketch.png)

RechterWinkelDreieckSkizze

Erneut müssen wir den Körper ausblenden, in diesem Fall die Tasche, und sicherstellen, dass beide Skizzen sichtbar sind für die Auswahl (*GleichschenkligeSkizze* ausgeblendet lassen, sie wird nur im Weg sein)

Wähle *RechterWinkelDreieckSkizze* und öffne den Befestigungs-Modus Dialog.

Wähle einer der kurzen Rechteckseiten als erste Referenz.

![](/images/RATNormalToEdge.png)

RechterWinkelDreieckSkizze Normal zur Kante Modus

Die 3D-Ansicht sollte wie das obige Bild aussehen. Es ist nicht wichtig, an welches Ende der Linie das Dreieck befestigt wird. (Dies hängt davon ab, wie das Rechteck erstellt wurde!)

Wenn du die falsche Linie gewählt hast, ändere es jetzt. Wenn das Dreieck in die falsche Richtung zeigt, können Sie dies korrigieren, indem Sie das Kontrollkästchen „Seiten spiegeln“ am unteren Ende des Dialogs aktivieren (oder später nach dem Schließen des Dialogs in der Registerkarte „Eigenschaften“ ändern, indem Sie „Map Reversed“ auf „true“ setzen).

Die Skizze 'RechterWinkelDreieckSkizze' ist nun so positioniert, dass nach der Taschen-Operation die richtige Geometrie erzeugt wird. Wir können hier jedoch ein wenig erfinderisch werden und die Skizze so positionieren, dass es für uns einfacher ist, später weitere Geometrie anzubringen. Wir werden unsere Skizze in die Mitte der Linie verschieben, so dass wir einen Knoten an der Spitze der Ecken- [Fase](/Glossary/de#C "Glossary/de") erhalten.

Im Befestigungs-Dialog werden wir die Befestigung von ["Normal zur Kante"](/Part_EditAttachment/de#Normal_to_edge "Part EditAttachment/de") zu ["Trägheit 2-3"](/Part_EditAttachment/de#Inertia_2-3 "Part EditAttachment/de") ändern. Dies wird die Position auf die Mitte der Linie ändern. Es würde den Rahmen dieses Tutoriums sprengen, alle Befestigungs-Modi zu beschreiben; ihre Beschreibungen finden sie unter ![](/images/Part_Attachment.svg) [Part Befestigen](/Part_EditAttachment/de "Part EditAttachment/de"). Es genügt zu sagen, dass die Trägheit 2-3 den Massenschwerpunkt nutzt und hier die Aufgabe erfüllt.

![](/images/ADInertia.png)

Befestigungs-Dialog Modus Trägheit 2-3

![](/images/3DInertia.png)

RechterWinkelDreieckSkizze Modus Trägheit 2-3

Die Skizze 'RechterWinkelDreieckSkizze' ist nun korrekt positioniert und nun bestätigen und verlassen sie den Dialog.

Nun kann die Tasche aus der Skizze erzeugt werden. Diesmal symmetrisch zur Ebene.

![](/images/2ndPocket.png)

Zweite Tasche

[Anfang](#Top)

### Befestigung verädern

Im Allgemeinen ist es besser die Position unserer Skizzen mit einfachen Befestigungs-Modi zu versehen. Aber es ist nicht immer möglich die Position der Skizzen genau dort zu befestigen, wo wir es brauchen, ohne den Befestigungsmodus in irgendeiner Weise zu ändern.

FreeCAD unterstützt verschiedene Wege dies zu tun.

1. [Attachment Offset](/Part_Part2DObject/de#Property_Attachment_Offset "Part Part2DObject/de"), ermöglicht die Positionierung relativ zu den lokalen Koordinaten des Befestigungspunktes. (wo der Ursprung der positionierten Skizze angebracht ist).
2. [Map Path](/Part_Part2DObject/de#Property_Map_Path "Part Part2DObject/de") (in der Registerkarte Daten der Eigenschaften mit der Option Ausgeblendete anzeigen) Dies ermöglicht die Positionierung entlang einer ausgewählten Kante.
3. [Flip Sides/Map Reversed](/Part_Part2DObject/de#Property_Map_Reversed "Part Part2DObject/de"). Spiegelt die Skizze.

Unsere finale Skizze werden wir willkürlich befestigen und ihre Position mit den oben aufgeführten Modifikatoren korrigieren.

Erzeuge die finale Skizze, die Abmessungen sollten Ausdrücke ("**Sketch.Constraints.Breite**","**Sketch.Constraints.Breite/2**" oder "**<<BaseSketch>>.Constraints.Breite**" , "**<<BaseSketch>>.Constraints.Breite/2**") und sie sollte an den Ursprung an dem Punkt gebunden sein, der an die Hypotenuse und ihre kürzeste Seite angrenzt.

Benenne die Skizze in 'FinaleSkizze' um.

![](/images/RightAngleTriangle.png)

FinaleSkizze

Beachten sie, dass die 'FinaleSkizze' anders zum Ursprung eingeschränkt wurde. Andernfalls könnte ![](/images/Sketcher_CarbonCopy.svg) [Blaupause](/Sketcher_CarbonCopy/de "Sketcher CarbonCopy/de") benutzt werden, aber diese Skizze hat nur drei Linien und fünf Beschränkungen.

Erneut müssen wir den Körper verstecken, in diesem Fall Pocket001. Stellen sie sicher, dass beide Skizzen für die Auswahl sichtbar sind (BasisSkizze und FinaleSkizze).

Wähle die 'FinaleSkizze' und öffne den Befestigungs-Dialog. Wähle eine der kurzen Rechteckseiten als erste Referenz.

![](/images/NormalToEdgeFinal.png)

Befestigung der 'FinaleSkizze'

Die 3D-Ansicht sollte wie das obige Bild aussehen. Es ist nicht wichtig, an welches Ende der Linie das Dreieck befestigt wird. (Dies hängt davon ab, wie das Rechteck erstellt wurde!)

Nun müssen wir es umkehren (spiegeln), drehen es um 90&deg und verschieben es in auf die Ecke.

Am unteren Ende des Anhangsdialogs befindet sich ein Kontrollkästchen mit der Bezeichnung „Seiten spiegeln“, aktivieren Sie dieses Kästchen.

Die FinaleSkizze spiegelt sich selbst.

Jetzt werden wir um 90° drehen. Aus der obigen Abbildung FinaleSkizze können wir ersehen, dass die Drehachse die X-Achse sein sollte. Im Wiki wird dies ["Rollen"](/Tasks_Placement/de#Roll "Tasks Placement/de") genannt. Denken Sie daran, dass dies relativ zum lokalen Koordinatensystem ist. Geben Sie 90° in das Feld „um die X-Achse“ des Anhangs Offset Abschnitt des Dialogs ein.

![](/images/FSFlipRot.png)

FinaleSkizze gespiegelt und gedreht

![](/images/FSFlipRotAD.png)

FinaleSkizze Befestigungs-Dialog

Wir könnten den Versatz in Z-Richtung - der nun der entgegengesetzten Y-Richtung im globalen Koordinatensystem entspricht - verwenden, um die 'FinaleSkizze' in die Ecke zu verschieben, aber ich möchte eine andere Funktion demonstrieren.

Bestätigen wir also und schließen wir den Dialog für den Moment.

[Anfang](#Top)

### Map Path Parameter

Wähle 'FinaleSkizze' und sie in der Combo-Ansicht, Eigenschaften-Panel im Abschnitt Befestigung, direkt unterhalb der Eigenschaft Map Mode ist der Map Path-Parameter.

![](/images/FinalSketchProperties.png)

FinaleSkizze Eigenschaften-Panel

Die Standard-Einstellung ist 0,0. Wenn wir den Wert auf 1 ändern, wird die Skizze auf der anderen Seite der Linie befestigt. Der Wert 0,5 gibt uns die halbe Strecke. Gib 0,5 als Wert ein.

Die Kombination 'Normal zur Kante' und Map Path-Parameter ist sehr nützlich, zur Positionierung von Skizzen für  [Austragungen](/Part_Sweep/de "Part Sweep/de") oder [Ausformungen](/PartDesign_AdditiveLoft/de "PartDesign AdditiveLoft/de").

![](/images/FinalSketchPosition.png)

Position der FinaleSkizze

Nun kann die Pocket der Skizze erzeugt werden. Vergessen sie nicht die Option Symmetrisch zur Ebene.

![](/images/3rdPocket.png)

Dritte Tasche

[Anfang](#Top)

### Ein anderer Auswahlmodus

Bisher haben wir gesehen, wie man Skizzen mit Anfügemodi und Versätzen positioniert, aber wir hätten auch Standardebenen verwenden können, da die relative Positionierung recht einfach war.

Jetzt stehen wir vor einem schwierigeren Problem: Wie schneiden wir den Klumpen weg, der übrig geblieben ist?

![](/images/3rdPocketMarked.png)

Verbleibender Schnitt

Wir können sehen, dass es eine Ebene gibt, die durch die Ecken des roten Dreiecks geht, es wäre einfach, wenn wir sie dort einfach wegschneiden könnten.

Nun, da wir unsere Skizzen vorher sorgfältig positioniert haben, können wir das!

Machen Sie zunächst den Körper unsichtbar, d. h. alles außer 'RechterWinkelDreieckSkizze' und 'FinaleSkizze' unsichtbar.

Wähle die drei Punkte, welche die Ebene definieren. Vergiß dabei nicht, die Ctrl-Taste ( command-Taste am Mac) während der Auswahl zu drücken.

![](/images/TwoTriangles.png)

Auswahl

Mit Drücken des ![](/images/PartDesign_Plane.svg) [Bezugsebene erstellen](/PartDesign_Plane/de "PartDesign Plane/de"), öffnet sich das Dialogfeld für die Befestigung mit den drei Punkten, die Sie als Referenzen 1-3 ausgewählt haben, und dem Modus „Ebene nach 3 Punkten“.

![](/images/DPAttachDia.png)

Befestigungs-Dialog

Bestätigen und schließen Sie das Dialogfeld. Wir könnten jetzt die Bezugsebene verwenden, um eine Skizze zu erstellen, aber es besteht keine Notwendigkeit, wir können die Ebene direkt verwenden, um das überschüssige Material wegzutaschen.
Vergewissern Sie sich, dass die Bezugsebene ausgewählt ist, und klicken Sie auf Tasche, wählen Sie im Taschendialog „Durch alles“ und „Umgekehrt“. Schließen Sie das Dialogfeld und wir sind fertig.

![](/images/FinishedArticle.png)

Beendeter Artikel

[Anfang](#Top)

### Temporäre Befestigung an einer erzeugten Ebene

Manchmal ist es schwierig herauszufinden, wie man die Skizzen- oder Bezugsebene an der generierten Fläche ausrichtet, ohne sie tatsächlich anzuhängen, was, wie oben erwähnt, problematisch sein kann. Eine Lösung besteht darin, sich an die generierte Geometrie anzuhängen und dann die Anbindung an eine der Koordinatenebenen zu ändern. FreeCAD behält die vorhandene Position und Ausrichtung bei, bezieht sich aber jetzt auf stabile Ebenen und vermeidet so die Probleme mit der topologischen Umbenennung. Der Preis dafür ist jedoch, dass die parametrische Verknüpfung mit der erzeugten Geometrie verloren geht. Wenn das zugrundeliegende Modell geändert wird, fällt nicht alles auseinander, wie es oft beim Anhängen an eine generierte Geometrie geschieht, aber das Anhängen folgt nicht den Änderungen und muss durch Wiederholung des Tricks mit dem temporären Anhängen angepasst werden.

Die vorherige Methode ist robuster, aber abstrakter und komplexer in der Umsetzung. Der Trick mit dem temporären Anhängen ist schnell und einfach zu implementieren, robuster als das Anhängen an die generierte Geometrie, aber es geht ein gewisser Grad an Verknüpfung im parametrischen Modellierungsprozess verloren.

## Fazit

[Part Befestigen](/Part_Attachment/de "Part Attachment/de") ist keine Garantie für ein robustes Modell. Der Schlüssel liegt darin, Skizzen nicht an generierten Geometrien wie Flächen oder Kanten von Pads und Taschen anzubringen oder zu platzieren.

Es gibt viele Anbringungsarten, die den Benutzern zur Verfügung stehen, hier werden nur die Grundlagen behandelt.

Ein wichtiger Punkt, den Sie aus diesem Tutorial mitnehmen sollten, ist die Bedeutung des Ursprungs als „Haken“. Denken Sie auch daran, dass die Orientierung im lokalen Koordinatensystem erfolgt.

Fröhliches Befestigen!

[Anfang](#Top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Attachment_Tutorial/de&oldid=1560894>"