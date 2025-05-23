---
title: Tutorium Benutzerdefinierte Positionierung von Fenstern und Türen
---

|                                                                              |
| ---------------------------------------------------------------------------- |
| Tutorium                                                                     |
| Thema                                                                        |
| Architektur                                                                  |
| Niveau                                                                       |
| fortgeschrittener Anfänger                                                   |
| Zeit zum Abschluss                                                           |
| 60 Minuten                                                                   |
| Autoren                                                                      |
| [vocx](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=21943) |
| FreeCAD-Version                                                              |
| 0.18 oder höher                                                              |
| Beispieldateien                                                              |
| keine                                                                        |
| Siehe auch                                                                   |
| _None_                                                                       |
|                                                                              |

## Einleitung

Dieses Tutorial zeigt, wie man benutzerdefinierte [Fenster](/Arch_Window/de "Arch Window/de") und [Türen](/Arch_Door/de "Arch Door/de") in einem Gebäudemodell platziert. Es verwendet die Arbeitsbereiche [Entwurf (Draft)](/Draft_Workbench/de "Draft Workbench/de"), [Architektur (Arch)](/Arch_Workbench/de "Arch Workbench/de") und [Skizze (Sketcher)](/Sketcher_Workbench/de "Sketcher Workbench/de").

Häufig benutzte Werkzeuge sind: [Draft:Raster (Grid)](/Draft_Snap_Grid/de "Draft Snap Grid/de"), [Draft:Fang (Snap)](/Draft_Snap/de "Draft Snap/de"), [Draft: Linienwerkzeug (Wire)](/Draft_Wire/de "Draft Wire/de"), [Arch:Wand (Wall)](/Arch_Wall/de "Arch Wall/de"), [Arch:Fenster (Window)](/Arch_Window/de "Arch Window/de") und [Sketcher:Neue Skizze (NewSketch)](/Sketcher_NewSketch/de "Sketcher NewSketch/de"). Der Anwender sollte mit der Einschränkung von Skizzen vertraut sein.

