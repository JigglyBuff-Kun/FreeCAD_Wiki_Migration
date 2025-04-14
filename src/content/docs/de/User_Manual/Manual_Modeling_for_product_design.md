---
title: Handbuch Modellierung zur Produktgestaltung
---

Der Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") in FreeCAD ist ein vielseitiges Werkzeug zum Erstellen parametrischer 3D-Modelle, besonders nützlich für Festkörperkonstruktionen. Er ermöglicht, mit 2D-Skizzen zu beginnen, die dann zu 3D-Objektenwerden, wenn man Werkzeuge zum Erstellen von ![](/images/PartDesign_Pad.svg) [Blöcken](/PartDesign_Pad/de "PartDesign Pad/de"), ![](/images/PartDesign_Revolution.svg) [Drehkörpern](/PartDesign_Revolution/de "PartDesign Revolution/de"), und ![](/images/PartDesign_Pocket.svg) [Vertiefungen](/PartDesign_Pocket/de "PartDesign Pocket/de") einsetzt. Dieser Arbeitsbereich ist unverzichtbar für die Konstruktion von Bauteilen, die eine hohe Genauigkeit und eine parametrische Steuerung erfordern, da beim Ändern einer Skizze oder eines Formelements automatisch das ganze Modell aktualisiert wird.

Einer der Hauptvorteile des Arbeitsbereichs PartDesign ist seine Eignung zur Erstellung von Bauteilen für den 3D-Druck. Da 3D-Drucker wasserdichte Festkörpermodelle erfordern, sorgt der Arbeitsbereich PartDesign dafür, dass alle Formelemente in einem einzelnen zusammenhängenden Körper verbleiben. Dies verhindert üblicherweise Probleme wie Lücken oder überlappende Flächen, die während der Aufbereitung für den 3D-Druck (slicing) zu Problemen führen können. Ist die Konstruktion ersteinmal komplett, kann sie als STL-Datei gespeichert werden. (STL, ein Dateiformat, das die meisten 3D-Drucker unterstützen) Dies macht den Arbeitsbereich PartDesign zur ersten Wahl für die Erstellung qualitativ hochwertiger druckbarer Objekte, ob Prototypen, funktionierende Bauteile oder aufwändige Modelle für den 3D-Druck.

