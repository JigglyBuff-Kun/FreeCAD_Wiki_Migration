---
title: Draft EinrastenInDerNähe
---
|  |
| --- |
| Draft EinrastenInDerNähe |
| Menüeintrag |
| Einrasten → In der Nähe einrasten |
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

Die Option ![](/images/Draft_Snap_Near.svg) **Draft EinrastenInDerNähe** rastet auf dem am nächsten gelegenen Punkt einer Fläche oder einer Kante ein. Die Flächen und Kanten können zu [Draft](/Draft_Workbench/de "Draft Workbench/de")- oder [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekten gehören, aber auch zu Objekten, die mit anderen [Arbeitsbereichen erstellt wurden](/Workbenches/de "Workbenches/de").

![](/images/Draft_Snap_Near_example.png)

Fängt den zweiten Punkt einer Linie zum nächsten Punkt einer Kante

## Anwendung

Zu allgemeinen Informationen zum Fangen siehe [Draft Fang](/Draft_Snap/de "Draft Snap/de").

1. Einrasten sollte aktiviert sein. Siehe ![](/images/Draft_Snap_Lock.svg) [Draft EinrastenSperren](/Draft_Snap_Lock/de "Draft Snap Lock/de").
2. Ist **Draft EinrastenInDerNähe** nicht aktiv, gibt es folgende Möglichkeiten:
   * Die Schaltfläche ![](/images/Draft_Snap_Near.svg) In der Nähe einrasten in der Symbolleiste Draft-Einrasten drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Die Schaltfläche ![](/images/Draft_Snap_Lock.svg)![](/images/Toolbar_flyout_arrow.svg) im [Draft-Widget Einrasten](/Draft_snap_widget/de "Draft snap widget/de") gedrückt halten und im Ausklappmenü die Option **![](/images/Draft_Snap_Near.svg) In der Nähe einrasten** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Einrasten → In der Nähe einrasten** auswählen oder die Menüoption im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
3. Einen Draft- oder BIM-Befehl auswählen, um die gewünschte Geometrie zu erstellen.
4. Man beachte, dass die Einrast-Optionen auch dann geändert werden können, wenn ein Befehl aktiv ist.
5. Den Mauszeiger auf eine Fläche oder Kante bewegen.
6. Die Fläche bzw. Kante wird hervorgehoben.
7. Wurde ein am nächsten gelegener Punkt ermittelt, wird der Punkt markiert.
8. Wahlweise den Mauszeiger entlang der Fläche oder Kante bewegen, um einen anderen am nächsten gelegenen Punkt auszuwählen.
9. Klicken, um den Punkt zu bestätigen.

## Hinweise

* 1.0 und davor: Es ist keine gute Idee, Draft EinrastenInDerNähe permanent zu aktivieren, da es Vorrang vor vielen anderen Einrast-Optionen erhält.
* [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de"): Es ist möglich Draft EinrastenInDerNähe permanent zu aktivieren, aber es erfordert mehr Mausbewegungen und präziseres Positionieren des Mauszeigers für andere Funktionen zum Einrasteten auf Objekten.

## Einstellungen

Siehe [Draft Fang Einstellungen](/Draft_Snap/de#Einstellungen "Draft Snap/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap_Near/de&oldid=1565148>"