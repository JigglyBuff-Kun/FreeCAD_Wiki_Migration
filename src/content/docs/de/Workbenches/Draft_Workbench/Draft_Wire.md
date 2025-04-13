---
title: Draft Linienzug
---
|  |
| --- |
| Draft Linienzug |
| Menüeintrag |
| Zeichnen → Linienzug 2D-Entwurf → Linienzug |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| P L |
| Eingeführt in Version |
| 0.7 |
| Siehe auch |
| [Draft Linie](/Draft_Line/de "Draft Line/de"), [Draft BSpline](/Draft_BSpline/de "Draft BSpline/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Wire.svg) **Draft Linienzug** [erstellt](#Erstellen) einen Linienzug (Polylinie), eine Folge von mehreren Liniensegmenten. Der Befehl kann auch verwendet werden, um [Draft-Linien](/Draft_Line/de "Draft Line/de") und Draft-Linienzüge zu [verbinden](#Verbinden).

Die Ecken eines Draft-Linienzuges können verrundet oder mit einer Fase versehen werden, indem seine Daten-Eigenschaft**Fillet Radius** oder Daten-Eigenschaft**Chamfer Size** geändert wird. Außerdem ist es möglich die Kanten eines Linienzuges zu unterteilen, indem seine Daten-Eigenschaft**Subdivisions** geändert wird.

![](/images/Draft_Polyline_example.jpg)

Ein durch mehrere Punkte festgelegter Linienzug (Polylinie)

## Erstellen

### Anwendung

Siehe auch: [Draft Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Wire.svg) Linienzug drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → ![](/images/Draft_Wire.svg) Linienzug** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **2D-Entwurf → ![](/images/Draft_Wire.svg) Linienzug** auswählen.
   * Das Tastaturkürzel P dann L.
2. Der Aufgaben-Bereich **Polylinie** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Den ersten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") festlegen, oder Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
4. Weitere Punkte in der [3D-Ansicht](/3D_view/de "3D view/de") festlegen oder Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
5. Esc drücken oder die Schaltfläche Close, um den Befehl abzuschließen.

### Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Zum manuellen Eingeben von Koordinaten, werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben. Oder man drückt die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben, sobald alle gewünschten Werte eingegeben sind. Es ist ratsam den Mauszeiger außerhalb der [3D-Ansicht](/3D_view/de "3D view/de") zu plazieren, bevor man Koordinaten eingibt.
* R drücken oder die Checkbox **Relative** anklicken, um den Relativ-Modus umzuschalten. Bei eingeschaltetem Relativ-Modus beziehen sich Koordinaten auf den letzten Punkt, falls vorhanden, andernfalls beziehen sie sich auf den Ursprung des Koordinatensystems.
* G drücken oder die Checkbox **Global** anklicken, um den Global-Modus umzuschalten. Bei eingeschaltetem Global-Modus beziehen sich Koordinaten auf des globale Koordinatensystem, andernfalls beziehen sie sich auf das Koordiatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* F drücken oder die Checkbox **Füllen**1.0 und davor bzw. **Fläche erstellen**[eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de") anklicken, um den Modus Fläche erstellen umzuschalten. Bei eingeschaltetem Modus Fläche erstellen wird die Daten-Eigenschaft**Make Face** (Fläche erstellen) des erstellten Kantenzuges (Wire) auf `true` gesetzt und eine Fläche erstellt, vorausgesetzt er ist geschlossen und nicht selbstdurchdringend. Man beachte, dass ein selbstdurchdringender Kantenzug mit einer Fläche nicht vernünftig dargestellt wird. Für solche Kantenzüge muss die Daten-Eigenschaft**Make Face** auf `false` gesetzt werden.
* N drücken oder die Checkbox **Fortsetzen** anklicken, um den Fortsetzen-Modus umzuschalten. Bei eingeschaltetem Fortsetzen-Modus wird der Befehl nach dem Drücken von ![](/images/Draft_FinishLine.svg) Fertigstellen oder ![](/images/Draft_CloseLine.svg) Schließen fortgesetzt oder nach der Erstellung eines geschlossenen Kantenzuges durch Einrasten auf dem ersten Punkt. Dies ermöglicht, mit der Erstellung weiterer Kantenzüge fortzufahren.
* / oder die Schaltfläche ![](/images/Draft_UndoLine.svg) Rückgängig drücken, um den letzten Punkt wieder zu entfernen.
* A oder die Schaltfläche ![](/images/Draft_FinishLine.svg) Fertigstellen drücken, um die Ausführung des Befehls abzuschließen und den Kantenzug offen zu lassen.
* O oder die Schaltfläche ![](/images/Draft_CloseLine.svg) Schließen drücken, um die Ausführung des Befehls abzuschließen und den Kantenzug zu schließen. Ein geschlossener Kantenzug kann auch durch Einrasten auf dem ersten Punkt des Kantenzuges erstellt werden.
* W oder die Schaltfläche ![](/images/Draft_Wipe.svg) Wipe drücken, um schon positionierte Abschnitte zu entfernen, aber trotzdem vom letzten Punkt aus weiterzumachen.
* U oder die Schaltfläche ![](/images/Draft_SelectPlane.svg) [Arbeitsebene auswählen](/Draft_SelectPlane/de "Draft SelectPlane/de") drücken, um die Ausrichtung der Arbeitsebene an die Richtung des letzten Abschnitts anzupassen.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc oder die Schaltfläche Schließen drücken, um den Befehl abzuschließen.

## Verbinden

### Anwendung

1. Die Endpunkte der [Draft Linie](/Draft_Line/de "Draft Line/de") und/oder des Draft-Linienzuges, die verbunden werden sollen, müssen exakt deckungsgleich sein. Falls erforderlich, werden zuerst die Punkte angepasst, um dies sicherzustellen.
2. Zwei oder mehr [Draft Linien](/Draft_Line/de "Draft Line/de") und/oder Draft-Linienzüge auswählen.
3. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Wire.svg) Linienzug drücken.
   * Den Menüeintrag **Zeichnen → ![](/images/Draft_Wire.svg) Linienzug** auswählen.
   * Das Tastaturkürzel P dann L.

## Hinweise

* Ein Draft Kantenzug (Wire) kann mit dem Befehl [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") bearbeitet werden.
* Ein Draft Kantenzug kann mit dem Befehl [Draft KantenzugZuBSpline](/Draft_WireToBSpline/de "Draft WireToBSpline/de") in einen [Draft-B-Spline](/Draft_BSpline/de "Draft BSpline/de") umgewandelt werden.
* [Draft-Linien](/Draft_Line/de "Draft Line/de") und Draft-Kantenzüge können auch mit den Befehlen [Draft Verbinden](/Draft_Join/de "Draft Join/de") oder [Draft Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de") verbunden werden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft-Polylinie-Objekt wird von einem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten-Eigenschaft**Area** (`Area`): (nur Lesezugriff) gibt dem Flächeninhalt der Fläche eines Kantenzuges an. Der Wert ist `0.0`, wenn die Daten-Eigenschaft**Make Face** auf `false` gesetzt ist oder die Fläche nicht erstellt werden kann.
* Daten-Eigenschaft**Base** (`Link`)
* Daten-Eigenschaft**Chamfer Size** (`Length`): gibt die Länge der Fasen an den Ecken des Kantenzuges an.
* Daten-Eigenschaft**Closed** (`Bool`): spezifiziert, ob der Draht geschlossen ist oder nicht. Wenn der Kantenzug zu Beginn offen ist, ist dieser Wert `false`; wird er auf `true` gesetzt, wird ein Liniensegment hinzugefügt, um den Kantenzug zu schließen. Wenn der Kantenzug ursprünglich geschlossen ist, ist dieser Wert `true`; wird er auf `false` gesetzt, wird das letzte Liniensegment entfernen, und der Kantenzug wird geöffnet.
* Daten-Eigenschaft**End** (`VectorDistance`): gibt den Endpunkt des Kantenzuges an.
* Daten-Eigenschaft**Fillet Radius** (`Length`): gibt den Radius der Verrundungen an den Ecken eines Kantenzuges an.
* Daten-Eigenschaft**Length** (`Length`): (nur Lesezugriff) gibt die Länge des gesamten Kantenzuges an.
* Daten-Eigenschaft**Make Face** (`Bool`): gibt an, ob der Draht eine Fläche bildet oder nicht. Wenn sie `true` ist, wird eine Fläche erstellt, andernfalls werden nur die Kanten als Teil des Objekts betrachtet. Diese Eigenschaft funktioniert nur, wenn die Daten-Eigenschaft**Closed** auf `true` gesetzt ist und wenn der Kantenzug sich nicht selbst überschneidet.
* Daten**Points** (`VectorList`): gibt die Punkte des Kantenzuges in seinem lokalen Koordinatensystem an.
* Daten-Eigenschaft**Start** (`VectorDistance`): gibt den Startpunkt des Kantenzuges an.
* Daten-Eigenschaft**Subdivisions** (`Integer`): gibt die Anzahl der Unterteilungen für jede Kante des Kantenzuges an. Ist ihr Wert `1`, wird jede Kante in `2` gleichgroße Abschnitte aufgeteilt. Unterteilungen werden vor Fasen und Verrundungen angewendet.
* Daten-Eigenschaft**Tool** (`Link`)

### Ansicht

Draft

* Ansicht-Eigenschaft**Arrow Size** (`Length`): gibt die Größe des Symbols an, das am Ende des Kantenzuges angezeigt wird.
* Ansicht-Eigenschaft**Arrow Type** (`Enumeration`): gibt die Art des Symbols an, das am Ende des Kantenzuges angezeigt wird; es stehen `Dot` (Punkt), `Circle` (Kreis), `Arrow` (Pfeil), `Tick` (Schrägstrich) oder `Tick-2` (Schrägstrich-2) zur Auswahl.
* Ansicht-Eigenschaft**End Arrow** (`Bool`): gibt an, ob ein Symbol am Ende des Kantenzuges angezeigt werden soll, damit es als Beschriftungszeile verwendet werden kann.
* Ansicht-Eigenschaft**Pattern** (`Enumeration`): gibt das [Draft Schraffurmuster](/Draft_Pattern/de "Draft Pattern/de") an, mit dem die Fläche des geschlossenen Kantenzuges gefüllt werden soll. Diese Eigenschaft funktioniert nur, wenn Daten-Eigenschaft**Make Face** auf `true` gesetzt ist und wenn die Ansicht-Eigenschaft**Display Mode** den Wert `Flat Lines` enthält.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): gibt die Größe des [Draft Schraffurmusters](/Draft_Pattern/de "Draft Pattern/de") an.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen einer Draft-Polylinie wird die Methode `make_wire` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makeWire`.

```
wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)
wire = make_wire(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Erzeugt ein `Wire`-Objekt (Kantenzug) mit der angegebenen Liste von Punkten, `pointslist`.
  + Jeder Punkt in der Liste wird durch seinen `FreeCAD.Vector` definiert, mit Einheiten in Millimetern.
  + Alternativ kann die Eingabe ein `Part.Wire` sein, aus dem die Punkte extrahiert werden.
* Wenn `closed` `True` ist, oder wenn der erste und letzte Punkt identisch sind, wird der Kantenzug geschlossen.
* Wenn ein `placement` (Position) angegeben wird, wird dieses verwendet; andernfalls wird die Form im Ursprung erzeugt.
* Wenn `face` `True` ist und der Kantenzug geschlossen ist, wird der Kantenzug eine Fläche bilden, d.h. er wird gefüllt erscheinen.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

wire1 = Draft.make_wire([p1, p2, p3], closed=True)
wire2 = Draft.make_wire([p1, 2*p3, 1.3*p2], closed=True)
wire3 = Draft.make_wire([1.3*p3, p1, -1.7*p2], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Wire/de&oldid=1556682>"