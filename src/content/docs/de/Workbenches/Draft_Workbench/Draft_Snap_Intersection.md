---
title: Draft EinrastenAufSchnittpunkt
---
|  |
| --- |
| Draft EinrastenAufSchnittpunkt |
| Menüeintrag |
| Einrasten → Einrasten auf Schnittpunkt |
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

Die Option ![](/images/Draft_Snap_Intersection.svg) **Draft EinrastenAufSchnittpunkt** rastet auf dem Schnittpunkt zweier Kanten ein. Die Kanten können zu [Draft](/Draft_Workbench/de "Draft Workbench/de")- oder [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekten gehören, aber auch zu Objekten, die mit anderen [Arbeitsbereichen](/Workbenches/de "Workbenches/de")  erstellt wurden.

Diese Einrast-Option findet offensichtliche Schnittpunkte von (verlängerten) geraden Kanten, wenn auch ![](/images/Draft_Snap_WorkingPlane.svg) [Draft EinrastenAufArbeitsebene WorkingPlane](/Draft_Snap_WorkingPlane/de "Draft Snap WorkingPlane/de") aktiv ist.

![](/images/Draft_Snap_Intersection_example.png)

Einrasten des zweiten Punktes einer Linie auf einem Schnittpunkt zweier Kanten

## Anwendung

Für allgemeine Informationen zum Einrasten (Fangen) siehe [Draft Fangen](/Draft_Snap/de "Draft Snap/de").

1. Einrasten sollte aktiviert sein. Siehe ![](/images/Draft_Snap_Lock.svg) [Draft EinrastenSperren](/Draft_Snap_Lock/de "Draft Snap Lock/de").
2. Ist **Draft EinrastenAufSchnittpunkt** nicht aktiv, gibt es folgende Möglichkeiten:
   * Die Schaltfläche ![](/images/Draft_Snap_Intersection.svg) Einrasten auf Schnittpunkt in der Symbolleiste Draft-Einrasten drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Die Schaltfläche ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) im [Draft-Widget Einrasten](/Draft_snap_widget/de "Draft snap widget/de") gedrückt halten und im Ausklappmenü die Option **![](/images/Draft_Snap_Intersection.svg) Einrasten auf Schnittpunkt** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Einrasten → ![](/images/Draft_Snap_Intersection.svg) Einrasten auf Schnittpunkt** auswählen oder die Menüoption im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
3. Einen Draft- oder BIM-Befehl auswählen, um die gewünschte Geometrie zu erstellen.
4. Man beachte, dass die Einrast-Optionen auch dann geändert werden können, wenn ein Befehl aktiv ist.
5. Den Mauszeiger auf eine der Kanten bewegen, die sich schneiden.
6. Die Kante wird hervorgehoben.
7. Den Mauszeiger auf die andere Kante bewegen.
8. Die Kante wird hervorgehoben.
9. Wurde ein Schnittpunkt ermittelt, wird der Punkt markiert und das Symbol ![](/images/Draft_Snap_Intersection.svg) wird neben dem Mauszeiger angezeigt.
10. Hat die Kante mehrere Schnittpunkte: wahlweise den Mauszeiger näher an einen anderen Schnittpunkt heran bewegen.
11. Klicken, um den Punkt zu bestätigen.

## Einstellungen

Siehe [Draft-Einrasten](/Draft_Snap/de#Einstellungen "Draft Snap/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Intersection/de&oldid=1475552>"