---
title: Sdt Zapisz jako kopię
---
|  |
| --- |
| Std: Zapisz jako kopię |
| Lokalizacja w menu |
| Plik → Zapisz jako kopię ... |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Zapisz wszystkie jako](/Std_SaveAs/pl "Std SaveAs/pl"), [Zapisz](/Std_Save/pl "Std Save/pl") |
|  |

## Opis

Polecenie **Zapisz jako kopię** zapisuje kopię aktywnego dokument w pliku pod nową nazwą.

## Użycie

1. Wybierz z menu opcję **Plik → ![](/images/Std_SaveCopy.svg) Zapisz jako kopię ...**.
2. Wprowadź nazwę pliku w oknie dialogowym.
3. Naciśnij przycisk Zapisz.

## Opcje

* Naciśnij przycisk Esc lub przycisk Anuluj aby przerwać wykonywanie polecenia.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby zapisać kopię dokumentu, należy użyć metody `saveCopy` obiektu *document*.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SaveCopy/pl&oldid=1462186>"