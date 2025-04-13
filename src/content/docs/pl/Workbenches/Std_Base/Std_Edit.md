---
title: Std Edycja
---
|  |
| --- |
| Edycja |
| Lokalizacja w menu |
| Edycja → Przełącz tryb edycji |
| Środowisko pracy |
| Wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Tryb edycji dla uzytkownika](/Std_UserEditMode/pl "Std UserEditMode/pl") |
|  |

## Opis

Polecenie **Std: Edycja** aktywuje lub dezaktywuje tryb edycji obiektu.

## Użycie

1. Jeśli żaden obiekt nie znajduje się w trybie edycji: wybierz pojedynczy obiekt.
2. Wybierz z menu **Edycja → ![](/images/Std_Edit.svg) Przełącz tryb edycji**.
3. Aktywowany jest domyślny tryb edycji wybranego obiektu lub dezaktywowany dotychczasowy tryb edycji.

## Uwagi

* Niektóre narzędzia będą wyłączone *(wyszarzone)* w interfejsie użytkownika, gdy tryb edycji obiektu jest aktywny.
* Nie wszystkie typy obiektów posiadają tryb edycji.
* Funkcjonalność dostępna w trybie edycji zależy od typu obiektu.
* Tryb edycji można uruchomić również poprzez dwukrotne kliknięcie obiektu w [Widoku drzewa](/Tree_view/pl "Tree view/pl").

* Tryb edycji obiektu może być również aktywowany przez dwukrotne kliknięcie na obiekcie w [widoku drzewa](/Tree_view/pl "Tree view/pl"). W takim przypadku tryb edycji, który jest używany, może być zdefiniowany za pomocą polecenia [Std UserEditMode](/Std_UserEditMode "Std UserEditMode").

## Tworzenie skryptów

*Zobacz również:* [Automatycznie generowana dokumentacja API](https://freecad.github.io/SourceDoc/) i [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby włączyć tryb edycji obiektu należy użyć metody `setEdit` obiektu dokumentu. Ta metoda nie jest dostępna, jeśli FreeCAD jest uruchomiony w trybie konsoli.

```
import FreeCADGui

FreeCADGui.ActiveDocument.setEdit("myObjectName",0)

```

Drugim argumentem jest Tryb edycji. Dostępne są następujące opcje:

```
0 = Domyślnie
1 = Przekształcenie
2 = Przycinanie
3 = Kolor

```

Aby wyłączyć tryb edycji obiektu należy użyć metody `resetEdit` obiektu dokumentu.

```
import FreeCADGui

FreeCADGui.ActiveDocument.resetEdit()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Edit/pl&oldid=1496517>"