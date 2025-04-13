---
title: Std Rückgängig
---

|                                                |
| ---------------------------------------------- |
| Std Rückgängig                                 |
| Menüeintrag                                    |
| Bearbeiten → Rückgängig                        |
| Arbeitsbereich                                 |
| Alle                                           |
| Standardtastenkürzel                           |
| Strg+Z                                         |
| Eingeführt in Version                          |
| -                                              |
| Siehe auch                                     |
| [Wiederherstellen](/Std_Redo/de "Std Redo/de") |
|                                                |

## Beschreibung

Der Befehl **Std Rückgängig** macht die letzte Aktion rückgängig.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Std_Undo.svg) Rückgängig drücken.
   - Den Menüeintrag **Bearbeiten → ![](/src/assets/images/Std_Undo.svg) Rückgängig** auswählen.
   - Das Tastaturkürzel Strg + Z.

## Optionen

- Um mehrere Aktionen rückgängig zu machen, auf den schwarzen Pfeil-nach-unten rechts neben der Schaltfläche ![](/src/assets/images/Std_Undo.svg) Rückgängig klicken und aus der Liste auswählen.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de").

- Die Rückgängig/Wiederherstellen-Funktionalität kann ausgeschaltet werden, indem **Bearbeiten → Einstellungen... → Allgemein → Dokument → Rückgängigmachen/Wiederholen in Dokumenten verwenden** deaktiviert wird. Aber dies wird nicht empfohlen.
- Die maximale Anzahl von Rückgängig/Wiedererstellen-Schritten wird über **Bearbeiten → Einstellungen... → Allgemein → Dokument → Maximale Rückgängigmachen/Wiederholen-Schritte** festgelegt.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um die letzte Aktion rückgängig zu machen, wird die Methode `undo` des document-Objekts verwendet. Das Gegenstück, die Methode `redo` steht auch zur Verfügung.

```
import FreeCAD

FreeCAD.ActiveDocument.undo()

```

Wenn FreeCAD im reinen Konsolenmodus (CLI) läuft, ist der Undo/Redo-Mechanismus standardmäßig deaktiviert ist. Er muss für jedes Dokument separat aktiviert werden.

```
import FreeCAD

FreeCAD.ActiveDocument.UndoMode = 1

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Undo/de&oldid=1500134>"
