---
title: Whiffleball-Anleitung
---
|  |
| --- |
| Tutorium |
| Thema |
| Produktgestaltung |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 30 min |
| Autoren |
| r-frank und vocx |
| FreeCAD-Version |
| 0.17 und höher |
| Beispieldateien |
| [WhiffleBall\_Tutorial\_FCWiki.FCStd](https://github.com/FreeCAD/Examples/blob/master/Whiffle_Ball_Tutorial_ExampleFiles/WhiffleBall_Tutorial_FCWiki.FCStd?raw=true) |
| Siehe auch |
| *None* |
|  |

## Einleitung

Diese Anleitung wurde ursprünglich von Roland Frank (†2017, r-frank) verfasst und (nachfolgend) von vocx überarbeitet und illustriert.

Diese Anleitung soll vermitteln, wie man den Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") verwendet.

Der Arbeitsbereich Part war der Arbeitsbereich, der zuerst entwickelt wurde. Er stellt die grundlegenden geometrischen Elemente zur Verfügung, die als Bausteine für andere Arbeitsbereiche verwendet werden können. Der Arbeitsbereich Part ist für die Verwendung in einem herkömmlichen Arbeitsablauf für [konstruktive Festkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de") (constructive solid geometry, CSG) gedacht. Für einen moderneren Arbeitsablauf mit Skizzen, Blöcken und Formelementen wird der Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") verwendet.

Geübt wird:

* Grundelemente (Primitive) einfügen
* Parameter dieser Grundelemente anpassen
* Ihre [Positionierung](/Placement/de "Placement/de") ändern
* Boolesche Verknüpfungen anwenden

![](/images/10_T03_Part_ball_fillet.png)

Endgültiges Modell des Wiffleballs

## Einrichtung

1. FreeCAD öfnen, ein neues leeres Dokument mit **Datei → ![](/images/Std_New.svg) [Neu](/Std_New/de "Std New/de")** erstellen und zum Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") wechseln.

:   1.1. Die Schaltfläche ![](/images/Std_ViewIsometric.svg) [Isometrisch](/Std_ViewIsometric/de "Std ViewIsometric/de") drücken oder 0 auf dem Ziffernblock der Tastatur, um die Ansicht auf isometrisch zu ändern, für eine bessere Darstellung der 3D-Festkörper.
:   1.2. Die Schaltfläche ![](/images/Std_ViewFitAll.svg) [Einpassen](/Std_ViewFitAll/de "Std ViewFitAll/de") drücken, wann immer Objekte hinzugefügt werden, um die [3D-Ansicht](/3D_view/de "3D view/de") so zu schwenken und zoomen, dass alle Elemente in der Ansicht zu sehen sind.
:   1.3. Strg gedrückt halten, um mehrere Elemente durch Anklicken auszuwählen. Wurde etwas falsch ausgewählt oder soll die Auswahl aufgehoben werden, klickt man einfach auf einen leeren Bereich in der [3D-Ansicht](/3D_view/de "3D view/de").

## Würfel-Grundelemente einfügen

2. Ein Würfel-Grundelement einfügen durch Anklicken der Schaltfläche ![](/images/Part_Box.svg) [Quader](/Part_Box/de "Part Box/de").

:   2.1. `Quader` in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
:   2.2. Die Abmessungen im Reiter **Daten** des [Eigenschafteneditors](/Property_editor/de "Property editor/de") anpassen.
:   2.3. **Length** (Länge) auf `90 mm` ändern.
:   2.4. **Width** (Breite) auf `90 mm` ändern.
:   2.5. **Height** (Höhe) auf `90 mm` ändern.

3. Im Reiter **Daten** des [Eigenschafteneditors](/Property_editor/de "Property editor/de") den Wert von **Placement** anklicken, damit rechts die Taste ... (Auslassungszeichen, Ellipse) erscheint.

:   3.1. Das Auslassungszeichen drücken, um den Dialog [Positionierung](/Std_Placement/de "Std Placement/de") zu öffnen.
:   3.2. Die Werte für die **Verschiebung** anpassen.
:   3.3. **X** auf `-45 mm` ändern.
:   3.4. **Y** auf `-45 mm` ändern.
:   3.5. **Z** auf `-45 mm` ändern.
:   3.6. Die Schaltfläche OK drücken, um den Dialog zu schließen.

4. Den Vorgang wiederholen, um einen zweiten, kleineren Würfel einzufügen, durch Anklicken der Schaltfläche ![](/images/Part_Box.svg) [Quader](/Part_Box/de "Part Box/de").

:   4.1. Der zweite Quader wird mit dem gleichen Namen, aber mit einer zusätzlichen Nummer zum Unterscheiden der Objekte erstellt.
:   4.2. `Quader001` in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen und die Abmessungen sowie die Positionierung wie beim vorherigen Objekt anpassen.
:   4.3. **Length** (Länge) auf `80 mm` ändern.
:   4.4. **Width** (Breite) auf `80 mm` ändern.
:   4.5. **Height** (Höhe) auf `80 mm` ändern.
:   4.6. Den Dialog [Positionierung](/Std_Placement/de "Std Placement/de") öffnen.
:   4.7. **X** auf `-40 mm` ändern.
:   4.8. **Y** auf `-40 mm` ändern.
:   4.9. **Z** auf `-40 mm` ändern.
:   4.10. Die Schaltfläche OK drücken, um den Dialog zu schließen.

## Visuelle Eigenschaften anpassen

5. Die vorigen Operationen erstellen einen kleineren Würfel in einem größeren Würfel. Um dies zu veranschaulichen, können wir die **Ansicht**-Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") ändern.

:   5.1. `Quader001`, den kleineren Würfel in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen und die Farbe ändern. Dafür im Reiter **Ansicht** auf den Wert von **Shape Color** (Farbe der Form) klicken, um den Dialog **Farbauswahl** zu öffnen und darin einen grünen Farbton auswählen; auch den Wert von **Line Width** (Linienbreite) auf `2.0` ändern.
:   5.2. `Quader`, den größeren Würfel, in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen. Im Reiter **Ansicht** den Wert von **Transparency** (Transparenz) auf `70` ändern.

![](/images/01_T03_Part_cubes_visibility.png)

Ein Festkörper-Würfel innerhalb eines anderen Festkörper-Würfels

## Zylinder-Grundelemente einfügen

6. Ein Zylinder-Grundelement einfügen durch Anklicken der Schaltfläche ![](/images/Part_Cylinder.svg) [Zylinder](/Part_Cylinder/de "Part Cylinder/de").

:   6.1. `Zylinder` in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
:   6.2. Die Abmessungen im Reiter **Daten** des [Eigenschafteneditors](/Property_editor/de "Property editor/de") anpassen.
:   6.3. **Radius** auf `27,5 mm` ändern.
:   6.4. **Height** (Höhe) auf `120 mm` ändern.
:   6.5. Den Dialog [Positionierung](/Std_Placement/de "Std Placement/de") öffnen.
:   6.6. **Z** auf `-60 mm` ändern.
:   6.7. Die Schaltfläche OK drücken, um den Dialog zu schließen.

7. Den Vorgang wiederholen, um einen zweiten Zylinder einzufügen, durch Anklicken der Schaltfläche ![](/images/Part_Cylinder.svg) [Zylinder](/Part_Cylinder/de "Part Cylinder/de").

:   7.1. Der zweite Zylinder wird mit dem gleichen Namen, aber mit einer zusätzlichen Nummer zum Unterscheiden der Objekte erstellt.
:   7.2. `Zylinder001` in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen und die Abmessungen sowie die Positionierung wie beim vorherigen Objekt anpassen.
:   7.3. **Radius** auf `27.5 mm` ändern.
:   7.4. **Height** (Höhe) auf `120 mm` ändern.
:   7.5. Den Dialog [Positionierung](/Std_Placement "Std Placement") öffnen.
:   7.6. **Y** auf `60 mm` ändern.
:   7.7. Unter **Drehung** `Rotationsachse mit Winkel` einstellen; **X-Achse** festlegen (durch Ändern der Werte für `X`, `Y` und `Z` auf `1`, `0` und `0` in den entsprechenden Eingabefeldern der Achse) und **Angle** (Winkel) auf `90 °` ändern.
:   7.8. Die Schaltfläche OK drücken, um den Dialog zu schließen.

8. Einen weiteren Zylinder einzufügen. Diesmal wird ein Duplikat erstellt, damit Radius und Höhe nicht geändert werden müssen, sondern nur seine Positionierung.

:   8.1. `Zylinder001` in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen und danach den Menüeintrag **Bearbeiten → [Auswahl duplizieren](/Std_DuplicateSelection/de "Std DuplicateSelection/de")**. Dies erstellt `Zylinder002`.
:   8.2. Den Dialog [Positionierung](/Std_Placement "Std Placement") öffnen.
:   8.3. **X** auf `-60 mm` und **Y** zurück auf `0 mm` ändern.
:   8.4. Unter **Drehung** `Rotationsachse mit Winkel` einstellen; **Y-Achse** festlegen und **Angle** (Winkel) auf `90 °` ändern.
:   8.5. Die Schaltfläche OK drücken, um den Dialog zu schließen.

## Visuelle Eigenschaften anpassen

9. Die vorigen Operationen erstellen drei Zylinder, die sich gegenseitig durchdringen und auch die Würfel durchdringen. Um dies zu veranschaulichen, können wir die **Ansicht**-Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") ändern.

:   9.1. `Quader001`, den kleineren Würfel in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen und die Transparennz ändern. Im Reiter **Ansicht** den Wert von **Transparency** (Transparenz) auf `70` ändern.
:   9.2. `Zylinder` auswählen, im Reiter **Ansicht** den Wert von **Shape Color** (Farbe der Form) anklicken, um den Dialog **Farbauswahl** zu öffnen und einen roten Farbton auszuwählen.
:   9.3. `Zylinder001` auswählen, im Reiter **Ansicht** den Wert von **Shape Color** anklicken, um den Dialog **Farbauswahl** zu öffnen und einen blauen Farbton auszuwählen.
:   9.4. `Zylinder002` auswählen, im Reiter **Ansicht** den Wert von **Shape Color** anklicken, um den Dialog **Farbauswahl** zu öffnen und einen rosafarbenen Farbton auszuwählen.
:   9.5. Alle drei Zylinder auswählen und im Reiter **Ansicht** auch hier **Line Width** (Linienbreite) auf `2,0` ändern.

![](/images/02_T03_Part_cylinders_visibility.png)

Festkörper-Zylinder, die sich selbst durchdringen und die Festkörper-Würfel

## Vereinigen und Ausschneiden

10. In der [Baumansicht](/Tree_view/de "Tree view/de") `Quader001` (den inneren, kleineren Würfel), und die drei Zylinder auswählen und danach die Schaltfläche ![](/images/Part_Fuse.svg) [Vereinigung](/Part_Fuse/de "Part Fuse/de") drücken. Dies erstellt ein Vereinigungsobjekt `Fusion`.

11. Dann wird die boolesche Verknüpfung Differenz angewendet, um das neue Objekt `Fusion` aus den größeren Würfel `Quader` herauszuschneiden.

:   11.1. In der [Baumansicht](/Tree_view/de "Tree view/de") zuerst `Quader` auswählen und dann `Fusion`.
:   11.2. Danach die Schaltfläche ![](/images/Part_Cut.svg) [Differenz](/Part_Cut/de "Part Cut/de") drücken. Dies erstellt ein Differenzobjekt `Cut`.
:   *Hinweis:* Die Reihenfolge, in der die Objekte ausgewählt werden, ist entscheidend für diesen Vorgang. Das Basisobjekt wird zuerst ausgewählt und danach die Objekte, die etwas entfernen (ausschneiden).
:   11.3. Wenn die Farben nicht gefallen, das neue Objekt `Cut` auswählen, zum Reiter **Ansicht** wechseln, Den Wert von **Shape Color** anklicken, um den Dialog **Farbauswahl** zu öffnen und einen grauen Farbton auszuwählen; auch hier den Wert von **Line Width** auf `2.0` ändern.

![](/images/03_T03_Part_cube_cut.png)

Hohle Form, hergestellt durch Entfernen eines Würfels und dreier Zylinder aus einem größeren Würfel.

## Würfel-Grundelemente einfügen, um die Ecken des Teilkörpers zu beschneiden

Jetzt werden weitere Würfel erstellt, die als Beschnittwerkzeuge für die Ecken des zuvor erstellten Objekts `Cut` verwendet werden.

12. Die Schaltfläche ![](/images/Part_Box.svg) [Quader](/Part_Box/de "Part Box/de") drücken.

:   12.1. `Quader002` in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen und Abmessungen ung Positionierung anpassen.
:   12.2. **Length** auf `140 mm` ändern.
:   12.3. **Width** auf `112 mm` ändern.
:   12.4. **Height** auf `112 mm` ändern.
:   12.5. Den Dialog [Positionierung](/Std_Placement/de "Std Placement/de") öffnen.
:   12.6. **X** auf `-70 mm` ändern.
:   12.7. **Y** auf `-56 mm` ändern.
:   12.8. **Z** auf `-56 mm` ändern.
:   12.9. Die Schaltfläche OK drücken.

13. Die Schaltfläche ![](/images/Part_Box.svg) [Quader](/Part_Box/de "Part Box/de") drücken.

:   13.1. `Quader003` in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen und Abmessungen ung Positionierung anpassen.
:   13.2. **Length** auf `180 mm` ändern.
:   13.3. **Width** auf `180 mm` ändern.
:   13.4. **Height** auf `180 mm` ändern.
:   13.5. Den Dialog [Positionierung](/Std_Placement/de "Std Placement/de") öffnen.
:   13.6. **X** auf `-90 mm` ändern.
:   13.7. **Y** auf `-90 mm` ändern.
:   13.8. **Z** auf `-90 mm` ändern.
:   13.9. Die Schaltfläche OK drücken.

Die beiden vorherigen Objekte werden wieder dupliziert, um sie auch wieder als Beschnittobjekte zu verwenden.

14. Nur `Quader002` in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen und danach den Menüeintrag **Bearbeiten → [Auswahl duplizieren](/Std_DuplicateSelection/de "Std DuplicateSelection/de")**. Dies erstellt `Quader004`.

14. Nur `Quader003` in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen und danach den Menüeintrag **Bearbeiten → [Auswahl duplizieren](/Std_DuplicateSelection/de "Std DuplicateSelection/de")**. Dies erstellt `Quader005`.

16. Um dies zu veranschaulichen, können wir die **Ansicht**-Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") ändern.

:   16.1. Das Objekt `Cut` auswählen, im Reiter **Ansicht** den Wert von **Shape Color** anklicken, um den Dialog **Farbauswahl** zu öffnen und einen blauen Farbton auszuwählen.
:   16.2. Alle neuen Würfel, `Quader002`, `Quader003`, `Quader004` und `Quader005` auswählen, im Reiter **Ansicht** den Wert von **Transparency** auf `80` ändern.

![](/images/04_T03_Part_cube_additional.png)

Weitere äußere Würfel, die als Beschnittobjekte für den inneren Festkörper verwendet werden

## Beschneiden der Ecken 1

17. In der [Baumansicht](/Tree_view/de "Tree view/de") `Cube002` und `Cube003` auswählen.

:   17.1. Den Dialog [Positionierung](/Std_Placement "Std Placement") öffnen.
:   17.2. Die Option **Inkrementelle Änderungen anwenden** aktivieren; man beachte, dass alle Werte unter **Verschiebung** auf Null zurückgesetzt werden
:   17.3. Unter **Drehung** `Rotationsachse mit Winkel` einstellen; **X-Achse** festlegen und **Angle** (Winkel) auf `45 °` ändern; danach die Schaltfläche Anwenden drücken. Dies wendet eine Drehung um die X-Achse an und setzt den Wert des Feldes **Angle** auf Null zurück.
:   17.4. Noch einmal **Drehung** einstellen, jetzt die **Z-Achse** festlegen und **Angle** auf `45 °` ändern; danach die Schaltfläche Anwenden drücken. Dies wendet eine Drehung um die lokale Z-Achse an und setzt den Wert des Feldes **Angle** auf Null zurück.
:   17.5. Die Schaltfläche OK drücken, um den Dialog zu schließen.

18. In der [Baumansicht](/Tree_view/de "Tree view/de") alle Objekte abwählen, dann zuerst `Quader003`, den größeren Würfel, auswählen und danach `Quader002`, den kleineren Würfel.

:   18.1. Danach die Schaltfläche ![](/images/Part_Cut.svg) [Differenz](/Part_Cut/de "Part Cut/de") drücken. Dies erstellt das Differenzobjekt `Cut001`. Dies ist ein hohler Körper, der den Basiskörper `Cut` nur an bestimmten Ecken überschneidet.

19. Um dies zu veranschaulichen, können wir die **Ansicht**-Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") ändern.

:   19.1. `Quader004` und `Quader005` auswählen, im Reiter **Ansicht** den Wert von **Visibility** (Sichtbarkeit) auf `false` ändern oder die Leertaste drücken.
:   19.2. `Cut001` auswählen, den Wert von **Shape Color** anklicken, um den Dialog **Farbauswahl** zu öffnen und einen roten Farbton auszuwählen; abschließend auch den Wert von **Transparency** auf `90` ändern.

![](/images/05_T03_Part_cube_additional_cut_1.png)

Ein gedrehter hohler Festkörper, der als Beschnittobjekt für einige Ecken des inneren Festkörpers verwendet wird

## Beschneiden der Ecken 2

20. In Der [Baumansicht](/Tree_view/de "Tree view/de") `Cut001` auswählen, im Reiter **Ansicht** den Wert von **Visibility** (Sichtbarkeit) auf `false` ändern oder die Leertaste drücken.

21. In der [Baumansicht](/Tree_view/de "Tree view/de") `Quader004` und `Quader005` auswählen, im Reiter **Ansicht** den Wert von **Visibility** auf `true` ändern oder die Leertaste drücken.

:   21.1. Den Dialog [Positionierung](/Std_Placement "Std Placement") öffnen.
:   21.2. Die Option **Inkrementelle Änderungen anwenden** aktivieren; man beachte, dass alle Werte unter **Verschiebung** auf Null zurückgesetzt werden.
:   21.3. Unter **Drehung** `Rotationsachse mit Winkel` einstellen; **X-Achse** festlegen und **Angle** (Winkel) auf `45 °` ändern; danach die Schaltfläche Anwenden drücken. Dies wendet eine Drehung um die X-Achse an und setzt den Wert des Feldes **Angle** auf Null zurück.
:   21.4. Noch einmal **Drehung** einstellen, jetzt die **Z-Achse** festlegen und **Angle** auf `-45 °` ändern; danach die Schaltfläche Anwenden drücken. Dies wendet eine Drehung um die lokale Z-Achse an und setzt den Wert des Feldes **Angle** auf Null zurück.
:   21.5. Die Schaltfläche OK drücken, um den Dialog zu schließen.

22. In der [Baumansicht](/Tree_view/de "Tree view/de") alle Objekte abwählen, dann zuerst `Quader005`, den größeren Würfel, auswählen und danach `Quader004`, den kleineren Würfel.

:   22.1. Danach die Schaltfläche ![](/images/Part_Cut.svg) [Differenz](/Part_Cut/de "Part Cut/de") drücken. Dies erstellt das Differenzobjekt `Cut002`. Dies ist ein hohler Körper, der den Basiskörper `Cut` nur an bestimmten Ecken überschneidet.

23. Um dies zu veranschaulichen, können wir die **Ansicht**-Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de") ändern.

:   23.1. `Cut002` auswählen, den Wert von **Shape Color** anklicken, um den Dialog **Farbauswahl** zu öffnen und einen rosafarbenen Farbton auszuwählen; abschließend auch den Wert von **Transparency** auf `90` ändern.

![](/images/06_T03_Part_cube_additional_cut_2.png)

Ein gedrehter hohler Festkörper, der als Beschnittobjekt für einige Ecken des inneren Festkörpers verwendet wird

## Das Modell fertigstellen

24. Sicherstellen, dass alle Objekte sichtbar sind. In Der [Baumansicht](/Tree_view/de "Tree view/de") alle Objekte auswählen, im Reiter **Ansicht** den Wert von **Visibility** auf `true` ändern oder die Leertaste drücken.

![](/images/07_T03_Part_ball_additional_both.png)

Der innere hohle Festkörper zusammen mit den Äußeren Objekten, die ihn beschneiden werden

25. In der [Baumansicht](/Tree_view/de "Tree view/de") alle Objekte abwählen, dann zuerst `Cut` auswählen und danach `Cut001`.

:   25.1. Danach die Schaltfläche ![](/images/Part_Cut.svg) [Differenz](/Part_Cut/de "Part Cut/de") drücken. Dies erstellt das Differenzobjekt `Cut003`.

![](/images/08_T03_Part_ball_cut_1.png)

Der innere hohle Festkörper mit `Cut001` beschnitten

26. In der [Baumansicht](/Tree_view/de "Tree view/de") alle Objekte abwählen, dann zuerst `Cut003` auswählen und danach `Cut002`.

:   26.1. Danach die Schaltfläche ![](/images/Part_Cut.svg) [Differenz](/Part_Cut/de "Part Cut/de") drücken. Dies erstellt das Differenzobjekt `Cut004`. Dies ist das endgültige Objekt.
:   26.2. `Cut004` auswählen, den Wert von **Shape Color** anklicken, um den Dialog to open the **Farbauswahl** zu öffnen und einen grünen Farbton auszuwählen; abschließend auch den Wert von **Line Width** auf `2.0` ändern.

![](/images/09_T03_Part_ball_cut_2.png)

Der innere hohle Festkörper mit `Cut001` und `Cut002` beschnitten. Das endgültige Modell

27. Echt Objekte haben keine perfekt scharfe Kanten oder Ecken, daher kann Verrunden das Modell noch verfeinern.

:   27.1. In der [Baumansicht](/Tree_view/de "Tree view/de") `Cut004` auswählen, dann die Schaltfläche ![](/images/Part_Fillet.svg) [Abrunden...](/Part_Fillet/de "Part Fillet/de") drücken.
:   27.2. Im [Aufgaben-Bereich](/Task_panel/de "Task panel/de") **Kanten abrunden** unter **Auswahl** **Kanten auswählen** aktivieren und die Schaltfläche Alle drücken. Als **Typ der Abrundung** `Konstanter Radius` auswählen und **Radius** auf `1 mm` ändern.
:   24.3. OK drücken. Dies erstellt ein Verrundungsobjekt `Fillet`.
:   27.4. Im Reiter **Ansicht** den Wert von **Line Width** auf `2.0` ändern.

![](/images/10_T03_Part_ball_fillet.png)

Das fertige Whiffle-Ball-Modell mit verrundeten Kanten

Retrieved from "<http://wiki.freecad.org/index.php?title=Whiffle_Ball_tutorial/de&oldid=1357768>"