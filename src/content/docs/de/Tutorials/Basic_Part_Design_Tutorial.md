---
title: Grundlegendes Part Design Tutorium
---
|  |
| --- |
| Tutorium |
| Thema |
| Modellieren |
| Niveau |
| Einsteiger |
| Zeit zum Abschluss |
| Unter einer Stunde |
| Autoren |
| Mark Stephen ([Quick61](/User:Quick61 "User:Quick61")) und HarryGeier ([HarryGeier](/index.php?title=User:HarryGeier&action=edit&redlink=1 "User:HarryGeier (page does not exist)")) |
| FreeCAD-Version |
| 0.17 oder höher |
| Beispieldateien |
| [Grundlagen Part Design für v0.17](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd) |
| Siehe auch |
| [Basic Part Design Tutorial 019](/Basic_Part_Design_Tutorial_019 "Basic Part Design Tutorial 019") |
|  |

Dieses Tutorium führt den neuen Benutzer in einige der Werkzeuge und Techniken ein, die im Arbeitsbereich [Part Design](/PartDesign_Workbench/de "PartDesign Workbench/de") verwendet werden. Dieses Tutorium ist keine vollständige und umfassende Anleitung für den Arbeitsbereich Part Design und viele der Werkzeuge und Funktionen werden nicht behandelt. In diesem Lernprogramm wird der Benutzer durch die Schritte geführt, die erforderlich sind, um das im Bild unten gezeigte Teil mithilfe von Skizzen zu modellieren.

![](/images/Tut17_final_refined.png)

Ein Video der gesamten Konstruktion ist hier:
<https://youtu.be/geIrH1cOCzc>

(jeder Abschnitt hat sein eigenes separates Video unten)

## Bevor du anfängst

## Die Aufgabe

In diesem Tutorium wird mit dem Arbeitsbereich Part Design ein 3D-Volumenmodell des Bauteils, das in der [Zeichnung](/TechDraw_Workbench/de "TechDraw Workbench/de") unten gezeigt wird. Alle für diese Aufgabe erforderlichen Maße sind vorhanden. Am Anfang steht die Erstellung einer Kernform aus einer Basisskizze; danach wird auf dieser Form aufgebaut, indem so genannte Formelemente hinzugefügt werden. Diese Formelemente fügen dem Volumenkörper entweder Material hinzu oder entfernen Material von ihm, indem sie zusätzliche Skizzen und zugehörige Formelement-Operationen verwenden. In diesem Tutorium werden nicht alle Funktionen und Werkzeuge verwendet, die im Arbeitsbereich Part Design zur Verfügung stehen, sondern es werden so viele verwendet, dass der Benutzer dieses Tutoriums eine grundlegende Basis erhält, auf der er sein Wissen und seine Fähigkeiten aufbauen kann.

## Das Bauteil

![](/images/Tutorial_Drawing_Sheet.png)

## Konstruktion des Bauteils

### Beginn

Zunächst ist sicherzustellen, dass der Arbeitsbereich Part Design aktiviert ist. Dort wird ein neues Dokument erstellt, falls es noch nicht erfolgt ist. Es ist eine gute Angewohnheit, eine Arbeit oft zu speichern, also wird vor allem anderen das neue Dokument gespeichert, mit einem beliebigen Namen, der einem gefällt.

