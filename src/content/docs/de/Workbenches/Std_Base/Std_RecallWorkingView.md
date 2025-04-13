---
title: Std ArbeitsansichtWiederherstellen
---
|  |
| --- |
| Std ArbeitsansichtWiederherstellen |
| Menüeintrag |
| Ansicht → Standardansichten → Arbeitsansicht wiederherstellen |
| Arbeitsbereich |
| Alle |
| Standardtastenkürzel |
| End |
| Eingeführt in Version |
| 0.21 |
| Siehe auch |
| [Std ArbeitsansichtSpeichern](/Std_StoreWorkingView/de "Std StoreWorkingView/de"), [Std AnsichtenEinfrieren](/Std_FreezeViews/de "Std FreezeViews/de") |
|  |

## Beschreibung

Der Befehl **Std ArbeitsansichtWiederherstellen** stellt die gespeicherte Arbeitsansicht der aktiven [3D-Ansicht](/3D_view "3D view") wieder her. Für weitere Informationen siehe [Std ArbeitsansichtSpeichern](/Std_StoreWorkingView/de "Std StoreWorkingView/de").

## Anwendung

1. Sicherstellen, dass eine [3D-Ansicht](/3D_view/de "3D view/de") aktiv ist, für die der Befehl [Std ArbeitsansichtSpeichern](/Std_StoreWorkingView "Std StoreWorkingView") wenigstens einmal verwendet wurde.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Den Menüeintrag **Ansicht → Standardansichten → Arbeitsansicht wiederherstellen** auswählen.
   * Das Tastaturkürzel End.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Wiederherstellen der gespeicherten Arbeitsansicht der aktiven 3D-Ansicht:

```
import FreeCADGui

FreeCADGui.runCommand("Std_RecallWorkingView", 0)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_RecallWorkingView/de&oldid=1500060>"