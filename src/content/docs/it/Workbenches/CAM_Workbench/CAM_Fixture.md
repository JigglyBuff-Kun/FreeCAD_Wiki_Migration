---
title: Path Fissaggio
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Fissaggio |
| Posizione nel menu |
| Path → Comandi parziali → Fissaggio |
| Ambiente |
| [Path](/Path_Workbench/it "Path Workbench/it") |
| Avvio veloce |
| P F |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Questo strumento imposta il dispositivo di coordinate dell'offset del lavoro del controllore CNC della macchina.
Questo strumento imposta un punto di fissaggio (G53-G59) per le successive operazioni

Target Work Offset Coordinates typically include: Fixtures G53 to G59. The G-Code is simply the Fixture (G53, G54, etc...). The coordinate offset fixtures represent:

* G53 -> Machine coordinate system.
* G54 -> Scratchpad coordinate system.
* G55 to G59.9 -> Coordinate fixtures allowing work offsets, relative to Homing switches located on the CNC machine, to be used.

The G59 Fixture is used to expand available fixtures. The degree of expansion implemented is CNC machine specific, and this command allows provides for G59.1 to G59.9.

## Utilizzo

1. Premere il pulsante ![](/images/Path_Fixture.png) [Fissaggio](/Path_Fixture/it "Path Fixture/it")
2. Impostare il fissaggio desiderato. Seleziona il Fix Offset lavoro desiderato dal menu a tendina.

## Proprietà

* Dati**Fixture**: Imposta il punto di fissaggio corrente
* Dati**Active**: Definisce se questo comando è attivo o meno quando viene inserito in un composto

## Notes

## Limitations

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Fixture/it&oldid=1386426>"