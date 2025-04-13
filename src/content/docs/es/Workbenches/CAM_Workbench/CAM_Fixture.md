---
title: Fixtura de trayectoria
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Fixtura de trayectoria |
| Ubicación en el Menú |
| Trayectoria → Comandos Parciales → Fixtura |
| Entornos de trabajo |
| [Trayectoria](/Path_Workbench "Path Workbench") |
| Atajo de teclado por defecto |
| P F |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

Esta herramienta coloca un punto de fixtura (G53-G59) para las siguientes operaciones

Target Work Offset Coordinates typically include: Fixtures G53 to G59. The G-code is simply the Fixture (G53, G54, etc...). The coordinate offset fixtures represent:

* G53 → Machine coordinate system.
* G54 → Scratchpad coordinate system.
* G55 to G59.9 → Coordinate fixtures allowing work offsets, relative to Homing switches located on the CNC machine, to be used.

The G59 Fixture is used to expand available fixtures. The degree of expansion implemented is CNC machine specific, and this command allows provides for G59.1 to G59.9.

## Utilización

1. Presiona el boton ![](/images/Path_Fixture.png) [Fixtura](/Path_Fixture "Path Fixture")
2. Coloca la fixtura deseada

## Propiedades

* Datos**Fixtura**: Coloca el actual punto como fixtura
* Datos**Activar**: Define si este comando esta activo o no cuando es introducido a un compuesto.

## Notes

## Limitations

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Fixture/es&oldid=1386428>"