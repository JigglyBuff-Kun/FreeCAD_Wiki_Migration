---
title: Assembly3 BaugruppeAnlegen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly3 BaugruppeAnlegen |
| Menüeintrag |
| Assembly3 → Create assembly |
| Arbeitsbereich |
| [Assembly3](/Assembly3_Workbench/de "Assembly3 Workbench/de") |
| Standardtastenkürzel |
| A N |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Assembly_New_Assembly.svg) **Assembly3 Baugruppe anlegen** fügt dem Modellbaum einen neuen Ast hinzu, ein **Assembly**-Objekt.

Jedes Astobjekt ist ein ![](/images/Assembly_Assembly_Tree.svg) **Assembly** -Container und enthält vier Gruppencontainer:

:   - Einen für die ![](/images/Assembly_Assembly_Constraints_Tree.svg) **Bedingungen** (welcher ausgeblendet ist, solange er leer ist)
:   - Einen für die ![](/images/Assembly_Assembly_Element_Tree.svg) **Elemente**
:   - Einen für die ![](/images/Assembly_Assembly_Part_Tree.svg) **Part-Objekte**
:   - Einen für die ![](/images/Assembly_Assembly_Relation_Tree.svg) **Beziehungen** (welcher standardmäßig ausgeblendet ist und der eingeblendet wird, sobald der Befehl ![](/images/Assembly_GotoRelation.svg) [Zur Beziehung gehen](/Assembly3_GoToRelation/de "Assembly3 GoToRelation/de") verwendet wurde)

Das hinzugefügte **Assembly**-Objekt mit allen sichtbaren Containern sieht so aus (0.20.pre and Link Branch):

![](/images/Assembly3_Example-Tree-07.png) ![](/images/Assembly3_Example-Tree-08.png)

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Assembly_New_Assembly.svg) Baugruppe anlegen drücken.
   * Den Menüeintrag **Assembly3 → ![](/images/Assembly_New_Assembly.svg) Baugruppe anlegen** auswählen.
2. Das Tastaturkürzel A dann N
3. Ein Assembly-Container wird erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_CreateAssembly/de&oldid=1508550>"