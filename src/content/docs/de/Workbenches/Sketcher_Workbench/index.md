---
title: Arbeitsbereich Sketcher
---

![](/src/assets/images/Workbench_Sketcher.svg)

Symbol des Arbeitsbereichs Sketcher

## Einleitung

Mit dem Arbeitsbereich ![](/src/assets/images/Workbench_Sketcher.svg) Sketcher können 2D-Skizzen für den Gebrauch in anderen Arbeitsbereichen erstellt werden. 2D-Skizzen sind der Ausgangspunkt für viele CAD-Modelle. Sie legen typischerweise die Profilquerschnitte und Rückgratkurven für die Verfahren zur Erstellung von 3D-Formen fest. Die endgültige Form eines Modells kann von mehreren Skizzen abhängen.

Zusammen mit booleschen Verknüpfungen, die im Arbeitsbereich ![](/src/assets/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") festgelegt werden, bildet der Arbeitsbereich Sketcher, oder kurz "der Sketcher", die Basis der Methode "Konstruktive Festkörper-Geometrie", engl.: [constructive solid geometry](/Constructive_solid_geometry/de "Constructive solid geometry/de") (CSG) zum Aufbau von Festkörpern. Zusammen mit den Verfahren des Arbeitsbereichs ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") bildet er auch die Basis der Methode [Formelemente bearbeiten](/Feature_editing/de "Feature editing/de") zum Aufbau von Festkörpern. Aber auch viele andere Arbeitsbereiche setzen Skizzen ein.

