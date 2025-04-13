---
title: Arch RohrVerbinder
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Rohrverbinder |
| Menüeintrag |
| 3D/BIM → Verbinder |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| P C |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug **Arch Rohrverbinder** ermöglicht eine Eck- oder T-Stück-Verbindung zwischen zwei oder drei ausgewählten [Arch Rohren](/Arch_Pipe/de "Arch Pipe/de") zu erstellen.

## Anwendung

1. 2 oder 3 [Arch Rohre](/Arch_Pipe/de "Arch Pipe/de") auswählen. Werden 3 Rohre ausgewählt, müssen zwei davon kollinear ausgerichtet sein.
2. Die Schaltfläche ![](/images/Arch_PipeConnector.svg) Verbinder drücken oder das Tastaturkürzel P dann C.

## Eigenschaften

* Daten**Radius**: Der Krümmungsradius dieses Verbinders

## Typischer Arbeitsablauf

Siehe die Information auf [Arch Rohr](/Arch_Pipe/de "Arch Pipe/de") für den Arbeitsablauf zur Verwendung von Rohren und der Erstellung von Verbindungen.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Rohrverbinder kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Connector = makePipeConnector(pipes, radius=0, name="Connector")

```

* Erstellt ein `Connector`-Objekt aus den gegebenen `pipes`, eine Liste von [Arch Rohren](/Arch_Pipe/de "Arch Pipe/de"), und wahlweise einen Krümmungsradius `radius`.
  + Die Basisobjekte ([Draft Linienzüge](/Draft_Wire/de "Draft Wire/de")) der [Arch Rohre](/Arch_Pipe/de "Arch Pipe/de") sollten einen gemeinsamen Endpunkt haben, so dass sie einen sauberen, glatten Verbinder ergeben.

Beispiel:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(-1000, 0, 0)
p2 = FreeCAD.Vector(-2000, 0, 0)
p3 = FreeCAD.Vector(-2000, 0, 0)
p4 = FreeCAD.Vector(-2000, -1000, 0)
p5 = FreeCAD.Vector(-2000, -1000, 0)
p6 = FreeCAD.Vector(-4000, -1000, 0)
Line1 = Draft.makeWire([p1, p2])
Line2 = Draft.makeWire([p3, p4])
Line3 = Draft.makeWire([p5, p6])

Pipe1 = Arch.makePipe(Line1, 150)
Pipe2 = Arch.makePipe(Line2, 150)
Pipe3 = Arch.makePipe(Line3, 150)
FreeCAD.ActiveDocument.recompute()

Conn = Arch.makePipeConnector([Pipe1, Pipe2])
Conn2 = Arch.makePipeConnector([Pipe2, Pipe3])
FreeCAD.ActiveDocument.recompute()

Line4 = Draft.move(Line1, FreeCAD.Vector(-500, 1000, 0), copy=True)
Line5 = Draft.move(Line2, FreeCAD.Vector(-500, 1000, 0), copy=True)
Pipe4 = Arch.makePipe(Line4, 100)
Pipe5 = Arch.makePipe(Line5, 100)
FreeCAD.ActiveDocument.recompute()

Conn3 = Arch.makePipeConnector([Pipe4, Pipe5], radius=400)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_PipeConnector/de&oldid=1541996>"