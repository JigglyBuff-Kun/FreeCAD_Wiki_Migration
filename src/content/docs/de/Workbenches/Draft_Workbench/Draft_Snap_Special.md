---
title: Draft EinrastenSpezial
---
|  |
| --- |
| Draft EinrastenSpezial |
| Menüeintrag |
| Einrasten → Einrasten spezial |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [Draft Einrasten](/Draft_Snap/de "Draft Snap/de"), [Draft EinrastenSperren](/Draft_Snap_Lock/de "Draft Snap Lock/de") |
|  |

## Beschreibung

Die Option ![](/images/Draft_Snap_Special.svg) **Draft EinrastenSpezial** rastet auf, durch das Objekt festgelegten, [speziellen Punkten](#Supported_special_points) ein. Die unterstützten Objekte sind [Arch Wände](/Arch_Wall/de "Arch Wall/de"), [Arch Strukturen](/Arch_Structure "Arch Structure") und [Arch Ausstattung](/Arch_Equipment "Arch Equipment").

![](/images/Draft_Snap_Special_example.png)

Einrasten des zweiten Punktes einer Linie auf einen speziellen Punkt einer [Arch Wand](/Arch_Wall/de "Arch Wall/de"), der ein Knoten ihres Basisobjekts ist

## Anwendung

Für allgemeine Informationen zum Einrasten (Fangen) siehe [Draft Einrasten](/Draft_Snap/de "Draft Snap/de").

1. Einrasten sollte aktiviert sein. Siehe ![](/images/Draft_Snap_Lock.svg) [Draft EinrastenSperren](/Draft_Snap_Lock/de "Draft Snap Lock/de").
2. Ist **Draft EinrastenSpezial** nicht aktiv, gibt es folgende Möglichkeiten:
   * Die Schaltfläche ![](/images/Draft_Snap_Special.svg) [Einrasten spezial](/Draft_Snap_Special "Draft Snap Special") in der Symbolleiste Draft-Einrasten drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Die Schaltfläche ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) im [Draft-Widget Einrasten](/Draft_snap_widget/de "Draft snap widget/de") gedrückt halten und im Ausklappmenü die Option **![](/images/Draft_Snap_Special.svg) Einrasten spezial** auswählen.
   * [BIM](/BIM_Workbench "BIM Workbench"): Den Menüeintrag **Einrasten → ![](/images/Draft_Snap_Special.svg) Einrasten spezial** auswählen oder die Menüoption im Kontextmenü der [3D-Ansichr](/3D_view/de "3D view/de") auswählen.
3. Einen Draft- oder BIM-Befehl auswählen, um die Geometrie zu erstellen.
4. Man beachte, dass die Einrast-Optionen auch dann geändert werden können, wenn ein Befehl aktiv ist.
5. Den Mauszeiger über ein unterstütztes Objekt bewegen.
6. Das Objekt wird hervorgehoben.
7. Wurde ein spezieller Punkt ermittelt, wird der Punkt markiert und das Symbol ![](/images/Draft_Snap_Special.svg) wird neben dem Mauszeiger angezeigt.
8. Sind mehrere spezielle Punkte vorhanden: wahlweise den Mauszeiger näher an einen anderen speziellen Punkt heran bewegen.
9. Klicken, um den Punkt zu bestätigen.

## Unterstützte spezielle Punkte

* Die Knoten des Objekts der Daten-Eigenschaft**Base** von ![](/images/Arch_Wall.svg) [Arch Wänden](/Arch_Wall/de "Arch Wall/de").
* Der Punkt der Daten-Eigenschaft**Placement** von ![](/images/Arch_Structure.svg) [Arch Strukturen](/Arch_Structure/de "Arch Structure/de").
* Die Daten-Eigenschaft**Snap Points** von ![](/images/Arch_Equipment.svg) [Arch Ausstattungen](/Arch_Equipment/de "Arch Equipment/de").

## Einstellungen

Siehe [Draft-Einrasten](/Draft_Snap/de#Einstellungen "Draft Snap/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Special/de&oldid=1475435>"