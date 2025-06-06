---
title: Draft BSpline
---
|  |
| --- |
| Draft BSpline |
| Menüeintrag |
| Zeichnen → B-Spline 2D-Entwurf → B-Spline |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| B S |
| Eingeführt in Version |
| 0.7 |
| Siehe auch |
| [Draft Polylinie](/Draft_Wire/de "Draft Wire/de"), [Draft Bézierkurve](/Draft_BezCurve/de "Draft BezCurve/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_BSpline.svg) **Draft B-Spline** erstellt eine [B-Spline-Kurve](https://de.wikipedia.org/wiki/Spline#B-Splines) aus mehreren Punkten.

Der Befehl Draft B-Spline legt die *exakten Punkte* fest, durch die die Kurve verlaufen soll. Die Befehle [Draft Bézierkurve](/Draft_BezCurve/de "Draft BezCurve/de") und [Draft KubischeBézierkurve](/Draft_CubicBezCurve/de "Draft CubicBezCurve/de") verwenden andererseits *Kontrollpunkte*, um die Position und Krümmung des Splines zu definieren.

![](/images/Draft_bspline_example.jpg)

Spline festgelegt durch mehrere Punkte

## Anwendung

Siehe auch: [Draft Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
2. Die Schaltfläche ![](/images/Draft_BSpline.svg) B-Spline drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → ![](/images/Draft_BSpline.svg) B-Spline** auswählen.
   * [BIM](/BIM_Workbench "BIM Workbench"): Den Menüeintrag **2D-Entwurf → ![](/images/Draft_BSpline.svg) B-Spline** auswählen.
   * Das Tastaturkürzel: B dann S.
3. Der Aufgaben-Bereich **B-Spline** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
4. Den ersten Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
5. Weitere Punkte in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
6. Esc oder die Schaltfläche Schließen drücken. um den Befehl zu beenden.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Um die Koordinaten manuell einzugeben, werden die X-, Y- und Z-Komponente eingegeben und nach jeder Eingabe Eingabe (Enter) gedrückt. Man kann auch die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken, wenn die gewünschten Werte vorhanden sind.Es ist ratsam, vor der Eingabe der Koordinaten, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen.
* R drücken oder das Kontrollkästchen **Relativ** anklicken, um den Relativ-Modus umzuschalten. Wenn der Relativ-Modus eingeschaltet ist, sind die Koordinaten relativ zum letzten Punkt, falls vorhanden, ansonsten beziehen sie sich auf den Ursprung des Koordinatensystems.
* G drücken oder das Kontrollkästchen **Global** anklicken, um den Global-Modus umzuschalten. Wenn der Global-Modus eingeschaltet ist, beziehen sich die Koordinaten auf das globale Koordinatensystem, ansonsten auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* F drücken oder die Checkbox **Füllen**1.0 und davor bzw. **Fläche erstellen**[eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de") anklicken, um den Modus Fläche erstellen umzuschalten. Bei eingeschaltetem Modus Fläche erstellen wird die Daten-Eigenschaft**Make Face** (Fläche erstellen) des erstellten Kantenzuges (Wire) auf `true` gesetzt und eine Fläche erstellt, vorausgesetzt er ist geschlossen und nicht selbstdurchdringend. Man beachte, dass ein selbstdurchdringender Kantenzug mit einer Fläche nicht vernünftig dargestellt wird. Für solche Kantenzüge muss die Daten-Eigenschaft**Make Face** auf `false` gesetzt werden.
* N drücken oder das Kontrollkästchen **Fortsetzen** anklicken, um den Fortsetzungsmodus umzuschalten. Wenn der Fortsetzungsmodus eingeschaltet ist, wird der Befehl nach Betätigung von ![](/images/Draft_FinishLine.svg) Fertigstellen oder ![](/images/Draft_CloseLine.svg) Schließen, und auch nach dem Erstellen eines geschlossenen Splines, durch Einrasten auf den ersten Punkt des Splines, erneut gestartet, und es kann mit dem Erstellen von Splines fortgefahren werden.
* / oder die Schaltfläche ![](/images/Draft_UndoLine.svg) Rückgängig drücken, um den letzten Punkt rückgängig zu machen.
* A oder die Schaltfläche ![](/images/Draft_FinishLine.svg) Fertigstellen drücken, um den Befehl zu beenden und die Kurve offen zu lassen.
* O oder die Schaltfläche ![](/images/Draft_CloseLine.svg) Schließen drücken, um den Befehl zu beenden und den Spline zu schließen. Ein geschlossener Spline kann auch durch Einrasten auf den ersten Punkt des Splines erstellt werden.
* W oder die Schaltfläche ![](/images/Draft_Wipe.svg) Radieren drücken, um die bereits positionierten Kurvenabschnitte zu löschen, aber vom letzten Punkt aus weiterzuarbeiten.
* U oder die Schaltfläche ![](/images/Draft_SelectPlane.svg) [Arbeitsebene festelegen](/Draft_SelectPlane/de "Draft SelectPlane/de") drücken, um die aktuelle Arbeitsebene der durch den letzten und den vorherigen Punkt definierten Ausrichtung anzupassen.
* S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- oder auszuschalten.
* Esc oder die Schaltfläche Schliessen drücken, um den Befehl zu beenden.

## Hinweise

* Ein Draft BSpline kann mit dem Befehl [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") bearbeitet werden.
* Ein Draft BSpline kann mit dem Befehl [Draft DrahtZuBSpline](/Draft_WireToBSpline/de "Draft WireToBSpline/de") in eine [Draft Polylinie](/Draft_Wire/de "Draft Wire/de") umgewandelt werden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft-B-Spline (BSpline-Objekt) wird von einem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten-Eigenschaft**Area** (`Area`): (schreibgeschützt) gibt den Flächeninhalt der von dem Spline umschlossenen Fläche an. Der Wert ist `0.0`, wenn Daten-Eigenschaft**Make Face** auf `false` gesetzt ist oder die Fläche nicht erstellt werden kann.
* Daten-Eigenschaft**Closed** (`Bool`): gibt an, ob der Spline geschlossen ist oder nicht. Wenn der Spline anfänglich offen ist, ist dieser Wert `false`, wenn er auf `true` gesetzt wird, wird ein Kurvensegment gezeichnet, um den Spline zu schließen. Wenn der Spline anfänglich geschlossen ist, ist dieser Wert `true`, wenn man ihn auf `false` setzt, wird das letzte Kurvensegment entfernt und der Spline geöffnet.
* Daten-Eigenschaft**Make Face** (`Bool`): gibt an, ob der Spline eine Fläche bildet oder nicht. Wenn es `true` ist, wird eine Fläche erstellt, ansonsten wird nur der Umriss als Teil des Objekts betrachtet. Diese Eigenschaft funktioniert nur, wenn die Daten-Eigenschaft**Closed** `true` ist und wenn der Spline sich nicht selbst schneidet.
* Daten-Eigenschaft**Parameterization** (`Float`): beeinflusst die Form des Splines.
* Daten-Eigenschaft**Points** (`VectorList`): gibt die Punkte des Splines in seinem lokalen Koordinatensystem an.

### Ansicht

Draft

* Ansicht-Eigenschaft**Arrow Size** (`Length`): legt die Größe des Symbols fest, das am Ende des Splines angezeigt wird.
* Ansicht-Eigenschaft**Arrow Type** (`Enumeration`): gibt die Art des Symbols an, das am Ende des Splines angezeigt wird; es kann die Werte `Dot`, `Circle`, `Arrow`, `Tick` oder `Tick-2` annehmen.
* Ansicht-Eigenschaft**End Arrow** (`Bool`): gibt an, ob am Ende des Splines ein Symbol angezeigt werden soll, damit er als Hinweislinie für Beschritung verwendet werden kann.
* Ansicht-Eigenschaft**Pattern** (`Enumeration`): legt das [Draft Muster](/Draft_Pattern/de "Draft Pattern/de") fest, mit dem die Fläche des geschlossenen Splines gefüllt werden soll. Diese Eigenschaft funktioniert nur, wenn die Daten-Eigenschaft**Make Face** auf `true` gesetzt und die Ansicht-Eigenschaft**Display Mode** auf `Flat Lines` gesetzt ist.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): legt die Größe des [Draft Musters](/Draft_Pattern/de "Draft Pattern/de") fest.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen eines Draft-B-Splines (BSpline-Objekt) wird die Methode `make_bspline` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makeBSpline`.

```
bspline = make_bspline(pointslist, closed=False, placement=None, face=None, support=None)
bspline = make_bspline(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Erstellt ein `BSpline`-Objekt mit der vorgegebenen Liste von Punkten, `pointslist`.
  + Jeder Punkt in der Liste wird durch seinen `FreeCAD.Vector` festgelegt, mit Einheiten in Millimetern.
  + Alternativ kann die Eingabe auch ein `Part.Wire` sein, aus dem Punkte extrahiert werden.
* Ist `closed` auf `True` gesetzt, oder wenn der erste und letzte Punkt identisch sind, ist der Spline geschlossen.
* Ist `placement` auf `None` gesetzt, wird der Spline am Ursprung erstellt.
* Ist `face` auf `True` gesetzt, und der Spline geschlossen, ergibt der Spline eine Fläche, d. h. er erscheint gefüllt.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

spline1 = Draft.make_bspline([p1, p2, p3], closed=False)
spline2 = Draft.make_bspline([p1, 2*p3, 1.3*p2], closed=False)
spline3 = Draft.make_bspline([1.3*p3, p1, -1.7*p2], closed=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BSpline/de&oldid=1556688>"