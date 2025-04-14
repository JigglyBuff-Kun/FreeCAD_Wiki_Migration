---
title: Surface Übergangskurve
---

|                                                         |
| ------------------------------------------------------- |
| Surface Übergangskurve                                  |
| Menüeintrag                                             |
| Surface → Blend Curve                                   |
| Arbeitsbereich                                          |
| [Surface](/Surface_Workbench/de "Surface Workbench/de") |
| Standardtastenkürzel                                    |
| _Keiner_                                                |
| Eingeführt in Version                                   |
| 0.21                                                    |
| Siehe auch                                              |
| _Keiner_                                                |
|                                                         |

## Beschreibung

![](/images/Surface_BlendCurve.svg) [Surface Blend Curve](/Surface_BlendCurve "Surface BlendCurve") Erzeugt eine Bezier Kurve zwischen zwei Kanten, mit der gewünschten Stetigkeit.

Die Basisgeometrie kann zu Kurven die mit dem [Draft Workbench](/Draft_Workbench "Draft Workbench") oder dem [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") erzeugt wurden gehören, kann aber auch zu festen Objekten die mit dem [Part Workbench](/Part_Workbench "Part Workbench") erzeugt wurden, gehören.

![](/images/Surface_BlendCurve_G3_example.png)
![](/images/Surface_BlendCurve_Comb.png)

Flächen Übergangsurve die 2 Kanten mit G3 Kontinuität verbindet. Das orange Polygon repräsentiert die Kontrollpunkte. Der Kamm der Kurve (von [Curves addon](/Curves_Workbench "Curves Workbench")) ist an den Kontaktpunkten glatt.

## Anwendung

1. Wähle zwei Kanten in [3D view](/3D_view "3D view")
2. Es gibt mehrere Wege den Befehl zu starten:
   - Drücke die ![](/images/Surface_BlendCurve.svg) [Surface Blend Curve](/Surface_BlendCurve "Surface BlendCurve") Schaltfläche.
   - Wähle die **Surface → ![](/images/Surface_BlendCurve.svg) Blend Curve** Option aus dem Menü.
3. Stelle die Form der Kurve in den Daten Eigenschaften des Objektes ein.

## Eigenschaften

Eine [Flächen Übergangskurve](/Surface_BlendCurve "Surface BlendCurve") wird von der Basisklasse [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` durch die `Part::Spline` Unterklasse), abgeleitet, deshalb verwendet sie die Eigenschaften der Letzteren.

Zusätzlich zu den in [Part Feature](/Part_Feature "Part Feature") beschriebenen Eigenschaften, hat die Oberflächen Übergangskurve im [Eigenschaften Editor](/Property_editor "Property editor") folgende Eigenschaften.

### Daten

Übergangskurve

- Daten**Startkante** (`LinkSub`): Erste Eingangskante.
- Daten**Start Stetigkeit** (`Integer`): Grad der Stetigkeit.
- Daten**Start Parameter** (`Float`): Normalisierter Parameter entlang der Kante; von `0.0`(Kantenstart) bis `1.0`(Kantenende).
- Daten**Start Länge** (`Float`): Länge der Tangente.
- Daten**Endkante** (`LinkSub`): Zweite Eingangskante..
- Daten**Ende Stetigkeit** (`Integer`): Grad der Stetigkeit
- Daten**Ende Parameter** (`Float`): Normalisierter Parameter entlang der Kante; von `0.0`(Kantenstart) bis `1.0`(Kantenende).
- Daten**Ende Länge** (`Float`): Länge der Tangente.

### Ansicht

Basis

- Ansicht**Kontrollpunkte** (`Bool`): Voreingestellt ist `false`; falls auf `true` gesetzt werden die Kontrollpunkte der Kurve überlagert dargestellt.

## Skripten

_Siehe auch:_ [FreeCAD Basis Scripten](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Das Werkzeug Übergangskurve kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus zum Einfügen von `Surface::FeatureBlendCurve`-Objekten verwendet werden.

- Die dabei zur Definition der Kurve verwendeten Kanten müssen als [LinkSub](/FeaturePython_Custom_Properties/de#App::PropertyLinkSub "FeaturePython Custom Properties/de") den `Startkante` und `Endkante` Eigenschaften des Objektes zugeordnet werden.
- Alle Objekte mit Kanten müssen, bevor sie als Eingabe für die Eigenschaften der Übergangskurve verwendet werden können, berechnet werden.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

points1 = [App.Vector(-20, -20, 0), App.Vector(-20, -8, 0), App.Vector(-17, 7, 0), App.Vector(-18, 25, 0)]
obj1 = Draft.make_bspline(points1)

points2 = [App.Vector(60, 26, 0), App.Vector(37, 4, 0), App.Vector(33, -20, 0)]
obj2 = Draft.make_bspline(points2)

doc.recompute()

bcurve = doc.addObject("Surface::FeatureBlendCurve","BlendCurve")
bcurve.StartEdge = (obj1, 'Edge1')
bcurve.EndEdge = (obj2, 'Edge1')
bcurve.EndParameter = 1.00
bcurve.StartSize = -5.00
bcurve.EndSize = -5.00

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_BlendCurve/de&oldid=1464434>"
