---
title: Draft EinrastenAufZentrum
---
|  |
| --- |
| Draft EinrastenAufZentrum |
| Menüeintrag |
| Einrasten → Einrasten auf Mittelpunkt |
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

Die Option ![](/images/Draft_Snap_Center.svg) **Draft EinrastenAufZentrum** raste auf Mittelpunkten von Flächen oder kreisförmigen Kanten ein und auf den Punkten der Daten-Eigenschaft**Placement** von [Draft ArbeitsebenenProxies](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de") und [Arch Gebäudeteilen](/Arch_BuildingPart/de "Arch BuildingPart/de"). Die Flächen und Kanten können zu [Draft](/Draft_Workbench/de "Draft Workbench/de")- oder [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekten gehören, aber auch zu Objekten, die mit anderen [Arbeitsbereichen](/Workbenches "Workbenches") erstellt wurden.

![](/images/Draft_Snap_Center_example_arc.png)

Einrasten des zweiten Punktes einer Linie auf dem Mittelpunkt einer kreisförmigen Kante

![](/images/Draft_Snap_Center_example_buildingpart.png)

Einrasten des zweiten Punktes einer Linie auf dem Punkt der Positionierung eines Arch-Gebäudeteils

## Anwendung

Für allgemeine Informationen zum Einrasten (Fangen) siehe [Draft Fangen](/Draft_Snap/de "Draft Snap/de").

1. Einrasten sollte aktiviert sein. Siehe ![](/images/Draft_Snap_Lock.svg) [Draft EinrastenSperren](/Draft_Snap_Lock/de "Draft Snap Lock/de").
2. Ist **Draft EinrastenAufZentrum** nicht aktiv, gibt es folgende Möglichkeiten:
   * Die Schaltfläche ![](/images/Draft_Snap_Center.svg) Einrasten auf Mittelpunkt in der Symbolleiste Draft-Einrasten drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Die Schaltfläche ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) im [Draft-Widget Einrasten](/Draft_snap_widget/de "Draft snap widget/de") gedrückt halten und im Ausklappmenü die Option **![](/images/Draft_Snap_Center.svg) Einrasten auf Mittelpunkt** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Einrasten → Einrasten auf Mittelpunkt** auswählen oder die Menüoption im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
3. Einen Draft- oder BIM-Befehl auswählen, um die gewünschte Geometrie zu erstellen.
4. Man beachte, dass die Einrast-Optionen auch dann geändert werden können, wenn ein Befehl aktiv ist.
5. Eine der folgenden Möglichkeiten auswählen:
   * Um einen Mittelpunkt einer Fläche oder einer kreisförmigen Kante auszuwählen:
     + Den Mauszeiger auf eine Fläche oder Kante bewegen.
     + Die Kante wird hervorgehoben.
   * Um den Punkt einer Daten-Eigenschaft**Placement** eines [Draft ArbeitsebenenProxys](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de") auszuwählen:
     + Den Mauszeiger auf ein beliebiges Element des Arbeitsebenen-Proxys bewegen.
     + Der Arbeitsebenen-Proxy wird nicht hervorgehoben.
   * Um den Punkt einer Daten-Eigenschaft**Placement** eines [Arch Gebäudeteils](/Arch_BuildingPart/de "Arch BuildingPart/de") auszuwählen:
     + Den Mauszeiger auf eine der Kanten des kleinen Achsensymbols des Gebäudeteils bewegen oder auf den Text in dessen Nähe, der die Daten-Eigenschaft**Label** des Gebäudeteils und sein Level anzeigt.
     + Nur die Kanten des Achsensymbols werden hervorgehoben. Der Text wird nicht hervorgehoben.
6. Wurde ein Punkt ermittelt, wird der Punkt markiert und das Symbol ![](/images/Draft_Snap_Center.svg) wird neben dem Mauszeiger angezeigt.
7. Klicken, um den Punkt zu bestätigen.

## Einstellungen

Siehe [Draft-Einrasten](/Draft_Snap/de#Einstellungen "Draft Snap/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Center/de&oldid=1475577>"