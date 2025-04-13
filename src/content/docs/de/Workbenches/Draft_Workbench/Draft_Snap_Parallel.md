---
title: Draft EinrastenParallel
---
|  |
| --- |
| Draft EinrastenParallel |
| Menüeintrag |
| Einrasten → Parallel einrasten |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft Einrasten](/Draft_Snap/de "Draft Snap/de"), [Draft EinrastenSperren](/Draft_Snap_Lock/de "Draft Snap Lock/de") |
|  |

## Beschreibung

Die Option ![](/images/Draft_Snap_Parallel.svg) **Draft EinrastenParallel** rastet auf einer gedachten Geraden parallel zu einer geraden Kante ein. Die Kanten können zu [Draft](/Draft_Workbench/de "Draft Workbench/de")- oder [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekten gehören, aber auch zu Objekten, die mit anderen [Arbeitsbereichen](/Workbenches/de "Workbenches/de")  erstellt wurden.

Auf bis zu 8 Kanten können diese Einrast-Option und [Draft EinrastenAufErweiterung](/Draft_Snap_Extension/de "Draft Snap Extension/de") referenzieren, und ermöglichen so das Einrasten auf virtuelle Schnittpunkte. Beide Einrast-Optionen können auch mit anderen Einrast-Optionen kombiniert werden.

![](/images/Draft_Snap_Parallel_example.png)

Einrasten des zweiten Punktes einer Linie auf einer unsichtbaren Linie, die parallel zu einer Kante verläuft.

## Anwendung

Für allgemeine Informationen zum Einrasten (Fangen) siehe [Draft Fangen](/Draft_Snap/de "Draft Snap/de").

1. Einrasten sollte aktiviert sein. Siehe ![](/images/Draft_Snap_Lock.svg) [Draft EinrastenSperren](/Draft_Snap_Lock/de "Draft Snap Lock/de").
2. Ist **Draft EinrastenParallel** nicht aktiv, gibt es folgende Möglichkeiten:
   * Die Schaltfläche ![](/images/Draft_Snap_Parallel.svg) Parallel einrasten in der Symbolleiste Draft-Einrasten drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Die Schaltfläche ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) im [Draft-Widget Einrasten](/Draft_snap_widget/de "Draft snap widget/de") gedrückt halten und im Ausklappmenü die Option **![](/images/Draft_Snap_Parallel.svg) Parallel einrasten** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Einrasten → ![](/images/Draft_Snap_Parallel.svg) Parallel einrasten** auswählen oder die Menüoption im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
3. Einen Draft- oder BIM-Befehl auswählen, um die gewünschte Geometrie zu erstellen.
4. Man beachte, dass die Einrast-Optionen auch dann geändert werden können, wenn ein Befehl aktiv ist.
5. Einen ersten Punkt auswählen. Diese Einrast-Option erfordert einen vorherigen Punkt. Die parallele Einrast-Linie wird durch diesen Punkt verlaufen.
6. Den Mauszeiger auf eine gerade Kante bewegen.
7. Die Kante wird hervorgehoben.
8. Wird der Mauszeiger um den vorherigen Punkt herum bewegt, kann man einen "Magnet-"Effekt feststellen, wenn sich der Mauszeiger auf der parallelen Einrast-Linie befindet.
9. Der Punkt wird markiert und das Symbol ![](/images/Draft_Snap_Parallel.svg) wird neben dem Mauszeiger angezeigt.
10. Klicken, um den Punkt zu bestätigen.

## Einstellungen

Siehe [Draft-Einrasten](/Draft_Snap/de#Einstellungen "Draft Snap/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Parallel/de&oldid=1513906>"