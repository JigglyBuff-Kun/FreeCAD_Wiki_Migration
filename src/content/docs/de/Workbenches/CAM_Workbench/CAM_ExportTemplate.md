---
title: CAM VorlageExportieren
---
|  |
| --- |
| CAM ExportVorlage |
| Menüeintrag |
| CAM → Export Vorlage |
| Arbeitsbereich |
| [CAM](/CAM_Workbench/de "CAM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [CAM Einrichtungsblatt](/CAM_SetupSheet "CAM SetupSheet") |
|  |

## Beschreibung

Das Werkzeug ![](/images/CAM_ExportTemplate.svg) CAM VorlageExportieren enthält einen bequemen Mechanismus zum Speichern häufig verwendeter Auftragsdefinitionen aus einem bestehenden Auftrag heraus. Dies erleichtert die Einrichtung zukünftiger Aufträge, die weitgehend ähnlich sind, indem der Import von Auftragsvorlagen während des Prozesses der Auftragserstellung ermöglicht wird.

Der **Bearbeiten → Voreinstellungen... → CAM → Auftragseinstellungen → Standardwerte → Vorlage** legt die Standardvorlage fest.

## Anwendung

1. Select the **CAM → ![](/images/CAM_ExportTemplate.svg) Export Template** option from the menu.
2. Select elements for inclusion from the **Export Template** configuration dialog.
3. The template must be saved in the Macro directory or the CAM directory, as configured in the [CAM Preferences](/CAM_Preferences "CAM Preferences").
4. The template name must follow the pattern of job\_<template name>.json. When shown in the selection combobox, the job\_ prefix and the extension are left out.
5. Press the OK button and save the template.

## Optionen

## Post Processing

* Postprocessor selection
* Postprocessor arguments
* Output file name

## Stock

* Extent: Stock Size
* Placement: Stock Location

## Setup Sheet

* Operation Heights
* Operation Depths
* Tool Rapid Speeds

## Tool controllers

* Selected Tool controllers.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ExportTemplate/de&oldid=1393476>"