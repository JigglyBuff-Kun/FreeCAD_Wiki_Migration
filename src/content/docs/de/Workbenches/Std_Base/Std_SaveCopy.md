---
title: Std KopieSpeichern
---

|                                                                                                   |
| ------------------------------------------------------------------------------------------------- |
| Std KopieSpeichern                                                                                |
| Menüeintrag                                                                                       |
| Datei → Speichern einer Kopie...                                                                  |
| Arbeitsbereich                                                                                    |
| Alle                                                                                              |
| Standardtastenkürzel                                                                              |
| C                                                                                                 |
| Eingeführt in Version                                                                             |
| -                                                                                                 |
| Siehe auch                                                                                        |
| [Std Speichern](/Std_Save/de "Std Save/de"), [Std SpeichernUnter](/Std_SaveAs/de "Std SaveAs/de") |
|                                                                                                   |

## Beschreibung

Der Befehl **Std KopieSpeichern** speichert eine Kopie des aktiven Dokuments unter einem neuen Dateinamen.

## Anwendung

1. Menüeintrag **Datei → ![](/src/assets/images/Std_SaveCopy.svg) Speichern einer Kopie...** auswählen.
2. Einen Dateinamen im Dialogfeld eingeben.
3. Schaltfläche Speichern drücken.

## Optionen

- Esc oder Schaltfläche Abbrechen drücken, um den Befehl abzubrechen.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um eine Kopie eines Dokuments zu speichern, kann man die Methode `saveCopy` des Document-Objekts verwenden.

```
import FreeCAD
from pathlib import Path

# The folder and filename we will use:
fld = 'D:/testfiles/'
fnm = fld + 'testCopy.FCStd'

# Make sure fld exists:
Path(fld).mkdir(parents=True, exist_ok=True)

doc = FreeCAD.newDocument()
doc.saveCopy(fnm)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SaveCopy/de&oldid=1500064>"
