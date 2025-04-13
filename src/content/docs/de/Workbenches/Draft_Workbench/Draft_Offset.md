---
title: Draft Versatz
---
|  |
| --- |
| Draft Versatz |
| Menüeintrag |
| Änderung → Versatz Bearbeiten → Versatz |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| O S |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Part 2DVersatz](/Part_Offset2D/de "Part Offset2D/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/Draft_Offset.svg) **Draft Versatz** verschiebt jedes Teilstück eines ausgewählten Objekts um einen gegebenen Abstand oder erstellt eine versetzte Kopie des ausgewählten Objekts.

![](/images/Draft_Offset_example.jpg)

Versetzen eines Draft-Drahtes

## Anwendung

Siehe auch: [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Wahlweise ein Objekt auswählen. Das Objekt muß auf der aktuellen [Draft Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") liegen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Offset.svg) Versetzen drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → ![](/images/Draft_Offset.svg) Versetzen** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_Offset.svg) Versetzen** auswählen.
   * Das Tastaturkürzel O dann S.
3. Wurde noch kein Objekt ausgewählt: Ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
4. Der Aufgaben-Bereich **Versatz** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informtionen.
5. Zum Festlegen des Versatzabstands gibt es folgende Möglichkeiten:
   * Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Eine Zahl eingeben:
     1. Der Zeiger muß sich auf der richtigen Seite des Objektes in der [3D-Ansicht](/3D_view/de "3D view/de") befinden.
     2. Der Zeiger darf nicht aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus bewegt werden.
     3. Einen **Abstand** eingeben.
     4. Die Taste Enter drücken, um die Anweisung abzuschließen.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

* Ist die Checkbox **OCC-style offset** aktiviert, wird ein besonderer Versatzstil verwendet: Offene [Draft Polylinien](/Draft_Wire/de "Draft Wire/de") werden zu beiden Seiten versetzt und die neuen Kanten werden mit gerundeten Ecken verbunden. Dies funktioniert nur mit ebenen Objekten mit mindestens zwei Kanten. Dabei ist zu beachten, dass mit diesem Stil ein neues nicht parametrisches Objekt erstellt wird und, wenn der Modus Kopieren deaktiviert ist, das Originalobjekt entfernt wird.
* C drücken oder die Checkbox **Kopieren** aktivieren, um den Kopieren-Modus umzuschalten. Ist der Kopieren-Modus aktiviert, erstellt der Befehl eine versetzte Kopie anstatt das Originalobjekt zu (v)ersetzen.
* Wird Alt gedrückt gehalten, bevor Punkte in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt werden, wird auch der Kopieren-Modus umgeschaltet. Während Alt gedrückt gehalten wird, können mehrere Versatzpunkte ausgewählt werden. Alt loslassen, um den Befehl zu beenden und die erstellten Kopien anzuzeigen.
* Shift gedrückt halten, um den Versatzabstand mit dem aktuellen Abschnitt verknüpft zu lassen.
* SDrücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
* Esc oder die Schaltfläche Close drücken, um den Befehl abzubrechen.

## Hinweise

* Zum Erstellen einer Versetzte Version eines [Draft B-Splines](/Draft_BSpline/de "Draft BSpline/de") werden seine Punkte einzeln versetzt und durch die neuen Punkte wird ein neuer Spline berechnet. Dieser neue Spline ist nicht parallel zum originalen Spline. Für eine exakt parallele Versatzkurve eines [Draft B-Splines](/Draft_BSpline/de "Draft BSpline/de") sollte der Befehl [Part 2DVersatz](/Part_Offset2D/de "Part Offset2D/de") eingesetzt werden.
* Der Befehl Draft Offset kann [Draft Bézierkurve](/Draft_BezCurve/de "Draft BezCurve/de") nicht bearbeiten. Dafür kann der Befehl [Part 2DVersatz](/Part_Offset2D/de "Part Offset2D/de") verwendet werden.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Versetzen von Objekten wird die Methode `offset` des Draft-Moduls verwendet. Die Methode kann nur [Draft Wires](/Draft_Wire/de "Draft Wire/de"), [Draft Circles](/Draft_Circle/de "Draft Circle/de"), [Draft Rectangles](/Draft_Rectangle/de "Draft Rectangle/de"), [Draft Polygons](/Draft_Polygon/de "Draft Polygon/de") und [Draft BSplines](/Draft_BSpline/de "Draft BSpline/de") verarbeiten.

```
offset_obj = offset(obj, delta, copy=False, bind=False, sym=False, occ=False)

```

* `obj` ist das zu versetzende Objekt.
* `delta` enthält die Versatzinformationen:
  + Für [Draft-Polylinien](/Draft_Wire/de "Draft Wire/de"), [Draft-Rechtecke](/Draft_Rectangle/de "Draft Rectangle/de") und [Draft-Vielecke](/Draft_Polygon/de "Draft Polygon/de") ist es ein Versatzvektor, der rechtwinklig auf dem ersten Abschnitt des Objekts steht.
  + Für [Draft Circles](/Draft_Circle/de "Draft Circle/de") ist es der neue Radius.
  + Für [Draft BSplines](/Draft_BSpline/de "Draft BSpline/de") ist es eine Liste von neuen Punkten.
* Ist `copy` auf `True` gesetzt, wird das Originalobjekt behalten und ein neues Objekt erstellt.
* Ist `bind` auf `True` gesetzt, wird eine Fläche erstellt, indem die Form des Originalobjekts mit der Form seines Versatzobjekts verbunden wird. Dies funktioniert nur mit offenen [Draft-Polylinien](/Draft_Wire/de "Draft Wire/de").
* Sind `sym` auf `True` und auch `bind` auf `True` gesetzt, wird das Originalobjekt zu beiden Seiten versetzt; die Gesamtbreite entspricht der Länge des gegebenen Vektors. Dies funktioniert nur mit offenen [Draft-Polylinien](/Draft_Wire/de "Draft Wire/de").
* Ist `occ` auf `True` gesetzt, wird ein OCC-Style-Versatz verwendet. Siehe [Optionen](#Optionen). Ist `occ` auf `True` gesetzt, werden die Argumente `bind` und `sym` ignoriert.
* `offset_obj` wird mit dem originalen versetzten Objekt zurückgegeben oder mit dem neuen Objekt. Ist `bind` auf `True` gesetzt oder `occ` auf `True` gesetzt, wird das neue Objekt ein `Part::Feature`-Object.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1500, 2000, 0)
p3 = App.Vector(4000, 0, 0)

wire = Draft.make_wire([p1, p2, p3])
doc.recompute()

vector = App.Vector(-200, 150, 0)
offset1 = Draft.offset(wire, vector, copy=True, bind=True, sym=True)
offset2 = Draft.offset(wire, 3*vector, copy=True)
offset3 = Draft.offset(wire, 6*vector, copy=True)
offset4 = Draft.offset(wire, 9*vector, copy=True)
offset5 = Draft.offset(wire, 1.5*vector, copy=True, occ=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Offset/de&oldid=1500016>"