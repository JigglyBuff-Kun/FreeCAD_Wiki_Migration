---
title: Std Cofnij
---
|  |
| --- |
| Std: Cofnij |
| Lokalizacja w menu |
| Edycja → Cofnij |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| Ctrl+Z |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Przywróć](/Std_Redo/pl "Std Redo/pl") |
|  |

## Opis

Polecenie **Cofnij** cofa ostatnią czynność

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Wciśnij przycisk ![](/images/Std_Undo.svg) Cofnij.
   * Wybierz z menu opcję **Edycja → ![](/images/Std_Undo.svg) Cofnij**.
   * Użyj skrótu klawiszowego: Ctrl + Z.

## Opcje

* Aby cofnąć wiele czynności, kliknij na małą czarną strzałkę w dół po prawej stronie przycisku ![](/images/Std_Undo.svg) Std Cofnij i wybierz odpowiednią pozycję z listy.

## Ustawienia

Zobacz też: [Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl").

* Funkcję Cofnij / Ponów można wyłączyć, odznaczając opcję **Edycja → Preferencje... → Ogólne → Dokument → Używanie Cofnij/Ponów w dokumentach**, ale nie jest to zalecane.
* Maksymalna liczba kroków Cofnij / Ponów jest kontrolowana przez opcję **Edycja → Preferencje... → Ogólne → Dokument → Maksymalna liczba kroków Cofnij/Ponów**.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby cofnąć ostatnią czynność, należy użyć metody `undo` obiektu dokumentu. Dostępny jest też jej odpowiednik w postaci metody `redo`.

```
import FreeCAD

FreeCAD.ActiveDocument.undo()

```

Gdy FreeCAD działa w trybie czysto konsolowym *(CLI)*, mechanizm cofania / przywracania nie jest domyślnie włączony. Musi on być jawnie aktywowany dla każdego dokumentu.

```
import FreeCAD

FreeCAD.ActiveDocument.UndoMode = 1

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Undo/pl&oldid=1467048>"