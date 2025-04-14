---
title: Std Arbeitsbereich
---

|                          |
| ------------------------ |
| Std Arbeitsbereich       |
| Menüeintrag              |
| Ansicht → Arbeitsbereich |
| Arbeitsbereich           |
| Alle                     |
| Standardtastenkürzel     |
| _Keiner_                 |
| Eingeführt in Version    |
| -                        |
| Siehe auch               |
| _Keiner_                 |
|                          |

## Beschreibung

Der Befehl **Std Arbeitsbereich** aktiviert einen ausgewählten [Arbeitsbereich](/Workbenches/de "Workbenches/de").

![](/images/Std_Workbench_ComboBox_Icons_And_Text.png)

Die voreingestellte Arbeitsbereichsauswahl als ComboBox

![](/images/Std_Workbench_TabBar_Icons_Only.png)

Die optionale Arbeitsbereichsauswahl als Tab-Leiste (hier die Darstellung nur mit Symbolen) [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Einen Arbeitsbereich in der Combo-Ansicht oder in der Tab-Leiste ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) der Symbolleiste Arbeitsbereich auswählen.
   - Die Schaltfläche ![](/images/List-add.svg)![](/images/Toolbar_flyout_arrow.svg) in der Tab-Leiste drücken, um einen Arbeitsbereich, der in den [Voreinstellungen](/Preferences_Editor/de#Vorhandene_Arbeitsbereiche "Preferences Editor/de") deaktiviert wurde, in dem Menü auszuwählen, das geöffnet wird.
   - Einen Arbeitsbereich im Untermenü **Ansicht → Arbeitsbereich** auswählen.

## Hinweise

- Zusätzliche [Externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de") können mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") heruntergeladen werden.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de").

- Es gibt eine [Seite mit zugehörigen Einstellungen](/Preferences_Editor/de#Vorhandene_Arbeitsbereiche "Preferences Editor/de"): **Bearbeiten → Einstellungen... → Arbeitsbereiche → Vorhandene Arbeitsbereiche**. Der **Startarbeitsbereich**, die **Arbeitsbereichsauswahl** und weitere können angepasst werden. Mit der Schaltfläche ![](/images/List-add.svg)![](/images/Toolbar_flyout_arrow.svg) in der Tab-Leiste kann man über ihr Menü auf diese Seite zugreifen.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um den Arbeitsbereich zu ändern, wird die Methode `activateWorkbench` des FreeCADGui-Moduls verwendet.

```
import FreeCADGui

FreeCADGui.activateWorkbench("PartDesignWorkbench")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Workbench/de&oldid=1500156>"
