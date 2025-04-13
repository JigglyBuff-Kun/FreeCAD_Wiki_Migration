---
title: Arch FormEntfernen
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch FormEntfernen |
| Menüeintrag |
| Utils → Form entfernen |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch NetzAufteilen](/Arch_SplitMesh/de "Arch SplitMesh/de"), [Arch NetzZuForm](/Arch_MeshToShape/de "Arch MeshToShape/de") |
|  |

## Beschreibung

Das Werkzeug **Arch FormEntfernen** versucht sich daran, die innere kubische Form einer [Arch-Wand](/Arch_Wall/de "Arch Wall/de") oder einer [Arch-Struktur](/Arch_Structure/de "Arch Structure/de") zu entfernen sowie ihre Eigenschaften anzupassen und sie damit vollständig zu parametrisieren. Dieses Werkzeug funktioniert nur, wenn die zugrundeliegende Form kubisch ist (genau 6 Flächen, alle Ecken haben nur rechte Winkel).

## Anwendung

1. Eine [Arch-Wand](/Arch_Wall/de "Arch Wall/de") oder eine [Arch-Struktur](/Arch_Structure/de "Arch Structure/de") auswählen.
2. Den Menüeintrag **Utils → ![](/images/Arch_RemoveShape.svg) Form entfernen** auswählen.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Dieses Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch folgende Funktion verwendet werden:

```
removeShape(objs, mark=True)

```

* Nimmt eine Liste von Arch Objekten (`objs`) gebaut auf einem quaderförmigen Formteil und entfernt die inneren Formen, wobei Lnge, Breite und Höhe als Eigenschaften des Arch-Objekts beibehalten werden.
  + `objs` ist ein einzelnes Objekt, [Wand](/Arch_Wall/de "Arch Wall/de") oder [Arch Bauelement](/Arch_Structure/de "Arch Structure/de") oder eine daraus bestehende Liste.
* Falls `mark` den Wert `True` hat, werden Objekte rot markiert, wenn sie von dieser Funktion nicht bearbeitet werden können.

```
import FreeCAD, Draft, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(Box)
FreeCAD.ActiveDocument.recompute()

Arch.removeShape(Structure)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_RemoveShape/de&oldid=1542020>"