Alle Arbeiten in Part Design beginnen mit einem [Körper](/Glossary/de#Body "Glossary/de"). Dann wird innerhalb dieses Körper einVolumenkörper aufgebaut, beginnend mit einer [Skizze](/Glossary/de#Sketch "Glossary/de").

1. Die Schaltfläche ![](/images/PartDesign_Body.svg) [Körper erstellen](/PartDesign_Body/de "PartDesign Body/de") drücken, um einen neuen Körper (Body-Container) zu erstellen und zu aktivieren. *Hinweis: Dieser Schritt kann ausgelassen werden. Wird eine Skizze erstellt und es ist kein Körper vorhanden, wird automatisch eine neuer erstellt und aktiviert.*
2. Die Schaltfläche ![](/images/PartDesign_NewSketch.svg) [Skizze erstellen](/PartDesign_NewSketch/de "PartDesign NewSketch/de") drücken. Dies erstellt eine Skizze (ein Sketch-Objekt) im soeben erstellten Körper.
3. Es muss noch angegeben werden, woran die Skizze befestigt wird. In diesem Fall wird die Skizze auf einer Fläche im [Ursprung](/Glossary/de#Origin "Glossary/de") des Körpers (Origin-Objekt) befestigt.
4. Im [Aufgabenbereich](/Task_panel/de "Task panel/de") der [Combo-Ansicht](/Combo_view/de "Combo view/de") wählt man **YZ\_Plane (Basis-Ebene)** aus der Liste und drückt OK:

![](/images/Tut17_sketchplanes.png)

Hinweis: Es ist möglich, dass die OK-Schaltfläche nicht sichtbar ist, wenn die Seitenleiste nicht breit genug ist. Es kann erweitert werden, indem man an seinem rechten Rand zieht. Den Mauszeiger über den Rand bewegen; wenn sich der Zeiger in einen Zwei-Wege Pfeil verwandelt, drückt und hält man die linke Maustaste und zieht (den Rand).

Sobald auf OK geklickt wird, wechselt FreeCAD automatisch in den Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") und öffnet die Skizze im Bearbeitungsmodus:

![](/images/Tut17_sketcherempty.png)

### Die Skizze erstellen

Als nächstes wird das Werkzeug ![](/images/Sketcher_CreatePolyline.svg)[Linienzug erstellen](/Sketcher_CreatePolyline/de "Sketcher CreatePolyline/de") verwendet und eine Form ähnlich der im nächsten Bild erstellt. Es muss nicht perfekt sein, da die endgültige Form durch Randbedingungen (auch Einschränkungen, Beschränkungen, Zwänge genannt) erzeugt wird. Sobald die Grundform erstellt ist, werden die Randbedingungen festgelegt. Wenn die automatischen Randbedingungen aktiviert sind, werden einige dieser Randbedingungen automatisch angewendet, andernfalls führt man die folgenden Schritte aus.
Doch zuerst muss das Linienzug-Werkzeug durch einen Rechtsklick oder zweimaliges Drücken der Esc-Taste verlassen werden; der Maus-Cursor sollte von einem Fadenkreuz zurück zum Standard-Pfeil-Mauszeiger wechseln. Die Esc-Taste nicht ein drittes Mal drücken, sonst wird der Bearbeitungsmodus verlassen. Falls das passiert, auf den Modell-Reiter klicken, dann doppelt auf das Skizzenelement im Baum klicken oder mit der rechte Maustaste klicken und **Skizze editieren** im Kontextmenü wählen. Um das Verlasen des Bearbeitungsmodus nach zu häufigen Drücken der Esc-Taste zu vermeiden, ändert man die Voreinstellung **Esc kann den Skizzenbearbeitungsmodus** ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")), siehe [Sketcher Voreinstellungen](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de").

*Hinweis: Seit diese Anleitung verfasst wurde, hat der Sketcher-Löser (Berechnungsalgorithmus im Hintergrund) viele Verbesserungen erfahren; Entdeckt er eine überzählige Randbedingung, wird die Skizze orange eingefärbt und bevor weitere Randbedingungen hinzugefügt werden, sollte die überzählige Randbedingung entfernt werden. (Die überzählige Randbedingung wird im Aufgabenbereich angezeigt; ein Klick auf ihren blauen Verweis und anschließend die Löschtaste drücken.)*

1. Die zwei horizontalen Linien mit der Maus durch Draufklicken auswählen und dann die Schaltfläche ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal festlegen](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de") drücken.
2. Die vertikale Linie auf der rechten Seite auswählen und dann die Schaltfläche ![](/images/Sketcher_ConstrainVertical.svg) [Vertical festlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de") drücken.
3. Die Anfangs- und Endpunkte des Linienzugs auswählen und die Schaltfläche ![](/images/Sketcher_ConstrainCoincident.svg) [Koinzidenz festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") drücken, um den Linienzug zu schließen.
4. Die untere horizontale Linie und die rechte vertikale Linie auswählen und die Schaltfläche ![](/images/Sketcher_ConstrainEqual.svg) [Gleichheit festlegen](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de") drücken.
5. Eine horizontale oder eine vertikale Linie auswählen und dann die entsprechende Randbedingung ![](/images/Sketcher_ConstrainDistanceX.svg) [Horizontalen Abstand festlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de") oder ![](/images/Sketcher_ConstrainDistanceY.svg) [Vertikalen Abstand festlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de") auswählen und für den Abstand den Wert von 26 mm eingeben.
6. Die obere horizontale Linie auswählen und den horizontalen Abstand mit 5 mm festlegen.
7. Den unteren rechten Endpunkt (Knoten) der horizontalen Linie und dann den Mittelpunkt des Rasters wählen und die Schaltfläche ![](/images/Sketcher_ConstrainCoincident.svg) [Koinzidenz festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") drücken, um die Form zu fixieren.

An diesem Punkt sollte man eine vollständig bestimmte Skizze haben, wie durch die Farbe und die in der Combo-Ansicht angezeigte Nachricht angezeigt. Sie sollte jetzt genau wie im folgenden Bild aussehen.

![](/images/Tut17B_profile.png)

Nun im [Aufgabenbereich](/Task_panel/de "Task panel/de") die Schaltfläche Schließen drücken, um den Skizzenbearbeitungsmodus zu verlassen und Skizze aufpolstern ![](/images/PartDesign_Pad.svg) [Aufpolsterung](/PartDesign_Pad/de "PartDesign Pad/de") aus der Symbolleiste im PartDesign-Menü wählen. Das öffnet ein **Aufpolstern**-Menü im Aufgabenbereich. In diesem Dialogfeld zuerst das Aufklappmenü **Typ** und dann **Zwei Längen** wählen. Die Zeichnung am Anfang dieses Tutorials sagt aus, dass das Teil 53 mm lang ist. Wir erhalten diesen Abstand, indem wir unsere Skizze in beide Richtungen von der Mittelebene aus auffüllen, d.h. es wird symmetrisch bezüglich der Skizzierebene aufgepolstert. Der Grund dafür wird später beim Erstellen von Features klar werden. Zunächst soll das Teil insgesamt 53 mm lang sein, also 26,5 für die erste Länge und 26,5 für die zweite Länge eingeben. Alternativ könnte die volle Länge von 53 mm eingegeben und dann auf das Kontrollkästchen **Symmetrisch zu einer Ebene** geklickt werden. Sobald das erledigt ist, haben wir nun unsere Basis, auf der wir zusätzliche Features hinzufügen werden, um unser Teil zu konstruieren.

Ein Video der Schritte in diesem Teil des Tutorials ist hier:
<https://youtu.be/cUyPnCMeTgg>

### Formelemente mit Taschen und externen Geometrien

Mit der Maus oder den Ansichtssymbolen wird das Modell so gedreht, dass seine Rückseite sichtbar ist. Sobald sie sichtbar ist, wird sie mit einem Klick ausgewählt, wie im nächsten Bild dargestellt.

![](/images/PD_WB_Tutorial003.png)

Nachdem die Oberfläche ausgewählt wurde, auf das Symbol **Neue Skizze** in der PartDesign-Menüleiste klicken. Dies wird unsere nächste Skizze auf die Rückseite des Teils positionieren. Nun das Werkzeug ![](/images/Sketcher_CreateRectangle.svg) [Rechteck](/Sketcher_CreateRectangle/de "Sketcher CreateRectangle/de") auswählen und ein Rechteck auf die Rückseite des Teils auf ähnliche Weise positionieren, wie unten gezeigt. Nun den aufgeführten Schritten folgen und die Skizze mit Randbedingungen festlegen.

1. Eine der horizontalen Linien auswählen und ihre Länge festlegen, durch Anwendung der Randbedingung Horizontalen Abstand festlegen mit einem Wert von 5 mm.
2. Eine der vertikalen Linien auswählen und ihre Länge festlegen, durch Anwendung der Randbedingung Vertikalen Abstand festlegen mit einem Wert von 11 mm.
3. Das Werkzeug ![](/images/Sketcher_External.svg) [Externe Geometrie](/Sketcher_External/de "Sketcher External/de") auswählen.
4. Den oberen rechten Eckpunkt der Fläche anklicken, um einen Punkt aus der externen Geometrie zu erhalten, mit dem unsere Skizze verknüpft werden soll.

![](/images/Tut17_slot_unconstrained.png)

1. Ein Rechtsklick beendet den Externe-Geometrie-Modus
2. Den gerade mit dem Werkzeug **Externe Geometrie** erstellten Punkt und zusätzlich den oberen rechten Eckpunkt des in der Skizze vorhandenen Rechtecks auswählen und die Schaltfläche ![](/images/Sketcher_ConstrainCoincident.svg) [Koinzidenz festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") drücken. An diesem Punkt sollte die Skizze vollständig bestimmt sein und wie im nächsten Bild aussehen.

![](/images/Tut17_slote_constrained.png)

Danach auf die Schaltfläche **Schließen** oben in der Registerkarte **Aufgaben** in der Combo-Ansicht klicken und dann das Werkzeug ![](/images/PartDesign_Pocket.svg) [Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de") aus der Symbolleiste oder aus dem PartDesign-Menü wählen. Das Werkzeug **Tasche** ist das Gegenstück zur **Aufpolsterung**. Während das Werkzeug **Aufpolsterung** dem Teil Material hinzufügt, entfernt das Werkzeug **Tasche** Material von dem Teil. Beide Operationen werden als Formelemente bezeichnet. Für diese Taschen-Funktion wird aus dem Aufklappmenü **Typ** der Punkt **Durch alles** ausgewählt und dann auf die Schaltfläche OK geklickt.

Für den nächsten Schritt muß "Pocket" im Modell-Reiter der Combo-Ansicht ausgewählt sein. Nun auf ![](/images/PartDesign_Mirrored.svg) [Spiegelnin](/PartDesign_Mirrored/de "PartDesign Mirrored/de") der Symbolleiste oder im PartDesign-Menü klicken. Im Dialogfeld **Gespiegelte Parameter** in der Combo-Ansicht die Option **Horizontale Skizzenachse** aus dem Aufklappmenü **Ebene** wählen. Auf OK klicken. Die Funktion Spiegeln funktioniert auf diese Weise, weil das Basis-Formelement unseres Modells in der ersten Operation mit der Basisskizze in beiden Richtungen von der horizontalen Ebene aus aufgepolstert wurde. Wenn alles gut gegangen ist, sollte jetzt ein Teil vorhanden sein, das dem Bild unten entspricht, nachdem es in die Vorderansicht gedreht wurde.

![](/images/Tut17_profilewithslots.png)

Ein Video der Schritte in diesem Teil des Tutorials ist hier:
<https://youtu.be/wiGXV9G7mrM>

### Formelemente mit Aufpolsterung und externen Geometrien

Nach betrachten des Bauteils, wird es wieder zurück gedreht und noch einmal die Rückseite des Teils ausgewählt, um die nächste Skizze zuzuordnen.

![](/images/Tut17_profilewithslotsrearplane.png)

Wählen Sie **Neue Skizze** und erstellen Sie ein neues Rechteck in dieser, ähnlich wie im folgenden Bild gezeigt. Fahren Sie dann fort, diesem Rechteck dimensionale Einschränkungen hinzuzufügen.

1. Wählen Sie eine horizontale Linie und wenden Sie eine horizontale Abstandseinschränkung mit einem Wert von 16.7 an.
2. Wählen Sie eine vertikale Linie aus und wenden Sie eine vertikale Abstandseinschränkung von 7 mm an.
3. Wählen Sie mit dem Werkzeug Externe Geometrie den oberen linken Eckpunkt der Bauteilfläche aus.

![](/images/Tut17_sidblockunconstrained.png)

Durch Auswahl der gerade projizierten Ecke und der oberen linken Ecke des Rechtecks werden mit Hilfe der *Koinzidenzeinschränkung* die noch vorhandenen Freiheitsgrade beseitigt und die Skizze vollständig festgelegt.

![](/images/Tut17_sideblockconstraind.png)

Schließen Sie den Sketcher.

Als nächstes beenden wird diese Skizze und klicken auf *Block* . Im Block-Dialog der Combo-Ansicht wollen wir eine Länge von 26 mm eintragen, wobei wir den Typ als Dimension belassen und dann das Kontrollkästchen *Reversed* markieren. Wenn Sie das Kontrollkästchen *Umgekehrt* verwenden, wird der Block in das Teil und nicht in das Teil verschoben. Diese Operation liefert das folgende Ergebnis.

![](/images/Tut17_sideblock.png)

Die Mirror-Funktion erneut anwenden, um den zweiten Block zu erhalten. Der erstellte Block muß in der Baumansicht ausgewählt sein. Dann in der Symbolleiste auf **erzeuge gespiegeltes Objekt** oder **Spiegeln** aus dem PartDesign Menü klicken. Wir werden die oben für **Tasche** (pocket) durchgeführte Operation wiederholen und im Aufklappmenü **Ebene** die Option **Horizontale Skizzenachse** auswählen.

![](/images/Tut17_profilewithsideblocks.png)

Ein Video der Schritte in diesem Teil des Tutorials ist hier:
<https://youtu.be/Ido1owp8ubc>

### Formelemente mit Taschen und externen Geometrien

An diesem Punkt drehen wir das Teil in der Ansicht nach vorne, wir können sehen, dass unser Teil nun wie das Teil in der bemaßten Zeichnung am Anfang dieses Tutorials aussieht. Sobald die Vorderseite sichtbar ist, klickt man mit der Maus auf die geneigte Oberfläche, um diese auszuwählen, da wir diese für die nächste Skizze verwenden werden.

![](/images/Tut17_innerplane.png)

Hier werden wir wieder das Werkzeug Rechteck verwenden und ein Rechteck in unsere Skizze einfügen, und nachdem wir dies getan haben, wenden wir die folgenden Randbedingungen an.

1. Eine horizontale Linie und eine vertikale Linie auswählen und nachdem beide ausgewählt wurden, die Randbedingung Gleichheit festlegen auswählen.
2. Entweder eine horizontale oder eine vertikale Linie auswählen und die zugehörige Randbedingung Horizontalen Abstand festlegen bzw. Vertikalen Abstand festlegen mit einem Wert von 17 mm anwenden.
3. Mit dem Werkzeug Externe Geometrie den oberen rechten Eckpunkt auswählen, wie in der Abbildung unten gezeigt.

![](/images/Tut17_rechtangleholeunconstrained.png)

Gemäß den Maßen der nachfolgenden Abbildungen sollen folgende Randbedingungen erstellt werden.

1. Zwischen dem projizierten Eckpunkt und dem oberen, rechten Eckpunkt des Rechtecks eine horizontale Distanz von 7 mm.
2. Zwischen dem projizierten Eckpunkt und dem oberen, rechten Eckpunkt des Rechtecks eine vertikale Distanz von 11 mm.

Das Ergebnis sollte folgendermaßen aussehen.

![](/images/Tut17_rectangleholeconstrained.png)

Würde man an dieser Stelle diese Skizze einfach zu einer Tasche ausformen, wäre das resultierende Loch senkrecht zu der geneigten Fläche, welcher es zugeordnet ist, und das ist nicht, was wir wollen.

![](/images/Tut17_wrongplaneforpocket.png)

Wir möchten, dass das Loch senkrecht zur Rückseite steht, aber die projizierten Abmessungen des Hohlraums von der Rückseite gesehen, sind dann nicht die Abmessungen von 17 mm x 17 mm, welche in der Zeichnung angegeben sind. Man müßte erst die erforderlichen Berechnungen durchführen um die erforderlichen Abmessungen zu erhalten. Oder wir können die in FreeCAD bereitgestellten Tools verwenden, um diese Projektion für uns zu erstellen.

Ein Video der Schritte in diesem Teil des Tutorials ist hier:
<https://youtu.be/x4d5nZPWCLQ>

Um eine Tasche zu erstellen, die das geneigte Rechteck als Auslass hat, zeichnen wir ein neues Rechteck auf der Rückseite, wobei wir die Projektion des geneigten Rechtecks als externe Referenz verwenden. Bewegen Sie das Bauteil herum, um die Rückseite des Teils zu sehen, und wählen Sie diese aus, um darauf die letzte Skizze zu erstellen.

![](/images/Tut17_profilewithsideblocksrearplane.png)

![](/images/PartDesign_NewSketch.svg) [Skizze erstellen](/PartDesign_NewSketch/de "PartDesign NewSketch/de") in der Symbolleiste oder im PartDesign-Menü auswählen. Im Skizzenbearbeitungsmodus sehen wir nun das skizzierte Rechteck auf der Schräge nicht mehr. Um es auswählbar zu machen, wechseln wir in der Combo-Ansicht zur Modell-Registerkarte und wählen die letzte Skizze (Sketch003) auf der geneigten Ebene. Die Leertaste drücken, um diese sichtbar zu machen. Als nächstes die Spiegelfunktion oben (Mirrored001) wählen und wieder mit der Leertaste diese verstecken. Danach sollte das Rechteck in der 3D-Ansicht zu sehen sein. Man kann weiterhin mit der sichtbaren Registerkarte **Modell** arbeiten oder zur Registerkarte **Aufgaben** zurückkehren. Mit dem Werkzeug ![](/images/Sketcher_External.svg) [Externe Geometrie](/Sketcher_External/de "Sketcher External/de") die oberen und unteren horizontalen Kanten des geneigten Rechtecks auswählen.
Dann mit dem Werkzeug ![](/images/Sketcher_CreateRectangle.svg) [Rechteck](/Sketcher_CreateRectangle/de "Sketcher CreateRectangle/de") ein neues Rechteck zur Skizze hinzufügen.

![](/images/Tut17_rectangleunconstrained.png)

1. Den oberen linken Eckpunkt des Rechtecks und den oberen linken Punkt der externen Geometrie wählen und auf die Koinzidenzbedingung klicken.
2. Den unteren rechten Eckpunkt des neuen Rechtecks und den unteren rechten Punkt der externen Geometrie wählen und auf die Koinzidenzbedingung klicken.

Und das sollte am Ende dabei herauskommen.

![](/images/Tut17_rectangleconstrained.png)

Für den letzten Schritt in diesem Tutorium wird das Sketcher-Fenster mit Schließen oder Bearbeitung beenden aus dem Kontextmenü von Sketch004 geschlossen und danach das Werkzeug ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket/de "PartDesign Pocket/de") aus der Symbolleisteleiste oder aus dem PartDesign-Menü ausgewählt. Aus dem Auswahlmenü Typ die Option **Durch alles** auswählen und auf die Schaltfläche OK klicken.

![](/images/Tut17_final.png)

An dieser Stelle sind einige Linien zu erkennen, die von sich schneidenden Formelementen stammen. In diesem Fall überschneidet sich der "Seitenblock" mit dem "Basisprofil", was ihn als dreieckigen Block über dem Profil erscheinen lässt (d.h. im obigen Bild ist eine zusätzliche Linie auf der rechten Seite des Modells sichtbar). Um diese Linien zu entfernen, kann entweder "Form verfeinern" in den Part Design Einstellungen einschalten, oder, um etwas Verarbeitungsgeschwindigkeit zu sparen und trotzdem mit diesen Linien zu konstruieren, die Eigenschaft bei jedem Formelement einzeln einschalten. Die Einstellung auf Formelement-Ebene kann im Reiter "Daten" des Formelements vorgenommen werden. Setze die [***refine'** Eigenschaft*](/Property_editor/de#Daten "Property editor/de") auf TRUE für das Taschen-Formelement Pocket001 , um das Verfeinern aufzurufen.

![](/images/Tut17_refine.png)

![](/images/Tut17_final_refined.png)

Ein Video zu diesen Schritten des Tutoriums sind hier:
<https://youtu.be/UYI0gvxCYeI>

Dieses Tutorium und dein Modell sind vollständig.

## Zusätzliche Quellen

* FreeCAD Datei zum Vergleich (mit 0.17 erstellt) [Herunterladen](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Part_Design_Tutorial/de&oldid=1352074>"