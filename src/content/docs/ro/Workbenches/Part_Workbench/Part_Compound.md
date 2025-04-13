---
title: Part Make Compound
---
|  |
| --- |
| Part Compound ‏‎ |
| Menu location |
| Part → Make compound |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

## Introducere

Aceată comandă creează un compus/compound din orice forme toplogice.
Acestea por fi de tip solid sau plasă cu ochiuri de discretizare sau orice fel de forme topologice.

## Usage

## Utilizare

Marcați formele toplogice care trebuie adăugate la compound în vizualizarea arborecentă și alegeți **Part → Compound → Make Compound**

## Notes

## Notă

**Warning**  
Un compus/compound care conține piese care se intersectează sau atinge este **invalid** pentru operațiile booleene. Din cauza problemelor legate de performanță, nu se face verificarea dacă se intersectează piesele . Verificarea geometriei automate (disponibilă pentru operațiile Boolean) este dezactivată și pentru compusul pieselor.

To turn this check on go to **Tools → Edit Parameters → Preferences... → Mod → Part → CheckGeometry → RunBOPCheck** and set the parameter to `true`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Compound/ro&oldid=1466646>"