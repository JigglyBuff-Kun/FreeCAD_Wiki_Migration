---
title: Sketcher Mikrotutorium - Beschränkungspraktiken
---

|                                                                                                       |
| ----------------------------------------------------------------------------------------------------- |
| Tutorium                                                                                              |
| Thema                                                                                                 |
| Skizzierer                                                                                            |
| Niveau                                                                                                |
| Anfänger                                                                                              |
| Zeit zum Abschluss                                                                                    |
| 30 Minuten                                                                                            |
| Autoren                                                                                               |
| Mark Stephen ([Quick61](/User:Quick61 "User:Quick61")) und vocx                                       |
| FreeCAD-Version                                                                                       |
| {{{FCVersion}}}                                                                                       |
| Beispieldateien                                                                                       |
| [Skizzierer Beschränkungspraktiken](https://forum.freecadweb.org/viewtopic.php?f=36&p=371659#p371659) |
| Siehe auch                                                                                            |
| _None_                                                                                                |
|                                                                                                       |

## Einführung

Dieses Tutorial wurde ursprünglich von Quick61 geschrieben, und es wurde von vocx neu geschrieben und neu illustriert.

Dieses Tutorium ist so gestaltet um dem neuen Anwender zu helfen, sich mit den bewährten Verfahren zur Beschränkung einer [Skizze](/Sketch/de "Sketch/de") im Arbeitsablauf des ![](/src/assets/images/Workbench_Sketcher.svg) [Skizzierer Arbeitsbereichs](/Sketcher_Workbench/de "Sketcher Workbench/de") vertraut zu machen.

Es gibt eine allgemeine Regel mit Beschränkungen: je weniger _Bezugsbeschränkungen_ (Dimensionen), desto besser.

Vorzuziehen ist, wenn möglich, eine _geometrische Beschränkung_ anstelle einer dimensionalen zu verwenden. Dies hat mit der internen Funktionsweise des Beschränkungslösers des Skizzierers zu tun.

## Einrichtung

1. Öffne FreeCAD, erstelle ein neues leeres Dokument mit **Datei → ![](/src/assets/images/Std_New.svg) [Neu](/Std_New/de "Std New/de")**.

: 1.1. Wechsle zum [Skizzierer Arbeitsbereich](/Sketcher_Workbench/de "Sketcher Workbench/de") über den [Arbeitsbereich Wähler](/Std_Workbench/de "Std Workbench/de") oder das Menü **[Ansicht](/Std_View_Menu/de "Std View Menu/de") → Arbeitsbereich → Skizzierer**.

Einige Aktivitäten zum Erinnern:

- Drücke die rechte Maustaste, oder drücke Esc einmal auf der Tastatur, um das aktive Werkzeug im Bearbeitungsmodus abzuwählen.
- Um den Skizzenbearbeitungsmodus zu verlassen, drücke die Schließen Schaltfläche im [Aufgabenpaneel](/Task_panel/de "Task panel/de") oder drücke Esc zweimal auf der Tastatur.
- Um den Bearbeitungsmodus erneut aufzurufen, doppelklicke auf die Skizze in der [Baumansicht](/Tree_view/de "Tree view/de") oder wähle sie aus und klicke dann auf ![](/src/assets/images/Sketcher_EditSketch.svg) [Skizze bearbeiten](/Sketcher_EditSketch/de "Sketcher EditSketch/de").

## Erstellen einer Skizze

2. Klicke auf ![](/src/assets/images/Sketcher_NewSketch.svg) [Neue Skizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de").

: 2.1. Wähle die Skizzenausrichtung, d.h. eine der Basisebenen XY, XZ oder YZ. Wir werden die Standardebene und -optionen verwenden.
: 2.2. Klicke OK, um mit der Konstruktion der Skizze zu beginnen.

_Hinweis:_ im [Augabenpaneel](/Task_panel/de "Task panel/de") erweitere den **Bedienelemente bearbeiten** Abschnitt und stelle sicher, dass die Option **Auto Beschränkungen** deaktiviert ist. Schalte auch den Rasterfang aus und blende das Raster aus.

## Erster Näherung: Bezugsbeschränkungen

3. Wir werden ein vollständig beschränktes Quadrat zeichnen, das am Ursprung zentriert ist.

: 3.1. Klicke auf ![](/src/assets/images/Sketcher_CreatePolyline.svg) [Erstelle Polylinie](/Sketcher_CreatePolyline/de "Sketcher CreatePolyline/de") und zeichne dann vier Linien in der allgemeinen Form eines Rechtecks um den Ursprung.

![](/src/assets/images/01a_Sk02_Sketcher_Rectangle_unconstrained.png)

Unbeschränkte rechteckige Skizze.

: 3.2. Wähle eine horizontale Linie, und drücke ![](/src/assets/images/Constraint_HorizontalDistance.svg) [Horizontaler Abstand](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de"), gib dann `20 mm` ein.
: 3.3. Wähle die andere horizontale Linie und wiederhole die Beschränkung mit dem gleichen Abstand.
: 3.4. Wähle eine vertikale Linie und drücke ![](/src/assets/images/Constraint_VerticalDistance.svg) [Vertikaler Abstand](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de"), gib dann `20 mm` ein.
: 3.5. Wähle die andere vertikale Linie und wiederhole die Beschränkung mit dem gleichen Abstand.
: 3.6. Wähle einen unteren Eckpunkt (a) und den Ursprung der Skizze aus und drücke ![](/src/assets/images/Constraint_HorizontalDistance.svg) [Horizontaler Abstand](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de"), gib dann `10 mm` ein.
: 3.7. Wähle den oberen Eckpunkt (b) über dem vorherigen Eckpunkt (a) und den Ursprung der Skizze und wiederhole die horizontale Beschränkung mit dem gleichen Abstand.
: 3.8. Wähle den anderen unteren Eckpunkt (c) und den Ursprung der Skizze, und drücke ![](/src/assets/images/Constraint_VerticalDistance.svg) [Vertikaler Abstand](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de"), gib dann `10 mm` ein.
: 3.9. Wähle erneut den oberen Eckpunkt (b) und den Ursprung der Skizze und wiederhole die vertikale Beschränkung mit dem gleichen Abstand.

![](/src/assets/images/01b_Sk02_Sketcher_Rectangle_constrained_lengths_1.png) ![](/src/assets/images/01c_Sk02_Sketcher_Rectangle_constrained_lengths_2.png)

Links: Bezugsbeschränkungen für die Seiten. Rechts: zusätzliche Bezugsbeschränkungen für die Innenabstände.

Mit Blick auf die **Beschränkungen** Abschnitt im [Aufgabenpaneel](/Task_panel/de "Task panel/de"), sehen wir, dass die Beschränkungen zu zahlreich sind; sie erschweren auch den Blick auf die Skizze. Diese Beschränkungen sind auch für den Löser rechenintensiv; obwohl dies bei einer einfachen Form kein Problem darstellt, kann es bei komplexeren Formen zu einem Problem werden.

## Ein besserer Weg: Bezugs und geometrische Beschränkungen

4. Wir werden dasselbe Quadrat vollständig beschränkt und am Ursprung zentriert zeichnen. Wenn du die neue Skizze erstellst, vergewissere dich, dass die Option **Auto Beschränkungen** deaktiviert ist.

: 4.1. Klicke auf ![](/src/assets/images/Sketcher_CreatePolyline.svg) [Erstelle Polylinie](/Sketcher_CreatePolyline/de "Sketcher CreatePolyline/de"), dann zeichne vier Linien in der allgemeinen Form eines Rechtecks um den Ursprung.
: 4.2. Wähle eine horizontale Linie aus, und drücke ![](/src/assets/images/Constraint_Horizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de").
: 4.3. Wähle die andere horizontale Linie, und wiederhole die Beschränkung.
: 4.4. Wähle eine vertikale Linie, und drücke ![](/src/assets/images/Constraint_Vertical.svg) [Vertikal](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de").
: 4.5. Wähle die andere vertikale Linie aus, und wiederhole die Beschränkung.

![](/src/assets/images/02a_Sk02_Sketcher_Rectangle_constrained_horizontal-vertical.png)

Geometrische horizontale und vertikale Beschränkungen.

: 4.6. Wähle eine horizontale Linie und drücke ![](/src/assets/images/Constraint_HorizontalDistance.svg) [Horizontaler Abstand](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de"), gib dann `20 mm`. Wir sehen, dass die andere horizontale Linie gleichzeitig ihre Größe ändert.
: 4.7. Wähle eine vertikale Linie aus, und drücke ![](/src/assets/images/Constraint_VerticalDistance.svg) [Vertikaler Abstand](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de"), gib dann `20 mm` ein. Wir sehen, dass die andere vertikale Linie gleichzeitig ihre Größe ändert.
: 4.8. Wähle einen unteren Eckpunkt (a) und den Ursprung der Skizze aus und drücke ![](/src/assets/images/Constraint_HorizontalDistance.svg) [Horizontaler Abstand](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de"), gib dann `10 mm` ein.
: 4.9. Wähle den oberen Eckpunkt (b) über dem vorherigen Eckpunkt (a) und den Ursprung der Skizze und drücke ![](/src/assets/images/Constraint_VerticalDistance.svg) [Vertikaler Abstand](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de"), gib dann `10 mm` ein.

![](/src/assets/images/02b_Sk02_Sketcher_Rectangle_constrained_lengths_1.png) ![](/src/assets/images/02c_Sk02_Sketcher_Rectangle_constrained_lengths_2.png)

Links: Bezugsbeschränkungen für nur zwei Seiten. Rechts: zusätzliche Bezugsbeschränkungen für nur zwei Innenabstände.

Dies ist eine besser beschränkte Skizze als die erste. Die horizontalen und vertikalen geometrischen Beschränkungen erlauben es uns, weniger Bezugsbeschränkungen zu verwenden, so dass unsere Skizze weniger überladen aussieht.

## Optimales Schema: meist geometrische Beschränkungen

5. Wir werden dasselbe Quadrat vollständig beschränkt und am Ursprung zentriert zeichnen. Wenn du die neue Skizze erstellst, vergewissere dich, dass die Option **Auto Beschränkungen** deaktiviert ist.

: 5.1. Klicke auf ![](/src/assets/images/Sketcher_CreatePolyline.svg) [Erstelle Polylinie](/Sketcher_CreatePolyline/de "Sketcher CreatePolyline/de"), dann zeichne vier Linien in der allgemeinen Form eines Rechtecks um den Ursprung.
: 5.2. Wähle eine horizontale Linie aus, und drücke ![](/src/assets/images/Constraint_Horizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de").
: 5.3. Wähle die andere horizontale Linie, und wiederhole die Beschränkung.
: 5.4. Wähle eine vertikale Linie, und drücke ![](/src/assets/images/Constraint_Vertical.svg) [Vertikal](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de").
: 5.5. Wähle die andere vertikale Linie aus, und wiederhole die Beschränkung.

![](/src/assets/images/03a_Sk02_Sketcher_Rectangle_constrained_horizontal-vertical.png)

Geometrische horizontale und vertikale Beschränkungen.

: 5.6. Wähle einen unteren Eckpunkt (a), dann den oberen Eckpunkt, der diagonal gegenüber liegt, und dann den Ursprung der Skizze; drücke dann ![](/src/assets/images/Constraint_Symmetric.svg) [Symmetrisch](/Sketcher_ConstrainSymmetric/de "Sketcher ConstrainSymmetric/de"). Die beiden ausgewählten Punkte sind gleich weit vom Ursprung entfernt.
: 5.7. Wähle zwei benachbarte Seiten des Rechtecks (verbunden an einer Ecke), und drücke ![](/src/assets/images/Constraint_EqualLength.svg) [Gleiche Länge](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de"). Beachte, dass aufgrund der Symmetrie der Eckpunkte nun alle Seiten gleich groß sind.

![](/src/assets/images/03b_Sk02_Sketcher_Rectangle_constrained_symmetric.png) ![](/src/assets/images/03c_Sk02_Sketcher_Rectangle_constrained_equal_length.png)

Links: symmetrische Beschränkung für nur zwei Eckpunkte. Rechts: zusätzliche gleiche Längenabstände für nur zwei benachbarte Seiten.

: 5.8. Wähle eine horizontale Linie und drücke ![](/src/assets/images/Constraint_HorizontalDistance.svg) [Horizontaler Abstand](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de"), gib dann `20 mm`. ein. Aufgrund der zuvor hinzugefügten Beschränkungen für Symmetrie und Längengleichheit sehen wir, dass alle Seiten gleichzeitig gleich werden.

![](/src/assets/images/03d_Sk02_Sketcher_Rectangle_constrained_length.png)

Alle angewandten geometrischen Beschränkungen und eine einzige Bezugsbeschränkung für eine Seite.

Dies ist der beste Weg, diese Skizze zu beschränken, da wir nur eine Bezugs- (Bemaßungs-) Beschränkung verwendet haben.

## Zusätzliche Quellen

- [Grundlegende Sketcher-Anleitung](/Basic_Sketcher_Tutorial/de "Basic Sketcher Tutorial/de")
- [Sketcher-Referenz](/Sketcher_Lecture/de "Sketcher Lecture/de")
- [Sketcher-Anleitung](/Sketcher_Tutorial/de "Sketcher Tutorial/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Micro_Tutorial_-_Constraint_Practices/de&oldid=1470977>"
