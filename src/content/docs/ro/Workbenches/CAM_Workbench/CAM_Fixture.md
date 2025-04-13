---
title: Path Punct de Fixare
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                          |
| ---------------------------------------- |
| Path Fixture                             |
| poziția meniului                         |
| Path → Partial Commands → Fixture        |
| Ateliere                                 |
| [Path](/Path_Workbench "Path Workbench") |
| scurtătură                               |
| P F                                      |
| Prezentat în versiune                    |
| -                                        |
| A se vedea, de asemenea,                 |
| _Nici unul_                              |
|                                          |

## Descriere

Acest instrument stabilește dispozitivul de decalare a lucrării de la controlerul CNC al mașinii.

Target Work Offset Coordinates în mod tipic incude: Fixtures G53 to G59. Codul G-Code este simplu Fixture (G53, G54, etc...). Coordinatele offset fixtures reprezintă:

- G53 -> Sistemul de coordonate al mașinii.
- G54 -> Scratchpad coordinate system.
- G55 to G59.9 -> Sistemele de coordonate care să permită compensările de lucru, legate de comutatoarele Homing localizate pe mașina CNC, să fie utilizate.

Fixarea G59 este utilizată pentru a extinde dispozitivele disponibile. Gradul de extindere implementat este specific mașinii CNC, iar această comandă permite prevederea pentru G59.1 până la G59.9.

## Utilizare

1. Apăsați butonul ![](/images/Path_Fixture.png) [Fixture](/Path_Fixture "Path Fixture")
2. Selectați Work Offset Fixture dorit din meniul contextual/drop-menu.

## Proprietăți

- Date**Fixture**: Setați punctul curent de fixare
- Date**Active**: Definește dacă comanda este activă sau nu când este inserată într-un compound

## Notes

## Limitations

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Fixture/ro&oldid=1386429>"
