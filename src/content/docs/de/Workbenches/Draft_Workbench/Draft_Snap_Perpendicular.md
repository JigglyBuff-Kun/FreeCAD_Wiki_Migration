---
title: Draft EinrastenSenkrecht
---
|  |
| --- |
| Draft EinrastenSenkrecht |
| Menüeintrag |
| Einrasten → Senkrecht einrasten |
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

Die Option ![](/images/Draft_Snap_Angle.svg) **Draft EinrastenSenkrecht** rastet auf senkrechten Projektionen eines vorherigen Punktes auf Flächen ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) oder Kanten ein. Die Flächen und Kanten können zu [Draft](/Draft_Workbench "Draft Workbench")- oder [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekten gehören, aber auch zu Objekten, die mit anderen [Arbeitsbereichen](/Workbenches/de "Workbenches/de") erstellt wurden.

Diese Einrast-Option findet auch punkte auf verlängerten Flächen und Kanten.

![](/images/Draft_Snap_Perpendicular_example.png)

Einrasten des zweiten Punkts einer Linie auf einem Punkt senkrecht zu einer verlängerten Kante

## Anwendung

Für allgemeine Informationen zum Einrasten (Fangen) siehe [Draft Einrasten](/Draft_Snap/de "Draft Snap/de").

1. Einrasten sollte aktiviert sein. Siehe ![](/images/Draft_Snap_Lock.svg) [Draft EinrastenSperren](/Draft_Snap_Lock/de "Draft Snap Lock/de").
2. Ist **Draft EinrastenSenkrecht** nicht aktiv, gibt es folgende Möglichkeiten:
   * Die Schaltfläche ![](/images/Draft_Snap_Perpendicular.svg) [Senkrecht einrasten](/Draft_Snap_Perpendicular "Draft Snap Perpendicular") in der Symbolleiste Draft-Einrasten drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Die Schaltfläche ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) im [Draft-Widget Einrasten](/Draft_snap_widget/de "Draft snap widget/de") gedrückt halten und im Ausklappmenü die Option **![](/images/Draft_Snap_Perpendicular.svg) Senkrecht einrasten** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Einrasten → ![](/images/Draft_Snap_Perpendicular.svg) Senkrecht einrasten** auswählen oder die Menüoption im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
3. Einen Draft- oder BIM-Befehl auswählen, um die gewünschte Geometrie zu erstellen.
4. Man beachte, dass die Einrast-Optionen auch dann geändert werden können, wenn ein Befehl aktiv ist.
5. Einen ersten Punkt auswählen. Diese Einrast-Option erfordert einen vorherigen Punkt. Der senkrechte Punkt wird mit Bezug auf diesen Punkt ermittelt.
6. Den Mauszeiger auf eine Fläche oder Kante bewegen.
7. Die Fläche bzw. Kante wird hervorgehoben.
8. Wurde ein senkrechter Punkt ermittelt, wird der Punkt markiert und das Symbol ![](/images/Draft_Snap_Perpendicular.svg) wird neben dem Mauszeiger angezeigt.
9. Sind mehrere senkrechte Punkte vorhanden: wahlweise den Mauszeiger näher an einen anderen Schnittpunkt heran bewegen. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
10. Klicken, um den Punkt zu bestätigen.

## Einstellungen

Siehe [Draft-Einrasten](/Draft_Snap/de#Einstellungen "Draft Snap/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Perpendicular/de&oldid=1475532>"