---
title: Assembly3 BogenLinieTangente
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 Bogen-Linie-Tangente |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Assembly_ConstraintArcLineTangent.svg) [BogenLinieTangente](/Assembly3_ConstraintArcLineTangent "Assembly3 ConstraintArcLineTangent") verbindet zwei Objekte eines Zusammenbaus. Die gewählten Elemente der einzelnen Objekte oder präziser ihre lokalen Koordinatensysteme (LKS) werden genutzt, um ein Objekt im Verhältnis zu einem anderen Objekt zu positionieren.

```
 Da das Werkzeug nicht funktionieren wollte, gibt es hier nur die Aussage der QuickInfo:

```

Add an "Arc line tangent" constraint to make a line tangent to an arc at the start or end point of the arc.

## Anwendung

1. Zwei Objekte in einen Zusammenbau einfügen.
2. Ein Bogenelement des einen Objekts auswählen.
3. Ein Linienelement des anderen Objekts auswählen.
4. Schaltfläche ![](/images/Assembly_ConstraintArcLineTangent.svg) Bogen-Linie-Tangente drücken.

Abhängig von der Reihenfolge der ausgewählten Linien erscheinen folgende "Fehlermeldungen":

```
Constraint "ArcLineTangent" requires the 1st element to be a circular edge
Constraint "ArcLineTangent" requires the 1st element to be an arc edge

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintArcLineTangent/de&oldid=1536568>"