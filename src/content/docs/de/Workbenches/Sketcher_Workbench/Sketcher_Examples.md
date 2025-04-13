---
title: Sketcher Beispiele
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

## Einleitung

Ich denke der Arbeitsbereich ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") kann einige Beispiele gebrauchen, die nicht so detailliert sind wie Anleitungen oder Videos...

## Filmscharnier

Ein Filmscharnier ist ein winziges Stück biegsamer Kunststoff, das die beiden Seiten eines Spritzgussobjekts, wie z.B. einen Kabelkanal mit einem Deckel oder die beiden Hälften einer Staubschutzkappe für einen Stecker.

Dieses Beispiel verwendet eine Art Master-Skizze, um darauf einige abhängige Skizzen aufzusetzen. Es zeigt auch, wie ein einfacher Klipp angefügt und animiert wird, der auf ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de")-Formelementen und ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")-Randbedingungen basiert. Die Verwendung von ![](/src/assets/images/Bound-expression.svg) [Ausdrücken](/Expressions/de "Expressions/de"), wie unten beschrieben, erfordert FreeCAD ab **Version 0.21**.

### Basis-Skizze

Normalerweise wird ein Objekt in geschlossenem Zustand konstruiert. Später wird der bewegliche Teil um 180° umgeklappt, um in offenem Zustand gespritzt zu werden.  
Der biegsame Streifen wird im geschlossenen Zustand durch einen Kreisbogen dargestellt und im offenen Zustand durch eine gerade Linie; beide gehen vom gleichen Startpunkt aus.  
Der Mittelpunkt der Linie, die beide Endpunkte verbindet, gibt die Lage der Achse an, um die geklappt wird, die normal auf der Skizzenebene steht. (Der Punkt wird im Skizzenursprung positioniert, so dass die globale Achse, die normal auf der Skizzen steht, als Achse zum Umklappen genutzt werden kann)

