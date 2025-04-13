---
title: Arch 3Ansichten
---
:::caution
DISER BEFEHL IST VERALTETEr ist in1.0 und neuernicht mehr enthalten.
:::

|  |
| --- |
| Arch 3Ansichten |
| Menüeintrag |
| Arch → Dienstprogramme → 3 Ansichten aus Netz |
| Arbeitsbereich |
| [Arch](/Arch_Workbench/de "Arch Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch NetzAufteilen](/Arch_SplitMesh/de "Arch SplitMesh/de"), [Arch NetzZuForm](/Arch_MeshToShape/de "Arch MeshToShape/de") |
|  |

## Beschreibung

*Dieser Befehl wird zur Zeit nicht verwendet.* Er dient dazu, flache, formbasierte Ansichten aus einem [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") basierten Objekt zu erzeugen, die von der ![](/images/Arch_Equipment.svg) [Arch Ausrüstung](/Arch_Equipment/de "Arch Equipment/de") Werkzeug.

## Anwendung

1. Wähle ein Netzobjekt aus.
2. Wähle die ![](/images/Arch_3Views.svg) Schaltfläche oder Arch → Utilities → ![](/images/Arch_3Views.svg) [3Ansichten](/Arch_3Views "Arch 3Views") aus dem oberen Menü.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Dieses Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch folgende Funktion verwendet werden:

```
shape = createMeshView(obj, direction=FreeCAD.Vector(0, 0, -1), outeronly=False, largestonly=False)

```

* Erzeugt eine flache `Form`, die die Projektion des gegebenen Netzobjekts (`obj`) in der gegebenen `Richtung` ist.
* Wenn `nuraußen` `True` ist, wird nur die äußere Kontur berücksichtigt, wobei die inneren Löcher verworfen werden.
* Wenn `nurgrößtes` `True` ist, wird nur das größte Segment des gegebenen Netzes verwendet.

Verwende `Part.show()`, um die resultierende flache Form anzuzeigen.

Beispiel:

```
import FreeCAD, Draft, Arch, Mesh, MeshPart

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

Shape = Wall.Shape.copy(False)
Shape.Placement = Wall.getGlobalPlacement()

mesh_obj = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
mesh_obj.Mesh = MeshPart.meshFromShape(Shape=Shape, MaxLength=520)
mesh_obj.ViewObject.DisplayMode = "Flat Lines"
FreeCAD.ActiveDocument.recompute()

XAxis = FreeCAD.Vector(1, 0, 0)
YAxis = FreeCAD.Vector(0, 1, 0)
ZAxis = FreeCAD.Vector(0, 0, -1)

s1 = Arch.createMeshView(mesh_obj, ZAxis)
s2 = Arch.createMeshView(mesh_obj, XAxis)
s3 = Arch.createMeshView(mesh_obj, YAxis)

Part.show(s1)
Part.show(s2)
Part.show(s3)

Wall.ViewObject.Visibility = False
mesh_obj.ViewObject.Visibility = False

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_3Views/de&oldid=1541956>"