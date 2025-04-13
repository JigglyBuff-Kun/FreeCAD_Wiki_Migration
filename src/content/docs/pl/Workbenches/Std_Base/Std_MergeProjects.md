---
title: Std Scal projekt
---
|  |
| --- |
| Std: Scal projekt |
| Lokalizacja w menu |
| Plik → Połącz dokument... |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Scal projekt** dodaje zawartość pliku FreeCAD do aktywnego dokumentu.

## Użycie

1. Wybierz z menu opcję **Plik → ![](/images/Std_MergeProjects.svg) Połącz dokument...**.
2. Wprowadź nazwę pliku w oknie dialogowym.
3. Naciśnij przycisk Otwórz.

## Opcje

* Naciśnij przycisk Esc lub przycisk Anuluj aby przerwać wykonywanie polecenia.

## Uwagi

* Projekt nie może być łączony z samym sobą, wybieranie bieżącego pliku jest niedozwolone.
* FreeCAD automatycznie zmieni wewnętrzne nazwy oraz, w zależności od [preferencji](/Preferences_Editor/pl#Dokument "Preferences Editor/pl"), etykiety obiektów, aby uniknąć konfliktów nazw.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby scalić obiekt, należy użyć metody `mergeProject` obiektu *document*.

```
import FreeCAD

FreeCAD.ActiveDocument.mergeProject("Path_to_FCStd_project_file")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_MergeProjects/pl&oldid=1534540>"