---
title: Std ProjekteZusammenführen
---

|                                    |
| ---------------------------------- |
| Std ProjekteZusammenführen         |
| Menüeintrag                        |
| Datei → Dokument zusammenführen... |
| Arbeitsbereich                     |
| Alle                               |
| Standardtastenkürzel               |
| _Keiner_                           |
| Eingeführt in Version              |
| -                                  |
| Siehe auch                         |
| _Keiner_                           |
|                                    |

## Beschreibung

Der Befehl **Std ProjekteZusammenführen** fügt den Inhalt einer FreeCAD-Datei in das aktive Dokument ein.

## Anwendung

1. Den Menüeintrag **Datei → ![](/images/Std_MergeProjects.svg) Dokument zusammenführen...** auswählen.
2. Eine FreeCAD-Datei im Dialogfenster auswählen.
3. Die Schaltfläche Öffnen drücken.

## Optionen

- Drücke die esc-Taste oder klicke auf die Schaltfläche Abbrechen um abzubrechen.

## Hinweise

- Ein Projekt nicht mit sich selbst zusammengeführt werden. Die Auswahl der aktuellen Datei ist nicht erlaubt.
- FreeCAD ändert automatisch die internen Namen und, abhängig von den [Einstellungen](/Preferences_Editor/de#Dokument "Preferences Editor/de"), die Benennungen der Objekte, um Konflikte zu vermeiden.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um ein Projekt hinzuzufügen, wird die Methode `mergeProject` des Dokumentobjekts verwendet.

```
import FreeCAD

FreeCAD.ActiveDocument.mergeProject("Path_to_FCStd_project_file")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_MergeProjects/de&oldid=1534876>"
