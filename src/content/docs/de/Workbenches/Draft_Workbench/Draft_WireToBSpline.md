---
title: Draft DrahtZuBSpline
---
|  |
| --- |
| Draft DrahtZuBSpline |
| Menüeintrag |
| Änderung → Kantenzug zu BSpline |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft Draht](/Draft_Wire/de "Draft Wire/de"), [Draft BSpline](/Draft_BSpline/de "Draft BSpline/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_WireToBSpline.svg) **Draft DrahtZuBSpline** wandelt [Draft Kantenzüge](/Draft_Wire/de "Draft Wire/de") in [Draft B-Splines](/Draft_BSpline/de "Draft BSpline/de") und umgekehrt.

![](/images/Draft_Wire2BSpline_example.jpg)

Umwandlung eines Draft-Kantenzuges in einen Draft-B-Spline und eines geschlossenen Draft-B-Splines in einen geschlossenen Draft-Kantenzug

## Anwendung

1. Einen [Draft Kantenzug](/Draft_Wire/de "Draft Wire/de") oder einen [Draft B-Spline](/Draft_BSpline/de "Draft BSpline/de") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_WireToBSpline.svg) Kantenzug zu B-Spline drücken.
   * Den Menüeintrag **Änderung → ![](/images/Draft_WireToBSpline.svg) Kantenzug zu B-Spline** auswählen.
3. Ein neues Objekt wird erstellt.

## Hinweise

* Der Befehl kann zu einem geschlossenen, sich selbst durchdringenden [Draft Kantenzug](/Draft_Wire/de "Draft Wire/de") oder [Draft B-Spline](/Draft_BSpline/de "Draft BSpline/de") mit einer Fläche führen. Ein solches Objekt wird in der [3D-Ansicht](/3D_view/de "3D view/de") nicht korrekt dargestellt. Seine Daten-Eigenschaft**Make Face** oder seine Daten-Eigenschaft**Closed** muss auf `false` gesetzt werden.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um einen Draht in einen B-Spline umzuwandeln oder umgekehrt, wird die Eigenschaft `Points` des Quellobjekts an die Methode `make_bspline` bzw. die Methode `make_wire` des Draft-Moduls übergeben.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(1000, 1000, 0)
p2 = App.Vector(2000, 1000, 0)
p3 = App.Vector(2500, -1000, 0)
p4 = App.Vector(3500, -500, 0)

base_wire = Draft.make_wire([p1, p2, p3, p4])
base_spline = Draft.make_bspline([-p1, -1.3*p2, -1.2*p3, -2.1*p4])

points1 = base_wire.Points
spline_from_wire = Draft.make_bspline(points1)

points2 = base_spline.Points
wire_from_spline = Draft.make_wire(points2)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_WireToBSpline/de&oldid=1500012>"