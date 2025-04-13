---
title: CAM Gravieren
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| CAM Gravieren |
| Menüeintrag |
| CAM → Gravieren |
| Arbeitsbereich |
| [CAM](/CAM_Workbench/de "CAM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

The ![](/images/CAM_Engrave.svg) [Engrave](/CAM_Engrave "CAM Engrave") tool is primarily for engraving a ![](/images/Draft_ShapeString.svg) [Draft ShapeString](/Draft_ShapeString "Draft ShapeString") onto a part. However, it may be useful for other kinds of 2D.

## Anwendung

Empty

## Optionen

Empty

## Eigenschaften

### Daten

Base

* Daten**Placement**:
* Daten**Label**: User name of the object (UTF-8)

Depth

* Daten**Clearance Height**: The height needed to clear clamps and obstructions
* Daten**Final Depth**: Final Depth of Tool- lowest value in Z
* Daten**Safe Height**: The above which Rapid motions are allowed.
* Daten**Start Depth**: Starting Depth of Tool- first cut depth in Z
* Daten**Step Down**: Incremental Step Down of Tool

Path

* Daten**Active**: Make False, to prevent operation from generating code
* Daten**Base**: The base geometry for this operation
* Daten**Comment**: An optional comment for this operation
* Daten**Coolant Mode**: Coolant mode for this operation
* Daten**Cycle Time**: Estimated cycle time for this operation
* Daten**Start Vertex**: The vertex index to start the path from
* Daten**Tool Controller**: The tool controller that will be used to calculate the path
* Daten**User Label**: User assigned label

Hidden

* Daten**Base Object**:
* Daten**Base Shapes**:
* Daten**Expression Engine**:
* Daten**Label2**:
* Daten**Path**:
* Daten**Proxy**:
* Daten**Visibility**:

### View

Empty

## Scripting

*Siehe auch:* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Beispiel:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Engrave/de&oldid=1393284>"