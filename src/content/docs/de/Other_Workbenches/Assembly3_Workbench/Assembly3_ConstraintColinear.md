---
title: Assembly3 Kollinear
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 Kollinear |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| [Assembly3](/Assembly3_Workbench/de "Assembly3 Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Assembly_ConstraintColinear.svg) Kollinear setzt zwei nicht unterteilte 2D-Linien, die in der Draft-Arbeitsumgebung in Zusammenhang mit einer Arbeitsebene erzeugt wurden, zueinander in Beziehung.

Er verknüpft die Positionen beider 2D-Linien in einer Weise, dass der Ursprung des lokalen Koordinatensystems (LKS) einer Linie auf der Z-Achse des LKS der anderen Linie liegt, wobei beide Z-Achsen in dieselbe Richtung zeigen.

## Anwendung

1. Zwei 2D-Linien auswählen.
2. Den Befehl ![](/images/Assembly_ConstraintColinear.svg) Kollinear aktivieren durch:
   * Die Schaltfläche ![](/images/Assembly_ConstraintColinear.svg) Kollinear.
3. Schaltfläche ![](/images/Assembly3_workbench_icon.svg) [Beziehungen berechnen](/Assembly3_ResolveConstraints/de "Assembly3 ResolveConstraints/de") oder ![](/images/Assembly_QuickSolve.svg) [Schnelle Berechnung](/Assembly3_QuickSolve/de "Assembly3 QuickSolve/de") drücken, um neu zu berechnen

:   :   (Wenn ![](/images/Assembly_AutoRecompute.svg) [Automatische Berechnung](/Assembly3_AutoRecompute/de "Assembly3 AutoRecompute/de") und ![](/images/Assembly_SmartRecompute.svg) [Smarte Berechnung](/Assembly3_SmartRecompute/de "Assembly3 SmartRecompute/de") nicht aktiviert wurden).

## Hinweise

Dieses Werkzeug akzeptiert auch 3D-Elemente wie z.B. Kanten oder Mittellinien.

* 2D/3D or 3D/2D: Anstatt der Z-Achse des 3D-Elements wird die Projektion dieser Achse auf die Arbeitsebene der 2D-Linie genutzt, um die Linien zu Positionieren.
* Beide 3D: Die Linie werden zueinander positioniert, aber ich kann nicht erkennen, wie...

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintColinear/de&oldid=1536578>"