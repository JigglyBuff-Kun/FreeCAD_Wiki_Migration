---
title: Std AnsichtenEinfrieren
---
|  |
| --- |
| Std AnsichtenEinfrieren |
| Menüeintrag |
| Ansicht → Ansicht einfrieren → Ansicht einfrieren |
| Arbeitsbereich |
| Alle |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Std ArbeisansichtSpeichern](/Std_StoreWorkingView/de "Std StoreWorkingView/de"), [Std ArbeitsansichtAbrufen](/Std_RecallWorkingView/de "Std RecallWorkingView/de"), [Std ViewIvIssueCamPos](/Std_ViewIvIssueCamPos/de "Std ViewIvIssueCamPos/de") |
|  |

## Einführung

FreeCAD kann Kameraeinstellungen von bis zu 50 'eigefrorenen Ansichten' speichern. Der Menüeintrag, der sich mit eingefrorenen Ansichten befasst, befindet sich im Untermenü **Ansicht → Ansicht einfrieren**. Eingefrorene Ansichten werden nicht im Dokument gespeichert und gehen beim Schließen von FreeCAD verloren, wenn sie nicht mit der Menüoption **[Ansichten speichern...](#Ansichten_speichern)** gespeichert wurden.

## Ansichten speichern

### Beschreibung

Die Menüoption **Ansichten speichern...** speichert alle vorhandenen eingefrorenen Ansichten in einer Datei mit der Erweiterung \*.cam.

### Anwendung

1. To use this option one or more frozen views must exist. A frozen view is created with the **[Freeze view](#Freeze_view)** menu option.
2. Select the **View → Freeze display → Save views...** option from the menu.
3. Enter a filename in the dialog box.
4. Press the Save button.

### Optionen

* Esc oder die Schaltfläche Cancel drücken, um den Befehl abzubrechen.

## Ansichten laden

### Beschreibung

Die Menüoption **Ansichten laden...** lädt eingefrorene Ansichten aus einer Datei mit der Erweiterung \*.cam. Alle vorhandenen eingefrorenen Ansichten werden gelöscht.

### Anwendung

1. Select the **View → Freeze display → Load views...** option from the menu.
2. Press the Yes button in the Restore views dialog box to confirm you want to lose all existing frozen views.
3. Select a file.
4. Press the Open button.

### Optionen

* If the Restore views dialog box is displayed: press Esc or the No button to abort the command.
* If the file dialog box is displayed: press Esc or the Cancel button to abort the command.

## Ansicht Einfrieren

### Beschreibung

Die Menüoption **Ansicht einfrieren** speichert die aktuellen Kameraeinstellungen (Ausrichtung, Zoom-Faktor, usw.) der [3D-Ansicht](/3D_view/de "3D view/de") in einem neuen Eintrag in der Liste der eigefrorenen Ansichten. Diese Liste kann bis zu 50 eingefrorene Ansichten enthalten.

### Anwendung

1. There are several ways to invoke this option:
   * Select the **View → Freeze display → Freeze view** option from the menu.
   * Use the keyboard shortcut: Shift+F.
2. The new frozen view can be selected in the **View → Freeze display** submenu.

## Ansichten löschen

### Beschreibung

Die Menüoption **Ansichten löschen** löscht alle vorhandenen eingefrorenen Ansichten.

### Anwendung

1. Den Menüeintrag **Ansicht → Ansicht einfrieren → Ansicht löschen** auswählen.

## Ansicht abrufen

### Beschreibung

For each frozen view a **Restore view** option is added with which it can be restored. The options are numbered: **Restore view 1** - **Restore view 50**.

### Anwendung

1. There are several ways to invoke this option:
   * Select the correct **View → Freeze display → Restore view** option from the menu.
   * For the first 9 frozen views: use the keyboard shortcut: Ctrl+1 - Ctrl+9.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_FreezeViews/de&oldid=1463058>"