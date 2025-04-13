---
title: Draft Wire To BSpline
---
|  |
| --- |
| Draft WireToBSpline |
| poziția meniului |
| Drafting → Wire to BSpline |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Acest instrument convertește un filament [Wires](/Draft_Wire "Draft Wire") într-o funcție [BSplines](/Draft_BSpline "Draft BSpline"), și vice-versa.

![](/images/Draft_Wire2BSpline_example.jpg)

Converting a wire to a B-spline, and a closed B-spline to a closed wire

## Cum se folosește

1. Selectați un [wire](/Draft_Wire "Draft Wire") sau o [BSpline](/Draft_BSpline "Draft BSpline")
2. Apăsați butonul ![](/images/Draft_WireToBSpline.png) [Draft WireToBSpline](/Draft_WireToBSpline "Draft WireToBSpline")

## Notes

* The command may result in a closed, self-intersecting [Draft Wire](/Draft_Wire "Draft Wire") or [Draft BSpline](/Draft_BSpline "Draft BSpline") with a face. Such an object will not display properly in the [3D view](/3D_view "3D view"). Its Date**Make Face** property, or its Date**Closed** property, must be set to `false`.

## Scripting

## Scrip-Programare

Nu este disponibil, dar crearea unui obiect nou cu punctele dintr-un altul este ușor, de exemplu:

* Dacă obiectul activ este un filament:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_WireToBSpline/ro&oldid=1395867>"