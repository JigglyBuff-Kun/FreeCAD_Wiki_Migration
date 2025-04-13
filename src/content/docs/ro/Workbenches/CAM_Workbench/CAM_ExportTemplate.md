---
title: Path Export ca Șablon
---

|                                                       |
| ----------------------------------------------------- |
| Path ExportTemplate                                   |
| Menu location                                         |
| Path → Export Template                                |
| Workbenches                                           |
| [Path](/Path_Workbench "Path Workbench")              |
| Default shortcut                                      |
| _None_                                                |
| Introduced in version                                 |
| -                                                     |
| See also                                              |
| [Path SetupSheet](/Path_SetupSheet "Path SetupSheet") |
|                                                       |

## Descriere

Exportul de șabloane de lucru oferă un mecanism convenabil pentru salvarea definițiilor de lucrări utilizate în mod obișnuit într-o lucrare existentă. Acest lucru facilitează configurarea viitoarelor locuri de muncă, care sunt în mare parte similare, permițând importul de șabloane de locuri de muncă în timpul procesului de creare a locurilor de muncă.

Tab-ul Edit->Preferences...->Path->Job Preferences tab, Defaults->Template definește șablonul predefinit.

## Utilizare

Crearea unui Șablon

1. Din interiorul oricărui Job configurat, invokați comanda ![](/images/Path-ExportTemplate.png) [Export Template](/Path_ExportTemplate "Path ExportTemplate") din Path->menu, sau prin right-clicking nodul Job în vizualizarea Combo .
2. Selectați elementele pentru incizie din dialogul de configurare a Export Template .
3. Click OK și salvați șablonul. Numele Șablonului trebuie să urmeze modelul job\_<template name>.json Când este afișat în combobox de selectare, job\_ prefix și extensia vor fi afișate. Accesul în Atelierul Path necesită salvarea modelelor în Directorul Macro sau Directorul Path, așa cum sunt configurate în Path Preferences.

## Opţiuni

## Post Processing

## Post Procesare

- Selectarea Postprocessorului
- Argumentele Postprocesorului
- Numele fișierului rezultat

## Stock

## Stock

- Extent: Stock Size
- Placement: Stock Location

## Setup Sheet

## Setare Foaie

- Operation Heights
- Operation Depths
- Tool Rapid Speeds

## Tool controllers

## Controlerele de instrumente

- Controlere de scule selectate.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ExportTemplate/ro&oldid=1386368>"