Um zu darzustellen, wie der Arbeitsbereich PartDesign funktioniert, lasst uns diesen wohlbekannten [Lego](https://de.wikipedia.org/wiki/Lego)-Baustein erstellen. Unter [Grundlegende PartDesign-Anleitung 0.19](/Basic_Part_Design_Tutorial_019/de "Basic Part Design Tutorial 019/de") findet sich ein weiteres Bespiel, wenn man ein anderes Objekt ausprobieren möchte.

![](/images/FreeCAD_Exercise1_RedBrick.png)

Wir werden jetzt ausschließlich die Werkzeuge der Arbeitsbereiche [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") und [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") verwenden. Da auch alle Werkzeuge des Arbeitsbereichs Sketcher im Arbeitsbereich PartDesign enthalten sind, können wir in PartDesign bleiben und müssen nicht zwischen den beiden hin und her wechseln.

In FreeCADs Arbeitsereich PartDesign werden Objekte hauptsächlich auf Skizzen aufgebaut, die aus Linienabschnitten bestehen wie (gerade) Linien, Kreisbögen oder Ellipsen sowie einer Reihe von Randbedingungen. Diese Randbedingungen legen bestimmte geometrische Regeln für die Skizze fest und können sowohl auf die Linienabschnitte selbst als auch auf bestimmenden Punkte wie Endpunkte oder Mittelpunkte angewendet werden. Zum Beispiel hält die Randbedingung Vertikal festlegen, auf eine Linie angewandt, diese genau senkrecht fest oder die Randbedingung Sperren, auf einen Punkt angewandt, hält diesen auf seiner Position fest und verhindert, dass er verschoben werden kann.

Eine Skizze wird als vollständig bestimmt angesehen, wenn jeder Punkt durch eine geeignete Anzahl von Randbedingungen auf seiner Position gehalten wird, was bedeutet, dass sich kein Teil der Skizze mehr frei bewegen kann. Eine vollständige bestimmte Skizze ist optimal, da sie sicherstellt, dass ihre Ausführung sinnvoll festgelegt und stabil ist und im weiteren Konstruktionsprozess vorhersagbare Änderungen ermöglicht. Andererseits kann dies zu Konflikten in der Geometrie führen, wenn mehr Randbedingungen als nötig hinzugefügt werden (d.h. die Skizze überbestimmt ist). FreeCAD warnt den Anwender vor jeder überzähligen oder widersprüchlichen Randbedingung, da Überbestimmtheit in folgenden Konstruktionsschritten, wie Extrudieren oder Ausschneiden, zu Problemen führen kann.

Das Hinzufügen der richtigen Randbedingungen, ist der Schlüssel zum Erstellen eines stabilen, parametrischen Modells. Durch besonnenes Ausbalancieren der Randbedingungen können Skizzen einfach geändert oder eingestellt werden ohne die Geometrie zu zerstören. Diese Steuerung macht den Arbeitsbereich Part Design zu einem Leistungsfähigen Werkzeug für genaues, parametrisches Modellieren, besonders für Aufgaben wie 3D-Druck, bei dem das Unterhalten geometrischer Beziehungen entscheident ist, um genaue funktionierende Bauteile zu erstellen.

Skizzen haben einen Bearbeitungsmodus, in dem ihre Geometrie und Randbedingungen verändert werden können. Wenn die Bearbeitung abgeschlossen ist und der Bearbeitungsmodus verlassen wurde, verhalten sich Skizzen wie jedes andere FreeCAD-Objekt und können als Bausteine für alle Part-Design-Werkzeuge eingesetzt werden aber auch in anderen Arbeitsbereichen, wie [Part](/Part_Workbench/de "Part Workbench/de") oder [Arch](/Arch_Workbench/de "Arch Workbench/de"). Der Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") hat auch ein Werkzeug, das Draft-Objekte in Skizzen umwandelt und umgekehrt.

- Zum Arbeitsbereich ![](/images/Workbench_PartDesign.svg) [Part Design](/PartDesign_Workbench/de "PartDesign Workbench/de") wechseln.
- Die Schaltfläche ![](/images/PartDesign_NewSketch.svg) [Skizze erstellen](/PartDesign_NewSketch/de "PartDesign NewSketch/de") drücken und die **XY**-Ebene auswählen, die die "Bodenebene" darstellt. Die Skizze wird erstellt und sofort in den Bearbeitungsmodus versetzt; die Ansicht wird so gedreht, dass man orthogonal auf die Skizze blickt.
- Ein Rechteck zeichnen, indem die Schaltfläche ![](/images/Sketcher_CreateRectangle.svg) [Rechteck erstellen](/Sketcher_CreateRectangle/de "Sketcher CreateRectangle/de") gedrückt wird und zwei Eckpunkte angeklickt werden. Die Beiden Punkte können an beliebiger Stelle gesetzt werden, dabei darf aber keine der Achsen angeklickt werden. Die korrekte Position der Punkte wird in einem der nächsten Schritte festgelegt.
- Wir stellen fest, dass einige Randbedingungen automatisch zu unserem Rechteck hinzugefügt wurden: Den horizontalen und vertikalen Abschnitten wurden die Randbedingungen Horizontal festlegen bzw. Vertikal festlegen zugeordnet. Außerdem wurden in jeder Ecke die Eckpunkte mit der Randbedingung Koinzidenz festlegen zusammengeheftet. Wir können versuchen das Rechteck zu bewegen, indem seine Kanten mit der Maus gezogen werden. Dabei beachtet die gesamte Geometrie weiterhin die Randbedingungen.
- Jetzt ist unsere Skizze unterbestimmt, da ihr noch vier Randbedingungen fehlen: jeweils eine für die Länge, die Breite sowie die X- und Y-Positionierung. Durch die fehlenden Randbedingungen kann die Skizze (das Rechteck) frei entlang den X- und Y-Achsen bewegt werden. Bis diese Randbedingungen festgelegt werden, ist die Geometrie nicht fest verankert, d.h. die Größe sowie die Lage der Skizze bleiben einstellbar. Um die Skizze vollständig zu bestimmen, müssen wir Randbedingungen hinzufügen, die die Werte festlegen und die Skizze verankern.

![](/images/FreeCAD_Exercise1_re_UC.png)

- Jetzt werden wir drei weitere Randbedingungen hinzufügen:
  - Das Werkzeug ![](/images/Sketcher_Dimension.svg) [Bemaßen](/Sketcher_Dimension/de "Sketcher Dimension/de") aktivieren, einen der vertikalen Abschnitte auswählen und seine Länge auf 23.7 mm festlegen.
  - Mit dem noch immer aktivierten Werkzeug einen der horizontalen Abschnitte auswählen und seine Länge aug 47.7 mm festlegen.
  - Das Werkzeug ![](/images/Sketcher_ConstrainSymmetric.svg) [Symmetrisch festlegen](/Sketcher_ConstrainSymmetric/de "Sketcher ConstrainSymmetric/de") aktivieren, den oberen linken Eckpunkt des Rechtecks auswählen, danach den unteren rechten Eckpunkt und schließlich den Ursprungspunkt (der Punkt an dem sich die rote und die grüne Achse schneiden). Dies stellt sicher, dass das Rechteck auf dem Ursprungspunkt zentriert bleibt, reduziert seinen Bewegungsbereich und erhält die Symmetrie über beide Achsen.
- Wir stellen fest, dass das Rechteck jetzt grün eingefärbt ist, was anzeigt, dass es vollständig bestimmt ist. Das heißt, dass jetzt jeder Teil der Skizze, einschließlich ihrer Position, Größe und Form komplett festgelegt und verankert ist. Es ist generell eine gute Vorgehensweise Skizzen vollständig zu bestimmen, da dies dabei hilft, die Kontrolle über die Konstruktion zu behalten und ungewollte Änderungen während folgender Arbeitsschritte zu vermeiden.

![](/images/FreeCAD_Exercise1_re.png)

- Unsere Skizze ist nun bereit und wir können den Bearbeitungsmodus durch Drücken der Schaltfläche **Schließen** oben im Aufgaben-Fenster oder einfach durch Drücken der **Esc**-Taste verlassen. Wenn es später nötig ist, dann können wir jederzeit in der Baumansicht mit einem Doppelklick auf die Skizze oder mit einem Rechtsklick und Auswahl der Menüoption Skizze bearbeiten im Kontextmenü wieder in den Bearbeitungsmodus wechseln.
- Lasst uns das Teil mit dem Werkzeug ![](/images/PartDesign_Pad.svg) [Block](/PartDesign_Pad/de "PartDesign Pad/de") extrudieren und dabei einen Abstand von 14,4 mm angeben. Die anderen Optionen bleiben bei ihren Vorgabewerten:

![](/images/FreeCAD_Exercise1_padding.png)

- Das Werkzeug **Pad** ist dem Werkzeug ![](/images/Part_Extrude.svg) [Part Extrude](/Part_Extrude/de "Part Extrude/de") des Arbeitsbereichs ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") ähnlich, aber mit einem einscheidenden Unterschied: Ein Block ist immer mit seiner Skizze verknüpft und kann nicht unabhängig davon bewegt werden. Um einen Block zu versetzen, muss die Skizze, auf der er basiert, versetzt werden; das stellt sicher, dass Der Block sicher befestigt bleibt. Das Pad wird immer Bestandteil desselben Körpers sein und gewährleistet eine durchgängige Konstruktion; dies ist besonders nützlich für komplizierte Bauteile, für die Formelemente schrittweise aufeinander aufgebaut und ausgerichtet werden müssen. Dies stabilisiert eine Konstruktion, besonders wenn man sicherstellen möchte, dass alles korrekt ausgerichtet und verankert bleibt.

- Lasst uns acht Zylinder auf der Deckfläche der Bausteins erstellen. Zuerst die die Deckfläche des Bausteins auswählen, dann die Option ![](/images/Std_AlignToSelection.svg) [Auf die Auswahl ausrichten](/Std_AlignToSelection/de "Std AlignToSelection/de") anklicken, um die Ansicht auf diese Fläche auszurichten. Dies stellt eine deutliche und direkte Ansicht bereit, die das Positionieren der Zylinder vereinfacht.
- Die Schaltfläche ![](/images/PartDesign_NewSketch.svg) [New Sketch](/PartDesign_NewSketch/de "PartDesign NewSketch/de") anklicken. die neue Skizze wird direkt auf der Deckfläche erstellt.
- Zwei ![](/images/Sketcher_Circle.svg) [Kreise](/Sketcher_CreateCircle/de "Sketcher CreateCircle/de") an beliebiger Stelle erstellen.
- Beide Kreismittelpunkte und die X-Achse (rote Linie) auswählen. Dann die Schaltfläche ![](/images/Sketcher_ConstrainSymmetric.svg) [Symmetrisch festlegen](/Sketcher_ConstrainSymmetric/de "Sketcher ConstrainSymmetric/de") anklicken.
- Beide Kreismittelpunkte auswählen und die Schaltfläche ![](/images/Sketcher_ConstrainEqual.svg) [Gleichheit festlegen](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de") anklicken.
- Mit dem Werkzeug ![](/images/Sketcher_Dimension.svg) [Bemaßung](/Sketcher_Dimension/de "Sketcher Dimension/de") den Durchmesser eines Kreises auf 7.2 mm festlegen. Da wir schon für beide Kreise die Gleichheit der Durchmesser festgelegt haben, muss der Durchmesser des zweiten Kreises nicht eingegeben werden; er wird automatisch an den ersten angepasst.
- Jetzt müssen die Kreise relativ zu den Kanten der Fläche positioniert werden. Wir können aber keine Punkte auf der Kante direkt auswählen, sondern müssen das Werkzeug ![](/images/Sketcher_External.svg) [Externe Geometrie](/Sketcher_External/de "Sketcher External/de") einsetzen, um auf die Flächenkanten zu referenzieren; dies ermöglicht uns, die Kreise präzise im Bezug auf die Fläche festzulegen. Die Schaltfläche drücken und die linke Kante der Fläche auswählen. Diese Kante wird jetzt rot hervorgehoben und es können Referenzpunkte von ihr erstellt werden; dies ermöglicht, die Kreise präzise zu den Flächenrändern auszurichten.
- Jetzt können X- und Y-Abstände des einen Mittelpunktes auf 6 mm festgelegt werden. Da die Lage beide Kreise zueinander festgelegt sind, wird der zweite entsprechend ausgerichtet.

![](/images/FreeCAD_Exercise1_TopFaceSketch.png)

- Wir stellen wieder einmal fest, dass die Skizze vollständig bestimmt ist, wenn Lage und Abmessungen jedes Objekts der Skizze festgelegt sind. Dadurch sind wir wieder auf der sicheren Seite. Wir können die erste Skizze nun ändern, aber alles, was wir danach getan haben, wird konsistent bleiben.
- Wir verlassen den Bearbeitungsmodus, selektieren diese neue Skizze und legen einen ![](/images/PartDesign_Pad.svg) [Block](/PartDesign_Pad/de "PartDesign Pad/de") mit 2,7 mm an:

![](/images/FreeCAD_Exercise1_topCylPad.png)

- Da wir die Deckfläche des Basisblocks als Grundlage für diese neue Skizze verwendet haben, wird jeder Part Design-Vorgang korrekt oberhalb dieser Basisform aufbauen. Die zwei Kreise sind keine unabhängige Objekte; sie werden direkt von dem vorhandenen Block aus extrudiert. Dies ist der Hauptvorteil der Arbeit im Arbeitsbereich Part Design Workbench; solange sichergestellt ist, dass jeder Schritt auf dem vorherigen aufbaut, wird letztlich auch ein einzelner, zusammenhängender Festkörper erstellt.
- Wir können jetzt unsere zwei Gnubbel viermal duplizieren. Dazu den zuletzt erstellten Block auswählen.
- Die Schaltfläche ![](/images/PartDesign_LinearPattern.svg) [Lineares Muster](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de") drücken.
- Eine Länge von 36 mm (dies ist die "Spannweite", über die wir die Kopien gleichmäßig verteilen wollen) für die Richtung "Horizontale Skizzenachse" eingeben, und 4 Vorkommen einstellen:

![](/images/FreeCAD_Exercise1_topPattern.png)

- Wir werden jetzt den Baustein mit dem Werkzeug ![](/images/PartDesign_Pocket.svg) [Vertiefung](/PartDesign_Pocket/de "PartDesign Pocket/de") aushöhlen. Dies ist die PartDesign-Version von [Part Differenz](/Part_Cut/de "Part Cut/de"). Zum Erstellen einer Vertiefung, legen wir eine Skizze auf der Bodenfläche unseres Bausteins an.
- Die Bodenfläche auswählen und die Schaltfläche ![](/images/PartDesign_NewSketch.svg) [Skizze erstellen](/PartDesign_NewSketch/de "PartDesign NewSketch/de") drücken.
- Ein ![](/images/Sketcher_CreateRectangle.svg) [Rechteck](/Sketcher_CreateRectangle/de "Sketcher CreateRectangle/de") auf der Fläche zeichnen.
- Eine Randbedingung ![](/images/Sketcher_ConstrainSymmetric.svg) [Symmetrisch festlegen](/Sketcher_ConstrainSymmetric/de "Sketcher ConstrainSymmetric/de") hinzufügen; dafür den linken oberen Eckpunkt des Rechtecks auswählen, dann den Skizzenursprung (der Punkt an dem sich die rote und die grüne Achse schneiden) und den rechten unteren Eckpunkt.
- [Image:Sketcher\_External.svg|16px]] [Externe Geometrie](/Sketcher_External/de "Sketcher External/de") auswälen und die linke Kante der Bodenfläche anklicken. Die Linie wird rot hervorgehoben.
- Den horizontalen und vertikalen Abstand des Rechtecks zum rechten oberen Punkt mit dem Werkzeug ![](/images/Sketcher_Dimension.svg) [Bemaßung](/Sketcher_Dimension/de "Sketcher Dimension/de") auf 1,8 festlegen.

![](/images/FreeCAD_Exercise1_BottomRec.png)

- Drei ![](/images/Sketcher_Circle.svg) [Kreise](/Sketcher_CreateCircle/de "Sketcher CreateCircle/de") erstellen; dabei sicherstellen, dass sich ihre Mittelpunkte auf der X-Achse (rote Linie) befinden.
- Alle drei Kreise auswählen und ![](/images/Sketcher_ConstrainEqual.svg) [equa/delGleichheit festlegen](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") anklicken.
- Den Durchmesser auf 9,765 mm setzen.
- Den Abstand des Mittelpunktes des linken Kreises zur Bodenkante des Rechtecks, das wir zuvor erstellt haben, auf 10,2 mm setzen.
- Den Abstand zwischen dem linken und dem mittleren Kreis auf 12 mm setzen. Diesen Schritt wiederholen, um den Abstand zwischen dem mittleren und dem rechten Kreis auch auf 12 mm zu setzen.

![](/images/FreeCAD_Exercise1_BottomOuterCirc.png)

- Wir sind fast fertig.
- Drei zusätzliche ![](/images/Sketcher_Circle.svg) [Kreise](/Sketcher_CreateCircle/de "Sketcher CreateCircle/de") erstellen; dabei sicherstellen, dass jeder neue Kreis konzentrisch zu einem der zuvor gezeichneten liegt. Alternativ können die Kreise an beliebiger Stelle angelegt werden und mit dem Werkzeug ![](/images/Sketcher_ConstrainCoincident.svg) [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") ihre Mittelpunkte auf denen der vorhanden Kreise positionieren.
- Alle drei Kreise auswählen und ![](/images/Sketcher_ConstrainEqual.svg) [Gleichheit festlegen](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de") anklicken.
- Den Durchmesser eines Kreises auf 7,2 mm setzen.
- Jetzt können wir die Skizze verlassen.

![](/images/FreeCAD_Exercise1_bottomSketchCom.png)

- Die gesamte Skizze auswählen, das Werkzeug ![](/images/PartDesign_Pocket.svg) [Vertiefung](/PartDesign_Pocket/de "PartDesign Pocket/de") anklicken und die Länge auf 12 mm setzen.

![](/images/FreeCAD_Exercise1_BottomPad.png)

- Das war's. Unser Baustein ist fertig. Soll seine Farbe geändert werden, kann dies im Reiter **Ansicht** erledigt werden.

![](/images/FreeCAD_Exercise1_redBrick2.png)

Wir können erkennen, dass unsere Modellhistorie in der Baumansicht ziemlich umfangreich geworden ist. Dies ist unglaublich wertvoll, weil es uns ermöglicht, jeden einzelnen Schritt des Konstruktionsprozesses jederzeit erneut aufzurufen und zu ändern. Zum Beispiel das Anpassen dieses Modells zum Erstellen eines Bausteins mit 2x2 Knöpfen anstatt 2x4, wäre ein Klacks; wir müssten lediglich ein paar Einstellungen für die Abmessungen und die Anzahl von Wiederholungen in den Anordnungen ändern, das reicht. Die gleiche Flexibilität ermöglicht uns größere Bausteine zu erstellen, die es im originalen Lego-System nicht gibt. Die parametrische Natur von FreeCAD macht es einfach, vorhandene Modelle zu verändern, man hat die volle Kontrolle eine Konstruktion nach Bedarf anzupassen oder zu erweitern.

Aber wir könnten auch die Historie loswerden wollen, zum Beispiel wenn wir eine Burg mit diesem Baustein modellieren wollen, und wir diese ganze Historie nicht 500 Mal in unserer Datei haben möchten.

Es gibt zwei einfache Wege, um die Historie loszuwerden, einer ist die Nutzung des Werkzeugs [Einfache Kopie erstellen](/Part_SimpleCopy/de "Part SimpleCopy/de") aus dem Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de"), der eine Kopie unseres Teils erstellt, die nicht mehr von der Historie abhängt (die ganze Historie kann hinterher gelöscht werden), der andere Weg ist das Exportieren des Teils als STEP-Datei und das Zurückimportieren dieser Datei.

**Herunterladen**

- Das durch diese Übung produzierte Modell: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/lego.FCStd>

**Mehr lesen**

- [Der Skizzierer](/Sketcher_Workbench/de "Sketcher Workbench/de")
- [Der Part Design Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de")
- [Der Assembly2 Arbeitsbereich](https://github.com/hamish2014/FreeCAD_assembly2)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Modeling_for_product_design/de&oldid=1538796>"
