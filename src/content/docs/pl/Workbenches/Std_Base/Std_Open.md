---
title: Std Otwórz
---
|  |
| --- |
| Std: Otwórz |
| Lokalizacja w menu |
| Plik → Otwórz ... |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| Ctrl+O |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Importuj](/Std_Import/pl "Std Import/pl"), [Nowy](/Std_New/pl "Std New/pl") |
|  |

## Opis

Polecenie **Std: Otwórz** otwiera plik. Jeśli plik nie jest natywnym plikiem FreeCAD *(\*.FCStd)*, jego geometria zostanie zaimportowana do nowego dokumentu. Zobacz stronę [Std: Importuj](/Std_Import/pl "Std Import/pl"), aby uzyskać więcej informacji.

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Std_Open.svg) Otwórz ....
   * Wybierz z menu opcję **Plik → ![](/images/Std_Open.svg) Otwórz ...** opcję z menu.
   * Użyj skrótu klawiaturowego: Ctrl + O.
2. Opcjonalnie wybierz odpowiedni format pliku w oknie dialogowym.
3. Wybierz plik.
4. Naciśnij przycisk Otwórz ....

## Opcje

* Naciśnij przycisk Esc lub przycisk Anuluj aby przerwać wykonywanie polecenia.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby otworzyć dokument, należy użyć metody `open(filepath)` lub metody `openDocument(filepath, [hidden=False])` aplikacji FreeCAD.

Wymienione metody tworzą i zwracają dokument oraz wczytują do niego plik projektu. Argument `filepath` musi być łańcuchem wskazującym na istniejący plik. Jeśli plik nie istnieje lub nie można go wczytać, zostanie wywołany wyjątek wejścia / wyjścia. W takim przypadku utworzony dokument zostanie zachowany, ale będzie pusty. Jeśli zostanie użyta opcja `hidden=True`, dokument nie będzie wyświetlany w GUI i nie pojawi się dla niego żadna zakładka. Umożliwia to wykonywanie automatycznych operacji na dokumencie i zamykanie go bez zakłócania pracy interfejsu użytkownika.

Przykład skryptu można znaleźć na stronie opisującej opcję [Nowy](/Std_New/pl#Tworzenie_skrypt.C3.B3w "Std New/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Open/pl&oldid=1462081>"