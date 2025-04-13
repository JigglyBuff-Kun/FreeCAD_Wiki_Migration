---
title: Draft Bézierkurve
---
|  |
| --- |
| Draft Bézierkurve |
| Menüeintrag |
| Zeichnen → Bézierwerkzeuge → Bézierkurve 2D-Entwurf → Bézierkurve |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| B Z |
| Eingeführt in Version |
| 0.14 |
| Siehe auch |
| [Draft KubischeBézierkurve](/Draft_CubicBezCurve/de "Draft CubicBezCurve/de"), [Draft BSpline](/Draft_BSpline/de "Draft BSpline/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_BezCurve.svg) **Draft Bézierkurve** erstellt eine [Bézierkurve](https://de.wikipedia.org/wiki/B%C3%A9zierkurve) aus einigen Punkten.

Der Befehl erstellt eine einzelne Bézierkurve mit einer Daten-Eigenschaft**Grad**, die der `Anzahl_der_Punkte - 1` entspricht. Sie kann in eine stückweise Bézierkurve geändert werden, durch veringern dieser Eigenschaft .

Die Befehle Draft Bézierkurve und [Draft KubischeBézierkurve](/Draft_CubicBezCurve/de "Draft CubicBezCurve/de") verwenden *Kontrollpunkte*, um die Position und Krümmung des Splines zu definieren. Der Befehl [Draft BSpline](/Draft_BSpline/de "Draft BSpline/de") andererseits legt die *exakten Punkte* fest, durch die die Kurve verlaufen soll.

![](/images/Draft_BezCurve_Example.png)

Bézierkurve definiert durch mehrere Punkte

## Anwendung

Siehe auch: [Draft Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft Fangen](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_BezCurve.svg) Bézierkurve drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → Bézierwerkzeuge → ![](/images/Draft_BezCurve.svg) Bézierkurve** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **2D-Entwurf → ![](/images/Draft_BezCurve.svg) Bézierkurve** auswählen.
   * Das Tastaturkürzel B dann Z.
2. Der Aufgaben-Bereich **Bézierkurve** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Den ersten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
4. Weitere Punkte in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
5. Esc oder die Schaltfläche Schließen drücken, um den Befehl zu beenden.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Um die Koordinaten manuell einzugeben, werden die X-, Y- und Z-Komponente eingegeben und nach jeder Eingabe Eingabe (Enter) gedrückt. Man kann auch die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken, wenn die gewünschten Werte vorhanden sind. Es ist ratsam, vor der Eingabe der Koordinaten, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen.
* R drücken oder das Kontrollkästchen **Relativ** anklicken, um den Relativ-Modus umzuschalten. Wenn der Relativ-Modus eingeschaltet ist, sind die Koordinaten relativ zum letzten Punkt, falls vorhanden, ansonsten beziehen sie sich auf den Ursprung des Koordinatensystems.
* G drücken oder das Kontrollkästchen **Global** anklicken, um den Global-Modus umzuschalten. Wenn der Global-Modus eingeschaltet ist, beziehen sich die Koordinaten auf das globale Koordinatensystem, ansonsten auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* F drücken oder die Checkbox **Füllen**1.0 und davor bzw. **Fläche erstellen**[eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de") anklicken, um den Modus Fläche erstellen umzuschalten. Bei eingeschaltetem Modus Fläche erstellen wird die Daten-Eigenschaft**Make Face** (Fläche erstellen) des erstellten Kantenzuges (Wire) auf `true` gesetzt und eine Fläche erstellt, vorausgesetzt er ist geschlossen und nicht selbstdurchdringend. Man beachte, dass ein selbstdurchdringender Kantenzug mit einer Fläche nicht vernünftig dargestellt wird. Für solche Kantenzüge muss die Daten-Eigenschaft**Make Face** auf `false` gesetzt werden.
* N drücken oder das Kontrollkästchen **Fortsetzen** anklicken, um den Fortsetzungsmodus umzuschalten. Wenn der Fortsetzungsmodus eingeschaltet ist, wird der Befehl nach Betätigung von ![](/images/Draft_FinishLine.svg) Fertigstellen oder ![](/images/Draft_CloseLine.svg) Schließen, und auch nach dem Erstellen einer geschlossenen Kurve, durch Einrasten aufden ersten Punkt der Kurve, erneut gestartet, und es kann mit dem Erstellen von Kurven fortgefahren werden.
* / oder die Schaltfläche ![](/images/Draft_UndoLine.svg) Rückgängig drücken, um den letzten Punkt rückgängig zu machen.
* A oder die Schaltfläche ![](/images/Draft_FinishLine.svg) Fertigstellen drücken, um den Befehl zu beenden und die Kurve offen zu lassen.
* O oder die Schaltfläche ![](/images/Draft_CloseLine.svg) Schließen drücken, um den Befehl zu beenden und die Kurve zu schließen. Eine geschlossene Kurve kann auch durch Einrasten auf den ersten Punkt der Kurve erstellt werden.
* W oder die Schaltfläche ![](/images/Draft_Wipe.svg) Radieren drücken, um die bereits positionierten Abschnitte zu löschen, aber vom letzten Punkt aus weiterzuarbeiten.
* U oder die Schaltfläche ![](/images/Draft_SelectPlane.svg) [Arbeitsebene festelegen](/Draft_SelectPlane/de "Draft SelectPlane/de") drücken, um die aktuelle Arbeitsebene der durch den letzten und den vorherigen Punkt definierten Ausrichtung anzupassen.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- oder auszuschalten.
* Esc oder die Schaltfläche Schliessen drücken, um den Befehl zu beenden.

## Hinweise

* Eine Draft Bézierkurve kann mit dem Befehl [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") bearbeitet werden.
* OpenCascade, und dadurch FreeCAD, unterstützt keine Bézierkurven mit einem Grad größer als 25. Dies sollte in der Praxis kein Problem sein, weil die meisten Benutzer typischerweise Bézierkurven vom Grad 3 bis 5 verwenden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft Bézierkurven-Objekt (BezCurve object) wird von einem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten-Eigenschaft**Area** (`Area`): (schreibgeschützt) gibt den Flächeninhalt der von der Kurve umschlossenen Fläche an. Der Wert ist `0.0`, wenn Daten-Eigenschaft**Make Face** auf `false` gesetzt ist oder die Fläche nicht erstellt werden kann.
* Daten-Eigenschaft**Closed** (`Bool`): gibt an, ob die Kurve geschlossen ist oder nicht. Wenn die Kurve anfänglich offen ist, ist dieser Wert `false`, wenn er auf `true` gesetzt wird, wird ein Segment gezeichnet, um die Kurve zu schließen. Wenn die Kurve anfänglich geschlossen ist, ist dieser Wert `true`, wenn er auf `false` gesetzt wird, wird das letzte Segment entfernt und die Kurve geöffnet.
* Daten-Eigenschaft**Stetigkeit** (`IntegerList`): (schreibgeschützt) gibt die Stetigkeit der Kurve an.
* Daten-Eigenschaft**Degree** (`Integer`): gibt den Grad der Kurve an.
* Daten-Eigenschaft**Length** (`Length`): (schreibgeschützt) gibt die Gesamtlänge der Kurve an.
* Daten-Eigenschaft**Make Face** (`Bool`): legt fest, ob die Kurve eine Fläche bildet oder nicht. Wenn auf `true` gesetzt, wird eine Fläche erzeugt, ansonsten wird nur der Umriss als Teil des Objekts betrachtet. Diese Eigenschaft funktioniert nur, wenn die Daten-Eigenschaft**Closed** auf `true` gesetzt ist und wenn die Kurve sich nicht selbst schneidet.
* Daten-Eigenschaft**Points** (`VectorList`): gibt die Kontrollpunkte der Kurve in ihrem lokalen Koordinatensystem an.

### Ansicht

Draft

* Ansicht-Eigenschaft**Arrow Size** (`Length`): legt die Größe des Symbols fest, das am Ende der Kurve angezeigt wird.
* Ansicht-Eigenschaft**Arrow Type** (`Enumeration`): gibt die Art des Symbols an, das am Ende der Kurve angezeigt wird; es kann die Werte `Dot`, `Circle`, `Arrow`, `Tick` oder `Tick-2` annehmen.
* Ansicht-Eigenschaft**End Arrow** (`Bool`): gibt an, ob am Ende der Kurve ein Symbol angezeigt werden soll, damit sie als Hinweislinie für Beschritung verwendet werden kann.
* Ansicht-Eigenschaft**Pattern** (`Enumeration`): legt das [Draft Muster](/Draft_Pattern/de "Draft Pattern/de") fest, mit dem die Fläche der geschlossenen Kurve gefüllt werden soll. Diese Eigenschaft funktioniert nur, wenn die Daten-Eigenschaft**Make Face** auf `true` gesetzt und die Ansicht-Eigenschaft**Display Mode** auf `Flat Lines` gesetzt ist.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): legt die Größe des [Draft Musters](/Draft_Pattern/de "Draft Pattern/de") fest.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen einer Draft-Bézierkurve (BezCurve-Objekt) wird die Methode `make_bezcurve` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makeBezCurve`.

```
bezcurve = make_bezcurve(pointslist, closed=False, placement=None, face=None, support=None, degree=None)
bezcurve = make_bezcurve(Part.Wire, closed=False, placement=None, face=None, support=None, degree=None)

```

* Erstellt ein `BezCurve`-Objekt mit der vorgegebenen Liste von Punkten, `pointslist`.
  + Jeder Punkt in der Liste wird durch seinen `FreeCAD.Vector` festgelegt, mit Einheiten in Millimetern.
  + Alternativ kann die Eingabe auch ein `Part.Wire` sein, aus dem Punkte extrahiert werden.
* Ist `closed` auf `True` gesetzt, oder wenn der erste und letzte Punkt identisch sind, ist die Kurve geschlossen.
* Ist `placement` auf `None` gesetzt, wird die Kurve am Ursprung erzeugt.
* Ist `face` auf `True` gesetzt, und die Kurve geschlossen, ergibt die Kurve eine Fläche, d. h. sie erscheint gefüllt.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)
p4 = App.Vector(1500, -2000, 0)

bezcurve1 = Draft.make_bezcurve([p1, p2, p3, p4], closed=True)
bezcurve2 = Draft.make_bezcurve([p4, 1.3*p2, p1, 4.1*p3], closed=True)
bezcurve3 = Draft.make_bezcurve([1.7*p3, 1.5*p4, 2.1*p2, p1], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BezCurve/de&oldid=1556690>"