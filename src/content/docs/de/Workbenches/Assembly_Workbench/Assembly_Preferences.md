---
title: Assembly Einstellungen
---
Die Einstellungen für den Arbeitsbereich ![](/images/Workbench_Assembly.svg) [Assembly](/Assembly_Workbench "Assembly Workbench") befinden sich im [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de"). Den Menüeintrag **Bearbeiten → Einstellungen...** auswählen und dann **![](/images/Workbench_Assembly.svg) Assembly**. Diese Gruppe steht nur dann zur Verfügung, wenn der Arbeitsbereich Assembly in der aktuellen FreeCAD-Sitzung geladen wurde.

Es gibt nur eine Seite: Allgemein.

![](/images/Preferences_Assembly_Page_General.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Description |
| --- | --- |
| **Esc leaves edit mode** | If checked, pressing the Esc key leaves Assembly edit mode. |
| **Log dragging steps** | If checked, the dragging steps of the solver are logged. Useful if you want to report a bug. The files are named runPreDrag.asmt and dragging.log and are located in the default directory of `std::ofstream` (on Windows it's the desktop). |
| **Ground first part** | When you [insert](/Assembly_InsertLink "Assembly InsertLink") the first part in the assembly, you can choose to ground the part automatically. The options are:  * *Ask* * *Always* * *Never* |

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_Preferences/de&oldid=1479389>"