Der Arbeitsbereich Sketcher verwendet [Randbedingungen](#Randbedingungen) (engl.: constraints, auch Beschränkungen, Zwangsbedingungen oder Einschränkungen genannt), die es ermöglichen, dasss 2D-Formen präzisen geometrische Festlegungen in Form von Längen, Winkeln und Lagebeziehungen (horizontal, vertikal, rechtwinklig, usw.) folgen. Ein mathematischer Gleichungslöser (kurz Löser) _Löser_ (engl.: Solver) berechnet den mit Randbedingungen bestimmten Umfang der 2D-Geometrie und ermöglicht die interaktive Überwachung der Freiheitsgrade der Skizze.

Der Sketcher ist nicht für die Herstellung von technischen Zeichnungen (Blaupausen) vorgesehen. Sobald Skizzen eingesetzt wurden um ein Festkörper-Formelement zu erstellen, werden sie automatisch ausgeblendet und Randbedingungen sind nur im Skizzenbearbeitungsmodus sichtbar. Sollen nur 2D-Zeichnungen zum Ausdrucken erstellt werden, ohne dass 3D-Modelle benötigt werden, sollte der Arbeitsbereich [Draft](/Draft_Workbench "Draft Workbench") ausprobiert werden.

![](/src/assets/images/FC_ConstrainedSketch.png)

Eine vollständig bestimmte Skizze‎

## Randbedingungen

Randbedingungen (auch Beschränkungen, Einschränkungen, Zwangsbedingung genannt) werden eingesetzt, um die Freiheitsgrade eines Objektes festzulegen (zu bestimmen). Beispielsweise besitzt eine Linie ohne Randbedingung 4 nicht bestimmte Freiheitsgrade (engl.: degree(s) of freedom, abgekürzt als "DoF"): Sie kann horizontal oder vertikal verschoben, sie kann gestreckt, oder gedreht werden.

Durch Vorgabe einer Ausrichtung, wie horizontal, vertikal oder eines Winkels (relativ zu einer anderen Linie oder zu einer der Achsen), wird ihr die Fähigkeit zu rotieren genommen, sodass 3 Freiheitsgrade übrig bleiben. Das Festsetzen eines der Punkte relativ zum Ursprung entfernt weitere 2 Freiheitsgrade. Und das Festlegen der Länge entfernt den letzten Freiheitsgrad. Die Skizze ist dann **vollständig bestimmt**.

Objekte können relativ zueinander ausgerichtet werden. Zwei Linien können durch je einen ihrer Endpunkte mit der Randbedingung _KoinzidentFestlegen_ (deckungsgleich) verbunden werden. Ein Winkel kann zwischen den beiden Linien festgelegt werden oder auch ein rechter Winkel. Eine Linie kann tangential an einem Bogen oder einem Kreis liegen, usw. Eine komplexe Skizze mit mehreren Objekten kann auf verschiedene Arten festgelegt bzw. bestimmt werden. **vollständig bestimmt** bedeutet, dass die Kombination der Randbedingungen nur noch genau eine Lösung für die Berechnung zulässt.

Es gibt zwei Arten von Randbedingungen: _geometrische_ und _maßliche_. Sie sind im Abschnitt [Werkzeuge](#Werkzeuge) weiter unten ausführlich beschrieben.

### Randbedingungen bearbeiten

Wenn eine [festlegende maßliche Randbedingung](/Sketcher_ToggleDrivingConstraint/de "Sketcher ToggleDrivingConstraint/de") erstellt wird und wenn die [Einstellung](/Sketcher_Preferences/de#Anzeige "Sketcher Preferences/de") **Wert erfragen, nach Erstellung einer maßlichen Randbedingung** aktiviert ist (Standardeinstellung), öffnet sich ein Dialog zum Bearbeiten des Wertes.

![Sketcher Randbedingungen bearbeiten](/src/assets/images/Sketcher_Edit_Constraint.png)

Es kann ein Zahlenwert oder ein [Ausdruck](/Expressions/de "Expressions/de") eingegeben werden und es ist möglich der Randbedingung einen Namen zu geben, um ihre Verwendung in anderen Ausdrücken zu ermöglichen. Man kann die Checkbox **Referenz** aktivieren, um die Randbedingung in den [anzeigenden Modus](/Sketcher_ToggleDrivingConstraint/de "Sketcher ToggleDrivingConstraint/de") umzuschalten.

Um den Wert einer vorhandenen maßlichen Randbedingung zu ändern gibt es folgende Möglichkeiten :

- Ein Doppelklick auf die Randbedingung in der [3D-Ansicht](/3D_view/de "3D view/de").
- Ein Doppelklick auf die Randbedingung im [Sketcher-Dialog](/Sketcher_Dialog/de "Sketcher Dialog/de").
- Ein Rechtsklick auf die Randbedingung im Sketcher-Dialog und die Menüoption **Wert ändern** im Kontextmenü auswählen.

### Randbedingungen verschieben

Maßliche Randbedingungen können durch Ziehen in der 3D-Ansicht verschoben werden. MIt dem Mauszeiger über der Maßzahl die linke Maustaste gedrückt halten und die Maus bewegen. Die Symbole der geometrischen Randbedingungen werden automatisch positioniert und können nicht bewegt werden.

## Profilskizzen

Um eine Skizze zu erstellen, die sich zum Erstellen von Festkörpern eignet, müssen folgende Regeln befolgt werden:

- Die Skizze darf nur geschlossene Konturen enthalten. Lücken zwischen den Endpunkten, egal wie klein, sind nicht erlaubt.
- Konturen können eingebettet werden, um Hohlräume zu erstellen; sie dürfen sich aber nicht selbst kreuzen oder andere Konturen überlappen.
- Konturen dürfen keine gemeinsamen Kanten mit anderen Konturen besitzen. Doppelte Kanten müssen vermieden werden.
- T-Verbindungen, d.h. mehr als zwei Kanten sind mit einem gemeinsamen Punkt verbunden, oder ein Punkt der eine Kante berührt, sind nicht erlaubt.

Diese Regeln gelten nicht für Hilfsgeometrie (Standardfarbe blau), die außerhalb des Bearbeitungsmodus nicht dargestellt wird oder wenn die Skizze für einen anderen Zweck eingesetzt wird. Abhängig von dem Arbeitsbereich und dem Werkzeug, das die Skizze verwendet, können weitere Einschränkungen gelten.

## Zeichnungshilfen

Der Arbeitsbereich Sketcher besitzt einige Zeichnungshilfen und andere Funktionen, die bei der Erstellung von Geometie und beim Zuordnen von Randbedingungen helfen können.

### Fortsetzen-Modi

Es gibt zwei Fortsetzen-Modi. Werden in den [Voreinstellungen](/Sketcher_Preferences/de#Anzeige "Sketcher Preferences/de") die Einstellungen **Geometrie im "Fortsetzen-Modus" erstellen** und **Randbedingungen im "Fortsetzen-Modus" erstellen** aktiviert (Standardeinstellung), dann werden die zugehörigen Werkzeuge nach dem Beenden erneut gestartet. Um ein Werkzeug im Fortsetzen-Modus zu beenden, wird die Esc-Taste oder die rechte Maustaste gedrückt. Dies muss wiederholt werden, wenn ein Werkzeug zur Geometrieerstellung im Fortsetzen-Modus schon Eingaben erhalten hat. Ein Werkzeug im Fortsetzen-Modus kann auch verlassen werden, indem ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen gestartet wird. Man beachte, dass das Drücken der Esc-Taste den Skizzenbearbeitungsmodus verlässt, wenn kein Werkzeug ausgewählt ist. Das Deaktivieren der Option **Mit Esc den Bearbeitungsmodus der Skizze verlassen** in den [Voreinstellungen](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") hilft, wenn man zu oft unbeabsichtig Esc drückttoo many times.

### Automatische Randbedingungen

In Skizzen, für die **Automatische Randbedingungen** aktiviert ist (Standardeinstellung), werden mehrere Randbedingungen automatisch angelegt. Das Symbol der vorgesehenen automatischen Randbedingung wird neben dem Mauszeiger angezeigt, wenn er richtig positioniert ist. Ein Klick mit der linken Maustaste legt diese Randbedingung fest. Diese Einstellung gilt pro Skizze und kann im [Sketcher-Dialog](/Sketcher_Dialog/de#Randbedingungen "Sketcher Dialog/de") geändert werden oder durch Ändern der Ansicht-Eigenschaft**Autoconstraints** ([siehe Eigenschaften](/Property_editor/de "Property editor/de")) der Skizze.

Die folgenden Randedingungen werden automatisch festgelegt:

- ![](/src/assets/images/Sketcher_ConstrainCoincident.svg) [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de")
- ![](/src/assets/images/Sketcher_ConstrainPointOnObject.svg) [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de")
- ![](/src/assets/images/Sketcher_ConstrainHorizontal.svg) [Horizontal festlegen](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de")
- ![](/src/assets/images/Sketcher_ConstrainVertical.svg) [Vertikal festlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de")
- ![](/src/assets/images/Sketcher_ConstrainTangent.svg) [Tangential festlegen](/Sketcher_ConstrainTangent/de "Sketcher ConstrainTangent/de")
- [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): ![](/src/assets/images/Sketcher_ConstrainSymmetric.svg) [Symmetrisch festlegen](/Sketcher_ConstrainSymmetric/de "Sketcher ConstrainSymmetric/de") (Linienmittelpunkt)

### Einrasten

[eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

Es ist möglich auf Rasterlinien und Rasterschnittstellen [einzurasten](/Sketcher_Snap/de "Sketcher Snap/de"), auf Kanten von Geometrien und Mittelpunkten von Linien und Kreisbögen sowie auf bestimmte Winkel. Bitte beachten, dass Einrasten selbst keine Randbedingungen erstellt. Nur wenn [Automatische Randbedingungen](#Automatische_Randbedingungen) eingeschaltet ist, wird das Einrasten auf einer Kante eine Randbedingung [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de") anlegen. Aber auch das einfache Auswählen eines Punktes auf der Kante hätte dann das gleiche Ergebnis.

### In-Ansicht-Parameter

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Abhängig von der ausgewählten Option in den [Voreinstellungen](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") können nur die maßlichen In-Ansicht-Parameter (On-View-Parameters) aktiviert werden oder beide, die maßlichen In-Ansicht-Parameter und die zum Festlegen von Positionen. Letztere ermöglichen die Eingabe von exakten Koordinaten, z.B. für den Mittelpunkt eines Kreises oder den Startpunkt einer Linie. Maßliche Parameter ermöglichen die Eingabe exakter Maße und Winkel z.B. für den Radius eines Kreises oder die Länge und den Winkel einer Linie. In-Ansicht-Parameter stehen nicht für alle Werkzeuge zur Verfügung.

![](/src/assets/images/Sketcher_On_view_parameters_positional.png)

Bestimmung des Mittelpunktes eines Kreises mit aktivierten Positionsparametern

![](/src/assets/images/Sketcher_On_view_parameters_dimensional.png)

Bestimmung des Radius eines Kreises mit aktivierten Maßparametern

Werden Werte eingegeben und mit Enter oder Tab bestätigt, werden die zugehörigen Randbedingungen automatisch hinzugefügt. Werden zwei Parameter gleichzeitig angezeigt, z.B. die X- und die Y-Koordinate eines Punktes, ist es möglich einen Wert einzugeben und den anderen durch Auswahl eines Punktes festzulegen. Abhängig vom Objekt können weitere Randbedingungen erforderlich sein, um es vollständig zu bestimmen. Randbedingungen, die sich aus In-Ansich-Parametern ergeben, haben Vorrang vor denen, die aus [Automatischen Randbedingungen](/Sketcher_Dialog/de#Randbedingungen "Sketcher Dialog/de") resultieren.

![](/src/assets/images/Sketcher_ArcExample3.png)

Kreisbogen, für den alle In-Ansicht-Parameter eingegeben wurden, mit den resultierenden automatisch erstellten Randbedingungen

### Koordinatenanzeige

Ist die [Voreinstellung](/Sketcher_Preferences/de#Anzeige "Sketcher Preferences/de") **Während der Bearbeitung Koordinaten neben dem Eingabezeiger anzeigen** aktiviert (Standardeinstellung), werden die Parameter des aktuellen Werkzeugs zur Geometrieerstellung (Koordinaten, Radius oder Länge und Winkel) neben dem Mauszeiger angezeigt. Dies wird deaktiviert, während in-Ansicht-Parameter angezeigt werden.

## Auswahlmethoden

Während sich eine Skizze im Bearbeitungsmodus befindet, können folgende Methoden eingesetzt werden:

### Elemente in der 3D-Ansicht auswählen

Wie auch anderswo in FreeCAD kann ein Element in der [3D-Ansicht](/3D_view/de "3D view/de") mit einem einzelnen Klick mit der linken Maustaste ausgewählt werden. Die Ctrl-Taste muss aber nicht gedrückt werden, wenn mehrere Elemente ausgewählt werden; sie kann aber gedrückt werden, was den Vorteil hat, dass nicht die ganze Auswahl verloren geht, wenn man sich verklickt. Kanten, Punkte und Randbedingungen können auf diese Weise ausgewählt werden.

### Rechteckauswahl in der 3D-Ansicht

Rechteckauswahl in der 3D-Auswahl funktioniert ohne den Einsatz von [Std RechteckAuswahl](/Std_BoxSelection/de "Std BoxSelection/de") oder [Std RechteckElementAuswahl](/Std_BoxElementSelection/de "Std BoxElementSelection/de"):

1. Sicherstellen, dass kein Werkzeug aktiv ist.
2. Eine der folgenden Möglichkeiten auswählen:
   - In einen leeren Bereich klicken und ein Rechteck von links nach rechts aufziehen, um Elemente auszuwählen, die vollständig innerhalb des Rechtecks liegen.
   - In einen leeren Bereich klicken und ein Rechteck von rechts nach links aufziehen, um auch Elemente auszuwählen, die das Rechtecks berühren oder die sich nur teilweise darin befinden.

Es können nur Kanten und Punkte mit einer Rechteckauswahl ausgewählt werden, aber keine Randbedingungen.

### Verbundene Geometrie in der 3D-Ansicht auswählen

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Ein Doppelklick auf eine Kante in der 3D-Ansicht wählt alle Kanten aus, die direkt oder indirekt mit dieser Kante über Endpunkte verbunden sind. Die Kanten müssen nicht mit der Randbedingung [Koinzident festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") verbunden sein, sie müssen nur die gleichen Koordinaten aufweisen.

### Auswahl im Sketcher-Dialog

Kanten und Punkte können auch im Abschnitt Elemente des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de") ausgewählt werden und Randbedingungen im Abschnitt Randbedingungen dieses Dialogs.

## Kopieren, Ausschneiden und Einfügen

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Die Standard-Tastaturkürzel Ctrl + C, Ctrl + X und Ctrl + V können zum Kopieren, Ausschneiden und Einfügen ausgewählter Skizzengeometrien einschließlich der zugehörigen Randbedingungen eingesetzt werden. Diese Werkzeuge stehen aber auch im Menü unter **Skizze → Sketcher-Werkzeuge** zur Verfügung. Sie können innerhalb derselben Skizze eingesetzt werden aber auch zwischen unterschiedlichen Skizzen oder verschiedenen Instanzen von FreeCAD. Da die Daten als Python-Code in die Zwischenablage kopiert werden, können sie auch auf andere Weise verwendet werden (z.B. im Forum geteilt werden).

## Werkzeuge

Die Werkzeuge des Arbeitsbereichs Sketcher sind im Menü _Sketch_ und/oder mehreren Symbolleisten zu finden. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de"): Fast alle Sketcher-Symbolleisten werden nur dann dargestellt, wenn sich eine Skizze im Bearbeitungsmodus befindet. Die einzige Ausnahme ist die Symbolleiste [Sketcher](#Sketcher_toolbar/de), die nur dargestellt wird, wenn sich keine Skizze im Bearbeitungsmodus befindet.

Einige Werkzeuge stehen auch im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") zur Verfügung, während sich eine Skizze im Bearbeitungsmodus befindet, oder in den Kontextmenüs des [Sketcher-Dialogs](/Sketcher_Dialog/de "Sketcher Dialog/de").

[eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de"): Ist eine Skizze im Bearbeitungsmodus, ist die Werkzeugleiste Struktur ausgeblendet, da dann keins ihrer Werkzeuge verwendet werden kann.

### Allgemein

#### Symbolleiste Sketcher

- ![](/src/assets/images/Sketcher_NewSketch.png) [Skizze erstellen](/Sketcher_NewSketch/de "Sketcher NewSketch/de"): Erstellt eine neue Skizze und öffnet den [Sketcher-Dialog](/Sketcher_Dialog/de "Sketcher Dialog/de"), um sie zu bearbeiten.

- ![](/src/assets/images/Sketcher_EditSketch.png) [Skizze bearbeiten](/Sketcher_EditSketch/de "Sketcher EditSketch/de"): Öffnet den [Sketcher-Dialog](/Sketcher_Dialog/de "Sketcher Dialog/de"), um eine vorhandene Skizze zu bearbeiten.

- ![](/src/assets/images/Sketcher_MapSketch.svg) [Sketcher SkizzeZuordnen](/Sketcher_MapSketch/de "Sketcher MapSketch/de"): Befestigt eine Skizze an ausgewählter Geometrie.

- ![](/src/assets/images/Sketcher_ReorientSketch.svg) [Sketcher SkizzeAusrichten](/Sketcher_ReorientSketch/de "Sketcher ReorientSketch/de"): Verlegt eine Skizze auf eine der Hauptebenen, wahlweise mit einem Abstand. Es kann auch zum Ablösen der Skizze eingesetzt werden.

- ![](/src/assets/images/Sketcher_ValidateSketch.svg) [Skizze überprüfen](/Sketcher_ValidateSketch/de "Sketcher ValidateSketch/de"): Kann eine Skizze analysieren und reparieren, die nicht mehr bearbeitet werden kann oder die ungültige Randbedingungen enthält oder kann fehlende Randbedingungen für Koinzidenz hinzufügen.

- ![](/src/assets/images/Sketcher_MergeSketch.svg) [Skizzen zusammenführen](/Sketcher_MergeSketches/de "Sketcher MergeSketches/de"): Führt zwei oder mehr Skizzen zusammen.

- ![](/src/assets/images/Sketcher_MirrorSketch.svg) [Skizze spiegeln](/Sketcher_MirrorSketch/de "Sketcher MirrorSketch/de"): Spiegelt eine Skizze über ihre X-Achse, Y-Achse oder über ihren Ursprung.

#### Symbolleiste Sketcher-Bearbeitungsmodus

- ![](/src/assets/images/Sketcher_LeaveSketch.png) [Skizze verlassen](/Sketcher_LeaveSketch/de "Sketcher LeaveSketch/de"): Beendet den Bearbeitungsmodus des Sketchers und schließt den [Sketcher-Dialog](/Sketcher_Dialog/de "Sketcher Dialog/de")..

- ![](/src/assets/images/Sketcher_ViewSketch.png) [Skizze anzeigen](/Sketcher_ViewSketch/de "Sketcher ViewSketch/de"): Richtet die [3D-Ansicht](/3D_view/de "3D view/de") zur Skizzenebene aus.

- ![](/src/assets/images/Sketcher_ViewSection.svg) [Schnitt anzeigen](/Sketcher_ViewSection/de "Sketcher ViewSection/de"): Schaltet eine zeitweilige Schnittebene ein bzw. aus, die vorübergehend alle Anteile von Objekten ausblendet, die sich vor der Skizzenebene befinden.

#### Symbolleiste Sketcher-Werkzeuge Bearbeitung

- ![](/src/assets/images/Sketcher_Grid.svg) [Raster umschalten](/Sketcher_Grid/de "Sketcher Grid/de"): Aktiviert bzw. deaktiviert das Raster in der aktuell bearbeiteten Skizze. Die Einstellungen können im zugehörigen Menü angepasst werden. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/src/assets/images/Sketcher_Snap.svg) [Einrasten umschalten](/Sketcher_Snap/de "Sketcher Snap/de"): Aktiviert bzw. deaktiviert das Einrasten in allen Skizzen. Die Einstellungen können im zugehörigen Menü angepasst werden. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

- ![](/src/assets/images/Sketcher_RenderingOrder.svg) [Rendering-Reihenfolge konfigurieren](/Sketcher_RenderingOrder/de "Sketcher RenderingOrder/de"): Die Rendering-Reihenfolge aller Skizzen kann im zugehörigen Menü angepasst werden. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

#### Andere

- ![](/src/assets/images/Sketcher_StopOperation.svg) [Vorgang beenden](/Sketcher_StopOperation/de "Sketcher StopOperation/de"): Hält jedes gerade aktive Werkzeug zur Erstellung von Geometrien oder Randbedingungen an.

### Skizzengeometrien

Dies sind Werkzeuge zum Erstellen von Objekten.

- ![](/src/assets/images/Sketcher_CreatePoint.png) [Punkt erstellen](/Sketcher_CreatePoint/de "Sketcher CreatePoint/de"): Erstellt einen Punkt.

- ![](/src/assets/images/Sketcher_CreatePolyline.svg) [Linienzug erstellen](/Sketcher_CreatePolyline/de "Sketcher CreatePolyline/de"): Erstellt eine Abfolge von Linien- und Kreisbogenabschnitten, die and ihren Enpunkten verbunden sind. Das Werkzeug besitzt mehrere Modi.

- ![](/src/assets/images/Sketcher_CreateLine.svg) [Linie erstellen](/Sketcher_CreateLine/de "Sketcher CreateLine/de"): Erstellt eine Linie zwischen 2 Punkten. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Werkzeug besitzt drei Modi.

- ![](/src/assets/images/Sketcher_CreateArc.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Bogen erstellen:

- ![](/src/assets/images/Sketcher_CreateArc.svg) [Kreisbogen um Mittelpunkt erstellen](/Sketcher_CreateArc/de "Sketcher CreateArc/de"): Erstellt einen Kreisbogen durch Festlegen seines Mittelpunktes und seiner Endpunkte. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Oder durch Festlegen seiner Endpunkte und eines Punktes im Verlauf des Bogens.

- ![](/src/assets/images/Sketcher_Create3PointArc.svg) [Kreisbogen durch 3 Punkte erstellen](/Sketcher_Create3PointArc/de "Sketcher Create3PointArc/de"): Erstellt einen Kreisbogen durch seine Endpunkte und eine weiteren Punkt im Verlauf des Bogens. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [Kreisbogen um Miitelpunkt erstellen](/Sketcher_CreateArc/de "Sketcher CreateArc/de") aber mit einem anderen Startmodus.

- ![](/src/assets/images/Sketcher_CreateArcOfEllipse.svg) [Ellipsenbogen erstellen](/Sketcher_CreateArcOfEllipse/de "Sketcher CreateArcOfEllipse/de"): Erstellt einen Ellipsenbogen.

- ![](/src/assets/images/Sketcher_CreateArcOfHyperbola.svg) [Hyperbelbogen erstellen](/Sketcher_CreateArcOfHyperbola/de "Sketcher CreateArcOfHyperbola/de"): Erstellt einen Hyperbelbogen.

- ![](/src/assets/images/Sketcher_CreateArcOfParabola.svg) [Parabelbogen erstellen](/Sketcher_CreateArcOfParabola/de "Sketcher CreateArcOfParabola/de"): Erstellt einen Parabelbogen.

- ![](/src/assets/images/Sketcher_CreateCircle.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Kreis/Ellipse erstellen:

- ![](/src/assets/images/Sketcher_Circle.svg) [Kreis um Mittelpunkt erstellen](/Sketcher_CreateCircle/de "Sketcher CreateCircle/de"): Erstellt einen Kreis durch Festlegen seines Mittelpunktes und eines Punktes im Verlauf seines Umfangs. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Oder durch Festlegen dreier Punkte im Verlauf seines Umfangs.

- ![](/src/assets/images/Sketcher_Create3PointCircle.svg) [Kreis aus drei Punkten erstellen](/Sketcher_Create3PointCircle/de "Sketcher Create3PointCircle/de"): Erstellt einen Kreis durch Festlegen dreier Punkte im Verlauf seines Umfangs. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [Kreis um Mittelpunkt erstellen](/Sketcher_CreateCircle/de "Sketcher CreateCircle/de") aber mit einem anderen Startmodus.

- ![](/src/assets/images/Sketcher_CreateEllipseByCenter.svg) [Ellipse um Mittelpunkt erstellen](/Sketcher_CreateEllipseByCenter/de "Sketcher CreateEllipseByCenter/de"): Erstellt eine Ellipse durch Festlegen ihres Mittelpunktes, eines Endpunktes einer ihrer Achsen und eines Punktes im Verlauf ihres Umfangs. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Oder durch Festlegen beider Endpunkte einer Achse und eines Punktes im Verlauf ihres Umfangs.

- ![](/src/assets/images/Sketcher_CreateEllipseBy3Points.svg) [Ellipse durch 3 Punkte erstellen](/Sketcher_CreateEllipseBy3Points/de "Sketcher CreateEllipseBy3Points/de"): Erstellt eine Ellipse durch Festlegen beider Endpunkte einer ihrer Achsen und eines Punktes im Verlauf ihres Umfangs. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [Ellipse um Mittelpunkt erstellen](/Sketcher_CreateEllipseByCenter/de "Sketcher CreateEllipseByCenter/de") aber mit einem anderen Startmodus.

- ![](/src/assets/images/Sketcher_CreateRectangle.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Rechteck erstellen:

- ![](/src/assets/images/Sketcher_CreateRectangle.svg) [Rechteck erstellen](/Sketcher_CreateRectangle/de "Sketcher CreateRectangle/de"): Erstellt ein Rechteck. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Werkzeug besitzt vier Modi. Zusätzlich können die Optionen Abgerundete Ecken und Rahmen aktiviert werden.

- ![](/src/assets/images/Sketcher_CreateRectangle_Center.svg) [Zentriertes Rechteck erstellen](/Sketcher_CreateRectangle_Center/de "Sketcher CreateRectangle Center/de"): Erstellt ein zentriertes Rechteck. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Dies ist dasselbe Werkzeug wie [Rechteck erstellen](/Sketcher_CreateRectangle/de "Sketcher CreateRectangle/de") aber mit einem anderen Startmodus.

- ![](/src/assets/images/Sketcher_CreateOblong.svg) [Abgerundetes Rechteck erstellen](/Sketcher_CreateOblong/de "Sketcher CreateOblong/de"): Erstellt ein abgerundetes Rechteck. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Dies ist dasselbe Werkzeug wie [Rechteck erstellen](/Sketcher_CreateRectangle/de "Sketcher CreateRectangle/de") aber mit einem anderen Startmodus.

- ![](/src/assets/images/Sketcher_CreateHexagon.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Regelmäßiges Vieleck erstellen:

- ![](/src/assets/images/Sketcher_CreateTriangle.svg) [Gleichseitiges Dreieck erstellen](/Sketcher_CreateTriangle/de "Sketcher CreateTriangle/de"): Erstellt ein gleichseitiges Dreieck. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [Regelmäßiges Vieleck erstellen](/Sketcher_CreateRegularPolygon/de "Sketcher CreateRegularPolygon/de") aber mit einem bestimmten voreingestellten Wert für die Anzahl der Seiten.

- ![](/src/assets/images/Sketcher_CreateSquare.svg) [Quadrat erstellen](/Sketcher_CreateSquare/de "Sketcher CreateSquare/de"): Erstellt ein Quadrat. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [Regelmäßiges Vieleck erstellen](/Sketcher_CreateRegularPolygon/de "Sketcher CreateRegularPolygon/de") aber mit einem bestimmten voreingestellten Wert für die Anzahl der Seiten.

- ![](/src/assets/images/Sketcher_CreatePentagon.png) [Fünfeck erstellen](/Sketcher_CreatePentagon/de "Sketcher CreatePentagon/de"): Erstellt ein regelmäßigen Fünfeck. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [Regelmäßiges Vieleck erstellen](/Sketcher_CreateRegularPolygon/de "Sketcher CreateRegularPolygon/de") aber mit einem bestimmten voreingestellten Wert für die Anzahl der Seiten.

- ![](/src/assets/images/Sketcher_CreateHexagon.svg) [Sechseck erstellen](/Sketcher_CreateHexagon/de "Sketcher CreateHexagon/de"): Erstellt ein regelmäßiges Sechseck. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [Regelmäßiges Vieleck erstellen](/Sketcher_CreateRegularPolygon/de "Sketcher CreateRegularPolygon/de") aber mit einem bestimmten voreingestellten Wert für die Anzahl der Seiten.

- ![](/src/assets/images/Sketcher_CreateHeptagon.png) [Siebeneck erstellen](/Sketcher_CreateHeptagon/de "Sketcher CreateHeptagon/de"): Erstellt ein regelmäßiges Siebeneck. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [Regelmäßiges Vieleck erstellen](/Sketcher_CreateRegularPolygon/de "Sketcher CreateRegularPolygon/de") aber mit einem bestimmten voreingestellten Wert für die Anzahl der Seiten.

- ![](/src/assets/images/Sketcher_CreateOctagon.png) [Achteck](/Sketcher_CreateOctagon/de "Sketcher CreateOctagon/de"): Erstellt ein regelmäßiges Achteck. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [Regelmäßiges Vieleck erstellen](/Sketcher_CreateRegularPolygon/de "Sketcher CreateRegularPolygon/de") aber mit einem bestimmten voreingestellten Wert für die Anzahl der Seiten.

- ![](/src/assets/images/Sketcher_CreateRegularPolygon.svg) [Regelmäßiges Vieleck erstellen](/Sketcher_CreateRegularPolygon/de "Sketcher CreateRegularPolygon/de"): Erstellt ein regelmäßiges Vieleck. Die Anzahl der Seiten kann eingestellt werden.

- ![](/src/assets/images/Sketcher_CreateSlot.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Oval erstellen:

- ![](/src/assets/images/Sketcher_CreateSlot.svg) [Oval erstellen](/Sketcher_CreateSlot/de "Sketcher CreateSlot/de"): Erstellt eine "Nut".

- ![](/src/assets/images/Sketcher_CreateArcSlot.svg) [Bogennut](/Sketcher_CreateArcSlot/de "Sketcher CreateArcSlot/de"): Erstellt eine Bogennut. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Sketcher_CreateBSpline.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) B-Spline erstellen:

- ![](/src/assets/images/Sketcher_CreateBSpline.svg) [B-Spline durch Kontrollpunkte](/Sketcher_CreateBSpline/de "Sketcher CreateBSpline/de"): Erstellt eine B-Spline-Kurve durch Setzen von Kontrollpunkten. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Oder durch Setzen von Knotenpunkten.

- ![](/src/assets/images/Sketcher_CreatePeriodicBSpline.svg) [Geschlossener B-Spline durch Kontrollpunkte](/Sketcher_CreatePeriodicBSpline/de "Sketcher CreatePeriodicBSpline/de"): Erstellt eine periodische (geschlossene) B-Spline-Kurve durch Setzen von Kontrollpunkten. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [B-Spline durch Kontrollpunkte](/Sketcher_CreateBSpline/de "Sketcher CreateBSpline/de") aber mit einem anderen Startmodus.

- ![](/src/assets/images/Sketcher_CreateBSplineByInterpolation.svg) [B-spline durch Knoten](/Sketcher_CreateBSplineByInterpolation/de "Sketcher CreateBSplineByInterpolation/de"): Erstellt eine B-Spline-Kurve durch Knotenpunkte. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [B-Spline durch Kontrollpunkte](/Sketcher_CreateBSpline/de "Sketcher CreateBSpline/de") aber mit einem anderen Startmodus.

- ![](/src/assets/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [Geschlossener B-Spline durch Knoten](/Sketcher_CreatePeriodicBSplineByInterpolation/de "Sketcher CreatePeriodicBSplineByInterpolation/de"): Erstellt eine periodische (geschlossene) B-Spline-Kurve durch Knotenpunkte. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Dies ist dasselbe Werkzeug wie [B-Spline durch Kontrollpunkte](/Sketcher_CreateBSpline/de "Sketcher CreateBSpline/de") aber mit einem anderen Startmodus.

- ![](/src/assets/images/Sketcher_ToggleConstruction.svg) [Hilfsgeometrie umschalten](/Sketcher_ToggleConstruction/de "Sketcher ToggleConstruction/de"): Aktiviert bzw. deaktiviert den Konstruktionsmodus für alle Werkzeuge zur Geometrieerstellung oder es wandelt ausgewählte normale Geometrie in Hilfsgeometrie und umgekehrt.

### Sketcher-Randbedingungen

Dies sind Werkzeuge zum Erstellen von [Randbedingungen](#Randbedingungen). Einige Randbedingungen erfordern den Einsatz von [Hilfsrandbedingungen](/Sketcher_helper_constraint/de "Sketcher helper constraint/de").

- ![](/src/assets/images/Sketcher_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Maßliche Randbedingungen:

- ![](/src/assets/images/Sketcher_Dimension.svg) [Abmessung](/Sketcher_Dimension/de "Sketcher Dimension/de"): Es ist das kontextabhängige Werkzeug zum Erstellen von Randbedingungen des Arbeitsbereichs Sketcher. Basierend auf der aktuellen Auswahl stellt es passende maßliche Randbedingungen zur Verfügung aber auch geometrische Randbedingungen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) [Horizontalen Abstand festlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de") (XAbstandFestlegen): Legt den horizontalen Abstand zwischen zwei Punkten oder Endpunkten einer Linie fest. Ist ein einzelner Punkt vorausgewählt, bezieht sich der Abstand auf den Ursprung der Skizze.

- ![](/src/assets/images/Sketcher_ConstrainDistanceY.svg) [Vertikalen Abstand festlegen](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de") (YAbstandFestlegen): Legt den vertikalen Abstand zwischen zwei Punkten oder den Endpunkten einer Linie fest. Ist ein einzelner Punkt vorausgewählt, bezieht sich der Abstand auf den Ursprung der Skizze.

- ![](/src/assets/images/Sketcher_ConstrainDistance.svg) [Abstand festlegen](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de"): Legt die Länge einer Linie, den Abstand zwischen zwei Punkten, den senkrechten Abstand eines Punktes zu einer Linie fest; oder [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de") den Abstand zwischen den Kanten zweier Kreise oder Kreisbögen oder zwischen der Kante eines Kreises oder Kreisbogens und einer Linie; oder [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") die Länge eines Kreisbogens.

- ![](/src/assets/images/Sketcher_ConstrainRadiam.svg) [Automatisch Radius oder Durchmesser festlegen](/Sketcher_ConstrainRadiam/de "Sketcher ConstrainRadiam/de"): Legt den Radius für Bögen und B-Spline-Gewichtskreise und den Durchmesser für Kreise fest.

- ![](/src/assets/images/Sketcher_ConstrainRadius.svg) [Radius](/Sketcher_ConstrainRadius/de "Sketcher ConstrainRadius/de"): Legt den Radius für Kreise, Kreisbögen oder B-Spline-Gewichtskreise fest.

- ![](/src/assets/images/Sketcher_ConstrainDiameter.svg) [Durchmesser festlegen](/Sketcher_ConstrainDiameter/de "Sketcher ConstrainDiameter/de"): Legt den Durchmesser für Kreise und Kreisbögen fest.

- ![](/src/assets/images/Sketcher_ConstrainAngle.svg) [Winkel festlegen](/Sketcher_ConstrainAngle/de "Sketcher ConstrainAngle/de"): Legt den Winkel zwischen zwei Kanten, den Winkel zur horizontalen Achse der Skizze oder den überstrichenen Winkel eines Kreisbogens fest.

- ![](/src/assets/images/Sketcher_ConstrainLock.svg) [Sperren](/Sketcher_ConstrainLock/de "Sketcher ConstrainLock/de"): Ordnet Punkten die Randbedingungen [Horizontalen Abstand festlegen](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de") und [Vertikalen Abstand festlegen](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de") zu. Ist ein einzelner punkt ausgewählt, beziehen sich die Randbedingungen auf den Ursprung der Skizze. Sind zwei oder mehr Punkte ausgewählt, beziehen sich die Randbedingungen auf den letzten Punkt in der Auswahl.

- ![](/src/assets/images/Sketcher_ConstrainCoincidentUnified.svg) [KoinzidentFestlegen (kombiniert)](/Sketcher_ConstrainCoincidentUnified/de "Sketcher ConstrainCoincidentUnified/de"): Legt zwei Punkte koinzident (deckungsgleich) fest, legt Punkte auf Kanten oder Achsen fest oder legt Kreise oder Kreisbögen konzentrisch fest. Es kombiniert die Werkzeuge [KoinzidentFestlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de") und [PunktAufObjektFestlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de"). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Sketcher_ConstrainCoincident.svg) [Koinzidenz festlegen](/Sketcher_ConstrainCoincident/de "Sketcher ConstrainCoincident/de"): Legt Punkte koinzident (deckungsgleich) fest oder Kreise und Kreisbögen konzentrisch.

- ![](/src/assets/images/Sketcher_ConstrainPointOnObject.svg) [Punkt auf Objekt festlegen](/Sketcher_ConstrainPointOnObject/de "Sketcher ConstrainPointOnObject/de"): Legt Punkte auf Kanten oder Achsen fest.

- ![](/src/assets/images/Sketcher_ConstrainHorVer.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Horizontal/vertikal:

- ![](/src/assets/images/Sketcher_ConstrainHorVer.svg) [Horizontal/vertikal](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer"): Legt Linien oder Punktpaare horizontal oder vertikal fest, je nach dem, was eher der aktuellen Ausrichtung entspricht. Es kombiniert die Werkzeuge [Horizontal festlegen](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de") und [Vertikal festlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de") .[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Sketcher_ConstrainHorizontal.svg) [Horizontal festlegen](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de"): Legt Linien oder Punktpaare horizontal fest.

- ![](/src/assets/images/Sketcher_ConstrainVertical.svg) [Vertikal festlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de"): Legt Linien oder Punktpaare vertikal fest.

- ![](/src/assets/images/Sketcher_ConstrainParallel.svg) [Parallel festlegen](/Sketcher_ConstrainParallel/de "Sketcher ConstrainParallel/de"): Legt Linien parallel zueinander fest.

- ![](/src/assets/images/Sketcher_ConstrainPerpendicular.svg) [Rechtwinklig festlegen](/Sketcher_ConstrainPerpendicular/de "Sketcher ConstrainPerpendicular/de"): Legt zwei Linien rechtwinklig zueinander fest oder zwei Kanten bzw. eine Kante und eine Achse in ihrem Schnittpunkt. Die Randbedingung kann auch zwei Kanten an ihrer Verbindungsstelle rechtwinklig zueinander festlegen.

- ![](/src/assets/images/Sketcher_ConstrainTangent.svg) [Tangential oder kollinear festlegen](/Sketcher_ConstrainTangent/de "Sketcher ConstrainTangent/de"): Legt zwei Kanten oder eine Kante und eine Achse tangetial zueinander fest. Die Randbedingung kann auch zwei Kanten verbinden und an der Verbindungsstelle tangetial zueinander festlegen. Sind zwei Linien ausgewählt, werden sie kollinear festgelegt.

- ![](/src/assets/images/Sketcher_ConstrainEqual.svg) [Gleichheit festlegen](/Sketcher_ConstrainEqual/de "Sketcher ConstrainEqual/de"): Legt fest, dass Kanten die gleiche Länge (Linien) oder die gleiche Krümmung (andere Kanten außer B-Splines) aufweisen.

- ![](/src/assets/images/Sketcher_ConstrainSymmetric.svg) [Symmetrie festlegen](/Sketcher_ConstrainSymmetric/de "Sketcher ConstrainSymmetric/de"): Legt zwei Punkte symmetrisch zu einer Linie oder Achse bzw. zu einem dritten Punkt fest.

- ![](/src/assets/images/Sketcher_ConstrainBlock.svg) [Fixieren](/Sketcher_ConstrainBlock/de "Sketcher ConstrainBlock/de"): Setzt Kanten mit einer einzigen Randbedingung auf ihren Positionen fest. Es ist hauptsächlich für B-Spines gedacht.

- ![](/src/assets/images/Sketcher_ConstrainSnellsLaw.svg) [Lichtbrechung (nach Snellius-Gesetz) festlegen](/Sketcher_ConstrainSnellsLaw/de "Sketcher ConstrainSnellsLaw/de"): Legt zwei Linien so fest, dass sie der Lichtbrechung entsprechen, die beim Passieren einer Grenzfläche auftritt.

- ![](/src/assets/images/Sketcher_ToggleDrivingConstraint.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Randbedingungen umschalten:

- ![](/src/assets/images/Sketcher_ToggleDrivingConstraint.svg) [Randbedingung zwischen festlegend und anzeigend umschalten](/Sketcher_ToggleDrivingConstraint/de "Sketcher ToggleDrivingConstraint/de"): Schaltet den Modus der Werkzeuge zum Erstellen von maßlichen Randbedingungen zwischen festlegend oder anzeigend (Referenzmodus) um oder wechselt den Modus der ausgewählten maßlichen Randbedingungen.

- ![](/src/assets/images/Sketcher_ToggleActiveConstraint.svg) [Einschränkung aktivieren/deaktivieren](/Sketcher_ToggleActiveConstraint/de "Sketcher ToggleActiveConstraint/de") (UmschalterAktiveRandbedingung): Aktiviert bzw. deaktiviert ausgewählte Randbedingungen.

### Sketcher-Werkzeuge

- ![](/src/assets/images/Sketcher_CreateFillet.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Verrundung oder Fase erstellen:

- ![](/src/assets/images/Sketcher_CreateFillet.png) [Verrundung erstellen](/Sketcher_CreateFillet/de "Sketcher CreateFillet/de"): Erstellt einen Bogen zwischen zwei nicht parallelen Kanten. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Werkzeug kann auch eine Fase erstellen

- ![](/src/assets/images/Sketcher_CreateChamfer.svg) [Fase erstellen](/Sketcher_CreateChamfer/de "Sketcher CreateChamfer/de"): Erstellt eine Fase zwischen zwei nicht parallelen Kanten. Dies ist dasselbe Werkzeug wie [Verrundung erstellen](/Sketcher_CreateFillet/de "Sketcher CreateFillet/de") aber mit einem anderen voreingestellten Modus. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Sketcher_Trimming.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Kante bearbeiten:

- ![](/src/assets/images/Sketcher_Trimming.png) [Kante zuschneiden](/Sketcher_Trimming/de "Sketcher Trimming/de"): Stutzt eine Kante an den am nächsten liegenden Schnittpunkten mit anderen Kanten.

- ![](/src/assets/images/Sketcher_Split.svg) [Kante teilen](/Sketcher_Split/de "Sketcher Split/de"): Teilt eine Kante in zwei und überträgt dabei die meisten Randbedingungen.

- ![](/src/assets/images/Sketcher_Extend.svg) [Kante verlängern](/Sketcher_Extend/de "Sketcher Extend/de"): Verlängert oder kürzt eine Linie oder einen Kreisbogen bis zu einer beliebigen Stelle oder bis zu einer Zielkante bzw. einem Zielpunkt.

- ![](/src/assets/images/Sketcher_External.svg) [Externe Geometrie](/Sketcher_External/de "Sketcher External/de"): Projiziert Kanten und/oder Knoten, die zu einem Objekt außerhalb der Skizze gehören, auf die Skizzenebene. 1.0 und davor

- ![](/src/assets/images/Sketcher_Projection.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Externe Geometrie:

- ![](/src/assets/images/Sketcher_Projection.svg) [Externe Geometrie projizieren](/Sketcher_Projection/de "Sketcher Projection/de"): Projiziert die Kanten externer Geometrie. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

- ![](/src/assets/images/Sketcher_Intersection.svg) [Externe Geometrie schneiden](/Sketcher_Intersection/de "Sketcher Intersection/de"): Erstellt die Schnittkanten externer Geometrie mit der Skizzenebene. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

- ![](/src/assets/images/Sketcher_CarbonCopy.svg) [Pause](/Sketcher_CarbonCopy/de "Sketcher CarbonCopy/de"): Paust alle Geometrien und Randbedingungen aus einer anderen Skizze in die aktuelle Skizze durch.

- ![](/src/assets/images/Sketcher_SelectOrigin.svg) [Ursprung auswählen](/Sketcher_SelectOrigin/de "Sketcher SelectOrigin/de"): Wählt den Ursprung der Skizze aus.

- ![](/src/assets/images/Sketcher_SelectHorizontalAxis.svg) [Horizontale Achse auswählen](/Sketcher_SelectHorizontalAxis/de "Sketcher SelectHorizontalAxis/de"): Wählt die horizontale Achse der Skizze aus.

- ![](/src/assets/images/Sketcher_SelectVerticalAxis.svg) [Vertikale Achse auswählen](/Sketcher_SelectVerticalAxis/de "Sketcher SelectVerticalAxis/de"): Wählt die vertikale Achse der Skizze aus.

- ![](/src/assets/images/Sketcher_Translate.svg) [Array transform](/Sketcher_Translate "Sketcher Translate"): Versetzt ausgewählte Elemente oder kopiert sie wahlweise. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Sketcher_Rotate.svg) [Polar transform](/Sketcher_Rotate/de "Sketcher Rotate/de"): Dreht ausgewählte Elemente oder kopiert sie wahlweise. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Sketcher_Scale.svg) [Skalierungs-Transformation](/Sketcher_Scale/de "Sketcher Scale/de"): Skaliert ausgewählte Elemente oder kopiert sie wahlweise. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Sketcher_Offset.svg) [Versatzkontur](/Sketcher_Offset/de "Sketcher Offset/de"): Erstellt Kanten mit konstantem Abstand um die Ausgewählten Geometrien herum. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Sketcher_Symmetry.svg) [Symmetrie](/Sketcher_Symmetry/de "Sketcher Symmetry/de"): Erstellt gespiegelte Kopien ausgewählter Elemente.

- ![](/src/assets/images/Sketcher_RemoveAxesAlignment.svg) [Achsenausrichtung entfernen](/Sketcher_RemoveAxesAlignment/de "Sketcher RemoveAxesAlignment/de"): Entfernt achsparallele Ausrichtungen ausgewählter Kanten, indem die Randbedingungen [Horizontal festlegen](/Sketcher_ConstrainHorizontal/de "Sketcher ConstrainHorizontal/de") und [Vertikal festlegen](/Sketcher_ConstrainVertical/de "Sketcher ConstrainVertical/de") durch die Randbedingungen [Parallel festlegen](/Sketcher_ConstrainParallel/de "Sketcher ConstrainParallel/de") und [Rechtwinklig festlegen](/Sketcher_ConstrainPerpendicular/de "Sketcher ConstrainPerpendicular/de") ersetzt werden.

- ![](/src/assets/images/Sketcher_DeleteAllGeometry.svg) [Gesamte Geometrie löschen](/Sketcher_DeleteAllGeometry/de "Sketcher DeleteAllGeometry/de") (AlleGeometrienLöschen): Löscht sämtliche Geometrien und Randbedingungen aus der Skizze.

- ![](/src/assets/images/Sketcher_DeleteAllConstraints.svg) [Alle Einschränkungen löschen](/Sketcher_DeleteAllConstraints/de "Sketcher DeleteAllConstraints/de") (AlleRandbedingungenLöschen): Löscht alle Randbedingungen aus der Skizze.

- ![](/src/assets/images/Edit-copy.svg) Kopieren im Sketcher: Siehe [Kopieren, Ausschneiden und Einfügen](#Kopieren,_Ausschneiden_und_Einfügen).

- ![](/src/assets/images/Edit-cut.svg) Ausschneiden im Sketcher: Siehe [Kopieren, Ausschneiden und Einfügen](#Kopieren,_Ausschneiden_und_Einfügen).

- ![](/src/assets/images/Edit-paste.svg) Einfügen im Sketcher: Siehe [Kopieren, Ausschneiden und Einfügen](#Kopieren,_Ausschneiden_und_Einfügen).

### Sketcher-B-Spline-Werkzeuge

- ![](/src/assets/images/Sketcher_BSplineConvertToNURBS.svg) [Geometrie in B-Spline wandeln](/Sketcher_BSplineConvertToNURBS/de "Sketcher BSplineConvertToNURBS/de"): Wandelt Kanten in B-Splines um.

- ![](/src/assets/images/Sketcher_BSplineIncreaseDegree.svg) [Grad des B-Splines erhöhen](/Sketcher_BSplineIncreaseDegree/de "Sketcher BSplineIncreaseDegree/de"): Erhöht den Grad (die Ordnung) von B-Splines.

- ![](/src/assets/images/Sketcher_BSplineDecreaseDegree.svg) [Grad des B-Splines verringern](/Sketcher_BSplineDecreaseDegree/de "Sketcher BSplineDecreaseDegree/de"): Verringert den Grad (die Ordnung) von B-Splines.

- ![](/src/assets/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Vielfachheit eines Spline-Knotens erhöhen](/Sketcher_BSplineIncreaseKnotMultiplicity/de "Sketcher BSplineIncreaseKnotMultiplicity/de"): Erhöht die Vielfachheit eines B-Spline-Knotens.

- ![](/src/assets/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Vielfachheit eines Spline-Knotens verringern](/Sketcher_BSplineDecreaseKnotMultiplicity/de "Sketcher BSplineDecreaseKnotMultiplicity/de"): Verringert die Vielfachheit eines B-Spline-Knotens.

- ![](/src/assets/images/Sketcher_BSplineInsertKnot.svg) [Knoten einfügen](/Sketcher_BSplineInsertKnot/de "Sketcher BSplineInsertKnot/de"): Fügt einen Knoten in einen B-Spline ein oder erhöht die Vielfachheit eines vorhandenen Knotens.

- ![](/src/assets/images/Sketcher_JoinCurves.svg) [Kurven verbinden](/Sketcher_JoinCurves "Sketcher JoinCurves"): Erstellt einen B-Spline, indem zwei vorhandene B-Splines oder andere Kanten verbunden werden. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

### Sketcher visuell

- ![](/src/assets/images/Sketcher_SelectElementsWithDoFs.svg) [Unterbestimmte Elemente auswählen](/Sketcher_SelectElementsWithDoFs/de "Sketcher SelectElementsWithDoFs/de"): Wählt die nicht vollständig bestimmten Elemente einer Skizze aus.

- ![](/src/assets/images/Sketcher_SelectConstraints.svg) [Zugehörige Randbedingungen auswählen](/Sketcher_SelectConstraints/de "Sketcher SelectConstraints/de"): Wählt die Randbedingungen aus, die (den) Skizzenelementen zugeordnet sind.

- ![](/src/assets/images/Sketcher_SelectElementsAssociatedWithConstraints.svg) [Zugehörige Geometrie auswählen](/Sketcher_SelectElementsAssociatedWithConstraints/de "Sketcher SelectElementsAssociatedWithConstraints/de") (ZugehörigeElementeAuswählen): Wählt die Skizzenelemente aus, denen Randbedingungen zugeordnet sind.

- ![](/src/assets/images/Sketcher_SelectRedundantConstraints.svg) [Überflüssige Randbedingungen auswählen](/Sketcher_SelectRedundantConstraints/de "Sketcher SelectRedundantConstraints/de"): Wählt die redundanten Randbedingungen in der Skizze aus.

- ![](/src/assets/images/Sketcher_SelectConflictingConstraints.svg) [Widersprüchliche Randbedingungen auswählen](/Sketcher_SelectConflictingConstraints/de "Sketcher SelectConflictingConstraints/de"): Wählt die widersprüchlichen Randbedingungen in der Skizze aus.

- ![](/src/assets/images/Sketcher_ArcOverlay.svg) [Kreishelfer für Bögen ein-/ausblenden](/Sketcher_ArcOverlay/de "Sketcher ArcOverlay/de"): Blendet Kreishelfer (zugrundeliegende virtuelle Kreiskurven) für Kreisbögen in allen Skizzen ein bzw. aus. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

- ![](/src/assets/images/Sketcher_BSplinePolygon.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) B-Spline-Informationsebene ein-/ausblenden:

- ![](/src/assets/images/Sketcher_BSplineDegree.svg) [B-Spline-Grad ein- / ausblenden](/Sketcher_BSplineDegree/de "Sketcher BSplineDegree/de"): Blendet den Grad der B-Splines in allen Skizzen ein bzw. aus.

- ![](/src/assets/images/Sketcher_BSplinePolygon.svg) [B-Spline-Kontrollpolygon ein- / ausblenden](/Sketcher_BSplinePolygon/de "Sketcher BSplinePolygon/de"): Blendet das Kontrollpolygon der B-Splines in allen Skizzen ein bzw. aus.

- ![](/src/assets/images/Sketcher_BSplineComb.svg) [B-Spline-Krümmungskamm ein- / ausblenden](/Sketcher_BSplineComb/de "Sketcher BSplineComb/de"): Blendet den Krümmungskamm der B-Splines in allen Skizzen ein bzw. aus.

- ![](/src/assets/images/Sketcher_BSplineKnotMultiplicity.svg) [Vielfachheit der B-Spline-Knoten ein- / ausblenden](/Sketcher_BSplineKnotMultiplicity/de "Sketcher BSplineKnotMultiplicity/de"): Blendet die Knotenvielfachheit der B-Splines in allen Skizzen ein bzw. aus.

- ![](/src/assets/images/Sketcher_BSplinePoleWeight.svg) [Gewicht der B-Spline-Kontrollpunkte anzeigen / ausblenden](/Sketcher_BSplinePoleWeight/de "Sketcher BSplinePoleWeight/de"): Blendet die Gewichte der Kontrollpunkte der B-Splines in allen Skizzen ein bzw. aus.

- ![](/src/assets/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Interne Geometrie anzeigen / ausblenden](/Sketcher_RestoreInternalAlignmentGeometry/de "Sketcher RestoreInternalAlignmentGeometry/de"): Löscht die interne Geometrie von Elementen oder stellt fehlende interne Geometrie wieder her.

- ![](/src/assets/images/Sketcher_SwitchVirtualSpace.svg) [Virtuellen Bereich wechseln](/Sketcher_SwitchVirtualSpace/de "Sketcher SwitchVirtualSpace/de"): Blendet Randbedingungen ein bzw. aus oder wechselt den sichtbaren virtuellen Bereich.

### Veraltete Werkzeuge

- ![](/src/assets/images/Sketcher_Clone.svg) [Klonen](/Sketcher_Clone/de "Sketcher Clone/de"): Klont ein Skizzenelement. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Sketcher_CloseShape.svg) [Kontur schließen](/Sketcher_CloseShape/de "Sketcher CloseShape/de"): Erstellt eine geschlossene Form, durch Anwendung der Randbedingung KoinzidentFestlegen auf Endpunkte. Dieses Werkzeug ist veraltet. Steht in 0.21 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Sketcher_CreatePointFillet.svg) [Eckenerhaltende Verrundung erstellen](/Sketcher_CreatePointFillet/de "Sketcher CreatePointFillet/de"): Erstellt einen Bogen zwischen zwei nicht parallelen Linien, wobei ihr Eckpunkt erhalten bleibt. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Sketcher_ConnectLines.svg) [Linien verbinden](/Sketcher_ConnectLines/de "Sketcher ConnectLines/de"): Verbindet Skizzenelemente, durch Anwendung der Randbedingung KoinzidentFestlegen auf Endpunkte. Dieses Werkzeug ist veraltet. Steht in 0.21 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Sketcher_Copy.svg) [Kopieren](/Sketcher_Copy/de "Sketcher Copy/de"): Kopiert ein Skizzenelement. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Sketcher_Move.svg) [Verschieben](/Sketcher_Move/de "Sketcher Move/de"): Verschiebt die ausgewählte Geometrie mit Bezug auf den zuletzt ausgewählten Punkt. Steht in 1.0 und neuer nicht mehr zur Verfügung.

- ![](/src/assets/images/Sketcher_RectangularArray.svg) [Rechteckige Anordnung](/Sketcher_RectangularArray/de "Sketcher RectangularArray/de"): Erstellt eine Anordnung ausgewählter Skizzenelemente. Steht in 1.0 und neuer nicht mehr zur Verfügung.

## Einstellungen

- ![](/src/assets/images/Workbench_Sketcher.svg) [Einstellungen](/Sketcher_Preferences/de "Sketcher Preferences/de"): Einstellungen für den Arbeitsbereich **Sketcher**.

## Bewährtes Vorgehen

Jeder CAD-Benutzer entwickelt im Laufe der Zeit seine eigene Arbeitsweise, aber es gibt einige nützliche allgemeine Grundsätze, denen man folgen kann.

- Eine Reihe einfacher Skizzen ist einfacher handzuhaben als eine komplexe einzelne Skizze. Beispielsweise kann eine erste Skizze für die grundlegenden 3D-Funktionen (entweder ein Block oder ein Drehteil) erstellt werden, während eine zweite Skizze Löcher oder Ausschnitte (Taschen) enthalten kann. Einige Details können weggelassen werden, um später als 3D-Formelemente realisiert zu werden. Es können Verrundungen in einer Skizze vermieden werden, wenn zu viele vorhanden sind, und diese als 3D-Formelemente hinzugefügt werden.
- Es sollte immer ein geschlossenes Profil erstellt werden, da die Skizze sonst keinen Volumenkörper, sondern eine Reihe offener Seitenflächen erzeugt. Sollen einige der Objekte nicht in die Erstellung eines Volumenkörper einbezogen werden, können sie mit dem Werkzeug Hilfsgeometrie umschalten in Konstruktionselemente umgewandelt werden.
- Die Funktion Automatische Randbedingungen kann aktiviert werde, um die Anzahl der Randbedingungen zu begrenzen, die manuell hinzugefügt werden müssen.
- Nach einer allgemeinen Regel sollten zuerst geometrische, danach maßliche Randbedingungen verwendet werden und Sperren als letztes. Aber nicht vergessen: Regeln sind dazu da, gebrochen zu werden. Wenn Probleme beim Bearbeiten einer Skizze auftreten, kann es hilfreich sein, zuerst einige Objekte festzulegen, bevor ein Profil vervollständigt wird.
- Eine Skizze sollte möglichst mit der Randbedingung Sperren auf den Ursprung (0,0) ausgerichtet werden. Wenn die Skizze nicht symmetrisch ist, setzt man einen ihrer Punkte auf den Ursprung oder wählt einfache runde Zahlen für die festzulegenden abstände.
- Hat man die Möglichkeit, zwischen den Randbedingungen Abstand festlegen und Horizontalen Abstand festlegen bzw. Vertikalen Abstand festlegen zu wählen, sollte eine der letzteren bevorzugt werden. Horizontalen Abstand festlegen und Vertikalen Abstand festlegen sind vom Berechnungsaufwand her günstiger.
- Im Allgemeinen eignen sich die folgenden Randbedingungen am besten: Horizontal und Vertikal Festlegen, Horizontalen und Vertikalen Abstand festlegen, (Punkt-zu-Punkt) Tangential festlegen. Wenn möglich sollten die folgenden nur begrenz eingesetzt werden: Abstand festlegen, (Kante-zu-Kante) Tangential festlegen von, Punkt auf Objekt festlegen; Symmetrie festlegen.
- Wenn Zweifel an der Gültigkeit einer Skizze bestehen, nachdem diese vervollständigt wurde (Elemente werden grün), schließt man das Sketcher-Dialogfeld und verwendet ![](/src/assets/images/Sketcher_ValidateSketch.svg) [Skizze Überprüfen](/Sketcher_ValidateSketch/de "Sketcher ValidateSketch/de").

## Anleitungen

- [Sketcher-Lehrgang](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) von chrisb. Dies ist ein über 80 Seiten langes PDF-Dokument, das als ausführliches Handbuch für den Sketcher dient. Die Grundlagen zur Verwendung des Sketchers werden erläutert und es beschreibt detailreich die Erstellung geometrischer Formen sowie die einzelnen Randbedingungen.
- [Grundlegendes Sketcher Tutorium](/Basic_Sketcher_Tutorial/de "Basic Sketcher Tutorial/de") für Anfänger
- [Sketcher Mikrotutorium - Beschränkungspraktiken](/Sketcher_Micro_Tutorial_-_Constraint_Practices/de "Sketcher Micro Tutorial - Constraint Practices/de")
- [Sketcher Anforderungen an Skizzen](/Sketcher_requirement_for_a_sketch/de "Sketcher requirement for a sketch/de") Mindestanforderung für eine Skizze und vollständige Festlegung einer Skizze

## Skripten

Die Seite [Sketcher Skripten](/Sketcher_scripting/de "Sketcher scripting/de") enthält Beispiele für die Erstellung von Randbedingungen aus Python-Skripten.

## Beispiele

Ein paar Ideen, was mit den Sketcher-Werkzeugen erstellt werden kann, findet man unter: [Sketcher Beispiele](/Sketcher_Examples/de "Sketcher Examples/de").

![](/src/assets/images/Sketcher_ExampleHinge-01.gif)
![](/src/assets/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/de&oldid=1549592>"
