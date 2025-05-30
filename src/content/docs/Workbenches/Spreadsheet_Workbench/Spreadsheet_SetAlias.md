---
title: Spreadsheet SetAlias
---

|                                                               |
| ------------------------------------------------------------- |
| Spreadsheet SetAlias                                          |
| Menu location                                                 |
| -                                                             |
| Workbenches                                                   |
| [Spreadsheet](/Spreadsheet_Workbench "Spreadsheet Workbench") |
| Default shortcut                                              |
| Ctrl+Shift+A                                                  |
| Introduced in version                                         |
| 0.17                                                          |
| See also                                                      |
| _None_                                                        |
|                                                               |

## Description

The ![](/images/Spreadsheet_SetAlias.svg) **Spreadsheet SetAlias** tool opens a dialog to set up an alias for a cell. Instead of using the exact cell name like A2, B3, or C4, a custom name can be used.

## Usage

1. Make sure there is an active [spreadsheet](/Spreadsheet_CreateSheet "Spreadsheet CreateSheet").
2. Select a cell.
3. There are several ways to invoke the tool:
   - Press the ![](/images/Spreadsheet_SetAlias.svg) [Set alias](/Spreadsheet_SetAlias "Spreadsheet SetAlias") button.
   - Use the keyboard shortcut: Ctrl+Shift+A.
4. Enter an alias:
   - Only alphanumeric characters and underscores (`A` to `Z`, `a` to `z`, `0` to `9` and `_`) are allowed.
   - The first character must be a letter.
   - Using 1 or 2 capital letters followed by 1 to 5 numbers, for example `AB123`, is not allowed as this is considered a cell address.
   - Character sequences that are units are not allowed. For example `W` is an invalid alias as it is the unit for [Watt](https://en.wikipedia.org/wiki/Watt). Since FreeCAD supports many units it is best to avoid short aliases. See [Expressions](/Expressions#Units "Expressions").
   - Using the mathematical constants `pi` and `e` as aliases will lead to errors and should be avoided.
   - Do not use spaces in aliases as they will also lead to errors.

Retrieved from "<http://wiki.freecad.org/index.php?title=Spreadsheet_SetAlias/en&oldid=1506901>"
