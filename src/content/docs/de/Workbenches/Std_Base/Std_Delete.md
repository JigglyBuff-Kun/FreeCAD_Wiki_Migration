---
title: Std Löschen
---

|                       |
| --------------------- |
| Std Löschen           |
| Menüeintrag           |
| Bearbeiten → Löschen  |
| Arbeitsbereich        |
| Alle                  |
| Standardtastenkürzel  |
| Del                   |
| Eingeführt in Version |
| -                     |
| Siehe auch            |
| _Keiner_              |
|                       |

## Beschreibung

Der **Std Löschen** Befehl löscht die ausgewählten Objekte.

## Anwendung

1. Wähle ein oder mehrere Objekte.
   - Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Wähle die **Bearbeiten → ![](/images/Std_Delete.svg) Löschen** Option aus dem Menü.
   - Wähle die **![](/images/Std_Delete.svg) Löschen** Option

aus dem Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder dem Kontextmenü der [3D Ansicht](/3D_view/de "3D view/de").

1. - Verwende das Tastaturkürzel: Del.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um ein Objekt zu löschen, verwende die Methode `removeObject` des Dokumentobjekts.

```
import FreeCAD

FreeCAD.ActiveDocument.removeObject("myObjectName")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Delete/de&oldid=1500048>"