Dieses Tutorial wurde inspiriert von den Tutorials von jpg87, welche in folgenden [FreeCAD-Foren](https://forum.freecadweb.org/viewforum.php?f=36) gepostet wurden:

- [Arch Create a custom window](https://forum.freecadweb.org/viewtopic.php?f=36&t=32883)
- [Arch : How to use your custom Window](https://forum.freecadweb.org/viewtopic.php?f=36&t=32982)

Siehe auch den folgenden Forumsbeitrag für weitere Informationen über die Position von Fenstern und Türen.

- [Diskussion: Ausrichtung von Fenstern und Türen](https://forum.freecadweb.org/viewtopic.php?t=35368)

Siehe auch die folgende Seite für einige Videos über das Ausrichten von Fenstern.

- [Der Arbeitsbereich, der zum Erstellen von Architekturprojekten verwendet wird, heißt Arch](http://help-freecad-jpg87.fr/04_arch_ind.php)

## Einrichtung

1. Öffne FreeCAD, erstelle ein neues, leeres Dokument und wechsel zum [Architektur-Arbeitsbereich](/Arch_Workbench/de "Arch Workbench/de").

2. Stelle sicher, dass Deine Einheiten im Menü **Bearbeiten → Einstellungen → Allgemein → Einheiten** korrekt eingestellt sind. Zum Beispiel ist `MKS (m/kg/s/Grad)` gut geeignet, um mit den Abständen in einem typischen Gebäude umzugehen; setze außerdem die Anzahl der Nachkommastellen auf `4`, um auch die kleinsten Teile eines Meters zu berücksichtigen.

3. Benutze die Schaltfläche ![](/images/Draft_Grid.svg) [Entwurfsraster ein-/ausschalten](/Draft_ToggleGrid/de "Draft ToggleGrid/de"), um ein Raster mit ausreichender Auflösung einzublenden. Das Erscheinungsbild des Rasters kannst Du im Menü **Bearbeiten → Einstellungen → Draft → Raster und einrasten → Raster** ändern. Setze "Hauptlinien alle" auf `20`, "Rasterabstand" auf `50 mm` und "Rastergröße" auf `1000 Linien` (das Raster wird damit eine Fläche von 50m x 50m abdecken).

4. [Zoome im 3D-Ansichtsfenster heraus](/Std_ViewZoomOut/de "Std ViewZoomOut/de"), wenn Du zu nahe am Raster bist.

Jetzt sind wir bereit, um eine einfache Wand zu erstellen, in welcher wir Fenster und Türen positionieren können.

## Wände erstellen

5. Benutze das [Draft: Linienwerkzeug](/Draft_Wire/de "Draft Wire/de"), um einen Linienzug zu erstellen. Gehe gegen den Uhrzeigersinn vor.

: 5.1. Erster Punkt bei (0, 4, 0); gib im Dialog ein: 0 m Enter, 4 m Enter, 0 m Enter.
: 5.2. Zweiter Punkt bei (2, 0, 0); gib im Dialog ein: 2 m Enter, 0 m Enter, 0 m Enter.
: 5.3. Ditter Punkt bei (4, 0, 0); gib im Dialog ein: 4 m Enter, 0 m Enter, 0 m Enter.
: 5.4. Vierter Punkt bei (6, 2, 0); gib im Dialog ein: 6 m Enter, 2 m Enter, 0 m Enter.
: 5.4. Fünfter Punkt bei (6, 5, 0); gib im Dialog ein: 6 m Enter, 5 m Enter, 0 m Enter.
: 5.5. Drücke A um den Linienzug zu beenden.
: 5.6. Drücke auf dem Nummernblock 0 um eine [isometrische Projektion](/Std_ViewIsometric/de "Std ViewIsometric/de") des Modells zu erhalten.
: _Hinweis:_ Stelle sicher, dass die _Relative_-Checkbox deaktiviert ist, wenn Du Absolut-Koordinaten eingibst.
: _Hinweis 2:_ Die Punkte können auch mit dem Mauscursor durch Anklicken der Rasterschnittpunkte unter Zuhilfenahme der [Draft:Fang](/Draft_Snap/de "Draft Snap/de")-Werkzeugleiste und der [Raster](/Draft_Snap_Grid/de "Draft Snap Grid/de")-Methode definiert werden.
: _Hinweis 3:_ Du kannst die Konturen auch programmatisch durch Scripting in [Python](/Python/de "Python/de") erstellen. Bedenke, dass die meisten Funktionen ihre Eingaben in Millimetern erwarten:

```
import FreeCAD
import Draft

p = [FreeCAD.Vector(0.0, 4000.0, 0),
FreeCAD.Vector(2000.0, 0.0, 0.0),
FreeCAD.Vector(4000.0, 0.0, 0.0),
FreeCAD.Vector(6000.0, 2000.0, 0.0),
FreeCAD.Vector(6000.0, 5000.0, 0.0)]

w = Draft.makeWire(p, closed=False)

```

6. Wähle `DWire` im Modellbaum aus und klicke auf das [Arch:Wand](/Arch_Wall/de "Arch Wall/de")-Werkzeug; die Wände werden daraufhin mit einer voreingestellten Breite (Dicke) von 0.2 m und einer Höhe von 3 m erstellt.

![](/images/01_T02_wire_wall.png)

Basis-Linienzug für die Wände

![](/images/02_T02_just_wall.png)

Die aus dem Linienzug konstruierten Wände

## vordefinierte Türen und Fenster erstellen

7. Klicke auf das Werkzeug [Arch:Fenster](/Arch_Window/de "Arch Window/de"), wähle die Voreinstellung (preset) `Simple door` aus und ändere die Höhe auf 2 m.

: 7.1. Ändere die Fangmethode auf [Mittelpunkt](/Draft_Snap_Midpoint/de "Draft Snap Midpoint/de") und versuche die untere Kante der vorderen Wand auszuwählen. Wenn nötig verdrehe die 3D-Ansicht, um die Kante und nicht die Wandoberfläche anklicken zu können; wenn der Mittelpunkt aktiv ist, klicke um die Tür zu platzieren.
: 7.2. Klicke noch einmal auf das Werkzeug [Arch:Fenster](/Arch_Window/de "Arch Window/de") und platziere eine weitere Tür, aber diesmal am Mittelpunkt der am weitesten rechts befindlichen Wand; verdrehe dazu die 3D-Ansicht soweit wie nötig.

![](/images/03_T02_wall_place_doors.png)

Fangen des Mittelpunktes der unteren Wandkante um die Tür zu platzieren

: _Hinweis:_ Die `Sill height` (Brüstungshöhe) ist der Abstand vom Fußboden bis zur unteren Fensterkante. Für Türen ist die `Sill height` gewöhnlich 0 m weil Türen normalerweise bis zum Fußboden reichen; andererseits haben Fenster üblicherweise einen Abstand von 0,5 m bis 1,5 m zum Fußboden. Der Parameter `Sill height` (Brüstungshöhe) kann nur während des ursprünglichen Erzeugens eines Fensters oder einer Tür mittels Voreinstellung (preset) eingegeben werden. Ist das Fenster oder die Tür erst einmal eingefügt, lässt sich seine Lage durch Editieren der Eigenschaft Daten**Position** `[x, y, z]` der zugrundeliegenden [Skizze](/Sketcher_Workbench "Sketcher Workbench") modifizieren.

## benutzerdefinierte Türen und Fenster erstellen

8. Wechsel zum [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")-Arbeitsbereich, wähle den Teil der Wand auf der rechten Seite aus, welcher keine Tür hat. Klicke auf [NeueSkizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de") und wähle FlatFace als Verknüpfungs-Methode. Wenn die vorhandene Geometrie Deine Sicht beeinträchtigt, klicke auf ["Schnitt anzeigen"](/Sketcher_ViewSection/de "Sketcher ViewSection/de"), um diese auszublenden.

9. Zeichne eine ausgefallene Skizze, welche 3 geschlossene Linienzüge enthält. Stelle sicher, dass alle Linienzüge komplett beschränkt sind.

: 9.1. Der äußere Linienzug ist der größte und wird die Hauptabmessungen des Fenster-Objektes sowie die Größe der Öffnung beim Einfügen in die [Wand](/Arch_Wall/de "Arch Wall/de") definieren. Stelle sicher, dass die Abmessungen passend bezeichnet werden, z.B. `Width` und `Height`. Eine Beschränkung definiert auch die Krümmung des äußeren Linienzuges. Gib ihm eine geeignete Bezeichnung, z.B. `HeightCurve`.
: 9.2. Der zweite Linienzug ist vom äußeren versetzt, zusammen definieren beide die Breite des (feststehenden) Fensterrahmens. Benenne den Versatz passend, z.B. `FrameFixedOffset`. Er wird für den oberen und beide seitlichen Versätze verwendet. Der untere Versatz bewirkt, wenn auf Null gesetzt, dass der Fensterrahmen den Boden der Öffnung berühren wird - dies kann verwendet werden, um anstelle eines Fensters eine Tür zu modellieren. Gib ihm eine passende Bezeichnung, z.B. `FrameFixedBottom`.
: 9.3. Der dritte, ganz innerste Linienzug ist versetzt zum zweiten und definiert mit diesem zusammen die Breite des Fensterflügel-Rahmens. Der innerste Linienzug definiert gleichzeitig die Größe der Scheibe. Gib auch diesen Versätzen aussagekräftigen Bezeichnungen, z.B. `FrameInnerOffset` und `FrameInnerBottom`.
: 9.4. Um erfolgreich eine Skizze zu erstellen, verwende [horizontale](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de") und [vertikale Beschränkungen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de") für die geraden Seiten. Verwende [Konstruktions-(Hilfs-)geometrie](/Sketcher_ToggleConstruction/de "Sketcher ToggleConstruction/de") und [tangentiale Beschränkungen](/Sketcher_ConstrainTangent/de "Sketcher ConstrainTangent/de"), um die oberen Kreisbögen korrekt zu plazieren. Wenn das Fenster wie im vorliegenden Fall symmetrisch ist, erwäge die Verwendung von [Gleichheits-](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de"), [Symmetrie-](/Sketcher_ConstrainSymmetric/de "Sketcher ConstrainSymmetric/de") und [Punkt-auf-Objekt](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de")-Beschränkungen, wenn es sinnvoll ist.

![](/images/04_T02_window_constraints_outer_frame.png)

Beschränkungen für die äußeren Linienzüge der Skizze, welche das Fenster beschreiben

![](/images/05_T02_window_constraints_inner_frame.png)

Beschränkungen für die inneren Linienzüge des Skizze, welche das Fenster beschreiben

10. Wenn die Skizze vollständig eingeschränkt ist, drücke Schließen um die Skizze zu verlassen ([Skizze beenden](/Sketcher_LeaveSketch/de "Sketcher LeaveSketch/de")).

: 10.1. Da während des Anlegens der Skizze die Oberfläche der Wand ausgewählt war, ist die Skizze ebenengleich zu dieser Wandoberfläche. Allerdings kann sie auch in der falschen Lage, von der Wand weg, sein. Wenn dies der Fall ist, passe die Daten**Position** mittels Daten**Attachment Offset** an. Setze Daten**Position** auf `[4 m, 1 m, 0 m]`, so dass die Skizze zentriert in der Wand sowie 1m über dem Fußboden liegt.
: 10.2. Du kannst die benannten Einschränkungen unter Daten**Constraints** einsehen. Die Werte können verändert werden, die Skizze ändert sofort ihre entsprechenden Abmessungen.

![](/images/07_T02_window_sketch_in_wall.png)

Fenster-Skizze, verschoben zur gewünschten Position auf der Wand

![](/images/06_T02_window_sketch_properties_constraints.png)

Benannte Einschränkungen der Skizze, welche verändert werden können, ohne die Skizze zu öffnen

11. Wechsele zurück zum [Architektur-Arbeitsbereich](/Arch_Workbench/de "Arch Workbench/de") und benutze - mit ausgewählter Skizze `Sketch002` - die Funktion [Arch:Fenster](/Arch_Window/de "Arch Window/de"). Es wird ein Fenster erstellt und eine Öffnung in der Wand erzeugt. Da das Fenster aus einer benutzerdefinierten Skizze erstellt wurde und nicht mittels einer Voreinstellung, ist es erforderlich, seine Einzelkomponenten, d.h. fester Rahmen, Fensterflügel und Glasscheibe, für eine korrekte Darstellung zu bearbeiten.

![](/images/08_T02_window_basic_in_wall.png)

Benutzerdefiniertes Fenster, erzeugt aus einer Skizze; noch hat es weder einen echten Rahmen noch eine Glasscheibe

## Einrichtung des benutzerdefinierten Fensters

12. Wähle im Modellbaum den unter `Window` liegenden `Sketch002` und drücke Space oder ändere die Eigenschaft Ansicht**Visibility** auf `true`.

13. Klicke doppelt auf `Window` im Modellbaum um die Bearbeitung zu beginnen.

: 13.1. Im Dialog `Window elements` befinden sich zwei Felder: `Wires` und `Components`. Es gibt 3 'Wires': `Wire0`, `Wire1` und `Wire2` sowie 1 'Component': `Default`. Die 'Wires' entsprechen den in der Skizze gezeichneten Linienzügen; Die 'Components' definieren die Bereiche in der Skizze, welche extrudiert werden, um Rahmen oder Glasscheibe mit realer Dicke zu erzeugen; diese Bereiche werden durch die Linienzüge begrenzt. Ein mittels Voreinstellung erzeugtes Fenster hat bereits 2 'Components': `OuterFrame` und `Glass`. Das benutzerdefinierte Fenster muss bearbeitet werden, um eine ähnliche Struktur zu erhalten.

![](/images/09_T02_window_edit_default.png)

Dialog zum Bearbeiten eines Fensters oder einer Tür

: 13.2. Klicke auf `Default` und dann auf Remove , um es zu entfernen.

: 13.3. Klicke auf Hinzufügen , das öffnet einen Dialog zur Eingabe der Eigenschaften für eine neue Komponente wie `Name`, `Typ`, `Kantenzüge`, `Dicke`, `Versatz`, `Gelenk` und `Öffnungsmodus`. Vergib einen Namen wie etwa `OuterFrame`, wähle `Rahmen` als `Typ` aus und klicke auf `Wire0` und dann `Wire1`. Diese sollten in der 3D-Ansicht hervorgehoben werden. Trage für `Dicke` einen kleinen Wert ein: `15 mm` und hake die Checkbox dahinter an, um den Default-Wert hinzuzufügen. Dieser Default-Wert ist die der Eigenschaft Daten**Frame** zugeordnete Länge. Ein ähnlicher Default-Wert kann auch der Eigenschaft Daten**Versetzen** zugeordnet werden. Klicke abschließend auf die Schaltfläche + Erstelle/aktualisiere Komponente , um die Bearbeitung der Komponente zu beenden.

: 13.4. Klicke erneut auf Hinzufügen , gib einen anderen Namen ein wie etwa `InnerFrame`, wähle `Rahmen` als `Typ` und klicke auf `Wire1` und dann `Wire2`. Trage eine zweckmäßige `Dicke` ein: `60 mm` sowie bei `Versetzen` den Wert `15 mm`. Dann klicke auf + Erstelle/aktualisiere Komponente .

: 13.5. Klicke nochmals auf Hinzufügen , gib einen anderen Namen ein, wie etwa `Glass`, wähle als `Typ` `Glass panel` und klicke auf `Wire2`. trage eine zweckmäßige `Dicke` ein: `10 mm` sowie bei `Versetzen` den Wert `40 mm`. Klicke dann auf + Erstelle/aktualisiere Komponente . Falls eine der drei Komponenten verändert werden soll, wähle diese aus und drücke Bearbeiten . Änderungen werden nur nach Bestätigen der Schaltfläche + Erstelle/aktualisiere Komponente gespeichert.

![](/images/10_T02_window_edit_components.png)

Bearbeitung einer zuvor definierten Komponente eines Fensters oder einer Tür

: 13.6. Wenn alles festgelegt ist, klicke auf Schließen , um die Bearbeitung des Fensters abzuschließen. Die Skizze wird wieder ausgeblendet, die Ansicht zeigt nun verschiedene Solid-Elemente für `OuterFrame`, `InnerFrame` sowie `Glass`. Gib einen Wert von `100 mm` bei Daten**Frame** ein, um eine Default-Dicke zu bestimmen, welche zu dem in der `OuterFrame`- Komponente spezifizierten Wert hinzuaddiert wird.

![](/images/11_T02_window_property_view.png)

Eigenschafts-Dialog des Fensters, um die Default-Rahmenlänge, einen Versatz (Offset) und andere Einstellungen einzutragen

![](/images/12_T02_window_finished.png)

fertiges Fenster mit zugehörigen Komponenten, eingefügt in die Wand

## Vervielfältigung eines benutzdefinierten Fensters

14. Wähle `Window` und den zugrundeliegenden `Sketch002` im Modellbaum aus. Gehe dann zu **Bearbeiten → Auswahl duplizieren** und beantworte die Frage, ob nicht ausgewählte Abhängigkeiten dupliziert werden sollen, mit No. Ein neues `Window001` mit `Sketch003` wird an derselben Stelle wie die Original-Elemente erscheinen.

15. Wähle den neuen `Sketch003` aus. Gehe zur Eigenschaft Daten**Map Mode** und klicke auf das Erweiterungsfeld rechts neben dem Wert `FlatFace`. Wähle in der 3D-Ansicht den Wandabschnitt auf der linken Seite aus, welcher noch kein Element hat. Verdrehe die [Ansicht](/Std_View_Menu/de "Std View Menu/de") soweit wie nötig. Verändere `Attachment offset` zu [-1 m, 0 m, 0 m], um das Fenster zu zentrieren und klicke OK. Die Skizze und das Fenster sollten dann an der neuen Positionen erscheinen.

: _Hinweis:_ die [Part Anhang](/Part_EditAttachment/de "Part EditAttachment/de") -Operation kann auch mit dem [Part Arbeitsbereich](/Part_Workbench/de "Part Workbench/de") ausgeführt werden durch Benutzung des Menü-Kommandos **Formteil → Attachment**.

![](/images/13_T02_sketch_attachment_edit.png)

Dialog zum Editieren der Verbindungsebene der Skizze

16. Du kannst die Abmessungen des neuen Fensters durch Ändern der benannten Parameter im `Sketch003` unter Daten**Constraints** einstellen. Setze zum Beispiel `Height` auf `2 m` und `Frame Fixed Bottom` auf `0 m`. Drücke dann Ctrl+R, um das Modell zu [aktualisieren](/Std_Refresh/de "Std Refresh/de"). Falls in der Wand kein vergrößertes Loch für das neue Fenster erscheint, wähle die Wand im Modellbaum mit Rechtsklick aus, klicke auf `Markieren, um neu zu berechnen` und drücke dann Ctrl+R noch einmal.

17. Diese Operationen haben die Position des neuen Fensters verändert, aber die Öffnung in der Wand sieht noch nicht korrekt aus. Sie ist schief, was daran liegt, dass das Loch nicht senkrecht zur Wandoberfläche liegt und daher andere Teile der Wand schneidet. Das Problem besteht darin, dass `Window001` die Daten**Normal**-Information des originalen `Window` beibehalten hat.

![](/images/14_T02_sketch_2_attached_slanted.png)

Falsche Öffnung in der Wand wegen eines falschen Normalenvektors des Fensters

## Normalenvektoren von Türen und Fenstern

18. Jedes [Arch:Fenster](/Arch_Window/de "Arch Window/de")-Objekt kontrolliert die Extrusion seines Körpers und der Wandöffnung mittels der Eigenschaft Daten**Normal**.

Die Normale ist ein Vector `[x, y, z]`, welcher die Richtung senkrecht zur Wand anzeigt. Wenn ein Fenster oder eine Tür mittels Voreinstellung und dem Werkzeug [Arch:Fenster](/Arch_Window/de "Arch Window/de") direkt über einer [Arch:Wand](/Arch_Wall/de "Arch Wall/de") erzeugt wird, wird die Normale automatisch ermittelt und das resultierende Fenster (oder die Tür) korrekt ausgerichtet; Die ersten beiden Objekte `Door` und `Door001`wurden auf diese Art erstellt.

In gleicher Weise wird eine Skizze, wenn durch Auswahl einer ebenen Oberfläche erstellt, auf diese Ebene ausgerichtet. Wenn dann das Werkzeug [Arch:Fenster](/Arch_Window/de "Arch Window/de") benutzt wird, verwendet das Fenster als Normale die zur Skizze senkrechte Richtung. Dies war der Fall beim dritten Objekt, dem benutzerdefinierten `Window`.

Wenn ein bereits exitierendes Fenster verschoben werden soll - wie im Fall mit dem duplizierten `Window001` - muss der Sketch einer anderen Fläche zugeordnet (gemappt) werden. Bei Ausführung werden sowohl der Sketch als auch das Fenster verschoben, jedoch wird bei letzterem die Normale nicht automatisch aktualisiert und somit hat es falsche Informationen für die Extrusion. Die Normale muss deshalb manuell berechnet und in Daten**Normal** eingetragen werden.

Die drei Werte des Normalen-Vectors werden wie folgt berechnet:

```
x = -sin(Winkel)
y = cos(Winkel)
z = 0

```

Wobei `Winkel` den Winkel der lokalen Z-Achse bezogen auf die globale Y-Achse bezeichnet.

Wenn eine Skizze erzeugt wird, hat sie immer 2 Achsen: eine lokale X-Achse (rot) und eine lokale Y-Achse (grün). Wenn die Skizze auf die globale XY-Arbeitsebene bezogen ist, dann sind diese entsprechend daran ausgerichtet. Aber wenn eine Skizze auf die globale XZ- oder YZ-Ebene bezogen ist, wie es gewöhnlich bei Fenstern und Türen der Fall ist (die Skizzen "stehen aufrecht"), dann beschreibt die lokale Z-Achse einen Winkel zur globalen Y-Achse. Dieser Winkel variiert zwischen -180° und +180°. Der Winkel wird positiv betrachtet, wenn er sich - jeweils ausgehend von der globalen Y-Achse - entgegen des Uhrzeigersinns öffnet; und entsprechend negativ, wenn er sich im Uhrzeigersinn öffnet.

![](/images/15_T02_sketch_local_coordinates.png)

lokale Koordinaten einer "aufrecht stehenden" Skizze, d.h. bezogen auf die globale XZ-Ebene

![](/images/16_T02_sketch_correct_normal_direction.png)

verwendete Richtungen der Normalen für jede Tür und jedes Fenster

Wenn wir auf die bisher erstellte Geometrie schauen, sehen wir folgende Normalen:

`Door`
: Die lokale Z-Achse ist gleich der globalen Y-Achse ausgerichtet, deshalb ist der `Winkel` (angle) = Null. Der Normalenvektor ist

```
x = -sin(0) = 0
y = cos(0) = 1
z = 0

```

oder Daten**Normal** ist `[0, 1, 0]`.

`Door001`
: Die lokale Z-Achse ist 90 Grad zur der globalen Y-Achse verdreht, deshalb ist der `Winkel` = 90 (positiv, weil gegen den Uhrzeigersinn öffnend). Der Nomalenvektor ist

```
x = -sin(90) = -1
y = cos(90) = 0
z = 0

```

oder Daten**Normal** ist `[-1, 0, 0]`.

`Window`
: Die lokale Z-Achse ist 45 Grad zur globalen Y-Achse gedreht, deshalb ist der `Winkel` = 45 (positiv, weil gegen den Uhrzeigersinn öffnend). Der Nomalenvektor ist

```
x = -sin(45) = -0.7071
y = cos(45) = 0.7071
z = 0

```

oder Daten**Normal** ist `[-0.7071, 0.7071, 0]`.

`Window001`
: Die lokale Z-Richtung wurde mit Hilfe des [Draft: Mess-Werkzeugs](/Draft_Dimension/de "Draft Dimension/de") ermittelt, indem damit der Winkel zwischen Wandverlauf und globaler Y-Achse (oder einer anderen daran ausgerichteten Linie) gemessen wird. Dieser Winkel beträgt `26.57`; Der gesuchte Winkel ist das Gegenstück dazu, also `90 - 26.57 = 63.43`.

Das bedeutet, dass die lokale Z-Achse 63.43 Grad von der globalen Y-Achse verdreht ist, deshalb beträgt der `Winkel` -63.46 (negativ, because im Uhrzeigersinn öffnende). Der Normalenvektor ist:

```
x = -sin(-63.43) = 0.8943
y = cos(-63.43) = 0.4472
z = 0

```

Deshalb Daten**Normal** sollte in `[0.8943, 0.4472, 0]` geändert werden.

Nach Erledigung dieser Änderungen berechne das Modell mit Ctrl+R neu. Wenn das Loch in der Wand nicht aktualsiert wird, wähle diese im Modelbaum aus, rechtsklicke und wähle `Markiere, um neu zu berechnen`, drücke dann noch einmal auf Ctrl+R.

19. Die Extrusionsrichtung der Fenster ist gelöst, zusammen nut der Öffnung in der Wand.

![](/images/17_T02_sketch_2_attached_correctly.png)

Korrekte Öffnung in der Wand, genau passend zur Normalen des Fensters

## Schlußbemerkungen

20. Wie demonstriert ist die anfängliche Platzierung der [Arch: Fenster](/Arch_Window/de "Arch Window/de") sehr wichtig. Der Anwender sollte entweder

- das Werkzeug [Arch: Fenster](/Arch_Window/de "Arch Window/de") zum Einfügen eines vordefinierten Elements und automatischen Ausrichten an einer Wand benutzen, oder
- eine Skizze auf die gewünschte Wand projizieren und das Fenster danach aufzubauen.

Wenn das Fenster bereits vorhanden ist und verschoben werden soll, muss die zugrundeliegende Skizze auf die neue Fläche umprojiziert werden und die Eigenschaft Daten**Normal** des Fensters neu berechnet werden.

Die neue Normalen-Richtung kann durch Messen des `Winkels` der neuen Wand in Bezug zur globalen Y-Achse und unter Berücksichtigung, ob der Winkel positiv (gegen den Uhrzeigersinn) oder negativ (im Uhrzeigersinn) ist, durch Verwendung einer einfachen Formel ermittelt werden:

```
x = -sin(angle)
y = cos(angle)
z = 0

```

Die Richtigkeit der Berechnungen kann überprüft werden, indem der absolute Betrag des Normalenvektors mit den folgenden Formeln ermittelt wird - er muss "eins" sein:

```
abs(N) = 1 = sqrt(x^2 + y^2 + z^2)
abs(N) = 1 = sqrt(sin^2(angle) + cos^2(angle) + z^2)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_custom_placing_of_windows_and_doors/de&oldid=1433941>"
