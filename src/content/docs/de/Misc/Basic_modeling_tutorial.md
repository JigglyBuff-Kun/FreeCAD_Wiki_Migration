---
title: Tutorium grundlegende Modellierung
---
|  |
| --- |
| Tutorium |
| Thema |
| {{{Topic}}} |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 15 Minuten |
| Autoren |
| *Not provided* |
| FreeCAD-Version |
| jede |
| Beispieldateien |
| *None* |
| Siehe auch |
| *None* |
|  |

## Einleitung

Dieses Tutorium grundlegende Modellierung zeigt dir, wie du einen Eisenwinkel modellierst. Eine Sache, die du wissen solltest, ist, dass FreeCAD modular aufgebaut ist, und wie bei vielen anderen CAD Programmen gibt es immer mehr als eine Möglichkeit, Dinge zu tun. Wir werden hier zwei Methoden untersuchen.

Diese Anleitung wurde mit FreeCAD 0.15 geschrieben.

## Bevor wir beginnen

Denke daran, dass FreeCAD sich noch in einem frühen Entwicklungsstadium befindet, so dass du möglicherweise nicht so produktiv bist wie mit einer anderen CAD Anwendung, und du wirst sicherlich auf Fehler stoßen oder Abstürze erleben. FreeCAD hat nun die Möglichkeit, Sicherungsdateien zu speichern. Die Anzahl dieser Sicherungsdateien kann im Einstellungsdialog festgelegt werden. Zögere nicht, 2 oder 3 Sicherungsdateien zuzulassen, bis du weisst, wie man mit FreeCAD umgeht.

Speichere deine Arbeit häufig, von Zeit zu Zeit unter einem anderen Namen, damit du auf eine "sichere" Kopie zurückgreifen kannst, und sei auf die Möglichkeit vorbereitet, dass einige Befehle nicht die erwarteten Ergebnisse liefern könnten.

## Einführung Modellierungstechniken

