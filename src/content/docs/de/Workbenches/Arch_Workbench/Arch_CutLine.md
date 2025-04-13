---
title: Arch Schnittlinie
---
:::caution
Dieser Befehl ist veraltetEr steht nicht zur Verfügung in1.0 und neuer. Stattdessen kannArch Schnittebeneverwendet werden.
:::

|  |
| --- |
| Arch Schnittlinie |
| Menüeintrag |
| Arch → Mit einer Linie beschneiden |
| Arbeitsbereich |
| [Arch](/Arch_Workbench/de "Arch Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [Arch Schnittebene](/Arch_CutPlane/de "Arch CutPlane/de") |
|  |

## Beschreibung

Das Werkzeug **Arch Schnittlinie** beschneidet einen Arch-Festkörper (Arch-Objekt), wie z.B. eine [Arch Wand](/Arch_Wall/de "Arch Wall/de") oder [Arch Struktur](/Arch_Structure/de "Arch Structure/de") mit einer geraden Kante. Bassierend auf dieser Kante und der Normale der [Draft-Arbeitebene](/Draft_SelectPlane/de "Draft SelectPlane/de") wird eine Schnittfläche erstellt.

![](/images/Arch_CutLine_example_1.png) ![](/images/Arch_CutLine_example_2.png)

[Arch-Wand](/Arch_Wall/de "Arch Wall/de") mit einer Schnittlinie beschnitten. Links: Subtraktiver Quader, der bei der Anwendung des Werkzeugs erscheint. Rechts: Die Wand nach dem Beschnitt.

## Anwendung

1. Wenn nötig, die Arbeisebene ausrichten:
   * Die ausgewählte Kante darf nicht parallel zur Normale der Arbeisebene verlaufen.
   * Die erstellte Schnittfläche steht senkrecht auf der Arbeisebene.
2. Das Objekt, das beschnitten werden soll, in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
3. Eine gerade Kante auswäheln. Diese muss in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt werden.
4. Die Schaltfläche ![](/images/Arch_CutLine.svg) Mit einer Linie beschneiden drücken.
5. **hinter** oder **Vorne** auswählen, um die Seite der Schnittfläche zu bestimmen, auf der Material entfernt werden soll.
6. Die Schaltfläche OK drücken.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CutLine/de&oldid=1541972>"