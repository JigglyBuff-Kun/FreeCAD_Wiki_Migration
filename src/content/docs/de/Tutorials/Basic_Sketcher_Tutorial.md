---
title: Grundlegendes Sketcher Tutorium
---
|  |
| --- |
| Tutorium |
| Thema |
| Skizzierer |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 60 Minuten |
| Autoren |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) und vocx |
| FreeCAD-Version |
| 0.19 |
| Beispieldateien |
| [Grundlegendes Skizzierer Tutorium aktualisiert](https://forum.freecadweb.org/viewtopic.php?f=36&t=43594) |
| Siehe auch |
| *None* |
|  |

## Einführung

Dieses Tutorium wurde ursprünglich von Drei geschrieben, und es wurde von vocx neu geschrieben und illustriert.

Dieses Tutorium soll den Leser in den grundlegenden Arbeitsablauf des ![](/images/Workbench_Sketcher.svg) [Skizzierer Arbeitsbereich](/Sketcher_Workbench/de "Sketcher Workbench/de") einführen.

Der [Skizzierer Arbeitsbereich](/Sketcher_Workbench/de "Sketcher Workbench/de") existiert als eigenständiges Modul, so dass es zum Zeichnen von generischen 2D (planaren) Objekten verwendet werden kann. Es wird jedoch meistens in Verbindung mit dem ![](/images/Workbench_PartDesign.svg) [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") verwendet. Eine geschlossene Skizze wird normalerweise verwendet, um eine Fläche oder ein Profil zu erzeugen, die bzw. das mit einer Anwendung wie ![](/images/PartDesign_Pad.svg) [PartDesign Polster](/PartDesign_Pad/de "PartDesign Pad/de") in einen Volumenkörper extrudiert wird.

Der Leser wird üben:

* Konstruktionsgeometrie erstellen
* Reale Geometrie erzeugen
* Anwenden von geometrischen Beschränkungen
* Anwenden von Bezugspunktbeschränkungen
* Erhalten eines geschlossenen Profils

Für eine genauere Beschreibung des Sketchers, lies das [Sketcher-Referenzhandbuch](/Sketcher_Lecture/de "Sketcher Lecture/de").

![](/images/00_Sk01_Sketcher_fully_constrained_final.png)

Endergebnis der Skizze, wobei die gesamte Geometrie vollständig beschränkt ist, einschließlich der Konstruktionsgeometrie zur Unterstützung.

## Einrichtung

1. Öffne FreeCAD, erstelle ein neues leeres Dokument mit **Datei → ![](/images/Std_New.svg) [Neu](/Std_New/de "Std New/de")**.

:   1.1. Wechsle zum [Skizzierer Arbeitsbereich](/Sketcher_Workbench/de "Sketcher Workbench/de") über den [Arbeitsbereich Wähler](/Std_Workbench/de "Std Workbench/de") oder das Menü **[Ansicht](/Std_View_Menu/de "Std View Menu/de") → Arbeitsbereich → Skizzierer**.

Einige Aktivitäten zum Erinnern:

* Drücke die rechte Maustaste, oder drücke Esc einmal auf der Tastatur, um das aktive Werkzeug im Bearbeitungsmodus abzuwählen.
* Um den Skizzenbearbeitungsmodus zu verlassen, drücke die Schließen Schaltfläche im [Aufgabenpaneel](/Task_panel/de "Task panel/de") oder drücke Esc zweimal auf der Tastatur.
* Um den Bearbeitungsmodus erneut aufzurufen, doppelklicke auf die Skizze in der [Baumansicht](/Tree_view/de "Tree view/de") oder wähle sie aus und klicke dann auf ![](/images/Sketcher_EditSketch.svg) [Skizze bearbeiten](/Sketcher_EditSketch/de "Sketcher EditSketch/de").

## Erstellen einer Skizze

2. Klicke auf ![](/images/Sketcher_NewSketch.svg) [Neue Skizze](/Sketcher_NewSketch "Sketcher NewSketch").

:   2.1. Wähle die Skizzenausrichtung, d.h. eine der Basisebenen XY, XZ oder YZ. Wähle auch, ob du eine umgekehrte Ausrichtung und einen Versatz von der Grundebene wünschst.
:   2.2. Wir werden die Standardebene und -optionen verwenden.
:   2.3. Klicke auf OK , um mit der Konstruktion der Skizze zu beginnen.

Wir befinden uns jetzt im Skizzenbearbeitungsmodus. Innerhalb dieses Modus können wir die meisten Werkzeuge dieses Arbeitsbereichs nutzen.

*Hinweis:* Die [Baumansicht](/Tree_view/de "Tree view/de") wechselt zum [Aufgabenpaneel](/Task_panel/de "Task panel/de"); in dieser Oberfläche erweitere den **Bedienelemente bearbeiten** Abschnitt und stelle sicher, dass die **Auto Beschränkungen** Option aktiviert ist. Andere Optionen können geändert werden, einschließlich der Größe des sichtbaren Gitters und der Frage, ob wir am Gitter einrasten wollen; in diesem Tutorium werden wir nicht am Gitter einrasten und wir werden es auch ausblenden. In anderen Abschnitten des [Aufgabenpaneel](/Task_panel/de "Task panel/de") kannst du auch sehen, welche geometrischen Elemente und Beschränkungen definiert wurden.

![](/images/01_Sk01_Sketcher_Task_panel.png)

Oberer Teil des [Aufgabenpaneel](/Task_panel/de "Task panel/de") des Skizzierers.

## Konstruktionsgeometrie

3. Die Konstruktionsgeometrie wird verwendet, um die Erstellung von "echter" Geometrie zu leiten. Die reale Geometrie wird außerhalb des Bearbeitungsmodus der Skizze angezeigt, während die Konstruktionsgeometrie nur innerhalb des Bearbeitungsmodus angezeigt wird. Daher kannst du so viel Konstruktionsgeometrie verwenden, wie du zum Erstellen von realen Formen benötigst.

:   3.1. Klicke auf ![](/images/Sketcher_ToggleConstruction.svg) [Konstruktion umschalten](/Sketcher_ToggleConstruction/de "Sketcher ToggleConstruction/de"). Jetzt werden geometrische Elemente im **Konstruktionsmodus** gezeichnet.
:   3.2. Klicke auf ![](/images/Sketcher_Line.svg) [Linie Erstellen](/Sketcher_CreateLine/de "Sketcher CreateLine/de").
:   3.3. Nähere dich dem **Ursprung** der Skizze, der Punkt sollte aufleuchten und in der Nähe deines Mauszeigers das ![](/images/Constraint_PointOnPoint.svg) [Deckungsgleiche Beschränkung](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") Symbol erscheinen.
:   3.4. Klicke auf den Punkt und bewege dann den Zeiger, um eine neue Linie von diesem Punkt aus zu zeichnen. Bewege den Zeiger so, dass die Linie eine Länge von etwa `30 mm` hat. Du musst in diesem Schritt nicht sehr genau sein; später werden wir die korrekte Abmessung einstellen.
:   3.5. Wiederhole diesen Vorgang vier weitere Male, um Konstruktionslinien in einem Sternenmuster zu platzieren. Kümmere dich nicht allzu sehr um ihre Größe oder Position, verlängere sie einfach in den vier Quadranten.
:   3.6. Verlasse jetzt den Konstruktionsmodus, durch erneutes klicken auf ![](/images/Sketcher_ToggleConstruction.svg) [Konstruktion umschalten](/Sketcher_ToggleConstruction/de "Sketcher ToggleConstruction/de").

*Hinweis:* bis zu diesem Punkt ist das [Linienwerkzeug](/Sketcher_CreateLine/de "Sketcher CreateLine/de") noch aktiv. Das bedeutet, dass wir weiterhin auf die [3D Ansicht](/3D_view/de "3D view/de") klicken können, um so viele Linien zu zeichnen, wie wir wollen. Wenn wir dieses Werkzeug verlassen möchten, können wir die rechte Maustaste drücken oder Esc auf der Tastatur einmal drücken. Auf diese Weise erzeugt der Zeiger keine Linien mehr, sondern ist nur noch ein Zeiger, mit dem wir die gerade erzeugten Objekte auswählen können. In diesem Zeigermodus können wir die Endpunkte jeder Linie auswählen und ziehen, um ihre Platzierung anzupassen.

*Anmerkung 2:* drücke nicht ein zweites Mal Esc, da dadurch der Skizzenbearbeitungsmodus verlassen wird. Wenn du dies tust, rufst du den Bearbeitungsmodus erneut auf, indem du in die [Baumansicht](/Tree_view/de "Tree view/de") auf die Skizze doppelklickst.

Wirf noch einmal einen Blick auf das [Aufgabenpaneel](/Task_panel/de "Task panel/de"). Der Abschnitt **Lösermeldungen** weist bereits darauf hin, dass die Skizze unterbeschränkt ist, und erwähnt die Anzahl der *Freiheitsgrade*.

Schaue dir die Abschnitte **Beschränkungen** und **Elemente** an, um die neu aufgelisteten Beschränkungen und Linien zu sehen. Wenn deine Skizzen viele Elemente enthalten, kann es schwierig sein, diese in der [3D Ansicht](/3D_view/de "3D view/de") auszuwählen, so dass du diese Listen verwenden kannst, um genau das gewünschte Objekt auszuwählen.

![](/images/02_Sk01_Sketcher_construction.png)

Konstruktionslinien, die eine Sternform mit dem Zentrum im Ursprung bilden.

## Reale Geometrie

Die reale Geometrie muss eine geschlossene Form aufweisen, wenn sie als Profil verwendet werden soll, das mit Werkzeugen wie ![](/images/PartDesign_Pad.svg) [PartDesign Polster](/PartDesign_Pad/de "PartDesign Pad/de") extrudiert werden kann.

Vergewissere dich, dass du dich nicht im Konstruktionsmodus befindest, durch klicken auf ![](/images/Sketcher_ToggleConstruction.svg) [Konstruktion umschalten](/Sketcher_ToggleConstruction/de "Sketcher ToggleConstruction/de"), wenn du diesen Modus zuvor noch nicht verlassen hast.

### Äußere Bögen

4. Erstelle einen Kreis.

:   4.1. Klicke auf ![](/images/Sketcher_Circle.svg) [Kreis erstellen](/Sketcher_CreateCircle/de "Sketcher CreateCircle/de").
:   4.2. Klicke auf den **Ursprung** der Skizze, um ihren Mittelpunkt zu positionieren.
:   4.3. Klicke auf eine beliebige Stelle in der [3D Ansicht](/3D_view/de "3D view/de"), um den Umfangsradius als Abstand vom Ursprung festzulegen. Mache ihn ungefähr `8 mm`. Auch hier wird die Bemaßung später festgelegt.

5. Erstelle eine Reihe von Bögen.

:   5.1. Klicke auf ![](/images/Sketcher_Arc.svg) [Bogen erstellen](/Sketcher_CreateArc/de "Sketcher CreateArc/de").
:   5.2. Nähere dich dem Endpunkt einer der Konstruktionslinien, und klicke auf ihn. Dadurch wird der Mittelpunkt des Kreisbogens auf ![](/images/Constraint_PointOnPoint.svg) [Deckungsgleich](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") mit dem Endpunkt dieser Linie gesetzt.
:   5.3. Klicke einmal in die [3D Ansicht](/3D_view/de "3D view/de") an einer beliebigen Stelle, um gleichzeitig den Radius des Bogens und den ersten Endpunkt des Bogens festzulegen. Definiere einen ungefähren Radius von `8 mm`.
:   5.4. Bewege den Zeiger gegen den Uhrzeigersinn, um einen Bogen zu zeichnen, dessen Konkavität auf den Ursprung der Skizze zeigt. Klicke, um den endgültigen Endpunkt des Bogens festzulegen, indem du einen Kreisbogen festlegst, der ungefähr `180°` oder einen Halbkreis überstreicht.
:   5.5. Wiederhole diese Schritte mit jeder Konstruktionslinie, so dass jede von ihnen einen Kreisbogen an ihrer Spitze hat. Wir werden diese O-Bögen für nach außen gerichtete Bögen nennen.

![](/images/03_Sk01_Sketcher_outer_arcs.png)

Kreisbögen hinzugefügt an den Endpunkten der Konstruktionslinien. Ebenso ein zentraler Kreis.

### Innere Bögen

6. Erzeuge einen Bogen zwischen jedem Paar der vorherigen O-Bögen.

:   6.1. Immer noch mit dem ![](/images/Sketcher_Arc.svg) [Bogen erzeugen](/Sketcher_CreateArc/de "Sketcher CreateArc/de") Werkzeug aktiv, klicke irgendwo zwischen zwei O-Bögen, aber weiter vom Ursprung der Skizze entfernt, um den Mittelpunkt eines neuen Bogens festzulegen.
:   6.2. Klicke irgendwo in die Nähe des Endpunkts eines O-Bogens und bewege den Zeiger, um einen weiteren Bogen zu überstreichen, der in der Nähe eines anderen Endpunkts eines anderen O-Bogens endet, als ob du versuchen würdest, die Endpunkte zu verbinden. Diesmal muss die Konkavität vom Ursprung weg zeigen.
:   6.3. Wiederhole diese Schritte, so dass jedes Paar von O-Bögen einen neuen Bogen zwischen sich hat. Wir werden diese I-Bögen als nach innen gerichtete Bögen bezeichnen.

Zusammenfassend lässt sich sagen, dass die Krümmung der O-Bögen nach außen und die Konkavität zum Ursprung der Skizze hin zeigen sollte; die Krümmung der I-Bögen sollte nach innen und die Konkavität vom gleichen Ursprung weg zeigen.

![](/images/04_Sk01_Sketcher_inner_arcs.png)

Kreisbögen, die zwischen dem ersten Satz von Bögen hinzugefügt wurden.

## Beschränkungen

Wirf noch einmal einen Blick auf das [Aufgabenpaneel](/Task_panel/de "Task panel/de"). Aufgrund der neuen geometrischen Elemente, die wir gezeichnet haben, weist der **Lösermeldungen** Abschnitt noch mehr *Freiheitsgrade* auf. Ein *Freiheitsgrad* (DOF) zeigt eine mögliche Bewegung eines Elements an. Beispielsweise kann ein Punkt sowohl in horizontaler als auch in vertikaler Richtung bewegt werden, so dass er zwei Freiheitsgrade hat. Eine Linie wird durch zwei Punkte definiert, daher hat sie insgesamt vier Freiheitsgrade. Wenn wir einen dieser Punkte fixieren, dann hat das gesamte System nur zwei Freiheitsgrade zur Verfügung; wenn wir zusätzlich die horizontale Bewegung des verbleibenden Punktes fixieren, dann haben wir nur noch einen Freiheitsgrad; und wenn wir auch die vertikale Bewegung dieses Punktes fixieren, dann verschwindet der letzte Freiheitsgrad, und die Linie kann sich nicht mehr von ihrer Position wegbewegen.

Wenn wir bisher Linien und Kurven gezeichnet haben, hat der Skizzierer für uns automatische Beschränkungen hinzugefügt, die die Linien an den Ursprung und die O-Bögen an die Konstruktionslinien binden. Aber wir haben keine weiteren expliziten Beschränkungen hinzugefügt, so dass die geometrischen Formen immer noch in viele Richtungen bewegt werden können. **Beschränkungen sind "Regeln", die uns sagen, unter welchen Bedingungen sich ein geometrisches Objekt um wie viel bewegen kann.** Sie dienen dazu, die Freiheitsgrade zu eliminieren, damit die Skizze eine stabile Form erhält. Wenn wir alle Freiheitsgrade eliminieren, dann ist die Skizze *Vollständig Beschränkt* und hat eine feste Form, d.h. ihre Punkte können sich überhaupt nicht bewegen. Im Allgemeinen ist es eine gute Idee, Skizzen vollständig zu beschränken, da dies zu stabilen Modellen führt.

Es gibt zwei Haupttypen von Beschränkungen:

* *Geometrische Beschränkungen* definieren Eigenschaften der Formen, ohne genaue Abmessungen anzugeben, z.B. Horizontalität, Vertikalität, Parallelität, Rechtwinkligkeit und Tangentialität.
* *Bezugsbeschränkungen* definieren Merkmale der Formen durch Angabe von Abmessungen, z.B. eine numerische Länge oder einen Winkel.

## Geometrische Beschränkungen

### Gleiche Länge und gleicher Radius

7. Geometrisches Beschränken der Linien und Bögen.

:   7.1 Wähle alle fünf Konstruktionslinien aus. Du brauchst nur einmal zu klicken, um ein Element auszuwählen.
:   7.2. Drücke ![](/images/Constraint_EqualLength.svg) [Gleiche Länge](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de").
:   *Hinweis:* dies erzeugt nur vier Beschränkungen. Die Beschränkungen sind verkettet, die erste Zeile hat die gleiche Länge wie die zweite, die die gleiche Länge wie die dritte hat, die wiederum die gleiche Länge wie die vierte hat, die die gleiche Länge wie die fünfte hat. In diesem Fall haben also die erste und die fünfte die gleiche Länge.

:   7.3. Wähle alle fünf O-Bögen, die auf einen Endpunkt einer Konstruktionslinie zentriert sind.
:   7.4. Drücke ![](/images/Constraint_EqualLength.svg) [Gleiche Länge](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de").
:   7.5. Wiederhole den Vorgang mit allen I-Bögen, denjenigen zwischen den O-Bögen.
:   *Anmerkung:* wieder werden die Beschränkungen verkettet. Daher haben alle O-Bögen den gleichen Radius, und alle I-Bögen haben den gleichen Radius. Zu diesem Zeitpunkt ist der spezifische Wert dieser Längen nicht festgelegt. Du kannst den Zeiger verwenden, um einen Punkt zu ziehen und zu sehen, wie die Skizze unter Berücksichtigung der bestehenden Beschränkungen aktualisiert wird.

:   7.6. Wähle die Konstruktionslinie, die der vertikalen Achse am nächsten liegt.
:   7.7. Drücke ![](/images/Constraint_Vertical.svg) [Vertikal](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de") (wahlweise). Wenn du die Konstruktionslinie über die Y Achse nach unten gezogen hast, wird eine automatische ![](/images/Constraint_PointOnObject.svg) [Punkt auf Object Beschränkung](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") wurde bereits platziert, wobei die Konstruktionslinie vertikal blieb. In diesem Fall ist keine zusätzliche ![](/images/Constraint_Vertical.svg) [Vertikale Beschränkung](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de") erforderlich.

*Hinweis:* Beim Hinzufügen von Beschränkungen erscheinen Überlagerungssymbole, die die Art der Beschränkung angeben, über der Geometrie in der [3D Ansicht](/3D_view/de "3D view/de"). Wenn diese Symbole deine Ansicht verdunkeln, kannst du sie ausblenden, indem du die Beschränkung im [Aufgabenpaneel](/Task_panel/de "Task panel/de") deaktivierst. Beachte auch, dass die Anzahl der Freiheitsgrade nach dem Hinzufügen jeder Beschränkung abnimmt.

*Hinweis 2:* Wenn du die Beschränkung vorübergehend deaktivieren möchtest, kannst du sie auswählen und ![](/images/Sketcher_ToggleActiveConstraint.svg) [Aktive Beschränkung umschalten](/Sketcher_ToggleActiveConstraint/de "Sketcher ToggleActiveConstraint/de"). Wenn du sie erneut anwenden möchtest, drücke erneut dieselbe Schaltfläche.

![](/images/05a_Sk01_Sketcher_equality_constraints_lines.png) ![](/images/05b_Sk01_Sketcher_equality_constraints_O-arcs.png)

![](/images/05c_Sk01_Sketcher_equality_constraints_I-arcs.png)

Skizze mit Gleichheitsbeschränkungen, die auf die Konstruktionslinien und die beiden Bogensätze angewendet werden.

### Tangentialität

8. Wende Tangentialität auf die Bögen an.

:   8.1. Wähle einen Endpunkt eines O-Bogens und dann den nächstgelegenen Endpunkt des benachbarten I-Bogens.
:   8.2. Drücke ![](/images/Constraint_Tangent.svg) [Tangente](/Sketcher_ConstrainTangent/de "Sketcher ConstrainTangent/de"). Dadurch werden die beiden benachbarten Bögen an ihren Endpunkten nahtlos miteinander verbunden.
:   8.3. Wiederhole diesen Vorgang für alle Endpunkte der O-Bögen und I-Bögen, um ein geschlossenes Profil zu erhalten.

*Hinweis:* Durch die Anwendung der tangentialen Beschränkung wird die Geometrie sehr oft verschoben, um eine glatte Verbindung herzustellen. Möglicherweise musst du den Zeiger verwenden, um die Punkte ein wenig umzupositionieren, bevor du die nächste tangentiale Beschränkung anwendest. Versuche, die Endpunkte so zu platzieren, dass zwei Bögen nicht zu weit voneinander entfernt sind, so dass sie eher mit einer kurzen als mit einer langen Linie verbunden werden können.

Ab diesem Schritt haben wir nun ein geschlossenes Profil erstellt, da alle Bögen miteinander verbunden wurden. Jetzt können wir Bezugsbeschränkungen angeben, um die Form der Skizze zu fixieren. Während die Bemaßungen von Linien und Bögen unfixiert bleiben, können wir die Punkte der Skizze ziehen und beobachten, wie sich die gesamte Skizze verändert.

![](/images/06_Sk01_Sketcher_tangency_constraints.png)

Skizze mit tangentialen Beschränkungen, die auf die Bögen angewendet werden, wodurch die Form geschlossen wird.

## Bezugspunktbeschränkungen

Diese Beschränkungen geben die numerischen Abstände zwischen zwei Punkten und die Winkel zwischen zwei Linien an.

### Abstände und Winkel

9. Passe die Größe der Konstruktionslinien an.

:   9.1. Wähle die vertikal beschränkte Konstruktionslinie aus.
:   9.2. Drücke ![](/images/Constraint_VerticalDistance.svg) [Vertikaler Abstand](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de").
:   9.3. Setze die Länge auf `30 mm`. Da alle Konstruktionslinien auf die gleiche Länge beschränkt sind, passen alle diese Linien gleichzeitig ihre Größe an.

10. Passe den Winkel zwischen den Konstruktionslinien an.

:   10.1. Wähle die vertikale Konstruktionslinie und die ihr am nächsten liegende Konstruktionslinie.
:   10.2. Drücke ![](/images/Constraint_InternalAngle.svg) [Winkel](/Sketcher_ConstrainAngle/de "Sketcher ConstrainAngle/de").
:   10.3. Setze den Winkel auf `72°`.
:   10.4. Wiederhole dasselbe Verfahren für jedes Paar Konstruktionslinien und verwende denselben Winkel.
:   *Hinweis:* Zu diesem Zeitpunkt hat die Skizze möglicherweise nur noch sehr wenige Freiheitsgrade, was bedeutet, dass ihre Form nicht allzu sehr verändert werden kann. Wenn du versuchst, weitere Beschränkungen hinzuzufügen, können diese zu einem Konflikt mit den zuvor hinzugefügten Beschränkungen führen. Wenn dies der Fall ist, füge diese Beschränkungen nicht hinzu, und fahre mit den nächsten Schritten fort.

![](/images/07a_Sk01_Sketcher_length_constraint.png) ![](/images/07b_Sk01_Sketcher_angle_constraint.png)

Skizze mit Längenbeschränkung auf eine vertikale Konstruktionslinie (links) und Winkelbeschränkungen auf drei Paare von Konstruktionslinien (rechts).

### Radius

11. Stelle die Größe der Bögen ein.

:   11.1. Wähle einen der O-Bögen, zentriert auf den Endpunkt einer Konstruktionslinie.
:   11.2. Drücke ![](/images/Constraint_Radius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius").
:   11.3. Setze den Radius auf `8 mm`. Da alle O-Bögen gezwungen sind, denselben Radius zu haben, passen alle diese Bögen gleichzeitig ihre Größe an.
:   11.4. Wähle einen der I-Bögen zwischen zwei O-Bögen.
:   11.5. Drücken ![](/images/Constraint_Radius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius").
:   11.6. Setze den Radius auf `11 mm`. Da alle I-Bögen gezwungen sind, denselben Radius zu haben, passen alle diese Bögen gleichzeitig ihre Größe an.

![](/images/08a_Sk01_Sketcher_radius_1_constraint.png) ![](/images/08b_Sk01_Sketcher_radius_2_constraint.png)

Skizze mit Radiusbeschränkungen, die auf die nach außen gerichteten Bögen (links) und die nach innen gerichteten Bögen (rechts) angewendet werden.

:   11.7. Wähle schließlich den Kreis in der Mitte der Skizze aus, drücke ![](/images/Constraint_Radius.svg) [Radius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius"), und setze den Wert auf `8 mm`.

Wir sollten am Ende eine völlig beschränkte Skizze erhalten. Dies kann bestätigt werden, indem man die Farbänderung der realen Geometrie bemerkt, und durch die Nachricht, die im [Aufgabenpaneel](/Task_panel/de "Task panel/de") angezeigt wird.

![](/images/09_Sk01_Sketcher_fully_constrained.png)

Skizze mit allen angewandten geometrischen und Datumsbeschränkungen.

## Extrusion

12. Nun, da wir eine vollständig beschränkte Skizze haben, kann sie zur Erzeugung eines festen Körpers verwendet werden.

:   12.1. Verlasse den Skizzenbearbeitungsmodus durch Drücken der Schließen Schaltfläche oder durch zweimaliges Drücken von Esc. Die Skizze sollte in der [Baumansicht](/Tree_view/de "Tree view/de") und in der [3D Ansicht](/3D_view/de "3D view/de") erscheinen.
:   12.2. Wechsle zum [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de").
:   12.3. Mit der in der [Baumansicht](/Tree_view/de "Tree view/de") gewählten Skizze, drücke ![](/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de"), Wähle die Standard XY-Ebene und drücke OK. Die Skizze sollte nun innerhalb des Körpers erscheinen.
:   12.4. Wähle die Skizze aus, und drücke dann ![](/images/PartDesign_Pad.svg) [PartDesign Polster](/PartDesign_Pad/de "PartDesign Pad/de"), wähle die Standardoptionen und drücke OK, um eine Volumenextrusion zu erzeugen.

![](/images/09b_Sk01_Sketcher_fully_constrained_clean.png) ![](/images/10_Sk01_Sketcher_solid_extrusion.png)

Links: vollständig beschränkte Skizze, in der nur die wichtigsten Beschränkungen gezeigt werden. Rechts: Volumenextrusion erzeugt mit [PartDesign Polster](/PartDesign_Pad/de "PartDesign Pad/de").

## Zusätzliche Informationen

Für eine eingehendere Beschreibung des Skizzierers besuche die [Skizzierer Arbeitsbereich](/Sketcher_Workbench/de "Sketcher Workbench/de") Dokumentation und lies auch das [Sketcher-Referenzhandbuch](/Sketcher_Lecture/de "Sketcher Lecture/de").

Die Beschränkung einer Skizze kann auf viele verschiedene Arten erfolgen. Im Allgemeinen empfiehlt es sich, zuerst geometrische Beschränkungen zu verwenden und die Anzahl der Bezugsbeschränkungen zu minimieren, da dies die Aufgabe des internen Beschränkungslösers vereinfacht. Um dies zu untersuchen, wiederhole dieses Beispiel und füge nun die Abhängigkeiten in anderer Reihenfolge hinzu.

* Beschränke zuerst die Konstruktionslinien, bevor du die Bögen zeichnest.
* Oder beschränke die Größe der Bögen, bevor du sie tangierst.
* Oder lege den Winkel der Konstruktionslinien fest, bevor du weitere Elemente hinzufügst.
* Versuche, eine andere Konstruktionsgeometrie zu verwenden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Sketcher_Tutorial/de&oldid=1471383>"