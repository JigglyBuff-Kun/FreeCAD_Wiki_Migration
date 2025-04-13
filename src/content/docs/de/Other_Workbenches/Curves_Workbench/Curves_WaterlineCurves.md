---
title: Curves WaterlineCurves/de
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves WaterlineCurves |
| Menu location |
| Surfaces → WaterLine |
| Workbenches |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Beschreibung

The ![](/images/Curves_WaterlineCurves.svg) **Curves WaterlineCurves** tool creates waterline curves on selected faces.

## Anwendung

1. Select one or more faces and/or objects.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Curves_WaterlineCurves.svg) [WaterLine](/Curves_WaterlineCurves "Curves WaterlineCurves") button.
   * Select the **Surfaces → ![](/images/Curves_WaterlineCurves.svg) WaterLine** option from the menu.
3. One collective **Waterline** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to change the number of waterlines and adjust their orientation (see Properties below).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Waterline**-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Settings

* Daten**Direction** (`Vector`): Axis of the cutting planes
* Daten**Number** (`Integer`): The number of waterlines

Source

* Daten**Source** (`LinkSubList`): The source face or object

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_WaterlineCurves/de&oldid=1568624>"