Die erste (und grundlegende) Technik der Volumenmodellierung ist [Konstruktive Festkörpergeometrie (CSG)](http://en.wikipedia.org/wiki/Constructive_solid_geometry). Es gibt auch eine detaillierte Erklärung (im Kontext von FreeCAD) von [Konstruktive Volumenkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de") im Wiki. Du arbeitest mit Grundformen wie Würfeln, Zylindern, Kugeln und Kegeln, um deine Geometrie zu konstruieren, indem du sie kombinierst, eine Form von der anderen subtrahierst oder sie schneidest. Diese Werkzeuge sind Teil des [Part Arbeitsbereichs](/Part_Workbench/de "Part Workbench/de"). Du kannst auch Transformationen auf Formen anwenden, wie z. B. das Anwenden von Rundungen oder Fasen an Kanten. Diese Werkzeuge sind ebenfalls in der  [Part Arbeitsbereich](/Part_Workbench/de "Part Workbench/de") enthalten.

Dann gibt es fortgeschrittenere Werkzeuge. Du beginnst, indem du ein 2D Profil zeichnest, das du entweder extrudierst oder drehst.

Beginnen wir also damit, dass wir versuchen, mit diesen 2 Methoden einige eiserne Füße für einen Tisch zu machen.

## 1. Methode - Durch konstruktive Festkörpergeometrie

1. Beginne mit dem [Part Arbeitsbereich](/Part_Workbench/de "Part Workbench/de") ![](/images/Switch_PartWorkbench.JPG).
2. Wenn du kein neues FreeCAD Dokument geöffnet hast (der größte Teil des FreeCAD Fensters ist ausgegraut), klicke im Aufklappmenü auf **Datei → Neu** oder klicke auf das ![](/images/Std_New.svg) **Neu**-Symbol.
3. Klicke auf die ![](/images/Part_Box.svg) [Kasten](/Part_Box/de "Part Box/de") Schaltfläche zum Erstellen eines Kastens
4. Ändere seine Abmessungen, indem du ihn entweder im 3D Raum auswählst oder indem du ihn auf dem Projektreiter links anklickst, dann
5. Klicke unten auf den Datenreiter und ändere die Werte für Länge, Breite und Höhe auf 50 mm, 50 und 750 *(siehe Abb. 1.1)'* **Hinweis**: *Damals, als diese Aufnahmen gemacht wurden, waren die Eigenschaften anders angeordnet, wobei die Höhe an erster Stelle stand*.
6. Der Kasten füllt jetzt den größten Teil der 3D Ansicht aus. Klicke auf ![](/images/Std_ViewFitAll.svg) [Fit All](/Std_ViewFitAll/de "Std ViewFitAll/de") , um die Ansicht an den neu erstellte Kasten anzupassen.
7. Erstelle einen zweiten Kasten auf die gleiche Weise, aber mit den Werten L=40, B=40 und H=750 mm. Standardmäßig wird dieser Kasten dem ersten Kasten überlagert. *(siehe Abb. 1.2)*
8. Du wirst nun den zweiten Kasten vom ersten subtrahieren. Wähle zuerst die erste Form (genannt Box), dann die zweite Form (genannt Box001), die Reihenfolge der Auswahl ist wichtig! (Stelle sicher, dass beide Formen im Projektbaum ausgewählt sind. **Eine Sache, die du dir merken solltest:** im Inventor Navigationsmodus, Strg + Klick funktioniert nicht bei Mehrfachauswahl. Schalte [Maus Navigation](/Mouse_navigation/de "Mouse navigation/de") entweder auf CAD oder auf Blender).
9. Auf der Part Arbeitsbereichswerkzeugleiste klicke auf das ![](/images/Part_Cut.svg) [Schnitt](/Part_Cut/de "Part Cut/de") Werkzeug.

![](/images/Tutorial-normand01.jpg)

Abb. 1.1 Der erste Kasten

![](/images/Tutorial-normand02.jpg)

Abb. 1.2 Der zweite Kasten über dem ersten Kasten, bereit zur Subtraktion

![](/images/Tutorial-normand03.jpg)

Abb. 1.3 Nach dem Ausschneiden

Du hast jetzt deinen ersten Eisenwinkel *(Abb. 1.3)*. Du wirst feststellen, dass im Projektreiter auf der linken Seite beide Kästchen durch ein "Cut" (Schnitt) Objekt ersetzt wurden. Eigentlich sind sie nicht verschwunden, sondern unter dem "Cut" (Schnitt) Objekt gruppiert. Klicke auf die + Schaltfläche davor, und du wirst sehen, dass beide Kästchen immer noch da sind, aber ausgegraut *(Abb. 1.4)*. Wenn du auf eines der beiden Kästchen klickst und die Leertaste drückst, wird es angezeigt. Die Leertaste schaltet [Sichtbarkeit](/Std_ToggleVisibility/de "Std ToggleVisibility/de") der ausgewählten Objekte um. *(Abb. 1.5)*

Willst du nicht, dass der Winkel so ausgerichtet wird? Du musst nur die Platzierung der Box001-Form ändern. Wähle sie aus, blende sie ein, und im Datenreiter klicke auf das + vor Platzierung, erweitere dann den Positionsparameter und ändere seine X und Y Koordinaten. Drücke auf Enter, blende die Form Box001 wieder aus, und dein Winkelausrichtung ist jetzt anders. *(Abb. 1.5)* Du kannst sogar die Abmessungen einer deiner Formen ändern, und das Schnittobjekt wird aktualisiert.

![](/images/Tutorial-normand04.jpg)

Abb. 1.4 Der Schneidevorgang behält seine ursprünglichen Objekte (die Kästen) bei

![](/images/Tutorial-normand05.jpg)

Abb. 1.5 Du kannst die Originalkästen weiterhin sichtbar machen

Übrigens können wir unter Verwendung des ![](/images/Part_Fillet.svg) [Verrundung](/Part_Fillet/de "Part Fillet/de") Werkzeugs Rundungen zum Winkel hinzufügen, damit er realistischer wird *(Abb. 1.6)*

![](/images/Tutorial-normand06.jpg)

Abb. 1.6 Die abgerundeten Kanten

## 2. Methode - Durch Extrudieren eines Profils

Diese Methode erfordert, dass du mit dem Zeichnen eines 2D Profils beginnst. Dazu musst du den [Entwurf Arbeitsbereich](/Draft_Workbench/de "Draft Workbench/de") aktivieren. ![](/images/Switch_DraftWorkbench.JPG).

1. Wenn du kein neues FreeCAD Dokument geöffnet hast (der größte Teil des FreeCAD Fensters ist ausgegraut), klicke im Aufklappmenü auf **Datei → Neu** oder klicke auf das ![](/images/Std_New.svg) **Neu**-Symbol.

### Setzen der Arbeitsebene

Zuerst müssen wir festlegen, auf welcher [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") wir unsere Profile entwerfen.

1. Finde die unten gezeigte Symbolleiste. Abhängig von Deinen Draft-Voreinstellungen kann es unter der Hauptleiste, bzw. links oder rechts daneben sein.

   :   ![](/images/DraftPlaneAuto.png)
2. Drücke den Auto-Button (ggf. mit "None" bezeichnet)
3. Abhängig von Deinen Draft-Voreinstellungen öffnet das einen **Ebene auswählen**-Dialog im seitlichen Aufgaben-Panel oder eine horizontale Werkzeugleiste mit der Bezeichnung "aktiver Befehl: **Ebene wählen**".
4. Wir lassen den Wert der *Offset*-Eigenschaft bei Null.
5. Drücke den XY-Button, um die Arbeitsebene auf XY zu setzen. Dies schließt das Aufgaben-Panel oder die ausgeklappten Buttons. Der "Auto"-Button trägt nun die Bezeichnung "Top", um dies als die aktive Arbeitsebene anzuzeigen.

### Entwerfen des Profils

1. Wähle das ![](/images/Draft_Wire.svg) [EDraht (Mehrpunkt-Entwurfsdraht)](/Draft_Wire/de "Draft Wire/de") Werkzeug.
2. Aktiviere die "Relativ" und "Gefüllt" Kästchen.
3. Anstatt die Form in der 3D Ansicht zu zeichnen, werden wir die Koordinaten in die *Globales X*-, *Globales Y*- und *Globales Z*-Eingabefelder eintragen. Das funktioniert wie folgt:
   1. Klicke in das *Globales X* Eingabefeld;
   2. Gibt einen Wert wie in der folgenden Liste aufgeführt ein und drücke Tab, um in das *Globales Y* Feld zu wechseln;
   3. Gib den *Globales Y* Wert ein und drücke Tab, um in das *Globales Z* Feld zu wechseln;
   4. Belasse den Nullwert im *Globales Z* Feld und drücke Enter, um die Koordinaten des Punktes zu validieren;
   5. Wiederhole das für die nächsten fünf Punkte.
      * **Koordinaten** (X, Y, Z)
      * 1. Punkt: 0, 0, 0
      * 2. Punkt: 50, 0, 0
      * 3. Punkt: 0,10, 0
      * 4. Punkt: -40, 0, 0 **Anmerkung:** *In FreeCAD 0.16 gibt es einen Fehler, der den vorigen Punkt entfernt, wenn das Minuszeichen ins Eingabefeld eingetragen wird. Eine Übergangslösung ist, einen positiven Wert einzugeben, dann den Cursor vor die Zahl zu setzen und das Minuszeichen zu tippen (dieser Fehler ist in v0.17 behoben)*
      * 5. Punkt: 0, 40, 0
      * 6. Punkt: -10, 0, 0
      * Drücke die Schließen Taste, um das Profil zu schließen. Du solltest jetzt dieses Profil mit dem Titel **DWire** im Modellreiter haben:

![](/images/Tutorial-normand07.jpg)

Abb. 1.7 Der Basislinienzug

Drücke die 0 (Null) Taste auf der Zifferntastatur, um die Ansicht auf axonometrisch einzustellen.

### Extrudieren des Profils

Aktiviere den ![](/images/Workbench_Part.svg) [Part Arbeitsbereich](/Part_Workbench/de "Part Workbench/de") entweder über die [Arbeitsbereichswähler](/Std_Workbench/de "Std Workbench/de") oder über **[Ansicht](/Std_View_Menu/de "Std View Menu/de") → Arbeitsbereich → Part** Menü.

Klicke auf das ![](/images/Part_Extrude.svg) [Extrudieren](/Part_Extrude/de "Part Extrude/de") Werkzeug.

Wähle auf dem Aufgabenreiter auf der linken Seite das Objekt **Draht** aus. Gib dann die gewünschte Länge ein, sagen wir 750 mm. Lasse die Richtung bei Z = 1. Drücke OK. Du solltest jetzt ein **Extrudieren** Objekt im Modellreiter *(Abb. 1.8)* haben.

![](/images/Tutorial-normand08.jpg)

Abb. 1.8 Die extrudierte Skizze

Diese Methode hat einen kleinen Nachteil gegenüber der ersten Methode: Um die Form oder die Maße des Objekts zu ändern, muss die Skizze geändert werden, was mit einem größeren Aufwand verbunden ist als eine Änderung bei der ersten Methode.

Und es gibt noch ein paar andere Möglichkeiten, dies zu tun! Ich hoffe, dass dir diese beiden Beispiele den Einstieg erleichtern. Auf dem Weg dorthin wirst du sicher auf einige Schwierigkeiten stoßen (das habe ich, als ich das erste Mal FreeCAD lernte, und ich habe 3D CAD Erfahrung), aber zögere nicht, Fragen im [FreeCAD-Forum](https://forum.freecadweb.org) zu stellen!

### Anmerkung zur schaltfläche Entwurf Arbeitsebene

Die Beschriftung deiner Schaltfläche kann unterschiedlich sein, je nach deiner Version und auch abhängig davon, was du vorher gemacht hast. Die Beschriftung der Schaltfläche könnte lauten: "Oben", "Vorne", "Seite", "Keine" oder eine Vektordarstellung wie d(0.0,0.0,1.0). Sie kann auch leer sein. Zum Beispiel:

![](/images/DraftPlaneNone.png)

Ebene Keine auswählen

![](/images/DraftPlaneTop.png)

Ebene oben auswählen

![](/images/DraftPlaneView.png)

Select Plane View

Nach Drücken des Buttons werden die Optionen abhängig von den Voreinstellungen wie folgt ausgeklappt:

![](/images/DraftPlaneTasks.png)

**Ebene wählen** Parameter wie im Ausgaben-Panel-Modus

oder

![](/images/DraftPlaneToolbarMode.png)

**Ebene wählen** Parameter wie im Werkzeugleisten-Modus

Die obigen Anweisungen werden funktionieren, unabhängig von der Beschriftung Deines Buttons.

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_modeling_tutorial/de&oldid=1332515>"