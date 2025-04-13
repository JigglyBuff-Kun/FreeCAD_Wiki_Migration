---
title: Fixação
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
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

## Description

The tool ![](/images/CAM_Fixture.svg) [Fixture](/CAM_Fixture "CAM Fixture") sets the Work Offset Coordinate Fixture of the machine CNC controller.

Target Work Offset Coordinates typically include: Fixtures G53 to G59. The G-code is simply the Fixture (G53, G54, etc...). The coordinate offset fixtures represent:

* G53 → Machine coordinate system.
* G54 → Scratchpad coordinate system.
* G55 to G59.9 → Coordinate fixtures allowing work offsets, relative to Homing switches located on the CNC machine, to be used.

The G59 Fixture is used to expand available fixtures. The degree of expansion implemented is CNC machine specific, and this command allows provides for G59.1 to G59.9.

## Usage

1. Press the ![](/images/CAM_Fixture.svg) [Fixture](/CAM_Fixture "CAM Fixture") button or use the P then F keyboard shortcut.
2. Select the desired Work Offset Fixture from the drop-menu.

## Properties

* Dados**Fixture**: Sets the current fixture point
* Dados**Active**: Defines if this command is active or not when inserted into a compound

## Notes

## Limitations

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Fixture/pt-br&oldid=1386427>"