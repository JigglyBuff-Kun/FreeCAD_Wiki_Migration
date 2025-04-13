---
title: CAM ExportTemplate
---

|                                                    |
| -------------------------------------------------- |
| CAM ExportTemplate                                 |
| Menu location                                      |
| CAM → Export Template                              |
| Workbenches                                        |
| [CAM](/CAM_Workbench "CAM Workbench")              |
| Default shortcut                                   |
| _None_                                             |
| Introduced in version                              |
| -                                                  |
| See also                                           |
| [CAM SetupSheet](/CAM_SetupSheet "CAM SetupSheet") |
|                                                    |

## Description

The ![](/src/assets/images/CAM_ExportTemplate.svg) [Export Template](/CAM_ExportTemplate "CAM ExportTemplate") tool provides a convenient mechanism to save commonly used Job definitions from within an existing Job. This facilitates the setup of future Jobs, that are largely similar, by allowing Job template import during the Job creation process.

The **Edit → Preferences... → CAM → Job Preferences → Defaults → Template** sets the default template.

## Usage

1. Select the **CAM → ![](/src/assets/images/CAM_ExportTemplate.svg) Export Template** option from the menu.
2. Select elements for inclusion from the **Export Template** configuration dialog.
3. The template must be saved in the Macro directory or the CAM directory, as configured in the [CAM Preferences](/CAM_Preferences "CAM Preferences").
4. The template name must follow the pattern of job\_<template name>.json. When shown in the selection combobox, the job\_ prefix and the extension are left out.
5. Press the OK button and save the template.

## Options

## Post Processing

- Postprocessor selection
- Postprocessor arguments
- Output file name

## Stock

- Extent: Stock Size
- Placement: Stock Location

## Setup Sheet

- Operation Heights
- Operation Depths
- Tool Rapid Speeds

## Tool controllers

- Selected Tool controllers.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ExportTemplate/en&oldid=1386417>"