(Einige ausgeblendete zusätzliche Erklärungen und eine Beschreibung des Arbeitsablaufs können da drüben ausgeklappt werden -->

![](/src/assets/images/Sketcher_ExampleHinge-01.gif)

Master-Skizze und das animierte fertige Filmscharnier (Ein Klick auf das Bild, um die Animation anzusehen, falls sie nach einigen Wiederholungen gestoppt haben sollte)

Für einen Halbkreis ergibt sich die Bogenlänge aus dem Radius multipliziert mit Pi (**l = r \* Pi**). Der Radius wird mit NeutralerRadius benannt und die Linie mit GestreckteLänge. Ein Ausdruck (expression) für die GestreckteLänge verbindet beide Werte: `.Constraints.NeutralerRadius * pi`

: Innerhalb derselben Skizze startet ein Ausdruck mit einem `.` gefolgt von ArtDesWertes.NameDesWertes (ValueType.ValueName), um einen weiteren Wert zu adressieren.

### Zwischenskizze

Der Bogen dieses Filmscharniers hat eine konstante Länge und einen variablen Radius. Eine Eingangsgröße ist NeutralerRadius der Basis-Skizze; um ihn in der Skizze zur Hand zu haben, wird er als ![](/src/assets/images/Sketcher_External.svg) [externe Geometrie](/Sketcher_External/de "Sketcher External/de") eingebunden und erhält das mit ReferenzRadius benannte anzeigende Maß (reference dimension).

Ein Tortenstück aus Hilfsgeometrie zeigt die Verbindung zwischen dem Bogen und dem Radius für einen gegebenen Winkel.  
**EingangsLänge = ReferenzRadius \* Pi**  
und  
**BogenLänge = DynamischerRadius \* Pi \* BogenWinkel / 180°**  
mit konstanter Länge ergibt sich:  
**ReferenzRadius \* Pi = DynamischerRadius \* Pi \* BogenWinkel / 180°**  
Und mit herausgekürztem Pi erhalten wir:  
**ReferenzRadius = DynamischerRadius \* BogenWinkel / 180°** oder **DynamischerRadius = ReferenzRadius \* 180° / BogenWinkel**

: Der ![](/src/assets/images/Bound-expression.svg) [Ausdruck](/Expressions/de "Expressions/de") für den Wert von DynamischerRadius: `.Constraints.ReferenzRadius * 180 ° / .Constraints.BogenWinkel`

Ein Filmscharnier ist meistens symmetrisch, daher wird ein weiterer Bogen mit demselben Mittelpunkt, genannt HalbBogen, als Ergebniselement verwendet und stellt eine Hälfte des Scharnierbogens dar.

: Der ![](/src/assets/images/Bound-expression.svg) [Ausdruck](/Expressions/de "Expressions/de") für den Wert von HalbBogen: `.Constraints.BogenWinkel / 2`

![](/src/assets/images/Sketcher_ExampleHinge-02.png)

Die Zwischenskizze zeigt die Strecke DynamischerRadius des Filmscharniers mit 4 (mm) bei einem gegebenen Winkel von 45° (und den halben Winkel als Ausgabeelement)

### Filmscharnierskizze

Diese Skizze legt die Wandstärke und die angrenzende Geometrie des Filmschrniers fest. Dazu laden wir den halben Bogen der Zwischenskizze als externe Geometrie hinzu, um ihn als Basis für den Filmanteil zu verwenden. (ein Bruchteil von 180° in diesem Falle)

Dieses Filmscharnier ist so ausgelegt, dass sich die damit verbundenen Teile berühren, wenn das Objekt geschlossen ist. Dies kann erreicht werden durch das Berechnen eines Kreisbogens mit der erforderlichen Länge, dann das Erstellen eines Streifens mit konstanter Wandstärke und schließlich durch das Verrunden der Übergänge zwischen dem Streifen und den beiden Objekthälften. Der letzte Schritt verkürzt zwar die entstehende Schlaufe, aber in der Realität spielt dies keine Rolle, da der Bogen nie ganz kreisförmig sein wird, so hat die Verrundung zwar einen Einfluss auf den Krümmungsverlauf der Schlaufe, aber keinen Einfluss auf ihre Funktion.

![](/src/assets/images/Sketcher_ExampleHinge-03.png)

Die Scharnierskizze zeigt den Umriss des Scharniers basierend auf der externen Geometrie des halben Bogens aus der Zwischenskizze

![](/src/assets/images/Sketcher_ExampleHinge-04.png)
![](/src/assets/images/Sketcher_ExampleHinge-05.png)

Links: Das ![](/src/assets/images/PartDesign_Pad.svg) [extrudierte](/PartDesign_Pad/de "PartDesign Pad/de") halbe Scharnier mit sichtbarer Skizze. Rechts: Das halbe Scharnier mit hinzugefügter ![](/src/assets/images/PartDesign_Fillet.svg) [Verrundung](/PartDesign_Fillet/de "PartDesign Fillet/de")

![](/src/assets/images/Sketcher_ExampleHinge-06.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/Sketcher_ExampleHinge-07.png)

Das halbe Scharnier mit ausgewählter Spiegelebene → ![](/src/assets/images/PartDesign_Mirrored.svg) [gespiegeltes](/PartDesign_Mirrored/de "PartDesign Mirrored/de") Filmscharnier

Hinweis: ![](/src/assets/images/Part_Mirror.svg) [Part Spiegeln](/Part_Mirror/de "Part Mirror/de") akzeptiert nur die drei Basis-Ebenen und kann dadurch in so einem Falle nicht verwendet werden.

: (Rückblickend war es eine weise Entscheidung dieses Beispiel mit der Kombination von PartDesign und Sketcher zu beginnen.)

Letztendlich legen zwei Parameter die Größe des Filmscharniers fest:

- NeutralerRadius in der Basis-Skizze
- Der Wert der Wandstärke in der Filmscharnierskizze

### Biegen des Filmscharniers

Der Biegewinkel wird durch die Randbedingung BogenWinkel der Zwischenskizze gesteuert und kann in ihrem Einstellungseditor geändert werden.  
Aber wir sind ja richtige Konstrukteure und haben unsere Skizzen, Randbedingungen und Maße sinnvoll benannt und können daher den steuernden Winkel über Python ansprechen.  
Einige grundlegende Codezeilen zum Einbetten in einer Benutzerschnittstelle könnten so aussehen:

```
doc=App.ActiveDocument
sketch=doc.getObjectsByLabel('IntermediateSketch')[0]
 ...
sketch.getDatum('ArcAngle')
 ...
sketch.setDatum('ArcAngle',App.Units.Quantity('50.000000 deg'))
doc.recompute(None,True,True)

```

Eine kurze Erklärung:

- `doc = App.ActiveDocument`: Zum Ansprechen des aktiven Dokuments mit einem Alias namens **doc**
- `sketch = doc.getObjectsByLabel('IntermediateSketch')[0]`: Zum Ansprechen der relevanten Skizze mit dem Alias **sketch**.

  : Die Methode **getObjectsByLabel()** gibt eine Liste von Objekten zurück und wir müssen den Index `0` anhängen, um das erste Element der Liste auszuwählen. (Wir erwarten nicht, dass ein anderes Objekt dieselbe Benennung aufweist und müssen uns daher nicht um andere Elemente in der Liste kümmern.)

- `sketch.getDatum('ArcAngle')`: Gibt den aktuellen Wert der maßlichen Randbedingung **ArcAngle** (BogenWinkel) zurück (an das Ausgabefenster)
- `sketch.setDatum('ArcAngle', App.Units.Quantity('50.0 deg'))`: Setzt den Wert von **ArcAngle** auf `50°`
- `doc.recompute(None,True,True)`: Zum aktualisieren des ganzen Dokuments, um auch die Änderungen an den abhängigen Geometrien darzustellen.

### Geometrien verbinden

Zwei Hälften eines Klipp-Objekts warten darauf mit dem Filmscharnier verbunden zu werden, eine an der statischen Seite und eine auf der beweglichen Seite.

![](/src/assets/images/Sketcher_ExampleHinge-08.png)

Zwei Hälften eines einfachen Klipps

Die statische Seite ist einfach:

1. Den Körper (Body) aktivieren und die Eigenschaften position und orientation properties im Eigenschafteneditor anpassen, bis er zum Filmscharnier passt.
2. Den Scharnierkörper aktivieren.
3. Das Werkuzeug ![](/src/assets/images/PartDesign_Boolean.svg) [PartDesign Boolesche Operation](/PartDesign_Boolean/de "PartDesign Boolean/de") mit der (Standard-) Option Vereineigung auswählen.
4. Im Dialog die Schaltfläche Körper hinzufügen drücken.
5. Den **Körper** der statischen Hälfte des Klipps auswählen.
6. Zum Beenden und Schließen des Dialogs OK drücken.

![](/src/assets/images/Sketcher_ExampleHinge-09.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/Sketcher_ExampleHinge-10.png)

Filmscharnier und statische Hälfte in Konstruktionslage → Filmscharnier mit versetzter und ![](/src/assets/images/PartDesign_Boolean.svg) [vereinigter](/PartDesign_Boolean/de "PartDesign Boolean/de") statischer Hälfte

Aber die bewegliche Seite ist anders: die zugehörige Hälfte der Klippgeometrie muss in die richtige Lage bewegt werden, bevor die (Neu-) Berechnung einer Vereinigungsoperation gestartet wird.

An diesem Punkt vermisse ich eine Funktion "Befestigen mit Abstand" (Attachment with offset), wie die von Assembly3, zum Verknüpfen der Klippgeometrie mit einer der beweglichen Flächen. Aber nach etwas Herumprobieren und Feineinstellen habe ich herausgefunden:

- Die Behälter ![](/src/assets/images/Std_Part.svg) [Std Teil](/Std_Part/de "Std Part/de") (Part) und ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") (Body) werden nicht von ![](/src/assets/images/Part_EditAttachment.svg) [Part Befestigen](/Part_EditAttachment/de#Einschränkungen "Part EditAttachment/de") unterstützt.

: Es ist zwar möglich, Befestigen zu verwenden, um die Behälter auszurichten, aber die Befestigung wird nicht parametrisch verknüpft.

- Befestigen kann auf ein PartDesign-Formelement angewendet werden. Dieses und davon abhängige Formelemente werden mit Bezug zur Basisgeometrie verschoben. Aber!:
  - Unabhängige PartDesign-Formelemente werden sich nicht bewegen und daher kann sich die Ergebnisform ändern und schließlich zerbrechen.
  - Es wird geraten, Formelemente unabhängig zu halten, um Auswirkungen, die auf dem [Problem der Topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de") basieren, zu vermeiden.
- ![](/src/assets/images/PartDesign_Clone.svg) [PartDesign Klon](/PartDesign_Clone/de "PartDesign Clone/de") erstellt einen Körper mit einem einzigen Formelement, der mit Befestigen verwendet werden kann.

Mit diesem Wissen im Hinterkopf könnte ein Arbeitsablauf so aussehen:

1. Den Körper (Body) der beweglichen Hälfte auswählen.
2. Den Befehl ![](/src/assets/images/PartDesign_Clone.svg) [Klon erstellen](/PartDesign_Clone/de "PartDesign Clone/de") aufrufen.
3. In der Baumansicht im neuen Körper (Body-Objekt) das Clone-Objekt auswählen.
4. Das Werkzeug ![](/src/assets/images/Part_EditAttachment.svg) [Part Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") aufrufen, um dem Clone-Objekt die Eigenschaften von Befestigung hinzuzufügen.
5. Der Dialog Anhang wird geöffnet.
   - Einen Knoten für den Ursprung auswählen.
   - Eine Kante für die erste Richtung auswählen.
   - Eine Kante für die zweite Richtung auswählen.
   - Die Befestigungsmöglichkeiten durchprobieren, um die am besten passende herauszufinden.
   - Die Drehungs- und Koordinatenwerte anpassen, bis sich die Geometrie wieder in Konstruktionslage befindet.
6. OK drücken, um den Dialog zu schließen.
7. MIt noch immer aktiviertem Scharnierkörper das Werkzeug ![](/src/assets/images/PartDesign_Boolean.svg) [PartDesign Boolesche Operation](/PartDesign_Boolean/de "PartDesign Boolean/de") auswählen.
8. Im Dialog die Schaltfläche Körper hinzufügen drücken.
9. Den Körper der beweglichen Hälfte auswählen.
10. OK drücken, um die Aktion zu beenden und den Dialog zu Schließen.

![](/src/assets/images/Sketcher_ExampleHinge-14.png)

Die bewegliche Hälfte wird an einer Ecke der beweglichen Scharnierseite ![](/src/assets/images/Part_EditAttachment.svg) [befestigt](/Part_EditAttachment/de "Part EditAttachment/de") (Befestigungsmodus Ausrichten OXZ: Knoten, Kante, Kante)

Rückblickend betrachtet, wäre es weiser gewesen, die Geometrie zum Befestigen in der Zwischenskizze vorzugeben, um eine weitere Quelle des [Problems der topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de") zu vermeiden.

![](/src/assets/images/Sketcher_ExampleHinge-11.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/Sketcher_ExampleHinge-12.png)

Der Klipp bis hier hin und die bewegliche Hälfte in Konstruktionslage → der fertige Klipp mit der ![](/src/assets/images/Part_EditAttachment.svg) [befestigten](/Part_EditAttachment/de "Part EditAttachment/de") und ![](/src/assets/images/PartDesign_Boolean.svg) [vereinigten](/PartDesign_Boolean/de "PartDesign Boolean/de") beweglichen Hälfte

Jetzt sollte das Ergebnis ein Klipp sein, der nur aus einem Einzel-Festkörper besteht und der geschlossen und geöffnet werden kann, indem der BogenWinkel des Filmscharniers geändert wird. Die erlaubten Werte liegen zwischen 0.1° und 180°; der Filmabschnitt darf nicht gerade sein und mehr als geschlossen ist nicht sinnvoll. (Bei 180° kann das Objekt an berührenden oder überlappenden Flächen verschmelzen, aber eine kleine zusätzliche Lücke kann helfen, wenn dies nicht akzeptabel ist.)

![](/src/assets/images/Sketcher_ExampleHinge-13.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/Sketcher_ExampleHinge-15.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/Sketcher_ExampleHinge-16.png)

Klipp fast geschlossen → Klipp halb geschlossen → Klipp in Werkzeuglage

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Examples/de&oldid=1342516>"
