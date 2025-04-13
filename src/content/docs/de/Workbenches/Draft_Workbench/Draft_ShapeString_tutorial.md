---
title: Draft Textform Tutorium
---
|  |
| --- |
| Tutorium |
| Thema |
| Produktgestaltung |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 30 Minuten |
| Autoren |
| r-frank und vocx |
| FreeCAD-Version |
| 0.17 und höher |
| Beispieldateien |
| [Draft\_Shapestring\_Text](https://github.com/FreeCAD/Examples/blob/master/Draft_Shapestring_Tutorial_Examples/Draft_Shapestring_Tutorial_Text.FCStd?raw=true) |
| Siehe auch |
| *None* |
|  |

## Einleitung

Dieses Tutorium wurde ursprünglich von Roland Frank (†2017, r-frank) geschrieben, und es wurde von vocx neu geschrieben und illustriert.

Dieses Tutorium beschreibt eine Methode zur Erstellung von 3D-Text und dessen Verwendung mit Festkörperobjekten im Arbeitsbereich ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de"). Wir werden besprechen, wie man

* umrandeten Text mit dem Werkzeug ![](/images/Draft_ShapeString.svg) [Draft Textform](/Draft_ShapeString/de "Draft ShapeString/de") einfügt,
* mit ![](/images/Part_Extrude.svg) [Part Extrudieren](/Part_Extrude/de "Part Extrude/de") daraus einen 3D-Festkörper extrudiert,
* diesen mit [Positionierung](/Placement/de "Placement/de"), und ![](/images/Draft_Move.svg) [Draft Verschieben](/Draft_Move/de "Draft Move/de") im 3D-Raum positioniert (hierbei wird eine Skizze als Hilfsgeometrie verwendet), und
* den Text durch Anwendung der booleschen Verknüpfung ![](/images/Part_Cut.svg) [Draft Differenz](/Part_Cut/de "Part Cut/de") graviert.

Um Textformen innerhalb des Arbeitsbereichs ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") zu verwenden, ist der Prozess im Wesentlichen derselbe wie im Arbeitsbereich Part, aber die Textform wird innerhalb des [PartDesign Körpers](/PartDesign_Body/de "PartDesign Body/de") platziert, um ihn zu extrudieren. Weitere Informationen befinden sich am Ende dieses Tutoriums.

![](/images/08_T04_Part_ShapesString_Extrude_final_cut.png)

Endgültiges Modell des gravierten Textes.

Der Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") wird kurzzeitig zum Zeichnen einer Hilfslinie verwendet. Weitere Informationen zu den Werkzeugen dieses Arbeitsbereichs findet man unter

* [Grundlegendes Sketcher Tutorium](/Basic_Sketcher_Tutorial/de "Basic Sketcher Tutorial/de")
* [Sketcher-Referenzhandbuch](/Sketcher_Lecture/de "Sketcher Lecture/de")

## Einrichtung

1. FreeCAD öffnen, ein neues leeres Dokument mit **Datei → ![](/images/Std_New.svg) [Neu](/Std_New/de "Std New/de")** erstellen, und in den Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") wechseln.

:   1.1. Die Schaltfläche ![](/images/Std_ViewIsometric.svg) [Isometrisch](/Std_ViewIsometric/de "Std ViewIsometric/de") drücken oder die 0 auf dem Ziffernblock der Tastatur drücken, um die Ansicht auf isometrisch zu ändern und die 3D-Festkörper besser zu veranschaulichen.
:   1.2. Die Schaltfläche ![](/images/Std_ViewFitAll.svg) [Einpassen](/Std_ViewFitAll/de "Std ViewFitAll/de") drücken, wenn Objekte hinzugefügt werden, um die [3D-Ansicht](/3D_view/de "3D view/de") so zu schwenken und zu zoomen, dass alle Elemente in der Ansicht zu sehen sind.
:   1.3. Strg (Ctrl) während der Auswahl gedrückt halten, um mehrere Elemente auszuwählen. Wenn etwas falsch ausgewählt wurde oder alles abgewählt werden soll, klickt man einfach auf eine leere Stelle in der [3D-Ansicht](/3D_view/de "3D view/de").

## Die Grundform erstellen

2. Einen Grundkörper-Würfel einfügen, indem man auf ![](/images/Part_Box.svg) [Quader](/Part_Box/de "Part Box/de") klickt.

:   2.1. Das `Würfel`-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
:   2.2. Die Abmessungen im Reiter **Daten** des [Eigenschafteneditors](/Property_editor/de "Property editor/de") anpassen.
:   2.3. Die Breite (**Width**) auf `31 mm` ändern.

3. Eine Fase erstellen.

:   3.1. Die obere Kante (`Edge6`) auf der Vorderseite des `Würfels` in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
:   3.2. ![](/images/Part_Chamfer.svg) [Anfasen...](/Part_Chamfer/de "Part Chamfer/de") drücken.
:   3.3. Im [Aufgaben-Bereich](/Task_panel/de "Task panel/de") **Kanten anfasen** unter **Auswahl** die Option **Kanten auswählen** aktivieren. Unter **Fasentyp** die Option `Gleicher Abstand` auswählen und die **Länge** auf `5 mm` setzen.
:   3.4. OK drücken. Dies erstellt eine Fase, ein `Chamfer`-Objekt.
:   3.5. In der [Baumansicht](/Tree_view/de "Tree view/de") das `Chamfer`-Objekt auswählen und im Reiter **Ansicht** den Wert von **Line Width** (Linienbreite) auf `2.0` setzen.

![](/images/01_T04_Part_Cube_base_long.png)

Basisobjekt erzeugt aus einem Würfel und einer Fasenbearbeitung.

## Die Textform einfügen

4. In den Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") wechseln.

:   4.1. Sicherstellen, dass in der [Baumansicht](/Tree_view/de "Tree view/de") nichts ausgewählt ist.
:   4.2. Die Arbeitsebene auf XY (oben) festlegen, indem ![](/images/Draft_SelectPlane.svg) [EbeneAuswählen](/Draft_SelectPlane/de "Draft SelectPlane/de") angeklickt und ![](/images/View-top.svg) [Draufsicht](/Std_ViewTop/de "Std ViewTop/de") gedrückt wird.

5. Den Text "FreeCAD" einfügen.

:   5.1. Die Schaltfläche ![](/images/Draft_ShapeString.svg) [Form von Text](/Draft_ShapeString/de "Draft ShapeString/de") drücken.
:   5.2. **X** auf `0 mm` ändern.
:   5.3. **Y** auf `0 mm` ändern.
:   5.4. **Z** auf `0 mm` ändern.
:   5.5. Oder die Schaltfläche Punkt zurücksetzen drücken.
:   5.6. Die **Zeichenkette** in `FreeCAD` ändern und die **Höhe** auf `5 mm`. **Nachverfolgung** auf `0 mm` ändern (noch aktuell?).
:   5.7. Sicherstellen, dass **Schriftartendatei** auf eine gültige Schriftart zeigt (z.B. `/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf` oder `C:/Windows/Fonts/arial.ttf`). ... drücken, um den Dialog des Betriebssystems zu öffnen und eine Schriftart zu finden.

    :   *Hinweis:* mehr Details zum Arbeiten mit Schriftarten findet man im Abschnitt [Draft Textform Hinweise](/Draft_ShapeString/de#Hinweise "Draft ShapeString/de")
:   5.8. Die Schaltfläche OK drücken. Dies erstellt eine Textform, ein `ShapeString`-Objekt.
:   5.9. Das Dokument neu berechnen, durch Drücken der Schaltfläche ![](/images/Std_Refresh.svg) [Aktualisieren](/Std_Refresh/de "Std Refresh/de").
:   5.10. In der [Baumansicht](/Tree_view/de "Tree view/de") das `ShapeString`-Objekt auswählen, dann im Reiter **Ansicht** den Wert von **Line Width** auf `2.0` ändern.
:   5.11. In der [Baumansicht](/Tree_view/de "Tree view/de") das `Chamfer`-Objekt auswählen, dann im Reiter **Ansicht** den Wert von **Visibility** auf `false` setzen oder die Leertaste drücken. Dies blendet das Objekt aus, sodass die Textform ( `ShapeString`-Objekt) besser zu sehen ist.
:   5.12. Um die Textform von oben zu sehen, wird die Ansicht durch drücken der Schaltfläche ![](/images/View-top.svg) [Draufsicht](/Std_ViewTop/de "Std ViewTop/de"), oder der Taste 2 gewechselt.
:   5.13. Um die isometrische Ansicht wiederherzustellen, wird die Schaltfläche ![](/images/Std_ViewIsometric.svg) [Isometrisch](/Std_ViewIsometric/de "Std ViewIsometric/de") gedrückt oder die Taste 0.

![](/images/02_T04_Part_ShapeString.png)

Text erstellt als Textform, d.h. als eine Sammlung von Kanten in einer Ebene.

## Den Text als 3D-Festkörper erstellen

6. In den Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") zurückwechseln.

:   6.1. In der [Baumansicht](/Tree_view/de "Tree view/de") das `ShapeString`-Objekt auswählen und dann die Schaltfläche ![](/images/Part_Extrude.svg) [Extrudieren...](/Part_Extrude/de "Part Extrude/de") auswählen.
:   6.2. Im [Aufgaben-Bereich](/Task_panel/de "Task panel/de") **Extrudieren** unter **Richtung** die Option **Entlang der Normale** auswähle. Unter **Länge** den Wert für **Entlang** auf `1 mm` setzen. Die Option **Festkörper erstellen** aktivieren.
:   6.3. Die Schaltfläche OK drücken. Dies erstellt ein `Extrude`-Objekt.
:   6.4. In der [Baumansicht](/Tree_view/de "Tree view/de") das `Extrude`-Objekt auswählen und dann im Reiter **Ansicht** den Wert von **Line Width** (Linienbreite) auf `2.0` ändern.

![](/images/03_T04_Part_ShapeString_Extrude.png)

Text als Textform erstellt und durch Extrusion in einen Festkörper verwandelt.

## Hilfsskizze für die Positionierung einfügen

Nun zeichnen wir eine einfache Skizze, die als Hilfsgeometrie zur Positionierung der Textform-Extrusion verwendet wird.

7. In der [Baumansicht](/Tree_view/de "Tree view/de") das `Extrude`-Objekt auswählen und die Leertaste drücken, um es auszublenden.

8. Zum Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") wechseln.

9. In der [Baumansicht](/Tree_view/de "Tree view/de") das `Chamfer`-Objekt auswählen und die Leertaste drücken, um es einzublenden.

:   9.1. Die durch die Anfasen-Operation erzeugte schräge Fläche (`Face3`) auswählen.
:   9.2. Die Schaltfläche ![](/images/Sketcher_NewSketch.svg) [Skizze erstellen](/Sketcher_NewSketch/de "Sketcher NewSketch/de") auswählen. Im Dialogfeld **Skizze Anhang** die Option `Ebene Fläche` auswählen und OK drücken.
:   9.3. Die Ansicht sollte sich automatisch so ausrichten, dass die Kamera(ebene) parallel zur gewählten Fläche liegt.
:   9.4. Eine horizontale Linie an einer beliebigen Stelle oben auf der Fläche zeichnen. Die Länge ist unwichtig; wir brauchen nur ihre Position.
:   9.5. Den linken Endpunkt mit einem Abstand von `2.5 mm` zur lokalen X-Achse und zur lokalen Y-Achse festlegen mit den Befehlen ![](/images/Sketcher_ConstrainDistanceX.svg) [XAbstandFestlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de") und ![](/images/Sketcher_ConstrainDistanceY.svg) [YAbstandFestlegen](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de").
:   9.6. Da die Skizze nur ein Hilfsobjekt ist, muss sie nicht vollständig bestimmt sein. Um sie doch vollständig zu bestimmen, kann z.B. die Länge auf `20 mm` festgelegt werden, wieder mit ![](/images/Sketcher_ConstrainDistanceX.svg) [XAbstandFestlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de").
:   9.7. Die Skizze schließen.

![](/images/04_T04_Part_ShapeString_support_sketch.png)

Die mit dem Skizzierer erstellte Linie, mit (maßlichen) Randbedingungen.

![](/images/05_T04_Part_ShapeString_support_sketch_3D.png)

Die auf der Oberseite der Festkörperfläche erstellte Skizzenlinie, die als Referenz für die Positionierung des extrudierten Textes verwendet wird.

## Positionierung des Festkörpertextes im 3D-Raum

10. In der [Baumansicht](/Tree_view/de "Tree view/de") das `Extrude`-Objekt auswählen und die Leertaste auf der Tastatur drücken, um es sichtbar zu machen.

11. In der [Baumansicht](/Tree_view/de "Tree view/de") das `Extrude`-Objekt auswählen, und im Reiter **Daten** des [Eigenschafteneditors](/Property_editor/de "Property editor/de") auf den Wert von **Placement** klicken; dann die Schaltfläche ... drücken, die am rechten Rand erscheint.

:   11.1. Die Option **Wende inkrementelle Änderungen an** aktivieren.
:   11.2. Unter **Drehung** in `Rotationsachse mit Winkel` auswählen. Die **Achse** auf `Z` festlegen (durch setzen der X-, Y-, und Z-Werte für **Achse** auf `0`, `0` und `1`; `Z` ist der dritte Wert). Anschließend den **Winkel** auf `90 °` festlegen, dann die Schaltfläche Anwenden drücken. Dies wendet eine Rotation um die Z-Achse an und setzt das Feld **Winkel** auf Null zurück.
:   11.3. Unter **Drehung** in `Rotationsachse mit Winkel` auswählen (falls nötig). Die **Achse** auf `Y` festlegen, (durch setzen der X-, Y-, und Z-Werte für **Achse** auf `0`, `1` und `0`). Anschließend den **Winkel** auf `45 °` festlegen, dann die Schaltfläche Anwenden drücken. Dies wendet eine Rotation um die Y-Achse an und setzt das Feld **Winkel** auf Null zurück.
:   11.4. Die Schaltfläche OK drücken, um den Dialog zu schließen.

12. Wieder zum Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") wechseln.

:   12.1. Zum Zeichenstil *Drahtgitter* wechseln, durch Auswahl des Menüeintrags **Ansicht → [Darstellungsart](/Std_DrawStyle/de "Std DrawStyle/de") → ![](/images/DrawStyleWireFrame.svg) Drahtgitter** oder durch Drücken der Schaltfläche ![](/images/DrawStyleWireFrame.svg) [Drahtgitter](/Std_DrawStyle/de "Std DrawStyle/de") in der Symbolleiste Ansicht. Dadurch werden die Objekte sichtbar, die sich hinter anderen Objekten befinden.
:   12.2. Sicherstellen, dass unter [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") die Methode "Einrasten auf Endpunkt" aktiviert ist. Dies kann (über den Menüeintrag **Entwurf → Einrasten → ![](/images/Draft_Snap_Lock.svg) [Einrasten sperren](/Draft_Snap_Lock/de "Draft Snap Lock/de")** und dann  **→ ![](/images/Draft_Snap_Endpoint.svg) [Einrasten auf Endpunkt](/Draft_Snap_Endpoint/de "Draft Snap Endpoint/de")**, oder (- Menüeinträge nicht vorhanden!!! -)) durch Drücken der Schaltflächen ![](/images/Draft_Snap_Lock.svg) [Einrasten sperren](/Draft_Snap_Lock/de "Draft Snap Lock/de") und ![](/images/Draft_Snap_Endpoint.svg) [Einrasten auf Endpunkt](/Draft_Snap_Endpoint "Draft Snap Endpoint") in der Symbolleiste Draft-Einrasten erfolgen.

13. In der [Baumansicht](/Tree_view/de "Tree view/de") das `Extrude`-Objekt auswählen.

:   13.1. Die Schaltfläche ![](/images/Draft_Move.svg) [Verschieben](/Draft_Move/de "Draft Move/de") drücken.
:   13.2. In der [3D-Ansicht](/3D_view/de "3D view/de") den oberen linken Eckpunkt des `Extrude`-Objekts (1) und dann den äußersten linken Punkt der mit dem Sketcher gezeichneten Linie (2) anklicken.
:   13.3. Wenn ![](/images/Draft_Snap_Endpoint.svg) [Einrasten auf Endpunkt](/Draft_Snap_Endpoint/de "Draft Snap Endpoint/de") aktiviert ist und der Mauszeiger in die Nähe eines Knotens bewegt wird, sollte zu erkennen sein, dass er sich genau an diesen anfügt.
:   *Hinweis:* Wenn Probleme mit dem Einrasten auf Knoten auftreten, sollte man sicherstellen, dass nur die Methode ![](/images/Draft_Snap_Endpoint.svg) [Einrasten auf Endpunkt](/Draft_Snap_Endpoint/de "Draft Snap Endpoint/de") aktiviert ist. sind mehrere Einrastmethoden gleichzeitig aktiv, wird es schwieriger, das richtige Element auszuwählen.
:   13.4. Der extrudierte Text sollte sich nun innerhalb des Körpers des `Chamfer`-Objekts befinden.

![](/images/06_T04_Part_ShapeString_move.svg)

Die extrudierte Textform sollte auf die Position der skizzierten Linie verschoben werden, die auf der Fläche des Grundkörpers liegt.

![](/images/07_T04_Part_ShapesString_Extrude_in_place.png)

Die extrudierte Textform positioniert auf der `Fase`.

## Gravierten Text erstellen

14. Zum Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") zurück wechseln.

:   14.1. Zum Zeichenstil "Original" wechseln, durch Auswahl des Menüeintrags **Ansicht → [Darstellungsart](/Std_DrawStyle/de "Std DrawStyle/de") → ![](/images/DrawStyleAsIs.svg) Original**, oder durch Drücken der Schaltfläche ![](/images/DrawStyleAsIs.svg) [Original](/Std_DrawStyle/de "Std DrawStyle/de") in der Symbolleiste Ansicht. Damit werden alle Objekte mit der normalen Schattierung und Farbe angezeigt.
:   14.2. In der [Baumansicht](/Tree_view/de "Tree view/de") die Skizze (das `Sketch`-Objekt) auswählen und die Leertaste drücken, um es auszublenden.

15. In der [Baumansicht](/Tree_view/de "Tree view/de") zuerst das `Chamfer`-Objekt und dann das `Extrude`-Objekt auswählen.

:   15.1. Dann ![](/images/Part_Cut.svg) [Differenz](/Part_Cut/de "Part Cut/de") drücken. Dies wird ein `Cut`-Objekt erzeugen. Dies ist das endgültige Objekt.
:   *Hinweis:* die Reihenfolge, in der die Objekte ausgewählt werden, ist wichtig für den Beschnittvorgang. Das Basisobjekt wird zuerst ausgewählt, danach das abzuziehende Objekt.
:   15.2. In der [Baumansicht](/Tree_view/de "Tree view/de") das `Cut`-Objekt auswählen, und im Reiter **Ansicht** den Wert der Linienbreite ( **Line Width**) auf `2.0` setzen.

![](/images/08_T04_Part_ShapesString_Extrude_final_cut.png)

Endgültiges Modell eines angefasten Quaders, mit graviertem Text, der aus einer Textform (ShapeString-Objekt), einer Extrusion (Extrude-Objekt) und der booleschen Verknüpfung Differenz erstellt wurde.

## 3D-Text gravieren mit dem Arbeitsbereich PartDesign

Ein ähnlicher Ablauf wie oben beschrieben kann im Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") durchgeführt werden.

1. Zuerst die ![](/images/Draft_ShapeString.svg) [Draft Textform](/Draft_ShapeString/de "Draft ShapeString/de") erstellen.
2. Einen ![](/images/PartDesign_Body_Tree.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") erstellen (er bleibt automatisch aktiviert) und einen Basis-Festkörper in Form eines Grundkörpers hinzufügen oder eine Skizze erstellen und mit ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad/de "PartDesign Pad/de") extrudieren.
3. Das `ShapeString`-Objekt in den aktiven Körper verschieben.
4. Das `ShapeString`-Objekt an eine der Flächen des Festkörpers anhängen oder mit ![](/images/Part_EditAttachment.svg) [/de|Part Befestigung](/Part_EditAttachment "Part EditAttachment") an einer ![](/images/PartDesign_Plane.svg) [PartDesign Bezugsebene](/PartDesign_Plane/de "PartDesign Plane/de") befestigen.
5. Jetzt ein ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad/de "PartDesign Pad/de") oder eine ![](/images/PartDesign_Pocket.svg) [PartDesign Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de") aus dem `ShapeString`-Objekt erstellen, um ein entsprechendes additives bzw. subtraktives [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de") aus dem Grundkörper zu erzeugen.

Siehe den Forumsbeitrag [Wie man Textformen in PartDesign verwendet](https://forum.freecadweb.org/viewtopic.php?f=3&t=36623).

## Hinweise

* Um gekrümmten Text zu erstellen, kann man das Makro ![](/images/FCCircularTextButtom.png) [Makro FCCircularText](/index.php?title=Macro_FCCircularText/de&action=edit&redlink=1 "Macro FCCircularText/de (page does not exist)") verwenden.
* Um Text aus einer SVG-Datei zu importieren, schaue dir das Tutorium [Importieren von Text und Geometrie aus Inkscape](/Import_text_and_geometry_from_Inkscape/de "Import text and geometry from Inkscape/de") an.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ShapeString_tutorial/de&oldid=1529367>"