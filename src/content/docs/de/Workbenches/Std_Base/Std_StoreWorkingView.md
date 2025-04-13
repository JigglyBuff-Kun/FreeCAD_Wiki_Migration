---
title: Std ArbeitsansichtSpeichern
---
|  |
| --- |
| Std ArbeitsansichtSpeichern |
| Menüeintrag |
| View → Standardansichten → Arbeitsansicht speichern |
| Arbeitsbereich |
| Alle |
| Standardtastenkürzel |
| Shift+End |
| Eingeführt in Version |
| 0.21 |
| Siehe auch |
| [Std ArbeitsansichtWiederherstellen](/Std_RecallWorkingView/de "Std RecallWorkingView/de"), [Std AnsichtenEinfrieren](/Std_FreezeViews/de "Std FreezeViews/de") |
|  |

## Beschreibung

Der Befehl **Std ArbeitsansichtSpeichern** speichert die Kameraeinstellungen der aktiven [3D-Ansicht](/3D_view/de "3D view/de") als temporäre Arbeitsansicht. Diese Ansicht kann mit dem Befehl [Std ArbeitsansichtWiederherstellen](/Std_RecallWorkingView/de "Std RecallWorkingView/de") wiederhergestellt werden.

Jede 3D-Ansicht hat ihre eigene Arbeitsansicht. Eine neue Arbeitsansicht überschreibt die vorhandene Arbeitsansicht der aktiven 3D-Ansicht. Wird eine 3D-Ansicht geschlossen, geht ihre Arbeitsansicht verloren.

## Anwendung

1. Sicherstellen, dass eine [3D-Ansicht](/3D_view/de "3D view/de") aktiv ist.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Den Menüeintrag **Ansicht → Standardansichten → Arbeitsansicht speichern** auswählen.
   * Das Tastaturkürzel Shift+End.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Speichern der aktuellen Kameraeinstellungen der aktiven 3D-Ansicht als Arbeitsansicht:

```
import FreeCADGui

FreeCADGui.runCommand("Std_StoreWorkingView", 0)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_StoreWorkingView/de&oldid=1500068>"