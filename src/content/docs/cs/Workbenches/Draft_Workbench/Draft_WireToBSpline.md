---
title: Kreslení Drát do B-křivky
---
|  |
| --- |
| Kreslení Drát do B-křivky |
| Umístění Menu |
| Kreslení -> Drát do B-křivky |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Popis

Tento nástroj konvertuje [Dráty](/Draft_Wire/cs "Draft Wire/cs") do [B-křivek](/Draft_BSpline/cs "Draft BSpline/cs") a naopak.

![](/images/Draft_Wire2BSpline_example.jpg)

Converting a wire to a B-spline, and a closed B-spline to a closed wire

## Použití

1. Vyberte [drát](/Draft_Wire/cs "Draft Wire/cs") nebo [B-křivku](/Draft_BSpline/cs "Draft BSpline/cs")
2. Stiskněte tlačítko ![](/images/Draft_WireToBSpline.png) Kreslení Drát do B-křivky

## Notes

* The command may result in a closed, self-intersecting [Draft Wire](/Draft_Wire "Draft Wire") or [Draft BSpline](/Draft_BSpline "Draft BSpline") with a face. Such an object will not display properly in the [3D view](/3D_view "3D view"). Its Údaje**Make Face** property, or its Údaje**Closed** property, must be set to `false`.

## Scripting

## Skriptování

Není dostupné, ale vytvoření nového objektu z bodů jiného objektu je snadné, například:

* Je-li aktivní objekt drát:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_WireToBSpline/cs&oldid=1395865>"