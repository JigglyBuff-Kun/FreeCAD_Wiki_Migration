---
title: Assembly3 LinienGleichBogenlänge
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 LinienGleichBogenlänge |
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

Der Befehl ![](/images/Assembly_ConstraintEqualLineArcLength.svg) Linien- gleich Bogenlänge bestimmt die Länge einer 2D-Linie wie z.B. einer nicht unterteilten 2D-Linie, die mit Werkzeugen der ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/de "Draft Workbench/de")-Arbeitsumgebung in Zusammenhang mit einer ![](/images/Assembly_Workplane.svg) Arbeitsebene erstellt wurde.

Er verknüpft die Länge einer 2D-Linie mit der Länge eines Bogens (2D or 3D?).

Die Länge der gewählten Linie ist gleich der Länge des gewählten Bogens

```
Da ich dieses Werkzeug nicht zu Arbeit bewegen konnte, gibt es hier die Aussage des Quick-Info-Fensters:

```

Add an "EqualLineArcLength" constraint to make a line of the same length as an arc.

## Anwendung

1. Auswahl der 2D-Linie, deren Länge festgelegt werden soll.
2. Auswahl des 2D-Bogens, dessen Länge verwendet werden soll.
3. Den Befehl ![](/images/Assembly_ConstraintEqualLineArcLength.svg) Linien- gleich Bogenlänge aktivieren durch:
   * Die Schaltfläche ![](/images/Assembly_ConstraintEqualLineArcLength.svg) Linien- gleich Bogenlänge.
4. Schaltfläche ![](/images/Assembly3_workbench_icon.svg) [Beziehungen berechnen](/Assembly3_ResolveConstraints/de "Assembly3 ResolveConstraints/de") oder ![](/images/Assembly_QuickSolve.svg) [Schnelle Berechnung](/Assembly3_QuickSolve/de "Assembly3 QuickSolve/de") drücken, um neu zu berechnen

:   :   (Wenn ![](/images/Assembly_AutoRecompute.svg) [Automatische Berechnung](/Assembly3_AutoRecompute/de "Assembly3 AutoRecompute/de") und ![](/images/Assembly_SmartRecompute.svg) [Smarte Berechnung](/Assembly3_SmartRecompute/de "Assembly3 SmartRecompute/de") nicht aktiviert wurden).

Abhängig von der Reihenfolge der gewählten Linienarten erscheinen folgende Fehlermeldungen:

```
Constraint "EqualLineArcLength" requires the 1st element to be a linear edge
Constraint "EqualLineArcLength" requires the 2nd element to be an arc edge
Constraint "EqualLineArcLength" requires the 2nd element to be a circular edge

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintEqualLineArcLength/de&oldid=1536580>"