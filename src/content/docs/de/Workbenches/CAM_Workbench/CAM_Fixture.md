---
title: CAM Fixture/de
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| CAM Fixture |
| Menu location |
| CAM → Supplemental Commands → Fixture |
| Workbenches |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Beschreibung

The tool ![](/images/CAM_Fixture.svg) [Fixture](/CAM_Fixture "CAM Fixture") sets the Work Offset Coordinate Fixture of the machine CNC controller.

Target Work Offset Coordinates typically include: Fixtures G53 to G59. The G-code is simply the Fixture (G53, G54, etc...). The coordinate offset fixtures represent:

* G53 → Machine coordinate system.
* G54 → Scratchpad coordinate system.
* G55 to G59.9 → Coordinate fixtures allowing work offsets, relative to Homing switches located on the CNC machine, to be used.

The G59 Fixture is used to expand available fixtures. The degree of expansion implemented is CNC machine specific, and this command allows provides for G59.1 to G59.9.

## Anwendung

1. Press the ![](/images/CAM_Fixture.svg) [Fixture](/CAM_Fixture "CAM Fixture") button or use the P then F keyboard shortcut.
2. Select the desired Work Offset Fixture from the drop-menu.

## Eigenschaften

* Daten**Fixture**: Sets the current fixture point
* Daten**Active**: Defines if this command is active or not when inserted into a compound

## Hinweise

## Einschränkungen

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Fixture/de&oldid=1406373>"