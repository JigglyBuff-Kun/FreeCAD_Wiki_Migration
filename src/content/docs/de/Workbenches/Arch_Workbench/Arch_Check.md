---
title: Arch Überprüfen
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Überprüfen |
| Menüeintrag |
| Utils → Check |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch LöcherSchließen](/Arch_CloseHoles/de "Arch CloseHoles/de") |
|  |

## Beschreibung

Dieses Werkzeug prüft das aktuelle Dokument oder die ausgewählten Objekte auf [Part](/Part_Workbench/de "Part Workbench/de")- oder [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekte, die keine Festkörper sind und Probleme bereiten könnten, da die meisten Operationen des Arbeitsbereichs BIM Festkörper erfordern.

## Anwendung

1. Den Menüeintrag **Utils → ![](/images/Arch_Check.svg) Check** auswählen.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Dieses Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch folgende Funktion verwendet werden:

```
list_bad = check(objectslist, includehidden=False)

```

* Prüft, ob alle in `objectslist` enthaltenen Objekte Festkörper (solids) sind.
* Hat `includehidden` den Wert `True`, werden auch alle ausgeblendeten Objekte berücksichtigt, anderenfalls werden sie von der Suche ausgenommen.
* Gibt `list_bad` zurück, eine Liste mit Objekten, die nicht von einem `Part::Feature` abgeleitet sind oder Komponenten, die nicht geschlossen, nicht gültig oder keine Festkörper sind oder die Flächen enthalten, die nicht Teil irgendeines Festkörpers sind. Diese Liste wird eingesetzt, um Linienzüge sowie Profile der Arbeitsbereiche [BIM](/BIM_Workbench/de "BIM Workbench/de") oder [Draft](/Draft_Workbench/de "Draft Workbench/de") zu erkennen, die keine Festkörper sind.
  + Jedes Element in `list_bad` ist eine weitere Liste `[object, message]`, wobei `object` der erkannte nicht-Festkörper ist und `message` den Grund angibt, warum er in dieser Liste enthalten ist.

Beispiel:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
FreeCAD.ActiveDocument.recompute()

Circle = Draft.makeCircle(450)
Wire = Draft.makeWire([FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(1500, 1000, 0), FreeCAD.Vector(2500, -1000, 0)])

list_bad = Arch.check([Wall1, Wall2, Circle, Wire], includehidden=True)
print(list_bad)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Check/de&oldid=1541966>"